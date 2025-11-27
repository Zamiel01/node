import  mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,      //trim is used to eliminate whitespace
        lowercase: true,
        minLength: 1,
        maxLenth: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLenth: 50
    },
}, 
    {
        timestamps: true //this will automatically add createdAt and updatedAt fields to the schema
    }
);

export const User = mongoose.model('User', userSchema); //User is the name of the collection in the database so mongoose will create a collection named 'users' in the database
