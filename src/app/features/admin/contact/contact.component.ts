import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSelectChange} from "@angular/material/select";
import {Contact} from "../../../shared/models/contact";
import {contactFilter} from "../../../shared/models/contact-filter";
import {ContactService} from "../../../core/services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'subject', 'created_at','actions' ];
  contactData : Contact[] = [];
  contactFilter: contactFilter[]=[];

  defaultValue = "All";

  filterDictionary= new Map<string,string>();
  dataSource = new MatTableDataSource(this.contactData);
  dataSourceFilters = new MatTableDataSource(this.contactData);

  constructor(private contactService:ContactService, private router:Router) {
  }


  ngOnInit(): void {
    this.contactService.getContacts().subscribe((x:any) =>{
        console.log(this.contactData)
        this.contactData = x["Contact-Us"]
        console.log(this.contactData)

        this.dataSource = new MatTableDataSource(this.contactData)
      },
      error => {
        this.contactData = error
        this.dataSource = new MatTableDataSource(this.contactData)

      }
    )

    this.dataSourceFilters.filterPredicate = function (record,filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Contact] == value);
        if(!isMatch) return false;
      }
      return isMatch;
    }

  }

  applyContactFilter(ob:MatSelectChange,contactFilter:contactFilter) {

    this.filterDictionary.set(contactFilter.name,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSourceFilters.filter = jsonString;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  viewItem({element}: { element: any }) {
    this.router.navigate(['/admin/contact/'+element.id])
  }
  delete({id}: { id: any }) {
    let confirmed = confirm("Are you sure?");
    if(!confirmed) return;
    this.contactService.deleteContact(id).subscribe(
      {
        next: (data) => {
          this.dataSource.data = this.dataSource.data.filter(d => d.id != id);
        },
        error: err => {
          alert(err);
        }
      });

  }


}
