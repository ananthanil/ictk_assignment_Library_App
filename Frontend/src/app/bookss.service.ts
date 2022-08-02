import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './book/book.model';
import { LoginModel } from './login/LoginModel';
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
  deletebook(id:any)
  {
    return this.http.delete("http://localhost:3006/remove/"+id);
  }
  signup(item: LoginModel)
  {
    return this.http.post("http://localhost:3006/signup",{"login":item})
    .subscribe((data) => {
      console.log(data);
    });
  }
}
