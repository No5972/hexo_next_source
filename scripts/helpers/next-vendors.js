/* global hexo */

'use strict';

hexo.extend.helper.register('js_vendors', function() {
  const { config, theme } = this;
  const vendors = {
    anime: 'lib/anime.min.js'
  };
  if (config.prismjs.enable && !config.prismjs.preprocess) {
    vendors.prism = '//unpkg.com/prismjs@1/components/prism-core.min.js';
    vendors.prism_autoloader = '//unpkg.com/prismjs@1/plugins/autoloader/prism-autoloader.min.js';
    if (config.prismjs.line_number) {
      vendors.prism_line_numbers = '//unpkg.com/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js';
    }
  }
  if (theme.pjax) {
    vendors.pjax = '//cdn.jsdelivr.net/gh/next-theme/pjax@0/pjax.min.js';
  }
  if (theme.fancybox) {
    vendors.jquery = '//unpkg.com/jquery@3/dist/jquery.min.js';
    vendors.fancybox = '//unpkg.com/@fancyapps/fancybox@3/dist/jquery.fancybox.min.js';
  }
  if (theme.mediumzoom) {
    vendors.mediumzoom = '//unpkg.com/medium-zoom@1/dist/medium-zoom.min.js';
  }
  if (theme.lazyload) {
    vendors.lazyload = '//unpkg.com/lozad@1/dist/lozad.min.js';
  }
  if (theme.pangu) {
    vendors.pangu = '//unpkg.com/pangu@4/dist/browser/pangu.min.js';
  }
  return vendors;
});
