import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param('breed') breed: string): Observable<AxiosResponse<[]>> {
    return this.appService.getBreeds(breed).pipe(map(res => res.data));
  }

  @Get()
  getBreeds(): any {
    return this.appService.getBreeds('sib');
  }
}
