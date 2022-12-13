const { db, Student, Campus } = require("./server/database/index.js");
const faker = require("faker");

//fake student information
let fakeFirstName = faker.name.firstName();
let fakeLastName = faker.name.lastName();
let fakeEmail = faker.internet.email();
let fakeGpa = faker.datatype.float({ min: 0.0, max: 4.0 });
let fakeImageUrl = faker.image.avatar();

// fake campus information
let fakeCampusName = faker.company.companyName();
let fakeAddress = faker.address.streetAddress();
let fakeDescription = faker.lorem.paragraph();

const seed = async () => {
  try {
    await db.sync({ force: true });

    //seed campuses
    let campusCount = 0;
    for (let i = 1; i <= 10; i++) {
      // fake campus information
      fakeCampusName = faker.company.companyName();
      fakeAddress = faker.address.streetAddress();
      fakeDescription = faker.lorem.paragraph();

      //create campus
      await Campus.create({
        name: fakeCampusName,
        address: fakeAddress,
        description: fakeDescription,
      });
      campusCount++;
    }

    //seed students
    for (let i = 1; i <= 100; i++) {
      //fake student information
      fakeFirstName = faker.name.firstName();
      fakeLastName = faker.name.lastName();
      fakeEmail = faker.internet.email();
      fakeImageUrl = faker.image.avatar();
      fakeGpa = faker.datatype.number({ min: 0.0, max: 4.0, precision: 0.1 });

      //create student
      await Student.create({
        firstName: fakeFirstName,
        lastName: fakeLastName,
        email: fakeEmail,
        imageUrl: fakeImageUrl,
        gpa: fakeGpa,
        campusId: Math.floor(Math.random() * [campusCount]) + 1,
      });
    }
    console.log("Database seeded!");
  } catch (error) {
    console.log(error);
  }
};

seed();
