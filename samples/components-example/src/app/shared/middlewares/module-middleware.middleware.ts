import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ModuleMiddleware implements NestMiddleware {
  use(_req: any, _res: any, next: () => void) {
    console.log('Im module middleware');
    next();
  }
}
