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

	searchStr: string;
	defaultCity: string;
	results;


  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherService: WeatherService) {
  	this.results = [];
  }

  ionViewDidLoad() {
  
  }

  ngOnInit(){
  	this.getDefaultCity();
  }

  getDefaultCity(){
         
  }

  getQuery(){
  	// console.log(this.searchStr)
  	this.weatherService.searchCities(this.searchStr)
  		.subscribe(res => {
  			this.results = res.RESULTS;
  		})
  }

}
