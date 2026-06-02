#!/usr/bin/env node
/**
 * inject-images.js
 * ─────────────────────────────────────────────────────────────────
 * Сканирует /public/images/ и автоматически встраивает найденные
 * изображения в нужные компоненты.
 *
 * Использование:
 *   node inject-images.js
 *
 * Поддерживаемые файлы:
 *   public/images/hero-bg.{jpg|png|webp}      → HeroSection
 *   public/images/about.{jpg|png|webp}         → AboutSection
 *   public/images/kit-0.{jpg|png|webp}         → Комплект "Стартовый"
 *   public/images/kit-1.{jpg|png|webp}         → Комплект "Старт+"
 *   public/images/kit-2.{jpg|png|webp}         → Комплект "Средний"
 *   public/images/kit-3.{jpg|png|webp}         → Комплект "Полный"
 *   public/images/kit-4.{jpg|png|webp}         → Комплект "Корпоративный"
 *
 * Скрипт НЕ перезаписывает файлы, где уже нет плейсхолдеров.
 * Безопасно запускать повторно.
 * ─────────────────────────────────────────────────────────────────
 */

const fs = require("fs");
const path = require("path");

// ─── Config ───────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname);
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const COMPONENTS = path.join(ROOT, "components", "sections");

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

// ─── Helpers ──────────────────────────────────────────────────────
function findImage(basename) {
  for (const ext of EXTENSIONS) {
    const full = path.join(PUBLIC_IMAGES, `${basename}.${ext}`);
    if (fs.existsSync(full)) {
      return `/images/${basename}.${ext}`;
    }
  }
  return null;
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function log(emoji, message) {
  console.log(`${emoji}  ${message}`);
}

// ─── Injection functions ──────────────────────────────────────────

/**
 * Hero section — adds <Image> as background behind overlay
 */
function injectHero(imagePath) {
  const filePath = path.join(COMPONENTS, "HeroSection.tsx");
  let src = readFile(filePath);

  if (!src.includes("IMAGE: Hero background")) {
    log("⏭", "HeroSection — изображение уже встроено, пропускаем");
    return;
  }

  // Ensure next/image import exists
  if (!src.includes("import Image from")) {
    src = src.replace(
      `"use client";`,
      `"use client";\nimport Image from "next/image";`
    );
  }

  // Replace the placeholder block
  src = src.replace(
    /\{\/\*\s*\n\s*IMAGE: Hero background[\s\S]*?\*\/\}/,
    `<Image
          src="${imagePath}"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />`
  );

  writeFile(filePath, src);
  log("✅", `HeroSection ← ${imagePath}`);
}

/**
 * About section — replaces <ImagePlaceholder> with <Image>
 */
function injectAbout(imagePath) {
  const filePath = path.join(COMPONENTS, "AboutSection.tsx");
  let src = readFile(filePath);

  if (!src.includes("IMAGE: Team or equipment close-up")) {
    log("⏭", "AboutSection — изображение уже встроено, пропускаем");
    return;
  }

  // Add Image import
  if (!src.includes("import Image from")) {
    src = src.replace(
      `"use client";`,
      `"use client";\nimport Image from "next/image";`
    );
  }

  // Remove ImagePlaceholder from ui import if it becomes unused
  // (keep it safe — only replace the usage)
  src = src.replace(
    /\{\/\*\s*\n\s*IMAGE: Team or equipment close-up[\s\S]*?\*\/\}\s*\n\s*<ImagePlaceholder[\s\S]*?\/>/,
    `<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="${imagePath}"
                  alt="Команда Вектора Полёта"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>`
  );

  writeFile(filePath, src);
  log("✅", `AboutSection ← ${imagePath}`);
}

/**
 * Equipment section — replaces kit placeholder divs with <Image>
 * Handles kit-0 through kit-4 independently
 */
function injectEquipment(foundKits) {
  if (foundKits.length === 0) return;

  const filePath = path.join(COMPONENTS, "EquipmentSection.tsx");
  let src = readFile(filePath);

  if (!src.includes("IMAGE: Kit product photo")) {
    log("⏭", "EquipmentSection — изображения уже встроены, пропускаем");
    return;
  }

  // Add Image import
  if (!src.includes("import Image from")) {
    src = src.replace(
      `"use client";`,
      `"use client";\nimport Image from "next/image";`
    );
  }

  // Replace the static placeholder div with a dynamic Image component
  // The placeholder uses index `i` — we replace with Next Image using the path array
  const kitPathsArray = JSON.stringify(foundKits);

  // Build the paths constant to inject before the component return
  const pathsConst = `\n  const kitImages: (string | null)[] = ${kitPathsArray};\n`;

  // Inject constant into component body (after the opening of the function)
  src = src.replace(
    `export function EquipmentSection() {`,
    `export function EquipmentSection() {${pathsConst}`
  );

  // Replace the placeholder div block
  src = src.replace(
    /\{\/\* Image placeholder \*\/\}\s*\n\s*<div className="aspect-\[16\/9\][\s\S]*?\{\/\*\s*\n\s*IMAGE: Kit product photo[\s\S]*?\*\/\}\s*\n\s*<span[\s\S]*?<\/span>\s*\n\s*<\/div>/,
    `{/* Kit image */}
              <div className="relative aspect-[16/9] rounded-lg mb-5 overflow-hidden bg-bg-deep/60 border border-white/05">
                {kitImages[i] ? (
                  <Image
                    src={kitImages[i]!}
                    alt={kit.tag}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="mono-tag text-text-muted text-[9px]">Фото комплекта</span>
                  </div>
                )}
              </div>`
  );

  writeFile(filePath, src);
  log(
    "✅",
    `EquipmentSection ← ${foundKits.filter(Boolean).length} из 5 фото встроено`
  );
}

// ─── Main ─────────────────────────────────────────────────────────
function main() {
  console.log("\n🚀  Вектор Полёта — инжектор изображений\n");

  if (!fs.existsSync(PUBLIC_IMAGES)) {
    fs.mkdirSync(PUBLIC_IMAGES, { recursive: true });
    log(
      "📁",
      "Создана папка public/images/ — положите изображения туда и запустите скрипт снова"
    );
    printManifest();
    return;
  }

  const files = fs.readdirSync(PUBLIC_IMAGES);
  if (files.length === 0) {
    log("📭", "Папка public/images/ пуста — изображений не найдено");
    printManifest();
    return;
  }

  log("📂", `Найдено файлов в public/images/: ${files.length}`);
  console.log("");

  let injected = 0;

  // ── Hero ──
  const heroPath = findImage("hero-bg");
  if (heroPath) {
    injectHero(heroPath);
    injected++;
  } else {
    log("⚠️ ", "hero-bg.{jpg|png|webp} — не найден, пропускаем HeroSection");
  }

  // ── About ──
  const aboutPath = findImage("about");
  if (aboutPath) {
    injectAbout(aboutPath);
    injected++;
  } else {
    log("⚠️ ", "about.{jpg|png|webp} — не найден, пропускаем AboutSection");
  }

  // ── Equipment kits ──
  const kitPaths = [0, 1, 2, 3, 4].map((n) => findImage(`kit-${n}`));
  const foundCount = kitPaths.filter(Boolean).length;
  if (foundCount > 0) {
    injectEquipment(kitPaths);
    injected++;
  } else {
    log(
      "⚠️ ",
      "kit-0…kit-4.{jpg|png|webp} — не найдены, пропускаем EquipmentSection"
    );
  }

  console.log("");
  if (injected > 0) {
    log("🎉", `Готово! Встроено блоков: ${injected}. Запустите \`npm run dev\` для проверки.`);
  } else {
    log("💤", "Ни одного изображения не встроено — проверьте имена файлов.");
  }

  console.log("");
  printManifest();
}

function printManifest() {
  console.log(`
─────────────────────────────────────────────────
 Ожидаемые имена файлов в public/images/
─────────────────────────────────────────────────
 hero-bg.jpg      → фон Hero-секции
 about.jpg        → фото в секции "О проекте"
 kit-0.jpg        → Стартовый комплект
 kit-1.jpg        → Комплект Старт+
 kit-2.jpg        → Средний комплект
 kit-3.jpg        → Полный комплект
 kit-4.jpg        → Корпоративный комплект
─────────────────────────────────────────────────
 Форматы: jpg, jpeg, png, webp, avif
 Запуск:  node inject-images.js
─────────────────────────────────────────────────
`);
}

main();
