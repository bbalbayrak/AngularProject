import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  getProducts(categoryId: string): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  delProducts(categoryId: string): Observable<Product[]> {
    let del = this.path;
    if (categoryId) {
      del = '?categoryId-=';
    }
    return this.http.get<Product[]>(del).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  // deleteProduct(product:Product):Observable<Product>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization':'Token'
  //     })
  //   }
  //   return this.http.delete<Product>(this.path,product,httpOptions).pipe(
  //     tap((data) => console.log(JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }


  

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Error' + err.error.message;
    } else {
      errorMessage = 'System Error';
    }
    return throwError(() => new Error(errorMessage));
  }

  
}
