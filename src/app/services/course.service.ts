import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
saveURL = environment.endPoind + "api/course";
byAuthor = environment.endPoind + "api/course/author/";
deleteURL = environment.endPoind + "api/course/delete";
updateURL = environment.endPoind + "api/course/update";

  constructor(private http: HttpClient) { }

  save(data: any): Observable<any> {
    return this.http.post(this.saveURL, data);
  }

  get(): Observable<any> {
    return this.http.get(this.saveURL);
  }

  getByID(id: any): Observable<any> {
    return this.http.get(this.saveURL + "/" + id);
  }

  getByAuthor(id: any): Observable<any> {
    return this.http.get(this.byAuthor + id);
  }

  updateCourse(data:any): Observable<any> {
    return this.http.post(this.updateURL, data);
  }

  deleteCourse(id: any): Observable<any> {
    return this.http.post(this.deleteURL, id);
  }
}
