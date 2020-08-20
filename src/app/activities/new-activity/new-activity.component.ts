import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  fontColor: any;
  backgroundColor: any;
  constructor() { }

  ngOnInit(): void {
    this.fontColor = '#ffffff';
    this.backgroundColor = '#000000';
  }

}
