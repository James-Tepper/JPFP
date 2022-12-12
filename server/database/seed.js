const { Student, Campus, db } = require('./index.js')

const seed = async () => {
  await db.sync({ force: true })
  const students = await Promise.all([
   Student.create({ firstName: 'John', lastName: 'Doe' , email: "email1@email.com", gpa: 3.53}),
   Student.create({ firstName: 'Jane', lastName: 'Don', email: "email2@email.com", gpa: 2.24}),
   Student.create({ firstName: 'John', lastName: 'Doe', email: "email3@gmail.com"
  , gpa: 3.53})
  ])
  // await Campus.create({ name: 'Fullstack', address: '1234 Main St', description: 'THE SCHOOL' })
  // await Campus.create({ name: 'Grace Hopper', address: '432 Avenue Park St', description: 'A school' })
  db.sync()
  return students
  console.log('Seeding successful!')
}

module.exports = seed
