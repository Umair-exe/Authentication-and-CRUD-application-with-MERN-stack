const express = require('express');
const mongoose =  require('mongoose');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');

dotenv.config({path: './confing/.env'});

app.use(fileUpload());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use('/uploads',express.static('uploads'));

app.use('/',require('./routes'));
app.use('/posts',require('./routes/posts'))

const CONNECTION_URI = "Your Mongo URI"


mongoose.connect(CONNECTION_URI)
.then(() => console.log("database connected"))
.catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})
