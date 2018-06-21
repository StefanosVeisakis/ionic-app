import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public apiService: ApiDataProvider) {

  }

  ionViewDidLoad(){
      this.apiService.getRemoteData();
  }

}
