const db = require('../../data/db-config');

const getAll = async () => {
  // return db('cars'); //without async or await
  const result = await db('cars');
  return result;
}

const getById = async (id) => {
  const result = await db('cars').where('id', id).first();
  return result;
  // return db('cars').where({ id }).first()
}

const create = () => {
  console.log("create: ")
}

module.exports = {
  getAll,
  getById,
  create
}