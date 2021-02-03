import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Book} from './book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/book`);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/book/${bookId}`);
  }

  deleteBook(bookId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/book/${bookId}`);
  }

  editBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${environment.apiUrl}/book/${book.id}`, book);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.apiUrl}/book`, book);
  }

}
