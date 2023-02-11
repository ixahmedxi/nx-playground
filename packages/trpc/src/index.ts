import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return {
      message: 'Hello from tRPC!',
    };
  }),
});

export type AppRouter = typeof appRouter;
