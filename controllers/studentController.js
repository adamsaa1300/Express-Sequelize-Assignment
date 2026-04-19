const { Student } = require('../models');

exports.getAll = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

exports.getOne = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  res.json(student);
};

exports.create = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

exports.update = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  await student.update(req.body);
  res.json(student);
};

exports.remove = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  await student.destroy();
  res.json({ message: 'Deleted successfully' });
};