module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("landing_page/photos");
  eleventyConfig.addPassthroughCopy("trekking/**/photos");
  eleventyConfig.addPassthroughCopy("biking/**/photos");
  eleventyConfig.addPassthroughCopy("traveling/**/photos");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
