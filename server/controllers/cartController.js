import User from '../models/User.js'
//update User CartData : /api/cart/update

export const updateCart = async (req , res)=>{
    try{
        const {userID, cartItems} = req.body
        await User.findByIdAndUpdate(userID, {cartItems})
        res.json({success: true, message: 'cart Updated'})
    }catch(error){
        console.log(error.message)
        res.json({success: false, message: error.message})

    }

}