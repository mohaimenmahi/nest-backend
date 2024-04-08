import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)
    console.log('metadata', metadata)
    
    const parseAgeToInt = parseInt(value.age.toString())
    if(isNaN(parseAgeToInt)) {
      throw new HttpException('Invalid data type for property age', HttpStatus.BAD_REQUEST)
    } 

    return { ...value, age: parseAgeToInt }
  }
}
