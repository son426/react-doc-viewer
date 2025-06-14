import { c as V, a as br, d as on, p as U, B as ce, g as an } from "./index-DTWsYuVF.js";
import { u as fn } from "./url-B4fTAusg.js";
function un(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const c = Object.getOwnPropertyDescriptor(n, i);
          c && Object.defineProperty(e, i, c.get ? c : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Tt = {}, mr = { exports: {} }, Ot = {};
(function(e) {
  e.fetch = i(V.fetch) && i(V.ReadableStream), e.writableStream = i(V.WritableStream), e.abortController = i(V.AbortController);
  var t;
  function r() {
    if (t !== void 0)
      return t;
    if (V.XMLHttpRequest) {
      t = new V.XMLHttpRequest();
      try {
        t.open("GET", V.XDomainRequest ? "/" : "https://example.com");
      } catch {
        t = null;
      }
    } else
      t = null;
    return t;
  }
  function n(c) {
    var l = r();
    if (!l)
      return !1;
    try {
      return l.responseType = c, l.responseType === c;
    } catch {
    }
    return !1;
  }
  e.arraybuffer = e.fetch || n("arraybuffer"), e.msstream = !e.fetch && n("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && n("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || (r() ? i(r().overrideMimeType) : !1);
  function i(c) {
    return typeof c == "function";
  }
  t = null;
})(Ot);
var vt = { exports: {} };
typeof Object.create == "function" ? vt.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : vt.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
  }
};
var le = vt.exports, xe = {}, bt = { exports: {} }, Pt = { exports: {} }, Se = typeof Reflect == "object" ? Reflect : null, Wt = Se && typeof Se.apply == "function" ? Se.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, Ne;
Se && typeof Se.ownKeys == "function" ? Ne = Se.ownKeys : Object.getOwnPropertySymbols ? Ne = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Ne = function(t) {
  return Object.getOwnPropertyNames(t);
};
function sn(e) {
  console && console.warn && console.warn(e);
}
var _r = Number.isNaN || function(t) {
  return t !== t;
};
function H() {
  H.init.call(this);
}
Pt.exports = H;
Pt.exports.once = pn;
H.EventEmitter = H;
H.prototype._events = void 0;
H.prototype._eventsCount = 0;
H.prototype._maxListeners = void 0;
var qt = 10;
function He(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(H, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return qt;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || _r(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    qt = e;
  }
});
H.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
H.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || _r(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function wr(e) {
  return e._maxListeners === void 0 ? H.defaultMaxListeners : e._maxListeners;
}
H.prototype.getMaxListeners = function() {
  return wr(this);
};
H.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = t === "error", c = this._events;
  if (c !== void 0)
    i = i && c.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var l;
    if (r.length > 0 && (l = r[0]), l instanceof Error)
      throw l;
    var h = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw h.context = l, h;
  }
  var p = c[t];
  if (p === void 0)
    return !1;
  if (typeof p == "function")
    Wt(p, this, r);
  else
    for (var A = p.length, L = Tr(p, A), n = 0; n < A; ++n)
      Wt(L[n], this, r);
  return !0;
};
function Sr(e, t, r, n) {
  var i, c, l;
  if (He(r), c = e._events, c === void 0 ? (c = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (c.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), c = e._events), l = c[t]), l === void 0)
    l = c[t] = r, ++e._eventsCount;
  else if (typeof l == "function" ? l = c[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), i = wr(e), i > 0 && l.length > i && !l.warned) {
    l.warned = !0;
    var h = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    h.name = "MaxListenersExceededWarning", h.emitter = e, h.type = t, h.count = l.length, sn(h);
  }
  return e;
}
H.prototype.addListener = function(t, r) {
  return Sr(this, t, r, !1);
};
H.prototype.on = H.prototype.addListener;
H.prototype.prependListener = function(t, r) {
  return Sr(this, t, r, !0);
};
function ln() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Er(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, i = ln.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
H.prototype.once = function(t, r) {
  return He(r), this.on(t, Er(this, t, r)), this;
};
H.prototype.prependOnceListener = function(t, r) {
  return He(r), this.prependListener(t, Er(this, t, r)), this;
};
H.prototype.removeListener = function(t, r) {
  var n, i, c, l, h;
  if (He(r), i = this._events, i === void 0)
    return this;
  if (n = i[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (c = -1, l = n.length - 1; l >= 0; l--)
      if (n[l] === r || n[l].listener === r) {
        h = n[l].listener, c = l;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? n.shift() : cn(n, c), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, h || r);
  }
  return this;
};
H.prototype.off = H.prototype.removeListener;
H.prototype.removeAllListeners = function(t) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var c = Object.keys(n), l;
    for (i = 0; i < c.length; ++i)
      l = c[i], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(t, r[i]);
  return this;
};
function Ar(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? dn(i) : Tr(i, i.length);
}
H.prototype.listeners = function(t) {
  return Ar(this, t, !0);
};
H.prototype.rawListeners = function(t) {
  return Ar(this, t, !1);
};
H.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Rr.call(e, t);
};
H.prototype.listenerCount = Rr;
function Rr(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
H.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ne(this._events) : [];
};
function Tr(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function cn(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function dn(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function pn(e, t) {
  return new Promise(function(r, n) {
    function i(l) {
      e.removeListener(t, c), n(l);
    }
    function c() {
      typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
    }
    Or(e, t, c, { once: !0 }), t !== "error" && hn(e, i, { once: !0 });
  });
}
function hn(e, t, r) {
  typeof e.on == "function" && Or(e, "error", t, r);
}
function Or(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(c) {
      n.once && e.removeEventListener(t, i), r(c);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Pr = Pt.exports, Mr = Pr.EventEmitter;
const Ge = /* @__PURE__ */ br(on);
var Mt = {}, jr = {}, Lr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var c = Object.getOwnPropertySymbols(t);
  if (c.length !== 1 || c[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = Object.getOwnPropertyDescriptor(t, r);
    if (l.value !== i || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, yn = Lr, jt = function() {
  return yn() && !!Symbol.toStringTag;
}, gn = Error, vn = EvalError, bn = RangeError, mn = ReferenceError, Cr = SyntaxError, Ve = TypeError, _n = URIError, xt = typeof Symbol < "u" && Symbol, wn = Lr, Sn = function() {
  return typeof xt != "function" || typeof Symbol != "function" || typeof xt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : wn();
}, Qe = {
  __proto__: null,
  foo: {}
}, En = Object, An = function() {
  return { __proto__: Qe }.foo === Qe.foo && !(Qe instanceof En);
}, Rn = "Function.prototype.bind called on incompatible ", Tn = Object.prototype.toString, On = Math.max, Pn = "[object Function]", Ht = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var c = 0; c < r.length; c += 1)
    n[c + t.length] = r[c];
  return n;
}, Mn = function(t, r) {
  for (var n = [], i = r, c = 0; i < t.length; i += 1, c += 1)
    n[c] = t[i];
  return n;
}, jn = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, Ln = function(t) {
  var r = this;
  if (typeof r != "function" || Tn.apply(r) !== Pn)
    throw new TypeError(Rn + r);
  for (var n = Mn(arguments, 1), i, c = function() {
    if (this instanceof i) {
      var L = r.apply(
        this,
        Ht(n, arguments)
      );
      return Object(L) === L ? L : this;
    }
    return r.apply(
      t,
      Ht(n, arguments)
    );
  }, l = On(0, r.length - n.length), h = [], p = 0; p < l; p++)
    h[p] = "$" + p;
  if (i = Function("binder", "return function (" + jn(h, ",") + "){ return binder.apply(this,arguments); }")(c), r.prototype) {
    var A = function() {
    };
    A.prototype = r.prototype, i.prototype = new A(), A.prototype = null;
  }
  return i;
}, Cn = Ln, Lt = Function.prototype.bind || Cn, Nn = Function.prototype.call, In = Object.prototype.hasOwnProperty, Dn = Lt, Bn = Dn.call(Nn, In), $, Fn = gn, Un = vn, kn = bn, $n = mn, Ae = Cr, Ee = Ve, Wn = _n, Nr = Function, et = function(e) {
  try {
    return Nr('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, pe = Object.getOwnPropertyDescriptor;
if (pe)
  try {
    pe({}, "");
  } catch {
    pe = null;
  }
var tt = function() {
  throw new Ee();
}, qn = pe ? function() {
  try {
    return arguments.callee, tt;
  } catch {
    try {
      return pe(arguments, "callee").get;
    } catch {
      return tt;
    }
  }
}() : tt, be = Sn(), xn = An(), z = Object.getPrototypeOf || (xn ? function(e) {
  return e.__proto__;
} : null), _e = {}, Hn = typeof Uint8Array > "u" || !z ? $ : z(Uint8Array), he = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? $ : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? $ : ArrayBuffer,
  "%ArrayIteratorPrototype%": be && z ? z([][Symbol.iterator]()) : $,
  "%AsyncFromSyncIteratorPrototype%": $,
  "%AsyncFunction%": _e,
  "%AsyncGenerator%": _e,
  "%AsyncGeneratorFunction%": _e,
  "%AsyncIteratorPrototype%": _e,
  "%Atomics%": typeof Atomics > "u" ? $ : Atomics,
  "%BigInt%": typeof BigInt > "u" ? $ : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? $ : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? $ : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? $ : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Fn,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Un,
  "%Float32Array%": typeof Float32Array > "u" ? $ : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? $ : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? $ : FinalizationRegistry,
  "%Function%": Nr,
  "%GeneratorFunction%": _e,
  "%Int8Array%": typeof Int8Array > "u" ? $ : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? $ : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? $ : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": be && z ? z(z([][Symbol.iterator]())) : $,
  "%JSON%": typeof JSON == "object" ? JSON : $,
  "%Map%": typeof Map > "u" ? $ : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !be || !z ? $ : z((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? $ : Promise,
  "%Proxy%": typeof Proxy > "u" ? $ : Proxy,
  "%RangeError%": kn,
  "%ReferenceError%": $n,
  "%Reflect%": typeof Reflect > "u" ? $ : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? $ : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !be || !z ? $ : z((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? $ : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": be && z ? z(""[Symbol.iterator]()) : $,
  "%Symbol%": be ? Symbol : $,
  "%SyntaxError%": Ae,
  "%ThrowTypeError%": qn,
  "%TypedArray%": Hn,
  "%TypeError%": Ee,
  "%Uint8Array%": typeof Uint8Array > "u" ? $ : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? $ : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? $ : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? $ : Uint32Array,
  "%URIError%": Wn,
  "%WeakMap%": typeof WeakMap > "u" ? $ : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? $ : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? $ : WeakSet
};
if (z)
  try {
    null.error;
  } catch (e) {
    var Gn = z(z(e));
    he["%Error.prototype%"] = Gn;
  }
var Vn = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = et("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = et("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = et("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && z && (r = z(i.prototype));
  }
  return he[t] = r, r;
}, Gt = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Pe = Lt, ke = Bn, zn = Pe.call(Function.call, Array.prototype.concat), Kn = Pe.call(Function.apply, Array.prototype.splice), Vt = Pe.call(Function.call, String.prototype.replace), $e = Pe.call(Function.call, String.prototype.slice), Yn = Pe.call(Function.call, RegExp.prototype.exec), Jn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Xn = /\\(\\)?/g, Zn = function(t) {
  var r = $e(t, 0, 1), n = $e(t, -1);
  if (r === "%" && n !== "%")
    throw new Ae("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ae("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Vt(t, Jn, function(c, l, h, p) {
    i[i.length] = h ? Vt(p, Xn, "$1") : l || c;
  }), i;
}, Qn = function(t, r) {
  var n = t, i;
  if (ke(Gt, n) && (i = Gt[n], n = "%" + i[0] + "%"), ke(he, n)) {
    var c = he[n];
    if (c === _e && (c = Vn(n)), typeof c > "u" && !r)
      throw new Ee("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: c
    };
  }
  throw new Ae("intrinsic " + t + " does not exist!");
}, Me = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Ee("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Ee('"allowMissing" argument must be a boolean');
  if (Yn(/^%?[^%]*%?$/, t) === null)
    throw new Ae("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Zn(t), i = n.length > 0 ? n[0] : "", c = Qn("%" + i + "%", r), l = c.name, h = c.value, p = !1, A = c.alias;
  A && (i = A[0], Kn(n, zn([0, 1], A)));
  for (var L = 1, E = !0; L < n.length; L += 1) {
    var N = n[L], W = $e(N, 0, 1), O = $e(N, -1);
    if ((W === '"' || W === "'" || W === "`" || O === '"' || O === "'" || O === "`") && W !== O)
      throw new Ae("property names with quotes must have matching quotes");
    if ((N === "constructor" || !E) && (p = !0), i += "." + N, l = "%" + i + "%", ke(he, l))
      h = he[l];
    else if (h != null) {
      if (!(N in h)) {
        if (!r)
          throw new Ee("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (pe && L + 1 >= n.length) {
        var C = pe(h, N);
        E = !!C, E && "get" in C && !("originalValue" in C.get) ? h = C.get : h = h[N];
      } else
        E = ke(h, N), h = h[N];
      E && !p && (he[l] = h);
    }
  }
  return h;
}, Ir = { exports: {} }, rt, zt;
function Ct() {
  if (zt)
    return rt;
  zt = 1;
  var e = Me, t = e("%Object.defineProperty%", !0) || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return rt = t, rt;
}
var ei = Me, Ie = ei("%Object.getOwnPropertyDescriptor%", !0);
if (Ie)
  try {
    Ie([], "length");
  } catch {
    Ie = null;
  }
var Nt = Ie, Kt = Ct(), ti = Cr, me = Ve, Yt = Nt, ri = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new me("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new me("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new me("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new me("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new me("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new me("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, h = arguments.length > 6 ? arguments[6] : !1, p = !!Yt && Yt(t, r);
  if (Kt)
    Kt(t, r, {
      configurable: l === null && p ? p.configurable : !l,
      enumerable: i === null && p ? p.enumerable : !i,
      value: n,
      writable: c === null && p ? p.writable : !c
    });
  else if (h || !i && !c && !l)
    t[r] = n;
  else
    throw new ti("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, mt = Ct(), Dr = function() {
  return !!mt;
};
Dr.hasArrayLengthDefineBug = function() {
  if (!mt)
    return null;
  try {
    return mt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ni = Dr, ii = Me, Jt = ri, oi = ni(), Xt = Nt, Zt = Ve, ai = ii("%Math.floor%"), fi = function(t, r) {
  if (typeof t != "function")
    throw new Zt("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || ai(r) !== r)
    throw new Zt("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, c = !0;
  if ("length" in t && Xt) {
    var l = Xt(t, "length");
    l && !l.configurable && (i = !1), l && !l.writable && (c = !1);
  }
  return (i || c || !n) && (oi ? Jt(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : Jt(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Lt, r = Me, n = fi, i = Ve, c = r("%Function.prototype.apply%"), l = r("%Function.prototype.call%"), h = r("%Reflect.apply%", !0) || t.call(l, c), p = Ct(), A = r("%Math.max%");
  e.exports = function(N) {
    if (typeof N != "function")
      throw new i("a function is required");
    var W = h(t, l, arguments);
    return n(
      W,
      1 + A(0, N.length - (arguments.length - 1)),
      !0
    );
  };
  var L = function() {
    return h(t, c, arguments);
  };
  p ? p(e.exports, "apply", { value: L }) : e.exports.apply = L;
})(Ir);
var Br = Ir.exports, Fr = Me, Ur = Br, ui = Ur(Fr("String.prototype.indexOf")), kr = function(t, r) {
  var n = Fr(t, !!r);
  return typeof n == "function" && ui(t, ".prototype.") > -1 ? Ur(n) : n;
}, si = jt(), li = kr, _t = li("Object.prototype.toString"), ze = function(t) {
  return si && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : _t(t) === "[object Arguments]";
}, $r = function(t) {
  return ze(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && _t(t) !== "[object Array]" && _t(t.callee) === "[object Function]";
}, ci = function() {
  return ze(arguments);
}();
ze.isLegacyArguments = $r;
var di = ci ? ze : $r, pi = Object.prototype.toString, hi = Function.prototype.toString, yi = /^\s*(?:function)?\*/, Wr = jt(), nt = Object.getPrototypeOf, gi = function() {
  if (!Wr)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, it, vi = function(t) {
  if (typeof t != "function")
    return !1;
  if (yi.test(hi.call(t)))
    return !0;
  if (!Wr) {
    var r = pi.call(t);
    return r === "[object GeneratorFunction]";
  }
  if (!nt)
    return !1;
  if (typeof it > "u") {
    var n = gi();
    it = n ? nt(n) : !1;
  }
  return nt(t) === it;
}, qr = Function.prototype.toString, we = typeof Reflect == "object" && Reflect !== null && Reflect.apply, wt, De;
if (typeof we == "function" && typeof Object.defineProperty == "function")
  try {
    wt = Object.defineProperty({}, "length", {
      get: function() {
        throw De;
      }
    }), De = {}, we(function() {
      throw 42;
    }, null, wt);
  } catch (e) {
    e !== De && (we = null);
  }
else
  we = null;
var bi = /^\s*class\b/, St = function(t) {
  try {
    var r = qr.call(t);
    return bi.test(r);
  } catch {
    return !1;
  }
}, ot = function(t) {
  try {
    return St(t) ? !1 : (qr.call(t), !0);
  } catch {
    return !1;
  }
}, Be = Object.prototype.toString, mi = "[object Object]", _i = "[object Function]", wi = "[object GeneratorFunction]", Si = "[object HTMLAllCollection]", Ei = "[object HTML document.all class]", Ai = "[object HTMLCollection]", Ri = typeof Symbol == "function" && !!Symbol.toStringTag, Ti = !(0 in [,]), Et = function() {
  return !1;
};
if (typeof document == "object") {
  var Oi = document.all;
  Be.call(Oi) === Be.call(document.all) && (Et = function(t) {
    if ((Ti || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Be.call(t);
        return (r === Si || r === Ei || r === Ai || r === mi) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var Pi = we ? function(t) {
  if (Et(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    we(t, null, wt);
  } catch (r) {
    if (r !== De)
      return !1;
  }
  return !St(t) && ot(t);
} : function(t) {
  if (Et(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (Ri)
    return ot(t);
  if (St(t))
    return !1;
  var r = Be.call(t);
  return r !== _i && r !== wi && !/^\[object HTML/.test(r) ? !1 : ot(t);
}, Mi = Pi, ji = Object.prototype.toString, xr = Object.prototype.hasOwnProperty, Li = function(t, r, n) {
  for (var i = 0, c = t.length; i < c; i++)
    xr.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, Ci = function(t, r, n) {
  for (var i = 0, c = t.length; i < c; i++)
    n == null ? r(t.charAt(i), i, t) : r.call(n, t.charAt(i), i, t);
}, Ni = function(t, r, n) {
  for (var i in t)
    xr.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, Ii = function(t, r, n) {
  if (!Mi(r))
    throw new TypeError("iterator must be a function");
  var i;
  arguments.length >= 3 && (i = n), ji.call(t) === "[object Array]" ? Li(t, r, i) : typeof t == "string" ? Ci(t, r, i) : Ni(t, r, i);
}, Di = Ii, Bi = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], at = Bi, Fi = typeof globalThis > "u" ? V : globalThis, Ui = function() {
  for (var t = [], r = 0; r < at.length; r++)
    typeof Fi[at[r]] == "function" && (t[t.length] = at[r]);
  return t;
}, We = Di, ki = Ui, Qt = Br, It = kr, Fe = Nt, $i = It("Object.prototype.toString"), Hr = jt(), er = typeof globalThis > "u" ? V : globalThis, At = ki(), Dt = It("String.prototype.slice"), ft = Object.getPrototypeOf, Wi = It("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, qe = { __proto__: null };
Hr && Fe && ft ? We(At, function(e) {
  var t = new er[e]();
  if (Symbol.toStringTag in t) {
    var r = ft(t), n = Fe(r, Symbol.toStringTag);
    if (!n) {
      var i = ft(r);
      n = Fe(i, Symbol.toStringTag);
    }
    qe["$" + e] = Qt(n.get);
  }
}) : We(At, function(e) {
  var t = new er[e](), r = t.slice || t.set;
  r && (qe["$" + e] = Qt(r));
});
var qi = function(t) {
  var r = !1;
  return We(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    qe,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, i) {
      if (!r)
        try {
          "$" + n(t) === i && (r = Dt(i, 1));
        } catch {
        }
    }
  ), r;
}, xi = function(t) {
  var r = !1;
  return We(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    qe,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, i) {
      if (!r)
        try {
          n(t), r = Dt(i, 1);
        } catch {
        }
    }
  ), r;
}, Gr = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!Hr) {
    var r = Dt($i(t), 8, -1);
    return Wi(At, r) > -1 ? r : r !== "Object" ? !1 : xi(t);
  }
  return Fe ? qi(t) : null;
}, Hi = Gr, Gi = function(t) {
  return !!Hi(t);
};
(function(e) {
  var t = di, r = vi, n = Gr, i = Gi;
  function c(v) {
    return v.call.bind(v);
  }
  var l = typeof BigInt < "u", h = typeof Symbol < "u", p = c(Object.prototype.toString), A = c(Number.prototype.valueOf), L = c(String.prototype.valueOf), E = c(Boolean.prototype.valueOf);
  if (l)
    var N = c(BigInt.prototype.valueOf);
  if (h)
    var W = c(Symbol.prototype.valueOf);
  function O(v, je) {
    if (typeof v != "object")
      return !1;
    try {
      return je(v), !0;
    } catch {
      return !1;
    }
  }
  e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = i;
  function C(v) {
    return typeof Promise < "u" && v instanceof Promise || v !== null && typeof v == "object" && typeof v.then == "function" && typeof v.catch == "function";
  }
  e.isPromise = C;
  function M(v) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(v) : i(v) || g(v);
  }
  e.isArrayBufferView = M;
  function s(v) {
    return n(v) === "Uint8Array";
  }
  e.isUint8Array = s;
  function m(v) {
    return n(v) === "Uint8ClampedArray";
  }
  e.isUint8ClampedArray = m;
  function S(v) {
    return n(v) === "Uint16Array";
  }
  e.isUint16Array = S;
  function R(v) {
    return n(v) === "Uint32Array";
  }
  e.isUint32Array = R;
  function P(v) {
    return n(v) === "Int8Array";
  }
  e.isInt8Array = P;
  function B(v) {
    return n(v) === "Int16Array";
  }
  e.isInt16Array = B;
  function q(v) {
    return n(v) === "Int32Array";
  }
  e.isInt32Array = q;
  function F(v) {
    return n(v) === "Float32Array";
  }
  e.isFloat32Array = F;
  function I(v) {
    return n(v) === "Float64Array";
  }
  e.isFloat64Array = I;
  function K(v) {
    return n(v) === "BigInt64Array";
  }
  e.isBigInt64Array = K;
  function X(v) {
    return n(v) === "BigUint64Array";
  }
  e.isBigUint64Array = X;
  function Z(v) {
    return p(v) === "[object Map]";
  }
  Z.working = typeof Map < "u" && Z(/* @__PURE__ */ new Map());
  function ie(v) {
    return typeof Map > "u" ? !1 : Z.working ? Z(v) : v instanceof Map;
  }
  e.isMap = ie;
  function Q(v) {
    return p(v) === "[object Set]";
  }
  Q.working = typeof Set < "u" && Q(/* @__PURE__ */ new Set());
  function oe(v) {
    return typeof Set > "u" ? !1 : Q.working ? Q(v) : v instanceof Set;
  }
  e.isSet = oe;
  function ae(v) {
    return p(v) === "[object WeakMap]";
  }
  ae.working = typeof WeakMap < "u" && ae(/* @__PURE__ */ new WeakMap());
  function te(v) {
    return typeof WeakMap > "u" ? !1 : ae.working ? ae(v) : v instanceof WeakMap;
  }
  e.isWeakMap = te;
  function re(v) {
    return p(v) === "[object WeakSet]";
  }
  re.working = typeof WeakSet < "u" && re(/* @__PURE__ */ new WeakSet());
  function Y(v) {
    return re(v);
  }
  e.isWeakSet = Y;
  function ne(v) {
    return p(v) === "[object ArrayBuffer]";
  }
  ne.working = typeof ArrayBuffer < "u" && ne(new ArrayBuffer());
  function ue(v) {
    return typeof ArrayBuffer > "u" ? !1 : ne.working ? ne(v) : v instanceof ArrayBuffer;
  }
  e.isArrayBuffer = ue;
  function d(v) {
    return p(v) === "[object DataView]";
  }
  d.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && d(new DataView(new ArrayBuffer(1), 0, 1));
  function g(v) {
    return typeof DataView > "u" ? !1 : d.working ? d(v) : v instanceof DataView;
  }
  e.isDataView = g;
  var _ = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function D(v) {
    return p(v) === "[object SharedArrayBuffer]";
  }
  function u(v) {
    return typeof _ > "u" ? !1 : (typeof D.working > "u" && (D.working = D(new _())), D.working ? D(v) : v instanceof _);
  }
  e.isSharedArrayBuffer = u;
  function f(v) {
    return p(v) === "[object AsyncFunction]";
  }
  e.isAsyncFunction = f;
  function y(v) {
    return p(v) === "[object Map Iterator]";
  }
  e.isMapIterator = y;
  function w(v) {
    return p(v) === "[object Set Iterator]";
  }
  e.isSetIterator = w;
  function j(v) {
    return p(v) === "[object Generator]";
  }
  e.isGeneratorObject = j;
  function o(v) {
    return p(v) === "[object WebAssembly.Module]";
  }
  e.isWebAssemblyCompiledModule = o;
  function a(v) {
    return O(v, A);
  }
  e.isNumberObject = a;
  function b(v) {
    return O(v, L);
  }
  e.isStringObject = b;
  function T(v) {
    return O(v, E);
  }
  e.isBooleanObject = T;
  function G(v) {
    return l && O(v, N);
  }
  e.isBigIntObject = G;
  function k(v) {
    return h && O(v, W);
  }
  e.isSymbolObject = k;
  function x(v) {
    return a(v) || b(v) || T(v) || G(v) || k(v);
  }
  e.isBoxedPrimitive = x;
  function se(v) {
    return typeof Uint8Array < "u" && (ue(v) || u(v));
  }
  e.isAnyArrayBuffer = se, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(v) {
    Object.defineProperty(e, v, {
      enumerable: !1,
      value: function() {
        throw new Error(v + " is not supported in userland");
      }
    });
  });
})(jr);
var Vi = function(t) {
  return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
};
(function(e) {
  var t = Object.getOwnPropertyDescriptors || function(g) {
    for (var _ = Object.keys(g), D = {}, u = 0; u < _.length; u++)
      D[_[u]] = Object.getOwnPropertyDescriptor(g, _[u]);
    return D;
  }, r = /%[sdj%]/g;
  e.format = function(d) {
    if (!P(d)) {
      for (var g = [], _ = 0; _ < arguments.length; _++)
        g.push(l(arguments[_]));
      return g.join(" ");
    }
    for (var _ = 1, D = arguments, u = D.length, f = String(d).replace(r, function(w) {
      if (w === "%%")
        return "%";
      if (_ >= u)
        return w;
      switch (w) {
        case "%s":
          return String(D[_++]);
        case "%d":
          return Number(D[_++]);
        case "%j":
          try {
            return JSON.stringify(D[_++]);
          } catch {
            return "[Circular]";
          }
        default:
          return w;
      }
    }), y = D[_]; _ < u; y = D[++_])
      m(y) || !I(y) ? f += " " + y : f += " " + l(y);
    return f;
  }, e.deprecate = function(d, g) {
    if (typeof U < "u" && U.noDeprecation === !0)
      return d;
    if (typeof U > "u")
      return function() {
        return e.deprecate(d, g).apply(this, arguments);
      };
    var _ = !1;
    function D() {
      if (!_) {
        if (U.throwDeprecation)
          throw new Error(g);
        U.traceDeprecation ? console.trace(g) : console.error(g), _ = !0;
      }
      return d.apply(this, arguments);
    }
    return D;
  };
  var n = {}, i = /^$/;
  if (U.env.NODE_DEBUG) {
    var c = U.env.NODE_DEBUG;
    c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = new RegExp("^" + c + "$", "i");
  }
  e.debuglog = function(d) {
    if (d = d.toUpperCase(), !n[d])
      if (i.test(d)) {
        var g = U.pid;
        n[d] = function() {
          var _ = e.format.apply(e, arguments);
          console.error("%s %d: %s", d, g, _);
        };
      } else
        n[d] = function() {
        };
    return n[d];
  };
  function l(d, g) {
    var _ = {
      seen: [],
      stylize: p
    };
    return arguments.length >= 3 && (_.depth = arguments[2]), arguments.length >= 4 && (_.colors = arguments[3]), s(g) ? _.showHidden = g : g && e._extend(_, g), q(_.showHidden) && (_.showHidden = !1), q(_.depth) && (_.depth = 2), q(_.colors) && (_.colors = !1), q(_.customInspect) && (_.customInspect = !0), _.colors && (_.stylize = h), L(_, d, _.depth);
  }
  e.inspect = l, l.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, l.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    // "name": intentionally not styling
    regexp: "red"
  };
  function h(d, g) {
    var _ = l.styles[g];
    return _ ? "\x1B[" + l.colors[_][0] + "m" + d + "\x1B[" + l.colors[_][1] + "m" : d;
  }
  function p(d, g) {
    return d;
  }
  function A(d) {
    var g = {};
    return d.forEach(function(_, D) {
      g[_] = !0;
    }), g;
  }
  function L(d, g, _) {
    if (d.customInspect && g && Z(g.inspect) && // Filter out the util module, it's inspect function is special
    g.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
    !(g.constructor && g.constructor.prototype === g)) {
      var D = g.inspect(_, d);
      return P(D) || (D = L(d, D, _)), D;
    }
    var u = E(d, g);
    if (u)
      return u;
    var f = Object.keys(g), y = A(f);
    if (d.showHidden && (f = Object.getOwnPropertyNames(g)), X(g) && (f.indexOf("message") >= 0 || f.indexOf("description") >= 0))
      return N(g);
    if (f.length === 0) {
      if (Z(g)) {
        var w = g.name ? ": " + g.name : "";
        return d.stylize("[Function" + w + "]", "special");
      }
      if (F(g))
        return d.stylize(RegExp.prototype.toString.call(g), "regexp");
      if (K(g))
        return d.stylize(Date.prototype.toString.call(g), "date");
      if (X(g))
        return N(g);
    }
    var j = "", o = !1, a = ["{", "}"];
    if (M(g) && (o = !0, a = ["[", "]"]), Z(g)) {
      var b = g.name ? ": " + g.name : "";
      j = " [Function" + b + "]";
    }
    if (F(g) && (j = " " + RegExp.prototype.toString.call(g)), K(g) && (j = " " + Date.prototype.toUTCString.call(g)), X(g) && (j = " " + N(g)), f.length === 0 && (!o || g.length == 0))
      return a[0] + j + a[1];
    if (_ < 0)
      return F(g) ? d.stylize(RegExp.prototype.toString.call(g), "regexp") : d.stylize("[Object]", "special");
    d.seen.push(g);
    var T;
    return o ? T = W(d, g, _, y, f) : T = f.map(function(G) {
      return O(d, g, _, y, G, o);
    }), d.seen.pop(), C(T, j, a);
  }
  function E(d, g) {
    if (q(g))
      return d.stylize("undefined", "undefined");
    if (P(g)) {
      var _ = "'" + JSON.stringify(g).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return d.stylize(_, "string");
    }
    if (R(g))
      return d.stylize("" + g, "number");
    if (s(g))
      return d.stylize("" + g, "boolean");
    if (m(g))
      return d.stylize("null", "null");
  }
  function N(d) {
    return "[" + Error.prototype.toString.call(d) + "]";
  }
  function W(d, g, _, D, u) {
    for (var f = [], y = 0, w = g.length; y < w; ++y)
      re(g, String(y)) ? f.push(O(
        d,
        g,
        _,
        D,
        String(y),
        !0
      )) : f.push("");
    return u.forEach(function(j) {
      j.match(/^\d+$/) || f.push(O(
        d,
        g,
        _,
        D,
        j,
        !0
      ));
    }), f;
  }
  function O(d, g, _, D, u, f) {
    var y, w, j;
    if (j = Object.getOwnPropertyDescriptor(g, u) || { value: g[u] }, j.get ? j.set ? w = d.stylize("[Getter/Setter]", "special") : w = d.stylize("[Getter]", "special") : j.set && (w = d.stylize("[Setter]", "special")), re(D, u) || (y = "[" + u + "]"), w || (d.seen.indexOf(j.value) < 0 ? (m(_) ? w = L(d, j.value, null) : w = L(d, j.value, _ - 1), w.indexOf(`
`) > -1 && (f ? w = w.split(`
`).map(function(o) {
      return "  " + o;
    }).join(`
`).slice(2) : w = `
` + w.split(`
`).map(function(o) {
      return "   " + o;
    }).join(`
`))) : w = d.stylize("[Circular]", "special")), q(y)) {
      if (f && u.match(/^\d+$/))
        return w;
      y = JSON.stringify("" + u), y.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (y = y.slice(1, -1), y = d.stylize(y, "name")) : (y = y.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), y = d.stylize(y, "string"));
    }
    return y + ": " + w;
  }
  function C(d, g, _) {
    var D = d.reduce(function(u, f) {
      return f.indexOf(`
`) >= 0, u + f.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return D > 60 ? _[0] + (g === "" ? "" : g + `
 `) + " " + d.join(`,
  `) + " " + _[1] : _[0] + g + " " + d.join(", ") + " " + _[1];
  }
  e.types = jr;
  function M(d) {
    return Array.isArray(d);
  }
  e.isArray = M;
  function s(d) {
    return typeof d == "boolean";
  }
  e.isBoolean = s;
  function m(d) {
    return d === null;
  }
  e.isNull = m;
  function S(d) {
    return d == null;
  }
  e.isNullOrUndefined = S;
  function R(d) {
    return typeof d == "number";
  }
  e.isNumber = R;
  function P(d) {
    return typeof d == "string";
  }
  e.isString = P;
  function B(d) {
    return typeof d == "symbol";
  }
  e.isSymbol = B;
  function q(d) {
    return d === void 0;
  }
  e.isUndefined = q;
  function F(d) {
    return I(d) && Q(d) === "[object RegExp]";
  }
  e.isRegExp = F, e.types.isRegExp = F;
  function I(d) {
    return typeof d == "object" && d !== null;
  }
  e.isObject = I;
  function K(d) {
    return I(d) && Q(d) === "[object Date]";
  }
  e.isDate = K, e.types.isDate = K;
  function X(d) {
    return I(d) && (Q(d) === "[object Error]" || d instanceof Error);
  }
  e.isError = X, e.types.isNativeError = X;
  function Z(d) {
    return typeof d == "function";
  }
  e.isFunction = Z;
  function ie(d) {
    return d === null || typeof d == "boolean" || typeof d == "number" || typeof d == "string" || typeof d == "symbol" || // ES6 symbol
    typeof d > "u";
  }
  e.isPrimitive = ie, e.isBuffer = Vi;
  function Q(d) {
    return Object.prototype.toString.call(d);
  }
  function oe(d) {
    return d < 10 ? "0" + d.toString(10) : d.toString(10);
  }
  var ae = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function te() {
    var d = /* @__PURE__ */ new Date(), g = [
      oe(d.getHours()),
      oe(d.getMinutes()),
      oe(d.getSeconds())
    ].join(":");
    return [d.getDate(), ae[d.getMonth()], g].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", te(), e.format.apply(e, arguments));
  }, e.inherits = le, e._extend = function(d, g) {
    if (!g || !I(g))
      return d;
    for (var _ = Object.keys(g), D = _.length; D--; )
      d[_[D]] = g[_[D]];
    return d;
  };
  function re(d, g) {
    return Object.prototype.hasOwnProperty.call(d, g);
  }
  var Y = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  e.promisify = function(g) {
    if (typeof g != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (Y && g[Y]) {
      var _ = g[Y];
      if (typeof _ != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(_, Y, {
        value: _,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), _;
    }
    function _() {
      for (var D, u, f = new Promise(function(j, o) {
        D = j, u = o;
      }), y = [], w = 0; w < arguments.length; w++)
        y.push(arguments[w]);
      y.push(function(j, o) {
        j ? u(j) : D(o);
      });
      try {
        g.apply(this, y);
      } catch (j) {
        u(j);
      }
      return f;
    }
    return Object.setPrototypeOf(_, Object.getPrototypeOf(g)), Y && Object.defineProperty(_, Y, {
      value: _,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      _,
      t(g)
    );
  }, e.promisify.custom = Y;
  function ne(d, g) {
    if (!d) {
      var _ = new Error("Promise was rejected with a falsy value");
      _.reason = d, d = _;
    }
    return g(d);
  }
  function ue(d) {
    if (typeof d != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function g() {
      for (var _ = [], D = 0; D < arguments.length; D++)
        _.push(arguments[D]);
      var u = _.pop();
      if (typeof u != "function")
        throw new TypeError("The last argument must be of type Function");
      var f = this, y = function() {
        return u.apply(f, arguments);
      };
      d.apply(this, _).then(
        function(w) {
          U.nextTick(y.bind(null, null, w));
        },
        function(w) {
          U.nextTick(ne.bind(null, w, y));
        }
      );
    }
    return Object.setPrototypeOf(g, Object.getPrototypeOf(d)), Object.defineProperties(
      g,
      t(d)
    ), g;
  }
  e.callbackify = ue;
})(Mt);
var ut, tr;
function zi() {
  if (tr)
    return ut;
  tr = 1;
  function e(O, C) {
    var M = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(O);
      C && (s = s.filter(function(m) {
        return Object.getOwnPropertyDescriptor(O, m).enumerable;
      })), M.push.apply(M, s);
    }
    return M;
  }
  function t(O) {
    for (var C = 1; C < arguments.length; C++) {
      var M = arguments[C] != null ? arguments[C] : {};
      C % 2 ? e(Object(M), !0).forEach(function(s) {
        r(O, s, M[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(M)) : e(Object(M)).forEach(function(s) {
        Object.defineProperty(O, s, Object.getOwnPropertyDescriptor(M, s));
      });
    }
    return O;
  }
  function r(O, C, M) {
    return C = l(C), C in O ? Object.defineProperty(O, C, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : O[C] = M, O;
  }
  function n(O, C) {
    if (!(O instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(O, C) {
    for (var M = 0; M < C.length; M++) {
      var s = C[M];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(O, l(s.key), s);
    }
  }
  function c(O, C, M) {
    return C && i(O.prototype, C), Object.defineProperty(O, "prototype", { writable: !1 }), O;
  }
  function l(O) {
    var C = h(O, "string");
    return typeof C == "symbol" ? C : String(C);
  }
  function h(O, C) {
    if (typeof O != "object" || O === null)
      return O;
    var M = O[Symbol.toPrimitive];
    if (M !== void 0) {
      var s = M.call(O, C || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(O);
  }
  var p = Ge, A = p.Buffer, L = Mt, E = L.inspect, N = E && E.custom || "inspect";
  function W(O, C, M) {
    A.prototype.copy.call(O, C, M);
  }
  return ut = /* @__PURE__ */ function() {
    function O() {
      n(this, O), this.head = null, this.tail = null, this.length = 0;
    }
    return c(O, [{
      key: "push",
      value: function(M) {
        var s = {
          data: M,
          next: null
        };
        this.length > 0 ? this.tail.next = s : this.head = s, this.tail = s, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(M) {
        var s = {
          data: M,
          next: this.head
        };
        this.length === 0 && (this.tail = s), this.head = s, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var M = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, M;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(M) {
        if (this.length === 0)
          return "";
        for (var s = this.head, m = "" + s.data; s = s.next; )
          m += M + s.data;
        return m;
      }
    }, {
      key: "concat",
      value: function(M) {
        if (this.length === 0)
          return A.alloc(0);
        for (var s = A.allocUnsafe(M >>> 0), m = this.head, S = 0; m; )
          W(m.data, s, S), S += m.data.length, m = m.next;
        return s;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(M, s) {
        var m;
        return M < this.head.data.length ? (m = this.head.data.slice(0, M), this.head.data = this.head.data.slice(M)) : M === this.head.data.length ? m = this.shift() : m = s ? this._getString(M) : this._getBuffer(M), m;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(M) {
        var s = this.head, m = 1, S = s.data;
        for (M -= S.length; s = s.next; ) {
          var R = s.data, P = M > R.length ? R.length : M;
          if (P === R.length ? S += R : S += R.slice(0, M), M -= P, M === 0) {
            P === R.length ? (++m, s.next ? this.head = s.next : this.head = this.tail = null) : (this.head = s, s.data = R.slice(P));
            break;
          }
          ++m;
        }
        return this.length -= m, S;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(M) {
        var s = A.allocUnsafe(M), m = this.head, S = 1;
        for (m.data.copy(s), M -= m.data.length; m = m.next; ) {
          var R = m.data, P = M > R.length ? R.length : M;
          if (R.copy(s, s.length - M, 0, P), M -= P, M === 0) {
            P === R.length ? (++S, m.next ? this.head = m.next : this.head = this.tail = null) : (this.head = m, m.data = R.slice(P));
            break;
          }
          ++S;
        }
        return this.length -= S, s;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: N,
      value: function(M, s) {
        return E(this, t(t({}, s), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), O;
  }(), ut;
}
function Ki(e, t) {
  var r = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed;
  return n || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, U.nextTick(Rt, this, e)) : U.nextTick(Rt, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(c) {
    !t && c ? r._writableState ? r._writableState.errorEmitted ? U.nextTick(Ue, r) : (r._writableState.errorEmitted = !0, U.nextTick(rr, r, c)) : U.nextTick(rr, r, c) : t ? (U.nextTick(Ue, r), t(c)) : U.nextTick(Ue, r);
  }), this);
}
function rr(e, t) {
  Rt(e, t), Ue(e);
}
function Ue(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function Yi() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function Rt(e, t) {
  e.emit("error", t);
}
function Ji(e, t) {
  var r = e._readableState, n = e._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var Vr = {
  destroy: Ki,
  undestroy: Yi,
  errorOrDestroy: Ji
}, ye = {};
function Xi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var zr = {};
function ee(e, t, r) {
  r || (r = Error);
  function n(c, l, h) {
    return typeof t == "string" ? t : t(c, l, h);
  }
  var i = /* @__PURE__ */ function(c) {
    Xi(l, c);
    function l(h, p, A) {
      return c.call(this, n(h, p, A)) || this;
    }
    return l;
  }(r);
  i.prototype.name = r.name, i.prototype.code = e, zr[e] = i;
}
function nr(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return e = e.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function Zi(e, t, r) {
  return e.substr(0, t.length) === t;
}
function Qi(e, t, r) {
  return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
}
function eo(e, t, r) {
  return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
}
ee("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
ee("ERR_INVALID_ARG_TYPE", function(e, t, r) {
  var n;
  typeof t == "string" && Zi(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
  var i;
  if (Qi(e, " argument"))
    i = "The ".concat(e, " ").concat(n, " ").concat(nr(t, "type"));
  else {
    var c = eo(e, ".") ? "property" : "argument";
    i = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(nr(t, "type"));
  }
  return i += ". Received type ".concat(typeof r), i;
}, TypeError);
ee("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
ee("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
ee("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
ee("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
ee("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
ee("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
ee("ERR_STREAM_WRITE_AFTER_END", "write after end");
ee("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
ee("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
ee("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
ye.codes = zr;
var to = ye.codes.ERR_INVALID_OPT_VALUE;
function ro(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function no(e, t, r, n) {
  var i = ro(t, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var c = n ? r : "highWaterMark";
      throw new to(c, i);
    }
    return Math.floor(i);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var Kr = {
  getHighWaterMark: no
}, io = oo;
function oo(e, t) {
  if (st("noDeprecation"))
    return e;
  var r = !1;
  function n() {
    if (!r) {
      if (st("throwDeprecation"))
        throw new Error(t);
      st("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return n;
}
function st(e) {
  try {
    if (!V.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = V.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var lt, ir;
function Yr() {
  if (ir)
    return lt;
  ir = 1, lt = F;
  function e(u) {
    var f = this;
    this.next = null, this.entry = null, this.finish = function() {
      D(f, u);
    };
  }
  var t;
  F.WritableState = B;
  var r = {
    deprecate: io
  }, n = Mr, i = Ge.Buffer, c = (typeof V < "u" ? V : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function l(u) {
    return i.from(u);
  }
  function h(u) {
    return i.isBuffer(u) || u instanceof c;
  }
  var p = Vr, A = Kr, L = A.getHighWaterMark, E = ye.codes, N = E.ERR_INVALID_ARG_TYPE, W = E.ERR_METHOD_NOT_IMPLEMENTED, O = E.ERR_MULTIPLE_CALLBACK, C = E.ERR_STREAM_CANNOT_PIPE, M = E.ERR_STREAM_DESTROYED, s = E.ERR_STREAM_NULL_VALUES, m = E.ERR_STREAM_WRITE_AFTER_END, S = E.ERR_UNKNOWN_ENCODING, R = p.errorOrDestroy;
  le(F, n);
  function P() {
  }
  function B(u, f, y) {
    t = t || Re(), u = u || {}, typeof y != "boolean" && (y = f instanceof t), this.objectMode = !!u.objectMode, y && (this.objectMode = this.objectMode || !!u.writableObjectMode), this.highWaterMark = L(this, u, "writableHighWaterMark", y), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var w = u.decodeStrings === !1;
    this.decodeStrings = !w, this.defaultEncoding = u.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(j) {
      ae(f, j);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = u.emitClose !== !1, this.autoDestroy = !!u.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  B.prototype.getBuffer = function() {
    for (var f = this.bufferedRequest, y = []; f; )
      y.push(f), f = f.next;
    return y;
  }, function() {
    try {
      Object.defineProperty(B.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var q;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (q = Function.prototype[Symbol.hasInstance], Object.defineProperty(F, Symbol.hasInstance, {
    value: function(f) {
      return q.call(this, f) ? !0 : this !== F ? !1 : f && f._writableState instanceof B;
    }
  })) : q = function(f) {
    return f instanceof this;
  };
  function F(u) {
    t = t || Re();
    var f = this instanceof t;
    if (!f && !q.call(F, this))
      return new F(u);
    this._writableState = new B(u, this, f), this.writable = !0, u && (typeof u.write == "function" && (this._write = u.write), typeof u.writev == "function" && (this._writev = u.writev), typeof u.destroy == "function" && (this._destroy = u.destroy), typeof u.final == "function" && (this._final = u.final)), n.call(this);
  }
  F.prototype.pipe = function() {
    R(this, new C());
  };
  function I(u, f) {
    var y = new m();
    R(u, y), U.nextTick(f, y);
  }
  function K(u, f, y, w) {
    var j;
    return y === null ? j = new s() : typeof y != "string" && !f.objectMode && (j = new N("chunk", ["string", "Buffer"], y)), j ? (R(u, j), U.nextTick(w, j), !1) : !0;
  }
  F.prototype.write = function(u, f, y) {
    var w = this._writableState, j = !1, o = !w.objectMode && h(u);
    return o && !i.isBuffer(u) && (u = l(u)), typeof f == "function" && (y = f, f = null), o ? f = "buffer" : f || (f = w.defaultEncoding), typeof y != "function" && (y = P), w.ending ? I(this, y) : (o || K(this, w, u, y)) && (w.pendingcb++, j = Z(this, w, o, u, f, y)), j;
  }, F.prototype.cork = function() {
    this._writableState.corked++;
  }, F.prototype.uncork = function() {
    var u = this._writableState;
    u.corked && (u.corked--, !u.writing && !u.corked && !u.bufferProcessing && u.bufferedRequest && Y(this, u));
  }, F.prototype.setDefaultEncoding = function(f) {
    if (typeof f == "string" && (f = f.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((f + "").toLowerCase()) > -1))
      throw new S(f);
    return this._writableState.defaultEncoding = f, this;
  }, Object.defineProperty(F.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function X(u, f, y) {
    return !u.objectMode && u.decodeStrings !== !1 && typeof f == "string" && (f = i.from(f, y)), f;
  }
  Object.defineProperty(F.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function Z(u, f, y, w, j, o) {
    if (!y) {
      var a = X(f, w, j);
      w !== a && (y = !0, j = "buffer", w = a);
    }
    var b = f.objectMode ? 1 : w.length;
    f.length += b;
    var T = f.length < f.highWaterMark;
    if (T || (f.needDrain = !0), f.writing || f.corked) {
      var G = f.lastBufferedRequest;
      f.lastBufferedRequest = {
        chunk: w,
        encoding: j,
        isBuf: y,
        callback: o,
        next: null
      }, G ? G.next = f.lastBufferedRequest : f.bufferedRequest = f.lastBufferedRequest, f.bufferedRequestCount += 1;
    } else
      ie(u, f, !1, b, w, j, o);
    return T;
  }
  function ie(u, f, y, w, j, o, a) {
    f.writelen = w, f.writecb = a, f.writing = !0, f.sync = !0, f.destroyed ? f.onwrite(new M("write")) : y ? u._writev(j, f.onwrite) : u._write(j, o, f.onwrite), f.sync = !1;
  }
  function Q(u, f, y, w, j) {
    --f.pendingcb, y ? (U.nextTick(j, w), U.nextTick(g, u, f), u._writableState.errorEmitted = !0, R(u, w)) : (j(w), u._writableState.errorEmitted = !0, R(u, w), g(u, f));
  }
  function oe(u) {
    u.writing = !1, u.writecb = null, u.length -= u.writelen, u.writelen = 0;
  }
  function ae(u, f) {
    var y = u._writableState, w = y.sync, j = y.writecb;
    if (typeof j != "function")
      throw new O();
    if (oe(y), f)
      Q(u, y, w, f, j);
    else {
      var o = ne(y) || u.destroyed;
      !o && !y.corked && !y.bufferProcessing && y.bufferedRequest && Y(u, y), w ? U.nextTick(te, u, y, o, j) : te(u, y, o, j);
    }
  }
  function te(u, f, y, w) {
    y || re(u, f), f.pendingcb--, w(), g(u, f);
  }
  function re(u, f) {
    f.length === 0 && f.needDrain && (f.needDrain = !1, u.emit("drain"));
  }
  function Y(u, f) {
    f.bufferProcessing = !0;
    var y = f.bufferedRequest;
    if (u._writev && y && y.next) {
      var w = f.bufferedRequestCount, j = new Array(w), o = f.corkedRequestsFree;
      o.entry = y;
      for (var a = 0, b = !0; y; )
        j[a] = y, y.isBuf || (b = !1), y = y.next, a += 1;
      j.allBuffers = b, ie(u, f, !0, f.length, j, "", o.finish), f.pendingcb++, f.lastBufferedRequest = null, o.next ? (f.corkedRequestsFree = o.next, o.next = null) : f.corkedRequestsFree = new e(f), f.bufferedRequestCount = 0;
    } else {
      for (; y; ) {
        var T = y.chunk, G = y.encoding, k = y.callback, x = f.objectMode ? 1 : T.length;
        if (ie(u, f, !1, x, T, G, k), y = y.next, f.bufferedRequestCount--, f.writing)
          break;
      }
      y === null && (f.lastBufferedRequest = null);
    }
    f.bufferedRequest = y, f.bufferProcessing = !1;
  }
  F.prototype._write = function(u, f, y) {
    y(new W("_write()"));
  }, F.prototype._writev = null, F.prototype.end = function(u, f, y) {
    var w = this._writableState;
    return typeof u == "function" ? (y = u, u = null, f = null) : typeof f == "function" && (y = f, f = null), u != null && this.write(u, f), w.corked && (w.corked = 1, this.uncork()), w.ending || _(this, w, y), this;
  }, Object.defineProperty(F.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function ne(u) {
    return u.ending && u.length === 0 && u.bufferedRequest === null && !u.finished && !u.writing;
  }
  function ue(u, f) {
    u._final(function(y) {
      f.pendingcb--, y && R(u, y), f.prefinished = !0, u.emit("prefinish"), g(u, f);
    });
  }
  function d(u, f) {
    !f.prefinished && !f.finalCalled && (typeof u._final == "function" && !f.destroyed ? (f.pendingcb++, f.finalCalled = !0, U.nextTick(ue, u, f)) : (f.prefinished = !0, u.emit("prefinish")));
  }
  function g(u, f) {
    var y = ne(f);
    if (y && (d(u, f), f.pendingcb === 0 && (f.finished = !0, u.emit("finish"), f.autoDestroy))) {
      var w = u._readableState;
      (!w || w.autoDestroy && w.endEmitted) && u.destroy();
    }
    return y;
  }
  function _(u, f, y) {
    f.ending = !0, g(u, f), y && (f.finished ? U.nextTick(y) : u.once("finish", y)), f.ended = !0, u.writable = !1;
  }
  function D(u, f, y) {
    var w = u.entry;
    for (u.entry = null; w; ) {
      var j = w.callback;
      f.pendingcb--, j(y), w = w.next;
    }
    f.corkedRequestsFree.next = u;
  }
  return Object.defineProperty(F.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(f) {
      this._writableState && (this._writableState.destroyed = f);
    }
  }), F.prototype.destroy = p.destroy, F.prototype._undestroy = p.undestroy, F.prototype._destroy = function(u, f) {
    f(u);
  }, lt;
}
var ct, or;
function Re() {
  if (or)
    return ct;
  or = 1;
  var e = Object.keys || function(A) {
    var L = [];
    for (var E in A)
      L.push(E);
    return L;
  };
  ct = l;
  var t = Xr(), r = Yr();
  le(l, t);
  for (var n = e(r.prototype), i = 0; i < n.length; i++) {
    var c = n[i];
    l.prototype[c] || (l.prototype[c] = r.prototype[c]);
  }
  function l(A) {
    if (!(this instanceof l))
      return new l(A);
    t.call(this, A), r.call(this, A), this.allowHalfOpen = !0, A && (A.readable === !1 && (this.readable = !1), A.writable === !1 && (this.writable = !1), A.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", h)));
  }
  Object.defineProperty(l.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(l.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(l.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function h() {
    this._writableState.ended || U.nextTick(p, this);
  }
  function p(A) {
    A.end();
  }
  return Object.defineProperty(l.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(L) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = L, this._writableState.destroyed = L);
    }
  }), ct;
}
var dt = {}, Le = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ar;
function ao() {
  return ar || (ar = 1, function(e, t) {
    var r = Ge, n = r.Buffer;
    function i(l, h) {
      for (var p in l)
        h[p] = l[p];
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = c);
    function c(l, h, p) {
      return n(l, h, p);
    }
    c.prototype = Object.create(n.prototype), i(n, c), c.from = function(l, h, p) {
      if (typeof l == "number")
        throw new TypeError("Argument must not be a number");
      return n(l, h, p);
    }, c.alloc = function(l, h, p) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      var A = n(l);
      return h !== void 0 ? typeof p == "string" ? A.fill(h, p) : A.fill(h) : A.fill(0), A;
    }, c.allocUnsafe = function(l) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      return n(l);
    }, c.allocUnsafeSlow = function(l) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(l);
    };
  }(Le, Le.exports)), Le.exports;
}
var fr;
function ur() {
  if (fr)
    return dt;
  fr = 1;
  var e = ao().Buffer, t = e.isEncoding || function(s) {
    switch (s = "" + s, s && s.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function r(s) {
    if (!s)
      return "utf8";
    for (var m; ; )
      switch (s) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return s;
        default:
          if (m)
            return;
          s = ("" + s).toLowerCase(), m = !0;
      }
  }
  function n(s) {
    var m = r(s);
    if (typeof m != "string" && (e.isEncoding === t || !t(s)))
      throw new Error("Unknown encoding: " + s);
    return m || s;
  }
  dt.StringDecoder = i;
  function i(s) {
    this.encoding = n(s);
    var m;
    switch (this.encoding) {
      case "utf16le":
        this.text = E, this.end = N, m = 4;
        break;
      case "utf8":
        this.fillLast = p, m = 4;
        break;
      case "base64":
        this.text = W, this.end = O, m = 3;
        break;
      default:
        this.write = C, this.end = M;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(m);
  }
  i.prototype.write = function(s) {
    if (s.length === 0)
      return "";
    var m, S;
    if (this.lastNeed) {
      if (m = this.fillLast(s), m === void 0)
        return "";
      S = this.lastNeed, this.lastNeed = 0;
    } else
      S = 0;
    return S < s.length ? m ? m + this.text(s, S) : this.text(s, S) : m || "";
  }, i.prototype.end = L, i.prototype.text = A, i.prototype.fillLast = function(s) {
    if (this.lastNeed <= s.length)
      return s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, s.length), this.lastNeed -= s.length;
  };
  function c(s) {
    return s <= 127 ? 0 : s >> 5 === 6 ? 2 : s >> 4 === 14 ? 3 : s >> 3 === 30 ? 4 : s >> 6 === 2 ? -1 : -2;
  }
  function l(s, m, S) {
    var R = m.length - 1;
    if (R < S)
      return 0;
    var P = c(m[R]);
    return P >= 0 ? (P > 0 && (s.lastNeed = P - 1), P) : --R < S || P === -2 ? 0 : (P = c(m[R]), P >= 0 ? (P > 0 && (s.lastNeed = P - 2), P) : --R < S || P === -2 ? 0 : (P = c(m[R]), P >= 0 ? (P > 0 && (P === 2 ? P = 0 : s.lastNeed = P - 3), P) : 0));
  }
  function h(s, m, S) {
    if ((m[0] & 192) !== 128)
      return s.lastNeed = 0, "�";
    if (s.lastNeed > 1 && m.length > 1) {
      if ((m[1] & 192) !== 128)
        return s.lastNeed = 1, "�";
      if (s.lastNeed > 2 && m.length > 2 && (m[2] & 192) !== 128)
        return s.lastNeed = 2, "�";
    }
  }
  function p(s) {
    var m = this.lastTotal - this.lastNeed, S = h(this, s);
    if (S !== void 0)
      return S;
    if (this.lastNeed <= s.length)
      return s.copy(this.lastChar, m, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    s.copy(this.lastChar, m, 0, s.length), this.lastNeed -= s.length;
  }
  function A(s, m) {
    var S = l(this, s, m);
    if (!this.lastNeed)
      return s.toString("utf8", m);
    this.lastTotal = S;
    var R = s.length - (S - this.lastNeed);
    return s.copy(this.lastChar, 0, R), s.toString("utf8", m, R);
  }
  function L(s) {
    var m = s && s.length ? this.write(s) : "";
    return this.lastNeed ? m + "�" : m;
  }
  function E(s, m) {
    if ((s.length - m) % 2 === 0) {
      var S = s.toString("utf16le", m);
      if (S) {
        var R = S.charCodeAt(S.length - 1);
        if (R >= 55296 && R <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = s[s.length - 2], this.lastChar[1] = s[s.length - 1], S.slice(0, -1);
      }
      return S;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = s[s.length - 1], s.toString("utf16le", m, s.length - 1);
  }
  function N(s) {
    var m = s && s.length ? this.write(s) : "";
    if (this.lastNeed) {
      var S = this.lastTotal - this.lastNeed;
      return m + this.lastChar.toString("utf16le", 0, S);
    }
    return m;
  }
  function W(s, m) {
    var S = (s.length - m) % 3;
    return S === 0 ? s.toString("base64", m) : (this.lastNeed = 3 - S, this.lastTotal = 3, S === 1 ? this.lastChar[0] = s[s.length - 1] : (this.lastChar[0] = s[s.length - 2], this.lastChar[1] = s[s.length - 1]), s.toString("base64", m, s.length - S));
  }
  function O(s) {
    var m = s && s.length ? this.write(s) : "";
    return this.lastNeed ? m + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : m;
  }
  function C(s) {
    return s.toString(this.encoding);
  }
  function M(s) {
    return s && s.length ? this.write(s) : "";
  }
  return dt;
}
var sr = ye.codes.ERR_STREAM_PREMATURE_CLOSE;
function fo(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      e.apply(this, n);
    }
  };
}
function uo() {
}
function so(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Jr(e, t, r) {
  if (typeof t == "function")
    return Jr(e, null, t);
  t || (t = {}), r = fo(r || uo);
  var n = t.readable || t.readable !== !1 && e.readable, i = t.writable || t.writable !== !1 && e.writable, c = function() {
    e.writable || h();
  }, l = e._writableState && e._writableState.finished, h = function() {
    i = !1, l = !0, n || r.call(e);
  }, p = e._readableState && e._readableState.endEmitted, A = function() {
    n = !1, p = !0, i || r.call(e);
  }, L = function(O) {
    r.call(e, O);
  }, E = function() {
    var O;
    if (n && !p)
      return (!e._readableState || !e._readableState.ended) && (O = new sr()), r.call(e, O);
    if (i && !l)
      return (!e._writableState || !e._writableState.ended) && (O = new sr()), r.call(e, O);
  }, N = function() {
    e.req.on("finish", h);
  };
  return so(e) ? (e.on("complete", h), e.on("abort", E), e.req ? N() : e.on("request", N)) : i && !e._writableState && (e.on("end", c), e.on("close", c)), e.on("end", A), e.on("finish", h), t.error !== !1 && e.on("error", L), e.on("close", E), function() {
    e.removeListener("complete", h), e.removeListener("abort", E), e.removeListener("request", N), e.req && e.req.removeListener("finish", h), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", h), e.removeListener("end", A), e.removeListener("error", L), e.removeListener("close", E);
  };
}
var Bt = Jr, pt, lr;
function lo() {
  if (lr)
    return pt;
  lr = 1;
  var e;
  function t(S, R, P) {
    return R = r(R), R in S ? Object.defineProperty(S, R, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : S[R] = P, S;
  }
  function r(S) {
    var R = n(S, "string");
    return typeof R == "symbol" ? R : String(R);
  }
  function n(S, R) {
    if (typeof S != "object" || S === null)
      return S;
    var P = S[Symbol.toPrimitive];
    if (P !== void 0) {
      var B = P.call(S, R || "default");
      if (typeof B != "object")
        return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (R === "string" ? String : Number)(S);
  }
  var i = Bt, c = Symbol("lastResolve"), l = Symbol("lastReject"), h = Symbol("error"), p = Symbol("ended"), A = Symbol("lastPromise"), L = Symbol("handlePromise"), E = Symbol("stream");
  function N(S, R) {
    return {
      value: S,
      done: R
    };
  }
  function W(S) {
    var R = S[c];
    if (R !== null) {
      var P = S[E].read();
      P !== null && (S[A] = null, S[c] = null, S[l] = null, R(N(P, !1)));
    }
  }
  function O(S) {
    U.nextTick(W, S);
  }
  function C(S, R) {
    return function(P, B) {
      S.then(function() {
        if (R[p]) {
          P(N(void 0, !0));
          return;
        }
        R[L](P, B);
      }, B);
    };
  }
  var M = Object.getPrototypeOf(function() {
  }), s = Object.setPrototypeOf((e = {
    get stream() {
      return this[E];
    },
    next: function() {
      var R = this, P = this[h];
      if (P !== null)
        return Promise.reject(P);
      if (this[p])
        return Promise.resolve(N(void 0, !0));
      if (this[E].destroyed)
        return new Promise(function(I, K) {
          U.nextTick(function() {
            R[h] ? K(R[h]) : I(N(void 0, !0));
          });
        });
      var B = this[A], q;
      if (B)
        q = new Promise(C(B, this));
      else {
        var F = this[E].read();
        if (F !== null)
          return Promise.resolve(N(F, !1));
        q = new Promise(this[L]);
      }
      return this[A] = q, q;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var R = this;
    return new Promise(function(P, B) {
      R[E].destroy(null, function(q) {
        if (q) {
          B(q);
          return;
        }
        P(N(void 0, !0));
      });
    });
  }), e), M), m = function(R) {
    var P, B = Object.create(s, (P = {}, t(P, E, {
      value: R,
      writable: !0
    }), t(P, c, {
      value: null,
      writable: !0
    }), t(P, l, {
      value: null,
      writable: !0
    }), t(P, h, {
      value: null,
      writable: !0
    }), t(P, p, {
      value: R._readableState.endEmitted,
      writable: !0
    }), t(P, L, {
      value: function(F, I) {
        var K = B[E].read();
        K ? (B[A] = null, B[c] = null, B[l] = null, F(N(K, !1))) : (B[c] = F, B[l] = I);
      },
      writable: !0
    }), P));
    return B[A] = null, i(R, function(q) {
      if (q && q.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var F = B[l];
        F !== null && (B[A] = null, B[c] = null, B[l] = null, F(q)), B[h] = q;
        return;
      }
      var I = B[c];
      I !== null && (B[A] = null, B[c] = null, B[l] = null, I(N(void 0, !0))), B[p] = !0;
    }), R.on("readable", O.bind(null, B)), B;
  };
  return pt = m, pt;
}
var ht, cr;
function co() {
  return cr || (cr = 1, ht = function() {
    throw new Error("Readable.from is not available in the browser");
  }), ht;
}
var yt, dr;
function Xr() {
  if (dr)
    return yt;
  dr = 1, yt = I;
  var e;
  I.ReadableState = F, Pr.EventEmitter;
  var t = function(a, b) {
    return a.listeners(b).length;
  }, r = Mr, n = Ge.Buffer, i = (typeof V < "u" ? V : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function c(o) {
    return n.from(o);
  }
  function l(o) {
    return n.isBuffer(o) || o instanceof i;
  }
  var h = Mt, p;
  h && h.debuglog ? p = h.debuglog("stream") : p = function() {
  };
  var A = zi(), L = Vr, E = Kr, N = E.getHighWaterMark, W = ye.codes, O = W.ERR_INVALID_ARG_TYPE, C = W.ERR_STREAM_PUSH_AFTER_EOF, M = W.ERR_METHOD_NOT_IMPLEMENTED, s = W.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, m, S, R;
  le(I, r);
  var P = L.errorOrDestroy, B = ["error", "close", "destroy", "pause", "resume"];
  function q(o, a, b) {
    if (typeof o.prependListener == "function")
      return o.prependListener(a, b);
    !o._events || !o._events[a] ? o.on(a, b) : Array.isArray(o._events[a]) ? o._events[a].unshift(b) : o._events[a] = [b, o._events[a]];
  }
  function F(o, a, b) {
    e = e || Re(), o = o || {}, typeof b != "boolean" && (b = a instanceof e), this.objectMode = !!o.objectMode, b && (this.objectMode = this.objectMode || !!o.readableObjectMode), this.highWaterMark = N(this, o, "readableHighWaterMark", b), this.buffer = new A(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = o.emitClose !== !1, this.autoDestroy = !!o.autoDestroy, this.destroyed = !1, this.defaultEncoding = o.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, o.encoding && (m || (m = ur().StringDecoder), this.decoder = new m(o.encoding), this.encoding = o.encoding);
  }
  function I(o) {
    if (e = e || Re(), !(this instanceof I))
      return new I(o);
    var a = this instanceof e;
    this._readableState = new F(o, this, a), this.readable = !0, o && (typeof o.read == "function" && (this._read = o.read), typeof o.destroy == "function" && (this._destroy = o.destroy)), r.call(this);
  }
  Object.defineProperty(I.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(a) {
      this._readableState && (this._readableState.destroyed = a);
    }
  }), I.prototype.destroy = L.destroy, I.prototype._undestroy = L.undestroy, I.prototype._destroy = function(o, a) {
    a(o);
  }, I.prototype.push = function(o, a) {
    var b = this._readableState, T;
    return b.objectMode ? T = !0 : typeof o == "string" && (a = a || b.defaultEncoding, a !== b.encoding && (o = n.from(o, a), a = ""), T = !0), K(this, o, a, !1, T);
  }, I.prototype.unshift = function(o) {
    return K(this, o, null, !0, !1);
  };
  function K(o, a, b, T, G) {
    p("readableAddChunk", a);
    var k = o._readableState;
    if (a === null)
      k.reading = !1, ae(o, k);
    else {
      var x;
      if (G || (x = Z(k, a)), x)
        P(o, x);
      else if (k.objectMode || a && a.length > 0)
        if (typeof a != "string" && !k.objectMode && Object.getPrototypeOf(a) !== n.prototype && (a = c(a)), T)
          k.endEmitted ? P(o, new s()) : X(o, k, a, !0);
        else if (k.ended)
          P(o, new C());
        else {
          if (k.destroyed)
            return !1;
          k.reading = !1, k.decoder && !b ? (a = k.decoder.write(a), k.objectMode || a.length !== 0 ? X(o, k, a, !1) : Y(o, k)) : X(o, k, a, !1);
        }
      else
        T || (k.reading = !1, Y(o, k));
    }
    return !k.ended && (k.length < k.highWaterMark || k.length === 0);
  }
  function X(o, a, b, T) {
    a.flowing && a.length === 0 && !a.sync ? (a.awaitDrain = 0, o.emit("data", b)) : (a.length += a.objectMode ? 1 : b.length, T ? a.buffer.unshift(b) : a.buffer.push(b), a.needReadable && te(o)), Y(o, a);
  }
  function Z(o, a) {
    var b;
    return !l(a) && typeof a != "string" && a !== void 0 && !o.objectMode && (b = new O("chunk", ["string", "Buffer", "Uint8Array"], a)), b;
  }
  I.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, I.prototype.setEncoding = function(o) {
    m || (m = ur().StringDecoder);
    var a = new m(o);
    this._readableState.decoder = a, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var b = this._readableState.buffer.head, T = ""; b !== null; )
      T += a.write(b.data), b = b.next;
    return this._readableState.buffer.clear(), T !== "" && this._readableState.buffer.push(T), this._readableState.length = T.length, this;
  };
  var ie = 1073741824;
  function Q(o) {
    return o >= ie ? o = ie : (o--, o |= o >>> 1, o |= o >>> 2, o |= o >>> 4, o |= o >>> 8, o |= o >>> 16, o++), o;
  }
  function oe(o, a) {
    return o <= 0 || a.length === 0 && a.ended ? 0 : a.objectMode ? 1 : o !== o ? a.flowing && a.length ? a.buffer.head.data.length : a.length : (o > a.highWaterMark && (a.highWaterMark = Q(o)), o <= a.length ? o : a.ended ? a.length : (a.needReadable = !0, 0));
  }
  I.prototype.read = function(o) {
    p("read", o), o = parseInt(o, 10);
    var a = this._readableState, b = o;
    if (o !== 0 && (a.emittedReadable = !1), o === 0 && a.needReadable && ((a.highWaterMark !== 0 ? a.length >= a.highWaterMark : a.length > 0) || a.ended))
      return p("read: emitReadable", a.length, a.ended), a.length === 0 && a.ended ? y(this) : te(this), null;
    if (o = oe(o, a), o === 0 && a.ended)
      return a.length === 0 && y(this), null;
    var T = a.needReadable;
    p("need readable", T), (a.length === 0 || a.length - o < a.highWaterMark) && (T = !0, p("length less than watermark", T)), a.ended || a.reading ? (T = !1, p("reading or ended", T)) : T && (p("do read"), a.reading = !0, a.sync = !0, a.length === 0 && (a.needReadable = !0), this._read(a.highWaterMark), a.sync = !1, a.reading || (o = oe(b, a)));
    var G;
    return o > 0 ? G = f(o, a) : G = null, G === null ? (a.needReadable = a.length <= a.highWaterMark, o = 0) : (a.length -= o, a.awaitDrain = 0), a.length === 0 && (a.ended || (a.needReadable = !0), b !== o && a.ended && y(this)), G !== null && this.emit("data", G), G;
  };
  function ae(o, a) {
    if (p("onEofChunk"), !a.ended) {
      if (a.decoder) {
        var b = a.decoder.end();
        b && b.length && (a.buffer.push(b), a.length += a.objectMode ? 1 : b.length);
      }
      a.ended = !0, a.sync ? te(o) : (a.needReadable = !1, a.emittedReadable || (a.emittedReadable = !0, re(o)));
    }
  }
  function te(o) {
    var a = o._readableState;
    p("emitReadable", a.needReadable, a.emittedReadable), a.needReadable = !1, a.emittedReadable || (p("emitReadable", a.flowing), a.emittedReadable = !0, U.nextTick(re, o));
  }
  function re(o) {
    var a = o._readableState;
    p("emitReadable_", a.destroyed, a.length, a.ended), !a.destroyed && (a.length || a.ended) && (o.emit("readable"), a.emittedReadable = !1), a.needReadable = !a.flowing && !a.ended && a.length <= a.highWaterMark, u(o);
  }
  function Y(o, a) {
    a.readingMore || (a.readingMore = !0, U.nextTick(ne, o, a));
  }
  function ne(o, a) {
    for (; !a.reading && !a.ended && (a.length < a.highWaterMark || a.flowing && a.length === 0); ) {
      var b = a.length;
      if (p("maybeReadMore read 0"), o.read(0), b === a.length)
        break;
    }
    a.readingMore = !1;
  }
  I.prototype._read = function(o) {
    P(this, new M("_read()"));
  }, I.prototype.pipe = function(o, a) {
    var b = this, T = this._readableState;
    switch (T.pipesCount) {
      case 0:
        T.pipes = o;
        break;
      case 1:
        T.pipes = [T.pipes, o];
        break;
      default:
        T.pipes.push(o);
        break;
    }
    T.pipesCount += 1, p("pipe count=%d opts=%j", T.pipesCount, a);
    var G = (!a || a.end !== !1) && o !== U.stdout && o !== U.stderr, k = G ? se : Te;
    T.endEmitted ? U.nextTick(k) : b.once("end", k), o.on("unpipe", x);
    function x(ge, ve) {
      p("onunpipe"), ge === b && ve && ve.hasUnpiped === !1 && (ve.hasUnpiped = !0, kt());
    }
    function se() {
      p("onend"), o.end();
    }
    var v = ue(b);
    o.on("drain", v);
    var je = !1;
    function kt() {
      p("cleanup"), o.removeListener("close", Xe), o.removeListener("finish", Ze), o.removeListener("drain", v), o.removeListener("error", Je), o.removeListener("unpipe", x), b.removeListener("end", se), b.removeListener("end", Te), b.removeListener("data", $t), je = !0, T.awaitDrain && (!o._writableState || o._writableState.needDrain) && v();
    }
    b.on("data", $t);
    function $t(ge) {
      p("ondata");
      var ve = o.write(ge);
      p("dest.write", ve), ve === !1 && ((T.pipesCount === 1 && T.pipes === o || T.pipesCount > 1 && j(T.pipes, o) !== -1) && !je && (p("false write response, pause", T.awaitDrain), T.awaitDrain++), b.pause());
    }
    function Je(ge) {
      p("onerror", ge), Te(), o.removeListener("error", Je), t(o, "error") === 0 && P(o, ge);
    }
    q(o, "error", Je);
    function Xe() {
      o.removeListener("finish", Ze), Te();
    }
    o.once("close", Xe);
    function Ze() {
      p("onfinish"), o.removeListener("close", Xe), Te();
    }
    o.once("finish", Ze);
    function Te() {
      p("unpipe"), b.unpipe(o);
    }
    return o.emit("pipe", b), T.flowing || (p("pipe resume"), b.resume()), o;
  };
  function ue(o) {
    return function() {
      var b = o._readableState;
      p("pipeOnDrain", b.awaitDrain), b.awaitDrain && b.awaitDrain--, b.awaitDrain === 0 && t(o, "data") && (b.flowing = !0, u(o));
    };
  }
  I.prototype.unpipe = function(o) {
    var a = this._readableState, b = {
      hasUnpiped: !1
    };
    if (a.pipesCount === 0)
      return this;
    if (a.pipesCount === 1)
      return o && o !== a.pipes ? this : (o || (o = a.pipes), a.pipes = null, a.pipesCount = 0, a.flowing = !1, o && o.emit("unpipe", this, b), this);
    if (!o) {
      var T = a.pipes, G = a.pipesCount;
      a.pipes = null, a.pipesCount = 0, a.flowing = !1;
      for (var k = 0; k < G; k++)
        T[k].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var x = j(a.pipes, o);
    return x === -1 ? this : (a.pipes.splice(x, 1), a.pipesCount -= 1, a.pipesCount === 1 && (a.pipes = a.pipes[0]), o.emit("unpipe", this, b), this);
  }, I.prototype.on = function(o, a) {
    var b = r.prototype.on.call(this, o, a), T = this._readableState;
    return o === "data" ? (T.readableListening = this.listenerCount("readable") > 0, T.flowing !== !1 && this.resume()) : o === "readable" && !T.endEmitted && !T.readableListening && (T.readableListening = T.needReadable = !0, T.flowing = !1, T.emittedReadable = !1, p("on readable", T.length, T.reading), T.length ? te(this) : T.reading || U.nextTick(g, this)), b;
  }, I.prototype.addListener = I.prototype.on, I.prototype.removeListener = function(o, a) {
    var b = r.prototype.removeListener.call(this, o, a);
    return o === "readable" && U.nextTick(d, this), b;
  }, I.prototype.removeAllListeners = function(o) {
    var a = r.prototype.removeAllListeners.apply(this, arguments);
    return (o === "readable" || o === void 0) && U.nextTick(d, this), a;
  };
  function d(o) {
    var a = o._readableState;
    a.readableListening = o.listenerCount("readable") > 0, a.resumeScheduled && !a.paused ? a.flowing = !0 : o.listenerCount("data") > 0 && o.resume();
  }
  function g(o) {
    p("readable nexttick read 0"), o.read(0);
  }
  I.prototype.resume = function() {
    var o = this._readableState;
    return o.flowing || (p("resume"), o.flowing = !o.readableListening, _(this, o)), o.paused = !1, this;
  };
  function _(o, a) {
    a.resumeScheduled || (a.resumeScheduled = !0, U.nextTick(D, o, a));
  }
  function D(o, a) {
    p("resume", a.reading), a.reading || o.read(0), a.resumeScheduled = !1, o.emit("resume"), u(o), a.flowing && !a.reading && o.read(0);
  }
  I.prototype.pause = function() {
    return p("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function u(o) {
    var a = o._readableState;
    for (p("flow", a.flowing); a.flowing && o.read() !== null; )
      ;
  }
  I.prototype.wrap = function(o) {
    var a = this, b = this._readableState, T = !1;
    o.on("end", function() {
      if (p("wrapped end"), b.decoder && !b.ended) {
        var x = b.decoder.end();
        x && x.length && a.push(x);
      }
      a.push(null);
    }), o.on("data", function(x) {
      if (p("wrapped data"), b.decoder && (x = b.decoder.write(x)), !(b.objectMode && x == null) && !(!b.objectMode && (!x || !x.length))) {
        var se = a.push(x);
        se || (T = !0, o.pause());
      }
    });
    for (var G in o)
      this[G] === void 0 && typeof o[G] == "function" && (this[G] = /* @__PURE__ */ function(se) {
        return function() {
          return o[se].apply(o, arguments);
        };
      }(G));
    for (var k = 0; k < B.length; k++)
      o.on(B[k], this.emit.bind(this, B[k]));
    return this._read = function(x) {
      p("wrapped _read", x), T && (T = !1, o.resume());
    }, this;
  }, typeof Symbol == "function" && (I.prototype[Symbol.asyncIterator] = function() {
    return S === void 0 && (S = lo()), S(this);
  }), Object.defineProperty(I.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(I.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(I.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(a) {
      this._readableState && (this._readableState.flowing = a);
    }
  }), I._fromList = f, Object.defineProperty(I.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function f(o, a) {
    if (a.length === 0)
      return null;
    var b;
    return a.objectMode ? b = a.buffer.shift() : !o || o >= a.length ? (a.decoder ? b = a.buffer.join("") : a.buffer.length === 1 ? b = a.buffer.first() : b = a.buffer.concat(a.length), a.buffer.clear()) : b = a.buffer.consume(o, a.decoder), b;
  }
  function y(o) {
    var a = o._readableState;
    p("endReadable", a.endEmitted), a.endEmitted || (a.ended = !0, U.nextTick(w, a, o));
  }
  function w(o, a) {
    if (p("endReadableNT", o.endEmitted, o.length), !o.endEmitted && o.length === 0 && (o.endEmitted = !0, a.readable = !1, a.emit("end"), o.autoDestroy)) {
      var b = a._writableState;
      (!b || b.autoDestroy && b.finished) && a.destroy();
    }
  }
  typeof Symbol == "function" && (I.from = function(o, a) {
    return R === void 0 && (R = co()), R(I, o, a);
  });
  function j(o, a) {
    for (var b = 0, T = o.length; b < T; b++)
      if (o[b] === a)
        return b;
    return -1;
  }
  return yt;
}
var Zr = fe, Ke = ye.codes, po = Ke.ERR_METHOD_NOT_IMPLEMENTED, ho = Ke.ERR_MULTIPLE_CALLBACK, yo = Ke.ERR_TRANSFORM_ALREADY_TRANSFORMING, go = Ke.ERR_TRANSFORM_WITH_LENGTH_0, Ye = Re();
le(fe, Ye);
function vo(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new ho());
  r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function fe(e) {
  if (!(this instanceof fe))
    return new fe(e);
  Ye.call(this, e), this._transformState = {
    afterTransform: vo.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", bo);
}
function bo() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
    pr(e, t, r);
  }) : pr(this, null, null);
}
fe.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, Ye.prototype.push.call(this, e, t);
};
fe.prototype._transform = function(e, t, r) {
  r(new po("_transform()"));
};
fe.prototype._write = function(e, t, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
};
fe.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
fe.prototype._destroy = function(e, t) {
  Ye.prototype._destroy.call(this, e, function(r) {
    t(r);
  });
};
function pr(e, t, r) {
  if (t)
    return e.emit("error", t);
  if (r != null && e.push(r), e._writableState.length)
    throw new go();
  if (e._transformState.transforming)
    throw new yo();
  return e.push(null);
}
var mo = Oe, Qr = Zr;
le(Oe, Qr);
function Oe(e) {
  if (!(this instanceof Oe))
    return new Oe(e);
  Qr.call(this, e);
}
Oe.prototype._transform = function(e, t, r) {
  r(null, e);
};
var gt;
function _o(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var en = ye.codes, wo = en.ERR_MISSING_ARGS, So = en.ERR_STREAM_DESTROYED;
function hr(e) {
  if (e)
    throw e;
}
function Eo(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Ao(e, t, r, n) {
  n = _o(n);
  var i = !1;
  e.on("close", function() {
    i = !0;
  }), gt === void 0 && (gt = Bt), gt(e, {
    readable: t,
    writable: r
  }, function(l) {
    if (l)
      return n(l);
    i = !0, n();
  });
  var c = !1;
  return function(l) {
    if (!i && !c) {
      if (c = !0, Eo(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      n(l || new So("pipe"));
    }
  };
}
function yr(e) {
  e();
}
function Ro(e, t) {
  return e.pipe(t);
}
function To(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? hr : e.pop();
}
function Oo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = To(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new wo("streams");
  var i, c = t.map(function(l, h) {
    var p = h < t.length - 1, A = h > 0;
    return Ao(l, p, A, function(L) {
      i || (i = L), L && c.forEach(yr), !p && (c.forEach(yr), n(i));
    });
  });
  return t.reduce(Ro);
}
var Po = Oo;
(function(e, t) {
  t = e.exports = Xr(), t.Stream = t, t.Readable = t, t.Writable = Yr(), t.Duplex = Re(), t.Transform = Zr, t.PassThrough = mo, t.finished = Bt, t.pipeline = Po;
})(bt, bt.exports);
var tn = bt.exports, gr = Ot, Mo = le, rn = tn, Ce = xe.readyStates = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
}, Ft = xe.IncomingMessage = function(e, t, r, n) {
  var i = this;
  if (rn.Readable.call(i), i._mode = r, i.headers = {}, i.rawHeaders = [], i.trailers = {}, i.rawTrailers = [], i.on("end", function() {
    U.nextTick(function() {
      i.emit("close");
    });
  }), r === "fetch") {
    let L = function() {
      l.read().then(function(E) {
        if (!i._destroyed) {
          if (n(E.done), E.done) {
            i.push(null);
            return;
          }
          i.push(ce.from(E.value)), L();
        }
      }).catch(function(E) {
        n(!0), i._destroyed || i.emit("error", E);
      });
    };
    if (i._fetchResponse = t, i.url = t.url, i.statusCode = t.status, i.statusMessage = t.statusText, t.headers.forEach(function(E, N) {
      i.headers[N.toLowerCase()] = E, i.rawHeaders.push(N, E);
    }), gr.writableStream) {
      var c = new WritableStream({
        write: function(E) {
          return n(!1), new Promise(function(N, W) {
            i._destroyed ? W() : i.push(ce.from(E)) ? N() : i._resumeFetch = N;
          });
        },
        close: function() {
          n(!0), i._destroyed || i.push(null);
        },
        abort: function(E) {
          n(!0), i._destroyed || i.emit("error", E);
        }
      });
      try {
        t.body.pipeTo(c).catch(function(E) {
          n(!0), i._destroyed || i.emit("error", E);
        });
        return;
      } catch {
      }
    }
    var l = t.body.getReader();
    L();
  } else {
    i._xhr = e, i._pos = 0, i.url = e.responseURL, i.statusCode = e.status, i.statusMessage = e.statusText;
    var h = e.getAllResponseHeaders().split(/\r?\n/);
    if (h.forEach(function(L) {
      var E = L.match(/^([^:]+):\s*(.*)/);
      if (E) {
        var N = E[1].toLowerCase();
        N === "set-cookie" ? (i.headers[N] === void 0 && (i.headers[N] = []), i.headers[N].push(E[2])) : i.headers[N] !== void 0 ? i.headers[N] += ", " + E[2] : i.headers[N] = E[2], i.rawHeaders.push(E[1], E[2]);
      }
    }), i._charset = "x-user-defined", !gr.overrideMimeType) {
      var p = i.rawHeaders["mime-type"];
      if (p) {
        var A = p.match(/;\s*charset=([^;])(;|$)/);
        A && (i._charset = A[1].toLowerCase());
      }
      i._charset || (i._charset = "utf-8");
    }
  }
};
Mo(Ft, rn.Readable);
Ft.prototype._read = function() {
  var e = this, t = e._resumeFetch;
  t && (e._resumeFetch = null, t());
};
Ft.prototype._onXHRProgress = function(e) {
  var t = this, r = t._xhr, n = null;
  switch (t._mode) {
    case "text":
      if (n = r.responseText, n.length > t._pos) {
        var i = n.substr(t._pos);
        if (t._charset === "x-user-defined") {
          for (var c = ce.alloc(i.length), l = 0; l < i.length; l++)
            c[l] = i.charCodeAt(l) & 255;
          t.push(c);
        } else
          t.push(i, t._charset);
        t._pos = n.length;
      }
      break;
    case "arraybuffer":
      if (r.readyState !== Ce.DONE || !r.response)
        break;
      n = r.response, t.push(ce.from(new Uint8Array(n)));
      break;
    case "moz-chunked-arraybuffer":
      if (n = r.response, r.readyState !== Ce.LOADING || !n)
        break;
      t.push(ce.from(new Uint8Array(n)));
      break;
    case "ms-stream":
      if (n = r.response, r.readyState !== Ce.LOADING)
        break;
      var h = new V.MSStreamReader();
      h.onprogress = function() {
        h.result.byteLength > t._pos && (t.push(ce.from(new Uint8Array(h.result.slice(t._pos)))), t._pos = h.result.byteLength);
      }, h.onload = function() {
        e(!0), t.push(null);
      }, h.readAsArrayBuffer(n);
      break;
  }
  t._xhr.readyState === Ce.DONE && t._mode !== "ms-stream" && (e(!0), t.push(null));
};
var de = Ot, jo = le, nn = xe, Ut = tn, Lo = nn.IncomingMessage, vr = nn.readyStates;
function Co(e, t) {
  return de.fetch && t ? "fetch" : de.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : de.msstream ? "ms-stream" : de.arraybuffer && e ? "arraybuffer" : "text";
}
var J = mr.exports = function(e) {
  var t = this;
  Ut.Writable.call(t), t._opts = e, t._body = [], t._headers = {}, e.auth && t.setHeader("Authorization", "Basic " + ce.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(i) {
    t.setHeader(i, e.headers[i]);
  });
  var r, n = !0;
  if (e.mode === "disable-fetch" || "requestTimeout" in e && !de.abortController)
    n = !1, r = !0;
  else if (e.mode === "prefer-streaming")
    r = !1;
  else if (e.mode === "allow-wrong-content-type")
    r = !de.overrideMimeType;
  else if (!e.mode || e.mode === "default" || e.mode === "prefer-fast")
    r = !0;
  else
    throw new Error("Invalid value for opts.mode");
  t._mode = Co(r, n), t._fetchTimer = null, t._socketTimeout = null, t._socketTimer = null, t.on("finish", function() {
    t._onFinish();
  });
};
jo(J, Ut.Writable);
J.prototype.setHeader = function(e, t) {
  var r = this, n = e.toLowerCase();
  Io.indexOf(n) === -1 && (r._headers[n] = {
    name: e,
    value: t
  });
};
J.prototype.getHeader = function(e) {
  var t = this._headers[e.toLowerCase()];
  return t ? t.value : null;
};
J.prototype.removeHeader = function(e) {
  var t = this;
  delete t._headers[e.toLowerCase()];
};
J.prototype._onFinish = function() {
  var e = this;
  if (!e._destroyed) {
    var t = e._opts;
    "timeout" in t && t.timeout !== 0 && e.setTimeout(t.timeout);
    var r = e._headers, n = null;
    t.method !== "GET" && t.method !== "HEAD" && (n = new Blob(e._body, {
      type: (r["content-type"] || {}).value || ""
    }));
    var i = [];
    if (Object.keys(r).forEach(function(p) {
      var A = r[p].name, L = r[p].value;
      Array.isArray(L) ? L.forEach(function(E) {
        i.push([A, E]);
      }) : i.push([A, L]);
    }), e._mode === "fetch") {
      var c = null;
      if (de.abortController) {
        var l = new AbortController();
        c = l.signal, e._fetchAbortController = l, "requestTimeout" in t && t.requestTimeout !== 0 && (e._fetchTimer = V.setTimeout(function() {
          e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort();
        }, t.requestTimeout));
      }
      V.fetch(e._opts.url, {
        method: e._opts.method,
        headers: i,
        body: n || void 0,
        mode: "cors",
        credentials: t.withCredentials ? "include" : "same-origin",
        signal: c
      }).then(function(p) {
        e._fetchResponse = p, e._resetTimers(!1), e._connect();
      }, function(p) {
        e._resetTimers(!0), e._destroyed || e.emit("error", p);
      });
    } else {
      var h = e._xhr = new V.XMLHttpRequest();
      try {
        h.open(e._opts.method, e._opts.url, !0);
      } catch (p) {
        U.nextTick(function() {
          e.emit("error", p);
        });
        return;
      }
      "responseType" in h && (h.responseType = e._mode), "withCredentials" in h && (h.withCredentials = !!t.withCredentials), e._mode === "text" && "overrideMimeType" in h && h.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (h.timeout = t.requestTimeout, h.ontimeout = function() {
        e.emit("requestTimeout");
      }), i.forEach(function(p) {
        h.setRequestHeader(p[0], p[1]);
      }), e._response = null, h.onreadystatechange = function() {
        switch (h.readyState) {
          case vr.LOADING:
          case vr.DONE:
            e._onXHRProgress();
            break;
        }
      }, e._mode === "moz-chunked-arraybuffer" && (h.onprogress = function() {
        e._onXHRProgress();
      }), h.onerror = function() {
        e._destroyed || (e._resetTimers(!0), e.emit("error", new Error("XHR error")));
      };
      try {
        h.send(n);
      } catch (p) {
        U.nextTick(function() {
          e.emit("error", p);
        });
        return;
      }
    }
  }
};
function No(e) {
  try {
    var t = e.status;
    return t !== null && t !== 0;
  } catch {
    return !1;
  }
}
J.prototype._onXHRProgress = function() {
  var e = this;
  e._resetTimers(!1), !(!No(e._xhr) || e._destroyed) && (e._response || e._connect(), e._response._onXHRProgress(e._resetTimers.bind(e)));
};
J.prototype._connect = function() {
  var e = this;
  e._destroyed || (e._response = new Lo(e._xhr, e._fetchResponse, e._mode, e._resetTimers.bind(e)), e._response.on("error", function(t) {
    e.emit("error", t);
  }), e.emit("response", e._response));
};
J.prototype._write = function(e, t, r) {
  var n = this;
  n._body.push(e), r();
};
J.prototype._resetTimers = function(e) {
  var t = this;
  V.clearTimeout(t._socketTimer), t._socketTimer = null, e ? (V.clearTimeout(t._fetchTimer), t._fetchTimer = null) : t._socketTimeout && (t._socketTimer = V.setTimeout(function() {
    t.emit("timeout");
  }, t._socketTimeout));
};
J.prototype.abort = J.prototype.destroy = function(e) {
  var t = this;
  t._destroyed = !0, t._resetTimers(!0), t._response && (t._response._destroyed = !0), t._xhr ? t._xhr.abort() : t._fetchAbortController && t._fetchAbortController.abort(), e && t.emit("error", e);
};
J.prototype.end = function(e, t, r) {
  var n = this;
  typeof e == "function" && (r = e, e = void 0), Ut.Writable.prototype.end.call(n, e, t, r);
};
J.prototype.setTimeout = function(e, t) {
  var r = this;
  t && r.once("timeout", t), r._socketTimeout = e, r._resetTimers(!1);
};
J.prototype.flushHeaders = function() {
};
J.prototype.setNoDelay = function() {
};
J.prototype.setSocketKeepAlive = function() {
};
var Io = [
  "accept-charset",
  "accept-encoding",
  "access-control-request-headers",
  "access-control-request-method",
  "connection",
  "content-length",
  "cookie",
  "cookie2",
  "date",
  "dnt",
  "expect",
  "host",
  "keep-alive",
  "origin",
  "referer",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "via"
], Do = mr.exports, Bo = Uo, Fo = Object.prototype.hasOwnProperty;
function Uo() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Fo.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
var ko = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Unordered Collection",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
const $o = /* @__PURE__ */ br(fn);
(function(e) {
  var t = Do, r = xe, n = Bo, i = ko, c = $o, l = e;
  l.request = function(h, p) {
    typeof h == "string" ? h = c.parse(h) : h = n(h);
    var A = V.location.protocol.search(/^https?:$/) === -1 ? "http:" : "", L = h.protocol || A, E = h.hostname || h.host, N = h.port, W = h.path || "/";
    E && E.indexOf(":") !== -1 && (E = "[" + E + "]"), h.url = (E ? L + "//" + E : "") + (N ? ":" + N : "") + W, h.method = (h.method || "GET").toUpperCase(), h.headers = h.headers || {};
    var O = new t(h);
    return p && O.on("response", p), O;
  }, l.get = function(p, A) {
    var L = l.request(p, A);
    return L.end(), L;
  }, l.ClientRequest = t, l.IncomingMessage = r.IncomingMessage, l.Agent = function() {
  }, l.Agent.defaultMaxSockets = 4, l.globalAgent = new l.Agent(), l.STATUS_CODES = i, l.METHODS = [
    "CHECKOUT",
    "CONNECT",
    "COPY",
    "DELETE",
    "GET",
    "HEAD",
    "LOCK",
    "M-SEARCH",
    "MERGE",
    "MKACTIVITY",
    "MKCOL",
    "MOVE",
    "NOTIFY",
    "OPTIONS",
    "PATCH",
    "POST",
    "PROPFIND",
    "PROPPATCH",
    "PURGE",
    "PUT",
    "REPORT",
    "SEARCH",
    "SUBSCRIBE",
    "TRACE",
    "UNLOCK",
    "UNSUBSCRIBE"
  ];
})(Tt);
const Wo = /* @__PURE__ */ an(Tt), Ho = /* @__PURE__ */ un({
  __proto__: null,
  default: Wo
}, [Tt]);
export {
  Ho as i,
  $o as r,
  Tt as s
};
