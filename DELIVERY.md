# Entrega - Evaluación Unidad 3: Gestión de Proyectos

Repositorio destino: https://github.com/J0AK0-07/EVA3_DESARROLLO_WEB_I
Rama subida: `evaluation/unidad3`
Etiqueta: `v1.0-evaluacion`

Contenido entregado:
- Código fuente completo de la API REST (Express + Sequelize).
- Validaciones con `Joi`.
- Migraciones y seeders para la tabla `Projects`.
- Dockerfile y `docker-compose.yml` para levantar Postgres y la app.
- Documentación Swagger accesible en `/docs` en ejecución.
- Tests automatizados (Jest + Supertest) con cobertura básica de CRUD.
- Logger (`winston`) y configuración con `.env.example`.
- `release.zip` con el paquete listo para entregar.

Cumplimiento de la rúbrica:
- Inserción de registros: `POST /projects` valida campos y retorna 201.
- Recuperación de datos: `GET /projects` y `GET /projects/:id` retornan 200 (404 si no existe).
- Actualización: `PATCH/PUT /projects/:id` retorna 200 con objeto actualizado.
- Eliminación: `DELETE /projects/:id` retorna 204 vacío; 404 si no existe.

Instrucciones para evaluadores:
1. Clonar el repositorio o revisar la rama `evaluation/unidad3`.
2. Opcional: usar Docker Compose para correr la base de datos y la app:

```bash
docker-compose up --build
```

3. Alternativamente, instalar dependencias y ejecutar localmente (SQLite fallback):

```bash
npm install
cp .env.example .env
npm run dev
```

4. Ejecutar pruebas:

```bash
npm test
```

Notas adicionales:
- La documentación OpenAPI está generada desde comentarios en `src/routes/projects.js` y expuesta en `/docs`.
- Si requiere que se genere un archivo adicional de evidencia (video o PDF), indícalo y lo preparo.
