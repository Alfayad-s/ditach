import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { AppConfig } from '../config/configuration.js';
import { DatabaseConfigService } from '../config/database-config.service.js';

export interface HealthStatus {
  status: 'ok';
  service: string;
  version: string;
  environment: string;
  timestamp: string;
  database: {
    configured: boolean;
    connected: false;
  };
}

@Injectable()
export class HealthService {
  constructor(
    private readonly configService: ConfigService<AppConfig, true>,
    private readonly databaseConfig: DatabaseConfigService,
  ) {}

  getStatus(): HealthStatus {
    return {
      status: 'ok',
      service: 'detach-api',
      version: 'v1',
      environment: this.configService.get('nodeEnv', { infer: true }),
      timestamp: new Date().toISOString(),
      database: {
        configured: this.databaseConfig.isConfigured,
        connected: false,
      },
    };
  }
}
