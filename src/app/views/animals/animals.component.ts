import { Component, OnInit } from '@angular/core';
import { Animal } from '../../core/models/interfaces/animal';
import { AnimalService } from '../../services/animal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];
  name: 'animals';
  
  constructor(private animalService: AnimalService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe(
      animals => this.animals = animals
    );
  }
}
