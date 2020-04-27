import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {RootUrl} from './rootUrl';
import {Flat} from '../models/flat';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  flatUrl: RootUrl;

  constructor(
    private http: HttpClient
  ) {
    this.flatUrl = new RootUrl('flat/');
  }

  getAvailableFlats() {
    console.log('DOING GET REQUEST');
    const url = this.flatUrl.rootUrl + 'available';
    console.log(url);
    return this.http.get<Flat[]>(url);
  }

  addFlat(flat: Flat): Observable<Flat> {
    console.log('DOING SET FLAT');
    const url = this.flatUrl.rootUrl + 'addFlat';
    return this.http.post<Flat>(url, flat);
  }

  addTenant(userId: string, idFlat: string) {
    console.log('ADD TENANT');
    const url = this.flatUrl.rootUrl + 'addTenant';
    return this.http.put(url, {
      tenantId: userId,
      flatId: idFlat
    });
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else  {
      console.error('Server Side Error: ', errorResponse);
    }

    return 'There was en error';
  }
  getFlatById(_id: string): Observable<Flat>{
    console.log('GET FLAT BY ID');
    const url = this.flatUrl.rootUrl + _id;
    return this.http.get<Flat>(url);
  }

  deleteFlat(_id: string) {
    console.log('DELETE FLAT');
    const url = this.flatUrl.rootUrl + _id;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
}
