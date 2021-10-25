import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor (private readonly httpService: HttpService) {}
  private API_KEY = '089ee7b5-ace8-477e-8260-892d47e5cc86';

  getHello(): string {
    return 'Hello World!';
  }

  getBreeds(breed: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    { headers: { 'x-api-key': this.API_KEY }});
  } 
}
