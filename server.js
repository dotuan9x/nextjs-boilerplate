const express = require('express');
const next = require('next');
const compression = require('compression');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev,
    quiet: !dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    // Route Category eq. https://domain.com/giai-tri.htm
    server.get('/:slug.htm', (req, res) => {
        return app.render(req, res, '/category', {
            slug: req.params.slug
        });
    });

    // Route Category Children eq. https://domain.com/giai-tri/tv-show.htm
    server.get('/:slug/:child.htm', (req, res) => {
        return app.render(req, res, '/category', {
            slug: req.params.slug,
            child: req.params.child
        });
    });

    // Route Post Detail eq. https://domain.com/quay-phim-ban-ron-angela-baby-mang-theo-quy-tu-bot-bien-nho-sang-tan-rome-de-tien-cham-soc-p66457.html
    server.get('/:slug-p:pid(\\d+).html', (req, res) => {
        return app.render(req, res, '/post', {
            slug: req.params.slug,
            pid: req.params.pid
        });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) {
            throw err;
        }

        console.log(`> Ready on http://localhost:${port}`);
    });
});
