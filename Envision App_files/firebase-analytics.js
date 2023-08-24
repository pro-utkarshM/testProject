!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t((e = e || self).firebase);
})(this, function (tt) {
  "use strict";
  try {
    (function () {
      tt =
        tt && Object.prototype.hasOwnProperty.call(tt, "default")
          ? tt.default
          : tt;
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      var l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function d(e, a, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(r, i);
          }
          o((u = u.apply(e, a || [])).next());
        });
      }
      function h(n, r) {
        var i,
          o,
          a,
          e,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (e = { next: t(0), throw: t(1), return: t(2) }),
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (a =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((a = o.return) && a.call(o), 0)
                          : o.next) &&
                      !(a = a.call(o, t[1])).done)
                  )
                    return a;
                  switch (((o = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = t);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(t);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = r.call(n, s);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  i = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function s(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function r(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      var i,
        e,
        t,
        g =
          ((i = Error),
          n((e = a), (t = i)),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((o.prototype = t.prototype), new o())),
          a);
      function o() {
        this.constructor = e;
      }
      function a(e, t) {
        var n = i.call(this, t) || this;
        return (
          (n.code = e),
          (n.name = "FirebaseError"),
          Object.setPrototypeOf(n, a.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(n, u.prototype.create),
          n
        );
      }
      var u =
        ((c.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          for (
            var r,
              i = t[0] || {},
              o = this.service + "/" + e,
              a = this.errors[e],
              s = a
                ? ((r = i),
                  a.replace(v, function (e, t) {
                    var n = r[t];
                    return null != n ? n.toString() : "<" + t + "?>";
                  }))
                : "Error",
              u = this.serviceName + ": " + s + " (" + o + ").",
              c = new g(o, u),
              l = 0,
              f = Object.keys(i);
            l < f.length;
            l++
          ) {
            var p = f[l];
            "_" !== p.slice(-1) &&
              (p in c &&
                console.warn(
                  'Overwriting FirebaseError base field "' +
                    p +
                    '" can cause unexpected behavior.',
                ),
              (c[p] = i[p]));
          }
          return c;
        }),
        c);
      function c(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var v = /\{\$([^}]+)}/g,
        f =
          ((p.prototype.setInstantiationMode = function (e) {
            return (this.instantiationMode = e), this;
          }),
          (p.prototype.setMultipleInstances = function (e) {
            return (this.multipleInstances = e), this;
          }),
          (p.prototype.setServiceProps = function (e) {
            return (this.serviceProps = e), this;
          }),
          p);
      function p(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY");
      }
      function y(n) {
        return new Promise(function (e, t) {
          (n.onsuccess = function () {
            e(n.result);
          }),
            (n.onerror = function () {
              t(n.error);
            });
        });
      }
      function w(n, r, i) {
        var o,
          e = new Promise(function (e, t) {
            y((o = n[r].apply(n, i))).then(e, t);
          });
        return (e.request = o), e;
      }
      function b(e, n, t) {
        t.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            get: function () {
              return this[n][t];
            },
            set: function (e) {
              this[n][t] = e;
            },
          });
        });
      }
      function m(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype &&
            (t.prototype[e] = function () {
              return w(this[n], e, arguments);
            });
        });
      }
      function _(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype &&
            (t.prototype[e] = function () {
              return this[n][e].apply(this[n], arguments);
            });
        });
      }
      function E(e, r, t, n) {
        n.forEach(function (n) {
          n in t.prototype &&
            (e.prototype[n] = function () {
              return (
                (e = this[r]),
                (t = w(e, n, arguments)).then(function (e) {
                  if (e) return new S(e, t.request);
                })
              );
              var e, t;
            });
        });
      }
      function I(e) {
        this._index = e;
      }
      function S(e, t) {
        (this._cursor = e), (this._request = t);
      }
      function O(e) {
        this._store = e;
      }
      function T(n) {
        (this._tx = n),
          (this.complete = new Promise(function (e, t) {
            (n.oncomplete = function () {
              e();
            }),
              (n.onerror = function () {
                t(n.error);
              }),
              (n.onabort = function () {
                t(n.error);
              });
          }));
      }
      function C(e, t, n) {
        (this._db = e), (this.oldVersion = t), (this.transaction = new T(n));
      }
      function N(e) {
        this._db = e;
      }
      b(I, "_index", ["name", "keyPath", "multiEntry", "unique"]),
        m(I, "_index", IDBIndex, [
          "get",
          "getKey",
          "getAll",
          "getAllKeys",
          "count",
        ]),
        E(I, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
        b(S, "_cursor", ["direction", "key", "primaryKey", "value"]),
        m(S, "_cursor", IDBCursor, ["update", "delete"]),
        ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
          n in IDBCursor.prototype &&
            (S.prototype[n] = function () {
              var t = this,
                e = arguments;
              return Promise.resolve().then(function () {
                return (
                  t._cursor[n].apply(t._cursor, e),
                  y(t._request).then(function (e) {
                    if (e) return new S(e, t._request);
                  })
                );
              });
            });
        }),
        (O.prototype.createIndex = function () {
          return new I(this._store.createIndex.apply(this._store, arguments));
        }),
        (O.prototype.index = function () {
          return new I(this._store.index.apply(this._store, arguments));
        }),
        b(O, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
        m(O, "_store", IDBObjectStore, [
          "put",
          "add",
          "delete",
          "clear",
          "get",
          "getAll",
          "getKey",
          "getAllKeys",
          "count",
        ]),
        E(O, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
        _(O, "_store", IDBObjectStore, ["deleteIndex"]),
        (T.prototype.objectStore = function () {
          return new O(this._tx.objectStore.apply(this._tx, arguments));
        }),
        b(T, "_tx", ["objectStoreNames", "mode"]),
        _(T, "_tx", IDBTransaction, ["abort"]),
        (C.prototype.createObjectStore = function () {
          return new O(this._db.createObjectStore.apply(this._db, arguments));
        }),
        b(C, "_db", ["name", "version", "objectStoreNames"]),
        _(C, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
        (N.prototype.transaction = function () {
          return new T(this._db.transaction.apply(this._db, arguments));
        }),
        b(N, "_db", ["name", "version", "objectStoreNames"]),
        _(N, "_db", IDBDatabase, ["close"]),
        ["openCursor", "openKeyCursor"].forEach(function (o) {
          [O, I].forEach(function (e) {
            o in e.prototype &&
              (e.prototype[o.replace("open", "iterate")] = function () {
                var e,
                  t = ((e = arguments), Array.prototype.slice.call(e)),
                  n = t[t.length - 1],
                  r = this._store || this._index,
                  i = r[o].apply(r, t.slice(0, -1));
                i.onsuccess = function () {
                  n(i.result);
                };
              });
          });
        }),
        [I, O].forEach(function (e) {
          e.prototype.getAll ||
            (e.prototype.getAll = function (e, n) {
              var r = this,
                i = [];
              return new Promise(function (t) {
                r.iterateCursor(e, function (e) {
                  e
                    ? (i.push(e.value),
                      void 0 === n || i.length != n ? e.continue() : t(i))
                    : t(i);
                });
              });
            });
        });
      var P,
        A = "0.4.8",
        R = 1e4,
        L = "w:" + A,
        j = "FIS_v2",
        k = "https://firebaseinstallations.googleapis.com/v1",
        D = 36e5,
        x =
          (((P = {})["missing-app-config-values"] =
            'Missing App configuration value: "{$valueName}"'),
          (P["not-registered"] = "Firebase Installation is not registered."),
          (P["installation-not-found"] = "Firebase Installation not found."),
          (P["request-failed"] =
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
          (P["app-offline"] =
            "Could not process request. Application offline."),
          (P["delete-pending-registration"] =
            "Can't delete installation while there is a pending registration request."),
          P),
        H = new u("installations", "Installations", x);
      function F(e) {
        return e instanceof g && e.code.includes("request-failed");
      }
      function B(e) {
        var t = e.projectId;
        return k + "/projects/" + t + "/installations";
      }
      function V(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: ((t = e.expiresIn), Number(t.replace("s", "000"))),
          creationTime: Date.now(),
        };
        var t;
      }
      function q(r, i) {
        return d(this, void 0, void 0, function () {
          var t, n;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, i.json()];
              case 1:
                return (
                  (t = e.sent()),
                  (n = t.error),
                  [
                    2,
                    H.create("request-failed", {
                      requestName: r,
                      serverCode: n.code,
                      serverMessage: n.message,
                      serverStatus: n.status,
                    }),
                  ]
                );
            }
          });
        });
      }
      function G(e) {
        var t = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": t,
        });
      }
      function M(e, t) {
        var n = t.refreshToken,
          r = G(e);
        return r.append("Authorization", j + " " + n), r;
      }
      function U(n) {
        return d(this, void 0, void 0, function () {
          var t;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n()];
              case 1:
                return 500 <= (t = e.sent()).status && t.status < 600
                  ? [2, n()]
                  : [2, t];
            }
          });
        });
      }
      function K(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function W(e) {
        return btoa(
          String.fromCharCode.apply(
            String,
            (function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(r(arguments[t]));
              return e;
            })(e),
          ),
        )
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
      }
      var $ = /^[cdef][\w-]{21}$/,
        z = "";
      function J() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e),
            (e[0] = 112 + (e[0] % 16));
          var t = W(e).substr(0, 22);
          return $.test(t) ? t : z;
        } catch (e) {
          return z;
        }
      }
      function Y(e) {
        return e.appName + "!" + e.appId;
      }
      var X = new Map();
      function Z(e, t) {
        var n = Y(e);
        Q(n, t),
          (function (e, t) {
            var n = te();
            n && n.postMessage({ key: e, fid: t });
            ne();
          })(n, t);
      }
      function Q(e, t) {
        var n,
          r,
          i = X.get(e);
        if (i)
          try {
            for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
              (0, a.value)(t);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }
      var ee = null;
      function te() {
        return (
          !ee &&
            "BroadcastChannel" in self &&
            ((ee = new BroadcastChannel("[Firebase] FID Change")).onmessage =
              function (e) {
                Q(e.data.key, e.data.fid);
              }),
          ee
        );
      }
      function ne() {
        0 === X.size && ee && (ee.close(), (ee = null));
      }
      var re,
        ie,
        oe,
        ae,
        se = "firebase-installations-database",
        ue = 1,
        ce = "firebase-installations-store",
        le = null;
      function fe() {
        var t, e, n;
        return (
          le ||
            ((t = function (e) {
              switch (e.oldVersion) {
                case 0:
                  e.createObjectStore(ce);
              }
            }),
            (e = w(indexedDB, "open", [se, ue])),
            (n = e.request) &&
              (n.onupgradeneeded = function (e) {
                t && t(new C(n.result, e.oldVersion, n.transaction));
              }),
            (le = e.then(function (e) {
              return new N(e);
            }))),
          le
        );
      }
      function pe(a, s) {
        return d(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = Y(a)), [4, fe()];
              case 1:
                return (
                  (n = e.sent()),
                  (r = n.transaction(ce, "readwrite")),
                  [4, (i = r.objectStore(ce)).get(t)]
                );
              case 2:
                return (o = e.sent()), [4, i.put(s, t)];
              case 3:
                return e.sent(), [4, r.complete];
              case 4:
                return e.sent(), (o && o.fid === s.fid) || Z(a, s.fid), [2, s];
            }
          });
        });
      }
      function de(i) {
        return d(this, void 0, void 0, function () {
          var t, n, r;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = Y(i)), [4, fe()];
              case 1:
                return (
                  (n = e.sent()),
                  [
                    4,
                    (r = n.transaction(ce, "readwrite"))
                      .objectStore(ce)
                      .delete(t),
                  ]
                );
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2];
            }
          });
        });
      }
      function he(s, u) {
        return d(this, void 0, void 0, function () {
          var t, n, r, i, o, a;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = Y(s)), [4, fe()];
              case 1:
                return (
                  (n = e.sent()),
                  (r = n.transaction(ce, "readwrite")),
                  [4, (i = r.objectStore(ce)).get(t)]
                );
              case 2:
                return (
                  (o = e.sent()),
                  void 0 !== (a = u(o)) ? [3, 4] : [4, i.delete(t)]
                );
              case 3:
                return e.sent(), [3, 6];
              case 4:
                return [4, i.put(a, t)];
              case 5:
                e.sent(), (e.label = 6);
              case 6:
                return [4, r.complete];
              case 7:
                return (
                  e.sent(), !a || (o && o.fid === a.fid) || Z(s, a.fid), [2, a]
                );
            }
          });
        });
      }
      function ge(i) {
        return d(this, void 0, void 0, function () {
          var r, t, n;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  he(i, function (e) {
                    var t = ye(e || { fid: J(), registrationStatus: 0 }),
                      n = (function (e, t) {
                        {
                          if (0 !== t.registrationStatus)
                            return 1 === t.registrationStatus
                              ? {
                                  installationEntry: t,
                                  registrationPromise: (function (o) {
                                    return d(this, void 0, void 0, function () {
                                      var t, n, r, i;
                                      return h(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return [4, ve(o)];
                                          case 1:
                                            (t = e.sent()), (e.label = 2);
                                          case 2:
                                            return 1 !== t.registrationStatus
                                              ? [3, 5]
                                              : [4, K(100)];
                                          case 3:
                                            return e.sent(), [4, ve(o)];
                                          case 4:
                                            return (t = e.sent()), [3, 2];
                                          case 5:
                                            return 0 !== t.registrationStatus
                                              ? [3, 7]
                                              : [4, ge(o)];
                                          case 6:
                                            return (
                                              (n = e.sent()),
                                              (r = n.installationEntry),
                                              (i = n.registrationPromise)
                                                ? [2, i]
                                                : [2, r]
                                            );
                                          case 7:
                                            return [2, t];
                                        }
                                      });
                                    });
                                  })(e),
                                }
                              : { installationEntry: t };
                          if (!navigator.onLine) {
                            var n = Promise.reject(H.create("app-offline"));
                            return {
                              installationEntry: t,
                              registrationPromise: n,
                            };
                          }
                          var r = {
                              fid: t.fid,
                              registrationStatus: 1,
                              registrationTime: Date.now(),
                            },
                            i = (function (r, i) {
                              return d(this, void 0, void 0, function () {
                                var t, n;
                                return h(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        e.trys.push([0, 2, , 7]),
                                        [
                                          4,
                                          (function (s, e) {
                                            var u = e.fid;
                                            return d(
                                              this,
                                              void 0,
                                              void 0,
                                              function () {
                                                var t, n, r, i, o, a;
                                                return h(this, function (e) {
                                                  switch (e.label) {
                                                    case 0:
                                                      return (
                                                        (t = B(s)),
                                                        (n = G(s)),
                                                        (r = {
                                                          fid: u,
                                                          authVersion: j,
                                                          appId: s.appId,
                                                          sdkVersion: L,
                                                        }),
                                                        (i = {
                                                          method: "POST",
                                                          headers: n,
                                                          body: JSON.stringify(
                                                            r,
                                                          ),
                                                        }),
                                                        [
                                                          4,
                                                          U(function () {
                                                            return fetch(t, i);
                                                          }),
                                                        ]
                                                      );
                                                    case 1:
                                                      return (o = e.sent()).ok
                                                        ? [4, o.json()]
                                                        : [3, 3];
                                                    case 2:
                                                      return (
                                                        (a = e.sent()),
                                                        [
                                                          2,
                                                          {
                                                            fid: a.fid || u,
                                                            registrationStatus: 2,
                                                            refreshToken:
                                                              a.refreshToken,
                                                            authToken: V(
                                                              a.authToken,
                                                            ),
                                                          },
                                                        ]
                                                      );
                                                    case 3:
                                                      return [
                                                        4,
                                                        q(
                                                          "Create Installation",
                                                          o,
                                                        ),
                                                      ];
                                                    case 4:
                                                      throw e.sent();
                                                  }
                                                });
                                              },
                                            );
                                          })(r, i),
                                        ]
                                      );
                                    case 1:
                                      return (t = e.sent()), [2, pe(r, t)];
                                    case 2:
                                      return F((n = e.sent())) &&
                                        409 === n.serverCode
                                        ? [4, de(r)]
                                        : [3, 4];
                                    case 3:
                                      return e.sent(), [3, 6];
                                    case 4:
                                      return [
                                        4,
                                        pe(r, {
                                          fid: i.fid,
                                          registrationStatus: 0,
                                        }),
                                      ];
                                    case 5:
                                      e.sent(), (e.label = 6);
                                    case 6:
                                      throw n;
                                    case 7:
                                      return [2];
                                  }
                                });
                              });
                            })(e, r);
                          return {
                            installationEntry: r,
                            registrationPromise: i,
                          };
                        }
                      })(i, t);
                    return (r = n.registrationPromise), n.installationEntry;
                  }),
                ];
              case 1:
                return (t = e.sent()).fid !== z ? [3, 3] : ((n = {}), [4, r]);
              case 2:
                return [2, ((n.installationEntry = e.sent()), n)];
              case 3:
                return [2, { installationEntry: t, registrationPromise: r }];
            }
          });
        });
      }
      function ve(e) {
        return he(e, function (e) {
          if (!e) throw H.create("installation-not-found");
          return ye(e);
        });
      }
      function ye(e) {
        return 1 === (t = e).registrationStatus &&
          t.registrationTime + R < Date.now()
          ? { fid: e.fid, registrationStatus: 0 }
          : e;
        var t;
      }
      function we(e, l) {
        var f = e.appConfig,
          p = e.platformLoggerProvider;
        return d(this, void 0, void 0, function () {
          var r, i, o, a, s, u, c;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = f),
                  (n = l.fid),
                  (r = B(t) + "/" + n + "/authTokens:generate"),
                  (i = M(f, l)),
                  (o = p.getImmediate({ optional: !0 })) &&
                    i.append("x-firebase-client", o.getPlatformInfoString()),
                  (a = { installation: { sdkVersion: L } }),
                  (s = { method: "POST", headers: i, body: JSON.stringify(a) }),
                  [
                    4,
                    U(function () {
                      return fetch(r, s);
                    }),
                  ]
                );
              case 1:
                return (u = e.sent()).ok ? [4, u.json()] : [3, 3];
              case 2:
                return (c = e.sent()), [2, V(c)];
              case 3:
                return [4, q("Generate Auth Token", u)];
              case 4:
                throw e.sent();
            }
            var t, n;
          });
        });
      }
      function be(s, u) {
        return (
          void 0 === u && (u = !1),
          d(this, void 0, void 0, function () {
            var a, t, n;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    he(s.appConfig, function (e) {
                      if (!_e(e)) throw H.create("not-registered");
                      var t,
                        n,
                        r,
                        i = e.authToken;
                      if (
                        u ||
                        2 !== (r = i).requestStatus ||
                        (function (e) {
                          var t = Date.now();
                          return (
                            t < e.creationTime ||
                            e.creationTime + e.expiresIn < t + D
                          );
                        })(r)
                      ) {
                        if (1 === i.requestStatus)
                          return (
                            (a = (function (r, i) {
                              return d(this, void 0, void 0, function () {
                                var t, n;
                                return h(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [4, me(r.appConfig)];
                                    case 1:
                                      (t = e.sent()), (e.label = 2);
                                    case 2:
                                      return 1 !== t.authToken.requestStatus
                                        ? [3, 5]
                                        : [4, K(100)];
                                    case 3:
                                      return e.sent(), [4, me(r.appConfig)];
                                    case 4:
                                      return (t = e.sent()), [3, 2];
                                    case 5:
                                      return 0 ===
                                        (n = t.authToken).requestStatus
                                        ? [2, be(r, i)]
                                        : [2, n];
                                  }
                                });
                              });
                            })(s, u)),
                            e
                          );
                        if (!navigator.onLine) throw H.create("app-offline");
                        var o =
                          ((t = e),
                          (n = { requestStatus: 1, requestTime: Date.now() }),
                          l(l({}, t), { authToken: n }));
                        return (
                          (a = (function (i, o) {
                            return d(this, void 0, void 0, function () {
                              var t, n, r;
                              return h(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return (
                                      e.trys.push([0, 3, , 8]), [4, we(i, o)]
                                    );
                                  case 1:
                                    return (
                                      (t = e.sent()),
                                      (r = l(l({}, o), { authToken: t })),
                                      [4, pe(i.appConfig, r)]
                                    );
                                  case 2:
                                    return e.sent(), [2, t];
                                  case 3:
                                    return !F((n = e.sent())) ||
                                      (401 !== n.serverCode &&
                                        404 !== n.serverCode)
                                      ? [3, 5]
                                      : [4, de(i.appConfig)];
                                  case 4:
                                    return e.sent(), [3, 7];
                                  case 5:
                                    return (
                                      (r = l(l({}, o), {
                                        authToken: { requestStatus: 0 },
                                      })),
                                      [4, pe(i.appConfig, r)]
                                    );
                                  case 6:
                                    e.sent(), (e.label = 7);
                                  case 7:
                                    throw n;
                                  case 8:
                                    return [2];
                                }
                              });
                            });
                          })(s, o)),
                          o
                        );
                      }
                      return e;
                    }),
                  ];
                case 1:
                  return (t = e.sent()), a ? [4, a] : [3, 3];
                case 2:
                  return (n = e.sent()), [3, 4];
                case 3:
                  (n = t.authToken), (e.label = 4);
                case 4:
                  return [2, n];
              }
            });
          })
        );
      }
      function me(e) {
        return he(e, function (e) {
          if (!_e(e)) throw H.create("not-registered");
          var t,
            n = e.authToken;
          return 1 === (t = n).requestStatus && t.requestTime + R < Date.now()
            ? l(l({}, e), { authToken: { requestStatus: 0 } })
            : e;
        });
      }
      function _e(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function Ee(t, n) {
        return (
          void 0 === n && (n = !1),
          d(this, void 0, void 0, function () {
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    (function (n) {
                      return d(this, void 0, void 0, function () {
                        var t;
                        return h(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, ge(n)];
                            case 1:
                              return (t = e.sent().registrationPromise)
                                ? [4, t]
                                : [3, 3];
                            case 2:
                              e.sent(), (e.label = 3);
                            case 3:
                              return [2];
                          }
                        });
                      });
                    })(t.appConfig),
                  ];
                case 1:
                  return e.sent(), [4, be(t, n)];
                case 2:
                  return [2, e.sent().token];
              }
            });
          })
        );
      }
      function Ie(s, u) {
        return d(this, void 0, void 0, function () {
          var r, i, o, a;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = s),
                  (n = u.fid),
                  (r = B(t) + "/" + n),
                  (i = M(s, u)),
                  (o = { method: "DELETE", headers: i }),
                  [
                    4,
                    U(function () {
                      return fetch(r, o);
                    }),
                  ]
                );
              case 1:
                return (a = e.sent()).ok
                  ? [3, 3]
                  : [4, q("Delete Installation", a)];
              case 2:
                throw e.sent();
              case 3:
                return [2];
            }
            var t, n;
          });
        });
      }
      function Se(e, r) {
        var i = e.appConfig;
        return (
          (function (e, t) {
            te();
            var n = Y(e),
              r = X.get(n);
            r || ((r = new Set()), X.set(n, r)), r.add(t);
          })(i, r),
          function () {
            var e, t, n;
            (e = r),
              (t = Y(i)),
              (n = X.get(t)) &&
                (n.delete(e), 0 === n.size && X.delete(t), ne());
          }
        );
      }
      function Oe(e) {
        return H.create("missing-app-config-values", { valueName: e });
      }
      function Te() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          i = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      (re = tt).INTERNAL.registerComponent(
        new f(
          "installations",
          function (e) {
            var t = e.getProvider("app").getImmediate(),
              n = {
                appConfig: (function (e) {
                  var t, n;
                  if (!e || !e.options) throw Oe("App Configuration");
                  if (!e.name) throw Oe("App Name");
                  try {
                    for (
                      var r = s(["projectId", "apiKey", "appId"]), i = r.next();
                      !i.done;
                      i = r.next()
                    ) {
                      var o = i.value;
                      if (!e.options[o]) throw Oe(o);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      i && !i.done && (n = r.return) && n.call(r);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId,
                  };
                })(t),
                platformLoggerProvider: e.getProvider("platform-logger"),
              };
            return {
              app: t,
              getId: function () {
                return (function (i) {
                  return d(this, void 0, void 0, function () {
                    var t, n, r;
                    return h(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, ge(i.appConfig)];
                        case 1:
                          return (
                            (t = e.sent()),
                            (n = t.installationEntry),
                            (r = t.registrationPromise)
                              ? r.catch(console.error)
                              : be(i).catch(console.error),
                            [2, n.fid]
                          );
                      }
                    });
                  });
                })(n);
              },
              getToken: function (e) {
                return Ee(n, e);
              },
              delete: function () {
                return (function (r) {
                  return d(this, void 0, void 0, function () {
                    var t, n;
                    return h(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            he((t = r.appConfig), function (e) {
                              if (!e || 0 !== e.registrationStatus) return e;
                            }),
                          ];
                        case 1:
                          if (!(n = e.sent())) return [3, 6];
                          if (1 !== n.registrationStatus) return [3, 2];
                          throw H.create("delete-pending-registration");
                        case 2:
                          if (2 !== n.registrationStatus) return [3, 6];
                          if (navigator.onLine) return [3, 3];
                          throw H.create("app-offline");
                        case 3:
                          return [4, Ie(t, n)];
                        case 4:
                          return e.sent(), [4, de(t)];
                        case 5:
                          e.sent(), (e.label = 6);
                        case 6:
                          return [2];
                      }
                    });
                  });
                })(n);
              },
              onIdChange: function (e) {
                return Se(n, e);
              },
            };
          },
          "PUBLIC",
        ),
      ),
        re.registerVersion("@firebase/installations", A),
        ((ae = oe = oe || {})[(ae.DEBUG = 0)] = "DEBUG"),
        (ae[(ae.VERBOSE = 1)] = "VERBOSE"),
        (ae[(ae.INFO = 2)] = "INFO"),
        (ae[(ae.WARN = 3)] = "WARN"),
        (ae[(ae.ERROR = 4)] = "ERROR"),
        (ae[(ae.SILENT = 5)] = "SILENT");
      oe.DEBUG, oe.VERBOSE, oe.INFO, oe.WARN, oe.ERROR, oe.SILENT;
      function Ce(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
            o = Pe[t];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                t +
                ")",
            );
          console[o].apply(console, Te(["[" + i + "]  " + e.name + ":"], n));
        }
      }
      var Ne = oe.INFO,
        Pe =
          (((ie = {})[oe.DEBUG] = "log"),
          (ie[oe.VERBOSE] = "log"),
          (ie[oe.INFO] = "info"),
          (ie[oe.WARN] = "warn"),
          (ie[oe.ERROR] = "error"),
          ie),
        Ae =
          (Object.defineProperty(Re.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (e) {
              if (!(e in oe))
                throw new TypeError("Invalid value assigned to `logLevel`");
              this._logLevel = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Re.prototype, "logHandler", {
            get: function () {
              return this._logHandler;
            },
            set: function (e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function",
                );
              this._logHandler = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Re.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (e) {
              this._userLogHandler = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Re.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, Te([this, oe.DEBUG], e)),
              this._logHandler.apply(this, Te([this, oe.DEBUG], e));
          }),
          (Re.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, Te([this, oe.VERBOSE], e)),
              this._logHandler.apply(this, Te([this, oe.VERBOSE], e));
          }),
          (Re.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, Te([this, oe.INFO], e)),
              this._logHandler.apply(this, Te([this, oe.INFO], e));
          }),
          (Re.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, Te([this, oe.WARN], e)),
              this._logHandler.apply(this, Te([this, oe.WARN], e));
          }),
          (Re.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, Te([this, oe.ERROR], e)),
              this._logHandler.apply(this, Te([this, oe.ERROR], e));
          }),
          Re);
      function Re(e) {
        (this.name = e),
          (this._logLevel = Ne),
          (this._logHandler = Ce),
          (this._userLogHandler = null);
      }
      var Le,
        je,
        ke,
        De,
        xe = "measurementId",
        He = "firebase_id",
        Fe = "origin",
        Be = "https://www.googletagmanager.com/gtag/js";
      ((je = Le = Le || {}).EVENT = "event"),
        (je.SET = "set"),
        (je.CONFIG = "config"),
        ((De = ke = ke || {}).ADD_SHIPPING_INFO = "add_shipping_info"),
        (De.ADD_PAYMENT_INFO = "add_payment_info"),
        (De.ADD_TO_CART = "add_to_cart"),
        (De.ADD_TO_WISHLIST = "add_to_wishlist"),
        (De.BEGIN_CHECKOUT = "begin_checkout"),
        (De.CHECKOUT_PROGRESS = "checkout_progress"),
        (De.EXCEPTION = "exception"),
        (De.GENERATE_LEAD = "generate_lead"),
        (De.LOGIN = "login"),
        (De.PAGE_VIEW = "page_view"),
        (De.PURCHASE = "purchase"),
        (De.REFUND = "refund"),
        (De.REMOVE_FROM_CART = "remove_from_cart"),
        (De.SCREEN_VIEW = "screen_view"),
        (De.SEARCH = "search"),
        (De.SELECT_CONTENT = "select_content"),
        (De.SELECT_ITEM = "select_item"),
        (De.SELECT_PROMOTION = "select_promotion"),
        (De.SET_CHECKOUT_OPTION = "set_checkout_option"),
        (De.SHARE = "share"),
        (De.SIGN_UP = "sign_up"),
        (De.TIMING_COMPLETE = "timing_complete"),
        (De.VIEW_CART = "view_cart"),
        (De.VIEW_ITEM = "view_item"),
        (De.VIEW_ITEM_LIST = "view_item_list"),
        (De.VIEW_PROMOTION = "view_promotion"),
        (De.VIEW_SEARCH_RESULTS = "view_search_results");
      var Ve,
        qe = new Ae("@firebase/analytics");
      function Ge(e, n, t) {
        var p,
          d,
          r = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            window[n].push(arguments);
          };
        return (
          window[t] && "function" == typeof window[t] && (r = window[t]),
          (window[t] =
            ((p = r),
            (d = e),
            function (e, t, n) {
              if (e === Le.EVENT) {
                var r = [];
                if (n && n.send_to) {
                  var i = n.send_to;
                  Array.isArray(i) || (i = [i]);
                  for (var o = 0, a = i; o < a.length; o++) {
                    var s = a[o],
                      u = d[s];
                    if (!u) {
                      r = [];
                      break;
                    }
                    r.push(u);
                  }
                }
                if (0 === r.length)
                  for (var c = 0, l = Object.values(d); c < l.length; c++) {
                    var f = l[c];
                    r.push(f);
                  }
                Promise.all(r)
                  .then(function () {
                    return p(Le.EVENT, t, n || {});
                  })
                  .catch(function (e) {
                    return qe.error(e);
                  });
              } else
                e === Le.CONFIG
                  ? (d[t] || Promise.resolve())
                      .then(function () {
                        p(Le.CONFIG, t, n);
                      })
                      .catch(function (e) {
                        return qe.error(e);
                      })
                  : p(Le.SET, t);
            })),
          { gtagCore: r, wrappedGtag: window[t] }
        );
      }
      var Me,
        Ue,
        Ke =
          (((Ve = {})["no-ga-id"] =
            '"' +
            xe +
            '" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.'),
          (Ve["already-exists"] =
            "A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID."),
          (Ve["already-initialized"] =
            "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),
          (Ve["interop-component-reg-failed"] =
            "Firebase Analytics Interop Component failed to instantiate"),
          Ve),
        We = new u("analytics", "Analytics", Ke),
        $e = {},
        ze = "dataLayer",
        Je = "gtag",
        Ye = !1;
      function Xe(e) {
        if (Ye) throw We.create("already-initialized");
        e.dataLayerName && (ze = e.dataLayerName),
          e.gtagName && (Je = e.gtagName);
      }
      function Ze(e, t) {
        var n,
          r,
          i,
          o,
          c = e.options[xe];
        if (!c) throw We.create("no-ga-id");
        if (null != $e[c]) throw We.create("already-exists", { id: c });
        if (!Ye) {
          !(function () {
            for (
              var e = window.document.getElementsByTagName("script"),
                t = 0,
                n = Object.values(e);
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r.src && r.src.includes(Be)) return r;
            }
          })() &&
            ((i = ze),
            ((o = document.createElement("script")).src = Be + "?l=" + i),
            (o.async = !0),
            document.head.appendChild(o)),
            (n = ze),
            (r = []),
            Array.isArray(window[n]) ? (r = window[n]) : (window[n] = r);
          var a = Ge($e, ze, Je),
            s = a.wrappedGtag,
            u = a.gtagCore;
          (Ue = s), (Me = u), (Ye = !0);
        }
        return (
          ($e[c] = (function (r, i, o) {
            return d(this, void 0, void 0, function () {
              var t, n;
              return h(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, i.getId()];
                  case 1:
                    return (
                      (t = e.sent()),
                      o("js", new Date()),
                      o(
                        Le.CONFIG,
                        r.options[xe],
                        (((n = {})[He] = t),
                        (n[Fe] = "firebase"),
                        (n.update = !0),
                        n),
                      ),
                      [2]
                    );
                }
              });
            });
          })(e, t, Me)),
          {
            app: e,
            logEvent: function (e, t, n) {
              return (
                (r = Ue),
                (i = c),
                (o = e),
                (u = (a = t) || {}),
                ((s = n) && s.global) || (u = l(l({}, a), { send_to: i })),
                void r(Le.EVENT, o, u || {})
              );
              var r, i, o, a, s, u;
            },
            setCurrentScreen: function (e, t) {
              return (
                (n = Ue),
                (r = c),
                (i = e),
                void ((o = t) && o.global
                  ? n(Le.SET, { screen_name: i })
                  : n(Le.CONFIG, r, { update: !0, screen_name: i }))
              );
              var n, r, i, o;
            },
            setUserId: function (e, t) {
              return (
                (n = Ue),
                (r = c),
                (i = e),
                void ((o = t) && o.global
                  ? n(Le.SET, { user_id: i })
                  : n(Le.CONFIG, r, { update: !0, user_id: i }))
              );
              var n, r, i, o;
            },
            setUserProperties: function (e, t) {
              return (function (e, t, n, r) {
                if (r && r.global) {
                  for (
                    var i = {}, o = 0, a = Object.keys(n);
                    o < a.length;
                    o++
                  ) {
                    var s = a[o];
                    i["user_properties." + s] = n[s];
                  }
                  e(Le.SET, i);
                } else e(Le.CONFIG, t, { update: !0, user_properties: n });
              })(Ue, c, e, t);
            },
            setAnalyticsCollectionEnabled: function (e) {
              return (t = e), void (window["ga-disable-" + c] = !t);
              var t;
            },
          }
        );
      }
      var Qe,
        et = "analytics";
      (Qe = tt).INTERNAL.registerComponent(
        new f(
          et,
          function (e) {
            return Ze(
              e.getProvider("app").getImmediate(),
              e.getProvider("installations").getImmediate(),
            );
          },
          "PUBLIC",
        ).setServiceProps({ settings: Xe, EventName: ke }),
      ),
        Qe.INTERNAL.registerComponent(
          new f(
            "analytics-internal",
            function (e) {
              try {
                return { logEvent: e.getProvider(et).getImmediate().logEvent };
              } catch (e) {
                throw We.create("interop-component-reg-failed", { reason: e });
              }
            },
            "PRIVATE",
          ),
        ),
        Qe.registerVersion("@firebase/analytics", "0.3.3");
    }).apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.",
      ))
    );
  }
});
//# sourceMappingURL=firebase-analytics.js.map
