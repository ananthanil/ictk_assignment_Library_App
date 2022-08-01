import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String = "Product List";

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;

  constructor() { }
  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  }

}
