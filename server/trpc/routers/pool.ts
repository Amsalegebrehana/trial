import { z } from "zod";
import { publicProcedure, router } from "../trpc";
export const poolRouter = router({
  getPools: publicProcedure.query(async ({ ctx, input }) => {
    return await ctx.prisma.pool.findMany();
  }),
  addPool: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.prisma.pool.create({
        data: {
          name: input.name,
        },
      });
      return data;
    }),
});
