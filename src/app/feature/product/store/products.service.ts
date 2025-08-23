import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { product } from "./model";
import { debounceTime, delay } from "rxjs";

@Injectable({providedIn: 'root'})

export class productService{
    private http = inject(HttpClient);

    getBooks() {
        return this.http.get<product[]>('http://localhost:3000/products').pipe(
            delay(10000)
        );
    }
} 