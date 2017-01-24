import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [WeatherService]
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  
  }

}
