import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  index: number;
  followers = 0;
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('12/16/19'),
    },
    {
      name: 'Videos',
      updated: new Date('12/14/19'),
    },
    {
      name: 'Documents',
      updated: new Date('12/15/19'),
    }
  ];

  options = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.index = this.route.snapshot.queryParams.index;
  }

  ngOnInit() {
    this.options = this.dataService.getData();
    this.followers = this.options[this.index].followers;
  }

}
