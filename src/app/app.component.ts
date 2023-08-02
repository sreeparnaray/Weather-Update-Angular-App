import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Weather Updates';
// }


export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  weatherData ?: WeatherData;

  cityName: string = 'Asansol';

  ngOnInit(): void {

    this.getWeatherData(this.cityName);
    this.cityName="";

    
  }
  //title = 'WeatherApp';

  onSubmit(){

    this.getWeatherData(this.cityName);
    this.cityName="";


  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response) => {

        this.weatherData = response;
        console.log(response);
        
      }
    });

  }
}
