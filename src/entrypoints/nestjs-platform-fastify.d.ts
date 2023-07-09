import type { FastifyRequest, FastifyReply } from 'fastify'
declare module '@nestjs/platform-fastify' {
  /**
   * An alias to `Fastify.FastifyRequest` (from `fastify`).
   * @author `nestjs-platform-expresss`
   */
  export type RequestFastify = FastifyRequest
  /**
   * An alias to `Fastify.FastifyReply` (from `fastify`).
   * @author `nestjs-platform-expresss`
   */
  export type ResponseFastify = FastifyReply
}
