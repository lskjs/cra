"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

it("renders without crashing", function() {
  var div = document.createElement("div");

  _reactDom.default.render(
    _react.default.createElement(_App.default, null),
    div
  );

  _reactDom.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ByZXNyYy9BcHAudGVzdC5qcyJdLCJuYW1lcyI6WyJpdCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBQSxFQUFFLENBQUMsMEJBQUQsRUFBNkIsWUFBTTtBQUNuQyxNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUNBQyxvQkFBU0MsTUFBVCxDQUFnQiw2QkFBQyxZQUFELE9BQWhCLEVBQXlCSixHQUF6Qjs7QUFDQUcsb0JBQVNFLHNCQUFULENBQWdDTCxHQUFoQztBQUNELENBSkMsQ0FBRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5pdChcInJlbmRlcnMgd2l0aG91dCBjcmFzaGluZ1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkaXYpO1xuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRpdik7XG59KTtcbiJdfQ==
//# sourceMappingURL=App.test.js.map
