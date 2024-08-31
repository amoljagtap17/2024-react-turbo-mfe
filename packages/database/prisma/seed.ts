import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.deposit.deleteMany();
  await prisma.investment.deleteMany();

  for (let i = 0; i < 10; i++) {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);

    const user = await prisma.user.create({
      data: {
        avatar: faker.image.avatar(),
        email,
        firstName,
        lastName,
      },
    });

    for (let j = 0; j < 5; j++) {
      await prisma.deposit.create({
        data: {
          accountNumber: faker.finance.accountNumber({ length: 10 }),
          accountType: faker.finance.accountName(),
          amount: parseFloat(faker.finance.amount(1000, 10000, 2)),
          interestRate: parseFloat(faker.finance.amount(1, 5, 2)),
          startDate: faker.date.past(),
          maturityDate: faker.date.future(),
          userId: user.id,
        },
      });

      await prisma.investment.create({
        data: {
          investmentName: faker.company.name(),
          investmentType: faker.helpers.arrayElement([
            "Stocks",
            "Bonds",
            "Mutual Funds",
          ]),
          currentValue: parseFloat(faker.finance.amount(5000, 50000, 2)),
          purchaseDate: faker.date.past(),
          returnRate: parseFloat(faker.finance.amount(1, 15, 2)),
          sector: faker.helpers.arrayElement([
            "Technology",
            "Finance",
            "Healthcare",
          ]),
          riskLevel: faker.helpers.arrayElement(["Low", "Medium", "High"]),
          duration: faker.helpers.arrayElement([
            "Short-term",
            "Medium-term",
            "Long-term",
          ]),
          broker: faker.company.name(),
          dividendsReceived: faker.datatype.boolean(),
          capitalGainsTaxApplied: faker.datatype.boolean(),
          userId: user.id,
        },
      });
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
