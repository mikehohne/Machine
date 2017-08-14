import db from './../models'


const orderController = {};

orderController.post = (req,res) => {

    const {  creator  } = req.body;


    const order = new db.Order({
        creator
    });

    order.save()
    .then((newOrder) => {
        res.status(200).json({
            success: true,
            message: newOrder
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err
        })
    });
}

export default orderController