const ItemRequest = require("../model/ItemRequest");

const getAllItemRequests  = async (req,res,next)=>{
    let itemRequests;
    try{
        itemRequests = await ItemRequest.find();
    } catch(err){
        return next(err)
    }

    if(!itemRequests){
        return res.status(500).json({message: "Internal Server Error"});
    }
    return res.status(200).json({itemRequests});
}

const postItemRequest = async (req,resp,next) =>{

    const {name, mobileNo, address, items}  = req.body;

    if(!name && name.trim() == "" || !mobileNo && mobileNo.trim() == "" && mobileNo.length != 10 || !address && address.trim() == "" || !items && items.trim() == ""){
        return resp.status(422).json({message: "Invalid Data"});
    }

    let itemRequest;

    try{
        itemRequest = new ItemRequest({
            name,mobileNo,address,items
        });
    itemRequest = await itemRequest.save();
    }catch(err){
        return next(err);
    }

    if(!itemRequest){
        return resp.status(500).json({message: "Couldn't add a Item Request"});
    }

    return resp.status(201).json({itemRequest});

}


exports.getAllItemRequests = getAllItemRequests;
exports.postItemRequest = postItemRequest;