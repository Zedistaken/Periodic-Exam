import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  feet: number;
  inches: number;
  totalheight: number;
  gender: string;
  m: string;
  f: string;
  robinsonM: number;
  millerM: number;
  hamwiM: number;
  devineM: number;
  robinsonF: number;
  millerF: number;
  hamwiF: number;
  devineF: number;


  constructor(public navCtrl: NavController) {}
  computeIW()    {
    this.totalheight = (this.feet * 12 - 60) + this.inches
  
  if (this,gender = "m") {
    if (this.totalheight <= 0) {
      this.robinsonM = 52
      this.millerM = 56.2
      this.hamwiM = 48.0
      this.devineM = 50.0

    } else 
      this.robinsonM = 52 + 1.9 * this.totalheight
      this.millerM = 56.2 + 1.41 * this.totalheight
      this.hamwiM = 48.0 + 2.7 * this.totalheight
      this.devineM = 50.0 + 2.3 * this.totalheight

  } else if (this,gender = "f") {
    if (this.totalheight <=0) {
      this.robinsonF = 49
      this.millerF = 53.1
      this.hamwiF = 45.5
      this.devineF = 45.5
    } else
    this.robinsonF = 49 + 1.7 * this.totalheight
    this.millerF = 53.1 + 1.36 * this.totalheight
    this.hamwiF = 45.5 + 2.2 * this.totalheight
    this.devineF = 45.5 + 2.3 * this.totalheight


  }

  }

}
