import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);  // Here, User > class ; user > instance

    await user.save(); // Here, user.save > built in Instance Methods

    user.fullName() //custom instance methods
    console.log(user.fullName());
    return user;
    //   console.log(user);
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (
    payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNumber: 1 }); // here 1 is true & 0 is false
    return user;
}



//  createUserToDB();