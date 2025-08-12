var Y1 = Object.defineProperty, B1 = Object.defineProperties;
var G1 = Object.getOwnPropertyDescriptors;
var Pd = Object.getOwnPropertySymbols;
var j1 = Object.prototype.hasOwnProperty, X1 = Object.prototype.propertyIsEnumerable;
var Fc = (M, R, H) => R in M ? Y1(M, R, { enumerable: !0, configurable: !0, writable: !0, value: H }) : M[R] = H, Ic = (M, R) => {
  for (var H in R || (R = {}))
    j1.call(R, H) && Fc(M, H, R[H]);
  if (Pd)
    for (var H of Pd(R))
      X1.call(R, H) && Fc(M, H, R[H]);
  return M;
}, Pc = (M, R) => B1(M, G1(R));
var lv = (M, R, H) => Fc(M, typeof R != "symbol" ? R + "" : R, H);
function vv(M) {
  return M && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M;
}
var li = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function Q1() {
  if (tv) return ge;
  tv = 1;
  var M = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function H(K, r, gl) {
    var vl = null;
    if (gl !== void 0 && (vl = "" + gl), r.key !== void 0 && (vl = "" + r.key), "key" in r) {
      gl = {};
      for (var Dl in r)
        Dl !== "key" && (gl[Dl] = r[Dl]);
    } else gl = r;
    return r = gl.ref, {
      $$typeof: M,
      type: K,
      key: vl,
      ref: r !== void 0 ? r : null,
      props: gl
    };
  }
  return ge.Fragment = R, ge.jsx = H, ge.jsxs = H, ge;
}
var uv;
function Z1() {
  return uv || (uv = 1, li.exports = Q1()), li.exports;
}
var al = Z1(), ti = { exports: {} }, Q = {}, av;
function C1() {
  if (av) return Q;
  av = 1;
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
  var R = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), vl = Symbol.for("react.consumer"), Dl = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), W = Symbol.iterator;
  function ol(d) {
    return d === null || typeof d != "object" ? null : (d = W && d[W] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Bl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, xl = Object.assign, _t = {};
  function Cl(d, E, D) {
    this.props = d, this.context = E, this.refs = _t, this.updater = D || Bl;
  }
  Cl.prototype.isReactComponent = {}, Cl.prototype.setState = function(d, E) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, E, "setState");
  }, Cl.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function yu() {
  }
  yu.prototype = Cl.prototype;
  function Ot(d, E, D) {
    this.props = d, this.context = E, this.refs = _t, this.updater = D || Bl;
  }
  var Al = Ot.prototype = new yu();
  Al.constructor = Ot, xl(Al, Cl.prototype), Al.isPureReactComponent = !0;
  var mt = Array.isArray, J = { H: null, A: null, T: null, S: null, V: null }, lt = Object.prototype.hasOwnProperty;
  function rt(d, E, D, _, G, el) {
    return D = el.ref, {
      $$typeof: R,
      type: d,
      key: E,
      ref: D !== void 0 ? D : null,
      props: el
    };
  }
  function Vl(d, E) {
    return rt(
      d.type,
      E,
      void 0,
      void 0,
      void 0,
      d.props
    );
  }
  function gt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === R;
  }
  function hu(d) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(D) {
      return E[D];
    });
  }
  var tt = /\/+/g;
  function ut(d, E) {
    return typeof d == "object" && d !== null && d.key != null ? hu("" + d.key) : E.toString(36);
  }
  function xu() {
  }
  function Mt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(xu, xu) : (d.status = "pending", d.then(
          function(E) {
            d.status === "pending" && (d.status = "fulfilled", d.value = E);
          },
          function(E) {
            d.status === "pending" && (d.status = "rejected", d.reason = E);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function z(d, E, D, _, G) {
    var el = typeof d;
    (el === "undefined" || el === "boolean") && (d = null);
    var X = !1;
    if (d === null) X = !0;
    else
      switch (el) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case R:
            case H:
              X = !0;
              break;
            case N:
              return X = d._init, z(
                X(d._payload),
                E,
                D,
                _,
                G
              );
          }
      }
    if (X)
      return G = G(d), X = _ === "" ? "." + ut(d, 0) : _, mt(G) ? (D = "", X != null && (D = X.replace(tt, "$&/") + "/"), z(G, E, D, "", function(Ct) {
        return Ct;
      })) : G != null && (gt(G) && (G = Vl(
        G,
        D + (G.key == null || d && d.key === G.key ? "" : ("" + G.key).replace(
          tt,
          "$&/"
        ) + "/") + X
      )), E.push(G)), 1;
    X = 0;
    var Ll = _ === "" ? "." : _ + ":";
    if (mt(d))
      for (var il = 0; il < d.length; il++)
        _ = d[il], el = Ll + ut(_, il), X += z(
          _,
          E,
          D,
          el,
          G
        );
    else if (il = ol(d), typeof il == "function")
      for (d = il.call(d), il = 0; !(_ = d.next()).done; )
        _ = _.value, el = Ll + ut(_, il++), X += z(
          _,
          E,
          D,
          el,
          G
        );
    else if (el === "object") {
      if (typeof d.then == "function")
        return z(
          Mt(d),
          E,
          D,
          _,
          G
        );
      throw E = String(d), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function A(d, E, D) {
    if (d == null) return d;
    var _ = [], G = 0;
    return z(d, _, "", "", function(el) {
      return E.call(D, el, G++);
    }), _;
  }
  function O(d) {
    if (d._status === -1) {
      var E = d._result;
      E = E(), E.then(
        function(D) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = D);
        },
        function(D) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = D);
        }
      ), d._status === -1 && (d._status = 0, d._result = E);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof M == "object" && typeof M.emit == "function") {
      M.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function cl() {
  }
  return Q.Children = {
    map: A,
    forEach: function(d, E, D) {
      A(
        d,
        function() {
          E.apply(this, arguments);
        },
        D
      );
    },
    count: function(d) {
      var E = 0;
      return A(d, function() {
        E++;
      }), E;
    },
    toArray: function(d) {
      return A(d, function(E) {
        return E;
      }) || [];
    },
    only: function(d) {
      if (!gt(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  }, Q.Component = Cl, Q.Fragment = K, Q.Profiler = gl, Q.PureComponent = Ot, Q.StrictMode = r, Q.Suspense = T, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return J.H.useMemoCache(d);
    }
  }, Q.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, Q.cloneElement = function(d, E, D) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var _ = xl({}, d.props), G = d.key, el = void 0;
    if (E != null)
      for (X in E.ref !== void 0 && (el = void 0), E.key !== void 0 && (G = "" + E.key), E)
        !lt.call(E, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && E.ref === void 0 || (_[X] = E[X]);
    var X = arguments.length - 2;
    if (X === 1) _.children = D;
    else if (1 < X) {
      for (var Ll = Array(X), il = 0; il < X; il++)
        Ll[il] = arguments[il + 2];
      _.children = Ll;
    }
    return rt(d.type, G, void 0, void 0, el, _);
  }, Q.createContext = function(d) {
    return d = {
      $$typeof: Dl,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: vl,
      _context: d
    }, d;
  }, Q.createElement = function(d, E, D) {
    var _, G = {}, el = null;
    if (E != null)
      for (_ in E.key !== void 0 && (el = "" + E.key), E)
        lt.call(E, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (G[_] = E[_]);
    var X = arguments.length - 2;
    if (X === 1) G.children = D;
    else if (1 < X) {
      for (var Ll = Array(X), il = 0; il < X; il++)
        Ll[il] = arguments[il + 2];
      G.children = Ll;
    }
    if (d && d.defaultProps)
      for (_ in X = d.defaultProps, X)
        G[_] === void 0 && (G[_] = X[_]);
    return rt(d, el, void 0, void 0, null, G);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(d) {
    return { $$typeof: q, render: d };
  }, Q.isValidElement = gt, Q.lazy = function(d) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: d },
      _init: O
    };
  }, Q.memo = function(d, E) {
    return {
      $$typeof: x,
      type: d,
      compare: E === void 0 ? null : E
    };
  }, Q.startTransition = function(d) {
    var E = J.T, D = {};
    J.T = D;
    try {
      var _ = d(), G = J.S;
      G !== null && G(D, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(cl, $);
    } catch (el) {
      $(el);
    } finally {
      J.T = E;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, Q.use = function(d) {
    return J.H.use(d);
  }, Q.useActionState = function(d, E, D) {
    return J.H.useActionState(d, E, D);
  }, Q.useCallback = function(d, E) {
    return J.H.useCallback(d, E);
  }, Q.useContext = function(d) {
    return J.H.useContext(d);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(d, E) {
    return J.H.useDeferredValue(d, E);
  }, Q.useEffect = function(d, E, D) {
    var _ = J.H;
    if (typeof D == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return _.useEffect(d, E);
  }, Q.useId = function() {
    return J.H.useId();
  }, Q.useImperativeHandle = function(d, E, D) {
    return J.H.useImperativeHandle(d, E, D);
  }, Q.useInsertionEffect = function(d, E) {
    return J.H.useInsertionEffect(d, E);
  }, Q.useLayoutEffect = function(d, E) {
    return J.H.useLayoutEffect(d, E);
  }, Q.useMemo = function(d, E) {
    return J.H.useMemo(d, E);
  }, Q.useOptimistic = function(d, E) {
    return J.H.useOptimistic(d, E);
  }, Q.useReducer = function(d, E, D) {
    return J.H.useReducer(d, E, D);
  }, Q.useRef = function(d) {
    return J.H.useRef(d);
  }, Q.useState = function(d) {
    return J.H.useState(d);
  }, Q.useSyncExternalStore = function(d, E, D) {
    return J.H.useSyncExternalStore(
      d,
      E,
      D
    );
  }, Q.useTransition = function() {
    return J.H.useTransition();
  }, Q.version = "19.1.1", Q;
}
var ev;
function fi() {
  return ev || (ev = 1, ti.exports = C1()), ti.exports;
}
var qu = fi();
const V1 = /* @__PURE__ */ vv(qu);
var ui = { exports: {} }, Se = {}, ai = { exports: {} }, ei = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function L1() {
  return nv || (nv = 1, function(M) {
    function R(z, A) {
      var O = z.length;
      z.push(A);
      l: for (; 0 < O; ) {
        var $ = O - 1 >>> 1, cl = z[$];
        if (0 < r(cl, A))
          z[$] = A, z[O] = cl, O = $;
        else break l;
      }
    }
    function H(z) {
      return z.length === 0 ? null : z[0];
    }
    function K(z) {
      if (z.length === 0) return null;
      var A = z[0], O = z.pop();
      if (O !== A) {
        z[0] = O;
        l: for (var $ = 0, cl = z.length, d = cl >>> 1; $ < d; ) {
          var E = 2 * ($ + 1) - 1, D = z[E], _ = E + 1, G = z[_];
          if (0 > r(D, O))
            _ < cl && 0 > r(G, D) ? (z[$] = G, z[_] = O, $ = _) : (z[$] = D, z[E] = O, $ = E);
          else if (_ < cl && 0 > r(G, O))
            z[$] = G, z[_] = O, $ = _;
          else break l;
        }
      }
      return A;
    }
    function r(z, A) {
      var O = z.sortIndex - A.sortIndex;
      return O !== 0 ? O : z.id - A.id;
    }
    if (M.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var gl = performance;
      M.unstable_now = function() {
        return gl.now();
      };
    } else {
      var vl = Date, Dl = vl.now();
      M.unstable_now = function() {
        return vl.now() - Dl;
      };
    }
    var q = [], T = [], x = 1, N = null, W = 3, ol = !1, Bl = !1, xl = !1, _t = !1, Cl = typeof setTimeout == "function" ? setTimeout : null, yu = typeof clearTimeout == "function" ? clearTimeout : null, Ot = typeof setImmediate != "undefined" ? setImmediate : null;
    function Al(z) {
      for (var A = H(T); A !== null; ) {
        if (A.callback === null) K(T);
        else if (A.startTime <= z)
          K(T), A.sortIndex = A.expirationTime, R(q, A);
        else break;
        A = H(T);
      }
    }
    function mt(z) {
      if (xl = !1, Al(z), !Bl)
        if (H(q) !== null)
          Bl = !0, J || (J = !0, tt());
        else {
          var A = H(T);
          A !== null && Mt(mt, A.startTime - z);
        }
    }
    var J = !1, lt = -1, rt = 5, Vl = -1;
    function gt() {
      return _t ? !0 : !(M.unstable_now() - Vl < rt);
    }
    function hu() {
      if (_t = !1, J) {
        var z = M.unstable_now();
        Vl = z;
        var A = !0;
        try {
          l: {
            Bl = !1, xl && (xl = !1, yu(lt), lt = -1), ol = !0;
            var O = W;
            try {
              t: {
                for (Al(z), N = H(q); N !== null && !(N.expirationTime > z && gt()); ) {
                  var $ = N.callback;
                  if (typeof $ == "function") {
                    N.callback = null, W = N.priorityLevel;
                    var cl = $(
                      N.expirationTime <= z
                    );
                    if (z = M.unstable_now(), typeof cl == "function") {
                      N.callback = cl, Al(z), A = !0;
                      break t;
                    }
                    N === H(q) && K(q), Al(z);
                  } else K(q);
                  N = H(q);
                }
                if (N !== null) A = !0;
                else {
                  var d = H(T);
                  d !== null && Mt(
                    mt,
                    d.startTime - z
                  ), A = !1;
                }
              }
              break l;
            } finally {
              N = null, W = O, ol = !1;
            }
            A = void 0;
          }
        } finally {
          A ? tt() : J = !1;
        }
      }
    }
    var tt;
    if (typeof Ot == "function")
      tt = function() {
        Ot(hu);
      };
    else if (typeof MessageChannel != "undefined") {
      var ut = new MessageChannel(), xu = ut.port2;
      ut.port1.onmessage = hu, tt = function() {
        xu.postMessage(null);
      };
    } else
      tt = function() {
        Cl(hu, 0);
      };
    function Mt(z, A) {
      lt = Cl(function() {
        z(M.unstable_now());
      }, A);
    }
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, M.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : rt = 0 < z ? Math.floor(1e3 / z) : 5;
    }, M.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, M.unstable_next = function(z) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = W;
      }
      var O = W;
      W = A;
      try {
        return z();
      } finally {
        W = O;
      }
    }, M.unstable_requestPaint = function() {
      _t = !0;
    }, M.unstable_runWithPriority = function(z, A) {
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
      var O = W;
      W = z;
      try {
        return A();
      } finally {
        W = O;
      }
    }, M.unstable_scheduleCallback = function(z, A, O) {
      var $ = M.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? $ + O : $) : O = $, z) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return cl = O + cl, z = {
        id: x++,
        callback: A,
        priorityLevel: z,
        startTime: O,
        expirationTime: cl,
        sortIndex: -1
      }, O > $ ? (z.sortIndex = O, R(T, z), H(q) === null && z === H(T) && (xl ? (yu(lt), lt = -1) : xl = !0, Mt(mt, O - $))) : (z.sortIndex = cl, R(q, z), Bl || ol || (Bl = !0, J || (J = !0, tt()))), z;
    }, M.unstable_shouldYield = gt, M.unstable_wrapCallback = function(z) {
      var A = W;
      return function() {
        var O = W;
        W = A;
        try {
          return z.apply(this, arguments);
        } finally {
          W = O;
        }
      };
    };
  }(ei)), ei;
}
var fv;
function K1() {
  return fv || (fv = 1, ai.exports = L1()), ai.exports;
}
var ni = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function J1() {
  if (cv) return ql;
  cv = 1;
  var M = fi();
  function R(q) {
    var T = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        T += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + q + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function H() {
  }
  var K = {
    d: {
      f: H,
      r: function() {
        throw Error(R(522));
      },
      D: H,
      C: H,
      L: H,
      m: H,
      X: H,
      S: H,
      M: H
    },
    p: 0,
    findDOMNode: null
  }, r = Symbol.for("react.portal");
  function gl(q, T, x) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: N == null ? null : "" + N,
      children: q,
      containerInfo: T,
      implementation: x
    };
  }
  var vl = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Dl(q, T) {
    if (q === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, ql.createPortal = function(q, T) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(R(299));
    return gl(q, T, null, x);
  }, ql.flushSync = function(q) {
    var T = vl.T, x = K.p;
    try {
      if (vl.T = null, K.p = 2, q) return q();
    } finally {
      vl.T = T, K.p = x, K.d.f();
    }
  }, ql.preconnect = function(q, T) {
    typeof q == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, K.d.C(q, T));
  }, ql.prefetchDNS = function(q) {
    typeof q == "string" && K.d.D(q);
  }, ql.preinit = function(q, T) {
    if (typeof q == "string" && T && typeof T.as == "string") {
      var x = T.as, N = Dl(x, T.crossOrigin), W = typeof T.integrity == "string" ? T.integrity : void 0, ol = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      x === "style" ? K.d.S(
        q,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: N,
          integrity: W,
          fetchPriority: ol
        }
      ) : x === "script" && K.d.X(q, {
        crossOrigin: N,
        integrity: W,
        fetchPriority: ol,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, ql.preinitModule = function(q, T) {
    if (typeof q == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var x = Dl(
            T.as,
            T.crossOrigin
          );
          K.d.M(q, {
            crossOrigin: x,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && K.d.M(q);
  }, ql.preload = function(q, T) {
    if (typeof q == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var x = T.as, N = Dl(x, T.crossOrigin);
      K.d.L(q, x, {
        crossOrigin: N,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, ql.preloadModule = function(q, T) {
    if (typeof q == "string")
      if (T) {
        var x = Dl(T.as, T.crossOrigin);
        K.d.m(q, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: x,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else K.d.m(q);
  }, ql.requestFormReset = function(q) {
    K.d.r(q);
  }, ql.unstable_batchedUpdates = function(q, T) {
    return q(T);
  }, ql.useFormState = function(q, T, x) {
    return vl.H.useFormState(q, T, x);
  }, ql.useFormStatus = function() {
    return vl.H.useHostTransitionStatus();
  }, ql.version = "19.1.1", ql;
}
var iv;
function w1() {
  if (iv) return ni.exports;
  iv = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (R) {
        console.error(R);
      }
  }
  return M(), ni.exports = J1(), ni.exports;
}
var sv;
function W1() {
  if (sv) return Se;
  sv = 1;
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
  var R = K1(), H = fi(), K = w1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function gl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function vl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function Dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function q(l) {
    if (vl(l) !== l)
      throw Error(r(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = vl(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return q(e), l;
          if (n === a) return q(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function x(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = x(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, W = Symbol.for("react.element"), ol = Symbol.for("react.transitional.element"), Bl = Symbol.for("react.portal"), xl = Symbol.for("react.fragment"), _t = Symbol.for("react.strict_mode"), Cl = Symbol.for("react.profiler"), yu = Symbol.for("react.provider"), Ot = Symbol.for("react.consumer"), Al = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), lt = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), Vl = Symbol.for("react.lazy"), gt = Symbol.for("react.activity"), hu = Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function ut(l) {
    return l === null || typeof l != "object" ? null : (l = tt && l[tt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xu = Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === xu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case xl:
        return "Fragment";
      case Cl:
        return "Profiler";
      case _t:
        return "StrictMode";
      case J:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Bl:
          return "Portal";
        case Al:
          return (l.displayName || "Context") + ".Provider";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case mt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case rt:
          return t = l.displayName || null, t !== null ? t : Mt(l.type) || "Memo";
        case Vl:
          t = l._payload, l = l._init;
          try {
            return Mt(l(t));
          } catch (u) {
          }
      }
    return null;
  }
  var z = Array.isArray, A = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, cl = [], d = -1;
  function E(l) {
    return { current: l };
  }
  function D(l) {
    0 > d || (l.current = cl[d], cl[d] = null, d--);
  }
  function _(l, t) {
    d++, cl[d] = l.current, l.current = t;
  }
  var G = E(null), el = E(null), X = E(null), Ll = E(null);
  function il(l, t) {
    switch (_(X, t), _(el, l), _(G, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Dd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Dd(t), l = Ud(t, l);
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
    D(G), _(G, l);
  }
  function Ct() {
    D(G), D(el), D(X);
  }
  function Yn(l) {
    l.memoizedState !== null && _(Ll, l);
    var t = G.current, u = Ud(t, l.type);
    t !== u && (_(el, l), _(G, u));
  }
  function be(l) {
    el.current === l && (D(G), D(el)), Ll.current === l && (D(Ll), oe._currentValue = $);
  }
  var Bn = Object.prototype.hasOwnProperty, Gn = R.unstable_scheduleCallback, jn = R.unstable_cancelCallback, ov = R.unstable_shouldYield, yv = R.unstable_requestPaint, St = R.unstable_now, hv = R.unstable_getCurrentPriorityLevel, ci = R.unstable_ImmediatePriority, ii = R.unstable_UserBlockingPriority, Te = R.unstable_NormalPriority, mv = R.unstable_LowPriority, si = R.unstable_IdlePriority, rv = R.log, gv = R.unstable_setDisableYieldValue, Ta = null, Kl = null;
  function Vt(l) {
    if (typeof rv == "function" && gv(l), Kl && typeof Kl.setStrictMode == "function")
      try {
        Kl.setStrictMode(Ta, l);
      } catch (t) {
      }
  }
  var Jl = Math.clz32 ? Math.clz32 : Tv, Sv = Math.log, bv = Math.LN2;
  function Tv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Sv(l) / bv | 0) | 0;
  }
  var Ee = 256, Ae = 4194304;
  function mu(l) {
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
  function ze(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = mu(a) : (f &= c, f !== 0 ? e = mu(f) : u || (u = c & ~l, u !== 0 && (e = mu(u))))) : (c = a & ~n, c !== 0 ? e = mu(c) : f !== 0 ? e = mu(f) : u || (u = a & ~l, u !== 0 && (e = mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ea(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ev(l, t) {
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
  function di() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function vi() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Xn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Aa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Av(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Jl(u), b = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = y[g];
      if (h !== null)
        for (y[g] = null, g = 0; g < h.length; g++) {
          var m = h[g];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~b;
    }
    a !== 0 && oi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function oi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Jl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function yi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Jl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Qn(l) {
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
  function hi() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : wd(l.type));
  }
  function zv(l, t) {
    var u = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = u;
    }
  }
  var Lt = Math.random().toString(36).slice(2), pl = "__reactFiber$" + Lt, Gl = "__reactProps$" + Lt, Yu = "__reactContainer$" + Lt, Cn = "__reactEvents$" + Lt, _v = "__reactListeners$" + Lt, Ov = "__reactHandles$" + Lt, mi = "__reactResources$" + Lt, za = "__reactMarker$" + Lt;
  function Vn(l) {
    delete l[pl], delete l[Gl], delete l[Cn], delete l[_v], delete l[Ov];
  }
  function Bu(l) {
    var t = l[pl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Yu] || u[pl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Hd(l); l !== null; ) {
            if (u = l[pl]) return u;
            l = Hd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gu(l) {
    if (l = l[pl] || l[Yu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function _a(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function ju(l) {
    var t = l[mi];
    return t || (t = l[mi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function zl(l) {
    l[za] = !0;
  }
  var ri = /* @__PURE__ */ new Set(), gi = {};
  function ru(l, t) {
    Xu(l, t), Xu(l + "Capture", t);
  }
  function Xu(l, t) {
    for (gi[l] = t, l = 0; l < t.length; l++)
      ri.add(t[l]);
  }
  var Mv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Si = {}, bi = {};
  function Dv(l) {
    return Bn.call(bi, l) ? !0 : Bn.call(Si, l) ? !1 : Mv.test(l) ? bi[l] = !0 : (Si[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Dv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Oe(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Dt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Ln, Ti;
  function Qu(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Ln = t && t[1] || "", Ti = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ln + l + Ti;
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var b = function() {
                throw Error();
              };
              if (Object.defineProperty(b.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (m) {
                  var h = m;
                }
                Reflect.construct(l, [], b);
              } else {
                try {
                  b.call();
                } catch (m) {
                  h = m;
                }
                l.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                h = m;
              }
              (b = l()) && typeof b.catch == "function" && b.catch(function() {
              });
            }
          } catch (m) {
            if (m && h && typeof m.stack == "string")
              return [m.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), y = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === y.length)
          for (a = i.length - 1, e = y.length - 1; 1 <= a && 0 <= e && i[a] !== y[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== y[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== y[e]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Kn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Qu(u) : "";
  }
  function Uv(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qu(l.type);
      case 16:
        return Qu("Lazy");
      case 13:
        return Qu("Suspense");
      case 19:
        return Qu("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return Qu("Activity");
      default:
        return "";
    }
  }
  function Ei(l) {
    try {
      var t = "";
      do
        t += Uv(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function at(l) {
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
  function Ai(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Rv(l) {
    var t = Ai(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u != "undefined" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = Rv(l));
  }
  function zi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ai(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document != "undefined" ? document : void 0), typeof l == "undefined") return null;
    try {
      return l.activeElement || l.body;
    } catch (t) {
      return l.body;
    }
  }
  var Nv = /[\n"\\]/g;
  function et(l) {
    return l.replace(
      Nv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + at(t)) : l.value !== "" + at(t) && (l.value = "" + at(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Wn(l, f, at(t)) : u != null ? Wn(l, f, at(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + at(c) : l.removeAttribute("name");
  }
  function _i(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + at(u) : "", t = t != null ? "" + at(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a != null ? a : e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Wn(l, t, u) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Zu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + at(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Oi(l, t, u) {
    if (t != null && (t = "" + at(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + at(u) : "";
  }
  function Mi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (z(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = at(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Cu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var pv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Di(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || pv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Ui(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Di(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Di(l, n, t[n]);
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
  var Hv = /* @__PURE__ */ new Map([
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
  ]), qv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return qv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var kn = null;
  function Fn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Vu = null, Lu = null;
  function Ri(l) {
    var t = Gu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Gl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (wn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + et(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Gl] || null;
                if (!e) throw Error(r(90));
                wn(
                  a,
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
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && zi(a);
          }
          break l;
        case "textarea":
          Oi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Zu(l, !!u.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Ni(l, t, u) {
    if (In) return l(t, u);
    In = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (In = !1, (Vu !== null || Lu !== null) && (hn(), Vu && (t = Vu, l = Lu, Lu = Vu = null, Ri(t), l)))
        for (t = 0; t < l.length; t++) Ri(l[t]);
    }
  }
  function Oa(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Gl] || null;
    if (a === null) return null;
    u = a[t];
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, t, typeof u)
      );
    return u;
  }
  var Ut = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Pn = !1;
  if (Ut)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function() {
          Pn = !0;
        }
      }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
    } catch (l) {
      Pn = !1;
    }
  var Kt = null, lf = null, Re = null;
  function pi() {
    if (Re) return Re;
    var l, t = lf, u = t.length, a, e = "value" in Kt ? Kt.value : Kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Re = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ne(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pe() {
    return !0;
  }
  function Hi() {
    return !1;
  }
  function jl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pe : Hi, this.isPropagationStopped = Hi, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = pe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = pe);
      },
      persist: function() {
      },
      isPersistent: pe
    }), t;
  }
  var gu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, He = jl(gu), Da = N({}, gu, { view: 0, detail: 0 }), xv = jl(Da), tf, uf, Ua, qe = N({}, Da, {
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
    getModifierState: ef,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ua && (Ua && l.type === "mousemove" ? (tf = l.screenX - Ua.screenX, uf = l.screenY - Ua.screenY) : uf = tf = 0, Ua = l), tf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uf;
    }
  }), qi = jl(qe), Yv = N({}, qe, { dataTransfer: 0 }), Bv = jl(Yv), Gv = N({}, Da, { relatedTarget: 0 }), af = jl(Gv), jv = N({}, gu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xv = jl(jv), Qv = N({}, gu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Zv = jl(Qv), Cv = N({}, gu, { data: 0 }), xi = jl(Cv), Vv = {
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
  }, Lv = {
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
  }, Kv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Kv[l]) ? !!t[l] : !1;
  }
  function ef() {
    return Jv;
  }
  var wv = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = Vv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Lv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ef,
    charCode: function(l) {
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Wv = jl(wv), $v = N({}, qe, {
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
  }), Yi = jl($v), kv = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ef
  }), Fv = jl(kv), Iv = N({}, gu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pv = jl(Iv), lo = N({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), to = jl(lo), uo = N({}, gu, {
    newState: 0,
    oldState: 0
  }), ao = jl(uo), eo = [9, 13, 27, 32], nf = Ut && "CompositionEvent" in window, Ra = null;
  Ut && "documentMode" in document && (Ra = document.documentMode);
  var no = Ut && "TextEvent" in window && !Ra, Bi = Ut && (!nf || Ra && 8 < Ra && 11 >= Ra), Gi = " ", ji = !1;
  function Xi(l, t) {
    switch (l) {
      case "keyup":
        return eo.indexOf(t.keyCode) !== -1;
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
  function Qi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ku = !1;
  function fo(l, t) {
    switch (l) {
      case "compositionend":
        return Qi(t);
      case "keypress":
        return t.which !== 32 ? null : (ji = !0, Gi);
      case "textInput":
        return l = t.data, l === Gi && ji ? null : l;
      default:
        return null;
    }
  }
  function co(l, t) {
    if (Ku)
      return l === "compositionend" || !nf && Xi(l, t) ? (l = pi(), Re = lf = Kt = null, Ku = !1, l) : null;
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
        return Bi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var io = {
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
  function Zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!io[l.type] : t === "textarea";
  }
  function Ci(l, t, u, a) {
    Vu ? Lu ? Lu.push(a) : Lu = [a] : Vu = a, t = Tn(t, "onChange"), 0 < t.length && (u = new He(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Na = null, pa = null;
  function so(l) {
    Ad(l, 0);
  }
  function xe(l) {
    var t = _a(l);
    if (zi(t)) return l;
  }
  function Vi(l, t) {
    if (l === "change") return t;
  }
  var Li = !1;
  if (Ut) {
    var ff;
    if (Ut) {
      var cf = "oninput" in document;
      if (!cf) {
        var Ki = document.createElement("div");
        Ki.setAttribute("oninput", "return;"), cf = typeof Ki.oninput == "function";
      }
      ff = cf;
    } else ff = !1;
    Li = ff && (!document.documentMode || 9 < document.documentMode);
  }
  function Ji() {
    Na && (Na.detachEvent("onpropertychange", wi), pa = Na = null);
  }
  function wi(l) {
    if (l.propertyName === "value" && xe(pa)) {
      var t = [];
      Ci(
        t,
        pa,
        l,
        Fn(l)
      ), Ni(so, t);
    }
  }
  function vo(l, t, u) {
    l === "focusin" ? (Ji(), Na = t, pa = u, Na.attachEvent("onpropertychange", wi)) : l === "focusout" && Ji();
  }
  function oo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return xe(pa);
  }
  function yo(l, t) {
    if (l === "click") return xe(t);
  }
  function ho(l, t) {
    if (l === "input" || l === "change")
      return xe(t);
  }
  function mo(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var wl = typeof Object.is == "function" ? Object.is : mo;
  function Ha(l, t) {
    if (wl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Bn.call(t, e) || !wl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Wi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function $i(l, t) {
    var u = Wi(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Wi(u);
    }
  }
  function ki(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ki(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Fi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch (a) {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function sf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var ro = Ut && "documentMode" in document && 11 >= document.documentMode, Ju = null, df = null, qa = null, vf = !1;
  function Ii(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vf || Ju == null || Ju !== De(a) || (a = Ju, "selectionStart" in a && sf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), qa && Ha(qa, a) || (qa = a, a = Tn(df, "onSelect"), 0 < a.length && (t = new He(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ju)));
  }
  function Su(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var wu = {
    animationend: Su("Animation", "AnimationEnd"),
    animationiteration: Su("Animation", "AnimationIteration"),
    animationstart: Su("Animation", "AnimationStart"),
    transitionrun: Su("Transition", "TransitionRun"),
    transitionstart: Su("Transition", "TransitionStart"),
    transitioncancel: Su("Transition", "TransitionCancel"),
    transitionend: Su("Transition", "TransitionEnd")
  }, of = {}, Pi = {};
  Ut && (Pi = document.createElement("div").style, "AnimationEvent" in window || (delete wu.animationend.animation, delete wu.animationiteration.animation, delete wu.animationstart.animation), "TransitionEvent" in window || delete wu.transitionend.transition);
  function bu(l) {
    if (of[l]) return of[l];
    if (!wu[l]) return l;
    var t = wu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Pi)
        return of[l] = t[u];
    return l;
  }
  var ls = bu("animationend"), ts = bu("animationiteration"), us = bu("animationstart"), go = bu("transitionrun"), So = bu("transitionstart"), bo = bu("transitioncancel"), as = bu("transitionend"), es = /* @__PURE__ */ new Map(), yf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yf.push("scrollEnd");
  function ot(l, t) {
    es.set(l, t), ru(t, [l]);
  }
  var ns = /* @__PURE__ */ new WeakMap();
  function nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = ns.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Ei(t)
      }, ns.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ei(t)
    };
  }
  var ft = [], Wu = 0, hf = 0;
  function Ye() {
    for (var l = Wu, t = hf = Wu = 0; t < l; ) {
      var u = ft[t];
      ft[t++] = null;
      var a = ft[t];
      ft[t++] = null;
      var e = ft[t];
      ft[t++] = null;
      var n = ft[t];
      if (ft[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && fs(u, e, n);
    }
  }
  function Be(l, t, u, a) {
    ft[Wu++] = l, ft[Wu++] = t, ft[Wu++] = u, ft[Wu++] = a, hf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function mf(l, t, u, a) {
    return Be(l, t, u, a), Ge(l);
  }
  function $u(l, t) {
    return Be(l, null, null, t), Ge(l);
  }
  function fs(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Jl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ge(l) {
    if (50 < ee)
      throw ee = 0, Ec = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ku = {};
  function To(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wl(l, t, u, a) {
    return new To(l, t, u, a);
  }
  function rf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Wl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function cs(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function je(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") rf(l) && (f = 1);
    else if (typeof l == "string")
      f = A1(
        l,
        u,
        G.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case gt:
          return l = Wl(31, u, t, e), l.elementType = gt, l.lanes = n, l;
        case xl:
          return Tu(u.children, e, n, t);
        case _t:
          f = 8, e |= 24;
          break;
        case Cl:
          return l = Wl(12, u, t, e | 2), l.elementType = Cl, l.lanes = n, l;
        case J:
          return l = Wl(13, u, t, e), l.elementType = J, l.lanes = n, l;
        case lt:
          return l = Wl(19, u, t, e), l.elementType = lt, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case yu:
              case Al:
                f = 10;
                break l;
              case Ot:
                f = 9;
                break l;
              case mt:
                f = 11;
                break l;
              case rt:
                f = 14;
                break l;
              case Vl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Wl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Tu(l, t, u, a) {
    return l = Wl(7, l, a, t), l.lanes = u, l;
  }
  function gf(l, t, u) {
    return l = Wl(6, l, null, t), l.lanes = u, l;
  }
  function Sf(l, t, u) {
    return t = Wl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Fu = [], Iu = 0, Xe = null, Qe = 0, ct = [], it = 0, Eu = null, Nt = 1, pt = "";
  function Au(l, t) {
    Fu[Iu++] = Qe, Fu[Iu++] = Xe, Xe = l, Qe = t;
  }
  function is(l, t, u) {
    ct[it++] = Nt, ct[it++] = pt, ct[it++] = Eu, Eu = l;
    var a = Nt;
    l = pt;
    var e = 32 - Jl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Jl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Nt = 1 << 32 - Jl(t) + e | u << e | a, pt = n + l;
    } else
      Nt = 1 << n | u << e | a, pt = l;
  }
  function bf(l) {
    l.return !== null && (Au(l, 1), is(l, 1, 0));
  }
  function Tf(l) {
    for (; l === Xe; )
      Xe = Fu[--Iu], Fu[Iu] = null, Qe = Fu[--Iu], Fu[Iu] = null;
    for (; l === Eu; )
      Eu = ct[--it], ct[it] = null, pt = ct[--it], ct[it] = null, Nt = ct[--it], ct[it] = null;
  }
  var Yl = null, yl = null, F = !1, zu = null, bt = !1, Ef = Error(r(519));
  function _u(l) {
    var t = Error(r(418, ""));
    throw Ba(nt(t, l)), Ef;
  }
  function ss(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[pl] = l, t[Gl] = a, u) {
      case "dialog":
        L("cancel", t), L("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++)
          L(fe[u], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        L("error", t), L("load", t);
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        L("invalid", t), _i(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Me(t);
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), Mi(t, a.value, a.defaultValue, a.children), Me(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Md(t.textContent, u) ? (a.popover != null && (L("beforetoggle", t), L("toggle", t)), a.onScroll != null && L("scroll", t), a.onScrollEnd != null && L("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || _u(l);
  }
  function ds(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function xa(l) {
    if (l !== Yl) return !1;
    if (!F) return ds(l), F = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gc(l.type, l.memoizedProps)), u = !u), u && yl && _u(l), ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                yl = ht(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        yl = null;
      }
    } else
      t === 27 ? (t = yl, cu(l.type) ? (l = Zc, Zc = null, yl = l) : yl = t) : yl = Yl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    yl = Yl = null, F = !1;
  }
  function vs() {
    var l = zu;
    return l !== null && (Zl === null ? Zl = l : Zl.push.apply(
      Zl,
      l
    ), zu = null), l;
  }
  function Ba(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Af = E(null), Ou = null, Ht = null;
  function Jt(l, t, u) {
    _(Af, t._currentValue), t._currentValue = u;
  }
  function qt(l) {
    l._currentValue = Af.current, D(Af);
  }
  function zf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function _f(l, t, u, a) {
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
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), zf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), zf(f, u, l), f = null;
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
  function Ga(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          wl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Ll.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && _f(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!wl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    Ou = l, Ht = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return os(Ou, l);
  }
  function Ce(l, t) {
    return Ou === null && Mu(l), os(l, t);
  }
  function os(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Ht === null) {
      if (l === null) throw Error(r(308));
      Ht = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Ht = Ht.next = t;
    return u;
  }
  var Eo = typeof AbortController != "undefined" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Ao = R.unstable_scheduleCallback, zo = R.unstable_NormalPriority, Tl = {
    $$typeof: Al,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Of() {
    return {
      controller: new Eo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ja(l) {
    l.refCount--, l.refCount === 0 && Ao(zo, function() {
      l.controller.abort();
    });
  }
  var Xa = null, Mf = 0, Pu = 0, la = null;
  function _o(l, t) {
    if (Xa === null) {
      var u = Xa = [];
      Mf = 0, Pu = Uc(), la = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Mf++, t.then(ys, ys), t;
  }
  function ys() {
    if (--Mf === 0 && Xa !== null) {
      la !== null && (la.status = "fulfilled");
      var l = Xa;
      Xa = null, Pu = 0, la = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Oo(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var hs = A.S;
  A.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && _o(l, t), hs !== null && hs(l, t);
  };
  var Du = E(null);
  function Df() {
    var l = Du.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? _(Du, Du.current) : _(Du, t.pool);
  }
  function ms() {
    var l = Df();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var Qa = Error(r(460)), rs = Error(r(474)), Le = Error(r(542)), Uf = { then: function() {
  } };
  function gs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function Ss(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ke, Ke), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ts(l), l;
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ts(l), l;
        }
        throw Za = t, Qa;
    }
  }
  var Za = null;
  function bs() {
    if (Za === null) throw Error(r(459));
    var l = Za;
    return Za = null, l;
  }
  function Ts(l) {
    if (l === Qa || l === Le)
      throw Error(r(483));
  }
  var wt = !1;
  function Rf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (I & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ge(l), fs(l, null, u), t;
    }
    return Be(l, a, t, u), Ge(l);
  }
  function Ca(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  function pf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Hf = !1;
  function Va() {
    if (Hf) {
      var l = la;
      if (l !== null) throw l;
    }
  }
  function La(l, t, u, a) {
    Hf = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = y : c.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var b = e.baseState;
      f = 0, g = y = i = null, c = n;
      do {
        var h = c.lane & -536870913, m = h !== c.lane;
        if (m ? (w & h) === h : (a & h) === h) {
          h !== 0 && h === Pu && (Hf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var j = l, Y = c;
            h = t;
            var ul = u;
            switch (Y.tag) {
              case 1:
                if (j = Y.payload, typeof j == "function") {
                  b = j.call(ul, b, h);
                  break l;
                }
                b = j;
                break l;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = Y.payload, h = typeof j == "function" ? j.call(ul, b, h) : j, h == null) break l;
                b = N({}, b, h);
                break l;
              case 2:
                wt = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [h] : m.push(h));
        } else
          m = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (y = g = m, i = b) : g = g.next = m, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = b), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), au |= f, l.lanes = f, l.memoizedState = b;
    }
  }
  function Es(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function As(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Es(u[l], t);
  }
  var ta = E(null), Je = E(0);
  function zs(l, t) {
    l = Qt, _(Je, l), _(ta, t), Qt = l | t.baseLanes;
  }
  function qf() {
    _(Je, Qt), _(ta, ta.current);
  }
  function xf() {
    Qt = Je.current, D(ta), D(Je);
  }
  var kt = 0, Z = null, ll = null, Sl = null, we = !1, ua = !1, Uu = !1, We = 0, Ka = 0, aa = null, Mo = 0;
  function ml() {
    throw Error(r(321));
  }
  function Yf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!wl(l[u], t[u])) return !1;
    return !0;
  }
  function Bf(l, t, u, a, e, n) {
    return kt = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = l === null || l.memoizedState === null ? f0 : c0, Uu = !1, n = u(a, e), Uu = !1, ua && (n = Os(
      t,
      u,
      a,
      e
    )), _s(l), n;
  }
  function _s(l) {
    A.H = ln;
    var t = ll !== null && ll.next !== null;
    if (kt = 0, Sl = ll = Z = null, we = !1, Ka = 0, aa = null, t) throw Error(r(300));
    l === null || _l || (l = l.dependencies, l !== null && Ze(l) && (_l = !0));
  }
  function Os(l, t, u, a) {
    Z = l;
    var e = 0;
    do {
      if (ua && (aa = null), Ka = 0, ua = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Sl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      A.H = qo, n = t(u, a);
    } while (ua);
    return n;
  }
  function Do() {
    var l = A.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ja(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (Z.flags |= 1024), t;
  }
  function Gf() {
    var l = We !== 0;
    return We = 0, l;
  }
  function jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Xf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      we = !1;
    }
    kt = 0, Sl = ll = Z = null, ua = !1, Ka = We = 0, aa = null;
  }
  function Xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Sl === null ? Z.memoizedState = Sl = l : Sl = Sl.next = l, Sl;
  }
  function bl() {
    if (ll === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = Sl === null ? Z.memoizedState : Sl.next;
    if (t !== null)
      Sl = t, ll = l;
    else {
      if (l === null)
        throw Z.alternate === null ? Error(r(467)) : Error(r(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, Sl === null ? Z.memoizedState = Sl = l : Sl = Sl.next = l;
    }
    return Sl;
  }
  function Qf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ja(l) {
    var t = Ka;
    return Ka += 1, aa === null && (aa = []), l = Ss(aa, l, t), t = Z, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? f0 : c0), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ja(l);
      if (l.$$typeof === Al) return Hl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Zf(l) {
    var t = null, u = Z.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Z.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Qf(), Z.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = hu;
    return t.index++, u;
  }
  function xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ke(l) {
    var t = bl();
    return Cf(t, ll, l);
  }
  function Cf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, y = t, g = !1;
      do {
        var b = y.lane & -536870913;
        if (b !== y.lane ? (w & b) === b : (kt & b) === b) {
          var h = y.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), b === Pu && (g = !0);
          else if ((kt & h) === h) {
            y = y.next, h === Pu && (g = !0);
            continue;
          } else
            b = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = b, f = n) : i = i.next = b, Z.lanes |= h, au |= h;
          b = y.action, Uu && u(n, b), n = y.hasEagerState ? y.eagerState : u(n, b);
        } else
          h = {
            lane: b,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, Z.lanes |= b, au |= b;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !wl(n, l.memoizedState) && (_l = !0, g && (u = la, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Vf(l) {
    var t = bl(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      wl(n, t.memoizedState) || (_l = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ms(l, t, u) {
    var a = Z, e = bl(), n = F;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !wl(
      (ll || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, _l = !0), e = e.queue;
    var c = Rs.bind(null, a, e, l);
    if (wa(2048, 8, c, [l]), e.getSnapshot !== t || f || Sl !== null && Sl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ea(
        9,
        Fe(),
        Us.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), fl === null) throw Error(r(349));
      n || (kt & 124) !== 0 || Ds(a, t, u);
    }
    return u;
  }
  function Ds(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Z.updateQueue, t === null ? (t = Qf(), Z.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Us(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Ns(t) && ps(l);
  }
  function Rs(l, t, u) {
    return u(function() {
      Ns(t) && ps(l);
    });
  }
  function Ns(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !wl(l, u);
    } catch (a) {
      return !0;
    }
  }
  function ps(l) {
    var t = $u(l, 2);
    t !== null && Pl(t, l, 2);
  }
  function Lf(l) {
    var t = Xl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Vt(!0);
        try {
          u();
        } finally {
          Vt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xt,
      lastRenderedState: l
    }, t;
  }
  function Hs(l, t, u, a) {
    return l.baseState = u, Cf(
      l,
      ll,
      typeof a == "function" ? a : xt
    );
  }
  function Uo(l, t, u, a, e) {
    if (Pe(l)) throw Error(r(485));
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
      A.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, qs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function qs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = A.T, f = {};
      A.T = f;
      try {
        var c = u(e, a), i = A.S;
        i !== null && i(f, c), xs(l, t, c);
      } catch (y) {
        Kf(l, t, y);
      } finally {
        A.T = n;
      }
    } else
      try {
        n = u(e, a), xs(l, t, n);
      } catch (y) {
        Kf(l, t, y);
      }
  }
  function xs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Ys(l, t, a);
      },
      function(a) {
        return Kf(l, t, a);
      }
    ) : Ys(l, t, u);
  }
  function Ys(l, t, u) {
    t.status = "fulfilled", t.value = u, Bs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, qs(l, u)));
  }
  function Kf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Bs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Bs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Gs(l, t) {
    return t;
  }
  function js(l, t) {
    if (F) {
      var u = fl.formState;
      if (u !== null) {
        l: {
          var a = Z;
          if (F) {
            if (yl) {
              t: {
                for (var e = yl, n = bt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                yl = ht(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            _u(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Xl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gs,
      lastRenderedState: t
    }, u.queue = a, u = a0.bind(
      null,
      Z,
      a
    ), a.dispatch = u, a = Lf(!1), n = kf.bind(
      null,
      Z,
      !1,
      a.queue
    ), a = Xl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Uo.bind(
      null,
      Z,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Xs(l) {
    var t = bl();
    return Qs(t, ll, l);
  }
  function Qs(l, t, u) {
    if (t = Cf(
      l,
      t,
      Gs
    )[0], l = ke(xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ja(t);
      } catch (f) {
        throw f === Qa ? Le : f;
      }
    else a = t;
    t = bl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Z.flags |= 2048, ea(
      9,
      Fe(),
      Ro.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Ro(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = bl(), u = ll;
    if (u !== null)
      return Qs(t, u, l);
    bl(), t = t.memoizedState, u = bl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ea(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Z.updateQueue, t === null && (t = Qf(), Z.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Cs() {
    return bl().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = Xl();
    a = a === void 0 ? null : a, Z.flags |= l, e.memoizedState = ea(
      1 | t,
      Fe(),
      u,
      a
    );
  }
  function wa(l, t, u, a) {
    var e = bl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ll !== null && a !== null && Yf(a, ll.memoizedState.deps) ? e.memoizedState = ea(t, n, u, a) : (Z.flags |= l, e.memoizedState = ea(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Vs(l, t) {
    Ie(8390656, 8, l, t);
  }
  function Ls(l, t) {
    wa(2048, 8, l, t);
  }
  function Ks(l, t) {
    return wa(4, 2, l, t);
  }
  function Js(l, t) {
    return wa(4, 4, l, t);
  }
  function ws(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ws(l, t, u) {
    u = u != null ? u.concat([l]) : null, wa(4, 4, ws.bind(null, t, l), u);
  }
  function Jf() {
  }
  function $s(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Yf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ks(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Yf(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function wf(l, t, u) {
    return u === void 0 || (kt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = P0(), Z.lanes |= l, au |= l, u);
  }
  function Fs(l, t, u, a) {
    return wl(u, t) ? u : ta.current !== null ? (l = wf(l, u, a), wl(l, t) || (_l = !0), l) : (kt & 42) === 0 ? (_l = !0, l.memoizedState = u) : (l = P0(), Z.lanes |= l, au |= l, t);
  }
  function Is(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = A.T, c = {};
    A.T = c, kf(l, !1, t, u);
    try {
      var i = e(), y = A.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Oo(
          i,
          a
        );
        Wa(
          l,
          t,
          g,
          Il(l)
        );
      } else
        Wa(
          l,
          t,
          a,
          Il(l)
        );
    } catch (b) {
      Wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: b },
        Il()
      );
    } finally {
      O.p = n, A.T = f;
    }
  }
  function No() {
  }
  function Wf(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = Ps(l).queue;
    Is(
      l,
      e,
      t,
      $,
      u === null ? No : function() {
        return l0(l), u(a);
      }
    );
  }
  function Ps(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: $
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function l0(l) {
    var t = Ps(l).next.queue;
    Wa(l, t, {}, Il());
  }
  function $f() {
    return Hl(oe);
  }
  function t0() {
    return bl().memoizedState;
  }
  function u0() {
    return bl().memoizedState;
  }
  function po(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = Il();
          l = Wt(u);
          var a = $t(t, l, u);
          a !== null && (Pl(a, t, u), Ca(a, t, u)), t = { cache: Of() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ho(l, t, u) {
    var a = Il();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l) ? e0(t, u) : (u = mf(l, t, u, a), u !== null && (Pl(u, l, a), n0(u, t, a)));
  }
  function a0(l, t, u) {
    var a = Il();
    Wa(l, t, u, a);
  }
  function Wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pe(l)) e0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, wl(c, f))
            return Be(l, t, e, 0), fl === null && Ye(), !1;
        } catch (i) {
        } finally {
        }
      if (u = mf(l, t, e, a), u !== null)
        return Pl(u, l, a), n0(u, t, a), !0;
    }
    return !1;
  }
  function kf(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Uc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l)) {
      if (t) throw Error(r(479));
    } else
      t = mf(
        l,
        u,
        a,
        2
      ), t !== null && Pl(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === Z || t !== null && t === Z;
  }
  function e0(l, t) {
    ua = we = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function n0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  var ln = {
    readContext: Hl,
    use: $e,
    useCallback: ml,
    useContext: ml,
    useEffect: ml,
    useImperativeHandle: ml,
    useLayoutEffect: ml,
    useInsertionEffect: ml,
    useMemo: ml,
    useReducer: ml,
    useRef: ml,
    useState: ml,
    useDebugValue: ml,
    useDeferredValue: ml,
    useTransition: ml,
    useSyncExternalStore: ml,
    useId: ml,
    useHostTransitionStatus: ml,
    useFormState: ml,
    useActionState: ml,
    useOptimistic: ml,
    useMemoCache: ml,
    useCacheRefresh: ml
  }, f0 = {
    readContext: Hl,
    use: $e,
    useCallback: function(l, t) {
      return Xl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Hl,
    useEffect: Vs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Ie(
        4194308,
        4,
        ws.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Ie(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Ie(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Xl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Vt(!0);
        try {
          l();
        } finally {
          Vt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Xl();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Vt(!0);
          try {
            u(t);
          } finally {
            Vt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Ho.bind(
        null,
        Z,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Lf(l);
      var t = l.queue, u = a0.bind(null, Z, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = Xl();
      return wf(u, l, t);
    },
    useTransition: function() {
      var l = Lf(!1);
      return l = Is.bind(
        null,
        Z,
        l.queue,
        !0,
        !1
      ), Xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Z, e = Xl();
      if (F) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), fl === null)
          throw Error(r(349));
        (w & 124) !== 0 || Ds(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Vs(Rs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ea(
        9,
        Fe(),
        Us.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Xl(), t = fl.identifierPrefix;
      if (F) {
        var u = pt, a = Nt;
        u = (a & ~(1 << 32 - Jl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = We++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mo++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: $f,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(l) {
      var t = Xl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = kf.bind(
        null,
        Z,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Zf,
    useCacheRefresh: function() {
      return Xl().memoizedState = po.bind(
        null,
        Z
      );
    }
  }, c0 = {
    readContext: Hl,
    use: $e,
    useCallback: $s,
    useContext: Hl,
    useEffect: Ls,
    useImperativeHandle: Ws,
    useInsertionEffect: Ks,
    useLayoutEffect: Js,
    useMemo: ks,
    useReducer: ke,
    useRef: Cs,
    useState: function() {
      return ke(xt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = bl();
      return Fs(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ke(xt)[0], t = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: t0,
    useHostTransitionStatus: $f,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l, t) {
      var u = bl();
      return Hs(u, ll, l, t);
    },
    useMemoCache: Zf,
    useCacheRefresh: u0
  }, qo = {
    readContext: Hl,
    use: $e,
    useCallback: $s,
    useContext: Hl,
    useEffect: Ls,
    useImperativeHandle: Ws,
    useInsertionEffect: Ks,
    useLayoutEffect: Js,
    useMemo: ks,
    useReducer: Vf,
    useRef: Cs,
    useState: function() {
      return Vf(xt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = bl();
      return ll === null ? wf(u, l, t) : Fs(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Vf(xt)[0], t = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: t0,
    useHostTransitionStatus: $f,
    useFormState: Zs,
    useActionState: Zs,
    useOptimistic: function(l, t) {
      var u = bl();
      return ll !== null ? Hs(u, ll, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zf,
    useCacheRefresh: u0
  }, na = null, $a = 0;
  function tn(l) {
    var t = $a;
    return $a += 1, na === null && (na = []), Ss(na, l, t);
  }
  function ka(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === W ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function i0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function s0(l) {
    function t(v, s) {
      if (l) {
        var o = v.deletions;
        o === null ? (v.deletions = [s], v.flags |= 16) : o.push(s);
      }
    }
    function u(v, s) {
      if (!l) return null;
      for (; s !== null; )
        t(v, s), s = s.sibling;
      return null;
    }
    function a(v) {
      for (var s = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? s.set(v.key, v) : s.set(v.index, v), v = v.sibling;
      return s;
    }
    function e(v, s) {
      return v = Rt(v, s), v.index = 0, v.sibling = null, v;
    }
    function n(v, s, o) {
      return v.index = o, l ? (o = v.alternate, o !== null ? (o = o.index, o < s ? (v.flags |= 67108866, s) : o) : (v.flags |= 67108866, s)) : (v.flags |= 1048576, s);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, s, o, S) {
      return s === null || s.tag !== 6 ? (s = gf(o, v.mode, S), s.return = v, s) : (s = e(s, o), s.return = v, s);
    }
    function i(v, s, o, S) {
      var U = o.type;
      return U === xl ? g(
        v,
        s,
        o.props.children,
        S,
        o.key
      ) : s !== null && (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Vl && i0(U) === s.type) ? (s = e(s, o.props), ka(s, o), s.return = v, s) : (s = je(
        o.type,
        o.key,
        o.props,
        null,
        v.mode,
        S
      ), ka(s, o), s.return = v, s);
    }
    function y(v, s, o, S) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== o.containerInfo || s.stateNode.implementation !== o.implementation ? (s = Sf(o, v.mode, S), s.return = v, s) : (s = e(s, o.children || []), s.return = v, s);
    }
    function g(v, s, o, S, U) {
      return s === null || s.tag !== 7 ? (s = Tu(
        o,
        v.mode,
        S,
        U
      ), s.return = v, s) : (s = e(s, o), s.return = v, s);
    }
    function b(v, s, o) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = gf(
          "" + s,
          v.mode,
          o
        ), s.return = v, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case ol:
            return o = je(
              s.type,
              s.key,
              s.props,
              null,
              v.mode,
              o
            ), ka(o, s), o.return = v, o;
          case Bl:
            return s = Sf(
              s,
              v.mode,
              o
            ), s.return = v, s;
          case Vl:
            var S = s._init;
            return s = S(s._payload), b(v, s, o);
        }
        if (z(s) || ut(s))
          return s = Tu(
            s,
            v.mode,
            o,
            null
          ), s.return = v, s;
        if (typeof s.then == "function")
          return b(v, tn(s), o);
        if (s.$$typeof === Al)
          return b(
            v,
            Ce(v, s),
            o
          );
        un(v, s);
      }
      return null;
    }
    function h(v, s, o, S) {
      var U = s !== null ? s.key : null;
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return U !== null ? null : c(v, s, "" + o, S);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ol:
            return o.key === U ? i(v, s, o, S) : null;
          case Bl:
            return o.key === U ? y(v, s, o, S) : null;
          case Vl:
            return U = o._init, o = U(o._payload), h(v, s, o, S);
        }
        if (z(o) || ut(o))
          return U !== null ? null : g(v, s, o, S, null);
        if (typeof o.then == "function")
          return h(
            v,
            s,
            tn(o),
            S
          );
        if (o.$$typeof === Al)
          return h(
            v,
            s,
            Ce(v, o),
            S
          );
        un(v, o);
      }
      return null;
    }
    function m(v, s, o, S, U) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return v = v.get(o) || null, c(s, v, "" + S, U);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ol:
            return v = v.get(
              S.key === null ? o : S.key
            ) || null, i(s, v, S, U);
          case Bl:
            return v = v.get(
              S.key === null ? o : S.key
            ) || null, y(s, v, S, U);
          case Vl:
            var C = S._init;
            return S = C(S._payload), m(
              v,
              s,
              o,
              S,
              U
            );
        }
        if (z(S) || ut(S))
          return v = v.get(o) || null, g(s, v, S, U, null);
        if (typeof S.then == "function")
          return m(
            v,
            s,
            o,
            tn(S),
            U
          );
        if (S.$$typeof === Al)
          return m(
            v,
            s,
            o,
            Ce(s, S),
            U
          );
        un(s, S);
      }
      return null;
    }
    function j(v, s, o, S) {
      for (var U = null, C = null, p = s, B = s = 0, Ml = null; p !== null && B < o.length; B++) {
        p.index > B ? (Ml = p, p = null) : Ml = p.sibling;
        var k = h(
          v,
          p,
          o[B],
          S
        );
        if (k === null) {
          p === null && (p = Ml);
          break;
        }
        l && p && k.alternate === null && t(v, p), s = n(k, s, B), C === null ? U = k : C.sibling = k, C = k, p = Ml;
      }
      if (B === o.length)
        return u(v, p), F && Au(v, B), U;
      if (p === null) {
        for (; B < o.length; B++)
          p = b(v, o[B], S), p !== null && (s = n(
            p,
            s,
            B
          ), C === null ? U = p : C.sibling = p, C = p);
        return F && Au(v, B), U;
      }
      for (p = a(p); B < o.length; B++)
        Ml = m(
          p,
          v,
          B,
          o[B],
          S
        ), Ml !== null && (l && Ml.alternate !== null && p.delete(
          Ml.key === null ? B : Ml.key
        ), s = n(
          Ml,
          s,
          B
        ), C === null ? U = Ml : C.sibling = Ml, C = Ml);
      return l && p.forEach(function(ou) {
        return t(v, ou);
      }), F && Au(v, B), U;
    }
    function Y(v, s, o, S) {
      if (o == null) throw Error(r(151));
      for (var U = null, C = null, p = s, B = s = 0, Ml = null, k = o.next(); p !== null && !k.done; B++, k = o.next()) {
        p.index > B ? (Ml = p, p = null) : Ml = p.sibling;
        var ou = h(v, p, k.value, S);
        if (ou === null) {
          p === null && (p = Ml);
          break;
        }
        l && p && ou.alternate === null && t(v, p), s = n(ou, s, B), C === null ? U = ou : C.sibling = ou, C = ou, p = Ml;
      }
      if (k.done)
        return u(v, p), F && Au(v, B), U;
      if (p === null) {
        for (; !k.done; B++, k = o.next())
          k = b(v, k.value, S), k !== null && (s = n(k, s, B), C === null ? U = k : C.sibling = k, C = k);
        return F && Au(v, B), U;
      }
      for (p = a(p); !k.done; B++, k = o.next())
        k = m(p, v, B, k.value, S), k !== null && (l && k.alternate !== null && p.delete(k.key === null ? B : k.key), s = n(k, s, B), C === null ? U = k : C.sibling = k, C = k);
      return l && p.forEach(function(x1) {
        return t(v, x1);
      }), F && Au(v, B), U;
    }
    function ul(v, s, o, S) {
      if (typeof o == "object" && o !== null && o.type === xl && o.key === null && (o = o.props.children), typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ol:
            l: {
              for (var U = o.key; s !== null; ) {
                if (s.key === U) {
                  if (U = o.type, U === xl) {
                    if (s.tag === 7) {
                      u(
                        v,
                        s.sibling
                      ), S = e(
                        s,
                        o.props.children
                      ), S.return = v, v = S;
                      break l;
                    }
                  } else if (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Vl && i0(U) === s.type) {
                    u(
                      v,
                      s.sibling
                    ), S = e(s, o.props), ka(S, o), S.return = v, v = S;
                    break l;
                  }
                  u(v, s);
                  break;
                } else t(v, s);
                s = s.sibling;
              }
              o.type === xl ? (S = Tu(
                o.props.children,
                v.mode,
                S,
                o.key
              ), S.return = v, v = S) : (S = je(
                o.type,
                o.key,
                o.props,
                null,
                v.mode,
                S
              ), ka(S, o), S.return = v, v = S);
            }
            return f(v);
          case Bl:
            l: {
              for (U = o.key; s !== null; ) {
                if (s.key === U)
                  if (s.tag === 4 && s.stateNode.containerInfo === o.containerInfo && s.stateNode.implementation === o.implementation) {
                    u(
                      v,
                      s.sibling
                    ), S = e(s, o.children || []), S.return = v, v = S;
                    break l;
                  } else {
                    u(v, s);
                    break;
                  }
                else t(v, s);
                s = s.sibling;
              }
              S = Sf(o, v.mode, S), S.return = v, v = S;
            }
            return f(v);
          case Vl:
            return U = o._init, o = U(o._payload), ul(
              v,
              s,
              o,
              S
            );
        }
        if (z(o))
          return j(
            v,
            s,
            o,
            S
          );
        if (ut(o)) {
          if (U = ut(o), typeof U != "function") throw Error(r(150));
          return o = U.call(o), Y(
            v,
            s,
            o,
            S
          );
        }
        if (typeof o.then == "function")
          return ul(
            v,
            s,
            tn(o),
            S
          );
        if (o.$$typeof === Al)
          return ul(
            v,
            s,
            Ce(v, o),
            S
          );
        un(v, o);
      }
      return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, s !== null && s.tag === 6 ? (u(v, s.sibling), S = e(s, o), S.return = v, v = S) : (u(v, s), S = gf(o, v.mode, S), S.return = v, v = S), f(v)) : u(v, s);
    }
    return function(v, s, o, S) {
      try {
        $a = 0;
        var U = ul(
          v,
          s,
          o,
          S
        );
        return na = null, U;
      } catch (p) {
        if (p === Qa || p === Le) throw p;
        var C = Wl(29, p, null, v.mode);
        return C.lanes = S, C.return = v, C;
      } finally {
      }
    };
  }
  var fa = s0(!0), d0 = s0(!1), st = E(null), Tt = null;
  function Ft(l) {
    var t = l.alternate;
    _(El, El.current & 1), _(st, l), Tt === null && (t === null || ta.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function v0(l) {
    if (l.tag === 22) {
      if (_(El, El.current), _(st, l), Tt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Tt = l);
      }
    } else It();
  }
  function It() {
    _(El, El.current), _(st, st.current);
  }
  function Yt(l) {
    D(st), Tt === l && (Tt = null), D(El);
  }
  var El = E(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Qc(u)))
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
  function Ff(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var If = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = Il(), e = Wt(a);
      e.payload = t, u != null && (e.callback = u), t = $t(l, e, a), t !== null && (Pl(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = Il(), e = Wt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = $t(l, e, a), t !== null && (Pl(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = Il(), a = Wt(u);
      a.tag = 2, t != null && (a.callback = t), t = $t(l, a, u), t !== null && (Pl(t, l, u), Ca(t, l, u));
    }
  };
  function o0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : !0;
  }
  function y0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && If.enqueueReplaceState(t, t.state, null);
  }
  function Ru(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = N({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var en = typeof reportError == "function" ? reportError : function(l) {
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
  function h0(l) {
    en(l);
  }
  function m0(l) {
    console.error(l);
  }
  function r0(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function g0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Pf(l, t, u) {
    return u = Wt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nn(l, t);
    }, u;
  }
  function S0(l) {
    return l = Wt(l), l.tag = 3, l;
  }
  function b0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        g0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      g0(t, u, a), typeof e != "function" && (eu === null ? eu = /* @__PURE__ */ new Set([this]) : eu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function xo(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ga(
        t,
        u,
        e,
        !0
      ), u = st.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Tt === null ? zc() : u.alternate === null && hl === 0 && (hl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Uf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Oc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Uf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Oc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Oc(l, a, e), zc(), !1;
    }
    if (F)
      return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Ef && (l = Error(r(422), { cause: a }), Ba(nt(l, u)))) : (a !== Ef && (t = Error(r(423), {
        cause: a
      }), Ba(
        nt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = nt(a, u), e = Pf(
        l.stateNode,
        a,
        e
      ), pf(l, e), hl !== 4 && (hl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = nt(n, u), ae === null ? ae = [n] : ae.push(n), hl !== 4 && (hl = 2), t === null) return !0;
    a = nt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = Pf(u.stateNode, a, l), pf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (eu === null || !eu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = S0(e), b0(
              e,
              l,
              u,
              a
            ), pf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var T0 = Error(r(461)), _l = !1;
  function Ul(l, t, u, a) {
    t.child = l === null ? d0(t, null, u, a) : fa(
      t,
      l.child,
      u,
      a
    );
  }
  function E0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Mu(t), a = Bf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Gf(), l !== null && !_l ? (jf(l, t, e), Bt(l, t, e)) : (F && c && bf(t), t.flags |= 1, Ul(l, t, a, e), t.child);
  }
  function A0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !rf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, z0(
        l,
        t,
        n,
        a,
        e
      )) : (l = je(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !cc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(f, a) && l.ref === t.ref)
        return Bt(l, t, e);
    }
    return t.flags |= 1, l = Rt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function z0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (_l = !1, t.pendingProps = a = n, cc(l, e))
          (l.flags & 131072) !== 0 && (_l = !0);
        else
          return t.lanes = l.lanes, Bt(l, t, e);
    }
    return lc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function _0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return O0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? zs(t, n) : qf(), v0(t);
      else
        return t.lanes = t.childLanes = 536870912, O0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ve(t, n.cachePool), zs(t, n), It(), t.memoizedState = null) : (l !== null && Ve(t, null), qf(), It());
    return Ul(l, t, e, u), t.child;
  }
  function O0(l, t, u, a) {
    var e = Df();
    return e = e === null ? null : { parent: Tl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), qf(), v0(t), l !== null && Ga(l, t, a, !0), null;
  }
  function fn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function lc(l, t, u, a, e) {
    return Mu(t), u = Bf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Gf(), l !== null && !_l ? (jf(l, t, e), Bt(l, t, e)) : (F && a && bf(t), t.flags |= 1, Ul(l, t, u, e), t.child);
  }
  function M0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = Os(
      t,
      a,
      u,
      e
    ), _s(l), a = Gf(), l !== null && !_l ? (jf(l, t, n), Bt(l, t, n)) : (F && a && bf(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function D0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = ku, f = u.contextType;
      typeof f == "object" && f !== null && (n = Hl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = If, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Rf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Hl(f) : ku, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Ff(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && If.enqueueReplaceState(n, n.state, null), La(t, a, n, e), Va(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ru(u, c);
      n.props = i;
      var y = n.context, g = u.contextType;
      f = ku, typeof g == "object" && g !== null && (f = Hl(g));
      var b = u.getDerivedStateFromProps;
      g = typeof b == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && y0(
        t,
        n,
        a,
        f
      ), wt = !1;
      var h = t.memoizedState;
      n.state = h, La(t, a, n, e), Va(), y = t.memoizedState, c || h !== y || wt ? (typeof b == "function" && (Ff(
        t,
        u,
        b,
        a
      ), y = t.memoizedState), (i = wt || o0(
        t,
        u,
        i,
        a,
        h,
        y,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Nf(l, t), f = t.memoizedProps, g = Ru(u, f), n.props = g, b = t.pendingProps, h = n.context, y = u.contextType, i = ku, typeof y == "object" && y !== null && (i = Hl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== b || h !== i) && y0(
        t,
        n,
        a,
        i
      ), wt = !1, h = t.memoizedState, n.state = h, La(t, a, n, e), Va();
      var m = t.memoizedState;
      f !== b || h !== m || wt || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof c == "function" && (Ff(
        t,
        u,
        c,
        a
      ), m = t.memoizedState), (g = wt || o0(
        t,
        u,
        g,
        a,
        h,
        m,
        i
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, fn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = fa(
      t,
      l.child,
      null,
      e
    ), t.child = fa(
      t,
      null,
      u,
      e
    )) : Ul(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Bt(
      l,
      t,
      e
    ), l;
  }
  function U0(l, t, u, a) {
    return Ya(), t.flags |= 256, Ul(l, t, u, a), t.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(l) {
    return { baseLanes: l, cachePool: ms() };
  }
  function ac(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= dt), l;
  }
  function R0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (e ? Ft(t) : It(), F) {
          var c = yl, i;
          if (i = c) {
            l: {
              for (i = c, c = bt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = ht(
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
              treeContext: Eu !== null ? { id: Nt, overflow: pt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = Wl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Yl = t, yl = null, i = !0) : i = !1;
          }
          i || _u(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Qc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Yt(t);
      }
      return c = a.children, a = a.fallback, e ? (It(), e = t.mode, c = cn(
        { mode: "hidden", children: c },
        e
      ), a = Tu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = uc(u), e.childLanes = ac(
        l,
        f,
        u
      ), t.memoizedState = tc, a) : (Ft(t), ec(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Ft(t), t.flags &= -257, t = nc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (It(), t.child = l.child, t.flags |= 128, t = null) : (It(), e = a.fallback, c = t.mode, a = cn(
          { mode: "visible", children: a.children },
          c
        ), e = Tu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, fa(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = uc(u), a.childLanes = ac(
          l,
          f,
          u
        ), t.memoizedState = tc, t = e);
      else if (Ft(t), Qc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(r(419)), a.stack = "", a.digest = f, Ba({ value: a, source: null, stack: null }), t = nc(
          l,
          t,
          u
        );
      } else if (_l || Ga(l, t, u, !1), f = (u & l.childLanes) !== 0, _l || f) {
        if (f = fl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Qn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, $u(l, a), Pl(f, l, a), T0;
        c.data === "$?" || zc(), t = nc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, yl = ht(
          c.nextSibling
        ), Yl = t, F = !0, zu = null, bt = !1, l !== null && (ct[it++] = Nt, ct[it++] = pt, ct[it++] = Eu, Nt = l.id, pt = l.overflow, Eu = t), t = ec(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (It(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = Rt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Rt(y, e) : (e = Tu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = uc(u) : (i = c.cachePool, i !== null ? (y = Tl._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ms(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ac(
      l,
      f,
      u
    ), t.memoizedState = tc, a) : (Ft(t), u = l.child, l = u.sibling, u = Rt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ec(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = Wl(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function nc(l, t, u) {
    return fa(t, l.child, null, u), l = ec(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function N0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), zf(l.return, t, u);
  }
  function fc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function p0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Ul(l, t, a.children, u), a = El.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && N0(l, u, t);
          else if (l.tag === 19)
            N0(l, u, t);
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
      a &= 1;
    }
    switch (_(El, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && an(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), fc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        fc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), au |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Ga(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = Rt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Rt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function Yo(l, t, u) {
    switch (t.tag) {
      case 3:
        il(t, t.stateNode.containerInfo), Jt(t, Tl, l.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        il(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ft(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? R0(l, t, u) : (Ft(t), l = Bt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Ft(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ga(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return p0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(El, El.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, _0(l, t, u);
      case 24:
        Jt(t, Tl, l.memoizedState.cache);
    }
    return Bt(l, t, u);
  }
  function H0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        _l = !0;
      else {
        if (!cc(l, u) && (t.flags & 128) === 0)
          return _l = !1, Yo(
            l,
            t,
            u
          );
        _l = (l.flags & 131072) !== 0;
      }
    else
      _l = !1, F && (t.flags & 1048576) !== 0 && is(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            rf(a) ? (l = Ru(a, l), t.tag = 1, t = D0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = lc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === mt) {
                t.tag = 11, t = E0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === rt) {
                t.tag = 14, t = A0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = Mt(a) || a, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return lc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Ru(
          a,
          t.pendingProps
        ), D0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (il(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Nf(l, t), La(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Jt(t, Tl, a), a !== n.cache && _f(
            t,
            [Tl],
            u,
            !0
          ), Va(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = U0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = nt(
                Error(r(424)),
                t
              ), Ba(e), t = U0(
                l,
                t,
                a,
                u
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
              for (yl = ht(l.firstChild), Yl = t, F = !0, zu = null, bt = !0, u = d0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ya(), a === e) {
              t = Bt(
                l,
                t,
                u
              );
              break l;
            }
            Ul(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return fn(l, t), l === null ? (u = Bd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : F || (u = t.type, l = t.pendingProps, a = An(
          X.current
        ).createElement(u), a[pl] = t, a[Gl] = l, Nl(a, u, l), zl(a), t.stateNode = a) : t.memoizedState = Bd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Yn(t), l === null && F && (a = t.stateNode = qd(
          t.type,
          t.pendingProps,
          X.current
        ), Yl = t, bt = !0, e = yl, cu(t.type) ? (Zc = e, yl = ht(
          a.firstChild
        )) : yl = e), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((e = a = yl) && (a = s1(
          a,
          t.type,
          t.pendingProps,
          bt
        ), a !== null ? (t.stateNode = a, Yl = t, yl = ht(
          a.firstChild
        ), bt = !1, e = !0) : e = !1), e || _u(t)), Yn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Gc(e, n) ? a = null : f !== null && Gc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Bf(
          l,
          t,
          Do,
          null,
          null,
          u
        ), oe._currentValue = e), fn(l, t), Ul(l, t, a, u), t.child;
      case 6:
        return l === null && F && ((l = u = yl) && (u = d1(
          u,
          t.pendingProps,
          bt
        ), u !== null ? (t.stateNode = u, Yl = t, yl = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return R0(l, t, u);
      case 4:
        return il(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = fa(
          t,
          null,
          a,
          u
        ) : Ul(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return E0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Ul(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Jt(t, t.type, a.value), Ul(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Hl(e), a = a(e), t.flags |= 1, Ul(l, t, a, u), t.child;
      case 14:
        return A0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return z0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return p0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Rt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return _0(l, t, u);
      case 24:
        return Mu(t), a = Hl(Tl), l === null ? (e = Df(), e === null && (e = fl, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Rf(t), Jt(t, Tl, e)) : ((l.lanes & u) !== 0 && (Nf(l, t), La(t, null, null, u), Va()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Jt(t, Tl, a)) : (a = n.cache, Jt(t, Tl, a), a !== e.cache && _f(
          t,
          [Tl],
          u,
          !0
        ))), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function q0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Zd(t)) {
      if (t = st.current, t !== null && ((w & 4194048) === w ? Tt !== null : (w & 62914560) !== w && (w & 536870912) === 0 || t !== Tt))
        throw Za = Uf, rs;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, da |= t);
  }
  function Fa(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Bo(l, t, u) {
    var a = t.pendingProps;
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
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(Tl), Ct(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (xa(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), dl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Gt(t), u !== null ? (dl(t), q0(t, u)) : (dl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Gt(t), dl(t), q0(t, u)) : (dl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Gt(t), dl(t), t.flags &= -16777217), null;
      case 27:
        be(t), u = X.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return dl(t), null;
          }
          l = G.current, xa(t) ? ss(t) : (l = qd(e, a, u), t.stateNode = l, Gt(t));
        }
        return dl(t), null;
      case 5:
        if (be(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return dl(t), null;
          }
          if (l = G.current, xa(t))
            ss(t);
          else {
            switch (e = An(
              X.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[pl] = t, l[Gl] = a;
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
            l: switch (Nl(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
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
        return dl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = X.current, xa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Yl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[pl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Md(l.nodeValue, u)), l || _u(t);
          } else
            l = An(l).createTextNode(
              a
            ), l[pl] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = xa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[pl] = t;
            } else
              Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), e = !1;
          } else
            e = vs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        if (Yt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), dl(t), null;
      case 4:
        return Ct(), l === null && Hc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return qt(t.type), dl(t), null;
      case 19:
        if (D(El), e = t.memoizedState, e === null) return dl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Fa(e, !1);
          else {
            if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, Fa(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    cs(u, l), u = u.sibling;
                  return _(
                    El,
                    El.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && St() > on && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), Fa(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !F)
                return dl(t), null;
            } else
              2 * St() - e.renderingStartTime > on && u !== 536870912 && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = St(), t.sibling = null, l = El.current, _(El, a ? l & 1 | 2 : l & 1), t) : (dl(t), null);
      case 22:
      case 23:
        return Yt(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && D(Du), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(Tl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Go(l, t) {
    switch (Tf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(Tl), Ct(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (Yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ya();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return D(El), null;
      case 4:
        return Ct(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return Yt(t), xf(), l !== null && D(Du), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function x0(l, t) {
    switch (Tf(t), t.tag) {
      case 3:
        qt(Tl), Ct();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        D(El);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        Yt(t), xf(), l !== null && D(Du);
        break;
      case 24:
        qt(Tl);
    }
  }
  function Ia(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      nl(t, t.return, c);
    }
  }
  function Pt(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, y = c;
              try {
                y();
              } catch (g) {
                nl(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      nl(t, t.return, g);
    }
  }
  function Y0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        As(t, u);
      } catch (a) {
        nl(l, l.return, a);
      }
    }
  }
  function B0(l, t, u) {
    u.props = Ru(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      nl(l, t, a);
    }
  }
  function Pa(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      nl(l, t, e);
    }
  }
  function Et(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          nl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          nl(l, t, e);
        }
      else u.current = null;
  }
  function G0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function ic(l, t, u) {
    try {
      var a = l.stateNode;
      e1(a, l.type, u, t), a[Gl] = t;
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function j0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && cu(l.type) || l.tag === 4;
  }
  function sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || j0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && cu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function dc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = En));
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (dc(l, t, u), l = l.sibling; l !== null; )
        dc(l, t, u), l = l.sibling;
  }
  function dn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dn(l, t, u), l = l.sibling; l !== null; )
        dn(l, t, u), l = l.sibling;
  }
  function X0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Nl(t, a, u), t[pl] = l, t[Gl] = u;
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  var jt = !1, rl = !1, vc = !1, Q0 = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function jo(l, t) {
    if (l = l.containerInfo, Yc = Un, l = Fi(l), sf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch (Y) {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, y = 0, g = 0, b = l, h = null;
            t: for (; ; ) {
              for (var m; b !== u || e !== 0 && b.nodeType !== 3 || (c = f + e), b !== n || a !== 0 && b.nodeType !== 3 || (i = f + a), b.nodeType === 3 && (f += b.nodeValue.length), (m = b.firstChild) !== null; )
                h = b, b = m;
              for (; ; ) {
                if (b === l) break t;
                if (h === u && ++y === e && (c = f), h === n && ++g === a && (i = f), (m = b.nextSibling) !== null) break;
                b = h, h = b.parentNode;
              }
              b = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bc = { focusedElem: l, selectionRange: u }, Un = !1, Ol = t; Ol !== null; )
      if (t = Ol, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var j = Ru(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    j,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Y) {
                  nl(
                    u,
                    u.return,
                    Y
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Xc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ol = l;
            break;
          }
          Ol = t.return;
        }
  }
  function Z0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        lu(l, u), a & 4 && Ia(5, u);
        break;
      case 1:
        if (lu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              nl(u, u.return, f);
            }
          else {
            var e = Ru(
              u.type,
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
              nl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Y0(u), a & 512 && Pa(u, u.return);
        break;
      case 3:
        if (lu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            As(l, t);
          } catch (f) {
            nl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && X0(u);
      case 26:
      case 5:
        lu(l, u), t === null && a & 4 && G0(u), a & 512 && Pa(u, u.return);
        break;
      case 12:
        lu(l, u);
        break;
      case 13:
        lu(l, u), a & 4 && L0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = wo.bind(
          null,
          u
        ), v1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || jt, !a) {
          t = t !== null && t.memoizedState !== null || rl, e = jt;
          var n = rl;
          jt = a, (rl = t) && !n ? tu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : lu(l, u), jt = e, rl = n;
        }
        break;
      case 30:
        break;
      default:
        lu(l, u);
    }
  }
  function C0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, C0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Vn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var sl = null, Ql = !1;
  function Xt(l, t, u) {
    for (u = u.child; u !== null; )
      V0(l, t, u), u = u.sibling;
  }
  function V0(l, t, u) {
    if (Kl && typeof Kl.onCommitFiberUnmount == "function")
      try {
        Kl.onCommitFiberUnmount(Ta, u);
      } catch (n) {
      }
    switch (u.tag) {
      case 26:
        rl || Et(u, t), Xt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        rl || Et(u, t);
        var a = sl, e = Ql;
        cu(u.type) && (sl = u.stateNode, Ql = !1), Xt(
          l,
          t,
          u
        ), ie(u.stateNode), sl = a, Ql = e;
        break;
      case 5:
        rl || Et(u, t);
      case 6:
        if (a = sl, e = Ql, sl = null, Xt(
          l,
          t,
          u
        ), sl = a, Ql = e, sl !== null)
          if (Ql)
            try {
              (sl.nodeType === 9 ? sl.body : sl.nodeName === "HTML" ? sl.ownerDocument.body : sl).removeChild(u.stateNode);
            } catch (n) {
              nl(
                u,
                t,
                n
              );
            }
          else
            try {
              sl.removeChild(u.stateNode);
            } catch (n) {
              nl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        sl !== null && (Ql ? (l = sl, pd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : pd(sl, u.stateNode));
        break;
      case 4:
        a = sl, e = Ql, sl = u.stateNode.containerInfo, Ql = !0, Xt(
          l,
          t,
          u
        ), sl = a, Ql = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        rl || Pt(2, u, t), rl || Pt(4, u, t), Xt(
          l,
          t,
          u
        );
        break;
      case 1:
        rl || (Et(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && B0(
          u,
          t,
          a
        )), Xt(
          l,
          t,
          u
        );
        break;
      case 21:
        Xt(
          l,
          t,
          u
        );
        break;
      case 22:
        rl = (a = rl) || u.memoizedState !== null, Xt(
          l,
          t,
          u
        ), rl = a;
        break;
      default:
        Xt(
          l,
          t,
          u
        );
    }
  }
  function L0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        nl(t, t.return, u);
      }
  }
  function Xo(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Q0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Q0()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function oc(l, t) {
    var u = Xo(l);
    t.forEach(function(a) {
      var e = Wo.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function $l(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (cu(c.type)) {
                sl = c.stateNode, Ql = !1;
                break l;
              }
              break;
            case 5:
              sl = c.stateNode, Ql = !1;
              break l;
            case 3:
            case 4:
              sl = c.stateNode.containerInfo, Ql = !0;
              break l;
          }
          c = c.return;
        }
        if (sl === null) throw Error(r(160));
        V0(n, f, e), sl = null, Ql = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        K0(t, l), t = t.sibling;
  }
  var yt = null;
  function K0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), kl(l), a & 4 && (Pt(3, l, l.return), Ia(3, l), Pt(5, l, l.return));
        break;
      case 1:
        $l(t, l), kl(l), a & 512 && (rl || u === null || Et(u, u.return)), a & 64 && jt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = yt;
        if ($l(t, l), kl(l), a & 512 && (rl || u === null || Et(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[za] || n[pl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Nl(n, a, u), n[pl] = l, zl(n), a = n;
                      break l;
                    case "link":
                      var f = Xd(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Nl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Xd(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Nl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[pl] = l, zl(n), a = n;
                }
                l.stateNode = a;
              } else
                Qd(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = jd(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Qd(
              e,
              l.type,
              l.stateNode
            ) : jd(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && ic(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        $l(t, l), kl(l), a & 512 && (rl || u === null || Et(u, u.return)), u !== null && a & 4 && ic(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if ($l(t, l), kl(l), a & 512 && (rl || u === null || Et(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Cu(e, "");
          } catch (m) {
            nl(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, ic(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (vc = !0);
        break;
      case 6:
        if ($l(t, l), kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            nl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (On = null, e = yt, yt = zn(t.containerInfo), $l(t, l), yt = e, kl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (m) {
            nl(l, l.return, m);
          }
        vc && (vc = !1, J0(l));
        break;
      case 4:
        a = yt, yt = zn(
          l.stateNode.containerInfo
        ), $l(t, l), kl(l), yt = a;
        break;
      case 12:
        $l(t, l), kl(l);
        break;
      case 13:
        $l(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sc = St()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = jt, g = rl;
        if (jt = y || e, rl = g || i, $l(t, l), rl = g, jt = y, kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || jt || rl || Nu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var b = i.memoizedProps.style, h = b != null && b.hasOwnProperty("display") ? b.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (m) {
                  nl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  nl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, oc(l, u))));
        break;
      case 19:
        $l(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (j0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = sc(l);
            dn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ""), u.flags &= -33);
            var c = sc(l);
            dn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = sc(l);
            dc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (g) {
        nl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function J0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        J0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Z0(l, t.alternate, t), t = t.sibling;
  }
  function Nu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Nu(t);
          break;
        case 1:
          Et(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && B0(
            t,
            t.return,
            u
          ), Nu(t);
          break;
        case 27:
          ie(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), Nu(t);
          break;
        case 22:
          t.memoizedState === null && Nu(t);
          break;
        case 30:
          Nu(t);
          break;
        default:
          Nu(t);
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(
            e,
            n,
            u
          ), Ia(4, n);
          break;
        case 1:
          if (tu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              nl(a, a.return, y);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Es(i[e], c);
            } catch (y) {
              nl(a, a.return, y);
            }
          }
          u && f & 64 && Y0(n), Pa(n, n.return);
          break;
        case 27:
          X0(n);
        case 26:
        case 5:
          tu(
            e,
            n,
            u
          ), u && a === null && f & 4 && G0(n), Pa(n, n.return);
          break;
        case 12:
          tu(
            e,
            n,
            u
          );
          break;
        case 13:
          tu(
            e,
            n,
            u
          ), u && f & 4 && L0(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(
            e,
            n,
            u
          ), Pa(n, n.return);
          break;
        case 30:
          break;
        default:
          tu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function yc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ja(u));
  }
  function hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l));
  }
  function At(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        w0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function w0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(
          l,
          t,
          u,
          a
        ), e & 2048 && Ia(9, t);
        break;
      case 1:
        At(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        At(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l)));
        break;
      case 12:
        if (e & 2048) {
          At(
            l,
            t,
            u,
            a
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
            nl(t, t.return, i);
          }
        } else
          At(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        At(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? At(
          l,
          t,
          u,
          a
        ) : le(l, t) : n._visibility & 2 ? At(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ca(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && yc(f, t);
        break;
      case 24:
        At(
          l,
          t,
          u,
          a
        ), e & 2048 && hc(t.alternate, t);
        break;
      default:
        At(
          l,
          t,
          u,
          a
        );
    }
  }
  function ca(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            n,
            f,
            c,
            i,
            e
          ), Ia(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ca(
            n,
            f,
            c,
            i,
            e
          ) : le(
            n,
            f
          ) : (g._visibility |= 2, ca(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && yc(
            f.alternate,
            f
          );
          break;
        case 24:
          ca(
            n,
            f,
            c,
            i,
            e
          ), e && y & 2048 && hc(f.alternate, f);
          break;
        default:
          ca(
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
  function le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            le(u, a), e & 2048 && yc(
              a.alternate,
              a
            );
            break;
          case 24:
            le(u, a), e & 2048 && hc(a.alternate, a);
            break;
          default:
            le(u, a);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function ia(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; )
        W0(l), l = l.sibling;
  }
  function W0(l) {
    switch (l.tag) {
      case 26:
        ia(l), l.flags & te && l.memoizedState !== null && _1(
          yt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ia(l);
        break;
      case 3:
      case 4:
        var t = yt;
        yt = zn(l.stateNode.containerInfo), ia(l), yt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = te, te = 16777216, ia(l), te = t) : ia(l));
        break;
      default:
        ia(l);
    }
  }
  function $0(l) {
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
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, F0(
            a,
            l
          );
        }
      $0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        k0(l), l = l.sibling;
  }
  function k0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ue(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        ue(l);
        break;
      case 12:
        ue(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : ue(l);
        break;
      default:
        ue(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, F0(
            a,
            l
          );
        }
      $0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), vn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function F0(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ja(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ol = a;
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling, n = a.return;
          if (C0(a), a === u) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ol = e;
            break l;
          }
          Ol = n;
        }
    }
  }
  var Qo = {
    getCacheForType: function(l) {
      var t = Hl(Tl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Zo = typeof WeakMap == "function" ? WeakMap : Map, I = 0, fl = null, V = null, w = 0, P = 0, Fl = null, uu = !1, sa = !1, mc = !1, Qt = 0, hl = 0, au = 0, pu = 0, rc = 0, dt = 0, da = 0, ae = null, Zl = null, gc = !1, Sc = 0, on = 1 / 0, yn = null, eu = null, Rl = 0, nu = null, va = null, oa = 0, bc = 0, Tc = null, I0 = null, ee = 0, Ec = null;
  function Il() {
    if ((I & 2) !== 0 && w !== 0)
      return w & -w;
    if (A.T !== null) {
      var l = Pu;
      return l !== 0 ? l : Uc();
    }
    return hi();
  }
  function P0() {
    dt === 0 && (dt = (w & 536870912) === 0 || F ? di() : 536870912);
    var l = st.current;
    return l !== null && (l.flags |= 32), dt;
  }
  function Pl(l, t, u) {
    (l === fl && (P === 2 || P === 9) || l.cancelPendingCommit !== null) && (ya(l, 0), fu(
      l,
      w,
      dt,
      !1
    )), Aa(l, u), ((I & 2) === 0 || l !== fl) && (l === fl && ((I & 2) === 0 && (pu |= u), hl === 4 && fu(
      l,
      w,
      dt,
      !1
    )), zt(l));
  }
  function ld(l, t, u) {
    if ((I & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ea(l, t), e = a ? Lo(l, t) : _c(l, t, !0), n = a;
    do {
      if (e === 0) {
        sa && !a && fu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Co(u)) {
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
              e = ae;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ya(c, f).flags |= 256), f = _c(
                c,
                f,
                !1
              ), f !== 2) {
                if (mc && !i) {
                  c.errorRecoveryDisabledLanes |= n, pu |= n, e = 4;
                  break l;
                }
                n = Zl, Zl = e, n !== null && (Zl === null ? Zl = n : Zl.push.apply(
                  Zl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ya(l, 0), fu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fu(
                a,
                t,
                dt,
                !uu
              );
              break l;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = Sc + 300 - St(), 10 < e)) {
            if (fu(
              a,
              t,
              dt,
              !uu
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Rd(
              td.bind(
                null,
                a,
                u,
                Zl,
                yn,
                gc,
                t,
                dt,
                pu,
                da,
                uu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          td(
            a,
            u,
            Zl,
            yn,
            gc,
            t,
            dt,
            pu,
            da,
            uu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zt(l);
  }
  function td(l, t, u, a, e, n, f, c, i, y, g, b, h, m) {
    if (l.timeoutHandle = -1, b = t.subtreeFlags, (b & 8192 || (b & 16785408) === 16785408) && (ve = { stylesheets: null, count: 0, unsuspend: z1 }, W0(t), b = O1(), b !== null)) {
      l.cancelPendingCommit = b(
        id.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          g,
          1,
          h,
          m
        )
      ), fu(l, n, f, !y);
      return;
    }
    id(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Co(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!wl(n(), e)) return !1;
          } catch (f) {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
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
  function fu(l, t, u, a) {
    t &= ~rc, t &= ~pu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Jl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && oi(l, u, t);
  }
  function hn() {
    return (I & 6) === 0 ? (ne(0), !1) : !0;
  }
  function Ac() {
    if (V !== null) {
      if (P === 0)
        var l = V.return;
      else
        l = V, Ht = Ou = null, Xf(l), na = null, $a = 0, l = V;
      for (; l !== null; )
        x0(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function ya(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, f1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ac(), fl = l, V = u = Rt(l.current, null), w = t, P = 0, Fl = null, uu = !1, sa = Ea(l, t), mc = !1, da = dt = rc = pu = au = hl = 0, Zl = ae = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Jl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Qt = t, Ye(), u;
  }
  function ud(l, t) {
    Z = null, A.H = ln, t === Qa || t === Le ? (t = bs(), P = 3) : t === rs ? (t = bs(), P = 4) : P = t === T0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Fl = t, V === null && (hl = 1, nn(
      l,
      nt(t, l.current)
    ));
  }
  function ad() {
    var l = A.H;
    return A.H = ln, l === null ? ln : l;
  }
  function ed() {
    var l = A.A;
    return A.A = Qo, l;
  }
  function zc() {
    hl = 4, uu || (w & 4194048) !== w && st.current !== null || (sa = !0), (au & 134217727) === 0 && (pu & 134217727) === 0 || fl === null || fu(
      fl,
      w,
      dt,
      !1
    );
  }
  function _c(l, t, u) {
    var a = I;
    I |= 2;
    var e = ad(), n = ed();
    (fl !== l || w !== t) && (yn = null, ya(l, t)), t = !1;
    var f = hl;
    l: do
      try {
        if (P !== 0 && V !== null) {
          var c = V, i = Fl;
          switch (P) {
            case 8:
              Ac(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var y = P;
              if (P = 0, Fl = null, ha(l, c, i, y), u && sa) {
                f = 0;
                break l;
              }
              break;
            default:
              y = P, P = 0, Fl = null, ha(l, c, i, y);
          }
        }
        Vo(), f = hl;
        break;
      } catch (g) {
        ud(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Ht = Ou = null, I = a, A.H = e, A.A = n, V === null && (fl = null, w = 0, Ye()), f;
  }
  function Vo() {
    for (; V !== null; ) nd(V);
  }
  function Lo(l, t) {
    var u = I;
    I |= 2;
    var a = ad(), e = ed();
    fl !== l || w !== t ? (yn = null, on = St() + 500, ya(l, t)) : sa = Ea(
      l,
      t
    );
    l: do
      try {
        if (P !== 0 && V !== null) {
          t = V;
          var n = Fl;
          t: switch (P) {
            case 1:
              P = 0, Fl = null, ha(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (gs(n)) {
                P = 0, Fl = null, fd(t);
                break;
              }
              t = function() {
                P !== 2 && P !== 9 || fl !== l || (P = 7), zt(l);
              }, n.then(t, t);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              gs(n) ? (P = 0, Fl = null, fd(t)) : (P = 0, Fl = null, ha(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (V.tag) {
                case 26:
                  f = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (!f || Zd(f)) {
                    P = 0, Fl = null;
                    var i = c.sibling;
                    if (i !== null) V = i;
                    else {
                      var y = c.return;
                      y !== null ? (V = y, mn(y)) : V = null;
                    }
                    break t;
                  }
              }
              P = 0, Fl = null, ha(l, t, n, 5);
              break;
            case 6:
              P = 0, Fl = null, ha(l, t, n, 6);
              break;
            case 8:
              Ac(), hl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        Ko();
        break;
      } catch (g) {
        ud(l, g);
      }
    while (!0);
    return Ht = Ou = null, A.H = a, A.A = e, I = u, V !== null ? 0 : (fl = null, w = 0, Ye(), hl);
  }
  function Ko() {
    for (; V !== null && !ov(); )
      nd(V);
  }
  function nd(l) {
    var t = H0(l.alternate, l, Qt);
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : V = t;
  }
  function fd(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = M0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          w
        );
        break;
      case 11:
        t = M0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          w
        );
        break;
      case 5:
        Xf(t);
      default:
        x0(u, t), t = V = cs(t, Qt), t = H0(u, t, Qt);
    }
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : V = t;
  }
  function ha(l, t, u, a) {
    Ht = Ou = null, Xf(t), na = null, $a = 0;
    var e = t.return;
    try {
      if (xo(
        l,
        e,
        t,
        u,
        w
      )) {
        hl = 1, nn(
          l,
          nt(u, l.current)
        ), V = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw V = e, n;
      hl = 1, nn(
        l,
        nt(u, l.current)
      ), V = null;
      return;
    }
    t.flags & 32768 ? (F || a === 1 ? l = !0 : sa || (w & 536870912) !== 0 ? l = !1 : (uu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = st.current, a !== null && a.tag === 13 && (a.flags |= 16384))), cd(t, l)) : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        cd(
          t,
          uu
        );
        return;
      }
      l = t.return;
      var u = Bo(
        t.alternate,
        t,
        Qt
      );
      if (u !== null) {
        V = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function cd(l, t) {
    do {
      var u = Go(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, V = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        V = l;
        return;
      }
      V = l = u;
    } while (l !== null);
    hl = 6, V = null;
  }
  function id(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      rn();
    while (Rl !== 0);
    if ((I & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= hf, Av(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === fl && (V = fl = null, w = 0), va = t, nu = l, oa = u, bc = n, Tc = e, I0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $o(Te, function() {
        return yd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, e = O.p, O.p = 2, f = I, I |= 4;
        try {
          jo(l, t, u);
        } finally {
          I = f, O.p = e, A.T = a;
        }
      }
      Rl = 1, sd(), dd(), vd();
    }
  }
  function sd() {
    if (Rl === 1) {
      Rl = 0;
      var l = nu, t = va, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var a = O.p;
        O.p = 2;
        var e = I;
        I |= 4;
        try {
          K0(t, l);
          var n = Bc, f = Fi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && ki(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && sf(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var b = c.ownerDocument || document, h = b && b.defaultView || window;
                if (h.getSelection) {
                  var m = h.getSelection(), j = c.textContent.length, Y = Math.min(i.start, j), ul = i.end === void 0 ? Y : Math.min(i.end, j);
                  !m.extend && Y > ul && (f = ul, ul = Y, Y = f);
                  var v = $i(
                    c,
                    Y
                  ), s = $i(
                    c,
                    ul
                  );
                  if (v && s && (m.rangeCount !== 1 || m.anchorNode !== v.node || m.anchorOffset !== v.offset || m.focusNode !== s.node || m.focusOffset !== s.offset)) {
                    var o = b.createRange();
                    o.setStart(v.node, v.offset), m.removeAllRanges(), Y > ul ? (m.addRange(o), m.extend(s.node, s.offset)) : (o.setEnd(s.node, s.offset), m.addRange(o));
                  }
                }
              }
            }
            for (b = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && b.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < b.length; c++) {
              var S = b[c];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          Un = !!Yc, Bc = Yc = null;
        } finally {
          I = e, O.p = a, A.T = u;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function dd() {
    if (Rl === 2) {
      Rl = 0;
      var l = nu, t = va, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var a = O.p;
        O.p = 2;
        var e = I;
        I |= 4;
        try {
          Z0(l, t.alternate, t);
        } finally {
          I = e, O.p = a, A.T = u;
        }
      }
      Rl = 3;
    }
  }
  function vd() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, yv();
      var l = nu, t = va, u = oa, a = I0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, va = nu = null, od(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (eu = null), Zn(u), t = t.stateNode, Kl && typeof Kl.onCommitFiberRoot == "function")
        try {
          Kl.onCommitFiberRoot(
            Ta,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch (i) {
        }
      if (a !== null) {
        t = A.T, e = O.p, O.p = 2, A.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          A.T = t, O.p = e;
        }
      }
      (oa & 3) !== 0 && rn(), zt(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Ec ? ee++ : (ee = 0, Ec = l) : ee = 0, ne(0);
    }
  }
  function od(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ja(t)));
  }
  function rn(l) {
    return sd(), dd(), vd(), yd();
  }
  function yd() {
    if (Rl !== 5) return !1;
    var l = nu, t = bc;
    bc = 0;
    var u = Zn(oa), a = A.T, e = O.p;
    try {
      O.p = 32 > u ? 32 : u, A.T = null, u = Tc, Tc = null;
      var n = nu, f = oa;
      if (Rl = 0, va = nu = null, oa = 0, (I & 6) !== 0) throw Error(r(331));
      var c = I;
      if (I |= 4, k0(n.current), w0(
        n,
        n.current,
        f,
        u
      ), I = c, ne(0, !1), Kl && typeof Kl.onPostCommitFiberRoot == "function")
        try {
          Kl.onPostCommitFiberRoot(Ta, n);
        } catch (i) {
        }
      return !0;
    } finally {
      O.p = e, A.T = a, od(l, t);
    }
  }
  function hd(l, t, u) {
    t = nt(u, t), t = Pf(l.stateNode, t, 2), l = $t(l, t, 2), l !== null && (Aa(l, 2), zt(l));
  }
  function nl(l, t, u) {
    if (l.tag === 3)
      hd(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          hd(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (eu === null || !eu.has(a))) {
            l = nt(u, l), u = S0(2), a = $t(t, u, 2), a !== null && (b0(
              u,
              a,
              t,
              l
            ), Aa(a, 2), zt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zo();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (mc = !0, e.add(u), l = Jo.bind(null, l, t, u), t.then(l, l));
  }
  function Jo(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, fl === l && (w & u) === u && (hl === 4 || hl === 3 && (w & 62914560) === w && 300 > St() - Sc ? (I & 2) === 0 && ya(l, 0) : rc |= u, da === w && (da = 0)), zt(l);
  }
  function md(l, t) {
    t === 0 && (t = vi()), l = $u(l, t), l !== null && (Aa(l, t), zt(l));
  }
  function wo(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), md(l, u);
  }
  function Wo(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), md(l, u);
  }
  function $o(l, t) {
    return Gn(l, t);
  }
  var gn = null, ma = null, Mc = !1, Sn = !1, Dc = !1, Hu = 0;
  function zt(l) {
    l !== ma && l.next === null && (ma === null ? gn = ma = l : ma = ma.next = l), Sn = !0, Mc || (Mc = !0, Fo());
  }
  function ne(l, t) {
    if (!Dc && Sn) {
      Dc = !0;
      do
        for (var u = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Jl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, bd(a, n));
          } else
            n = w, n = ze(
              a,
              a === fl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ea(a, n) || (u = !0, bd(a, n));
          a = a.next;
        }
      while (u);
      Dc = !1;
    }
  }
  function ko() {
    rd();
  }
  function rd() {
    Sn = Mc = !1;
    var l = 0;
    Hu !== 0 && (n1() && (l = Hu), Hu = 0);
    for (var t = St(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = gd(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (ma = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ne(l);
  }
  function gd(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Jl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Ev(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, u = w, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (P === 2 || P === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ea(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && jn(a), Zn(u)) {
        case 2:
        case 8:
          u = ii;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = si;
          break;
        default:
          u = Te;
      }
      return a = Sd.bind(null, l), u = Gn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Sd(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rn() && l.callbackNode !== u)
      return null;
    var a = w;
    return a = ze(
      l,
      l === fl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (ld(l, a, t), gd(l, St()), l.callbackNode != null && l.callbackNode === u ? Sd.bind(null, l) : null);
  }
  function bd(l, t) {
    if (rn()) return null;
    ld(l, t, !0);
  }
  function Fo() {
    c1(function() {
      (I & 6) !== 0 ? Gn(
        ci,
        ko
      ) : rd();
    });
  }
  function Uc() {
    return Hu === 0 && (Hu = di()), Hu;
  }
  function Td(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function Ed(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Io(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Td(
        (e[Gl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Gl] || null) ? Td(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new He(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Hu !== 0) {
                  var i = f ? Ed(e, f) : new FormData(e);
                  Wf(
                    u,
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
                typeof n == "function" && (c.preventDefault(), i = f ? Ed(e, f) : new FormData(e), Wf(
                  u,
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
  for (var Rc = 0; Rc < yf.length; Rc++) {
    var Nc = yf[Rc], Po = Nc.toLowerCase(), l1 = Nc[0].toUpperCase() + Nc.slice(1);
    ot(
      Po,
      "on" + l1
    );
  }
  ot(ls, "onAnimationEnd"), ot(ts, "onAnimationIteration"), ot(us, "onAnimationStart"), ot("dblclick", "onDoubleClick"), ot("focusin", "onFocus"), ot("focusout", "onBlur"), ot(go, "onTransitionRun"), ot(So, "onTransitionStart"), ot(bo, "onTransitionCancel"), ot(as, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), ru(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ru(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ru("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ru(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), t1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe)
  );
  function Ad(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, y = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              en(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, y = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              en(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function L(l, t) {
    var u = t[Cn];
    u === void 0 && (u = t[Cn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (zd(t, l, 2, !1), u.add(a));
  }
  function pc(l, t, u) {
    var a = 0;
    t && (a |= 4), zd(
      u,
      l,
      a,
      t
    );
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(l) {
    if (!l[bn]) {
      l[bn] = !0, ri.forEach(function(u) {
        u !== "selectionchange" && (t1.has(u) || pc(u, !1, l), pc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || (t[bn] = !0, pc("selectionchange", !1, t));
    }
  }
  function zd(l, t, u, a) {
    switch (wd(t)) {
      case 2:
        var e = U1;
        break;
      case 8:
        e = R1;
        break;
      default:
        e = Jc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !Pn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function qc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Bu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ni(function() {
      var y = n, g = Fn(u), b = [];
      l: {
        var h = es.get(l);
        if (h !== void 0) {
          var m = He, j = l;
          switch (l) {
            case "keypress":
              if (Ne(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Wv;
              break;
            case "focusin":
              j = "focus", m = af;
              break;
            case "focusout":
              j = "blur", m = af;
              break;
            case "beforeblur":
            case "afterblur":
              m = af;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Bv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Fv;
              break;
            case ls:
            case ts:
            case us:
              m = Xv;
              break;
            case as:
              m = Pv;
              break;
            case "scroll":
            case "scrollend":
              m = xv;
              break;
            case "wheel":
              m = to;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Zv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Yi;
              break;
            case "toggle":
            case "beforetoggle":
              m = ao;
          }
          var Y = (t & 4) !== 0, ul = !Y && (l === "scroll" || l === "scrollend"), v = Y ? h !== null ? h + "Capture" : null : h;
          Y = [];
          for (var s = y, o; s !== null; ) {
            var S = s;
            if (o = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || o === null || v === null || (S = Oa(s, v), S != null && Y.push(
              ce(s, S, o)
            )), ul) break;
            s = s.return;
          }
          0 < Y.length && (h = new m(
            h,
            j,
            null,
            u,
            g
          ), b.push({ event: h, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", h && u !== kn && (j = u.relatedTarget || u.fromElement) && (Bu(j) || j[Yu]))
            break l;
          if ((m || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (j = u.relatedTarget || u.toElement, m = y, j = j ? Bu(j) : null, j !== null && (ul = vl(j), Y = j.tag, j !== ul || Y !== 5 && Y !== 27 && Y !== 6) && (j = null)) : (m = null, j = y), m !== j)) {
            if (Y = qi, S = "onMouseLeave", v = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Yi, S = "onPointerLeave", v = "onPointerEnter", s = "pointer"), ul = m == null ? h : _a(m), o = j == null ? h : _a(j), h = new Y(
              S,
              s + "leave",
              m,
              u,
              g
            ), h.target = ul, h.relatedTarget = o, S = null, Bu(g) === y && (Y = new Y(
              v,
              s + "enter",
              j,
              u,
              g
            ), Y.target = o, Y.relatedTarget = ul, S = Y), ul = S, m && j)
              t: {
                for (Y = m, v = j, s = 0, o = Y; o; o = ra(o))
                  s++;
                for (o = 0, S = v; S; S = ra(S))
                  o++;
                for (; 0 < s - o; )
                  Y = ra(Y), s--;
                for (; 0 < o - s; )
                  v = ra(v), o--;
                for (; s--; ) {
                  if (Y === v || v !== null && Y === v.alternate)
                    break t;
                  Y = ra(Y), v = ra(v);
                }
                Y = null;
              }
            else Y = null;
            m !== null && _d(
              b,
              h,
              m,
              Y,
              !1
            ), j !== null && ul !== null && _d(
              b,
              ul,
              j,
              Y,
              !0
            );
          }
        }
        l: {
          if (h = y ? _a(y) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file")
            var U = Vi;
          else if (Zi(h))
            if (Li)
              U = ho;
            else {
              U = oo;
              var C = vo;
            }
          else
            m = h.nodeName, !m || m.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && $n(y.elementType) && (U = Vi) : U = yo;
          if (U && (U = U(l, y))) {
            Ci(
              b,
              U,
              u,
              g
            );
            break l;
          }
          C && C(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && Wn(h, "number", h.value);
        }
        switch (C = y ? _a(y) : window, l) {
          case "focusin":
            (Zi(C) || C.contentEditable === "true") && (Ju = C, df = y, qa = null);
            break;
          case "focusout":
            qa = df = Ju = null;
            break;
          case "mousedown":
            vf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vf = !1, Ii(b, u, g);
            break;
          case "selectionchange":
            if (ro) break;
          case "keydown":
          case "keyup":
            Ii(b, u, g);
        }
        var p;
        if (nf)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Ku ? Xi(l, u) && (B = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (B = "onCompositionStart");
        B && (Bi && u.locale !== "ko" && (Ku || B !== "onCompositionStart" ? B === "onCompositionEnd" && Ku && (p = pi()) : (Kt = g, lf = "value" in Kt ? Kt.value : Kt.textContent, Ku = !0)), C = Tn(y, B), 0 < C.length && (B = new xi(
          B,
          l,
          null,
          u,
          g
        ), b.push({ event: B, listeners: C }), p ? B.data = p : (p = Qi(u), p !== null && (B.data = p)))), (p = no ? fo(l, u) : co(l, u)) && (B = Tn(y, "onBeforeInput"), 0 < B.length && (C = new xi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), b.push({
          event: C,
          listeners: B
        }), C.data = p)), Io(
          b,
          l,
          y,
          u,
          g
        );
      }
      Ad(b, t);
    });
  }
  function ce(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Tn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Oa(l, u), e != null && a.unshift(
        ce(l, e, n)
      ), e = Oa(l, t), e != null && a.push(
        ce(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ra(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function _d(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, y = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (i = y, e ? (y = Oa(u, n), y != null && f.unshift(
        ce(u, y, i)
      )) : e || (y = Oa(u, n), y != null && f.push(
        ce(u, y, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var u1 = /\r\n?/g, a1 = /\u0000|\uFFFD/g;
  function Od(l) {
    return (typeof l == "string" ? l : "" + l).replace(u1, `
`).replace(a1, "");
  }
  function Md(l, t) {
    return t = Od(t), Od(l) === t;
  }
  function En() {
  }
  function tl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Cu(l, "" + a);
        break;
      case "className":
        Oe(l, "class", a);
        break;
      case "tabIndex":
        Oe(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, u, a);
        break;
      case "style":
        Ui(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = En);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ue("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), _e(l, "popover", a);
        break;
      case "xlinkActuate":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _e(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Hv.get(u) || u, _e(l, u, a));
    }
  }
  function xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ui(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && Cu(l, "" + a);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = En);
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
        if (!gi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Gl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
          }
    }
  }
  function Nl(l, t, u) {
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
        L("error", l), L("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  tl(l, t, n, f, u, null);
              }
          }
        e && tl(l, t, "srcSet", u.srcSet, u, null), a && tl(l, t, "src", u.src, u, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
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
                    throw Error(r(137, t));
                  break;
                default:
                  tl(l, t, a, g, u, null);
              }
          }
        _i(
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
        L("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                tl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Zu(l, !!a, t, !1) : u != null && Zu(l, !!a, u, !0);
        return;
      case "textarea":
        L("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                tl(l, t, f, c, u, null);
            }
        Mi(l, a, e, n), Me(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                tl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fe.length; a++)
          L(fe[a], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
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
        for (y in u)
          if (u.hasOwnProperty(y) && (a = u[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                tl(l, t, y, a, u, null);
            }
        return;
      default:
        if ($n(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && xc(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && tl(l, t, c, a, u, null));
  }
  function e1(l, t, u, a) {
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
        for (m in u) {
          var b = u[m];
          if (u.hasOwnProperty(m) && b != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = b;
              default:
                a.hasOwnProperty(m) || tl(l, t, m, null, a, b);
            }
        }
        for (var h in a) {
          var m = a[h];
          if (b = u[h], a.hasOwnProperty(h) && (m != null || b != null))
            switch (h) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                y = m;
                break;
              case "defaultChecked":
                g = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== b && tl(
                  l,
                  t,
                  h,
                  m,
                  a,
                  b
                );
            }
        }
        wn(
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
        m = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && tl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = m, h != null ? Zu(l, !!u, h, !1) : !!a != !!u && (t != null ? Zu(l, !!u, t, !0) : Zu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = h = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && tl(l, t, f, e, a, n);
            }
        Oi(l, h, m);
        return;
      case "option":
        for (var j in u)
          if (h = u[j], u.hasOwnProperty(j) && h != null && !a.hasOwnProperty(j))
            switch (j) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(
                  l,
                  t,
                  j,
                  null,
                  a,
                  h
                );
            }
        for (i in a)
          if (h = a[i], m = u[i], a.hasOwnProperty(i) && h !== m && (h != null || m != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                tl(
                  l,
                  t,
                  i,
                  h,
                  a,
                  m
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
        for (var Y in u)
          h = u[Y], u.hasOwnProperty(Y) && h != null && !a.hasOwnProperty(Y) && tl(l, t, Y, null, a, h);
        for (y in a)
          if (h = a[y], m = u[y], a.hasOwnProperty(y) && h !== m && (h != null || m != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(r(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  y,
                  h,
                  a,
                  m
                );
            }
        return;
      default:
        if ($n(t)) {
          for (var ul in u)
            h = u[ul], u.hasOwnProperty(ul) && h !== void 0 && !a.hasOwnProperty(ul) && xc(
              l,
              t,
              ul,
              void 0,
              a,
              h
            );
          for (g in a)
            h = a[g], m = u[g], !a.hasOwnProperty(g) || h === m || h === void 0 && m === void 0 || xc(
              l,
              t,
              g,
              h,
              a,
              m
            );
          return;
        }
    }
    for (var v in u)
      h = u[v], u.hasOwnProperty(v) && h != null && !a.hasOwnProperty(v) && tl(l, t, v, null, a, h);
    for (b in a)
      h = a[b], m = u[b], !a.hasOwnProperty(b) || h === m || h == null && m == null || tl(l, t, b, h, a, m);
  }
  var Yc = null, Bc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Dd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ud(l, t) {
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
  var jc = null;
  function n1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jc ? !1 : (jc = l, !0) : (jc = null, !1);
  }
  var Rd = typeof setTimeout == "function" ? setTimeout : void 0, f1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, c1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd != "undefined" ? function(l) {
    return Nd.resolve(null).then(l).catch(i1);
  } : Rd;
  function i1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function cu(l) {
    return l === "head";
  }
  function pd(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ie(f.documentElement), u & 2 && ie(f.body), u & 4)
              for (u = f.head, ie(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[za] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), re(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    re(t);
  }
  function Xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(u), Vn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function s1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[za])
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
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function d1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Qc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function v1(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ht(l) {
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
  var Zc = null;
  function Hd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function qd(l, t, u) {
    switch (t = An(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function ie(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var vt = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Zt = O.d;
  O.d = {
    f: o1,
    r: y1,
    D: h1,
    C: m1,
    L: r1,
    m: g1,
    X: b1,
    S: S1,
    M: T1
  };
  function o1() {
    var l = Zt.f(), t = hn();
    return l || t;
  }
  function y1(l) {
    var t = Gu(l);
    t !== null && t.tag === 5 && t.type === "form" ? l0(t) : Zt.r(l);
  }
  var ga = typeof document == "undefined" ? null : document;
  function Yd(l, t, u) {
    var a = ga;
    if (a && typeof t == "string" && t) {
      var e = et(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), xd.has(e) || (xd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Nl(t, "link", l), zl(t), a.head.appendChild(t)));
    }
  }
  function h1(l) {
    Zt.D(l), Yd("dns-prefetch", l, null);
  }
  function m1(l, t) {
    Zt.C(l, t), Yd("preconnect", l, t);
  }
  function r1(l, t, u) {
    Zt.L(l, t, u);
    var a = ga;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + et(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + et(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + et(
        u.imageSizes
      ) + '"]')) : e += '[href="' + et(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Sa(l);
          break;
        case "script":
          n = ba(l);
      }
      vt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), vt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(se(n)) || t === "script" && a.querySelector(de(n)) || (t = a.createElement("link"), Nl(t, "link", l), zl(t), a.head.appendChild(t)));
    }
  }
  function g1(l, t) {
    Zt.m(l, t);
    var u = ga;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + et(a) + '"][href="' + et(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ba(l);
      }
      if (!vt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), vt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(de(n)))
              return;
        }
        a = u.createElement("link"), Nl(a, "link", l), zl(a), u.head.appendChild(a);
      }
    }
  }
  function S1(l, t, u) {
    Zt.S(l, t, u);
    var a = ga;
    if (a && l) {
      var e = ju(a).hoistableStyles, n = Sa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          se(n)
        ))
          c.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = vt.get(n)) && Cc(l, u);
          var i = f = a.createElement("link");
          zl(i), Nl(i, "link", l), i._p = new Promise(function(y, g) {
            i.onload = y, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, _n(f, t, a);
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
  function b1(l, t) {
    Zt.X(l, t);
    var u = ga;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = ba(l), n = a.get(e);
      n || (n = u.querySelector(de(e)), n || (l = N({ src: l, async: !0 }, t), (t = vt.get(e)) && Vc(l, t), n = u.createElement("script"), zl(n), Nl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function T1(l, t) {
    Zt.M(l, t);
    var u = ga;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = ba(l), n = a.get(e);
      n || (n = u.querySelector(de(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = vt.get(e)) && Vc(l, t), n = u.createElement("script"), zl(n), Nl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Bd(l, t, u, a) {
    var e = (e = X.current) ? zn(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Sa(u.href), u = ju(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Sa(u.href);
          var n = ju(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            se(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), vt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, vt.set(l, u), n || E1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ba(u), u = ju(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Sa(l) {
    return 'href="' + et(l) + '"';
  }
  function se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gd(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function E1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Nl(t, "link", u), zl(t), l.head.appendChild(t));
  }
  function ba(l) {
    return '[src="' + et(l) + '"]';
  }
  function de(l) {
    return "script[async]" + l;
  }
  function jd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + et(u.href) + '"]'
          );
          if (a)
            return t.instance = a, zl(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), zl(a), Nl(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Sa(u.href);
          var n = l.querySelector(
            se(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, zl(n), n;
          a = Gd(u), (e = vt.get(e)) && Cc(a, e), n = (l.ownerDocument || l).createElement("link"), zl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Nl(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ba(u.src), (e = l.querySelector(
            de(n)
          )) ? (t.instance = e, zl(e), e) : (a = u, (e = vt.get(n)) && (a = N({}, u), Vc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), zl(e), Nl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, u.precedence, l));
    return t.instance;
  }
  function _n(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Xd(l, t, u) {
    if (On === null) {
      var a = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = On, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[za] || n[pl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Qd(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function A1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
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
  function Zd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ve = null;
  function z1() {
  }
  function _1(l, t, u) {
    if (ve === null) throw Error(r(475));
    var a = ve;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = Sa(u.href), n = l.querySelector(
          se(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Mn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, zl(n);
          return;
        }
        n = l.ownerDocument || l, u = Gd(u), (e = vt.get(e)) && Cc(u, e), n = n.createElement("link"), zl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Nl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Mn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function O1() {
    if (ve === null) throw Error(r(475));
    var l = ve;
    return l.stylesheets && l.count === 0 && Lc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Lc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Mn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Lc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(M1, l), Dn = null, Mn.call(l));
  }
  function M1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Dn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Dn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Mn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Al,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function D1(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xn(0), this.hiddenUpdates = Xn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cd(l, t, u, a, e, n, f, c, i, y, g, b) {
    return l = new D1(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      b
    ), t = 1, n === !0 && (t |= 24), n = Wl(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Rf(n), l;
  }
  function Vd(l) {
    return l ? (l = ku, l) : ku;
  }
  function Ld(l, t, u, a, e, n) {
    e = Vd(e), a.context === null ? a.context = e : a.pendingContext = e, a = Wt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = $t(l, a, t), u !== null && (Pl(u, l, t), Ca(u, l, t));
  }
  function Kd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Kc(l, t) {
    Kd(l, t), (l = l.alternate) && Kd(l, t);
  }
  function Jd(l) {
    if (l.tag === 13) {
      var t = $u(l, 67108864);
      t !== null && Pl(t, l, 67108864), Kc(l, 67108864);
    }
  }
  var Un = !0;
  function U1(l, t, u, a) {
    var e = A.T;
    A.T = null;
    var n = O.p;
    try {
      O.p = 2, Jc(l, t, u, a);
    } finally {
      O.p = n, A.T = e;
    }
  }
  function R1(l, t, u, a) {
    var e = A.T;
    A.T = null;
    var n = O.p;
    try {
      O.p = 8, Jc(l, t, u, a);
    } finally {
      O.p = n, A.T = e;
    }
  }
  function Jc(l, t, u, a) {
    if (Un) {
      var e = wc(a);
      if (e === null)
        qc(
          l,
          t,
          a,
          Rn,
          u
        ), Wd(l, a);
      else if (p1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Wd(l, a), t & 4 && -1 < N1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Gu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = mu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Jl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    zt(n), (I & 6) === 0 && (on = St() + 500, ne(0));
                  }
                }
                break;
              case 13:
                c = $u(n, 2), c !== null && Pl(c, n, 2), hn(), Kc(n, 2);
            }
          if (n = wc(a), n === null && qc(
            l,
            t,
            a,
            Rn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        qc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function wc(l) {
    return l = Fn(l), Wc(l);
  }
  var Rn = null;
  function Wc(l) {
    if (Rn = null, l = Bu(l), l !== null) {
      var t = vl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Dl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function wd(l) {
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
        switch (hv()) {
          case ci:
            return 2;
          case ii:
            return 8;
          case Te:
          case mv:
            return 32;
          case si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $c = !1, iu = null, su = null, du = null, ye = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), vu = [], N1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        iu = null;
        break;
      case "dragenter":
      case "dragleave":
        su = null;
        break;
      case "mouseover":
      case "mouseout":
        du = null;
        break;
      case "pointerover":
      case "pointerout":
        ye.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        he.delete(t.pointerId);
    }
  }
  function me(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Gu(t), t !== null && Jd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function p1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return iu = me(
          iu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return su = me(
          su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return du = me(
          du,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ye.set(
          n,
          me(
            ye.get(n) || null,
            l,
            t,
            u,
            a,
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
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function $d(l) {
    var t = Bu(l.target);
    if (t !== null) {
      var u = vl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Dl(u), t !== null) {
            l.blockedOn = t, zv(l.priority, function() {
              if (u.tag === 13) {
                var a = Il();
                a = Qn(a);
                var e = $u(u, a);
                e !== null && Pl(e, u, a), Kc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Nn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        kn = a, u.target.dispatchEvent(a), kn = null;
      } else
        return t = Gu(u), t !== null && Jd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function kd(l, t, u) {
    Nn(l) && u.delete(t);
  }
  function H1() {
    $c = !1, iu !== null && Nn(iu) && (iu = null), su !== null && Nn(su) && (su = null), du !== null && Nn(du) && (du = null), ye.forEach(kd), he.forEach(kd);
  }
  function pn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, $c || ($c = !0, R.unstable_scheduleCallback(
      R.unstable_NormalPriority,
      H1
    )));
  }
  var Hn = null;
  function Fd(l) {
    Hn !== l && (Hn = l, R.unstable_scheduleCallback(
      R.unstable_NormalPriority,
      function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (Wc(a || u) === null)
              continue;
            break;
          }
          var n = Gu(u);
          n !== null && (l.splice(t, 3), t -= 3, Wf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function re(l) {
    function t(i) {
      return pn(i, l);
    }
    iu !== null && pn(iu, l), su !== null && pn(su, l), du !== null && pn(du, l), ye.forEach(t), he.forEach(t);
    for (var u = 0; u < vu.length; u++) {
      var a = vu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < vu.length && (u = vu[0], u.blockedOn === null); )
      $d(u), u.blockedOn === null && vu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Gl] || null;
        if (typeof n == "function")
          f || Fd(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Gl] || null)
              c = f.formAction;
            else if (Wc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Fd(u);
        }
      }
  }
  function kc(l) {
    this._internalRoot = l;
  }
  qn.prototype.render = kc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = Il();
    Ld(u, a, l, t, null, null);
  }, qn.prototype.unmount = kc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Ld(l.current, 2, null, l, null, null), hn(), t[Yu] = null;
    }
  };
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = hi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < vu.length && t !== 0 && t < vu[u].priority; u++) ;
      vu.splice(u, 0, l), u === 0 && $d(l);
    }
  };
  var Id = H.version;
  if (Id !== "19.1.1")
    throw Error(
      r(
        527,
        Id,
        "19.1.1"
      )
    );
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = T(t), l = l !== null ? x(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var q1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xn.isDisabled && xn.supportsFiber)
      try {
        Ta = xn.inject(
          q1
        ), Kl = xn;
      } catch (l) {
      }
  }
  return Se.createRoot = function(l, t) {
    if (!gl(l)) throw Error(r(299));
    var u = !1, a = "", e = h0, n = m0, f = r0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Cd(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Yu] = t.current, Hc(l), new kc(t);
  }, Se.hydrateRoot = function(l, t, u) {
    if (!gl(l)) throw Error(r(299));
    var a = !1, e = "", n = h0, f = m0, c = r0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Cd(
      l,
      1,
      !0,
      t,
      u != null ? u : null,
      a,
      e,
      n,
      f,
      c,
      i,
      y
    ), t.context = Vd(null), u = t.current, a = Il(), a = Qn(a), e = Wt(a), e.callback = null, $t(u, e, a), u = a, t.current.lanes = u, Aa(t, u), zt(t), l[Yu] = t.current, Hc(l), new qn(t);
  }, Se.version = "19.1.1", Se;
}
var dv;
function $1() {
  if (dv) return ui.exports;
  dv = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (R) {
        console.error(R);
      }
  }
  return M(), ui.exports = W1(), ui.exports;
}
var k1 = $1();
const F1 = /* @__PURE__ */ vv(k1);
function I1() {
  const [M, R] = qu.useState([]), [H, K] = qu.useState(null), [r, gl] = qu.useState(0);
  qu.useEffect(() => {
    const x = localStorage.getItem("fasting-sessions");
    if (x) {
      const N = JSON.parse(x).map((ol) => Pc(Ic({}, ol), {
        startTime: new Date(ol.startTime),
        endTime: ol.endTime ? new Date(ol.endTime) : void 0
      }));
      R(N);
      const W = N.find((ol) => ol.isActive);
      W && K(W);
    }
  }, []), qu.useEffect(() => {
    let x;
    return H != null && H.isActive && (x = setInterval(() => {
      gl(Date.now() - H.startTime.getTime());
    }, 1e3)), () => clearInterval(x);
  }, [H]);
  const vl = () => {
    const x = {
      id: Date.now().toString(),
      startTime: /* @__PURE__ */ new Date(),
      isActive: !0
    };
    K(x), gl(0), R((N) => [...N, x]);
  }, Dl = () => {
    if (H) {
      const x = Pc(Ic({}, H), {
        endTime: /* @__PURE__ */ new Date(),
        isActive: !1,
        duration: Date.now() - H.startTime.getTime()
      });
      R(
        (N) => N.map((W) => W.id === H.id ? x : W)
      ), K(null), gl(0);
    }
  }, q = (x) => {
    const N = Math.floor(x / 36e5), W = Math.floor(x % (1e3 * 60 * 60) / (1e3 * 60)), ol = Math.floor(x % (1e3 * 60) / 1e3);
    return `${N.toString().padStart(2, "0")}:${W.toString().padStart(2, "0")}:${ol.toString().padStart(2, "0")}`;
  }, T = (x) => x.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return qu.useEffect(() => {
    localStorage.setItem("fasting-sessions", JSON.stringify(M));
  }, [M]), /* @__PURE__ */ al.jsxs("div", { className: "mfe-root", children: [
    /* @__PURE__ */ al.jsxs("aside", { className: "mfe-aside", children: [
      /* @__PURE__ */ al.jsx("h3", { className: "mfe-title", children: "Suivi de Jeûne" }),
      /* @__PURE__ */ al.jsx("div", { className: "mfe-controls", children: H ? /* @__PURE__ */ al.jsx("button", { className: "mfe-btn stop-btn", onClick: Dl, children: "Arrêter le jeûne" }) : /* @__PURE__ */ al.jsx("button", { className: "mfe-btn start-btn", onClick: vl, children: "Commencer le jeûne" }) }),
      /* @__PURE__ */ al.jsx("h4", { className: "mfe-subtitle", children: "Sessions récentes" }),
      /* @__PURE__ */ al.jsx("ul", { className: "mfe-list", children: M.slice(-5).reverse().map((x) => /* @__PURE__ */ al.jsx("li", { className: `mfe-item ${x.isActive ? "active" : ""}`, children: /* @__PURE__ */ al.jsxs("div", { className: "session-info", children: [
        /* @__PURE__ */ al.jsx("div", { className: "session-date", children: T(x.startTime) }),
        x.duration && /* @__PURE__ */ al.jsxs("div", { className: "session-duration", children: [
          "Durée: ",
          q(x.duration)
        ] }),
        x.isActive && /* @__PURE__ */ al.jsx("span", { className: "active-indicator", children: "● En cours" })
      ] }) }, x.id)) })
    ] }),
    /* @__PURE__ */ al.jsxs("section", { className: "mfe-panel", children: [
      /* @__PURE__ */ al.jsx("div", { className: "mfe-visual", children: H ? /* @__PURE__ */ al.jsxs("div", { className: "fasting-display", children: [
        /* @__PURE__ */ al.jsx("h2", { className: "fasting-title", children: "Jeûne en cours" }),
        /* @__PURE__ */ al.jsx("div", { className: "fasting-timer", children: q(r) }),
        /* @__PURE__ */ al.jsxs("div", { className: "fasting-start", children: [
          "Commencé le ",
          T(H.startTime)
        ] })
      ] }) : /* @__PURE__ */ al.jsxs("div", { className: "fasting-display", children: [
        /* @__PURE__ */ al.jsx("h2", { className: "fasting-title", children: "Aucun jeûne actif" }),
        /* @__PURE__ */ al.jsx("p", { className: "fasting-message", children: 'Cliquez sur "Commencer le jeûne" pour démarrer une nouvelle session' })
      ] }) }),
      /* @__PURE__ */ al.jsx("div", { className: "mfe-controls", children: /* @__PURE__ */ al.jsxs("div", { className: "stats", children: [
        /* @__PURE__ */ al.jsxs("span", { className: "stat-item", children: [
          "Total: ",
          M.length,
          " sessions"
        ] }),
        /* @__PURE__ */ al.jsxs("span", { className: "stat-item", children: [
          "Actives: ",
          M.filter((x) => x.isActive).length
        ] })
      ] }) })
    ] })
  ] });
}
const P1 = '.mfe-root{display:grid;grid-template-columns:minmax(220px,26%) minmax(0,1fr);gap:.75rem;width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden;padding:.75rem;box-sizing:border-box;background:linear-gradient(135deg,#0f172a,#1f2a44);color:#e5e7eb;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial,"Apple Color Emoji","Segoe UI Emoji"}.mfe-root *,.mfe-root *:before,.mfe-root *:after{box-sizing:border-box}.mfe-aside{background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:.75rem;display:flex;flex-direction:column;min-height:0;max-width:100%}.mfe-title{margin:0 0 .5rem;font-weight:600;color:#fff}.mfe-subtitle{margin:.75rem 0 .5rem;font-weight:500;color:#cbd5e1;font-size:.9rem}.mfe-list{margin:0;padding:0;list-style:none;flex:1;min-height:0;overflow-y:auto}.mfe-item{padding:.5rem;border-radius:8px;margin-bottom:.5rem;border:1px solid rgba(255,255,255,.1)}.mfe-item:hover{background:#ffffff14}.mfe-item.active{background:#22c55e26;border-color:#22c55e4d}.mfe-panel{display:grid;grid-template-rows:1fr auto;gap:.75rem;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:.75rem;min-height:0;max-height:100%;overflow:hidden}.mfe-visual{width:100%;height:100%;min-height:120px;border-radius:8px;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:#cbd5e1;background:#ffffff14;flex-direction:column;text-align:center}.mfe-controls{display:flex;align-items:center;justify-content:center;gap:.75rem;flex-wrap:wrap}.mfe-btn{background:#3b82f6;color:#fff;border:0;border-radius:8px;padding:.75rem 1rem;cursor:pointer;font-weight:500;transition:all .2s ease}.mfe-btn:hover{background:#2563eb;transform:translateY(-1px)}.start-btn{background:#10b981}.start-btn:hover{background:#059669}.stop-btn{background:#ef4444}.stop-btn:hover{background:#dc2626}.fasting-display{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1rem}.fasting-title{margin:0;font-size:1.5rem;font-weight:600;color:#fff}.fasting-timer{font-size:3rem;font-weight:700;color:#10b981;font-family:Courier New,monospace;text-shadow:0 0 20px rgba(16,185,129,.3)}.fasting-start{color:#cbd5e1;font-size:.9rem}.fasting-message{color:#9ca3af;font-size:1rem;margin:0}.session-info{display:flex;flex-direction:column;gap:.25rem}.session-date{font-weight:500;color:#fff}.session-duration{font-size:.85rem;color:#9ca3af}.active-indicator{color:#10b981;font-weight:600;font-size:.85rem}.stats{display:flex;gap:1rem;font-size:.9rem}.stat-item{color:#cbd5e1;padding:.25rem .5rem;background:#ffffff0d;border-radius:6px}@media (max-width: 900px){.mfe-root{grid-template-columns:1fr;gap:.5rem;padding:.5rem}.mfe-aside{order:2}.mfe-panel{order:1}.fasting-timer{font-size:2.5rem}}@media (max-height: 800px){.mfe-visual{min-height:100px}.fasting-timer{font-size:2rem}}';
class ly extends HTMLElement {
  constructor() {
    super(...arguments);
    lv(this, "root", null);
  }
  connectedCallback() {
    const H = this.attachShadow({ mode: "open" }), K = document.createElement("div");
    K.id = "mfe-fasting-tracker-root", K.style.width = "100%", K.style.height = "100%", H.appendChild(K);
    const r = document.createElement("style");
    r.textContent = `
      :host { display: block; width: 100%; height: 100%; max-width: 100%; max-height: 100%; }
      #mfe-fasting-tracker-root { width: 100%; height: 100%; max-width: 100%; max-height: 100%; }
    ` + P1, H.appendChild(r), this.root = F1.createRoot(K), this.root.render(
      /* @__PURE__ */ al.jsx(V1.StrictMode, { children: /* @__PURE__ */ al.jsx(I1, {}) })
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.define("mfe-fasting-tracker", ly);
