const Cart = require('../models/cartSchema');

async function addItemToCart(req, res, next){
    const {userKey, itemKey, itemCNT} = req.body;

    try{
        if(
            itemCNT<0||
            !userKey||
            !itemKey||
            !itemCNT
        ) {
            throw new Error('KEY_ERROR');
        }

        const updatedCart = await Cart.addItemToCart(
            userKey, itemKey, itemCNT
        );

        res.status(201).json(updatedCart); //조회,추가 둘 다 updated써도되나요 
    } catch(err){
        next(err);
    }

module.exports = {addItemToCart,}

}


