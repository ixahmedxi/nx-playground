import { z } from 'zod';
import { createRouter, publicProcedure } from '../../trpc';

export const helloRouter = createRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'world'}`,
      };
    }),
});
