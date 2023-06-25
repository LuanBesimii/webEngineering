import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperComponent} from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import {Options} from "@angular-slider/ngx-slider";

SwiperCore.use([Pagination,Navigation]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class CarouselComponent implements OnInit {
  value: number = 50000;
  highValue: number = 90000;
  value1: number = 80;
  highValue1: number = 120;
  options: Options = {
    floor: 40000,
    ceil: 180000,
    showTicks: false,
    hideLimitLabels: true,
    hidePointerLabels:true
  };

  options1: Options = {
    floor: 50,
    ceil: 130,
    showTicks: false,
    hideLimitLabels: true,
    hidePointerLabels:true
  };

  swiperConfig1: any = {
    loop: true,
    pagination: {
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    cssMode: true,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
