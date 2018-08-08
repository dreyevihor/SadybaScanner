import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ScannPage } from '../scann/scann';
import { RestProvider } from '../../providers/rest/rest';


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
  token: string='';


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  login(){
    var vm = this
    this.token = '';
    this.restProvider.login({'username': this.username, 'password': this.password}).then(function(response){
      
      vm.token = response["token"];
      if(vm.token!=''){
        vm.navCtrl.push(ScannPage,
        {
          'token': vm.token,
        });
      }
    });
  	
 
  }}
