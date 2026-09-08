# Gestión de Proyectos - Evaluación Unidad 3

API REST para gestionar proyectos con operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

Requisitos mínimos:
- Node.js 18+ recomendado

Instalación:
```bash
npm install
```

Variables de entorno: copia `.env.example` a `.env` y ajusta los valores.

Ejecutar local (SQLite fallback):
```bash
npm run dev
```

Usar Docker (Postgres + app):
```bash
docker-compose up --build
```

Migraciones y seeds (si no usa Docker):
```bash
npm run migrate
npm run seed
```

Endpoints importantes:
- `POST /projects` - crear proyecto (201)
- `GET /projects` - listar proyectos (200)
- `GET /projects/:id` - obtener por id (200 / 404)
- `PATCH /projects/:id` - actualizar (200 / 404)
- `DELETE /projects/:id` - eliminar (204 / 404)

Pruebas:
```bash
npm test
```

Entregables para evaluación:
- Código fuente completo.
- Archivo `database.sqlite` generado (no se sube al repositorio si se usa .gitignore).
