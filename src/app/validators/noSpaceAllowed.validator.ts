import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidation {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(" ") != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  static checkUserName(control: AbstractControl): Promise<any> {
    return userNameAllowed(control.value);
  }
}

function userNameAllowed(username: string) {
  const takenUsers = ["Tarek", "Nour", "Hassan"];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUsers.includes(username)) {
        resolve({ checkUserName: true });
      } else {
        resolve(null);
      }
    }, 5000);
  });
}
