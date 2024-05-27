import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloPmd(): string {
    return this.appService.getHello();
  }

  @Post()
  postPmd(): string {
    return this.appService.postPmd()
  }

}
