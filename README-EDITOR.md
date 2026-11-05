# Editor de proyectos — Alberto35M

Este paquete conserva la web y la configuración de GitHub/Cloudflare.

## Mejoras
- Etiquetas y ayudas del editor en español.
- Vista previa en directo: tarjeta y página de detalle usando CSS del sitio.
- Imágenes cargadas desde Decap mediante `getAsset` (incluye imágenes aún no publicadas).
- Features y galería se muestran como listas en la vista previa.
- Los campos y nombres de frontmatter no cambian, por lo que tus proyectos existentes siguen siendo compatibles.

## Publicar
1. Sustituye los archivos de tu carpeta local con los de este ZIP, sin tocar `.git`.
2. Ejecuta `npm install` si no tienes dependencias, luego `npm run build`.
3. Ejecuta `git add .`, `git commit -m "Improve Decap editor and live preview"`, `git push`.
4. Abre `/admin/` después de que Cloudflare marque Success.

## Nota
La vista previa reproduce el estilo de la tarjeta y página de detalle, pero no ejecuta el sistema de navegación/filtros. Los botones son decorativos durante la edición.
