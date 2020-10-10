import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../SERVICES/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private auth: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  signIn(){
    this.auth.singIn(this.loginForm.value.email, this.loginForm.value.password)
  }
  createAccout(){
    this.auth.SignUp(this.loginForm.value.email, this.loginForm.value.password)
 
   }

}
