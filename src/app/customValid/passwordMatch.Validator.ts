import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordMatch:ValidatorFn =
    (frmGroup: AbstractControl): ValidationErrors | null => {
        let passControl = frmGroup.get('password')
        let confirmPassControl = frmGroup.get('confirmPassword')

        if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
{            return null; 
}
console.log(1)
            let valedationError = {'unmatchedPassword':{'pass': passControl?.value, 'confirm':confirmPassControl?.value}}
            return (passControl?.value == confirmPassControl?.value) ?  null :valedationError  ;
        
        

    }
