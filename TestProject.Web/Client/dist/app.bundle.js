webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./App/app.scss ***!
  \**********************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9hcHAuc2Nzcz81MWMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9BcHAvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./App/Components.ts ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\n__webpack_require__(/*! ./Layout/LayoutComponent */ 8);\r\n__webpack_require__(/*! ./SignIn/SignInComponent */ 10);\r\n__webpack_require__(/*! ./SignUp/SignUpComponent */ 12);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db21wb25lbnRzLnRzP2MxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9MYXlvdXQvTGF5b3V0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBcIi4vU2lnbkluL1NpZ25JbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQgXCIuL1NpZ25VcC9TaWduVXBDb21wb25lbnRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvQ29tcG9uZW50cy50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./App/Layout/LayoutTemplate.html ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-default\\\">\\r\\n    <div class=\\\"container-fluid\\\">\\r\\n        <div class=\\\"navbar-header\\\">\\r\\n            <a class=\\\"navbar-brand\\\" href=\\\"#\\\" data-bind=\\\"text: title\\\"></a>\\r\\n        </div>\\r\\n    </div>\\r\\n</nav>\\r\\n\\r\\n<div class=\\\"app-content\\\">\\r\\n\\r\\n    <div data-bind=\\\"page: {role: 'start'}\\\">\\r\\n        <signin></signin>\\r\\n    </div>\\r\\n    \\r\\n    <div data-bind=\\\"page: {id: 'signUp'}\\\">\\r\\n        <sign-up></sign-up>\\r\\n    </div>\\r\\n\\r\\n</div>\\r\\n\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9MYXlvdXQvTGF5b3V0VGVtcGxhdGUuaHRtbD81MDA1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImFwcC1jb250ZW50XFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInBhZ2U6IHtyb2xlOiAnc3RhcnQnfVxcXCI+XFxyXFxuICAgICAgICA8c2lnbmluPjwvc2lnbmluPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJwYWdlOiB7aWQ6ICdzaWduVXAnfVxcXCI+XFxyXFxuICAgICAgICA8c2lnbi11cD48L3NpZ24tdXA+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9BcHAvTGF5b3V0L0xheW91dFRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./App/SignIn/SignInTemplate.html ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">\\r\\n    <div class=\\\"text-center\\\">\\r\\n        <h2>Sign In!</h2>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"login col-md-12\\\">\\r\\n        <div class=\\\"form-horizontal loginForm\\\" role=\\\"form\\\">\\r\\n            <div class=\\\"inner-addon left-addon emailInput\\\">\\r\\n                <i class=\\\"glyphicon glyphicon-envelope\\\"></i>\\r\\n                <input id=\\\"login-email\\\" data-bind=\\\"value: userEmail\\\" type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"email\\\" value=\\\"\\\" placeholder=\\\"Email\\\">\\r\\n            </div>\\r\\n            <div class=\\\"inner-addon left-addon passwordInput\\\">\\r\\n                <i class=\\\"glyphicon glyphicon-lock\\\"></i>\\r\\n                <input id=\\\"login-password\\\" data-bind=\\\"value: userPassword\\\" type=\\\"password\\\" class=\\\"form-control\\\" name=\\\"password\\\" placeholder=\\\"Password\\\">\\r\\n            </div>\\r\\n            <!--<div class=\\\"forgotYourPasswordCheckbox\\\"><a href=\\\"#\\\">Forgot your password?</a></div>-->\\r\\n            <!--<div class=\\\"input-group\\\">\\r\\n                <div class=\\\"checkbox\\\">\\r\\n                    <label>\\r\\n                        <input id=\\\"login-remember\\\" data-bind=\\\"checked: rememberMe\\\" type=\\\"checkbox\\\" name=\\\"remember\\\"> Remember me\\r\\n                    </label>\\r\\n                </div>\\r\\n            </div>-->\\r\\n            <div class=\\\"form-group loginButton\\\">\\r\\n                <div class=\\\"col-md-12\\\">\\r\\n                    <button id=\\\"btn-login\\\" data-bind=\\\"click: login\\\" class=\\\"btn btn-success col-md-12\\\">Login  </button>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"form-group\\\">\\r\\n                <div class=\\\"col-md-12 control\\\">\\r\\n                    <div class=\\\"notRegisteredYet\\\">\\r\\n                        Not registered yet?\\r\\n                        <a href=\\\"#signUp\\\">Create an account</a>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9TaWduSW4vU2lnbkluVGVtcGxhdGUuaHRtbD82MWFhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8aDI+U2lnbiBJbiE8L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibG9naW4gY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBsb2dpbkZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubmVyLWFkZG9uIGxlZnQtYWRkb24gZW1haWxJbnB1dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibG9naW4tZW1haWxcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHVzZXJFbWFpbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHZhbHVlPVxcXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXItYWRkb24gbGVmdC1hZGRvbiBwYXNzd29yZElucHV0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9ja1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxvZ2luLXBhc3N3b3JkXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiB1c2VyUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9yZ290WW91clBhc3N3b3JkQ2hlY2tib3hcXFwiPjxhIGhyZWY9XFxcIiNcXFwiPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJsb2dpbi1yZW1lbWJlclxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiByZW1lbWJlck1lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicmVtZW1iZXJcXFwiPiBSZW1lbWJlciBtZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBsb2dpbkJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4tbG9naW5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGxvZ2luXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGNvbC1tZC0xMlxcXCI+TG9naW4gIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibm90UmVnaXN0ZXJlZFlldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgTm90IHJlZ2lzdGVyZWQgeWV0P1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNzaWduVXBcXFwiPkNyZWF0ZSBhbiBhY2NvdW50PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9BcHAvU2lnbkluL1NpZ25JblRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./App/SignUp/SignUpTemplate.html ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\r\\n    <div class=\\\"text-center sign-up-title\\\">\\r\\n        <h2>Sign Up!</h2>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"sign-up-form\\\">\\r\\n\\r\\n        <div class=\\\"row\\\">\\r\\n            <div class=\\\"form-group col-md-6\\\">\\r\\n                <label for=\\\"userName\\\">Name *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-user\\\"></i>\\r\\n                    <input id=\\\"userName\\\" class=\\\"form-control\\\" type=\\\"text\\\" data-bind=\\\"value: userName\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"form-group col-md-6\\\">\\r\\n                <label for=\\\"userSurname\\\">Surname *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-user\\\"></i>\\r\\n                    <input id=\\\"userSurname\\\" class=\\\"form-control\\\" type=\\\"text\\\" data-bind=\\\"value: userSurname\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n        \\r\\n        <div>\\r\\n            <div class=\\\"form-group\\\">\\r\\n                <label for=\\\"userPhone\\\">Phone *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-earphone\\\"></i>\\r\\n                    <input id=\\\"userPhone\\\" class=\\\"form-control\\\" type=\\\"text\\\" data-bind=\\\"value: userPhone\\\" /><!--placeholder=\\\"e.g. 1-202-555-0151\\\"--> \\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"form-group\\\">\\r\\n                <label for=\\\"userEmail\\\">E-mail *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-envelope\\\"></i>\\r\\n                    <input id=\\\"userEmail\\\" class=\\\"form-control\\\" type=\\\"email\\\" data-bind=\\\"value: userEmail\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n        \\r\\n        <div>\\r\\n            <div class=\\\"form-group\\\">\\r\\n                <label for=\\\"userPassword\\\">Password *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-lock\\\"></i>\\r\\n                    <input id=\\\"userPassword\\\" class=\\\"form-control\\\" type=\\\"password\\\" data-bind=\\\"value: userPassword\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"form-group\\\">\\r\\n                <label for=\\\"userPasswordConfirm\\\">Password (confirm) *</label>\\r\\n                <div class=\\\"inner-addon left-addon\\\">\\r\\n                    <i class=\\\"glyphicon glyphicon-lock\\\"></i>\\r\\n                    <input id=\\\"userPasswordConfirm\\\" class=\\\"form-control\\\" type=\\\"password\\\" data-bind= \\\"value: userPasswordConfirmation\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n        \\r\\n        <div class=\\\"text-center\\\">\\r\\n            <button class=\\\"btn btn-success btn-block\\\" data-bind=\\\"click: onSubmit\\\">Sign up!</button>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"help-block\\\">\\r\\n            * required fields\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9TaWduVXAvU2lnblVwVGVtcGxhdGUuaHRtbD8yNjg3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBzaWduLXVwLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgIDxoMj5TaWduIFVwITwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaWduLXVwLWZvcm1cXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlck5hbWVcXFwiPk5hbWUgKjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubmVyLWFkZG9uIGxlZnQtYWRkb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1c2VyTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdXNlck5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VyU3VybmFtZVxcXCI+U3VybmFtZSAqPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXItYWRkb24gbGVmdC1hZGRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVzZXJTdXJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiB1c2VyU3VybmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlclBob25lXFxcIj5QaG9uZSAqPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXItYWRkb24gbGVmdC1hZGRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1c2VyUGhvbmVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHVzZXJQaG9uZVxcXCIgLz48IS0tcGxhY2Vob2xkZXI9XFxcImUuZy4gMS0yMDItNTU1LTAxNTFcXFwiLS0+IFxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlckVtYWlsXFxcIj5FLW1haWwgKjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubmVyLWFkZG9uIGxlZnQtYWRkb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXNlckVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdXNlckVtYWlsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VyUGFzc3dvcmRcXFwiPlBhc3N3b3JkICo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvY2tcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXNlclBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdXNlclBhc3N3b3JkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlclBhc3N3b3JkQ29uZmlybVxcXCI+UGFzc3dvcmQgKGNvbmZpcm0pICo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvY2tcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXNlclBhc3N3b3JkQ29uZmlybVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGRhdGEtYmluZD0gXFxcInZhbHVlOiB1c2VyUGFzc3dvcmRDb25maXJtYXRpb25cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvblN1Ym1pdFxcXCI+U2lnbiB1cCE8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgKiByZXF1aXJlZCBmaWVsZHNcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQXBwL1NpZ25VcC9TaWduVXBUZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/Layout/LayoutComponent.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nko.components.register('app-layout', {\r\n    viewModel: __webpack_require__(/*! ./LayoutViewModel */ 9),\r\n    template: __webpack_require__(/*! ./LayoutTemplate.html */ 5)\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9MYXlvdXQvTGF5b3V0Q29tcG9uZW50LnRzPzkwNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcignYXBwLWxheW91dCcsIHtcclxuICAgIHZpZXdNb2RlbDogcmVxdWlyZShcIi4vTGF5b3V0Vmlld01vZGVsXCIpLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL0xheW91dFRlbXBsYXRlLmh0bWxcIilcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL0xheW91dC9MYXlvdXRDb21wb25lbnQudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/Layout/LayoutViewModel.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nvar LayoutViewModel = (function () {\r\n    function LayoutViewModel(options) {\r\n        this.title = ko.observable(options.title);\r\n    }\r\n    return LayoutViewModel;\r\n}());\r\nmodule.exports = LayoutViewModel;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9MYXlvdXQvTGF5b3V0Vmlld01vZGVsLnRzP2ExYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5pbXBvcnQgeyBJTGF5b3V0T3B0aW9ucyB9IGZyb20gXCIuL0lMYXlvdXRPcHRpb25zXCJcclxuXHJcbmNsYXNzIExheW91dFZpZXdNb2RlbCB7XHJcbiAgICBwdWJsaWMgdGl0bGU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElMYXlvdXRPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGtvLm9ic2VydmFibGUob3B0aW9ucy50aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCA9IExheW91dFZpZXdNb2RlbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9MYXlvdXQvTGF5b3V0Vmlld01vZGVsLnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/SignIn/SignInComponent.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nko.components.register('signin', {\r\n    viewModel: __webpack_require__(/*! ./SignInViewModel */ 11),\r\n    template: __webpack_require__(/*! ./SignInTemplate.html */ 6)\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvU2lnbkluL1NpZ25JbkNvbXBvbmVudC50cz8zNDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyA9IHJlcXVpcmUoXCJrbm9ja291dFwiKTtcclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3NpZ25pbicsIHtcclxuICAgIHZpZXdNb2RlbDogcmVxdWlyZShcIi4vU2lnbkluVmlld01vZGVsXCIpLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL1NpZ25JblRlbXBsYXRlLmh0bWxcIilcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL1NpZ25Jbi9TaWduSW5Db21wb25lbnQudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/SignIn/SignInViewModel.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar SignInViewModel = (function () {\r\n    function SignInViewModel() {\r\n    }\r\n    return SignInViewModel;\r\n}());\r\nmodule.exports = SignInViewModel;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvU2lnbkluL1NpZ25JblZpZXdNb2RlbC50cz85MWVjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZ25JblZpZXdNb2RlbCB7XHJcblxyXG4gICAgcHVibGljIHVzZXJFbWFpbDogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgdXNlclBhc3N3b3JkOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0ID0gU2lnbkluVmlld01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9TaWduSW4vU2lnbkluVmlld01vZGVsLnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/SignUp/SignUpComponent.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nko.components.register('sign-up', {\r\n    viewModel: __webpack_require__(/*! ./SignUpViewModel */ 13),\r\n    template: __webpack_require__(/*! ./SignUpTemplate.html */ 7)\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvU2lnblVwL1NpZ25VcENvbXBvbmVudC50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyA9IHJlcXVpcmUoXCJrbm9ja291dFwiKTtcclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3NpZ24tdXAnLCB7XHJcbiAgICB2aWV3TW9kZWw6IHJlcXVpcmUoJy4vU2lnblVwVmlld01vZGVsJyksXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9TaWduVXBUZW1wbGF0ZS5odG1sJylcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL1NpZ25VcC9TaWduVXBDb21wb25lbnQudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./App/SignUp/SignUpViewModel.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nko.extenders.mail = function (target, flag) {\r\n    target.hasError = ko.observable();\r\n    function validate(newValue) {\r\n        var pattern = /[0-9a-z_]+@[0-9a-z_]+\\.[a-z]{2,5}/i;\r\n        var wrongData = flag && newValue && !pattern.test(newValue);\r\n        if (wrongData) {\r\n            target.hasError(true);\r\n            alert(\"Wrong email format\");\r\n        }\r\n    }\r\n    validate(target());\r\n    target.subscribe(validate);\r\n    return target;\r\n};\r\nko.extenders.required = function (target, flag) {\r\n    target.hasError = ko.observable();\r\n    function validate(newValue) {\r\n        target.hasError(flag === true && !newValue);\r\n        if (flag === true && newValue === \"\")\r\n            alert(\"This field is required\");\r\n    }\r\n    validate(target());\r\n    target.subscribe(validate);\r\n    return target;\r\n};\r\nvar SignUpViewModel = (function () {\r\n    function SignUpViewModel() {\r\n        this.userName = ko.observable(\"\").extend({ required: true });\r\n        this.userSurname = ko.observable(\"\");\r\n        this.userPhone = ko.observable(\"\");\r\n        this.userEmail = ko.observable(\"\").extend({ required: true, email: true });\r\n        this.userPassword = ko.observable(\"\");\r\n        this.userPasswordConfirmation = ko.observable(\"\");\r\n    }\r\n    return SignUpViewModel;\r\n}());\r\nmodule.exports = SignUpViewModel;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvU2lnblVwL1NpZ25VcFZpZXdNb2RlbC50cz8xZmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyA9IHJlcXVpcmUoXCJrbm9ja291dFwiKTtcclxuXHJcbmtvLmV4dGVuZGVycy5tYWlsID0gZnVuY3Rpb24odGFyZ2V0LCBmbGFnKSB7XHJcbiAgICB0YXJnZXQuaGFzRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUobmV3VmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9bMC05YS16X10rQFswLTlhLXpfXStcXC5bYS16XXsyLDV9L2k7XHJcbiAgICAgICAgLy8vXlstLl9hLXowLTldK0AoPzpbYS16MC05XVstYS16MC05XStcXC4pK1thLXpdezIsNn0kLztcclxuICAgICAgICBsZXQgd3JvbmdEYXRhID0gZmxhZyAmJiBuZXdWYWx1ZSAmJiAhcGF0dGVybi50ZXN0KG5ld1ZhbHVlKVxyXG4gICAgICAgIGlmICh3cm9uZ0RhdGEpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Lmhhc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgICBhbGVydChcIldyb25nIGVtYWlsIGZvcm1hdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUodGFyZ2V0KCkpO1xyXG5cclxuICAgIHRhcmdldC5zdWJzY3JpYmUodmFsaWRhdGUpO1xyXG5cclxuICAgIC8vcmV0dXJuIHRoZSBvcmlnaW5hbCBvYnNlcnZhYmxlXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxua28uZXh0ZW5kZXJzLnJlcXVpcmVkID0gZnVuY3Rpb24odGFyZ2V0LCBmbGFnKSB7XHJcbiAgICB0YXJnZXQuaGFzRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUobmV3VmFsdWUpIHtcclxuICAgICAgICB0YXJnZXQuaGFzRXJyb3IoZmxhZyA9PT0gdHJ1ZSAmJiAhbmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChmbGFnID09PSB0cnVlICYmIG5ld1ZhbHVlID09PSBcIlwiKVxyXG4gICAgICAgICAgICBhbGVydChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUodGFyZ2V0KCkpO1xyXG5cclxuICAgIHRhcmdldC5zdWJzY3JpYmUodmFsaWRhdGUpO1xyXG5cclxuICAgIC8vcmV0dXJuIHRoZSBvcmlnaW5hbCBvYnNlcnZhYmxlXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuXHJcblxyXG5jbGFzcyBTaWduVXBWaWV3TW9kZWwge1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIHB1YmxpYyB1c2VyU3VybmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgdXNlclBob25lOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIHB1YmxpYyB1c2VyRW1haWw6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgcHVibGljIHVzZXJQYXNzd29yZDogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgdXNlclBhc3N3b3JkQ29uZmlybWF0aW9uOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0ga28ub2JzZXJ2YWJsZShcIlwiKS5leHRlbmQoe3JlcXVpcmVkOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy51c2VyU3VybmFtZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy51c2VyUGhvbmUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMudXNlckVtYWlsID0ga28ub2JzZXJ2YWJsZShcIlwiKS5leHRlbmQoeyByZXF1aXJlZDogdHJ1ZSwgZW1haWw6IHRydWV9KTtcclxuICAgICAgICB0aGlzLnVzZXJQYXNzd29yZCA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy51c2VyUGFzc3dvcmRDb25maXJtYXRpb24gPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5leHBvcnQgPSBTaWduVXBWaWV3TW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL1NpZ25VcC9TaWduVXBWaWV3TW9kZWwudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBSUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./App/App.ts ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nvar pager = __webpack_require__(/*! pager */ 1);\r\n__webpack_require__(/*! ./Components */ 4);\r\n__webpack_require__(/*! ./app.scss */ 3);\r\nvar Application = (function () {\r\n    function Application() {\r\n    }\r\n    Application.prototype.run = function () {\r\n        pager.extendWithPage(this);\r\n        ko.applyBindings(this);\r\n        pager.start();\r\n    };\r\n    return Application;\r\n}());\r\nvar application = new Application();\r\napplication.run();\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQXBwLnRzPzUyYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5pbXBvcnQgcGFnZXIgPSByZXF1aXJlKFwicGFnZXJcIik7XHJcbmltcG9ydCBcIi4vQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgXCIuL2FwcC5zY3NzXCI7XHJcblxyXG5jbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICBwdWJsaWMgcnVuKCk6IHZvaWQge1xyXG4gICAgICAgIHBhZ2VyLmV4dGVuZFdpdGhQYWdlKHRoaXMpO1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcyk7XHJcbiAgICAgICAgcGFnZXIuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG5hcHBsaWNhdGlvbi5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvQXBwLnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQU1BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
],[14]);