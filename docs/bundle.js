function g11nPath(s){return"./"+s.toLowerCase()+".js"};

var R = function (name, fnOrJson) {
    R.m.set(name.toLowerCase(), typeof fnOrJson == "function" ? { fn: fnOrJson, exports: undefined } : { exports: fnOrJson });
};
R.t = this;
R.m = new Map();
R.r = function (name, parent) {
    var p = name;
    if (p[0] === ".") {
        var parts = parent ? parent.split("/") : [];
        parts.push("..");
        parts = parts.concat(p.split("/"));
        var newParts = [];
        for (var i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            if (!part || part === ".")
                continue;
            if (part === "..")
                newParts.pop();
            else
                newParts.push(part);
        }
        p = newParts.join("/");
        if ((lp = R.map[p.toLowerCase()]))
            p = lp;
    }
    else {
        var parts = name.split("/");
        if (parts.length >= 2) {
            if (parts[0].charCodeAt(0) == 64) {
                parts[0] = parts[0] + "/" + parts[1];
                parts.splice(1, 1);
            }
        }
        if (parts.length <= 1) {
            p = R.map[name.toLowerCase()];
        }
        else {
            p = parts[0];
            if ((parts[0] = R.map[p.toLowerCase() + "/"]) == null) {
                throw new Error("Directory for module " + p + " in " + (parent || "/") + " not registered");
            }
            p = parts.join("/");
        }
    }
    var lp = p.toLowerCase();
    var m = R.m.get(lp);
    if (m == null && /\.js$/.test(lp)) {
        m = R.m.get(lp.substr(0, lp.length - 3));
    }
    if (m == null)
        throw new Error("Module " + name + " in " + (parent || "/") + " not registered");
    if (m.exports !== undefined)
        return m.exports;
    m.exports = {};
    m.fn.call(R.t, function (name) { return R.r(name, p); }, m, m.exports, R.t);
    if ((typeof m.exports === "function" || typeof m.exports === "object") && !("default" in m.exports)) {
        try {
            Object.defineProperty(m.exports, "default", { value: m.exports, enumerable: false });
        }
        catch (_a) { }
    }
    return m.exports;
};
var DEBUG = true;
R.map = {"bobril":"web/node_modules/bobril/index","bobril/":"web/node_modules/bobril","bobrilstrap":"web/node_modules/bobrilstrap/index","bobrilstrap/":"web/node_modules/bobrilstrap","bobril-g11n":"web/node_modules/bobril-g11n/index","bobril-g11n/":"web/node_modules/bobril-g11n","bootstrap":"web/node_modules/bootstrap/dist/js/npm","bootstrap/":"web/node_modules/bootstrap","jquery":"web/node_modules/jquery/dist/jquery","jquery/":"web/node_modules/jquery","bootstrap-3-typeahead":"web/node_modules/bootstrap-3-typeahead/bootstrap3-typeahead","bootstrap-3-typeahead/":"web/node_modules/bootstrap-3-typeahead","bobx":"web/node_modules/bobx/index","bobx/":"web/node_modules/bobx","moment":"web/node_modules/moment/moment","moment/":"web/node_modules/moment","pwa-install-handler":"web/node_modules/pwa-install-handler/dist/index","pwa-install-handler/":"web/node_modules/pwa-install-handler"};
var __extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var __rest = function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var __generator = function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var __exportStar = function (m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
};

var __values = function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var __read = function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var __spread = function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var __spreadArrays = function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var __await = function (v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
};

var __asyncValues = function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

var __makeTemplateObject = function (cooked, raw) {
    Object.defineProperty(cooked, "raw", { value: raw });
    return cooked;
};
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
(function(root,factory){"use strict";if(typeof module!=="undefined"&&module.exports){module.exports=factory(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else{factory(root.jQuery)}})(this,function($){"use strict";var Typeahead=function(element,options){this.$element=$(element);this.options=$.extend({},$.fn.typeahead.defaults,options);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.select=this.options.select||this.select;this.autoSelect=typeof this.options.autoSelect=="boolean"?this.options.autoSelect:true;this.highlighter=this.options.highlighter||this.highlighter;this.render=this.options.render||this.render;this.updater=this.options.updater||this.updater;this.displayText=this.options.displayText||this.displayText;this.source=this.options.source;this.delay=this.options.delay;this.$menu=$(this.options.menu);this.$appendTo=this.options.appendTo?$(this.options.appendTo):null;this.fitToElement=typeof this.options.fitToElement=="boolean"?this.options.fitToElement:false;this.shown=false;this.listen();this.showHintOnFocus=typeof this.options.showHintOnFocus=="boolean"||this.options.showHintOnFocus==="all"?this.options.showHintOnFocus:false;this.afterSelect=this.options.afterSelect;this.addItem=false;this.value=this.$element.val()||this.$element.text()};Typeahead.prototype={constructor:Typeahead,select:function(){var val=this.$menu.find(".active").data("value");this.$element.data("active",val);if(this.autoSelect||val){var newVal=this.updater(val);if(!newVal){newVal=""}this.$element.val(this.displayText(newVal)||newVal).text(this.displayText(newVal)||newVal).change();this.afterSelect(newVal)}return this.hide()},updater:function(item){return item},setSource:function(source){this.source=source},show:function(){var pos=$.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});var scrollHeight=typeof this.options.scrollHeight=="function"?this.options.scrollHeight.call():this.options.scrollHeight;var element;if(this.shown){element=this.$menu}else if(this.$appendTo){element=this.$menu.appendTo(this.$appendTo);this.hasSameParent=this.$appendTo.is(this.$element.parent())}else{element=this.$menu.insertAfter(this.$element);this.hasSameParent=true}if(!this.hasSameParent){element.css("position","fixed");var offset=this.$element.offset();pos.top=offset.top;pos.left=offset.left}var dropup=$(element).parent().hasClass("dropup");var newTop=dropup?"auto":pos.top+pos.height+scrollHeight;var right=$(element).hasClass("dropdown-menu-right");var newLeft=right?"auto":pos.left;element.css({top:newTop,left:newLeft}).show();if(this.options.fitToElement===true){element.css("width",this.$element.outerWidth()+"px")}this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(query){var items;if(typeof query!="undefined"&&query!==null){this.query=query}else{this.query=this.$element.val()||this.$element.text()||""}if(this.query.length<this.options.minLength&&!this.options.showHintOnFocus){return this.shown?this.hide():this}var worker=$.proxy(function(){if($.isFunction(this.source)){this.source(this.query,$.proxy(this.process,this))}else if(this.source){this.process(this.source)}},this);clearTimeout(this.lookupWorker);this.lookupWorker=setTimeout(worker,this.delay)},process:function(items){var that=this;items=$.grep(items,function(item){return that.matcher(item)});items=this.sorter(items);if(!items.length&&!this.options.addItem){return this.shown?this.hide():this}if(items.length>0){this.$element.data("active",items[0])}else{this.$element.data("active",null)}if(this.options.addItem){items.push(this.options.addItem)}if(this.options.items=="all"){return this.render(items).show()}else{return this.render(items.slice(0,this.options.items)).show()}},matcher:function(item){var it=this.displayText(item);return~it.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){var beginswith=[];var caseSensitive=[];var caseInsensitive=[];var item;while(item=items.shift()){var it=this.displayText(item);if(!it.toLowerCase().indexOf(this.query.toLowerCase()))beginswith.push(item);else if(~it.indexOf(this.query))caseSensitive.push(item);else caseInsensitive.push(item)}return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var html=$("<div></div>");var query=this.query;var i=item.toLowerCase().indexOf(query.toLowerCase());var len=query.length;var leftPart;var middlePart;var rightPart;var strong;if(len===0){return html.text(item).html()}while(i>-1){leftPart=item.substr(0,i);middlePart=item.substr(i,len);rightPart=item.substr(i+len);strong=$("<strong></strong>").text(middlePart);html.append(document.createTextNode(leftPart)).append(strong);item=rightPart;i=item.toLowerCase().indexOf(query.toLowerCase())}return html.append(document.createTextNode(item)).html()},render:function(items){var that=this;var self=this;var activeFound=false;var data=[];var _category=that.options.separator;$.each(items,function(key,value){if(key>0&&value[_category]!==items[key-1][_category]){data.push({__type:"divider"})}if(value[_category]&&(key===0||value[_category]!==items[key-1][_category])){data.push({__type:"category",name:value[_category]})}data.push(value)});items=$(data).map(function(i,item){if((item.__type||false)=="category"){return $(that.options.headerHtml).text(item.name)[0]}if((item.__type||false)=="divider"){return $(that.options.headerDivider)[0]}var text=self.displayText(item);i=$(that.options.item).data("value",item);i.find("a").html(that.highlighter(text,item));if(text==self.$element.val()){i.addClass("active");self.$element.data("active",item);activeFound=true}return i[0]});if(this.autoSelect&&!activeFound){items.filter(":not(.dropdown-header)").first().addClass("active");this.$element.data("active",items.first().data("value"))}this.$menu.html(items);return this},displayText:function(item){return typeof item!=="undefined"&&typeof item.name!="undefined"&&item.name||item},next:function(event){var active=this.$menu.find(".active").removeClass("active");var next=active.next();if(!next.length){next=$(this.$menu.find("li")[0])}next.addClass("active")},prev:function(event){var active=this.$menu.find(".active").removeClass("active");var prev=active.prev();if(!prev.length){prev=this.$menu.find("li").last()}prev.addClass("active")},listen:function(){this.$element.on("focus",$.proxy(this.focus,this)).on("blur",$.proxy(this.blur,this)).on("keypress",$.proxy(this.keypress,this)).on("input",$.proxy(this.input,this)).on("keyup",$.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",$.proxy(this.keydown,this))}this.$menu.on("click",$.proxy(this.click,this)).on("mouseenter","li",$.proxy(this.mouseenter,this)).on("mouseleave","li",$.proxy(this.mouseleave,this)).on("mousedown",$.proxy(this.mousedown,this))},destroy:function(){this.$element.data("typeahead",null);this.$element.data("active",null);this.$element.off("focus").off("blur").off("keypress").off("input").off("keyup");if(this.eventSupported("keydown")){this.$element.off("keydown")}this.$menu.remove();this.destroyed=true},eventSupported:function(eventName){var isSupported=eventName in this.$element;if(!isSupported){this.$element.setAttribute(eventName,"return;");isSupported=typeof this.$element[eventName]==="function"}return isSupported},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:if(e.shiftKey)return;e.preventDefault();this.prev();break;case 40:if(e.shiftKey)return;e.preventDefault();this.next();break}},keydown:function(e){this.suppressKeyPressRepeat=~$.inArray(e.keyCode,[40,38,9,13,27]);if(!this.shown&&e.keyCode==40){this.lookup()}else{this.move(e)}},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},input:function(e){var currentValue=this.$element.val()||this.$element.text();if(this.value!==currentValue){this.value=currentValue;this.lookup()}},keyup:function(e){if(this.destroyed){return}switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break}},focus:function(e){if(!this.focused){this.focused=true;if(this.options.showHintOnFocus&&this.skipShowHintOnFocus!==true){if(this.options.showHintOnFocus==="all"){this.lookup("")}else{this.lookup()}}}if(this.skipShowHintOnFocus){this.skipShowHintOnFocus=false}},blur:function(e){if(!this.mousedover&&!this.mouseddown&&this.shown){this.hide();this.focused=false}else if(this.mouseddown){this.skipShowHintOnFocus=true;this.$element.focus();this.mouseddown=false}},click:function(e){e.preventDefault();this.skipShowHintOnFocus=true;this.select();this.$element.focus();this.hide()},mouseenter:function(e){this.mousedover=true;this.$menu.find(".active").removeClass("active");$(e.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=false;if(!this.focused&&this.shown)this.hide()},mousedown:function(e){this.mouseddown=true;this.$menu.one("mouseup",function(e){this.mouseddown=false}.bind(this))}};var old=$.fn.typeahead;$.fn.typeahead=function(option){var arg=arguments;if(typeof option=="string"&&option=="getActive"){return this.data("active")}return this.each(function(){var $this=$(this);var data=$this.data("typeahead");var options=typeof option=="object"&&option;if(!data)$this.data("typeahead",data=new Typeahead(this,options));if(typeof option=="string"&&data[option]){if(arg.length>1){data[option].apply(data,Array.prototype.slice.call(arg,1))}else{data[option]()}}})};$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',minLength:1,scrollHeight:0,autoSelect:true,afterSelect:$.noop,addItem:false,delay:0,separator:"category",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'};$.fn.typeahead.Constructor=Typeahead;$.fn.typeahead.noConflict=function(){$.fn.typeahead=old;return this};$(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var $this=$(this);if($this.data("typeahead"))return;$this.typeahead($this.data())})});
R('web/index',function(require, module, exports, global){
"use strict";
var b = require("bobril");
require("bobrilstrap");
var routes_1 = require("./src/routes");
var bobril_g11n_1 = require("bobril-g11n");
bobril_g11n_1.initGlobalization().then(function () {
    b.routes(b.route(routes_1.mainRoute, [b.route(routes_1.searchRoute), b.routeDefault(routes_1.searchRoute)]));
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register(b.asset("sw.js"))
        .then(function () { return console.log("BB Service Worker Registered"); });
}

});
R('web/node_modules/bobril-g11n/index',function(require, module, exports, global){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./src/msgFormatParser"));
__export(require("./src/msgFormatter"));
__export(require("./src/extractUsedParams"));
__export(require("./src/jsonp"));
__export(require("./src/localeDataStorage"));
__export(require("./src/translate"));

});
R('web/node_modules/bobril-g11n/src/extractUsedParams',function(require, module, exports, global){
"use strict";
var bobril_1 = require("bobril");
function extractUsedParams(msgAst) {
    var params = Object.create(null);
    extractUsedParamsRec(params, msgAst);
    return Object.keys(params).sort();
}
exports.extractUsedParams = extractUsedParams;
function extractUsedParamsRec(usedParams, msgAst) {
    if (bobril_1.isString(msgAst)) {
        return;
    }
    if (bobril_1.isArray(msgAst)) {
        for (var i = 0; i < msgAst.length; i++) {
            var item = msgAst[i];
            extractUsedParamsRec(usedParams, item);
        }
        return;
    }
    switch (msgAst.type) {
        case "arg":
            usedParams[msgAst.id] = true;
            return;
        case "hash":
            return;
        case "concat":
            extractUsedParamsRec(usedParams, msgAst.values);
            return;
        case "el":
            usedParams[msgAst.id] = true;
            if (msgAst.value != undefined)
                extractUsedParamsRec(usedParams, msgAst.value);
            return;
        case "format":
            usedParams[msgAst.id] = true;
            var type = msgAst.format.type;
            switch (type) {
                case "plural":
                case "select": {
                    var options = msgAst.format.options;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        extractUsedParamsRec(usedParams, opt.value);
                    }
                    break;
                }
                case "number":
                case "date":
                case "time": {
                    var options = msgAst.format.options;
                    if (options) {
                        for (var i = 0; i < options.length; i++) {
                            if (typeof options[i].value === "object") {
                                extractUsedParamsRec(usedParams, options[i].value);
                            }
                        }
                    }
                    break;
                }
            }
            return;
    }
}

});
R('web/node_modules/bobril-g11n/src/jsonp',function(require, module, exports, global){
"use strict";
function jsonp(url) {
    return new Promise(function (r, e) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.onload = function () {
            r();
        };
        script.onerror = function (_ev) {
            e('Failed to load ' + url);
        };
        script.src = url;
        document.head.appendChild(script);
    });
}
exports.jsonp = jsonp;

});
R('web/node_modules/bobril-g11n/src/localeDataStorage',function(require, module, exports, global){
"use strict";
var defs = Object.create(null);
defs['en'] = {
    pluralFn: function (n, ord) {
        var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        if (ord)
            return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
        return n == 1 && v0 ? "one" : "other";
    },
    td: ",",
    dd: "."
};
function setRules(locale, params) {
    defs[locale] = { pluralFn: params[0], td: params[1], dd: params[2] };
}
exports.setRules = setRules;
function getLanguageFromLocale(locale) {
    var idx = locale.indexOf('-');
    if (idx >= 0)
        return locale.substr(0, idx);
    return locale;
}
exports.getLanguageFromLocale = getLanguageFromLocale;
function getRules(locale) {
    var d = defs[locale];
    if (!d) {
        d = defs[getLanguageFromLocale(locale)];
        if (!d) {
            d = defs['en'];
        }
    }
    return d;
}
exports.getRules = getRules;

});
R('web/node_modules/bobril-g11n/src/msgFormatParser',function(require, module, exports, global){
"use strict";
var bobril_1 = require("bobril");
var sourceText;
var pos;
var length;
var curLine;
var curCol;
var nextLine;
var nextCol;
var curToken;
var errorMsg;
var EOFToken = -1;
var ErrorToken = -2;
var OpenBracketToken = -3;
var CloseBracketToken = -4;
var HashToken = -5;
function advanceNextToken() {
    curLine = nextLine;
    curCol = nextCol;
    if (pos === length) {
        curToken = EOFToken;
        return;
    }
    var ch = sourceText.charCodeAt(pos++);
    if (ch === 13 || ch === 10) {
        nextLine++;
        nextCol = 1;
        if (ch === 13 && pos < length && sourceText.charCodeAt(pos) === 10) {
            pos++;
        }
        curToken = 13;
        return;
    }
    nextCol++;
    if (ch === 92) {
        // \
        if (pos === length) {
            curToken = 92;
            return;
        }
        ch = sourceText.charCodeAt(pos++);
        nextCol++;
        if (ch === 92 || ch === 123 || ch === 125 || ch === 35) {
            // \ { } #
            curToken = ch;
            return;
        }
        if (ch === 117) {
            // u
            if (pos + 4 <= length) {
                var hexcode = sourceText.substr(pos, 4);
                if (/^[0-9a-f]+$/gi.test(hexcode)) {
                    curToken = parseInt(hexcode, 16);
                    pos += 4;
                    nextCol += 4;
                    return;
                }
            }
            errorMsg = "After \\u there must be 4 hex characters";
            curToken = ErrorToken;
            return;
        }
        errorMsg = "After \\ there coud be only one of \\{}#u characters";
        curToken = ErrorToken;
        return;
    }
    if (ch === 123) {
        // {
        curToken = OpenBracketToken;
    }
    else if (ch === 125) {
        // }
        curToken = CloseBracketToken;
    }
    else if (ch === 35) {
        // #
        curToken = HashToken;
    }
    else {
        curToken = ch;
    }
}
function isParserError(val) {
    return bobril_1.isObject(val) && !bobril_1.isArray(val) && val.type === "error";
}
exports.isParserError = isParserError;
function buildError(msg) {
    if (msg === undefined)
        msg = errorMsg || "Error";
    return { type: "error", msg: msg, pos: pos - 1, line: curLine, col: curCol };
}
function skipWs() {
    while (curToken === 9 || curToken === 10 || curToken === 13 || curToken === 32) {
        advanceNextToken();
    }
}
function parseIdentificator() {
    var identificator = "";
    if ((curToken >= 65 && curToken <= 90) || (curToken >= 97 && curToken <= 122) || curToken === 95) {
        do {
            identificator += String.fromCharCode(curToken);
            advanceNextToken();
        } while ((curToken >= 65 && curToken <= 90) ||
            (curToken >= 97 && curToken <= 122) ||
            curToken === 95 ||
            (curToken >= 48 && curToken <= 57));
    }
    else if (curToken >= 47 && curToken <= 57) {
        do {
            identificator += String.fromCharCode(curToken);
            advanceNextToken();
        } while (curToken >= 47 && curToken <= 57);
        if (identificator.charCodeAt(0) == 47 && identificator.charCodeAt(identificator.length - 1) == 47)
            return buildError("Slash could be only on one side of number");
    }
    else
        return buildError("Expecting identifier [a-zA-Z_] or number");
    return identificator;
}
function parseChars() {
    var res = "";
    do {
        res += String.fromCharCode(curToken);
        advanceNextToken();
    } while (curToken >= 0 && curToken !== 9 && curToken !== 10 && curToken !== 13 && curToken !== 32);
    return res;
}
function parseNumber() {
    var number = "";
    do {
        number += String.fromCharCode(curToken);
        advanceNextToken();
    } while (curToken >= 48 && curToken <= 57);
    return parseInt(number, 10);
}
function isComma() {
    return curToken === 44;
}
function isOpenBracketToken() {
    return curToken === OpenBracketToken;
}
function isCloseBracketToken() {
    return curToken === CloseBracketToken;
}
var numClasses = { zero: 1, one: 1, two: 1, few: 1, many: 1, other: 1 };
function parseFormat() {
    skipWs();
    if (curToken === ErrorToken)
        return buildError();
    var identificator = parseIdentificator();
    if (isParserError(identificator))
        return identificator;
    if (identificator[0] <= "9") {
        if (isCloseBracketToken()) {
            advanceNextToken();
            if (identificator[identificator.length - 1] == "/") {
                return { type: "el", id: parseInt(identificator.substr(0, identificator.length - 1)) };
            }
            if (identificator[0] == "/") {
                return { type: "close", id: parseInt(identificator.substr(1, identificator.length - 1)) };
            }
            return { type: "open", id: parseInt(identificator) };
        }
        return buildError("element could not have parameters");
    }
    skipWs();
    if (curToken === ErrorToken)
        return buildError();
    if (isCloseBracketToken()) {
        advanceNextToken();
        return { type: "arg", id: identificator };
    }
    if (!isComma()) {
        // ,
        return buildError('Expecting "}" or ","');
    }
    advanceNextToken();
    skipWs();
    var format = { type: undefined };
    var res = {
        type: "format",
        id: identificator,
        format: format
    };
    var name = parseIdentificator();
    if (isParserError(name))
        return name;
    skipWs();
    if (curToken === ErrorToken)
        return buildError();
    if (name === "number" || name === "time" || name === "date") {
        format.type = name;
        format.style = null;
        format.options = null;
        if (isCloseBracketToken()) {
            advanceNextToken();
            return res;
        }
        if (isComma()) {
            // ,
            advanceNextToken();
            skipWs();
            var style = parseIdentificator();
            if (isParserError(style))
                return name;
            format.style = style;
            format.options = [];
            while (true) {
                skipWs();
                if (curToken === ErrorToken)
                    return buildError();
                if (isCloseBracketToken()) {
                    advanceNextToken();
                    return res;
                }
                if (isComma()) {
                    // ,
                    advanceNextToken();
                    skipWs();
                    var optionName = parseIdentificator();
                    if (isParserError(optionName))
                        return optionName;
                    if (curToken === 58) {
                        // :
                        advanceNextToken();
                        skipWs();
                        var val = void 0;
                        if (curToken >= 48 && curToken <= 57) {
                            val = parseNumber();
                        }
                        else if (isOpenBracketToken()) {
                            advanceNextToken();
                            val = parseMsg(false);
                        }
                        else {
                            val = parseIdentificator();
                        }
                        if (isParserError(val))
                            return val;
                        format.options.push({ key: optionName, value: val });
                    }
                    else {
                        format.options.push({ key: optionName });
                    }
                    continue;
                }
                break;
            }
        }
        return buildError('Expecting "," or "}"');
    }
    else if (name === "plural" || name === "selectordinal") {
        var options = [];
        format.type = "plural";
        format.ordinal = name !== "plural";
        format.offset = 0;
        format.options = options;
        if (!isComma()) {
            return buildError('Expecting ","');
        }
        advanceNextToken();
        skipWs();
        var offsetAllowed = true;
        while (!isCloseBracketToken()) {
            if (curToken < 0) {
                return buildError('Expecting characters except "{", "#"');
            }
            var chars = parseChars();
            skipWs();
            if (offsetAllowed && /^offset:/.test(chars)) {
                var m = /^offset:*([0-9]+)$/.exec(chars);
                if (m) {
                    format.offset = parseInt(m[1], 10);
                }
                else if (chars === "offset:") {
                    skipWs();
                    if (curToken < 48 || curToken > 57) {
                        return buildError("Expecting number");
                    }
                    format.offset = parseNumber();
                }
                else
                    return buildError('After "offset:" there must be number');
                offsetAllowed = false;
                continue;
            }
            offsetAllowed = false;
            var selector = void 0;
            if (/^=[0-9]+$/.test(chars)) {
                selector = parseInt(chars.substring(1), 10);
            }
            else {
                selector = chars;
                if (!numClasses[selector])
                    return buildError("Selector " + selector + " is not one of " + Object.keys(numClasses).join(", "));
            }
            if (!isOpenBracketToken()) {
                return buildError('Expecting "{"');
            }
            advanceNextToken();
            var value = parseMsg(false);
            if (isParserError(value))
                return value;
            options.push({ selector: selector, value: value });
            skipWs();
        }
        advanceNextToken();
        return res;
    }
    else if (name === "select") {
        var options = [];
        format.type = "select";
        format.options = options;
        if (!isComma()) {
            // ,
            return buildError('Expecting ","');
        }
        advanceNextToken();
        skipWs();
        while (!isCloseBracketToken()) {
            if (curToken < 0) {
                return buildError('Expecting characters except "{", "#"');
            }
            var chars = parseChars();
            skipWs();
            var selector = void 0;
            if (/^=[0-9]+$/.test(chars)) {
                selector = parseInt(chars.substring(1), 10);
            }
            else {
                selector = chars;
            }
            if (!isOpenBracketToken()) {
                return buildError('Expecting "{"');
            }
            advanceNextToken();
            var value = parseMsg(false);
            if (isParserError(value))
                return value;
            options.push({ selector: selector, value: value });
            skipWs();
        }
        advanceNextToken();
        return res;
    }
    return buildError('Expecting one of "number", "time", "date", "plural", "selectordinal", "select".');
}
function parseMsg(endWithEOF) {
    var res = null;
    var wrapByConcat = false;
    function normalize(res) {
        if (res === null)
            return "";
        if (!bobril_1.isArray(res) || !wrapByConcat)
            return res;
        return { type: "concat", values: res };
    }
    while (true) {
        if (curToken === ErrorToken) {
            return buildError();
        }
        if (curToken === EOFToken) {
            if (endWithEOF === true) {
                return normalize(res);
            }
            if (endWithEOF === false)
                return buildError('Unexpected end of message missing "}"');
            return buildError('Unexpected end of message missing "{/' + endWithEOF + '}"');
        }
        var val = void 0;
        if (curToken === OpenBracketToken) {
            advanceNextToken();
            var format = parseFormat();
            if (bobril_1.isObject(format) && !bobril_1.isArray(format)) {
                if (format.type == "open") {
                    var nested = parseMsg(format.id);
                    if (isParserError(nested))
                        return nested;
                    format = { type: "el", id: format.id, value: nested };
                    wrapByConcat = true;
                }
                else if (format.type == "close") {
                    if (format.id === endWithEOF) {
                        return normalize(res);
                    }
                    return buildError('Missing closing "{/' + endWithEOF + '}" got "{/' + format.id + '}" instead.');
                }
                else if (format.type == "el") {
                    wrapByConcat = true;
                }
            }
            val = format;
        }
        else if (curToken === HashToken) {
            advanceNextToken();
            val = { type: "hash" };
        }
        else if (curToken === CloseBracketToken) {
            if (endWithEOF !== false) {
                return buildError('Unexpected "}". Maybe you forgot to prefix it with "\\".');
            }
            advanceNextToken();
            return normalize(res);
        }
        else {
            val = "";
            while (curToken >= 0) {
                val += String.fromCharCode(curToken);
                advanceNextToken();
            }
        }
        if (isParserError(val))
            return val;
        if (res === null)
            res = val;
        else {
            if (Array.isArray(res)) {
                res.push(val);
            }
            else {
                res = [res, val];
            }
        }
    }
}
function parse(text) {
    pos = 0;
    sourceText = text;
    length = text.length;
    nextLine = 1;
    nextCol = 1;
    advanceNextToken();
    return parseMsg(true);
}
exports.parse = parse;

});
R('web/node_modules/bobril-g11n/src/msgFormatter',function(require, module, exports, global){
"use strict";
var moment = require("moment");
var RuntimeFunctionGenerator_1 = require("./RuntimeFunctionGenerator");
var localeDataStorage = require("./localeDataStorage");
var numberFormatter = require("./numberFormatter");
var translate_1 = require("./translate");
var bobril_1 = require("bobril");
window.moment = moment;
var numberFormatterCache = Object.create(null);
function getFormatter(locale, format) {
    var key = locale + "|" + format;
    var res = numberFormatterCache[key];
    if (res)
        return res;
    res = numberFormatter.buildFormatter(localeDataStorage.getRules(locale), format);
    numberFormatterCache[key] = res;
    return res;
}
function noFuture(m) {
    if (m.toDate() > new Date())
        return moment(new Date());
    return m;
}
function AnyFormatter(locale, type, style, options) {
    switch (type) {
        case "number": {
            if (style === "custom" && "format" in options) {
                if (options.format === null)
                    return function (val, opt) {
                        return getFormatter(locale, opt.format)(val);
                    };
                return getFormatter(locale, options.format);
            }
            if (style === "default") {
                return getFormatter(locale, "0,0.[0000]");
            }
            if (style === "percent") {
                return getFormatter(locale, "0%");
            }
            if (style === "bytes") {
                return getFormatter(locale, "0b");
            }
            break;
        }
        case "date":
        case "time": {
            if (style === "relative") {
                if (options["noago"] === true) {
                    return function (val, _opt) {
                        return moment(val)
                            .locale(locale)
                            .fromNow(true);
                    };
                }
                if (options["noago"] === null) {
                    return function (val, opt) {
                        return moment(val)
                            .locale(locale)
                            .fromNow(opt["noago"]);
                    };
                }
                return function (val, _opt) {
                    return moment(val)
                        .locale(locale)
                        .fromNow(false);
                };
            }
            if (style === "relativepast") {
                if (options["noago"] === true) {
                    return function (val, _opt) {
                        return noFuture(moment(val))
                            .locale(locale)
                            .fromNow(true);
                    };
                }
                if (options["noago"] === null) {
                    return function (val, opt) {
                        return noFuture(moment(val))
                            .locale(locale)
                            .fromNow(opt["noago"]);
                    };
                }
                return function (val, _opt) {
                    return noFuture(moment(val))
                        .locale(locale)
                        .fromNow(false);
                };
            }
            if (style === "calendar") {
                return function (val, _opt) {
                    return moment(val)
                        .locale(locale)
                        .calendar();
                };
            }
            if (style === "custom" && "format" in options) {
                return function (val, opt) {
                    return moment(val)
                        .locale(locale)
                        .format(opt.format);
                };
            }
            return function (val, _opt) {
                return moment(val)
                    .locale(locale)
                    .format(style);
            };
        }
    }
    throw new Error("bad type in AnyFormatter");
}
function compile(locale, msgAst) {
    if (bobril_1.isString(msgAst)) {
        return function () { return msgAst; };
    }
    if (bobril_1.isArray(msgAst)) {
        if (msgAst.length === 0)
            return function () { return ""; };
        var comp = new RuntimeFunctionGenerator_1.RuntimeFunctionGenerator();
        var argParams = comp.addArg(0);
        var argHash = comp.addArg(1);
        comp.addBody("return ");
        for (var i = 0; i < msgAst.length; i++) {
            if (i > 0)
                comp.addBody("+");
            var item = msgAst[i];
            if (typeof item === "string") {
                comp.addBody(comp.addConstant(item));
            }
            else {
                comp.addBody(comp.addConstant(compile(locale, item)) + ("(" + argParams + "," + argHash + ")"));
            }
        }
        comp.addBody(";");
        return comp.build();
    }
    switch (msgAst.type) {
        case "arg":
            return (function (name) { return function (params) { return translate_1.f(params[name]); }; })(msgAst.id);
        case "hash":
            return function (_params, hashArg) {
                if (hashArg === undefined)
                    return "#";
                return hashArg;
            };
        case "concat": {
            var vals = msgAst.values;
            if (vals.length === 0)
                return function () { return ""; };
            var comp_1 = new RuntimeFunctionGenerator_1.RuntimeFunctionGenerator();
            var argParams_1 = comp_1.addArg(0);
            var argHash = comp_1.addArg(1);
            comp_1.addBody("return [");
            for (var i = 0; i < vals.length; i++) {
                if (i > 0)
                    comp_1.addBody(",");
                var item = vals[i];
                if (bobril_1.isString(item)) {
                    comp_1.addBody(comp_1.addConstant(item));
                }
                else {
                    comp_1.addBody(comp_1.addConstant(compile(locale, item)) + ("(" + argParams_1 + "," + argHash + ")"));
                }
            }
            comp_1.addBody("];");
            return comp_1.build();
        }
        case "el":
            if (msgAst.value != undefined) {
                return (function (id, valueFactory) { return function (params, hashArg) { return params[id](valueFactory(params, hashArg)); }; })(msgAst.id, compile(locale, msgAst.value));
            }
            return (function (id) { return function (params) { return params[id](); }; })(msgAst.id);
        case "format":
            var comp = new RuntimeFunctionGenerator_1.RuntimeFunctionGenerator();
            var argParams = comp.addArg(0);
            var localArg = comp.addLocal();
            comp.addBody("var " + localArg + "=" + argParams + "[" + comp.addConstant(msgAst.id) + "];");
            var type = msgAst.format.type;
            switch (type) {
                case "plural": {
                    var localArgOffset = comp.addLocal();
                    comp.addBody("var " + localArgOffset + "=" + localArg + "-" + msgAst.format.offset + ";");
                    var options = msgAst.format.options;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        if (typeof opt.selector !== "number")
                            continue;
                        var fn = comp.addConstant(compile(locale, opt.value));
                        comp.addBody("if (" + localArgOffset + "===" + opt.selector + ") return " + fn + "(" + argParams + ",''+" + localArgOffset + ");");
                    }
                    var localCase = comp.addLocal();
                    var pluralFn = comp.addConstant(localeDataStorage.getRules(locale).pluralFn);
                    comp.addBody("var " + localCase + "=" + pluralFn + "(" + localArgOffset + "," + (msgAst.format.ordinal ? "true" : "false") + ");");
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        if (typeof opt.selector !== "string")
                            continue;
                        if (opt.selector === "other")
                            continue;
                        var fn = comp.addConstant(compile(locale, opt.value));
                        comp.addBody("if (" + localCase + "===" + comp.addConstant(opt.selector) + ") return " + fn + "(" + argParams + ",''+" + localArgOffset + ");");
                    }
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        if (opt.selector !== "other")
                            continue;
                        var fn = comp.addConstant(compile(locale, opt.value));
                        comp.addBody("return " + fn + "(" + argParams + ",''+" + localArgOffset + ");");
                    }
                    break;
                }
                case "select": {
                    var options = msgAst.format.options;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        if (typeof opt.selector !== "string")
                            continue;
                        if (opt.selector === "other")
                            continue;
                        var fn = comp.addConstant(compile(locale, opt.value));
                        comp.addBody("if (" + localArg + "===" + comp.addConstant(opt.selector) + ") return " + fn + "(" + argParams + "," + localArg + ");");
                    }
                    for (var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        if (opt.selector !== "other")
                            continue;
                        var fn = comp.addConstant(compile(locale, opt.value));
                        comp.addBody("return " + fn + "(" + argParams + "," + localArg + ");");
                    }
                    break;
                }
                case "number":
                case "date":
                case "time": {
                    var style = msgAst.format.style || "default";
                    var options = msgAst.format.options;
                    if (options) {
                        var opt = {};
                        var complex = false;
                        for (var i = 0; i < options.length; i++) {
                            if (typeof options[i].value === "object") {
                                complex = true;
                                opt[options[i].key] = null;
                            }
                            else {
                                var val = options[i].value;
                                if (val === undefined)
                                    val = true;
                                opt[options[i].key] = val;
                            }
                        }
                        var formatFn = comp.addConstant(AnyFormatter(locale, type, style, opt));
                        if (complex) {
                            var optConst = comp.addConstant(opt);
                            var optLocal = comp.addLocal();
                            var hashArg = comp.addArg(1);
                            comp.addBody("var " + optLocal + "=" + optConst + ";");
                            for (var i = 0; i < options.length; i++) {
                                if (typeof options[i].value === "object") {
                                    var fnConst = comp.addConstant(compile(locale, options[i].value));
                                    comp.addBody(optLocal + "[" + comp.addConstant(options[i].key) + "]=" + fnConst + "(" + argParams + "," + hashArg + ");");
                                }
                            }
                            comp.addBody("return " + formatFn + "(" + localArg + "," + optLocal + ");");
                        }
                        else {
                            comp.addBody("return " + formatFn + "(" + localArg + "," + comp.addConstant(opt) + ");");
                        }
                    }
                    else {
                        var formatFn = comp.addConstant(AnyFormatter(locale, type, style, {}));
                        comp.addBody("return " + formatFn + "(" + localArg + ");");
                    }
                }
            }
            return comp.build();
    }
    throw new Error("invalid AST in compile");
}
exports.compile = compile;

});
R('web/node_modules/bobril-g11n/src/numberFormatter',function(require, module, exports, global){
"use strict";
var RuntimeFunctionGenerator_1 = require("./RuntimeFunctionGenerator");
var escapeRegExpMatcher = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
function escapeRegExp(str) {
    return str.replace(escapeRegExpMatcher, "\\$&");
}
exports.escapeRegExp = escapeRegExp;
function buildFormatter(rules, format) {
    if (format == "0b" || format == "0 b") {
        var suffixes_1 = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var space_1 = format == "0 b" ? "\xa0" : "";
        return function (val) {
            var suffix = "";
            for (var power = 0; power <= suffixes_1.length; power++) {
                var min = Math.pow(1000, power);
                var max = Math.pow(1000, power + 1);
                if (val === 0 || val >= min && val < max) {
                    suffix += suffixes_1[power];
                    if (min > 0) {
                        val = val / min;
                    }
                    break;
                }
            }
            return val.toFixed(0) + space_1 + suffix;
        };
    }
    if (format.indexOf("%") >= 0) {
        var nested_1 = buildFormatter(rules, format.replace("%", ""));
        return function (val) {
            return nested_1(val * 100) + "%";
        };
    }
    var decOpt = false;
    if (format.indexOf("[.]") >= 0) {
        format = format.replace("[.]", ".");
        decOpt = true;
    }
    var negPar = false;
    if (/\(.+\)/.test(format)) {
        negPar = true;
    }
    var hasThousands = false;
    if (format.indexOf(",") >= 0) {
        hasThousands = true;
    }
    var maxDec = 0;
    var minDec = 0;
    var pos = format.indexOf(".");
    if (pos >= 0) {
        var inOpt = false;
        while (++pos < format.length) {
            var ch = format.charCodeAt(pos);
            if (ch == 48) { // '0'
                maxDec++;
                if (!inOpt)
                    minDec++;
            }
            else if (ch == 91) { // '['
                inOpt = true;
            }
            else
                break;
        }
    }
    if (decOpt && minDec < 2) {
        decOpt = false;
        minDec = 0;
    }
    var g = new RuntimeFunctionGenerator_1.RuntimeFunctionGenerator();
    var arg = g.addArg(0);
    var loc = g.addLocal();
    var locBefore = g.addLocal();
    var locDec = g.addLocal();
    var locIsNeg = g.addLocal();
    g.addBody("var " + locIsNeg + "=false;if (" + arg + "<0) {" + locIsNeg + "=true; " + arg + "=-" + arg + ";};");
    g.addBody("var " + locBefore + "," + locDec + "=''," + loc + "=" + arg + ".toFixed(" + maxDec + ");");
    if (maxDec == 0) {
        g.addBody(locBefore + "=" + loc + ";");
    }
    else {
        g.addBody(locBefore + "=" + loc + ".substr(0," + loc + ".length-" + (maxDec + 1) + ");");
        g.addBody(locDec + "=" + loc + ".substr(" + loc + ".length-" + maxDec + ");");
        if (minDec < maxDec) {
            g.addBody(locDec + "=" + locDec + ".replace(/0{1," + (maxDec - minDec) + "}$/,'');");
        }
        if (decOpt) {
            g.addBody("if (" + locDec + "=='" + Array(minDec + 1).join('0') + "') " + locDec + "='';");
        }
        g.addBody("if (" + locDec + "!='') " + locDec + "='" + rules.dd + "'+" + locDec + ";");
    }
    if (hasThousands) {
        g.addBody(locBefore + "=" + locBefore + ".replace(/(\\d)(?=(\\d{3})+(?!\\d))/g,'$1" + rules.td + "');");
    }
    g.addBody(loc + "=" + locBefore + "+" + locDec + ";");
    if (negPar) {
        g.addBody("if (" + locIsNeg + ") " + loc + "='('+" + loc + "+')';");
    }
    else {
        g.addBody("if (" + locIsNeg + ") " + loc + "='-'+" + loc + ";");
    }
    g.addBody("return " + loc + ";");
    return g.build();
}
exports.buildFormatter = buildFormatter;
function buildUnformat(rules) {
    var tdMatcher = new RegExp(escapeRegExp(rules.td), "g");
    var dd = rules.dd;
    return function (val) {
        var coef = 1;
        var perctI = val.indexOf("%");
        if (perctI >= 0) {
            val = val.replace("%", "");
            coef = 0.01;
        }
        var openParI = val.indexOf("(");
        if (openParI >= 0) {
            var closeParI = val.indexOf(")");
            if (closeParI > openParI) {
                coef = -coef;
                val = val.substring(openParI + 1, closeParI);
            }
        }
        return parseFloat(val.replace(tdMatcher, "").replace(dd, ".")) * coef;
    };
}
exports.buildUnformat = buildUnformat;

});
R('web/node_modules/bobril-g11n/src/RuntimeFunctionGenerator',function(require, module, exports, global){
"use strict";
var RuntimeFunctionGenerator = /** @class */ (function () {
    function RuntimeFunctionGenerator() {
        this.constants = [];
        this.body = '';
        this.argCount = 0;
        this.localCount = 0;
    }
    RuntimeFunctionGenerator.prototype.addConstant = function (value) {
        var cc = this.constants;
        for (var i = 0; i < cc.length; i++) {
            if (cc[i] === value)
                return 'c_' + i;
        }
        cc.push(value);
        return 'c_' + (cc.length - 1);
    };
    RuntimeFunctionGenerator.prototype.addArg = function (index) {
        if (index >= this.argCount)
            this.argCount = index + 1;
        return 'a_' + index;
    };
    RuntimeFunctionGenerator.prototype.addBody = function (text) {
        this.body += text;
    };
    RuntimeFunctionGenerator.prototype.addLocal = function () {
        return 'l_' + (this.localCount++);
    };
    RuntimeFunctionGenerator.prototype.build = function () {
        var innerParams = [];
        for (var i = 0; i < this.argCount; i++) {
            innerParams.push('a_' + i);
        }
        if (this.constants.length > 0) {
            var params = [];
            for (var i = 0; i < this.constants.length; i++) {
                params.push('c_' + i);
            }
            params.push('return function(' + innerParams.join(',') + ') {\n' + this.body + '\n}');
            return Function.apply(null, params).apply(null, this.constants);
        }
        innerParams.push(this.body);
        return Function.apply(null, innerParams);
    };
    return RuntimeFunctionGenerator;
}());
exports.RuntimeFunctionGenerator = RuntimeFunctionGenerator;

});
R('web/node_modules/bobril-g11n/src/translate',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var moment = require("moment");
var msgFormatParser = require("./msgFormatParser");
var msgFormatter = require("./msgFormatter");
var jsonp_1 = require("./jsonp");
var localeDataStorage = require("./localeDataStorage");
var numberFormatter = require("./numberFormatter");
var spyTranslationFunc;
function newMap() {
    return Object.create(null);
}
var cfg = {
    defaultLocale: "en-US",
    pathToTranslation: function () { return undefined; },
    runScriptAsync: jsonp_1.jsonp
};
var loadedLocales = newMap();
exports.registeredTranslations = newMap();
var initWasStarted = false;
var currentLocale = "";
var currentRules = localeDataStorage.getRules("en");
var currentUnformatter;
var currentTranslations = [];
var currentCachedFormat = [];
var stringCachedFormats = newMap();
var keysByTranslationId = undefined;
var key2TranslationId = undefined;
if (window.g11nPath) {
    cfg.pathToTranslation = window.g11nPath;
}
if (window.g11nLoc) {
    cfg.defaultLocale = window.g11nLoc;
}
function currentTranslationMessage(message) {
    var text = currentTranslations[message];
    if (text === undefined) {
        throw new Error("message " + message + " is not defined");
    }
    return text;
}
function spyTranslatedString(translated) {
    if (spyTranslationFunc === undefined)
        return translated;
    return spyTranslationFunc(translated);
}
function t(message, params, _translationHelp) {
    if (currentLocale.length === 0) {
        throw new Error("before using t you need to wait for initialization of g11n");
    }
    var format;
    if (Array.isArray(message)) {
        if (typeof message[0] === "string") {
            return formatSerializedMessage(message);
        }
        return formatDelayedMessage(message);
    }
    if (typeof message === "number") {
        if (params == null) {
            return spyTranslatedString(currentTranslationMessage(message));
        }
        format = currentCachedFormat[message];
        if (format === undefined) {
            var ast = msgFormatParser.parse(currentTranslationMessage(message));
            if (msgFormatParser.isParserError(ast)) {
                throw new Error("message " + message + " in " + currentLocale + " has error: " + ast.msg);
            }
            format = msgFormatter.compile(currentLocale, ast);
            currentCachedFormat[message] = format;
        }
    }
    else {
        if (params == null)
            return spyTranslatedString(message);
        format = stringCachedFormats[message];
        if (format === undefined) {
            var ast = msgFormatParser.parse(message);
            if (msgFormatParser.isParserError(ast)) {
                throw new Error('message "' + message + '" has error: ' + ast.msg + " on position: " + ast.pos);
            }
            format = msgFormatter.compile(currentLocale, ast);
            stringCachedFormats[message] = format;
        }
    }
    return spyTranslatedString(format(params));
}
exports.t = t;
function dt(message, params, _translationHelp) {
    if (params == undefined)
        return [message];
    return [message, params];
}
exports.dt = dt;
var lazyLoadKeys = undefined;
function loadSerializationKeys() {
    if (lazyLoadKeys === undefined) {
        lazyLoadKeys = cfg.runScriptAsync(cfg.pathToTranslation("l10nkeys")).then(invokeInvalidate);
    }
    return lazyLoadKeys;
}
exports.loadSerializationKeys = loadSerializationKeys;
function serializationKeysLoaded() {
    return keysByTranslationId != undefined;
}
exports.serializationKeysLoaded = serializationKeysLoaded;
var HOP = {}.hasOwnProperty;
function serializeParams(params) {
    if (params == undefined)
        return params;
    var needSerialization = false;
    for (var key in params) {
        if (HOP.call(params, key)) {
            var element = params[key];
            if (Array.isArray(element)) {
                needSerialization = true;
                break;
            }
        }
    }
    if (!needSerialization)
        return params;
    var res = {};
    for (var key in params) {
        if (HOP.call(params, key)) {
            var element = params[key];
            if (Array.isArray(element)) {
                element = serializeMessage(element);
            }
            res[key] = element;
        }
    }
    return res;
}
function serializeMessage(message) {
    if (keysByTranslationId === undefined)
        throw new Error("Make sure to await loadSerializationKeys");
    var m = message[0];
    if (typeof m == "string") {
        if (message.length === 1) {
            if (key2TranslationId.has(m) || m.endsWith("\t0"))
                return message;
            return [m + "\t0"];
        }
        if (key2TranslationId.has(m) || m.endsWith("\t1"))
            return message;
        return [m + "\t1", serializeParams(message[1])];
    }
    var key = keysByTranslationId[m];
    if (message.length == 1)
        return [key];
    return [key, serializeParams(message[1])];
}
exports.serializeMessage = serializeMessage;
function formatDelayedMessage(message) {
    return t(message[0], message[1]);
}
exports.formatDelayedMessage = formatDelayedMessage;
function deserializeMessage(message) {
    var id = undefined;
    if (!serializationKeysLoaded()) {
        loadSerializationKeys();
    }
    else {
        id = key2TranslationId.get(message[0]);
    }
    if (id === undefined) {
        id = message[0];
        id = id.substr(0, id.lastIndexOf("\t"));
    }
    if (message.length === 1) {
        return [id];
    }
    return [id, message[1]];
}
exports.deserializeMessage = deserializeMessage;
function formatSerializedMessage(message) {
    return formatDelayedMessage(deserializeMessage(message));
}
exports.formatSerializedMessage = formatSerializedMessage;
function f(message, params) {
    if (typeof message !== "object" && params === undefined)
        return message;
    return t(message, params);
}
exports.f = f;
var initPromise = Promise.resolve(null);
initPromise = initPromise.then(function () { return setLocale(cfg.defaultLocale); });
if (b != null && b.setBeforeInit != null) {
    b.setBeforeInit(function (cb) {
        initPromise.then(cb, cb);
    });
}
function initGlobalization(config) {
    if (initWasStarted) {
        throw new Error("initLocalization must be called only once");
    }
    Object.assign(cfg, config);
    initWasStarted = true;
    if (currentLocale.length !== 0) {
        if (!loadedLocales[currentLocale]) {
            currentLocale = "";
        }
        return setLocale(cfg.defaultLocale);
    }
    return initPromise;
}
exports.initGlobalization = initGlobalization;
function setLocale(locale) {
    var prom = Promise.resolve();
    if (currentLocale === locale)
        return prom;
    var lcLocale = locale.toLowerCase();
    if (!loadedLocales[lcLocale]) {
        var pathToTranslation = cfg.pathToTranslation;
        if (pathToTranslation) {
            var p_1 = pathToTranslation(locale);
            if (p_1) {
                prom = prom
                    .then(function () { return cfg.runScriptAsync(p_1); })
                    .catch(function (e) {
                    console.warn(e);
                    if (locale != cfg.defaultLocale)
                        return setLocale(cfg.defaultLocale).then(function () { return Promise.reject(e); });
                    return undefined;
                });
            }
        }
    }
    prom = prom.then(function () {
        currentLocale = locale;
        currentRules = localeDataStorage.getRules(lcLocale);
        currentTranslations = exports.registeredTranslations[lcLocale] || [];
        currentUnformatter = undefined;
        currentCachedFormat = [];
        currentCachedFormat.length = currentTranslations.length;
        stringCachedFormats = newMap();
        moment.locale(currentLocale);
        invokeInvalidate();
    });
    return prom;
}
exports.setLocale = setLocale;
function invokeInvalidate() {
    if (b != null && b.ignoreShouldChange != null)
        b.ignoreShouldChange();
}
function getLocale() {
    return currentLocale;
}
exports.getLocale = getLocale;
exports.getMoment = moment;
function unformatNumber(str) {
    if (currentUnformatter === undefined) {
        currentUnformatter = numberFormatter.buildUnformat(currentRules);
    }
    return currentUnformatter(str);
}
exports.unformatNumber = unformatNumber;
function registerTranslations(locale, localeDefs, msgs) {
    if (locale == "") {
        keysByTranslationId = msgs;
        key2TranslationId = new Map();
        for (var i = 0; i < msgs.length; i++) {
            key2TranslationId.set(msgs[i], i);
        }
        return;
    }
    locale = locale.toLowerCase();
    if (Array.isArray(localeDefs)) {
        localeDataStorage.setRules(locale, localeDefs);
    }
    if (Array.isArray(msgs))
        exports.registeredTranslations[locale] = msgs;
    loadedLocales[locale] = true;
}
exports.registerTranslations = registerTranslations;
function spyTranslation(spyFn) {
    if (spyFn === undefined)
        return spyTranslationFunc;
    if (spyFn === null) {
        spyTranslationFunc = undefined;
    }
    else {
        spyTranslationFunc = spyFn;
    }
    return spyTranslationFunc;
}
exports.spyTranslation = spyTranslation;
if (window) {
    window["bobrilRegisterTranslations"] = registerTranslations;
    if (window["b"] != null)
        window["b"].spyTr = spyTranslation;
}
function T(data) {
    return data;
}
exports.T = T;

});
R('web/node_modules/bobril/index',function(require, module, exports, global){
"use strict";
// Bobril.Core
var hasPostInitDom = 1;
var hasPostUpdateDom = 2;
var hasPostUpdateDomEverytime = 4;
var hasEvents = 8;
var hasCaptureEvents = 16;
var MediaRuleBuilder = /** @class */ (function () {
    function MediaRuleBuilder() {
        this.tokens = [];
    }
    MediaRuleBuilder.prototype.pushOptionalTokens = function (behaviour, mediaType) {
        !!behaviour && this.tokens.push({ type: behaviour });
        !!mediaType && this.tokens.push({ type: mediaType });
    };
    MediaRuleBuilder.prototype.rule = function (behaviour, mediaType) {
        if (mediaType === void 0) { mediaType = "all"; }
        this.pushOptionalTokens(behaviour, mediaType);
        return this;
    };
    MediaRuleBuilder.prototype.and = function (mediaRule) {
        this.tokens.push({ type: "and" });
        this.tokens.push(mediaRule);
        return this;
    };
    MediaRuleBuilder.prototype.or = function () {
        this.tokens.push({ type: "or" });
        return this;
    };
    MediaRuleBuilder.prototype.build = function () {
        return this.tokens.reduce(toRule, "");
    };
    return MediaRuleBuilder;
}());
function toRule(buffer, token) {
    var str = "";
    switch (token.type) {
        case "aspect-ratio":
            str = "(" + token.type + ": " + token.width + "/" + token.height + ")";
            break;
        case "all":
        case "and":
        case "not":
        case "only":
        case "print":
        case "screen":
        case "speech":
            str = "" + token.type;
            break;
        case "or":
            str = ",";
            break;
        case "color":
            str = "(" + token.type + ")";
            break;
        case "max-height":
        case "max-width":
        case "min-height":
        case "min-width":
            str = "(" + token.type + ": " + token.value + token.unit + ")";
            break;
        case "min-color":
        case "orientation":
            str = "(" + token.type + ": " + token.value + ")";
            break;
        default:
            str = emptyQuery(token);
    }
    return buffer + str + " ";
}
function emptyQuery(_token) {
    return "";
}
function createMediaQuery() {
    return new MediaRuleBuilder();
}
exports.createMediaQuery = createMediaQuery;
var BobrilCtx = /** @class */ (function () {
    function BobrilCtx(data, me) {
        this.data = data;
        this.me = me;
        this.cfg = undefined;
        this.refs = undefined;
        this.disposables = undefined;
        this.$bobxCtx = undefined;
    }
    return BobrilCtx;
}());
exports.BobrilCtx = BobrilCtx;
// PureFuncs: assert, isArray, isObject, flatten
function assert(shouldBeTrue, messageIfFalse) {
    if (DEBUG && !shouldBeTrue)
        throw Error(messageIfFalse || "assertion failed");
}
exports.isArray = Array.isArray;
var isArrayVdom = exports.isArray;
function setIsArrayVdom(isArrayFnc) {
    isArrayVdom = isArrayFnc;
}
exports.setIsArrayVdom = setIsArrayVdom;
var emptyComponent = {};
function createTextNode(content) {
    return document.createTextNode(content);
}
function createEl(name) {
    return document.createElement(name);
}
function null2undefined(value) {
    return value === null ? undefined : value;
}
function isNumber(val) {
    return typeof val == "number";
}
exports.isNumber = isNumber;
function isString(val) {
    return typeof val == "string";
}
exports.isString = isString;
function isBoolean(val) {
    return typeof val == "boolean";
}
exports.isBoolean = isBoolean;
function isFunction(val) {
    return typeof val == "function";
}
exports.isFunction = isFunction;
function isObject(val) {
    return typeof val === "object";
}
exports.isObject = isObject;
if (Object.assign == undefined) {
    Object.assign = function assign(target) {
        var _sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _sources[_i - 1] = arguments[_i];
        }
        if (target == undefined)
            throw new TypeError("Target in assign cannot be undefined or null");
        var totalArgs = arguments.length;
        for (var i_1 = 1; i_1 < totalArgs; i_1++) {
            var source = arguments[i_1];
            if (source == undefined)
                continue;
            var keys = Object.keys(source);
            var totalKeys = keys.length;
            for (var j_1 = 0; j_1 < totalKeys; j_1++) {
                var key = keys[j_1];
                target[key] = source[key];
            }
        }
        return target;
    };
}
if (!Object.is) {
    Object.is = function (x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        }
        else {
            return x !== x && y !== y;
        }
    };
}
var is = Object.is;
var hOP = Object.prototype.hasOwnProperty;
exports.assign = Object.assign;
function polyfill(prototype, method, value) {
    if (!prototype[method]) {
        Object.defineProperty(prototype, method, {
            value: value,
            configurable: true,
            writable: true
        });
    }
}
polyfill(Array.prototype, "find", function (pred) {
    var o = Object(this);
    var len = o.length >>> 0;
    var thisArg = arguments[1];
    for (var k = 0; k < len; k++) {
        var kValue = o[k];
        if (pred.call(thisArg, kValue, k, o)) {
            return kValue;
        }
    }
    return;
});
polyfill(Array.prototype, "findIndex", function (pred) {
    var o = Object(this);
    var len = o.length >>> 0;
    var thisArg = arguments[1];
    for (var k = 0; k < len; k++) {
        var kValue = o[k];
        if (pred.call(thisArg, kValue, k, o)) {
            return k;
        }
    }
    return -1;
});
polyfill(Array.prototype, "some", function (pred) {
    var o = Object(this);
    var len = o.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < len; i++) {
        if (i in o && pred.call(thisArg, o[i], i, o)) {
            return true;
        }
    }
    return false;
});
polyfill(String.prototype, "includes", function (search, start) {
    if (!isNumber(start))
        start = 0;
    if (start + search.length > this.length) {
        return false;
    }
    else {
        return this.indexOf(search, start) !== -1;
    }
});
polyfill(String.prototype, "startsWith", function (search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
});
polyfill(String.prototype, "endsWith", function (search, pos) {
    var s = this.toString();
    if (!isNumber(pos) || !isFinite(pos) || Math.floor(pos) !== pos || pos > s.length) {
        pos = s.length;
    }
    pos -= search.length;
    var lastIndex = s.indexOf(search, pos);
    return lastIndex !== -1 && lastIndex === pos;
});
function flatten(a) {
    if (!isArrayVdom(a)) {
        if (a == undefined || a === false || a === true)
            return [];
        return [a];
    }
    a = a.slice(0);
    var aLen = a.length;
    for (var i_2 = 0; i_2 < aLen;) {
        var item = a[i_2];
        if (isArrayVdom(item)) {
            a.splice.apply(a, [i_2, 1].concat(item));
            aLen = a.length;
            continue;
        }
        if (item == undefined || item === false || item === true) {
            a.splice(i_2, 1);
            aLen--;
            continue;
        }
        i_2++;
    }
    return a;
}
exports.flatten = flatten;
function swallowPromise(promise) {
    promise.catch(function (reason) {
        console.error("Uncaught exception from swallowPromise", reason);
    });
}
exports.swallowPromise = swallowPromise;
var inSvg = false;
var inNotFocusable = false;
var updateCall = [];
var updateInstance = [];
var setValueCallback = function (el, _node, newValue, oldValue) {
    if (newValue !== oldValue)
        el[tValue] = newValue;
};
function setSetValue(callback) {
    var prev = setValueCallback;
    setValueCallback = callback;
    return prev;
}
exports.setSetValue = setSetValue;
function newHashObj() {
    return Object.create(null);
}
var vendors = ["Webkit", "Moz", "ms", "O"];
var testingDivStyle = document.createElement("div").style;
function testPropExistence(name) {
    return isString(testingDivStyle[name]);
}
var mapping = new Map();
var isUnitlessNumber = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexNegative: true,
    flexPositive: true,
    flexShrink: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    strokeDashoffset: true,
    widows: true,
    zIndex: true,
    zoom: true
};
function renamer(newName) {
    return function (style, value, oldName) {
        style[newName] = value;
        style[oldName] = undefined;
    };
}
function renamerPx(newName) {
    return function (style, value, oldName) {
        if (isNumber(value)) {
            style[newName] = value + "px";
        }
        else {
            style[newName] = value;
        }
        style[oldName] = undefined;
    };
}
function pxAdder(style, value, name) {
    if (isNumber(value))
        style[name] = value + "px";
}
function ieVersion() {
    return document.documentMode;
}
exports.ieVersion = ieVersion;
function shimStyle(newValue) {
    var k = Object.keys(newValue);
    for (var i = 0, l = k.length; i < l; i++) {
        var ki = k[i];
        var mi = mapping.get(ki);
        var vi = newValue[ki];
        if (vi === undefined)
            continue; // don't want to map undefined
        if (mi === undefined) {
            if (DEBUG) {
                if (/-/.test(ki) && window.console && console.warn)
                    console.warn("Style property " + ki + " contains dash (must use JS props instead of css names)");
            }
            if (testPropExistence(ki)) {
                mi = isUnitlessNumber[ki] === true ? noop : pxAdder;
            }
            else {
                var titleCaseKi = ki.replace(/^\w/, function (match) { return match.toUpperCase(); });
                for (var j = 0; j < vendors.length; j++) {
                    if (testPropExistence(vendors[j] + titleCaseKi)) {
                        mi = (isUnitlessNumber[ki] === true ? renamer : renamerPx)(vendors[j] + titleCaseKi);
                        break;
                    }
                }
                if (mi === undefined) {
                    mi = isUnitlessNumber[ki] === true ? noop : pxAdder;
                    if (DEBUG &&
                        window.console &&
                        console.warn &&
                        ["overflowScrolling", "touchCallout"].indexOf(ki) < 0 // whitelist rare but useful
                    )
                        console.warn("Style property " + ki + " is not supported in this browser");
                }
            }
            mapping.set(ki, mi);
        }
        mi(newValue, vi, ki);
    }
}
function removeProperty(s, name) {
    s[name] = "";
}
function setStyleProperty(s, name, value) {
    if (isString(value)) {
        var len = value.length;
        if (len > 11 && value.substr(len - 11, 11) === " !important") {
            s.setProperty(hyphenateStyle(name), value.substr(0, len - 11), "important");
            return;
        }
    }
    s[name] = value;
}
function updateStyle(el, newStyle, oldStyle) {
    var s = el.style;
    if (isObject(newStyle)) {
        shimStyle(newStyle);
        var rule;
        if (isObject(oldStyle)) {
            for (rule in oldStyle) {
                if (oldStyle[rule] === undefined)
                    continue;
                if (newStyle[rule] === undefined)
                    removeProperty(s, rule);
            }
            for (rule in newStyle) {
                var v = newStyle[rule];
                if (v !== undefined) {
                    if (oldStyle[rule] !== v)
                        setStyleProperty(s, rule, v);
                }
                else if (oldStyle[rule] !== undefined) {
                    removeProperty(s, rule);
                }
            }
        }
        else {
            if (oldStyle)
                s.cssText = "";
            for (rule in newStyle) {
                var v = newStyle[rule];
                if (v !== undefined)
                    setStyleProperty(s, rule, v);
            }
        }
    }
    else if (newStyle) {
        s.cssText = newStyle;
    }
    else {
        if (isObject(oldStyle)) {
            for (rule in oldStyle) {
                removeProperty(s, rule);
            }
        }
        else if (oldStyle) {
            s.cssText = "";
        }
    }
}
function setClassName(el, className) {
    if (inSvg)
        el.setAttribute("class", className);
    else
        el.className = className;
}
var focusableTag = /^input$|^select$|^textarea$|^button$/;
var tabindexStr = "tabindex";
function isNaturallyFocusable(tag, attrs) {
    if (tag == undefined)
        return false;
    if (focusableTag.test(tag))
        return true;
    if (tag === "a" && attrs != null && attrs.href != null)
        return true;
    return false;
}
function updateElement(n, el, newAttrs, oldAttrs, notFocusable) {
    var attrName, newAttr, oldAttr, valueOldAttr, valueNewAttr;
    var wasTabindex = false;
    if (newAttrs != null)
        for (attrName in newAttrs) {
            newAttr = newAttrs[attrName];
            oldAttr = oldAttrs[attrName];
            if (notFocusable && attrName === tabindexStr) {
                newAttr = -1;
                wasTabindex = true;
            }
            else if (attrName === tValue && !inSvg) {
                if (isFunction(newAttr)) {
                    oldAttrs[bValue] = newAttr;
                    newAttr = newAttr();
                }
                valueOldAttr = oldAttr;
                valueNewAttr = newAttr;
                oldAttrs[attrName] = newAttr;
                continue;
            }
            if (oldAttr !== newAttr) {
                oldAttrs[attrName] = newAttr;
                if (inSvg) {
                    if (attrName === "href")
                        el.setAttributeNS("http://www.w3.org/1999/xlink", "href", newAttr);
                    else
                        el.setAttribute(attrName, newAttr);
                }
                else if (attrName in el && !(attrName === "list" || attrName === "form")) {
                    el[attrName] = newAttr;
                }
                else
                    el.setAttribute(attrName, newAttr);
            }
        }
    if (notFocusable && !wasTabindex && isNaturallyFocusable(n.tag, newAttrs)) {
        el.setAttribute(tabindexStr, "-1");
        oldAttrs[tabindexStr] = -1;
    }
    if (newAttrs == undefined) {
        for (attrName in oldAttrs) {
            if (oldAttrs[attrName] !== undefined) {
                if (notFocusable && attrName === tabindexStr)
                    continue;
                if (attrName === bValue)
                    continue;
                oldAttrs[attrName] = undefined;
                el.removeAttribute(attrName);
            }
        }
    }
    else {
        for (attrName in oldAttrs) {
            if (oldAttrs[attrName] !== undefined && !(attrName in newAttrs)) {
                if (notFocusable && attrName === tabindexStr)
                    continue;
                if (attrName === bValue)
                    continue;
                oldAttrs[attrName] = undefined;
                el.removeAttribute(attrName);
            }
        }
    }
    if (valueNewAttr !== undefined) {
        setValueCallback(el, n, valueNewAttr, valueOldAttr);
    }
    return oldAttrs;
}
function pushInitCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postInitDom;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
        if ((c.ctx.$hookFlags || 0) & hasPostInitDom) {
            updateCall.push(hookPostInitDom);
            updateInstance.push(c);
        }
    }
}
function pushUpdateCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postUpdateDom;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
        var flags = c.ctx.$hookFlags || 0;
        if (flags & hasPostUpdateDom) {
            updateCall.push(hookPostUpdateDom);
            updateInstance.push(c);
        }
        fn = cc.postUpdateDomEverytime;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
        if (flags & hasPostUpdateDomEverytime) {
            updateCall.push(hookPostUpdateDomEverytime);
            updateInstance.push(c);
        }
    }
}
function pushUpdateEverytimeCallback(c) {
    var cc = c.component;
    if (cc) {
        var fn = cc.postUpdateDomEverytime;
        if (fn) {
            updateCall.push(fn);
            updateInstance.push(c);
        }
        if ((c.ctx.$hookFlags || 0) & hasPostUpdateDomEverytime) {
            updateCall.push(hookPostUpdateDomEverytime);
            updateInstance.push(c);
        }
    }
}
function findCfg(parent) {
    var cfg;
    while (parent) {
        cfg = parent.cfg;
        if (cfg !== undefined)
            break;
        if (parent.ctx !== undefined && parent.component !== emptyComponent) {
            cfg = parent.ctx.cfg;
            break;
        }
        parent = parent.parent;
    }
    return cfg;
}
function setRef(ref, value) {
    if (ref === undefined)
        return;
    if ("current" in ref) {
        ref.current = value;
    }
    else if (isFunction(ref)) {
        ref(value);
    }
    else if (exports.isArray(ref)) {
        var ctx = ref[0];
        var refs = ctx.refs;
        if (refs === undefined) {
            refs = newHashObj();
            ctx.refs = refs;
        }
        refs[ref[1]] = value;
    }
}
var focusRootStack = [];
var focusRootTop = null;
function registerFocusRoot(ctx) {
    focusRootStack.push(ctx.me);
    addDisposable(ctx, unregisterFocusRoot);
    ignoreShouldChange();
}
exports.registerFocusRoot = registerFocusRoot;
function unregisterFocusRoot(ctx) {
    var idx = focusRootStack.indexOf(ctx.me);
    if (idx !== -1) {
        focusRootStack.splice(idx, 1);
        ignoreShouldChange();
    }
}
exports.unregisterFocusRoot = unregisterFocusRoot;
var currentCtx;
var hookId = -1;
function getCurrentCtx() {
    return currentCtx;
}
exports.getCurrentCtx = getCurrentCtx;
function setCurrentCtx(ctx) {
    currentCtx = ctx;
}
exports.setCurrentCtx = setCurrentCtx;
function createNode(n, parentNode, createInto, createBefore) {
    var c = {
        // This makes CacheNode just one object class = fast
        tag: n.tag,
        key: n.key,
        ref: n.ref,
        className: n.className,
        style: n.style,
        attrs: n.attrs,
        children: n.children,
        component: n.component,
        data: n.data,
        cfg: undefined,
        parent: parentNode,
        element: undefined,
        ctx: undefined,
        orig: n
    };
    var backupInSvg = inSvg;
    var backupInNotFocusable = inNotFocusable;
    var component = c.component;
    var el;
    setRef(c.ref, c);
    if (component) {
        var ctx;
        if (component.ctxClass) {
            ctx = new component.ctxClass(c.data || {}, c);
            if (ctx.data === undefined)
                ctx.data = c.data || {};
            if (ctx.me === undefined)
                ctx.me = c;
        }
        else {
            ctx = { data: c.data || {}, me: c, cfg: undefined };
        }
        ctx.cfg = n.cfg === undefined ? findCfg(parentNode) : n.cfg;
        c.ctx = ctx;
        currentCtx = ctx;
        if (component.init) {
            component.init(ctx, c);
        }
        if (beforeRenderCallback !== emptyBeforeRenderCallback)
            beforeRenderCallback(n, RenderPhase.Create);
        if (component.render) {
            hookId = 0;
            component.render(ctx, c);
            hookId = -1;
        }
        currentCtx = undefined;
    }
    else {
        if (DEBUG)
            Object.freeze(n);
    }
    var tag = c.tag;
    if (tag === "-") {
        // Skip update
        c.tag = undefined;
        c.children = undefined;
        return c;
    }
    var children = c.children;
    var inSvgForeignObject = false;
    if (isNumber(children)) {
        children = "" + children;
        c.children = children;
    }
    if (tag === undefined) {
        if (isString(children)) {
            el = createTextNode(children);
            c.element = el;
            createInto.insertBefore(el, createBefore);
        }
        else {
            createChildren(c, createInto, createBefore);
        }
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
            pushInitCallback(c);
        }
        return c;
    }
    if (tag === "/") {
        var htmlText = children;
        if (htmlText === "") {
            // nothing needs to be created
        }
        else if (createBefore == undefined) {
            var before = createInto.lastChild;
            createInto.insertAdjacentHTML("beforeend", htmlText);
            c.element = [];
            if (before) {
                before = before.nextSibling;
            }
            else {
                before = createInto.firstChild;
            }
            while (before) {
                c.element.push(before);
                before = before.nextSibling;
            }
        }
        else {
            el = createBefore;
            var elPrev = createBefore.previousSibling;
            var removeEl = false;
            var parent = createInto;
            if (!el.insertAdjacentHTML) {
                el = parent.insertBefore(createEl("i"), el);
                removeEl = true;
            }
            el.insertAdjacentHTML("beforebegin", htmlText);
            if (elPrev) {
                elPrev = elPrev.nextSibling;
            }
            else {
                elPrev = parent.firstChild;
            }
            var newElements = [];
            while (elPrev !== el) {
                newElements.push(elPrev);
                elPrev = elPrev.nextSibling;
            }
            c.element = newElements;
            if (removeEl) {
                parent.removeChild(el);
            }
        }
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
            pushInitCallback(c);
        }
        return c;
    }
    if (inSvg || tag === "svg") {
        el = document.createElementNS("http://www.w3.org/2000/svg", tag);
        inSvgForeignObject = tag === "foreignObject";
        inSvg = !inSvgForeignObject;
    }
    else {
        el = createEl(tag);
    }
    createInto.insertBefore(el, createBefore);
    c.element = el;
    createChildren(c, el, null);
    if (component) {
        if (component.postRender) {
            component.postRender(c.ctx, c);
        }
    }
    if (inNotFocusable && focusRootTop === c)
        inNotFocusable = false;
    if (inSvgForeignObject)
        inSvg = true;
    if (c.attrs || inNotFocusable)
        c.attrs = updateElement(c, el, c.attrs, {}, inNotFocusable);
    if (c.style)
        updateStyle(el, c.style, undefined);
    var className = c.className;
    if (className)
        setClassName(el, className);
    inSvg = backupInSvg;
    inNotFocusable = backupInNotFocusable;
    pushInitCallback(c);
    return c;
}
exports.createNode = createNode;
function normalizeNode(n) {
    if (n === false || n === true || n === null)
        return undefined;
    if (isString(n)) {
        return { children: n };
    }
    if (isNumber(n)) {
        return { children: "" + n };
    }
    return n;
}
function createChildren(c, createInto, createBefore) {
    var ch = c.children;
    if (isString(ch)) {
        createInto.textContent = ch;
        return;
    }
    var res = [];
    flattenVdomChildren(res, ch);
    for (var i_3 = 0; i_3 < res.length; i_3++) {
        res[i_3] = createNode(res[i_3], c, createInto, createBefore);
    }
    c.children = res;
}
function destroyNode(c) {
    setRef(c.ref, undefined);
    var ch = c.children;
    if (exports.isArray(ch)) {
        for (var i_4 = 0, l = ch.length; i_4 < l; i_4++) {
            destroyNode(ch[i_4]);
        }
    }
    var component = c.component;
    if (component) {
        var ctx = c.ctx;
        currentCtx = ctx;
        if (beforeRenderCallback !== emptyBeforeRenderCallback)
            beforeRenderCallback(c, RenderPhase.Destroy);
        if (component.destroy)
            component.destroy(ctx, c, c.element);
        var disposables = ctx.disposables;
        if (exports.isArray(disposables)) {
            for (var i_5 = disposables.length; i_5-- > 0;) {
                var d = disposables[i_5];
                if (isFunction(d))
                    d(ctx);
                else
                    d.dispose();
            }
        }
        currentCtx = undefined;
    }
}
function addDisposable(ctx, disposable) {
    var disposables = ctx.disposables;
    if (disposables == undefined) {
        disposables = [];
        ctx.disposables = disposables;
    }
    disposables.push(disposable);
}
exports.addDisposable = addDisposable;
function removeNodeRecursive(c) {
    var el = c.element;
    if (exports.isArray(el)) {
        var pa = el[0].parentNode;
        if (pa) {
            for (var i_6 = 0; i_6 < el.length; i_6++) {
                pa.removeChild(el[i_6]);
            }
        }
    }
    else if (el != null) {
        var p = el.parentNode;
        if (p)
            p.removeChild(el);
    }
    else {
        var ch = c.children;
        if (exports.isArray(ch)) {
            for (var i = 0, l = ch.length; i < l; i++) {
                removeNodeRecursive(ch[i]);
            }
        }
    }
}
function removeNode(c) {
    destroyNode(c);
    removeNodeRecursive(c);
}
var roots = newHashObj();
function nodeContainsNode(c, n, resIndex, res) {
    var el = c.element;
    var ch = c.children;
    if (exports.isArray(el)) {
        for (var ii = 0; ii < el.length; ii++) {
            if (el[ii] === n) {
                res.push(c);
                if (exports.isArray(ch)) {
                    return ch;
                }
                return null;
            }
        }
    }
    else if (el == undefined) {
        if (exports.isArray(ch)) {
            for (var i = 0; i < ch.length; i++) {
                var result = nodeContainsNode(ch[i], n, resIndex, res);
                if (result !== undefined) {
                    res.splice(resIndex, 0, c);
                    return result;
                }
            }
        }
    }
    else if (el === n) {
        res.push(c);
        if (exports.isArray(ch)) {
            return ch;
        }
        return null;
    }
    return undefined;
}
function vdomPath(n) {
    var res = [];
    if (n == undefined)
        return res;
    var rootIds = Object.keys(roots);
    var rootElements = rootIds.map(function (i) { return roots[i].e || document.body; });
    var nodeStack = [];
    rootReallyFound: while (true) {
        rootFound: while (n) {
            for (var j = 0; j < rootElements.length; j++) {
                if (n === rootElements[j])
                    break rootFound;
            }
            nodeStack.push(n);
            n = n.parentNode;
        }
        if (!n || nodeStack.length === 0)
            return res;
        var currentCacheArray = null;
        var currentNode = nodeStack.pop();
        for (j = 0; j < rootElements.length; j++) {
            if (n === rootElements[j]) {
                var rn = roots[rootIds[j]].n;
                if (rn === undefined)
                    continue;
                var findResult = nodeContainsNode(rn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    break rootReallyFound;
                }
            }
        }
        nodeStack.push(currentNode);
        nodeStack.push(n);
        n = n.parentNode;
    }
    subtreeSearch: while (nodeStack.length) {
        currentNode = nodeStack.pop();
        if (currentCacheArray && currentCacheArray.length)
            for (var i = 0, l = currentCacheArray.length; i < l; i++) {
                var bn = currentCacheArray[i];
                var findResult = nodeContainsNode(bn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    continue subtreeSearch;
                }
            }
        res.push(null);
        break;
    }
    return res;
}
exports.vdomPath = vdomPath;
// PureFuncs: deref, getDomNode
function deref(n) {
    var p = vdomPath(n);
    var currentNode = null;
    while (currentNode === null) {
        currentNode = p.pop();
    }
    return currentNode;
}
exports.deref = deref;
function finishUpdateNode(n, c, component) {
    if (component) {
        if (component.postRender) {
            currentCtx = c.ctx;
            component.postRender(currentCtx, n, c);
            currentCtx = undefined;
        }
    }
    c.data = n.data;
    pushUpdateCallback(c);
}
function finishUpdateNodeWithoutChange(c, createInto, createBefore) {
    currentCtx = undefined;
    if (exports.isArray(c.children)) {
        var backupInSvg = inSvg;
        var backupInNotFocusable = inNotFocusable;
        if (c.tag === "svg") {
            inSvg = true;
        }
        else if (inSvg && c.tag === "foreignObject")
            inSvg = false;
        if (inNotFocusable && focusRootTop === c)
            inNotFocusable = false;
        selectedUpdate(c.children, c.element || createInto, c.element != null ? null : createBefore);
        inSvg = backupInSvg;
        inNotFocusable = backupInNotFocusable;
    }
    pushUpdateEverytimeCallback(c);
}
function updateNode(n, c, createInto, createBefore, deepness, inSelectedUpdate) {
    var component = n.component;
    var bigChange = false;
    var ctx = c.ctx;
    if (component != null && ctx != null) {
        var locallyInvalidated = false;
        if (ctx[ctxInvalidated] >= frameCounter) {
            deepness = Math.max(deepness, ctx[ctxDeepness]);
            locallyInvalidated = true;
        }
        if (component.id !== c.component.id) {
            bigChange = true;
        }
        else {
            currentCtx = ctx;
            if (n.cfg !== undefined)
                ctx.cfg = n.cfg;
            else
                ctx.cfg = findCfg(c.parent);
            if (component.shouldChange)
                if (!component.shouldChange(ctx, n, c) && !ignoringShouldChange && !locallyInvalidated) {
                    finishUpdateNodeWithoutChange(c, createInto, createBefore);
                    return c;
                }
            ctx.data = n.data || {};
            c.component = component;
            if (beforeRenderCallback !== emptyBeforeRenderCallback)
                beforeRenderCallback(n, inSelectedUpdate ? RenderPhase.LocalUpdate : RenderPhase.Update);
            if (component.render) {
                c.orig = n;
                n = exports.assign({}, n); // need to clone me because it should not be modified for next updates
                c.cfg = undefined;
                if (n.cfg !== undefined)
                    n.cfg = undefined;
                hookId = 0;
                component.render(ctx, n, c);
                hookId = -1;
                if (n.cfg !== undefined) {
                    if (c.cfg === undefined)
                        c.cfg = n.cfg;
                    else
                        exports.assign(c.cfg, n.cfg);
                }
            }
            currentCtx = undefined;
        }
    }
    else {
        // In case there is no component and source is same reference it is considered not changed
        if (c.orig === n && !ignoringShouldChange) {
            finishUpdateNodeWithoutChange(c, createInto, createBefore);
            return c;
        }
        c.orig = n;
        if (DEBUG)
            Object.freeze(n);
    }
    var newChildren = n.children;
    var cachedChildren = c.children;
    var tag = n.tag;
    if (tag === "-") {
        finishUpdateNodeWithoutChange(c, createInto, createBefore);
        return c;
    }
    var backupInSvg = inSvg;
    var backupInNotFocusable = inNotFocusable;
    if (isNumber(newChildren)) {
        newChildren = "" + newChildren;
    }
    if (bigChange ||
        (component != undefined && ctx == undefined) ||
        (component == undefined && ctx != undefined && ctx.me.component !== emptyComponent)) {
        // it is big change of component.id or old one was not even component or old one was component and new is not anymore => recreate
    }
    else if (tag === "/") {
        if (c.tag === "/" && cachedChildren === newChildren) {
            finishUpdateNode(n, c, component);
            return c;
        }
    }
    else if (tag === c.tag) {
        if (tag === undefined) {
            if (isString(newChildren) && isString(cachedChildren)) {
                if (newChildren !== cachedChildren) {
                    var el = c.element;
                    el.textContent = newChildren;
                    c.children = newChildren;
                }
            }
            else {
                if (inNotFocusable && focusRootTop === c)
                    inNotFocusable = false;
                if (deepness <= 0) {
                    if (exports.isArray(cachedChildren))
                        selectedUpdate(c.children, createInto, createBefore);
                }
                else {
                    c.children = updateChildren(createInto, newChildren, cachedChildren, c, createBefore, deepness - 1);
                }
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
            }
            finishUpdateNode(n, c, component);
            return c;
        }
        else {
            var inSvgForeignObject = false;
            if (tag === "svg") {
                inSvg = true;
            }
            else if (inSvg && tag === "foreignObject") {
                inSvgForeignObject = true;
                inSvg = false;
            }
            if (inNotFocusable && focusRootTop === c)
                inNotFocusable = false;
            var el = c.element;
            if (isString(newChildren) && !exports.isArray(cachedChildren)) {
                if (newChildren !== cachedChildren) {
                    el.textContent = newChildren;
                    cachedChildren = newChildren;
                }
            }
            else {
                if (deepness <= 0) {
                    if (exports.isArray(cachedChildren))
                        selectedUpdate(c.children, el, null);
                }
                else {
                    cachedChildren = updateChildren(el, newChildren, cachedChildren, c, null, deepness - 1);
                }
            }
            c.children = cachedChildren;
            if (inSvgForeignObject)
                inSvg = true;
            finishUpdateNode(n, c, component);
            if (c.attrs || n.attrs || inNotFocusable)
                c.attrs = updateElement(c, el, n.attrs, c.attrs || {}, inNotFocusable);
            updateStyle(el, n.style, c.style);
            c.style = n.style;
            var className = n.className;
            if (className !== c.className) {
                setClassName(el, className || "");
                c.className = className;
            }
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
            return c;
        }
    }
    var parEl = c.element;
    if (exports.isArray(parEl))
        parEl = parEl[0];
    if (parEl == undefined)
        parEl = createInto;
    else
        parEl = parEl.parentNode;
    var r = createNode(n, c.parent, parEl, getDomNode(c));
    removeNode(c);
    return r;
}
exports.updateNode = updateNode;
function getDomNode(c) {
    if (c === undefined)
        return null;
    var el = c.element;
    if (el != null) {
        if (exports.isArray(el))
            return el[0];
        return el;
    }
    var ch = c.children;
    if (!exports.isArray(ch))
        return null;
    for (var i = 0; i < ch.length; i++) {
        el = getDomNode(ch[i]);
        if (el)
            return el;
    }
    return null;
}
exports.getDomNode = getDomNode;
function findNextNode(a, i, len, def) {
    while (++i < len) {
        var ai = a[i];
        if (ai == undefined)
            continue;
        var n = getDomNode(ai);
        if (n != null)
            return n;
    }
    return def;
}
function callPostCallbacks() {
    var count = updateInstance.length;
    for (var i = 0; i < count; i++) {
        var n = updateInstance[i];
        currentCtx = n.ctx;
        updateCall[i].call(n.component, currentCtx, n, n.element);
    }
    currentCtx = undefined;
    updateCall = [];
    updateInstance = [];
}
exports.callPostCallbacks = callPostCallbacks;
function updateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
    cachedChildren[cachedIndex] = updateNode(newNode, cachedChildren[cachedIndex], element, findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore), deepness);
}
function reorderInUpdateChildrenRec(c, element, before) {
    var el = c.element;
    if (el != null) {
        if (exports.isArray(el)) {
            for (var i = 0; i < el.length; i++) {
                element.insertBefore(el[i], before);
            }
        }
        else
            element.insertBefore(el, before);
        return;
    }
    var ch = c.children;
    if (!exports.isArray(ch))
        return;
    for (var i = 0; i < ch.length; i++) {
        reorderInUpdateChildrenRec(ch[i], element, before);
    }
}
function reorderInUpdateChildren(cachedChildren, cachedIndex, cachedLength, createBefore, element) {
    var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
    var cur = cachedChildren[cachedIndex];
    var what = getDomNode(cur);
    if (what != null && what !== before) {
        reorderInUpdateChildrenRec(cur, element, before);
    }
}
function reorderAndUpdateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
    var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
    var cur = cachedChildren[cachedIndex];
    var what = getDomNode(cur);
    if (what != null && what !== before) {
        reorderInUpdateChildrenRec(cur, element, before);
    }
    cachedChildren[cachedIndex] = updateNode(newNode, cur, element, before, deepness);
}
function recursiveFlattenVdomChildren(res, children) {
    if (children == undefined)
        return;
    if (isArrayVdom(children)) {
        for (var i_7 = 0; i_7 < children.length; i_7++) {
            recursiveFlattenVdomChildren(res, children[i_7]);
        }
    }
    else {
        var item = normalizeNode(children);
        if (item !== undefined)
            res.push(item);
    }
}
function flattenVdomChildren(res, children) {
    recursiveFlattenVdomChildren(res, children);
    if (DEBUG) {
        var set = new Set();
        for (var i_8 = 0; i_8 < res.length; i_8++) {
            var key = res[i_8].key;
            if (key == undefined)
                continue;
            if (set.has(key)) {
                console.warn("Duplicate Bobril node key " + key);
            }
            set.add(key);
        }
    }
}
function updateChildren(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
    if (cachedChildren == undefined)
        cachedChildren = [];
    if (!exports.isArray(cachedChildren)) {
        if (element.firstChild)
            element.removeChild(element.firstChild);
        cachedChildren = [];
    }
    var newCh = [];
    flattenVdomChildren(newCh, newChildren);
    return updateChildrenCore(element, newCh, cachedChildren, parentNode, createBefore, deepness);
}
exports.updateChildren = updateChildren;
function updateChildrenCore(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
    var newEnd = newChildren.length;
    var cachedLength = cachedChildren.length;
    var cachedEnd = cachedLength;
    var newIndex = 0;
    var cachedIndex = 0;
    while (newIndex < newEnd && cachedIndex < cachedEnd) {
        if (newChildren[newIndex].key === cachedChildren[cachedIndex].key) {
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            newIndex++;
            cachedIndex++;
            continue;
        }
        while (true) {
            if (newChildren[newEnd - 1].key === cachedChildren[cachedEnd - 1].key) {
                newEnd--;
                cachedEnd--;
                updateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                if (newIndex < newEnd && cachedIndex < cachedEnd)
                    continue;
            }
            break;
        }
        if (newIndex < newEnd && cachedIndex < cachedEnd) {
            if (newChildren[newIndex].key === cachedChildren[cachedEnd - 1].key) {
                cachedChildren.splice(cachedIndex, 0, cachedChildren[cachedEnd - 1]);
                cachedChildren.splice(cachedEnd, 1);
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
                continue;
            }
            if (newChildren[newEnd - 1].key === cachedChildren[cachedIndex].key) {
                cachedChildren.splice(cachedEnd, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                newEnd--;
                reorderAndUpdateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                continue;
            }
        }
        break;
    }
    if (cachedIndex === cachedEnd) {
        if (newIndex === newEnd) {
            return cachedChildren;
        }
        // Only work left is to add new nodes
        while (newIndex < newEnd) {
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            newIndex++;
        }
        return cachedChildren;
    }
    if (newIndex === newEnd) {
        // Only work left is to remove old nodes
        while (cachedIndex < cachedEnd) {
            cachedEnd--;
            removeNode(cachedChildren[cachedEnd]);
            cachedChildren.splice(cachedEnd, 1);
        }
        return cachedChildren;
    }
    // order of keyed nodes ware changed => reorder keyed nodes first
    var cachedKeys = newHashObj();
    var newKeys = newHashObj();
    var key;
    var node;
    var backupNewIndex = newIndex;
    var backupCachedIndex = cachedIndex;
    var deltaKeyless = 0;
    for (; cachedIndex < cachedEnd; cachedIndex++) {
        node = cachedChildren[cachedIndex];
        key = node.key;
        if (key != null) {
            assert(!(key in cachedKeys));
            cachedKeys[key] = cachedIndex;
        }
        else
            deltaKeyless--;
    }
    var keyLess = -deltaKeyless - deltaKeyless;
    for (; newIndex < newEnd; newIndex++) {
        node = newChildren[newIndex];
        key = node.key;
        if (key != null) {
            assert(!(key in newKeys));
            newKeys[key] = newIndex;
        }
        else
            deltaKeyless++;
    }
    keyLess += deltaKeyless;
    var delta = 0;
    newIndex = backupNewIndex;
    cachedIndex = backupCachedIndex;
    var cachedKey;
    while (cachedIndex < cachedEnd && newIndex < newEnd) {
        if (cachedChildren[cachedIndex] === null) {
            // already moved somewhere else
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            delta--;
            continue;
        }
        cachedKey = cachedChildren[cachedIndex].key;
        if (cachedKey == undefined) {
            cachedIndex++;
            continue;
        }
        key = newChildren[newIndex].key;
        if (key == undefined) {
            newIndex++;
            while (newIndex < newEnd) {
                key = newChildren[newIndex].key;
                if (key != undefined)
                    break;
                newIndex++;
            }
            if (key == undefined)
                break;
        }
        var akPos = cachedKeys[key];
        if (akPos === undefined) {
            // New key
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            delta++;
            newIndex++;
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            continue;
        }
        if (!(cachedKey in newKeys)) {
            // Old key
            removeNode(cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex, 1);
            delta--;
            cachedEnd--;
            cachedLength--;
            continue;
        }
        if (cachedIndex === akPos + delta) {
            // In-place update
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            newIndex++;
            cachedIndex++;
        }
        else {
            // Move
            cachedChildren.splice(cachedIndex, 0, cachedChildren[akPos + delta]);
            delta++;
            cachedChildren[akPos + delta] = null;
            reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
            cachedIndex++;
            cachedEnd++;
            cachedLength++;
            newIndex++;
        }
    }
    // remove old keyed cached nodes
    while (cachedIndex < cachedEnd) {
        if (cachedChildren[cachedIndex] === null) {
            // already moved somewhere else
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            continue;
        }
        if (cachedChildren[cachedIndex].key != null) {
            // this key is only in old
            removeNode(cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex, 1);
            cachedEnd--;
            cachedLength--;
            continue;
        }
        cachedIndex++;
    }
    // add new keyed nodes
    while (newIndex < newEnd) {
        key = newChildren[newIndex].key;
        if (key != null) {
            cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
            cachedEnd++;
            cachedLength++;
            delta++;
            cachedIndex++;
        }
        newIndex++;
    }
    // Without any keyless nodes we are done
    if (!keyLess)
        return cachedChildren;
    // calculate common (old and new) keyless
    keyLess = (keyLess - Math.abs(deltaKeyless)) >> 1;
    // reorder just nodes without keys
    newIndex = backupNewIndex;
    cachedIndex = backupCachedIndex;
    while (newIndex < newEnd) {
        if (cachedIndex < cachedEnd) {
            cachedKey = cachedChildren[cachedIndex].key;
            if (cachedKey != null) {
                cachedIndex++;
                continue;
            }
        }
        key = newChildren[newIndex].key;
        if (newIndex < cachedEnd && key === cachedChildren[newIndex].key) {
            if (key != null) {
                newIndex++;
                continue;
            }
            updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
            keyLess--;
            newIndex++;
            cachedIndex = newIndex;
            continue;
        }
        if (key != null) {
            assert(newIndex === cachedIndex);
            if (keyLess === 0 && deltaKeyless < 0) {
                while (true) {
                    removeNode(cachedChildren[cachedIndex]);
                    cachedChildren.splice(cachedIndex, 1);
                    cachedEnd--;
                    cachedLength--;
                    deltaKeyless++;
                    assert(cachedIndex !== cachedEnd, "there still need to exist key node");
                    if (cachedChildren[cachedIndex].key != null)
                        break;
                }
                continue;
            }
            while (cachedChildren[cachedIndex].key == undefined)
                cachedIndex++;
            assert(key === cachedChildren[cachedIndex].key);
            cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex + 1, 1);
            reorderInUpdateChildren(cachedChildren, newIndex, cachedLength, createBefore, element);
            // just moving keyed node it was already updated before
            newIndex++;
            cachedIndex = newIndex;
            continue;
        }
        if (cachedIndex < cachedEnd) {
            cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
            cachedChildren.splice(cachedIndex + 1, 1);
            reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
            keyLess--;
            newIndex++;
            cachedIndex++;
        }
        else {
            cachedChildren.splice(newIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, newIndex - 1, cachedLength, createBefore)));
            cachedEnd++;
            cachedLength++;
            newIndex++;
            cachedIndex++;
        }
    }
    while (cachedEnd > newIndex) {
        cachedEnd--;
        removeNode(cachedChildren[cachedEnd]);
        cachedChildren.splice(cachedEnd, 1);
    }
    return cachedChildren;
}
var hasNativeRaf = false;
var nativeRaf = window.requestAnimationFrame;
if (nativeRaf) {
    nativeRaf(function (param) {
        if (param === +param)
            hasNativeRaf = true;
    });
}
var setTimeout = window.setTimeout;
exports.now = Date.now || (function () { return new Date().getTime(); });
var startTime = exports.now();
var lastTickTime = 0;
function requestAnimationFrame(callback) {
    if (hasNativeRaf) {
        nativeRaf(callback);
    }
    else {
        var delay = 50 / 3 + lastTickTime - exports.now();
        if (delay < 0)
            delay = 0;
        setTimeout(function () {
            lastTickTime = exports.now();
            callback(lastTickTime - startTime);
        }, delay);
    }
}
var ctxInvalidated = "$invalidated";
var ctxDeepness = "$deepness";
var fullRecreateRequested = true;
var scheduled = false;
var isInvalidated = true;
var initializing = true;
var uptimeMs = 0;
var frameCounter = 0;
var lastFrameDurationMs = 0;
var renderFrameBegin = 0;
var regEvents = {};
var registryEvents;
function addEvent(name, priority, callback) {
    if (registryEvents == undefined)
        registryEvents = {};
    var list = registryEvents[name] || [];
    list.push({ priority: priority, callback: callback });
    registryEvents[name] = list;
}
exports.addEvent = addEvent;
function emitEvent(name, ev, target, node) {
    var events = regEvents[name];
    if (events)
        for (var i = 0; i < events.length; i++) {
            if (events[i](ev, target, node))
                return true;
        }
    return false;
}
exports.emitEvent = emitEvent;
var isPassiveEventHandlerSupported = false;
try {
    var options = Object.defineProperty({}, "passive", {
        get: function () {
            isPassiveEventHandlerSupported = true;
        }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
}
catch (err) {
    isPassiveEventHandlerSupported = false;
}
var listeningEventDeepness = 0;
function addListener(el, name) {
    if (name[0] == "!")
        return;
    var capture = name[0] == "^";
    var eventName = name;
    if (name[0] == "@") {
        eventName = name.slice(1);
        el = document;
    }
    if (capture) {
        eventName = name.slice(1);
    }
    function enhanceEvent(ev) {
        ev = ev || window.event;
        var t = ev.target || ev.srcElement || el;
        var n = deref(t);
        listeningEventDeepness++;
        emitEvent(name, ev, t, n);
        listeningEventDeepness--;
        if (listeningEventDeepness == 0 && deferSyncUpdateRequested)
            syncUpdate();
    }
    if ("on" + eventName in window)
        el = window;
    el.addEventListener(eventName, enhanceEvent, isPassiveEventHandlerSupported ? { capture: capture, passive: false } : capture);
}
function initEvents() {
    if (registryEvents === undefined)
        return;
    var eventNames = Object.keys(registryEvents);
    for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        var arr = registryEvents[eventName];
        arr = arr.sort(function (a, b) { return a.priority - b.priority; });
        regEvents[eventName] = arr.map(function (v) { return v.callback; });
    }
    registryEvents = undefined;
    var body = document.body;
    for (var i = 0; i < eventNames.length; i++) {
        addListener(body, eventNames[i]);
    }
}
function selectedUpdate(cache, element, createBefore) {
    var len = cache.length;
    for (var i = 0; i < len; i++) {
        var node = cache[i];
        var ctx = node.ctx;
        if (ctx != null && ctx[ctxInvalidated] >= frameCounter) {
            cache[i] = updateNode(node.orig, node, element, findNextNode(cache, i, len, createBefore), ctx[ctxDeepness], true);
        }
        else if (exports.isArray(node.children)) {
            var backupInSvg = inSvg;
            var backupInNotFocusable = inNotFocusable;
            if (inNotFocusable && focusRootTop === node)
                inNotFocusable = false;
            if (node.tag === "svg")
                inSvg = true;
            else if (inSvg && node.tag === "foreignObject")
                inSvg = false;
            var thisElement = node.element;
            if (thisElement != undefined) {
                selectedUpdate(node.children, thisElement, null);
            }
            else {
                selectedUpdate(node.children, element, findNextNode(cache, i, len, createBefore));
            }
            pushUpdateEverytimeCallback(node);
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
        }
    }
}
var RenderPhase;
(function (RenderPhase) {
    RenderPhase[RenderPhase["Create"] = 0] = "Create";
    RenderPhase[RenderPhase["Update"] = 1] = "Update";
    RenderPhase[RenderPhase["LocalUpdate"] = 2] = "LocalUpdate";
    RenderPhase[RenderPhase["Destroy"] = 3] = "Destroy";
})(RenderPhase = exports.RenderPhase || (exports.RenderPhase = {}));
var emptyBeforeRenderCallback = function () { };
var beforeRenderCallback = emptyBeforeRenderCallback;
var beforeFrameCallback = function () { };
var reallyBeforeFrameCallback = function () { };
var afterFrameCallback = function () { };
function setBeforeRender(callback) {
    var res = beforeRenderCallback;
    beforeRenderCallback = callback;
    return res;
}
exports.setBeforeRender = setBeforeRender;
function setBeforeFrame(callback) {
    var res = beforeFrameCallback;
    beforeFrameCallback = callback;
    return res;
}
exports.setBeforeFrame = setBeforeFrame;
function setReallyBeforeFrame(callback) {
    var res = reallyBeforeFrameCallback;
    reallyBeforeFrameCallback = callback;
    return res;
}
exports.setReallyBeforeFrame = setReallyBeforeFrame;
function setAfterFrame(callback) {
    var res = afterFrameCallback;
    afterFrameCallback = callback;
    return res;
}
exports.setAfterFrame = setAfterFrame;
function isLogicalParent(parent, child, rootIds) {
    while (child != null) {
        if (parent === child)
            return true;
        var p = child.parent;
        if (p == undefined) {
            for (var i = 0; i < rootIds.length; i++) {
                var r = roots[rootIds[i]];
                if (!r)
                    continue;
                if (r.n === child) {
                    p = r.p;
                    break;
                }
            }
        }
        child = p;
    }
    return false;
}
var deferSyncUpdateRequested = false;
function syncUpdate() {
    deferSyncUpdateRequested = false;
    internalUpdate(exports.now() - startTime);
    executeEffectCallbacks();
}
exports.syncUpdate = syncUpdate;
function deferSyncUpdate() {
    if (listeningEventDeepness > 0) {
        deferSyncUpdateRequested = true;
        return;
    }
    syncUpdate();
}
exports.deferSyncUpdate = deferSyncUpdate;
function update(time) {
    scheduled = false;
    internalUpdate(time);
    exports.asap(executeEffectCallbacks);
}
var rootIds;
var RootComponent = createVirtualComponent({
    render: function (ctx, me) {
        var r = ctx.data;
        var c = r.f(r);
        if (c === undefined) {
            me.tag = "-"; // Skip render when root factory returns undefined
        }
        else {
            me.children = c;
        }
    }
});
function internalUpdate(time) {
    isInvalidated = false;
    renderFrameBegin = exports.now();
    initEvents();
    reallyBeforeFrameCallback();
    frameCounter++;
    ignoringShouldChange = nextIgnoreShouldChange;
    nextIgnoreShouldChange = false;
    uptimeMs = time;
    beforeFrameCallback();
    var fullRefresh = false;
    if (fullRecreateRequested) {
        fullRecreateRequested = false;
        fullRefresh = true;
    }
    listeningEventDeepness++;
    for (var repeat = 0; repeat < 2; repeat++) {
        focusRootTop = focusRootStack.length === 0 ? null : focusRootStack[focusRootStack.length - 1];
        inNotFocusable = false;
        rootIds = Object.keys(roots);
        for (var i = 0; i < rootIds.length; i++) {
            var r = roots[rootIds[i]];
            if (!r)
                continue;
            var rc = r.n;
            var insertBefore = null;
            for (var j = i + 1; j < rootIds.length; j++) {
                var rafter = roots[rootIds[j]];
                if (rafter === undefined)
                    continue;
                insertBefore = getDomNode(rafter.n);
                if (insertBefore != null)
                    break;
            }
            if (focusRootTop)
                inNotFocusable = !isLogicalParent(focusRootTop, r.p, rootIds);
            if (r.e === undefined)
                r.e = document.body;
            if (rc) {
                if (fullRefresh || rc.ctx[ctxInvalidated] >= frameCounter) {
                    var node = RootComponent(r);
                    updateNode(node, rc, r.e, insertBefore, fullRefresh ? 1e6 : rc.ctx[ctxDeepness]);
                }
                else {
                    if (exports.isArray(r.c))
                        selectedUpdate(r.c, r.e, insertBefore);
                }
            }
            else {
                var node = RootComponent(r);
                rc = createNode(node, undefined, r.e, insertBefore);
                r.n = rc;
            }
            r.c = rc.children;
        }
        rootIds = undefined;
        callPostCallbacks();
        if (!deferSyncUpdateRequested)
            break;
    }
    deferSyncUpdateRequested = false;
    listeningEventDeepness--;
    var r0 = roots["0"];
    afterFrameCallback(r0 ? r0.c : null);
    lastFrameDurationMs = exports.now() - renderFrameBegin;
}
var nextIgnoreShouldChange = false;
var ignoringShouldChange = false;
function ignoreShouldChange() {
    nextIgnoreShouldChange = true;
    exports.invalidate();
}
exports.ignoreShouldChange = ignoreShouldChange;
function setInvalidate(inv) {
    var prev = exports.invalidate;
    exports.invalidate = inv;
    return prev;
}
exports.setInvalidate = setInvalidate;
exports.invalidate = function (ctx, deepness) {
    if (ctx != null) {
        if (deepness == undefined)
            deepness = 1e6;
        if (ctx[ctxInvalidated] !== frameCounter + 1) {
            ctx[ctxInvalidated] = frameCounter + 1;
            ctx[ctxDeepness] = deepness;
        }
        else {
            if (deepness > ctx[ctxDeepness])
                ctx[ctxDeepness] = deepness;
        }
    }
    else {
        fullRecreateRequested = true;
    }
    isInvalidated = true;
    if (scheduled || initializing)
        return;
    scheduled = true;
    requestAnimationFrame(update);
};
var lastRootId = 0;
function addRoot(factory, element, parent) {
    lastRootId++;
    var rootId = "" + lastRootId;
    roots[rootId] = { f: factory, e: element, c: [], p: parent, n: undefined };
    if (rootIds != null) {
        rootIds.push(rootId);
    }
    else {
        firstInvalidate();
    }
    return rootId;
}
exports.addRoot = addRoot;
function removeRoot(id) {
    var root = roots[id];
    if (!root)
        return;
    if (root.n)
        removeNode(root.n);
    delete roots[id];
}
exports.removeRoot = removeRoot;
function updateRoot(id, factory) {
    assert(rootIds != null, "updateRoot could be called only from render");
    var root = roots[id];
    assert(root != null);
    if (factory != null)
        root.f = factory;
    var rootNode = root.n;
    if (rootNode == undefined)
        return;
    var ctx = rootNode.ctx;
    ctx[ctxInvalidated] = frameCounter;
    ctx[ctxDeepness] = 1e6;
}
exports.updateRoot = updateRoot;
function getRoots() {
    return roots;
}
exports.getRoots = getRoots;
function finishInitialize() {
    initializing = false;
    exports.invalidate();
}
var beforeInit = finishInitialize;
function firstInvalidate() {
    initializing = true;
    beforeInit();
    beforeInit = finishInitialize;
}
function init(factory, element) {
    assert(rootIds == undefined, "init should not be called from render");
    removeRoot("0");
    roots["0"] = { f: factory, e: element, c: [], p: undefined, n: undefined };
    firstInvalidate();
}
exports.init = init;
function setBeforeInit(callback) {
    var prevBeforeInit = beforeInit;
    beforeInit = function () {
        callback(prevBeforeInit);
    };
}
exports.setBeforeInit = setBeforeInit;
var currentCtxWithEvents;
function bubble(node, name, param) {
    if (param == undefined) {
        param = { target: node };
    }
    else if (isObject(param) && param.target == undefined) {
        param.target = node;
    }
    var res = captureBroadcast(name, param);
    if (res != undefined)
        return res;
    var prevCtx = currentCtxWithEvents;
    while (node) {
        var c = node.component;
        if (c) {
            var ctx = node.ctx;
            currentCtxWithEvents = ctx;
            if (((ctx.$hookFlags || 0) & hasEvents) === hasEvents) {
                var hooks = ctx.$hooks;
                for (var i = 0, l = hooks.length; i < l; i++) {
                    var h = hooks[i];
                    if (h instanceof EventsHook) {
                        var m = h.events[name];
                        if (m !== undefined) {
                            var eventResult = +m.call(ctx, param);
                            if (eventResult == EventResult.HandledPreventDefault) {
                                currentCtxWithEvents = prevCtx;
                                return ctx;
                            }
                            if (eventResult == EventResult.HandledButRunDefault) {
                                currentCtxWithEvents = prevCtx;
                                return undefined;
                            }
                            if (eventResult == EventResult.NotHandledPreventDefault) {
                                res = ctx;
                            }
                        }
                    }
                }
            }
            var m = c[name];
            if (m) {
                var eventResult = +m.call(c, ctx, param);
                if (eventResult == EventResult.HandledPreventDefault) {
                    currentCtxWithEvents = prevCtx;
                    return ctx;
                }
                if (eventResult == EventResult.HandledButRunDefault) {
                    currentCtxWithEvents = prevCtx;
                    return undefined;
                }
                if (eventResult == EventResult.NotHandledPreventDefault) {
                    res = ctx;
                }
            }
            m = c.shouldStopBubble;
            if (m) {
                if (m.call(c, ctx, name, param))
                    break;
            }
        }
        node = node.parent;
    }
    currentCtxWithEvents = prevCtx;
    return res;
}
exports.bubble = bubble;
function broadcastEventToNode(node, name, param) {
    if (!node)
        return undefined;
    var res;
    var c = node.component;
    if (c) {
        var ctx = node.ctx;
        var prevCtx = currentCtxWithEvents;
        currentCtxWithEvents = ctx;
        if (((ctx.$hookFlags || 0) & hasEvents) === hasEvents) {
            var hooks = ctx.$hooks;
            for (var i = 0, l = hooks.length; i < l; i++) {
                var h = hooks[i];
                if (h instanceof EventsHook) {
                    var m = h.events[name];
                    if (m !== undefined) {
                        var eventResult = +m.call(ctx, param);
                        if (eventResult == EventResult.HandledPreventDefault) {
                            currentCtxWithEvents = prevCtx;
                            return ctx;
                        }
                        if (eventResult == EventResult.HandledButRunDefault) {
                            currentCtxWithEvents = prevCtx;
                            return undefined;
                        }
                        if (eventResult == EventResult.NotHandledPreventDefault) {
                            res = ctx;
                        }
                    }
                }
            }
        }
        var m = c[name];
        if (m) {
            var eventResult = +m.call(c, ctx, param);
            if (eventResult == EventResult.HandledPreventDefault) {
                currentCtxWithEvents = prevCtx;
                return ctx;
            }
            if (eventResult == EventResult.HandledButRunDefault) {
                currentCtxWithEvents = prevCtx;
                return undefined;
            }
            if (eventResult == EventResult.NotHandledPreventDefault) {
                res = ctx;
            }
        }
        m = c.shouldStopBroadcast;
        if (m) {
            if (m.call(c, ctx, name, param)) {
                currentCtxWithEvents = prevCtx;
                return res;
            }
        }
        currentCtxWithEvents = prevCtx;
    }
    var ch = node.children;
    if (exports.isArray(ch)) {
        for (var i = 0; i < ch.length; i++) {
            var res2 = broadcastEventToNode(ch[i], name, param);
            if (res2 != undefined)
                return res2;
        }
    }
    return res;
}
function broadcastCapturedEventToNode(node, name, param) {
    if (!node)
        return undefined;
    var res;
    var c = node.component;
    if (c) {
        var ctx = node.ctx;
        if (((ctx.$hookFlags || 0) & hasCaptureEvents) === hasCaptureEvents) {
            var hooks = ctx.$hooks;
            var prevCtx = currentCtxWithEvents;
            currentCtxWithEvents = ctx;
            for (var i = 0, l = hooks.length; i < l; i++) {
                var h = hooks[i];
                if (h instanceof CaptureEventsHook) {
                    var m = h.events[name];
                    if (m !== undefined) {
                        var eventResult = +m.call(ctx, param);
                        if (eventResult == EventResult.HandledPreventDefault) {
                            currentCtxWithEvents = prevCtx;
                            return ctx;
                        }
                        if (eventResult == EventResult.HandledButRunDefault) {
                            currentCtxWithEvents = prevCtx;
                            return undefined;
                        }
                        if (eventResult == EventResult.NotHandledPreventDefault) {
                            res = ctx;
                        }
                    }
                }
            }
            currentCtxWithEvents = prevCtx;
        }
    }
    var ch = node.children;
    if (exports.isArray(ch)) {
        for (var i = 0, l = ch.length; i < l; i++) {
            var res2 = broadcastCapturedEventToNode(ch[i], name, param);
            if (res2 != undefined)
                return res2;
        }
    }
    return res;
}
function captureBroadcast(name, param) {
    var k = Object.keys(roots);
    for (var i = 0; i < k.length; i++) {
        var ch = roots[k[i]].n;
        if (ch != null) {
            var res = broadcastCapturedEventToNode(ch, name, param);
            if (res != null)
                return res;
        }
    }
    return undefined;
}
exports.captureBroadcast = captureBroadcast;
function broadcast(name, param) {
    var res = captureBroadcast(name, param);
    if (res != null)
        return res;
    var k = Object.keys(roots);
    for (var i = 0; i < k.length; i++) {
        var ch = roots[k[i]].n;
        if (ch != null) {
            res = broadcastEventToNode(ch, name, param);
            if (res != null)
                return res;
        }
    }
    return undefined;
}
exports.broadcast = broadcast;
function runMethodFrom(ctx, methodId, param) {
    var done = false;
    if (DEBUG && ctx == undefined)
        throw new Error("runMethodFrom ctx is undefined");
    var currentRoot = ctx.me;
    var previousRoot;
    while (currentRoot != undefined) {
        var children = currentRoot.children;
        if (exports.isArray(children))
            loopChildNodes(children);
        if (done)
            return true;
        var comp = currentRoot.component;
        if (comp && comp.runMethod) {
            var prevCtx = currentCtxWithEvents;
            currentCtxWithEvents = currentRoot.ctx;
            if (comp.runMethod(currentCtxWithEvents, methodId, param))
                done = true;
            currentCtxWithEvents = prevCtx;
        }
        if (done)
            return true;
        previousRoot = currentRoot;
        currentRoot = currentRoot.parent;
    }
    function loopChildNodes(children) {
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            if (child === previousRoot)
                continue;
            exports.isArray(child.children) && loopChildNodes(child.children);
            if (done)
                return;
            var comp = child.component;
            if (comp && comp.runMethod) {
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = child.ctx;
                if (comp.runMethod(currentCtxWithEvents, methodId, param)) {
                    currentCtxWithEvents = prevCtx;
                    done = true;
                    return;
                }
                currentCtxWithEvents = prevCtx;
            }
        }
    }
    return done;
}
exports.runMethodFrom = runMethodFrom;
function getCurrentCtxWithEvents() {
    if (currentCtxWithEvents != undefined)
        return currentCtxWithEvents;
    return currentCtx;
}
exports.getCurrentCtxWithEvents = getCurrentCtxWithEvents;
function tryRunMethod(methodId, param) {
    return runMethodFrom(getCurrentCtxWithEvents(), methodId, param);
}
exports.tryRunMethod = tryRunMethod;
function runMethod(methodId, param) {
    if (!runMethodFrom(getCurrentCtxWithEvents(), methodId, param))
        throw Error("runMethod didn't found " + methodId);
}
exports.runMethod = runMethod;
var lastMethodId = 0;
function allocateMethodId() {
    return lastMethodId++;
}
exports.allocateMethodId = allocateMethodId;
function merge(f1, f2) {
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = f1.apply(this, params);
        if (result)
            return result;
        return f2.apply(this, params);
    };
}
var emptyObject = {};
function mergeComponents(c1, c2) {
    var res = Object.create(c1);
    res.super = c1;
    for (var i in c2) {
        if (!(i in emptyObject)) {
            var m = c2[i];
            var origM = c1[i];
            if (i === "id") {
                res[i] = (origM != null ? origM : "") + "/" + m;
            }
            else if (isFunction(m) && origM != null && isFunction(origM)) {
                res[i] = merge(origM, m);
            }
            else {
                res[i] = m;
            }
        }
    }
    return res;
}
function overrideComponents(originalComponent, overridingComponent) {
    var res = Object.create(originalComponent);
    res.super = originalComponent;
    for (var i_9 in overridingComponent) {
        if (!(i_9 in emptyObject)) {
            var m = overridingComponent[i_9];
            var origM = originalComponent[i_9];
            if (i_9 === "id") {
                res[i_9] = (origM != null ? origM : "") + "/" + m;
            }
            else {
                res[i_9] = m;
            }
        }
    }
    return res;
}
function preEnhance(node, methods) {
    var comp = node.component;
    if (!comp) {
        node.component = methods;
        return node;
    }
    node.component = mergeComponents(methods, comp);
    return node;
}
exports.preEnhance = preEnhance;
function postEnhance(node, methods) {
    var comp = node.component;
    if (!comp) {
        node.component = methods;
        return node;
    }
    node.component = mergeComponents(comp, methods);
    return node;
}
exports.postEnhance = postEnhance;
function preventDefault(event) {
    var pd = event.preventDefault;
    if (pd)
        pd.call(event);
    else
        event.returnValue = false;
}
exports.preventDefault = preventDefault;
function cloneNodeArray(a) {
    a = a.slice(0);
    for (var i = 0; i < a.length; i++) {
        var n = a[i];
        if (exports.isArray(n)) {
            a[i] = cloneNodeArray(n);
        }
        else if (isObject(n)) {
            a[i] = cloneNode(n);
        }
    }
    return a;
}
function cloneNode(node) {
    var r = exports.assign({}, node);
    if (r.attrs) {
        r.attrs = exports.assign({}, r.attrs);
    }
    if (isObject(r.style)) {
        r.style = exports.assign({}, r.style);
    }
    var ch = r.children;
    if (ch) {
        if (exports.isArray(ch)) {
            r.children = cloneNodeArray(ch);
        }
        else if (isObject(ch)) {
            r.children = cloneNode(ch);
        }
    }
    return r;
}
exports.cloneNode = cloneNode;
function setStyleShim(name, action) {
    mapping.set(name, action);
}
exports.setStyleShim = setStyleShim;
setStyleShim("float", renamer("cssFloat"));
// PureFuncs: uptime, lastFrameDuration, frame, invalidated
function uptime() {
    return uptimeMs;
}
exports.uptime = uptime;
function lastFrameDuration() {
    return lastFrameDurationMs;
}
exports.lastFrameDuration = lastFrameDuration;
function frame() {
    return frameCounter;
}
exports.frame = frame;
function invalidated() {
    return isInvalidated;
}
exports.invalidated = invalidated;
// Bobril.Media
var BobrilDeviceCategory;
(function (BobrilDeviceCategory) {
    BobrilDeviceCategory[BobrilDeviceCategory["Mobile"] = 0] = "Mobile";
    BobrilDeviceCategory[BobrilDeviceCategory["Tablet"] = 1] = "Tablet";
    BobrilDeviceCategory[BobrilDeviceCategory["Desktop"] = 2] = "Desktop";
    BobrilDeviceCategory[BobrilDeviceCategory["LargeDesktop"] = 3] = "LargeDesktop";
})(BobrilDeviceCategory = exports.BobrilDeviceCategory || (exports.BobrilDeviceCategory = {}));
var media = null;
var breaks = [
    [414, 800, 900],
    [736, 1280, 1440] //landscape widths
];
function emitOnMediaChange() {
    media = null;
    exports.invalidate();
    return false;
}
var events = ["resize", "orientationchange"];
for (var i = 0; i < events.length; i++)
    addEvent(events[i], 10, emitOnMediaChange);
function accDeviceBreaks(newBreaks) {
    if (newBreaks != null) {
        breaks = newBreaks;
        emitOnMediaChange();
    }
    return breaks;
}
exports.accDeviceBreaks = accDeviceBreaks;
var viewport = window.document.documentElement;
var isAndroid = /Android/i.test(navigator.userAgent);
var weirdPortrait; // Some android devices provide reverted orientation
function getMedia() {
    if (media == undefined) {
        var w = viewport.clientWidth;
        var h = viewport.clientHeight;
        var o = window.orientation;
        var p = h >= w;
        if (o == undefined)
            o = p ? 0 : 90;
        else
            o = +o;
        if (isAndroid) {
            // without this keyboard change screen rotation because h or w changes
            var op = Math.abs(o) % 180 === 90;
            if (weirdPortrait == undefined) {
                weirdPortrait = op === p;
            }
            else {
                p = op === weirdPortrait;
            }
        }
        var device = 0;
        while (w > breaks[+!p][device])
            device++;
        media = {
            width: w,
            height: h,
            orientation: o,
            deviceCategory: device,
            portrait: p,
            dppx: window.devicePixelRatio
        };
    }
    return media;
}
exports.getMedia = getMedia;
exports.asap = (function () {
    var callbacks = [];
    function executeCallbacks() {
        var cbList = callbacks;
        callbacks = [];
        for (var i = 0, len = cbList.length; i < len; i++) {
            cbList[i]();
        }
    }
    // Mainly IE11, fastest async
    if (window.MutationObserver) {
        var hiddenDiv = document.createElement("div");
        new MutationObserver(executeCallbacks).observe(hiddenDiv, {
            attributes: true
        });
        return function (callback) {
            if (!callbacks.length) {
                hiddenDiv.setAttribute("yes", "no");
            }
            callbacks.push(callback);
        };
        // All other browsers
    }
    else {
        var timeout;
        var timeoutFn = window.setImmediate || setTimeout;
        return function (callback) {
            callbacks.push(callback);
            if (!timeout) {
                timeout = timeoutFn(function () {
                    timeout = undefined;
                    executeCallbacks();
                }, 0);
            }
        };
    }
})();
if (!window.Promise) {
    (function () {
        // Polyfill for Function.prototype.bind
        function bind(fn, thisArg) {
            return function () {
                fn.apply(thisArg, arguments);
            };
        }
        function handle(deferred) {
            var _this = this;
            if (this.s /*tate*/ === null) {
                this.d /*eferreds*/
                    .push(deferred);
                return;
            }
            exports.asap(function () {
                var cb = _this.s /*tate*/ ? deferred[0] : deferred[1];
                if (cb == undefined) {
                    (_this.s /*tate*/ ? deferred[2] : deferred[3])(_this.v /*alue*/);
                    return;
                }
                var ret;
                try {
                    ret = cb(_this.v /*alue*/);
                }
                catch (e) {
                    deferred[3](e);
                    return;
                }
                deferred[2](ret);
            });
        }
        function finale() {
            for (var i = 0, len = this.d /*eferreds*/.length; i < len; i++) {
                handle.call(this, this.d /*eferreds*/[i]);
            }
            this.d /*eferreds*/ = null;
        }
        function reject(newValue) {
            this.s /*tate*/ = false;
            this.v /*alue*/ = newValue;
            finale.call(this);
        }
        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(fn, onFulfilled, onRejected) {
            var done = false;
            try {
                fn(function (value) {
                    if (done)
                        return;
                    done = true;
                    onFulfilled(value);
                }, function (reason) {
                    if (done)
                        return;
                    done = true;
                    onRejected(reason);
                });
            }
            catch (ex) {
                if (done)
                    return;
                done = true;
                onRejected(ex);
            }
        }
        function resolve(newValue) {
            try {
                //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
                if (newValue === this)
                    throw new TypeError("Promise self resolve");
                if (Object(newValue) === newValue) {
                    var then = newValue.then;
                    if (typeof then === "function") {
                        doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                        return;
                    }
                }
                this.s /*tate*/ = true;
                this.v /*alue*/ = newValue;
                finale.call(this);
            }
            catch (e) {
                reject.call(this, e);
            }
        }
        function Promise(fn) {
            this.s /*tate*/ = null;
            this.v /*alue*/ = null;
            this.d /*eferreds*/ = [];
            doResolve(fn, bind(resolve, this), bind(reject, this));
        }
        Promise.prototype.then = function (onFulfilled, onRejected) {
            var me = this;
            return new Promise(function (resolve, reject) {
                handle.call(me, [onFulfilled, onRejected, resolve, reject]);
            });
        };
        Promise.prototype["catch"] = function (onRejected) {
            return this.then(undefined, onRejected);
        };
        Promise.all = function () {
            var args = [].slice.call(arguments.length === 1 && exports.isArray(arguments[0]) ? arguments[0] : arguments);
            return new Promise(function (resolve, reject) {
                if (args.length === 0) {
                    resolve(args);
                    return;
                }
                var remaining = args.length;
                function res(i, val) {
                    try {
                        if (val && (typeof val === "object" || typeof val === "function")) {
                            var then = val.then;
                            if (typeof then === "function") {
                                then.call(val, function (val) {
                                    res(i, val);
                                }, reject);
                                return;
                            }
                        }
                        args[i] = val;
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    }
                    catch (ex) {
                        reject(ex);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };
        Promise.resolve = function (value) {
            if (value && typeof value === "object" && value.constructor === Promise) {
                return value;
            }
            return new Promise(function (resolve) {
                resolve(value);
            });
        };
        Promise.reject = function (value) {
            return new Promise(function (_resolve, reject) {
                reject(value);
            });
        };
        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                for (var i = 0, len = values.length; i < len; i++) {
                    values[i].then(resolve, reject);
                }
            });
        };
        window["Promise"] = Promise;
    })();
}
var bValue = "b$value";
var bSelectionStart = "b$selStart";
var bSelectionEnd = "b$selEnd";
var tValue = "value";
function isCheckboxLike(el) {
    var t = el.type;
    return t === "checkbox" || t === "radio";
}
function stringArrayEqual(a1, a2) {
    var l = a1.length;
    if (l !== a2.length)
        return false;
    for (var j = 0; j < l; j++) {
        if (a1[j] !== a2[j])
            return false;
    }
    return true;
}
function stringArrayContains(a, v) {
    for (var j = 0; j < a.length; j++) {
        if (a[j] === v)
            return true;
    }
    return false;
}
function selectedArray(options) {
    var res = [];
    for (var j = 0; j < options.length; j++) {
        if (options[j].selected)
            res.push(options[j].value);
    }
    return res;
}
var prevSetValueCallback = setSetValue(function (el, node, newValue, oldValue) {
    var tagName = el.tagName;
    var isSelect = tagName === "SELECT";
    var isInput = tagName === "INPUT" || tagName === "TEXTAREA";
    if (!isInput && !isSelect) {
        prevSetValueCallback(el, node, newValue, oldValue);
        return;
    }
    if (node.ctx === undefined) {
        node.ctx = { data: undefined, me: node };
        node.component = emptyComponent;
    }
    if (oldValue === undefined) {
        node.ctx[bValue] = newValue;
    }
    var isMultiSelect = isSelect && el.multiple;
    var emitDiff = false;
    if (isMultiSelect) {
        var options = el.options;
        var currentMulti = selectedArray(options);
        if (!stringArrayEqual(newValue, currentMulti)) {
            if (oldValue === undefined ||
                stringArrayEqual(currentMulti, oldValue) ||
                !stringArrayEqual(newValue, node.ctx[bValue])) {
                for (var j = 0; j < options.length; j++) {
                    options[j].selected = stringArrayContains(newValue, options[j].value);
                }
                currentMulti = selectedArray(options);
                if (stringArrayEqual(currentMulti, newValue)) {
                    emitDiff = true;
                }
            }
            else {
                emitDiff = true;
            }
        }
    }
    else if (isInput || isSelect) {
        if (isInput && isCheckboxLike(el)) {
            var currentChecked = el.checked;
            if (newValue !== currentChecked) {
                if (oldValue === undefined || currentChecked === oldValue || newValue !== node.ctx[bValue]) {
                    el.checked = newValue;
                }
                else {
                    emitDiff = true;
                }
            }
        }
        else {
            var isCombobox = isSelect && el.size < 2;
            var currentValue = el[tValue];
            if (newValue !== currentValue) {
                if (oldValue === undefined || currentValue === oldValue || newValue !== node.ctx[bValue]) {
                    if (isSelect) {
                        if (newValue === "") {
                            el.selectedIndex = isCombobox ? 0 : -1;
                        }
                        else {
                            el[tValue] = newValue;
                        }
                        if (newValue !== "" || isCombobox) {
                            currentValue = el[tValue];
                            if (newValue !== currentValue) {
                                emitDiff = true;
                            }
                        }
                    }
                    else {
                        el[tValue] = newValue;
                    }
                }
                else {
                    emitDiff = true;
                }
            }
        }
    }
    if (emitDiff) {
        emitOnChange(undefined, el, node);
    }
    else {
        node.ctx[bValue] = newValue;
    }
});
function emitOnChange(ev, target, node) {
    if (target && target.nodeName === "OPTION") {
        target = document.activeElement;
        node = deref(target);
    }
    if (!node) {
        return false;
    }
    if (node.ctx === undefined) {
        node.ctx = { data: undefined, me: node };
        node.component = emptyComponent;
    }
    var ctx = node.ctx;
    var tagName = target.tagName;
    var isSelect = tagName === "SELECT";
    var isMultiSelect = isSelect && target.multiple;
    if (isMultiSelect) {
        var vs = selectedArray(target.options);
        if (!stringArrayEqual(ctx[bValue], vs)) {
            ctx[bValue] = vs;
            emitOnInput(node, vs);
        }
    }
    else if (isCheckboxLike(target)) {
        // Postpone change event so onClick will be processed before it
        if (ev && ev.type === "change") {
            setTimeout(function () {
                emitOnChange(undefined, target, node);
            }, 10);
            return false;
        }
        if (target.type === "radio") {
            var radios = document.getElementsByName(target.name);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                var radioNode = deref(radio);
                if (!radioNode)
                    continue;
                var radioCtx = radioNode.ctx;
                var vrb = radio.checked;
                if (radioCtx[bValue] !== vrb) {
                    radioCtx[bValue] = vrb;
                    emitOnInput(radioNode, vrb);
                }
            }
        }
        else {
            var vb = target.checked;
            if (ctx[bValue] !== vb) {
                ctx[bValue] = vb;
                emitOnInput(node, vb);
            }
        }
    }
    else {
        var v = target.value;
        if (ctx[bValue] !== v) {
            ctx[bValue] = v;
            emitOnInput(node, v);
        }
        var sStart = target.selectionStart;
        var sEnd = target.selectionEnd;
        var sDir = target.selectionDirection;
        var swap = false;
        var oStart = ctx[bSelectionStart];
        if (sDir == undefined) {
            if (sEnd === oStart)
                swap = true;
        }
        else if (sDir === "backward") {
            swap = true;
        }
        if (swap) {
            var s = sStart;
            sStart = sEnd;
            sEnd = s;
        }
        emitOnSelectionChange(node, sStart, sEnd);
    }
    return false;
}
function emitOnInput(node, value) {
    var prevCtx = currentCtxWithEvents;
    var ctx = node.ctx;
    var component = node.component;
    currentCtxWithEvents = ctx;
    var hasProp = node.attrs && node.attrs[bValue];
    if (isFunction(hasProp))
        hasProp(value);
    var hasOnChange = component && component.onChange;
    if (isFunction(hasOnChange))
        hasOnChange(ctx, value);
    currentCtxWithEvents = prevCtx;
    bubble(node, "onInput", { target: node, value: value });
}
function emitOnSelectionChange(node, start, end) {
    var c = node.component;
    var ctx = node.ctx;
    if (c && (ctx[bSelectionStart] !== start || ctx[bSelectionEnd] !== end)) {
        ctx[bSelectionStart] = start;
        ctx[bSelectionEnd] = end;
        bubble(node, "onSelectionChange", {
            target: node,
            startPosition: start,
            endPosition: end
        });
    }
}
function select(node, start, end) {
    if (end === void 0) { end = start; }
    node.element.setSelectionRange(Math.min(start, end), Math.max(start, end), start > end ? "backward" : "forward");
    emitOnSelectionChange(node, start, end);
}
exports.select = select;
function emitOnMouseChange(ev, _target, _node) {
    var f = focused();
    if (f)
        emitOnChange(ev, f.element, f);
    return false;
}
// click here must have lower priority (higher number) over mouse handlers
var events = ["input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change"];
for (var i = 0; i < events.length; i++)
    addEvent(events[i], 10, emitOnChange);
var mouseEvents = ["!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel"];
for (var i = 0; i < mouseEvents.length; i++)
    addEvent(mouseEvents[i], 2, emitOnMouseChange);
function buildParam(ev) {
    return {
        target: undefined,
        shift: ev.shiftKey,
        ctrl: ev.ctrlKey,
        alt: ev.altKey,
        meta: ev.metaKey || false,
        which: ev.which || ev.keyCode
    };
}
function emitOnKeyDown(ev, _target, node) {
    if (!node)
        return false;
    var param = buildParam(ev);
    if (bubble(node, "onKeyDown", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function emitOnKeyUp(ev, _target, node) {
    if (!node)
        return false;
    var param = buildParam(ev);
    if (bubble(node, "onKeyUp", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function emitOnKeyPress(ev, _target, node) {
    if (!node)
        return false;
    if (ev.which === 0 || // don't want special key presses
        ev.altKey // Ignore Alt+num in Firefox
    )
        return false;
    var param = { charCode: ev.which || ev.keyCode };
    if (bubble(node, "onKeyPress", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
addEvent("keydown", 50, emitOnKeyDown);
addEvent("keyup", 50, emitOnKeyUp);
addEvent("keypress", 50, emitOnKeyPress);
var BobrilPointerType;
(function (BobrilPointerType) {
    BobrilPointerType[BobrilPointerType["Mouse"] = 0] = "Mouse";
    BobrilPointerType[BobrilPointerType["Touch"] = 1] = "Touch";
    BobrilPointerType[BobrilPointerType["Pen"] = 2] = "Pen";
})(BobrilPointerType = exports.BobrilPointerType || (exports.BobrilPointerType = {}));
var MoveOverIsNotTap = 13;
var TapShouldBeShorterThanMs = 750;
var MaxBustDelay = 500;
var MaxBustDelayForIE = 800;
var BustDistance = 50;
var ownerCtx = null;
var invokingOwner;
var onClickText = "onClick";
var onDoubleClickText = "onDoubleClick";
// PureFuncs: isMouseOwner, isMouseOwnerEvent
function isMouseOwner(ctx) {
    return ownerCtx === ctx;
}
exports.isMouseOwner = isMouseOwner;
function isMouseOwnerEvent() {
    return invokingOwner;
}
exports.isMouseOwnerEvent = isMouseOwnerEvent;
function registerMouseOwner(ctx) {
    ownerCtx = ctx;
}
exports.registerMouseOwner = registerMouseOwner;
function releaseMouseOwner() {
    ownerCtx = null;
}
exports.releaseMouseOwner = releaseMouseOwner;
function invokeMouseOwner(handlerName, param) {
    if (ownerCtx == undefined) {
        return false;
    }
    var c = ownerCtx.me.component;
    var handler = c[handlerName];
    if (!handler) {
        // no handler available
        return false;
    }
    invokingOwner = true;
    var prevCtx = currentCtxWithEvents;
    currentCtxWithEvents = ownerCtx;
    var stop = handler.call(c, ownerCtx, param);
    currentCtxWithEvents = prevCtx;
    invokingOwner = false;
    return stop;
}
function hasPointerEventsNoneB(node) {
    while (node) {
        var s = node.style;
        if (s) {
            var e = s.pointerEvents;
            if (e !== undefined) {
                if (e === "none")
                    return true;
                return false;
            }
        }
        node = node.parent;
    }
    return false;
}
function revertVisibilityChanges(hiddenEls) {
    if (hiddenEls.length) {
        for (var i = hiddenEls.length - 1; i >= 0; --i) {
            hiddenEls[i].t.style.visibility = hiddenEls[i].p;
        }
        return true;
    }
    return false;
}
function pushAndHide(hiddenEls, t) {
    hiddenEls.push({ t: t, p: t.style.visibility });
    t.style.visibility = "hidden";
}
function addEvent5(name, callback) {
    addEvent(name, 5, callback);
}
var pointersEventNames = ["PointerDown", "PointerMove", "PointerUp", "PointerCancel"];
var i;
function type2Bobril(t) {
    if (t === "mouse" || t === 4)
        return BobrilPointerType.Mouse;
    if (t === "pen" || t === 3)
        return BobrilPointerType.Pen;
    return BobrilPointerType.Touch;
}
function pointerEventsNoneFix(x, y, target, node) {
    var hiddenEls = [];
    var t = target;
    while (hasPointerEventsNoneB(node)) {
        pushAndHide(hiddenEls, t);
        t = document.elementFromPoint(x, y);
        node = deref(t);
    }
    revertVisibilityChanges(hiddenEls);
    return [t, node];
}
function buildHandlerPointer(name) {
    return function handlePointerDown(ev, target, node) {
        target = document.elementFromPoint(ev.clientX, ev.clientY);
        node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var button = ev.button + 1;
        var type = type2Bobril(ev.pointerType);
        var buttons = ev.buttons;
        if (button === 0 && type === BobrilPointerType.Mouse && buttons) {
            button = 1;
            while (!(buttons & 1)) {
                buttons = buttons >> 1;
                button++;
            }
        }
        var param = {
            target: node,
            id: ev.pointerId,
            cancelable: normalizeCancelable(ev),
            type: type,
            x: ev.clientX,
            y: ev.clientY,
            button: button,
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            count: ev.detail
        };
        if (emitEvent("!" + name, param, target, node)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function buildHandlerTouch(name) {
    return function handlePointerDown(ev, target, node) {
        var preventDef = false;
        for (var i = 0; i < ev.changedTouches.length; i++) {
            var t = ev.changedTouches[i];
            target = document.elementFromPoint(t.clientX, t.clientY);
            node = deref(target);
            var param = {
                target: node,
                id: t.identifier + 2,
                cancelable: normalizeCancelable(ev),
                type: BobrilPointerType.Touch,
                x: t.clientX,
                y: t.clientY,
                button: 1,
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail
            };
            if (emitEvent("!" + name, param, target, node))
                preventDef = true;
        }
        if (preventDef) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function buildHandlerMouse(name) {
    return function handlePointer(ev, target, node) {
        target = document.elementFromPoint(ev.clientX, ev.clientY);
        node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var param = {
            target: node,
            id: 1,
            type: BobrilPointerType.Mouse,
            cancelable: normalizeCancelable(ev),
            x: ev.clientX,
            y: ev.clientY,
            button: decodeButton(ev),
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            count: ev.detail
        };
        if (emitEvent("!" + name, param, target, node)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function listenMouse() {
    addEvent5("mousedown", buildHandlerMouse(pointersEventNames[0] /*"PointerDown"*/));
    addEvent5("mousemove", buildHandlerMouse(pointersEventNames[1] /*"PointerMove"*/));
    addEvent5("mouseup", buildHandlerMouse(pointersEventNames[2] /*"PointerUp"*/));
}
if (window.ontouchstart !== undefined) {
    addEvent5("touchstart", buildHandlerTouch(pointersEventNames[0] /*"PointerDown"*/));
    addEvent5("touchmove", buildHandlerTouch(pointersEventNames[1] /*"PointerMove"*/));
    addEvent5("touchend", buildHandlerTouch(pointersEventNames[2] /*"PointerUp"*/));
    addEvent5("touchcancel", buildHandlerTouch(pointersEventNames[3] /*"PointerCancel"*/));
    listenMouse();
}
else if (window.onpointerdown !== undefined) {
    for (i = 0; i < 4 /*pointersEventNames.length*/; i++) {
        var name = pointersEventNames[i];
        addEvent5(name.toLowerCase(), buildHandlerPointer(name));
    }
}
else if (window.onmspointerdown !== undefined) {
    for (i = 0; i < 4 /*pointersEventNames.length*/; i++) {
        var name = pointersEventNames[i];
        addEvent5("@MS" + name, buildHandlerPointer(name));
    }
}
else {
    listenMouse();
}
for (var j = 0; j < 4 /*pointersEventNames.length*/; j++) {
    (function (name) {
        var onName = "on" + name;
        addEvent("!" + name, 50, function (ev, _target, node) {
            return invokeMouseOwner(onName, ev) || bubble(node, onName, ev) != undefined;
        });
    })(pointersEventNames[j]);
}
var pointersDown = newHashObj();
var toBust = [];
var firstPointerDown = -1;
var firstPointerDownTime = 0;
var firstPointerDownX = 0;
var firstPointerDownY = 0;
var tapCanceled = false;
var lastMouseEv;
function diffLess(n1, n2, diff) {
    return Math.abs(n1 - n2) < diff;
}
var prevMousePath = [];
function revalidateMouseIn() {
    if (lastMouseEv) {
        mouseEnterAndLeave(lastMouseEv);
        handlePointerMove(lastMouseEv, undefined, deref(document.elementFromPoint(lastMouseEv.x, lastMouseEv.y)));
    }
}
exports.revalidateMouseIn = revalidateMouseIn;
function mouseEnterAndLeave(ev) {
    lastMouseEv = ev;
    var t = document.elementFromPoint(ev.x, ev.y);
    var toPath = vdomPath(t);
    var node = toPath.length == 0 ? undefined : toPath[toPath.length - 1];
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(ev.x, ev.y, t, node == undefined ? undefined : node);
        t = fixed[0];
        toPath = vdomPath(t);
    }
    bubble(node, "onMouseOver", ev);
    var common = 0;
    while (common < prevMousePath.length && common < toPath.length && prevMousePath[common] === toPath[common])
        common++;
    var n;
    var c;
    var i = prevMousePath.length;
    if (i > 0 && (i > common || i != toPath.length)) {
        n = prevMousePath[i - 1];
        if (n) {
            c = n.component;
            if (c && c.onMouseOut)
                c.onMouseOut(n.ctx, ev);
        }
    }
    while (i > common) {
        i--;
        n = prevMousePath[i];
        if (n) {
            c = n.component;
            if (c && c.onMouseLeave)
                c.onMouseLeave(n.ctx, ev);
        }
    }
    while (i < toPath.length) {
        n = toPath[i];
        if (n) {
            c = n.component;
            if (c && c.onMouseEnter)
                c.onMouseEnter(n.ctx, ev);
        }
        i++;
    }
    prevMousePath = toPath;
    if (i > 0 && (i > common || i != prevMousePath.length)) {
        n = prevMousePath[i - 1];
        if (n) {
            c = n.component;
            if (c && c.onMouseIn)
                c.onMouseIn(n.ctx, ev);
        }
    }
    return false;
}
function noPointersDown() {
    return Object.keys(pointersDown).length === 0;
}
function bustingPointerDown(ev, _target, _node) {
    if (firstPointerDown === -1 && noPointersDown()) {
        firstPointerDown = ev.id;
        firstPointerDownTime = exports.now();
        firstPointerDownX = ev.x;
        firstPointerDownY = ev.y;
        tapCanceled = false;
        mouseEnterAndLeave(ev);
    }
    pointersDown[ev.id] = ev.type;
    if (firstPointerDown !== ev.id) {
        tapCanceled = true;
    }
    return false;
}
function bustingPointerMove(ev, target, node) {
    // Browser forgot to send mouse up? Let's fix it
    if (ev.type === BobrilPointerType.Mouse && ev.button === 0 && pointersDown[ev.id] != null) {
        ev.button = 1;
        emitEvent("!PointerUp", ev, target, node);
        ev.button = 0;
    }
    if (firstPointerDown === ev.id) {
        mouseEnterAndLeave(ev);
        if (!diffLess(firstPointerDownX, ev.x, MoveOverIsNotTap) ||
            !diffLess(firstPointerDownY, ev.y, MoveOverIsNotTap))
            tapCanceled = true;
    }
    else if (noPointersDown()) {
        mouseEnterAndLeave(ev);
    }
    return false;
}
var clickingSpreeStart = 0;
var clickingSpreeCount = 0;
function shouldPreventClickingSpree(clickCount) {
    if (clickingSpreeCount == 0)
        return false;
    var n = exports.now();
    if (n < clickingSpreeStart + 1000 && clickCount >= clickingSpreeCount) {
        clickingSpreeStart = n;
        clickingSpreeCount = clickCount;
        return true;
    }
    clickingSpreeCount = 0;
    return false;
}
function preventClickingSpree() {
    clickingSpreeCount = 2;
    clickingSpreeStart = exports.now();
}
exports.preventClickingSpree = preventClickingSpree;
function bustingPointerUp(ev, target, node) {
    delete pointersDown[ev.id];
    if (firstPointerDown == ev.id) {
        mouseEnterAndLeave(ev);
        firstPointerDown = -1;
        if (ev.type == BobrilPointerType.Touch && !tapCanceled) {
            if (exports.now() - firstPointerDownTime < TapShouldBeShorterThanMs) {
                emitEvent("!PointerCancel", ev, target, node);
                shouldPreventClickingSpree(1);
                var handled = invokeMouseOwner(onClickText, ev) || bubble(node, onClickText, ev) != null;
                var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
                toBust.push([ev.x, ev.y, exports.now() + delay, handled ? 1 : 0]);
                return handled;
            }
        }
        else if (tapCanceled) {
            exports.ignoreClick(ev.x, ev.y);
        }
    }
    return false;
}
function bustingPointerCancel(ev, _target, _node) {
    delete pointersDown[ev.id];
    if (firstPointerDown == ev.id) {
        firstPointerDown = -1;
    }
    return false;
}
function bustingClick(ev, _target, _node) {
    var n = exports.now();
    for (var i = 0; i < toBust.length; i++) {
        var j = toBust[i];
        if (j[2] < n) {
            toBust.splice(i, 1);
            i--;
            continue;
        }
        if (diffLess(j[0], ev.clientX, BustDistance) && diffLess(j[1], ev.clientY, BustDistance)) {
            toBust.splice(i, 1);
            if (j[3])
                preventDefault(ev);
            return true;
        }
    }
    return false;
}
var bustingEventNames = ["!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click"];
var bustingEventHandlers = [
    bustingPointerDown,
    bustingPointerMove,
    bustingPointerUp,
    bustingPointerCancel,
    bustingClick
];
for (var i = 0; i < 5 /*bustingEventNames.length*/; i++) {
    addEvent(bustingEventNames[i], 3, bustingEventHandlers[i]);
}
function createHandlerMouse(handlerName) {
    return function (ev, _target, node) {
        if (firstPointerDown != ev.id && !noPointersDown())
            return false;
        if (invokeMouseOwner(handlerName, ev) || bubble(node, handlerName, ev)) {
            return true;
        }
        return false;
    };
}
var mouseHandlerNames = ["Down", "Move", "Up", "Up"];
for (var i = 0; i < 4; i++) {
    addEvent(bustingEventNames[i], 80, createHandlerMouse("onMouse" + mouseHandlerNames[i]));
}
function decodeButton(ev) {
    return ev.which || ev.button;
}
function normalizeCancelable(ev) {
    var c = ev.cancelable;
    return !isBoolean(c) || c;
}
function createHandler(handlerName, allButtons) {
    return function (ev, _target, node) {
        var button = decodeButton(ev) || 1;
        // Ignore non left mouse click/dblclick event, but not for contextmenu event
        if (!allButtons && button !== 1)
            return false;
        var param = {
            target: node,
            x: ev.clientX,
            y: ev.clientY,
            button: button,
            cancelable: normalizeCancelable(ev),
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            count: ev.detail || 1
        };
        if (handlerName == onDoubleClickText)
            param.count = 2;
        if (shouldPreventClickingSpree(param.count) ||
            invokeMouseOwner(handlerName, param) ||
            bubble(node, handlerName, param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    };
}
function nodeOnPoint(x, y) {
    var target = document.elementFromPoint(x, y);
    var node = deref(target);
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(x, y, target, node);
        node = fixed[1];
    }
    return node;
}
exports.nodeOnPoint = nodeOnPoint;
function handleSelectStart(ev, _target, node) {
    while (node) {
        var s = node.style;
        if (s) {
            var us = s.userSelect;
            if (us === "none") {
                preventDefault(ev);
                return true;
            }
            if (us) {
                break;
            }
        }
        node = node.parent;
    }
    return false;
}
addEvent5("selectstart", handleSelectStart);
// click must have higher priority over onchange detection
addEvent5("^click", createHandler(onClickText));
addEvent5("^dblclick", createHandler(onDoubleClickText));
addEvent5("contextmenu", createHandler("onContextMenu", true));
var wheelSupport = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
function handleMouseWheel(ev, target, node) {
    if (hasPointerEventsNoneB(node)) {
        var fixed = pointerEventsNoneFix(ev.x, ev.y, target, node);
        target = fixed[0];
        node = fixed[1];
    }
    var button = ev.button + 1;
    var buttons = ev.buttons;
    if (button === 0 && buttons) {
        button = 1;
        while (!(buttons & 1)) {
            buttons = buttons >> 1;
            button++;
        }
    }
    var dx = 0, dy;
    if (wheelSupport == "mousewheel") {
        dy = (-1 / 40) * ev.wheelDelta;
        ev.wheelDeltaX && (dx = (-1 / 40) * ev.wheelDeltaX);
    }
    else {
        dx = ev.deltaX;
        dy = ev.deltaY;
    }
    var param = {
        target: node,
        dx: dx,
        dy: dy,
        x: ev.clientX,
        y: ev.clientY,
        cancelable: normalizeCancelable(ev),
        button: button,
        shift: ev.shiftKey,
        ctrl: ev.ctrlKey,
        alt: ev.altKey,
        meta: ev.metaKey || false,
        count: ev.detail
    };
    if (invokeMouseOwner("onMouseWheel", param) || bubble(node, "onMouseWheel", param)) {
        preventDefault(ev);
        return true;
    }
    return false;
}
addEvent5(wheelSupport, handleMouseWheel);
exports.pointersDownCount = function () { return Object.keys(pointersDown).length; };
exports.firstPointerDownId = function () { return firstPointerDown; };
exports.ignoreClick = function (x, y) {
    var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
    toBust.push([x, y, exports.now() + delay, 1]);
};
// Bobril.Focus
var currentActiveElement = undefined;
var currentFocusedNode = undefined;
var nodeStack = [];
var focusChangeRunning = false;
function emitOnFocusChange(inFocus) {
    if (focusChangeRunning)
        return false;
    focusChangeRunning = true;
    while (true) {
        var newActiveElement = document.hasFocus() || inFocus ? document.activeElement : undefined;
        if (newActiveElement === currentActiveElement)
            break;
        currentActiveElement = newActiveElement;
        var newStack = vdomPath(currentActiveElement);
        var common = 0;
        while (common < nodeStack.length && common < newStack.length && nodeStack[common] === newStack[common])
            common++;
        var i = nodeStack.length - 1;
        var n;
        var c;
        if (i >= common) {
            n = nodeStack[i];
            bubble(n, "onBlur");
            i--;
        }
        while (i >= common) {
            n = nodeStack[i];
            if (n) {
                c = n.component;
                if (c && c.onFocusOut)
                    c.onFocusOut(n.ctx);
            }
            i--;
        }
        i = common;
        while (i + 1 < newStack.length) {
            n = newStack[i];
            if (n) {
                c = n.component;
                if (c && c.onFocusIn)
                    c.onFocusIn(n.ctx);
            }
            i++;
        }
        if (i < newStack.length) {
            n = newStack[i];
            bubble(n, "onFocus");
        }
        nodeStack = newStack;
        currentFocusedNode = nodeStack.length == 0 ? undefined : null2undefined(nodeStack[nodeStack.length - 1]);
    }
    focusChangeRunning = false;
    return false;
}
function emitOnFocusChangeDelayed() {
    setTimeout(function () { return emitOnFocusChange(false); }, 10);
    return false;
}
addEvent("^focus", 50, function () { return emitOnFocusChange(true); });
addEvent("^blur", 50, emitOnFocusChangeDelayed);
function focused() {
    return currentFocusedNode;
}
exports.focused = focused;
function focus(node, backwards) {
    if (node == undefined)
        return false;
    if (isString(node))
        return false;
    var style = node.style;
    if (style != null) {
        if (style.visibility === "hidden")
            return false;
        if (style.display === "none")
            return false;
    }
    var attrs = node.attrs;
    if (attrs != null) {
        var ti = attrs.tabindex;
        if (ti !== undefined || isNaturallyFocusable(node.tag, attrs)) {
            var el = node.element;
            el.focus();
            emitOnFocusChange(false);
            return true;
        }
    }
    var children = node.children;
    if (exports.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            if (focus(children[backwards ? children.length - 1 - i : i], backwards))
                return true;
        }
        return false;
    }
    return false;
}
exports.focus = focus;
// Bobril.Scroll
var callbacks = [];
function emitOnScroll(_ev, _target, node) {
    var info = {
        node: node
    };
    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](info);
    }
    captureBroadcast("onScroll", info);
    return false;
}
// capturing event to hear everything
addEvent("^scroll", 10, emitOnScroll);
function addOnScroll(callback) {
    callbacks.push(callback);
}
exports.addOnScroll = addOnScroll;
function removeOnScroll(callback) {
    for (var i = 0; i < callbacks.length; i++) {
        if (callbacks[i] === callback) {
            callbacks.splice(i, 1);
            return;
        }
    }
}
exports.removeOnScroll = removeOnScroll;
var isHtml = /^(?:html)$/i;
var isScrollOrAuto = /^(?:auto)$|^(?:scroll)$/i;
// inspired by https://github.com/litera/jquery-scrollintoview/blob/master/jquery.scrollintoview.js
function isScrollable(el) {
    var styles = window.getComputedStyle(el);
    var res = [true, true];
    if (!isHtml.test(el.nodeName)) {
        res[0] = isScrollOrAuto.test(styles.overflowX);
        res[1] = isScrollOrAuto.test(styles.overflowY);
    }
    res[0] = res[0] && el.scrollWidth > el.clientWidth;
    res[1] = res[1] && el.scrollHeight > el.clientHeight;
    return res;
}
exports.isScrollable = isScrollable;
// returns standard X,Y order
function getWindowScroll() {
    var left = window.pageXOffset;
    var top = window.pageYOffset;
    return [left, top];
}
exports.getWindowScroll = getWindowScroll;
// returns node offset on page in standard X,Y order
function nodePagePos(node) {
    var rect = getDomNode(node).getBoundingClientRect();
    var res = getWindowScroll();
    res[0] += rect.left;
    res[1] += rect.top;
    return res;
}
exports.nodePagePos = nodePagePos;
var CSSMatrix = /** @class */ (function () {
    function CSSMatrix(data) {
        this.data = data;
    }
    CSSMatrix.fromString = function (s) {
        var c = s.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
        if (c.length === 6) {
            c = [c[0], c[1], "0", "0", c[2], c[3], "0", "0", "0", "0", "1", "0", c[4], c[5], "0", "1"];
        }
        return new CSSMatrix([
            parseFloat(c[0]),
            parseFloat(c[4]),
            parseFloat(c[8]),
            parseFloat(c[12]),
            parseFloat(c[1]),
            parseFloat(c[5]),
            parseFloat(c[9]),
            parseFloat(c[13]),
            parseFloat(c[2]),
            parseFloat(c[6]),
            parseFloat(c[10]),
            parseFloat(c[14]),
            parseFloat(c[3]),
            parseFloat(c[7]),
            parseFloat(c[11]),
            parseFloat(c[15])
        ]);
    };
    CSSMatrix.identity = function () {
        return new CSSMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    };
    CSSMatrix.prototype.multiply = function (m) {
        var a = this.data;
        var b = m.data;
        return new CSSMatrix([
            a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
            a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
            a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
            a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15],
            a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
            a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
            a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
            a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15],
            a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
            a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
            a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
            a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15],
            a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12],
            a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
            a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
            a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]
        ]);
    };
    CSSMatrix.prototype.translate = function (tx, ty, tz) {
        var z = new CSSMatrix([1, 0, 0, tx, 0, 1, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]);
        return this.multiply(z);
    };
    CSSMatrix.prototype.inverse = function () {
        var m = this.data;
        var a = m[0];
        var b = m[1];
        var c = m[2];
        var d = m[4];
        var e = m[5];
        var f = m[6];
        var g = m[8];
        var h = m[9];
        var k = m[10];
        var A = e * k - f * h;
        var B = f * g - d * k;
        var C = d * h - e * g;
        var D = c * h - b * k;
        var E = a * k - c * g;
        var F = b * g - a * h;
        var G = b * f - c * e;
        var H = c * d - a * f;
        var K = a * e - b * d;
        var det = a * A + b * B + c * C;
        var X = new CSSMatrix([
            A / det,
            D / det,
            G / det,
            0,
            B / det,
            E / det,
            H / det,
            0,
            C / det,
            F / det,
            K / det,
            0,
            0,
            0,
            0,
            1
        ]);
        var Y = new CSSMatrix([1, 0, 0, -m[3], 0, 1, 0, -m[7], 0, 0, 1, -m[11], 0, 0, 0, 1]);
        return X.multiply(Y);
    };
    CSSMatrix.prototype.transformPoint = function (x, y) {
        var m = this.data;
        return [m[0] * x + m[1] * y + m[3], m[4] * x + m[5] * y + m[7]];
    };
    return CSSMatrix;
}());
function getTransformationMatrix(element) {
    var identity = CSSMatrix.identity();
    var transformationMatrix = identity;
    var x = element;
    var doc = x.ownerDocument.documentElement;
    while (x != undefined && x !== doc && x.nodeType != 1)
        x = x.parentNode;
    while (x != undefined && x !== doc) {
        var computedStyle = window.getComputedStyle(x, undefined);
        var c = CSSMatrix.fromString((computedStyle.transform ||
            computedStyle.OTransform ||
            computedStyle.WebkitTransform ||
            computedStyle.msTransform ||
            computedStyle.MozTransform ||
            "none").replace(/^none$/, "matrix(1,0,0,1,0,0)"));
        transformationMatrix = c.multiply(transformationMatrix);
        x = x.parentNode;
    }
    var w;
    var h;
    if ((element.nodeName + "").toLowerCase() === "svg") {
        var cs = getComputedStyle(element, undefined);
        w = parseFloat(cs.getPropertyValue("width")) || 0;
        h = parseFloat(cs.getPropertyValue("height")) || 0;
    }
    else {
        w = element.offsetWidth;
        h = element.offsetHeight;
    }
    var i = 4;
    var left = +Infinity;
    var top = +Infinity;
    while (--i >= 0) {
        var p = transformationMatrix.transformPoint(i === 0 || i === 1 ? 0 : w, i === 0 || i === 3 ? 0 : h);
        if (p[0] < left) {
            left = p[0];
        }
        if (p[1] < top) {
            top = p[1];
        }
    }
    var rect = element.getBoundingClientRect();
    transformationMatrix = identity.translate(rect.left - left, rect.top - top, 0).multiply(transformationMatrix);
    return transformationMatrix;
}
function convertPointFromClientToNode(node, pageX, pageY) {
    var element = getDomNode(node);
    if (element == undefined)
        element = document.body;
    return getTransformationMatrix(element)
        .inverse()
        .transformPoint(pageX, pageY);
}
exports.convertPointFromClientToNode = convertPointFromClientToNode;
// Bobril.Dnd
var DndOp;
(function (DndOp) {
    DndOp[DndOp["None"] = 0] = "None";
    DndOp[DndOp["Link"] = 1] = "Link";
    DndOp[DndOp["Copy"] = 2] = "Copy";
    DndOp[DndOp["Move"] = 3] = "Move";
})(DndOp = exports.DndOp || (exports.DndOp = {}));
var DndEnabledOps;
(function (DndEnabledOps) {
    DndEnabledOps[DndEnabledOps["None"] = 0] = "None";
    DndEnabledOps[DndEnabledOps["Link"] = 1] = "Link";
    DndEnabledOps[DndEnabledOps["Copy"] = 2] = "Copy";
    DndEnabledOps[DndEnabledOps["LinkCopy"] = 3] = "LinkCopy";
    DndEnabledOps[DndEnabledOps["Move"] = 4] = "Move";
    DndEnabledOps[DndEnabledOps["MoveLink"] = 5] = "MoveLink";
    DndEnabledOps[DndEnabledOps["MoveCopy"] = 6] = "MoveCopy";
    DndEnabledOps[DndEnabledOps["MoveCopyLink"] = 7] = "MoveCopyLink";
})(DndEnabledOps = exports.DndEnabledOps || (exports.DndEnabledOps = {}));
var lastDndId = 0;
var dnds = [];
var systemDnd = null;
var rootId = null;
var DndCtx = function (pointerId) {
    this.id = ++lastDndId;
    this.pointerid = pointerId;
    this.enabledOperations = DndEnabledOps.MoveCopyLink;
    this.operation = DndOp.None;
    this.started = false;
    this.beforeDrag = true;
    this.local = true;
    this.system = false;
    this.ended = false;
    this.cursor = null;
    this.overNode = undefined;
    this.targetCtx = null;
    this.dragView = undefined;
    this.startX = 0;
    this.startY = 0;
    this.distanceToStart = 10;
    this.x = 0;
    this.y = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.totalX = 0;
    this.totalY = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.shift = false;
    this.ctrl = false;
    this.alt = false;
    this.meta = false;
    this.data = newHashObj();
    if (pointerId >= 0)
        pointer2Dnd[pointerId] = this;
    dnds.push(this);
};
var draggingStyle = "b-dragging";
function lazyCreateRoot() {
    if (rootId == undefined) {
        var dd = document.documentElement;
        dd.classList.add(draggingStyle);
        rootId = addRoot(dndRootFactory);
    }
}
var DndComp = {
    render: function (ctx, me) {
        var dnd = ctx.data;
        me.tag = "div";
        me.style = { position: "absolute", left: dnd.x, top: dnd.y };
        me.children = dnd.dragView(dnd);
    }
};
function currentCursor() {
    var cursor = "no-drop";
    if (dnds.length !== 0) {
        var dnd = dnds[0];
        if (dnd.beforeDrag)
            return "";
        if (dnd.cursor != null)
            return dnd.cursor;
        if (dnd.system)
            return "";
        switch (dnd.operation) {
            case DndOp.Move:
                cursor = "move";
                break;
            case DndOp.Link:
                cursor = "alias";
                break;
            case DndOp.Copy:
                cursor = "copy";
                break;
        }
    }
    return cursor;
}
var DndRootComp = {
    render: function (_ctx, me) {
        var res = [];
        for (var i = 0; i < dnds.length; i++) {
            var dnd = dnds[i];
            if (dnd.beforeDrag)
                continue;
            if (dnd.dragView != null && (dnd.x != 0 || dnd.y != 0)) {
                res.push({ key: "" + dnd.id, data: dnd, component: DndComp });
            }
        }
        me.tag = "div";
        me.style = {
            position: "fixed",
            pointerEvents: "none",
            userSelect: "none",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        var dds = document.documentElement.style;
        var cur = currentCursor();
        if (cur) {
            if (dds.cursor !== cur)
                dds.setProperty("cursor", cur, "important");
        }
        else {
            dds.setProperty("cursor", "");
        }
        me.children = res;
    },
    onDrag: function (ctx) {
        exports.invalidate(ctx);
        return false;
    }
};
function dndRootFactory() {
    return { component: DndRootComp };
}
var dndProto = DndCtx.prototype;
dndProto.setOperation = function (operation) {
    this.operation = operation;
};
dndProto.setDragNodeView = function (view) {
    this.dragView = view;
};
dndProto.addData = function (type, data) {
    this.data[type] = data;
    return true;
};
dndProto.listData = function () {
    return Object.keys(this.data);
};
dndProto.hasData = function (type) {
    return this.data[type] !== undefined;
};
dndProto.getData = function (type) {
    return this.data[type];
};
dndProto.setEnabledOps = function (ops) {
    this.enabledOperations = ops;
};
dndProto.cancelDnd = function () {
    dndMoved(undefined, this);
    this.destroy();
};
dndProto.destroy = function () {
    this.ended = true;
    if (this.started)
        broadcast("onDragEnd", this);
    delete pointer2Dnd[this.pointerid];
    for (var i = 0; i < dnds.length; i++) {
        if (dnds[i] === this) {
            dnds.splice(i, 1);
            break;
        }
    }
    if (systemDnd === this) {
        systemDnd = null;
    }
    if (dnds.length === 0 && rootId != null) {
        removeRoot(rootId);
        rootId = null;
        var dd = document.documentElement;
        dd.classList.remove(draggingStyle);
        dd.style.setProperty("cursor", "");
    }
};
var pointer2Dnd = newHashObj();
function handlePointerDown(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (dnd) {
        dnd.cancelDnd();
    }
    if (ev.button <= 1) {
        dnd = new DndCtx(ev.id);
        dnd.startX = ev.x;
        dnd.startY = ev.y;
        dnd.lastX = ev.x;
        dnd.lastY = ev.y;
        dnd.overNode = node;
        updateDndFromPointerEvent(dnd, ev);
        var sourceCtx = bubble(node, "onDragStart", dnd);
        if (sourceCtx) {
            var htmlNode = getDomNode(sourceCtx.me);
            if (htmlNode == undefined) {
                dnd.destroy();
                return false;
            }
            dnd.started = true;
            var boundFn = htmlNode.getBoundingClientRect;
            if (boundFn) {
                var rect = boundFn.call(htmlNode);
                dnd.deltaX = rect.left - ev.x;
                dnd.deltaY = rect.top - ev.y;
            }
            if (dnd.distanceToStart <= 0) {
                dnd.beforeDrag = false;
                dndMoved(node, dnd);
            }
            lazyCreateRoot();
        }
        else {
            dnd.destroy();
        }
    }
    return false;
}
function dndMoved(node, dnd) {
    dnd.overNode = node;
    dnd.targetCtx = bubble(node, "onDragOver", dnd);
    if (dnd.targetCtx == undefined) {
        dnd.operation = DndOp.None;
    }
    broadcast("onDrag", dnd);
}
function updateDndFromPointerEvent(dnd, ev) {
    dnd.shift = ev.shift;
    dnd.ctrl = ev.ctrl;
    dnd.alt = ev.alt;
    dnd.meta = ev.meta;
    dnd.x = ev.x;
    dnd.y = ev.y;
}
function handlePointerMove(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    dnd.totalX += Math.abs(ev.x - dnd.lastX);
    dnd.totalY += Math.abs(ev.y - dnd.lastY);
    if (dnd.beforeDrag) {
        if (dnd.totalX + dnd.totalY <= dnd.distanceToStart) {
            dnd.lastX = ev.x;
            dnd.lastY = ev.y;
            return false;
        }
        dnd.beforeDrag = false;
    }
    updateDndFromPointerEvent(dnd, ev);
    dndMoved(node, dnd);
    dnd.lastX = ev.x;
    dnd.lastY = ev.y;
    return true;
}
function handlePointerUp(ev, _target, node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    if (!dnd.beforeDrag) {
        updateDndFromPointerEvent(dnd, ev);
        dndMoved(node, dnd);
        var t = dnd.targetCtx;
        if (t && bubble(t.me, "onDrop", dnd)) {
            dnd.destroy();
        }
        else {
            dnd.cancelDnd();
        }
        exports.ignoreClick(ev.x, ev.y);
        return true;
    }
    dnd.destroy();
    return false;
}
function handlePointerCancel(ev, _target, _node) {
    var dnd = pointer2Dnd[ev.id];
    if (!dnd)
        return false;
    if (dnd.system)
        return false;
    if (!dnd.beforeDrag) {
        dnd.cancelDnd();
    }
    else {
        dnd.destroy();
    }
    return false;
}
function updateFromNative(dnd, ev) {
    dnd.shift = ev.shiftKey;
    dnd.ctrl = ev.ctrlKey;
    dnd.alt = ev.altKey;
    dnd.meta = ev.metaKey;
    dnd.x = ev.clientX;
    dnd.y = ev.clientY;
    dnd.totalX += Math.abs(dnd.x - dnd.lastX);
    dnd.totalY += Math.abs(dnd.y - dnd.lastY);
    var node = nodeOnPoint(dnd.x, dnd.y); // Needed to correctly emulate pointerEvents:none
    dndMoved(node, dnd);
    dnd.lastX = dnd.x;
    dnd.lastY = dnd.y;
}
var effectAllowedTable = ["none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all"];
function handleDragStart(ev, _target, node) {
    var dnd = systemDnd;
    if (dnd != null) {
        dnd.destroy();
    }
    var activePointerIds = Object.keys(pointer2Dnd);
    if (activePointerIds.length > 0) {
        dnd = pointer2Dnd[activePointerIds[0]];
        dnd.system = true;
        systemDnd = dnd;
    }
    else {
        var startX = ev.clientX, startY = ev.clientY;
        dnd = new DndCtx(-1);
        dnd.system = true;
        systemDnd = dnd;
        dnd.x = startX;
        dnd.y = startY;
        dnd.lastX = startX;
        dnd.lastY = startY;
        dnd.startX = startX;
        dnd.startY = startY;
        var sourceCtx = bubble(node, "onDragStart", dnd);
        if (sourceCtx) {
            var htmlNode = getDomNode(sourceCtx.me);
            if (htmlNode == undefined) {
                dnd.destroy();
                return false;
            }
            dnd.started = true;
            var boundFn = htmlNode.getBoundingClientRect;
            if (boundFn) {
                var rect = boundFn.call(htmlNode);
                dnd.deltaX = rect.left - startX;
                dnd.deltaY = rect.top - startY;
            }
            lazyCreateRoot();
        }
        else {
            dnd.destroy();
            return false;
        }
    }
    dnd.beforeDrag = false;
    var eff = effectAllowedTable[dnd.enabledOperations];
    var dt = ev.dataTransfer;
    dt.effectAllowed = eff;
    if (dt.setDragImage) {
        var div = document.createElement("div");
        div.style.pointerEvents = "none";
        dt.setDragImage(div, 0, 0);
    }
    else {
        // For IE10 and IE11 hack to hide default drag element
        var style = ev.target.style;
        var opacityBackup = style.opacity;
        var widthBackup = style.width;
        var heightBackup = style.height;
        var paddingBackup = style.padding;
        style.opacity = "0";
        style.width = "0";
        style.height = "0";
        style.padding = "0";
        setTimeout(function () {
            style.opacity = opacityBackup;
            style.width = widthBackup;
            style.height = heightBackup;
            style.padding = paddingBackup;
        }, 0);
    }
    var data = dnd.data;
    var dataKeys = Object.keys(data);
    for (var i = 0; i < dataKeys.length; i++) {
        try {
            var k = dataKeys[i];
            var d = data[k];
            if (!isString(d))
                d = JSON.stringify(d);
            ev.dataTransfer.setData(k, d);
        }
        catch (e) {
            if (DEBUG)
                if (window.console)
                    console.log("Cannot set dnd data to " + dataKeys[i]);
        }
    }
    updateFromNative(dnd, ev);
    return false;
}
function setDropEffect(ev, op) {
    ev.dataTransfer.dropEffect = ["none", "link", "copy", "move"][op];
}
function handleDragOver(ev, _target, _node) {
    var dnd = systemDnd;
    if (dnd == undefined) {
        dnd = new DndCtx(-1);
        dnd.system = true;
        systemDnd = dnd;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        dnd.startX = dnd.x;
        dnd.startY = dnd.y;
        dnd.local = false;
        var dt = ev.dataTransfer;
        var eff = 0;
        var effectAllowed = undefined;
        try {
            effectAllowed = dt.effectAllowed;
        }
        catch (e) { }
        for (; eff < 7; eff++) {
            if (effectAllowedTable[eff] === effectAllowed)
                break;
        }
        dnd.enabledOperations = eff;
        var dtTypes = dt.types;
        if (dtTypes) {
            for (var i = 0; i < dtTypes.length; i++) {
                var tt = dtTypes[i];
                if (tt === "text/plain")
                    tt = "Text";
                else if (tt === "text/uri-list")
                    tt = "Url";
                dnd.data[tt] = null;
            }
        }
        else {
            if (dt.getData("Text") !== undefined)
                dnd.data["Text"] = null;
        }
    }
    updateFromNative(dnd, ev);
    setDropEffect(ev, dnd.operation);
    if (dnd.operation != DndOp.None) {
        preventDefault(ev);
        return true;
    }
    return false;
}
function handleDrag(ev, _target, _node) {
    var x = ev.clientX;
    var y = ev.clientY;
    var m = getMedia();
    if (systemDnd != null && ((x === 0 && y === 0) || x < 0 || y < 0 || x >= m.width || y >= m.height)) {
        systemDnd.x = 0;
        systemDnd.y = 0;
        systemDnd.operation = DndOp.None;
        broadcast("onDrag", systemDnd);
    }
    return true;
}
function handleDragEnd(_ev, _target, _node) {
    if (systemDnd != null) {
        systemDnd.destroy();
    }
    return false;
}
function handleDrop(ev, _target, _node) {
    var dnd = systemDnd;
    if (dnd == undefined)
        return false;
    dnd.x = ev.clientX;
    dnd.y = ev.clientY;
    if (!dnd.local) {
        var dataKeys = Object.keys(dnd.data);
        var dt = ev.dataTransfer;
        for (var i_10 = 0; i_10 < dataKeys.length; i_10++) {
            var k = dataKeys[i_10];
            var d;
            if (k === "Files") {
                d = [].slice.call(dt.files, 0); // What a useless FileList type! Get rid of it.
            }
            else {
                d = dt.getData(k);
            }
            dnd.data[k] = d;
        }
    }
    updateFromNative(dnd, ev);
    var t = dnd.targetCtx;
    if (t && bubble(t.me, "onDrop", dnd)) {
        setDropEffect(ev, dnd.operation);
        dnd.destroy();
        preventDefault(ev);
    }
    else {
        dnd.cancelDnd();
    }
    return true;
}
function justPreventDefault(ev, _target, _node) {
    preventDefault(ev);
    return true;
}
function handleDndSelectStart(ev, _target, _node) {
    if (dnds.length === 0)
        return false;
    preventDefault(ev);
    return true;
}
function anyActiveDnd() {
    for (var i_11 = 0; i_11 < dnds.length; i_11++) {
        var dnd = dnds[i_11];
        if (dnd.beforeDrag)
            continue;
        return dnd;
    }
    return undefined;
}
exports.anyActiveDnd = anyActiveDnd;
addEvent("!PointerDown", 4, handlePointerDown);
addEvent("!PointerMove", 4, handlePointerMove);
addEvent("!PointerUp", 4, handlePointerUp);
addEvent("!PointerCancel", 4, handlePointerCancel);
addEvent("selectstart", 4, handleDndSelectStart);
addEvent("dragstart", 5, handleDragStart);
addEvent("dragover", 5, handleDragOver);
addEvent("dragend", 5, handleDragEnd);
addEvent("drag", 5, handleDrag);
addEvent("drop", 5, handleDrop);
addEvent("dragenter", 5, justPreventDefault);
addEvent("dragleave", 5, justPreventDefault);
exports.getDnds = function () { return dnds; };
var RouteTransitionType;
(function (RouteTransitionType) {
    RouteTransitionType[RouteTransitionType["Push"] = 0] = "Push";
    RouteTransitionType[RouteTransitionType["Replace"] = 1] = "Replace";
    RouteTransitionType[RouteTransitionType["Pop"] = 2] = "Pop";
})(RouteTransitionType = exports.RouteTransitionType || (exports.RouteTransitionType = {}));
var waitingForPopHashChange = -1;
function emitOnHashChange() {
    if (waitingForPopHashChange >= 0)
        clearTimeout(waitingForPopHashChange);
    waitingForPopHashChange = -1;
    exports.invalidate();
    return false;
}
addEvent("hashchange", 10, emitOnHashChange);
var myAppHistoryDeepness = 0;
var programPath = "";
function push(path, inApp) {
    var l = window.location;
    if (inApp) {
        programPath = path;
        l.hash = path.substring(1);
        myAppHistoryDeepness++;
    }
    else {
        l.href = path;
    }
}
function replace(path, inApp) {
    var l = window.location;
    if (inApp) {
        programPath = path;
        l.replace(l.pathname + l.search + path);
    }
    else {
        l.replace(path);
    }
}
function pop(distance) {
    myAppHistoryDeepness -= distance;
    waitingForPopHashChange = setTimeout(emitOnHashChange, 50);
    window.history.go(-distance);
}
var rootRoutes;
var nameRouteMap = {};
function encodeUrl(url) {
    return encodeURIComponent(url).replace(/%20/g, "+");
}
exports.encodeUrl = encodeUrl;
function decodeUrl(url) {
    return decodeURIComponent(url.replace(/\+/g, " "));
}
exports.decodeUrl = decodeUrl;
function encodeUrlPath(path) {
    return String(path)
        .split("/")
        .map(encodeUrl)
        .join("/");
}
exports.encodeUrlPath = encodeUrlPath;
var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var compiledPatterns = {};
function compilePattern(pattern) {
    if (!(pattern in compiledPatterns)) {
        var paramNames = [];
        var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
            if (paramName) {
                paramNames.push(paramName);
                return "([^/]+)";
            }
            else if (match === "*") {
                paramNames.push("splat");
                return "(.*?)";
            }
            else {
                return "\\" + match;
            }
        });
        compiledPatterns[pattern] = {
            matcher: new RegExp("^" + source + "$", "i"),
            paramNames: paramNames
        };
    }
    return compiledPatterns[pattern];
}
// Extracts the portions of the given URL path that match the given pattern.
// Returns null if the pattern does not match the given path.
function extractParams(pattern, path) {
    var object = compilePattern(pattern);
    var match = decodeUrl(path).match(object.matcher);
    if (!match)
        return null;
    var params = {};
    var pn = object.paramNames;
    var l = pn.length;
    for (var i = 0; i < l; i++) {
        params[pn[i]] = match[i + 1];
    }
    return params;
}
// Returns a version of the given route path with params interpolated.
// Throws if there is a dynamic segment of the route path for which there is no param.
function injectParams(pattern, params) {
    params = params || {};
    var splatIndex = 0;
    return pattern.replace(paramInjectMatcher, function (_match, paramName) {
        paramName = paramName || "splat";
        // If param is optional don't check for existence
        if (paramName.slice(-1) !== "?") {
            if (params[paramName] == undefined)
                throw new Error('Missing "' + paramName + '" parameter for path "' + pattern + '"');
        }
        else {
            paramName = paramName.slice(0, -1);
            if (params[paramName] == undefined) {
                return "";
            }
        }
        var segment;
        if (paramName === "splat" && Array.isArray(params[paramName])) {
            segment = params[paramName][splatIndex++];
            if (segment == undefined)
                throw new Error("Missing splat # " + splatIndex + ' for path "' + pattern + '"');
        }
        else {
            segment = params[paramName];
        }
        return encodeUrlPath(segment);
    });
}
function findMatch(path, rs, outParams) {
    var l = rs.length;
    var notFoundRoute;
    var defaultRoute;
    var params;
    for (var i = 0; i < l; i++) {
        var r = rs[i];
        if (r.isNotFound) {
            notFoundRoute = r;
            continue;
        }
        if (r.isDefault) {
            defaultRoute = r;
            continue;
        }
        if (r.children) {
            var res = findMatch(path, r.children, outParams);
            if (res) {
                res.push(r);
                return res;
            }
        }
        if (r.url) {
            params = extractParams(r.url, path);
            if (params) {
                outParams.p = params;
                return [r];
            }
        }
    }
    if (defaultRoute) {
        params = extractParams(defaultRoute.url || "", path);
        if (params) {
            outParams.p = params;
            return [defaultRoute];
        }
    }
    if (notFoundRoute) {
        params = extractParams(notFoundRoute.url || "", path);
        if (params) {
            outParams.p = params;
            return [notFoundRoute];
        }
    }
    return undefined;
}
var activeRoutes = [];
var futureRoutes;
var activeParams = newHashObj();
var nodesArray = [];
var setterOfNodesArray = [];
var urlRegex = /.*(?:\:|\/).*/;
function isInApp(name) {
    return !urlRegex.test(name);
}
function isAbsolute(url) {
    return url[0] === "/";
}
function noop() {
    return undefined;
}
function getSetterOfNodesArray(idx) {
    while (idx >= setterOfNodesArray.length) {
        setterOfNodesArray.push((function (a, i) { return function (n) {
            if (n)
                a[i] = n;
        }; })(nodesArray, setterOfNodesArray.length));
    }
    return setterOfNodesArray[idx];
}
var firstRouting = true;
function rootNodeFactory() {
    if (waitingForPopHashChange >= 0)
        return undefined;
    var browserPath = window.location.hash;
    var path = browserPath.substr(1);
    if (!isAbsolute(path))
        path = "/" + path;
    var out = { p: {} };
    var matches = findMatch(path, rootRoutes, out) || [];
    if (firstRouting) {
        firstRouting = false;
        currentTransition = {
            inApp: true,
            type: RouteTransitionType.Pop,
            name: undefined,
            params: undefined
        };
        transitionState = -1;
        programPath = browserPath;
    }
    else {
        if (!currentTransition && matches.length > 0 && browserPath != programPath) {
            runTransition(createRedirectPush(matches[0].name, out.p));
        }
    }
    if (currentTransition && currentTransition.type === RouteTransitionType.Pop && transitionState < 0) {
        programPath = browserPath;
        currentTransition.inApp = true;
        if (currentTransition.name == undefined && matches.length > 0) {
            currentTransition.name = matches[0].name;
            currentTransition.params = out.p;
            nextIteration();
            if (currentTransition != null)
                return undefined;
        }
        else
            return undefined;
    }
    if (currentTransition == undefined) {
        activeRoutes = matches;
        while (nodesArray.length > activeRoutes.length)
            nodesArray.pop();
        while (nodesArray.length < activeRoutes.length)
            nodesArray.push(undefined);
        activeParams = out.p;
    }
    var fn = noop;
    for (var i = 0; i < activeRoutes.length; i++) {
        (function (fnInner, r, routeParams, i) {
            fn = function (otherData) {
                var data = r.data || {};
                exports.assign(data, otherData);
                data.activeRouteHandler = fnInner;
                data.routeParams = routeParams;
                var handler = r.handler;
                var res;
                if (isFunction(handler)) {
                    res = { key: undefined, ref: undefined, children: handler(data) };
                }
                else {
                    res = {
                        key: undefined,
                        ref: undefined,
                        data: data,
                        component: handler
                    };
                }
                if (r.keyBuilder)
                    res.key = r.keyBuilder(routeParams);
                else
                    res.key = r.name;
                res.ref = getSetterOfNodesArray(i);
                return res;
            };
        })(fn, activeRoutes[i], activeParams, i);
    }
    return fn();
}
function joinPath(p1, p2) {
    if (isAbsolute(p2))
        return p2;
    if (p1[p1.length - 1] === "/")
        return p1 + p2;
    return p1 + "/" + p2;
}
function registerRoutes(url, rs) {
    var l = rs.length;
    for (var i = 0; i < l; i++) {
        var r = rs[i];
        var u = url;
        var name = r.name;
        if (!name && url === "/") {
            name = "root";
            r.name = name;
            nameRouteMap[name] = r;
        }
        else if (name) {
            nameRouteMap[name] = r;
            u = joinPath(u, name);
        }
        if (r.isDefault) {
            u = url;
        }
        else if (r.isNotFound) {
            u = joinPath(url, "*");
        }
        else if (r.url) {
            u = joinPath(url, r.url);
        }
        r.url = u;
        if (r.children)
            registerRoutes(u, r.children);
    }
}
function routes(root) {
    if (!exports.isArray(root)) {
        root = [root];
    }
    registerRoutes("/", root);
    rootRoutes = root;
    init(rootNodeFactory);
}
exports.routes = routes;
function route(config, nestedRoutes) {
    return {
        name: config.name,
        url: config.url,
        data: config.data,
        handler: config.handler,
        keyBuilder: config.keyBuilder,
        children: nestedRoutes
    };
}
exports.route = route;
function routeDefault(config) {
    return {
        name: config.name,
        data: config.data,
        handler: config.handler,
        keyBuilder: config.keyBuilder,
        isDefault: true
    };
}
exports.routeDefault = routeDefault;
function routeNotFound(config) {
    return {
        name: config.name,
        data: config.data,
        handler: config.handler,
        keyBuilder: config.keyBuilder,
        isNotFound: true
    };
}
exports.routeNotFound = routeNotFound;
function isActive(name, params) {
    if (params) {
        for (var prop in params) {
            if (params.hasOwnProperty(prop)) {
                if (activeParams[prop] !== params[prop])
                    return false;
            }
        }
    }
    for (var i = 0, l = activeRoutes.length; i < l; i++) {
        if (activeRoutes[i].name === name) {
            return true;
        }
    }
    return false;
}
exports.isActive = isActive;
function urlOfRoute(name, params) {
    if (isInApp(name)) {
        var r = nameRouteMap[name];
        if (DEBUG) {
            if (rootRoutes == undefined)
                throw Error("Cannot use urlOfRoute before defining routes");
            if (r == undefined)
                throw Error("Route with name " + name + " if not defined in urlOfRoute");
        }
        return "#" + injectParams(r.url, params);
    }
    return name;
}
exports.urlOfRoute = urlOfRoute;
function Link(data) {
    return style({
        tag: "a",
        component: {
            id: "link",
            onClick: function () {
                runTransition((data.replace ? createRedirectReplace : createRedirectPush)(data.name, data.params));
                return true;
            }
        },
        children: data.children,
        attrs: { href: urlOfRoute(data.name, data.params) }
    }, isActive(data.name, data.params)
        ? data.activeStyle != undefined
            ? data.activeStyle
            : [data.style, "active"]
        : data.style);
}
exports.Link = Link;
function link(node, name, params) {
    node.data = node.data || {};
    node.data.routeName = name;
    node.data.routeParams = params;
    postEnhance(node, {
        render: function (ctx, me) {
            var data = ctx.data;
            me.attrs = me.attrs || {};
            if (me.tag === "a") {
                me.attrs.href = urlOfRoute(data.routeName, data.routeParams);
            }
            me.className = me.className || "";
            if (isActive(data.routeName, data.routeParams)) {
                me.className += " active";
            }
        },
        onClick: function (ctx) {
            var data = ctx.data;
            runTransition(createRedirectPush(data.routeName, data.routeParams));
            return true;
        }
    });
    return node;
}
exports.link = link;
function createRedirectPush(name, params) {
    return {
        inApp: isInApp(name),
        type: RouteTransitionType.Push,
        name: name,
        params: params || {}
    };
}
exports.createRedirectPush = createRedirectPush;
function createRedirectReplace(name, params) {
    return {
        inApp: isInApp(name),
        type: RouteTransitionType.Replace,
        name: name,
        params: params || {}
    };
}
exports.createRedirectReplace = createRedirectReplace;
function createBackTransition(distance) {
    distance = distance || 1;
    return {
        inApp: myAppHistoryDeepness >= distance,
        type: RouteTransitionType.Pop,
        name: undefined,
        params: {},
        distance: distance
    };
}
exports.createBackTransition = createBackTransition;
var currentTransition = null;
var nextTransition = null;
var transitionState = 0;
function doAction(transition) {
    switch (transition.type) {
        case RouteTransitionType.Push:
            push(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;
        case RouteTransitionType.Replace:
            replace(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;
        case RouteTransitionType.Pop:
            pop(transition.distance);
            break;
    }
    exports.invalidate();
}
function nextIteration() {
    while (true) {
        if (transitionState >= 0 && transitionState < activeRoutes.length) {
            var node = nodesArray[transitionState];
            transitionState++;
            if (!node)
                continue;
            var comp = node.component;
            if (!comp && exports.isArray(node.children)) {
                node = node.children[0];
                if (!node)
                    continue;
                comp = node.component;
            }
            if (!comp)
                continue;
            var fn = comp.canDeactivate;
            if (!fn)
                continue;
            var res = fn.call(comp, node.ctx, currentTransition);
            if (res === true)
                continue;
            Promise
                .resolve(res)
                .then(function (resp) {
                if (resp === true) {
                }
                else if (resp === false) {
                    currentTransition = null;
                    nextTransition = null;
                    if (programPath)
                        replace(programPath, true);
                    return;
                }
                else {
                    nextTransition = resp;
                }
                nextIteration();
            })
                .catch(function (err) {
                if (typeof console !== "undefined" && console.log)
                    console.log(err);
            });
            return;
        }
        else if (transitionState == activeRoutes.length) {
            if (nextTransition) {
                if (currentTransition && currentTransition.type == RouteTransitionType.Push) {
                    push(urlOfRoute(currentTransition.name, currentTransition.params), currentTransition.inApp);
                }
                currentTransition = nextTransition;
                nextTransition = null;
            }
            transitionState = -1;
            if (!currentTransition.inApp || currentTransition.type === RouteTransitionType.Pop) {
                var tr = currentTransition;
                if (!currentTransition.inApp)
                    currentTransition = null;
                doAction(tr);
                return;
            }
        }
        else if (transitionState === -1) {
            var out = { p: {} };
            if (currentTransition.inApp) {
                futureRoutes =
                    findMatch(urlOfRoute(currentTransition.name, currentTransition.params).substring(1), rootRoutes, out) || [];
            }
            else {
                futureRoutes = [];
            }
            transitionState = -2;
        }
        else if (transitionState === -2 - futureRoutes.length) {
            if (nextTransition) {
                transitionState = activeRoutes.length;
                continue;
            }
            if (currentTransition.type !== RouteTransitionType.Pop) {
                var tr = currentTransition;
                currentTransition = null;
                doAction(tr);
            }
            else {
                exports.invalidate();
            }
            currentTransition = null;
            return;
        }
        else {
            if (nextTransition) {
                transitionState = activeRoutes.length;
                continue;
            }
            var rr = futureRoutes[futureRoutes.length + 1 + transitionState];
            transitionState--;
            var handler = rr.handler;
            var comp = undefined;
            if (isFunction(handler)) {
                var node = handler({ activeRouteHandler: function () { return undefined; }, routeParams: currentTransition.params });
                if (!node || !isObject(node) || exports.isArray(node))
                    continue;
                comp = node.component;
            }
            else {
                comp = handler;
            }
            if (!comp)
                continue;
            var fn = comp.canActivate;
            if (!fn)
                continue;
            var res = fn.call(comp, currentTransition);
            if (res === true)
                continue;
            Promise.resolve(res)
                .then(function (resp) {
                if (resp === true) {
                }
                else if (resp === false) {
                    currentTransition = null;
                    nextTransition = null;
                    return;
                }
                else {
                    nextTransition = resp;
                }
                nextIteration();
            })
                .catch(function (err) {
                if (typeof console !== "undefined" && console.log)
                    console.log(err);
            });
            return;
        }
    }
}
exports.transitionRunCount = 1;
function runTransition(transition) {
    exports.transitionRunCount++;
    preventClickingSpree();
    if (currentTransition != null) {
        nextTransition = transition;
        return;
    }
    firstRouting = false;
    currentTransition = transition;
    transitionState = 0;
    nextIteration();
}
exports.runTransition = runTransition;
function anchor(children, name, params) {
    return {
        children: children,
        component: {
            id: "anchor",
            postUpdateDom: function (ctx, me) {
                handleAnchorRoute(ctx, me, name, params);
            },
            postInitDom: function (ctx, me) {
                handleAnchorRoute(ctx, me, name, params);
            }
        }
    };
}
exports.anchor = anchor;
function handleAnchorRoute(ctx, me, name, params) {
    var routeName;
    if (name) {
        routeName = name;
    }
    else {
        var firstChild = (me.children && me.children[0]);
        routeName = firstChild.attrs && firstChild.attrs.id;
    }
    if (!isActive(routeName, params)) {
        ctx.l = 0;
        return;
    }
    if (ctx.l === exports.transitionRunCount)
        return;
    getDomNode(me).scrollIntoView();
    ctx.l = exports.transitionRunCount;
}
function getRoutes() {
    return rootRoutes;
}
exports.getRoutes = getRoutes;
function getActiveRoutes() {
    return activeRoutes;
}
exports.getActiveRoutes = getActiveRoutes;
function getActiveParams() {
    return activeParams;
}
exports.getActiveParams = getActiveParams;
var allStyles = newHashObj();
var allAnimations = newHashObj();
var allMediaQueries = newHashObj();
var allSprites = newHashObj();
var bundledSprites = newHashObj();
var allNameHints = newHashObj();
var dynamicSprites = [];
var bundledDynamicSprites = [];
var imageCache = newHashObj();
var injectedCss = "";
var rebuildStyles = false;
var htmlStyle = null;
var globalCounter = 0;
var chainedBeforeFrame = setBeforeFrame(beforeFrame);
var cssSubRuleDelimiter = /\:|\ |\>/;
function buildCssSubRule(parent) {
    var matchSplit = cssSubRuleDelimiter.exec(parent);
    if (!matchSplit)
        return allStyles[parent].name;
    var posSplit = matchSplit.index;
    return allStyles[parent.substring(0, posSplit)].name + parent.substring(posSplit);
}
function buildCssRule(parent, name) {
    var result = "";
    if (parent) {
        if (exports.isArray(parent)) {
            for (var i_12 = 0; i_12 < parent.length; i_12++) {
                if (i_12 > 0) {
                    result += ",";
                }
                result += "." + buildCssSubRule(parent[i_12]) + "." + name;
            }
        }
        else {
            result = "." + buildCssSubRule(parent) + "." + name;
        }
    }
    else {
        result = "." + name;
    }
    return result;
}
function flattenStyle(cur, curPseudo, style, stylePseudo) {
    if (isString(style)) {
        var externalStyle = allStyles[style];
        if (externalStyle === undefined) {
            throw new Error("Unknown style " + style);
        }
        flattenStyle(cur, curPseudo, externalStyle.style, externalStyle.pseudo);
    }
    else if (isFunction(style)) {
        style(cur, curPseudo);
    }
    else if (exports.isArray(style)) {
        for (var i_13 = 0; i_13 < style.length; i_13++) {
            flattenStyle(cur, curPseudo, style[i_13], undefined);
        }
    }
    else if (typeof style === "object") {
        for (var key in style) {
            if (!hOP.call(style, key))
                continue;
            var val = style[key];
            if (isFunction(val)) {
                val = val(cur, key);
            }
            cur[key] = val;
        }
    }
    if (stylePseudo != undefined && curPseudo != undefined) {
        for (var pseudoKey in stylePseudo) {
            var curPseudoVal = curPseudo[pseudoKey];
            if (curPseudoVal === undefined) {
                curPseudoVal = newHashObj();
                curPseudo[pseudoKey] = curPseudoVal;
            }
            flattenStyle(curPseudoVal, undefined, stylePseudo[pseudoKey], undefined);
        }
    }
}
var lastDppx = 0;
var lastSpriteUrl = "";
var lastSpriteDppx = 1;
var hasBundledSprites = false;
var wasSpriteUrlChanged = true;
function beforeFrame() {
    var _a, e_1, _b;
    if (hasBundledSprites && lastDppx != getMedia().dppx) {
        lastDppx = getMedia().dppx;
        var newSpriteUrl = bundlePath;
        var newSpriteDppx = 1;
        if (lastDppx > 1) {
            for (var i_14 = 0; i_14 < bundlePath2.length; i_14++) {
                if (i_14 == bundlePath2.length - 1 || bundlePath2[i_14][1] >= lastDppx) {
                    newSpriteUrl = bundlePath2[i_14][0];
                    newSpriteDppx = bundlePath2[i_14][1];
                }
                else
                    break;
            }
        }
        if (lastSpriteUrl != newSpriteUrl) {
            lastSpriteUrl = newSpriteUrl;
            lastSpriteDppx = newSpriteDppx;
            rebuildStyles = true;
            wasSpriteUrlChanged = true;
        }
    }
    if (rebuildStyles) {
        if (hasBundledSprites) {
            var imageSprite = imageCache[lastSpriteUrl];
            if (imageSprite === undefined) {
                imageSprite = null;
                imageCache[lastSpriteUrl] = imageSprite;
                loadImage(lastSpriteUrl, function (image) {
                    imageCache[lastSpriteUrl] = image;
                    invalidateStyles();
                });
            }
            if (imageSprite != null) {
                for (var i_15 = 0; i_15 < bundledDynamicSprites.length; i_15++) {
                    var dynSprite = bundledDynamicSprites[i_15];
                    var colorStr = dynSprite.color;
                    if (!isString(colorStr))
                        colorStr = colorStr();
                    if (wasSpriteUrlChanged || colorStr !== dynSprite.lastColor) {
                        dynSprite.lastColor = colorStr;
                        var mulWidth = (dynSprite.width * lastSpriteDppx) | 0;
                        var mulHeight = (dynSprite.height * lastSpriteDppx) | 0;
                        var lastUrl = recolorAndClip(imageSprite, colorStr, mulWidth, mulHeight, (dynSprite.left * lastSpriteDppx) | 0, (dynSprite.top * lastSpriteDppx) | 0);
                        var stDef = allStyles[dynSprite.styleId];
                        stDef.style = {
                            backgroundImage: "url(" + lastUrl + ")",
                            width: dynSprite.width,
                            height: dynSprite.height,
                            backgroundPosition: 0,
                            backgroundSize: "100%"
                        };
                    }
                }
                if (wasSpriteUrlChanged) {
                    var iWidth = imageSprite.width / lastSpriteDppx;
                    var iHeight = imageSprite.height / lastSpriteDppx;
                    for (var key_1 in bundledSprites) {
                        var sprite_1 = bundledSprites[key_1];
                        if (sprite_1.color !== undefined)
                            continue;
                        var stDef = allStyles[sprite_1.styleId];
                        var width = sprite_1.width;
                        var height = sprite_1.height;
                        var percentWidth = (100 * iWidth) / width;
                        var percentHeight = (100 * iHeight) / height;
                        stDef.style = {
                            backgroundImage: "url(" + lastSpriteUrl + ")",
                            width: width,
                            height: height,
                            backgroundPosition: (100 * sprite_1.left) / (iWidth - width) + "% " + (100 * sprite_1.top) /
                                (iHeight - height) + "%",
                            backgroundSize: percentWidth + "% " + percentHeight + "%"
                        };
                    }
                }
                wasSpriteUrlChanged = false;
            }
        }
        for (var i_16 = 0; i_16 < dynamicSprites.length; i_16++) {
            var dynSprite = dynamicSprites[i_16];
            var image = imageCache[dynSprite.url];
            if (image == undefined)
                continue;
            var colorStr = dynSprite.color();
            if (colorStr !== dynSprite.lastColor) {
                dynSprite.lastColor = colorStr;
                if (dynSprite.width == undefined)
                    dynSprite.width = image.width;
                if (dynSprite.height == undefined)
                    dynSprite.height = image.height;
                var lastUrl = recolorAndClip(image, colorStr, dynSprite.width, dynSprite.height, dynSprite.left, dynSprite.top);
                var stDef = allStyles[dynSprite.styleId];
                stDef.style = {
                    backgroundImage: "url(" + lastUrl + ")",
                    width: dynSprite.width,
                    height: dynSprite.height,
                    backgroundPosition: 0
                };
            }
        }
        var styleStr = injectedCss;
        for (var key in allAnimations) {
            var anim = allAnimations[key];
            styleStr += "@keyframes " + anim.name + " {";
            for (var key2 in anim.def) {
                var item = anim.def[key2];
                var style_1 = newHashObj();
                flattenStyle(style_1, undefined, item, undefined);
                shimStyle(style_1);
                styleStr +=
                    key2 +
                        (key2 == "from" || key2 == "to" ? "" : "%") +
                        " {" +
                        inlineStyleToCssDeclaration(style_1) +
                        "}\n";
            }
            styleStr += "}\n";
        }
        for (var key in allStyles) {
            var ss = allStyles[key];
            var parent = ss.parent;
            var name_1 = ss.name;
            var ssPseudo = ss.pseudo;
            var ssStyle = ss.style;
            if (isFunction(ssStyle) && ssStyle.length === 0) {
                _a = __read(ssStyle(), 2), ssStyle = _a[0], ssPseudo = _a[1];
            }
            if (isString(ssStyle) && ssPseudo == undefined) {
                ss.realName = ssStyle;
                assert(name_1 != undefined, "Cannot link existing class to selector");
                continue;
            }
            ss.realName = name_1;
            var style_2 = newHashObj();
            var flattenPseudo = newHashObj();
            flattenStyle(undefined, flattenPseudo, undefined, ssPseudo);
            flattenStyle(style_2, flattenPseudo, ssStyle, undefined);
            var extractedInlStyle = null;
            if (style_2["pointerEvents"]) {
                extractedInlStyle = newHashObj();
                extractedInlStyle["pointerEvents"] = style_2["pointerEvents"];
            }
            ss.inlStyle = extractedInlStyle;
            shimStyle(style_2);
            var cssStyle = inlineStyleToCssDeclaration(style_2);
            if (cssStyle.length > 0)
                styleStr += (name_1 == undefined ? parent : buildCssRule(parent, name_1)) + " {" + cssStyle + "}\n";
            for (var key2 in flattenPseudo) {
                var item = flattenPseudo[key2];
                shimStyle(item);
                styleStr +=
                    (name_1 == undefined ? parent + ":" + key2 : buildCssRule(parent, name_1 + ":" + key2)) +
                        " {" +
                        inlineStyleToCssDeclaration(item) +
                        "}\n";
            }
        }
        for (var key in allMediaQueries) {
            var mediaQuery = allMediaQueries[key];
            styleStr += "@media " + key + "{";
            try {
                for (var mediaQuery_1 = (e_1 = void 0, __values(mediaQuery)), mediaQuery_1_1 = mediaQuery_1.next(); !mediaQuery_1_1.done; mediaQuery_1_1 = mediaQuery_1.next()) {
                    var definition = mediaQuery_1_1.value;
                    for (var key2 in definition) {
                        var item = definition[key2];
                        var style_3 = newHashObj();
                        flattenStyle(style_3, undefined, item, undefined);
                        shimStyle(style_3);
                        styleStr += "." + key2 + " {" + inlineStyleToCssDeclaration(style_3) + "}\n";
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (mediaQuery_1_1 && !mediaQuery_1_1.done && (_b = mediaQuery_1.return)) _b.call(mediaQuery_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            styleStr += "}\n";
        }
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = styleStr;
        }
        else {
            styleElement.appendChild(document.createTextNode(styleStr));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (htmlStyle != null) {
            head.replaceChild(styleElement, htmlStyle);
        }
        else {
            head.appendChild(styleElement);
        }
        htmlStyle = styleElement;
        rebuildStyles = false;
    }
    chainedBeforeFrame();
}
function style(node) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    var className = node.className;
    var inlineStyle = node.style;
    var stack = null;
    var i = 0;
    var ca = styles;
    while (true) {
        if (ca.length === i) {
            if (stack === null || stack.length === 0)
                break;
            ca = stack.pop();
            i = stack.pop() + 1;
            continue;
        }
        var s = ca[i];
        if (s == undefined || s === true || s === false || s === "" || s === 0) {
            // skip
        }
        else if (isString(s)) {
            var sd = allStyles[s];
            if (sd != undefined) {
                if (className == undefined)
                    className = sd.realName;
                else
                    className = className + " " + sd.realName;
                var inlS = sd.inlStyle;
                if (inlS) {
                    if (inlineStyle == undefined)
                        inlineStyle = {};
                    inlineStyle = exports.assign(inlineStyle, inlS);
                }
            }
            else {
                if (className == undefined)
                    className = s;
                else
                    className = className + " " + s;
            }
        }
        else if (exports.isArray(s)) {
            if (ca.length > i + 1) {
                if (stack == undefined)
                    stack = [];
                stack.push(i);
                stack.push(ca);
            }
            ca = s;
            i = 0;
            continue;
        }
        else {
            if (inlineStyle == undefined)
                inlineStyle = {};
            for (var key in s) {
                if (s.hasOwnProperty(key)) {
                    var val = s[key];
                    if (isFunction(val))
                        val = val();
                    inlineStyle[key] = val;
                }
            }
        }
        i++;
    }
    node.className = className;
    node.style = inlineStyle;
    return node;
}
exports.style = style;
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
function hyphenateStyle(s) {
    if (s === "cssFloat")
        return "float";
    return s
        .replace(uppercasePattern, "-$1")
        .toLowerCase()
        .replace(msPattern, "-ms-");
}
function inlineStyleToCssDeclaration(style) {
    var res = "";
    for (var key in style) {
        var v = style[key];
        if (v === undefined)
            continue;
        res += hyphenateStyle(key) + ":" + (v === "" ? '""' : v) + ";";
    }
    res = res.slice(0, -1);
    return res;
}
// PureFuncs: styleDef, styleDefEx, sprite, spriteb, spritebc, asset
function styleDef(style, pseudo, nameHint) {
    return styleDefEx(undefined, style, pseudo, nameHint);
}
exports.styleDef = styleDef;
function makeName(nameHint) {
    if (nameHint && nameHint !== "b-") {
        nameHint = nameHint.replace(/[^a-z0-9_-]/gi, "_").replace(/^[0-9]/, "_$&");
        if (allNameHints[nameHint]) {
            var counter = 1;
            while (allNameHints[nameHint + counter])
                counter++;
            nameHint = nameHint + counter;
        }
        allNameHints[nameHint] = true;
    }
    else {
        nameHint = "b-" + globalCounter++;
    }
    return nameHint;
}
function keyframesDef(def, nameHint) {
    nameHint = makeName(nameHint);
    allAnimations[nameHint] = { name: nameHint, def: def };
    invalidateStyles();
    var res = function (params) {
        if (isString(params))
            return params + " " + nameHint;
        return nameHint;
    };
    res.toString = res;
    return res;
}
exports.keyframesDef = keyframesDef;
/**
 * create media query
 * @example
 * // can be called with string query definition
 * mediaQueryDef("only screen (min-width: 1200px)", {
                [style]: {
                    opacity: 1
                }
            });
 * @example
 * // also build can be used @see MediaRuleBuilder
 * mediaQueryDef((createMediaQuery()
 .rule("only", "screen")
    .and({type: "max-width", value: 1200, unit: "px"})
    .and({type: "min-width", value: 768, unit: "px"})
 .or()
 .rule()
    .and({type: "aspect-ratio", width: 11, height: 5})
 .build(), {
        [style]: {
            opacity: 1
        }
    });
 *
 **/
function mediaQueryDef(def, mediaQueryDefinition) {
    var mediaQuery = allMediaQueries[def];
    if (!mediaQuery) {
        mediaQuery = [];
        allMediaQueries[def] = mediaQuery;
    }
    mediaQuery.push(mediaQueryDefinition);
    invalidateStyles();
}
exports.mediaQueryDef = mediaQueryDef;
function styleDefEx(parent, style, pseudo, nameHint) {
    nameHint = makeName(nameHint);
    allStyles[nameHint] = {
        name: nameHint,
        realName: nameHint,
        parent: parent,
        style: style,
        inlStyle: undefined,
        pseudo: pseudo
    };
    invalidateStyles();
    return nameHint;
}
exports.styleDefEx = styleDefEx;
function selectorStyleDef(selector, style, pseudo) {
    allStyles["b-" + globalCounter++] = {
        name: null,
        realName: null,
        parent: selector,
        style: style,
        inlStyle: undefined,
        pseudo: pseudo
    };
    invalidateStyles();
}
exports.selectorStyleDef = selectorStyleDef;
function invalidateStyles() {
    rebuildStyles = true;
    exports.invalidate();
}
exports.invalidateStyles = invalidateStyles;
function updateSprite(spDef) {
    var stDef = allStyles[spDef.styleId];
    var style = {
        backgroundImage: "url(" + spDef.url + ")",
        width: spDef.width,
        height: spDef.height,
        backgroundPosition: -spDef.left + "px " + -spDef.top + "px",
        backgroundSize: spDef.width + "px " + spDef.height + "px"
    };
    stDef.style = style;
    invalidateStyles();
}
function emptyStyleDef(url) {
    return styleDef({ width: 0, height: 0 }, undefined, url);
}
var rgbaRegex = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
function recolorAndClip(image, colorStr, width, height, left, top) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, -left, -top);
    var imgData = ctx.getImageData(0, 0, width, height);
    var imgDataData = imgData.data;
    var rgba = rgbaRegex.exec(colorStr);
    var cRed, cGreen, cBlue, cAlpha;
    if (rgba) {
        cRed = parseInt(rgba[1], 10);
        cGreen = parseInt(rgba[2], 10);
        cBlue = parseInt(rgba[3], 10);
        cAlpha = Math.round(parseFloat(rgba[4]) * 255);
    }
    else {
        cRed = parseInt(colorStr.substr(1, 2), 16);
        cGreen = parseInt(colorStr.substr(3, 2), 16);
        cBlue = parseInt(colorStr.substr(5, 2), 16);
        cAlpha = parseInt(colorStr.substr(7, 2), 16) || 0xff;
    }
    if (cAlpha === 0xff) {
        for (var i = 0; i < imgDataData.length; i += 4) {
            // Horrible workaround for imprecisions due to browsers using premultiplied alpha internally for canvas
            var red = imgDataData[i];
            if (red === imgDataData[i + 1] &&
                red === imgDataData[i + 2] &&
                (red === 0x80 || (imgDataData[i + 3] < 0xff && red > 0x70))) {
                imgDataData[i] = cRed;
                imgDataData[i + 1] = cGreen;
                imgDataData[i + 2] = cBlue;
            }
        }
    }
    else {
        for (var i = 0; i < imgDataData.length; i += 4) {
            var red = imgDataData[i];
            var alpha = imgDataData[i + 3];
            if (red === imgDataData[i + 1] &&
                red === imgDataData[i + 2] &&
                (red === 0x80 || (alpha < 0xff && red > 0x70))) {
                if (alpha === 0xff) {
                    imgDataData[i] = cRed;
                    imgDataData[i + 1] = cGreen;
                    imgDataData[i + 2] = cBlue;
                    imgDataData[i + 3] = cAlpha;
                }
                else {
                    alpha = alpha * (1.0 / 255);
                    imgDataData[i] = Math.round(cRed * alpha);
                    imgDataData[i + 1] = Math.round(cGreen * alpha);
                    imgDataData[i + 2] = Math.round(cBlue * alpha);
                    imgDataData[i + 3] = Math.round(cAlpha * alpha);
                }
            }
        }
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
}
var lastFuncId = 0;
var funcIdName = "b@funcId";
var imagesWithCredentials = false;
function loadImage(url, onload) {
    var image = new Image();
    image.crossOrigin = imagesWithCredentials ? "use-credentials" : "anonymous";
    image.addEventListener("load", function () { return onload(image); });
    image.src = url;
}
function setImagesWithCredentials(value) {
    imagesWithCredentials = value;
}
exports.setImagesWithCredentials = setImagesWithCredentials;
function sprite(url, color, width, height, left, top) {
    assert(allStyles[url] === undefined, "Wrong sprite url");
    left = left || 0;
    top = top || 0;
    var colorId = color || "";
    var isVarColor = false;
    if (isFunction(color)) {
        isVarColor = true;
        colorId = color[funcIdName];
        if (colorId == undefined) {
            colorId = "" + lastFuncId++;
            color[funcIdName] = colorId;
        }
    }
    var key = url + ":" + colorId + ":" + (width || 0) + ":" + (height || 0) + ":" + left + ":" + top;
    var spDef = allSprites[key];
    if (spDef)
        return spDef.styleId;
    var styleId = emptyStyleDef(url);
    spDef = { styleId: styleId, url: url, width: width, height: height, left: left, top: top };
    if (isVarColor) {
        spDef.color = color;
        spDef.lastColor = "";
        spDef.lastUrl = "";
        dynamicSprites.push(spDef);
        if (imageCache[url] === undefined) {
            imageCache[url] = null;
            loadImage(url, function (image) {
                imageCache[url] = image;
                invalidateStyles();
            });
        }
        invalidateStyles();
    }
    else if (width == undefined || height == undefined || color != undefined) {
        loadImage(url, function (image) {
            if (spDef.width == undefined)
                spDef.width = image.width;
            if (spDef.height == undefined)
                spDef.height = image.height;
            if (color != undefined) {
                spDef.url = recolorAndClip(image, color, spDef.width, spDef.height, spDef.left, spDef.top);
                spDef.left = 0;
                spDef.top = 0;
            }
            updateSprite(spDef);
        });
    }
    else {
        updateSprite(spDef);
    }
    allSprites[key] = spDef;
    return styleId;
}
exports.sprite = sprite;
var bundlePath = window["bobrilBPath"] || "bundle.png";
var bundlePath2 = window["bobrilBPath2"] || [];
function setBundlePngPath(path) {
    bundlePath = path;
}
exports.setBundlePngPath = setBundlePngPath;
function getSpritePaths() {
    return [bundlePath, bundlePath2];
}
exports.getSpritePaths = getSpritePaths;
function setSpritePaths(main, others) {
    bundlePath = main;
    bundlePath2 = others;
}
exports.setSpritePaths = setSpritePaths;
function spriteb(width, height, left, top) {
    var key = ":" + width + ":" + height + ":" + left + ":" + top;
    var spDef = bundledSprites[key];
    if (spDef)
        return spDef.styleId;
    hasBundledSprites = true;
    var styleId = styleDef({ width: width, height: height });
    spDef = {
        styleId: styleId,
        width: width,
        height: height,
        left: left,
        top: top
    };
    bundledSprites[key] = spDef;
    wasSpriteUrlChanged = true;
    return styleId;
}
exports.spriteb = spriteb;
function spritebc(color, width, height, left, top) {
    if (color == undefined) {
        return spriteb(width, height, left, top);
    }
    var colorId;
    if (isString(color)) {
        colorId = color;
    }
    else {
        colorId = color[funcIdName];
        if (colorId == undefined) {
            colorId = "" + lastFuncId++;
            color[funcIdName] = colorId;
        }
    }
    var key = colorId + ":" + width + ":" + height + ":" + left + ":" + top;
    var spDef = bundledSprites[key];
    if (spDef)
        return spDef.styleId;
    hasBundledSprites = true;
    var styleId = styleDef({ width: width, height: height });
    spDef = {
        styleId: styleId,
        width: width,
        height: height,
        left: left,
        top: top
    };
    spDef.color = color;
    spDef.lastColor = "";
    spDef.lastUrl = "";
    bundledDynamicSprites.push(spDef);
    bundledSprites[key] = spDef;
    return styleId;
}
exports.spritebc = spritebc;
function injectCss(css) {
    injectedCss += css;
    invalidateStyles();
}
exports.injectCss = injectCss;
function asset(path) {
    return path;
}
exports.asset = asset;
selectorStyleDef("html." + draggingStyle + " *", { cursor: "inherit !important", userSelect: "none !important" });
// Bobril.svgExtensions
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.sin(angleInRadians),
        y: centerY - radius * Math.cos(angleInRadians)
    };
}
function svgDescribeArc(x, y, radius, startAngle, endAngle, startWithLine) {
    var absDeltaAngle = Math.abs(endAngle - startAngle);
    var close = false;
    if (absDeltaAngle > 360 - 0.01) {
        if (endAngle > startAngle)
            endAngle = startAngle - 359.9;
        else
            endAngle = startAngle + 359.9;
        if (radius === 0)
            return "";
        close = true;
    }
    else {
        if (radius === 0) {
            return [startWithLine ? "L" : "M", x, y].join(" ");
        }
    }
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var arcSweep = absDeltaAngle <= 180 ? "0" : "1";
    var largeArg = endAngle > startAngle ? "0" : "1";
    var d = [
        startWithLine ? "L" : "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        arcSweep,
        largeArg,
        end.x,
        end.y
    ].join(" ");
    if (close)
        d += "Z";
    return d;
}
function svgPie(x, y, radiusBig, radiusSmall, startAngle, endAngle) {
    var p = svgDescribeArc(x, y, radiusBig, startAngle, endAngle, false);
    var nextWithLine = true;
    if (p[p.length - 1] === "Z")
        nextWithLine = false;
    if (radiusSmall === 0) {
        if (!nextWithLine)
            return p;
    }
    return p + svgDescribeArc(x, y, radiusSmall, endAngle, startAngle, nextWithLine) + "Z";
}
exports.svgPie = svgPie;
function svgCircle(x, y, radius) {
    return svgDescribeArc(x, y, radius, 0, 360, false);
}
exports.svgCircle = svgCircle;
function svgRect(x, y, width, height) {
    return "M" + x + " " + y + "h" + width + "v" + height + "h" + -width + "Z";
}
exports.svgRect = svgRect;
// Bobril.helpers
function withKey(content, key) {
    if (isObject(content) && !exports.isArray(content)) {
        content.key = key;
        return content;
    }
    return {
        key: key,
        children: content
    };
}
exports.withKey = withKey;
function withRef(node, ctx, name) {
    node.ref = [ctx, name];
    return node;
}
exports.withRef = withRef;
function extendCfg(ctx, propertyName, value) {
    var c = ctx.me.cfg;
    if (c !== undefined) {
        c[propertyName] = value;
    }
    else {
        c = Object.assign({}, ctx.cfg);
        c[propertyName] = value;
        ctx.me.cfg = c;
    }
}
exports.extendCfg = extendCfg;
// PureFuncs: styledDiv, createVirtualComponent, createComponent, createDerivedComponent, createOverridingComponent, prop, propi, propa, propim, getValue
function styledDiv(children) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    return style({ tag: "div", children: children }, styles);
}
exports.styledDiv = styledDiv;
function createVirtualComponent(component) {
    return function (data, children) {
        if (children !== undefined) {
            if (data == undefined)
                data = {};
            data.children = children;
        }
        return { data: data, component: component };
    };
}
exports.createVirtualComponent = createVirtualComponent;
function createOverridingComponent(original, after) {
    var originalComponent = original().component;
    var overriding = overrideComponents(originalComponent, after);
    return createVirtualComponent(overriding);
}
exports.createOverridingComponent = createOverridingComponent;
function createComponent(component) {
    var originalRender = component.render;
    if (originalRender) {
        component.render = function (ctx, me, oldMe) {
            me.tag = "div";
            return originalRender.call(component, ctx, me, oldMe);
        };
    }
    else {
        component.render = function (_ctx, me) {
            me.tag = "div";
        };
    }
    return createVirtualComponent(component);
}
exports.createComponent = createComponent;
function createDerivedComponent(original, after) {
    var originalComponent = original().component;
    var merged = mergeComponents(originalComponent, after);
    return createVirtualComponent(merged);
}
exports.createDerivedComponent = createDerivedComponent;
function prop(value, onChange) {
    return function (val) {
        if (val !== undefined) {
            if (onChange !== undefined)
                onChange(val, value);
            value = val;
        }
        return value;
    };
}
exports.prop = prop;
function propi(value) {
    return function (val) {
        if (val !== undefined) {
            value = val;
            exports.invalidate();
        }
        return value;
    };
}
exports.propi = propi;
function propa(prop) {
    return function (val) {
        if (val !== undefined) {
            if (typeof val === "object" && isFunction(val.then)) {
                val.then(function (v) {
                    prop(v);
                }, function (err) {
                    if (window["console"] && console.error)
                        console.error(err);
                });
            }
            else {
                return prop(val);
            }
        }
        return prop();
    };
}
exports.propa = propa;
function propim(value, ctx, onChange) {
    return function (val) {
        if (val !== undefined && !is(val, value)) {
            var oldVal = val;
            value = val;
            if (onChange !== undefined)
                onChange(val, oldVal);
            exports.invalidate(ctx);
        }
        return value;
    };
}
exports.propim = propim;
function debounceProp(from, delay) {
    if (delay === void 0) { delay = 500; }
    var current = from();
    var lastSet = current;
    var timer;
    function clearTimer() {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
    }
    return function (value) {
        if (value === undefined) {
            var origin = from();
            if (origin === lastSet)
                return current;
            current = origin;
            lastSet = origin;
            clearTimer();
            return origin;
        }
        else {
            clearTimer();
            // setting same value means flush
            if (current === value) {
                lastSet = value;
                from(value);
            }
            else {
                current = value;
                timer = setTimeout(function () {
                    lastSet = current;
                    from(current);
                    timer = undefined;
                }, delay);
            }
            return value;
        }
    };
}
exports.debounceProp = debounceProp;
function getValue(value) {
    if (isFunction(value)) {
        return value();
    }
    return value;
}
exports.getValue = getValue;
function emitChange(data, value) {
    if (isFunction(data.value)) {
        data.value(value);
    }
    if (data.onChange !== undefined) {
        data.onChange(value);
    }
}
exports.emitChange = emitChange;
// bobril-clouseau needs this
// bobril-g11n needs ignoreShouldChange and setBeforeInit
if (!window.b)
    window.b = {
        deref: deref,
        getRoots: getRoots,
        setInvalidate: setInvalidate,
        invalidateStyles: invalidateStyles,
        ignoreShouldChange: ignoreShouldChange,
        setAfterFrame: setAfterFrame,
        setBeforeFrame: setBeforeFrame,
        getDnds: exports.getDnds,
        setBeforeInit: setBeforeInit
    };
function shallowEqual(a, b) {
    if (is(a, b)) {
        return true;
    }
    if (!isObject(a) || !isObject(b)) {
        return false;
    }
    var kA = Object.keys(a);
    var kB = Object.keys(b);
    if (kA.length !== kB.length) {
        return false;
    }
    for (var i_17 = 0; i_17 < kA.length; i_17++) {
        if (!hOP.call(b, kA[i_17]) || !is(a[kA[i_17]], b[kA[i_17]])) {
            return false;
        }
    }
    return true;
}
exports.shallowEqual = shallowEqual;
// TSX reactNamespace emulation
// PureFuncs: createElement, getAllPropertyNames, component
var jsxFactoryCache = new Map();
function getStringPropertyDescriptors(obj) {
    var props = new Map();
    do {
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
            if (!this.has(prop))
                this.set(prop, Object.getOwnPropertyDescriptor(obj, prop));
        }, props);
    } while ((obj = Object.getPrototypeOf(obj)));
    return props;
}
function createElement(name, props) {
    var children;
    var argumentsCount = arguments.length - 2;
    if (argumentsCount === 0) {
    }
    else if (argumentsCount === 1) {
        children = arguments[2];
    }
    else {
        children = new Array(argumentsCount);
        for (var i_18 = 0; i_18 < argumentsCount; i_18++) {
            children[i_18] = arguments[i_18 + 2];
        }
    }
    if (isString(name)) {
        var res = argumentsCount === 0 ? { tag: name } : { tag: name, children: children };
        if (props == undefined) {
            return res;
        }
        var attrs;
        var component;
        for (var n in props) {
            if (!props.hasOwnProperty(n))
                continue;
            var propValue = props[n];
            if (n === "style") {
                style(res, propValue);
                continue;
            }
            if (n === "ref") {
                if (isString(propValue)) {
                    assert(getCurrentCtx() != undefined);
                    res.ref = [getCurrentCtx(), propValue];
                }
                else
                    res.ref = propValue;
                continue;
            }
            if (n === "key" || n === "className" || n === "component" || n === "data" || n === "children") {
                res[n] = propValue;
                continue;
            }
            if (n.startsWith("on") && isFunction(propValue)) {
                if (component == undefined) {
                    component = {};
                    res.component = component;
                }
                component[n] = propValue.call.bind(propValue);
                continue;
            }
            if (attrs == undefined) {
                attrs = {};
                res.attrs = attrs;
            }
            attrs[n] = propValue;
        }
        return res;
    }
    else {
        var res_1;
        var factory = jsxFactoryCache.get(name);
        if (factory === undefined) {
            factory = createFactory(name);
            jsxFactoryCache.set(name, factory);
        }
        if (argumentsCount == 0) {
            res_1 = factory(props);
        }
        else {
            if (factory.length == 1) {
                if (props == undefined)
                    props = { children: children };
                else
                    props.children = children;
                res_1 = factory(props);
            }
            else {
                res_1 = factory(props, children);
            }
        }
        if (props != undefined) {
            if (props.key != undefined)
                res_1.key = props.key;
            if (props.ref != undefined)
                res_1.ref = props.ref;
        }
        return res_1;
    }
}
exports.createElement = createElement;
function Fragment(data) {
    return data;
}
exports.Fragment = Fragment;
exports.__spread = exports.assign;
var EventResult;
(function (EventResult) {
    /// event propagation will continue. It's like returning falsy value.
    EventResult[EventResult["NotHandled"] = 0] = "NotHandled";
    /// event propagation will stop and default handing will be prevented. returning true has same meaning
    EventResult[EventResult["HandledPreventDefault"] = 1] = "HandledPreventDefault";
    /// event propagation will stop but default handing will still run
    EventResult[EventResult["HandledButRunDefault"] = 2] = "HandledButRunDefault";
    /// event propagation will continue but default handing will be prevented
    EventResult[EventResult["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
})(EventResult = exports.EventResult || (exports.EventResult = {}));
var Component = /** @class */ (function () {
    function Component(data, me) {
        this.data = data;
        this.me = me;
        this.cfg = undefined;
        this.refs = undefined;
    }
    return Component;
}());
exports.Component = Component;
var PureComponent = /** @class */ (function (_super) {
    __extends(PureComponent, _super);
    function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureComponent.prototype.shouldChange = function (newData, oldData) {
        return !shallowEqual(newData, oldData);
    };
    return PureComponent;
}(Component));
exports.PureComponent = PureComponent;
function forwardRender(m) {
    return function (ctx, me, _oldMe) {
        me.children = m.call(ctx, ctx.data);
    };
}
function forwardInit(m) {
    return function (ctx) {
        m.call(ctx, ctx.data);
    };
}
function forwardShouldChange(m) {
    return function (ctx, me, oldMe) {
        return m.call(ctx, me.data, oldMe.data);
    };
}
function forwardMe(m) {
    return m.call.bind(m);
}
function combineWithForwardMe(component, name, func) {
    var existing = component[name];
    if (existing != undefined) {
        component[name] = function (ctx, me) {
            existing(ctx, me);
            func.call(ctx, me);
        };
    }
    else {
        component[name] = forwardMe(func);
    }
}
var methodsWithMeParam = ["destroy", "postInitDom", "postUpdateDom", "postUpdateDomEverytime"];
function component(component, name) {
    var bobrilComponent = {};
    if (component.prototype instanceof Component) {
        var proto = component.prototype;
        var protoStatic = proto.constructor;
        bobrilComponent.id = getId(name, protoStatic);
        var protoMap = getStringPropertyDescriptors(proto);
        protoMap.forEach(function (descriptor, key) {
            var value = descriptor.value;
            if (value == undefined)
                return;
            var set = undefined;
            if (key === "render") {
                set = forwardRender(value);
            }
            else if (key === "init") {
                set = forwardInit(value);
            }
            else if (key === "shouldChange") {
                set = forwardShouldChange(value);
            }
            else if (methodsWithMeParam.indexOf(key) >= 0) {
                combineWithForwardMe(bobrilComponent, key, value);
            }
            else if (key === "postRenderDom") {
                combineWithForwardMe(bobrilComponent, methodsWithMeParam[1], value);
                combineWithForwardMe(bobrilComponent, methodsWithMeParam[2], value);
            }
            else if (isFunction(value) && /^(?:canDeactivate$|on[A-Z])/.test(key)) {
                set = forwardMe(value);
            }
            if (set !== undefined) {
                bobrilComponent[key] = set;
            }
        });
        bobrilComponent.ctxClass = component;
        bobrilComponent.canActivate = protoStatic.canActivate;
    }
    else {
        bobrilComponent.id = getId(name, component);
        bobrilComponent.render = forwardRender(component);
    }
    return function (data) {
        return { data: data, component: bobrilComponent };
    };
}
exports.component = component;
function getId(name, classOrFunction) {
    return name || classOrFunction.id || classOrFunction.name + "_" + allocateMethodId();
}
function createFactory(comp) {
    if (comp.prototype instanceof Component) {
        return component(comp);
    }
    else if (comp.length == 2) {
        // classic bobril factory method
        return comp;
    }
    else {
        return component(comp);
    }
}
function checkCurrentRenderCtx() {
    assert(currentCtx != undefined && hookId >= 0, "Hooks could be used only in Render method");
}
function _getHooks() {
    checkCurrentRenderCtx();
    var hooks = currentCtx.$hooks;
    if (hooks === undefined) {
        hooks = [];
        currentCtx.$hooks = hooks;
    }
    return hooks;
}
exports._getHooks = _getHooks;
function _allocHook() {
    return hookId++;
}
exports._allocHook = _allocHook;
function useState(initValue) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var ctx = currentCtx;
    var hook = hooks[myHookId];
    if (hook === undefined) {
        if (isFunction(initValue)) {
            initValue = initValue();
        }
        hook = function (value) {
            if (value !== undefined && !is(value, hook[0])) {
                hook[0] = value;
                exports.invalidate(ctx);
            }
            return hook[0];
        };
        hook[0] = initValue;
        hook[1] = function (value) {
            if (isFunction(value)) {
                value = value(hook[0]);
            }
            if (!is(value, hook[0])) {
                hook[0] = value;
                exports.invalidate(ctx);
            }
        };
        hooks[myHookId] = hook;
    }
    return hook;
}
exports.useState = useState;
function createContext(defaultValue, id) {
    if (id === undefined) {
        id = "__b#" + allocateMethodId();
    }
    return { id: id, dv: defaultValue };
}
exports.createContext = createContext;
function context(key) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            get: function () {
                var cfg = this.me.cfg || this.cfg;
                if (cfg == undefined || !(key.id in cfg))
                    return key.dv;
                return cfg[key.id];
            },
            set: function (value) {
                extendCfg(this, key.id, value);
            }
        });
    };
}
exports.context = context;
function useContext(key) {
    checkCurrentRenderCtx();
    var cfg = currentCtx.me.cfg || currentCtx.cfg;
    if (isString(key)) {
        if (cfg == undefined)
            return undefined;
        return cfg[key];
    }
    else {
        if (cfg == undefined || !(key.id in cfg))
            return key.dv;
        return cfg[key.id];
    }
}
exports.useContext = useContext;
function useProvideContext(key, value) {
    checkCurrentRenderCtx();
    extendCfg(currentCtx, isString(key) ? key : key.id, value);
}
exports.useProvideContext = useProvideContext;
function useRef(initialValue) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        hook = function (value) {
            if (value !== undefined) {
                hook.current = value;
            }
            return hook.current;
        };
        hook.current = initialValue;
        hooks[myHookId] = hook;
    }
    return hook;
}
exports.useRef = useRef;
function useStore(factory) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        hook = factory();
        hooks[myHookId] = hook;
    }
    return hook;
}
exports.useStore = useStore;
function hookPostInitDom(ctx) {
    var hooks = ctx.$hooks;
    var len = hooks.length;
    for (var i_19 = 0; i_19 < len; i_19++) {
        var hook = hooks[i_19];
        var fn = hook.postInitDom;
        if (fn !== undefined) {
            fn.call(hook, ctx);
        }
    }
}
function hookPostUpdateDom(ctx) {
    var hooks = ctx.$hooks;
    var len = hooks.length;
    for (var i_20 = 0; i_20 < len; i_20++) {
        var hook = hooks[i_20];
        var fn = hook.postUpdateDom;
        if (fn !== undefined) {
            fn.call(hook, ctx);
        }
    }
}
function hookPostUpdateDomEverytime(ctx) {
    var hooks = ctx.$hooks;
    var len = hooks.length;
    for (var i_21 = 0; i_21 < len; i_21++) {
        var hook = hooks[i_21];
        var fn = hook.postUpdateDomEverytime;
        if (fn !== undefined) {
            fn.call(hook, ctx);
        }
    }
}
function bind(target, propertyKey, descriptor) {
    if (propertyKey != undefined && descriptor != undefined) {
        var fn_1 = descriptor.value;
        assert(isFunction(fn_1), "Only methods can be decorated with @bind. '" + propertyKey + "' is not a method!");
        var definingProperty_1 = false;
        return {
            configurable: true,
            get: function () {
                if (definingProperty_1) {
                    return fn_1;
                }
                var value = fn_1.bind(this);
                definingProperty_1 = true;
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    configurable: true,
                    writable: true
                });
                definingProperty_1 = false;
                return value;
            }
        };
    }
    var proto = target.prototype;
    var keys = Object.getOwnPropertyNames(proto);
    keys.forEach(function (key) {
        if (key === "constructor") {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (isFunction(descriptor.value)) {
            Object.defineProperty(proto, key, bind(target, key, descriptor));
        }
    });
    return target;
}
exports.bind = bind;
var DepsChangeDetector = /** @class */ (function () {
    function DepsChangeDetector() {
    }
    DepsChangeDetector.prototype.detectChange = function (deps) {
        var changed = false;
        if (deps != undefined) {
            var lastDeps = this.deps;
            if (lastDeps == undefined) {
                changed = true;
            }
            else {
                var depsLen = deps.length;
                if (depsLen != lastDeps.length)
                    changed = true;
                else {
                    for (var i_22 = 0; i_22 < depsLen; i_22++) {
                        if (!is(deps[i_22], lastDeps[i_22])) {
                            changed = true;
                            break;
                        }
                    }
                }
            }
        }
        else
            changed = true;
        this.deps = deps;
        return changed;
    };
    return DepsChangeDetector;
}());
var MemoHook = /** @class */ (function (_super) {
    __extends(MemoHook, _super);
    function MemoHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemoHook.prototype.memoize = function (factory, deps) {
        if (this.detectChange(deps)) {
            this.current = factory();
        }
        return this.current;
    };
    return MemoHook;
}(DepsChangeDetector));
function useMemo(factory, deps) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        hook = new MemoHook();
        hooks[myHookId] = hook;
    }
    return hook.memoize(factory, deps);
}
exports.useMemo = useMemo;
var effectCallbacks = [];
function executeEffectCallbacks() {
    var cbList = effectCallbacks;
    effectCallbacks = [];
    for (var i = 0, len = cbList.length; i < len; i++) {
        cbList[i]();
    }
}
var EffectHook = /** @class */ (function (_super) {
    __extends(EffectHook, _super);
    function EffectHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EffectHook.prototype.update = function (callback, deps) {
        this.callback = callback;
        if (this.detectChange(deps)) {
            this.doRun();
        }
    };
    EffectHook.prototype.doRun = function () {
        effectCallbacks.push(this.run);
    };
    EffectHook.prototype.run = function () {
        var c = this.callback;
        if (c != undefined) {
            this.dispose();
            this.lastDisposer = c();
        }
    };
    EffectHook.prototype.dispose = function () {
        this.callback = undefined;
        if (isFunction(this.lastDisposer))
            this.lastDisposer();
        this.lastDisposer = undefined;
    };
    return EffectHook;
}(DepsChangeDetector));
function useEffect(callback, deps) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        hook = new EffectHook();
        hook.run = hook.run.bind(hook);
        addDisposable(currentCtx, hook);
        hooks[myHookId] = hook;
    }
    hook.update(callback, deps);
}
exports.useEffect = useEffect;
var LayoutEffectHook = /** @class */ (function (_super) {
    __extends(LayoutEffectHook, _super);
    function LayoutEffectHook() {
        var _this = _super.call(this) || this;
        _this.shouldRun = false;
        return _this;
    }
    LayoutEffectHook.prototype.postInitDom = function (ctx) {
        this.postUpdateDomEverytime(ctx);
    };
    LayoutEffectHook.prototype.postUpdateDomEverytime = function (ctx) {
        if (this.shouldRun) {
            this.shouldRun = false;
            this.run();
            if (ctx[ctxInvalidated] > frameCounter) {
                deferSyncUpdate();
            }
        }
    };
    LayoutEffectHook.prototype.doRun = function () {
        this.shouldRun = true;
    };
    return LayoutEffectHook;
}(EffectHook));
function useLayoutEffect(callback, deps) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        currentCtx.$hookFlags |= hasPostInitDom | hasPostUpdateDomEverytime;
        hook = new LayoutEffectHook();
        addDisposable(currentCtx, hook);
        hooks[myHookId] = hook;
    }
    hook.update(callback, deps);
}
exports.useLayoutEffect = useLayoutEffect;
var EventsHook = /** @class */ (function () {
    function EventsHook() {
    }
    return EventsHook;
}());
function useEvents(events) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        currentCtx.$hookFlags |= hasEvents;
        hook = new EventsHook();
        hooks[myHookId] = hook;
    }
    else {
        assert(hook instanceof EventsHook);
    }
    hook.events = events;
}
exports.useEvents = useEvents;
var CaptureEventsHook = /** @class */ (function () {
    function CaptureEventsHook() {
    }
    return CaptureEventsHook;
}());
function useCaptureEvents(events) {
    var myHookId = hookId++;
    var hooks = _getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        currentCtx.$hookFlags |= hasCaptureEvents;
        hook = new CaptureEventsHook();
        hooks[myHookId] = hook;
    }
    else {
        assert(hook instanceof CaptureEventsHook);
    }
    hook.events = events;
}
exports.useCaptureEvents = useCaptureEvents;

});
R('web/node_modules/bobrilstrap/components/a',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var Target;
(function (Target) {
    Target[Target["Blank"] = 0] = "Blank";
    Target[Target["Self"] = 1] = "Self";
    Target[Target["Parent"] = 2] = "Parent";
    Target[Target["Top"] = 3] = "Top";
})(Target = exports.Target || (exports.Target = {}));
exports.Anchor = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-a",
    render: function (ctx, me) {
        me.tag = "a";
        if (ctx.data.href)
            me.attrs.href = ctx.data.href;
        if (ctx.data.target !== undefined)
            me.attrs["target"] = "_" + Target[ctx.data.target].toLowerCase();
        if (ctx.data.name)
            me.attrs["name"] = ctx.data.name;
    }
});
exports.default = exports.Anchor;
exports.A = exports.Anchor;

});
R('web/node_modules/bobrilstrap/components/abbreviation',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.Abbreviation = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-abbreviation",
    render: function (ctx, me) {
        me.tag = "abbr";
        b.style(me, !!ctx.data.initialism && typography_1.typography.initialism);
    }
});
exports.Abbr = exports.Abbreviation;
exports.default = exports.Abbreviation;

});
R('web/node_modules/bobrilstrap/components/address',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Address = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-address",
    render: function (_ctx, me) {
        me.tag = "address";
    }
});
exports.default = exports.Address;

});
R('web/node_modules/bobrilstrap/components/affix',function(require, module, exports, global){
"use strict";
var b = require("bobril");
exports.affixStyles = {
    affix: b.styleDef("affix"),
    affixTop: b.styleDef("affix-top"),
    affixBottom: b.styleDef("affix-bottom")
};
exports.Affix = b.createVirtualComponent({
    id: "bobrilstrap-affix",
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewAffix(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewAffix(ctx);
    }
});
function registerNewAffix(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element || ctx.data.postponeInit || ctx.affixedElement === element)
        return;
    ctx.affixedElement = element;
    $(element).affix({
        offset: {
            top: getDimension(ctx.data.top),
            bottom: getDimension(ctx.data.bottom)
        }
    });
}
function getDimension(dimension) {
    return typeof dimension === "function" ? dimension() : dimension;
}
exports.default = exports.Affix;

});
R('web/node_modules/bobrilstrap/components/alert',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var button_1 = require("./button");
var span_1 = require("./span");
var bobrilHelpers_1 = require("./bobrilHelpers");
var AlertContext;
(function (AlertContext) {
    AlertContext[AlertContext["Success"] = 0] = "Success";
    AlertContext[AlertContext["Warning"] = 1] = "Warning";
    AlertContext[AlertContext["Danger"] = 2] = "Danger";
    AlertContext[AlertContext["Info"] = 3] = "Info";
})(AlertContext = exports.AlertContext || (exports.AlertContext = {}));
exports.alertStyles = {
    alert: b.styleDef("alert"),
    alertSuccess: b.styleDef("alert-success"),
    alertInfo: b.styleDef("alert-info"),
    alertDanger: b.styleDef("alert-danger"),
    alertWarning: b.styleDef("alert-warning"),
    alertDismissable: b.styleDef("alert-dismissible"),
    alertLink: b.styleDef("alert-link"),
    fade: b.styleDef("fade"),
    in: b.styleDef("in")
};
exports.alertContextStyles = bobrilHelpers_1.createDictionary();
exports.alertContextStyles(AlertContext.Success, exports.alertStyles.alertSuccess);
exports.alertContextStyles(AlertContext.Info, exports.alertStyles.alertInfo);
exports.alertContextStyles(AlertContext.Danger, exports.alertStyles.alertDanger);
exports.alertContextStyles(AlertContext.Warning, exports.alertStyles.alertWarning);
exports.Alert = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-alert",
    init: function (ctx) {
        ctx.visible = true;
    },
    render: function (ctx, me) {
        b.style(me, exports.alertStyles.alert);
        b.style(me, exports.alertContextStyles(ctx.data.context));
        me.attrs["role"] = "alert";
        var animation = ctx.data.animation === undefined || ctx.data.animation;
        var nativeDismiss = ctx.data.nativeDismiss === undefined || ctx.data.nativeDismiss;
        if (ctx.data.dismissButton) {
            b.style(me, exports.alertStyles.alertDismissable, !!animation && exports.alertStyles.fade, !!animation && exports.alertStyles.in);
            var buttonData = b.assign({}, ctx.data.dismissButton, {
                alert: true,
                data: nativeDismiss
                    ? b.assign({}, ctx.data.dismissButton.data, { dismiss: "alert" })
                    : ctx.data.dismissButton.data,
                option: button_1.ButtonOption.Close
            });
            if (!buttonData.children) {
                bobrilHelpers_1.mergeToChildren(buttonData, span_1.Span({ aria: { hidden: true } }, "×"), true);
            }
            var dismissButton = button_1.Button(buttonData);
            bobrilHelpers_1.mergeToChildren(me, dismissButton, true);
        }
    },
    postInitDom: function (ctx, _me, element) {
        $(element).on("closed.bs.Alert", function () {
            ctx.visible = false;
            if (ctx.data.onClosed)
                ctx.data.onClosed();
        });
        if (ctx.data.timeout) {
            ctx.timeoutId = setTimeout(function () { return dismissOnTimeout(ctx, element); }, ctx.data.timeout);
        }
    },
    destroy: function (ctx) {
        if (ctx.timeoutId)
            clearTimeout(ctx.timeoutId);
    }
});
exports.default = exports.Alert;
function dismissOnTimeout(ctx, element) {
    if (ctx.timeoutId) {
        clearTimeout(ctx.timeoutId);
        ctx.timeoutId = 0;
    }
    if (ctx.visible)
        $(element).alert("close");
}

});
R('web/node_modules/bobrilstrap/components/badge',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var span_1 = require("./span");
var badgeStyle = b.styleDef("badge",undefined,"badgeStyle");
exports.Badge = b.createDerivedComponent(span_1.Span, {
    id: "bobrilstrap-badge",
    render: function (_ctx, me) {
        b.style(me, badgeStyle);
    }
});

});
R('web/node_modules/bobrilstrap/components/blockquote',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.Blockquote = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-blockquote",
    render: function (ctx, me) {
        me.tag = "blockquote";
        b.style(me, !!ctx.data.reverse && typography_1.typography.blockquoteReverse);
    }
});
exports.default = exports.Blockquote;

});
R('web/node_modules/bobrilstrap/components/bobrilHelpers',function(require, module, exports, global){
"use strict";
function mergeToChildren(node, item, unshift) {
    var children = node.children
        ? node.children instanceof Array
            ? node.children
            : [node.children]
        : [];
    if (item) {
        if (unshift) {
            children.unshift(item);
        }
        else {
            children.push(item);
        }
    }
    return (node.children = children);
}
exports.mergeToChildren = mergeToChildren;
exports.bobrilHelpers = {
    mergeToChildren: mergeToChildren,
    toLowerWithDashes: toLowerWithDashes,
    createDictionary: createDictionary
};
exports.default = exports.bobrilHelpers;
function createDictionary() {
    var data = {};
    return function (key, value, setEvenUndefined) {
        if (value !== undefined || setEvenUndefined)
            dataValue(data, key, value);
        return dataValue(data, key);
    };
}
exports.createDictionary = createDictionary;
function dataValue(data, key, value) {
    if (typeof key === "string") {
        var innerData = data;
        if (value !== undefined)
            innerData[key] = value;
        return innerData[key];
    }
    else {
        var innerData = data;
        if (value !== undefined)
            innerData[key] = value;
        return innerData[key];
    }
}
function toLowerWithDashes(value) {
    if (!value)
        return value;
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/[A-Z]/g, "-$&").toLowerCase();
}
exports.toLowerWithDashes = toLowerWithDashes;
function equals(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
}
exports.equals = equals;

});
R('web/node_modules/bobrilstrap/components/bobrilSwipeExtension',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var pointerId;
var startX;
var startY;
var lastX;
var lastY;
var totalX;
var totalY;
function handlePointerDown(ev) {
    if (b.pointersDownCount() === 1) {
        pointerId = ev.id;
        startX = ev.x;
        startY = ev.y;
        lastX = startX;
        lastY = startY;
        totalX = 0;
        totalY = 0;
    }
    else
        pointerId = null;
    return false;
}
function handlePointerMove(ev) {
    if (ev.id === pointerId) {
        totalX += Math.abs(ev.x - lastX);
        totalY += Math.abs(ev.y - lastY);
        lastX = ev.x;
        lastY = ev.y;
    }
    return false;
}
function handlePointerUp(ev, _target, node) {
    if (ev.id === pointerId) {
        pointerId = null;
        var deltaX = Math.abs(ev.x - startX);
        var deltaY = Math.abs(ev.y - startY);
        if (deltaX < 75)
            return false; // too small horizontal move
        if (deltaY / deltaX >= 0.3)
            return false; // too much vertial for horizontal move
        if (totalX > deltaX * 1.5)
            return false; // too much shaking hand
        if (totalY > deltaX * 0.7)
            return false; // too much shaking hand
        var method = "onSwipe" + (ev.x > startX ? "Right" : "Left");
        b.ignoreClick(ev.x, ev.y);
        b.bubble(node, method, ev);
    }
    return false;
}
b.addEvent("!PointerDown", 70, handlePointerDown);
b.addEvent("!PointerMove", 70, handlePointerMove);
b.addEvent("!PointerUp", 70, handlePointerUp);

});
R('web/node_modules/bobrilstrap/components/breadcrumb',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ol_1 = require("./ol");
exports.breadcrumbStyles = {
    breadcrumb: b.styleDef("breadcrumb"),
    active: b.styleDef("active")
};
exports.Breadcrumb = b.createDerivedComponent(ol_1.Ol, {
    id: "bobrilstrap-breadcrumb",
    render: function (_ctx, me) {
        b.style(me, exports.breadcrumbStyles.breadcrumb);
    }
});
exports.default = exports.Breadcrumb;

});
R('web/node_modules/bobrilstrap/components/breadcrumbItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var breadcrumb_1 = require("./breadcrumb");
exports.BreadcrumbItem = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-breadcrumb-item",
    render: function (ctx, me) {
        b.style(me, !!ctx.data.active && breadcrumb_1.breadcrumbStyles.active);
    }
});
exports.default = exports.BreadcrumbItem;

});
R('web/node_modules/bobrilstrap/components/button',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var size_1 = require("./size");
var helpers_1 = require("./helpers");
var span_1 = require("./span");
var bobrilHelpers_1 = require("./bobrilHelpers");
var bobrilHelpers_2 = require("./bobrilHelpers");
var dropdown_1 = require("./dropdown");
var nav_1 = require("./nav");
var listGroup_1 = require("./listGroup");
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant[ButtonVariant["Dropdown"] = 0] = "Dropdown";
    ButtonVariant[ButtonVariant["DropdownNav"] = 1] = "DropdownNav";
    ButtonVariant[ButtonVariant["Navbar"] = 2] = "Navbar";
    ButtonVariant[ButtonVariant["NavbarToggle"] = 3] = "NavbarToggle";
    ButtonVariant[ButtonVariant["ListGroup"] = 4] = "ListGroup";
})(ButtonVariant = exports.ButtonVariant || (exports.ButtonVariant = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Button"] = 0] = "Button";
    ButtonType[ButtonType["Submit"] = 1] = "Submit";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var ButtonTag;
(function (ButtonTag) {
    ButtonTag[ButtonTag["Button"] = 0] = "Button";
    ButtonTag[ButtonTag["Input"] = 1] = "Input";
    ButtonTag[ButtonTag["A"] = 2] = "A";
})(ButtonTag = exports.ButtonTag || (exports.ButtonTag = {}));
var ButtonOption;
(function (ButtonOption) {
    ButtonOption[ButtonOption["Default"] = 0] = "Default";
    ButtonOption[ButtonOption["Success"] = 1] = "Success";
    ButtonOption[ButtonOption["Warning"] = 2] = "Warning";
    ButtonOption[ButtonOption["Danger"] = 3] = "Danger";
    ButtonOption[ButtonOption["Info"] = 4] = "Info";
    ButtonOption[ButtonOption["Link"] = 5] = "Link";
    ButtonOption[ButtonOption["Primary"] = 6] = "Primary";
    ButtonOption[ButtonOption["Close"] = 7] = "Close";
})(ButtonOption = exports.ButtonOption || (exports.ButtonOption = {}));
exports.buttonStyles = {
    active: b.styleDef("active"),
    disabled: b.styleDef("disabled"),
    btn: b.styleDef("btn"),
    btnBlock: b.styleDef("btn-block")
};
exports.buttonSizeStyles = generateSizeStyles();
exports.buttonOptiontStyles = generateOptionsStyles();
exports.Button = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-button",
    render: function (ctx, me) {
        me.tag = resolveTag(ctx);
        b.style(me, ctx.data.option !== ButtonOption.Close &&
            ctx.data.variant !== ButtonVariant.ListGroup &&
            ((ctx.data.variant !== ButtonVariant.Navbar &&
                ctx.data.variant !== ButtonVariant.DropdownNav &&
                ctx.data.variant !== ButtonVariant.NavbarToggle) ||
                ctx.data.tag !== ButtonTag.A) &&
            exports.buttonStyles.btn);
        b.style(me, !!ctx.data.active && exports.buttonStyles.active);
        b.style(me, !!ctx.data.block && exports.buttonStyles.btnBlock);
        b.style(me, ctx.data.size !== undefined && exports.buttonSizeStyles(ctx.data.size));
        b.style(me, ctx.data.variant !== ButtonVariant.Navbar &&
            ctx.data.variant !== ButtonVariant.DropdownNav &&
            ctx.data.variant !== ButtonVariant.ListGroup &&
            exports.buttonOptiontStyles(ctx.data.option || ButtonOption.Default));
        b.style(me, ctx.data.variant === ButtonVariant.ListGroup &&
            listGroup_1.listGroupStyles.listGroupItem);
        var typeAttr = ctx.data.tag === ButtonTag.A ? "role" : "type";
        me.attrs[typeAttr] = ((ctx.data.type && ButtonType[ctx.data.type]) ||
            me.attrs[typeAttr] ||
            ButtonType[ButtonType.Button])
            .toString()
            .toLowerCase();
        if (ctx.data.label) {
            if (ctx.data.tag === ButtonTag.Input) {
                me.attrs["value"] = ctx.data.label;
            }
            else {
                bobrilHelpers_1.mergeToChildren(me, ctx.data.label);
            }
        }
        if (ctx.data.tag === ButtonTag.A) {
            me.attrs["href"] = ctx.data.href || "javascript:void(0)";
        }
        if (ctx.data.disabled) {
            if (ctx.data.tag === ButtonTag.A) {
                b.style(me, exports.buttonStyles.disabled);
            }
            else {
                me.attrs["disabled"] = "disabled";
            }
        }
        if (ctx.data.variant === ButtonVariant.Dropdown ||
            ctx.data.variant === ButtonVariant.DropdownNav) {
            ctx.data = b.assign({}, ctx.data);
            ctx.data.data = b.assign({}, ctx.data.data);
            ctx.data.aria = b.assign({}, ctx.data.aria);
            ctx.data.aria.haspopup = true;
            ctx.data.data.toggle = "dropdown";
            b.style(me, dropdown_1.dropdownStyles.dropdownToggle);
            if (ctx.data.tag !== ButtonTag.Input)
                bobrilHelpers_1.mergeToChildren(me, " ");
            bobrilHelpers_1.mergeToChildren(me, span_1.Span({ style: helpers_1.helpers.caret }));
        }
        else if (ctx.data.variant === ButtonVariant.NavbarToggle) {
            ctx.data = b.assign({}, ctx.data);
            ctx.data.data = b.assign({}, ctx.data.data);
            b.style(me, nav_1.navStyles.navbarToggle);
        }
        bobrilHelpers_1.mergeToChildren(me, ctx.data.srOnly && span_1.Span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnly));
    }
});
exports.Btn = exports.Button;
exports.default = exports.Button;
function generateOptionsStyles() {
    var result = bobrilHelpers_2.createDictionary();
    Object.keys(ButtonOption).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === ButtonOption.Close
                ? helpers_1.helpers.close
                : b.styleDef("btn-" + ButtonOption[castedValue].toLowerCase()));
        }
    });
    return result;
}
function generateSizeStyles() {
    var result = bobrilHelpers_2.createDictionary();
    Object.keys(size_1.Size).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, castedValue === size_1.Size.Md
                ? undefined
                : b.styleDef("btn-" + size_1.Size[castedValue].toLowerCase()));
        }
    });
    return result;
}
function resolveTag(ctx) {
    if (ctx.data.tag === undefined) {
        ctx.data = b.assign({
            tag: ctx.data.variant === ButtonVariant.Navbar ||
                ctx.data.variant === ButtonVariant.DropdownNav
                ? ButtonTag.A
                : ButtonTag.Button
        }, ctx.data);
    }
    switch (ctx.data.tag) {
        case ButtonTag.A:
            return "a";
        case ButtonTag.Input:
            return "input";
        case ButtonTag.Button:
            return "button";
        default:
            return "button";
    }
}

});
R('web/node_modules/bobrilstrap/components/buttonGroup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.buttonGroupStyles = {
    btnGroup: b.styleDef("btn-group"),
    lg: b.styleDef("btn-group-lg"),
    sm: b.styleDef("btn-group-sm"),
    xs: b.styleDef("btn-group-xs"),
    justified: b.styleDef("btn-group-justified"),
    vertical: b.styleDef("btn-group-vertical")
};
var ButtonGroupSize;
(function (ButtonGroupSize) {
    ButtonGroupSize[ButtonGroupSize["Lg"] = 0] = "Lg";
    ButtonGroupSize[ButtonGroupSize["Default"] = 1] = "Default";
    ButtonGroupSize[ButtonGroupSize["Sm"] = 2] = "Sm";
    ButtonGroupSize[ButtonGroupSize["Xs"] = 3] = "Xs";
})(ButtonGroupSize = exports.ButtonGroupSize || (exports.ButtonGroupSize = {}));
exports.buttonGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.buttonGroupSizeStyles(ButtonGroupSize.Lg, exports.buttonGroupStyles.lg);
exports.buttonGroupSizeStyles(ButtonGroupSize.Default, false);
exports.buttonGroupSizeStyles(ButtonGroupSize.Sm, exports.buttonGroupStyles.sm);
exports.buttonGroupSizeStyles(ButtonGroupSize.Xs, exports.buttonGroupStyles.xs);
exports.ButtonGroup = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-button-group",
    render: function (ctx, me) {
        b.style(me, ctx.data.vertical
            ? exports.buttonGroupStyles.vertical
            : exports.buttonGroupStyles.btnGroup);
        b.style(me, ctx.data.size !== undefined && exports.buttonGroupSizeStyles(ctx.data.size));
        b.style(me, !!ctx.data.justified && exports.buttonGroupStyles.justified);
        me.attrs["role"] = "group";
    }
});
exports.default = exports.ButtonGroup;

});
R('web/node_modules/bobrilstrap/components/buttonToolbar',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.buttonToolbarStyles = {
    btnGroup: b.styleDef("btn-toolbar")
};
exports.ButtonToolbar = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-button-toolbar",
    render: function (_ctx, me) {
        b.style(me, exports.buttonToolbarStyles.btnGroup);
        me.attrs["role"] = "toolbar";
    }
});
exports.default = exports.ButtonToolbar;

});
R('web/node_modules/bobrilstrap/components/caption',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Caption = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-caption",
    render: function (_ctx, me) {
        me.tag = "caption";
    }
});
exports.default = exports.Caption;

});
R('web/node_modules/bobrilstrap/components/carousel',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ol_1 = require("./ol");
var li_1 = require("./li");
var a_1 = require("./a");
var glyphicon_1 = require("./glyphicon");
var span_1 = require("./span");
var helpers_1 = require("./helpers");
var CarouselPauseOn;
(function (CarouselPauseOn) {
    CarouselPauseOn[CarouselPauseOn["Hover"] = 0] = "Hover";
})(CarouselPauseOn = exports.CarouselPauseOn || (exports.CarouselPauseOn = {}));
exports.carouselStyles = {
    active: b.styleDef("active"),
    carousel: b.styleDef("carousel"),
    carouselCaption: b.styleDef("carousel-caption"),
    carouselIndicators: b.styleDef("carousel-indicators"),
    carouselInner: b.styleDef("carousel-inner"),
    carouselControl: b.styleDef("carousel-control"),
    item: b.styleDef("item"),
    left: b.styleDef("left"),
    right: b.styleDef("right"),
    slide: b.styleDef("slide")
};
exports.Carousel = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-carousel",
    render: function (ctx, me) {
        b.style(me, exports.carouselStyles.carousel, exports.carouselStyles.slide);
        me.attrs["id"] = ctx.data.id;
        if (!(ctx.data.data && ctx.data.data.ride))
            me.attrs["data-ride"] = "carousel";
        var initialSlide = ctx.data.slideTo === undefined ? 0 : ctx.data.slideTo;
        me.children = [
            b.style(ol_1.Ol({}, ctx.data.items.map(function (_item, idx) {
                return b.style(li_1.Li({ data: { target: "#" + ctx.data.id, slideTo: idx } }), !ctx.initialSlideChanged &&
                    idx === initialSlide &&
                    exports.carouselStyles.active);
            })), exports.carouselStyles.carouselIndicators),
            element_1.Elem({ style: exports.carouselStyles.carouselInner, attrs: { role: "listbox" } }, ctx.data.items.map(function (item, idx) {
                return element_1.Elem({
                    style: [
                        exports.carouselStyles.item,
                        !ctx.initialSlideChanged &&
                            idx === initialSlide &&
                            exports.carouselStyles.active
                    ]
                }, [
                    item.image,
                    !!item.captionContent &&
                        element_1.Elem({ style: exports.carouselStyles.carouselCaption }, item.captionContent)
                ]);
            })),
            a_1.A({
                style: [exports.carouselStyles.left, exports.carouselStyles.carouselControl],
                href: "#" + ctx.data.id,
                attrs: { role: "button" },
                data: { slide: "prev" }
            }, [
                glyphicon_1.Glyphicon({ icon: glyphicon_1.GlyphIcon.ChevronLeft, aria: { hidden: true } }),
                ctx.data.srOnlyPrev &&
                    span_1.Span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyPrev)
            ]),
            a_1.A({
                style: [exports.carouselStyles.right, exports.carouselStyles.carouselControl],
                href: "#" + ctx.data.id,
                attrs: { role: "button" },
                data: { slide: "next" }
            }, [
                glyphicon_1.Glyphicon({ icon: glyphicon_1.GlyphIcon.ChevronRight, aria: { hidden: true } }),
                ctx.data.srOnlyNext &&
                    span_1.Span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyNext)
            ])
        ];
    },
    postInitDom: function (ctx, _me, element) {
        var jqueryElement = $(element);
        jqueryElement.carousel({
            interval: ctx.data.interval,
            pause: ctx.data.pauseOn !== undefined
                ? CarouselPauseOn[ctx.data.pauseOn].toLowerCase()
                : undefined,
            wrap: ctx.data.wrap,
            keyboard: ctx.data.keyboard
        });
        jqueryElement.on("slide.bs.Carousel", function () {
            ctx.initialSlideChanged = true;
            if (ctx.data.onSlide)
                ctx.data.onSlide();
        });
        handleSlideTo(ctx, jqueryElement);
    },
    postUpdateDom: function (ctx, _me, element) {
        handleSlideTo(ctx, $(element));
    },
    onSwipeLeft: function (ctx) {
        var element = b.getDomNode(ctx.me);
        $(element).carousel("next");
        return true;
    },
    onSwipeRight: function (ctx) {
        var element = b.getDomNode(ctx.me);
        $(element).carousel("prev");
        return true;
    }
});
function handleSlideTo(ctx, jqueryElement) {
    if (ctx.data.slideTo !== undefined) {
        jqueryElement.carousel(ctx.data.slideTo);
    }
}

});
R('web/node_modules/bobrilstrap/components/checkbox',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var label_1 = require("./label");
var inputCheckbox_1 = require("./inputCheckbox");
exports.checkboxStyles = {
    checkbox: b.styleDef("checkbox"),
    checkboxInline: b.styleDef("checkbox-inline"),
    disabled: b.styleDef("disabled")
};
exports.Checkbox = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-checkbox",
    render: function (ctx, me) {
        b.style(me, exports.checkboxStyles.checkbox);
        var inputCheckboxNode = inputCheckbox_1.InputCheckbox(ctx.data.inputCheckbox || {});
        var lbl = label_1.Label(ctx.data.label || {}, inputCheckboxNode);
        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, exports.checkboxStyles.checkboxInline);
        }
        else if (ctx.data.inputCheckbox && ctx.data.inputCheckbox.disabled) {
            b.style(me, exports.checkboxStyles.disabled);
        }
        me.children = lbl;
    }
});
exports.default = exports.Checkbox;

});
R('web/node_modules/bobrilstrap/components/cite',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Cite = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-cite",
    render: function (_ctx, me) {
        me.tag = "cite";
    }
});
exports.default = exports.Cite;

});
R('web/node_modules/bobrilstrap/components/code',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Code = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-code",
    render: function (_ctx, me) {
        me.tag = "code";
    }
});
exports.default = exports.Code;

});
R('web/node_modules/bobrilstrap/components/col',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var size_1 = require("./size");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.Col = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-col",
    render: function (ctx, me) {
        applySimplyDefinedStyle(me, ctx.data);
        applyCmpSyles(me, ctx.data.cols, exports.colStyles);
        applyCmpSyles(me, ctx.data.offsets, exports.colOffsetStyles);
        applyCmpSyles(me, ctx.data.pushes, exports.colPushStyles);
        applyCmpSyles(me, ctx.data.pulls, exports.colPullStyles);
    }
});
exports.default = exports.Col;
exports.colStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-" + i; });
exports.colOffsetStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-offset-" + i; });
exports.colPushStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-push-" + i; });
exports.colPullStyles = getStyles(function (size, i) { return "col-" + size_1.Size[size].toLowerCase() + "-pull-" + i; });
function getStyles(decorator) {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(size_1.Size).forEach(function (size) {
        var castedValue = parseInt(size, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, bobrilHelpers_1.createDictionary());
            for (var i = 1; i <= 12; i++) {
                result(castedValue)(i, b.styleDef(decorator(castedValue, i)));
            }
        }
    });
    return result;
}
function applyCmpSyles(me, colTypes, stylesSource) {
    if (colTypes === undefined || stylesSource === undefined)
        return;
    var styles = getCmpStyles(colTypes, stylesSource);
    if (styles.length === 0)
        return;
    b.style(me, styles);
}
function applySimplyDefinedStyle(me, data) {
    if (isStyleAvailable(exports.colStyles, data)) {
        b.style(me, getStyle(exports.colStyles, data));
    }
}
function getCmpStyles(colTypes, stylesSource) {
    var cols = getColTypeArray(colTypes);
    var styles = cols
        .filter(function (colType) { return isStyleAvailable(stylesSource, colType); })
        .map(function (colType) { return getStyle(stylesSource, colType); });
    return styles;
}
function getColTypeArray(colTypes) {
    return colTypes
        ? colTypes instanceof Array ? colTypes : [colTypes]
        : [];
}
function isStyleAvailable(stylesSource, colType) {
    var size = colType.size;
    return (size !== undefined &&
        !!colType.span &&
        !!stylesSource(size) &&
        !!stylesSource(size)(colType.span));
}
function getStyle(stylesSource, colType) {
    return stylesSource(colType.size === undefined ? 1 : colType.size)(colType.span === undefined ? 1 : colType.span);
}

});
R('web/node_modules/bobrilstrap/components/collapse',function(require, module, exports, global){
"use strict";
var b = require("bobril");
exports.collapseStyles = {
    collapse: b.styleDef("collapse"),
    in: b.styleDef("in"),
    collapsed: b.styleDef("collapsed")
};
exports.Collapse = b.createVirtualComponent({
    id: "bobrilstrap-collapse",
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewCollapse(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewCollapse(ctx);
        handleToggle(ctx);
    }
});
function registerNewCollapse(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element || ctx.collapsedElement === element)
        return;
    ctx.collapsedElement = element;
    $(element).collapse({ toggle: !ctx.data.collapsed });
    ctx.collapsed = ctx.data.collapsed;
    $(element).on("hidden.bs.Collapse", function () {
        if (ctx.data.onCollapsed)
            ctx.data.onCollapsed();
    });
    $(element).on("shown.bs.Collapse", function () {
        if (ctx.data.onExpanded)
            ctx.data.onExpanded();
    });
}
function handleToggle(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!!ctx.collapsed !== !!ctx.data.collapsed) {
        ctx.collapsed = !!ctx.data.collapsed;
        $(element).collapse(ctx.collapsed ? "hide" : "show");
    }
}
exports.default = exports.Collapse;

});
R('web/node_modules/bobrilstrap/components/container',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.containerStyle = b.styleDef("container",undefined,"containerStyle");
exports.containerFluidStyle = b.styleDef("container-fluid",undefined,"containerFluidStyle");
exports.Container = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-container",
    render: function (ctx, me) {
        b.style(me, ctx.data.fluid ? exports.containerFluidStyle : exports.containerStyle);
    }
});
exports.default = exports.Container;

});
R('web/node_modules/bobrilstrap/components/dd',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Dd = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-dd",
    render: function (_ctx, me) {
        me.tag = "dd";
    }
});
exports.default = exports.Dd;

});
R('web/node_modules/bobrilstrap/components/del',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Del = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-del",
    render: function (_ctx, me) {
        me.tag = "del";
    }
});
exports.default = exports.Del;

});
R('web/node_modules/bobrilstrap/components/dl',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.Dl = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-dl",
    render: function (ctx, me) {
        me.tag = "dl";
        b.style(me, !!ctx.data.horizontal && typography_1.typography.dlHorizontal);
    }
});
exports.default = exports.Dl;

});
R('web/node_modules/bobrilstrap/components/dropdown',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var button_1 = require("./button");
var buttonGroup_1 = require("./buttonGroup");
var inputGroupBtn_1 = require("./inputGroupBtn");
exports.dropdownStyles = {
    dropdown: b.styleDef("dropdown"),
    dropdownToggle: b.styleDef("dropdown-toggle"),
    dropup: b.styleDef("dropup")
};
exports.Dropdown = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-dropdown",
    render: function (ctx, me) {
        addButton(ctx, me);
        if (ctx.data.buttonGroup || ctx.data.inputGroupBtn) {
            me.tag = undefined;
            var groupNode = ctx.data.buttonGroup
                ? buttonGroup_1.ButtonGroup(typeof ctx.data.buttonGroup === "boolean"
                    ? {}
                    : ctx.data.buttonGroup, me.children)
                : inputGroupBtn_1.InputGroupBtn(typeof ctx.data.inputGroupBtn === "boolean"
                    ? {}
                    : ctx.data.inputGroupBtn, me.children);
            b.style(groupNode, !!ctx.data.up && exports.dropdownStyles.dropup);
            me.children = groupNode;
        }
        else {
            if (ctx.data.button.variant === button_1.ButtonVariant.DropdownNav) {
                me.tag = "li";
            }
            b.style(me, ctx.data.up ? exports.dropdownStyles.dropup : exports.dropdownStyles.dropdown);
        }
    }
});
exports.default = exports.Dropdown;
function updateButtonDataForDropdown(originalButtonData) {
    var buttonData = b.assign({}, originalButtonData);
    buttonData.variant =
        originalButtonData.variant !== undefined
            ? originalButtonData.variant
            : button_1.ButtonVariant.Dropdown;
    buttonData.aria = b.assign({}, buttonData.aria);
    if (buttonData.aria !== undefined)
        buttonData.aria.haspopup = true;
    return buttonData;
}
function addButton(ctx, me) {
    var dropdownButton, caretButton;
    if (ctx.data.splitted) {
        caretButton = button_1.Button(updateButtonDataForDropdown({
            option: ctx.data.button.option,
            size: ctx.data.button.size,
            srOnly: ctx.data.splittedSrOnlyText
        }));
        dropdownButton = button_1.Button(ctx.data.button);
        bobrilHelpers_1.mergeToChildren(me, caretButton, true);
    }
    else {
        dropdownButton = button_1.Button(updateButtonDataForDropdown(ctx.data.button));
    }
    bobrilHelpers_1.mergeToChildren(me, dropdownButton, true);
}

});
R('web/node_modules/bobrilstrap/components/dropdownItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
exports.dropdownItemStyles = b.assign({
    divider: b.styleDef("divider"),
    dropdownHeader: b.styleDef("dropdown-header")
}, li_1.liStyles);
exports.DropdownItem = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-dropdown-item",
    render: function (ctx, me) {
        b.style(me, !!ctx.data.separator && exports.dropdownItemStyles.divider);
        b.style(me, !!ctx.data.header && exports.dropdownItemStyles.dropdownHeader);
        if (ctx.data.separator) {
            me.attrs["role"] = "separator";
        }
    }
});
exports.default = exports.DropdownItem;

});
R('web/node_modules/bobrilstrap/components/dropdownMenu',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
exports.dropdownMenuStyles = {
    dropdownMenu: b.styleDef("dropdown-menu"),
    dropdownMenuRight: b.styleDef("dropdown-menu-right")
};
exports.DropdownMenu = b.createDerivedComponent(ul_1.Ul, {
    id: "bobrilstrap-dropdown-menu",
    render: function (ctx, me) {
        b.style(me, exports.dropdownMenuStyles.dropdownMenu);
        b.style(me, !!ctx.data.right && exports.dropdownMenuStyles.dropdownMenuRight);
        me.attrs["role"] = "menu";
    }
});
exports.default = exports.DropdownMenu;

});
R('web/node_modules/bobrilstrap/components/dt',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Dt = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-dt",
    render: function (_ctx, me) {
        me.tag = "dt";
    }
});
exports.default = exports.Dt;

});
R('web/node_modules/bobrilstrap/components/element',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.E = b.createVirtualComponent({
    id: "bobrilstrap-element",
    render: function (ctx, me) {
        me.tag = ctx.data.tag || "div";
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs || {};
    },
    postRender: function (ctx, me) {
        var aria = ctx.data.aria || {};
        var dataAttrs = ctx.data.data || {};
        if (ctx.data.id)
            me.attrs.id = ctx.data.id;
        if (ctx.data.key)
            b.withKey(me, ctx.data.key);
        if (ctx.data.title)
            me.attrs["title"] = ctx.data.title;
        Object.keys(aria).forEach(function (key) {
            me.attrs["aria-" + bobrilHelpers_1.toLowerWithDashes(key)] = aria[key];
        });
        Object.keys(dataAttrs).forEach(function (key) {
            me.attrs["data-" + bobrilHelpers_1.toLowerWithDashes(key)] = dataAttrs[key];
        });
        b.style(me, ctx.data.style);
    },
    onClick: function (ctx, event) {
        if (!ctx.data.onClick)
            return false;
        return !!ctx.data.onClick(event);
    },
    onChange: function (ctx, value) {
        if (ctx.data.onChange)
            ctx.data.onChange(value);
    },
    onKeyPress: function (ctx, event) {
        if (ctx.data.onKeyPress) {
            return ctx.data.onKeyPress(event);
        }
        return false;
    }
});
exports.Element = exports.E;
exports.Elem = exports.E;
exports.default = exports.E;

});
R('web/node_modules/bobrilstrap/components/embed',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.Embed = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-embed",
    render: function (ctx, me) {
        me.tag = "embed";
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs["src"] = ctx.data.src;
        if (ctx.data.type !== undefined)
            me.attrs["type"] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs["height"] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs["width"] = ctx.data.width;
    }
});
exports.default = exports.Embed;

});
R('web/node_modules/bobrilstrap/components/embedResponsive',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var EmbedAspectRatio;
(function (EmbedAspectRatio) {
    EmbedAspectRatio[EmbedAspectRatio["SixteenByNine"] = 0] = "SixteenByNine";
    EmbedAspectRatio[EmbedAspectRatio["FourByThree"] = 1] = "FourByThree";
})(EmbedAspectRatio = exports.EmbedAspectRatio || (exports.EmbedAspectRatio = {}));
exports.embedResponsiveStyles = {
    embedResponsive: b.styleDef("embed-responsive"),
    embedResponsiveItem: b.styleDef("embed-responsive-item"),
    embedResponsive16by9: b.styleDef("embed-responsive-16by9"),
    embedResponsive4by3: b.styleDef("embed-responsive-4by3")
};
exports.embedResponsiveAsoectRatioStyles = bobrilHelpers_1.createDictionary();
exports.embedResponsiveAsoectRatioStyles(EmbedAspectRatio.SixteenByNine, exports.embedResponsiveStyles.embedResponsive16by9);
exports.embedResponsiveAsoectRatioStyles(EmbedAspectRatio.FourByThree, exports.embedResponsiveStyles.embedResponsive4by3);
exports.EmbedResponsive = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-embed-responsive",
    render: function (ctx, me) {
        b.style(me, exports.embedResponsiveStyles.embedResponsive);
        b.style(me, ctx.data.aspectRatio !== undefined &&
            exports.embedResponsiveAsoectRatioStyles(ctx.data.aspectRatio));
    }
});
exports.default = exports.EmbedResponsive;

});
R('web/node_modules/bobrilstrap/components/fieldset',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Fieldset = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-fieldset",
    render: function (ctx, me) {
        me.tag = "fieldset";
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
    }
});
exports.default = exports.Fieldset;

});
R('web/node_modules/bobrilstrap/components/figure',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Figure = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-figure",
    render: function (_ctx, me) {
        me.tag = "figure";
    }
});
exports.default = exports.Figure;

});
R('web/node_modules/bobrilstrap/components/footer',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Footer = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-footer",
    render: function (_ctx, me) {
        me.tag = "footer";
    }
});
exports.default = exports.Footer;

});
R('web/node_modules/bobrilstrap/components/form',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.formStyles = {
    formHorizontal: b.styleDef("form-horizontal"),
    formInline: b.styleDef("form-inline")
};
exports.Form = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-form",
    render: function (ctx, me) {
        me.tag = "form";
        b.style(me, !!ctx.data.horizontal && exports.formStyles.formHorizontal);
        b.style(me, !!ctx.data.inline && exports.formStyles.formInline);
    }
});
exports.default = exports.Form;

});
R('web/node_modules/bobrilstrap/components/formGroup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var validations_1 = require("./validations");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.formGroupStyles = {
    formGroup: b.styleDef("form-group"),
    lg: b.styleDef("form-group-lg"),
    sm: b.styleDef("form-group-sm")
};
var FormGroupSize;
(function (FormGroupSize) {
    FormGroupSize[FormGroupSize["Lg"] = 0] = "Lg";
    FormGroupSize[FormGroupSize["Default"] = 1] = "Default";
    FormGroupSize[FormGroupSize["Sm"] = 2] = "Sm";
})(FormGroupSize = exports.FormGroupSize || (exports.FormGroupSize = {}));
exports.formGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.formGroupSizeStyles(FormGroupSize.Lg, exports.formGroupStyles.lg);
exports.formGroupSizeStyles(FormGroupSize.Default, false);
exports.formGroupSizeStyles(FormGroupSize.Sm, exports.formGroupStyles.sm);
exports.FormGroup = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-form-group",
    render: function (ctx, me) {
        me.tag = "div";
        b.style(me, exports.formGroupStyles.formGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validations_1.validationStyles.hasFeedback);
        b.style(me, ctx.data.validationState !== undefined &&
            validations_1.validationStateStyles(ctx.data.validationState));
        b.style(me, ctx.data.size !== undefined && exports.formGroupSizeStyles(ctx.data.size));
    }
});
exports.default = exports.FormGroup;

});
R('web/node_modules/bobrilstrap/components/glyphicon',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var GlyphIcon;
(function (GlyphIcon) {
    GlyphIcon[GlyphIcon["Asterisk"] = 0] = "Asterisk";
    GlyphIcon[GlyphIcon["Plus"] = 1] = "Plus";
    GlyphIcon[GlyphIcon["Euro"] = 2] = "Euro";
    GlyphIcon[GlyphIcon["Eur"] = 3] = "Eur";
    GlyphIcon[GlyphIcon["Minus"] = 4] = "Minus";
    GlyphIcon[GlyphIcon["Cloud"] = 5] = "Cloud";
    GlyphIcon[GlyphIcon["Envelope"] = 6] = "Envelope";
    GlyphIcon[GlyphIcon["Pencil"] = 7] = "Pencil";
    GlyphIcon[GlyphIcon["Glass"] = 8] = "Glass";
    GlyphIcon[GlyphIcon["Music"] = 9] = "Music";
    GlyphIcon[GlyphIcon["Search"] = 10] = "Search";
    GlyphIcon[GlyphIcon["Heart"] = 11] = "Heart";
    GlyphIcon[GlyphIcon["Star"] = 12] = "Star";
    GlyphIcon[GlyphIcon["StarEmpty"] = 13] = "StarEmpty";
    GlyphIcon[GlyphIcon["User"] = 14] = "User";
    GlyphIcon[GlyphIcon["Film"] = 15] = "Film";
    GlyphIcon[GlyphIcon["ThLarge"] = 16] = "ThLarge";
    GlyphIcon[GlyphIcon["Th"] = 17] = "Th";
    GlyphIcon[GlyphIcon["ThList"] = 18] = "ThList";
    GlyphIcon[GlyphIcon["Ok"] = 19] = "Ok";
    GlyphIcon[GlyphIcon["Remove"] = 20] = "Remove";
    GlyphIcon[GlyphIcon["ZoomIn"] = 21] = "ZoomIn";
    GlyphIcon[GlyphIcon["ZoomOut"] = 22] = "ZoomOut";
    GlyphIcon[GlyphIcon["Off"] = 23] = "Off";
    GlyphIcon[GlyphIcon["Signal"] = 24] = "Signal";
    GlyphIcon[GlyphIcon["Cog"] = 25] = "Cog";
    GlyphIcon[GlyphIcon["Trash"] = 26] = "Trash";
    GlyphIcon[GlyphIcon["Home"] = 27] = "Home";
    GlyphIcon[GlyphIcon["File"] = 28] = "File";
    GlyphIcon[GlyphIcon["Time"] = 29] = "Time";
    GlyphIcon[GlyphIcon["Road"] = 30] = "Road";
    GlyphIcon[GlyphIcon["DownloadAlt"] = 31] = "DownloadAlt";
    GlyphIcon[GlyphIcon["Download"] = 32] = "Download";
    GlyphIcon[GlyphIcon["Upload"] = 33] = "Upload";
    GlyphIcon[GlyphIcon["Inbox"] = 34] = "Inbox";
    GlyphIcon[GlyphIcon["PlayCircle"] = 35] = "PlayCircle";
    GlyphIcon[GlyphIcon["Repeat"] = 36] = "Repeat";
    GlyphIcon[GlyphIcon["Refresh"] = 37] = "Refresh";
    GlyphIcon[GlyphIcon["ListAlt"] = 38] = "ListAlt";
    GlyphIcon[GlyphIcon["Lock"] = 39] = "Lock";
    GlyphIcon[GlyphIcon["Flag"] = 40] = "Flag";
    GlyphIcon[GlyphIcon["Headphones"] = 41] = "Headphones";
    GlyphIcon[GlyphIcon["VolumeOff"] = 42] = "VolumeOff";
    GlyphIcon[GlyphIcon["VolumeDown"] = 43] = "VolumeDown";
    GlyphIcon[GlyphIcon["VolumeUp"] = 44] = "VolumeUp";
    GlyphIcon[GlyphIcon["Qrcode"] = 45] = "Qrcode";
    GlyphIcon[GlyphIcon["Barcode"] = 46] = "Barcode";
    GlyphIcon[GlyphIcon["Tag"] = 47] = "Tag";
    GlyphIcon[GlyphIcon["Tags"] = 48] = "Tags";
    GlyphIcon[GlyphIcon["Book"] = 49] = "Book";
    GlyphIcon[GlyphIcon["Bookmark"] = 50] = "Bookmark";
    GlyphIcon[GlyphIcon["Print"] = 51] = "Print";
    GlyphIcon[GlyphIcon["Camera"] = 52] = "Camera";
    GlyphIcon[GlyphIcon["Font"] = 53] = "Font";
    GlyphIcon[GlyphIcon["Bold"] = 54] = "Bold";
    GlyphIcon[GlyphIcon["Italic"] = 55] = "Italic";
    GlyphIcon[GlyphIcon["TextHeight"] = 56] = "TextHeight";
    GlyphIcon[GlyphIcon["TextWidth"] = 57] = "TextWidth";
    GlyphIcon[GlyphIcon["AlignLeft"] = 58] = "AlignLeft";
    GlyphIcon[GlyphIcon["AlignCenter"] = 59] = "AlignCenter";
    GlyphIcon[GlyphIcon["AlignRight"] = 60] = "AlignRight";
    GlyphIcon[GlyphIcon["AlignJustify"] = 61] = "AlignJustify";
    GlyphIcon[GlyphIcon["List"] = 62] = "List";
    GlyphIcon[GlyphIcon["IndentLeft"] = 63] = "IndentLeft";
    GlyphIcon[GlyphIcon["IndentRight"] = 64] = "IndentRight";
    GlyphIcon[GlyphIcon["FacetimeVideo"] = 65] = "FacetimeVideo";
    GlyphIcon[GlyphIcon["Picture"] = 66] = "Picture";
    GlyphIcon[GlyphIcon["MapMarker"] = 67] = "MapMarker";
    GlyphIcon[GlyphIcon["Adjust"] = 68] = "Adjust";
    GlyphIcon[GlyphIcon["Tint"] = 69] = "Tint";
    GlyphIcon[GlyphIcon["Edit"] = 70] = "Edit";
    GlyphIcon[GlyphIcon["Share"] = 71] = "Share";
    GlyphIcon[GlyphIcon["Check"] = 72] = "Check";
    GlyphIcon[GlyphIcon["Move"] = 73] = "Move";
    GlyphIcon[GlyphIcon["StepBackward"] = 74] = "StepBackward";
    GlyphIcon[GlyphIcon["FastBackward"] = 75] = "FastBackward";
    GlyphIcon[GlyphIcon["Backward"] = 76] = "Backward";
    GlyphIcon[GlyphIcon["Play"] = 77] = "Play";
    GlyphIcon[GlyphIcon["Pause"] = 78] = "Pause";
    GlyphIcon[GlyphIcon["Stop"] = 79] = "Stop";
    GlyphIcon[GlyphIcon["Forward"] = 80] = "Forward";
    GlyphIcon[GlyphIcon["FastForward"] = 81] = "FastForward";
    GlyphIcon[GlyphIcon["StepForward"] = 82] = "StepForward";
    GlyphIcon[GlyphIcon["Eject"] = 83] = "Eject";
    GlyphIcon[GlyphIcon["ChevronLeft"] = 84] = "ChevronLeft";
    GlyphIcon[GlyphIcon["ChevronRight"] = 85] = "ChevronRight";
    GlyphIcon[GlyphIcon["PlusSign"] = 86] = "PlusSign";
    GlyphIcon[GlyphIcon["MinusSign"] = 87] = "MinusSign";
    GlyphIcon[GlyphIcon["RemoveSign"] = 88] = "RemoveSign";
    GlyphIcon[GlyphIcon["OkSign"] = 89] = "OkSign";
    GlyphIcon[GlyphIcon["QuestionSign"] = 90] = "QuestionSign";
    GlyphIcon[GlyphIcon["InfoSign"] = 91] = "InfoSign";
    GlyphIcon[GlyphIcon["Screenshot"] = 92] = "Screenshot";
    GlyphIcon[GlyphIcon["RemoveCircle"] = 93] = "RemoveCircle";
    GlyphIcon[GlyphIcon["OkCircle"] = 94] = "OkCircle";
    GlyphIcon[GlyphIcon["BanCircle"] = 95] = "BanCircle";
    GlyphIcon[GlyphIcon["ArrowLeft"] = 96] = "ArrowLeft";
    GlyphIcon[GlyphIcon["ArrowRight"] = 97] = "ArrowRight";
    GlyphIcon[GlyphIcon["ArrowUp"] = 98] = "ArrowUp";
    GlyphIcon[GlyphIcon["ArrowDown"] = 99] = "ArrowDown";
    GlyphIcon[GlyphIcon["ShareAlt"] = 100] = "ShareAlt";
    GlyphIcon[GlyphIcon["ResizeFull"] = 101] = "ResizeFull";
    GlyphIcon[GlyphIcon["ResizeSmall"] = 102] = "ResizeSmall";
    GlyphIcon[GlyphIcon["ExclamationSign"] = 103] = "ExclamationSign";
    GlyphIcon[GlyphIcon["Gift"] = 104] = "Gift";
    GlyphIcon[GlyphIcon["Leaf"] = 105] = "Leaf";
    GlyphIcon[GlyphIcon["Fire"] = 106] = "Fire";
    GlyphIcon[GlyphIcon["EyeOpen"] = 107] = "EyeOpen";
    GlyphIcon[GlyphIcon["EyeClose"] = 108] = "EyeClose";
    GlyphIcon[GlyphIcon["WarningSign"] = 109] = "WarningSign";
    GlyphIcon[GlyphIcon["Plane"] = 110] = "Plane";
    GlyphIcon[GlyphIcon["Calendar"] = 111] = "Calendar";
    GlyphIcon[GlyphIcon["Random"] = 112] = "Random";
    GlyphIcon[GlyphIcon["Comment"] = 113] = "Comment";
    GlyphIcon[GlyphIcon["Magnet"] = 114] = "Magnet";
    GlyphIcon[GlyphIcon["ChevronUp"] = 115] = "ChevronUp";
    GlyphIcon[GlyphIcon["ChevronDown"] = 116] = "ChevronDown";
    GlyphIcon[GlyphIcon["Retweet"] = 117] = "Retweet";
    GlyphIcon[GlyphIcon["Shoppingcart"] = 118] = "Shoppingcart";
    GlyphIcon[GlyphIcon["FolderClose"] = 119] = "FolderClose";
    GlyphIcon[GlyphIcon["FolderOpen"] = 120] = "FolderOpen";
    GlyphIcon[GlyphIcon["ResizeVertical"] = 121] = "ResizeVertical";
    GlyphIcon[GlyphIcon["ResizeHorizontal"] = 122] = "ResizeHorizontal";
    GlyphIcon[GlyphIcon["Hdd"] = 123] = "Hdd";
    GlyphIcon[GlyphIcon["Bullhorn"] = 124] = "Bullhorn";
    GlyphIcon[GlyphIcon["Bell"] = 125] = "Bell";
    GlyphIcon[GlyphIcon["Certificate"] = 126] = "Certificate";
    GlyphIcon[GlyphIcon["ThumbsUp"] = 127] = "ThumbsUp";
    GlyphIcon[GlyphIcon["ThumbsDown"] = 128] = "ThumbsDown";
    GlyphIcon[GlyphIcon["HandRight"] = 129] = "HandRight";
    GlyphIcon[GlyphIcon["HandUeft"] = 130] = "HandUeft";
    GlyphIcon[GlyphIcon["HandUp"] = 131] = "HandUp";
    GlyphIcon[GlyphIcon["HandDown"] = 132] = "HandDown";
    GlyphIcon[GlyphIcon["CircleArrowRight"] = 133] = "CircleArrowRight";
    GlyphIcon[GlyphIcon["CircleArrowLEft"] = 134] = "CircleArrowLEft";
    GlyphIcon[GlyphIcon["CircleArrowUp"] = 135] = "CircleArrowUp";
    GlyphIcon[GlyphIcon["CircleArrowDown"] = 136] = "CircleArrowDown";
    GlyphIcon[GlyphIcon["Globe"] = 137] = "Globe";
    GlyphIcon[GlyphIcon["Wrench"] = 138] = "Wrench";
    GlyphIcon[GlyphIcon["Tasks"] = 139] = "Tasks";
    GlyphIcon[GlyphIcon["Filter"] = 140] = "Filter";
    GlyphIcon[GlyphIcon["Briefcase"] = 141] = "Briefcase";
    GlyphIcon[GlyphIcon["Fullscreen"] = 142] = "Fullscreen";
    GlyphIcon[GlyphIcon["Dashboard"] = 143] = "Dashboard";
    GlyphIcon[GlyphIcon["Paperclip"] = 144] = "Paperclip";
    GlyphIcon[GlyphIcon["HeartEmpty"] = 145] = "HeartEmpty";
    GlyphIcon[GlyphIcon["Link"] = 146] = "Link";
    GlyphIcon[GlyphIcon["Phone"] = 147] = "Phone";
    GlyphIcon[GlyphIcon["Pushpin"] = 148] = "Pushpin";
    GlyphIcon[GlyphIcon["Usd"] = 149] = "Usd";
    GlyphIcon[GlyphIcon["Gbp"] = 150] = "Gbp";
    GlyphIcon[GlyphIcon["Sort"] = 151] = "Sort";
    GlyphIcon[GlyphIcon["SortByAlphabet"] = 152] = "SortByAlphabet";
    GlyphIcon[GlyphIcon["SortByAlphabetAlt"] = 153] = "SortByAlphabetAlt";
    GlyphIcon[GlyphIcon["SortByOrder"] = 154] = "SortByOrder";
    GlyphIcon[GlyphIcon["SortByOrderAlt"] = 155] = "SortByOrderAlt";
    GlyphIcon[GlyphIcon["SortByAttributes"] = 156] = "SortByAttributes";
    GlyphIcon[GlyphIcon["SortByAttributesAlt"] = 157] = "SortByAttributesAlt";
    GlyphIcon[GlyphIcon["Unchecked"] = 158] = "Unchecked";
    GlyphIcon[GlyphIcon["Expand"] = 159] = "Expand";
    GlyphIcon[GlyphIcon["CollapseDown"] = 160] = "CollapseDown";
    GlyphIcon[GlyphIcon["CollapseUp"] = 161] = "CollapseUp";
    GlyphIcon[GlyphIcon["LogIn"] = 162] = "LogIn";
    GlyphIcon[GlyphIcon["Flash"] = 163] = "Flash";
    GlyphIcon[GlyphIcon["LogOut"] = 164] = "LogOut";
    GlyphIcon[GlyphIcon["NewWindow"] = 165] = "NewWindow";
    GlyphIcon[GlyphIcon["Record"] = 166] = "Record";
    GlyphIcon[GlyphIcon["Save"] = 167] = "Save";
    GlyphIcon[GlyphIcon["Open"] = 168] = "Open";
    GlyphIcon[GlyphIcon["Saved"] = 169] = "Saved";
    GlyphIcon[GlyphIcon["Import"] = 170] = "Import";
    GlyphIcon[GlyphIcon["Export"] = 171] = "Export";
    GlyphIcon[GlyphIcon["Send"] = 172] = "Send";
    GlyphIcon[GlyphIcon["FloppyDisk"] = 173] = "FloppyDisk";
    GlyphIcon[GlyphIcon["FloppySaved"] = 174] = "FloppySaved";
    GlyphIcon[GlyphIcon["FloppyRemove"] = 175] = "FloppyRemove";
    GlyphIcon[GlyphIcon["FloppySave"] = 176] = "FloppySave";
    GlyphIcon[GlyphIcon["FloppyOpen"] = 177] = "FloppyOpen";
    GlyphIcon[GlyphIcon["CreditCard"] = 178] = "CreditCard";
    GlyphIcon[GlyphIcon["Transfer"] = 179] = "Transfer";
    GlyphIcon[GlyphIcon["Cutlery"] = 180] = "Cutlery";
    GlyphIcon[GlyphIcon["Header"] = 181] = "Header";
    GlyphIcon[GlyphIcon["Compressed"] = 182] = "Compressed";
    GlyphIcon[GlyphIcon["Earphone"] = 183] = "Earphone";
    GlyphIcon[GlyphIcon["PhoneAlt"] = 184] = "PhoneAlt";
    GlyphIcon[GlyphIcon["Tower"] = 185] = "Tower";
    GlyphIcon[GlyphIcon["Stats"] = 186] = "Stats";
    GlyphIcon[GlyphIcon["SdVideo"] = 187] = "SdVideo";
    GlyphIcon[GlyphIcon["HdVideo"] = 188] = "HdVideo";
    GlyphIcon[GlyphIcon["Subtitles"] = 189] = "Subtitles";
    GlyphIcon[GlyphIcon["SoundStereo"] = 190] = "SoundStereo";
    GlyphIcon[GlyphIcon["SoundDolby"] = 191] = "SoundDolby";
    GlyphIcon[GlyphIcon["Sound51"] = 192] = "Sound51";
    GlyphIcon[GlyphIcon["Sound61"] = 193] = "Sound61";
    GlyphIcon[GlyphIcon["Sound71"] = 194] = "Sound71";
    GlyphIcon[GlyphIcon["CopyrightMark"] = 195] = "CopyrightMark";
    GlyphIcon[GlyphIcon["RegistrationMark"] = 196] = "RegistrationMark";
    GlyphIcon[GlyphIcon["CloudDownload"] = 197] = "CloudDownload";
    GlyphIcon[GlyphIcon["CloudUpload"] = 198] = "CloudUpload";
    GlyphIcon[GlyphIcon["TreeConifer"] = 199] = "TreeConifer";
    GlyphIcon[GlyphIcon["TreeDeciduous"] = 200] = "TreeDeciduous";
    GlyphIcon[GlyphIcon["Cd"] = 201] = "Cd";
    GlyphIcon[GlyphIcon["SaveFile"] = 202] = "SaveFile";
    GlyphIcon[GlyphIcon["OpenFile"] = 203] = "OpenFile";
    GlyphIcon[GlyphIcon["LevelUp"] = 204] = "LevelUp";
    GlyphIcon[GlyphIcon["Copy"] = 205] = "Copy";
    GlyphIcon[GlyphIcon["Paste"] = 206] = "Paste";
    GlyphIcon[GlyphIcon["Alert"] = 207] = "Alert";
    GlyphIcon[GlyphIcon["Equalizer"] = 208] = "Equalizer";
    GlyphIcon[GlyphIcon["King"] = 209] = "King";
    GlyphIcon[GlyphIcon["Queen"] = 210] = "Queen";
    GlyphIcon[GlyphIcon["Pawn"] = 211] = "Pawn";
    GlyphIcon[GlyphIcon["Bishop"] = 212] = "Bishop";
    GlyphIcon[GlyphIcon["Knight"] = 213] = "Knight";
    GlyphIcon[GlyphIcon["BabyFormula"] = 214] = "BabyFormula";
    GlyphIcon[GlyphIcon["Tent"] = 215] = "Tent";
    GlyphIcon[GlyphIcon["Blackboard"] = 216] = "Blackboard";
    GlyphIcon[GlyphIcon["Bed"] = 217] = "Bed";
    GlyphIcon[GlyphIcon["Apple"] = 218] = "Apple";
    GlyphIcon[GlyphIcon["Erase"] = 219] = "Erase";
    GlyphIcon[GlyphIcon["Hourglass"] = 220] = "Hourglass";
    GlyphIcon[GlyphIcon["Lamp"] = 221] = "Lamp";
    GlyphIcon[GlyphIcon["Duplicate"] = 222] = "Duplicate";
    GlyphIcon[GlyphIcon["PiggyBank"] = 223] = "PiggyBank";
    GlyphIcon[GlyphIcon["Scissors"] = 224] = "Scissors";
    GlyphIcon[GlyphIcon["Bitcoin"] = 225] = "Bitcoin";
    GlyphIcon[GlyphIcon["Btc"] = 226] = "Btc";
    GlyphIcon[GlyphIcon["Xbt"] = 227] = "Xbt";
    GlyphIcon[GlyphIcon["Yen"] = 228] = "Yen";
    GlyphIcon[GlyphIcon["Jpy"] = 229] = "Jpy";
    GlyphIcon[GlyphIcon["Ruble"] = 230] = "Ruble";
    GlyphIcon[GlyphIcon["Rub"] = 231] = "Rub";
    GlyphIcon[GlyphIcon["Scale"] = 232] = "Scale";
    GlyphIcon[GlyphIcon["IceLolly"] = 233] = "IceLolly";
    GlyphIcon[GlyphIcon["IceLollyTasted"] = 234] = "IceLollyTasted";
    GlyphIcon[GlyphIcon["Education"] = 235] = "Education";
    GlyphIcon[GlyphIcon["OptionHorizontal"] = 236] = "OptionHorizontal";
    GlyphIcon[GlyphIcon["OptionVertical"] = 237] = "OptionVertical";
    GlyphIcon[GlyphIcon["MenuHamburger"] = 238] = "MenuHamburger";
    GlyphIcon[GlyphIcon["ModalWindow"] = 239] = "ModalWindow";
    GlyphIcon[GlyphIcon["Oil"] = 240] = "Oil";
    GlyphIcon[GlyphIcon["Grain"] = 241] = "Grain";
    GlyphIcon[GlyphIcon["Sunglasses"] = 242] = "Sunglasses";
    GlyphIcon[GlyphIcon["TextDize"] = 243] = "TextDize";
    GlyphIcon[GlyphIcon["TextColor"] = 244] = "TextColor";
    GlyphIcon[GlyphIcon["TextBackground"] = 245] = "TextBackground";
    GlyphIcon[GlyphIcon["ObjectAlignTop"] = 246] = "ObjectAlignTop";
    GlyphIcon[GlyphIcon["ObjectAlignBottom"] = 247] = "ObjectAlignBottom";
    GlyphIcon[GlyphIcon["ObjectAlignHorizontal"] = 248] = "ObjectAlignHorizontal";
    GlyphIcon[GlyphIcon["ObjectAlignLeft"] = 249] = "ObjectAlignLeft";
    GlyphIcon[GlyphIcon["ObjectAlignVertical"] = 250] = "ObjectAlignVertical";
    GlyphIcon[GlyphIcon["ObjectAlignRight"] = 251] = "ObjectAlignRight";
    GlyphIcon[GlyphIcon["TriangleRight"] = 252] = "TriangleRight";
    GlyphIcon[GlyphIcon["TriangleLeft"] = 253] = "TriangleLeft";
    GlyphIcon[GlyphIcon["TriangleBottom"] = 254] = "TriangleBottom";
    GlyphIcon[GlyphIcon["TriangleTop"] = 255] = "TriangleTop";
    GlyphIcon[GlyphIcon["Console"] = 256] = "Console";
    GlyphIcon[GlyphIcon["Superscript"] = 257] = "Superscript";
    GlyphIcon[GlyphIcon["Subscript"] = 258] = "Subscript";
    GlyphIcon[GlyphIcon["MenuLeft"] = 259] = "MenuLeft";
    GlyphIcon[GlyphIcon["MenuRight"] = 260] = "MenuRight";
    GlyphIcon[GlyphIcon["MenuDown"] = 261] = "MenuDown";
    GlyphIcon[GlyphIcon["MenuUp"] = 262] = "MenuUp";
})(GlyphIcon = exports.GlyphIcon || (exports.GlyphIcon = {}));
exports.glyphIconStyles = {
    glyphicon: b.styleDef("glyphicon"),
    formControlFeedback: b.styleDef("form-control-feedback")
};
exports.glyphIconTypeStyles = generateStyles();
exports.Glyphicon = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-glyphicon",
    render: function (ctx, me) {
        me.tag = "span";
        me.attrs["aria-hidden"] = true;
        b.style(me, exports.glyphIconStyles.glyphicon);
        b.style(me, exports.glyphIconTypeStyles(ctx.data.icon));
        b.style(me, !!ctx.data.formControlFeedback && exports.glyphIconStyles.formControlFeedback);
    }
});
exports.default = exports.Glyphicon;
function generateStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(GlyphIcon).forEach(function (key) {
        var castedValue = parseInt(key, 10);
        if (!isNaN(castedValue)) {
            result(castedValue, b.styleDef("glyphicon-" + bobrilHelpers_1.toLowerWithDashes(GlyphIcon[castedValue])));
        }
    });
    return result;
}

});
R('web/node_modules/bobrilstrap/components/headings',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.H1 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h1',
    render: function (_ctx, me) {
        me.tag = 'h1';
    }
});
exports.H2 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h2',
    render: function (_ctx, me) {
        me.tag = 'h2';
    }
});
exports.H3 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h3',
    render: function (_ctx, me) {
        me.tag = 'h3';
    }
});
exports.H4 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h4',
    render: function (_ctx, me) {
        me.tag = 'h4';
    }
});
exports.H5 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h5',
    render: function (_ctx, me) {
        me.tag = 'h5';
    }
});
exports.H6 = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-h6',
    render: function (_ctx, me) {
        me.tag = 'h6';
    }
});

});
R('web/node_modules/bobrilstrap/components/helpers',function(require, module, exports, global){
"use strict";
var b = require("bobril");
exports.helpers = {
    text: {
        mutated: b.styleDef("text-mutated"),
        primary: b.styleDef("text-primary"),
        success: b.styleDef("text-success"),
        info: b.styleDef("text-info"),
        warning: b.styleDef("text-warning"),
        danger: b.styleDef("text-danger")
    },
    background: {
        primary: b.styleDef("bg-primary"),
        success: b.styleDef("bg-success"),
        info: b.styleDef("bg-info"),
        warning: b.styleDef("bg-warning"),
        danger: b.styleDef("bg-danger")
    },
    float: {
        pullLeft: b.styleDef("pull-left"),
        pullRight: b.styleDef("pull-right")
    },
    clearfix: b.styleDef("clearfix"),
    close: b.styleDef("close"),
    caret: b.styleDef("caret"),
    centerBlock: b.styleDef("center-block"),
    hidden: b.styleDef("hidden"),
    invisible: b.styleDef("invisible"),
    show: b.styleDef("show"),
    srOnly: b.styleDef("sr-only"),
    srOnlyFocusable: b.styleDef("sr-only-focusable"),
    textHide: b.styleDef("text-hide"),
    thumbnail: b.styleDef("thumbnail")
};
exports.default = exports.helpers;

});
R('web/node_modules/bobrilstrap/components/helpText',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.helpTextStyle = b.styleDef("help-block",undefined,"helpTextStyle");
exports.HelpText = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-help-text",
    render: function (_ctx, me) {
        me.tag = "span";
        b.style(me, exports.helpTextStyle);
    }
});
exports.default = exports.HelpText;

});
R('web/node_modules/bobrilstrap/components/iframe',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.IFrame = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-iframe",
    render: function (ctx, me) {
        me.tag = "iframe";
        me.attrs["src"] = ctx.data.src;
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
    }
});
exports.default = exports.IFrame;

});
R('web/node_modules/bobrilstrap/components/image',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var helpers_1 = require("./helpers");
exports.imageStyles = {
    centerBlock: helpers_1.helpers.centerBlock,
    imgResponsive: b.styleDef("img-responsive"),
    imgRounded: b.styleDef("img-rounded"),
    imgCircle: b.styleDef("img-circle"),
    imgThumbnail: b.styleDef("img-thumbnail"),
    ieSvgFix: b.styleDef({ width: "100% \\9" }, undefined, "ie-svg-fix")
};
var ImageShape;
(function (ImageShape) {
    ImageShape[ImageShape["Rounded"] = 0] = "Rounded";
    ImageShape[ImageShape["Circle"] = 1] = "Circle";
    ImageShape[ImageShape["Thumbnail"] = 2] = "Thumbnail";
})(ImageShape = exports.ImageShape || (exports.ImageShape = {}));
exports.imageShapeStyles = bobrilHelpers_1.createDictionary();
exports.imageShapeStyles(ImageShape.Rounded, exports.imageStyles.imgRounded);
exports.imageShapeStyles(ImageShape.Circle, exports.imageStyles.imgCircle);
exports.imageShapeStyles(ImageShape.Thumbnail, exports.imageStyles.imgThumbnail);
exports.Image = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-image",
    render: function (ctx, me) {
        me.tag = "img";
        me.attrs["src"] = ctx.data.src;
        me.attrs["alt"] = ctx.data.alt;
        if (ctx.data.height !== undefined)
            me.attrs["height"] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs["width"] = ctx.data.width;
        b.style(me, ctx.data.shape !== undefined && exports.imageShapeStyles(ctx.data.shape));
        b.style(me, !!ctx.data.responsive && exports.imageStyles.imgResponsive);
        b.style(me, !!ctx.data.centerBlock && exports.imageStyles.centerBlock);
        b.style(me, !!ctx.data.ieSvgFix && exports.imageStyles.ieSvgFix);
    }
});
exports.default = exports.Image;

});
R('web/node_modules/bobrilstrap/components/inputCheckbox',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.InputCheckbox = b.createOverridingComponent(element_1.Elem, {
    id: "bobrilstrap-input-checkbox",
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.checked !== undefined) {
            ctx.checked = !!ctx.data.checked;
        }
        else if (ctx.checked === undefined) {
            ctx.checked = false;
        }
        me.tag = "input";
        me.attrs["type"] = "checkbox";
        me.attrs.value = ctx.checked;
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
        if (ctx.data.readonly)
            me.attrs["readonly"] = "readonly";
    },
    onChange: function (ctx, value) {
        ctx.checked = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
exports.default = exports.InputCheckbox;

});
R('web/node_modules/bobrilstrap/components/inputGroup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var validations_1 = require("./validations");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.inputGroupStyles = {
    inputGroup: b.styleDef("input-group"),
    lg: b.styleDef("input-group-lg"),
    sm: b.styleDef("input-group-sm")
};
var InputGroupSize;
(function (InputGroupSize) {
    InputGroupSize[InputGroupSize["Lg"] = 0] = "Lg";
    InputGroupSize[InputGroupSize["Sm"] = 1] = "Sm";
})(InputGroupSize = exports.InputGroupSize || (exports.InputGroupSize = {}));
exports.inputGroupSizeStyles = bobrilHelpers_1.createDictionary();
exports.inputGroupSizeStyles(InputGroupSize.Lg, exports.inputGroupStyles.lg);
exports.inputGroupSizeStyles(InputGroupSize.Sm, exports.inputGroupStyles.sm);
exports.InputGroup = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-input-group",
    render: function (ctx, me) {
        me.tag = "div";
        b.style(me, exports.inputGroupStyles.inputGroup);
        b.style(me, !!ctx.data.hasFeedbeck && validations_1.validationStyles.hasFeedback);
        b.style(me, ctx.data.validationState !== undefined &&
            validations_1.validationStateStyles(ctx.data.validationState));
        b.style(me, ctx.data.size !== undefined && exports.inputGroupSizeStyles(ctx.data.size));
    }
});
exports.default = exports.InputGroup;

});
R('web/node_modules/bobrilstrap/components/inputGroupAddon',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputGroupAddonStyle = b.styleDef("input-group-addon",undefined,"inputGroupAddonStyle");
exports.InputGroupAddon = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-input-group-addon",
    render: function (_ctx, me) {
        me.tag = "span";
        b.style(me, exports.inputGroupAddonStyle);
    }
});
exports.default = exports.InputGroupAddon;

});
R('web/node_modules/bobrilstrap/components/inputGroupBtn',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.inputGroupBtnStyles = {
    inputGroupBtn: b.styleDef("input-group-btn")
};
exports.InputGroupBtn = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-input-group-button",
    render: function (_ctx, me) {
        b.style(me, exports.inputGroupBtnStyles.inputGroupBtn);
    }
});
exports.default = exports.InputGroupBtn;

});
R('web/node_modules/bobrilstrap/components/inputRadio',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.InputRadio = b.createOverridingComponent(element_1.Elem, {
    id: "bobrilstrap-input-radio",
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined &&
            (ctx.data.checked !== undefined || ctx.data.checkedValue !== undefined)) {
            ctx.checked =
                (!!ctx.data.value && ctx.data.value === ctx.data.checkedValue) ||
                    !!ctx.data.checked;
        }
        else if (ctx.checked === undefined) {
            ctx.checked = false;
        }
        me.tag = "input";
        me.attrs["type"] = "radio";
        me.attrs.value = ctx.checked;
        me.attrs["name"] = ctx.data.name;
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
        if (ctx.data.readonly)
            me.attrs["readonly"] = "readonly";
    },
    onChange: function (ctx, value) {
        ctx.checked = value;
        ctx.me.component.super.onChange(ctx, value);
        if (value && ctx.data.onChecked)
            ctx.data.onChecked(ctx.data.value);
        if (!value && ctx.data.onUnChecked)
            ctx.data.onUnChecked(ctx.data.value);
    }
});
exports.default = exports.InputRadio;

});
R('web/node_modules/bobrilstrap/components/inputText',function(require, module, exports, global){
"use strict";
/// <reference types="bootstrap-3-typeahead" />
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var InputTextType;
(function (InputTextType) {
    InputTextType[InputTextType["Color"] = 0] = "Color";
    InputTextType[InputTextType["Date"] = 1] = "Date";
    InputTextType[InputTextType["Datetime"] = 2] = "Datetime";
    InputTextType[InputTextType["DatetimeLocal"] = 3] = "DatetimeLocal";
    InputTextType[InputTextType["Email"] = 4] = "Email";
    InputTextType[InputTextType["Month"] = 5] = "Month";
    InputTextType[InputTextType["Number"] = 6] = "Number";
    InputTextType[InputTextType["Password"] = 7] = "Password";
    InputTextType[InputTextType["Range"] = 8] = "Range";
    InputTextType[InputTextType["Search"] = 9] = "Search";
    InputTextType[InputTextType["Tel"] = 10] = "Tel";
    InputTextType[InputTextType["Text"] = 11] = "Text";
    InputTextType[InputTextType["Time"] = 12] = "Time";
    InputTextType[InputTextType["Url"] = 13] = "Url";
    InputTextType[InputTextType["Week"] = 14] = "Week";
})(InputTextType = exports.InputTextType || (exports.InputTextType = {}));
exports.inputTextStyles = {
    formControl: b.styleDef("form-control"),
    lg: b.styleDef("input-lg"),
    sm: b.styleDef("input-sm")
};
var InputTextSize;
(function (InputTextSize) {
    InputTextSize[InputTextSize["Lg"] = 0] = "Lg";
    InputTextSize[InputTextSize["Default"] = 1] = "Default";
    InputTextSize[InputTextSize["Sm"] = 2] = "Sm";
})(InputTextSize = exports.InputTextSize || (exports.InputTextSize = {}));
exports.inputTextSizeStyles = bobrilHelpers_1.createDictionary();
exports.inputTextSizeStyles(InputTextSize.Lg, exports.inputTextStyles.lg);
exports.inputTextSizeStyles(InputTextSize.Default, false);
exports.inputTextSizeStyles(InputTextSize.Sm, exports.inputTextStyles.sm);
exports.InputText = b.createOverridingComponent(element_1.Elem, {
    id: "bobrilstrap-input-text",
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        me.tag = "input";
        me.attrs["type"] = bobrilHelpers_1.toLowerWithDashes(ctx.data.type !== undefined
            ? InputTextType[ctx.data.type]
            : InputTextType[InputTextType.Text]);
        me.attrs.value = ctx.value;
        b.style(me, exports.inputTextStyles.formControl);
        b.style(me, ctx.data.size !== undefined && exports.inputTextSizeStyles(ctx.data.size));
        if (ctx.data.placeholder)
            me.attrs["placeholder"] = ctx.data.placeholder;
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
        if (ctx.data.readonly)
            me.attrs["readonly"] = "readonly";
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    },
    postInitDom: function (ctx) {
        if (ctx.data.typeaheadOptions)
            registerNewTypeahead(ctx);
    },
    postUpdateDom: function (ctx) {
        if (ctx.data.typeaheadOptions)
            registerNewTypeahead(ctx);
    },
    destroy: function (ctx) {
        unregister(ctx);
    }
});
function registerNewTypeahead(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element) {
        ctx.jQueryElement = undefined;
        return;
    }
    if (!ctx.jQueryElement) {
        ctx.jQueryElement = $(element);
        ctx.jQueryElement.typeahead(ctx.data.typeaheadOptions);
    }
}
function unregister(ctx) {
    if (ctx.jQueryElement) {
        $(ctx.jQueryElement).typeahead("destroy");
        ctx.jQueryElement = undefined;
    }
}
exports.default = exports.InputText;

});
R('web/node_modules/bobrilstrap/components/ins',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Ins = b.createDerivedComponent(element_1.Elem, {
    id: 'bobrilstrap-ins',
    render: function (_ctx, me) {
        me.tag = 'ins';
    }
});
exports.default = exports.Ins;

});
R('web/node_modules/bobrilstrap/components/italics',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Italics = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-italics",
    render: function (_ctx, me) {
        me.tag = "em";
    }
});
exports.Em = exports.Italics;
exports.default = exports.Italics;

});
R('web/node_modules/bobrilstrap/components/jumbotron',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.jumbotronStyle = b.styleDef("jumbotron",undefined,"jumbotronStyle");
exports.Jumbotron = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-jumbotron",
    render: function (_ctx, me) {
        b.style(me, exports.jumbotronStyle);
    }
});
exports.default = exports.Jumbotron;

});
R('web/node_modules/bobrilstrap/components/kbd',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Kbd = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-kbd",
    render: function (_ctx, me) {
        me.tag = "kbd";
    }
});
exports.default = exports.Kbd;

});
R('web/node_modules/bobrilstrap/components/label',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var helpers_1 = require("./helpers");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.labelStyles = {
    srOnly: helpers_1.helpers.srOnly,
    controlLabel: b.styleDef("control-label")
};
exports.Label = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-label",
    render: function (ctx, me) {
        me.tag = "label";
        b.style(me, !!ctx.data.srOnly && exports.labelStyles.srOnly);
        b.style(me, !!ctx.data.controlLabel && exports.labelStyles.controlLabel);
        if (ctx.data.for)
            me.attrs["for"] = ctx.data.for;
        if (ctx.data.title)
            bobrilHelpers_1.mergeToChildren(me, ctx.data.title);
        delete me.attrs["title"];
    }
});
exports.default = exports.Label;

});
R('web/node_modules/bobrilstrap/components/li',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.liStyles = {
    active: b.styleDef("active"),
    disabled: b.styleDef("disabled")
};
exports.Li = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-li",
    render: function (ctx, me) {
        me.tag = "li";
        b.style(me, !!ctx.data.active && exports.liStyles.active);
        b.style(me, !!ctx.data.disabled && exports.liStyles.disabled);
    }
});
exports.default = exports.Li;

});
R('web/node_modules/bobrilstrap/components/listGroup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ListGroupItemContext;
(function (ListGroupItemContext) {
    ListGroupItemContext[ListGroupItemContext["Success"] = 0] = "Success";
    ListGroupItemContext[ListGroupItemContext["Info"] = 1] = "Info";
    ListGroupItemContext[ListGroupItemContext["Warning"] = 2] = "Warning";
    ListGroupItemContext[ListGroupItemContext["Danger"] = 3] = "Danger";
})(ListGroupItemContext = exports.ListGroupItemContext || (exports.ListGroupItemContext = {}));
exports.listGroupStyles = {
    listGroup: b.styleDef("list-group"),
    listGroupItem: b.styleDef("list-group-item"),
    listGroupItemHeading: b.styleDef("list-group-item-heading"),
    listGroupItemText: b.styleDef("list-group-item-text"),
    active: b.styleDef("active"),
    disabled: b.styleDef("disabled"),
    listGroupItemSuccess: b.styleDef("list-group-item-success"),
    listGroupItemInfo: b.styleDef("list-group-item-info"),
    listGroupItemWarning: b.styleDef("list-group-item-warning"),
    listGroupItemDanger: b.styleDef("list-group-item-danger")
};
exports.listGroupItemContextStyles = bobrilHelpers_1.createDictionary();
exports.listGroupItemContextStyles(ListGroupItemContext.Success, exports.listGroupStyles.listGroupItemSuccess);
exports.listGroupItemContextStyles(ListGroupItemContext.Info, exports.listGroupStyles.listGroupItemInfo);
exports.listGroupItemContextStyles(ListGroupItemContext.Warning, exports.listGroupStyles.listGroupItemWarning);
exports.listGroupItemContextStyles(ListGroupItemContext.Danger, exports.listGroupStyles.listGroupItemDanger);
exports.ListGroup = b.createDerivedComponent(ul_1.Ul, {
    id: "bobrilstrap-listgroup",
    render: function (ctx, me) {
        if (ctx.data.linkified)
            me.tag = "div";
        b.style(me, exports.listGroupStyles.listGroup);
    }
});
exports.default = exports.ListGroup;

});
R('web/node_modules/bobrilstrap/components/listGroupItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var listGroup_1 = require("./listGroup");
exports.ListGroupItem = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-listgroup-item",
    render: function (ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItem);
        b.style(me, ctx.data.context !== undefined &&
            listGroup_1.listGroupItemContextStyles(ctx.data.context));
    }
});
exports.default = exports.ListGroupItem;

});
R('web/node_modules/bobrilstrap/components/listGroupItemHeading',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var listGroup_1 = require("./listGroup");
exports.ListGroupItemHeading1 = b.createDerivedComponent(headings_1.H1, {
    id: "listgroup-item-h1",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.ListGroupItemHeading2 = b.createDerivedComponent(headings_1.H2, {
    id: "listgroup-item-h2",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.ListGroupItemHeading3 = b.createDerivedComponent(headings_1.H3, {
    id: "listgroup-item-h3",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.ListGroupItemHeading4 = b.createDerivedComponent(headings_1.H4, {
    id: "listgroup-item-h4",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.ListGroupItemHeading5 = b.createDerivedComponent(headings_1.H5, {
    id: "listgroup-item-h5",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});
exports.ListGroupItemHeading6 = b.createDerivedComponent(headings_1.H6, {
    id: "listgroup-item-h6",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemHeading);
    }
});

});
R('web/node_modules/bobrilstrap/components/listGroupItemLink',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var a_1 = require("./a");
var listGroup_1 = require("./listGroup");
exports.ListGroupItemLink = b.createDerivedComponent(a_1.A, {
    id: "bobrilstrap-listgroup-item-link",
    render: function (ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItem);
        b.style(me, !!ctx.data.active && listGroup_1.listGroupStyles.active);
        b.style(me, !!ctx.data.disabled && listGroup_1.listGroupStyles.disabled);
        b.style(me, ctx.data.context !== undefined &&
            listGroup_1.listGroupItemContextStyles(ctx.data.context));
    }
});
exports.default = exports.ListGroupItemLink;

});
R('web/node_modules/bobrilstrap/components/listGroupItemText',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var paragraph_1 = require("./paragraph");
var listGroup_1 = require("./listGroup");
exports.ListGroupItemText = b.createDerivedComponent(paragraph_1.P, {
    id: "bobrilstrap-listgroup-item-text",
    render: function (_ctx, me) {
        b.style(me, listGroup_1.listGroupStyles.listGroupItemText);
    }
});
exports.default = exports.ListGroupItemText;

});
R('web/node_modules/bobrilstrap/components/main',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Main = b.createDerivedComponent(element_1.Element, {
    id: "bobrilstrap-main",
    render: function (_ctx, me) {
        me.tag = "main";
    }
});

});
R('web/node_modules/bobrilstrap/components/mark',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Mark = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-mark",
    render: function (_ctx, me) {
        me.tag = "mark";
    }
});
exports.default = exports.Mark;

});
R('web/node_modules/bobrilstrap/components/media',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var mediaContent_1 = require("./mediaContent");
exports.mediaStyles = {
    media: b.styleDef("media"),
    mediaLeft: mediaContent_1.mediaContentStyles.mediaLeft,
    mediaBody: mediaContent_1.mediaContentStyles.mediaBody,
    mediaRight: mediaContent_1.mediaContentStyles.mediaRight,
    mediaTop: mediaContent_1.mediaContentStyles.mediaTop,
    mediaMiddle: mediaContent_1.mediaContentStyles.mediaMiddle,
    mediaBottom: mediaContent_1.mediaContentStyles.mediaBottom,
    mediaHeading: b.styleDef("media-heading"),
    mediaObject: b.styleDef("media-object"),
    mediaList: b.styleDef("media-list")
};
exports.Media = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-media",
    render: function (_ctx, me) {
        b.style(me, exports.mediaStyles.media);
    }
});

});
R('web/node_modules/bobrilstrap/components/mediaContent',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var MediaContentAlignment;
(function (MediaContentAlignment) {
    MediaContentAlignment[MediaContentAlignment["Left"] = 0] = "Left";
    MediaContentAlignment[MediaContentAlignment["Body"] = 1] = "Body";
    MediaContentAlignment[MediaContentAlignment["Right"] = 2] = "Right";
    MediaContentAlignment[MediaContentAlignment["Top"] = 3] = "Top";
    MediaContentAlignment[MediaContentAlignment["Middle"] = 4] = "Middle";
    MediaContentAlignment[MediaContentAlignment["Bottom"] = 5] = "Bottom";
})(MediaContentAlignment = exports.MediaContentAlignment || (exports.MediaContentAlignment = {}));
exports.mediaContentStyles = {
    mediaLeft: b.styleDef("media-left"),
    mediaBody: b.styleDef("media-body"),
    mediaRight: b.styleDef("media-right"),
    mediaTop: b.styleDef("media-top"),
    mediaMiddle: b.styleDef("media-middle"),
    mediaBottom: b.styleDef("media-bottom")
};
exports.medialContentAlignmentStyles = bobrilHelpers_1.createDictionary();
exports.medialContentAlignmentStyles(MediaContentAlignment.Left, exports.mediaContentStyles.mediaLeft);
exports.medialContentAlignmentStyles(MediaContentAlignment.Body, exports.mediaContentStyles.mediaBody);
exports.medialContentAlignmentStyles(MediaContentAlignment.Right, exports.mediaContentStyles.mediaRight);
exports.medialContentAlignmentStyles(MediaContentAlignment.Top, exports.mediaContentStyles.mediaTop);
exports.medialContentAlignmentStyles(MediaContentAlignment.Middle, exports.mediaContentStyles.mediaMiddle);
exports.medialContentAlignmentStyles(MediaContentAlignment.Bottom, exports.mediaContentStyles.mediaBottom);
exports.MediaContent = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-media-content",
    render: function (ctx, me) {
        var alignments = ctx.data.alignment instanceof Array
            ? ctx.data.alignment
            : [ctx.data.alignment];
        alignments.forEach(function (alignment) {
            return b.style(me, exports.medialContentAlignmentStyles(alignment));
        });
    }
});
exports.default = exports.MediaContent;

});
R('web/node_modules/bobrilstrap/components/mediaHeading',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var media_1 = require("./media");
exports.MediaHeading1 = b.createDerivedComponent(headings_1.H1, {
    id: "bobrilstrap-media-h1",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.MediaHeading2 = b.createDerivedComponent(headings_1.H2, {
    id: "bobrilstrap-media-h2",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.MediaHeading3 = b.createDerivedComponent(headings_1.H3, {
    id: "bobrilstrap-media-h3",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.MediaHeading4 = b.createDerivedComponent(headings_1.H4, {
    id: "bobrilstrap-media-h4",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.MediaHeading5 = b.createDerivedComponent(headings_1.H5, {
    id: "bobrilstrap-media-h5",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});
exports.MediaHeading6 = b.createDerivedComponent(headings_1.H6, {
    id: "bobrilstrap-media-h6",
    render: function (_ctx, me) {
        b.style(me, media_1.mediaStyles.mediaHeading);
    }
});

});
R('web/node_modules/bobrilstrap/components/modal',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ModalSize;
(function (ModalSize) {
    ModalSize[ModalSize["Lg"] = 0] = "Lg";
    ModalSize[ModalSize["Md"] = 1] = "Md";
    ModalSize[ModalSize["Sm"] = 2] = "Sm";
})(ModalSize = exports.ModalSize || (exports.ModalSize = {}));
exports.modalStyles = {
    modal: b.styleDef("modal"),
    fade: b.styleDef("fade"),
    modalDialog: b.styleDef("modal-dialog"),
    modalContent: b.styleDef("modal-content"),
    modalHeader: b.styleDef("modal-header"),
    modalBody: b.styleDef("modal-body"),
    modalFooter: b.styleDef("modal-footer"),
    modalTitle: b.styleDef("modal-title"),
    lg: b.styleDef("modal-lg"),
    sm: b.styleDef("modal-sm")
};
exports.modalSizeStyles = bobrilHelpers_1.createDictionary();
exports.modalSizeStyles(ModalSize.Lg, exports.modalStyles.lg);
exports.modalSizeStyles(ModalSize.Md, false);
exports.modalSizeStyles(ModalSize.Sm, exports.modalStyles.sm);
exports.Modal = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-modal",
    render: function (ctx, me) {
        me.attrs["role"] = "dialog";
        b.style(me, exports.modalStyles.modal, !!ctx.data.animation && exports.modalStyles.fade);
        me.children = b.styledDiv(b.styledDiv([
            !!ctx.data.header &&
                b.styledDiv(ctx.data.header, exports.modalStyles.modalHeader),
            !!ctx.data.body && b.styledDiv(ctx.data.body, exports.modalStyles.modalBody),
            !!ctx.data.footer &&
                b.styledDiv(ctx.data.footer, exports.modalStyles.modalFooter)
        ], exports.modalStyles.modalContent), exports.modalStyles.modalDialog, ctx.data.size !== undefined && exports.modalSizeStyles(ctx.data.size));
        me.children.attrs = { role: "document" };
    },
    postInitDom: function (ctx, _me, element) {
        var backdrop = ctx.data.backdrop !== undefined ? ctx.data.backdrop : "static";
        var modalElement = $(element);
        modalElement.modal({
            keyboard: ctx.data.keyboard,
            show: !!ctx.data.visible,
            backdrop: backdrop
        });
        modalElement.on("hidden.bs.Modal", function (ev) {
            if (ctx.data.onHidden) {
                ctx.data.onHidden(ev);
            }
        });
        modalElement.on("shown.bs.Modal", function (ev) {
            if (ctx.data.onShown) {
                ctx.data.onShown(ev);
            }
        });
    },
    postUpdateDom: function (ctx, _me, element) {
        if (!!ctx.data.visible !== !!ctx.visible) {
            if (ctx.visible && ctx.data.onHide && !ctx.data.onHide())
                return;
            ctx.visible = ctx.data.visible;
            $(element).modal(ctx.visible ? "show" : "hide");
        }
    }
});
exports.default = exports.Modal;

});
R('web/node_modules/bobrilstrap/components/modalTitle',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var headings_1 = require("./headings");
var modal_1 = require("./modal");
exports.ModalTitle1 = b.createDerivedComponent(headings_1.H1, {
    id: "bobrilstrap-modal-title-h1",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.ModalTitle2 = b.createDerivedComponent(headings_1.H2, {
    id: "bobrilstrap-modal-title-h2",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.ModalTitle3 = b.createDerivedComponent(headings_1.H3, {
    id: "bobrilstrap-modal-title-h3",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.ModalTitle4 = b.createDerivedComponent(headings_1.H4, {
    id: "bobrilstrap-modal-title-h4",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.ModalTitle5 = b.createDerivedComponent(headings_1.H5, {
    id: "bobrilstrap-modal-title-h5",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});
exports.ModalTitle6 = b.createDerivedComponent(headings_1.H6, {
    id: "bobrilstrap-modal-title-h6",
    render: function (_ctx, me) {
        b.style(me, modal_1.modalStyles.modalTitle);
    }
});

});
R('web/node_modules/bobrilstrap/components/nav',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.navStyles = {
    navbar: b.styleDef("navbar"),
    navbarDefault: b.styleDef("navbar-default"),
    navbarCollapse: b.styleDef("navbar-collapse"),
    navbarHeader: b.styleDef("navbar-header"),
    navbarToggle: b.styleDef("navbar-toggle"),
    navbarBrand: b.styleDef("navbar-brand"),
    navbarNav: b.styleDef("navbar-nav"),
    nav: b.styleDef("nav"),
    navbarForm: b.styleDef("navbar-form"),
    navbarLeft: b.styleDef("navbar-left"),
    navbarRight: b.styleDef("navbar-right"),
    navbarBtn: b.styleDef("navbar-btn"),
    navbarText: b.styleDef("navbar-text"),
    navbarLink: b.styleDef("navbar-link"),
    navbarFixedTop: b.styleDef("navbar-fixed-top"),
    navbarFixedBottom: b.styleDef("navbar-fixed-bottom"),
    navbarStaticTop: b.styleDef("navbar-static-top"),
    navbarInverse: b.styleDef("navbar-inverse"),
    navbTabs: b.styleDef("nav-tabs"),
    navStacked: b.styleDef("nav-stacked"),
    navJustified: b.styleDef("nav-justified"),
    navPills: b.styleDef("nav-pills"),
    dropdown: b.styleDef("dropdown"),
    disabled: b.styleDef("disabled"),
    collapse: b.styleDef("collapse"),
    iconBar: b.styleDef("icon-bar")
};
var NavbarStatic;
(function (NavbarStatic) {
    NavbarStatic[NavbarStatic["Top"] = 0] = "Top";
})(NavbarStatic = exports.NavbarStatic || (exports.NavbarStatic = {}));
var NavbarFixed;
(function (NavbarFixed) {
    NavbarFixed[NavbarFixed["Top"] = 0] = "Top";
    NavbarFixed[NavbarFixed["Bottom"] = 1] = "Bottom";
})(NavbarFixed = exports.NavbarFixed || (exports.NavbarFixed = {}));
var NavbarAlignment;
(function (NavbarAlignment) {
    NavbarAlignment[NavbarAlignment["Left"] = 0] = "Left";
    NavbarAlignment[NavbarAlignment["Right"] = 1] = "Right";
})(NavbarAlignment = exports.NavbarAlignment || (exports.NavbarAlignment = {}));
exports.Nav = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-navbar",
    render: function (ctx, me) {
        me.tag = ctx.data.header ? "header" : "nav";
        b.style(me, exports.navStyles.navbar);
        b.style(me, ctx.data.inverse ? exports.navStyles.navbarInverse : exports.navStyles.navbarDefault);
        b.style(me, ctx.data.static === NavbarStatic.Top && exports.navStyles.navbarStaticTop);
        b.style(me, ctx.data.fixed === NavbarFixed.Top && exports.navStyles.navbarFixedTop);
        b.style(me, ctx.data.fixed === NavbarFixed.Bottom && exports.navStyles.navbarFixedBottom);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && exports.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && exports.navStyles.navbarLeft);
    }
});
exports.Navbar = exports.Nav;
exports.default = exports.Nav;

});
R('web/node_modules/bobrilstrap/components/navbarBrand',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var a_1 = require("./a");
var nav_1 = require("./nav");
exports.NavbarBrand = b.createDerivedComponent(a_1.A, {
    id: "bobrilstrap-navbar-brand",
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.navbarBrand);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
exports.default = exports.NavbarBrand;

});
R('web/node_modules/bobrilstrap/components/navbarCollapse',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var nav_1 = require("./nav");
var collapse_1 = require("./collapse");
exports.NavbarCollapse = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-navbar-collapse",
    render: function (_ctx, me) {
        b.style(me, nav_1.navStyles.navbarCollapse, collapse_1.collapseStyles.collapse);
    }
});
exports.default = exports.NavbarCollapse;

});
R('web/node_modules/bobrilstrap/components/navbarHeader',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var nav_1 = require("./nav");
exports.NavbarHeader = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-navbar-header",
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.navbarHeader);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
exports.default = exports.NavbarHeader;

});
R('web/node_modules/bobrilstrap/components/navbarNav',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.NavbarNav = b.createDerivedComponent(ul_1.Ul, {
    id: "bobrilstrap-navbar-nav",
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navbarNav);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
exports.default = exports.NavbarNav;

});
R('web/node_modules/bobrilstrap/components/navbarNavItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var tab_1 = require("./tab");
exports.NavbarNavItem = b.createDerivedComponent(tab_1.Tab, {
    id: "bobrilstrap-navbar-nav-item"
});
exports.default = exports.NavbarNavItem;

});
R('web/node_modules/bobrilstrap/components/object',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.ObjectElement = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-object",
    render: function (ctx, me) {
        me.tag = "object";
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs["data"] = ctx.data.dataSrc;
        if (ctx.data.type !== undefined)
            me.attrs["type"] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs["height"] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs["width"] = ctx.data.width;
    }
});
exports.default = exports.ObjectElement;

});
R('web/node_modules/bobrilstrap/components/ol',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var OlType;
(function (OlType) {
    OlType[OlType["num"] = 0] = "num";
    OlType[OlType["a"] = 1] = "a";
    OlType[OlType["A"] = 2] = "A";
    OlType[OlType["i"] = 3] = "i";
    OlType[OlType["I"] = 4] = "I";
})(OlType = exports.OlType || (exports.OlType = {}));
exports.Ol = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-ol",
    render: function (ctx, me) {
        me.tag = "ol";
        if (ctx.data.type !== undefined) {
            me.attrs["type"] =
                ctx.data.type === OlType.num ? "1" : OlType[ctx.data.type];
        }
    }
});
exports.default = exports.Ol;

});
R('web/node_modules/bobrilstrap/components/option',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Option = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-option",
    render: function (ctx, me) {
        me.tag = "option";
        me.attrs.value = ctx.data.value;
        me.children = ctx.data.label || ctx.data.value;
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
    }
});
exports.default = exports.Option;

});
R('web/node_modules/bobrilstrap/components/pageHeader',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.pageHeaderStyle = b.styleDef("page-header",undefined,"pageHeaderStyle");
exports.PageHeader = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-page-header",
    render: function (_ctx, me) {
        b.style(me, exports.pageHeaderStyle);
    }
});
exports.default = exports.PageHeader;

});
R('web/node_modules/bobrilstrap/components/pager',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ul_1 = require("./ul");
exports.pagerStyles = {
    pager: b.styleDef("pager")
};
exports.Pager = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-pager",
    render: function (ctx, me) {
        me.tag = "nav";
        me.children = b.style(ul_1.Ul(ctx.data.ul || {}, ctx.data.children), exports.pagerStyles.pager);
    }
});
exports.default = exports.Pager;

});
R('web/node_modules/bobrilstrap/components/pagerItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var bobrilHelpers_1 = require("./bobrilHelpers");
var PagerItemAlignment;
(function (PagerItemAlignment) {
    PagerItemAlignment[PagerItemAlignment["None"] = 0] = "None";
    PagerItemAlignment[PagerItemAlignment["Previous"] = 1] = "Previous";
    PagerItemAlignment[PagerItemAlignment["Next"] = 2] = "Next";
})(PagerItemAlignment = exports.PagerItemAlignment || (exports.PagerItemAlignment = {}));
exports.pagerItemStyles = {
    previous: b.styleDef("previous"),
    next: b.styleDef("next")
};
exports.pagerItemAlignmentStyles = bobrilHelpers_1.createDictionary();
exports.pagerItemAlignmentStyles(PagerItemAlignment.Previous, exports.pagerItemStyles.previous);
exports.pagerItemAlignmentStyles(PagerItemAlignment.Next, exports.pagerItemStyles.next);
exports.PagerItem = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-pager-item",
    render: function (ctx, me) {
        b.style(me, !!ctx.data.alignment && exports.pagerItemAlignmentStyles(ctx.data.alignment));
    }
});
exports.default = exports.PagerItem;

});
R('web/node_modules/bobrilstrap/components/pagination',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var ul_1 = require("./ul");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.paginationStyles = {
    pagination: b.styleDef("pagination"),
    lg: b.styleDef("pagination-lg"),
    sm: b.styleDef("pagination-sm")
};
var PaginationSize;
(function (PaginationSize) {
    PaginationSize[PaginationSize["Md"] = 0] = "Md";
    PaginationSize[PaginationSize["Lg"] = 1] = "Lg";
    PaginationSize[PaginationSize["Sm"] = 2] = "Sm";
})(PaginationSize = exports.PaginationSize || (exports.PaginationSize = {}));
exports.paginationSizeStyles = bobrilHelpers_1.createDictionary();
exports.paginationSizeStyles(PaginationSize.Lg, exports.paginationStyles.lg);
exports.paginationSizeStyles(PaginationSize.Sm, exports.paginationStyles.sm);
exports.Pagination = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-pagination",
    render: function (ctx, me) {
        me.tag = "nav";
        me.children = b.style(ul_1.Ul(ctx.data.ul || {}, ctx.data.children), exports.paginationStyles.pagination, !!ctx.data.size && exports.paginationSizeStyles(ctx.data.size));
    }
});
exports.default = exports.Pagination;

});
R('web/node_modules/bobrilstrap/components/paginationItem',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
exports.PaginationItem = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-pagination-item"
});
exports.default = exports.PaginationItem;

});
R('web/node_modules/bobrilstrap/components/panel',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var panelHeading_1 = require("./panelHeading");
var panelBody_1 = require("./panelBody");
var panelFooter_1 = require("./panelFooter");
exports.panelStyles = {
    panel: b.styleDef("panel"),
    panelGroup: b.styleDef("panel-group"),
    panelDefault: b.styleDef("panel-default"),
    panelPrimary: b.styleDef("panel-primary"),
    panelSuccess: b.styleDef("panel-success"),
    panelWarning: b.styleDef("panel-warning"),
    panelDanger: b.styleDef("panel-danger"),
    panelInfo: b.styleDef("panel-info"),
    panelHeading: b.styleDef("panel-heading"),
    panelBody: b.styleDef("panel-body"),
    panelFooter: b.styleDef("panel-footer"),
    panelTitle: b.styleDef("panel-title"),
    panelCollapse: b.styleDef("panel-collapse")
};
var PanelContext;
(function (PanelContext) {
    PanelContext[PanelContext["Default"] = 0] = "Default";
    PanelContext[PanelContext["Primary"] = 1] = "Primary";
    PanelContext[PanelContext["Success"] = 2] = "Success";
    PanelContext[PanelContext["Warning"] = 3] = "Warning";
    PanelContext[PanelContext["Danger"] = 4] = "Danger";
    PanelContext[PanelContext["Info"] = 5] = "Info";
})(PanelContext = exports.PanelContext || (exports.PanelContext = {}));
exports.panelContextStyles = bobrilHelpers_1.createDictionary();
exports.panelContextStyles(PanelContext.Default, exports.panelStyles.panelDefault);
exports.panelContextStyles(PanelContext.Primary, exports.panelStyles.panelPrimary);
exports.panelContextStyles(PanelContext.Success, exports.panelStyles.panelSuccess);
exports.panelContextStyles(PanelContext.Warning, exports.panelStyles.panelWarning);
exports.panelContextStyles(PanelContext.Danger, exports.panelStyles.panelDanger);
exports.panelContextStyles(PanelContext.Info, exports.panelStyles.panelInfo);
exports.Panel = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel",
    render: function (ctx, me) {
        b.style(me, exports.panelStyles.panel);
        b.style(me, (ctx.data.context !== undefined &&
            exports.panelContextStyles(ctx.data.context)) ||
            exports.panelStyles.panelDefault);
        if (ctx.data.body)
            bobrilHelpers_1.mergeToChildren(me, panelBody_1.PanelBody({}, ctx.data.body), true);
        if (ctx.data.heading)
            bobrilHelpers_1.mergeToChildren(me, panelHeading_1.PanelHeading({}, ctx.data.heading), true);
        if (ctx.data.footer)
            bobrilHelpers_1.mergeToChildren(me, panelFooter_1.PanelFooter({}, ctx.data.heading));
    }
});
exports.default = exports.Panel;

});
R('web/node_modules/bobrilstrap/components/panelBody',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.PanelBody = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel-body",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelBody);
    }
});
exports.default = exports.PanelBody;

});
R('web/node_modules/bobrilstrap/components/panelCollapse',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
var collapse_1 = require("./collapse");
exports.PanelCollapse = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel-collapse",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelCollapse, collapse_1.collapseStyles.collapse);
    }
});
exports.default = exports.PanelCollapse;

});
R('web/node_modules/bobrilstrap/components/panelFooter',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.PanelFooter = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel-footer",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelFooter);
    }
});
exports.default = exports.PanelFooter;

});
R('web/node_modules/bobrilstrap/components/panelGroup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.PanelGroup = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel-group",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelGroup);
    }
});
exports.default = exports.PanelGroup;

});
R('web/node_modules/bobrilstrap/components/panelHeading',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var panel_1 = require("./panel");
exports.PanelHeading = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-panel-heading",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelHeading);
    }
});
exports.default = exports.PanelHeading;

});
R('web/node_modules/bobrilstrap/components/panelTitle',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var panel_1 = require("./panel");
var headings_1 = require("./headings");
exports.PanelTitle1 = b.createDerivedComponent(headings_1.H1, {
    id: "bobrilstrap-panel-title-h1",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.PanelTitle2 = b.createDerivedComponent(headings_1.H2, {
    id: "bobrilstrap-panel-title-h2",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.PanelTitle3 = b.createDerivedComponent(headings_1.H3, {
    id: "bobrilstrap-panel-title-h3",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.PanelTitle4 = b.createDerivedComponent(headings_1.H4, {
    id: "bobrilstrap-panel-title-h4",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.PanelTitle5 = b.createDerivedComponent(headings_1.H5, {
    id: "bobrilstrap-panel-title-h5",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});
exports.PanelTitle6 = b.createDerivedComponent(headings_1.H6, {
    id: "bobrilstrap-panel-title-h6",
    render: function (_ctx, me) {
        b.style(me, panel_1.panelStyles.panelTitle);
    }
});

});
R('web/node_modules/bobrilstrap/components/paragraph',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var typography_1 = require("./typography");
var element_1 = require("./element");
exports.paragraphStyles = {
    formControlStatic: b.styleDef("form-control-static")
};
exports.P = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-paragraph",
    render: function (ctx, me) {
        me.tag = "p";
        b.style(me, !!ctx.data.lead && typography_1.typography.lead);
        b.style(me, !!ctx.data.formControlStatic && exports.paragraphStyles.formControlStatic);
    }
});
exports.Paragraph = exports.P;
exports.default = exports.P;

});
R('web/node_modules/bobrilstrap/components/pill',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var tab_1 = require("./tab");
exports.Pill = b.createDerivedComponent(tab_1.Tab, {
    id: "bobrilstrap-pill"
});
exports.default = exports.Pill;

});
R('web/node_modules/bobrilstrap/components/pills',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.Pills = b.createDerivedComponent(ul_1.Ul, {
    id: "bobrilstrap-pills",
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navPills);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, !!ctx.data.stacked && nav_1.navStyles.navStacked);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
exports.default = exports.Pills;

});
R('web/node_modules/bobrilstrap/components/popover',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var PopoverPlacement;
(function (PopoverPlacement) {
    PopoverPlacement[PopoverPlacement["Left"] = 0] = "Left";
    PopoverPlacement[PopoverPlacement["Top"] = 1] = "Top";
    PopoverPlacement[PopoverPlacement["Bottom"] = 2] = "Bottom";
    PopoverPlacement[PopoverPlacement["Right"] = 3] = "Right";
    PopoverPlacement[PopoverPlacement["Auto"] = 4] = "Auto";
})(PopoverPlacement = exports.PopoverPlacement || (exports.PopoverPlacement = {}));
var PopoverTrigger;
(function (PopoverTrigger) {
    PopoverTrigger[PopoverTrigger["Click"] = 0] = "Click";
    PopoverTrigger[PopoverTrigger["Hover"] = 1] = "Hover";
    PopoverTrigger[PopoverTrigger["Focus"] = 2] = "Focus";
    PopoverTrigger[PopoverTrigger["Manual"] = 3] = "Manual";
})(PopoverTrigger = exports.PopoverTrigger || (exports.PopoverTrigger = {}));
exports.Popover = b.createVirtualComponent({
    id: "bobrilstrap-popover",
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewPopover(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewPopover(ctx);
    },
    destroy: function (ctx) {
        unregister(ctx);
    }
});
function registerNewPopover(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element) {
        ctx.popoveredElement = undefined;
        return;
    }
    var jQueryElement = $(element);
    var newTitle = typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
    var newContent = typeof ctx.data.content === "function"
        ? ctx.data.content()
        : ctx.data.content;
    if (!ctx.popoveredElement) {
        jQueryElement.popover({
            title: newTitle,
            content: newContent,
            animation: ctx.data.animation,
            placement: ctx.data.placement !== undefined
                ? PopoverPlacement[ctx.data.placement].toLowerCase()
                : undefined,
            trigger: ctx.data.trigger !== undefined
                ? ctx.data.trigger
                    .map(function (value) { return PopoverTrigger[value].toLowerCase(); })
                    .join(" ")
                : undefined
        });
        jQueryElement.on("shown.bs.Popover", function () { return (ctx.visible = true); });
        jQueryElement.on("hidden.bs.Popover", function () { return (ctx.visible = false); });
        ctx.popoveredElement = element;
    }
    if (isManualTrigger(ctx) && !!ctx.visible !== !!ctx.data.visible) {
        ctx.visible = !!ctx.data.visible;
        jQueryElement.popover(ctx.visible ? "show" : "hide");
    }
    if ((ctx.lastTitle !== undefined && ctx.lastTitle !== newTitle) ||
        (ctx.lastContent !== undefined && ctx.lastContent !== newContent)) {
        jQueryElement
            .attr("data-content", newContent)
            .attr("data-original-title", newTitle);
        if (ctx.visible)
            jQueryElement.popover("show");
    }
    ctx.lastTitle = newTitle;
    ctx.lastContent = newContent;
}
function isManualTrigger(ctx) {
    return (ctx.data.trigger !== undefined &&
        ctx.data.trigger.length === 1 &&
        ctx.data.trigger[0] === PopoverTrigger.Manual);
}
function unregister(ctx) {
    if (ctx.popoveredElement) {
        $(ctx.popoveredElement).popover("destroy");
        ctx.popoveredElement = undefined;
    }
}
exports.default = exports.Popover;

});
R('web/node_modules/bobrilstrap/components/pre',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Pre = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-pre",
    render: function (_ctx, me) {
        me.tag = "pre";
    }
});
exports.default = exports.Pre;

});
R('web/node_modules/bobrilstrap/components/progress',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var progressBar_1 = require("./progressBar");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.progressStyle = b.styleDef("progress",undefined,"progressStyle");
exports.Progress = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-progress",
    render: function (ctx, me) {
        b.style(me, exports.progressStyle);
        if (ctx.data.bars) {
            ctx.data.bars.forEach(function (barData) {
                return bobrilHelpers_1.mergeToChildren(me, progressBar_1.ProgressBar(barData));
            });
        }
    }
});

});
R('web/node_modules/bobrilstrap/components/progressBar',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var span_1 = require("./span");
var helpers_1 = require("./helpers");
var bobrilHelpers_1 = require("./bobrilHelpers");
var ProgressBarContext;
(function (ProgressBarContext) {
    ProgressBarContext[ProgressBarContext["Success"] = 0] = "Success";
    ProgressBarContext[ProgressBarContext["Info"] = 1] = "Info";
    ProgressBarContext[ProgressBarContext["Warning"] = 2] = "Warning";
    ProgressBarContext[ProgressBarContext["Danger"] = 3] = "Danger";
})(ProgressBarContext = exports.ProgressBarContext || (exports.ProgressBarContext = {}));
exports.progressBarStyles = {
    progressBar: b.styleDef("progress-bar"),
    progressBarSuccess: b.styleDef("progress-bar-success"),
    progressBarInfo: b.styleDef("progress-bar-info"),
    progressBarWarning: b.styleDef("progress-bar-warning"),
    progressBarDanger: b.styleDef("progress-bar-danger"),
    progressBarStriped: b.styleDef("progress-bar-striped"),
    active: b.styleDef("active")
};
exports.progressBarContextStyles = bobrilHelpers_1.createDictionary();
exports.progressBarContextStyles(ProgressBarContext.Success, exports.progressBarStyles.progressBarSuccess);
exports.progressBarContextStyles(ProgressBarContext.Info, exports.progressBarStyles.progressBarInfo);
exports.progressBarContextStyles(ProgressBarContext.Warning, exports.progressBarStyles.progressBarWarning);
exports.progressBarContextStyles(ProgressBarContext.Danger, exports.progressBarStyles.progressBarDanger);
exports.ProgressBar = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-progress-bar",
    render: function (ctx, me) {
        b.style(me, exports.progressBarStyles.progressBar);
        b.style(me, !!ctx.data.active && exports.progressBarStyles.active);
        b.style(me, !!ctx.data.striped && exports.progressBarStyles.progressBarStriped);
        b.style(me, ctx.data.context !== undefined &&
            exports.progressBarContextStyles(ctx.data.context));
        b.style(me, { width: ctx.data.value + "%" });
        b.style(me, !!ctx.data.minWidth, { minWidth: ctx.data.minWidth });
        me.attrs["role"] = "progressbar";
        bobrilHelpers_1.mergeToChildren(me, ctx.data.srOnlyText &&
            span_1.Span({ style: helpers_1.helpers.srOnly }, ctx.data.srOnlyText), true);
    }
});
exports.default = exports.ProgressBar;

});
R('web/node_modules/bobrilstrap/components/radio',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var label_1 = require("./label");
var inputRadio_1 = require("./inputRadio");
exports.radioStyles = {
    radio: b.styleDef("radio"),
    radioInline: b.styleDef("radio-inline"),
    disabled: b.styleDef("disabled")
};
exports.Radio = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-radio",
    render: function (ctx, me) {
        b.style(me, exports.radioStyles.radio);
        var inputRadioNode = inputRadio_1.InputRadio(ctx.data.inputRadio);
        var lbl = label_1.Label(ctx.data.label || {}, inputRadioNode);
        if (ctx.data.inline) {
            me.tag = undefined;
            b.style(lbl, exports.radioStyles.radioInline);
        }
        else if (ctx.data.inputRadio && ctx.data.inputRadio.disabled) {
            b.style(me, exports.radioStyles.disabled);
        }
        me.children = lbl;
    }
});
exports.default = exports.Radio;

});
R('web/node_modules/bobrilstrap/components/responsive',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var Display;
(function (Display) {
    Display[Display["Block"] = 0] = "Block";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["InlineBlock"] = 2] = "InlineBlock";
})(Display = exports.Display || (exports.Display = {}));
var Device;
(function (Device) {
    Device[Device["Xs"] = 0] = "Xs";
    Device[Device["Sm"] = 1] = "Sm";
    Device[Device["Md"] = 2] = "Md";
    Device[Device["Lg"] = 3] = "Lg";
    Device[Device["Print"] = 4] = "Print";
})(Device = exports.Device || (exports.Device = {}));
exports.visibleStyles = getVisbileStyles();
exports.hiddenStyles = getHiddenStyles();
function getVisbileStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(Device).forEach(function (device) {
        var castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, bobrilHelpers_1.createDictionary());
            Object.keys(Display).forEach(function (display) {
                var castedDisplayValue = parseInt(display, 10);
                if (!isNaN(castedDisplayValue)) {
                    result(castedDeviceValue)(castedDisplayValue, b.styleDef("visible-" + Device[castedDeviceValue].toLowerCase() + "-" + bobrilHelpers_1.toLowerWithDashes(Display[castedDisplayValue])));
                }
            });
        }
    });
    return result;
}
function getHiddenStyles() {
    var result = bobrilHelpers_1.createDictionary();
    Object.keys(Device).forEach(function (device) {
        var castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, b.styleDef("hidden-" + Device[castedDeviceValue].toLowerCase()));
        }
    });
    return result;
}

});
R('web/node_modules/bobrilstrap/components/responsiveTable',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var table_1 = require("./table");
exports.ResponsiveTable = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-responsive-table",
    render: function (ctx, me) {
        b.style(me, table_1.tableStyles.responsive);
        bobrilHelpers_1.mergeToChildren(me, table_1.Table(ctx.data.table));
    }
});
exports.default = exports.ResponsiveTable;

});
R('web/node_modules/bobrilstrap/components/row',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.rowStyle = b.styleDef("row",undefined,"rowStyle");
exports.Row = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-row",
    render: function (_ctx, me) {
        b.style(me, exports.rowStyle);
    }
});
exports.default = exports.Row;

});
R('web/node_modules/bobrilstrap/components/samp',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Samp = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-samp",
    render: function (_ctx, me) {
        me.tag = "samp";
    }
});
exports.default = exports.Samp;

});
R('web/node_modules/bobrilstrap/components/select',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var option_1 = require("./option");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.selectStyles = {
    formControl: b.styleDef("form-control"),
    lg: b.styleDef("input-lg"),
    sm: b.styleDef("input-sm")
};
var SelectSize;
(function (SelectSize) {
    SelectSize[SelectSize["Lg"] = 0] = "Lg";
    SelectSize[SelectSize["Default"] = 1] = "Default";
    SelectSize[SelectSize["Sm"] = 2] = "Sm";
})(SelectSize = exports.SelectSize || (exports.SelectSize = {}));
exports.selectSizeStyles = bobrilHelpers_1.createDictionary();
exports.selectSizeStyles(SelectSize.Lg, exports.selectStyles.lg);
exports.selectSizeStyles(SelectSize.Default, false);
exports.selectSizeStyles(SelectSize.Sm, exports.selectStyles.sm);
exports.Select = b.createOverridingComponent(element_1.Elem, {
    id: "bobrilstrap-select",
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        me.tag = "select";
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        else if (ctx.value === undefined && ctx.data.multiple) {
            ctx.value = [];
        }
        me.attrs.value = ctx.value;
        b.style(me, exports.selectStyles.formControl);
        b.style(me, ctx.data.size !== undefined && exports.selectSizeStyles(ctx.data.size));
        me.children = ctx.data.options.map(function (optionData) { return option_1.Option(optionData); });
        if (ctx.data.rows)
            me.attrs["size"] = ctx.data.rows.toString();
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
        if (ctx.data.multiple)
            me.attrs["multiple"] = "multiple";
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
exports.default = exports.Select;

});
R('web/node_modules/bobrilstrap/components/size',function(require, module, exports, global){
"use strict";
var Size;
(function (Size) {
    Size[Size["Xs"] = 0] = "Xs";
    Size[Size["Sm"] = 1] = "Sm";
    Size[Size["Md"] = 2] = "Md";
    Size[Size["Lg"] = 3] = "Lg";
})(Size = exports.Size || (exports.Size = {}));
exports.default = Size;

});
R('web/node_modules/bobrilstrap/components/small',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Small = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-small",
    render: function (_ctx, me) {
        me.tag = "small";
    }
});
exports.default = exports.Small;

});
R('web/node_modules/bobrilstrap/components/span',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
var SpanLabelContext;
(function (SpanLabelContext) {
    SpanLabelContext[SpanLabelContext["Default"] = 0] = "Default";
    SpanLabelContext[SpanLabelContext["Primary"] = 1] = "Primary";
    SpanLabelContext[SpanLabelContext["Success"] = 2] = "Success";
    SpanLabelContext[SpanLabelContext["Info"] = 3] = "Info";
    SpanLabelContext[SpanLabelContext["Warning"] = 4] = "Warning";
    SpanLabelContext[SpanLabelContext["Danger"] = 5] = "Danger";
})(SpanLabelContext = exports.SpanLabelContext || (exports.SpanLabelContext = {}));
exports.spanStyles = {
    label: b.styleDef("label"),
    labelDefault: b.styleDef("label-default"),
    labelPrimary: b.styleDef("label-primary"),
    labelSuccess: b.styleDef("label-success"),
    labelInfo: b.styleDef("label-info"),
    labelWarning: b.styleDef("label-warning"),
    labelDanger: b.styleDef("label-danger")
};
exports.spanLabelContextStyles = bobrilHelpers_1.createDictionary();
exports.spanLabelContextStyles(SpanLabelContext.Default, exports.spanStyles.labelDefault);
exports.spanLabelContextStyles(SpanLabelContext.Primary, exports.spanStyles.labelPrimary);
exports.spanLabelContextStyles(SpanLabelContext.Success, exports.spanStyles.labelSuccess);
exports.spanLabelContextStyles(SpanLabelContext.Info, exports.spanStyles.labelInfo);
exports.spanLabelContextStyles(SpanLabelContext.Warning, exports.spanStyles.labelWarning);
exports.spanLabelContextStyles(SpanLabelContext.Danger, exports.spanStyles.labelDanger);
exports.Span = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-span",
    render: function (ctx, me) {
        me.tag = "span";
        b.style(me, ctx.data.labelContext !== undefined && exports.spanStyles.label);
        b.style(me, ctx.data.labelContext !== undefined &&
            exports.spanLabelContextStyles(ctx.data.labelContext));
    }
});
exports.default = exports.Span;

});
R('web/node_modules/bobrilstrap/components/strikethrough',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Strikethrough = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-strikethrough",
    render: function (_ctx, me) {
        me.tag = "s";
    }
});
exports.S = exports.Strikethrough;
exports.default = exports.Strikethrough;

});
R('web/node_modules/bobrilstrap/components/strong',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Strong = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-strong",
    render: function (_ctx, me) {
        me.tag = "strong";
    }
});
exports.default = exports.Strong;

});
R('web/node_modules/bobrilstrap/components/sub',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Sub = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-sub",
    render: function (_ctx, me) {
        me.tag = "sub";
    }
});
exports.default = exports.Sub;

});
R('web/node_modules/bobrilstrap/components/sup',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Sup = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-sup",
    render: function (_ctx, me) {
        me.tag = "sup";
    }
});
exports.default = exports.Sup;

});
R('web/node_modules/bobrilstrap/components/tab',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var li_1 = require("./li");
var nav_1 = require("./nav");
exports.Tab = b.createDerivedComponent(li_1.Li, {
    id: "bobrilstrap-tab",
    render: function (ctx, me) {
        b.style(me, !!ctx.data.dropdown && nav_1.navStyles.dropdown);
        me.attrs["role"] = "presentation";
    }
});
exports.default = exports.Tab;

});
R('web/node_modules/bobrilstrap/components/table',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var thead_1 = require("./thead");
var tbody_1 = require("./tbody");
var caption_1 = require("./caption");
var bobrilHelpers_2 = require("./bobrilHelpers");
var TableContext;
(function (TableContext) {
    TableContext[TableContext["Active"] = 0] = "Active";
    TableContext[TableContext["Success"] = 1] = "Success";
    TableContext[TableContext["Warning"] = 2] = "Warning";
    TableContext[TableContext["Danger"] = 3] = "Danger";
    TableContext[TableContext["Info"] = 4] = "Info";
})(TableContext = exports.TableContext || (exports.TableContext = {}));
exports.tableContextStyles = bobrilHelpers_2.createDictionary();
exports.tableContextStyles(TableContext.Active, b.styleDef("active"));
exports.tableContextStyles(TableContext.Success, b.styleDef("success"));
exports.tableContextStyles(TableContext.Warning, b.styleDef("warning"));
exports.tableContextStyles(TableContext.Danger, b.styleDef("danger"));
exports.tableContextStyles(TableContext.Info, b.styleDef("info"));
exports.tableStyles = {
    table: b.styleDef("table"),
    responsive: b.styleDef("table-responsive"),
    tableStriped: b.styleDef("table-striped"),
    tableBordered: b.styleDef("table-bordered"),
    tableHover: b.styleDef("table-hover"),
    tableCondensed: b.styleDef("table-condensed")
};
exports.Table = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-table",
    render: function (ctx, me) {
        me.tag = "table";
        b.style(me, exports.tableStyles.table);
        b.style(me, !!ctx.data.striped && exports.tableStyles.tableStriped);
        b.style(me, !!ctx.data.bordered && exports.tableStyles.tableBordered);
        b.style(me, !!ctx.data.hover && exports.tableStyles.tableHover);
        b.style(me, !!ctx.data.condensed && exports.tableStyles.tableCondensed);
        if (ctx.data.caption)
            bobrilHelpers_1.mergeToChildren(me, caption_1.Caption({}, ctx.data.caption));
        if (ctx.data.head)
            bobrilHelpers_1.mergeToChildren(me, thead_1.THead(ctx.data.head));
        if (ctx.data.body)
            bobrilHelpers_1.mergeToChildren(me, tbody_1.TBody(ctx.data.body));
    }
});
exports.default = exports.Table;

});
R('web/node_modules/bobrilstrap/components/tabs',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var ul_1 = require("./ul");
var nav_1 = require("./nav");
exports.Tabs = b.createDerivedComponent(ul_1.Ul, {
    id: 'bobrilstrap-tabs',
    render: function (ctx, me) {
        b.style(me, nav_1.navStyles.nav);
        b.style(me, nav_1.navStyles.navbTabs);
        b.style(me, !!ctx.data.justified && nav_1.navStyles.navJustified);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Right && nav_1.navStyles.navbarRight);
        b.style(me, ctx.data.alignment === nav_1.NavbarAlignment.Left && nav_1.navStyles.navbarLeft);
    }
});
exports.default = exports.Tabs;

});
R('web/node_modules/bobrilstrap/components/tbody',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var tr_1 = require("./tr");
exports.TBody = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-tbody",
    render: function (ctx, me) {
        me.tag = "tbody";
        if (ctx.data.rows)
            me.children = ctx.data.rows.map(function (row) { return tr_1.Tr(row); });
    }
});
exports.default = exports.TBody;

});
R('web/node_modules/bobrilstrap/components/td',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var table_1 = require("./table");
exports.Td = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-td",
    render: function (ctx, me) {
        me.tag = "td";
        b.style(me, ctx.data.context !== undefined && table_1.tableContextStyles(ctx.data.context));
        if (ctx.data.colspan)
            me.attrs["colspan"] = ctx.data.colspan.toString();
    }
});
exports.default = exports.Td;

});
R('web/node_modules/bobrilstrap/components/textarea',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.textareaStyles = {
    formControl: b.styleDef("form-control"),
    fixedSize: b.styleDef({ resize: "none" }, undefined, "textarea-fixed-size")
};
exports.Textarea = b.createOverridingComponent(element_1.Elem, {
    id: "bobrilstrap-textare",
    render: function (ctx, me) {
        me.component.super.render(ctx, me);
        me.tag = "textarea";
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }
        me.attrs.value = ctx.value;
        b.style(me, exports.textareaStyles.formControl);
        b.style(me, !!ctx.data.fixedSize && exports.textareaStyles.fixedSize);
        if (ctx.data.rows)
            me.attrs["rows"] = ctx.data.rows.toString();
        if (ctx.data.placeholder)
            me.attrs["placeholder"] = ctx.data.placeholder.toString();
        if (ctx.data.disabled)
            me.attrs["disabled"] = "disabled";
        if (ctx.data.readonly)
            me.attrs["readonly"] = "readonly";
    },
    onChange: function (ctx, value) {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});
exports.default = exports.Textarea;

});
R('web/node_modules/bobrilstrap/components/th',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Th = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-th",
    render: function (ctx, me) {
        me.tag = "th";
        if (ctx.data.colspan)
            me.attrs["colspan"] = ctx.data.colspan.toString();
    }
});
exports.default = exports.Th;

});
R('web/node_modules/bobrilstrap/components/thead',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var tr_1 = require("./tr");
exports.THead = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-thead",
    render: function (ctx, me) {
        me.tag = "thead";
        if (ctx.data.row)
            me.children = tr_1.Tr(ctx.data.row);
    }
});
exports.default = exports.THead;

});
R('web/node_modules/bobrilstrap/components/tooltip',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var TooltipPlacement;
(function (TooltipPlacement) {
    TooltipPlacement[TooltipPlacement["Left"] = 0] = "Left";
    TooltipPlacement[TooltipPlacement["Top"] = 1] = "Top";
    TooltipPlacement[TooltipPlacement["Bottom"] = 2] = "Bottom";
    TooltipPlacement[TooltipPlacement["Right"] = 3] = "Right";
    TooltipPlacement[TooltipPlacement["Auto"] = 4] = "Auto";
})(TooltipPlacement = exports.TooltipPlacement || (exports.TooltipPlacement = {}));
var TooltipTrigger;
(function (TooltipTrigger) {
    TooltipTrigger[TooltipTrigger["Click"] = 0] = "Click";
    TooltipTrigger[TooltipTrigger["Hover"] = 1] = "Hover";
    TooltipTrigger[TooltipTrigger["Focus"] = 2] = "Focus";
    TooltipTrigger[TooltipTrigger["Manual"] = 3] = "Manual";
})(TooltipTrigger = exports.TooltipTrigger || (exports.TooltipTrigger = {}));
exports.Tooltip = b.createVirtualComponent({
    id: "bobrilstrap-tooltip",
    render: function (ctx, me) {
        me.children = ctx.data.children;
    },
    postInitDom: function (ctx) {
        registerNewTooltip(ctx);
    },
    postUpdateDom: function (ctx) {
        registerNewTooltip(ctx);
    },
    destroy: function (ctx) {
        unregister(ctx);
    }
});
function registerNewTooltip(ctx) {
    var element = b.getDomNode(ctx.me);
    if (!element) {
        ctx.tooltipedElement = undefined;
        return;
    }
    var jQueryElement = $(element);
    var newTitle = typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
    if (!ctx.tooltipedElement) {
        jQueryElement.tooltip({
            title: newTitle,
            animation: ctx.data.animation,
            placement: ctx.data.placement !== undefined
                ? TooltipPlacement[ctx.data.placement].toLowerCase()
                : undefined,
            trigger: ctx.data.trigger
                ? ctx.data.trigger
                    .map(function (value) { return TooltipTrigger[value].toLowerCase(); })
                    .join(" ")
                : undefined
        });
        jQueryElement.on("shown.bs.tooltip", function () { return (ctx.visible = true); });
        jQueryElement.on("hidden.bs.tooltip", function () { return (ctx.visible = false); });
        ctx.tooltipedElement = element;
    }
    if (isManualTrigger(ctx) && !!ctx.visible !== !!ctx.data.visible) {
        ctx.visible = !!ctx.data.visible;
        jQueryElement.tooltip(ctx.visible ? "show" : "hide");
    }
    if (ctx.lastTitle !== undefined && ctx.lastTitle !== newTitle) {
        jQueryElement.attr("data-original-title", newTitle);
        if (ctx.visible)
            jQueryElement.tooltip("show");
    }
    ctx.lastTitle = newTitle;
}
function isManualTrigger(ctx) {
    return (ctx.data.trigger !== undefined &&
        ctx.data.trigger.length === 1 &&
        ctx.data.trigger[0] === TooltipTrigger.Manual);
}
function unregister(ctx) {
    if (ctx.tooltipedElement) {
        $(ctx.tooltipedElement).tooltip("destroy");
        ctx.tooltipedElement = undefined;
    }
}
exports.default = exports.Tooltip;

});
R('web/node_modules/bobrilstrap/components/tr',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
var element_1 = require("./element");
var table_1 = require("./table");
var th_1 = require("./th");
var td_1 = require("./td");
exports.Tr = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-tr",
    render: function (ctx, me) {
        me.tag = "tr";
        b.style(me, ctx.data.context !== undefined && table_1.tableContextStyles(ctx.data.context));
        if (ctx.data.headers)
            me.children = bobrilHelpers_1.mergeToChildren(me, ctx.data.headers.map(function (header) { return th_1.Th(getColumnData(header)); }));
        if (ctx.data.columns)
            me.children = bobrilHelpers_1.mergeToChildren(me, ctx.data.columns.map(function (column) { return td_1.Td(getColumnData(column)); }));
    }
});
exports.default = exports.Tr;
function getColumnData(column) {
    return typeof column === "string" ? { children: column } : column;
}

});
R('web/node_modules/bobrilstrap/components/typography',function(require, module, exports, global){
"use strict";
var b = require("bobril");
exports.typography = {
    caption: b.styleDef("caption"),
    lead: b.styleDef("lead"),
    textLeft: b.styleDef("text-left"),
    textCenter: b.styleDef("text-center"),
    textRight: b.styleDef("text-right"),
    textJustify: b.styleDef("text-justify"),
    textNowrap: b.styleDef("text-nowrap"),
    textLowercase: b.styleDef("text-lowercase"),
    textUppercase: b.styleDef("text-uppercase"),
    textCapitalize: b.styleDef("text-capitalize"),
    initialism: b.styleDef("initialism"),
    blockquoteReverse: b.styleDef("blockquote-reverse"),
    listUnstyled: b.styleDef("list-unstyled"),
    listInline: b.styleDef("list-inline"),
    dlHorizontal: b.styleDef("dl-horizontal"),
    small: b.styleDef("small")
};
exports.default = exports.typography;

});
R('web/node_modules/bobrilstrap/components/ul',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var typography_1 = require("./typography");
exports.Ul = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-ul",
    render: function (ctx, me) {
        me.tag = "ul";
        b.style(me, !!ctx.data.unstyled && typography_1.typography.listUnstyled);
        b.style(me, !!ctx.data.inline && typography_1.typography.listInline);
    }
});
exports.default = exports.Ul;

});
R('web/node_modules/bobrilstrap/components/underlined',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Underlined = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-underlined",
    render: function (_ctx, me) {
        me.tag = "u";
    }
});
exports.U = exports.Underlined;
exports.default = exports.Underlined;

});
R('web/node_modules/bobrilstrap/components/validations',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.validationStyles = {
    hasSuccess: b.styleDef("has-success"),
    hasWarning: b.styleDef("has-warning "),
    hasError: b.styleDef("has-error"),
    hasFeedback: b.styleDef("has-feedback")
};
var ValidationState;
(function (ValidationState) {
    ValidationState[ValidationState["Success"] = 0] = "Success";
    ValidationState[ValidationState["Warning"] = 1] = "Warning";
    ValidationState[ValidationState["Error"] = 2] = "Error";
})(ValidationState = exports.ValidationState || (exports.ValidationState = {}));
exports.validationStateStyles = bobrilHelpers_1.createDictionary();
exports.validationStateStyles(ValidationState.Success, exports.validationStyles.hasSuccess);
exports.validationStateStyles(ValidationState.Warning, exports.validationStyles.hasWarning);
exports.validationStateStyles(ValidationState.Error, exports.validationStyles.hasError);
exports.default = ValidationState;

});
R('web/node_modules/bobrilstrap/components/variable',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
exports.Variable = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-variable",
    render: function (_ctx, me) {
        me.tag = "var";
    }
});
exports.V = exports.Variable;
exports.default = exports.Variable;

});
R('web/node_modules/bobrilstrap/components/video',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var embedResponsive_1 = require("./embedResponsive");
exports.Video = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-video",
    render: function (ctx, me) {
        me.tag = "video";
        b.style(me, !!ctx.data.embedResponsive && embedResponsive_1.embedResponsiveStyles.embedResponsiveItem);
        me.attrs["src"] = ctx.data.src;
        me.attrs["type"] = ctx.data.type;
        if (ctx.data.height !== undefined)
            me.attrs["height"] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs["width"] = ctx.data.width;
    }
});
exports.default = exports.Video;

});
R('web/node_modules/bobrilstrap/components/well',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var element_1 = require("./element");
var bobrilHelpers_1 = require("./bobrilHelpers");
exports.wellStyles = {
    well: b.styleDef("well"),
    lg: b.styleDef("well-lg"),
    sm: b.styleDef("well-sm")
};
var WellSize;
(function (WellSize) {
    WellSize[WellSize["Lg"] = 0] = "Lg";
    WellSize[WellSize["Sm"] = 1] = "Sm";
})(WellSize = exports.WellSize || (exports.WellSize = {}));
exports.wellSizeStyles = bobrilHelpers_1.createDictionary();
exports.wellSizeStyles(WellSize.Lg, exports.wellStyles.lg);
exports.wellSizeStyles(WellSize.Sm, exports.wellStyles.sm);
exports.Well = b.createDerivedComponent(element_1.Elem, {
    id: "bobrilstrap-well",
    render: function (ctx, me) {
        b.style(me, exports.wellStyles.well);
        b.style(me, ctx.data.size !== undefined && exports.wellSizeStyles(ctx.data.size));
    }
});
exports.default = exports.Well;

});
R('web/node_modules/bobrilstrap/index',function(require, module, exports, global){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/// <reference types="bootstrap" />
var b = require("bobril");
require("./components/bobrilSwipeExtension");
__export(require("./components/a"));
__export(require("./components/abbreviation"));
__export(require("./components/address"));
__export(require("./components/affix"));
__export(require("./components/alert"));
__export(require("./components/badge"));
__export(require("./components/blockquote"));
__export(require("./components/bobrilHelpers"));
__export(require("./components/breadcrumb"));
__export(require("./components/breadcrumbItem"));
__export(require("./components/button"));
__export(require("./components/buttonGroup"));
__export(require("./components/buttonToolbar"));
__export(require("./components/carousel"));
__export(require("./components/cite"));
__export(require("./components/collapse"));
__export(require("./components/code"));
__export(require("./components/col"));
__export(require("./components/container"));
__export(require("./components/checkbox"));
__export(require("./components/dd"));
__export(require("./components/del"));
__export(require("./components/dl"));
__export(require("./components/dropdown"));
__export(require("./components/dropdownItem"));
__export(require("./components/dropdownMenu"));
__export(require("./components/dt"));
__export(require("./components/embed"));
__export(require("./components/element"));
__export(require("./components/embedResponsive"));
__export(require("./components/fieldset"));
__export(require("./components/figure"));
__export(require("./components/footer"));
__export(require("./components/form"));
__export(require("./components/formGroup"));
__export(require("./components/glyphicon"));
__export(require("./components/headings"));
__export(require("./components/helpers"));
__export(require("./components/helpText"));
__export(require("./components/iframe"));
__export(require("./components/image"));
__export(require("./components/inputCheckbox"));
__export(require("./components/inputGroup"));
__export(require("./components/inputGroupAddon"));
__export(require("./components/inputGroupBtn"));
__export(require("./components/inputRadio"));
__export(require("./components/inputText"));
__export(require("./components/ins"));
__export(require("./components/italics"));
__export(require("./components/jumbotron"));
__export(require("./components/kbd"));
__export(require("./components/label"));
__export(require("./components/li"));
__export(require("./components/listGroup"));
__export(require("./components/listGroupItem"));
__export(require("./components/listGroupItemLink"));
__export(require("./components/listGroupItemText"));
__export(require("./components/listGroupItemHeading"));
__export(require("./components/object"));
__export(require("./components/ol"));
__export(require("./components/option"));
__export(require("./components/mark"));
__export(require("./components/main"));
__export(require("./components/media"));
__export(require("./components/mediaContent"));
__export(require("./components/mediaHeading"));
__export(require("./components/modal"));
__export(require("./components/modalTitle"));
__export(require("./components/nav"));
__export(require("./components/navbarBrand"));
__export(require("./components/navbarCollapse"));
__export(require("./components/navbarHeader"));
__export(require("./components/navbarNav"));
__export(require("./components/navbarNavItem"));
__export(require("./components/pageHeader"));
__export(require("./components/pager"));
__export(require("./components/pagerItem"));
__export(require("./components/pagination"));
__export(require("./components/paginationItem"));
__export(require("./components/panel"));
__export(require("./components/panelBody"));
__export(require("./components/panelCollapse"));
__export(require("./components/panelFooter"));
__export(require("./components/panelGroup"));
__export(require("./components/panelHeading"));
__export(require("./components/panelTitle"));
__export(require("./components/paragraph"));
__export(require("./components/progress"));
__export(require("./components/progressBar"));
__export(require("./components/pill"));
__export(require("./components/pills"));
__export(require("./components/popover"));
__export(require("./components/pre"));
__export(require("./components/radio"));
__export(require("./components/responsive"));
__export(require("./components/responsiveTable"));
__export(require("./components/row"));
__export(require("./components/select"));
__export(require("./components/size"));
__export(require("./components/span"));
__export(require("./components/sub"));
__export(require("./components/sup"));
__export(require("./components/samp"));
__export(require("./components/small"));
__export(require("./components/strong"));
__export(require("./components/strikethrough"));
__export(require("./components/tab"));
__export(require("./components/table"));
__export(require("./components/tabs"));
__export(require("./components/tbody"));
__export(require("./components/td"));
__export(require("./components/textarea"));
__export(require("./components/th"));
__export(require("./components/thead"));
__export(require("./components/tooltip"));
__export(require("./components/tr"));
__export(require("./components/typography"));
__export(require("./components/ul"));
__export(require("./components/underlined"));
__export(require("./components/validations"));
__export(require("./components/variable"));
__export(require("./components/video"));
__export(require("./components/well"));
var defaultCss = b.asset("web/node_modules/bootstrap/dist/css/bootstrap.min.css");
function init() {
    b.asset("web/node_modules/jquery/dist/jquery.min.js");
    b.asset("web/node_modules/bootstrap/dist/js/bootstrap.min.js");
    b.asset("web/node_modules/bootstrap-3-typeahead/bootstrap3-typeahead.min.js");
    moveDefaultCssToBeginning();
    return {};
}
exports.init = init;
function moveDefaultCssToBeginning() {
    var links = document.head.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.endsWith(defaultCss)) {
            if (i > 0) {
                document.head.removeChild(link);
                document.head.insertBefore(link, links[0]);
            }
            return;
        }
    }
}
init();

});
R('web/node_modules/bobx/index',function(require, module, exports, global){
"use strict";
var b = require("bobril");
function equalsIncludingNaN(a, b) {
    return a === b || (a !== a && b !== b); // it correctly returns true for NaN and NaN
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
var lastId = 0;
function allocId() {
    return ++lastId;
}
function isIBobxComputed(v) {
    return v.$bobx === ComputedMarker;
}
var ObservableValue = /** @class */ (function () {
    function ObservableValue(value, enhancer) {
        this.atomId = allocId();
        this.ctxs = undefined;
        this.value = enhancer(value, undefined);
        this.enhancer = enhancer;
        this.$bobx = null;
        this._prop = undefined;
    }
    ObservableValue.prototype.get = function () {
        this.markUsage();
        return this.value;
    };
    ObservableValue.prototype.set = function (value) {
        var newValue = this.enhancer(value, this.value);
        if (!equalsIncludingNaN(newValue, this.value)) {
            this.invalidate();
            this.value = newValue;
        }
    };
    ObservableValue.prototype.prop = function () {
        var _this = this;
        var p = this._prop;
        if (p === undefined) {
            p = function (value) {
                if (value === undefined) {
                    return _this.get();
                }
                _this.set(value);
                return _this.value;
            };
            this._prop = p;
        }
        return p;
    };
    ObservableValue.prototype.markUsage = function () {
        var ctx = b.getCurrentCtx();
        if (ctx === undefined)
            // outside of render => nothing to mark
            return;
        if (isIBobxComputed(ctx)) {
            if (ctx.markUsing(this.atomId, this)) {
                var ctxs = this.ctxs;
                if (ctxs === undefined) {
                    ctxs = new Map();
                    this.ctxs = ctxs;
                }
                ctxs.set(ctx.atomId, ctx);
            }
        }
        else {
            var bobx = ctx.$bobxCtx;
            if (bobx === undefined) {
                bobx = new Map();
                bobx.ctxId = allocId();
                ctx.$bobxCtx = bobx;
            }
            if (bobx.has(this.atomId))
                return;
            bobx.set(this.atomId, this);
            if (this.ctxs === undefined) {
                this.ctxs = new Map();
            }
            this.ctxs.set(bobx.ctxId, ctx);
        }
    };
    ObservableValue.prototype.invalidate = function () {
        var ctxs = this.ctxs;
        if (ctxs === undefined)
            return;
        ctxs.forEach(function (ctx) {
            if (isIBobxComputed(ctx)) {
                ctx.invalidateBy(this.atomId);
            }
            else {
                ctx.$bobxCtx.delete(this.atomId);
                b.invalidate(ctx);
            }
        }, this);
        ctxs.clear();
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    return ObservableValue;
}());
exports.ObservableValue = ObservableValue;
var previousBeforeRender = b.setBeforeRender(function (node, phase) {
    var ctx = b.getCurrentCtx();
    if (phase === b.RenderPhase.Destroy || phase === b.RenderPhase.Update || phase === b.RenderPhase.LocalUpdate) {
        outsideOfComputedPartialResults = false;
        var bobx = ctx.$bobxCtx;
        if (bobx !== undefined) {
            bobx.forEach(function (value) {
                if (isIBobxComputed(value)) {
                    value.unmarkUsedBy(this.ctxId);
                }
                else {
                    value.ctxs.delete(this.ctxId);
                }
            }, bobx);
            if (phase === b.RenderPhase.Destroy) {
                ctx.$bobxCtx = undefined;
            }
            else {
                bobx.clear();
            }
        }
    }
    previousBeforeRender(node, phase);
});
function referenceEnhancer(newValue, _oldValue) {
    return newValue;
}
function isObservable(value) {
    return value != null && value.$bobx !== undefined;
}
exports.isObservable = isObservable;
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isES6Map(value) {
    return value instanceof Map;
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function asObservableObject(target) {
    var behind = target.$bobx;
    if (behind !== undefined)
        return behind;
    behind = Object.create(null);
    addHiddenFinalProp(target, "$bobx", behind);
    return behind;
}
function asObservableClass(target) {
    var behind = target.$bobx;
    if (behind !== LazyClass)
        return behind;
    behind = {};
    target.$bobx = behind;
    return behind;
}
exports.asObservableClass = asObservableClass;
function deepEqual(a, b) {
    if (a === b)
        return true;
    if (typeof a !== "object" || typeof b !== "object") {
        if (a !== a && b !== b)
            return true;
        return false;
    }
    if (isArrayLike(a)) {
        if (!isArrayLike(b))
            return false;
        var length = a.length;
        if (length != b.length)
            return false;
        var aArray = a.$bobx || a;
        var bArray = b.$bobx || b;
        for (var i = 0; i < length; i++) {
            if (!deepEqual(aArray[i], bArray[i]))
                return false;
        }
        return true;
    }
    if (isObservableMap(a)) {
        if (isObservableMap(b)) {
            if (a.size != b.size)
                return false;
            var res_1 = true;
            a.forEach(function (v, k) {
                if (!res_1)
                    return;
                if (!b.has(k)) {
                    res_1 = false;
                    return;
                }
                if (!deepEqual(v, b.get(k)))
                    res_1 = false;
            });
            return res_1;
        }
        var bb_1 = b;
        if (isObservable(b))
            bb_1 = b.$bobx;
        var bKeys_1 = 0;
        for (var _prop in bb_1) {
            bKeys_1++;
        }
        if (a.size != bKeys_1)
            return false;
        var res_2 = true;
        a.forEach(function (v, k) {
            if (!res_2)
                return;
            if (!(k in bb_1)) {
                res_2 = false;
                return;
            }
            if (!deepEqual(v, b[k]))
                res_2 = false;
        });
        return res_2;
    }
    if (isObservableMap(b)) {
        var aa_1 = a;
        if (isObservable(a))
            aa_1 = a.$bobx;
        var aKeys_1 = 0;
        for (var _prop in aa_1) {
            aKeys_1++;
        }
        if (b.size != aKeys_1)
            return false;
        var res_3 = true;
        b.forEach(function (v, k) {
            if (!res_3)
                return;
            if (!(k in aa_1)) {
                res_3 = false;
                return;
            }
            if (!deepEqual(v, a[k]))
                res_3 = false;
        });
        return res_3;
    }
    var aa = a;
    var bb = b;
    if (isObservable(a))
        aa = a.$bobx;
    if (isObservable(b))
        bb = b.$bobx;
    var bKeys = 0;
    for (var _prop in bb) {
        bKeys++;
    }
    var aKeys = 0;
    for (var prop in aa) {
        aKeys++;
        if (!(prop in bb))
            return false;
        if (!deepEqual(a[prop], b[prop]))
            return false;
    }
    return aKeys == bKeys;
}
exports.deepEqual = deepEqual;
var observablePropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    var config = observablePropertyConfigs[propName];
    if (config)
        return config;
    return (observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function () {
            return this.$bobx[propName].get();
        },
        set: function (value) {
            this.$bobx[propName].set(value);
        }
    });
}
function defineObservableProperty(target, behind, propName, newValue, enhancer) {
    behind[propName] = new ObservableValue(newValue, enhancer);
    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
}
// ARRAY
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See MobX #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var observableArrayPropCount = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
exports.StubArray = StubArray;
StubArray.prototype = [];
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer) {
        var _this = _super.call(this) || this;
        _this.$enhancer = enhancer;
        _this.$atom = new ObservableValue(null, referenceEnhancer);
        if (initialValues && initialValues.length) {
            reserveArrayBuffer(initialValues.length);
            _this.$bobx = initialValues.map(function (v) { return enhancer(v, undefined); });
        }
        else {
            _this.$bobx = [];
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter until any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(_this, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var _a;
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var length = this.$bobx.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount == null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems.length > 0 || deleteCount > 0)
            this.$atom.invalidate();
        reserveArrayBuffer(length + newItems.length - deleteCount);
        for (var i = 0; i < newItems.length; i++) {
            newItems[i] = this.$enhancer(newItems[i], undefined);
        }
        return (_a = this.$bobx).splice.apply(_a, __spread([index, deleteCount], newItems));
    };
    ObservableArray.prototype.setArrayLength = function (newLength) {
        var currentLength = this.$bobx.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength)
            this.splice.apply(this, __spread([currentLength, 0], new Array(newLength - currentLength)));
        else
            this.splice(newLength, currentLength - newLength);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$atom.markUsage();
        return Array.prototype.concat.apply(this.$bobx, arrays.map(function (a) { return (isObservableArray(a) ? a.$bobx : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        this.$atom.invalidate();
        return this.splice.apply(this, __spread([0, this.$bobx.length], newItems));
    };
    /**
     * Converts this array back to a (shallow) JavaScript structure.
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.$bobx;
    };
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        this.$atom.markUsage();
        var values = this.$bobx, l = values.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, values[i], i, this))
                return values[i];
        return undefined;
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var values = this.$bobx;
        if (items.length == 0)
            return values.length;
        for (var i = 0; i < items.length; i++) {
            items[i] = this.$enhancer(items[i], undefined);
        }
        values.push.apply(values, items);
        this.$atom.invalidate();
        reserveArrayBuffer(values.length);
        return values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$bobx.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.splice.apply(this, __spread([0, 0], items));
        return this.$bobx.length;
    };
    ObservableArray.prototype.reverse = function () {
        this.$atom.invalidate();
        var values = this.$bobx;
        values.reverse.apply(values, arguments);
        return this;
    };
    ObservableArray.prototype.sort = function (_compareFn) {
        this.$atom.invalidate();
        var values = this.$bobx;
        values.sort.apply(values, arguments);
        return this;
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$bobx.indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.checkIndex = function (index) {
        if (index < 0) {
            throw new Error("Array index out of bounds: " + index + " is negative");
        }
        var length = this.$bobx.length;
        if (index >= length) {
            throw new Error("Array index out of bounds: " + index + " is not smaller than " + length);
        }
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        this.checkIndex(fromIndex);
        this.checkIndex(toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$bobx;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = __spread(oldItems.slice(0, toIndex), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    ObservableArray.prototype.toString = function () {
        this.$atom.markUsage();
        return Array.prototype.toString.apply(this.$bobx, arguments);
    };
    return ObservableArray;
}(StubArray));
exports.ObservableArray = ObservableArray;
/**
 * We don't want those to show up in `for (const key in array)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "splice",
    "push",
    "pop",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString",
    "setArrayLength",
    "checkIndex",
    "$atom",
    "$bobx",
    "$enhancer"
]);
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        this.$atom.markUsage();
        return this.$bobx.length;
    },
    set: function (newLength) {
        this.setArrayLength(newLength);
    }
});
// Wrap function from prototype
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        this.$atom.markUsage();
        return baseFunc.apply(this.$bobx, arguments);
    });
});
var ENTRY_0 = {
    configurable: true,
    enumerable: false,
    set: createArraySetter(0),
    get: createArrayGetter(0)
};
function createArrayBufferItem(index) {
    var set = createArraySetter(index);
    var get = createArrayGetter(index);
    Object.defineProperty(ObservableArray.prototype, "" + index, {
        enumerable: false,
        configurable: true,
        set: set,
        get: get
    });
}
function createArraySetter(index) {
    return function (newValue) {
        var values = this.$bobx;
        if (index < values.length) {
            // update at index in range
            var oldValue = values[index];
            newValue = this.$enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                this.$atom.invalidate();
                values[index] = newValue;
            }
        }
        else if (index === values.length) {
            // add a new item
            this.push(newValue);
        }
        else
            throw new Error("Array index out of bounds, " + index + " is larger than " + values.length);
    };
}
function createArrayGetter(index) {
    return function () {
        var values = this.$bobx;
        this.$atom.markUsage();
        if (index < values.length) {
            return values[index];
        }
        return undefined;
    };
}
function reserveArrayBuffer(max) {
    max++;
    if (observableArrayPropCount >= max)
        return;
    max = Math.max(Math.ceil(observableArrayPropCount * 1.5), max);
    for (var index = observableArrayPropCount; index < max; index++)
        createArrayBufferItem(index);
    observableArrayPropCount = max;
}
reserveArrayBuffer(100);
function isObservableArray(thing) {
    return isObject(thing) && b.isArray(thing.$bobx);
}
exports.isObservableArray = isObservableArray;
function isArrayLike(thing) {
    return b.isArray(thing) || isObservableArray(thing);
}
b.setIsArrayVdom(isArrayLike);
var ObservableMapMarker = 0;
var ComputedMarker = 1;
function isObservableMap(thing) {
    return isObject(thing) && thing.$bobx === ObservableMapMarker;
}
exports.isObservableMap = isObservableMap;
var ObservableMap = /** @class */ (function () {
    function ObservableMap(init, enhancer) {
        var _this = this;
        this.$enhancer = enhancer;
        this.$atom = new ObservableValue(null, referenceEnhancer);
        this.$content = new Map();
        this._size = 0;
        if (Array.isArray(init))
            init.forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _this.set(key, value);
            });
        else if (isObservableMap(init) || isES6Map(init)) {
            init.forEach(function (value, key) {
                this.set(key, value);
            }, this);
        }
        else if (isPlainObject(init)) {
            var keys = Object.keys(init);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                this.set(key, init[key]);
            }
        }
        else if (init != null)
            throw new Error("Cannot initialize map from " + init);
    }
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this.$atom.markUsage();
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype.has = function (key) {
        var cont = this.$content.get(key);
        if (cont !== undefined) {
            cont.markUsage();
            return true;
        }
        this.$atom.markUsage();
        return false;
    };
    ObservableMap.prototype.get = function (key) {
        var cont = this.$content.get(key);
        if (cont !== undefined) {
            return cont.get();
        }
        this.$atom.markUsage();
        return undefined;
    };
    ObservableMap.prototype.set = function (key, value) {
        var cont = this.$content.get(key);
        if (cont !== undefined) {
            cont.set(value);
            return this;
        }
        this.$atom.invalidate();
        this.$content.set(key, new ObservableValue(value, this.$enhancer));
        this._size++;
        return this;
    };
    ObservableMap.prototype.prop = function (key) {
        var _this = this;
        var cont = this.$content.get(key);
        if (cont !== undefined) {
            cont.markUsage();
            return cont.prop();
        }
        this.$atom.markUsage();
        return function (value) {
            if (value === undefined) {
                return _this.get(key);
            }
            _this.set(key, value);
            return _this.get(key);
        };
    };
    ObservableMap.prototype.clear = function () {
        if (this._size == 0)
            return;
        var c = this.$content;
        c.forEach(function (v) { return v.invalidate(); });
        this.$atom.invalidate();
        this._size = 0;
        this.$content.clear();
    };
    ObservableMap.prototype.delete = function (key) {
        this.$atom.invalidate();
        var cont = this.$content.get(key);
        if (cont !== undefined) {
            cont.invalidate();
            this.$content.delete(key);
            this._size--;
            return true;
        }
        return false;
    };
    ObservableMap.prototype.forEach = function (callbackfn, thisArg) {
        this.$atom.markUsage();
        this.$content.forEach(function (value, key) {
            callbackfn.call(thisArg, value.get(), key, this);
        }, this);
    };
    ObservableMap.prototype.toJSON = function () {
        var res = Object.create(null);
        this.$content.forEach(function (v, k) {
            this[k] = v.get();
        }, res);
        return res;
    };
    return ObservableMap;
}());
exports.ObservableMap = ObservableMap;
addHiddenFinalProp(ObservableMap.prototype, "$bobx", ObservableMapMarker);
function deepEnhancer(newValue, oldValue) {
    if (newValue === oldValue)
        return oldValue;
    if (newValue == null)
        return newValue;
    if (isObservable(newValue))
        return newValue;
    if (b.isArray(newValue))
        return new ObservableArray(newValue, deepEnhancer);
    if (isES6Map(newValue))
        return new ObservableMap(newValue, deepEnhancer);
    if (isPlainObject(newValue)) {
        var res = Object.create(Object.getPrototypeOf(newValue));
        var behind = asObservableObject(res);
        for (var key in newValue) {
            defineObservableProperty(res, behind, key, newValue[key], deepEnhancer);
        }
        return res;
    }
    return newValue;
}
function shallowEnhancer(newValue, oldValue) {
    if (newValue === oldValue)
        return oldValue;
    if (newValue == null)
        return newValue;
    if (isObservable(newValue))
        return newValue;
    if (b.isArray(newValue))
        return new ObservableArray(newValue, referenceEnhancer);
    if (isES6Map(newValue))
        return new ObservableMap(newValue, referenceEnhancer);
    if (isPlainObject(newValue)) {
        var res = Object.create(Object.getPrototypeOf(newValue));
        var behind = asObservableObject(res);
        for (var key in newValue) {
            defineObservableProperty(res, behind, key, newValue[key], referenceEnhancer);
        }
        return res;
    }
    throw new Error("shallow observable cannot be used for primitive values");
}
function deepStructEnhancer(newValue, oldValue) {
    if (deepEqual(newValue, oldValue))
        return oldValue;
    if (newValue == null)
        return newValue;
    if (isObservable(newValue))
        return newValue;
    if (b.isArray(newValue))
        return new ObservableArray(newValue, deepStructEnhancer);
    if (isES6Map(newValue))
        return new ObservableMap(newValue, deepStructEnhancer);
    if (isPlainObject(newValue)) {
        var res = Object.create(Object.getPrototypeOf(newValue));
        var behind = asObservableObject(res);
        for (var key in newValue) {
            defineObservableProperty(res, behind, key, newValue[key], deepStructEnhancer);
        }
        return res;
    }
    return newValue;
}
function refStructEnhancer(newValue, oldValue) {
    if (deepEqual(newValue, oldValue))
        return oldValue;
    return newValue;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
var LazyClass = {};
var $atomId = "$atomId";
function initObservableClassPrototype(target) {
    // target is actually prototype not instance
    if (Object.getOwnPropertyDescriptor(target.constructor, $atomId) === undefined) {
        Object.defineProperty(target.constructor, $atomId, {
            enumerable: false,
            writable: false,
            configurable: false,
            value: allocId()
        });
    }
    if (!("$bobx" in target)) {
        Object.defineProperty(target, "$bobx", {
            enumerable: false,
            writable: true,
            configurable: true,
            value: LazyClass
        });
        if (!("toJSON" in target)) {
            target.toJSON = function () {
                return this.$bobx;
            };
        }
    }
}
exports.initObservableClassPrototype = initObservableClassPrototype;
function createDecoratorForEnhancer(enhancer) {
    return function classPropertyDecorator(target, propName, _descriptor) {
        initObservableClassPrototype(target);
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                var val = this.$bobx[propName];
                if (val === undefined) {
                    var behind = asObservableClass(this);
                    val = new ObservableValue(undefined, enhancer);
                    behind[propName] = val;
                }
                return val.get();
            },
            set: function (value) {
                var val = this.$bobx[propName];
                if (val === undefined) {
                    var behind = asObservableClass(this);
                    val = new ObservableValue(value, enhancer);
                    behind[propName] = val;
                }
                else {
                    val.set(value);
                }
            }
        };
    };
}
function createObservable(value) {
    if (value === void 0) { value = undefined; }
    // @observable someProp;
    if (arguments.length > 1)
        return deepDecorator.apply(null, arguments);
    // it is an observable already, done
    if (isObservable(value))
        return value;
    // something that can be converted and mutated?
    var res = deepEnhancer(value, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== value)
        return res;
    return new ObservableValue(value, deepEnhancer);
}
exports.observable = createObservable;
exports.observable.map = (function (init) { return new ObservableMap(init, deepEnhancer); });
exports.observable.shallowMap = (function (init) {
    return new ObservableMap(init, referenceEnhancer);
});
exports.observable.deep = deepDecorator;
exports.observable.ref = refDecorator;
exports.observable.shallow = shallowDecorator;
exports.observable.struct = deepStructDecorator;
exports.observable.deep.struct = deepStructDecorator;
exports.observable.ref.struct = refStructDecorator;
var bobxRootCtx = undefined;
b.addRoot(function (root) {
    bobxRootCtx = root.n;
    return undefined;
});
var buryDeadSet = new Set();
var updateNextFrameList = [];
exports.maxIterations = 100;
var previousReallyBeforeFrame = b.setReallyBeforeFrame(function () {
    frameStart = b.now();
    if (!alreadyInterrupted) {
        buryWholeDeadSet();
    }
    alreadyInterrupted = false;
    outsideOfComputedPartialResults = false;
    firstInterruptibleCtx = undefined;
    var iteration = 0;
    while (iteration++ < exports.maxIterations) {
        var list = updateNextFrameList;
        if (list.length == 0)
            break;
        updateNextFrameList = [];
        for (var i = 0; i < list.length; i++) {
            list[i].updateIfNeededWithoutResurrecting();
        }
    }
    if (iteration >= exports.maxIterations) {
        throw new Error("Computed values did not stabilize after " + exports.maxIterations + " iterations");
    }
    previousReallyBeforeFrame();
});
var ComputedState;
(function (ComputedState) {
    ComputedState[ComputedState["First"] = 0] = "First";
    ComputedState[ComputedState["NeedRecheck"] = 1] = "NeedRecheck";
    ComputedState[ComputedState["Updating"] = 2] = "Updating";
    ComputedState[ComputedState["Updated"] = 3] = "Updated";
    ComputedState[ComputedState["NeedDepsRecheck"] = 4] = "NeedDepsRecheck";
    ComputedState[ComputedState["Scope"] = 5] = "Scope";
    ComputedState[ComputedState["PermanentlyDead"] = 6] = "PermanentlyDead";
    ComputedState[ComputedState["Waiting"] = 7] = "Waiting";
    ComputedState[ComputedState["Zombie"] = 8] = "Zombie";
})(ComputedState = exports.ComputedState || (exports.ComputedState = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
    }
    return CaughtException;
}());
exports.CaughtException = CaughtException;
function buryWholeDeadSet() {
    if (buryDeadSet.size > 0) {
        buryDeadSet.forEach(function (v) {
            v.buryIfDead();
        });
        buryDeadSet.clear();
    }
}
function isCaughtException(e) {
    return e instanceof CaughtException;
}
exports.isCaughtException = isCaughtException;
var ComputedImpl = /** @class */ (function () {
    function ComputedImpl(fn, that, comparator) {
        this.atomId = allocId();
        this.fn = fn;
        this.that = that;
        this.value = undefined;
        this.state = ComputedState.First;
        this.comparator = comparator;
        this.using = undefined;
        this.usedBy = undefined;
        this.partialResults = false;
        this.zombieCounter = 0;
    }
    ComputedImpl.prototype.markUsing = function (atomId, atom) {
        var using = this.using;
        if (using === undefined) {
            using = new Map();
            using.set(atomId, atom);
            this.using = using;
            return true;
        }
        if (using.has(atomId))
            return false;
        using.set(atomId, atom);
        return true;
    };
    ComputedImpl.prototype.waitingInvalidate = function (_soft) {
        throw new Error("Invalid operation");
    };
    ComputedImpl.prototype.invalidateBy = function (atomId) {
        var using = this.using;
        if (using === undefined)
            return;
        if (using.delete(atomId)) {
            var state = this.state;
            if (state === ComputedState.Waiting) {
                state = this.waitingInvalidate(false);
            }
            if (state === ComputedState.Updating) {
                throw new Error("Modifying inputs during updating computed");
            }
            if (state === ComputedState.Updated || state === ComputedState.NeedDepsRecheck) {
                if (DEBUG) {
                    var i = this.onInvalidated;
                    if (i)
                        i(this);
                }
                this.state = ComputedState.NeedRecheck;
                var usedBy = this.usedBy;
                if (usedBy !== undefined) {
                    var usedByBobrilNode_1 = false;
                    usedBy.forEach(function (use) {
                        if (isIBobxComputed(use))
                            use.softInvalidate();
                        else
                            usedByBobrilNode_1 = true;
                    });
                    if (usedByBobrilNode_1) {
                        this.scheduleUpdateNextFrame();
                    }
                }
            }
            this.freeUsings();
        }
    };
    ComputedImpl.prototype.softInvalidate = function () {
        var state = this.state;
        if (state === ComputedState.Waiting) {
            state = this.waitingInvalidate(true);
        }
        if (state === ComputedState.Updating) {
            throw new Error("Modifying inputs during updating computed");
        }
        if (state === ComputedState.Updated) {
            this.state = ComputedState.NeedDepsRecheck;
            var usedBy = this.usedBy;
            if (usedBy !== undefined) {
                var usedByBobrilNode_2 = false;
                usedBy.forEach(function (use) {
                    if (isIBobxComputed(use))
                        use.softInvalidate();
                    else
                        usedByBobrilNode_2 = true;
                });
                if (usedByBobrilNode_2) {
                    this.scheduleUpdateNextFrame();
                }
            }
        }
    };
    ComputedImpl.prototype.scheduleUpdateNextFrame = function () {
        if (updateNextFrameList.length == 0)
            b.invalidate(bobxRootCtx);
        updateNextFrameList.push(this);
    };
    ComputedImpl.prototype.freeUsings = function () {
        var _this = this;
        var using = this.using;
        if (using !== undefined) {
            this.using = undefined;
            using.forEach(function (v) {
                if (isIBobxComputed(v)) {
                    v.unmarkUsedBy(_this.atomId);
                }
                else {
                    v.ctxs.delete(_this.atomId);
                }
            });
        }
    };
    ComputedImpl.prototype.free = function () {
        var _this = this;
        var using = this.using;
        if (using !== undefined) {
            this.using = undefined;
            using.forEach(function (v) {
                if (isIBobxComputed(v)) {
                    v.unmarkUsedBy(_this.atomId);
                    v.buryIfDead();
                }
                else {
                    v.ctxs.delete(_this.atomId);
                }
            });
        }
        this.value = undefined;
    };
    ComputedImpl.prototype.buryIfDead = function () {
        var _this = this;
        if (this.usedBy !== undefined && this.usedBy.size > 0) {
            return;
        }
        buryDeadSet.delete(this);
        var state = this.state;
        if (state === ComputedState.Zombie || state === ComputedState.Waiting)
            return;
        if (this.zombieTime) {
            this.state = ComputedState.Zombie;
            var zombieCounter_1 = ++this.zombieCounter;
            setTimeout(function () {
                if (_this.state === ComputedState.Zombie && _this.zombieCounter == zombieCounter_1) {
                    _this.free();
                }
            }, this.zombieTime);
            return;
        }
        this.state = ComputedState.First;
        this.free();
    };
    ComputedImpl.prototype.dispose = function () {
        buryDeadSet.delete(this);
        this.state = ComputedState.PermanentlyDead;
        this.free();
    };
    ComputedImpl.prototype.unmarkUsedBy = function (atomId) {
        this.usedBy.delete(atomId);
        if (this.usedBy.size === 0) {
            buryDeadSet.add(this);
        }
    };
    ComputedImpl.prototype.markUsage = function () {
        var ctx = b.getCurrentCtx();
        if (ctx === undefined)
            // outside of render => nothing to mark
            return true;
        if (isIBobxComputed(ctx)) {
            if (ctx.markUsing(this.atomId, this)) {
                var ctxs = this.usedBy;
                if (ctxs === undefined) {
                    ctxs = new Map();
                    this.usedBy = ctxs;
                }
                ctxs.set(ctx.atomId, ctx);
            }
        }
        else {
            var bobx = ctx.$bobxCtx;
            if (bobx === undefined) {
                bobx = new Map();
                bobx.ctxId = allocId();
                ctx.$bobxCtx = bobx;
            }
            if (bobx.has(this.atomId))
                return false;
            bobx.set(this.atomId, this);
            var ctxs = this.usedBy;
            if (ctxs === undefined) {
                ctxs = new Map();
                this.usedBy = ctxs;
            }
            ctxs.set(bobx.ctxId, ctx);
        }
        return false;
    };
    ComputedImpl.prototype.invalidate = function () {
        var usedBy = this.usedBy;
        if (usedBy !== undefined) {
            usedBy.forEach(function (use) {
                if (isIBobxComputed(use))
                    use.invalidateBy(this.atomId);
                else {
                    use.$bobxCtx.delete(this.atomId);
                    b.invalidate(use);
                }
            }, this);
            usedBy.clear();
        }
        buryDeadSet.add(this);
    };
    ComputedImpl.prototype.updateIfNeededWithoutResurrecting = function () {
        if (this.state === ComputedState.PermanentlyDead)
            return;
        this.updateIfNeeded();
    };
    ComputedImpl.prototype.updateIfNeeded = function () {
        var state = this.state;
        if (DEBUG && state === ComputedState.PermanentlyDead)
            throw new Error("Using dead computed, bug in Bobx");
        if (state === ComputedState.NeedDepsRecheck) {
            var using = this.using;
            if (using !== undefined) {
                using.forEach(function (v) {
                    if (isIBobxComputed(v)) {
                        v.updateIfNeeded();
                    }
                });
            }
            if (this.state === ComputedState.NeedDepsRecheck) {
                this.state = ComputedState.Updated;
                return true;
            }
            this.update();
            return true;
        }
        if (state !== ComputedState.Updated) {
            this.update();
            return true;
        }
        return false;
    };
    ComputedImpl.prototype.call = function () {
        try {
            return this.fn.call(this.that);
        }
        catch (err) {
            return new CaughtException(err);
        }
    };
    ComputedImpl.prototype.update = function () {
        if (alreadyInterrupted && this.partialResults) {
            setPartialResults();
            return;
        }
        var backupCurrentCtx = b.getCurrentCtx();
        b.setCurrentCtx(this);
        this.partialResults = false;
        this.freeUsings();
        if (this.state === ComputedState.First) {
            this.state = ComputedState.Updating;
            this.value = this.call();
        }
        else {
            this.state = ComputedState.Updating;
            var newResult = this.call();
            if (!this.comparator(this.value, newResult)) {
                this.value = newResult;
                this.invalidate();
            }
        }
        this.partialResults = alreadyInterrupted;
        this.state = ComputedState.Updated;
        b.setCurrentCtx(backupCurrentCtx);
        if (this.partialResults) {
            this.state = ComputedState.NeedRecheck;
            setPartialResults();
        }
    };
    ComputedImpl.prototype.checkRecursion = function () {
        if (this.state === ComputedState.Updating) {
            throw new Error("Recursively calling computed value");
        }
    };
    ComputedImpl.prototype.run = function () {
        this.checkRecursion();
        var wasUpdate = this.updateIfNeeded();
        var usedOutsideOfScope = this.markUsage();
        var value = this.value;
        if (wasUpdate && usedOutsideOfScope)
            this.buryIfDead();
        if (isCaughtException(value))
            throw value.cause;
        return value;
    };
    return ComputedImpl;
}());
exports.ComputedImpl = ComputedImpl;
addHiddenFinalProp(ComputedImpl.prototype, "$bobx", ComputedMarker);
function getStringHashCode(s) {
    var h = 0, l = s.length, i = 0;
    while (i < l)
        h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
    return h;
}
exports.getStringHashCode = getStringHashCode;
var hashes = new WeakMap();
function getObjectHashCode(value) {
    var result = hashes.get(value);
    if (result !== undefined)
        return result;
    result = allocId() | 0;
    hashes.set(value, result);
    return result;
}
exports.getObjectHashCode = getObjectHashCode;
function getArrayHashCode(a) {
    var h = 0, l = a.length, i = 0;
    while (i < l)
        h = ((h << 5) - h + getHashCode(a[i++])) | 0;
    return h;
}
exports.getArrayHashCode = getArrayHashCode;
function getHashCode(value) {
    if (value == undefined)
        return 1;
    if (value === false)
        return 2;
    if (value === true)
        return 3;
    if (b.isNumber(value))
        return value | 0;
    if (b.isString(value))
        return getStringHashCode(value);
    if (b.isArray(value))
        return getArrayHashCode(value);
    return getObjectHashCode(value);
}
exports.getHashCode = getHashCode;
var defaultComputedOptions = {
    getHashCode: getArrayHashCode,
    isEqual: function (a, b) {
        var l = a.length;
        if (l !== b.length)
            return false;
        for (var i = 0; i < l; i++) {
            if (!equalsIncludingNaN(a[i], b[i]))
                return false;
        }
        return true;
    },
    comparator: equalsIncludingNaN
};
function buildComputed(comparator) {
    return function (target, propName, descriptor) {
        initObservableClassPrototype(target);
        propName = propName + "\t" + target.constructor[$atomId];
        if (descriptor.get != undefined) {
            var fn_1 = descriptor.get;
            return {
                configurable: true,
                enumerable: false,
                get: function () {
                    var val = this.$bobx[propName];
                    if (val === undefined) {
                        var behind = asObservableClass(this);
                        val = new ComputedImpl(fn_1, this, comparator);
                        behind[propName] = val;
                    }
                    return val.run();
                },
                set: descriptor.set
            };
        }
        else {
            var fn_2 = descriptor.value;
            assertFunctionInComputed(fn_2);
            if (fn_2.length > 0) {
                return buildParametricCompute(propName, fn_2, { comparator: comparator });
            }
            return {
                configurable: true,
                enumerable: false,
                value: function () {
                    var val = this.$bobx[propName];
                    if (val === undefined) {
                        var behind = asObservableClass(this);
                        val = new ComputedImpl(fn_2, this, comparator);
                        behind[propName] = val;
                    }
                    return val.run();
                }
            };
        }
    };
}
function assertFunctionInComputed(fn) {
    if (!b.isFunction(fn)) {
        throw new Error("Computed could be only function");
    }
}
function buildCustomizedComputed(options) {
    return function (target, propName, descriptor) {
        initObservableClassPrototype(target);
        propName = propName + "\t" + target.constructor[$atomId];
        if (descriptor.get != undefined) {
            throw new Error("Customized Computed could not be property");
        }
        else {
            var fn = descriptor.value;
            assertFunctionInComputed(fn);
            return buildParametricCompute(propName, fn, options);
        }
    };
}
exports.computed = buildComputed(equalsIncludingNaN);
exports.computed.struct = buildComputed(deepEqual);
exports.computed.equals = buildComputed;
exports.computed.customized = buildCustomizedComputed;
var arraySlice = Array.prototype.slice;
function buildParametricCompute(propName, fn, options) {
    return {
        configurable: true,
        enumerable: false,
        value: function () {
            var val = this.$bobx[propName];
            if (val === undefined) {
                var behind = asObservableClass(this);
                val = new ParametricComputedMap(fn, this, options);
                behind[propName] = val;
            }
            return val.run(arraySlice.call(arguments));
        }
    };
}
var ParamComputedImpl = /** @class */ (function (_super) {
    __extends(ParamComputedImpl, _super);
    function ParamComputedImpl(fn, that, comparator, owner, hashCode, params) {
        var _this = _super.call(this, fn, that, comparator) || this;
        _this.owner = owner;
        _this.hashCode = hashCode;
        _this.params = params;
        return _this;
    }
    ParamComputedImpl.prototype.call = function () {
        try {
            return this.fn.apply(this.that, this.params);
        }
        catch (err) {
            return new CaughtException(err);
        }
    };
    ParamComputedImpl.prototype.free = function () {
        _super.prototype.free.call(this);
        this.state = ComputedState.PermanentlyDead;
        this.owner.free(this);
    };
    return ParamComputedImpl;
}(ComputedImpl));
var ParametricComputedMap = /** @class */ (function () {
    function ParametricComputedMap(fn, that, options) {
        this.fn = fn;
        this.that = that;
        this.map = new Map();
        this.getHashCode = options.getHashCode || defaultComputedOptions.getHashCode;
        this.isEqual = options.isEqual || defaultComputedOptions.isEqual;
        this.onFree = options.onFree;
        this.comparator = options.comparator || defaultComputedOptions.comparator;
        this.disposing = false;
    }
    ParametricComputedMap.prototype.run = function (params) {
        var hashCode = this.getHashCode(params);
        var row = this.map.get(hashCode);
        var item = undefined;
        if (row === undefined) {
            item = new ParamComputedImpl(this.fn, this.that, this.comparator, this, hashCode, params);
            row = [item];
            this.map.set(hashCode, row);
        }
        else {
            var len = row.length;
            for (var i = 0; i < len; i++) {
                if (this.isEqual(params, row[i].params)) {
                    item = row[i];
                    break;
                }
            }
            if (item === undefined) {
                item = new ParamComputedImpl(this.fn, this.that, this.comparator, this, hashCode, params);
                row.push(item);
            }
        }
        return item.run();
    };
    ParametricComputedMap.prototype.free = function (item) {
        if (this.onFree !== undefined) {
            var target = item.value;
            if (isCaughtException(target))
                target = undefined;
            this.onFree(target, item.params);
        }
        if (this.disposing)
            return;
        var hashCode = item.hashCode;
        var row = this.map.get(hashCode);
        if (row.length == 1) {
            this.map.delete(hashCode);
        }
        else {
            var index = row.indexOf(item);
            row.splice(index, 1);
        }
    };
    ParametricComputedMap.prototype.dispose = function () {
        this.disposing = true;
        this.map.forEach(function (row) {
            for (var i = 0, l = row.length; i < l; i++) {
                var item = row[i];
                item.dispose();
            }
        });
    };
    return ParametricComputedMap;
}());
exports.ParametricComputedMap = ParametricComputedMap;
function observableProp(obj, key) {
    if (obj == null)
        throw new Error("observableProp parameter is " + obj);
    var bobx = obj.$bobx;
    if (bobx === undefined)
        throw new Error("observableProp parameter is not observable: " + obj);
    if (bobx === ObservableMapMarker)
        throw new Error("observableProp parameter is observableMap");
    if (b.isArray(bobx)) {
        // Does this pays off to cache and/or inline?
        return function (value) {
            if (value !== undefined) {
                obj[key] = value;
            }
            return obj[key];
        };
    }
    if (Object.getPrototypeOf(bobx) === undefined) {
        return bobx[key].prop();
    }
    bobx = asObservableClass(obj);
    var val = bobx[key];
    if (val === undefined) {
        obj[key]; // Has side effect to create ObservableValue
        val = bobx[key];
    }
    return val.prop();
}
exports.observableProp = observableProp;
var frameStart = b.now();
var outsideOfComputedPartialResults = false;
var alreadyInterrupted = false;
var firstInterruptibleCtx;
var timeBudget = 10;
function setTimeBudget(value) {
    timeBudget = value;
}
exports.setTimeBudget = setTimeBudget;
function getTimeBudget() {
    return timeBudget;
}
exports.getTimeBudget = getTimeBudget;
var haveTimeBudget = function () { return b.now() - frameStart < timeBudget; }; // Spend only first 10ms from each frame in computed methods.
function resetGotPartialResults() {
    var ctx = b.getCurrentCtx();
    if (ctx !== undefined && isIBobxComputed(ctx)) {
        throw new Error("resetGotPartialResults cannot be called from computed method");
    }
    outsideOfComputedPartialResults = false;
}
exports.resetGotPartialResults = resetGotPartialResults;
function setPartialResults() {
    var ctx = b.getCurrentCtx();
    if (ctx !== undefined) {
        if (isIBobxComputed(ctx)) {
            ctx.partialResults = true;
        }
        else {
            b.invalidate(ctx);
        }
    }
    outsideOfComputedPartialResults = true;
}
function gotPartialResults() {
    var ctx = b.getCurrentCtx();
    if (ctx !== undefined && isIBobxComputed(ctx)) {
        return ctx.partialResults;
    }
    return outsideOfComputedPartialResults;
}
exports.gotPartialResults = gotPartialResults;
function interrupted() {
    if (alreadyInterrupted)
        return true;
    var ctx = b.getCurrentCtx();
    if (firstInterruptibleCtx === undefined)
        firstInterruptibleCtx = ctx;
    if (gotPartialResults()) {
        return true;
    }
    if (!haveTimeBudget()) {
        if (ctx === firstInterruptibleCtx) {
            return false;
        }
        if (ctx !== undefined && !isIBobxComputed(ctx)) {
            b.invalidate(ctx);
        }
        alreadyInterrupted = true;
        firstInterruptibleCtx = undefined;
        return true;
    }
    return false;
}
exports.interrupted = interrupted;
function computedScope(computed, callBuryIfDead, continueCallback) {
    var alreadyInterruptedBackup = alreadyInterrupted;
    var firstInterruptibleCtxBackup = firstInterruptibleCtx;
    var haveTimeBudgetBackup = haveTimeBudget;
    var buryDeadSetBackup = buryDeadSet;
    if (callBuryIfDead) {
        buryDeadSet = new Set();
    }
    if (continueCallback != undefined) {
        haveTimeBudget = continueCallback;
        firstInterruptibleCtx = undefined;
        alreadyInterrupted = false;
    }
    computed.update();
    if (callBuryIfDead) {
        computed.buryIfDead();
        buryWholeDeadSet();
        buryDeadSet = buryDeadSetBackup;
    }
    alreadyInterrupted = alreadyInterruptedBackup;
    firstInterruptibleCtx = firstInterruptibleCtxBackup;
    haveTimeBudget = haveTimeBudgetBackup;
    if (isCaughtException(computed.value))
        throw computed.value.cause;
    return computed.partialResults;
}
exports.computedScope = computedScope;
function reactiveScope(scope, continueCallback) {
    var computed = new ComputedImpl(function () {
        computed.state = ComputedState.Scope;
        scope();
    }, undefined, equalsIncludingNaN);
    return computedScope(computed, true, continueCallback);
}
exports.reactiveScope = reactiveScope;
var TransformerComputedImpl = /** @class */ (function (_super) {
    __extends(TransformerComputedImpl, _super);
    function TransformerComputedImpl(fn, that, comparator, map, onFree) {
        var _this = _super.call(this, fn, that, comparator) || this;
        _this.transformerMap = map;
        _this.onFree = onFree;
        return _this;
    }
    TransformerComputedImpl.prototype.free = function () {
        var target = this.value;
        _super.prototype.free.call(this);
        this.state = ComputedState.PermanentlyDead;
        this.transformerMap.delete(this.that);
        if (this.onFree) {
            if (isCaughtException(target))
                target = undefined;
            this.onFree(target, this.that);
        }
    };
    return TransformerComputedImpl;
}(ComputedImpl));
function createTransformer(factory, onFree) {
    var factoryOnThis = function () {
        return factory(this);
    };
    var map = new Map();
    return function (source) {
        var computed = map.get(source);
        if (computed === undefined) {
            computed = new TransformerComputedImpl(factoryOnThis, source, equalsIncludingNaN, map, onFree);
            map.set(source, computed);
        }
        return computed.run();
    };
}
exports.createTransformer = createTransformer;
function debugRunWhenInvalidated(fnc) {
    if (!DEBUG)
        return;
    var ctx = b.getCurrentCtx();
    if (isIBobxComputed(ctx)) {
        ctx.onInvalidated =
            fnc ||
                (function () {
                    debugger;
                });
    }
    else {
        throw new Error("debugRunWhenInvalidated could be called only from computed");
    }
}
exports.debugRunWhenInvalidated = debugRunWhenInvalidated;
function useObservable(initValue) {
    var myHookId = b._allocHook();
    var hooks = b._getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        if (b.isFunction(initValue)) {
            initValue = initValue();
        }
        hook = new ObservableValue(initValue, deepEnhancer).prop();
        hooks[myHookId] = hook;
    }
    return hook;
}
exports.useObservable = useObservable;
function useComputed(fn, options) {
    var myHookId = b._allocHook();
    var hooks = b._getHooks();
    var hook = hooks[myHookId];
    if (hook === undefined) {
        if (options === undefined)
            options = defaultComputedOptions;
        var comp_1 = new ParametricComputedMap(fn, undefined, options);
        hook = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return comp_1.run(args);
        };
        b.addDisposable(b.getCurrentCtx(), comp_1);
        hooks[myHookId] = hook;
    }
    return hook;
}
exports.useComputed = useComputed;
var ReactionImpl = /** @class */ (function () {
    function ReactionImpl(expression, reaction, comparator) {
        this.atomId = allocId();
        this.expression = expression;
        this.reaction = reaction;
        this.value = undefined;
        this.state = ComputedState.First;
        this.comparator = comparator;
        this.using = undefined;
        this.partialResults = false;
    }
    ReactionImpl.prototype.markUsing = function (atomId, atom) {
        var using = this.using;
        if (using === undefined) {
            using = new Map();
            using.set(atomId, atom);
            this.using = using;
            return true;
        }
        if (using.has(atomId))
            return false;
        using.set(atomId, atom);
        return true;
    };
    ReactionImpl.prototype.invalidateBy = function (atomId) {
        var using = this.using;
        if (using === undefined)
            return;
        if (using.delete(atomId)) {
            var state = this.state;
            if (state === ComputedState.Updated || state === ComputedState.NeedDepsRecheck) {
                if (DEBUG) {
                    var i = this.onInvalidated;
                    if (i)
                        i(this);
                }
                this.state = ComputedState.NeedRecheck;
                this.schedule();
            }
            this.freeUsings();
        }
    };
    ReactionImpl.prototype.softInvalidate = function () {
        var state = this.state;
        if (state === ComputedState.Updated) {
            this.state = ComputedState.NeedDepsRecheck;
            this.schedule();
        }
    };
    ReactionImpl.prototype.schedule = function () {
        if (updateNextFrameList.length == 0)
            b.invalidate(bobxRootCtx);
        updateNextFrameList.push(this);
    };
    ReactionImpl.prototype.freeUsings = function () {
        var _this = this;
        var using = this.using;
        if (using !== undefined) {
            this.using = undefined;
            using.forEach(function (v) {
                if (isIBobxComputed(v)) {
                    v.unmarkUsedBy(_this.atomId);
                }
                else {
                    v.ctxs.delete(_this.atomId);
                }
            });
        }
    };
    ReactionImpl.prototype.free = function () {
        var _this = this;
        var using = this.using;
        if (using !== undefined) {
            this.using = undefined;
            using.forEach(function (v) {
                if (isIBobxComputed(v)) {
                    v.unmarkUsedBy(_this.atomId);
                    v.buryIfDead();
                }
                else {
                    v.ctxs.delete(_this.atomId);
                }
            });
        }
        this.value = undefined;
    };
    ReactionImpl.prototype.buryIfDead = function () {
        throw new Error("Reaction-buryIfDead");
    };
    ReactionImpl.prototype.dispose = function () {
        this.state = ComputedState.PermanentlyDead;
        this.free();
    };
    ReactionImpl.prototype.unmarkUsedBy = function (_atomId) {
        throw new Error("Reaction-unmarkUsedBy");
    };
    ReactionImpl.prototype.markUsage = function () {
        throw new Error("Reaction-markUsage");
    };
    ReactionImpl.prototype.invalidate = function () {
        throw new Error("Reaction-invalidate");
    };
    ReactionImpl.prototype.updateIfNeededWithoutResurrecting = function () {
        if (this.state === ComputedState.PermanentlyDead)
            return;
        this.updateIfNeeded();
    };
    ReactionImpl.prototype.updateIfNeeded = function () {
        var state = this.state;
        if (DEBUG && state === ComputedState.PermanentlyDead)
            throw new Error("Using dead reaction");
        if (state === ComputedState.NeedDepsRecheck) {
            var using = this.using;
            if (using !== undefined) {
                using.forEach(function (v) {
                    if (isIBobxComputed(v)) {
                        v.updateIfNeeded();
                    }
                });
            }
            if (this.state === ComputedState.NeedDepsRecheck) {
                this.state = ComputedState.Updated;
                return true;
            }
            this.update();
            return true;
        }
        if (state !== ComputedState.Updated) {
            this.update();
            return true;
        }
        return false;
    };
    ReactionImpl.prototype.call = function () {
        try {
            return this.expression(this);
        }
        catch (err) {
            return new CaughtException(err);
        }
    };
    ReactionImpl.prototype.update = function () {
        if (alreadyInterrupted && this.partialResults) {
            setPartialResults();
            return;
        }
        var backupCurrentCtx = b.getCurrentCtx();
        b.setCurrentCtx(this);
        this.partialResults = false;
        this.freeUsings();
        var wasChange = false;
        if (this.state === ComputedState.First) {
            this.state = ComputedState.Updated;
            this.value = this.call();
            wasChange = true;
        }
        else {
            this.state = ComputedState.Updated;
            var newResult = this.call();
            if (!this.comparator(this.value, newResult)) {
                this.value = newResult;
                wasChange = true;
            }
        }
        this.partialResults = alreadyInterrupted;
        b.setCurrentCtx(backupCurrentCtx);
        if (this.partialResults) {
            this.state = ComputedState.NeedRecheck;
            setPartialResults();
        }
        if (wasChange)
            this.runReaction();
    };
    ReactionImpl.prototype.runReaction = function () {
        var value = this.value;
        if (isCaughtException(value))
            throw value.cause;
        var reaction = this.reaction;
        if (reaction !== undefined) {
            reaction(value, this);
        }
    };
    return ReactionImpl;
}());
exports.ReactionImpl = ReactionImpl;
addHiddenFinalProp(ReactionImpl.prototype, "$bobx", ComputedMarker);
function reaction(expression, effect) {
    var reaction = new ReactionImpl(expression, effect, equalsIncludingNaN);
    reaction.schedule();
    return reaction;
}
exports.reaction = reaction;
function autorun(view) {
    var autorun = new ReactionImpl(view, undefined, equalsIncludingNaN);
    autorun.schedule();
    return autorun;
}
exports.autorun = autorun;
function when(predicate, effect) {
    return autorun(function (d) {
        if (predicate()) {
            d.dispose();
            effect();
        }
    });
}
exports.when = when;
function isPromise(p) {
    return p instanceof Promise;
}
exports.isPromise = isPromise;
function isPromiseLike(p) {
    if (isPromise(p))
        return true;
    var then = (p || false).then;
    return b.isFunction(then);
}
exports.isPromiseLike = isPromiseLike;
var AsyncComputedImpl = /** @class */ (function (_super) {
    __extends(AsyncComputedImpl, _super);
    function AsyncComputedImpl(fn, comparator) {
        var _this = _super.call(this, fn, undefined, comparator) || this;
        _this.iterator = undefined;
        _this.zombieTime = 100;
        return _this;
    }
    Object.defineProperty(AsyncComputedImpl.prototype, "busy", {
        get: function () {
            this.checkRecursion();
            this.markUsage();
            var state = this.state;
            return state === ComputedState.Updating || state === ComputedState.Waiting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncComputedImpl.prototype, "result", {
        get: function () {
            this.checkRecursion();
            this.markUsage();
            var value = this.value;
            if (isCaughtException(value))
                throw value.cause;
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    AsyncComputedImpl.prototype.call = function () {
        // this will just create iterator, it cannot throw
        return this.fn();
    };
    AsyncComputedImpl.prototype.free = function () {
        _super.prototype.free.call(this);
    };
    AsyncComputedImpl.prototype.promiseFulfilled = function (value) {
        var backupCurrentCtx = b.getCurrentCtx();
        b.setCurrentCtx(this);
        this.state = ComputedState.Updating;
        try {
            this.iteratorNext(this.iterator.next(value));
        }
        catch (err) {
            this.value = new CaughtException(err);
            this.state = ComputedState.Updated;
            this.invalidate();
        }
        b.setCurrentCtx(backupCurrentCtx);
    };
    AsyncComputedImpl.prototype.promiseFailed = function (err) {
        var backupCurrentCtx = b.getCurrentCtx();
        b.setCurrentCtx(this);
        this.state = ComputedState.Updating;
        try {
            this.iteratorNext(this.iterator.throw(err));
        }
        catch (err) {
            this.value = new CaughtException(err);
            this.state = ComputedState.Updated;
            this.invalidate();
        }
        b.setCurrentCtx(backupCurrentCtx);
    };
    AsyncComputedImpl.prototype.iteratorNext = function (newResult) {
        var _this = this;
        while (true) {
            var newValue = newResult.value;
            if (newResult.done !== true) {
                if (isPromiseLike(newValue)) {
                    this.state = ComputedState.Waiting;
                    newValue.then(function (v) { return _this.promiseFulfilled(v); }, function (err) { return _this.promiseFailed(err); });
                    return;
                }
            }
            if (!this.comparator(this.value, newValue)) {
                this.value = newValue;
                this.invalidate();
                if (newResult.done === true) {
                    this.state = ComputedState.Updated;
                    return;
                }
            }
            if (alreadyInterrupted) {
                this.partialResults = true;
            }
            if (newResult.done === true) {
                this.state = ComputedState.Updated;
                this.invalidate();
                return;
            }
            newResult = this.iterator.next();
        }
    };
    AsyncComputedImpl.prototype.update = function () {
        if (alreadyInterrupted && this.partialResults) {
            setPartialResults();
            return;
        }
        var backupCurrentCtx = b.getCurrentCtx();
        b.setCurrentCtx(this);
        this.partialResults = false;
        this.freeUsings();
        this.state = ComputedState.Updating;
        this.iterator = this.call();
        try {
            this.iteratorNext(this.iterator.next());
        }
        catch (err) {
            this.value = new CaughtException(err);
            this.state = ComputedState.Updated;
            this.invalidate();
        }
        b.setCurrentCtx(backupCurrentCtx);
    };
    AsyncComputedImpl.prototype.run = function () {
        if (this.state === ComputedState.Zombie) {
            this.state = ComputedState.Updated;
        }
        if (this.state !== ComputedState.Waiting) {
            this.checkRecursion();
            this.updateIfNeeded();
        }
        this.markUsage();
        return this;
    };
    return AsyncComputedImpl;
}(ComputedImpl));
function buildAsyncComputed(comparator) {
    return function (generator) {
        if (generator.length != 0) {
            throw new Error("Not implemented");
        }
        var res = new AsyncComputedImpl(generator, comparator);
        return function () { return res.run(); };
    };
}
exports.asyncComputed = buildAsyncComputed(equalsIncludingNaN);

});
R('web/node_modules/moment/moment',function(require, module, exports, global){
"use strict";
//! moment.js
;
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory();
}(this, (function () {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        }
        else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }
        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }
        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }
    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    }
    else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;
            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }
            return false;
        };
    }
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }
        return to;
    }
    var updateInProgress = false;
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }
    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        }
        else {
            return Math.floor(number);
        }
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }
        return value;
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !== 'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    }
                    else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            }
            else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                }
                else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                }
                else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }
    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }
    var keys;
    if (Object.keys) {
        keys = Object.keys;
    }
    else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {};
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            }
            else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }
        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf
    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var regexes = {};
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens = {};
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }
    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;
    // FORMATTING
    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            }
            else {
                return get(this, unit);
            }
        };
    }
    function get(mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        }
        else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }
    function mod(n, x) {
        return ((n % x) + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    }
    else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }
    // FORMATTING
    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = input;
        }
    });
    // LOCALES
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            }
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            }
            else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
            // No op
            return mom;
        }
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            }
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        }
        else {
            return get(this, 'Month');
        }
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            else {
                return this._monthsShortRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            else {
                return this._monthsRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        }
        else {
            date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
    }
    function createUTCDate(y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        }
        else {
            date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy, 
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        }
        else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        }
        else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        }
        else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        }
        else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6 // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }
        if (!isNaN(input)) {
            return parseInt(input, 10);
        }
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        }
        else {
            return day;
        }
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        }
        else {
            return this.day() || 7;
        }
    }
    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        else {
            return isLower ? 'am' : 'AM';
        }
    }
    // MOMENTS
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            }
            catch (e) { }
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }
            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !== 'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key + ' not found. Did you forget to load it?');
                }
            }
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            }
            else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                }
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    }
                    else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        }
        else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        }
        else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                }
                else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }
        if (!key) {
            return globalLocale;
        }
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow;
        var a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
            return;
        }
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        }
        else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            }
            else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            }
            else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        }
        else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        }
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];
    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                }
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        }
        else {
            config._isValid = false;
        }
    }
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        }
        else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        }
        else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        }
        else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        }
        else {
            config._isValid = false;
        }
    }
    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return;
        }
        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () { };
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () { };
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        }
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        }
        else {
            // this is not supposed to happen
            return hour;
        }
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) {
            return;
        }
        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }
        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        }
        else if (isDate(input)) {
            config._d = input;
        }
        else if (isArray(format)) {
            configFromStringAndArray(config);
        }
        else if (format) {
            configFromStringAndFormat(config);
        }
        else {
            configFromInput(config);
        }
        if (!isValid(config)) {
            config._d = null;
        }
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        }
        else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        }
        else if (typeof input === 'string') {
            configFromString(config);
        }
        else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        }
        else if (isObject(input)) {
            configFromObject(config);
        }
        else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        }
        else {
            hooks.createFromInputFallback(config);
        }
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        }
        else {
            return createInvalid();
        }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        }
        else {
            return createInvalid();
        }
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };
    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }
        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        }
        else {
            return Math.round(number);
        }
    }
    // FORMATTING
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }
    offset('Z', ':');
    offset('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);
        if (matches === null) {
            return null;
        }
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ?
            0 :
            parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        }
        else {
            return createLocal(input).local();
        }
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () { };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            }
            else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                }
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        }
        else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
        }
        else {
            return -this.utcOffset();
        }
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        }
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return (this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset());
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }
        var c = {};
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        }
        else {
            this._isDSTShifted = false;
        }
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, 
        // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        }
        else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            }
            else {
                duration.milliseconds = input;
            }
        }
        else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        }
        else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        }
        else if (duration == null) { // checks for null or undefined
            duration = {};
        }
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        }
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) {
            // No op
            return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }
    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                        diff < 2 ? 'nextDay' :
                            diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse';
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        }
        else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        }
        else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        }
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
            return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
            return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()), 
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        }
        else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            }
            else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        }
        else {
            return this.localeData().invalidDate();
        }
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        }
        else {
            return this.localeData().invalidDate();
        }
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;
        if (key === undefined) {
            return this._locale._abbr;
        }
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
            return this.localeData();
        }
        else {
            return this.locale(key);
        }
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        }
        else {
            return new Date(y, m, d).valueOf();
        }
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        }
        else {
            return Date.UTC(y, m, d);
        }
    }
    function startOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }
        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }
        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    // FORMATTING
    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        }
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', ['DD', 2], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
            (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
            locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }
    // FORMATTING
    addFormatToken('m', ['mm', 2], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', ['ss', 2], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS
    var getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || '';
        if (index != null) {
            return get$1(format, index, field, 'month');
        }
        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0;
        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }
        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10, output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        }
        else {
            return Math.ceil(number);
        }
    }
    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month': return months;
                case 'quarter': return months / 3;
                case 'year': return months / 12;
            }
        }
        else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week': return days / 7 + milliseconds / 6048e5;
                case 'day': return days + milliseconds / 864e5;
                case 'hour': return days * 24 + milliseconds / 36e5;
                case 'minute': return days * 1440 + milliseconds / 6e4;
                case 'second': return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    }
    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asQuarters = makeAs('Q');
    var asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round;
    var thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11 // months to year
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));
        var a = seconds <= thresholds.ss && ['s', seconds] ||
            seconds < thresholds.s && ['ss', seconds] ||
            minutes <= 1 && ['m'] ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours <= 1 && ['h'] ||
            hours < thresholds.h && ['hh', hours] ||
            days <= 1 && ['d'] ||
            days < thresholds.d && ['dd', days] ||
            months <= 1 && ['M'] ||
            months < thresholds.M && ['MM', months] ||
            years <= 1 && ['y'] || ['yy', years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof (roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }
    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();
        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }
        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // Side effect imports
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });
    // Side effect imports
    hooks.version = '2.24.0';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM' // <input type="month" />
    };
    return hooks;
})));

});
R('web/node_modules/pwa-install-handler/dist/index',function(require, module, exports, global){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PwaInstallHandler = /** @class */ (function () {
    function PwaInstallHandler() {
        var _this = this;
        this.event = null;
        this.callbacks = [];
        this.install = function () {
            return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.event)
                                return [3 /*break*/, 2];
                            this.event.prompt();
                            return [4 /*yield*/, this.event.userChoice.then(function (_a) {
                                    var outcome = _a.outcome;
                                    _this.updateEvent(null);
                                    return outcome === 'accepted' || true;
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: throw new Error('Not allowed to prompt.');
                    }
                });
            });
        };
        window.addEventListener('beforeinstallprompt', function (event) {
            event.preventDefault();
            _this.updateEvent(event);
        });
    }
    PwaInstallHandler.prototype.getEvent = function () {
        return this.event;
    };
    PwaInstallHandler.prototype.canInstall = function () {
        return Boolean(this.event);
    };
    PwaInstallHandler.prototype.updateEvent = function (event) {
        this.event = event;
        this.callbacks.forEach(function (callback) { return callback(Boolean(event)); });
    };
    PwaInstallHandler.prototype.addListener = function (callback) {
        callback(Boolean(this.event));
        this.callbacks.push(callback);
    };
    PwaInstallHandler.prototype.removeListener = function (callback) {
        this.callbacks = this.callbacks.filter(function (cb) { return callback !== cb; });
    };
    return PwaInstallHandler;
}());
var pwaInstallHandler = new PwaInstallHandler();
exports.default = pwaInstallHandler;

});
R('web/src/data/data',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobx_1 = require("bobx");
var Data = /** @class */ (function () {
    function Data() {
        this.items = [];
    }
    Data.prototype.init = function () {
        return __awaiter(this, void 0, Promise, function () {
            var jsonContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(b.asset("web/src/data/food.json"))];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        jsonContent = _a.sent();
                        this.items = JSON.parse(jsonContent).items;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        bobx_1.observable
    ], Data.prototype, "items", void 0);
    return Data;
}());
exports.data = new Data();
exports.data.init();

});
R('web/src/main',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var navigation_1 = require("./navigation/navigation");
var bobrilstrap_1 = require("bobrilstrap");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (b.createElement(b.Fragment, null,
            b.createElement(navigation_1.Navigation, null),
            b.createElement(bobrilstrap_1.Main, null,
                b.createElement(bobrilstrap_1.Container, { fluid: true, style: navigationPadding }, this.data.activeRouteHandler()))));
    };
    Main.id = "main-page";
    return Main;
}(b.Component));
exports.Main = Main;
var navigationPadding = b.styleDef({ paddingTop: 65 },undefined,"navigationPadding");

});
R('web/src/navigation/installButton',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var pwa_install_handler_1 = require("pwa-install-handler");
var bobrilstrap_1 = require("bobrilstrap");
var bobx_1 = require("bobx");
var bobril_g11n_1 = require("bobril-g11n");
var InstallButton = /** @class */ (function (_super) {
    __extends(InstallButton, _super);
    function InstallButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canInstall = false;
        return _this;
    }
    InstallButton.prototype.init = function () {
        var _this = this;
        pwa_install_handler_1.default.addListener(function (canInstall) { return (_this.canInstall = canInstall); });
    };
    InstallButton.prototype.render = function () {
        return this.canInstall ? (b.createElement(bobrilstrap_1.NavbarNavItem, null,
            b.createElement(bobrilstrap_1.A, { id: "installButton", href: "javascript:void(0)" }, bobril_g11n_1.t(0)))) : (b.createElement(b.Fragment, null));
    };
    InstallButton.prototype.onClick = function () {
        pwa_install_handler_1.default.install().then(function (isInstalled) {
            console.log(isInstalled
                ? "User accepted installation prompt"
                : "User rejected installation prompt");
        });
        this.data.onClick();
        return true;
    };
    InstallButton.id = "install-button";
    __decorate([
        bobx_1.observable
    ], InstallButton.prototype, "canInstall", void 0);
    return InstallButton;
}(b.Component));
exports.InstallButton = InstallButton;

});
R('web/src/navigation/navigation',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilstrap_1 = require("bobrilstrap");
var installButton_1 = require("./installButton");
var bobx_1 = require("bobx");
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._collapsed = true;
        return _this;
    }
    Navigation.prototype.toggleMenu = function () {
        this._collapsed = !this._collapsed;
    };
    Navigation.prototype.closeMenu = function () {
        this._collapsed = true;
    };
    Navigation.prototype.render = function () {
        var _this = this;
        return (b.createElement(bobrilstrap_1.Container, null,
            b.createElement(bobrilstrap_1.Navbar, { fixed: bobrilstrap_1.NavbarFixed.Top },
                b.createElement(bobrilstrap_1.Container, { fluid: true },
                    b.createElement(bobrilstrap_1.NavbarHeader, null,
                        b.createElement(bobrilstrap_1.NavbarBrand, null,
                            b.createElement("span", null,
                                b.createElement(bobrilstrap_1.Image, { src: "icons/icon-128x128.png", width: 25, height: 25 })),
                            b.createElement("span", { style: navbarBrandTextStyle }, "alkalic")),
                        b.createElement(bobrilstrap_1.Button, { variant: bobrilstrap_1.ButtonVariant.NavbarToggle, onClick: function () { return _this.toggleMenu(); } },
                            b.createElement("span", { style: bobrilstrap_1.navStyles.iconBar }),
                            b.createElement("span", { style: bobrilstrap_1.navStyles.iconBar }),
                            b.createElement("span", { style: bobrilstrap_1.navStyles.iconBar }))),
                    b.createElement(bobrilstrap_1.Collapse, { collapsed: this._collapsed },
                        b.createElement(bobrilstrap_1.NavbarCollapse, null,
                            b.createElement(bobrilstrap_1.NavbarNav, { alignment: bobrilstrap_1.NavbarAlignment.Right },
                                b.createElement(installButton_1.InstallButton, { onClick: function () { return _this.closeMenu(); } }))))))));
    };
    Navigation.id = "navigation";
    __decorate([
        bobx_1.observable
    ], Navigation.prototype, "_collapsed", void 0);
    return Navigation;
}(b.Component));
exports.Navigation = Navigation;
var navbarBrandTextStyle = b.styleDef({ marginLeft: 5 },undefined,"navbarBrandTextStyle");

});
R('web/src/routes',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var main_1 = require("./main");
var search_1 = require("./search/search");
exports.mainRoute = {
    handler: function (data) { return b.createElement(main_1.Main, __assign({}, data)); }
};
exports.searchRoute = {
    url: "search",
    name: "search",
    handler: function (data) { return b.createElement(search_1.Search, __assign({}, data)); }
};

});
R('web/src/search/resultRow',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobrilstrap_1 = require("bobrilstrap");
var ResultRow = /** @class */ (function (_super) {
    __extends(ResultRow, _super);
    function ResultRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultRow.prototype.render = function () {
        return (b.createElement(bobrilstrap_1.Tr, { style: this.rowColorStyle(this.data.pH) },
            b.createElement(bobrilstrap_1.Td, null, this.data.name),
            b.createElement(bobrilstrap_1.Td, null, this.data.pH)));
    };
    ResultRow.prototype.rowColorStyle = function (ph) {
        var backgroundColor = "";
        var color = "#ffffff";
        if (ph >= 9) {
            backgroundColor = "#ac39ac";
        }
        else if (ph >= 8.5) {
            backgroundColor = "#d279d2";
        }
        else if (ph >= 8.25) {
            backgroundColor = "#e6b3e6";
        }
        else if (ph >= 8) {
            backgroundColor = "#80bfff";
        }
        else if (ph >= 7.75) {
            backgroundColor = "#77b300";
        }
        else if (ph >= 7.5) {
            backgroundColor = "#5cd65c";
        }
        else if (ph >= 7.25) {
            backgroundColor = "#00e600";
        }
        else if (ph >= 7) {
            backgroundColor = "#ffff33";
        }
        else if (ph >= 6.5) {
            backgroundColor = "#ffcc00";
        }
        else if (ph >= 6.25) {
            backgroundColor = "#ff8000";
        }
        else if (ph >= 6) {
            backgroundColor = "#ff6600";
        }
        else if (ph >= 5.5) {
            backgroundColor = "#ff1a1a";
        }
        else if (ph >= 5) {
            backgroundColor = "#cc0000";
            color = "#ffffff";
        }
        else if (ph >= 4.5) {
            backgroundColor = "#990000";
            color = "#ffffff";
        }
        else {
            backgroundColor = "#660000";
            color = "#ffffff";
        }
        return { backgroundColor: backgroundColor, color: color };
    };
    ResultRow.id = "search-result-row";
    return ResultRow;
}(b.Component));
exports.ResultRow = ResultRow;

});
R('web/src/search/search',function(require, module, exports, global){
"use strict";
var b = require("bobril");
var bobril_g11n_1 = require("bobril-g11n");
var bobrilstrap_1 = require("bobrilstrap");
var bobx_1 = require("bobx");
var data_1 = require("../data/data");
var resultRow_1 = require("./resultRow");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._search = "";
        return _this;
    }
    Search.prototype.render = function () {
        var _this = this;
        var normalizedSearch = this.normalize(this._search);
        return (b.createElement(b.Fragment, null,
            b.createElement(bobrilstrap_1.Row, null,
                b.createElement(bobrilstrap_1.Col, { size: bobrilstrap_1.Size.Md, span: 12 },
                    b.createElement(bobrilstrap_1.Form, null,
                        b.createElement(bobrilstrap_1.InputGroup, null,
                            b.createElement(bobrilstrap_1.InputGroupAddon, null, bobril_g11n_1.t(1)),
                            b.createElement(bobrilstrap_1.InputText, { value: this._search, onChange: function (value) { return (_this._search = value); } }))))),
            b.createElement(bobrilstrap_1.Row, null,
                b.createElement(bobrilstrap_1.Col, { size: bobrilstrap_1.Size.Md, span: 12 }, normalizedSearch.length ? (b.createElement(bobrilstrap_1.Table, null,
                    b.createElement(bobrilstrap_1.THead, null,
                        b.createElement(bobrilstrap_1.Tr, null,
                            b.createElement(bobrilstrap_1.Th, null, bobril_g11n_1.t(1)),
                            b.createElement(bobrilstrap_1.Th, null, bobril_g11n_1.t(2))),
                        data_1.data.items
                            .filter(function (item) {
                            return _this.normalize(item.name).indexOf(normalizedSearch) >= 0;
                        })
                            .map(function (item) { return (b.createElement(resultRow_1.ResultRow, __assign({}, item))); })))) : (b.createElement(b.Fragment, null))))));
    };
    Search.prototype.normalize = function (str) {
        return str
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };
    Search.id = "search-page";
    __decorate([
        bobx_1.observable
    ], Search.prototype, "_search", void 0);
    return Search;
}(b.Component));
exports.Search = Search;

});
//# sourceMappingURL=bundle.js.map
