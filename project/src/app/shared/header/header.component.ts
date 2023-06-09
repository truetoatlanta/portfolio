import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  navigate(path: any) {
    if (path == 'home') {
      this.router.navigate(['/home']);
    } else if (path == 'about') {
      this.router.navigate(['/about']);
    } else if (path == 'resume') {
      this.router.navigate(['/resume']);
    }

  }
}
