import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakGuardGuard } from './guard/keycloak-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentComponent } from './pages/dashboard/student/student.component';
import { CourseFormComponent } from './pages/dashboard/teacher/course-form/course-form.component';
import { CourseModComponent } from './pages/dashboard/teacher/course-mod/course-mod.component';
import { TeacherComponent } from './pages/dashboard/teacher/teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard-teacher",
    component: TeacherComponent,
    canActivate: [KeycloakGuardGuard],
    data: { roles: ["teacher"]}
  },
  {
    path: "dashboard-student",
    component: StudentComponent
  },
  {
    path: "create-course",
    component: CourseFormComponent
  },
  {
    path: "course-detail/:id",
    component: CourseDetailComponent
  },
  {
    path: "modify-course/:id", 
    component: CourseModComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
