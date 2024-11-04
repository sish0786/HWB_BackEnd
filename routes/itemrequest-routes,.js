const express = require("express");
const { getAllItemRequests, postItemRequest } = require("../controller/itemRequest-controller");

const router = express.Router();

router.get('/itemRequests',getAllItemRequests);

router.post('/itemRequests',postItemRequest);

module.exports = router;
