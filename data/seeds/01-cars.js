exports.seed = function(knex) {
    return knex('cars').truncate()
      .then(function () {
          return knex('cars').insert([
              { vin: '22222222222222222', make: 'tesla', model: 'model 3', mileage: 13337, title: 'dirty', transmission: null },
              { vin: '33333333333333333', make: 'hyundai', model: 'genesis', mileage: 21839, title: 'clean', transmission: 'manual' },
              { vin: '44444444444444444', make: 'nissan', model: 'skyline', mileage: 92385, title: 'clean', transmission: 'manual' },
          ])
      })
}