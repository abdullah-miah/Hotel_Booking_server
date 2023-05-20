import hotel from "../models/hotel.js";


/*
create hotle controller
*/

export const createHotel = async(req,res)=>{

    const newHotel = new hotel(req.body);
    try {
       const saveHotel = await newHotel.save();
       res.status(200).json(saveHotel); 
    } catch (error) {
      res.status(500).json(error);
    }
};


/*
Update hotle controller
*/
export const updateHotel = async (req,res,next)=>{
    try {
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err)
    }
};

/*
Delete hotle controller
*/
export const deleteHotel = async (req,res,next)=>{
    try {
        const deleteHotel = await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch (err) {
        next(err)
    }
};

/*
get by id hotle controller
*/

export const getHotelById = async (req,res,next)=>{
    try {
        const Hotel = await hotel.findById(req.params.id)
        res.status(200).json(Hotel);
    } catch (err) {
       next(err)
    }
};
/*
get All hotle controller
*/

export const getAllHotles = async (req,res,next)=>{
    try {
        const Hotels = await hotel.find()
        res.status(200).json(Hotels);
    } catch (err) {
        next(err)
    }
};

