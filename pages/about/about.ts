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
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
 


  constructor(public navCtrl: NavController) {}
  computeIW()    {
    this.totalheight = (this.feet * 12 - 60) + this.inches
  
  if (this.gender == "m") {
    if (this.totalheight <= 0) {
      this.robinson = 52
      this.miller = 56.2
      this.hamwi = 48.0
      this.devine = 50.0

    } else 
      this.robinson = 52 + 1.9 * this.totalheight
      this.miller = 56.2 + 1.41 * this.totalheight
      this.hamwi = 48.0 + 2.7 * this.totalheight
      this.devine = 50.0 + 2.3 * this.totalheight

  } else if (this.gender == "f") {
    if (this.totalheight <=0) {
      this.robinson = 49
      this.miller = 53.1
      this.hamwi = 45.5
      this.devine = 45.5
    } else
    this.robinson = 49 + 1.7 * this.totalheight
    this.miller = 53.1 + 1.36 * this.totalheight
    this.hamwi = 45.5 + 2.2 * this.totalheight
    this.devine = 45.5 + 2.3 * this.totalheight


  }
  Math.round(this.robinson)
  this.robinson = Math.round(this.robinson)
  Math.round(this.miller)
  this.miller = Math.round(this.miller)
  Math.round(this.hamwi)
  this.hamwi = Math.round(this.hamwi)
  Math.round(this.devine)
  this.devine = Math.round(this.devine)
 
  }

}
