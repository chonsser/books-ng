import {Component, Inject, OnInit} from '@angular/core';
import {Book} from '../../book';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html'
})
export class BookAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookAddComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
