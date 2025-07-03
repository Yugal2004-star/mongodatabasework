const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection to MongoDB successful");
  }).catch((err) => {
        console.error("Error saving chat:", err);
      });
// Connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats=[
     
     {
      from: "Ramen",
      to: "ram",
      msg: "good luck for your exams",
      created_at: new Date()
     },
     
     {
      from: "arun",
      to: "nitin",
      msg: "best of luck for exams",
      created_at: new Date()
     },
     
     {
      from: "sahil",
      to: "salma",
      msg: "holiday shower at horiom nadiya",
      created_at: new Date()
     },
     
     {
      from: "Rakesh",
      to: "rama",
      msg: "old days pictures",
      created_at: new Date()
     },
     {
      from: "Ratan",
      to: "pooja",
      msg: "ramjahan me jana hai klya",
      created_at: new Date()
     },
    ]
    Chat.insertMany(allChats);
