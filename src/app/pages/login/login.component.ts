import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, Route } from '@angular/router';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data = {
  email: "",
  password: ""
};
snapshot:any;
key: any;
isLog: any;
profil: any;

  constructor(private keycloack: KeycloakService,private route: ActivatedRoute, private router: Router) {
    var snapshot = this.route.snapshot;
   }

  ngOnInit(): void {
      // this.startLogin();
      this.logged();
  }

  async logged() {
    this.isLog = await this.keycloack.isLoggedIn();
    console.log(this.isLog);
    

    /* if (this.isLog) {
      this.profil = this.keycloack.loadUserProfile();
      console.log(this.profil);
      
      
    } */
  }

  async startLogin() {
    this.key = await this.keycloack.login({
      redirectUri:  "http://127.0.0.1:4200/login"
    });

    console.log(this.key);
    

  }

  login() {
    // this.keycloack.login();
    this.router.navigateByUrl("/dashboard-teacher");
  }

  register() {
    this.keycloack.register();
  }


  onSubmit() {
    console.log(this.data);
    
  }

}
