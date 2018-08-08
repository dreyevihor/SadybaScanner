
import { Component } from '@angular/core';
import { NavController,  NavParams, IonicPage } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { HttpHeaders } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

import { fernet } from 'fernet';

@IonicPage()
@Component({
  selector: 'page-scann',
  templateUrl: 'scann.html',
})
export class ScannPage {
	options: BarcodeScannerOptions;
	encodText: string='';
	encodedData: any={};
	scannedData: any={};
  token: string;
  headers: any={};
  status: string='start';
  secret: string='RLQHMwbjOj4ztWwPTkDTqBd3YYtF-g7S4W8bX4OItS8='

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner,
    public navParams: NavParams, public restProvider: RestProvider) {
  this.token = this.navParams.get('token')

  }


 

  scan(){
  	this.options = {
  		prompt: 'Scan you barcode'
  	};
  	this.scanner.scan().then((data) => { 
     this.scannedData = data.text;
      var vm = this
      vm.status = ''
      this.restProvider.check_ticket({'crypted_data': vm.scannedData}, {
        headers: new HttpHeaders({
          'Authorization': 'Token ' + vm.token,
        })
          }).subscribe(res => {

            
            vm.status = res['crypted_data'];
          })
		  
  	}, (err) => {
  		console.log('Error :', err);
  	})
  }
  encode(){
  	this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
  		this.encodedData = data;
  	}, (err) => {
  		console.log('Error :', err);
  	})
  }

}


