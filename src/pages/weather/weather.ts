import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {

	weather;
	zmw: string;
	searchStr: string;
	results;
	state: string = 'GA';
	city: string = 'Atlanta';

  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherService: WeatherService) {
  	
  }

  ionViewDidLoad() {

  }

  ngOnInit(){
  	this.getDefaultCity();
  	this.weatherService.getWeather(this.state, this.city)
  		.subscribe(weather => {
  			// console.log(weather);
  			this.weather = weather.current_observation;
  		})
  }

  getDefaultCity(){
  	// if(localStorage.city !== undefined){
  	// 	this.zmw = JSON.parse(localStorage.city).zmw;
  	// } else {
  	// 	this.zmw = '02101.1.99999';
  	// }
  		// this.zmw = '02101.1.99999';
            this.zmw = '02101.1.99999';   
  }

  getQuery(){
  	
  	this.weatherService.searchCities(this.searchStr)
  		.subscribe(res => {
  			// console.log(res);
  			this.results = res.RESULTS
  			

  		});
  }

}
