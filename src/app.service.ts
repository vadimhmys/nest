import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create() {
    return {
      id: 1,
      name: 'John'
    };
  }
}
