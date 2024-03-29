/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = vue;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = wujie;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wujie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var wujie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wujie__WEBPACK_IMPORTED_MODULE_1__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


var wujie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: "",
            required: true
        },
        loading: {
            type: HTMLElement,
            default: undefined
        },
        url: {
            type: String,
            default: "",
            required: true
        },
        sync: {
            type: Boolean,
            default: undefined
        },
        prefix: {
            type: Object,
            default: undefined
        },
        alive: {
            type: Boolean,
            default: undefined
        },
        props: {
            type: Object,
            default: undefined
        },
        attrs: {
            type: Object,
            default: undefined
        },
        replace: {
            type: Function,
            default: undefined
        },
        fetch: {
            type: Function,
            default: undefined
        },
        fiber: {
            type: Boolean,
            default: undefined
        },
        degrade: {
            type: Boolean,
            default: undefined
        },
        plugins: {
            type: Array,
            default: null
        },
        beforeLoad: {
            type: Function,
            default: null
        },
        beforeMount: {
            type: Function,
            default: null
        },
        afterMount: {
            type: Function,
            default: null
        },
        beforeUnmount: {
            type: Function,
            default: null
        },
        afterUnmount: {
            type: Function,
            default: null
        },
        activated: {
            type: Function,
            default: null
        },
        deactivated: {
            type: Function,
            default: null
        }
    },
    setup: function setup(props, param) {
        var emit = param.emit;
        var instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        // 微前端初始化完成
        var init = function() {
            (0,wujie__WEBPACK_IMPORTED_MODULE_1__.startApp)({
                name: props.name,
                url: props.url,
                el: instance === null || instance === void 0 ? void 0 : instance.refs.wujie,
                loading: props.loading,
                alive: props.alive,
                fetch: props.fetch,
                props: props.props,
                attrs: props.attrs,
                replace: props.replace,
                sync: props.sync,
                prefix: props.prefix,
                fiber: props.fiber,
                degrade: props.degrade,
                plugins: props.plugins,
                beforeLoad: props.beforeLoad,
                beforeMount: props.beforeMount,
                afterMount: props.afterMount,
                beforeUnmount: props.beforeUnmount,
                afterUnmount: props.afterUnmount,
                activated: props.activated,
                deactivated: props.deactivated
            });
        };
        // 监听name和url变化
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([
            props.name,
            props.url
        ], function() {
            init();
        });
        // 事件监听
        var hanlderEmit = function(event) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            emit.apply(void 0, [
                event
            ].concat(_to_consumable_array(args)));
        };
        // 初始化
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function() {
            wujie__WEBPACK_IMPORTED_MODULE_1__.bus.$onAll(hanlderEmit);
            init();
        });
        // 销毁
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function() {
            wujie__WEBPACK_IMPORTED_MODULE_1__.bus.$offAll(hanlderEmit);
        });
        return function() {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
                style: {
                    width: props.width,
                    height: props.height
                },
                ref: "wujie" // 方便以后读取
            });
        };
    }
});
// 全局注册
wujie.install = function(app) {
    app.component("wujieVue", wujie);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wujie);

})();

/******/ })()
;