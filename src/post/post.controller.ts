import { Controller } from '@nestjs/common';
import { Post, Req } from '@nestjs/common/decorators';
import { Request } from 'express';

@Controller('post')
export class PostController {
  @Post()
  addPost(@Req() req: Request): string {
    return `I know your name is ${req.body.name}`;
  }
}
