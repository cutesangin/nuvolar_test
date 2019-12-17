import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { HttpClient } from '@angular/common/http';

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
  followers: any;
  repos: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.index = this.route.snapshot.queryParams.index;
  }

  ngOnInit() {
    const followersUrl = this.route.snapshot.queryParams.followers;
    this.http.get(followersUrl).subscribe(data => this.followers = data);
    const reposUrl = this.route.snapshot.queryParams.repos_url;
    this.http.get(reposUrl).subscribe(data => this.repos = data);
  }

}
