/**
 * Minified by jsDelivr using Terser v5.13.1.
 * Original file: /npm/cheerio@1.0.0-rc.12/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create ?

        function(e, t, r, s) {
            void 0 === s && (s = r);
            var a = Object.getOwnPropertyDescriptor(t, r);
            (a && !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
            (a = {
                enumerable: !0,
                get: function() {
                    return t[r];
                },
            }),
            Object.defineProperty(e, s, a);
        } :
        function(e, t, r, s) {
            void 0 === s && (s = r), (e[s] = t[r]);
        }),
    __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create ?

        function(e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
        } :
        function(e, t) {
            e.default = t;
        }),
    __exportStar =
    (this && this.__exportStar) ||
    function(e, t) {
        for (var r in e)
            "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            __createBinding(t, e, r);
    },
    __importStar =
    (this && this.__importStar) ||
    function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e)
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                __createBinding(t, e, r);
        return __setModuleDefault(t, e), t;
    },
    __importDefault =
    (this && this.__importDefault) ||
    function(e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.root =
        exports.parseHTML =
        exports.merge =
        exports.contains =
        exports.text =
        exports.xml =
        exports.html =
        exports.load =
        void 0),
    __exportStar(require("./types.js"), exports);
var load_js_1 = require("./load.js"),
    parse_js_1 = require("./parse.js"),
    parse5_adapter_js_1 = require("./parsers/parse5-adapter.js"),
    dom_serializer_1 = __importDefault(require("dom-serializer")),
    htmlparser2_1 = require("htmlparser2"),
    parse = (0, parse_js_1.getParse)(function(e, t, r, s) {
        return t.xmlMode || t._useHtmlParser2 ?
            (0, htmlparser2_1.parseDocument)(e, t) :
            (0, parse5_adapter_js_1.parseWithParse5)(e, t, r, s);
    });
(exports.load = (0, load_js_1.getLoad)(parse, function(e, t) {
    return t.xmlMode || t._useHtmlParser2 ?
        (0, dom_serializer_1.default)(e, t) :
        (0, parse5_adapter_js_1.renderWithParse5)(e);
})),
(exports.default = (0, exports.load)([]));
var static_js_1 = require("./static.js");
Object.defineProperty(exports, "html", {
        enumerable: !0,
        get: function() {
            return static_js_1.html;
        },
    }),
    Object.defineProperty(exports, "xml", {
        enumerable: !0,
        get: function() {
            return static_js_1.xml;
        },
    }),
    Object.defineProperty(exports, "text", {
        enumerable: !0,
        get: function() {
            return static_js_1.text;
        },
    });
var staticMethods = __importStar(require("./static.js"));
(exports.contains = staticMethods.contains),
(exports.merge = staticMethods.merge),
(exports.parseHTML = staticMethods.parseHTML),
(exports.root = staticMethods.root);
//# sourceMappingURL=/sm/857825ca70f63b42f0d17dcfb065b78a8ecc6265c3700db91af6d6cddf77f583.map