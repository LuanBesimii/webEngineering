import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../../core/services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  article:any ={};
  editArticleFormGroup: FormGroup;
  localId : string ='';
  constructor(private articleService: ArticleService,private activatedRoute: ActivatedRoute) {
    this.editArticleFormGroup = new FormGroup<any>({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      for: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      available: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id)
    this.articleService.getSincleArticles(id).subscribe({
      next: (data) => {
        this.article = data["Article"];
      },
      error: err => {
        alert(err);
      }
    });
  }
  onSubmit() {
    console.log("test subimt for update")



  }

  filechanged($event: Event) {
    console.log($event)
  }
}
