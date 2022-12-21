import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
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
