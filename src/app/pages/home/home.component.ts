import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
courses: any;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }


  getCourses() {
    this.courseService.get().subscribe(
      (s) => {
        console.log(s);
        this.courses = s;
      }, (e) => {
        console.log(e);
        
      }
    );
  }
  
  
  goToCourseDetail(id: any) {
    this.router.navigateByUrl("course-detail/" + id);
  }

}
