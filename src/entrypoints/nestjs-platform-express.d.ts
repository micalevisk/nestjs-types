import type { Request as Rq } from 'express';
import type { Response as Rs } from 'express';

declare module '@nestjs/platform-express' {
  export type RequestExpress = Rq
  export type ResponseExpress = Rs
}
