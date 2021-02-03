import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {BookRemoveComponent} from '../dialog/book-remove/book-remove.component';
import {BookAddComponent} from '../dialog/book-add/book-add.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(BookAddComponent, {
      width: '300px',
      data: new Book(),
    });

    dialogRef.afterClosed().subscribe((result: Book) => {
      if (result) {
        this.bookService.addBook(result).subscribe(() => {
          this.loadBooks();
        });
      }
    });
  }
}
