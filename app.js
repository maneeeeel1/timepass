const express = require("express");
const app = express();

const indexRoutes = require("./routes/index");
const endrouteRoutes = require("./routes/endroute");

app.use("/", indexRoutes);
app.use("/endroute", endrouteRoutes);

app.listen(3000, ()=>{
    console.log("server listening port 3000")
})