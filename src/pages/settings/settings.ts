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

  	if(JSON.parse(localStorage.getItem('city')) !== null){
  		// console.log(localStorage.getItem('city'))
  		let temp = JSON.parse(localStorage.getItem('city'));
  		this.defaultCity = temp.name;
  		console.log(temp)
  	} else {
  		console.log('No Default City');
  	}
         
  }

  getQuery(){
  	// console.log(this.searchStr)
  	this.weatherService.searchCities(this.searchStr)
  		.subscribe(res => {
  			this.results = res.RESULTS;
  		})
  }

  setDefaultCity(city){
  	this.results = [];

  	if(typeof(Storage) !== "undefined"){
  		localStorage.setItem("city", JSON.stringify(city));
  		this.searchStr = city.name;
  		this.getDefaultCity();
  	} else {
  		console.log('LocalStorage Not Supported')
  	}
  }

  saveChanges(){
  	this.navCtrl.setRoot(WeatherPage);
  }

}
