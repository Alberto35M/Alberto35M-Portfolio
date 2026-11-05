# Alberto35M Studio (beta)

Panel propio en `/studio/` para administrar proyectos del repositorio de GitHub. Mantiene Decap CMS en `/admin/` como respaldo.

## Despliegue

Copia los archivos de esta carpeta sobre tu proyecto actual **sin borrar `.git`**, ejecuta `git pull --rebase origin main` antes de copiar si hay cambios nuevos publicados desde Decap, y luego `git add .`, `git commit -m "Add Alberto35M Studio"`, `git push origin main`. Cloudflare Pages publicará `/studio/`.

## OAuth

Reutiliza el Worker OAuth configurado en `https://alberto35m-auth.luis-1301-albert.workers.dev`, que valida el usuario Alberto35M. No copies secretos al repositorio. El token OAuth se guarda únicamente en memoria en la pestaña del navegador y se pierde al recargar o cerrar la sesión.

## Funciones

- Crear, editar, eliminar proyectos `content/proyectos/*.md` mediante GitHub Contents API.
- Subir imágenes a `public/images` (hasta 8 MB).
- Vista previa Tarjeta/Página con el CSS del sitio y estructura correspondiente a las plantillas.
- Proyectos no publicados se guardan como borradores (`published: false`).

## Notas

- La vista previa replica el diseño y la estructura del sitio, pero el Markdown complejo y el render final de Eleventy pueden variar. Verifica una publicación antes de hacer cambios grandes.
- Al subir una imagen se crea un commit independiente; aparecerá en el sitio tras el despliegue de Cloudflare.
- Si otra sesión edita el mismo archivo, GitHub puede devolver un conflicto: actualiza la lista antes de volver a guardar.
- No borres `/admin/` hasta comprobar el flujo completo.
- El Worker actual debe mantener su verificación de cuenta autorizada. Los permisos de edición efectivos los aplica GitHub al token OAuth.
- El editor requiere acceso a `cdn.jsdelivr.net` para `js-yaml` y a GitHub API.
