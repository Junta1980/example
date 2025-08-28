import { Injectable } from '@angular/core';

@Injectable()
export class ProvaService {

  constructor() { }

  public getProva(): string {
    return 'prova';
  }
}
