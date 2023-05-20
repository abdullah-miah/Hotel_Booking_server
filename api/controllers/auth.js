import user from "../models/user.js";
import bcrypt from 'bcryptjs';
import {createError} from "../utils/error.js";


export const register = async(req,res,next)=>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        await newUser.save()
        res.status(201).send("User has been created");
    } catch (error) {
        next(error);
    }
};


export const login = async (req, res, next) => {
    try {
      const User = await user.findOne({ username: req.body.username });
      if (!User) return next( "user not found");
      
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        User.password
      );
      
      if (!isPasswordCorrect) return next( "Wrong password or username");
      
      res.status(200).json(User);
    } catch (error) {
      next(error);
    }
  };
  