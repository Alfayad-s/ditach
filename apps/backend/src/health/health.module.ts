import { Module } from '@nestjs/common';
import { DatabaseConfigService } from '../config/database-config.service.js';
import { HealthController } from './health.controller.js';
import { HealthService } from './health.service.js';

@Module({
  controllers: [HealthController],
  providers: [HealthService, DatabaseConfigService],
})
export class HealthModule {}
