import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.configurableOption.createMany({
    data: [
      // Asset Types
      { key: "assetType", value: "Stock", label: "Stock" },
      { key: "assetType", value: "Bond", label: "Bond" },
      { key: "assetType", value: "RealEstate", label: "Real Estate" },
      { key: "assetType", value: "MutualFund", label: "Mutual Fund" },
      { key: "assetType", value: "ETF", label: "Exchange Traded Fund (ETF)" },
      { key: "assetType", value: "Cryptocurrency", label: "Cryptocurrency" },

      // Sectors
      { key: "sector", value: "Technology", label: "Technology" },
      { key: "sector", value: "Healthcare", label: "Healthcare" },
      { key: "sector", value: "Financials", label: "Financials" },
      { key: "sector", value: "Energy", label: "Energy" },
      {
        key: "sector",
        value: "ConsumerDiscretionary",
        label: "Consumer Discretionary",
      },
      { key: "sector", value: "Industrials", label: "Industrials" },
      { key: "sector", value: "Utilities", label: "Utilities" },
      { key: "sector", value: "RealEstate", label: "Real Estate" },
      { key: "sector", value: "Materials", label: "Materials" },
      {
        key: "sector",
        value: "CommunicationServices",
        label: "Communication Services",
      },

      // Regions
      { key: "region", value: "NorthAmerica", label: "North America" },
      { key: "region", value: "Europe", label: "Europe" },
      { key: "region", value: "AsiaPacific", label: "Asia-Pacific" },
      { key: "region", value: "LatinAmerica", label: "Latin America" },
      { key: "region", value: "MiddleEast", label: "Middle East" },
      { key: "region", value: "Africa", label: "Africa" },

      // Risk Levels
      { key: "riskLevel", value: "Low", label: "Low" },
      { key: "riskLevel", value: "Medium", label: "Medium" },
      { key: "riskLevel", value: "High", label: "High" },

      // Market Caps
      { key: "marketCap", value: "Small", label: "Small" },
      { key: "marketCap", value: "Mid", label: "Mid" },
      { key: "marketCap", value: "Large", label: "Large" },

      // Account Types
      { key: "accountType", value: "Retirement", label: "Retirement" },
      { key: "accountType", value: "Taxable", label: "Taxable" },
      { key: "accountType", value: "Education", label: "Education" },
      { key: "accountType", value: "Trust", label: "Trust" },
    ],
  });

  console.log("Seed data created successfully");
}

main()
  .then(() => {
    console.log("Seeding completed.");
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
