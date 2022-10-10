import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/customValid/passwordMatch.Validator';
import { UserForm } from 'src/app/user-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  allExistEmails: string[]=[];

  constructor(
    private fb : FormBuilder
  )
   { 

    this.allExistEmails=["sandysawy@gmail.com","sandymohamede2@gmail.com"]

    // this.registerForm = new FormGroup({
      this.registerForm = fb.group({

      fullName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]{5,}")]],
      email: ['',[Validators.required, this.existEmailvalid(this.allExistEmails)]],
      phone: fb.array([this.fb.control('')], [Validators.required]),
      address: fb.group({
        city:[''],
        postalCode:[''],
        street:['']       
       }),
      password: ['',   Validators.required, 
      Validators.minLength(8),
      passwordMatch
    ],
      confirmPassword:['',   Validators.required, 
      Validators.minLength(8),
      passwordMatch
    ],
      referral: [''],
      referralOther: ['']

    },
    {Validators:passwordMatch}
    )

   
  }
  
existEmailvalid(existEmails: string[]): ValidatorFn{
  //AbstractControl is the parent class to formGroup, formArray, formControl
  return(control: AbstractControl) :ValidationErrors | null=> {
    let emailValue:string =control.value;
    if(emailValue.length ==0 && control.untouched)
    return null;
    let emailError ={'existEmail':{'value': emailValue}}
    let founded= existEmails.includes(emailValue)
    return founded?  emailError :null;


    // return (emailValue.includes('@'))?  null :emailError;

  }
}


  ngOnInit(): void {
    this.registerForm.patchValue({    
      fullName: 'sandy',
      email:'sabdy@gmail.com',
  //    phone:['01068372458'],  


  //fill exist emails

    })
  }


  get userFullName(){
      return this.registerForm.get('fullName')
  }
  get userEmail(){
    return this.registerForm.get('email')
}
  get phoneNumbers(){
    return this.registerForm.get('phone') as FormArray;
  }

  get referral(){
    return this.registerForm.get('referral') ;
  }

  get password(){
    return this.registerForm.get('password') ;
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword') ;
  }


  addPhone(event:any){
    this.phoneNumbers.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  get Form(){
    return this.registerForm.controls;
  }

  
  updateReferralValid(){
if(this.referral?.value == "other"){
  this.registerForm.get('referralOther')?.addValidators([Validators.required]);
}else{
  this.registerForm.get('referralOther')?.clearValidators()
}
this.registerForm.get('referralOther')?.updateValueAndValidity()
  }


  submit(){
    let UserModel: UserForm = this.registerForm.value as UserForm
  }
}
