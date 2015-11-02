Package.describe({
  name: 'myktra:uikit-less',
  version: '0.1.0',
  summary: 'Complete UIkit with LESS',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom('METEOR@1.2');
  api.use('less@2.5.0_1');
    
  api.addFiles([
    
    // LESS related
    'assets/less/core/variables.less',

    'assets/less/uikit-variables.less',

    // Defaults
    'assets/less/core/base.less',

    // Layout
    'assets/less/core/grid.less',
    'assets/less/core/panel.less',
    'assets/less/core/block.less',
    'assets/less/core/article.less',
    'assets/less/core/comment.less',
    'assets/less/core/cover.less',

    // Navs
    'assets/less/core/nav.less',
    'assets/less/core/navbar.less',
    'assets/less/core/subnav.less',
    'assets/less/core/breadcrumb.less',
    'assets/less/core/pagination.less',
    'assets/less/core/tab.less',
    'assets/less/core/thumbnav.less',

    // Elements
    'assets/less/core/list.less',
    'assets/less/core/description-list.less',
    'assets/less/core/table.less',
    'assets/less/core/form.less',

    // Common
    'assets/less/core/button.less',
    'assets/less/core/icon.less',
    'assets/less/core/close.less',
    'assets/less/core/badge.less',
    'assets/less/core/alert.less',
    'assets/less/core/thumbnail.less',
    'assets/less/core/overlay.less',
    'assets/less/core/animation.less',

    // JavaScript
    'assets/less/core/dropdown.less',
    'assets/less/core/modal.less',
    'assets/less/core/offcanvas.less',
    'assets/less/core/switcher.less',
    
    // extras
    'assets/less/components/accordion.less',
    'assets/less/components/autocomplete.less',
    'assets/less/components/datepicker.less',
    'assets/less/components/dotnav.less',
    'assets/less/components/form-advanced.less',
    'assets/less/components/form-file.less',
    'assets/less/components/form-password.less',
    'assets/less/components/form-select.less',
    'assets/less/components/htmleditor.less',
    'assets/less/components/nestable.less',
    'assets/less/components/notify.less',
    'assets/less/components/placeholder.less',
    'assets/less/components/progress.less',
    'assets/less/components/search.less',
    'assets/less/components/slidenav.less',
    'assets/less/components/slider.less',
    'assets/less/components/slideshow.less',
    'assets/less/components/sortable.less',
    'assets/less/components/sticky.less',
    'assets/less/components/tooltip.less',
    'assets/less/components/upload.less',
    
    // theme
    'assets/themes/almost-flat/accordion.less',
    'assets/themes/almost-flat/alert.less',
    'assets/themes/almost-flat/article.less',
    'assets/themes/almost-flat/autocomplete.less',
    'assets/themes/almost-flat/badge.less',
    'assets/themes/almost-flat/base.less',
    'assets/themes/almost-flat/block.less',
    'assets/themes/almost-flat/breadcrumb.less',
    'assets/themes/almost-flat/button.less',
    'assets/themes/almost-flat/close.less',
    'assets/themes/almost-flat/comment.less',
    'assets/themes/almost-flat/contrast.less',
    'assets/themes/almost-flat/datepicker.less',
    'assets/themes/almost-flat/description-list.less',
    'assets/themes/almost-flat/dotnav.less',
    'assets/themes/almost-flat/dropdown.less',
    'assets/themes/almost-flat/form-advanced.less',
    'assets/themes/almost-flat/form-password.less',
    'assets/themes/almost-flat/form.less',
    'assets/themes/almost-flat/grid.less',
    'assets/themes/almost-flat/htmleditor.less',
    'assets/themes/almost-flat/icon.less',
    'assets/themes/almost-flat/list.less',
    'assets/themes/almost-flat/modal.less',
    'assets/themes/almost-flat/nav.less',
    'assets/themes/almost-flat/navbar.less',
    'assets/themes/almost-flat/nestable.less',
    'assets/themes/almost-flat/notify.less',
    'assets/themes/almost-flat/offcanvas.less',
    'assets/themes/almost-flat/overlay.less',
    'assets/themes/almost-flat/pagination.less',
    'assets/themes/almost-flat/panel.less',
    'assets/themes/almost-flat/placeholder.less',
    'assets/themes/almost-flat/progress.less',
    'assets/themes/almost-flat/search.less',
    'assets/themes/almost-flat/slidenav.less',
    'assets/themes/almost-flat/sortable.less',
    'assets/themes/almost-flat/sticky.less',
    'assets/themes/almost-flat/subnav.less',
    'assets/themes/almost-flat/tab.less',
    'assets/themes/almost-flat/table.less',
    'assets/themes/almost-flat/text.less',
    'assets/themes/almost-flat/thumbnail.less',
    'assets/themes/almost-flat/thumbnav.less',
    'assets/themes/almost-flat/tooltip.less',
    //'assets/themes/almost-flat/uikit.less',
    'assets/themes/almost-flat/utility.less',
    'assets/themes/almost-flat/variables.less',

    // Need to be loaded last
    'assets/less/core/text.less',
    'assets/less/core/utility.less',
    'assets/less/core/flex.less',
    'assets/less/core/contrast.less',
    'assets/less/core/print.less',
    
    'uikit.import.less'
    
  ], 'client', { isImport: true });
  
  api.addFiles([
    'assets/js/uikit.js',
    'assets/js/components/accordion.js',
    'assets/js/components/autocomplete.js',
    'assets/js/components/datepicker.js',
    'assets/js/components/form-password.js',
    'assets/js/components/form-select.js',
    'assets/js/components/grid.js',
    'assets/js/components/htmleditor.js',
    'assets/js/components/lightbox.js',
    'assets/js/components/nestable.js',
    'assets/js/components/notify.js',
    'assets/js/components/pagination.js',
    'assets/js/components/parallax.js',
    'assets/js/components/search.js',
    'assets/js/components/slider.js',
    'assets/js/components/slideset.js',
    'assets/js/components/slideshow.js',
    'assets/js/components/slideshow-fx.js',
    'assets/js/components/sortable.js',
    'assets/js/components/sticky.js',
    'assets/js/components/timepicker.js',
    'assets/js/components/tooltip.js',
    'assets/js/components/upload.js'
  ], 'client');
  
  api.addAssets([
    'assets/fonts/FontAwesome.otf',
    'assets/fonts/fontawesome-webfont.eot',
    'assets/fonts/fontawesome-webfont.ttf',
    'assets/fonts/fontawesome-webfont.woff',
    'assets/fonts/fontawesome-webfont.woff2'
  ], 'client');
  
});
