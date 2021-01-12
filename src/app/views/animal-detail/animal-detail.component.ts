import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Animal } from 'src/app/core/models/interfaces/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;
  slideIndex = 1;
  
  constructor(private route: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimal(id)
      .subscribe(animal => this.animal = animal);
  }

  goBack(): void {
    this.location.back();
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let slides = document.getElementsByClassName("carousel__photo") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[this.slideIndex-1].style.display = "block";
  } 

}
