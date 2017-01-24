import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

	apiKey: string;
	conditionsUrl: string;
	searchUrl: string;
	tempUrl: string;
	geoUrl: string;

	constructor(public http: Http){
		this.apiKey = '437d5c1f7fafe870';
		this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';

    this.searchUrl= 'http://localhost:8100/search/aq?query=';
    
	}

	getWeather(state, city){
		console.log(state, city)
		return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
			.map(res => res.json());
	}

	searchCities(searchStr){
		return this.http.get(this.searchUrl+''+searchStr)
			.map(res => res.json());
	}
}