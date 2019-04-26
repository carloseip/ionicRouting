import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  slideOpts = {
    initialSlide: 1
  };

  constructor() { }

  ngOnInit() {
  }

  prev(sliders) {
    sliders.slideNext();
  }
  next(sliders) {
    sliders.slidePrev();
  }
}
