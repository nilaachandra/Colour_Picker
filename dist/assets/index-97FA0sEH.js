function Gh(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              t,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Qh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Kh = { exports: {} },
  Ja = {},
  Xh = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rl = Symbol.for("react.element"),
  Ag = Symbol.for("react.portal"),
  Fg = Symbol.for("react.fragment"),
  Ig = Symbol.for("react.strict_mode"),
  jg = Symbol.for("react.profiler"),
  bg = Symbol.for("react.provider"),
  Ug = Symbol.for("react.context"),
  Bg = Symbol.for("react.forward_ref"),
  $g = Symbol.for("react.suspense"),
  Vg = Symbol.for("react.memo"),
  Hg = Symbol.for("react.lazy"),
  Wf = Symbol.iterator;
function Wg(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Wf && t[Wf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var qh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zh = Object.assign,
  Jh = {};
function fo(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Jh),
    (this.updater = n || qh);
}
fo.prototype.isReactComponent = {};
fo.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
fo.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function ep() {}
ep.prototype = fo.prototype;
function Pc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Jh),
    (this.updater = n || qh);
}
var Rc = (Pc.prototype = new ep());
Rc.constructor = Pc;
Zh(Rc, fo.prototype);
Rc.isPureReactComponent = !0;
var Yf = Array.isArray,
  tp = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  np = { key: !0, ref: !0, __self: !0, __source: !0 };
function rp(t, e, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (l = e.ref),
    e.key !== void 0 && (o = "" + e.key),
    e))
      tp.call(e, r) && !np.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Rl,
    type: t,
    key: o,
    ref: l,
    props: i,
    _owner: Nc.current,
  };
}
function Yg(t, e) {
  return {
    $$typeof: Rl,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Lc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Rl;
}
function Gg(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Gf = /\/+/g;
function Ss(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Gg("" + t.key)
    : e.toString(36);
}
function oa(t, e, n, r, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var l = !1;
  if (t === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Rl:
          case Ag:
            l = !0;
        }
    }
  if (l)
    return (
      (l = t),
      (i = i(l)),
      (t = r === "" ? "." + Ss(l, 0) : r),
      Yf(i)
        ? ((n = ""),
          t != null && (n = t.replace(Gf, "$&/") + "/"),
          oa(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Lc(i) &&
            (i = Yg(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Gf, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Yf(t)))
    for (var a = 0; a < t.length; a++) {
      o = t[a];
      var s = r + Ss(o, a);
      l += oa(o, e, n, s, i);
    }
  else if (((s = Wg(t)), typeof s == "function"))
    for (t = s.call(t), a = 0; !(o = t.next()).done; )
      (o = o.value), (s = r + Ss(o, a++)), (l += oa(o, e, n, s, i));
  else if (o === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Fl(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    oa(t, r, "", "", function (o) {
      return e.call(n, o, i++);
    }),
    r
  );
}
function Qg(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Tt = { current: null },
  la = { transition: null },
  Kg = {
    ReactCurrentDispatcher: Tt,
    ReactCurrentBatchConfig: la,
    ReactCurrentOwner: Nc,
  };
fe.Children = {
  map: Fl,
  forEach: function (t, e, n) {
    Fl(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Fl(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Fl(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Lc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
fe.Component = fo;
fe.Fragment = Fg;
fe.Profiler = jg;
fe.PureComponent = Pc;
fe.StrictMode = Ig;
fe.Suspense = $g;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg;
fe.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = Zh({}, t.props),
    i = t.key,
    o = t.ref,
    l = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (l = Nc.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (s in e)
      tp.call(e, s) &&
        !np.hasOwnProperty(s) &&
        (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Rl, type: t.type, key: i, ref: o, props: r, _owner: l };
};
fe.createContext = function (t) {
  return (
    (t = {
      $$typeof: Ug,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: bg, _context: t }),
    (t.Consumer = t)
  );
};
fe.createElement = rp;
fe.createFactory = function (t) {
  var e = rp.bind(null, t);
  return (e.type = t), e;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (t) {
  return { $$typeof: Bg, render: t };
};
fe.isValidElement = Lc;
fe.lazy = function (t) {
  return { $$typeof: Hg, _payload: { _status: -1, _result: t }, _init: Qg };
};
fe.memo = function (t, e) {
  return { $$typeof: Vg, type: t, compare: e === void 0 ? null : e };
};
fe.startTransition = function (t) {
  var e = la.transition;
  la.transition = {};
  try {
    t();
  } finally {
    la.transition = e;
  }
};
fe.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function (t, e) {
  return Tt.current.useCallback(t, e);
};
fe.useContext = function (t) {
  return Tt.current.useContext(t);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (t) {
  return Tt.current.useDeferredValue(t);
};
fe.useEffect = function (t, e) {
  return Tt.current.useEffect(t, e);
};
fe.useId = function () {
  return Tt.current.useId();
};
fe.useImperativeHandle = function (t, e, n) {
  return Tt.current.useImperativeHandle(t, e, n);
};
fe.useInsertionEffect = function (t, e) {
  return Tt.current.useInsertionEffect(t, e);
};
fe.useLayoutEffect = function (t, e) {
  return Tt.current.useLayoutEffect(t, e);
};
fe.useMemo = function (t, e) {
  return Tt.current.useMemo(t, e);
};
fe.useReducer = function (t, e, n) {
  return Tt.current.useReducer(t, e, n);
};
fe.useRef = function (t) {
  return Tt.current.useRef(t);
};
fe.useState = function (t) {
  return Tt.current.useState(t);
};
fe.useSyncExternalStore = function (t, e, n) {
  return Tt.current.useSyncExternalStore(t, e, n);
};
fe.useTransition = function () {
  return Tt.current.useTransition();
};
fe.version = "18.2.0";
Xh.exports = fe;
var L = Xh.exports;
const F = Qh(L),
  Xg = Gh({ __proto__: null, default: F }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qg = L,
  Zg = Symbol.for("react.element"),
  Jg = Symbol.for("react.fragment"),
  e1 = Object.prototype.hasOwnProperty,
  t1 = qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  n1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(t, e, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (l = e.ref);
  for (r in e) e1.call(e, r) && !n1.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: Zg,
    type: t,
    key: o,
    ref: l,
    props: i,
    _owner: t1.current,
  };
}
Ja.Fragment = Jg;
Ja.jsx = ip;
Ja.jsxs = ip;
Kh.exports = Ja;
var M = Kh.exports,
  du = {},
  op = { exports: {} },
  Zt = {},
  lp = { exports: {} },
  ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(D, $) {
    var j = D.length;
    D.push($);
    e: for (; 0 < j; ) {
      var H = (j - 1) >>> 1,
        U = D[H];
      if (0 < i(U, $)) (D[H] = $), (D[j] = U), (j = H);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var $ = D[0],
      j = D.pop();
    if (j !== $) {
      D[0] = j;
      e: for (var H = 0, U = D.length, de = U >>> 1; H < de; ) {
        var G = 2 * (H + 1) - 1,
          pe = D[G],
          oe = G + 1,
          _t = D[oe];
        if (0 > i(pe, j))
          oe < U && 0 > i(_t, pe)
            ? ((D[H] = _t), (D[oe] = j), (H = oe))
            : ((D[H] = pe), (D[G] = j), (H = G));
        else if (oe < U && 0 > i(_t, j)) (D[H] = _t), (D[oe] = j), (H = oe);
        else break e;
      }
    }
    return $;
  }
  function i(D, $) {
    var j = D.sortIndex - $.sortIndex;
    return j !== 0 ? j : D.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    t.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    h = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= D)
        r(u), ($.sortIndex = $.expirationTime), e(s, $);
      else break;
      $ = n(u);
    }
  }
  function S(D) {
    if (((h = !1), v(D), !y))
      if (n(s) !== null) (y = !0), ie(E);
      else {
        var $ = n(u);
        $ !== null && Z(S, $.startTime - D);
      }
  }
  function E(D, $) {
    (y = !1), h && ((h = !1), m(T), (T = -1)), (g = !0);
    var j = d;
    try {
      for (
        v($), f = n(s);
        f !== null && (!(f.expirationTime > $) || (D && !b()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var U = H(f.expirationTime <= $);
          ($ = t.unstable_now()),
            typeof U == "function" ? (f.callback = U) : f === n(s) && r(s),
            v($);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var de = !0;
      else {
        var G = n(u);
        G !== null && Z(S, G.startTime - $), (de = !1);
      }
      return de;
    } finally {
      (f = null), (d = j), (g = !1);
    }
  }
  var _ = !1,
    C = null,
    T = -1,
    R = 5,
    O = -1;
  function b() {
    return !(t.unstable_now() - O < R);
  }
  function K() {
    if (C !== null) {
      var D = t.unstable_now();
      O = D;
      var $ = !0;
      try {
        $ = C(!0, D);
      } finally {
        $ ? Q() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(K);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      ae = X.port2;
    (X.port1.onmessage = K),
      (Q = function () {
        ae.postMessage(null);
      });
  } else
    Q = function () {
      w(K, 0);
    };
  function ie(D) {
    (C = D), _ || ((_ = !0), Q());
  }
  function Z(D, $) {
    T = w(function () {
      D(t.unstable_now());
    }, $);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      y || g || ((y = !0), ie(E));
    }),
    (t.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (t.unstable_next = function (D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var j = d;
      d = $;
      try {
        return D();
      } finally {
        d = j;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (D, $) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var j = d;
      d = D;
      try {
        return $();
      } finally {
        d = j;
      }
    }),
    (t.unstable_scheduleCallback = function (D, $, j) {
      var H = t.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? H + j : H))
          : (j = H),
        D)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = j + U),
        (D = {
          id: c++,
          callback: $,
          priorityLevel: D,
          startTime: j,
          expirationTime: U,
          sortIndex: -1,
        }),
        j > H
          ? ((D.sortIndex = j),
            e(u, D),
            n(s) === null &&
              D === n(u) &&
              (h ? (m(T), (T = -1)) : (h = !0), Z(S, j - H)))
          : ((D.sortIndex = U), e(s, D), y || g || ((y = !0), ie(E))),
        D
      );
    }),
    (t.unstable_shouldYield = b),
    (t.unstable_wrapCallback = function (D) {
      var $ = d;
      return function () {
        var j = d;
        d = $;
        try {
          return D.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    });
})(ap);
lp.exports = ap;
var r1 = lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = L,
  Kt = r1;
function z(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var up = new Set(),
  Jo = {};
function _i(t, e) {
  Zi(t, e), Zi(t + "Capture", e);
}
function Zi(t, e) {
  for (Jo[t] = e, t = 0; t < e.length; t++) up.add(e[t]);
}
var nr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hu = Object.prototype.hasOwnProperty,
  i1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qf = {},
  Kf = {};
function o1(t) {
  return hu.call(Kf, t)
    ? !0
    : hu.call(Qf, t)
    ? !1
    : i1.test(t)
    ? (Kf[t] = !0)
    : ((Qf[t] = !0), !1);
}
function l1(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function a1(t, e, n, r) {
  if (e === null || typeof e > "u" || l1(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Pt(t, e, n, r, i, o, l) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    ft[t] = new Pt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  ft[e] = new Pt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  ft[t] = new Pt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  ft[t] = new Pt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    ft[t] = new Pt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  ft[t] = new Pt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  ft[t] = new Pt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  ft[t] = new Pt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  ft[t] = new Pt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Mc = /[\-:]([a-z])/g;
function Dc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Mc, Dc);
    ft[e] = new Pt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Mc, Dc);
    ft[e] = new Pt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Mc, Dc);
  ft[e] = new Pt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  ft[t] = new Pt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new Pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  ft[t] = new Pt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Oc(t, e, n, r) {
  var i = ft.hasOwnProperty(e) ? ft[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (a1(e, n, i, r) && (n = null),
    r || i === null
      ? o1(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var sr = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Il = Symbol.for("react.element"),
  Pi = Symbol.for("react.portal"),
  Ri = Symbol.for("react.fragment"),
  zc = Symbol.for("react.strict_mode"),
  pu = Symbol.for("react.profiler"),
  cp = Symbol.for("react.provider"),
  fp = Symbol.for("react.context"),
  Ac = Symbol.for("react.forward_ref"),
  mu = Symbol.for("react.suspense"),
  gu = Symbol.for("react.suspense_list"),
  Fc = Symbol.for("react.memo"),
  gr = Symbol.for("react.lazy"),
  dp = Symbol.for("react.offscreen"),
  Xf = Symbol.iterator;
function vo(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Xf && t[Xf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var be = Object.assign,
  Es;
function zo(t) {
  if (Es === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Es = (e && e[1]) || "";
    }
  return (
    `
` +
    Es +
    t
  );
}
var Cs = !1;
function ks(t, e) {
  if (!t || Cs) return "";
  Cs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", t.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Cs = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? zo(t) : "";
}
function s1(t) {
  switch (t.tag) {
    case 5:
      return zo(t.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = ks(t.type, !1)), t;
    case 11:
      return (t = ks(t.type.render, !1)), t;
    case 1:
      return (t = ks(t.type, !0)), t;
    default:
      return "";
  }
}
function vu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Ri:
      return "Fragment";
    case Pi:
      return "Portal";
    case pu:
      return "Profiler";
    case zc:
      return "StrictMode";
    case mu:
      return "Suspense";
    case gu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case fp:
        return (t.displayName || "Context") + ".Consumer";
      case cp:
        return (t._context.displayName || "Context") + ".Provider";
      case Ac:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Fc:
        return (
          (e = t.displayName || null), e !== null ? e : vu(t.type) || "Memo"
        );
      case gr:
        (e = t._payload), (t = t._init);
        try {
          return vu(t(e));
        } catch {}
    }
  return null;
}
function u1(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return vu(e);
    case 8:
      return e === zc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Ar(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function hp(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function c1(t) {
  var e = hp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function jl(t) {
  t._valueTracker || (t._valueTracker = c1(t));
}
function pp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = hp(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function xa(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function yu(t, e) {
  var n = e.checked;
  return be({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function qf(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Ar(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function mp(t, e) {
  (e = e.checked), e != null && Oc(t, "checked", e, !1);
}
function _u(t, e) {
  mp(t, e);
  var n = Ar(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? wu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && wu(t, e.type, Ar(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Zf(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function wu(t, e, n) {
  (e !== "number" || xa(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ao = Array.isArray;
function Vi(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Ar(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function xu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(z(91));
  return be({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Jf(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(z(92));
      if (Ao(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Ar(n) };
}
function gp(t, e) {
  var n = Ar(e.value),
    r = Ar(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function ed(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function vp(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Su(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? vp(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var bl,
  yp = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        bl = bl || document.createElement("div"),
          bl.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = bl.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function el(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Uo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  f1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Uo).forEach(function (t) {
  f1.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Uo[e] = Uo[t]);
  });
});
function _p(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Uo.hasOwnProperty(t) && Uo[t])
    ? ("" + e).trim()
    : e + "px";
}
function wp(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _p(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var d1 = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Eu(t, e) {
  if (e) {
    if (d1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(z(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(z(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(z(62));
  }
}
function Cu(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ku = null;
function Ic(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Tu = null,
  Hi = null,
  Wi = null;
function td(t) {
  if ((t = Ml(t))) {
    if (typeof Tu != "function") throw Error(z(280));
    var e = t.stateNode;
    e && ((e = is(e)), Tu(t.stateNode, t.type, e));
  }
}
function xp(t) {
  Hi ? (Wi ? Wi.push(t) : (Wi = [t])) : (Hi = t);
}
function Sp() {
  if (Hi) {
    var t = Hi,
      e = Wi;
    if (((Wi = Hi = null), td(t), e)) for (t = 0; t < e.length; t++) td(e[t]);
  }
}
function Ep(t, e) {
  return t(e);
}
function Cp() {}
var Ts = !1;
function kp(t, e, n) {
  if (Ts) return t(e, n);
  Ts = !0;
  try {
    return Ep(t, e, n);
  } finally {
    (Ts = !1), (Hi !== null || Wi !== null) && (Cp(), Sp());
  }
}
function tl(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = is(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(z(231, e, typeof n));
  return n;
}
var Pu = !1;
if (nr)
  try {
    var yo = {};
    Object.defineProperty(yo, "passive", {
      get: function () {
        Pu = !0;
      },
    }),
      window.addEventListener("test", yo, yo),
      window.removeEventListener("test", yo, yo);
  } catch {
    Pu = !1;
  }
function h1(t, e, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Bo = !1,
  Sa = null,
  Ea = !1,
  Ru = null,
  p1 = {
    onError: function (t) {
      (Bo = !0), (Sa = t);
    },
  };
function m1(t, e, n, r, i, o, l, a, s) {
  (Bo = !1), (Sa = null), h1.apply(p1, arguments);
}
function g1(t, e, n, r, i, o, l, a, s) {
  if ((m1.apply(this, arguments), Bo)) {
    if (Bo) {
      var u = Sa;
      (Bo = !1), (Sa = null);
    } else throw Error(z(198));
    Ea || ((Ea = !0), (Ru = u));
  }
}
function wi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Tp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function nd(t) {
  if (wi(t) !== t) throw Error(z(188));
}
function v1(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = wi(t)), e === null)) throw Error(z(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return nd(i), t;
        if (o === r) return nd(i), e;
        o = o.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? t : e;
}
function Pp(t) {
  return (t = v1(t)), t !== null ? Rp(t) : null;
}
function Rp(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Rp(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Np = Kt.unstable_scheduleCallback,
  rd = Kt.unstable_cancelCallback,
  y1 = Kt.unstable_shouldYield,
  _1 = Kt.unstable_requestPaint,
  Ke = Kt.unstable_now,
  w1 = Kt.unstable_getCurrentPriorityLevel,
  jc = Kt.unstable_ImmediatePriority,
  Lp = Kt.unstable_UserBlockingPriority,
  Ca = Kt.unstable_NormalPriority,
  x1 = Kt.unstable_LowPriority,
  Mp = Kt.unstable_IdlePriority,
  es = null,
  In = null;
function S1(t) {
  if (In && typeof In.onCommitFiberRoot == "function")
    try {
      In.onCommitFiberRoot(es, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Tn = Math.clz32 ? Math.clz32 : k1,
  E1 = Math.log,
  C1 = Math.LN2;
function k1(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((E1(t) / C1) | 0)) | 0;
}
var Ul = 64,
  Bl = 4194304;
function Fo(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function ka(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Fo(a)) : ((o &= l), o !== 0 && (r = Fo(o)));
  } else (l = n & ~i), l !== 0 ? (r = Fo(l)) : o !== 0 && (r = Fo(o));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Tn(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function T1(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P1(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Tn(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = T1(a, e))
      : s <= e && (t.expiredLanes |= a),
      (o &= ~a);
  }
}
function Nu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Dp() {
  var t = Ul;
  return (Ul <<= 1), !(Ul & 4194240) && (Ul = 64), t;
}
function Ps(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Nl(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Tn(e)),
    (t[e] = n);
}
function R1(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Tn(n),
      o = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
  }
}
function bc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Tn(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ye = 0;
function Op(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zp,
  Uc,
  Ap,
  Fp,
  Ip,
  Lu = !1,
  $l = [],
  kr = null,
  Tr = null,
  Pr = null,
  nl = new Map(),
  rl = new Map(),
  yr = [],
  N1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function id(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      kr = null;
      break;
    case "dragenter":
    case "dragleave":
      Tr = null;
      break;
    case "mouseover":
    case "mouseout":
      Pr = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rl.delete(e.pointerId);
  }
}
function _o(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      e !== null && ((e = Ml(e)), e !== null && Uc(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function L1(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (kr = _o(kr, t, e, n, r, i)), !0;
    case "dragenter":
      return (Tr = _o(Tr, t, e, n, r, i)), !0;
    case "mouseover":
      return (Pr = _o(Pr, t, e, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return nl.set(o, _o(nl.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), rl.set(o, _o(rl.get(o) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function jp(t) {
  var e = qr(t.target);
  if (e !== null) {
    var n = wi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Tp(n)), e !== null)) {
          (t.blockedOn = e),
            Ip(t.priority, function () {
              Ap(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function aa(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Mu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ku = r), n.target.dispatchEvent(r), (ku = null);
    } else return (e = Ml(n)), e !== null && Uc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function od(t, e, n) {
  aa(t) && n.delete(e);
}
function M1() {
  (Lu = !1),
    kr !== null && aa(kr) && (kr = null),
    Tr !== null && aa(Tr) && (Tr = null),
    Pr !== null && aa(Pr) && (Pr = null),
    nl.forEach(od),
    rl.forEach(od);
}
function wo(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Lu ||
      ((Lu = !0),
      Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority, M1)));
}
function il(t) {
  function e(i) {
    return wo(i, t);
  }
  if (0 < $l.length) {
    wo($l[0], t);
    for (var n = 1; n < $l.length; n++) {
      var r = $l[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    kr !== null && wo(kr, t),
      Tr !== null && wo(Tr, t),
      Pr !== null && wo(Pr, t),
      nl.forEach(e),
      rl.forEach(e),
      n = 0;
    n < yr.length;
    n++
  )
    (r = yr[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < yr.length && ((n = yr[0]), n.blockedOn === null); )
    jp(n), n.blockedOn === null && yr.shift();
}
var Yi = sr.ReactCurrentBatchConfig,
  Ta = !0;
function D1(t, e, n, r) {
  var i = ye,
    o = Yi.transition;
  Yi.transition = null;
  try {
    (ye = 1), Bc(t, e, n, r);
  } finally {
    (ye = i), (Yi.transition = o);
  }
}
function O1(t, e, n, r) {
  var i = ye,
    o = Yi.transition;
  Yi.transition = null;
  try {
    (ye = 4), Bc(t, e, n, r);
  } finally {
    (ye = i), (Yi.transition = o);
  }
}
function Bc(t, e, n, r) {
  if (Ta) {
    var i = Mu(t, e, n, r);
    if (i === null) Is(t, e, r, Pa, n), id(t, r);
    else if (L1(i, t, e, n, r)) r.stopPropagation();
    else if ((id(t, r), e & 4 && -1 < N1.indexOf(t))) {
      for (; i !== null; ) {
        var o = Ml(i);
        if (
          (o !== null && zp(o),
          (o = Mu(t, e, n, r)),
          o === null && Is(t, e, r, Pa, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Is(t, e, r, null, n);
  }
}
var Pa = null;
function Mu(t, e, n, r) {
  if (((Pa = null), (t = Ic(r)), (t = qr(t)), t !== null))
    if (((e = wi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Tp(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Pa = t), null;
}
function bp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (w1()) {
        case jc:
          return 1;
        case Lp:
          return 4;
        case Ca:
        case x1:
          return 16;
        case Mp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wr = null,
  $c = null,
  sa = null;
function Up() {
  if (sa) return sa;
  var t,
    e = $c,
    n = e.length,
    r,
    i = "value" in wr ? wr.value : wr.textContent,
    o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++);
  return (sa = i.slice(t, 1 < r ? 1 - r : void 0));
}
function ua(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Vl() {
  return !0;
}
function ld() {
  return !1;
}
function Jt(t) {
  function e(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Vl
        : ld),
      (this.isPropagationStopped = ld),
      this
    );
  }
  return (
    be(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vl));
      },
      persist: function () {},
      isPersistent: Vl,
    }),
    e
  );
}
var ho = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vc = Jt(ho),
  Ll = be({}, ho, { view: 0, detail: 0 }),
  z1 = Jt(Ll),
  Rs,
  Ns,
  xo,
  ts = be({}, Ll, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== xo &&
            (xo && t.type === "mousemove"
              ? ((Rs = t.screenX - xo.screenX), (Ns = t.screenY - xo.screenY))
              : (Ns = Rs = 0),
            (xo = t)),
          Rs);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Ns;
    },
  }),
  ad = Jt(ts),
  A1 = be({}, ts, { dataTransfer: 0 }),
  F1 = Jt(A1),
  I1 = be({}, Ll, { relatedTarget: 0 }),
  Ls = Jt(I1),
  j1 = be({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b1 = Jt(j1),
  U1 = be({}, ho, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  B1 = Jt(U1),
  $1 = be({}, ho, { data: 0 }),
  sd = Jt($1),
  V1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  H1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  W1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Y1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = W1[t]) ? !!e[t] : !1;
}
function Hc() {
  return Y1;
}
var G1 = be({}, Ll, {
    key: function (t) {
      if (t.key) {
        var e = V1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ua(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? H1[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hc,
    charCode: function (t) {
      return t.type === "keypress" ? ua(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ua(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  Q1 = Jt(G1),
  K1 = be({}, ts, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ud = Jt(K1),
  X1 = be({}, Ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hc,
  }),
  q1 = Jt(X1),
  Z1 = be({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  J1 = Jt(Z1),
  ev = be({}, ts, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tv = Jt(ev),
  nv = [9, 13, 27, 32],
  Wc = nr && "CompositionEvent" in window,
  $o = null;
nr && "documentMode" in document && ($o = document.documentMode);
var rv = nr && "TextEvent" in window && !$o,
  Bp = nr && (!Wc || ($o && 8 < $o && 11 >= $o)),
  cd = " ",
  fd = !1;
function $p(t, e) {
  switch (t) {
    case "keyup":
      return nv.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vp(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Ni = !1;
function iv(t, e) {
  switch (t) {
    case "compositionend":
      return Vp(e);
    case "keypress":
      return e.which !== 32 ? null : ((fd = !0), cd);
    case "textInput":
      return (t = e.data), t === cd && fd ? null : t;
    default:
      return null;
  }
}
function ov(t, e) {
  if (Ni)
    return t === "compositionend" || (!Wc && $p(t, e))
      ? ((t = Up()), (sa = $c = wr = null), (Ni = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Bp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var lv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!lv[t.type] : e === "textarea";
}
function Hp(t, e, n, r) {
  xp(r),
    (e = Ra(e, "onChange")),
    0 < e.length &&
      ((n = new Vc("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Vo = null,
  ol = null;
function av(t) {
  tm(t, 0);
}
function ns(t) {
  var e = Di(t);
  if (pp(e)) return t;
}
function sv(t, e) {
  if (t === "change") return e;
}
var Wp = !1;
if (nr) {
  var Ms;
  if (nr) {
    var Ds = "oninput" in document;
    if (!Ds) {
      var hd = document.createElement("div");
      hd.setAttribute("oninput", "return;"),
        (Ds = typeof hd.oninput == "function");
    }
    Ms = Ds;
  } else Ms = !1;
  Wp = Ms && (!document.documentMode || 9 < document.documentMode);
}
function pd() {
  Vo && (Vo.detachEvent("onpropertychange", Yp), (ol = Vo = null));
}
function Yp(t) {
  if (t.propertyName === "value" && ns(ol)) {
    var e = [];
    Hp(e, ol, t, Ic(t)), kp(av, e);
  }
}
function uv(t, e, n) {
  t === "focusin"
    ? (pd(), (Vo = e), (ol = n), Vo.attachEvent("onpropertychange", Yp))
    : t === "focusout" && pd();
}
function cv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ns(ol);
}
function fv(t, e) {
  if (t === "click") return ns(e);
}
function dv(t, e) {
  if (t === "input" || t === "change") return ns(e);
}
function hv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Rn = typeof Object.is == "function" ? Object.is : hv;
function ll(t, e) {
  if (Rn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hu.call(e, i) || !Rn(t[i], e[i])) return !1;
  }
  return !0;
}
function md(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function gd(t, e) {
  var n = md(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = md(n);
  }
}
function Gp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Gp(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Qp() {
  for (var t = window, e = xa(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = xa(t.document);
  }
  return e;
}
function Yc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function pv(t) {
  var e = Qp(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Gp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Yc(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = gd(n, o));
        var l = gd(n, r);
        i &&
          l &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== l.node ||
            t.focusOffset !== l.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > r
            ? (t.addRange(e), t.extend(l.node, l.offset))
            : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var mv = nr && "documentMode" in document && 11 >= document.documentMode,
  Li = null,
  Du = null,
  Ho = null,
  Ou = !1;
function vd(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ou ||
    Li == null ||
    Li !== xa(r) ||
    ((r = Li),
    "selectionStart" in r && Yc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ho && ll(Ho, r)) ||
      ((Ho = r),
      (r = Ra(Du, "onSelect")),
      0 < r.length &&
        ((e = new Vc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Li))));
}
function Hl(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Mi = {
    animationend: Hl("Animation", "AnimationEnd"),
    animationiteration: Hl("Animation", "AnimationIteration"),
    animationstart: Hl("Animation", "AnimationStart"),
    transitionend: Hl("Transition", "TransitionEnd"),
  },
  Os = {},
  Kp = {};
nr &&
  ((Kp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mi.animationend.animation,
    delete Mi.animationiteration.animation,
    delete Mi.animationstart.animation),
  "TransitionEvent" in window || delete Mi.transitionend.transition);
function rs(t) {
  if (Os[t]) return Os[t];
  if (!Mi[t]) return t;
  var e = Mi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Kp) return (Os[t] = e[n]);
  return t;
}
var Xp = rs("animationend"),
  qp = rs("animationiteration"),
  Zp = rs("animationstart"),
  Jp = rs("transitionend"),
  em = new Map(),
  yd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function br(t, e) {
  em.set(t, e), _i(e, [t]);
}
for (var zs = 0; zs < yd.length; zs++) {
  var As = yd[zs],
    gv = As.toLowerCase(),
    vv = As[0].toUpperCase() + As.slice(1);
  br(gv, "on" + vv);
}
br(Xp, "onAnimationEnd");
br(qp, "onAnimationIteration");
br(Zp, "onAnimationStart");
br("dblclick", "onDoubleClick");
br("focusin", "onFocus");
br("focusout", "onBlur");
br(Jp, "onTransitionEnd");
Zi("onMouseEnter", ["mouseout", "mouseover"]);
Zi("onMouseLeave", ["mouseout", "mouseover"]);
Zi("onPointerEnter", ["pointerout", "pointerover"]);
Zi("onPointerLeave", ["pointerout", "pointerover"]);
_i(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_i(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_i("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_i(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_i(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_i(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Io =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function _d(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), g1(r, e, void 0, t), (t.currentTarget = null);
}
function tm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          _d(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          _d(i, a, u), (o = s);
        }
    }
  }
  if (Ea) throw ((t = Ru), (Ea = !1), (Ru = null), t);
}
function Pe(t, e) {
  var n = e[ju];
  n === void 0 && (n = e[ju] = new Set());
  var r = t + "__bubble";
  n.has(r) || (nm(e, t, 2, !1), n.add(r));
}
function Fs(t, e, n) {
  var r = 0;
  e && (r |= 4), nm(n, t, r, e);
}
var Wl = "_reactListening" + Math.random().toString(36).slice(2);
function al(t) {
  if (!t[Wl]) {
    (t[Wl] = !0),
      up.forEach(function (n) {
        n !== "selectionchange" && (yv.has(n) || Fs(n, !1, t), Fs(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Wl] || ((e[Wl] = !0), Fs("selectionchange", !1, e));
  }
}
function nm(t, e, n, r) {
  switch (bp(e)) {
    case 1:
      var i = D1;
      break;
    case 4:
      i = O1;
      break;
    default:
      i = Bc;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Pu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Is(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = qr(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  kp(function () {
    var u = o,
      c = Ic(n),
      f = [];
    e: {
      var d = em.get(t);
      if (d !== void 0) {
        var g = Vc,
          y = t;
        switch (t) {
          case "keypress":
            if (ua(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Q1;
            break;
          case "focusin":
            (y = "focus"), (g = Ls);
            break;
          case "focusout":
            (y = "blur"), (g = Ls);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ls;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = F1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = q1;
            break;
          case Xp:
          case qp:
          case Zp:
            g = b1;
            break;
          case Jp:
            g = J1;
            break;
          case "scroll":
            g = z1;
            break;
          case "wheel":
            g = tv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = B1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ud;
        }
        var h = (e & 4) !== 0,
          w = !h && t === "scroll",
          m = h ? (d !== null ? d + "Capture" : null) : d;
        h = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = tl(p, m)), S != null && h.push(sl(p, S, v)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < h.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: h }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (g = t === "mouseout" || t === "pointerout"),
          d &&
            n !== ku &&
            (y = n.relatedTarget || n.fromElement) &&
            (qr(y) || y[rr]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? qr(y) : null),
              y !== null &&
                ((w = wi(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((h = ad),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((h = ud),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = g == null ? d : Di(g)),
            (v = y == null ? d : Di(y)),
            (d = new h(S, p + "leave", g, n, c)),
            (d.target = w),
            (d.relatedTarget = v),
            (S = null),
            qr(c) === u &&
              ((h = new h(m, p + "enter", y, n, c)),
              (h.target = v),
              (h.relatedTarget = w),
              (S = h)),
            (w = S),
            g && y)
          )
            t: {
              for (h = g, m = y, p = 0, v = h; v; v = ki(v)) p++;
              for (v = 0, S = m; S; S = ki(S)) v++;
              for (; 0 < p - v; ) (h = ki(h)), p--;
              for (; 0 < v - p; ) (m = ki(m)), v--;
              for (; p--; ) {
                if (h === m || (m !== null && h === m.alternate)) break t;
                (h = ki(h)), (m = ki(m));
              }
              h = null;
            }
          else h = null;
          g !== null && wd(f, d, g, h, !1),
            y !== null && w !== null && wd(f, w, y, h, !0);
        }
      }
      e: {
        if (
          ((d = u ? Di(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var E = sv;
        else if (dd(d))
          if (Wp) E = dv;
          else {
            E = cv;
            var _ = uv;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = fv);
        if (E && (E = E(t, u))) {
          Hp(f, E, n, c);
          break e;
        }
        _ && _(t, d, u),
          t === "focusout" &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === "number" &&
            wu(d, "number", d.value);
      }
      switch (((_ = u ? Di(u) : window), t)) {
        case "focusin":
          (dd(_) || _.contentEditable === "true") &&
            ((Li = _), (Du = u), (Ho = null));
          break;
        case "focusout":
          Ho = Du = Li = null;
          break;
        case "mousedown":
          Ou = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ou = !1), vd(f, n, c);
          break;
        case "selectionchange":
          if (mv) break;
        case "keydown":
        case "keyup":
          vd(f, n, c);
      }
      var C;
      if (Wc)
        e: {
          switch (t) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Ni
          ? $p(t, n) && (T = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Bp &&
          n.locale !== "ko" &&
          (Ni || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Ni && (C = Up())
            : ((wr = c),
              ($c = "value" in wr ? wr.value : wr.textContent),
              (Ni = !0))),
        (_ = Ra(u, T)),
        0 < _.length &&
          ((T = new sd(T, t, null, n, c)),
          f.push({ event: T, listeners: _ }),
          C ? (T.data = C) : ((C = Vp(n)), C !== null && (T.data = C)))),
        (C = rv ? iv(t, n) : ov(t, n)) &&
          ((u = Ra(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new sd("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    tm(f, e);
  });
}
function sl(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ra(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = tl(t, n)),
      o != null && r.unshift(sl(t, o, i)),
      (o = tl(t, e)),
      o != null && r.push(sl(t, o, i))),
      (t = t.return);
  }
  return r;
}
function ki(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function wd(t, e, n, r, i) {
  for (var o = e._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = tl(n, o)), s != null && l.unshift(sl(n, s, a)))
        : i || ((s = tl(n, o)), s != null && l.push(sl(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var _v = /\r\n?/g,
  wv = /\u0000|\uFFFD/g;
function xd(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      _v,
      `
`
    )
    .replace(wv, "");
}
function Yl(t, e, n) {
  if (((e = xd(e)), xd(t) !== e && n)) throw Error(z(425));
}
function Na() {}
var zu = null,
  Au = null;
function Fu(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0,
  xv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sd = typeof Promise == "function" ? Promise : void 0,
  Sv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sd < "u"
      ? function (t) {
          return Sd.resolve(null).then(t).catch(Ev);
        }
      : Iu;
function Ev(t) {
  setTimeout(function () {
    throw t;
  });
}
function js(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), il(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  il(e);
}
function Rr(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Ed(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var po = Math.random().toString(36).slice(2),
  zn = "__reactFiber$" + po,
  ul = "__reactProps$" + po,
  rr = "__reactContainer$" + po,
  ju = "__reactEvents$" + po,
  Cv = "__reactListeners$" + po,
  kv = "__reactHandles$" + po;
function qr(t) {
  var e = t[zn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[rr] || n[zn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Ed(t); t !== null; ) {
          if ((n = t[zn])) return n;
          t = Ed(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ml(t) {
  return (
    (t = t[zn] || t[rr]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Di(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(z(33));
}
function is(t) {
  return t[ul] || null;
}
var bu = [],
  Oi = -1;
function Ur(t) {
  return { current: t };
}
function Re(t) {
  0 > Oi || ((t.current = bu[Oi]), (bu[Oi] = null), Oi--);
}
function Ce(t, e) {
  Oi++, (bu[Oi] = t.current), (t.current = e);
}
var Fr = {},
  yt = Ur(Fr),
  Dt = Ur(!1),
  ui = Fr;
function Ji(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Fr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = e[o];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ot(t) {
  return (t = t.childContextTypes), t != null;
}
function La() {
  Re(Dt), Re(yt);
}
function Cd(t, e, n) {
  if (yt.current !== Fr) throw Error(z(168));
  Ce(yt, e), Ce(Dt, n);
}
function rm(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(z(108, u1(t) || "Unknown", i));
  return be({}, n, r);
}
function Ma(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Fr),
    (ui = yt.current),
    Ce(yt, t),
    Ce(Dt, Dt.current),
    !0
  );
}
function kd(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((t = rm(t, e, ui)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Re(Dt),
      Re(yt),
      Ce(yt, t))
    : Re(Dt),
    Ce(Dt, n);
}
var Xn = null,
  os = !1,
  bs = !1;
function im(t) {
  Xn === null ? (Xn = [t]) : Xn.push(t);
}
function Tv(t) {
  (os = !0), im(t);
}
function Br() {
  if (!bs && Xn !== null) {
    bs = !0;
    var t = 0,
      e = ye;
    try {
      var n = Xn;
      for (ye = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Xn = null), (os = !1);
    } catch (i) {
      throw (Xn !== null && (Xn = Xn.slice(t + 1)), Np(jc, Br), i);
    } finally {
      (ye = e), (bs = !1);
    }
  }
  return null;
}
var zi = [],
  Ai = 0,
  Da = null,
  Oa = 0,
  ln = [],
  an = 0,
  ci = null,
  Zn = 1,
  Jn = "";
function Gr(t, e) {
  (zi[Ai++] = Oa), (zi[Ai++] = Da), (Da = t), (Oa = e);
}
function om(t, e, n) {
  (ln[an++] = Zn), (ln[an++] = Jn), (ln[an++] = ci), (ci = t);
  var r = Zn;
  t = Jn;
  var i = 32 - Tn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Tn(e) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Zn = (1 << (32 - Tn(e) + i)) | (n << i) | r),
      (Jn = o + t);
  } else (Zn = (1 << o) | (n << i) | r), (Jn = t);
}
function Gc(t) {
  t.return !== null && (Gr(t, 1), om(t, 1, 0));
}
function Qc(t) {
  for (; t === Da; )
    (Da = zi[--Ai]), (zi[Ai] = null), (Oa = zi[--Ai]), (zi[Ai] = null);
  for (; t === ci; )
    (ci = ln[--an]),
      (ln[an] = null),
      (Jn = ln[--an]),
      (ln[an] = null),
      (Zn = ln[--an]),
      (ln[an] = null);
}
var Gt = null,
  Wt = null,
  Me = !1,
  kn = null;
function lm(t, e) {
  var n = sn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Td(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Gt = t), (Wt = Rr(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Gt = t), (Wt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = ci !== null ? { id: Zn, overflow: Jn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = sn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Gt = t),
            (Wt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Uu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Bu(t) {
  if (Me) {
    var e = Wt;
    if (e) {
      var n = e;
      if (!Td(t, e)) {
        if (Uu(t)) throw Error(z(418));
        e = Rr(n.nextSibling);
        var r = Gt;
        e && Td(t, e)
          ? lm(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (Me = !1), (Gt = t));
      }
    } else {
      if (Uu(t)) throw Error(z(418));
      (t.flags = (t.flags & -4097) | 2), (Me = !1), (Gt = t);
    }
  }
}
function Pd(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Gt = t;
}
function Gl(t) {
  if (t !== Gt) return !1;
  if (!Me) return Pd(t), (Me = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Fu(t.type, t.memoizedProps))),
    e && (e = Wt))
  ) {
    if (Uu(t)) throw (am(), Error(z(418)));
    for (; e; ) lm(t, e), (e = Rr(e.nextSibling));
  }
  if ((Pd(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(z(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Wt = Rr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Wt = null;
    }
  } else Wt = Gt ? Rr(t.stateNode.nextSibling) : null;
  return !0;
}
function am() {
  for (var t = Wt; t; ) t = Rr(t.nextSibling);
}
function eo() {
  (Wt = Gt = null), (Me = !1);
}
function Kc(t) {
  kn === null ? (kn = [t]) : kn.push(t);
}
var Pv = sr.ReactCurrentBatchConfig;
function Sn(t, e) {
  if (t && t.defaultProps) {
    (e = be({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var za = Ur(null),
  Aa = null,
  Fi = null,
  Xc = null;
function qc() {
  Xc = Fi = Aa = null;
}
function Zc(t) {
  var e = za.current;
  Re(za), (t._currentValue = e);
}
function $u(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Gi(t, e) {
  (Aa = t),
    (Xc = Fi = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Mt = !0), (t.firstContext = null));
}
function dn(t) {
  var e = t._currentValue;
  if (Xc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Fi === null)) {
      if (Aa === null) throw Error(z(308));
      (Fi = t), (Aa.dependencies = { lanes: 0, firstContext: t });
    } else Fi = Fi.next = t;
  return e;
}
var Zr = null;
function Jc(t) {
  Zr === null ? (Zr = [t]) : Zr.push(t);
}
function sm(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Jc(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    ir(t, r)
  );
}
function ir(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vr = !1;
function ef(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function um(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function er(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ge & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      ir(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Jc(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    ir(t, n)
  );
}
function ca(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), bc(t, n);
  }
}
function Rd(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Fa(t, e, n, r) {
  var i = t.updateQueue;
  vr = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (l = 0), (c = u = s = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = t,
            h = a;
          switch (((d = e), (g = n), h.tag)) {
            case 1:
              if (((y = h.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = h.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = be({}, f, d);
              break e;
            case 2:
              vr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
          (l |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (l |= i.lane), (i = i.next);
      while (i !== e);
    } else o === null && (i.shared.lanes = 0);
    (di |= l), (t.lanes = l), (t.memoizedState = f);
  }
}
function Nd(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(z(191, i));
        i.call(r);
      }
    }
}
var cm = new sp.Component().refs;
function Vu(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : be({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ls = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? wi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ct(),
      i = Mr(t),
      o = er(r, i);
    (o.payload = e),
      n != null && (o.callback = n),
      (e = Nr(t, o, i)),
      e !== null && (Pn(e, t, i, r), ca(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ct(),
      i = Mr(t),
      o = er(r, i);
    (o.tag = 1),
      (o.payload = e),
      n != null && (o.callback = n),
      (e = Nr(t, o, i)),
      e !== null && (Pn(e, t, i, r), ca(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Ct(),
      r = Mr(t),
      i = er(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Nr(t, i, r)),
      e !== null && (Pn(e, t, r, n), ca(e, t, r));
  },
};
function Ld(t, e, n, r, i, o, l) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, o, l)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ll(n, r) || !ll(i, o)
      : !0
  );
}
function fm(t, e, n) {
  var r = !1,
    i = Fr,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dn(o))
      : ((i = Ot(e) ? ui : yt.current),
        (r = e.contextTypes),
        (o = (r = r != null) ? Ji(t, i) : Fr)),
    (e = new e(n, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ls),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function Md(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && ls.enqueueReplaceState(e, e.state, null);
}
function Hu(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = cm), ef(t);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (i.context = dn(o))
    : ((o = Ot(e) ? ui : yt.current), (i.context = Ji(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && (Vu(t, e, o, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && ls.enqueueReplaceState(i, i.state, null),
      Fa(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function So(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, t));
      var i = r,
        o = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (l) {
            var a = i.refs;
            a === cm && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (e._stringRef = o),
          e);
    }
    if (typeof t != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, t));
  }
  return t;
}
function Ql(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      z(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function Dd(t) {
  var e = t._init;
  return e(t._payload);
}
function dm(t) {
  function e(m, p) {
    if (t) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!t) return null;
    for (; p !== null; ) e(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Dr(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, v) {
    return (
      (m.index = v),
      t
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function l(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, S) {
    return p === null || p.tag !== 6
      ? ((p = Ys(v, m.mode, S)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function s(m, p, v, S) {
    var E = v.type;
    return E === Ri
      ? c(m, p, v.props.children, S, v.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === gr &&
            Dd(E) === p.type))
      ? ((S = i(p, v.props)), (S.ref = So(m, p, v)), (S.return = m), S)
      : ((S = ga(v.type, v.key, v.props, null, m.mode, S)),
        (S.ref = So(m, p, v)),
        (S.return = m),
        S);
  }
  function u(m, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Gs(v, m.mode, S)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p);
  }
  function c(m, p, v, S, E) {
    return p === null || p.tag !== 7
      ? ((p = ii(v, m.mode, S, E)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ys("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Il:
          return (
            (v = ga(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = So(m, null, p)),
            (v.return = m),
            v
          );
        case Pi:
          return (p = Gs(p, m.mode, v)), (p.return = m), p;
        case gr:
          var S = p._init;
          return f(m, S(p._payload), v);
      }
      if (Ao(p) || vo(p))
        return (p = ii(p, m.mode, v, null)), (p.return = m), p;
      Ql(m, p);
    }
    return null;
  }
  function d(m, p, v, S) {
    var E = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : a(m, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Il:
          return v.key === E ? s(m, p, v, S) : null;
        case Pi:
          return v.key === E ? u(m, p, v, S) : null;
        case gr:
          return (E = v._init), d(m, p, E(v._payload), S);
      }
      if (Ao(v) || vo(v)) return E !== null ? null : c(m, p, v, S, null);
      Ql(m, v);
    }
    return null;
  }
  function g(m, p, v, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(v) || null), a(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Il:
          return (m = m.get(S.key === null ? v : S.key) || null), s(p, m, S, E);
        case Pi:
          return (m = m.get(S.key === null ? v : S.key) || null), u(p, m, S, E);
        case gr:
          var _ = S._init;
          return g(m, p, v, _(S._payload), E);
      }
      if (Ao(S) || vo(S)) return (m = m.get(v) || null), c(p, m, S, E, null);
      Ql(p, S);
    }
    return null;
  }
  function y(m, p, v, S) {
    for (
      var E = null, _ = null, C = p, T = (p = 0), R = null;
      C !== null && T < v.length;
      T++
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var O = d(m, C, v[T], S);
      if (O === null) {
        C === null && (C = R);
        break;
      }
      t && C && O.alternate === null && e(m, C),
        (p = o(O, p, T)),
        _ === null ? (E = O) : (_.sibling = O),
        (_ = O),
        (C = R);
    }
    if (T === v.length) return n(m, C), Me && Gr(m, T), E;
    if (C === null) {
      for (; T < v.length; T++)
        (C = f(m, v[T], S)),
          C !== null &&
            ((p = o(C, p, T)), _ === null ? (E = C) : (_.sibling = C), (_ = C));
      return Me && Gr(m, T), E;
    }
    for (C = r(m, C); T < v.length; T++)
      (R = g(C, m, T, v[T], S)),
        R !== null &&
          (t && R.alternate !== null && C.delete(R.key === null ? T : R.key),
          (p = o(R, p, T)),
          _ === null ? (E = R) : (_.sibling = R),
          (_ = R));
    return (
      t &&
        C.forEach(function (b) {
          return e(m, b);
        }),
      Me && Gr(m, T),
      E
    );
  }
  function h(m, p, v, S) {
    var E = vo(v);
    if (typeof E != "function") throw Error(z(150));
    if (((v = E.call(v)), v == null)) throw Error(z(151));
    for (
      var _ = (E = null), C = p, T = (p = 0), R = null, O = v.next();
      C !== null && !O.done;
      T++, O = v.next()
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var b = d(m, C, O.value, S);
      if (b === null) {
        C === null && (C = R);
        break;
      }
      t && C && b.alternate === null && e(m, C),
        (p = o(b, p, T)),
        _ === null ? (E = b) : (_.sibling = b),
        (_ = b),
        (C = R);
    }
    if (O.done) return n(m, C), Me && Gr(m, T), E;
    if (C === null) {
      for (; !O.done; T++, O = v.next())
        (O = f(m, O.value, S)),
          O !== null &&
            ((p = o(O, p, T)), _ === null ? (E = O) : (_.sibling = O), (_ = O));
      return Me && Gr(m, T), E;
    }
    for (C = r(m, C); !O.done; T++, O = v.next())
      (O = g(C, m, T, O.value, S)),
        O !== null &&
          (t && O.alternate !== null && C.delete(O.key === null ? T : O.key),
          (p = o(O, p, T)),
          _ === null ? (E = O) : (_.sibling = O),
          (_ = O));
    return (
      t &&
        C.forEach(function (K) {
          return e(m, K);
        }),
      Me && Gr(m, T),
      E
    );
  }
  function w(m, p, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Ri &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Il:
          e: {
            for (var E = v.key, _ = p; _ !== null; ) {
              if (_.key === E) {
                if (((E = v.type), E === Ri)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (p = i(_, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === gr &&
                    Dd(E) === _.type)
                ) {
                  n(m, _.sibling),
                    (p = i(_, v.props)),
                    (p.ref = So(m, _, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, _);
                break;
              } else e(m, _);
              _ = _.sibling;
            }
            v.type === Ri
              ? ((p = ii(v.props.children, m.mode, S, v.key)),
                (p.return = m),
                (m = p))
              : ((S = ga(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = So(m, p, v)),
                (S.return = m),
                (m = S));
          }
          return l(m);
        case Pi:
          e: {
            for (_ = v.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else e(m, p);
              p = p.sibling;
            }
            (p = Gs(v, m.mode, S)), (p.return = m), (m = p);
          }
          return l(m);
        case gr:
          return (_ = v._init), w(m, p, _(v._payload), S);
      }
      if (Ao(v)) return y(m, p, v, S);
      if (vo(v)) return h(m, p, v, S);
      Ql(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Ys(v, m.mode, S)), (p.return = m), (m = p)),
        l(m))
      : n(m, p);
  }
  return w;
}
var to = dm(!0),
  hm = dm(!1),
  Dl = {},
  jn = Ur(Dl),
  cl = Ur(Dl),
  fl = Ur(Dl);
function Jr(t) {
  if (t === Dl) throw Error(z(174));
  return t;
}
function tf(t, e) {
  switch ((Ce(fl, e), Ce(cl, t), Ce(jn, Dl), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Su(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Su(e, t));
  }
  Re(jn), Ce(jn, e);
}
function no() {
  Re(jn), Re(cl), Re(fl);
}
function pm(t) {
  Jr(fl.current);
  var e = Jr(jn.current),
    n = Su(e, t.type);
  e !== n && (Ce(cl, t), Ce(jn, n));
}
function nf(t) {
  cl.current === t && (Re(jn), Re(cl));
}
var Ae = Ur(0);
function Ia(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Us = [];
function rf() {
  for (var t = 0; t < Us.length; t++)
    Us[t]._workInProgressVersionPrimary = null;
  Us.length = 0;
}
var fa = sr.ReactCurrentDispatcher,
  Bs = sr.ReactCurrentBatchConfig,
  fi = 0,
  je = null,
  tt = null,
  it = null,
  ja = !1,
  Wo = !1,
  dl = 0,
  Rv = 0;
function dt() {
  throw Error(z(321));
}
function of(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Rn(t[n], e[n])) return !1;
  return !0;
}
function lf(t, e, n, r, i, o) {
  if (
    ((fi = o),
    (je = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (fa.current = t === null || t.memoizedState === null ? Dv : Ov),
    (t = n(r, i)),
    Wo)
  ) {
    o = 0;
    do {
      if (((Wo = !1), (dl = 0), 25 <= o)) throw Error(z(301));
      (o += 1),
        (it = tt = null),
        (e.updateQueue = null),
        (fa.current = zv),
        (t = n(r, i));
    } while (Wo);
  }
  if (
    ((fa.current = ba),
    (e = tt !== null && tt.next !== null),
    (fi = 0),
    (it = tt = je = null),
    (ja = !1),
    e)
  )
    throw Error(z(300));
  return t;
}
function af() {
  var t = dl !== 0;
  return (dl = 0), t;
}
function Dn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return it === null ? (je.memoizedState = it = t) : (it = it.next = t), it;
}
function hn() {
  if (tt === null) {
    var t = je.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = tt.next;
  var e = it === null ? je.memoizedState : it.next;
  if (e !== null) (it = e), (tt = t);
  else {
    if (t === null) throw Error(z(310));
    (tt = t),
      (t = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null,
      }),
      it === null ? (je.memoizedState = it = t) : (it = it.next = t);
  }
  return it;
}
function hl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function $s(t) {
  var e = hn(),
    n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var r = tt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((fi & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (l = r)) : (s = s.next = f),
          (je.lanes |= c),
          (di |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      Rn(r, e.memoizedState) || (Mt = !0),
      (e.memoizedState = r),
      (e.baseState = l),
      (e.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (o = i.lane), (je.lanes |= o), (di |= o), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Vs(t) {
  var e = hn(),
    n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = t(o, l.action)), (l = l.next);
    while (l !== i);
    Rn(o, e.memoizedState) || (Mt = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function mm() {}
function gm(t, e) {
  var n = je,
    r = hn(),
    i = e(),
    o = !Rn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Mt = !0)),
    (r = r.queue),
    sf(_m.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pl(9, ym.bind(null, n, r, i, e), void 0, null),
      lt === null)
    )
      throw Error(z(349));
    fi & 30 || vm(n, e, i);
  }
  return i;
}
function vm(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = je.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (je.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function ym(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), wm(e) && xm(t);
}
function _m(t, e, n) {
  return n(function () {
    wm(e) && xm(t);
  });
}
function wm(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Rn(t, n);
  } catch {
    return !0;
  }
}
function xm(t) {
  var e = ir(t, 1);
  e !== null && Pn(e, t, 1, -1);
}
function Od(t) {
  var e = Dn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hl,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Mv.bind(null, je, t)),
    [e.memoizedState, t]
  );
}
function pl(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = je.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (je.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Sm() {
  return hn().memoizedState;
}
function da(t, e, n, r) {
  var i = Dn();
  (je.flags |= t),
    (i.memoizedState = pl(1 | e, n, void 0, r === void 0 ? null : r));
}
function as(t, e, n, r) {
  var i = hn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (tt !== null) {
    var l = tt.memoizedState;
    if (((o = l.destroy), r !== null && of(r, l.deps))) {
      i.memoizedState = pl(e, n, o, r);
      return;
    }
  }
  (je.flags |= t), (i.memoizedState = pl(1 | e, n, o, r));
}
function zd(t, e) {
  return da(8390656, 8, t, e);
}
function sf(t, e) {
  return as(2048, 8, t, e);
}
function Em(t, e) {
  return as(4, 2, t, e);
}
function Cm(t, e) {
  return as(4, 4, t, e);
}
function km(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Tm(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), as(4, 4, km.bind(null, e, t), n)
  );
}
function uf() {}
function Pm(t, e) {
  var n = hn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && of(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Rm(t, e) {
  var n = hn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && of(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Nm(t, e, n) {
  return fi & 21
    ? (Rn(n, e) || ((n = Dp()), (je.lanes |= n), (di |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Mt = !0)), (t.memoizedState = n));
}
function Nv(t, e) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Bs.transition;
  Bs.transition = {};
  try {
    t(!1), e();
  } finally {
    (ye = n), (Bs.transition = r);
  }
}
function Lm() {
  return hn().memoizedState;
}
function Lv(t, e, n) {
  var r = Mr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mm(t))
  )
    Dm(e, n);
  else if (((n = sm(t, e, n, r)), n !== null)) {
    var i = Ct();
    Pn(n, t, r, i), Om(n, e, r);
  }
}
function Mv(t, e, n) {
  var r = Mr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mm(t)) Dm(e, i);
  else {
    var o = t.alternate;
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var l = e.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Rn(a, l))) {
          var s = e.interleaved;
          s === null
            ? ((i.next = i), Jc(e))
            : ((i.next = s.next), (s.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = sm(t, e, i, r)),
      n !== null && ((i = Ct()), Pn(n, t, r, i), Om(n, e, r));
  }
}
function Mm(t) {
  var e = t.alternate;
  return t === je || (e !== null && e === je);
}
function Dm(t, e) {
  Wo = ja = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Om(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), bc(t, n);
  }
}
var ba = {
    readContext: dn,
    useCallback: dt,
    useContext: dt,
    useEffect: dt,
    useImperativeHandle: dt,
    useInsertionEffect: dt,
    useLayoutEffect: dt,
    useMemo: dt,
    useReducer: dt,
    useRef: dt,
    useState: dt,
    useDebugValue: dt,
    useDeferredValue: dt,
    useTransition: dt,
    useMutableSource: dt,
    useSyncExternalStore: dt,
    useId: dt,
    unstable_isNewReconciler: !1,
  },
  Dv = {
    readContext: dn,
    useCallback: function (t, e) {
      return (Dn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: dn,
    useEffect: zd,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        da(4194308, 4, km.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return da(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return da(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Dn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Dn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Lv.bind(null, je, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Dn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Od,
    useDebugValue: uf,
    useDeferredValue: function (t) {
      return (Dn().memoizedState = t);
    },
    useTransition: function () {
      var t = Od(!1),
        e = t[0];
      return (t = Nv.bind(null, t[1])), (Dn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = je,
        i = Dn();
      if (Me) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = e()), lt === null)) throw Error(z(349));
        fi & 30 || vm(r, e, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (i.queue = o),
        zd(_m.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        pl(9, ym.bind(null, r, o, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Dn(),
        e = lt.identifierPrefix;
      if (Me) {
        var n = Jn,
          r = Zn;
        (n = (r & ~(1 << (32 - Tn(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = dl++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Rv++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Ov = {
    readContext: dn,
    useCallback: Pm,
    useContext: dn,
    useEffect: sf,
    useImperativeHandle: Tm,
    useInsertionEffect: Em,
    useLayoutEffect: Cm,
    useMemo: Rm,
    useReducer: $s,
    useRef: Sm,
    useState: function () {
      return $s(hl);
    },
    useDebugValue: uf,
    useDeferredValue: function (t) {
      var e = hn();
      return Nm(e, tt.memoizedState, t);
    },
    useTransition: function () {
      var t = $s(hl)[0],
        e = hn().memoizedState;
      return [t, e];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Lm,
    unstable_isNewReconciler: !1,
  },
  zv = {
    readContext: dn,
    useCallback: Pm,
    useContext: dn,
    useEffect: sf,
    useImperativeHandle: Tm,
    useInsertionEffect: Em,
    useLayoutEffect: Cm,
    useMemo: Rm,
    useReducer: Vs,
    useRef: Sm,
    useState: function () {
      return Vs(hl);
    },
    useDebugValue: uf,
    useDeferredValue: function (t) {
      var e = hn();
      return tt === null ? (e.memoizedState = t) : Nm(e, tt.memoizedState, t);
    },
    useTransition: function () {
      var t = Vs(hl)[0],
        e = hn().memoizedState;
      return [t, e];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Lm,
    unstable_isNewReconciler: !1,
  };
function ro(t, e) {
  try {
    var n = "",
      r = e;
    do (n += s1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Hs(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Wu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Av = typeof WeakMap == "function" ? WeakMap : Map;
function zm(t, e, n) {
  (n = er(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Ba || ((Ba = !0), (tc = r)), Wu(t, e);
    }),
    n
  );
}
function Am(t, e, n) {
  (n = er(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wu(t, e);
      });
  }
  var o = t.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wu(t, e),
          typeof r != "function" &&
            (Lr === null ? (Lr = new Set([this])) : Lr.add(this));
        var l = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ad(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Av();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = Kv.bind(null, t, e, n)), e.then(t, t));
}
function Fd(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Id(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = er(-1, 1)), (e.tag = 2), Nr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Fv = sr.ReactCurrentOwner,
  Mt = !1;
function St(t, e, n, r) {
  e.child = t === null ? hm(e, null, n, r) : to(e, t.child, n, r);
}
function jd(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return (
    Gi(e, i),
    (r = lf(t, e, n, r, o, i)),
    (n = af()),
    t !== null && !Mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        or(t, e, i))
      : (Me && n && Gc(e), (e.flags |= 1), St(t, e, r, i), e.child)
  );
}
function bd(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" &&
      !vf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Fm(t, e, o, r, i))
      : ((t = ga(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ll), n(l, r) && t.ref === e.ref)
    )
      return or(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Dr(o, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Fm(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (ll(o, r) && t.ref === e.ref)
      if (((Mt = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
        t.flags & 131072 && (Mt = !0);
      else return (e.lanes = t.lanes), or(t, e, i);
  }
  return Yu(t, e, n, r, i);
}
function Im(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ce(ji, $t),
        ($t |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Ce(ji, $t),
          ($t |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ce(ji, $t),
        ($t |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Ce(ji, $t),
      ($t |= r);
  return St(t, e, i, n), e.child;
}
function jm(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Yu(t, e, n, r, i) {
  var o = Ot(n) ? ui : yt.current;
  return (
    (o = Ji(e, o)),
    Gi(e, i),
    (n = lf(t, e, n, r, o, i)),
    (r = af()),
    t !== null && !Mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        or(t, e, i))
      : (Me && r && Gc(e), (e.flags |= 1), St(t, e, n, i), e.child)
  );
}
function Ud(t, e, n, r, i) {
  if (Ot(n)) {
    var o = !0;
    Ma(e);
  } else o = !1;
  if ((Gi(e, i), e.stateNode === null))
    ha(t, e), fm(e, n, r), Hu(e, n, r, i), (r = !0);
  else if (t === null) {
    var l = e.stateNode,
      a = e.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dn(u))
      : ((u = Ot(n) ? ui : yt.current), (u = Ji(e, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Md(e, l, r, u)),
      (vr = !1);
    var d = e.memoizedState;
    (l.state = d),
      Fa(e, r, l, i),
      (s = e.memoizedState),
      a !== r || d !== s || Dt.current || vr
        ? (typeof c == "function" && (Vu(e, n, c, r), (s = e.memoizedState)),
          (a = vr || Ld(e, n, a, r, d, s, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (l = e.stateNode),
      um(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Sn(e.type, a)),
      (l.props = u),
      (f = e.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = dn(s))
        : ((s = Ot(n) ? ui : yt.current), (s = Ji(e, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== f || d !== s) && Md(e, l, r, s)),
      (vr = !1),
      (d = e.memoizedState),
      (l.state = d),
      Fa(e, r, l, i);
    var y = e.memoizedState;
    a !== f || d !== y || Dt.current || vr
      ? (typeof g == "function" && (Vu(e, n, g, r), (y = e.memoizedState)),
        (u = vr || Ld(e, n, u, r, d, y, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == "function" && (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Gu(t, e, n, r, o, i);
}
function Gu(t, e, n, r, i, o) {
  jm(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l) return i && kd(e, n, !1), or(t, e, o);
  (r = e.stateNode), (Fv.current = e);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && l
      ? ((e.child = to(e, t.child, null, o)), (e.child = to(e, null, a, o)))
      : St(t, e, a, o),
    (e.memoizedState = r.state),
    i && kd(e, n, !0),
    e.child
  );
}
function bm(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Cd(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Cd(t, e.context, !1),
    tf(t, e.containerInfo);
}
function Bd(t, e, n, r, i) {
  return eo(), Kc(i), (e.flags |= 256), St(t, e, n, r), e.child;
}
var Qu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ku(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Um(t, e, n) {
  var r = e.pendingProps,
    i = Ae.current,
    o = !1,
    l = (e.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Ce(Ae, i & 1),
    t === null)
  )
    return (
      Bu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((l = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = cs(l, r, 0, null)),
              (t = ii(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = Ku(n)),
              (e.memoizedState = Qu),
              t)
            : cf(e, l))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Iv(t, e, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = e.mode), (i = t.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (e.deletions = null))
        : ((r = Dr(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Dr(a, o)) : ((o = ii(o, l, n, null)), (o.flags |= 2)),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (l = t.child.memoizedState),
      (l =
        l === null
          ? Ku(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = Qu),
      r
    );
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (r = Dr(o, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function cf(t, e) {
  return (
    (e = cs({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Kl(t, e, n, r) {
  return (
    r !== null && Kc(r),
    to(e, t.child, null, n),
    (t = cf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Iv(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Hs(Error(z(422)))), Kl(t, e, l, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = r.fallback),
        (i = e.mode),
        (r = cs({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ii(o, i, l, null)),
        (o.flags |= 2),
        (r.return = e),
        (o.return = e),
        (r.sibling = o),
        (e.child = r),
        e.mode & 1 && to(e, t.child, null, l),
        (e.child.memoizedState = Ku(l)),
        (e.memoizedState = Qu),
        o);
  if (!(e.mode & 1)) return Kl(t, e, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(z(419))), (r = Hs(o, r, void 0)), Kl(t, e, l, r);
  }
  if (((a = (l & t.childLanes) !== 0), Mt || a)) {
    if (((r = lt), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ir(t, i), Pn(r, t, i, -1));
    }
    return gf(), (r = Hs(Error(z(421)))), Kl(t, e, l, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Xv.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (Wt = Rr(i.nextSibling)),
      (Gt = e),
      (Me = !0),
      (kn = null),
      t !== null &&
        ((ln[an++] = Zn),
        (ln[an++] = Jn),
        (ln[an++] = ci),
        (Zn = t.id),
        (Jn = t.overflow),
        (ci = e)),
      (e = cf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function $d(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), $u(t.return, e, n);
}
function Ws(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Bm(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((St(t, e, r.children, n), (r = Ae.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && $d(t, n, e);
        else if (t.tag === 19) $d(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((Ce(Ae, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Ia(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ws(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Ia(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Ws(e, !0, n, null, o);
        break;
      case "together":
        Ws(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ha(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function or(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (di |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(z(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Dr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Dr(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function jv(t, e, n) {
  switch (e.tag) {
    case 3:
      bm(e), eo();
      break;
    case 5:
      pm(e);
      break;
    case 1:
      Ot(e.type) && Ma(e);
      break;
    case 4:
      tf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      Ce(za, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ce(Ae, Ae.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Um(t, e, n)
          : (Ce(Ae, Ae.current & 1),
            (t = or(t, e, n)),
            t !== null ? t.sibling : null);
      Ce(Ae, Ae.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Bm(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ce(Ae, Ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Im(t, e, n);
  }
  return or(t, e, n);
}
var $m, Xu, Vm, Hm;
$m = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xu = function () {};
Vm = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Jr(jn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = yu(t, i)), (r = yu(t, r)), (o = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = xu(t, i)), (r = xu(t, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Na);
    }
    Eu(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Pe("scroll", t),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Hm = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Eo(t, e) {
  if (!Me)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ht(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function bv(t, e, n) {
  var r = e.pendingProps;
  switch ((Qc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ht(e), null;
    case 1:
      return Ot(e.type) && La(), ht(e), null;
    case 3:
      return (
        (r = e.stateNode),
        no(),
        Re(Dt),
        Re(yt),
        rf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Gl(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), kn !== null && (ic(kn), (kn = null)))),
        Xu(t, e),
        ht(e),
        null
      );
    case 5:
      nf(e);
      var i = Jr(fl.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Vm(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(z(166));
          return ht(e), null;
        }
        if (((t = Jr(jn.current)), Gl(e))) {
          (r = e.stateNode), (n = e.type);
          var o = e.memoizedProps;
          switch (((r[zn] = e), (r[ul] = o), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Io.length; i++) Pe(Io[i], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              qf(r, o), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              Jf(r, o), Pe("invalid", r);
          }
          Eu(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : Jo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              jl(r), Zf(r, o, !0);
              break;
            case "textarea":
              jl(r), ed(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Na);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = vp(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = l.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = l.createElement(n, { is: r.is }))
                : ((t = l.createElement(n)),
                  n === "select" &&
                    ((l = t),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (t = l.createElementNS(t, n)),
            (t[zn] = e),
            (t[ul] = r),
            $m(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((l = Cu(n, r)), n)) {
              case "dialog":
                Pe("cancel", t), Pe("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Io.length; i++) Pe(Io[i], t);
                i = r;
                break;
              case "source":
                Pe("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", t), Pe("load", t), (i = r);
                break;
              case "details":
                Pe("toggle", t), (i = r);
                break;
              case "input":
                qf(t, r), (i = yu(t, r)), Pe("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = be({}, r, { value: void 0 })),
                  Pe("invalid", t);
                break;
              case "textarea":
                Jf(t, r), (i = xu(t, r)), Pe("invalid", t);
                break;
              default:
                i = r;
            }
            Eu(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? wp(t, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && yp(t, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && el(t, s)
                    : typeof s == "number" && el(t, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Jo.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && Pe("scroll", t)
                      : s != null && Oc(t, o, s, l));
              }
            switch (n) {
              case "input":
                jl(t), Zf(t, r, !1);
                break;
              case "textarea":
                jl(t), ed(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Ar(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Vi(t, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Vi(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Na);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ht(e), null;
    case 6:
      if (t && e.stateNode != null) Hm(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(z(166));
        if (((n = Jr(fl.current)), Jr(jn.current), Gl(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[zn] = e),
            (o = r.nodeValue !== n) && ((t = Gt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Yl(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yl(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[zn] = e),
            (e.stateNode = r);
      }
      return ht(e), null;
    case 13:
      if (
        (Re(Ae),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Me && Wt !== null && e.mode & 1 && !(e.flags & 128))
          am(), eo(), (e.flags |= 98560), (o = !1);
        else if (((o = Gl(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(z(318));
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(z(317));
            o[zn] = e;
          } else
            eo(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          ht(e), (o = !1);
        } else kn !== null && (ic(kn), (kn = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Ae.current & 1 ? nt === 0 && (nt = 3) : gf())),
          e.updateQueue !== null && (e.flags |= 4),
          ht(e),
          null);
    case 4:
      return (
        no(), Xu(t, e), t === null && al(e.stateNode.containerInfo), ht(e), null
      );
    case 10:
      return Zc(e.type._context), ht(e), null;
    case 17:
      return Ot(e.type) && La(), ht(e), null;
    case 19:
      if ((Re(Ae), (o = e.memoizedState), o === null)) return ht(e), null;
      if (((r = (e.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Eo(o, !1);
        else {
          if (nt !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((l = Ia(t)), l !== null)) {
                for (
                  e.flags |= 128,
                    Eo(o, !1),
                    r = l.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (o = n),
                    (t = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (t = l.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return Ce(Ae, (Ae.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null &&
            Ke() > io &&
            ((e.flags |= 128), (r = !0), Eo(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Ia(l)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Eo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Me)
            )
              return ht(e), null;
          } else
            2 * Ke() - o.renderingStartTime > io &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Eo(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = e.child), (e.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (e.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = Ke()),
          (e.sibling = null),
          (n = Ae.current),
          Ce(Ae, r ? (n & 1) | 2 : n & 1),
          e)
        : (ht(e), null);
    case 22:
    case 23:
      return (
        mf(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? $t & 1073741824 && (ht(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ht(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, e.tag));
}
function Uv(t, e) {
  switch ((Qc(e), e.tag)) {
    case 1:
      return (
        Ot(e.type) && La(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        no(),
        Re(Dt),
        Re(yt),
        rf(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return nf(e), null;
    case 13:
      if (
        (Re(Ae), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(z(340));
        eo();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Re(Ae), null;
    case 4:
      return no(), null;
    case 10:
      return Zc(e.type._context), null;
    case 22:
    case 23:
      return mf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xl = !1,
  pt = !1,
  Bv = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Ii(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Be(t, e, r);
      }
    else n.current = null;
}
function qu(t, e, n) {
  try {
    n();
  } catch (r) {
    Be(t, e, r);
  }
}
var Vd = !1;
function $v(t, e) {
  if (((zu = Ta), (t = Qp()), Yc(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            f = t,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = l + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === t) break t;
              if (
                (d === n && ++u === i && (a = l),
                d === o && ++c === r && (s = l),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Au = { focusedElem: t, selectionRange: n }, Ta = !1, V = e; V !== null; )
    if (((e = V), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (V = t);
    else
      for (; V !== null; ) {
        e = V;
        try {
          var y = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps,
                    w = y.memoizedState,
                    m = e.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? h : Sn(e.type, h),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (S) {
          Be(e, e.return, S);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (V = t);
          break;
        }
        V = e.return;
      }
  return (y = Vd), (Vd = !1), y;
}
function Yo(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && qu(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ss(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Zu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Wm(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Wm(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[zn], delete e[ul], delete e[ju], delete e[Cv], delete e[kv])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Ym(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Hd(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Ym(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ju(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Na));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Ju(t, e, n), t = t.sibling; t !== null; ) Ju(t, e, n), (t = t.sibling);
}
function ec(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (ec(t, e, n), t = t.sibling; t !== null; ) ec(t, e, n), (t = t.sibling);
}
var ut = null,
  En = !1;
function pr(t, e, n) {
  for (n = n.child; n !== null; ) Gm(t, e, n), (n = n.sibling);
}
function Gm(t, e, n) {
  if (In && typeof In.onCommitFiberUnmount == "function")
    try {
      In.onCommitFiberUnmount(es, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pt || Ii(n, e);
    case 6:
      var r = ut,
        i = En;
      (ut = null),
        pr(t, e, n),
        (ut = r),
        (En = i),
        ut !== null &&
          (En
            ? ((t = ut),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ut.removeChild(n.stateNode));
      break;
    case 18:
      ut !== null &&
        (En
          ? ((t = ut),
            (n = n.stateNode),
            t.nodeType === 8
              ? js(t.parentNode, n)
              : t.nodeType === 1 && js(t, n),
            il(t))
          : js(ut, n.stateNode));
      break;
    case 4:
      (r = ut),
        (i = En),
        (ut = n.stateNode.containerInfo),
        (En = !0),
        pr(t, e, n),
        (ut = r),
        (En = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && qu(n, e, l),
            (i = i.next);
        } while (i !== r);
      }
      pr(t, e, n);
      break;
    case 1:
      if (
        !pt &&
        (Ii(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Be(n, e, a);
        }
      pr(t, e, n);
      break;
    case 21:
      pr(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((pt = (r = pt) || n.memoizedState !== null), pr(t, e, n), (pt = r))
        : pr(t, e, n);
      break;
    default:
      pr(t, e, n);
  }
}
function Wd(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Bv()),
      e.forEach(function (r) {
        var i = qv.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function _n(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t,
          l = e,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ut = a.stateNode), (En = !1);
              break e;
            case 3:
              (ut = a.stateNode.containerInfo), (En = !0);
              break e;
            case 4:
              (ut = a.stateNode.containerInfo), (En = !0);
              break e;
          }
          a = a.return;
        }
        if (ut === null) throw Error(z(160));
        Gm(o, l, i), (ut = null), (En = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Be(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Qm(e, t), (e = e.sibling);
}
function Qm(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_n(e, t), Mn(t), r & 4)) {
        try {
          Yo(3, t, t.return), ss(3, t);
        } catch (h) {
          Be(t, t.return, h);
        }
        try {
          Yo(5, t, t.return);
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      break;
    case 1:
      _n(e, t), Mn(t), r & 512 && n !== null && Ii(n, n.return);
      break;
    case 5:
      if (
        (_n(e, t),
        Mn(t),
        r & 512 && n !== null && Ii(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          el(i, "");
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = t.type,
          s = t.updateQueue;
        if (((t.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && mp(i, o),
              Cu(a, l);
            var u = Cu(a, o);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1];
              c === "style"
                ? wp(i, f)
                : c === "dangerouslySetInnerHTML"
                ? yp(i, f)
                : c === "children"
                ? el(i, f)
                : Oc(i, c, f, u);
            }
            switch (a) {
              case "input":
                _u(i, o);
                break;
              case "textarea":
                gp(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Vi(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Vi(i, !!o.multiple, o.defaultValue, !0)
                      : Vi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ul] = o;
          } catch (h) {
            Be(t, t.return, h);
          }
      }
      break;
    case 6:
      if ((_n(e, t), Mn(t), r & 4)) {
        if (t.stateNode === null) throw Error(z(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (h) {
          Be(t, t.return, h);
        }
      }
      break;
    case 3:
      if (
        (_n(e, t), Mn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(e.containerInfo);
        } catch (h) {
          Be(t, t.return, h);
        }
      break;
    case 4:
      _n(e, t), Mn(t);
      break;
    case 13:
      _n(e, t),
        Mn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hf = Ke())),
        r & 4 && Wd(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((pt = (u = pt) || c), _n(e, t), (pt = u)) : _n(e, t),
        Mn(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (V = t, c = t.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yo(4, d, d.return);
                  break;
                case 1:
                  Ii(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (h) {
                      Be(r, n, h);
                    }
                  }
                  break;
                case 5:
                  Ii(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Gd(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (V = g)) : Gd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = t; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = _p("display", l)));
              } catch (h) {
                Be(t, t.return, h);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (h) {
                Be(t, t.return, h);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      _n(e, t), Mn(t), r & 4 && Wd(t);
      break;
    case 21:
      break;
    default:
      _n(e, t), Mn(t);
  }
}
function Mn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Ym(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (el(i, ""), (r.flags &= -33));
          var o = Hd(t);
          ec(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Hd(t);
          Ju(t, a, l);
          break;
        default:
          throw Error(z(161));
      }
    } catch (s) {
      Be(t, t.return, s);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Vv(t, e, n) {
  (V = t), Km(t);
}
function Km(t, e, n) {
  for (var r = (t.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Xl;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || pt;
        a = Xl;
        var u = pt;
        if (((Xl = l), (pt = s) && !u))
          for (V = i; V !== null; )
            (l = V),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Qd(i)
                : s !== null
                ? ((s.return = l), (V = s))
                : Qd(i);
        for (; o !== null; ) (V = o), Km(o), (o = o.sibling);
        (V = i), (Xl = a), (pt = u);
      }
      Yd(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : Yd(t);
  }
}
function Yd(t) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              pt || ss(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !pt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Sn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && Nd(e, o, r);
              break;
            case 3:
              var l = e.updateQueue;
              if (l !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Nd(e, l, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var s = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && il(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        pt || (e.flags & 512 && Zu(e));
      } catch (d) {
        Be(e, e.return, d);
      }
    }
    if (e === t) {
      V = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function Gd(t) {
  for (; V !== null; ) {
    var e = V;
    if (e === t) {
      V = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (V = n);
      break;
    }
    V = e.return;
  }
}
function Qd(t) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ss(4, e);
          } catch (s) {
            Be(e, n, s);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Be(e, i, s);
            }
          }
          var o = e.return;
          try {
            Zu(e);
          } catch (s) {
            Be(e, o, s);
          }
          break;
        case 5:
          var l = e.return;
          try {
            Zu(e);
          } catch (s) {
            Be(e, l, s);
          }
      }
    } catch (s) {
      Be(e, e.return, s);
    }
    if (e === t) {
      V = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (V = a);
      break;
    }
    V = e.return;
  }
}
var Hv = Math.ceil,
  Ua = sr.ReactCurrentDispatcher,
  ff = sr.ReactCurrentOwner,
  fn = sr.ReactCurrentBatchConfig,
  ge = 0,
  lt = null,
  Je = null,
  ct = 0,
  $t = 0,
  ji = Ur(0),
  nt = 0,
  ml = null,
  di = 0,
  us = 0,
  df = 0,
  Go = null,
  Lt = null,
  hf = 0,
  io = 1 / 0,
  Qn = null,
  Ba = !1,
  tc = null,
  Lr = null,
  ql = !1,
  xr = null,
  $a = 0,
  Qo = 0,
  nc = null,
  pa = -1,
  ma = 0;
function Ct() {
  return ge & 6 ? Ke() : pa !== -1 ? pa : (pa = Ke());
}
function Mr(t) {
  return t.mode & 1
    ? ge & 2 && ct !== 0
      ? ct & -ct
      : Pv.transition !== null
      ? (ma === 0 && (ma = Dp()), ma)
      : ((t = ye),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : bp(t.type))),
        t)
    : 1;
}
function Pn(t, e, n, r) {
  if (50 < Qo) throw ((Qo = 0), (nc = null), Error(z(185)));
  Nl(t, n, r),
    (!(ge & 2) || t !== lt) &&
      (t === lt && (!(ge & 2) && (us |= n), nt === 4 && _r(t, ct)),
      zt(t, r),
      n === 1 && ge === 0 && !(e.mode & 1) && ((io = Ke() + 500), os && Br()));
}
function zt(t, e) {
  var n = t.callbackNode;
  P1(t, e);
  var r = ka(t, t === lt ? ct : 0);
  if (r === 0)
    n !== null && rd(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && rd(n), e === 1))
      t.tag === 0 ? Tv(Kd.bind(null, t)) : im(Kd.bind(null, t)),
        Sv(function () {
          !(ge & 6) && Br();
        }),
        (n = null);
    else {
      switch (Op(r)) {
        case 1:
          n = jc;
          break;
        case 4:
          n = Lp;
          break;
        case 16:
          n = Ca;
          break;
        case 536870912:
          n = Mp;
          break;
        default:
          n = Ca;
      }
      n = r0(n, Xm.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Xm(t, e) {
  if (((pa = -1), (ma = 0), ge & 6)) throw Error(z(327));
  var n = t.callbackNode;
  if (Qi() && t.callbackNode !== n) return null;
  var r = ka(t, t === lt ? ct : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Va(t, r);
  else {
    e = r;
    var i = ge;
    ge |= 2;
    var o = Zm();
    (lt !== t || ct !== e) && ((Qn = null), (io = Ke() + 500), ri(t, e));
    do
      try {
        Gv();
        break;
      } catch (a) {
        qm(t, a);
      }
    while (!0);
    qc(),
      (Ua.current = o),
      (ge = i),
      Je !== null ? (e = 0) : ((lt = null), (ct = 0), (e = nt));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Nu(t)), i !== 0 && ((r = i), (e = rc(t, i)))), e === 1)
    )
      throw ((n = ml), ri(t, 0), _r(t, r), zt(t, Ke()), n);
    if (e === 6) _r(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !Wv(i) &&
          ((e = Va(t, r)),
          e === 2 && ((o = Nu(t)), o !== 0 && ((r = o), (e = rc(t, o)))),
          e === 1))
      )
        throw ((n = ml), ri(t, 0), _r(t, r), zt(t, Ke()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Qr(t, Lt, Qn);
          break;
        case 3:
          if (
            (_r(t, r), (r & 130023424) === r && ((e = hf + 500 - Ke()), 10 < e))
          ) {
            if (ka(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Ct(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Iu(Qr.bind(null, t, Lt, Qn), e);
            break;
          }
          Qr(t, Lt, Qn);
          break;
        case 4:
          if ((_r(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Tn(r);
            (o = 1 << l), (l = e[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hv(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Iu(Qr.bind(null, t, Lt, Qn), r);
            break;
          }
          Qr(t, Lt, Qn);
          break;
        case 5:
          Qr(t, Lt, Qn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return zt(t, Ke()), t.callbackNode === n ? Xm.bind(null, t) : null;
}
function rc(t, e) {
  var n = Go;
  return (
    t.current.memoizedState.isDehydrated && (ri(t, e).flags |= 256),
    (t = Va(t, e)),
    t !== 2 && ((e = Lt), (Lt = n), e !== null && ic(e)),
    t
  );
}
function ic(t) {
  Lt === null ? (Lt = t) : Lt.push.apply(Lt, t);
}
function Wv(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Rn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function _r(t, e) {
  for (
    e &= ~df,
      e &= ~us,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Tn(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Kd(t) {
  if (ge & 6) throw Error(z(327));
  Qi();
  var e = ka(t, 0);
  if (!(e & 1)) return zt(t, Ke()), null;
  var n = Va(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Nu(t);
    r !== 0 && ((e = r), (n = rc(t, r)));
  }
  if (n === 1) throw ((n = ml), ri(t, 0), _r(t, e), zt(t, Ke()), n);
  if (n === 6) throw Error(z(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Qr(t, Lt, Qn),
    zt(t, Ke()),
    null
  );
}
function pf(t, e) {
  var n = ge;
  ge |= 1;
  try {
    return t(e);
  } finally {
    (ge = n), ge === 0 && ((io = Ke() + 500), os && Br());
  }
}
function hi(t) {
  xr !== null && xr.tag === 0 && !(ge & 6) && Qi();
  var e = ge;
  ge |= 1;
  var n = fn.transition,
    r = ye;
  try {
    if (((fn.transition = null), (ye = 1), t)) return t();
  } finally {
    (ye = r), (fn.transition = n), (ge = e), !(ge & 6) && Br();
  }
}
function mf() {
  ($t = ji.current), Re(ji);
}
function ri(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), xv(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var r = n;
      switch ((Qc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && La();
          break;
        case 3:
          no(), Re(Dt), Re(yt), rf();
          break;
        case 5:
          nf(r);
          break;
        case 4:
          no();
          break;
        case 13:
          Re(Ae);
          break;
        case 19:
          Re(Ae);
          break;
        case 10:
          Zc(r.type._context);
          break;
        case 22:
        case 23:
          mf();
      }
      n = n.return;
    }
  if (
    ((lt = t),
    (Je = t = Dr(t.current, null)),
    (ct = $t = e),
    (nt = 0),
    (ml = null),
    (df = us = di = 0),
    (Lt = Go = null),
    Zr !== null)
  ) {
    for (e = 0; e < Zr.length; e++)
      if (((n = Zr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Zr = null;
  }
  return t;
}
function qm(t, e) {
  do {
    var n = Je;
    try {
      if ((qc(), (fa.current = ba), ja)) {
        for (var r = je.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ja = !1;
      }
      if (
        ((fi = 0),
        (it = tt = je = null),
        (Wo = !1),
        (dl = 0),
        (ff.current = null),
        n === null || n.return === null)
      ) {
        (nt = 1), (ml = e), (Je = null);
        break;
      }
      e: {
        var o = t,
          l = n.return,
          a = n,
          s = e;
        if (
          ((e = ct),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Fd(l);
          if (g !== null) {
            (g.flags &= -257),
              Id(g, l, a, o, e),
              g.mode & 1 && Ad(o, u, e),
              (e = g),
              (s = u);
            var y = e.updateQueue;
            if (y === null) {
              var h = new Set();
              h.add(s), (e.updateQueue = h);
            } else y.add(s);
            break e;
          } else {
            if (!(e & 1)) {
              Ad(o, u, e), gf();
              break e;
            }
            s = Error(z(426));
          }
        } else if (Me && a.mode & 1) {
          var w = Fd(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Id(w, l, a, o, e),
              Kc(ro(s, a));
            break e;
          }
        }
        (o = s = ro(s, a)),
          nt !== 4 && (nt = 2),
          Go === null ? (Go = [o]) : Go.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var m = zm(o, s, e);
              Rd(o, m);
              break e;
            case 1:
              a = s;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Lr === null || !Lr.has(v))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var S = Am(o, a, e);
                Rd(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      e0(n);
    } catch (E) {
      (e = E), Je === n && n !== null && (Je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zm() {
  var t = Ua.current;
  return (Ua.current = ba), t === null ? ba : t;
}
function gf() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
    lt === null || (!(di & 268435455) && !(us & 268435455)) || _r(lt, ct);
}
function Va(t, e) {
  var n = ge;
  ge |= 2;
  var r = Zm();
  (lt !== t || ct !== e) && ((Qn = null), ri(t, e));
  do
    try {
      Yv();
      break;
    } catch (i) {
      qm(t, i);
    }
  while (!0);
  if ((qc(), (ge = n), (Ua.current = r), Je !== null)) throw Error(z(261));
  return (lt = null), (ct = 0), nt;
}
function Yv() {
  for (; Je !== null; ) Jm(Je);
}
function Gv() {
  for (; Je !== null && !y1(); ) Jm(Je);
}
function Jm(t) {
  var e = n0(t.alternate, t, $t);
  (t.memoizedProps = t.pendingProps),
    e === null ? e0(t) : (Je = e),
    (ff.current = null);
}
function e0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Uv(n, e)), n !== null)) {
        (n.flags &= 32767), (Je = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (nt = 6), (Je = null);
        return;
      }
    } else if (((n = bv(n, e, $t)), n !== null)) {
      Je = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Je = e;
      return;
    }
    Je = e = t;
  } while (e !== null);
  nt === 0 && (nt = 5);
}
function Qr(t, e, n) {
  var r = ye,
    i = fn.transition;
  try {
    (fn.transition = null), (ye = 1), Qv(t, e, n, r);
  } finally {
    (fn.transition = i), (ye = r);
  }
  return null;
}
function Qv(t, e, n, r) {
  do Qi();
  while (xr !== null);
  if (ge & 6) throw Error(z(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(z(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (R1(t, o),
    t === lt && ((Je = lt = null), (ct = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ql ||
      ((ql = !0),
      r0(Ca, function () {
        return Qi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = fn.transition), (fn.transition = null);
    var l = ye;
    ye = 1;
    var a = ge;
    (ge |= 4),
      (ff.current = null),
      $v(t, n),
      Qm(n, t),
      pv(Au),
      (Ta = !!zu),
      (Au = zu = null),
      (t.current = n),
      Vv(n),
      _1(),
      (ge = a),
      (ye = l),
      (fn.transition = o);
  } else t.current = n;
  if (
    (ql && ((ql = !1), (xr = t), ($a = i)),
    (o = t.pendingLanes),
    o === 0 && (Lr = null),
    S1(n.stateNode),
    zt(t, Ke()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ba) throw ((Ba = !1), (t = tc), (tc = null), t);
  return (
    $a & 1 && t.tag !== 0 && Qi(),
    (o = t.pendingLanes),
    o & 1 ? (t === nc ? Qo++ : ((Qo = 0), (nc = t))) : (Qo = 0),
    Br(),
    null
  );
}
function Qi() {
  if (xr !== null) {
    var t = Op($a),
      e = fn.transition,
      n = ye;
    try {
      if (((fn.transition = null), (ye = 16 > t ? 16 : t), xr === null))
        var r = !1;
      else {
        if (((t = xr), (xr = null), ($a = 0), ge & 6)) throw Error(z(331));
        var i = ge;
        for (ge |= 4, V = t.current; V !== null; ) {
          var o = V,
            l = o.child;
          if (V.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        g = c.return;
                      if ((Wm(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (V = d);
                        break;
                      }
                      V = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var w = h.sibling;
                    (h.sibling = null), (h = w);
                  } while (h !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (V = l);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yo(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var p = t.current;
        for (V = p; V !== null; ) {
          l = V;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (V = v);
          else
            e: for (l = p; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ss(9, a);
                  }
                } catch (E) {
                  Be(a, a.return, E);
                }
              if (a === l) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (V = S);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((ge = i), Br(), In && typeof In.onPostCommitFiberRoot == "function")
        )
          try {
            In.onPostCommitFiberRoot(es, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ye = n), (fn.transition = e);
    }
  }
  return !1;
}
function Xd(t, e, n) {
  (e = ro(n, e)),
    (e = zm(t, e, 1)),
    (t = Nr(t, e, 1)),
    (e = Ct()),
    t !== null && (Nl(t, 1, e), zt(t, e));
}
function Be(t, e, n) {
  if (t.tag === 3) Xd(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Xd(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lr === null || !Lr.has(r)))
        ) {
          (t = ro(n, t)),
            (t = Am(e, t, 1)),
            (e = Nr(e, t, 1)),
            (t = Ct()),
            e !== null && (Nl(e, 1, t), zt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Kv(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Ct()),
    (t.pingedLanes |= t.suspendedLanes & n),
    lt === t &&
      (ct & n) === n &&
      (nt === 4 || (nt === 3 && (ct & 130023424) === ct && 500 > Ke() - hf)
        ? ri(t, 0)
        : (df |= n)),
    zt(t, e);
}
function t0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Bl), (Bl <<= 1), !(Bl & 130023424) && (Bl = 4194304))
      : (e = 1));
  var n = Ct();
  (t = ir(t, e)), t !== null && (Nl(t, e, n), zt(t, n));
}
function Xv(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), t0(t, n);
}
function qv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(e), t0(t, n);
}
var n0;
n0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Dt.current) Mt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Mt = !1), jv(t, e, n);
      Mt = !!(t.flags & 131072);
    }
  else (Mt = !1), Me && e.flags & 1048576 && om(e, Oa, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      ha(t, e), (t = e.pendingProps);
      var i = Ji(e, yt.current);
      Gi(e, n), (i = lf(null, e, r, t, i, n));
      var o = af();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ot(r) ? ((o = !0), Ma(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ef(e),
            (i.updater = ls),
            (e.stateNode = i),
            (i._reactInternals = e),
            Hu(e, r, t, n),
            (e = Gu(null, e, r, !0, o, n)))
          : ((e.tag = 0), Me && o && Gc(e), St(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (ha(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Jv(r)),
          (t = Sn(r, t)),
          i)
        ) {
          case 0:
            e = Yu(null, e, r, t, n);
            break e;
          case 1:
            e = Ud(null, e, r, t, n);
            break e;
          case 11:
            e = jd(null, e, r, t, n);
            break e;
          case 14:
            e = bd(null, e, r, Sn(r.type, t), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Sn(r, i)),
        Yu(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Sn(r, i)),
        Ud(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((bm(e), t === null)) throw Error(z(387));
        (r = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          um(t, e),
          Fa(e, r, null, n);
        var l = e.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            (i = ro(Error(z(423)), e)), (e = Bd(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ro(Error(z(424)), e)), (e = Bd(t, e, r, n, i));
            break e;
          } else
            for (
              Wt = Rr(e.stateNode.containerInfo.firstChild),
                Gt = e,
                Me = !0,
                kn = null,
                n = hm(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((eo(), r === i)) {
            e = or(t, e, n);
            break e;
          }
          St(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        pm(e),
        t === null && Bu(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (l = i.children),
        Fu(r, i) ? (l = null) : o !== null && Fu(r, o) && (e.flags |= 32),
        jm(t, e),
        St(t, e, l, n),
        e.child
      );
    case 6:
      return t === null && Bu(e), null;
    case 13:
      return Um(t, e, n);
    case 4:
      return (
        tf(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = to(e, null, r, n)) : St(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Sn(r, i)),
        jd(t, e, r, i, n)
      );
    case 7:
      return St(t, e, e.pendingProps, n), e.child;
    case 8:
      return St(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return St(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (l = i.value),
          Ce(za, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Rn(o.value, l)) {
            if (o.children === i.children && !Dt.current) {
              e = or(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = er(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      $u(o.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(z(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  $u(l, n, e),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === e) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        St(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Gi(e, n),
        (i = dn(i)),
        (r = r(i)),
        (e.flags |= 1),
        St(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Sn(r, e.pendingProps)),
        (i = Sn(r.type, i)),
        bd(t, e, r, i, n)
      );
    case 15:
      return Fm(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Sn(r, i)),
        ha(t, e),
        (e.tag = 1),
        Ot(r) ? ((t = !0), Ma(e)) : (t = !1),
        Gi(e, n),
        fm(e, r, i),
        Hu(e, r, i, n),
        Gu(null, e, r, !0, t, n)
      );
    case 19:
      return Bm(t, e, n);
    case 22:
      return Im(t, e, n);
  }
  throw Error(z(156, e.tag));
};
function r0(t, e) {
  return Np(t, e);
}
function Zv(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function sn(t, e, n, r) {
  return new Zv(t, e, n, r);
}
function vf(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Jv(t) {
  if (typeof t == "function") return vf(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Ac)) return 11;
    if (t === Fc) return 14;
  }
  return 2;
}
function Dr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = sn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function ga(t, e, n, r, i, o) {
  var l = 2;
  if (((r = t), typeof t == "function")) vf(t) && (l = 1);
  else if (typeof t == "string") l = 5;
  else
    e: switch (t) {
      case Ri:
        return ii(n.children, i, o, e);
      case zc:
        (l = 8), (i |= 8);
        break;
      case pu:
        return (
          (t = sn(12, n, e, i | 2)), (t.elementType = pu), (t.lanes = o), t
        );
      case mu:
        return (t = sn(13, n, e, i)), (t.elementType = mu), (t.lanes = o), t;
      case gu:
        return (t = sn(19, n, e, i)), (t.elementType = gu), (t.lanes = o), t;
      case dp:
        return cs(n, i, o, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case cp:
              l = 10;
              break e;
            case fp:
              l = 9;
              break e;
            case Ac:
              l = 11;
              break e;
            case Fc:
              l = 14;
              break e;
            case gr:
              (l = 16), (r = null);
              break e;
          }
        throw Error(z(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = sn(l, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
  );
}
function ii(t, e, n, r) {
  return (t = sn(7, t, r, e)), (t.lanes = n), t;
}
function cs(t, e, n, r) {
  return (
    (t = sn(22, t, r, e)),
    (t.elementType = dp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Ys(t, e, n) {
  return (t = sn(6, t, null, e)), (t.lanes = n), t;
}
function Gs(t, e, n) {
  return (
    (e = sn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function ey(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ps(0)),
    (this.expirationTimes = Ps(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ps(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function yf(t, e, n, r, i, o, l, a, s) {
  return (
    (t = new ey(t, e, n, a, s)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = sn(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ef(o),
    t
  );
}
function ty(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pi,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function i0(t) {
  if (!t) return Fr;
  t = t._reactInternals;
  e: {
    if (wi(t) !== t || t.tag !== 1) throw Error(z(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ot(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(z(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ot(n)) return rm(t, n, e);
  }
  return e;
}
function o0(t, e, n, r, i, o, l, a, s) {
  return (
    (t = yf(n, r, !0, t, i, o, l, a, s)),
    (t.context = i0(null)),
    (n = t.current),
    (r = Ct()),
    (i = Mr(n)),
    (o = er(r, i)),
    (o.callback = e ?? null),
    Nr(n, o, i),
    (t.current.lanes = i),
    Nl(t, i, r),
    zt(t, r),
    t
  );
}
function fs(t, e, n, r) {
  var i = e.current,
    o = Ct(),
    l = Mr(i);
  return (
    (n = i0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = er(o, l)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Nr(i, e, l)),
    t !== null && (Pn(t, i, l, o), ca(t, i, l)),
    l
  );
}
function Ha(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function qd(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function _f(t, e) {
  qd(t, e), (t = t.alternate) && qd(t, e);
}
function ny() {
  return null;
}
var l0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function wf(t) {
  this._internalRoot = t;
}
ds.prototype.render = wf.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(z(409));
  fs(t, e, null, null);
};
ds.prototype.unmount = wf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    hi(function () {
      fs(null, t, null, null);
    }),
      (e[rr] = null);
  }
};
function ds(t) {
  this._internalRoot = t;
}
ds.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Fp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < yr.length && e !== 0 && e < yr[n].priority; n++);
    yr.splice(n, 0, t), n === 0 && jp(t);
  }
};
function xf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function hs(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zd() {}
function ry(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ha(l);
        o.call(u);
      };
    }
    var l = o0(e, r, t, 0, null, !1, !1, "", Zd);
    return (
      (t._reactRootContainer = l),
      (t[rr] = l.current),
      al(t.nodeType === 8 ? t.parentNode : t),
      hi(),
      l
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ha(s);
      a.call(u);
    };
  }
  var s = yf(t, 0, !1, null, null, !1, !1, "", Zd);
  return (
    (t._reactRootContainer = s),
    (t[rr] = s.current),
    al(t.nodeType === 8 ? t.parentNode : t),
    hi(function () {
      fs(e, s, n, r);
    }),
    s
  );
}
function ps(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = Ha(l);
        a.call(s);
      };
    }
    fs(e, l, t, i);
  } else l = ry(n, e, t, i, r);
  return Ha(l);
}
zp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Fo(e.pendingLanes);
        n !== 0 &&
          (bc(e, n | 1), zt(e, Ke()), !(ge & 6) && ((io = Ke() + 500), Br()));
      }
      break;
    case 13:
      hi(function () {
        var r = ir(t, 1);
        if (r !== null) {
          var i = Ct();
          Pn(r, t, 1, i);
        }
      }),
        _f(t, 1);
  }
};
Uc = function (t) {
  if (t.tag === 13) {
    var e = ir(t, 134217728);
    if (e !== null) {
      var n = Ct();
      Pn(e, t, 134217728, n);
    }
    _f(t, 134217728);
  }
};
Ap = function (t) {
  if (t.tag === 13) {
    var e = Mr(t),
      n = ir(t, e);
    if (n !== null) {
      var r = Ct();
      Pn(n, t, e, r);
    }
    _f(t, e);
  }
};
Fp = function () {
  return ye;
};
Ip = function (t, e) {
  var n = ye;
  try {
    return (ye = t), e();
  } finally {
    ye = n;
  }
};
Tu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((_u(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = is(r);
            if (!i) throw Error(z(90));
            pp(r), _u(r, i);
          }
        }
      }
      break;
    case "textarea":
      gp(t, n);
      break;
    case "select":
      (e = n.value), e != null && Vi(t, !!n.multiple, e, !1);
  }
};
Ep = pf;
Cp = hi;
var iy = { usingClientEntryPoint: !1, Events: [Ml, Di, is, xp, Sp, pf] },
  Co = {
    findFiberByHostInstance: qr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  oy = {
    bundleType: Co.bundleType,
    version: Co.version,
    rendererPackageName: Co.rendererPackageName,
    rendererConfig: Co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Pp(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Co.findFiberByHostInstance || ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zl.isDisabled && Zl.supportsFiber)
    try {
      (es = Zl.inject(oy)), (In = Zl);
    } catch {}
}
Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy;
Zt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xf(e)) throw Error(z(200));
  return ty(t, e, null, n);
};
Zt.createRoot = function (t, e) {
  if (!xf(t)) throw Error(z(299));
  var n = !1,
    r = "",
    i = l0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = yf(t, 1, !1, null, null, n, !1, r, i)),
    (t[rr] = e.current),
    al(t.nodeType === 8 ? t.parentNode : t),
    new wf(e)
  );
};
Zt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(z(188))
      : ((t = Object.keys(t).join(",")), Error(z(268, t)));
  return (t = Pp(e)), (t = t === null ? null : t.stateNode), t;
};
Zt.flushSync = function (t) {
  return hi(t);
};
Zt.hydrate = function (t, e, n) {
  if (!hs(e)) throw Error(z(200));
  return ps(null, t, e, !0, n);
};
Zt.hydrateRoot = function (t, e, n) {
  if (!xf(t)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = l0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (e = o0(e, null, t, 1, n ?? null, i, !1, o, l)),
    (t[rr] = e.current),
    al(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new ds(e);
};
Zt.render = function (t, e, n) {
  if (!hs(e)) throw Error(z(200));
  return ps(null, t, e, !1, n);
};
Zt.unmountComponentAtNode = function (t) {
  if (!hs(t)) throw Error(z(40));
  return t._reactRootContainer
    ? (hi(function () {
        ps(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[rr] = null);
        });
      }),
      !0)
    : !1;
};
Zt.unstable_batchedUpdates = pf;
Zt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!hs(n)) throw Error(z(200));
  if (t == null || t._reactInternals === void 0) throw Error(z(38));
  return ps(t, e, n, !1, r);
};
Zt.version = "18.2.0-next-9e3b772b8-20220608";
function a0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0);
    } catch (t) {
      console.error(t);
    }
}
a0(), (op.exports = Zt);
var Sf = op.exports;
const s0 = Qh(Sf),
  ly = Gh({ __proto__: null, default: s0 }, [Sf]);
var Jd = Sf;
(du.createRoot = Jd.createRoot), (du.hydrateRoot = Jd.hydrateRoot);
const ay = "/assets/Colorsbynilaa-EiwUNqbx.png",
  gl = ({ className: t, href: e, onClick: n, type: r, children: i }) => {
    const o = `flex justify-center 
    items-center h-11 rounded-lg border text-white px-4 ${t || ""}`;
    return e
      ? M.jsx("a", { href: e, className: o, children: i })
      : M.jsx("button", { className: o, type: r, onClick: n, children: i });
  },
  sy = ({ color: t = "currentColor", size: e = 24, className: n, ...r }) =>
    F.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        fill: t,
        ...r,
        className: "remixicon " + (n || ""),
      },
      F.createElement("path", {
        d: "M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z",
      })
    ),
  uy = ({ color: t = "currentColor", size: e = 24, className: n, ...r }) =>
    F.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        fill: t,
        ...r,
        className: "remixicon " + (n || ""),
      },
      F.createElement("path", {
        d: "M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z",
      })
    ),
  cy = ({ color: t = "currentColor", size: e = 24, className: n, ...r }) =>
    F.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        fill: t,
        ...r,
        className: "remixicon " + (n || ""),
      },
      F.createElement("path", {
        d: "M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z",
      })
    ),
  fy = ({ color: t = "currentColor", size: e = 24, className: n, ...r }) =>
    F.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        fill: t,
        ...r,
        className: "remixicon " + (n || ""),
      },
      F.createElement("path", {
        d: "M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z",
      })
    ),
  dy = ({ color: t = "currentColor", size: e = 24, className: n, ...r }) =>
    F.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        fill: t,
        ...r,
        className: "remixicon " + (n || ""),
      },
      F.createElement("path", {
        d: "M9 6C9 7.30622 8.16519 8.41746 7 8.82929V9C7 10.1046 7.89543 11 9 11H15C16.1046 11 17 10.1046 17 9V8.82929C15.8348 8.41746 15 7.30622 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.30622 20.1652 8.41746 19 8.82929V9C19 11.2091 17.2091 13 15 13H13V15.1707C14.1652 15.5825 15 16.6938 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.6938 9.83481 15.5825 11 15.1707V13H9C6.79086 13 5 11.2091 5 9V8.82929C3.83481 8.41746 3 7.30622 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z",
      })
    );
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    $e.apply(this, arguments)
  );
}
var Ge;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Ge || (Ge = {}));
const eh = "popstate";
function hy(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return vl(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : pi(i);
  }
  return my(e, n, null, t);
}
function ce(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function oo(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function py() {
  return Math.random().toString(36).substr(2, 8);
}
function th(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function vl(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    $e(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? ur(e) : e,
      { state: n, key: (e && e.key) || r || py() }
    )
  );
}
function pi(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function ur(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function my(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Ge.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), l.replaceState($e({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    a = Ge.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), s && s({ action: a, location: h.location, delta: m });
  }
  function d(w, m) {
    a = Ge.Push;
    let p = vl(h.location, w, m);
    n && n(p, w), (u = c() + 1);
    let v = th(p, u),
      S = h.createHref(p);
    try {
      l.pushState(v, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(S);
    }
    o && s && s({ action: a, location: h.location, delta: 1 });
  }
  function g(w, m) {
    a = Ge.Replace;
    let p = vl(h.location, w, m);
    n && n(p, w), (u = c());
    let v = th(p, u),
      S = h.createHref(p);
    l.replaceState(v, "", S),
      o && s && s({ action: a, location: h.location, delta: 0 });
  }
  function y(w) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : pi(w);
    return (
      (p = p.replace(/ $/, "%20")),
      ce(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let h = {
    get action() {
      return a;
    },
    get location() {
      return t(i, l);
    },
    listen(w) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(eh, f),
        (s = w),
        () => {
          i.removeEventListener(eh, f), (s = null);
        }
      );
    },
    createHref(w) {
      return e(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let m = y(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: g,
    go(w) {
      return l.go(w);
    },
  };
  return h;
}
var Ue;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Ue || (Ue = {}));
const gy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function vy(t) {
  return t.index === !0;
}
function oc(t, e, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    t.map((i, o) => {
      let l = [...n, o],
        a = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (ce(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ce(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        vy(i))
      ) {
        let s = $e({}, i, e(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = $e({}, i, e(i), { id: a, children: void 0 });
        return (
          (r[a] = s), i.children && (s.children = oc(i.children, e, l, r)), s
        );
      }
    })
  );
}
function bi(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? ur(e) : e,
    i = mo(r.pathname || "/", n);
  if (i == null) return null;
  let o = u0(t);
  _y(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let s = My(i);
    l = Ry(o[a], s);
  }
  return l;
}
function yy(t, e) {
  let { route: n, pathname: r, params: i } = t;
  return { id: n.id, pathname: r, params: i, data: e[n.id], handle: n.handle };
}
function u0(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (ce(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = tr([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (ce(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      u0(o.children, e, c, u)),
      !(o.path == null && !o.index) &&
        e.push({ path: u, score: Ty(u, o.index), routesMeta: c });
  };
  return (
    t.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of c0(o.path)) i(o, l, s);
    }),
    e
  );
}
function c0(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = c0(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (t.startsWith("/") && s === "" ? "/" : s))
  );
}
function _y(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Py(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const wy = /^:[\w-]+$/,
  xy = 3,
  Sy = 2,
  Ey = 1,
  Cy = 10,
  ky = -2,
  nh = (t) => t === "*";
function Ty(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(nh) && (r += ky),
    e && (r += Sy),
    n
      .filter((i) => !nh(i))
      .reduce((i, o) => i + (wy.test(o) ? xy : o === "" ? Ey : Cy), r)
  );
}
function Py(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Ry(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = Ny(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    o.push({
      params: r,
      pathname: tr([i, c.pathname]),
      pathnameBase: zy(tr([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = tr([i, c.pathnameBase]));
  }
  return o;
}
function Ny(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = Ly(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let h = a[f] || "";
        l = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[f];
      return (
        g && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: t,
  };
}
function Ly(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    oo(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function My(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      oo(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function mo(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function Dy(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? ur(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : Oy(n, e)) : e,
    search: Ay(r),
    hash: Fy(i),
  };
}
function Oy(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Qs(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function f0(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Ef(t, e) {
  let n = f0(t);
  return e
    ? n.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Cf(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = ur(t))
    : ((i = $e({}, t)),
      ce(
        !i.pathname || !i.pathname.includes("?"),
        Qs("?", "pathname", "search", i)
      ),
      ce(
        !i.pathname || !i.pathname.includes("#"),
        Qs("#", "pathname", "hash", i)
      ),
      ce(!i.search || !i.search.includes("#"), Qs("#", "search", "hash", i)));
  let o = t === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (l == null) a = n;
  else {
    let f = e.length - 1;
    if (!r && l.startsWith("..")) {
      let d = l.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? e[f] : "/";
  }
  let s = Dy(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const tr = (t) => t.join("/").replace(/\/\/+/g, "/"),
  zy = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ay = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Fy = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class kf {
  constructor(e, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = e),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function d0(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const h0 = ["post", "put", "patch", "delete"],
  Iy = new Set(h0),
  jy = ["get", ...h0],
  by = new Set(jy),
  Uy = new Set([301, 302, 303, 307, 308]),
  By = new Set([307, 308]),
  Ks = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  $y = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ko = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  p0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vy = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  m0 = "remix-router-transitions";
function Hy(t) {
  const e = t.window ? t.window : typeof window < "u" ? window : void 0,
    n =
      typeof e < "u" &&
      typeof e.document < "u" &&
      typeof e.document.createElement < "u",
    r = !n;
  ce(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (t.mapRouteProperties) i = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let k = t.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: k(P) });
  } else i = Vy;
  let o = {},
    l = oc(t.routes, i, void 0, o),
    a,
    s = t.basename || "/",
    u = $e(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      t.future
    ),
    c = null,
    f = new Set(),
    d = null,
    g = null,
    y = null,
    h = t.hydrationData != null,
    w = bi(l, t.history.location, s),
    m = null;
  if (w == null) {
    let k = on(404, { pathname: t.history.location.pathname }),
      { matches: P, route: N } = ch(l);
    (w = P), (m = { [N.id]: k });
  }
  let p,
    v = w.some((k) => k.route.lazy),
    S = w.some((k) => k.route.loader);
  if (v) p = !1;
  else if (!S) p = !0;
  else if (u.v7_partialHydration) {
    let k = t.hydrationData ? t.hydrationData.loaderData : null,
      P = t.hydrationData ? t.hydrationData.errors : null,
      N = (A) =>
        A.route.loader
          ? A.route.loader.hydrate === !0
            ? !1
            : (k && k[A.route.id] !== void 0) || (P && P[A.route.id] !== void 0)
          : !0;
    if (P) {
      let A = w.findIndex((W) => P[W.route.id] !== void 0);
      p = w.slice(0, A + 1).every(N);
    } else p = w.every(N);
  } else p = t.hydrationData != null;
  let E,
    _ = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: w,
      initialized: p,
      navigation: Ks,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = Ge.Pop,
    T = !1,
    R,
    O = !1,
    b = new Map(),
    K = null,
    Q = !1,
    X = !1,
    ae = [],
    ie = [],
    Z = new Map(),
    D = 0,
    $ = -1,
    j = new Map(),
    H = new Set(),
    U = new Map(),
    de = new Map(),
    G = new Set(),
    pe = new Map(),
    oe = new Map(),
    _t = !1;
  function en() {
    if (
      ((c = t.history.listen((k) => {
        let { action: P, location: N, delta: A } = k;
        if (_t) {
          _t = !1;
          return;
        }
        oo(
          oe.size === 0 || A != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let W = Ne({
          currentLocation: _.location,
          nextLocation: N,
          historyAction: P,
        });
        if (W && A != null) {
          (_t = !0),
            t.history.go(A * -1),
            q(W, {
              state: "blocked",
              location: N,
              proceed() {
                q(W, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  t.history.go(A);
              },
              reset() {
                let ne = new Map(_.blockers);
                ne.set(W, ko), Oe({ blockers: ne });
              },
            });
          return;
        }
        return we(P, N);
      })),
      n)
    ) {
      t_(e, b);
      let k = () => n_(e, b);
      e.addEventListener("pagehide", k),
        (K = () => e.removeEventListener("pagehide", k));
    }
    return _.initialized || we(Ge.Pop, _.location, { initialHydration: !0 }), E;
  }
  function Bn() {
    c && c(),
      K && K(),
      f.clear(),
      R && R.abort(),
      _.fetchers.forEach((k, P) => Vn(P)),
      _.blockers.forEach((k, P) => Wn(P));
  }
  function gn(k) {
    return f.add(k), () => f.delete(k);
  }
  function Oe(k, P) {
    P === void 0 && (P = {}), (_ = $e({}, _, k));
    let N = [],
      A = [];
    u.v7_fetcherPersist &&
      _.fetchers.forEach((W, ne) => {
        W.state === "idle" && (G.has(ne) ? A.push(ne) : N.push(ne));
      }),
      [...f].forEach((W) =>
        W(_, {
          deletedFetchers: A,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (N.forEach((W) => _.fetchers.delete(W)), A.forEach((W) => Vn(W)));
  }
  function Xe(k, P, N) {
    var A, W;
    let { flushSync: ne } = N === void 0 ? {} : N,
      ee =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        Cn(_.navigation.formMethod) &&
        _.navigation.state === "loading" &&
        ((A = k.state) == null ? void 0 : A._isRedirect) !== !0,
      J;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (J = P.actionData)
        : (J = null)
      : ee
      ? (J = _.actionData)
      : (J = null);
    let Y = P.loaderData
        ? uh(_.loaderData, P.loaderData, P.matches || [], P.errors)
        : _.loaderData,
      le = _.blockers;
    le.size > 0 && ((le = new Map(le)), le.forEach((_e, qe) => le.set(qe, ko)));
    let We =
      T === !0 ||
      (_.navigation.formMethod != null &&
        Cn(_.navigation.formMethod) &&
        ((W = k.state) == null ? void 0 : W._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      Q ||
        C === Ge.Pop ||
        (C === Ge.Push
          ? t.history.push(k, k.state)
          : C === Ge.Replace && t.history.replace(k, k.state));
    let te;
    if (C === Ge.Pop) {
      let _e = b.get(_.location.pathname);
      _e && _e.has(k.pathname)
        ? (te = { currentLocation: _.location, nextLocation: k })
        : b.has(k.pathname) &&
          (te = { currentLocation: k, nextLocation: _.location });
    } else if (O) {
      let _e = b.get(_.location.pathname);
      _e
        ? _e.add(k.pathname)
        : ((_e = new Set([k.pathname])), b.set(_.location.pathname, _e)),
        (te = { currentLocation: _.location, nextLocation: k });
    }
    Oe(
      $e({}, P, {
        actionData: J,
        loaderData: Y,
        historyAction: C,
        location: k,
        initialized: !0,
        navigation: Ks,
        revalidation: "idle",
        restoreScrollPosition: yn(k, P.matches || _.matches),
        preventScrollReset: We,
        blockers: le,
      }),
      { viewTransitionOpts: te, flushSync: ne === !0 }
    ),
      (C = Ge.Pop),
      (T = !1),
      (O = !1),
      (Q = !1),
      (X = !1),
      (ae = []),
      (ie = []);
  }
  async function cr(k, P) {
    if (typeof k == "number") {
      t.history.go(k);
      return;
    }
    let N = lc(
        _.location,
        _.matches,
        s,
        u.v7_prependBasename,
        k,
        u.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: A,
        submission: W,
        error: ne,
      } = rh(u.v7_normalizeFormMethod, !1, N, P),
      ee = _.location,
      J = vl(_.location, A, P && P.state);
    J = $e({}, J, t.history.encodeLocation(J));
    let Y = P && P.replace != null ? P.replace : void 0,
      le = Ge.Push;
    Y === !0
      ? (le = Ge.Replace)
      : Y === !1 ||
        (W != null &&
          Cn(W.formMethod) &&
          W.formAction === _.location.pathname + _.location.search &&
          (le = Ge.Replace));
    let We =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      te = (P && P.unstable_flushSync) === !0,
      _e = Ne({ currentLocation: ee, nextLocation: J, historyAction: le });
    if (_e) {
      q(_e, {
        state: "blocked",
        location: J,
        proceed() {
          q(_e, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: J,
          }),
            cr(k, P);
        },
        reset() {
          let qe = new Map(_.blockers);
          qe.set(_e, ko), Oe({ blockers: qe });
        },
      });
      return;
    }
    return await we(le, J, {
      submission: W,
      pendingError: ne,
      preventScrollReset: We,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: te,
    });
  }
  function Hr() {
    if (
      (st(),
      Oe({ revalidation: "loading" }),
      _.navigation.state !== "submitting")
    ) {
      if (_.navigation.state === "idle") {
        we(_.historyAction, _.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      we(C || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
      });
    }
  }
  async function we(k, P, N) {
    R && R.abort(),
      (R = null),
      (C = k),
      (Q = (N && N.startUninterruptedRevalidation) === !0),
      ke(_.location, _.matches),
      (T = (N && N.preventScrollReset) === !0),
      (O = (N && N.enableViewTransition) === !0);
    let A = a || l,
      W = N && N.overrideNavigation,
      ne = bi(A, P, s),
      ee = (N && N.flushSync) === !0;
    if (!ne) {
      let qe = on(404, { pathname: P.pathname }),
        { matches: ze, route: Ye } = ch(A);
      ve(),
        Xe(
          P,
          { matches: ze, loaderData: {}, errors: { [Ye.id]: qe } },
          { flushSync: ee }
        );
      return;
    }
    if (
      _.initialized &&
      !X &&
      Ky(_.location, P) &&
      !(N && N.submission && Cn(N.submission.formMethod))
    ) {
      Xe(P, { matches: ne }, { flushSync: ee });
      return;
    }
    R = new AbortController();
    let J = Po(t.history, P, R.signal, N && N.submission),
      Y,
      le;
    if (N && N.pendingError) le = { [Ko(ne).route.id]: N.pendingError };
    else if (N && N.submission && Cn(N.submission.formMethod)) {
      let qe = await Ut(J, P, N.submission, ne, {
        replace: N.replace,
        flushSync: ee,
      });
      if (qe.shortCircuited) return;
      (Y = qe.pendingActionData),
        (le = qe.pendingActionError),
        (W = Xs(P, N.submission)),
        (ee = !1),
        (J = new Request(J.url, { signal: J.signal }));
    }
    let {
      shortCircuited: We,
      loaderData: te,
      errors: _e,
    } = await fr(
      J,
      P,
      ne,
      W,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      ee,
      Y,
      le
    );
    We ||
      ((R = null),
      Xe(
        P,
        $e({ matches: ne }, Y ? { actionData: Y } : {}, {
          loaderData: te,
          errors: _e,
        })
      ));
  }
  async function Ut(k, P, N, A, W) {
    W === void 0 && (W = {}), st();
    let ne = Jy(P, N);
    Oe({ navigation: ne }, { flushSync: W.flushSync === !0 });
    let ee,
      J = sc(A, P);
    if (!J.route.action && !J.route.lazy)
      ee = {
        type: Ue.error,
        error: on(405, {
          method: k.method,
          pathname: P.pathname,
          routeId: J.route.id,
        }),
      };
    else if (
      ((ee = await To("action", k, J, A, o, i, s, u.v7_relativeSplatPath)),
      k.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ti(ee)) {
      let Y;
      return (
        W && W.replace != null
          ? (Y = W.replace)
          : (Y = ee.location === _.location.pathname + _.location.search),
        await tn(_, ee, { submission: N, replace: Y }),
        { shortCircuited: !0 }
      );
    }
    if (Ui(ee)) {
      let Y = Ko(A, J.route.id);
      return (
        (W && W.replace) !== !0 && (C = Ge.Push),
        {
          pendingActionData: {},
          pendingActionError: { [Y.route.id]: ee.error },
        }
      );
    }
    if (ei(ee)) throw on(400, { type: "defer-action" });
    return { pendingActionData: { [J.route.id]: ee.data } };
  }
  async function fr(k, P, N, A, W, ne, ee, J, Y, le, We) {
    let te = A || Xs(P, W),
      _e = W || ne || hh(te),
      qe = a || l,
      [ze, Ye] = ih(
        t.history,
        _,
        N,
        _e,
        P,
        u.v7_partialHydration && J === !0,
        X,
        ae,
        ie,
        G,
        U,
        H,
        qe,
        s,
        le,
        We
      );
    if (
      (ve(
        (re) =>
          !(N && N.some((se) => se.route.id === re)) ||
          (ze && ze.some((se) => se.route.id === re))
      ),
      ($ = ++D),
      ze.length === 0 && Ye.length === 0)
    ) {
      let re = vn();
      return (
        Xe(
          P,
          $e(
            { matches: N, loaderData: {}, errors: We || null },
            le ? { actionData: le } : {},
            re ? { fetchers: new Map(_.fetchers) } : {}
          ),
          { flushSync: Y }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Q && (!u.v7_partialHydration || !J)) {
      Ye.forEach((se) => {
        let Te = _.fetchers.get(se.key),
          et = Ro(void 0, Te ? Te.data : void 0);
        _.fetchers.set(se.key, et);
      });
      let re = le || _.actionData;
      Oe(
        $e(
          { navigation: te },
          re
            ? Object.keys(re).length === 0
              ? { actionData: null }
              : { actionData: re }
            : {},
          Ye.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
        ),
        { flushSync: Y }
      );
    }
    Ye.forEach((re) => {
      Z.has(re.key) && Rt(re.key),
        re.controller && Z.set(re.key, re.controller);
    });
    let Yn = () => Ye.forEach((re) => Rt(re.key));
    R && R.signal.addEventListener("abort", Yn);
    let {
      results: Ci,
      loaderResults: Gn,
      fetcherResults: Ln,
    } = await nn(_.matches, N, ze, Ye, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", Yn),
      Ye.forEach((re) => Z.delete(re.key));
    let x = fh(Ci);
    if (x) {
      if (x.idx >= ze.length) {
        let re = Ye[x.idx - ze.length].key;
        H.add(re);
      }
      return await tn(_, x.result, { replace: ee }), { shortCircuited: !0 };
    }
    let { loaderData: B, errors: I } = sh(_, N, ze, Gn, We, Ye, Ln, pe);
    pe.forEach((re, se) => {
      re.subscribe((Te) => {
        (Te || re.done) && pe.delete(se);
      });
    }),
      u.v7_partialHydration &&
        J &&
        _.errors &&
        Object.entries(_.errors)
          .filter((re) => {
            let [se] = re;
            return !ze.some((Te) => Te.route.id === se);
          })
          .forEach((re) => {
            let [se, Te] = re;
            I = Object.assign(I || {}, { [se]: Te });
          });
    let me = vn(),
      Le = He($),
      Se = me || Le || Ye.length > 0;
    return $e(
      { loaderData: B, errors: I },
      Se ? { fetchers: new Map(_.fetchers) } : {}
    );
  }
  function Ei(k, P, N, A) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Z.has(k) && Rt(k);
    let W = (A && A.unstable_flushSync) === !0,
      ne = a || l,
      ee = lc(
        _.location,
        _.matches,
        s,
        u.v7_prependBasename,
        N,
        u.v7_relativeSplatPath,
        P,
        A == null ? void 0 : A.relative
      ),
      J = bi(ne, ee, s);
    if (!J) {
      wt(k, P, on(404, { pathname: ee }), { flushSync: W });
      return;
    }
    let {
      path: Y,
      submission: le,
      error: We,
    } = rh(u.v7_normalizeFormMethod, !0, ee, A);
    if (We) {
      wt(k, P, We, { flushSync: W });
      return;
    }
    let te = sc(J, Y);
    if (((T = (A && A.preventScrollReset) === !0), le && Cn(le.formMethod))) {
      $n(k, P, Y, te, J, W, le);
      return;
    }
    U.set(k, { routeId: P, path: Y }), go(k, P, Y, te, J, W, le);
  }
  async function $n(k, P, N, A, W, ne, ee) {
    if ((st(), U.delete(k), !A.route.action && !A.route.lazy)) {
      let se = on(405, { method: ee.formMethod, pathname: N, routeId: P });
      wt(k, P, se, { flushSync: ne });
      return;
    }
    let J = _.fetchers.get(k);
    rt(k, e_(ee, J), { flushSync: ne });
    let Y = new AbortController(),
      le = Po(t.history, N, Y.signal, ee);
    Z.set(k, Y);
    let We = D,
      te = await To("action", le, A, W, o, i, s, u.v7_relativeSplatPath);
    if (le.signal.aborted) {
      Z.get(k) === Y && Z.delete(k);
      return;
    }
    if (u.v7_fetcherPersist && G.has(k)) {
      if (ti(te) || Ui(te)) {
        rt(k, mr(void 0));
        return;
      }
    } else {
      if (ti(te))
        if ((Z.delete(k), $ > We)) {
          rt(k, mr(void 0));
          return;
        } else
          return H.add(k), rt(k, Ro(ee)), tn(_, te, { fetcherSubmission: ee });
      if (Ui(te)) {
        wt(k, P, te.error);
        return;
      }
    }
    if (ei(te)) throw on(400, { type: "defer-action" });
    let _e = _.navigation.location || _.location,
      qe = Po(t.history, _e, Y.signal),
      ze = a || l,
      Ye =
        _.navigation.state !== "idle"
          ? bi(ze, _.navigation.location, s)
          : _.matches;
    ce(Ye, "Didn't find any matches after fetcher action");
    let Yn = ++D;
    j.set(k, Yn);
    let Ci = Ro(ee, te.data);
    _.fetchers.set(k, Ci);
    let [Gn, Ln] = ih(
      t.history,
      _,
      Ye,
      ee,
      _e,
      !1,
      X,
      ae,
      ie,
      G,
      U,
      H,
      ze,
      s,
      { [A.route.id]: te.data },
      void 0
    );
    Ln.filter((se) => se.key !== k).forEach((se) => {
      let Te = se.key,
        et = _.fetchers.get(Te),
        Al = Ro(void 0, et ? et.data : void 0);
      _.fetchers.set(Te, Al),
        Z.has(Te) && Rt(Te),
        se.controller && Z.set(Te, se.controller);
    }),
      Oe({ fetchers: new Map(_.fetchers) });
    let x = () => Ln.forEach((se) => Rt(se.key));
    Y.signal.addEventListener("abort", x);
    let {
      results: B,
      loaderResults: I,
      fetcherResults: me,
    } = await nn(_.matches, Ye, Gn, Ln, qe);
    if (Y.signal.aborted) return;
    Y.signal.removeEventListener("abort", x),
      j.delete(k),
      Z.delete(k),
      Ln.forEach((se) => Z.delete(se.key));
    let Le = fh(B);
    if (Le) {
      if (Le.idx >= Gn.length) {
        let se = Ln[Le.idx - Gn.length].key;
        H.add(se);
      }
      return tn(_, Le.result);
    }
    let { loaderData: Se, errors: re } = sh(
      _,
      _.matches,
      Gn,
      I,
      void 0,
      Ln,
      me,
      pe
    );
    if (_.fetchers.has(k)) {
      let se = mr(te.data);
      _.fetchers.set(k, se);
    }
    He(Yn),
      _.navigation.state === "loading" && Yn > $
        ? (ce(C, "Expected pending action"),
          R && R.abort(),
          Xe(_.navigation.location, {
            matches: Ye,
            loaderData: Se,
            errors: re,
            fetchers: new Map(_.fetchers),
          }))
        : (Oe({
            errors: re,
            loaderData: uh(_.loaderData, Se, Ye, re),
            fetchers: new Map(_.fetchers),
          }),
          (X = !1));
  }
  async function go(k, P, N, A, W, ne, ee) {
    let J = _.fetchers.get(k);
    rt(k, Ro(ee, J ? J.data : void 0), { flushSync: ne });
    let Y = new AbortController(),
      le = Po(t.history, N, Y.signal);
    Z.set(k, Y);
    let We = D,
      te = await To("loader", le, A, W, o, i, s, u.v7_relativeSplatPath);
    if (
      (ei(te) && (te = (await y0(te, le.signal, !0)) || te),
      Z.get(k) === Y && Z.delete(k),
      !le.signal.aborted)
    ) {
      if (G.has(k)) {
        rt(k, mr(void 0));
        return;
      }
      if (ti(te))
        if ($ > We) {
          rt(k, mr(void 0));
          return;
        } else {
          H.add(k), await tn(_, te);
          return;
        }
      if (Ui(te)) {
        wt(k, P, te.error);
        return;
      }
      ce(!ei(te), "Unhandled fetcher deferred data"), rt(k, mr(te.data));
    }
  }
  async function tn(k, P, N) {
    let {
      submission: A,
      fetcherSubmission: W,
      replace: ne,
    } = N === void 0 ? {} : N;
    P.revalidate && (X = !0);
    let ee = vl(k.location, P.location, { _isRedirect: !0 });
    if ((ce(ee, "Expected a location on the redirect navigation"), n)) {
      let _e = !1;
      if (P.reloadDocument) _e = !0;
      else if (p0.test(P.location)) {
        const qe = t.history.createURL(P.location);
        _e = qe.origin !== e.location.origin || mo(qe.pathname, s) == null;
      }
      if (_e) {
        ne ? e.location.replace(P.location) : e.location.assign(P.location);
        return;
      }
    }
    R = null;
    let J = ne === !0 ? Ge.Replace : Ge.Push,
      { formMethod: Y, formAction: le, formEncType: We } = k.navigation;
    !A && !W && Y && le && We && (A = hh(k.navigation));
    let te = A || W;
    if (By.has(P.status) && te && Cn(te.formMethod))
      await we(J, ee, {
        submission: $e({}, te, { formAction: P.location }),
        preventScrollReset: T,
      });
    else {
      let _e = Xs(ee, A);
      await we(J, ee, {
        overrideNavigation: _e,
        fetcherSubmission: W,
        preventScrollReset: T,
      });
    }
  }
  async function nn(k, P, N, A, W) {
    let ne = await Promise.all([
        ...N.map((Y) => To("loader", W, Y, P, o, i, s, u.v7_relativeSplatPath)),
        ...A.map((Y) =>
          Y.matches && Y.match && Y.controller
            ? To(
                "loader",
                Po(t.history, Y.path, Y.controller.signal),
                Y.match,
                Y.matches,
                o,
                i,
                s,
                u.v7_relativeSplatPath
              )
            : { type: Ue.error, error: on(404, { pathname: Y.path }) }
        ),
      ]),
      ee = ne.slice(0, N.length),
      J = ne.slice(N.length);
    return (
      await Promise.all([
        dh(
          k,
          N,
          ee,
          ee.map(() => W.signal),
          !1,
          _.loaderData
        ),
        dh(
          k,
          A.map((Y) => Y.match),
          J,
          A.map((Y) => (Y.controller ? Y.controller.signal : null)),
          !0
        ),
      ]),
      { results: ne, loaderResults: ee, fetcherResults: J }
    );
  }
  function st() {
    (X = !0),
      ae.push(...ve()),
      U.forEach((k, P) => {
        Z.has(P) && (ie.push(P), Rt(P));
      });
  }
  function rt(k, P, N) {
    N === void 0 && (N = {}),
      _.fetchers.set(k, P),
      Oe(
        { fetchers: new Map(_.fetchers) },
        { flushSync: (N && N.flushSync) === !0 }
      );
  }
  function wt(k, P, N, A) {
    A === void 0 && (A = {});
    let W = Ko(_.matches, P);
    Vn(k),
      Oe(
        { errors: { [W.route.id]: N }, fetchers: new Map(_.fetchers) },
        { flushSync: (A && A.flushSync) === !0 }
      );
  }
  function dr(k) {
    return (
      u.v7_fetcherPersist &&
        (de.set(k, (de.get(k) || 0) + 1), G.has(k) && G.delete(k)),
      _.fetchers.get(k) || $y
    );
  }
  function Vn(k) {
    let P = _.fetchers.get(k);
    Z.has(k) && !(P && P.state === "loading" && j.has(k)) && Rt(k),
      U.delete(k),
      j.delete(k),
      H.delete(k),
      G.delete(k),
      _.fetchers.delete(k);
  }
  function hr(k) {
    if (u.v7_fetcherPersist) {
      let P = (de.get(k) || 0) - 1;
      P <= 0 ? (de.delete(k), G.add(k)) : de.set(k, P);
    } else Vn(k);
    Oe({ fetchers: new Map(_.fetchers) });
  }
  function Rt(k) {
    let P = Z.get(k);
    ce(P, "Expected fetch controller: " + k), P.abort(), Z.delete(k);
  }
  function Hn(k) {
    for (let P of k) {
      let N = dr(P),
        A = mr(N.data);
      _.fetchers.set(P, A);
    }
  }
  function vn() {
    let k = [],
      P = !1;
    for (let N of H) {
      let A = _.fetchers.get(N);
      ce(A, "Expected fetcher: " + N),
        A.state === "loading" && (H.delete(N), k.push(N), (P = !0));
    }
    return Hn(k), P;
  }
  function He(k) {
    let P = [];
    for (let [N, A] of j)
      if (A < k) {
        let W = _.fetchers.get(N);
        ce(W, "Expected fetcher: " + N),
          W.state === "loading" && (Rt(N), j.delete(N), P.push(N));
      }
    return Hn(P), P.length > 0;
  }
  function Nn(k, P) {
    let N = _.blockers.get(k) || ko;
    return oe.get(k) !== P && oe.set(k, P), N;
  }
  function Wn(k) {
    _.blockers.delete(k), oe.delete(k);
  }
  function q(k, P) {
    let N = _.blockers.get(k) || ko;
    ce(
      (N.state === "unblocked" && P.state === "blocked") ||
        (N.state === "blocked" && P.state === "blocked") ||
        (N.state === "blocked" && P.state === "proceeding") ||
        (N.state === "blocked" && P.state === "unblocked") ||
        (N.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + N.state + " -> " + P.state
    );
    let A = new Map(_.blockers);
    A.set(k, P), Oe({ blockers: A });
  }
  function Ne(k) {
    let { currentLocation: P, nextLocation: N, historyAction: A } = k;
    if (oe.size === 0) return;
    oe.size > 1 && oo(!1, "A router only supports one blocker at a time");
    let W = Array.from(oe.entries()),
      [ne, ee] = W[W.length - 1],
      J = _.blockers.get(ne);
    if (
      !(J && J.state === "proceeding") &&
      ee({ currentLocation: P, nextLocation: N, historyAction: A })
    )
      return ne;
  }
  function ve(k) {
    let P = [];
    return (
      pe.forEach((N, A) => {
        (!k || k(A)) && (N.cancel(), P.push(A), pe.delete(A));
      }),
      P
    );
  }
  function Nt(k, P, N) {
    if (((d = k), (y = P), (g = N || null), !h && _.navigation === Ks)) {
      h = !0;
      let A = yn(_.location, _.matches);
      A != null && Oe({ restoreScrollPosition: A });
    }
    return () => {
      (d = null), (y = null), (g = null);
    };
  }
  function xt(k, P) {
    return (
      (g &&
        g(
          k,
          P.map((A) => yy(A, _.loaderData))
        )) ||
      k.key
    );
  }
  function ke(k, P) {
    if (d && y) {
      let N = xt(k, P);
      d[N] = y();
    }
  }
  function yn(k, P) {
    if (d) {
      let N = xt(k, P),
        A = d[N];
      if (typeof A == "number") return A;
    }
    return null;
  }
  function xs(k) {
    (o = {}), (a = oc(k, i, void 0, o));
  }
  return (
    (E = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return _;
      },
      get routes() {
        return l;
      },
      get window() {
        return e;
      },
      initialize: en,
      subscribe: gn,
      enableScrollRestoration: Nt,
      navigate: cr,
      fetch: Ei,
      revalidate: Hr,
      createHref: (k) => t.history.createHref(k),
      encodeLocation: (k) => t.history.encodeLocation(k),
      getFetcher: dr,
      deleteFetcher: hr,
      dispose: Bn,
      getBlocker: Nn,
      deleteBlocker: Wn,
      _internalFetchControllers: Z,
      _internalActiveDeferreds: pe,
      _internalSetRoutes: xs,
    }),
    E
  );
}
function Wy(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function lc(t, e, n, r, i, o, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let f of e)
      if ((s.push(f), f.route.id === l)) {
        u = f;
        break;
      }
  } else (s = e), (u = e[e.length - 1]);
  let c = Cf(i || ".", Ef(s, o), mo(t.pathname, n) || t.pathname, a === "path");
  return (
    i == null && ((c.search = t.search), (c.hash = t.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Tf(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : tr([n, c.pathname])),
    pi(c)
  );
}
function rh(t, e, n, r) {
  if (!r || !Wy(r)) return { path: n };
  if (r.formMethod && !Zy(r.formMethod))
    return { path: n, error: on(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: on(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = t ? o.toUpperCase() : o.toLowerCase(),
    a = v0(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Cn(l)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, y) => {
              let [h, w] = y;
              return (
                "" +
                g +
                h +
                "=" +
                w +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Cn(l)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ce(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = ac(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = ac(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = ah(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = ah(s));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Cn(c.formMethod)) return { path: n, submission: c };
  let f = ur(n);
  return (
    e && f.search && Tf(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: pi(f), submission: c }
  );
}
function Yy(t, e) {
  let n = t;
  if (e) {
    let r = t.findIndex((i) => i.route.id === e);
    r >= 0 && (n = t.slice(0, r));
  }
  return n;
}
function ih(t, e, n, r, i, o, l, a, s, u, c, f, d, g, y, h) {
  let w = h ? Object.values(h)[0] : y ? Object.values(y)[0] : void 0,
    m = t.createURL(e.location),
    p = t.createURL(i),
    v = h ? Object.keys(h)[0] : void 0,
    E = Yy(n, v).filter((C, T) => {
      let { route: R } = C;
      if (R.lazy) return !0;
      if (R.loader == null) return !1;
      if (o)
        return R.loader.hydrate
          ? !0
          : e.loaderData[R.id] === void 0 &&
              (!e.errors || e.errors[R.id] === void 0);
      if (Gy(e.loaderData, e.matches[T], C) || a.some((K) => K === C.route.id))
        return !0;
      let O = e.matches[T],
        b = C;
      return oh(
        C,
        $e(
          {
            currentUrl: m,
            currentParams: O.params,
            nextUrl: p,
            nextParams: b.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              l ||
              m.pathname + m.search === p.pathname + p.search ||
              m.search !== p.search ||
              g0(O, b),
          }
        )
      );
    }),
    _ = [];
  return (
    c.forEach((C, T) => {
      if (o || !n.some((Q) => Q.route.id === C.routeId) || u.has(T)) return;
      let R = bi(d, C.path, g);
      if (!R) {
        _.push({
          key: T,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let O = e.fetchers.get(T),
        b = sc(R, C.path),
        K = !1;
      f.has(T)
        ? (K = !1)
        : s.includes(T)
        ? (K = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (K = l)
        : (K = oh(
            b,
            $e(
              {
                currentUrl: m,
                currentParams: e.matches[e.matches.length - 1].params,
                nextUrl: p,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: l }
            )
          )),
        K &&
          _.push({
            key: T,
            routeId: C.routeId,
            path: C.path,
            matches: R,
            match: b,
            controller: new AbortController(),
          });
    }),
    [E, _]
  );
}
function Gy(t, e, n) {
  let r = !e || n.route.id !== e.route.id,
    i = t[n.route.id] === void 0;
  return r || i;
}
function g0(t, e) {
  let n = t.route.path;
  return (
    t.pathname !== e.pathname ||
    (n != null && n.endsWith("*") && t.params["*"] !== e.params["*"])
  );
}
function oh(t, e) {
  if (t.route.shouldRevalidate) {
    let n = t.route.shouldRevalidate(e);
    if (typeof n == "boolean") return n;
  }
  return e.defaultShouldRevalidate;
}
async function lh(t, e, n) {
  if (!t.lazy) return;
  let r = await t.lazy();
  if (!t.lazy) return;
  let i = n[t.id];
  ce(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    oo(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !gy.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, $e({}, e(i), { lazy: void 0 }));
}
async function To(t, e, n, r, i, o, l, a, s) {
  s === void 0 && (s = {});
  let u,
    c,
    f,
    d = (h) => {
      let w,
        m = new Promise((p, v) => (w = v));
      return (
        (f = () => w()),
        e.signal.addEventListener("abort", f),
        Promise.race([
          h({ request: e, params: n.params, context: s.requestContext }),
          m,
        ])
      );
    };
  try {
    let h = n.route[t];
    if (n.route.lazy)
      if (h) {
        let w,
          m = await Promise.all([
            d(h).catch((p) => {
              w = p;
            }),
            lh(n.route, o, i),
          ]);
        if (w) throw w;
        c = m[0];
      } else if ((await lh(n.route, o, i), (h = n.route[t]), h)) c = await d(h);
      else if (t === "action") {
        let w = new URL(e.url),
          m = w.pathname + w.search;
        throw on(405, { method: e.method, pathname: m, routeId: n.route.id });
      } else return { type: Ue.data, data: void 0 };
    else if (h) c = await d(h);
    else {
      let w = new URL(e.url),
        m = w.pathname + w.search;
      throw on(404, { pathname: m });
    }
    ce(
      c !== void 0,
      "You defined " +
        (t === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          t +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (h) {
    (u = Ue.error), (c = h);
  } finally {
    f && e.signal.removeEventListener("abort", f);
  }
  if (qy(c)) {
    let h = c.status;
    if (Uy.has(h)) {
      let m = c.headers.get("Location");
      if (
        (ce(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !p0.test(m))
      )
        m = lc(new URL(e.url), r.slice(0, r.indexOf(n) + 1), l, !0, m, a);
      else if (!s.isStaticRequest) {
        let p = new URL(e.url),
          v = m.startsWith("//") ? new URL(p.protocol + m) : new URL(m),
          S = mo(v.pathname, l) != null;
        v.origin === p.origin && S && (m = v.pathname + v.search + v.hash);
      }
      if (s.isStaticRequest) throw (c.headers.set("Location", m), c);
      return {
        type: Ue.redirect,
        status: h,
        location: m,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest)
      throw { type: u === Ue.error ? Ue.error : Ue.data, response: c };
    let w;
    try {
      let m = c.headers.get("Content-Type");
      m && /\bapplication\/json\b/.test(m)
        ? c.body == null
          ? (w = null)
          : (w = await c.json())
        : (w = await c.text());
    } catch (m) {
      return { type: Ue.error, error: m };
    }
    return u === Ue.error
      ? { type: u, error: new kf(h, c.statusText, w), headers: c.headers }
      : { type: Ue.data, data: w, statusCode: c.status, headers: c.headers };
  }
  if (u === Ue.error) return { type: u, error: c };
  if (Xy(c)) {
    var g, y;
    return {
      type: Ue.deferred,
      deferredData: c,
      statusCode: (g = c.init) == null ? void 0 : g.status,
      headers:
        ((y = c.init) == null ? void 0 : y.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Ue.data, data: c };
}
function Po(t, e, n, r) {
  let i = t.createURL(v0(e)).toString(),
    o = { signal: n };
  if (r && Cn(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = ac(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function ac(t) {
  let e = new URLSearchParams();
  for (let [n, r] of t.entries())
    e.append(n, typeof r == "string" ? r : r.name);
  return e;
}
function ah(t) {
  let e = new FormData();
  for (let [n, r] of t.entries()) e.append(n, r);
  return e;
}
function Qy(t, e, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = e[f].route.id;
      if (
        (ce(!ti(c), "Cannot handle redirect results in processLoaderData"),
        Ui(c))
      ) {
        let g = Ko(t, d),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[g.route.id] == null && (l[g.route.id] = y),
          (o[d] = void 0),
          s || ((s = !0), (a = d0(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        ei(c)
          ? (i.set(d, c.deferredData), (o[d] = c.deferredData.data))
          : (o[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (a = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function sh(t, e, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = Qy(e, n, r, i, a);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: d, controller: g } = o[c];
    ce(
      l !== void 0 && l[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = l[c];
    if (!(g && g.signal.aborted))
      if (Ui(y)) {
        let h = Ko(t.matches, d == null ? void 0 : d.route.id);
        (u && u[h.route.id]) || (u = $e({}, u, { [h.route.id]: y.error })),
          t.fetchers.delete(f);
      } else if (ti(y)) ce(!1, "Unhandled fetcher revalidation redirect");
      else if (ei(y)) ce(!1, "Unhandled fetcher deferred data");
      else {
        let h = mr(y.data);
        t.fetchers.set(f, h);
      }
  }
  return { loaderData: s, errors: u };
}
function uh(t, e, n, r) {
  let i = $e({}, e);
  for (let o of n) {
    let l = o.route.id;
    if (
      (e.hasOwnProperty(l)
        ? e[l] !== void 0 && (i[l] = e[l])
        : t[l] !== void 0 && o.route.loader && (i[l] = t[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function Ko(t, e) {
  return (
    (e ? t.slice(0, t.findIndex((r) => r.route.id === e) + 1) : [...t])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || t[0]
  );
}
function ch(t) {
  let e =
    t.length === 1
      ? t[0]
      : t.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
    route: e,
  };
}
function on(t, e) {
  let { pathname: n, routeId: r, method: i, type: o } = e === void 0 ? {} : e,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((l = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : t === 403
      ? ((l = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : t === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : t === 405 &&
        ((l = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new kf(t || 500, l, new Error(a), !0)
  );
}
function fh(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (ti(n)) return { result: n, idx: e };
  }
}
function v0(t) {
  let e = typeof t == "string" ? ur(t) : t;
  return pi($e({}, e, { hash: "" }));
}
function Ky(t, e) {
  return t.pathname !== e.pathname || t.search !== e.search
    ? !1
    : t.hash === ""
    ? e.hash !== ""
    : t.hash === e.hash
    ? !0
    : e.hash !== "";
}
function ei(t) {
  return t.type === Ue.deferred;
}
function Ui(t) {
  return t.type === Ue.error;
}
function ti(t) {
  return (t && t.type) === Ue.redirect;
}
function Xy(t) {
  let e = t;
  return (
    e &&
    typeof e == "object" &&
    typeof e.data == "object" &&
    typeof e.subscribe == "function" &&
    typeof e.cancel == "function" &&
    typeof e.resolveData == "function"
  );
}
function qy(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body < "u"
  );
}
function Zy(t) {
  return by.has(t.toLowerCase());
}
function Cn(t) {
  return Iy.has(t.toLowerCase());
}
async function dh(t, e, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = e[l];
    if (!s) continue;
    let u = t.find((f) => f.route.id === s.route.id),
      c = u != null && !g0(u, s) && (o && o[s.route.id]) !== void 0;
    if (ei(a) && (i || c)) {
      let f = r[l];
      ce(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await y0(a, f, i).then((d) => {
          d && (n[l] = d || n[l]);
        });
    }
  }
}
async function y0(t, e, n) {
  if ((n === void 0 && (n = !1), !(await t.deferredData.resolveData(e)))) {
    if (n)
      try {
        return { type: Ue.data, data: t.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ue.error, error: i };
      }
    return { type: Ue.data, data: t.deferredData.data };
  }
}
function Tf(t) {
  return new URLSearchParams(t).getAll("index").some((e) => e === "");
}
function sc(t, e) {
  let n = typeof e == "string" ? ur(e).search : e.search;
  if (t[t.length - 1].route.index && Tf(n || "")) return t[t.length - 1];
  let r = f0(t);
  return r[r.length - 1];
}
function hh(t) {
  let {
    formMethod: e,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = t;
  if (!(!e || !n || !r)) {
    if (i != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Xs(t, e) {
  return e
    ? {
        state: "loading",
        location: t,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Jy(t, e) {
  return {
    state: "submitting",
    location: t,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
  };
}
function Ro(t, e) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: e,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
      };
}
function e_(t, e) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: e ? e.data : void 0,
  };
}
function mr(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function t_(t, e) {
  try {
    let n = t.sessionStorage.getItem(m0);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && e.set(i, new Set(o || []));
    }
  } catch {}
}
function n_(t, e) {
  if (e.size > 0) {
    let n = {};
    for (let [r, i] of e) n[r] = [...i];
    try {
      t.sessionStorage.setItem(m0, JSON.stringify(n));
    } catch (r) {
      oo(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    yl.apply(this, arguments)
  );
}
const ms = L.createContext(null),
  _0 = L.createContext(null),
  xi = L.createContext(null),
  gs = L.createContext(null),
  $r = L.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  w0 = L.createContext(null);
function r_(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  Ol() || ce(!1);
  let { basename: r, navigator: i } = L.useContext(xi),
    { hash: o, pathname: l, search: a } = S0(t, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : tr([r, l])),
    i.createHref({ pathname: s, search: a, hash: o })
  );
}
function Ol() {
  return L.useContext(gs) != null;
}
function vs() {
  return Ol() || ce(!1), L.useContext(gs).location;
}
function x0(t) {
  L.useContext(xi).static || L.useLayoutEffect(t);
}
function i_() {
  let { isDataRoute: t } = L.useContext($r);
  return t ? y_() : o_();
}
function o_() {
  Ol() || ce(!1);
  let t = L.useContext(ms),
    { basename: e, future: n, navigator: r } = L.useContext(xi),
    { matches: i } = L.useContext($r),
    { pathname: o } = vs(),
    l = JSON.stringify(Ef(i, n.v7_relativeSplatPath)),
    a = L.useRef(!1);
  return (
    x0(() => {
      a.current = !0;
    }),
    L.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Cf(u, JSON.parse(l), o, c.relative === "path");
        t == null &&
          e !== "/" &&
          (f.pathname = f.pathname === "/" ? e : tr([e, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [e, r, l, o, t]
    )
  );
}
const l_ = L.createContext(null);
function a_(t) {
  let e = L.useContext($r).outlet;
  return e && L.createElement(l_.Provider, { value: t }, e);
}
function S0(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = L.useContext(xi),
    { matches: i } = L.useContext($r),
    { pathname: o } = vs(),
    l = JSON.stringify(Ef(i, r.v7_relativeSplatPath));
  return L.useMemo(() => Cf(t, JSON.parse(l), o, n === "path"), [t, l, o, n]);
}
function s_(t, e, n, r) {
  Ol() || ce(!1);
  let { navigator: i } = L.useContext(xi),
    { matches: o } = L.useContext($r),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = vs(),
    c;
  if (e) {
    var f;
    let w = typeof e == "string" ? ur(e) : e;
    s === "/" || ((f = w.pathname) != null && f.startsWith(s)) || ce(!1),
      (c = w);
  } else c = u;
  let d = c.pathname || "/",
    g = d;
  if (s !== "/") {
    let w = s.replace(/^\//, "").split("/");
    g = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = bi(t, { pathname: g }),
    h = h_(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: tr([
              s,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? s
                : tr([
                    s,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return e && h
    ? L.createElement(
        gs.Provider,
        {
          value: {
            location: yl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Ge.Pop,
          },
        },
        h
      )
    : h;
}
function u_() {
  let t = v_(),
    e = d0(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("h2", null, "Unexpected Application Error!"),
    L.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? L.createElement("pre", { style: i }, n) : null,
    null
  );
}
const c_ = L.createElement(u_, null);
class f_ extends L.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? L.createElement(
          $r.Provider,
          { value: this.props.routeContext },
          L.createElement(w0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function d_(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = L.useContext(ms);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    L.createElement($r.Provider, { value: e }, r)
  );
}
function h_(t, e, n, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) t = n.matches;
    else return null;
  }
  let l = t,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = l.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id])
    );
    c >= 0 || ce(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, f, d) => {
    let g,
      y = !1,
      h = null,
      w = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (h = f.route.errorElement || c_),
      s &&
        (u < 0 && d === 0
          ? (__("route-fallback", !1), (y = !0), (w = null))
          : u === d &&
            ((y = !0), (w = f.route.hydrateFallbackElement || null))));
    let m = e.concat(l.slice(0, d + 1)),
      p = () => {
        let v;
        return (
          g
            ? (v = h)
            : y
            ? (v = w)
            : f.route.Component
            ? (v = L.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = c),
          L.createElement(d_, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? L.createElement(f_, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var E0 = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(E0 || {}),
  Wa = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Wa || {});
function p_(t) {
  let e = L.useContext(ms);
  return e || ce(!1), e;
}
function m_(t) {
  let e = L.useContext(_0);
  return e || ce(!1), e;
}
function g_(t) {
  let e = L.useContext($r);
  return e || ce(!1), e;
}
function C0(t) {
  let e = g_(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function v_() {
  var t;
  let e = L.useContext(w0),
    n = m_(Wa.UseRouteError),
    r = C0(Wa.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function y_() {
  let { router: t } = p_(E0.UseNavigateStable),
    e = C0(Wa.UseNavigateStable),
    n = L.useRef(!1);
  return (
    x0(() => {
      n.current = !0;
    }),
    L.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, yl({ fromRouteId: e }, o)));
      },
      [t, e]
    )
  );
}
const ph = {};
function __(t, e, n) {
  !e && !ph[t] && (ph[t] = !0);
}
function w_(t) {
  return a_(t.context);
}
function x_(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = Ge.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = t;
  Ol() && ce(!1);
  let s = e.replace(/^\/*/, "/"),
    u = L.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: yl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, l]
    );
  typeof r == "string" && (r = ur(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: g = null,
      key: y = "default",
    } = r,
    h = L.useMemo(() => {
      let w = mo(c, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: d, state: g, key: y },
            navigationType: i,
          };
    }, [s, c, f, d, g, y, i]);
  return h == null
    ? null
    : L.createElement(
        xi.Provider,
        { value: u },
        L.createElement(gs.Provider, { children: n, value: h })
      );
}
new Promise(() => {});
function S_(t) {
  let e = {
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      Object.assign(e, {
        element: L.createElement(t.Component),
        Component: void 0,
      }),
    t.HydrateFallback &&
      Object.assign(e, {
        hydrateFallbackElement: L.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
    t.ErrorBoundary &&
      Object.assign(e, {
        errorElement: L.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    e
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _l() {
  return (
    (_l = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    _l.apply(this, arguments)
  );
}
function E_(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function C_(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function k_(t, e) {
  return t.button === 0 && (!e || e === "_self") && !C_(t);
}
const T_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  P_ = "6";
try {
  window.__reactRouterVersion = P_;
} catch {}
function R_(t, e) {
  return Hy({
    basename: e == null ? void 0 : e.basename,
    future: _l({}, e == null ? void 0 : e.future, { v7_prependBasename: !0 }),
    history: hy({ window: e == null ? void 0 : e.window }),
    hydrationData: (e == null ? void 0 : e.hydrationData) || N_(),
    routes: t,
    mapRouteProperties: S_,
    window: e == null ? void 0 : e.window,
  }).initialize();
}
function N_() {
  var t;
  let e = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return e && e.errors && (e = _l({}, e, { errors: L_(e.errors) })), e;
}
function L_(t) {
  if (!t) return null;
  let e = Object.entries(t),
    n = {};
  for (let [r, i] of e)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new kf(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const M_ = L.createContext({ isTransitioning: !1 }),
  D_ = L.createContext(new Map()),
  O_ = "startTransition",
  mh = Xg[O_],
  z_ = "flushSync",
  gh = ly[z_];
function A_(t) {
  mh ? mh(t) : t();
}
function No(t) {
  gh ? gh(t) : t();
}
class F_ {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), e(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function I_(t) {
  let { fallbackElement: e, router: n, future: r } = t,
    [i, o] = L.useState(n.state),
    [l, a] = L.useState(),
    [s, u] = L.useState({ isTransitioning: !1 }),
    [c, f] = L.useState(),
    [d, g] = L.useState(),
    [y, h] = L.useState(),
    w = L.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = L.useCallback(
      (C) => {
        m ? A_(C) : C();
      },
      [m]
    ),
    v = L.useCallback(
      (C, T) => {
        let {
          deletedFetchers: R,
          unstable_flushSync: O,
          unstable_viewTransitionOpts: b,
        } = T;
        R.forEach((Q) => w.current.delete(Q)),
          C.fetchers.forEach((Q, X) => {
            Q.data !== void 0 && w.current.set(X, Q.data);
          });
        let K =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!b || K) {
          O ? No(() => o(C)) : p(() => o(C));
          return;
        }
        if (O) {
          No(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: b.currentLocation,
                nextLocation: b.nextLocation,
              });
          });
          let Q = n.window.document.startViewTransition(() => {
            No(() => o(C));
          });
          Q.finished.finally(() => {
            No(() => {
              f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            No(() => g(Q));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            h({
              state: C,
              currentLocation: b.currentLocation,
              nextLocation: b.nextLocation,
            }))
          : (a(C),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: b.currentLocation,
              nextLocation: b.nextLocation,
            }));
      },
      [n.window, d, c, w, p]
    );
  L.useLayoutEffect(() => n.subscribe(v), [n, v]),
    L.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new F_());
    }, [s]),
    L.useEffect(() => {
      if (c && l && n.window) {
        let C = l,
          T = c.promise,
          R = n.window.document.startViewTransition(async () => {
            p(() => o(C)), await T;
          });
        R.finished.finally(() => {
          f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(R);
      }
    }, [p, l, c, n.window]),
    L.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, d, i.location, l]),
    L.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (a(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        h(void 0));
    }, [s.isTransitioning, y]),
    L.useEffect(() => {}, []);
  let S = L.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, T, R) =>
          n.navigate(C, {
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
        replace: (C, T, R) =>
          n.navigate(C, {
            replace: !0,
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || "/",
    _ = L.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: E }),
      [n, S, E]
    );
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(
      ms.Provider,
      { value: _ },
      L.createElement(
        _0.Provider,
        { value: i },
        L.createElement(
          D_.Provider,
          { value: w.current },
          L.createElement(
            M_.Provider,
            { value: s },
            L.createElement(
              x_,
              {
                basename: E,
                location: i.location,
                navigationType: i.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? L.createElement(j_, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : e
            )
          )
        )
      )
    ),
    null
  );
}
function j_(t) {
  let { routes: e, future: n, state: r } = t;
  return s_(e, void 0, r, n);
}
const b_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  U_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wl = L.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = e,
      d = E_(e, T_),
      { basename: g } = L.useContext(xi),
      y,
      h = !1;
    if (typeof u == "string" && U_.test(u) && ((y = u), b_))
      try {
        let v = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          E = mo(S.pathname, g);
        S.origin === v.origin && E != null
          ? (u = E + S.search + S.hash)
          : (h = !0);
      } catch {}
    let w = r_(u, { relative: i }),
      m = B_(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return L.createElement(
      "a",
      _l({}, d, { href: y || w, onClick: h || o ? r : p, ref: n, target: s })
    );
  });
var vh;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(vh || (vh = {}));
var yh;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(yh || (yh = {}));
function B_(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    s = i_(),
    u = vs(),
    c = S0(t, { relative: l });
  return L.useCallback(
    (f) => {
      if (k_(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : pi(u) === pi(c);
        s(t, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, c, r, i, n, t, o, l, a]
  );
}
function Kn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function k0(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  lo = { duration: 0.5, overwrite: !1, delay: 0 },
  Pf,
  gt,
  De,
  un = 1e8,
  Ee = 1 / un,
  uc = Math.PI * 2,
  $_ = uc / 4,
  V_ = 0,
  T0 = Math.sqrt,
  H_ = Math.cos,
  W_ = Math.sin,
  at = function (e) {
    return typeof e == "string";
  },
  Ve = function (e) {
    return typeof e == "function";
  },
  lr = function (e) {
    return typeof e == "number";
  },
  Rf = function (e) {
    return typeof e > "u";
  },
  Un = function (e) {
    return typeof e == "object";
  },
  At = function (e) {
    return e !== !1;
  },
  Nf = function () {
    return typeof window < "u";
  },
  Jl = function (e) {
    return Ve(e) || at(e);
  },
  P0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  vt = Array.isArray,
  cc = /(?:-?\.?\d|\.)+/gi,
  R0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Bi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  qs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  N0 = /[+-]=-?[.\d]+/,
  L0 = /[^,'"\[\]\s]+/gi,
  Y_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Fe,
  On,
  fc,
  Lf,
  Xt = {},
  Ya = {},
  M0,
  D0 = function (e) {
    return (Ya = mi(e, Xt)) && bt;
  },
  Mf = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  xl = function (e, n) {
    return !n && console.warn(e);
  },
  O0 = function (e, n) {
    return (e && (Xt[e] = n) && Ya && (Ya[e] = n)) || Xt;
  },
  Sl = function () {
    return 0;
  },
  G_ = { suppressEvents: !0, isStart: !0, kill: !1 },
  va = { suppressEvents: !0, kill: !1 },
  Q_ = { suppressEvents: !0 },
  Df = {},
  Or = [],
  dc = {},
  z0,
  Vt = {},
  Zs = {},
  _h = 30,
  ya = [],
  Of = "",
  zf = function (e) {
    var n = e[0],
      r,
      i;
    if ((Un(n) || Ve(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = ya.length; i-- && !ya[i].targetTest(n); );
      r = ya[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new ig(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  oi = function (e) {
    return e._gsap || zf(cn(e))[0]._gsap;
  },
  A0 = function (e, n, r) {
    return (r = e[n]) && Ve(r)
      ? e[n]()
      : (Rf(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  Ft = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  Qe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ot = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ki = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  K_ = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  Ga = function () {
    var e = Or.length,
      n = Or.slice(0),
      r,
      i;
    for (dc = {}, Or.length = 0, r = 0; r < e; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  F0 = function (e, n, r, i) {
    Or.length && !gt && Ga(),
      e.render(n, r, i || (gt && n < 0 && (e._initted || e._startAt))),
      Or.length && !gt && Ga();
  },
  I0 = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(L0).length < 2
      ? n
      : at(e)
      ? e.trim()
      : e;
  },
  j0 = function (e) {
    return e;
  },
  pn = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  X_ = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  mi = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  wh = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Un(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  Qa = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  Xo = function (e) {
    var n = e.parent || Fe,
      r = e.keyframes ? X_(vt(e.keyframes)) : pn;
    if (At(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  q_ = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  b0 = function (e, n, r, i, o) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var l = e[i],
      a;
    if (o) for (a = n[o]; l && l[o] > a; ) l = l._prev;
    return (
      l ? ((n._next = l._next), (l._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = l),
      (n.parent = n._dp = e),
      n
    );
  },
  ys = function (e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = n._prev,
      l = n._next;
    o ? (o._next = l) : e[r] === n && (e[r] = l),
      l ? (l._prev = o) : e[i] === n && (e[i] = o),
      (n._next = n._prev = n.parent = null);
  },
  Ir = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  li = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  Z_ = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  hc = function (e, n, r, i) {
    return (
      e._startAt &&
      (gt
        ? e._startAt.revert(va)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  J_ = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  xh = function (e) {
    return e._repeat ? ao(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  ao = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  Ka = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  _s = function (e) {
    return (e._end = ot(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Ee) || 0)
    ));
  },
  ws = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = ot(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        _s(e),
        r._dirty || li(r, e)),
      e
    );
  },
  U0 = function (e, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((r = Ka(e.rawTime(), n)),
        (!n._dur || zl(0, n.totalDuration(), r) - n._tTime > Ee) &&
          n.render(r, !0)),
      li(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -Ee;
    }
  },
  An = function (e, n, r, i) {
    return (
      n.parent && Ir(n),
      (n._start = ot(
        (lr(r) ? r : r || e !== Fe ? rn(e, r, n) : e._time) + n._delay
      )),
      (n._end = ot(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      b0(e, n, "_first", "_last", e._sort ? "_start" : 0),
      pc(n) || (e._recent = n),
      i || U0(e, n),
      e._ts < 0 && ws(e, e._tTime),
      e
    );
  },
  B0 = function (e, n) {
    return (
      (Xt.ScrollTrigger || Mf("scrollTrigger", n)) &&
      Xt.ScrollTrigger.create(n, e)
    );
  },
  $0 = function (e, n, r, i, o) {
    if ((Ff(e, n, o), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !gt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      z0 !== Ht.frame
    )
      return Or.push(e), (e._lazy = [o, i]), 1;
  },
  ew = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  pc = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  tw = function (e, n, r, i) {
    var o = e.ratio,
      l =
        n < 0 ||
        (!n &&
          ((!e._start && ew(e) && !(!e._initted && pc(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !pc(e))))
          ? 0
          : 1,
      a = e._rDelay,
      s = 0,
      u,
      c,
      f;
    if (
      (a &&
        e._repeat &&
        ((s = zl(0, e._tDur, n)),
        (c = ao(s, a)),
        e._yoyo && c & 1 && (l = 1 - l),
        c !== ao(e._tTime, a) &&
          ((o = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
      l !== o || gt || i || e._zTime === Ee || (!n && e._zTime))
    ) {
      if (!e._initted && $0(e, n, i, r, s)) return;
      for (
        f = e._zTime,
          e._zTime = n || (r ? Ee : 0),
          r || (r = n && !f),
          e.ratio = l,
          e._from && (l = 1 - l),
          e._time = 0,
          e._tTime = s,
          u = e._pt;
        u;

      )
        u.r(l, u.d), (u = u._next);
      n < 0 && hc(e, n, r, !0),
        e._onUpdate && !r && Yt(e, "onUpdate"),
        s && e._repeat && !r && e.parent && Yt(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === l &&
          (l && Ir(e, 1),
          !r &&
            !gt &&
            (Yt(e, l ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  nw = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  so = function (e, n, r, i) {
    var o = e._repeat,
      l = ot(n) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= l / e._dur),
      (e._dur = l),
      (e._tDur = o ? (o < 0 ? 1e10 : ot(l * (o + 1) + e._rDelay * o)) : l),
      a > 0 && !i && ws(e, (e._tTime = e._tDur * a)),
      e.parent && _s(e),
      r || li(e.parent, e),
      e
    );
  },
  Sh = function (e) {
    return e instanceof Et ? li(e) : so(e, e._dur);
  },
  rw = { _start: 0, endTime: Sl, totalDuration: Sl },
  rn = function t(e, n, r) {
    var i = e.labels,
      o = e._recent || rw,
      l = e.duration() >= un ? o.endTime(!1) : e._dur,
      a,
      s,
      u;
    return at(n) && (isNaN(n) || n in i)
      ? ((s = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (a = n.indexOf("=")),
        s === "<" || s === ">"
          ? (a >= 0 && (n = n.replace(/=/, "")),
            (s === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (a < 0 ? o : r).totalDuration() / 100 : 1))
          : a < 0
          ? (n in i || (i[n] = l), i[n])
          : ((s = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
            u && r && (s = (s / 100) * (vt(r) ? r[0] : r).totalDuration()),
            a > 1 ? t(e, n.substr(0, a - 1), r) + s : l + s))
      : n == null
      ? l
      : +n;
  },
  qo = function (e, n, r) {
    var i = lr(n[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      l = n[o],
      a,
      s;
    if ((i && (l.duration = n[1]), (l.parent = r), e)) {
      for (a = l, s = r; s && !("immediateRender" in a); )
        (a = s.vars.defaults || {}), (s = At(s.vars.inherit) && s.parent);
      (l.immediateRender = At(a.immediateRender)),
        e < 2 ? (l.runBackwards = 1) : (l.startAt = n[o - 1]);
    }
    return new Ze(n[0], l, n[o + 1]);
  },
  Vr = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  zl = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  mt = function (e, n) {
    return !at(e) || !(n = Y_.exec(e)) ? "" : n[1];
  },
  iw = function (e, n, r) {
    return Vr(r, function (i) {
      return zl(e, n, i);
    });
  },
  mc = [].slice,
  V0 = function (e, n) {
    return (
      e &&
      Un(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && Un(e[0]))) &&
      !e.nodeType &&
      e !== On
    );
  },
  ow = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var o;
        return (at(i) && !n) || V0(i, 1)
          ? (o = r).push.apply(o, cn(i))
          : r.push(i);
      }) || r
    );
  },
  cn = function (e, n, r) {
    return De && !n && De.selector
      ? De.selector(e)
      : at(e) && !r && (fc || !uo())
      ? mc.call((n || Lf).querySelectorAll(e), 0)
      : vt(e)
      ? ow(e, r)
      : V0(e)
      ? mc.call(e, 0)
      : e
      ? [e]
      : [];
  },
  gc = function (e) {
    return (
      (e = cn(e)[0] || xl("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return cn(
          n,
          r.querySelectorAll
            ? r
            : r === e
            ? xl("Invalid scope") || Lf.createElement("div")
            : e
        );
      }
    );
  },
  H0 = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  W0 = function (e) {
    if (Ve(e)) return e;
    var n = Un(e) ? e : { each: e },
      r = ai(n.ease),
      i = n.from || 0,
      o = parseFloat(n.base) || 0,
      l = {},
      a = i > 0 && i < 1,
      s = isNaN(i) || a,
      u = n.axis,
      c = i,
      f = i;
    return (
      at(i)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && s && ((c = i[0]), (f = i[1])),
      function (d, g, y) {
        var h = (y || n).length,
          w = l[h],
          m,
          p,
          v,
          S,
          E,
          _,
          C,
          T,
          R;
        if (!w) {
          if (((R = n.grid === "auto" ? 0 : (n.grid || [1, un])[1]), !R)) {
            for (
              C = -un;
              C < (C = y[R++].getBoundingClientRect().left) && R < h;

            );
            R < h && R--;
          }
          for (
            w = l[h] = [],
              m = s ? Math.min(R, h) * c - 0.5 : i % R,
              p = R === un ? 0 : s ? (h * f) / R - 0.5 : (i / R) | 0,
              C = 0,
              T = un,
              _ = 0;
            _ < h;
            _++
          )
            (v = (_ % R) - m),
              (S = p - ((_ / R) | 0)),
              (w[_] = E = u ? Math.abs(u === "y" ? S : v) : T0(v * v + S * S)),
              E > C && (C = E),
              E < T && (T = E);
          i === "random" && H0(w),
            (w.max = C - T),
            (w.min = T),
            (w.v = h =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (R > h
                    ? h - 1
                    : u
                    ? u === "y"
                      ? h / R
                      : R
                    : Math.max(R, h / R)) ||
                0) * (i === "edges" ? -1 : 1)),
            (w.b = h < 0 ? o - h : o),
            (w.u = mt(n.amount || n.each) || 0),
            (r = r && h < 0 ? tg(r) : r);
        }
        return (
          (h = (w[d] - w.min) / w.max || 0),
          ot(w.b + (r ? r(h) : h) * w.v) + w.u
        );
      }
    );
  },
  vc = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = ot(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (lr(r) ? 0 : mt(r));
    };
  },
  Y0 = function (e, n) {
    var r = vt(e),
      i,
      o;
    return (
      !r &&
        Un(e) &&
        ((i = r = e.radius || un),
        e.values
          ? ((e = cn(e.values)), (o = !lr(e[0])) && (i *= i))
          : (e = vc(e.increment))),
      Vr(
        n,
        r
          ? Ve(e)
            ? function (l) {
                return (o = e(l)), Math.abs(o - l) <= i ? o : l;
              }
            : function (l) {
                for (
                  var a = parseFloat(o ? l.x : l),
                    s = parseFloat(o ? l.y : 0),
                    u = un,
                    c = 0,
                    f = e.length,
                    d,
                    g;
                  f--;

                )
                  o
                    ? ((d = e[f].x - a), (g = e[f].y - s), (d = d * d + g * g))
                    : (d = Math.abs(e[f] - a)),
                    d < u && ((u = d), (c = f));
                return (
                  (c = !i || u <= i ? e[c] : l),
                  o || c === l || lr(l) ? c : c + mt(l)
                );
              }
          : vc(e)
      )
    );
  },
  G0 = function (e, n, r, i) {
    return Vr(vt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return vt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  lw = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (o, l) {
        return l(o);
      }, i);
    };
  },
  aw = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || mt(r));
    };
  },
  sw = function (e, n, r) {
    return K0(e, n, 0, 1, r);
  },
  Q0 = function (e, n, r) {
    return Vr(r, function (i) {
      return e[~~n(i)];
    });
  },
  uw = function t(e, n, r) {
    var i = n - e;
    return vt(e)
      ? Q0(e, t(0, e.length), n)
      : Vr(r, function (o) {
          return ((i + ((o - e) % i)) % i) + e;
        });
  },
  cw = function t(e, n, r) {
    var i = n - e,
      o = i * 2;
    return vt(e)
      ? Q0(e, t(0, e.length - 1), n)
      : Vr(r, function (l) {
          return (l = (o + ((l - e) % o)) % o || 0), e + (l > i ? o - l : l);
        });
  },
  El = function (e) {
    for (var n = 0, r = "", i, o, l, a; ~(i = e.indexOf("random(", n)); )
      (l = e.indexOf(")", i)),
        (a = e.charAt(i + 7) === "["),
        (o = e.substr(i + 7, l - i - 7).match(a ? L0 : cc)),
        (r +=
          e.substr(n, i - n) + G0(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5)),
        (n = l + 1);
    return r + e.substr(n, e.length - n);
  },
  K0 = function (e, n, r, i, o) {
    var l = n - e,
      a = i - r;
    return Vr(o, function (s) {
      return r + (((s - e) / l) * a || 0);
    });
  },
  fw = function t(e, n, r, i) {
    var o = isNaN(e + n)
      ? 0
      : function (g) {
          return (1 - g) * e + g * n;
        };
    if (!o) {
      var l = at(e),
        a = {},
        s,
        u,
        c,
        f,
        d;
      if ((r === !0 && (i = 1) && (r = null), l))
        (e = { p: e }), (n = { p: n });
      else if (vt(e) && !vt(n)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
          c.push(t(e[u - 1], e[u]));
        f--,
          (o = function (y) {
            y *= f;
            var h = Math.min(d, ~~y);
            return c[h](y - h);
          }),
          (r = n);
      } else i || (e = mi(vt(e) ? [] : {}, e));
      if (!c) {
        for (s in n) Af.call(a, e, s, "get", n[s]);
        o = function (y) {
          return bf(y, a) || (l ? e.p : e);
        };
      }
    }
    return Vr(r, o);
  },
  Eh = function (e, n, r) {
    var i = e.labels,
      o = un,
      l,
      a,
      s;
    for (l in i)
      (a = i[l] - n),
        a < 0 == !!r && a && o > (a = Math.abs(a)) && ((s = l), (o = a));
    return s;
  },
  Yt = function (e, n, r) {
    var i = e.vars,
      o = i[n],
      l = De,
      a = e._ctx,
      s,
      u,
      c;
    if (o)
      return (
        (s = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && Or.length && Ga(),
        a && (De = a),
        (c = s ? o.apply(u, s) : o.call(u)),
        (De = l),
        c
      );
  },
  jo = function (e) {
    return (
      Ir(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!gt),
      e.progress() < 1 && Yt(e, "onInterrupt"),
      e
    );
  },
  $i,
  X0 = [],
  q0 = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Nf() || e.headless)) {
        var n = e.name,
          r = Ve(e),
          i =
            n && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          o = {
            init: Sl,
            render: bf,
            add: Af,
            kill: Pw,
            modifier: Tw,
            rawVars: 0,
          },
          l = {
            targetTest: 0,
            get: 0,
            getSetter: jf,
            aliases: {},
            register: 0,
          };
        if ((uo(), e !== i)) {
          if (Vt[n]) return;
          pn(i, pn(Qa(e, o), l)),
            mi(i.prototype, mi(o, Qa(e, l))),
            (Vt[(i.prop = n)] = i),
            e.targetTest && (ya.push(i), (Df[n] = 1)),
            (n =
              (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
              "Plugin");
        }
        O0(n, i), e.register && e.register(bt, i, It);
      } else X0.push(e);
  },
  xe = 255,
  bo = {
    aqua: [0, xe, xe],
    lime: [0, xe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, xe],
    navy: [0, 0, 128],
    white: [xe, xe, xe],
    olive: [128, 128, 0],
    yellow: [xe, xe, 0],
    orange: [xe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [xe, 0, 0],
    pink: [xe, 192, 203],
    cyan: [0, xe, xe],
    transparent: [xe, xe, xe, 0],
  },
  Js = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? n + (r - n) * (2 / 3 - e) * 6
        : n) *
        xe +
        0.5) |
        0
    );
  },
  Z0 = function (e, n, r) {
    var i = e ? (lr(e) ? [e >> 16, (e >> 8) & xe, e & xe] : 0) : bo.black,
      o,
      l,
      a,
      s,
      u,
      c,
      f,
      d,
      g,
      y;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), bo[e]))
        i = bo[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((o = e.charAt(1)),
            (l = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              o +
              o +
              l +
              l +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & xe, i & xe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & xe, e & xe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = y = e.match(cc)), !n))
          (s = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (l = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (o = c * 2 - l),
            i.length > 3 && (i[3] *= 1),
            (i[0] = Js(s + 1 / 3, o, l)),
            (i[1] = Js(s, o, l)),
            (i[2] = Js(s - 1 / 3, o, l));
        else if (~e.indexOf("="))
          return (i = e.match(R0)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(cc) || bo.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !y &&
        ((o = i[0] / xe),
        (l = i[1] / xe),
        (a = i[2] / xe),
        (f = Math.max(o, l, a)),
        (d = Math.min(o, l, a)),
        (c = (f + d) / 2),
        f === d
          ? (s = u = 0)
          : ((g = f - d),
            (u = c > 0.5 ? g / (2 - f - d) : g / (f + d)),
            (s =
              f === o
                ? (l - a) / g + (l < a ? 6 : 0)
                : f === l
                ? (a - o) / g + 2
                : (o - l) / g + 4),
            (s *= 60)),
        (i[0] = ~~(s + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  J0 = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(zr).forEach(function (o) {
        var l = o.match(Bi) || [];
        n.push.apply(n, l), r.push((i += l.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  Ch = function (e, n, r) {
    var i = "",
      o = (e + i).match(zr),
      l = n ? "hsla(" : "rgba(",
      a = 0,
      s,
      u,
      c,
      f;
    if (!o) return e;
    if (
      ((o = o.map(function (d) {
        return (
          (d = Z0(d, n, 1)) &&
          l +
            (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      r && ((c = J0(e)), (s = r.c), s.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(zr, "1").split(Bi), f = u.length - 1; a < f; a++)
        i +=
          u[a] +
          (~s.indexOf(a)
            ? o.shift() || l + "0,0,0,0)"
            : (c.length ? c : o.length ? o : r).shift());
    if (!u)
      for (u = e.split(zr), f = u.length - 1; a < f; a++) i += u[a] + o[a];
    return i + u[f];
  },
  zr = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in bo) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  dw = /hsl[a]?\(/,
  eg = function (e) {
    var n = e.join(" "),
      r;
    if (((zr.lastIndex = 0), zr.test(n)))
      return (
        (r = dw.test(n)),
        (e[1] = Ch(e[1], r)),
        (e[0] = Ch(e[0], r, J0(e[1]))),
        !0
      );
  },
  Cl,
  Ht = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      o = 1e3 / 240,
      l = o,
      a = [],
      s,
      u,
      c,
      f,
      d,
      g,
      y = function h(w) {
        var m = t() - i,
          p = w === !0,
          v,
          S,
          E,
          _;
        if (
          ((m > e || m < 0) && (r += m - n),
          (i += m),
          (E = i - r),
          (v = E - l),
          (v > 0 || p) &&
            ((_ = ++f.frame),
            (d = E - f.time * 1e3),
            (f.time = E = E / 1e3),
            (l += v + (v >= o ? 4 : o - v)),
            (S = 1)),
          p || (s = u(h)),
          S)
        )
          for (g = 0; g < a.length; g++) a[g](E, d, _, w);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          y(!0);
        },
        deltaRatio: function (w) {
          return d / (1e3 / (w || 60));
        },
        wake: function () {
          M0 &&
            (!fc &&
              Nf() &&
              ((On = fc = window),
              (Lf = On.document || {}),
              (Xt.gsap = bt),
              (On.gsapVersions || (On.gsapVersions = [])).push(bt.version),
              D0(Ya || On.GreenSockGlobals || (!On.gsap && On) || {}),
              X0.forEach(q0)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            s && f.sleep(),
            (u =
              c ||
              function (w) {
                return setTimeout(w, (l - f.time * 1e3 + 1) | 0);
              }),
            (Cl = 1),
            y(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(s), (Cl = 0), (u = Sl);
        },
        lagSmoothing: function (w, m) {
          (e = w || 1 / 0), (n = Math.min(m || 33, e));
        },
        fps: function (w) {
          (o = 1e3 / (w || 240)), (l = f.time * 1e3 + o);
        },
        add: function (w, m, p) {
          var v = m
            ? function (S, E, _, C) {
                w(S, E, _, C), f.remove(v);
              }
            : w;
          return f.remove(w), a[p ? "unshift" : "push"](v), uo(), v;
        },
        remove: function (w, m) {
          ~(m = a.indexOf(w)) && a.splice(m, 1) && g >= m && g--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  uo = function () {
    return !Cl && Ht.wake();
  },
  he = {},
  hw = /^[\d.\-M][\d.\-,\s]/,
  pw = /["']/g,
  mw = function (e) {
    for (
      var n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        o = 1,
        l = r.length,
        a,
        s,
        u;
      o < l;
      o++
    )
      (s = r[o]),
        (a = o !== l - 1 ? s.lastIndexOf(",") : s.length),
        (u = s.substr(0, a)),
        (n[i] = isNaN(u) ? u.replace(pw, "").trim() : +u),
        (i = s.substr(a + 1).trim());
    return n;
  },
  gw = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  vw = function (e) {
    var n = (e + "").split("("),
      r = he[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [mw(n[1])] : gw(e).split(",").map(I0)
        )
      : he._CE && hw.test(e)
      ? he._CE("", e)
      : r;
  },
  tg = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  ng = function t(e, n) {
    for (var r = e._first, i; r; )
      r instanceof Et
        ? t(r, n)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== n &&
          (r.timeline
            ? t(r.timeline, n)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = n))),
        (r = r._next);
  },
  ai = function (e, n) {
    return (e && (Ve(e) ? e : he[e] || vw(e))) || n;
  },
  Si = function (e, n, r, i) {
    r === void 0 &&
      (r = function (s) {
        return 1 - n(1 - s);
      }),
      i === void 0 &&
        (i = function (s) {
          return s < 0.5 ? n(s * 2) / 2 : 1 - n((1 - s) * 2) / 2;
        });
    var o = { easeIn: n, easeOut: r, easeInOut: i },
      l;
    return (
      Ft(e, function (a) {
        (he[a] = Xt[a] = o), (he[(l = a.toLowerCase())] = r);
        for (var s in o)
          he[
            l + (s === "easeIn" ? ".in" : s === "easeOut" ? ".out" : ".inOut")
          ] = he[a + "." + s] = o[s];
      }),
      o
    );
  },
  rg = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  eu = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      l = (o / uc) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * W_((c - l) * o) + 1;
      },
      s =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : rg(a);
    return (
      (o = uc / o),
      (s.config = function (u, c) {
        return t(e, u, c);
      }),
      s
    );
  },
  tu = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (l) {
        return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (o) {
              return 1 - r(1 - o);
            }
          : rg(r);
    return (
      (i.config = function (o) {
        return t(e, o);
      }),
      i
    );
  };
Ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Si(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
he.Linear.easeNone = he.none = he.Linear.easeIn;
Si("Elastic", eu("in"), eu("out"), eu());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    o = function (a) {
      return a < n
        ? t * a * a
        : a < r
        ? t * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? t * (a -= 2.25 / e) * a + 0.9375
        : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Si(
    "Bounce",
    function (l) {
      return 1 - o(1 - l);
    },
    o
  );
})(7.5625, 2.75);
Si("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Si("Circ", function (t) {
  return -(T0(1 - t * t) - 1);
});
Si("Sine", function (t) {
  return t === 1 ? 1 : -H_(t * $_) + 1;
});
Si("Back", tu("in"), tu("out"), tu());
he.SteppedEase =
  he.steps =
  Xt.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          o = n ? 1 : 0,
          l = 1 - Ee;
        return function (a) {
          return (((i * zl(0, l, a)) | 0) + o) * r;
        };
      },
    };
lo.ease = he["quad.out"];
Ft(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (Of += t + "," + t + "Params,");
  }
);
var ig = function (e, n) {
    (this.id = V_++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : A0),
      (this.set = n ? n.getSetter : jf);
  },
  kl = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        so(this, +n.duration, 1, 1),
        (this.data = n.data),
        De && ((this._ctx = De), De.data.push(this)),
        Cl || Ht.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            so(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((uo(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (ws(this, r), !o._dp || o.parent || U0(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            An(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === Ee) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), F0(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + xh(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                xh(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * o, i)
          : this._repeat
          ? ao(this._tTime, o) + 1
          : 1;
      }),
      (e.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -Ee ? 0 : this._rts;
        if (this._rts === r) return this;
        var o =
          this.parent && this._ts ? Ka(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -Ee ? 0 : this._rts),
          this.totalTime(zl(-Math.abs(this._delay), this._tDur, o), i !== !1),
          _s(this),
          Z_(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (uo(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Ee &&
                      (this._tTime -= Ee)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && An(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (At(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ka(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = Q_);
        var i = gt;
        return (
          (gt = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (gt = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
          (o = i._start + o / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : o;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), Sh(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), Sh(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(rn(this, r), At(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, At(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -Ee : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Ee), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          o;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (o = r.rawTime(!0)) >= i &&
            o < this.endTime(!0) - Ee)
        );
      }),
      (e.eventCallback = function (r, i, o) {
        var l = this.vars;
        return arguments.length > 1
          ? (i
              ? ((l[r] = i),
                o && (l[r + "Params"] = o),
                r === "onUpdate" && (this._onUpdate = i))
              : delete l[r],
            this)
          : l[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (o) {
          var l = Ve(r) ? r : j0,
            a = function () {
              var u = i.then;
              (i.then = null),
                Ve(l) && (l = l(i)) && (l.then || l === i) && (i.then = u),
                o(l),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (e.kill = function () {
        jo(this);
      }),
      t
    );
  })();
pn(kl.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Ee,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Et = (function (t) {
  k0(e, t);
  function e(r, i) {
    var o;
    return (
      r === void 0 && (r = {}),
      (o = t.call(this, r) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!r.smoothChildTiming),
      (o.autoRemoveChildren = !!r.autoRemoveChildren),
      (o._sort = At(r.sortChildren)),
      Fe && An(r.parent || Fe, Kn(o), i),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      r.scrollTrigger && B0(Kn(o), r.scrollTrigger),
      o
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, o, l) {
      return qo(0, arguments, this), this;
    }),
    (n.from = function (i, o, l) {
      return qo(1, arguments, this), this;
    }),
    (n.fromTo = function (i, o, l, a) {
      return qo(2, arguments, this), this;
    }),
    (n.set = function (i, o, l) {
      return (
        (o.duration = 0),
        (o.parent = this),
        Xo(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Ze(i, o, rn(this, l), 1),
        this
      );
    }),
    (n.call = function (i, o, l) {
      return An(this, Ze.delayedCall(0, i, o), l);
    }),
    (n.staggerTo = function (i, o, l, a, s, u, c) {
      return (
        (l.duration = o),
        (l.stagger = l.stagger || a),
        (l.onComplete = u),
        (l.onCompleteParams = c),
        (l.parent = this),
        new Ze(i, l, rn(this, s)),
        this
      );
    }),
    (n.staggerFrom = function (i, o, l, a, s, u, c) {
      return (
        (l.runBackwards = 1),
        (Xo(l).immediateRender = At(l.immediateRender)),
        this.staggerTo(i, o, l, a, s, u, c)
      );
    }),
    (n.staggerFromTo = function (i, o, l, a, s, u, c, f) {
      return (
        (a.startAt = l),
        (Xo(a).immediateRender = At(a.immediateRender)),
        this.staggerTo(i, o, a, s, u, c, f)
      );
    }),
    (n.render = function (i, o, l) {
      var a = this._time,
        s = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : ot(i),
        f = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        g,
        y,
        h,
        w,
        m,
        p,
        v,
        S,
        E,
        _,
        C;
      if (
        (this !== Fe && c > s && i >= 0 && (c = s), c !== this._tTime || l || f)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (i += this._time - a)),
          (d = c),
          (S = this._start),
          (v = this._ts),
          (m = !v),
          f && (u || (a = this._zTime), (i || !o) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((_ = this._yoyo),
            (w = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(w * 100 + i, o, l);
          if (
            ((d = ot(c % w)),
            c === s
              ? ((h = this._repeat), (d = u))
              : ((h = ~~(c / w)),
                h && h === c / w && ((d = u), h--),
                d > u && (d = u)),
            (E = ao(this._tTime, w)),
            !a &&
              this._tTime &&
              E !== h &&
              this._tTime - E * w - this._dur <= 0 &&
              (E = h),
            _ && h & 1 && ((d = u - d), (C = 1)),
            h !== E && !this._lock)
          ) {
            var T = _ && E & 1,
              R = T === (_ && h & 1);
            if (
              (h < E && (T = !T),
              (a = T ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (C ? 0 : ot(h * w)), o, !u)._lock = 0),
              (this._tTime = c),
              !o && this.parent && Yt(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (s = this._tDur),
              R &&
                ((this._lock = 2),
                (a = T ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            ng(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((p = nw(this, ot(a), ot(d))), p && (c -= d - (d = p._start))),
          (this._tTime = c),
          (this._time = d),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && d && !o && !h && (Yt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (d >= a && i >= 0)
          for (g = this._first; g; ) {
            if (
              ((y = g._next), (g._act || d >= g._start) && g._ts && p !== g)
            ) {
              if (g.parent !== this) return this.render(i, o, l);
              if (
                (g.render(
                  g._ts > 0
                    ? (d - g._start) * g._ts
                    : (g._dirty ? g.totalDuration() : g._tDur) +
                        (d - g._start) * g._ts,
                  o,
                  l
                ),
                d !== this._time || (!this._ts && !m))
              ) {
                (p = 0), y && (c += this._zTime = -Ee);
                break;
              }
            }
            g = y;
          }
        else {
          g = this._last;
          for (var O = i < 0 ? i : d; g; ) {
            if (((y = g._prev), (g._act || O <= g._end) && g._ts && p !== g)) {
              if (g.parent !== this) return this.render(i, o, l);
              if (
                (g.render(
                  g._ts > 0
                    ? (O - g._start) * g._ts
                    : (g._dirty ? g.totalDuration() : g._tDur) +
                        (O - g._start) * g._ts,
                  o,
                  l || (gt && (g._initted || g._startAt))
                ),
                d !== this._time || (!this._ts && !m))
              ) {
                (p = 0), y && (c += this._zTime = O ? -Ee : Ee);
                break;
              }
            }
            g = y;
          }
        }
        if (
          p &&
          !o &&
          (this.pause(),
          (p.render(d >= a ? 0 : -Ee)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = S), _s(this), this.render(i, o, l);
        this._onUpdate && !o && Yt(this, "onUpdate", !0),
          ((c === s && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (S === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === s && this._ts > 0) || (!c && this._ts < 0)) &&
                Ir(this, 1),
              !o &&
                !(i < 0 && !a) &&
                (c || a || !s) &&
                (Yt(
                  this,
                  c === s && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < s && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (i, o) {
      var l = this;
      if ((lr(o) || (o = rn(this, o, i)), !(i instanceof kl))) {
        if (vt(i))
          return (
            i.forEach(function (a) {
              return l.add(a, o);
            }),
            this
          );
        if (at(i)) return this.addLabel(i, o);
        if (Ve(i)) i = Ze.delayedCall(0, i);
        else return this;
      }
      return this !== i ? An(this, i, o) : this;
    }),
    (n.getChildren = function (i, o, l, a) {
      i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        l === void 0 && (l = !0),
        a === void 0 && (a = -un);
      for (var s = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Ze
            ? o && s.push(u)
            : (l && s.push(u), i && s.push.apply(s, u.getChildren(!0, o, l)))),
          (u = u._next);
      return s;
    }),
    (n.getById = function (i) {
      for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
        if (o[l].vars.id === i) return o[l];
    }),
    (n.remove = function (i) {
      return at(i)
        ? this.removeLabel(i)
        : Ve(i)
        ? this.killTweensOf(i)
        : (ys(this, i),
          i === this._recent && (this._recent = this._last),
          li(this));
    }),
    (n.totalTime = function (i, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ot(
              Ht.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          t.prototype.totalTime.call(this, i, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, o) {
      return (this.labels[i] = rn(this, o)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, o, l) {
      var a = Ze.delayedCall(0, o || Sl, l);
      return (
        (a.data = "isPause"), (this._hasPause = 1), An(this, a, rn(this, i))
      );
    }),
    (n.removePause = function (i) {
      var o = this._first;
      for (i = rn(this, i); o; )
        o._start === i && o.data === "isPause" && Ir(o), (o = o._next);
    }),
    (n.killTweensOf = function (i, o, l) {
      for (var a = this.getTweensOf(i, l), s = a.length; s--; )
        Sr !== a[s] && a[s].kill(i, o);
      return this;
    }),
    (n.getTweensOf = function (i, o) {
      for (var l = [], a = cn(i), s = this._first, u = lr(o), c; s; )
        s instanceof Ze
          ? K_(s._targets, a) &&
            (u
              ? (!Sr || (s._initted && s._ts)) &&
                s.globalTime(0) <= o &&
                s.globalTime(s.totalDuration()) > o
              : !o || s.isActive()) &&
            l.push(s)
          : (c = s.getTweensOf(a, o)).length && l.push.apply(l, c),
          (s = s._next);
      return l;
    }),
    (n.tweenTo = function (i, o) {
      o = o || {};
      var l = this,
        a = rn(l, i),
        s = o,
        u = s.startAt,
        c = s.onStart,
        f = s.onStartParams,
        d = s.immediateRender,
        g,
        y = Ze.to(
          l,
          pn(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : l._time)) / l.timeScale()
                ) ||
                Ee,
              onStart: function () {
                if ((l.pause(), !g)) {
                  var w =
                    o.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : l._time)) /
                        l.timeScale()
                    );
                  y._dur !== w && so(y, w, 0, 1).render(y._time, !0, !0),
                    (g = 1);
                }
                c && c.apply(y, f || []);
              },
            },
            o
          )
        );
      return d ? y.render(0) : y;
    }),
    (n.tweenFromTo = function (i, o, l) {
      return this.tweenTo(o, pn({ startAt: { time: rn(this, i) } }, l));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Eh(this, rn(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Eh(this, rn(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + Ee);
    }),
    (n.shiftChildren = function (i, o, l) {
      l === void 0 && (l = 0);
      for (var a = this._first, s = this.labels, u; a; )
        a._start >= l && ((a._start += i), (a._end += i)), (a = a._next);
      if (o) for (u in s) s[u] >= l && (s[u] += i);
      return li(this);
    }),
    (n.invalidate = function (i) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(i), (o = o._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var o = this._first, l; o; ) (l = o._next), this.remove(o), (o = l);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        li(this)
      );
    }),
    (n.totalDuration = function (i) {
      var o = 0,
        l = this,
        a = l._last,
        s = un,
        u,
        c,
        f;
      if (arguments.length)
        return l.timeScale(
          (l._repeat < 0 ? l.duration() : l.totalDuration()) /
            (l.reversed() ? -i : i)
        );
      if (l._dirty) {
        for (f = l.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > s && l._sort && a._ts && !l._lock
              ? ((l._lock = 1), (An(l, a, c - a._delay, 1)._lock = 0))
              : (s = c),
            c < 0 &&
              a._ts &&
              ((o -= c),
              ((!f && !l._dp) || (f && f.smoothChildTiming)) &&
                ((l._start += c / l._ts), (l._time -= c), (l._tTime -= c)),
              l.shiftChildren(-c, !1, -1 / 0),
              (s = 0)),
            a._end > o && a._ts && (o = a._end),
            (a = u);
        so(l, l === Fe && l._time > o ? l._time : o, 1, 1), (l._dirty = 0);
      }
      return l._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Fe._ts && (F0(Fe, Ka(i, Fe)), (z0 = Ht.frame)), Ht.frame >= _h)) {
        _h += Qt.autoSleep || 120;
        var o = Fe._first;
        if ((!o || !o._ts) && Qt.autoSleep && Ht._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || Ht.sleep();
        }
      }
    }),
    e
  );
})(kl);
pn(Et.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var yw = function (e, n, r, i, o, l, a) {
    var s = new It(this._pt, e, n, 0, 1, cg, null, o),
      u = 0,
      c = 0,
      f,
      d,
      g,
      y,
      h,
      w,
      m,
      p;
    for (
      s.b = r,
        s.e = i,
        r += "",
        i += "",
        (m = ~i.indexOf("random(")) && (i = El(i)),
        l && ((p = [r, i]), l(p, e, n), (r = p[0]), (i = p[1])),
        d = r.match(qs) || [];
      (f = qs.exec(i));

    )
      (y = f[0]),
        (h = i.substring(u, f.index)),
        g ? (g = (g + 1) % 5) : h.substr(-5) === "rgba(" && (g = 1),
        y !== d[c++] &&
          ((w = parseFloat(d[c - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: h || c === 1 ? h : ",",
            s: w,
            c: y.charAt(1) === "=" ? Ki(w, y) - w : parseFloat(y) - w,
            m: g && g < 4 ? Math.round : 0,
          }),
          (u = qs.lastIndex));
    return (
      (s.c = u < i.length ? i.substring(u, i.length) : ""),
      (s.fp = a),
      (N0.test(i) || m) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  Af = function (e, n, r, i, o, l, a, s, u, c) {
    Ve(i) && (i = i(o || 0, e, l));
    var f = e[n],
      d =
        r !== "get"
          ? r
          : Ve(f)
          ? u
            ? e[
                n.indexOf("set") || !Ve(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](u)
            : e[n]()
          : f,
      g = Ve(f) ? (u ? Ew : sg) : If,
      y;
    if (
      (at(i) &&
        (~i.indexOf("random(") && (i = El(i)),
        i.charAt(1) === "=" &&
          ((y = Ki(d, i) + (mt(d) || 0)), (y || y === 0) && (i = y))),
      !c || d !== i || yc)
    )
      return !isNaN(d * i) && i !== ""
        ? ((y = new It(
            this._pt,
            e,
            n,
            +d || 0,
            i - (d || 0),
            typeof f == "boolean" ? kw : ug,
            0,
            g
          )),
          u && (y.fp = u),
          a && y.modifier(a, this, e),
          (this._pt = y))
        : (!f && !(n in e) && Mf(n, i),
          yw.call(this, e, n, d, i, g, s || Qt.stringFilter, u));
  },
  _w = function (e, n, r, i, o) {
    if (
      (Ve(e) && (e = Zo(e, o, n, r, i)),
      !Un(e) || (e.style && e.nodeType) || vt(e) || P0(e))
    )
      return at(e) ? Zo(e, o, n, r, i) : e;
    var l = {},
      a;
    for (a in e) l[a] = Zo(e[a], o, n, r, i);
    return l;
  },
  og = function (e, n, r, i, o, l) {
    var a, s, u, c;
    if (
      Vt[e] &&
      (a = new Vt[e]()).init(
        o,
        a.rawVars ? n[e] : _w(n[e], i, o, l, r),
        r,
        i,
        l
      ) !== !1 &&
      ((r._pt = s = new It(r._pt, o, e, 0, 1, a.render, a, 0, a.priority)),
      r !== $i)
    )
      for (u = r._ptLookup[r._targets.indexOf(o)], c = a._props.length; c--; )
        u[a._props[c]] = s;
    return a;
  },
  Sr,
  yc,
  Ff = function t(e, n, r) {
    var i = e.vars,
      o = i.ease,
      l = i.startAt,
      a = i.immediateRender,
      s = i.lazy,
      u = i.onUpdate,
      c = i.runBackwards,
      f = i.yoyoEase,
      d = i.keyframes,
      g = i.autoRevert,
      y = e._dur,
      h = e._startAt,
      w = e._targets,
      m = e.parent,
      p = m && m.data === "nested" ? m.vars.targets : w,
      v = e._overwrite === "auto" && !Pf,
      S = e.timeline,
      E,
      _,
      C,
      T,
      R,
      O,
      b,
      K,
      Q,
      X,
      ae,
      ie,
      Z;
    if (
      (S && (!d || !o) && (o = "none"),
      (e._ease = ai(o, lo.ease)),
      (e._yEase = f ? tg(ai(f === !0 ? o : f, lo.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !S && !!i.runBackwards),
      !S || (d && !i.stagger))
    ) {
      if (
        ((K = w[0] ? oi(w[0]).harness : 0),
        (ie = K && i[K.prop]),
        (E = Qa(i, Df)),
        h &&
          (h._zTime < 0 && h.progress(1),
          n < 0 && c && a && !g ? h.render(-1, !0) : h.revert(c && y ? va : G_),
          (h._lazy = 0)),
        l)
      ) {
        if (
          (Ir(
            (e._startAt = Ze.set(
              w,
              pn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !h && At(s),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Yt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                l
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (gt || (!a && !g)) && e._startAt.revert(va),
          a && y && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (c && y && !h) {
        if (
          (n && (a = !1),
          (C = pn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !h && At(s),
              immediateRender: a,
              stagger: 0,
              parent: m,
            },
            E
          )),
          ie && (C[K.prop] = ie),
          Ir((e._startAt = Ze.set(w, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (gt ? e._startAt.revert(va) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !a)
        )
          t(e._startAt, Ee, Ee);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, s = (y && At(s)) || (s && !y), _ = 0;
        _ < w.length;
        _++
      ) {
        if (
          ((R = w[_]),
          (b = R._gsap || zf(w)[_]._gsap),
          (e._ptLookup[_] = X = {}),
          dc[b.id] && Or.length && Ga(),
          (ae = p === w ? _ : p.indexOf(R)),
          K &&
            (Q = new K()).init(R, ie || E, e, ae, p) !== !1 &&
            ((e._pt = T =
              new It(e._pt, R, Q.name, 0, 1, Q.render, Q, 0, Q.priority)),
            Q._props.forEach(function (D) {
              X[D] = T;
            }),
            Q.priority && (O = 1)),
          !K || ie)
        )
          for (C in E)
            Vt[C] && (Q = og(C, E, e, ae, R, p))
              ? Q.priority && (O = 1)
              : (X[C] = T =
                  Af.call(e, R, C, "get", E[C], ae, p, 0, i.stringFilter));
        e._op && e._op[_] && e.kill(R, e._op[_]),
          v &&
            e._pt &&
            ((Sr = e),
            Fe.killTweensOf(R, X, e.globalTime(n)),
            (Z = !e.parent),
            (Sr = 0)),
          e._pt && s && (dc[b.id] = 1);
      }
      O && fg(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !Z),
      d && n <= 0 && S.render(un, !0, !0);
  },
  ww = function (e, n, r, i, o, l, a, s) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      c,
      f,
      d,
      g;
    if (!u)
      for (
        u = e._ptCache[n] = [], d = e._ptLookup, g = e._targets.length;
        g--;

      ) {
        if (((c = d[g][n]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
        if (!c)
          return (
            (yc = 1),
            (e.vars[n] = "+=0"),
            Ff(e, a),
            (yc = 0),
            s ? xl(n + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (g = u.length; g--; )
      (f = u[g]),
        (c = f._pt || f),
        (c.s = (i || i === 0) && !o ? i : c.s + (i || 0) + l * c.c),
        (c.c = r - c.s),
        f.e && (f.e = Qe(r) + mt(f.e)),
        f.b && (f.b = c.s + mt(f.b));
  },
  xw = function (e, n) {
    var r = e[0] ? oi(e[0]).harness : 0,
      i = r && r.aliases,
      o,
      l,
      a,
      s;
    if (!i) return n;
    o = mi({}, n);
    for (l in i)
      if (l in o) for (s = i[l].split(","), a = s.length; a--; ) o[s[a]] = o[l];
    return o;
  },
  Sw = function (e, n, r, i) {
    var o = n.ease || i || "power1.inOut",
      l,
      a;
    if (vt(n))
      (a = r[e] || (r[e] = [])),
        n.forEach(function (s, u) {
          return a.push({ t: (u / (n.length - 1)) * 100, v: s, e: o });
        });
    else
      for (l in n)
        (a = r[l] || (r[l] = [])),
          l === "ease" || a.push({ t: parseFloat(e), v: n[l], e: o });
  },
  Zo = function (e, n, r, i, o) {
    return Ve(e)
      ? e.call(n, r, i, o)
      : at(e) && ~e.indexOf("random(")
      ? El(e)
      : e;
  },
  lg = Of + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  ag = {};
Ft(lg + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (ag[t] = 1);
});
var Ze = (function (t) {
  k0(e, t);
  function e(r, i, o, l) {
    var a;
    typeof i == "number" && ((o.duration = i), (i = o), (o = null)),
      (a = t.call(this, l ? i : Xo(i)) || this);
    var s = a.vars,
      u = s.duration,
      c = s.delay,
      f = s.immediateRender,
      d = s.stagger,
      g = s.overwrite,
      y = s.keyframes,
      h = s.defaults,
      w = s.scrollTrigger,
      m = s.yoyoEase,
      p = i.parent || Fe,
      v = (vt(r) || P0(r) ? lr(r[0]) : "length" in i) ? [r] : cn(r),
      S,
      E,
      _,
      C,
      T,
      R,
      O,
      b;
    if (
      ((a._targets = v.length
        ? zf(v)
        : xl(
            "GSAP target " + r + " not found. https://gsap.com",
            !Qt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = g),
      y || d || Jl(u) || Jl(c))
    ) {
      if (
        ((i = a.vars),
        (S = a.timeline =
          new Et({
            data: "nested",
            defaults: h || {},
            targets: p && p.data === "nested" ? p.vars.targets : v,
          })),
        S.kill(),
        (S.parent = S._dp = Kn(a)),
        (S._start = 0),
        d || Jl(u) || Jl(c))
      ) {
        if (((C = v.length), (O = d && W0(d)), Un(d)))
          for (T in d) ~lg.indexOf(T) && (b || (b = {}), (b[T] = d[T]));
        for (E = 0; E < C; E++)
          (_ = Qa(i, ag)),
            (_.stagger = 0),
            m && (_.yoyoEase = m),
            b && mi(_, b),
            (R = v[E]),
            (_.duration = +Zo(u, Kn(a), E, R, v)),
            (_.delay = (+Zo(c, Kn(a), E, R, v) || 0) - a._delay),
            !d &&
              C === 1 &&
              _.delay &&
              ((a._delay = c = _.delay), (a._start += c), (_.delay = 0)),
            S.to(R, _, O ? O(E, R, v) : 0),
            (S._ease = he.none);
        S.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (y) {
        Xo(pn(S.vars.defaults, { ease: "none" })),
          (S._ease = ai(y.ease || i.ease || "none"));
        var K = 0,
          Q,
          X,
          ae;
        if (vt(y))
          y.forEach(function (ie) {
            return S.to(v, ie, ">");
          }),
            S.duration();
        else {
          _ = {};
          for (T in y)
            T === "ease" || T === "easeEach" || Sw(T, y[T], _, y.easeEach);
          for (T in _)
            for (
              Q = _[T].sort(function (ie, Z) {
                return ie.t - Z.t;
              }),
                K = 0,
                E = 0;
              E < Q.length;
              E++
            )
              (X = Q[E]),
                (ae = {
                  ease: X.e,
                  duration: ((X.t - (E ? Q[E - 1].t : 0)) / 100) * u,
                }),
                (ae[T] = X.v),
                S.to(v, ae, K),
                (K += ae.duration);
          S.duration() < u && S.to({}, { duration: u - S.duration() });
        }
      }
      u || a.duration((u = S.duration()));
    } else a.timeline = 0;
    return (
      g === !0 && !Pf && ((Sr = Kn(a)), Fe.killTweensOf(v), (Sr = 0)),
      An(p, Kn(a), o),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (f ||
        (!u &&
          !y &&
          a._start === ot(p._time) &&
          At(f) &&
          J_(Kn(a)) &&
          p.data !== "nested")) &&
        ((a._tTime = -Ee), a.render(Math.max(0, -c) || 0)),
      w && B0(Kn(a), w),
      a
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, o, l) {
      var a = this._time,
        s = this._tDur,
        u = this._dur,
        c = i < 0,
        f = i > s - Ee && !c ? s : i < Ee ? 0 : i,
        d,
        g,
        y,
        h,
        w,
        m,
        p,
        v,
        S;
      if (!u) tw(this, i, o, l);
      else if (
        f !== this._tTime ||
        !i ||
        l ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((d = f), (v = this.timeline), this._repeat)) {
          if (((h = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(h * 100 + i, o, l);
          if (
            ((d = ot(f % h)),
            f === s
              ? ((y = this._repeat), (d = u))
              : ((y = ~~(f / h)),
                y && y === ot(f / h) && ((d = u), y--),
                d > u && (d = u)),
            (m = this._yoyo && y & 1),
            m && ((S = this._yEase), (d = u - d)),
            (w = ao(this._tTime, h)),
            d === a && !l && this._initted && y === w)
          )
            return (this._tTime = f), this;
          y !== w &&
            (v && this._yEase && ng(v, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              this._time !== h &&
              this._initted &&
              ((this._lock = l = 1),
              (this.render(ot(h * y), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if ($0(this, c ? i : d, l, o, f)) return (this._tTime = 0), this;
          if (a !== this._time && !(l && this.vars.repeatRefresh && y !== w))
            return this;
          if (u !== this._dur) return this.render(i, o, l);
        }
        if (
          ((this._tTime = f),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = p = (S || this._ease)(d / u)),
          this._from && (this.ratio = p = 1 - p),
          d && !a && !o && !y && (Yt(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (g = this._pt; g; ) g.r(p, g.d), (g = g._next);
        (v && v.render(i < 0 ? i : v._dur * v._ease(d / this._dur), o, l)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !o &&
            (c && hc(this, i, o, l), Yt(this, "onUpdate")),
          this._repeat &&
            y !== w &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            Yt(this, "onRepeat"),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (c && !this._onUpdate && hc(this, i, !0, !0),
            (i || !u) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Ir(this, 1),
            !o &&
              !(c && !a) &&
              (f || a || m) &&
              (Yt(this, f === s ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < s && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, o, l, a, s) {
      Cl || Ht.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ff(this, u),
        (c = this._ease(u / this._dur)),
        ww(this, i, o, l, a, c, u, s)
          ? this.resetTo(i, o, l, a, 1)
          : (ws(this, 0),
            this.parent ||
              b0(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, o) {
      if ((o === void 0 && (o = "all"), !i && (!o || o === "all")))
        return (this._lazy = this._pt = 0), this.parent ? jo(this) : this;
      if (this.timeline) {
        var l = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, o, Sr && Sr.vars.overwrite !== !0)
            ._first || jo(this),
          this.parent &&
            l !== this.timeline.totalDuration() &&
            so(this, (this._dur * this.timeline._tDur) / l, 0, 1),
          this
        );
      }
      var a = this._targets,
        s = i ? cn(i) : a,
        u = this._ptLookup,
        c = this._pt,
        f,
        d,
        g,
        y,
        h,
        w,
        m;
      if ((!o || o === "all") && q_(a, s))
        return o === "all" && (this._pt = 0), jo(this);
      for (
        f = this._op = this._op || [],
          o !== "all" &&
            (at(o) &&
              ((h = {}),
              Ft(o, function (p) {
                return (h[p] = 1);
              }),
              (o = h)),
            (o = xw(a, o))),
          m = a.length;
        m--;

      )
        if (~s.indexOf(a[m])) {
          (d = u[m]),
            o === "all"
              ? ((f[m] = o), (y = d), (g = {}))
              : ((g = f[m] = f[m] || {}), (y = o));
          for (h in y)
            (w = d && d[h]),
              w &&
                ((!("kill" in w.d) || w.d.kill(h) === !0) && ys(this, w, "_pt"),
                delete d[h]),
              g !== "all" && (g[h] = 1);
        }
      return this._initted && !this._pt && c && jo(this), this;
    }),
    (e.to = function (i, o) {
      return new e(i, o, arguments[2]);
    }),
    (e.from = function (i, o) {
      return qo(1, arguments);
    }),
    (e.delayedCall = function (i, o, l, a) {
      return new e(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: l,
        onReverseCompleteParams: l,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, o, l) {
      return qo(2, arguments);
    }),
    (e.set = function (i, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o);
    }),
    (e.killTweensOf = function (i, o, l) {
      return Fe.killTweensOf(i, o, l);
    }),
    e
  );
})(kl);
pn(Ze.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ft("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Ze[t] = function () {
    var e = new Et(),
      n = mc.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var If = function (e, n, r) {
    return (e[n] = r);
  },
  sg = function (e, n, r) {
    return e[n](r);
  },
  Ew = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  Cw = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  jf = function (e, n) {
    return Ve(e[n]) ? sg : Rf(e[n]) && e.setAttribute ? Cw : If;
  },
  ug = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  kw = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  cg = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  bf = function (e, n) {
    for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  Tw = function (e, n, r, i) {
    for (var o = this._pt, l; o; )
      (l = o._next), o.p === i && o.modifier(e, n, r), (o = l);
  },
  Pw = function (e) {
    for (var n = this._pt, r, i; n; )
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? ys(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  Rw = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  fg = function (e) {
    for (var n = e._pt, r, i, o, l; n; ) {
      for (r = n._next, i = o; i && i.pr > n.pr; ) i = i._next;
      (n._prev = i ? i._prev : l) ? (n._prev._next = n) : (o = n),
        (n._next = i) ? (i._prev = n) : (l = n),
        (n = r);
    }
    e._pt = o;
  },
  It = (function () {
    function t(n, r, i, o, l, a, s, u, c) {
      (this.t = r),
        (this.s = o),
        (this.c = l),
        (this.p = i),
        (this.r = a || ug),
        (this.d = s || this),
        (this.set = u || If),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = Rw),
          (this.m = r),
          (this.mt = o),
          (this.tween = i);
      }),
      t
    );
  })();
Ft(
  Of +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Df[t] = 1);
  }
);
Xt.TweenMax = Xt.TweenLite = Ze;
Xt.TimelineLite = Xt.TimelineMax = Et;
Fe = new Et({
  sortChildren: !1,
  defaults: lo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Qt.stringFilter = eg;
var si = [],
  _a = {},
  Nw = [],
  kh = 0,
  Lw = 0,
  nu = function (e) {
    return (_a[e] || Nw).map(function (n) {
      return n();
    });
  },
  _c = function () {
    var e = Date.now(),
      n = [];
    e - kh > 2 &&
      (nu("matchMediaInit"),
      si.forEach(function (r) {
        var i = r.queries,
          o = r.conditions,
          l,
          a,
          s,
          u;
        for (a in i)
          (l = On.matchMedia(i[a]).matches),
            l && (s = 1),
            l !== o[a] && ((o[a] = l), (u = 1));
        u && (r.revert(), s && n.push(r));
      }),
      nu("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (kh = e),
      nu("matchMedia"));
  },
  dg = (function () {
    function t(n, r) {
      (this.selector = r && gc(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Lw++),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        Ve(r) && ((o = i), (i = r), (r = Ve));
        var l = this,
          a = function () {
            var u = De,
              c = l.selector,
              f;
            return (
              u && u !== l && u.data.push(l),
              o && (l.selector = gc(o)),
              (De = l),
              (f = i.apply(l, arguments)),
              Ve(f) && l._r.push(f),
              (De = u),
              (l.selector = c),
              (l.isReverted = !1),
              f
            );
          };
        return (
          (l.last = a),
          r === Ve
            ? a(l, function (s) {
                return l.add(null, s);
              })
            : r
            ? (l[r] = a)
            : a
        );
      }),
      (e.ignore = function (r) {
        var i = De;
        (De = null), r(this), (De = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof Ze &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var o = this;
        if (
          (r
            ? (function () {
                for (var a = o.getTweens(), s = o.data.length, u; s--; )
                  (u = o.data[s]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return a.splice(a.indexOf(c), 1);
                      }));
                for (
                  a
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, f) {
                      return f.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(r);
                    }),
                    s = o.data.length;
                  s--;

                )
                  (u = o.data[s]),
                    u instanceof Et
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ze) && u.revert && u.revert(r);
                o._r.forEach(function (c) {
                  return c(r, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          i)
        )
          for (var l = si.length; l--; )
            si[l].id === this.id && si.splice(l, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  Mw = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n), De && De.data.push(this);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        Un(r) || (r = { matches: r });
        var l = new dg(0, o || this.scope),
          a = (l.conditions = {}),
          s,
          u,
          c;
        De && !l.selector && (l.selector = De.selector),
          this.contexts.push(l),
          (i = l.add("onMatch", i)),
          (l.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((s = On.matchMedia(r[u])),
              s &&
                (si.indexOf(l) < 0 && si.push(l),
                (a[u] = s.matches) && (c = 1),
                s.addListener
                  ? s.addListener(_c)
                  : s.addEventListener("change", _c)));
        return (
          c &&
            i(l, function (f) {
              return l.add(null, f);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  Xa = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return q0(i);
      });
    },
    timeline: function (e) {
      return new Et(e);
    },
    getTweensOf: function (e, n) {
      return Fe.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      at(e) && (e = cn(e)[0]);
      var o = oi(e || {}).get,
        l = r ? j0 : I0;
      return (
        r === "native" && (r = ""),
        e &&
          (n
            ? l(((Vt[n] && Vt[n].get) || o)(e, n, r, i))
            : function (a, s, u) {
                return l(((Vt[a] && Vt[a].get) || o)(e, a, s, u));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = cn(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return bt.quickSetter(c, n, r);
          }),
          o = i.length;
        return function (c) {
          for (var f = o; f--; ) i[f](c);
        };
      }
      e = e[0] || {};
      var l = Vt[n],
        a = oi(e),
        s = (a.harness && (a.harness.aliases || {})[n]) || n,
        u = l
          ? function (c) {
              var f = new l();
              ($i._pt = 0),
                f.init(e, r ? c + r : c, $i, 0, [e]),
                f.render(1, f),
                $i._pt && bf(1, $i);
            }
          : a.set(e, s);
      return l
        ? u
        : function (c) {
            return u(e, s, r ? c + r : c, a, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        o = bt.to(
          e,
          mi(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        l = function (s, u, c) {
          return o.resetTo(n, s, u, c);
        };
      return (l.tween = o), l;
    },
    isTweening: function (e) {
      return Fe.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = ai(e.ease, lo.ease)), wh(lo, e || {});
    },
    config: function (e) {
      return wh(Qt, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        o = e.defaults,
        l = e.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !Vt[a] && !Xt[a] && xl(n + " effect requires " + a + " plugin.")
        );
      }),
        (Zs[n] = function (a, s, u) {
          return r(cn(a), pn(s || {}, o), u);
        }),
        l &&
          (Et.prototype[n] = function (a, s, u) {
            return this.add(Zs[n](a, Un(s) ? s : (u = s) && {}, this), u);
          });
    },
    registerEase: function (e, n) {
      he[e] = ai(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? ai(e, n) : he;
    },
    getById: function (e) {
      return Fe.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new Et(e),
        i,
        o;
      for (
        r.smoothChildTiming = At(e.smoothChildTiming),
          Fe.remove(r),
          r._dp = 0,
          r._time = r._tTime = Fe._time,
          i = Fe._first;
        i;

      )
        (o = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof Ze &&
              i.vars.onComplete === i._targets[0]
            )) &&
            An(r, i, i._start - i._delay),
          (i = o);
      return An(Fe, r, 0), r;
    },
    context: function (e, n) {
      return e ? new dg(e, n) : De;
    },
    matchMedia: function (e) {
      return new Mw(e);
    },
    matchMediaRefresh: function () {
      return (
        si.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || _c()
      );
    },
    addEventListener: function (e, n) {
      var r = _a[e] || (_a[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = _a[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: uw,
      wrapYoyo: cw,
      distribute: W0,
      random: G0,
      snap: Y0,
      normalize: sw,
      getUnit: mt,
      clamp: iw,
      splitColor: Z0,
      toArray: cn,
      selector: gc,
      mapRange: K0,
      pipe: lw,
      unitize: aw,
      interpolate: fw,
      shuffle: H0,
    },
    install: D0,
    effects: Zs,
    ticker: Ht,
    updateRoot: Et.updateRoot,
    plugins: Vt,
    globalTimeline: Fe,
    core: {
      PropTween: It,
      globals: O0,
      Tween: Ze,
      Timeline: Et,
      Animation: kl,
      getCache: oi,
      _removeLinkedListItem: ys,
      reverting: function () {
        return gt;
      },
      context: function (e) {
        return e && De && (De.data.push(e), (e._ctx = De)), De;
      },
      suppressOverwrites: function (e) {
        return (Pf = e);
      },
    },
  };
Ft("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Xa[t] = Ze[t]);
});
Ht.add(Et.updateRoot);
$i = Xa.to({}, { duration: 0 });
var Dw = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  Ow = function (e, n) {
    var r = e._targets,
      i,
      o,
      l;
    for (i in n)
      for (o = r.length; o--; )
        (l = e._ptLookup[o][i]),
          l &&
            (l = l.d) &&
            (l._pt && (l = Dw(l, i)),
            l && l.modifier && l.modifier(n[i], e, r[o], i));
  },
  ru = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, o, l) {
        l._onInit = function (a) {
          var s, u;
          if (
            (at(o) &&
              ((s = {}),
              Ft(o, function (c) {
                return (s[c] = 1);
              }),
              (o = s)),
            n)
          ) {
            s = {};
            for (u in o) s[u] = n(o[u]);
            o = s;
          }
          Ow(a, o);
        };
      },
    };
  },
  bt =
    Xa.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, o) {
          var l, a, s;
          this.tween = r;
          for (l in n)
            (s = e.getAttribute(l) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (s || 0) + "",
                n[l],
                i,
                o,
                0,
                0,
                l
              )),
              (a.op = l),
              (a.b = s),
              this._props.push(l);
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            gt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      ru("roundProps", vc),
      ru("modifiers"),
      ru("snap", Y0)
    ) || Xa;
Ze.version = Et.version = bt.version = "3.12.5";
M0 = 1;
Nf() && uo();
he.Power0;
he.Power1;
he.Power2;
he.Power3;
he.Power4;
he.Linear;
he.Quad;
he.Cubic;
he.Quart;
he.Quint;
he.Strong;
he.Elastic;
he.Back;
he.SteppedEase;
he.Bounce;
he.Sine;
he.Expo;
he.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Th,
  Er,
  Xi,
  Uf,
  ni,
  Ph,
  Bf,
  zw = function () {
    return typeof window < "u";
  },
  ar = {},
  Kr = 180 / Math.PI,
  qi = Math.PI / 180,
  Ti = Math.atan2,
  Rh = 1e8,
  $f = /([A-Z])/g,
  Aw = /(left|right|width|margin|padding|x)/i,
  Fw = /[\s,\(]\S/,
  Fn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  wc = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  Iw = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  jw = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  bw = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  hg = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  pg = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  Uw = function (e, n, r) {
    return (e.style[n] = r);
  },
  Bw = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  $w = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  Vw = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  Hw = function (e, n, r, i, o) {
    var l = e._gsap;
    (l.scaleX = l.scaleY = r), l.renderTransform(o, l);
  },
  Ww = function (e, n, r, i, o) {
    var l = e._gsap;
    (l[n] = r), l.renderTransform(o, l);
  },
  Ie = "transform",
  jt = Ie + "Origin",
  Yw = function t(e, n) {
    var r = this,
      i = this.target,
      o = i.style,
      l = i._gsap;
    if (e in ar && o) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Fn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (r.tfm[a] = qn(i, a));
              })
            : (this.tfm[e] = l.x ? l[e] : qn(i, e)),
          e === jt && (this.tfm.zOrigin = l.zOrigin);
      else
        return Fn.transform.split(",").forEach(function (a) {
          return t.call(r, a, n);
        });
      if (this.props.indexOf(Ie) >= 0) return;
      l.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(jt, n, "")),
        (e = Ie);
    }
    (o || n) && this.props.push(e, n, o[e]);
  },
  mg = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Gw = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      o,
      l;
    for (o = 0; o < e.length; o += 3)
      e[o + 1]
        ? (n[e[o]] = e[o + 2])
        : e[o + 2]
        ? (r[e[o]] = e[o + 2])
        : r.removeProperty(
            e[o].substr(0, 2) === "--"
              ? e[o]
              : e[o].replace($f, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (l in this.tfm) i[l] = this.tfm[l];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (o = Bf()),
        (!o || !o.isStart) &&
          !r[Ie] &&
          (mg(r),
          i.zOrigin &&
            r[jt] &&
            ((r[jt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  gg = function (e, n) {
    var r = { target: e, props: [], revert: Gw, save: Yw };
    return (
      e._gsap || bt.core.getCache(e),
      n &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  vg,
  xc = function (e, n) {
    var r = Er.createElementNS
      ? Er.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Er.createElement(e);
    return r && r.style ? r : Er.createElement(e);
  },
  bn = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace($f, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, co(n) || n, 1)) ||
      ""
    );
  },
  Nh = "O,Moz,ms,Ms,Webkit".split(","),
  co = function (e, n, r) {
    var i = n || ni,
      o = i.style,
      l = 5;
    if (e in o && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      l-- && !(Nh[l] + e in o);

    );
    return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? Nh[l] : "") + e;
  },
  Sc = function () {
    zw() &&
      window.document &&
      ((Th = window),
      (Er = Th.document),
      (Xi = Er.documentElement),
      (ni = xc("div") || { style: {} }),
      xc("div"),
      (Ie = co(Ie)),
      (jt = Ie + "Origin"),
      (ni.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (vg = !!co("perspective")),
      (Bf = bt.core.reverting),
      (Uf = 1));
  },
  iu = function t(e) {
    var n = xc(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText,
      l;
    if (
      (Xi.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (l = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch {}
    else this._gsapBBox && (l = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      Xi.removeChild(n),
      (this.style.cssText = o),
      l
    );
  },
  Lh = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  yg = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = iu.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === iu || (n = iu.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +Lh(e, ["x", "cx", "x1"]) || 0,
            y: +Lh(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  _g = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && yg(e));
  },
  gi = function (e, n) {
    if (n) {
      var r = e.style,
        i;
      n in ar && n !== jt && (n = Ie),
        r.removeProperty
          ? ((i = n.substr(0, 2)),
            (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
            r.removeProperty(
              i === "--" ? n : n.replace($f, "-$1").toLowerCase()
            ))
          : r.removeAttribute(n);
    }
  },
  Cr = function (e, n, r, i, o, l) {
    var a = new It(e._pt, n, r, 0, 1, l ? pg : hg);
    return (e._pt = a), (a.b = i), (a.e = o), e._props.push(r), a;
  },
  Mh = { deg: 1, rad: 1, turn: 1 },
  Qw = { grid: 1, flex: 1 },
  jr = function t(e, n, r, i) {
    var o = parseFloat(r) || 0,
      l = (r + "").trim().substr((o + "").length) || "px",
      a = ni.style,
      s = Aw.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (s ? "Width" : "Height"),
      f = 100,
      d = i === "px",
      g = i === "%",
      y,
      h,
      w,
      m;
    if (i === l || !o || Mh[i] || Mh[l]) return o;
    if (
      (l !== "px" && !d && (o = t(e, n, r, "px")),
      (m = e.getCTM && _g(e)),
      (g || l === "%") && (ar[n] || ~n.indexOf("adius")))
    )
      return (
        (y = m ? e.getBBox()[s ? "width" : "height"] : e[c]),
        Qe(g ? (o / y) * f : (o / 100) * y)
      );
    if (
      ((a[s ? "width" : "height"] = f + (d ? l : i)),
      (h =
        ~n.indexOf("adius") || (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      m && (h = (e.ownerSVGElement || {}).parentNode),
      (!h || h === Er || !h.appendChild) && (h = Er.body),
      (w = h._gsap),
      w && g && w.width && s && w.time === Ht.time && !w.uncache)
    )
      return Qe((o / w.width) * f);
    if (g && (n === "height" || n === "width")) {
      var p = e.style[n];
      (e.style[n] = f + i), (y = e[c]), p ? (e.style[n] = p) : gi(e, n);
    } else
      (g || l === "%") &&
        !Qw[bn(h, "display")] &&
        (a.position = bn(e, "position")),
        h === e && (a.position = "static"),
        h.appendChild(ni),
        (y = ni[c]),
        h.removeChild(ni),
        (a.position = "absolute");
    return (
      s && g && ((w = oi(h)), (w.time = Ht.time), (w.width = h[c])),
      Qe(d ? (y * o) / f : y && o ? (f / y) * o : 0)
    );
  },
  qn = function (e, n, r, i) {
    var o;
    return (
      Uf || Sc(),
      n in Fn &&
        n !== "transform" &&
        ((n = Fn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      ar[n] && n !== "transform"
        ? ((o = Pl(e, i)),
          (o =
            n !== "transformOrigin"
              ? o[n]
              : o.svg
              ? o.origin
              : Za(bn(e, jt)) + " " + o.zOrigin + "px"))
        : ((o = e.style[n]),
          (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) &&
            (o =
              (qa[n] && qa[n](e, n, r)) ||
              bn(e, n) ||
              A0(e, n) ||
              (n === "opacity" ? 1 : 0))),
      r && !~(o + "").trim().indexOf(" ") ? jr(e, n, o, r) + r : o
    );
  },
  Kw = function (e, n, r, i) {
    if (!r || r === "none") {
      var o = co(n, e, 1),
        l = o && bn(e, o, 1);
      l && l !== r
        ? ((n = o), (r = l))
        : n === "borderColor" && (r = bn(e, "borderTopColor"));
    }
    var a = new It(this._pt, e.style, n, 0, 1, cg),
      s = 0,
      u = 0,
      c,
      f,
      d,
      g,
      y,
      h,
      w,
      m,
      p,
      v,
      S,
      E;
    if (
      ((a.b = r),
      (a.e = i),
      (r += ""),
      (i += ""),
      i === "auto" &&
        ((h = e.style[n]),
        (e.style[n] = i),
        (i = bn(e, n) || i),
        h ? (e.style[n] = h) : gi(e, n)),
      (c = [r, i]),
      eg(c),
      (r = c[0]),
      (i = c[1]),
      (d = r.match(Bi) || []),
      (E = i.match(Bi) || []),
      E.length)
    ) {
      for (; (f = Bi.exec(i)); )
        (w = f[0]),
          (p = i.substring(s, f.index)),
          y
            ? (y = (y + 1) % 5)
            : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (y = 1),
          w !== (h = d[u++] || "") &&
            ((g = parseFloat(h) || 0),
            (S = h.substr((g + "").length)),
            w.charAt(1) === "=" && (w = Ki(g, w) + S),
            (m = parseFloat(w)),
            (v = w.substr((m + "").length)),
            (s = Bi.lastIndex - v.length),
            v ||
              ((v = v || Qt.units[n] || S),
              s === i.length && ((i += v), (a.e += v))),
            S !== v && (g = jr(e, n, h, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: p || u === 1 ? p : ",",
              s: g,
              c: m - g,
              m: (y && y < 4) || n === "zIndex" ? Math.round : 0,
            }));
      a.c = s < i.length ? i.substring(s, i.length) : "";
    } else a.r = n === "display" && i === "none" ? pg : hg;
    return N0.test(i) && (a.e = 0), (this._pt = a), a;
  },
  Dh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Xw = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (n[0] = Dh[r] || r),
      (n[1] = Dh[i] || i),
      n.join(" ")
    );
  },
  qw = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        o = n.u,
        l = r._gsap,
        a,
        s,
        u;
      if (o === "all" || o === !0) (i.cssText = ""), (s = 1);
      else
        for (o = o.split(","), u = o.length; --u > -1; )
          (a = o[u]),
            ar[a] && ((s = 1), (a = a === "transformOrigin" ? jt : Ie)),
            gi(r, a);
      s &&
        (gi(r, Ie),
        l &&
          (l.svg && r.removeAttribute("transform"),
          Pl(r, 1),
          (l.uncache = 1),
          mg(i)));
    }
  },
  qa = {
    clearProps: function (e, n, r, i, o) {
      if (o.data !== "isFromStart") {
        var l = (e._pt = new It(e._pt, n, r, 0, 0, qw));
        return (l.u = i), (l.pr = -10), (l.tween = o), e._props.push(r), 1;
      }
    },
  },
  Tl = [1, 0, 0, 1, 0, 0],
  wg = {},
  xg = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Oh = function (e) {
    var n = bn(e, Ie);
    return xg(n) ? Tl : n.substr(7).match(R0).map(Qe);
  },
  Vf = function (e, n) {
    var r = e._gsap || oi(e),
      i = e.style,
      o = Oh(e),
      l,
      a,
      s,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (o = [s.a, s.b, s.c, s.d, s.e, s.f]),
        o.join(",") === "1,0,0,1,0,0" ? Tl : o)
      : (o === Tl &&
          !e.offsetParent &&
          e !== Xi &&
          !r.svg &&
          ((s = i.display),
          (i.display = "block"),
          (l = e.parentNode),
          (!l || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), Xi.appendChild(e)),
          (o = Oh(e)),
          s ? (i.display = s) : gi(e, "display"),
          u &&
            (a
              ? l.insertBefore(e, a)
              : l
              ? l.appendChild(e)
              : Xi.removeChild(e))),
        n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  Ec = function (e, n, r, i, o, l) {
    var a = e._gsap,
      s = o || Vf(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      f = a.xOffset || 0,
      d = a.yOffset || 0,
      g = s[0],
      y = s[1],
      h = s[2],
      w = s[3],
      m = s[4],
      p = s[5],
      v = n.split(" "),
      S = parseFloat(v[0]) || 0,
      E = parseFloat(v[1]) || 0,
      _,
      C,
      T,
      R;
    r
      ? s !== Tl &&
        (C = g * w - y * h) &&
        ((T = S * (w / C) + E * (-h / C) + (h * p - w * m) / C),
        (R = S * (-y / C) + E * (g / C) - (g * p - y * m) / C),
        (S = T),
        (E = R))
      : ((_ = yg(e)),
        (S = _.x + (~v[0].indexOf("%") ? (S / 100) * _.width : S)),
        (E = _.y + (~(v[1] || v[0]).indexOf("%") ? (E / 100) * _.height : E))),
      i || (i !== !1 && a.smooth)
        ? ((m = S - u),
          (p = E - c),
          (a.xOffset = f + (m * g + p * h) - m),
          (a.yOffset = d + (m * y + p * w) - p))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = S),
      (a.yOrigin = E),
      (a.smooth = !!i),
      (a.origin = n),
      (a.originIsAbsolute = !!r),
      (e.style[jt] = "0px 0px"),
      l &&
        (Cr(l, a, "xOrigin", u, S),
        Cr(l, a, "yOrigin", c, E),
        Cr(l, a, "xOffset", f, a.xOffset),
        Cr(l, a, "yOffset", d, a.yOffset)),
      e.setAttribute("data-svg-origin", S + " " + E);
  },
  Pl = function (e, n) {
    var r = e._gsap || new ig(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      o = r.scaleX < 0,
      l = "px",
      a = "deg",
      s = getComputedStyle(e),
      u = bn(e, jt) || "0",
      c,
      f,
      d,
      g,
      y,
      h,
      w,
      m,
      p,
      v,
      S,
      E,
      _,
      C,
      T,
      R,
      O,
      b,
      K,
      Q,
      X,
      ae,
      ie,
      Z,
      D,
      $,
      j,
      H,
      U,
      de,
      G,
      pe;
    return (
      (c = f = d = h = w = m = p = v = S = 0),
      (g = y = 1),
      (r.svg = !!(e.getCTM && _g(e))),
      s.translate &&
        ((s.translate !== "none" ||
          s.scale !== "none" ||
          s.rotate !== "none") &&
          (i[Ie] =
            (s.translate !== "none"
              ? "translate3d(" +
                (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (s.rotate !== "none" ? "rotate(" + s.rotate + ") " : "") +
            (s.scale !== "none"
              ? "scale(" + s.scale.split(" ").join(",") + ") "
              : "") +
            (s[Ie] !== "none" ? s[Ie] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (C = Vf(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((D = e.getBBox()),
            (u = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px"),
            (Z = ""))
          : (Z = !n && e.getAttribute("data-svg-origin")),
        Ec(e, Z || u, !!Z || r.originIsAbsolute, r.smooth !== !1, C)),
      (E = r.xOrigin || 0),
      (_ = r.yOrigin || 0),
      C !== Tl &&
        ((b = C[0]),
        (K = C[1]),
        (Q = C[2]),
        (X = C[3]),
        (c = ae = C[4]),
        (f = ie = C[5]),
        C.length === 6
          ? ((g = Math.sqrt(b * b + K * K)),
            (y = Math.sqrt(X * X + Q * Q)),
            (h = b || K ? Ti(K, b) * Kr : 0),
            (p = Q || X ? Ti(Q, X) * Kr + h : 0),
            p && (y *= Math.abs(Math.cos(p * qi))),
            r.svg && ((c -= E - (E * b + _ * Q)), (f -= _ - (E * K + _ * X))))
          : ((pe = C[6]),
            (de = C[7]),
            (j = C[8]),
            (H = C[9]),
            (U = C[10]),
            (G = C[11]),
            (c = C[12]),
            (f = C[13]),
            (d = C[14]),
            (T = Ti(pe, U)),
            (w = T * Kr),
            T &&
              ((R = Math.cos(-T)),
              (O = Math.sin(-T)),
              (Z = ae * R + j * O),
              (D = ie * R + H * O),
              ($ = pe * R + U * O),
              (j = ae * -O + j * R),
              (H = ie * -O + H * R),
              (U = pe * -O + U * R),
              (G = de * -O + G * R),
              (ae = Z),
              (ie = D),
              (pe = $)),
            (T = Ti(-Q, U)),
            (m = T * Kr),
            T &&
              ((R = Math.cos(-T)),
              (O = Math.sin(-T)),
              (Z = b * R - j * O),
              (D = K * R - H * O),
              ($ = Q * R - U * O),
              (G = X * O + G * R),
              (b = Z),
              (K = D),
              (Q = $)),
            (T = Ti(K, b)),
            (h = T * Kr),
            T &&
              ((R = Math.cos(T)),
              (O = Math.sin(T)),
              (Z = b * R + K * O),
              (D = ae * R + ie * O),
              (K = K * R - b * O),
              (ie = ie * R - ae * O),
              (b = Z),
              (ae = D)),
            w &&
              Math.abs(w) + Math.abs(h) > 359.9 &&
              ((w = h = 0), (m = 180 - m)),
            (g = Qe(Math.sqrt(b * b + K * K + Q * Q))),
            (y = Qe(Math.sqrt(ie * ie + pe * pe))),
            (T = Ti(ae, ie)),
            (p = Math.abs(T) > 2e-4 ? T * Kr : 0),
            (S = G ? 1 / (G < 0 ? -G : G) : 0)),
        r.svg &&
          ((Z = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !xg(bn(e, Ie))),
          Z && e.setAttribute("transform", Z))),
      Math.abs(p) > 90 &&
        Math.abs(p) < 270 &&
        (o
          ? ((g *= -1), (p += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((y *= -1), (p += p <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        l),
      (r.y =
        f -
        ((r.yPercent =
          f &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        l),
      (r.z = d + l),
      (r.scaleX = Qe(g)),
      (r.scaleY = Qe(y)),
      (r.rotation = Qe(h) + a),
      (r.rotationX = Qe(w) + a),
      (r.rotationY = Qe(m) + a),
      (r.skewX = p + a),
      (r.skewY = v + a),
      (r.transformPerspective = S + l),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
        (i[jt] = Za(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = Qt.force3D),
      (r.renderTransform = r.svg ? Jw : vg ? Sg : Zw),
      (r.uncache = 0),
      r
    );
  },
  Za = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  ou = function (e, n, r) {
    var i = mt(n);
    return Qe(parseFloat(n) + parseFloat(jr(e, "x", r + "px", i))) + i;
  },
  Zw = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      Sg(e, n);
  },
  Wr = "0deg",
  Lo = "0px",
  Yr = ") ",
  Sg = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      l = r.x,
      a = r.y,
      s = r.z,
      u = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      d = r.skewX,
      g = r.skewY,
      y = r.scaleX,
      h = r.scaleY,
      w = r.transformPerspective,
      m = r.force3D,
      p = r.target,
      v = r.zOrigin,
      S = "",
      E = (m === "auto" && e && e !== 1) || m === !0;
    if (v && (f !== Wr || c !== Wr)) {
      var _ = parseFloat(c) * qi,
        C = Math.sin(_),
        T = Math.cos(_),
        R;
      (_ = parseFloat(f) * qi),
        (R = Math.cos(_)),
        (l = ou(p, l, C * R * -v)),
        (a = ou(p, a, -Math.sin(_) * -v)),
        (s = ou(p, s, T * R * -v + v));
    }
    w !== Lo && (S += "perspective(" + w + Yr),
      (i || o) && (S += "translate(" + i + "%, " + o + "%) "),
      (E || l !== Lo || a !== Lo || s !== Lo) &&
        (S +=
          s !== Lo || E
            ? "translate3d(" + l + ", " + a + ", " + s + ") "
            : "translate(" + l + ", " + a + Yr),
      u !== Wr && (S += "rotate(" + u + Yr),
      c !== Wr && (S += "rotateY(" + c + Yr),
      f !== Wr && (S += "rotateX(" + f + Yr),
      (d !== Wr || g !== Wr) && (S += "skew(" + d + ", " + g + Yr),
      (y !== 1 || h !== 1) && (S += "scale(" + y + ", " + h + Yr),
      (p.style[Ie] = S || "translate(0, 0)");
  },
  Jw = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      l = r.x,
      a = r.y,
      s = r.rotation,
      u = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      d = r.scaleY,
      g = r.target,
      y = r.xOrigin,
      h = r.yOrigin,
      w = r.xOffset,
      m = r.yOffset,
      p = r.forceCSS,
      v = parseFloat(l),
      S = parseFloat(a),
      E,
      _,
      C,
      T,
      R;
    (s = parseFloat(s)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (s += c)),
      s || u
        ? ((s *= qi),
          (u *= qi),
          (E = Math.cos(s) * f),
          (_ = Math.sin(s) * f),
          (C = Math.sin(s - u) * -d),
          (T = Math.cos(s - u) * d),
          u &&
            ((c *= qi),
            (R = Math.tan(u - c)),
            (R = Math.sqrt(1 + R * R)),
            (C *= R),
            (T *= R),
            c &&
              ((R = Math.tan(c)),
              (R = Math.sqrt(1 + R * R)),
              (E *= R),
              (_ *= R))),
          (E = Qe(E)),
          (_ = Qe(_)),
          (C = Qe(C)),
          (T = Qe(T)))
        : ((E = f), (T = d), (_ = C = 0)),
      ((v && !~(l + "").indexOf("px")) || (S && !~(a + "").indexOf("px"))) &&
        ((v = jr(g, "x", l, "px")), (S = jr(g, "y", a, "px"))),
      (y || h || w || m) &&
        ((v = Qe(v + y - (y * E + h * C) + w)),
        (S = Qe(S + h - (y * _ + h * T) + m))),
      (i || o) &&
        ((R = g.getBBox()),
        (v = Qe(v + (i / 100) * R.width)),
        (S = Qe(S + (o / 100) * R.height))),
      (R =
        "matrix(" + E + "," + _ + "," + C + "," + T + "," + v + "," + S + ")"),
      g.setAttribute("transform", R),
      p && (g.style[Ie] = R);
  },
  ex = function (e, n, r, i, o) {
    var l = 360,
      a = at(o),
      s = parseFloat(o) * (a && ~o.indexOf("rad") ? Kr : 1),
      u = s - i,
      c = i + u + "deg",
      f,
      d;
    return (
      a &&
        ((f = o.split("_")[1]),
        f === "short" && ((u %= l), u !== u % (l / 2) && (u += u < 0 ? l : -l)),
        f === "cw" && u < 0
          ? (u = ((u + l * Rh) % l) - ~~(u / l) * l)
          : f === "ccw" && u > 0 && (u = ((u - l * Rh) % l) - ~~(u / l) * l)),
      (e._pt = d = new It(e._pt, n, r, i, u, Iw)),
      (d.e = c),
      (d.u = "deg"),
      e._props.push(r),
      d
    );
  },
  zh = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  tx = function (e, n, r) {
    var i = zh({}, r._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      l = r.style,
      a,
      s,
      u,
      c,
      f,
      d,
      g,
      y;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (l[Ie] = n),
        (a = Pl(r, 1)),
        gi(r, Ie),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Ie]),
        (l[Ie] = n),
        (a = Pl(r, 1)),
        (l[Ie] = u));
    for (s in ar)
      (u = i[s]),
        (c = a[s]),
        u !== c &&
          o.indexOf(s) < 0 &&
          ((g = mt(u)),
          (y = mt(c)),
          (f = g !== y ? jr(r, s, u, y) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new It(e._pt, a, s, f, d - f, wc)),
          (e._pt.u = y || 0),
          e._props.push(s));
    zh(a, i);
  };
Ft("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    o = "Left",
    l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (a) {
      return e < 2 ? t + a : "border" + a + t;
    });
  qa[e > 1 ? "border" + t : t] = function (a, s, u, c, f) {
    var d, g;
    if (arguments.length < 4)
      return (
        (d = l.map(function (y) {
          return qn(a, y, u);
        })),
        (g = d.join(" ")),
        g.split(d[0]).length === 5 ? d[0] : g
      );
    (d = (c + "").split(" ")),
      (g = {}),
      l.forEach(function (y, h) {
        return (g[y] = d[h] = d[h] || d[((h - 1) / 2) | 0]);
      }),
      a.init(s, g, f);
  };
});
var Eg = {
  name: "css",
  register: Sc,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, o) {
    var l = this._props,
      a = e.style,
      s = r.vars.startAt,
      u,
      c,
      f,
      d,
      g,
      y,
      h,
      w,
      m,
      p,
      v,
      S,
      E,
      _,
      C,
      T;
    Uf || Sc(),
      (this.styles = this.styles || gg(e)),
      (T = this.styles.props),
      (this.tween = r);
    for (h in n)
      if (h !== "autoRound" && ((c = n[h]), !(Vt[h] && og(h, n, r, i, e, o)))) {
        if (
          ((g = typeof c),
          (y = qa[h]),
          g === "function" && ((c = c.call(r, i, e, o)), (g = typeof c)),
          g === "string" && ~c.indexOf("random(") && (c = El(c)),
          y)
        )
          y(this, e, h, c, r) && (C = 1);
        else if (h.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
            (c += ""),
            (zr.lastIndex = 0),
            zr.test(u) || ((w = mt(u)), (m = mt(c))),
            m ? w !== m && (u = jr(e, h, u, m) + m) : w && (c += w),
            this.add(a, "setProperty", u, c, i, o, 0, 0, h),
            l.push(h),
            T.push(h, 0, a[h]);
        else if (g !== "undefined") {
          if (
            (s && h in s
              ? ((u = typeof s[h] == "function" ? s[h].call(r, i, e, o) : s[h]),
                at(u) && ~u.indexOf("random(") && (u = El(u)),
                mt(u + "") ||
                  u === "auto" ||
                  (u += Qt.units[h] || mt(qn(e, h)) || ""),
                (u + "").charAt(1) === "=" && (u = qn(e, h)))
              : (u = qn(e, h)),
            (d = parseFloat(u)),
            (p = g === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            p && (c = c.substr(2)),
            (f = parseFloat(c)),
            h in Fn &&
              (h === "autoAlpha" &&
                (d === 1 && qn(e, "visibility") === "hidden" && f && (d = 0),
                T.push("visibility", 0, a.visibility),
                Cr(
                  this,
                  a,
                  "visibility",
                  d ? "inherit" : "hidden",
                  f ? "inherit" : "hidden",
                  !f
                )),
              h !== "scale" &&
                h !== "transform" &&
                ((h = Fn[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
            (v = h in ar),
            v)
          ) {
            if (
              (this.styles.save(h),
              S ||
                ((E = e._gsap),
                (E.renderTransform && !n.parseTransform) ||
                  Pl(e, n.parseTransform),
                (_ = n.smoothOrigin !== !1 && E.smooth),
                (S = this._pt =
                  new It(this._pt, a, Ie, 0, 1, E.renderTransform, E, 0, -1)),
                (S.dep = 1)),
              h === "scale")
            )
              (this._pt = new It(
                this._pt,
                E,
                "scaleY",
                E.scaleY,
                (p ? Ki(E.scaleY, p + f) : f) - E.scaleY || 0,
                wc
              )),
                (this._pt.u = 0),
                l.push("scaleY", h),
                (h += "X");
            else if (h === "transformOrigin") {
              T.push(jt, 0, a[jt]),
                (c = Xw(c)),
                E.svg
                  ? Ec(e, c, 0, _, 0, this)
                  : ((m = parseFloat(c.split(" ")[2]) || 0),
                    m !== E.zOrigin && Cr(this, E, "zOrigin", E.zOrigin, m),
                    Cr(this, a, h, Za(u), Za(c)));
              continue;
            } else if (h === "svgOrigin") {
              Ec(e, c, 1, _, 0, this);
              continue;
            } else if (h in wg) {
              ex(this, E, h, d, p ? Ki(d, p + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              Cr(this, E, "smooth", E.smooth, c);
              continue;
            } else if (h === "force3D") {
              E[h] = c;
              continue;
            } else if (h === "transform") {
              tx(this, c, e);
              continue;
            }
          } else h in a || (h = co(h) || h);
          if (v || ((f || f === 0) && (d || d === 0) && !Fw.test(c) && h in a))
            (w = (u + "").substr((d + "").length)),
              f || (f = 0),
              (m = mt(c) || (h in Qt.units ? Qt.units[h] : w)),
              w !== m && (d = jr(e, h, u, m)),
              (this._pt = new It(
                this._pt,
                v ? E : a,
                h,
                d,
                (p ? Ki(d, p + f) : f) - d,
                !v && (m === "px" || h === "zIndex") && n.autoRound !== !1
                  ? bw
                  : wc
              )),
              (this._pt.u = m || 0),
              w !== m && m !== "%" && ((this._pt.b = u), (this._pt.r = jw));
          else if (h in a) Kw.call(this, e, h, u, p ? p + c : c);
          else if (h in e) this.add(e, h, u || e[h], p ? p + c : c, i, o);
          else if (h !== "parseTransform") {
            Mf(h, c);
            continue;
          }
          v || (h in a ? T.push(h, 0, a[h]) : T.push(h, 1, u || e[h])),
            l.push(h);
        }
      }
    C && fg(this);
  },
  render: function (e, n) {
    if (n.tween._time || !Bf())
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: qn,
  aliases: Fn,
  getSetter: function (e, n, r) {
    var i = Fn[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in ar && n !== jt && (e._gsap.x || qn(e, "x"))
        ? r && Ph === r
          ? n === "scale"
            ? Vw
            : $w
          : (Ph = r || {}) && (n === "scale" ? Hw : Ww)
        : e.style && !Rf(e.style[n])
        ? Uw
        : ~n.indexOf("-")
        ? Bw
        : jf(e, n)
    );
  },
  core: { _removeProperty: gi, _getMatrix: Vf },
};
bt.utils.checkPrefix = co;
bt.core.getStyleSaver = gg;
(function (t, e, n, r) {
  var i = Ft(t + "," + e + "," + n, function (o) {
    ar[o] = 1;
  });
  Ft(e, function (o) {
    (Qt.units[o] = "deg"), (wg[o] = 1);
  }),
    (Fn[i[13]] = t + "," + e),
    Ft(r, function (o) {
      var l = o.split(":");
      Fn[l[1]] = i[l[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Ft(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    Qt.units[t] = "px";
  }
);
bt.registerPlugin(Eg);
var vi = bt.registerPlugin(Eg) || bt;
vi.core.Tween;
/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let Ah = typeof window < "u" ? L.useLayoutEffect : L.useEffect,
  Fh = (t) => t && !Array.isArray(t) && typeof t == "object",
  ea = [],
  nx = {},
  Cg = vi;
const yi = (t, e = ea) => {
  let n = nx;
  Fh(t)
    ? ((n = t), (t = null), (e = "dependencies" in n ? n.dependencies : ea))
    : Fh(e) && ((n = e), (e = "dependencies" in n ? n.dependencies : ea));
  let { scope: r, revertOnUpdate: i } = n,
    [o, l] = L.useState(!1);
  t &&
    typeof t != "function" &&
    console.warn("First parameter must be a function or config object");
  const a = Cg.context(() => {}, r),
    s = (f) => a.add(null, f),
    u = () => a.revert(),
    c = e && e.length && !i;
  return (
    Ah(() => {
      if ((t && a.add(t, r), !c || !o)) return u;
    }, e),
    c && Ah(() => (l(!0), u), ea),
    { context: a, contextSafe: s }
  );
};
yi.register = (t) => {
  Cg = t;
};
yi.headless = !0;
const rx = () => {
    const t = L.useRef();
    return (
      yi(
        () => {
          vi.from(".box", {
            opacity: 0,
            duration: 0.8,
            stagger: 0.4,
            ease: "power2.in",
          });
        },
        { scope: t }
      ),
      M.jsx("nav", {
        ref: t,
        className: "w-full",
        children: M.jsxs("div", {
          className: "box w-full flex justify-between items-center",
          children: [
            M.jsx(wl, {
              to: "",
              children: M.jsx("img", {
                src: ay,
                alt: "logo",
                height: 100,
                width: 200,
              }),
            }),
            M.jsxs(gl, {
              href: "https://github.com/nilaachandra/Colour_Picker",
              className:
                "hover:bg-white hover:text-blue-700 transition-all duration-500 border-blue-700 bg-blue-700 font-bold flex gap-2",
              children: [
                M.jsx(dy, { size: 24 }),
                M.jsx("span", { children: "Fork" }),
              ],
            }),
          ],
        }),
      })
    );
  },
  ix = () =>
    M.jsxs("footer", {
      className: "w-full mt-12",
      children: [
        M.jsxs("div", {
          className:
            "icons flex justify-center items-center gap-3 text-[#0611f2]",
          children: [
            M.jsx("a", {
              href: "https://twitter.com/nilaacodes",
              children: M.jsx(fy, { size: 30 }),
            }),
            M.jsx("a", { href: "", children: M.jsx(sy, { size: 30 }) }),
            M.jsx("a", {
              href: "https://github.com/nilaachandra",
              children: M.jsx(uy, { size: 30 }),
            }),
            M.jsx("a", {
              href: "https://www.instagram.com/niillaaa.a/",
              children: M.jsx(cy, { size: 30 }),
            }),
          ],
        }),
        M.jsxs("div", {
          className: "tags flex flex-col justify-center items-center",
          children: [
            M.jsxs("h1", {
              className: "",
              children: [
                M.jsx("span", { children: "©️2024" }),
                " ",
                M.jsx("span", {
                  className: "",
                  children: "ColorsByNilaa || All Rights Reserved",
                }),
                " ",
              ],
            }),
            M.jsx("p", {
              className: "",
              children: "Developed with ♥ Nilaa Laishram",
            }),
            M.jsxs("p", {
              className: "text-center",
              children: [
                "Wanna Support Me? ",
                M.jsx("a", {
                  href: "https://buymeacoffee.com/nilaacodes",
                  className: "text-[#0611f2]",
                  children: "Buy me a Coffee to support my Work!",
                }),
              ],
            }),
          ],
        }),
      ],
    });
var ox = "@vercel/speed-insights",
  lx = "1.0.10",
  ax = () => {
    window.si ||
      (window.si = function (...e) {
        (window.siq = window.siq || []).push(e);
      });
  };
function sx() {
  return typeof window < "u";
}
function ux() {
  try {
    const t = "production";
  } catch {}
  return "production";
}
function Ih() {
  return ux() === "development";
}
var kg = "https://va.vercel-scripts.com/v1/speed-insights",
  cx = `${kg}/script.js`,
  fx = `${kg}/script.debug.js`,
  dx = "/_vercel/speed-insights/script.js";
function hx(t = {}) {
  var e;
  if (!sx() || t.route === null) return null;
  ax();
  const r = !!t.dsn ? cx : dx,
    i = t.scriptSrc || (Ih() ? fx : r);
  if (document.head.querySelector(`script[src*="${i}"]`)) return null;
  t.beforeSend &&
    ((e = window.si) == null || e.call(window, "beforeSend", t.beforeSend));
  const o = document.createElement("script");
  return (
    (o.src = i),
    (o.defer = !0),
    (o.dataset.sdkn = ox + (t.framework ? `/${t.framework}` : "")),
    (o.dataset.sdkv = lx),
    t.sampleRate && (o.dataset.sampleRate = t.sampleRate.toString()),
    t.route && (o.dataset.route = t.route),
    t.endpoint && (o.dataset.endpoint = t.endpoint),
    t.dsn && (o.dataset.dsn = t.dsn),
    Ih() && t.debug === !1 && (o.dataset.debug = "false"),
    (o.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`
      );
    }),
    document.head.appendChild(o),
    {
      setRoute: (l) => {
        o.dataset.route = l ?? void 0;
      },
    }
  );
}
function px(t) {
  const e = L.useRef(null);
  return (
    L.useEffect(() => {
      if (e.current) t.route && e.current(t.route);
      else {
        const n = hx({ framework: t.framework || "react", ...t });
        n && (e.current = n.setRoute);
      }
    }, [t.route]),
    null
  );
}
var mx = "@vercel/analytics",
  gx = "1.2.2",
  vx = () => {
    window.va ||
      (window.va = function (...e) {
        (window.vaq = window.vaq || []).push(e);
      });
  };
function Tg() {
  return typeof window < "u";
}
function Pg() {
  try {
    const t = "production";
  } catch {}
  return "production";
}
function yx(t = "auto") {
  if (t === "auto") {
    window.vam = Pg();
    return;
  }
  window.vam = t;
}
function _x() {
  return (Tg() ? window.vam : Pg()) || "production";
}
function lu() {
  return _x() === "development";
}
var wx = "https://va.vercel-scripts.com/v1/script.debug.js",
  xx = "/_vercel/insights/script.js";
function Sx(t = { debug: !0 }) {
  var e;
  if (!Tg()) return;
  yx(t.mode),
    vx(),
    t.beforeSend &&
      ((e = window.va) == null || e.call(window, "beforeSend", t.beforeSend));
  const n = t.scriptSrc || (lu() ? wx : xx);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const r = document.createElement("script");
  (r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = mx + (t.framework ? `/${t.framework}` : "")),
    (r.dataset.sdkv = gx),
    t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
    t.endpoint && (r.dataset.endpoint = t.endpoint),
    t.dsn && (r.dataset.dsn = t.dsn),
    (r.onerror = () => {
      const i = lu()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${n}. ${i}`
      );
    }),
    lu() && t.debug === !1 && (r.dataset.debug = "false"),
    document.head.appendChild(r);
}
function Ex({ route: t, path: e }) {
  var n;
  (n = window.va) == null || n.call(window, "pageview", { route: t, path: e });
}
function Cx(t) {
  return (
    L.useEffect(() => {
      Sx({
        framework: t.framework || "react",
        ...(t.route !== void 0 && { disableAutoTrack: !0 }),
        ...t,
      });
    }, []),
    L.useEffect(() => {
      t.route && t.path && Ex({ route: t.route, path: t.path });
    }, [t.route, t.path]),
    null
  );
}
const kx = () =>
    M.jsx(M.Fragment, {
      children: M.jsxs("div", {
        className:
          "main px-[4vw] py-[2vw] m-0 flex flex-col justify-center items-center bg-[#FDFDFF]",
        children: [
          M.jsx(rx, {}),
          M.jsx(w_, {}),
          M.jsx(ix, {}),
          M.jsx(px, {}),
          M.jsx(Cx, {}),
        ],
      }),
    }),
  Tx = ["#f30a0a", "#0611f2", "#00fbfe", "#fef500", "#072401"],
  Px = (t) => {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1));
      [t[e], t[n]] = [t[n], t[e]];
    }
    return t;
  },
  Rx = () => {
    const [t, e] = L.useState([]);
    vi.registerPlugin(yi);
    const n = L.useRef();
    return (
      L.useEffect(() => {
        const r = () => {
          const i = Px([...Tx]);
          e(i), setTimeout(r, 3e3);
        };
        return r(), () => {};
      }, []),
      yi(
        () => {
          vi.from(".box", { opacity: 0, duration: 0.8, ease: "power2.in" });
        },
        { scope: n }
      ),
      M.jsx("div", {
        className: "w-full",
        ref: n,
        children: M.jsxs("div", {
          className:
            "box w-full flex lg:flex-row flex-col-reverse lg:mt-4 mt-8 min-h-[40vh] justify-between items-center",
          children: [
            M.jsxs("div", {
              className:
                "leftside lg:w-[45%] w-full flex flex-col justify-center items-center gap-3 lg:mt-0 mt-8",
              children: [
                M.jsxs("h1", {
                  className:
                    " poppins-extrabold lg:text-[4vw] text-[10vw] lg:leading-[4.5vw] leading-[11vw] text-center",
                  children: [
                    "The ",
                    M.jsx("span", {
                      className: "text-[#f30a0a]",
                      children: "Superfast",
                    }),
                    ",",
                    " ",
                    M.jsx("span", {
                      className: "text-[#0611f2]",
                      children: "Easy to Use",
                    }),
                    ",",
                    " ",
                    M.jsx("span", {
                      className: "text-[#00fbfe]",
                      children: "Lightweight",
                    }),
                    " and",
                    " ",
                    M.jsx("span", {
                      className: "text-[#fef500]",
                      children: "Minimal",
                    }),
                    " Color Picker",
                  ],
                }),
                M.jsx("p", {
                  className: "lg:text-[1.4vw] text-[6vw] text-center",
                  children:
                    "Create the color you like, pick it and use it on your CSS",
                }),
                M.jsx(wl, {
                  to: "color-picker",
                  className: "w-full flex justify-center items-center",
                  children: M.jsx(gl, {
                    className:
                      "lg:w-2/3 w-[85%] bg-[#0611f2] text-[white] border-[#0611f2] font-bold uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300",
                    children: "Color Picker",
                  }),
                }),
                M.jsx(wl, {
                  to: "gradient-picker",
                  className: "w-full flex justify-center items-center",
                  children: M.jsx(gl, {
                    className:
                      "lg:w-2/3 w-[85%] bg-[#0611f2] text-[white] border-[#0611f2] font-bold uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300",
                    children: "Gradient Picker",
                  }),
                }),
              ],
            }),
            M.jsx("div", {
              className:
                "rightside lg:w-[50%] w-full lg:h-[60vh] h-[30vh] flex rounded-2xl overflow-hidden",
              children: t.map((r, i) =>
                M.jsx(
                  "div",
                  {
                    className: "w-[20%] transition-all duration-500",
                    style: { backgroundColor: r },
                  },
                  i
                )
              ),
            }),
          ],
        }),
      })
    );
  };
var {
    entries: Rg,
    setPrototypeOf: jh,
    isFrozen: Nx,
    getPrototypeOf: Lx,
    getOwnPropertyDescriptor: Mx,
  } = Object,
  { freeze: kt, seal: mn, create: Ng } = Object,
  { apply: Cc, construct: kc } = typeof Reflect < "u" && Reflect;
kt ||
  (kt = function (t) {
    return t;
  });
mn ||
  (mn = function (t) {
    return t;
  });
Cc ||
  (Cc = function (t, e, n) {
    return t.apply(e, n);
  });
kc ||
  (kc = function (t, e) {
    return new t(...e);
  });
var ta = qt(Array.prototype.forEach),
  bh = qt(Array.prototype.pop),
  Mo = qt(Array.prototype.push),
  wa = qt(String.prototype.toLowerCase),
  au = qt(String.prototype.toString),
  Uh = qt(String.prototype.match),
  Do = qt(String.prototype.replace),
  Dx = qt(String.prototype.indexOf),
  Ox = qt(String.prototype.trim),
  wn = qt(Object.prototype.hasOwnProperty),
  Bt = qt(RegExp.prototype.test),
  Oo = zx(TypeError);
function qt(t) {
  return function (e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    return Cc(t, e, r);
  };
}
function zx(t) {
  return function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return kc(t, n);
  };
}
function ue(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wa;
  jh && jh(t, null);
  let r = e.length;
  for (; r--; ) {
    let i = e[r];
    if (typeof i == "string") {
      let o = n(i);
      o !== i && (Nx(e) || (e[r] = o), (i = o));
    }
    t[i] = !0;
  }
  return t;
}
function Ax(t) {
  for (let e = 0; e < t.length; e++) wn(t, e) || (t[e] = null);
  return t;
}
function Xr(t) {
  let e = Ng(null);
  for (let [n, r] of Rg(t))
    wn(t, n) &&
      (Array.isArray(r)
        ? (e[n] = Ax(r))
        : r && typeof r == "object" && r.constructor === Object
        ? (e[n] = Xr(r))
        : (e[n] = r));
  return e;
}
function na(t, e) {
  for (; t !== null; ) {
    let r = Mx(t, e);
    if (r) {
      if (r.get) return qt(r.get);
      if (typeof r.value == "function") return qt(r.value);
    }
    t = Lx(t);
  }
  function n() {
    return null;
  }
  return n;
}
var Bh = kt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  su = kt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  uu = kt([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  Fx = kt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  cu = kt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  Ix = kt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  $h = kt(["#text"]),
  Vh = kt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "xmlns",
    "slot",
  ]),
  fu = kt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  Hh = kt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  ra = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  jx = mn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  bx = mn(/<%[\w\W]*|[\w\W]*%>/gm),
  Ux = mn(/\${[\w\W]*}/gm),
  Bx = mn(/^data-[\-\w.\u00B7-\uFFFF]/),
  $x = mn(/^aria-[\-\w]+$/),
  Lg = mn(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  Vx = mn(/^(?:\w+script|data):/i),
  Hx = mn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Mg = mn(/^html$/i),
  Wx = mn(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),
  Wh = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: jx,
    ERB_EXPR: bx,
    TMPLIT_EXPR: Ux,
    DATA_ATTR: Bx,
    ARIA_ATTR: $x,
    IS_ALLOWED_URI: Lg,
    IS_SCRIPT_OR_DATA: Vx,
    ATTR_WHITESPACE: Hx,
    DOCTYPE_NAME: Mg,
    CUSTOM_ELEMENT: Wx,
  }),
  Yx = function () {
    return typeof window > "u" ? null : window;
  },
  Gx = function (t, e) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
      return null;
    let n = null,
      r = "data-tt-policy-suffix";
    e && e.hasAttribute(r) && (n = e.getAttribute(r));
    let i = "dompurify" + (n ? "#" + n : "");
    try {
      return t.createPolicy(i, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + i + " could not be created."),
        null
      );
    }
  };
function Dg() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yx(),
    e = (x) => Dg(x);
  if (
    ((e.version = "3.0.10"),
    (e.removed = []),
    !t || !t.document || t.document.nodeType !== 9)
  )
    return (e.isSupported = !1), e;
  let { document: n } = t,
    r = n,
    i = r.currentScript,
    {
      DocumentFragment: o,
      HTMLTemplateElement: l,
      Node: a,
      Element: s,
      NodeFilter: u,
      NamedNodeMap: c = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: f,
      DOMParser: d,
      trustedTypes: g,
    } = t,
    y = s.prototype,
    h = na(y, "cloneNode"),
    w = na(y, "nextSibling"),
    m = na(y, "childNodes"),
    p = na(y, "parentNode");
  if (typeof l == "function") {
    let x = n.createElement("template");
    x.content && x.content.ownerDocument && (n = x.content.ownerDocument);
  }
  let v,
    S = "",
    {
      implementation: E,
      createNodeIterator: _,
      createDocumentFragment: C,
      getElementsByTagName: T,
    } = n,
    { importNode: R } = r,
    O = {};
  e.isSupported =
    typeof Rg == "function" &&
    typeof p == "function" &&
    E &&
    E.createHTMLDocument !== void 0;
  let {
      MUSTACHE_EXPR: b,
      ERB_EXPR: K,
      TMPLIT_EXPR: Q,
      DATA_ATTR: X,
      ARIA_ATTR: ae,
      IS_SCRIPT_OR_DATA: ie,
      ATTR_WHITESPACE: Z,
      CUSTOM_ELEMENT: D,
    } = Wh,
    { IS_ALLOWED_URI: $ } = Wh,
    j = null,
    H = ue({}, [...Bh, ...su, ...uu, ...cu, ...$h]),
    U = null,
    de = ue({}, [...Vh, ...fu, ...Hh, ...ra]),
    G = Object.seal(
      Ng(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    pe = null,
    oe = null,
    _t = !0,
    en = !0,
    Bn = !1,
    gn = !0,
    Oe = !1,
    Xe = !1,
    cr = !1,
    Hr = !1,
    we = !1,
    Ut = !1,
    fr = !1,
    Ei = !0,
    $n = !1,
    go = "user-content-",
    tn = !0,
    nn = !1,
    st = {},
    rt = null,
    wt = ue({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]),
    dr = null,
    Vn = ue({}, ["audio", "video", "img", "source", "image", "track"]),
    hr = null,
    Rt = ue({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    Hn = "http://www.w3.org/1998/Math/MathML",
    vn = "http://www.w3.org/2000/svg",
    He = "http://www.w3.org/1999/xhtml",
    Nn = He,
    Wn = !1,
    q = null,
    Ne = ue({}, [Hn, vn, He], au),
    ve = null,
    Nt = ["application/xhtml+xml", "text/html"],
    xt = "text/html",
    ke = null,
    yn = null,
    xs = n.createElement("form"),
    k = function (x) {
      return x instanceof RegExp || x instanceof Function;
    },
    P = function () {
      let x =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(yn && yn === x)) {
        if (
          ((!x || typeof x != "object") && (x = {}),
          (x = Xr(x)),
          (ve =
            Nt.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? xt : x.PARSER_MEDIA_TYPE),
          (ke = ve === "application/xhtml+xml" ? au : wa),
          (j = wn(x, "ALLOWED_TAGS") ? ue({}, x.ALLOWED_TAGS, ke) : H),
          (U = wn(x, "ALLOWED_ATTR") ? ue({}, x.ALLOWED_ATTR, ke) : de),
          (q = wn(x, "ALLOWED_NAMESPACES")
            ? ue({}, x.ALLOWED_NAMESPACES, au)
            : Ne),
          (hr = wn(x, "ADD_URI_SAFE_ATTR")
            ? ue(Xr(Rt), x.ADD_URI_SAFE_ATTR, ke)
            : Rt),
          (dr = wn(x, "ADD_DATA_URI_TAGS")
            ? ue(Xr(Vn), x.ADD_DATA_URI_TAGS, ke)
            : Vn),
          (rt = wn(x, "FORBID_CONTENTS") ? ue({}, x.FORBID_CONTENTS, ke) : wt),
          (pe = wn(x, "FORBID_TAGS") ? ue({}, x.FORBID_TAGS, ke) : {}),
          (oe = wn(x, "FORBID_ATTR") ? ue({}, x.FORBID_ATTR, ke) : {}),
          (st = wn(x, "USE_PROFILES") ? x.USE_PROFILES : !1),
          (_t = x.ALLOW_ARIA_ATTR !== !1),
          (en = x.ALLOW_DATA_ATTR !== !1),
          (Bn = x.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (gn = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (Oe = x.SAFE_FOR_TEMPLATES || !1),
          (Xe = x.WHOLE_DOCUMENT || !1),
          (we = x.RETURN_DOM || !1),
          (Ut = x.RETURN_DOM_FRAGMENT || !1),
          (fr = x.RETURN_TRUSTED_TYPE || !1),
          (Hr = x.FORCE_BODY || !1),
          (Ei = x.SANITIZE_DOM !== !1),
          ($n = x.SANITIZE_NAMED_PROPS || !1),
          (tn = x.KEEP_CONTENT !== !1),
          (nn = x.IN_PLACE || !1),
          ($ = x.ALLOWED_URI_REGEXP || Lg),
          (Nn = x.NAMESPACE || He),
          (G = x.CUSTOM_ELEMENT_HANDLING || {}),
          x.CUSTOM_ELEMENT_HANDLING &&
            k(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (G.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          x.CUSTOM_ELEMENT_HANDLING &&
            k(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (G.attributeNameCheck =
              x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          x.CUSTOM_ELEMENT_HANDLING &&
            typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (G.allowCustomizedBuiltInElements =
              x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          Oe && (en = !1),
          Ut && (we = !0),
          st &&
            ((j = ue({}, $h)),
            (U = []),
            st.html === !0 && (ue(j, Bh), ue(U, Vh)),
            st.svg === !0 && (ue(j, su), ue(U, fu), ue(U, ra)),
            st.svgFilters === !0 && (ue(j, uu), ue(U, fu), ue(U, ra)),
            st.mathMl === !0 && (ue(j, cu), ue(U, Hh), ue(U, ra))),
          x.ADD_TAGS && (j === H && (j = Xr(j)), ue(j, x.ADD_TAGS, ke)),
          x.ADD_ATTR && (U === de && (U = Xr(U)), ue(U, x.ADD_ATTR, ke)),
          x.ADD_URI_SAFE_ATTR && ue(hr, x.ADD_URI_SAFE_ATTR, ke),
          x.FORBID_CONTENTS &&
            (rt === wt && (rt = Xr(rt)), ue(rt, x.FORBID_CONTENTS, ke)),
          tn && (j["#text"] = !0),
          Xe && ue(j, ["html", "head", "body"]),
          j.table && (ue(j, ["tbody"]), delete pe.tbody),
          x.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Oo(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Oo(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (v = x.TRUSTED_TYPES_POLICY), (S = v.createHTML(""));
        } else
          v === void 0 && (v = Gx(g, i)),
            v !== null && typeof S == "string" && (S = v.createHTML(""));
        kt && kt(x), (yn = x);
      }
    },
    N = ue({}, ["mi", "mo", "mn", "ms", "mtext"]),
    A = ue({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    W = ue({}, ["title", "style", "font", "a", "script"]),
    ne = ue({}, [...su, ...uu, ...Fx]),
    ee = ue({}, [...cu, ...Ix]),
    J = function (x) {
      let B = p(x);
      (!B || !B.tagName) && (B = { namespaceURI: Nn, tagName: "template" });
      let I = wa(x.tagName),
        me = wa(B.tagName);
      return q[x.namespaceURI]
        ? x.namespaceURI === vn
          ? B.namespaceURI === He
            ? I === "svg"
            : B.namespaceURI === Hn
            ? I === "svg" && (me === "annotation-xml" || N[me])
            : !!ne[I]
          : x.namespaceURI === Hn
          ? B.namespaceURI === He
            ? I === "math"
            : B.namespaceURI === vn
            ? I === "math" && A[me]
            : !!ee[I]
          : x.namespaceURI === He
          ? (B.namespaceURI === vn && !A[me]) ||
            (B.namespaceURI === Hn && !N[me])
            ? !1
            : !ee[I] && (W[I] || !ne[I])
          : !!(ve === "application/xhtml+xml" && q[x.namespaceURI])
        : !1;
    },
    Y = function (x) {
      Mo(e.removed, { element: x });
      try {
        x.parentNode.removeChild(x);
      } catch {
        x.remove();
      }
    },
    le = function (x, B) {
      try {
        Mo(e.removed, { attribute: B.getAttributeNode(x), from: B });
      } catch {
        Mo(e.removed, { attribute: null, from: B });
      }
      if ((B.removeAttribute(x), x === "is" && !U[x]))
        if (we || Ut)
          try {
            Y(B);
          } catch {}
        else
          try {
            B.setAttribute(x, "");
          } catch {}
    },
    We = function (x) {
      let B = null,
        I = null;
      if (Hr) x = "<remove></remove>" + x;
      else {
        let Se = Uh(x, /^[\r\n\t ]+/);
        I = Se && Se[0];
      }
      ve === "application/xhtml+xml" &&
        Nn === He &&
        (x =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          x +
          "</body></html>");
      let me = v ? v.createHTML(x) : x;
      if (Nn === He)
        try {
          B = new d().parseFromString(me, ve);
        } catch {}
      if (!B || !B.documentElement) {
        B = E.createDocument(Nn, "template", null);
        try {
          B.documentElement.innerHTML = Wn ? S : me;
        } catch {}
      }
      let Le = B.body || B.documentElement;
      return (
        x &&
          I &&
          Le.insertBefore(n.createTextNode(I), Le.childNodes[0] || null),
        Nn === He
          ? T.call(B, Xe ? "html" : "body")[0]
          : Xe
          ? B.documentElement
          : Le
      );
    },
    te = function (x) {
      return _.call(
        x.ownerDocument || x,
        x,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION,
        null
      );
    },
    _e = function (x) {
      return (
        x instanceof f &&
        (typeof x.nodeName != "string" ||
          typeof x.textContent != "string" ||
          typeof x.removeChild != "function" ||
          !(x.attributes instanceof c) ||
          typeof x.removeAttribute != "function" ||
          typeof x.setAttribute != "function" ||
          typeof x.namespaceURI != "string" ||
          typeof x.insertBefore != "function" ||
          typeof x.hasChildNodes != "function")
      );
    },
    qe = function (x) {
      return typeof a == "function" && x instanceof a;
    },
    ze = function (x, B, I) {
      O[x] &&
        ta(O[x], (me) => {
          me.call(e, B, I, yn);
        });
    },
    Ye = function (x) {
      let B = null;
      if ((ze("beforeSanitizeElements", x, null), _e(x))) return Y(x), !0;
      let I = ke(x.nodeName);
      if (
        (ze("uponSanitizeElement", x, { tagName: I, allowedTags: j }),
        x.hasChildNodes() &&
          !qe(x.firstElementChild) &&
          Bt(/<[/\w]/g, x.innerHTML) &&
          Bt(/<[/\w]/g, x.textContent))
      )
        return Y(x), !0;
      if (!j[I] || pe[I]) {
        if (
          !pe[I] &&
          Ci(I) &&
          ((G.tagNameCheck instanceof RegExp && Bt(G.tagNameCheck, I)) ||
            (G.tagNameCheck instanceof Function && G.tagNameCheck(I)))
        )
          return !1;
        if (tn && !rt[I]) {
          let me = p(x) || x.parentNode,
            Le = m(x) || x.childNodes;
          if (Le && me) {
            let Se = Le.length;
            for (let re = Se - 1; re >= 0; --re)
              me.insertBefore(h(Le[re], !0), w(x));
          }
        }
        return Y(x), !0;
      }
      return (x instanceof s && !J(x)) ||
        ((I === "noscript" || I === "noembed" || I === "noframes") &&
          Bt(/<\/no(script|embed|frames)/i, x.innerHTML))
        ? (Y(x), !0)
        : (Oe &&
            x.nodeType === 3 &&
            ((B = x.textContent),
            ta([b, K, Q], (me) => {
              B = Do(B, me, " ");
            }),
            x.textContent !== B &&
              (Mo(e.removed, { element: x.cloneNode() }), (x.textContent = B))),
          ze("afterSanitizeElements", x, null),
          !1);
    },
    Yn = function (x, B, I) {
      if (Ei && (B === "id" || B === "name") && (I in n || I in xs)) return !1;
      if (!(en && !oe[B] && Bt(X, B)) && !(_t && Bt(ae, B))) {
        if (!U[B] || oe[B]) {
          if (
            !(
              (Ci(x) &&
                ((G.tagNameCheck instanceof RegExp && Bt(G.tagNameCheck, x)) ||
                  (G.tagNameCheck instanceof Function && G.tagNameCheck(x))) &&
                ((G.attributeNameCheck instanceof RegExp &&
                  Bt(G.attributeNameCheck, B)) ||
                  (G.attributeNameCheck instanceof Function &&
                    G.attributeNameCheck(B)))) ||
              (B === "is" &&
                G.allowCustomizedBuiltInElements &&
                ((G.tagNameCheck instanceof RegExp && Bt(G.tagNameCheck, I)) ||
                  (G.tagNameCheck instanceof Function && G.tagNameCheck(I))))
            )
          )
            return !1;
        } else if (
          !hr[B] &&
          !Bt($, Do(I, Z, "")) &&
          !(
            (B === "src" || B === "xlink:href" || B === "href") &&
            x !== "script" &&
            Dx(I, "data:") === 0 &&
            dr[x]
          ) &&
          !(Bn && !Bt(ie, Do(I, Z, ""))) &&
          I
        )
          return !1;
      }
      return !0;
    },
    Ci = function (x) {
      return x !== "annotation-xml" && Uh(x, D);
    },
    Gn = function (x) {
      ze("beforeSanitizeAttributes", x, null);
      let { attributes: B } = x;
      if (!B) return;
      let I = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: U,
        },
        me = B.length;
      for (; me--; ) {
        let Le = B[me],
          { name: Se, namespaceURI: re, value: se } = Le,
          Te = ke(Se),
          et = Se === "value" ? se : Ox(se);
        if (
          ((I.attrName = Te),
          (I.attrValue = et),
          (I.keepAttr = !0),
          (I.forceKeepAttr = void 0),
          ze("uponSanitizeAttribute", x, I),
          (et = I.attrValue),
          I.forceKeepAttr || (le(Se, x), !I.keepAttr))
        )
          continue;
        if (!gn && Bt(/\/>/i, et)) {
          le(Se, x);
          continue;
        }
        Oe &&
          ta([b, K, Q], (Hf) => {
            et = Do(et, Hf, " ");
          });
        let Al = ke(x.nodeName);
        if (Yn(Al, Te, et)) {
          if (
            ($n &&
              (Te === "id" || Te === "name") &&
              (le(Se, x), (et = go + et)),
            v &&
              typeof g == "object" &&
              typeof g.getAttributeType == "function" &&
              !re)
          )
            switch (g.getAttributeType(Al, Te)) {
              case "TrustedHTML": {
                et = v.createHTML(et);
                break;
              }
              case "TrustedScriptURL": {
                et = v.createScriptURL(et);
                break;
              }
            }
          try {
            re ? x.setAttributeNS(re, Se, et) : x.setAttribute(Se, et),
              bh(e.removed);
          } catch {}
        }
      }
      ze("afterSanitizeAttributes", x, null);
    },
    Ln = function x(B) {
      let I = null,
        me = te(B);
      for (ze("beforeSanitizeShadowDOM", B, null); (I = me.nextNode()); )
        ze("uponSanitizeShadowNode", I, null),
          !Ye(I) && (I.content instanceof o && x(I.content), Gn(I));
      ze("afterSanitizeShadowDOM", B, null);
    };
  return (
    (e.sanitize = function (x) {
      let B =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        I = null,
        me = null,
        Le = null,
        Se = null;
      if (((Wn = !x), Wn && (x = "<!-->"), typeof x != "string" && !qe(x)))
        if (typeof x.toString == "function") {
          if (((x = x.toString()), typeof x != "string"))
            throw Oo("dirty is not a string, aborting");
        } else throw Oo("toString is not a function");
      if (!e.isSupported) return x;
      if (
        (cr || P(B), (e.removed = []), typeof x == "string" && (nn = !1), nn)
      ) {
        if (x.nodeName) {
          let Te = ke(x.nodeName);
          if (!j[Te] || pe[Te])
            throw Oo("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (x instanceof a)
        (I = We("<!---->")),
          (me = I.ownerDocument.importNode(x, !0)),
          (me.nodeType === 1 && me.nodeName === "BODY") ||
          me.nodeName === "HTML"
            ? (I = me)
            : I.appendChild(me);
      else {
        if (!we && !Oe && !Xe && x.indexOf("<") === -1)
          return v && fr ? v.createHTML(x) : x;
        if (((I = We(x)), !I)) return we ? null : fr ? S : "";
      }
      I && Hr && Y(I.firstChild);
      let re = te(nn ? x : I);
      for (; (Le = re.nextNode()); )
        Ye(Le) || (Le.content instanceof o && Ln(Le.content), Gn(Le));
      if (nn) return x;
      if (we) {
        if (Ut)
          for (Se = C.call(I.ownerDocument); I.firstChild; )
            Se.appendChild(I.firstChild);
        else Se = I;
        return (
          (U.shadowroot || U.shadowrootmode) && (Se = R.call(r, Se, !0)), Se
        );
      }
      let se = Xe ? I.outerHTML : I.innerHTML;
      return (
        Xe &&
          j["!doctype"] &&
          I.ownerDocument &&
          I.ownerDocument.doctype &&
          I.ownerDocument.doctype.name &&
          Bt(Mg, I.ownerDocument.doctype.name) &&
          (se =
            "<!DOCTYPE " +
            I.ownerDocument.doctype.name +
            `>
` +
            se),
        Oe &&
          ta([b, K, Q], (Te) => {
            se = Do(se, Te, " ");
          }),
        v && fr ? v.createHTML(se) : se
      );
    }),
    (e.setConfig = function () {
      let x =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      P(x), (cr = !0);
    }),
    (e.clearConfig = function () {
      (yn = null), (cr = !1);
    }),
    (e.isValidAttribute = function (x, B, I) {
      yn || P({});
      let me = ke(x),
        Le = ke(B);
      return Yn(me, Le, I);
    }),
    (e.addHook = function (x, B) {
      typeof B == "function" && ((O[x] = O[x] || []), Mo(O[x], B));
    }),
    (e.removeHook = function (x) {
      if (O[x]) return bh(O[x]);
    }),
    (e.removeHooks = function (x) {
      O[x] && (O[x] = []);
    }),
    (e.removeAllHooks = function () {
      O = {};
    }),
    e
  );
}
var Qx = Dg(),
  Kx = (t) => {
    switch (t) {
      case "success":
        return Zx;
      case "info":
        return e2;
      case "warning":
        return Jx;
      case "error":
        return t2;
      default:
        return null;
    }
  },
  Xx = Array(12).fill(0),
  qx = ({ visible: t }) =>
    F.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": t },
      F.createElement(
        "div",
        { className: "sonner-spinner" },
        Xx.map((e, n) =>
          F.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Zx = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Jx = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  e2 = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  t2 = F.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    F.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  n2 = () => {
    let [t, e] = F.useState(!1);
    return (
      F.useEffect(() => {
        let n = () => {
          e(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      t
    );
  },
  Tc = 1,
  r2 = class {
    constructor() {
      (this.subscribe = (t) => (
        this.subscribers.push(t),
        () => {
          let e = this.subscribers.indexOf(t);
          this.subscribers.splice(e, 1);
        }
      )),
        (this.publish = (t) => {
          this.subscribers.forEach((e) => e(t));
        }),
        (this.addToast = (t) => {
          this.publish(t), (this.toasts = [...this.toasts, t]);
        }),
        (this.create = (t) => {
          var e;
          let { message: n, ...r } = t,
            i =
              typeof (t == null ? void 0 : t.id) == "number" ||
              ((e = t.id) == null ? void 0 : e.length) > 0
                ? t.id
                : Tc++,
            o = this.toasts.find((a) => a.id === i),
            l = t.dismissible === void 0 ? !0 : t.dismissible;
          return (
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === i
                    ? (this.publish({ ...a, ...t, id: i, title: n }),
                      { ...a, ...t, id: i, dismissible: l, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: l, id: i }),
            i
          );
        }),
        (this.dismiss = (t) => (
          t ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((n) => n({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
          t
        )),
        (this.message = (t, e) => this.create({ ...e, message: t })),
        (this.error = (t, e) =>
          this.create({ ...e, message: t, type: "error" })),
        (this.success = (t, e) =>
          this.create({ ...e, type: "success", message: t })),
        (this.info = (t, e) => this.create({ ...e, type: "info", message: t })),
        (this.warning = (t, e) =>
          this.create({ ...e, type: "warning", message: t })),
        (this.loading = (t, e) =>
          this.create({ ...e, type: "loading", message: t })),
        (this.promise = (t, e) => {
          if (!e) return;
          let n;
          e.loading !== void 0 &&
            (n = this.create({
              ...e,
              promise: t,
              type: "loading",
              message: e.loading,
              description:
                typeof e.description != "function" ? e.description : void 0,
            }));
          let r = t instanceof Promise ? t : t(),
            i = n !== void 0;
          return (
            r
              .then((o) => {
                if (o && typeof o.ok == "boolean" && !o.ok) {
                  i = !1;
                  let l =
                      typeof e.error == "function"
                        ? e.error(`HTTP error! status: ${o.status}`)
                        : e.error,
                    a =
                      typeof e.description == "function"
                        ? e.description(`HTTP error! status: ${o.status}`)
                        : e.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: l,
                    description: a,
                  });
                } else if (e.success !== void 0) {
                  i = !1;
                  let l =
                      typeof e.success == "function" ? e.success(o) : e.success,
                    a =
                      typeof e.description == "function"
                        ? e.description(o)
                        : e.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: l,
                    description: a,
                  });
                }
              })
              .catch((o) => {
                if (e.error !== void 0) {
                  i = !1;
                  let l = typeof e.error == "function" ? e.error(o) : e.error,
                    a =
                      typeof e.description == "function"
                        ? e.description(o)
                        : e.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: l,
                    description: a,
                  });
                }
              })
              .finally(() => {
                var o;
                i && (this.dismiss(n), (n = void 0)),
                  (o = e.finally) == null || o.call(e);
              }),
            n
          );
        }),
        (this.custom = (t, e) => {
          let n = (e == null ? void 0 : e.id) || Tc++;
          return this.create({ jsx: t(n), id: n, ...e }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  xn = new r2(),
  i2 = (t, e) => {
    let n = (e == null ? void 0 : e.id) || Tc++;
    return xn.addToast({ title: t, ...e, id: n }), n;
  },
  o2 = i2,
  Og = Object.assign(o2, {
    success: xn.success,
    info: xn.info,
    warning: xn.warning,
    error: xn.error,
    custom: xn.custom,
    message: xn.message,
    promise: xn.promise,
    dismiss: xn.dismiss,
    loading: xn.loading,
  });
function l2(t, { insertAt: e } = {}) {
  if (!t || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    e === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = t)
      : r.appendChild(document.createTextNode(t));
}
l2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ia(t) {
  return t.label !== void 0 && typeof t.onClick == "function";
}
var a2 = 3,
  s2 = "32px",
  u2 = 4e3,
  c2 = 356,
  f2 = 14,
  d2 = 20,
  h2 = 200;
function p2(...t) {
  return t.filter(Boolean).join(" ");
}
var m2 = (t) => {
  var e, n, r, i, o, l, a;
  let {
      invert: s,
      toast: u,
      unstyled: c,
      interacting: f,
      setHeights: d,
      visibleToasts: g,
      heights: y,
      index: h,
      toasts: w,
      expanded: m,
      removeToast: p,
      closeButton: v,
      style: S,
      cancelButtonStyle: E,
      actionButtonStyle: _,
      className: C = "",
      descriptionClassName: T = "",
      duration: R,
      position: O,
      gap: b,
      loadingIcon: K,
      expandByDefault: Q,
      classNames: X,
      icons: ae,
      closeButtonAriaLabel: ie = "Close toast",
      pauseWhenPageIsHidden: Z,
      cn: D,
    } = t,
    [$, j] = F.useState(!1),
    [H, U] = F.useState(!1),
    [de, G] = F.useState(!1),
    [pe, oe] = F.useState(!1),
    [_t, en] = F.useState(0),
    [Bn, gn] = F.useState(0),
    Oe = F.useRef(null),
    Xe = F.useRef(null),
    cr = h === 0,
    Hr = h + 1 <= g,
    we = u.type,
    Ut = u.dismissible !== !1,
    fr = u.className || "",
    Ei = u.descriptionClassName || "",
    $n = F.useMemo(
      () => y.findIndex((q) => q.toastId === u.id) || 0,
      [y, u.id]
    ),
    go = F.useMemo(() => {
      var q;
      return (q = u.closeButton) != null ? q : v;
    }, [u.closeButton, v]),
    tn = F.useMemo(() => u.duration || R || u2, [u.duration, R]),
    nn = F.useRef(0),
    st = F.useRef(0),
    rt = F.useRef(0),
    wt = F.useRef(null),
    [dr, Vn] = O.split("-"),
    hr = F.useMemo(
      () => y.reduce((q, Ne, ve) => (ve >= $n ? q : q + Ne.height), 0),
      [y, $n]
    ),
    Rt = n2(),
    Hn = u.invert || s,
    vn = we === "loading";
  (st.current = F.useMemo(() => $n * b + hr, [$n, hr])),
    F.useEffect(() => {
      j(!0);
    }, []),
    F.useLayoutEffect(() => {
      if (!$) return;
      let q = Xe.current,
        Ne = q.style.height;
      q.style.height = "auto";
      let ve = q.getBoundingClientRect().height;
      (q.style.height = Ne),
        gn(ve),
        d((Nt) =>
          Nt.find((xt) => xt.toastId === u.id)
            ? Nt.map((xt) => (xt.toastId === u.id ? { ...xt, height: ve } : xt))
            : [{ toastId: u.id, height: ve, position: u.position }, ...Nt]
        );
    }, [$, u.title, u.description, d, u.id]);
  let He = F.useCallback(() => {
    U(!0),
      en(st.current),
      d((q) => q.filter((Ne) => Ne.toastId !== u.id)),
      setTimeout(() => {
        p(u);
      }, h2);
  }, [u, p, d, st]);
  F.useEffect(() => {
    if (
      (u.promise && we === "loading") ||
      u.duration === 1 / 0 ||
      u.type === "loading"
    )
      return;
    let q,
      Ne = tn;
    return (
      m || f || (Z && Rt)
        ? (() => {
            if (rt.current < nn.current) {
              let ve = new Date().getTime() - nn.current;
              Ne = Ne - ve;
            }
            rt.current = new Date().getTime();
          })()
        : Ne !== 1 / 0 &&
          ((nn.current = new Date().getTime()),
          (q = setTimeout(() => {
            var ve;
            (ve = u.onAutoClose) == null || ve.call(u, u), He();
          }, Ne))),
      () => clearTimeout(q)
    );
  }, [m, f, Q, u, tn, He, u.promise, we, Z, Rt]),
    F.useEffect(() => {
      let q = Xe.current;
      if (q) {
        let Ne = q.getBoundingClientRect().height;
        return (
          gn(Ne),
          d((ve) => [
            { toastId: u.id, height: Ne, position: u.position },
            ...ve,
          ]),
          () => d((ve) => ve.filter((Nt) => Nt.toastId !== u.id))
        );
      }
    }, [d, u.id]),
    F.useEffect(() => {
      u.delete && He();
    }, [He, u.delete]);
  function Nn() {
    return ae != null && ae.loading
      ? F.createElement(
          "div",
          { className: "sonner-loader", "data-visible": we === "loading" },
          ae.loading
        )
      : K
      ? F.createElement(
          "div",
          { className: "sonner-loader", "data-visible": we === "loading" },
          K
        )
      : F.createElement(qx, { visible: we === "loading" });
  }
  function Wn(q) {
    return { __html: Qx.sanitize(q) };
  }
  return F.createElement(
    "li",
    {
      "aria-live": u.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: Xe,
      className: D(
        C,
        fr,
        X == null ? void 0 : X.toast,
        (e = u == null ? void 0 : u.classNames) == null ? void 0 : e.toast,
        X == null ? void 0 : X.default,
        X == null ? void 0 : X[we],
        (n = u == null ? void 0 : u.classNames) == null ? void 0 : n[we]
      ),
      "data-sonner-toast": "",
      "data-styled": !(u.jsx || u.unstyled || c),
      "data-mounted": $,
      "data-promise": !!u.promise,
      "data-removed": H,
      "data-visible": Hr,
      "data-y-position": dr,
      "data-x-position": Vn,
      "data-index": h,
      "data-front": cr,
      "data-swiping": de,
      "data-dismissible": Ut,
      "data-type": we,
      "data-invert": Hn,
      "data-swipe-out": pe,
      "data-expanded": !!(m || (Q && $)),
      style: {
        "--index": h,
        "--toasts-before": h,
        "--z-index": w.length - h,
        "--offset": `${H ? _t : st.current}px`,
        "--initial-height": Q ? "auto" : `${Bn}px`,
        ...S,
        ...u.style,
      },
      onPointerDown: (q) => {
        vn ||
          !Ut ||
          ((Oe.current = new Date()),
          en(st.current),
          q.target.setPointerCapture(q.pointerId),
          q.target.tagName !== "BUTTON" &&
            (G(!0), (wt.current = { x: q.clientX, y: q.clientY })));
      },
      onPointerUp: () => {
        var q, Ne, ve, Nt;
        if (pe || !Ut) return;
        wt.current = null;
        let xt = Number(
            ((q = Xe.current) == null
              ? void 0
              : q.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          ke =
            new Date().getTime() -
            ((Ne = Oe.current) == null ? void 0 : Ne.getTime()),
          yn = Math.abs(xt) / ke;
        if (Math.abs(xt) >= d2 || yn > 0.11) {
          en(st.current),
            (ve = u.onDismiss) == null || ve.call(u, u),
            He(),
            oe(!0);
          return;
        }
        (Nt = Xe.current) == null ||
          Nt.style.setProperty("--swipe-amount", "0px"),
          G(!1);
      },
      onPointerMove: (q) => {
        var Ne;
        if (!wt.current || !Ut) return;
        let ve = q.clientY - wt.current.y,
          Nt = q.clientX - wt.current.x,
          xt = (dr === "top" ? Math.min : Math.max)(0, ve),
          ke = q.pointerType === "touch" ? 10 : 2;
        Math.abs(xt) > ke
          ? (Ne = Xe.current) == null ||
            Ne.style.setProperty("--swipe-amount", `${ve}px`)
          : Math.abs(Nt) > ke && (wt.current = null);
      },
    },
    go && !u.jsx
      ? F.createElement(
          "button",
          {
            "aria-label": ie,
            "data-disabled": vn,
            "data-close-button": !0,
            onClick:
              vn || !Ut
                ? () => {}
                : () => {
                    var q;
                    He(), (q = u.onDismiss) == null || q.call(u, u);
                  },
            className: D(
              X == null ? void 0 : X.closeButton,
              (r = u == null ? void 0 : u.classNames) == null
                ? void 0
                : r.closeButton
            ),
          },
          F.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            F.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            F.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    u.jsx || F.isValidElement(u.title)
      ? u.jsx || u.title
      : F.createElement(
          F.Fragment,
          null,
          we || u.icon || u.promise
            ? F.createElement(
                "div",
                { "data-icon": "", className: D(X == null ? void 0 : X.icon) },
                u.promise || (u.type === "loading" && !u.icon)
                  ? u.icon || Nn()
                  : null,
                u.type !== "loading"
                  ? u.icon || (ae == null ? void 0 : ae[we]) || Kx(we)
                  : null
              )
            : null,
          F.createElement(
            "div",
            {
              "data-content": "",
              className: D(X == null ? void 0 : X.content),
            },
            F.createElement("div", {
              "data-title": "",
              className: D(
                X == null ? void 0 : X.title,
                (i = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : i.title
              ),
              dangerouslySetInnerHTML: Wn(u.title),
            }),
            u.description
              ? F.createElement("div", {
                  "data-description": "",
                  className: D(
                    T,
                    Ei,
                    X == null ? void 0 : X.description,
                    (o = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : o.description
                  ),
                  dangerouslySetInnerHTML: Wn(u.description),
                })
              : null
          ),
          F.isValidElement(u.cancel)
            ? u.cancel
            : u.cancel && ia(u.cancel)
            ? F.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: u.cancelButtonStyle || E,
                  onClick: (q) => {
                    ia(u.cancel) && Ut && (He(), u.cancel.onClick(q));
                  },
                  className: D(
                    X == null ? void 0 : X.cancelButton,
                    (l = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : l.cancelButton
                  ),
                },
                u.cancel.label
              )
            : null,
          F.isValidElement(u.action)
            ? u.action
            : u.action && ia(u.action)
            ? F.createElement(
                "button",
                {
                  "data-button": "",
                  style: u.actionButtonStyle || _,
                  onClick: (q) => {
                    ia(u.action) &&
                      (u.action.onClick(q), !q.defaultPrevented && He());
                  },
                  className: D(
                    X == null ? void 0 : X.actionButton,
                    (a = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : a.actionButton
                  ),
                },
                u.action.label
              )
            : null
        )
  );
};
function Yh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t
    ? window.getComputedStyle(document.documentElement).direction
    : t;
}
var zg = (t) => {
  let {
      invert: e,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: l,
      offset: a,
      theme: s = "light",
      richColors: u,
      duration: c,
      style: f,
      visibleToasts: d = a2,
      toastOptions: g,
      dir: y = Yh(),
      gap: h = f2,
      loadingIcon: w,
      icons: m,
      containerAriaLabel: p = "Notifications",
      pauseWhenPageIsHidden: v,
      cn: S = p2,
    } = t,
    [E, _] = F.useState([]),
    C = F.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((H) => H.position).map((H) => H.position))
          )
        ),
      [E, n]
    ),
    [T, R] = F.useState([]),
    [O, b] = F.useState(!1),
    [K, Q] = F.useState(!1),
    [X, ae] = F.useState(
      s !== "system"
        ? s
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    ie = F.useRef(null),
    Z = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    D = F.useRef(null),
    $ = F.useRef(!1),
    j = F.useCallback(
      (H) => _((U) => U.filter(({ id: de }) => de !== H.id)),
      []
    );
  return (
    F.useEffect(
      () =>
        xn.subscribe((H) => {
          if (H.dismiss) {
            _((U) =>
              U.map((de) => (de.id === H.id ? { ...de, delete: !0 } : de))
            );
            return;
          }
          setTimeout(() => {
            s0.flushSync(() => {
              _((U) => {
                let de = U.findIndex((G) => G.id === H.id);
                return de !== -1
                  ? [...U.slice(0, de), { ...U[de], ...H }, ...U.slice(de + 1)]
                  : [H, ...U];
              });
            });
          });
        }),
      []
    ),
    F.useEffect(() => {
      if (s !== "system") {
        ae(s);
        return;
      }
      s === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? ae("dark")
          : ae("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: H }) => {
              ae(H ? "dark" : "light");
            });
    }, [s]),
    F.useEffect(() => {
      E.length <= 1 && b(!1);
    }, [E]),
    F.useEffect(() => {
      let H = (U) => {
        var de, G;
        r.every((pe) => U[pe] || U.code === pe) &&
          (b(!0), (de = ie.current) == null || de.focus()),
          U.code === "Escape" &&
            (document.activeElement === ie.current ||
              ((G = ie.current) != null &&
                G.contains(document.activeElement))) &&
            b(!1);
      };
      return (
        document.addEventListener("keydown", H),
        () => document.removeEventListener("keydown", H)
      );
    }, [r]),
    F.useEffect(() => {
      if (ie.current)
        return () => {
          D.current &&
            (D.current.focus({ preventScroll: !0 }),
            (D.current = null),
            ($.current = !1));
        };
    }, [ie.current]),
    E.length
      ? F.createElement(
          "section",
          { "aria-label": `${p} ${Z}`, tabIndex: -1 },
          C.map((H, U) => {
            var de;
            let [G, pe] = H.split("-");
            return F.createElement(
              "ol",
              {
                key: H,
                dir: y === "auto" ? Yh() : y,
                tabIndex: -1,
                ref: ie,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": X,
                "data-rich-colors": u,
                "data-y-position": G,
                "data-x-position": pe,
                style: {
                  "--front-toast-height": `${
                    ((de = T[0]) == null ? void 0 : de.height) || 0
                  }px`,
                  "--offset": typeof a == "number" ? `${a}px` : a || s2,
                  "--width": `${c2}px`,
                  "--gap": `${h}px`,
                  ...f,
                },
                onBlur: (oe) => {
                  $.current &&
                    !oe.currentTarget.contains(oe.relatedTarget) &&
                    (($.current = !1),
                    D.current &&
                      (D.current.focus({ preventScroll: !0 }),
                      (D.current = null)));
                },
                onFocus: (oe) => {
                  (oe.target instanceof HTMLElement &&
                    oe.target.dataset.dismissible === "false") ||
                    $.current ||
                    (($.current = !0), (D.current = oe.relatedTarget));
                },
                onMouseEnter: () => b(!0),
                onMouseMove: () => b(!0),
                onMouseLeave: () => {
                  K || b(!1);
                },
                onPointerDown: (oe) => {
                  (oe.target instanceof HTMLElement &&
                    oe.target.dataset.dismissible === "false") ||
                    Q(!0);
                },
                onPointerUp: () => Q(!1),
              },
              E.filter(
                (oe) => (!oe.position && U === 0) || oe.position === H
              ).map((oe, _t) => {
                var en, Bn;
                return F.createElement(m2, {
                  key: oe.id,
                  icons: m,
                  index: _t,
                  toast: oe,
                  duration:
                    (en = g == null ? void 0 : g.duration) != null ? en : c,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: e,
                  visibleToasts: d,
                  closeButton:
                    (Bn = g == null ? void 0 : g.closeButton) != null ? Bn : o,
                  interacting: K,
                  position: H,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: j,
                  toasts: E.filter((gn) => gn.position == oe.position),
                  heights: T.filter((gn) => gn.position == oe.position),
                  setHeights: R,
                  expandByDefault: i,
                  gap: h,
                  loadingIcon: w,
                  expanded: O,
                  pauseWhenPageIsHidden: v,
                  cn: S,
                });
              })
            );
          })
        )
      : null
  );
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/ const g2 = () => {
    const [t, e] = L.useState("#FFFFFF"),
      n = L.useRef();
    yi(
      () => {
        vi.from(".box", {
          opacity: 0,
          duration: 0.8,
          stagger: 0.4,
          ease: "power2.in",
        });
      },
      { scope: n }
    );
    const r = (o) => {
        e(o.target.value.toUpperCase());
      },
      i = () => {
        const o = document.createElement("textarea");
        (o.value = t),
          document.body.appendChild(o),
          o.select(),
          document.execCommand("copy"),
          document.body.removeChild(o),
          Og.success("Copied");
      };
    return M.jsx("div", {
      ref: n,
      className: "w-full",
      children: M.jsxs("div", {
        className:
          "box w-full flex flex-col justify-center items-center min-h-[40vh] gap-3 mt-7",
        children: [
          M.jsxs("div", {
            className:
              "lg:w-1/2 w-[75%] flex flex-col justify-center items-center",
            children: [
              M.jsx("h1", {
                className:
                  "font-bold lg:text-[4vw] text-[10vw] leading-[10vw] lg:leading-[4vw] text-center",
                children: "Color Picker",
              }),
              M.jsx("p", {
                className:
                  "lg:text-[1.4vw] poppins-regular-italic text-[5vw] text-center w-full lg:w-[60%]",
                children:
                  "A simple fast and lightweight color picker for all your needs. Pick your Color!",
              }),
            ],
          }),
          M.jsx("div", {
            className:
              "lg:w-1/2 w-full lg:h-[50vh] h-[30vh] rounded-xl flex justify-center items-center text-xl font-bold",
            style: {
              backgroundColor: t,
              border: t == "#FFFFFF" ? "1px solid black" : `1px solid ${t}`,
            },
            children: t,
          }),
          M.jsxs("div", {
            className: "picker flex justify-center items-center gap-3",
            children: [
              M.jsx("label", {
                htmlFor: "",
                className: "text-xl font-bold",
                children: "Select a Color:",
              }),
              M.jsx("input", {
                className: "lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl",
                type: "color",
                value: t,
                onChange: r,
              }),
            ],
          }),
          M.jsxs("div", {
            className: "copy flex justify-center items-center gap-3",
            children: [
              M.jsx("h1", {
                className: "font-bold text-xl",
                style: { color: t == "#FFFFFF" ? "black" : t },
                children: t,
              }),
              M.jsx(gl, {
                onClick: i,
                className:
                  "bg-[#0611f2] text-[white] border-[#0611f2] uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300 font-bold ",
                children: "Copy Color",
              }),
            ],
          }),
          M.jsxs("h1", {
            children: [
              "Want a Gradient? Check out Our ",
              M.jsx(wl, {
                to: "/gradient-picker",
                className: "text-[#0611f2]",
                children: "Gradient Picker!",
              }),
            ],
          }),
          M.jsx(zg, {
            richColors: !0,
            position: "top-right",
            duration: 3e3,
            toastOptions: { classNames: { title: "text-[#0611f2]" } },
          }),
        ],
      }),
    });
  },
  v2 = () => {
    const [t, e] = L.useState(0),
      [n, r] = L.useState("#FFFFFF"),
      [i, o] = L.useState("#000000"),
      [l, a] = L.useState(50),
      [s, u] = L.useState(0),
      [c, f] = L.useState("linear"),
      d = () => {
        const w = t + "deg",
          m = l + "%",
          p = s + "%";
        return c === "linear"
          ? `linear-gradient(${w}, ${n} ${p}, ${i} 100%)`
          : `radial-gradient(circle, ${n} ${m}, ${i} 100%)`;
      },
      g = `background: ${d()};`,
      y = () => {
        navigator.clipboard.writeText(g), Og.success("Copied");
      },
      h = L.useRef();
    return (
      yi(
        () => {
          vi.from(".box", {
            opacity: 0,
            duration: 0.8,
            stagger: 0.4,
            ease: "power2.in",
          });
        },
        { scope: h }
      ),
      M.jsx("div", {
        ref: h,
        className: "w-full",
        children: M.jsxs("div", {
          className:
            "box w-full flex flex-col justify-center items-center mx-auto p-6 rounded-md font-bold",
          children: [
            M.jsxs("div", {
              className:
                "lg:w-1/2 w-[100%] flex flex-col justify-center items-center font-normal mb-4",
              children: [
                M.jsx("h1", {
                  className:
                    "font-bold lg:text-[4vw] text-[10vw] leading-[10vw] lg:leading-[4vw] text-center",
                  children: "Gradient Picker",
                }),
                M.jsx("p", {
                  className:
                    "lg:text-[1.4vw] text-[5vw] text-center w-full lg:w-[60%] poppins-regular-italic",
                  children:
                    "A simple fast and lightweight Gradient picker for all your needs. Pick your Gradient!",
                }),
              ],
            }),
            M.jsx("div", {
              className:
                "lg:w-1/2 w-full lg:h-[50vh] h-[30vh] rounded-xl flex justify-center items-center text-xl font-bold",
              style: { background: d() },
            }),
            M.jsxs("div", {
              className: "lg:w-[30%] w-full flex flex-col",
              children: [
                M.jsxs("div", {
                  className: "flex items-center justify-between mt-2 text-xl",
                  children: [
                    M.jsx("label", {
                      className: "mr-2 ",
                      children: "Gradient Type:",
                    }),
                    M.jsxs("select", {
                      value: c,
                      onChange: (w) => f(w.target.value),
                      className: "rounded-md border border-black p-2",
                      children: [
                        M.jsx("option", {
                          value: "linear",
                          children: "Linear Gradient",
                        }),
                        M.jsx("option", {
                          value: "radial",
                          children: "Radial Gradient",
                        }),
                      ],
                    }),
                  ],
                }),
                M.jsxs("div", {
                  className: "flex items-center justify-between mt-4 text-xl",
                  children: [
                    M.jsx("label", { className: "mr-2", children: "Angle:" }),
                    M.jsx("input", {
                      type: "range",
                      min: "0",
                      max: "360",
                      value: t,
                      onChange: (w) => e(w.target.value),
                    }),
                  ],
                }),
                c === "linear" &&
                  M.jsxs("div", {
                    className: "flex items-center justify-between mt-2 text-xl",
                    children: [
                      M.jsx("label", {
                        className: "mr-2",
                        children: "Position:",
                      }),
                      M.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        value: s,
                        onChange: (w) => u(w.target.value),
                      }),
                    ],
                  }),
                c === "radial" &&
                  M.jsxs("div", {
                    className: "flex items-center justify-between mt-2 text-xl",
                    children: [
                      M.jsx("label", {
                        className: "mr-2",
                        children: "Percentage:",
                      }),
                      M.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        value: l,
                        onChange: (w) => a(w.target.value),
                      }),
                    ],
                  }),
                M.jsxs("div", {
                  className: "flex items-center justify-between mt-2 text-xl",
                  children: [
                    M.jsx("label", { className: "mr-2", children: "Color 1:" }),
                    M.jsx("input", {
                      type: "color",
                      value: n,
                      onChange: (w) => r(w.target.value.toUpperCase()),
                      className:
                        "lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl",
                    }),
                  ],
                }),
                M.jsxs("div", {
                  className: "flex items-center justify-between mt-2 text-xl",
                  children: [
                    M.jsx("label", { className: "mr-2", children: "Color 2:" }),
                    M.jsx("input", {
                      type: "color",
                      value: i,
                      onChange: (w) => o(w.target.value.toUpperCase()),
                      className:
                        "lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl",
                    }),
                  ],
                }),
                M.jsx("div", {
                  className: "mt-4",
                  children: M.jsx("textarea", {
                    value: g,
                    readOnly: !0,
                    rows: "4",
                    className:
                      "w-full font-mono rounded-md  border border-black p-2",
                  }),
                }),
                M.jsx("div", {
                  className: "flex justify-between mt-4",
                  children: M.jsx(gl, {
                    className:
                      "bg-[#0611f2] text-[white] border-[#0611f2] uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300 font-bold ",
                    onClick: y,
                    children: "Copy Gradient",
                  }),
                }),
              ],
            }),
            M.jsxs("h1", {
              className: "mt-4 font-normal",
              children: [
                "Want a Color? Check out Our ",
                M.jsx(wl, {
                  to: "/color-picker",
                  className: "text-[#0611f2]",
                  children: "Color Picker!",
                }),
              ],
            }),
            M.jsx(zg, {
              richColors: !0,
              position: "top-right",
              duration: 3e3,
              toastOptions: { classNames: { title: "text-[#0611f2]" } },
            }),
          ],
        }),
      })
    );
  },
  y2 = R_([
    {
      path: "",
      element: M.jsx(kx, {}),
      children: [
        { path: "", element: M.jsx(Rx, {}) },
        { path: "color-picker", element: M.jsx(g2, {}) },
        { path: "gradient-picker", element: M.jsx(v2, {}) },
      ],
    },
  ]);
du.createRoot(document.getElementById("root")).render(
  M.jsx(F.StrictMode, { children: M.jsx(I_, { router: y2 }) })
);
