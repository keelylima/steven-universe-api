const repository = require('./StevenRepository');
const getAll = () => {
    return repository.cartoon;
}


module.exports = {
    getAll,
}