import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { AppConfig } from './configuration.js';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService<AppConfig, true>) {}

  get url(): string | undefined {
    return this.configService.get('databaseUrl', { infer: true });
  }

  get isConfigured(): boolean {
    return Boolean(this.url);
  }
}
