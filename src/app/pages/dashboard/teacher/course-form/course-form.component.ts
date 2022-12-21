import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CourseService } from 'src/app/services/course.service';
import { UplaodService } from 'src/app/services/uplaod.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  public Editor:any = ClassicEditor;
  data: any;
  course = {
    title: '',
    category: '',
    description: '',
    content: "",
    img: '',
    video: '',
    idAuthor: ''
  }
  constructor(private courseService: CourseService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    // this.getCourses();
    this.getUserData();
  }


  onReady(eventData:any) {    
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader:any) {
      console.log(btoa(loader.file));
      // this.sendFile(loader.file);
      return new UplaodService(loader);
      // return new UploadAdapter(loader);
    };
  }


  goBack() {
    this.location.back();
  }

  getUserData() {
    const user = localStorage.getItem("user");
    if (user) {
      this.course.idAuthor = JSON.parse(user).id;
    }
  }


  

  onSubmit() {
    console.log(this.course);
    this.courseService.save(this.course).subscribe(
      (s) => {
        console.log(s);
        alert("Votre cours a bien été enrégistrer !");
        window.location.reload();
      }, (e) => {
        console.log(e);
        
      }
    );
  }

}
