//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// var apiProxy = createProxyMiddleware('/live', { target: 'https://api.ashes.live/v2/', changeOrigin: true });
app.use(
    '/live',
    createProxyMiddleware({
        target: 'https://api.ashes.live/v2/',
        changeOrigin: true
    })
);

app.use(
    '/api',
    createProxyMiddleware({
        target: process.env.NODE_ENV === 'production' ? 'https://ashteki.com/api/' : 'http://localhost:4000/api/',
        changeOrigin: true
    })
);

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));