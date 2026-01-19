import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-log',
  templateUrl: './help-log.page.html',
  styleUrls: ['./help-log.page.scss'],
})
export class HelpLogPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
leads = [
  {
    title: '#1000',
    color: 'purple',
    status: 'Resolved',
    priority:'Urgent',
    category: 'Login',
    subcategory: 'OTP Issue',
    desc: 'Sale'
  },
  {
    title: '#1001',
    color: 'limegreen',
    status: 'New',
     priority:'Medium',
    category: 'Login',
    subcategory: 'OTP Issue',
    desc: 'Rent'
  },
  {
    title: '#1002',
    color: 'limegreen',
    status: 'Converted',
     priority:'low',
    category: 'Login',
    subcategory: 'OTP Issue',
    desc: 'Rent'
  }
];

leadCreation(){
  this.route.navigate(['/tabs/lead'])
}
}
