import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular app';
  subForm: FormGroup;
  dataArr = [
    { id: 1, name: 'data' },
    { id: 2, name: 'data2' },
  ];

  ngOnInit() {
    this.subForm = new FormGroup({
      name: new FormControl('ddd'),
      check: new FormControl(true),
      selection: new FormControl(''),
    });
  }

  submitForm(form) {
    console.log(form);
  }
}
