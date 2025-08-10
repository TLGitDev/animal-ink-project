var N1 = Object.defineProperty;
var H1 = (D, q, G) => q in D ? N1(D, q, { enumerable: !0, configurable: !0, writable: !0, value: G }) : D[q] = G;
var Io = (D, q, G) => H1(D, typeof q != "symbol" ? q + "" : q, G);
function sd(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var Ic = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function q1() {
  if (Po) return be;
  Po = 1;
  var D = Symbol.for("react.transitional.element"), q = Symbol.for("react.fragment");
  function G(J, m, ol) {
    var dl = null;
    if (ol !== void 0 && (dl = "" + ol), m.key !== void 0 && (dl = "" + m.key), "key" in m) {
      ol = {};
      for (var Ml in m)
        Ml !== "key" && (ol[Ml] = m[Ml]);
    } else ol = m;
    return m = ol.ref, {
      $$typeof: D,
      type: J,
      key: dl,
      ref: m !== void 0 ? m : null,
      props: ol
    };
  }
  return be.Fragment = q, be.jsx = G, be.jsxs = G, be;
}
var ld;
function Y1() {
  return ld || (ld = 1, Ic.exports = q1()), Ic.exports;
}
var W = Y1(), Pc = { exports: {} }, Q = {}, td;
function B1() {
  if (td) return Q;
  td = 1;
  var D = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var q = Symbol.for("react.transitional.element"), G = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), ol = Symbol.for("react.profiler"), dl = Symbol.for("react.consumer"), Ml = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function jl(r) {
    return r === null || typeof r != "object" ? null : (r = Z && r[Z] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Nl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Dl = Object.assign, yt = {};
  function Hl(r, T, O) {
    this.props = r, this.context = T, this.refs = yt, this.updater = O || Nl;
  }
  Hl.prototype.isReactComponent = {}, Hl.prototype.setState = function(r, T) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, T, "setState");
  }, Hl.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Ot() {
  }
  Ot.prototype = Hl.prototype;
  function vt(r, T, O) {
    this.props = r, this.context = T, this.refs = yt, this.updater = O || Nl;
  }
  var ml = vt.prototype = new Ot();
  ml.constructor = vt, Dl(ml, Hl.prototype), ml.isPureReactComponent = !0;
  var k = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, Xl = Object.prototype.hasOwnProperty;
  function bt(r, T, O, A, Y, nl) {
    return O = nl.ref, {
      $$typeof: q,
      type: r,
      key: T,
      ref: O !== void 0 ? O : null,
      props: nl
    };
  }
  function Kl(r, T) {
    return bt(
      r.type,
      T,
      void 0,
      void 0,
      void 0,
      r.props
    );
  }
  function St(r) {
    return typeof r == "object" && r !== null && r.$$typeof === q;
  }
  function ma(r) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(O) {
      return T[O];
    });
  }
  var at = /\/+/g;
  function ut(r, T) {
    return typeof r == "object" && r !== null && r.key != null ? ma("" + r.key) : T.toString(36);
  }
  function Ya() {
  }
  function Mt(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(Ya, Ya) : (r.status = "pending", r.then(
          function(T) {
            r.status === "pending" && (r.status = "fulfilled", r.value = T);
          },
          function(T) {
            r.status === "pending" && (r.status = "rejected", r.reason = T);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function z(r, T, O, A, Y) {
    var nl = typeof r;
    (nl === "undefined" || nl === "boolean") && (r = null);
    var X = !1;
    if (r === null) X = !0;
    else
      switch (nl) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case q:
            case G:
              X = !0;
              break;
            case x:
              return X = r._init, z(
                X(r._payload),
                T,
                O,
                A,
                Y
              );
          }
      }
    if (X)
      return Y = Y(r), X = A === "" ? "." + ut(r, 0) : A, k(Y) ? (O = "", X != null && (O = X.replace(at, "$&/") + "/"), z(Y, T, O, "", function(Lt) {
        return Lt;
      })) : Y != null && (St(Y) && (Y = Kl(
        Y,
        O + (Y.key == null || r && r.key === Y.key ? "" : ("" + Y.key).replace(
          at,
          "$&/"
        ) + "/") + X
      )), T.push(Y)), 1;
    X = 0;
    var Jl = A === "" ? "." : A + ":";
    if (k(r))
      for (var sl = 0; sl < r.length; sl++)
        A = r[sl], nl = Jl + ut(A, sl), X += z(
          A,
          T,
          O,
          nl,
          Y
        );
    else if (sl = jl(r), typeof sl == "function")
      for (r = sl.call(r), sl = 0; !(A = r.next()).done; )
        A = A.value, nl = Jl + ut(A, sl++), X += z(
          A,
          T,
          O,
          nl,
          Y
        );
    else if (nl === "object") {
      if (typeof r.then == "function")
        return z(
          Mt(r),
          T,
          O,
          A,
          Y
        );
      throw T = String(r), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function E(r, T, O) {
    if (r == null) return r;
    var A = [], Y = 0;
    return z(r, A, "", "", function(nl) {
      return T.call(O, nl, Y++);
    }), A;
  }
  function _(r) {
    if (r._status === -1) {
      var T = r._result;
      T = T(), T.then(
        function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = O);
        },
        function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = O);
        }
      ), r._status === -1 && (r._status = 0, r._result = T);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var F = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof D == "object" && typeof D.emit == "function") {
      D.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  };
  function il() {
  }
  return Q.Children = {
    map: E,
    forEach: function(r, T, O) {
      E(
        r,
        function() {
          T.apply(this, arguments);
        },
        O
      );
    },
    count: function(r) {
      var T = 0;
      return E(r, function() {
        T++;
      }), T;
    },
    toArray: function(r) {
      return E(r, function(T) {
        return T;
      }) || [];
    },
    only: function(r) {
      if (!St(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  }, Q.Component = Hl, Q.Fragment = J, Q.Profiler = ol, Q.PureComponent = vt, Q.StrictMode = m, Q.Suspense = p, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return j.H.useMemoCache(r);
    }
  }, Q.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, Q.cloneElement = function(r, T, O) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var A = Dl({}, r.props), Y = r.key, nl = void 0;
    if (T != null)
      for (X in T.ref !== void 0 && (nl = void 0), T.key !== void 0 && (Y = "" + T.key), T)
        !Xl.call(T, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && T.ref === void 0 || (A[X] = T[X]);
    var X = arguments.length - 2;
    if (X === 1) A.children = O;
    else if (1 < X) {
      for (var Jl = Array(X), sl = 0; sl < X; sl++)
        Jl[sl] = arguments[sl + 2];
      A.children = Jl;
    }
    return bt(r.type, Y, void 0, void 0, nl, A);
  }, Q.createContext = function(r) {
    return r = {
      $$typeof: Ml,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: dl,
      _context: r
    }, r;
  }, Q.createElement = function(r, T, O) {
    var A, Y = {}, nl = null;
    if (T != null)
      for (A in T.key !== void 0 && (nl = "" + T.key), T)
        Xl.call(T, A) && A !== "key" && A !== "__self" && A !== "__source" && (Y[A] = T[A]);
    var X = arguments.length - 2;
    if (X === 1) Y.children = O;
    else if (1 < X) {
      for (var Jl = Array(X), sl = 0; sl < X; sl++)
        Jl[sl] = arguments[sl + 2];
      Y.children = Jl;
    }
    if (r && r.defaultProps)
      for (A in X = r.defaultProps, X)
        Y[A] === void 0 && (Y[A] = X[A]);
    return bt(r, nl, void 0, void 0, null, Y);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(r) {
    return { $$typeof: R, render: r };
  }, Q.isValidElement = St, Q.lazy = function(r) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: r },
      _init: _
    };
  }, Q.memo = function(r, T) {
    return {
      $$typeof: $,
      type: r,
      compare: T === void 0 ? null : T
    };
  }, Q.startTransition = function(r) {
    var T = j.T, O = {};
    j.T = O;
    try {
      var A = r(), Y = j.S;
      Y !== null && Y(O, A), typeof A == "object" && A !== null && typeof A.then == "function" && A.then(il, F);
    } catch (nl) {
      F(nl);
    } finally {
      j.T = T;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, Q.use = function(r) {
    return j.H.use(r);
  }, Q.useActionState = function(r, T, O) {
    return j.H.useActionState(r, T, O);
  }, Q.useCallback = function(r, T) {
    return j.H.useCallback(r, T);
  }, Q.useContext = function(r) {
    return j.H.useContext(r);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(r, T) {
    return j.H.useDeferredValue(r, T);
  }, Q.useEffect = function(r, T, O) {
    var A = j.H;
    if (typeof O == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return A.useEffect(r, T);
  }, Q.useId = function() {
    return j.H.useId();
  }, Q.useImperativeHandle = function(r, T, O) {
    return j.H.useImperativeHandle(r, T, O);
  }, Q.useInsertionEffect = function(r, T) {
    return j.H.useInsertionEffect(r, T);
  }, Q.useLayoutEffect = function(r, T) {
    return j.H.useLayoutEffect(r, T);
  }, Q.useMemo = function(r, T) {
    return j.H.useMemo(r, T);
  }, Q.useOptimistic = function(r, T) {
    return j.H.useOptimistic(r, T);
  }, Q.useReducer = function(r, T, O) {
    return j.H.useReducer(r, T, O);
  }, Q.useRef = function(r) {
    return j.H.useRef(r);
  }, Q.useState = function(r) {
    return j.H.useState(r);
  }, Q.useSyncExternalStore = function(r, T, O) {
    return j.H.useSyncExternalStore(
      r,
      T,
      O
    );
  }, Q.useTransition = function() {
    return j.H.useTransition();
  }, Q.version = "19.1.1", Q;
}
var ad;
function ei() {
  return ad || (ad = 1, Pc.exports = B1()), Pc.exports;
}
var Vt = ei();
const j1 = /* @__PURE__ */ sd(Vt);
var li = { exports: {} }, Se = {}, ti = { exports: {} }, ai = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function G1() {
  return ud || (ud = 1, function(D) {
    function q(z, E) {
      var _ = z.length;
      z.push(E);
      l: for (; 0 < _; ) {
        var F = _ - 1 >>> 1, il = z[F];
        if (0 < m(il, E))
          z[F] = E, z[_] = il, _ = F;
        else break l;
      }
    }
    function G(z) {
      return z.length === 0 ? null : z[0];
    }
    function J(z) {
      if (z.length === 0) return null;
      var E = z[0], _ = z.pop();
      if (_ !== E) {
        z[0] = _;
        l: for (var F = 0, il = z.length, r = il >>> 1; F < r; ) {
          var T = 2 * (F + 1) - 1, O = z[T], A = T + 1, Y = z[A];
          if (0 > m(O, _))
            A < il && 0 > m(Y, O) ? (z[F] = Y, z[A] = _, F = A) : (z[F] = O, z[T] = _, F = T);
          else if (A < il && 0 > m(Y, _))
            z[F] = Y, z[A] = _, F = A;
          else break l;
        }
      }
      return E;
    }
    function m(z, E) {
      var _ = z.sortIndex - E.sortIndex;
      return _ !== 0 ? _ : z.id - E.id;
    }
    if (D.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ol = performance;
      D.unstable_now = function() {
        return ol.now();
      };
    } else {
      var dl = Date, Ml = dl.now();
      D.unstable_now = function() {
        return dl.now() - Ml;
      };
    }
    var R = [], p = [], $ = 1, x = null, Z = 3, jl = !1, Nl = !1, Dl = !1, yt = !1, Hl = typeof setTimeout == "function" ? setTimeout : null, Ot = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate != "undefined" ? setImmediate : null;
    function ml(z) {
      for (var E = G(p); E !== null; ) {
        if (E.callback === null) J(p);
        else if (E.startTime <= z)
          J(p), E.sortIndex = E.expirationTime, q(R, E);
        else break;
        E = G(p);
      }
    }
    function k(z) {
      if (Dl = !1, ml(z), !Nl)
        if (G(R) !== null)
          Nl = !0, j || (j = !0, at());
        else {
          var E = G(p);
          E !== null && Mt(k, E.startTime - z);
        }
    }
    var j = !1, Xl = -1, bt = 5, Kl = -1;
    function St() {
      return yt ? !0 : !(D.unstable_now() - Kl < bt);
    }
    function ma() {
      if (yt = !1, j) {
        var z = D.unstable_now();
        Kl = z;
        var E = !0;
        try {
          l: {
            Nl = !1, Dl && (Dl = !1, Ot(Xl), Xl = -1), jl = !0;
            var _ = Z;
            try {
              t: {
                for (ml(z), x = G(R); x !== null && !(x.expirationTime > z && St()); ) {
                  var F = x.callback;
                  if (typeof F == "function") {
                    x.callback = null, Z = x.priorityLevel;
                    var il = F(
                      x.expirationTime <= z
                    );
                    if (z = D.unstable_now(), typeof il == "function") {
                      x.callback = il, ml(z), E = !0;
                      break t;
                    }
                    x === G(R) && J(R), ml(z);
                  } else J(R);
                  x = G(R);
                }
                if (x !== null) E = !0;
                else {
                  var r = G(p);
                  r !== null && Mt(
                    k,
                    r.startTime - z
                  ), E = !1;
                }
              }
              break l;
            } finally {
              x = null, Z = _, jl = !1;
            }
            E = void 0;
          }
        } finally {
          E ? at() : j = !1;
        }
      }
    }
    var at;
    if (typeof vt == "function")
      at = function() {
        vt(ma);
      };
    else if (typeof MessageChannel != "undefined") {
      var ut = new MessageChannel(), Ya = ut.port2;
      ut.port1.onmessage = ma, at = function() {
        Ya.postMessage(null);
      };
    } else
      at = function() {
        Hl(ma, 0);
      };
    function Mt(z, E) {
      Xl = Hl(function() {
        z(D.unstable_now());
      }, E);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, D.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : bt = 0 < z ? Math.floor(1e3 / z) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, D.unstable_next = function(z) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = Z;
      }
      var _ = Z;
      Z = E;
      try {
        return z();
      } finally {
        Z = _;
      }
    }, D.unstable_requestPaint = function() {
      yt = !0;
    }, D.unstable_runWithPriority = function(z, E) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var _ = Z;
      Z = z;
      try {
        return E();
      } finally {
        Z = _;
      }
    }, D.unstable_scheduleCallback = function(z, E, _) {
      var F = D.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? F + _ : F) : _ = F, z) {
        case 1:
          var il = -1;
          break;
        case 2:
          il = 250;
          break;
        case 5:
          il = 1073741823;
          break;
        case 4:
          il = 1e4;
          break;
        default:
          il = 5e3;
      }
      return il = _ + il, z = {
        id: $++,
        callback: E,
        priorityLevel: z,
        startTime: _,
        expirationTime: il,
        sortIndex: -1
      }, _ > F ? (z.sortIndex = _, q(p, z), G(R) === null && z === G(p) && (Dl ? (Ot(Xl), Xl = -1) : Dl = !0, Mt(k, _ - F))) : (z.sortIndex = il, q(R, z), Nl || jl || (Nl = !0, j || (j = !0, at()))), z;
    }, D.unstable_shouldYield = St, D.unstable_wrapCallback = function(z) {
      var E = Z;
      return function() {
        var _ = Z;
        Z = E;
        try {
          return z.apply(this, arguments);
        } finally {
          Z = _;
        }
      };
    };
  }(ai)), ai;
}
var ed;
function X1() {
  return ed || (ed = 1, ti.exports = G1()), ti.exports;
}
var ui = { exports: {} }, Bl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function Q1() {
  if (nd) return Bl;
  nd = 1;
  var D = ei();
  function q(R) {
    var p = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        p += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + R + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G() {
  }
  var J = {
    d: {
      f: G,
      r: function() {
        throw Error(q(522));
      },
      D: G,
      C: G,
      L: G,
      m: G,
      X: G,
      S: G,
      M: G
    },
    p: 0,
    findDOMNode: null
  }, m = Symbol.for("react.portal");
  function ol(R, p, $) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: x == null ? null : "" + x,
      children: R,
      containerInfo: p,
      implementation: $
    };
  }
  var dl = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ml(R, p) {
    if (R === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, Bl.createPortal = function(R, p) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(q(299));
    return ol(R, p, null, $);
  }, Bl.flushSync = function(R) {
    var p = dl.T, $ = J.p;
    try {
      if (dl.T = null, J.p = 2, R) return R();
    } finally {
      dl.T = p, J.p = $, J.d.f();
    }
  }, Bl.preconnect = function(R, p) {
    typeof R == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, J.d.C(R, p));
  }, Bl.prefetchDNS = function(R) {
    typeof R == "string" && J.d.D(R);
  }, Bl.preinit = function(R, p) {
    if (typeof R == "string" && p && typeof p.as == "string") {
      var $ = p.as, x = Ml($, p.crossOrigin), Z = typeof p.integrity == "string" ? p.integrity : void 0, jl = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      $ === "style" ? J.d.S(
        R,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: x,
          integrity: Z,
          fetchPriority: jl
        }
      ) : $ === "script" && J.d.X(R, {
        crossOrigin: x,
        integrity: Z,
        fetchPriority: jl,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Bl.preinitModule = function(R, p) {
    if (typeof R == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var $ = Ml(
            p.as,
            p.crossOrigin
          );
          J.d.M(R, {
            crossOrigin: $,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && J.d.M(R);
  }, Bl.preload = function(R, p) {
    if (typeof R == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var $ = p.as, x = Ml($, p.crossOrigin);
      J.d.L(R, $, {
        crossOrigin: x,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Bl.preloadModule = function(R, p) {
    if (typeof R == "string")
      if (p) {
        var $ = Ml(p.as, p.crossOrigin);
        J.d.m(R, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: $,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else J.d.m(R);
  }, Bl.requestFormReset = function(R) {
    J.d.r(R);
  }, Bl.unstable_batchedUpdates = function(R, p) {
    return R(p);
  }, Bl.useFormState = function(R, p, $) {
    return dl.H.useFormState(R, p, $);
  }, Bl.useFormStatus = function() {
    return dl.H.useHostTransitionStatus();
  }, Bl.version = "19.1.1", Bl;
}
var fd;
function Z1() {
  if (fd) return ui.exports;
  fd = 1;
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (q) {
        console.error(q);
      }
  }
  return D(), ui.exports = Q1(), ui.exports;
}
var cd;
function C1() {
  if (cd) return Se;
  cd = 1;
  var D = {};
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var q = X1(), G = ei(), J = Z1();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ol(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function dl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function Ml(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function R(l) {
    if (dl(l) !== l)
      throw Error(m(188));
  }
  function p(l) {
    var t = l.alternate;
    if (!t) {
      if (t = dl(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return R(e), l;
          if (n === u) return R(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (a.alternate !== u) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Object.assign, Z = Symbol.for("react.element"), jl = Symbol.for("react.transitional.element"), Nl = Symbol.for("react.portal"), Dl = Symbol.for("react.fragment"), yt = Symbol.for("react.strict_mode"), Hl = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), vt = Symbol.for("react.consumer"), ml = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), Kl = Symbol.for("react.lazy"), St = Symbol.for("react.activity"), ma = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
  function ut(l) {
    return l === null || typeof l != "object" ? null : (l = at && l[at] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ya = Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ya ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Dl:
        return "Fragment";
      case Hl:
        return "Profiler";
      case yt:
        return "StrictMode";
      case j:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Nl:
          return "Portal";
        case ml:
          return (l.displayName || "Context") + ".Provider";
        case vt:
          return (l._context.displayName || "Context") + ".Consumer";
        case k:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case bt:
          return t = l.displayName || null, t !== null ? t : Mt(l.type) || "Memo";
        case Kl:
          t = l._payload, l = l._init;
          try {
            return Mt(l(t));
          } catch (a) {
          }
      }
    return null;
  }
  var z = Array.isArray, E = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = J.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, il = [], r = -1;
  function T(l) {
    return { current: l };
  }
  function O(l) {
    0 > r || (l.current = il[r], il[r] = null, r--);
  }
  function A(l, t) {
    r++, il[r] = l.current, l.current = t;
  }
  var Y = T(null), nl = T(null), X = T(null), Jl = T(null);
  function sl(l, t) {
    switch (A(X, t), A(nl, l), A(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Oo(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Oo(t), l = Mo(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    O(Y), A(Y, l);
  }
  function Lt() {
    O(Y), O(nl), O(X);
  }
  function Bn(l) {
    l.memoizedState !== null && A(Jl, l);
    var t = Y.current, a = Mo(t, l.type);
    t !== a && (A(nl, l), A(Y, a));
  }
  function pe(l) {
    nl.current === l && (O(Y), O(nl)), Jl.current === l && (O(Jl), ye._currentValue = F);
  }
  var jn = Object.prototype.hasOwnProperty, Gn = q.unstable_scheduleCallback, Xn = q.unstable_cancelCallback, rd = q.unstable_shouldYield, od = q.unstable_requestPaint, pt = q.unstable_now, dd = q.unstable_getCurrentPriorityLevel, ni = q.unstable_ImmediatePriority, fi = q.unstable_UserBlockingPriority, Te = q.unstable_NormalPriority, yd = q.unstable_LowPriority, ci = q.unstable_IdlePriority, vd = q.log, hd = q.unstable_setDisableYieldValue, Tu = null, wl = null;
  function Kt(l) {
    if (typeof vd == "function" && hd(l), wl && typeof wl.setStrictMode == "function")
      try {
        wl.setStrictMode(Tu, l);
      } catch (t) {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : bd, md = Math.log, gd = Math.LN2;
  function bd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (md(l) / gd | 0) | 0;
  }
  var Ee = 256, ze = 4194304;
  function ga(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = ga(u) : (f &= c, f !== 0 ? e = ga(f) : a || (a = c & ~l, a !== 0 && (e = ga(a))))) : (c = u & ~n, c !== 0 ? e = ga(c) : f !== 0 ? e = ga(f) : a || (a = u & ~l, a !== 0 && (e = ga(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Eu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Sd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ii() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function si() {
    var l = ze;
    return ze <<= 1, (ze & 62914560) === 0 && (ze = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function zu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function pd(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - kl(a), S = 1 << g;
      c[g] = 0, i[g] = -1;
      var v = y[g];
      if (v !== null)
        for (y[g] = null, g = 0; g < v.length; g++) {
          var h = v[g];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~S;
    }
    u !== 0 && ri(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function ri(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - kl(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090;
  }
  function oi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - kl(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function Zn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Cn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function di() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Jo(l.type));
  }
  function Td(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var Jt = Math.random().toString(36).slice(2), ql = "__reactFiber$" + Jt, Ql = "__reactProps$" + Jt, Ba = "__reactContainer$" + Jt, Vn = "__reactEvents$" + Jt, Ed = "__reactListeners$" + Jt, zd = "__reactHandles$" + Jt, yi = "__reactResources$" + Jt, Au = "__reactMarker$" + Jt;
  function Ln(l) {
    delete l[ql], delete l[Ql], delete l[Vn], delete l[Ed], delete l[zd];
  }
  function ja(l) {
    var t = l[ql];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Ba] || a[ql]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = xo(l); l !== null; ) {
            if (a = l[ql]) return a;
            l = xo(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Ga(l) {
    if (l = l[ql] || l[Ba]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function _u(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Xa(l) {
    var t = l[yi];
    return t || (t = l[yi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function zl(l) {
    l[Au] = !0;
  }
  var vi = /* @__PURE__ */ new Set(), hi = {};
  function ba(l, t) {
    Qa(l, t), Qa(l + "Capture", t);
  }
  function Qa(l, t) {
    for (hi[l] = t, l = 0; l < t.length; l++)
      vi.add(t[l]);
  }
  var Ad = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mi = {}, gi = {};
  function _d(l) {
    return jn.call(gi, l) ? !0 : jn.call(mi, l) ? !1 : Ad.test(l) ? gi[l] = !0 : (mi[l] = !0, !1);
  }
  function _e(l, t, a) {
    if (_d(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Oe(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Dt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Kn, bi;
  function Za(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Kn = t && t[1] || "", bi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kn + l + bi;
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var S = function() {
                throw Error();
              };
              if (Object.defineProperty(S.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(S, []);
                } catch (h) {
                  var v = h;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (h) {
                  v = h;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                v = h;
              }
              (S = l()) && typeof S.catch == "function" && S.catch(function() {
              });
            }
          } catch (h) {
            if (h && v && typeof h.stack == "string")
              return [h.stack, v.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), y = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === y.length)
          for (u = i.length - 1, e = y.length - 1; 1 <= u && 0 <= e && i[u] !== y[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== y[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== y[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Jn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Za(a) : "";
  }
  function Od(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Za(l.type);
      case 16:
        return Za("Lazy");
      case 13:
        return Za("Suspense");
      case 19:
        return Za("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Za("Activity");
      default:
        return "";
    }
  }
  function Si(l) {
    try {
      var t = "";
      do
        t += Od(l), l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Md(l) {
    var t = pi(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), u = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof a != "undefined" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = Md(l));
  }
  function Ti(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = pi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document != "undefined" ? document : void 0), typeof l == "undefined") return null;
    try {
      return l.activeElement || l.body;
    } catch (t) {
      return l.body;
    }
  }
  var Dd = /[\n"\\]/g;
  function nt(l) {
    return l.replace(
      Dd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kn(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + et(t)) : l.value !== "" + et(t) && (l.value = "" + et(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Wn(l, f, et(t)) : a != null ? Wn(l, f, et(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + et(c) : l.removeAttribute("name");
  }
  function Ei(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      a = a != null ? "" + et(a) : "", t = t != null ? "" + et(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u != null ? u : e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Wn(l, t, a) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ca(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + et(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zi(l, t, a) {
    if (t != null && (t = "" + et(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + et(a) : "";
  }
  function Ai(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(m(92));
        if (z(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = et(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
  }
  function Va(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ud = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _i(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ud.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Oi(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && _i(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && _i(l, n, t[n]);
  }
  function $n(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Rd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), xd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return xd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Fn = null;
  function In(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var La = null, Ka = null;
  function Mi(l) {
    var t = Ga(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (kn(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + nt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Ql] || null;
                if (!e) throw Error(m(90));
                kn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Ti(u);
          }
          break l;
        case "textarea":
          zi(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ca(l, !!a.multiple, t, !1);
      }
    }
  }
  var Pn = !1;
  function Di(l, t, a) {
    if (Pn) return l(t, a);
    Pn = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (Pn = !1, (La !== null || Ka !== null) && (hn(), La && (t = La, l = Ka, Ka = La = null, Mi(t), l)))
        for (t = 0; t < l.length; t++) Mi(l[t]);
    }
  }
  function Ou(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Ql] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        m(231, t, typeof a)
      );
    return a;
  }
  var Ut = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), lf = !1;
  if (Ut)
    try {
      var Mu = {};
      Object.defineProperty(Mu, "passive", {
        get: function() {
          lf = !0;
        }
      }), window.addEventListener("test", Mu, Mu), window.removeEventListener("test", Mu, Mu);
    } catch (l) {
      lf = !1;
    }
  var wt = null, tf = null, Re = null;
  function Ui() {
    if (Re) return Re;
    var l, t = tf, a = t.length, u, e = "value" in wt ? wt.value : wt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Re = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function xe(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Ri() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Ri, this.isPropagationStopped = Ri, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, He = Zl(Sa), Du = x({}, Sa, { view: 0, detail: 0 }), Nd = Zl(Du), af, uf, Uu, qe = x({}, Du, {
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
    getModifierState: nf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Uu && (Uu && l.type === "mousemove" ? (af = l.screenX - Uu.screenX, uf = l.screenY - Uu.screenY) : uf = af = 0, Uu = l), af);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uf;
    }
  }), xi = Zl(qe), Hd = x({}, qe, { dataTransfer: 0 }), qd = Zl(Hd), Yd = x({}, Du, { relatedTarget: 0 }), ef = Zl(Yd), Bd = x({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jd = Zl(Bd), Gd = x({}, Sa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Xd = Zl(Gd), Qd = x({}, Sa, { data: 0 }), Ni = Zl(Qd), Zd = {
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
    MozPrintableKey: "Unidentified"
  }, Cd = {
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
    224: "Meta"
  }, Vd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ld(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Vd[l]) ? !!t[l] : !1;
  }
  function nf() {
    return Ld;
  }
  var Kd = x({}, Du, {
    key: function(l) {
      if (l.key) {
        var t = Zd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = xe(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nf,
    charCode: function(l) {
      return l.type === "keypress" ? xe(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? xe(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Jd = Zl(Kd), wd = x({}, qe, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Hi = Zl(wd), kd = x({}, Du, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf
  }), Wd = Zl(kd), $d = x({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fd = Zl($d), Id = x({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pd = Zl(Id), l0 = x({}, Sa, {
    newState: 0,
    oldState: 0
  }), t0 = Zl(l0), a0 = [9, 13, 27, 32], ff = Ut && "CompositionEvent" in window, Ru = null;
  Ut && "documentMode" in document && (Ru = document.documentMode);
  var u0 = Ut && "TextEvent" in window && !Ru, qi = Ut && (!ff || Ru && 8 < Ru && 11 >= Ru), Yi = " ", Bi = !1;
  function ji(l, t) {
    switch (l) {
      case "keyup":
        return a0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ja = !1;
  function e0(l, t) {
    switch (l) {
      case "compositionend":
        return Gi(t);
      case "keypress":
        return t.which !== 32 ? null : (Bi = !0, Yi);
      case "textInput":
        return l = t.data, l === Yi && Bi ? null : l;
      default:
        return null;
    }
  }
  function n0(l, t) {
    if (Ja)
      return l === "compositionend" || !ff && ji(l, t) ? (l = Ui(), Re = tf = wt = null, Ja = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var f0 = {
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
    week: !0
  };
  function Xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!f0[l.type] : t === "textarea";
  }
  function Qi(l, t, a, u) {
    La ? Ka ? Ka.push(u) : Ka = [u] : La = u, t = Tn(t, "onChange"), 0 < t.length && (a = new He(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var xu = null, Nu = null;
  function c0(l) {
    To(l, 0);
  }
  function Ye(l) {
    var t = _u(l);
    if (Ti(t)) return l;
  }
  function Zi(l, t) {
    if (l === "change") return t;
  }
  var Ci = !1;
  if (Ut) {
    var cf;
    if (Ut) {
      var sf = "oninput" in document;
      if (!sf) {
        var Vi = document.createElement("div");
        Vi.setAttribute("oninput", "return;"), sf = typeof Vi.oninput == "function";
      }
      cf = sf;
    } else cf = !1;
    Ci = cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    xu && (xu.detachEvent("onpropertychange", Ki), Nu = xu = null);
  }
  function Ki(l) {
    if (l.propertyName === "value" && Ye(Nu)) {
      var t = [];
      Qi(
        t,
        Nu,
        l,
        In(l)
      ), Di(c0, t);
    }
  }
  function i0(l, t, a) {
    l === "focusin" ? (Li(), xu = t, Nu = a, xu.attachEvent("onpropertychange", Ki)) : l === "focusout" && Li();
  }
  function s0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Nu);
  }
  function r0(l, t) {
    if (l === "click") return Ye(t);
  }
  function o0(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function d0(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Wl = typeof Object.is == "function" ? Object.is : d0;
  function Hu(l, t) {
    if (Wl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!jn.call(t, e) || !Wl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Ji(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wi(l, t) {
    var a = Ji(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ji(a);
    }
  }
  function ki(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ki(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch (u) {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function rf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var y0 = Ut && "documentMode" in document && 11 >= document.documentMode, wa = null, of = null, qu = null, df = !1;
  function $i(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    df || wa == null || wa !== De(u) || (u = wa, "selectionStart" in u && rf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), qu && Hu(qu, u) || (qu = u, u = Tn(of, "onSelect"), 0 < u.length && (t = new He(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = wa)));
  }
  function pa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var ka = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, yf = {}, Fi = {};
  Ut && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function Ta(l) {
    if (yf[l]) return yf[l];
    if (!ka[l]) return l;
    var t = ka[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Fi)
        return yf[l] = t[a];
    return l;
  }
  var Ii = Ta("animationend"), Pi = Ta("animationiteration"), ls = Ta("animationstart"), v0 = Ta("transitionrun"), h0 = Ta("transitionstart"), m0 = Ta("transitioncancel"), ts = Ta("transitionend"), as = /* @__PURE__ */ new Map(), vf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vf.push("scrollEnd");
  function ht(l, t) {
    as.set(l, t), ba(t, [l]);
  }
  var us = /* @__PURE__ */ new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = us.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: Si(t)
      }, us.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Si(t)
    };
  }
  var ct = [], Wa = 0, hf = 0;
  function Be() {
    for (var l = Wa, t = hf = Wa = 0; t < l; ) {
      var a = ct[t];
      ct[t++] = null;
      var u = ct[t];
      ct[t++] = null;
      var e = ct[t];
      ct[t++] = null;
      var n = ct[t];
      if (ct[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && es(a, e, n);
    }
  }
  function je(l, t, a, u) {
    ct[Wa++] = l, ct[Wa++] = t, ct[Wa++] = a, ct[Wa++] = u, hf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function mf(l, t, a, u) {
    return je(l, t, a, u), Ge(l);
  }
  function $a(l, t) {
    return je(l, null, null, t), Ge(l);
  }
  function es(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - kl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Ge(l) {
    if (50 < ne)
      throw ne = 0, Ec = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Fa = {};
  function g0(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $l(l, t, a, u) {
    return new g0(l, t, a, u);
  }
  function gf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
    var a = l.alternate;
    return a === null ? (a = $l(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ns(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") gf(l) && (f = 1);
    else if (typeof l == "string")
      f = S1(
        l,
        a,
        Y.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case St:
          return l = $l(31, a, t, e), l.elementType = St, l.lanes = n, l;
        case Dl:
          return Ea(a.children, e, n, t);
        case yt:
          f = 8, e |= 24;
          break;
        case Hl:
          return l = $l(12, a, t, e | 2), l.elementType = Hl, l.lanes = n, l;
        case j:
          return l = $l(13, a, t, e), l.elementType = j, l.lanes = n, l;
        case Xl:
          return l = $l(19, a, t, e), l.elementType = Xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ot:
              case ml:
                f = 10;
                break l;
              case vt:
                f = 9;
                break l;
              case k:
                f = 11;
                break l;
              case bt:
                f = 14;
                break l;
              case Kl:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = $l(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ea(l, t, a, u) {
    return l = $l(7, l, u, t), l.lanes = a, l;
  }
  function bf(l, t, a) {
    return l = $l(6, l, null, t), l.lanes = a, l;
  }
  function Sf(l, t, a) {
    return t = $l(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Ia = [], Pa = 0, Qe = null, Ze = 0, it = [], st = 0, za = null, xt = 1, Nt = "";
  function Aa(l, t) {
    Ia[Pa++] = Ze, Ia[Pa++] = Qe, Qe = l, Ze = t;
  }
  function fs(l, t, a) {
    it[st++] = xt, it[st++] = Nt, it[st++] = za, za = l;
    var u = xt;
    l = Nt;
    var e = 32 - kl(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - kl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, xt = 1 << 32 - kl(t) + e | a << e | u, Nt = n + l;
    } else
      xt = 1 << n | a << e | u, Nt = l;
  }
  function pf(l) {
    l.return !== null && (Aa(l, 1), fs(l, 1, 0));
  }
  function Tf(l) {
    for (; l === Qe; )
      Qe = Ia[--Pa], Ia[Pa] = null, Ze = Ia[--Pa], Ia[Pa] = null;
    for (; l === za; )
      za = it[--st], it[st] = null, Nt = it[--st], it[st] = null, xt = it[--st], it[st] = null;
  }
  var Gl = null, vl = null, P = !1, _a = null, Tt = !1, Ef = Error(m(519));
  function Oa(l) {
    var t = Error(m(418, ""));
    throw ju(ft(t, l)), Ef;
  }
  function cs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[ql] = l, t[Ql] = u, a) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ce.length; a++)
          K(ce[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), Ei(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), Me(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Ai(t, u.value, u.defaultValue, u.children), Me(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || _o(t.textContent, a) ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)), u.onScroll != null && K("scroll", t), u.onScrollEnd != null && K("scrollend", t), u.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Oa(l);
  }
  function is(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function Yu(l) {
    if (l !== Gl) return !1;
    if (!P) return is(l), P = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Gc(l.type, l.memoizedProps)), a = !a), a && vl && Oa(l), is(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (t === 0) {
                vl = gt(l.nextSibling);
                break l;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          l = l.nextSibling;
        }
        vl = null;
      }
    } else
      t === 27 ? (t = vl, sa(l.type) ? (l = Cc, Cc = null, vl = l) : vl = t) : vl = Gl ? gt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Bu() {
    vl = Gl = null, P = !1;
  }
  function ss() {
    var l = _a;
    return l !== null && (Ll === null ? Ll = l : Ll.push.apply(
      Ll,
      l
    ), _a = null), l;
  }
  function ju(l) {
    _a === null ? _a = [l] : _a.push(l);
  }
  var zf = T(null), Ma = null, Ht = null;
  function kt(l, t, a) {
    A(zf, t._currentValue), t._currentValue = a;
  }
  function qt(l) {
    l._currentValue = zf.current, O(zf);
  }
  function Af(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function _f(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Af(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Af(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Gu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Wl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Jl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ye) : l = [ye]);
      }
      e = e.return;
    }
    l !== null && _f(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ce(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Wl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Da(l) {
    Ma = l, Ht = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return rs(Ma, l);
  }
  function Ve(l, t) {
    return Ma === null && Da(l), rs(l, t);
  }
  function rs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Ht === null) {
      if (l === null) throw Error(m(308));
      Ht = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Ht = Ht.next = t;
    return a;
  }
  var b0 = typeof AbortController != "undefined" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, S0 = q.unstable_scheduleCallback, p0 = q.unstable_NormalPriority, Tl = {
    $$typeof: ml,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Of() {
    return {
      controller: new b0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xu(l) {
    l.refCount--, l.refCount === 0 && S0(p0, function() {
      l.controller.abort();
    });
  }
  var Qu = null, Mf = 0, lu = 0, tu = null;
  function T0(l, t) {
    if (Qu === null) {
      var a = Qu = [];
      Mf = 0, lu = Uc(), tu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Mf++, t.then(os, os), t;
  }
  function os() {
    if (--Mf === 0 && Qu !== null) {
      tu !== null && (tu.status = "fulfilled");
      var l = Qu;
      Qu = null, lu = 0, tu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function E0(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var ds = E.S;
  E.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && T0(l, t), ds !== null && ds(l, t);
  };
  var Ua = T(null);
  function Df() {
    var l = Ua.current;
    return l !== null ? l : cl.pooledCache;
  }
  function Le(l, t) {
    t === null ? A(Ua, Ua.current) : A(Ua, t.pool);
  }
  function ys() {
    var l = Df();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var Zu = Error(m(460)), vs = Error(m(474)), Ke = Error(m(542)), Uf = { then: function() {
  } };
  function hs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Je() {
  }
  function ms(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Je, Je), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, bs(l), l;
      default:
        if (typeof t.status == "string") t.then(Je, Je);
        else {
          if (l = cl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, bs(l), l;
        }
        throw Cu = t, Zu;
    }
  }
  var Cu = null;
  function gs() {
    if (Cu === null) throw Error(m(459));
    var l = Cu;
    return Cu = null, l;
  }
  function bs(l) {
    if (l === Zu || l === Ke)
      throw Error(m(483));
  }
  var Wt = !1;
  function Rf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function $t(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ft(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ll & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Ge(l), es(l, null, a), t;
    }
    return je(l, u, t, a), Ge(l);
  }
  function Vu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, oi(l, a);
    }
  }
  function Nf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Hf = !1;
  function Lu() {
    if (Hf) {
      var l = tu;
      if (l !== null) throw l;
    }
  }
  function Ku(l, t, a, u) {
    Hf = !1;
    var e = l.updateQueue;
    Wt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = y : c.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var S = e.baseState;
      f = 0, g = y = i = null, c = n;
      do {
        var v = c.lane & -536870913, h = v !== c.lane;
        if (h ? (w & v) === v : (u & v) === v) {
          v !== 0 && v === lu && (Hf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var B = l, N = c;
            v = t;
            var el = a;
            switch (N.tag) {
              case 1:
                if (B = N.payload, typeof B == "function") {
                  S = B.call(el, S, v);
                  break l;
                }
                S = B;
                break l;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = N.payload, v = typeof B == "function" ? B.call(el, S, v) : B, v == null) break l;
                S = x({}, S, v);
                break l;
              case 2:
                Wt = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, h && (l.flags |= 8192), h = e.callbacks, h === null ? e.callbacks = [v] : h.push(v));
        } else
          h = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (y = g = h, i = S) : g = g.next = h, f |= v;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          h = c, c = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = S), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), na |= f, l.lanes = f, l.memoizedState = S;
    }
  }
  function Ss(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function ps(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Ss(a[l], t);
  }
  var au = T(null), we = T(0);
  function Ts(l, t) {
    l = Zt, A(we, l), A(au, t), Zt = l | t.baseLanes;
  }
  function qf() {
    A(we, Zt), A(au, au.current);
  }
  function Yf() {
    Zt = we.current, O(au), O(we);
  }
  var It = 0, C = null, al = null, Sl = null, ke = !1, uu = !1, Ra = !1, We = 0, Ju = 0, eu = null, z0 = 0;
  function gl() {
    throw Error(m(321));
  }
  function Bf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Wl(l[a], t[a])) return !1;
    return !0;
  }
  function jf(l, t, a, u, e, n) {
    return It = n, C = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = l === null || l.memoizedState === null ? er : nr, Ra = !1, n = a(u, e), Ra = !1, uu && (n = zs(
      t,
      a,
      u,
      e
    )), Es(l), n;
  }
  function Es(l) {
    E.H = tn;
    var t = al !== null && al.next !== null;
    if (It = 0, Sl = al = C = null, ke = !1, Ju = 0, eu = null, t) throw Error(m(300));
    l === null || Al || (l = l.dependencies, l !== null && Ce(l) && (Al = !0));
  }
  function zs(l, t, a, u) {
    C = l;
    var e = 0;
    do {
      if (uu && (eu = null), Ju = 0, uu = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Sl = al = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = R0, n = t(a, u);
    } while (uu);
    return n;
  }
  function A0() {
    var l = E.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? wu(t) : t, l = l.useState()[0], (al !== null ? al.memoizedState : null) !== l && (C.flags |= 1024), t;
  }
  function Gf() {
    var l = We !== 0;
    return We = 0, l;
  }
  function Xf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Qf(l) {
    if (ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      ke = !1;
    }
    It = 0, Sl = al = C = null, uu = !1, Ju = We = 0, eu = null;
  }
  function Cl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Sl === null ? C.memoizedState = Sl = l : Sl = Sl.next = l, Sl;
  }
  function pl() {
    if (al === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = Sl === null ? C.memoizedState : Sl.next;
    if (t !== null)
      Sl = t, al = l;
    else {
      if (l === null)
        throw C.alternate === null ? Error(m(467)) : Error(m(310));
      al = l, l = {
        memoizedState: al.memoizedState,
        baseState: al.baseState,
        baseQueue: al.baseQueue,
        queue: al.queue,
        next: null
      }, Sl === null ? C.memoizedState = Sl = l : Sl = Sl.next = l;
    }
    return Sl;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wu(l) {
    var t = Ju;
    return Ju += 1, eu === null && (eu = []), l = ms(eu, l, t), t = C, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? er : nr), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return wu(l);
      if (l.$$typeof === ml) return Yl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Cf(l) {
    var t = null, a = C.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = C.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Zf(), C.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = ma;
    return t.index++, a;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Fe(l) {
    var t = pl();
    return Vf(t, al, l);
  }
  function Vf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, y = t, g = !1;
      do {
        var S = y.lane & -536870913;
        if (S !== y.lane ? (w & S) === S : (It & S) === S) {
          var v = y.revertLane;
          if (v === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), S === lu && (g = !0);
          else if ((It & v) === v) {
            y = y.next, v === lu && (g = !0);
            continue;
          } else
            S = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = S, f = n) : i = i.next = S, C.lanes |= v, na |= v;
          S = y.action, Ra && a(n, S), n = y.hasEagerState ? y.eagerState : a(n, S);
        } else
          v = {
            lane: S,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = v, f = n) : i = i.next = v, C.lanes |= S, na |= S;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !Wl(n, l.memoizedState) && (Al = !0, g && (a = tu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Lf(l) {
    var t = pl(), a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Wl(n, t.memoizedState) || (Al = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function As(l, t, a) {
    var u = C, e = pl(), n = P;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var f = !Wl(
      (al || e).memoizedState,
      a
    );
    f && (e.memoizedState = a, Al = !0), e = e.queue;
    var c = Ms.bind(null, u, e, l);
    if (ku(2048, 8, c, [l]), e.getSnapshot !== t || f || Sl !== null && Sl.memoizedState.tag & 1) {
      if (u.flags |= 2048, nu(
        9,
        Ie(),
        Os.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), cl === null) throw Error(m(349));
      n || (It & 124) !== 0 || _s(u, t, a);
    }
    return a;
  }
  function _s(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = C.updateQueue, t === null ? (t = Zf(), C.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Os(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Ds(t) && Us(l);
  }
  function Ms(l, t, a) {
    return a(function() {
      Ds(t) && Us(l);
    });
  }
  function Ds(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Wl(l, a);
    } catch (u) {
      return !0;
    }
  }
  function Us(l) {
    var t = $a(l, 2);
    t !== null && tt(t, l, 2);
  }
  function Kf(l) {
    var t = Cl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ra) {
        Kt(!0);
        try {
          a();
        } finally {
          Kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: l
    }, t;
  }
  function Rs(l, t, a, u) {
    return l.baseState = a, Vf(
      l,
      al,
      typeof u == "function" ? u : Yt
    );
  }
  function _0(l, t, a, u, e) {
    if (ln(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      E.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, xs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function xs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = E.T, f = {};
      E.T = f;
      try {
        var c = a(e, u), i = E.S;
        i !== null && i(f, c), Ns(l, t, c);
      } catch (y) {
        Jf(l, t, y);
      } finally {
        E.T = n;
      }
    } else
      try {
        n = a(e, u), Ns(l, t, n);
      } catch (y) {
        Jf(l, t, y);
      }
  }
  function Ns(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Hs(l, t, u);
      },
      function(u) {
        return Jf(l, t, u);
      }
    ) : Hs(l, t, a);
  }
  function Hs(l, t, a) {
    t.status = "fulfilled", t.value = a, qs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, xs(l, a)));
  }
  function Jf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, qs(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function qs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ys(l, t) {
    return t;
  }
  function Bs(l, t) {
    if (P) {
      var a = cl.formState;
      if (a !== null) {
        l: {
          var u = C;
          if (P) {
            if (vl) {
              t: {
                for (var e = vl, n = Tt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = gt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                vl = gt(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Oa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Cl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ys,
      lastRenderedState: t
    }, a.queue = u, a = tr.bind(
      null,
      C,
      u
    ), u.dispatch = a, u = Kf(!1), n = Ff.bind(
      null,
      C,
      !1,
      u.queue
    ), u = Cl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = _0.bind(
      null,
      C,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function js(l) {
    var t = pl();
    return Gs(t, al, l);
  }
  function Gs(l, t, a) {
    if (t = Vf(
      l,
      t,
      Ys
    )[0], l = Fe(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = wu(t);
      } catch (f) {
        throw f === Zu ? Ke : f;
      }
    else u = t;
    t = pl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (C.flags |= 2048, nu(
      9,
      Ie(),
      O0.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function O0(l, t) {
    l.action = t;
  }
  function Xs(l) {
    var t = pl(), a = al;
    if (a !== null)
      return Gs(t, a, l);
    pl(), t = t.memoizedState, a = pl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function nu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = C.updateQueue, t === null && (t = Zf(), C.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Ie() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qs() {
    return pl().memoizedState;
  }
  function Pe(l, t, a, u) {
    var e = Cl();
    u = u === void 0 ? null : u, C.flags |= l, e.memoizedState = nu(
      1 | t,
      Ie(),
      a,
      u
    );
  }
  function ku(l, t, a, u) {
    var e = pl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    al !== null && u !== null && Bf(u, al.memoizedState.deps) ? e.memoizedState = nu(t, n, a, u) : (C.flags |= l, e.memoizedState = nu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Zs(l, t) {
    Pe(8390656, 8, l, t);
  }
  function Cs(l, t) {
    ku(2048, 8, l, t);
  }
  function Vs(l, t) {
    return ku(4, 2, l, t);
  }
  function Ls(l, t) {
    return ku(4, 4, l, t);
  }
  function Ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Js(l, t, a) {
    a = a != null ? a.concat([l]) : null, ku(4, 4, Ks.bind(null, t, l), a);
  }
  function wf() {
  }
  function ws(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Bf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function ks(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Bf(t, u[1]))
      return u[0];
    if (u = l(), Ra) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function kf(l, t, a) {
    return a === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = Fr(), C.lanes |= l, na |= l, a);
  }
  function Ws(l, t, a, u) {
    return Wl(a, t) ? a : au.current !== null ? (l = kf(l, a, u), Wl(l, t) || (Al = !0), l) : (It & 42) === 0 ? (Al = !0, l.memoizedState = a) : (l = Fr(), C.lanes |= l, na |= l, t);
  }
  function $s(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = E.T, c = {};
    E.T = c, Ff(l, !1, t, a);
    try {
      var i = e(), y = E.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = E0(
          i,
          u
        );
        Wu(
          l,
          t,
          g,
          lt(l)
        );
      } else
        Wu(
          l,
          t,
          u,
          lt(l)
        );
    } catch (S) {
      Wu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: S },
        lt()
      );
    } finally {
      _.p = n, E.T = f;
    }
  }
  function M0() {
  }
  function Wf(l, t, a, u) {
    if (l.tag !== 5) throw Error(m(476));
    var e = Fs(l).queue;
    $s(
      l,
      e,
      t,
      F,
      a === null ? M0 : function() {
        return Is(l), a(u);
      }
    );
  }
  function Fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: F
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Is(l) {
    var t = Fs(l).next.queue;
    Wu(l, t, {}, lt());
  }
  function $f() {
    return Yl(ye);
  }
  function Ps() {
    return pl().memoizedState;
  }
  function lr() {
    return pl().memoizedState;
  }
  function D0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = lt();
          l = $t(a);
          var u = Ft(t, l, a);
          u !== null && (tt(u, t, a), Vu(u, t, a)), t = { cache: Of() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function U0(l, t, a) {
    var u = lt();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l) ? ar(t, a) : (a = mf(l, t, a, u), a !== null && (tt(a, l, u), ur(a, t, u)));
  }
  function tr(l, t, a) {
    var u = lt();
    Wu(l, t, a, u);
  }
  function Wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ln(l)) ar(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = c, Wl(c, f))
            return je(l, t, e, 0), cl === null && Be(), !1;
        } catch (i) {
        } finally {
        }
      if (a = mf(l, t, e, u), a !== null)
        return tt(a, l, u), ur(a, t, u), !0;
    }
    return !1;
  }
  function Ff(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Uc(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l)) {
      if (t) throw Error(m(479));
    } else
      t = mf(
        l,
        a,
        u,
        2
      ), t !== null && tt(t, l, 2);
  }
  function ln(l) {
    var t = l.alternate;
    return l === C || t !== null && t === C;
  }
  function ar(l, t) {
    uu = ke = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function ur(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, oi(l, a);
    }
  }
  var tn = {
    readContext: Yl,
    use: $e,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl
  }, er = {
    readContext: Yl,
    use: $e,
    useCallback: function(l, t) {
      return Cl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Yl,
    useEffect: Zs,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Pe(
        4194308,
        4,
        Ks.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return Pe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Pe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Cl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ra) {
        Kt(!0);
        try {
          l();
        } finally {
          Kt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Cl();
      if (a !== void 0) {
        var e = a(t);
        if (Ra) {
          Kt(!0);
          try {
            a(t);
          } finally {
            Kt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = U0.bind(
        null,
        C,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Cl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Kf(l);
      var t = l.queue, a = tr.bind(null, C, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = Cl();
      return kf(a, l, t);
    },
    useTransition: function() {
      var l = Kf(!1);
      return l = $s.bind(
        null,
        C,
        l.queue,
        !0,
        !1
      ), Cl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = C, e = Cl();
      if (P) {
        if (a === void 0)
          throw Error(m(407));
        a = a();
      } else {
        if (a = t(), cl === null)
          throw Error(m(349));
        (w & 124) !== 0 || _s(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Zs(Ms.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, nu(
        9,
        Ie(),
        Os.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Cl(), t = cl.identifierPrefix;
      if (P) {
        var a = Nt, u = xt;
        a = (u & ~(1 << 32 - kl(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = We++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = z0++, t = "«" + t + "r" + a.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: $f,
    useFormState: Bs,
    useActionState: Bs,
    useOptimistic: function(l) {
      var t = Cl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ff.bind(
        null,
        C,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Cf,
    useCacheRefresh: function() {
      return Cl().memoizedState = D0.bind(
        null,
        C
      );
    }
  }, nr = {
    readContext: Yl,
    use: $e,
    useCallback: ws,
    useContext: Yl,
    useEffect: Cs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: Fe,
    useRef: Qs,
    useState: function() {
      return Fe(Yt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = pl();
      return Ws(
        a,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fe(Yt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : wu(l),
        t
      ];
    },
    useSyncExternalStore: As,
    useId: Ps,
    useHostTransitionStatus: $f,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(l, t) {
      var a = pl();
      return Rs(a, al, l, t);
    },
    useMemoCache: Cf,
    useCacheRefresh: lr
  }, R0 = {
    readContext: Yl,
    use: $e,
    useCallback: ws,
    useContext: Yl,
    useEffect: Cs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: Lf,
    useRef: Qs,
    useState: function() {
      return Lf(Yt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = pl();
      return al === null ? kf(a, l, t) : Ws(
        a,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Lf(Yt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : wu(l),
        t
      ];
    },
    useSyncExternalStore: As,
    useId: Ps,
    useHostTransitionStatus: $f,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l, t) {
      var a = pl();
      return al !== null ? Rs(a, al, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Cf,
    useCacheRefresh: lr
  }, fu = null, $u = 0;
  function an(l) {
    var t = $u;
    return $u += 1, fu === null && (fu = []), ms(fu, l, t);
  }
  function Fu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === Z ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function fr(l) {
    var t = l._init;
    return t(l._payload);
  }
  function cr(l) {
    function t(o, s) {
      if (l) {
        var d = o.deletions;
        d === null ? (o.deletions = [s], o.flags |= 16) : d.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; )
        t(o, s), s = s.sibling;
      return null;
    }
    function u(o) {
      for (var s = /* @__PURE__ */ new Map(); o !== null; )
        o.key !== null ? s.set(o.key, o) : s.set(o.index, o), o = o.sibling;
      return s;
    }
    function e(o, s) {
      return o = Rt(o, s), o.index = 0, o.sibling = null, o;
    }
    function n(o, s, d) {
      return o.index = d, l ? (d = o.alternate, d !== null ? (d = d.index, d < s ? (o.flags |= 67108866, s) : d) : (o.flags |= 67108866, s)) : (o.flags |= 1048576, s);
    }
    function f(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function c(o, s, d, b) {
      return s === null || s.tag !== 6 ? (s = bf(d, o.mode, b), s.return = o, s) : (s = e(s, d), s.return = o, s);
    }
    function i(o, s, d, b) {
      var M = d.type;
      return M === Dl ? g(
        o,
        s,
        d.props.children,
        b,
        d.key
      ) : s !== null && (s.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Kl && fr(M) === s.type) ? (s = e(s, d.props), Fu(s, d), s.return = o, s) : (s = Xe(
        d.type,
        d.key,
        d.props,
        null,
        o.mode,
        b
      ), Fu(s, d), s.return = o, s);
    }
    function y(o, s, d, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Sf(d, o.mode, b), s.return = o, s) : (s = e(s, d.children || []), s.return = o, s);
    }
    function g(o, s, d, b, M) {
      return s === null || s.tag !== 7 ? (s = Ea(
        d,
        o.mode,
        b,
        M
      ), s.return = o, s) : (s = e(s, d), s.return = o, s);
    }
    function S(o, s, d) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = bf(
          "" + s,
          o.mode,
          d
        ), s.return = o, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case jl:
            return d = Xe(
              s.type,
              s.key,
              s.props,
              null,
              o.mode,
              d
            ), Fu(d, s), d.return = o, d;
          case Nl:
            return s = Sf(
              s,
              o.mode,
              d
            ), s.return = o, s;
          case Kl:
            var b = s._init;
            return s = b(s._payload), S(o, s, d);
        }
        if (z(s) || ut(s))
          return s = Ea(
            s,
            o.mode,
            d,
            null
          ), s.return = o, s;
        if (typeof s.then == "function")
          return S(o, an(s), d);
        if (s.$$typeof === ml)
          return S(
            o,
            Ve(o, s),
            d
          );
        un(o, s);
      }
      return null;
    }
    function v(o, s, d, b) {
      var M = s !== null ? s.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return M !== null ? null : c(o, s, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case jl:
            return d.key === M ? i(o, s, d, b) : null;
          case Nl:
            return d.key === M ? y(o, s, d, b) : null;
          case Kl:
            return M = d._init, d = M(d._payload), v(o, s, d, b);
        }
        if (z(d) || ut(d))
          return M !== null ? null : g(o, s, d, b, null);
        if (typeof d.then == "function")
          return v(
            o,
            s,
            an(d),
            b
          );
        if (d.$$typeof === ml)
          return v(
            o,
            s,
            Ve(o, d),
            b
          );
        un(o, d);
      }
      return null;
    }
    function h(o, s, d, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return o = o.get(d) || null, c(s, o, "" + b, M);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case jl:
            return o = o.get(
              b.key === null ? d : b.key
            ) || null, i(s, o, b, M);
          case Nl:
            return o = o.get(
              b.key === null ? d : b.key
            ) || null, y(s, o, b, M);
          case Kl:
            var V = b._init;
            return b = V(b._payload), h(
              o,
              s,
              d,
              b,
              M
            );
        }
        if (z(b) || ut(b))
          return o = o.get(d) || null, g(s, o, b, M, null);
        if (typeof b.then == "function")
          return h(
            o,
            s,
            d,
            an(b),
            M
          );
        if (b.$$typeof === ml)
          return h(
            o,
            s,
            d,
            Ve(s, b),
            M
          );
        un(s, b);
      }
      return null;
    }
    function B(o, s, d, b) {
      for (var M = null, V = null, U = s, H = s = 0, Ol = null; U !== null && H < d.length; H++) {
        U.index > H ? (Ol = U, U = null) : Ol = U.sibling;
        var I = v(
          o,
          U,
          d[H],
          b
        );
        if (I === null) {
          U === null && (U = Ol);
          break;
        }
        l && U && I.alternate === null && t(o, U), s = n(I, s, H), V === null ? M = I : V.sibling = I, V = I, U = Ol;
      }
      if (H === d.length)
        return a(o, U), P && Aa(o, H), M;
      if (U === null) {
        for (; H < d.length; H++)
          U = S(o, d[H], b), U !== null && (s = n(
            U,
            s,
            H
          ), V === null ? M = U : V.sibling = U, V = U);
        return P && Aa(o, H), M;
      }
      for (U = u(U); H < d.length; H++)
        Ol = h(
          U,
          o,
          H,
          d[H],
          b
        ), Ol !== null && (l && Ol.alternate !== null && U.delete(
          Ol.key === null ? H : Ol.key
        ), s = n(
          Ol,
          s,
          H
        ), V === null ? M = Ol : V.sibling = Ol, V = Ol);
      return l && U.forEach(function(va) {
        return t(o, va);
      }), P && Aa(o, H), M;
    }
    function N(o, s, d, b) {
      if (d == null) throw Error(m(151));
      for (var M = null, V = null, U = s, H = s = 0, Ol = null, I = d.next(); U !== null && !I.done; H++, I = d.next()) {
        U.index > H ? (Ol = U, U = null) : Ol = U.sibling;
        var va = v(o, U, I.value, b);
        if (va === null) {
          U === null && (U = Ol);
          break;
        }
        l && U && va.alternate === null && t(o, U), s = n(va, s, H), V === null ? M = va : V.sibling = va, V = va, U = Ol;
      }
      if (I.done)
        return a(o, U), P && Aa(o, H), M;
      if (U === null) {
        for (; !I.done; H++, I = d.next())
          I = S(o, I.value, b), I !== null && (s = n(I, s, H), V === null ? M = I : V.sibling = I, V = I);
        return P && Aa(o, H), M;
      }
      for (U = u(U); !I.done; H++, I = d.next())
        I = h(U, o, H, I.value, b), I !== null && (l && I.alternate !== null && U.delete(I.key === null ? H : I.key), s = n(I, s, H), V === null ? M = I : V.sibling = I, V = I);
      return l && U.forEach(function(x1) {
        return t(o, x1);
      }), P && Aa(o, H), M;
    }
    function el(o, s, d, b) {
      if (typeof d == "object" && d !== null && d.type === Dl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case jl:
            l: {
              for (var M = d.key; s !== null; ) {
                if (s.key === M) {
                  if (M = d.type, M === Dl) {
                    if (s.tag === 7) {
                      a(
                        o,
                        s.sibling
                      ), b = e(
                        s,
                        d.props.children
                      ), b.return = o, o = b;
                      break l;
                    }
                  } else if (s.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Kl && fr(M) === s.type) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, d.props), Fu(b, d), b.return = o, o = b;
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              d.type === Dl ? (b = Ea(
                d.props.children,
                o.mode,
                b,
                d.key
              ), b.return = o, o = b) : (b = Xe(
                d.type,
                d.key,
                d.props,
                null,
                o.mode,
                b
              ), Fu(b, d), b.return = o, o = b);
            }
            return f(o);
          case Nl:
            l: {
              for (M = d.key; s !== null; ) {
                if (s.key === M)
                  if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, d.children || []), b.return = o, o = b;
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              b = Sf(d, o.mode, b), b.return = o, o = b;
            }
            return f(o);
          case Kl:
            return M = d._init, d = M(d._payload), el(
              o,
              s,
              d,
              b
            );
        }
        if (z(d))
          return B(
            o,
            s,
            d,
            b
          );
        if (ut(d)) {
          if (M = ut(d), typeof M != "function") throw Error(m(150));
          return d = M.call(d), N(
            o,
            s,
            d,
            b
          );
        }
        if (typeof d.then == "function")
          return el(
            o,
            s,
            an(d),
            b
          );
        if (d.$$typeof === ml)
          return el(
            o,
            s,
            Ve(o, d),
            b
          );
        un(o, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, s !== null && s.tag === 6 ? (a(o, s.sibling), b = e(s, d), b.return = o, o = b) : (a(o, s), b = bf(d, o.mode, b), b.return = o, o = b), f(o)) : a(o, s);
    }
    return function(o, s, d, b) {
      try {
        $u = 0;
        var M = el(
          o,
          s,
          d,
          b
        );
        return fu = null, M;
      } catch (U) {
        if (U === Zu || U === Ke) throw U;
        var V = $l(29, U, null, o.mode);
        return V.lanes = b, V.return = o, V;
      } finally {
      }
    };
  }
  var cu = cr(!0), ir = cr(!1), rt = T(null), Et = null;
  function Pt(l) {
    var t = l.alternate;
    A(El, El.current & 1), A(rt, l), Et === null && (t === null || au.current !== null || t.memoizedState !== null) && (Et = l);
  }
  function sr(l) {
    if (l.tag === 22) {
      if (A(El, El.current), A(rt, l), Et === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Et = l);
      }
    } else la();
  }
  function la() {
    A(El, El.current), A(rt, rt.current);
  }
  function Bt(l) {
    O(rt), Et === l && (Et = null), O(El);
  }
  var El = T(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Zc(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function If(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : x({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Pf = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = lt(), e = $t(u);
      e.payload = t, a != null && (e.callback = a), t = Ft(l, e, u), t !== null && (tt(t, l, u), Vu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = lt(), e = $t(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = Ft(l, e, u), t !== null && (tt(t, l, u), Vu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = lt(), u = $t(a);
      u.tag = 2, t != null && (u.callback = t), t = Ft(l, u, a), t !== null && (tt(t, l, a), Vu(t, l, a));
    }
  };
  function rr(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Hu(a, u) || !Hu(e, n) : !0;
  }
  function or(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && Pf.enqueueReplaceState(t, t.state, null);
  }
  function xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = x({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var nn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof D == "object" && typeof D.emit == "function") {
      D.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function dr(l) {
    nn(l);
  }
  function yr(l) {
    console.error(l);
  }
  function vr(l) {
    nn(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function hr(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function lc(l, t, a) {
    return a = $t(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function mr(l) {
    return l = $t(l), l.tag = 3, l;
  }
  function gr(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        hr(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      hr(t, a, u), typeof e != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function x0(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && Gu(
        t,
        a,
        e,
        !0
      ), a = rt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Et === null ? Ac() : a.alternate === null && hl === 0 && (hl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Uf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Oc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === Uf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Oc(l, u, e)), !1;
        }
        throw Error(m(435, a.tag));
      }
      return Oc(l, u, e), Ac(), !1;
    }
    if (P)
      return t = rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ef && (l = Error(m(422), { cause: u }), ju(ft(l, a)))) : (u !== Ef && (t = Error(m(423), {
        cause: u
      }), ju(
        ft(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ft(u, a), e = lc(
        l.stateNode,
        u,
        e
      ), Nf(l, e), hl !== 4 && (hl = 2)), !1;
    var n = Error(m(520), { cause: u });
    if (n = ft(n, a), ee === null ? ee = [n] : ee.push(n), hl !== 4 && (hl = 2), t === null) return !0;
    u = ft(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = lc(a.stateNode, u, l), Nf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (fa === null || !fa.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = mr(e), gr(
              e,
              l,
              a,
              u
            ), Nf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var br = Error(m(461)), Al = !1;
  function Ul(l, t, a, u) {
    t.child = l === null ? ir(t, null, a, u) : cu(
      t,
      l.child,
      a,
      u
    );
  }
  function Sr(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Da(t), u = jf(
      l,
      t,
      a,
      f,
      n,
      e
    ), c = Gf(), l !== null && !Al ? (Xf(l, t, e), jt(l, t, e)) : (P && c && pf(t), t.flags |= 1, Ul(l, t, u, e), t.child);
  }
  function pr(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !gf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Tr(
        l,
        t,
        n,
        u,
        e
      )) : (l = Xe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ic(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Hu, a(f, u) && l.ref === t.ref)
        return jt(l, t, e);
    }
    return t.flags |= 1, l = Rt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Tr(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Hu(n, u) && l.ref === t.ref)
        if (Al = !1, t.pendingProps = u = n, ic(l, e))
          (l.flags & 131072) !== 0 && (Al = !0);
        else
          return t.lanes = l.lanes, jt(l, t, e);
    }
    return tc(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Er(l, t, a) {
    var u = t.pendingProps, e = u.children, n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~u;
        } else t.childLanes = 0, t.child = null;
        return zr(
          l,
          t,
          u,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Le(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ts(t, n) : qf(), sr(t);
      else
        return t.lanes = t.childLanes = 536870912, zr(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (Le(t, n.cachePool), Ts(t, n), la(), t.memoizedState = null) : (l !== null && Le(t, null), qf(), la());
    return Ul(l, t, e, a), t.child;
  }
  function zr(l, t, a, u) {
    var e = Df();
    return e = e === null ? null : { parent: Tl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Le(t, null), qf(), sr(t), l !== null && Gu(l, t, u, !0), null;
  }
  function cn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function tc(l, t, a, u, e) {
    return Da(t), a = jf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Gf(), l !== null && !Al ? (Xf(l, t, e), jt(l, t, e)) : (P && u && pf(t), t.flags |= 1, Ul(l, t, a, e), t.child);
  }
  function Ar(l, t, a, u, e, n) {
    return Da(t), t.updateQueue = null, a = zs(
      t,
      u,
      a,
      e
    ), Es(l), u = Gf(), l !== null && !Al ? (Xf(l, t, n), jt(l, t, n)) : (P && u && pf(t), t.flags |= 1, Ul(l, t, a, n), t.child);
  }
  function _r(l, t, a, u, e) {
    if (Da(t), t.stateNode === null) {
      var n = Fa, f = a.contextType;
      typeof f == "object" && f !== null && (n = Yl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Rf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Yl(f) : Fa, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (If(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Pf.enqueueReplaceState(n, n.state, null), Ku(t, u, n, e), Lu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = xa(a, c);
      n.props = i;
      var y = n.context, g = a.contextType;
      f = Fa, typeof g == "object" && g !== null && (f = Yl(g));
      var S = a.getDerivedStateFromProps;
      g = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && or(
        t,
        n,
        u,
        f
      ), Wt = !1;
      var v = t.memoizedState;
      n.state = v, Ku(t, u, n, e), Lu(), y = t.memoizedState, c || v !== y || Wt ? (typeof S == "function" && (If(
        t,
        a,
        S,
        u
      ), y = t.memoizedState), (i = Wt || rr(
        t,
        a,
        i,
        u,
        v,
        y,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = y), n.props = u, n.state = y, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, xf(l, t), f = t.memoizedProps, g = xa(a, f), n.props = g, S = t.pendingProps, v = n.context, y = a.contextType, i = Fa, typeof y == "object" && y !== null && (i = Yl(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== S || v !== i) && or(
        t,
        n,
        u,
        i
      ), Wt = !1, v = t.memoizedState, n.state = v, Ku(t, u, n, e), Lu();
      var h = t.memoizedState;
      f !== S || v !== h || Wt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (If(
        t,
        a,
        c,
        u
      ), h = t.memoizedState), (g = Wt || rr(
        t,
        a,
        g,
        u,
        v,
        h,
        i
      ) || l !== null && l.dependencies !== null && Ce(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, h, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        h,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, cn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = cu(
      t,
      l.child,
      null,
      e
    ), t.child = cu(
      t,
      null,
      a,
      e
    )) : Ul(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = jt(
      l,
      t,
      e
    ), l;
  }
  function Or(l, t, a, u) {
    return Bu(), t.flags |= 256, Ul(l, t, a, u), t.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(l) {
    return { baseLanes: l, cachePool: ys() };
  }
  function ec(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ot), l;
  }
  function Mr(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (P) {
        if (e ? Pt(t) : la(), P) {
          var c = vl, i;
          if (i = c) {
            l: {
              for (i = c, c = Tt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = gt(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: za !== null ? { id: xt, overflow: Nt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = $l(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Gl = t, vl = null, i = !0) : i = !1;
          }
          i || Oa(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Bt(t);
      }
      return c = u.children, u = u.fallback, e ? (la(), e = t.mode, c = sn(
        { mode: "hidden", children: c },
        e
      ), u = Ea(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, e = t.child, e.memoizedState = uc(a), e.childLanes = ec(
        l,
        f,
        a
      ), t.memoizedState = ac, u) : (Pt(t), nc(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Pt(t), t.flags &= -257, t = fc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (la(), t.child = l.child, t.flags |= 128, t = null) : (la(), e = u.fallback, c = t.mode, u = sn(
          { mode: "visible", children: u.children },
          c
        ), e = Ea(
          e,
          c,
          a,
          null
        ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, cu(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = uc(a), u.childLanes = ec(
          l,
          f,
          a
        ), t.memoizedState = ac, t = e);
      else if (Pt(t), Zc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, u = Error(m(419)), u.stack = "", u.digest = f, ju({ value: u, source: null, stack: null }), t = fc(
          l,
          t,
          a
        );
      } else if (Al || Gu(l, t, a, !1), f = (a & l.childLanes) !== 0, Al || f) {
        if (f = cl, f !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Zn(u), u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, $a(l, u), tt(f, l, u), br;
        c.data === "$?" || Ac(), t = fc(
          l,
          t,
          a
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, vl = gt(
          c.nextSibling
        ), Gl = t, P = !0, _a = null, Tt = !1, l !== null && (it[st++] = xt, it[st++] = Nt, it[st++] = za, xt = l.id, Nt = l.overflow, za = t), t = nc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (la(), e = u.fallback, c = t.mode, i = l.child, y = i.sibling, u = Rt(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Rt(y, e) : (e = Ea(
      e,
      c,
      a,
      null
    ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, c = l.child.memoizedState, c === null ? c = uc(a) : (i = c.cachePool, i !== null ? (y = Tl._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ys(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ec(
      l,
      f,
      a
    ), t.memoizedState = ac, u) : (Pt(t), a = l.child, l = a.sibling, a = Rt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function nc(l, t) {
    return t = sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function sn(l, t) {
    return l = $l(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fc(l, t, a) {
    return cu(t, l.child, null, a), l = nc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Dr(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Af(l.return, t, a);
  }
  function cc(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
  }
  function Ur(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    if (Ul(l, t, u.children, a), u = El.current, (u & 2) !== 0)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Dr(l, a, t);
          else if (l.tag === 19)
            Dr(l, a, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      u &= 1;
    }
    switch (A(El, u), e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && en(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), cc(
          t,
          !1,
          e,
          a,
          n
        );
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && en(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        cc(
          t,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        cc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), na |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (Gu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, a = Rt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Rt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ic(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)));
  }
  function N0(l, t, a) {
    switch (t.tag) {
      case 3:
        sl(t, t.stateNode.containerInfo), kt(t, Tl, l.memoizedState.cache), Bu();
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        kt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Pt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Mr(l, t, a) : (Pt(t), l = jt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        Pt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (Gu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Ur(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), A(El, El.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Er(l, t, a);
      case 24:
        kt(t, Tl, l.memoizedState.cache);
    }
    return jt(l, t, a);
  }
  function Rr(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Al = !0;
      else {
        if (!ic(l, a) && (t.flags & 128) === 0)
          return Al = !1, N0(
            l,
            t,
            a
          );
        Al = (l.flags & 131072) !== 0;
      }
    else
      Al = !1, P && (t.flags & 1048576) !== 0 && fs(t, Ze, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType, e = u._init;
          if (u = e(u._payload), t.type = u, typeof u == "function")
            gf(u) ? (l = xa(u, l), t.tag = 1, t = _r(
              null,
              t,
              u,
              l,
              a
            )) : (t.tag = 0, t = tc(
              null,
              t,
              u,
              l,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === k) {
                t.tag = 11, t = Sr(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              } else if (e === bt) {
                t.tag = 14, t = pr(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              }
            }
            throw t = Mt(u) || u, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return tc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = xa(
          u,
          t.pendingProps
        ), _r(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (sl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, xf(l, t), Ku(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, kt(t, Tl, u), u !== n.cache && _f(
            t,
            [Tl],
            a,
            !0
          ), Lu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Or(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = ft(
                Error(m(424)),
                t
              ), ju(e), t = Or(
                l,
                t,
                u,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (vl = gt(l.firstChild), Gl = t, P = !0, _a = null, Tt = !0, a = ir(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Bu(), u === e) {
              t = jt(
                l,
                t,
                a
              );
              break l;
            }
            Ul(
              l,
              t,
              u,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return cn(l, t), l === null ? (a = Yo(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : P || (a = t.type, l = t.pendingProps, u = zn(
          X.current
        ).createElement(a), u[ql] = t, u[Ql] = l, xl(u, a, l), zl(u), t.stateNode = u) : t.memoizedState = Yo(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Bn(t), l === null && P && (u = t.stateNode = No(
          t.type,
          t.pendingProps,
          X.current
        ), Gl = t, Tt = !0, e = vl, sa(t.type) ? (Cc = e, vl = gt(
          u.firstChild
        )) : vl = e), Ul(
          l,
          t,
          t.pendingProps.children,
          a
        ), cn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && P && ((e = u = vl) && (u = f1(
          u,
          t.type,
          t.pendingProps,
          Tt
        ), u !== null ? (t.stateNode = u, Gl = t, vl = gt(
          u.firstChild
        ), Tt = !1, e = !0) : e = !1), e || Oa(t)), Bn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Gc(e, n) ? u = null : f !== null && Gc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = jf(
          l,
          t,
          A0,
          null,
          null,
          a
        ), ye._currentValue = e), cn(l, t), Ul(l, t, u, a), t.child;
      case 6:
        return l === null && P && ((l = a = vl) && (a = c1(
          a,
          t.pendingProps,
          Tt
        ), a !== null ? (t.stateNode = a, Gl = t, vl = null, l = !0) : l = !1), l || Oa(t)), null;
      case 13:
        return Mr(l, t, a);
      case 4:
        return sl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = cu(
          t,
          null,
          u,
          a
        ) : Ul(
          l,
          t,
          u,
          a
        ), t.child;
      case 11:
        return Sr(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Ul(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, kt(t, t.type, u.value), Ul(
          l,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Da(t), e = Yl(e), u = u(e), t.flags |= 1, Ul(l, t, u, a), t.child;
      case 14:
        return pr(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Tr(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ur(l, t, a);
      case 31:
        return u = t.pendingProps, a = t.mode, u = {
          mode: u.mode,
          children: u.children
        }, l === null ? (a = sn(
          u,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Rt(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Er(l, t, a);
      case 24:
        return Da(t), u = Yl(Tl), l === null ? (e = Df(), e === null && (e = cl, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, Rf(t), kt(t, Tl, e)) : ((l.lanes & a) !== 0 && (xf(l, t), Ku(t, null, null, a), Lu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), kt(t, Tl, u)) : (u = n.cache, kt(t, Tl, u), u !== e.cache && _f(
          t,
          [Tl],
          a,
          !0
        ))), Ul(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function xr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Qo(t)) {
      if (t = rt.current, t !== null && ((w & 4194048) === w ? Et !== null : (w & 62914560) !== w && (w & 536870912) === 0 || t !== Et))
        throw Cu = Uf, vs;
      l.flags |= 8192;
    }
  }
  function rn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? si() : 536870912, l.lanes |= t, ou |= t);
  }
  function Iu(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function H0(l, t, a) {
    var u = t.pendingProps;
    switch (Tf(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(Tl), Lt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Yu(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), yl(t), null;
      case 26:
        return a = t.memoizedState, l === null ? (Gt(t), a !== null ? (yl(t), xr(t, a)) : (yl(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Gt(t), yl(t), xr(t, a)) : (yl(t), t.flags &= -16777217) : (l.memoizedProps !== u && Gt(t), yl(t), t.flags &= -16777217), null;
      case 27:
        pe(t), a = X.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          l = Y.current, Yu(t) ? cs(t) : (l = No(e, u, a), t.stateNode = l, Gt(t));
        }
        return yl(t), null;
      case 5:
        if (pe(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          if (l = Y.current, Yu(t))
            cs(t);
          else {
            switch (e = zn(
              X.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                    break;
                  default:
                    l = typeof u.is == "string" ? e.createElement(a, { is: u.is }) : e.createElement(a);
                }
            }
            l[ql] = t, l[Ql] = u;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (xl(l, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Gt(t);
          }
        }
        return yl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Gt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = X.current, Yu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Gl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[ql] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || _o(l.nodeValue, a)), l || Oa(t);
          } else
            l = zn(l).createTextNode(
              u
            ), l[ql] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Yu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[ql] = t;
            } else
              Bu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), e = !1;
          } else
            e = ss(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        if (Bt(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
          u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== l && a && (t.child.flags |= 8192), rn(t, t.updateQueue), yl(t), null;
      case 4:
        return Lt(), l === null && Hc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return qt(t.type), yl(t), null;
      case 19:
        if (O(El), e = t.memoizedState, e === null) return yl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) Iu(e, !1);
          else {
            if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = en(l), n !== null) {
                  for (t.flags |= 128, Iu(e, !1), l = n.updateQueue, t.updateQueue = l, rn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ns(a, l), a = a.sibling;
                  return A(
                    El,
                    El.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && pt() > yn && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = en(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, rn(t, l), Iu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !P)
                return yl(t), null;
            } else
              2 * pt() - e.renderingStartTime > yn && a !== 536870912 && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = pt(), t.sibling = null, l = El.current, A(El, u ? l & 1 | 2 : l & 1), t) : (yl(t), null);
      case 22:
      case 23:
        return Bt(t), Yf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), a = t.updateQueue, a !== null && rn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && O(Ua), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(Tl), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function q0(l, t) {
    switch (Tf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(Tl), Lt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pe(t), null;
      case 13:
        if (Bt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Bu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return O(El), null;
      case 4:
        return Lt(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return Bt(t), Yf(), l !== null && O(Ua), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nr(l, t) {
    switch (Tf(t), t.tag) {
      case 3:
        qt(Tl), Lt();
        break;
      case 26:
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Lt();
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        O(El);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Yf(), l !== null && O(Ua);
        break;
      case 24:
        qt(Tl);
    }
  }
  function Pu(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      fl(t, t.return, c);
    }
  }
  function ta(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = a, y = c;
              try {
                y();
              } catch (g) {
                fl(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      fl(t, t.return, g);
    }
  }
  function Hr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        ps(t, a);
      } catch (u) {
        fl(l, l.return, u);
      }
    }
  }
  function qr(l, t, a) {
    a.props = xa(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      fl(l, t, u);
    }
  }
  function le(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      fl(l, t, e);
    }
  }
  function zt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          fl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          fl(l, t, e);
        }
      else a.current = null;
  }
  function Yr(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function sc(l, t, a) {
    try {
      var u = l.stateNode;
      t1(u, l.type, a, t), u[Ql] = t;
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function Br(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && sa(l.type) || l.tag === 4;
  }
  function rc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Br(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && sa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = En));
    else if (u !== 4 && (u === 27 && sa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (oc(l, t, a), l = l.sibling; l !== null; )
        oc(l, t, a), l = l.sibling;
  }
  function on(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && sa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (on(l, t, a), l = l.sibling; l !== null; )
        on(l, t, a), l = l.sibling;
  }
  function jr(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      xl(t, u, a), t[ql] = l, t[Ql] = a;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var Xt = !1, bl = !1, dc = !1, Gr = typeof WeakSet == "function" ? WeakSet : Set, _l = null;
  function Y0(l, t) {
    if (l = l.containerInfo, Bc = Un, l = Wi(l), rf(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch (N) {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, y = 0, g = 0, S = l, v = null;
            t: for (; ; ) {
              for (var h; S !== a || e !== 0 && S.nodeType !== 3 || (c = f + e), S !== n || u !== 0 && S.nodeType !== 3 || (i = f + u), S.nodeType === 3 && (f += S.nodeValue.length), (h = S.firstChild) !== null; )
                v = S, S = h;
              for (; ; ) {
                if (S === l) break t;
                if (v === a && ++y === e && (c = f), v === n && ++g === u && (i = f), (h = S.nextSibling) !== null) break;
                S = v, v = S.parentNode;
              }
              S = h;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (jc = { focusedElem: l, selectionRange: a }, Un = !1, _l = t; _l !== null; )
      if (t = _l, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, _l = l;
      else
        for (; _l !== null; ) {
          switch (t = _l, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var B = xa(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  l = u.getSnapshotBeforeUpdate(
                    B,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  fl(
                    a,
                    a.return,
                    N
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Qc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, _l = l;
            break;
          }
          _l = t.return;
        }
  }
  function Xr(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        aa(l, a), u & 4 && Pu(5, a);
        break;
      case 1:
        if (aa(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              fl(a, a.return, f);
            }
          else {
            var e = xa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              fl(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && Hr(a), u & 512 && le(a, a.return);
        break;
      case 3:
        if (aa(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            ps(l, t);
          } catch (f) {
            fl(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && jr(a);
      case 26:
      case 5:
        aa(l, a), t === null && u & 4 && Yr(a), u & 512 && le(a, a.return);
        break;
      case 12:
        aa(l, a);
        break;
      case 13:
        aa(l, a), u & 4 && Cr(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = L0.bind(
          null,
          a
        ), i1(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Xt, !u) {
          t = t !== null && t.memoizedState !== null || bl, e = Xt;
          var n = bl;
          Xt = u, (bl = t) && !n ? ua(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : aa(l, a), Xt = e, bl = n;
        }
        break;
      case 30:
        break;
      default:
        aa(l, a);
    }
  }
  function Qr(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Qr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Ln(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var rl = null, Vl = !1;
  function Qt(l, t, a) {
    for (a = a.child; a !== null; )
      Zr(l, t, a), a = a.sibling;
  }
  function Zr(l, t, a) {
    if (wl && typeof wl.onCommitFiberUnmount == "function")
      try {
        wl.onCommitFiberUnmount(Tu, a);
      } catch (n) {
      }
    switch (a.tag) {
      case 26:
        bl || zt(a, t), Qt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        bl || zt(a, t);
        var u = rl, e = Vl;
        sa(a.type) && (rl = a.stateNode, Vl = !1), Qt(
          l,
          t,
          a
        ), se(a.stateNode), rl = u, Vl = e;
        break;
      case 5:
        bl || zt(a, t);
      case 6:
        if (u = rl, e = Vl, rl = null, Qt(
          l,
          t,
          a
        ), rl = u, Vl = e, rl !== null)
          if (Vl)
            try {
              (rl.nodeType === 9 ? rl.body : rl.nodeName === "HTML" ? rl.ownerDocument.body : rl).removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
          else
            try {
              rl.removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        rl !== null && (Vl ? (l = rl, Ro(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), ge(l)) : Ro(rl, a.stateNode));
        break;
      case 4:
        u = rl, e = Vl, rl = a.stateNode.containerInfo, Vl = !0, Qt(
          l,
          t,
          a
        ), rl = u, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl || ta(2, a, t), bl || ta(4, a, t), Qt(
          l,
          t,
          a
        );
        break;
      case 1:
        bl || (zt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && qr(
          a,
          t,
          u
        )), Qt(
          l,
          t,
          a
        );
        break;
      case 21:
        Qt(
          l,
          t,
          a
        );
        break;
      case 22:
        bl = (u = bl) || a.memoizedState !== null, Qt(
          l,
          t,
          a
        ), bl = u;
        break;
      default:
        Qt(
          l,
          t,
          a
        );
    }
  }
  function Cr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ge(l);
      } catch (a) {
        fl(t, t.return, a);
      }
  }
  function B0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Gr()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Gr()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function yc(l, t) {
    var a = B0(l);
    t.forEach(function(u) {
      var e = K0.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function Fl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (sa(c.type)) {
                rl = c.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              rl = c.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              rl = c.stateNode.containerInfo, Vl = !0;
              break l;
          }
          c = c.return;
        }
        if (rl === null) throw Error(m(160));
        Zr(n, f, e), rl = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vr(t, l), t = t.sibling;
  }
  var mt = null;
  function Vr(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l), Il(l), u & 4 && (ta(3, l, l.return), Pu(3, l), ta(5, l, l.return));
        break;
      case 1:
        Fl(t, l), Il(l), u & 512 && (bl || a === null || zt(a, a.return)), u & 64 && Xt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = mt;
        if (Fl(t, l), Il(l), u & 512 && (bl || a === null || zt(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Au] || n[ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), xl(n, u, a), n[ql] = l, zl(n), u = n;
                      break l;
                    case "link":
                      var f = Go(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), xl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Go(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), xl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, u));
                  }
                  n[ql] = l, zl(n), u = n;
                }
                l.stateNode = u;
              } else
                Xo(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = jo(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Xo(
              e,
              l.type,
              l.stateNode
            ) : jo(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && sc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Fl(t, l), Il(l), u & 512 && (bl || a === null || zt(a, a.return)), a !== null && u & 4 && sc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Fl(t, l), Il(l), u & 512 && (bl || a === null || zt(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Va(e, "");
          } catch (h) {
            fl(l, l.return, h);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, sc(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (dc = !0);
        break;
      case 6:
        if (Fl(t, l), Il(l), u & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (h) {
            fl(l, l.return, h);
          }
        }
        break;
      case 3:
        if (On = null, e = mt, mt = An(t.containerInfo), Fl(t, l), mt = e, Il(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ge(t.containerInfo);
          } catch (h) {
            fl(l, l.return, h);
          }
        dc && (dc = !1, Lr(l));
        break;
      case 4:
        u = mt, mt = An(
          l.stateNode.containerInfo
        ), Fl(t, l), Il(l), mt = u;
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 13:
        Fl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Sc = pt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yc(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, y = Xt, g = bl;
        if (Xt = y || e, bl = g || i, Fl(t, l), bl = g, Xt = y, Il(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Xt || bl || Na(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var S = i.memoizedProps.style, v = S != null && S.hasOwnProperty("display") ? S.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (h) {
                  fl(i, i.return, h);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (h) {
                  fl(i, i.return, h);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, yc(l, a))));
        break;
      case 19:
        Fl(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yc(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Br(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = rc(l);
            on(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Va(f, ""), a.flags &= -33);
            var c = rc(l);
            on(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, y = rc(l);
            oc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (g) {
        fl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Lr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Lr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function aa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Xr(l, t.alternate, t), t = t.sibling;
  }
  function Na(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ta(4, t, t.return), Na(t);
          break;
        case 1:
          zt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qr(
            t,
            t.return,
            a
          ), Na(t);
          break;
        case 27:
          se(t.stateNode);
        case 26:
        case 5:
          zt(t, t.return), Na(t);
          break;
        case 22:
          t.memoizedState === null && Na(t);
          break;
        case 30:
          Na(t);
          break;
        default:
          Na(t);
      }
      l = l.sibling;
    }
  }
  function ua(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            e,
            n,
            a
          ), Pu(4, n);
          break;
        case 1:
          if (ua(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              fl(u, u.return, y);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ss(i[e], c);
            } catch (y) {
              fl(u, u.return, y);
            }
          }
          a && f & 64 && Hr(n), le(n, n.return);
          break;
        case 27:
          jr(n);
        case 26:
        case 5:
          ua(
            e,
            n,
            a
          ), a && u === null && f & 4 && Yr(n), le(n, n.return);
          break;
        case 12:
          ua(
            e,
            n,
            a
          );
          break;
        case 13:
          ua(
            e,
            n,
            a
          ), a && f & 4 && Cr(e, n);
          break;
        case 22:
          n.memoizedState === null && ua(
            e,
            n,
            a
          ), le(n, n.return);
          break;
        case 30:
          break;
        default:
          ua(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function vc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Xu(a));
  }
  function hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l));
  }
  function At(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Kr(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Kr(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(
          l,
          t,
          a,
          u
        ), e & 2048 && Pu(9, t);
        break;
      case 1:
        At(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        At(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l)));
        break;
      case 12:
        if (e & 2048) {
          At(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            fl(t, t.return, i);
          }
        } else
          At(
            l,
            t,
            a,
            u
          );
        break;
      case 13:
        At(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? At(
          l,
          t,
          a,
          u
        ) : te(l, t) : n._visibility & 2 ? At(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, iu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && vc(f, t);
        break;
      case 24:
        At(
          l,
          t,
          a,
          u
        ), e & 2048 && hc(t.alternate, t);
        break;
      default:
        At(
          l,
          t,
          a,
          u
        );
    }
  }
  function iu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          iu(
            n,
            f,
            c,
            i,
            e
          ), Pu(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? iu(
            n,
            f,
            c,
            i,
            e
          ) : te(
            n,
            f
          ) : (g._visibility |= 2, iu(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && vc(
            f.alternate,
            f
          );
          break;
        case 24:
          iu(
            n,
            f,
            c,
            i,
            e
          ), e && y & 2048 && hc(f.alternate, f);
          break;
        default:
          iu(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function te(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            te(a, u), e & 2048 && vc(
              u.alternate,
              u
            );
            break;
          case 24:
            te(a, u), e & 2048 && hc(u.alternate, u);
            break;
          default:
            te(a, u);
        }
        t = t.sibling;
      }
  }
  var ae = 8192;
  function su(l) {
    if (l.subtreeFlags & ae)
      for (l = l.child; l !== null; )
        Jr(l), l = l.sibling;
  }
  function Jr(l) {
    switch (l.tag) {
      case 26:
        su(l), l.flags & ae && l.memoizedState !== null && T1(
          mt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        su(l);
        break;
      case 3:
      case 4:
        var t = mt;
        mt = An(l.stateNode.containerInfo), su(l), mt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = ae, ae = 16777216, su(l), ae = t) : su(l));
        break;
      default:
        su(l);
    }
  }
  function wr(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ue(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          _l = u, Wr(
            u,
            l
          );
        }
      wr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        kr(l), l = l.sibling;
  }
  function kr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ue(l), l.flags & 2048 && ta(9, l, l.return);
        break;
      case 3:
        ue(l);
        break;
      case 12:
        ue(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, dn(l)) : ue(l);
        break;
      default:
        ue(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          _l = u, Wr(
            u,
            l
          );
        }
      wr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, t, t.return), dn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function Wr(l, t) {
    for (; _l !== null; ) {
      var a = _l;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Xu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, _l = u;
      else
        l: for (a = l; _l !== null; ) {
          u = _l;
          var e = u.sibling, n = u.return;
          if (Qr(u), u === a) {
            _l = null;
            break l;
          }
          if (e !== null) {
            e.return = n, _l = e;
            break l;
          }
          _l = n;
        }
    }
  }
  var j0 = {
    getCacheForType: function(l) {
      var t = Yl(Tl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    }
  }, G0 = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, cl = null, L = null, w = 0, tl = 0, Pl = null, ea = !1, ru = !1, mc = !1, Zt = 0, hl = 0, na = 0, Ha = 0, gc = 0, ot = 0, ou = 0, ee = null, Ll = null, bc = !1, Sc = 0, yn = 1 / 0, vn = null, fa = null, Rl = 0, ca = null, du = null, yu = 0, pc = 0, Tc = null, $r = null, ne = 0, Ec = null;
  function lt() {
    if ((ll & 2) !== 0 && w !== 0)
      return w & -w;
    if (E.T !== null) {
      var l = lu;
      return l !== 0 ? l : Uc();
    }
    return di();
  }
  function Fr() {
    ot === 0 && (ot = (w & 536870912) === 0 || P ? ii() : 536870912);
    var l = rt.current;
    return l !== null && (l.flags |= 32), ot;
  }
  function tt(l, t, a) {
    (l === cl && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), ia(
      l,
      w,
      ot,
      !1
    )), zu(l, a), ((ll & 2) === 0 || l !== cl) && (l === cl && ((ll & 2) === 0 && (Ha |= a), hl === 4 && ia(
      l,
      w,
      ot,
      !1
    )), _t(l));
  }
  function Ir(l, t, a) {
    if ((ll & 6) !== 0) throw Error(m(327));
    var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Eu(l, t), e = u ? Z0(l, t) : _c(l, t, !0), n = u;
    do {
      if (e === 0) {
        ru && !u && ia(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !X0(a)) {
          e = _c(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ee;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (vu(c, f).flags |= 256), f = _c(
                c,
                f,
                !1
              ), f !== 2) {
                if (mc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Ha |= n, e = 4;
                  break l;
                }
                n = Ll, Ll = e, n !== null && (Ll === null ? Ll = n : Ll.push.apply(
                  Ll,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          vu(l, 0), ia(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ia(
                u,
                t,
                ot,
                !ea
              );
              break l;
            case 2:
              Ll = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = Sc + 300 - pt(), 10 < e)) {
            if (ia(
              u,
              t,
              ot,
              !ea
            ), Ae(u, 0, !0) !== 0) break l;
            u.timeoutHandle = Do(
              Pr.bind(
                null,
                u,
                a,
                Ll,
                vn,
                bc,
                t,
                ot,
                Ha,
                ou,
                ea,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          Pr(
            u,
            a,
            Ll,
            vn,
            bc,
            t,
            ot,
            Ha,
            ou,
            ea,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _t(l);
  }
  function Pr(l, t, a, u, e, n, f, c, i, y, g, S, v, h) {
    if (l.timeoutHandle = -1, S = t.subtreeFlags, (S & 8192 || (S & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: p1 }, Jr(t), S = E1(), S !== null)) {
      l.cancelPendingCommit = S(
        fo.bind(
          null,
          l,
          t,
          n,
          a,
          u,
          e,
          f,
          c,
          i,
          g,
          1,
          v,
          h
        )
      ), ia(l, n, f, !y);
      return;
    }
    fo(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      c,
      i
    );
  }
  function X0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Wl(n(), e)) return !1;
          } catch (f) {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ia(l, t, a, u) {
    t &= ~gc, t &= ~Ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - kl(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && ri(l, a, t);
  }
  function hn() {
    return (ll & 6) === 0 ? (fe(0), !1) : !0;
  }
  function zc() {
    if (L !== null) {
      if (tl === 0)
        var l = L.return;
      else
        l = L, Ht = Ma = null, Qf(l), fu = null, $u = 0, l = L;
      for (; l !== null; )
        Nr(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function vu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, u1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), zc(), cl = l, L = a = Rt(l.current, null), w = t, tl = 0, Pl = null, ea = !1, ru = Eu(l, t), mc = !1, ou = ot = gc = Ha = na = hl = 0, Ll = ee = null, bc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - kl(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Zt = t, Be(), a;
  }
  function lo(l, t) {
    C = null, E.H = tn, t === Zu || t === Ke ? (t = gs(), tl = 3) : t === vs ? (t = gs(), tl = 4) : tl = t === br ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pl = t, L === null && (hl = 1, fn(
      l,
      ft(t, l.current)
    ));
  }
  function to() {
    var l = E.H;
    return E.H = tn, l === null ? tn : l;
  }
  function ao() {
    var l = E.A;
    return E.A = j0, l;
  }
  function Ac() {
    hl = 4, ea || (w & 4194048) !== w && rt.current !== null || (ru = !0), (na & 134217727) === 0 && (Ha & 134217727) === 0 || cl === null || ia(
      cl,
      w,
      ot,
      !1
    );
  }
  function _c(l, t, a) {
    var u = ll;
    ll |= 2;
    var e = to(), n = ao();
    (cl !== l || w !== t) && (vn = null, vu(l, t)), t = !1;
    var f = hl;
    l: do
      try {
        if (tl !== 0 && L !== null) {
          var c = L, i = Pl;
          switch (tl) {
            case 8:
              zc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              rt.current === null && (t = !0);
              var y = tl;
              if (tl = 0, Pl = null, hu(l, c, i, y), a && ru) {
                f = 0;
                break l;
              }
              break;
            default:
              y = tl, tl = 0, Pl = null, hu(l, c, i, y);
          }
        }
        Q0(), f = hl;
        break;
      } catch (g) {
        lo(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Ht = Ma = null, ll = u, E.H = e, E.A = n, L === null && (cl = null, w = 0, Be()), f;
  }
  function Q0() {
    for (; L !== null; ) uo(L);
  }
  function Z0(l, t) {
    var a = ll;
    ll |= 2;
    var u = to(), e = ao();
    cl !== l || w !== t ? (vn = null, yn = pt() + 500, vu(l, t)) : ru = Eu(
      l,
      t
    );
    l: do
      try {
        if (tl !== 0 && L !== null) {
          t = L;
          var n = Pl;
          t: switch (tl) {
            case 1:
              tl = 0, Pl = null, hu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (hs(n)) {
                tl = 0, Pl = null, eo(t);
                break;
              }
              t = function() {
                tl !== 2 && tl !== 9 || cl !== l || (tl = 7), _t(l);
              }, n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              hs(n) ? (tl = 0, Pl = null, eo(t)) : (tl = 0, Pl = null, hu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (!f || Qo(f)) {
                    tl = 0, Pl = null;
                    var i = c.sibling;
                    if (i !== null) L = i;
                    else {
                      var y = c.return;
                      y !== null ? (L = y, mn(y)) : L = null;
                    }
                    break t;
                  }
              }
              tl = 0, Pl = null, hu(l, t, n, 5);
              break;
            case 6:
              tl = 0, Pl = null, hu(l, t, n, 6);
              break;
            case 8:
              zc(), hl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        C0();
        break;
      } catch (g) {
        lo(l, g);
      }
    while (!0);
    return Ht = Ma = null, E.H = u, E.A = e, ll = a, L !== null ? 0 : (cl = null, w = 0, Be(), hl);
  }
  function C0() {
    for (; L !== null && !rd(); )
      uo(L);
  }
  function uo(l) {
    var t = Rr(l.alternate, l, Zt);
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : L = t;
  }
  function eo(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ar(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          w
        );
        break;
      case 11:
        t = Ar(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          w
        );
        break;
      case 5:
        Qf(t);
      default:
        Nr(a, t), t = L = ns(t, Zt), t = Rr(a, t, Zt);
    }
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : L = t;
  }
  function hu(l, t, a, u) {
    Ht = Ma = null, Qf(t), fu = null, $u = 0;
    var e = t.return;
    try {
      if (x0(
        l,
        e,
        t,
        a,
        w
      )) {
        hl = 1, fn(
          l,
          ft(a, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      hl = 1, fn(
        l,
        ft(a, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (P || u === 1 ? l = !0 : ru || (w & 536870912) !== 0 ? l = !1 : (ea = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = rt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), no(t, l)) : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        no(
          t,
          ea
        );
        return;
      }
      l = t.return;
      var a = H0(
        t.alternate,
        t,
        Zt
      );
      if (a !== null) {
        L = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function no(l, t) {
    do {
      var a = q0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, L = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    hl = 6, L = null;
  }
  function fo(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      gn();
    while (Rl !== 0);
    if ((ll & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= hf, pd(
        l,
        a,
        n,
        f,
        c,
        i
      ), l === cl && (L = cl = null, w = 0), du = t, ca = l, yu = a, pc = n, Tc = e, $r = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, J0(Te, function() {
        return oo(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = E.T, E.T = null, e = _.p, _.p = 2, f = ll, ll |= 4;
        try {
          Y0(l, t, a);
        } finally {
          ll = f, _.p = e, E.T = u;
        }
      }
      Rl = 1, co(), io(), so();
    }
  }
  function co() {
    if (Rl === 1) {
      Rl = 0;
      var l = ca, t = du, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Vr(t, l);
          var n = jc, f = Wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && ki(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && rf(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var S = c.ownerDocument || document, v = S && S.defaultView || window;
                if (v.getSelection) {
                  var h = v.getSelection(), B = c.textContent.length, N = Math.min(i.start, B), el = i.end === void 0 ? N : Math.min(i.end, B);
                  !h.extend && N > el && (f = el, el = N, N = f);
                  var o = wi(
                    c,
                    N
                  ), s = wi(
                    c,
                    el
                  );
                  if (o && s && (h.rangeCount !== 1 || h.anchorNode !== o.node || h.anchorOffset !== o.offset || h.focusNode !== s.node || h.focusOffset !== s.offset)) {
                    var d = S.createRange();
                    d.setStart(o.node, o.offset), h.removeAllRanges(), N > el ? (h.addRange(d), h.extend(s.node, s.offset)) : (d.setEnd(s.node, s.offset), h.addRange(d));
                  }
                }
              }
            }
            for (S = [], h = c; h = h.parentNode; )
              h.nodeType === 1 && S.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < S.length; c++) {
              var b = S[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Un = !!Bc, jc = Bc = null;
        } finally {
          ll = e, _.p = u, E.T = a;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function io() {
    if (Rl === 2) {
      Rl = 0;
      var l = ca, t = du, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Xr(l, t.alternate, t);
        } finally {
          ll = e, _.p = u, E.T = a;
        }
      }
      Rl = 3;
    }
  }
  function so() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, od();
      var l = ca, t = du, a = yu, u = $r;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, du = ca = null, ro(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (fa = null), Cn(a), t = t.stateNode, wl && typeof wl.onCommitFiberRoot == "function")
        try {
          wl.onCommitFiberRoot(
            Tu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch (i) {
        }
      if (u !== null) {
        t = E.T, e = _.p, _.p = 2, E.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          E.T = t, _.p = e;
        }
      }
      (yu & 3) !== 0 && gn(), _t(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Ec ? ne++ : (ne = 0, Ec = l) : ne = 0, fe(0);
    }
  }
  function ro(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xu(t)));
  }
  function gn(l) {
    return co(), io(), so(), oo();
  }
  function oo() {
    if (Rl !== 5) return !1;
    var l = ca, t = pc;
    pc = 0;
    var a = Cn(yu), u = E.T, e = _.p;
    try {
      _.p = 32 > a ? 32 : a, E.T = null, a = Tc, Tc = null;
      var n = ca, f = yu;
      if (Rl = 0, du = ca = null, yu = 0, (ll & 6) !== 0) throw Error(m(331));
      var c = ll;
      if (ll |= 4, kr(n.current), Kr(
        n,
        n.current,
        f,
        a
      ), ll = c, fe(0, !1), wl && typeof wl.onPostCommitFiberRoot == "function")
        try {
          wl.onPostCommitFiberRoot(Tu, n);
        } catch (i) {
        }
      return !0;
    } finally {
      _.p = e, E.T = u, ro(l, t);
    }
  }
  function yo(l, t, a) {
    t = ft(a, t), t = lc(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (zu(l, 2), _t(l));
  }
  function fl(l, t, a) {
    if (l.tag === 3)
      yo(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yo(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
            l = ft(a, l), a = mr(2), u = Ft(t, a, 2), u !== null && (gr(
              a,
              u,
              t,
              l
            ), zu(u, 2), _t(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new G0();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (mc = !0, e.add(a), l = V0.bind(null, l, t, a), t.then(l, l));
  }
  function V0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, cl === l && (w & a) === a && (hl === 4 || hl === 3 && (w & 62914560) === w && 300 > pt() - Sc ? (ll & 2) === 0 && vu(l, 0) : gc |= a, ou === w && (ou = 0)), _t(l);
  }
  function vo(l, t) {
    t === 0 && (t = si()), l = $a(l, t), l !== null && (zu(l, t), _t(l));
  }
  function L0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), vo(l, a);
  }
  function K0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(t), vo(l, a);
  }
  function J0(l, t) {
    return Gn(l, t);
  }
  var bn = null, mu = null, Mc = !1, Sn = !1, Dc = !1, qa = 0;
  function _t(l) {
    l !== mu && l.next === null && (mu === null ? bn = mu = l : mu = mu.next = l), Sn = !0, Mc || (Mc = !0, k0());
  }
  function fe(l, t) {
    if (!Dc && Sn) {
      Dc = !0;
      do
        for (var a = !1, u = bn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - kl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, bo(u, n));
          } else
            n = w, n = Ae(
              u,
              u === cl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Eu(u, n) || (a = !0, bo(u, n));
          u = u.next;
        }
      while (a);
      Dc = !1;
    }
  }
  function w0() {
    ho();
  }
  function ho() {
    Sn = Mc = !1;
    var l = 0;
    qa !== 0 && (a1() && (l = qa), qa = 0);
    for (var t = pt(), a = null, u = bn; u !== null; ) {
      var e = u.next, n = mo(u, t);
      n === 0 ? (u.next = null, a === null ? bn = e : a.next = e, e === null && (mu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), u = e;
    }
    fe(l);
  }
  function mo(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - kl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = Sd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = cl, a = w, a = Ae(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Xn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Eu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Xn(u), Cn(a)) {
        case 2:
        case 8:
          a = fi;
          break;
        case 32:
          a = Te;
          break;
        case 268435456:
          a = ci;
          break;
        default:
          a = Te;
      }
      return u = go.bind(null, l), a = Gn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Xn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function go(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (gn() && l.callbackNode !== a)
      return null;
    var u = w;
    return u = Ae(
      l,
      l === cl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (Ir(l, u, t), mo(l, pt()), l.callbackNode != null && l.callbackNode === a ? go.bind(null, l) : null);
  }
  function bo(l, t) {
    if (gn()) return null;
    Ir(l, t, !0);
  }
  function k0() {
    e1(function() {
      (ll & 6) !== 0 ? Gn(
        ni,
        w0
      ) : ho();
    });
  }
  function Uc() {
    return qa === 0 && (qa = ii()), qa;
  }
  function So(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function po(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function W0(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = So(
        (e[Ql] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Ql] || null) ? So(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new He(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var i = f ? po(e, f) : new FormData(e);
                  Wf(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? po(e, f) : new FormData(e), Wf(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Rc = 0; Rc < vf.length; Rc++) {
    var xc = vf[Rc], $0 = xc.toLowerCase(), F0 = xc[0].toUpperCase() + xc.slice(1);
    ht(
      $0,
      "on" + F0
    );
  }
  ht(Ii, "onAnimationEnd"), ht(Pi, "onAnimationIteration"), ht(ls, "onAnimationStart"), ht("dblclick", "onDoubleClick"), ht("focusin", "onFocus"), ht("focusout", "onBlur"), ht(v0, "onTransitionRun"), ht(h0, "onTransitionStart"), ht(m0, "onTransitionCancel"), ht(ts, "onTransitionEnd"), Qa("onMouseEnter", ["mouseout", "mouseover"]), Qa("onMouseLeave", ["mouseout", "mouseover"]), Qa("onPointerEnter", ["pointerout", "pointerover"]), Qa("onPointerLeave", ["pointerout", "pointerover"]), ba(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ba(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ba("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ba(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ce = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), I0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ce)
  );
  function To(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, y = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, y = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function K(l, t) {
    var a = t[Vn];
    a === void 0 && (a = t[Vn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Eo(t, l, 2, !1), a.add(u));
  }
  function Nc(l, t, a) {
    var u = 0;
    t && (u |= 4), Eo(
      a,
      l,
      u,
      t
    );
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(l) {
    if (!l[pn]) {
      l[pn] = !0, vi.forEach(function(a) {
        a !== "selectionchange" && (I0.has(a) || Nc(a, !1, l), Nc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || (t[pn] = !0, Nc("selectionchange", !1, t));
    }
  }
  function Eo(l, t, a, u) {
    switch (Jo(t)) {
      case 2:
        var e = _1;
        break;
      case 8:
        e = O1;
        break;
      default:
        e = wc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !lf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = ja(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Di(function() {
      var y = n, g = In(a), S = [];
      l: {
        var v = as.get(l);
        if (v !== void 0) {
          var h = He, B = l;
          switch (l) {
            case "keypress":
              if (xe(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = Jd;
              break;
            case "focusin":
              B = "focus", h = ef;
              break;
            case "focusout":
              B = "blur", h = ef;
              break;
            case "beforeblur":
            case "afterblur":
              h = ef;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = xi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = qd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Wd;
              break;
            case Ii:
            case Pi:
            case ls:
              h = jd;
              break;
            case ts:
              h = Fd;
              break;
            case "scroll":
            case "scrollend":
              h = Nd;
              break;
            case "wheel":
              h = Pd;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Xd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Hi;
              break;
            case "toggle":
            case "beforetoggle":
              h = t0;
          }
          var N = (t & 4) !== 0, el = !N && (l === "scroll" || l === "scrollend"), o = N ? v !== null ? v + "Capture" : null : v;
          N = [];
          for (var s = y, d; s !== null; ) {
            var b = s;
            if (d = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || d === null || o === null || (b = Ou(s, o), b != null && N.push(
              ie(s, b, d)
            )), el) break;
            s = s.return;
          }
          0 < N.length && (v = new h(
            v,
            B,
            null,
            a,
            g
          ), S.push({ event: v, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", h = l === "mouseout" || l === "pointerout", v && a !== Fn && (B = a.relatedTarget || a.fromElement) && (ja(B) || B[Ba]))
            break l;
          if ((h || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, h ? (B = a.relatedTarget || a.toElement, h = y, B = B ? ja(B) : null, B !== null && (el = dl(B), N = B.tag, B !== el || N !== 5 && N !== 27 && N !== 6) && (B = null)) : (h = null, B = y), h !== B)) {
            if (N = xi, b = "onMouseLeave", o = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (N = Hi, b = "onPointerLeave", o = "onPointerEnter", s = "pointer"), el = h == null ? v : _u(h), d = B == null ? v : _u(B), v = new N(
              b,
              s + "leave",
              h,
              a,
              g
            ), v.target = el, v.relatedTarget = d, b = null, ja(g) === y && (N = new N(
              o,
              s + "enter",
              B,
              a,
              g
            ), N.target = d, N.relatedTarget = el, b = N), el = b, h && B)
              t: {
                for (N = h, o = B, s = 0, d = N; d; d = gu(d))
                  s++;
                for (d = 0, b = o; b; b = gu(b))
                  d++;
                for (; 0 < s - d; )
                  N = gu(N), s--;
                for (; 0 < d - s; )
                  o = gu(o), d--;
                for (; s--; ) {
                  if (N === o || o !== null && N === o.alternate)
                    break t;
                  N = gu(N), o = gu(o);
                }
                N = null;
              }
            else N = null;
            h !== null && zo(
              S,
              v,
              h,
              N,
              !1
            ), B !== null && el !== null && zo(
              S,
              el,
              B,
              N,
              !0
            );
          }
        }
        l: {
          if (v = y ? _u(y) : window, h = v.nodeName && v.nodeName.toLowerCase(), h === "select" || h === "input" && v.type === "file")
            var M = Zi;
          else if (Xi(v))
            if (Ci)
              M = o0;
            else {
              M = s0;
              var V = i0;
            }
          else
            h = v.nodeName, !h || h.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && $n(y.elementType) && (M = Zi) : M = r0;
          if (M && (M = M(l, y))) {
            Qi(
              S,
              M,
              a,
              g
            );
            break l;
          }
          V && V(l, v, y), l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && Wn(v, "number", v.value);
        }
        switch (V = y ? _u(y) : window, l) {
          case "focusin":
            (Xi(V) || V.contentEditable === "true") && (wa = V, of = y, qu = null);
            break;
          case "focusout":
            qu = of = wa = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, $i(S, a, g);
            break;
          case "selectionchange":
            if (y0) break;
          case "keydown":
          case "keyup":
            $i(S, a, g);
        }
        var U;
        if (ff)
          l: {
            switch (l) {
              case "compositionstart":
                var H = "onCompositionStart";
                break l;
              case "compositionend":
                H = "onCompositionEnd";
                break l;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break l;
            }
            H = void 0;
          }
        else
          Ja ? ji(l, a) && (H = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (H = "onCompositionStart");
        H && (qi && a.locale !== "ko" && (Ja || H !== "onCompositionStart" ? H === "onCompositionEnd" && Ja && (U = Ui()) : (wt = g, tf = "value" in wt ? wt.value : wt.textContent, Ja = !0)), V = Tn(y, H), 0 < V.length && (H = new Ni(
          H,
          l,
          null,
          a,
          g
        ), S.push({ event: H, listeners: V }), U ? H.data = U : (U = Gi(a), U !== null && (H.data = U)))), (U = u0 ? e0(l, a) : n0(l, a)) && (H = Tn(y, "onBeforeInput"), 0 < H.length && (V = new Ni(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), S.push({
          event: V,
          listeners: H
        }), V.data = U)), W0(
          S,
          l,
          y,
          a,
          g
        );
      }
      To(S, t);
    });
  }
  function ie(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Tn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ou(l, a), e != null && u.unshift(
        ie(l, e, n)
      ), e = Ou(l, t), e != null && u.push(
        ie(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function gu(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zo(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, y = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (i = y, e ? (y = Ou(a, n), y != null && f.unshift(
        ie(a, y, i)
      )) : e || (y = Ou(a, n), y != null && f.push(
        ie(a, y, i)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var P0 = /\r\n?/g, l1 = /\u0000|\uFFFD/g;
  function Ao(l) {
    return (typeof l == "string" ? l : "" + l).replace(P0, `
`).replace(l1, "");
  }
  function _o(l, t) {
    return t = Ao(t), Ao(l) === t;
  }
  function En() {
  }
  function ul(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Va(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Va(l, "" + u);
        break;
      case "className":
        Oe(l, "class", u);
        break;
      case "tabIndex":
        Oe(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, a, u);
        break;
      case "style":
        Oi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ue("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && ul(l, t, "name", e.name, e, null), ul(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), ul(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), ul(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (ul(l, t, "encType", e.encType, e, null), ul(l, t, "method", e.method, e, null), ul(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ue("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(m(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Ue("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), _e(l, "popover", u);
        break;
      case "xlinkActuate":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        _e(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Rd.get(a) || a, _e(l, a, u));
    }
  }
  function Yc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Oi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(m(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Va(l, u) : (typeof u == "number" || typeof u == "bigint") && Va(l, "" + u);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Ql] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : _e(l, a, u);
          }
    }
  }
  function xl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  ul(l, t, n, f, a, null);
              }
          }
        e && ul(l, t, "srcSet", a.srcSet, a, null), u && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  y = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(m(137, t));
                  break;
                default:
                  ul(l, t, u, g, a, null);
              }
          }
        Ei(
          l,
          n,
          c,
          i,
          y,
          f,
          e,
          !1
        ), Me(l);
        return;
      case "select":
        K("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                ul(l, t, e, c, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Ca(l, !!u, t, !1) : a != null && Ca(l, !!u, a, !0);
        return;
      case "textarea":
        K("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (c = a[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                ul(l, t, f, c, a, null);
            }
        Ai(l, u, e, n), Me(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ul(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ce.length; u++)
          K(ce[u], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && (u = a[y], u != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                ul(l, t, y, u, a, null);
            }
        return;
      default:
        if ($n(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Yc(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && ul(l, t, c, u, a, null));
  }
  function t1(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, y = null, g = null;
        for (h in a) {
          var S = a[h];
          if (a.hasOwnProperty(h) && S != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = S;
              default:
                u.hasOwnProperty(h) || ul(l, t, h, null, u, S);
            }
        }
        for (var v in u) {
          var h = u[v];
          if (S = a[v], u.hasOwnProperty(v) && (h != null || S != null))
            switch (v) {
              case "type":
                n = h;
                break;
              case "name":
                e = h;
                break;
              case "checked":
                y = h;
                break;
              case "defaultChecked":
                g = h;
                break;
              case "value":
                f = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                h !== S && ul(
                  l,
                  t,
                  v,
                  h,
                  u,
                  S
                );
            }
        }
        kn(
          l,
          f,
          c,
          i,
          y,
          g,
          n,
          e
        );
        return;
      case "select":
        h = f = c = v = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = i;
              default:
                u.hasOwnProperty(n) || ul(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && ul(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = c, a = f, u = h, v != null ? Ca(l, !!a, v, !1) : !!u != !!a && (t != null ? Ca(l, !!a, t, !0) : Ca(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        h = v = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                h = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && ul(l, t, f, e, u, n);
            }
        zi(l, v, h);
        return;
      case "option":
        for (var B in a)
          if (v = a[B], a.hasOwnProperty(B) && v != null && !u.hasOwnProperty(B))
            switch (B) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(
                  l,
                  t,
                  B,
                  null,
                  u,
                  v
                );
            }
        for (i in u)
          if (v = u[i], h = a[i], u.hasOwnProperty(i) && v !== h && (v != null || h != null))
            switch (i) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  i,
                  v,
                  u,
                  h
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in a)
          v = a[N], a.hasOwnProperty(N) && v != null && !u.hasOwnProperty(N) && ul(l, t, N, null, u, v);
        for (y in u)
          if (v = u[y], h = a[y], u.hasOwnProperty(y) && v !== h && (v != null || h != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(m(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  y,
                  v,
                  u,
                  h
                );
            }
        return;
      default:
        if ($n(t)) {
          for (var el in a)
            v = a[el], a.hasOwnProperty(el) && v !== void 0 && !u.hasOwnProperty(el) && Yc(
              l,
              t,
              el,
              void 0,
              u,
              v
            );
          for (g in u)
            v = u[g], h = a[g], !u.hasOwnProperty(g) || v === h || v === void 0 && h === void 0 || Yc(
              l,
              t,
              g,
              v,
              u,
              h
            );
          return;
        }
    }
    for (var o in a)
      v = a[o], a.hasOwnProperty(o) && v != null && !u.hasOwnProperty(o) && ul(l, t, o, null, u, v);
    for (S in u)
      v = u[S], h = a[S], !u.hasOwnProperty(S) || v === h || v == null && h == null || ul(l, t, S, v, u, h);
  }
  var Bc = null, jc = null;
  function zn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Oo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Gc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function a1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Xc ? !1 : (Xc = l, !0) : (Xc = null, !1);
  }
  var Do = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Uo = typeof Promise == "function" ? Promise : void 0, e1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uo != "undefined" ? function(l) {
    return Uo.resolve(null).then(l).catch(n1);
  } : Do;
  function n1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function sa(l) {
    return l === "head";
  }
  function Ro(l, t) {
    var a = t, u = 0, e = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var f = l.ownerDocument;
            if (a & 1 && se(f.documentElement), a & 2 && se(f.body), a & 4)
              for (a = f.head, se(a), f = a.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[Au] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), ge(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = n;
    } while (a);
    ge(t);
  }
  function Qc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(a), Ln(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function f1(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Au])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = gt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function c1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function i1(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function gt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Cc = null;
  function xo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function No(l, t, a) {
    switch (t = zn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function se(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var dt = /* @__PURE__ */ new Map(), Ho = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ct = _.d;
  _.d = {
    f: s1,
    r: r1,
    D: o1,
    C: d1,
    L: y1,
    m: v1,
    X: m1,
    S: h1,
    M: g1
  };
  function s1() {
    var l = Ct.f(), t = hn();
    return l || t;
  }
  function r1(l) {
    var t = Ga(l);
    t !== null && t.tag === 5 && t.type === "form" ? Is(t) : Ct.r(l);
  }
  var bu = typeof document == "undefined" ? null : document;
  function qo(l, t, a) {
    var u = bu;
    if (u && typeof t == "string" && t) {
      var e = nt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Ho.has(e) || (Ho.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), xl(t, "link", l), zl(t), u.head.appendChild(t)));
    }
  }
  function o1(l) {
    Ct.D(l), qo("dns-prefetch", l, null);
  }
  function d1(l, t) {
    Ct.C(l, t), qo("preconnect", l, t);
  }
  function y1(l, t, a) {
    Ct.L(l, t, a);
    var u = bu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + nt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + nt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + nt(
        a.imageSizes
      ) + '"]')) : e += '[href="' + nt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Su(l);
          break;
        case "script":
          n = pu(l);
      }
      dt.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), dt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(re(n)) || t === "script" && u.querySelector(oe(n)) || (t = u.createElement("link"), xl(t, "link", l), zl(t), u.head.appendChild(t)));
    }
  }
  function v1(l, t) {
    Ct.m(l, t);
    var a = bu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + nt(u) + '"][href="' + nt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = pu(l);
      }
      if (!dt.has(n) && (l = x({ rel: "modulepreload", href: l }, t), dt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(oe(n)))
              return;
        }
        u = a.createElement("link"), xl(u, "link", l), zl(u), a.head.appendChild(u);
      }
    }
  }
  function h1(l, t, a) {
    Ct.S(l, t, a);
    var u = bu;
    if (u && l) {
      var e = Xa(u).hoistableStyles, n = Su(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          re(n)
        ))
          c.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = dt.get(n)) && Vc(l, a);
          var i = f = u.createElement("link");
          zl(i), xl(i, "link", l), i._p = new Promise(function(y, g) {
            i.onload = y, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, _n(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function m1(l, t) {
    Ct.X(l, t);
    var a = bu;
    if (a && l) {
      var u = Xa(a).hoistableScripts, e = pu(l), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (l = x({ src: l, async: !0 }, t), (t = dt.get(e)) && Lc(l, t), n = a.createElement("script"), zl(n), xl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function g1(l, t) {
    Ct.M(l, t);
    var a = bu;
    if (a && l) {
      var u = Xa(a).hoistableScripts, e = pu(l), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = dt.get(e)) && Lc(l, t), n = a.createElement("script"), zl(n), xl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Yo(l, t, a, u) {
    var e = (e = X.current) ? An(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Su(a.href), a = Xa(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Su(a.href);
          var n = Xa(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            re(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), dt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, dt.set(l, a), n || b1(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(m(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pu(a), a = Xa(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Su(l) {
    return 'href="' + nt(l) + '"';
  }
  function re(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bo(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function b1(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), xl(t, "link", a), zl(t), l.head.appendChild(t));
  }
  function pu(l) {
    return '[src="' + nt(l) + '"]';
  }
  function oe(l) {
    return "script[async]" + l;
  }
  function jo(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + nt(a.href) + '"]'
          );
          if (u)
            return t.instance = u, zl(u), u;
          var e = x({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), zl(u), xl(u, "style", e), _n(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Su(a.href);
          var n = l.querySelector(
            re(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, zl(n), n;
          u = Bo(a), (e = dt.get(e)) && Vc(u, e), n = (l.ownerDocument || l).createElement("link"), zl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), xl(n, "link", u), t.state.loading |= 4, _n(n, a.precedence, l), t.instance = n;
        case "script":
          return n = pu(a.src), (e = l.querySelector(
            oe(n)
          )) ? (t.instance = e, zl(e), e) : (u = a, (e = dt.get(n)) && (u = x({}, a), Lc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), zl(e), xl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, _n(u, a.precedence, l));
    return t.instance;
  }
  function _n(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Lc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Go(l, t, a) {
    if (On === null) {
      var u = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = On, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Au] || n[ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Xo(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function S1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Qo(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function p1() {
  }
  function T1(l, t, a) {
    if (de === null) throw Error(m(475));
    var u = de;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = Su(a.href), n = l.querySelector(
          re(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Mn.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, zl(n);
          return;
        }
        n = l.ownerDocument || l, a = Bo(a), (e = dt.get(e)) && Vc(a, e), n = n.createElement("link"), zl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), xl(n, "link", a), t.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = Mn.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function E1() {
    if (de === null) throw Error(m(475));
    var l = de;
    return l.stylesheets && l.count === 0 && Kc(l, l.stylesheets), 0 < l.count ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Kc(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Mn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Kc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Kc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(z1, l), Dn = null, Mn.call(l));
  }
  function z1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Dn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Dn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Mn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ye = {
    $$typeof: ml,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function A1(l, t, a, u, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zo(l, t, a, u, e, n, f, c, i, y, g, S) {
    return l = new A1(
      l,
      t,
      a,
      f,
      c,
      i,
      y,
      S
    ), t = 1, n === !0 && (t |= 24), n = $l(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Rf(n), l;
  }
  function Co(l) {
    return l ? (l = Fa, l) : Fa;
  }
  function Vo(l, t, a, u, e, n) {
    e = Co(e), u.context === null ? u.context = e : u.pendingContext = e, u = $t(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Ft(l, u, t), a !== null && (tt(a, l, t), Vu(a, l, t));
  }
  function Lo(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Jc(l, t) {
    Lo(l, t), (l = l.alternate) && Lo(l, t);
  }
  function Ko(l) {
    if (l.tag === 13) {
      var t = $a(l, 67108864);
      t !== null && tt(t, l, 67108864), Jc(l, 67108864);
    }
  }
  var Un = !0;
  function _1(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = _.p;
    try {
      _.p = 2, wc(l, t, a, u);
    } finally {
      _.p = n, E.T = e;
    }
  }
  function O1(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = _.p;
    try {
      _.p = 8, wc(l, t, a, u);
    } finally {
      _.p = n, E.T = e;
    }
  }
  function wc(l, t, a, u) {
    if (Un) {
      var e = kc(u);
      if (e === null)
        qc(
          l,
          t,
          u,
          Rn,
          a
        ), wo(l, u);
      else if (D1(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (wo(l, u), t & 4 && -1 < M1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Ga(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ga(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - kl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    _t(n), (ll & 6) === 0 && (yn = pt() + 500, fe(0));
                  }
                }
                break;
              case 13:
                c = $a(n, 2), c !== null && tt(c, n, 2), hn(), Jc(n, 2);
            }
          if (n = kc(u), n === null && qc(
            l,
            t,
            u,
            Rn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        qc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function kc(l) {
    return l = In(l), Wc(l);
  }
  var Rn = null;
  function Wc(l) {
    if (Rn = null, l = ja(l), l !== null) {
      var t = dl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = Ml(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function Jo(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dd()) {
          case ni:
            return 2;
          case fi:
            return 8;
          case Te:
          case yd:
            return 32;
          case ci:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $c = !1, ra = null, oa = null, da = null, ve = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ya = [], M1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function wo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        ve.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        he.delete(t.pointerId);
    }
  }
  function me(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Ga(t), t !== null && Ko(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function D1(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ra = me(
          ra,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return oa = me(
          oa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return da = me(
          da,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ve.set(
          n,
          me(
            ve.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, he.set(
          n,
          me(
            he.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function ko(l) {
    var t = ja(l.target);
    if (t !== null) {
      var a = dl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = Ml(a), t !== null) {
            l.blockedOn = t, Td(l.priority, function() {
              if (a.tag === 13) {
                var u = lt();
                u = Zn(u);
                var e = $a(a, u);
                e !== null && tt(e, a, u), Jc(a, u);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = kc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        Fn = u, a.target.dispatchEvent(u), Fn = null;
      } else
        return t = Ga(a), t !== null && Ko(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Wo(l, t, a) {
    xn(l) && a.delete(t);
  }
  function U1() {
    $c = !1, ra !== null && xn(ra) && (ra = null), oa !== null && xn(oa) && (oa = null), da !== null && xn(da) && (da = null), ve.forEach(Wo), he.forEach(Wo);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, $c || ($c = !0, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      U1
    )));
  }
  var Hn = null;
  function $o(l) {
    Hn !== l && (Hn = l, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (Wc(u || a) === null)
              continue;
            break;
          }
          var n = Ga(a);
          n !== null && (l.splice(t, 3), t -= 3, Wf(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function ge(l) {
    function t(i) {
      return Nn(i, l);
    }
    ra !== null && Nn(ra, l), oa !== null && Nn(oa, l), da !== null && Nn(da, l), ve.forEach(t), he.forEach(t);
    for (var a = 0; a < ya.length; a++) {
      var u = ya[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ya.length && (a = ya[0], a.blockedOn === null); )
      ko(a), a.blockedOn === null && ya.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Ql] || null;
        if (typeof n == "function")
          f || $o(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ql] || null)
              c = f.formAction;
            else if (Wc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), $o(a);
        }
      }
  }
  function Fc(l) {
    this._internalRoot = l;
  }
  qn.prototype.render = Fc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var a = t.current, u = lt();
    Vo(a, u, l, t, null, null);
  }, qn.prototype.unmount = Fc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Vo(l.current, 2, null, l, null, null), hn(), t[Ba] = null;
    }
  };
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = di();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ya.length && t !== 0 && t < ya[a].priority; a++) ;
      ya.splice(a, 0, l), a === 0 && ko(l);
    }
  };
  var Fo = G.version;
  if (Fo !== "19.1.1")
    throw Error(
      m(
        527,
        Fo,
        "19.1.1"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = p(t), l = l !== null ? $(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var R1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber)
      try {
        Tu = Yn.inject(
          R1
        ), wl = Yn;
      } catch (l) {
      }
  }
  return Se.createRoot = function(l, t) {
    if (!ol(l)) throw Error(m(299));
    var a = !1, u = "", e = dr, n = yr, f = vr, c = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Zo(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      e,
      n,
      f,
      c,
      null
    ), l[Ba] = t.current, Hc(l), new Fc(t);
  }, Se.hydrateRoot = function(l, t, a) {
    if (!ol(l)) throw Error(m(299));
    var u = !1, e = "", n = dr, f = yr, c = vr, i = null, y = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (y = a.formState)), t = Zo(
      l,
      1,
      !0,
      t,
      a != null ? a : null,
      u,
      e,
      n,
      f,
      c,
      i,
      y
    ), t.context = Co(null), a = t.current, u = lt(), u = Zn(u), e = $t(u), e.callback = null, Ft(a, e, u), a = u, t.current.lanes = a, zu(t, a), _t(t), l[Ba] = t.current, Hc(l), new qn(t);
  }, Se.version = "19.1.1", Se;
}
var id;
function V1() {
  if (id) return li.exports;
  id = 1;
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (q) {
        console.error(q);
      }
  }
  return D(), li.exports = C1(), li.exports;
}
var L1 = V1();
const K1 = /* @__PURE__ */ sd(L1), ha = [
  {
    id: "1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: "5:55",
    cover: "https://via.placeholder.com/60x60/1f2937/ffffff?text=Q"
  },
  {
    id: "2",
    title: "Hotel California",
    artist: "Eagles",
    duration: "6:30",
    cover: "https://via.placeholder.com/60x60/1f2937/ffffff?text=E"
  },
  {
    id: "3",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    duration: "8:02",
    cover: "https://via.placeholder.com/60x60/1f2937/ffffff?text=L"
  }
];
function J1() {
  const [D, q] = Vt.useState(0), [G, J] = Vt.useState(ha[0]), [m, ol] = Vt.useState(!1), [dl, Ml] = Vt.useState(0.7), [R, p] = Vt.useState(0), [$, x] = Vt.useState(0), Z = Vt.useRef(null);
  Vt.useEffect(() => {
    G && Z.current && (Z.current.load(), Z.current.volume = dl);
  }, [G]);
  const jl = () => {
    Z.current && (m ? (Z.current.pause(), ol(!1)) : (Z.current.play(), ol(!0)));
  }, Nl = () => {
    const k = (D - 1 + ha.length) % ha.length;
    q(k), J(ha[k]), ol(!1), p(0);
  }, Dl = () => {
    const k = (D + 1) % ha.length;
    q(k), J(ha[k]), ol(!1), p(0);
  }, yt = (k) => {
    q(k), J(ha[k]), ol(!1), p(0);
  }, Hl = () => {
    Z.current && (p(Z.current.currentTime), x(Z.current.duration || 0));
  }, Ot = (k) => {
    const j = parseFloat(k.target.value);
    Z.current && (Z.current.currentTime = j, p(j));
  }, vt = (k) => {
    const j = parseFloat(k.target.value);
    Ml(j), Z.current && (Z.current.volume = j);
  }, ml = (k) => {
    const j = Math.floor(k / 60), Xl = Math.floor(k % 60);
    return `${j}:${Xl.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ W.jsxs("div", { className: "music-player layout", children: [
    /* @__PURE__ */ W.jsx(
      "audio",
      {
        ref: Z,
        onTimeUpdate: Hl,
        onEnded: () => ol(!1),
        onLoadedMetadata: Hl
      }
    ),
    /* @__PURE__ */ W.jsxs("aside", { className: "playlist", children: [
      /* @__PURE__ */ W.jsx("h3", { className: "playlist-title", children: "Playlist" }),
      /* @__PURE__ */ W.jsx("div", { className: "playlist-list", children: ha.map((k, j) => /* @__PURE__ */ W.jsxs(
        "button",
        {
          className: `playlist-item ${D === j ? "active" : ""}`,
          onClick: () => yt(j),
          "aria-current": D === j,
          children: [
            /* @__PURE__ */ W.jsx("img", { src: k.cover, alt: k.title, className: "playlist-cover" }),
            /* @__PURE__ */ W.jsxs("div", { className: "playlist-info", children: [
              /* @__PURE__ */ W.jsx("div", { className: "playlist-track", children: k.title }),
              /* @__PURE__ */ W.jsx("div", { className: "playlist-artist", children: k.artist })
            ] }),
            /* @__PURE__ */ W.jsx("div", { className: "playlist-duration", children: k.duration })
          ]
        },
        k.id
      )) })
    ] }),
    /* @__PURE__ */ W.jsxs("section", { className: "player-panel", children: [
      /* @__PURE__ */ W.jsx("div", { className: "video-container", "aria-label": "Aperçu vidéo", children: /* @__PURE__ */ W.jsx("div", { className: "video-placeholder", children: "Aperçu vidéo" }) }),
      /* @__PURE__ */ W.jsxs("div", { className: "controls-row", children: [
        /* @__PURE__ */ W.jsx("button", { className: "control-btn prev-btn", onClick: Nl, "aria-label": "Piste précédente", children: "⏮" }),
        /* @__PURE__ */ W.jsx("button", { className: "control-btn play-btn", onClick: jl, "aria-label": m ? "Pause" : "Lecture", children: m ? "⏸" : "▶" }),
        /* @__PURE__ */ W.jsx("button", { className: "control-btn next-btn", onClick: Dl, "aria-label": "Piste suivante", children: "⏭" })
      ] }),
      /* @__PURE__ */ W.jsxs("div", { className: "progress-container", children: [
        /* @__PURE__ */ W.jsx("span", { className: "time-display", children: ml(R) }),
        /* @__PURE__ */ W.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: $ || 0,
            value: R,
            onChange: Ot,
            className: "progress-bar"
          }
        ),
        /* @__PURE__ */ W.jsx("span", { className: "time-display", children: ml($) })
      ] }),
      /* @__PURE__ */ W.jsxs("div", { className: "volume-control", children: [
        /* @__PURE__ */ W.jsx("span", { className: "volume-icon", children: "🔊" }),
        /* @__PURE__ */ W.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.1",
            value: dl,
            onChange: vt,
            className: "volume-bar"
          }
        )
      ] }),
      G && /* @__PURE__ */ W.jsxs("div", { className: "current-track", children: [
        /* @__PURE__ */ W.jsx("img", { src: G.cover, alt: G.title, className: "track-cover" }),
        /* @__PURE__ */ W.jsxs("div", { className: "track-info", children: [
          /* @__PURE__ */ W.jsx("h3", { className: "track-title", children: G.title }),
          /* @__PURE__ */ W.jsx("p", { className: "track-artist", children: G.artist }),
          /* @__PURE__ */ W.jsx("p", { className: "track-duration", children: G.duration })
        ] })
      ] })
    ] })
  ] });
}
const w1 = ":root{font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;width:100%;height:100%}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}", k1 = ".music-player{width:100%;height:100%;margin:0;padding:2rem;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:20px;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.player-header{text-align:center;margin-bottom:2rem}.player-title{font-size:2.5rem;font-weight:700;margin:0 0 .5rem;text-shadow:0 2px 4px rgba(0,0,0,.3)}.player-subtitle{font-size:1.1rem;opacity:.9;margin:0}.player-controls{background:#ffffff1a;backdrop-filter:blur(10px);border-radius:15px;padding:2rem;margin-bottom:2rem}.control-buttons{display:flex;justify-content:center;align-items:center;gap:1rem;margin-bottom:2rem}.control-btn{background:#fff3;border:none;border-radius:50%;width:60px;height:60px;font-size:1.5rem;color:#fff;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center}.control-btn:hover:not(:disabled){background:#ffffff4d;transform:scale(1.1)}.control-btn:disabled{opacity:.5;cursor:not-allowed}.play-btn{background:#4ade80;width:80px;height:80px;font-size:2rem}.play-btn:hover{background:#22c55e}.progress-container{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.time-display{font-family:monospace;font-size:.9rem;min-width:45px}.progress-bar{flex:1;height:8px;border-radius:4px;background:#fff3;outline:none;cursor:pointer;-webkit-appearance:none}.progress-bar::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#4ade80;cursor:pointer}.progress-bar::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#4ade80;cursor:pointer;border:none}.volume-icon{font-size:1.2rem}.volume-bar{width:100px;height:6px;border-radius:3px;background:#fff3;outline:none;cursor:pointer;-webkit-appearance:none}.volume-bar::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#fff;cursor:pointer}.volume-bar::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#fff;cursor:pointer;border:none}.current-track{display:flex;align-items:center;gap:1.5rem;background:#ffffff1a;backdrop-filter:blur(10px);border-radius:15px;padding:1.5rem;margin-bottom:2rem}.track-cover{width:80px;height:80px;border-radius:10px;object-fit:cover}.track-title{font-size:1.5rem;font-weight:600;margin:0 0 .5rem}.track-artist{font-size:1.1rem;opacity:.8;margin:0 0 .5rem}.track-duration{font-size:.9rem;opacity:.7;margin:0}.track-list{background:#ffffff1a;backdrop-filter:blur(10px);border-radius:15px;padding:1.5rem}.track-list-title{font-size:1.3rem;font-weight:600;margin:0 0 1.5rem;text-align:center}.track-item{display:flex;align-items:center;gap:1rem;padding:1rem;border-radius:10px;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.track-item:hover{background:#ffffff1a}.track-item.active{background:#4ade804d;border:1px solid rgba(74,222,128,.5)}.track-item-cover{width:50px;height:50px;border-radius:8px;object-fit:cover}.track-item-info{flex:1}.track-item-title{font-size:1.1rem;font-weight:500;margin:0 0 .25rem}.track-item-artist{font-size:.9rem;opacity:.8;margin:0}.track-item-duration{font-size:.9rem;opacity:.7;font-family:monospace}.music-player.layout{display:grid;grid-template-columns:320px 1fr;gap:1.25rem;width:100%;height:100%;margin:0;padding:1rem;background:linear-gradient(135deg,#0f172a,#1f2a44);border-radius:0}.playlist{background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:1rem;overflow:hidden;display:flex;flex-direction:column}.playlist-title{color:#fff;font-size:1.1rem;font-weight:600;margin:0 0 .75rem}.playlist-list{overflow-y:auto;display:flex;flex-direction:column;gap:.5rem}.playlist-item{display:grid;grid-template-columns:48px 1fr auto;align-items:center;gap:.75rem;width:100%;background:transparent;color:#e5e7eb;border:1px solid transparent;border-radius:10px;padding:.5rem;cursor:pointer;transition:background .2s,border-color .2s}.playlist-item:hover{background:#ffffff14;border-color:#ffffff1f}.playlist-item.active{background:#3b82f633;border-color:#3b82f699}.playlist-cover{width:48px;height:48px;border-radius:8px;object-fit:cover}.playlist-info{display:flex;flex-direction:column}.playlist-track{font-weight:600;color:#fff}.playlist-artist{font-size:.85rem;opacity:.8}.playlist-duration{font-family:monospace;font-size:.85rem;opacity:.9}.player-panel{display:flex;flex-direction:column;gap:1rem;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:1rem}.video-container{width:100%;aspect-ratio:16 / 9;background:#ffffff14;border:1px solid rgba(255,255,255,.12);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#cbd5e1}.video-placeholder{font-size:.95rem}.controls-row{display:flex;align-items:center;justify-content:center;gap:1rem}.control-btn{background:#fff3;border:none;border-radius:9999px;width:56px;height:56px;font-size:1.3rem;color:#fff;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.control-btn:hover{background:#ffffff47}.play-btn{width:68px;height:68px;font-size:1.7rem;background:#3b82f6}.play-btn:hover{background:#2563eb}.progress-container{display:flex;align-items:center;gap:1rem}.time-display{font-family:monospace;font-size:.9rem;min-width:45px;color:#e5e7eb}.progress-bar{flex:1;height:8px;border-radius:4px;background:#ffffff40;outline:none;cursor:pointer;-webkit-appearance:none}.progress-bar::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#3b82f6;cursor:pointer}.progress-bar::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#3b82f6;cursor:pointer;border:none}.volume-control{display:flex;align-items:center;gap:.5rem;justify-content:center}.volume-icon{font-size:1.1rem;color:#e5e7eb}.volume-bar{width:120px;height:6px;border-radius:3px;background:#ffffff40;outline:none;cursor:pointer;-webkit-appearance:none}.volume-bar::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer}.volume-bar::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.current-track{display:flex;align-items:center;gap:1rem;background:#ffffff14;border-radius:10px;padding:1rem}.track-cover{width:72px;height:72px;border-radius:10px;object-fit:cover}.track-info{flex:1}.track-title{font-size:1.2rem;font-weight:600;margin:0 0 .25rem;color:#fff}.track-artist{font-size:1rem;opacity:.9;margin:0;color:#e5e7eb}.track-duration{font-size:.9rem;opacity:.8;margin:0;color:#cbd5e1}@media (max-width: 900px){.music-player.layout{grid-template-columns:1fr}.playlist{order:2}.player-panel{order:1}}@media (max-width: 768px){.music-player{padding:1rem;margin:0}.player-title{font-size:2rem}.control-buttons{gap:.5rem}.control-btn{width:50px;height:50px;font-size:1.2rem}.play-btn{width:70px;height:70px;font-size:1.8rem}.progress-container{flex-direction:column;gap:.5rem}.current-track{flex-direction:column;text-align:center}}";
class W1 extends HTMLElement {
  constructor() {
    super(...arguments);
    Io(this, "root", null);
  }
  connectedCallback() {
    const G = this.attachShadow({ mode: "open" }), J = document.createElement("div");
    J.id = "music-player-root", J.style.width = "100%", J.style.height = "100%", G.appendChild(J);
    const m = document.createElement("style");
    m.textContent = `
      :host { display: block; width: 100%; height: 100%; }
      #music-player-root { width: 100%; height: 100%; }
    ` + w1 + `
` + k1, G.appendChild(m), this.root = K1.createRoot(J), this.root.render(
      /* @__PURE__ */ W.jsx(j1.StrictMode, { children: /* @__PURE__ */ W.jsx(J1, {}) })
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.define("music-player", W1);
