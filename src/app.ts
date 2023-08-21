import express, {Application, NextFunction, Request, Response} from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express()

//using cors 
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    //inserting a test data into mongodb

     /**
      * Step1: Interface
      * Step2: Schema
      * Step3: Model
      * Step4: Database Query
      */

    // res.send('Hello World!')
    // next();

    //creating an interface
    interface IUser{
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

      // 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    name: { 
        firstName:{
            type: String, 
            required: true 
        },
        lastName:{
            type: String, 
            required: true 
        }
        },
        dateOfBirth:{
                type: String,
        },
        gender:{
            type: String,
            enum: ['male' , 'female']
        } ,
        email:{
            type: String,
        }, 
        contactNumber:{
            type: String,
            required: true 
        }, 
        emergencyContactNo:{
            type: String,
            required: true 
        }, 
        presentAddress:{
            type: String,
            required: true 
        }, 
        permanentAddress:{
            type: String,
            required: true 
        }, 
  });

 const User = model<IUser>("User", userSchema)

 const createUserToDB=async ()=>{
    const user = new User({
        id: '237',
        role:"student",
        password: "hjhgf",
        name: {
            firstName: 'Hasibul',
            lastName: 'Ferdous',    
        },
        
        gender: "male",
        email: 'hasibferdous09@gmail.com',
        contactNumber: '01733456677789',
        emergencyContactNo: '017334566774689',
        presentAddress: 'USA',
        permanentAddress:'UK' 
    });
      await user.save();
      console.log(user);
 }

 createUserToDB();
   

  });



export default app;