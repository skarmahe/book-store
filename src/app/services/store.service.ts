import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public fetchBookList() {
    return this.http.get('http://localhost:3000/getBookList');
  }
}

export interface Book {
  title: string,
  isbn: string,
  pageCount: number,
  publishedDate: string,
  thumbnailUrl: string,
  shortDescription: string,
  longDescription: string,
  available: boolean,
  authors: Array<string>,
  categories: Array<string>
}
