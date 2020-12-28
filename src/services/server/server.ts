import express from "express";

import path from "path";

import cors from "cors";

import morgan from "morgan";

import tmdbRoutes from './routes/tmdb';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, "../../client/public")));

app.use('/tmdb', tmdbRoutes);

app.listen(PORT, () => console.log("Listening on port: " + PORT));
