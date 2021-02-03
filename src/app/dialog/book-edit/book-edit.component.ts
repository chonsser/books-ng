import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Book} from '../../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
