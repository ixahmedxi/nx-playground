import { createRouter } from '../trpc';
import { helloRouter } from './hello/helloRouter';

export const appRouter = createRouter({
  hello: helloRouter,
});
