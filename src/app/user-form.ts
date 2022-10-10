export interface UserForm {
    fullName: string;
    email: string;
    phone: string[];
    address:{
        city:string;
        postalCode:string;
        street:string
    }
    password: string;
    confirmPassword: string;
}
