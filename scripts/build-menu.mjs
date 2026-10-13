import fs from 'fs';
import path from 'path';

const PUBLIC_MENU_DIR = path.join(process.cwd(), 'public', 'menu');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'config', 'menu-generated.json');

const CATEGORIES = ['burger', 'pizza', 'fastfood'];
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.jfif'];

function cleanFilenameToTitleCase(name) {
  let cleaned = name
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
  
  return cleaned
    .split(' ')
    .map((word) => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function buildMenu() {
  const items = [];
  let counter = 1;

  for (const category of CATEGORIES) {
    const dirPath = path.join(PUBLIC_MENU_DIR, category);
    if (!fs.existsSync(dirPath)) {
      console.warn(`[build-menu] Directory not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath);

    for (const filename of files) {
      const ext = path.extname(filename).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        continue;
      }

      const filenameKey = path.basename(filename, ext);
      const fallbackName = cleanFilenameToTitleCase(filenameKey);
      const isDeal = filenameKey.toLowerCase().includes('deal');
      const encodedFilename = encodeURIComponent(filename);
      const imagePath = `/menu/${category}/${encodedFilename}`;

      items.push({
        id: `item-${counter++}`,
        filenameKey,
        category,
        imagePath,
        fallbackName,
        isDeal,
      });
    }
  }

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2), 'utf8');
  console.log(`[build-menu] Generated ${items.length} menu items in ${OUTPUT_FILE}`);
}

buildMenu();
