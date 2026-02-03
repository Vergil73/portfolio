const Route = require('express');
const routes = Route();

routes.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = routes;