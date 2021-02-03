import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BookRemoveComponent} from '../dialog/book-remove/book-remove.component';
import {BookService} from '../book.service';
import {Book} from '../book';
import {MatDialog} from '@angular/material/dialog';
import {BookAddComponent} from '../dialog/book-add/book-add.component';
import {BookEditComponent} from '../dialog/book-edit/book-edit.component';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html'
})
export class BookEntryComponent implements OnInit {
  @Input() book: Book;
  @Output() bookInteracted = new EventEmitter<boolean>();

  expanded = false;

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(): void {
    const dialogRef = this.dialog.open(BookRemoveComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.deleteBook(this.book.id).subscribe(() => {
          this.bookInteracted.emit(true);
        });
      }
    });
  }

  edit(): void {
    const dialogRef = this.dialog.open(BookEditComponent, {
      width: '300px',
      data: Object.assign({}, this.book),
    });

    dialogRef.afterClosed().subscribe((result: Book) => {
      if (result) {
        this.bookService.editBook(result).subscribe(() => {
          this.bookInteracted.emit(true);
        });
      }
    });
  }
}
