import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class DnDClassesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    req.query['range'] = req.query['range'] || '10';
    req.query['offset'] = req.query['offset'] || '0';
    next();
  }
}
