
import { Component } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { PasswordValidator } from "app/passwordValidator";
import { LoginService } from "app/login.service";

@Component({
    selector:'login',
    templateUrl:'login.component.html'
})

export class LoginComponent{
    form:FormGroup;
       
       constructor(fb:FormBuilder,private _loginService: LoginService){
           this.form = fb.group({
                usernameControl: ['',Validators.required],
                passwordControl:['',Validators.compose([Validators.required,PasswordValidator.cannotContainSpace])]
    
           })
       }

    login(){
        
        var result = this._loginService.login(this.form.controls["usernameControl"].value,
                                                this.form.controls["passwordControl"].value);

        if (!result){

            this.form.controls["passwordControl"].setErrors({invalidLogin:true});

        }
    }
}