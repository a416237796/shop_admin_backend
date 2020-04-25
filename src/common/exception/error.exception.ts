import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorException extends HttpException {
  constructor(message: any) {
    super(message, HttpStatus.OK)
  }
}