import db from './../models'


const productController = {};

productController.post = (req,res) => {

    const {  productName, imageUrl, stock  } = req.body;


    const product = new db.Product({
        productName,
        imageUrl,
        stock
    });

    product.save()
    .then((newProduct) => {
        res.status(200).json({
            success: true,
            message: newProduct
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err
        })
    });
}

export default productController