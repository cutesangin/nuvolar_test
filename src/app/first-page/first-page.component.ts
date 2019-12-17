import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  myControl = new FormControl();

  filteredOptions: any;

  listwithfilterdataonsearch: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myControl.valueChanges
      .pipe().subscribe(value => this.dataService.getUsers(value).subscribe(
        (data: any) => this.filteredOptions = data.items));
  }

  createlistfilterdata() {
    this.listwithfilterdataonsearch = this.filteredOptions.slice();
  }

}
