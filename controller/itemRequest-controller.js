const ItemRequest = require("../model/ItemRequest");

const getItemRequests  = async (req,res,next)=>{
    const id = req.params.id;
    let itemRequests;
    try{
        if(id){
            itemRequests =  await ItemRequest.findById(id);
        }
        else{
            itemRequests = await ItemRequest.find();
        }
    } catch(err){
        return next(err)
    }

    if(!itemRequests){
        return res.status(500).json({message: "Internal Server Error"});
    }
    return res.status(200).json({itemRequests});
}

const postItemRequest = async (req,res,next) =>{

    const {name, mobileNo, address, items}  = req.body;

    if(!name && name.trim() == "" || !mobileNo && mobileNo.trim() == "" && mobileNo.length != 10 || !address && address.trim() == "" || !items && items.trim() == ""){
        return res.status(422).json({message: "Invalid Data"});
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
        return res.status(500).json({message: "Couldn't add a Item Request"});
    }

    return res.status(201).json({itemRequest});

}

const updateItemRequest = async (req,res,next) =>{
    const id = req.params.id;
    const {name, mobileNo, address, items}  = req.body;

    if(!name && name.trim() == "" || !mobileNo && mobileNo.trim() == "" && mobileNo.length != 10 || !address && address.trim() == "" || !items && items.trim() == ""){
        return res.status(422).json({message: "Invalid Data"});
    }

    let itemRequest;

    try{
        itemRequest = await ItemRequest.findByIdAndUpdate(id, {name,mobileNo,address,items});
    }catch( err){
        return next(err);
    }

    if(!itemRequest){
        return res.status(500).json({message: "Couldn't update Item Request"});
    }

    return res.status(200).json({message: "User Updated Successfully" });
}

const deleteItemRequest = async (req,res,next) =>{
    const id = req.params.id;
    let itemRequest;

    try{
        itemRequest = await ItemRequest.findByIdAndDelete(id);
    }catch( err){
        return next(err);
    }

    if(!itemRequest){
        return res.status(500).json({message: "Couldn't delete Item Request"});
    }

    return res.status(200).json({message: "User Deleted Successfully" });
}

exports.getItemRequests = getItemRequests;
exports.postItemRequest = postItemRequest;
exports.updateItemRequest = updateItemRequest;
exports.deleteItemRequest = deleteItemRequest;