import { effectScope as R_, getCurrentScope as b_, onScopeDispose as O_, ref as _t, defineComponent as He, createElementBlock as jn, openBlock as Nn, createElementVNode as Q, withDirectives as ms, unref as W, vModelText as As, toDisplayString as D_, computed as M_, Fragment as ys, renderList as Ss, normalizeClass as Cs, onMounted as W_, onUnmounted as U_, createVNode as hr, createBlock as F_, createCommentVNode as P_ } from "vue";
const ln = {
  WALL: "WALL",
  EMPTY: "EMPTY",
  SNAKE: "SNAKE",
  ITEM: "ITEM"
};
class Pi {
  cellType;
  cellObject;
  constructor(g = ln.EMPTY, s = null) {
    this.cellType = g, this.cellObject = s;
  }
  setCellType(g) {
    this.cellType = g;
  }
  setCellObject(g) {
    this.cellObject = g;
  }
}
class B_ {
  rows;
  cols;
  grid;
  constructor(g, s, E) {
    this.rows = g, this.cols = s, this.grid = Array.from(
      { length: g },
      ($, F) => Array.from({ length: s }, (U, z) => F === 0 || z === 0 || F === g - 1 || z === s - 1 ? new Pi(ln.WALL) : E.some((he) => he.x === z && he.y === F) ? new Pi(ln.SNAKE) : new Pi())
    );
  }
  getCellType(g, s) {
    return this.grid[g][s].cellType;
  }
  getCellItemType(g) {
    return this.getCell(g).cellObject?.itemType;
  }
  getCell(g) {
    return this.grid[g.y][g.x];
  }
  getRandomCoord() {
    function g(s, E) {
      const $ = Math.ceil(s), F = Math.floor(E);
      return Math.floor(Math.random() * (F - $ + 1)) + $;
    }
    return {
      x: g(1, this.cols - 1),
      y: g(1, this.rows - 1)
    };
  }
}
const G = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right"
};
var gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function N_(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var pt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var G_ = pt.exports, Is;
function $_() {
  return Is || (Is = 1, function(b, g) {
    (function() {
      var s, E = "4.17.21", $ = 200, F = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", U = "Expected a function", z = "Invalid `variable` option passed into `_.template`", he = "__lodash_hash_undefined__", pr = 500, vt = "__lodash_placeholder__", ne = 1, Ni = 2, Se = 4, Ie = 1, wt = 2, En = 1, Te = 2, Gi = 4, Gn = 8, Ke = 16, $n = 32, qe = 64, Hn = 128, Ye = 256, _r = 512, Ms = 30, Ws = "...", Us = 800, Fs = 16, $i = 1, Ps = 2, Bs = 3, ge = 1 / 0, ee = 9007199254740991, Ns = 17976931348623157e292, xt = NaN, Un = 4294967295, Gs = Un - 1, $s = Un >>> 1, Hs = [
        ["ary", Hn],
        ["bind", En],
        ["bindKey", Te],
        ["curry", Gn],
        ["curryRight", Ke],
        ["flip", _r],
        ["partial", $n],
        ["partialRight", qe],
        ["rearg", Ye]
      ], Le = "[object Arguments]", mt = "[object Array]", Ks = "[object AsyncFunction]", ze = "[object Boolean]", ke = "[object Date]", qs = "[object DOMException]", At = "[object Error]", yt = "[object Function]", Hi = "[object GeneratorFunction]", Rn = "[object Map]", Ze = "[object Number]", Ys = "[object Null]", Kn = "[object Object]", Ki = "[object Promise]", zs = "[object Proxy]", Xe = "[object RegExp]", bn = "[object Set]", Je = "[object String]", St = "[object Symbol]", ks = "[object Undefined]", Qe = "[object WeakMap]", Zs = "[object WeakSet]", Ve = "[object ArrayBuffer]", Ce = "[object DataView]", dr = "[object Float32Array]", vr = "[object Float64Array]", wr = "[object Int8Array]", xr = "[object Int16Array]", mr = "[object Int32Array]", Ar = "[object Uint8Array]", yr = "[object Uint8ClampedArray]", Sr = "[object Uint16Array]", Ir = "[object Uint32Array]", Xs = /\b__p \+= '';/g, Js = /\b(__p \+=) '' \+/g, Qs = /(__e\(.*?\)|\b__t\)) \+\n'';/g, qi = /&(?:amp|lt|gt|quot|#39);/g, Yi = /[&<>"']/g, Vs = RegExp(qi.source), js = RegExp(Yi.source), no = /<%-([\s\S]+?)%>/g, eo = /<%([\s\S]+?)%>/g, zi = /<%=([\s\S]+?)%>/g, to = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ro = /^\w*$/, io = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tr = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(Tr.source), Lr = /^\s+/, fo = /\s/, so = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, oo = /\{\n\/\* \[wrapped with (.+)\] \*/, lo = /,? & /, ao = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, co = /[()=,{}\[\]\/\s]/, ho = /\\(\\)?/g, go = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ki = /\w*$/, po = /^[-+]0x[0-9a-f]+$/i, _o = /^0b[01]+$/i, vo = /^\[object .+?Constructor\]$/, wo = /^0o[0-7]+$/i, xo = /^(?:0|[1-9]\d*)$/, mo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, It = /($^)/, Ao = /['\n\r\u2028\u2029\\]/g, Tt = "\\ud800-\\udfff", yo = "\\u0300-\\u036f", So = "\\ufe20-\\ufe2f", Io = "\\u20d0-\\u20ff", Zi = yo + So + Io, Xi = "\\u2700-\\u27bf", Ji = "a-z\\xdf-\\xf6\\xf8-\\xff", To = "\\xac\\xb1\\xd7\\xf7", Lo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Co = "\\u2000-\\u206f", Eo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Qi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Vi = "\\ufe0e\\ufe0f", ji = To + Lo + Co + Eo, Cr = "['’]", Ro = "[" + Tt + "]", nu = "[" + ji + "]", Lt = "[" + Zi + "]", eu = "\\d+", bo = "[" + Xi + "]", tu = "[" + Ji + "]", ru = "[^" + Tt + ji + eu + Xi + Ji + Qi + "]", Er = "\\ud83c[\\udffb-\\udfff]", Oo = "(?:" + Lt + "|" + Er + ")", iu = "[^" + Tt + "]", Rr = "(?:\\ud83c[\\udde6-\\uddff]){2}", br = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ee = "[" + Qi + "]", uu = "\\u200d", fu = "(?:" + tu + "|" + ru + ")", Do = "(?:" + Ee + "|" + ru + ")", su = "(?:" + Cr + "(?:d|ll|m|re|s|t|ve))?", ou = "(?:" + Cr + "(?:D|LL|M|RE|S|T|VE))?", lu = Oo + "?", au = "[" + Vi + "]?", Mo = "(?:" + uu + "(?:" + [iu, Rr, br].join("|") + ")" + au + lu + ")*", Wo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Uo = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cu = au + lu + Mo, Fo = "(?:" + [bo, Rr, br].join("|") + ")" + cu, Po = "(?:" + [iu + Lt + "?", Lt, Rr, br, Ro].join("|") + ")", Bo = RegExp(Cr, "g"), No = RegExp(Lt, "g"), Or = RegExp(Er + "(?=" + Er + ")|" + Po + cu, "g"), Go = RegExp([
        Ee + "?" + tu + "+" + su + "(?=" + [nu, Ee, "$"].join("|") + ")",
        Do + "+" + ou + "(?=" + [nu, Ee + fu, "$"].join("|") + ")",
        Ee + "?" + fu + "+" + su,
        Ee + "+" + ou,
        Uo,
        Wo,
        eu,
        Fo
      ].join("|"), "g"), $o = RegExp("[" + uu + Tt + Zi + Vi + "]"), Ho = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ko = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], qo = -1, q = {};
      q[dr] = q[vr] = q[wr] = q[xr] = q[mr] = q[Ar] = q[yr] = q[Sr] = q[Ir] = !0, q[Le] = q[mt] = q[Ve] = q[ze] = q[Ce] = q[ke] = q[At] = q[yt] = q[Rn] = q[Ze] = q[Kn] = q[Xe] = q[bn] = q[Je] = q[Qe] = !1;
      var K = {};
      K[Le] = K[mt] = K[Ve] = K[Ce] = K[ze] = K[ke] = K[dr] = K[vr] = K[wr] = K[xr] = K[mr] = K[Rn] = K[Ze] = K[Kn] = K[Xe] = K[bn] = K[Je] = K[St] = K[Ar] = K[yr] = K[Sr] = K[Ir] = !0, K[At] = K[yt] = K[Qe] = !1;
      var Yo = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, zo = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, ko = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Zo = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Xo = parseFloat, Jo = parseInt, hu = typeof gr == "object" && gr && gr.Object === Object && gr, Qo = typeof self == "object" && self && self.Object === Object && self, en = hu || Qo || Function("return this")(), Dr = g && !g.nodeType && g, pe = Dr && !0 && b && !b.nodeType && b, gu = pe && pe.exports === Dr, Mr = gu && hu.process, mn = function() {
        try {
          var a = pe && pe.require && pe.require("util").types;
          return a || Mr && Mr.binding && Mr.binding("util");
        } catch {
        }
      }(), pu = mn && mn.isArrayBuffer, _u = mn && mn.isDate, du = mn && mn.isMap, vu = mn && mn.isRegExp, wu = mn && mn.isSet, xu = mn && mn.isTypedArray;
      function pn(a, p, h) {
        switch (h.length) {
          case 0:
            return a.call(p);
          case 1:
            return a.call(p, h[0]);
          case 2:
            return a.call(p, h[0], h[1]);
          case 3:
            return a.call(p, h[0], h[1], h[2]);
        }
        return a.apply(p, h);
      }
      function Vo(a, p, h, x) {
        for (var I = -1, P = a == null ? 0 : a.length; ++I < P; ) {
          var V = a[I];
          p(x, V, h(V), a);
        }
        return x;
      }
      function An(a, p) {
        for (var h = -1, x = a == null ? 0 : a.length; ++h < x && p(a[h], h, a) !== !1; )
          ;
        return a;
      }
      function jo(a, p) {
        for (var h = a == null ? 0 : a.length; h-- && p(a[h], h, a) !== !1; )
          ;
        return a;
      }
      function mu(a, p) {
        for (var h = -1, x = a == null ? 0 : a.length; ++h < x; )
          if (!p(a[h], h, a))
            return !1;
        return !0;
      }
      function te(a, p) {
        for (var h = -1, x = a == null ? 0 : a.length, I = 0, P = []; ++h < x; ) {
          var V = a[h];
          p(V, h, a) && (P[I++] = V);
        }
        return P;
      }
      function Ct(a, p) {
        var h = a == null ? 0 : a.length;
        return !!h && Re(a, p, 0) > -1;
      }
      function Wr(a, p, h) {
        for (var x = -1, I = a == null ? 0 : a.length; ++x < I; )
          if (h(p, a[x]))
            return !0;
        return !1;
      }
      function Y(a, p) {
        for (var h = -1, x = a == null ? 0 : a.length, I = Array(x); ++h < x; )
          I[h] = p(a[h], h, a);
        return I;
      }
      function re(a, p) {
        for (var h = -1, x = p.length, I = a.length; ++h < x; )
          a[I + h] = p[h];
        return a;
      }
      function Ur(a, p, h, x) {
        var I = -1, P = a == null ? 0 : a.length;
        for (x && P && (h = a[++I]); ++I < P; )
          h = p(h, a[I], I, a);
        return h;
      }
      function nl(a, p, h, x) {
        var I = a == null ? 0 : a.length;
        for (x && I && (h = a[--I]); I--; )
          h = p(h, a[I], I, a);
        return h;
      }
      function Fr(a, p) {
        for (var h = -1, x = a == null ? 0 : a.length; ++h < x; )
          if (p(a[h], h, a))
            return !0;
        return !1;
      }
      var el = Pr("length");
      function tl(a) {
        return a.split("");
      }
      function rl(a) {
        return a.match(ao) || [];
      }
      function Au(a, p, h) {
        var x;
        return h(a, function(I, P, V) {
          if (p(I, P, V))
            return x = P, !1;
        }), x;
      }
      function Et(a, p, h, x) {
        for (var I = a.length, P = h + (x ? 1 : -1); x ? P-- : ++P < I; )
          if (p(a[P], P, a))
            return P;
        return -1;
      }
      function Re(a, p, h) {
        return p === p ? _l(a, p, h) : Et(a, yu, h);
      }
      function il(a, p, h, x) {
        for (var I = h - 1, P = a.length; ++I < P; )
          if (x(a[I], p))
            return I;
        return -1;
      }
      function yu(a) {
        return a !== a;
      }
      function Su(a, p) {
        var h = a == null ? 0 : a.length;
        return h ? Nr(a, p) / h : xt;
      }
      function Pr(a) {
        return function(p) {
          return p == null ? s : p[a];
        };
      }
      function Br(a) {
        return function(p) {
          return a == null ? s : a[p];
        };
      }
      function Iu(a, p, h, x, I) {
        return I(a, function(P, V, H) {
          h = x ? (x = !1, P) : p(h, P, V, H);
        }), h;
      }
      function ul(a, p) {
        var h = a.length;
        for (a.sort(p); h--; )
          a[h] = a[h].value;
        return a;
      }
      function Nr(a, p) {
        for (var h, x = -1, I = a.length; ++x < I; ) {
          var P = p(a[x]);
          P !== s && (h = h === s ? P : h + P);
        }
        return h;
      }
      function Gr(a, p) {
        for (var h = -1, x = Array(a); ++h < a; )
          x[h] = p(h);
        return x;
      }
      function fl(a, p) {
        return Y(p, function(h) {
          return [h, a[h]];
        });
      }
      function Tu(a) {
        return a && a.slice(0, Ru(a) + 1).replace(Lr, "");
      }
      function _n(a) {
        return function(p) {
          return a(p);
        };
      }
      function $r(a, p) {
        return Y(p, function(h) {
          return a[h];
        });
      }
      function je(a, p) {
        return a.has(p);
      }
      function Lu(a, p) {
        for (var h = -1, x = a.length; ++h < x && Re(p, a[h], 0) > -1; )
          ;
        return h;
      }
      function Cu(a, p) {
        for (var h = a.length; h-- && Re(p, a[h], 0) > -1; )
          ;
        return h;
      }
      function sl(a, p) {
        for (var h = a.length, x = 0; h--; )
          a[h] === p && ++x;
        return x;
      }
      var ol = Br(Yo), ll = Br(zo);
      function al(a) {
        return "\\" + Zo[a];
      }
      function cl(a, p) {
        return a == null ? s : a[p];
      }
      function be(a) {
        return $o.test(a);
      }
      function hl(a) {
        return Ho.test(a);
      }
      function gl(a) {
        for (var p, h = []; !(p = a.next()).done; )
          h.push(p.value);
        return h;
      }
      function Hr(a) {
        var p = -1, h = Array(a.size);
        return a.forEach(function(x, I) {
          h[++p] = [I, x];
        }), h;
      }
      function Eu(a, p) {
        return function(h) {
          return a(p(h));
        };
      }
      function ie(a, p) {
        for (var h = -1, x = a.length, I = 0, P = []; ++h < x; ) {
          var V = a[h];
          (V === p || V === vt) && (a[h] = vt, P[I++] = h);
        }
        return P;
      }
      function Rt(a) {
        var p = -1, h = Array(a.size);
        return a.forEach(function(x) {
          h[++p] = x;
        }), h;
      }
      function pl(a) {
        var p = -1, h = Array(a.size);
        return a.forEach(function(x) {
          h[++p] = [x, x];
        }), h;
      }
      function _l(a, p, h) {
        for (var x = h - 1, I = a.length; ++x < I; )
          if (a[x] === p)
            return x;
        return -1;
      }
      function dl(a, p, h) {
        for (var x = h + 1; x--; )
          if (a[x] === p)
            return x;
        return x;
      }
      function Oe(a) {
        return be(a) ? wl(a) : el(a);
      }
      function On(a) {
        return be(a) ? xl(a) : tl(a);
      }
      function Ru(a) {
        for (var p = a.length; p-- && fo.test(a.charAt(p)); )
          ;
        return p;
      }
      var vl = Br(ko);
      function wl(a) {
        for (var p = Or.lastIndex = 0; Or.test(a); )
          ++p;
        return p;
      }
      function xl(a) {
        return a.match(Or) || [];
      }
      function ml(a) {
        return a.match(Go) || [];
      }
      var Al = function a(p) {
        p = p == null ? en : De.defaults(en.Object(), p, De.pick(en, Ko));
        var h = p.Array, x = p.Date, I = p.Error, P = p.Function, V = p.Math, H = p.Object, Kr = p.RegExp, yl = p.String, yn = p.TypeError, bt = h.prototype, Sl = P.prototype, Me = H.prototype, Ot = p["__core-js_shared__"], Dt = Sl.toString, N = Me.hasOwnProperty, Il = 0, bu = function() {
          var n = /[^.]+$/.exec(Ot && Ot.keys && Ot.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        }(), Mt = Me.toString, Tl = Dt.call(H), Ll = en._, Cl = Kr(
          "^" + Dt.call(N).replace(Tr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Wt = gu ? p.Buffer : s, ue = p.Symbol, Ut = p.Uint8Array, Ou = Wt ? Wt.allocUnsafe : s, Ft = Eu(H.getPrototypeOf, H), Du = H.create, Mu = Me.propertyIsEnumerable, Pt = bt.splice, Wu = ue ? ue.isConcatSpreadable : s, nt = ue ? ue.iterator : s, _e = ue ? ue.toStringTag : s, Bt = function() {
          try {
            var n = me(H, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        }(), El = p.clearTimeout !== en.clearTimeout && p.clearTimeout, Rl = x && x.now !== en.Date.now && x.now, bl = p.setTimeout !== en.setTimeout && p.setTimeout, Nt = V.ceil, Gt = V.floor, qr = H.getOwnPropertySymbols, Ol = Wt ? Wt.isBuffer : s, Uu = p.isFinite, Dl = bt.join, Ml = Eu(H.keys, H), j = V.max, rn = V.min, Wl = x.now, Ul = p.parseInt, Fu = V.random, Fl = bt.reverse, Yr = me(p, "DataView"), et = me(p, "Map"), zr = me(p, "Promise"), We = me(p, "Set"), tt = me(p, "WeakMap"), rt = me(H, "create"), $t = tt && new tt(), Ue = {}, Pl = Ae(Yr), Bl = Ae(et), Nl = Ae(zr), Gl = Ae(We), $l = Ae(tt), Ht = ue ? ue.prototype : s, it = Ht ? Ht.valueOf : s, Pu = Ht ? Ht.toString : s;
        function u(n) {
          if (Z(n) && !T(n) && !(n instanceof D)) {
            if (n instanceof Sn)
              return n;
            if (N.call(n, "__wrapped__"))
              return Nf(n);
          }
          return new Sn(n);
        }
        var Fe = /* @__PURE__ */ function() {
          function n() {
          }
          return function(e) {
            if (!k(e))
              return {};
            if (Du)
              return Du(e);
            n.prototype = e;
            var t = new n();
            return n.prototype = s, t;
          };
        }();
        function Kt() {
        }
        function Sn(n, e) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = s;
        }
        u.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: no,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: eo,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: zi,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: u
          }
        }, u.prototype = Kt.prototype, u.prototype.constructor = u, Sn.prototype = Fe(Kt.prototype), Sn.prototype.constructor = Sn;
        function D(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Un, this.__views__ = [];
        }
        function Hl() {
          var n = new D(this.__wrapped__);
          return n.__actions__ = an(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = an(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = an(this.__views__), n;
        }
        function Kl() {
          if (this.__filtered__) {
            var n = new D(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function ql() {
          var n = this.__wrapped__.value(), e = this.__dir__, t = T(n), r = e < 0, i = t ? n.length : 0, f = tc(0, i, this.__views__), o = f.start, l = f.end, c = l - o, _ = r ? l : o - 1, d = this.__iteratees__, v = d.length, w = 0, m = rn(c, this.__takeCount__);
          if (!t || !r && i == c && m == c)
            return of(n, this.__actions__);
          var y = [];
          n:
            for (; c-- && w < m; ) {
              _ += e;
              for (var C = -1, S = n[_]; ++C < v; ) {
                var O = d[C], M = O.iteratee, wn = O.type, on = M(S);
                if (wn == Ps)
                  S = on;
                else if (!on) {
                  if (wn == $i)
                    continue n;
                  break n;
                }
              }
              y[w++] = S;
            }
          return y;
        }
        D.prototype = Fe(Kt.prototype), D.prototype.constructor = D;
        function de(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function Yl() {
          this.__data__ = rt ? rt(null) : {}, this.size = 0;
        }
        function zl(n) {
          var e = this.has(n) && delete this.__data__[n];
          return this.size -= e ? 1 : 0, e;
        }
        function kl(n) {
          var e = this.__data__;
          if (rt) {
            var t = e[n];
            return t === he ? s : t;
          }
          return N.call(e, n) ? e[n] : s;
        }
        function Zl(n) {
          var e = this.__data__;
          return rt ? e[n] !== s : N.call(e, n);
        }
        function Xl(n, e) {
          var t = this.__data__;
          return this.size += this.has(n) ? 0 : 1, t[n] = rt && e === s ? he : e, this;
        }
        de.prototype.clear = Yl, de.prototype.delete = zl, de.prototype.get = kl, de.prototype.has = Zl, de.prototype.set = Xl;
        function qn(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function Jl() {
          this.__data__ = [], this.size = 0;
        }
        function Ql(n) {
          var e = this.__data__, t = qt(e, n);
          if (t < 0)
            return !1;
          var r = e.length - 1;
          return t == r ? e.pop() : Pt.call(e, t, 1), --this.size, !0;
        }
        function Vl(n) {
          var e = this.__data__, t = qt(e, n);
          return t < 0 ? s : e[t][1];
        }
        function jl(n) {
          return qt(this.__data__, n) > -1;
        }
        function na(n, e) {
          var t = this.__data__, r = qt(t, n);
          return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
        }
        qn.prototype.clear = Jl, qn.prototype.delete = Ql, qn.prototype.get = Vl, qn.prototype.has = jl, qn.prototype.set = na;
        function Yn(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function ea() {
          this.size = 0, this.__data__ = {
            hash: new de(),
            map: new (et || qn)(),
            string: new de()
          };
        }
        function ta(n) {
          var e = tr(this, n).delete(n);
          return this.size -= e ? 1 : 0, e;
        }
        function ra(n) {
          return tr(this, n).get(n);
        }
        function ia(n) {
          return tr(this, n).has(n);
        }
        function ua(n, e) {
          var t = tr(this, n), r = t.size;
          return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
        }
        Yn.prototype.clear = ea, Yn.prototype.delete = ta, Yn.prototype.get = ra, Yn.prototype.has = ia, Yn.prototype.set = ua;
        function ve(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.__data__ = new Yn(); ++e < t; )
            this.add(n[e]);
        }
        function fa(n) {
          return this.__data__.set(n, he), this;
        }
        function sa(n) {
          return this.__data__.has(n);
        }
        ve.prototype.add = ve.prototype.push = fa, ve.prototype.has = sa;
        function Dn(n) {
          var e = this.__data__ = new qn(n);
          this.size = e.size;
        }
        function oa() {
          this.__data__ = new qn(), this.size = 0;
        }
        function la(n) {
          var e = this.__data__, t = e.delete(n);
          return this.size = e.size, t;
        }
        function aa(n) {
          return this.__data__.get(n);
        }
        function ca(n) {
          return this.__data__.has(n);
        }
        function ha(n, e) {
          var t = this.__data__;
          if (t instanceof qn) {
            var r = t.__data__;
            if (!et || r.length < $ - 1)
              return r.push([n, e]), this.size = ++t.size, this;
            t = this.__data__ = new Yn(r);
          }
          return t.set(n, e), this.size = t.size, this;
        }
        Dn.prototype.clear = oa, Dn.prototype.delete = la, Dn.prototype.get = aa, Dn.prototype.has = ca, Dn.prototype.set = ha;
        function Bu(n, e) {
          var t = T(n), r = !t && ye(n), i = !t && !r && ae(n), f = !t && !r && !i && Ge(n), o = t || r || i || f, l = o ? Gr(n.length, yl) : [], c = l.length;
          for (var _ in n)
            (e || N.call(n, _)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
            (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            f && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
            Xn(_, c))) && l.push(_);
          return l;
        }
        function Nu(n) {
          var e = n.length;
          return e ? n[ri(0, e - 1)] : s;
        }
        function ga(n, e) {
          return rr(an(n), we(e, 0, n.length));
        }
        function pa(n) {
          return rr(an(n));
        }
        function kr(n, e, t) {
          (t !== s && !Mn(n[e], t) || t === s && !(e in n)) && zn(n, e, t);
        }
        function ut(n, e, t) {
          var r = n[e];
          (!(N.call(n, e) && Mn(r, t)) || t === s && !(e in n)) && zn(n, e, t);
        }
        function qt(n, e) {
          for (var t = n.length; t--; )
            if (Mn(n[t][0], e))
              return t;
          return -1;
        }
        function _a(n, e, t, r) {
          return fe(n, function(i, f, o) {
            e(r, i, t(i), o);
          }), r;
        }
        function Gu(n, e) {
          return n && Pn(e, nn(e), n);
        }
        function da(n, e) {
          return n && Pn(e, hn(e), n);
        }
        function zn(n, e, t) {
          e == "__proto__" && Bt ? Bt(n, e, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : n[e] = t;
        }
        function Zr(n, e) {
          for (var t = -1, r = e.length, i = h(r), f = n == null; ++t < r; )
            i[t] = f ? s : Ei(n, e[t]);
          return i;
        }
        function we(n, e, t) {
          return n === n && (t !== s && (n = n <= t ? n : t), e !== s && (n = n >= e ? n : e)), n;
        }
        function In(n, e, t, r, i, f) {
          var o, l = e & ne, c = e & Ni, _ = e & Se;
          if (t && (o = i ? t(n, r, i, f) : t(n)), o !== s)
            return o;
          if (!k(n))
            return n;
          var d = T(n);
          if (d) {
            if (o = ic(n), !l)
              return an(n, o);
          } else {
            var v = un(n), w = v == yt || v == Hi;
            if (ae(n))
              return cf(n, l);
            if (v == Kn || v == Le || w && !i) {
              if (o = c || w ? {} : bf(n), !l)
                return c ? ka(n, da(o, n)) : za(n, Gu(o, n));
            } else {
              if (!K[v])
                return i ? n : {};
              o = uc(n, v, l);
            }
          }
          f || (f = new Dn());
          var m = f.get(n);
          if (m)
            return m;
          f.set(n, o), us(n) ? n.forEach(function(S) {
            o.add(In(S, e, t, S, n, f));
          }) : rs(n) && n.forEach(function(S, O) {
            o.set(O, In(S, e, t, O, n, f));
          });
          var y = _ ? c ? pi : gi : c ? hn : nn, C = d ? s : y(n);
          return An(C || n, function(S, O) {
            C && (O = S, S = n[O]), ut(o, O, In(S, e, t, O, n, f));
          }), o;
        }
        function va(n) {
          var e = nn(n);
          return function(t) {
            return $u(t, n, e);
          };
        }
        function $u(n, e, t) {
          var r = t.length;
          if (n == null)
            return !r;
          for (n = H(n); r--; ) {
            var i = t[r], f = e[i], o = n[i];
            if (o === s && !(i in n) || !f(o))
              return !1;
          }
          return !0;
        }
        function Hu(n, e, t) {
          if (typeof n != "function")
            throw new yn(U);
          return ht(function() {
            n.apply(s, t);
          }, e);
        }
        function ft(n, e, t, r) {
          var i = -1, f = Ct, o = !0, l = n.length, c = [], _ = e.length;
          if (!l)
            return c;
          t && (e = Y(e, _n(t))), r ? (f = Wr, o = !1) : e.length >= $ && (f = je, o = !1, e = new ve(e));
          n:
            for (; ++i < l; ) {
              var d = n[i], v = t == null ? d : t(d);
              if (d = r || d !== 0 ? d : 0, o && v === v) {
                for (var w = _; w--; )
                  if (e[w] === v)
                    continue n;
                c.push(d);
              } else f(e, v, r) || c.push(d);
            }
          return c;
        }
        var fe = df(Fn), Ku = df(Jr, !0);
        function wa(n, e) {
          var t = !0;
          return fe(n, function(r, i, f) {
            return t = !!e(r, i, f), t;
          }), t;
        }
        function Yt(n, e, t) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var f = n[r], o = e(f);
            if (o != null && (l === s ? o === o && !vn(o) : t(o, l)))
              var l = o, c = f;
          }
          return c;
        }
        function xa(n, e, t, r) {
          var i = n.length;
          for (t = L(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === s || r > i ? i : L(r), r < 0 && (r += i), r = t > r ? 0 : ss(r); t < r; )
            n[t++] = e;
          return n;
        }
        function qu(n, e) {
          var t = [];
          return fe(n, function(r, i, f) {
            e(r, i, f) && t.push(r);
          }), t;
        }
        function tn(n, e, t, r, i) {
          var f = -1, o = n.length;
          for (t || (t = sc), i || (i = []); ++f < o; ) {
            var l = n[f];
            e > 0 && t(l) ? e > 1 ? tn(l, e - 1, t, r, i) : re(i, l) : r || (i[i.length] = l);
          }
          return i;
        }
        var Xr = vf(), Yu = vf(!0);
        function Fn(n, e) {
          return n && Xr(n, e, nn);
        }
        function Jr(n, e) {
          return n && Yu(n, e, nn);
        }
        function zt(n, e) {
          return te(e, function(t) {
            return Jn(n[t]);
          });
        }
        function xe(n, e) {
          e = oe(e, n);
          for (var t = 0, r = e.length; n != null && t < r; )
            n = n[Bn(e[t++])];
          return t && t == r ? n : s;
        }
        function zu(n, e, t) {
          var r = e(n);
          return T(n) ? r : re(r, t(n));
        }
        function fn(n) {
          return n == null ? n === s ? ks : Ys : _e && _e in H(n) ? ec(n) : pc(n);
        }
        function Qr(n, e) {
          return n > e;
        }
        function ma(n, e) {
          return n != null && N.call(n, e);
        }
        function Aa(n, e) {
          return n != null && e in H(n);
        }
        function ya(n, e, t) {
          return n >= rn(e, t) && n < j(e, t);
        }
        function Vr(n, e, t) {
          for (var r = t ? Wr : Ct, i = n[0].length, f = n.length, o = f, l = h(f), c = 1 / 0, _ = []; o--; ) {
            var d = n[o];
            o && e && (d = Y(d, _n(e))), c = rn(d.length, c), l[o] = !t && (e || i >= 120 && d.length >= 120) ? new ve(o && d) : s;
          }
          d = n[0];
          var v = -1, w = l[0];
          n:
            for (; ++v < i && _.length < c; ) {
              var m = d[v], y = e ? e(m) : m;
              if (m = t || m !== 0 ? m : 0, !(w ? je(w, y) : r(_, y, t))) {
                for (o = f; --o; ) {
                  var C = l[o];
                  if (!(C ? je(C, y) : r(n[o], y, t)))
                    continue n;
                }
                w && w.push(y), _.push(m);
              }
            }
          return _;
        }
        function Sa(n, e, t, r) {
          return Fn(n, function(i, f, o) {
            e(r, t(i), f, o);
          }), r;
        }
        function st(n, e, t) {
          e = oe(e, n), n = Wf(n, e);
          var r = n == null ? n : n[Bn(Ln(e))];
          return r == null ? s : pn(r, n, t);
        }
        function ku(n) {
          return Z(n) && fn(n) == Le;
        }
        function Ia(n) {
          return Z(n) && fn(n) == Ve;
        }
        function Ta(n) {
          return Z(n) && fn(n) == ke;
        }
        function ot(n, e, t, r, i) {
          return n === e ? !0 : n == null || e == null || !Z(n) && !Z(e) ? n !== n && e !== e : La(n, e, t, r, ot, i);
        }
        function La(n, e, t, r, i, f) {
          var o = T(n), l = T(e), c = o ? mt : un(n), _ = l ? mt : un(e);
          c = c == Le ? Kn : c, _ = _ == Le ? Kn : _;
          var d = c == Kn, v = _ == Kn, w = c == _;
          if (w && ae(n)) {
            if (!ae(e))
              return !1;
            o = !0, d = !1;
          }
          if (w && !d)
            return f || (f = new Dn()), o || Ge(n) ? Cf(n, e, t, r, i, f) : ja(n, e, c, t, r, i, f);
          if (!(t & Ie)) {
            var m = d && N.call(n, "__wrapped__"), y = v && N.call(e, "__wrapped__");
            if (m || y) {
              var C = m ? n.value() : n, S = y ? e.value() : e;
              return f || (f = new Dn()), i(C, S, t, r, f);
            }
          }
          return w ? (f || (f = new Dn()), nc(n, e, t, r, i, f)) : !1;
        }
        function Ca(n) {
          return Z(n) && un(n) == Rn;
        }
        function jr(n, e, t, r) {
          var i = t.length, f = i, o = !r;
          if (n == null)
            return !f;
          for (n = H(n); i--; ) {
            var l = t[i];
            if (o && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
              return !1;
          }
          for (; ++i < f; ) {
            l = t[i];
            var c = l[0], _ = n[c], d = l[1];
            if (o && l[2]) {
              if (_ === s && !(c in n))
                return !1;
            } else {
              var v = new Dn();
              if (r)
                var w = r(_, d, c, n, e, v);
              if (!(w === s ? ot(d, _, Ie | wt, r, v) : w))
                return !1;
            }
          }
          return !0;
        }
        function Zu(n) {
          if (!k(n) || lc(n))
            return !1;
          var e = Jn(n) ? Cl : vo;
          return e.test(Ae(n));
        }
        function Ea(n) {
          return Z(n) && fn(n) == Xe;
        }
        function Ra(n) {
          return Z(n) && un(n) == bn;
        }
        function ba(n) {
          return Z(n) && lr(n.length) && !!q[fn(n)];
        }
        function Xu(n) {
          return typeof n == "function" ? n : n == null ? gn : typeof n == "object" ? T(n) ? Vu(n[0], n[1]) : Qu(n) : ws(n);
        }
        function ni(n) {
          if (!ct(n))
            return Ml(n);
          var e = [];
          for (var t in H(n))
            N.call(n, t) && t != "constructor" && e.push(t);
          return e;
        }
        function Oa(n) {
          if (!k(n))
            return gc(n);
          var e = ct(n), t = [];
          for (var r in n)
            r == "constructor" && (e || !N.call(n, r)) || t.push(r);
          return t;
        }
        function ei(n, e) {
          return n < e;
        }
        function Ju(n, e) {
          var t = -1, r = cn(n) ? h(n.length) : [];
          return fe(n, function(i, f, o) {
            r[++t] = e(i, f, o);
          }), r;
        }
        function Qu(n) {
          var e = di(n);
          return e.length == 1 && e[0][2] ? Df(e[0][0], e[0][1]) : function(t) {
            return t === n || jr(t, n, e);
          };
        }
        function Vu(n, e) {
          return wi(n) && Of(e) ? Df(Bn(n), e) : function(t) {
            var r = Ei(t, n);
            return r === s && r === e ? Ri(t, n) : ot(e, r, Ie | wt);
          };
        }
        function kt(n, e, t, r, i) {
          n !== e && Xr(e, function(f, o) {
            if (i || (i = new Dn()), k(f))
              Da(n, e, o, t, kt, r, i);
            else {
              var l = r ? r(mi(n, o), f, o + "", n, e, i) : s;
              l === s && (l = f), kr(n, o, l);
            }
          }, hn);
        }
        function Da(n, e, t, r, i, f, o) {
          var l = mi(n, t), c = mi(e, t), _ = o.get(c);
          if (_) {
            kr(n, t, _);
            return;
          }
          var d = f ? f(l, c, t + "", n, e, o) : s, v = d === s;
          if (v) {
            var w = T(c), m = !w && ae(c), y = !w && !m && Ge(c);
            d = c, w || m || y ? T(l) ? d = l : X(l) ? d = an(l) : m ? (v = !1, d = cf(c, !0)) : y ? (v = !1, d = hf(c, !0)) : d = [] : gt(c) || ye(c) ? (d = l, ye(l) ? d = os(l) : (!k(l) || Jn(l)) && (d = bf(c))) : v = !1;
          }
          v && (o.set(c, d), i(d, c, r, f, o), o.delete(c)), kr(n, t, d);
        }
        function ju(n, e) {
          var t = n.length;
          if (t)
            return e += e < 0 ? t : 0, Xn(e, t) ? n[e] : s;
        }
        function nf(n, e, t) {
          e.length ? e = Y(e, function(f) {
            return T(f) ? function(o) {
              return xe(o, f.length === 1 ? f[0] : f);
            } : f;
          }) : e = [gn];
          var r = -1;
          e = Y(e, _n(A()));
          var i = Ju(n, function(f, o, l) {
            var c = Y(e, function(_) {
              return _(f);
            });
            return { criteria: c, index: ++r, value: f };
          });
          return ul(i, function(f, o) {
            return Ya(f, o, t);
          });
        }
        function Ma(n, e) {
          return ef(n, e, function(t, r) {
            return Ri(n, r);
          });
        }
        function ef(n, e, t) {
          for (var r = -1, i = e.length, f = {}; ++r < i; ) {
            var o = e[r], l = xe(n, o);
            t(l, o) && lt(f, oe(o, n), l);
          }
          return f;
        }
        function Wa(n) {
          return function(e) {
            return xe(e, n);
          };
        }
        function ti(n, e, t, r) {
          var i = r ? il : Re, f = -1, o = e.length, l = n;
          for (n === e && (e = an(e)), t && (l = Y(n, _n(t))); ++f < o; )
            for (var c = 0, _ = e[f], d = t ? t(_) : _; (c = i(l, d, c, r)) > -1; )
              l !== n && Pt.call(l, c, 1), Pt.call(n, c, 1);
          return n;
        }
        function tf(n, e) {
          for (var t = n ? e.length : 0, r = t - 1; t--; ) {
            var i = e[t];
            if (t == r || i !== f) {
              var f = i;
              Xn(i) ? Pt.call(n, i, 1) : fi(n, i);
            }
          }
          return n;
        }
        function ri(n, e) {
          return n + Gt(Fu() * (e - n + 1));
        }
        function Ua(n, e, t, r) {
          for (var i = -1, f = j(Nt((e - n) / (t || 1)), 0), o = h(f); f--; )
            o[r ? f : ++i] = n, n += t;
          return o;
        }
        function ii(n, e) {
          var t = "";
          if (!n || e < 1 || e > ee)
            return t;
          do
            e % 2 && (t += n), e = Gt(e / 2), e && (n += n);
          while (e);
          return t;
        }
        function R(n, e) {
          return Ai(Mf(n, e, gn), n + "");
        }
        function Fa(n) {
          return Nu($e(n));
        }
        function Pa(n, e) {
          var t = $e(n);
          return rr(t, we(e, 0, t.length));
        }
        function lt(n, e, t, r) {
          if (!k(n))
            return n;
          e = oe(e, n);
          for (var i = -1, f = e.length, o = f - 1, l = n; l != null && ++i < f; ) {
            var c = Bn(e[i]), _ = t;
            if (c === "__proto__" || c === "constructor" || c === "prototype")
              return n;
            if (i != o) {
              var d = l[c];
              _ = r ? r(d, c, l) : s, _ === s && (_ = k(d) ? d : Xn(e[i + 1]) ? [] : {});
            }
            ut(l, c, _), l = l[c];
          }
          return n;
        }
        var rf = $t ? function(n, e) {
          return $t.set(n, e), n;
        } : gn, Ba = Bt ? function(n, e) {
          return Bt(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Oi(e),
            writable: !0
          });
        } : gn;
        function Na(n) {
          return rr($e(n));
        }
        function Tn(n, e, t) {
          var r = -1, i = n.length;
          e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
          for (var f = h(i); ++r < i; )
            f[r] = n[r + e];
          return f;
        }
        function Ga(n, e) {
          var t;
          return fe(n, function(r, i, f) {
            return t = e(r, i, f), !t;
          }), !!t;
        }
        function Zt(n, e, t) {
          var r = 0, i = n == null ? r : n.length;
          if (typeof e == "number" && e === e && i <= $s) {
            for (; r < i; ) {
              var f = r + i >>> 1, o = n[f];
              o !== null && !vn(o) && (t ? o <= e : o < e) ? r = f + 1 : i = f;
            }
            return i;
          }
          return ui(n, e, gn, t);
        }
        function ui(n, e, t, r) {
          var i = 0, f = n == null ? 0 : n.length;
          if (f === 0)
            return 0;
          e = t(e);
          for (var o = e !== e, l = e === null, c = vn(e), _ = e === s; i < f; ) {
            var d = Gt((i + f) / 2), v = t(n[d]), w = v !== s, m = v === null, y = v === v, C = vn(v);
            if (o)
              var S = r || y;
            else _ ? S = y && (r || w) : l ? S = y && w && (r || !m) : c ? S = y && w && !m && (r || !C) : m || C ? S = !1 : S = r ? v <= e : v < e;
            S ? i = d + 1 : f = d;
          }
          return rn(f, Gs);
        }
        function uf(n, e) {
          for (var t = -1, r = n.length, i = 0, f = []; ++t < r; ) {
            var o = n[t], l = e ? e(o) : o;
            if (!t || !Mn(l, c)) {
              var c = l;
              f[i++] = o === 0 ? 0 : o;
            }
          }
          return f;
        }
        function ff(n) {
          return typeof n == "number" ? n : vn(n) ? xt : +n;
        }
        function dn(n) {
          if (typeof n == "string")
            return n;
          if (T(n))
            return Y(n, dn) + "";
          if (vn(n))
            return Pu ? Pu.call(n) : "";
          var e = n + "";
          return e == "0" && 1 / n == -ge ? "-0" : e;
        }
        function se(n, e, t) {
          var r = -1, i = Ct, f = n.length, o = !0, l = [], c = l;
          if (t)
            o = !1, i = Wr;
          else if (f >= $) {
            var _ = e ? null : Qa(n);
            if (_)
              return Rt(_);
            o = !1, i = je, c = new ve();
          } else
            c = e ? [] : l;
          n:
            for (; ++r < f; ) {
              var d = n[r], v = e ? e(d) : d;
              if (d = t || d !== 0 ? d : 0, o && v === v) {
                for (var w = c.length; w--; )
                  if (c[w] === v)
                    continue n;
                e && c.push(v), l.push(d);
              } else i(c, v, t) || (c !== l && c.push(v), l.push(d));
            }
          return l;
        }
        function fi(n, e) {
          return e = oe(e, n), n = Wf(n, e), n == null || delete n[Bn(Ln(e))];
        }
        function sf(n, e, t, r) {
          return lt(n, e, t(xe(n, e)), r);
        }
        function Xt(n, e, t, r) {
          for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && e(n[f], f, n); )
            ;
          return t ? Tn(n, r ? 0 : f, r ? f + 1 : i) : Tn(n, r ? f + 1 : 0, r ? i : f);
        }
        function of(n, e) {
          var t = n;
          return t instanceof D && (t = t.value()), Ur(e, function(r, i) {
            return i.func.apply(i.thisArg, re([r], i.args));
          }, t);
        }
        function si(n, e, t) {
          var r = n.length;
          if (r < 2)
            return r ? se(n[0]) : [];
          for (var i = -1, f = h(r); ++i < r; )
            for (var o = n[i], l = -1; ++l < r; )
              l != i && (f[i] = ft(f[i] || o, n[l], e, t));
          return se(tn(f, 1), e, t);
        }
        function lf(n, e, t) {
          for (var r = -1, i = n.length, f = e.length, o = {}; ++r < i; ) {
            var l = r < f ? e[r] : s;
            t(o, n[r], l);
          }
          return o;
        }
        function oi(n) {
          return X(n) ? n : [];
        }
        function li(n) {
          return typeof n == "function" ? n : gn;
        }
        function oe(n, e) {
          return T(n) ? n : wi(n, e) ? [n] : Bf(B(n));
        }
        var $a = R;
        function le(n, e, t) {
          var r = n.length;
          return t = t === s ? r : t, !e && t >= r ? n : Tn(n, e, t);
        }
        var af = El || function(n) {
          return en.clearTimeout(n);
        };
        function cf(n, e) {
          if (e)
            return n.slice();
          var t = n.length, r = Ou ? Ou(t) : new n.constructor(t);
          return n.copy(r), r;
        }
        function ai(n) {
          var e = new n.constructor(n.byteLength);
          return new Ut(e).set(new Ut(n)), e;
        }
        function Ha(n, e) {
          var t = e ? ai(n.buffer) : n.buffer;
          return new n.constructor(t, n.byteOffset, n.byteLength);
        }
        function Ka(n) {
          var e = new n.constructor(n.source, ki.exec(n));
          return e.lastIndex = n.lastIndex, e;
        }
        function qa(n) {
          return it ? H(it.call(n)) : {};
        }
        function hf(n, e) {
          var t = e ? ai(n.buffer) : n.buffer;
          return new n.constructor(t, n.byteOffset, n.length);
        }
        function gf(n, e) {
          if (n !== e) {
            var t = n !== s, r = n === null, i = n === n, f = vn(n), o = e !== s, l = e === null, c = e === e, _ = vn(e);
            if (!l && !_ && !f && n > e || f && o && c && !l && !_ || r && o && c || !t && c || !i)
              return 1;
            if (!r && !f && !_ && n < e || _ && t && i && !r && !f || l && t && i || !o && i || !c)
              return -1;
          }
          return 0;
        }
        function Ya(n, e, t) {
          for (var r = -1, i = n.criteria, f = e.criteria, o = i.length, l = t.length; ++r < o; ) {
            var c = gf(i[r], f[r]);
            if (c) {
              if (r >= l)
                return c;
              var _ = t[r];
              return c * (_ == "desc" ? -1 : 1);
            }
          }
          return n.index - e.index;
        }
        function pf(n, e, t, r) {
          for (var i = -1, f = n.length, o = t.length, l = -1, c = e.length, _ = j(f - o, 0), d = h(c + _), v = !r; ++l < c; )
            d[l] = e[l];
          for (; ++i < o; )
            (v || i < f) && (d[t[i]] = n[i]);
          for (; _--; )
            d[l++] = n[i++];
          return d;
        }
        function _f(n, e, t, r) {
          for (var i = -1, f = n.length, o = -1, l = t.length, c = -1, _ = e.length, d = j(f - l, 0), v = h(d + _), w = !r; ++i < d; )
            v[i] = n[i];
          for (var m = i; ++c < _; )
            v[m + c] = e[c];
          for (; ++o < l; )
            (w || i < f) && (v[m + t[o]] = n[i++]);
          return v;
        }
        function an(n, e) {
          var t = -1, r = n.length;
          for (e || (e = h(r)); ++t < r; )
            e[t] = n[t];
          return e;
        }
        function Pn(n, e, t, r) {
          var i = !t;
          t || (t = {});
          for (var f = -1, o = e.length; ++f < o; ) {
            var l = e[f], c = r ? r(t[l], n[l], l, t, n) : s;
            c === s && (c = n[l]), i ? zn(t, l, c) : ut(t, l, c);
          }
          return t;
        }
        function za(n, e) {
          return Pn(n, vi(n), e);
        }
        function ka(n, e) {
          return Pn(n, Ef(n), e);
        }
        function Jt(n, e) {
          return function(t, r) {
            var i = T(t) ? Vo : _a, f = e ? e() : {};
            return i(t, n, A(r, 2), f);
          };
        }
        function Pe(n) {
          return R(function(e, t) {
            var r = -1, i = t.length, f = i > 1 ? t[i - 1] : s, o = i > 2 ? t[2] : s;
            for (f = n.length > 3 && typeof f == "function" ? (i--, f) : s, o && sn(t[0], t[1], o) && (f = i < 3 ? s : f, i = 1), e = H(e); ++r < i; ) {
              var l = t[r];
              l && n(e, l, r, f);
            }
            return e;
          });
        }
        function df(n, e) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!cn(t))
              return n(t, r);
            for (var i = t.length, f = e ? i : -1, o = H(t); (e ? f-- : ++f < i) && r(o[f], f, o) !== !1; )
              ;
            return t;
          };
        }
        function vf(n) {
          return function(e, t, r) {
            for (var i = -1, f = H(e), o = r(e), l = o.length; l--; ) {
              var c = o[n ? l : ++i];
              if (t(f[c], c, f) === !1)
                break;
            }
            return e;
          };
        }
        function Za(n, e, t) {
          var r = e & En, i = at(n);
          function f() {
            var o = this && this !== en && this instanceof f ? i : n;
            return o.apply(r ? t : this, arguments);
          }
          return f;
        }
        function wf(n) {
          return function(e) {
            e = B(e);
            var t = be(e) ? On(e) : s, r = t ? t[0] : e.charAt(0), i = t ? le(t, 1).join("") : e.slice(1);
            return r[n]() + i;
          };
        }
        function Be(n) {
          return function(e) {
            return Ur(ds(_s(e).replace(Bo, "")), n, "");
          };
        }
        function at(n) {
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new n();
              case 1:
                return new n(e[0]);
              case 2:
                return new n(e[0], e[1]);
              case 3:
                return new n(e[0], e[1], e[2]);
              case 4:
                return new n(e[0], e[1], e[2], e[3]);
              case 5:
                return new n(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }
            var t = Fe(n.prototype), r = n.apply(t, e);
            return k(r) ? r : t;
          };
        }
        function Xa(n, e, t) {
          var r = at(n);
          function i() {
            for (var f = arguments.length, o = h(f), l = f, c = Ne(i); l--; )
              o[l] = arguments[l];
            var _ = f < 3 && o[0] !== c && o[f - 1] !== c ? [] : ie(o, c);
            if (f -= _.length, f < t)
              return Sf(
                n,
                e,
                Qt,
                i.placeholder,
                s,
                o,
                _,
                s,
                s,
                t - f
              );
            var d = this && this !== en && this instanceof i ? r : n;
            return pn(d, this, o);
          }
          return i;
        }
        function xf(n) {
          return function(e, t, r) {
            var i = H(e);
            if (!cn(e)) {
              var f = A(t, 3);
              e = nn(e), t = function(l) {
                return f(i[l], l, i);
              };
            }
            var o = n(e, t, r);
            return o > -1 ? i[f ? e[o] : o] : s;
          };
        }
        function mf(n) {
          return Zn(function(e) {
            var t = e.length, r = t, i = Sn.prototype.thru;
            for (n && e.reverse(); r--; ) {
              var f = e[r];
              if (typeof f != "function")
                throw new yn(U);
              if (i && !o && er(f) == "wrapper")
                var o = new Sn([], !0);
            }
            for (r = o ? r : t; ++r < t; ) {
              f = e[r];
              var l = er(f), c = l == "wrapper" ? _i(f) : s;
              c && xi(c[0]) && c[1] == (Hn | Gn | $n | Ye) && !c[4].length && c[9] == 1 ? o = o[er(c[0])].apply(o, c[3]) : o = f.length == 1 && xi(f) ? o[l]() : o.thru(f);
            }
            return function() {
              var _ = arguments, d = _[0];
              if (o && _.length == 1 && T(d))
                return o.plant(d).value();
              for (var v = 0, w = t ? e[v].apply(this, _) : d; ++v < t; )
                w = e[v].call(this, w);
              return w;
            };
          });
        }
        function Qt(n, e, t, r, i, f, o, l, c, _) {
          var d = e & Hn, v = e & En, w = e & Te, m = e & (Gn | Ke), y = e & _r, C = w ? s : at(n);
          function S() {
            for (var O = arguments.length, M = h(O), wn = O; wn--; )
              M[wn] = arguments[wn];
            if (m)
              var on = Ne(S), xn = sl(M, on);
            if (r && (M = pf(M, r, i, m)), f && (M = _f(M, f, o, m)), O -= xn, m && O < _) {
              var J = ie(M, on);
              return Sf(
                n,
                e,
                Qt,
                S.placeholder,
                t,
                M,
                J,
                l,
                c,
                _ - O
              );
            }
            var Wn = v ? t : this, Vn = w ? Wn[n] : n;
            return O = M.length, l ? M = _c(M, l) : y && O > 1 && M.reverse(), d && c < O && (M.length = c), this && this !== en && this instanceof S && (Vn = C || at(Vn)), Vn.apply(Wn, M);
          }
          return S;
        }
        function Af(n, e) {
          return function(t, r) {
            return Sa(t, n, e(r), {});
          };
        }
        function Vt(n, e) {
          return function(t, r) {
            var i;
            if (t === s && r === s)
              return e;
            if (t !== s && (i = t), r !== s) {
              if (i === s)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = dn(t), r = dn(r)) : (t = ff(t), r = ff(r)), i = n(t, r);
            }
            return i;
          };
        }
        function ci(n) {
          return Zn(function(e) {
            return e = Y(e, _n(A())), R(function(t) {
              var r = this;
              return n(e, function(i) {
                return pn(i, r, t);
              });
            });
          });
        }
        function jt(n, e) {
          e = e === s ? " " : dn(e);
          var t = e.length;
          if (t < 2)
            return t ? ii(e, n) : e;
          var r = ii(e, Nt(n / Oe(e)));
          return be(e) ? le(On(r), 0, n).join("") : r.slice(0, n);
        }
        function Ja(n, e, t, r) {
          var i = e & En, f = at(n);
          function o() {
            for (var l = -1, c = arguments.length, _ = -1, d = r.length, v = h(d + c), w = this && this !== en && this instanceof o ? f : n; ++_ < d; )
              v[_] = r[_];
            for (; c--; )
              v[_++] = arguments[++l];
            return pn(w, i ? t : this, v);
          }
          return o;
        }
        function yf(n) {
          return function(e, t, r) {
            return r && typeof r != "number" && sn(e, t, r) && (t = r = s), e = Qn(e), t === s ? (t = e, e = 0) : t = Qn(t), r = r === s ? e < t ? 1 : -1 : Qn(r), Ua(e, t, r, n);
          };
        }
        function nr(n) {
          return function(e, t) {
            return typeof e == "string" && typeof t == "string" || (e = Cn(e), t = Cn(t)), n(e, t);
          };
        }
        function Sf(n, e, t, r, i, f, o, l, c, _) {
          var d = e & Gn, v = d ? o : s, w = d ? s : o, m = d ? f : s, y = d ? s : f;
          e |= d ? $n : qe, e &= ~(d ? qe : $n), e & Gi || (e &= -4);
          var C = [
            n,
            e,
            i,
            m,
            v,
            y,
            w,
            l,
            c,
            _
          ], S = t.apply(s, C);
          return xi(n) && Uf(S, C), S.placeholder = r, Ff(S, n, e);
        }
        function hi(n) {
          var e = V[n];
          return function(t, r) {
            if (t = Cn(t), r = r == null ? 0 : rn(L(r), 292), r && Uu(t)) {
              var i = (B(t) + "e").split("e"), f = e(i[0] + "e" + (+i[1] + r));
              return i = (B(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return e(t);
          };
        }
        var Qa = We && 1 / Rt(new We([, -0]))[1] == ge ? function(n) {
          return new We(n);
        } : Wi;
        function If(n) {
          return function(e) {
            var t = un(e);
            return t == Rn ? Hr(e) : t == bn ? pl(e) : fl(e, n(e));
          };
        }
        function kn(n, e, t, r, i, f, o, l) {
          var c = e & Te;
          if (!c && typeof n != "function")
            throw new yn(U);
          var _ = r ? r.length : 0;
          if (_ || (e &= -97, r = i = s), o = o === s ? o : j(L(o), 0), l = l === s ? l : L(l), _ -= i ? i.length : 0, e & qe) {
            var d = r, v = i;
            r = i = s;
          }
          var w = c ? s : _i(n), m = [
            n,
            e,
            t,
            r,
            i,
            d,
            v,
            f,
            o,
            l
          ];
          if (w && hc(m, w), n = m[0], e = m[1], t = m[2], r = m[3], i = m[4], l = m[9] = m[9] === s ? c ? 0 : n.length : j(m[9] - _, 0), !l && e & (Gn | Ke) && (e &= -25), !e || e == En)
            var y = Za(n, e, t);
          else e == Gn || e == Ke ? y = Xa(n, e, l) : (e == $n || e == (En | $n)) && !i.length ? y = Ja(n, e, t, r) : y = Qt.apply(s, m);
          var C = w ? rf : Uf;
          return Ff(C(y, m), n, e);
        }
        function Tf(n, e, t, r) {
          return n === s || Mn(n, Me[t]) && !N.call(r, t) ? e : n;
        }
        function Lf(n, e, t, r, i, f) {
          return k(n) && k(e) && (f.set(e, n), kt(n, e, s, Lf, f), f.delete(e)), n;
        }
        function Va(n) {
          return gt(n) ? s : n;
        }
        function Cf(n, e, t, r, i, f) {
          var o = t & Ie, l = n.length, c = e.length;
          if (l != c && !(o && c > l))
            return !1;
          var _ = f.get(n), d = f.get(e);
          if (_ && d)
            return _ == e && d == n;
          var v = -1, w = !0, m = t & wt ? new ve() : s;
          for (f.set(n, e), f.set(e, n); ++v < l; ) {
            var y = n[v], C = e[v];
            if (r)
              var S = o ? r(C, y, v, e, n, f) : r(y, C, v, n, e, f);
            if (S !== s) {
              if (S)
                continue;
              w = !1;
              break;
            }
            if (m) {
              if (!Fr(e, function(O, M) {
                if (!je(m, M) && (y === O || i(y, O, t, r, f)))
                  return m.push(M);
              })) {
                w = !1;
                break;
              }
            } else if (!(y === C || i(y, C, t, r, f))) {
              w = !1;
              break;
            }
          }
          return f.delete(n), f.delete(e), w;
        }
        function ja(n, e, t, r, i, f, o) {
          switch (t) {
            case Ce:
              if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
                return !1;
              n = n.buffer, e = e.buffer;
            case Ve:
              return !(n.byteLength != e.byteLength || !f(new Ut(n), new Ut(e)));
            case ze:
            case ke:
            case Ze:
              return Mn(+n, +e);
            case At:
              return n.name == e.name && n.message == e.message;
            case Xe:
            case Je:
              return n == e + "";
            case Rn:
              var l = Hr;
            case bn:
              var c = r & Ie;
              if (l || (l = Rt), n.size != e.size && !c)
                return !1;
              var _ = o.get(n);
              if (_)
                return _ == e;
              r |= wt, o.set(n, e);
              var d = Cf(l(n), l(e), r, i, f, o);
              return o.delete(n), d;
            case St:
              if (it)
                return it.call(n) == it.call(e);
          }
          return !1;
        }
        function nc(n, e, t, r, i, f) {
          var o = t & Ie, l = gi(n), c = l.length, _ = gi(e), d = _.length;
          if (c != d && !o)
            return !1;
          for (var v = c; v--; ) {
            var w = l[v];
            if (!(o ? w in e : N.call(e, w)))
              return !1;
          }
          var m = f.get(n), y = f.get(e);
          if (m && y)
            return m == e && y == n;
          var C = !0;
          f.set(n, e), f.set(e, n);
          for (var S = o; ++v < c; ) {
            w = l[v];
            var O = n[w], M = e[w];
            if (r)
              var wn = o ? r(M, O, w, e, n, f) : r(O, M, w, n, e, f);
            if (!(wn === s ? O === M || i(O, M, t, r, f) : wn)) {
              C = !1;
              break;
            }
            S || (S = w == "constructor");
          }
          if (C && !S) {
            var on = n.constructor, xn = e.constructor;
            on != xn && "constructor" in n && "constructor" in e && !(typeof on == "function" && on instanceof on && typeof xn == "function" && xn instanceof xn) && (C = !1);
          }
          return f.delete(n), f.delete(e), C;
        }
        function Zn(n) {
          return Ai(Mf(n, s, Hf), n + "");
        }
        function gi(n) {
          return zu(n, nn, vi);
        }
        function pi(n) {
          return zu(n, hn, Ef);
        }
        var _i = $t ? function(n) {
          return $t.get(n);
        } : Wi;
        function er(n) {
          for (var e = n.name + "", t = Ue[e], r = N.call(Ue, e) ? t.length : 0; r--; ) {
            var i = t[r], f = i.func;
            if (f == null || f == n)
              return i.name;
          }
          return e;
        }
        function Ne(n) {
          var e = N.call(u, "placeholder") ? u : n;
          return e.placeholder;
        }
        function A() {
          var n = u.iteratee || Di;
          return n = n === Di ? Xu : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function tr(n, e) {
          var t = n.__data__;
          return oc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
        }
        function di(n) {
          for (var e = nn(n), t = e.length; t--; ) {
            var r = e[t], i = n[r];
            e[t] = [r, i, Of(i)];
          }
          return e;
        }
        function me(n, e) {
          var t = cl(n, e);
          return Zu(t) ? t : s;
        }
        function ec(n) {
          var e = N.call(n, _e), t = n[_e];
          try {
            n[_e] = s;
            var r = !0;
          } catch {
          }
          var i = Mt.call(n);
          return r && (e ? n[_e] = t : delete n[_e]), i;
        }
        var vi = qr ? function(n) {
          return n == null ? [] : (n = H(n), te(qr(n), function(e) {
            return Mu.call(n, e);
          }));
        } : Ui, Ef = qr ? function(n) {
          for (var e = []; n; )
            re(e, vi(n)), n = Ft(n);
          return e;
        } : Ui, un = fn;
        (Yr && un(new Yr(new ArrayBuffer(1))) != Ce || et && un(new et()) != Rn || zr && un(zr.resolve()) != Ki || We && un(new We()) != bn || tt && un(new tt()) != Qe) && (un = function(n) {
          var e = fn(n), t = e == Kn ? n.constructor : s, r = t ? Ae(t) : "";
          if (r)
            switch (r) {
              case Pl:
                return Ce;
              case Bl:
                return Rn;
              case Nl:
                return Ki;
              case Gl:
                return bn;
              case $l:
                return Qe;
            }
          return e;
        });
        function tc(n, e, t) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var f = t[r], o = f.size;
            switch (f.type) {
              case "drop":
                n += o;
                break;
              case "dropRight":
                e -= o;
                break;
              case "take":
                e = rn(e, n + o);
                break;
              case "takeRight":
                n = j(n, e - o);
                break;
            }
          }
          return { start: n, end: e };
        }
        function rc(n) {
          var e = n.match(oo);
          return e ? e[1].split(lo) : [];
        }
        function Rf(n, e, t) {
          e = oe(e, n);
          for (var r = -1, i = e.length, f = !1; ++r < i; ) {
            var o = Bn(e[r]);
            if (!(f = n != null && t(n, o)))
              break;
            n = n[o];
          }
          return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && lr(i) && Xn(o, i) && (T(n) || ye(n)));
        }
        function ic(n) {
          var e = n.length, t = new n.constructor(e);
          return e && typeof n[0] == "string" && N.call(n, "index") && (t.index = n.index, t.input = n.input), t;
        }
        function bf(n) {
          return typeof n.constructor == "function" && !ct(n) ? Fe(Ft(n)) : {};
        }
        function uc(n, e, t) {
          var r = n.constructor;
          switch (e) {
            case Ve:
              return ai(n);
            case ze:
            case ke:
              return new r(+n);
            case Ce:
              return Ha(n, t);
            case dr:
            case vr:
            case wr:
            case xr:
            case mr:
            case Ar:
            case yr:
            case Sr:
            case Ir:
              return hf(n, t);
            case Rn:
              return new r();
            case Ze:
            case Je:
              return new r(n);
            case Xe:
              return Ka(n);
            case bn:
              return new r();
            case St:
              return qa(n);
          }
        }
        function fc(n, e) {
          var t = e.length;
          if (!t)
            return n;
          var r = t - 1;
          return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(so, `{
/* [wrapped with ` + e + `] */
`);
        }
        function sc(n) {
          return T(n) || ye(n) || !!(Wu && n && n[Wu]);
        }
        function Xn(n, e) {
          var t = typeof n;
          return e = e ?? ee, !!e && (t == "number" || t != "symbol" && xo.test(n)) && n > -1 && n % 1 == 0 && n < e;
        }
        function sn(n, e, t) {
          if (!k(t))
            return !1;
          var r = typeof e;
          return (r == "number" ? cn(t) && Xn(e, t.length) : r == "string" && e in t) ? Mn(t[e], n) : !1;
        }
        function wi(n, e) {
          if (T(n))
            return !1;
          var t = typeof n;
          return t == "number" || t == "symbol" || t == "boolean" || n == null || vn(n) ? !0 : ro.test(n) || !to.test(n) || e != null && n in H(e);
        }
        function oc(n) {
          var e = typeof n;
          return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
        }
        function xi(n) {
          var e = er(n), t = u[e];
          if (typeof t != "function" || !(e in D.prototype))
            return !1;
          if (n === t)
            return !0;
          var r = _i(t);
          return !!r && n === r[0];
        }
        function lc(n) {
          return !!bu && bu in n;
        }
        var ac = Ot ? Jn : Fi;
        function ct(n) {
          var e = n && n.constructor, t = typeof e == "function" && e.prototype || Me;
          return n === t;
        }
        function Of(n) {
          return n === n && !k(n);
        }
        function Df(n, e) {
          return function(t) {
            return t == null ? !1 : t[n] === e && (e !== s || n in H(t));
          };
        }
        function cc(n) {
          var e = sr(n, function(r) {
            return t.size === pr && t.clear(), r;
          }), t = e.cache;
          return e;
        }
        function hc(n, e) {
          var t = n[1], r = e[1], i = t | r, f = i < (En | Te | Hn), o = r == Hn && t == Gn || r == Hn && t == Ye && n[7].length <= e[8] || r == (Hn | Ye) && e[7].length <= e[8] && t == Gn;
          if (!(f || o))
            return n;
          r & En && (n[2] = e[2], i |= t & En ? 0 : Gi);
          var l = e[3];
          if (l) {
            var c = n[3];
            n[3] = c ? pf(c, l, e[4]) : l, n[4] = c ? ie(n[3], vt) : e[4];
          }
          return l = e[5], l && (c = n[5], n[5] = c ? _f(c, l, e[6]) : l, n[6] = c ? ie(n[5], vt) : e[6]), l = e[7], l && (n[7] = l), r & Hn && (n[8] = n[8] == null ? e[8] : rn(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
        }
        function gc(n) {
          var e = [];
          if (n != null)
            for (var t in H(n))
              e.push(t);
          return e;
        }
        function pc(n) {
          return Mt.call(n);
        }
        function Mf(n, e, t) {
          return e = j(e === s ? n.length - 1 : e, 0), function() {
            for (var r = arguments, i = -1, f = j(r.length - e, 0), o = h(f); ++i < f; )
              o[i] = r[e + i];
            i = -1;
            for (var l = h(e + 1); ++i < e; )
              l[i] = r[i];
            return l[e] = t(o), pn(n, this, l);
          };
        }
        function Wf(n, e) {
          return e.length < 2 ? n : xe(n, Tn(e, 0, -1));
        }
        function _c(n, e) {
          for (var t = n.length, r = rn(e.length, t), i = an(n); r--; ) {
            var f = e[r];
            n[r] = Xn(f, t) ? i[f] : s;
          }
          return n;
        }
        function mi(n, e) {
          if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
            return n[e];
        }
        var Uf = Pf(rf), ht = bl || function(n, e) {
          return en.setTimeout(n, e);
        }, Ai = Pf(Ba);
        function Ff(n, e, t) {
          var r = e + "";
          return Ai(n, fc(r, dc(rc(r), t)));
        }
        function Pf(n) {
          var e = 0, t = 0;
          return function() {
            var r = Wl(), i = Fs - (r - t);
            if (t = r, i > 0) {
              if (++e >= Us)
                return arguments[0];
            } else
              e = 0;
            return n.apply(s, arguments);
          };
        }
        function rr(n, e) {
          var t = -1, r = n.length, i = r - 1;
          for (e = e === s ? r : e; ++t < e; ) {
            var f = ri(t, i), o = n[f];
            n[f] = n[t], n[t] = o;
          }
          return n.length = e, n;
        }
        var Bf = cc(function(n) {
          var e = [];
          return n.charCodeAt(0) === 46 && e.push(""), n.replace(io, function(t, r, i, f) {
            e.push(i ? f.replace(ho, "$1") : r || t);
          }), e;
        });
        function Bn(n) {
          if (typeof n == "string" || vn(n))
            return n;
          var e = n + "";
          return e == "0" && 1 / n == -ge ? "-0" : e;
        }
        function Ae(n) {
          if (n != null) {
            try {
              return Dt.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function dc(n, e) {
          return An(Hs, function(t) {
            var r = "_." + t[0];
            e & t[1] && !Ct(n, r) && n.push(r);
          }), n.sort();
        }
        function Nf(n) {
          if (n instanceof D)
            return n.clone();
          var e = new Sn(n.__wrapped__, n.__chain__);
          return e.__actions__ = an(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
        }
        function vc(n, e, t) {
          (t ? sn(n, e, t) : e === s) ? e = 1 : e = j(L(e), 0);
          var r = n == null ? 0 : n.length;
          if (!r || e < 1)
            return [];
          for (var i = 0, f = 0, o = h(Nt(r / e)); i < r; )
            o[f++] = Tn(n, i, i += e);
          return o;
        }
        function wc(n) {
          for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
            var f = n[e];
            f && (i[r++] = f);
          }
          return i;
        }
        function xc() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var e = h(n - 1), t = arguments[0], r = n; r--; )
            e[r - 1] = arguments[r];
          return re(T(t) ? an(t) : [t], tn(e, 1));
        }
        var mc = R(function(n, e) {
          return X(n) ? ft(n, tn(e, 1, X, !0)) : [];
        }), Ac = R(function(n, e) {
          var t = Ln(e);
          return X(t) && (t = s), X(n) ? ft(n, tn(e, 1, X, !0), A(t, 2)) : [];
        }), yc = R(function(n, e) {
          var t = Ln(e);
          return X(t) && (t = s), X(n) ? ft(n, tn(e, 1, X, !0), s, t) : [];
        });
        function Sc(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === s ? 1 : L(e), Tn(n, e < 0 ? 0 : e, r)) : [];
        }
        function Ic(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === s ? 1 : L(e), e = r - e, Tn(n, 0, e < 0 ? 0 : e)) : [];
        }
        function Tc(n, e) {
          return n && n.length ? Xt(n, A(e, 3), !0, !0) : [];
        }
        function Lc(n, e) {
          return n && n.length ? Xt(n, A(e, 3), !0) : [];
        }
        function Cc(n, e, t, r) {
          var i = n == null ? 0 : n.length;
          return i ? (t && typeof t != "number" && sn(n, e, t) && (t = 0, r = i), xa(n, e, t, r)) : [];
        }
        function Gf(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : L(t);
          return i < 0 && (i = j(r + i, 0)), Et(n, A(e, 3), i);
        }
        function $f(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== s && (i = L(t), i = t < 0 ? j(r + i, 0) : rn(i, r - 1)), Et(n, A(e, 3), i, !0);
        }
        function Hf(n) {
          var e = n == null ? 0 : n.length;
          return e ? tn(n, 1) : [];
        }
        function Ec(n) {
          var e = n == null ? 0 : n.length;
          return e ? tn(n, ge) : [];
        }
        function Rc(n, e) {
          var t = n == null ? 0 : n.length;
          return t ? (e = e === s ? 1 : L(e), tn(n, e)) : [];
        }
        function bc(n) {
          for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
            var i = n[e];
            r[i[0]] = i[1];
          }
          return r;
        }
        function Kf(n) {
          return n && n.length ? n[0] : s;
        }
        function Oc(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : L(t);
          return i < 0 && (i = j(r + i, 0)), Re(n, e, i);
        }
        function Dc(n) {
          var e = n == null ? 0 : n.length;
          return e ? Tn(n, 0, -1) : [];
        }
        var Mc = R(function(n) {
          var e = Y(n, oi);
          return e.length && e[0] === n[0] ? Vr(e) : [];
        }), Wc = R(function(n) {
          var e = Ln(n), t = Y(n, oi);
          return e === Ln(t) ? e = s : t.pop(), t.length && t[0] === n[0] ? Vr(t, A(e, 2)) : [];
        }), Uc = R(function(n) {
          var e = Ln(n), t = Y(n, oi);
          return e = typeof e == "function" ? e : s, e && t.pop(), t.length && t[0] === n[0] ? Vr(t, s, e) : [];
        });
        function Fc(n, e) {
          return n == null ? "" : Dl.call(n, e);
        }
        function Ln(n) {
          var e = n == null ? 0 : n.length;
          return e ? n[e - 1] : s;
        }
        function Pc(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = r;
          return t !== s && (i = L(t), i = i < 0 ? j(r + i, 0) : rn(i, r - 1)), e === e ? dl(n, e, i) : Et(n, yu, i, !0);
        }
        function Bc(n, e) {
          return n && n.length ? ju(n, L(e)) : s;
        }
        var Nc = R(qf);
        function qf(n, e) {
          return n && n.length && e && e.length ? ti(n, e) : n;
        }
        function Gc(n, e, t) {
          return n && n.length && e && e.length ? ti(n, e, A(t, 2)) : n;
        }
        function $c(n, e, t) {
          return n && n.length && e && e.length ? ti(n, e, s, t) : n;
        }
        var Hc = Zn(function(n, e) {
          var t = n == null ? 0 : n.length, r = Zr(n, e);
          return tf(n, Y(e, function(i) {
            return Xn(i, t) ? +i : i;
          }).sort(gf)), r;
        });
        function Kc(n, e) {
          var t = [];
          if (!(n && n.length))
            return t;
          var r = -1, i = [], f = n.length;
          for (e = A(e, 3); ++r < f; ) {
            var o = n[r];
            e(o, r, n) && (t.push(o), i.push(r));
          }
          return tf(n, i), t;
        }
        function yi(n) {
          return n == null ? n : Fl.call(n);
        }
        function qc(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (t && typeof t != "number" && sn(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : L(e), t = t === s ? r : L(t)), Tn(n, e, t)) : [];
        }
        function Yc(n, e) {
          return Zt(n, e);
        }
        function zc(n, e, t) {
          return ui(n, e, A(t, 2));
        }
        function kc(n, e) {
          var t = n == null ? 0 : n.length;
          if (t) {
            var r = Zt(n, e);
            if (r < t && Mn(n[r], e))
              return r;
          }
          return -1;
        }
        function Zc(n, e) {
          return Zt(n, e, !0);
        }
        function Xc(n, e, t) {
          return ui(n, e, A(t, 2), !0);
        }
        function Jc(n, e) {
          var t = n == null ? 0 : n.length;
          if (t) {
            var r = Zt(n, e, !0) - 1;
            if (Mn(n[r], e))
              return r;
          }
          return -1;
        }
        function Qc(n) {
          return n && n.length ? uf(n) : [];
        }
        function Vc(n, e) {
          return n && n.length ? uf(n, A(e, 2)) : [];
        }
        function jc(n) {
          var e = n == null ? 0 : n.length;
          return e ? Tn(n, 1, e) : [];
        }
        function nh(n, e, t) {
          return n && n.length ? (e = t || e === s ? 1 : L(e), Tn(n, 0, e < 0 ? 0 : e)) : [];
        }
        function eh(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === s ? 1 : L(e), e = r - e, Tn(n, e < 0 ? 0 : e, r)) : [];
        }
        function th(n, e) {
          return n && n.length ? Xt(n, A(e, 3), !1, !0) : [];
        }
        function rh(n, e) {
          return n && n.length ? Xt(n, A(e, 3)) : [];
        }
        var ih = R(function(n) {
          return se(tn(n, 1, X, !0));
        }), uh = R(function(n) {
          var e = Ln(n);
          return X(e) && (e = s), se(tn(n, 1, X, !0), A(e, 2));
        }), fh = R(function(n) {
          var e = Ln(n);
          return e = typeof e == "function" ? e : s, se(tn(n, 1, X, !0), s, e);
        });
        function sh(n) {
          return n && n.length ? se(n) : [];
        }
        function oh(n, e) {
          return n && n.length ? se(n, A(e, 2)) : [];
        }
        function lh(n, e) {
          return e = typeof e == "function" ? e : s, n && n.length ? se(n, s, e) : [];
        }
        function Si(n) {
          if (!(n && n.length))
            return [];
          var e = 0;
          return n = te(n, function(t) {
            if (X(t))
              return e = j(t.length, e), !0;
          }), Gr(e, function(t) {
            return Y(n, Pr(t));
          });
        }
        function Yf(n, e) {
          if (!(n && n.length))
            return [];
          var t = Si(n);
          return e == null ? t : Y(t, function(r) {
            return pn(e, s, r);
          });
        }
        var ah = R(function(n, e) {
          return X(n) ? ft(n, e) : [];
        }), ch = R(function(n) {
          return si(te(n, X));
        }), hh = R(function(n) {
          var e = Ln(n);
          return X(e) && (e = s), si(te(n, X), A(e, 2));
        }), gh = R(function(n) {
          var e = Ln(n);
          return e = typeof e == "function" ? e : s, si(te(n, X), s, e);
        }), ph = R(Si);
        function _h(n, e) {
          return lf(n || [], e || [], ut);
        }
        function dh(n, e) {
          return lf(n || [], e || [], lt);
        }
        var vh = R(function(n) {
          var e = n.length, t = e > 1 ? n[e - 1] : s;
          return t = typeof t == "function" ? (n.pop(), t) : s, Yf(n, t);
        });
        function zf(n) {
          var e = u(n);
          return e.__chain__ = !0, e;
        }
        function wh(n, e) {
          return e(n), n;
        }
        function ir(n, e) {
          return e(n);
        }
        var xh = Zn(function(n) {
          var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(f) {
            return Zr(f, n);
          };
          return e > 1 || this.__actions__.length || !(r instanceof D) || !Xn(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
            func: ir,
            args: [i],
            thisArg: s
          }), new Sn(r, this.__chain__).thru(function(f) {
            return e && !f.length && f.push(s), f;
          }));
        });
        function mh() {
          return zf(this);
        }
        function Ah() {
          return new Sn(this.value(), this.__chain__);
        }
        function yh() {
          this.__values__ === s && (this.__values__ = fs(this.value()));
          var n = this.__index__ >= this.__values__.length, e = n ? s : this.__values__[this.__index__++];
          return { done: n, value: e };
        }
        function Sh() {
          return this;
        }
        function Ih(n) {
          for (var e, t = this; t instanceof Kt; ) {
            var r = Nf(t);
            r.__index__ = 0, r.__values__ = s, e ? i.__wrapped__ = r : e = r;
            var i = r;
            t = t.__wrapped__;
          }
          return i.__wrapped__ = n, e;
        }
        function Th() {
          var n = this.__wrapped__;
          if (n instanceof D) {
            var e = n;
            return this.__actions__.length && (e = new D(this)), e = e.reverse(), e.__actions__.push({
              func: ir,
              args: [yi],
              thisArg: s
            }), new Sn(e, this.__chain__);
          }
          return this.thru(yi);
        }
        function Lh() {
          return of(this.__wrapped__, this.__actions__);
        }
        var Ch = Jt(function(n, e, t) {
          N.call(n, t) ? ++n[t] : zn(n, t, 1);
        });
        function Eh(n, e, t) {
          var r = T(n) ? mu : wa;
          return t && sn(n, e, t) && (e = s), r(n, A(e, 3));
        }
        function Rh(n, e) {
          var t = T(n) ? te : qu;
          return t(n, A(e, 3));
        }
        var bh = xf(Gf), Oh = xf($f);
        function Dh(n, e) {
          return tn(ur(n, e), 1);
        }
        function Mh(n, e) {
          return tn(ur(n, e), ge);
        }
        function Wh(n, e, t) {
          return t = t === s ? 1 : L(t), tn(ur(n, e), t);
        }
        function kf(n, e) {
          var t = T(n) ? An : fe;
          return t(n, A(e, 3));
        }
        function Zf(n, e) {
          var t = T(n) ? jo : Ku;
          return t(n, A(e, 3));
        }
        var Uh = Jt(function(n, e, t) {
          N.call(n, t) ? n[t].push(e) : zn(n, t, [e]);
        });
        function Fh(n, e, t, r) {
          n = cn(n) ? n : $e(n), t = t && !r ? L(t) : 0;
          var i = n.length;
          return t < 0 && (t = j(i + t, 0)), ar(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Re(n, e, t) > -1;
        }
        var Ph = R(function(n, e, t) {
          var r = -1, i = typeof e == "function", f = cn(n) ? h(n.length) : [];
          return fe(n, function(o) {
            f[++r] = i ? pn(e, o, t) : st(o, e, t);
          }), f;
        }), Bh = Jt(function(n, e, t) {
          zn(n, t, e);
        });
        function ur(n, e) {
          var t = T(n) ? Y : Ju;
          return t(n, A(e, 3));
        }
        function Nh(n, e, t, r) {
          return n == null ? [] : (T(e) || (e = e == null ? [] : [e]), t = r ? s : t, T(t) || (t = t == null ? [] : [t]), nf(n, e, t));
        }
        var Gh = Jt(function(n, e, t) {
          n[t ? 0 : 1].push(e);
        }, function() {
          return [[], []];
        });
        function $h(n, e, t) {
          var r = T(n) ? Ur : Iu, i = arguments.length < 3;
          return r(n, A(e, 4), t, i, fe);
        }
        function Hh(n, e, t) {
          var r = T(n) ? nl : Iu, i = arguments.length < 3;
          return r(n, A(e, 4), t, i, Ku);
        }
        function Kh(n, e) {
          var t = T(n) ? te : qu;
          return t(n, or(A(e, 3)));
        }
        function qh(n) {
          var e = T(n) ? Nu : Fa;
          return e(n);
        }
        function Yh(n, e, t) {
          (t ? sn(n, e, t) : e === s) ? e = 1 : e = L(e);
          var r = T(n) ? ga : Pa;
          return r(n, e);
        }
        function zh(n) {
          var e = T(n) ? pa : Na;
          return e(n);
        }
        function kh(n) {
          if (n == null)
            return 0;
          if (cn(n))
            return ar(n) ? Oe(n) : n.length;
          var e = un(n);
          return e == Rn || e == bn ? n.size : ni(n).length;
        }
        function Zh(n, e, t) {
          var r = T(n) ? Fr : Ga;
          return t && sn(n, e, t) && (e = s), r(n, A(e, 3));
        }
        var Xh = R(function(n, e) {
          if (n == null)
            return [];
          var t = e.length;
          return t > 1 && sn(n, e[0], e[1]) ? e = [] : t > 2 && sn(e[0], e[1], e[2]) && (e = [e[0]]), nf(n, tn(e, 1), []);
        }), fr = Rl || function() {
          return en.Date.now();
        };
        function Jh(n, e) {
          if (typeof e != "function")
            throw new yn(U);
          return n = L(n), function() {
            if (--n < 1)
              return e.apply(this, arguments);
          };
        }
        function Xf(n, e, t) {
          return e = t ? s : e, e = n && e == null ? n.length : e, kn(n, Hn, s, s, s, s, e);
        }
        function Jf(n, e) {
          var t;
          if (typeof e != "function")
            throw new yn(U);
          return n = L(n), function() {
            return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = s), t;
          };
        }
        var Ii = R(function(n, e, t) {
          var r = En;
          if (t.length) {
            var i = ie(t, Ne(Ii));
            r |= $n;
          }
          return kn(n, r, e, t, i);
        }), Qf = R(function(n, e, t) {
          var r = En | Te;
          if (t.length) {
            var i = ie(t, Ne(Qf));
            r |= $n;
          }
          return kn(e, r, n, t, i);
        });
        function Vf(n, e, t) {
          e = t ? s : e;
          var r = kn(n, Gn, s, s, s, s, s, e);
          return r.placeholder = Vf.placeholder, r;
        }
        function jf(n, e, t) {
          e = t ? s : e;
          var r = kn(n, Ke, s, s, s, s, s, e);
          return r.placeholder = jf.placeholder, r;
        }
        function ns(n, e, t) {
          var r, i, f, o, l, c, _ = 0, d = !1, v = !1, w = !0;
          if (typeof n != "function")
            throw new yn(U);
          e = Cn(e) || 0, k(t) && (d = !!t.leading, v = "maxWait" in t, f = v ? j(Cn(t.maxWait) || 0, e) : f, w = "trailing" in t ? !!t.trailing : w);
          function m(J) {
            var Wn = r, Vn = i;
            return r = i = s, _ = J, o = n.apply(Vn, Wn), o;
          }
          function y(J) {
            return _ = J, l = ht(O, e), d ? m(J) : o;
          }
          function C(J) {
            var Wn = J - c, Vn = J - _, xs = e - Wn;
            return v ? rn(xs, f - Vn) : xs;
          }
          function S(J) {
            var Wn = J - c, Vn = J - _;
            return c === s || Wn >= e || Wn < 0 || v && Vn >= f;
          }
          function O() {
            var J = fr();
            if (S(J))
              return M(J);
            l = ht(O, C(J));
          }
          function M(J) {
            return l = s, w && r ? m(J) : (r = i = s, o);
          }
          function wn() {
            l !== s && af(l), _ = 0, r = c = i = l = s;
          }
          function on() {
            return l === s ? o : M(fr());
          }
          function xn() {
            var J = fr(), Wn = S(J);
            if (r = arguments, i = this, c = J, Wn) {
              if (l === s)
                return y(c);
              if (v)
                return af(l), l = ht(O, e), m(c);
            }
            return l === s && (l = ht(O, e)), o;
          }
          return xn.cancel = wn, xn.flush = on, xn;
        }
        var Qh = R(function(n, e) {
          return Hu(n, 1, e);
        }), Vh = R(function(n, e, t) {
          return Hu(n, Cn(e) || 0, t);
        });
        function jh(n) {
          return kn(n, _r);
        }
        function sr(n, e) {
          if (typeof n != "function" || e != null && typeof e != "function")
            throw new yn(U);
          var t = function() {
            var r = arguments, i = e ? e.apply(this, r) : r[0], f = t.cache;
            if (f.has(i))
              return f.get(i);
            var o = n.apply(this, r);
            return t.cache = f.set(i, o) || f, o;
          };
          return t.cache = new (sr.Cache || Yn)(), t;
        }
        sr.Cache = Yn;
        function or(n) {
          if (typeof n != "function")
            throw new yn(U);
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, e[0]);
              case 2:
                return !n.call(this, e[0], e[1]);
              case 3:
                return !n.call(this, e[0], e[1], e[2]);
            }
            return !n.apply(this, e);
          };
        }
        function ng(n) {
          return Jf(2, n);
        }
        var eg = $a(function(n, e) {
          e = e.length == 1 && T(e[0]) ? Y(e[0], _n(A())) : Y(tn(e, 1), _n(A()));
          var t = e.length;
          return R(function(r) {
            for (var i = -1, f = rn(r.length, t); ++i < f; )
              r[i] = e[i].call(this, r[i]);
            return pn(n, this, r);
          });
        }), Ti = R(function(n, e) {
          var t = ie(e, Ne(Ti));
          return kn(n, $n, s, e, t);
        }), es = R(function(n, e) {
          var t = ie(e, Ne(es));
          return kn(n, qe, s, e, t);
        }), tg = Zn(function(n, e) {
          return kn(n, Ye, s, s, s, e);
        });
        function rg(n, e) {
          if (typeof n != "function")
            throw new yn(U);
          return e = e === s ? e : L(e), R(n, e);
        }
        function ig(n, e) {
          if (typeof n != "function")
            throw new yn(U);
          return e = e == null ? 0 : j(L(e), 0), R(function(t) {
            var r = t[e], i = le(t, 0, e);
            return r && re(i, r), pn(n, this, i);
          });
        }
        function ug(n, e, t) {
          var r = !0, i = !0;
          if (typeof n != "function")
            throw new yn(U);
          return k(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), ns(n, e, {
            leading: r,
            maxWait: e,
            trailing: i
          });
        }
        function fg(n) {
          return Xf(n, 1);
        }
        function sg(n, e) {
          return Ti(li(e), n);
        }
        function og() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return T(n) ? n : [n];
        }
        function lg(n) {
          return In(n, Se);
        }
        function ag(n, e) {
          return e = typeof e == "function" ? e : s, In(n, Se, e);
        }
        function cg(n) {
          return In(n, ne | Se);
        }
        function hg(n, e) {
          return e = typeof e == "function" ? e : s, In(n, ne | Se, e);
        }
        function gg(n, e) {
          return e == null || $u(n, e, nn(e));
        }
        function Mn(n, e) {
          return n === e || n !== n && e !== e;
        }
        var pg = nr(Qr), _g = nr(function(n, e) {
          return n >= e;
        }), ye = ku(/* @__PURE__ */ function() {
          return arguments;
        }()) ? ku : function(n) {
          return Z(n) && N.call(n, "callee") && !Mu.call(n, "callee");
        }, T = h.isArray, dg = pu ? _n(pu) : Ia;
        function cn(n) {
          return n != null && lr(n.length) && !Jn(n);
        }
        function X(n) {
          return Z(n) && cn(n);
        }
        function vg(n) {
          return n === !0 || n === !1 || Z(n) && fn(n) == ze;
        }
        var ae = Ol || Fi, wg = _u ? _n(_u) : Ta;
        function xg(n) {
          return Z(n) && n.nodeType === 1 && !gt(n);
        }
        function mg(n) {
          if (n == null)
            return !0;
          if (cn(n) && (T(n) || typeof n == "string" || typeof n.splice == "function" || ae(n) || Ge(n) || ye(n)))
            return !n.length;
          var e = un(n);
          if (e == Rn || e == bn)
            return !n.size;
          if (ct(n))
            return !ni(n).length;
          for (var t in n)
            if (N.call(n, t))
              return !1;
          return !0;
        }
        function Ag(n, e) {
          return ot(n, e);
        }
        function yg(n, e, t) {
          t = typeof t == "function" ? t : s;
          var r = t ? t(n, e) : s;
          return r === s ? ot(n, e, s, t) : !!r;
        }
        function Li(n) {
          if (!Z(n))
            return !1;
          var e = fn(n);
          return e == At || e == qs || typeof n.message == "string" && typeof n.name == "string" && !gt(n);
        }
        function Sg(n) {
          return typeof n == "number" && Uu(n);
        }
        function Jn(n) {
          if (!k(n))
            return !1;
          var e = fn(n);
          return e == yt || e == Hi || e == Ks || e == zs;
        }
        function ts(n) {
          return typeof n == "number" && n == L(n);
        }
        function lr(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ee;
        }
        function k(n) {
          var e = typeof n;
          return n != null && (e == "object" || e == "function");
        }
        function Z(n) {
          return n != null && typeof n == "object";
        }
        var rs = du ? _n(du) : Ca;
        function Ig(n, e) {
          return n === e || jr(n, e, di(e));
        }
        function Tg(n, e, t) {
          return t = typeof t == "function" ? t : s, jr(n, e, di(e), t);
        }
        function Lg(n) {
          return is(n) && n != +n;
        }
        function Cg(n) {
          if (ac(n))
            throw new I(F);
          return Zu(n);
        }
        function Eg(n) {
          return n === null;
        }
        function Rg(n) {
          return n == null;
        }
        function is(n) {
          return typeof n == "number" || Z(n) && fn(n) == Ze;
        }
        function gt(n) {
          if (!Z(n) || fn(n) != Kn)
            return !1;
          var e = Ft(n);
          if (e === null)
            return !0;
          var t = N.call(e, "constructor") && e.constructor;
          return typeof t == "function" && t instanceof t && Dt.call(t) == Tl;
        }
        var Ci = vu ? _n(vu) : Ea;
        function bg(n) {
          return ts(n) && n >= -ee && n <= ee;
        }
        var us = wu ? _n(wu) : Ra;
        function ar(n) {
          return typeof n == "string" || !T(n) && Z(n) && fn(n) == Je;
        }
        function vn(n) {
          return typeof n == "symbol" || Z(n) && fn(n) == St;
        }
        var Ge = xu ? _n(xu) : ba;
        function Og(n) {
          return n === s;
        }
        function Dg(n) {
          return Z(n) && un(n) == Qe;
        }
        function Mg(n) {
          return Z(n) && fn(n) == Zs;
        }
        var Wg = nr(ei), Ug = nr(function(n, e) {
          return n <= e;
        });
        function fs(n) {
          if (!n)
            return [];
          if (cn(n))
            return ar(n) ? On(n) : an(n);
          if (nt && n[nt])
            return gl(n[nt]());
          var e = un(n), t = e == Rn ? Hr : e == bn ? Rt : $e;
          return t(n);
        }
        function Qn(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = Cn(n), n === ge || n === -ge) {
            var e = n < 0 ? -1 : 1;
            return e * Ns;
          }
          return n === n ? n : 0;
        }
        function L(n) {
          var e = Qn(n), t = e % 1;
          return e === e ? t ? e - t : e : 0;
        }
        function ss(n) {
          return n ? we(L(n), 0, Un) : 0;
        }
        function Cn(n) {
          if (typeof n == "number")
            return n;
          if (vn(n))
            return xt;
          if (k(n)) {
            var e = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = k(e) ? e + "" : e;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Tu(n);
          var t = _o.test(n);
          return t || wo.test(n) ? Jo(n.slice(2), t ? 2 : 8) : po.test(n) ? xt : +n;
        }
        function os(n) {
          return Pn(n, hn(n));
        }
        function Fg(n) {
          return n ? we(L(n), -ee, ee) : n === 0 ? n : 0;
        }
        function B(n) {
          return n == null ? "" : dn(n);
        }
        var Pg = Pe(function(n, e) {
          if (ct(e) || cn(e)) {
            Pn(e, nn(e), n);
            return;
          }
          for (var t in e)
            N.call(e, t) && ut(n, t, e[t]);
        }), ls = Pe(function(n, e) {
          Pn(e, hn(e), n);
        }), cr = Pe(function(n, e, t, r) {
          Pn(e, hn(e), n, r);
        }), Bg = Pe(function(n, e, t, r) {
          Pn(e, nn(e), n, r);
        }), Ng = Zn(Zr);
        function Gg(n, e) {
          var t = Fe(n);
          return e == null ? t : Gu(t, e);
        }
        var $g = R(function(n, e) {
          n = H(n);
          var t = -1, r = e.length, i = r > 2 ? e[2] : s;
          for (i && sn(e[0], e[1], i) && (r = 1); ++t < r; )
            for (var f = e[t], o = hn(f), l = -1, c = o.length; ++l < c; ) {
              var _ = o[l], d = n[_];
              (d === s || Mn(d, Me[_]) && !N.call(n, _)) && (n[_] = f[_]);
            }
          return n;
        }), Hg = R(function(n) {
          return n.push(s, Lf), pn(as, s, n);
        });
        function Kg(n, e) {
          return Au(n, A(e, 3), Fn);
        }
        function qg(n, e) {
          return Au(n, A(e, 3), Jr);
        }
        function Yg(n, e) {
          return n == null ? n : Xr(n, A(e, 3), hn);
        }
        function zg(n, e) {
          return n == null ? n : Yu(n, A(e, 3), hn);
        }
        function kg(n, e) {
          return n && Fn(n, A(e, 3));
        }
        function Zg(n, e) {
          return n && Jr(n, A(e, 3));
        }
        function Xg(n) {
          return n == null ? [] : zt(n, nn(n));
        }
        function Jg(n) {
          return n == null ? [] : zt(n, hn(n));
        }
        function Ei(n, e, t) {
          var r = n == null ? s : xe(n, e);
          return r === s ? t : r;
        }
        function Qg(n, e) {
          return n != null && Rf(n, e, ma);
        }
        function Ri(n, e) {
          return n != null && Rf(n, e, Aa);
        }
        var Vg = Af(function(n, e, t) {
          e != null && typeof e.toString != "function" && (e = Mt.call(e)), n[e] = t;
        }, Oi(gn)), jg = Af(function(n, e, t) {
          e != null && typeof e.toString != "function" && (e = Mt.call(e)), N.call(n, e) ? n[e].push(t) : n[e] = [t];
        }, A), np = R(st);
        function nn(n) {
          return cn(n) ? Bu(n) : ni(n);
        }
        function hn(n) {
          return cn(n) ? Bu(n, !0) : Oa(n);
        }
        function ep(n, e) {
          var t = {};
          return e = A(e, 3), Fn(n, function(r, i, f) {
            zn(t, e(r, i, f), r);
          }), t;
        }
        function tp(n, e) {
          var t = {};
          return e = A(e, 3), Fn(n, function(r, i, f) {
            zn(t, i, e(r, i, f));
          }), t;
        }
        var rp = Pe(function(n, e, t) {
          kt(n, e, t);
        }), as = Pe(function(n, e, t, r) {
          kt(n, e, t, r);
        }), ip = Zn(function(n, e) {
          var t = {};
          if (n == null)
            return t;
          var r = !1;
          e = Y(e, function(f) {
            return f = oe(f, n), r || (r = f.length > 1), f;
          }), Pn(n, pi(n), t), r && (t = In(t, ne | Ni | Se, Va));
          for (var i = e.length; i--; )
            fi(t, e[i]);
          return t;
        });
        function up(n, e) {
          return cs(n, or(A(e)));
        }
        var fp = Zn(function(n, e) {
          return n == null ? {} : Ma(n, e);
        });
        function cs(n, e) {
          if (n == null)
            return {};
          var t = Y(pi(n), function(r) {
            return [r];
          });
          return e = A(e), ef(n, t, function(r, i) {
            return e(r, i[0]);
          });
        }
        function sp(n, e, t) {
          e = oe(e, n);
          var r = -1, i = e.length;
          for (i || (i = 1, n = s); ++r < i; ) {
            var f = n == null ? s : n[Bn(e[r])];
            f === s && (r = i, f = t), n = Jn(f) ? f.call(n) : f;
          }
          return n;
        }
        function op(n, e, t) {
          return n == null ? n : lt(n, e, t);
        }
        function lp(n, e, t, r) {
          return r = typeof r == "function" ? r : s, n == null ? n : lt(n, e, t, r);
        }
        var hs = If(nn), gs = If(hn);
        function ap(n, e, t) {
          var r = T(n), i = r || ae(n) || Ge(n);
          if (e = A(e, 4), t == null) {
            var f = n && n.constructor;
            i ? t = r ? new f() : [] : k(n) ? t = Jn(f) ? Fe(Ft(n)) : {} : t = {};
          }
          return (i ? An : Fn)(n, function(o, l, c) {
            return e(t, o, l, c);
          }), t;
        }
        function cp(n, e) {
          return n == null ? !0 : fi(n, e);
        }
        function hp(n, e, t) {
          return n == null ? n : sf(n, e, li(t));
        }
        function gp(n, e, t, r) {
          return r = typeof r == "function" ? r : s, n == null ? n : sf(n, e, li(t), r);
        }
        function $e(n) {
          return n == null ? [] : $r(n, nn(n));
        }
        function pp(n) {
          return n == null ? [] : $r(n, hn(n));
        }
        function _p(n, e, t) {
          return t === s && (t = e, e = s), t !== s && (t = Cn(t), t = t === t ? t : 0), e !== s && (e = Cn(e), e = e === e ? e : 0), we(Cn(n), e, t);
        }
        function dp(n, e, t) {
          return e = Qn(e), t === s ? (t = e, e = 0) : t = Qn(t), n = Cn(n), ya(n, e, t);
        }
        function vp(n, e, t) {
          if (t && typeof t != "boolean" && sn(n, e, t) && (e = t = s), t === s && (typeof e == "boolean" ? (t = e, e = s) : typeof n == "boolean" && (t = n, n = s)), n === s && e === s ? (n = 0, e = 1) : (n = Qn(n), e === s ? (e = n, n = 0) : e = Qn(e)), n > e) {
            var r = n;
            n = e, e = r;
          }
          if (t || n % 1 || e % 1) {
            var i = Fu();
            return rn(n + i * (e - n + Xo("1e-" + ((i + "").length - 1))), e);
          }
          return ri(n, e);
        }
        var wp = Be(function(n, e, t) {
          return e = e.toLowerCase(), n + (t ? ps(e) : e);
        });
        function ps(n) {
          return bi(B(n).toLowerCase());
        }
        function _s(n) {
          return n = B(n), n && n.replace(mo, ol).replace(No, "");
        }
        function xp(n, e, t) {
          n = B(n), e = dn(e);
          var r = n.length;
          t = t === s ? r : we(L(t), 0, r);
          var i = t;
          return t -= e.length, t >= 0 && n.slice(t, i) == e;
        }
        function mp(n) {
          return n = B(n), n && js.test(n) ? n.replace(Yi, ll) : n;
        }
        function Ap(n) {
          return n = B(n), n && uo.test(n) ? n.replace(Tr, "\\$&") : n;
        }
        var yp = Be(function(n, e, t) {
          return n + (t ? "-" : "") + e.toLowerCase();
        }), Sp = Be(function(n, e, t) {
          return n + (t ? " " : "") + e.toLowerCase();
        }), Ip = wf("toLowerCase");
        function Tp(n, e, t) {
          n = B(n), e = L(e);
          var r = e ? Oe(n) : 0;
          if (!e || r >= e)
            return n;
          var i = (e - r) / 2;
          return jt(Gt(i), t) + n + jt(Nt(i), t);
        }
        function Lp(n, e, t) {
          n = B(n), e = L(e);
          var r = e ? Oe(n) : 0;
          return e && r < e ? n + jt(e - r, t) : n;
        }
        function Cp(n, e, t) {
          n = B(n), e = L(e);
          var r = e ? Oe(n) : 0;
          return e && r < e ? jt(e - r, t) + n : n;
        }
        function Ep(n, e, t) {
          return t || e == null ? e = 0 : e && (e = +e), Ul(B(n).replace(Lr, ""), e || 0);
        }
        function Rp(n, e, t) {
          return (t ? sn(n, e, t) : e === s) ? e = 1 : e = L(e), ii(B(n), e);
        }
        function bp() {
          var n = arguments, e = B(n[0]);
          return n.length < 3 ? e : e.replace(n[1], n[2]);
        }
        var Op = Be(function(n, e, t) {
          return n + (t ? "_" : "") + e.toLowerCase();
        });
        function Dp(n, e, t) {
          return t && typeof t != "number" && sn(n, e, t) && (e = t = s), t = t === s ? Un : t >>> 0, t ? (n = B(n), n && (typeof e == "string" || e != null && !Ci(e)) && (e = dn(e), !e && be(n)) ? le(On(n), 0, t) : n.split(e, t)) : [];
        }
        var Mp = Be(function(n, e, t) {
          return n + (t ? " " : "") + bi(e);
        });
        function Wp(n, e, t) {
          return n = B(n), t = t == null ? 0 : we(L(t), 0, n.length), e = dn(e), n.slice(t, t + e.length) == e;
        }
        function Up(n, e, t) {
          var r = u.templateSettings;
          t && sn(n, e, t) && (e = s), n = B(n), e = cr({}, e, r, Tf);
          var i = cr({}, e.imports, r.imports, Tf), f = nn(i), o = $r(i, f), l, c, _ = 0, d = e.interpolate || It, v = "__p += '", w = Kr(
            (e.escape || It).source + "|" + d.source + "|" + (d === zi ? go : It).source + "|" + (e.evaluate || It).source + "|$",
            "g"
          ), m = "//# sourceURL=" + (N.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qo + "]") + `
`;
          n.replace(w, function(S, O, M, wn, on, xn) {
            return M || (M = wn), v += n.slice(_, xn).replace(Ao, al), O && (l = !0, v += `' +
__e(` + O + `) +
'`), on && (c = !0, v += `';
` + on + `;
__p += '`), M && (v += `' +
((__t = (` + M + `)) == null ? '' : __t) +
'`), _ = xn + S.length, S;
          }), v += `';
`;
          var y = N.call(e, "variable") && e.variable;
          if (!y)
            v = `with (obj) {
` + v + `
}
`;
          else if (co.test(y))
            throw new I(z);
          v = (c ? v.replace(Xs, "") : v).replace(Js, "$1").replace(Qs, "$1;"), v = "function(" + (y || "obj") + `) {
` + (y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
          var C = vs(function() {
            return P(f, m + "return " + v).apply(s, o);
          });
          if (C.source = v, Li(C))
            throw C;
          return C;
        }
        function Fp(n) {
          return B(n).toLowerCase();
        }
        function Pp(n) {
          return B(n).toUpperCase();
        }
        function Bp(n, e, t) {
          if (n = B(n), n && (t || e === s))
            return Tu(n);
          if (!n || !(e = dn(e)))
            return n;
          var r = On(n), i = On(e), f = Lu(r, i), o = Cu(r, i) + 1;
          return le(r, f, o).join("");
        }
        function Np(n, e, t) {
          if (n = B(n), n && (t || e === s))
            return n.slice(0, Ru(n) + 1);
          if (!n || !(e = dn(e)))
            return n;
          var r = On(n), i = Cu(r, On(e)) + 1;
          return le(r, 0, i).join("");
        }
        function Gp(n, e, t) {
          if (n = B(n), n && (t || e === s))
            return n.replace(Lr, "");
          if (!n || !(e = dn(e)))
            return n;
          var r = On(n), i = Lu(r, On(e));
          return le(r, i).join("");
        }
        function $p(n, e) {
          var t = Ms, r = Ws;
          if (k(e)) {
            var i = "separator" in e ? e.separator : i;
            t = "length" in e ? L(e.length) : t, r = "omission" in e ? dn(e.omission) : r;
          }
          n = B(n);
          var f = n.length;
          if (be(n)) {
            var o = On(n);
            f = o.length;
          }
          if (t >= f)
            return n;
          var l = t - Oe(r);
          if (l < 1)
            return r;
          var c = o ? le(o, 0, l).join("") : n.slice(0, l);
          if (i === s)
            return c + r;
          if (o && (l += c.length - l), Ci(i)) {
            if (n.slice(l).search(i)) {
              var _, d = c;
              for (i.global || (i = Kr(i.source, B(ki.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(d); )
                var v = _.index;
              c = c.slice(0, v === s ? l : v);
            }
          } else if (n.indexOf(dn(i), l) != l) {
            var w = c.lastIndexOf(i);
            w > -1 && (c = c.slice(0, w));
          }
          return c + r;
        }
        function Hp(n) {
          return n = B(n), n && Vs.test(n) ? n.replace(qi, vl) : n;
        }
        var Kp = Be(function(n, e, t) {
          return n + (t ? " " : "") + e.toUpperCase();
        }), bi = wf("toUpperCase");
        function ds(n, e, t) {
          return n = B(n), e = t ? s : e, e === s ? hl(n) ? ml(n) : rl(n) : n.match(e) || [];
        }
        var vs = R(function(n, e) {
          try {
            return pn(n, s, e);
          } catch (t) {
            return Li(t) ? t : new I(t);
          }
        }), qp = Zn(function(n, e) {
          return An(e, function(t) {
            t = Bn(t), zn(n, t, Ii(n[t], n));
          }), n;
        });
        function Yp(n) {
          var e = n == null ? 0 : n.length, t = A();
          return n = e ? Y(n, function(r) {
            if (typeof r[1] != "function")
              throw new yn(U);
            return [t(r[0]), r[1]];
          }) : [], R(function(r) {
            for (var i = -1; ++i < e; ) {
              var f = n[i];
              if (pn(f[0], this, r))
                return pn(f[1], this, r);
            }
          });
        }
        function zp(n) {
          return va(In(n, ne));
        }
        function Oi(n) {
          return function() {
            return n;
          };
        }
        function kp(n, e) {
          return n == null || n !== n ? e : n;
        }
        var Zp = mf(), Xp = mf(!0);
        function gn(n) {
          return n;
        }
        function Di(n) {
          return Xu(typeof n == "function" ? n : In(n, ne));
        }
        function Jp(n) {
          return Qu(In(n, ne));
        }
        function Qp(n, e) {
          return Vu(n, In(e, ne));
        }
        var Vp = R(function(n, e) {
          return function(t) {
            return st(t, n, e);
          };
        }), jp = R(function(n, e) {
          return function(t) {
            return st(n, t, e);
          };
        });
        function Mi(n, e, t) {
          var r = nn(e), i = zt(e, r);
          t == null && !(k(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = zt(e, nn(e)));
          var f = !(k(t) && "chain" in t) || !!t.chain, o = Jn(n);
          return An(i, function(l) {
            var c = e[l];
            n[l] = c, o && (n.prototype[l] = function() {
              var _ = this.__chain__;
              if (f || _) {
                var d = n(this.__wrapped__), v = d.__actions__ = an(this.__actions__);
                return v.push({ func: c, args: arguments, thisArg: n }), d.__chain__ = _, d;
              }
              return c.apply(n, re([this.value()], arguments));
            });
          }), n;
        }
        function n_() {
          return en._ === this && (en._ = Ll), this;
        }
        function Wi() {
        }
        function e_(n) {
          return n = L(n), R(function(e) {
            return ju(e, n);
          });
        }
        var t_ = ci(Y), r_ = ci(mu), i_ = ci(Fr);
        function ws(n) {
          return wi(n) ? Pr(Bn(n)) : Wa(n);
        }
        function u_(n) {
          return function(e) {
            return n == null ? s : xe(n, e);
          };
        }
        var f_ = yf(), s_ = yf(!0);
        function Ui() {
          return [];
        }
        function Fi() {
          return !1;
        }
        function o_() {
          return {};
        }
        function l_() {
          return "";
        }
        function a_() {
          return !0;
        }
        function c_(n, e) {
          if (n = L(n), n < 1 || n > ee)
            return [];
          var t = Un, r = rn(n, Un);
          e = A(e), n -= Un;
          for (var i = Gr(r, e); ++t < n; )
            e(t);
          return i;
        }
        function h_(n) {
          return T(n) ? Y(n, Bn) : vn(n) ? [n] : an(Bf(B(n)));
        }
        function g_(n) {
          var e = ++Il;
          return B(n) + e;
        }
        var p_ = Vt(function(n, e) {
          return n + e;
        }, 0), __ = hi("ceil"), d_ = Vt(function(n, e) {
          return n / e;
        }, 1), v_ = hi("floor");
        function w_(n) {
          return n && n.length ? Yt(n, gn, Qr) : s;
        }
        function x_(n, e) {
          return n && n.length ? Yt(n, A(e, 2), Qr) : s;
        }
        function m_(n) {
          return Su(n, gn);
        }
        function A_(n, e) {
          return Su(n, A(e, 2));
        }
        function y_(n) {
          return n && n.length ? Yt(n, gn, ei) : s;
        }
        function S_(n, e) {
          return n && n.length ? Yt(n, A(e, 2), ei) : s;
        }
        var I_ = Vt(function(n, e) {
          return n * e;
        }, 1), T_ = hi("round"), L_ = Vt(function(n, e) {
          return n - e;
        }, 0);
        function C_(n) {
          return n && n.length ? Nr(n, gn) : 0;
        }
        function E_(n, e) {
          return n && n.length ? Nr(n, A(e, 2)) : 0;
        }
        return u.after = Jh, u.ary = Xf, u.assign = Pg, u.assignIn = ls, u.assignInWith = cr, u.assignWith = Bg, u.at = Ng, u.before = Jf, u.bind = Ii, u.bindAll = qp, u.bindKey = Qf, u.castArray = og, u.chain = zf, u.chunk = vc, u.compact = wc, u.concat = xc, u.cond = Yp, u.conforms = zp, u.constant = Oi, u.countBy = Ch, u.create = Gg, u.curry = Vf, u.curryRight = jf, u.debounce = ns, u.defaults = $g, u.defaultsDeep = Hg, u.defer = Qh, u.delay = Vh, u.difference = mc, u.differenceBy = Ac, u.differenceWith = yc, u.drop = Sc, u.dropRight = Ic, u.dropRightWhile = Tc, u.dropWhile = Lc, u.fill = Cc, u.filter = Rh, u.flatMap = Dh, u.flatMapDeep = Mh, u.flatMapDepth = Wh, u.flatten = Hf, u.flattenDeep = Ec, u.flattenDepth = Rc, u.flip = jh, u.flow = Zp, u.flowRight = Xp, u.fromPairs = bc, u.functions = Xg, u.functionsIn = Jg, u.groupBy = Uh, u.initial = Dc, u.intersection = Mc, u.intersectionBy = Wc, u.intersectionWith = Uc, u.invert = Vg, u.invertBy = jg, u.invokeMap = Ph, u.iteratee = Di, u.keyBy = Bh, u.keys = nn, u.keysIn = hn, u.map = ur, u.mapKeys = ep, u.mapValues = tp, u.matches = Jp, u.matchesProperty = Qp, u.memoize = sr, u.merge = rp, u.mergeWith = as, u.method = Vp, u.methodOf = jp, u.mixin = Mi, u.negate = or, u.nthArg = e_, u.omit = ip, u.omitBy = up, u.once = ng, u.orderBy = Nh, u.over = t_, u.overArgs = eg, u.overEvery = r_, u.overSome = i_, u.partial = Ti, u.partialRight = es, u.partition = Gh, u.pick = fp, u.pickBy = cs, u.property = ws, u.propertyOf = u_, u.pull = Nc, u.pullAll = qf, u.pullAllBy = Gc, u.pullAllWith = $c, u.pullAt = Hc, u.range = f_, u.rangeRight = s_, u.rearg = tg, u.reject = Kh, u.remove = Kc, u.rest = rg, u.reverse = yi, u.sampleSize = Yh, u.set = op, u.setWith = lp, u.shuffle = zh, u.slice = qc, u.sortBy = Xh, u.sortedUniq = Qc, u.sortedUniqBy = Vc, u.split = Dp, u.spread = ig, u.tail = jc, u.take = nh, u.takeRight = eh, u.takeRightWhile = th, u.takeWhile = rh, u.tap = wh, u.throttle = ug, u.thru = ir, u.toArray = fs, u.toPairs = hs, u.toPairsIn = gs, u.toPath = h_, u.toPlainObject = os, u.transform = ap, u.unary = fg, u.union = ih, u.unionBy = uh, u.unionWith = fh, u.uniq = sh, u.uniqBy = oh, u.uniqWith = lh, u.unset = cp, u.unzip = Si, u.unzipWith = Yf, u.update = hp, u.updateWith = gp, u.values = $e, u.valuesIn = pp, u.without = ah, u.words = ds, u.wrap = sg, u.xor = ch, u.xorBy = hh, u.xorWith = gh, u.zip = ph, u.zipObject = _h, u.zipObjectDeep = dh, u.zipWith = vh, u.entries = hs, u.entriesIn = gs, u.extend = ls, u.extendWith = cr, Mi(u, u), u.add = p_, u.attempt = vs, u.camelCase = wp, u.capitalize = ps, u.ceil = __, u.clamp = _p, u.clone = lg, u.cloneDeep = cg, u.cloneDeepWith = hg, u.cloneWith = ag, u.conformsTo = gg, u.deburr = _s, u.defaultTo = kp, u.divide = d_, u.endsWith = xp, u.eq = Mn, u.escape = mp, u.escapeRegExp = Ap, u.every = Eh, u.find = bh, u.findIndex = Gf, u.findKey = Kg, u.findLast = Oh, u.findLastIndex = $f, u.findLastKey = qg, u.floor = v_, u.forEach = kf, u.forEachRight = Zf, u.forIn = Yg, u.forInRight = zg, u.forOwn = kg, u.forOwnRight = Zg, u.get = Ei, u.gt = pg, u.gte = _g, u.has = Qg, u.hasIn = Ri, u.head = Kf, u.identity = gn, u.includes = Fh, u.indexOf = Oc, u.inRange = dp, u.invoke = np, u.isArguments = ye, u.isArray = T, u.isArrayBuffer = dg, u.isArrayLike = cn, u.isArrayLikeObject = X, u.isBoolean = vg, u.isBuffer = ae, u.isDate = wg, u.isElement = xg, u.isEmpty = mg, u.isEqual = Ag, u.isEqualWith = yg, u.isError = Li, u.isFinite = Sg, u.isFunction = Jn, u.isInteger = ts, u.isLength = lr, u.isMap = rs, u.isMatch = Ig, u.isMatchWith = Tg, u.isNaN = Lg, u.isNative = Cg, u.isNil = Rg, u.isNull = Eg, u.isNumber = is, u.isObject = k, u.isObjectLike = Z, u.isPlainObject = gt, u.isRegExp = Ci, u.isSafeInteger = bg, u.isSet = us, u.isString = ar, u.isSymbol = vn, u.isTypedArray = Ge, u.isUndefined = Og, u.isWeakMap = Dg, u.isWeakSet = Mg, u.join = Fc, u.kebabCase = yp, u.last = Ln, u.lastIndexOf = Pc, u.lowerCase = Sp, u.lowerFirst = Ip, u.lt = Wg, u.lte = Ug, u.max = w_, u.maxBy = x_, u.mean = m_, u.meanBy = A_, u.min = y_, u.minBy = S_, u.stubArray = Ui, u.stubFalse = Fi, u.stubObject = o_, u.stubString = l_, u.stubTrue = a_, u.multiply = I_, u.nth = Bc, u.noConflict = n_, u.noop = Wi, u.now = fr, u.pad = Tp, u.padEnd = Lp, u.padStart = Cp, u.parseInt = Ep, u.random = vp, u.reduce = $h, u.reduceRight = Hh, u.repeat = Rp, u.replace = bp, u.result = sp, u.round = T_, u.runInContext = a, u.sample = qh, u.size = kh, u.snakeCase = Op, u.some = Zh, u.sortedIndex = Yc, u.sortedIndexBy = zc, u.sortedIndexOf = kc, u.sortedLastIndex = Zc, u.sortedLastIndexBy = Xc, u.sortedLastIndexOf = Jc, u.startCase = Mp, u.startsWith = Wp, u.subtract = L_, u.sum = C_, u.sumBy = E_, u.template = Up, u.times = c_, u.toFinite = Qn, u.toInteger = L, u.toLength = ss, u.toLower = Fp, u.toNumber = Cn, u.toSafeInteger = Fg, u.toString = B, u.toUpper = Pp, u.trim = Bp, u.trimEnd = Np, u.trimStart = Gp, u.truncate = $p, u.unescape = Hp, u.uniqueId = g_, u.upperCase = Kp, u.upperFirst = bi, u.each = kf, u.eachRight = Zf, u.first = Kf, Mi(u, function() {
          var n = {};
          return Fn(u, function(e, t) {
            N.call(u.prototype, t) || (n[t] = e);
          }), n;
        }(), { chain: !1 }), u.VERSION = E, An(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          u[n].placeholder = u;
        }), An(["drop", "take"], function(n, e) {
          D.prototype[n] = function(t) {
            t = t === s ? 1 : j(L(t), 0);
            var r = this.__filtered__ && !e ? new D(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = rn(t, r.__takeCount__) : r.__views__.push({
              size: rn(t, Un),
              type: n + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, D.prototype[n + "Right"] = function(t) {
            return this.reverse()[n](t).reverse();
          };
        }), An(["filter", "map", "takeWhile"], function(n, e) {
          var t = e + 1, r = t == $i || t == Bs;
          D.prototype[n] = function(i) {
            var f = this.clone();
            return f.__iteratees__.push({
              iteratee: A(i, 3),
              type: t
            }), f.__filtered__ = f.__filtered__ || r, f;
          };
        }), An(["head", "last"], function(n, e) {
          var t = "take" + (e ? "Right" : "");
          D.prototype[n] = function() {
            return this[t](1).value()[0];
          };
        }), An(["initial", "tail"], function(n, e) {
          var t = "drop" + (e ? "" : "Right");
          D.prototype[n] = function() {
            return this.__filtered__ ? new D(this) : this[t](1);
          };
        }), D.prototype.compact = function() {
          return this.filter(gn);
        }, D.prototype.find = function(n) {
          return this.filter(n).head();
        }, D.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, D.prototype.invokeMap = R(function(n, e) {
          return typeof n == "function" ? new D(this) : this.map(function(t) {
            return st(t, n, e);
          });
        }), D.prototype.reject = function(n) {
          return this.filter(or(A(n)));
        }, D.prototype.slice = function(n, e) {
          n = L(n);
          var t = this;
          return t.__filtered__ && (n > 0 || e < 0) ? new D(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== s && (e = L(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
        }, D.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, D.prototype.toArray = function() {
          return this.take(Un);
        }, Fn(D.prototype, function(n, e) {
          var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = u[r ? "take" + (e == "last" ? "Right" : "") : e], f = r || /^find/.test(e);
          i && (u.prototype[e] = function() {
            var o = this.__wrapped__, l = r ? [1] : arguments, c = o instanceof D, _ = l[0], d = c || T(o), v = function(O) {
              var M = i.apply(u, re([O], l));
              return r && w ? M[0] : M;
            };
            d && t && typeof _ == "function" && _.length != 1 && (c = d = !1);
            var w = this.__chain__, m = !!this.__actions__.length, y = f && !w, C = c && !m;
            if (!f && d) {
              o = C ? o : new D(this);
              var S = n.apply(o, l);
              return S.__actions__.push({ func: ir, args: [v], thisArg: s }), new Sn(S, w);
            }
            return y && C ? n.apply(this, l) : (S = this.thru(v), y ? r ? S.value()[0] : S.value() : S);
          });
        }), An(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var e = bt[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
          u.prototype[n] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var f = this.value();
              return e.apply(T(f) ? f : [], i);
            }
            return this[t](function(o) {
              return e.apply(T(o) ? o : [], i);
            });
          };
        }), Fn(D.prototype, function(n, e) {
          var t = u[e];
          if (t) {
            var r = t.name + "";
            N.call(Ue, r) || (Ue[r] = []), Ue[r].push({ name: e, func: t });
          }
        }), Ue[Qt(s, Te).name] = [{
          name: "wrapper",
          func: s
        }], D.prototype.clone = Hl, D.prototype.reverse = Kl, D.prototype.value = ql, u.prototype.at = xh, u.prototype.chain = mh, u.prototype.commit = Ah, u.prototype.next = yh, u.prototype.plant = Ih, u.prototype.reverse = Th, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Lh, u.prototype.first = u.prototype.head, nt && (u.prototype[nt] = Sh), u;
      }, De = Al();
      pe ? ((pe.exports = De)._ = De, Dr._ = De) : en._ = De;
    }).call(G_);
  }(pt, pt.exports)), pt.exports;
}
var Es = $_();
const H_ = /* @__PURE__ */ N_(Es);
class K_ {
  positions;
  direction;
  constructor(g) {
    this.positions = H_.cloneDeep(g), this.direction = G.Up;
  }
  setDirection(g) {
    this.direction = g;
  }
  getNewCoordinate() {
    const g = this.getHead();
    switch (this.direction) {
      case G.Up:
        return this.getUp(g);
      case G.Down:
        return this.getDown(g);
      case G.Left:
        return this.getLeft(g);
      case G.Right:
        return this.getRight(g);
    }
  }
  moveToCoord(g, s = !1) {
    let E;
    return s || (E = this.positions.pop()), this.positions.unshift(g), E;
  }
  getHead() {
    return {
      x: this.positions[0].x,
      y: this.positions[0].y
    };
  }
  getUp(g) {
    return {
      x: g.x,
      y: g.y - 1
    };
  }
  getDown(g) {
    return {
      x: g.x,
      y: g.y + 1
    };
  }
  getLeft(g) {
    return {
      x: g.x - 1,
      y: g.y
    };
  }
  getRight(g) {
    return {
      x: g.x + 1,
      y: g.y
    };
  }
  ifValidDirection(g) {
    if (this.positions.length === 1)
      return !0;
    switch (g) {
      case G.Up:
        return this.direction !== G.Down;
      case G.Down:
        return this.direction !== G.Up;
      case G.Left:
        return this.direction !== G.Right;
      case G.Right:
        return this.direction !== G.Left;
    }
  }
}
const Rs = {
  Fruit: "Fruit"
};
class q_ {
  itemType;
  position;
  ateCallback;
  constructor(g, s) {
    this.itemType = Rs.Fruit, this.position = g, this.ateCallback = s;
  }
}
const Ts = 21, Bi = 21, bs = 800, Os = 1200, Y_ = 200, z_ = 100;
function k_() {
  return {
    rows: Ts,
    cols: Bi,
    snakePosition: Z_(Ts, Bi),
    interval: Ds(bs)
  };
}
function Z_(b, g) {
  return [
    {
      x: (b - 1) / 2,
      y: (g - 1) / 2
    },
    {
      x: (b - 1) / 2,
      y: (g - 1) / 2 + 1
    }
  ];
}
function Ds(b) {
  return Os / b * z_;
}
const X_ = {
  log: (b, g) => {
  }
}, ce = {
  DEFAULT: "DEFAULT",
  DIE: "DIE",
  ONGOING: "ONGOING"
};
class Ls {
  snake;
  grid;
  gameState;
  isLocked;
  intervalId;
  score;
  gameInterval;
  constructor(g) {
    this.snake = new K_(g.snakePosition), this.grid = new B_(g.rows, g.cols, g.snakePosition), this.gameState = ce.DEFAULT, this.isLocked = !1, this.intervalId = -1, this.gameInterval = g.interval, this.score = 0;
  }
  changeSnakeDirection(g) {
    this.isLocked || this.snake.ifValidDirection(g) && (this.isLocked = !0, this.snake.setDirection(g));
  }
  handleGameEnd() {
    alert("You lost 😞"), clearInterval(this.intervalId);
  }
  handleGetItem(g) {
    switch (this.grid.getCellItemType(g)) {
      case Rs.Fruit:
        this.grid.getCell(g).cellObject.ateCallback(g);
    }
    this.generateRandomFruit();
  }
  moveSnake() {
    const g = this.snake.getNewCoordinate(), s = this.grid.getCellType(g.y, g.x);
    switch (X_.log("Game.ts", `Moving Snake to ${JSON.stringify(g)}, ${s}`), s) {
      case ln.SNAKE: {
        this.handleGameEnd();
        return;
      }
      case ln.WALL: {
        this.handleGameEnd();
        return;
      }
      case ln.ITEM: {
        this.handleGetItem(g);
        return;
      }
      default: {
        let E = this.snake.moveToCoord(g);
        E && (this.grid.grid[g.y][g.x].setCellType(ln.SNAKE), this.grid.grid[E.y][E.x].setCellType(ln.EMPTY)), this.isLocked = !1;
        break;
      }
    }
  }
  startGame() {
    this.gameState !== ce.ONGOING && (this.gameState = ce.ONGOING, this.intervalId = setInterval(
      () => this.moveSnake(),
      this.gameInterval
    ));
  }
  generateRandomFruit() {
    let g = this.grid.getRandomCoord(), s = this.grid.getCellType(g.y, g.x);
    for (; s !== ln.EMPTY; )
      g = this.grid.getRandomCoord(), s = this.grid.getCellType(g.y, g.x);
    this.generateFruit(g);
  }
  generateFruit(g) {
    const s = this.grid.grid[g.y][g.x];
    s.setCellType(ln.ITEM), s.setCellObject(new q_(g, (E) => {
      this.score = this.score + 1, this.grid.grid[E.y][E.x].setCellType(ln.SNAKE), this.snake.moveToCoord(E, !0);
    }));
  }
}
function J_(b) {
  return b_() ? (O_(b), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Q_(b) {
  let g = 0, s, E;
  const $ = () => {
    g -= 1, E && g <= 0 && (E.stop(), s = void 0, E = void 0);
  };
  return (...F) => (g += 1, E || (E = R_(!0), s = E.run(() => b(...F))), J_($), s);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const V_ = () => {
  const b = _t(k_()), g = _t(new Ls(b.value));
  function s(F, U) {
    const z = Ds(F);
    b.value.interval = z, b.value.cols = U, b.value.rows = U, E();
  }
  function E() {
    clearInterval(g.value.intervalId), g.value = new Ls(b.value), g.value.generateRandomFruit();
  }
  function $(F) {
    if (g.value.gameState === ce.ONGOING)
      switch (F.key) {
        case "ArrowUp":
          g.value.changeSnakeDirection(G.Up);
          break;
        case "ArrowDown":
          g.value.changeSnakeDirection(G.Down);
          break;
        case "ArrowLeft":
          g.value.changeSnakeDirection(G.Left);
          break;
        case "ArrowRight":
          g.value.changeSnakeDirection(G.Right);
          break;
      }
  }
  return {
    currentConfig: b,
    game: g,
    handleKeyDown: $,
    changeConfig: s,
    resetGame: E
  };
}, dt = /* @__PURE__ */ Q_(V_), j_ = { class: "p-4 bg-[#242424]/80 shadow fixed top-12 right-4 rounded border flex flex-col gap-4 text-sm backdrop-blur-sm" }, nd = { class: "flex justify-center items-center gap-2" }, ed = ["min", "max"], td = { class: "flex justify-center items-center gap-2" }, rd = /* @__PURE__ */ He({
  __name: "SettingsPanel",
  setup(b) {
    const { changeConfig: g } = dt();
    function s() {
      g(E.value, Number($.value));
    }
    const E = _t(bs), $ = _t(Bi);
    return (F, U) => (Nn(), jn("div", j_, [
      Q("div", nd, [
        U[2] || (U[2] = Q("label", { for: "speed-slider" }, "Snake Speed:", -1)),
        ms(Q("input", {
          step: "100",
          type: "range",
          id: "speed-slider",
          min: W(Y_),
          max: W(Os),
          "onUpdate:modelValue": U[0] || (U[0] = (z) => E.value = z)
        }, null, 8, ed), [
          [As, E.value]
        ])
      ]),
      Q("div", td, [
        U[3] || (U[3] = Q("label", { for: "speed-slider" }, "Game Size:", -1)),
        ms(Q("input", {
          step: "1",
          type: "range",
          id: "game-slider",
          min: 10,
          max: 50,
          "onUpdate:modelValue": U[1] || (U[1] = (z) => $.value = z)
        }, null, 512), [
          [As, $.value]
        ])
      ]),
      Q("button", {
        class: "setting-button",
        onClick: s
      }, "Save")
    ]));
  }
}), id = { class: "flex" }, ud = { class: "mb-2" }, fd = /* @__PURE__ */ He({
  __name: "GameInfoDisplay",
  setup(b) {
    const { game: g, resetGame: s } = dt();
    return (E, $) => (Nn(), jn("div", id, [
      Q("div", ud, [
        Q("div", null, "Score: " + D_(W(g).score), 1)
      ])
    ]));
  }
}), sd = { class: "p-4 flex items-center justify-center gap-4 text-xs" }, od = ["disabled"], ld = ["disabled"], ad = /* @__PURE__ */ He({
  __name: "GameControls",
  setup(b) {
    const { game: g, resetGame: s } = dt();
    return (E, $) => (Nn(), jn("div", sd, [
      Q("button", {
        class: "game-button p-1",
        disabled: W(g).gameState === W(ce).ONGOING,
        onClick: $[0] || ($[0] = //@ts-ignore
        (...F) => W(g).startGame && W(g).startGame(...F))
      }, "Start", 8, od),
      Q("button", {
        class: "game-button p-1",
        disabled: W(g).gameState === W(ce).DEFAULT,
        onClick: $[1] || ($[1] = //@ts-ignore
        (...F) => W(s) && W(s)(...F))
      }, "Reset", 8, ld)
    ]));
  }
}), cd = { class: "flex" }, hd = /* @__PURE__ */ He({
  __name: "Game",
  setup(b) {
    const { game: g } = dt(), s = M_(() => g.value.snake.positions?.[0] || null);
    function E($, F) {
      const U = g.value.grid.getCellType($, F), z = [];
      if (s.value.x === F && s.value.y === $)
        switch (z.push("border-blue-800"), g.value.snake.direction) {
          case G.Up:
            z.push("border-t-2");
            break;
          case G.Down:
            z.push("border-b-2");
            break;
          case G.Left:
            z.push("border-l-2");
            break;
          case G.Right:
            z.push("border-r-2");
            break;
        }
      switch (U) {
        case ln.EMPTY:
          return [...z, "bg-blue-50"];
        case ln.SNAKE:
          return [...z, "bg-blue-400"];
        case ln.WALL:
          return [...z, "bg-gray-800"];
        case ln.ITEM:
          return [...z, "bg-pink-300"];
      }
    }
    return ($, F) => (Nn(!0), jn(ys, null, Ss(W(g).grid.rows, (U, z) => (Nn(), jn("div", cd, [
      (Nn(!0), jn(ys, null, Ss(W(g).grid.cols, (he, pr) => (Nn(), jn("div", {
        class: Cs(["h-4 w-4", E(z, pr)])
      }, null, 2))), 256))
    ]))), 256));
  }
}), gd = { class: "flex" }, pd = ["disabled"], _d = { class: "flex gap-1" }, dd = ["disabled"], vd = ["disabled"], wd = ["disabled"], xd = /* @__PURE__ */ He({
  __name: "GameDpad",
  setup(b) {
    const { game: g, handleKeyDown: s } = dt(), E = Es.debounce(s, 100);
    return W_(() => {
      g.value.generateRandomFruit(), window.addEventListener("keydown", E);
    }), U_(() => {
      window.removeEventListener("keydown", E);
    }), ($, F) => (Nn(), jn("div", {
      class: Cs(["flex flex-col items-center justify-center gap-1 mt-4 text-xl", { "opacity-20": W(g).gameState === W(ce).DEFAULT, "pointer-events-none": W(g).gameState === W(ce).DEFAULT }])
    }, [
      Q("div", gd, [
        Q("button", {
          disabled: W(g).snake.direction === W(G).Up,
          onClick: F[0] || (F[0] = (U) => W(g).changeSnakeDirection(W(G).Up)),
          class: "game-control-button flex justify-center items-center w-14 h-14"
        }, "↑", 8, pd)
      ]),
      Q("div", _d, [
        Q("button", {
          disabled: W(g).snake.direction === W(G).Left,
          onClick: F[1] || (F[1] = (U) => W(g).changeSnakeDirection(W(G).Left)),
          class: "game-control-button flex justify-center items-center w-14 h-14"
        }, "←", 8, dd),
        Q("button", {
          disabled: W(g).snake.direction === W(G).Down,
          onClick: F[2] || (F[2] = (U) => W(g).changeSnakeDirection(W(G).Down)),
          class: "game-control-button flex justify-center items-center w-14 h-14"
        }, "↓", 8, vd),
        Q("button", {
          disabled: W(g).snake.direction === W(G).Right,
          onClick: F[3] || (F[3] = (U) => W(g).changeSnakeDirection(W(G).Right)),
          class: "game-control-button flex justify-center items-center w-14 h-14"
        }, "→", 8, wd)
      ])
    ], 2));
  }
}), md = { class: "theme-default" }, Ad = { class: "flex justify-center p-4" }, yd = { class: "flex flex-col items-center justify-center" }, Id = /* @__PURE__ */ He({
  __name: "GameLayout",
  setup(b) {
    const g = _t(!1);
    function s() {
      g.value = !g.value;
    }
    return (E, $) => (Nn(), jn("section", md, [
      Q("div", Ad, [
        hr(fd)
      ]),
      Q("div", yd, [
        hr(ad),
        hr(hd)
      ]),
      hr(xd),
      Q("button", {
        onClick: s,
        class: "fixed top-4 right-4 setting-button"
      }, " Settings "),
      g.value ? (Nn(), F_(rd, { key: 0 })) : P_("", !0)
    ]));
  }
});
export {
  Id as GameLayout
};
