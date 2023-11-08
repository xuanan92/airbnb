import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
