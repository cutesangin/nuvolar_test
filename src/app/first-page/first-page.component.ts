import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { DataService } from '../core/services/data.service';

export interface Userdata {
  name: string;
  index: number;
  followers: number;
  avatar: string;
}
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  myControl = new FormControl();

  options: Userdata[] = [];


  filteredOptions: Observable<Userdata[]>;

  listwithfilterdataonsearch: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.options = this.dataService.getData();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): Userdata[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  createlistfilterdata() {
    this.listwithfilterdataonsearch = this._filter(this.myControl.value);
  }
}
