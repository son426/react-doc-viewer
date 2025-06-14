import { c as oe, g as Ie } from "./index-DTWsYuVF.js";
var re = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
re.exports;
(function(e, r) {
  (function(t) {
    var o = r && !r.nodeType && r, a = e && !e.nodeType && e, p = typeof oe == "object" && oe;
    (p.global === p || p.window === p || p.self === p) && (t = p);
    var l, n = 2147483647, m = 36, c = 1, x = 26, _ = 38, g = 700, u = 72, w = 128, N = "-", A = /^xn--/, W = /[^\x20-\x7E]/, h = /[\x2E\u3002\uFF0E\uFF61]/g, y = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, T = m - c, v = Math.floor, C = String.fromCharCode, z;
    function U(s) {
      throw new RangeError(y[s]);
    }
    function j(s, i) {
      for (var f = s.length, d = []; f--; )
        d[f] = i(s[f]);
      return d;
    }
    function M(s, i) {
      var f = s.split("@"), d = "";
      f.length > 1 && (d = f[0] + "@", s = f[1]), s = s.replace(h, ".");
      var b = s.split("."), I = j(b, i).join(".");
      return d + I;
    }
    function J(s) {
      for (var i = [], f = 0, d = s.length, b, I; f < d; )
        b = s.charCodeAt(f++), b >= 55296 && b <= 56319 && f < d ? (I = s.charCodeAt(f++), (I & 64512) == 56320 ? i.push(((b & 1023) << 10) + (I & 1023) + 65536) : (i.push(b), f--)) : i.push(b);
      return i;
    }
    function ee(s) {
      return j(s, function(i) {
        var f = "";
        return i > 65535 && (i -= 65536, f += C(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), f += C(i), f;
      }).join("");
    }
    function G(s) {
      return s - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : m;
    }
    function X(s, i) {
      return s + 22 + 75 * (s < 26) - ((i != 0) << 5);
    }
    function Y(s, i, f) {
      var d = 0;
      for (s = f ? v(s / g) : s >> 1, s += v(s / i); s > T * x >> 1; d += m)
        s = v(s / T);
      return v(d + (T + 1) * s / (s + _));
    }
    function Z(s) {
      var i = [], f = s.length, d, b = 0, I = w, R = u, F, S, $, D, O, L, q, B, V;
      for (F = s.lastIndexOf(N), F < 0 && (F = 0), S = 0; S < F; ++S)
        s.charCodeAt(S) >= 128 && U("not-basic"), i.push(s.charCodeAt(S));
      for ($ = F > 0 ? F + 1 : 0; $ < f; ) {
        for (D = b, O = 1, L = m; $ >= f && U("invalid-input"), q = G(s.charCodeAt($++)), (q >= m || q > v((n - b) / O)) && U("overflow"), b += q * O, B = L <= R ? c : L >= R + x ? x : L - R, !(q < B); L += m)
          V = m - B, O > v(n / V) && U("overflow"), O *= V;
        d = i.length + 1, R = Y(b - D, d, D == 0), v(b / d) > n - I && U("overflow"), I += v(b / d), b %= d, i.splice(b++, 0, I);
      }
      return ee(i);
    }
    function te(s) {
      var i, f, d, b, I, R, F, S, $, D, O, L = [], q, B, V, ne;
      for (s = J(s), q = s.length, i = w, f = 0, I = u, R = 0; R < q; ++R)
        O = s[R], O < 128 && L.push(C(O));
      for (d = b = L.length, b && L.push(N); d < q; ) {
        for (F = n, R = 0; R < q; ++R)
          O = s[R], O >= i && O < F && (F = O);
        for (B = d + 1, F - i > v((n - f) / B) && U("overflow"), f += (F - i) * B, i = F, R = 0; R < q; ++R)
          if (O = s[R], O < i && ++f > n && U("overflow"), O == i) {
            for (S = f, $ = m; D = $ <= I ? c : $ >= I + x ? x : $ - I, !(S < D); $ += m)
              ne = S - D, V = m - D, L.push(
                C(X(D + ne % V, 0))
              ), S = v(ne / V);
            L.push(C(X(S, 0))), I = Y(f, B, d == b), f = 0, ++d;
          }
        ++f, ++i;
      }
      return L.join("");
    }
    function Ue(s) {
      return M(s, function(i) {
        return A.test(i) ? Z(i.slice(4).toLowerCase()) : i;
      });
    }
    function Oe(s) {
      return M(s, function(i) {
        return W.test(i) ? "xn--" + te(i) : i;
      });
    }
    if (l = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.4.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: J,
        encode: ee
      },
      decode: Z,
      encode: te,
      toASCII: Oe,
      toUnicode: Ue
    }, o && a)
      if (e.exports == o)
        a.exports = l;
      else
        for (z in l)
          l.hasOwnProperty(z) && (o[z] = l[z]);
    else
      t.punycode = l;
  })(oe);
})(re, re.exports);
var Te = re.exports;
const je = /* @__PURE__ */ Ie(Te);
function Fe(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var Le = function(e, r, t, o) {
  r = r || "&", t = t || "=";
  var a = {};
  if (typeof e != "string" || e.length === 0)
    return a;
  var p = /\+/g;
  e = e.split(r);
  var l = 1e3;
  o && typeof o.maxKeys == "number" && (l = o.maxKeys);
  var n = e.length;
  l > 0 && n > l && (n = l);
  for (var m = 0; m < n; ++m) {
    var c = e[m].replace(p, "%20"), x = c.indexOf(t), _, g, u, w;
    x >= 0 ? (_ = c.substr(0, x), g = c.substr(x + 1)) : (_ = c, g = ""), u = decodeURIComponent(_), w = decodeURIComponent(g), Fe(a, u) ? Pe(a[u]) ? a[u].push(w) : a[u] = [a[u], w] : a[u] = w;
  }
  return a;
}, Pe = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, Q = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, _e = function(e, r, t, o) {
  return r = r || "&", t = t || "=", e === null && (e = void 0), typeof e == "object" ? ie(qe(e), function(a) {
    var p = encodeURIComponent(Q(a)) + t;
    return Se(e[a]) ? ie(e[a], function(l) {
      return p + encodeURIComponent(Q(l));
    }).join(r) : p + encodeURIComponent(Q(e[a]));
  }).join(r) : o ? encodeURIComponent(Q(o)) + t + encodeURIComponent(Q(e)) : "";
}, Se = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
function ie(e, r) {
  if (e.map)
    return e.map(r);
  for (var t = [], o = 0; o < e.length; o++)
    t.push(r(e[o], o));
  return t;
}
var qe = Object.keys || function(e) {
  var r = [];
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && r.push(t);
  return r;
}, le, pe, $e = pe = Le, Ee = le = _e;
function Me(e) {
  return encodeURIComponent(e);
}
function De(e) {
  return decodeURIComponent(e);
}
var Ne = {
  decode: $e,
  encode: Ee,
  parse: pe,
  stringify: le,
  escape: Me,
  unescape: De
}, ze = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
}, Be = je, E = ze, Ke = k, We = rt, me = nt, Ge = tt, Ze = P;
function P() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Ve = /^([a-z0-9.+-]+:)/i, Je = /:[0-9]*$/, Xe = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Ye = ["<", ">", '"', "`", " ", "\r", `
`, "	"], He = ["{", "}", "|", "\\", "^", "`"].concat(Ye), se = ["'"].concat(He), fe = ["%", "/", "?", ";", "#"].concat(se), ue = ["/", "?", "#"], Qe = 255, ce = /^[+a-z0-9A-Z_-]{0,63}$/, ke = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, et = {
  javascript: !0,
  "javascript:": !0
}, ae = {
  javascript: !0,
  "javascript:": !0
}, H = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, he = Ne;
function k(e, r, t) {
  if (e && E.isObject(e) && e instanceof P)
    return e;
  var o = new P();
  return o.parse(e, r, t), o;
}
P.prototype.parse = function(e, r, t) {
  if (!E.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var o = e.indexOf("?"), a = o !== -1 && o < e.indexOf("#") ? "?" : "#", p = e.split(a), l = /\\/g;
  p[0] = p[0].replace(l, "/"), e = p.join(a);
  var n = e;
  if (n = n.trim(), !t && e.split("#").length === 1) {
    var m = Xe.exec(n);
    if (m)
      return this.path = n, this.href = n, this.pathname = m[1], m[2] ? (this.search = m[2], r ? this.query = he.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : r && (this.search = "", this.query = {}), this;
  }
  var c = Ve.exec(n);
  if (c) {
    c = c[0];
    var x = c.toLowerCase();
    this.protocol = x, n = n.substr(c.length);
  }
  if (t || c || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var _ = n.substr(0, 2) === "//";
    _ && !(c && ae[c]) && (n = n.substr(2), this.slashes = !0);
  }
  if (!ae[c] && (_ || c && !H[c])) {
    for (var g = -1, u = 0; u < ue.length; u++) {
      var w = n.indexOf(ue[u]);
      w !== -1 && (g === -1 || w < g) && (g = w);
    }
    var N, A;
    g === -1 ? A = n.lastIndexOf("@") : A = n.lastIndexOf("@", g), A !== -1 && (N = n.slice(0, A), n = n.slice(A + 1), this.auth = decodeURIComponent(N)), g = -1;
    for (var u = 0; u < fe.length; u++) {
      var w = n.indexOf(fe[u]);
      w !== -1 && (g === -1 || w < g) && (g = w);
    }
    g === -1 && (g = n.length), this.host = n.slice(0, g), n = n.slice(g), this.parseHost(), this.hostname = this.hostname || "";
    var W = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!W)
      for (var h = this.hostname.split(/\./), u = 0, y = h.length; u < y; u++) {
        var T = h[u];
        if (T && !T.match(ce)) {
          for (var v = "", C = 0, z = T.length; C < z; C++)
            T.charCodeAt(C) > 127 ? v += "x" : v += T[C];
          if (!v.match(ce)) {
            var U = h.slice(0, u), j = h.slice(u + 1), M = T.match(ke);
            M && (U.push(M[1]), j.unshift(M[2])), j.length && (n = "/" + j.join(".") + n), this.hostname = U.join(".");
            break;
          }
        }
      }
    this.hostname.length > Qe ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), W || (this.hostname = Be.toASCII(this.hostname));
    var J = this.port ? ":" + this.port : "", ee = this.hostname || "";
    this.host = ee + J, this.href += this.host, W && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), n[0] !== "/" && (n = "/" + n));
  }
  if (!et[x])
    for (var u = 0, y = se.length; u < y; u++) {
      var G = se[u];
      if (n.indexOf(G) !== -1) {
        var X = encodeURIComponent(G);
        X === G && (X = escape(G)), n = n.split(G).join(X);
      }
    }
  var Y = n.indexOf("#");
  Y !== -1 && (this.hash = n.substr(Y), n = n.slice(0, Y));
  var Z = n.indexOf("?");
  if (Z !== -1 ? (this.search = n.substr(Z), this.query = n.substr(Z + 1), r && (this.query = he.parse(this.query)), n = n.slice(0, Z)) : r && (this.search = "", this.query = {}), n && (this.pathname = n), H[x] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var J = this.pathname || "", te = this.search || "";
    this.path = J + te;
  }
  return this.href = this.format(), this;
};
function tt(e) {
  return E.isString(e) && (e = k(e)), e instanceof P ? e.format() : P.prototype.format.call(e);
}
P.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var r = this.protocol || "", t = this.pathname || "", o = this.hash || "", a = !1, p = "";
  this.host ? a = e + this.host : this.hostname && (a = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && E.isObject(this.query) && Object.keys(this.query).length && (p = he.stringify(this.query));
  var l = this.search || p && "?" + p || "";
  return r && r.substr(-1) !== ":" && (r += ":"), this.slashes || (!r || H[r]) && a !== !1 ? (a = "//" + (a || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : a || (a = ""), o && o.charAt(0) !== "#" && (o = "#" + o), l && l.charAt(0) !== "?" && (l = "?" + l), t = t.replace(/[?#]/g, function(n) {
    return encodeURIComponent(n);
  }), l = l.replace("#", "%23"), r + a + t + l + o;
};
function rt(e, r) {
  return k(e, !1, !0).resolve(r);
}
P.prototype.resolve = function(e) {
  return this.resolveObject(k(e, !1, !0)).format();
};
function nt(e, r) {
  return e ? k(e, !1, !0).resolveObject(r) : r;
}
P.prototype.resolveObject = function(e) {
  if (E.isString(e)) {
    var r = new P();
    r.parse(e, !1, !0), e = r;
  }
  for (var t = new P(), o = Object.keys(this), a = 0; a < o.length; a++) {
    var p = o[a];
    t[p] = this[p];
  }
  if (t.hash = e.hash, e.href === "")
    return t.href = t.format(), t;
  if (e.slashes && !e.protocol) {
    for (var l = Object.keys(e), n = 0; n < l.length; n++) {
      var m = l[n];
      m !== "protocol" && (t[m] = e[m]);
    }
    return H[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
  }
  if (e.protocol && e.protocol !== t.protocol) {
    if (!H[e.protocol]) {
      for (var c = Object.keys(e), x = 0; x < c.length; x++) {
        var _ = c[x];
        t[_] = e[_];
      }
      return t.href = t.format(), t;
    }
    if (t.protocol = e.protocol, !e.host && !ae[e.protocol]) {
      for (var y = (e.pathname || "").split("/"); y.length && !(e.host = y.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), y[0] !== "" && y.unshift(""), y.length < 2 && y.unshift(""), t.pathname = y.join("/");
    } else
      t.pathname = e.pathname;
    if (t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, t.pathname || t.search) {
      var g = t.pathname || "", u = t.search || "";
      t.path = g + u;
    }
    return t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
  }
  var w = t.pathname && t.pathname.charAt(0) === "/", N = e.host || e.pathname && e.pathname.charAt(0) === "/", A = N || w || t.host && e.pathname, W = A, h = t.pathname && t.pathname.split("/") || [], y = e.pathname && e.pathname.split("/") || [], T = t.protocol && !H[t.protocol];
  if (T && (t.hostname = "", t.port = null, t.host && (h[0] === "" ? h[0] = t.host : h.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (y[0] === "" ? y[0] = e.host : y.unshift(e.host)), e.host = null), A = A && (y[0] === "" || h[0] === "")), N)
    t.host = e.host || e.host === "" ? e.host : t.host, t.hostname = e.hostname || e.hostname === "" ? e.hostname : t.hostname, t.search = e.search, t.query = e.query, h = y;
  else if (y.length)
    h || (h = []), h.pop(), h = h.concat(y), t.search = e.search, t.query = e.query;
  else if (!E.isNullOrUndefined(e.search)) {
    if (T) {
      t.hostname = t.host = h.shift();
      var v = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
      v && (t.auth = v.shift(), t.host = t.hostname = v.shift());
    }
    return t.search = e.search, t.query = e.query, (!E.isNull(t.pathname) || !E.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
  }
  if (!h.length)
    return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
  for (var C = h.slice(-1)[0], z = (t.host || e.host || h.length > 1) && (C === "." || C === "..") || C === "", U = 0, j = h.length; j >= 0; j--)
    C = h[j], C === "." ? h.splice(j, 1) : C === ".." ? (h.splice(j, 1), U++) : U && (h.splice(j, 1), U--);
  if (!A && !W)
    for (; U--; U)
      h.unshift("..");
  A && h[0] !== "" && (!h[0] || h[0].charAt(0) !== "/") && h.unshift(""), z && h.join("/").substr(-1) !== "/" && h.push("");
  var M = h[0] === "" || h[0] && h[0].charAt(0) === "/";
  if (T) {
    t.hostname = t.host = M ? "" : h.length ? h.shift() : "";
    var v = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
    v && (t.auth = v.shift(), t.host = t.hostname = v.shift());
  }
  return A = A || t.host && h.length, A && !M && h.unshift(""), h.length ? t.pathname = h.join("/") : (t.pathname = null, t.path = null), (!E.isNull(t.pathname) || !E.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
};
P.prototype.parseHost = function() {
  var e = this.host, r = Je.exec(e);
  r && (r = r[0], r !== ":" && (this.port = r.substr(1)), e = e.substr(0, e.length - r.length)), e && (this.hostname = e);
};
function ot(e, r) {
  for (var t = 0, o = e.length - 1; o >= 0; o--) {
    var a = e[o];
    a === "." ? e.splice(o, 1) : a === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
  }
  if (r)
    for (; t--; t)
      e.unshift("..");
  return e;
}
function st() {
  for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
    var o = t >= 0 ? arguments[t] : "/";
    if (typeof o != "string")
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!o)
      continue;
    e = o + "/" + e, r = o.charAt(0) === "/";
  }
  return e = ot(at(e.split("/"), function(a) {
    return !!a;
  }), !r).join("/"), (r ? "/" : "") + e || ".";
}
function at(e, r) {
  if (e.filter)
    return e.filter(r);
  for (var t = [], o = 0; o < e.length; o++)
    r(e[o], o, e) && t.push(e[o]);
  return t;
}
var de = function(e) {
  function r() {
    var o = this || self;
    return delete e.prototype.__magic__, o;
  }
  if (typeof globalThis == "object")
    return globalThis;
  if (this)
    return r();
  e.defineProperty(e.prototype, "__magic__", {
    configurable: !0,
    get: r
  });
  var t = __magic__;
  return t;
}(Object), ht = (
  /** @type {formatImport}*/
  Ge
), ve = (
  /** @type {parseImport}*/
  Ke
), ge = (
  /** @type {resolveImport}*/
  We
), ye = (
  /** @type {UrlImport}*/
  Ze
), K = de.URL, be = de.URLSearchParams, it = /%/g, ft = /\\/g, ut = /\n/g, ct = /\r/g, lt = /\t/g, pt = 47;
function mt(e) {
  var r = (
    /** @type {URL|null} */
    e ?? null
  );
  return !!(r !== null && (r != null && r.href) && (r != null && r.origin));
}
function dt(e) {
  if (e.hostname !== "")
    throw new TypeError('File URL host must be "localhost" or empty on browser');
  for (var r = e.pathname, t = 0; t < r.length; t++)
    if (r[t] === "%") {
      var o = r.codePointAt(t + 2) | 32;
      if (r[t + 1] === "2" && o === 102)
        throw new TypeError("File URL path must not include encoded / characters");
    }
  return decodeURIComponent(r);
}
function vt(e) {
  return e.includes("%") && (e = e.replace(it, "%25")), e.includes("\\") && (e = e.replace(ft, "%5C")), e.includes(`
`) && (e = e.replace(ut, "%0A")), e.includes("\r") && (e = e.replace(ct, "%0D")), e.includes("	") && (e = e.replace(lt, "%09")), e;
}
var xe = (
  /**
   * @type {domainToASCII}
   */
  function(r) {
    if (typeof r > "u")
      throw new TypeError('The "domain" argument must be specified');
    return new K("http://" + r).hostname;
  }
), we = (
  /**
   * @type {domainToUnicode}
   */
  function(r) {
    if (typeof r > "u")
      throw new TypeError('The "domain" argument must be specified');
    return new K("http://" + r).hostname;
  }
), Ce = (
  /**
   * @type {(url: string) => URL}
   */
  function(r) {
    var t = new K("file://"), o = st(r), a = r.charCodeAt(r.length - 1);
    return a === pt && o[o.length - 1] !== "/" && (o += "/"), t.pathname = vt(o), t;
  }
), Re = (
  /**
   * @type {fileURLToPath & ((path: string | URL) => string)}
   */
  function(r) {
    if (!mt(r) && typeof r != "string")
      throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof r + " (" + r + ")");
    var t = new K(r);
    if (t.protocol !== "file:")
      throw new TypeError("The URL must be of scheme file");
    return dt(t);
  }
), Ae = (
  /**
   * @type {(
   *   ((urlObject: URL, options?: URLFormatOptions) => string) &
   *   ((urlObject: UrlObject | string, options?: never) => string)
   * )}
   */
  function(r, t) {
    var o, a, p;
    if (t === void 0 && (t = {}), !(r instanceof K))
      return ht(r);
    if (typeof t != "object" || t === null)
      throw new TypeError('The "options" argument must be of type object.');
    var l = (o = t.auth) != null ? o : !0, n = (a = t.fragment) != null ? a : !0, m = (p = t.search) != null ? p : !0, c = new K(r.toString());
    return l || (c.username = "", c.password = ""), n || (c.hash = ""), m || (c.search = ""), c.toString();
  }
), gt = {
  format: Ae,
  parse: ve,
  resolve: ge,
  resolveObject: me,
  Url: ye,
  URL: K,
  URLSearchParams: be,
  domainToASCII: xe,
  domainToUnicode: we,
  pathToFileURL: Ce,
  fileURLToPath: Re
};
const bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  URL: K,
  URLSearchParams: be,
  Url: ye,
  default: gt,
  domainToASCII: xe,
  domainToUnicode: we,
  fileURLToPath: Re,
  format: Ae,
  parse: ve,
  pathToFileURL: Ce,
  resolve: ge,
  resolveObject: me
}, Symbol.toStringTag, { value: "Module" }));
export {
  bt as u
};
