import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import * as dayjs from 'dayjs';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const resErrors = {
      code: status,
      message: exception.message || '未知错误！',
      data: null
    }
    if (status === 200) {
      resErrors.code = 1
    }
    if (process.env.NODE === 'development') {
      resErrors['time'] = dayjs().format('YYYY-MM-DD HH:mm:ss')
      resErrors['path'] = request.url
      resErrors['method'] = request.method
    }
    Logger.error(
      `${resErrors.message} {${request.url}, ${request.method}, ${JSON.stringify(request.body)}} route`,
      (exception as any).stack,
      `HttpException`)
    response
      .status(status)
      .json(resErrors); 
  }
}
