import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRemoveComponent } from './book-remove/book-remove.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BookAddComponent } from './book-add/book-add.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [BookRemoveComponent, BookAddComponent, BookEditComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DialogModule { }
