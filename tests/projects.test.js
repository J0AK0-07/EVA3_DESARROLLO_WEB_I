const request = require('supertest');
const app = require('../src/app');
const { sequelize, Project } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Projects API CRUD', () => {
  test('POST /projects - crea proyecto y responde 201', async () => {
    const payload = {
      name: 'Proyecto Test',
      description: 'Descripción de prueba',
      startDate: '2026-01-01',
      endDate: '2026-06-01',
      status: 'active'
    };

    const res = await request(app).post('/projects').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(payload.name);
  });

  test('GET /projects - lista proyectos (200) y estructura completa', async () => {
    const res = await request(app).get('/projects');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /projects/:id - retorna 200 o 404 según exista', async () => {
    const project = await Project.create({
      name: 'P 2', description: 'D', startDate: '2026-02-01', endDate: '2026-03-01', status: 'done'
    });

    const ok = await request(app).get(`/projects/${project.id}`);
    expect(ok.statusCode).toBe(200);

    const notFound = await request(app).get('/projects/999999');
    expect(notFound.statusCode).toBe(404);
  });

  test('PATCH /projects/:id - actualiza y devuelve 200', async () => {
    const project = await Project.create({
      name: 'P 3', description: 'D', startDate: '2026-03-01', endDate: '2026-04-01', status: 'planned'
    });

    const res = await request(app).patch(`/projects/${project.id}`).send({ status: 'active' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('active');
  });

  test('DELETE /projects/:id - elimina y devuelve 204', async () => {
    const project = await Project.create({
      name: 'P 4', description: 'D', startDate: '2026-04-01', endDate: '2026-05-01', status: 'planned'
    });

    const res = await request(app).delete(`/projects/${project.id}`);
    expect(res.statusCode).toBe(204);
  });
});
