import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() avatar: string;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['second-page'], {
      queryParams: { index: this.index, name: this.name }
    });
  }

}
