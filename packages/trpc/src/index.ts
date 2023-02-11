import { appRouter } from './routers';

export { createContext } from './context';
export { appRouter };

// Needed to make the router type here otherwise vite compilation fails
export type AppRouter = typeof appRouter;
