import { Injectable } from '@nestjs/common';
import { FirstDto } from './first.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FirstService {
  private readonly Firts: FirstDto[] = [];
  getAllData() {
    return this.Firts;
  }
  add(first: FirstDto) {
    const firstData = { ...first, id: uuidv4() };
    this.Firts.push(first);
    return { _id: firstData.id };
  }
}
