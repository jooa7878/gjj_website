import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error ...',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async signup(@Body() body: any) {
    console.log(body);
    return 'hello sign up';
  }
}
