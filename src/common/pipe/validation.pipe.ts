import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
// import * as _ from 'lodash';
import { ErrorException } from '../exception/error.exception';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      // const errorMessage = errors.map(item => {
      //   const errors = {
      //     currentKey: item.property,
      //     currentValue: item.value,
      //     message: _.values(item.constraints)[0],
      //   }
      //   return errors;
      // });
      throw new ErrorException(`json: ${JSON.stringify(errors)}`);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
