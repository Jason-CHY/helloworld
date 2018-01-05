'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 80, host: '13.229.234.47' });

//add route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello World');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});