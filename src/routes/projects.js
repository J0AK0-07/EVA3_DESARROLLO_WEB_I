const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

/**
 * @openapi
 * /projects:
 *   post:
 *     summary: Crea un nuevo proyecto
 *     responses:
 *       201:
 *         description: Proyecto creado
 */
router.post('/', controller.createProject);

/**
 * @openapi
 * /projects:
 *   get:
 *     summary: Lista todos los proyectos
 *     responses:
 *       200:
 *         description: Lista de proyectos
 */
router.get('/', controller.getAllProjects);

/**
 * @openapi
 * /projects/{id}:
 *   get:
 *     summary: Obtiene un proyecto por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proyecto encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', controller.getProjectById);

router.patch('/:id', controller.updateProject);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);

module.exports = router;
