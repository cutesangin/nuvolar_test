import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('second-page')) {
          this.message = this.route.snapshot.queryParams.name;
        } else {
          this.message = 'Welcome to Ricky\'s Nuvolar test!!!';
        }
      }
  });
  }

  ngOnInit() {
  }

}
