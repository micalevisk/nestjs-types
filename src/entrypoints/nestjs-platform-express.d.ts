import type { Request, Response } from 'express'
declare module '@nestjs/platform-express' {
  /**
   * An alias to `Express.Request` (from `@types/express`).
   * @author `nestjs-platform-expresss`
   */
  export type RequestExpress = Request
  /**
   * An alias to `Express.Response` (from `@types/express`).
   * @author `nestjs-platform-expresss`
   */
  export type ResponseExpress = Response
}
