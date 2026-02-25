import { z } from "zod";

const clientEnvSchema = z.object({
  VERCEL_URL: z.url().optional().default("http://localhost:3000"),
});

export const clientEnv = clientEnvSchema.parse(process.env);
