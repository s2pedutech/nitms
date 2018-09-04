import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	email: string;
  	password: string;
    loginForm;
    constructor(public router: Router, public authService: AuthService, public fb: FormBuilder) {
        this.createForm();
    }
    createForm(){
        this.loginForm = this.fb.group({
            email: '',
            password: '',
        });
    }
    login() {
        console.log(this.email);
        this.authService.login(this.email, this.password);
  	}
    ngOnInit() {}
}