import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
users=[
  {name:'Chittaranjan',mobile:'9899898787',status:'Free',plan:'Weekly'},
  {name:'Suraj',mobile:'9899898787',status:'Subscribed',plan:'Weekly'},
  {name:'Arushi',mobile:'9899898787',status:'Expired',plan:'Monthly'},
  {name:'Jaya',mobile:'9899898787',status:'Free',plan:'Monthly'},
];

referralForm=this.fb.group({
  totalWallet:[''],
  redeemAmount:['']
})
}
