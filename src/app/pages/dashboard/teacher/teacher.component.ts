import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
date = new Date();
isLog: boolean | undefined;
profil: any | undefined;
dataProfile: any;
data = {
  name: "",
  email: "",
  password: "",
  img: "",
  role: "",
  grade: "",
  status: "",
  created_at: new Date().toLocaleDateString()
};
nameUser: any;
emailUser:any;
idUser: any;
courses:any;
userSpring:any;
  constructor(private router: Router, private keycloack: KeycloakService, private authService: AuthService, private courseService: CourseService ) { }

  ngOnInit(): void {
    this.logged();

    if (!localStorage.getItem("user")) {
      setTimeout(() => {
        this.getCourses();
      }, 2000);
    } else {
      this.userSpring = localStorage.getItem("user");
      this.userSpring = JSON.parse(this.userSpring);
      this.getCourses();
    }
    
    
  }

  goToCreateCourse() {
    this.router.navigateByUrl("/create-course");
  }

  getCourses() {
    this.courseService.getByAuthor(this.userSpring.id).subscribe(
      (s) => {
        console.log(s);
        this.courses = s;

      }, (e) => {
        console.log(e);
        
      }
    );
  }


  async logged() {
    this.isLog = await this.keycloack.isLoggedIn();
    console.log(this.isLog);
    

    if (this.isLog) {
      this.profil = this.keycloack.loadUserProfile();
      console.log(this.profil); 
      this.dataProfile = (await this.keycloack.loadUserProfile()).firstName + " " + (await this.keycloack.loadUserProfile()).lastName;                  

      this.nameUser = (await this.keycloack.loadUserProfile()).firstName + " " + (await this.keycloack.loadUserProfile()).lastName;
      this.emailUser = (await this.keycloack.loadUserProfile()).email;
      this.idUser = (await this.keycloack.loadUserProfile()).id;

      this.saveUserToApi();
      
    }
  }

  saveUserToApi() {
    
    this.authService.register(
      {
        name: this.nameUser,
        email: this.emailUser,
        password: "",
        img: "",
        role: "teacher",
        grade: "Intermediaire",
        status: "",
        created_at: new Date().toLocaleDateString()
      }
    ).subscribe(
      (s) => {
        console.log(s);
        this.userSpring = s;
        if (!localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(s));
        }
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }

  logout() {
    this.keycloack.logout();
    localStorage.removeItem('user');
    
  }


  deleteCourse(id:any) {
    if (confirm("Êtes-vous sûr de vouloir continuer la suppression ?"))  {
      this.courseService.deleteCourse(id).subscribe(
        (s) => {
          console.log(s);
          alert("Votre course a bien été supprimé !");
          window.location.reload();
        }, (e) => {
          console.log(e);
          alert("Une erreur s'est produite. Veuillez réessayez plus tard !");
        }
      );
    }
  }

  goToModify(id:any) {
    this.router.navigateByUrl("modify-course/" + id);
  }

}
