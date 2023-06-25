import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../../core/services/contact.service";

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css']
})
export class AboutContentComponent implements OnInit {
  title: string = ""
  body: string = ""

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.title = "This Is Test Title2ssss ese seteasdasd";
    this.body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      " Saepe pariatur reprehenderit vero atque, consequatur id ratione, " +
      "et non dignissimos culpa?" +
      " Ut veritatis, quos illum totaasdf asdf m quis blanditiis, minima mis ooteest";
  }

  onSubmit(data: any) {
    this.contactService.updateAboutUs(data.title, data.body).subscribe({
      next: (data) => {
        alert(data.Message);
      },
      error: err => {
        alert(err.Message);
      }
    });
    console.log(" datatitle:", data.title, " data body:", data.body)
  }
}
