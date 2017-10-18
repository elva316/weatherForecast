import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import 'rxjs';

@Injectable()
export class HttpService {

  webInfo ;
  url;
  key = 'f33742ecebc85ee4326b936a90716753';
  constructor(private _http: Http) { }

  retrieveTasks(city, callback){
     this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this.key
     this._http.get(this.url).subscribe(  //for post, this._http.post(url, data), data is the json parameter
     (response) => {
       this.webInfo = response.json();
       console.log('insied server')
      //  console.log(this.webInfo)
      //  console.log(this.webInfo.main)
       callback(this.webInfo);
      //  console.log(callback(this.username))
     },
     (error) => {
       console.log(error);
       callback(error);
     }
     );
   }
}
