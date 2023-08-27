  //creating an interface
export interface IUser{
    id: string;
    role:"student";
    password: string;
    name: {
        firstName: string;
        lastName: string;    
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNumber: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}