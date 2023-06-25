import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AgentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  swiperConfig2: any = {
    loop: true,
    pagination: {
      clickable: false,
    },
    navigation:{
      nextEl:'.swiper-button-next-unique',
      prevEl:'.swiper-button-prev-unique'
    },
    mousewheel: true,
    keyboard: true,
    cssMode: true,
  };
}
