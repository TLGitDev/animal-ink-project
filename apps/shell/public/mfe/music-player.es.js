var N1 = Object.defineProperty;
var H1 = (M, q, Q) => q in M ? N1(M, q, { enumerable: !0, configurable: !0, writable: !0, value: Q }) : M[q] = Q;
var Is = (M, q, Q) => H1(M, typeof q != "symbol" ? q + "" : q, Q);
function od(M) {
  return M && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M;
}
var Ii = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function q1() {
  if (Ps) return be;
  Ps = 1;
  var M = Symbol.for("react.transitional.element"), q = Symbol.for("react.fragment");
  function Q(J, m, dl) {
    var hl = null;
    if (dl !== void 0 && (hl = "" + dl), m.key !== void 0 && (hl = "" + m.key), "key" in m) {
      dl = {};
      for (var xl in m)
        xl !== "key" && (dl[xl] = m[xl]);
    } else dl = m;
    return m = dl.ref, {
      $$typeof: M,
      type: J,
      key: hl,
      ref: m !== void 0 ? m : null,
      props: dl
    };
  }
  return be.Fragment = q, be.jsx = Q, be.jsxs = Q, be;
}
var ld;
function Y1() {
  return ld || (ld = 1, Ii.exports = q1()), Ii.exports;
}
var il = Y1(), Pi = { exports: {} }, j = {}, td;
function B1() {
  if (td) return j;
  td = 1;
  var M = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var q = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), dl = Symbol.for("react.profiler"), hl = Symbol.for("react.consumer"), xl = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), el = Symbol.iterator;
  function Gl(r) {
    return r === null || typeof r != "object" ? null : (r = el && r[el] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var I = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ul = Object.assign, yt = {};
  function jl(r, T, O) {
    this.props = r, this.context = T, this.refs = yt, this.updater = O || I;
  }
  jl.prototype.isReactComponent = {}, jl.prototype.setState = function(r, T) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, T, "setState");
  }, jl.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Dt() {
  }
  Dt.prototype = jl.prototype;
  function at(r, T, O) {
    this.props = r, this.context = T, this.refs = yt, this.updater = O || I;
  }
  var pl = at.prototype = new Dt();
  pl.constructor = at, Ul(pl, jl.prototype), pl.isPureReactComponent = !0;
  var ut = Array.isArray, C = { H: null, A: null, T: null, S: null, V: null }, V = Object.prototype.hasOwnProperty;
  function yl(r, T, O, z, Y, nl) {
    return O = nl.ref, {
      $$typeof: q,
      type: r,
      key: T,
      ref: O !== void 0 ? O : null,
      props: nl
    };
  }
  function Xl(r, T) {
    return yl(
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
  var et = /\/+/g;
  function nt(r, T) {
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
  function A(r, T, O, z, Y) {
    var nl = typeof r;
    (nl === "undefined" || nl === "boolean") && (r = null);
    var G = !1;
    if (r === null) G = !0;
    else
      switch (nl) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case q:
            case Q:
              G = !0;
              break;
            case R:
              return G = r._init, A(
                G(r._payload),
                T,
                O,
                z,
                Y
              );
          }
      }
    if (G)
      return Y = Y(r), G = z === "" ? "." + nt(r, 0) : z, ut(Y) ? (O = "", G != null && (O = G.replace(et, "$&/") + "/"), A(Y, T, O, "", function(Lt) {
        return Lt;
      })) : Y != null && (St(Y) && (Y = Xl(
        Y,
        O + (Y.key == null || r && r.key === Y.key ? "" : ("" + Y.key).replace(
          et,
          "$&/"
        ) + "/") + G
      )), T.push(Y)), 1;
    G = 0;
    var Jl = z === "" ? "." : z + ":";
    if (ut(r))
      for (var rl = 0; rl < r.length; rl++)
        z = r[rl], nl = Jl + nt(z, rl), G += A(
          z,
          T,
          O,
          nl,
          Y
        );
    else if (rl = Gl(r), typeof rl == "function")
      for (r = rl.call(r), rl = 0; !(z = r.next()).done; )
        z = z.value, nl = Jl + nt(z, rl++), G += A(
          z,
          T,
          O,
          nl,
          Y
        );
    else if (nl === "object") {
      if (typeof r.then == "function")
        return A(
          Mt(r),
          T,
          O,
          z,
          Y
        );
      throw T = String(r), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function E(r, T, O) {
    if (r == null) return r;
    var z = [], Y = 0;
    return A(r, z, "", "", function(nl) {
      return T.call(O, nl, Y++);
    }), z;
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
  var W = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof M == "object" && typeof M.emit == "function") {
      M.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  };
  function ol() {
  }
  return j.Children = {
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
  }, j.Component = jl, j.Fragment = J, j.Profiler = dl, j.PureComponent = at, j.StrictMode = m, j.Suspense = p, j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, j.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return C.H.useMemoCache(r);
    }
  }, j.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, j.cloneElement = function(r, T, O) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var z = Ul({}, r.props), Y = r.key, nl = void 0;
    if (T != null)
      for (G in T.ref !== void 0 && (nl = void 0), T.key !== void 0 && (Y = "" + T.key), T)
        !V.call(T, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && T.ref === void 0 || (z[G] = T[G]);
    var G = arguments.length - 2;
    if (G === 1) z.children = O;
    else if (1 < G) {
      for (var Jl = Array(G), rl = 0; rl < G; rl++)
        Jl[rl] = arguments[rl + 2];
      z.children = Jl;
    }
    return yl(r.type, Y, void 0, void 0, nl, z);
  }, j.createContext = function(r) {
    return r = {
      $$typeof: xl,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: hl,
      _context: r
    }, r;
  }, j.createElement = function(r, T, O) {
    var z, Y = {}, nl = null;
    if (T != null)
      for (z in T.key !== void 0 && (nl = "" + T.key), T)
        V.call(T, z) && z !== "key" && z !== "__self" && z !== "__source" && (Y[z] = T[z]);
    var G = arguments.length - 2;
    if (G === 1) Y.children = O;
    else if (1 < G) {
      for (var Jl = Array(G), rl = 0; rl < G; rl++)
        Jl[rl] = arguments[rl + 2];
      Y.children = Jl;
    }
    if (r && r.defaultProps)
      for (z in G = r.defaultProps, G)
        Y[z] === void 0 && (Y[z] = G[z]);
    return yl(r, nl, void 0, void 0, null, Y);
  }, j.createRef = function() {
    return { current: null };
  }, j.forwardRef = function(r) {
    return { $$typeof: U, render: r };
  }, j.isValidElement = St, j.lazy = function(r) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: r },
      _init: _
    };
  }, j.memo = function(r, T) {
    return {
      $$typeof: k,
      type: r,
      compare: T === void 0 ? null : T
    };
  }, j.startTransition = function(r) {
    var T = C.T, O = {};
    C.T = O;
    try {
      var z = r(), Y = C.S;
      Y !== null && Y(O, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(ol, W);
    } catch (nl) {
      W(nl);
    } finally {
      C.T = T;
    }
  }, j.unstable_useCacheRefresh = function() {
    return C.H.useCacheRefresh();
  }, j.use = function(r) {
    return C.H.use(r);
  }, j.useActionState = function(r, T, O) {
    return C.H.useActionState(r, T, O);
  }, j.useCallback = function(r, T) {
    return C.H.useCallback(r, T);
  }, j.useContext = function(r) {
    return C.H.useContext(r);
  }, j.useDebugValue = function() {
  }, j.useDeferredValue = function(r, T) {
    return C.H.useDeferredValue(r, T);
  }, j.useEffect = function(r, T, O) {
    var z = C.H;
    if (typeof O == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return z.useEffect(r, T);
  }, j.useId = function() {
    return C.H.useId();
  }, j.useImperativeHandle = function(r, T, O) {
    return C.H.useImperativeHandle(r, T, O);
  }, j.useInsertionEffect = function(r, T) {
    return C.H.useInsertionEffect(r, T);
  }, j.useLayoutEffect = function(r, T) {
    return C.H.useLayoutEffect(r, T);
  }, j.useMemo = function(r, T) {
    return C.H.useMemo(r, T);
  }, j.useOptimistic = function(r, T) {
    return C.H.useOptimistic(r, T);
  }, j.useReducer = function(r, T, O) {
    return C.H.useReducer(r, T, O);
  }, j.useRef = function(r) {
    return C.H.useRef(r);
  }, j.useState = function(r) {
    return C.H.useState(r);
  }, j.useSyncExternalStore = function(r, T, O) {
    return C.H.useSyncExternalStore(
      r,
      T,
      O
    );
  }, j.useTransition = function() {
    return C.H.useTransition();
  }, j.version = "19.1.1", j;
}
var ad;
function ec() {
  return ad || (ad = 1, Pi.exports = B1()), Pi.exports;
}
var Ot = ec();
const G1 = /* @__PURE__ */ od(Ot);
var lc = { exports: {} }, Se = {}, tc = { exports: {} }, ac = {};
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
function j1() {
  return ud || (ud = 1, (function(M) {
    function q(A, E) {
      var _ = A.length;
      A.push(E);
      l: for (; 0 < _; ) {
        var W = _ - 1 >>> 1, ol = A[W];
        if (0 < m(ol, E))
          A[W] = E, A[_] = ol, _ = W;
        else break l;
      }
    }
    function Q(A) {
      return A.length === 0 ? null : A[0];
    }
    function J(A) {
      if (A.length === 0) return null;
      var E = A[0], _ = A.pop();
      if (_ !== E) {
        A[0] = _;
        l: for (var W = 0, ol = A.length, r = ol >>> 1; W < r; ) {
          var T = 2 * (W + 1) - 1, O = A[T], z = T + 1, Y = A[z];
          if (0 > m(O, _))
            z < ol && 0 > m(Y, O) ? (A[W] = Y, A[z] = _, W = z) : (A[W] = O, A[T] = _, W = T);
          else if (z < ol && 0 > m(Y, _))
            A[W] = Y, A[z] = _, W = z;
          else break l;
        }
      }
      return E;
    }
    function m(A, E) {
      var _ = A.sortIndex - E.sortIndex;
      return _ !== 0 ? _ : A.id - E.id;
    }
    if (M.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var dl = performance;
      M.unstable_now = function() {
        return dl.now();
      };
    } else {
      var hl = Date, xl = hl.now();
      M.unstable_now = function() {
        return hl.now() - xl;
      };
    }
    var U = [], p = [], k = 1, R = null, el = 3, Gl = !1, I = !1, Ul = !1, yt = !1, jl = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate != "undefined" ? setImmediate : null;
    function pl(A) {
      for (var E = Q(p); E !== null; ) {
        if (E.callback === null) J(p);
        else if (E.startTime <= A)
          J(p), E.sortIndex = E.expirationTime, q(U, E);
        else break;
        E = Q(p);
      }
    }
    function ut(A) {
      if (Ul = !1, pl(A), !I)
        if (Q(U) !== null)
          I = !0, C || (C = !0, et());
        else {
          var E = Q(p);
          E !== null && Mt(ut, E.startTime - A);
        }
    }
    var C = !1, V = -1, yl = 5, Xl = -1;
    function St() {
      return yt ? !0 : !(M.unstable_now() - Xl < yl);
    }
    function ma() {
      if (yt = !1, C) {
        var A = M.unstable_now();
        Xl = A;
        var E = !0;
        try {
          l: {
            I = !1, Ul && (Ul = !1, Dt(V), V = -1), Gl = !0;
            var _ = el;
            try {
              t: {
                for (pl(A), R = Q(U); R !== null && !(R.expirationTime > A && St()); ) {
                  var W = R.callback;
                  if (typeof W == "function") {
                    R.callback = null, el = R.priorityLevel;
                    var ol = W(
                      R.expirationTime <= A
                    );
                    if (A = M.unstable_now(), typeof ol == "function") {
                      R.callback = ol, pl(A), E = !0;
                      break t;
                    }
                    R === Q(U) && J(U), pl(A);
                  } else J(U);
                  R = Q(U);
                }
                if (R !== null) E = !0;
                else {
                  var r = Q(p);
                  r !== null && Mt(
                    ut,
                    r.startTime - A
                  ), E = !1;
                }
              }
              break l;
            } finally {
              R = null, el = _, Gl = !1;
            }
            E = void 0;
          }
        } finally {
          E ? et() : C = !1;
        }
      }
    }
    var et;
    if (typeof at == "function")
      et = function() {
        at(ma);
      };
    else if (typeof MessageChannel != "undefined") {
      var nt = new MessageChannel(), Ya = nt.port2;
      nt.port1.onmessage = ma, et = function() {
        Ya.postMessage(null);
      };
    } else
      et = function() {
        jl(ma, 0);
      };
    function Mt(A, E) {
      V = jl(function() {
        A(M.unstable_now());
      }, E);
    }
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, M.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : yl = 0 < A ? Math.floor(1e3 / A) : 5;
    }, M.unstable_getCurrentPriorityLevel = function() {
      return el;
    }, M.unstable_next = function(A) {
      switch (el) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = el;
      }
      var _ = el;
      el = E;
      try {
        return A();
      } finally {
        el = _;
      }
    }, M.unstable_requestPaint = function() {
      yt = !0;
    }, M.unstable_runWithPriority = function(A, E) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var _ = el;
      el = A;
      try {
        return E();
      } finally {
        el = _;
      }
    }, M.unstable_scheduleCallback = function(A, E, _) {
      var W = M.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? W + _ : W) : _ = W, A) {
        case 1:
          var ol = -1;
          break;
        case 2:
          ol = 250;
          break;
        case 5:
          ol = 1073741823;
          break;
        case 4:
          ol = 1e4;
          break;
        default:
          ol = 5e3;
      }
      return ol = _ + ol, A = {
        id: k++,
        callback: E,
        priorityLevel: A,
        startTime: _,
        expirationTime: ol,
        sortIndex: -1
      }, _ > W ? (A.sortIndex = _, q(p, A), Q(U) === null && A === Q(p) && (Ul ? (Dt(V), V = -1) : Ul = !0, Mt(ut, _ - W))) : (A.sortIndex = ol, q(U, A), I || Gl || (I = !0, C || (C = !0, et()))), A;
    }, M.unstable_shouldYield = St, M.unstable_wrapCallback = function(A) {
      var E = el;
      return function() {
        var _ = el;
        el = E;
        try {
          return A.apply(this, arguments);
        } finally {
          el = _;
        }
      };
    };
  })(ac)), ac;
}
var ed;
function X1() {
  return ed || (ed = 1, tc.exports = j1()), tc.exports;
}
var uc = { exports: {} }, Bl = {};
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
  var M = ec();
  function q(U) {
    var p = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        p += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return "Minified React error #" + U + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Q() {
  }
  var J = {
    d: {
      f: Q,
      r: function() {
        throw Error(q(522));
      },
      D: Q,
      C: Q,
      L: Q,
      m: Q,
      X: Q,
      S: Q,
      M: Q
    },
    p: 0,
    findDOMNode: null
  }, m = Symbol.for("react.portal");
  function dl(U, p, k) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: R == null ? null : "" + R,
      children: U,
      containerInfo: p,
      implementation: k
    };
  }
  var hl = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function xl(U, p) {
    if (U === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, Bl.createPortal = function(U, p) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(q(299));
    return dl(U, p, null, k);
  }, Bl.flushSync = function(U) {
    var p = hl.T, k = J.p;
    try {
      if (hl.T = null, J.p = 2, U) return U();
    } finally {
      hl.T = p, J.p = k, J.d.f();
    }
  }, Bl.preconnect = function(U, p) {
    typeof U == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, J.d.C(U, p));
  }, Bl.prefetchDNS = function(U) {
    typeof U == "string" && J.d.D(U);
  }, Bl.preinit = function(U, p) {
    if (typeof U == "string" && p && typeof p.as == "string") {
      var k = p.as, R = xl(k, p.crossOrigin), el = typeof p.integrity == "string" ? p.integrity : void 0, Gl = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      k === "style" ? J.d.S(
        U,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: R,
          integrity: el,
          fetchPriority: Gl
        }
      ) : k === "script" && J.d.X(U, {
        crossOrigin: R,
        integrity: el,
        fetchPriority: Gl,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Bl.preinitModule = function(U, p) {
    if (typeof U == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var k = xl(
            p.as,
            p.crossOrigin
          );
          J.d.M(U, {
            crossOrigin: k,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && J.d.M(U);
  }, Bl.preload = function(U, p) {
    if (typeof U == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var k = p.as, R = xl(k, p.crossOrigin);
      J.d.L(U, k, {
        crossOrigin: R,
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
  }, Bl.preloadModule = function(U, p) {
    if (typeof U == "string")
      if (p) {
        var k = xl(p.as, p.crossOrigin);
        J.d.m(U, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: k,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else J.d.m(U);
  }, Bl.requestFormReset = function(U) {
    J.d.r(U);
  }, Bl.unstable_batchedUpdates = function(U, p) {
    return U(p);
  }, Bl.useFormState = function(U, p, k) {
    return hl.H.useFormState(U, p, k);
  }, Bl.useFormStatus = function() {
    return hl.H.useHostTransitionStatus();
  }, Bl.version = "19.1.1", Bl;
}
var fd;
function C1() {
  if (fd) return uc.exports;
  fd = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (q) {
        console.error(q);
      }
  }
  return M(), uc.exports = Q1(), uc.exports;
}
var id;
function Z1() {
  if (id) return Se;
  id = 1;
  var M = {};
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var q = X1(), Q = ec(), J = C1();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function dl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function hl(l) {
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
  function xl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (hl(l) !== l)
      throw Error(m(188));
  }
  function p(l) {
    var t = l.alternate;
    if (!t) {
      if (t = hl(l), t === null) throw Error(m(188));
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
          if (n === a) return U(e), l;
          if (n === u) return U(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (a.alternate !== u) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function k(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = k(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, el = Symbol.for("react.element"), Gl = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), Ul = Symbol.for("react.fragment"), yt = Symbol.for("react.strict_mode"), jl = Symbol.for("react.profiler"), Dt = Symbol.for("react.provider"), at = Symbol.for("react.consumer"), pl = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), St = Symbol.for("react.activity"), ma = Symbol.for("react.memo_cache_sentinel"), et = Symbol.iterator;
  function nt(l) {
    return l === null || typeof l != "object" ? null : (l = et && l[et] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ya = Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ya ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ul:
        return "Fragment";
      case jl:
        return "Profiler";
      case yt:
        return "StrictMode";
      case C:
        return "Suspense";
      case V:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case I:
          return "Portal";
        case pl:
          return (l.displayName || "Context") + ".Provider";
        case at:
          return (l._context.displayName || "Context") + ".Consumer";
        case ut:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case yl:
          return t = l.displayName || null, t !== null ? t : Mt(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return Mt(l(t));
          } catch (a) {
          }
      }
    return null;
  }
  var A = Array.isArray, E = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = J.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ol = [], r = -1;
  function T(l) {
    return { current: l };
  }
  function O(l) {
    0 > r || (l.current = ol[r], ol[r] = null, r--);
  }
  function z(l, t) {
    r++, ol[r] = l.current, l.current = t;
  }
  var Y = T(null), nl = T(null), G = T(null), Jl = T(null);
  function rl(l, t) {
    switch (z(G, t), z(nl, l), z(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Os(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Os(t), l = Ds(t, l);
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
    O(Y), z(Y, l);
  }
  function Lt() {
    O(Y), O(nl), O(G);
  }
  function Bn(l) {
    l.memoizedState !== null && z(Jl, l);
    var t = Y.current, a = Ds(t, l.type);
    t !== a && (z(nl, l), z(Y, a));
  }
  function pe(l) {
    nl.current === l && (O(Y), O(nl)), Jl.current === l && (O(Jl), he._currentValue = W);
  }
  var Gn = Object.prototype.hasOwnProperty, jn = q.unstable_scheduleCallback, Xn = q.unstable_cancelCallback, rd = q.unstable_shouldYield, sd = q.unstable_requestPaint, pt = q.unstable_now, dd = q.unstable_getCurrentPriorityLevel, nc = q.unstable_ImmediatePriority, fc = q.unstable_UserBlockingPriority, Te = q.unstable_NormalPriority, hd = q.unstable_LowPriority, ic = q.unstable_IdlePriority, vd = q.log, yd = q.unstable_setDisableYieldValue, Tu = null, wl = null;
  function Kt(l) {
    if (typeof vd == "function" && yd(l), wl && typeof wl.setStrictMode == "function")
      try {
        wl.setStrictMode(Tu, l);
      } catch (t) {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : bd, md = Math.log, gd = Math.LN2;
  function bd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (md(l) / gd | 0) | 0;
  }
  var Ee = 256, Ae = 4194304;
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
  function ze(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return i !== 0 ? (u = i & ~n, u !== 0 ? e = ga(u) : (f &= i, f !== 0 ? e = ga(f) : a || (a = i & ~l, a !== 0 && (e = ga(a))))) : (i = u & ~n, i !== 0 ? e = ga(i) : f !== 0 ? e = ga(f) : a || (a = u & ~l, a !== 0 && (e = ga(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
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
  function cc() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function oc() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Au(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function pd(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, h = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - kl(a), S = 1 << g;
      i[g] = 0, c[g] = -1;
      var v = h[g];
      if (v !== null)
        for (h[g] = null, g = 0; g < v.length; g++) {
          var y = v[g];
          y !== null && (y.lane &= -536870913);
        }
      a &= ~S;
    }
    u !== 0 && rc(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function rc(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - kl(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090;
  }
  function sc(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - kl(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function Cn(l) {
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
  function Zn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dc() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Js(l.type));
  }
  function Td(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var Jt = Math.random().toString(36).slice(2), ql = "__reactFiber$" + Jt, Cl = "__reactProps$" + Jt, Ba = "__reactContainer$" + Jt, Vn = "__reactEvents$" + Jt, Ed = "__reactListeners$" + Jt, Ad = "__reactHandles$" + Jt, hc = "__reactResources$" + Jt, zu = "__reactMarker$" + Jt;
  function Ln(l) {
    delete l[ql], delete l[Cl], delete l[Vn], delete l[Ed], delete l[Ad];
  }
  function Ga(l) {
    var t = l[ql];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Ba] || a[ql]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Rs(l); l !== null; ) {
            if (a = l[ql]) return a;
            l = Rs(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function ja(l) {
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
    var t = l[hc];
    return t || (t = l[hc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function _l(l) {
    l[zu] = !0;
  }
  var vc = /* @__PURE__ */ new Set(), yc = {};
  function ba(l, t) {
    Qa(l, t), Qa(l + "Capture", t);
  }
  function Qa(l, t) {
    for (yc[l] = t, l = 0; l < t.length; l++)
      vc.add(t[l]);
  }
  var zd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mc = {}, gc = {};
  function _d(l) {
    return Gn.call(gc, l) ? !0 : Gn.call(mc, l) ? !1 : zd.test(l) ? gc[l] = !0 : (mc[l] = !0, !1);
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
  function xt(l, t, a, u) {
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
  var Kn, bc;
  function Ca(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Kn = t && t[1] || "", bc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kn + l + bc;
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
                } catch (y) {
                  var v = y;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (y) {
                  v = y;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                v = y;
              }
              (S = l()) && typeof S.catch == "function" && S.catch(function() {
              });
            }
          } catch (y) {
            if (y && v && typeof y.stack == "string")
              return [y.stack, v.stack];
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
      var n = u.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), h = i.split(`
`);
        for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === c.length || e === h.length)
          for (u = c.length - 1, e = h.length - 1; 1 <= u && 0 <= e && c[u] !== h[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || c[u] !== h[e]) {
                  var g = `
` + c[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Jn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ca(a) : "";
  }
  function Od(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ca(l.type);
      case 16:
        return Ca("Lazy");
      case 13:
        return Ca("Suspense");
      case 19:
        return Ca("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Ca("Activity");
      default:
        return "";
    }
  }
  function Sc(l) {
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
  function ft(l) {
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
  function pc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dd(l) {
    var t = pc(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function De(l) {
    l._valueTracker || (l._valueTracker = Dd(l));
  }
  function Tc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = pc(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Me(l) {
    if (l = l || (typeof document != "undefined" ? document : void 0), typeof l == "undefined") return null;
    try {
      return l.activeElement || l.body;
    } catch (t) {
      return l.body;
    }
  }
  var Md = /[\n"\\]/g;
  function it(l) {
    return l.replace(
      Md,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kn(l, t, a, u, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Wn(l, f, ft(t)) : a != null ? Wn(l, f, ft(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + ft(i) : l.removeAttribute("name");
  }
  function Ec(l, t, a, u, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      a = a != null ? "" + ft(a) : "", t = t != null ? "" + ft(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u != null ? u : e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = i ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Wn(l, t, a) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Za(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ac(l, t, a) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function zc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(m(92));
        if (A(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = ft(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
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
  var xd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _c(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || xd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Oc(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && _c(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && _c(l, n, t[n]);
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
  var Ud = /* @__PURE__ */ new Map([
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
  ]), Rd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xe(l) {
    return Rd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Fn = null;
  function In(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var La = null, Ka = null;
  function Dc(l) {
    var t = ja(l);
    if (t && (l = t.stateNode)) {
      var a = l[Cl] || null;
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
              'input[name="' + it(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Cl] || null;
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
              u = a[t], u.form === l.form && Tc(u);
          }
          break l;
        case "textarea":
          Ac(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Za(l, !!a.multiple, t, !1);
      }
    }
  }
  var Pn = !1;
  function Mc(l, t, a) {
    if (Pn) return l(t, a);
    Pn = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (Pn = !1, (La !== null || Ka !== null) && (yn(), La && (t = La, l = Ka, Ka = La = null, Dc(t), l)))
        for (t = 0; t < l.length; t++) Dc(l[t]);
    }
  }
  function Ou(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Cl] || null;
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
      var Du = {};
      Object.defineProperty(Du, "passive", {
        get: function() {
          lf = !0;
        }
      }), window.addEventListener("test", Du, Du), window.removeEventListener("test", Du, Du);
    } catch (l) {
      lf = !1;
    }
  var wt = null, tf = null, Ue = null;
  function xc() {
    if (Ue) return Ue;
    var l, t = tf, a = t.length, u, e = "value" in wt ? wt.value : wt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Ue = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Uc() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Uc, this.isPropagationStopped = Uc, this;
    }
    return R(t.prototype, {
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
  }, He = Zl(Sa), Mu = R({}, Sa, { view: 0, detail: 0 }), Nd = Zl(Mu), af, uf, xu, qe = R({}, Mu, {
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
      return "movementX" in l ? l.movementX : (l !== xu && (xu && l.type === "mousemove" ? (af = l.screenX - xu.screenX, uf = l.screenY - xu.screenY) : uf = af = 0, xu = l), af);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uf;
    }
  }), Rc = Zl(qe), Hd = R({}, qe, { dataTransfer: 0 }), qd = Zl(Hd), Yd = R({}, Mu, { relatedTarget: 0 }), ef = Zl(Yd), Bd = R({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gd = Zl(Bd), jd = R({}, Sa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Xd = Zl(jd), Qd = R({}, Sa, { data: 0 }), Nc = Zl(Qd), Cd = {
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
  }, Zd = {
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
  var Kd = R({}, Mu, {
    key: function(l) {
      if (l.key) {
        var t = Cd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Zd[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Jd = Zl(Kd), wd = R({}, qe, {
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
  }), Hc = Zl(wd), kd = R({}, Mu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf
  }), Wd = Zl(kd), $d = R({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fd = Zl($d), Id = R({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pd = Zl(Id), l0 = R({}, Sa, {
    newState: 0,
    oldState: 0
  }), t0 = Zl(l0), a0 = [9, 13, 27, 32], ff = Ut && "CompositionEvent" in window, Uu = null;
  Ut && "documentMode" in document && (Uu = document.documentMode);
  var u0 = Ut && "TextEvent" in window && !Uu, qc = Ut && (!ff || Uu && 8 < Uu && 11 >= Uu), Yc = " ", Bc = !1;
  function Gc(l, t) {
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
  function jc(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ja = !1;
  function e0(l, t) {
    switch (l) {
      case "compositionend":
        return jc(t);
      case "keypress":
        return t.which !== 32 ? null : (Bc = !0, Yc);
      case "textInput":
        return l = t.data, l === Yc && Bc ? null : l;
      default:
        return null;
    }
  }
  function n0(l, t) {
    if (Ja)
      return l === "compositionend" || !ff && Gc(l, t) ? (l = xc(), Ue = tf = wt = null, Ja = !1, l) : null;
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
        return qc && t.locale !== "ko" ? null : t.data;
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
  function Xc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!f0[l.type] : t === "textarea";
  }
  function Qc(l, t, a, u) {
    La ? Ka ? Ka.push(u) : Ka = [u] : La = u, t = Tn(t, "onChange"), 0 < t.length && (a = new He(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Ru = null, Nu = null;
  function i0(l) {
    Ts(l, 0);
  }
  function Ye(l) {
    var t = _u(l);
    if (Tc(t)) return l;
  }
  function Cc(l, t) {
    if (l === "change") return t;
  }
  var Zc = !1;
  if (Ut) {
    var cf;
    if (Ut) {
      var of = "oninput" in document;
      if (!of) {
        var Vc = document.createElement("div");
        Vc.setAttribute("oninput", "return;"), of = typeof Vc.oninput == "function";
      }
      cf = of;
    } else cf = !1;
    Zc = cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Lc() {
    Ru && (Ru.detachEvent("onpropertychange", Kc), Nu = Ru = null);
  }
  function Kc(l) {
    if (l.propertyName === "value" && Ye(Nu)) {
      var t = [];
      Qc(
        t,
        Nu,
        l,
        In(l)
      ), Mc(i0, t);
    }
  }
  function c0(l, t, a) {
    l === "focusin" ? (Lc(), Ru = t, Nu = a, Ru.attachEvent("onpropertychange", Kc)) : l === "focusout" && Lc();
  }
  function o0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Nu);
  }
  function r0(l, t) {
    if (l === "click") return Ye(t);
  }
  function s0(l, t) {
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
      if (!Gn.call(t, e) || !Wl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Jc(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wc(l, t) {
    var a = Jc(l);
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
      a = Jc(a);
    }
  }
  function kc(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kc(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch (u) {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function rf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var h0 = Ut && "documentMode" in document && 11 >= document.documentMode, wa = null, sf = null, qu = null, df = !1;
  function $c(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    df || wa == null || wa !== Me(u) || (u = wa, "selectionStart" in u && rf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), qu && Hu(qu, u) || (qu = u, u = Tn(sf, "onSelect"), 0 < u.length && (t = new He(
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
  }, hf = {}, Fc = {};
  Ut && (Fc = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function Ta(l) {
    if (hf[l]) return hf[l];
    if (!ka[l]) return l;
    var t = ka[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Fc)
        return hf[l] = t[a];
    return l;
  }
  var Ic = Ta("animationend"), Pc = Ta("animationiteration"), lo = Ta("animationstart"), v0 = Ta("transitionrun"), y0 = Ta("transitionstart"), m0 = Ta("transitioncancel"), to = Ta("transitionend"), ao = /* @__PURE__ */ new Map(), vf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vf.push("scrollEnd");
  function mt(l, t) {
    ao.set(l, t), ba(t, [l]);
  }
  var uo = /* @__PURE__ */ new WeakMap();
  function ct(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = uo.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: Sc(t)
      }, uo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Sc(t)
    };
  }
  var ot = [], Wa = 0, yf = 0;
  function Be() {
    for (var l = Wa, t = yf = Wa = 0; t < l; ) {
      var a = ot[t];
      ot[t++] = null;
      var u = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (ot[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && eo(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    ot[Wa++] = l, ot[Wa++] = t, ot[Wa++] = a, ot[Wa++] = u, yf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function mf(l, t, a, u) {
    return Ge(l, t, a, u), je(l);
  }
  function $a(l, t) {
    return Ge(l, null, null, t), je(l);
  }
  function eo(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - kl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function je(l) {
    if (50 < ne)
      throw ne = 0, Ei = null, Error(m(185));
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
  function no(l, t) {
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
        case Ul:
          return Ea(a.children, e, n, t);
        case yt:
          f = 8, e |= 24;
          break;
        case jl:
          return l = $l(12, a, t, e | 2), l.elementType = jl, l.lanes = n, l;
        case C:
          return l = $l(13, a, t, e), l.elementType = C, l.lanes = n, l;
        case V:
          return l = $l(19, a, t, e), l.elementType = V, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
              case pl:
                f = 10;
                break l;
              case at:
                f = 9;
                break l;
              case ut:
                f = 11;
                break l;
              case yl:
                f = 14;
                break l;
              case Xl:
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
  var Ia = [], Pa = 0, Qe = null, Ce = 0, rt = [], st = 0, Aa = null, Nt = 1, Ht = "";
  function za(l, t) {
    Ia[Pa++] = Ce, Ia[Pa++] = Qe, Qe = l, Ce = t;
  }
  function fo(l, t, a) {
    rt[st++] = Nt, rt[st++] = Ht, rt[st++] = Aa, Aa = l;
    var u = Nt;
    l = Ht;
    var e = 32 - kl(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - kl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Nt = 1 << 32 - kl(t) + e | a << e | u, Ht = n + l;
    } else
      Nt = 1 << n | a << e | u, Ht = l;
  }
  function pf(l) {
    l.return !== null && (za(l, 1), fo(l, 1, 0));
  }
  function Tf(l) {
    for (; l === Qe; )
      Qe = Ia[--Pa], Ia[Pa] = null, Ce = Ia[--Pa], Ia[Pa] = null;
    for (; l === Aa; )
      Aa = rt[--st], rt[st] = null, Ht = rt[--st], rt[st] = null, Nt = rt[--st], rt[st] = null;
  }
  var Ql = null, ml = null, F = !1, _a = null, Tt = !1, Ef = Error(m(519));
  function Oa(l) {
    var t = Error(m(418, ""));
    throw Gu(ct(t, l)), Ef;
  }
  function io(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[ql] = l, t[Cl] = u, a) {
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
        for (a = 0; a < ie.length; a++)
          K(ie[a], t);
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
        K("invalid", t), Ec(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), De(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), zc(t, u.value, u.defaultValue, u.children), De(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || _s(t.textContent, a) ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)), u.onScroll != null && K("scroll", t), u.onScrollEnd != null && K("scrollend", t), u.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Oa(l);
  }
  function co(l) {
    for (Ql = l.return; Ql; )
      switch (Ql.tag) {
        case 5:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Ql = Ql.return;
      }
  }
  function Yu(l) {
    if (l !== Ql) return !1;
    if (!F) return co(l), F = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || ji(l.type, l.memoizedProps)), a = !a), a && ml && Oa(l), co(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (t === 0) {
                ml = bt(l.nextSibling);
                break l;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          l = l.nextSibling;
        }
        ml = null;
      }
    } else
      t === 27 ? (t = ml, oa(l.type) ? (l = Zi, Zi = null, ml = l) : ml = t) : ml = Ql ? bt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Bu() {
    ml = Ql = null, F = !1;
  }
  function oo() {
    var l = _a;
    return l !== null && (Kl === null ? Kl = l : Kl.push.apply(
      Kl,
      l
    ), _a = null), l;
  }
  function Gu(l) {
    _a === null ? _a = [l] : _a.push(l);
  }
  var Af = T(null), Da = null, qt = null;
  function kt(l, t, a) {
    z(Af, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Af.current, O(Af);
  }
  function zf(l, t, a) {
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
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), zf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), zf(f, a, l), f = null;
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
  function ju(l, t, a, u) {
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
          var i = e.type;
          Wl(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === Jl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
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
  function Ze(l) {
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
  function Ma(l) {
    Da = l, qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return ro(Da, l);
  }
  function Ve(l, t) {
    return Da === null && Ma(l), ro(l, t);
  }
  function ro(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, qt === null) {
      if (l === null) throw Error(m(308));
      qt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else qt = qt.next = t;
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
  }, S0 = q.unstable_scheduleCallback, p0 = q.unstable_NormalPriority, Al = {
    $$typeof: pl,
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
  var Qu = null, Df = 0, lu = 0, tu = null;
  function T0(l, t) {
    if (Qu === null) {
      var a = Qu = [];
      Df = 0, lu = xi(), tu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Df++, t.then(so, so), t;
  }
  function so() {
    if (--Df === 0 && Qu !== null) {
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
  var ho = E.S;
  E.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && T0(l, t), ho !== null && ho(l, t);
  };
  var xa = T(null);
  function Mf() {
    var l = xa.current;
    return l !== null ? l : cl.pooledCache;
  }
  function Le(l, t) {
    t === null ? z(xa, xa.current) : z(xa, t.pool);
  }
  function vo() {
    var l = Mf();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var Cu = Error(m(460)), yo = Error(m(474)), Ke = Error(m(542)), xf = { then: function() {
  } };
  function mo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Je() {
  }
  function go(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Je, Je), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, So(l), l;
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
            throw l = t.reason, So(l), l;
        }
        throw Zu = t, Cu;
    }
  }
  var Zu = null;
  function bo() {
    if (Zu === null) throw Error(m(459));
    var l = Zu;
    return Zu = null, l;
  }
  function So(l) {
    if (l === Cu || l === Ke)
      throw Error(m(483));
  }
  var Wt = !1;
  function Uf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rf(l, t) {
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
    if (u = u.shared, (P & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = je(l), eo(l, null, a), t;
    }
    return Ge(l, u, t, a), je(l);
  }
  function Vu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, sc(l, a);
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
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, h = c.next;
      c.next = null, f === null ? n = h : f.next = h, f = c;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== f && (i === null ? g.firstBaseUpdate = h : i.next = h, g.lastBaseUpdate = c));
    }
    if (n !== null) {
      var S = e.baseState;
      f = 0, g = h = c = null, i = n;
      do {
        var v = i.lane & -536870913, y = v !== i.lane;
        if (y ? (w & v) === v : (u & v) === v) {
          v !== 0 && v === lu && (Hf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var B = l, N = i;
            v = t;
            var ul = a;
            switch (N.tag) {
              case 1:
                if (B = N.payload, typeof B == "function") {
                  S = B.call(ul, S, v);
                  break l;
                }
                S = B;
                break l;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = N.payload, v = typeof B == "function" ? B.call(ul, S, v) : B, v == null) break l;
                S = R({}, S, v);
                break l;
              case 2:
                Wt = !0;
            }
          }
          v = i.callback, v !== null && (l.flags |= 64, y && (l.flags |= 8192), y = e.callbacks, y === null ? e.callbacks = [v] : y.push(v));
        } else
          y = {
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, g === null ? (h = g = y, c = S) : g = g.next = y, f |= v;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          y = i, i = y.next, y.next = null, e.lastBaseUpdate = y, e.shared.pending = null;
        }
      } while (!0);
      g === null && (c = S), e.baseState = c, e.firstBaseUpdate = h, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), na |= f, l.lanes = f, l.memoizedState = S;
    }
  }
  function po(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function To(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        po(a[l], t);
  }
  var au = T(null), we = T(0);
  function Eo(l, t) {
    l = Zt, z(we, l), z(au, t), Zt = l | t.baseLanes;
  }
  function qf() {
    z(we, Zt), z(au, au.current);
  }
  function Yf() {
    Zt = we.current, O(au), O(we);
  }
  var It = 0, X = null, tl = null, Tl = null, ke = !1, uu = !1, Ua = !1, We = 0, Ju = 0, eu = null, A0 = 0;
  function bl() {
    throw Error(m(321));
  }
  function Bf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Wl(l[a], t[a])) return !1;
    return !0;
  }
  function Gf(l, t, a, u, e, n) {
    return It = n, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = l === null || l.memoizedState === null ? nr : fr, Ua = !1, n = a(u, e), Ua = !1, uu && (n = zo(
      t,
      a,
      u,
      e
    )), Ao(l), n;
  }
  function Ao(l) {
    E.H = tn;
    var t = tl !== null && tl.next !== null;
    if (It = 0, Tl = tl = X = null, ke = !1, Ju = 0, eu = null, t) throw Error(m(300));
    l === null || Ol || (l = l.dependencies, l !== null && Ze(l) && (Ol = !0));
  }
  function zo(l, t, a, u) {
    X = l;
    var e = 0;
    do {
      if (uu && (eu = null), Ju = 0, uu = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Tl = tl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = U0, n = t(a, u);
    } while (uu);
    return n;
  }
  function z0() {
    var l = E.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? wu(t) : t, l = l.useState()[0], (tl !== null ? tl.memoizedState : null) !== l && (X.flags |= 1024), t;
  }
  function jf() {
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
    It = 0, Tl = tl = X = null, uu = !1, Ju = We = 0, eu = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tl === null ? X.memoizedState = Tl = l : Tl = Tl.next = l, Tl;
  }
  function El() {
    if (tl === null) {
      var l = X.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = tl.next;
    var t = Tl === null ? X.memoizedState : Tl.next;
    if (t !== null)
      Tl = t, tl = l;
    else {
      if (l === null)
        throw X.alternate === null ? Error(m(467)) : Error(m(310));
      tl = l, l = {
        memoizedState: tl.memoizedState,
        baseState: tl.baseState,
        baseQueue: tl.baseQueue,
        queue: tl.queue,
        next: null
      }, Tl === null ? X.memoizedState = Tl = l : Tl = Tl.next = l;
    }
    return Tl;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wu(l) {
    var t = Ju;
    return Ju += 1, eu === null && (eu = []), l = go(eu, l, t), t = X, (Tl === null ? t.memoizedState : Tl.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? nr : fr), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return wu(l);
      if (l.$$typeof === pl) return Yl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Zf(l) {
    var t = null, a = X.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = X.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Cf(), X.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = ma;
    return t.index++, a;
  }
  function Bt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Fe(l) {
    var t = El();
    return Vf(t, tl, l);
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
      var i = f = null, c = null, h = t, g = !1;
      do {
        var S = h.lane & -536870913;
        if (S !== h.lane ? (w & S) === S : (It & S) === S) {
          var v = h.revertLane;
          if (v === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), S === lu && (g = !0);
          else if ((It & v) === v) {
            h = h.next, v === lu && (g = !0);
            continue;
          } else
            S = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, c === null ? (i = c = S, f = n) : c = c.next = S, X.lanes |= v, na |= v;
          S = h.action, Ua && a(n, S), n = h.hasEagerState ? h.eagerState : a(n, S);
        } else
          v = {
            lane: S,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, c === null ? (i = c = v, f = n) : c = c.next = v, X.lanes |= S, na |= S;
        h = h.next;
      } while (h !== null && h !== t);
      if (c === null ? f = n : c.next = i, !Wl(n, l.memoizedState) && (Ol = !0, g && (a = tu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Lf(l) {
    var t = El(), a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Wl(n, t.memoizedState) || (Ol = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function _o(l, t, a) {
    var u = X, e = El(), n = F;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var f = !Wl(
      (tl || e).memoizedState,
      a
    );
    f && (e.memoizedState = a, Ol = !0), e = e.queue;
    var i = Mo.bind(null, u, e, l);
    if (ku(2048, 8, i, [l]), e.getSnapshot !== t || f || Tl !== null && Tl.memoizedState.tag & 1) {
      if (u.flags |= 2048, nu(
        9,
        Ie(),
        Do.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), cl === null) throw Error(m(349));
      n || (It & 124) !== 0 || Oo(u, t, a);
    }
    return a;
  }
  function Oo(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = X.updateQueue, t === null ? (t = Cf(), X.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Do(l, t, a, u) {
    t.value = a, t.getSnapshot = u, xo(t) && Uo(l);
  }
  function Mo(l, t, a) {
    return a(function() {
      xo(t) && Uo(l);
    });
  }
  function xo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Wl(l, a);
    } catch (u) {
      return !0;
    }
  }
  function Uo(l) {
    var t = $a(l, 2);
    t !== null && tt(t, l, 2);
  }
  function Kf(l) {
    var t = Vl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ua) {
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
      lastRenderedReducer: Bt,
      lastRenderedState: l
    }, t;
  }
  function Ro(l, t, a, u) {
    return l.baseState = a, Vf(
      l,
      tl,
      typeof u == "function" ? u : Bt
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
      E.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, No(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function No(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = E.T, f = {};
      E.T = f;
      try {
        var i = a(e, u), c = E.S;
        c !== null && c(f, i), Ho(l, t, i);
      } catch (h) {
        Jf(l, t, h);
      } finally {
        E.T = n;
      }
    } else
      try {
        n = a(e, u), Ho(l, t, n);
      } catch (h) {
        Jf(l, t, h);
      }
  }
  function Ho(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        qo(l, t, u);
      },
      function(u) {
        return Jf(l, t, u);
      }
    ) : qo(l, t, a);
  }
  function qo(l, t, a) {
    t.status = "fulfilled", t.value = a, Yo(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, No(l, a)));
  }
  function Jf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Yo(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Yo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Bo(l, t) {
    return t;
  }
  function Go(l, t) {
    if (F) {
      var a = cl.formState;
      if (a !== null) {
        l: {
          var u = X;
          if (F) {
            if (ml) {
              t: {
                for (var e = ml, n = Tt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = bt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                ml = bt(
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
    return a = Vl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bo,
      lastRenderedState: t
    }, a.queue = u, a = ar.bind(
      null,
      X,
      u
    ), u.dispatch = a, u = Kf(!1), n = Ff.bind(
      null,
      X,
      !1,
      u.queue
    ), u = Vl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = _0.bind(
      null,
      X,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function jo(l) {
    var t = El();
    return Xo(t, tl, l);
  }
  function Xo(l, t, a) {
    if (t = Vf(
      l,
      t,
      Bo
    )[0], l = Fe(Bt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = wu(t);
      } catch (f) {
        throw f === Cu ? Ke : f;
      }
    else u = t;
    t = El();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (X.flags |= 2048, nu(
      9,
      Ie(),
      O0.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function O0(l, t) {
    l.action = t;
  }
  function Qo(l) {
    var t = El(), a = tl;
    if (a !== null)
      return Xo(t, a, l);
    El(), t = t.memoizedState, a = El();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function nu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = X.updateQueue, t === null && (t = Cf(), X.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Ie() {
    return { destroy: void 0, resource: void 0 };
  }
  function Co() {
    return El().memoizedState;
  }
  function Pe(l, t, a, u) {
    var e = Vl();
    u = u === void 0 ? null : u, X.flags |= l, e.memoizedState = nu(
      1 | t,
      Ie(),
      a,
      u
    );
  }
  function ku(l, t, a, u) {
    var e = El();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    tl !== null && u !== null && Bf(u, tl.memoizedState.deps) ? e.memoizedState = nu(t, n, a, u) : (X.flags |= l, e.memoizedState = nu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Zo(l, t) {
    Pe(8390656, 8, l, t);
  }
  function Vo(l, t) {
    ku(2048, 8, l, t);
  }
  function Lo(l, t) {
    return ku(4, 2, l, t);
  }
  function Ko(l, t) {
    return ku(4, 4, l, t);
  }
  function Jo(l, t) {
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
  function wo(l, t, a) {
    a = a != null ? a.concat([l]) : null, ku(4, 4, Jo.bind(null, t, l), a);
  }
  function wf() {
  }
  function ko(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Bf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function Wo(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Bf(t, u[1]))
      return u[0];
    if (u = l(), Ua) {
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
    return a === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = Ir(), X.lanes |= l, na |= l, a);
  }
  function $o(l, t, a, u) {
    return Wl(a, t) ? a : au.current !== null ? (l = kf(l, a, u), Wl(l, t) || (Ol = !0), l) : (It & 42) === 0 ? (Ol = !0, l.memoizedState = a) : (l = Ir(), X.lanes |= l, na |= l, t);
  }
  function Fo(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = E.T, i = {};
    E.T = i, Ff(l, !1, t, a);
    try {
      var c = e(), h = E.S;
      if (h !== null && h(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var g = E0(
          c,
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
  function D0() {
  }
  function Wf(l, t, a, u) {
    if (l.tag !== 5) throw Error(m(476));
    var e = Io(l).queue;
    Fo(
      l,
      e,
      t,
      W,
      a === null ? D0 : function() {
        return Po(l), a(u);
      }
    );
  }
  function Io(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: W
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
        lastRenderedReducer: Bt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Po(l) {
    var t = Io(l).next.queue;
    Wu(l, t, {}, lt());
  }
  function $f() {
    return Yl(he);
  }
  function lr() {
    return El().memoizedState;
  }
  function tr() {
    return El().memoizedState;
  }
  function M0(l) {
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
  function x0(l, t, a) {
    var u = lt();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l) ? ur(t, a) : (a = mf(l, t, a, u), a !== null && (tt(a, l, u), er(a, t, u)));
  }
  function ar(l, t, a) {
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
    if (ln(l)) ur(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = i, Wl(i, f))
            return Ge(l, t, e, 0), cl === null && Be(), !1;
        } catch (c) {
        } finally {
        }
      if (a = mf(l, t, e, u), a !== null)
        return tt(a, l, u), er(a, t, u), !0;
    }
    return !1;
  }
  function Ff(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: xi(),
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
    return l === X || t !== null && t === X;
  }
  function ur(l, t) {
    uu = ke = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function er(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, sc(l, a);
    }
  }
  var tn = {
    readContext: Yl,
    use: $e,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl
  }, nr = {
    readContext: Yl,
    use: $e,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Yl,
    useEffect: Zo,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Pe(
        4194308,
        4,
        Jo.bind(null, t, l),
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
      var a = Vl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ua) {
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
      var u = Vl();
      if (a !== void 0) {
        var e = a(t);
        if (Ua) {
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
      }, u.queue = l, l = l.dispatch = x0.bind(
        null,
        X,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Kf(l);
      var t = l.queue, a = ar.bind(null, X, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = Vl();
      return kf(a, l, t);
    },
    useTransition: function() {
      var l = Kf(!1);
      return l = Fo.bind(
        null,
        X,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = X, e = Vl();
      if (F) {
        if (a === void 0)
          throw Error(m(407));
        a = a();
      } else {
        if (a = t(), cl === null)
          throw Error(m(349));
        (w & 124) !== 0 || Oo(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Zo(Mo.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, nu(
        9,
        Ie(),
        Do.bind(
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
      var l = Vl(), t = cl.identifierPrefix;
      if (F) {
        var a = Ht, u = Nt;
        a = (u & ~(1 << 32 - kl(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = We++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = A0++, t = "«" + t + "r" + a.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: $f,
    useFormState: Go,
    useActionState: Go,
    useOptimistic: function(l) {
      var t = Vl();
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
        X,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Zf,
    useCacheRefresh: function() {
      return Vl().memoizedState = M0.bind(
        null,
        X
      );
    }
  }, fr = {
    readContext: Yl,
    use: $e,
    useCallback: ko,
    useContext: Yl,
    useEffect: Vo,
    useImperativeHandle: wo,
    useInsertionEffect: Lo,
    useLayoutEffect: Ko,
    useMemo: Wo,
    useReducer: Fe,
    useRef: Co,
    useState: function() {
      return Fe(Bt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = El();
      return $o(
        a,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fe(Bt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : wu(l),
        t
      ];
    },
    useSyncExternalStore: _o,
    useId: lr,
    useHostTransitionStatus: $f,
    useFormState: jo,
    useActionState: jo,
    useOptimistic: function(l, t) {
      var a = El();
      return Ro(a, tl, l, t);
    },
    useMemoCache: Zf,
    useCacheRefresh: tr
  }, U0 = {
    readContext: Yl,
    use: $e,
    useCallback: ko,
    useContext: Yl,
    useEffect: Vo,
    useImperativeHandle: wo,
    useInsertionEffect: Lo,
    useLayoutEffect: Ko,
    useMemo: Wo,
    useReducer: Lf,
    useRef: Co,
    useState: function() {
      return Lf(Bt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var a = El();
      return tl === null ? kf(a, l, t) : $o(
        a,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Lf(Bt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : wu(l),
        t
      ];
    },
    useSyncExternalStore: _o,
    useId: lr,
    useHostTransitionStatus: $f,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(l, t) {
      var a = El();
      return tl !== null ? Ro(a, tl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Zf,
    useCacheRefresh: tr
  }, fu = null, $u = 0;
  function an(l) {
    var t = $u;
    return $u += 1, fu === null && (fu = []), go(fu, l, t);
  }
  function Fu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === el ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function ir(l) {
    var t = l._init;
    return t(l._payload);
  }
  function cr(l) {
    function t(s, o) {
      if (l) {
        var d = s.deletions;
        d === null ? (s.deletions = [o], s.flags |= 16) : d.push(o);
      }
    }
    function a(s, o) {
      if (!l) return null;
      for (; o !== null; )
        t(s, o), o = o.sibling;
      return null;
    }
    function u(s) {
      for (var o = /* @__PURE__ */ new Map(); s !== null; )
        s.key !== null ? o.set(s.key, s) : o.set(s.index, s), s = s.sibling;
      return o;
    }
    function e(s, o) {
      return s = Rt(s, o), s.index = 0, s.sibling = null, s;
    }
    function n(s, o, d) {
      return s.index = d, l ? (d = s.alternate, d !== null ? (d = d.index, d < o ? (s.flags |= 67108866, o) : d) : (s.flags |= 67108866, o)) : (s.flags |= 1048576, o);
    }
    function f(s) {
      return l && s.alternate === null && (s.flags |= 67108866), s;
    }
    function i(s, o, d, b) {
      return o === null || o.tag !== 6 ? (o = bf(d, s.mode, b), o.return = s, o) : (o = e(o, d), o.return = s, o);
    }
    function c(s, o, d, b) {
      var D = d.type;
      return D === Ul ? g(
        s,
        o,
        d.props.children,
        b,
        d.key
      ) : o !== null && (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Xl && ir(D) === o.type) ? (o = e(o, d.props), Fu(o, d), o.return = s, o) : (o = Xe(
        d.type,
        d.key,
        d.props,
        null,
        s.mode,
        b
      ), Fu(o, d), o.return = s, o);
    }
    function h(s, o, d, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== d.containerInfo || o.stateNode.implementation !== d.implementation ? (o = Sf(d, s.mode, b), o.return = s, o) : (o = e(o, d.children || []), o.return = s, o);
    }
    function g(s, o, d, b, D) {
      return o === null || o.tag !== 7 ? (o = Ea(
        d,
        s.mode,
        b,
        D
      ), o.return = s, o) : (o = e(o, d), o.return = s, o);
    }
    function S(s, o, d) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = bf(
          "" + o,
          s.mode,
          d
        ), o.return = s, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gl:
            return d = Xe(
              o.type,
              o.key,
              o.props,
              null,
              s.mode,
              d
            ), Fu(d, o), d.return = s, d;
          case I:
            return o = Sf(
              o,
              s.mode,
              d
            ), o.return = s, o;
          case Xl:
            var b = o._init;
            return o = b(o._payload), S(s, o, d);
        }
        if (A(o) || nt(o))
          return o = Ea(
            o,
            s.mode,
            d,
            null
          ), o.return = s, o;
        if (typeof o.then == "function")
          return S(s, an(o), d);
        if (o.$$typeof === pl)
          return S(
            s,
            Ve(s, o),
            d
          );
        un(s, o);
      }
      return null;
    }
    function v(s, o, d, b) {
      var D = o !== null ? o.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return D !== null ? null : i(s, o, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Gl:
            return d.key === D ? c(s, o, d, b) : null;
          case I:
            return d.key === D ? h(s, o, d, b) : null;
          case Xl:
            return D = d._init, d = D(d._payload), v(s, o, d, b);
        }
        if (A(d) || nt(d))
          return D !== null ? null : g(s, o, d, b, null);
        if (typeof d.then == "function")
          return v(
            s,
            o,
            an(d),
            b
          );
        if (d.$$typeof === pl)
          return v(
            s,
            o,
            Ve(s, d),
            b
          );
        un(s, d);
      }
      return null;
    }
    function y(s, o, d, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return s = s.get(d) || null, i(o, s, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Gl:
            return s = s.get(
              b.key === null ? d : b.key
            ) || null, c(o, s, b, D);
          case I:
            return s = s.get(
              b.key === null ? d : b.key
            ) || null, h(o, s, b, D);
          case Xl:
            var Z = b._init;
            return b = Z(b._payload), y(
              s,
              o,
              d,
              b,
              D
            );
        }
        if (A(b) || nt(b))
          return s = s.get(d) || null, g(o, s, b, D, null);
        if (typeof b.then == "function")
          return y(
            s,
            o,
            d,
            an(b),
            D
          );
        if (b.$$typeof === pl)
          return y(
            s,
            o,
            d,
            Ve(o, b),
            D
          );
        un(o, b);
      }
      return null;
    }
    function B(s, o, d, b) {
      for (var D = null, Z = null, x = o, H = o = 0, Ml = null; x !== null && H < d.length; H++) {
        x.index > H ? (Ml = x, x = null) : Ml = x.sibling;
        var $ = v(
          s,
          x,
          d[H],
          b
        );
        if ($ === null) {
          x === null && (x = Ml);
          break;
        }
        l && x && $.alternate === null && t(s, x), o = n($, o, H), Z === null ? D = $ : Z.sibling = $, Z = $, x = Ml;
      }
      if (H === d.length)
        return a(s, x), F && za(s, H), D;
      if (x === null) {
        for (; H < d.length; H++)
          x = S(s, d[H], b), x !== null && (o = n(
            x,
            o,
            H
          ), Z === null ? D = x : Z.sibling = x, Z = x);
        return F && za(s, H), D;
      }
      for (x = u(x); H < d.length; H++)
        Ml = y(
          x,
          s,
          H,
          d[H],
          b
        ), Ml !== null && (l && Ml.alternate !== null && x.delete(
          Ml.key === null ? H : Ml.key
        ), o = n(
          Ml,
          o,
          H
        ), Z === null ? D = Ml : Z.sibling = Ml, Z = Ml);
      return l && x.forEach(function(va) {
        return t(s, va);
      }), F && za(s, H), D;
    }
    function N(s, o, d, b) {
      if (d == null) throw Error(m(151));
      for (var D = null, Z = null, x = o, H = o = 0, Ml = null, $ = d.next(); x !== null && !$.done; H++, $ = d.next()) {
        x.index > H ? (Ml = x, x = null) : Ml = x.sibling;
        var va = v(s, x, $.value, b);
        if (va === null) {
          x === null && (x = Ml);
          break;
        }
        l && x && va.alternate === null && t(s, x), o = n(va, o, H), Z === null ? D = va : Z.sibling = va, Z = va, x = Ml;
      }
      if ($.done)
        return a(s, x), F && za(s, H), D;
      if (x === null) {
        for (; !$.done; H++, $ = d.next())
          $ = S(s, $.value, b), $ !== null && (o = n($, o, H), Z === null ? D = $ : Z.sibling = $, Z = $);
        return F && za(s, H), D;
      }
      for (x = u(x); !$.done; H++, $ = d.next())
        $ = y(x, s, H, $.value, b), $ !== null && (l && $.alternate !== null && x.delete($.key === null ? H : $.key), o = n($, o, H), Z === null ? D = $ : Z.sibling = $, Z = $);
      return l && x.forEach(function(R1) {
        return t(s, R1);
      }), F && za(s, H), D;
    }
    function ul(s, o, d, b) {
      if (typeof d == "object" && d !== null && d.type === Ul && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Gl:
            l: {
              for (var D = d.key; o !== null; ) {
                if (o.key === D) {
                  if (D = d.type, D === Ul) {
                    if (o.tag === 7) {
                      a(
                        s,
                        o.sibling
                      ), b = e(
                        o,
                        d.props.children
                      ), b.return = s, s = b;
                      break l;
                    }
                  } else if (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Xl && ir(D) === o.type) {
                    a(
                      s,
                      o.sibling
                    ), b = e(o, d.props), Fu(b, d), b.return = s, s = b;
                    break l;
                  }
                  a(s, o);
                  break;
                } else t(s, o);
                o = o.sibling;
              }
              d.type === Ul ? (b = Ea(
                d.props.children,
                s.mode,
                b,
                d.key
              ), b.return = s, s = b) : (b = Xe(
                d.type,
                d.key,
                d.props,
                null,
                s.mode,
                b
              ), Fu(b, d), b.return = s, s = b);
            }
            return f(s);
          case I:
            l: {
              for (D = d.key; o !== null; ) {
                if (o.key === D)
                  if (o.tag === 4 && o.stateNode.containerInfo === d.containerInfo && o.stateNode.implementation === d.implementation) {
                    a(
                      s,
                      o.sibling
                    ), b = e(o, d.children || []), b.return = s, s = b;
                    break l;
                  } else {
                    a(s, o);
                    break;
                  }
                else t(s, o);
                o = o.sibling;
              }
              b = Sf(d, s.mode, b), b.return = s, s = b;
            }
            return f(s);
          case Xl:
            return D = d._init, d = D(d._payload), ul(
              s,
              o,
              d,
              b
            );
        }
        if (A(d))
          return B(
            s,
            o,
            d,
            b
          );
        if (nt(d)) {
          if (D = nt(d), typeof D != "function") throw Error(m(150));
          return d = D.call(d), N(
            s,
            o,
            d,
            b
          );
        }
        if (typeof d.then == "function")
          return ul(
            s,
            o,
            an(d),
            b
          );
        if (d.$$typeof === pl)
          return ul(
            s,
            o,
            Ve(s, d),
            b
          );
        un(s, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, o !== null && o.tag === 6 ? (a(s, o.sibling), b = e(o, d), b.return = s, s = b) : (a(s, o), b = bf(d, s.mode, b), b.return = s, s = b), f(s)) : a(s, o);
    }
    return function(s, o, d, b) {
      try {
        $u = 0;
        var D = ul(
          s,
          o,
          d,
          b
        );
        return fu = null, D;
      } catch (x) {
        if (x === Cu || x === Ke) throw x;
        var Z = $l(29, x, null, s.mode);
        return Z.lanes = b, Z.return = s, Z;
      } finally {
      }
    };
  }
  var iu = cr(!0), or = cr(!1), dt = T(null), Et = null;
  function Pt(l) {
    var t = l.alternate;
    z(zl, zl.current & 1), z(dt, l), Et === null && (t === null || au.current !== null || t.memoizedState !== null) && (Et = l);
  }
  function rr(l) {
    if (l.tag === 22) {
      if (z(zl, zl.current), z(dt, l), Et === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Et = l);
      }
    } else la();
  }
  function la() {
    z(zl, zl.current), z(dt, dt.current);
  }
  function Gt(l) {
    O(dt), Et === l && (Et = null), O(zl);
  }
  var zl = T(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Ci(a)))
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
    t = l.memoizedState, a = a(u, t), a = a == null ? t : R({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
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
  function sr(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Hu(a, u) || !Hu(e, n) : !0;
  }
  function dr(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && Pf.enqueueReplaceState(t, t.state, null);
  }
  function Ra(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = R({}, a));
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
    } else if (typeof M == "object" && typeof M.emit == "function") {
      M.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function hr(l) {
    nn(l);
  }
  function vr(l) {
    console.error(l);
  }
  function yr(l) {
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
  function mr(l, t, a) {
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
  function li(l, t, a) {
    return a = $t(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function gr(l) {
    return l = $t(l), l.tag = 3, l;
  }
  function br(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        mr(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      mr(t, a, u), typeof e != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var i = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function R0(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && ju(
        t,
        a,
        e,
        !0
      ), a = dt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Et === null ? zi() : a.alternate === null && gl === 0 && (gl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === xf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Oi(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === xf ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Oi(l, u, e)), !1;
        }
        throw Error(m(435, a.tag));
      }
      return Oi(l, u, e), zi(), !1;
    }
    if (F)
      return t = dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ef && (l = Error(m(422), { cause: u }), Gu(ct(l, a)))) : (u !== Ef && (t = Error(m(423), {
        cause: u
      }), Gu(
        ct(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ct(u, a), e = li(
        l.stateNode,
        u,
        e
      ), Nf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(m(520), { cause: u });
    if (n = ct(n, a), ee === null ? ee = [n] : ee.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    u = ct(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = li(a.stateNode, u, l), Nf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (fa === null || !fa.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = gr(e), br(
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
  var Sr = Error(m(461)), Ol = !1;
  function Rl(l, t, a, u) {
    t.child = l === null ? or(t, null, a, u) : iu(
      t,
      l.child,
      a,
      u
    );
  }
  function pr(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var i in u)
        i !== "ref" && (f[i] = u[i]);
    } else f = u;
    return Ma(t), u = Gf(
      l,
      t,
      a,
      f,
      n,
      e
    ), i = jf(), l !== null && !Ol ? (Xf(l, t, e), jt(l, t, e)) : (F && i && pf(t), t.flags |= 1, Rl(l, t, u, e), t.child);
  }
  function Tr(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !gf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Er(
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
    if (n = l.child, !ci(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Hu, a(f, u) && l.ref === t.ref)
        return jt(l, t, e);
    }
    return t.flags |= 1, l = Rt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Er(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Hu(n, u) && l.ref === t.ref)
        if (Ol = !1, t.pendingProps = u = n, ci(l, e))
          (l.flags & 131072) !== 0 && (Ol = !0);
        else
          return t.lanes = l.lanes, jt(l, t, e);
    }
    return ti(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Ar(l, t, a) {
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
        ), n !== null ? Eo(t, n) : qf(), rr(t);
      else
        return t.lanes = t.childLanes = 536870912, zr(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (Le(t, n.cachePool), Eo(t, n), la(), t.memoizedState = null) : (l !== null && Le(t, null), qf(), la());
    return Rl(l, t, e, a), t.child;
  }
  function zr(l, t, a, u) {
    var e = Mf();
    return e = e === null ? null : { parent: Al._currentValue, pool: e }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Le(t, null), qf(), rr(t), l !== null && ju(l, t, u, !0), null;
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
  function ti(l, t, a, u, e) {
    return Ma(t), a = Gf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = jf(), l !== null && !Ol ? (Xf(l, t, e), jt(l, t, e)) : (F && u && pf(t), t.flags |= 1, Rl(l, t, a, e), t.child);
  }
  function _r(l, t, a, u, e, n) {
    return Ma(t), t.updateQueue = null, a = zo(
      t,
      u,
      a,
      e
    ), Ao(l), u = jf(), l !== null && !Ol ? (Xf(l, t, n), jt(l, t, n)) : (F && u && pf(t), t.flags |= 1, Rl(l, t, a, n), t.child);
  }
  function Or(l, t, a, u, e) {
    if (Ma(t), t.stateNode === null) {
      var n = Fa, f = a.contextType;
      typeof f == "object" && f !== null && (n = Yl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Uf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Yl(f) : Fa, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (If(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Pf.enqueueReplaceState(n, n.state, null), Ku(t, u, n, e), Lu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = Ra(a, i);
      n.props = c;
      var h = n.context, g = a.contextType;
      f = Fa, typeof g == "object" && g !== null && (f = Yl(g));
      var S = a.getDerivedStateFromProps;
      g = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || h !== f) && dr(
        t,
        n,
        u,
        f
      ), Wt = !1;
      var v = t.memoizedState;
      n.state = v, Ku(t, u, n, e), Lu(), h = t.memoizedState, i || v !== h || Wt ? (typeof S == "function" && (If(
        t,
        a,
        S,
        u
      ), h = t.memoizedState), (c = Wt || sr(
        t,
        a,
        c,
        u,
        v,
        h,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = f, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Rf(l, t), f = t.memoizedProps, g = Ra(a, f), n.props = g, S = t.pendingProps, v = n.context, h = a.contextType, c = Fa, typeof h == "object" && h !== null && (c = Yl(h)), i = a.getDerivedStateFromProps, (h = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== S || v !== c) && dr(
        t,
        n,
        u,
        c
      ), Wt = !1, v = t.memoizedState, n.state = v, Ku(t, u, n, e), Lu();
      var y = t.memoizedState;
      f !== S || v !== y || Wt || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof i == "function" && (If(
        t,
        a,
        i,
        u
      ), y = t.memoizedState), (g = Wt || sr(
        t,
        a,
        g,
        u,
        v,
        y,
        c
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, y, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        y,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = y), n.props = u, n.state = y, n.context = c, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, cn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = iu(
      t,
      l.child,
      null,
      e
    ), t.child = iu(
      t,
      null,
      a,
      e
    )) : Rl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = jt(
      l,
      t,
      e
    ), l;
  }
  function Dr(l, t, a, u) {
    return Bu(), t.flags |= 256, Rl(l, t, a, u), t.child;
  }
  var ai = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ui(l) {
    return { baseLanes: l, cachePool: vo() };
  }
  function ei(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ht), l;
  }
  function Mr(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (e ? Pt(t) : la(), F) {
          var i = ml, c;
          if (c = i) {
            l: {
              for (c = i, i = Tt; c.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (c = bt(
                  c.nextSibling
                ), c === null) {
                  i = null;
                  break l;
                }
              }
              i = c;
            }
            i !== null ? (t.memoizedState = {
              dehydrated: i,
              treeContext: Aa !== null ? { id: Nt, overflow: Ht } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, c = $l(
              18,
              null,
              null,
              0
            ), c.stateNode = i, c.return = t, t.child = c, Ql = t, ml = null, c = !0) : c = !1;
          }
          c || Oa(t);
        }
        if (i = t.memoizedState, i !== null && (i = i.dehydrated, i !== null))
          return Ci(i) ? t.lanes = 32 : t.lanes = 536870912, null;
        Gt(t);
      }
      return i = u.children, u = u.fallback, e ? (la(), e = t.mode, i = on(
        { mode: "hidden", children: i },
        e
      ), u = Ea(
        u,
        e,
        a,
        null
      ), i.return = t, u.return = t, i.sibling = u, t.child = i, e = t.child, e.memoizedState = ui(a), e.childLanes = ei(
        l,
        f,
        a
      ), t.memoizedState = ai, u) : (Pt(t), ni(t, i));
    }
    if (c = l.memoizedState, c !== null && (i = c.dehydrated, i !== null)) {
      if (n)
        t.flags & 256 ? (Pt(t), t.flags &= -257, t = fi(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (la(), t.child = l.child, t.flags |= 128, t = null) : (la(), e = u.fallback, i = t.mode, u = on(
          { mode: "visible", children: u.children },
          i
        ), e = Ea(
          e,
          i,
          a,
          null
        ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, iu(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = ui(a), u.childLanes = ei(
          l,
          f,
          a
        ), t.memoizedState = ai, t = e);
      else if (Pt(t), Ci(i)) {
        if (f = i.nextSibling && i.nextSibling.dataset, f) var h = f.dgst;
        f = h, u = Error(m(419)), u.stack = "", u.digest = f, Gu({ value: u, source: null, stack: null }), t = fi(
          l,
          t,
          a
        );
      } else if (Ol || ju(l, t, a, !1), f = (a & l.childLanes) !== 0, Ol || f) {
        if (f = cl, f !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Cn(u), u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== c.retryLane))
          throw c.retryLane = u, $a(l, u), tt(f, l, u), Sr;
        i.data === "$?" || zi(), t = fi(
          l,
          t,
          a
        );
      } else
        i.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, ml = bt(
          i.nextSibling
        ), Ql = t, F = !0, _a = null, Tt = !1, l !== null && (rt[st++] = Nt, rt[st++] = Ht, rt[st++] = Aa, Nt = l.id, Ht = l.overflow, Aa = t), t = ni(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (la(), e = u.fallback, i = t.mode, c = l.child, h = c.sibling, u = Rt(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 65011712, h !== null ? e = Rt(h, e) : (e = Ea(
      e,
      i,
      a,
      null
    ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, i = l.child.memoizedState, i === null ? i = ui(a) : (c = i.cachePool, c !== null ? (h = Al._currentValue, c = c.parent !== h ? { parent: h, pool: h } : c) : c = vo(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: c
    }), e.memoizedState = i, e.childLanes = ei(
      l,
      f,
      a
    ), t.memoizedState = ai, u) : (Pt(t), a = l.child, l = a.sibling, a = Rt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function ni(l, t) {
    return t = on(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function on(l, t) {
    return l = $l(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, t, a) {
    return iu(t, l.child, null, a), l = ni(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function xr(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), zf(l.return, t, a);
  }
  function ii(l, t, a, u, e) {
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
    if (Rl(l, t, u.children, a), u = zl.current, (u & 2) !== 0)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && xr(l, a, t);
          else if (l.tag === 19)
            xr(l, a, t);
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
    switch (z(zl, u), e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && en(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), ii(
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
        ii(
          t,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), na |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (ju(
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
  function ci(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function N0(l, t, a) {
    switch (t.tag) {
      case 3:
        rl(t, t.stateNode.containerInfo), kt(t, Al, l.memoizedState.cache), Bu();
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        rl(t, t.stateNode.containerInfo);
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
        if (u = (a & t.childLanes) !== 0, u || (ju(
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
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), z(zl, zl.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ar(l, t, a);
      case 24:
        kt(t, Al, l.memoizedState.cache);
    }
    return jt(l, t, a);
  }
  function Rr(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ol = !0;
      else {
        if (!ci(l, a) && (t.flags & 128) === 0)
          return Ol = !1, N0(
            l,
            t,
            a
          );
        Ol = (l.flags & 131072) !== 0;
      }
    else
      Ol = !1, F && (t.flags & 1048576) !== 0 && fo(t, Ce, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType, e = u._init;
          if (u = e(u._payload), t.type = u, typeof u == "function")
            gf(u) ? (l = Ra(u, l), t.tag = 1, t = Or(
              null,
              t,
              u,
              l,
              a
            )) : (t.tag = 0, t = ti(
              null,
              t,
              u,
              l,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === ut) {
                t.tag = 11, t = pr(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              } else if (e === yl) {
                t.tag = 14, t = Tr(
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
        return ti(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Ra(
          u,
          t.pendingProps
        ), Or(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (rl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Rf(l, t), Ku(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, kt(t, Al, u), u !== n.cache && _f(
            t,
            [Al],
            a,
            !0
          ), Lu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Dr(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = ct(
                Error(m(424)),
                t
              ), Gu(e), t = Dr(
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
              for (ml = bt(l.firstChild), Ql = t, F = !0, _a = null, Tt = !0, a = or(
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
            Rl(
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
        return cn(l, t), l === null ? (a = Ys(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : F || (a = t.type, l = t.pendingProps, u = An(
          G.current
        ).createElement(a), u[ql] = t, u[Cl] = l, Hl(u, a, l), _l(u), t.stateNode = u) : t.memoizedState = Ys(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Bn(t), l === null && F && (u = t.stateNode = Ns(
          t.type,
          t.pendingProps,
          G.current
        ), Ql = t, Tt = !0, e = ml, oa(t.type) ? (Zi = e, ml = bt(
          u.firstChild
        )) : ml = e), Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), cn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((e = u = ml) && (u = f1(
          u,
          t.type,
          t.pendingProps,
          Tt
        ), u !== null ? (t.stateNode = u, Ql = t, ml = bt(
          u.firstChild
        ), Tt = !1, e = !0) : e = !1), e || Oa(t)), Bn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, ji(e, n) ? u = null : f !== null && ji(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Gf(
          l,
          t,
          z0,
          null,
          null,
          a
        ), he._currentValue = e), cn(l, t), Rl(l, t, u, a), t.child;
      case 6:
        return l === null && F && ((l = a = ml) && (a = i1(
          a,
          t.pendingProps,
          Tt
        ), a !== null ? (t.stateNode = a, Ql = t, ml = null, l = !0) : l = !1), l || Oa(t)), null;
      case 13:
        return Mr(l, t, a);
      case 4:
        return rl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = iu(
          t,
          null,
          u,
          a
        ) : Rl(
          l,
          t,
          u,
          a
        ), t.child;
      case 11:
        return pr(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Rl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, kt(t, t.type, u.value), Rl(
          l,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ma(t), e = Yl(e), u = u(e), t.flags |= 1, Rl(l, t, u, a), t.child;
      case 14:
        return Tr(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Er(
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
        }, l === null ? (a = on(
          u,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Rt(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Ar(l, t, a);
      case 24:
        return Ma(t), u = Yl(Al), l === null ? (e = Mf(), e === null && (e = cl, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, Uf(t), kt(t, Al, e)) : ((l.lanes & a) !== 0 && (Rf(l, t), Ku(t, null, null, a), Lu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), kt(t, Al, u)) : (u = n.cache, kt(t, Al, u), u !== e.cache && _f(
          t,
          [Al],
          a,
          !0
        ))), Rl(
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
  function Xt(l) {
    l.flags |= 4;
  }
  function Nr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Qs(t)) {
      if (t = dt.current, t !== null && ((w & 4194048) === w ? Et !== null : (w & 62914560) !== w && (w & 536870912) === 0 || t !== Et))
        throw Zu = xf, yo;
      l.flags |= 8192;
    }
  }
  function rn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? oc() : 536870912, l.lanes |= t, su |= t);
  }
  function Iu(l, t) {
    if (!F)
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
  function vl(l) {
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
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(Al), Lt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Yu(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, oo())), vl(t), null;
      case 26:
        return a = t.memoizedState, l === null ? (Xt(t), a !== null ? (vl(t), Nr(t, a)) : (vl(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Xt(t), vl(t), Nr(t, a)) : (vl(t), t.flags &= -16777217) : (l.memoizedProps !== u && Xt(t), vl(t), t.flags &= -16777217), null;
      case 27:
        pe(t), a = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== u && Xt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(m(166));
            return vl(t), null;
          }
          l = Y.current, Yu(t) ? io(t) : (l = Ns(e, u, a), t.stateNode = l, Xt(t));
        }
        return vl(t), null;
      case 5:
        if (pe(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Xt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(m(166));
            return vl(t), null;
          }
          if (l = Y.current, Yu(t))
            io(t);
          else {
            switch (e = An(
              G.current
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
            l[ql] = t, l[Cl] = u;
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
            l: switch (Hl(l, a, u), a) {
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
            l && Xt(t);
          }
        }
        return vl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Xt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = G.current, Yu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Ql, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[ql] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || _s(l.nodeValue, a)), l || Oa(t);
          } else
            l = An(l).createTextNode(
              u
            ), l[ql] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Yu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[ql] = t;
            } else
              Bu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), e = !1;
          } else
            e = oo(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        if (Gt(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
          u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== l && a && (t.child.flags |= 8192), rn(t, t.updateQueue), vl(t), null;
      case 4:
        return Lt(), l === null && Hi(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Yt(t.type), vl(t), null;
      case 19:
        if (O(zl), e = t.memoizedState, e === null) return vl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) Iu(e, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = en(l), n !== null) {
                  for (t.flags |= 128, Iu(e, !1), l = n.updateQueue, t.updateQueue = l, rn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    no(a, l), a = a.sibling;
                  return z(
                    zl,
                    zl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && pt() > hn && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = en(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, rn(t, l), Iu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !F)
                return vl(t), null;
            } else
              2 * pt() - e.renderingStartTime > hn && a !== 536870912 && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = pt(), t.sibling = null, l = zl.current, z(zl, u ? l & 1 | 2 : l & 1), t) : (vl(t), null);
      case 22:
      case 23:
        return Gt(t), Yf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), a = t.updateQueue, a !== null && rn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && O(xa), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(Al), vl(t), null;
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
        return Yt(Al), Lt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pe(t), null;
      case 13:
        if (Gt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Bu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return O(zl), null;
      case 4:
        return Lt(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return Gt(t), Yf(), l !== null && O(xa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hr(l, t) {
    switch (Tf(t), t.tag) {
      case 3:
        Yt(Al), Lt();
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
        Gt(t);
        break;
      case 19:
        O(zl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        Gt(t), Yf(), l !== null && O(xa);
        break;
      case 24:
        Yt(Al);
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
    } catch (i) {
      fl(t, t.return, i);
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
            var f = u.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = a, h = i;
              try {
                h();
              } catch (g) {
                fl(
                  e,
                  c,
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
  function qr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        To(t, a);
      } catch (u) {
        fl(l, l.return, u);
      }
    }
  }
  function Yr(l, t, a) {
    a.props = Ra(
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
  function At(l, t) {
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
  function Br(l) {
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
  function oi(l, t, a) {
    try {
      var u = l.stateNode;
      t1(u, l.type, a, t), u[Cl] = t;
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function Gr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oa(l.type) || l.tag === 4;
  }
  function ri(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && oa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function si(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = En));
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (si(l, t, a), l = l.sibling; l !== null; )
        si(l, t, a), l = l.sibling;
  }
  function sn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, a), l = l.sibling; l !== null; )
        sn(l, t, a), l = l.sibling;
  }
  function jr(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, u, a), t[ql] = l, t[Cl] = a;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var Qt = !1, Sl = !1, di = !1, Xr = typeof WeakSet == "function" ? WeakSet : Set, Dl = null;
  function Y0(l, t) {
    if (l = l.containerInfo, Bi = xn, l = Wc(l), rf(l)) {
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
            var f = 0, i = -1, c = -1, h = 0, g = 0, S = l, v = null;
            t: for (; ; ) {
              for (var y; S !== a || e !== 0 && S.nodeType !== 3 || (i = f + e), S !== n || u !== 0 && S.nodeType !== 3 || (c = f + u), S.nodeType === 3 && (f += S.nodeValue.length), (y = S.firstChild) !== null; )
                v = S, S = y;
              for (; ; ) {
                if (S === l) break t;
                if (v === a && ++h === e && (i = f), v === n && ++g === u && (c = f), (y = S.nextSibling) !== null) break;
                S = v, v = S.parentNode;
              }
              S = y;
            }
            a = i === -1 || c === -1 ? null : { start: i, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Gi = { focusedElem: l, selectionRange: a }, xn = !1, Dl = t; Dl !== null; )
      if (t = Dl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Dl = l;
      else
        for (; Dl !== null; ) {
          switch (t = Dl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var B = Ra(
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
                  Qi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qi(l);
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
            l.return = t.return, Dl = l;
            break;
          }
          Dl = t.return;
        }
  }
  function Qr(l, t, a) {
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
            var e = Ra(
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
        u & 64 && qr(a), u & 512 && le(a, a.return);
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
            To(l, t);
          } catch (f) {
            fl(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && jr(a);
      case 26:
      case 5:
        aa(l, a), t === null && u & 4 && Br(a), u & 512 && le(a, a.return);
        break;
      case 12:
        aa(l, a);
        break;
      case 13:
        aa(l, a), u & 4 && Vr(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = L0.bind(
          null,
          a
        ), c1(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Qt, !u) {
          t = t !== null && t.memoizedState !== null || Sl, e = Qt;
          var n = Sl;
          Qt = u, (Sl = t) && !n ? ua(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : aa(l, a), Qt = e, Sl = n;
        }
        break;
      case 30:
        break;
      default:
        aa(l, a);
    }
  }
  function Cr(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Cr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Ln(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var sl = null, Ll = !1;
  function Ct(l, t, a) {
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
        Sl || At(a, t), Ct(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Sl || At(a, t);
        var u = sl, e = Ll;
        oa(a.type) && (sl = a.stateNode, Ll = !1), Ct(
          l,
          t,
          a
        ), oe(a.stateNode), sl = u, Ll = e;
        break;
      case 5:
        Sl || At(a, t);
      case 6:
        if (u = sl, e = Ll, sl = null, Ct(
          l,
          t,
          a
        ), sl = u, Ll = e, sl !== null)
          if (Ll)
            try {
              (sl.nodeType === 9 ? sl.body : sl.nodeName === "HTML" ? sl.ownerDocument.body : sl).removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
          else
            try {
              sl.removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        sl !== null && (Ll ? (l = sl, Us(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), ge(l)) : Us(sl, a.stateNode));
        break;
      case 4:
        u = sl, e = Ll, sl = a.stateNode.containerInfo, Ll = !0, Ct(
          l,
          t,
          a
        ), sl = u, Ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sl || ta(2, a, t), Sl || ta(4, a, t), Ct(
          l,
          t,
          a
        );
        break;
      case 1:
        Sl || (At(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Yr(
          a,
          t,
          u
        )), Ct(
          l,
          t,
          a
        );
        break;
      case 21:
        Ct(
          l,
          t,
          a
        );
        break;
      case 22:
        Sl = (u = Sl) || a.memoizedState !== null, Ct(
          l,
          t,
          a
        ), Sl = u;
        break;
      default:
        Ct(
          l,
          t,
          a
        );
    }
  }
  function Vr(l, t) {
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
        return t === null && (t = l.stateNode = new Xr()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Xr()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function hi(l, t) {
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
        var e = a[u], n = l, f = t, i = f;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (oa(i.type)) {
                sl = i.stateNode, Ll = !1;
                break l;
              }
              break;
            case 5:
              sl = i.stateNode, Ll = !1;
              break l;
            case 3:
            case 4:
              sl = i.stateNode.containerInfo, Ll = !0;
              break l;
          }
          i = i.return;
        }
        if (sl === null) throw Error(m(160));
        Zr(n, f, e), sl = null, Ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Lr(t, l), t = t.sibling;
  }
  var gt = null;
  function Lr(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l), Il(l), u & 4 && (ta(3, l, l.return), Pu(3, l), ta(5, l, l.return));
        break;
      case 1:
        Fl(t, l), Il(l), u & 512 && (Sl || a === null || At(a, a.return)), u & 64 && Qt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = gt;
        if (Fl(t, l), Il(l), u & 512 && (Sl || a === null || At(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[zu] || n[ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, u, a), n[ql] = l, _l(n), u = n;
                      break l;
                    case "link":
                      var f = js(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Hl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = js(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Hl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, u));
                  }
                  n[ql] = l, _l(n), u = n;
                }
                l.stateNode = u;
              } else
                Xs(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Gs(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Xs(
              e,
              l.type,
              l.stateNode
            ) : Gs(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && oi(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Fl(t, l), Il(l), u & 512 && (Sl || a === null || At(a, a.return)), a !== null && u & 4 && oi(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Fl(t, l), Il(l), u & 512 && (Sl || a === null || At(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Va(e, "");
          } catch (y) {
            fl(l, l.return, y);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, oi(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (di = !0);
        break;
      case 6:
        if (Fl(t, l), Il(l), u & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (y) {
            fl(l, l.return, y);
          }
        }
        break;
      case 3:
        if (On = null, e = gt, gt = zn(t.containerInfo), Fl(t, l), gt = e, Il(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ge(t.containerInfo);
          } catch (y) {
            fl(l, l.return, y);
          }
        di && (di = !1, Kr(l));
        break;
      case 4:
        u = gt, gt = zn(
          l.stateNode.containerInfo
        ), Fl(t, l), Il(l), gt = u;
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 13:
        Fl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Si = pt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hi(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null, h = Qt, g = Sl;
        if (Qt = h || e, Sl = g || c, Fl(t, l), Sl = g, Qt = h, Il(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || c || Qt || Sl || Na(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (n = c.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    i = c.stateNode;
                    var S = c.memoizedProps.style, v = S != null && S.hasOwnProperty("display") ? S.display : null;
                    i.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (y) {
                  fl(c, c.return, y);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (y) {
                  fl(c, c.return, y);
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
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, hi(l, a))));
        break;
      case 19:
        Fl(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hi(l, u)));
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
          if (Gr(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = ri(l);
            sn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Va(f, ""), a.flags &= -33);
            var i = ri(l);
            sn(l, i, f);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo, h = ri(l);
            si(
              l,
              h,
              c
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
  function Kr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Kr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function aa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qr(l, t.alternate, t), t = t.sibling;
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
          At(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Yr(
            t,
            t.return,
            a
          ), Na(t);
          break;
        case 27:
          oe(t.stateNode);
        case 26:
        case 5:
          At(t, t.return), Na(t);
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
            } catch (h) {
              fl(u, u.return, h);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var i = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  po(c[e], i);
            } catch (h) {
              fl(u, u.return, h);
            }
          }
          a && f & 64 && qr(n), le(n, n.return);
          break;
        case 27:
          jr(n);
        case 26:
        case 5:
          ua(
            e,
            n,
            a
          ), a && u === null && f & 4 && Br(n), le(n, n.return);
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
          ), a && f & 4 && Vr(e, n);
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
  function vi(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Xu(a));
  }
  function yi(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Jr(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Jr(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && Pu(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (c) {
            fl(t, t.return, c);
          }
        } else
          zt(
            l,
            t,
            a,
            u
          );
        break;
      case 13:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : te(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, cu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && vi(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && yi(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          a,
          u
        );
    }
  }
  function cu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, i = a, c = u, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          cu(
            n,
            f,
            i,
            c,
            e
          ), Pu(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? cu(
            n,
            f,
            i,
            c,
            e
          ) : te(
            n,
            f
          ) : (g._visibility |= 2, cu(
            n,
            f,
            i,
            c,
            e
          )), e && h & 2048 && vi(
            f.alternate,
            f
          );
          break;
        case 24:
          cu(
            n,
            f,
            i,
            c,
            e
          ), e && h & 2048 && yi(f.alternate, f);
          break;
        default:
          cu(
            n,
            f,
            i,
            c,
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
            te(a, u), e & 2048 && vi(
              u.alternate,
              u
            );
            break;
          case 24:
            te(a, u), e & 2048 && yi(u.alternate, u);
            break;
          default:
            te(a, u);
        }
        t = t.sibling;
      }
  }
  var ae = 8192;
  function ou(l) {
    if (l.subtreeFlags & ae)
      for (l = l.child; l !== null; )
        wr(l), l = l.sibling;
  }
  function wr(l) {
    switch (l.tag) {
      case 26:
        ou(l), l.flags & ae && l.memoizedState !== null && T1(
          gt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ou(l);
        break;
      case 3:
      case 4:
        var t = gt;
        gt = zn(l.stateNode.containerInfo), ou(l), gt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = ae, ae = 16777216, ou(l), ae = t) : ou(l));
        break;
      default:
        ou(l);
    }
  }
  function kr(l) {
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
          Dl = u, $r(
            u,
            l
          );
        }
      kr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Wr(l), l = l.sibling;
  }
  function Wr(l) {
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
          Dl = u, $r(
            u,
            l
          );
        }
      kr(l);
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
  function $r(l, t) {
    for (; Dl !== null; ) {
      var a = Dl;
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
      if (u = a.child, u !== null) u.return = a, Dl = u;
      else
        l: for (a = l; Dl !== null; ) {
          u = Dl;
          var e = u.sibling, n = u.return;
          if (Cr(u), u === a) {
            Dl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Dl = e;
            break l;
          }
          Dl = n;
        }
    }
  }
  var G0 = {
    getCacheForType: function(l) {
      var t = Yl(Al), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    }
  }, j0 = typeof WeakMap == "function" ? WeakMap : Map, P = 0, cl = null, L = null, w = 0, ll = 0, Pl = null, ea = !1, ru = !1, mi = !1, Zt = 0, gl = 0, na = 0, Ha = 0, gi = 0, ht = 0, su = 0, ee = null, Kl = null, bi = !1, Si = 0, hn = 1 / 0, vn = null, fa = null, Nl = 0, ia = null, du = null, hu = 0, pi = 0, Ti = null, Fr = null, ne = 0, Ei = null;
  function lt() {
    if ((P & 2) !== 0 && w !== 0)
      return w & -w;
    if (E.T !== null) {
      var l = lu;
      return l !== 0 ? l : xi();
    }
    return dc();
  }
  function Ir() {
    ht === 0 && (ht = (w & 536870912) === 0 || F ? cc() : 536870912);
    var l = dt.current;
    return l !== null && (l.flags |= 32), ht;
  }
  function tt(l, t, a) {
    (l === cl && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), ca(
      l,
      w,
      ht,
      !1
    )), Au(l, a), ((P & 2) === 0 || l !== cl) && (l === cl && ((P & 2) === 0 && (Ha |= a), gl === 4 && ca(
      l,
      w,
      ht,
      !1
    )), _t(l));
  }
  function Pr(l, t, a) {
    if ((P & 6) !== 0) throw Error(m(327));
    var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Eu(l, t), e = u ? C0(l, t) : _i(l, t, !0), n = u;
    do {
      if (e === 0) {
        ru && !u && ca(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !X0(a)) {
          e = _i(l, t, !1), n = !1;
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
              var i = l;
              e = ee;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (vu(i, f).flags |= 256), f = _i(
                i,
                f,
                !1
              ), f !== 2) {
                if (mi && !c) {
                  i.errorRecoveryDisabledLanes |= n, Ha |= n, e = 4;
                  break l;
                }
                n = Kl, Kl = e, n !== null && (Kl === null ? Kl = n : Kl.push.apply(
                  Kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          vu(l, 0), ca(l, t, 0, !0);
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
              ca(
                u,
                t,
                ht,
                !ea
              );
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = Si + 300 - pt(), 10 < e)) {
            if (ca(
              u,
              t,
              ht,
              !ea
            ), ze(u, 0, !0) !== 0) break l;
            u.timeoutHandle = Ms(
              ls.bind(
                null,
                u,
                a,
                Kl,
                vn,
                bi,
                t,
                ht,
                Ha,
                su,
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
          ls(
            u,
            a,
            Kl,
            vn,
            bi,
            t,
            ht,
            Ha,
            su,
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
  function ls(l, t, a, u, e, n, f, i, c, h, g, S, v, y) {
    if (l.timeoutHandle = -1, S = t.subtreeFlags, (S & 8192 || (S & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: p1 }, wr(t), S = E1(), S !== null)) {
      l.cancelPendingCommit = S(
        is.bind(
          null,
          l,
          t,
          n,
          a,
          u,
          e,
          f,
          i,
          c,
          g,
          1,
          v,
          y
        )
      ), ca(l, n, f, !h);
      return;
    }
    is(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      i,
      c
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
  function ca(l, t, a, u) {
    t &= ~gi, t &= ~Ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - kl(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && rc(l, a, t);
  }
  function yn() {
    return (P & 6) === 0 ? (fe(0), !1) : !0;
  }
  function Ai() {
    if (L !== null) {
      if (ll === 0)
        var l = L.return;
      else
        l = L, qt = Da = null, Qf(l), fu = null, $u = 0, l = L;
      for (; l !== null; )
        Hr(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function vu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, u1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Ai(), cl = l, L = a = Rt(l.current, null), w = t, ll = 0, Pl = null, ea = !1, ru = Eu(l, t), mi = !1, su = ht = gi = Ha = na = gl = 0, Kl = ee = null, bi = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - kl(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Zt = t, Be(), a;
  }
  function ts(l, t) {
    X = null, E.H = tn, t === Cu || t === Ke ? (t = bo(), ll = 3) : t === yo ? (t = bo(), ll = 4) : ll = t === Sr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pl = t, L === null && (gl = 1, fn(
      l,
      ct(t, l.current)
    ));
  }
  function as() {
    var l = E.H;
    return E.H = tn, l === null ? tn : l;
  }
  function us() {
    var l = E.A;
    return E.A = G0, l;
  }
  function zi() {
    gl = 4, ea || (w & 4194048) !== w && dt.current !== null || (ru = !0), (na & 134217727) === 0 && (Ha & 134217727) === 0 || cl === null || ca(
      cl,
      w,
      ht,
      !1
    );
  }
  function _i(l, t, a) {
    var u = P;
    P |= 2;
    var e = as(), n = us();
    (cl !== l || w !== t) && (vn = null, vu(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (ll !== 0 && L !== null) {
          var i = L, c = Pl;
          switch (ll) {
            case 8:
              Ai(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var h = ll;
              if (ll = 0, Pl = null, yu(l, i, c, h), a && ru) {
                f = 0;
                break l;
              }
              break;
            default:
              h = ll, ll = 0, Pl = null, yu(l, i, c, h);
          }
        }
        Q0(), f = gl;
        break;
      } catch (g) {
        ts(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, qt = Da = null, P = u, E.H = e, E.A = n, L === null && (cl = null, w = 0, Be()), f;
  }
  function Q0() {
    for (; L !== null; ) es(L);
  }
  function C0(l, t) {
    var a = P;
    P |= 2;
    var u = as(), e = us();
    cl !== l || w !== t ? (vn = null, hn = pt() + 500, vu(l, t)) : ru = Eu(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && L !== null) {
          t = L;
          var n = Pl;
          t: switch (ll) {
            case 1:
              ll = 0, Pl = null, yu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (mo(n)) {
                ll = 0, Pl = null, ns(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || cl !== l || (ll = 7), _t(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              mo(n) ? (ll = 0, Pl = null, ns(t)) : (ll = 0, Pl = null, yu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var i = L;
                  if (!f || Qs(f)) {
                    ll = 0, Pl = null;
                    var c = i.sibling;
                    if (c !== null) L = c;
                    else {
                      var h = i.return;
                      h !== null ? (L = h, mn(h)) : L = null;
                    }
                    break t;
                  }
              }
              ll = 0, Pl = null, yu(l, t, n, 5);
              break;
            case 6:
              ll = 0, Pl = null, yu(l, t, n, 6);
              break;
            case 8:
              Ai(), gl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Z0();
        break;
      } catch (g) {
        ts(l, g);
      }
    while (!0);
    return qt = Da = null, E.H = u, E.A = e, P = a, L !== null ? 0 : (cl = null, w = 0, Be(), gl);
  }
  function Z0() {
    for (; L !== null && !rd(); )
      es(L);
  }
  function es(l) {
    var t = Rr(l.alternate, l, Zt);
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : L = t;
  }
  function ns(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _r(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          w
        );
        break;
      case 11:
        t = _r(
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
        Hr(a, t), t = L = no(t, Zt), t = Rr(a, t, Zt);
    }
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : L = t;
  }
  function yu(l, t, a, u) {
    qt = Da = null, Qf(t), fu = null, $u = 0;
    var e = t.return;
    try {
      if (R0(
        l,
        e,
        t,
        a,
        w
      )) {
        gl = 1, fn(
          l,
          ct(a, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      gl = 1, fn(
        l,
        ct(a, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (F || u === 1 ? l = !0 : ru || (w & 536870912) !== 0 ? l = !1 : (ea = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = dt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), fs(t, l)) : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        fs(
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
    gl === 0 && (gl = 5);
  }
  function fs(l, t) {
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
    gl = 6, L = null;
  }
  function is(l, t, a, u, e, n, f, i, c) {
    l.cancelPendingCommit = null;
    do
      gn();
    while (Nl !== 0);
    if ((P & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= yf, pd(
        l,
        a,
        n,
        f,
        i,
        c
      ), l === cl && (L = cl = null, w = 0), du = t, ia = l, hu = a, pi = n, Ti = e, Fr = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, J0(Te, function() {
        return ds(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = E.T, E.T = null, e = _.p, _.p = 2, f = P, P |= 4;
        try {
          Y0(l, t, a);
        } finally {
          P = f, _.p = e, E.T = u;
        }
      }
      Nl = 1, cs(), os(), rs();
    }
  }
  function cs() {
    if (Nl === 1) {
      Nl = 0;
      var l = ia, t = du, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var u = _.p;
        _.p = 2;
        var e = P;
        P |= 4;
        try {
          Lr(t, l);
          var n = Gi, f = Wc(l.containerInfo), i = n.focusedElem, c = n.selectionRange;
          if (f !== i && i && i.ownerDocument && kc(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && rf(i)) {
              var h = c.start, g = c.end;
              if (g === void 0 && (g = h), "selectionStart" in i)
                i.selectionStart = h, i.selectionEnd = Math.min(
                  g,
                  i.value.length
                );
              else {
                var S = i.ownerDocument || document, v = S && S.defaultView || window;
                if (v.getSelection) {
                  var y = v.getSelection(), B = i.textContent.length, N = Math.min(c.start, B), ul = c.end === void 0 ? N : Math.min(c.end, B);
                  !y.extend && N > ul && (f = ul, ul = N, N = f);
                  var s = wc(
                    i,
                    N
                  ), o = wc(
                    i,
                    ul
                  );
                  if (s && o && (y.rangeCount !== 1 || y.anchorNode !== s.node || y.anchorOffset !== s.offset || y.focusNode !== o.node || y.focusOffset !== o.offset)) {
                    var d = S.createRange();
                    d.setStart(s.node, s.offset), y.removeAllRanges(), N > ul ? (y.addRange(d), y.extend(o.node, o.offset)) : (d.setEnd(o.node, o.offset), y.addRange(d));
                  }
                }
              }
            }
            for (S = [], y = i; y = y.parentNode; )
              y.nodeType === 1 && S.push({
                element: y,
                left: y.scrollLeft,
                top: y.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < S.length; i++) {
              var b = S[i];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          xn = !!Bi, Gi = Bi = null;
        } finally {
          P = e, _.p = u, E.T = a;
        }
      }
      l.current = t, Nl = 2;
    }
  }
  function os() {
    if (Nl === 2) {
      Nl = 0;
      var l = ia, t = du, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var u = _.p;
        _.p = 2;
        var e = P;
        P |= 4;
        try {
          Qr(l, t.alternate, t);
        } finally {
          P = e, _.p = u, E.T = a;
        }
      }
      Nl = 3;
    }
  }
  function rs() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, sd();
      var l = ia, t = du, a = hu, u = Fr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, du = ia = null, ss(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (fa = null), Zn(a), t = t.stateNode, wl && typeof wl.onCommitFiberRoot == "function")
        try {
          wl.onCommitFiberRoot(
            Tu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch (c) {
        }
      if (u !== null) {
        t = E.T, e = _.p, _.p = 2, E.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var i = u[f];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          E.T = t, _.p = e;
        }
      }
      (hu & 3) !== 0 && gn(), _t(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Ei ? ne++ : (ne = 0, Ei = l) : ne = 0, fe(0);
    }
  }
  function ss(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xu(t)));
  }
  function gn(l) {
    return cs(), os(), rs(), ds();
  }
  function ds() {
    if (Nl !== 5) return !1;
    var l = ia, t = pi;
    pi = 0;
    var a = Zn(hu), u = E.T, e = _.p;
    try {
      _.p = 32 > a ? 32 : a, E.T = null, a = Ti, Ti = null;
      var n = ia, f = hu;
      if (Nl = 0, du = ia = null, hu = 0, (P & 6) !== 0) throw Error(m(331));
      var i = P;
      if (P |= 4, Wr(n.current), Jr(
        n,
        n.current,
        f,
        a
      ), P = i, fe(0, !1), wl && typeof wl.onPostCommitFiberRoot == "function")
        try {
          wl.onPostCommitFiberRoot(Tu, n);
        } catch (c) {
        }
      return !0;
    } finally {
      _.p = e, E.T = u, ss(l, t);
    }
  }
  function hs(l, t, a) {
    t = ct(a, t), t = li(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (Au(l, 2), _t(l));
  }
  function fl(l, t, a) {
    if (l.tag === 3)
      hs(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          hs(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
            l = ct(a, l), a = gr(2), u = Ft(t, a, 2), u !== null && (br(
              a,
              u,
              t,
              l
            ), Au(u, 2), _t(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oi(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new j0();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (mi = !0, e.add(a), l = V0.bind(null, l, t, a), t.then(l, l));
  }
  function V0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, cl === l && (w & a) === a && (gl === 4 || gl === 3 && (w & 62914560) === w && 300 > pt() - Si ? (P & 2) === 0 && vu(l, 0) : gi |= a, su === w && (su = 0)), _t(l);
  }
  function vs(l, t) {
    t === 0 && (t = oc()), l = $a(l, t), l !== null && (Au(l, t), _t(l));
  }
  function L0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), vs(l, a);
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
    u !== null && u.delete(t), vs(l, a);
  }
  function J0(l, t) {
    return jn(l, t);
  }
  var bn = null, mu = null, Di = !1, Sn = !1, Mi = !1, qa = 0;
  function _t(l) {
    l !== mu && l.next === null && (mu === null ? bn = mu = l : mu = mu.next = l), Sn = !0, Di || (Di = !0, k0());
  }
  function fe(l, t) {
    if (!Mi && Sn) {
      Mi = !0;
      do
        for (var a = !1, u = bn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, i = u.pingedLanes;
              n = (1 << 31 - kl(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, bs(u, n));
          } else
            n = w, n = ze(
              u,
              u === cl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Eu(u, n) || (a = !0, bs(u, n));
          u = u.next;
        }
      while (a);
      Mi = !1;
    }
  }
  function w0() {
    ys();
  }
  function ys() {
    Sn = Di = !1;
    var l = 0;
    qa !== 0 && (a1() && (l = qa), qa = 0);
    for (var t = pt(), a = null, u = bn; u !== null; ) {
      var e = u.next, n = ms(u, t);
      n === 0 ? (u.next = null, a === null ? bn = e : a.next = e, e === null && (mu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), u = e;
    }
    fe(l);
  }
  function ms(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - kl(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & a) === 0 || (i & u) !== 0) && (e[f] = Sd(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = cl, a = w, a = ze(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Xn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Eu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Xn(u), Zn(a)) {
        case 2:
        case 8:
          a = fc;
          break;
        case 32:
          a = Te;
          break;
        case 268435456:
          a = ic;
          break;
        default:
          a = Te;
      }
      return u = gs.bind(null, l), a = jn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Xn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function gs(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (gn() && l.callbackNode !== a)
      return null;
    var u = w;
    return u = ze(
      l,
      l === cl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (Pr(l, u, t), ms(l, pt()), l.callbackNode != null && l.callbackNode === a ? gs.bind(null, l) : null);
  }
  function bs(l, t) {
    if (gn()) return null;
    Pr(l, t, !0);
  }
  function k0() {
    e1(function() {
      (P & 6) !== 0 ? jn(
        nc,
        w0
      ) : ys();
    });
  }
  function xi() {
    return qa === 0 && (qa = cc()), qa;
  }
  function Ss(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : xe("" + l);
  }
  function ps(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function W0(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Ss(
        (e[Cl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Cl] || null) ? Ss(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new He(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var c = f ? ps(e, f) : new FormData(e);
                  Wf(
                    a,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = f ? ps(e, f) : new FormData(e), Wf(
                  a,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Ui = 0; Ui < vf.length; Ui++) {
    var Ri = vf[Ui], $0 = Ri.toLowerCase(), F0 = Ri[0].toUpperCase() + Ri.slice(1);
    mt(
      $0,
      "on" + F0
    );
  }
  mt(Ic, "onAnimationEnd"), mt(Pc, "onAnimationIteration"), mt(lo, "onAnimationStart"), mt("dblclick", "onDoubleClick"), mt("focusin", "onFocus"), mt("focusout", "onBlur"), mt(v0, "onTransitionRun"), mt(y0, "onTransitionStart"), mt(m0, "onTransitionCancel"), mt(to, "onTransitionEnd"), Qa("onMouseEnter", ["mouseout", "mouseover"]), Qa("onMouseLeave", ["mouseout", "mouseover"]), Qa("onPointerEnter", ["pointerout", "pointerover"]), Qa("onPointerLeave", ["pointerout", "pointerover"]), ba(
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
  var ie = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), I0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ie)
  );
  function Ts(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var i = u[f], c = i.instance, h = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (i = u[f], c = i.instance, h = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function K(l, t) {
    var a = t[Vn];
    a === void 0 && (a = t[Vn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Es(t, l, 2, !1), a.add(u));
  }
  function Ni(l, t, a) {
    var u = 0;
    t && (u |= 4), Es(
      a,
      l,
      u,
      t
    );
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hi(l) {
    if (!l[pn]) {
      l[pn] = !0, vc.forEach(function(a) {
        a !== "selectionchange" && (I0.has(a) || Ni(a, !1, l), Ni(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || (t[pn] = !0, Ni("selectionchange", !1, t));
    }
  }
  function Es(l, t, a, u) {
    switch (Js(t)) {
      case 2:
        var e = _1;
        break;
      case 8:
        e = O1;
        break;
      default:
        e = wi;
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
  function qi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Ga(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              u = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Mc(function() {
      var h = n, g = In(a), S = [];
      l: {
        var v = ao.get(l);
        if (v !== void 0) {
          var y = He, B = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              y = Jd;
              break;
            case "focusin":
              B = "focus", y = ef;
              break;
            case "focusout":
              B = "blur", y = ef;
              break;
            case "beforeblur":
            case "afterblur":
              y = ef;
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
              y = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = qd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Wd;
              break;
            case Ic:
            case Pc:
            case lo:
              y = Gd;
              break;
            case to:
              y = Fd;
              break;
            case "scroll":
            case "scrollend":
              y = Nd;
              break;
            case "wheel":
              y = Pd;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Xd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Hc;
              break;
            case "toggle":
            case "beforetoggle":
              y = t0;
          }
          var N = (t & 4) !== 0, ul = !N && (l === "scroll" || l === "scrollend"), s = N ? v !== null ? v + "Capture" : null : v;
          N = [];
          for (var o = h, d; o !== null; ) {
            var b = o;
            if (d = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || d === null || s === null || (b = Ou(o, s), b != null && N.push(
              ce(o, b, d)
            )), ul) break;
            o = o.return;
          }
          0 < N.length && (v = new y(
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
          if (v = l === "mouseover" || l === "pointerover", y = l === "mouseout" || l === "pointerout", v && a !== Fn && (B = a.relatedTarget || a.fromElement) && (Ga(B) || B[Ba]))
            break l;
          if ((y || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (B = a.relatedTarget || a.toElement, y = h, B = B ? Ga(B) : null, B !== null && (ul = hl(B), N = B.tag, B !== ul || N !== 5 && N !== 27 && N !== 6) && (B = null)) : (y = null, B = h), y !== B)) {
            if (N = Rc, b = "onMouseLeave", s = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (N = Hc, b = "onPointerLeave", s = "onPointerEnter", o = "pointer"), ul = y == null ? v : _u(y), d = B == null ? v : _u(B), v = new N(
              b,
              o + "leave",
              y,
              a,
              g
            ), v.target = ul, v.relatedTarget = d, b = null, Ga(g) === h && (N = new N(
              s,
              o + "enter",
              B,
              a,
              g
            ), N.target = d, N.relatedTarget = ul, b = N), ul = b, y && B)
              t: {
                for (N = y, s = B, o = 0, d = N; d; d = gu(d))
                  o++;
                for (d = 0, b = s; b; b = gu(b))
                  d++;
                for (; 0 < o - d; )
                  N = gu(N), o--;
                for (; 0 < d - o; )
                  s = gu(s), d--;
                for (; o--; ) {
                  if (N === s || s !== null && N === s.alternate)
                    break t;
                  N = gu(N), s = gu(s);
                }
                N = null;
              }
            else N = null;
            y !== null && As(
              S,
              v,
              y,
              N,
              !1
            ), B !== null && ul !== null && As(
              S,
              ul,
              B,
              N,
              !0
            );
          }
        }
        l: {
          if (v = h ? _u(h) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file")
            var D = Cc;
          else if (Xc(v))
            if (Zc)
              D = s0;
            else {
              D = o0;
              var Z = c0;
            }
          else
            y = v.nodeName, !y || y.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? h && $n(h.elementType) && (D = Cc) : D = r0;
          if (D && (D = D(l, h))) {
            Qc(
              S,
              D,
              a,
              g
            );
            break l;
          }
          Z && Z(l, v, h), l === "focusout" && h && v.type === "number" && h.memoizedProps.value != null && Wn(v, "number", v.value);
        }
        switch (Z = h ? _u(h) : window, l) {
          case "focusin":
            (Xc(Z) || Z.contentEditable === "true") && (wa = Z, sf = h, qu = null);
            break;
          case "focusout":
            qu = sf = wa = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, $c(S, a, g);
            break;
          case "selectionchange":
            if (h0) break;
          case "keydown":
          case "keyup":
            $c(S, a, g);
        }
        var x;
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
          Ja ? Gc(l, a) && (H = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (H = "onCompositionStart");
        H && (qc && a.locale !== "ko" && (Ja || H !== "onCompositionStart" ? H === "onCompositionEnd" && Ja && (x = xc()) : (wt = g, tf = "value" in wt ? wt.value : wt.textContent, Ja = !0)), Z = Tn(h, H), 0 < Z.length && (H = new Nc(
          H,
          l,
          null,
          a,
          g
        ), S.push({ event: H, listeners: Z }), x ? H.data = x : (x = jc(a), x !== null && (H.data = x)))), (x = u0 ? e0(l, a) : n0(l, a)) && (H = Tn(h, "onBeforeInput"), 0 < H.length && (Z = new Nc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), S.push({
          event: Z,
          listeners: H
        }), Z.data = x)), W0(
          S,
          l,
          h,
          a,
          g
        );
      }
      Ts(S, t);
    });
  }
  function ce(l, t, a) {
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
        ce(l, e, n)
      ), e = Ou(l, t), e != null && u.push(
        ce(l, e, n)
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
  function As(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var i = a, c = i.alternate, h = i.stateNode;
      if (i = i.tag, c !== null && c === u) break;
      i !== 5 && i !== 26 && i !== 27 || h === null || (c = h, e ? (h = Ou(a, n), h != null && f.unshift(
        ce(a, h, c)
      )) : e || (h = Ou(a, n), h != null && f.push(
        ce(a, h, c)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var P0 = /\r\n?/g, l1 = /\u0000|\uFFFD/g;
  function zs(l) {
    return (typeof l == "string" ? l : "" + l).replace(P0, `
`).replace(l1, "");
  }
  function _s(l, t) {
    return t = zs(t), zs(l) === t;
  }
  function En() {
  }
  function al(l, t, a, u, e, n) {
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
        Oc(l, u, n);
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
        u = xe("" + u), l.setAttribute(a, u);
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
          typeof n == "function" && (a === "formAction" ? (t !== "input" && al(l, t, "name", e.name, e, null), al(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), al(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), al(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (al(l, t, "encType", e.encType, e, null), al(l, t, "method", e.method, e, null), al(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = xe("" + u), l.setAttribute(a, u);
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
        a = xe("" + u), l.setAttributeNS(
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
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        xt(
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ud.get(a) || a, _e(l, a, u));
    }
  }
  function Yi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Oc(l, u, n);
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
        if (!yc.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Cl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : _e(l, a, u);
          }
    }
  }
  function Hl(l, t, a) {
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
                  al(l, t, n, f, a, null);
              }
          }
        e && al(l, t, "srcSet", a.srcSet, a, null), u && al(l, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", l);
        var i = n = f = e = null, c = null, h = null;
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
                  c = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(m(137, t));
                  break;
                default:
                  al(l, t, u, g, a, null);
              }
          }
        Ec(
          l,
          n,
          i,
          c,
          h,
          f,
          e,
          !1
        ), De(l);
        return;
      case "select":
        K("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (i = a[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                u = i;
              default:
                al(l, t, e, i, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Za(l, !!u, t, !1) : a != null && Za(l, !!u, a, !0);
        return;
      case "textarea":
        K("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (i = a[f], i != null))
            switch (f) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                al(l, t, f, i, a, null);
            }
        zc(l, u, e, n), De(l);
        return;
      case "option":
        for (c in a)
          if (a.hasOwnProperty(c) && (u = a[c], u != null))
            switch (c) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                al(l, t, c, u, a, null);
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
        for (u = 0; u < ie.length; u++)
          K(ie[u], l);
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
        for (h in a)
          if (a.hasOwnProperty(h) && (u = a[h], u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                al(l, t, h, u, a, null);
            }
        return;
      default:
        if ($n(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Yi(
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
    for (i in a)
      a.hasOwnProperty(i) && (u = a[i], u != null && al(l, t, i, u, a, null));
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
        var e = null, n = null, f = null, i = null, c = null, h = null, g = null;
        for (y in a) {
          var S = a[y];
          if (a.hasOwnProperty(y) && S != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = S;
              default:
                u.hasOwnProperty(y) || al(l, t, y, null, u, S);
            }
        }
        for (var v in u) {
          var y = u[v];
          if (S = a[v], u.hasOwnProperty(v) && (y != null || S != null))
            switch (v) {
              case "type":
                n = y;
                break;
              case "name":
                e = y;
                break;
              case "checked":
                h = y;
                break;
              case "defaultChecked":
                g = y;
                break;
              case "value":
                f = y;
                break;
              case "defaultValue":
                i = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(m(137, t));
                break;
              default:
                y !== S && al(
                  l,
                  t,
                  v,
                  y,
                  u,
                  S
                );
            }
        }
        kn(
          l,
          f,
          i,
          c,
          h,
          g,
          n,
          e
        );
        return;
      case "select":
        y = f = i = v = null;
        for (n in a)
          if (c = a[n], a.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = c;
              default:
                u.hasOwnProperty(n) || al(
                  l,
                  t,
                  n,
                  null,
                  u,
                  c
                );
            }
        for (e in u)
          if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== c && al(
                  l,
                  t,
                  e,
                  n,
                  u,
                  c
                );
            }
        t = i, a = f, u = y, v != null ? Za(l, !!a, v, !1) : !!u != !!a && (t != null ? Za(l, !!a, t, !0) : Za(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        y = v = null;
        for (i in a)
          if (e = a[i], a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                al(l, t, i, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                y = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && al(l, t, f, e, u, n);
            }
        Ac(l, v, y);
        return;
      case "option":
        for (var B in a)
          if (v = a[B], a.hasOwnProperty(B) && v != null && !u.hasOwnProperty(B))
            switch (B) {
              case "selected":
                l.selected = !1;
                break;
              default:
                al(
                  l,
                  t,
                  B,
                  null,
                  u,
                  v
                );
            }
        for (c in u)
          if (v = u[c], y = a[c], u.hasOwnProperty(c) && v !== y && (v != null || y != null))
            switch (c) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                al(
                  l,
                  t,
                  c,
                  v,
                  u,
                  y
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
          v = a[N], a.hasOwnProperty(N) && v != null && !u.hasOwnProperty(N) && al(l, t, N, null, u, v);
        for (h in u)
          if (v = u[h], y = a[h], u.hasOwnProperty(h) && v !== y && (v != null || y != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(m(137, t));
                break;
              default:
                al(
                  l,
                  t,
                  h,
                  v,
                  u,
                  y
                );
            }
        return;
      default:
        if ($n(t)) {
          for (var ul in a)
            v = a[ul], a.hasOwnProperty(ul) && v !== void 0 && !u.hasOwnProperty(ul) && Yi(
              l,
              t,
              ul,
              void 0,
              u,
              v
            );
          for (g in u)
            v = u[g], y = a[g], !u.hasOwnProperty(g) || v === y || v === void 0 && y === void 0 || Yi(
              l,
              t,
              g,
              v,
              u,
              y
            );
          return;
        }
    }
    for (var s in a)
      v = a[s], a.hasOwnProperty(s) && v != null && !u.hasOwnProperty(s) && al(l, t, s, null, u, v);
    for (S in u)
      v = u[S], y = a[S], !u.hasOwnProperty(S) || v === y || v == null && y == null || al(l, t, S, v, u, y);
  }
  var Bi = null, Gi = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Os(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ds(l, t) {
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
  function ji(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xi = null;
  function a1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Xi ? !1 : (Xi = l, !0) : (Xi = null, !1);
  }
  var Ms = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, xs = typeof Promise == "function" ? Promise : void 0, e1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof xs != "undefined" ? function(l) {
    return xs.resolve(null).then(l).catch(n1);
  } : Ms;
  function n1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function oa(l) {
    return l === "head";
  }
  function Us(l, t) {
    var a = t, u = 0, e = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var f = l.ownerDocument;
            if (a & 1 && oe(f.documentElement), a & 2 && oe(f.body), a & 4)
              for (a = f.head, oe(a), f = a.firstChild; f; ) {
                var i = f.nextSibling, c = f.nodeName;
                f[zu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = i;
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
  function Qi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qi(a), Ln(a);
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
        if (!l[zu])
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
      if (l = bt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function i1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ci(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function c1(l, t) {
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
  function bt(l) {
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
  var Zi = null;
  function Rs(l) {
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
  function Ns(l, t, a) {
    switch (t = An(a), l) {
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
  function oe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var vt = /* @__PURE__ */ new Map(), Hs = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vt = _.d;
  _.d = {
    f: o1,
    r: r1,
    D: s1,
    C: d1,
    L: h1,
    m: v1,
    X: m1,
    S: y1,
    M: g1
  };
  function o1() {
    var l = Vt.f(), t = yn();
    return l || t;
  }
  function r1(l) {
    var t = ja(l);
    t !== null && t.tag === 5 && t.type === "form" ? Po(t) : Vt.r(l);
  }
  var bu = typeof document == "undefined" ? null : document;
  function qs(l, t, a) {
    var u = bu;
    if (u && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Hs.has(e) || (Hs.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Hl(t, "link", l), _l(t), u.head.appendChild(t)));
    }
  }
  function s1(l) {
    Vt.D(l), qs("dns-prefetch", l, null);
  }
  function d1(l, t) {
    Vt.C(l, t), qs("preconnect", l, t);
  }
  function h1(l, t, a) {
    Vt.L(l, t, a);
    var u = bu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + it(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + it(
        a.imageSizes
      ) + '"]')) : e += '[href="' + it(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Su(l);
          break;
        case "script":
          n = pu(l);
      }
      vt.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), vt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(re(n)) || t === "script" && u.querySelector(se(n)) || (t = u.createElement("link"), Hl(t, "link", l), _l(t), u.head.appendChild(t)));
    }
  }
  function v1(l, t) {
    Vt.m(l, t);
    var a = bu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = pu(l);
      }
      if (!vt.has(n) && (l = R({ rel: "modulepreload", href: l }, t), vt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(se(n)))
              return;
        }
        u = a.createElement("link"), Hl(u, "link", l), _l(u), a.head.appendChild(u);
      }
    }
  }
  function y1(l, t, a) {
    Vt.S(l, t, a);
    var u = bu;
    if (u && l) {
      var e = Xa(u).hoistableStyles, n = Su(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = u.querySelector(
          re(n)
        ))
          i.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = vt.get(n)) && Vi(l, a);
          var c = f = u.createElement("link");
          _l(c), Hl(c, "link", l), c._p = new Promise(function(h, g) {
            c.onload = h, c.onerror = g;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, _n(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function m1(l, t) {
    Vt.X(l, t);
    var a = bu;
    if (a && l) {
      var u = Xa(a).hoistableScripts, e = pu(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = R({ src: l, async: !0 }, t), (t = vt.get(e)) && Li(l, t), n = a.createElement("script"), _l(n), Hl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function g1(l, t) {
    Vt.M(l, t);
    var a = bu;
    if (a && l) {
      var u = Xa(a).hoistableScripts, e = pu(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = vt.get(e)) && Li(l, t), n = a.createElement("script"), _l(n), Hl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Ys(l, t, a, u) {
    var e = (e = G.current) ? zn(e) : null;
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
          )) && !n._p && (f.instance = n, f.state.loading = 5), vt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vt.set(l, a), n || b1(
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
    return 'href="' + it(l) + '"';
  }
  function re(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bs(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function b1(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Hl(t, "link", a), _l(t), l.head.appendChild(t));
  }
  function pu(l) {
    return '[src="' + it(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Gs(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + it(a.href) + '"]'
          );
          if (u)
            return t.instance = u, _l(u), u;
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), _l(u), Hl(u, "style", e), _n(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Su(a.href);
          var n = l.querySelector(
            re(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, _l(n), n;
          u = Bs(a), (e = vt.get(e)) && Vi(u, e), n = (l.ownerDocument || l).createElement("link"), _l(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Hl(n, "link", u), t.state.loading |= 4, _n(n, a.precedence, l), t.instance = n;
        case "script":
          return n = pu(a.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, _l(e), e) : (u = a, (e = vt.get(n)) && (u = R({}, a), Li(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), _l(e), Hl(e, "link", u), l.head.appendChild(e), t.instance = e);
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
      var i = u[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Vi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Li(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function js(l, t, a) {
    if (On === null) {
      var u = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = On, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[zu] || n[ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = u.get(f);
        i ? i.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Xs(l, t, a) {
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
  function Qs(l) {
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
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Dn.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, _l(n);
          return;
        }
        n = l.ownerDocument || l, a = Bs(a), (e = vt.get(e)) && Vi(a, e), n = n.createElement("link"), _l(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Hl(n, "link", a), t.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = Dn.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function E1() {
    if (de === null) throw Error(m(475));
    var l = de;
    return l.stylesheets && l.count === 0 && Ki(l, l.stylesheets), 0 < l.count ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Ki(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Dn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ki(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function Ki(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(A1, l), Mn = null, Dn.call(l));
  }
  function A1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Mn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Mn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Dn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: pl,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function z1(l, t, a, u, e, n, f, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cs(l, t, a, u, e, n, f, i, c, h, g, S) {
    return l = new z1(
      l,
      t,
      a,
      f,
      i,
      c,
      h,
      S
    ), t = 1, n === !0 && (t |= 24), n = $l(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Uf(n), l;
  }
  function Zs(l) {
    return l ? (l = Fa, l) : Fa;
  }
  function Vs(l, t, a, u, e, n) {
    e = Zs(e), u.context === null ? u.context = e : u.pendingContext = e, u = $t(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Ft(l, u, t), a !== null && (tt(a, l, t), Vu(a, l, t));
  }
  function Ls(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ji(l, t) {
    Ls(l, t), (l = l.alternate) && Ls(l, t);
  }
  function Ks(l) {
    if (l.tag === 13) {
      var t = $a(l, 67108864);
      t !== null && tt(t, l, 67108864), Ji(l, 67108864);
    }
  }
  var xn = !0;
  function _1(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = _.p;
    try {
      _.p = 2, wi(l, t, a, u);
    } finally {
      _.p = n, E.T = e;
    }
  }
  function O1(l, t, a, u) {
    var e = E.T;
    E.T = null;
    var n = _.p;
    try {
      _.p = 8, wi(l, t, a, u);
    } finally {
      _.p = n, E.T = e;
    }
  }
  function wi(l, t, a, u) {
    if (xn) {
      var e = ki(u);
      if (e === null)
        qi(
          l,
          t,
          u,
          Un,
          a
        ), ws(l, u);
      else if (M1(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (ws(l, u), t & 4 && -1 < D1.indexOf(l)) {
        for (; e !== null; ) {
          var n = ja(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ga(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - kl(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    _t(n), (P & 6) === 0 && (hn = pt() + 500, fe(0));
                  }
                }
                break;
              case 13:
                i = $a(n, 2), i !== null && tt(i, n, 2), yn(), Ji(n, 2);
            }
          if (n = ki(u), n === null && qi(
            l,
            t,
            u,
            Un,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        qi(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function ki(l) {
    return l = In(l), Wi(l);
  }
  var Un = null;
  function Wi(l) {
    if (Un = null, l = Ga(l), l !== null) {
      var t = hl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = xl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Un = l, null;
  }
  function Js(l) {
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
          case nc:
            return 2;
          case fc:
            return 8;
          case Te:
          case hd:
            return 32;
          case ic:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $i = !1, ra = null, sa = null, da = null, ve = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ha = [], D1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ws(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
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
        ye.delete(t.pointerId);
    }
  }
  function me(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = ja(t), t !== null && Ks(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function M1(l, t, a, u, e) {
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
        return sa = me(
          sa,
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
        return n = e.pointerId, ye.set(
          n,
          me(
            ye.get(n) || null,
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
  function ks(l) {
    var t = Ga(l.target);
    if (t !== null) {
      var a = hl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = xl(a), t !== null) {
            l.blockedOn = t, Td(l.priority, function() {
              if (a.tag === 13) {
                var u = lt();
                u = Cn(u);
                var e = $a(a, u);
                e !== null && tt(e, a, u), Ji(a, u);
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
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ki(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        Fn = u, a.target.dispatchEvent(u), Fn = null;
      } else
        return t = ja(a), t !== null && Ks(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ws(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function x1() {
    $i = !1, ra !== null && Rn(ra) && (ra = null), sa !== null && Rn(sa) && (sa = null), da !== null && Rn(da) && (da = null), ve.forEach(Ws), ye.forEach(Ws);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, $i || ($i = !0, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      x1
    )));
  }
  var Hn = null;
  function $s(l) {
    Hn !== l && (Hn = l, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (Wi(u || a) === null)
              continue;
            break;
          }
          var n = ja(a);
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
    function t(c) {
      return Nn(c, l);
    }
    ra !== null && Nn(ra, l), sa !== null && Nn(sa, l), da !== null && Nn(da, l), ve.forEach(t), ye.forEach(t);
    for (var a = 0; a < ha.length; a++) {
      var u = ha[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ha.length && (a = ha[0], a.blockedOn === null); )
      ks(a), a.blockedOn === null && ha.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Cl] || null;
        if (typeof n == "function")
          f || $s(a);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Cl] || null)
              i = f.formAction;
            else if (Wi(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? a[u + 1] = i : (a.splice(u, 3), u -= 3), $s(a);
        }
      }
  }
  function Fi(l) {
    this._internalRoot = l;
  }
  qn.prototype.render = Fi.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var a = t.current, u = lt();
    Vs(a, u, l, t, null, null);
  }, qn.prototype.unmount = Fi.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Vs(l.current, 2, null, l, null, null), yn(), t[Ba] = null;
    }
  };
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = dc();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ha.length && t !== 0 && t < ha[a].priority; a++) ;
      ha.splice(a, 0, l), a === 0 && ks(l);
    }
  };
  var Fs = Q.version;
  if (Fs !== "19.1.1")
    throw Error(
      m(
        527,
        Fs,
        "19.1.1"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = p(t), l = l !== null ? k(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var U1 = {
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
          U1
        ), wl = Yn;
      } catch (l) {
      }
  }
  return Se.createRoot = function(l, t) {
    if (!dl(l)) throw Error(m(299));
    var a = !1, u = "", e = hr, n = vr, f = yr, i = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks)), t = Cs(
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
      i,
      null
    ), l[Ba] = t.current, Hi(l), new Fi(t);
  }, Se.hydrateRoot = function(l, t, a) {
    if (!dl(l)) throw Error(m(299));
    var u = !1, e = "", n = hr, f = vr, i = yr, c = null, h = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (c = a.unstable_transitionCallbacks), a.formState !== void 0 && (h = a.formState)), t = Cs(
      l,
      1,
      !0,
      t,
      a != null ? a : null,
      u,
      e,
      n,
      f,
      i,
      c,
      h
    ), t.context = Zs(null), a = t.current, u = lt(), u = Cn(u), e = $t(u), e.callback = null, Ft(a, e, u), a = u, t.current.lanes = a, Au(t, a), _t(t), l[Ba] = t.current, Hi(l), new qn(t);
  }, Se.version = "19.1.1", Se;
}
var cd;
function V1() {
  if (cd) return lc.exports;
  cd = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (q) {
        console.error(q);
      }
  }
  return M(), lc.exports = Z1(), lc.exports;
}
var L1 = V1();
const K1 = /* @__PURE__ */ od(L1), ya = [
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
  const [M, q] = Ot.useState(0), [Q, J] = Ot.useState(ya[0]), [m, dl] = Ot.useState(!1), [hl, xl] = Ot.useState(0.7), [U, p] = Ot.useState(!1), [k, R] = Ot.useState(0), [el, Gl] = Ot.useState(0), I = Ot.useRef(null);
  Ot.useEffect(() => {
    Q && I.current && (I.current.load(), I.current.volume = hl);
  }, [Q]);
  const Ul = () => {
    I.current && (m ? (I.current.pause(), dl(!1)) : (I.current.play(), dl(!0)));
  }, yt = () => {
    const V = (M - 1 + ya.length) % ya.length;
    q(V), J(ya[V]), dl(!1), R(0);
  }, jl = () => {
    const V = (M + 1) % ya.length;
    q(V), J(ya[V]), dl(!1), R(0);
  }, Dt = (V) => {
    q(V), J(ya[V]), dl(!1), R(0);
  }, at = () => {
    I.current && (R(I.current.currentTime), Gl(I.current.duration || 0));
  }, pl = (V) => {
    const yl = parseFloat(V.target.value);
    I.current && (I.current.currentTime = yl, R(yl));
  }, ut = (V) => {
    const yl = parseFloat(V.target.value);
    xl(yl), I.current && (I.current.volume = yl);
  }, C = (V) => {
    const yl = Math.floor(V / 60), Xl = Math.floor(V % 60);
    return `${yl}:${Xl.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ il.jsxs("div", { className: "music-player layout", children: [
    /* @__PURE__ */ il.jsx(
      "audio",
      {
        ref: I,
        onTimeUpdate: at,
        onEnded: () => dl(!1),
        onLoadedMetadata: at
      }
    ),
    /* @__PURE__ */ il.jsxs("aside", { className: "playlist", children: [
      /* @__PURE__ */ il.jsx("h3", { className: "playlist-title", children: "Playlist" }),
      /* @__PURE__ */ il.jsx("div", { className: "playlist-list", children: ya.map((V, yl) => /* @__PURE__ */ il.jsxs(
        "button",
        {
          className: `playlist-item ${M === yl ? "active" : ""}`,
          onClick: () => Dt(yl),
          "aria-current": M === yl,
          children: [
            /* @__PURE__ */ il.jsx("img", { src: V.cover, alt: V.title, className: "playlist-cover" }),
            /* @__PURE__ */ il.jsxs("div", { className: "playlist-info", children: [
              /* @__PURE__ */ il.jsx("div", { className: "playlist-track", children: V.title }),
              /* @__PURE__ */ il.jsx("div", { className: "playlist-artist", children: V.artist })
            ] }),
            /* @__PURE__ */ il.jsx("div", { className: "playlist-duration", children: V.duration })
          ]
        },
        V.id
      )) })
    ] }),
    /* @__PURE__ */ il.jsxs("section", { className: "player-panel", children: [
      /* @__PURE__ */ il.jsx("div", { className: "video-container", "aria-label": "Aperçu vidéo", children: /* @__PURE__ */ il.jsx("div", { className: "video-placeholder", children: "Aperçu vidéo" }) }),
      /* @__PURE__ */ il.jsxs("div", { className: "controls-row", children: [
        /* @__PURE__ */ il.jsx("button", { className: "control-btn prev-btn", onClick: yt, "aria-label": "Piste précédente", children: "⏮" }),
        /* @__PURE__ */ il.jsx("button", { className: "control-btn play-btn", onClick: Ul, "aria-label": m ? "Pause" : "Lecture", children: m ? "⏸" : "▶" }),
        /* @__PURE__ */ il.jsx("button", { className: "control-btn next-btn", onClick: jl, "aria-label": "Piste suivante", children: "⏭" }),
        /* @__PURE__ */ il.jsxs("div", { className: "volume-inline", children: [
          /* @__PURE__ */ il.jsx(
            "button",
            {
              className: "control-btn volume-toggle",
              onClick: () => p((V) => !V),
              "aria-label": "Volume",
              "aria-expanded": U,
              children: "🔊"
            }
          ),
          U && /* @__PURE__ */ il.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "1",
              step: "0.1",
              value: hl,
              onChange: ut,
              className: "volume-bar",
              "aria-label": "Régler le volume"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ il.jsxs("div", { className: "progress-container", children: [
        /* @__PURE__ */ il.jsx("span", { className: "time-display", children: C(k) }),
        /* @__PURE__ */ il.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: el || 0,
            value: k,
            onChange: pl,
            className: "progress-bar"
          }
        ),
        /* @__PURE__ */ il.jsx("span", { className: "time-display", children: C(el) })
      ] })
    ] })
  ] });
}
const w1 = ":root{--background: #0A0A0A;--foreground: #F5F5F5;--primary: #D4AF37;--primary-hover: #FFD700;--secondary: #DC2626;--secondary-hover: #EF4444;--accent: #B8860B;--surface: #1A1A1A;--surface-hover: #2D2D2D;--border: #6B7280;--text-muted: #9CA3AF;--gold-classic: #D4AF37;--gold-bright: #FFD700;--gold-dark: #B8860B;--black-deep: #0A0A0A;--black-charcoal: #1A1A1A;--black-graphite: #2D2D2D;--red-bright: #DC2626;--red-dark: #B91C1C;--red-accent: #EF4444;--white-off: #F5F5F5;--gray-metallic: #6B7280;--gray-light: #9CA3AF}*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:var(--background);color:var(--foreground)}#root{height:100%;width:100%}a{font-weight:500;color:#d4af37;text-decoration:inherit}a:hover{color:gold}h1{font-size:3.2em;line-height:1.1;color:#d4af37}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;color:#f5f5f5;cursor:pointer;transition:border-color .25s}button:hover{border-color:#d4af37}button:focus,button:focus-visible{outline:4px auto #D4AF37}@media (prefers-color-scheme: light){:root{color:#0a0a0a;background-color:#f5f5f5}a:hover{color:#b8860b}button{background-color:#f0f0f0;color:#0a0a0a}}", k1 = ".music-player{width:100%;height:100%;margin:0;padding:2rem;background:linear-gradient(135deg,#0a0a0a,#1a1a1a,#2d2d2d);border-radius:20px;color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.player-header{text-align:center;margin-bottom:2rem}.player-title{font-size:2.5rem;font-weight:700;margin:0 0 .5rem;text-shadow:0 2px 4px rgba(0,0,0,.3);color:#d4af37}.player-subtitle{font-size:1.1rem;opacity:.9;margin:0;color:#f5f5f5}.player-controls{background:#d4af371a;backdrop-filter:blur(10px);border-radius:15px;padding:2rem;margin-bottom:2rem;border:1px solid rgba(212,175,55,.2)}.control-buttons{display:flex;justify-content:center;align-items:center;gap:1rem;margin-bottom:2rem}.control-btn{background:#d4af3733;border:1px solid rgba(212,175,55,.3);border-radius:50%;width:60px;height:60px;font-size:1.5rem;color:#d4af37;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center}.control-btn:hover:not(:disabled){background:#ffd7004d;transform:scale(1.1);border-color:gold}.control-btn:disabled{opacity:.5;cursor:not-allowed}.play-btn{background:#dc2626;border-color:#dc2626;width:80px;height:80px;font-size:2rem;color:#fff}.progress-container{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.time-display{font-family:monospace;font-size:.9rem;min-width:45px;color:#d4af37}.progress-bar{flex:1;height:8px;border-radius:4px;background:#d4af3733;outline:none;cursor:pointer;-webkit-appearance:none}.progress-bar::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#dc2626;cursor:pointer}.progress-bar::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#dc2626;cursor:pointer;border:none}.volume-control{display:flex;align-items:center;gap:.5rem;justify-content:center}.volume-icon{font-size:1.2rem;color:#d4af37}.volume-bar{width:100px;height:6px;border-radius:3px;background:#d4af3733;outline:none;cursor:pointer;-webkit-appearance:none}.volume-bar::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#d4af37;cursor:pointer}.volume-bar::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#d4af37;cursor:pointer;border:none}.current-track{display:flex;align-items:center;gap:1.5rem;background:#d4af371a;backdrop-filter:blur(10px);border-radius:15px;padding:1.5rem;margin-bottom:2rem;border:1px solid rgba(212,175,55,.2)}.track-cover{width:80px;height:80px;border-radius:10px;object-fit:cover;border:2px solid rgba(212,175,55,.3)}.track-info{flex:1}.track-title{font-size:1.5rem;font-weight:600;margin:0 0 .5rem;color:#d4af37}.track-artist{font-size:1.1rem;opacity:.8;margin:0 0 .5rem;color:#f5f5f5}.track-duration{font-size:.9rem;opacity:.7;margin:0;color:#9ca3af}.track-list{background:#d4af371a;backdrop-filter:blur(10px);border-radius:15px;padding:1.5rem;border:1px solid rgba(212,175,55,.2)}.track-list-title{font-size:1.3rem;font-weight:600;margin:0 0 1.5rem;text-align:center;color:#d4af37}.track-item{display:flex;align-items:center;gap:1rem;padding:1rem;border-radius:10px;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.track-item:hover{background:#d4af371a}.track-item.active{background:#dc26264d;border:1px solid rgba(220,38,38,.5)}.track-item-cover{width:50px;height:50px;border-radius:8px;object-fit:cover;border:1px solid rgba(212,175,55,.3)}.track-item-info{flex:1}.track-item-title{font-size:1.1rem;font-weight:500;margin:0 0 .25rem;color:#f5f5f5}.track-item-artist{font-size:.9rem;opacity:.8;margin:0;color:#9ca3af}.track-item-duration{font-size:.9rem;opacity:.7;font-family:monospace;color:#6b7280}.music-player *,.music-player *:before,.music-player *:after{box-sizing:border-box}.music-player.layout,.playlist,.player-panel{max-width:100%;min-width:0}.music-player.layout{box-sizing:border-box;display:grid;grid-template-columns:minmax(220px,26%) minmax(0,1fr);gap:.75rem;width:100%;height:100%;max-height:100%;overflow:hidden;margin:0;padding:.75rem;background:linear-gradient(135deg,#0a0a0a,#1a1a1a,#2d2d2d);border-radius:0}.playlist{background:#d4af370f;border:1px solid rgba(212,175,55,.1);border-radius:10px;padding:.75rem;overflow:hidden;display:flex;flex-direction:column;min-height:0}.playlist-title{color:#d4af37;font-size:1rem;font-weight:600;margin:0 0 .5rem}.playlist-list{overflow-y:auto;display:flex;flex-direction:column;gap:.35rem;flex:1;min-height:0}.playlist-item{display:grid;grid-template-columns:40px 1fr auto;align-items:center;gap:.5rem;width:100%;background:transparent;color:#f5f5f5;border:1px solid transparent;border-radius:8px;padding:.4rem;cursor:pointer;transition:background .2s,border-color .2s}.playlist-item:hover{background:#d4af3714;border-color:#d4af371f}.playlist-item.active{background:#dc262633;border-color:#dc262699}.playlist-cover{width:40px;height:40px;border-radius:8px;object-fit:cover;border:1px solid rgba(212,175,55,.2)}.playlist-info{display:flex;flex-direction:column;min-width:0}.playlist-track{font-weight:600;color:#f5f5f5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.playlist-artist{font-size:.8rem;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#9ca3af}.playlist-duration{font-family:monospace;font-size:.8rem;opacity:.9;color:#6b7280}.player-panel{display:grid;grid-template-rows:1fr auto auto;gap:.75rem;background:#d4af370f;border:1px solid rgba(212,175,55,.1);border-radius:10px;padding:.75rem;min-height:0;max-height:100%;overflow:hidden}.video-container{width:100%;height:100%;min-height:120px;background:#d4af3714;border:1px solid rgba(212,175,55,.12);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#9ca3af}.video-placeholder{font-size:.9rem}.controls-row{display:flex;align-items:center;justify-content:center;gap:.75rem;flex-wrap:wrap}.control-btn{background:#d4af3733;border:1px solid rgba(212,175,55,.3);border-radius:9999px;width:48px;height:48px;font-size:1.1rem;color:#d4af37;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.control-btn:hover{background:#ffd7004d;border-color:gold}.play-btn{width:56px;height:56px;font-size:1.4rem;background:#dc2626;border-color:#dc2626;color:#fff}.play-btn:hover{background:#b91c1c;border-color:#b91c1c}.progress-container{display:flex;align-items:center;gap:.75rem}.time-display{font-family:monospace;font-size:.85rem;min-width:42px;color:#d4af37}.progress-bar{flex:1;height:6px;border-radius:3px;background:#d4af3740;outline:none;cursor:pointer;-webkit-appearance:none}.progress-bar::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#dc2626;cursor:pointer}.progress-bar::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#dc2626;cursor:pointer;border:none}.volume-control{display:flex;align-items:center;gap:.4rem;justify-content:center}.volume-icon{font-size:1rem;color:#d4af37}.volume-bar{width:100px;height:6px;border-radius:3px;background:#d4af3740;outline:none;cursor:pointer;-webkit-appearance:none}.volume-bar::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#d4af37;cursor:pointer}.volume-bar::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#d4af37;cursor:pointer;border:none}.volume-inline{display:inline-flex;align-items:center;gap:.5rem;margin-left:.25rem}.volume-toggle{width:48px;height:48px}.volume-inline .volume-bar{width:120px;height:6px;border-radius:3px;background:#d4af3740;outline:none;cursor:pointer;-webkit-appearance:none}.volume-inline .volume-bar::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#d4af37;cursor:pointer}.volume-inline .volume-bar::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#d4af37;cursor:pointer;border:none}.current-track{display:flex;align-items:center;gap:.75rem;background:#d4af3714;border-radius:8px;padding:.75rem;border:1px solid rgba(212,175,55,.1)}.track-cover{width:56px;height:56px;border-radius:8px;object-fit:cover;border:1px solid rgba(212,175,55,.2)}.track-info{flex:1;min-width:0}.track-title{font-size:1.05rem;font-weight:600;margin:0 0 .15rem;color:#d4af37;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track-artist{font-size:.95rem;opacity:.9;margin:0;color:#f5f5f5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track-duration{font-size:.85rem;opacity:.8;margin:0;color:#9ca3af}@media (max-width: 900px){.music-player.layout{grid-template-columns:1fr;gap:.5rem;padding:.5rem}.playlist{order:2}.player-panel{order:1}}@media (max-height: 800px){.video-container{height:clamp(100px,18vh,180px)}.control-btn{width:44px;height:44px;font-size:1rem}.play-btn{width:52px;height:52px;font-size:1.3rem}.track-cover{width:48px;height:48px}}";
class W1 extends HTMLElement {
  constructor() {
    super(...arguments);
    Is(this, "root", null);
  }
  connectedCallback() {
    const Q = this.attachShadow({ mode: "open" }), J = document.createElement("div");
    J.id = "music-player-root", J.style.width = "100%", J.style.height = "100%", Q.appendChild(J);
    const m = document.createElement("style");
    m.textContent = `
      :host { display: block; width: 100%; height: 100%; max-width: 100%; }
      #music-player-root { width: 100%; height: 100%; max-width: 100%; }
    ` + w1 + `
` + k1, Q.appendChild(m), this.root = K1.createRoot(J), this.root.render(
      /* @__PURE__ */ il.jsx(G1.StrictMode, { children: /* @__PURE__ */ il.jsx(J1, {}) })
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.define("music-player", W1);
