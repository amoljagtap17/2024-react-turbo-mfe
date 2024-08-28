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
    .get("/configurations", async (_req, res) => {
      try {
        const options = await prisma.configurableOption.findMany({});

        const groupedOptions = options.reduce(
          (acc, option) => {
            if (!acc[option.key]) {
              acc[option.key] = [];
            }
            acc[option.key].push({
              id: option.id,
              value: option.value,
              label: option.label,
            });
            return acc;
          },
          {} as Record<string, { id: string; value: string; label: string }[]>
        );

        return res.json(groupedOptions);
      } catch (error) {
        return res.status(500).json({
          error: "An error occurred while fetching configurable options.",
        });
      }
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
