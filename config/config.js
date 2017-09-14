const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        connectionString: 'mongodb://localhost:27017/app'
        //mongodb://softuni_user:mag1karp@ds055875.mlab.com:55875/softuni_project
    },
    production:{}
};



