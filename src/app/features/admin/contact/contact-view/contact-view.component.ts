import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../../core/services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact:any ={};
  constructor(private contactService: ContactService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.contactService.getSincleContact(id).subscribe({
      next: (data) => {
        console.log(data)
        this.contact = data["Contact"];
      },
      error: err => {
        alert(err);
      }
    });
  }

}
