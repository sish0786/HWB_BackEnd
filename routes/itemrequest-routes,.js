const express = require("express");
const { getAllItemRequests, postItemRequest, updateItemRequest } = require("../controller/itemRequest-controller");

const router = express.Router();

router.get('/itemRequests',getAllItemRequests);

router.post('/itemRequests',postItemRequest);

router.put('/itemRequests/:id',updateItemRequest);



module.exports = router;
 