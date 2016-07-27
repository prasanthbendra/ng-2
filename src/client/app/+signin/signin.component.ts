import { Component } from '@angular/core';
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from '@angular/common';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class SigninComponent {
    signinForm: ControlGroup;

    email: Control;
    password: Control;

    constructor(private builder: FormBuilder) {
        this.email = new Control(
            "",
            Validators.required
        );
        this.password = new Control(
            "",
            Validators.required
        );

        this.signinForm = builder.group({
            email: this.email,
            password: this.password
        })
    }

    submitData(){
        console.log(this.signinForm.value);
    }
}
