import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-application-link',
  templateUrl: './application-link.page.html',
  styleUrls: ['./application-link.page.scss'],
})
export class ApplicationLinkPage implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  applicationForm = this.fb.group({
    link:['']
  });

  cancel(){
    this.applicationForm.reset();
  }
}
