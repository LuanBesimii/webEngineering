import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperComponent} from "swiper/angular";
import SwiperCore, {Pagination} from "swiper";
import {Options} from "@angular-slider/ngx-slider";
import {ArticleService} from "../../../core/services/article.service";
import {Article} from "../../models/article";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-deals-carousel',
  templateUrl: './deals-carousel.component.html',
  styleUrls: ['./deals-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class DealsCarouselComponent implements OnInit {
  searchArticleFormGroup: FormGroup;
  cities: String[] = ["gjakove", "prishtine", "mitrovice", "peje", "prizren", "gjilan", "ferizaj"];
  offer_types: String[] = ["both", "sale", "rent"];
  types: String[] = ["1 + 1","2 + 1","3 + 1","3 + 2","4 + 1","4 + 2","5 + 1"];
  value: number = 50000;
  highValue: number = 90000;
  value1: number = 80;
  highValue1: number = 120;
  articles: Article[] = [];
 options: Options = {
    floor: 100,
    ceil: 180000,
    showTicks: false,
    hideLimitLabels: true,
    hidePointerLabels: true
  };
  options1: Options = {
    floor: 50,
    ceil: 130,
    showTicks: false,
    hideLimitLabels: true,
    hidePointerLabels: true
  };


  swiperConfig2: any = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  constructor(private articleService: ArticleService,private cd: ChangeDetectorRef , private router:Router) {
    this.searchArticleFormGroup = new FormGroup<any>({
      slider: new FormControl([120,180]),
      price_from: new FormControl('', Validators.required),
      price_to: new FormControl('', Validators.required),
      offer_types: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
    let body = {
      price_from: 0,
      price_to: 10000000000000000,
      offer_types: null,
      city: null,
      type: null,
    }
    this.articleService.getAllSearchArticles(body).subscribe((data: any) => {
      this.articles = data.Articles.data;
    })
  }

  onSubmit() {
    const rawValue = this.searchArticleFormGroup.getRawValue();
    let body1 = {
      price_from: rawValue.slider[0],
      price_to: rawValue.slider[1],
      offer_types: rawValue.offer_types,
      city: rawValue.city,
      type: rawValue.type,
    }

     this.articleService.SearchArticles(body1).subscribe({
      next: (data:any) => {
        this.articles = data.Articles.data;
        this.cd.detectChanges();
      },
       error:err => {
        alert(err);
       }
    });
  }

  goToProperty(id: number) {
    this.router.navigate(['/admin/articles/property/'+id])
  }
}


