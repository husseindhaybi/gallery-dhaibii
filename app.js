const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.static('public'))
const PORT = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.send(index.html)
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});