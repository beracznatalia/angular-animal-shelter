import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  success = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event) {
    event.preventDefault();
    this.success = true;
  }

  togglerInput(id) {
    document.querySelectorAll(".inp-container input")[id].classList.add('focus');
  }

  togglerTextArea(id) {
    document.querySelectorAll(".inp-container textarea")[id].classList.add('focus');
  }

}
