import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }

  @ViewChild('sidenav')
  title = 'fitness-shao';
  openSidenav = false;

  ngOnInit() {
    this.authService.initAuthListener();
  }
  onToggle() {

  }
}
