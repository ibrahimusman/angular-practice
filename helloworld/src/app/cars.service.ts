import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}
  getcarsdetails() {
    return [
      {
        noplate: 'ABC-123',
        model: '2019',
        color: 'black',
        price: '1000000',
        // unsplash image of different cars
        img: 'https://source.unsplash.com/1600x900/?car',
      },

      {
        noplate: 'DEF-456',
        model: '2018',
        color: 'white',
        price: '2000000',
        img: 'https://source.unsplash.com/1600x900/?bmw',
      },
      {
        noplate: 'GHI-789',
        model: '2017',
        color: 'red',
        price: '3000000',
        img: 'https://source.unsplash.com/1600x900/?audi',
      },
      {
        noplate: 'JKL-101',
        model: '2016',
        color: 'blue',
        price: '4000000',
        img: 'https://source.unsplash.com/1600x900/?mercedes',
      },
    ];
  }
}
