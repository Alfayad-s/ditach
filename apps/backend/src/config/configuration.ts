export type AppEnvironment = 'development' | 'test' | 'production';

export interface AppConfig {
  nodeEnv: AppEnvironment;
  port: number;
  apiPrefix: string;
  corsOrigins: string[];
  databaseUrl: string | undefined;
}

export default function configuration(): AppConfig {
  const corsOrigins = (
    process.env.CORS_ORIGINS ?? 'http://localhost:3000,http://localhost:3001'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  return {
    nodeEnv:
      (process.env.NODE_ENV as AppEnvironment | undefined) ?? 'development',
    port: Number.parseInt(process.env.PORT ?? '4000', 10),
    apiPrefix: process.env.API_PREFIX ?? 'api/v1',
    corsOrigins,
    databaseUrl: process.env.DATABASE_URL || undefined,
  };
}
