import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService){}

  humidity;
  tempMin;
  tempMax;
  tempAve;
  status;
  data;
  city;
  a;
  se(){
    // 5809844
    this.city = 'seattle';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      // console.log(this.city)
      console.log(handle)
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;
    });
  }

  sa(){
    this.city = 'san jose';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;

    });
  }

  bu(){
    this.city = 'burbank';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;
      });
    }

  da(){
    this.city = 'dallas';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;
      });
  }

  wa(){
    this.city = 'washington';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;
      });
  }

  ch(){
    this.city = 'chicago';
    this.data= this._httpService.retrieveTasks(this.city, (handle) => {
      this.a = (handle)
      this.humidity = handle.main.humidity;
      this.tempMin = handle.main.temp_min;
      this.tempMin = Math.floor( this.tempMin* (9/5) - 459.67);
      this.tempMax = handle.main.temp_max;
      this.tempMax = Math.floor( this.tempMax* (9/5) - 459.67);
      this.tempAve = handle.main.temp;
      this.tempAve = Math.floor( this.tempAve* (9/5) - 459.67);
      this.status = handle.weather[0].description;
      });
    }


}
