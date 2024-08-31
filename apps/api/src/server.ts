import { prisma } from "@repo/database";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { type Express } from "express";
import morgan from "morgan";

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/dashboard", async (req, res) => {
      const userId: string = req.query.userId as string;

      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }

      try {
        const totalInvestments = await prisma.investment.aggregate({
          where: { userId },
          _sum: {
            currentValue: true,
          },
        });

        const totalDeposits = await prisma.deposit.aggregate({
          where: { userId },
          _sum: {
            amount: true,
          },
        });

        const investmentsByType = await prisma.investment.groupBy({
          by: ["investmentType"],
          where: { userId },
          _sum: {
            currentValue: true,
          },
        });

        const investmentsData = investmentsByType.map(item => ({
          type: item.investmentType,
          value: item._sum.currentValue || 0,
        }));

        const dashboardData = {
          totalInvestments: totalInvestments._sum.currentValue || 0,
          totalDeposits: totalDeposits._sum.amount || 0,
          investmentsByType: investmentsData,
        };

        return res.json(dashboardData);
      } catch (error) {
        return res.status(500).json({
          error: "An error occurred while fetching dashboard data.",
        });
      }
    })
    .get("/investments", async (req, res) => {
      const userId: string = req.query.userId as string;

      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }

      try {
        const investments = await prisma.investment.findMany({
          where: { userId },
          orderBy: { sector: "asc" },
        });

        return res.json(investments);
      } catch (error) {
        return res.status(500).json({
          error: "An error occurred while fetching investments data.",
        });
      }
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
