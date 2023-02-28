import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { poolRouter } from './pool';
export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
        time: new Date(),
      };
    }),
    pool: poolRouter
  
});

// export type definition of API
export type AppRouter = typeof appRouter
