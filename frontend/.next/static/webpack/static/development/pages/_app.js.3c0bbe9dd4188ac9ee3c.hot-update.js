webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/fp */ "./node_modules/date-fns/fp/index.js");
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/joepaul/new_code/Advanced-React/sick-fits/frontend/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Hey I'm the page component"), this.props.children);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/date-fns/_lib/cloneObject/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/cloneObject/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneObject;
function cloneObject(dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTimezoneOffsetInMilliseconds;
var MILLISECONDS_IN_MINUTE = 60000;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCDayOfYear/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCDayOfYear/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCDayOfYear;

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeek/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCISOWeek;

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index4.default)(date, dirtyOptions).getTime() - (0, _index6.default)(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCISOWeekYear;

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index4.default)(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index4.default)(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeek/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCWeek;

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index4.default)(date, dirtyOptions).getTime() - (0, _index6.default)(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getUTCWeekYear/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCWeekYear;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index6.default)(firstWeekOfNextYear, dirtyOptions);

  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index6.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCDay/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCDay;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var day = (0, _index2.default)(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCISODay/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCISODay/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISODay;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var day = (0, _index2.default)(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCISOWeek/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeek;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var isoWeek = (0, _index2.default)(dirtyISOWeek);
  var diff = (0, _index6.default)(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/setUTCWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/setUTCWeek/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCWeek;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getUTCWeek/index.js */ "./node_modules/date-fns/_lib/getUTCWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek(dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var week = (0, _index2.default)(dirtyWeek);
  var diff = (0, _index6.default)(date, dirtyOptions) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCISOWeek;

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var weekStartsOn = 1;

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCISOWeekYear;

var _index = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeek/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCWeek;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index4.default)(dirtyDate, options);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/_lib/startOfUTCWeekYear/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCWeekYear;

var _index = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  var year = (0, _index4.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0, _index6.default)(firstWeek, dirtyOptions);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/_lib/toInteger/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/toInteger/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInteger;
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/addDays/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/addDays/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addDays;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var amount = (0, _index2.default)(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addHours/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/addHours/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHours;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, amount * MILLISECONDS_IN_HOUR, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addISOWeekYears/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/addISOWeekYears/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addISOWeekYears;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../setISOWeekYear/index.js */ "./node_modules/date-fns/setISOWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week-numbering years added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOWeekYears(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index6.default)(dirtyDate, (0, _index4.default)(dirtyDate, dirtyOptions) + amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/addMilliseconds/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMilliseconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = (0, _index4.default)(dirtyDate, dirtyOptions).getTime();
  var amount = (0, _index2.default)(dirtyAmount);
  return new Date(timestamp + amount);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addMinutes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/addMinutes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMinutes;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addMonths/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/addMonths/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMonths;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getDaysInMonth/index.js */ "./node_modules/date-fns/getDaysInMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var amount = (0, _index2.default)(dirtyAmount);
  var desiredMonth = date.getMonth() + amount;
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0, _index6.default)(dateWithDesiredMonth, dirtyOptions);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addQuarters/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/addQuarters/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addQuarters;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/addMonths/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  var months = amount * 3;
  return (0, _index4.default)(dirtyDate, months, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addSeconds/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/addSeconds/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addSeconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, amount * 1000, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addWeeks/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/addWeeks/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addWeeks;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  var days = amount * 7;
  return (0, _index4.default)(dirtyDate, days, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/addYears/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/addYears/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addYears;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/addMonths/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, amount * 12, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/areIntervalsOverlapping/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/areIntervalsOverlapping/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = areIntervalsOverlapping;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval?
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link docs/types/Options}
 * @returns {Boolean} whether the time intervals are overlapping
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 21), end: new Date(2014, 0, 22)}
 * )
 * //=> false
 */
function areIntervalsOverlapping(dirtyIntervalLeft, dirtyIntervalRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = (0, _index2.default)(intervalLeft.start, dirtyOptions).getTime();
  var leftEndTime = (0, _index2.default)(intervalLeft.end, dirtyOptions).getTime();
  var rightStartTime = (0, _index2.default)(intervalRight.start, dirtyOptions).getTime();
  var rightEndTime = (0, _index2.default)(intervalRight.end, dirtyOptions).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/closestIndexTo/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/closestIndexTo/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestIndexTo;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo(dirtyDateToCompare, dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateToCompare = (0, _index2.default)(dirtyDateToCompare, dirtyOptions);

  if (isNaN(dateToCompare)) {
    return NaN;
  }

  var timeToCompare = dateToCompare.getTime();

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = (0, _index2.default)(dirtyDate, dirtyOptions);

    if (isNaN(currentDate)) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());
    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/closestTo/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/closestTo/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestTo;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo(dirtyDateToCompare, dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateToCompare = (0, _index2.default)(dirtyDateToCompare, dirtyOptions);

  if (isNaN(dateToCompare)) {
    return new Date(NaN);
  }

  var timeToCompare = dateToCompare.getTime();

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0, _index2.default)(dirtyDate, dirtyOptions);

    if (isNaN(currentDate)) {
      result = new Date(NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());
    if (result == null || distance < minDistance) {
      result = currentDate;
      minDistance = distance;
    }
  });

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/compareAsc/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/compareAsc/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareAsc;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/compareDesc/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/compareDesc/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareDesc;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarDays;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/startOfDay/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInCalendarDays(
 *   new Date(2011, 6, 2, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var startOfDayLeft = (0, _index4.default)(dirtyDateLeft, dirtyOptions);
  var startOfDayRight = (0, _index4.default)(dirtyDateRight, dirtyOptions);

  var timestampLeft = startOfDayLeft.getTime() - (0, _index2.default)(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0, _index2.default)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarISOWeekYears/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarISOWeekYears/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarISOWeekYears;

var _index = __webpack_require__(/*! ../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDateLeft, dirtyOptions) - (0, _index2.default)(dirtyDateRight, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarISOWeeks/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarISOWeeks/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarISOWeeks;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var startOfISOWeekLeft = (0, _index4.default)(dirtyDateLeft, dirtyOptions);
  var startOfISOWeekRight = (0, _index4.default)(dirtyDateRight, dirtyOptions);

  var timestampLeft = startOfISOWeekLeft.getTime() - (0, _index2.default)(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - (0, _index2.default)(startOfISOWeekRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarMonths;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarQuarters/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarQuarters/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarQuarters;

var _index = __webpack_require__(/*! ../getQuarter/index.js */ "./node_modules/date-fns/getQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index4.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index4.default)(dirtyDateRight, dirtyOptions);

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = (0, _index2.default)(dateLeft, dirtyOptions) - (0, _index2.default)(dateRight, dirtyOptions);

  return yearDiff * 4 + quarterDiff;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarWeeks/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarWeeks/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarWeeks;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var startOfWeekLeft = (0, _index4.default)(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = (0, _index4.default)(dirtyDateRight, dirtyOptions);

  var timestampLeft = startOfWeekLeft.getTime() - (0, _index2.default)(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - (0, _index2.default)(startOfWeekRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarYears/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarYears/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInCalendarYears;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeft.getFullYear() - dateRight.getFullYear();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInDays/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInDays;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full days
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInDays(
 *   new Date(2011, 6, 2, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
*/
function differenceInDays(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var sign = (0, _index6.default)(dateLeft, dateRight, dirtyOptions);
  var difference = Math.abs((0, _index4.default)(dateLeft, dateRight, dirtyOptions));

  dateLeft.setDate(dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = (0, _index6.default)(dateLeft, dateRight, dirtyOptions) === -sign;
  var result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInHours/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/differenceInHours/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInHours;

var _index = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/differenceInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var diff = (0, _index2.default)(dirtyDateLeft, dirtyDateRight, dirtyOptions) / MILLISECONDS_IN_HOUR;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInISOWeekYears/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/differenceInISOWeekYears/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInISOWeekYears;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../differenceInCalendarISOWeekYears/index.js */ "./node_modules/date-fns/differenceInCalendarISOWeekYears/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../subISOWeekYears/index.js */ "./node_modules/date-fns/subISOWeekYears/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var sign = (0, _index6.default)(dateLeft, dateRight, dirtyOptions);
  var difference = Math.abs((0, _index4.default)(dateLeft, dateRight, dirtyOptions));
  dateLeft = (0, _index8.default)(dateLeft, sign * difference, dirtyOptions);

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOWeekYearNotFull = (0, _index6.default)(dateLeft, dateRight, dirtyOptions) === -sign;
  var result = sign * (difference - isLastISOWeekYearNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInMilliseconds;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);
  return dateLeft.getTime() - dateRight.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInMinutes/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMinutes/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInMinutes;

var _index = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/differenceInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var diff = (0, _index2.default)(dirtyDateLeft, dirtyDateRight, dirtyOptions) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInMonths/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInMonths;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/differenceInCalendarMonths/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var sign = (0, _index6.default)(dateLeft, dateRight, dirtyOptions);
  var difference = Math.abs((0, _index4.default)(dateLeft, dateRight, dirtyOptions));
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = (0, _index6.default)(dateLeft, dateRight, dirtyOptions) === -sign;
  var result = sign * (difference - isLastMonthNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInQuarters/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/differenceInQuarters/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInQuarters;

var _index = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/differenceInMonths/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var diff = (0, _index2.default)(dirtyDateLeft, dirtyDateRight, dirtyOptions) / 3;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInSeconds;

var _index = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/differenceInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var diff = (0, _index2.default)(dirtyDateLeft, dirtyDateRight, dirtyOptions) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInWeeks/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/differenceInWeeks/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInWeeks;

var _index = __webpack_require__(/*! ../differenceInDays/index.js */ "./node_modules/date-fns/differenceInDays/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var diff = (0, _index2.default)(dirtyDateLeft, dirtyDateRight, dirtyOptions) / 7;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/differenceInYears/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/differenceInYears/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInYears;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/differenceInCalendarYears/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var sign = (0, _index6.default)(dateLeft, dateRight, dirtyOptions);
  var difference = Math.abs((0, _index4.default)(dateLeft, dateRight, dirtyOptions));
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = (0, _index6.default)(dateLeft, dateRight, dirtyOptions) === -sign;
  var result = sign * (difference - isLastYearNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/eachDayOfInterval/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/eachDayOfInterval/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachDayOfInterval;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(dirtyInterval, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var interval = dirtyInterval || {};
  var startDate = (0, _index2.default)(interval.start, dirtyOptions);
  var endDate = (0, _index2.default)(interval.end, dirtyOptions);

  var endTime = endDate.getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];

  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);

  while (currentDate.getTime() <= endTime) {
    dates.push((0, _index2.default)(currentDate, dirtyOptions));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/eachWeekOfInterval/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/eachWeekOfInterval/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachWeekOfInterval;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../addWeeks/index.js */ "./node_modules/date-fns/addWeeks/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be 0, 1, ..., 6
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week between 6 October 2014 and 23 November 2014:
 * var result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [ 2014-10-05T00:00:00.000Z,
 * //   2014-10-12T00:00:00.000Z,
 * //   2014-10-19T00:00:00.000Z,
 * //   2014-10-26T00:00:00.000Z,
 * //   2014-11-02T00:00:00.000Z,
 * //   2014-11-09T00:00:00.000Z,
 * //   2014-11-16T00:00:00.000Z,
 * //   2014-11-23T00:00:00.000Z
 * // ]
 */
function eachWeekOfInterval(dirtyInterval, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var interval = dirtyInterval || {};
  var startDate = (0, _index2.default)(interval.start, dirtyOptions);
  var endDate = (0, _index2.default)(interval.end, dirtyOptions);

  var endTime = endDate.getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateWeek = (0, _index4.default)(startDate, dirtyOptions);
  var endDateWeek = (0, _index4.default)(endDate, dirtyOptions);

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);

  endTime = endDateWeek.getTime();

  var weeks = [];

  var currentWeek = startDateWeek;

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0);
    weeks.push((0, _index2.default)(currentWeek, dirtyOptions));
    currentWeek = (0, _index6.default)(currentWeek, 1);
    currentWeek.setHours(15);
  }

  return weeks;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfDay/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/endOfDay/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfDay;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setHours(23, 59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfHour/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/endOfHour/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfHour;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of an hour
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setMinutes(59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfISOWeek/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/endOfISOWeek/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfISOWeek;

var _index = __webpack_require__(/*! ../endOfWeek/index.js */ "./node_modules/date-fns/endOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var endOfWeekOptions = (0, _index4.default)(dirtyOptions);
  endOfWeekOptions.weekStartsOn = 1;
  return (0, _index2.default)(dirtyDate, endOfWeekOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfISOWeekYear/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/endOfISOWeekYear/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfISOWeekYear;

var _index = __webpack_require__(/*! ../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var date = (0, _index4.default)(fourthOfJanuaryOfNextYear, dirtyOptions);
  date.setMilliseconds(date.getMilliseconds() - 1);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfMinute/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/endOfMinute/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfMinute;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setSeconds(59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfMonth/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/endOfMonth/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfQuarter/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/endOfQuarter/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfQuarter;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfSecond/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/endOfSecond/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfSecond;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a second
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setMilliseconds(999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfWeek/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/endOfWeek/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfWeek;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};

  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index4.default)(dirtyDate, options);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/endOfYear/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/endOfYear/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/format/_lib/formatters/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/format/_lib/formatters/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/_lib/getUTCDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCISOWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/_lib/getUTCWeek/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js");

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, { width: 'abbreviated' });
      // A, B
      case 'GGGGG':
        return localize.era(era, { width: 'narrow' });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, { width: 'wide' });
    }
  },

  // Year
  y: function y(date, token, localize, options) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();

    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;

    // Two digit year
    if (token === 'yy') {
      var twoDigitYear = year % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'yo') {
      return localize.ordinalNumber(year, { unit: 'year' });
    }

    // Padding
    return addLeadingZeros(year, token.length);
  },

  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0, _index10.default)(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, { unit: 'year' });
    }

    // Padding
    return addLeadingZeros(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function R(date, token, localize, options) {
    var isoWeekYear = (0, _index6.default)(date, options);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token, localize, options) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },

  // Quarter
  Q: function Q(date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, { unit: 'quarter' });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, { width: 'abbreviated', context: 'formatting' });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, { width: 'narrow', context: 'formatting' });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, { width: 'wide', context: 'formatting' });
    }
  },

  // Stand-alone quarter
  q: function q(date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, { unit: 'quarter' });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, { width: 'abbreviated', context: 'standalone' });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, { width: 'narrow', context: 'standalone' });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, { width: 'wide', context: 'standalone' });
    }
  },

  // Month
  M: function M(date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'MM':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, { unit: 'month' });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, { width: 'abbreviated', context: 'formatting' });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, { width: 'narrow', context: 'formatting' });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, { width: 'wide', context: 'formatting' });
    }
  },

  // Stand-alone month
  L: function L(date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, { unit: 'month' });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, { width: 'abbreviated', context: 'standalone' });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, { width: 'narrow', context: 'standalone' });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, { width: 'wide', context: 'standalone' });
    }
  },

  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0, _index8.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, { unit: 'week' });
    }

    return addLeadingZeros(week, token.length);
  },

  // ISO week of year
  I: function I(date, token, localize, options) {
    var isoWeek = (0, _index4.default)(date, options);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, { unit: 'week' });
    }

    return addLeadingZeros(isoWeek, token.length);
  },

  // Day of the month
  d: function d(date, token, localize, options) {
    var dayOfMonth = date.getUTCDate();

    if (token === 'do') {
      return localize.ordinalNumber(dayOfMonth, { unit: 'date' });
    }

    return addLeadingZeros(dayOfMonth, token.length);
  },

  // Day of year
  D: function D(date, token, localize, options) {
    var dayOfYear = (0, _index2.default)(date, options);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, { unit: 'dayOfYear' });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },

  // Day of week
  E: function E(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, { width: 'abbreviated', context: 'formatting' });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, { width: 'narrow', context: 'formatting' });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, { width: 'short', context: 'formatting' });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, { width: 'wide', context: 'formatting' });
    }
  },

  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, { unit: 'day' });
      case 'eee':
        return localize.day(dayOfWeek, { width: 'abbreviated', context: 'formatting' });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, { width: 'narrow', context: 'formatting' });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, { width: 'short', context: 'formatting' });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, { width: 'wide', context: 'formatting' });
    }
  },

  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numberical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, { unit: 'day' });
      case 'ccc':
        return localize.day(dayOfWeek, { width: 'abbreviated', context: 'standalone' });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, { width: 'narrow', context: 'standalone' });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, { width: 'short', context: 'standalone' });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, { width: 'wide', context: 'standalone' });
    }
  },

  // ISO day of week
  i: function i(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, { unit: 'day' });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, { width: 'abbreviated', context: 'formatting' });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, { width: 'narrow', context: 'formatting' });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, { width: 'short', context: 'formatting' });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, { width: 'wide', context: 'formatting' });
    }
  },

  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'abbreviated', context: 'formatting' });
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'narrow', context: 'formatting' });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'wide', context: 'formatting' });
    }
  },

  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'abbreviated', context: 'formatting' });
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'narrow', context: 'formatting' });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'wide', context: 'formatting' });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'abbreviated', context: 'formatting' });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'narrow', context: 'formatting' });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, { width: 'wide', context: 'formatting' });
    }
  },

  // Hour [1-12]
  h: function h(date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (hours === 0) {
      hours = 12;
    }

    if (token === 'ho') {
      return localize.ordinalNumber(hours, { unit: 'hour' });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Hour [0-23]
  H: function H(date, token, localize, options) {
    var hours = date.getUTCHours();

    if (token === 'Ho') {
      return localize.ordinalNumber(hours, { unit: 'hour' });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Hour [0-11]
  K: function K(date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, { unit: 'hour' });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Hour [1-24]
  k: function k(date, token, localize, options) {
    var hours = date.getUTCHours();

    if (hours === 0) {
      hours = 24;
    }

    if (token === 'ko') {
      return localize.ordinalNumber(hours, { unit: 'hour' });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Minute
  m: function m(date, token, localize, options) {
    var minutes = date.getUTCMinutes();

    if (token === 'mo') {
      return localize.ordinalNumber(minutes, { unit: 'minute' });
    }

    return addLeadingZeros(minutes, token.length);
  },

  // Second
  s: function s(date, token, localize, options) {
    var seconds = date.getUTCSeconds();

    if (token === 'so') {
      return localize.ordinalNumber(seconds, { unit: 'second' });
    }

    return addLeadingZeros(seconds, token.length);
  },

  // Fraction of second
  S: function S(date, token, localize, options) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, numberOfDigits);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },

  // Timezone (GMT)
  O: function O(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },

  // Timezone (specific non-location)
  z: function z(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },

  // Seconds timestamp
  t: function t(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function T(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes;
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimeter);
}

function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimeter = dirtyDelimeter || '';
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}

exports.default = formatters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/format/_lib/longFormatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/format/_lib/longFormatters/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function dateLongFormatter(pattern, formatLong, options) {
  switch (pattern) {
    case 'P':
      return formatLong.date({ width: 'short' });
    case 'PP':
      return formatLong.date({ width: 'medium' });
    case 'PPP':
      return formatLong.date({ width: 'long' });
    case 'PPPP':
    default:
      return formatLong.date({ width: 'full' });
  }
}

function timeLongFormatter(pattern, formatLong, options) {
  switch (pattern) {
    case 'p':
      return formatLong.time({ width: 'short' });
    case 'pp':
      return formatLong.time({ width: 'medium' });
    case 'ppp':
      return formatLong.time({ width: 'long' });
    case 'pppp':
    default:
      return formatLong.time({ width: 'full' });
  }
}

function dateTimeLongFormatter(pattern, formatLong, options) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong, options);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({ width: 'short' });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({ width: 'medium' });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({ width: 'long' });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({ width: 'full' });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong, options)).replace('{{time}}', timeLongFormatter(timePattern, formatLong, options));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

exports.default = longFormatters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/isValid/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ./_lib/formatters/index.js */ "./node_modules/date-fns/format/_lib/formatters/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ./_lib/longFormatters/index.js */ "./node_modules/date-fns/format/_lib/longFormatters/index.js");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js");

var _index16 = _interopRequireDefault(_index15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5     |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               |       |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             |       |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/dd/yyyy'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   "do 'de' MMMM yyyy",
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(
 *   new Date(2014, 6, 2, 15),
 *   "h 'o''clock'"
 * )
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || _index10.default;

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0, _index6.default)(dirtyDate, options);

  if (!(0, _index8.default)(originalDate, options)) {
    return 'Invalid Date';
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0, _index4.default)(originalDate);
  var utcDate = (0, _index16.default)(originalDate, timezoneOffset, options);

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };

  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _index14.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _index12.default[firstCharacter];
    if (formatter) {
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    return substring;
  }).join('');

  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/formatDistance/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/formatDistance/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/differenceInSeconds/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/differenceInMonths/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js");

var _index14 = _interopRequireDefault(_index13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} date - the date
 * @param {Date|String|Number} baseDate - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale || _index14.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0, _index4.default)(dirtyDate, dirtyBaseDate, options);

  if (isNaN(comparison)) {
    return 'Invalid Date';
  }

  var localizeOptions = (0, _index12.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;

  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0, _index6.default)(dirtyBaseDate, options);
    dateRight = (0, _index6.default)(dirtyDate, options);
  } else {
    dateLeft = (0, _index6.default)(dirtyDate, options);
    dateRight = (0, _index6.default)(dirtyBaseDate, options);
  }

  var seconds = (0, _index8.default)(dateRight, dateLeft, options);
  var offsetInSeconds = ((0, _index2.default)(dateRight) - (0, _index2.default)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0, _index10.default)(dateRight, dateLeft, options);

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/formatDistanceStrict/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/formatDistanceStrict/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistanceStrict;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/differenceInSeconds/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js");

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MINUTES_IN_DAY = 1440;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_YEAR = 525600;

/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} date - the date
 * @param {Date|String|Number} baseDate - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistanceStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistanceStrict(
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = formatDistanceStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'minute'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = formatDistanceStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'month', roundingMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistanceStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function formatDistanceStrict(dirtyDate, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale || _index12.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0, _index4.default)(dirtyDate, dirtyBaseDate, options);

  if (isNaN(comparison)) {
    return 'Invalid Date';
  }

  var localizeOptions = (0, _index10.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;

  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0, _index6.default)(dirtyBaseDate, options);
    dateRight = (0, _index6.default)(dirtyDate, options);
  } else {
    dateLeft = (0, _index6.default)(dirtyDate, options);
    dateRight = (0, _index6.default)(dirtyBaseDate, options);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var seconds = (0, _index8.default)(dateRight, dateLeft, dirtyOptions);
  var offsetInSeconds = ((0, _index2.default)(dateRight) - (0, _index2.default)(dateLeft)) / 1000;
  var minutes = roundingMethodFn((seconds - offsetInSeconds) / 60);

  var unit;
  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  }

  // 0 up to 60 seconds
  if (unit === 'second') {
    return locale.formatDistance('xSeconds', seconds, localizeOptions);

    // 1 up to 60 mins
  } else if (unit === 'minute') {
    return locale.formatDistance('xMinutes', minutes, localizeOptions);

    // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions);

    // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', months, localizeOptions);

    // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(minutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/formatRelative/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/formatRelative/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;

var _index = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../format/index.js */ "./node_modules/date-fns/format/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js");

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param {Date|String|Number} date - the date to format
 * @param {Date|String|Number} baseDate - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 */
function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var baseDate = (0, _index4.default)(dirtyBaseDate, dirtyOptions);

  var options = dirtyOptions || {};
  var locale = options.locale || _index10.default;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = (0, _index8.default)(date, baseDate, options);

  if (isNaN(diff)) {
    return 'Invalid Date';
  }

  var token;
  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var utcDate = (0, _index12.default)(date, (0, _index2.default)(date), options);
  var utcBaseDate = (0, _index12.default)(baseDate, (0, _index2.default)(baseDate), options);
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, options);
  return (0, _index6.default)(date, formatStr, options);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/_lib/convertToFP/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/_lib/convertToFP/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToFP;
function convertToFP(fn, arity, a) {
  a = a || [];

  if (a.length >= arity) {
    return fn.apply(null, a.slice(0, arity).reverse());
  }

  return function () {
    var args = Array.prototype.slice.call(arguments);
    return convertToFP(fn, arity, a.concat(args));
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/fp/addDays/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/addDays/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addDays = (0, _index4.default)(_index2.default, 2);

exports.default = addDays;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addDaysWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/addDaysWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addDaysWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addDaysWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addHours/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/addHours/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addHours/index.js */ "./node_modules/date-fns/addHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addHours = (0, _index4.default)(_index2.default, 2);

exports.default = addHours;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addHoursWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/addHoursWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addHours/index.js */ "./node_modules/date-fns/addHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addHoursWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addHoursWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addISOWeekYears/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/addISOWeekYears/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addISOWeekYears/index.js */ "./node_modules/date-fns/addISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addISOWeekYears = (0, _index4.default)(_index2.default, 2);

exports.default = addISOWeekYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addISOWeekYearsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/addISOWeekYearsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addISOWeekYears/index.js */ "./node_modules/date-fns/addISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addISOWeekYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addISOWeekYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMilliseconds/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/addMilliseconds/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMilliseconds = (0, _index4.default)(_index2.default, 2);

exports.default = addMilliseconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMillisecondsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/addMillisecondsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMillisecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addMillisecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMinutes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/addMinutes/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMinutes/index.js */ "./node_modules/date-fns/addMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMinutes = (0, _index4.default)(_index2.default, 2);

exports.default = addMinutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMinutesWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/addMinutesWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMinutes/index.js */ "./node_modules/date-fns/addMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMinutesWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addMinutesWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMonths/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/addMonths/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMonths/index.js */ "./node_modules/date-fns/addMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMonths = (0, _index4.default)(_index2.default, 2);

exports.default = addMonths;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addMonthsWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/addMonthsWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addMonths/index.js */ "./node_modules/date-fns/addMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addMonthsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addMonthsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addQuarters/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/addQuarters/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addQuarters/index.js */ "./node_modules/date-fns/addQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addQuarters = (0, _index4.default)(_index2.default, 2);

exports.default = addQuarters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addQuartersWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/addQuartersWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addQuarters/index.js */ "./node_modules/date-fns/addQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addQuartersWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addQuartersWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addSeconds/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/addSeconds/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addSeconds/index.js */ "./node_modules/date-fns/addSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addSeconds = (0, _index4.default)(_index2.default, 2);

exports.default = addSeconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addSecondsWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/addSecondsWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addSeconds/index.js */ "./node_modules/date-fns/addSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addSecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addSecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addWeeks/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/addWeeks/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addWeeks/index.js */ "./node_modules/date-fns/addWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addWeeks = (0, _index4.default)(_index2.default, 2);

exports.default = addWeeks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addWeeksWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/addWeeksWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addWeeks/index.js */ "./node_modules/date-fns/addWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addWeeksWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addWeeksWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addYears/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/addYears/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addYears/index.js */ "./node_modules/date-fns/addYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addYears = (0, _index4.default)(_index2.default, 2);

exports.default = addYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/addYearsWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/addYearsWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../addYears/index.js */ "./node_modules/date-fns/addYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var addYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = addYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/areIntervalsOverlapping/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/areIntervalsOverlapping/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../areIntervalsOverlapping/index.js */ "./node_modules/date-fns/areIntervalsOverlapping/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var areIntervalsOverlapping = (0, _index4.default)(_index2.default, 2);

exports.default = areIntervalsOverlapping;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/areIntervalsOverlappingWithOptions/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/fp/areIntervalsOverlappingWithOptions/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../areIntervalsOverlapping/index.js */ "./node_modules/date-fns/areIntervalsOverlapping/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var areIntervalsOverlappingWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = areIntervalsOverlappingWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/closestIndexTo/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/closestIndexTo/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../closestIndexTo/index.js */ "./node_modules/date-fns/closestIndexTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var closestIndexTo = (0, _index4.default)(_index2.default, 2);

exports.default = closestIndexTo;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/closestIndexToWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/closestIndexToWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../closestIndexTo/index.js */ "./node_modules/date-fns/closestIndexTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var closestIndexToWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = closestIndexToWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/closestTo/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/closestTo/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../closestTo/index.js */ "./node_modules/date-fns/closestTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var closestTo = (0, _index4.default)(_index2.default, 2);

exports.default = closestTo;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/closestToWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/closestToWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../closestTo/index.js */ "./node_modules/date-fns/closestTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var closestToWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = closestToWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/compareAsc/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/compareAsc/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var compareAsc = (0, _index4.default)(_index2.default, 2);

exports.default = compareAsc;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/compareAscWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/compareAscWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../compareAsc/index.js */ "./node_modules/date-fns/compareAsc/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var compareAscWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = compareAscWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/compareDesc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/compareDesc/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../compareDesc/index.js */ "./node_modules/date-fns/compareDesc/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var compareDesc = (0, _index4.default)(_index2.default, 2);

exports.default = compareDesc;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/compareDescWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/compareDescWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../compareDesc/index.js */ "./node_modules/date-fns/compareDesc/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var compareDescWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = compareDescWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarDays/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarDays/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarDays = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarDays;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarDaysWithOptions/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarDaysWithOptions/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarDaysWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarDaysWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarISOWeekYears/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarISOWeekYears/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarISOWeekYears/index.js */ "./node_modules/date-fns/differenceInCalendarISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarISOWeekYears = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarISOWeekYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarISOWeekYearsWithOptions/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarISOWeekYearsWithOptions/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarISOWeekYears/index.js */ "./node_modules/date-fns/differenceInCalendarISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarISOWeekYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarISOWeekYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarISOWeeks/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarISOWeeks/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarISOWeeks/index.js */ "./node_modules/date-fns/differenceInCalendarISOWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarISOWeeks = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarISOWeeks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarISOWeeksWithOptions/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarISOWeeksWithOptions/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarISOWeeks/index.js */ "./node_modules/date-fns/differenceInCalendarISOWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarISOWeeksWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarISOWeeksWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarMonths/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarMonths/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/differenceInCalendarMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarMonths = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarMonths;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarMonthsWithOptions/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarMonthsWithOptions/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/differenceInCalendarMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarMonthsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarMonthsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarQuarters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarQuarters/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarQuarters/index.js */ "./node_modules/date-fns/differenceInCalendarQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarQuarters = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarQuarters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarQuartersWithOptions/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarQuartersWithOptions/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarQuarters/index.js */ "./node_modules/date-fns/differenceInCalendarQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarQuartersWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarQuartersWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarWeeks/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarWeeks/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/differenceInCalendarWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarWeeks = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarWeeks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarWeeksWithOptions/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarWeeksWithOptions/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/differenceInCalendarWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarWeeksWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarWeeksWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarYears/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarYears/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarYears/index.js */ "./node_modules/date-fns/differenceInCalendarYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarYears = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInCalendarYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInCalendarYearsWithOptions/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInCalendarYearsWithOptions/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInCalendarYears/index.js */ "./node_modules/date-fns/differenceInCalendarYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInCalendarYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInCalendarYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInDays/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInDays/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInDays/index.js */ "./node_modules/date-fns/differenceInDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInDays = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInDays;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInDaysWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInDaysWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInDays/index.js */ "./node_modules/date-fns/differenceInDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInDaysWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInDaysWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInHours/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInHours/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInHours/index.js */ "./node_modules/date-fns/differenceInHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInHours = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInHours;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInHoursWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInHoursWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInHours/index.js */ "./node_modules/date-fns/differenceInHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInHoursWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInHoursWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInISOWeekYears/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInISOWeekYears/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInISOWeekYears/index.js */ "./node_modules/date-fns/differenceInISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInISOWeekYears = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInISOWeekYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInISOWeekYearsWithOptions/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInISOWeekYearsWithOptions/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInISOWeekYears/index.js */ "./node_modules/date-fns/differenceInISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInISOWeekYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInISOWeekYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMilliseconds/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMilliseconds/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMilliseconds/index.js */ "./node_modules/date-fns/differenceInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMilliseconds = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInMilliseconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMillisecondsWithOptions/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMillisecondsWithOptions/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMilliseconds/index.js */ "./node_modules/date-fns/differenceInMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMillisecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInMillisecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMinutes/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMinutes/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMinutes/index.js */ "./node_modules/date-fns/differenceInMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMinutes = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInMinutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMinutesWithOptions/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMinutesWithOptions/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMinutes/index.js */ "./node_modules/date-fns/differenceInMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMinutesWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInMinutesWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMonths/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMonths/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMonths/index.js */ "./node_modules/date-fns/differenceInMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMonths = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInMonths;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInMonthsWithOptions/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInMonthsWithOptions/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInMonths/index.js */ "./node_modules/date-fns/differenceInMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInMonthsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInMonthsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInQuarters/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInQuarters/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInQuarters/index.js */ "./node_modules/date-fns/differenceInQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInQuarters = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInQuarters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInQuartersWithOptions/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInQuartersWithOptions/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInQuarters/index.js */ "./node_modules/date-fns/differenceInQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInQuartersWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInQuartersWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInSeconds/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInSeconds/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInSeconds/index.js */ "./node_modules/date-fns/differenceInSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInSeconds = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInSeconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInSecondsWithOptions/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInSecondsWithOptions/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInSeconds/index.js */ "./node_modules/date-fns/differenceInSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInSecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInSecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInWeeks/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInWeeks/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInWeeks/index.js */ "./node_modules/date-fns/differenceInWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInWeeks = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInWeeks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInWeeksWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInWeeksWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInWeeks/index.js */ "./node_modules/date-fns/differenceInWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInWeeksWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInWeeksWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInYears/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInYears/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInYears/index.js */ "./node_modules/date-fns/differenceInYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInYears = (0, _index4.default)(_index2.default, 2);

exports.default = differenceInYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/differenceInYearsWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/differenceInYearsWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../differenceInYears/index.js */ "./node_modules/date-fns/differenceInYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var differenceInYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = differenceInYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/eachDayOfInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/eachDayOfInterval/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../eachDayOfInterval/index.js */ "./node_modules/date-fns/eachDayOfInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var eachDayOfInterval = (0, _index4.default)(_index2.default, 1);

exports.default = eachDayOfInterval;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/eachDayOfIntervalWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/eachDayOfIntervalWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../eachDayOfInterval/index.js */ "./node_modules/date-fns/eachDayOfInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var eachDayOfIntervalWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = eachDayOfIntervalWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/eachWeekOfInterval/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/eachWeekOfInterval/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../eachWeekOfInterval/index.js */ "./node_modules/date-fns/eachWeekOfInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var eachWeekOfInterval = (0, _index4.default)(_index2.default, 1);

exports.default = eachWeekOfInterval;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/eachWeekOfIntervalWithOptions/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/fp/eachWeekOfIntervalWithOptions/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../eachWeekOfInterval/index.js */ "./node_modules/date-fns/eachWeekOfInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var eachWeekOfIntervalWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = eachWeekOfIntervalWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfDay/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfDay/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfDay/index.js */ "./node_modules/date-fns/endOfDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfDay = (0, _index4.default)(_index2.default, 1);

exports.default = endOfDay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfDayWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfDayWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfDay/index.js */ "./node_modules/date-fns/endOfDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfDayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfDayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfHour/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfHour/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfHour/index.js */ "./node_modules/date-fns/endOfHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfHour = (0, _index4.default)(_index2.default, 1);

exports.default = endOfHour;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfHourWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfHourWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfHour/index.js */ "./node_modules/date-fns/endOfHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfHourWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfHourWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfISOWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfISOWeek/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfISOWeek/index.js */ "./node_modules/date-fns/endOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfISOWeek = (0, _index4.default)(_index2.default, 1);

exports.default = endOfISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfISOWeekWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfISOWeekWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfISOWeek/index.js */ "./node_modules/date-fns/endOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfISOWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfISOWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfISOWeekYear/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfISOWeekYear/index.js */ "./node_modules/date-fns/endOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfISOWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = endOfISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfISOWeekYearWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfISOWeekYearWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfISOWeekYear/index.js */ "./node_modules/date-fns/endOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfMinute/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfMinute/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfMinute/index.js */ "./node_modules/date-fns/endOfMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfMinute = (0, _index4.default)(_index2.default, 1);

exports.default = endOfMinute;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfMinuteWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfMinuteWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfMinute/index.js */ "./node_modules/date-fns/endOfMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfMinuteWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfMinuteWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfMonth/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfMonth/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfMonth/index.js */ "./node_modules/date-fns/endOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = endOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfMonthWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfMonthWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfMonth/index.js */ "./node_modules/date-fns/endOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfQuarter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfQuarter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfQuarter/index.js */ "./node_modules/date-fns/endOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfQuarter = (0, _index4.default)(_index2.default, 1);

exports.default = endOfQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfQuarterWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfQuarterWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfQuarter/index.js */ "./node_modules/date-fns/endOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfQuarterWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfSecond/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfSecond/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfSecond/index.js */ "./node_modules/date-fns/endOfSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfSecond = (0, _index4.default)(_index2.default, 1);

exports.default = endOfSecond;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfSecondWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfSecondWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfSecond/index.js */ "./node_modules/date-fns/endOfSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfSecondWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfSecondWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfWeek/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfWeek/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfWeek/index.js */ "./node_modules/date-fns/endOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfWeek = (0, _index4.default)(_index2.default, 1);

exports.default = endOfWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfWeekWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfWeekWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfWeek/index.js */ "./node_modules/date-fns/endOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfYear/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfYear/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfYear/index.js */ "./node_modules/date-fns/endOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfYear = (0, _index4.default)(_index2.default, 1);

exports.default = endOfYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/endOfYearWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/endOfYearWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../endOfYear/index.js */ "./node_modules/date-fns/endOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var endOfYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = endOfYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/format/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/fp/format/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../format/index.js */ "./node_modules/date-fns/format/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var format = (0, _index4.default)(_index2.default, 2);

exports.default = format;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatDistance/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/formatDistance/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatDistance/index.js */ "./node_modules/date-fns/formatDistance/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatDistance = (0, _index4.default)(_index2.default, 2);

exports.default = formatDistance;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatDistanceStrict/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/formatDistanceStrict/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatDistanceStrict/index.js */ "./node_modules/date-fns/formatDistanceStrict/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatDistanceStrict = (0, _index4.default)(_index2.default, 2);

exports.default = formatDistanceStrict;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatDistanceStrictWithOptions/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/fp/formatDistanceStrictWithOptions/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatDistanceStrict/index.js */ "./node_modules/date-fns/formatDistanceStrict/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatDistanceStrictWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = formatDistanceStrictWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatDistanceWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/formatDistanceWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatDistance/index.js */ "./node_modules/date-fns/formatDistance/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatDistanceWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = formatDistanceWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatRelative/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/formatRelative/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatRelative/index.js */ "./node_modules/date-fns/formatRelative/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatRelative = (0, _index4.default)(_index2.default, 2);

exports.default = formatRelative;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatRelativeWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/formatRelativeWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../formatRelative/index.js */ "./node_modules/date-fns/formatRelative/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatRelativeWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = formatRelativeWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/formatWithOptions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/formatWithOptions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../format/index.js */ "./node_modules/date-fns/format/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var formatWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = formatWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/getDate/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDate/index.js */ "./node_modules/date-fns/getDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDate = (0, _index4.default)(_index2.default, 1);

exports.default = getDate;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDateWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/getDateWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDate/index.js */ "./node_modules/date-fns/getDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDateWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getDateWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDay/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/fp/getDay/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDay/index.js */ "./node_modules/date-fns/getDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDay = (0, _index4.default)(_index2.default, 1);

exports.default = getDay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDayOfYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/getDayOfYear/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDayOfYear/index.js */ "./node_modules/date-fns/getDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDayOfYear = (0, _index4.default)(_index2.default, 1);

exports.default = getDayOfYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDayOfYearWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/getDayOfYearWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDayOfYear/index.js */ "./node_modules/date-fns/getDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDayOfYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getDayOfYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDayWithOptions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/getDayWithOptions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDay/index.js */ "./node_modules/date-fns/getDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getDayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDaysInMonth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/getDaysInMonth/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDaysInMonth/index.js */ "./node_modules/date-fns/getDaysInMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDaysInMonth = (0, _index4.default)(_index2.default, 1);

exports.default = getDaysInMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDaysInMonthWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getDaysInMonthWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDaysInMonth/index.js */ "./node_modules/date-fns/getDaysInMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDaysInMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getDaysInMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDaysInYear/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/getDaysInYear/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDaysInYear/index.js */ "./node_modules/date-fns/getDaysInYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDaysInYear = (0, _index4.default)(_index2.default, 1);

exports.default = getDaysInYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getDaysInYearWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getDaysInYearWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getDaysInYear/index.js */ "./node_modules/date-fns/getDaysInYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getDaysInYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getDaysInYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getHours/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/getHours/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getHours/index.js */ "./node_modules/date-fns/getHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getHours = (0, _index4.default)(_index2.default, 1);

exports.default = getHours;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getHoursWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/getHoursWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getHours/index.js */ "./node_modules/date-fns/getHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getHoursWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getHoursWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISODay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/getISODay/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISODay/index.js */ "./node_modules/date-fns/getISODay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISODay = (0, _index4.default)(_index2.default, 1);

exports.default = getISODay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISODayWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/getISODayWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISODay/index.js */ "./node_modules/date-fns/getISODay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISODayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getISODayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeek/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeek/index.js */ "./node_modules/date-fns/getISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeek = (0, _index4.default)(_index2.default, 1);

exports.default = getISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeekWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeekWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeek/index.js */ "./node_modules/date-fns/getISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeekYear/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeekYear/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = getISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeekYearWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeekYearWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeeksInYear/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeeksInYear/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeeksInYear/index.js */ "./node_modules/date-fns/getISOWeeksInYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeeksInYear = (0, _index4.default)(_index2.default, 1);

exports.default = getISOWeeksInYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getISOWeeksInYearWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/getISOWeeksInYearWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getISOWeeksInYear/index.js */ "./node_modules/date-fns/getISOWeeksInYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getISOWeeksInYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getISOWeeksInYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMilliseconds/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/getMilliseconds/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMilliseconds/index.js */ "./node_modules/date-fns/getMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMilliseconds = (0, _index4.default)(_index2.default, 1);

exports.default = getMilliseconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMillisecondsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getMillisecondsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMilliseconds/index.js */ "./node_modules/date-fns/getMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMillisecondsWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getMillisecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMinutes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/getMinutes/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMinutes/index.js */ "./node_modules/date-fns/getMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMinutes = (0, _index4.default)(_index2.default, 1);

exports.default = getMinutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMinutesWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/getMinutesWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMinutes/index.js */ "./node_modules/date-fns/getMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMinutesWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getMinutesWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMonth/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/getMonth/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMonth/index.js */ "./node_modules/date-fns/getMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMonth = (0, _index4.default)(_index2.default, 1);

exports.default = getMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getMonthWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/getMonthWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getMonth/index.js */ "./node_modules/date-fns/getMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getOverlappingDaysInIntervals/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/fp/getOverlappingDaysInIntervals/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getOverlappingDaysInIntervals/index.js */ "./node_modules/date-fns/getOverlappingDaysInIntervals/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getOverlappingDaysInIntervals = (0, _index4.default)(_index2.default, 2);

exports.default = getOverlappingDaysInIntervals;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getOverlappingDaysInIntervals/index.js */ "./node_modules/date-fns/getOverlappingDaysInIntervals/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getOverlappingDaysInIntervalsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = getOverlappingDaysInIntervalsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getQuarter/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/getQuarter/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getQuarter/index.js */ "./node_modules/date-fns/getQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getQuarter = (0, _index4.default)(_index2.default, 1);

exports.default = getQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getQuarterWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/getQuarterWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getQuarter/index.js */ "./node_modules/date-fns/getQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getQuarterWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getSeconds/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/getSeconds/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getSeconds/index.js */ "./node_modules/date-fns/getSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getSeconds = (0, _index4.default)(_index2.default, 1);

exports.default = getSeconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getSecondsWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/getSecondsWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getSeconds/index.js */ "./node_modules/date-fns/getSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getSecondsWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getSecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getTime/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/getTime/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getTime/index.js */ "./node_modules/date-fns/getTime/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getTime = (0, _index4.default)(_index2.default, 1);

exports.default = getTime;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getTimeWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/getTimeWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getTime/index.js */ "./node_modules/date-fns/getTime/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getTimeWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getTimeWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeek/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeek/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeek/index.js */ "./node_modules/date-fns/getWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeek = (0, _index4.default)(_index2.default, 1);

exports.default = getWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeekOfMonth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeekOfMonth/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeekOfMonth/index.js */ "./node_modules/date-fns/getWeekOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeekOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = getWeekOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeekOfMonthWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeekOfMonthWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeekOfMonth/index.js */ "./node_modules/date-fns/getWeekOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeekOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getWeekOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeekWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeekWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeek/index.js */ "./node_modules/date-fns/getWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeekYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeekYear/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeekYear/index.js */ "./node_modules/date-fns/getWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = getWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeekYearWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeekYearWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeekYear/index.js */ "./node_modules/date-fns/getWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeeksInMonth/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeeksInMonth/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeeksInMonth/index.js */ "./node_modules/date-fns/getWeeksInMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeeksInMonth = (0, _index4.default)(_index2.default, 1);

exports.default = getWeeksInMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getWeeksInMonthWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/getWeeksInMonthWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getWeeksInMonth/index.js */ "./node_modules/date-fns/getWeeksInMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getWeeksInMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getWeeksInMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getYear/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/getYear/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getYear/index.js */ "./node_modules/date-fns/getYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getYear = (0, _index4.default)(_index2.default, 1);

exports.default = getYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/getYearWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/getYearWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../getYear/index.js */ "./node_modules/date-fns/getYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var getYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = getYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/index.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/fp/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

module.exports = {
  addDays: __webpack_require__(/*! ./addDays/index.js */ "./node_modules/date-fns/fp/addDays/index.js"),
  addDaysWithOptions: __webpack_require__(/*! ./addDaysWithOptions/index.js */ "./node_modules/date-fns/fp/addDaysWithOptions/index.js"),
  addHours: __webpack_require__(/*! ./addHours/index.js */ "./node_modules/date-fns/fp/addHours/index.js"),
  addHoursWithOptions: __webpack_require__(/*! ./addHoursWithOptions/index.js */ "./node_modules/date-fns/fp/addHoursWithOptions/index.js"),
  addISOWeekYears: __webpack_require__(/*! ./addISOWeekYears/index.js */ "./node_modules/date-fns/fp/addISOWeekYears/index.js"),
  addISOWeekYearsWithOptions: __webpack_require__(/*! ./addISOWeekYearsWithOptions/index.js */ "./node_modules/date-fns/fp/addISOWeekYearsWithOptions/index.js"),
  addMilliseconds: __webpack_require__(/*! ./addMilliseconds/index.js */ "./node_modules/date-fns/fp/addMilliseconds/index.js"),
  addMillisecondsWithOptions: __webpack_require__(/*! ./addMillisecondsWithOptions/index.js */ "./node_modules/date-fns/fp/addMillisecondsWithOptions/index.js"),
  addMinutes: __webpack_require__(/*! ./addMinutes/index.js */ "./node_modules/date-fns/fp/addMinutes/index.js"),
  addMinutesWithOptions: __webpack_require__(/*! ./addMinutesWithOptions/index.js */ "./node_modules/date-fns/fp/addMinutesWithOptions/index.js"),
  addMonths: __webpack_require__(/*! ./addMonths/index.js */ "./node_modules/date-fns/fp/addMonths/index.js"),
  addMonthsWithOptions: __webpack_require__(/*! ./addMonthsWithOptions/index.js */ "./node_modules/date-fns/fp/addMonthsWithOptions/index.js"),
  addQuarters: __webpack_require__(/*! ./addQuarters/index.js */ "./node_modules/date-fns/fp/addQuarters/index.js"),
  addQuartersWithOptions: __webpack_require__(/*! ./addQuartersWithOptions/index.js */ "./node_modules/date-fns/fp/addQuartersWithOptions/index.js"),
  addSeconds: __webpack_require__(/*! ./addSeconds/index.js */ "./node_modules/date-fns/fp/addSeconds/index.js"),
  addSecondsWithOptions: __webpack_require__(/*! ./addSecondsWithOptions/index.js */ "./node_modules/date-fns/fp/addSecondsWithOptions/index.js"),
  addWeeks: __webpack_require__(/*! ./addWeeks/index.js */ "./node_modules/date-fns/fp/addWeeks/index.js"),
  addWeeksWithOptions: __webpack_require__(/*! ./addWeeksWithOptions/index.js */ "./node_modules/date-fns/fp/addWeeksWithOptions/index.js"),
  addYears: __webpack_require__(/*! ./addYears/index.js */ "./node_modules/date-fns/fp/addYears/index.js"),
  addYearsWithOptions: __webpack_require__(/*! ./addYearsWithOptions/index.js */ "./node_modules/date-fns/fp/addYearsWithOptions/index.js"),
  areIntervalsOverlapping: __webpack_require__(/*! ./areIntervalsOverlapping/index.js */ "./node_modules/date-fns/fp/areIntervalsOverlapping/index.js"),
  areIntervalsOverlappingWithOptions: __webpack_require__(/*! ./areIntervalsOverlappingWithOptions/index.js */ "./node_modules/date-fns/fp/areIntervalsOverlappingWithOptions/index.js"),
  closestIndexTo: __webpack_require__(/*! ./closestIndexTo/index.js */ "./node_modules/date-fns/fp/closestIndexTo/index.js"),
  closestIndexToWithOptions: __webpack_require__(/*! ./closestIndexToWithOptions/index.js */ "./node_modules/date-fns/fp/closestIndexToWithOptions/index.js"),
  closestTo: __webpack_require__(/*! ./closestTo/index.js */ "./node_modules/date-fns/fp/closestTo/index.js"),
  closestToWithOptions: __webpack_require__(/*! ./closestToWithOptions/index.js */ "./node_modules/date-fns/fp/closestToWithOptions/index.js"),
  compareAsc: __webpack_require__(/*! ./compareAsc/index.js */ "./node_modules/date-fns/fp/compareAsc/index.js"),
  compareAscWithOptions: __webpack_require__(/*! ./compareAscWithOptions/index.js */ "./node_modules/date-fns/fp/compareAscWithOptions/index.js"),
  compareDesc: __webpack_require__(/*! ./compareDesc/index.js */ "./node_modules/date-fns/fp/compareDesc/index.js"),
  compareDescWithOptions: __webpack_require__(/*! ./compareDescWithOptions/index.js */ "./node_modules/date-fns/fp/compareDescWithOptions/index.js"),
  differenceInCalendarDays: __webpack_require__(/*! ./differenceInCalendarDays/index.js */ "./node_modules/date-fns/fp/differenceInCalendarDays/index.js"),
  differenceInCalendarDaysWithOptions: __webpack_require__(/*! ./differenceInCalendarDaysWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarDaysWithOptions/index.js"),
  differenceInCalendarISOWeekYears: __webpack_require__(/*! ./differenceInCalendarISOWeekYears/index.js */ "./node_modules/date-fns/fp/differenceInCalendarISOWeekYears/index.js"),
  differenceInCalendarISOWeekYearsWithOptions: __webpack_require__(/*! ./differenceInCalendarISOWeekYearsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarISOWeekYearsWithOptions/index.js"),
  differenceInCalendarISOWeeks: __webpack_require__(/*! ./differenceInCalendarISOWeeks/index.js */ "./node_modules/date-fns/fp/differenceInCalendarISOWeeks/index.js"),
  differenceInCalendarISOWeeksWithOptions: __webpack_require__(/*! ./differenceInCalendarISOWeeksWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarISOWeeksWithOptions/index.js"),
  differenceInCalendarMonths: __webpack_require__(/*! ./differenceInCalendarMonths/index.js */ "./node_modules/date-fns/fp/differenceInCalendarMonths/index.js"),
  differenceInCalendarMonthsWithOptions: __webpack_require__(/*! ./differenceInCalendarMonthsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarMonthsWithOptions/index.js"),
  differenceInCalendarQuarters: __webpack_require__(/*! ./differenceInCalendarQuarters/index.js */ "./node_modules/date-fns/fp/differenceInCalendarQuarters/index.js"),
  differenceInCalendarQuartersWithOptions: __webpack_require__(/*! ./differenceInCalendarQuartersWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarQuartersWithOptions/index.js"),
  differenceInCalendarWeeks: __webpack_require__(/*! ./differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/fp/differenceInCalendarWeeks/index.js"),
  differenceInCalendarWeeksWithOptions: __webpack_require__(/*! ./differenceInCalendarWeeksWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarWeeksWithOptions/index.js"),
  differenceInCalendarYears: __webpack_require__(/*! ./differenceInCalendarYears/index.js */ "./node_modules/date-fns/fp/differenceInCalendarYears/index.js"),
  differenceInCalendarYearsWithOptions: __webpack_require__(/*! ./differenceInCalendarYearsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInCalendarYearsWithOptions/index.js"),
  differenceInDays: __webpack_require__(/*! ./differenceInDays/index.js */ "./node_modules/date-fns/fp/differenceInDays/index.js"),
  differenceInDaysWithOptions: __webpack_require__(/*! ./differenceInDaysWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInDaysWithOptions/index.js"),
  differenceInHours: __webpack_require__(/*! ./differenceInHours/index.js */ "./node_modules/date-fns/fp/differenceInHours/index.js"),
  differenceInHoursWithOptions: __webpack_require__(/*! ./differenceInHoursWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInHoursWithOptions/index.js"),
  differenceInISOWeekYears: __webpack_require__(/*! ./differenceInISOWeekYears/index.js */ "./node_modules/date-fns/fp/differenceInISOWeekYears/index.js"),
  differenceInISOWeekYearsWithOptions: __webpack_require__(/*! ./differenceInISOWeekYearsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInISOWeekYearsWithOptions/index.js"),
  differenceInMilliseconds: __webpack_require__(/*! ./differenceInMilliseconds/index.js */ "./node_modules/date-fns/fp/differenceInMilliseconds/index.js"),
  differenceInMillisecondsWithOptions: __webpack_require__(/*! ./differenceInMillisecondsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInMillisecondsWithOptions/index.js"),
  differenceInMinutes: __webpack_require__(/*! ./differenceInMinutes/index.js */ "./node_modules/date-fns/fp/differenceInMinutes/index.js"),
  differenceInMinutesWithOptions: __webpack_require__(/*! ./differenceInMinutesWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInMinutesWithOptions/index.js"),
  differenceInMonths: __webpack_require__(/*! ./differenceInMonths/index.js */ "./node_modules/date-fns/fp/differenceInMonths/index.js"),
  differenceInMonthsWithOptions: __webpack_require__(/*! ./differenceInMonthsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInMonthsWithOptions/index.js"),
  differenceInQuarters: __webpack_require__(/*! ./differenceInQuarters/index.js */ "./node_modules/date-fns/fp/differenceInQuarters/index.js"),
  differenceInQuartersWithOptions: __webpack_require__(/*! ./differenceInQuartersWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInQuartersWithOptions/index.js"),
  differenceInSeconds: __webpack_require__(/*! ./differenceInSeconds/index.js */ "./node_modules/date-fns/fp/differenceInSeconds/index.js"),
  differenceInSecondsWithOptions: __webpack_require__(/*! ./differenceInSecondsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInSecondsWithOptions/index.js"),
  differenceInWeeks: __webpack_require__(/*! ./differenceInWeeks/index.js */ "./node_modules/date-fns/fp/differenceInWeeks/index.js"),
  differenceInWeeksWithOptions: __webpack_require__(/*! ./differenceInWeeksWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInWeeksWithOptions/index.js"),
  differenceInYears: __webpack_require__(/*! ./differenceInYears/index.js */ "./node_modules/date-fns/fp/differenceInYears/index.js"),
  differenceInYearsWithOptions: __webpack_require__(/*! ./differenceInYearsWithOptions/index.js */ "./node_modules/date-fns/fp/differenceInYearsWithOptions/index.js"),
  eachDayOfInterval: __webpack_require__(/*! ./eachDayOfInterval/index.js */ "./node_modules/date-fns/fp/eachDayOfInterval/index.js"),
  eachDayOfIntervalWithOptions: __webpack_require__(/*! ./eachDayOfIntervalWithOptions/index.js */ "./node_modules/date-fns/fp/eachDayOfIntervalWithOptions/index.js"),
  eachWeekOfInterval: __webpack_require__(/*! ./eachWeekOfInterval/index.js */ "./node_modules/date-fns/fp/eachWeekOfInterval/index.js"),
  eachWeekOfIntervalWithOptions: __webpack_require__(/*! ./eachWeekOfIntervalWithOptions/index.js */ "./node_modules/date-fns/fp/eachWeekOfIntervalWithOptions/index.js"),
  endOfDay: __webpack_require__(/*! ./endOfDay/index.js */ "./node_modules/date-fns/fp/endOfDay/index.js"),
  endOfDayWithOptions: __webpack_require__(/*! ./endOfDayWithOptions/index.js */ "./node_modules/date-fns/fp/endOfDayWithOptions/index.js"),
  endOfHour: __webpack_require__(/*! ./endOfHour/index.js */ "./node_modules/date-fns/fp/endOfHour/index.js"),
  endOfHourWithOptions: __webpack_require__(/*! ./endOfHourWithOptions/index.js */ "./node_modules/date-fns/fp/endOfHourWithOptions/index.js"),
  endOfISOWeek: __webpack_require__(/*! ./endOfISOWeek/index.js */ "./node_modules/date-fns/fp/endOfISOWeek/index.js"),
  endOfISOWeekWithOptions: __webpack_require__(/*! ./endOfISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/endOfISOWeekWithOptions/index.js"),
  endOfISOWeekYear: __webpack_require__(/*! ./endOfISOWeekYear/index.js */ "./node_modules/date-fns/fp/endOfISOWeekYear/index.js"),
  endOfISOWeekYearWithOptions: __webpack_require__(/*! ./endOfISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/endOfISOWeekYearWithOptions/index.js"),
  endOfMinute: __webpack_require__(/*! ./endOfMinute/index.js */ "./node_modules/date-fns/fp/endOfMinute/index.js"),
  endOfMinuteWithOptions: __webpack_require__(/*! ./endOfMinuteWithOptions/index.js */ "./node_modules/date-fns/fp/endOfMinuteWithOptions/index.js"),
  endOfMonth: __webpack_require__(/*! ./endOfMonth/index.js */ "./node_modules/date-fns/fp/endOfMonth/index.js"),
  endOfMonthWithOptions: __webpack_require__(/*! ./endOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/endOfMonthWithOptions/index.js"),
  endOfQuarter: __webpack_require__(/*! ./endOfQuarter/index.js */ "./node_modules/date-fns/fp/endOfQuarter/index.js"),
  endOfQuarterWithOptions: __webpack_require__(/*! ./endOfQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/endOfQuarterWithOptions/index.js"),
  endOfSecond: __webpack_require__(/*! ./endOfSecond/index.js */ "./node_modules/date-fns/fp/endOfSecond/index.js"),
  endOfSecondWithOptions: __webpack_require__(/*! ./endOfSecondWithOptions/index.js */ "./node_modules/date-fns/fp/endOfSecondWithOptions/index.js"),
  endOfWeek: __webpack_require__(/*! ./endOfWeek/index.js */ "./node_modules/date-fns/fp/endOfWeek/index.js"),
  endOfWeekWithOptions: __webpack_require__(/*! ./endOfWeekWithOptions/index.js */ "./node_modules/date-fns/fp/endOfWeekWithOptions/index.js"),
  endOfYear: __webpack_require__(/*! ./endOfYear/index.js */ "./node_modules/date-fns/fp/endOfYear/index.js"),
  endOfYearWithOptions: __webpack_require__(/*! ./endOfYearWithOptions/index.js */ "./node_modules/date-fns/fp/endOfYearWithOptions/index.js"),
  format: __webpack_require__(/*! ./format/index.js */ "./node_modules/date-fns/fp/format/index.js"),
  formatDistance: __webpack_require__(/*! ./formatDistance/index.js */ "./node_modules/date-fns/fp/formatDistance/index.js"),
  formatDistanceStrict: __webpack_require__(/*! ./formatDistanceStrict/index.js */ "./node_modules/date-fns/fp/formatDistanceStrict/index.js"),
  formatDistanceStrictWithOptions: __webpack_require__(/*! ./formatDistanceStrictWithOptions/index.js */ "./node_modules/date-fns/fp/formatDistanceStrictWithOptions/index.js"),
  formatDistanceWithOptions: __webpack_require__(/*! ./formatDistanceWithOptions/index.js */ "./node_modules/date-fns/fp/formatDistanceWithOptions/index.js"),
  formatRelative: __webpack_require__(/*! ./formatRelative/index.js */ "./node_modules/date-fns/fp/formatRelative/index.js"),
  formatRelativeWithOptions: __webpack_require__(/*! ./formatRelativeWithOptions/index.js */ "./node_modules/date-fns/fp/formatRelativeWithOptions/index.js"),
  formatWithOptions: __webpack_require__(/*! ./formatWithOptions/index.js */ "./node_modules/date-fns/fp/formatWithOptions/index.js"),
  getDate: __webpack_require__(/*! ./getDate/index.js */ "./node_modules/date-fns/fp/getDate/index.js"),
  getDateWithOptions: __webpack_require__(/*! ./getDateWithOptions/index.js */ "./node_modules/date-fns/fp/getDateWithOptions/index.js"),
  getDay: __webpack_require__(/*! ./getDay/index.js */ "./node_modules/date-fns/fp/getDay/index.js"),
  getDayOfYear: __webpack_require__(/*! ./getDayOfYear/index.js */ "./node_modules/date-fns/fp/getDayOfYear/index.js"),
  getDayOfYearWithOptions: __webpack_require__(/*! ./getDayOfYearWithOptions/index.js */ "./node_modules/date-fns/fp/getDayOfYearWithOptions/index.js"),
  getDayWithOptions: __webpack_require__(/*! ./getDayWithOptions/index.js */ "./node_modules/date-fns/fp/getDayWithOptions/index.js"),
  getDaysInMonth: __webpack_require__(/*! ./getDaysInMonth/index.js */ "./node_modules/date-fns/fp/getDaysInMonth/index.js"),
  getDaysInMonthWithOptions: __webpack_require__(/*! ./getDaysInMonthWithOptions/index.js */ "./node_modules/date-fns/fp/getDaysInMonthWithOptions/index.js"),
  getDaysInYear: __webpack_require__(/*! ./getDaysInYear/index.js */ "./node_modules/date-fns/fp/getDaysInYear/index.js"),
  getDaysInYearWithOptions: __webpack_require__(/*! ./getDaysInYearWithOptions/index.js */ "./node_modules/date-fns/fp/getDaysInYearWithOptions/index.js"),
  getHours: __webpack_require__(/*! ./getHours/index.js */ "./node_modules/date-fns/fp/getHours/index.js"),
  getHoursWithOptions: __webpack_require__(/*! ./getHoursWithOptions/index.js */ "./node_modules/date-fns/fp/getHoursWithOptions/index.js"),
  getISODay: __webpack_require__(/*! ./getISODay/index.js */ "./node_modules/date-fns/fp/getISODay/index.js"),
  getISODayWithOptions: __webpack_require__(/*! ./getISODayWithOptions/index.js */ "./node_modules/date-fns/fp/getISODayWithOptions/index.js"),
  getISOWeek: __webpack_require__(/*! ./getISOWeek/index.js */ "./node_modules/date-fns/fp/getISOWeek/index.js"),
  getISOWeekWithOptions: __webpack_require__(/*! ./getISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/getISOWeekWithOptions/index.js"),
  getISOWeekYear: __webpack_require__(/*! ./getISOWeekYear/index.js */ "./node_modules/date-fns/fp/getISOWeekYear/index.js"),
  getISOWeekYearWithOptions: __webpack_require__(/*! ./getISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/getISOWeekYearWithOptions/index.js"),
  getISOWeeksInYear: __webpack_require__(/*! ./getISOWeeksInYear/index.js */ "./node_modules/date-fns/fp/getISOWeeksInYear/index.js"),
  getISOWeeksInYearWithOptions: __webpack_require__(/*! ./getISOWeeksInYearWithOptions/index.js */ "./node_modules/date-fns/fp/getISOWeeksInYearWithOptions/index.js"),
  getMilliseconds: __webpack_require__(/*! ./getMilliseconds/index.js */ "./node_modules/date-fns/fp/getMilliseconds/index.js"),
  getMillisecondsWithOptions: __webpack_require__(/*! ./getMillisecondsWithOptions/index.js */ "./node_modules/date-fns/fp/getMillisecondsWithOptions/index.js"),
  getMinutes: __webpack_require__(/*! ./getMinutes/index.js */ "./node_modules/date-fns/fp/getMinutes/index.js"),
  getMinutesWithOptions: __webpack_require__(/*! ./getMinutesWithOptions/index.js */ "./node_modules/date-fns/fp/getMinutesWithOptions/index.js"),
  getMonth: __webpack_require__(/*! ./getMonth/index.js */ "./node_modules/date-fns/fp/getMonth/index.js"),
  getMonthWithOptions: __webpack_require__(/*! ./getMonthWithOptions/index.js */ "./node_modules/date-fns/fp/getMonthWithOptions/index.js"),
  getOverlappingDaysInIntervals: __webpack_require__(/*! ./getOverlappingDaysInIntervals/index.js */ "./node_modules/date-fns/fp/getOverlappingDaysInIntervals/index.js"),
  getOverlappingDaysInIntervalsWithOptions: __webpack_require__(/*! ./getOverlappingDaysInIntervalsWithOptions/index.js */ "./node_modules/date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index.js"),
  getQuarter: __webpack_require__(/*! ./getQuarter/index.js */ "./node_modules/date-fns/fp/getQuarter/index.js"),
  getQuarterWithOptions: __webpack_require__(/*! ./getQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/getQuarterWithOptions/index.js"),
  getSeconds: __webpack_require__(/*! ./getSeconds/index.js */ "./node_modules/date-fns/fp/getSeconds/index.js"),
  getSecondsWithOptions: __webpack_require__(/*! ./getSecondsWithOptions/index.js */ "./node_modules/date-fns/fp/getSecondsWithOptions/index.js"),
  getTime: __webpack_require__(/*! ./getTime/index.js */ "./node_modules/date-fns/fp/getTime/index.js"),
  getTimeWithOptions: __webpack_require__(/*! ./getTimeWithOptions/index.js */ "./node_modules/date-fns/fp/getTimeWithOptions/index.js"),
  getWeek: __webpack_require__(/*! ./getWeek/index.js */ "./node_modules/date-fns/fp/getWeek/index.js"),
  getWeekOfMonth: __webpack_require__(/*! ./getWeekOfMonth/index.js */ "./node_modules/date-fns/fp/getWeekOfMonth/index.js"),
  getWeekOfMonthWithOptions: __webpack_require__(/*! ./getWeekOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/getWeekOfMonthWithOptions/index.js"),
  getWeekWithOptions: __webpack_require__(/*! ./getWeekWithOptions/index.js */ "./node_modules/date-fns/fp/getWeekWithOptions/index.js"),
  getWeekYear: __webpack_require__(/*! ./getWeekYear/index.js */ "./node_modules/date-fns/fp/getWeekYear/index.js"),
  getWeekYearWithOptions: __webpack_require__(/*! ./getWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/getWeekYearWithOptions/index.js"),
  getWeeksInMonth: __webpack_require__(/*! ./getWeeksInMonth/index.js */ "./node_modules/date-fns/fp/getWeeksInMonth/index.js"),
  getWeeksInMonthWithOptions: __webpack_require__(/*! ./getWeeksInMonthWithOptions/index.js */ "./node_modules/date-fns/fp/getWeeksInMonthWithOptions/index.js"),
  getYear: __webpack_require__(/*! ./getYear/index.js */ "./node_modules/date-fns/fp/getYear/index.js"),
  getYearWithOptions: __webpack_require__(/*! ./getYearWithOptions/index.js */ "./node_modules/date-fns/fp/getYearWithOptions/index.js"),
  isAfter: __webpack_require__(/*! ./isAfter/index.js */ "./node_modules/date-fns/fp/isAfter/index.js"),
  isAfterWithOptions: __webpack_require__(/*! ./isAfterWithOptions/index.js */ "./node_modules/date-fns/fp/isAfterWithOptions/index.js"),
  isBefore: __webpack_require__(/*! ./isBefore/index.js */ "./node_modules/date-fns/fp/isBefore/index.js"),
  isBeforeWithOptions: __webpack_require__(/*! ./isBeforeWithOptions/index.js */ "./node_modules/date-fns/fp/isBeforeWithOptions/index.js"),
  isDate: __webpack_require__(/*! ./isDate/index.js */ "./node_modules/date-fns/fp/isDate/index.js"),
  isDateWithOptions: __webpack_require__(/*! ./isDateWithOptions/index.js */ "./node_modules/date-fns/fp/isDateWithOptions/index.js"),
  isEqual: __webpack_require__(/*! ./isEqual/index.js */ "./node_modules/date-fns/fp/isEqual/index.js"),
  isEqualWithOptions: __webpack_require__(/*! ./isEqualWithOptions/index.js */ "./node_modules/date-fns/fp/isEqualWithOptions/index.js"),
  isFirstDayOfMonth: __webpack_require__(/*! ./isFirstDayOfMonth/index.js */ "./node_modules/date-fns/fp/isFirstDayOfMonth/index.js"),
  isFirstDayOfMonthWithOptions: __webpack_require__(/*! ./isFirstDayOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/isFirstDayOfMonthWithOptions/index.js"),
  isFriday: __webpack_require__(/*! ./isFriday/index.js */ "./node_modules/date-fns/fp/isFriday/index.js"),
  isFridayWithOptions: __webpack_require__(/*! ./isFridayWithOptions/index.js */ "./node_modules/date-fns/fp/isFridayWithOptions/index.js"),
  isLastDayOfMonth: __webpack_require__(/*! ./isLastDayOfMonth/index.js */ "./node_modules/date-fns/fp/isLastDayOfMonth/index.js"),
  isLastDayOfMonthWithOptions: __webpack_require__(/*! ./isLastDayOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/isLastDayOfMonthWithOptions/index.js"),
  isLeapYear: __webpack_require__(/*! ./isLeapYear/index.js */ "./node_modules/date-fns/fp/isLeapYear/index.js"),
  isLeapYearWithOptions: __webpack_require__(/*! ./isLeapYearWithOptions/index.js */ "./node_modules/date-fns/fp/isLeapYearWithOptions/index.js"),
  isMonday: __webpack_require__(/*! ./isMonday/index.js */ "./node_modules/date-fns/fp/isMonday/index.js"),
  isMondayWithOptions: __webpack_require__(/*! ./isMondayWithOptions/index.js */ "./node_modules/date-fns/fp/isMondayWithOptions/index.js"),
  isSameDay: __webpack_require__(/*! ./isSameDay/index.js */ "./node_modules/date-fns/fp/isSameDay/index.js"),
  isSameDayWithOptions: __webpack_require__(/*! ./isSameDayWithOptions/index.js */ "./node_modules/date-fns/fp/isSameDayWithOptions/index.js"),
  isSameHour: __webpack_require__(/*! ./isSameHour/index.js */ "./node_modules/date-fns/fp/isSameHour/index.js"),
  isSameHourWithOptions: __webpack_require__(/*! ./isSameHourWithOptions/index.js */ "./node_modules/date-fns/fp/isSameHourWithOptions/index.js"),
  isSameISOWeek: __webpack_require__(/*! ./isSameISOWeek/index.js */ "./node_modules/date-fns/fp/isSameISOWeek/index.js"),
  isSameISOWeekWithOptions: __webpack_require__(/*! ./isSameISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/isSameISOWeekWithOptions/index.js"),
  isSameISOWeekYear: __webpack_require__(/*! ./isSameISOWeekYear/index.js */ "./node_modules/date-fns/fp/isSameISOWeekYear/index.js"),
  isSameISOWeekYearWithOptions: __webpack_require__(/*! ./isSameISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/isSameISOWeekYearWithOptions/index.js"),
  isSameMinute: __webpack_require__(/*! ./isSameMinute/index.js */ "./node_modules/date-fns/fp/isSameMinute/index.js"),
  isSameMinuteWithOptions: __webpack_require__(/*! ./isSameMinuteWithOptions/index.js */ "./node_modules/date-fns/fp/isSameMinuteWithOptions/index.js"),
  isSameMonth: __webpack_require__(/*! ./isSameMonth/index.js */ "./node_modules/date-fns/fp/isSameMonth/index.js"),
  isSameMonthWithOptions: __webpack_require__(/*! ./isSameMonthWithOptions/index.js */ "./node_modules/date-fns/fp/isSameMonthWithOptions/index.js"),
  isSameQuarter: __webpack_require__(/*! ./isSameQuarter/index.js */ "./node_modules/date-fns/fp/isSameQuarter/index.js"),
  isSameQuarterWithOptions: __webpack_require__(/*! ./isSameQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/isSameQuarterWithOptions/index.js"),
  isSameSecond: __webpack_require__(/*! ./isSameSecond/index.js */ "./node_modules/date-fns/fp/isSameSecond/index.js"),
  isSameSecondWithOptions: __webpack_require__(/*! ./isSameSecondWithOptions/index.js */ "./node_modules/date-fns/fp/isSameSecondWithOptions/index.js"),
  isSameWeek: __webpack_require__(/*! ./isSameWeek/index.js */ "./node_modules/date-fns/fp/isSameWeek/index.js"),
  isSameWeekWithOptions: __webpack_require__(/*! ./isSameWeekWithOptions/index.js */ "./node_modules/date-fns/fp/isSameWeekWithOptions/index.js"),
  isSameYear: __webpack_require__(/*! ./isSameYear/index.js */ "./node_modules/date-fns/fp/isSameYear/index.js"),
  isSameYearWithOptions: __webpack_require__(/*! ./isSameYearWithOptions/index.js */ "./node_modules/date-fns/fp/isSameYearWithOptions/index.js"),
  isSaturday: __webpack_require__(/*! ./isSaturday/index.js */ "./node_modules/date-fns/fp/isSaturday/index.js"),
  isSaturdayWithOptions: __webpack_require__(/*! ./isSaturdayWithOptions/index.js */ "./node_modules/date-fns/fp/isSaturdayWithOptions/index.js"),
  isSunday: __webpack_require__(/*! ./isSunday/index.js */ "./node_modules/date-fns/fp/isSunday/index.js"),
  isSundayWithOptions: __webpack_require__(/*! ./isSundayWithOptions/index.js */ "./node_modules/date-fns/fp/isSundayWithOptions/index.js"),
  isThursday: __webpack_require__(/*! ./isThursday/index.js */ "./node_modules/date-fns/fp/isThursday/index.js"),
  isThursdayWithOptions: __webpack_require__(/*! ./isThursdayWithOptions/index.js */ "./node_modules/date-fns/fp/isThursdayWithOptions/index.js"),
  isTuesday: __webpack_require__(/*! ./isTuesday/index.js */ "./node_modules/date-fns/fp/isTuesday/index.js"),
  isTuesdayWithOptions: __webpack_require__(/*! ./isTuesdayWithOptions/index.js */ "./node_modules/date-fns/fp/isTuesdayWithOptions/index.js"),
  isValid: __webpack_require__(/*! ./isValid/index.js */ "./node_modules/date-fns/fp/isValid/index.js"),
  isValidWithOptions: __webpack_require__(/*! ./isValidWithOptions/index.js */ "./node_modules/date-fns/fp/isValidWithOptions/index.js"),
  isWednesday: __webpack_require__(/*! ./isWednesday/index.js */ "./node_modules/date-fns/fp/isWednesday/index.js"),
  isWednesdayWithOptions: __webpack_require__(/*! ./isWednesdayWithOptions/index.js */ "./node_modules/date-fns/fp/isWednesdayWithOptions/index.js"),
  isWeekend: __webpack_require__(/*! ./isWeekend/index.js */ "./node_modules/date-fns/fp/isWeekend/index.js"),
  isWeekendWithOptions: __webpack_require__(/*! ./isWeekendWithOptions/index.js */ "./node_modules/date-fns/fp/isWeekendWithOptions/index.js"),
  isWithinInterval: __webpack_require__(/*! ./isWithinInterval/index.js */ "./node_modules/date-fns/fp/isWithinInterval/index.js"),
  isWithinIntervalWithOptions: __webpack_require__(/*! ./isWithinIntervalWithOptions/index.js */ "./node_modules/date-fns/fp/isWithinIntervalWithOptions/index.js"),
  lastDayOfISOWeek: __webpack_require__(/*! ./lastDayOfISOWeek/index.js */ "./node_modules/date-fns/fp/lastDayOfISOWeek/index.js"),
  lastDayOfISOWeekWithOptions: __webpack_require__(/*! ./lastDayOfISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfISOWeekWithOptions/index.js"),
  lastDayOfISOWeekYear: __webpack_require__(/*! ./lastDayOfISOWeekYear/index.js */ "./node_modules/date-fns/fp/lastDayOfISOWeekYear/index.js"),
  lastDayOfISOWeekYearWithOptions: __webpack_require__(/*! ./lastDayOfISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfISOWeekYearWithOptions/index.js"),
  lastDayOfMonth: __webpack_require__(/*! ./lastDayOfMonth/index.js */ "./node_modules/date-fns/fp/lastDayOfMonth/index.js"),
  lastDayOfMonthWithOptions: __webpack_require__(/*! ./lastDayOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfMonthWithOptions/index.js"),
  lastDayOfQuarter: __webpack_require__(/*! ./lastDayOfQuarter/index.js */ "./node_modules/date-fns/fp/lastDayOfQuarter/index.js"),
  lastDayOfQuarterWithOptions: __webpack_require__(/*! ./lastDayOfQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfQuarterWithOptions/index.js"),
  lastDayOfWeek: __webpack_require__(/*! ./lastDayOfWeek/index.js */ "./node_modules/date-fns/fp/lastDayOfWeek/index.js"),
  lastDayOfWeekWithOptions: __webpack_require__(/*! ./lastDayOfWeekWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfWeekWithOptions/index.js"),
  lastDayOfYear: __webpack_require__(/*! ./lastDayOfYear/index.js */ "./node_modules/date-fns/fp/lastDayOfYear/index.js"),
  lastDayOfYearWithOptions: __webpack_require__(/*! ./lastDayOfYearWithOptions/index.js */ "./node_modules/date-fns/fp/lastDayOfYearWithOptions/index.js"),
  max: __webpack_require__(/*! ./max/index.js */ "./node_modules/date-fns/fp/max/index.js"),
  maxWithOptions: __webpack_require__(/*! ./maxWithOptions/index.js */ "./node_modules/date-fns/fp/maxWithOptions/index.js"),
  min: __webpack_require__(/*! ./min/index.js */ "./node_modules/date-fns/fp/min/index.js"),
  minWithOptions: __webpack_require__(/*! ./minWithOptions/index.js */ "./node_modules/date-fns/fp/minWithOptions/index.js"),
  parse: __webpack_require__(/*! ./parse/index.js */ "./node_modules/date-fns/fp/parse/index.js"),
  parseWithOptions: __webpack_require__(/*! ./parseWithOptions/index.js */ "./node_modules/date-fns/fp/parseWithOptions/index.js"),
  setDate: __webpack_require__(/*! ./setDate/index.js */ "./node_modules/date-fns/fp/setDate/index.js"),
  setDateWithOptions: __webpack_require__(/*! ./setDateWithOptions/index.js */ "./node_modules/date-fns/fp/setDateWithOptions/index.js"),
  setDay: __webpack_require__(/*! ./setDay/index.js */ "./node_modules/date-fns/fp/setDay/index.js"),
  setDayOfYear: __webpack_require__(/*! ./setDayOfYear/index.js */ "./node_modules/date-fns/fp/setDayOfYear/index.js"),
  setDayOfYearWithOptions: __webpack_require__(/*! ./setDayOfYearWithOptions/index.js */ "./node_modules/date-fns/fp/setDayOfYearWithOptions/index.js"),
  setDayWithOptions: __webpack_require__(/*! ./setDayWithOptions/index.js */ "./node_modules/date-fns/fp/setDayWithOptions/index.js"),
  setHours: __webpack_require__(/*! ./setHours/index.js */ "./node_modules/date-fns/fp/setHours/index.js"),
  setHoursWithOptions: __webpack_require__(/*! ./setHoursWithOptions/index.js */ "./node_modules/date-fns/fp/setHoursWithOptions/index.js"),
  setISODay: __webpack_require__(/*! ./setISODay/index.js */ "./node_modules/date-fns/fp/setISODay/index.js"),
  setISODayWithOptions: __webpack_require__(/*! ./setISODayWithOptions/index.js */ "./node_modules/date-fns/fp/setISODayWithOptions/index.js"),
  setISOWeek: __webpack_require__(/*! ./setISOWeek/index.js */ "./node_modules/date-fns/fp/setISOWeek/index.js"),
  setISOWeekWithOptions: __webpack_require__(/*! ./setISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/setISOWeekWithOptions/index.js"),
  setISOWeekYear: __webpack_require__(/*! ./setISOWeekYear/index.js */ "./node_modules/date-fns/fp/setISOWeekYear/index.js"),
  setISOWeekYearWithOptions: __webpack_require__(/*! ./setISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/setISOWeekYearWithOptions/index.js"),
  setMilliseconds: __webpack_require__(/*! ./setMilliseconds/index.js */ "./node_modules/date-fns/fp/setMilliseconds/index.js"),
  setMillisecondsWithOptions: __webpack_require__(/*! ./setMillisecondsWithOptions/index.js */ "./node_modules/date-fns/fp/setMillisecondsWithOptions/index.js"),
  setMinutes: __webpack_require__(/*! ./setMinutes/index.js */ "./node_modules/date-fns/fp/setMinutes/index.js"),
  setMinutesWithOptions: __webpack_require__(/*! ./setMinutesWithOptions/index.js */ "./node_modules/date-fns/fp/setMinutesWithOptions/index.js"),
  setMonth: __webpack_require__(/*! ./setMonth/index.js */ "./node_modules/date-fns/fp/setMonth/index.js"),
  setMonthWithOptions: __webpack_require__(/*! ./setMonthWithOptions/index.js */ "./node_modules/date-fns/fp/setMonthWithOptions/index.js"),
  setQuarter: __webpack_require__(/*! ./setQuarter/index.js */ "./node_modules/date-fns/fp/setQuarter/index.js"),
  setQuarterWithOptions: __webpack_require__(/*! ./setQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/setQuarterWithOptions/index.js"),
  setSeconds: __webpack_require__(/*! ./setSeconds/index.js */ "./node_modules/date-fns/fp/setSeconds/index.js"),
  setSecondsWithOptions: __webpack_require__(/*! ./setSecondsWithOptions/index.js */ "./node_modules/date-fns/fp/setSecondsWithOptions/index.js"),
  setWeek: __webpack_require__(/*! ./setWeek/index.js */ "./node_modules/date-fns/fp/setWeek/index.js"),
  setWeekWithOptions: __webpack_require__(/*! ./setWeekWithOptions/index.js */ "./node_modules/date-fns/fp/setWeekWithOptions/index.js"),
  setWeekYear: __webpack_require__(/*! ./setWeekYear/index.js */ "./node_modules/date-fns/fp/setWeekYear/index.js"),
  setWeekYearWithOptions: __webpack_require__(/*! ./setWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/setWeekYearWithOptions/index.js"),
  setYear: __webpack_require__(/*! ./setYear/index.js */ "./node_modules/date-fns/fp/setYear/index.js"),
  setYearWithOptions: __webpack_require__(/*! ./setYearWithOptions/index.js */ "./node_modules/date-fns/fp/setYearWithOptions/index.js"),
  startOfDay: __webpack_require__(/*! ./startOfDay/index.js */ "./node_modules/date-fns/fp/startOfDay/index.js"),
  startOfDayWithOptions: __webpack_require__(/*! ./startOfDayWithOptions/index.js */ "./node_modules/date-fns/fp/startOfDayWithOptions/index.js"),
  startOfHour: __webpack_require__(/*! ./startOfHour/index.js */ "./node_modules/date-fns/fp/startOfHour/index.js"),
  startOfHourWithOptions: __webpack_require__(/*! ./startOfHourWithOptions/index.js */ "./node_modules/date-fns/fp/startOfHourWithOptions/index.js"),
  startOfISOWeek: __webpack_require__(/*! ./startOfISOWeek/index.js */ "./node_modules/date-fns/fp/startOfISOWeek/index.js"),
  startOfISOWeekWithOptions: __webpack_require__(/*! ./startOfISOWeekWithOptions/index.js */ "./node_modules/date-fns/fp/startOfISOWeekWithOptions/index.js"),
  startOfISOWeekYear: __webpack_require__(/*! ./startOfISOWeekYear/index.js */ "./node_modules/date-fns/fp/startOfISOWeekYear/index.js"),
  startOfISOWeekYearWithOptions: __webpack_require__(/*! ./startOfISOWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/startOfISOWeekYearWithOptions/index.js"),
  startOfMinute: __webpack_require__(/*! ./startOfMinute/index.js */ "./node_modules/date-fns/fp/startOfMinute/index.js"),
  startOfMinuteWithOptions: __webpack_require__(/*! ./startOfMinuteWithOptions/index.js */ "./node_modules/date-fns/fp/startOfMinuteWithOptions/index.js"),
  startOfMonth: __webpack_require__(/*! ./startOfMonth/index.js */ "./node_modules/date-fns/fp/startOfMonth/index.js"),
  startOfMonthWithOptions: __webpack_require__(/*! ./startOfMonthWithOptions/index.js */ "./node_modules/date-fns/fp/startOfMonthWithOptions/index.js"),
  startOfQuarter: __webpack_require__(/*! ./startOfQuarter/index.js */ "./node_modules/date-fns/fp/startOfQuarter/index.js"),
  startOfQuarterWithOptions: __webpack_require__(/*! ./startOfQuarterWithOptions/index.js */ "./node_modules/date-fns/fp/startOfQuarterWithOptions/index.js"),
  startOfSecond: __webpack_require__(/*! ./startOfSecond/index.js */ "./node_modules/date-fns/fp/startOfSecond/index.js"),
  startOfSecondWithOptions: __webpack_require__(/*! ./startOfSecondWithOptions/index.js */ "./node_modules/date-fns/fp/startOfSecondWithOptions/index.js"),
  startOfWeek: __webpack_require__(/*! ./startOfWeek/index.js */ "./node_modules/date-fns/fp/startOfWeek/index.js"),
  startOfWeekWithOptions: __webpack_require__(/*! ./startOfWeekWithOptions/index.js */ "./node_modules/date-fns/fp/startOfWeekWithOptions/index.js"),
  startOfWeekYear: __webpack_require__(/*! ./startOfWeekYear/index.js */ "./node_modules/date-fns/fp/startOfWeekYear/index.js"),
  startOfWeekYearWithOptions: __webpack_require__(/*! ./startOfWeekYearWithOptions/index.js */ "./node_modules/date-fns/fp/startOfWeekYearWithOptions/index.js"),
  startOfYear: __webpack_require__(/*! ./startOfYear/index.js */ "./node_modules/date-fns/fp/startOfYear/index.js"),
  startOfYearWithOptions: __webpack_require__(/*! ./startOfYearWithOptions/index.js */ "./node_modules/date-fns/fp/startOfYearWithOptions/index.js"),
  subDays: __webpack_require__(/*! ./subDays/index.js */ "./node_modules/date-fns/fp/subDays/index.js"),
  subDaysWithOptions: __webpack_require__(/*! ./subDaysWithOptions/index.js */ "./node_modules/date-fns/fp/subDaysWithOptions/index.js"),
  subHours: __webpack_require__(/*! ./subHours/index.js */ "./node_modules/date-fns/fp/subHours/index.js"),
  subHoursWithOptions: __webpack_require__(/*! ./subHoursWithOptions/index.js */ "./node_modules/date-fns/fp/subHoursWithOptions/index.js"),
  subISOWeekYears: __webpack_require__(/*! ./subISOWeekYears/index.js */ "./node_modules/date-fns/fp/subISOWeekYears/index.js"),
  subISOWeekYearsWithOptions: __webpack_require__(/*! ./subISOWeekYearsWithOptions/index.js */ "./node_modules/date-fns/fp/subISOWeekYearsWithOptions/index.js"),
  subMilliseconds: __webpack_require__(/*! ./subMilliseconds/index.js */ "./node_modules/date-fns/fp/subMilliseconds/index.js"),
  subMillisecondsWithOptions: __webpack_require__(/*! ./subMillisecondsWithOptions/index.js */ "./node_modules/date-fns/fp/subMillisecondsWithOptions/index.js"),
  subMinutes: __webpack_require__(/*! ./subMinutes/index.js */ "./node_modules/date-fns/fp/subMinutes/index.js"),
  subMinutesWithOptions: __webpack_require__(/*! ./subMinutesWithOptions/index.js */ "./node_modules/date-fns/fp/subMinutesWithOptions/index.js"),
  subMonths: __webpack_require__(/*! ./subMonths/index.js */ "./node_modules/date-fns/fp/subMonths/index.js"),
  subMonthsWithOptions: __webpack_require__(/*! ./subMonthsWithOptions/index.js */ "./node_modules/date-fns/fp/subMonthsWithOptions/index.js"),
  subQuarters: __webpack_require__(/*! ./subQuarters/index.js */ "./node_modules/date-fns/fp/subQuarters/index.js"),
  subQuartersWithOptions: __webpack_require__(/*! ./subQuartersWithOptions/index.js */ "./node_modules/date-fns/fp/subQuartersWithOptions/index.js"),
  subSeconds: __webpack_require__(/*! ./subSeconds/index.js */ "./node_modules/date-fns/fp/subSeconds/index.js"),
  subSecondsWithOptions: __webpack_require__(/*! ./subSecondsWithOptions/index.js */ "./node_modules/date-fns/fp/subSecondsWithOptions/index.js"),
  subWeeks: __webpack_require__(/*! ./subWeeks/index.js */ "./node_modules/date-fns/fp/subWeeks/index.js"),
  subWeeksWithOptions: __webpack_require__(/*! ./subWeeksWithOptions/index.js */ "./node_modules/date-fns/fp/subWeeksWithOptions/index.js"),
  subYears: __webpack_require__(/*! ./subYears/index.js */ "./node_modules/date-fns/fp/subYears/index.js"),
  subYearsWithOptions: __webpack_require__(/*! ./subYearsWithOptions/index.js */ "./node_modules/date-fns/fp/subYearsWithOptions/index.js"),
  toDate: __webpack_require__(/*! ./toDate/index.js */ "./node_modules/date-fns/fp/toDate/index.js"),
  toDateWithOptions: __webpack_require__(/*! ./toDateWithOptions/index.js */ "./node_modules/date-fns/fp/toDateWithOptions/index.js")
};

/***/ }),

/***/ "./node_modules/date-fns/fp/isAfter/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/isAfter/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isAfter/index.js */ "./node_modules/date-fns/isAfter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isAfter = (0, _index4.default)(_index2.default, 2);

exports.default = isAfter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isAfterWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/isAfterWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isAfter/index.js */ "./node_modules/date-fns/isAfter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isAfterWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isAfterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isBefore/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/isBefore/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isBefore/index.js */ "./node_modules/date-fns/isBefore/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isBefore = (0, _index4.default)(_index2.default, 2);

exports.default = isBefore;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isBeforeWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/isBeforeWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isBefore/index.js */ "./node_modules/date-fns/isBefore/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isBeforeWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isBeforeWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isDate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/fp/isDate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isDate/index.js */ "./node_modules/date-fns/isDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isDate = (0, _index4.default)(_index2.default, 1);

exports.default = isDate;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isDateWithOptions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/isDateWithOptions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isDate/index.js */ "./node_modules/date-fns/isDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isDateWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isDateWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isEqual/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/isEqual/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isEqual/index.js */ "./node_modules/date-fns/isEqual/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isEqual = (0, _index4.default)(_index2.default, 2);

exports.default = isEqual;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isEqualWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/isEqualWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isEqual/index.js */ "./node_modules/date-fns/isEqual/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isEqualWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isEqualWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isFirstDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/isFirstDayOfMonth/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isFirstDayOfMonth/index.js */ "./node_modules/date-fns/isFirstDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isFirstDayOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = isFirstDayOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isFirstDayOfMonthWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/isFirstDayOfMonthWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isFirstDayOfMonth/index.js */ "./node_modules/date-fns/isFirstDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isFirstDayOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isFirstDayOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isFriday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/isFriday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isFriday/index.js */ "./node_modules/date-fns/isFriday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isFriday = (0, _index4.default)(_index2.default, 1);

exports.default = isFriday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isFridayWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/isFridayWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isFriday/index.js */ "./node_modules/date-fns/isFriday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isFridayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isFridayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isLastDayOfMonth/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/isLastDayOfMonth/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isLastDayOfMonth/index.js */ "./node_modules/date-fns/isLastDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isLastDayOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = isLastDayOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isLastDayOfMonthWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/isLastDayOfMonthWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isLastDayOfMonth/index.js */ "./node_modules/date-fns/isLastDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isLastDayOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isLastDayOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isLeapYear/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isLeapYear/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isLeapYear/index.js */ "./node_modules/date-fns/isLeapYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isLeapYear = (0, _index4.default)(_index2.default, 1);

exports.default = isLeapYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isLeapYearWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isLeapYearWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isLeapYear/index.js */ "./node_modules/date-fns/isLeapYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isLeapYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isLeapYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isMonday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/isMonday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isMonday/index.js */ "./node_modules/date-fns/isMonday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isMonday = (0, _index4.default)(_index2.default, 1);

exports.default = isMonday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isMondayWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/isMondayWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isMonday/index.js */ "./node_modules/date-fns/isMonday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isMondayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isMondayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameDay/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameDay/index.js */ "./node_modules/date-fns/isSameDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameDay = (0, _index4.default)(_index2.default, 2);

exports.default = isSameDay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameDayWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameDayWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameDay/index.js */ "./node_modules/date-fns/isSameDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameDayWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameDayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameHour/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameHour/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameHour/index.js */ "./node_modules/date-fns/isSameHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameHour = (0, _index4.default)(_index2.default, 2);

exports.default = isSameHour;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameHourWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameHourWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameHour/index.js */ "./node_modules/date-fns/isSameHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameHourWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameHourWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameISOWeek/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameISOWeek/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameISOWeek/index.js */ "./node_modules/date-fns/isSameISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameISOWeek = (0, _index4.default)(_index2.default, 2);

exports.default = isSameISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameISOWeekWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameISOWeekWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameISOWeek/index.js */ "./node_modules/date-fns/isSameISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameISOWeekWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameISOWeekYear/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameISOWeekYear/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameISOWeekYear/index.js */ "./node_modules/date-fns/isSameISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameISOWeekYear = (0, _index4.default)(_index2.default, 2);

exports.default = isSameISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameISOWeekYearWithOptions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameISOWeekYearWithOptions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameISOWeekYear/index.js */ "./node_modules/date-fns/isSameISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameMinute/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameMinute/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameMinute/index.js */ "./node_modules/date-fns/isSameMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameMinute = (0, _index4.default)(_index2.default, 2);

exports.default = isSameMinute;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameMinuteWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameMinuteWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameMinute/index.js */ "./node_modules/date-fns/isSameMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameMinuteWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameMinuteWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameMonth/index.js */ "./node_modules/date-fns/isSameMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameMonth = (0, _index4.default)(_index2.default, 2);

exports.default = isSameMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameMonthWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameMonthWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameMonth/index.js */ "./node_modules/date-fns/isSameMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameMonthWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameQuarter/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameQuarter/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameQuarter/index.js */ "./node_modules/date-fns/isSameQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameQuarter = (0, _index4.default)(_index2.default, 2);

exports.default = isSameQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameQuarterWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameQuarterWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameQuarter/index.js */ "./node_modules/date-fns/isSameQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameQuarterWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameSecond/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameSecond/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameSecond/index.js */ "./node_modules/date-fns/isSameSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameSecond = (0, _index4.default)(_index2.default, 2);

exports.default = isSameSecond;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameSecondWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameSecondWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameSecond/index.js */ "./node_modules/date-fns/isSameSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameSecondWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameSecondWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameWeek/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameWeek/index.js */ "./node_modules/date-fns/isSameWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameWeek = (0, _index4.default)(_index2.default, 2);

exports.default = isSameWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameWeekWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameWeekWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameWeek/index.js */ "./node_modules/date-fns/isSameWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameWeekWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameYear/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameYear/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameYear/index.js */ "./node_modules/date-fns/isSameYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameYear = (0, _index4.default)(_index2.default, 2);

exports.default = isSameYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSameYearWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSameYearWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSameYear/index.js */ "./node_modules/date-fns/isSameYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSameYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isSameYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSaturday/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isSaturday/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSaturday/index.js */ "./node_modules/date-fns/isSaturday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSaturday = (0, _index4.default)(_index2.default, 1);

exports.default = isSaturday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSaturdayWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSaturdayWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSaturday/index.js */ "./node_modules/date-fns/isSaturday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSaturdayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isSaturdayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSunday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/isSunday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSunday/index.js */ "./node_modules/date-fns/isSunday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSunday = (0, _index4.default)(_index2.default, 1);

exports.default = isSunday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isSundayWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/isSundayWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isSunday/index.js */ "./node_modules/date-fns/isSunday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isSundayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isSundayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isThursday/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/isThursday/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isThursday/index.js */ "./node_modules/date-fns/isThursday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isThursday = (0, _index4.default)(_index2.default, 1);

exports.default = isThursday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isThursdayWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isThursdayWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isThursday/index.js */ "./node_modules/date-fns/isThursday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isThursdayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isThursdayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isTuesday/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/isTuesday/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isTuesday/index.js */ "./node_modules/date-fns/isTuesday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isTuesday = (0, _index4.default)(_index2.default, 1);

exports.default = isTuesday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isTuesdayWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isTuesdayWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isTuesday/index.js */ "./node_modules/date-fns/isTuesday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isTuesdayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isTuesdayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isValid/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/isValid/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isValid/index.js */ "./node_modules/date-fns/isValid/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isValid = (0, _index4.default)(_index2.default, 1);

exports.default = isValid;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isValidWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/isValidWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isValid/index.js */ "./node_modules/date-fns/isValid/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isValidWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isValidWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWednesday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/isWednesday/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWednesday/index.js */ "./node_modules/date-fns/isWednesday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWednesday = (0, _index4.default)(_index2.default, 1);

exports.default = isWednesday;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWednesdayWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/isWednesdayWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWednesday/index.js */ "./node_modules/date-fns/isWednesday/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWednesdayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isWednesdayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWeekend/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/isWeekend/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWeekend/index.js */ "./node_modules/date-fns/isWeekend/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWeekend = (0, _index4.default)(_index2.default, 1);

exports.default = isWeekend;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWeekendWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/isWeekendWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWeekend/index.js */ "./node_modules/date-fns/isWeekend/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWeekendWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = isWeekendWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWithinInterval/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/isWithinInterval/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWithinInterval/index.js */ "./node_modules/date-fns/isWithinInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWithinInterval = (0, _index4.default)(_index2.default, 2);

exports.default = isWithinInterval;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/isWithinIntervalWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/isWithinIntervalWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../isWithinInterval/index.js */ "./node_modules/date-fns/isWithinInterval/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var isWithinIntervalWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = isWithinIntervalWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfISOWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfISOWeek/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfISOWeek/index.js */ "./node_modules/date-fns/lastDayOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfISOWeek = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfISOWeekWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfISOWeekWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfISOWeek/index.js */ "./node_modules/date-fns/lastDayOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfISOWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfISOWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfISOWeekYear/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfISOWeekYear/index.js */ "./node_modules/date-fns/lastDayOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfISOWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfISOWeekYearWithOptions/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfISOWeekYearWithOptions/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfISOWeekYear/index.js */ "./node_modules/date-fns/lastDayOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfMonth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfMonth/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfMonth/index.js */ "./node_modules/date-fns/lastDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfMonthWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfMonthWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfMonth/index.js */ "./node_modules/date-fns/lastDayOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfQuarter/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfQuarter/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfQuarter/index.js */ "./node_modules/date-fns/lastDayOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfQuarter = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfQuarterWithOptions/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfQuarterWithOptions/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfQuarter/index.js */ "./node_modules/date-fns/lastDayOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfQuarterWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfWeek/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfWeek/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfWeek/index.js */ "./node_modules/date-fns/lastDayOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfWeek = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfWeekWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfWeekWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfWeek/index.js */ "./node_modules/date-fns/lastDayOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfYear/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfYear/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfYear/index.js */ "./node_modules/date-fns/lastDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfYear = (0, _index4.default)(_index2.default, 1);

exports.default = lastDayOfYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/lastDayOfYearWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/lastDayOfYearWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../lastDayOfYear/index.js */ "./node_modules/date-fns/lastDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var lastDayOfYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = lastDayOfYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/max/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/fp/max/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../max/index.js */ "./node_modules/date-fns/max/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var max = (0, _index4.default)(_index2.default, 1);

exports.default = max;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/maxWithOptions/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/maxWithOptions/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../max/index.js */ "./node_modules/date-fns/max/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var maxWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = maxWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/min/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/fp/min/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../min/index.js */ "./node_modules/date-fns/min/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var min = (0, _index4.default)(_index2.default, 1);

exports.default = min;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/minWithOptions/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/minWithOptions/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../min/index.js */ "./node_modules/date-fns/min/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var minWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = minWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/parse/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/fp/parse/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../parse/index.js */ "./node_modules/date-fns/parse/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var parse = (0, _index4.default)(_index2.default, 3);

exports.default = parse;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/parseWithOptions/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/fp/parseWithOptions/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../parse/index.js */ "./node_modules/date-fns/parse/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var parseWithOptions = (0, _index4.default)(_index2.default, 4);

exports.default = parseWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/setDate/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDate/index.js */ "./node_modules/date-fns/setDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDate = (0, _index4.default)(_index2.default, 2);

exports.default = setDate;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDateWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/setDateWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDate/index.js */ "./node_modules/date-fns/setDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDateWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setDateWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDay/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/fp/setDay/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDay/index.js */ "./node_modules/date-fns/setDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDay = (0, _index4.default)(_index2.default, 2);

exports.default = setDay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDayOfYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/setDayOfYear/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDayOfYear/index.js */ "./node_modules/date-fns/setDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDayOfYear = (0, _index4.default)(_index2.default, 2);

exports.default = setDayOfYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDayOfYearWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/setDayOfYearWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDayOfYear/index.js */ "./node_modules/date-fns/setDayOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDayOfYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setDayOfYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setDayWithOptions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/setDayWithOptions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setDay/index.js */ "./node_modules/date-fns/setDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setDayWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setDayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setHours/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/setHours/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setHours/index.js */ "./node_modules/date-fns/setHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setHours = (0, _index4.default)(_index2.default, 2);

exports.default = setHours;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setHoursWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/setHoursWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setHours/index.js */ "./node_modules/date-fns/setHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setHoursWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setHoursWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISODay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/setISODay/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISODay/index.js */ "./node_modules/date-fns/setISODay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISODay = (0, _index4.default)(_index2.default, 2);

exports.default = setISODay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISODayWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/setISODayWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISODay/index.js */ "./node_modules/date-fns/setISODay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISODayWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setISODayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISOWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/setISOWeek/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISOWeek/index.js */ "./node_modules/date-fns/setISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISOWeek = (0, _index4.default)(_index2.default, 2);

exports.default = setISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISOWeekWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/setISOWeekWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISOWeek/index.js */ "./node_modules/date-fns/setISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISOWeekWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISOWeekYear/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/setISOWeekYear/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISOWeekYear/index.js */ "./node_modules/date-fns/setISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISOWeekYear = (0, _index4.default)(_index2.default, 2);

exports.default = setISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setISOWeekYearWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/setISOWeekYearWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setISOWeekYear/index.js */ "./node_modules/date-fns/setISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMilliseconds/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/setMilliseconds/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMilliseconds/index.js */ "./node_modules/date-fns/setMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMilliseconds = (0, _index4.default)(_index2.default, 2);

exports.default = setMilliseconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMillisecondsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/setMillisecondsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMilliseconds/index.js */ "./node_modules/date-fns/setMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMillisecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setMillisecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMinutes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/setMinutes/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMinutes/index.js */ "./node_modules/date-fns/setMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMinutes = (0, _index4.default)(_index2.default, 2);

exports.default = setMinutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMinutesWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/setMinutesWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMinutes/index.js */ "./node_modules/date-fns/setMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMinutesWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setMinutesWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMonth/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/setMonth/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMonth/index.js */ "./node_modules/date-fns/setMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMonth = (0, _index4.default)(_index2.default, 2);

exports.default = setMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setMonthWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/setMonthWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setMonth/index.js */ "./node_modules/date-fns/setMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setMonthWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setQuarter/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/setQuarter/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setQuarter/index.js */ "./node_modules/date-fns/setQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setQuarter = (0, _index4.default)(_index2.default, 2);

exports.default = setQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setQuarterWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/setQuarterWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setQuarter/index.js */ "./node_modules/date-fns/setQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setQuarterWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setSeconds/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/setSeconds/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setSeconds/index.js */ "./node_modules/date-fns/setSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setSeconds = (0, _index4.default)(_index2.default, 2);

exports.default = setSeconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setSecondsWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/setSecondsWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setSeconds/index.js */ "./node_modules/date-fns/setSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setSecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setSecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setWeek/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/setWeek/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setWeek/index.js */ "./node_modules/date-fns/setWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setWeek = (0, _index4.default)(_index2.default, 2);

exports.default = setWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setWeekWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/setWeekWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setWeek/index.js */ "./node_modules/date-fns/setWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setWeekWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setWeekYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/setWeekYear/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setWeekYear/index.js */ "./node_modules/date-fns/setWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setWeekYear = (0, _index4.default)(_index2.default, 2);

exports.default = setWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setWeekYearWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/setWeekYearWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setWeekYear/index.js */ "./node_modules/date-fns/setWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setWeekYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setYear/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/setYear/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setYear/index.js */ "./node_modules/date-fns/setYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setYear = (0, _index4.default)(_index2.default, 2);

exports.default = setYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/setYearWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/setYearWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../setYear/index.js */ "./node_modules/date-fns/setYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var setYearWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = setYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfDay/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfDay/index.js */ "./node_modules/date-fns/startOfDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfDay = (0, _index4.default)(_index2.default, 1);

exports.default = startOfDay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfDayWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfDayWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfDay/index.js */ "./node_modules/date-fns/startOfDay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfDayWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfDayWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfHour/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfHour/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfHour/index.js */ "./node_modules/date-fns/startOfHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfHour = (0, _index4.default)(_index2.default, 1);

exports.default = startOfHour;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfHourWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfHourWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfHour/index.js */ "./node_modules/date-fns/startOfHour/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfHourWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfHourWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfISOWeek/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfISOWeek/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfISOWeek = (0, _index4.default)(_index2.default, 1);

exports.default = startOfISOWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfISOWeekWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfISOWeekWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfISOWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfISOWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfISOWeekYear/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfISOWeekYear/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfISOWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = startOfISOWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfISOWeekYearWithOptions/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfISOWeekYearWithOptions/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfISOWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfISOWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfMinute/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfMinute/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfMinute/index.js */ "./node_modules/date-fns/startOfMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfMinute = (0, _index4.default)(_index2.default, 1);

exports.default = startOfMinute;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfMinuteWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfMinuteWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfMinute/index.js */ "./node_modules/date-fns/startOfMinute/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfMinuteWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfMinuteWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfMonth/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfMonth/index.js */ "./node_modules/date-fns/startOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfMonth = (0, _index4.default)(_index2.default, 1);

exports.default = startOfMonth;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfMonthWithOptions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfMonthWithOptions/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfMonth/index.js */ "./node_modules/date-fns/startOfMonth/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfMonthWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfMonthWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfQuarter/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfQuarter/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfQuarter/index.js */ "./node_modules/date-fns/startOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfQuarter = (0, _index4.default)(_index2.default, 1);

exports.default = startOfQuarter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfQuarterWithOptions/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfQuarterWithOptions/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfQuarter/index.js */ "./node_modules/date-fns/startOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfQuarterWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfQuarterWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfSecond/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfSecond/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfSecond/index.js */ "./node_modules/date-fns/startOfSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfSecond = (0, _index4.default)(_index2.default, 1);

exports.default = startOfSecond;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfSecondWithOptions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfSecondWithOptions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfSecond/index.js */ "./node_modules/date-fns/startOfSecond/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfSecondWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfSecondWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfWeek/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfWeek = (0, _index4.default)(_index2.default, 1);

exports.default = startOfWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfWeekWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfWeekWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfWeekWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfWeekWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfWeekYear/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfWeekYear/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfWeekYear/index.js */ "./node_modules/date-fns/startOfWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfWeekYear = (0, _index4.default)(_index2.default, 1);

exports.default = startOfWeekYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfWeekYearWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfWeekYearWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfWeekYear/index.js */ "./node_modules/date-fns/startOfWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfWeekYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfWeekYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfYear/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfYear/index.js */ "./node_modules/date-fns/startOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfYear = (0, _index4.default)(_index2.default, 1);

exports.default = startOfYear;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/startOfYearWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/startOfYearWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../startOfYear/index.js */ "./node_modules/date-fns/startOfYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var startOfYearWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = startOfYearWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subDays/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/fp/subDays/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subDays/index.js */ "./node_modules/date-fns/subDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subDays = (0, _index4.default)(_index2.default, 2);

exports.default = subDays;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subDaysWithOptions/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/fp/subDaysWithOptions/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subDays/index.js */ "./node_modules/date-fns/subDays/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subDaysWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subDaysWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subHours/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/subHours/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subHours/index.js */ "./node_modules/date-fns/subHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subHours = (0, _index4.default)(_index2.default, 2);

exports.default = subHours;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subHoursWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/subHoursWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subHours/index.js */ "./node_modules/date-fns/subHours/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subHoursWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subHoursWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subISOWeekYears/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/subISOWeekYears/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subISOWeekYears/index.js */ "./node_modules/date-fns/subISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subISOWeekYears = (0, _index4.default)(_index2.default, 2);

exports.default = subISOWeekYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subISOWeekYearsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/subISOWeekYearsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subISOWeekYears/index.js */ "./node_modules/date-fns/subISOWeekYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subISOWeekYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subISOWeekYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMilliseconds/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/fp/subMilliseconds/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMilliseconds = (0, _index4.default)(_index2.default, 2);

exports.default = subMilliseconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMillisecondsWithOptions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/fp/subMillisecondsWithOptions/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMillisecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subMillisecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMinutes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/subMinutes/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMinutes/index.js */ "./node_modules/date-fns/subMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMinutes = (0, _index4.default)(_index2.default, 2);

exports.default = subMinutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMinutesWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/subMinutesWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMinutes/index.js */ "./node_modules/date-fns/subMinutes/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMinutesWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subMinutesWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMonths/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/fp/subMonths/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMonths/index.js */ "./node_modules/date-fns/subMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMonths = (0, _index4.default)(_index2.default, 2);

exports.default = subMonths;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subMonthsWithOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/fp/subMonthsWithOptions/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subMonths/index.js */ "./node_modules/date-fns/subMonths/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subMonthsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subMonthsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subQuarters/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/fp/subQuarters/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subQuarters/index.js */ "./node_modules/date-fns/subQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subQuarters = (0, _index4.default)(_index2.default, 2);

exports.default = subQuarters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subQuartersWithOptions/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/fp/subQuartersWithOptions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subQuarters/index.js */ "./node_modules/date-fns/subQuarters/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subQuartersWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subQuartersWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subSeconds/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/fp/subSeconds/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subSeconds/index.js */ "./node_modules/date-fns/subSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subSeconds = (0, _index4.default)(_index2.default, 2);

exports.default = subSeconds;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subSecondsWithOptions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/fp/subSecondsWithOptions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subSeconds/index.js */ "./node_modules/date-fns/subSeconds/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subSecondsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subSecondsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subWeeks/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/subWeeks/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subWeeks/index.js */ "./node_modules/date-fns/subWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subWeeks = (0, _index4.default)(_index2.default, 2);

exports.default = subWeeks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subWeeksWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/subWeeksWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subWeeks/index.js */ "./node_modules/date-fns/subWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subWeeksWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subWeeksWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subYears/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/fp/subYears/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subYears/index.js */ "./node_modules/date-fns/subYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subYears = (0, _index4.default)(_index2.default, 2);

exports.default = subYears;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/subYearsWithOptions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/fp/subYearsWithOptions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../subYears/index.js */ "./node_modules/date-fns/subYears/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var subYearsWithOptions = (0, _index4.default)(_index2.default, 3);

exports.default = subYearsWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/toDate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/fp/toDate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var toDate = (0, _index4.default)(_index2.default, 1);

exports.default = toDate;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/fp/toDateWithOptions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/fp/toDateWithOptions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/convertToFP/index.js */ "./node_modules/date-fns/fp/_lib/convertToFP/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

var toDateWithOptions = (0, _index4.default)(_index2.default, 2);

exports.default = toDateWithOptions;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDate/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDate/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDate;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDay/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDay/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDay;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = date.getDay();
  return day;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDayOfYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfYear/index.js */ "./node_modules/date-fns/startOfYear/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index6.default)(date, (0, _index4.default)(date, dirtyOptions), dirtyOptions);
  var dayOfYear = diff + 1;
  return dayOfYear;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDaysInMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/getDaysInMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getDaysInYear/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/getDaysInYear/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../isLeapYear/index.js */ "./node_modules/date-fns/isLeapYear/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);

  if (isNaN(date)) {
    return NaN;
  }

  return (0, _index4.default)(date, dirtyOptions) ? 366 : 365;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getHours/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getHours/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHours;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var hours = date.getHours();
  return hours;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getISODay/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISODay/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISODay;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of ISO week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getISOWeek/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/getISOWeek/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISOWeek;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index4.default)(date, dirtyOptions).getTime() - (0, _index6.default)(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISOWeekYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index4.default)(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index4.default)(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getISOWeeksInYear/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/getISOWeeksInYear/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISOWeeksInYear;

var _index = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addWeeks/index.js */ "./node_modules/date-fns/addWeeks/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of ISO weeks in a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var thisYear = (0, _index2.default)(dirtyDate, dirtyOptions);
  var nextYear = (0, _index2.default)((0, _index4.default)(thisYear, 60, dirtyOptions), dirtyOptions);
  var diff = nextYear.valueOf() - thisYear.valueOf();
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/getMilliseconds/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMilliseconds;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the milliseconds
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getMinutes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/getMinutes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMinutes;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var minutes = date.getMinutes();
  return minutes;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getMonth/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getMonth/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var month = date.getMonth();
  return month;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getOverlappingDaysInIntervals/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/getOverlappingDaysInIntervals/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOverlappingDaysInIntervals;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of days that overlap in two time intervals
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 21), end: new Date(2014, 0, 22)}
 * )
 * //=> 0
 */
function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = (0, _index2.default)(intervalLeft.start, dirtyOptions).getTime();
  var leftEndTime = (0, _index2.default)(intervalLeft.end, dirtyOptions).getTime();
  var rightStartTime = (0, _index2.default)(intervalRight.start, dirtyOptions).getTime();
  var rightEndTime = (0, _index2.default)(intervalRight.end, dirtyOptions).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;

  if (!isOverlapping) {
    return 0;
  }

  var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;

  var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;

  var differenceInMs = overlapEndDate - overlapStartDate;

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getQuarter/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/getQuarter/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getQuarter;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getSeconds/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/getSeconds/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSeconds;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var seconds = date.getSeconds();
  return seconds;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getTime/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getTime/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTime;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  return timestamp;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getWeek/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getWeek/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeek;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfWeekYear/index.js */ "./node_modules/date-fns/startOfWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * var result = getISOWeek(new Date(2005, 0, 2), {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> 53
 */

function getWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index4.default)(date, dirtyOptions).getTime() - (0, _index6.default)(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getWeekOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/getWeekOfMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeekOfMonth;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../getDate/index.js */ "./node_modules/date-fns/getDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfMonth/index.js */ "./node_modules/date-fns/startOfMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../getDay/index.js */ "./node_modules/date-fns/getDay/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
function getWeekOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var startWeekDay = (0, _index8.default)((0, _index6.default)(dirtyDate, dirtyOptions), dirtyOptions);
  var currentWeekDay = (0, _index8.default)(dirtyDate, dirtyOptions);

  var startWeekDayWithOptions = startWeekDay < weekStartsOn ? 7 - weekStartsOn : startWeekDay;
  var diff = startWeekDayWithOptions > currentWeekDay ? 7 - weekStartsOn : 0;

  return Math.ceil(((0, _index4.default)(dirtyDate, dirtyOptions) + diff) / 7);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getWeekYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/getWeekYear/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeekYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * var result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * var result = getWeekYear(new Date(2004, 11, 26), {weekStartsOn: 6})
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * var result = getWeekYear(new Date(2004, 11, 26), {firstWeekContainsDate: 4})
 * //=> 2004
 */
function getWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index6.default)(firstWeekOfNextYear, dirtyOptions);

  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index6.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getWeeksInMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/getWeeksInMonth/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeeksInMonth;

var _index = __webpack_require__(/*! ../differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/differenceInCalendarWeeks/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../lastDayOfMonth/index.js */ "./node_modules/date-fns/lastDayOfMonth/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfMonth/index.js */ "./node_modules/date-fns/startOfMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * var result = getWeeksInMonth(
 *   new Date(2015, 1, 8)
 * )
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * var result = getWeeksInMonth(
 *   new Date(2017, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 6
 */
function getWeeksInMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)((0, _index4.default)(dirtyDate, dirtyOptions), (0, _index6.default)(dirtyDate, dirtyOptions), dirtyOptions) + 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/getYear/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getYear/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  return year;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isAfter/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/isAfter/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var dateToCompare = (0, _index2.default)(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isBefore/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isBefore/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var dateToCompare = (0, _index2.default)(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isDate/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isDate/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isDate;
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @param {Options} [options] - the object with options. Unused; present for FP submodule compatibility sake. See [Options]{@link https://date-fns.org/docs/Options}
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * var result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * var result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * var result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * var result = isDate({})
 * //=> false
 */
function isDate(value) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return value instanceof Date || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isEqual/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/isEqual/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEqual;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyLeftDate, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isFirstDayOfMonth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/isFirstDayOfMonth/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFirstDayOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is the first day of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDate() === 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isFriday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isFriday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFriday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 5;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isLastDayOfMonth/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLastDayOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/endOfDay/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/endOfMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  return (0, _index4.default)(date, dirtyOptions).getTime() === (0, _index6.default)(date, dirtyOptions).getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isLeapYear/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isLeapYear/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLeapYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isMonday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isMonday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMonday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 1;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameDay/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/isSameDay/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameDay;

var _index = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/startOfDay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfDay = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfDay = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameHour/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isSameHour/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameHour;

var _index = __webpack_require__(/*! ../startOfHour/index.js */ "./node_modules/date-fns/startOfHour/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same hour
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfHour = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfHour = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameISOWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/isSameISOWeek/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameISOWeek;

var _index = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/isSameWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same ISO week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var isSameWeekOptions = (0, _index4.default)(dirtyOptions);
  isSameWeekOptions.weekStartsOn = 1;
  return (0, _index2.default)(dirtyDateLeft, dirtyDateRight, isSameWeekOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameISOWeekYear/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/isSameISOWeekYear/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameISOWeekYear;

var _index = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOWeekYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfYear = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfYear = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameMinute/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/isSameMinute/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameMinute;

var _index = __webpack_require__(/*! ../startOfMinute/index.js */ "./node_modules/date-fns/startOfMinute/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same minute
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfMinute = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfMinute = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameMonth/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isSameMonth/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameQuarter/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/isSameQuarter/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameQuarter;

var _index = __webpack_require__(/*! ../startOfQuarter/index.js */ "./node_modules/date-fns/startOfQuarter/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfQuarter = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfQuarter = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameSecond/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/isSameSecond/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameSecond;

var _index = __webpack_require__(/*! ../startOfSecond/index.js */ "./node_modules/date-fns/startOfSecond/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same second
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfSecond = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfSecond = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameWeek/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isSameWeek/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameWeek;

var _index = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfWeek = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSameYear/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isSameYear/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSaturday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isSaturday/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSaturday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 6;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isSunday/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isSunday/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSunday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Sunday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isThursday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isThursday/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isThursday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 4;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isTuesday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/isTuesday/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTuesday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 2;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isValid/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/isValid/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValid;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  return !isNaN(date);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isWednesday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isWednesday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWednesday;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 3;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isWeekend/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/isWeekend/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWeekend;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = date.getDay();
  return day === 0 || day === 6;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/isWithinInterval/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/isWithinInterval/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWithinInterval;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 3),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 10),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> false
 */
function isWithinInterval(dirtyDate, dirtyInterval, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var interval = dirtyInterval || {};
  var time = (0, _index2.default)(dirtyDate, dirtyOptions).getTime();
  var startTime = (0, _index2.default)(interval.start, dirtyOptions).getTime();
  var endTime = (0, _index2.default)(interval.end, dirtyOptions).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfISOWeek/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfISOWeek/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfISOWeek;

var _index = __webpack_require__(/*! ../lastDayOfWeek/index.js */ "./node_modules/date-fns/lastDayOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of an ISO week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var lastDayOfWeekOptions = (0, _index4.default)(dirtyOptions);
  lastDayOfWeekOptions.weekStartsOn = 1;
  return (0, _index2.default)(dirtyDate, lastDayOfWeekOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfISOWeekYear/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfISOWeekYear/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfISOWeekYear;

var _index = __webpack_require__(/*! ../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  date.setDate(date.getDate() - 1);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfMonth/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfQuarter/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfQuarter/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfQuarter;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfWeek/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfWeek;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the last day of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/lastDayOfYear/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/lastDayOfYear/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFormatLongFn;
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildLocalizeFn;
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var context = options.context ? String(options.context) : 'standalone';

    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchFn;
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;

    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];

    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];

    var value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchPatternFn;
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};

    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];

    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null;
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance(token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};

var formatLong = {
  date: (0, _index2.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: (0, _index2.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: (0, _index2.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

exports.default = formatLong;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: (0, _index2.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: (0, _index2.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),

  month: (0, _index2.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: (0, _index2.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: (0, _index2.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
};

exports.default = localize;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};

var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),

  era: (0, _index4.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: (0, _index4.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),

  month: (0, _index4.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: (0, _index4.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: (0, _index4.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

exports.default = match;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/en-US/_lib/match/index.js");

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  formatDistance: _index2.default,
  formatLong: _index4.default,
  formatRelative: _index6.default,
  localize: _index8.default,
  match: _index10.default,
  options: {
    weekStartsOn: 0 /* Sunday */
    , firstWeekContainsDate: 1
  }
};

exports.default = locale;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/max/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/max/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max(dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0, _index2.default)(dirtyDate, dirtyOptions);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/min/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/min/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the earliest of the dates
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min(dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

    // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0, _index2.default)(dirtyDate, dirtyOptions);

    if (result === undefined || result > currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/_lib/getUTCWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/_lib/setUTCDay/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../_lib/setUTCWeek/index.js */ "./node_modules/date-fns/_lib/setUTCWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../../../_lib/setUTCISODay/index.js */ "./node_modules/date-fns/_lib/setUTCISODay/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../../../_lib/setUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/setUTCISOWeek/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCISOWeek/index.js");

var _index14 = _interopRequireDefault(_index13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// User for validation
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function parse(string, token, match, options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, { width: 'abbreviated' }) || match.era(string, { width: 'narrow' });
        // A, B
        case 'GGGGG':
          return match.era(string, { width: 'narrow' });
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(string, { width: 'wide' }) || match.era(string, { width: 'abbreviated' }) || match.era(string, { width: 'narrow' });
      }
    },
    set: function set(date, value, options) {
      // Sets year 10 BC if BC, or 10 AC if AC
      date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    priority: 130,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);
        case 'yo':
          return match.ordinalNumber(string, { unit: 'year', valueCallback: valueCallback });
        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function validate(date, value, options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function set(date, value, options) {
      var currentYear = (0, _index2.default)(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);
        case 'Yo':
          return match.ordinalNumber(string, { unit: 'year', valueCallback: valueCallback });
        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function validate(date, value, options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function set(date, value, options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return (0, _index8.default)(date, options);
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return (0, _index8.default)(date, options);
    }
  },

  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function parse(string, token, match, options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function set(date, value, options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return (0, _index14.default)(firstWeekOfYear);
    }
  },

  // Extended year
  u: {
    priority: 130,
    parse: function parse(string, token, match, options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function set(date, value, options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Quarter
  Q: {
    priority: 120,
    parse: function parse(string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(string, { unit: 'quarter' });
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(string, { width: 'abbreviated', context: 'formatting' }) || match.quarter(string, { width: 'narrow', context: 'formatting' });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(string, { width: 'narrow', context: 'formatting' });
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(string, { width: 'wide', context: 'formatting' }) || match.quarter(string, { width: 'abbreviated', context: 'formatting' }) || match.quarter(string, { width: 'narrow', context: 'formatting' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 4;
    },
    set: function set(date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function parse(string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(string, { unit: 'quarter' });
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(string, { width: 'abbreviated', context: 'standalone' }) || match.quarter(string, { width: 'narrow', context: 'standalone' });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(string, { width: 'narrow', context: 'standalone' });
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(string, { width: 'wide', context: 'standalone' }) || match.quarter(string, { width: 'abbreviated', context: 'standalone' }) || match.quarter(string, { width: 'narrow', context: 'standalone' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 4;
    },
    set: function set(date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Month
  M: {
    priority: 110,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12
        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return match.ordinalNumber(string, { unit: 'month', valueCallback: valueCallback });
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(string, { width: 'abbreviated', context: 'formatting' }) || match.month(string, { width: 'narrow', context: 'formatting' });
        // J, F, ..., D
        case 'MMMMM':
          return match.month(string, { width: 'narrow', context: 'formatting' });
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(string, { width: 'wide', context: 'formatting' }) || match.month(string, { width: 'abbreviated', context: 'formatting' }) || match.month(string, { width: 'narrow', context: 'formatting' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Stand-alone month
  L: {
    priority: 110,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12
        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return match.ordinalNumber(string, { unit: 'month', valueCallback: valueCallback });
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(string, { width: 'abbreviated', context: 'standalone' }) || match.month(string, { width: 'narrow', context: 'standalone' });
        // J, F, ..., D
        case 'LLLLL':
          return match.month(string, { width: 'narrow', context: 'standalone' });
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(string, { width: 'wide', context: 'standalone' }) || match.month(string, { width: 'abbreviated', context: 'standalone' }) || match.month(string, { width: 'narrow', context: 'standalone' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Local week of year
  w: {
    priority: 100,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);
        case 'wo':
          return match.ordinalNumber(string, { unit: 'week' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 53;
    },
    set: function set(date, value, options) {
      return (0, _index8.default)((0, _index6.default)(date, value, options), options);
    }
  },

  // ISO week of year
  I: {
    priority: 100,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);
        case 'Io':
          return match.ordinalNumber(string, { unit: 'week' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 53;
    },
    set: function set(date, value, options) {
      return (0, _index14.default)((0, _index12.default)(date, value, options), options);
    }
  },

  // Day of the month
  d: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);
        case 'do':
          return match.ordinalNumber(string, { unit: 'date' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function set(date, value, options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Day of year
  D: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);
        case 'Do':
          return match.ordinalNumber(string, { unit: 'date' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function set(date, value, options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Day of week
  E: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, { width: 'abbreviated', context: 'formatting' }) || match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
        // T
        case 'EEEEE':
          return match.day(string, { width: 'narrow', context: 'formatting' });
        // Tu
        case 'EEEEEE':
          return match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
        // Tuesday
        case 'EEEE':
        default:
          return match.day(string, { width: 'wide', context: 'formatting' }) || match.day(string, { width: 'abbreviated', context: 'formatting' }) || match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, value, options) {
      date = (0, _index4.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Local day of week
  e: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd
        case 'eo':
          return match.ordinalNumber(string, { unit: 'day', valueCallback: valueCallback });
        // Tue
        case 'eee':
          return match.day(string, { width: 'abbreviated', context: 'formatting' }) || match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
        // T
        case 'eeeee':
          return match.day(string, { width: 'narrow', context: 'formatting' });
        // Tu
        case 'eeeeee':
          return match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
        // Tuesday
        case 'eeee':
        default:
          return match.day(string, { width: 'wide', context: 'formatting' }) || match.day(string, { width: 'abbreviated', context: 'formatting' }) || match.day(string, { width: 'short', context: 'formatting' }) || match.day(string, { width: 'narrow', context: 'formatting' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, value, options) {
      date = (0, _index4.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd
        case 'co':
          return match.ordinalNumber(string, { unit: 'day', valueCallback: valueCallback });
        // Tue
        case 'ccc':
          return match.day(string, { width: 'abbreviated', context: 'standalone' }) || match.day(string, { width: 'short', context: 'standalone' }) || match.day(string, { width: 'narrow', context: 'standalone' });
        // T
        case 'ccccc':
          return match.day(string, { width: 'narrow', context: 'standalone' });
        // Tu
        case 'cccccc':
          return match.day(string, { width: 'short', context: 'standalone' }) || match.day(string, { width: 'narrow', context: 'standalone' });
        // Tuesday
        case 'cccc':
        default:
          return match.day(string, { width: 'wide', context: 'standalone' }) || match.day(string, { width: 'abbreviated', context: 'standalone' }) || match.day(string, { width: 'short', context: 'standalone' }) || match.day(string, { width: 'narrow', context: 'standalone' });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, value, options) {
      date = (0, _index4.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // ISO day of week
  i: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd
        case 'io':
          return match.ordinalNumber(string, { unit: 'day' });
        // Tue
        case 'iii':
          return match.day(string, { width: 'abbreviated', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'short', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'narrow', context: 'formatting', valueCallback: valueCallback });
        // T
        case 'iiiii':
          return match.day(string, { width: 'narrow', context: 'formatting', valueCallback: valueCallback });
        // Tu
        case 'iiiiii':
          return match.day(string, { width: 'short', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'narrow', context: 'formatting', valueCallback: valueCallback });
        // Tuesday
        case 'iiii':
        default:
          return match.day(string, { width: 'wide', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'abbreviated', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'short', context: 'formatting', valueCallback: valueCallback }) || match.day(string, { width: 'narrow', context: 'formatting', valueCallback: valueCallback });
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 7;
    },
    set: function set(date, value, options) {
      date = (0, _index10.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },

  // AM or PM
  a: {
    priority: 80,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'aaaaa':
          return match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return match.dayPeriod(string, { width: 'wide', context: 'formatting' }) || match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
      }
    },
    set: function set(date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },

  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'bbbbb':
          return match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return match.dayPeriod(string, { width: 'wide', context: 'formatting' }) || match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
      }
    },
    set: function set(date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'BBBBB':
          return match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return match.dayPeriod(string, { width: 'wide', context: 'formatting' }) || match.dayPeriod(string, { width: 'abbreviated', context: 'formatting' }) || match.dayPeriod(string, { width: 'narrow', context: 'formatting' });
      }
    },
    set: function set(date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },

  // Hour [1-12]
  h: {
    priority: 70,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);
        case 'ho':
          return match.ordinalNumber(string, { unit: 'hour' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 12;
    },
    set: function set(date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  },

  // Hour [0-23]
  H: {
    priority: 70,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);
        case 'Ho':
          return match.ordinalNumber(string, { unit: 'hour' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 23;
    },
    set: function set(date, value, options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  },

  // Hour [0-11]
  K: {
    priority: 70,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);
        case 'Ko':
          return match.ordinalNumber(string, { unit: 'hour' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  },

  // Hour [1-24]
  k: {
    priority: 70,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);
        case 'ko':
          return match.ordinalNumber(string, { unit: 'hour' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 1 && value <= 24;
    },
    set: function set(date, value, options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  },

  // Minute
  m: {
    priority: 60,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);
        case 'mo':
          return match.ordinalNumber(string, { unit: 'minute' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 59;
    },
    set: function set(date, value, options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  },

  // Second
  s: {
    priority: 50,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);
        case 'so':
          return match.ordinalNumber(string, { unit: 'second' });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, options) {
      return value >= 0 && value <= 59;
    },
    set: function set(date, value, options) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  },

  // Fraction of second
  S: {
    priority: 40,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return parseNDigits(token.length, string, valueCallback);
    },
    set: function set(date, value, options) {
      date.setUTCMilliseconds(value);
      return date;
    }
  },

  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 20,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);
        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function set(date, value, options) {
      return new Date(date.getTime() - value);
    }
  },

  // Timezone (ISO-8601)
  x: {
    priority: 20,
    parse: function parse(string, token, match, options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);
        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function set(date, value, options) {
      return new Date(date.getTime() - value);
    }
  },

  // Seconds timestamp
  t: {
    priority: 10,
    parse: function parse(string, token, match, options) {
      return parseAnyDigitsSigned(string);
    },
    set: function set(date, value, options) {
      return new Date(value * 1000);
    }
  },

  // Milliseconds timestamp
  T: {
    priority: 10,
    parse: function parse(string, token, match, options) {
      return parseAnyDigitsSigned(string);
    },
    set: function set(date, value, options) {
      return new Date(value);
    }
  }
};

exports.default = parsers;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/subMilliseconds/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/locale/en-US/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ./_lib/parsers/index.js */ "./node_modules/date-fns/parse/_lib/parsers/index.js");

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIMEZONE_UNIT_PRIORITY = 20;

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

var notWhitespaceRegExp = /\S/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               |       |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             |       |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              |  40 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  20 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  20 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Seconds timestamp               |  10 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Milliseconds timestamp          |  10 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `baseDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - defines values missing from the parsed dateString
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/dd/yyyy',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   "do 'de' MMMM",
 *   new Date(2010, 0, 1),
 *   {locale: eo}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};

  var locale = options.locale || _index10.default;

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return (0, _index6.default)(dirtyBaseDate, options);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;

  var tokens = formatString.match(formattingTokensRegExp);
  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    var firstCharacter = token[0];
    var parser = _index12.default[firstCharacter];
    if (parser) {
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });

      dateString = parseResult.rest;
    } else {
      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });

  var date = (0, _index6.default)(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = (0, _index8.default)(date, (0, _index4.default)(date));

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    utcDate = setter.set(utcDate, setter.value, subFnOptions);
  }

  return utcDate;
}

function dateToSystemTimezone(date) {
  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setDate/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/setDate/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setDate;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the day of the month setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate(dirtyDate, dirtyDayOfMonth, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var dayOfMonth = (0, _index2.default)(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setDay/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/setDay/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setDay;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the new date with the day of the week setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index4.default)(dirtyDate, options);
  var day = (0, _index2.default)(dirtyDay);
  var currentDay = date.getDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  return (0, _index6.default)(date, diff, options);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setDayOfYear/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/setDayOfYear/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setDayOfYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the day of the year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear(dirtyDate, dirtyDayOfYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var dayOfYear = (0, _index2.default)(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setHours/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/setHours/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setHours;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the hours setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(dirtyDate, dirtyHours, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var hours = (0, _index2.default)(dirtyHours);
  date.setHours(hours);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setISODay/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/setISODay/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISODay;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../getISODay/index.js */ "./node_modules/date-fns/getISODay/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the day of the ISO week setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var day = (0, _index2.default)(dirtyDay);
  var currentDay = (0, _index8.default)(date, dirtyOptions);
  var diff = day - currentDay;
  return (0, _index6.default)(date, diff, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setISOWeek/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/setISOWeek/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISOWeek;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getISOWeek/index.js */ "./node_modules/date-fns/getISOWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var isoWeek = (0, _index2.default)(dirtyISOWeek);
  var diff = (0, _index6.default)(date, dirtyOptions) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setISOWeekYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/setISOWeekYear/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setISOWeekYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ "./node_modules/date-fns/startOfISOWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week-numbering year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOWeekYear(dirtyDate, dirtyISOWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var isoWeekYear = (0, _index2.default)(dirtyISOWeekYear);
  var diff = (0, _index8.default)(date, (0, _index6.default)(date, dirtyOptions), dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = (0, _index6.default)(fourthOfJanuary, dirtyOptions);
  date.setDate(date.getDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/setMilliseconds/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMilliseconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds(dirtyDate, dirtyMilliseconds, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var milliseconds = (0, _index2.default)(dirtyMilliseconds);
  date.setMilliseconds(milliseconds);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setMinutes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/setMinutes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMinutes;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(dirtyDate, dirtyMinutes, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var minutes = (0, _index2.default)(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setMonth/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/setMonth/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMonth;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getDaysInMonth/index.js */ "./node_modules/date-fns/getDaysInMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the month setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(dirtyDate, dirtyMonth, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var month = (0, _index2.default)(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();

  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0, _index6.default)(dateWithDesiredMonth, dirtyOptions);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setQuarter/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/setQuarter/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setQuarter;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../setMonth/index.js */ "./node_modules/date-fns/setMonth/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the quarter setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(dirtyDate, dirtyQuarter, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var quarter = (0, _index2.default)(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return (0, _index6.default)(date, date.getMonth() + diff * 3, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setSeconds/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/setSeconds/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setSeconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the seconds setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(dirtyDate, dirtySeconds, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var seconds = (0, _index2.default)(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setWeek/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/setWeek/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setWeek;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../getWeek/index.js */ "./node_modules/date-fns/getWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} week - the week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * var result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * var result = setWeek(new Date(2005, 0, 2), 1, {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var week = (0, _index2.default)(dirtyWeek);
  var diff = (0, _index6.default)(date, dirtyOptions) - week;
  date.setDate(date.getDate() - diff * 7);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setWeekYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/setWeekYear/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setWeekYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfWeekYear/index.js */ "./node_modules/date-fns/startOfWeekYear/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/differenceInCalendarDays/index.js");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week-numbering year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> Sat Jan 01 2005 00:00:00
 */
function setWeekYear(dirtyDate, dirtyWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var weekYear = (0, _index2.default)(dirtyWeekYear);
  var diff = (0, _index8.default)(date, (0, _index6.default)(date, dirtyOptions), dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  date = (0, _index6.default)(firstWeek, dirtyOptions);
  date.setDate(date.getDate() + diff);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/setYear/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/setYear/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(dirtyDate, dirtyYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions);
  var year = (0, _index2.default)(dirtyYear);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfDay/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfDay;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfHour/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/startOfHour/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfHour;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setMinutes(0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfISOWeek;

var _index = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/_lib/cloneObject/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var startOfWeekOptions = (0, _index4.default)(dirtyOptions);
  startOfWeekOptions.weekStartsOn = 1;
  return (0, _index2.default)(dirtyDate, startOfWeekOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfISOWeekYear;

var _index = __webpack_require__(/*! ../getISOWeekYear/index.js */ "./node_modules/date-fns/getISOWeekYear/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/startOfISOWeek/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfMinute/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfMinute/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfMinute;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setSeconds(0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfMonth/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfMonth;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfQuarter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/startOfQuarter/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfQuarter;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfSecond/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfSecond/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfSecond;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  date.setMilliseconds(0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfWeek/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/startOfWeek/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfWeek;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index4.default)(dirtyDate, options);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfWeekYear;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../getWeekYear/index.js */ "./node_modules/date-fns/getWeekYear/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/startOfWeek/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * var result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = startOfWeekYear(new Date(2005, 6, 2), {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  var year = (0, _index4.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = (0, _index6.default)(firstWeek, dirtyOptions);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/startOfYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/startOfYear/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfYear;

var _index = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/toDate/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var cleanDate = (0, _index2.default)(dirtyDate, dirtyOptions);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subDays/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/subDays/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subDays;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/addDays/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subHours/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/subHours/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subHours;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addHours/index.js */ "./node_modules/date-fns/addHours/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the hours subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subISOWeekYears/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/subISOWeekYears/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subISOWeekYears;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addISOWeekYears/index.js */ "./node_modules/date-fns/addISOWeekYears/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOWeekYears(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subMilliseconds/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/subMilliseconds/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subMilliseconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/addMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subMinutes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/subMinutes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subMinutes;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMinutes/index.js */ "./node_modules/date-fns/addMinutes/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subMonths/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/subMonths/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subMonths;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/addMonths/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subQuarters/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/subQuarters/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subQuarters;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addQuarters/index.js */ "./node_modules/date-fns/addQuarters/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subSeconds/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/subSeconds/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subSeconds;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addSeconds/index.js */ "./node_modules/date-fns/addSeconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subWeeks/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/subWeeks/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subWeeks;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addWeeks/index.js */ "./node_modules/date-fns/addWeeks/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/subYears/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/subYears/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subYears;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../addYears/index.js */ "./node_modules/date-fns/addYears/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = (0, _index2.default)(dirtyAmount);
  return (0, _index4.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/toDate/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/toDate/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toDate;

var _index = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/_lib/toInteger/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0, _index2.default)(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  // Clone the date
  if (argument instanceof Date || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'object' && Object.prototype.toString.call(argument) === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument);
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN);
      }
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = (0, _index4.default)(new Date(timestamp + time));
      offset = (0, _index4.default)(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }

  // Invalid ISO-formatted year
  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month);
    return date;
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, day);
    return date;
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week);
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  }

  // Invalid ISO-formatted date
  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }

    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  }

  // Invalid ISO-formatted time
  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  var hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone(hours)) {
      return NaN;
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }

  if (date != null) {
    if (date < 1) {
      return false;
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }

  return true;
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }

  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }

  return true;
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }

  if (day != null && (day < 0 || day > 6)) {
    return false;
  }

  return true;
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }

  return true;
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "/Users/joepaul/new_code/Advanced-React/sick-fits/frontend/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.3c0bbe9dd4188ac9ee3c.hot-update.js.map