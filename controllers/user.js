const { response, request } = require("express");

const userGet = (req=request, res=response) => {
    const { name = "No name", apikey, page = "1", limit } = req.query;
    res.json({
        msg: "get API - Controller",
        name,
        apikey,
        page,
        limit
    });
}

const userPut = (req = request, res) => {
    const { id } = req.params;
    res.json({
        msg: "put API - Controller",
        "id": id
    });
}

const userPost = (req, res) => {
    // const body = req.body;
    const { name, age } = req.body;

    res.status(201).json({
        msg: "post API - Controller",
        name,
        age
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: "delete API - Controller"
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: "patch API - Controller"
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}