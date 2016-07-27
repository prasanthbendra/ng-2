import { Component } from '@angular/core';
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from '@angular/common';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class SignupComponent {
    form: ControlGroup;
    firstName: Control;
    lastName: Control;
    email: Control;
    password: Control;
    cPassword: Control;
    submitted: boolean = false;

    constructor(private builder: FormBuilder) {
        this.firstName = new Control(
            "",
            Validators.required
        );

        this.lastName = new Control(
            "",
            Validators.required
        );

        this.email = new Control(
            "",
            Validators.required
        );

        this.password = new Control(
            "",
            Validators.required
        );
        this.cPassword = new Control(
            "",
            Validators.required
        );

        this.form = builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            cPassword: this.cPassword
        });

        console.log(this.form)
    }

    submitData() {
        console.log(this.submitted);
        console.log(this.form.value);
        //console.log(this.form.value);
    }
}
