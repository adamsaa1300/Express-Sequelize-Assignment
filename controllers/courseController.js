const { Course } = require('../models');

exports.getAll = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};

exports.getOne = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  res.json(course);
};

exports.create = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

exports.update = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  await course.update(req.body);
  res.json(course);
};

exports.remove = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  await course.destroy();
  res.json({ message: 'Deleted successfully' });
};