
import { Component } from "@angular/core";
import { User } from "app/user";

@Component({
    selector:'user-form',
    templateUrl:'user-form.component.html'
})

export class UserFormComponet{
        countries = ["USA","Poland","Finland","China"];
        model = new User('','','');
        submitted = false;
        onSubmit() {
            this.submitted = true;
        }

}