module.exports = (db, type) => {
    const Projects = db.define('Projects',
        {
            name: type.STRING,
            listmember: type.STRING,
        },{
            timestamps: false
        }
    )
    return Projects;
}