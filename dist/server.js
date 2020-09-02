"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

var _path = _interopRequireDefault(require("path"));

var _productRoute = _interopRequireDefault(require("./routes/productRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongodbUrl = _config.default.MONGODB_URL;

_mongoose.default.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use("/api/users", _userRoute.default); //app.use("/api/products", productRoute);

app.use("/api/orders", _orderRoute.default);
app.use("/api/config/paypal", (req, res) => {
  res.send(_config.default.PAYPAL_CLIENT_ID);
});
app.get("/api/products/:id", (req, res) => {
  const beatId = req.params.id;

  const beats = _data.default.products.find(x => x._id === beatId);

  if (beats) res.send(beats);else console.log("error finding beat");
  res.status(404).send({
    msg: "Beat Not Found"
  });
});
app.get("/api/products", (req, res) => {
  res.send(_data.default.products);
});
app.use(_express.default.static(_path.default.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(_path.default.join(`${__dirname}/../frontend/build/index.html`));
});
app.listen(_config.default.PORT, () => {
  console.log("Server started at port");
});