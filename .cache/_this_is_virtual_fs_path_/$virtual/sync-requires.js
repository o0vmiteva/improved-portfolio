
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vmiteva/dev/improved-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/vmiteva/dev/improved-portfolio/src/pages/About.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vmiteva/dev/improved-portfolio/src/pages/index.js"))
}

