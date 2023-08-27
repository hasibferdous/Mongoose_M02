import User from "./user.model";

export const createUserToDB=async ()=>{
    const user = await new User({
        id: '22237',
        role:"student",
        password: "hjhgf",
        name: {
            firstName: 'Hasibu2222l',
            lastName: 'Ferdo222us',    
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
//  createUserToDB();