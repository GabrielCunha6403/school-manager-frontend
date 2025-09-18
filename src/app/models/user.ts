import { inject, Injectable } from "@angular/core";
import { User as UserType } from "../pages/users/types/types";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class User {
    private fb = inject(FormBuilder);

    userForm: FormGroup = this.newUserForm();

    newUserForm(): FormGroup {
        return this.fb.group({
            cdUser: [null],
            nmUser: [null, [Validators.required]],
            tpUser: [null, [Validators.required]],
            cpf: [null, [Validators.required]],
        });
    }

    getUserForm(): FormGroup {
        return this.userForm;
    }

    setValuesFromUser(user: UserType) {
        this.userForm.patchValue({
            cdUser: user.cdUser,
            nmUser: user.nmUser,
            tpUser: user.tpUser,
            cpf: user.cpf
        });
    }

}