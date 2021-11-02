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

const create = async (car) => {
  // INSERT into cars (vin, make, model, mileage, title, transmission) values ('1234', 'toyota', 'AE86', 1337, 'clean', 'manual');
  const [id] = await db('cars').insert(car);
  return getById(id);
}

const checkVin = async (vin) => {
  const existingVin = await db('cars').where('vin', vin).first();
  return existingVin;
}

module.exports = {
  getAll,
  getById,
  create,
  checkVin
}