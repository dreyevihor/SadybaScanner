import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ScanpagePage } from '../scanpage/scanpage';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  username: string;
  password: string;
  token: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
  	
  	
  	this.navCtrl.push(ScanpagePage);
  }
 
}