import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSelectChange} from "@angular/material/select";
import {Article} from "../../../shared/models/article";
import {articleFilter} from "../../../shared/models/article-filter";
import {MatPaginator} from "@angular/material/paginator";
import {ArticleService} from "../../../core/services/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'title', 'city', 'address','type','phonenumber' ,'actions' ];
  articleData : Article[] = [];
    // {"id":1,"title":"Mellie","city":"Gabbott","address":"mgabbott0@indiatimes.com","type":"Female","number":"Support", 'actions': "test" },
    // {"id":2,"title":"Yehudi","city":"Ainsby","address":"yainsby1@w3.org","type":"Female","number":"Support"},
    // {"id":3,"title":"Noellyn","city":"Primett","address":"nprimett2@ning.com","type":"Female","number":"Human Resources"},
    // {"id":4,"title":"Stefanie","city":"Yurenin","address":"syurenin3@boston.com","type":"Female","number":"Marketing"},
    // {"id":5,"title":"Stormi","city":"O'Lunny","address":"solunny4@patch.com","type":"Female","number":"Engineering"},
    // {"id":6,"title":"Keelia","city":"Giraudy","address":"kgiraudy5@nba.com","type":"Male","number":"Marketing"},
    // {"id":7,"title":"Ikey","city":"Laight","address":"ilaight6@wiley.com","type":"Male","number":"Support",},
    // {"id":8,"title":"Adrianna","city":"Ruddom","address":"aruddom7@seattletimes.com","type":"Male","number":"Marketing"},
    // {"id":9,"title":"Dionysus","city":"McCory","address":"dmccory8@ox.ac.uk","type":"Male","number":"Engineering"},
    // {"id":10,"title":"Claybourne","city":"Shellard","address":"cshellard9@rediff.com","type":"Male","number":"Engineering"}];

  genders: string[]=['All','Male','Female'];
  jobtitles: string[]=['All','Support Analyst','Project Manager','Senior officer','Software Engineer'];
  departments: string[]=['All','Support','Human Resources','Marketing','Engineering'];
  articleFilters: articleFilter[]=[];

  defaultValue = "All";

  filterDictionary= new Map<string,string>();
  dataSource = new MatTableDataSource(this.articleData);
  dataSourceFilters = new MatTableDataSource(this.articleData);

  hey: any

  constructor(private articleService:ArticleService, private router:Router) {
  }


  ngOnInit(): void {
    this.articleService.getArticles().subscribe((x:any) =>{
        console.log(this.articleData)
     this.articleData = x.Articles
        console.log(this.articleData)

      this.dataSource = new MatTableDataSource(this.articleData)
},
    error => {
      this.articleData = error
      this.dataSource = new MatTableDataSource(this.articleData)

    }
    )

    this.dataSourceFilters.filterPredicate = function (record,filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Article] == value);
        if(!isMatch) return false;
      }
      return isMatch;
    }

  }

  applyArticleFilter(ob:MatSelectChange,articleFilter:articleFilter) {

    this.filterDictionary.set(articleFilter.name,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));

    this.dataSourceFilters.filter = jsonString;
    //console.log(this.filterValues);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  test(column:any) {
    console.log(column)
    debugger;
  }

  edit({element}: { element: any }) {
    this.router.navigate(['/admin/articles/property/'+element.id])
  }

  delete({id}: { id: any }) {
    let confirmed = confirm("Are you sure?");
    if(!confirmed) return;
    this.articleService.deleteArticle(id).subscribe(
   {
     next: (data) => {
       this.dataSource.data = this.dataSource.data.filter(d => d.id != id);
     },
     error: err => {
       alert(err);
     }
   });

  }

  viewItem({element}: { element: any }) {
  this.router.navigate(['/admin/articles/property/'+element.id])
  }
}
