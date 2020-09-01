"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _productModel["default"].find({});

          case 2:
            products = _context.sent;
            res.send(products);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/*router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await Product.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products);
}); */

router.get('/:id', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _productModel["default"].findOne({
              _id: req.params.id
            });

          case 2:
            product = _context2.sent;

            if (product) {
              res.send(product);
            } else {
              res.status(404).send({
                message: 'Product Not Found.'
              });
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.put('/:id', _util.isAuth, _util.isAdmin, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var beatId, product, updatedProduct;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            beatId = req.params.id;
            _context3.next = 3;
            return _productModel["default"].findById(beatId);

          case 3:
            product = _context3.sent;

            if (!product) {
              _context3.next = 15;
              break;
            }

            product.name = req.body.name;
            product.price = req.body.price;
            product.image = req.body.image;
            product.artist = req.body.artist;
            product.category = req.body.category;
            _context3.next = 12;
            return product.save();

          case 12:
            updatedProduct = _context3.sent;

            if (!updatedProduct) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", res.status(200).send({
              message: 'Product Updated',
              data: updatedProduct
            }));

          case 15:
            return _context3.abrupt("return", res.status(500).send({
              message: ' Error in Updating Product.'
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router["delete"]('/:id', _util.isAuth, _util.isAdmin, /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var deletedProduct;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _productModel["default"].findById(req.params.id);

          case 2:
            deletedProduct = _context4.sent;

            if (!deletedProduct) {
              _context4.next = 9;
              break;
            }

            _context4.next = 6;
            return deletedProduct.remove();

          case 6:
            res.send({
              message: 'Product Deleted'
            });
            _context4.next = 10;
            break;

          case 9:
            res.send('Error in Deletion.');

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/', _util.isAuth, _util.isAdmin, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var product, newProduct;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            product = new _productModel["default"]({
              name: req.body.name,
              price: req.body.price,
              image: req.body.image,
              artist: req.body.artist,
              category: req.body.category
            });
            _context5.next = 3;
            return product.save();

          case 3:
            newProduct = _context5.sent;

            if (!newProduct) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(201).send({
              message: 'New Product Created',
              data: newProduct
            }));

          case 6:
            return _context5.abrupt("return", res.status(500).send({
              message: ' Error in Creating Product.'
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;