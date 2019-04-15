import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/entities/loginModel';
import { Router } from '@angular/router'; 
import { FormControl } from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private router: Router) { }

  public login = new LoginModel('admin','password');
  ngOnInit() {

  }

  checkLogin() {  
    if((this.login.username == "admin") && (this.login.password == "password")){
        this.router.navigate(['/welcome']);
    }
  }
}
