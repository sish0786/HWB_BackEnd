const express = require("express");
const { getItemRequests, postItemRequest, updateItemRequest, deleteItemRequest } = require("../controller/itemRequest-controller");

const router = express.Router();

router.get('/itemRequests',getItemRequests);

router.post('/itemRequests',postItemRequest);

router.put('/itemRequests/:id',updateItemRequest);

router.delete('/itemRequests/:id',deleteItemRequest);

router.get('/itemRequests/:id',getItemRequests)


module.exports = router;
 