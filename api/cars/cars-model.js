const getAll = async () => {
  const result1 = await db('cars');
  console.log("getAll: ", result1);
}

const getById = (id) => {
  const result2 = await db('cars').where('id', id).first();
  console.log("getById: ", result2);
}

const create = () => {
  console.log("create: ")
}
