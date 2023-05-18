import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";



 //1.create a interface
export interface IUser {
    id: string,
    role: "student",
    password: string,
    name: {
        firstName: string,
        middlename?: string,
        lastName: string,
    }
    dateOfBirth?: string,
    gender: "male" | "female",
    email?: string,
    contactNo: string,
    emerjencyNo: string,
    presentAddress: string,
    permanentAddress: string,
}

// //static methods
// interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[];
//   }

//instance methods
export interface IUserMethods {
    fullName:string,
}


export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUser(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }