import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../../core/services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-property',
  templateUrl: './article-property.component.html',
  styleUrls: ['./article-property.component.css']
})
export class ArticlePropertyComponent implements OnInit {

  article:any ={};
  constructor(private articleService: ArticleService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.articleService.getSincleArticles(id).subscribe({
      next: (data) => {
        this.article = data["Article"];
      },
      error: err => {
        alert(err);
      }
    });
  }
  edit({id}: { id: any }) {
    this.router.navigate(['/admin/articles/edit/'+id])
  }
}
