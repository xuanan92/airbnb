import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    default: "",
  },
  roles: [
    {
      type: String,
      default: "Admin",
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

const Users = model("Users", usersSchema);
export default Users;
