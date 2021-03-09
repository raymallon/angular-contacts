import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    author = 'Ray Mallon';
    profession = 'Frontend Developer'

  constructor() { }

  ngOnInit() {
    
  }

}
