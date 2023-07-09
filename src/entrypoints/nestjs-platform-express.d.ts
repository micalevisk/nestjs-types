import type { Request, Response, NextFunction } from 'express'
declare module '@nestjs/platform-express' {
  /**
   * An alias to `Express.Request` (from `@types/express`).
   * @author `nestjs-types`
   */
  export type RequestExpress = Request
  /**
   * An alias to `Express.Response` (from `@types/express`).
   * @author `nestjs-types`
   */
  export type ResponseExpress = Response
  /**
   * An alias to `Express.NextFunction` (from `@types/express`).
   * @author `nestjs-types`
   */
  export type NextFunctionExpress = NextFunction
}
