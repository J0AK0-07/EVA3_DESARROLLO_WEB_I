const { Project } = require('../models');
const { createSchema, updateSchema } = require('../validators/projectValidator');

async function createProject(req, res, next) {
  try {
    const { error, value } = createSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ error: error.details.map(d => d.message) });

    const project = await Project.create(value);
    return res.status(201).json(project);
  } catch (err) {
    next(err);
  }
}

async function getAllProjects(req, res, next) {
  try {
    const projects = await Project.findAll();
    return res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
}

async function getProjectById(req, res, next) {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    return res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function updateProject(req, res, next) {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const { error, value } = updateSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ error: error.details.map(d => d.message) });

    await project.update(value);
    return res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function deleteProject(req, res, next) {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await project.destroy();
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
