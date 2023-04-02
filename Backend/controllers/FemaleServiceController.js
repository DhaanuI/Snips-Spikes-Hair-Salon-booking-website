// --------------->>>>>>>> Female Service Model Location <<<<<<<<-------------------
const { FemaleModel } = require("../model/FemaleServicemodel");


// --------->>>> GET <<<<<---------
const FemaleGetData = async (req, res) => {
    try {
        const data = await FemaleModel.find()
        res.status(202).send(data);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


// --------->>>> POST <<<<<---------
const FemalePostData = async (req, res) => {
    const payload = req.body;
    try {
        const data = new FemaleModel(payload);
        await data.save();
        res.status(202).send({
            Message: "Data saved successfully",
        });
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> PATCH <<<<<---------
const FemalePatchData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await FemaleModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(202).send({
            Message: "Data successfully modified",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}
const getFemaleSingleData = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        const data = await FemaleModel.findById({ _id: ID })
        res.status(202).send({data});
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

// --------->>>> DELETE <<<<<---------
const FemaleDeleteData = async (req, res) => {
    const ID = req.params.id;
    try {
        await FemaleModel.findByIdAndDelete({ _id: ID })
        res.status(202).send({
            Message: "Data successfully deleted",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

module.exports = { FemaleGetData ,getFemaleSingleData, FemalePostData , FemalePatchData, FemaleDeleteData }

