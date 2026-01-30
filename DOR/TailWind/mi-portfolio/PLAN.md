# Plan: Separar y centrar secciones ABOUT, PROJECTS y CONTACT

## Información Recopilada

- **Archivo principal**: `src/App.vue`
- **Sección About**: línea ~280, tiene `py-32 border-t border-[#222] relative`
- **Sección Projects**: línea ~340, tiene `py-32 border-t border-[#222] relative`
- **Sección Contact**: línea ~400, tiene `py-32 border-t border-[#222] mb-20 relative`
- **Contenedor principal**: `max-w-5xl mx-auto px-8 pt-32 z-20` - ya está centrado

## Problema Identificado

Las tres secciones tienen `py-32` (128px de padding vertical), lo cual no proporciona suficiente separación visual entre ellas.

## Plan de Edición

### Cambios en `src/App.vue`:

1. **Sección ABOUT**:
   - Cambiar `py-32` a `py-48` (aumentar padding vertical a 192px)
   - Mantener el border-top y relative

2. **Sección PROJECTS**:
   - Cambiar `py-32` a `py-48` (aumentar padding vertical a 192px)
   - Mantener el border-top y relative

3. **Sección CONTACT**:
   - Cambiar `py-32` a `py-48` (aumentar padding vertical a 192px)
   - Mantener `mb-20` para el margen inferior

## Archivos Dependientes a Editar

- `src/App.vue` - único archivo a modificar

## Pasos de Implementación

1. Editar la sección ABOUT: `py-32` → `py-48`
2. Editar la sección PROJECTS: `py-32` → `py-48`
3. Editar la sección CONTACT: `py-32` → `py-48`

## Resultado Esperado

Las tres secciones tendrán mayor separación visual (192px vs 128px de padding), mejorando la legibilidad y el diseño visual de la página.
