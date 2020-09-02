import express from 'express';
import data from './data';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from 'body-parser';
import orderRoute from './routes/orderRoute';
import path from 'path';
import productRoute from './routes/productRoute';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
//app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/config/paypal", (req, res) => {
    res.send(config.PAYPAL_CLIENT_ID);
});


 app.get("/api/products/:id", (req, res) => {
    const beatId = req.params.id;
    const beats = data.products.find(x=>x._id === beatId);
    if (beats)
        res.send(beats);
    else
        console.log("error finding beat")
        res.status(404).send({ msg: "Beat Not Found" })
}); 

app.get("/api/products", (req, res) => {
    res.send(data.products);
}); 

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


let port = process.env.PORT || 5000
app.listen(port, () => {console.log("Server started at port") })

