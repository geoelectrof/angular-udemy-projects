import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

title: string = ""
author: string = "";
booksList: BookModel[] = []

ngOnInit(): void {
    const books = localStorage.getItem("Books")
    this.booksList = books ? JSON.parse(books) : []
}

addBook() {

  const id: number = Date.now()
  
  const newBook: BookModel = {
    id: id,
    title: this.title,
    author: this.author
  }
  this.booksList.push(newBook)

  this.title = ''
  this.author = ''

  localStorage.setItem("Books", JSON.stringify(this.booksList))

}

}
