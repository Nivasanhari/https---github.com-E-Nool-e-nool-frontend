"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 9848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Otp = ()=>{
    const otp = "/assets/LoginPage/Otp.svg";
    const correct = "/assets/LoginPage/correct.svg";
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleTogglePassword = ()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white dark:bg-gray-900",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center h-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-cover hidden lg:block lg:w-1/2 h-screen",
                    src: otp,
                    alt: "Background"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-3 text-[#015464]  text-4xl",
                                        children: "OTP Verification"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "pt-10",
                                        children: "Enter A 4 Digit Number That Was Sent To + (1) 20 7234 3456 & sample@gmail.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "flex flex-row items-center justify-between mx-auto w-full max-w-xs",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "w-16 h-16 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            class: "w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]",
                                                            type: "text"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "w-16 h-16 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            class: "w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]",
                                                            type: "text"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "w-16 h-16 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            class: "w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]",
                                                            type: "text"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "w-16 h-16 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            class: "w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]",
                                                            type: "text"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mt-6 text-sm text-center text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "text-[#408080] focus:outline-none focus:underline hover:underline",
                                                        children: "Resend Code in 0:59"
                                                    }),
                                                    "."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50",
                                                    children: "Next"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mt-6 text-sm text-center text-gray-400",
                                        children: [
                                            "Already Have An Enool Account",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "text-[#408080] focus:outline-none focus:underline hover:underline",
                                                children: "Sign In"
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Otp);


/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\NextJS\E-Nool - Copy\e-nool-frontend\app\components\OtpPage\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;