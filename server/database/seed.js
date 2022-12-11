const { Student, Campus, db } = require('./index.js')

const seed = async () => {
  await db.sync({ force: true })
  await Student.create({ firstName: 'John', lastName: 'Doe' })
  await Student.create({ firstName: 'Jane', lastName: 'Don' })
  await Campus.create({ name: 'Fullstack', address: '1234 Main St', description: 'THE SCHOOL' })
  await Campus.create({ name: 'Grace Hopper', address: '432 Avenue Park St', description: 'A school' })
  
  console.log('Seeding successful!')
  db.close()
}

module.exports = seed
