import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Animal } from '../core/models/interfaces/animal';
import { ANIMALS } from '../../assets/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

  getAnimal(id: number): Observable<Animal> {
    return of(ANIMALS.find(animal => animal.id === id));
  }
}
