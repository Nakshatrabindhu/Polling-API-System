
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Nakshatra:Nakshatra123@cluster0.acnajik.mongodb.net/PollingApi?retryWrites=true&w=majority",
    {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((e) => {
    console.log("No Connection");
  });
  //mongodb+srv://Nakshatra:<password>@cluster0.acnajik.mongodb.net/?retryWrites=true&w=majority