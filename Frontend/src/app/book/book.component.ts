import { Component, OnInit } from '@angular/core';
import { BookssService } from '../bookss.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String = "Book";

  Book = [{
    bookName : '',
    bookAuthorname : '',
    bookReleasedate : '',
    bookPrice : '',
    bookRate : '',
    bookImageurl : ''
  }]
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;

  constructor(private bookService : BookssService) { }
  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void { 
    this.bookService.getbooks().subscribe((data:any)=>{
      this.Book=JSON.parse(JSON.stringify(data));
    })
  }

}
