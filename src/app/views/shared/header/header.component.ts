import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

  toggler() {
    document.querySelector('.navbar__nav').classList.toggle("display");
    document.querySelector('.navbar__toggler').classList.toggle("display");
  }

}
