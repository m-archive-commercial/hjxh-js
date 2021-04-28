var window = this;

const jEcw = function (e, t, r) {
  "use strict";
  console.log("start jEcw");
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.riskEnhance = function (e, t) {
      console.log("into riskEnhance");
      var r = this,
        o = this.context.tap("auth");
      (t = t || this.getInternal("adapter")),
        (p = this.set("loginRedirectUrl"));
      var a = e.headers && void 0 !== e.headers["Anti-Content"];
      if (this.context.isClient && !a) {
        var s = this.context.set("endpoints"),
          u = (0, i.get)(s, "site.apis.getServerTime");
        return d(u && u.bind(this)).then(function (a) {
          return a.messagePackSync().then(function (a) {
            console.log({ antiContent: a });
            if (
              (void 0 === a && (a = "getRisckInfoError"),
              r.context.set("isLocal") && (e.withCredentials = !0),
              e.userInfo)
            ) {
              var i = (0, n.__assign)({}, e);
              return delete i.userInfo, v(e.userInfo, a, i, t);
            }
            return o
              .getUserInfo({ headers: { "Anti-Content": a } })
              .then(function (r) {
                return v(r, a, e, t);
              });
          });
        });
      }
      return a
        ? (!1 === e.headers["Anti-Content"] && delete e.headers["Anti-Content"],
          (0, c.default)(e, t))
        : Promise.reject(
            new Error(
              "Request Error: Http rquest expected Anti-Content while not declare"
            )
          );
    });

  t.riskEnhance(e, t);

  var n = r("mrSG"),
    o = s(r("xTJ+")),
    a = s(r("fbeZ")),
    i = r("LvDl"),
    c = s(r("gmvi"));

  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }

  function u(e) {
    return (u =
      "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" === typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }

  var l = {
    serverTime: new Date().getTime(),
    touchEventData: !0,
    clickEventData: !0,
    focusblurEventData: !0,
    changeEventData: !0,
    locationInfo: !0,
    referrer: !0,
    browserSize: !0,
    browserInfo: !0,
    token: !0,
    fingerprint: !0,
  };

  function d(e) {
    var t = d.defaults,
      r = t.serverTime,
      n = t.localTime,
      o = t.promise,
      i = t.anti;
    return r && n && i
      ? (i.updateServerTime(+new Date().getTime() + r - n),
        (t.promise = Promise.resolve(i)))
      : o ||
          (e
            ? (t.promise = e().then(function (e) {
                l.serverTime = e.server_time;
                var r = new a.default(l);
                return (
                  Object.assign(t, {
                    serverTime: e.server_time,
                    localTime: +new Date().getTime(),
                    anti: r,
                    promise: null,
                  }),
                  r
                );
              }))
            : Promise.reject(
                new Error(
                  "Invalid Option: risk anti has to input a serverTime."
                )
              ));
  }

  d.defaults = {
    serverTime: l.serverTime,
    localTime: 0,
    promise: null,
    anti: null,
  };
  var p = "";

  function f(e) {
    var t = d.defaults,
      r = t.serverTime,
      n = t.localTime;
    t.anti.updateServerTime(+new Date().getTime() + r - n),
      e.response &&
        429 === e.response.status &&
        e.response.data.indexOf("40001") > 0 &&
        p &&
        void 0 !== ("undefined" === typeof window ? "undefined" : u(window)) &&
        (window.parent.location.href = p);
  }

  var h = function (e, t, r) {
    "function" === typeof r
      ? (e[t] = r(e[t]))
      : e[t]
      ? Object.assign(e[t], r)
      : (e[t] = r);
  };

  function v(e, t, r, n) {
    h(r, "headers", { "Anti-Content": t });
    var a,
      i = { crawlerInfo: t, mallId: e.mall_id };
    ["delete", "get", "head", "options"].indexOf(r.method.toLowerCase()) > -1 ||
    o.default.isFormData(r.data) ||
    o.default.isArrayBuffer(r.data) ||
    o.default.isBuffer(r.data) ||
    o.default.isStream(r.data) ||
    o.default.isFile(r.data) ||
    o.default.isBlob(r.data) ||
    ("undefined" !== typeof ArrayBuffer && r.data instanceof ArrayBuffer)
      ? h(r, "params", i)
      : (a = r.headers) &&
        0 === a["Content-Type"].indexOf("application/x-www-form-urlencoded")
      ? h(r, "data", function (e) {
          var r = "crawlerInfo=" + i.crawlerInfo + "&mallId=" + t.mallId;
          return e ? r + "&" + e : r;
        })
      : !(function (e) {
          return e && 0 === e["Content-Type"].indexOf("application/json");
        })(r.headers)
      ? h(r, "params", i)
      : h(r, "data", function (e) {
          var t = JSON.stringify(i);
          return e && "{}" !== e
            ? e.replace("{", "{" + t.slice(1, -1) + ",")
            : t;
        });
    var s = (0, c.default)(r, n);
    return s.then(f, f).catch(f), s;
  }
};

const e = { exports: {}, i: "jEcw", l: false };

const _t = {};

function t(t) {
  for (var n, c, f = t[0], d = t[1], i = t[2], u = 0, s = []; u < f.length; u++)
    (c = f[u]),
      Object.prototype.hasOwnProperty.call(a, c) && a[c] && s.push(a[c][0]),
      (a[c] = 0);
  for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
  for (l && l(t); s.length; ) s.shift()();
  return o.push.apply(o, i || []), r();
}
function r() {
  for (var e, t = 0; t < o.length; t++) {
    for (var r = o[t], n = !0, c = 1; c < r.length; c++) {
      var d = r[c];
      0 !== a[d] && (n = !1);
    }
    n && (o.splice(t--, 1), (e = f((f.s = r[0]))));
  }
  return e;
}
var n = {},
  c = {
    0: 0,
  },
  a = {
    0: 0,
  },
  o = [];
function f(t) {
  if (n[t]) return n[t].exports;
  var r = (n[t] = {
      i: t,
      l: !1,
      exports: {},
    }),
    c = !0;
  try {
    e[t].call(r.exports, r, r.exports, f), (c = !1);
  } finally {
    c && delete n[t];
  }
  return (r.l = !0), r.exports;
}
(f.e = function (e) {
  var t = [];
  c[e]
    ? t.push(c[e])
    : 0 !== c[e] &&
      {
        2: 1,
      }[e] &&
      t.push(
        (c[e] = new Promise(function (t, r) {
          for (
            var n =
                "static/chunks/" +
                ({
                  2: "styles",
                  27: "8bf836229b00e6917f528b6f7aff53d22375d08b",
                  40: "14d04dbf2e85ccfa7b781514c7bf9ce95b7cc677",
                  52: "660234b6",
                  53: "e8de0380",
                  54: "ef600adb",
                }[e] || e) +
                "." +
                {
                  2: "8afab5db",
                  27: "31d6cfe0",
                  40: "31d6cfe0",
                  49: "31d6cfe0",
                  50: "31d6cfe0",
                  52: "31d6cfe0",
                  53: "31d6cfe0",
                  54: "31d6cfe0",
                  232: "31d6cfe0",
                  233: "31d6cfe0",
                  234: "31d6cfe0",
                  235: "31d6cfe0",
                  236: "31d6cfe0",
                  237: "31d6cfe0",
                  238: "31d6cfe0",
                  239: "31d6cfe0",
                  240: "31d6cfe0",
                  241: "31d6cfe0",
                }[e] +
                ".chunk.css",
              a = f.p + n,
              o = document.getElementsByTagName("link"),
              d = 0;
            d < o.length;
            d++
          ) {
            var i =
              (l = o[d]).getAttribute("data-href") || l.getAttribute("href");
            if ("stylesheet" === l.rel && (i === n || i === a)) return t();
          }
          var u = document.getElementsByTagName("style");
          for (d = 0; d < u.length; d++) {
            var l;
            if ((i = (l = u[d]).getAttribute("data-href")) === n || i === a)
              return t();
          }
          var s = document.createElement("link");
          (s.rel = "stylesheet"),
            (s.type = "text/css"),
            (s.onload = t),
            (s.onerror = function (t) {
              var n = (t && t.target && t.target.src) || a,
                o = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                );
              (o.request = n), delete c[e], s.parentNode.removeChild(s), r(o);
            }),
            (s.href = a),
            0 !== s.href.indexOf(window.location.origin + "/") &&
              (s.crossOrigin = "anonymous"),
            document.getElementsByTagName("head")[0].appendChild(s);
        }).then(function () {
          c[e] = 0;
        }))
      );
  var r = a[e];
  if (0 !== r)
    if (r) t.push(r[2]);
    else {
      var n = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push((r[2] = n));
      var o,
        d = document.createElement("script");
      (d.charset = "utf-8"),
        (d.timeout = 120),
        f.nc && d.setAttribute("nonce", f.nc),
        (d.src = (function (e) {
          return (
            f.p +
            "static/chunks/" +
            ({
              2: "styles",
              27: "8bf836229b00e6917f528b6f7aff53d22375d08b",
              40: "14d04dbf2e85ccfa7b781514c7bf9ce95b7cc677",
              52: "660234b6",
              53: "e8de0380",
              54: "ef600adb",
            }[e] || e) +
            "." +
            {
              2: "79c22001184fe9a107f3",
              27: "24741b2333d68ffbcdcb",
              40: "507ebc941d6f073266fa",
              49: "5165bf98e5ae8af298d4",
              50: "68a6cc3a52b0a9615f25",
              52: "9532aeeb150b2d97abb8",
              53: "90dcd1b56865c63988b2",
              54: "638dff9f1cf777bfc66d",
              232: "72dcf07544dae46d0602",
              233: "c294172c90b8cb284a84",
              234: "7e5f45745fc9ca232d56",
              235: "493c82f3f46e3b18f133",
              236: "08a924c4a50aa94e0e83",
              237: "4e2002a367474168d51d",
              238: "8814c3dee78a819295dc",
              239: "89691909c0849c2a21a9",
              240: "1086eac0e72eed1b6a42",
              241: "224622a6c279e122295a",
            }[e] +
            ".js"
          );
        })(e)),
        0 !== d.src.indexOf(window.location.origin + "/") &&
          (d.crossOrigin = "anonymous");
      var i = new Error();
      o = function (t) {
        (d.onerror = d.onload = null), clearTimeout(u);
        var r = a[e];
        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              c = t && t.target && t.target.src;
            (i.message =
              "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")"),
              (i.name = "ChunkLoadError"),
              (i.type = n),
              (i.request = c),
              r[1](i);
          }
          a[e] = void 0;
        }
      };
      var u = setTimeout(function () {
        o({
          type: "timeout",
          target: d,
        });
      }, 12e4);
      (d.onerror = d.onload = o), document.head.appendChild(d);
    }
  return Promise.all(t);
}),
  (f.m = e),
  (f.c = n),
  (f.d = function (e, t, r) {
    f.o(e, t) ||
      Object.defineProperty(e, t, {
        enumerable: !0,
        get: r,
      });
  }),
  (f.r = function (e) {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module",
      }),
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
  }),
  (f.t = function (e, t) {
    if ((1 & t && (e = f(e)), 8 & t)) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (
      (f.r(r),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e,
      }),
      2 & t && "string" != typeof e)
    )
      for (var n in e)
        f.d(
          r,
          n,
          function (t) {
            return e[t];
          }.bind(null, n)
        );
    return r;
  }),
  (f.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return f.d(t, "a", t), t;
  }),
  (f.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (f.p = ""),
  (f.oe = function (e) {
    throw (console.error(e), e);
  });
var d = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []),
  i = d.push.bind(d);
(d.push = t), (d = d.slice());
for (var u = 0; u < d.length; u++) t(d[u]);
var l = i;
// r();

jEcw(e, _t, r);
