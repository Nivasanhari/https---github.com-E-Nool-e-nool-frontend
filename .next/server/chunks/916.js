exports.id = 916;
exports.ids = [916];
exports.modules = {

/***/ 9186:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6442));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7730));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4136));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8220));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3030));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 122));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7754))

/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/icons/eNOOL_Logo.svg
var eNOOL_Logo = __webpack_require__(7754);
;// CONCATENATED MODULE: ./public/icons/search.svg
/* harmony default export */ const search = ({"src":"/_next/static/media/search.da8dcee3.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/Components/Navbar/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-white shadow w-full md:px-24",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container px-4 md:px-14",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-shrink-0 flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "h-8 w-auto",
                                    src: eNOOL_Logo["default"],
                                    alt: "Logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-px h-8 bg-gray-300 mx-4 hidden md:block"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "hidden md:flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                            children: "Browse"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                            children: "Categories"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                            children: "How It Works"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                            children: "Publisher"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center md:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2",
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                children: "☰"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden md:flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "search-icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: search,
                                        alt: "search",
                                        className: "h-4 w-4"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]",
                                    children: "LOG IN"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]",
                                    children: "SIGN UP"
                                })
                            ]
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:hidden flex flex-col space-y-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                            children: "Browse"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                            children: "Categories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                            children: "How It Works"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                            children: "Publisher"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]",
                            children: "LOG IN"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]",
                            children: "SIGN UP"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 4001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4010);
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/Components/Navbar/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Project\e-nool-frontend\app\Components\Navbar\Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/LandingPage/footer-bg.png
/* harmony default export */ const footer_bg = ({"src":"/_next/static/media/footer-bg.a331c1b4.png","height":1100,"width":1915,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAiElEQVR42mOI6p9U615a1WJb1pRR2D/VjGH6YonS3PTu1srcbXFVTU4McjkV/+Wzy//LAbFaXuUPkZyKT845Zf9Diyr+S+dV/WeQzSr7B5T8Iw/E0pll/+Wzyv5zATFDRtk/g6I6sIL/ikBTlHMr/4MUy2aX/1PIBopBxRmAukESYAxkw2mYRgCGT04ViOiqIAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/icons/facebook.png
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.fdc0821f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42lXNsQ2AMBBDUWchKtghE5DQkRE8QsQYjMJiCCkWYIWC6+4V/gA0icpaxDbCb0G/Vh4S8fKgaiKUDLsOQ/qgajPMEK8AKCoCZ2j8j67u9Gx2FjdWFjKn24lmiwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/youtube.png
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.ab7fccfb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX+/v79/f38/f3+/v7+/v79/f3+/v79/f7+/v7+/v7+/v79/f3+/v79/f7+/v79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4n1lA/AAAAGHRSTlMABAQkLCwtLTw9Pj5NTVRUiImnsLGys8JcvsdcAAAAQElEQVR42jXKSw6AIBTF0CJyBUTw+WX/K9WYOGvSA6opVYEyQBbF2XGZK8j37e5ef0zvWvfThoXxw3OA0GJsgQdULQJTC7W5agAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/instagram.png
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.ded7a523.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42hWLsQqCYBhFL7QUDkL2LuIujjW4mFMRhC7l2qb23N+5/nLhDodzhGi8cvXNfxokag+SL84tD9TyEgdejMzxs7yKzmc+0cabmdx3uWcHXbSMFO6T5FM8EvqmP+5JxeTMhQsyJiqhKFl4pi1Rog0+HFBHMLGMIwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/twitter.png
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.20b3f418.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYklEQVR42i2LsQ2DQBAEpx/euS3eAjl0YDB9kNEFfdAARVDVHLyAmU12pQVM/n2aHaw4a8ONrQl/4ANijhHs8AWxFfdYwUwJMcVefIM19uAnlvjCdalsubExAWXqzdZ2JjgAF8o4hcBIdrUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/eNOOL_Logo.svg
/* harmony default export */ const eNOOL_Logo = ({"src":"/_next/static/media/eNOOL_Logo.1bd0f8a4.svg","height":84,"width":320,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/Components/Footer/Footer.jsx









const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "absolute w-full min-h-screen flex items-end justify-center pb-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: footer_bg,
                alt: "Background",
                className: "absolute inset-0 h-screen w-full  z-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " relative w-full  md:px-24 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex  flex-wrap text-left lg:text-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-auto pr-80 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        className: "text-xl fonat-semibold text-white",
                                        children: [
                                            "Receive the latest offers & ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "updates via email"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex mt-8 flex-col md:flex-row md:justify-between",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-55 pt-6 md:pt-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        placeholder: "Your Email",
                                                        className: "w-96 border border-white bg-transparent placeholder-white px-4 py-2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "submit",
                                                        className: "absolute right-0 top-0 bottom-0 px-4 py-2  bg-[#7CC9B5] text-white",
                                                        children: "Subscribe"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: " text-sm  text-white pt-5 ",
                                        children: "By signing up, you agree to the Privacy Policy"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12  pt-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex  items-top mb-6 pl-20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full lg:w-4/12 px-4 ml-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block uppercase text-white text-sm font-semibold mb-2",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Contact Us"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Help Topics"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Guarantee"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Shipping"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Store Pickup"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Terms"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full lg:w-4/12 px-4 ml-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block uppercase text-white text-sm font-semibold mb-2",
                                                    children: "Categories "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Action"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Comedy"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Drama"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Horror"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: " Kids"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full lg:w-4/12 px-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block uppercase text-white text-sm font-semibold mb-2",
                                                    children: "Our Services"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Help Center"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Returns"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Product Recalls"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Accessibility"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Contact Us"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Store Pickup"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full lg:w-4/12 px-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block uppercase text-white text-sm font-semibold mb-2",
                                                    children: "Get Started"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "About us"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Sitemap"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Bookmarks"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                href: "#",
                                                                children: "Sign in/Join"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap items-center md:justify-between border py-10 justify-center ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full md:w-4/12  mx-auto text-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-white ",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex text-sm text-white justify-center  font-semibold py-1 justify-space-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: facebook,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: youtube,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: twitter,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: instagram,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-sm text-white  font-semibold py-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: " w-56",
                                        src: eNOOL_Logo,
                                        alt: "Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full md:w-4/12 px-4 mx-auto text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-white ",
                                        children: "We Accept"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex text-sm text-white justify-center  font-semibold py-1 justify-space-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: facebook,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: youtube,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: twitter,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "h-10 w-10 items-center justify-center align-center mr-2",
                                                type: "button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: instagram,
                                                    className: "justify-center w-[44px] h-[44px]",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center md:justify-between justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:w-4/12 px-4 mx-auto text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm text-white font-semibold py-1",
                                children: [
                                    "Copyright \xa9 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        id: "get-current-year",
                                        children: currentYear
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.creative-tim.com/product/notus-js",
                                        className: "text-white hover:text-gray-800",
                                        target: "_blank"
                                    }),
                                    " E-Nool |",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "text-white hover:text-blueGray-800",
                                        children: "Powered By E-Nool"
                                    }),
                                    "."
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./app/layout.js





const metadata = {
    title: "E-Nool",
    description: "The Easiest Way to Find Any Book"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer-bg.a331c1b4.png","height":1100,"width":1915,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAiElEQVR42mOI6p9U615a1WJb1pRR2D/VjGH6YonS3PTu1srcbXFVTU4McjkV/+Wzy//LAbFaXuUPkZyKT845Zf9Diyr+S+dV/WeQzSr7B5T8Iw/E0pll/+Wzyv5zATFDRtk/g6I6sIL/ikBTlHMr/4MUy2aX/1PIBopBxRmAukESYAxkw2mYRgCGT04ViOiqIAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Leaf.0c89d817.png","height":348,"width":93,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAYAAADTLS5CAAAAT0lEQVR4nGN0aC7g+xZl+p3R8vh0KwZmJm5Gi3NztBj//nNntDg/R5zh3/9wRouzs6UZ/jPYghhyQIYUo+WpmUL/mRilGS1frmf48/AlHwC1wBsCvAxfDgAAAABJRU5ErkJggg==","blurWidth":2,"blurHeight":8});

/***/ }),

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/eNOOL_Logo.1bd0f8a4.svg","height":84,"width":320,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/facebook.fdc0821f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42lXNsQ2AMBBDUWchKtghE5DQkRE8QsQYjMJiCCkWYIWC6+4V/gA0icpaxDbCb0G/Vh4S8fKgaiKUDLsOQ/qgajPMEK8AKCoCZ2j8j67u9Gx2FjdWFjKn24lmiwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/instagram.ded7a523.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42hWLsQqCYBhFL7QUDkL2LuIujjW4mFMRhC7l2qb23N+5/nLhDodzhGi8cvXNfxokag+SL84tD9TyEgdejMzxs7yKzmc+0cabmdx3uWcHXbSMFO6T5FM8EvqmP+5JxeTMhQsyJiqhKFl4pi1Rog0+HFBHMLGMIwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/twitter.20b3f418.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYklEQVR42i2LsQ2DQBAEpx/euS3eAjl0YDB9kNEFfdAARVDVHLyAmU12pQVM/n2aHaw4a8ONrQl/4ANijhHs8AWxFfdYwUwJMcVefIM19uAnlvjCdalsubExAWXqzdZ2JjgAF8o4hcBIdrUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/youtube.ab7fccfb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX+/v79/f38/f3+/v7+/v79/f3+/v79/f7+/v7+/v7+/v79/f3+/v79/f7+/v79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4n1lA/AAAAGHRSTlMABAQkLCwtLTw9Pj5NTVRUiImnsLGys8JcvsdcAAAAQElEQVR42jXKSw6AIBTF0CJyBUTw+WX/K9WYOGvSA6opVYEyQBbF2XGZK8j37e5ef0zvWvfThoXxw3OA0GJsgQdULQJTC7W5agAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;