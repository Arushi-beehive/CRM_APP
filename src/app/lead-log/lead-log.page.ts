import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-log',
  templateUrl: './lead-log.page.html',
  styleUrls: ['./lead-log.page.scss'],
})
export class LeadLogPage implements OnInit {

  ngOnInit() {
  }
 constructor(){}
  rowConfig = [
  { key: 'date', icon: 'calendar-number-outline', label: 'Date' },
  { key: 'status', icon: 'information-circle-outline', label: 'Status' },
  { key: 'partner', icon: 'snow-outline', label: 'Channel Partner' },
  { key: 'remark', icon: 'bookmark-outline', label: 'Remark' }
];

statusCards = [
  {
    date: 'Sep 20, 2025 10:00 AM',
    status: 'New',
    partner: 'Priyaranjan',
    remark: ''
  },
  {
    date: 'Sep 20, 2025 10:00 AM',
    status: 'Contacted',
    partner: 'Priyaranjan',
    remark: 'Prospective Customer, Follow up'
  },
  {
    date: 'Sep 25, 2025 10:00 AM',
    status: 'Follow Up',
    partner: 'Priyaranjan',
    remark: 'Will make a deal'
  }
];
}
