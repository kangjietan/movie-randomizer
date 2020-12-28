import express from "express";

const router = express.Router();

import { searchApi } from "../api/searchTmdb";

router.get("/movie/popular", (req, res) => {
  const { page } = req.query;

  searchApi("popular", page ? +page : undefined)
    .then((response) => {
      /** Send response or data */
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
    });
});

export default router;
