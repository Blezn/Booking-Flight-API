const { flightModel } = require("../models/Flight");

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.bookFlight = (req, res) => {
    const newFlight = req.body;
    console.log(newFlight);

    if (!req.body) {
        res.send({msg: "flight not booked", status: false})
    } else {
        flightModel.push(newFlight);
        res.send({message: "Flight booked", status: true});
    }
}

exports.allFlight = (req, res) => {
    const flights = flightModel;
    // console.log(flights);
    res.status(200).send({message: "all flights", flights})
}

exports.getFlight = (req, res) => {
    const pid = req.params.id;
    console.log(pid);

    const flight = flightModel.find(({ id }) => id == pid);
    console.log(flight);

    res.send({message: "Flight....", flight})
}

exports.editFlight = (req, res) => {
   
}

exports.deleteFlight = (req, res) => {
    const { id } = req.body; 

    flightModel.splice(id, 1);
    console.log(flightModel);
}


