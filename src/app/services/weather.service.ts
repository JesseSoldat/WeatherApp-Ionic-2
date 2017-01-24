import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

	apiKey: string;
	conditionsUrl: string;
	searchUrl: string;
	tempUrl: string;

	constructor(public http: Http){
		this.apiKey = 'bf4a1c65610042cf';
		this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';
		this.tempUrl = 'http://api.wunderground.com/api/437d5c1f7fafe870/conditions/q/CA/San_Francisco.json';
    this.searchUrl='http://localhost:8100/search/aq?query=';
	}

	getWeather(zmw){
		// return this.http.get(this.conditionsUrl+'/zmw:'+zmw+'.json')
        return this.http.get(this.tempUrl)

			.map(res => res.json());
	}
}