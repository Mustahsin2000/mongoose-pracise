import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

//create schema using interface
const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true,
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
            required: true,
        },
        middlename: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },

    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emerjencyNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
});

//class -> this.  --> Class
userSchema.static('getAdminUser', async function getAdminUser() {
    const admins = await this.find({role:'admin'});
    return admins
  });


userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  

//model

const User = model<IUser,UserModel>("User", userSchema)

export default User;


//instance methods-> instance er method

//class -> instance + methods -> instance methods
