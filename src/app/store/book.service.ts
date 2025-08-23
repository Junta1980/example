import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Book } from "./model";
import { debounceTime, delay } from "rxjs";

@Injectable({providedIn: 'root'})

export class bookService{
    private http = inject(HttpClient);

    getBooks() {
        return this.http.get<Book[]>('http://localhost:3000/books').pipe(
            delay(10000)
        );
    }
} 