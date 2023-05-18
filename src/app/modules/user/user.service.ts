//4.database query

import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
    //creating a new user
    const user = new User(payload); // user -> class user->instance
    //instance
    await user.save(); // built in instance methods custom instance method 
    
    console.log(user.fullName);

    return user;
};

export const getUsersFromDB= async ():Promise<IUser[]>=>{
    const users = await User.find();
    return users
}

export const getUserIdFromDB = async (payload:string):Promise<IUser | null>=>{
    const user = await User.findOne({id:payload})
    return user;
}

export const getAdminUsersFromDB = async ()=>{
    const admins = await User.getAdminUser();
    return admins;
    
}

/*
const user = await new User({
        id: '93',
        role: "student",
        password: 'kallu',
        name: {
            firstName: 'gfdsgdsg',
            middlename: 'adgsgdsl',
            lastName: 'Chul',
        },
        gender: "male",
        email: 'abc"gmail.com',
        contactNo: '01777',
        emerjencyNo: '01222',
        presentAddress: 'kalallla',
        permanentAddress: 'mulli',
    });

    
    //id onujaee specific kichu data paouyar jonno
    export const getUserIdFromDB = async (payload:string):Promise<IUser | null>=>{
    const user = await User.findOne({id:payload},{name:1})
    return user;
}
*/