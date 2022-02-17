import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  cityCntrl = new FormControl();
  weather: any = {};
  showOptions = false
  constructor(public service:  WeatherService) { }

  ngOnInit(): void {
  }


  checkWeather(){
    this.service.checkWeather(this.cityCntrl.value).subscribe(res => {
      console.log('res', res);
      this.weather = res;
      this.showOptions = true
    })
  }

}
