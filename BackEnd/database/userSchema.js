import mongoose from "mongoose";
const userAuthSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Access: {
    type: String,
    default: null,
  },
  Refresh: {
    type: String,
    default: null,
  },
});
export const userAuthDetail = mongoose.model("userAuthDetails", userAuthSchema);
