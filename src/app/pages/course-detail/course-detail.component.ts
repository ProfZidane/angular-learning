import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
idCOurse:any;
course: any;
  constructor(private route: ActivatedRoute, private courseService: CourseService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.idCOurse = this.route.snapshot.paramMap.get("id");
    console.log(this.idCOurse);

    this.getInformations();
  }


  getInformations() {
    this.courseService.getByID(this.idCOurse).subscribe(
      (s) => {
        console.log(s);
        this.course = s;
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }


  video() {
    return this.sanitizer.bypassSecurityTrustUrl(this.course.course.video);
  }

}
