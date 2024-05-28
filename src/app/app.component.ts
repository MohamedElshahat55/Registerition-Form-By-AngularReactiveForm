import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //?Variables
  //----------
  title = "template-driven-form";
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl("male"),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        country: new FormControl("India", [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        region: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required]),
      ]),
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
