import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './book/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookssService {

  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get("http://localhost:3006/books");
  }

  newBook(item: BookModel)
  {
    return this.http.post("http://localhost:3006/insert",{"book":item})
    .subscribe((data) => {
      console.log(data);
    });
  }
}
