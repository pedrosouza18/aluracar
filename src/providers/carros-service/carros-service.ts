import { Injectable } from '@angular/core';

@Injectable()
export class CarrosServiceProvider {

  constructor() {
  }

  listar() {
    return fetch('http://192.168.40.37:8080/api/carro/listaTodos');
  }

}
