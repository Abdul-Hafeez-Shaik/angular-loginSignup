import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { userRegister, userLogin} from '../../model/user.model';
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgClass, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin = true;
  registerObject: userRegister = new userRegister();
  loginObject: userLogin = new userLogin();
  userService = inject(UserService)
  router = inject(Router);

  switchTab(tab: boolean) {
    this.isLogin = tab;
  }

  onSignup(){
    console.log(this.registerObject);
    this.userService.register(this.registerObject).subscribe((res: userRegister) => {
      alert('User registered successfully');
      console.log(res);
    },error => {
      alert('User registration failed');
      console.log(error.error);
    })
    // this.userService.register(this.registerObject).subscribe((response) => {
    //   console.log(response);
    // });
  }

  onLogin(){
    console.log(this.loginObject);
    this.userService.login(this.loginObject).subscribe((res: any) => {
      alert('User logged in successfully');
      console.log(res);
      localStorage.setItem('data',JSON.stringify(res.data));
      this.router.navigateByUrl('/dashboard');
    },error => {
      alert('Invalid credentials');
      console.log(error.error);
    })
  }

}
