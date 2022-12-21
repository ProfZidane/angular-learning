import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any;
  constructor(private router: Router, private keycloak: KeycloakService) { }

  ngOnInit(): void {
    this.infos();
  }

  infos() {
    const user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  goToCourse() {
    this.router.navigateByUrl("/courses");
  }

  goToLogin() {
    this.router.navigateByUrl("/login");
  }


  login() {

  }

}
