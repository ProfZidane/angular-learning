import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './pages/dashboard/teacher/teacher.component';
import { StudentComponent } from './pages/dashboard/student/student.component';
import { CourseFormComponent } from './pages/dashboard/teacher/course-form/course-form.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { initializeKeycloak } from './utility/keycloack.int';
import { CourseModComponent } from './pages/dashboard/teacher/course-mod/course-mod.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TeacherComponent,
    StudentComponent,
    CourseFormComponent,
    CourseDetailComponent,
    CourseModComponent,
    FooterComponent,
    CoursesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
