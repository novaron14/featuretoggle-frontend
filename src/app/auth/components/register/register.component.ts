import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { user } from '../../models/user';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;
  

  constructor(fb: FormBuilder, private registerService : RegisterService, private router: Router) { 
    this.form = fb.group({
      userEmail : fb.control('', Validators.required),
      password : fb.control('', Validators.required),
    }) 

  }

  ngOnInit(): void {
  }

  tryRegister(){
    const user: user = {
      email: this.form.value.userEmail,
      password: this.form.value.password,
  
    };
    this.registerService.register(user);
  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }
}
