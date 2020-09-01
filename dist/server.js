"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

var _productRoute = _interopRequireDefault(require("./routes/productRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongodbUrl = _config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})["catch"](function (error) {
  return console.log(error.reason);
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/api/users", _userRoute["default"]); //app.use("/api/products", productRoute);

app.use("/api/orders", _orderRoute["default"]);
app.use("/api/config/paypal", function (req, res) {
  res.send(_config["default"].PAYPAL_CLIENT_ID);
});
app.get("/api/products/:id", function (req, res) {
  var beatId = req.params.id;

  var beats = _data["default"].products.find(function (x) {
    return x._id === beatId;
  });

  if (beats) res.send(beats);else console.log("error finding beat");
  res.status(404).send({
    msg: "Beat Not Found"
  });
});
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
app.listen(5000, function () {
  console.log("Server started at http://localhost:5000");
});