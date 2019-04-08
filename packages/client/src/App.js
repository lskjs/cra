"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);

var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);

var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);

var _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);

var _react = _interopRequireWildcard(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var App =
  /*#__PURE__*/
  (function(_Component) {
    (0, _inherits2.default)(App, _Component);

    function App() {
      (0, _classCallCheck2.default)(this, App);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(App).apply(this, arguments)
      );
    }

    (0, _createClass2.default)(App, [
      {
        key: "render",
        value: function render() {
          return _react.default.createElement(
            "div",
            {
              className: "App"
            },
            _react.default.createElement(
              "header",
              {
                className: "App-header"
              },
              _react.default.createElement("img", {
                src: _logo.default,
                className: "App-logo",
                alt: "logo"
              }),
              _react.default.createElement(
                "p",
                null,
                "Edit ",
                _react.default.createElement("code", null, "src/App.js"),
                " and save to reload."
              ),
              _react.default.createElement(
                "a",
                {
                  className: "App-link",
                  href: "https://reactjs.org",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "Learn React"
              )
            )
          );
        }
      }
    ]);
    return App;
  })(_react.Component);

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ByZXNyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsImxvZ28iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQVEsUUFBQSxTQUFTLEVBQUM7QUFBbEIsU0FDRTtBQUFLLFFBQUEsR0FBRyxFQUFFQyxhQUFWO0FBQWdCLFFBQUEsU0FBUyxFQUFDLFVBQTFCO0FBQXFDLFFBQUEsR0FBRyxFQUFDO0FBQXpDLFFBREYsRUFFRSxpREFDTyx3REFEUCx5QkFGRixFQUtFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsVUFEWjtBQUVFLFFBQUEsSUFBSSxFQUFDLHFCQUZQO0FBR0UsUUFBQSxNQUFNLEVBQUMsUUFIVDtBQUlFLFFBQUEsR0FBRyxFQUFDO0FBSk4sdUJBTEYsQ0FERixDQURGO0FBa0JEOzs7RUFwQmVDLGdCOztlQXVCSEYsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28uc3ZnJztcbmltcG9ydCAnLi9BcHAuY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEVkaXQgPGNvZGU+c3JjL0FwcC5qczwvY29kZT4gYW5kIHNhdmUgdG8gcmVsb2FkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXBwLWxpbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlYXJuIFJlYWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19
//# sourceMappingURL=App.js.map
