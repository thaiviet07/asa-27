#!/usr/bin/env node

/**
 * ASA Studio Build Engine
 * Compiles modular components & sections in `src/` into static distribution HTML files.
 * Zero external dependencies (uses standard Node.js).
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PAGES_DIR = path.join(SRC_DIR, 'pages');

const PAGE_MAP = {
  'index.html': ['index.html'],
  'studio.html': ['studio.html', 'studio/index.html'],
  'work.html': ['work.html', 'work/index.html'],
  'blog.html': ['blog.html', 'blog/index.html'],
  'contact.html': ['contact.html', 'contact/index.html', 'contact-1.html', 'contact-1/index.html'],
  '404.html': ['404.html']
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function compileTemplate(templatePath) {
  let content = fs.readFileSync(templatePath, 'utf8');

  // 1. Extract @meta
  let pageName = 'home';
  const metaMatch = content.match(/<!--\s*@meta([\s\S]*?)-->/);
  if (metaMatch) {
    const metaBlock = metaMatch[1];
    const pageMatch = metaBlock.match(/page:\s*(\w+)/);
    if (pageMatch) {
      pageName = pageMatch[1];
    }
    content = content.replace(metaMatch[0], '').trimStart();
  }

  // 2. Recursively resolve includes
  const includeRegex = /<!--\s*@include\s*["\x27]([^"\x27]+)["\x27]\s*-->\r?\n?/g;
  let maxDepth = 10;
  let hasIncludes = true;

  while (hasIncludes && maxDepth > 0) {
    hasIncludes = false;
    maxDepth--;
    content = content.replace(includeRegex, (match, relPath) => {
      hasIncludes = true;
      const fullPath = path.join(SRC_DIR, relPath);
      if (!fs.existsSync(fullPath)) {
        console.error(`[Build Error] Included file not found: ${relPath} (resolved to ${fullPath})`);
        return `<!-- ERROR: Missing include: ${relPath} -->`;
      }
      return fs.readFileSync(fullPath, 'utf8');
    });
  }

  // 3. Resolve active nav link attributes
  const activeAttr = ' data-framer-page-link-current="true"';
  content = content
    .replace(/{{ACTIVE_HOME}}/g, pageName === 'home' ? activeAttr : '')
    .replace(/{{ACTIVE_STUDIO}}/g, pageName === 'studio' ? activeAttr : '')
    .replace(/{{ACTIVE_WORK}}/g, pageName === 'work' ? activeAttr : '')
    .replace(/{{ACTIVE_BLOG}}/g, pageName === 'blog' ? activeAttr : '')
    .replace(/{{ACTIVE_CONTACT}}/g, pageName === 'contact' ? activeAttr : '');

  return content;
}

function build() {
  const startTime = Date.now();
  console.log('\n🔨 [ASA Studio] Building modular sections & components...');

  if (!fs.existsSync(PAGES_DIR)) {
    console.error(`Error: Pages directory not found at ${PAGES_DIR}`);
    process.exit(1);
  }

  const pageFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
  let totalOutputs = 0;

  for (const pageFile of pageFiles) {
    const srcPath = path.join(PAGES_DIR, pageFile);
    const compiled = compileTemplate(srcPath);

    const targets = PAGE_MAP[pageFile] || [pageFile];
    for (const targetRel of targets) {
      const destPath = path.join(ROOT_DIR, targetRel);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, compiled, 'utf8');
      const stat = fs.statSync(destPath);
      console.log(`   ✓ Compiled ${pageFile.padEnd(12)} ➔  ${targetRel.padEnd(24)} (${formatBytes(stat.size)})`);
      totalOutputs++;
    }
  }

  const duration = Date.now() - startTime;
  console.log(`\n✨ Build completed: ${totalOutputs} files compiled in ${duration}ms\n`);
}

if (require.main === module) {
  build();
}

module.exports = { build, compileTemplate };
