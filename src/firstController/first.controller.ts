import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('First')
@Controller('First')
export class FirstController {
  @Get()
  firstGet(): string {
    return 'This is my first NestJS Controller';
  }
  @Get(':id')
  firstGetById(@Param('id') id: string) {
    return `This is my first NestJS Controller with id: ${id}`;
  }
  @Get()
  findAll(@Query() query) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }
  @Post()
  firstPost(@Req() request: Request): string {
    return `First data created ${request}`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: any) {
    return `This action updates a #${id} cat`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
