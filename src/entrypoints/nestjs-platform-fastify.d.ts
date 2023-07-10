import type { FastifyRequest, FastifyReply } from 'fastify'
declare module '@nestjs/platform-fastify' {
  /**
   * An alias to `Fastify.FastifyRequest` (from `fastify`).
   * @author `nestjs-types`
   */
  export type RequestFastify = FastifyRequest
  /**
   * An alias to `Fastify.FastifyReply` (from `fastify`).
   * @author `nestjs-types`
   */
  export type ResponseFastify = FastifyReply
  /**
   * @author `nestjs-types`
   */
  export type NextFunctionFastify = () => void
}
