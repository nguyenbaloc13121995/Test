module.exports = (db, type) => {
    const Members = db.define('Members',
        {
            name: type.STRING,
            numberphone : type.INTEGER(11),
            project : type.STRING,
           
        },{
            timestamps: false
        }
    )
    return Members;
}