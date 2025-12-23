const mongoose = require("mongoose");

const veriftySessionSchema = new mongoose.Schema(
  {
    sessionId: {
      require: true,
      type: String,
      unique: true,
    },
    payload: {
      require: true,
      type: String,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 5,
    },
  }
);

const VerifySession = mongoose.model("VerifySession", veriftySessionSchema);

module.exports = VerifySession;
