import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService, Book } from '../services/store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // bookList: Array<Book> = [];
  bookList: any;
  cartItems: Array<string> = [];

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  private fetchBooks(): void {
    this.storeService.fetchBookList().subscribe((data) => {
      this.bookList = data;
    });
  }

  addToCart(bookISBN): void {
    if (!this.cartItems.includes(bookISBN)) {
      this.cartItems.push(bookISBN);
    }
  }

  checkout(): void {
    this.router.navigate(['checkout-detail']);
  }

}
