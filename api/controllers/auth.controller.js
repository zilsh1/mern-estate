import User from "../models/user.model.js"
import bycryptsjs from "bcryptjs"
export const signup=async(req,res,next)=>
{
  const {username,email,password}=req.body;
  const hashedPassword=bycryptsjs.hashSync(password,10);
  const newUser=new User({username,email,password:hashedPassword})
  try
  {
  await newUser.save()
  res.status(201).json("User created succesfully")
  }
  catch(error)
  {
    next(error)
  }
}