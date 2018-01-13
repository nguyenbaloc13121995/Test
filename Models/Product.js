module.exports = (db, type) => {
    const Product = db.define('Product',
        {
            name: type.STRING,
            price: type.INTEGER,
            // status: type.STRING,
        },{
            timestamps: false
        }
    )
    return Product;
}