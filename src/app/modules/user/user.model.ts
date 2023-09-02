import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>("User", userSchema)

export default User;