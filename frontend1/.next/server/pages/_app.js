"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5462);
/* harmony import */ var _utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8728);
/* harmony import */ var _utils_register_chart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1849);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__]);
_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












(0,_utils_register_chart_js__WEBPACK_IMPORTED_MODULE_10__/* .registerChartJs */ .q)();
const clientSideEmotionCache = (0,_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_9__/* .createEmotionCache */ .S)();
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Material Kit Pro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__.LocalizationProvider, {
                dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_5__.AdapterDateFns,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
                    theme: _theme__WEBPACK_IMPORTED_MODULE_11__/* .theme */ .r,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__/* .AuthProvider */ .Ho, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__/* .AuthConsumer */ .he, {
                                children: (auth)=>auth.isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}) : getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }))
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: "#E6E8F0"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F3F4F6",
                    ".MuiTableCell-root": {
                        color: "#374151"
                    },
                    borderBottom: "none",
                    "& .MuiTableCell-root": {
                        borderBottom: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    "& .MuiTableCell-paddingCheckbox": {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        }
    },
    palette: {
        neutral: {
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827"
        },
        action: {
            active: "#6B7280",
            focus: "rgba(55, 65, 81, 0.12)",
            hover: "rgba(55, 65, 81, 0.04)",
            selected: "rgba(55, 65, 81, 0.08)",
            disabledBackground: "rgba(55, 65, 81, 0.12)",
            disabled: "rgba(55, 65, 81, 0.26)"
        },
        background: {
            default: "#F9FAFC",
            paper: "#FFFFFF"
        },
        divider: "#E6E8F0",
        primary: {
            main: "#5048E5",
            light: "#828DF8",
            dark: "#3832A0",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#10B981",
            light: "#3FC79A",
            dark: "#0B815A",
            contrastText: "#FFFFFF"
        },
        success: {
            main: "#14B8A6",
            light: "#43C6B7",
            dark: "#0E8074",
            contrastText: "#FFFFFF"
        },
        info: {
            main: "#2196F3",
            light: "#64B6F7",
            dark: "#0B79D0",
            contrastText: "#FFFFFF"
        },
        warning: {
            main: "#FFB020",
            light: "#FFBF4C",
            dark: "#B27B16",
            contrastText: "#FFFFFF"
        },
        error: {
            main: "#D14343",
            light: "#DA6868",
            dark: "#922E2E",
            contrastText: "#FFFFFF"
        },
        text: {
            primary: "#121828",
            secondary: "#65748B",
            disabled: "rgba(55, 65, 81, 0.48)"
        }
    },
    shape: {
        borderRadius: 8
    },
    shadows: [
        "none",
        "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
        "0px 1px 2px rgba(100, 116, 139, 0.12)",
        "0px 1px 4px rgba(100, 116, 139, 0.12)",
        "0px 1px 5px rgba(100, 116, 139, 0.12)",
        "0px 1px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 6px rgba(100, 116, 139, 0.12)",
        "0px 3px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        "0px 5px 12px rgba(100, 116, 139, 0.12)",
        "0px 5px 14px rgba(100, 116, 139, 0.12)",
        "0px 5px 15px rgba(100, 116, 139, 0.12)",
        "0px 6px 15px rgba(100, 116, 139, 0.12)",
        "0px 7px 15px rgba(100, 116, 139, 0.12)",
        "0px 8px 15px rgba(100, 116, 139, 0.12)",
        "0px 9px 15px rgba(100, 116, 139, 0.12)",
        "0px 10px 15px rgba(100, 116, 139, 0.12)",
        "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
        "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)"
    ],
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.75
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.375
        },
        h2: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.375
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.375
        }
    }
});


/***/ }),

/***/ 8728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/create-emotion-cache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 1849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ registerChartJs)
});

;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
;// CONCATENATED MODULE: ./src/utils/register-chart-js.js

const registerChartJs = ()=>{
    external_chart_js_namespaceObject.Chart.register(external_chart_js_namespaceObject.ArcElement, external_chart_js_namespaceObject.BarElement, external_chart_js_namespaceObject.CategoryScale, external_chart_js_namespaceObject.Legend, external_chart_js_namespaceObject.LineElement, external_chart_js_namespaceObject.LinearScale, external_chart_js_namespaceObject.PointElement, external_chart_js_namespaceObject.Title, external_chart_js_namespaceObject.Tooltip);
};


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4046:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDateFns");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 769:
/***/ ((module) => {

module.exports = import("@zalter/identity-js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [462], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();