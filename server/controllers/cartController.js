import db from './../models'


const cartController = {};

cartController.post = (req,res) => {

    const { userId } = req.body;


    const cart = new db.Cart({
        _creator: userId
    });

    cart.save()
    .then((newCart) => {
        res.status(200).json({
            success: true,
            message: newCart
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err
        })
    });
};

cartController.getAll = (req,res) => {
    db.Cart.find({}).populate({
        path: '_creator'
    }).then((carts) =>{
        return res.status(200).json({
            success: true,
            data: carts
        })
    }).catch((err) => {
        res.status(500).json({
            message: err
        })
    });
}

export default cartController