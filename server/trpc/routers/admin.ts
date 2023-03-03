import { z } from "zod";
import { publicProcedure, router } from "../trpc";
export const adminRouter = router({
  getAdmin: publicProcedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.admin.findUnique({
        where: {
          email: input.email,
        },
      });
      return data;
    }),
});
