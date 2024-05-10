import { Injectable } from '@angular/core';
import { DevicesList } from './devices-list';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicesListService {
  // private username = '1ADUTXWJ8EW4O4XQ';
  // private password =
  //   '93649036EA9C4BD5A98B365FB7F18AF2407CA04AA53943C1B552A5FF06CB5B23';

  // constructor(private http: HttpClient) {}

  // request(
  //   method: string,
  //   url: string,
  //   data: any,
  //   params?: any
  // ): Observable<any> {
  //   let headers = new HttpHeaders();

  //   // Encode username and password for Basic Authentication
  //   const authToken = btoa(`${this.username}:${this.password}`);
  //   headers = headers.set('Authorization', `Basic ${authToken}`);

  //   const options = {
  //     headers: headers,
  //     params: new HttpParams({ fromObject: params }),
  //   };

  //   switch (method.toUpperCase()) {
  //     case 'GET':
  //       return this.http.get(url, options);
  //     default:
  //       throw new Error('Unsupported HTTP method');
  //   }
  // }

  // getDevicesList(): Observable<DevicesList[]> {
  //   return this.request(
  //     'GET',
  //     `https://sensecap.seeed.cc/openapi/list_devices`,
  //     {}
  //   );
  // }
}
