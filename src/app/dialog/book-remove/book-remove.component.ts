import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
})
export class BookRemoveComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<BookRemoveComponent>) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
