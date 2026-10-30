import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      name: 'DETACH API',
      version: 'v1',
      status: 'ok',
    };
  }
}
