const mongoose = require("mongoose");

const ReservationScheme = new mongoose.Schema(
  {   
    idUser: {
      type: String,
    },
    idPost: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    payment: {
        type: Object,
    }    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("reservation", ReservationScheme);
