"use strict";
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 9392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FlipbookPlayer_page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/icons/backButton.svg
/* harmony default export */ const backButton = ({"src":"/_next/static/media/backButton.54d8c3cc.svg","height":15,"width":9,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/preferences.svg
/* harmony default export */ const preferences = ({"src":"/_next/static/media/preferences.21e8170f.svg","height":23,"width":30,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/fontpreferences.svg
/* harmony default export */ const fontpreferences = ({"src":"/_next/static/media/fontpreferences.ec3df390.svg","height":17,"width":23,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/bookmark.svg
/* harmony default export */ const bookmark = ({"src":"/_next/static/media/bookmark.79a18996.svg","height":22,"width":16,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/Flipbook/book.png
/* harmony default export */ const book = ({"src":"/_next/static/media/book.e9e6911c.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AFE4XFtXeGB2nGZ6nFJXcCobOgCXlp6kp7KlrL+0usebmqR9fIYAra+zoaWwkpinmKGyw8LFqqaoAEo/Vig3YICDmXqEoVVgc1dISQBUR11WV2uHg4qXjox/dGZgWV0AOjpMWktcTDw7dW5tdXF0OTVKADkrPF5WZ1VrelVsfEdQYhoSQAA7MT1FRFd8ZoJ2VnAsMEg5N1FP7D22D0XdlAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/Flipbook/Book1-01.png
/* harmony default export */ const Book1_01 = ({"src":"/_next/static/media/Book1-01.20fca427.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAKUlEQVR42iWKUQoAIBTC3v0P3EfRbJgIsuEECEMMI4nO2pXnVsZK/9k8Nl0vo59bTPgAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/Flipbook/Book1-02.png
/* harmony default export */ const Book1_02 = ({"src":"/_next/static/media/Book1-02.4bc53b0c.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAG0lEQVR42mP49+//v3//GKDU//9AGs4DYlwUADb9L6fd78Q2AAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/searchbook.svg
/* harmony default export */ const searchbook = ({"src":"/_next/static/media/searchbook.eebf66d0.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/moreoption.svg
/* harmony default export */ const moreoption = ({"src":"/_next/static/media/moreoption.efc5112f.svg","height":6,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/fullscreen.svg
/* harmony default export */ const fullscreen = ({"src":"/_next/static/media/fullscreen.a79fe14e.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/react-pageflip/build/index.js
var build = __webpack_require__(8320);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
;// CONCATENATED MODULE: ./app/components/FlipbookPlayer/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













const page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-white border-gray-200 dark:bg-gray-900 w-auto mx-auto  ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-20 my-10 p-4  pt-10  pl-96 rounded-lg bg-[#7CC9B5]/30 items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl flex mb-10 pr-44 flex-wrap flex-row items-center justify-between mx-auto ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center space-x-6 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: backButton,
                                        className: "w-4 h-4",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: preferences,
                                        className: "w-4 h-4",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden w-full md:block md:w-96  ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "font-medium flex flex-col p-4 md:p-0  border b rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: fontpreferences,
                                                className: "w-4 h-4",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: bookmark,
                                                    className: "w-4 h-4",
                                                    alt: ""
                                                })
                                            }),
                                            "         "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: moreoption,
                                                    className: "w-4 h-4",
                                                    alt: ""
                                                })
                                            }),
                                            "         "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: searchbook,
                                                    className: "w-4 h-4",
                                                    alt: ""
                                                })
                                            }),
                                            "         "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: fullscreen,
                                                    className: "w-4 h-4",
                                                    alt: ""
                                                })
                                            }),
                                            "         "
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((build_default()), {
                    width: 500,
                    height: 710,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: book,
                                className: "",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Book1_01,
                                className: "",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Book1_01,
                                className: "",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Book1_01,
                                className: "",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Book1_01,
                                className: "",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Book1_01,
                                className: "",
                                alt: ""
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const FlipbookPlayer_page = (page);


/***/ })

};
;