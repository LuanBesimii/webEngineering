import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../../core/services/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  createArticleFormGroup: FormGroup;
  cities: String[] = ["gjakove", "prishtine", "mitrovic", "peje", "prizren", "gjilan", "ferizaj"];
  availability: String[] = ["yes", "no"];
  forSelector: String[] = ["both", "sale", "rent"];
  types: String[] = ["1 + 1","2 + 1","3 + 1","3 + 2","4 + 1","4 + 2","5 + 1"];
  city: any;

  constructor(private articleService: ArticleService,private router: Router) {
    this.createArticleFormGroup = new FormGroup<any>({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      for: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      available: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      filenames: new FormControl('' , Validators.required),
    });

  }

  ngOnInit(): void {
    // this.createArticleFormGroup.patchValue({
    //   title: 'title tyest',
    //   body: 'body tst',
    //   city: 'gjakove',
    //   address: 'addrasdasdasess',
    //   for: 'rent',
    //   price: '200',
    //   type: '1 + 1',
    //   available: 'yes',
    //   phone_number: '111-222-333',
    // })
  }
  onSubmit() {
    console.log(this.createArticleFormGroup.getRawValue())
    let formData = this.formGroupValueToFormData();
    console.log('after form', formData);
    this.articleService.createArticle(formData).subscribe({
      next: (data) => {
        alert(data.Message);
        this.router.navigate(["/admin/articles/list"])

      },
      error: err => {
        alert(err.message);
      }
    });

  }

  filechanged(event: any) {
    const files = event.target.files;
    const filesArray: File[] = [];
    Object.keys(files).forEach(f => {
      filesArray.push(files[f])
    })
    this.createArticleFormGroup.patchValue(
      {'filenames': filesArray}
    )
  }

  private formGroupValueToFormData(): FormData {
    const rawValue = this.createArticleFormGroup.getRawValue();
    console.log('raw',rawValue);
    let formData = new FormData();
    formData.append('title', rawValue.title);
    formData.append('body', rawValue.body);
    formData.append('city', rawValue.city);
    formData.append('address', rawValue.address);
    formData.append('for', rawValue.for);
    formData.append('price', rawValue.price);
    formData.append('type', rawValue.type);
    formData.append('available', rawValue.available === 'yes' ? '1' : '2');
    formData.append('phone_number', rawValue.phone_number);
    rawValue['filenames'].forEach((file: File) =>{
      formData.append('filenames[]', file);
    })

    return formData;
  }
}
