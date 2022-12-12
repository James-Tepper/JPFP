const {db, Student, Campus } = require('./server/database/index.js');

const seed = async () => {
  const campuses = [
    {
      name: "Fullstack",
      address: "1234 Main St",
      description: "THE SCHOOL",
    },
    {
      name: "Grace Hopper",
      address: "432 Avenue Park St",
      description: "A school",
    },
    {
      name: "Hack Reactor",
      address: "1234 Main St",
      description: "THE SCHOOL",
    },
  ];
  const students = [{
    firstName: "Jose",
    lastName: "Do",
    email: "joseDo@do.com",
    gpa: 3.0,
  },
  {
    firstName: "Steven",
    lastName: "Stevenson",
    email: "steven@steven.org",
    gpa: 3.0,
  },
  {
    firstName: "Jose",
    lastName: "Do",
    email: "fsdfasdf@gmail.com",
    gpa: 3.0,
  }];

  try {
    await db.sync({force: true});
    
    await Promise.all(campuses.map(campus => Campus.create(campus)));
    await Promise.all(students.map(student => Student.create(student)));
    
  } catch (error) {
    console.log(error);
  }
}

seed();



