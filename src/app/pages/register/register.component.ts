import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.data);
    this.authService.register(this.data).subscribe(
      (s) => {
        console.log(s);
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }
}
