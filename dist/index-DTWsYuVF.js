var H1 = Object.defineProperty;
var j1 = (r, t, e) => t in r ? H1(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var dt = (r, t, e) => (j1(r, typeof t != "symbol" ? t + "" : t, e), e), xp = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var a = (r, t, e) => (xp(r, t, "read from private field"), e ? e.call(r) : t.get(r)), m = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, w = (r, t, e, n) => (xp(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var qe = (r, t, e, n) => ({
  set _(i) {
    w(r, t, i, e);
  },
  get _() {
    return a(r, t, n);
  }
}), A = (r, t, e) => (xp(r, t, "access private method"), e);
import { jsx as $, jsxs as We, Fragment as Kv } from "react/jsx-runtime";
import Ks, { useMemo as fn, useRef as Rn, useDebugValue as R0, createElement as z1, useContext as Re, createContext as qf, forwardRef as jm, useReducer as zm, useEffect as _t, useImperativeHandle as Zv, useCallback as Va, useState as Ga, useLayoutEffect as V1, memo as G1 } from "react";
var rl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function V2(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var tl = function(r) {
  return r && r.Math === Math && r;
}, ii = (
  // eslint-disable-next-line es/no-global-this -- safe
  tl(typeof globalThis == "object" && globalThis) || tl(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  tl(typeof self == "object" && self) || tl(typeof rl == "object" && rl) || tl(typeof rl == "object" && rl) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Vm = {}, Tr = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, W1 = Tr, so = !W1(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), q1 = Tr, Qv = !q1(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), X1 = Qv, id = Function.prototype.call, Gm = X1 ? id.bind(id) : function() {
  return id.apply(id, arguments);
}, ty = {}, ey = {}.propertyIsEnumerable, ny = Object.getOwnPropertyDescriptor, Y1 = ny && !ey.call({ 1: 2 }, 1);
ty.f = Y1 ? function(t) {
  var e = ny(this, t);
  return !!e && e.enumerable;
} : ey;
var iy = function(r, t) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: t
  };
}, ry = Qv, sy = Function.prototype, ng = sy.call, K1 = ry && sy.bind.bind(ng, ng), Wi = ry ? K1 : function(r) {
  return function() {
    return ng.apply(r, arguments);
  };
}, oy = Wi, Z1 = oy({}.toString), J1 = oy("".slice), Q1 = function(r) {
  return J1(Z1(r), 8, -1);
}, tA = Wi, eA = Tr, nA = Q1, Cp = Object, iA = tA("".split), rA = eA(function() {
  return !Cp("z").propertyIsEnumerable(0);
}) ? function(r) {
  return nA(r) === "String" ? iA(r, "") : Cp(r);
} : Cp, ay = function(r) {
  return r == null;
}, sA = ay, oA = TypeError, ly = function(r) {
  if (sA(r))
    throw new oA("Can't call method on " + r);
  return r;
}, aA = rA, lA = ly, Wm = function(r) {
  return aA(lA(r));
}, Tp = typeof document == "object" && document.all, ri = typeof Tp > "u" && Tp !== void 0 ? function(r) {
  return typeof r == "function" || r === Tp;
} : function(r) {
  return typeof r == "function";
}, cA = ri, Yh = function(r) {
  return typeof r == "object" ? r !== null : cA(r);
}, Pp = ii, hA = ri, dA = function(r) {
  return hA(r) ? r : void 0;
}, cy = function(r, t) {
  return arguments.length < 2 ? dA(Pp[r]) : Pp[r] && Pp[r][t];
}, uA = Wi, fA = uA({}.isPrototypeOf), pA = typeof navigator < "u" && String(navigator.userAgent) || "", hy = ii, Rp = pA, L0 = hy.process, k0 = hy.Deno, I0 = L0 && L0.versions || k0 && k0.version, F0 = I0 && I0.v8, Pn, Yd;
F0 && (Pn = F0.split("."), Yd = Pn[0] > 0 && Pn[0] < 4 ? 1 : +(Pn[0] + Pn[1]));
!Yd && Rp && (Pn = Rp.match(/Edge\/(\d+)/), (!Pn || Pn[1] >= 74) && (Pn = Rp.match(/Chrome\/(\d+)/), Pn && (Yd = +Pn[1])));
var gA = Yd, M0 = gA, mA = Tr, vA = ii, yA = vA.String, dy = !!Object.getOwnPropertySymbols && !mA(function() {
  var r = Symbol("symbol detection");
  return !yA(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && M0 && M0 < 41;
}), bA = dy, uy = bA && !Symbol.sham && typeof Symbol.iterator == "symbol", wA = cy, AA = ri, EA = fA, _A = uy, SA = Object, fy = _A ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var t = wA("Symbol");
  return AA(t) && EA(t.prototype, SA(r));
}, xA = String, CA = function(r) {
  try {
    return xA(r);
  } catch {
    return "Object";
  }
}, TA = ri, PA = CA, RA = TypeError, py = function(r) {
  if (TA(r))
    return r;
  throw new RA(PA(r) + " is not a function");
}, LA = py, kA = ay, IA = function(r, t) {
  var e = r[t];
  return kA(e) ? void 0 : LA(e);
}, Lp = Gm, kp = ri, Ip = Yh, FA = TypeError, MA = function(r, t) {
  var e, n;
  if (t === "string" && kp(e = r.toString) && !Ip(n = Lp(e, r)) || kp(e = r.valueOf) && !Ip(n = Lp(e, r)) || t !== "string" && kp(e = r.toString) && !Ip(n = Lp(e, r)))
    return n;
  throw new FA("Can't convert object to primitive value");
}, gy = { exports: {} }, D0 = ii, DA = Object.defineProperty, qm = function(r, t) {
  try {
    DA(D0, r, { value: t, configurable: !0, writable: !0 });
  } catch {
    D0[r] = t;
  }
  return t;
}, OA = ii, NA = qm, O0 = "__core-js_shared__", N0 = gy.exports = OA[O0] || NA(O0, {});
(N0.versions || (N0.versions = [])).push({
  version: "3.37.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Xm = gy.exports, B0 = Xm, my = function(r, t) {
  return B0[r] || (B0[r] = t || {});
}, BA = ly, $A = Object, UA = function(r) {
  return $A(BA(r));
}, HA = Wi, jA = UA, zA = HA({}.hasOwnProperty), oo = Object.hasOwn || function(t, e) {
  return zA(jA(t), e);
}, VA = Wi, GA = 0, WA = Math.random(), qA = VA(1 .toString), vy = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + qA(++GA + WA, 36);
}, XA = ii, YA = my, $0 = oo, KA = vy, ZA = dy, JA = uy, Ao = XA.Symbol, Fp = YA("wks"), QA = JA ? Ao.for || Ao : Ao && Ao.withoutSetter || KA, tE = function(r) {
  return $0(Fp, r) || (Fp[r] = ZA && $0(Ao, r) ? Ao[r] : QA("Symbol." + r)), Fp[r];
}, eE = Gm, U0 = Yh, H0 = fy, nE = IA, iE = MA, rE = tE, sE = TypeError, oE = rE("toPrimitive"), aE = function(r, t) {
  if (!U0(r) || H0(r))
    return r;
  var e = nE(r, oE), n;
  if (e) {
    if (t === void 0 && (t = "default"), n = eE(e, r, t), !U0(n) || H0(n))
      return n;
    throw new sE("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), iE(r, t);
}, lE = aE, cE = fy, yy = function(r) {
  var t = lE(r, "string");
  return cE(t) ? t : t + "";
}, hE = ii, j0 = Yh, ig = hE.document, dE = j0(ig) && j0(ig.createElement), uE = function(r) {
  return dE ? ig.createElement(r) : {};
}, fE = so, pE = Tr, gE = uE, by = !fE && !pE(function() {
  return Object.defineProperty(gE("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), mE = so, vE = Gm, yE = ty, bE = iy, wE = Wm, AE = yy, EE = oo, _E = by, z0 = Object.getOwnPropertyDescriptor;
Vm.f = mE ? z0 : function(t, e) {
  if (t = wE(t), e = AE(e), _E)
    try {
      return z0(t, e);
    } catch {
    }
  if (EE(t, e))
    return bE(!vE(yE.f, t, e), t[e]);
};
var Xf = {}, SE = so, xE = Tr, CE = SE && xE(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), TE = Yh, PE = String, RE = TypeError, wy = function(r) {
  if (TE(r))
    return r;
  throw new RE(PE(r) + " is not an object");
}, LE = so, kE = by, IE = CE, rd = wy, V0 = yy, FE = TypeError, Mp = Object.defineProperty, ME = Object.getOwnPropertyDescriptor, Dp = "enumerable", Op = "configurable", Np = "writable";
Xf.f = LE ? IE ? function(t, e, n) {
  if (rd(t), e = V0(e), rd(n), typeof t == "function" && e === "prototype" && "value" in n && Np in n && !n[Np]) {
    var i = ME(t, e);
    i && i[Np] && (t[e] = n.value, n = {
      configurable: Op in n ? n[Op] : i[Op],
      enumerable: Dp in n ? n[Dp] : i[Dp],
      writable: !1
    });
  }
  return Mp(t, e, n);
} : Mp : function(t, e, n) {
  if (rd(t), e = V0(e), rd(n), kE)
    try {
      return Mp(t, e, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new FE("Accessors not supported");
  return "value" in n && (t[e] = n.value), t;
};
var DE = so, OE = Xf, NE = iy, Ay = DE ? function(r, t, e) {
  return OE.f(r, t, NE(1, e));
} : function(r, t, e) {
  return r[t] = e, r;
}, Ey = { exports: {} }, rg = so, BE = oo, _y = Function.prototype, $E = rg && Object.getOwnPropertyDescriptor, Ym = BE(_y, "name"), UE = Ym && (function() {
}).name === "something", HE = Ym && (!rg || rg && $E(_y, "name").configurable), jE = {
  EXISTS: Ym,
  PROPER: UE,
  CONFIGURABLE: HE
}, zE = Wi, VE = ri, sg = Xm, GE = zE(Function.toString);
VE(sg.inspectSource) || (sg.inspectSource = function(r) {
  return GE(r);
});
var WE = sg.inspectSource, qE = ii, XE = ri, G0 = qE.WeakMap, YE = XE(G0) && /native code/.test(String(G0)), KE = my, ZE = vy, W0 = KE("keys"), JE = function(r) {
  return W0[r] || (W0[r] = ZE(r));
}, Sy = {}, QE = YE, xy = ii, t_ = Yh, e_ = Ay, Bp = oo, $p = Xm, n_ = JE, i_ = Sy, q0 = "Object already initialized", og = xy.TypeError, r_ = xy.WeakMap, Kd, xl, Zd, s_ = function(r) {
  return Zd(r) ? xl(r) : Kd(r, {});
}, o_ = function(r) {
  return function(t) {
    var e;
    if (!t_(t) || (e = xl(t)).type !== r)
      throw new og("Incompatible receiver, " + r + " required");
    return e;
  };
};
if (QE || $p.state) {
  var kn = $p.state || ($p.state = new r_());
  kn.get = kn.get, kn.has = kn.has, kn.set = kn.set, Kd = function(r, t) {
    if (kn.has(r))
      throw new og(q0);
    return t.facade = r, kn.set(r, t), t;
  }, xl = function(r) {
    return kn.get(r) || {};
  }, Zd = function(r) {
    return kn.has(r);
  };
} else {
  var uo = n_("state");
  i_[uo] = !0, Kd = function(r, t) {
    if (Bp(r, uo))
      throw new og(q0);
    return t.facade = r, e_(r, uo, t), t;
  }, xl = function(r) {
    return Bp(r, uo) ? r[uo] : {};
  }, Zd = function(r) {
    return Bp(r, uo);
  };
}
var a_ = {
  set: Kd,
  get: xl,
  has: Zd,
  enforce: s_,
  getterFor: o_
}, Km = Wi, l_ = Tr, c_ = ri, sd = oo, ag = so, h_ = jE.CONFIGURABLE, d_ = WE, Cy = a_, u_ = Cy.enforce, f_ = Cy.get, X0 = String, vd = Object.defineProperty, p_ = Km("".slice), g_ = Km("".replace), m_ = Km([].join), v_ = ag && !l_(function() {
  return vd(function() {
  }, "length", { value: 8 }).length !== 8;
}), y_ = String(String).split("String"), b_ = Ey.exports = function(r, t, e) {
  p_(X0(t), 0, 7) === "Symbol(" && (t = "[" + g_(X0(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!sd(r, "name") || h_ && r.name !== t) && (ag ? vd(r, "name", { value: t, configurable: !0 }) : r.name = t), v_ && e && sd(e, "arity") && r.length !== e.arity && vd(r, "length", { value: e.arity });
  try {
    e && sd(e, "constructor") && e.constructor ? ag && vd(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var n = u_(r);
  return sd(n, "source") || (n.source = m_(y_, typeof t == "string" ? t : "")), r;
};
Function.prototype.toString = b_(function() {
  return c_(this) && f_(this).source || d_(this);
}, "toString");
var w_ = Ey.exports, A_ = ri, E_ = Xf, __ = w_, S_ = qm, x_ = function(r, t, e, n) {
  n || (n = {});
  var i = n.enumerable, s = n.name !== void 0 ? n.name : t;
  if (A_(e) && __(e, s, n), n.global)
    i ? r[t] = e : S_(t, e);
  else {
    try {
      n.unsafe ? r[t] && (i = !0) : delete r[t];
    } catch {
    }
    i ? r[t] = e : E_.f(r, t, {
      value: e,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return r;
}, Ty = {}, C_ = Math.ceil, T_ = Math.floor, P_ = Math.trunc || function(t) {
  var e = +t;
  return (e > 0 ? T_ : C_)(e);
}, R_ = P_, Py = function(r) {
  var t = +r;
  return t !== t || t === 0 ? 0 : R_(t);
}, L_ = Py, k_ = Math.max, I_ = Math.min, F_ = function(r, t) {
  var e = L_(r);
  return e < 0 ? k_(e + t, 0) : I_(e, t);
}, M_ = Py, D_ = Math.min, O_ = function(r) {
  var t = M_(r);
  return t > 0 ? D_(t, 9007199254740991) : 0;
}, N_ = O_, B_ = function(r) {
  return N_(r.length);
}, $_ = Wm, U_ = F_, H_ = B_, Y0 = function(r) {
  return function(t, e, n) {
    var i = $_(t), s = H_(i);
    if (s === 0)
      return !r && -1;
    var o = U_(n, s), l;
    if (r && e !== e) {
      for (; s > o; )
        if (l = i[o++], l !== l)
          return !0;
    } else
      for (; s > o; o++)
        if ((r || o in i) && i[o] === e)
          return r || o || 0;
    return !r && -1;
  };
}, j_ = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Y0(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Y0(!1)
}, z_ = Wi, Up = oo, V_ = Wm, G_ = j_.indexOf, W_ = Sy, K0 = z_([].push), q_ = function(r, t) {
  var e = V_(r), n = 0, i = [], s;
  for (s in e)
    !Up(W_, s) && Up(e, s) && K0(i, s);
  for (; t.length > n; )
    Up(e, s = t[n++]) && (~G_(i, s) || K0(i, s));
  return i;
}, X_ = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Y_ = q_, K_ = X_, Z_ = K_.concat("length", "prototype");
Ty.f = Object.getOwnPropertyNames || function(t) {
  return Y_(t, Z_);
};
var Ry = {};
Ry.f = Object.getOwnPropertySymbols;
var J_ = cy, Q_ = Wi, tS = Ty, eS = Ry, nS = wy, iS = Q_([].concat), rS = J_("Reflect", "ownKeys") || function(t) {
  var e = tS.f(nS(t)), n = eS.f;
  return n ? iS(e, n(t)) : e;
}, Z0 = oo, sS = rS, oS = Vm, aS = Xf, lS = function(r, t, e) {
  for (var n = sS(t), i = aS.f, s = oS.f, o = 0; o < n.length; o++) {
    var l = n[o];
    !Z0(r, l) && !(e && Z0(e, l)) && i(r, l, s(t, l));
  }
}, cS = Tr, hS = ri, dS = /#|\.prototype\./, Kh = function(r, t) {
  var e = fS[uS(r)];
  return e === gS ? !0 : e === pS ? !1 : hS(t) ? cS(t) : !!t;
}, uS = Kh.normalize = function(r) {
  return String(r).replace(dS, ".").toLowerCase();
}, fS = Kh.data = {}, pS = Kh.NATIVE = "N", gS = Kh.POLYFILL = "P", mS = Kh, od = ii, vS = Vm.f, yS = Ay, bS = x_, wS = qm, AS = lS, ES = mS, _S = function(r, t) {
  var e = r.target, n = r.global, i = r.stat, s, o, l, c, d, h;
  if (n ? o = od : i ? o = od[e] || wS(e, {}) : o = od[e] && od[e].prototype, o)
    for (l in t) {
      if (d = t[l], r.dontCallGetSet ? (h = vS(o, l), c = h && h.value) : c = o[l], s = ES(n ? l : e + (i ? "." : "#") + l, r.forced), !s && c !== void 0) {
        if (typeof d == typeof c)
          continue;
        AS(d, c);
      }
      (r.sham || c && c.sham) && yS(d, "sham", !0), bS(o, l, d, r);
    }
}, Ly = {}, J0 = py, SS = TypeError, xS = function(r) {
  var t, e;
  this.promise = new r(function(n, i) {
    if (t !== void 0 || e !== void 0)
      throw new SS("Bad Promise constructor");
    t = n, e = i;
  }), this.resolve = J0(t), this.reject = J0(e);
};
Ly.f = function(r) {
  return new xS(r);
};
var CS = _S, TS = Ly;
CS({ target: "Promise", stat: !0 }, {
  withResolvers: function() {
    var t = TS.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
function PS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ky = { exports: {} }, Qt = ky.exports = {}, Fn, Mn;
function lg() {
  throw new Error("setTimeout has not been defined");
}
function cg() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Fn = setTimeout : Fn = lg;
  } catch {
    Fn = lg;
  }
  try {
    typeof clearTimeout == "function" ? Mn = clearTimeout : Mn = cg;
  } catch {
    Mn = cg;
  }
})();
function Iy(r) {
  if (Fn === setTimeout)
    return setTimeout(r, 0);
  if ((Fn === lg || !Fn) && setTimeout)
    return Fn = setTimeout, setTimeout(r, 0);
  try {
    return Fn(r, 0);
  } catch {
    try {
      return Fn.call(null, r, 0);
    } catch {
      return Fn.call(this, r, 0);
    }
  }
}
function RS(r) {
  if (Mn === clearTimeout)
    return clearTimeout(r);
  if ((Mn === cg || !Mn) && clearTimeout)
    return Mn = clearTimeout, clearTimeout(r);
  try {
    return Mn(r);
  } catch {
    try {
      return Mn.call(null, r);
    } catch {
      return Mn.call(this, r);
    }
  }
}
var Ui = [], _o = !1, $r, yd = -1;
function LS() {
  !_o || !$r || (_o = !1, $r.length ? Ui = $r.concat(Ui) : yd = -1, Ui.length && Fy());
}
function Fy() {
  if (!_o) {
    var r = Iy(LS);
    _o = !0;
    for (var t = Ui.length; t; ) {
      for ($r = Ui, Ui = []; ++yd < t; )
        $r && $r[yd].run();
      yd = -1, t = Ui.length;
    }
    $r = null, _o = !1, RS(r);
  }
}
Qt.nextTick = function(r) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
  Ui.push(new My(r, t)), Ui.length === 1 && !_o && Iy(Fy);
};
function My(r, t) {
  this.fun = r, this.array = t;
}
My.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Qt.title = "browser";
Qt.browser = !0;
Qt.env = {};
Qt.argv = [];
Qt.version = "";
Qt.versions = {};
function qi() {
}
Qt.on = qi;
Qt.addListener = qi;
Qt.once = qi;
Qt.off = qi;
Qt.removeListener = qi;
Qt.removeAllListeners = qi;
Qt.emit = qi;
Qt.prependListener = qi;
Qt.prependOnceListener = qi;
Qt.listeners = function(r) {
  return [];
};
Qt.binding = function(r) {
  throw new Error("process.binding is not supported");
};
Qt.cwd = function() {
  return "/";
};
Qt.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
Qt.umask = function() {
  return 0;
};
var kS = ky.exports;
const ct = /* @__PURE__ */ PS(kS);
var Te = function() {
  return Te = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Te.apply(this, arguments);
};
function Zs(r, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return r.concat(s || Array.prototype.slice.call(t));
}
function IS(r) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = r(e)), t[e];
  };
}
var FS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, MS = /* @__PURE__ */ IS(
  function(r) {
    return FS.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ht = "-ms-", Al = "-moz-", Rt = "-webkit-", Dy = "comm", Yf = "rule", Zm = "decl", DS = "@import", Oy = "@keyframes", OS = "@layer", Ny = Math.abs, Jm = String.fromCharCode, hg = Object.assign;
function NS(r, t) {
  return pe(r, 0) ^ 45 ? (((t << 2 ^ pe(r, 0)) << 2 ^ pe(r, 1)) << 2 ^ pe(r, 2)) << 2 ^ pe(r, 3) : 0;
}
function By(r) {
  return r.trim();
}
function li(r, t) {
  return (r = t.exec(r)) ? r[0] : r;
}
function pt(r, t, e) {
  return r.replace(t, e);
}
function bd(r, t, e) {
  return r.indexOf(t, e);
}
function pe(r, t) {
  return r.charCodeAt(t) | 0;
}
function Wa(r, t, e) {
  return r.slice(t, e);
}
function ti(r) {
  return r.length;
}
function $y(r) {
  return r.length;
}
function sl(r, t) {
  return t.push(r), r;
}
function BS(r, t) {
  return r.map(t).join("");
}
function Q0(r, t) {
  return r.filter(function(e) {
    return !li(e, t);
  });
}
var Kf = 1, qa = 1, Uy = 0, pn = 0, ee = 0, Ja = "";
function Zf(r, t, e, n, i, s, o, l) {
  return { value: r, root: t, parent: e, type: n, props: i, children: s, line: Kf, column: qa, length: o, return: "", siblings: l };
}
function Xi(r, t) {
  return hg(Zf("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, t);
}
function fo(r) {
  for (; r.root; )
    r = Xi(r.root, { children: [r] });
  sl(r, r.siblings);
}
function $S() {
  return ee;
}
function US() {
  return ee = pn > 0 ? pe(Ja, --pn) : 0, qa--, ee === 10 && (qa = 1, Kf--), ee;
}
function Ln() {
  return ee = pn < Uy ? pe(Ja, pn++) : 0, qa++, ee === 10 && (qa = 1, Kf++), ee;
}
function Xs() {
  return pe(Ja, pn);
}
function wd() {
  return pn;
}
function Jf(r, t) {
  return Wa(Ja, r, t);
}
function dg(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function HS(r) {
  return Kf = qa = 1, Uy = ti(Ja = r), pn = 0, [];
}
function jS(r) {
  return Ja = "", r;
}
function Hp(r) {
  return By(Jf(pn - 1, ug(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function zS(r) {
  for (; (ee = Xs()) && ee < 33; )
    Ln();
  return dg(r) > 2 || dg(ee) > 3 ? "" : " ";
}
function VS(r, t) {
  for (; --t && Ln() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Jf(r, wd() + (t < 6 && Xs() == 32 && Ln() == 32));
}
function ug(r) {
  for (; Ln(); )
    switch (ee) {
      case r:
        return pn;
      case 34:
      case 39:
        r !== 34 && r !== 39 && ug(ee);
        break;
      case 40:
        r === 41 && ug(r);
        break;
      case 92:
        Ln();
        break;
    }
  return pn;
}
function GS(r, t) {
  for (; Ln() && r + ee !== 57; )
    if (r + ee === 84 && Xs() === 47)
      break;
  return "/*" + Jf(t, pn - 1) + "*" + Jm(r === 47 ? r : Ln());
}
function WS(r) {
  for (; !dg(Xs()); )
    Ln();
  return Jf(r, pn);
}
function qS(r) {
  return jS(Ad("", null, null, null, [""], r = HS(r), 0, [0], r));
}
function Ad(r, t, e, n, i, s, o, l, c) {
  for (var d = 0, h = 0, f = o, g = 0, v = 0, y = 0, E = 1, x = 1, _ = 1, P = 0, L = "", k = i, F = s, I = n, M = L; x; )
    switch (y = P, P = Ln()) {
      case 40:
        if (y != 108 && pe(M, f - 1) == 58) {
          bd(M += pt(Hp(P), "&", "&\f"), "&\f", Ny(d ? l[d - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Hp(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += zS(y);
        break;
      case 92:
        M += VS(wd() - 1, 7);
        continue;
      case 47:
        switch (Xs()) {
          case 42:
          case 47:
            sl(XS(GS(Ln(), wd()), t, e, c), c);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * E:
        l[d++] = ti(M) * _;
      case 125 * E:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            x = 0;
          case 59 + h:
            _ == -1 && (M = pt(M, /\f/g, "")), v > 0 && ti(M) - f && sl(v > 32 ? ev(M + ";", n, e, f - 1, c) : ev(pt(M, " ", "") + ";", n, e, f - 2, c), c);
            break;
          case 59:
            M += ";";
          default:
            if (sl(I = tv(M, t, e, d, h, i, l, L, k = [], F = [], f, s), s), P === 123)
              if (h === 0)
                Ad(M, t, I, I, k, s, f, l, F);
              else
                switch (g === 99 && pe(M, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ad(r, I, I, n && sl(tv(r, I, I, 0, 0, i, l, L, i, k = [], f, F), F), i, F, f, l, n ? k : F);
                    break;
                  default:
                    Ad(M, I, I, I, [""], F, 0, l, F);
                }
        }
        d = h = v = 0, E = _ = 1, L = M = "", f = o;
        break;
      case 58:
        f = 1 + ti(M), v = y;
      default:
        if (E < 1) {
          if (P == 123)
            --E;
          else if (P == 125 && E++ == 0 && US() == 125)
            continue;
        }
        switch (M += Jm(P), P * E) {
          case 38:
            _ = h > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            l[d++] = (ti(M) - 1) * _, _ = 1;
            break;
          case 64:
            Xs() === 45 && (M += Hp(Ln())), g = Xs(), h = f = ti(L = M += WS(wd())), P++;
            break;
          case 45:
            y === 45 && ti(M) == 2 && (E = 0);
        }
    }
  return s;
}
function tv(r, t, e, n, i, s, o, l, c, d, h, f) {
  for (var g = i - 1, v = i === 0 ? s : [""], y = $y(v), E = 0, x = 0, _ = 0; E < n; ++E)
    for (var P = 0, L = Wa(r, g + 1, g = Ny(x = o[E])), k = r; P < y; ++P)
      (k = By(x > 0 ? v[P] + " " + L : pt(L, /&\f/g, v[P]))) && (c[_++] = k);
  return Zf(r, t, e, i === 0 ? Yf : l, c, d, h, f);
}
function XS(r, t, e, n) {
  return Zf(r, t, e, Dy, Jm($S()), Wa(r, 2, -2), 0, n);
}
function ev(r, t, e, n, i) {
  return Zf(r, t, e, Zm, Wa(r, 0, n), Wa(r, n + 1, -1), n, i);
}
function Hy(r, t, e) {
  switch (NS(r, t)) {
    case 5103:
      return Rt + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Rt + r + r;
    case 4789:
      return Al + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Rt + r + Al + r + Ht + r + r;
    case 5936:
      switch (pe(r, t + 11)) {
        case 114:
          return Rt + r + Ht + pt(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return Rt + r + Ht + pt(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return Rt + r + Ht + pt(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return Rt + r + Ht + r + r;
    case 6165:
      return Rt + r + Ht + "flex-" + r + r;
    case 5187:
      return Rt + r + pt(r, /(\w+).+(:[^]+)/, Rt + "box-$1$2" + Ht + "flex-$1$2") + r;
    case 5443:
      return Rt + r + Ht + "flex-item-" + pt(r, /flex-|-self/g, "") + (li(r, /flex-|baseline/) ? "" : Ht + "grid-row-" + pt(r, /flex-|-self/g, "")) + r;
    case 4675:
      return Rt + r + Ht + "flex-line-pack" + pt(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return Rt + r + Ht + pt(r, "shrink", "negative") + r;
    case 5292:
      return Rt + r + Ht + pt(r, "basis", "preferred-size") + r;
    case 6060:
      return Rt + "box-" + pt(r, "-grow", "") + Rt + r + Ht + pt(r, "grow", "positive") + r;
    case 4554:
      return Rt + pt(r, /([^-])(transform)/g, "$1" + Rt + "$2") + r;
    case 6187:
      return pt(pt(pt(r, /(zoom-|grab)/, Rt + "$1"), /(image-set)/, Rt + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return pt(r, /(image-set\([^]*)/, Rt + "$1$`$1");
    case 4968:
      return pt(pt(r, /(.+:)(flex-)?(.*)/, Rt + "box-pack:$3" + Ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Rt + r + r;
    case 4200:
      if (!li(r, /flex-|baseline/))
        return Ht + "grid-column-align" + Wa(r, t) + r;
      break;
    case 2592:
    case 3360:
      return Ht + pt(r, "template-", "") + r;
    case 4384:
    case 3616:
      return e && e.some(function(n, i) {
        return t = i, li(n.props, /grid-\w+-end/);
      }) ? ~bd(r + (e = e[t].value), "span", 0) ? r : Ht + pt(r, "-start", "") + r + Ht + "grid-row-span:" + (~bd(e, "span", 0) ? li(e, /\d+/) : +li(e, /\d+/) - +li(r, /\d+/)) + ";" : Ht + pt(r, "-start", "") + r;
    case 4896:
    case 4128:
      return e && e.some(function(n) {
        return li(n.props, /grid-\w+-start/);
      }) ? r : Ht + pt(pt(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pt(r, /(.+)-inline(.+)/, Rt + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ti(r) - 1 - t > 6)
        switch (pe(r, t + 1)) {
          case 109:
            if (pe(r, t + 4) !== 45)
              break;
          case 102:
            return pt(r, /(.+:)(.+)-([^]+)/, "$1" + Rt + "$2-$3$1" + Al + (pe(r, t + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~bd(r, "stretch", 0) ? Hy(pt(r, "stretch", "fill-available"), t, e) + r : r;
        }
      break;
    case 5152:
    case 5920:
      return pt(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, s, o, l, c, d) {
        return Ht + i + ":" + s + d + (o ? Ht + i + "-span:" + (l ? c : +c - +s) + d : "") + r;
      });
    case 4949:
      if (pe(r, t + 6) === 121)
        return pt(r, ":", ":" + Rt) + r;
      break;
    case 6444:
      switch (pe(r, pe(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return pt(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Rt + (pe(r, 14) === 45 ? "inline-" : "") + "box$3$1" + Rt + "$2$3$1" + Ht + "$2box$3") + r;
        case 100:
          return pt(r, ":", ":" + Ht) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return pt(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function Jd(r, t) {
  for (var e = "", n = 0; n < r.length; n++)
    e += t(r[n], n, r, t) || "";
  return e;
}
function YS(r, t, e, n) {
  switch (r.type) {
    case OS:
      if (r.children.length)
        break;
    case DS:
    case Zm:
      return r.return = r.return || r.value;
    case Dy:
      return "";
    case Oy:
      return r.return = r.value + "{" + Jd(r.children, n) + "}";
    case Yf:
      if (!ti(r.value = r.props.join(",")))
        return "";
  }
  return ti(e = Jd(r.children, n)) ? r.return = r.value + "{" + e + "}" : "";
}
function KS(r) {
  var t = $y(r);
  return function(e, n, i, s) {
    for (var o = "", l = 0; l < t; l++)
      o += r[l](e, n, i, s) || "";
    return o;
  };
}
function ZS(r) {
  return function(t) {
    t.root || (t = t.return) && r(t);
  };
}
function JS(r, t, e, n) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Zm:
        r.return = Hy(r.value, r.length, e);
        return;
      case Oy:
        return Jd([Xi(r, { value: pt(r.value, "@", "@" + Rt) })], n);
      case Yf:
        if (r.length)
          return BS(e = r.props, function(i) {
            switch (li(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                fo(Xi(r, { props: [pt(i, /:(read-\w+)/, ":" + Al + "$1")] })), fo(Xi(r, { props: [i] })), hg(r, { props: Q0(e, n) });
                break;
              case "::placeholder":
                fo(Xi(r, { props: [pt(i, /:(plac\w+)/, ":" + Rt + "input-$1")] })), fo(Xi(r, { props: [pt(i, /:(plac\w+)/, ":" + Al + "$1")] })), fo(Xi(r, { props: [pt(i, /:(plac\w+)/, Ht + "input-$1")] })), fo(Xi(r, { props: [i] })), hg(r, { props: Q0(e, n) });
                break;
            }
            return "";
          });
    }
}
var QS = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Js = typeof ct < "u" && ct.env !== void 0 && (ct.env.REACT_APP_SC_ATTR || ct.env.SC_ATTR) || "data-styled", jy = "active", zy = "data-styled-version", Qf = "6.1.11", Qm = `/*!sc*/
`, t0 = typeof window < "u" && "HTMLElement" in window, tx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ct < "u" && ct.env !== void 0 && ct.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ct.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ct.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ct.env.REACT_APP_SC_DISABLE_SPEEDY : typeof ct < "u" && ct.env !== void 0 && ct.env.SC_DISABLE_SPEEDY !== void 0 && ct.env.SC_DISABLE_SPEEDY !== "" ? ct.env.SC_DISABLE_SPEEDY !== "false" && ct.env.SC_DISABLE_SPEEDY : ct.env.NODE_ENV !== "production"), nv = /invalid hook call/i, ad = /* @__PURE__ */ new Set(), ex = function(r, t) {
  if (ct.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(r).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        nv.test(o) ? (s = !1, ad.delete(n)) : i.apply(void 0, Zs([o], l, !1));
      }, Rn(), s && !ad.has(n) && (console.warn(n), ad.add(n));
    } catch (o) {
      nv.test(o.message) && ad.delete(n);
    } finally {
      console.error = i;
    }
  }
}, tp = Object.freeze([]), Xa = Object.freeze({});
function nx(r, t, e) {
  return e === void 0 && (e = Xa), r.theme !== e.theme && r.theme || t || e.theme;
}
var fg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ix = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, rx = /(^-|-$)/g;
function iv(r) {
  return r.replace(ix, "-").replace(rx, "");
}
var sx = /(a)(d)/gi, ld = 52, rv = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function pg(r) {
  var t, e = "";
  for (t = Math.abs(r); t > ld; t = t / ld | 0)
    e = rv(t % ld) + e;
  return (rv(t % ld) + e).replace(sx, "$1-$2");
}
var jp, Vy = 5381, Or = function(r, t) {
  for (var e = t.length; e; )
    r = 33 * r ^ t.charCodeAt(--e);
  return r;
}, Gy = function(r) {
  return Or(Vy, r);
};
function Wy(r) {
  return pg(Gy(r) >>> 0);
}
function qy(r) {
  return ct.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function zp(r) {
  return typeof r == "string" && (ct.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var Xy = typeof Symbol == "function" && Symbol.for, Yy = Xy ? Symbol.for("react.memo") : 60115, ox = Xy ? Symbol.for("react.forward_ref") : 60112, ax = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, lx = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ky = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, cx = ((jp = {})[ox] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, jp[Yy] = Ky, jp);
function sv(r) {
  return ("type" in (t = r) && t.type.$$typeof) === Yy ? Ky : "$$typeof" in r ? cx[r.$$typeof] : ax;
  var t;
}
var hx = Object.defineProperty, dx = Object.getOwnPropertyNames, ov = Object.getOwnPropertySymbols, ux = Object.getOwnPropertyDescriptor, fx = Object.getPrototypeOf, av = Object.prototype;
function Zy(r, t, e) {
  if (typeof t != "string") {
    if (av) {
      var n = fx(t);
      n && n !== av && Zy(r, n, e);
    }
    var i = dx(t);
    ov && (i = i.concat(ov(t)));
    for (var s = sv(r), o = sv(t), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in lx || e && e[c] || o && c in o || s && c in s)) {
        var d = ux(t, c);
        try {
          hx(r, c, d);
        } catch {
        }
      }
    }
  }
  return r;
}
function Qs(r) {
  return typeof r == "function";
}
function e0(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Ur(r, t) {
  return r && t ? "".concat(r, " ").concat(t) : r || t || "";
}
function gg(r, t) {
  if (r.length === 0)
    return "";
  for (var e = r[0], n = 1; n < r.length; n++)
    e += r[n];
  return e;
}
function Ya(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function mg(r, t, e) {
  if (e === void 0 && (e = !1), !e && !Ya(r) && !Array.isArray(r))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      r[n] = mg(r[n], t[n]);
  else if (Ya(t))
    for (var n in t)
      r[n] = mg(r[n], t[n]);
  return r;
}
function n0(r, t) {
  Object.defineProperty(r, "toString", { value: t });
}
var px = ct.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function gx() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = r[0], n = [], i = 1, s = r.length; i < s; i += 1)
    n.push(r[i]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function ji(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return ct.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(gx.apply(void 0, Zs([px[r]], t, !1)).trim());
}
var mx = function() {
  function r(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return r.prototype.indexOfGroup = function(t) {
    for (var e = 0, n = 0; n < t; n++)
      e += this.groupSizes[n];
    return e;
  }, r.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, s = i; t >= s; )
        if ((s <<= 1) < 0)
          throw ji(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var o = i; o < s; o++)
        this.groupSizes[o] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = (o = 0, e.length); o < c; o++)
      this.tag.insertRule(l, e[o]) && (this.groupSizes[t]++, l++);
  }, r.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], n = this.indexOfGroup(t), i = n + e;
      this.groupSizes[t] = 0;
      for (var s = n; s < i; s++)
        this.tag.deleteRule(n);
    }
  }, r.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return e;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), s = i + n, o = i; o < s; o++)
      e += "".concat(this.tag.getRule(o)).concat(Qm);
    return e;
  }, r;
}(), vx = 1 << 30, Ed = /* @__PURE__ */ new Map(), Qd = /* @__PURE__ */ new Map(), _d = 1, cd = function(r) {
  if (Ed.has(r))
    return Ed.get(r);
  for (; Qd.has(_d); )
    _d++;
  var t = _d++;
  if (ct.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > vx))
    throw ji(16, "".concat(t));
  return Ed.set(r, t), Qd.set(t, r), t;
}, yx = function(r, t) {
  _d = t + 1, Ed.set(r, t), Qd.set(t, r);
}, bx = "style[".concat(Js, "][").concat(zy, '="').concat(Qf, '"]'), wx = new RegExp("^".concat(Js, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ax = function(r, t, e) {
  for (var n, i = e.split(","), s = 0, o = i.length; s < o; s++)
    (n = i[s]) && r.registerName(t, n);
}, Ex = function(r, t) {
  for (var e, n = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(Qm), i = [], s = 0, o = n.length; s < o; s++) {
    var l = n[s].trim();
    if (l) {
      var c = l.match(wx);
      if (c) {
        var d = 0 | parseInt(c[1], 10), h = c[2];
        d !== 0 && (yx(h, d), Ax(r, h, c[3]), r.getTag().insertRules(d, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function _x() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Jy = function(r) {
  var t = document.head, e = r || t, n = document.createElement("style"), i = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(Js, "]")));
    return c[c.length - 1];
  }(e), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Js, jy), n.setAttribute(zy, Qf);
  var o = _x();
  return o && n.setAttribute("nonce", o), e.insertBefore(n, s), n;
}, Sx = function() {
  function r(t) {
    this.element = Jy(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 0, s = n.length; i < s; i++) {
        var o = n[i];
        if (o.ownerNode === e)
          return o;
      }
      throw ji(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.prototype.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }, r;
}(), xx = function() {
  function r(t) {
    this.element = Jy(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, r;
}(), Cx = function() {
  function r(t) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, r.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, r;
}(), lv = t0, Tx = { isServer: !t0, useCSSOMInjection: !tx }, Qy = function() {
  function r(t, e, n) {
    t === void 0 && (t = Xa), e === void 0 && (e = {});
    var i = this;
    this.options = Te(Te({}, Tx), t), this.gs = e, this.names = new Map(n), this.server = !!t.isServer, !this.server && t0 && lv && (lv = !1, function(s) {
      for (var o = document.querySelectorAll(bx), l = 0, c = o.length; l < c; l++) {
        var d = o[l];
        d && d.getAttribute(Js) !== jy && (Ex(s, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), n0(this, function() {
      return function(s) {
        for (var o = s.getTag(), l = o.length, c = "", d = function(f) {
          var g = function(_) {
            return Qd.get(_);
          }(f);
          if (g === void 0)
            return "continue";
          var v = s.names.get(g), y = o.getGroup(f);
          if (v === void 0 || y.length === 0)
            return "continue";
          var E = "".concat(Js, ".g").concat(f, '[id="').concat(g, '"]'), x = "";
          v !== void 0 && v.forEach(function(_) {
            _.length > 0 && (x += "".concat(_, ","));
          }), c += "".concat(y).concat(E, '{content:"').concat(x, '"}').concat(Qm);
        }, h = 0; h < l; h++)
          d(h);
        return c;
      }(i);
    });
  }
  return r.registerId = function(t) {
    return cd(t);
  }, r.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new r(Te(Te({}, this.options), t), this.gs, e && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Cx(i) : n ? new Sx(i) : new xx(i);
    }(this.options), new mx(t)));
    var t;
  }, r.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, r.prototype.registerName = function(t, e) {
    if (cd(t), this.names.has(t))
      this.names.get(t).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(t, n);
    }
  }, r.prototype.insertRules = function(t, e, n) {
    this.registerName(t, e), this.getTag().insertRules(cd(t), n);
  }, r.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.prototype.clearRules = function(t) {
    this.getTag().clearGroup(cd(t)), this.clearNames(t);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), Px = /&/g, Rx = /^\s*\/\/.*$/gm;
function tb(r, t) {
  return r.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = tb(e.children, t)), e;
  });
}
function Lx(r) {
  var t, e, n, i = Xa, s = i.options, o = s === void 0 ? Xa : s, l = i.plugins, c = l === void 0 ? tp : l, d = function(g, v, y) {
    return y.startsWith(e) && y.endsWith(e) && y.replaceAll(e, "").length > 0 ? ".".concat(t) : g;
  }, h = c.slice();
  h.push(function(g) {
    g.type === Yf && g.value.includes("&") && (g.props[0] = g.props[0].replace(Px, e).replace(n, d));
  }), o.prefix && h.push(JS), h.push(YS);
  var f = function(g, v, y, E) {
    v === void 0 && (v = ""), y === void 0 && (y = ""), E === void 0 && (E = "&"), t = E, e = v, n = new RegExp("\\".concat(e, "\\b"), "g");
    var x = g.replace(Rx, ""), _ = qS(y || v ? "".concat(y, " ").concat(v, " { ").concat(x, " }") : x);
    o.namespace && (_ = tb(_, o.namespace));
    var P = [];
    return Jd(_, KS(h.concat(ZS(function(L) {
      return P.push(L);
    })))), P;
  };
  return f.hash = c.length ? c.reduce(function(g, v) {
    return v.name || ji(15), Or(g, v.name);
  }, Vy).toString() : "", f;
}
var kx = new Qy(), vg = Lx(), eb = Ks.createContext({ shouldForwardProp: void 0, styleSheet: kx, stylis: vg });
eb.Consumer;
Ks.createContext(void 0);
function cv() {
  return Re(eb);
}
var yg = function() {
  function r(t, e) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = vg);
      var o = n.name + s.hash;
      i.hasNameForId(n.id, o) || i.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, n0(this, function() {
      throw ji(12, String(n.name));
    });
  }
  return r.prototype.getName = function(t) {
    return t === void 0 && (t = vg), this.name + t.hash;
  }, r;
}(), Ix = function(r) {
  return r >= "A" && r <= "Z";
};
function hv(r) {
  for (var t = "", e = 0; e < r.length; e++) {
    var n = r[e];
    if (e === 1 && n === "-" && r[0] === "-")
      return r;
    Ix(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var nb = function(r) {
  return r == null || r === !1 || r === "";
}, ib = function(r) {
  var t, e, n = [];
  for (var i in r) {
    var s = r[i];
    r.hasOwnProperty(i) && !nb(s) && (Array.isArray(s) && s.isCss || Qs(s) ? n.push("".concat(hv(i), ":"), s, ";") : Ya(s) ? n.push.apply(n, Zs(Zs(["".concat(i, " {")], ib(s), !1), ["}"], !1)) : n.push("".concat(hv(i), ": ").concat((t = i, (e = s) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in QS || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Ys(r, t, e, n) {
  if (nb(r))
    return [];
  if (e0(r))
    return [".".concat(r.styledComponentId)];
  if (Qs(r)) {
    if (!Qs(s = r) || s.prototype && s.prototype.isReactComponent || !t)
      return [r];
    var i = r(t);
    return ct.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof yg || Ya(i) || i === null || console.error("".concat(qy(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ys(i, t, e, n);
  }
  var s;
  return r instanceof yg ? e ? (r.inject(e, n), [r.getName(n)]) : [r] : Ya(r) ? ib(r) : Array.isArray(r) ? Array.prototype.concat.apply(tp, r.map(function(o) {
    return Ys(o, t, e, n);
  })) : [r.toString()];
}
function Fx(r) {
  for (var t = 0; t < r.length; t += 1) {
    var e = r[t];
    if (Qs(e) && !e0(e))
      return !1;
  }
  return !0;
}
var Mx = Gy(Qf), Dx = function() {
  function r(t, e, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ct.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Fx(t), this.componentId = e, this.baseHash = Or(Mx, e), this.baseStyle = n, Qy.registerId(e);
  }
  return r.prototype.generateAndInjectStyles = function(t, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Ur(i, this.staticRulesId);
      else {
        var s = gg(Ys(this.rules, t, e, n)), o = pg(Or(this.baseHash, s) >>> 0);
        if (!e.hasNameForId(this.componentId, o)) {
          var l = n(s, ".".concat(o), void 0, this.componentId);
          e.insertRules(this.componentId, o, l);
        }
        i = Ur(i, o), this.staticRulesId = o;
      }
    else {
      for (var c = Or(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var f = this.rules[h];
        if (typeof f == "string")
          d += f, ct.env.NODE_ENV !== "production" && (c = Or(c, f));
        else if (f) {
          var g = gg(Ys(f, t, e, n));
          c = Or(c, g + h), d += g;
        }
      }
      if (d) {
        var v = pg(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, n(d, ".".concat(v), void 0, this.componentId)), i = Ur(i, v);
      }
    }
    return i;
  }, r;
}(), tu = Ks.createContext(void 0);
tu.Consumer;
function Ox(r) {
  var t = Ks.useContext(tu), e = fn(function() {
    return function(n, i) {
      if (!n)
        throw ji(14);
      if (Qs(n)) {
        var s = n(i);
        if (ct.env.NODE_ENV !== "production" && (s === null || Array.isArray(s) || typeof s != "object"))
          throw ji(7);
        return s;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw ji(8);
      return i ? Te(Te({}, i), n) : n;
    }(r.theme, t);
  }, [r.theme, t]);
  return r.children ? Ks.createElement(tu.Provider, { value: e }, r.children) : null;
}
var Vp = {}, dv = /* @__PURE__ */ new Set();
function Nx(r, t, e) {
  var n = e0(r), i = r, s = !zp(r), o = t.attrs, l = o === void 0 ? tp : o, c = t.componentId, d = c === void 0 ? function(k, F) {
    var I = typeof k != "string" ? "sc" : iv(k);
    Vp[I] = (Vp[I] || 0) + 1;
    var M = "".concat(I, "-").concat(Wy(Qf + I + Vp[I]));
    return F ? "".concat(F, "-").concat(M) : M;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, f = h === void 0 ? function(k) {
    return zp(k) ? "styled.".concat(k) : "Styled(".concat(qy(k), ")");
  }(r) : h, g = t.displayName && t.componentId ? "".concat(iv(t.displayName), "-").concat(t.componentId) : t.componentId || d, v = n && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, y = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var E = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      y = function(k, F) {
        return E(k, F) && x(k, F);
      };
    } else
      y = E;
  }
  var _ = new Dx(e, g, n ? i.componentStyle : void 0);
  function P(k, F) {
    return function(I, M, C) {
      var T = I.attrs, O = I.componentStyle, D = I.defaultProps, H = I.foldedComponentIds, j = I.styledComponentId, V = I.target, Y = Ks.useContext(tu), Z = cv(), B = I.shouldForwardProp || Z.shouldForwardProp;
      ct.env.NODE_ENV !== "production" && R0(j);
      var G = nx(M, Y, D) || Xa, W = function(et, lt, K) {
        for (var gt, q = Te(Te({}, lt), { className: void 0, theme: K }), J = 0; J < et.length; J += 1) {
          var ht = Qs(gt = et[J]) ? gt(q) : gt;
          for (var ft in ht)
            q[ft] = ft === "className" ? Ur(q[ft], ht[ft]) : ft === "style" ? Te(Te({}, q[ft]), ht[ft]) : ht[ft];
        }
        return lt.className && (q.className = Ur(q.className, lt.className)), q;
      }(T, M, G), bt = W.as || V, ut = {};
      for (var z in W)
        W[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && W.theme === G || (z === "forwardedAs" ? ut.as = W.forwardedAs : B && !B(z, bt) || (ut[z] = W[z], B || ct.env.NODE_ENV !== "development" || MS(z) || dv.has(z) || !fg.has(bt) || (dv.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var nt = function(et, lt) {
        var K = cv(), gt = et.generateAndInjectStyles(lt, K.styleSheet, K.stylis);
        return ct.env.NODE_ENV !== "production" && R0(gt), gt;
      }(O, W);
      ct.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(nt);
      var tt = Ur(H, j);
      return nt && (tt += " " + nt), W.className && (tt += " " + W.className), ut[zp(bt) && !fg.has(bt) ? "class" : "className"] = tt, ut.ref = C, z1(bt, ut);
    }(L, k, F);
  }
  P.displayName = f;
  var L = Ks.forwardRef(P);
  return L.attrs = v, L.componentStyle = _, L.displayName = f, L.shouldForwardProp = y, L.foldedComponentIds = n ? Ur(i.foldedComponentIds, i.styledComponentId) : "", L.styledComponentId = g, L.target = n ? i.target : r, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? function(F) {
      for (var I = [], M = 1; M < arguments.length; M++)
        I[M - 1] = arguments[M];
      for (var C = 0, T = I; C < T.length; C++)
        mg(F, T[C], !0);
      return F;
    }({}, i.defaultProps, k) : k;
  } }), ct.env.NODE_ENV !== "production" && (ex(f, g), L.warnTooManyClasses = /* @__PURE__ */ function(k, F) {
    var I = {}, M = !1;
    return function(C) {
      if (!M && (I[C] = !0, Object.keys(I).length >= 200)) {
        var T = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, I = {};
      }
    };
  }(f, g)), n0(L, function() {
    return ".".concat(L.styledComponentId);
  }), s && Zy(L, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), L;
}
function uv(r, t) {
  for (var e = [r[0]], n = 0, i = t.length; n < i; n += 1)
    e.push(t[n], r[n + 1]);
  return e;
}
var fv = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function ep(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (Qs(r) || Ya(r))
    return fv(Ys(uv(tp, Zs([r], t, !0))));
  var n = r;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Ys(n) : fv(Ys(uv(n, t)));
}
function bg(r, t, e) {
  if (e === void 0 && (e = Xa), !t)
    throw ji(1, t);
  var n = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++)
      s[o - 1] = arguments[o];
    return r(t, e, ep.apply(void 0, Zs([i], s, !1)));
  };
  return n.attrs = function(i) {
    return bg(r, t, Te(Te({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return bg(r, t, Te(Te({}, e), i));
  }, n;
}
var rb = function(r) {
  return bg(Nx, r);
}, yt = rb;
fg.forEach(function(r) {
  yt[r] = rb(r);
});
function Bx(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  ct.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = gg(ep.apply(void 0, Zs([r], t, !1))), i = Wy(n);
  return new yg(i, n);
}
ct.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var hd = "__sc-".concat(Js, "__");
ct.env.NODE_ENV !== "production" && ct.env.NODE_ENV !== "test" && typeof window < "u" && (window[hd] || (window[hd] = 0), window[hd] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[hd] += 1);
const $x = "Document {{ currentFileNo }} of {{ allFilesCount }}", Ux = "No renderer for file type: {{{ fileType }}}", Hx = "Download file", jx = "Your file is broken. Please check it on your machine.", zx = "Recipients", Vx = "Sender", Gx = "Loading...", Wx = "Page {{ currentPage }}/{{ allPagesCount }}", qx = {
  documentNavInfo: $x,
  noRendererMessage: Ux,
  downloadButtonLabel: Hx,
  brokenFile: jx,
  msgPluginRecipients: zx,
  msgPluginSender: Vx,
  pdfPluginLoading: Gx,
  pdfPluginPageNumber: Wx
}, Xx = "Dokument {{ currentFileNo }} z {{ allFilesCount }}", Yx = "Brak funckji renderującej dla: {{{ fileType }}}", Kx = "Pobierz plik", Zx = "Twój plik jest uszkodzony. Sprawdź go na swoim komputerze.", Jx = "Odbiorcy", Qx = "Nadawca", tC = "Wczytywanie...", eC = "Strona {{ currentPage }}/{{ allPagesCount }}", nC = {
  documentNavInfo: Xx,
  noRendererMessage: Yx,
  downloadButtonLabel: Kx,
  brokenFile: Zx,
  msgPluginRecipients: Jx,
  msgPluginSender: Qx,
  pdfPluginLoading: tC,
  pdfPluginPageNumber: eC
}, iC = "Documento {{ currentFileNo }} de {{ allFilesCount }}", rC = "No hay procesador para el tipo de archivo: {{{ fileType }}}", sC = "Descargar archivo", oC = "Tu archivo está roto. Compruébalo en tu máquina.", aC = "Destinatarios", lC = "Remitente", cC = "Cargando...", hC = "Página {{ currentPage }}/{{ allPagesCount }}", dC = {
  documentNavInfo: iC,
  noRendererMessage: rC,
  downloadButtonLabel: sC,
  brokenFile: oC,
  msgPluginRecipients: aC,
  msgPluginSender: lC,
  pdfPluginLoading: cC,
  pdfPluginPageNumber: hC
}, uC = "Dokument {{ currentFileNo }} von {{ allFilesCount }}", fC = "Kein Renderer für Dateityp: {{{ fileType }}}", pC = "Datei herunterladen", gC = "Ihre Datei ist defekt. Bitte überprüfen Sie sie auf Ihrem Rechner.", mC = "Empfänger", vC = "Absender", yC = "Wird geladen...", bC = "Seite {{ currentPage }}/{{ allPagesCount }}", wC = {
  documentNavInfo: uC,
  noRendererMessage: fC,
  downloadButtonLabel: pC,
  brokenFile: gC,
  msgPluginRecipients: mC,
  msgPluginSender: vC,
  pdfPluginLoading: yC,
  pdfPluginPageNumber: bC
}, AC = "Documento {{ currentFileNo }} di {{ allFilesCount }}", EC = "Nessun renderer per il tipo di file: {{{ fileType }}}", _C = "Scarica file", SC = "Il tuo file è danneggiato. Controllalo sul tuo computer.", xC = "Destinatari", CC = "Mittente", TC = "Caricamento in corso...", PC = "Pagina {{ currentPage }}/{{ allPagesCount }}", RC = {
  documentNavInfo: AC,
  noRendererMessage: EC,
  downloadButtonLabel: _C,
  brokenFile: SC,
  msgPluginRecipients: xC,
  msgPluginSender: CC,
  pdfPluginLoading: TC,
  pdfPluginPageNumber: PC
}, LC = "Documento {{ currentFileNo }} de {{ allFilesCount }}", kC = "Nenhum renderizador para o tipo de arquivo: {{{ fileType }}}", IC = "Baixar arquivo", FC = "Seu arquivo está quebrado. Por favor, verifique-o em sua máquina.", MC = "Destinatários", DC = "Remetente", OC = "Carregando...", NC = "Página {{ currentPage }}/{{ allPagesCount }}", BC = {
  documentNavInfo: LC,
  noRendererMessage: kC,
  downloadButtonLabel: IC,
  brokenFile: FC,
  msgPluginRecipients: MC,
  msgPluginSender: DC,
  pdfPluginLoading: OC,
  pdfPluginPageNumber: NC
}, $C = "Document {{ currentFileNo }} de {{ allFilesCount }}", UC = "Aucun moteur de rendu pour le type de fichier : {{{ fileType }}}", HC = "Télécharger le fichier", jC = "Votre fichier est cassé. Veuillez le vérifier sur votre machine.", zC = "Destinataires", VC = "Expéditeur", GC = "Chargement...", WC = "Page {{ currentPage }}/{{ allPagesCount }}", qC = {
  documentNavInfo: $C,
  noRendererMessage: UC,
  downloadButtonLabel: HC,
  brokenFile: jC,
  msgPluginRecipients: zC,
  msgPluginSender: VC,
  pdfPluginLoading: GC,
  pdfPluginPageNumber: WC
}, XC = "مستند {{ currentFileNo }} من {{ allFilesCount }}", YC = "{{{ fileType }}} : لا يمكننا عرض هذا النوع من الملفات", KC = "تحميل الملف", ZC = "الملف تالف، يرجى التحقق منه على جهازك الخاص.", JC = "المستلمين", QC = "المرسل", tT = "تحميل ...", eT = " {{ allPagesCount }} \\ {{ currentPage }} صفحة ", nT = {
  documentNavInfo: XC,
  noRendererMessage: YC,
  downloadButtonLabel: KC,
  brokenFile: ZC,
  msgPluginRecipients: JC,
  msgPluginSender: QC,
  pdfPluginLoading: tT,
  pdfPluginPageNumber: eT
}, iT = "Dokument {{ currentFileNo }} od {{ allFilesCount }}", rT = "Ne postoji pregledač za tip fajla: {{ fileType }}", sT = "Preuzimanje fajla", oT = "Vaš fajl nije dobar. Molimo Vas da probate da ga otvorite na vašem računaru.", aT = "Primaoci", lT = "Pošiljalac", cT = "Učitavanje...", hT = "Strana {{ currentPage }}/{{ allPagesCount }}", dT = {
  documentNavInfo: iT,
  noRendererMessage: rT,
  downloadButtonLabel: sT,
  brokenFile: oT,
  msgPluginRecipients: aT,
  msgPluginSender: lT,
  pdfPluginLoading: cT,
  pdfPluginPageNumber: hT
}, uT = "Документ {{ currentFileNo }} od {{ allFilesCount }}", fT = "Не постоји прегледач за тип фајла: {{ fileType }}", pT = "Преузимање фајла", gT = "Ваш фајл није добар. Молимо Вас да пробате да га отворите на вашем рачунару.", mT = "Примаоци", vT = "Пошиљалац", yT = "Учитавање...", bT = "Страна {{ currentPage }}/{{ allPagesCount }}", wT = {
  documentNavInfo: uT,
  noRendererMessage: fT,
  downloadButtonLabel: pT,
  brokenFile: gT,
  msgPluginRecipients: mT,
  msgPluginSender: vT,
  pdfPluginLoading: yT,
  pdfPluginPageNumber: bT
}, AT = "ファイル {{ currentFileNo }} / {{ allFilesCount }}", ET = "ファイルタイプに対応したレンダラーはありません: {{ fileType }}", _T = "ダウンロード", ST = "ファイルが壊れています。あなたのマシンでファイルを確認してください。", xT = "受信者", CT = "送信者", TT = "ローティング中...", PT = "ページ {{ currentPage }}/{{ allPagesCount }}", RT = {
  documentNavInfo: AT,
  noRendererMessage: ET,
  downloadButtonLabel: _T,
  brokenFile: ST,
  msgPluginRecipients: xT,
  msgPluginSender: CT,
  pdfPluginLoading: TT,
  pdfPluginPageNumber: PT
}, LT = "Документ {{ currentFileNo }} из {{ allFilesCount }}", kT = "Данный тип файла не поддерживается рендером: {{{ fileType }}}", IT = "Скачать файл", FT = "Ваш файл сломан. Пожалуйста, проверьте его на своём комьютере.", MT = "Получатели", DT = "Отправитель", OT = "Загрузка...", NT = "Страница {{ currentPage }}/{{ allPagesCount }}", BT = {
  documentNavInfo: LT,
  noRendererMessage: kT,
  downloadButtonLabel: IT,
  brokenFile: FT,
  msgPluginRecipients: MT,
  msgPluginSender: DT,
  pdfPluginLoading: OT,
  pdfPluginPageNumber: NT
}, $T = "Dokument {{ currentFileNo }} av {{ allFilesCount }}", UT = "Ingen renderare för filtypen: {{{ fileType }}}", HT = "Ladda ner", jT = "Filen är trasig. Var vänlig kontrollera den på din maskin.", zT = "Mottagare", VT = "Avsändare", GT = "Laddar...", WT = "Sida {{ currentPage }}/{{ allPagesCount }}", qT = {
  documentNavInfo: $T,
  noRendererMessage: UT,
  downloadButtonLabel: HT,
  brokenFile: jT,
  msgPluginRecipients: zT,
  msgPluginSender: VT,
  pdfPluginLoading: GT,
  pdfPluginPageNumber: WT
}, eu = {
  en: qx,
  pl: nC,
  es: dC,
  de: wC,
  it: RC,
  pt: BC,
  fr: qC,
  ar: nT,
  sr: dT,
  sr_cyr: wT,
  ja: RT,
  ru: BT,
  se: qT
}, G2 = Object.keys(eu), i0 = "en", sb = "SET_ALL_DOCUMENTS", ob = "SET_DOCUMENT_LOADING", ab = "NEXT_DOCUMENT", lb = "PREVIOUS_DOCUMENT", cb = "UPDATE_CURRENT_DOCUMENT", hb = "SET_RENDERER_RECT", db = "SET_MAIN_CONFIG", XT = (r, t) => ({
  type: sb,
  documents: r,
  initialActiveDocument: t
}), Gp = (r) => ({
  type: ob,
  value: r
}), r0 = () => ({ type: ab }), s0 = () => ({
  type: lb
}), wg = (r) => ({ type: cb, document: r }), YT = (r) => ({
  type: hb,
  rect: r
}), KT = (r) => ({
  type: db,
  config: r
}), nu = {
  currentFileNo: 0,
  documents: [],
  documentLoading: !0,
  currentDocument: void 0,
  rendererRect: void 0,
  config: {},
  pluginRenderers: [],
  language: i0
}, ZT = (r = nu, t) => {
  switch (t.type) {
    case sb: {
      const { documents: e, initialActiveDocument: n } = t;
      return {
        ...r,
        documents: e,
        currentDocument: n || e[0] || null,
        currentFileNo: n && e.includes(n) ? e.indexOf(n) : nu.currentFileNo
      };
    }
    case ob: {
      const { value: e } = t;
      return { ...r, documentLoading: e };
    }
    case ab: {
      if (r.currentFileNo >= r.documents.length - 1)
        return r;
      const e = r.currentFileNo + 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: e,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case lb: {
      if (r.currentFileNo <= 0)
        return r;
      const e = r.currentFileNo - 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: r.currentFileNo - 1,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case cb: {
      const { document: e } = t;
      return {
        ...r,
        currentDocument: e,
        currentFileNo: r.documents.findIndex(
          (n) => n.uri === e.uri
        )
      };
    }
    case hb: {
      const { rect: e } = t;
      return {
        ...r,
        rendererRect: e
      };
    }
    case db: {
      const { config: e } = t;
      return {
        ...r,
        config: e
      };
    }
    default:
      return r;
  }
}, Pr = qf({ state: nu, dispatch: () => null }), JT = jm((r, t) => {
  const {
    children: e,
    documents: n,
    config: i,
    pluginRenderers: s,
    prefetchMethod: o,
    requestHeaders: l,
    initialActiveDocument: c,
    language: d,
    activeDocument: h,
    onDocumentChange: f
  } = r, [g, v] = zm(ZT, {
    ...nu,
    documents: n || [],
    currentDocument: n && n.length ? c || n[0] : void 0,
    config: i,
    pluginRenderers: s,
    prefetchMethod: o,
    requestHeaders: l,
    currentFileNo: c ? n.findIndex((y) => y === c) ?? 0 : 0,
    language: d && eu[d] ? d : i0,
    activeDocument: h,
    onDocumentChange: f
  });
  return _t(() => {
    v(XT(n, c)), i && v(KT(i));
  }, [n, i, c]), _t(() => {
    h && v(wg(h));
  }, [h]), Zv(
    t,
    () => ({
      prev() {
        v(s0());
      },
      next() {
        v(r0());
      }
    }),
    [v]
  ), /* @__PURE__ */ $(Pr.Provider, { value: { state: g, dispatch: v }, children: e });
}), QT = ep`
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
`, tP = ep`
  background-color: ${(r) => r.theme.secondary};
  color: ${(r) => r.theme.textSecondary};
`, np = yt.button`
  ${QT}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(r) => r.disabled ? 0.4 : 1};
  pointer-events: ${(r) => r.disabled ? "none" : "all"};
  box-shadow: 2px 2px 3px #00000033;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`, ub = yt.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
  box-shadow: 2px 2px 3px #00000033;

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
yt(np)``;
const eP = yt(np)`
  ${tP}
`, nP = (r) => /* @__PURE__ */ $(fb, { ...r }), iP = (r) => /* @__PURE__ */ $(fb, { ...r, reverse: !0 }), fb = ({ color: r, size: t, reverse: e }) => /* @__PURE__ */ $(
  "svg",
  {
    width: t || "100%",
    height: t || "100%",
    style: { transform: `${e ? "rotate(180deg)" : ""}` },
    id: "arrow_left",
    version: "1.1",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ $(
      "path",
      {
        clipRule: "evenodd",
        d: "M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z",
        fill: r || "#aaa",
        fillRule: "evenodd",
        id: "Arrow_Back"
      }
    )
  }
), rP = (r) => {
  const { color: t, size: e } = r;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      version: "1.1",
      id: "Icons",
      viewBox: "0 0 32 32",
      xmlSpace: "preserve",
      style: { alignSelf: "center", justifySelf: "center" },
      children: /* @__PURE__ */ We("g", { children: [
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,2c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1V3C17,2.4,16.6,2,16,2z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1
		z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M9,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h5C8.6,17,9,16.6,9,16z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M9.6,20.9l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4
		S10,20.6,9.6,20.9z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,23c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5C17,23.4,16.6,23,16,23z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M22.4,20.9c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4
		L22.4,20.9z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M29,15h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5c0.6,0,1-0.4,1-1S29.6,15,29,15z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M21.7,11.3c0.3,0,0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4
		C21.1,11.2,21.4,11.3,21.7,11.3z`
          }
        )
      ] })
    }
  );
};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var sP = Object.prototype.toString, Qa = Array.isArray || function(t) {
  return sP.call(t) === "[object Array]";
};
function o0(r) {
  return typeof r == "function";
}
function oP(r) {
  return Qa(r) ? "array" : typeof r;
}
function Wp(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function pv(r, t) {
  return r != null && typeof r == "object" && t in r;
}
function aP(r, t) {
  return r != null && typeof r != "object" && r.hasOwnProperty && r.hasOwnProperty(t);
}
var lP = RegExp.prototype.test;
function cP(r, t) {
  return lP.call(r, t);
}
var hP = /\S/;
function dP(r) {
  return !cP(hP, r);
}
var uP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function fP(r) {
  return String(r).replace(/[&<>"'`=\/]/g, function(e) {
    return uP[e];
  });
}
var pP = /\s*/, gP = /\s+/, gv = /\s*=/, mP = /\s*\}/, vP = /#|\^|\/|>|\{|&|=|!/;
function yP(r, t) {
  if (!r)
    return [];
  var e = !1, n = [], i = [], s = [], o = !1, l = !1, c = "", d = 0;
  function h() {
    if (o && !l)
      for (; s.length; )
        delete i[s.pop()];
    else
      s = [];
    o = !1, l = !1;
  }
  var f, g, v;
  function y(C) {
    if (typeof C == "string" && (C = C.split(gP, 2)), !Qa(C) || C.length !== 2)
      throw new Error("Invalid tags: " + C);
    f = new RegExp(Wp(C[0]) + "\\s*"), g = new RegExp("\\s*" + Wp(C[1])), v = new RegExp("\\s*" + Wp("}" + C[1]));
  }
  y(t || rn.tags);
  for (var E = new Zh(r), x, _, P, L, k, F; !E.eos(); ) {
    if (x = E.pos, P = E.scanUntil(f), P)
      for (var I = 0, M = P.length; I < M; ++I)
        L = P.charAt(I), dP(L) ? (s.push(i.length), c += L) : (l = !0, e = !0, c += " "), i.push(["text", L, x, x + 1]), x += 1, L === `
` && (h(), c = "", d = 0, e = !1);
    if (!E.scan(f))
      break;
    if (o = !0, _ = E.scan(vP) || "name", E.scan(pP), _ === "=" ? (P = E.scanUntil(gv), E.scan(gv), E.scanUntil(g)) : _ === "{" ? (P = E.scanUntil(v), E.scan(mP), E.scanUntil(g), _ = "&") : P = E.scanUntil(g), !E.scan(g))
      throw new Error("Unclosed tag at " + E.pos);
    if (_ == ">" ? k = [_, P, x, E.pos, c, d, e] : k = [_, P, x, E.pos], d++, i.push(k), _ === "#" || _ === "^")
      n.push(k);
    else if (_ === "/") {
      if (F = n.pop(), !F)
        throw new Error('Unopened section "' + P + '" at ' + x);
      if (F[1] !== P)
        throw new Error('Unclosed section "' + F[1] + '" at ' + x);
    } else
      _ === "name" || _ === "{" || _ === "&" ? l = !0 : _ === "=" && y(P);
  }
  if (h(), F = n.pop(), F)
    throw new Error('Unclosed section "' + F[1] + '" at ' + E.pos);
  return wP(bP(i));
}
function bP(r) {
  for (var t = [], e, n, i = 0, s = r.length; i < s; ++i)
    e = r[i], e && (e[0] === "text" && n && n[0] === "text" ? (n[1] += e[1], n[3] = e[3]) : (t.push(e), n = e));
  return t;
}
function wP(r) {
  for (var t = [], e = t, n = [], i, s, o = 0, l = r.length; o < l; ++o)
    switch (i = r[o], i[0]) {
      case "#":
      case "^":
        e.push(i), n.push(i), e = i[4] = [];
        break;
      case "/":
        s = n.pop(), s[5] = i[2], e = n.length > 0 ? n[n.length - 1][4] : t;
        break;
      default:
        e.push(i);
    }
  return t;
}
function Zh(r) {
  this.string = r, this.tail = r, this.pos = 0;
}
Zh.prototype.eos = function() {
  return this.tail === "";
};
Zh.prototype.scan = function(t) {
  var e = this.tail.match(t);
  if (!e || e.index !== 0)
    return "";
  var n = e[0];
  return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
};
Zh.prototype.scanUntil = function(t) {
  var e = this.tail.search(t), n;
  switch (e) {
    case -1:
      n = this.tail, this.tail = "";
      break;
    case 0:
      n = "";
      break;
    default:
      n = this.tail.substring(0, e), this.tail = this.tail.substring(e);
  }
  return this.pos += n.length, n;
};
function Ka(r, t) {
  this.view = r, this.cache = { ".": this.view }, this.parent = t;
}
Ka.prototype.push = function(t) {
  return new Ka(t, this);
};
Ka.prototype.lookup = function(t) {
  var e = this.cache, n;
  if (e.hasOwnProperty(t))
    n = e[t];
  else {
    for (var i = this, s, o, l, c = !1; i; ) {
      if (t.indexOf(".") > 0)
        for (s = i.view, o = t.split("."), l = 0; s != null && l < o.length; )
          l === o.length - 1 && (c = pv(s, o[l]) || aP(s, o[l])), s = s[o[l++]];
      else
        s = i.view[t], c = pv(i.view, t);
      if (c) {
        n = s;
        break;
      }
      i = i.parent;
    }
    e[t] = n;
  }
  return o0(n) && (n = n.call(this.view)), n;
};
function Ne() {
  this.templateCache = {
    _cache: {},
    set: function(t, e) {
      this._cache[t] = e;
    },
    get: function(t) {
      return this._cache[t];
    },
    clear: function() {
      this._cache = {};
    }
  };
}
Ne.prototype.clearCache = function() {
  typeof this.templateCache < "u" && this.templateCache.clear();
};
Ne.prototype.parse = function(t, e) {
  var n = this.templateCache, i = t + ":" + (e || rn.tags).join(":"), s = typeof n < "u", o = s ? n.get(i) : void 0;
  return o == null && (o = yP(t, e), s && n.set(i, o)), o;
};
Ne.prototype.render = function(t, e, n, i) {
  var s = this.getConfigTags(i), o = this.parse(t, s), l = e instanceof Ka ? e : new Ka(e, void 0);
  return this.renderTokens(o, l, n, t, i);
};
Ne.prototype.renderTokens = function(t, e, n, i, s) {
  for (var o = "", l, c, d, h = 0, f = t.length; h < f; ++h)
    d = void 0, l = t[h], c = l[0], c === "#" ? d = this.renderSection(l, e, n, i, s) : c === "^" ? d = this.renderInverted(l, e, n, i, s) : c === ">" ? d = this.renderPartial(l, e, n, s) : c === "&" ? d = this.unescapedValue(l, e) : c === "name" ? d = this.escapedValue(l, e, s) : c === "text" && (d = this.rawValue(l)), d !== void 0 && (o += d);
  return o;
};
Ne.prototype.renderSection = function(t, e, n, i, s) {
  var o = this, l = "", c = e.lookup(t[1]);
  function d(g) {
    return o.render(g, e, n, s);
  }
  if (c) {
    if (Qa(c))
      for (var h = 0, f = c.length; h < f; ++h)
        l += this.renderTokens(t[4], e.push(c[h]), n, i, s);
    else if (typeof c == "object" || typeof c == "string" || typeof c == "number")
      l += this.renderTokens(t[4], e.push(c), n, i, s);
    else if (o0(c)) {
      if (typeof i != "string")
        throw new Error("Cannot use higher-order sections without the original template");
      c = c.call(e.view, i.slice(t[3], t[5]), d), c != null && (l += c);
    } else
      l += this.renderTokens(t[4], e, n, i, s);
    return l;
  }
};
Ne.prototype.renderInverted = function(t, e, n, i, s) {
  var o = e.lookup(t[1]);
  if (!o || Qa(o) && o.length === 0)
    return this.renderTokens(t[4], e, n, i, s);
};
Ne.prototype.indentPartial = function(t, e, n) {
  for (var i = e.replace(/[^ \t]/g, ""), s = t.split(`
`), o = 0; o < s.length; o++)
    s[o].length && (o > 0 || !n) && (s[o] = i + s[o]);
  return s.join(`
`);
};
Ne.prototype.renderPartial = function(t, e, n, i) {
  if (n) {
    var s = this.getConfigTags(i), o = o0(n) ? n(t[1]) : n[t[1]];
    if (o != null) {
      var l = t[6], c = t[5], d = t[4], h = o;
      c == 0 && d && (h = this.indentPartial(o, d, l));
      var f = this.parse(h, s);
      return this.renderTokens(f, e, n, h, i);
    }
  }
};
Ne.prototype.unescapedValue = function(t, e) {
  var n = e.lookup(t[1]);
  if (n != null)
    return n;
};
Ne.prototype.escapedValue = function(t, e, n) {
  var i = this.getConfigEscape(n) || rn.escape, s = e.lookup(t[1]);
  if (s != null)
    return typeof s == "number" && i === rn.escape ? String(s) : i(s);
};
Ne.prototype.rawValue = function(t) {
  return t[1];
};
Ne.prototype.getConfigTags = function(t) {
  return Qa(t) ? t : t && typeof t == "object" ? t.tags : void 0;
};
Ne.prototype.getConfigEscape = function(t) {
  if (t && typeof t == "object" && !Qa(t))
    return t.escape;
};
var rn = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(r) {
    Cl.templateCache = r;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return Cl.templateCache;
  }
}, Cl = new Ne();
rn.clearCache = function() {
  return Cl.clearCache();
};
rn.parse = function(t, e) {
  return Cl.parse(t, e);
};
rn.render = function(t, e, n, i) {
  if (typeof t != "string")
    throw new TypeError('Invalid template! Template should be a "string" but "' + oP(t) + '" was given as the first argument for mustache#render(template, view, partials)');
  return Cl.render(t, e, n, i);
};
rn.escape = fP;
rn.Scanner = Zh;
rn.Context = Ka;
rn.Writer = Ne;
const ao = () => {
  const {
    state: { language: r }
  } = Re(Pr), t = eu[i0];
  return {
    t: Va(
      (n, i) => {
        const s = eu[r];
        return s[n] ? rn.render(s[n], i) : t[n] ? rn.render(t[n], i) : n;
      },
      [r, t]
    )
  };
}, AP = () => {
  const {
    state: { currentDocument: r, currentFileNo: t, documents: e },
    dispatch: n
  } = Re(Pr), { t: i } = ao();
  if (e.length <= 1 || !r)
    return null;
  let s = r.uri || "";
  const o = s == null ? void 0 : s.split("/");
  return o.length && (s = o[o.length - 1]), /* @__PURE__ */ We(EP, { id: "doc-nav", children: [
    /* @__PURE__ */ $("p", { id: "doc-nav-info", children: i("documentNavInfo", {
      currentFileNo: t + 1,
      allFilesCount: e.length
    }) }),
    /* @__PURE__ */ $(
      pb,
      {
        id: "doc-nav-prev",
        onClick: () => n(s0()),
        disabled: t === 0,
        children: /* @__PURE__ */ $(nP, { color: "#fff", size: "60%" })
      }
    ),
    /* @__PURE__ */ $(
      _P,
      {
        id: "doc-nav-next",
        onClick: () => n(r0()),
        disabled: t >= e.length - 1,
        children: /* @__PURE__ */ $(iP, { color: "#fff", size: "60%" })
      }
    )
  ] });
}, EP = yt.div`
  min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  color: ${(r) => r.theme.textPrimary};
`, pb = yt(eP)`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, _P = yt(pb)`
  margin: 0 5px;
`, gb = (r, t) => {
  var n;
  if (!r)
    return "";
  let e = "";
  if (r.fileName)
    e = r.fileName;
  else {
    e = r.uri || "", e = decodeURI(e), t || (e = (n = e == null ? void 0 : e.split("?")) == null ? void 0 : n[0]);
    const i = e == null ? void 0 : e.split("/");
    i.length && (e = i[i.length - 1]);
  }
  return e;
}, SP = () => {
  var n, i;
  const {
    state: { config: r, currentDocument: t }
  } = Re(Pr);
  if (!t || (n = r == null ? void 0 : r.header) != null && n.disableFileName)
    return null;
  const e = gb(
    t,
    ((i = r == null ? void 0 : r.header) == null ? void 0 : i.retainURLParams) || !1
  );
  return /* @__PURE__ */ We(xP, { id: "file-name", "data-testid": "file-name", children: [
    e,
    " 테스트"
  ] });
}, xP = yt.div`
  flex: 1;
  text-align: left;
  color: ${(r) => r.theme.textPrimary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`, CP = () => {
  var i, s, o;
  const { state: r, dispatch: t } = Re(Pr), { config: e } = r;
  if ((i = e == null ? void 0 : e.header) != null && i.disableHeader)
    return null;
  const n = (o = (s = e == null ? void 0 : e.header) == null ? void 0 : s.overrideComponent) == null ? void 0 : o.call(
    s,
    r,
    () => t(s0()),
    () => t(r0())
  );
  return n || /* @__PURE__ */ We(TP, { id: "header-bar", "data-testid": "header-bar", children: [
    /* @__PURE__ */ $(SP, {}),
    /* @__PURE__ */ $(AP, {})
  ] });
}, TP = yt.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(r) => r.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`, ip = ({
  documentURI: r,
  signal: t,
  fileLoaderComplete: e,
  readerTypeFunction: n,
  headers: i
}) => fetch(r, { signal: t, headers: i }).then(async (s) => {
  const o = await s.blob(), l = new FileReader();
  switch (l.addEventListener(
    "loadend",
    () => e(l)
  ), n) {
    case "arrayBuffer":
      l.readAsArrayBuffer(o);
      break;
    case "binaryString":
      l.readAsBinaryString(o);
      break;
    case "dataURL":
      l.readAsDataURL(o);
      break;
    case "text":
      l.readAsText(o);
      break;
  }
}).catch((s) => s), PP = (r) => ip({ ...r, readerTypeFunction: "arrayBuffer" }), mb = (r) => ip({ ...r, readerTypeFunction: "dataURL" }), vb = (r) => ip({ ...r, readerTypeFunction: "text" }), W2 = (r) => ip({ ...r, readerTypeFunction: "binaryString" }), RP = mb, LP = () => {
  const {
    state: { currentDocument: r, pluginRenderers: t }
  } = Re(Pr), [e, n] = Ga();
  return _t(() => {
    if (!r)
      return;
    if (!r.fileType) {
      n(void 0);
      return;
    }
    const i = [];
    t == null || t.forEach((o) => {
      r.fileType !== void 0 && o.fileTypes.indexOf(r.fileType) >= 0 && i.push(o);
    });
    const [s] = i.sort(
      (o, l) => l.weight - o.weight
    );
    n(s && s !== void 0 ? () => s : null);
  }, [r, t]), { CurrentRenderer: e };
}, kP = () => {
  const { state: r, dispatch: t } = Re(Pr), { currentFileNo: e, currentDocument: n, prefetchMethod: i } = r, { CurrentRenderer: s } = LP(), o = (n == null ? void 0 : n.uri) || "";
  return _t(
    () => {
      if (!n || n.fileType !== void 0)
        return;
      const l = new AbortController(), { signal: c } = l;
      return fetch(o, {
        method: i || o.startsWith("blob:") ? "GET" : "HEAD",
        signal: c,
        headers: r == null ? void 0 : r.requestHeaders
      }).then((d) => {
        const h = d.headers.get("content-type"), f = (h == null ? void 0 : h.split(";")) || [], g = f.length ? f[0] : void 0;
        t(
          wg({
            ...n,
            fileType: g || void 0
          })
        );
      }).catch((d) => {
        if ((d == null ? void 0 : d.name) !== "AbortError")
          throw d;
      }), () => {
        l.abort();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, o, n]
  ), _t(() => {
    var f;
    if (!n || s === void 0)
      return;
    const l = new AbortController(), { signal: c } = l, h = {
      documentURI: o,
      signal: c,
      fileLoaderComplete: (g) => {
        if (!n || !g) {
          t(Gp(!1));
          return;
        }
        const v = { ...n };
        g.result !== null && (v.fileData = g.result), t(wg(v)), t(Gp(!1));
      },
      headers: r == null ? void 0 : r.requestHeaders
    };
    return s === null ? t(Gp(!1)) : s.fileLoader !== void 0 ? (f = s.fileLoader) == null || f.call(s, h) : RP(h), () => {
      l.abort();
    };
  }, [s, e]), { state: r, dispatch: t, CurrentRenderer: s };
}, IP = () => {
  const [r, t] = Ga({
    width: void 0,
    height: void 0
  });
  return _t(() => {
    function e() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
  }, []), r;
}, mv = ({ children: r }) => {
  var s, o;
  const { state: t } = Re(Pr), { config: e } = t, [n, i] = Ga(
    ((s = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : s.showLoadingTimeout) === !1
  );
  return _t(() => {
    var l;
    setTimeout(
      () => {
        i(!0);
      },
      typeof ((l = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : l.showLoadingTimeout) == "number" ? e.loadingRenderer.showLoadingTimeout : 500
    );
  }, [(o = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : o.showLoadingTimeout]), n ? /* @__PURE__ */ $(Kv, { children: r }) : null;
}, FP = ({
  documents: r,
  documentLoading: t,
  config: e,
  currentDocument: n,
  fileName: i,
  CurrentRenderer: s,
  state: o,
  t: l
}) => {
  var c, d;
  if (r.length)
    if (t) {
      if (e && ((c = e == null ? void 0 : e.loadingRenderer) != null && c.overrideComponent)) {
        const h = e.loadingRenderer.overrideComponent;
        return /* @__PURE__ */ $(mv, { children: /* @__PURE__ */ $(h, { document: n, fileName: i }) });
      }
      return /* @__PURE__ */ $(mv, { children: /* @__PURE__ */ $(DP, { id: "loading-renderer", "data-testid": "loading-renderer", children: /* @__PURE__ */ $(NP, { children: /* @__PURE__ */ $(rP, { color: "#444", size: 40 }) }) }) });
    } else {
      if (s)
        return /* @__PURE__ */ $(s, { mainState: o });
      if (s === void 0)
        return null;
      if (e && ((d = e == null ? void 0 : e.noRenderer) != null && d.overrideComponent)) {
        const h = e.noRenderer.overrideComponent;
        return /* @__PURE__ */ $(h, { document: n, fileName: i });
      }
      return /* @__PURE__ */ We("div", { id: "no-renderer", "data-testid": "no-renderer", children: [
        l("noRendererMessage", {
          fileType: (n == null ? void 0 : n.fileType) ?? ""
        }),
        /* @__PURE__ */ $(
          BP,
          {
            id: "no-renderer-download",
            href: n == null ? void 0 : n.uri,
            download: n == null ? void 0 : n.uri,
            children: l("downloadButtonLabel")
          }
        )
      ] });
    }
  else
    return /* @__PURE__ */ $("div", { id: "no-documents" });
}, MP = () => {
  var f;
  const { state: r, dispatch: t, CurrentRenderer: e } = kP(), { documents: n, documentLoading: i, currentDocument: s, config: o } = r, l = IP(), { t: c } = ao(), d = Va(
    (g) => {
      g && t(YT(g == null ? void 0 : g.getBoundingClientRect()));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, t]
  ), h = gb(
    s,
    ((f = o == null ? void 0 : o.header) == null ? void 0 : f.retainURLParams) || !1
  );
  return /* @__PURE__ */ $("div", { id: "proxy-renderer", "data-testid": "proxy-renderer", ref: d, children: /* @__PURE__ */ $(
    FP,
    {
      state: r,
      documents: n,
      documentLoading: i,
      config: o,
      currentDocument: s,
      fileName: h,
      CurrentRenderer: e,
      t: c
    }
  ) });
}, DP = yt.div`
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  justify-content: center;
`, OP = Bx`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, NP = yt.div`
  animation-name: ${OP};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`, BP = yt(ub)`
  width: 130px;
  height: 30px;
  background-color: ${(r) => r.theme.primary};
  @media (max-width: 768px) {
    width: 125px;
    height: 25px;
  }
`, vv = {
  primary: "#fff",
  secondary: "#000",
  tertiary: "#ffffff99",
  textPrimary: "#000",
  textSecondary: "#fff",
  textTertiary: "#00000044",
  disableThemeScrollbar: !1
}, Gi = ({
  mainState: { currentDocument: r },
  children: t,
  ...e
}) => r ? /* @__PURE__ */ $($P, { id: "image-renderer", ...e, children: t || /* @__PURE__ */ $(UP, { id: "image-img", src: r.fileData }) }) : null;
Gi.fileTypes = [];
Gi.weight = 0;
const $P = yt.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`, UP = yt.img`
  max-width: 95%;
  max-height: 95%;
`, a0 = (r) => /* @__PURE__ */ $(Gi, { ...r });
a0.fileTypes = ["bmp", "image/bmp"];
a0.weight = 0;
const rp = ({ mainState: { currentDocument: r } }) => (_t(() => {
  const t = r == null ? void 0 : r.fileData;
  let e = "";
  const n = (t == null ? void 0 : t.replace(
    /^data:text\/html;(?:charset=([^;]*);)?base64,/,
    (c, d) => (e = d, "")
  )) || "";
  let i = window.atob(n);
  if (e) {
    const c = new Uint8Array(i.length);
    for (let d = 0; d < i.length; d++)
      c[d] = i.charCodeAt(d);
    i = new TextDecoder(e).decode(c);
  }
  const s = document.getElementById(
    "html-body"
  ), o = (s == null ? void 0 : s.contentWindow) && s.contentWindow;
  if (!o)
    return;
  const l = o.document;
  l.open(), l.write(`${i}`), l.close();
}, [r]), /* @__PURE__ */ $(HP, { id: "html-renderer", children: /* @__PURE__ */ $(jP, { id: "html-body", sandbox: "allow-same-origin" }) }));
rp.fileTypes = ["htm", "html", "text/htm", "text/html"];
rp.weight = 0;
rp.fileLoader = mb;
const HP = yt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`, jP = yt.iframe`
  height: 100%;
  padding: 15px;
  margin: 20px 0 20px 0;
  border: 1px solid ${(r) => r.theme.secondary};
`, l0 = (r) => /* @__PURE__ */ $(Gi, { ...r });
l0.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
l0.weight = 0;
const sp = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ $(zP, { id: "msdoc-renderer", children: /* @__PURE__ */ $(
  VP,
  {
    id: "msdoc-iframe",
    title: "msdoc-iframe",
    src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      r.uri
    )}`,
    frameBorder: "0"
  }
) }) : null, Lr = {
  odt: ["odt", "application/vnd.oasis.opendocument.text"],
  doc: ["doc", "application/msword"],
  docx: [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream"
  ],
  xls: ["xls", "application/vnd.ms-excel"],
  xlsx: [
    "xlsx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ],
  ppt: ["ppt", "application/vnd.ms-powerpoint"],
  pptx: [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ]
};
sp.fileTypes = [
  ...Lr.odt,
  ...Lr.doc,
  ...Lr.docx,
  ...Lr.xls,
  ...Lr.xlsx,
  ...Lr.ppt,
  ...Lr.pptx
];
sp.weight = 0;
sp.fileLoader = ({ fileLoaderComplete: r }) => r();
const zP = yt.div`
  width: 100%;
`, VP = yt.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
var le = {}, op = {};
op.byteLength = qP;
op.toByteArray = YP;
op.fromByteArray = JP;
var ei = [], an = [], GP = typeof Uint8Array < "u" ? Uint8Array : Array, qp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var po = 0, WP = qp.length; po < WP; ++po)
  ei[po] = qp[po], an[qp.charCodeAt(po)] = po;
an[45] = 62;
an[95] = 63;
function yb(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function qP(r) {
  var t = yb(r), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function XP(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function YP(r) {
  var t, e = yb(r), n = e[0], i = e[1], s = new GP(XP(r, n, i)), o = 0, l = i > 0 ? n - 4 : n, c;
  for (c = 0; c < l; c += 4)
    t = an[r.charCodeAt(c)] << 18 | an[r.charCodeAt(c + 1)] << 12 | an[r.charCodeAt(c + 2)] << 6 | an[r.charCodeAt(c + 3)], s[o++] = t >> 16 & 255, s[o++] = t >> 8 & 255, s[o++] = t & 255;
  return i === 2 && (t = an[r.charCodeAt(c)] << 2 | an[r.charCodeAt(c + 1)] >> 4, s[o++] = t & 255), i === 1 && (t = an[r.charCodeAt(c)] << 10 | an[r.charCodeAt(c + 1)] << 4 | an[r.charCodeAt(c + 2)] >> 2, s[o++] = t >> 8 & 255, s[o++] = t & 255), s;
}
function KP(r) {
  return ei[r >> 18 & 63] + ei[r >> 12 & 63] + ei[r >> 6 & 63] + ei[r & 63];
}
function ZP(r, t, e) {
  for (var n, i = [], s = t; s < e; s += 3)
    n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(KP(n));
  return i.join("");
}
function JP(r) {
  for (var t, e = r.length, n = e % 3, i = [], s = 16383, o = 0, l = e - n; o < l; o += s)
    i.push(ZP(r, o, o + s > l ? l : o + s));
  return n === 1 ? (t = r[e - 1], i.push(
    ei[t >> 2] + ei[t << 4 & 63] + "=="
  )) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], i.push(
    ei[t >> 10] + ei[t >> 4 & 63] + ei[t << 2 & 63] + "="
  )), i.join("");
}
var c0 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
c0.read = function(r, t, e, n, i) {
  var s, o, l = i * 8 - n - 1, c = (1 << l) - 1, d = c >> 1, h = -7, f = e ? i - 1 : 0, g = e ? -1 : 1, v = r[t + f];
  for (f += g, s = v & (1 << -h) - 1, v >>= -h, h += l; h > 0; s = s * 256 + r[t + f], f += g, h -= 8)
    ;
  for (o = s & (1 << -h) - 1, s >>= -h, h += n; h > 0; o = o * 256 + r[t + f], f += g, h -= 8)
    ;
  if (s === 0)
    s = 1 - d;
  else {
    if (s === c)
      return o ? NaN : (v ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, n), s = s - d;
  }
  return (v ? -1 : 1) * o * Math.pow(2, s - n);
};
c0.write = function(r, t, e, n, i, s) {
  var o, l, c, d = s * 8 - i - 1, h = (1 << d) - 1, f = h >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = n ? 0 : s - 1, y = n ? 1 : -1, E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + f >= 1 ? t += g / c : t += g * Math.pow(2, 1 - f), t * c >= 2 && (o++, c /= 2), o + f >= h ? (l = 0, o = h) : o + f >= 1 ? (l = (t * c - 1) * Math.pow(2, i), o = o + f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; r[e + v] = l & 255, v += y, l /= 256, i -= 8)
    ;
  for (o = o << i | l, d += i; d > 0; r[e + v] = o & 255, v += y, o /= 256, d -= 8)
    ;
  r[e + v - y] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = op, e = c0, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = h, r.SlowBuffer = F, r.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  r.kMaxLength = i;
  const { Uint8Array: s, ArrayBuffer: o, SharedArrayBuffer: l } = globalThis;
  h.TYPED_ARRAY_SUPPORT = c(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const b = new s(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, s.prototype), Object.setPrototypeOf(b, u), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(h.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(b) {
    if (b > i)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const u = new s(b);
    return Object.setPrototypeOf(u, h.prototype), u;
  }
  function h(b, u, p) {
    if (typeof b == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(b);
    }
    return f(b, u, p);
  }
  h.poolSize = 8192;
  function f(b, u, p) {
    if (typeof b == "string")
      return E(b, u);
    if (o.isView(b))
      return _(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (ot(b, o) || b && ot(b.buffer, o) || typeof l < "u" && (ot(b, l) || b && ot(b.buffer, l)))
      return P(b, u, p);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const S = b.valueOf && b.valueOf();
    if (S != null && S !== b)
      return h.from(S, u, p);
    const R = L(b);
    if (R)
      return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return h.from(b[Symbol.toPrimitive]("string"), u, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  h.from = function(b, u, p) {
    return f(b, u, p);
  }, Object.setPrototypeOf(h.prototype, s.prototype), Object.setPrototypeOf(h, s);
  function g(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function v(b, u, p) {
    return g(b), b <= 0 ? d(b) : u !== void 0 ? typeof p == "string" ? d(b).fill(u, p) : d(b).fill(u) : d(b);
  }
  h.alloc = function(b, u, p) {
    return v(b, u, p);
  };
  function y(b) {
    return g(b), d(b < 0 ? 0 : k(b) | 0);
  }
  h.allocUnsafe = function(b) {
    return y(b);
  }, h.allocUnsafeSlow = function(b) {
    return y(b);
  };
  function E(b, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !h.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const p = I(b, u) | 0;
    let S = d(p);
    const R = S.write(b, u);
    return R !== p && (S = S.slice(0, R)), S;
  }
  function x(b) {
    const u = b.length < 0 ? 0 : k(b.length) | 0, p = d(u);
    for (let S = 0; S < u; S += 1)
      p[S] = b[S] & 255;
    return p;
  }
  function _(b) {
    if (ot(b, s)) {
      const u = new s(b);
      return P(u.buffer, u.byteOffset, u.byteLength);
    }
    return x(b);
  }
  function P(b, u, p) {
    if (u < 0 || b.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < u + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let S;
    return u === void 0 && p === void 0 ? S = new s(b) : p === void 0 ? S = new s(b, u) : S = new s(b, u, p), Object.setPrototypeOf(S, h.prototype), S;
  }
  function L(b) {
    if (h.isBuffer(b)) {
      const u = k(b.length) | 0, p = d(u);
      return p.length === 0 || b.copy(p, 0, 0, u), p;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || Le(b.length) ? d(0) : x(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return x(b.data);
  }
  function k(b) {
    if (b >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return b | 0;
  }
  function F(b) {
    return +b != b && (b = 0), h.alloc(+b);
  }
  h.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== h.prototype;
  }, h.compare = function(u, p) {
    if (ot(u, s) && (u = h.from(u, u.offset, u.byteLength)), ot(p, s) && (p = h.from(p, p.offset, p.byteLength)), !h.isBuffer(u) || !h.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === p)
      return 0;
    let S = u.length, R = p.length;
    for (let N = 0, U = Math.min(S, R); N < U; ++N)
      if (u[N] !== p[N]) {
        S = u[N], R = p[N];
        break;
      }
    return S < R ? -1 : R < S ? 1 : 0;
  }, h.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, h.concat = function(u, p) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return h.alloc(0);
    let S;
    if (p === void 0)
      for (p = 0, S = 0; S < u.length; ++S)
        p += u[S].length;
    const R = h.allocUnsafe(p);
    let N = 0;
    for (S = 0; S < u.length; ++S) {
      let U = u[S];
      if (ot(U, s))
        N + U.length > R.length ? (h.isBuffer(U) || (U = h.from(U)), U.copy(R, N)) : s.prototype.set.call(
          R,
          U,
          N
        );
      else if (h.isBuffer(U))
        U.copy(R, N);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      N += U.length;
    }
    return R;
  };
  function I(b, u) {
    if (h.isBuffer(b))
      return b.length;
    if (o.isView(b) || ot(b, o))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const p = b.length, S = arguments.length > 2 && arguments[2] === !0;
    if (!S && p === 0)
      return 0;
    let R = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return Kt(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return kt(b).length;
        default:
          if (R)
            return S ? -1 : Kt(b).length;
          u = ("" + u).toLowerCase(), R = !0;
      }
  }
  h.byteLength = I;
  function M(b, u, p) {
    let S = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return z(this, u, p);
        case "utf8":
        case "utf-8":
          return B(this, u, p);
        case "ascii":
          return bt(this, u, p);
        case "latin1":
        case "binary":
          return ut(this, u, p);
        case "base64":
          return Z(this, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nt(this, u, p);
        default:
          if (S)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), S = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function C(b, u, p) {
    const S = b[u];
    b[u] = b[p], b[p] = S;
  }
  h.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < u; p += 2)
      C(this, p, p + 1);
    return this;
  }, h.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < u; p += 4)
      C(this, p, p + 3), C(this, p + 1, p + 2);
    return this;
  }, h.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < u; p += 8)
      C(this, p, p + 7), C(this, p + 1, p + 6), C(this, p + 2, p + 5), C(this, p + 3, p + 4);
    return this;
  }, h.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? B(this, 0, u) : M.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(u) {
    if (!h.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : h.compare(this, u) === 0;
  }, h.prototype.inspect = function() {
    let u = "";
    const p = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (u += " ... "), "<Buffer " + u + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(u, p, S, R, N) {
    if (ot(u, s) && (u = h.from(u, u.offset, u.byteLength)), !h.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (p === void 0 && (p = 0), S === void 0 && (S = u ? u.length : 0), R === void 0 && (R = 0), N === void 0 && (N = this.length), p < 0 || S > u.length || R < 0 || N > this.length)
      throw new RangeError("out of range index");
    if (R >= N && p >= S)
      return 0;
    if (R >= N)
      return -1;
    if (p >= S)
      return 1;
    if (p >>>= 0, S >>>= 0, R >>>= 0, N >>>= 0, this === u)
      return 0;
    let U = N - R, At = S - p;
    const qt = Math.min(U, At), zt = this.slice(R, N), Xt = u.slice(p, S);
    for (let Ot = 0; Ot < qt; ++Ot)
      if (zt[Ot] !== Xt[Ot]) {
        U = zt[Ot], At = Xt[Ot];
        break;
      }
    return U < At ? -1 : At < U ? 1 : 0;
  };
  function T(b, u, p, S, R) {
    if (b.length === 0)
      return -1;
    if (typeof p == "string" ? (S = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, Le(p) && (p = R ? 0 : b.length - 1), p < 0 && (p = b.length + p), p >= b.length) {
      if (R)
        return -1;
      p = b.length - 1;
    } else if (p < 0)
      if (R)
        p = 0;
      else
        return -1;
    if (typeof u == "string" && (u = h.from(u, S)), h.isBuffer(u))
      return u.length === 0 ? -1 : O(b, u, p, S, R);
    if (typeof u == "number")
      return u = u & 255, typeof s.prototype.indexOf == "function" ? R ? s.prototype.indexOf.call(b, u, p) : s.prototype.lastIndexOf.call(b, u, p) : O(b, [u], p, S, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function O(b, u, p, S, R) {
    let N = 1, U = b.length, At = u.length;
    if (S !== void 0 && (S = String(S).toLowerCase(), S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")) {
      if (b.length < 2 || u.length < 2)
        return -1;
      N = 2, U /= 2, At /= 2, p /= 2;
    }
    function qt(Xt, Ot) {
      return N === 1 ? Xt[Ot] : Xt.readUInt16BE(Ot * N);
    }
    let zt;
    if (R) {
      let Xt = -1;
      for (zt = p; zt < U; zt++)
        if (qt(b, zt) === qt(u, Xt === -1 ? 0 : zt - Xt)) {
          if (Xt === -1 && (Xt = zt), zt - Xt + 1 === At)
            return Xt * N;
        } else
          Xt !== -1 && (zt -= zt - Xt), Xt = -1;
    } else
      for (p + At > U && (p = U - At), zt = p; zt >= 0; zt--) {
        let Xt = !0;
        for (let Ot = 0; Ot < At; Ot++)
          if (qt(b, zt + Ot) !== qt(u, Ot)) {
            Xt = !1;
            break;
          }
        if (Xt)
          return zt;
      }
    return -1;
  }
  h.prototype.includes = function(u, p, S) {
    return this.indexOf(u, p, S) !== -1;
  }, h.prototype.indexOf = function(u, p, S) {
    return T(this, u, p, S, !0);
  }, h.prototype.lastIndexOf = function(u, p, S) {
    return T(this, u, p, S, !1);
  };
  function D(b, u, p, S) {
    p = Number(p) || 0;
    const R = b.length - p;
    S ? (S = Number(S), S > R && (S = R)) : S = R;
    const N = u.length;
    S > N / 2 && (S = N / 2);
    let U;
    for (U = 0; U < S; ++U) {
      const At = parseInt(u.substr(U * 2, 2), 16);
      if (Le(At))
        return U;
      b[p + U] = At;
    }
    return U;
  }
  function H(b, u, p, S) {
    return Wt(Kt(u, b.length - p), b, p, S);
  }
  function j(b, u, p, S) {
    return Wt(Gt(u), b, p, S);
  }
  function V(b, u, p, S) {
    return Wt(kt(u), b, p, S);
  }
  function Y(b, u, p, S) {
    return Wt(Lt(u, b.length - p), b, p, S);
  }
  h.prototype.write = function(u, p, S, R) {
    if (p === void 0)
      R = "utf8", S = this.length, p = 0;
    else if (S === void 0 && typeof p == "string")
      R = p, S = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(S) ? (S = S >>> 0, R === void 0 && (R = "utf8")) : (R = S, S = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const N = this.length - p;
    if ((S === void 0 || S > N) && (S = N), u.length > 0 && (S < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let U = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return D(this, u, p, S);
        case "utf8":
        case "utf-8":
          return H(this, u, p, S);
        case "ascii":
        case "latin1":
        case "binary":
          return j(this, u, p, S);
        case "base64":
          return V(this, u, p, S);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, u, p, S);
        default:
          if (U)
            throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), U = !0;
      }
  }, h.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Z(b, u, p) {
    return u === 0 && p === b.length ? t.fromByteArray(b) : t.fromByteArray(b.slice(u, p));
  }
  function B(b, u, p) {
    p = Math.min(b.length, p);
    const S = [];
    let R = u;
    for (; R < p; ) {
      const N = b[R];
      let U = null, At = N > 239 ? 4 : N > 223 ? 3 : N > 191 ? 2 : 1;
      if (R + At <= p) {
        let qt, zt, Xt, Ot;
        switch (At) {
          case 1:
            N < 128 && (U = N);
            break;
          case 2:
            qt = b[R + 1], (qt & 192) === 128 && (Ot = (N & 31) << 6 | qt & 63, Ot > 127 && (U = Ot));
            break;
          case 3:
            qt = b[R + 1], zt = b[R + 2], (qt & 192) === 128 && (zt & 192) === 128 && (Ot = (N & 15) << 12 | (qt & 63) << 6 | zt & 63, Ot > 2047 && (Ot < 55296 || Ot > 57343) && (U = Ot));
            break;
          case 4:
            qt = b[R + 1], zt = b[R + 2], Xt = b[R + 3], (qt & 192) === 128 && (zt & 192) === 128 && (Xt & 192) === 128 && (Ot = (N & 15) << 18 | (qt & 63) << 12 | (zt & 63) << 6 | Xt & 63, Ot > 65535 && Ot < 1114112 && (U = Ot));
        }
      }
      U === null ? (U = 65533, At = 1) : U > 65535 && (U -= 65536, S.push(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), S.push(U), R += At;
    }
    return W(S);
  }
  const G = 4096;
  function W(b) {
    const u = b.length;
    if (u <= G)
      return String.fromCharCode.apply(String, b);
    let p = "", S = 0;
    for (; S < u; )
      p += String.fromCharCode.apply(
        String,
        b.slice(S, S += G)
      );
    return p;
  }
  function bt(b, u, p) {
    let S = "";
    p = Math.min(b.length, p);
    for (let R = u; R < p; ++R)
      S += String.fromCharCode(b[R] & 127);
    return S;
  }
  function ut(b, u, p) {
    let S = "";
    p = Math.min(b.length, p);
    for (let R = u; R < p; ++R)
      S += String.fromCharCode(b[R]);
    return S;
  }
  function z(b, u, p) {
    const S = b.length;
    (!u || u < 0) && (u = 0), (!p || p < 0 || p > S) && (p = S);
    let R = "";
    for (let N = u; N < p; ++N)
      R += ke[b[N]];
    return R;
  }
  function nt(b, u, p) {
    const S = b.slice(u, p);
    let R = "";
    for (let N = 0; N < S.length - 1; N += 2)
      R += String.fromCharCode(S[N] + S[N + 1] * 256);
    return R;
  }
  h.prototype.slice = function(u, p) {
    const S = this.length;
    u = ~~u, p = p === void 0 ? S : ~~p, u < 0 ? (u += S, u < 0 && (u = 0)) : u > S && (u = S), p < 0 ? (p += S, p < 0 && (p = 0)) : p > S && (p = S), p < u && (p = u);
    const R = this.subarray(u, p);
    return Object.setPrototypeOf(R, h.prototype), R;
  };
  function tt(b, u, p) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + u > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u], N = 1, U = 0;
    for (; ++U < p && (N *= 256); )
      R += this[u + U] * N;
    return R;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u + --p], N = 1;
    for (; p > 0 && (N *= 256); )
      R += this[u + --p] * N;
    return R;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(u, p) {
    return u = u >>> 0, p || tt(u, 1, this.length), this[u];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, h.prototype.readBigUInt64LE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, N = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + S * 2 ** 24;
    return BigInt(R) + (BigInt(N) << BigInt(32));
  }), h.prototype.readBigUInt64BE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = p * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], N = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S;
    return (BigInt(R) << BigInt(32)) + BigInt(N);
  }), h.prototype.readIntLE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u], N = 1, U = 0;
    for (; ++U < p && (N *= 256); )
      R += this[u + U] * N;
    return N *= 128, R >= N && (R -= Math.pow(2, 8 * p)), R;
  }, h.prototype.readIntBE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = p, N = 1, U = this[u + --R];
    for (; R > 0 && (N *= 256); )
      U += this[u + --R] * N;
    return N *= 128, U >= N && (U -= Math.pow(2, 8 * p)), U;
  }, h.prototype.readInt8 = function(u, p) {
    return u = u >>> 0, p || tt(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, h.prototype.readInt16LE = function(u, p) {
    u = u >>> 0, p || tt(u, 2, this.length);
    const S = this[u] | this[u + 1] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt16BE = function(u, p) {
    u = u >>> 0, p || tt(u, 2, this.length);
    const S = this[u + 1] | this[u] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt32LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, h.prototype.readInt32BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, h.prototype.readBigInt64LE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (S << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), h.prototype.readBigInt64BE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = (p << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S);
  }), h.prototype.readFloatLE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), e.read(this, u, !0, 23, 4);
  }, h.prototype.readFloatBE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), e.read(this, u, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(u, p) {
    return u = u >>> 0, p || tt(u, 8, this.length), e.read(this, u, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(u, p) {
    return u = u >>> 0, p || tt(u, 8, this.length), e.read(this, u, !1, 52, 8);
  };
  function et(b, u, p, S, R, N) {
    if (!h.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > R || u < N)
      throw new RangeError('"value" argument is out of bounds');
    if (p + S > b.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, S = S >>> 0, !R) {
      const At = Math.pow(2, 8 * S) - 1;
      et(this, u, p, S, At, 0);
    }
    let N = 1, U = 0;
    for (this[p] = u & 255; ++U < S && (N *= 256); )
      this[p + U] = u / N & 255;
    return p + S;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, S = S >>> 0, !R) {
      const At = Math.pow(2, 8 * S) - 1;
      et(this, u, p, S, At, 0);
    }
    let N = S - 1, U = 1;
    for (this[p + N] = u & 255; --N >= 0 && (U *= 256); )
      this[p + N] = u / U & 255;
    return p + S;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 1, 255, 0), this[p] = u & 255, p + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 65535, 0), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 65535, 0), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 4294967295, 0), this[p + 3] = u >>> 24, this[p + 2] = u >>> 16, this[p + 1] = u >>> 8, this[p] = u & 255, p + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 4294967295, 0), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  };
  function lt(b, u, p, S, R) {
    wt(u, S, R, b, p, 7);
    let N = Number(u & BigInt(4294967295));
    b[p++] = N, N = N >> 8, b[p++] = N, N = N >> 8, b[p++] = N, N = N >> 8, b[p++] = N;
    let U = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[p++] = U, U = U >> 8, b[p++] = U, U = U >> 8, b[p++] = U, U = U >> 8, b[p++] = U, p;
  }
  function K(b, u, p, S, R) {
    wt(u, S, R, b, p, 7);
    let N = Number(u & BigInt(4294967295));
    b[p + 7] = N, N = N >> 8, b[p + 6] = N, N = N >> 8, b[p + 5] = N, N = N >> 8, b[p + 4] = N;
    let U = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[p + 3] = U, U = U >> 8, b[p + 2] = U, U = U >> 8, b[p + 1] = U, U = U >> 8, b[p] = U, p + 8;
  }
  h.prototype.writeBigUInt64LE = ce(function(u, p = 0) {
    return lt(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeBigUInt64BE = ce(function(u, p = 0) {
    return K(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeIntLE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, !R) {
      const qt = Math.pow(2, 8 * S - 1);
      et(this, u, p, S, qt - 1, -qt);
    }
    let N = 0, U = 1, At = 0;
    for (this[p] = u & 255; ++N < S && (U *= 256); )
      u < 0 && At === 0 && this[p + N - 1] !== 0 && (At = 1), this[p + N] = (u / U >> 0) - At & 255;
    return p + S;
  }, h.prototype.writeIntBE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, !R) {
      const qt = Math.pow(2, 8 * S - 1);
      et(this, u, p, S, qt - 1, -qt);
    }
    let N = S - 1, U = 1, At = 0;
    for (this[p + N] = u & 255; --N >= 0 && (U *= 256); )
      u < 0 && At === 0 && this[p + N + 1] !== 0 && (At = 1), this[p + N] = (u / U >> 0) - At & 255;
    return p + S;
  }, h.prototype.writeInt8 = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[p] = u & 255, p + 1;
  }, h.prototype.writeInt16LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 32767, -32768), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, h.prototype.writeInt16BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 32767, -32768), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, h.prototype.writeInt32LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 2147483647, -2147483648), this[p] = u & 255, this[p + 1] = u >>> 8, this[p + 2] = u >>> 16, this[p + 3] = u >>> 24, p + 4;
  }, h.prototype.writeInt32BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  }, h.prototype.writeBigInt64LE = ce(function(u, p = 0) {
    return lt(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), h.prototype.writeBigInt64BE = ce(function(u, p = 0) {
    return K(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function gt(b, u, p, S, R, N) {
    if (p + S > b.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function q(b, u, p, S, R) {
    return u = +u, p = p >>> 0, R || gt(b, u, p, 4), e.write(b, u, p, S, 23, 4), p + 4;
  }
  h.prototype.writeFloatLE = function(u, p, S) {
    return q(this, u, p, !0, S);
  }, h.prototype.writeFloatBE = function(u, p, S) {
    return q(this, u, p, !1, S);
  };
  function J(b, u, p, S, R) {
    return u = +u, p = p >>> 0, R || gt(b, u, p, 8), e.write(b, u, p, S, 52, 8), p + 8;
  }
  h.prototype.writeDoubleLE = function(u, p, S) {
    return J(this, u, p, !0, S);
  }, h.prototype.writeDoubleBE = function(u, p, S) {
    return J(this, u, p, !1, S);
  }, h.prototype.copy = function(u, p, S, R) {
    if (!h.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (S || (S = 0), !R && R !== 0 && (R = this.length), p >= u.length && (p = u.length), p || (p = 0), R > 0 && R < S && (R = S), R === S || u.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (S < 0 || S >= this.length)
      throw new RangeError("Index out of range");
    if (R < 0)
      throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), u.length - p < R - S && (R = u.length - p + S);
    const N = R - S;
    return this === u && typeof s.prototype.copyWithin == "function" ? this.copyWithin(p, S, R) : s.prototype.set.call(
      u,
      this.subarray(S, R),
      p
    ), N;
  }, h.prototype.fill = function(u, p, S, R) {
    if (typeof u == "string") {
      if (typeof p == "string" ? (R = p, p = 0, S = this.length) : typeof S == "string" && (R = S, S = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !h.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (u.length === 1) {
        const U = u.charCodeAt(0);
        (R === "utf8" && U < 128 || R === "latin1") && (u = U);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (p < 0 || this.length < p || this.length < S)
      throw new RangeError("Out of range index");
    if (S <= p)
      return this;
    p = p >>> 0, S = S === void 0 ? this.length : S >>> 0, u || (u = 0);
    let N;
    if (typeof u == "number")
      for (N = p; N < S; ++N)
        this[N] = u;
    else {
      const U = h.isBuffer(u) ? u : h.from(u, R), At = U.length;
      if (At === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (N = 0; N < S - p; ++N)
        this[N + p] = U[N % At];
    }
    return this;
  };
  const ht = {};
  function ft(b, u, p) {
    ht[b] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
      }
      get code() {
        return b;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  ft(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ft(
    "ERR_INVALID_ARG_TYPE",
    function(b, u) {
      return `The "${b}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), ft(
    "ERR_OUT_OF_RANGE",
    function(b, u, p) {
      let S = `The value of "${b}" is out of range.`, R = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? R = st(String(p)) : typeof p == "bigint" && (R = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (R = st(R)), R += "n"), S += ` It must be ${u}. Received ${R}`, S;
    },
    RangeError
  );
  function st(b) {
    let u = "", p = b.length;
    const S = b[0] === "-" ? 1 : 0;
    for (; p >= S + 4; p -= 3)
      u = `_${b.slice(p - 3, p)}${u}`;
    return `${b.slice(0, p)}${u}`;
  }
  function xt(b, u, p) {
    X(u, "offset"), (b[u] === void 0 || b[u + p] === void 0) && mt(u, b.length - (p + 1));
  }
  function wt(b, u, p, S, R, N) {
    if (b > p || b < u) {
      const U = typeof u == "bigint" ? "n" : "";
      let At;
      throw u === 0 || u === BigInt(0) ? At = `>= 0${U} and < 2${U} ** ${(N + 1) * 8}${U}` : At = `>= -(2${U} ** ${(N + 1) * 8 - 1}${U}) and < 2 ** ${(N + 1) * 8 - 1}${U}`, new ht.ERR_OUT_OF_RANGE("value", At, b);
    }
    xt(S, R, N);
  }
  function X(b, u) {
    if (typeof b != "number")
      throw new ht.ERR_INVALID_ARG_TYPE(u, "number", b);
  }
  function mt(b, u, p) {
    throw Math.floor(b) !== b ? (X(b, p), new ht.ERR_OUT_OF_RANGE("offset", "an integer", b)) : u < 0 ? new ht.ERR_BUFFER_OUT_OF_BOUNDS() : new ht.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      b
    );
  }
  const Pt = /[^+/0-9A-Za-z-_]/g;
  function Ut(b) {
    if (b = b.split("=")[0], b = b.trim().replace(Pt, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function Kt(b, u) {
    u = u || 1 / 0;
    let p;
    const S = b.length;
    let R = null;
    const N = [];
    for (let U = 0; U < S; ++U) {
      if (p = b.charCodeAt(U), p > 55295 && p < 57344) {
        if (!R) {
          if (p > 56319) {
            (u -= 3) > -1 && N.push(239, 191, 189);
            continue;
          } else if (U + 1 === S) {
            (u -= 3) > -1 && N.push(239, 191, 189);
            continue;
          }
          R = p;
          continue;
        }
        if (p < 56320) {
          (u -= 3) > -1 && N.push(239, 191, 189), R = p;
          continue;
        }
        p = (R - 55296 << 10 | p - 56320) + 65536;
      } else
        R && (u -= 3) > -1 && N.push(239, 191, 189);
      if (R = null, p < 128) {
        if ((u -= 1) < 0)
          break;
        N.push(p);
      } else if (p < 2048) {
        if ((u -= 2) < 0)
          break;
        N.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((u -= 3) < 0)
          break;
        N.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((u -= 4) < 0)
          break;
        N.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return N;
  }
  function Gt(b) {
    const u = [];
    for (let p = 0; p < b.length; ++p)
      u.push(b.charCodeAt(p) & 255);
    return u;
  }
  function Lt(b, u) {
    let p, S, R;
    const N = [];
    for (let U = 0; U < b.length && !((u -= 2) < 0); ++U)
      p = b.charCodeAt(U), S = p >> 8, R = p % 256, N.push(R), N.push(S);
    return N;
  }
  function kt(b) {
    return t.toByteArray(Ut(b));
  }
  function Wt(b, u, p, S) {
    let R;
    for (R = 0; R < S && !(R + p >= u.length || R >= b.length); ++R)
      u[R + p] = b[R];
    return R;
  }
  function ot(b, u) {
    return b instanceof u || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === u.name;
  }
  function Le(b) {
    return b !== b;
  }
  const ke = function() {
    const b = "0123456789abcdef", u = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const S = p * 16;
      for (let R = 0; R < 16; ++R)
        u[S + R] = b[p] + b[R];
    }
    return u;
  }();
  function ce(b) {
    return typeof BigInt > "u" ? sn : b;
  }
  function sn() {
    throw new Error("BigInt not supported");
  }
})(le);
const Ag = le.Buffer, QP = le.Blob, tR = le.BlobOptions, eR = le.Buffer, nR = le.File, iR = le.FileOptions, rR = le.INSPECT_MAX_BYTES, sR = le.SlowBuffer, oR = le.TranscodeEncoding, aR = le.atob, lR = le.btoa, cR = le.constants, hR = le.isAscii, dR = le.isUtf8, uR = le.kMaxLength, fR = le.kStringMaxLength, pR = le.resolveObjectURL, gR = le.transcode, X2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: QP,
  BlobOptions: tR,
  Buffer: eR,
  File: nR,
  FileOptions: iR,
  INSPECT_MAX_BYTES: rR,
  SlowBuffer: sR,
  TranscodeEncoding: oR,
  atob: aR,
  btoa: lR,
  constants: cR,
  default: Ag,
  isAscii: hR,
  isUtf8: dR,
  kMaxLength: uR,
  kStringMaxLength: fR,
  resolveObjectURL: pR,
  transcode: gR
}, Symbol.toStringTag, { value: "Module" }));
var El = {};
El.d = (r, t) => {
  for (var e in t)
    El.o(t, e) && !El.o(r, e) && Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
};
El.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t);
var rt = globalThis.pdfjsLib = {};
El.d(rt, {
  AbortException: () => (
    /* reexport */
    co
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Fm
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    at
  ),
  AnnotationEditorType: () => (
    /* reexport */
    St
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    eo
  ),
  AnnotationLayer: () => (
    /* reexport */
    fk
  ),
  AnnotationMode: () => (
    /* reexport */
    Ji
  ),
  CMapCompressionType: () => (
    /* reexport */
    _g
  ),
  ColorPicker: () => (
    /* reexport */
    lu
  ),
  DOMSVGFactory: () => (
    /* reexport */
    u0
  ),
  DrawLayer: () => (
    /* reexport */
    Nm
  ),
  FeatureTest: () => (
    /* reexport */
    Ve
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    zi
  ),
  ImageKind: () => (
    /* reexport */
    Sd
  ),
  InvalidPDFException: () => (
    /* reexport */
    wb
  ),
  MissingPDFException: () => (
    /* reexport */
    lo
  ),
  OPS: () => (
    /* reexport */
    mn
  ),
  Outliner: () => (
    /* reexport */
    pm
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    uw
  ),
  PDFDateString: () => (
    /* reexport */
    Tb
  ),
  PDFWorker: () => (
    /* reexport */
    xo
  ),
  PasswordResponses: () => (
    /* reexport */
    bR
  ),
  PermissionFlag: () => (
    /* reexport */
    yR
  ),
  PixelsPerInch: () => (
    /* reexport */
    Cr
  ),
  RenderingCancelledException: () => (
    /* reexport */
    f0
  ),
  TextLayer: () => (
    /* reexport */
    ou
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    hp
  ),
  Util: () => (
    /* reexport */
    Q
  ),
  VerbosityLevel: () => (
    /* reexport */
    ap
  ),
  XfaLayer: () => (
    /* reexport */
    pw
  ),
  build: () => (
    /* reexport */
    qL
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    _R
  ),
  fetchData: () => (
    /* reexport */
    mp
  ),
  getDocument: () => (
    /* reexport */
    BL
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    FR
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    MR
  ),
  getXfaPageViewport: () => (
    /* reexport */
    DR
  ),
  isDataScheme: () => (
    /* reexport */
    p0
  ),
  isPdfFile: () => (
    /* reexport */
    g0
  ),
  noContextMenu: () => (
    /* reexport */
    Ge
  ),
  normalizeUnicode: () => (
    /* reexport */
    RR
  ),
  renderTextLayer: () => (
    /* reexport */
    RL
  ),
  setLayerDimensions: () => (
    /* reexport */
    to
  ),
  shadow: () => (
    /* reexport */
    Tt
  ),
  updateTextLayer: () => (
    /* reexport */
    LL
  ),
  version: () => (
    /* reexport */
    WL
  )
});
const Pe = typeof ct == "object" && ct + "" == "[object process]" && !ct.versions.nw && !(ct.versions.electron && ct.type && ct.type !== "browser"), bb = [1, 0, 0, 1, 0, 0], Eg = [1e-3, 0, 0, 1e-3, 0, 0], mR = 1e7, Xp = 1.35, un = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, Ji = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, vR = "pdfjs_internal_editor_", St = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, at = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, yR = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, _e = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Sd = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, ne = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, el = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, ap = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, _g = {
  NONE: 0,
  BINARY: 1
}, mn = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, bR = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let lp = ap.WARNINGS;
function wR(r) {
  Number.isInteger(r) && (lp = r);
}
function AR() {
  return lp;
}
function cp(r) {
  lp >= ap.INFOS && console.log(`Info: ${r}`);
}
function vt(r) {
  lp >= ap.WARNINGS && console.log(`Warning: ${r}`);
}
function Dt(r) {
  throw new Error(r);
}
function ae(r, t) {
  r || Dt(t);
}
function ER(r) {
  switch (r == null ? void 0 : r.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function _R(r, t = null, e = null) {
  if (!r)
    return null;
  try {
    if (e && typeof r == "string") {
      if (e.addDefaultProtocol && r.startsWith("www.")) {
        const i = r.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (r = `http://${r}`);
      }
      if (e.tryConvertEncoding)
        try {
          r = PR(r);
        } catch {
        }
    }
    const n = t ? new URL(r, t) : new URL(r);
    if (ER(n))
      return n;
  } catch {
  }
  return null;
}
function Tt(r, t, e, n = !1) {
  return Object.defineProperty(r, t, {
    value: e,
    enumerable: !n,
    configurable: !0,
    writable: !1
  }), e;
}
const Rr = function() {
  function t(e, n) {
    this.constructor === t && Dt("Cannot initialize BaseException."), this.message = e, this.name = n;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Sg extends Rr {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class xg extends Rr {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class wb extends Rr {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class lo extends Rr {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class hp extends Rr {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class SR extends Rr {
  constructor(t) {
    super(t, "FormatError");
  }
}
class co extends Rr {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Ab(r) {
  (typeof r != "object" || (r == null ? void 0 : r.length) === void 0) && Dt("Invalid argument for bytesToString");
  const t = r.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, r);
  const n = [];
  for (let i = 0; i < t; i += e) {
    const s = Math.min(i + e, t), o = r.subarray(i, s);
    n.push(String.fromCharCode.apply(null, o));
  }
  return n.join("");
}
function dp(r) {
  typeof r != "string" && Dt("Invalid argument for stringToBytes");
  const t = r.length, e = new Uint8Array(t);
  for (let n = 0; n < t; ++n)
    e[n] = r.charCodeAt(n) & 255;
  return e;
}
function xR(r) {
  return String.fromCharCode(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255);
}
function h0(r) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, n] of r)
    t[e] = n;
  return t;
}
function CR() {
  const r = new Uint8Array(4);
  return r[0] = 1, new Uint32Array(r.buffer, 0, 1)[0] === 1;
}
function TR() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class Ve {
  static get isLittleEndian() {
    return Tt(this, "isLittleEndian", CR());
  }
  static get isEvalSupported() {
    return Tt(this, "isEvalSupported", TR());
  }
  static get isOffscreenCanvasSupported() {
    return Tt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? Tt(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : Tt(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return Tt(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Yp = Array.from(Array(256).keys(), (r) => r.toString(16).padStart(2, "0"));
var Po, xd, Pl, Cg;
class Q {
  static makeHexColor(t, e, n) {
    return `#${Yp[t]}${Yp[e]}${Yp[n]}`;
  }
  static scaleMinMax(t, e) {
    let n;
    t[0] ? (t[0] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[3], e[3] *= t[3]) : (n = e[0], e[0] = e[1], e[1] = n, n = e[2], e[2] = e[3], e[3] = n, t[1] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const n = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [n, i];
  }
  static applyInverseTransform(t, e) {
    const n = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, s = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    return [i, s];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const n = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), s = this.applyTransform([t[0], t[3]], e), o = this.applyTransform([t[2], t[1]], e);
    return [Math.min(n[0], i[0], s[0], o[0]), Math.min(n[1], i[1], s[1], o[1]), Math.max(n[0], i[0], s[0], o[0]), Math.max(n[1], i[1], s[1], o[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], n = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], s = t[2] * e[0] + t[3] * e[2], o = t[2] * e[1] + t[3] * e[3], l = (n + o) / 2, c = Math.sqrt((n + o) ** 2 - 4 * (n * o - s * i)) / 2, d = l + c || 1, h = l - c || 1;
    return [Math.sqrt(d), Math.sqrt(h)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const n = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (n > i)
      return null;
    const s = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), o = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return s > o ? null : [n, s, i, o];
  }
  static bezierBoundingBox(t, e, n, i, s, o, l, c, d) {
    return d ? (d[0] = Math.min(d[0], t, l), d[1] = Math.min(d[1], e, c), d[2] = Math.max(d[2], t, l), d[3] = Math.max(d[3], e, c)) : d = [Math.min(t, l), Math.min(e, c), Math.max(t, l), Math.max(e, c)], A(this, Pl, Cg).call(this, t, n, s, l, e, i, o, c, 3 * (-t + 3 * (n - s) + l), 6 * (t - 2 * n + s), 3 * (n - t), d), A(this, Pl, Cg).call(this, t, n, s, l, e, i, o, c, 3 * (-e + 3 * (i - o) + c), 6 * (e - 2 * i + o), 3 * (i - e), d), d;
  }
}
Po = new WeakSet(), xd = function(t, e, n, i, s, o, l, c, d, h) {
  if (d <= 0 || d >= 1)
    return;
  const f = 1 - d, g = d * d, v = g * d, y = f * (f * (f * t + 3 * d * e) + 3 * g * n) + v * i, E = f * (f * (f * s + 3 * d * o) + 3 * g * l) + v * c;
  h[0] = Math.min(h[0], y), h[1] = Math.min(h[1], E), h[2] = Math.max(h[2], y), h[3] = Math.max(h[3], E);
}, Pl = new WeakSet(), Cg = function(t, e, n, i, s, o, l, c, d, h, f, g) {
  if (Math.abs(d) < 1e-12) {
    Math.abs(h) >= 1e-12 && A(this, Po, xd).call(this, t, e, n, i, s, o, l, c, -f / h, g);
    return;
  }
  const v = h ** 2 - 4 * f * d;
  if (v < 0)
    return;
  const y = Math.sqrt(v), E = 2 * d;
  A(this, Po, xd).call(this, t, e, n, i, s, o, l, c, (-h + y) / E, g), A(this, Po, xd).call(this, t, e, n, i, s, o, l, c, (-h - y) / E, g);
}, m(Q, Po), m(Q, Pl);
function PR(r) {
  return decodeURIComponent(escape(r));
}
let Kp = null, yv = null;
function RR(r) {
  return Kp || (Kp = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, yv = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), r.replaceAll(Kp, (t, e, n) => e ? e.normalize("NFKC") : yv.get(n));
}
function LR() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const r = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(r);
  else
    for (let t = 0; t < 32; t++)
      r[t] = Math.floor(Math.random() * 255);
  return Ab(r);
}
const Eb = "pdfjs_internal_id_", si = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class up {
  constructor() {
    this.constructor === up && Dt("Cannot initialize BaseFilterFactory.");
  }
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, n, i, s) {
    return "none";
  }
  destroy(t = !1) {
  }
}
class fp {
  constructor() {
    this.constructor === fp && Dt("Cannot initialize BaseCanvasFactory.");
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const n = this._createCanvas(t, e);
    return {
      canvas: n,
      context: n.getContext("2d")
    };
  }
  reset(t, e, n) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || n <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = n;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Dt("Abstract method `_createCanvas` called.");
  }
}
class pp {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.constructor === pp && Dt("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), n = this.isCompressed ? _g.BINARY : _g.NONE;
    return this._fetchData(e, n).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(t, e) {
    Dt("Abstract method `_fetchData` called.");
  }
}
class gp {
  constructor({
    baseUrl: t = null
  }) {
    this.constructor === gp && Dt("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetchData(e).catch((n) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(t) {
    Dt("Abstract method `_fetchData` called.");
  }
}
class d0 {
  constructor() {
    this.constructor === d0 && Dt("Cannot initialize BaseSVGFactory.");
  }
  create(t, e, n = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), n || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Dt("Abstract method `_createSVG` called.");
  }
}
const ai = "http://www.w3.org/2000/svg", Nr = class Nr {
};
dt(Nr, "CSS", 96), dt(Nr, "PDF", 72), dt(Nr, "PDF_TO_CSS_UNITS", Nr.CSS / Nr.PDF);
let Cr = Nr;
var Hr, Dn, fi, $e, du, jr, de, Se, tr, go, er, mo, Ro, Cd, uu, _b, Rl, Tg, nr, vo, zr, ol, Vr, al, Ll, Pg, Gr, ll;
class kR extends up {
  constructor({
    docId: e,
    ownerDocument: n = globalThis.document
  } = {}) {
    super();
    m(this, de);
    m(this, tr);
    m(this, er);
    m(this, Ro);
    m(this, uu);
    m(this, Rl);
    m(this, nr);
    m(this, zr);
    m(this, Vr);
    m(this, Ll);
    m(this, Gr);
    m(this, Hr, void 0);
    m(this, Dn, void 0);
    m(this, fi, void 0);
    m(this, $e, void 0);
    m(this, du, void 0);
    m(this, jr, 0);
    w(this, fi, e), w(this, $e, n);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let n = a(this, de, Se).get(e);
    if (n)
      return n;
    const [i, s, o] = A(this, Ro, Cd).call(this, e), l = e.length === 1 ? i : `${i}${s}${o}`;
    if (n = a(this, de, Se).get(l), n)
      return a(this, de, Se).set(e, n), n;
    const c = `g_${a(this, fi)}_transfer_map_${qe(this, jr)._++}`, d = `url(#${c})`;
    a(this, de, Se).set(e, d), a(this, de, Se).set(l, d);
    const h = A(this, nr, vo).call(this, c);
    return A(this, Vr, al).call(this, i, s, o, h), d;
  }
  addHCMFilter(e, n) {
    var y;
    const i = `${e}-${n}`, s = "base";
    let o = a(this, tr, go).get(s);
    if ((o == null ? void 0 : o.key) === i || (o ? ((y = o.filter) == null || y.remove(), o.key = i, o.url = "none", o.filter = null) : (o = {
      key: i,
      url: "none",
      filter: null
    }, a(this, tr, go).set(s, o)), !e || !n))
      return o.url;
    const l = A(this, Gr, ll).call(this, e);
    e = Q.makeHexColor(...l);
    const c = A(this, Gr, ll).call(this, n);
    if (n = Q.makeHexColor(...c), a(this, er, mo).style.color = "", e === "#000000" && n === "#ffffff" || e === n)
      return o.url;
    const d = new Array(256);
    for (let E = 0; E <= 255; E++) {
      const x = E / 255;
      d[E] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const h = d.join(","), f = `g_${a(this, fi)}_hcm_filter`, g = o.filter = A(this, nr, vo).call(this, f);
    A(this, Vr, al).call(this, h, h, h, g), A(this, Rl, Tg).call(this, g);
    const v = (E, x) => {
      const _ = l[E] / 255, P = c[E] / 255, L = new Array(x + 1);
      for (let k = 0; k <= x; k++)
        L[k] = _ + k / x * (P - _);
      return L.join(",");
    };
    return A(this, Vr, al).call(this, v(0, 5), v(1, 5), v(2, 5), g), o.url = `url(#${f})`, o.url;
  }
  addAlphaFilter(e) {
    let n = a(this, de, Se).get(e);
    if (n)
      return n;
    const [i] = A(this, Ro, Cd).call(this, [e]), s = `alpha_${i}`;
    if (n = a(this, de, Se).get(s), n)
      return a(this, de, Se).set(e, n), n;
    const o = `g_${a(this, fi)}_alpha_map_${qe(this, jr)._++}`, l = `url(#${o})`;
    a(this, de, Se).set(e, l), a(this, de, Se).set(s, l);
    const c = A(this, nr, vo).call(this, o);
    return A(this, Ll, Pg).call(this, i, c), l;
  }
  addLuminosityFilter(e) {
    let n = a(this, de, Se).get(e || "luminosity");
    if (n)
      return n;
    let i, s;
    if (e ? ([i] = A(this, Ro, Cd).call(this, [e]), s = `luminosity_${i}`) : s = "luminosity", n = a(this, de, Se).get(s), n)
      return a(this, de, Se).set(e, n), n;
    const o = `g_${a(this, fi)}_luminosity_map_${qe(this, jr)._++}`, l = `url(#${o})`;
    a(this, de, Se).set(e, l), a(this, de, Se).set(s, l);
    const c = A(this, nr, vo).call(this, o);
    return A(this, uu, _b).call(this, c), e && A(this, Ll, Pg).call(this, i, c), l;
  }
  addHighlightHCMFilter(e, n, i, s, o) {
    var P;
    const l = `${n}-${i}-${s}-${o}`;
    let c = a(this, tr, go).get(e);
    if ((c == null ? void 0 : c.key) === l || (c ? ((P = c.filter) == null || P.remove(), c.key = l, c.url = "none", c.filter = null) : (c = {
      key: l,
      url: "none",
      filter: null
    }, a(this, tr, go).set(e, c)), !n || !i))
      return c.url;
    const [d, h] = [n, i].map(A(this, Gr, ll).bind(this));
    let f = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), g = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), [v, y] = [s, o].map(A(this, Gr, ll).bind(this));
    g < f && ([f, g, v, y] = [g, f, y, v]), a(this, er, mo).style.color = "";
    const E = (L, k, F) => {
      const I = new Array(256), M = (g - f) / F, C = L / 255, T = (k - L) / (255 * F);
      let O = 0;
      for (let D = 0; D <= F; D++) {
        const H = Math.round(f + D * M), j = C + D * T;
        for (let V = O; V <= H; V++)
          I[V] = j;
        O = H + 1;
      }
      for (let D = O; D < 256; D++)
        I[D] = I[O - 1];
      return I.join(",");
    }, x = `g_${a(this, fi)}_hcm_${e}_filter`, _ = c.filter = A(this, nr, vo).call(this, x);
    return A(this, Rl, Tg).call(this, _), A(this, Vr, al).call(this, E(v[0], y[0], 5), E(v[1], y[1], 5), E(v[2], y[2], 5), _), c.url = `url(#${x})`, c.url;
  }
  destroy(e = !1) {
    e && a(this, tr, go).size !== 0 || (a(this, Dn) && (a(this, Dn).parentNode.parentNode.remove(), w(this, Dn, null)), a(this, Hr) && (a(this, Hr).clear(), w(this, Hr, null)), w(this, jr, 0));
  }
}
Hr = new WeakMap(), Dn = new WeakMap(), fi = new WeakMap(), $e = new WeakMap(), du = new WeakMap(), jr = new WeakMap(), de = new WeakSet(), Se = function() {
  return a(this, Hr) || w(this, Hr, /* @__PURE__ */ new Map());
}, tr = new WeakSet(), go = function() {
  return a(this, du) || w(this, du, /* @__PURE__ */ new Map());
}, er = new WeakSet(), mo = function() {
  if (!a(this, Dn)) {
    const e = a(this, $e).createElement("div"), {
      style: n
    } = e;
    n.visibility = "hidden", n.contain = "strict", n.width = n.height = 0, n.position = "absolute", n.top = n.left = 0, n.zIndex = -1;
    const i = a(this, $e).createElementNS(ai, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), w(this, Dn, a(this, $e).createElementNS(ai, "defs")), e.append(i), i.append(a(this, Dn)), a(this, $e).body.append(e);
  }
  return a(this, Dn);
}, Ro = new WeakSet(), Cd = function(e) {
  if (e.length === 1) {
    const d = e[0], h = new Array(256);
    for (let g = 0; g < 256; g++)
      h[g] = d[g] / 255;
    const f = h.join(",");
    return [f, f, f];
  }
  const [n, i, s] = e, o = new Array(256), l = new Array(256), c = new Array(256);
  for (let d = 0; d < 256; d++)
    o[d] = n[d] / 255, l[d] = i[d] / 255, c[d] = s[d] / 255;
  return [o.join(","), l.join(","), c.join(",")];
}, uu = new WeakSet(), _b = function(e) {
  const n = a(this, $e).createElementNS(ai, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(n);
}, Rl = new WeakSet(), Tg = function(e) {
  const n = a(this, $e).createElementNS(ai, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(n);
}, nr = new WeakSet(), vo = function(e) {
  const n = a(this, $e).createElementNS(ai, "filter");
  return n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("id", e), a(this, er, mo).append(n), n;
}, zr = new WeakSet(), ol = function(e, n, i) {
  const s = a(this, $e).createElementNS(ai, n);
  s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), e.append(s);
}, Vr = new WeakSet(), al = function(e, n, i, s) {
  const o = a(this, $e).createElementNS(ai, "feComponentTransfer");
  s.append(o), A(this, zr, ol).call(this, o, "feFuncR", e), A(this, zr, ol).call(this, o, "feFuncG", n), A(this, zr, ol).call(this, o, "feFuncB", i);
}, Ll = new WeakSet(), Pg = function(e, n) {
  const i = a(this, $e).createElementNS(ai, "feComponentTransfer");
  n.append(i), A(this, zr, ol).call(this, i, "feFuncA", e);
}, Gr = new WeakSet(), ll = function(e) {
  return a(this, er, mo).style.color = e, m0(getComputedStyle(a(this, er, mo)).getPropertyValue("color"));
};
class IR extends fp {
  constructor({
    ownerDocument: t = globalThis.document
  } = {}) {
    super(), this._document = t;
  }
  _createCanvas(t, e) {
    const n = this._document.createElement("canvas");
    return n.width = t, n.height = e, n;
  }
}
async function mp(r, t = "text") {
  if (cl(r, document.baseURI)) {
    const e = await fetch(r);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, n) => {
    const i = new XMLHttpRequest();
    i.open("GET", r, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        n(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class Sb extends pp {
  _fetchData(t, e) {
    return mp(t, this.isCompressed ? "arraybuffer" : "text").then((n) => ({
      cMapData: n instanceof ArrayBuffer ? new Uint8Array(n) : dp(n),
      compressionType: e
    }));
  }
}
class xb extends gp {
  _fetchData(t) {
    return mp(t, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class u0 extends d0 {
  _createSVG(t) {
    return document.createElementNS(ai, t);
  }
}
class Jh {
  constructor({
    viewBox: t,
    scale: e,
    rotation: n,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = n, this.offsetX = i, this.offsetY = s;
    const l = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
    let d, h, f, g;
    switch (n %= 360, n < 0 && (n += 360), n) {
      case 180:
        d = -1, h = 0, f = 0, g = 1;
        break;
      case 90:
        d = 0, h = 1, f = 1, g = 0;
        break;
      case 270:
        d = 0, h = -1, f = -1, g = 0;
        break;
      case 0:
        d = 1, h = 0, f = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (f = -f, g = -g);
    let v, y, E, x;
    d === 0 ? (v = Math.abs(c - t[1]) * e + i, y = Math.abs(l - t[0]) * e + s, E = (t[3] - t[1]) * e, x = (t[2] - t[0]) * e) : (v = Math.abs(l - t[0]) * e + i, y = Math.abs(c - t[1]) * e + s, E = (t[2] - t[0]) * e, x = (t[3] - t[1]) * e), this.transform = [d * e, h * e, f * e, g * e, v - d * e * l - f * e * c, y - h * e * l - g * e * c], this.width = E, this.height = x;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return Tt(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: n = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: s = !1
  } = {}) {
    return new Jh({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: s
    });
  }
  convertToViewportPoint(t, e) {
    return Q.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = Q.applyTransform([t[0], t[1]], this.transform), n = Q.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], n[0], n[1]];
  }
  convertToPdfPoint(t, e) {
    return Q.applyInverseTransform([t, e], this.transform);
  }
}
class f0 extends Rr {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function p0(r) {
  const t = r.length;
  let e = 0;
  for (; e < t && r[e].trim() === ""; )
    e++;
  return r.substring(e, e + 5).toLowerCase() === "data:";
}
function g0(r) {
  return typeof r == "string" && /\.pdf$/i.test(r);
}
function FR(r) {
  return [r] = r.split(/[#?]/, 1), r.substring(r.lastIndexOf("/") + 1);
}
function MR(r, t = "document.pdf") {
  if (typeof r != "string")
    return t;
  if (p0(r))
    return vt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, n = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(r);
  let s = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
  if (s && (s = s[0], s.includes("%")))
    try {
      s = n.exec(decodeURIComponent(s))[0];
    } catch {
    }
  return s || t;
}
class bv {
  constructor() {
    dt(this, "started", /* @__PURE__ */ Object.create(null));
    dt(this, "times", []);
  }
  time(t) {
    t in this.started && vt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || vt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: n
    } of this.times)
      e = Math.max(n.length, e);
    for (const {
      name: n,
      start: i,
      end: s
    } of this.times)
      t.push(`${n.padEnd(e)} ${s - i}ms
`);
    return t.join("");
  }
}
function cl(r, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(r, t) : new URL(r);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Ge(r) {
  r.preventDefault();
}
function Cb(r) {
  console.log("Deprecated API usage: " + r);
}
let wv;
class Tb {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    wv || (wv = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = wv.exec(t);
    if (!e)
      return null;
    const n = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let s = parseInt(e[3], 10);
    s = s >= 1 && s <= 31 ? s : 1;
    let o = parseInt(e[4], 10);
    o = o >= 0 && o <= 23 ? o : 0;
    let l = parseInt(e[5], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    let c = parseInt(e[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const d = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let f = parseInt(e[9], 10) || 0;
    return f = f >= 0 && f <= 59 ? f : 0, d === "-" ? (o += h, l += f) : d === "+" && (o -= h, l -= f), new Date(Date.UTC(n, i, s, o, l, c));
  }
}
function DR(r, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: n,
    height: i
  } = r.attributes.style, s = [0, 0, parseInt(n), parseInt(i)];
  return new Jh({
    viewBox: s,
    scale: t,
    rotation: e
  });
}
function m0(r) {
  if (r.startsWith("#")) {
    const t = parseInt(r.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return r.startsWith("rgb(") ? r.slice(4, -1).split(",").map((t) => parseInt(t)) : r.startsWith("rgba(") ? r.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (vt(`Not a valid color format: "${r}"`), [0, 0, 0]);
}
function OR(r) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of r.keys()) {
    t.style.color = e;
    const n = window.getComputedStyle(t).color;
    r.set(e, m0(n));
  }
  t.remove();
}
function Vt(r) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: s,
    f: o
  } = r.getTransform();
  return [t, e, n, i, s, o];
}
function oi(r) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: s,
    f: o
  } = r.getTransform().invertSelf();
  return [t, e, n, i, s, o];
}
function to(r, t, e = !1, n = !0) {
  if (t instanceof Jh) {
    const {
      pageWidth: i,
      pageHeight: s
    } = t.rawDims, {
      style: o
    } = r, l = Ve.isCSSRoundSupported, c = `var(--scale-factor) * ${i}px`, d = `var(--scale-factor) * ${s}px`, h = l ? `round(${c}, 1px)` : `calc(${c})`, f = l ? `round(${d}, 1px)` : `calc(${d})`;
    !e || t.rotation % 180 === 0 ? (o.width = h, o.height = f) : (o.width = f, o.height = h);
  }
  n && r.setAttribute("data-main-rotation", t.rotation);
}
var Wr, qr, On, Xr, fu, Pb, pu, Rb, gu, Lb, Lo, Td, mu, kb, kl, Lg;
const vu = class vu {
  constructor(t) {
    m(this, pu);
    m(this, gu);
    m(this, Lo);
    m(this, mu);
    m(this, kl);
    m(this, Wr, null);
    m(this, qr, null);
    m(this, On, void 0);
    m(this, Xr, null);
    w(this, On, t);
  }
  render() {
    const t = w(this, Wr, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ge), t.addEventListener("pointerdown", A(vu, fu, Pb));
    const e = w(this, Xr, document.createElement("div"));
    e.className = "buttons", t.append(e);
    const n = a(this, On).toolbarPosition;
    if (n) {
      const {
        style: i
      } = t, s = a(this, On)._uiManager.direction === "ltr" ? 1 - n[0] : n[0];
      i.insetInlineEnd = `${100 * s}%`, i.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return A(this, mu, kb).call(this), t;
  }
  hide() {
    var t;
    a(this, Wr).classList.add("hidden"), (t = a(this, qr)) == null || t.hideDropdown();
  }
  show() {
    a(this, Wr).classList.remove("hidden");
  }
  addAltTextButton(t) {
    A(this, Lo, Td).call(this, t), a(this, Xr).prepend(t, a(this, kl, Lg));
  }
  addColorPicker(t) {
    w(this, qr, t);
    const e = t.renderButton();
    A(this, Lo, Td).call(this, e), a(this, Xr).prepend(e, a(this, kl, Lg));
  }
  remove() {
    var t;
    a(this, Wr).remove(), (t = a(this, qr)) == null || t.destroy(), w(this, qr, null);
  }
};
Wr = new WeakMap(), qr = new WeakMap(), On = new WeakMap(), Xr = new WeakMap(), fu = new WeakSet(), Pb = function(t) {
  t.stopPropagation();
}, pu = new WeakSet(), Rb = function(t) {
  a(this, On)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, gu = new WeakSet(), Lb = function(t) {
  a(this, On)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, Lo = new WeakSet(), Td = function(t) {
  t.addEventListener("focusin", A(this, pu, Rb).bind(this), {
    capture: !0
  }), t.addEventListener("focusout", A(this, gu, Lb).bind(this), {
    capture: !0
  }), t.addEventListener("contextmenu", Ge);
}, mu = new WeakSet(), kb = function() {
  const t = document.createElement("button");
  t.className = "delete", t.tabIndex = 0, t.setAttribute("data-l10n-id", `pdfjs-editor-remove-${a(this, On).editorType}-button`), A(this, Lo, Td).call(this, t), t.addEventListener("click", (e) => {
    a(this, On)._uiManager.delete();
  }), a(this, Xr).append(t);
}, kl = new WeakSet(), Lg = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(vu, fu);
let Rg = vu;
var Il, Yr, Fl, yu, Ib, bu, Fb, wu, Mb;
class NR {
  constructor(t) {
    m(this, yu);
    m(this, bu);
    m(this, wu);
    m(this, Il, null);
    m(this, Yr, null);
    m(this, Fl, void 0);
    w(this, Fl, t);
  }
  show(t, e, n) {
    const [i, s] = A(this, bu, Fb).call(this, e, n), {
      style: o
    } = a(this, Yr) || w(this, Yr, A(this, yu, Ib).call(this));
    t.append(a(this, Yr)), o.insetInlineEnd = `${100 * i}%`, o.top = `calc(${100 * s}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    a(this, Yr).remove();
  }
}
Il = new WeakMap(), Yr = new WeakMap(), Fl = new WeakMap(), yu = new WeakSet(), Ib = function() {
  const t = w(this, Yr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ge);
  const e = w(this, Il, document.createElement("div"));
  return e.className = "buttons", t.append(e), A(this, wu, Mb).call(this), t;
}, bu = new WeakSet(), Fb = function(t, e) {
  let n = 0, i = 0;
  for (const s of t) {
    const o = s.y + s.height;
    if (o < n)
      continue;
    const l = s.x + (e ? s.width : 0);
    if (o > n) {
      i = l, n = o;
      continue;
    }
    e ? l > i && (i = l) : l < i && (i = l);
  }
  return [e ? 1 - i : i, n];
}, wu = new WeakSet(), Mb = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"), t.addEventListener("contextmenu", Ge), t.addEventListener("click", () => {
    a(this, Fl).highlightSelection("floating_button");
  }), a(this, Il).append(t);
};
function iu(r, t, e) {
  for (const n of e)
    t.addEventListener(n, r[n].bind(r));
}
function BR(r) {
  return Math.round(Math.min(255, Math.max(1, 255 * r))).toString(16).padStart(2, "0");
}
var Au;
class $R {
  constructor() {
    m(this, Au, 0);
  }
  get id() {
    return `${vR}${qe(this, Au)._++}`;
  }
}
Au = new WeakMap();
var Ml, Eu, ln, Dl, Ig;
const C0 = class C0 {
  constructor() {
    m(this, Dl);
    m(this, Ml, LR());
    m(this, Eu, 0);
    m(this, ln, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', n = new OffscreenCanvas(1, 3).getContext("2d"), i = new Image();
    i.src = t;
    const s = i.decode().then(() => (n.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(n.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Tt(this, "_isSVGFittingCanvas", s);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: n,
      size: i,
      type: s
    } = t;
    return A(this, Dl, Ig).call(this, `${e}_${n}_${i}_${s}`, t);
  }
  async getFromUrl(t) {
    return A(this, Dl, Ig).call(this, t, t);
  }
  async getFromId(t) {
    a(this, ln) || w(this, ln, /* @__PURE__ */ new Map());
    const e = a(this, ln).get(t);
    return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null;
  }
  getSvgUrl(t) {
    const e = a(this, ln).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    a(this, ln) || w(this, ln, /* @__PURE__ */ new Map());
    const e = a(this, ln).get(t);
    e && (e.refCounter -= 1, e.refCounter === 0 && (e.bitmap = null));
  }
  isValidId(t) {
    return t.startsWith(`image_${a(this, Ml)}_`);
  }
};
Ml = new WeakMap(), Eu = new WeakMap(), ln = new WeakMap(), Dl = new WeakSet(), Ig = async function(t, e) {
  a(this, ln) || w(this, ln, /* @__PURE__ */ new Map());
  let n = a(this, ln).get(t);
  if (n === null)
    return null;
  if (n != null && n.bitmap)
    return n.refCounter += 1, n;
  try {
    n || (n = {
      bitmap: null,
      id: `image_${a(this, Ml)}_${qe(this, Eu)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (n.url = e, i = await mp(e, "blob")) : i = n.file = e, i.type === "image/svg+xml") {
      const s = C0._isSVGFittingCanvas, o = new FileReader(), l = new Image(), c = new Promise((d, h) => {
        l.onload = () => {
          n.bitmap = l, n.isSvg = !0, d();
        }, o.onload = async () => {
          const f = n.svgUrl = o.result;
          l.src = await s ? `${f}#svgView(preserveAspectRatio(none))` : f;
        }, l.onerror = o.onerror = h;
      });
      o.readAsDataURL(i), await c;
    } else
      n.bitmap = await createImageBitmap(i);
    n.refCounter = 1;
  } catch (i) {
    console.error(i), n = null;
  }
  return a(this, ln).set(t, n), n && a(this, ln).set(n.id, n), n;
};
let kg = C0;
var ue, ir, Ol, fe;
class UR {
  constructor(t = 128) {
    m(this, ue, []);
    m(this, ir, !1);
    m(this, Ol, void 0);
    m(this, fe, -1);
    w(this, Ol, t);
  }
  add({
    cmd: t,
    undo: e,
    post: n,
    mustExec: i,
    type: s = NaN,
    overwriteIfSameType: o = !1,
    keepUndo: l = !1
  }) {
    if (i && t(), a(this, ir))
      return;
    const c = {
      cmd: t,
      undo: e,
      post: n,
      type: s
    };
    if (a(this, fe) === -1) {
      a(this, ue).length > 0 && (a(this, ue).length = 0), w(this, fe, 0), a(this, ue).push(c);
      return;
    }
    if (o && a(this, ue)[a(this, fe)].type === s) {
      l && (c.undo = a(this, ue)[a(this, fe)].undo), a(this, ue)[a(this, fe)] = c;
      return;
    }
    const d = a(this, fe) + 1;
    d === a(this, Ol) ? a(this, ue).splice(0, 1) : (w(this, fe, d), d < a(this, ue).length && a(this, ue).splice(d)), a(this, ue).push(c);
  }
  undo() {
    if (a(this, fe) === -1)
      return;
    w(this, ir, !0);
    const {
      undo: t,
      post: e
    } = a(this, ue)[a(this, fe)];
    t(), e == null || e(), w(this, ir, !1), w(this, fe, a(this, fe) - 1);
  }
  redo() {
    if (a(this, fe) < a(this, ue).length - 1) {
      w(this, fe, a(this, fe) + 1), w(this, ir, !0);
      const {
        cmd: t,
        post: e
      } = a(this, ue)[a(this, fe)];
      t(), e == null || e(), w(this, ir, !1);
    }
  }
  hasSomethingToUndo() {
    return a(this, fe) !== -1;
  }
  hasSomethingToRedo() {
    return a(this, fe) < a(this, ue).length - 1;
  }
  destroy() {
    w(this, ue, null);
  }
}
ue = new WeakMap(), ir = new WeakMap(), Ol = new WeakMap(), fe = new WeakMap();
var _u, Db;
class Qh {
  constructor(t) {
    m(this, _u);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Ve.platform;
    for (const [n, i, s = {}] of t)
      for (const o of n) {
        const l = o.startsWith("mac+");
        e && l ? (this.callbacks.set(o.slice(4), {
          callback: i,
          options: s
        }), this.allKeys.add(o.split("+").at(-1))) : !e && !l && (this.callbacks.set(o, {
          callback: i,
          options: s
        }), this.allKeys.add(o.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const n = this.callbacks.get(A(this, _u, Db).call(this, e));
    if (!n)
      return;
    const {
      callback: i,
      options: {
        bubbles: s = !1,
        args: o = [],
        checker: l = null
      }
    } = n;
    l && !l(t, e) || (i.bind(t, ...o, e)(), s || (e.stopPropagation(), e.preventDefault()));
  }
}
_u = new WeakSet(), Db = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Su = class Su {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return OR(t), Tt(this, "_colors", t);
  }
  convert(t) {
    const e = m0(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [n, i] of this._colors)
      if (i.every((s, o) => s === e[o]))
        return Su._colorsMapping.get(n);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? Q.makeHexColor(...e) : t;
  }
};
dt(Su, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Fg = Su;
var Ke, ie, me, ko, pi, Io, vn, Fo, Kr, Nn, gi, Zr, Nl, Bl, Bn, Mo, rr, $n, xu, sr, $l, Jr, Ul, Do, ve, It, mi, Qr, Hl, jl, zl, Vl, Gl, Wl, ql, Xl, Yl, Kl, Zl, Jl, Ql, tc, or, Un, vi, ec, Oo, Pd, Cu, Ob, Tu, Nb, No, Rd, Pu, Bb, Ru, $b, Lu, Ub, nc, Mg, ic, Dg, rc, Og, sc, Ng, oc, Bg, ye, Ie, Hn, Yi, ku, Hb, Iu, jb, ac, $g, Fu, zb, ts, hl, lc, Ug;
const Eo = class Eo {
  constructor(t, e, n, i, s, o, l, c, d) {
    m(this, Oo);
    m(this, Cu);
    m(this, Tu);
    m(this, No);
    m(this, Pu);
    m(this, Ru);
    m(this, Lu);
    m(this, nc);
    m(this, ic);
    m(this, rc);
    m(this, sc);
    m(this, oc);
    m(this, ye);
    m(this, Hn);
    m(this, ku);
    m(this, Iu);
    m(this, ac);
    m(this, Fu);
    m(this, ts);
    m(this, lc);
    m(this, Ke, null);
    m(this, ie, /* @__PURE__ */ new Map());
    m(this, me, /* @__PURE__ */ new Map());
    m(this, ko, null);
    m(this, pi, null);
    m(this, Io, null);
    m(this, vn, new UR());
    m(this, Fo, 0);
    m(this, Kr, /* @__PURE__ */ new Set());
    m(this, Nn, null);
    m(this, gi, null);
    m(this, Zr, /* @__PURE__ */ new Set());
    m(this, Nl, !1);
    m(this, Bl, null);
    m(this, Bn, null);
    m(this, Mo, null);
    m(this, rr, !1);
    m(this, $n, null);
    m(this, xu, new $R());
    m(this, sr, !1);
    m(this, $l, !1);
    m(this, Jr, null);
    m(this, Ul, null);
    m(this, Do, null);
    m(this, ve, St.NONE);
    m(this, It, /* @__PURE__ */ new Set());
    m(this, mi, null);
    m(this, Qr, null);
    m(this, Hl, null);
    m(this, jl, this.blur.bind(this));
    m(this, zl, this.focus.bind(this));
    m(this, Vl, this.copy.bind(this));
    m(this, Gl, this.cut.bind(this));
    m(this, Wl, this.paste.bind(this));
    m(this, ql, this.keydown.bind(this));
    m(this, Xl, this.keyup.bind(this));
    m(this, Yl, this.onEditingAction.bind(this));
    m(this, Kl, this.onPageChanging.bind(this));
    m(this, Zl, this.onScaleChanging.bind(this));
    m(this, Jl, A(this, Tu, Nb).bind(this));
    m(this, Ql, this.onRotationChanging.bind(this));
    m(this, tc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, or, [0, 0]);
    m(this, Un, null);
    m(this, vi, null);
    m(this, ec, null);
    w(this, vi, t), w(this, ec, e), w(this, ko, n), this._eventBus = i, this._eventBus._on("editingaction", a(this, Yl)), this._eventBus._on("pagechanging", a(this, Kl)), this._eventBus._on("scalechanging", a(this, Zl)), this._eventBus._on("rotationchanging", a(this, Ql)), A(this, Pu, Bb).call(this), A(this, ic, Dg).call(this), w(this, pi, s.annotationStorage), w(this, Bl, s.filterFactory), w(this, Qr, o), w(this, Mo, l || null), w(this, Nl, c), w(this, Do, d || null), this.viewParameters = {
      realScale: Cr.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = Eo.prototype, e = (o) => a(o, vi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && o.hasSomethingToControl(), n = (o, {
      target: l
    }) => {
      if (l instanceof HTMLInputElement) {
        const {
          type: c
        } = l;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, s = this.TRANSLATE_BIG;
    return Tt(this, "_keyboardManager", new Qh([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: n
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: n
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: n
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: n
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (o, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && a(o, vi).contains(l) && !o.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (o, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && a(o, vi).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, s],
      checker: e
    }]]));
  }
  destroy() {
    var t, e;
    A(this, rc, Og).call(this), A(this, nc, Mg).call(this), this._eventBus._off("editingaction", a(this, Yl)), this._eventBus._off("pagechanging", a(this, Kl)), this._eventBus._off("scalechanging", a(this, Zl)), this._eventBus._off("rotationchanging", a(this, Ql));
    for (const n of a(this, me).values())
      n.destroy();
    a(this, me).clear(), a(this, ie).clear(), a(this, Zr).clear(), w(this, Ke, null), a(this, It).clear(), a(this, vn).destroy(), (t = a(this, ko)) == null || t.destroy(), (e = a(this, $n)) == null || e.hide(), w(this, $n, null), a(this, Bn) && (clearTimeout(a(this, Bn)), w(this, Bn, null)), a(this, Un) && (clearTimeout(a(this, Un)), w(this, Un, null)), A(this, Ru, $b).call(this);
  }
  async mlGuess(t) {
    var e;
    return ((e = a(this, Do)) == null ? void 0 : e.guess(t)) || null;
  }
  get hasMLManager() {
    return !!a(this, Do);
  }
  get hcmFilter() {
    return Tt(this, "hcmFilter", a(this, Qr) ? a(this, Bl).addHCMFilter(a(this, Qr).foreground, a(this, Qr).background) : "none");
  }
  get direction() {
    return Tt(this, "direction", getComputedStyle(a(this, vi)).direction);
  }
  get highlightColors() {
    return Tt(this, "highlightColors", a(this, Mo) ? new Map(a(this, Mo).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return Tt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    w(this, Ul, t);
  }
  editAltText(t) {
    var e;
    (e = a(this, ko)) == null || e.editAltText(this, t);
  }
  onPageChanging({
    pageNumber: t
  }) {
    w(this, Fo, t - 1);
  }
  focusMainContainer() {
    a(this, vi).focus();
  }
  findParent(t, e) {
    for (const n of a(this, me).values()) {
      const {
        x: i,
        y: s,
        width: o,
        height: l
      } = n.div.getBoundingClientRect();
      if (t >= i && t <= i + o && e >= s && e <= s + l)
        return n;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    a(this, ec).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    a(this, Zr).add(t);
  }
  removeShouldRescale(t) {
    a(this, Zr).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * Cr.PDF_TO_CSS_UNITS;
    for (const e of a(this, Zr))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: n,
      anchorOffset: i,
      focusNode: s,
      focusOffset: o
    } = e, l = e.toString(), d = A(this, Oo, Pd).call(this, e).closest(".textLayer"), h = this.getSelectionBoxes(d);
    if (h) {
      e.empty(), a(this, ve) === St.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: St.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const f of a(this, me).values())
        if (f.hasTextLayer(d)) {
          f.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: t,
            boxes: h,
            anchorNode: n,
            anchorOffset: i,
            focusNode: s,
            focusOffset: o,
            text: l
          });
          break;
        }
    }
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && a(this, pi) && !a(this, pi).has(t.id) && a(this, pi).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, a(this, rr) && (w(this, rr, !1), A(this, No, Rd).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of a(this, It))
      if (e.div.contains(t)) {
        w(this, Jr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!a(this, Jr))
      return;
    const [t, e] = a(this, Jr);
    w(this, Jr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0
    }), e.focus();
  }
  addEditListeners() {
    A(this, ic, Dg).call(this), A(this, sc, Ng).call(this);
  }
  removeEditListeners() {
    A(this, rc, Og).call(this), A(this, oc, Bg).call(this);
  }
  copy(t) {
    var n;
    if (t.preventDefault(), (n = a(this, Ke)) == null || n.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of a(this, It)) {
      const s = i.serialize(!0);
      s && e.push(s);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const s of e.items)
      for (const o of a(this, gi))
        if (o.isHandlingMimeForPasting(s.type)) {
          o.paste(s, this.currentLayer);
          return;
        }
    let n = e.getData("application/pdfjs");
    if (!n)
      return;
    try {
      n = JSON.parse(n);
    } catch (s) {
      vt(`paste: "${s.message}".`);
      return;
    }
    if (!Array.isArray(n))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const s = [];
      for (const c of n) {
        const d = i.deserialize(c);
        if (!d)
          return;
        s.push(d);
      }
      const o = () => {
        for (const c of s)
          A(this, ac, $g).call(this, c);
        A(this, lc, Ug).call(this, s);
      }, l = () => {
        for (const c of s)
          c.remove();
      };
      this.addCommands({
        cmd: o,
        undo: l,
        mustExec: !0
      });
    } catch (s) {
      vt(`paste: "${s.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), a(this, ve) !== St.NONE && !this.isEditorHandlingKeyboard && Eo._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, a(this, rr) && (w(this, rr, !1), A(this, No, Rd).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (A(this, Lu, Ub).call(this), A(this, sc, Ng).call(this), A(this, ye, Ie).call(this, {
      isEditing: a(this, ve) !== St.NONE,
      isEmpty: A(this, ts, hl).call(this),
      hasSomethingToUndo: a(this, vn).hasSomethingToUndo(),
      hasSomethingToRedo: a(this, vn).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (A(this, nc, Mg).call(this), A(this, oc, Bg).call(this), A(this, ye, Ie).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!a(this, gi)) {
      w(this, gi, t);
      for (const e of a(this, gi))
        A(this, Hn, Yi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return a(this, xu).id;
  }
  get currentLayer() {
    return a(this, me).get(a(this, Fo));
  }
  getLayer(t) {
    return a(this, me).get(t);
  }
  get currentPageIndex() {
    return a(this, Fo);
  }
  addLayer(t) {
    a(this, me).set(t.pageIndex, t), a(this, sr) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    a(this, me).delete(t.pageIndex);
  }
  updateMode(t, e = null, n = !1) {
    if (a(this, ve) !== t) {
      if (w(this, ve, t), t === St.NONE) {
        this.setEditingState(!1), A(this, Iu, jb).call(this);
        return;
      }
      this.setEditingState(!0), A(this, ku, Hb).call(this), this.unselectAll();
      for (const i of a(this, me).values())
        i.updateMode(t);
      if (!e && n) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (e) {
        for (const i of a(this, ie).values())
          if (i.annotationElementId === e) {
            this.setSelected(i), i.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== a(this, ve) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var n;
    if (a(this, gi)) {
      switch (t) {
        case at.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case at.HIGHLIGHT_DEFAULT_COLOR:
          (n = a(this, Ul)) == null || n.updateColor(e);
          break;
        case at.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (a(this, Hl) || w(this, Hl, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of a(this, It))
        i.updateParams(t, e);
      for (const i of a(this, gi))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, n = !1) {
    var s;
    for (const o of a(this, ie).values())
      o.editorType === t && o.show(e);
    (((s = a(this, Hl)) == null ? void 0 : s.get(at.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, Hn, Yi).call(this, [[at.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (a(this, $l) !== t) {
      w(this, $l, t);
      for (const e of a(this, me).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const n of a(this, ie).values())
      n.pageIndex === t && e.push(n);
    return e;
  }
  getEditor(t) {
    return a(this, ie).get(t);
  }
  addEditor(t) {
    a(this, ie).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (a(this, Bn) && clearTimeout(a(this, Bn)), w(this, Bn, setTimeout(() => {
      this.focusMainContainer(), w(this, Bn, null);
    }, 0))), a(this, ie).delete(t.id), this.unselect(t), (!t.annotationElementId || !a(this, Kr).has(t.annotationElementId)) && ((e = a(this, pi)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    a(this, Kr).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return a(this, Kr).has(t);
  }
  removeDeletedAnnotationElement(t) {
    a(this, Kr).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    a(this, Ke) !== t && (w(this, Ke, t), t && A(this, Hn, Yi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    a(this, Fu, zb) === t && A(this, Hn, Yi).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (a(this, It).has(t)) {
      a(this, It).delete(t), t.unselect(), A(this, ye, Ie).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    a(this, It).add(t), t.select(), A(this, Hn, Yi).call(this, t.propertiesToUpdate), A(this, ye, Ie).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of a(this, It))
      e !== t && e.unselect();
    a(this, It).clear(), a(this, It).add(t), t.select(), A(this, Hn, Yi).call(this, t.propertiesToUpdate), A(this, ye, Ie).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return a(this, It).has(t);
  }
  get firstSelectedEditor() {
    return a(this, It).values().next().value;
  }
  unselect(t) {
    t.unselect(), a(this, It).delete(t), A(this, ye, Ie).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return a(this, It).size !== 0;
  }
  get isEnterHandled() {
    return a(this, It).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    a(this, vn).undo(), A(this, ye, Ie).call(this, {
      hasSomethingToUndo: a(this, vn).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, ts, hl).call(this)
    });
  }
  redo() {
    a(this, vn).redo(), A(this, ye, Ie).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: a(this, vn).hasSomethingToRedo(),
      isEmpty: A(this, ts, hl).call(this)
    });
  }
  addCommands(t) {
    a(this, vn).add(t), A(this, ye, Ie).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, ts, hl).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...a(this, It)], e = () => {
      for (const i of t)
        i.remove();
    }, n = () => {
      for (const i of t)
        A(this, ac, $g).call(this, i);
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = a(this, Ke)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return a(this, Ke) || this.hasSelection;
  }
  selectAll() {
    for (const t of a(this, It))
      t.commit();
    A(this, lc, Ug).call(this, a(this, ie).values());
  }
  unselectAll() {
    if (!(a(this, Ke) && (a(this, Ke).commitOrRemove(), a(this, ve) !== St.NONE)) && this.hasSelection) {
      for (const t of a(this, It))
        t.unselect();
      a(this, It).clear(), A(this, ye, Ie).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, n = !1) {
    if (n || this.commitOrRemove(), !this.hasSelection)
      return;
    a(this, or)[0] += t, a(this, or)[1] += e;
    const [i, s] = a(this, or), o = [...a(this, It)], l = 1e3;
    a(this, Un) && clearTimeout(a(this, Un)), w(this, Un, setTimeout(() => {
      w(this, Un, null), a(this, or)[0] = a(this, or)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of o)
            a(this, ie).has(c.id) && c.translateInPage(i, s);
        },
        undo: () => {
          for (const c of o)
            a(this, ie).has(c.id) && c.translateInPage(-i, -s);
        },
        mustExec: !1
      });
    }, l));
    for (const c of o)
      c.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), w(this, Nn, /* @__PURE__ */ new Map());
      for (const t of a(this, It))
        a(this, Nn).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!a(this, Nn))
      return !1;
    this.disableUserSelect(!1);
    const t = a(this, Nn);
    w(this, Nn, null);
    let e = !1;
    for (const [{
      x: i,
      y: s,
      pageIndex: o
    }, l] of t)
      l.newX = i, l.newY = s, l.newPageIndex = o, e || (e = i !== l.savedX || s !== l.savedY || o !== l.savedPageIndex);
    if (!e)
      return !1;
    const n = (i, s, o, l) => {
      if (a(this, ie).has(i.id)) {
        const c = a(this, me).get(l);
        c ? i._setParentAndPosition(c, s, o) : (i.pageIndex = l, i.x = s, i.y = o);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: s,
          newY: o,
          newPageIndex: l
        }] of t)
          n(i, s, o, l);
      },
      undo: () => {
        for (const [i, {
          savedX: s,
          savedY: o,
          savedPageIndex: l
        }] of t)
          n(i, s, o, l);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (a(this, Nn))
      for (const n of a(this, Nn).keys())
        n.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || a(this, It).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return a(this, Ke) === t;
  }
  getActive() {
    return a(this, Ke);
  }
  getMode() {
    return a(this, ve);
  }
  get imageManager() {
    return Tt(this, "imageManager", new kg());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let d = 0, h = e.rangeCount; d < h; d++)
      if (!t.contains(e.getRangeAt(d).commonAncestorContainer))
        return null;
    const {
      x: n,
      y: i,
      width: s,
      height: o
    } = t.getBoundingClientRect();
    let l;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        l = (d, h, f, g) => ({
          x: (h - i) / o,
          y: 1 - (d + f - n) / s,
          width: g / o,
          height: f / s
        });
        break;
      case "180":
        l = (d, h, f, g) => ({
          x: 1 - (d + f - n) / s,
          y: 1 - (h + g - i) / o,
          width: f / s,
          height: g / o
        });
        break;
      case "270":
        l = (d, h, f, g) => ({
          x: 1 - (h + g - i) / o,
          y: (d - n) / s,
          width: g / o,
          height: f / s
        });
        break;
      default:
        l = (d, h, f, g) => ({
          x: (d - n) / s,
          y: (h - i) / o,
          width: f / s,
          height: g / o
        });
        break;
    }
    const c = [];
    for (let d = 0, h = e.rangeCount; d < h; d++) {
      const f = e.getRangeAt(d);
      if (!f.collapsed)
        for (const {
          x: g,
          y: v,
          width: y,
          height: E
        } of f.getClientRects())
          y === 0 || E === 0 || c.push(l(g, v, y, E));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (a(this, Io) || w(this, Io, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = a(this, Io)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = a(this, Io)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const n = a(this, pi).getRawValue(e);
    n && (a(this, ve) === St.NONE && !n.hasBeenModified || n.renderAnnotationElement(t));
  }
};
Ke = new WeakMap(), ie = new WeakMap(), me = new WeakMap(), ko = new WeakMap(), pi = new WeakMap(), Io = new WeakMap(), vn = new WeakMap(), Fo = new WeakMap(), Kr = new WeakMap(), Nn = new WeakMap(), gi = new WeakMap(), Zr = new WeakMap(), Nl = new WeakMap(), Bl = new WeakMap(), Bn = new WeakMap(), Mo = new WeakMap(), rr = new WeakMap(), $n = new WeakMap(), xu = new WeakMap(), sr = new WeakMap(), $l = new WeakMap(), Jr = new WeakMap(), Ul = new WeakMap(), Do = new WeakMap(), ve = new WeakMap(), It = new WeakMap(), mi = new WeakMap(), Qr = new WeakMap(), Hl = new WeakMap(), jl = new WeakMap(), zl = new WeakMap(), Vl = new WeakMap(), Gl = new WeakMap(), Wl = new WeakMap(), ql = new WeakMap(), Xl = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), Zl = new WeakMap(), Jl = new WeakMap(), Ql = new WeakMap(), tc = new WeakMap(), or = new WeakMap(), Un = new WeakMap(), vi = new WeakMap(), ec = new WeakMap(), Oo = new WeakSet(), Pd = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Cu = new WeakSet(), Ob = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const n = A(this, Oo, Pd).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(n);
  i && (a(this, $n) || w(this, $n, new NR(this)), a(this, $n).show(n, i, this.direction === "ltr"));
}, Tu = new WeakSet(), Nb = function() {
  var s, o, l;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    a(this, mi) && ((s = a(this, $n)) == null || s.hide(), w(this, mi, null), A(this, ye, Ie).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === a(this, mi))
    return;
  if (!A(this, Oo, Pd).call(this, t).closest(".textLayer")) {
    a(this, mi) && ((o = a(this, $n)) == null || o.hide(), w(this, mi, null), A(this, ye, Ie).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((l = a(this, $n)) == null || l.hide(), w(this, mi, e), A(this, ye, Ie).call(this, {
    hasSelectedText: !0
  }), !(a(this, ve) !== St.HIGHLIGHT && a(this, ve) !== St.NONE) && (a(this, ve) === St.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), w(this, rr, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = (d) => {
      d.type === "pointerup" && d.button !== 0 || (window.removeEventListener("pointerup", c), window.removeEventListener("blur", c), d.type === "pointerup" && A(this, No, Rd).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", c), window.addEventListener("blur", c);
  }
}, No = new WeakSet(), Rd = function(t = "") {
  a(this, ve) === St.HIGHLIGHT ? this.highlightSelection(t) : a(this, Nl) && A(this, Cu, Ob).call(this);
}, Pu = new WeakSet(), Bb = function() {
  document.addEventListener("selectionchange", a(this, Jl));
}, Ru = new WeakSet(), $b = function() {
  document.removeEventListener("selectionchange", a(this, Jl));
}, Lu = new WeakSet(), Ub = function() {
  window.addEventListener("focus", a(this, zl)), window.addEventListener("blur", a(this, jl));
}, nc = new WeakSet(), Mg = function() {
  window.removeEventListener("focus", a(this, zl)), window.removeEventListener("blur", a(this, jl));
}, ic = new WeakSet(), Dg = function() {
  window.addEventListener("keydown", a(this, ql)), window.addEventListener("keyup", a(this, Xl));
}, rc = new WeakSet(), Og = function() {
  window.removeEventListener("keydown", a(this, ql)), window.removeEventListener("keyup", a(this, Xl));
}, sc = new WeakSet(), Ng = function() {
  document.addEventListener("copy", a(this, Vl)), document.addEventListener("cut", a(this, Gl)), document.addEventListener("paste", a(this, Wl));
}, oc = new WeakSet(), Bg = function() {
  document.removeEventListener("copy", a(this, Vl)), document.removeEventListener("cut", a(this, Gl)), document.removeEventListener("paste", a(this, Wl));
}, ye = new WeakSet(), Ie = function(t) {
  Object.entries(t).some(([n, i]) => a(this, tc)[n] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(a(this, tc), t)
  }), a(this, ve) === St.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, Hn, Yi).call(this, [[at.HIGHLIGHT_FREE, !0]]));
}, Hn = new WeakSet(), Yi = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, ku = new WeakSet(), Hb = function() {
  if (!a(this, sr)) {
    w(this, sr, !0);
    for (const t of a(this, me).values())
      t.enable();
    for (const t of a(this, ie).values())
      t.enable();
  }
}, Iu = new WeakSet(), jb = function() {
  if (this.unselectAll(), a(this, sr)) {
    w(this, sr, !1);
    for (const t of a(this, me).values())
      t.disable();
    for (const t of a(this, ie).values())
      t.disable();
  }
}, ac = new WeakSet(), $g = function(t) {
  const e = a(this, me).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Fu = new WeakSet(), zb = function() {
  let t = null;
  for (t of a(this, It))
    ;
  return t;
}, ts = new WeakSet(), hl = function() {
  if (a(this, ie).size === 0)
    return !0;
  if (a(this, ie).size === 1)
    for (const t of a(this, ie).values())
      return t.isEmpty();
  return !1;
}, lc = new WeakSet(), Ug = function(t) {
  for (const e of a(this, It))
    e.unselect();
  a(this, It).clear();
  for (const e of t)
    e.isEmpty() || (a(this, It).add(e), e.select());
  A(this, ye, Ie).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, dt(Eo, "TRANSLATE_SMALL", 1), dt(Eo, "TRANSLATE_BIG", 10);
let eo = Eo;
var yi, bi, yn, wi, bn, Bo, Ai, cc, Hg;
const ci = class ci {
  constructor(t) {
    m(this, cc);
    m(this, yi, "");
    m(this, bi, !1);
    m(this, yn, null);
    m(this, wi, null);
    m(this, bn, null);
    m(this, Bo, !1);
    m(this, Ai, null);
    w(this, Ai, t);
  }
  static initialize(t) {
    ci._l10nPromise || (ci._l10nPromise = t);
  }
  async render() {
    const t = w(this, yn, document.createElement("button"));
    t.className = "altText";
    const e = await ci._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0", t.addEventListener("contextmenu", Ge), t.addEventListener("pointerdown", (i) => i.stopPropagation());
    const n = (i) => {
      i.preventDefault(), a(this, Ai)._uiManager.editAltText(a(this, Ai));
    };
    return t.addEventListener("click", n, {
      capture: !0
    }), t.addEventListener("keydown", (i) => {
      i.target === t && i.key === "Enter" && (w(this, Bo, !0), n(i));
    }), await A(this, cc, Hg).call(this), t;
  }
  finish() {
    a(this, yn) && (a(this, yn).focus({
      focusVisible: a(this, Bo)
    }), w(this, Bo, !1));
  }
  isEmpty() {
    return !a(this, yi) && !a(this, bi);
  }
  get data() {
    return {
      altText: a(this, yi),
      decorative: a(this, bi)
    };
  }
  set data({
    altText: t,
    decorative: e
  }) {
    a(this, yi) === t && a(this, bi) === e || (w(this, yi, t), w(this, bi, e), A(this, cc, Hg).call(this));
  }
  toggle(t = !1) {
    a(this, yn) && (!t && a(this, bn) && (clearTimeout(a(this, bn)), w(this, bn, null)), a(this, yn).disabled = !t);
  }
  destroy() {
    var t;
    (t = a(this, yn)) == null || t.remove(), w(this, yn, null), w(this, wi, null);
  }
};
yi = new WeakMap(), bi = new WeakMap(), yn = new WeakMap(), wi = new WeakMap(), bn = new WeakMap(), Bo = new WeakMap(), Ai = new WeakMap(), cc = new WeakSet(), Hg = async function() {
  var i;
  const t = a(this, yn);
  if (!t)
    return;
  if (!a(this, yi) && !a(this, bi)) {
    t.classList.remove("done"), (i = a(this, wi)) == null || i.remove();
    return;
  }
  t.classList.add("done"), ci._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((s) => {
    t.setAttribute("aria-label", s);
  });
  let e = a(this, wi);
  if (!e) {
    w(this, wi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip");
    const s = e.id = `alt-text-tooltip-${a(this, Ai).id}`;
    t.setAttribute("aria-describedby", s);
    const o = 100;
    t.addEventListener("mouseenter", () => {
      w(this, bn, setTimeout(() => {
        w(this, bn, null), a(this, wi).classList.add("show"), a(this, Ai)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }), t.addEventListener("mouseleave", () => {
      var l;
      a(this, bn) && (clearTimeout(a(this, bn)), w(this, bn, null)), (l = a(this, wi)) == null || l.classList.remove("show");
    });
  }
  e.innerText = a(this, bi) ? await ci._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : a(this, yi), e.parentNode || t.append(e);
  const n = a(this, Ai).getImageForAltText();
  n == null || n.setAttribute("aria-describedby", e.id);
}, dt(ci, "_l10nPromise", null);
let ru = ci;
var wn, Fe, $o, es, be, ns, Uo, Ho, xe, hc, is, ar, dc, rs, Ei, jn, jo, zo, cn, uc, Mu, fc, jg, pc, zg, gc, Vg, Du, Vb, Ou, Gb, mc, Gg, vc, Wg, yc, qg, Nu, Wb, Bu, qb, $u, Xb, Uu, Yb, bc, Xg, ss, dl;
const Nt = class Nt {
  constructor(t) {
    m(this, fc);
    m(this, gc);
    m(this, Du);
    m(this, Ou);
    m(this, mc);
    m(this, vc);
    m(this, yc);
    m(this, Nu);
    m(this, Bu);
    m(this, $u);
    m(this, Uu);
    m(this, bc);
    m(this, ss);
    m(this, wn, null);
    m(this, Fe, null);
    m(this, $o, !1);
    m(this, es, !1);
    m(this, be, null);
    m(this, ns, null);
    m(this, Uo, this.focusin.bind(this));
    m(this, Ho, this.focusout.bind(this));
    m(this, xe, null);
    m(this, hc, "");
    m(this, is, !1);
    m(this, ar, null);
    m(this, dc, !1);
    m(this, rs, !1);
    m(this, Ei, !1);
    m(this, jn, null);
    m(this, jo, 0);
    m(this, zo, 0);
    m(this, cn, null);
    dt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    dt(this, "_isVisible", !0);
    dt(this, "_uiManager", null);
    dt(this, "_focusEventsAllowed", !0);
    dt(this, "_l10nPromise", null);
    m(this, uc, !1);
    m(this, Mu, Nt._zIndex++);
    this.constructor === Nt && Dt("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: n,
        pageHeight: i,
        pageX: s,
        pageY: o
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [n, i], this.pageTranslation = [s, o];
    const [l, c] = this.parentDimensions;
    this.x = t.x / l, this.y = t.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Nt.prototype._resizeWithKeyboard, e = eo.TRANSLATE_SMALL, n = eo.TRANSLATE_BIG;
    return Tt(this, "_resizerKeyboardManager", new Qh([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-n, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [n, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -n]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, n]
    }], [["Escape", "mac+Escape"], Nt.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return Tt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new HR({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e, n) {
    if (Nt._l10nPromise || (Nt._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((s) => [s, t.get(s.replaceAll(/([A-Z])/g, (o) => `-${o.toLowerCase()}`))]))), n != null && n.strings)
      for (const s of n.strings)
        Nt._l10nPromise.set(s, t.get(s));
    if (Nt._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    Nt._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Dt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return a(this, uc);
  }
  set _isDraggable(t) {
    var e;
    w(this, uc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = a(this, Mu);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : A(this, ss, dl).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (a(this, is) ? w(this, is, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var n;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (n = this.parent) != null && n.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, n, i) {
    const [s, o] = this.parentDimensions;
    [n, i] = this.screenToPageTranslation(n, i), this.x = (t + n) / s, this.y = (e + i) / o, this.fixAndSetPosition();
  }
  translate(t, e) {
    A(this, fc, jg).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    a(this, ar) || w(this, ar, [this.x, this.y]), A(this, fc, jg).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    a(this, ar) || w(this, ar, [this.x, this.y]);
    const [n, i] = this.parentDimensions;
    if (this.x += t / n, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: d,
        y: h
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, d, h) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: s,
      y: o
    } = this;
    const [l, c] = this.getBaseTranslation();
    s += l, o += c, this.div.style.left = `${(100 * s).toFixed(2)}%`, this.div.style.top = `${(100 * o).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!a(this, ar) && (a(this, ar)[0] !== this.x || a(this, ar)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: n
    } = Nt, i = n / t, s = n / e;
    switch (this.rotation) {
      case 90:
        return [-i, s];
      case 180:
        return [i, s];
      case 270:
        return [i, -s];
      default:
        return [-i, -s];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, n] = this.pageDimensions;
    let {
      x: i,
      y: s,
      width: o,
      height: l
    } = this;
    if (o *= e, l *= n, i *= e, s *= n, this._mustFixPosition)
      switch (t) {
        case 0:
          i = Math.max(0, Math.min(e - o, i)), s = Math.max(0, Math.min(n - l, s));
          break;
        case 90:
          i = Math.max(0, Math.min(e - l, i)), s = Math.min(n, Math.max(o, s));
          break;
        case 180:
          i = Math.min(e, Math.max(o, i)), s = Math.min(n, Math.max(l, s));
          break;
        case 270:
          i = Math.min(e, Math.max(l, i)), s = Math.max(0, Math.min(n - o, s));
          break;
      }
    this.x = i /= e, this.y = s /= n;
    const [c, d] = this.getBaseTranslation();
    i += c, s += d;
    const {
      style: h
    } = this.div;
    h.left = `${(100 * i).toFixed(2)}%`, h.top = `${(100 * s).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var n;
    return A(n = Nt, pc, zg).call(n, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var n;
    return A(n = Nt, pc, zg).call(n, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, n]
    } = this, i = e * t, s = n * t;
    return Ve.isCSSRoundSupported ? [Math.round(i), Math.round(s)] : [i, s];
  }
  setDims(t, e) {
    const [n, i] = this.parentDimensions;
    this.div.style.width = `${(100 * t / n).toFixed(2)}%`, a(this, es) || (this.div.style.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: n
    } = t, i = n.endsWith("%"), s = !a(this, es) && e.endsWith("%");
    if (i && s)
      return;
    const [o, l] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(n) / o).toFixed(2)}%`), !a(this, es) && !s && (t.height = `${(100 * parseFloat(e) / l).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = a(this, Fe)) == null || t.finish();
  }
  async addEditToolbar() {
    return a(this, xe) || a(this, rs) ? a(this, xe) : (w(this, xe, new Rg(this)), this.div.append(a(this, xe).render()), a(this, Fe) && a(this, xe).addAltTextButton(await a(this, Fe).render()), a(this, xe));
  }
  removeEditToolbar() {
    var t;
    a(this, xe) && (a(this, xe).remove(), w(this, xe, null), (t = a(this, Fe)) == null || t.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    a(this, Fe) || (ru.initialize(Nt._l10nPromise), w(this, Fe, new ru(this)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = a(this, Fe)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    a(this, Fe) && (a(this, Fe).data = t);
  }
  hasAltText() {
    var t;
    return !((t = a(this, Fe)) != null && t.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = a(this, $o) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), this.div.addEventListener("focusin", a(this, Uo)), this.div.addEventListener("focusout", a(this, Ho));
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [n, i] = this.getInitialTranslation();
    return this.translate(n, i), iu(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Ve.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (w(this, is, !0), this._isDraggable) {
      A(this, Nu, Wb).call(this, t);
      return;
    }
    A(this, yc, qg).call(this, t);
  }
  moveInDOM() {
    a(this, jn) && clearTimeout(a(this, jn)), w(this, jn, setTimeout(() => {
      var t;
      w(this, jn, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, n) {
    t.changeParent(this), this.x = e, this.y = n, this.fixAndSetPosition();
  }
  getRect(t, e, n = this.rotation) {
    const i = this.parentScale, [s, o] = this.pageDimensions, [l, c] = this.pageTranslation, d = t / i, h = e / i, f = this.x * s, g = this.y * o, v = this.width * s, y = this.height * o;
    switch (n) {
      case 0:
        return [f + d + l, o - g - h - y + c, f + d + v + l, o - g - h + c];
      case 90:
        return [f + h + l, o - g + d + c, f + h + y + l, o - g + d + v + c];
      case 180:
        return [f - d - v + l, o - g + h + c, f - d + l, o - g + h + y + c];
      case 270:
        return [f - h - y + l, o - g - d - v + c, f - h + l, o - g - d + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [n, i, s, o] = t, l = s - n, c = o - i;
    switch (this.rotation) {
      case 0:
        return [n, e - o, l, c];
      case 90:
        return [n, e - i, c, l];
      case 180:
        return [s, e - i, l, c];
      case 270:
        return [s, e - o, c, l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    w(this, rs, !0);
  }
  disableEditMode() {
    w(this, rs, !1);
  }
  isInEditMode() {
    return a(this, rs);
  }
  shouldGetKeyboardEvents() {
    return a(this, Ei);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var t, e;
    (t = this.div) == null || t.addEventListener("focusin", a(this, Uo)), (e = this.div) == null || e.addEventListener("focusout", a(this, Ho));
  }
  rotate(t) {
  }
  serialize(t = !1, e = null) {
    Dt("An editor must be serializable");
  }
  static deserialize(t, e, n) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: n
    });
    i.rotation = t.rotation;
    const [s, o] = i.pageDimensions, [l, c, d, h] = i.getRectInCurrentCoords(t.rect, o);
    return i.x = l / s, i.y = c / o, i.width = d / s, i.height = h / o, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", a(this, Uo)), this.div.removeEventListener("focusout", a(this, Ho)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), a(this, jn) && (clearTimeout(a(this, jn)), w(this, jn, null)), A(this, ss, dl).call(this), this.removeEditToolbar(), a(this, cn)) {
      for (const t of a(this, cn).values())
        clearTimeout(t);
      w(this, cn, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (A(this, Du, Vb).call(this), a(this, be).classList.remove("hidden"), iu(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), w(this, ns, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = a(this, be).children;
    if (!a(this, wn)) {
      w(this, wn, Array.from(e));
      const o = A(this, Bu, qb).bind(this), l = A(this, $u, Xb).bind(this);
      for (const c of a(this, wn)) {
        const d = c.getAttribute("data-resizer-name");
        c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", o), c.addEventListener("blur", l), c.addEventListener("focus", A(this, Uu, Yb).bind(this, d)), Nt._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => c.setAttribute("aria-label", h));
      }
    }
    const n = a(this, wn)[0];
    let i = 0;
    for (const o of e) {
      if (o === n)
        break;
      i++;
    }
    const s = (360 - this.rotation + this.parentRotation) % 360 / 90 * (a(this, wn).length / 4);
    if (s !== i) {
      if (s < i)
        for (let l = 0; l < i - s; l++)
          a(this, be).append(a(this, be).firstChild);
      else if (s > i)
        for (let l = 0; l < s - i; l++)
          a(this, be).firstChild.before(a(this, be).lastChild);
      let o = 0;
      for (const l of e) {
        const d = a(this, wn)[o++].getAttribute("data-resizer-name");
        Nt._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => l.setAttribute("aria-label", h));
      }
    }
    A(this, bc, Xg).call(this, 0), w(this, Ei, !0), a(this, be).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    a(this, Ei) && A(this, vc, Wg).call(this, a(this, hc), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    A(this, ss, dl).call(this), this.div.focus();
  }
  select() {
    var t, e;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !a(this, xe)) {
      this.addEditToolbar().then(() => {
        var n, i;
        (n = this.div) != null && n.classList.contains("selectedEditor") && ((i = a(this, xe)) == null || i.show());
      });
      return;
    }
    (e = a(this, xe)) == null || e.show();
  }
  unselect() {
    var t, e, n, i;
    (t = a(this, be)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (n = this.div) != null && n.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = a(this, xe)) == null || i.hide();
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return a(this, dc);
  }
  set isEditing(t) {
    w(this, dc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    w(this, es, !0);
    const n = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = n, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      a(this, cn) || w(this, cn, /* @__PURE__ */ new Map());
      const {
        action: n
      } = t;
      let i = a(this, cn).get(n);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), a(this, cn).delete(n), a(this, cn).size === 0 && w(this, cn, null);
      }, Nt._telemetryTimeout), a(this, cn).set(n, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), w(this, $o, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), w(this, $o, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const n = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), n.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    e.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
wn = new WeakMap(), Fe = new WeakMap(), $o = new WeakMap(), es = new WeakMap(), be = new WeakMap(), ns = new WeakMap(), Uo = new WeakMap(), Ho = new WeakMap(), xe = new WeakMap(), hc = new WeakMap(), is = new WeakMap(), ar = new WeakMap(), dc = new WeakMap(), rs = new WeakMap(), Ei = new WeakMap(), jn = new WeakMap(), jo = new WeakMap(), zo = new WeakMap(), cn = new WeakMap(), uc = new WeakMap(), Mu = new WeakMap(), fc = new WeakSet(), jg = function([t, e], n, i) {
  [n, i] = this.screenToPageTranslation(n, i), this.x += n / t, this.y += i / e, this.fixAndSetPosition();
}, pc = new WeakSet(), zg = function(t, e, n) {
  switch (n) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, gc = new WeakSet(), Vg = function(t) {
  switch (t) {
    case 90: {
      const [e, n] = this.pageDimensions;
      return [0, -e / n, n / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, n] = this.pageDimensions;
      return [0, e / n, -n / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Du = new WeakSet(), Vb = function() {
  if (a(this, be))
    return;
  w(this, be, document.createElement("div")), a(this, be).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
  for (const e of t) {
    const n = document.createElement("div");
    a(this, be).append(n), n.classList.add("resizer", e), n.setAttribute("data-resizer-name", e), n.addEventListener("pointerdown", A(this, Ou, Gb).bind(this, e)), n.addEventListener("contextmenu", Ge), n.tabIndex = -1;
  }
  this.div.prepend(a(this, be));
}, Ou = new WeakSet(), Gb = function(t, e) {
  var y;
  e.preventDefault();
  const {
    isMac: n
  } = Ve.platform;
  if (e.button !== 0 || e.ctrlKey && n)
    return;
  (y = a(this, Fe)) == null || y.toggle(!1);
  const i = A(this, vc, Wg).bind(this, t), s = this._isDraggable;
  this._isDraggable = !1;
  const o = {
    passive: !0,
    capture: !0
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", i, o), window.addEventListener("contextmenu", Ge);
  const l = this.x, c = this.y, d = this.width, h = this.height, f = this.parent.div.style.cursor, g = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const v = () => {
    var E;
    this.parent.togglePointerEvents(!0), (E = a(this, Fe)) == null || E.toggle(!0), this._isDraggable = s, window.removeEventListener("pointerup", v), window.removeEventListener("blur", v), window.removeEventListener("pointermove", i, o), window.removeEventListener("contextmenu", Ge), this.parent.div.style.cursor = f, this.div.style.cursor = g, A(this, mc, Gg).call(this, l, c, d, h);
  };
  window.addEventListener("pointerup", v), window.addEventListener("blur", v);
}, mc = new WeakSet(), Gg = function(t, e, n, i) {
  const s = this.x, o = this.y, l = this.width, c = this.height;
  s === t && o === e && l === n && c === i || this.addCommands({
    cmd: () => {
      this.width = l, this.height = c, this.x = s, this.y = o;
      const [d, h] = this.parentDimensions;
      this.setDims(d * l, h * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = n, this.height = i, this.x = t, this.y = e;
      const [d, h] = this.parentDimensions;
      this.setDims(d * n, h * i), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, vc = new WeakSet(), Wg = function(t, e) {
  const [n, i] = this.parentDimensions, s = this.x, o = this.y, l = this.width, c = this.height, d = Nt.MIN_SIZE / n, h = Nt.MIN_SIZE / i, f = (B) => Math.round(B * 1e4) / 1e4, g = A(this, gc, Vg).call(this, this.rotation), v = (B, G) => [g[0] * B + g[2] * G, g[1] * B + g[3] * G], y = A(this, gc, Vg).call(this, 360 - this.rotation), E = (B, G) => [y[0] * B + y[2] * G, y[1] * B + y[3] * G];
  let x, _, P = !1, L = !1;
  switch (t) {
    case "topLeft":
      P = !0, x = (B, G) => [0, 0], _ = (B, G) => [B, G];
      break;
    case "topMiddle":
      x = (B, G) => [B / 2, 0], _ = (B, G) => [B / 2, G];
      break;
    case "topRight":
      P = !0, x = (B, G) => [B, 0], _ = (B, G) => [0, G];
      break;
    case "middleRight":
      L = !0, x = (B, G) => [B, G / 2], _ = (B, G) => [0, G / 2];
      break;
    case "bottomRight":
      P = !0, x = (B, G) => [B, G], _ = (B, G) => [0, 0];
      break;
    case "bottomMiddle":
      x = (B, G) => [B / 2, G], _ = (B, G) => [B / 2, 0];
      break;
    case "bottomLeft":
      P = !0, x = (B, G) => [0, G], _ = (B, G) => [B, 0];
      break;
    case "middleLeft":
      L = !0, x = (B, G) => [0, G / 2], _ = (B, G) => [B, G / 2];
      break;
  }
  const k = x(l, c), F = _(l, c);
  let I = v(...F);
  const M = f(s + I[0]), C = f(o + I[1]);
  let T = 1, O = 1, [D, H] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([D, H] = E(D / n, H / i), P) {
    const B = Math.hypot(l, c);
    T = O = Math.max(Math.min(Math.hypot(F[0] - k[0] - D, F[1] - k[1] - H) / B, 1 / l, 1 / c), d / l, h / c);
  } else
    L ? T = Math.max(d, Math.min(1, Math.abs(F[0] - k[0] - D))) / l : O = Math.max(h, Math.min(1, Math.abs(F[1] - k[1] - H))) / c;
  const j = f(l * T), V = f(c * O);
  I = v(..._(j, V));
  const Y = M - I[0], Z = C - I[1];
  this.width = j, this.height = V, this.x = Y, this.y = Z, this.setDims(n * j, i * V), this.fixAndSetPosition();
}, yc = new WeakSet(), qg = function(t) {
  const {
    isMac: e
  } = Ve.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Nu = new WeakSet(), Wb = function(t) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let n, i;
  e && (this.div.classList.add("moving"), n = {
    passive: !0,
    capture: !0
  }, w(this, jo, t.clientX), w(this, zo, t.clientY), i = (o) => {
    const {
      clientX: l,
      clientY: c
    } = o, [d, h] = this.screenToPageTranslation(l - a(this, jo), c - a(this, zo));
    w(this, jo, l), w(this, zo, c), this._uiManager.dragSelectedEditors(d, h);
  }, window.addEventListener("pointermove", i, n));
  const s = () => {
    window.removeEventListener("pointerup", s), window.removeEventListener("blur", s), e && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", i, n)), w(this, is, !1), this._uiManager.endDragSession() || A(this, yc, qg).call(this, t);
  };
  window.addEventListener("pointerup", s), window.addEventListener("blur", s);
}, Bu = new WeakSet(), qb = function(t) {
  Nt._resizerKeyboardManager.exec(this, t);
}, $u = new WeakSet(), Xb = function(t) {
  var e;
  a(this, Ei) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== a(this, be) && A(this, ss, dl).call(this);
}, Uu = new WeakSet(), Yb = function(t) {
  w(this, hc, a(this, Ei) ? t : "");
}, bc = new WeakSet(), Xg = function(t) {
  if (a(this, wn))
    for (const e of a(this, wn))
      e.tabIndex = t;
}, ss = new WeakSet(), dl = function() {
  if (w(this, Ei, !1), A(this, bc, Xg).call(this, -1), a(this, ns)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: n,
      savedHeight: i
    } = a(this, ns);
    A(this, mc, Gg).call(this, t, e, n, i), w(this, ns, null);
  }
}, m(Nt, pc), dt(Nt, "_borderLineWidth", -1), dt(Nt, "_colorManager", new Fg()), dt(Nt, "_zIndex", 1), dt(Nt, "_telemetryTimeout", 1e3);
let Ft = Nt;
class HR extends Ft {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const Av = 3285377520, on = 4294901760, In = 65535;
class Kb {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Av, this.h2 = t ? t & 4294967295 : Av;
  }
  update(t) {
    let e, n;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), n = 0;
      for (let E = 0, x = t.length; E < x; E++) {
        const _ = t.charCodeAt(E);
        _ <= 255 ? e[n++] = _ : (e[n++] = _ >>> 8, e[n++] = _ & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), n = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = n >> 2, s = n - i * 4, o = new Uint32Array(e.buffer, 0, i);
    let l = 0, c = 0, d = this.h1, h = this.h2;
    const f = 3432918353, g = 461845907, v = f & In, y = g & In;
    for (let E = 0; E < i; E++)
      E & 1 ? (l = o[E], l = l * f & on | l * v & In, l = l << 15 | l >>> 17, l = l * g & on | l * y & In, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196) : (c = o[E], c = c * f & on | c * v & In, c = c << 15 | c >>> 17, c = c * g & on | c * y & In, h ^= c, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
    switch (l = 0, s) {
      case 3:
        l ^= e[i * 4 + 2] << 16;
      case 2:
        l ^= e[i * 4 + 1] << 8;
      case 1:
        l ^= e[i * 4], l = l * f & on | l * v & In, l = l << 15 | l >>> 17, l = l * g & on | l * y & In, i & 1 ? d ^= l : h ^= l;
    }
    this.h1 = d, this.h2 = h;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & on | t * 36045 & In, e = e * 4283543511 & on | ((e << 16 | t >>> 16) * 2950163797 & on) >>> 16, t ^= e >>> 1, t = t * 444984403 & on | t * 60499 & In, e = e * 3301882366 & on | ((e << 16 | t >>> 16) * 3120437893 & on) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Yg = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var os, we, Hu, Zb;
class v0 {
  constructor() {
    m(this, Hu);
    m(this, os, !1);
    m(this, we, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const n = a(this, we).get(t);
    return n === void 0 ? e : Object.assign(e, n);
  }
  getRawValue(t) {
    return a(this, we).get(t);
  }
  remove(t) {
    if (a(this, we).delete(t), a(this, we).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of a(this, we).values())
        if (e instanceof Ft)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const n = a(this, we).get(t);
    let i = !1;
    if (n !== void 0)
      for (const [s, o] of Object.entries(e))
        n[s] !== o && (i = !0, n[s] = o);
    else
      i = !0, a(this, we).set(t, e);
    i && A(this, Hu, Zb).call(this), e instanceof Ft && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return a(this, we).has(t);
  }
  getAll() {
    return a(this, we).size > 0 ? h0(a(this, we)) : null;
  }
  setAll(t) {
    for (const [e, n] of Object.entries(t))
      this.setValue(e, n);
  }
  get size() {
    return a(this, we).size;
  }
  resetModified() {
    a(this, os) && (w(this, os, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Jb(this);
  }
  get serializable() {
    if (a(this, we).size === 0)
      return Yg;
    const t = /* @__PURE__ */ new Map(), e = new Kb(), n = [], i = /* @__PURE__ */ Object.create(null);
    let s = !1;
    for (const [o, l] of a(this, we)) {
      const c = l instanceof Ft ? l.serialize(!1, i) : l;
      c && (t.set(o, c), e.update(`${o}:${JSON.stringify(c)}`), s || (s = !!c.bitmap));
    }
    if (s)
      for (const o of t.values())
        o.bitmap && n.push(o.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: n
    } : Yg;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const n of a(this, we).values()) {
      if (!(n instanceof Ft))
        continue;
      const i = n.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: s
      } = i;
      e.has(s) || e.set(s, Object.getPrototypeOf(n).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const o = t[s] || (t[s] = /* @__PURE__ */ new Map());
      for (const [l, c] of Object.entries(i)) {
        if (l === "type")
          continue;
        let d = o.get(l);
        d || (d = /* @__PURE__ */ new Map(), o.set(l, d));
        const h = d.get(c) ?? 0;
        d.set(c, h + 1);
      }
    }
    for (const [n, i] of e)
      t[n] = i.computeTelemetryFinalData(t[n]);
    return t;
  }
}
os = new WeakMap(), we = new WeakMap(), Hu = new WeakSet(), Zb = function() {
  a(this, os) || (w(this, os, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var wc;
class Jb extends v0 {
  constructor(e) {
    super();
    m(this, wc, void 0);
    const {
      map: n,
      hash: i,
      transfer: s
    } = e.serializable, o = structuredClone(n, s ? {
      transfer: s
    } : null);
    w(this, wc, {
      map: o,
      hash: i,
      transfer: s
    });
  }
  get print() {
    Dt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return a(this, wc);
  }
}
wc = new WeakMap();
var Vo;
class jR {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Vo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), a(this, Vo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || a(this, Vo).has(t.loadedName))) {
      if (ae(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: i,
          style: s
        } = t, o = new FontFace(n, i, s);
        this.addNativeFontFace(o);
        try {
          await o.load(), a(this, Vo).add(n), e == null || e(t);
        } catch {
          vt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      Dt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const n = t.createNativeFontFace();
      if (n) {
        this.addNativeFontFace(n);
        try {
          await n.loaded;
        } catch (i) {
          throw vt(`Failed to load font '${n.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((n) => {
        const i = this._queueLoadingCallback(n);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return Tt(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (Pe || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), Tt(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (ae(!i.done, "completeRequest() cannot be called twice."), i.done = !0; n.length > 0 && n[0].done; ) {
        const s = n.shift();
        setTimeout(s.callback, 0);
      }
    }
    const {
      loadingRequests: n
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return n.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Tt(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function n(k, F) {
      return k.charCodeAt(F) << 24 | k.charCodeAt(F + 1) << 16 | k.charCodeAt(F + 2) << 8 | k.charCodeAt(F + 3) & 255;
    }
    function i(k, F, I, M) {
      const C = k.substring(0, F), T = k.substring(F + I);
      return C + M + T;
    }
    let s, o;
    const l = this._document.createElement("canvas");
    l.width = 1, l.height = 1;
    const c = l.getContext("2d");
    let d = 0;
    function h(k, F) {
      if (++d > 30) {
        vt("Load test font never loaded."), F();
        return;
      }
      if (c.font = "30px " + k, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        F();
        return;
      }
      setTimeout(h.bind(null, k, F));
    }
    const f = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = i(g, 976, f.length, f);
    const y = 16, E = 1482184792;
    let x = n(g, y);
    for (s = 0, o = f.length - 3; s < o; s += 4)
      x = x - E + n(f, s) | 0;
    s < f.length && (x = x - E + n(f + "XXX", s) | 0), g = i(g, y, 4, xR(x));
    const _ = `url(data:font/opentype;base64,${btoa(g)});`, P = `@font-face {font-family:"${f}";src:${_}}`;
    this.insertRule(P);
    const L = this._document.createElement("div");
    L.style.visibility = "hidden", L.style.width = L.style.height = "10px", L.style.position = "absolute", L.style.top = L.style.left = "0px";
    for (const k of [t.loadedName, f]) {
      const F = this._document.createElement("span");
      F.textContent = "Hi", F.style.fontFamily = k, L.append(F);
    }
    this._document.body.append(L), h(f, () => {
      L.remove(), e.complete();
    });
  }
}
Vo = new WeakMap();
class zR {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: n = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = n;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const n = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (n.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, n);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = Ab(this.data), e = `url(data:${this.mimetype};base64,${btoa(t)});`;
    let n;
    if (!this.cssFontInfo)
      n = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), n = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${e}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, e), n;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let n;
    try {
      n = t.get(this.loadedName + "_path_" + e);
    } catch (s) {
      vt(`getPathGenerator - ignoring character: "${s}".`);
    }
    if (!Array.isArray(n) || n.length === 0)
      return this.compiledGlyphs[e] = function(s, o) {
      };
    const i = [];
    for (let s = 0, o = n.length; s < o; )
      switch (n[s++]) {
        case si.BEZIER_CURVE_TO:
          {
            const [l, c, d, h, f, g] = n.slice(s, s + 6);
            i.push((v) => v.bezierCurveTo(l, c, d, h, f, g)), s += 6;
          }
          break;
        case si.MOVE_TO:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.moveTo(l, c)), s += 2;
          }
          break;
        case si.LINE_TO:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.lineTo(l, c)), s += 2;
          }
          break;
        case si.QUADRATIC_CURVE_TO:
          {
            const [l, c, d, h] = n.slice(s, s + 4);
            i.push((f) => f.quadraticCurveTo(l, c, d, h)), s += 4;
          }
          break;
        case si.RESTORE:
          i.push((l) => l.restore());
          break;
        case si.SAVE:
          i.push((l) => l.save());
          break;
        case si.SCALE:
          ae(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case si.TRANSFORM:
          {
            const [l, c, d, h, f, g] = n.slice(s, s + 6);
            i.push((v) => v.transform(l, c, d, h, f, g)), s += 6;
          }
          break;
        case si.TRANSLATE:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.translate(l, c)), s += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(o, l) {
      i[0](o), i[1](o), o.scale(l, -l);
      for (let c = 2, d = i.length; c < d; c++)
        i[c](o);
    };
  }
}
if (Pe) {
  var Kg = Promise.withResolvers(), _l = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./empty-GlqisfcO.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./index-CJRhEbvG.js"
    ).then((l) => l.i), n = await import(
      /*webpackIgnore: true*/
      "./index-Dnhzelsm.js"
    ).then((l) => l.i), i = await import(
      /*webpackIgnore: true*/
      "./url-B4fTAusg.js"
    ).then((l) => l.u);
    let s, o;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: n,
      url: i,
      canvas: s,
      path2d: o
    }));
  })().then((t) => {
    _l = t, Kg.resolve();
  }, (t) => {
    vt(`loadPackages: ${t}`), _l = /* @__PURE__ */ new Map(), Kg.resolve();
  });
}
class ni {
  static get promise() {
    return Kg.promise;
  }
  static get(t) {
    return _l == null ? void 0 : _l.get(t);
  }
}
const Qb = function(r) {
  return ni.get("fs").promises.readFile(r).then((e) => new Uint8Array(e));
};
class VR extends up {
}
class GR extends fp {
  _createCanvas(t, e) {
    return ni.get("canvas").createCanvas(t, e);
  }
}
class WR extends pp {
  _fetchData(t, e) {
    return Qb(t).then((n) => ({
      cMapData: n,
      compressionType: e
    }));
  }
}
class qR extends gp {
  _fetchData(t) {
    return Qb(t);
  }
}
const Oe = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Zg(r, t) {
  if (!t)
    return;
  const e = t[2] - t[0], n = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, n), r.clip(i);
}
class td {
  constructor() {
    this.constructor === td && Dt("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    Dt("Abstract method `getPattern` called.");
  }
}
class XR extends td {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const n of this._colorStops)
      e.addColorStop(n[0], n[1]);
    return e;
  }
  getPattern(t, e, n, i) {
    let s;
    if (i === Oe.STROKE || i === Oe.FILL) {
      const o = e.current.getClippedPathBoundingBox(i, Vt(t)) || [0, 0, 0, 0], l = Math.ceil(o[2] - o[0]) || 1, c = Math.ceil(o[3] - o[1]) || 1, d = e.cachedCanvases.getCanvas("pattern", l, c, !0), h = d.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-o[0], -o[1]), n = Q.transform(n, [1, 0, 0, 1, o[0], o[1]]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Zg(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), s = t.createPattern(d.canvas, "no-repeat");
      const f = new DOMMatrix(n);
      s.setTransform(f);
    } else
      Zg(t, this._bbox), s = this._createGradient(t);
    return s;
  }
}
function Zp(r, t, e, n, i, s, o, l) {
  const c = t.coords, d = t.colors, h = r.data, f = r.width * 4;
  let g;
  c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = s, s = o, o = g), c[n + 1] > c[i + 1] && (g = n, n = i, i = g, g = o, o = l, l = g), c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = s, s = o, o = g);
  const v = (c[e] + t.offsetX) * t.scaleX, y = (c[e + 1] + t.offsetY) * t.scaleY, E = (c[n] + t.offsetX) * t.scaleX, x = (c[n + 1] + t.offsetY) * t.scaleY, _ = (c[i] + t.offsetX) * t.scaleX, P = (c[i + 1] + t.offsetY) * t.scaleY;
  if (y >= P)
    return;
  const L = d[s], k = d[s + 1], F = d[s + 2], I = d[o], M = d[o + 1], C = d[o + 2], T = d[l], O = d[l + 1], D = d[l + 2], H = Math.round(y), j = Math.round(P);
  let V, Y, Z, B, G, W, bt, ut;
  for (let z = H; z <= j; z++) {
    if (z < x) {
      const K = z < y ? 0 : (y - z) / (y - x);
      V = v - (v - E) * K, Y = L - (L - I) * K, Z = k - (k - M) * K, B = F - (F - C) * K;
    } else {
      let K;
      z > P ? K = 1 : x === P ? K = 0 : K = (x - z) / (x - P), V = E - (E - _) * K, Y = I - (I - T) * K, Z = M - (M - O) * K, B = C - (C - D) * K;
    }
    let nt;
    z < y ? nt = 0 : z > P ? nt = 1 : nt = (y - z) / (y - P), G = v - (v - _) * nt, W = L - (L - T) * nt, bt = k - (k - O) * nt, ut = F - (F - D) * nt;
    const tt = Math.round(Math.min(V, G)), et = Math.round(Math.max(V, G));
    let lt = f * z + tt * 4;
    for (let K = tt; K <= et; K++)
      nt = (V - K) / (V - G), nt < 0 ? nt = 0 : nt > 1 && (nt = 1), h[lt++] = Y - (Y - W) * nt | 0, h[lt++] = Z - (Z - bt) * nt | 0, h[lt++] = B - (B - ut) * nt | 0, h[lt++] = 255;
  }
}
function YR(r, t, e) {
  const n = t.coords, i = t.colors;
  let s, o;
  switch (t.type) {
    case "lattice":
      const l = t.verticesPerRow, c = Math.floor(n.length / l) - 1, d = l - 1;
      for (s = 0; s < c; s++) {
        let h = s * l;
        for (let f = 0; f < d; f++, h++)
          Zp(r, e, n[h], n[h + 1], n[h + l], i[h], i[h + 1], i[h + l]), Zp(r, e, n[h + l + 1], n[h + 1], n[h + l], i[h + l + 1], i[h + 1], i[h + l]);
      }
      break;
    case "triangles":
      for (s = 0, o = n.length; s < o; s += 3)
        Zp(r, e, n[s], n[s + 1], n[s + 2], i[s], i[s + 1], i[s + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class KR extends td {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, n) {
    const l = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), d = Math.ceil(this._bounds[2]) - l, h = Math.ceil(this._bounds[3]) - c, f = Math.min(Math.ceil(Math.abs(d * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), v = d / f, y = h / g, E = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -l,
      offsetY: -c,
      scaleX: 1 / v,
      scaleY: 1 / y
    }, x = f + 2 * 2, _ = g + 2 * 2, P = n.getCanvas("mesh", x, _, !1), L = P.context, k = L.createImageData(f, g);
    if (e) {
      const I = k.data;
      for (let M = 0, C = I.length; M < C; M += 4)
        I[M] = e[0], I[M + 1] = e[1], I[M + 2] = e[2], I[M + 3] = 255;
    }
    for (const I of this._figures)
      YR(k, I, E);
    return L.putImageData(k, 2, 2), {
      canvas: P.canvas,
      offsetX: l - 2 * v,
      offsetY: c - 2 * y,
      scaleX: v,
      scaleY: y
    };
  }
  getPattern(t, e, n, i) {
    Zg(t, this._bbox);
    let s;
    if (i === Oe.SHADING)
      s = Q.singularValueDecompose2dScale(Vt(t));
    else if (s = Q.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const l = Q.singularValueDecompose2dScale(this.matrix);
      s = [s[0] * l[0], s[1] * l[1]];
    }
    const o = this._createMeshCanvas(s, i === Oe.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Oe.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(o.offsetX, o.offsetY), t.scale(o.scaleX, o.scaleY), t.createPattern(o.canvas, "no-repeat");
  }
}
class ZR extends td {
  getPattern() {
    return "hotpink";
  }
}
function JR(r) {
  switch (r[0]) {
    case "RadialAxial":
      return new XR(r);
    case "Mesh":
      return new KR(r);
    case "Dummy":
      return new ZR();
  }
  throw new Error(`Unknown IR type: ${r[0]}`);
}
const Ev = {
  COLORED: 1,
  UNCOLORED: 2
}, ju = class ju {
  constructor(t, e, n, i, s) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = n, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }
  createPatternCanvas(t) {
    const e = this.operatorList, n = this.bbox, i = this.xstep, s = this.ystep, o = this.paintType, l = this.tilingType, c = this.color, d = this.canvasGraphicsFactory;
    cp("TilingType: " + l);
    const h = n[0], f = n[1], g = n[2], v = n[3], y = Q.singularValueDecompose2dScale(this.matrix), E = Q.singularValueDecompose2dScale(this.baseTransform), x = [y[0] * E[0], y[1] * E[1]], _ = this.getSizeAndScale(i, this.ctx.canvas.width, x[0]), P = this.getSizeAndScale(s, this.ctx.canvas.height, x[1]), L = t.cachedCanvases.getCanvas("pattern", _.size, P.size, !0), k = L.context, F = d.createCanvasGraphics(k);
    F.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(F, o, c);
    let I = h, M = f, C = g, T = v;
    return h < 0 && (I = 0, C += Math.abs(h)), f < 0 && (M = 0, T += Math.abs(f)), k.translate(-(_.scale * I), -(P.scale * M)), F.transform(_.scale, 0, 0, P.scale, 0, 0), k.save(), this.clipBbox(F, I, M, C, T), F.baseTransform = Vt(F.ctx), F.executeOperatorList(e), F.endDrawing(), {
      canvas: L.canvas,
      scaleX: _.scale,
      scaleY: P.scale,
      offsetX: I,
      offsetY: M
    };
  }
  getSizeAndScale(t, e, n) {
    t = Math.abs(t);
    const i = Math.max(ju.MAX_PATTERN_SIZE, e);
    let s = Math.ceil(t * n);
    return s >= i ? s = i : n = s / t, {
      scale: n,
      size: s
    };
  }
  clipBbox(t, e, n, i, s) {
    const o = i - e, l = s - n;
    t.ctx.rect(e, n, o, l), t.current.updateRectMinMax(Vt(t.ctx), [e, n, i, s]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, n) {
    const i = t.ctx, s = t.current;
    switch (e) {
      case Ev.COLORED:
        const o = this.ctx;
        i.fillStyle = o.fillStyle, i.strokeStyle = o.strokeStyle, s.fillColor = o.fillStyle, s.strokeColor = o.strokeStyle;
        break;
      case Ev.UNCOLORED:
        const l = Q.makeHexColor(n[0], n[1], n[2]);
        i.fillStyle = l, i.strokeStyle = l, s.fillColor = l, s.strokeColor = l;
        break;
      default:
        throw new SR(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, n, i) {
    let s = n;
    i !== Oe.SHADING && (s = Q.transform(s, e.baseTransform), this.matrix && (s = Q.transform(s, this.matrix)));
    const o = this.createPatternCanvas(e);
    let l = new DOMMatrix(s);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const c = t.createPattern(o.canvas, "repeat");
    return c.setTransform(l), c;
  }
};
dt(ju, "MAX_PATTERN_SIZE", 3e3);
let Jg = ju;
function QR({
  src: r,
  srcPos: t = 0,
  dest: e,
  width: n,
  height: i,
  nonBlackColor: s = 4294967295,
  inverseDecode: o = !1
}) {
  const l = Ve.isLittleEndian ? 4278190080 : 255, [c, d] = o ? [s, l] : [l, s], h = n >> 3, f = n & 7, g = r.length;
  e = new Uint32Array(e.buffer);
  let v = 0;
  for (let y = 0; y < i; y++) {
    for (const x = t + h; t < x; t++) {
      const _ = t < g ? r[t] : 255;
      e[v++] = _ & 128 ? d : c, e[v++] = _ & 64 ? d : c, e[v++] = _ & 32 ? d : c, e[v++] = _ & 16 ? d : c, e[v++] = _ & 8 ? d : c, e[v++] = _ & 4 ? d : c, e[v++] = _ & 2 ? d : c, e[v++] = _ & 1 ? d : c;
    }
    if (f === 0)
      continue;
    const E = t < g ? r[t++] : 255;
    for (let x = 0; x < f; x++)
      e[v++] = E & 1 << 7 - x ? d : c;
  }
  return {
    srcPos: t,
    destPos: v
  };
}
const _v = 16, Sv = 100, tL = 15, xv = 10, Cv = 1e3, He = 16;
function eL(r, t) {
  if (r._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  r.__originalSave = r.save, r.__originalRestore = r.restore, r.__originalRotate = r.rotate, r.__originalScale = r.scale, r.__originalTranslate = r.translate, r.__originalTransform = r.transform, r.__originalSetTransform = r.setTransform, r.__originalResetTransform = r.resetTransform, r.__originalClip = r.clip, r.__originalMoveTo = r.moveTo, r.__originalLineTo = r.lineTo, r.__originalBezierCurveTo = r.bezierCurveTo, r.__originalRect = r.rect, r.__originalClosePath = r.closePath, r.__originalBeginPath = r.beginPath, r._removeMirroring = () => {
    r.save = r.__originalSave, r.restore = r.__originalRestore, r.rotate = r.__originalRotate, r.scale = r.__originalScale, r.translate = r.__originalTranslate, r.transform = r.__originalTransform, r.setTransform = r.__originalSetTransform, r.resetTransform = r.__originalResetTransform, r.clip = r.__originalClip, r.moveTo = r.__originalMoveTo, r.lineTo = r.__originalLineTo, r.bezierCurveTo = r.__originalBezierCurveTo, r.rect = r.__originalRect, r.closePath = r.__originalClosePath, r.beginPath = r.__originalBeginPath, delete r._removeMirroring;
  }, r.save = function() {
    t.save(), this.__originalSave();
  }, r.restore = function() {
    t.restore(), this.__originalRestore();
  }, r.translate = function(n, i) {
    t.translate(n, i), this.__originalTranslate(n, i);
  }, r.scale = function(n, i) {
    t.scale(n, i), this.__originalScale(n, i);
  }, r.transform = function(n, i, s, o, l, c) {
    t.transform(n, i, s, o, l, c), this.__originalTransform(n, i, s, o, l, c);
  }, r.setTransform = function(n, i, s, o, l, c) {
    t.setTransform(n, i, s, o, l, c), this.__originalSetTransform(n, i, s, o, l, c);
  }, r.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, r.rotate = function(n) {
    t.rotate(n), this.__originalRotate(n);
  }, r.clip = function(n) {
    t.clip(n), this.__originalClip(n);
  }, r.moveTo = function(e, n) {
    t.moveTo(e, n), this.__originalMoveTo(e, n);
  }, r.lineTo = function(e, n) {
    t.lineTo(e, n), this.__originalLineTo(e, n);
  }, r.bezierCurveTo = function(e, n, i, s, o, l) {
    t.bezierCurveTo(e, n, i, s, o, l), this.__originalBezierCurveTo(e, n, i, s, o, l);
  }, r.rect = function(e, n, i, s) {
    t.rect(e, n, i, s), this.__originalRect(e, n, i, s);
  }, r.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, r.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class nL {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, n) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, n)) : (i = this.canvasFactory.create(e, n), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function dd(r, t, e, n, i, s, o, l, c, d) {
  const [h, f, g, v, y, E] = Vt(r);
  if (f === 0 && g === 0) {
    const P = o * h + y, L = Math.round(P), k = l * v + E, F = Math.round(k), I = (o + c) * h + y, M = Math.abs(Math.round(I) - L) || 1, C = (l + d) * v + E, T = Math.abs(Math.round(C) - F) || 1;
    return r.setTransform(Math.sign(h), 0, 0, Math.sign(v), L, F), r.drawImage(t, e, n, i, s, 0, 0, M, T), r.setTransform(h, f, g, v, y, E), [M, T];
  }
  if (h === 0 && v === 0) {
    const P = l * g + y, L = Math.round(P), k = o * f + E, F = Math.round(k), I = (l + d) * g + y, M = Math.abs(Math.round(I) - L) || 1, C = (o + c) * f + E, T = Math.abs(Math.round(C) - F) || 1;
    return r.setTransform(0, Math.sign(f), Math.sign(g), 0, L, F), r.drawImage(t, e, n, i, s, 0, 0, T, M), r.setTransform(h, f, g, v, y, E), [T, M];
  }
  r.drawImage(t, e, n, i, s, o, l, c, d);
  const x = Math.hypot(h, f), _ = Math.hypot(g, v);
  return [x * c, _ * d];
}
function iL(r) {
  const {
    width: t,
    height: e
  } = r;
  if (t > Cv || e > Cv)
    return null;
  const n = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), s = t + 1;
  let o = new Uint8Array(s * (e + 1)), l, c, d;
  const h = t + 7 & -8;
  let f = new Uint8Array(h * e), g = 0;
  for (const _ of r.data) {
    let P = 128;
    for (; P > 0; )
      f[g++] = _ & P ? 0 : 255, P >>= 1;
  }
  let v = 0;
  for (g = 0, f[g] !== 0 && (o[0] = 1, ++v), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (o[c] = f[g] ? 2 : 1, ++v), g++;
  for (f[g] !== 0 && (o[c] = 2, ++v), l = 1; l < e; l++) {
    g = l * h, d = l * s, f[g - h] !== f[g] && (o[d] = f[g] ? 1 : 8, ++v);
    let _ = (f[g] ? 4 : 0) + (f[g - h] ? 8 : 0);
    for (c = 1; c < t; c++)
      _ = (_ >> 2) + (f[g + 1] ? 4 : 0) + (f[g - h + 1] ? 8 : 0), i[_] && (o[d + c] = i[_], ++v), g++;
    if (f[g - h] !== f[g] && (o[d + c] = f[g] ? 2 : 4, ++v), v > n)
      return null;
  }
  for (g = h * (e - 1), d = l * s, f[g] !== 0 && (o[d] = 8, ++v), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (o[d + c] = f[g] ? 4 : 8, ++v), g++;
  if (f[g] !== 0 && (o[d + c] = 4, ++v), v > n)
    return null;
  const y = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]), E = new Path2D();
  for (l = 0; v && l <= e; l++) {
    let _ = l * s;
    const P = _ + t;
    for (; _ < P && !o[_]; )
      _++;
    if (_ === P)
      continue;
    E.moveTo(_ % s, l);
    const L = _;
    let k = o[_];
    do {
      const F = y[k];
      do
        _ += F;
      while (!o[_]);
      const I = o[_];
      I !== 5 && I !== 10 ? (k = I, o[_] = 0) : (k = I & 51 * k >> 4, o[_] &= k >> 2 | k << 2), E.lineTo(_ % s, _ / s | 0), o[_] || --v;
    } while (L !== _);
    --l;
  }
  return f = null, o = null, function(_) {
    _.save(), _.scale(1 / t, -1 / e), _.translate(0, -e), _.fill(E), _.beginPath(), _.restore();
  };
}
class Tv {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = bb, this.textMatrixScale = 1, this.fontMatrix = Eg, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = _e.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, n) {
    [e, n] = Q.applyTransform([e, n], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, n), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, n);
  }
  updateRectMinMax(t, e) {
    const n = Q.applyTransform(e, t), i = Q.applyTransform(e.slice(2), t), s = Q.applyTransform([e[0], e[3]], t), o = Q.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, n[0], i[0], s[0], o[0]), this.minY = Math.min(this.minY, n[1], i[1], s[1], o[1]), this.maxX = Math.max(this.maxX, n[0], i[0], s[0], o[0]), this.maxY = Math.max(this.maxY, n[1], i[1], s[1], o[1]);
  }
  updateScalingPathMinMax(t, e) {
    Q.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, n, i, s, o, l, c, d, h) {
    const f = Q.bezierBoundingBox(e, n, i, s, o, l, c, d, h);
    h || this.updateRectMinMax(t, f);
  }
  getPathBoundingBox(t = Oe.FILL, e = null) {
    const n = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Oe.STROKE) {
      e || Dt("Stroke bounding box must include transform.");
      const i = Q.singularValueDecompose2dScale(e), s = i[0] * this.lineWidth / 2, o = i[1] * this.lineWidth / 2;
      n[0] -= s, n[1] -= o, n[2] += s, n[3] += o;
    }
    return n;
  }
  updateClipFromPath() {
    const t = Q.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Oe.FILL, e = null) {
    return Q.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Pv(r, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    r.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % He, s = (e - i) / He, o = i === 0 ? s : s + 1, l = r.createImageData(n, He);
  let c = 0, d;
  const h = t.data, f = l.data;
  let g, v, y, E;
  if (t.kind === Sd.GRAYSCALE_1BPP) {
    const x = h.byteLength, _ = new Uint32Array(f.buffer, 0, f.byteLength >> 2), P = _.length, L = n + 7 >> 3, k = 4294967295, F = Ve.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < o; g++) {
      for (y = g < s ? He : i, d = 0, v = 0; v < y; v++) {
        const I = x - c;
        let M = 0;
        const C = I > L ? n : I * 8 - 7, T = C & -8;
        let O = 0, D = 0;
        for (; M < T; M += 8)
          D = h[c++], _[d++] = D & 128 ? k : F, _[d++] = D & 64 ? k : F, _[d++] = D & 32 ? k : F, _[d++] = D & 16 ? k : F, _[d++] = D & 8 ? k : F, _[d++] = D & 4 ? k : F, _[d++] = D & 2 ? k : F, _[d++] = D & 1 ? k : F;
        for (; M < C; M++)
          O === 0 && (D = h[c++], O = 128), _[d++] = D & O ? k : F, O >>= 1;
      }
      for (; d < P; )
        _[d++] = 0;
      r.putImageData(l, 0, g * He);
    }
  } else if (t.kind === Sd.RGBA_32BPP) {
    for (v = 0, E = n * He * 4, g = 0; g < s; g++)
      f.set(h.subarray(c, c + E)), c += E, r.putImageData(l, 0, v), v += He;
    g < o && (E = n * i * 4, f.set(h.subarray(c, c + E)), r.putImageData(l, 0, v));
  } else if (t.kind === Sd.RGB_24BPP)
    for (y = He, E = n * y, g = 0; g < o; g++) {
      for (g >= s && (y = i, E = n * y), d = 0, v = E; v--; )
        f[d++] = h[c++], f[d++] = h[c++], f[d++] = h[c++], f[d++] = 255;
      r.putImageData(l, 0, g * He);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Rv(r, t) {
  if (t.bitmap) {
    r.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % He, s = (e - i) / He, o = i === 0 ? s : s + 1, l = r.createImageData(n, He);
  let c = 0;
  const d = t.data, h = l.data;
  for (let f = 0; f < o; f++) {
    const g = f < s ? He : i;
    ({
      srcPos: c
    } = QR({
      src: d,
      srcPos: c,
      dest: h,
      width: n,
      height: g,
      nonBlackColor: 0
    })), r.putImageData(l, 0, f * He);
  }
}
function nl(r, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const n of e)
    r[n] !== void 0 && (t[n] = r[n]);
  r.setLineDash !== void 0 && (t.setLineDash(r.getLineDash()), t.lineDashOffset = r.lineDashOffset);
}
function ud(r) {
  if (r.strokeStyle = r.fillStyle = "#000000", r.fillRule = "nonzero", r.globalAlpha = 1, r.lineWidth = 1, r.lineCap = "butt", r.lineJoin = "miter", r.miterLimit = 10, r.globalCompositeOperation = "source-over", r.font = "10px sans-serif", r.setLineDash !== void 0 && (r.setLineDash([]), r.lineDashOffset = 0), !Pe) {
    const {
      filter: t
    } = r;
    t !== "none" && t !== "" && (r.filter = "none");
  }
}
function Lv(r, t) {
  if (t)
    return !0;
  const e = Q.singularValueDecompose2dScale(r);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const n = Math.fround((globalThis.devicePixelRatio || 1) * Cr.PDF_TO_CSS_UNITS);
  return e[0] <= n && e[1] <= n;
}
const rL = ["butt", "round", "square"], sL = ["miter", "round", "bevel"], oL = {}, kv = {};
var Ac, Qg, Ec, tm;
const T0 = class T0 {
  constructor(t, e, n, i, s, {
    optionalContentConfig: o,
    markedContentStack: l = null
  }, c, d) {
    m(this, Ac);
    m(this, Ec);
    this.ctx = t, this.current = new Tv(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = n, this.canvasFactory = i, this.filterFactory = s, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = l || [], this.optionalContentConfig = o, this.cachedCanvases = new nL(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = d, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: n = !1,
    background: i = null
  }) {
    const s = this.ctx.canvas.width, o = this.ctx.canvas.height, l = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, s, o), this.ctx.fillStyle = l, n) {
      const c = this.cachedCanvases.getCanvas("transparent", s, o);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...Vt(this.compositeCtx));
    }
    this.ctx.save(), ud(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Vt(this.ctx);
  }
  executeOperatorList(t, e, n, i) {
    const s = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const c = s.length;
    if (c === l)
      return l;
    const d = c - l > xv && typeof n == "function", h = d ? Date.now() + tL : 0;
    let f = 0;
    const g = this.commonObjs, v = this.objs;
    let y;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint)
        return i.breakIt(l, n), l;
      if (y = o[l], y !== mn.dependency)
        this[y].apply(this, s[l]);
      else
        for (const E of s[l]) {
          const x = E.startsWith("g_") ? g : v;
          if (!x.has(E))
            return x.get(E, n), l;
        }
      if (l++, l === c)
        return l;
      if (d && ++f > xv) {
        if (Date.now() > h)
          return n(), l;
        f = 0;
      }
    }
  }
  endDrawing() {
    A(this, Ac, Qg).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, Ec, tm).call(this);
  }
  _scaleImage(t, e) {
    const n = t.width, i = t.height;
    let s = Math.max(Math.hypot(e[0], e[1]), 1), o = Math.max(Math.hypot(e[2], e[3]), 1), l = n, c = i, d = "prescale1", h, f;
    for (; s > 2 && l > 1 || o > 2 && c > 1; ) {
      let g = l, v = c;
      s > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), s /= l / g), o > 2 && c > 1 && (v = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, o /= c / v), h = this.cachedCanvases.getCanvas(d, g, v), f = h.context, f.clearRect(0, 0, g, v), f.drawImage(t, 0, 0, l, c, 0, 0, g, v), t = h.canvas, l = g, c = v, d = d === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: l,
      paintHeight: c
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: n,
      height: i
    } = t, s = this.current.fillColor, o = this.current.patternFill, l = Vt(e);
    let c, d, h, f;
    if ((t.bitmap || t.data) && t.count > 1) {
      const C = t.bitmap || t.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), s]), c = this._cachedBitmapsMap.get(C), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(C, c));
      const T = c.get(d);
      if (T && !o) {
        const O = Math.round(Math.min(l[0], l[2]) + l[4]), D = Math.round(Math.min(l[1], l[3]) + l[5]);
        return {
          canvas: T,
          offsetX: O,
          offsetY: D
        };
      }
      h = T;
    }
    h || (f = this.cachedCanvases.getCanvas("maskCanvas", n, i), Rv(f.context, t));
    let g = Q.transform(l, [1 / n, 0, 0, -1 / i, 0, 0]);
    g = Q.transform(g, [1, 0, 0, 1, 0, -i]);
    const [v, y, E, x] = Q.getAxialAlignedBoundingBox([0, 0, n, i], g), _ = Math.round(E - v) || 1, P = Math.round(x - y) || 1, L = this.cachedCanvases.getCanvas("fillCanvas", _, P), k = L.context, F = v, I = y;
    k.translate(-F, -I), k.transform(...g), h || (h = this._scaleImage(f.canvas, oi(k)), h = h.img, c && o && c.set(d, h)), k.imageSmoothingEnabled = Lv(Vt(k), t.interpolate), dd(k, h, 0, 0, h.width, h.height, 0, 0, n, i), k.globalCompositeOperation = "source-in";
    const M = Q.transform(oi(k), [1, 0, 0, 1, -F, -I]);
    return k.fillStyle = o ? s.getPattern(e, this, M, Oe.FILL) : s, k.fillRect(0, 0, n, i), c && !o && (this.cachedCanvases.delete("fillCanvas"), c.set(d, L.canvas)), {
      canvas: L.canvas,
      offsetX: Math.round(F),
      offsetY: Math.round(I)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = rL[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = sL[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const n = this.ctx;
    n.setLineDash !== void 0 && (n.setLineDash(t), n.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, n] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(n);
          break;
        case "LC":
          this.setLineCap(n);
          break;
        case "LJ":
          this.setLineJoin(n);
          break;
        case "ML":
          this.setMiterLimit(n);
          break;
        case "D":
          this.setDash(n[0], n[1]);
          break;
        case "RI":
          this.setRenderingIntent(n);
          break;
        case "FL":
          this.setFlatness(n);
          break;
        case "Font":
          this.setFont(n[0], n[1]);
          break;
        case "CA":
          this.current.strokeAlpha = n;
          break;
        case "ca":
          this.current.fillAlpha = n, this.ctx.globalAlpha = n;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = n;
          break;
        case "SMask":
          this.current.activeSMask = n ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, n = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(n, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const s = this.ctx;
    s.setTransform(...Vt(this.suspendedCtx)), nl(this.suspendedCtx, s), eL(s, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), nl(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, n = this.suspendedCtx;
    this.composeSMask(n, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, n, i) {
    const s = i[0], o = i[1], l = i[2] - s, c = i[3] - o;
    l === 0 || c === 0 || (this.genericComposeSMask(e.context, n, l, c, e.subtype, e.backdrop, e.transferMap, s, o, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(n.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, n, i, s, o, l, c, d, h, f) {
    let g = t.canvas, v = c - h, y = d - f;
    if (o) {
      if (v < 0 || y < 0 || v + n > g.width || y + i > g.height) {
        const x = this.cachedCanvases.getCanvas("maskExtension", n, i), _ = x.context;
        _.drawImage(g, -v, -y), o.some((P) => P !== 0) && (_.globalCompositeOperation = "destination-atop", _.fillStyle = Q.makeHexColor(...o), _.fillRect(0, 0, n, i), _.globalCompositeOperation = "source-over"), g = x.canvas, v = y = 0;
      } else if (o.some((x) => x !== 0)) {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const x = new Path2D();
        x.rect(v, y, n, i), t.clip(x), t.globalCompositeOperation = "destination-atop", t.fillStyle = Q.makeHexColor(...o), t.fillRect(v, y, n, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), s === "Alpha" && l ? e.filter = this.filterFactory.addAlphaFilter(l) : s === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(l));
    const E = new Path2D();
    E.rect(c, d, n, i), e.clip(E), e.globalCompositeOperation = "destination-in", e.drawImage(g, v, y, n, i, c, d, n, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (nl(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), nl(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, n, i, s, o) {
    this.ctx.transform(t, e, n, i, s, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, n) {
    const i = this.ctx, s = this.current;
    let o = s.x, l = s.y, c, d;
    const h = Vt(i), f = h[0] === 0 && h[3] === 0 || h[1] === 0 && h[2] === 0, g = f ? n.slice(0) : null;
    for (let v = 0, y = 0, E = t.length; v < E; v++)
      switch (t[v] | 0) {
        case mn.rectangle:
          o = e[y++], l = e[y++];
          const x = e[y++], _ = e[y++], P = o + x, L = l + _;
          i.moveTo(o, l), x === 0 || _ === 0 ? i.lineTo(P, L) : (i.lineTo(P, l), i.lineTo(P, L), i.lineTo(o, L)), f || s.updateRectMinMax(h, [o, l, P, L]), i.closePath();
          break;
        case mn.moveTo:
          o = e[y++], l = e[y++], i.moveTo(o, l), f || s.updatePathMinMax(h, o, l);
          break;
        case mn.lineTo:
          o = e[y++], l = e[y++], i.lineTo(o, l), f || s.updatePathMinMax(h, o, l);
          break;
        case mn.curveTo:
          c = o, d = l, o = e[y + 4], l = e[y + 5], i.bezierCurveTo(e[y], e[y + 1], e[y + 2], e[y + 3], o, l), s.updateCurvePathMinMax(h, c, d, e[y], e[y + 1], e[y + 2], e[y + 3], o, l, g), y += 6;
          break;
        case mn.curveTo2:
          c = o, d = l, i.bezierCurveTo(o, l, e[y], e[y + 1], e[y + 2], e[y + 3]), s.updateCurvePathMinMax(h, c, d, o, l, e[y], e[y + 1], e[y + 2], e[y + 3], g), o = e[y + 2], l = e[y + 3], y += 4;
          break;
        case mn.curveTo3:
          c = o, d = l, o = e[y + 2], l = e[y + 3], i.bezierCurveTo(e[y], e[y + 1], o, l, o, l), s.updateCurvePathMinMax(h, c, d, e[y], e[y + 1], o, l, o, l, g), y += 4;
          break;
        case mn.closePath:
          i.closePath();
          break;
      }
    f && s.updateScalingPathMinMax(h, g), s.setCurrentPoint(o, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, n = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof n == "object" && (n != null && n.getPattern) ? (e.save(), e.strokeStyle = n.getPattern(e, this, oi(e), Oe.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    let s = !1;
    i && (e.save(), e.fillStyle = n.getPattern(e, this, oi(e), Oe.FILL), s = !0);
    const o = this.current.getClippedPathBoundingBox();
    this.contentVisible && o !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), s && e.restore(), t && this.consumePath(o);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = oL;
  }
  eoClip() {
    this.pendingClip = kv;
  }
  beginText() {
    this.current.textMatrix = bb, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const n of t)
      e.setTransform(...n.transform), e.translate(n.x, n.y), n.addToPath(e, n.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var h;
    const n = this.commonObjs.get(t), i = this.current;
    if (!n)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = n.fontMatrix || Eg, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && vt("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = n, this.current.fontSize = e, n.isType3Font)
      return;
    const s = n.loadedName || "sans-serif", o = ((h = n.systemFontInfo) == null ? void 0 : h.css) || `"${s}", ${n.fallbackName}`;
    let l = "normal";
    n.black ? l = "900" : n.bold && (l = "bold");
    const c = n.italic ? "italic" : "normal";
    let d = e;
    e < _v ? d = _v : e > Sv && (d = Sv), this.current.fontSizeScale = e / d, this.ctx.font = `${c} ${l} ${d}px ${o}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, n, i, s, o) {
    this.current.textMatrix = [t, e, n, i, s, o], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, n, i) {
    const s = this.ctx, o = this.current, l = o.font, c = o.textRenderingMode, d = o.fontSize / o.fontSizeScale, h = c & _e.FILL_STROKE_MASK, f = !!(c & _e.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile;
    let v;
    (l.disableFontFace || f || g) && (v = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g ? (s.save(), s.translate(e, n), s.beginPath(), v(s, d), i && s.setTransform(...i), (h === _e.FILL || h === _e.FILL_STROKE) && s.fill(), (h === _e.STROKE || h === _e.FILL_STROKE) && s.stroke(), s.restore()) : ((h === _e.FILL || h === _e.FILL_STROKE) && s.fillText(t, e, n), (h === _e.STROKE || h === _e.FILL_STROKE) && s.strokeText(t, e, n)), f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Vt(s),
      x: e,
      y: n,
      fontSize: d,
      addToPath: v
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let n = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        n = !0;
        break;
      }
    return Tt(this, "isFontSubpixelAAEnabled", n);
  }
  showText(t) {
    const e = this.current, n = e.font;
    if (n.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const s = this.ctx, o = e.fontSizeScale, l = e.charSpacing, c = e.wordSpacing, d = e.fontDirection, h = e.textHScale * d, f = t.length, g = n.vertical, v = g ? 1 : -1, y = n.defaultVMetrics, E = i * e.fontMatrix[0], x = e.textRenderingMode === _e.FILL && !n.disableFontFace && !e.patternFill;
    s.save(), s.transform(...e.textMatrix), s.translate(e.x, e.y + e.textRise), d > 0 ? s.scale(h, -1) : s.scale(h, 1);
    let _;
    if (e.patternFill) {
      s.save();
      const I = e.fillColor.getPattern(s, this, oi(s), Oe.FILL);
      _ = Vt(s), s.restore(), s.fillStyle = I;
    }
    let P = e.lineWidth;
    const L = e.textMatrixScale;
    if (L === 0 || P === 0) {
      const I = e.textRenderingMode & _e.FILL_STROKE_MASK;
      (I === _e.STROKE || I === _e.FILL_STROKE) && (P = this.getSinglePixelWidth());
    } else
      P /= L;
    if (o !== 1 && (s.scale(o, o), P /= o), s.lineWidth = P, n.isInvalidPDFjsFont) {
      const I = [];
      let M = 0;
      for (const C of t)
        I.push(C.unicode), M += C.width;
      s.fillText(I.join(""), 0, 0), e.x += M * E * h, s.restore(), this.compose();
      return;
    }
    let k = 0, F;
    for (F = 0; F < f; ++F) {
      const I = t[F];
      if (typeof I == "number") {
        k += v * I * i / 1e3;
        continue;
      }
      let M = !1;
      const C = (I.isSpace ? c : 0) + l, T = I.fontChar, O = I.accent;
      let D, H, j = I.width;
      if (g) {
        const Y = I.vmetric || y, Z = -(I.vmetric ? Y[1] : j * 0.5) * E, B = Y[2] * E;
        j = Y ? -Y[0] : j, D = Z / o, H = (k + B) / o;
      } else
        D = k / o, H = 0;
      if (n.remeasure && j > 0) {
        const Y = s.measureText(T).width * 1e3 / i * o;
        if (j < Y && this.isFontSubpixelAAEnabled) {
          const Z = j / Y;
          M = !0, s.save(), s.scale(Z, 1), D /= Z;
        } else
          j !== Y && (D += (j - Y) / 2e3 * i / o);
      }
      if (this.contentVisible && (I.isInFont || n.missingFile)) {
        if (x && !O)
          s.fillText(T, D, H);
        else if (this.paintChar(T, D, H, _), O) {
          const Y = D + i * O.offset.x / o, Z = H - i * O.offset.y / o;
          this.paintChar(O.fontChar, Y, Z, _);
        }
      }
      const V = g ? j * E - C * d : j * E + C * d;
      k += V, M && s.restore();
    }
    g ? e.y -= k : e.x += k * h, s.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, n = this.current, i = n.font, s = n.fontSize, o = n.fontDirection, l = i.vertical ? 1 : -1, c = n.charSpacing, d = n.wordSpacing, h = n.textHScale * o, f = n.fontMatrix || Eg, g = t.length, v = n.textRenderingMode === _e.INVISIBLE;
    let y, E, x, _;
    if (!(v || s === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...n.textMatrix), e.translate(n.x, n.y), e.scale(h, o), y = 0; y < g; ++y) {
        if (E = t[y], typeof E == "number") {
          _ = l * E * s / 1e3, this.ctx.translate(_, 0), n.x += _ * h;
          continue;
        }
        const P = (E.isSpace ? d : 0) + c, L = i.charProcOperatorList[E.operatorListId];
        if (!L) {
          vt(`Type3 character "${E.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = E, this.save(), e.scale(s, s), e.transform(...f), this.executeOperatorList(L), this.restore()), x = Q.applyTransform([E.width, 0], f)[0] * s + P, e.translate(x, 0), n.x += x * h;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, n, i, s, o) {
    this.ctx.rect(n, i, s - n, o - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const n = t[1], i = this.baseTransform || Vt(this.ctx), s = {
        createCanvasGraphics: (o) => new T0(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Jg(t, n, this.ctx, s, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, n) {
    const i = Q.makeHexColor(t, e, n);
    this.ctx.strokeStyle = i, this.current.strokeColor = i;
  }
  setFillRGBColor(t, e, n) {
    const i = Q.makeHexColor(t, e, n);
    this.ctx.fillStyle = i, this.current.fillColor = i, this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let n;
    return this.cachedPatterns.has(t) ? n = this.cachedPatterns.get(t) : (n = JR(this.getObject(t)), this.cachedPatterns.set(t, n)), e && (n.matrix = e), n;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const n = this._getPattern(t);
    e.fillStyle = n.getPattern(e, this, oi(e), Oe.SHADING);
    const i = oi(e);
    if (i) {
      const {
        width: s,
        height: o
      } = e.canvas, [l, c, d, h] = Q.getAxialAlignedBoundingBox([0, 0, s, o], i);
      this.ctx.fillRect(l, c, d - l, h - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    Dt("Should not call beginInlineImage");
  }
  beginImageData() {
    Dt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = Vt(this.ctx), e)) {
      const n = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], n, i), this.current.updateRectMinMax(Vt(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || cp("TODO: Support non-isolated groups."), t.knockout && vt("Knockout groups not supported.");
    const n = Vt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = Q.getAxialAlignedBoundingBox(t.bbox, Vt(e));
    const s = [0, 0, e.canvas.width, e.canvas.height];
    i = Q.intersect(i, s) || [0, 0, 0, 0];
    const o = Math.floor(i[0]), l = Math.floor(i[1]), c = Math.max(Math.ceil(i[2]) - o, 1), d = Math.max(Math.ceil(i[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    let h = "groupAt" + this.groupLevel;
    t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
    const f = this.cachedCanvases.getCanvas(h, c, d), g = f.context;
    g.translate(-o, -l), g.transform(...n), t.smask ? this.smaskStack.push({
      canvas: f.canvas,
      context: g,
      offsetX: o,
      offsetY: l,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(o, l), e.save()), nl(e, g), this.ctx = g, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, n = this.groupStack.pop();
    if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = Vt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const s = Q.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(s);
    }
  }
  beginAnnotation(t, e, n, i, s) {
    if (A(this, Ac, Qg).call(this), ud(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const o = e[2] - e[0], l = e[3] - e[1];
      if (s && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= e[0], n[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = o, e[3] = l;
        const [c, d] = Q.singularValueDecompose2dScale(Vt(this.ctx)), {
          viewportScale: h
        } = this, f = Math.ceil(o * this.outputScaleX * h), g = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(f, g);
        const {
          canvas: v,
          context: y
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, v), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -d, 0, l * d), ud(this.ctx);
      } else
        ud(this.ctx), this.ctx.rect(e[0], e[1], o, l), this.ctx.clip(), this.endPath();
    }
    this.current = new Tv(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...n), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), A(this, Ec, tm).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const n = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = iL(t)), i.compiled)) {
      i.compiled(n);
      return;
    }
    const s = this._createMaskCanvas(t), o = s.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(o, s.offsetX, s.offsetY), n.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, n = 0, i = 0, s, o) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const l = this.ctx;
    l.save();
    const c = Vt(l);
    l.transform(e, n, i, s, 0, 0);
    const d = this._createMaskCanvas(t);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]);
    for (let h = 0, f = o.length; h < f; h += 2) {
      const g = Q.transform(c, [e, n, i, s, o[h], o[h + 1]]), [v, y] = Q.applyTransform([0, 0], g);
      l.drawImage(d.canvas, v, y);
    }
    l.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    for (const s of t) {
      const {
        data: o,
        width: l,
        height: c,
        transform: d
      } = s, h = this.cachedCanvases.getCanvas("maskCanvas", l, c), f = h.context;
      f.save();
      const g = this.getObject(o, s);
      Rv(f, g), f.globalCompositeOperation = "source-in", f.fillStyle = i ? n.getPattern(f, this, oi(e), Oe.FILL) : n, f.fillRect(0, 0, l, c), f.restore(), e.save(), e.transform(...d), e.scale(1, -1), dd(e, h.canvas, 0, 0, l, c, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      vt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, n, i) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t);
    if (!s) {
      vt("Dependent image isn't ready yet");
      return;
    }
    const o = s.width, l = s.height, c = [];
    for (let d = 0, h = i.length; d < h; d += 2)
      c.push({
        transform: [e, 0, 0, n, i[d], i[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(s, c);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: n,
      height: i
    } = t, s = this.cachedCanvases.getCanvas("inlineImage", n, i), o = s.context;
    return o.filter = this.current.transferMaps, o.drawImage(e, 0, 0), o.filter = "none", s.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, n = t.height, i = this.ctx;
    if (this.save(), !Pe) {
      const {
        filter: l
      } = i;
      l !== "none" && l !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / n);
    let s;
    if (t.bitmap)
      s = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      s = t;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", e, n).context;
      Pv(c, t), s = this.applyTransferMapsToCanvas(c);
    }
    const o = this._scaleImage(s, oi(i));
    i.imageSmoothingEnabled = Lv(Vt(i), t.interpolate), dd(i, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -n, e, n), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const n = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const s = t.width, o = t.height, c = this.cachedCanvases.getCanvas("inlineImage", s, o).context;
      Pv(c, t), i = this.applyTransferMapsToCanvas(c);
    }
    for (const s of e)
      n.save(), n.transform(...s.transform), n.scale(1, -1), dd(n, i, s.x, s.y, s.w, s.h, 0, -1, 1, 1), n.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const n = this.ctx;
    this.pendingClip && (e || (this.pendingClip === kv ? n.clip("evenodd") : n.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), n.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Vt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), n = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(n, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: n,
        c: i,
        d: s
      } = this.ctx.getTransform();
      let o, l;
      if (n === 0 && i === 0) {
        const c = Math.abs(e), d = Math.abs(s);
        if (c === d)
          if (t === 0)
            o = l = 1 / c;
          else {
            const h = c * t;
            o = l = h < 1 ? 1 / h : 1;
          }
        else if (t === 0)
          o = 1 / c, l = 1 / d;
        else {
          const h = c * t, f = d * t;
          o = h < 1 ? 1 / h : 1, l = f < 1 ? 1 / f : 1;
        }
      } else {
        const c = Math.abs(e * s - n * i), d = Math.hypot(e, n), h = Math.hypot(i, s);
        if (t === 0)
          o = h / c, l = d / c;
        else {
          const f = t * c;
          o = h > f ? h / f : 1, l = d > f ? d / f : 1;
        }
      }
      this._cachedScaleForStroking[0] = o, this._cachedScaleForStroking[1] = l;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: n
    } = this.current, [i, s] = this.getScaleForStroking();
    if (e.lineWidth = n || 1, i === 1 && s === 1) {
      e.stroke();
      return;
    }
    const o = e.getLineDash();
    if (t && e.save(), e.scale(i, s), o.length > 0) {
      const l = Math.max(i, s);
      e.setLineDash(o.map((c) => c / l)), e.lineDashOffset /= l;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
Ac = new WeakSet(), Qg = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Ec = new WeakSet(), tm = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let So = T0;
for (const r in mn)
  So.prototype[r] !== void 0 && (So.prototype[mn[r]] = So.prototype[r]);
var _c, Sc;
class zi {
  static get workerPort() {
    return a(this, _c);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    w(this, _c, t);
  }
  static get workerSrc() {
    return a(this, Sc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    w(this, Sc, t);
  }
}
_c = new WeakMap(), Sc = new WeakMap(), m(zi, _c, null), m(zi, Sc, "");
const fd = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, te = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Xe(r) {
  switch (r instanceof Error || typeof r == "object" && r !== null || Dt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), r.name) {
    case "AbortException":
      return new co(r.message);
    case "MissingPDFException":
      return new lo(r.message);
    case "PasswordException":
      return new Sg(r.message, r.code);
    case "UnexpectedResponseException":
      return new hp(r.message, r.status);
    case "UnknownErrorException":
      return new xg(r.message, r.details);
    default:
      return new xg(r.message, r.toString());
  }
}
var zu, tw, Vu, ew, Go, Ld;
class ul {
  constructor(t, e, n) {
    m(this, zu);
    m(this, Vu);
    m(this, Go);
    this.sourceName = t, this.targetName = e, this.comObj = n, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (i) => {
      const s = i.data;
      if (s.targetName !== this.sourceName)
        return;
      if (s.stream) {
        A(this, Vu, ew).call(this, s);
        return;
      }
      if (s.callback) {
        const l = s.callbackId, c = this.callbackCapabilities[l];
        if (!c)
          throw new Error(`Cannot resolve callback ${l}`);
        if (delete this.callbackCapabilities[l], s.callback === fd.DATA)
          c.resolve(s.data);
        else if (s.callback === fd.ERROR)
          c.reject(Xe(s.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const o = this.actionHandler[s.action];
      if (!o)
        throw new Error(`Unknown action from worker: ${s.action}`);
      if (s.callbackId) {
        const l = this.sourceName, c = s.sourceName;
        new Promise(function(d) {
          d(o(s.data));
        }).then(function(d) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: fd.DATA,
            callbackId: s.callbackId,
            data: d
          });
        }, function(d) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: fd.ERROR,
            callbackId: s.callbackId,
            reason: Xe(d)
          });
        });
        return;
      }
      if (s.streamId) {
        A(this, zu, tw).call(this, s);
        return;
      }
      o(s.data);
    }, n.addEventListener("message", this._onComObjOnMessage);
  }
  on(t, e) {
    const n = this.actionHandler;
    if (n[t])
      throw new Error(`There is already an actionName called "${t}"`);
    n[t] = e;
  }
  send(t, e, n) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, n);
  }
  sendWithPromise(t, e, n) {
    const i = this.callbackId++, s = Promise.withResolvers();
    this.callbackCapabilities[i] = s;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, n);
    } catch (o) {
      s.reject(o);
    }
    return s.promise;
  }
  sendWithStream(t, e, n, i) {
    const s = this.streamId++, o = this.sourceName, l = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s] = {
          controller: d,
          startCall: h,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: o,
          targetName: l,
          action: t,
          streamId: s,
          data: e,
          desiredSize: d.desiredSize
        }, i), h.promise;
      },
      pull: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s].pullCall = h, c.postMessage({
          sourceName: o,
          targetName: l,
          stream: te.PULL,
          streamId: s,
          desiredSize: d.desiredSize
        }), h.promise;
      },
      cancel: (d) => {
        ae(d instanceof Error, "cancel must have a valid reason");
        const h = Promise.withResolvers();
        return this.streamControllers[s].cancelCall = h, this.streamControllers[s].isClosed = !0, c.postMessage({
          sourceName: o,
          targetName: l,
          stream: te.CANCEL,
          streamId: s,
          reason: Xe(d)
        }), h.promise;
      }
    }, n);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
zu = new WeakSet(), tw = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, o = this, l = this.actionHandler[t.action], c = {
    enqueue(d, h = 1, f) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= h, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.ENQUEUE,
        streamId: e,
        chunk: d
      }, f);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.CLOSE,
        streamId: e
      }), delete o.streamSinks[e]);
    },
    error(d) {
      ae(d instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.ERROR,
        streamId: e,
        reason: Xe(d)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[e] = c, new Promise(function(d) {
    d(l(t.data, c));
  }).then(function() {
    s.postMessage({
      sourceName: n,
      targetName: i,
      stream: te.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(d) {
    s.postMessage({
      sourceName: n,
      targetName: i,
      stream: te.START_COMPLETE,
      streamId: e,
      reason: Xe(d)
    });
  });
}, Vu = new WeakSet(), ew = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, o = this.streamControllers[e], l = this.streamSinks[e];
  switch (t.stream) {
    case te.START_COMPLETE:
      t.success ? o.startCall.resolve() : o.startCall.reject(Xe(t.reason));
      break;
    case te.PULL_COMPLETE:
      t.success ? o.pullCall.resolve() : o.pullCall.reject(Xe(t.reason));
      break;
    case te.PULL:
      if (!l) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      l.desiredSize <= 0 && t.desiredSize > 0 && l.sinkCapability.resolve(), l.desiredSize = t.desiredSize, new Promise(function(c) {
        var d;
        c((d = l.onPull) == null ? void 0 : d.call(l));
      }).then(function() {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          reason: Xe(c)
        });
      });
      break;
    case te.ENQUEUE:
      if (ae(o, "enqueue should have stream controller"), o.isClosed)
        break;
      o.controller.enqueue(t.chunk);
      break;
    case te.CLOSE:
      if (ae(o, "close should have stream controller"), o.isClosed)
        break;
      o.isClosed = !0, o.controller.close(), A(this, Go, Ld).call(this, o, e);
      break;
    case te.ERROR:
      ae(o, "error should have stream controller"), o.controller.error(Xe(t.reason)), A(this, Go, Ld).call(this, o, e);
      break;
    case te.CANCEL_COMPLETE:
      t.success ? o.cancelCall.resolve() : o.cancelCall.reject(Xe(t.reason)), A(this, Go, Ld).call(this, o, e);
      break;
    case te.CANCEL:
      if (!l)
        break;
      new Promise(function(c) {
        var d;
        c((d = l.onCancel) == null ? void 0 : d.call(l, Xe(t.reason)));
      }).then(function() {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.CANCEL_COMPLETE,
          streamId: e,
          reason: Xe(c)
        });
      }), l.sinkCapability.reject(Xe(t.reason)), l.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Go = new WeakSet(), Ld = async function(t, e) {
  var n, i, s;
  await Promise.allSettled([(n = t.startCall) == null ? void 0 : n.promise, (i = t.pullCall) == null ? void 0 : i.promise, (s = t.cancelCall) == null ? void 0 : s.promise]), delete this.streamControllers[e];
};
var as, xc;
class aL {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, as, void 0);
    m(this, xc, void 0);
    w(this, as, t), w(this, xc, e);
  }
  getRaw() {
    return a(this, xc);
  }
  get(t) {
    return a(this, as).get(t) ?? null;
  }
  getAll() {
    return h0(a(this, as));
  }
  has(t) {
    return a(this, as).has(t);
  }
}
as = new WeakMap(), xc = new WeakMap();
const Ki = Symbol("INTERNAL");
var Cc, Tc, Pc, Wo;
class lL {
  constructor(t, {
    name: e,
    intent: n,
    usage: i
  }) {
    m(this, Cc, !1);
    m(this, Tc, !1);
    m(this, Pc, !1);
    m(this, Wo, !0);
    w(this, Cc, !!(t & un.DISPLAY)), w(this, Tc, !!(t & un.PRINT)), this.name = e, this.intent = n, this.usage = i;
  }
  get visible() {
    if (a(this, Pc))
      return a(this, Wo);
    if (!a(this, Wo))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return a(this, Cc) ? (e == null ? void 0 : e.viewState) !== "OFF" : a(this, Tc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, n = !1) {
    t !== Ki && Dt("Internal method `_setVisible` called."), w(this, Pc, n), w(this, Wo, e);
  }
}
Cc = new WeakMap(), Tc = new WeakMap(), Pc = new WeakMap(), Wo = new WeakMap();
var lr, Mt, qo, Xo, Rc, em;
class cL {
  constructor(t, e = un.DISPLAY) {
    m(this, Rc);
    m(this, lr, null);
    m(this, Mt, /* @__PURE__ */ new Map());
    m(this, qo, null);
    m(this, Xo, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, w(this, Xo, t.order);
      for (const n of t.groups)
        a(this, Mt).set(n.id, new lL(e, n));
      if (t.baseState === "OFF")
        for (const n of a(this, Mt).values())
          n._setVisible(Ki, !1);
      for (const n of t.on)
        a(this, Mt).get(n)._setVisible(Ki, !0);
      for (const n of t.off)
        a(this, Mt).get(n)._setVisible(Ki, !1);
      w(this, qo, this.getHash());
    }
  }
  isVisible(t) {
    if (a(this, Mt).size === 0)
      return !0;
    if (!t)
      return cp("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return a(this, Mt).has(t.id) ? a(this, Mt).get(t.id).visible : (vt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return A(this, Rc, em).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (a(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (!a(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (!a(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (a(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return vt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return vt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0) {
    const n = a(this, Mt).get(t);
    if (!n) {
      vt(`Optional content group not found: ${t}`);
      return;
    }
    n._setVisible(Ki, !!e, !0), w(this, lr, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let n;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          n = i;
          continue;
      }
      const s = a(this, Mt).get(i);
      if (s)
        switch (n) {
          case "ON":
            s._setVisible(Ki, !0);
            break;
          case "OFF":
            s._setVisible(Ki, !1);
            break;
          case "Toggle":
            s._setVisible(Ki, !s.visible);
            break;
        }
    }
    w(this, lr, null);
  }
  get hasInitialVisibility() {
    return a(this, qo) === null || this.getHash() === a(this, qo);
  }
  getOrder() {
    return a(this, Mt).size ? a(this, Xo) ? a(this, Xo).slice() : [...a(this, Mt).keys()] : null;
  }
  getGroups() {
    return a(this, Mt).size > 0 ? h0(a(this, Mt)) : null;
  }
  getGroup(t) {
    return a(this, Mt).get(t) || null;
  }
  getHash() {
    if (a(this, lr) !== null)
      return a(this, lr);
    const t = new Kb();
    for (const [e, n] of a(this, Mt))
      t.update(`${e}:${n.visible}`);
    return w(this, lr, t.hexdigest());
  }
}
lr = new WeakMap(), Mt = new WeakMap(), qo = new WeakMap(), Xo = new WeakMap(), Rc = new WeakSet(), em = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const n = t[0];
  for (let i = 1; i < e; i++) {
    const s = t[i];
    let o;
    if (Array.isArray(s))
      o = A(this, Rc, em).call(this, s);
    else if (a(this, Mt).has(s))
      o = a(this, Mt).get(s).visible;
    else
      return vt(`Optional content group not found: ${s}`), !0;
    switch (n) {
      case "And":
        if (!o)
          return !1;
        break;
      case "Or":
        if (o)
          return !0;
        break;
      case "Not":
        return !o;
      default:
        return !0;
    }
  }
  return n === "And";
};
class hL {
  constructor(t, {
    disableRange: e = !1,
    disableStream: n = !1
  }) {
    ae(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: s,
      progressiveDone: o,
      contentDispositionFilename: l
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = o, this._contentDispositionFilename = l, (s == null ? void 0 : s.length) > 0) {
      const c = s instanceof Uint8Array && s.byteLength === s.buffer.byteLength ? s.buffer : new Uint8Array(s).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !n, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((c, d) => {
      this._onReceiveData({
        begin: c,
        chunk: d
      });
    }), t.addProgressListener((c, d) => {
      this._onProgress({
        loaded: c,
        total: d
      });
    }), t.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const n = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(n) : this._queuedChunks.push(n);
    else {
      const i = this._rangeReaders.some(function(s) {
        return s._begin !== t ? !1 : (s._enqueue(n), !0);
      });
      ae(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, n, i, s;
    t.total === void 0 ? (n = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || n.call(e, {
      loaded: t.loaded
    }) : (s = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || s.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    ae(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new dL(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new uL(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeReaders.slice(0))
      n.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class dL {
  constructor(t, e, n = !1, i = null) {
    this._stream = t, this._done = n || !1, this._filename = g0(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const s of this._queuedChunks)
      this._loaded += s.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class uL {
  constructor(t, e, n) {
    this._stream = t, this._begin = e, this._end = n, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const n of this._requests)
          n.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function fL(r) {
  let t = !0, e = n("filename\\*", "i").exec(r);
  if (e) {
    e = e[1];
    let h = l(e);
    return h = unescape(h), h = c(h), h = d(h), s(h);
  }
  if (e = o(r), e) {
    const h = d(e);
    return s(h);
  }
  if (e = n("filename", "i").exec(r), e) {
    e = e[1];
    let h = l(e);
    return h = d(h), s(h);
  }
  function n(h, f) {
    return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
  }
  function i(h, f) {
    if (h) {
      if (!/^[\x00-\xFF]+$/.test(f))
        return f;
      try {
        const g = new TextDecoder(h, {
          fatal: !0
        }), v = dp(f);
        f = g.decode(v), t = !1;
      } catch {
      }
    }
    return f;
  }
  function s(h) {
    return t && /[\x80-\xff]/.test(h) && (h = i("utf-8", h), t && (h = i("iso-8859-1", h))), h;
  }
  function o(h) {
    const f = [];
    let g;
    const v = n("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = v.exec(h)) !== null; ) {
      let [, E, x, _] = g;
      if (E = parseInt(E, 10), E in f) {
        if (E === 0)
          break;
        continue;
      }
      f[E] = [x, _];
    }
    const y = [];
    for (let E = 0; E < f.length && E in f; ++E) {
      let [x, _] = f[E];
      _ = l(_), x && (_ = unescape(_), E === 0 && (_ = c(_))), y.push(_);
    }
    return y.join("");
  }
  function l(h) {
    if (h.startsWith('"')) {
      const f = h.slice(1).split('\\"');
      for (let g = 0; g < f.length; ++g) {
        const v = f[g].indexOf('"');
        v !== -1 && (f[g] = f[g].slice(0, v), f.length = g + 1), f[g] = f[g].replaceAll(/\\(.)/g, "$1");
      }
      h = f.join('"');
    }
    return h;
  }
  function c(h) {
    const f = h.indexOf("'");
    if (f === -1)
      return h;
    const g = h.slice(0, f), y = h.slice(f + 1).replace(/^[^']*'/, "");
    return i(g, y);
  }
  function d(h) {
    return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, g, v, y) {
      if (v === "q" || v === "Q")
        return y = y.replaceAll("_", " "), y = y.replaceAll(/=([0-9a-fA-F]{2})/g, function(E, x) {
          return String.fromCharCode(parseInt(x, 16));
        }), i(g, y);
      try {
        y = atob(y);
      } catch {
      }
      return i(g, y);
    });
  }
  return "";
}
function y0({
  getResponseHeader: r,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: n
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, s = parseInt(r("Content-Length"), 10);
  return !Number.isInteger(s) || (i.suggestedLength = s, s <= 2 * e) || n || !t || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function b0(r) {
  const t = r("Content-Disposition");
  if (t) {
    let e = fL(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (g0(e))
      return e;
  }
  return null;
}
function vp(r, t) {
  return r === 404 || r === 0 && t.startsWith("file:") ? new lo('Missing PDF "' + t + '".') : new hp(`Unexpected server response (${r}) while retrieving PDF "${t}".`, r);
}
function nw(r) {
  return r === 200 || r === 206;
}
function iw(r, t, e) {
  return {
    method: "GET",
    headers: r,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function rw(r) {
  const t = new Headers();
  for (const e in r) {
    const n = r[e];
    n !== void 0 && t.append(e, n);
  }
  return t;
}
function sw(r) {
  return r instanceof Uint8Array ? r.buffer : r instanceof ArrayBuffer ? r : (vt(`getArrayBuffer - unexpected data format: ${r}`), new Uint8Array(r).buffer);
}
class Iv {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new pL(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new gL(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class pL {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = rw(this._stream.httpHeaders);
    const n = e.url;
    fetch(n, iw(this._headers, this._withCredentials, this._abortController)).then((i) => {
      if (!nw(i.status))
        throw vp(i.status, n);
      this._reader = i.body.getReader(), this._headersCapability.resolve();
      const s = (c) => i.headers.get(c), {
        allowRangeRequests: o,
        suggestedLength: l
      } = y0({
        getResponseHeader: s,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = b0(s), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new co("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: sw(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class gL {
  constructor(t, e, n) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController(), this._headers = rw(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${n - 1}`);
    const s = i.url;
    fetch(s, iw(this._headers, this._withCredentials, this._abortController)).then((o) => {
      if (!nw(o.status))
        throw vp(o.status, s);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: sw(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Jp = 200, Qp = 206;
function mL(r) {
  const t = r.response;
  return typeof t != "string" ? t : dp(t).buffer;
}
class vL {
  constructor(t, e = {}) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, n) {
    const i = {
      begin: t,
      end: e
    };
    for (const s in n)
      i[s] = n[s];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), n = this.currXhrId++, i = this.pendingRequests[n] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const s in this.httpHeaders) {
      const o = this.httpHeaders[s];
      o !== void 0 && e.setRequestHeader(s, o);
    }
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Qp) : i.expectedStatus = Jp, e.responseType = "arraybuffer", t.onError && (e.onerror = function(s) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, n), e.onprogress = this.onProgress.bind(this, n), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), n;
  }
  onProgress(t, e) {
    var i;
    const n = this.pendingRequests[t];
    n && ((i = n.onProgress) == null || i.call(n, e));
  }
  onStateChange(t, e) {
    var c, d, h;
    const n = this.pendingRequests[t];
    if (!n)
      return;
    const i = n.xhr;
    if (i.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (c = n.onError) == null || c.call(n, i.status);
      return;
    }
    const s = i.status || Jp;
    if (!(s === Jp && n.expectedStatus === Qp) && s !== n.expectedStatus) {
      (d = n.onError) == null || d.call(n, i.status);
      return;
    }
    const l = mL(i);
    if (s === Qp) {
      const f = i.getResponseHeader("Content-Range"), g = /bytes (\d+)-(\d+)\/(\d+)/.exec(f);
      n.onDone({
        begin: parseInt(g[1], 10),
        chunk: l
      });
    } else
      l ? n.onDone({
        begin: 0,
        chunk: l
      }) : (h = n.onError) == null || h.call(n, i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class yL {
  constructor(t) {
    this._source = t, this._manager = new vL(t.url, {
      httpHeaders: t.httpHeaders,
      withCredentials: t.withCredentials
    }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new bL(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const n = new wL(this._manager, t, e);
    return n.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class bL {
  constructor(t, e) {
    this._manager = t;
    const n = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(n), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), n = (o) => e.getResponseHeader(o), {
      allowRangeRequests: i,
      suggestedLength: s
    } = y0({
      getResponseHeader: n,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    i && (this._isRangeSupported = !0), this._contentLength = s || this._contentLength, this._filename = b0(n), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = vp(t, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersReceivedCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class wL {
  constructor(t, e, n) {
    this._manager = t;
    const i = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, n, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const n of this._requests)
      n.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = vp(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const ow = /^file:\/\/\/[a-zA-Z]:\//;
function AL(r) {
  const t = ni.get("url"), e = t.parse(r);
  return e.protocol === "file:" || e.host ? e : /^[a-z]:[/\\]/i.test(r) ? t.parse(`file:///${r}`) : (e.host || (e.protocol = "file:"), e);
}
class EL {
  constructor(t) {
    this.source = t, this.url = AL(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new xL(this) : new _L(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = this.isFsUrl ? new CL(this, t, e) : new SL(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class aw {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new co("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class lw {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function su(r, t) {
  return {
    protocol: r.protocol,
    auth: r.auth,
    host: r.hostname,
    port: r.port,
    path: r.path,
    method: "GET",
    headers: t
  };
}
class _L extends aw {
  constructor(t) {
    super(t);
    const e = (n) => {
      if (n.statusCode === 404) {
        const l = new lo(`Missing PDF "${this._url}".`);
        this._storedError = l, this._headersCapability.reject(l);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(n);
      const i = (l) => this._readableStream.headers[l.toLowerCase()], {
        allowRangeRequests: s,
        suggestedLength: o
      } = y0({
        getResponseHeader: i,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = s, this._contentLength = o || this._contentLength, this._filename = b0(i);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const n = ni.get("http");
      this._request = n.request(su(this._url, t.httpHeaders), e);
    } else {
      const n = ni.get("https");
      this._request = n.request(su(this._url, t.httpHeaders), e);
    }
    this._request.on("error", (n) => {
      this._storedError = n, this._headersCapability.reject(n);
    }), this._request.end();
  }
}
class SL extends lw {
  constructor(t, e, n) {
    super(t), this._httpHeaders = {};
    for (const s in t.httpHeaders) {
      const o = t.httpHeaders[s];
      o !== void 0 && (this._httpHeaders[s] = o);
    }
    this._httpHeaders.Range = `bytes=${e}-${n - 1}`;
    const i = (s) => {
      if (s.statusCode === 404) {
        const o = new lo(`Missing PDF "${this._url}".`);
        this._storedError = o;
        return;
      }
      this._setReadableStream(s);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const s = ni.get("http");
      this._request = s.request(su(this._url, this._httpHeaders), i);
    } else {
      const s = ni.get("https");
      this._request = s.request(su(this._url, this._httpHeaders), i);
    }
    this._request.on("error", (s) => {
      this._storedError = s;
    }), this._request.end();
  }
}
class xL extends aw {
  constructor(t) {
    super(t);
    let e = decodeURIComponent(this._url.path);
    ow.test(this._url.href) && (e = e.replace(/^\//, ""));
    const n = ni.get("fs");
    n.promises.lstat(e).then((i) => {
      this._contentLength = i.size, this._setReadableStream(n.createReadStream(e)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new lo(`Missing PDF "${e}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
}
class CL extends lw {
  constructor(t, e, n) {
    super(t);
    let i = decodeURIComponent(this._url.path);
    ow.test(this._url.href) && (i = i.replace(/^\//, ""));
    const s = ni.get("fs");
    this._setReadableStream(s.createReadStream(i, {
      start: e,
      end: n - 1
    }));
  }
}
const TL = 1e5, Be = 30, PL = 0.8;
var Xv, cr, Ue, Lc, kc, ls, _i, Ic, Fc, cs, Yo, Ko, hr, Zo, Mc, Jo, hs, Dc, Oc, je, ds, us, Qo, Gu, cw, Wu, hw, Nc, nm, ta, kd, qu, dw;
let ou = (je = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: n
  }) {
    m(this, Gu);
    m(this, Wu);
    m(this, Nc);
    m(this, cr, Promise.withResolvers());
    m(this, Ue, null);
    m(this, Lc, !1);
    m(this, kc, !!((Xv = globalThis.FontInspector) != null && Xv.enabled));
    m(this, ls, null);
    m(this, _i, null);
    m(this, Ic, 0);
    m(this, Fc, 0);
    m(this, cs, null);
    m(this, Yo, null);
    m(this, Ko, 0);
    m(this, hr, 0);
    m(this, Zo, /* @__PURE__ */ Object.create(null));
    m(this, Mc, []);
    m(this, Jo, null);
    m(this, hs, []);
    m(this, Dc, /* @__PURE__ */ new WeakMap());
    m(this, Oc, null);
    if (t instanceof ReadableStream)
      w(this, Jo, t);
    else if (typeof t == "object")
      w(this, Jo, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    w(this, Ue, w(this, Yo, e)), w(this, hr, n.scale * (globalThis.devicePixelRatio || 1)), w(this, Ko, n.rotation), w(this, _i, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: s,
      pageX: o,
      pageY: l
    } = n.rawDims;
    w(this, Oc, [1, 0, 0, -1, -o, l + s]), w(this, Fc, i), w(this, Ic, s), to(e, n), a(this, cr).promise.catch(() => {
    }).then(() => {
      a(je, Qo).delete(this), w(this, _i, null), w(this, Zo, null);
    });
  }
  render() {
    const t = () => {
      a(this, cs).read().then(({
        value: e,
        done: n
      }) => {
        if (n) {
          a(this, cr).resolve();
          return;
        }
        a(this, ls) ?? w(this, ls, e.lang), Object.assign(a(this, Zo), e.styles), A(this, Gu, cw).call(this, e.items), t();
      }, a(this, cr).reject);
    };
    return w(this, cs, a(this, Jo).getReader()), a(je, Qo).add(this), t(), a(this, cr).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var s;
    const n = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== a(this, Ko) && (e == null || e(), w(this, Ko, i), to(a(this, Yo), {
      rotation: i
    })), n !== a(this, hr)) {
      e == null || e(), w(this, hr, n);
      const o = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: A(s = je, ta, kd).call(s, a(this, ls))
      };
      for (const l of a(this, hs))
        o.properties = a(this, Dc).get(l), o.div = l, A(this, Nc, nm).call(this, o);
    }
  }
  cancel() {
    var e;
    const t = new co("TextLayer task cancelled.");
    (e = a(this, cs)) == null || e.cancel(t).catch(() => {
    }), w(this, cs, null), a(this, cr).reject(t);
  }
  get textDivs() {
    return a(this, hs);
  }
  get textContentItemsStr() {
    return a(this, Mc);
  }
  static cleanup() {
    if (!(a(this, Qo).size > 0)) {
      a(this, ds).clear();
      for (const {
        canvas: t
      } of a(this, us).values())
        t.remove();
      a(this, us).clear();
    }
  }
}, cr = new WeakMap(), Ue = new WeakMap(), Lc = new WeakMap(), kc = new WeakMap(), ls = new WeakMap(), _i = new WeakMap(), Ic = new WeakMap(), Fc = new WeakMap(), cs = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), hr = new WeakMap(), Zo = new WeakMap(), Mc = new WeakMap(), Jo = new WeakMap(), hs = new WeakMap(), Dc = new WeakMap(), Oc = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), Qo = new WeakMap(), Gu = new WeakSet(), cw = function(t) {
  var i, s;
  if (a(this, Lc))
    return;
  (s = a(this, _i)).ctx || (s.ctx = A(i = je, ta, kd).call(i, a(this, ls)));
  const e = a(this, hs), n = a(this, Mc);
  for (const o of t) {
    if (e.length > TL) {
      vt("Ignoring additional textDivs for performance reasons."), w(this, Lc, !0);
      return;
    }
    if (o.str === void 0) {
      if (o.type === "beginMarkedContentProps" || o.type === "beginMarkedContent") {
        const l = a(this, Ue);
        w(this, Ue, document.createElement("span")), a(this, Ue).classList.add("markedContent"), o.id !== null && a(this, Ue).setAttribute("id", `${o.id}`), l.append(a(this, Ue));
      } else
        o.type === "endMarkedContent" && w(this, Ue, a(this, Ue).parentNode);
      continue;
    }
    n.push(o.str), A(this, Wu, hw).call(this, o);
  }
}, Wu = new WeakSet(), hw = function(t) {
  var E;
  const e = document.createElement("span"), n = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  a(this, hs).push(e);
  const i = Q.transform(a(this, Oc), t.transform);
  let s = Math.atan2(i[1], i[0]);
  const o = a(this, Zo)[t.fontName];
  o.vertical && (s += Math.PI / 2);
  const l = a(this, kc) && o.fontSubstitution || o.fontFamily, c = Math.hypot(i[2], i[3]), d = c * A(E = je, qu, dw).call(E, l, a(this, ls));
  let h, f;
  s === 0 ? (h = i[4], f = i[5] - d) : (h = i[4] + d * Math.sin(s), f = i[5] - d * Math.cos(s));
  const g = "calc(var(--scale-factor)*", v = e.style;
  a(this, Ue) === a(this, Yo) ? (v.left = `${(100 * h / a(this, Fc)).toFixed(2)}%`, v.top = `${(100 * f / a(this, Ic)).toFixed(2)}%`) : (v.left = `${g}${h.toFixed(2)}px)`, v.top = `${g}${f.toFixed(2)}px)`), v.fontSize = `${g}${c.toFixed(2)}px)`, v.fontFamily = l, n.fontSize = c, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, a(this, kc) && (e.dataset.fontName = o.fontSubstitutionLoadedName || t.fontName), s !== 0 && (n.angle = s * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const x = Math.abs(t.transform[0]), _ = Math.abs(t.transform[3]);
    x !== _ && Math.max(x, _) / Math.min(x, _) > 1.5 && (y = !0);
  }
  if (y && (n.canvasWidth = o.vertical ? t.height : t.width), a(this, Dc).set(e, n), a(this, _i).div = e, a(this, _i).properties = n, A(this, Nc, nm).call(this, a(this, _i)), n.hasText && a(this, Ue).append(e), n.hasEOL) {
    const x = document.createElement("br");
    x.setAttribute("role", "presentation"), a(this, Ue).append(x);
  }
}, Nc = new WeakSet(), nm = function(t) {
  const {
    div: e,
    properties: n,
    ctx: i,
    prevFontSize: s,
    prevFontFamily: o
  } = t, {
    style: l
  } = e;
  let c = "";
  if (n.canvasWidth !== 0 && n.hasText) {
    const {
      fontFamily: d
    } = l, {
      canvasWidth: h,
      fontSize: f
    } = n;
    (s !== f || o !== d) && (i.font = `${f * a(this, hr)}px ${d}`, t.prevFontSize = f, t.prevFontFamily = d);
    const {
      width: g
    } = i.measureText(e.textContent);
    g > 0 && (c = `scaleX(${h * a(this, hr) / g})`);
  }
  n.angle !== 0 && (c = `rotate(${n.angle}deg) ${c}`), c.length > 0 && (l.transform = c);
}, ta = new WeakSet(), kd = function(t = null) {
  let e = a(this, us).get(t || (t = ""));
  if (!e) {
    const n = document.createElement("canvas");
    n.className = "hiddenCanvasElement", n.lang = t, document.body.append(n), e = n.getContext("2d", {
      alpha: !1
    }), a(this, us).set(t, e);
  }
  return e;
}, qu = new WeakSet(), dw = function(t, e) {
  const n = a(this, ds).get(t);
  if (n)
    return n;
  const i = A(this, ta, kd).call(this, e), s = i.font;
  i.canvas.width = i.canvas.height = Be, i.font = `${Be}px ${t}`;
  const o = i.measureText("");
  let l = o.fontBoundingBoxAscent, c = Math.abs(o.fontBoundingBoxDescent);
  if (l) {
    const f = l / (l + c);
    return a(this, ds).set(t, f), i.canvas.width = i.canvas.height = 0, i.font = s, f;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, Be, Be), i.strokeText("g", 0, 0);
  let d = i.getImageData(0, 0, Be, Be).data;
  c = 0;
  for (let f = d.length - 1 - 3; f >= 0; f -= 4)
    if (d[f] > 0) {
      c = Math.ceil(f / 4 / Be);
      break;
    }
  i.clearRect(0, 0, Be, Be), i.strokeText("A", 0, Be), d = i.getImageData(0, 0, Be, Be).data, l = 0;
  for (let f = 0, g = d.length; f < g; f += 4)
    if (d[f] > 0) {
      l = Be - Math.floor(f / 4 / Be);
      break;
    }
  i.canvas.width = i.canvas.height = 0, i.font = s;
  const h = l ? l / (l + c) : PL;
  return a(this, ds).set(t, h), h;
}, m(je, ta), m(je, qu), m(je, ds, /* @__PURE__ */ new Map()), m(je, us, /* @__PURE__ */ new Map()), m(je, Qo, /* @__PURE__ */ new Set()), je);
function RL() {
  Cb("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: r,
    container: t,
    viewport: e,
    ...n
  } = arguments[0], i = Object.keys(n);
  i.length > 0 && vt("Ignoring `renderTextLayer` parameters: " + i.join(", "));
  const s = new ou({
    textContentSource: r,
    container: t,
    viewport: e
  }), {
    textDivs: o,
    textContentItemsStr: l
  } = s;
  return {
    promise: s.render(),
    textDivs: o,
    textContentItemsStr: l
  };
}
function LL() {
  Cb("`updateTextLayer`, please use `TextLayer` instead.");
}
class Tl {
  static textContent(t) {
    const e = [], n = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(s) {
      var c;
      if (!s)
        return;
      let o = null;
      const l = s.name;
      if (l === "#text")
        o = s.value;
      else if (Tl.shouldBuildText(l))
        (c = s == null ? void 0 : s.attributes) != null && c.textContent ? o = s.attributes.textContent : s.value && (o = s.value);
      else
        return;
      if (o !== null && e.push({
        str: o
      }), !!s.children)
        for (const d of s.children)
          i(d);
    }
    return i(t), n;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const kL = 65536, IL = 100, FL = 5e3, ML = Pe ? GR : IR, DL = Pe ? WR : Sb, OL = Pe ? VR : kR, NL = Pe ? qR : xb;
function BL(r) {
  if (typeof r == "string" || r instanceof URL ? r = {
    url: r
  } : (r instanceof ArrayBuffer || ArrayBuffer.isView(r)) && (r = {
    data: r
  }), typeof r != "object")
    throw new Error("Invalid parameter in getDocument, need parameter object.");
  if (!r.url && !r.data && !r.range)
    throw new Error("Invalid parameter object: need either .data, .range or .url");
  const t = new im(), {
    docId: e
  } = t, n = r.url ? $L(r.url) : null, i = r.data ? UL(r.data) : null, s = r.httpHeaders || null, o = r.withCredentials === !0, l = r.password ?? null, c = r.range instanceof uw ? r.range : null, d = Number.isInteger(r.rangeChunkSize) && r.rangeChunkSize > 0 ? r.rangeChunkSize : kL;
  let h = r.worker instanceof xo ? r.worker : null;
  const f = r.verbosity, g = typeof r.docBaseUrl == "string" && !p0(r.docBaseUrl) ? r.docBaseUrl : null, v = typeof r.cMapUrl == "string" ? r.cMapUrl : null, y = r.cMapPacked !== !1, E = r.CMapReaderFactory || DL, x = typeof r.standardFontDataUrl == "string" ? r.standardFontDataUrl : null, _ = r.StandardFontDataFactory || NL, P = r.stopAtErrors !== !0, L = Number.isInteger(r.maxImageSize) && r.maxImageSize > -1 ? r.maxImageSize : -1, k = r.isEvalSupported !== !1, F = typeof r.isOffscreenCanvasSupported == "boolean" ? r.isOffscreenCanvasSupported : !Pe, I = Number.isInteger(r.canvasMaxAreaInBytes) ? r.canvasMaxAreaInBytes : -1, M = typeof r.disableFontFace == "boolean" ? r.disableFontFace : Pe, C = r.fontExtraProperties === !0, T = r.enableXfa === !0, O = r.ownerDocument || globalThis.document, D = r.disableRange === !0, H = r.disableStream === !0, j = r.disableAutoFetch === !0, V = r.pdfBug === !0, Y = c ? c.length : r.length ?? NaN, Z = typeof r.useSystemFonts == "boolean" ? r.useSystemFonts : !Pe && !M, B = typeof r.useWorkerFetch == "boolean" ? r.useWorkerFetch : E === Sb && _ === xb && v && x && cl(v, document.baseURI) && cl(x, document.baseURI), G = r.canvasFactory || new ML({
    ownerDocument: O
  }), W = r.filterFactory || new OL({
    docId: e,
    ownerDocument: O
  }), bt = null;
  wR(f);
  const ut = {
    canvasFactory: G,
    filterFactory: W
  };
  if (B || (ut.cMapReaderFactory = new E({
    baseUrl: v,
    isCompressed: y
  }), ut.standardFontDataFactory = new _({
    baseUrl: x
  })), !h) {
    const tt = {
      verbosity: f,
      port: zi.workerPort
    };
    h = tt.port ? xo.fromPort(tt) : new xo(tt), t._worker = h;
  }
  const z = {
    docId: e,
    apiVersion: "4.3.136",
    data: i,
    password: l,
    disableAutoFetch: j,
    rangeChunkSize: d,
    length: Y,
    docBaseUrl: g,
    enableXfa: T,
    evaluatorOptions: {
      maxImageSize: L,
      disableFontFace: M,
      ignoreErrors: P,
      isEvalSupported: k,
      isOffscreenCanvasSupported: F,
      canvasMaxAreaInBytes: I,
      fontExtraProperties: C,
      useSystemFonts: Z,
      cMapUrl: B ? v : null,
      standardFontDataUrl: B ? x : null
    }
  }, nt = {
    disableFontFace: M,
    fontExtraProperties: C,
    ownerDocument: O,
    pdfBug: V,
    styleElement: bt,
    loadingParams: {
      disableAutoFetch: j,
      enableXfa: T
    }
  };
  return h.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (h.destroyed)
      throw new Error("Worker was destroyed");
    const tt = h.messageHandler.sendWithPromise("GetDocRequest", z, i ? [i.buffer] : null);
    let et;
    return c ? et = new hL(c, {
      disableRange: D,
      disableStream: H
    }) : i || (et = ((K) => Pe ? function() {
      return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
    }() && cl(K.url) ? new Iv(K) : new EL(K) : cl(K.url) ? new Iv(K) : new yL(K))({
      url: n,
      length: Y,
      httpHeaders: s,
      withCredentials: o,
      rangeChunkSize: d,
      disableRange: D,
      disableStream: H
    })), tt.then((lt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (h.destroyed)
        throw new Error("Worker was destroyed");
      const K = new ul(e, lt, h.port), gt = new VL(K, t, et, nt, ut);
      t._transport = gt, K.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function $L(r) {
  if (r instanceof URL)
    return r.href;
  try {
    return new URL(r, window.location).href;
  } catch {
    if (Pe && typeof r == "string")
      return r;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function UL(r) {
  if (Pe && typeof Ag < "u" && r instanceof Ag)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (r instanceof Uint8Array && r.byteLength === r.buffer.byteLength)
    return r;
  if (typeof r == "string")
    return dp(r);
  if (r instanceof ArrayBuffer || ArrayBuffer.isView(r) || typeof r == "object" && !isNaN(r == null ? void 0 : r.length))
    return new Uint8Array(r);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Fv(r) {
  return typeof r == "object" && Number.isInteger(r == null ? void 0 : r.num) && r.num >= 0 && Number.isInteger(r == null ? void 0 : r.gen) && r.gen >= 0;
}
var Xu;
const Yu = class Yu {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${qe(Yu, Xu)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, n;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (i) {
      throw (n = this._worker) != null && n.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
Xu = new WeakMap(), m(Yu, Xu, 0);
let im = Yu, uw = class {
  constructor(t, e, n = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = n, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const n of this._rangeListeners)
      n(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const n of this._progressListeners)
        n(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    Dt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
class HL {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Tt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var dr, Si, ur, yo, ea, Id;
class jL {
  constructor(t, e, n, i = !1) {
    m(this, ur);
    m(this, ea);
    m(this, dr, null);
    m(this, Si, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = n, this._stats = i ? new bv() : null, this._pdfBug = i, this.commonObjs = n.commonObjs, this.objs = new fw(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: n = 0,
    offsetY: i = 0,
    dontFlip: s = !1
  } = {}) {
    return new Jh({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: s
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Tt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: n = "display",
    annotationMode: i = Ji.ENABLE,
    transform: s = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: h = null
  }) {
    var L, k;
    (L = this._stats) == null || L.time("Overall");
    const f = this._transport.getRenderingIntent(n, i, h), {
      renderingIntent: g,
      cacheKey: v
    } = f;
    w(this, Si, !1), A(this, ea, Id).call(this), l || (l = this._transport.getOptionalContentConfig(g));
    let y = this._intentStates.get(v);
    y || (y = /* @__PURE__ */ Object.create(null), this._intentStates.set(v, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), y.streamReaderCancelTimeout = null);
    const E = !!(g & un.PRINT);
    y.displayReadyCapability || (y.displayReadyCapability = Promise.withResolvers(), y.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (k = this._stats) == null || k.time("Page Request"), this._pumpOperatorList(f));
    const x = (F) => {
      var I;
      y.renderTasks.delete(_), (this._maybeCleanupAfterRender || E) && w(this, Si, !0), A(this, ur, yo).call(this, !E), F ? (_.capability.reject(F), this._abortOperatorList({
        intentState: y,
        reason: F instanceof Error ? F : new Error(F)
      })) : _.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (I = globalThis.Stats) != null && I.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, _ = new sm({
      callback: x,
      params: {
        canvasContext: t,
        viewport: e,
        transform: s,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !E,
      pdfBug: this._pdfBug,
      pageColors: d
    });
    (y.renderTasks || (y.renderTasks = /* @__PURE__ */ new Set())).add(_);
    const P = _.task;
    return Promise.all([y.displayReadyCapability.promise, l]).then(([F, I]) => {
      var M;
      if (this.destroyed) {
        x();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(I.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      _.initializeGraphics({
        transparency: F,
        optionalContentConfig: I
      }), _.operatorListChanged();
    }).catch(x), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ji.ENABLE,
    printAnnotationStorage: n = null
  } = {}) {
    var c;
    function i() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const s = this._transport.getRenderingIntent(t, e, n, !0);
    let o = this._intentStates.get(s.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(s.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = i, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(s)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((n) => Tl.textContent(n));
    const e = this.streamTextContent(t);
    return new Promise(function(n, i) {
      function s() {
        o.read().then(function({
          value: c,
          done: d
        }) {
          if (d) {
            n(l);
            return;
          }
          l.lang ?? (l.lang = c.lang), Object.assign(l.styles, c.styles), l.items.push(...c.items), s();
        }, i);
      }
      const o = e.getReader(), l = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      s();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const n of e.renderTasks)
          t.push(n.completed), n.cancel();
    return this.objs.clear(), w(this, Si, !1), A(this, ea, Id).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    w(this, Si, !0);
    const e = A(this, ur, yo).call(this, !1);
    return t && e && this._stats && (this._stats = new bv()), e;
  }
  _startRenderPage(t, e) {
    var i, s;
    const n = this._intentStates.get(e);
    n && ((i = this._stats) == null || i.timeEnd("Page Request"), (s = n.displayReadyCapability) == null || s.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let n = 0, i = t.length; n < i; n++)
      e.operatorList.fnArray.push(t.fnArray[n]), e.operatorList.argsArray.push(t.argsArray[n]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const n of e.renderTasks)
      n.operatorListChanged();
    t.lastChunk && A(this, ur, yo).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: n
  }) {
    const {
      map: i,
      transfer: s
    } = n, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: i
    }, s).getReader(), c = this._intentStates.get(e);
    c.streamReader = l;
    const d = () => {
      l.read().then(({
        value: h,
        done: f
      }) => {
        if (f) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(h, c), d());
      }, (h) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const f of c.renderTasks)
              f.operatorListChanged();
            A(this, ur, yo).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(h);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(h);
          else
            throw h;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: n = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !n) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof f0) {
          let i = IL;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new co(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, s] of this._intentStates)
          if (s === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
dr = new WeakMap(), Si = new WeakMap(), ur = new WeakSet(), yo = function(t = !1) {
  if (A(this, ea, Id).call(this), !a(this, Si) || this.destroyed)
    return !1;
  if (t)
    return w(this, dr, setTimeout(() => {
      w(this, dr, null), A(this, ur, yo).call(this, !1);
    }, FL)), !1;
  for (const {
    renderTasks: e,
    operatorList: n
  } of this._intentStates.values())
    if (e.size > 0 || !n.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), w(this, Si, !1), !0;
}, ea = new WeakSet(), Id = function() {
  a(this, dr) && (clearTimeout(a(this, dr)), w(this, dr, null));
};
var fs, Ku;
class zL {
  constructor() {
    m(this, fs, /* @__PURE__ */ new Set());
    m(this, Ku, Promise.resolve());
  }
  postMessage(t, e) {
    const n = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    a(this, Ku).then(() => {
      for (const i of a(this, fs))
        i.call(this, n);
    });
  }
  addEventListener(t, e) {
    a(this, fs).add(e);
  }
  removeEventListener(t, e) {
    a(this, fs).delete(e);
  }
  terminate() {
    a(this, fs).clear();
  }
}
fs = new WeakMap(), Ku = new WeakMap();
const ui = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
Pe && (ui.isWorkerDisabled = !0, zi.workerSrc || (zi.workerSrc = "./pdf.worker.mjs")), ui.isSameOrigin = function(r, t) {
  let e;
  try {
    if (e = new URL(r), !e.origin || e.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const n = new URL(t, e);
  return e.origin === n.origin;
}, ui.createCDNWrapper = function(r) {
  const t = `await import("${r}");`;
  return URL.createObjectURL(new Blob([t], {
    type: "text/javascript"
  }));
};
var ps, na, Fd;
const Ye = class Ye {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: n = AR()
  } = {}) {
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = n, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = a(Ye, ps)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (a(Ye, ps) || w(Ye, ps, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return Pe ? Promise.all([ni.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new ul("main", "worker", t), this._messageHandler.on("ready", function() {
    }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  _initialize() {
    if (!ui.isWorkerDisabled && !a(Ye, na, Fd)) {
      let {
        workerSrc: t
      } = Ye;
      try {
        ui.isSameOrigin(window.location.href, t) || (t = ui.createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), n = new ul("main", "worker", e), i = () => {
          e.removeEventListener("error", s), n.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, s = () => {
          this._webWorker || i();
        };
        e.addEventListener("error", s), n.on("test", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            i();
            return;
          }
          l ? (this._messageHandler = n, this._port = e, this._webWorker = e, this._readyCapability.resolve(), n.send("configure", {
            verbosity: this.verbosity
          })) : (this._setupFakeWorker(), n.destroy(), e.terminate());
        }), n.on("ready", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            i();
            return;
          }
          try {
            o();
          } catch {
            this._setupFakeWorker();
          }
        });
        const o = () => {
          const l = new Uint8Array();
          n.send("test", l, [l.buffer]);
        };
        o();
        return;
      } catch {
        cp("The worker has been disabled.");
      }
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    ui.isWorkerDisabled || (vt("Setting up fake worker."), ui.isWorkerDisabled = !0), Ye._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new zL();
      this._port = e;
      const n = `fake${ui.fakeWorkerId++}`, i = new ul(n + "_worker", n, e);
      t.setup(i, e);
      const s = new ul(n, n + "_worker", e);
      this._messageHandler = s, this._readyCapability.resolve(), s.send("configure", {
        verbosity: this.verbosity
      });
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = a(Ye, ps)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var n;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (n = a(this, ps)) == null ? void 0 : n.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ye(t);
  }
  static get workerSrc() {
    if (zi.workerSrc)
      return zi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Tt(this, "_setupFakeWorkerGlobal", (async () => a(this, na, Fd) ? a(this, na, Fd) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
ps = new WeakMap(), na = new WeakSet(), Fd = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(Ye, na), m(Ye, ps, void 0);
let xo = Ye;
var xi, zn, ia, ra, Vn, gs, fl;
class VL {
  constructor(t, e, n, i, s) {
    m(this, gs);
    m(this, xi, /* @__PURE__ */ new Map());
    m(this, zn, /* @__PURE__ */ new Map());
    m(this, ia, /* @__PURE__ */ new Map());
    m(this, ra, /* @__PURE__ */ new Map());
    m(this, Vn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new fw(), this.fontLoader = new jR({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = s.canvasFactory, this.filterFactory = s.filterFactory, this.cMapReaderFactory = s.cMapReaderFactory, this.standardFontDataFactory = s.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = n, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return Tt(this, "annotationStorage", new v0());
  }
  getRenderingIntent(t, e = Ji.ENABLE, n = null, i = !1) {
    let s = un.DISPLAY, o = Yg;
    switch (t) {
      case "any":
        s = un.ANY;
        break;
      case "display":
        break;
      case "print":
        s = un.PRINT;
        break;
      default:
        vt(`getRenderingIntent - invalid intent: ${t}`);
    }
    switch (e) {
      case Ji.DISABLE:
        s += un.ANNOTATIONS_DISABLE;
        break;
      case Ji.ENABLE:
        break;
      case Ji.ENABLE_FORMS:
        s += un.ANNOTATIONS_FORMS;
        break;
      case Ji.ENABLE_STORAGE:
        s += un.ANNOTATIONS_STORAGE, o = (s & un.PRINT && n instanceof Jb ? n : this.annotationStorage).serializable;
        break;
      default:
        vt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    return i && (s += un.OPLIST), {
      renderingIntent: s,
      cacheKey: `${s}_${o.hash}`,
      annotationStorageSerializable: o
    };
  }
  destroy() {
    var n;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (n = a(this, Vn)) == null || n.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of a(this, zn).values())
      t.push(i._destroy());
    a(this, zn).clear(), a(this, ia).clear(), a(this, ra).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), a(this, xi).clear(), this.filterFactory.destroy(), ou.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new co("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (n, i) => {
      ae(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (s) => {
        this._lastProgress = {
          loaded: s.loaded,
          total: s.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: s,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          ae(s instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(s), 1, [s]);
        }).catch((s) => {
          i.error(s);
        });
      }, i.onCancel = (s) => {
        this._fullReader.cancel(s), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("ReaderHeadersReady", (n) => {
      const i = Promise.withResolvers(), s = this._fullReader;
      return s.headersReady.then(() => {
        var o;
        (!s.isStreamingSupported || !s.isRangeSupported) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), s.onProgress = (l) => {
          var c;
          (c = e.onProgress) == null || c.call(e, {
            loaded: l.loaded,
            total: l.total
          });
        }), i.resolve({
          isStreamingSupported: s.isStreamingSupported,
          isRangeSupported: s.isRangeSupported,
          contentLength: s.contentLength
        });
      }, i.reject), i.promise;
    }), t.on("GetRangeReader", (n, i) => {
      ae(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const s = this._networkStream.getRangeReader(n.begin, n.end);
      if (!s) {
        i.close();
        return;
      }
      i.onPull = () => {
        s.read().then(function({
          value: o,
          done: l
        }) {
          if (l) {
            i.close();
            return;
          }
          ae(o instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(o), 1, [o]);
        }).catch((o) => {
          i.error(o);
        });
      }, i.onCancel = (o) => {
        s.cancel(o), i.ready.catch((l) => {
          if (!this.destroyed)
            throw l;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: n
    }) => {
      this._numPages = n.numPages, this._htmlForXfa = n.htmlForXfa, delete n.htmlForXfa, e._capability.resolve(new HL(n, this));
    }), t.on("DocException", function(n) {
      let i;
      switch (n.name) {
        case "PasswordException":
          i = new Sg(n.message, n.code);
          break;
        case "InvalidPDFException":
          i = new wb(n.message);
          break;
        case "MissingPDFException":
          i = new lo(n.message);
          break;
        case "UnexpectedResponseException":
          i = new hp(n.message, n.status);
          break;
        case "UnknownErrorException":
          i = new xg(n.message, n.details);
          break;
        default:
          Dt("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (n) => {
      if (w(this, Vn, Promise.withResolvers()), e.onPassword) {
        const i = (s) => {
          s instanceof Error ? a(this, Vn).reject(s) : a(this, Vn).resolve({
            password: s
          });
        };
        try {
          e.onPassword(i, n.code);
        } catch (s) {
          a(this, Vn).reject(s);
        }
      } else
        a(this, Vn).reject(new Sg(n.message, n.code));
      return a(this, Vn).promise;
    }), t.on("DataLoaded", (n) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: n.length,
        total: n.length
      }), this.downloadInfoCapability.resolve(n);
    }), t.on("StartRenderPage", (n) => {
      if (this.destroyed)
        return;
      a(this, zn).get(n.pageIndex)._startRenderPage(n.transparency, n.cacheKey);
    }), t.on("commonobj", ([n, i, s]) => {
      var o;
      if (this.destroyed || this.commonObjs.has(n))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: l,
            fontExtraProperties: c,
            pdfBug: d
          } = this._params;
          if ("error" in s) {
            const v = s.error;
            vt(`Error during font loading: ${v}`), this.commonObjs.resolve(n, v);
            break;
          }
          const h = d && ((o = globalThis.FontInspector) != null && o.enabled) ? (v, y) => globalThis.FontInspector.fontAdded(v, y) : null, f = new zR(s, {
            disableFontFace: l,
            inspectFont: h
          });
          this.fontLoader.bind(f).catch(() => t.sendWithPromise("FontFallback", {
            id: n
          })).finally(() => {
            !c && f.data && (f.data = null), this.commonObjs.resolve(n, f);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: g
          } = s;
          ae(g, "The imageRef must be defined.");
          for (const v of a(this, zn).values())
            for (const [, y] of v.objs)
              if ((y == null ? void 0 : y.ref) === g)
                return y.dataLen ? (this.commonObjs.resolve(n, structuredClone(y)), y.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(n, s);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([n, i, s, o]) => {
      var c;
      if (this.destroyed)
        return;
      const l = a(this, zn).get(i);
      if (!l.objs.has(n)) {
        if (l._intentStates.size === 0) {
          (c = o == null ? void 0 : o.bitmap) == null || c.close();
          return;
        }
        switch (s) {
          case "Image":
            l.objs.resolve(n, o), (o == null ? void 0 : o.dataLen) > mR && (l._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            l.objs.resolve(n, o);
            break;
          default:
            throw new Error(`Got unknown object type ${s}`);
        }
      }
    }), t.on("DocProgress", (n) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: n.loaded,
        total: n.total
      });
    }), t.on("FetchBuiltInCMap", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(n) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(n) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var n;
    this.annotationStorage.size <= 0 && vt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, n = a(this, ia).get(e);
    if (n)
      return n;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((s) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      s.refStr && a(this, ra).set(s.refStr, t);
      const o = new jL(e, s, this, this._params.pdfBug);
      return a(this, zn).set(e, o), o;
    });
    return a(this, ia).set(e, i), i;
  }
  getPageIndex(t) {
    return Fv(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return A(this, gs, fl).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return A(this, gs, fl).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return A(this, gs, fl).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return A(this, gs, fl).call(this, "GetOptionalContentConfig").then((e) => new cL(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = a(this, xi).get(t);
    if (e)
      return e;
    const n = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var s, o;
      return {
        info: i[0],
        metadata: i[1] ? new aL(i[1]) : null,
        contentDispositionFilename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null,
        contentLength: ((o = this._fullReader) == null ? void 0 : o.contentLength) ?? null
      };
    });
    return a(this, xi).set(t, n), n;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of a(this, zn).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), a(this, xi).clear(), this.filterFactory.destroy(!0), ou.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Fv(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return a(this, ra).get(e) ?? null;
  }
}
xi = new WeakMap(), zn = new WeakMap(), ia = new WeakMap(), ra = new WeakMap(), Vn = new WeakMap(), gs = new WeakSet(), fl = function(t, e = null) {
  const n = a(this, xi).get(t);
  if (n)
    return n;
  const i = this.messageHandler.sendWithPromise(t, e);
  return a(this, xi).set(t, i), i;
};
const pd = Symbol("INITIAL_DATA");
var An, Bc, rm;
class fw {
  constructor() {
    m(this, Bc);
    m(this, An, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = A(this, Bc, rm).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const n = a(this, An)[t];
    if (!n || n.data === pd)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return n.data;
  }
  has(t) {
    const e = a(this, An)[t];
    return !!e && e.data !== pd;
  }
  resolve(t, e = null) {
    const n = A(this, Bc, rm).call(this, t);
    n.data = e, n.resolve();
  }
  clear() {
    var t;
    for (const e in a(this, An)) {
      const {
        data: n
      } = a(this, An)[e];
      (t = n == null ? void 0 : n.bitmap) == null || t.close();
    }
    w(this, An, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in a(this, An)) {
      const {
        data: e
      } = a(this, An)[t];
      e !== pd && (yield [t, e]);
    }
  }
}
An = new WeakMap(), Bc = new WeakSet(), rm = function(t) {
  var e;
  return (e = a(this, An))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: pd
  });
};
var fr;
class GL {
  constructor(t) {
    m(this, fr, null);
    w(this, fr, t), this.onContinue = null;
  }
  get promise() {
    return a(this, fr).capability.promise;
  }
  cancel(t = 0) {
    a(this, fr).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = a(this, fr).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = a(this, fr);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
fr = new WeakMap();
var ms;
const Br = class Br {
  constructor({
    callback: t,
    params: e,
    objs: n,
    commonObjs: i,
    annotationCanvasMap: s,
    operatorList: o,
    pageIndex: l,
    canvasFactory: c,
    filterFactory: d,
    useRequestAnimationFrame: h = !1,
    pdfBug: f = !1,
    pageColors: g = null
  }) {
    this.callback = t, this.params = e, this.objs = n, this.commonObjs = i, this.annotationCanvasMap = s, this.operatorListIdx = null, this.operatorList = o, this._pageIndex = l, this.canvasFactory = c, this.filterFactory = d, this._pdfBug = f, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = h === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new GL(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (a(Br, ms).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      a(Br, ms).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: n,
      viewport: i,
      transform: s,
      background: o
    } = this.params;
    this.gfx = new So(n, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: o
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var n;
    this.running = !1, this.cancelled = !0, (n = this.gfx) == null || n.endDrawing(), a(Br, ms).delete(this._canvas), this.callback(t || new f0(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
      this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), a(Br, ms).delete(this._canvas), this.callback())));
  }
};
ms = new WeakMap(), m(Br, ms, /* @__PURE__ */ new WeakSet());
let sm = Br;
const WL = "4.3.136", qL = "0cec64437";
function Mv(r) {
  return Math.floor(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
}
function il(r) {
  return Math.max(0, Math.min(255, 255 * r));
}
class Dv {
  static CMYK_G([t, e, n, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * n + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = il(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Mv(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, n]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * n];
  }
  static RGB_rgb(t) {
    return t.map(il);
  }
  static RGB_HTML(t) {
    return `#${t.map(Mv).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, n, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, n + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, n, i]) {
    return [il(1 - Math.min(1, t + i)), il(1 - Math.min(1, n + i)), il(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, n]) {
    const i = 1 - t, s = 1 - e, o = 1 - n, l = Math.min(i, s, o);
    return ["CMYK", i, s, o, l];
  }
}
class pw {
  static setupStorage(t, e, n, i, s) {
    const o = i.getValue(e, {
      value: null
    });
    switch (n.name) {
      case "textarea":
        if (o.value !== null && (t.textContent = o.value), s === "print")
          break;
        t.addEventListener("input", (l) => {
          i.setValue(e, {
            value: l.target.value
          });
        });
        break;
      case "input":
        if (n.attributes.type === "radio" || n.attributes.type === "checkbox") {
          if (o.value === n.attributes.xfaOn ? t.setAttribute("checked", !0) : o.value === n.attributes.xfaOff && t.removeAttribute("checked"), s === "print")
            break;
          t.addEventListener("change", (l) => {
            i.setValue(e, {
              value: l.target.checked ? l.target.getAttribute("xfaOn") : l.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (o.value !== null && t.setAttribute("value", o.value), s === "print")
            break;
          t.addEventListener("input", (l) => {
            i.setValue(e, {
              value: l.target.value
            });
          });
        }
        break;
      case "select":
        if (o.value !== null) {
          t.setAttribute("value", o.value);
          for (const l of n.children)
            l.attributes.value === o.value ? l.attributes.selected = !0 : l.attributes.hasOwnProperty("selected") && delete l.attributes.selected;
        }
        t.addEventListener("input", (l) => {
          const c = l.target.options, d = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          i.setValue(e, {
            value: d
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: n = null,
    intent: i,
    linkService: s
  }) {
    const {
      attributes: o
    } = e, l = t instanceof HTMLAnchorElement;
    o.type === "radio" && (o.name = `${o.name}-${i}`);
    for (const [c, d] of Object.entries(o))
      if (d != null)
        switch (c) {
          case "class":
            d.length && t.setAttribute(c, d.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", d);
            break;
          case "style":
            Object.assign(t.style, d);
            break;
          case "textContent":
            t.textContent = d;
            break;
          default:
            (!l || c !== "href" && c !== "newWindow") && t.setAttribute(c, d);
        }
    l && s.addLinkAttributes(t, o.href, o.newWindow), n && o.dataId && this.setupStorage(t, o.dataId, e, n);
  }
  static render(t) {
    var f, g;
    const e = t.annotationStorage, n = t.linkService, i = t.xfaHtml, s = t.intent || "display", o = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: o,
      element: i,
      intent: s,
      linkService: n
    });
    const l = s !== "richText", c = t.div;
    if (c.append(o), t.viewport) {
      const v = `matrix(${t.viewport.transform.join(",")})`;
      c.style.transform = v;
    }
    l && c.setAttribute("class", "xfaLayer xfaFont");
    const d = [];
    if (i.children.length === 0) {
      if (i.value) {
        const v = document.createTextNode(i.value);
        o.append(v), l && Tl.shouldBuildText(i.name) && d.push(v);
      }
      return {
        textDivs: d
      };
    }
    const h = [[i, -1, o]];
    for (; h.length > 0; ) {
      const [v, y, E] = h.at(-1);
      if (y + 1 === v.children.length) {
        h.pop();
        continue;
      }
      const x = v.children[++h.at(-1)[1]];
      if (x === null)
        continue;
      const {
        name: _
      } = x;
      if (_ === "#text") {
        const L = document.createTextNode(x.value);
        d.push(L), E.append(L);
        continue;
      }
      const P = (f = x == null ? void 0 : x.attributes) != null && f.xmlns ? document.createElementNS(x.attributes.xmlns, _) : document.createElement(_);
      if (E.append(P), x.attributes && this.setAttributes({
        html: P,
        element: x,
        storage: e,
        intent: s,
        linkService: n
      }), ((g = x.children) == null ? void 0 : g.length) > 0)
        h.push([x, -1, P]);
      else if (x.value) {
        const L = document.createTextNode(x.value);
        l && Tl.shouldBuildText(_) && d.push(L), P.append(L);
      }
    }
    for (const v of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      v.setAttribute("readOnly", !0);
    return {
      textDivs: d
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const ed = 1e3, XL = 9, no = /* @__PURE__ */ new WeakSet();
function Vi(r) {
  return {
    width: r[2] - r[0],
    height: r[3] - r[1]
  };
}
class YL {
  static create(t) {
    switch (t.data.annotationType) {
      case ne.LINK:
        return new gw(t);
      case ne.TEXT:
        return new KL(t);
      case ne.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new ZL(t);
          case "Btn":
            return t.data.radioButton ? new yw(t) : t.data.checkBox ? new QL(t) : new tk(t);
          case "Ch":
            return new ek(t);
          case "Sig":
            return new JL(t);
        }
        return new ho(t);
      case ne.POPUP:
        return new am(t);
      case ne.FREETEXT:
        return new _w(t);
      case ne.LINE:
        return new ik(t);
      case ne.SQUARE:
        return new rk(t);
      case ne.CIRCLE:
        return new sk(t);
      case ne.POLYLINE:
        return new Sw(t);
      case ne.CARET:
        return new ak(t);
      case ne.INK:
        return new xw(t);
      case ne.POLYGON:
        return new ok(t);
      case ne.HIGHLIGHT:
        return new lk(t);
      case ne.UNDERLINE:
        return new ck(t);
      case ne.SQUIGGLY:
        return new hk(t);
      case ne.STRIKEOUT:
        return new dk(t);
      case ne.STAMP:
        return new Cw(t);
      case ne.FILEATTACHMENT:
        return new uk(t);
      default:
        return new Jt(t);
    }
  }
}
var vs, sa, oa, $c, om;
const P0 = class P0 {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: n = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, $c);
    m(this, vs, null);
    m(this, sa, !1);
    m(this, oa, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(n)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: n
  }) {
    return !!(t != null && t.str || e != null && e.str || n != null && n.str);
  }
  get hasPopupData() {
    return P0._hasPopupData(this.data);
  }
  updateEdited(t) {
    var n;
    if (!this.container)
      return;
    a(this, vs) || w(this, vs, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && A(this, $c, om).call(this, e), (n = a(this, oa)) == null || n.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    a(this, vs) && (A(this, $c, om).call(this, a(this, vs).rect), (t = a(this, oa)) == null || t.popup.resetEdited(), w(this, vs, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: n,
        viewport: i
      }
    } = this, s = document.createElement("section");
    s.setAttribute("data-annotation-id", e.id), this instanceof ho || (s.tabIndex = ed);
    const {
      style: o
    } = s;
    if (o.zIndex = this.parent.zIndex++, e.popupRef && s.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (s.title = e.alternativeText), e.noRotate && s.classList.add("norotate"), !e.rect || this instanceof am) {
      const {
        rotation: E
      } = e;
      return !e.hasOwnCanvas && E !== 0 && this.setRotation(E, s), s;
    }
    const {
      width: l,
      height: c
    } = Vi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      o.borderWidth = `${e.borderStyle.width}px`;
      const E = e.borderStyle.horizontalCornerRadius, x = e.borderStyle.verticalCornerRadius;
      if (E > 0 || x > 0) {
        const P = `calc(${E}px * var(--scale-factor)) / calc(${x}px * var(--scale-factor))`;
        o.borderRadius = P;
      } else if (this instanceof yw) {
        const P = `calc(${l}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        o.borderRadius = P;
      }
      switch (e.borderStyle.style) {
        case el.SOLID:
          o.borderStyle = "solid";
          break;
        case el.DASHED:
          o.borderStyle = "dashed";
          break;
        case el.BEVELED:
          vt("Unimplemented border style: beveled");
          break;
        case el.INSET:
          vt("Unimplemented border style: inset");
          break;
        case el.UNDERLINE:
          o.borderBottomStyle = "solid";
          break;
      }
      const _ = e.borderColor || null;
      _ ? (w(this, sa, !0), o.borderColor = Q.makeHexColor(_[0] | 0, _[1] | 0, _[2] | 0)) : o.borderWidth = 0;
    }
    const d = Q.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]), {
      pageWidth: h,
      pageHeight: f,
      pageX: g,
      pageY: v
    } = i.rawDims;
    o.left = `${100 * (d[0] - g) / h}%`, o.top = `${100 * (d[1] - v) / f}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (o.width = `${100 * l / h}%`, o.height = `${100 * c / f}%`) : this.setRotation(y, s), s;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: n,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: s,
      height: o
    } = Vi(this.data.rect);
    let l, c;
    t % 180 === 0 ? (l = 100 * s / n, c = 100 * o / i) : (l = 100 * o / n, c = 100 * s / i), e.style.width = `${l}%`, e.style.height = `${c}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, n, i) => {
      const s = i.detail[e], o = s[0], l = s.slice(1);
      i.target.style[n] = Dv[`${o}_HTML`](l), this.annotationStorage.setValue(this.data.id, {
        [n]: Dv[`${o}_rgb`](l)
      });
    };
    return Tt(this, "_commonActions", {
      display: (e) => {
        const {
          display: n
        } = e.detail, i = n % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: n === 1 || n === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: n
        } = e.detail;
        this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: n,
          noView: n
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const n = e.detail.rotation;
        this.setRotation(n), this.annotationStorage.setValue(this.data.id, {
          rotation: n
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const n = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const s = t[i] || n[i];
      s == null || s(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const n = this._commonActions;
    for (const [i, s] of Object.entries(e)) {
      const o = n[i];
      if (o) {
        const l = {
          detail: {
            [i]: s
          },
          target: t
        };
        o(l), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, n, i, s] = this.data.rect;
    if (t.length === 1) {
      const [, {
        x: E,
        y: x
      }, {
        x: _,
        y: P
      }] = t[0];
      if (i === E && s === x && e === _ && n === P)
        return;
    }
    const {
      style: o
    } = this.container;
    let l;
    if (a(this, sa)) {
      const {
        borderColor: E,
        borderWidth: x
      } = o;
      o.borderWidth = 0, l = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${E}" stroke-width="${x}">`], this.container.classList.add("hasBorder");
    }
    const c = i - e, d = s - n, {
      svgFactory: h
    } = this, f = h.createElement("svg");
    f.classList.add("quadrilateralsContainer"), f.setAttribute("width", 0), f.setAttribute("height", 0);
    const g = h.createElement("defs");
    f.append(g);
    const v = h.createElement("clipPath"), y = `clippath_${this.data.id}`;
    v.setAttribute("id", y), v.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(v);
    for (const [, {
      x: E,
      y: x
    }, {
      x: _,
      y: P
    }] of t) {
      const L = h.createElement("rect"), k = (_ - e) / c, F = (s - x) / d, I = (E - _) / c, M = (x - P) / d;
      L.setAttribute("x", k), L.setAttribute("y", F), L.setAttribute("width", I), L.setAttribute("height", M), v.append(L), l == null || l.push(`<rect vector-effect="non-scaling-stroke" x="${k}" y="${F}" width="${I}" height="${M}"/>`);
    }
    a(this, sa) && (l.push("</g></svg>')"), o.backgroundImage = l.join("")), this.container.append(f), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup() {
    const {
      container: t,
      data: e
    } = this;
    t.setAttribute("aria-haspopup", "dialog");
    const n = w(this, oa, new am({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(n.render());
  }
  render() {
    Dt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const n = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: s,
          id: o,
          exportValues: l
        } of i) {
          if (s === -1 || o === e)
            continue;
          const c = typeof l == "string" ? l : null, d = document.querySelector(`[data-element-id="${o}"]`);
          if (d && !no.has(d)) {
            vt(`_getElementsByName - element not allowed: ${o}`);
            continue;
          }
          n.push({
            id: o,
            exportValue: c,
            domElement: d
          });
        }
      return n;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: s
      } = i, o = i.getAttribute("data-element-id");
      o !== e && no.has(i) && n.push({
        id: o,
        exportValue: s,
        domElement: i
      });
    }
    return n;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var n;
      (n = this.linkService.eventBus) == null || n.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
vs = new WeakMap(), sa = new WeakMap(), oa = new WeakMap(), $c = new WeakSet(), om = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: n,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: o,
          pageX: l,
          pageY: c
        }
      }
    }
  } = this;
  n == null || n.splice(0, 4, ...t);
  const {
    width: d,
    height: h
  } = Vi(t);
  e.left = `${100 * (t[0] - l) / s}%`, e.top = `${100 * (o - t[3] + c) / o}%`, i === 0 ? (e.width = `${100 * d / s}%`, e.height = `${100 * h / o}%`) : this.setRotation(i);
};
let Jt = P0;
var Ci, Fr, Zu, mw, Ju, vw;
class gw extends Jt {
  constructor(e, n = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(n != null && n.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, Ci);
    m(this, Zu);
    m(this, Ju);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: n
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let s = !1;
    return e.url ? (n.addLinkAttributes(i, e.url, e.newWindow), s = !0) : e.action ? (this._bindNamedAction(i, e.action), s = !0) : e.attachment ? (A(this, Zu, mw).call(this, i, e.attachment, e.attachmentDest), s = !0) : e.setOCGState ? (A(this, Ju, vw).call(this, i, e.setOCGState), s = !0) : e.dest ? (this._bindLink(i, e.dest), s = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), s = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = !0)), this.container.classList.add("linkAnnotation"), s && this.container.append(i), this.container;
  }
  _bindLink(e, n) {
    e.href = this.linkService.getDestinationHash(n), e.onclick = () => (n && this.linkService.goToDestination(n), !1), (n || n === "") && A(this, Ci, Fr).call(this);
  }
  _bindNamedAction(e, n) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(n), !1), A(this, Ci, Fr).call(this);
  }
  _bindJSAction(e, n) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const s of Object.keys(n.actions)) {
      const o = i.get(s);
      o && (e[o] = () => {
        var l;
        return (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: n.id,
            name: s
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), A(this, Ci, Fr).call(this);
  }
  _bindResetFormAction(e, n) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), A(this, Ci, Fr).call(this), !this._fieldObjects) {
      vt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var f;
      i == null || i();
      const {
        fields: s,
        refs: o,
        include: l
      } = n, c = [];
      if (s.length !== 0 || o.length !== 0) {
        const g = new Set(o);
        for (const v of s) {
          const y = this._fieldObjects[v] || [];
          for (const {
            id: E
          } of y)
            g.add(E);
        }
        for (const v of Object.values(this._fieldObjects))
          for (const y of v)
            g.has(y.id) === l && c.push(y);
      } else
        for (const g of Object.values(this._fieldObjects))
          c.push(...g);
      const d = this.annotationStorage, h = [];
      for (const g of c) {
        const {
          id: v
        } = g;
        switch (h.push(v), g.type) {
          case "text": {
            const E = g.defaultValue || "";
            d.setValue(v, {
              value: E
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const E = g.defaultValue === g.exportValues;
            d.setValue(v, {
              value: E
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const E = g.defaultValue || "";
            d.setValue(v, {
              value: E
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${v}"]`);
        if (y) {
          if (!no.has(y)) {
            vt(`_bindResetFormAction - element not allowed: ${v}`);
            continue;
          }
        } else
          continue;
        y.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: h,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Ci = new WeakSet(), Fr = function() {
  this.container.setAttribute("data-internal-link", "");
}, Zu = new WeakSet(), mw = function(e, n, i = null) {
  e.href = this.linkService.getAnchorUrl(""), n.description && (e.title = n.description), e.onclick = () => {
    var s;
    return (s = this.downloadManager) == null || s.openOrDownloadData(n.content, n.filename, i), !1;
  }, A(this, Ci, Fr).call(this);
}, Ju = new WeakSet(), vw = function(e, n) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(n), !1), A(this, Ci, Fr).call(this);
};
class KL extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class ho extends Jt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Ve.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, n, i, s) {
    n.includes("mouse") ? t.addEventListener(n, (o) => {
      var l;
      (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: s(o),
          shift: o.shiftKey,
          modifier: this._getKeyModifier(o)
        }
      });
    }) : t.addEventListener(n, (o) => {
      var l;
      if (n === "blur") {
        if (!e.focused || !o.relatedTarget)
          return;
        e.focused = !1;
      } else if (n === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      s && ((l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: s(o)
        }
      }));
    });
  }
  _setEventListeners(t, e, n, i) {
    var s, o, l;
    for (const [c, d] of n)
      (d === "Action" || (s = this.data.actions) != null && s[d]) && ((d === "Focus" || d === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, c, d, i), d === "Focus" && !((o = this.data.actions) != null && o.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : d === "Blur" && !((l = this.data.actions) != null && l.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : Q.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: n
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || XL, s = t.style;
    let o;
    const l = 2, c = (d) => Math.round(10 * d) / 10;
    if (this.data.multiLine) {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l), h = Math.round(d / (Xp * i)) || 1, f = d / h;
      o = Math.min(i, c(f / Xp));
    } else {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l);
      o = Math.min(i, c(d / Xp));
    }
    s.fontSize = `calc(${o}px * var(--scale-factor))`, s.color = Q.makeHexColor(n[0], n[1], n[2]), this.data.textAlignment !== null && (s.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class ZL extends ho {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, n, i) {
    const s = this.annotationStorage;
    for (const o of this._getElementsByName(t.name, t.id))
      o.domElement && (o.domElement[e] = n), s.setValue(o.id, {
        [i]: n
      });
  }
  render() {
    var i, s;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let n = null;
    if (this.renderForms) {
      const o = t.getValue(e, {
        value: this.data.fieldValue
      });
      let l = o.value || "";
      const c = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && l.length > c && (l = l.slice(0, c));
      let d = o.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      d && this.data.comb && (d = d.replaceAll(/\s+/g, ""));
      const h = {
        userValue: l,
        formattedValue: d,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (n = document.createElement("textarea"), n.textContent = d ?? l, this.data.doNotScroll && (n.style.overflowY = "hidden")) : (n = document.createElement("input"), n.type = "text", n.setAttribute("value", d ?? l), this.data.doNotScroll && (n.style.overflowX = "hidden")), this.data.hasOwnCanvas && (n.hidden = !0), no.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, n.name = this.data.fieldName, n.tabIndex = ed, this._setRequired(n, this.data.required), c && (n.maxLength = c), n.addEventListener("input", (g) => {
        t.setValue(e, {
          value: g.target.value
        }), this.setPropertyOnSiblings(n, "value", g.target.value, "value"), h.formattedValue = null;
      }), n.addEventListener("resetform", (g) => {
        const v = this.data.defaultFieldValue ?? "";
        n.value = h.userValue = v, h.formattedValue = null;
      });
      let f = (g) => {
        const {
          formattedValue: v
        } = h;
        v != null && (g.target.value = v), g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        n.addEventListener("focus", (v) => {
          var E;
          if (h.focused)
            return;
          const {
            target: y
          } = v;
          h.userValue && (y.value = h.userValue), h.lastCommittedValue = y.value, h.commitKey = 1, (E = this.data.actions) != null && E.Focus || (h.focused = !0);
        }), n.addEventListener("updatefromsandbox", (v) => {
          this.showElementAndHideCanvas(v.target);
          const y = {
            value(E) {
              h.userValue = E.detail.value ?? "", t.setValue(e, {
                value: h.userValue.toString()
              }), E.target.value = h.userValue;
            },
            formattedValue(E) {
              const {
                formattedValue: x
              } = E.detail;
              h.formattedValue = x, x != null && E.target !== document.activeElement && (E.target.value = x), t.setValue(e, {
                formattedValue: x
              });
            },
            selRange(E) {
              E.target.setSelectionRange(...E.detail.selRange);
            },
            charLimit: (E) => {
              var L;
              const {
                charLimit: x
              } = E.detail, {
                target: _
              } = E;
              if (x === 0) {
                _.removeAttribute("maxLength");
                return;
              }
              _.setAttribute("maxLength", x);
              let P = h.userValue;
              !P || P.length <= x || (P = P.slice(0, x), _.value = h.userValue = P, t.setValue(e, {
                value: P
              }), (L = this.linkService.eventBus) == null || L.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: P,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: _.selectionStart,
                  selEnd: _.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(y, v);
        }), n.addEventListener("keydown", (v) => {
          var x;
          h.commitKey = 1;
          let y = -1;
          if (v.key === "Escape" ? y = 0 : v.key === "Enter" && !this.data.multiLine ? y = 2 : v.key === "Tab" && (h.commitKey = 3), y === -1)
            return;
          const {
            value: E
          } = v.target;
          h.lastCommittedValue !== E && (h.lastCommittedValue = E, h.userValue = E, (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: E,
              willCommit: !0,
              commitKey: y,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          }));
        });
        const g = f;
        f = null, n.addEventListener("blur", (v) => {
          var E, x;
          if (!h.focused || !v.relatedTarget)
            return;
          (E = this.data.actions) != null && E.Blur || (h.focused = !1);
          const {
            value: y
          } = v.target;
          h.userValue = y, h.lastCommittedValue !== y && ((x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          })), g(v);
        }), (s = this.data.actions) != null && s.Keystroke && n.addEventListener("beforeinput", (v) => {
          var F;
          h.lastCommittedValue = null;
          const {
            data: y,
            target: E
          } = v, {
            value: x,
            selectionStart: _,
            selectionEnd: P
          } = E;
          let L = _, k = P;
          switch (v.inputType) {
            case "deleteWordBackward": {
              const I = x.substring(0, _).match(/\w*[^\w]*$/);
              I && (L -= I[0].length);
              break;
            }
            case "deleteWordForward": {
              const I = x.substring(_).match(/^[^\w]*\w*/);
              I && (k += I[0].length);
              break;
            }
            case "deleteContentBackward":
              _ === P && (L -= 1);
              break;
            case "deleteContentForward":
              _ === P && (k += 1);
              break;
          }
          v.preventDefault(), (F = this.linkService.eventBus) == null || F.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: x,
              change: y || "",
              willCommit: !1,
              selStart: L,
              selEnd: k
            }
          });
        }), this._setEventListeners(n, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (v) => v.target.value);
      }
      if (f && n.addEventListener("blur", f), this.data.comb) {
        const v = (this.data.rect[2] - this.data.rect[0]) / c;
        n.classList.add("comb"), n.style.letterSpacing = `calc(${v}px * var(--scale-factor) - 1ch)`;
      }
    } else
      n = document.createElement("div"), n.textContent = this.data.fieldValue, n.style.verticalAlign = "middle", n.style.display = "table-cell", this.data.hasOwnCanvas && (n.hidden = !0);
    return this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class JL extends ho {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class QL extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(n, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const s = document.createElement("input");
    return no.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "checkbox", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.setAttribute("exportValue", e.exportValue), s.tabIndex = ed, s.addEventListener("change", (o) => {
      const {
        name: l,
        checked: c
      } = o.target;
      for (const d of this._getElementsByName(l, n)) {
        const h = c && d.exportValue === e.exportValue;
        d.domElement && (d.domElement.checked = h), t.setValue(d.id, {
          value: h
        });
      }
      t.setValue(n, {
        value: c
      });
    }), s.addEventListener("resetform", (o) => {
      const l = e.defaultFieldValue || "Off";
      o.target.checked = l === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (s.addEventListener("updatefromsandbox", (o) => {
      const l = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", t.setValue(n, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(l, o);
    }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked)), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class yw extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(n, {
      value: i
    })), i)
      for (const o of this._getElementsByName(e.fieldName, n))
        t.setValue(o.id, {
          value: !1
        });
    const s = document.createElement("input");
    if (no.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "radio", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.tabIndex = ed, s.addEventListener("change", (o) => {
      const {
        name: l,
        checked: c
      } = o.target;
      for (const d of this._getElementsByName(l, n))
        t.setValue(d.id, {
          value: !1
        });
      t.setValue(n, {
        value: c
      });
    }), s.addEventListener("resetform", (o) => {
      const l = e.defaultFieldValue;
      o.target.checked = l != null && l === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const o = e.buttonValue;
      s.addEventListener("updatefromsandbox", (l) => {
        const c = {
          value: (d) => {
            const h = o === d.detail.value;
            for (const f of this._getElementsByName(d.target.name)) {
              const g = h && f.id === n;
              f.domElement && (f.domElement.checked = g), t.setValue(f.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, l);
      }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (l) => l.target.checked);
    }
    return this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class tk extends gw {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (n) => {
      this._dispatchEventFromSandbox({}, n);
    })), t;
  }
}
class ek extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, n = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    no.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = ed;
    let s = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (h) => {
      const f = this.data.defaultFieldValue;
      for (const g of i.options)
        g.selected = g.value === f;
    });
    for (const h of this.data.options) {
      const f = document.createElement("option");
      f.textContent = h.displayValue, f.value = h.exportValue, n.value.includes(h.exportValue) && (f.setAttribute("selected", !0), s = !1), i.append(f);
    }
    let o = null;
    if (s) {
      const h = document.createElement("option");
      h.value = " ", h.setAttribute("hidden", !0), h.setAttribute("selected", !0), i.prepend(h), o = () => {
        h.remove(), i.removeEventListener("input", o), o = null;
      }, i.addEventListener("input", o);
    }
    const l = (h) => {
      const f = h ? "value" : "textContent", {
        options: g,
        multiple: v
      } = i;
      return v ? Array.prototype.filter.call(g, (y) => y.selected).map((y) => y[f]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][f];
    };
    let c = l(!1);
    const d = (h) => {
      const f = h.target.options;
      return Array.prototype.map.call(f, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (h) => {
      const f = {
        value(g) {
          o == null || o();
          const v = g.detail.value, y = new Set(Array.isArray(v) ? v : [v]);
          for (const E of i.options)
            E.selected = y.has(E.value);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        multipleSelection(g) {
          i.multiple = !0;
        },
        remove(g) {
          const v = i.options, y = g.detail.remove;
          v[y].selected = !1, i.remove(y), v.length > 0 && Array.prototype.findIndex.call(v, (x) => x.selected) === -1 && (v[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        clear(g) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), c = l(!1);
        },
        insert(g) {
          const {
            index: v,
            displayValue: y,
            exportValue: E
          } = g.detail.insert, x = i.children[v], _ = document.createElement("option");
          _.textContent = y, _.value = E, x ? x.before(_) : i.append(_), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        items(g) {
          const {
            items: v
          } = g.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const y of v) {
            const {
              displayValue: E,
              exportValue: x
            } = y, _ = document.createElement("option");
            _.textContent = E, _.value = x, i.append(_);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        indices(g) {
          const v = new Set(g.detail.indices);
          for (const y of g.target.options)
            y.selected = v.has(y.index);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, h);
    }), i.addEventListener("input", (h) => {
      var v;
      const f = l(!0), g = l(!1);
      t.setValue(e, {
        value: f
      }), h.preventDefault(), (v = this.linkService.eventBus) == null || v.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: c,
          change: g,
          changeEx: f,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (h) => h.target.value)) : i.addEventListener("input", function(h) {
      t.setValue(e, {
        value: l(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class am extends Jt {
  constructor(t) {
    const {
      data: e,
      elements: n
    } = t;
    super(t, {
      isRenderable: Jt._hasPopupData(e)
    }), this.elements = n, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new nk({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const n of this.elements)
      n.popup = t, e.push(n.data.id), n.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((n) => `${Eb}${n}`).join(",")), this.container;
  }
}
var aa, Qu, tf, la, ys, Yt, Ti, bs, Uc, Hc, ca, Pi, En, Ri, jc, Li, zc, ws, As, ha, Md, Vc, lm, ef, bw, nf, ww, rf, Aw, sf, Ew, da, Dd, ua, Od, Gc, cm;
class nk {
  constructor({
    container: t,
    color: e,
    elements: n,
    titleObj: i,
    modificationDate: s,
    contentsObj: o,
    richText: l,
    parent: c,
    rect: d,
    parentRect: h,
    open: f
  }) {
    m(this, ha);
    m(this, Vc);
    m(this, ef);
    m(this, nf);
    m(this, rf);
    m(this, sf);
    m(this, da);
    m(this, ua);
    m(this, Gc);
    m(this, aa, A(this, rf, Aw).bind(this));
    m(this, Qu, A(this, Gc, cm).bind(this));
    m(this, tf, A(this, ua, Od).bind(this));
    m(this, la, A(this, da, Dd).bind(this));
    m(this, ys, null);
    m(this, Yt, null);
    m(this, Ti, null);
    m(this, bs, null);
    m(this, Uc, null);
    m(this, Hc, null);
    m(this, ca, null);
    m(this, Pi, !1);
    m(this, En, null);
    m(this, Ri, null);
    m(this, jc, null);
    m(this, Li, null);
    m(this, zc, null);
    m(this, ws, null);
    m(this, As, !1);
    var g;
    w(this, Yt, t), w(this, zc, i), w(this, Ti, o), w(this, Li, l), w(this, Hc, c), w(this, ys, e), w(this, jc, d), w(this, ca, h), w(this, Uc, n), w(this, bs, Tb.toDateObject(s)), this.trigger = n.flatMap((v) => v.getElementsToTriggerPopup());
    for (const v of this.trigger)
      v.addEventListener("click", a(this, la)), v.addEventListener("mouseenter", a(this, tf)), v.addEventListener("mouseleave", a(this, Qu)), v.classList.add("popupTriggerArea");
    for (const v of n)
      (g = v.container) == null || g.addEventListener("keydown", a(this, aa));
    a(this, Yt).hidden = !0, f && A(this, da, Dd).call(this);
  }
  render() {
    if (a(this, En))
      return;
    const t = w(this, En, document.createElement("div"));
    if (t.className = "popup", a(this, ys)) {
      const s = t.style.outlineColor = Q.makeHexColor(...a(this, ys));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)` : t.style.backgroundColor = Q.makeHexColor(...a(this, ys).map((l) => Math.floor(0.7 * (255 - l) + l)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const n = document.createElement("h1");
    if (e.append(n), {
      dir: n.dir,
      str: n.textContent
    } = a(this, zc), t.append(e), a(this, bs)) {
      const s = document.createElement("span");
      s.classList.add("popupDate"), s.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        date: a(this, bs).toLocaleDateString(),
        time: a(this, bs).toLocaleTimeString()
      })), e.append(s);
    }
    const i = a(this, ha, Md);
    if (i)
      pw.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const s = this._formatContents(a(this, Ti));
      t.append(s);
    }
    a(this, Yt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const n = document.createElement("p");
    n.classList.add("popupContent"), n.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let s = 0, o = i.length; s < o; ++s) {
      const l = i[s];
      n.append(document.createTextNode(l)), s < o - 1 && n.append(document.createElement("br"));
    }
    return n;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var n;
    a(this, ws) || w(this, ws, {
      contentsObj: a(this, Ti),
      richText: a(this, Li)
    }), t && w(this, Ri, null), e && (w(this, Li, A(this, nf, ww).call(this, e)), w(this, Ti, null)), (n = a(this, En)) == null || n.remove(), w(this, En, null);
  }
  resetEdited() {
    var t;
    a(this, ws) && ({
      contentsObj: qe(this, Ti)._,
      richText: qe(this, Li)._
    } = a(this, ws), w(this, ws, null), (t = a(this, En)) == null || t.remove(), w(this, En, null), w(this, Ri, null));
  }
  forceHide() {
    w(this, As, this.isVisible), a(this, As) && (a(this, Yt).hidden = !0);
  }
  maybeShow() {
    a(this, As) && (a(this, En) || A(this, ua, Od).call(this), w(this, As, !1), a(this, Yt).hidden = !1);
  }
  get isVisible() {
    return a(this, Yt).hidden === !1;
  }
}
aa = new WeakMap(), Qu = new WeakMap(), tf = new WeakMap(), la = new WeakMap(), ys = new WeakMap(), Yt = new WeakMap(), Ti = new WeakMap(), bs = new WeakMap(), Uc = new WeakMap(), Hc = new WeakMap(), ca = new WeakMap(), Pi = new WeakMap(), En = new WeakMap(), Ri = new WeakMap(), jc = new WeakMap(), Li = new WeakMap(), zc = new WeakMap(), ws = new WeakMap(), As = new WeakMap(), ha = new WeakSet(), Md = function() {
  const t = a(this, Li), e = a(this, Ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && a(this, Li).html || null;
}, Vc = new WeakSet(), lm = function() {
  var t, e, n;
  return ((n = (e = (t = a(this, ha, Md)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.fontSize) || 0;
}, ef = new WeakSet(), bw = function() {
  var t, e, n;
  return ((n = (e = (t = a(this, ha, Md)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.color) || null;
}, nf = new WeakSet(), ww = function(t) {
  const e = [], n = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: a(this, ef, bw),
      fontSize: a(this, Vc, lm) ? `calc(${a(this, Vc, lm)}px * var(--scale-factor))` : ""
    }
  };
  for (const s of t.split(`
`))
    e.push({
      name: "span",
      value: s,
      attributes: i
    });
  return n;
}, rf = new WeakSet(), Aw = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && a(this, Pi)) && A(this, da, Dd).call(this);
}, sf = new WeakSet(), Ew = function() {
  if (a(this, Ri) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: n,
        pageX: i,
        pageY: s
      }
    }
  } = a(this, Hc);
  let o = !!a(this, ca), l = o ? a(this, ca) : a(this, jc);
  for (const y of a(this, Uc))
    if (!l || Q.intersect(y.data.rect, l) !== null) {
      l = y.data.rect, o = !0;
      break;
    }
  const c = Q.normalizeRect([l[0], t[3] - l[1] + t[1], l[2], t[3] - l[3] + t[1]]), h = o ? l[2] - l[0] + 5 : 0, f = c[0] + h, g = c[1];
  w(this, Ri, [100 * (f - i) / e, 100 * (g - s) / n]);
  const {
    style: v
  } = a(this, Yt);
  v.left = `${a(this, Ri)[0]}%`, v.top = `${a(this, Ri)[1]}%`;
}, da = new WeakSet(), Dd = function() {
  w(this, Pi, !a(this, Pi)), a(this, Pi) ? (A(this, ua, Od).call(this), a(this, Yt).addEventListener("click", a(this, la)), a(this, Yt).addEventListener("keydown", a(this, aa))) : (A(this, Gc, cm).call(this), a(this, Yt).removeEventListener("click", a(this, la)), a(this, Yt).removeEventListener("keydown", a(this, aa)));
}, ua = new WeakSet(), Od = function() {
  a(this, En) || this.render(), this.isVisible ? a(this, Pi) && a(this, Yt).classList.add("focused") : (A(this, sf, Ew).call(this), a(this, Yt).hidden = !1, a(this, Yt).style.zIndex = parseInt(a(this, Yt).style.zIndex) + 1e3);
}, Gc = new WeakSet(), cm = function() {
  a(this, Yt).classList.remove("focused"), !(a(this, Pi) || !this.isVisible) && (a(this, Yt).hidden = !0, a(this, Yt).style.zIndex = parseInt(a(this, Yt).style.zIndex) - 1e3);
};
class _w extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = St.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const n = document.createElement("span");
        n.textContent = e, t.append(n);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var Wc;
class ik extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Wc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Vi(e.rect), s = this.svgFactory.create(n, i, !0), o = w(this, Wc, this.svgFactory.createElement("svg:line"));
    return o.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), o.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), o.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), o.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), o.setAttribute("stroke-width", e.borderStyle.width || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), s.append(o), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Wc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Wc = new WeakMap();
var qc;
class rk extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, qc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Vi(e.rect), s = this.svgFactory.create(n, i, !0), o = e.borderStyle.width, l = w(this, qc, this.svgFactory.createElement("svg:rect"));
    return l.setAttribute("x", o / 2), l.setAttribute("y", o / 2), l.setAttribute("width", n - o), l.setAttribute("height", i - o), l.setAttribute("stroke-width", o || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, qc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
qc = new WeakMap();
var Xc;
class sk extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Xc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Vi(e.rect), s = this.svgFactory.create(n, i, !0), o = e.borderStyle.width, l = w(this, Xc, this.svgFactory.createElement("svg:ellipse"));
    return l.setAttribute("cx", n / 2), l.setAttribute("cy", i / 2), l.setAttribute("rx", n / 2 - o / 2), l.setAttribute("ry", i / 2 - o / 2), l.setAttribute("stroke-width", o || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Xc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Xc = new WeakMap();
var Yc;
class Sw extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Yc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: n,
      height: i
    } = Vi(e.rect), s = this.svgFactory.create(n, i, !0);
    let o = [];
    for (const c of e.vertices) {
      const d = c.x - e.rect[0], h = e.rect[3] - c.y;
      o.push(d + "," + h);
    }
    o = o.join(" ");
    const l = w(this, Yc, this.svgFactory.createElement(this.svgElementName));
    return l.setAttribute("points", o), l.setAttribute("stroke-width", e.borderStyle.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Yc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Yc = new WeakMap();
class ok extends Sw {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class ak extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Kc;
class xw extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Kc, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = St.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: n,
      height: i
    } = Vi(e.rect), s = this.svgFactory.create(n, i, !0);
    for (const o of e.inkLists) {
      let l = [];
      for (const d of o) {
        const h = d.x - e.rect[0], f = e.rect[3] - d.y;
        l.push(`${h},${f}`);
      }
      l = l.join(" ");
      const c = this.svgFactory.createElement(this.svgElementName);
      a(this, Kc).push(c), c.setAttribute("points", l), c.setAttribute("stroke-width", e.borderStyle.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), !e.popupRef && this.hasPopupData && this._createPopup(), s.append(c);
    }
    return this.container.append(s), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Kc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Kc = new WeakMap();
class lk extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class ck extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class hk extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class dk extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Cw extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Zc, Jc, hm;
class uk extends Jt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    m(this, Jc);
    m(this, Zc, null);
    const {
      file: n
    } = this.data;
    this.filename = n.filename, this.content = n.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...n
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: n
    } = this;
    let i;
    n.hasAppearance || n.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(n.name) ? "paperclip" : "pushpin"}.svg`, n.fillAlpha && n.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(n.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", A(this, Jc, hm).bind(this)), w(this, Zc, i);
    const {
      isMac: s
    } = Ve.platform;
    return e.addEventListener("keydown", (o) => {
      o.key === "Enter" && (s ? o.metaKey : o.ctrlKey) && A(this, Jc, hm).call(this);
    }), !n.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return a(this, Zc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Zc = new WeakMap(), Jc = new WeakSet(), hm = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Qc, Es, fa, of, Tw, th, dm, Yv;
let fk = (Yv = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: n,
    annotationEditorUIManager: i,
    page: s,
    viewport: o
  }) {
    m(this, of);
    m(this, th);
    m(this, Qc, null);
    m(this, Es, null);
    m(this, fa, /* @__PURE__ */ new Map());
    this.div = t, w(this, Qc, e), w(this, Es, n), this.page = s, this.viewport = o, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  async render(t) {
    var o;
    const {
      annotations: e
    } = t, n = this.div;
    to(n, this.viewport);
    const i = /* @__PURE__ */ new Map(), s = {
      data: null,
      layer: n,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new u0(),
      annotationStorage: t.annotationStorage || new v0(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const l of e) {
      if (l.noHTML)
        continue;
      const c = l.annotationType === ne.POPUP;
      if (c) {
        const f = i.get(l.id);
        if (!f)
          continue;
        s.elements = f;
      } else {
        const {
          width: f,
          height: g
        } = Vi(l.rect);
        if (f <= 0 || g <= 0)
          continue;
      }
      s.data = l;
      const d = YL.create(s);
      if (!d.isRenderable)
        continue;
      if (!c && l.popupRef) {
        const f = i.get(l.popupRef);
        f ? f.push(d) : i.set(l.popupRef, [d]);
      }
      const h = d.render();
      l.hidden && (h.style.visibility = "hidden"), A(this, of, Tw).call(this, h, l.id), d.annotationEditorType > 0 && (a(this, fa).set(d.data.id, d), (o = this._annotationEditorUIManager) == null || o.renderAnnotationElement(d));
    }
    A(this, th, dm).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, to(e, {
      rotation: t.rotation
    }), A(this, th, dm).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(a(this, fa).values());
  }
  getEditableAnnotation(t) {
    return a(this, fa).get(t);
  }
}, Qc = new WeakMap(), Es = new WeakMap(), fa = new WeakMap(), of = new WeakSet(), Tw = function(t, e) {
  var i;
  const n = t.firstChild || t;
  n.id = `${Eb}${e}`, this.div.append(t), (i = a(this, Qc)) == null || i.moveElementInDOM(this.div, t, n, !1);
}, th = new WeakSet(), dm = function() {
  if (!a(this, Es))
    return;
  const t = this.div;
  for (const [e, n] of a(this, Es)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    n.className = "annotationContent";
    const {
      firstChild: s
    } = i;
    s ? s.nodeName === "CANVAS" ? s.replaceWith(n) : s.classList.contains("annotationContent") ? s.after(n) : s.before(n) : i.append(n);
  }
  a(this, Es).clear();
}, Yv);
const gd = /\r\n?|\n/g;
var eh, nh, ih, rh, sh, _n, Ze, oh, Je, pa, af, Pw, lf, Rw, cf, Lw, ga, Nd, ma, Bd, va, $d, hf, kw, ah, fm, df, Iw;
const Bt = class Bt extends Ft {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, af);
    m(this, lf);
    m(this, cf);
    m(this, ga);
    m(this, va);
    m(this, hf);
    m(this, df);
    m(this, eh, this.editorDivBlur.bind(this));
    m(this, nh, this.editorDivFocus.bind(this));
    m(this, ih, this.editorDivInput.bind(this));
    m(this, rh, this.editorDivKeydown.bind(this));
    m(this, sh, this.editorDivPaste.bind(this));
    m(this, _n, void 0);
    m(this, Ze, "");
    m(this, oh, `${this.id}-editor`);
    m(this, Je, void 0);
    m(this, pa, null);
    w(this, _n, e.color || Bt._defaultColor || Ft._defaultLineColor), w(this, Je, e.fontSize || Bt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = Bt.prototype, n = (o) => o.isEmpty(), i = eo.TRANSLATE_SMALL, s = eo.TRANSLATE_BIG;
    return Tt(this, "_keyboardManager", new Qh([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: n
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-s, 0],
      checker: n
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: n
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [s, 0],
      checker: n
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: n
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -s],
      checker: n
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: n
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, s],
      checker: n
    }]]));
  }
  static initialize(e, n) {
    Ft.initialize(e, n, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.FREETEXT_SIZE:
        Bt._defaultFontSize = n;
        break;
      case at.FREETEXT_COLOR:
        Bt._defaultColor = n;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case at.FREETEXT_SIZE:
        A(this, af, Pw).call(this, n);
        break;
      case at.FREETEXT_COLOR:
        A(this, lf, Rw).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.FREETEXT_SIZE, Bt._defaultFontSize], [at.FREETEXT_COLOR, Bt._defaultColor || Ft._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[at.FREETEXT_SIZE, a(this, Je)], [at.FREETEXT_COLOR, a(this, _n)]];
  }
  _translateEmpty(e, n) {
    this._uiManager.translateSelectedEditors(e, n, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Bt._internalPadding * e, -(Bt._internalPadding + a(this, Je)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(St.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", a(this, rh)), this.editorDiv.addEventListener("focus", a(this, nh)), this.editorDiv.addEventListener("blur", a(this, eh)), this.editorDiv.addEventListener("input", a(this, ih)), this.editorDiv.addEventListener("paste", a(this, sh)));
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", a(this, oh)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", a(this, rh)), this.editorDiv.removeEventListener("focus", a(this, nh)), this.editorDiv.removeEventListener("blur", a(this, eh)), this.editorDiv.removeEventListener("input", a(this, ih)), this.editorDiv.removeEventListener("paste", a(this, sh)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = a(this, Ze), n = w(this, Ze, A(this, cf, Lw).call(this).trimEnd());
    if (e === n)
      return;
    const i = (s) => {
      if (w(this, Ze, s), !s) {
        this.remove();
        return;
      }
      A(this, va, $d).call(this), this._uiManager.rebuild(this), A(this, ga, Nd).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(n);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), A(this, ga, Nd).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Bt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", a(this, oh)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), Ft._l10nPromise.get("pdfjs-free-text-default-content").then((s) => {
      var o;
      return (o = this.editorDiv) == null ? void 0 : o.setAttribute("default-content", s);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${a(this, Je)}px * var(--scale-factor))`, i.color = a(this, _n), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), iu(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [s, o] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: l
        } = a(this, pa);
        let [c, d] = this.getInitialTranslation();
        [c, d] = this.pageTranslationToScreen(c, d);
        const [h, f] = this.pageDimensions, [g, v] = this.pageTranslation;
        let y, E;
        switch (this.rotation) {
          case 0:
            y = e + (l[0] - g) / h, E = n + this.height - (l[1] - v) / f;
            break;
          case 90:
            y = e + (l[0] - g) / h, E = n - (l[1] - v) / f, [c, d] = [d, -c];
            break;
          case 180:
            y = e - this.width + (l[0] - g) / h, E = n - (l[1] - v) / f, [c, d] = [-c, -d];
            break;
          case 270:
            y = e + (l[0] - g - this.height * f) / h, E = n + (l[1] - v - this.width * h) / f, [c, d] = [-d, c];
            break;
        }
        this.setAt(y * s, E * o, c, d);
      } else
        this.setAt(e * s, n * o, this.width * s, this.height * o);
      A(this, va, $d).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, E, x;
    const n = e.clipboardData || window.clipboardData, {
      types: i
    } = n;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const s = A(y = Bt, ah, fm).call(y, n.getData("text") || "").replaceAll(gd, `
`);
    if (!s)
      return;
    const o = window.getSelection();
    if (!o.rangeCount)
      return;
    this.editorDiv.normalize(), o.deleteFromDocument();
    const l = o.getRangeAt(0);
    if (!s.includes(`
`)) {
      l.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), o.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: d
    } = l, h = [], f = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const _ = c.parentElement;
      if (f.push(c.nodeValue.slice(d).replaceAll(gd, "")), _ !== this.editorDiv) {
        let P = h;
        for (const L of this.editorDiv.childNodes) {
          if (L === _) {
            P = f;
            continue;
          }
          P.push(A(E = Bt, ma, Bd).call(E, L));
        }
      }
      h.push(c.nodeValue.slice(0, d).replaceAll(gd, ""));
    } else if (c === this.editorDiv) {
      let _ = h, P = 0;
      for (const L of this.editorDiv.childNodes)
        P++ === d && (_ = f), _.push(A(x = Bt, ma, Bd).call(x, L));
    }
    w(this, Ze, `${h.join(`
`)}${s}${f.join(`
`)}`), A(this, va, $d).call(this);
    const g = new Range();
    let v = h.reduce((_, P) => _ + P.length, 0);
    for (const {
      firstChild: _
    } of this.editorDiv.childNodes)
      if (_.nodeType === Node.TEXT_NODE) {
        const P = _.nodeValue.length;
        if (v <= P) {
          g.setStart(_, v), g.setEnd(_, v);
          break;
        }
        v -= P;
      }
    o.removeAllRanges(), o.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(e, n, i) {
    var l;
    let s = null;
    if (e instanceof _w) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: d
          },
          rect: h,
          rotation: f,
          id: g
        },
        textContent: v,
        textPosition: y,
        parent: {
          page: {
            pageNumber: E
          }
        }
      } = e;
      if (!v || v.length === 0)
        return null;
      s = e = {
        annotationType: St.FREETEXT,
        color: Array.from(d),
        fontSize: c,
        value: v.join(`
`),
        position: y,
        pageIndex: E - 1,
        rect: h.slice(0),
        rotation: f,
        id: g,
        deleted: !1
      };
    }
    const o = super.deserialize(e, n, i);
    return w(o, Je, e.fontSize), w(o, _n, Q.makeHexColor(...e.color)), w(o, Ze, A(l = Bt, ah, fm).call(l, e.value)), o.annotationElementId = e.id || null, w(o, pa, s), o;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const n = Bt._internalPadding * this.parentScale, i = this.getRect(n, n), s = Ft._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : a(this, _n)), o = {
      annotationType: St.FREETEXT,
      color: s,
      fontSize: a(this, Je),
      value: A(this, hf, kw).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? o : this.annotationElementId && !A(this, df, Iw).call(this, o) ? null : (o.id = this.annotationElementId, o);
  }
  renderAnnotationElement(e) {
    const n = super.renderAnnotationElement(e);
    if (this.deleted)
      return n;
    const {
      style: i
    } = n;
    i.fontSize = `calc(${a(this, Je)}px * var(--scale-factor))`, i.color = a(this, _n), n.replaceChildren();
    for (const o of a(this, Ze).split(`
`)) {
      const l = document.createElement("div");
      l.append(o ? document.createTextNode(o) : document.createElement("br")), n.append(l);
    }
    const s = Bt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(s, s),
      popupContent: a(this, Ze)
    }), n;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
eh = new WeakMap(), nh = new WeakMap(), ih = new WeakMap(), rh = new WeakMap(), sh = new WeakMap(), _n = new WeakMap(), Ze = new WeakMap(), oh = new WeakMap(), Je = new WeakMap(), pa = new WeakMap(), af = new WeakSet(), Pw = function(e) {
  const n = (s) => {
    this.editorDiv.style.fontSize = `calc(${s}px * var(--scale-factor))`, this.translate(0, -(s - a(this, Je)) * this.parentScale), w(this, Je, s), A(this, ga, Nd).call(this);
  }, i = a(this, Je);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, lf = new WeakSet(), Rw = function(e) {
  const n = (s) => {
    w(this, _n, this.editorDiv.style.color = s);
  }, i = a(this, _n);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, cf = new WeakSet(), Lw = function() {
  var n;
  const e = [];
  this.editorDiv.normalize();
  for (const i of this.editorDiv.childNodes)
    e.push(A(n = Bt, ma, Bd).call(n, i));
  return e.join(`
`);
}, ga = new WeakSet(), Nd = function() {
  const [e, n] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: s,
      div: o
    } = this, l = o.style.display, c = o.classList.contains("hidden");
    o.classList.remove("hidden"), o.style.display = "hidden", s.div.append(this.div), i = o.getBoundingClientRect(), o.remove(), o.style.display = l, o.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / n) : (this.width = i.height / e, this.height = i.width / n), this.fixAndSetPosition();
}, ma = new WeakSet(), Bd = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(gd, "");
}, va = new WeakSet(), $d = function() {
  if (this.editorDiv.replaceChildren(), !!a(this, Ze))
    for (const e of a(this, Ze).split(`
`)) {
      const n = document.createElement("div");
      n.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(n);
    }
}, hf = new WeakSet(), kw = function() {
  return a(this, Ze).replaceAll(" ", " ");
}, ah = new WeakSet(), fm = function(e) {
  return e.replaceAll(" ", " ");
}, df = new WeakSet(), Iw = function(e) {
  const {
    value: n,
    fontSize: i,
    color: s,
    pageIndex: o
  } = a(this, pa);
  return this._hasBeenMoved || e.value !== n || e.fontSize !== i || e.color.some((l, c) => l !== s[c]) || e.pageIndex !== o;
}, m(Bt, ma), m(Bt, ah), dt(Bt, "_freeTextDefaultContent", ""), dt(Bt, "_internalPadding", 0), dt(Bt, "_defaultColor", null), dt(Bt, "_defaultFontSize", 10), dt(Bt, "_type", "freetext"), dt(Bt, "_editorType", St.FREETEXT);
let um = Bt;
var lh, pr, Sn, uf, Fw, ya, Ud, ff, Mw, pf, Dw, ch, gm;
class pm {
  constructor(t, e = 0, n = 0, i = !0) {
    m(this, uf);
    m(this, ya);
    m(this, ff);
    m(this, pf);
    m(this, ch);
    m(this, lh, void 0);
    m(this, pr, []);
    m(this, Sn, []);
    let s = 1 / 0, o = -1 / 0, l = 1 / 0, c = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: _,
      y: P,
      width: L,
      height: k
    } of t) {
      const F = Math.floor((_ - e) / h) * h, I = Math.ceil((_ + L + e) / h) * h, M = Math.floor((P - e) / h) * h, C = Math.ceil((P + k + e) / h) * h, T = [F, M, C, !0], O = [I, M, C, !1];
      a(this, pr).push(T, O), s = Math.min(s, F), o = Math.max(o, I), l = Math.min(l, M), c = Math.max(c, C);
    }
    const f = o - s + 2 * n, g = c - l + 2 * n, v = s - n, y = l - n, E = a(this, pr).at(i ? -1 : -2), x = [E[0], E[2]];
    for (const _ of a(this, pr)) {
      const [P, L, k] = _;
      _[0] = (P - v) / f, _[1] = (L - y) / g, _[2] = (k - y) / g;
    }
    w(this, lh, {
      x: v,
      y,
      width: f,
      height: g,
      lastPoint: x
    });
  }
  getOutlines() {
    a(this, pr).sort((e, n) => e[0] - n[0] || e[1] - n[1] || e[2] - n[2]);
    const t = [];
    for (const e of a(this, pr))
      e[3] ? (t.push(...A(this, ch, gm).call(this, e)), A(this, ff, Mw).call(this, e)) : (A(this, pf, Dw).call(this, e), t.push(...A(this, ch, gm).call(this, e)));
    return A(this, uf, Fw).call(this, t);
  }
}
lh = new WeakMap(), pr = new WeakMap(), Sn = new WeakMap(), uf = new WeakSet(), Fw = function(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const o of t) {
    const [l, c, d] = o;
    e.push([l, c, o], [l, d, o]);
  }
  e.sort((o, l) => o[1] - l[1] || o[0] - l[0]);
  for (let o = 0, l = e.length; o < l; o += 2) {
    const c = e[o][2], d = e[o + 1][2];
    c.push(d), d.push(c), n.add(c), n.add(d);
  }
  const i = [];
  let s;
  for (; n.size > 0; ) {
    const o = n.values().next().value;
    let [l, c, d, h, f] = o;
    n.delete(o);
    let g = l, v = c;
    for (s = [l, d], i.push(s); ; ) {
      let y;
      if (n.has(h))
        y = h;
      else if (n.has(f))
        y = f;
      else
        break;
      n.delete(y), [l, c, d, h, f] = y, g !== l && (s.push(g, v, l, v === c ? c : d), g = l), v = v === c ? d : c;
    }
    s.push(g, v);
  }
  return new pk(i, a(this, lh));
}, ya = new WeakSet(), Ud = function(t) {
  const e = a(this, Sn);
  let n = 0, i = e.length - 1;
  for (; n <= i; ) {
    const s = n + i >> 1, o = e[s][0];
    if (o === t)
      return s;
    o < t ? n = s + 1 : i = s - 1;
  }
  return i + 1;
}, ff = new WeakSet(), Mw = function([, t, e]) {
  const n = A(this, ya, Ud).call(this, t);
  a(this, Sn).splice(n, 0, [t, e]);
}, pf = new WeakSet(), Dw = function([, t, e]) {
  const n = A(this, ya, Ud).call(this, t);
  for (let i = n; i < a(this, Sn).length; i++) {
    const [s, o] = a(this, Sn)[i];
    if (s !== t)
      break;
    if (s === t && o === e) {
      a(this, Sn).splice(i, 1);
      return;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    const [s, o] = a(this, Sn)[i];
    if (s !== t)
      break;
    if (s === t && o === e) {
      a(this, Sn).splice(i, 1);
      return;
    }
  }
}, ch = new WeakSet(), gm = function(t) {
  const [e, n, i] = t, s = [[e, n, i]], o = A(this, ya, Ud).call(this, i);
  for (let l = 0; l < o; l++) {
    const [c, d] = a(this, Sn)[l];
    for (let h = 0, f = s.length; h < f; h++) {
      const [, g, v] = s[h];
      if (!(d <= g || v <= c)) {
        if (g >= c) {
          if (v > d)
            s[h][1] = d;
          else {
            if (f === 1)
              return [];
            s.splice(h, 1), h--, f--;
          }
          continue;
        }
        s[h][2] = c, v > d && s.push([e, d, v]);
      }
    }
  }
  return s;
};
class Ow {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof vm;
  }
}
var hh, ba;
class pk extends Ow {
  constructor(e, n) {
    super();
    m(this, hh, void 0);
    m(this, ba, void 0);
    w(this, ba, e), w(this, hh, n);
  }
  toSVGPath() {
    const e = [];
    for (const n of a(this, ba)) {
      let [i, s] = n;
      e.push(`M${i} ${s}`);
      for (let o = 2; o < n.length; o += 2) {
        const l = n[o], c = n[o + 1];
        l === i ? (e.push(`V${c}`), s = c) : c === s && (e.push(`H${l}`), i = l);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, n, i, s], o) {
    const l = [], c = i - e, d = s - n;
    for (const h of a(this, ba)) {
      const f = new Array(h.length);
      for (let g = 0; g < h.length; g += 2)
        f[g] = e + h[g] * c, f[g + 1] = s - h[g + 1] * d;
      l.push(f);
    }
    return l;
  }
  get box() {
    return a(this, hh);
  }
}
hh = new WeakMap(), ba = new WeakMap();
var Gn, ki, wa, Aa, Wn, Et, _s, Ss, dh, uh, Ea, _a, gr, fh, gf, mf, ph, mm;
const hi = class hi {
  constructor({
    x: t,
    y: e
  }, n, i, s, o, l = 0) {
    m(this, ph);
    m(this, Gn, void 0);
    m(this, ki, []);
    m(this, wa, void 0);
    m(this, Aa, void 0);
    m(this, Wn, []);
    m(this, Et, new Float64Array(18));
    m(this, _s, void 0);
    m(this, Ss, void 0);
    m(this, dh, void 0);
    m(this, uh, void 0);
    m(this, Ea, void 0);
    m(this, _a, void 0);
    m(this, gr, []);
    w(this, Gn, n), w(this, _a, s * i), w(this, Aa, o), a(this, Et).set([NaN, NaN, NaN, NaN, t, e], 6), w(this, wa, l), w(this, uh, a(hi, fh) * i), w(this, dh, a(hi, mf) * i), w(this, Ea, i), a(this, gr).push(t, e);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(a(this, Et)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var T;
    w(this, _s, t), w(this, Ss, e);
    const [n, i, s, o] = a(this, Gn);
    let [l, c, d, h] = a(this, Et).subarray(8, 12);
    const f = t - d, g = e - h, v = Math.hypot(f, g);
    if (v < a(this, dh))
      return !1;
    const y = v - a(this, uh), E = y / v, x = E * f, _ = E * g;
    let P = l, L = c;
    l = d, c = h, d += x, h += _, (T = a(this, gr)) == null || T.push(t, e);
    const k = -_ / y, F = x / y, I = k * a(this, _a), M = F * a(this, _a);
    return a(this, Et).set(a(this, Et).subarray(2, 8), 0), a(this, Et).set([d + I, h + M], 4), a(this, Et).set(a(this, Et).subarray(14, 18), 12), a(this, Et).set([d - I, h - M], 16), isNaN(a(this, Et)[6]) ? (a(this, Wn).length === 0 && (a(this, Et).set([l + I, c + M], 2), a(this, Wn).push(NaN, NaN, NaN, NaN, (l + I - n) / s, (c + M - i) / o), a(this, Et).set([l - I, c - M], 14), a(this, ki).push(NaN, NaN, NaN, NaN, (l - I - n) / s, (c - M - i) / o)), a(this, Et).set([P, L, l, c, d, h], 6), !this.isEmpty()) : (a(this, Et).set([P, L, l, c, d, h], 6), Math.abs(Math.atan2(L - c, P - l) - Math.atan2(_, x)) < Math.PI / 2 ? ([l, c, d, h] = a(this, Et).subarray(2, 6), a(this, Wn).push(NaN, NaN, NaN, NaN, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), [l, c, P, L] = a(this, Et).subarray(14, 18), a(this, ki).push(NaN, NaN, NaN, NaN, ((P + l) / 2 - n) / s, ((L + c) / 2 - i) / o), !0) : ([P, L, l, c, d, h] = a(this, Et).subarray(0, 6), a(this, Wn).push(((P + 5 * l) / 6 - n) / s, ((L + 5 * c) / 6 - i) / o, ((5 * l + d) / 6 - n) / s, ((5 * c + h) / 6 - i) / o, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), [d, h, l, c, P, L] = a(this, Et).subarray(12, 18), a(this, ki).push(((P + 5 * l) / 6 - n) / s, ((L + 5 * c) / 6 - i) / o, ((5 * l + d) / 6 - n) / s, ((5 * c + h) / 6 - i) / o, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = a(this, Wn), e = a(this, ki), n = a(this, Et).subarray(4, 6), i = a(this, Et).subarray(16, 18), [s, o, l, c] = a(this, Gn), [d, h, f, g] = A(this, ph, mm).call(this);
    if (isNaN(a(this, Et)[6]) && !this.isEmpty())
      return `M${(a(this, Et)[2] - s) / l} ${(a(this, Et)[3] - o) / c} L${(a(this, Et)[4] - s) / l} ${(a(this, Et)[5] - o) / c} L${d} ${h} L${f} ${g} L${(a(this, Et)[16] - s) / l} ${(a(this, Et)[17] - o) / c} L${(a(this, Et)[14] - s) / l} ${(a(this, Et)[15] - o) / c} Z`;
    const v = [];
    v.push(`M${t[4]} ${t[5]}`);
    for (let y = 6; y < t.length; y += 6)
      isNaN(t[y]) ? v.push(`L${t[y + 4]} ${t[y + 5]}`) : v.push(`C${t[y]} ${t[y + 1]} ${t[y + 2]} ${t[y + 3]} ${t[y + 4]} ${t[y + 5]}`);
    v.push(`L${(n[0] - s) / l} ${(n[1] - o) / c} L${d} ${h} L${f} ${g} L${(i[0] - s) / l} ${(i[1] - o) / c}`);
    for (let y = e.length - 6; y >= 6; y -= 6)
      isNaN(e[y]) ? v.push(`L${e[y + 4]} ${e[y + 5]}`) : v.push(`C${e[y]} ${e[y + 1]} ${e[y + 2]} ${e[y + 3]} ${e[y + 4]} ${e[y + 5]}`);
    return v.push(`L${e[4]} ${e[5]} Z`), v.join(" ");
  }
  getOutlines() {
    var _;
    const t = a(this, Wn), e = a(this, ki), n = a(this, Et), i = n.subarray(4, 6), s = n.subarray(16, 18), [o, l, c, d] = a(this, Gn), h = new Float64Array((((_ = a(this, gr)) == null ? void 0 : _.length) ?? 0) + 2);
    for (let P = 0, L = h.length - 2; P < L; P += 2)
      h[P] = (a(this, gr)[P] - o) / c, h[P + 1] = (a(this, gr)[P + 1] - l) / d;
    h[h.length - 2] = (a(this, _s) - o) / c, h[h.length - 1] = (a(this, Ss) - l) / d;
    const [f, g, v, y] = A(this, ph, mm).call(this);
    if (isNaN(n[6]) && !this.isEmpty()) {
      const P = new Float64Array(36);
      return P.set([NaN, NaN, NaN, NaN, (n[2] - o) / c, (n[3] - l) / d, NaN, NaN, NaN, NaN, (n[4] - o) / c, (n[5] - l) / d, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, v, y, NaN, NaN, NaN, NaN, (n[16] - o) / c, (n[17] - l) / d, NaN, NaN, NaN, NaN, (n[14] - o) / c, (n[15] - l) / d], 0), new vm(P, h, a(this, Gn), a(this, Ea), a(this, wa), a(this, Aa));
    }
    const E = new Float64Array(a(this, Wn).length + 24 + a(this, ki).length);
    let x = t.length;
    for (let P = 0; P < x; P += 2) {
      if (isNaN(t[P])) {
        E[P] = E[P + 1] = NaN;
        continue;
      }
      E[P] = t[P], E[P + 1] = t[P + 1];
    }
    E.set([NaN, NaN, NaN, NaN, (i[0] - o) / c, (i[1] - l) / d, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, v, y, NaN, NaN, NaN, NaN, (s[0] - o) / c, (s[1] - l) / d], x), x += 24;
    for (let P = e.length - 6; P >= 6; P -= 6)
      for (let L = 0; L < 6; L += 2) {
        if (isNaN(e[P + L])) {
          E[x] = E[x + 1] = NaN, x += 2;
          continue;
        }
        E[x] = e[P + L], E[x + 1] = e[P + L + 1], x += 2;
      }
    return E.set([NaN, NaN, NaN, NaN, e[4], e[5]], x), new vm(E, h, a(this, Gn), a(this, Ea), a(this, wa), a(this, Aa));
  }
};
Gn = new WeakMap(), ki = new WeakMap(), wa = new WeakMap(), Aa = new WeakMap(), Wn = new WeakMap(), Et = new WeakMap(), _s = new WeakMap(), Ss = new WeakMap(), dh = new WeakMap(), uh = new WeakMap(), Ea = new WeakMap(), _a = new WeakMap(), gr = new WeakMap(), fh = new WeakMap(), gf = new WeakMap(), mf = new WeakMap(), ph = new WeakSet(), mm = function() {
  const t = a(this, Et).subarray(4, 6), e = a(this, Et).subarray(16, 18), [n, i, s, o] = a(this, Gn);
  return [(a(this, _s) + (t[0] - e[0]) / 2 - n) / s, (a(this, Ss) + (t[1] - e[1]) / 2 - i) / o, (a(this, _s) + (e[0] - t[0]) / 2 - n) / s, (a(this, Ss) + (e[1] - t[1]) / 2 - i) / o];
}, m(hi, fh, 8), m(hi, gf, 2), m(hi, mf, a(hi, fh) + a(hi, gf));
let au = hi;
var Sa, xs, Ii, gh, Qe, mh, Zt, Cs, pl, Ts, gl, vf, Nw;
class vm extends Ow {
  constructor(e, n, i, s, o, l) {
    super();
    m(this, Cs);
    m(this, Ts);
    m(this, vf);
    m(this, Sa, void 0);
    m(this, xs, null);
    m(this, Ii, void 0);
    m(this, gh, void 0);
    m(this, Qe, void 0);
    m(this, mh, void 0);
    m(this, Zt, void 0);
    w(this, Zt, e), w(this, Qe, n), w(this, Sa, i), w(this, mh, s), w(this, Ii, o), w(this, gh, l), A(this, vf, Nw).call(this, l);
    const {
      x: c,
      y: d,
      width: h,
      height: f
    } = a(this, xs);
    for (let g = 0, v = e.length; g < v; g += 2)
      e[g] = (e[g] - c) / h, e[g + 1] = (e[g + 1] - d) / f;
    for (let g = 0, v = n.length; g < v; g += 2)
      n[g] = (n[g] - c) / h, n[g + 1] = (n[g + 1] - d) / f;
  }
  toSVGPath() {
    const e = [`M${a(this, Zt)[4]} ${a(this, Zt)[5]}`];
    for (let n = 6, i = a(this, Zt).length; n < i; n += 6) {
      if (isNaN(a(this, Zt)[n])) {
        e.push(`L${a(this, Zt)[n + 4]} ${a(this, Zt)[n + 5]}`);
        continue;
      }
      e.push(`C${a(this, Zt)[n]} ${a(this, Zt)[n + 1]} ${a(this, Zt)[n + 2]} ${a(this, Zt)[n + 3]} ${a(this, Zt)[n + 4]} ${a(this, Zt)[n + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, n, i, s], o) {
    const l = i - e, c = s - n;
    let d, h;
    switch (o) {
      case 0:
        d = A(this, Cs, pl).call(this, a(this, Zt), e, s, l, -c), h = A(this, Cs, pl).call(this, a(this, Qe), e, s, l, -c);
        break;
      case 90:
        d = A(this, Ts, gl).call(this, a(this, Zt), e, n, l, c), h = A(this, Ts, gl).call(this, a(this, Qe), e, n, l, c);
        break;
      case 180:
        d = A(this, Cs, pl).call(this, a(this, Zt), i, n, -l, c), h = A(this, Cs, pl).call(this, a(this, Qe), i, n, -l, c);
        break;
      case 270:
        d = A(this, Ts, gl).call(this, a(this, Zt), i, s, -l, -c), h = A(this, Ts, gl).call(this, a(this, Qe), i, s, -l, -c);
        break;
    }
    return {
      outline: Array.from(d),
      points: [Array.from(h)]
    };
  }
  get box() {
    return a(this, xs);
  }
  getNewOutline(e, n) {
    const {
      x: i,
      y: s,
      width: o,
      height: l
    } = a(this, xs), [c, d, h, f] = a(this, Sa), g = o * h, v = l * f, y = i * h + c, E = s * f + d, x = new au({
      x: a(this, Qe)[0] * g + y,
      y: a(this, Qe)[1] * v + E
    }, a(this, Sa), a(this, mh), e, a(this, gh), n ?? a(this, Ii));
    for (let _ = 2; _ < a(this, Qe).length; _ += 2)
      x.add({
        x: a(this, Qe)[_] * g + y,
        y: a(this, Qe)[_ + 1] * v + E
      });
    return x.getOutlines();
  }
}
Sa = new WeakMap(), xs = new WeakMap(), Ii = new WeakMap(), gh = new WeakMap(), Qe = new WeakMap(), mh = new WeakMap(), Zt = new WeakMap(), Cs = new WeakSet(), pl = function(e, n, i, s, o) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = n + e[c] * s, l[c + 1] = i + e[c + 1] * o;
  return l;
}, Ts = new WeakSet(), gl = function(e, n, i, s, o) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = n + e[c + 1] * s, l[c + 1] = i + e[c] * o;
  return l;
}, vf = new WeakSet(), Nw = function(e) {
  const n = a(this, Zt);
  let i = n[4], s = n[5], o = i, l = s, c = i, d = s, h = i, f = s;
  const g = e ? Math.max : Math.min;
  for (let _ = 6, P = n.length; _ < P; _ += 6) {
    if (isNaN(n[_]))
      o = Math.min(o, n[_ + 4]), l = Math.min(l, n[_ + 5]), c = Math.max(c, n[_ + 4]), d = Math.max(d, n[_ + 5]), f < n[_ + 5] ? (h = n[_ + 4], f = n[_ + 5]) : f === n[_ + 5] && (h = g(h, n[_ + 4]));
    else {
      const L = Q.bezierBoundingBox(i, s, ...n.slice(_, _ + 6));
      o = Math.min(o, L[0]), l = Math.min(l, L[1]), c = Math.max(c, L[2]), d = Math.max(d, L[3]), f < L[3] ? (h = L[2], f = L[3]) : f === L[3] && (h = g(h, L[2]));
    }
    i = n[_ + 4], s = n[_ + 5];
  }
  const v = o - a(this, Ii), y = l - a(this, Ii), E = c - o + 2 * a(this, Ii), x = d - l + 2 * a(this, Ii);
  w(this, xs, {
    x: v,
    y,
    width: E,
    height: x,
    lastPoint: [h, f]
  });
};
var vh, yh, xn, Ps, xa, re, bh, Ca, wh, Ah, mr, Ta, Eh, ym, _h, bm, yf, Bw, Fi, Mr, bf, $w, qn, Zi;
const di = class di {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, Eh);
    m(this, _h);
    m(this, yf);
    m(this, Fi);
    m(this, bf);
    m(this, qn);
    m(this, vh, A(this, yf, Bw).bind(this));
    m(this, yh, A(this, bf, $w).bind(this));
    m(this, xn, null);
    m(this, Ps, null);
    m(this, xa, void 0);
    m(this, re, null);
    m(this, bh, !1);
    m(this, Ca, !1);
    m(this, wh, null);
    m(this, Ah, void 0);
    m(this, mr, null);
    m(this, Ta, void 0);
    var n;
    t ? (w(this, Ca, !1), w(this, Ta, at.HIGHLIGHT_COLOR), w(this, wh, t)) : (w(this, Ca, !0), w(this, Ta, at.HIGHLIGHT_DEFAULT_COLOR)), w(this, mr, (t == null ? void 0 : t._uiManager) || e), w(this, Ah, a(this, mr)._eventBus), w(this, xa, (t == null ? void 0 : t.color) || ((n = a(this, mr)) == null ? void 0 : n.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return Tt(this, "_keyboardManager", new Qh([[["Escape", "mac+Escape"], di.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], di.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], di.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], di.prototype._moveToPrevious], [["Home", "mac+Home"], di.prototype._moveToBeginning], [["End", "mac+End"], di.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = w(this, xn, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0), t.addEventListener("click", A(this, Fi, Mr).bind(this)), t.addEventListener("keydown", a(this, vh));
    const e = w(this, Ps, document.createElement("span"));
    return e.className = "swatch", e.setAttribute("aria-hidden", !0), e.style.backgroundColor = a(this, xa), t.append(e), t;
  }
  renderMainDropdown() {
    const t = w(this, re, A(this, Eh, ym).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === a(this, xn)) {
      A(this, Fi, Mr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && A(this, _h, bm).call(this, e, t);
  }
  _moveToNext(t) {
    var e, n;
    if (!a(this, qn, Zi)) {
      A(this, Fi, Mr).call(this, t);
      return;
    }
    if (t.target === a(this, xn)) {
      (e = a(this, re).firstChild) == null || e.focus();
      return;
    }
    (n = t.target.nextSibling) == null || n.focus();
  }
  _moveToPrevious(t) {
    var e, n;
    if (t.target === ((e = a(this, re)) == null ? void 0 : e.firstChild) || t.target === a(this, xn)) {
      a(this, qn, Zi) && this._hideDropdownFromKeyboard();
      return;
    }
    a(this, qn, Zi) || A(this, Fi, Mr).call(this, t), (n = t.target.previousSibling) == null || n.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!a(this, qn, Zi)) {
      A(this, Fi, Mr).call(this, t);
      return;
    }
    (e = a(this, re).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!a(this, qn, Zi)) {
      A(this, Fi, Mr).call(this, t);
      return;
    }
    (e = a(this, re).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t;
    (t = a(this, re)) == null || t.classList.add("hidden"), window.removeEventListener("pointerdown", a(this, yh));
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!a(this, Ca)) {
      if (!a(this, qn, Zi)) {
        (t = a(this, wh)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), a(this, xn).focus({
        preventScroll: !0,
        focusVisible: a(this, bh)
      });
    }
  }
  updateColor(t) {
    if (a(this, Ps) && (a(this, Ps).style.backgroundColor = t), !a(this, re))
      return;
    const e = a(this, mr).highlightColors.values();
    for (const n of a(this, re).children)
      n.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = a(this, xn)) == null || t.remove(), w(this, xn, null), w(this, Ps, null), (e = a(this, re)) == null || e.remove(), w(this, re, null);
  }
};
vh = new WeakMap(), yh = new WeakMap(), xn = new WeakMap(), Ps = new WeakMap(), xa = new WeakMap(), re = new WeakMap(), bh = new WeakMap(), Ca = new WeakMap(), wh = new WeakMap(), Ah = new WeakMap(), mr = new WeakMap(), Ta = new WeakMap(), Eh = new WeakSet(), ym = function() {
  const t = document.createElement("div");
  t.addEventListener("contextmenu", Ge), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [e, n] of a(this, mr).highlightColors) {
    const i = document.createElement("button");
    i.tabIndex = "0", i.role = "option", i.setAttribute("data-color", n), i.title = e, i.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${e}`);
    const s = document.createElement("span");
    i.append(s), s.className = "swatch", s.style.backgroundColor = n, i.setAttribute("aria-selected", n === a(this, xa)), i.addEventListener("click", A(this, _h, bm).bind(this, n)), t.append(i);
  }
  return t.addEventListener("keydown", a(this, vh)), t;
}, _h = new WeakSet(), bm = function(t, e) {
  e.stopPropagation(), a(this, Ah).dispatch("switchannotationeditorparams", {
    source: this,
    type: a(this, Ta),
    value: t
  });
}, yf = new WeakSet(), Bw = function(t) {
  di._keyboardManager.exec(this, t);
}, Fi = new WeakSet(), Mr = function(t) {
  if (a(this, qn, Zi)) {
    this.hideDropdown();
    return;
  }
  if (w(this, bh, t.detail === 0), window.addEventListener("pointerdown", a(this, yh)), a(this, re)) {
    a(this, re).classList.remove("hidden");
    return;
  }
  const e = w(this, re, A(this, Eh, ym).call(this));
  a(this, xn).append(e);
}, bf = new WeakSet(), $w = function(t) {
  var e;
  (e = a(this, re)) != null && e.contains(t.target) || this.hideDropdown();
}, qn = new WeakSet(), Zi = function() {
  return a(this, re) && !a(this, re).classList.contains("hidden");
};
let lu = di;
var Pa, Sh, vr, Rs, Ra, hn, xh, Ch, Ls, Cn, Me, tn, wf, La, ks, se, ka, Xn, Th, Ph, wm, Rh, Am, Af, Uw, Ef, Hw, _f, jw, Lh, Em, Is, ml, yr, bo, Sf, zw, Ia, Hd, Fs, vl, xf, Vw, Cf, Gw, Tf, Ww, Pf, qw;
const Ct = class Ct extends Ft {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, Ph);
    m(this, Rh);
    m(this, Af);
    m(this, Ef);
    m(this, _f);
    m(this, Lh);
    m(this, Is);
    m(this, Sf);
    m(this, Ia);
    m(this, Fs);
    m(this, xf);
    m(this, Cf);
    m(this, Pa, null);
    m(this, Sh, 0);
    m(this, vr, void 0);
    m(this, Rs, null);
    m(this, Ra, null);
    m(this, hn, null);
    m(this, xh, null);
    m(this, Ch, 0);
    m(this, Ls, null);
    m(this, Cn, null);
    m(this, Me, null);
    m(this, tn, !1);
    m(this, wf, A(this, Sf, zw).bind(this));
    m(this, La, null);
    m(this, ks, void 0);
    m(this, se, null);
    m(this, ka, "");
    m(this, Xn, void 0);
    m(this, Th, "");
    this.color = e.color || Ct._defaultColor, w(this, Xn, e.thickness || Ct._defaultThickness), w(this, ks, e.opacity || Ct._defaultOpacity), w(this, vr, e.boxes || null), w(this, Th, e.methodOfCreation || ""), w(this, ka, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (w(this, tn, !0), A(this, Rh, Am).call(this, e), A(this, Is, ml).call(this)) : (w(this, Pa, e.anchorNode), w(this, Sh, e.anchorOffset), w(this, xh, e.focusNode), w(this, Ch, e.focusOffset), A(this, Ph, wm).call(this), A(this, Is, ml).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = Ct.prototype;
    return Tt(this, "_keyboardManager", new Qh([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: a(this, tn) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: a(this, Xn),
      methodOfCreation: a(this, Th)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, n) {
    var i;
    Ft.initialize(e, n), Ct._defaultColor || (Ct._defaultColor = ((i = n.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.HIGHLIGHT_DEFAULT_COLOR:
        Ct._defaultColor = n;
        break;
      case at.HIGHLIGHT_THICKNESS:
        Ct._defaultThickness = n;
        break;
    }
  }
  translateInPage(e, n) {
  }
  get toolbarPosition() {
    return a(this, La);
  }
  updateParams(e, n) {
    switch (e) {
      case at.HIGHLIGHT_COLOR:
        A(this, Af, Uw).call(this, n);
        break;
      case at.HIGHLIGHT_THICKNESS:
        A(this, Ef, Hw).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.HIGHLIGHT_DEFAULT_COLOR, Ct._defaultColor], [at.HIGHLIGHT_THICKNESS, Ct._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[at.HIGHLIGHT_COLOR, this.color || Ct._defaultColor], [at.HIGHLIGHT_THICKNESS, a(this, Xn) || Ct._defaultThickness], [at.HIGHLIGHT_FREE, a(this, tn)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (w(this, Ra, new lu({
      editor: this
    })), e.addColorPicker(a(this, Ra))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, Fs, vl).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, n) {
    return super.getRect(e, n, A(this, Fs, vl).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    A(this, Lh, Em).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, Is, ml).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let n = !1;
    this.parent && !e ? A(this, Lh, Em).call(this) : e && (A(this, Is, ml).call(this, e), n = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), n && this.select();
  }
  rotate(e) {
    var s, o, l;
    const {
      drawLayer: n
    } = this.parent;
    let i;
    a(this, tn) ? (e = (e - this.rotation + 360) % 360, i = A(s = Ct, yr, bo).call(s, a(this, Cn).box, e)) : i = A(o = Ct, yr, bo).call(o, this, e), n.rotate(a(this, Me), e), n.rotate(a(this, se), e), n.updateBox(a(this, Me), i), n.updateBox(a(this, se), A(l = Ct, yr, bo).call(l, a(this, hn).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    a(this, ka) && (e.setAttribute("aria-label", a(this, ka)), e.setAttribute("role", "mark")), a(this, tn) ? e.classList.add("free") : this.div.addEventListener("keydown", a(this, wf));
    const n = w(this, Ls, document.createElement("div"));
    e.append(n), n.setAttribute("aria-hidden", "true"), n.className = "internal", n.style.clipPath = a(this, Rs);
    const [i, s] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * s), iu(this, a(this, Ls), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.parent.drawLayer.addClass(a(this, se), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(a(this, se), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, Ia, Hd).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, Ia, Hd).call(this, !1);
        break;
    }
  }
  select() {
    var e, n;
    super.select(), a(this, se) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, se), "hovered"), (n = this.parent) == null || n.drawLayer.addClass(a(this, se), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), a(this, se) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, se), "selected"), a(this, tn) || A(this, Ia, Hd).call(this, !1));
  }
  get _mustFixPosition() {
    return !a(this, tn);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(a(this, Me), e), this.parent.drawLayer.show(a(this, se), e));
  }
  static startHighlighting(e, n, {
    target: i,
    x: s,
    y: o
  }) {
    const {
      x: l,
      y: c,
      width: d,
      height: h
    } = i.getBoundingClientRect(), f = (E) => {
      A(this, Tf, Ww).call(this, e, E);
    }, g = {
      capture: !0,
      passive: !1
    }, v = (E) => {
      E.preventDefault(), E.stopPropagation();
    }, y = (E) => {
      i.removeEventListener("pointermove", f), window.removeEventListener("blur", y), window.removeEventListener("pointerup", y), window.removeEventListener("pointerdown", v, g), window.removeEventListener("contextmenu", Ge), A(this, Pf, qw).call(this, e, E);
    };
    window.addEventListener("blur", y), window.addEventListener("pointerup", y), window.addEventListener("pointerdown", v, g), window.addEventListener("contextmenu", Ge), i.addEventListener("pointermove", f), this._freeHighlight = new au({
      x: s,
      y: o
    }, [l, c, d, h], e.scale, this._defaultThickness / 2, n, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(e, n, i) {
    var E;
    const s = super.deserialize(e, n, i), {
      rect: [o, l, c, d],
      color: h,
      quadPoints: f
    } = e;
    s.color = Q.makeHexColor(...h), w(s, ks, e.opacity);
    const [g, v] = s.pageDimensions;
    s.width = (c - o) / g, s.height = (d - l) / v;
    const y = w(s, vr, []);
    for (let x = 0; x < f.length; x += 8)
      y.push({
        x: (f[4] - c) / g,
        y: (d - (1 - f[x + 5])) / v,
        width: (f[x + 2] - f[x]) / g,
        height: (f[x + 5] - f[x + 1]) / v
      });
    return A(E = s, Ph, wm).call(E), s;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    const n = this.getRect(0, 0), i = Ft._colorManager.convert(this.color);
    return {
      annotationType: St.HIGHLIGHT,
      color: i,
      opacity: a(this, ks),
      thickness: a(this, Xn),
      quadPoints: A(this, xf, Vw).call(this),
      outlines: A(this, Cf, Gw).call(this, n),
      pageIndex: this.pageIndex,
      rect: n,
      rotation: A(this, Fs, vl).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Pa = new WeakMap(), Sh = new WeakMap(), vr = new WeakMap(), Rs = new WeakMap(), Ra = new WeakMap(), hn = new WeakMap(), xh = new WeakMap(), Ch = new WeakMap(), Ls = new WeakMap(), Cn = new WeakMap(), Me = new WeakMap(), tn = new WeakMap(), wf = new WeakMap(), La = new WeakMap(), ks = new WeakMap(), se = new WeakMap(), ka = new WeakMap(), Xn = new WeakMap(), Th = new WeakMap(), Ph = new WeakSet(), wm = function() {
  const e = new pm(a(this, vr), 1e-3);
  w(this, Cn, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = a(this, Cn).box;
  const n = new pm(a(this, vr), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  w(this, hn, n.getOutlines());
  const {
    lastPoint: i
  } = a(this, hn).box;
  w(this, La, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Rh = new WeakSet(), Am = function({
  highlightOutlines: e,
  highlightId: n,
  clipPathId: i
}) {
  var f, g;
  if (w(this, Cn, e), w(this, hn, e.getNewOutline(a(this, Xn) / 2 + 1.5, 25e-4)), n >= 0)
    w(this, Me, n), w(this, Rs, i), this.parent.drawLayer.finalizeLine(n, e), w(this, se, this.parent.drawLayer.highlightOutline(a(this, hn)));
  else if (this.parent) {
    const v = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(a(this, Me), e), this.parent.drawLayer.updateBox(a(this, Me), A(f = Ct, yr, bo).call(f, a(this, Cn).box, (v - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(a(this, se), a(this, hn)), this.parent.drawLayer.updateBox(a(this, se), A(g = Ct, yr, bo).call(g, a(this, hn).box, v));
  }
  const {
    x: o,
    y: l,
    width: c,
    height: d
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = o, this.y = l, this.width = c, this.height = d;
      break;
    case 90: {
      const [v, y] = this.parentDimensions;
      this.x = l, this.y = 1 - o, this.width = c * y / v, this.height = d * v / y;
      break;
    }
    case 180:
      this.x = 1 - o, this.y = 1 - l, this.width = c, this.height = d;
      break;
    case 270: {
      const [v, y] = this.parentDimensions;
      this.x = 1 - l, this.y = o, this.width = c * y / v, this.height = d * v / y;
      break;
    }
  }
  const {
    lastPoint: h
  } = a(this, hn).box;
  w(this, La, [(h[0] - o) / c, (h[1] - l) / d]);
}, Af = new WeakSet(), Uw = function(e) {
  const n = (s) => {
    var o, l;
    this.color = s, (o = this.parent) == null || o.drawLayer.changeColor(a(this, Me), s), (l = a(this, Ra)) == null || l.updateColor(s);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Ef = new WeakSet(), Hw = function(e) {
  const n = a(this, Xn), i = (s) => {
    w(this, Xn, s), A(this, _f, jw).call(this, s);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, _f = new WeakSet(), jw = function(e) {
  if (!a(this, tn))
    return;
  A(this, Rh, Am).call(this, {
    highlightOutlines: a(this, Cn).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [n, i] = this.parentDimensions;
  this.setDims(this.width * n, this.height * i);
}, Lh = new WeakSet(), Em = function() {
  a(this, Me) === null || !this.parent || (this.parent.drawLayer.remove(a(this, Me)), w(this, Me, null), this.parent.drawLayer.remove(a(this, se)), w(this, se, null));
}, Is = new WeakSet(), ml = function(e = this.parent) {
  a(this, Me) === null && ({
    id: qe(this, Me)._,
    clipPathId: qe(this, Rs)._
  } = e.drawLayer.highlight(a(this, Cn), this.color, a(this, ks)), w(this, se, e.drawLayer.highlightOutline(a(this, hn))), a(this, Ls) && (a(this, Ls).style.clipPath = a(this, Rs)));
}, yr = new WeakSet(), bo = function({
  x: e,
  y: n,
  width: i,
  height: s
}, o) {
  switch (o) {
    case 90:
      return {
        x: 1 - n - s,
        y: e,
        width: s,
        height: i
      };
    case 180:
      return {
        x: 1 - e - i,
        y: 1 - n - s,
        width: i,
        height: s
      };
    case 270:
      return {
        x: n,
        y: 1 - e - i,
        width: s,
        height: i
      };
  }
  return {
    x: e,
    y: n,
    width: i,
    height: s
  };
}, Sf = new WeakSet(), zw = function(e) {
  Ct._keyboardManager.exec(this, e);
}, Ia = new WeakSet(), Hd = function(e) {
  if (!a(this, Pa))
    return;
  const n = window.getSelection();
  e ? n.setPosition(a(this, Pa), a(this, Sh)) : n.setPosition(a(this, xh), a(this, Ch));
}, Fs = new WeakSet(), vl = function() {
  return a(this, tn) ? this.rotation : 0;
}, xf = new WeakSet(), Vw = function() {
  if (a(this, tn))
    return null;
  const [e, n] = this.pageDimensions, i = a(this, vr), s = new Array(i.length * 8);
  let o = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: h
  } of i) {
    const f = l * e, g = (1 - c - h) * n;
    s[o] = s[o + 4] = f, s[o + 1] = s[o + 3] = g, s[o + 2] = s[o + 6] = f + d * e, s[o + 5] = s[o + 7] = g + h * n, o += 8;
  }
  return s;
}, Cf = new WeakSet(), Gw = function(e) {
  return a(this, Cn).serialize(e, A(this, Fs, vl).call(this));
}, Tf = new WeakSet(), Ww = function(e, n) {
  this._freeHighlight.add(n) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Pf = new WeakSet(), qw = function(e, n) {
  this._freeHighlight.isEmpty() ? e.drawLayer.removeFreeHighlight(this._freeHighlightId) : e.createAndAddNewEditor(n, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, m(Ct, yr), m(Ct, Tf), m(Ct, Pf), dt(Ct, "_defaultColor", null), dt(Ct, "_defaultOpacity", 1), dt(Ct, "_defaultThickness", 12), dt(Ct, "_l10nPromise"), dt(Ct, "_type", "highlight"), dt(Ct, "_editorType", St.HIGHLIGHT), dt(Ct, "_freeHighlightId", -1), dt(Ct, "_freeHighlight", null), dt(Ct, "_freeHighlightClipId", "");
let cu = Ct;
var Ms, Ds, kh, Ih, Fh, Os, Yn, Mi, dn, Ns, Bs, $s, Us, Hs, br, Rf, Xw, Lf, Yw, kf, Kw, If, Zw, Mh, Sm, Ff, Jw, Dh, xm, Mf, Qw, Df, t1, Of, e1, Nf, n1, Bf, i1, Di, Dr, Oh, Cm, Fa, jd, Ma, zd, wr, wo, Nh, Tm, Da, Vd, $f, r1, Bh, Pm, Uf, s1, Hf, o1, $h, Rm, Oa, Gd, js, yl;
const jt = class jt extends Ft {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, Rf);
    m(this, Lf);
    m(this, kf);
    m(this, If);
    m(this, Mh);
    m(this, Ff);
    m(this, Dh);
    m(this, Mf);
    m(this, Df);
    m(this, Of);
    m(this, Nf);
    m(this, Bf);
    m(this, Di);
    m(this, Oh);
    m(this, Fa);
    m(this, Ma);
    m(this, wr);
    m(this, Nh);
    m(this, Da);
    m(this, Hf);
    m(this, $h);
    m(this, Oa);
    m(this, js);
    m(this, Ms, 0);
    m(this, Ds, 0);
    m(this, kh, this.canvasPointermove.bind(this));
    m(this, Ih, this.canvasPointerleave.bind(this));
    m(this, Fh, this.canvasPointerup.bind(this));
    m(this, Os, this.canvasPointerdown.bind(this));
    m(this, Yn, null);
    m(this, Mi, new Path2D());
    m(this, dn, !1);
    m(this, Ns, !1);
    m(this, Bs, !1);
    m(this, $s, null);
    m(this, Us, 0);
    m(this, Hs, 0);
    m(this, br, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, n) {
    Ft.initialize(e, n);
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.INK_THICKNESS:
        jt._defaultThickness = n;
        break;
      case at.INK_COLOR:
        jt._defaultColor = n;
        break;
      case at.INK_OPACITY:
        jt._defaultOpacity = n / 100;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case at.INK_THICKNESS:
        A(this, Rf, Xw).call(this, n);
        break;
      case at.INK_COLOR:
        A(this, Lf, Yw).call(this, n);
        break;
      case at.INK_OPACITY:
        A(this, kf, Kw).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.INK_THICKNESS, jt._defaultThickness], [at.INK_COLOR, jt._defaultColor || Ft._defaultLineColor], [at.INK_OPACITY, Math.round(jt._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[at.INK_THICKNESS, this.thickness || jt._defaultThickness], [at.INK_COLOR, this.color || jt._defaultColor || Ft._defaultLineColor], [at.INK_OPACITY, Math.round(100 * (this.opacity ?? jt._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (A(this, Fa, jd).call(this), A(this, Ma, zd).call(this)), this.isAttachedToDOM || (this.parent.add(this), A(this, wr, wo).call(this)), A(this, js, yl).call(this)));
  }
  remove() {
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, a(this, Yn) && (clearTimeout(a(this, Yn)), w(this, Yn, null)), a(this, $s).disconnect(), w(this, $s, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, n] = this.parentDimensions, i = this.width * e, s = this.height * n;
    this.setDimensions(i, s);
  }
  enableEditMode() {
    a(this, dn) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", a(this, Os)));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", a(this, Os)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    a(this, dn) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), w(this, dn, !0), this.div.classList.add("disabled"), A(this, js, yl).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || a(this, dn) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), A(this, Ff, Jw).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), A(this, Dh, xm).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), A(this, Oh, Cm).call(this, e);
  }
  canvasPointerleave(e) {
    A(this, Oh, Cm).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && a(this, dn);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, s, o, l] = A(this, If, Zw).call(this);
    if (this.setAt(i, s, 0, 0), this.setDims(o, l), A(this, Fa, jd).call(this), this.width) {
      const [c, d] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * d), this.setAt(e * c, n * d, this.width * c, this.height * d), w(this, Bs, !0), A(this, wr, wo).call(this), this.setDims(this.width * c, this.height * d), A(this, Di, Dr).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return A(this, Ma, zd).call(this), this.div;
  }
  setDimensions(e, n) {
    const i = Math.round(e), s = Math.round(n);
    if (a(this, Us) === i && a(this, Hs) === s)
      return;
    w(this, Us, i), w(this, Hs, s), this.canvas.style.visibility = "hidden";
    const [o, l] = this.parentDimensions;
    this.width = e / o, this.height = n / l, this.fixAndSetPosition(), a(this, dn) && A(this, Nh, Tm).call(this, e, n), A(this, wr, wo).call(this), A(this, Di, Dr).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(e, n, i) {
    var x, _, P;
    if (e instanceof xw)
      return null;
    const s = super.deserialize(e, n, i);
    s.thickness = e.thickness, s.color = Q.makeHexColor(...e.color), s.opacity = e.opacity;
    const [o, l] = s.pageDimensions, c = s.width * o, d = s.height * l, h = s.parentScale, f = e.thickness / 2;
    w(s, dn, !0), w(s, Us, Math.round(c)), w(s, Hs, Math.round(d));
    const {
      paths: g,
      rect: v,
      rotation: y
    } = e;
    for (let {
      bezier: L
    } of g) {
      L = A(x = jt, Uf, s1).call(x, L, v, y);
      const k = [];
      s.paths.push(k);
      let F = h * (L[0] - f), I = h * (L[1] - f);
      for (let C = 2, T = L.length; C < T; C += 6) {
        const O = h * (L[C] - f), D = h * (L[C + 1] - f), H = h * (L[C + 2] - f), j = h * (L[C + 3] - f), V = h * (L[C + 4] - f), Y = h * (L[C + 5] - f);
        k.push([[F, I], [O, D], [H, j], [V, Y]]), F = V, I = Y;
      }
      const M = A(this, $f, r1).call(this, k);
      s.bezierPath2D.push(M);
    }
    const E = A(_ = s, $h, Rm).call(_);
    return w(s, Ds, Math.max(Ft.MIN_SIZE, E[2] - E[0])), w(s, Ms, Math.max(Ft.MIN_SIZE, E[3] - E[1])), A(P = s, Nh, Tm).call(P, c, d), s;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), n = Ft._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: St.INK,
      color: n,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: A(this, Hf, o1).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
Ms = new WeakMap(), Ds = new WeakMap(), kh = new WeakMap(), Ih = new WeakMap(), Fh = new WeakMap(), Os = new WeakMap(), Yn = new WeakMap(), Mi = new WeakMap(), dn = new WeakMap(), Ns = new WeakMap(), Bs = new WeakMap(), $s = new WeakMap(), Us = new WeakMap(), Hs = new WeakMap(), br = new WeakMap(), Rf = new WeakSet(), Xw = function(e) {
  const n = (s) => {
    this.thickness = s, A(this, js, yl).call(this);
  }, i = this.thickness;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Lf = new WeakSet(), Yw = function(e) {
  const n = (s) => {
    this.color = s, A(this, Di, Dr).call(this);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, kf = new WeakSet(), Kw = function(e) {
  const n = (s) => {
    this.opacity = s, A(this, Di, Dr).call(this);
  };
  e /= 100;
  const i = this.opacity;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, If = new WeakSet(), Zw = function() {
  const {
    parentRotation: e,
    parentDimensions: [n, i]
  } = this;
  switch (e) {
    case 90:
      return [0, i, i, n];
    case 180:
      return [n, i, n, i];
    case 270:
      return [n, 0, i, n];
    default:
      return [0, 0, n, i];
  }
}, Mh = new WeakSet(), Sm = function() {
  const {
    ctx: e,
    color: n,
    opacity: i,
    thickness: s,
    parentScale: o,
    scaleFactor: l
  } = this;
  e.lineWidth = s * o / l, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${n}${BR(i)}`;
}, Ff = new WeakSet(), Jw = function(e, n) {
  this.canvas.addEventListener("contextmenu", Ge), this.canvas.addEventListener("pointerleave", a(this, Ih)), this.canvas.addEventListener("pointermove", a(this, kh)), this.canvas.addEventListener("pointerup", a(this, Fh)), this.canvas.removeEventListener("pointerdown", a(this, Os)), this.isEditing = !0, a(this, Bs) || (w(this, Bs, !0), A(this, wr, wo).call(this), this.thickness || (this.thickness = jt._defaultThickness), this.color || (this.color = jt._defaultColor || Ft._defaultLineColor), this.opacity ?? (this.opacity = jt._defaultOpacity)), this.currentPath.push([e, n]), w(this, Ns, !1), A(this, Mh, Sm).call(this), w(this, br, () => {
    A(this, Of, e1).call(this), a(this, br) && window.requestAnimationFrame(a(this, br));
  }), window.requestAnimationFrame(a(this, br));
}, Dh = new WeakSet(), xm = function(e, n) {
  const [i, s] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === i && n === s)
    return;
  const o = this.currentPath;
  let l = a(this, Mi);
  if (o.push([e, n]), w(this, Ns, !0), o.length <= 2) {
    l.moveTo(...o[0]), l.lineTo(e, n);
    return;
  }
  o.length === 3 && (w(this, Mi, l = new Path2D()), l.moveTo(...o[0])), A(this, Nf, n1).call(this, l, ...o.at(-3), ...o.at(-2), e, n);
}, Mf = new WeakSet(), Qw = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  a(this, Mi).lineTo(...e);
}, Df = new WeakSet(), t1 = function(e, n) {
  w(this, br, null), e = Math.min(Math.max(e, 0), this.canvas.width), n = Math.min(Math.max(n, 0), this.canvas.height), A(this, Dh, xm).call(this, e, n), A(this, Mf, Qw).call(this);
  let i;
  if (this.currentPath.length !== 1)
    i = A(this, Bf, i1).call(this);
  else {
    const d = [e, n];
    i = [[d, d.slice(), d.slice(), d]];
  }
  const s = a(this, Mi), o = this.currentPath;
  this.currentPath = [], w(this, Mi, new Path2D());
  const l = () => {
    this.allRawPaths.push(o), this.paths.push(i), this.bezierPath2D.push(s), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (A(this, Fa, jd).call(this), A(this, Ma, zd).call(this)), A(this, js, yl).call(this));
  };
  this.addCommands({
    cmd: l,
    undo: c,
    mustExec: !0
  });
}, Of = new WeakSet(), e1 = function() {
  if (!a(this, Ns))
    return;
  w(this, Ns, !1);
  const e = Math.ceil(this.thickness * this.parentScale), n = this.currentPath.slice(-3), i = n.map((l) => l[0]), s = n.map((l) => l[1]);
  Math.min(...i) - e, Math.max(...i) + e, Math.min(...s) - e, Math.max(...s) + e;
  const {
    ctx: o
  } = this;
  o.save(), o.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const l of this.bezierPath2D)
    o.stroke(l);
  o.stroke(a(this, Mi)), o.restore();
}, Nf = new WeakSet(), n1 = function(e, n, i, s, o, l, c) {
  const d = (n + s) / 2, h = (i + o) / 2, f = (s + l) / 2, g = (o + c) / 2;
  e.bezierCurveTo(d + 2 * (s - d) / 3, h + 2 * (o - h) / 3, f + 2 * (s - f) / 3, g + 2 * (o - g) / 3, f, g);
}, Bf = new WeakSet(), i1 = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const n = [];
  let i, [s, o] = e[0];
  for (i = 1; i < e.length - 2; i++) {
    const [v, y] = e[i], [E, x] = e[i + 1], _ = (v + E) / 2, P = (y + x) / 2, L = [s + 2 * (v - s) / 3, o + 2 * (y - o) / 3], k = [_ + 2 * (v - _) / 3, P + 2 * (y - P) / 3];
    n.push([[s, o], L, k, [_, P]]), [s, o] = [_, P];
  }
  const [l, c] = e[i], [d, h] = e[i + 1], f = [s + 2 * (l - s) / 3, o + 2 * (c - o) / 3], g = [d + 2 * (l - d) / 3, h + 2 * (c - h) / 3];
  return n.push([[s, o], f, g, [d, h]]), n;
}, Di = new WeakSet(), Dr = function() {
  if (this.isEmpty()) {
    A(this, Da, Vd).call(this);
    return;
  }
  A(this, Mh, Sm).call(this);
  const {
    canvas: e,
    ctx: n
  } = this;
  n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, e.width, e.height), A(this, Da, Vd).call(this);
  for (const i of this.bezierPath2D)
    n.stroke(i);
}, Oh = new WeakSet(), Cm = function(e) {
  this.canvas.removeEventListener("pointerleave", a(this, Ih)), this.canvas.removeEventListener("pointermove", a(this, kh)), this.canvas.removeEventListener("pointerup", a(this, Fh)), this.canvas.addEventListener("pointerdown", a(this, Os)), a(this, Yn) && clearTimeout(a(this, Yn)), w(this, Yn, setTimeout(() => {
    w(this, Yn, null), this.canvas.removeEventListener("contextmenu", Ge);
  }, 10)), A(this, Df, t1).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, Fa = new WeakSet(), jd = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, Ma = new WeakSet(), zd = function() {
  w(this, $s, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && this.setDimensions(n.width, n.height);
  })), a(this, $s).observe(this.div);
}, wr = new WeakSet(), wo = function() {
  if (!a(this, Bs))
    return;
  const [e, n] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * n), A(this, Da, Vd).call(this);
}, Nh = new WeakSet(), Tm = function(e, n) {
  const i = A(this, Oa, Gd).call(this), s = (e - i) / a(this, Ds), o = (n - i) / a(this, Ms);
  this.scaleFactor = Math.min(s, o);
}, Da = new WeakSet(), Vd = function() {
  const e = A(this, Oa, Gd).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, $f = new WeakSet(), r1 = function(e) {
  const n = new Path2D();
  for (let i = 0, s = e.length; i < s; i++) {
    const [o, l, c, d] = e[i];
    i === 0 && n.moveTo(...o), n.bezierCurveTo(l[0], l[1], c[0], c[1], d[0], d[1]);
  }
  return n;
}, Bh = new WeakSet(), Pm = function(e, n, i) {
  const [s, o, l, c] = n;
  switch (i) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] += s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = e[d + 1] + s, e[d + 1] = f + o;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] += o;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = l - e[d + 1], e[d + 1] = c - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Uf = new WeakSet(), s1 = function(e, n, i) {
  const [s, o, l, c] = n;
  switch (i) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] -= s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = e[d + 1] - o, e[d + 1] = f - s;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] -= o;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = c - e[d + 1], e[d + 1] = l - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Hf = new WeakSet(), o1 = function(e, n, i, s) {
  var h, f;
  const o = [], l = this.thickness / 2, c = e * n + l, d = e * i + l;
  for (const g of this.paths) {
    const v = [], y = [];
    for (let E = 0, x = g.length; E < x; E++) {
      const [_, P, L, k] = g[E];
      if (_[0] === k[0] && _[1] === k[1] && x === 1) {
        const j = e * _[0] + c, V = e * _[1] + d;
        v.push(j, V), y.push(j, V);
        break;
      }
      const F = e * _[0] + c, I = e * _[1] + d, M = e * P[0] + c, C = e * P[1] + d, T = e * L[0] + c, O = e * L[1] + d, D = e * k[0] + c, H = e * k[1] + d;
      E === 0 && (v.push(F, I), y.push(F, I)), v.push(M, C, T, O, D, H), y.push(M, C), E === x - 1 && y.push(D, H);
    }
    o.push({
      bezier: A(h = jt, Bh, Pm).call(h, v, s, this.rotation),
      points: A(f = jt, Bh, Pm).call(f, y, s, this.rotation)
    });
  }
  return o;
}, $h = new WeakSet(), Rm = function() {
  let e = 1 / 0, n = -1 / 0, i = 1 / 0, s = -1 / 0;
  for (const o of this.paths)
    for (const [l, c, d, h] of o) {
      const f = Q.bezierBoundingBox(...l, ...c, ...d, ...h);
      e = Math.min(e, f[0]), i = Math.min(i, f[1]), n = Math.max(n, f[2]), s = Math.max(s, f[3]);
    }
  return [e, i, n, s];
}, Oa = new WeakSet(), Gd = function() {
  return a(this, dn) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, js = new WeakSet(), yl = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!a(this, dn)) {
    A(this, Di, Dr).call(this);
    return;
  }
  const n = A(this, $h, Rm).call(this), i = A(this, Oa, Gd).call(this);
  w(this, Ds, Math.max(Ft.MIN_SIZE, n[2] - n[0])), w(this, Ms, Math.max(Ft.MIN_SIZE, n[3] - n[1]));
  const s = Math.ceil(i + a(this, Ds) * this.scaleFactor), o = Math.ceil(i + a(this, Ms) * this.scaleFactor), [l, c] = this.parentDimensions;
  this.width = s / l, this.height = o / c, this.setAspectRatio(s, o);
  const d = this.translationX, h = this.translationY;
  this.translationX = -n[0], this.translationY = -n[1], A(this, wr, wo).call(this), A(this, Di, Dr).call(this), w(this, Us, s), w(this, Hs, o), this.setDims(s, o);
  const f = e ? i / this.scaleFactor / 2 : 0;
  this.translate(d - this.translationX - f, h - this.translationY - f);
}, m(jt, $f), m(jt, Bh), m(jt, Uf), dt(jt, "_defaultColor", null), dt(jt, "_defaultOpacity", 1), dt(jt, "_defaultThickness", 1), dt(jt, "_type", "ink"), dt(jt, "_editorType", St.INK);
let _m = jt;
var Ae, Ee, Ar, Oi, Er, Na, Kn, zs, Zn, Tn, Uh, Vs, bl, Gs, wl, Ba, Wd, Hh, km, jf, a1, zf, l1, jh, Im, $a, qd, Vf, c1;
const Sl = class Sl extends Ft {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, Vs);
    m(this, Gs);
    m(this, Ba);
    m(this, Hh);
    m(this, jf);
    m(this, zf);
    m(this, jh);
    m(this, $a);
    m(this, Vf);
    m(this, Ae, null);
    m(this, Ee, null);
    m(this, Ar, null);
    m(this, Oi, null);
    m(this, Er, null);
    m(this, Na, "");
    m(this, Kn, null);
    m(this, zs, null);
    m(this, Zn, null);
    m(this, Tn, !1);
    m(this, Uh, !1);
    w(this, Oi, e.bitmapUrl), w(this, Er, e.bitmapFile);
  }
  static initialize(e, n) {
    Ft.initialize(e, n);
  }
  static get supportedTypes() {
    return Tt(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((n) => `image/${n}`));
  }
  static get supportedTypesStr() {
    return Tt(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, n) {
    n.pasteEditor(St.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  remove() {
    var e, n;
    a(this, Ee) && (w(this, Ae, null), this._uiManager.imageManager.deleteId(a(this, Ee)), (e = a(this, Kn)) == null || e.remove(), w(this, Kn, null), (n = a(this, zs)) == null || n.disconnect(), w(this, zs, null), a(this, Zn) && (clearTimeout(a(this, Zn)), w(this, Zn, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      a(this, Ee) && A(this, Ba, Wd).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (a(this, Ee) && a(this, Kn) === null && A(this, Ba, Wd).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(a(this, Ar) || a(this, Ae) || a(this, Oi) || a(this, Er) || a(this, Ee));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    if (this.width && (e = this.x, n = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), a(this, Ae) ? A(this, Hh, km).call(this) : A(this, Ba, Wd).call(this), this.width) {
      const [i, s] = this.parentDimensions;
      this.setAt(e * i, n * s, this.width * i, this.height * s);
    }
    return this.div;
  }
  getImageForAltText() {
    return a(this, Kn);
  }
  static deserialize(e, n, i) {
    if (e instanceof Cw)
      return null;
    const s = super.deserialize(e, n, i), {
      rect: o,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: d,
      accessibilityData: h
    } = e;
    c && i.imageManager.isValidId(c) ? w(s, Ee, c) : w(s, Oi, l), w(s, Tn, d);
    const [f, g] = s.pageDimensions;
    return s.width = (o[2] - o[0]) / f, s.height = (o[3] - o[1]) / g, h && (s.altTextData = h), s;
  }
  serialize(e = !1, n = null) {
    if (this.isEmpty())
      return null;
    const i = {
      annotationType: St.STAMP,
      bitmapId: a(this, Ee),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: a(this, Tn),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = A(this, $a, qd).call(this, !0), i.accessibilityData = this.altTextData, i;
    const {
      decorative: s,
      altText: o
    } = this.altTextData;
    if (!s && o && (i.accessibilityData = {
      type: "Figure",
      alt: o
    }), n === null)
      return i;
    n.stamps || (n.stamps = /* @__PURE__ */ new Map());
    const l = a(this, Tn) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!n.stamps.has(a(this, Ee)))
      n.stamps.set(a(this, Ee), {
        area: l,
        serialized: i
      }), i.bitmap = A(this, $a, qd).call(this, !1);
    else if (a(this, Tn)) {
      const c = n.stamps.get(a(this, Ee));
      l > c.area && (c.area = l, c.serialized.bitmap.close(), c.serialized.bitmap = A(this, $a, qd).call(this, !1));
    }
    return i;
  }
};
Ae = new WeakMap(), Ee = new WeakMap(), Ar = new WeakMap(), Oi = new WeakMap(), Er = new WeakMap(), Na = new WeakMap(), Kn = new WeakMap(), zs = new WeakMap(), Zn = new WeakMap(), Tn = new WeakMap(), Uh = new WeakMap(), Vs = new WeakSet(), bl = function(e, n = !1) {
  if (!e) {
    this.remove();
    return;
  }
  w(this, Ae, e.bitmap), n || (w(this, Ee, e.id), w(this, Tn, e.isSvg)), e.file && w(this, Na, e.file.name), A(this, Hh, km).call(this);
}, Gs = new WeakSet(), wl = function() {
  w(this, Ar, null), this._uiManager.enableWaiting(!1), a(this, Kn) && this.div.focus();
}, Ba = new WeakSet(), Wd = function() {
  if (a(this, Ee)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(a(this, Ee)).then((n) => A(this, Vs, bl).call(this, n, !0)).finally(() => A(this, Gs, wl).call(this));
    return;
  }
  if (a(this, Oi)) {
    const n = a(this, Oi);
    w(this, Oi, null), this._uiManager.enableWaiting(!0), w(this, Ar, this._uiManager.imageManager.getFromUrl(n).then((i) => A(this, Vs, bl).call(this, i)).finally(() => A(this, Gs, wl).call(this)));
    return;
  }
  if (a(this, Er)) {
    const n = a(this, Er);
    w(this, Er, null), this._uiManager.enableWaiting(!0), w(this, Ar, this._uiManager.imageManager.getFromFile(n).then((i) => A(this, Vs, bl).call(this, i)).finally(() => A(this, Gs, wl).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Sl.supportedTypesStr, w(this, Ar, new Promise((n) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const i = await this._uiManager.imageManager.getFromFile(e.files[0]);
        A(this, Vs, bl).call(this, i);
      }
      n();
    }), e.addEventListener("cancel", () => {
      this.remove(), n();
    });
  }).finally(() => A(this, Gs, wl).call(this))), e.click();
}, Hh = new WeakSet(), km = function() {
  const {
    div: e
  } = this;
  let {
    width: n,
    height: i
  } = a(this, Ae);
  const [s, o] = this.pageDimensions, l = 0.75;
  if (this.width)
    n = this.width * s, i = this.height * o;
  else if (n > l * s || i > l * o) {
    const f = Math.min(l * s / n, l * o / i);
    n *= f, i *= f;
  }
  const [c, d] = this.parentDimensions;
  this.setDims(n * c / s, i * d / o), this._uiManager.enableWaiting(!1);
  const h = w(this, Kn, document.createElement("canvas"));
  e.append(h), e.hidden = !1, A(this, jh, Im).call(this, n, i), A(this, Vf, c1).call(this), a(this, Uh) || (this.parent.addUndoableEditor(this), w(this, Uh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), a(this, Na) && h.setAttribute("aria-label", a(this, Na));
}, jf = new WeakSet(), a1 = function(e, n) {
  var l;
  const [i, s] = this.parentDimensions;
  this.width = e / i, this.height = n / s, this.setDims(e, n), (l = this._initialOptions) != null && l.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, a(this, Zn) !== null && clearTimeout(a(this, Zn)), w(this, Zn, setTimeout(() => {
    w(this, Zn, null), A(this, jh, Im).call(this, e, n);
  }, 200));
}, zf = new WeakSet(), l1 = function(e, n) {
  const {
    width: i,
    height: s
  } = a(this, Ae);
  let o = i, l = s, c = a(this, Ae);
  for (; o > 2 * e || l > 2 * n; ) {
    const d = o, h = l;
    o > 2 * e && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2)), l > 2 * n && (l = l >= 16384 ? Math.floor(l / 2) - 1 : Math.ceil(l / 2));
    const f = new OffscreenCanvas(o, l);
    f.getContext("2d").drawImage(c, 0, 0, d, h, 0, 0, o, l), c = f.transferToImageBitmap();
  }
  return c;
}, jh = new WeakSet(), Im = function(e, n) {
  e = Math.ceil(e), n = Math.ceil(n);
  const i = a(this, Kn);
  if (!i || i.width === e && i.height === n)
    return;
  i.width = e, i.height = n;
  const s = a(this, Tn) ? a(this, Ae) : A(this, zf, l1).call(this, e, n);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(e, n).getContext("2d");
    c.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, n), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, e, n).data,
        width: e,
        height: n,
        channels: 4
      }
    }).then((d) => {
      const h = (d == null ? void 0 : d.output) || "";
      this.parent && h && !this.hasAltText() && (this.altTextData = {
        altText: h,
        decorative: !1
      });
    });
  }
  const o = i.getContext("2d");
  o.filter = this._uiManager.hcmFilter, o.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, n);
}, $a = new WeakSet(), qd = function(e) {
  if (e) {
    if (a(this, Tn)) {
      const s = this._uiManager.imageManager.getSvgUrl(a(this, Ee));
      if (s)
        return s;
    }
    const n = document.createElement("canvas");
    return {
      width: n.width,
      height: n.height
    } = a(this, Ae), n.getContext("2d").drawImage(a(this, Ae), 0, 0), n.toDataURL();
  }
  if (a(this, Tn)) {
    const [n, i] = this.pageDimensions, s = Math.round(this.width * n * Cr.PDF_TO_CSS_UNITS), o = Math.round(this.height * i * Cr.PDF_TO_CSS_UNITS), l = new OffscreenCanvas(s, o);
    return l.getContext("2d").drawImage(a(this, Ae), 0, 0, a(this, Ae).width, a(this, Ae).height, 0, 0, s, o), l.transferToImageBitmap();
  }
  return structuredClone(a(this, Ae));
}, Vf = new WeakSet(), c1 = function() {
  w(this, zs, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && A(this, jf, a1).call(this, n.width, n.height);
  })), a(this, zs).observe(this.div);
}, dt(Sl, "_type", "stamp"), dt(Sl, "_editorType", St.STAMP);
let Lm = Sl;
var Ws, Ua, Jn, qs, Ni, Bi, $i, en, _r, Ha, ja, De, it, Sr, Gf, h1, zh, Mm, Vh, Dm, Gh, Om, za, Xd;
const gn = class gn {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: n,
    accessibilityManager: i,
    annotationLayer: s,
    drawLayer: o,
    textLayer: l,
    viewport: c,
    l10n: d
  }) {
    m(this, Gf);
    m(this, zh);
    m(this, Vh);
    m(this, Gh);
    m(this, za);
    m(this, Ws, void 0);
    m(this, Ua, !1);
    m(this, Jn, null);
    m(this, qs, null);
    m(this, Ni, null);
    m(this, Bi, null);
    m(this, $i, null);
    m(this, en, /* @__PURE__ */ new Map());
    m(this, _r, !1);
    m(this, Ha, !1);
    m(this, ja, !1);
    m(this, De, null);
    m(this, it, void 0);
    const h = [...a(gn, Sr).values()];
    if (!gn._initialized) {
      gn._initialized = !0;
      for (const f of h)
        f.initialize(d, t);
    }
    t.registerEditorTypes(h), w(this, it, t), this.pageIndex = e, this.div = n, w(this, Ws, i), w(this, Jn, s), this.viewport = c, w(this, De, l), this.drawLayer = o, a(this, it).addLayer(this);
  }
  get isEmpty() {
    return a(this, en).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && a(this, it).getMode() === St.NONE;
  }
  updateToolbar(t) {
    a(this, it).updateToolbar(t);
  }
  updateMode(t = a(this, it).getMode()) {
    switch (A(this, za, Xd).call(this), t) {
      case St.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case St.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case St.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const n of a(gn, Sr).values())
      e.toggle(`${n._type}Editing`, t === n._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = a(this, De)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (a(this, it).getMode() !== St.INK)
      return;
    if (!t) {
      for (const n of a(this, en).values())
        if (n.isEmpty()) {
          n.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    a(this, it).setEditingState(t);
  }
  addCommands(t) {
    a(this, it).addCommands(t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = a(this, Jn)) == null || e.div.classList.toggle("disabled", !t);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const n of a(this, en).values())
      n.enableEditing(), n.show(!0), n.annotationElementId && (a(this, it).removeChangedExistingAnnotation(n), t.add(n.annotationElementId));
    if (!a(this, Jn))
      return;
    const e = a(this, Jn).getEditableAnnotations();
    for (const n of e) {
      if (n.hide(), a(this, it).isDeletedAnnotationElement(n.data.id) || t.has(n.data.id))
        continue;
      const i = this.deserialize(n);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    w(this, ja, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const s of a(this, en).values())
      if (s.disableEditing(), !!s.annotationElementId) {
        if (s.serialize() !== null) {
          t.set(s.annotationElementId, s);
          continue;
        } else
          e.set(s.annotationElementId, s);
        (i = this.getEditableAnnotation(s.annotationElementId)) == null || i.show(), s.remove();
      }
    if (a(this, Jn)) {
      const s = a(this, Jn).getEditableAnnotations();
      for (const o of s) {
        const {
          id: l
        } = o.data;
        if (a(this, it).isDeletedAnnotationElement(l))
          continue;
        let c = e.get(l);
        if (c) {
          c.resetAnnotationElement(o), c.show(!1), o.show();
          continue;
        }
        c = t.get(l), c && (a(this, it).addChangedExistingAnnotation(c), c.renderAnnotationElement(o), c.show(!1)), o.show();
      }
    }
    A(this, za, Xd).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: n
    } = this.div;
    for (const s of a(gn, Sr).values())
      n.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), w(this, ja, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = a(this, Jn)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    a(this, it).getActive() !== t && a(this, it).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    this.div.tabIndex = -1, (t = a(this, De)) != null && t.div && !a(this, Bi) && (w(this, Bi, A(this, Gf, h1).bind(this)), a(this, De).div.addEventListener("pointerdown", a(this, Bi)), a(this, De).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = a(this, De)) != null && t.div && a(this, Bi) && (a(this, De).div.removeEventListener("pointerdown", a(this, Bi)), w(this, Bi, null), a(this, De).div.classList.remove("highlighting"));
  }
  enableClick() {
    a(this, Ni) || (w(this, Ni, this.pointerdown.bind(this)), w(this, qs, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", a(this, Ni)), this.div.addEventListener("pointerup", a(this, qs)));
  }
  disableClick() {
    a(this, Ni) && (this.div.removeEventListener("pointerdown", a(this, Ni)), this.div.removeEventListener("pointerup", a(this, qs)), w(this, Ni, null), w(this, qs, null));
  }
  attach(t) {
    a(this, en).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && a(this, it).isDeletedAnnotationElement(e) && a(this, it).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    a(this, en).delete(t.id), (e = a(this, Ws)) == null || e.removePointerInTextLayer(t.contentDiv), !a(this, ja) && t.annotationElementId && a(this, it).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), a(this, it).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, a(this, Ha) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (a(this, it).addDeletedAnnotationElement(t.annotationElementId), Ft.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), a(this, it).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), a(this, it).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var n;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !a(this, $i) && (t._focusEventsAllowed = !1, w(this, $i, setTimeout(() => {
      w(this, $i, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0
      }), e.focus());
    }, 0))), t._structTreeParentId = (n = a(this, Ws)) == null ? void 0 : n.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), n = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !1
    });
  }
  getNextId() {
    return a(this, it).getId();
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = a(this, zh, Mm)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    a(this, it).updateToolbar(t), a(this, it).updateMode(t);
    const {
      offsetX: n,
      offsetY: i
    } = A(this, Gh, Om).call(this), s = this.getNextId(), o = A(this, Vh, Dm).call(this, {
      parent: this,
      id: s,
      x: n,
      y: i,
      uiManager: a(this, it),
      isCentered: !0,
      ...e
    });
    o && this.add(o);
  }
  deserialize(t) {
    var e;
    return ((e = a(gn, Sr).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, a(this, it))) || null;
  }
  createAndAddNewEditor(t, e, n = {}) {
    const i = this.getNextId(), s = A(this, Vh, Dm).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: a(this, it),
      isCentered: e,
      ...n
    });
    return s && this.add(s), s;
  }
  addNewEditor() {
    this.createAndAddNewEditor(A(this, Gh, Om).call(this), !0);
  }
  setSelected(t) {
    a(this, it).setSelected(t);
  }
  toggleSelected(t) {
    a(this, it).toggleSelected(t);
  }
  isSelected(t) {
    return a(this, it).isSelected(t);
  }
  unselect(t) {
    a(this, it).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Ve.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && a(this, _r)) {
      if (w(this, _r, !1), !a(this, Ua)) {
        w(this, Ua, !0);
        return;
      }
      if (a(this, it).getMode() === St.STAMP) {
        a(this, it).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (a(this, it).getMode() === St.HIGHLIGHT && this.enableTextSelection(), a(this, _r)) {
      w(this, _r, !1);
      return;
    }
    const {
      isMac: e
    } = Ve.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    w(this, _r, !0);
    const n = a(this, it).getActive();
    w(this, Ua, !n || n.isEmpty());
  }
  findNewParent(t, e, n) {
    const i = a(this, it).findParent(e, n);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = a(this, it).getActive()) == null ? void 0 : t.parent) === this && (a(this, it).commitOrRemove(), a(this, it).setActiveEditor(null)), a(this, $i) && (clearTimeout(a(this, $i)), w(this, $i, null));
    for (const n of a(this, en).values())
      (e = a(this, Ws)) == null || e.removePointerInTextLayer(n.contentDiv), n.setParent(null), n.isAttachedToDOM = !1, n.div.remove();
    this.div = null, a(this, en).clear(), a(this, it).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, to(this.div, t);
    for (const e of a(this, it).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    a(this, it).commitOrRemove(), A(this, za, Xd).call(this);
    const e = this.viewport.rotation, n = t.rotation;
    if (this.viewport = t, to(this.div, {
      rotation: n
    }), e !== n)
      for (const i of a(this, en).values())
        i.rotate(n);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return a(this, it).viewParameters.realScale;
  }
};
Ws = new WeakMap(), Ua = new WeakMap(), Jn = new WeakMap(), qs = new WeakMap(), Ni = new WeakMap(), Bi = new WeakMap(), $i = new WeakMap(), en = new WeakMap(), _r = new WeakMap(), Ha = new WeakMap(), ja = new WeakMap(), De = new WeakMap(), it = new WeakMap(), Sr = new WeakMap(), Gf = new WeakSet(), h1 = function(t) {
  if (a(this, it).unselectAll(), t.target === a(this, De).div) {
    const {
      isMac: e
    } = Ve.platform;
    if (t.button !== 0 || t.ctrlKey && e)
      return;
    a(this, it).showAllEditors("highlight", !0, !0), a(this, De).div.classList.add("free"), cu.startHighlighting(this, a(this, it).direction === "ltr", t), a(this, De).div.addEventListener("pointerup", () => {
      a(this, De).div.classList.remove("free");
    }, {
      once: !0
    }), t.preventDefault();
  }
}, zh = new WeakSet(), Mm = function() {
  return a(gn, Sr).get(a(this, it).getMode());
}, Vh = new WeakSet(), Dm = function(t) {
  const e = a(this, zh, Mm);
  return e ? new e.prototype.constructor(t) : null;
}, Gh = new WeakSet(), Om = function() {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = this.div.getBoundingClientRect(), s = Math.max(0, t), o = Math.max(0, e), l = Math.min(window.innerWidth, t + n), c = Math.min(window.innerHeight, e + i), d = (s + l) / 2 - t, h = (o + c) / 2 - e, [f, g] = this.viewport.rotation % 180 === 0 ? [d, h] : [h, d];
  return {
    offsetX: f,
    offsetY: g
  };
}, za = new WeakSet(), Xd = function() {
  w(this, Ha, !0);
  for (const t of a(this, en).values())
    t.isEmpty() && t.remove();
  w(this, Ha, !1);
}, dt(gn, "_initialized", !1), m(gn, Sr, new Map([um, _m, Lm, cu].map((t) => [t._editorType, t])));
let Fm = gn;
var Qn, Wh, oe, xr, qh, Bm, Xh, $m, Wf, d1;
const ge = class ge {
  constructor({
    pageIndex: t
  }) {
    m(this, Xh);
    m(this, Wf);
    m(this, Qn, null);
    m(this, Wh, 0);
    m(this, oe, /* @__PURE__ */ new Map());
    m(this, xr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!a(this, Qn)) {
      w(this, Qn, t);
      return;
    }
    if (a(this, Qn) !== t) {
      if (a(this, oe).size > 0)
        for (const e of a(this, oe).values())
          e.remove(), t.append(e);
      w(this, Qn, t);
    }
  }
  static get _svgFactory() {
    return Tt(this, "_svgFactory", new u0());
  }
  highlight(t, e, n, i = !1) {
    const s = qe(this, Wh)._++, o = A(this, Xh, $m).call(this, t.box);
    o.classList.add("highlight"), t.free && o.classList.add("free");
    const l = ge._svgFactory.createElement("defs");
    o.append(l);
    const c = ge._svgFactory.createElement("path");
    l.append(c);
    const d = `path_p${this.pageIndex}_${s}`;
    c.setAttribute("id", d), c.setAttribute("d", t.toSVGPath()), i && a(this, xr).set(s, c);
    const h = A(this, Wf, d1).call(this, l, d), f = ge._svgFactory.createElement("use");
    return o.append(f), o.setAttribute("fill", e), o.setAttribute("fill-opacity", n), f.setAttribute("href", `#${d}`), a(this, oe).set(s, o), {
      id: s,
      clipPathId: `url(#${h})`
    };
  }
  highlightOutline(t) {
    const e = qe(this, Wh)._++, n = A(this, Xh, $m).call(this, t.box);
    n.classList.add("highlightOutline");
    const i = ge._svgFactory.createElement("defs");
    n.append(i);
    const s = ge._svgFactory.createElement("path");
    i.append(s);
    const o = `path_p${this.pageIndex}_${e}`;
    s.setAttribute("id", o), s.setAttribute("d", t.toSVGPath()), s.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (t.free) {
      n.classList.add("free");
      const h = ge._svgFactory.createElement("mask");
      i.append(h), l = `mask_p${this.pageIndex}_${e}`, h.setAttribute("id", l), h.setAttribute("maskUnits", "objectBoundingBox");
      const f = ge._svgFactory.createElement("rect");
      h.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const g = ge._svgFactory.createElement("use");
      h.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const c = ge._svgFactory.createElement("use");
    n.append(c), c.setAttribute("href", `#${o}`), l && c.setAttribute("mask", `url(#${l})`);
    const d = c.cloneNode();
    return n.append(d), c.classList.add("mainOutline"), d.classList.add("secondaryOutline"), a(this, oe).set(e, n), e;
  }
  finalizeLine(t, e) {
    const n = a(this, xr).get(t);
    a(this, xr).delete(t), this.updateBox(t, e.box), n.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    a(this, oe).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  removeFreeHighlight(t) {
    this.remove(t), a(this, xr).delete(t);
  }
  updatePath(t, e) {
    a(this, xr).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var n;
    A(n = ge, qh, Bm).call(n, a(this, oe).get(t), e);
  }
  show(t, e) {
    a(this, oe).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    a(this, oe).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    a(this, oe).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    a(this, oe).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    a(this, oe).get(t).classList.add(e);
  }
  removeClass(t, e) {
    a(this, oe).get(t).classList.remove(e);
  }
  remove(t) {
    a(this, Qn) !== null && (a(this, oe).get(t).remove(), a(this, oe).delete(t));
  }
  destroy() {
    w(this, Qn, null);
    for (const t of a(this, oe).values())
      t.remove();
    a(this, oe).clear();
  }
};
Qn = new WeakMap(), Wh = new WeakMap(), oe = new WeakMap(), xr = new WeakMap(), qh = new WeakSet(), Bm = function(t, {
  x: e = 0,
  y: n = 0,
  width: i = 1,
  height: s = 1
} = {}) {
  const {
    style: o
  } = t;
  o.top = `${100 * n}%`, o.left = `${100 * e}%`, o.width = `${100 * i}%`, o.height = `${100 * s}%`;
}, Xh = new WeakSet(), $m = function(t) {
  var n;
  const e = ge._svgFactory.create(1, 1, !0);
  return a(this, Qn).append(e), e.setAttribute("aria-hidden", !0), A(n = ge, qh, Bm).call(n, e, t), e;
}, Wf = new WeakSet(), d1 = function(t, e) {
  const n = ge._svgFactory.createElement("clipPath");
  t.append(n);
  const i = `clip_${e}`;
  n.setAttribute("id", i), n.setAttribute("clipPathUnits", "objectBoundingBox");
  const s = ge._svgFactory.createElement("use");
  return n.append(s), s.setAttribute("href", `#${e}`), s.classList.add("clip"), i;
}, m(ge, qh);
let Nm = ge;
var gk = rt.AbortException, mk = rt.AnnotationEditorLayer, vk = rt.AnnotationEditorParamsType, yk = rt.AnnotationEditorType, bk = rt.AnnotationEditorUIManager, u1 = rt.AnnotationLayer, f1 = rt.AnnotationMode, wk = rt.CMapCompressionType, Ak = rt.ColorPicker, Ek = rt.DOMSVGFactory, _k = rt.DrawLayer, Sk = rt.FeatureTest, w0 = rt.GlobalWorkerOptions, xk = rt.ImageKind, Ck = rt.InvalidPDFException, Tk = rt.MissingPDFException, Pk = rt.OPS, Rk = rt.Outliner, Lk = rt.PDFDataRangeTransport, kk = rt.PDFDateString, Ik = rt.PDFWorker, Fk = rt.PasswordResponses, Mk = rt.PermissionFlag, Dk = rt.PixelsPerInch, Ok = rt.RenderingCancelledException, p1 = rt.TextLayer, Nk = rt.UnexpectedResponseException, Bk = rt.Util, $k = rt.VerbosityLevel, Uk = rt.XfaLayer, Hk = rt.build, jk = rt.createValidAbsoluteUrl, zk = rt.fetchData, g1 = rt.getDocument, Vk = rt.getFilenameFromUrl, Gk = rt.getPdfFilenameFromUrl, Wk = rt.getXfaPageViewport, qk = rt.isDataScheme, Xk = rt.isPdfFile, Yk = rt.noContextMenu, Kk = rt.normalizeUnicode, Zk = rt.renderTextLayer, Jk = rt.setLayerDimensions, Qk = rt.shadow, tI = rt.updateTextLayer, m1 = rt.version;
const eI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: gk,
  AnnotationEditorLayer: mk,
  AnnotationEditorParamsType: vk,
  AnnotationEditorType: yk,
  AnnotationEditorUIManager: bk,
  AnnotationLayer: u1,
  AnnotationMode: f1,
  CMapCompressionType: wk,
  ColorPicker: Ak,
  DOMSVGFactory: Ek,
  DrawLayer: _k,
  FeatureTest: Sk,
  GlobalWorkerOptions: w0,
  ImageKind: xk,
  InvalidPDFException: Ck,
  MissingPDFException: Tk,
  OPS: Pk,
  Outliner: Rk,
  PDFDataRangeTransport: Lk,
  PDFDateString: kk,
  PDFWorker: Ik,
  PasswordResponses: Fk,
  PermissionFlag: Mk,
  PixelsPerInch: Dk,
  RenderingCancelledException: Ok,
  TextLayer: p1,
  UnexpectedResponseException: Nk,
  Util: Bk,
  VerbosityLevel: $k,
  XfaLayer: Uk,
  build: Hk,
  createValidAbsoluteUrl: jk,
  fetchData: zk,
  getDocument: g1,
  getFilenameFromUrl: Vk,
  getPdfFilenameFromUrl: Gk,
  getXfaPageViewport: Wk,
  isDataScheme: qk,
  isPdfFile: Xk,
  noContextMenu: Yk,
  normalizeUnicode: Kk,
  renderTextLayer: Zk,
  setLayerDimensions: Jk,
  shadow: Qk,
  updateTextLayer: tI,
  version: m1
}, Symbol.toStringTag, { value: "Module" }));
var he = function(r, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return r.concat(s || Array.prototype.slice.call(t));
}, nI = ["onCopy", "onCut", "onPaste"], iI = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], rI = ["onFocus", "onBlur"], sI = ["onInput", "onInvalid", "onReset", "onSubmit"], oI = ["onLoad", "onError"], aI = ["onKeyDown", "onKeyPress", "onKeyUp"], lI = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], cI = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], hI = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], dI = ["onSelect"], uI = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], fI = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], pI = ["onScroll"], gI = ["onWheel"], mI = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], vI = ["onTransitionEnd"], yI = ["onToggle"], bI = ["onChange"], wI = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he([], nI, !0), iI, !0), rI, !0), sI, !0), oI, !0), aI, !0), lI, !0), cI, !0), hI, !0), dI, !0), uI, !0), fI, !0), pI, !0), gI, !0), mI, !0), vI, !0), bI, !0), yI, !0);
function v1(r, t) {
  var e = {};
  return wI.forEach(function(n) {
    var i = r[n];
    i && (t ? e[n] = function(s) {
      return i(s, t(n));
    } : e[n] = i);
  }), e;
}
function nd(r) {
  var t = !1, e = new Promise(function(n, i) {
    r.then(function(s) {
      return !t && n(s);
    }).catch(function(s) {
      return !t && i(s);
    });
  });
  return {
    promise: e,
    cancel: function() {
      t = !0;
    }
  };
}
function y1(r) {
  var t, e, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && (e = y1(r[t])) && (n && (n += " "), n += e);
    else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function yp() {
  for (var r, t, e = 0, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = y1(r)) && (n && (n += " "), n += t);
  return n;
}
var AI = ct.env.NODE_ENV === "production", tg = "Invariant failed";
function $t(r, t) {
  if (!r) {
    if (AI)
      throw new Error(tg);
    var e = typeof t == "function" ? t() : t, n = e ? "".concat(tg, ": ").concat(e) : tg;
    throw new Error(n);
  }
}
var EI = ct.env.NODE_ENV !== "production", b1 = function() {
};
if (EI) {
  var _I = function(t, e) {
    var n = arguments.length;
    e = new Array(n > 1 ? n - 1 : 0);
    for (var i = 1; i < n; i++)
      e[i - 1] = arguments[i];
    var s = 0, o = "Warning: " + t.replace(/%s/g, function() {
      return e[s++];
    });
    typeof console < "u" && console.error(o);
    try {
      throw new Error(o);
    } catch {
    }
  };
  b1 = function(r, t, e) {
    var n = arguments.length;
    e = new Array(n > 2 ? n - 2 : 0);
    for (var i = 2; i < n; i++)
      e[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    r || _I.apply(null, [t].concat(e));
  };
}
var SI = b1;
const Ce = /* @__PURE__ */ Jv(SI);
var Ov = Object.prototype.hasOwnProperty;
function Nv(r, t, e) {
  for (e of r.keys())
    if (Co(e, t))
      return e;
}
function Co(r, t) {
  var e, n, i;
  if (r === t)
    return !0;
  if (r && t && (e = r.constructor) === t.constructor) {
    if (e === Date)
      return r.getTime() === t.getTime();
    if (e === RegExp)
      return r.toString() === t.toString();
    if (e === Array) {
      if ((n = r.length) === t.length)
        for (; n-- && Co(r[n], t[n]); )
          ;
      return n === -1;
    }
    if (e === Set) {
      if (r.size !== t.size)
        return !1;
      for (n of r)
        if (i = n, i && typeof i == "object" && (i = Nv(t, i), !i) || !t.has(i))
          return !1;
      return !0;
    }
    if (e === Map) {
      if (r.size !== t.size)
        return !1;
      for (n of r)
        if (i = n[0], i && typeof i == "object" && (i = Nv(t, i), !i) || !Co(n[1], t.get(i)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      r = new Uint8Array(r), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((n = r.byteLength) === t.byteLength)
        for (; n-- && r.getInt8(n) === t.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === t.byteLength)
        for (; n-- && r[n] === t[n]; )
          ;
      return n === -1;
    }
    if (!e || typeof r == "object") {
      n = 0;
      for (e in r)
        if (Ov.call(r, e) && ++n && !Ov.call(t, e) || !(e in t) || !Co(r[e], t[e]))
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return r !== r && t !== t;
}
const w1 = qf(null);
function To({ children: r, type: t }) {
  return $("div", { className: `react-pdf__message react-pdf__message--${t}`, children: r });
}
const xI = "noopener noreferrer nofollow";
class CI {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return $t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    $t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  goToDestination(t) {
    return new Promise((e) => {
      $t(this.pdfDocument, "PDF document not loaded."), $t(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      $t(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const n = e[0];
      new Promise((i) => {
        $t(this.pdfDocument, "PDF document not loaded."), n instanceof Object ? this.pdfDocument.getPageIndex(n).then((s) => {
          i(s);
        }).catch(() => {
          $t(!1, `"${n}" is not a valid page reference.`);
        }) : typeof n == "number" ? i(n) : $t(!1, `"${n}" is not a valid destination reference.`);
      }).then((i) => {
        const s = i + 1;
        $t(this.pdfViewer, "PDF viewer is not initialized."), $t(s >= 1 && s <= this.pagesCount, `"${s}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: i,
          pageNumber: s
        });
      });
    });
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
  goToPage(t) {
    const e = t - 1;
    $t(this.pdfViewer, "PDF viewer is not initialized."), $t(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  addLinkAttributes(t, e, n) {
    t.href = e, t.rel = this.externalLinkRel || xI, t.target = n ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const Bv = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, bp = typeof document < "u", A1 = bp && window.location.protocol === "file:";
function TI(r) {
  return typeof r < "u";
}
function kr(r) {
  return TI(r) && r !== null;
}
function PI(r) {
  return typeof r == "string";
}
function RI(r) {
  return r instanceof ArrayBuffer;
}
function LI(r) {
  return $t(bp, "isBlob can only be used in a browser environment"), r instanceof Blob;
}
function Um(r) {
  return PI(r) && /^data:/.test(r);
}
function $v(r) {
  $t(Um(r), "Invalid data URI.");
  const [t = "", e = ""] = r.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function kI() {
  return bp && window.devicePixelRatio || 1;
}
const E1 = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Uv() {
  Ce(!A1, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${E1}`);
}
function II() {
  Ce(!A1, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${E1}`);
}
function io(r) {
  r && r.cancel && r.cancel();
}
function Hm(r, t) {
  return Object.defineProperty(r, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(r, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), r;
}
function FI(r) {
  return r.name === "RenderingCancelledException";
}
function MI(r) {
  return new Promise((t, e) => {
    const n = new FileReader();
    n.onload = () => {
      if (!n.result)
        return e(new Error("Error while reading a file."));
      t(n.result);
    }, n.onerror = (i) => {
      if (!i.target)
        return e(new Error("Error while reading a file."));
      const { error: s } = i.target;
      if (!s)
        return e(new Error("Error while reading a file."));
      switch (s.code) {
        case s.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case s.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case s.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, n.readAsArrayBuffer(r);
  });
}
function DI(r, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return r;
  }
}
function Za() {
  return zm(DI, { value: void 0, error: void 0 });
}
var OI = function(r, t, e, n) {
  function i(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function l(h) {
      try {
        d(n.next(h));
      } catch (f) {
        o(f);
      }
    }
    function c(h) {
      try {
        d(n.throw(h));
      } catch (f) {
        o(f);
      }
    }
    function d(h) {
      h.done ? s(h.value) : i(h.value).then(l, c);
    }
    d((n = n.apply(r, t || [])).next());
  });
}, Hv = function(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const { PDFDataRangeTransport: NI } = eI, BI = (r, t) => {
  switch (t) {
    case Bv.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      r(e);
      break;
    }
    case Bv.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      r(e);
      break;
    }
  }
};
function jv(r) {
  return typeof r == "object" && r !== null && ("data" in r || "range" in r || "url" in r);
}
const $I = jm(function(t, e) {
  var { children: n, className: i, error: s = "Failed to load PDF file.", externalLinkRel: o, externalLinkTarget: l, file: c, inputRef: d, imageResourcesPath: h, loading: f = "Loading PDF…", noData: g = "No PDF file specified.", onItemClick: v, onLoadError: y, onLoadProgress: E, onLoadSuccess: x, onPassword: _ = BI, onSourceError: P, onSourceSuccess: L, options: k, renderMode: F, rotate: I } = t, M = Hv(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [C, T] = Za(), { value: O, error: D } = C, [H, j] = Za(), { value: V, error: Y } = H, Z = Rn(new CI()), B = Rn([]), G = Rn(void 0), W = Rn(void 0);
  c && c !== G.current && jv(c) && (Ce(!Co(c, G.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), G.current = c), k && k !== W.current && (Ce(!Co(k, W.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), W.current = k);
  const bt = Rn({
    // Handling jumping to internal links target
    scrollPageIntoView: (X) => {
      const { dest: mt, pageNumber: Pt, pageIndex: Ut = Pt - 1 } = X;
      if (v) {
        v({ dest: mt, pageIndex: Ut, pageNumber: Pt });
        return;
      }
      const Kt = B.current[Ut];
      if (Kt) {
        Kt.scrollIntoView();
        return;
      }
      Ce(!1, `An internal link leading to page ${Pt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  Zv(e, () => ({
    linkService: Z,
    pages: B,
    viewer: bt
  }), []);
  function ut() {
    L && L();
  }
  function z() {
    D && (Ce(!1, D.toString()), P && P(D));
  }
  function nt() {
    T({ type: "RESET" });
  }
  _t(nt, [c, T]);
  const tt = Va(() => OI(this, void 0, void 0, function* () {
    if (!c)
      return null;
    if (typeof c == "string")
      return Um(c) ? { data: $v(c) } : (Uv(), { url: c });
    if (c instanceof NI)
      return { range: c };
    if (RI(c))
      return { data: c };
    if (bp && LI(c))
      return { data: yield MI(c) };
    if ($t(typeof c == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), $t(jv(c), "Invalid parameter object: need either .data, .range or .url"), "url" in c && typeof c.url == "string") {
      if (Um(c.url)) {
        const { url: X } = c, mt = Hv(c, ["url"]), Pt = $v(X);
        return Object.assign({ data: Pt }, mt);
      }
      Uv();
    }
    return c;
  }), [c]);
  _t(() => {
    const X = nd(tt());
    return X.promise.then((mt) => {
      T({ type: "RESOLVE", value: mt });
    }).catch((mt) => {
      T({ type: "REJECT", error: mt });
    }), () => {
      io(X);
    };
  }, [tt, T]), _t(
    () => {
      if (!(typeof O > "u")) {
        if (O === !1) {
          z();
          return;
        }
        ut();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  );
  function et() {
    V && (x && x(V), B.current = new Array(V.numPages), Z.current.setDocument(V));
  }
  function lt() {
    Y && (Ce(!1, Y.toString()), y && y(Y));
  }
  function K() {
    j({ type: "RESET" });
  }
  _t(K, [j, O]);
  function gt() {
    if (!O)
      return;
    const X = Object.assign(Object.assign({}, O), k), mt = g1(X);
    E && (mt.onProgress = E), _ && (mt.onPassword = _);
    const Pt = mt;
    return Pt.promise.then((Ut) => {
      j({ type: "RESOLVE", value: Ut });
    }).catch((Ut) => {
      Pt.destroyed || j({ type: "REJECT", error: Ut });
    }), () => {
      Pt.destroy();
    };
  }
  _t(
    gt,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [k, j, O]
  ), _t(
    () => {
      if (!(typeof V > "u")) {
        if (V === !1) {
          lt();
          return;
        }
        et();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [V]
  );
  function q() {
    Z.current.setViewer(bt.current), Z.current.setExternalLinkRel(o), Z.current.setExternalLinkTarget(l);
  }
  _t(q, [o, l]);
  function J(X, mt) {
    B.current[X] = mt;
  }
  function ht(X) {
    delete B.current[X];
  }
  const ft = fn(() => ({
    imageResourcesPath: h,
    linkService: Z.current,
    onItemClick: v,
    pdf: V,
    registerPage: J,
    renderMode: F,
    rotate: I,
    unregisterPage: ht
  }), [h, v, V, F, I]), st = fn(() => v1(M, () => V), [M, V]);
  function xt() {
    return $(w1.Provider, { value: ft, children: n });
  }
  function wt() {
    return c ? V == null ? $(To, { type: "loading", children: typeof f == "function" ? f() : f }) : V === !1 ? $(To, { type: "error", children: typeof s == "function" ? s() : s }) : xt() : $(To, { type: "no-data", children: typeof g == "function" ? g() : g });
  }
  return $("div", Object.assign({
    className: yp("react-pdf__Document", i),
    // Assertion is needed for React 18 compatibility
    ref: d,
    style: {
      "--scale-factor": "1"
    }
  }, st, { children: wt() }));
});
function _1() {
  return Re(w1);
}
function S1() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = r.filter(Boolean);
  if (e.length <= 1) {
    var n = e[0];
    return n || null;
  }
  return function(s) {
    e.forEach(function(o) {
      typeof o == "function" ? o(s) : o && (o.current = s);
    });
  };
}
const x1 = qf(null), C1 = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, UI = /^H(\d+)$/;
function HI(r) {
  return r in C1;
}
function wp(r) {
  return "children" in r;
}
function T1(r) {
  return wp(r) ? r.children.length === 1 && 0 in r.children && "id" in r.children[0] : !1;
}
function jI(r) {
  const t = {};
  if (wp(r)) {
    const { role: e } = r, n = e.match(UI);
    if (n)
      t.role = "heading", t["aria-level"] = Number(n[1]);
    else if (HI(e)) {
      const i = C1[e];
      i && (t.role = i);
    }
  }
  return t;
}
function P1(r) {
  const t = {};
  if (wp(r)) {
    if (r.alt !== void 0 && (t["aria-label"] = r.alt), r.lang !== void 0 && (t.lang = r.lang), T1(r)) {
      const [e] = r.children;
      if (e) {
        const n = P1(e);
        return Object.assign(Object.assign({}, t), n);
      }
    }
  } else
    "id" in r && (t["aria-owns"] = r.id);
  return t;
}
function zI(r) {
  return r ? Object.assign(Object.assign({}, jI(r)), P1(r)) : null;
}
function R1({ className: r, node: t }) {
  const e = fn(() => zI(t), [t]), n = fn(() => !wp(t) || T1(t) ? null : t.children.map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    $(R1, { node: i }, s)
  )), [t]);
  return $("span", Object.assign({ className: r }, e, { children: n }));
}
function Ap() {
  return Re(x1);
}
function VI() {
  const r = Ap();
  $t(r, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = r, [n, i] = Za(), { value: s, error: o } = n, { customTextRenderer: l, page: c } = r;
  function d() {
    s && e && e(s);
  }
  function h() {
    o && (Ce(!1, o.toString()), t && t(o));
  }
  function f() {
    i({ type: "RESET" });
  }
  _t(f, [i, c]);
  function g() {
    if (l || !c)
      return;
    const v = nd(c.getStructTree()), y = v;
    return v.promise.then((E) => {
      i({ type: "RESOLVE", value: E });
    }).catch((E) => {
      i({ type: "REJECT", error: E });
    }), () => io(y);
  }
  return _t(g, [l, c, i]), _t(
    () => {
      if (s !== void 0) {
        if (s === !1) {
          h();
          return;
        }
        d();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s]
  ), s ? $(R1, { className: "react-pdf__Page__structTree structTree", node: s }) : null;
}
const zv = f1;
function GI(r) {
  const t = Ap();
  $t(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, t), r), { _className: n, canvasBackground: i, devicePixelRatio: s = kI(), onRenderError: o, onRenderSuccess: l, page: c, renderForms: d, renderTextLayer: h, rotate: f, scale: g } = e, { canvasRef: v } = r;
  $t(c, "Attempted to render page canvas, but no page was specified.");
  const y = Rn(null);
  function E() {
    c && l && l(Hm(c, g));
  }
  function x(F) {
    FI(F) || (Ce(!1, F.toString()), o && o(F));
  }
  const _ = fn(() => c.getViewport({ scale: g * s, rotation: f }), [s, c, f, g]), P = fn(() => c.getViewport({ scale: g, rotation: f }), [c, f, g]);
  function L() {
    if (!c)
      return;
    c.cleanup();
    const { current: F } = y;
    if (!F)
      return;
    F.width = _.width, F.height = _.height, F.style.width = `${Math.floor(P.width)}px`, F.style.height = `${Math.floor(P.height)}px`, F.style.visibility = "hidden";
    const I = {
      annotationMode: d ? zv.ENABLE_FORMS : zv.ENABLE,
      canvasContext: F.getContext("2d", { alpha: !1 }),
      viewport: _
    };
    i && (I.background = i);
    const M = c.render(I), C = M;
    return M.promise.then(() => {
      F.style.visibility = "", E();
    }).catch(x), () => io(C);
  }
  _t(
    L,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      i,
      y,
      s,
      c,
      d,
      _,
      P
    ]
  );
  const k = Va(() => {
    const { current: F } = y;
    F && (F.width = 0, F.height = 0);
  }, [y]);
  return _t(() => k, [k]), $("canvas", { className: `${n}__canvas`, dir: "ltr", ref: S1(v, y), style: {
    display: "block",
    userSelect: "none"
  }, children: h ? $(VI, {}) : null });
}
function WI(r) {
  return "str" in r;
}
function qI() {
  const r = Ap();
  $t(r, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: n, onRenderTextLayerError: i, onRenderTextLayerSuccess: s, page: o, pageIndex: l, pageNumber: c, rotate: d, scale: h } = r;
  $t(o, "Attempted to load page text content, but no page was specified.");
  const [f, g] = Za(), { value: v, error: y } = f, E = Rn(null), x = Rn(void 0);
  Ce(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function _() {
    v && n && n(v);
  }
  function P() {
    y && (Ce(!1, y.toString()), e && e(y));
  }
  function L() {
    g({ type: "RESET" });
  }
  _t(L, [o, g]);
  function k() {
    if (!o)
      return;
    const D = nd(o.getTextContent()), H = D;
    return D.promise.then((j) => {
      g({ type: "RESOLVE", value: j });
    }).catch((j) => {
      g({ type: "REJECT", error: j });
    }), () => io(H);
  }
  _t(k, [o, g]), _t(
    () => {
      if (v !== void 0) {
        if (v === !1) {
          P();
          return;
        }
        _();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  );
  const F = Va(() => {
    s && s();
  }, [s]), I = Va((D) => {
    Ce(!1, D.toString()), i && i(D);
  }, [i]);
  function M() {
    const D = x.current;
    D && D.classList.add("active");
  }
  function C() {
    const D = x.current;
    D && D.classList.remove("active");
  }
  const T = fn(() => o.getViewport({ scale: h, rotation: d }), [o, d, h]);
  function O() {
    if (!o || !v)
      return;
    const { current: D } = E;
    if (!D)
      return;
    D.innerHTML = "";
    const H = o.streamTextContent({ includeMarkedContent: !0 }), j = {
      container: D,
      textContentSource: H,
      viewport: T
    }, V = new p1(j), Y = V;
    return V.render().then(() => {
      const Z = document.createElement("div");
      Z.className = "endOfContent", D.append(Z), x.current = Z;
      const B = D.querySelectorAll('[role="presentation"]');
      if (t) {
        let G = 0;
        v.items.forEach((W, bt) => {
          if (!WI(W))
            return;
          const ut = B[G];
          if (!ut)
            return;
          const z = t(Object.assign({
            pageIndex: l,
            pageNumber: c,
            itemIndex: bt
          }, W));
          ut.innerHTML = z, G += W.str && W.hasEOL ? 2 : 1;
        });
      }
      F();
    }).catch(I), () => io(Y);
  }
  return V1(O, [
    t,
    I,
    F,
    o,
    l,
    c,
    v,
    T
  ]), // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  $("div", { className: yp("react-pdf__Page__textContent", "textLayer"), onMouseUp: C, onMouseDown: M, ref: E });
}
function XI() {
  const r = _1(), t = Ap();
  $t(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, r), t), { imageResourcesPath: n, linkService: i, onGetAnnotationsError: s, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: h, renderForms: f, rotate: g, scale: v = 1 } = e;
  $t(h, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), $t(d, "Attempted to load page annotations, but no page was specified."), $t(i, "Attempted to load page annotations, but no linkService was specified.");
  const [y, E] = Za(), { value: x, error: _ } = y, P = Rn(null);
  Ce(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function L() {
    x && o && o(x);
  }
  function k() {
    _ && (Ce(!1, _.toString()), s && s(_));
  }
  function F() {
    E({ type: "RESET" });
  }
  _t(F, [E, d]);
  function I() {
    if (!d)
      return;
    const D = nd(d.getAnnotations()), H = D;
    return D.promise.then((j) => {
      E({ type: "RESOLVE", value: j });
    }).catch((j) => {
      E({ type: "REJECT", error: j });
    }), () => {
      io(H);
    };
  }
  _t(I, [E, d, f]), _t(
    () => {
      if (x !== void 0) {
        if (x === !1) {
          k();
          return;
        }
        L();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  );
  function M() {
    c && c();
  }
  function C(D) {
    Ce(!1, `${D}`), l && l(D);
  }
  const T = fn(() => d.getViewport({ scale: v, rotation: g }), [d, g, v]);
  function O() {
    if (!h || !d || !i || !x)
      return;
    const { current: D } = P;
    if (!D)
      return;
    const H = T.clone({ dontFlip: !0 }), j = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      div: D,
      l10n: null,
      // TODO: Implement this
      page: d,
      viewport: H
    }, V = {
      annotations: x,
      annotationStorage: h.annotationStorage,
      div: D,
      imageResourcesPath: n,
      linkService: i,
      page: d,
      renderForms: f,
      viewport: H
    };
    D.innerHTML = "";
    try {
      new u1(j).render(V), M();
    } catch (Y) {
      C(Y);
    }
    return () => {
    };
  }
  return _t(
    O,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, n, i, d, f, T]
  ), $("div", { className: yp("react-pdf__Page__annotations", "annotationLayer"), ref: P });
}
var YI = function(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const Vv = 1;
function KI(r) {
  const t = _1(), e = Object.assign(Object.assign({}, t), r), { _className: n = "react-pdf__Page", _enableRegisterUnregisterPage: i = !0, canvasBackground: s, canvasRef: o, children: l, className: c, customRenderer: d, customTextRenderer: h, devicePixelRatio: f, error: g = "Failed to load the page.", height: v, inputRef: y, loading: E = "Loading page…", noData: x = "No page specified.", onGetAnnotationsError: _, onGetAnnotationsSuccess: P, onGetStructTreeError: L, onGetStructTreeSuccess: k, onGetTextError: F, onGetTextSuccess: I, onLoadError: M, onLoadSuccess: C, onRenderAnnotationLayerError: T, onRenderAnnotationLayerSuccess: O, onRenderError: D, onRenderSuccess: H, onRenderTextLayerError: j, onRenderTextLayerSuccess: V, pageIndex: Y, pageNumber: Z, pdf: B, registerPage: G, renderAnnotationLayer: W = !0, renderForms: bt = !1, renderMode: ut = "canvas", renderTextLayer: z = !0, rotate: nt, scale: tt = Vv, unregisterPage: et, width: lt } = e, K = YI(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [gt, q] = Za(), { value: J, error: ht } = gt, ft = Rn(null);
  $t(B, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const st = kr(Z) ? Z - 1 : Y ?? null, xt = Z ?? (kr(Y) ? Y + 1 : null), wt = nt ?? (J ? J.rotate : null), X = fn(() => {
    if (!J)
      return null;
    let b = 1;
    const u = tt ?? Vv;
    if (lt || v) {
      const p = J.getViewport({ scale: 1, rotation: wt });
      lt ? b = lt / p.width : v && (b = v / p.height);
    }
    return u * b;
  }, [v, J, wt, tt, lt]);
  function mt() {
    return () => {
      kr(st) && i && et && et(st);
    };
  }
  _t(mt, [i, B, st, et]);
  function Pt() {
    if (C) {
      if (!J || !X)
        return;
      C(Hm(J, X));
    }
    if (i && G) {
      if (!kr(st) || !ft.current)
        return;
      G(st, ft.current);
    }
  }
  function Ut() {
    ht && (Ce(!1, ht.toString()), M && M(ht));
  }
  function Kt() {
    q({ type: "RESET" });
  }
  _t(Kt, [q, B, st]);
  function Gt() {
    if (!B || !xt)
      return;
    const b = nd(B.getPage(xt)), u = b;
    return b.promise.then((p) => {
      q({ type: "RESOLVE", value: p });
    }).catch((p) => {
      q({ type: "REJECT", error: p });
    }), () => io(u);
  }
  _t(Gt, [q, B, st, xt, G]), _t(
    () => {
      if (J !== void 0) {
        if (J === !1) {
          Ut();
          return;
        }
        Pt();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [J, X]
  );
  const Lt = fn(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    J && kr(st) && xt && kr(wt) && kr(X) ? {
      _className: n,
      canvasBackground: s,
      customTextRenderer: h,
      devicePixelRatio: f,
      onGetAnnotationsError: _,
      onGetAnnotationsSuccess: P,
      onGetStructTreeError: L,
      onGetStructTreeSuccess: k,
      onGetTextError: F,
      onGetTextSuccess: I,
      onRenderAnnotationLayerError: T,
      onRenderAnnotationLayerSuccess: O,
      onRenderError: D,
      onRenderSuccess: H,
      onRenderTextLayerError: j,
      onRenderTextLayerSuccess: V,
      page: J,
      pageIndex: st,
      pageNumber: xt,
      renderForms: bt,
      renderTextLayer: z,
      rotate: wt,
      scale: X
    } : null
  ), [
    n,
    s,
    h,
    f,
    _,
    P,
    L,
    k,
    F,
    I,
    T,
    O,
    D,
    H,
    j,
    V,
    J,
    st,
    xt,
    bt,
    z,
    wt,
    X
  ]), kt = fn(() => v1(K, () => J && (X ? Hm(J, X) : void 0)), [K, J, X]), Wt = `${st}@${X}/${wt}`;
  function ot() {
    switch (ut) {
      case "custom":
        return $t(d, 'renderMode was set to "custom", but no customRenderer was passed.'), $(d, {}, `${Wt}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return $(GI, { canvasRef: o }, `${Wt}_canvas`);
    }
  }
  function Le() {
    return z ? $(qI, {}, `${Wt}_text`) : null;
  }
  function ke() {
    return W ? $(XI, {}, `${Wt}_annotations`) : null;
  }
  function ce() {
    return We(x1.Provider, { value: Lt, children: [ot(), Le(), ke(), l] });
  }
  function sn() {
    return xt ? B === null || J === void 0 || J === null ? $(To, { type: "loading", children: typeof E == "function" ? E() : E }) : B === !1 || J === !1 ? $(To, { type: "error", children: typeof g == "function" ? g() : g }) : ce() : $(To, { type: "no-data", children: typeof x == "function" ? x() : x });
  }
  return $("div", Object.assign({
    className: yp(n, c),
    "data-page-number": xt,
    // Assertion is needed for React 18 compatibility
    ref: S1(y, ft),
    style: {
      "--scale-factor": `${X}`,
      backgroundColor: s || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    }
  }, kt, { children: sn() }));
}
II();
w0.workerSrc = "pdf.worker.mjs";
const L1 = "SET_ZOOM_LEVEL", eg = (r) => ({
  type: L1,
  value: r
}), k1 = "SET_PDF_PAGINATED", ZI = (r) => ({
  type: k1,
  value: r
}), I1 = "SET_NUM_PAGES", Gv = (r) => ({
  type: I1,
  value: r
}), F1 = "SET_CURRENT_PAGE", M1 = "SET_CURRENT_MAIN_STATE", Wv = (r) => ({
  type: F1,
  value: r
}), Qi = {
  defaultZoomLevel: 1,
  zoomLevel: 1,
  zoomJump: 0.1,
  paginated: !0,
  numPages: 0,
  currentPage: 1
}, JI = (r = Qi, t) => {
  switch (t.type) {
    case L1: {
      const { value: e } = t;
      return { ...r, zoomLevel: e };
    }
    case k1: {
      const { value: e } = t;
      return { ...r, paginated: e };
    }
    case I1: {
      const { value: e } = t;
      return { ...r, numPages: e };
    }
    case F1: {
      const { value: e } = t;
      return { ...r, currentPage: e };
    }
    case M1: {
      const { value: e } = t;
      return { ...r, mainState: e };
    }
    default:
      return r;
  }
}, ro = qf({ state: Qi, dispatch: () => null }), QI = ({
  children: r,
  mainState: t
}) => {
  var i, s, o, l, c, d, h;
  const [e, n] = zm(JI, {
    ...Qi,
    defaultZoomLevel: ((s = (i = t.config) == null ? void 0 : i.pdfZoom) == null ? void 0 : s.defaultZoom) ?? Qi.defaultZoomLevel,
    zoomLevel: ((l = (o = t.config) == null ? void 0 : o.pdfZoom) == null ? void 0 : l.defaultZoom) ?? Qi.zoomLevel,
    zoomJump: ((d = (c = t.config) == null ? void 0 : c.pdfZoom) == null ? void 0 : d.zoomJump) ?? Qi.zoomJump,
    paginated: (h = t.config) != null && h.pdfVerticalScrollByDefault ? !1 : Qi.paginated,
    mainState: t
  });
  return _t(() => {
    n({
      type: M1,
      value: t
    });
  }, [t]), /* @__PURE__ */ $(ro.Provider, { value: { state: e, dispatch: n }, children: r });
}, D1 = ({ pageNum: r }) => {
  const {
    state: { mainState: t, paginated: e, zoomLevel: n, numPages: i, currentPage: s }
  } = Re(ro), { t: o } = ao(), l = (t == null ? void 0 : t.rendererRect) || null, c = r ?? s;
  return /* @__PURE__ */ We(t2, { id: "pdf-page-wrapper", $lastPage: c >= i, children: [
    !e && /* @__PURE__ */ $(e2, { id: "pdf-page-info", children: o("pdfPluginPageNumber", {
      currentPage: c,
      allPagesCount: i
    }) }),
    /* @__PURE__ */ $(
      KI,
      {
        pageNumber: c || s,
        scale: n,
        height: ((l == null ? void 0 : l.height) ?? 100) - 100,
        width: ((l == null ? void 0 : l.width) ?? 100) - 100,
        loading: o("pdfPluginLoading")
      }
    )
  ] });
}, t2 = yt.div`
  margin: ${(r) => r.$lastPage ? "20px 0" : void 0};
`, e2 = yt.div`
  padding: 0 0 10px 10px;
  color: ${(r) => r.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, n2 = () => {
  const {
    state: { numPages: r }
  } = Re(ro), t = [];
  for (let e = 0; e < r; e++)
    t.push(/* @__PURE__ */ $(D1, { pageNum: e + 1 }, e + 1));
  return /* @__PURE__ */ $(Kv, { children: t });
}, i2 = () => {
  const {
    state: { mainState: r, paginated: t },
    dispatch: e
  } = Re(ro), { t: n } = ao(), i = (r == null ? void 0 : r.currentDocument) || null;
  return _t(() => {
    e(Gv(Qi.numPages));
  }, [i]), !i || i.fileData === void 0 ? null : /* @__PURE__ */ $(
    r2,
    {
      file: i.fileData,
      onLoadSuccess: ({ numPages: s }) => e(Gv(s)),
      loading: /* @__PURE__ */ $("span", { children: n("pdfPluginLoading") }),
      children: t ? /* @__PURE__ */ $(D1, {}) : /* @__PURE__ */ $(n2, {})
    }
  );
}, r2 = yt($I)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`, s2 = (r) => /* @__PURE__ */ $(O1, { ...r, reverse: !0 }), o2 = (r) => /* @__PURE__ */ $(O1, { ...r }), O1 = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      viewBox: "0 0 12 12",
      version: "1.1",
      children: /* @__PURE__ */ $(
        "g",
        {
          id: "Icons",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ $("g", { id: "Rounded", transform: "translate(-548.000000, -1000.000000)", children: /* @__PURE__ */ $("g", { id: "AV", transform: "translate(100.000000, 852.000000)", children: /* @__PURE__ */ $(
            "g",
            {
              id: "-Round-/-AV-/-skip_next",
              transform: "translate(442.000000, 142.000000)",
              children: /* @__PURE__ */ We("g", { children: [
                /* @__PURE__ */ $(
                  "rect",
                  {
                    id: "Rectangle-Copy-52",
                    x: "0",
                    y: "0",
                    width: "24",
                    height: "24"
                  }
                ),
                /* @__PURE__ */ $(
                  "path",
                  {
                    d: "M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z",
                    id: "icon_color",
                    fill: t || "#aaa"
                  }
                )
              ] })
            }
          ) }) })
        }
      )
    }
  );
}, a2 = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ We(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      id: "Layer_1",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ $(
          "path",
          {
            d: "M20.57,9.43A8,8,0,0,0,5.26,10,5,5,0,1,0,5,20h5V18H5a3,3,0,0,1,0-6,3.1,3.1,0,0,1,.79.12l1.12.31.14-1.15a6,6,0,0,1,11.74-.82l.15.54.54.16A3.46,3.46,0,0,1,22,14.5,3.5,3.5,0,0,1,18.5,18H16v2h2.5A5.48,5.48,0,0,0,20.57,9.43Z",
            fill: t || "#aaa"
          }
        ),
        /* @__PURE__ */ $(
          "polygon",
          {
            points: "12 11 12 15.59 10.71 14.29 9.29 15.71 13 19.41 16.71 15.71 15.29 14.29 14 15.59 14 11 12 11",
            fill: t || "#aaa"
          }
        )
      ]
    }
  );
}, l2 = (r) => /* @__PURE__ */ $(N1, { ...r }), c2 = (r) => /* @__PURE__ */ $(N1, { ...r, reverse: !0 }), N1 = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      viewBox: "0 0 32 32",
      version: "1.1",
      children: /* @__PURE__ */ $(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ $("g", { id: "search-plus-icon", fill: t || "#aaa", children: /* @__PURE__ */ $(
            "path",
            {
              id: "search-plus",
              d: n ? "M 13 13 L 16 13 L 19 13 L 19 16 L 16 16 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z" : "M 13 13 L 13 10 L 16 10 L 16 13 L 19 13 L 19 16 L 16 16 L 16 19 L 13 19 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
            }
          ) })
        }
      )
    }
  );
}, h2 = (r) => {
  const { color: t, size: e } = r;
  return /* @__PURE__ */ $("svg", { width: e || "100%", height: e || "100%", viewBox: "0 0 24 24", children: /* @__PURE__ */ $(
    "path",
    {
      fill: t || "#aaa",
      d: "M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
    }
  ) });
}, d2 = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(90deg)" : ""}` },
      version: "1.1",
      id: "Scroll_1",
      viewBox: "0 0 297 297",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ $(
        "path",
        {
          fill: t || "#aaa",
          d: `M206.004,200.723h-31.231V96.277h31.231c0.005,0,0.014,0,0.019,0c5.289,0,9.575-4.287,9.575-9.574
  c0-2.342-0.841-4.488-2.236-6.151L156.168,3.851C154.36,1.428,151.515,0,148.492,0c-3.023,0-5.868,1.428-7.675,3.851L83.302,80.98
  c-2.166,2.902-2.507,6.779-0.883,10.017c1.624,3.236,4.936,5.28,8.559,5.28h31.231v104.445H90.978c-3.623,0-6.934,2.044-8.559,5.28
  c-1.624,3.237-1.283,7.114,0.883,10.017l57.513,77.129c1.808,2.424,4.652,3.852,7.675,3.852c3.023,0,5.868-1.428,7.676-3.852
  l57.514-77.129c2.164-2.902,2.507-6.779,0.883-10.017C212.938,202.767,209.627,200.723,206.004,200.723z`
        }
      )
    }
  );
}, u2 = () => {
  const {
    state: { currentPage: r, numPages: t },
    dispatch: e
  } = Re(ro), { t: n } = ao();
  return /* @__PURE__ */ We(f2, { id: "pdf-pagination", children: [
    /* @__PURE__ */ $(
      B1,
      {
        id: "pdf-pagination-prev",
        onClick: () => e(Wv(r - 1)),
        disabled: r === 1,
        children: /* @__PURE__ */ $(s2, { color: "#000", size: "50%" })
      }
    ),
    /* @__PURE__ */ $(g2, { id: "pdf-pagination-info", children: n("pdfPluginPageNumber", {
      currentPage: r,
      allPagesCount: t
    }) }),
    /* @__PURE__ */ $(
      p2,
      {
        id: "pdf-pagination-next",
        onClick: () => e(Wv(r + 1)),
        disabled: r >= t,
        children: /* @__PURE__ */ $(o2, { color: "#000", size: "50%" })
      }
    )
  ] });
}, f2 = yt.div`
  display: flex;
  align-items: center;
`, B1 = yt(np)`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, p2 = yt(B1)`
  margin: 0 20px 0 5px;
`, g2 = yt.div`
  color: ${(r) => r.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, m2 = () => {
  if (!Re(ro))
    throw new Error("usePDFControls must be used within a PDFContext");
  const {
    state: {
      mainState: t,
      paginated: e,
      zoomLevel: n,
      numPages: i,
      zoomJump: s,
      defaultZoomLevel: o
    },
    dispatch: l
  } = Re(ro);
  return {
    currentDocument: (t == null ? void 0 : t.currentDocument) || null,
    zoomLevel: n,
    paginated: e,
    numPages: i,
    defaultZoomLevel: o,
    zoomIn: () => l(eg(n + s)),
    zoomOut: () => l(eg(n - s)),
    resetZoom: () => l(eg(o)),
    togglePagination: () => l(ZI(!e))
  };
}, v2 = () => {
  const { t: r } = ao(), {
    currentDocument: t,
    zoomLevel: e,
    paginated: n,
    numPages: i,
    defaultZoomLevel: s,
    zoomIn: o,
    zoomOut: l,
    resetZoom: c,
    togglePagination: d
  } = m2();
  return /* @__PURE__ */ We(y2, { id: "pdf-controls", children: [
    n && i > 1 && /* @__PURE__ */ $(u2, {}),
    (t == null ? void 0 : t.fileData) && /* @__PURE__ */ $(
      b2,
      {
        id: "pdf-download",
        href: t == null ? void 0 : t.fileData,
        download: (t == null ? void 0 : t.fileName) || (t == null ? void 0 : t.uri),
        title: r("downloadButtonLabel"),
        children: /* @__PURE__ */ $(a2, { color: "#000", size: "75%" })
      }
    ),
    /* @__PURE__ */ $(md, { id: "pdf-zoom-out", onMouseDown: l, children: /* @__PURE__ */ $(c2, { color: "#000", size: "80%" }) }),
    /* @__PURE__ */ $(md, { id: "pdf-zoom-in", onMouseDown: o, children: /* @__PURE__ */ $(l2, { color: "#000", size: "80%" }) }),
    /* @__PURE__ */ $(
      md,
      {
        id: "pdf-zoom-reset",
        onMouseDown: c,
        disabled: e === s,
        children: /* @__PURE__ */ $(h2, { color: "#000", size: "70%" })
      }
    ),
    i > 1 && /* @__PURE__ */ $(
      md,
      {
        id: "pdf-toggle-pagination",
        onMouseDown: d,
        children: /* @__PURE__ */ $(
          d2,
          {
            color: "#000",
            size: "70%",
            reverse: n
          }
        )
      }
    )
  ] });
}, y2 = yt.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(r) => r.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`, md = yt(np)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, b2 = yt(ub)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
w0.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${m1}/build/pdf.worker.min.mjs`
).toString();
const A0 = ({ mainState: r }) => /* @__PURE__ */ $(QI, { mainState: r, children: /* @__PURE__ */ We(w2, { id: "pdf-renderer", "data-testid": "pdf-renderer", children: [
  /* @__PURE__ */ $(v2, {}),
  /* @__PURE__ */ $(i2, {})
] }) });
A0.fileTypes = ["pdf", "application/pdf"];
A0.weight = 0;
const w2 = yt.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* width */
  &::-webkit-scrollbar {
    ${(r) => r.theme.disableThemeScrollbar ? "" : "width: 10px"};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(r) => r.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(r) => r.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(r) => r.theme.primary};
  }
`, A2 = yt(Gi)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`, E0 = (r) => /* @__PURE__ */ $(A2, { ...r });
E0.fileTypes = ["png", "image/png"];
E0.weight = 0;
let Hi, nn, hu = [];
const E2 = () => {
  var r = ze(2, 0);
  if (r === 18761)
    nn = !0;
  else if (r === 19789)
    nn = !1;
  else
    throw TypeError("Invalid byte order value.");
  return nn;
}, _2 = () => {
  if (ze(2, 2) !== 42)
    throw RangeError("You forgot your towel!");
  return !0;
}, S2 = (r) => {
  var t = {
    // TIFF Baseline
    315: "Artist",
    258: "BitsPerSample",
    265: "CellLength",
    264: "CellWidth",
    320: "ColorMap",
    259: "Compression",
    33432: "Copyright",
    306: "DateTime",
    338: "ExtraSamples",
    266: "FillOrder",
    289: "FreeByteCounts",
    288: "FreeOffsets",
    291: "GrayResponseCurve",
    290: "GrayResponseUnit",
    316: "HostComputer",
    270: "ImageDescription",
    257: "ImageLength",
    256: "ImageWidth",
    271: "Make",
    281: "MaxSampleValue",
    280: "MinSampleValue",
    272: "Model",
    254: "NewSubfileType",
    274: "Orientation",
    262: "PhotometricInterpretation",
    284: "PlanarConfiguration",
    296: "ResolutionUnit",
    278: "RowsPerStrip",
    277: "SamplesPerPixel",
    305: "Software",
    279: "StripByteCounts",
    273: "StripOffsets",
    255: "SubfileType",
    263: "Threshholding",
    282: "XResolution",
    283: "YResolution",
    // TIFF Extended
    326: "BadFaxLines",
    327: "CleanFaxData",
    343: "ClipPath",
    328: "ConsecutiveBadFaxLines",
    433: "Decode",
    434: "DefaultImageColor",
    269: "DocumentName",
    336: "DotRange",
    321: "HalftoneHints",
    346: "Indexed",
    347: "JPEGTables",
    285: "PageName",
    297: "PageNumber",
    317: "Predictor",
    319: "PrimaryChromaticities",
    532: "ReferenceBlackWhite",
    339: "SampleFormat",
    559: "StripRowCounts",
    330: "SubIFDs",
    292: "T4Options",
    293: "T6Options",
    325: "TileByteCounts",
    323: "TileLength",
    324: "TileOffsets",
    322: "TileWidth",
    301: "TransferFunction",
    318: "WhitePoint",
    344: "XClipPathUnits",
    286: "XPosition",
    529: "YCbCrCoefficients",
    531: "YCbCrPositioning",
    530: "YCbCrSubSampling",
    345: "YClipPathUnits",
    287: "YPosition",
    // EXIF
    37378: "ApertureValue",
    40961: "ColorSpace",
    36868: "DateTimeDigitized",
    36867: "DateTimeOriginal",
    34665: "Exif IFD",
    36864: "ExifVersion",
    33434: "ExposureTime",
    41728: "FileSource",
    37385: "Flash",
    40960: "FlashpixVersion",
    33437: "FNumber",
    42016: "ImageUniqueID",
    37384: "LightSource",
    37500: "MakerNote",
    37377: "ShutterSpeedValue",
    37510: "UserComment",
    // IPTC
    33723: "IPTC",
    // ICC
    34675: "ICC Profile",
    // XMP
    700: "XMP",
    // GDAL
    42112: "GDAL_METADATA",
    42113: "GDAL_NODATA",
    // Photoshop
    34377: "Photoshop"
  }, e;
  return r in t ? e = t[r] : e = "Tag" + r, e;
}, x2 = (r) => {
  var t = {
    1: "BYTE",
    2: "ASCII",
    3: "SHORT",
    4: "LONG",
    5: "RATIONAL",
    6: "SBYTE",
    7: "UNDEFINED",
    8: "SSHORT",
    9: "SLONG",
    10: "SRATIONAL",
    11: "FLOAT",
    12: "DOUBLE"
  }, e;
  return r in t && (e = t[r]), e;
}, C2 = (r) => {
  var t;
  return ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(r) !== -1 ? t = 1 : ["SHORT", "SSHORT"].indexOf(r) !== -1 ? t = 2 : ["LONG", "SLONG", "FLOAT"].indexOf(r) !== -1 ? t = 4 : ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(r) !== -1 && (t = 8), t;
}, T2 = (r, t, e) => {
  e = e || 0;
  var n = Math.floor(e / 8), i = t + n, s = e + r, o = 32 - r;
  if (s <= 0)
    throw RangeError("No bits requested");
  if (s <= 8)
    var l = 24 + e, c = Hi.getUint8(i, nn);
  else if (s <= 16)
    var l = 16 + e, c = Hi.getUint16(i, nn);
  else if (s <= 32)
    var l = e, c = Hi.getUint32(i, nn);
  else
    throw RangeError("Too many bits requested");
  var d = {
    bits: c << l >>> o,
    byteOffset: i + Math.floor(s / 8),
    bitOffset: s % 8
  };
  return d;
}, ze = (r, t) => {
  if (r <= 0)
    throw RangeError("No bytes requested");
  if (r <= 1)
    return Hi.getUint8(t, nn);
  if (r <= 2)
    return Hi.getUint16(t, nn);
  if (r <= 3)
    return Hi.getUint32(t, nn) >>> 8;
  if (r <= 4)
    return Hi.getUint32(t, nn);
  throw RangeError("Too many bytes requested");
}, P2 = (r, t, e, n) => {
  var i = [], s = C2(t), o = s * e;
  if (o <= 4) {
    if (nn === !1)
      var l = n >>> (4 - s) * 8;
    else
      var l = n;
    i.push(l);
  } else
    for (var c = 0; c < e; c++) {
      var d = s * c;
      if (s >= 8)
        if (["RATIONAL", "SRATIONAL"].indexOf(t) !== -1)
          i.push(ze(4, n + d)), i.push(ze(4, n + d + 4));
        else
          throw TypeError("Can't handle this field type or size");
      else
        i.push(ze(s, n + d));
    }
  return t === "ASCII" && i.forEach(function(h, f, g) {
    g[f] = String.fromCharCode(h);
  }), i;
}, Ir = (r, t) => {
  var e = Math.pow(2, 8 - t);
  return Math.floor(r * e + (e - 1));
}, qv = (r, t, e, n) => (typeof n > "u" && (n = 1), "rgba(" + r + ", " + t + ", " + e + ", " + n + ")"), $1 = (r) => {
  for (var t = ze(2, r), e = [], n = r + 2, i = 0; i < t; n += 12, i++) {
    var s = ze(2, n), o = ze(2, n + 2), l = ze(4, n + 4), c = ze(4, n + 8), d = S2(s), h = x2(o), f = P2(
      d,
      h,
      l,
      c
    );
    e[d] = { type: h, values: f };
  }
  hu.push(e);
  var g = ze(4, n);
  return g === 0 ? hu : $1(g);
}, R2 = (r, t) => {
  let e = t || document.createElement("canvas");
  if (r && (Hi = new DataView(r), nn = E2(), !!_2())) {
    var n = ze(4, 4);
    hu = $1(n);
    var i = hu[0], s = i.ImageWidth.values[0], o = i.ImageLength.values[0];
    e.width = s, e.height = o;
    var l = [], c = i.Compression ? i.Compression.values[0] : 1, d = i.SamplesPerPixel.values[0], h = [], f = 0, g = !1;
    if (i.BitsPerSample.values.forEach(function(Wt, ot, Le) {
      h[ot] = {
        bitsPerSample: Wt,
        hasBytesPerSample: !1,
        bytesPerSample: void 0
      }, Wt % 8 === 0 && (h[ot].hasBytesPerSample = !0, h[ot].bytesPerSample = Wt / 8), f += Wt;
    }, void 0), f % 8 === 0) {
      g = !0;
      var v = f / 8;
    }
    var y = i.StripOffsets.values, E = y.length;
    if (i.StripByteCounts)
      var x = i.StripByteCounts.values;
    else if (E === 1)
      var x = [
        Math.ceil(s * o * f / 8)
      ];
    else
      throw Error("Cannot recover from missing StripByteCounts");
    for (var _ = 0; _ < E; _++) {
      var P = y[_];
      l[_] = [];
      for (var L = x[_], k = 0, F = 0, I = 1, M = !0, C = [], T = 0, O = 0, D = 0; k < L; k += I)
        switch (c) {
          case 1:
            for (var H = 0, C = []; H < d; H++)
              if (h[H].hasBytesPerSample) {
                var j = h[H].bytesPerSample * H;
                C.push(
                  ze(
                    h[H].bytesPerSample,
                    P + k + j
                  )
                );
              } else {
                var V = T2(
                  h[H].bitsPerSample,
                  P + k,
                  F
                );
                throw C.push(V.bits), k = V.byteOffset - P, F = V.bitOffset, RangeError("Cannot handle sub-byte bits per sample");
              }
            if (l[_].push(C), g)
              I = v;
            else
              throw I = 0, RangeError("Cannot handle sub-byte bits per pixel");
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 32773:
            if (M) {
              M = !1;
              var Y = 1, Z = 1, B = Hi.getInt8(
                P + k,
                nn
              );
              B >= 0 && B <= 127 ? Y = B + 1 : B >= -127 && B <= -1 ? Z = -B + 1 : M = !0;
            } else {
              for (var G = ze(1, P + k), H = 0; H < Z; H++) {
                if (h[O].hasBytesPerSample)
                  D = D << 8 * T | G, T++, T === h[O].bytesPerSample && (C.push(D), D = T = 0, O++);
                else
                  throw RangeError("Cannot handle sub-byte bits per sample");
                O === d && (l[_].push(C), C = [], O = 0);
              }
              Y--, Y === 0 && (M = !0);
            }
            I = 1;
            break;
        }
    }
    if (e.getContext) {
      var W = e.getContext("2d");
      if (W.fillStyle = qv(255, 255, 255, 0), i.RowsPerStrip)
        var bt = i.RowsPerStrip.values[0];
      else
        var bt = o;
      var ut = l.length, z = o % bt, nt = z === 0 ? bt : z, tt = bt, et = 0, lt = i.PhotometricInterpretation.values[0], K = [], gt = 0;
      if (i.ExtraSamples && (K = i.ExtraSamples.values, gt = K.length), i.ColorMap)
        var q = i.ColorMap.values, J = Math.pow(2, h[0].bitsPerSample);
      for (var _ = 0; _ < ut; _++) {
        _ + 1 === ut && (tt = nt);
        for (var ht = l[_].length, ft = et * _, st = 0, xt = 0; xt < ht; st++)
          for (var wt = 0; wt < s; wt++, xt++) {
            var X = l[_][xt], mt = 0, Pt = 0, Ut = 0, Kt = 1;
            if (gt > 0) {
              for (var Gt = 0; Gt < gt; Gt++)
                if (K[Gt] === 1 || K[Gt] === 2) {
                  Kt = X[3 + Gt] / 256;
                  break;
                }
            }
            switch (lt) {
              case 0:
                if (h[0].hasBytesPerSample)
                  var Lt = Math.pow(
                    16,
                    h[0].bytesPerSample * 2
                  );
                X.forEach(function(ot, Le, ke) {
                  ke[Le] = Lt - ot;
                });
              case 1:
                mt = Pt = Ut = Ir(
                  X[0],
                  h[0].bitsPerSample
                );
                break;
              case 2:
                mt = Ir(
                  X[0],
                  h[0].bitsPerSample
                ), Pt = Ir(
                  X[1],
                  h[1].bitsPerSample
                ), Ut = Ir(
                  X[2],
                  h[2].bitsPerSample
                );
                break;
              case 3:
                if (q === void 0)
                  throw Error("Palette image missing color map");
                var kt = X[0];
                mt = Ir(q[kt], 16), Pt = Ir(
                  q[J + kt],
                  16
                ), Ut = Ir(
                  q[2 * J + kt],
                  16
                );
                break;
              case 4:
                throw RangeError("Not Yet Implemented: Transparency mask");
              case 5:
                throw RangeError("Not Yet Implemented: CMYK");
              case 6:
                throw RangeError("Not Yet Implemented: YCbCr");
              case 8:
                throw RangeError("Not Yet Implemented: CIELab");
              default:
                throw RangeError(
                  "Unknown Photometric Interpretation:",
                  lt
                );
            }
            W.fillStyle = qv(mt, Pt, Ut, Kt), W.fillRect(wt, ft + st, 1, 1);
          }
        et = tt;
      }
    }
    return e;
  }
}, Ep = (r) => {
  const {
    mainState: { currentDocument: t }
  } = r, { t: e } = ao(), [n, i] = Ga(!1), [s, o] = Ga(!1);
  return _t(() => {
    if (!t || n)
      return;
    const l = document.getElementById("tiff-img");
    try {
      l && R2(t.fileData, l), i(!0);
    } catch {
      o(!0);
    }
  }, [t, n]), s ? /* @__PURE__ */ $(Gi, { ...r, children: /* @__PURE__ */ $("div", { children: e("brokenFile") }) }) : /* @__PURE__ */ $(Gi, { ...r, children: /* @__PURE__ */ $(L2, { id: "tiff-img" }) });
};
Ep.fileTypes = ["tif", "tiff", "image/tif", "image/tiff"];
Ep.weight = 0;
Ep.fileLoader = PP;
const L2 = yt.canvas`
  max-width: 95%;
  max-height: 95%;
`, _p = ({ mainState: { currentDocument: r } }) => /* @__PURE__ */ $(k2, { id: "txt-renderer", children: r == null ? void 0 : r.fileData });
_p.fileTypes = ["txt", "text/plain"];
_p.weight = 0;
_p.fileLoader = vb;
const k2 = yt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
var U1 = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(rl, function e() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i = !n.document && !!n.postMessage, s = n.IS_PAPA_WORKER || !1, o = {}, l = 0, c = { parse: function(C, T) {
      var O = (T = T || {}).dynamicTyping || !1;
      if (M(O) && (T.dynamicTypingFunction = O, O = {}), T.dynamicTyping = O, T.transform = !!M(T.transform) && T.transform, T.worker && c.WORKERS_SUPPORTED) {
        var D = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var j = (Y = n.URL || n.webkitURL || null, Z = e.toString(), c.BLOB_URL || (c.BLOB_URL = Y.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", Z, ")();"], { type: "text/javascript" })))), V = new n.Worker(j), Y, Z;
          return V.onmessage = P, V.id = l++, o[V.id] = V;
        }();
        return D.userStep = T.step, D.userChunk = T.chunk, D.userComplete = T.complete, D.userError = T.error, T.step = M(T.step), T.chunk = M(T.chunk), T.complete = M(T.complete), T.error = M(T.error), delete T.worker, void D.postMessage({ input: C, config: T, workerId: D.id });
      }
      var H = null;
      return c.NODE_STREAM_INPUT, typeof C == "string" ? (C = function(j) {
        return j.charCodeAt(0) === 65279 ? j.slice(1) : j;
      }(C), H = T.download ? new f(T) : new v(T)) : C.readable === !0 && M(C.read) && M(C.on) ? H = new y(T) : (n.File && C instanceof File || C instanceof Object) && (H = new g(T)), H.stream(C);
    }, unparse: function(C, T) {
      var O = !1, D = !0, H = ",", j = `\r
`, V = '"', Y = V + V, Z = !1, B = null, G = !1;
      (function() {
        if (typeof T == "object") {
          if (typeof T.delimiter != "string" || c.BAD_DELIMITERS.filter(function(z) {
            return T.delimiter.indexOf(z) !== -1;
          }).length || (H = T.delimiter), (typeof T.quotes == "boolean" || typeof T.quotes == "function" || Array.isArray(T.quotes)) && (O = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (Z = T.skipEmptyLines), typeof T.newline == "string" && (j = T.newline), typeof T.quoteChar == "string" && (V = T.quoteChar), typeof T.header == "boolean" && (D = T.header), Array.isArray(T.columns)) {
            if (T.columns.length === 0)
              throw new Error("Option columns is empty");
            B = T.columns;
          }
          T.escapeChar !== void 0 && (Y = T.escapeChar + V), (typeof T.escapeFormulae == "boolean" || T.escapeFormulae instanceof RegExp) && (G = T.escapeFormulae instanceof RegExp ? T.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var W = new RegExp(x(V), "g");
      if (typeof C == "string" && (C = JSON.parse(C)), Array.isArray(C)) {
        if (!C.length || Array.isArray(C[0]))
          return bt(null, C, Z);
        if (typeof C[0] == "object")
          return bt(B || Object.keys(C[0]), C, Z);
      } else if (typeof C == "object")
        return typeof C.data == "string" && (C.data = JSON.parse(C.data)), Array.isArray(C.data) && (C.fields || (C.fields = C.meta && C.meta.fields || B), C.fields || (C.fields = Array.isArray(C.data[0]) ? C.fields : typeof C.data[0] == "object" ? Object.keys(C.data[0]) : []), Array.isArray(C.data[0]) || typeof C.data[0] == "object" || (C.data = [C.data])), bt(C.fields || [], C.data || [], Z);
      throw new Error("Unable to serialize unrecognized input");
      function bt(z, nt, tt) {
        var et = "";
        typeof z == "string" && (z = JSON.parse(z)), typeof nt == "string" && (nt = JSON.parse(nt));
        var lt = Array.isArray(z) && 0 < z.length, K = !Array.isArray(nt[0]);
        if (lt && D) {
          for (var gt = 0; gt < z.length; gt++)
            0 < gt && (et += H), et += ut(z[gt], gt);
          0 < nt.length && (et += j);
        }
        for (var q = 0; q < nt.length; q++) {
          var J = lt ? z.length : nt[q].length, ht = !1, ft = lt ? Object.keys(nt[q]).length === 0 : nt[q].length === 0;
          if (tt && !lt && (ht = tt === "greedy" ? nt[q].join("").trim() === "" : nt[q].length === 1 && nt[q][0].length === 0), tt === "greedy" && lt) {
            for (var st = [], xt = 0; xt < J; xt++) {
              var wt = K ? z[xt] : xt;
              st.push(nt[q][wt]);
            }
            ht = st.join("").trim() === "";
          }
          if (!ht) {
            for (var X = 0; X < J; X++) {
              0 < X && !ft && (et += H);
              var mt = lt && K ? z[X] : X;
              et += ut(nt[q][mt], X);
            }
            q < nt.length - 1 && (!tt || 0 < J && !ft) && (et += j);
          }
        }
        return et;
      }
      function ut(z, nt) {
        if (z == null)
          return "";
        if (z.constructor === Date)
          return JSON.stringify(z).slice(1, 25);
        var tt = !1;
        G && typeof z == "string" && G.test(z) && (z = "'" + z, tt = !0);
        var et = z.toString().replace(W, Y);
        return (tt = tt || O === !0 || typeof O == "function" && O(z, nt) || Array.isArray(O) && O[nt] || function(lt, K) {
          for (var gt = 0; gt < K.length; gt++)
            if (-1 < lt.indexOf(K[gt]))
              return !0;
          return !1;
        }(et, c.BAD_DELIMITERS) || -1 < et.indexOf(H) || et.charAt(0) === " " || et.charAt(et.length - 1) === " ") ? V + et + V : et;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = _, c.ParserHandle = E, c.NetworkStreamer = f, c.FileStreamer = g, c.StringStreamer = v, c.ReadableStreamStreamer = y, n.jQuery) {
      var d = n.jQuery;
      d.fn.parse = function(C) {
        var T = C.config || {}, O = [];
        return this.each(function(j) {
          if (!(d(this).prop("tagName").toUpperCase() === "INPUT" && d(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var V = 0; V < this.files.length; V++)
            O.push({ file: this.files[V], inputElem: this, instanceConfig: d.extend({}, T) });
        }), D(), this;
        function D() {
          if (O.length !== 0) {
            var j, V, Y, Z, B = O[0];
            if (M(C.before)) {
              var G = C.before(B.file, B.inputElem);
              if (typeof G == "object") {
                if (G.action === "abort")
                  return j = "AbortError", V = B.file, Y = B.inputElem, Z = G.reason, void (M(C.error) && C.error({ name: j }, V, Y, Z));
                if (G.action === "skip")
                  return void H();
                typeof G.config == "object" && (B.instanceConfig = d.extend(B.instanceConfig, G.config));
              } else if (G === "skip")
                return void H();
            }
            var W = B.instanceConfig.complete;
            B.instanceConfig.complete = function(bt) {
              M(W) && W(bt, B.file, B.inputElem), H();
            }, c.parse(B.file, B.instanceConfig);
          } else
            M(C.complete) && C.complete();
        }
        function H() {
          O.splice(0, 1), D();
        }
      };
    }
    function h(C) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
        var O = F(T);
        O.chunkSize = parseInt(O.chunkSize), T.step || T.chunk || (O.chunkSize = null), this._handle = new E(O), (this._handle.streamer = this)._config = O;
      }).call(this, C), this.parseChunk = function(T, O) {
        if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
          var D = this._config.beforeFirstChunk(T);
          D !== void 0 && (T = D);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var H = this._partialLine + T;
        this._partialLine = "";
        var j = this._handle.parse(H, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var V = j.meta.cursor;
          this._finished || (this._partialLine = H.substring(V - this._baseIndex), this._baseIndex = V), j && j.data && (this._rowCount += j.data.length);
          var Y = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (s)
            n.postMessage({ results: j, workerId: c.WORKER_ID, finished: Y });
          else if (M(this._config.chunk) && !O) {
            if (this._config.chunk(j, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            j = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(j.data), this._completeResults.errors = this._completeResults.errors.concat(j.errors), this._completeResults.meta = j.meta), this._completed || !Y || !M(this._config.complete) || j && j.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), Y || j && j.meta.paused || this._nextChunk(), j;
        }
        this._halted = !0;
      }, this._sendError = function(T) {
        M(this._config.error) ? this._config.error(T) : s && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: T, finished: !1 });
      };
    }
    function f(C) {
      var T;
      (C = C || {}).chunkSize || (C.chunkSize = c.RemoteChunkSize), h.call(this, C), this._nextChunk = i ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(O) {
        this._input = O, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), i || (T.onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
            var O = this._config.downloadRequestHeaders;
            for (var D in O)
              T.setRequestHeader(D, O[D]);
          }
          if (this._config.chunkSize) {
            var H = this._start + this._config.chunkSize - 1;
            T.setRequestHeader("Range", "bytes=" + this._start + "-" + H);
          }
          try {
            T.send(this._config.downloadRequestBody);
          } catch (j) {
            this._chunkError(j.message);
          }
          i && T.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : T.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(O) {
          var D = O.getResponseHeader("Content-Range");
          return D === null ? -1 : parseInt(D.substring(D.lastIndexOf("/") + 1));
        }(T), this.parseChunk(T.responseText)));
      }, this._chunkError = function(O) {
        var D = T.statusText || O;
        this._sendError(new Error(D));
      };
    }
    function g(C) {
      var T, O;
      (C = C || {}).chunkSize || (C.chunkSize = c.LocalChunkSize), h.call(this, C);
      var D = typeof FileReader < "u";
      this.stream = function(H) {
        this._input = H, O = H.slice || H.webkitSlice || H.mozSlice, D ? ((T = new FileReader()).onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var H = this._input;
        if (this._config.chunkSize) {
          var j = Math.min(this._start + this._config.chunkSize, this._input.size);
          H = O.call(H, this._start, j);
        }
        var V = T.readAsText(H, this._config.encoding);
        D || this._chunkLoaded({ target: { result: V } });
      }, this._chunkLoaded = function(H) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(H.target.result);
      }, this._chunkError = function() {
        this._sendError(T.error);
      };
    }
    function v(C) {
      var T;
      h.call(this, C = C || {}), this.stream = function(O) {
        return T = O, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var O, D = this._config.chunkSize;
          return D ? (O = T.substring(0, D), T = T.substring(D)) : (O = T, T = ""), this._finished = !T, this.parseChunk(O);
        }
      };
    }
    function y(C) {
      h.call(this, C = C || {});
      var T = [], O = !0, D = !1;
      this.pause = function() {
        h.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        h.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(H) {
        this._input = H, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        D && T.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : O = !0;
      }, this._streamData = I(function(H) {
        try {
          T.push(typeof H == "string" ? H : H.toString(this._config.encoding)), O && (O = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
        } catch (j) {
          this._streamError(j);
        }
      }, this), this._streamError = I(function(H) {
        this._streamCleanUp(), this._sendError(H);
      }, this), this._streamEnd = I(function() {
        this._streamCleanUp(), D = !0, this._streamData("");
      }, this), this._streamCleanUp = I(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function E(C) {
      var T, O, D, H = Math.pow(2, 53), j = -H, V = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Y = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, Z = this, B = 0, G = 0, W = !1, bt = !1, ut = [], z = { data: [], errors: [], meta: {} };
      if (M(C.step)) {
        var nt = C.step;
        C.step = function(q) {
          if (z = q, lt())
            et();
          else {
            if (et(), z.data.length === 0)
              return;
            B += q.data.length, C.preview && B > C.preview ? O.abort() : (z.data = z.data[0], nt(z, Z));
          }
        };
      }
      function tt(q) {
        return C.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
      }
      function et() {
        return z && D && (gt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), D = !1), C.skipEmptyLines && (z.data = z.data.filter(function(q) {
          return !tt(q);
        })), lt() && function() {
          if (!z)
            return;
          function q(ht, ft) {
            M(C.transformHeader) && (ht = C.transformHeader(ht, ft)), ut.push(ht);
          }
          if (Array.isArray(z.data[0])) {
            for (var J = 0; lt() && J < z.data.length; J++)
              z.data[J].forEach(q);
            z.data.splice(0, 1);
          } else
            z.data.forEach(q);
        }(), function() {
          if (!z || !C.header && !C.dynamicTyping && !C.transform)
            return z;
          function q(ht, ft) {
            var st, xt = C.header ? {} : [];
            for (st = 0; st < ht.length; st++) {
              var wt = st, X = ht[st];
              C.header && (wt = st >= ut.length ? "__parsed_extra" : ut[st]), C.transform && (X = C.transform(X, wt)), X = K(wt, X), wt === "__parsed_extra" ? (xt[wt] = xt[wt] || [], xt[wt].push(X)) : xt[wt] = X;
            }
            return C.header && (st > ut.length ? gt("FieldMismatch", "TooManyFields", "Too many fields: expected " + ut.length + " fields but parsed " + st, G + ft) : st < ut.length && gt("FieldMismatch", "TooFewFields", "Too few fields: expected " + ut.length + " fields but parsed " + st, G + ft)), xt;
          }
          var J = 1;
          return !z.data.length || Array.isArray(z.data[0]) ? (z.data = z.data.map(q), J = z.data.length) : z.data = q(z.data, 0), C.header && z.meta && (z.meta.fields = ut), G += J, z;
        }();
      }
      function lt() {
        return C.header && ut.length === 0;
      }
      function K(q, J) {
        return ht = q, C.dynamicTypingFunction && C.dynamicTyping[ht] === void 0 && (C.dynamicTyping[ht] = C.dynamicTypingFunction(ht)), (C.dynamicTyping[ht] || C.dynamicTyping) === !0 ? J === "true" || J === "TRUE" || J !== "false" && J !== "FALSE" && (function(ft) {
          if (V.test(ft)) {
            var st = parseFloat(ft);
            if (j < st && st < H)
              return !0;
          }
          return !1;
        }(J) ? parseFloat(J) : Y.test(J) ? new Date(J) : J === "" ? null : J) : J;
        var ht;
      }
      function gt(q, J, ht, ft) {
        var st = { type: q, code: J, message: ht };
        ft !== void 0 && (st.row = ft), z.errors.push(st);
      }
      this.parse = function(q, J, ht) {
        var ft = C.quoteChar || '"';
        if (C.newline || (C.newline = function(wt, X) {
          wt = wt.substring(0, 1048576);
          var mt = new RegExp(x(X) + "([^]*?)" + x(X), "gm"), Pt = (wt = wt.replace(mt, "")).split("\r"), Ut = wt.split(`
`), Kt = 1 < Ut.length && Ut[0].length < Pt[0].length;
          if (Pt.length === 1 || Kt)
            return `
`;
          for (var Gt = 0, Lt = 0; Lt < Pt.length; Lt++)
            Pt[Lt][0] === `
` && Gt++;
          return Gt >= Pt.length / 2 ? `\r
` : "\r";
        }(q, ft)), D = !1, C.delimiter)
          M(C.delimiter) && (C.delimiter = C.delimiter(q), z.meta.delimiter = C.delimiter);
        else {
          var st = function(wt, X, mt, Pt, Ut) {
            var Kt, Gt, Lt, kt;
            Ut = Ut || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var Wt = 0; Wt < Ut.length; Wt++) {
              var ot = Ut[Wt], Le = 0, ke = 0, ce = 0;
              Lt = void 0;
              for (var sn = new _({ comments: Pt, delimiter: ot, newline: X, preview: 10 }).parse(wt), b = 0; b < sn.data.length; b++)
                if (mt && tt(sn.data[b]))
                  ce++;
                else {
                  var u = sn.data[b].length;
                  ke += u, Lt !== void 0 ? 0 < u && (Le += Math.abs(u - Lt), Lt = u) : Lt = u;
                }
              0 < sn.data.length && (ke /= sn.data.length - ce), (Gt === void 0 || Le <= Gt) && (kt === void 0 || kt < ke) && 1.99 < ke && (Gt = Le, Kt = ot, kt = ke);
            }
            return { successful: !!(C.delimiter = Kt), bestDelimiter: Kt };
          }(q, C.newline, C.skipEmptyLines, C.comments, C.delimitersToGuess);
          st.successful ? C.delimiter = st.bestDelimiter : (D = !0, C.delimiter = c.DefaultDelimiter), z.meta.delimiter = C.delimiter;
        }
        var xt = F(C);
        return C.preview && C.header && xt.preview++, T = q, O = new _(xt), z = O.parse(T, J, ht), et(), W ? { meta: { paused: !0 } } : z || { meta: { paused: !1 } };
      }, this.paused = function() {
        return W;
      }, this.pause = function() {
        W = !0, O.abort(), T = M(C.chunk) ? "" : T.substring(O.getCharIndex());
      }, this.resume = function() {
        Z.streamer._halted ? (W = !1, Z.streamer.parseChunk(T, !0)) : setTimeout(Z.resume, 3);
      }, this.aborted = function() {
        return bt;
      }, this.abort = function() {
        bt = !0, O.abort(), z.meta.aborted = !0, M(C.complete) && C.complete(z), T = "";
      };
    }
    function x(C) {
      return C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function _(C) {
      var T, O = (C = C || {}).delimiter, D = C.newline, H = C.comments, j = C.step, V = C.preview, Y = C.fastMode, Z = T = C.quoteChar === void 0 || C.quoteChar === null ? '"' : C.quoteChar;
      if (C.escapeChar !== void 0 && (Z = C.escapeChar), (typeof O != "string" || -1 < c.BAD_DELIMITERS.indexOf(O)) && (O = ","), H === O)
        throw new Error("Comment character same as delimiter");
      H === !0 ? H = "#" : (typeof H != "string" || -1 < c.BAD_DELIMITERS.indexOf(H)) && (H = !1), D !== `
` && D !== "\r" && D !== `\r
` && (D = `
`);
      var B = 0, G = !1;
      this.parse = function(W, bt, ut) {
        if (typeof W != "string")
          throw new Error("Input must be a string");
        var z = W.length, nt = O.length, tt = D.length, et = H.length, lt = M(j), K = [], gt = [], q = [], J = B = 0;
        if (!W)
          return p();
        if (C.header && !bt) {
          var ht = W.split(D)[0].split(O), ft = [], st = {}, xt = !1;
          for (var wt in ht) {
            var X = ht[wt];
            M(C.transformHeader) && (X = C.transformHeader(X, wt));
            var mt = X, Pt = st[X] || 0;
            for (0 < Pt && (xt = !0, mt = X + "_" + Pt), st[X] = Pt + 1; ft.includes(mt); )
              mt = mt + "_" + Pt;
            ft.push(mt);
          }
          if (xt) {
            var Ut = W.split(D);
            Ut[0] = ft.join(O), W = Ut.join(D);
          }
        }
        if (Y || Y !== !1 && W.indexOf(T) === -1) {
          for (var Kt = W.split(D), Gt = 0; Gt < Kt.length; Gt++) {
            if (q = Kt[Gt], B += q.length, Gt !== Kt.length - 1)
              B += D.length;
            else if (ut)
              return p();
            if (!H || q.substring(0, et) !== H) {
              if (lt) {
                if (K = [], ce(q.split(O)), S(), G)
                  return p();
              } else
                ce(q.split(O));
              if (V && V <= Gt)
                return K = K.slice(0, V), p(!0);
            }
          }
          return p();
        }
        for (var Lt = W.indexOf(O, B), kt = W.indexOf(D, B), Wt = new RegExp(x(Z) + x(T), "g"), ot = W.indexOf(T, B); ; )
          if (W[B] !== T)
            if (H && q.length === 0 && W.substring(B, B + et) === H) {
              if (kt === -1)
                return p();
              B = kt + tt, kt = W.indexOf(D, B), Lt = W.indexOf(O, B);
            } else if (Lt !== -1 && (Lt < kt || kt === -1))
              q.push(W.substring(B, Lt)), B = Lt + nt, Lt = W.indexOf(O, B);
            else {
              if (kt === -1)
                break;
              if (q.push(W.substring(B, kt)), u(kt + tt), lt && (S(), G))
                return p();
              if (V && K.length >= V)
                return p(!0);
            }
          else
            for (ot = B, B++; ; ) {
              if ((ot = W.indexOf(T, ot + 1)) === -1)
                return ut || gt.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: K.length, index: B }), b();
              if (ot === z - 1)
                return b(W.substring(B, ot).replace(Wt, T));
              if (T !== Z || W[ot + 1] !== Z) {
                if (T === Z || ot === 0 || W[ot - 1] !== Z) {
                  Lt !== -1 && Lt < ot + 1 && (Lt = W.indexOf(O, ot + 1)), kt !== -1 && kt < ot + 1 && (kt = W.indexOf(D, ot + 1));
                  var Le = sn(kt === -1 ? Lt : Math.min(Lt, kt));
                  if (W.substr(ot + 1 + Le, nt) === O) {
                    q.push(W.substring(B, ot).replace(Wt, T)), W[B = ot + 1 + Le + nt] !== T && (ot = W.indexOf(T, B)), Lt = W.indexOf(O, B), kt = W.indexOf(D, B);
                    break;
                  }
                  var ke = sn(kt);
                  if (W.substring(ot + 1 + ke, ot + 1 + ke + tt) === D) {
                    if (q.push(W.substring(B, ot).replace(Wt, T)), u(ot + 1 + ke + tt), Lt = W.indexOf(O, B), ot = W.indexOf(T, B), lt && (S(), G))
                      return p();
                    if (V && K.length >= V)
                      return p(!0);
                    break;
                  }
                  gt.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: K.length, index: B }), ot++;
                }
              } else
                ot++;
            }
        return b();
        function ce(R) {
          K.push(R), J = B;
        }
        function sn(R) {
          var N = 0;
          if (R !== -1) {
            var U = W.substring(ot + 1, R);
            U && U.trim() === "" && (N = U.length);
          }
          return N;
        }
        function b(R) {
          return ut || (R === void 0 && (R = W.substring(B)), q.push(R), B = z, ce(q), lt && S()), p();
        }
        function u(R) {
          B = R, ce(q), q = [], kt = W.indexOf(D, B);
        }
        function p(R) {
          return { data: K, errors: gt, meta: { delimiter: O, linebreak: D, aborted: G, truncated: !!R, cursor: J + (bt || 0) } };
        }
        function S() {
          j(p()), K = [], gt = [];
        }
      }, this.abort = function() {
        G = !0;
      }, this.getCharIndex = function() {
        return B;
      };
    }
    function P(C) {
      var T = C.data, O = o[T.workerId], D = !1;
      if (T.error)
        O.userError(T.error, T.file);
      else if (T.results && T.results.data) {
        var H = { abort: function() {
          D = !0, L(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: k, resume: k };
        if (M(O.userStep)) {
          for (var j = 0; j < T.results.data.length && (O.userStep({ data: T.results.data[j], errors: T.results.errors, meta: T.results.meta }, H), !D); j++)
            ;
          delete T.results;
        } else
          M(O.userChunk) && (O.userChunk(T.results, H, T.file), delete T.results);
      }
      T.finished && !D && L(T.workerId, T.results);
    }
    function L(C, T) {
      var O = o[C];
      M(O.userComplete) && O.userComplete(T), O.terminate(), delete o[C];
    }
    function k() {
      throw new Error("Not implemented.");
    }
    function F(C) {
      if (typeof C != "object" || C === null)
        return C;
      var T = Array.isArray(C) ? [] : {};
      for (var O in C)
        T[O] = F(C[O]);
      return T;
    }
    function I(C, T) {
      return function() {
        C.apply(T, arguments);
      };
    }
    function M(C) {
      return typeof C == "function";
    }
    return s && (n.onmessage = function(C) {
      var T = C.data;
      if (c.WORKER_ID === void 0 && T && (c.WORKER_ID = T.workerId), typeof T.input == "string")
        n.postMessage({ workerId: c.WORKER_ID, results: c.parse(T.input, T.config), finished: !0 });
      else if (n.File && T.input instanceof File || T.input instanceof Object) {
        var O = c.parse(T.input, T.config);
        O && n.postMessage({ workerId: c.WORKER_ID, results: O, finished: !0 });
      }
    }), (f.prototype = Object.create(h.prototype)).constructor = f, (g.prototype = Object.create(h.prototype)).constructor = g, (v.prototype = Object.create(v.prototype)).constructor = v, (y.prototype = Object.create(h.prototype)).constructor = y, c;
  });
})(U1);
var I2 = U1.exports;
const F2 = /* @__PURE__ */ Jv(I2), Sp = ({
  mainState: { currentDocument: r, config: t }
}) => {
  const [e, n] = Ga([]);
  return _t(() => {
    var i;
    if (r != null && r.fileData) {
      const s = F2.parse(r.fileData, {
        delimiter: (t == null ? void 0 : t.csvDelimiter) ?? ","
      });
      !((i = s.errors) != null && i.length) && s.data && n(s.data);
    }
  }, [r, t == null ? void 0 : t.csvDelimiter]), e.length ? /* @__PURE__ */ $(M2, { children: /* @__PURE__ */ We(D2, { children: [
    /* @__PURE__ */ $("thead", { children: /* @__PURE__ */ $("tr", { children: e[0].map((i) => /* @__PURE__ */ $("th", { children: i }, i)) }) }),
    /* @__PURE__ */ $("tbody", { children: e.slice(1, e.length).map((i) => /* @__PURE__ */ $("tr", { children: i.map((s) => /* @__PURE__ */ $("td", { children: s }, s)) }, i.join(""))) })
  ] }) }) : null;
};
Sp.fileTypes = ["csv", "text/csv"];
Sp.weight = 0;
Sp.fileLoader = vb;
const M2 = yt.div`
  width: 100%;
`, D2 = yt.table`
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 5px 10px;

    &:empty {
      display: none;
    }
  }
`, _0 = (r) => /* @__PURE__ */ $(Gi, { ...r });
_0.fileTypes = ["gif", "image/gif"];
_0.weight = 0;
const S0 = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ $(O2, { id: "video-renderer", children: /* @__PURE__ */ $(N2, { controls: !0, src: r.uri }) }) : null;
S0.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
S0.weight = 0;
const O2 = yt.div`
  width: 100%;
`, N2 = yt.video`
  width: 100%;
  height: 100%;
  border: 0;
`, x0 = (r) => /* @__PURE__ */ $(Gi, { ...r });
x0.fileTypes = ["webp", "image/webp"];
x0.weight = 0;
const B2 = [
  a0,
  rp,
  l0,
  sp,
  A0,
  E0,
  Ep,
  _p,
  Sp,
  _0,
  S0,
  x0
], $2 = jm((r, t) => {
  const { documents: e, theme: n } = r;
  if (!e)
    throw new Error("Please provide an array of documents to DocViewer!");
  return /* @__PURE__ */ $(
    JT,
    {
      ref: t,
      pluginRenderers: B2,
      ...r,
      children: /* @__PURE__ */ $(
        Ox,
        {
          theme: n ? { ...vv, ...n } : vv,
          children: /* @__PURE__ */ We(
            U2,
            {
              id: "react-doc-viewer",
              "data-testid": "react-doc-viewer",
              className: r.className,
              style: r.style,
              children: [
                /* @__PURE__ */ $(CP, {}),
                /* @__PURE__ */ $(MP, {})
              ]
            }
          )
        }
      )
    }
  );
}), Z2 = G1($2), U2 = yt.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
`;
export {
  Ag as B,
  Sp as C,
  Z2 as D,
  rp as H,
  l0 as J,
  sp as M,
  A0 as P,
  Ep as T,
  S0 as V,
  x0 as W,
  V2 as a,
  JT as b,
  rl as c,
  X2 as d,
  B2 as e,
  PP as f,
  Jv as g,
  mb as h,
  W2 as i,
  RP as j,
  a0 as k,
  E0 as l,
  _p as m,
  _0 as n,
  ct as p,
  G2 as s,
  vb as t,
  m2 as u
};
