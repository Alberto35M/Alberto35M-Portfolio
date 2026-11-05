/* Alberto35M · Decap live preview. No publishing logic changed. */
(function () {
  if (!window.CMS || !window.React) return;
  var React = window.React;
  var h = React.createElement;
  function text(entry, field, fallback) {
    var value = entry.getIn(['data', field]);
    return value == null || value === '' ? (fallback || '') : String(value);
  }
  function list(entry, field) {
    var value = entry.getIn(['data', field]);
    if (!value) return [];
    return value.toJS ? value.toJS() : Array.isArray(value) ? value : [];
  }
  function Preview(props) {
    var entry = props.entry;
    var title = text(entry, 'title', 'Nombre del proyecto');
    var category = text(entry, 'category', 'Addon');
    var version = text(entry, 'version', '1.26+');
    var short = text(entry, 'shortDescription', 'Aquí aparecerá la descripción corta de tu tarjeta.');
    var summary = text(entry, 'summary', 'Aquí aparecerá el resumen de tu proyecto.');
    var cover = props.getAsset(text(entry, 'cover', '/images/placeholder.svg'));
    var coverURL = cover && cover.toString ? cover.toString() : '/images/placeholder.svg';
    var curseforge = text(entry, 'curseforge');
    var trailer = text(entry, 'trailer');
    var features = list(entry, 'features');
    var gallery = list(entry, 'gallery');
    var published = entry.getIn(['data', 'published']) === true;
    var featureNodes = features.filter(Boolean).map(function (v, i) {
      return h('li', { key: i }, h('span', null, '✓'), ' ', typeof v === 'string' ? v : String(v.feature || ''));
    });
    var galleryNodes = gallery.filter(Boolean).map(function (v, i) {
      var asset = props.getAsset(typeof v === 'string' ? v : String(v.image || ''));
      return h('img', {key:i,src:asset && asset.toString ? asset.toString() : '',alt:'Captura '+(i+1)});
    });
    return h('div', {className:'a35-preview'},
      h('p', {className:'preview-note'}, 'VISTA PREVIA EN DIRECTO · ', published ? 'Publicado' : 'Borrador'),
      h('p', {className:'preview-label'}, '01 / TARJETA DEL PORTAFOLIO'),
      h('div', {className:'preview-card-wrap'},
        h('article', {className:'project-card project-card-v19'},
          h('div', {className:'cover-link'},h('img',{src:coverURL,alt:'Portada de '+title})),
          h('div', {className:'card-body'},
            h('h3',null,title),
            h('p',{className:'card-description'},short),
            h('div',{className:'card-meta'},h('span',{className:'card-category'},category),h('span',{className:'card-version'},version)),
            h('div',{className:'card-actions'},h('span',{className:'card-action card-more'},'View More ↗'),
              h('span',{className:'card-action card-download'+(!curseforge?' unavailable':'')},curseforge?'Download ↓':'Coming Soon'))
          )
        )
      ),
      h('p',{className:'preview-label'},'02 / PÁGINA DEL PROYECTO'),
      h('section',{className:'detail'},
        h('span',{className:'back'},'← Back to projects'),
        h('div',{className:'detail-hero'},
          h('div',{className:'detail-cover'},h('img',{src:coverURL,alt:'Portada'})),
          h('div',{className:'detail-intro'},
            h('div',{className:'tags'},h('span',{className:'chip'},'◇ '+category),h('span',{className:'chip'},version)),
            h('h1',null,title),h('p',null,summary),
            h('div',{className:'actions'},
              curseforge?h('span',{className:'btn primary'},'↓ View on CurseForge ↗'):null,
              trailer?h('span',{className:'btn outline'},'▶ Watch trailer'):null
            )
          )
        ),
        h('div',{className:'meta-row'},
          h('div',null,h('span',null,'Version'),h('strong',null,version)),
          h('div',null,h('span',null,'Type'),h('strong',null,category)),
          h('div',null,h('span',null,'Platform'),h('strong',null,'Minecraft Bedrock'))
        ),
        h('div',{className:'section-divider'},h('span',null,'✧')),
        h('section',{className:'detail-section'},
          h('p',{className:'eyebrow'},'// INFORMATION'),h('h2',null,'Description'),
          h('div',{className:'rich-text'},props.widgetFor('body'))
        ),
        featureNodes.length?h('section',{className:'detail-section'},h('h2',null,'Features'),h('ul',{className:'features'},featureNodes)):null,
        galleryNodes.length?h('section',{className:'detail-section'},h('h2',null,'Gallery'),h('div',{className:'preview-gallery'},galleryNodes)):null
      )
    );
  }
  CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Press+Start+2P&display=swap');
  CMS.registerPreviewStyle('/assets/css/style.css');
  CMS.registerPreviewStyle('/admin/preview.css');
  CMS.registerPreviewTemplate('proyectos', Preview);
})();
