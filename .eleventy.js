const path = require('node:path');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'public/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' });
  eleventyConfig.addCollection('projects', function(api) {
    return api.getFilteredByGlob('content/proyectos/*.md').filter(p => p.data.published === true).sort((a,b) => (b.data.order||0)-(a.data.order||0));
  });
  eleventyConfig.addFilter('categoryEn', category => ({ Mapa: 'Map', Herramienta: 'Tool' }[category] || category));
  eleventyConfig.addFilter('json', obj => JSON.stringify(obj).replace(/</g, '\u003c'));
  return { dir: { input: '.', includes: 'src/_includes', output: '_site' }, templateFormats: ['njk','md','html'], markdownTemplateEngine: 'njk', htmlTemplateEngine: 'njk' };
};
