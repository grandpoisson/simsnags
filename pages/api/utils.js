import prisma from "lib/prisma";
import { faker } from "@faker-js/faker";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.end();

  if (req.body.task === "generate_content") {
    //create 10 users
    let usersCount = 0;

    while (usersCount < 10) {
      await prisma.user.create({
        data: {
          name: faker.name.findName(),
          username: faker.internet.userName().toLowerCase(),
          email: faker.internet.email().toLowerCase(),
          image: faker.image.avatar(),
        },
      });
      usersCount++;
    }

    const users = await prisma.user.findMany();

    const getRandomUser = () => {
      const randomIndex = Math.floor(Math.random() * users.length);
      return users[randomIndex];
    };

    //create 20 videos, randomly assigned to users
    let snagCount = 0;

    while (snagCount < 20) {
      await prisma.snag.create({
        data: {
          description: faker.lorem.words(),
          views: faker.datatype.number(1000),
          raisedBy: {
            connect: { id: getRandomUser().id },
          },
        },
      });
      snagCount++;
    }
  }

  if (req.body.task === "clean_database") {
    await prisma.user.deleteMany({});
  }

  res.end();
}
