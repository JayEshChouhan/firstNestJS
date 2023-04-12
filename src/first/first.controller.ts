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
import { FirstService } from './first.service';
import { FirstDto } from './first.dto';

@ApiTags('First')
@Controller('First')
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  @Get()
  firstGet(): FirstDto[] {
    return this.firstService.getAllData();
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
  firstPost(@Body() request: FirstDto): any {
    return this.firstService.add(request);
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
