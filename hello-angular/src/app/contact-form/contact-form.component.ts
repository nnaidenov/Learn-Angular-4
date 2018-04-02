import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Phone'
    }
  ];

  sexOptions = [
    {
      id: 1,
      title: 'Male'
    },
    {
      id: 2,
      title: 'Female'
    },
    {
      id: 3,
      title: 'Other'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

}
