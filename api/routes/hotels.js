import express, { response } from 'express';
import Hotel from '../models/hotel.js'
import { createError } from '../utils/error.js';
import { createHotel, deleteHotel, getAllHotles, getHotelById, updateHotel } from '../controllers/hotel.js';

const router = express.Router();


//CREATE
router.post('/',createHotel )
//UPDATE
router.put('/:id', updateHotel)
//DELETE
router.delete('/:id', deleteHotel)

// GET
router.get('/:id', getHotelById)

//GET ALL

router.get('/', getAllHotles)



export default router;