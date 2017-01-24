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

  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherService: WeatherService) {
  	
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WeatherPage');
  }

  ngOnInit(){
  	this.getDefaultCity();
  	this.weatherService.getWeather(this.zmw)
  		.subscribe(weather => {
  			console.log(weather);
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

}
