import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  


  constructor(fb: FormBuilder,private authService: AuthService, private router: Router) { 
    this.form = fb.group({
      userEmail : fb.control('', Validators.required),
      password : fb.control('', Validators.required),
    }) 
  
  }

  ngOnInit(): void {
  }

  tryLogin(){
    const user: user = {
      email : this.form.value.userEmail,
      password: this.form.value.password
    };
    this.authService.login(user);
  
    //console.log(this.authService.login(user))
  }



  navigateToRegister(){
    this.router.navigateByUrl("/register");
  }

}
