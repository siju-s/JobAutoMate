"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 5462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ useAuthContext),
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "Vo": () => (/* binding */ AuthContext),
/* harmony export */   "he": () => (/* binding */ AuthConsumer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_3__]);
_lib_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const HANDLERS = {
    INITIALIZE: "INITIALIZE",
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT"
};
const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
};
const handlers = {
    [HANDLERS.INITIALIZE]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            ...// if payload (user) is provided, then is authenticated
            user ? {
                isAuthenticated: true,
                isLoading: false,
                user
            } : {
                isLoading: false
            }
        };
    },
    [HANDLERS.SIGN_IN]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    [HANDLERS.SIGN_OUT]: (state)=>{
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    }
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
// The role of this context is to propagate authentication state through the App tree.
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    undefined
});
const AuthProvider = (props)=>{
    const { children  } = props;
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const initialize = async ()=>{
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        // Check if auth has been skipped
        // From sign-in page we may have set "skip-auth" to "true"
        const authSkipped = globalThis.sessionStorage.getItem("skip-auth") === "true";
        if (authSkipped) {
            const user = {};
            dispatch({
                type: HANDLERS.INITIALIZE,
                payload: user
            });
            return;
        }
        // Check if authentication with Zalter is enabled
        // If not, then set user as authenticated
        if (!_lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .ENABLE_AUTH */ .P) {
            const user1 = {};
            dispatch({
                type: HANDLERS.INITIALIZE,
                payload: user1
            });
            return;
        }
        try {
            // Check if user is authenticated
            const isAuthenticated = await _lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .auth.isAuthenticated */ .I.isAuthenticated();
            if (isAuthenticated) {
                // Get user from your database
                const user2 = {};
                dispatch({
                    type: HANDLERS.INITIALIZE,
                    payload: user2
                });
            } else {
                dispatch({
                    type: HANDLERS.INITIALIZE
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: HANDLERS.INITIALIZE
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initialize().catch(console.error);
    }, []);
    const signIn = (user)=>{
        dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user
        });
    };
    const signOut = ()=>{
        dispatch({
            type: HANDLERS.SIGN_OUT
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            ...state,
            signIn,
            signOut
        },
        children: children
    });
};
AuthProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
const AuthConsumer = AuthContext.Consumer;
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "P": () => (/* binding */ ENABLE_AUTH)
/* harmony export */ });
/* harmony import */ var _zalter_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(769);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_zalter_identity_js__WEBPACK_IMPORTED_MODULE_0__]);
_zalter_identity_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const noop = ()=>{};
const ENABLE_AUTH = process.env.NEXT_PUBLIC_ENABLE_ZALTER_AUTH === "true";
const auth = ENABLE_AUTH ? new _zalter_identity_js__WEBPACK_IMPORTED_MODULE_0__.Auth({
    projectId: process.env.NEXT_PUBLIC_ZALTER_PROJECT_ID
}) : noop();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;