import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidation } from "./validators/noSpaceAllowed.validator";

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
      firstName: new FormControl(null, [
        Validators.required,
        CustomValidation.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        CustomValidation.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [
        Validators.required,
        CustomValidation.checkUserName,
      ]),
      dob: new FormControl(null),
      gender: new FormControl("male"),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        country: new FormControl("India", [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        region: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([new FormControl(null, [Validators.required])]),
      experiences: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  addSkills() {
    (<FormArray>this.registerForm.get("skills")).push(
      new FormControl(null, [Validators.required])
    );
  }

  deleteSkill(i) {
    (<FormArray>this.registerForm.get("skills")).removeAt(i);
  }

  addExpereience() {
    const formGroup = new FormGroup({
      company: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      totalOfEx: new FormControl(null, [Validators.required]),
      sd: new FormControl(null, [Validators.required]),
      ed: new FormControl(null, [Validators.required]),
    });

    (<FormArray>this.registerForm.get("experiences")).push(formGroup);
  }

  deleteExperience(index: number) {
    (<FormArray>this.registerForm.get("experiences")).removeAt(index);
  }
}
