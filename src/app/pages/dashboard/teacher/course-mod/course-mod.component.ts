import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UplaodService } from 'src/app/services/uplaod.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-mod',
  templateUrl: './course-mod.component.html',
  styleUrls: ['./course-mod.component.css']
})
export class CourseModComponent implements OnInit {
  idCOurse: any;
  course: any;
  public Editor:any = ClassicEditor;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private location: Location) { }

  ngOnInit(): void {
    this.idCOurse = this.route.snapshot.paramMap.get("id");
    console.log(this.idCOurse);

    this.getInformations();
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

  getInformations() {
    this.courseService.getByID(this.idCOurse).subscribe(
      (s) => {
        console.log(s);
        this.course = s.course;
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }


  onSubmit() {
    this.courseService.updateCourse(this.course).subscribe(
      (s) => {
        console.log(s);
        alert("Votre cours a été modifié !")
        this.goBack();
        
      }, (e) => {
        console.log(e);
        alert("Erreur s'est produite ! Veuillez re-tentez une autre fois.")
      }
    )
  }

}
