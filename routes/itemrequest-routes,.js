const express = require("express");
const { getAllItemRequests, postItemRequest, updateItemRequest, deleteItemRequest } = require("../controller/itemRequest-controller");

const router = express.Router();

router.get('/itemRequests',getAllItemRequests);

router.post('/itemRequests',postItemRequest);

router.put('/itemRequests/:id',updateItemRequest);

router.delete('/itemRequests/:id',deleteItemRequest);



module.exports = router;
 