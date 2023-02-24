// // .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_api/models', // model directory name
    models: ['**/*.js', '!db.js', '!user.js'],// model matcher
    data: 'data', // data directory name
    db: 'mongodb://127.0.0.1:27017/DB-URL' // db connection url adjusted thanks to zach and max
};