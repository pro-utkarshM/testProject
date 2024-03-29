!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 198));
})([
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "e", function () {
        return i;
      }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "h", function () {
        return s;
      }),
      n.d(e, "g", function () {
        return c;
      }),
      n.d(e, "f", function () {
        return u;
      }),
      n.d(e, "i", function () {
        return l;
      }),
      n.d(e, "b", function () {
        return h;
      });
    var r = Object.freeze({
        LAST_RECORDING_ACTIVITY_STORE_DEBOUNCE: 5e3,
        MAX_TIME_SINCE_LAST_RECORDING_ACTIVITY_IN_SESSION: 12e4,
      }),
      i = window.hjLazyModules,
      o = { SCRIPT: "js", STYLESHEET: "css" },
      a = "https://hotjar.com",
      s = (Object.freeze({ id: null, selector_version: 2 }), 60),
      c = 60 * s,
      u = 24 * c,
      l = 365 * u,
      h = s / 2;
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return p;
    });
    var r = n(16),
      i = n.n(r),
      o = n(2),
      a = n(28),
      s = n(6),
      c = function (t, e) {
        if (!t) return null;
        var n = new s.a(new s.a().getTime() + 1e3 * t);
        if (e) {
          var r = new s.a();
          r.setHours(23),
            r.setMinutes(59),
            r.setSeconds(59),
            r.setMilliseconds(999),
            n.setTime(Math.min(n, r));
        }
        return n;
      };
    function u(t) {
      var e = this,
        n = t.key,
        r = t.supportSubdomains,
        s = void 0 !== r && r,
        c = t.ttlSeconds,
        u = void 0 === c ? o.i : c,
        l = t.shouldSync,
        h = void 0 === l || l,
        d = t.keepAliveSeconds,
        f = void 0 === d ? 0 : d,
        g = t.shouldExtendExpiryOnActivity,
        p = void 0 !== g && g,
        v = t.shouldExpireAtMidnight,
        m = void 0 !== v && v;
      (this.key = n),
        (this.ttlSeconds = u),
        (this.shouldSync = h),
        (this.keepAliveSeconds = f),
        (this.shouldExpireAtMidnight = m),
        (this.isSessionOnly = 0 === this.ttlSeconds),
        (this.supportSubdomains = s),
        this.ttlSeconds > 0 &&
          ((this.activeRefreshTimerId = null),
          this.keepAliveSeconds > 0 &&
            setInterval(function () {
              return e.refreshExpiryWithThrottling();
            }, 1e3 * f),
          p &&
            (document.addEventListener(
              "click",
              function () {
                return e.refreshExpiryWithThrottling();
              },
              !1,
            ),
            document.addEventListener(
              "mousemove",
              function () {
                return e.refreshExpiryWithThrottling();
              },
              !1,
            ),
            document.addEventListener(
              "keypress",
              function () {
                return e.refreshExpiryWithThrottling();
              },
              !1,
            ),
            document.addEventListener(
              "scroll",
              function () {
                return e.refreshExpiryWithThrottling();
              },
              !1,
            ),
            document.addEventListener(
              "visibilityChange",
              function () {
                return e.refreshExpiryWithThrottling();
              },
              !1,
            ))),
        (this.cookie = i.a.withAttributes(
          (function (t) {
            var e = { sameSite: "None", secure: !0 };
            if (t) {
              var n = window.location.hostname;
              e.domain = Object(a.getMidLevelDomain)(n);
            }
            return e;
          })(s),
        ));
    }
    function l(t) {
      var e = t.key;
      this.key = e;
    }
    function h(t) {
      u.call(this, t);
    }
    (u.prototype.getKey = function () {
      return this.key;
    }),
      (u.prototype.get = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.resetExpiry,
          n = void 0 !== e && e;
        try {
          var r,
            i =
              null !== (r = this.cookie.get(this.key)) && void 0 !== r
                ? r
                : null;
          if (
            (!this.isSessionOnly && this.shouldSync && (i = this.sync(i)),
            n && this.ttlSeconds && i)
          ) {
            var o = c(this.ttlSeconds, this.shouldExpireAtMidnight);
            this.cookie.set(this.key, i, { expires: o });
          }
          return i;
        } catch (t) {
          return (
            hj.log.debug("Cookie Error: ".concat(t.message), "cookies"),
            hj.metrics.count("session-rejection", {
              tag: { reason: "cookies" },
              extraTags: { cookie: this.key, message: t.message },
            }),
            null
          );
        }
      }),
      (u.prototype._setCookie = function (t) {
        var e = c(this.ttlSeconds, this.shouldExpireAtMidnight);
        this.cookie.set(this.key, t, { expires: e });
      }),
      (u.prototype._setLocalStorage = function (t) {
        p.canUseLocalStorage() && window.localStorage.setItem(this.key, t);
      }),
      (u.prototype._getLocalStorage = function () {
        if (p.canUseLocalStorage())
          return window.localStorage.getItem(this.key);
      }),
      (u.prototype._removeLocalStorage = function () {
        p.canUseLocalStorage() && window.localStorage.removeItem(this.key);
      }),
      (u.prototype.set = function (t, e) {
        this._setCookie(t),
          !e &&
            this.shouldSync &&
            (this.isSessionOnly || this._setLocalStorage(t));
      }),
      (u.prototype.setEncoded = function (t, e) {
        t !== decodeURIComponent(t) && (t = decodeURIComponent(t)),
          this._setCookie(t);
        var n = encodeURIComponent(t);
        !e &&
          this.shouldSync &&
          (this.isSessionOnly || this._setLocalStorage(n));
      }),
      (u.prototype.clear = function () {
        this.cookie.remove(this.key),
          this.isSessionOnly || this._removeLocalStorage();
      }),
      (u.prototype.sync = function (t) {
        if (!p.canUseLocalStorage() || !this.shouldSync) return t;
        var e = this._getLocalStorage(),
          n = t;
        return (
          t ? this._setLocalStorage(t) : e && !t && (this.set(e, !0), (n = e)),
          n
        );
      }),
      (u.prototype.refreshExpiryWithThrottling = function () {
        var t = this;
        this.activeRefreshTimerId ||
          (this.activeRefreshTimerId = setTimeout(function () {
            t.get({ resetExpiry: !0 }), (t.activeRefreshTimerId = null);
          }, 1e3 * o.b));
      }),
      (l.prototype.getKey = function () {
        return this.key;
      }),
      (l.prototype.get = function () {
        return this._getLocalStorage();
      }),
      (l.prototype.set = function (t) {
        this._setLocalStorage(t);
      }),
      (l.prototype.clear = function () {
        this._removeLocalStorage();
      }),
      (l.prototype._setLocalStorage = function (t) {
        p.canUseLocalStorage() && window.localStorage.setItem(this.key, t);
      }),
      (l.prototype._getLocalStorage = function () {
        if (p.canUseLocalStorage())
          return window.localStorage.getItem(this.key);
      }),
      (l.prototype._removeLocalStorage = function () {
        p.canUseLocalStorage() && window.localStorage.removeItem(this.key);
      }),
      (h.prototype = Object.create(u.prototype)),
      (h.prototype.constructor = h),
      (h.prototype.exists = function (t) {
        var e = this.get();
        e = e ? e.split(",") : [];
        for (var n = 0; n < e.length; n++) if (t.toString() === e[n]) return !0;
        return !1;
      }),
      (h.prototype.add = function (t) {
        var e = this.get();
        (e = e ? e.split(",") : []).push(t), this.setEncoded(e.join(","));
      }),
      (h.prototype.remove = function (t) {
        var e = this.get(),
          n = (e = e ? e.split(",") : []).filter(function (e) {
            return e !== t.toString();
          });
        this.setEncoded(n.join(","));
      }),
      (h.prototype.sync = function (t) {
        if (!p.canUseLocalStorage() || !this.shouldSync) return t;
        var e = window.localStorage.getItem(this.key) || "";
        (t = t ? decodeURIComponent(t).split(",") : []),
          (e = e ? decodeURIComponent(e).split(",") : []);
        var n = t.concat(e),
          r = n
            .filter(function (t, e) {
              return n.indexOf(t) === e;
            })
            .join();
        return r && this.setEncoded(r), r;
      });
    var d = null,
      f = null,
      g = null,
      p = {
        items: {
          ABSOLUTE_SESSION_IN_PROGRESS: new u({
            key: "_hjAbsoluteSessionInProgress",
            supportSubdomains: !0,
            ttlSeconds: o.g / 2,
            shouldSync: !1,
            shouldExtendExpiryOnActivity: !0,
            shouldExpireAtMidnight: !0,
          }),
          HAS_CACHED_USER_ATTRIBUTES: new u({
            key: "_hjHasCachedUserAttributes",
            ttlSeconds: 0,
          }),
          COOKIE_TEST: new u({ key: "_hjCookieTest", ttlSeconds: 0 }),
          DEBUG_FLAG: new u({ key: "hjDebug", ttlSeconds: 0 }),
          FEEDBACK_SHOW_MESSAGE: new u({
            key: "_hjShownFeedbackMessage",
            supportSubdomains: !1,
            ttlSeconds: o.f,
          }),
          HJ_ID: new u({ key: "_hjid", supportSubdomains: !0 }),
          HJ_SESSION_USER: new u({
            key: "_hjSessionUser_".concat(hjSiteSettings.site_id),
            supportSubdomains: !0,
            shouldSync: !1,
          }),
          HJ_SESSION: new u({
            key: "_hjSession_".concat(hjSiteSettings.site_id),
            supportSubdomains: !0,
            shouldSync: !1,
            ttlSeconds: o.g / 2,
            shouldExtendExpiryOnActivity: !0,
          }),
          FIRST_SEEN: new u({
            key: "_hjFirstSeen",
            supportSubdomains: !0,
            shouldSync: !1,
            ttlSeconds: o.g / 2,
            shouldExtendExpiryOnActivity: !0,
          }),
          HUBSPOT_UTK: new u({ key: "hubspotutk" }),
          INCLUDE_IN_PAGEVIEW_SAMPLE: new u({
            key: "_hjIncludedInPageviewSample",
            supportSubdomains: !1,
            shouldSync: !1,
            ttlSeconds: 2 * o.h,
            keepAliveSeconds: o.h / 2,
          }),
          INCLUDE_IN_SESSION_SAMPLE: new u({
            key: "_hjIncludedInSessionSample_".concat(hjSiteSettings.site_id),
            supportSubdomains: !0,
            shouldSync: !1,
            ttlSeconds: 2 * o.h,
            keepAliveSeconds: o.h / 2,
          }),
          POLL_DONE: new h({ key: "_hjDonePolls", supportSubdomains: !0 }),
          POLL_MINIMIZED: new h({
            key: "_hjMinimizedPolls",
            supportSubdomains: !0,
          }),
          SESSION_RESUMED: new u({ key: "_hjSessionResumed", ttlSeconds: 0 }),
          SESSION_TOO_LARGE: new u({
            key: "_hjSessionTooLarge",
            ttlSeconds: o.g,
          }),
          SURVEY_INVITES_CLOSED: new h({ key: "_hjClosedSurveyInvites" }),
          USER_ATTRIBUTES_HASH: new u({
            key: "_hjUserAttributesHash",
            supportSubdomains: !1,
            shouldSync: !1,
            ttlSeconds: 2 * o.h,
            keepAliveSeconds: o.h / 2,
          }),
        },
        localStorage: { USER_ATTRIBUTES: new l({ key: "_hjUserAttributes" }) },
        areCookiesSupported: function () {
          return d;
        },
        setCookiesSupported: function (t) {
          d = t;
        },
        canUseCookies: function () {
          return (
            null === this.areCookiesSupported() &&
              this.setCookiesSupported(
                (function () {
                  try {
                    if (!navigator.cookieEnabled) return !1;
                    if (Object.keys(i.a.get()).length > 0) return !0;
                    if (
                      (p.items.COOKIE_TEST.set("1"),
                      "1" === p.items.COOKIE_TEST.get())
                    )
                      return p.items.COOKIE_TEST.clear(), !0;
                  } catch (t) {
                    return (
                      hj.metrics.count("session-rejection", {
                        tag: { reason: "cookies" },
                      }),
                      !1
                    );
                  }
                })(),
              ),
            this.areCookiesSupported()
          );
        },
        canUseLocalStorage: hj.tryCatch(function () {
          if (null !== f) return f;
          try {
            localStorage.setItem("_hjLocalStorageTest", 1),
              localStorage.removeItem("_hjLocalStorageTest"),
              (f = !0);
          } catch (t) {
            f = !1;
          }
          return f;
        }, "storage.canUseLocalStorage"),
        canUseSessionStorage: hj.tryCatch(function () {
          if (null !== g) return g;
          try {
            sessionStorage.setItem("_hjSessionStorageTest", 1),
              sessionStorage.removeItem("_hjSessionStorageTest"),
              (g = !0);
          } catch (t) {
            g = !1;
          }
          return g;
        }, "storage.canUseSessionStorage"),
      };
    hj.storage = p;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return i(t);
        })(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return i(t, e);
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    n.d(e, "a", function () {
      return l;
    });
    var o,
      a = "🐛",
      s = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return function () {
          return (t += e);
        };
      },
      c = function (t) {
        return (function (t) {
          for (
            var e,
              n = arguments.length,
              i = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            i[o - 1] = arguments[o];
          return (e = console).debug.apply(e, [a, t].concat(r(i || [])));
        })("[safeNative] ".concat(t));
      },
      u = function () {
        if (document.body) {
          var t = document.createElement("iframe");
          return (
            (t.id = "_hjSafeContext_".concat(
              (function () {
                (arguments.length > 0 && void 0 !== arguments[0]) || s(45887);
                return Math.floor(1e8 * Math.random());
              })(),
            )),
            (t.title = "_hjSafeContext"),
            (t.tabIndex = -1),
            t.setAttribute("aria-hidden", "true"),
            (t.src = "about:blank"),
            t.style.setProperty("display", "none", "important"),
            t.style.setProperty("width", "1px", "important"),
            t.style.setProperty("height", "1px", "important"),
            t.style.setProperty("opacity", "0", "important"),
            t.style.setProperty("pointer-events", "none", "important"),
            document.body.appendChild(t),
            t
          );
        }
      },
      l = (function (t, e) {
        try {
          if (!o) {
            var n = u();
            if (!n)
              return (
                c(
                  "Unable to access an IFrame context, using default constructor.",
                ),
                t
              );
            o = n;
          }
          var r = t.name || e;
          if (!r)
            return (
              c("Unable to name property or missing fallbackConstructorName"), t
            );
          if (!o.contentWindow)
            return c("Unable to access contentWindow property"), t;
          var i = o.contentWindow[r];
          return (
            i ||
            (c(
              "Unable to access constructor with name [".concat(
                r,
                "] from an IFrame context",
              ),
            ),
            t)
          );
        } catch (e) {
          return (
            c(
              "An unexpected error occurred".concat(
                e instanceof Error ? ": ".concat(e.message) : "",
                ". Using default constructor",
              ),
            ),
            t
          );
        }
      })(Date, "Date");
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var r = n(5),
      i = !1,
      o = 2,
      a = !1,
      s = {
        isRecordingEnabled: function () {
          return i;
        },
        setRecordingEnabled: function (t) {
          i = t;
        },
        getSelectorVersion: function () {
          return o;
        },
        setSelectorVersion: function (t) {
          o = t;
        },
        trackSessionResumed: function () {
          a = !0;
        },
        isResumedSession: function () {
          return a;
        },
        isFirstSeen: function () {
          return "1" === r.a.items.FIRST_SEEN.get();
        },
        setFirstSeen: function () {
          return r.a.items.FIRST_SEEN.set("1");
        },
      };
  },
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return o;
    }),
      n.d(e, "e", function () {
        return a;
      }),
      n.d(e, "f", function () {
        return s;
      }),
      n.d(e, "j", function () {
        return c;
      }),
      n.d(e, "k", function () {
        return u;
      }),
      n.d(e, "a", function () {
        return l;
      }),
      n.d(e, "c", function () {
        return h;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "i", function () {
        return f;
      }),
      n.d(e, "g", function () {
        return g;
      }),
      n.d(e, "b", function () {
        return p;
      });
    var r,
      i = n(39),
      o = hj.tryCatch(function (t) {
        var e = t || navigator.userAgent;
        return e.indexOf("MSIE ") > 0
          ? document.all && !document.compatMode
            ? 5
            : document.all && !window.XMLHttpRequest
            ? 6
            : document.all && !document.querySelector
            ? 7
            : document.all && !document.addEventListener
            ? 8
            : document.all && !window.atob
            ? 9
            : 10
          : -1 !== e.indexOf("Trident/")
          ? 11
          : -1 !== e.indexOf("Edge/")
          ? 12
          : "notIE";
      }, "utils"),
      a =
        (hj.tryCatch(function (t) {
          return (t = t || navigator.userAgent).indexOf("Firefox") > -1;
        }, "utils"),
        hj.tryCatch(function (t) {
          return (
            (t = t || navigator.userAgent).indexOf("Safari") > -1 &&
            -1 === t.indexOf("Chrome")
          );
        }, "utils")),
      s = hj.tryCatch(function (t) {
        return (
          (t = t || navigator.userAgent),
          /\b(Safari|iPad|iPhone|iPod)\b/.test(t) &&
            /WebKit/.test(t) &&
            !/Edge/.test(t) &&
            void 0 === window.MSStream
        );
      }, "utils"),
      c = hj.tryCatch(function (t) {
        var e, n, r;
        for (e = t.length - 1; e > 0; e -= 1)
          (n = Math.floor(Math.random() * (e + 1))),
            (r = t[e]),
            (t[e] = t[n]),
            (t[n] = r);
        return t;
      }, "utils"),
      u = hj.tryCatch(function (t) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          t,
        );
      }, "utils"),
      l = hj.tryCatch(function () {
        return (
          hj.userDeviceType ||
            ((hj.userDeviceType = Object(i.a)()),
            "mobile" === hj.userDeviceType && (hj.userDeviceType = "phone")),
          hj.userDeviceType
        );
      }, "utils"),
      h = hj.tryCatch(function () {
        return (
          _hjSettings.wsHost || (_hjSettings.wsHost = "ws.hotjar.com"),
          _hjSettings.wsHost
        );
      }, "utils.get-ws-server"),
      d = function (t) {
        var e = !1;
        return function () {
          if (!e) {
            e = !0;
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return t.apply(null, r);
          }
        };
      },
      f = function (t) {
        var e = {};
        return function (n) {
          if (!e[n]) {
            e[n] = !0;
            for (
              var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              i[o - 1] = arguments[o];
            return t.apply(null, i);
          }
        };
      },
      g = function (t, e) {
        var n = {},
          r = {};
        return (
          [t, e].forEach(function (t) {
            if (t)
              for (var e in t)
                Object.prototype.hasOwnProperty.call(t, e) &&
                  "length" !== e &&
                  (n[e] = t[e]);
          }),
          Object.keys(n)
            .sort()
            .forEach(function (t) {
              r[t] = n[t];
            }),
          r
        );
      },
      p =
        ((r = 1),
        function () {
          return r++;
        });
  },
  ,
  ,
  ,
  function (t, e, n) {
    var r, i, o;
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    /*! js-cookie v3.0.1 | MIT */ (o = function () {
      "use strict";
      function t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      return (function e(n, r) {
        function i(e, i, o) {
          if ("undefined" != typeof document) {
            "number" == typeof (o = t({}, r, o)).expires &&
              (o.expires = new Date(Date.now() + 864e5 * o.expires)),
              o.expires && (o.expires = o.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var a = "";
            for (var s in o)
              o[s] &&
                ((a += "; " + s),
                !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return (document.cookie = e + "=" + n.write(i, e) + a);
          }
        }
        return Object.create(
          {
            set: i,
            get: function (t) {
              if ("undefined" != typeof document && (!arguments.length || t)) {
                for (
                  var e = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var o = e[i].split("="),
                    a = o.slice(1).join("=");
                  try {
                    var s = decodeURIComponent(o[0]);
                    if (((r[s] = n.read(a, s)), t === s)) break;
                  } catch (t) {}
                }
                return t ? r[t] : r;
              }
            },
            remove: function (e, n) {
              i(e, "", t({}, n, { expires: -1 }));
            },
            withAttributes: function (n) {
              return e(this.converter, t({}, this.attributes, n));
            },
            withConverter: function (n) {
              return e(t({}, this.converter, n), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(n) },
          },
        );
      })(
        {
          read: function (t) {
            return (
              '"' === t[0] && (t = t.slice(1, -1)),
              t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (t) {
            return encodeURIComponent(t).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent,
            );
          },
        },
        { path: "/" },
      );
    }),
      "object" === a(e) && void 0 !== t
        ? (t.exports = o())
        : void 0 ===
            (i = "function" == typeof (r = o) ? r.call(e, n, e, t) : r) ||
          (t.exports = i);
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var r = n(8),
      i = n(2),
      o = n(6),
      a = 0,
      s = function (t, e, n) {
        if (r.a.isRecordingEnabled()) {
          var s = o.a.now();
          s - a > i.a.LAST_RECORDING_ACTIVITY_STORE_DEBOUNCE &&
            (sessionStorage.setItem("_hjRecordingLastActivity", s), (a = s));
        }
        return hj.eventStream.write(t, e, n);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return i;
      }),
      n.d(e, "e", function () {
        return o;
      }),
      n.d(e, "h", function () {
        return a;
      }),
      n.d(e, "i", function () {
        return s;
      }),
      n.d(e, "d", function () {
        return c;
      }),
      n.d(e, "c", function () {
        return u;
      }),
      n.d(e, "k", function () {
        return l;
      }),
      n.d(e, "f", function () {
        return h;
      }),
      n.d(e, "g", function () {
        return d;
      }),
      n.d(e, "j", function () {
        return f;
      });
    var r = "_hj_hm-retaker",
      i = 340,
      o = {
        htmlError: "retaker_html_error",
        ready: "retaker_ready",
        sendHTML: "retaker_send_html",
        start: "retaker_start",
      },
      a = "k",
      s = [-1 != navigator.userAgent.indexOf("Mac") ? "metaKey" : "ctrlKey"],
      c =
        "https://help.hotjar.com/hc/en-us/articles/5215291845143-How-to-Update-a-Heatmap-Screenshot",
      u = "_hjRetakerHtmlDebug",
      l = { button: "button", shortcut: "shortcut" },
      h = {
        basicScreenshot: "basicScreenshot",
        dynamicElements: "dynamicElements",
        cookiesBanners: "cookiesBanners",
      },
      d = "_hjRetakerMode",
      f = "_hjRetakerStrings";
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = function (t, e) {
      return t.substring(0, e.length) === e;
    };
  },
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = Object.freeze({
      POPOVER: "popover",
      FULL_SCREEN: "full_screen",
      EXTERNAL: "external_link",
      BUTTON: "button",
      INLINE_EMBEDDED: "inline",
    });
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "getParameter", function () {
        return a;
      }),
      n.d(e, "tryDecodeURIComponent", function () {
        return s;
      }),
      n.d(e, "getUrlFromString", function () {
        return c;
      }),
      n.d(e, "getMidLevelDomain", function () {
        return l;
      });
    var r = n(16),
      i = n.n(r),
      o = n(21);
    function a(t) {
      var e,
        n,
        r = [];
      for (
        e = new RegExp(
          "[^?&]?" + t.replace(/\[/, "\\[").replace(/]/, "\\]") + "=([^&]+)",
          "g",
        );
        (n = e.exec(location.search));

      )
        r.push(s(n[1]));
      switch (r.length) {
        case 0:
          return "";
        case 1:
          return r[0];
        default:
          return r;
      }
    }
    function s(t) {
      try {
        return decodeURIComponent(t);
      } catch (e) {
        return t;
      }
    }
    function c(t) {
      return (
        Object(o.a)(t, "http") ||
          (Object(o.a)(t, "/") || (t = "/" + t),
          (t =
            location.protocol +
            "//" +
            location.hostname +
            ("" != location.port ? ":" + location.port : "") +
            t)),
        t
      );
    }
    var u = {};
    function l(t) {
      if (!u[t]) {
        var e,
          n = t.lastIndexOf(".");
        (e = (function t(e, n) {
          n = n ? n - 1 : e.length;
          var r,
            i = e.lastIndexOf(".", n - 1);
          i > -1 &&
            ((function (t) {
              try {
                var e = { domain: t };
                h.set("_hjTLDTest", t, e);
                var n = h.get("_hjTLDTest");
                return n && h.remove("_hjTLDTest", e), n;
              } catch (t) {
                return !1;
              }
            })((r = e.substring(i))) ||
              (r = t(e, i)));
          return r;
        })(t, n)),
          (u[t] = e || t);
      }
      return u[t];
    }
    var h = i.a.withAttributes({ sameSite: "None", secure: !0 });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return i;
      }),
      n.d(e, "c", function () {
        return a;
      }),
      n.d(e, "d", function () {
        return s;
      });
    var r = "_hj-widget-container",
      i = "_hj-widget-iframe";
    function o(t, e) {
      for (var n = t.querySelectorAll(e), r = 0; r < n.length; r++) {
        var i = n[r];
        i && i.parentElement && i.parentElement.removeChild(i);
      }
    }
    function a(t) {
      o(t, ".".concat(r));
    }
    function s(t) {
      o(t, ".".concat(i));
    }
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return b;
    }),
      n.d(e, "b", function () {
        return j;
      });
    var r =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (
      var i = function (t) {
          return "string" == typeof t && r.test(t);
        },
        o = [],
        a = 0;
      a < 256;
      ++a
    )
      o.push((a + 256).toString(16).substr(1));
    var s = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (
          o[t[e + 0]] +
          o[t[e + 1]] +
          o[t[e + 2]] +
          o[t[e + 3]] +
          "-" +
          o[t[e + 4]] +
          o[t[e + 5]] +
          "-" +
          o[t[e + 6]] +
          o[t[e + 7]] +
          "-" +
          o[t[e + 8]] +
          o[t[e + 9]] +
          "-" +
          o[t[e + 10]] +
          o[t[e + 11]] +
          o[t[e + 12]] +
          o[t[e + 13]] +
          o[t[e + 14]] +
          o[t[e + 15]]
        ).toLowerCase();
      if (!i(n)) throw TypeError("Stringified UUID is invalid");
      return n;
    };
    var c = function (t) {
      if (!i(t)) throw TypeError("Invalid UUID");
      var e,
        n = new Uint8Array(16);
      return (
        (n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
        (n[1] = (e >>> 16) & 255),
        (n[2] = (e >>> 8) & 255),
        (n[3] = 255 & e),
        (n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
        (n[5] = 255 & e),
        (n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
        (n[7] = 255 & e),
        (n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
        (n[9] = 255 & e),
        (n[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
        (n[11] = (e / 4294967296) & 255),
        (n[12] = (e >>> 24) & 255),
        (n[13] = (e >>> 16) & 255),
        (n[14] = (e >>> 8) & 255),
        (n[15] = 255 & e),
        n
      );
    };
    function u(t, e, n, r) {
      switch (t) {
        case 0:
          return (e & n) ^ (~e & r);
        case 1:
          return e ^ n ^ r;
        case 2:
          return (e & n) ^ (e & r) ^ (n & r);
        case 3:
          return e ^ n ^ r;
      }
    }
    function l(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
    var h,
      d = (function (t, e, n) {
        function r(t, r, i, o) {
          if (
            ("string" == typeof t &&
              (t = (function (t) {
                t = unescape(encodeURIComponent(t));
                for (var e = [], n = 0; n < t.length; ++n)
                  e.push(t.charCodeAt(n));
                return e;
              })(t)),
            "string" == typeof r && (r = c(r)),
            16 !== r.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)",
            );
          var a = new Uint8Array(16 + t.length);
          if (
            (a.set(r),
            a.set(t, r.length),
            ((a = n(a))[6] = (15 & a[6]) | e),
            (a[8] = (63 & a[8]) | 128),
            i)
          ) {
            o = o || 0;
            for (var u = 0; u < 16; ++u) i[o + u] = a[u];
            return i;
          }
          return s(a);
        }
        try {
          r.name = t;
        } catch (t) {}
        return (
          (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          r
        );
      })("v5", 80, function (t) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
          n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof t) {
          var r = unescape(encodeURIComponent(t));
          t = [];
          for (var i = 0; i < r.length; ++i) t.push(r.charCodeAt(i));
        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
        t.push(128);
        for (
          var o = t.length / 4 + 2,
            a = Math.ceil(o / 16),
            s = new Array(a),
            c = 0;
          c < a;
          ++c
        ) {
          for (var h = new Uint32Array(16), d = 0; d < 16; ++d)
            h[d] =
              (t[64 * c + 4 * d] << 24) |
              (t[64 * c + 4 * d + 1] << 16) |
              (t[64 * c + 4 * d + 2] << 8) |
              t[64 * c + 4 * d + 3];
          s[c] = h;
        }
        (s[a - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
          (s[a - 1][14] = Math.floor(s[a - 1][14])),
          (s[a - 1][15] = (8 * (t.length - 1)) & 4294967295);
        for (var f = 0; f < a; ++f) {
          for (var g = new Uint32Array(80), p = 0; p < 16; ++p) g[p] = s[f][p];
          for (var v = 16; v < 80; ++v)
            g[v] = l(g[v - 3] ^ g[v - 8] ^ g[v - 14] ^ g[v - 16], 1);
          for (
            var m = n[0], y = n[1], j = n[2], b = n[3], w = n[4], S = 0;
            S < 80;
            ++S
          ) {
            var _ = Math.floor(S / 20),
              E = (l(m, 5) + u(_, y, j, b) + w + e[_] + g[S]) >>> 0;
            (w = b), (b = j), (j = l(y, 30) >>> 0), (y = m), (m = E);
          }
          (n[0] = (n[0] + m) >>> 0),
            (n[1] = (n[1] + y) >>> 0),
            (n[2] = (n[2] + j) >>> 0),
            (n[3] = (n[3] + b) >>> 0),
            (n[4] = (n[4] + w) >>> 0);
        }
        return [
          (n[0] >> 24) & 255,
          (n[0] >> 16) & 255,
          (n[0] >> 8) & 255,
          255 & n[0],
          (n[1] >> 24) & 255,
          (n[1] >> 16) & 255,
          (n[1] >> 8) & 255,
          255 & n[1],
          (n[2] >> 24) & 255,
          (n[2] >> 16) & 255,
          (n[2] >> 8) & 255,
          255 & n[2],
          (n[3] >> 24) & 255,
          (n[3] >> 16) & 255,
          (n[3] >> 8) & 255,
          255 & n[3],
          (n[4] >> 24) & 255,
          (n[4] >> 16) & 255,
          (n[4] >> 8) & 255,
          255 & n[4],
        ];
      }),
      f = new Uint8Array(16);
    function g() {
      if (
        !h &&
        !(h =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
      return h(f);
    }
    var p = function (t, e, n) {
        var r = (t = t || {}).random || (t.rng || g)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
          n = n || 0;
          for (var i = 0; i < 16; ++i) e[n + i] = r[i];
          return e;
        }
        return s(r);
      },
      v =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto)),
      m = new Array(16),
      y = v
        ? void 0
        : function () {
            for (var t, e = 0; e < 16; e++)
              0 == (3 & e) && (t = 4294967296 * Math.random()),
                (m[e] = (t >>> ((3 & e) << 3)) & 255);
            return m;
          },
      j = d,
      b = function (t, e, n) {
        return y && ((t = t || {}).rng = y), p(t, e, n);
      };
  },
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "g", function () {
        return s;
      }),
      n.d(e, "b", function () {
        return c;
      }),
      n.d(e, "f", function () {
        return u;
      }),
      n.d(e, "e", function () {
        return l;
      });
    var r = n(32);
    function i(t, e, n) {
      !(function r(i) {
        if ((i > 0 && t(), i >= n.maxRetries)) e && e();
        else {
          var o =
            0 === i && n.firstAttemptDelay
              ? n.firstAttemptDelay
              : n.delay * Math.pow(n.baseExponent || 3, i);
          setTimeout(function () {
            !0 !== hj.globals.get(n.state) && r(i + 1);
          }, o);
        }
      })(0);
    }
    var o = function () {
        return Object(r.a)();
      },
      a = function (t) {
        return Object(r.b)(t, "ded6f544-7265-46bb-ab52-fefac2598466");
      },
      s = function (t) {
        return JSON.stringify(t);
      },
      c = function (t) {
        return JSON.parse(t);
      },
      u = function (t) {
        var e = null;
        return function () {
          return null !== e ? e : (e = t());
        };
      },
      l = function () {
        var t;
        return null === (t = window.navigator) || void 0 === t
          ? void 0
          : t.userAgent;
      };
  },
  function (t, e, n) {
    "use strict";
    var r, i;
    function o(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return u;
      }),
      n.d(e, "c", function () {
        return m;
      });
    var a = Object.freeze({
        LIVE: "LIVE",
        REVIEW_WEBAPP: "REVIEW_WEBAPP",
        REVIEW: "REVIEW",
        STAGING: "STAGING",
        DEV: "DEV",
        DEV_OLD: "DEV_OLD",
      }),
      s = function () {
        var t = document.location.host.match(
          /^(insights-webapp|surveys-webapp|insights|surveys)-(.*?)((?:\.[^.]+)?(?:\.hotjarians\.net)|(?:\.[^.]+)?(?:\.eks\.hotjar\.com))$/,
        );
        return (
          t && {
            component: t[1],
            reviewId: t[2],
            domain: t[3],
            reviewUrlSuffix: t[2] + t[3],
          }
        );
      },
      c = null === (r = s()) || void 0 === r ? void 0 : r.reviewUrlSuffix,
      u = Object.freeze(
        (o((i = {}), a.LIVE, {
          INSIGHTS: "insights.hotjar.com",
          SURVEYS: "surveys.hotjar.com",
        }),
        o(i, a.REVIEW, {
          INSIGHTS: "insights-".concat(c),
          SURVEYS: "surveys-".concat(c),
        }),
        o(i, a.REVIEW_WEBAPP, {
          INSIGHTS: "insights-webapp-".concat(c),
          SURVEYS: "surveys-webapp-".concat(c),
        }),
        o(i, a.STAGING, {
          INSIGHTS: "insights-staging.hotjar.com",
          SURVEYS: "surveys-staging.hotjar.com",
        }),
        o(i, a.DEV, {
          INSIGHTS: "local.hotjar.com:8443",
          SURVEYS: "surveys.local.hotjar.com:8443",
        }),
        o(i, a.DEV_OLD, {
          INSIGHTS: "local.hotjar.com",
          SURVEYS: "surveys.local.hotjar.com",
        }),
        i),
      ),
      l = function (t) {
        return function (e, n) {
          return e === u[t][n];
        };
      },
      h = l(a.DEV),
      d = l(a.DEV_OLD),
      f = l(a.LIVE),
      g = l(a.REVIEW_WEBAPP),
      p = l(a.REVIEW),
      v = l(a.STAGING),
      m = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "INSIGHTS",
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document.location.host;
        return f(e, t)
          ? a.LIVE
          : h(e, t)
          ? a.DEV
          : d(e, t)
          ? a.DEV_OLD
          : g(e, t)
          ? a.REVIEW_WEBAPP
          : p(e, t)
          ? a.REVIEW
          : v(e, t)
          ? a.STAGING
          : a.LIVE;
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r,
      i,
      o =
        (((i = function () {
          return r();
        }).test = r =
          function () {
            var t;
            if (!navigator) return "No User-Agent Provided";
            if (
              null === (t = navigator.userAgentData) || void 0 === t
                ? void 0
                : t.mobile
            )
              return "mobile";
            var e = function (t) {
              return navigator.userAgent.match(t);
            };
            return e(
              /GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i,
            ) || e(/Xbox|PLAYSTATION.3|Wii/i)
              ? "tv"
              : e(/iPad/i) ||
                (e(/tablet/i) && !e(/RX-34/i)) ||
                e(/FOLIO/i) ||
                (e(/Linux/i) &&
                  e(/Android/i) &&
                  !e(
                    /Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945|Chromebook/i,
                  )) ||
                e(/Kindle/i) ||
                (e(/Mac.OS/i) && e(/Silk/i)) ||
                e(
                  /GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i,
                ) ||
                (e(/MB511/i) && e(/RUTEM/i))
              ? "tablet"
              : e(
                  /BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i,
                ) ||
                (e(/Opera/i) &&
                  e(/Windows.NT.5/i) &&
                  e(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i))
              ? "mobile"
              : (e(/Windows.(NT|XP|ME|9)/) && !e(/Phone/i)) ||
                e(/Win(9|.9|NT)/i) ||
                (e(/Macintosh|PowerPC/i) && !e(/Silk/i)) ||
                (e(/Linux/i) && e(/X11/i)) ||
                e(/Solaris|SunOS|BSD/i) ||
                (e(
                  /Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i,
                ) &&
                  !e(/Mobile/i)) ||
                e(/\b(CrOS|Chromebook)\b/i)
              ? "desktop"
              : "mobile";
          }),
        i);
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = n(2),
      i = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
          r = 0,
          i = !1;
        function c() {
          0 !== --r || i || e.bind(this)();
        }
        function u() {
          (i = !0), n.bind(this)();
        }
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          "string" == typeof n && (n = [n]),
            (r += n.length),
            n.forEach(function (t) {
              o(t, e, c, u);
            });
        });
      },
      o = function (t, e, n, i) {
        var o;
        e === r.c.SCRIPT
          ? ((o = document.createElement("script")).src = ""
              .concat(hj.scriptDomain)
              .concat(t))
          : e === r.c.STYLESHEET &&
            (((o = document.createElement("link")).href = ""
              .concat(hj.scriptDomain)
              .concat(t)),
            (o.rel = "stylesheet")),
          (o.onload = n),
          (o.onerror = i),
          document.getElementsByTagName("head")[0].appendChild(o);
      };
    function a() {}
    function s() {
      var t = this.src || this.href;
      hj.exceptions.log(
        new Error("Failed to load module: ".concat(t, ".")),
        "loader",
      );
    }
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = Object.freeze({
      MODAL: "_hj-modal",
      FOOTER: "_hj-footer",
      SURVEY_INVITES: "_hj_survey_invite_container",
      HEATMAP_RETAKER: "_hj-heatmap-retaker",
      ADMIN_WIDGET: "_hj_admin_widget",
      INCOMING_FEEDBACK: "_hj_feedback_container",
      NOTICATION: "_hj-notification",
    });
    Object.freeze({
      RETAKER: "_hjRetakerTrsToken",
      TARGETING: "_hjRetakerTargeting",
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "userAttributes", function () {
        return l;
      });
    var r = n(57),
      i = n(19),
      o = n(8),
      a = n(6),
      s = n(54),
      c = n(5),
      u = n(12),
      l = {
        id: void 0,
        attributes: {},
        init: hj.tryCatch(function () {
          if (hj.settings.user_attributes_enabled) {
            var t = g();
            t && ((l.id = t.userId), (l.attributes = t.attributes));
          }
        }, "userAttributes.init"),
        reset: hj.tryCatch(function () {
          (l.id = void 0), (l.attributes = {}), p();
        }, "userAttributes.reset"),
        set: hj.tryCatch(function (t, e) {
          hj.settings.user_attributes_enabled
            ? (void 0 !== l.id &&
                null !== l.id &&
                l.id !== t &&
                (hj.log.debug(
                  "User ID changed, resetting all attributes before continuing.",
                  "userAttributes",
                ),
                l.reset()),
              (l.id = t),
              (l.attributes = Object(u.g)(l.attributes, e)),
              f({ attributes: l.attributes, userId: l.id }),
              hj.event.signal("user-attributes-set"),
              o.a.isRecordingEnabled()
                ? l.flush()
                : hj.log.debug(
                    "No recording in progress. Not sending.",
                    "userAttributes",
                  ))
            : hj.log.debug(
                "User attributes not enabled. Doing nothing.",
                "userAttributes",
              );
        }, "userAttributes.set"),
        flush: hj.tryCatch(function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : hj.hq.noop;
          if (void 0 !== l.id || Object.keys(l.attributes).length) {
            var e = c.a.items.USER_ATTRIBUTES_HASH.get({ resetExpiry: !0 }),
              n = hj.md5(
                JSON.stringify({ allAttributes: l.attributes, userId: l.id }),
              );
            if (e === n)
              return (
                t(null, l.id, l.attributes),
                void hj.log.debug(
                  "No changed user attributes. Not sending.",
                  "userAttributes",
                )
              );
            c.a.items.USER_ATTRIBUTES_HASH.set(n),
              hj.debug.isOn() && h(l.id, l.attributes),
              d(l.id, l.attributes),
              t(null, l.id, l.attributes);
          } else t(Error("no_user"));
        }, "userAttributes.flush"),
        get: hj.tryCatch(function (t) {
          return "user_id" === t ? l.id : l.attributes[t];
        }, "userAttributes.get"),
      },
      h = function (t, e) {
        hj.ajax.post(
          ""
            .concat(hj.identifyEndpoint, "/sites/")
            .concat(hj.settings.site_id, "/users/")
            .concat(Object(s.a)().id, "/validate"),
          { user_id: t, attributes: e },
          hj.tryCatch(function (t) {
            t.errors && Object.keys(t.errors).length > 0
              ? hj.log.debug(
                  "User validation API call PARTIALLY successful (some errors).",
                  "userAttributes",
                  t,
                )
              : hj.log.debug(
                  "User validation API call successful.",
                  "userAttributes",
                  t,
                );
          }, "userAttributes"),
          hj.tryCatch(function (t) {
            hj.log.debug(
              "User Attributes validation API call failed.",
              "userAttributes",
              (t.responseText && JSON.parse(t.responseText)) ||
                "unknown_failure",
            );
          }, "userAttributes"),
        );
      },
      d = function (t, e) {
        if (o.a.isRecordingEnabled()) {
          var n = {
            hj_id: Object(s.a)().id,
            user_id: t,
            attributes: e,
            time: hj.time.getNow(),
            timestamp: a.a.now(),
          };
          Object(i.a)(r.a.IDENTIFY_USER, n, !0).flush(),
            hj.log.debug(
              "User attributes sent up websocket.",
              "userAttributes",
              n,
            );
        }
      },
      f = function (t) {
        var e = hj.b64EncodeUnicode(JSON.stringify(t));
        c.a.localStorage.USER_ATTRIBUTES.set(e),
          c.a.items.HAS_CACHED_USER_ATTRIBUTES.set("true", !0);
      },
      g = function () {
        var t =
          "true" === c.a.items.HAS_CACHED_USER_ATTRIBUTES.get()
            ? c.a.localStorage.USER_ATTRIBUTES.get()
            : void 0;
        if (t)
          try {
            var e = hj.isParsableJSON(t) ? t : hj.b64DecodeUnicode(t);
            return JSON.parse(e);
          } catch (t) {
            return;
          }
      },
      p = function () {
        c.a.items.HAS_CACHED_USER_ATTRIBUTES.clear(),
          c.a.localStorage.USER_ATTRIBUTES.clear();
      };
  },
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return d;
    }),
      n.d(e, "a", function () {
        return g;
      }),
      n.d(e, "c", function () {
        return p;
      });
    var r = n(5),
      i = n(6),
      o = n(119),
      a = n(37);
    function s(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(n), !0).forEach(function (e) {
              u(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
      }
      return t;
    }
    function u(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var l = Object(o.a)({
        storageAccessor: r.a.items.HJ_SESSION_USER,
        serializer: a.g,
        deserializer: a.b,
      }),
      h = function (t) {
        var e,
          n,
          r,
          o =
            null !== (e = null == t ? void 0 : t.id) && void 0 !== e
              ? e
              : Object(a.d)(Object(a.c)()),
          s =
            null !== (n = null == t ? void 0 : t.created) && void 0 !== n
              ? n
              : i.a.now(),
          c =
            null !== (r = null == t ? void 0 : t.existing) && void 0 !== r && r;
        return Object.freeze({ id: o, created: s, existing: c });
      },
      d = function (t) {
        l.set(t);
      },
      f = function () {
        var t = r.a.items.HJ_ID.get();
        return t
          ? { id: Object(a.d)(hj.settings.site_id + t), existing: !0 }
          : null;
      },
      g = Object(a.f)(function () {
        var t = l.get();
        return h(
          null === t ? c({}, f()) : c(c(c({}, t), f()), {}, { existing: !0 }),
        );
      }),
      p = function () {
        if (Object(a.e)()) {
          var t = g().id;
          setTimeout(function () {
            return hj.globals.set("userId", t);
          }),
            hj.log.warnIfEmpty(t, "user agent check: userId");
        }
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return F;
    });
    var r,
      i,
      o = n(57),
      a = n(8),
      s = n(19),
      c = n(6),
      u = {
        setup: !1,
        listen: hj.tryCatch(function (t) {
          u.setup
            ? t &&
              u.send(
                o.a.INSERTED_RULE,
                hj.insertedRules.getCurrentInsertedRules(),
              )
            : (hj.insertedRules.init(),
              hj.insertedRules.register(u.send.bind(u, o.a.INSERTED_RULE), !0),
              hj.cssBlobs.register(u.send.bind(u, o.a.INSERTED_RULE)),
              hj.deletedRules.init(),
              hj.deletedRules.register(u.send.bind(u, o.a.DELETED_RULE)),
              (u.setup = !0));
        }, "behavior-data.cssRules.listen"),
        send: hj.tryCatch(function (t, e) {
          e.length &&
            setTimeout(
              hj.tryCatch(function () {
                var n = {
                  time: hj.time.getNow(),
                  timestamp: c.a.now(),
                  rules: e,
                };
                hj.debug.emit(t, n), Object(s.a)(t, n, !1);
              }, "behavior-data.cssRules"),
            );
        }, "behavior-data.cssRules.send"),
      },
      l = hj.tryCatch(function (t, e) {
        var n = hj.hq(t),
          r = hj.selector(a.a.getSelectorVersion()).get(n);
        if (r && e) {
          var i = { offset_x: e.pageX, offset_y: e.pageY, selector: r };
          a.a.isRecordingEnabled() &&
            ((i.time = hj.time.getNow()), (i.timestamp = c.a.now())),
            Object(s.a)(o.a.MOUSE_CLICK, i, !1).flush();
        }
      }, "behavior-data.frameMouseClicks.frameClick"),
      h = {
        setup: !1,
        listen: hj.tryCatch(function () {
          h.setup ||
            (hj.log.debug("Setting up frame mouse click listeners.", "events"),
            h.send(),
            (h.setup = !0));
        }, "behavior-data.frameMouseClicks.listen"),
        send: hj.tryCatch(function () {
          if (a.a.isRecordingEnabled()) {
            var t = location.origin,
              e = hj.hq("iframe");
            e.length &&
              [].forEach.call(e, function (e) {
                if (e.src && -1 !== e.src.indexOf(t))
                  try {
                    var n = e.contentWindow;
                    hj.hq(n).on("mousedown", function (t) {
                      l(e, t);
                    });
                  } catch (n) {
                    var r = e.src.split("?")[0];
                    hj.Sentry &&
                      hj.Sentry.captureMessage(
                        "SecurityError: Blocked a frame with origin "
                          .concat(
                            t,
                            " from accessing\n                                a frame with origin ",
                          )
                          .concat(r),
                      );
                  }
              });
          }
        }, "behavior-data.frameMouseClicks.send"),
      },
      d = {
        setup: !1,
        listen: hj.tryCatch(function () {
          d.setup ||
            (hj.log.debug(
              "Setting up input choice change listeners.",
              "events",
            ),
            hj
              .hq(document)
              .on("change", "input[type=checkbox], input[type=radio]", d.send),
            (d.setup = !0));
        }, "behavior-data.inputChoiceChange.listen"),
        send: hj.tryCatch(function (t) {
          if (a.a.isRecordingEnabled()) {
            var e = hj.hq(t.target),
              n = hj.selector().get(e),
              r = e.is(":checked");
            Object(s.a)(
              o.a.INPUT_CHOICE_CHANGE,
              {
                value: r,
                selector: n,
                time: hj.time.getNow(),
                timestamp: c.a.now(),
              },
              !0,
            ).flush();
          }
        }, "behavior-data.inputChoiceChange.send"),
      },
      f = !1,
      g = !1,
      p = [],
      v = {
        setup: !1,
        listen: hj.tryCatch(function () {
          v.setup ||
            (hj.log.debug("Setting up key press listeners.", "events"),
            hj.hq(document).on("input", "input", v.update),
            hj.hq(document).on("blur", "input", v.send),
            hj.hq(document).on("input", "textarea", v.update),
            hj.hq(document).on("blur", "textarea", v.send),
            (v.setup = !0));
        }, "behavior-data.keyPress.listen"),
        update: hj.tryCatch(function (t) {
          var e = hj.hq(t.target),
            n = e.val();
          (g =
            g || hj.privacy.isRiskyNotAllowlistedOrSuppressedElement(t.target)),
            p.push({
              time: hj.time.getNow(),
              timestamp: c.a.now(),
              selector: hj.selector().get(e),
              text: n,
              type: t.target.type,
              suppression: g ? "full" : "none",
            }),
            (f = !0);
        }, "behavior-data.keyPress.update"),
        send: hj.tryCatch(function () {
          if (a.a.isRecordingEnabled() && f) {
            if (g) {
              var t = p[0],
                e = p[p.length - 1],
                n = hj.privacy.getSuppressedText(t.type, e.text),
                r = Math.floor((e.time - t.time) / Math.max(n.length, 1));
              p = [];
              for (var i = 0; i < Math.min(n.length - 1, 500); i++)
                p.push({
                  time: t.time + r * i,
                  timestamp: t.timestamp + r * i,
                  selector: t.selector,
                  text: n.substring(0, i + 1),
                  type: t.type,
                  suppression: "full",
                });
              (e.text = n), p.push(e);
            }
            hj.hq.each(p, function (t, e) {
              delete e.type;
            }),
              Object(s.a)(o.a.KEY_PRESS, p, !0).flush(),
              (f = !1),
              (g = !1),
              (p = []);
          }
        }, "behavior-data.keyPress.send"),
      },
      m = 0,
      y = 0,
      j = !1,
      b = 0,
      w = 0,
      S = null,
      _ = {
        setup: !1,
        listen: hj.tryCatch(function () {
          _.setup ||
            (hj.log.debug("Setting up mouse move listeners.", "events"),
            hj.hq(document).on("mousemove", _.update),
            setInterval(_.send, 100),
            (_.setup = !0));
        }, "behavior-data.mouseMove.listen"),
        update: hj.tryCatch(function (t) {
          (m = t.clientX), (y = t.clientY);
          var e = hj.hq(document.elementFromPoint(m, y));
          if (e[0]) {
            var n = e.offset();
            n &&
              ((b = t.pageX - parseInt(n.left, 10)),
              (w = t.pageY - parseInt(n.top, 10)),
              (S = hj.selector(a.a.getSelectorVersion()).get(e)),
              (j = !0));
          }
        }, "behavior-data.mouseMove.update"),
        send: hj.tryCatch(function () {
          a.a.isRecordingEnabled() &&
            j &&
            (a.a.isRecordingEnabled() &&
              (Object(s.a)(o.a.MOUSE_MOVE, {
                time: hj.time.getNow(),
                timestamp: c.a.now(),
                x: m,
                y: y,
              }),
              Object(s.a)(o.a.RELATIVE_MOUSE_MOVE, {
                time: hj.time.getNow(),
                timestamp: c.a.now(),
                offset_x: b,
                offset_y: w,
                selector: S,
              })),
            (j = !1));
        }, "behavior-data.mouseMove.send"),
      },
      E = !1,
      C = {
        setup: !1,
        listen: hj.tryCatch(function () {
          C.setup ||
            (hj.log.debug("Setting up mouse click listeners.", "events"),
            hj.hq(document).on("mousedown", C.send),
            (C.setup = !0));
        }, "behavior-data.mouseClick.listen"),
        send: hj.tryCatch(function (t) {
          var e, n;
          if (a.a.isRecordingEnabled()) {
            E && (_.update(t), (E = !1));
            var r = (
                null == t ||
                null === (e = t.composedPath) ||
                void 0 === e ||
                null === (n = e.call(t)) ||
                void 0 === n
                  ? void 0
                  : n.length
              )
                ? t.composedPath()[0]
                : t.target,
              i = hj.selector(a.a.getSelectorVersion()).get(hj.hq(r)),
              u = [];
            if (!!r && "pageX" in t && "pageY" in t && void 0 !== i) {
              var l = hj.hq(r).offset();
              (u.left = t.pageX - l.left), (u.top = t.pageY - l.top);
              var h = {
                  offset_x: u.left,
                  offset_y: u.top,
                  selector: i,
                  page_x: t.pageX,
                  page_y: t.pageY,
                  text: null,
                  time: hj.time.getNow(),
                  timestamp: c.a.now(),
                },
                d = 0,
                f = !1,
                g = r;
              do {
                if ("BUTTON" === g.tagName || "A" === g.tagName) {
                  f = !0;
                  break;
                }
                d++, (g = g.parentNode);
              } while (g && (d <= 2 || f));
              if (f) {
                var p = hj.privacy.getSuppressedTextNode(r),
                  v = p.content;
                !p.shouldSuppressNode &&
                  v &&
                  (h.text = v.trim().substring(0, 100));
              }
              Object(s.a)(o.a.MOUSE_CLICK, h, !1).flush();
            }
          }
        }, "behavior-data.mouseClick.send"),
        trackCoordinatesOnNextClick: function () {
          E = !0;
        },
      },
      O = hj.tryCatch(function (t) {
        var e = {},
          n = !1;
        return (
          (e.listen = hj.tryCatch(
            function () {
              n ||
                (hj.log.debug("Setting up " + t + " event listener.", "events"),
                hj.hq(document).on(t, e.send),
                (n = !0));
            },
            "behavior-data." + t + ".listen",
          )),
          (e.send = hj.tryCatch(
            function () {
              a.a.isRecordingEnabled() &&
                Object(s.a)(
                  o.a.CLIPBOARD,
                  { time: hj.time.getNow(), timestamp: c.a.now(), action: t },
                  !0,
                ).flush();
            },
            "behavior-data." + t + ".send",
          )),
          e
        );
      }, "behavior-data.newClipboardEventListener"),
      I = {
        listen: hj.tryCatch(function () {
          document.addEventListener(
            "visibilitychange",
            function () {
              return I.send(!document.hidden);
            },
            !1,
          );
        }, "behavior-data.pageVisibility.listen"),
        send: hj.tryCatch(function (t) {
          var e = {
            time: hj.time.getNow(),
            timestamp: c.a.now(),
            page_visible: t,
          };
          hj.debug.emit("page_visibility", e),
            Object(s.a)(o.a.PAGE_VISIBILITY, e, !1).flush();
        }, "behavior-data.pageVisibility.send"),
      },
      N = !1,
      T = {
        setup: !1,
        listen: hj.tryCatch(function () {
          T.setup ||
            (hj.log.debug("Setting up scroll listeners.", "events"),
            window.addEventListener("scroll", T.update, !0),
            setInterval(T.send, 100),
            0 !== hj.ui.getScrollPosition().top && T.update(),
            (T.setup = !0));
        }, "behavior-data.scroll.listen"),
        update: hj.tryCatch(function (t) {
          (r = t ? (t.target === window.document ? window : t.target) : window),
            (N = !0);
        }, "behavior-data.scroll.update"),
        send: hj.tryCatch(function () {
          if (a.a.isRecordingEnabled() && N) {
            var t =
                (r = r || window) === window
                  ? "window"
                  : hj.selector(a.a.getSelectorVersion()).get(hj.hq(r)) ||
                    "window",
              e = hj.ui.getScrollPosition(r);
            Object(s.a)(o.a.SCROLL, {
              elem: t,
              time: hj.time.getNow(),
              timestamp: c.a.now(),
              x: e.left,
              y: e.top,
            }),
              (N = !1);
          }
        }, "behavior-data.scroll.send"),
      },
      k = 0,
      A = {
        setup: !1,
        listen: hj.tryCatch(function () {
          A.setup ||
            (hj.log.debug("Setting up scroll reach listeners.", "events"),
            hj.hq(window).on("scroll resize", A.send, !0),
            (A.setup = !0));
        }, "behavior-data.scrollReach.listen"),
        send: hj.tryCatch(function () {
          if (a.a.isRecordingEnabled()) {
            var t = hj.ui.getBottomAsPercentage();
            t > k &&
              ((k = t),
              Object(s.a)(
                o.a.SCROLL_REACH,
                { time: hj.time.getNow(), timestamp: c.a.now(), max_bottom: k },
                !0,
              ));
          }
        }, "behavior-data.scrollReach.send"),
      },
      R = {
        setup: !1,
        listen: hj.tryCatch(function () {
          R.setup ||
            (hj.log.debug("Setting up select change listeners.", "events"),
            hj.hq(document).on("change", "select", R.send),
            (R.setup = !0));
        }, "behavior-data.selectChange.listen"),
        send: hj.tryCatch(function (t) {
          if (a.a.isRecordingEnabled()) {
            var e = hj.hq(t.target),
              n = hj.selector().get(e),
              r = e.val();
            Object(s.a)(
              o.a.SELECT_CHANGE,
              {
                value: r,
                selector: n,
                time: hj.time.getNow(),
                timestamp: c.a.now(),
              },
              !0,
            ).flush();
          }
        }, "behavior-data.selectChange.send"),
      },
      x = {
        setup: !1,
        listen: hj.tryCatch(function () {
          x.setup ||
            (hj.log.debug("Setting up screen size change listeners.", "events"),
            (i = hj.ui.getWindowSize()),
            setInterval(x.checkResize, 1e3),
            x.checkResize(),
            (x.setup = !0));
        }, "behavior-data.viewportResize.listen"),
        checkResize: hj.tryCatch(function () {
          var t = hj.ui.getWindowSize();
          (t.width === i.width && t.height === i.height) || ((i = t), x.send());
        }, "behavior-data.viewportResize.checkResize"),
        send: hj.tryCatch(function () {
          a.a.isRecordingEnabled() &&
            Object(s.a)(o.a.VIEWPORT_RESIZE, {
              time: hj.time.getNow(),
              timestamp: c.a.now(),
              w: i.width,
              h: i.height,
            }).flush();
        }, "behavior-data.viewportResize.send"),
      },
      D = {
        setup: !1,
        listen: hj.tryCatch(function () {
          D.setup ||
            (hj.adoptedStyleSheets.init(),
            hj.adoptedStyleSheets.register(
              D.send.bind(D, "adopted_style_sheets"),
              !0,
            ),
            (D.setup = !0));
        }, "behavior-data.adoptedStyleSheets.listen"),
        send: hj.tryCatch(function (t, e) {
          e &&
            setTimeout(
              hj.tryCatch(function () {
                var n = {
                  time: hj.time.getNow(),
                  timestamp: c.a.now(),
                  parentSelector: e.parentSelector,
                  sheets: e.sheets,
                  nodeId: e.nodeId,
                };
                hj.debug.emit(t, n), Object(s.a)(t, n, !1);
              }, "behavior-data.adoptedStyleSheets"),
            );
        }, "behavior-data.adoptedStyleSheets.send"),
      },
      P = O("copy"),
      M = O("cut"),
      L = O("paste"),
      U = [D, P, u, M, h, d, v, C, _, I, L, T, A, R, x],
      H = {
        enableRecording: hj.tryCatch(function (t) {
          a.a.setRecordingEnabled(!0),
            U.forEach(function (e) {
              e.listen(t);
            }),
            hj.autotag.start();
        }, "behavior-data.events.enableRecording"),
      },
      q = n(49),
      V = n(12),
      z = n(5);
    var W = !1,
      B = Object(V.i)(function (t, e, n, r, i) {
        var c, u, l;
        Object(s.a)(
          ((c = {}),
          (u = o.a.RECORDING_HELO),
          (l = function () {
            return (function (t, e, n) {
              return {
                playback_version: 3,
                script_context_id: hj.scriptContextId,
                start_time: e,
                start_timestamp: n,
                page_visit_info: t,
                resumed: a.a.isResumedSession(),
                first_seen: a.a.isFirstSeen(),
              };
            })(hj.visitData.getPageVisitInfo(t, e, hj.settings.site_id), n, r);
          }),
          u in c
            ? Object.defineProperty(c, u, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (c[u] = l),
          c),
        ).flush(),
          hj.eventStream.reportPageContent(t.key),
          Object(s.a)(
            o.a.SCROLL_REACH,
            { max_bottom: hj.ui.getBottomAsPercentage() },
            !0,
          ),
          i
            ? H.enableRecording()
            : t.ready("pageInfo", function (t) {
                F.initializeTreeMirror(t),
                  H.enableRecording(z.a.items.SESSION_RESUMED.get());
              });
      }),
      F = {
        autoTagsToProcess: [],
        tagsToProcess: [],
        active: !1,
        isTreeMirrorInitialized: function () {
          return W;
        },
        start: hj.tryCatch(function () {
          a.a.setRecordingEnabled(!0),
            sessionStorage.setItem("_hjRecordingEnabled", !0),
            sessionStorage.setItem("_hjRecordingLastActivity", c.a.now());
          var t = hj.visitData.property,
            e = hj.ui.getWindowSize(),
            n = hj.time.getNow(),
            r = c.a.now();
          B(t.key, t, e, n, r, this.isTreeMirrorInitialized()),
            (F.active = !0),
            F.tagsToProcess.length &&
              (Object(s.a)(o.a.TAG_RECORDING, F.tagsToProcess, !0).flush(),
              (F.tagsToProcess = [])),
            F.autoTagsToProcess.length &&
              (Object(s.a)(
                o.a.AUTOTAG_RECORDING,
                F.autoTagsToProcess,
                !0,
              ).flush(),
              (F.autoTagsToProcess = [])),
            hj.settings.user_attributes_enabled && q.userAttributes.flush();
        }, "behavior-data.recording.start"),
        setAndSendPageContent: function (t, e) {
          var n = t.get("pageInfo").urlMD5;
          hj.globals.ready("userId", function () {
            return hj.eventStream.storePageContent(e, n);
          });
        },
        reset: function () {
          hj.globals.set("pageInfo", void 0),
            hj.globals.set("userId", void 0),
            hj.eventStream.clearPageContent(),
            hj.treeMirror.resetMutationListeners(),
            (W = !1);
        },
        initializeTreeMirror: hj.tryCatch(function (t) {
          hj.treeMirror.mutationObserverAvailable &&
            (hj.metrics.timeStart("task-execution-time", {
              task: "dom-serialization",
            }),
            hj.treeMirror.getTree(function (e, n) {
              G(t, e, n);
            }, Y));
        }, "behavior-data.initializeTreeMirror"),
        resume: function () {
          T.update(), C.trackCoordinatesOnNextClick();
        },
      },
      G = function (t, e, n) {
        F.setAndSendPageContent(
          t,
          JSON.stringify({
            docType: hj.html.getPageDoctype(),
            rootId: e,
            children: n,
          }),
        ),
          (W = !0),
          hj.metrics.timeEnd("task-execution-time", {
            tag: { task: "dom-serialization" },
          }),
          hj.metrics.timeEnd("task-execution-time", {
            tag: { task: "node-suppression" },
            incr: { flush: !0 },
          });
      },
      Y = function (t, e, n, r) {
        var i = {};
        (t.length || e.length || n.length || r.length) &&
          ((i.time = hj.time.getNow()),
          (i.timestamp = c.a.now()),
          t.length && (i.a = t),
          e.length && (i.b = e),
          n.length && (i.c = n),
          r.length && (i.d = r),
          hj.debug.emit("mutation", i),
          Object(s.a)(o.a.MUTATION, i, !1));
      };
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = Object.freeze({
      IDENTIFY_USER: "identify_user",
      AUTOTAG_RECORDING: "autotag_recording",
      TAG_RECORDING: "tag_recording",
      HEATMAP_HELO: "heatmap_helo",
      RECORDING_HELO: "recording_helo",
      REPORT_USER_ID: "report_user_id",
      MUTATION: "mutation",
      MOUSE_CLICK: "mouse_click",
      INPUT_CHOICE_CHANGE: "input_choice_change",
      KEY_PRESS: "key_press",
      MOUSE_MOVE: "mouse_move",
      RELATIVE_MOUSE_MOVE: "relative_mouse_move",
      CLIPBOARD: "clipboard",
      PAGE_VISIBILITY: "page_visibility",
      SCROLL_REACH: "scroll_reach",
      SCROLL: "scroll",
      SELECT_CHANGE: "select_change",
      VIEWPORT_RESIZE: "viewport_resize",
      SCRIPT_PERFORMANCE: "script_performance",
      REPORT_CONTENT: "report_content",
      INSERTED_RULE: "inserted_rule",
      DELETED_RULE: "deleted_rule",
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    var r = n(12),
      i = Object(r.f)() || !1,
      o = function (t) {
        return t.split("{", 1)[0] || "";
      },
      a = function t(e) {
        if (!i) return e.cssText;
        try {
          if ("style" in e) {
            var n = o(e.cssText),
              r =
                ((u = e.style),
                Array.from(u).reduce(function (t, e) {
                  var n = u.getPropertyValue(e),
                    r = u.getPropertyPriority(e) ? " !important" : "";
                  return t + "".concat(e, ":").concat(n).concat(r, ";");
                }, ""));
            return "".concat(n, "{").concat(r, "}");
          }
          if ("cssRules" in e) {
            var a = e,
              s = o(a.cssText),
              c = Array.from(a.cssRules).map(t).join(" ");
            return "".concat(s, "{").concat(c, "}");
          }
          return e.cssText;
        } catch (t) {
          return e.cssText;
        }
        var u;
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var r,
      i = n(5),
      o = Math.random(),
      a = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "unknown";
        if (void 0 !== r)
          return (
            hj.log.debug(
              "["
                .concat(t, "] Included in session/CC sample (already set)? ")
                .concat(r),
              "sampling",
              {
                rec_value: hj.settings.rec_value,
                includedInSessionSample: r,
                mathRandomResult: o,
              },
            ),
            r
          );
        if (0 === hj.settings.rec_value)
          return (
            i.a.items.INCLUDE_IN_SESSION_SAMPLE.set("0"),
            hj.log.debug(
              "[".concat(t, "] rec_value has gone to 0, removing from sample."),
              "sampling",
              { rec_value: hj.settings.rec_value, includedInSessionSample: r },
            ),
            (r = !1)
          );
        if (!hj.settings.continuous_capture_enabled)
          return (
            hj.log.debug(
              "["
                .concat(t, "] Included in session/CC sample (setting check)? ")
                .concat(r),
              "sampling",
              {
                "hj.settings.continuous_capture_enabled":
                  hj.settings.continuous_capture_enabled,
              },
            ),
            (r = !1)
          );
        var e = i.a.items.INCLUDE_IN_SESSION_SAMPLE.get({ resetExpiry: !0 }),
          n = "1" == e;
        if (
          (hj.log.debug(
            "["
              .concat(t, "] Included in session/CC sample (from cookie)? ")
              .concat(n),
            "sampling",
            { cookie_value: e },
          ),
          e)
        )
          return (r = n);
        var a = hj.url.getParameter("hjIncludeInSessionSample");
        switch (a) {
          case "0":
            return (
              (r = !1),
              hj.log.debug(
                "You have set includedInSessionSample to false.",
                "sampling",
              ),
              r
            );
          case "1":
            return (
              (r = !0),
              i.a.items.INCLUDE_IN_SESSION_SAMPLE.set(r ? "1" : "0"),
              hj.log.debug(
                "You have set includedInSessionSample to true.",
                "sampling",
              ),
              r
            );
        }
        return (
          (r =
            1 === hj.settings.rec_value ||
            (void 0 !== hj.settings.rec_value &&
              null !== hj.settings.rec_value &&
              (o || 1) <= hj.settings.rec_value))
            ? i.a.items.INCLUDE_IN_SESSION_SAMPLE.set("1")
            : i.a.items.INCLUDE_IN_SESSION_SAMPLE.set("0"),
          hj.log.debug(
            "[".concat(t, "] Included in session/CC sample? ").concat(r),
            "sampling",
            { rec_value: hj.settings.rec_value, mathRandomResult: o },
          ),
          r
        );
      },
      s = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "unknown";
        return a(t);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    var r = n(41),
      i = n(2),
      o = !1,
      a = function (t) {
        var e = t.title,
          n = t.message,
          a = t.status;
        o
          ? hj.widget.renderNotificationWidget({
              title: e,
              message: n,
              status: a,
            })
          : Object(r.a)(i.e.NOTIFICATION, function () {
              (o = !0),
                hj.widget.renderNotificationWidget({
                  title: e,
                  message: n,
                  status: a,
                });
            });
      };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    function r(t) {
      return unescape(encodeURIComponent(t));
    }
    function i(t) {
      return decodeURIComponent(escape(t));
    }
    function o(t) {
      return btoa(r(t));
    }
    function a(t) {
      return i(atob(t));
    }
    n.d(e, "d", function () {
      return r;
    }),
      n.d(e, "c", function () {
        return i;
      }),
      n.d(e, "b", function () {
        return o;
      }),
      n.d(e, "a", function () {
        return a;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "create", function () {
        return o;
      });
    var r = n(32);
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var o = hj.tryCatch(function () {
      var t = { key: Object(r.a)() },
        e = {},
        n = {};
      return (
        (t.ready = hj.tryCatch(function (r, i) {
          (i = hj.tryCatch(i, "Data")),
            n[r]
              ? (hj.log.debug(
                  "Property " + r + " is ready. Calling callback() now.",
                  "property",
                  i,
                ),
                i(t))
              : (hj.log.debug(
                  "Property " + r + " is not ready. Saving callback().",
                  "property",
                  i,
                ),
                e[r]
                  ? e[r].push({ callback: i, executed: !1 })
                  : (e[r] = [{ callback: i, executed: !1 }]));
        }, "data")),
        (t.set = hj.tryCatch(function (r, o) {
          hj.log.debug("Setting properties." + r + " to " + o, "property"),
            (n[r] = o),
            "object" === i(e[r]) &&
              hj.hq.each(e[r], function (e, n) {
                n.executed ||
                  (hj.log.debug("Calling " + r + " callback.", "property"),
                  n.callback(t),
                  (n.executed = !0));
              });
        }, "data")),
        (t.get = hj.tryCatch(function (t) {
          return n[t];
        }, "data")),
        t
      );
    }, "data");
    hj.property = hj.tryCatch(function () {
      var t = {};
      return (t.create = o), (hj.globals = t.create()), t;
    }, "data")();
  },
  ,
  function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      (e = e || hj.hq.noop),
        (n = n || hj.hq.noop),
        hj.hq.ajax({
          url: t,
          success: hj.tryCatch(e, "Data"),
          error: hj.tryCatch(n, "Data"),
        });
    }
    function i(t, e, n, r) {
      var i =
        arguments.length > 4 && void 0 !== arguments[4]
          ? arguments[4]
          : { contentType: "json" };
      (n = n || hj.hq.noop), (r = r || hj.hq.noop);
      var o = (null == i ? void 0 : i.query)
        ? "".concat(t, "?").concat(i.query)
        : t;
      return hj.hq.ajax({
        url: o,
        type: "POST",
        data:
          "json" === (null == i ? void 0 : i.contentType)
            ? hj.hq.stringify(e)
            : e,
        contentType: "text/plain; charset=UTF-8",
        success: hj.tryCatch(n, "Data"),
        error: hj.tryCatch(r, "Data"),
      });
    }
    function o(t, e, n, r) {
      (n = n || hj.hq.noop),
        (r = r || hj.hq.noop),
        hj.hq.ajax({
          url: t,
          type: "PUT",
          data: hj.hq.stringify(e),
          contentType: "text/plain; charset=UTF-8",
          success: hj.tryCatch(n, "Data"),
          error: hj.tryCatch(r, "Data"),
        });
    }
    n.r(e),
      n.d(e, "get", function () {
        return r;
      }),
      n.d(e, "post", function () {
        return i;
      }),
      n.d(e, "putAsJSON", function () {
        return o;
      }),
      (hj.ajax = { get: r, post: i, putAsJSON: o });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(69),
      i = n(67),
      o = n(81),
      a = n(5),
      s = n(28),
      c = n(49),
      u = n(12),
      l = n(6),
      h = n(32),
      d = function () {
        var t = null,
          e = {},
          n = "hjViewportId";
        function r() {
          null === t &&
            (a.a.canUseSessionStorage()
              ? ((function () {
                  if (a.a.canUseLocalStorage() && a.a.canUseSessionStorage()) {
                    var t = i();
                    if (0 !== t.length) {
                      var e = l.a.now(),
                        r = t.filter(function (t) {
                          return t.expireTimestamp > e;
                        });
                      t.length !== r.length &&
                        window.localStorage.setItem(
                          "hjActiveViewportIds",
                          JSON.stringify(r),
                        );
                      var o = sessionStorage.getItem(n);
                      o &&
                        r.some(function (t) {
                          return t.id === o;
                        }) &&
                        window.sessionStorage.removeItem(n);
                    }
                  }
                })(),
                null === (t = window.sessionStorage.getItem(n)) &&
                  ((t = Object(h.a)()), window.sessionStorage.setItem(n, t)),
                (function () {
                  if (a.a.canUseLocalStorage()) {
                    var e = l.a.now() + 216e5,
                      n = i();
                    n.push({ id: t, expireTimestamp: e }),
                      window.localStorage.setItem(
                        "hjActiveViewportIds",
                        JSON.stringify(n),
                      );
                  }
                })())
              : (t = Object(h.a)()));
        }
        function i() {
          var t,
            e = window.localStorage.getItem("hjActiveViewportIds");
          if (!e) return [];
          try {
            t = JSON.parse(e);
          } catch (e) {
            window.localStorage.removeItem("hjActiveViewportIds"), (t = []);
          }
          return Array.isArray(t)
            ? t
            : (window.localStorage.removeItem("hjActiveViewportIds"), []);
        }
        return (
          (e.getId = hj.tryCatch(function () {
            return r(), t;
          }, "hj.viewport.getId")),
          window.addEventListener("pagehide", function () {
            !(function () {
              if (a.a.canUseLocalStorage()) {
                var e = i();
                if (0 !== e.length) {
                  var n = e.filter(function (e) {
                    return e.id !== t;
                  });
                  0 === n.length
                    ? window.localStorage.removeItem("hjActiveViewportIds")
                    : window.localStorage.setItem(
                        "hjActiveViewportIds",
                        JSON.stringify(n),
                      );
                }
              }
            })();
          }),
          e
        );
      };
    function f(t) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    hj.tryCatch(function () {
      if (void 0 !== hj.scriptLoaded)
        return (
          (window.console = window.console || { warn: function () {} }),
          console.warn(
            "Hotjar Tracking Warning: Multiple Hotjar tracking codes were detected on this page. Tracking will not work as expected.",
          ),
          hj.verifyInstall
            ? void Object(r.a)(
                "Hotjar installation invalid.",
                "It appears you have more than one Hotjar tracking code set up on this page. Hotjar cannot work properly if multiple Hotjar scripts are loaded concurrently. Please make sure you only install the one tracking code provided for this site.",
                "bad",
              )
            : void 0
        );
      var t, e, n;
      function l(t, e) {
        var n = g(
            (n = t[0]),
            (o = t[1]),
            (i = t[2]),
            (r = t[3]),
            e[0],
            7,
            -680876936,
          ),
          r = g(r, n, o, i, e[1], 12, -389564586),
          i = g(i, r, n, o, e[2], 17, 606105819),
          o = g(o, i, r, n, e[3], 22, -1044525330);
        (n = g(n, o, i, r, e[4], 7, -176418897)),
          (r = g(r, n, o, i, e[5], 12, 1200080426)),
          (i = g(i, r, n, o, e[6], 17, -1473231341)),
          (o = g(o, i, r, n, e[7], 22, -45705983)),
          (n = g(n, o, i, r, e[8], 7, 1770035416)),
          (r = g(r, n, o, i, e[9], 12, -1958414417)),
          (i = g(i, r, n, o, e[10], 17, -42063)),
          (o = g(o, i, r, n, e[11], 22, -1990404162)),
          (n = g(n, o, i, r, e[12], 7, 1804603682)),
          (r = g(r, n, o, i, e[13], 12, -40341101)),
          (i = g(i, r, n, o, e[14], 17, -1502002290)),
          (n = p(
            n,
            (o = g(o, i, r, n, e[15], 22, 1236535329)),
            i,
            r,
            e[1],
            5,
            -165796510,
          )),
          (r = p(r, n, o, i, e[6], 9, -1069501632)),
          (i = p(i, r, n, o, e[11], 14, 643717713)),
          (o = p(o, i, r, n, e[0], 20, -373897302)),
          (n = p(n, o, i, r, e[5], 5, -701558691)),
          (r = p(r, n, o, i, e[10], 9, 38016083)),
          (i = p(i, r, n, o, e[15], 14, -660478335)),
          (o = p(o, i, r, n, e[4], 20, -405537848)),
          (n = p(n, o, i, r, e[9], 5, 568446438)),
          (r = p(r, n, o, i, e[14], 9, -1019803690)),
          (i = p(i, r, n, o, e[3], 14, -187363961)),
          (o = p(o, i, r, n, e[8], 20, 1163531501)),
          (n = p(n, o, i, r, e[13], 5, -1444681467)),
          (r = p(r, n, o, i, e[2], 9, -51403784)),
          (i = p(i, r, n, o, e[7], 14, 1735328473)),
          (n = v(
            n,
            (o = p(o, i, r, n, e[12], 20, -1926607734)),
            i,
            r,
            e[5],
            4,
            -378558,
          )),
          (r = v(r, n, o, i, e[8], 11, -2022574463)),
          (i = v(i, r, n, o, e[11], 16, 1839030562)),
          (o = v(o, i, r, n, e[14], 23, -35309556)),
          (n = v(n, o, i, r, e[1], 4, -1530992060)),
          (r = v(r, n, o, i, e[4], 11, 1272893353)),
          (i = v(i, r, n, o, e[7], 16, -155497632)),
          (o = v(o, i, r, n, e[10], 23, -1094730640)),
          (n = v(n, o, i, r, e[13], 4, 681279174)),
          (r = v(r, n, o, i, e[0], 11, -358537222)),
          (i = v(i, r, n, o, e[3], 16, -722521979)),
          (o = v(o, i, r, n, e[6], 23, 76029189)),
          (n = v(n, o, i, r, e[9], 4, -640364487)),
          (r = v(r, n, o, i, e[12], 11, -421815835)),
          (i = v(i, r, n, o, e[15], 16, 530742520)),
          (n = m(
            n,
            (o = v(o, i, r, n, e[2], 23, -995338651)),
            i,
            r,
            e[0],
            6,
            -198630844,
          )),
          (r = m(r, n, o, i, e[7], 10, 1126891415)),
          (i = m(i, r, n, o, e[14], 15, -1416354905)),
          (o = m(o, i, r, n, e[5], 21, -57434055)),
          (n = m(n, o, i, r, e[12], 6, 1700485571)),
          (r = m(r, n, o, i, e[3], 10, -1894986606)),
          (i = m(i, r, n, o, e[10], 15, -1051523)),
          (o = m(o, i, r, n, e[1], 21, -2054922799)),
          (n = m(n, o, i, r, e[8], 6, 1873313359)),
          (r = m(r, n, o, i, e[15], 10, -30611744)),
          (i = m(i, r, n, o, e[6], 15, -1560198380)),
          (o = m(o, i, r, n, e[13], 21, 1309151649)),
          (n = m(n, o, i, r, e[4], 6, -145523070)),
          (r = m(r, n, o, i, e[11], 10, -1120210379)),
          (i = m(i, r, n, o, e[2], 15, 718787259)),
          (o = m(o, i, r, n, e[9], 21, -343485551));
        (t[0] = w(n, t[0])),
          (t[1] = w(o, t[1])),
          (t[2] = w(i, t[2])),
          (t[3] = w(r, t[3]));
      }
      function h(t, e, n, r, i, o) {
        return (e = w(w(e, t), w(r, o))), w((e << i) | (e >>> (32 - i)), n);
      }
      function g(t, e, n, r, i, o, a) {
        return h((e & n) | (~e & r), t, e, i, o, a);
      }
      function p(t, e, n, r, i, o, a) {
        return h((e & r) | (n & ~r), t, e, i, o, a);
      }
      function v(t, e, n, r, i, o, a) {
        return h(e ^ n ^ r, t, e, i, o, a);
      }
      function m(t, e, n, r, i, o, a) {
        return h(n ^ (e | ~r), t, e, i, o, a);
      }
      function y(t) {
        var e,
          n = [];
        for (e = 0; 64 > e; e += 4)
          n[e >> 2] =
            t.charCodeAt(e) +
            (t.charCodeAt(e + 1) << 8) +
            (t.charCodeAt(e + 2) << 16) +
            (t.charCodeAt(e + 3) << 24);
        return n;
      }
      (window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        }),
        (window.hj.q = window.hj.q || []),
        (hj.hostname = hj.host.split(":")[0]),
        (hj.port = 443),
        (hj.apiUrlBase = "https://" + hj.host + "/api/v1"),
        (hj.apiUrlBaseV2 = "https://" + hj.host + "/api/v2"),
        (hj.isPreview = Boolean(_hjSettings.preview)),
        (hj.userDeviceType = null),
        (hj.optOut = !1),
        (hj.windowSize = null),
        (hj.maxRecordingTagLength = 250),
        (hj.settings = hj.isPreview ? {} : window.hjSiteSettings),
        (hj.locationListener =
          ((n = "manual"),
          ((e = {}).setMode = hj.tryCatch(function (e) {
            (n = e),
              t && clearInterval(t),
              "automatic_with_fragments" === n
                ? (t = setInterval(function () {
                    var t =
                        "" === location.hash && location.href.indexOf("#") > -1
                          ? "#"
                          : location.hash,
                      e = ""
                        .concat(location.origin)
                        .concat(location.pathname)
                        .concat(location.search)
                        .concat(t);
                    hj.currentUrl && hj.currentUrl != e && hj._init.reinit(e);
                  }, 200))
                : "automatic" === n &&
                  (t = setInterval(function () {
                    var t = ""
                      .concat(location.origin)
                      .concat(location.pathname)
                      .concat(location.search);
                    hj.currentUrl &&
                      hj.currentUrl.split("#")[0] != t &&
                      hj._init.reinit(t);
                  }, 200));
          })),
          e));
      var j = "0123456789abcdef".split("");
      function b(t) {
        for (var e = "", n = 0; 4 > n; n++)
          e += j[(t >> (8 * n + 4)) & 15] + j[(t >> (8 * n)) & 15];
        return e;
      }
      function w(t, e) {
        return (t + e) & 4294967295;
      }
      (hj.encodeAsUtf8 = o.d),
        (hj.decodeAsUtf8 = o.c),
        (hj.md5 = function (t, e) {
          var n = "";
          try {
            n = (function (t) {
              for (var e = 0; e < t.length; e++) t[e] = b(t[e]);
              return t.join("");
            })(
              (function (t) {
                var e,
                  n = t.length,
                  r = [1732584193, -271733879, -1732584194, 271733878];
                for (e = 64; e <= t.length; e += 64)
                  l(r, y(t.substring(e - 64, e)));
                t = t.substring(e - 64);
                var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < t.length; e++)
                  i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
                if (((i[e >> 2] |= 128 << (e % 4 << 3)), 55 < e))
                  for (l(r, i), e = 0; 16 > e; e++) i[e] = 0;
                return (i[14] = 8 * n), l(r, i), r;
              })(hj.encodeAsUtf8(t)),
            );
          } catch (t) {
            e ? (n = "") : hj.exceptions.log(t, "md5");
          }
          return n;
        }),
        (hj.b64EncodeUnicode = o.b),
        (hj.b64DecodeUnicode = o.a),
        (hj.isParsableJSON = function (t) {
          try {
            var e = JSON.parse(t);
            if (e && "object" === f(e)) return !0;
          } catch (t) {}
          return !1;
        }),
        "5d41402abc4b2a76b9719d911017c592" != hj.md5("hello") &&
          (w = function (t, e) {
            var n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }),
        (hj.time = (function () {
          var t = new Date().getTime(),
            e = {
              reset: function () {
                t = new Date().getTime();
              },
              getNow: function () {
                return new Date().getTime() - t;
              },
            };
          return e;
        })()),
        (hj.debug = (function () {
          var t = {
            isOn: function () {
              return _hjSettings.hjdebug;
            },
            on: function (t) {
              (_hjSettings.hjdebug = !0), t && a.a.items.DEBUG_FLAG.set(!0);
            },
            off: function () {
              (_hjSettings.hjdebug = !1), a.a.items.DEBUG_FLAG.clear();
            },
            emit: function (t, e) {
              "undefined" != typeof _hjEmitters &&
                _hjEmitters.includes &&
                _hjEmitters.includes(t) &&
                window.postMessage(
                  { data: e, message: a.a.items.DEBUG_FLAG.getKey(), type: t },
                  "*",
                );
            },
          };
          return t;
        })()),
        (hj.url = s),
        (hj.log = (function () {
          var t = !1,
            e = "",
            n = {},
            r = {
              autotag: "#ff0099",
              command: "#0079a4",
              cookies: "#5a2c22",
              data: "#009bd2",
              event: "#ff7000",
              events: "#ffc000",
              exception: "#e63946",
              heatmap: "#700000",
              init: "#6600cc",
              integration: "#2a9072",
              poll: "#00a000",
              property: "#ff33cc",
              recording: "#dd0000",
              rendering: "#bd00ea",
              sampling: "#efb0a1",
              survey: "#007000",
              targeting: "#00ee00",
              visitdata: "#00668a",
              websocket: "#0dc0ff",
            };
          return (
            (n.init = function () {
              void 0 === window.console &&
                (window.console = {
                  debug: function () {},
                  trace: function () {},
                  log: function () {},
                  info: function () {},
                  warn: function () {},
                  error: function () {},
                });
            }),
            (n.debug = function (i, o, a) {
              var s = (o && r[o.toLowerCase()]) || "#2a9d8f";
              e != i && t && (console.groupEnd(), (t = !1)),
                (e = i),
                hj.debug.isOn() &&
                  ("object" === f(i)
                    ? hj.hq.each(i, function (t, e) {
                        n.debug(t + ": " + e, o, null);
                      })
                    : ((i =
                        o && "string" == typeof i
                          ? o.toUpperCase() + ": " + i
                          : i),
                      (i =
                        "%c" +
                        new Date()
                          .toTimeString()
                          .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") +
                        ":%c " +
                        i),
                      a
                        ? (t ||
                            (console.groupCollapsed(
                              i + ":",
                              "color: #999;",
                              "color: " + s + ";",
                            ),
                            (t = !0)),
                          console.log(a))
                        : console.log(i, "color: #999;", "color: " + s + ";")));
            }),
            (n.info = function (t) {
              console.log("%c" + t, "color: #006EFF");
            }),
            (n.warn = function (t) {
              console.log("%c" + t, "color: #E8910C");
            }),
            (n.error = function (t) {
              console.error("Hotjar error: " + t);
            }),
            (n.warnIfEmpty = function (t, e) {
              if (
                Array.isArray(t) ? 0 === t.length : hj.hq.isNullOrUndefined(t)
              ) {
                var n =
                  null === t ? "null" : void 0 === t ? "undefined" : "no value";
                hj.log.debug(
                  "WARNING: ["
                    .concat(e, "] a value was expected but ")
                    .concat(n, " was found!"),
                );
              }
            }),
            n
          );
        })()),
        (hj.loader = (function () {
          var t = {},
            e = [];
          return (
            (t.getModules = hj.tryCatch(function () {
              return e;
            }, "common")),
            (t.registerModule = hj.tryCatch(function (t, n, r) {
              e.push({ name: t, module: n, nonTracking: void 0 !== r && r });
            }, "common")),
            t
          );
        })()),
        (hj.targeting = (function () {
          var t = {};
          function e(e, n) {
            var r;
            if (!t.matchOperations[e.match_operation])
              return (
                hj.exceptions.log(
                  new Error(
                    'Targeting error - "'.concat(
                      e.match_operation,
                      '" match operation does not exist.',
                    ),
                  ),
                  "common.targeting.matchPatternWithRule",
                ),
                !1
              );
            e.rule_type = e.rule_type || e.component;
            var i = (function (t, e) {
              return !e ||
                "date" !== t.rule_type ||
                ("less_than" !== t.match_operation &&
                  "greater_than" !== t.match_operation)
                ? e
                : (new Date(e).valueOf() / 1e3).toFixed(0);
            })(e, n);
            return (r = t.matchOperations[e.match_operation](e, i)).error
              ? (hj.exceptions.log(
                  new Error(
                    "Targeting error - "
                      .concat(e.match_operation, " - ")
                      .concat(r.error),
                  ),
                  "common.targeting.matchPatternWithRule",
                ),
                !1)
              : ("url" !== e.component && e.negate && (r = !r),
                (function (t, e, n) {
                  var r = n ? "Match " : "No Match ";
                  !n ||
                    ("url" !== t.component && "device" !== t.component) ||
                    ((r +=
                      t.component +
                      "|" +
                      t.match_operation +
                      "|" +
                      t.pattern +
                      (t.negate ? " [NEGATE]" : "")),
                    hj.log.debug(r, "targeting"));
                  ("attribute" !== t.component && "event" !== t.component) ||
                    ((r +=
                      t.component +
                      "|" +
                      t.name +
                      " (" +
                      t.rule_type +
                      ")|" +
                      t.match_operation +
                      "|" +
                      t.pattern +
                      "|compared with: " +
                      e +
                      (t.negate ? " [NEGATE]" : "")),
                    hj.log.debug(r, "targeting"));
                })(e, n, r),
                r);
          }
          function n(t) {
            var n = !1,
              r = Object(u.a)();
            return (
              (n =
                0 === t.length ||
                3 === t.length ||
                t.some(function (t) {
                  return e(t, r);
                }))
                ? hj.log.debug("Device match found", "targeting")
                : hj.log.debug("No device match found", "targeting"),
              n
            );
          }
          function r(t, n) {
            var r,
              i = !1,
              o = !1,
              a = !1;
            if (0 === t.length)
              return (
                hj.log.debug("No URL targeting rules set", "targeting"), !1
              );
            for (var s = 0; s < t.length; s += 1)
              if (
                ((i = e((r = t[s]), n)) && !r.negate && (a = !0), i && r.negate)
              ) {
                o = !0;
                break;
              }
            return (
              (i = a && !o)
                ? hj.log.debug(
                    "URL match found without any negate rules",
                    "targeting",
                  )
                : o
                ? hj.log.debug("Negate URL rule match found", "targeting")
                : hj.log.debug("No URL match found", "targeting"),
              i
            );
          }
          t.matchUrl = r;
          var i = function (t) {
            return t
              .toLowerCase()
              .split("#")[0]
              .split("?")[0]
              .replace("http://www.", "")
              .replace("https://www.", "")
              .replace("http://", "")
              .replace("https://", "")
              .replace(/\/$/, "");
          };
          var o = {};
          t.matchRules = hj.tryCatch(function (t, i, a) {
            for (
              var s = {
                  device: { rules: [], isMatch: null, doMatch: n },
                  url: { rules: [], isMatch: null, doMatch: r },
                  attribute: { rules: [] },
                  trigger: { rules: [] },
                },
                u = 0;
              u < t.length;
              u += 1
            )
              s[t[u].component]
                ? s[t[u].component].rules.push(t[u])
                : hj.exceptions.log(
                    new Error(
                      "Targeting error - ".concat(
                        s[t[u].component],
                        " targeting component is not supported.",
                      ),
                    ),
                    "common.targeting.matchRules",
                  );
            hj.log.debug("-- Matching rules for new item --");
            var l = function (t, e) {
              "__proto__" !== i &&
                "constructor" !== i &&
                (void 0 === o[i] && (o[i] = []),
                o[i].push({ eventName: t, callback: e }),
                hj.event.listen(t, e));
            };
            if (
              (Object.keys(o).forEach(function (t) {
                t !== i &&
                  (o[t].forEach(function (t) {
                    var e = t.eventName,
                      n = t.callback;
                    hj.event.removeListener(e, n);
                  }),
                  delete o[t]);
              }),
              !s.device.doMatch(s.device.rules))
            )
              return !1;
            var h = function () {
                return (function (t) {
                  var n,
                    r = t.every(function (t) {
                      return e(t, c.userAttributes.get(t.name));
                    });
                  return (
                    (n = r
                      ? 0 === t.length
                        ? "No specific user attribute targeting rules set."
                        : "All user attributes matched."
                      : "User attributes set do not match current visitor."),
                    hj.log.debug(n, "targeting"),
                    r
                  );
                })(s.attribute.rules);
              },
              d = s.trigger.rules;
            if (d.length) {
              hj.log.debug(
                "Setting up targeting listeners for trigger rules",
                "targeting",
              );
              var f = function () {
                h() && (null == a || a(!0));
              };
              d.forEach(function (t) {
                var e = "trigger:" + t.pattern;
                l(e, f);
              });
            }
            var g = s.url.doMatch(s.url.rules, i);
            if (0 === s.attribute.rules.length || h())
              return !!g && (null == a || a(), !0);
            hj.log.debug(
              "Setting up targeting listeners for attribute rules",
              "targeting",
            );
            return (
              l("user-attributes-set", function () {
                g && h() && (null == a || a(!0));
              }),
              !1
            );
          }, "common.targeting.matchRules");
          var a = function (t, e, n) {
              return function () {
                return t.apply(null, arguments)
                  ? e.apply(null, arguments)
                  : n.apply(null, arguments);
              };
            },
            s = function (t, e) {
              return void 0 !== t && void 0 !== e && null !== t && null !== e;
            },
            l = function (t, e) {
              return (
                !isNaN(t.pattern) &&
                !isNaN(e) &&
                "" !== e &&
                "boolean" != typeof e
              );
            },
            h = function (t, e) {
              if (!e || e.toString() === parseInt(e, 10).toString()) return !1;
              var n = new Date(e);
              return "Invalid Date" !== n && !isNaN(n);
            },
            d = function (t) {
              return a(s, t, function () {
                return !1;
              });
            },
            f = function (t) {
              return d(
                a(l, t, function (t, e) {
                  return {
                    error: e
                      ? "Cannot compare non-numeric values (rule: { name: '"
                          .concat(
                            t.name,
                            "' },\n                        pattern: '",
                          )
                          .concat(e, "').")
                      : void 0,
                  };
                }),
              );
            },
            g = function (t) {
              return d(
                a(h, t, function (t, e) {
                  return {
                    error:
                      "Cannot compare dates. Given pattern is not a date (rule: { name: '"
                        .concat(t.name, "' }, pattern: '")
                        .concat(e, "')."),
                  };
                }),
              );
            };
          return (
            (t.matchOperations = {
              exact: function (t, e) {
                return "string" === t.rule_type
                  ? d(function (t, e) {
                      return e.toLowerCase() === t.pattern.toLowerCase();
                    })(t, e)
                  : "boolean" === t.rule_type
                  ? ((t.pattern = "true" === String(t.pattern)),
                    e === t.pattern)
                  : "number" === t.rule_type
                  ? null != e && Number(e) === Number(t.pattern)
                  : e === t.pattern;
              },
              starts_with: d(function (t, e) {
                return 0 === (e = e || "").indexOf(t.pattern);
              }),
              ends_with: d(function (t, e) {
                var n =
                  e.length - t.pattern.length == -1
                    ? 0
                    : e.length - t.pattern.length;
                return e.substring(n, e.length) === t.pattern;
              }),
              contains: d(function (t, e) {
                return -1 !== (e = e || "").indexOf(t.pattern);
              }),
              regex: d(function (t, e) {
                try {
                  return new RegExp(t.pattern).test(e);
                } catch (t) {
                  return (
                    hj.log.error(
                      "The regular expression used for page targeting was invalid. Please provide a valid regular\n                        expression.\n\nRead more here: https://help.hotjar.com/hc/en-us/articles/115012727628",
                    ),
                    !1
                  );
                }
              }),
              simple: d(function (t, e) {
                return i(e) === i(t.pattern);
              }),
              greater_than: f(function (t, e) {
                return Number(e) > Number(t.pattern);
              }),
              less_than: f(function (t, e) {
                return Number(e) < Number(t.pattern);
              }),
              unknown: function (t, e) {
                return (
                  0 !== (e = "string" == typeof e ? e.trim() : e) &&
                  !1 !== e &&
                  !e
                );
              },
              exact_date: g(function (t, e) {
                var n = new Date(1e3 * t.pattern);
                return (e = new Date(e)).toDateString() === n.toDateString();
              }),
              exact_days_ago: g(function (t, e) {
                var n,
                  r = new Date();
                return (
                  (n = r.setDate(r.getDate() - Number(t.pattern))),
                  (n = new Date(n)),
                  (e = new Date(e)).toDateString() === n.toDateString()
                );
              }),
              more_than_days_ago: g(function (t, e) {
                var n = Number(t.pattern) + 1,
                  r = new Date().getTime() / 1e3;
                return (r -= 86400 * n), new Date(e).getTime() / 1e3 <= r;
              }),
              less_than_days_ago: g(function (e, n) {
                if (0 === Number(e.pattern))
                  return t.matchOperations.exact_days_ago(e, n);
                var r = new Date().getTime() / 1e3;
                return (
                  (r -= 86400 * Number(e.pattern)),
                  new Date(n).getTime() / 1e3 >= r
                );
              }),
            }),
            t
          );
        })()),
        (hj.rendering = (function () {
          var t = {},
            e = [];
          function n(t, e) {
            hj.tryCatch(e, "Rendering")(t);
          }
          function r(t, e) {
            hj.widgetDelay.set(function () {
              hj.tryCatch(e, "Rendering")(t);
            }, 1e3 * t.display_delay);
          }
          function i(t, n, r) {
            var i = hj.hq(document),
              o = hj.hq(window),
              a = [];
            function s() {
              hj.tryCatch(n, "Rendering")(t),
                i.off("mousemove." + r),
                i.off("mouseout." + r);
            }
            e.push(r),
              i.off("mousemove." + r),
              i.off("mouseout." + r),
              i.on(
                "mousemove." + r,
                hj.tryCatch(function (t) {
                  a.push({ x: t.clientX, y: t.clientY }),
                    a.length > 2 &&
                      (a[1].x === a[2].x && a[1].y === a[2].y
                        ? a.pop()
                        : a.shift());
                }, "Rendering"),
              ),
              i.on(
                "mouseout." + r,
                hj.tryCatch(function (t) {
                  (t.relatedTarget &&
                    (t.relatedTarget === this ||
                      this.compareDocumentPosition(t.relatedTarget) &
                        Node.DOCUMENT_POSITION_CONTAINED_BY)) ||
                    (function (t) {
                      var e = a[1],
                        n = a[0];
                      if (((t |= 0), void 0 !== e && !(e.y >= n.y || t > 0))) {
                        n.x === e.x && s();
                        var r = (n.y - e.y) / (n.x - e.x),
                          i = -(n.y - r * n.x) / r;
                        i > 0 && i < o.width() && s();
                      }
                    })(t.clientY);
                }, "Rendering"),
              );
          }
          function o(t, e, n) {
            var r = hj.hq(document),
              i = hj.hq(window);
            i.on(
              "scroll." + n,
              hj.tryCatch(function () {
                var o = r.height();
                (r.scrollTop() + hj.ui.getWindowSize().height) / o >= 0.5 &&
                  (i.off("scroll." + n), e(t));
              }, "Rendering"),
            );
          }
          return (
            (t.clearAllAbandonEvents = hj.tryCatch(function () {
              e.forEach(function (t) {
                hj.log.debug("Removing abandon events for " + t, "rendering"),
                  hj.hq(document).off("mousemove." + t),
                  hj.hq(document).off("mouseout." + t);
              }),
                (e = []);
            }, "common")),
            (t.addToDom = hj.tryCatch(function (t, e) {
              if (!t) throw Error("container id not defined");
              if (!e)
                throw Error(
                  "cannot append html to container #" +
                    t +
                    ", html not defined.",
                );
              return (
                hj.hq("#" + t).remove(),
                hj.hq("body").append(e),
                hj.hq("#" + t + ">div")
              );
            }, "common.addToDom")),
            (t.TrustedString = function (t) {
              this.value = t;
            }),
            (t.callAccordingToCondition = hj.tryCatch(function (t, e, a) {
              var s = { immediate: n, delay: r, abandon: i, scroll: o }[
                t.display_condition
              ];
              if (
                (hj.log.debug(
                  "Calling active item (" + e + "): " + t.display_condition,
                  "rendering",
                ),
                !s)
              )
                throw new Error(
                  'Unhandled display condition: "' + t.display_condition + '"',
                );
              hj.tryCatch(s, "Rendering")(t, a, e);
            }, "common")),
            t
          );
        })()),
        (hj.survey = hj.tryCatch(function () {
          var t = {
            ctrl: void 0,
            data: void 0,
            model: {},
            activeLanguageDirection: "ltr",
          };
          return t;
        }, "common")()),
        (hj.ui = (function () {
          var t = {};
          return (
            (t.getWindowSize = hj.tryCatch(function () {
              var t = (function () {
                  try {
                    return window.self !== window.top;
                  } catch (t) {
                    return !0;
                  }
                })(),
                e = {
                  width:
                    !t && window.screen
                      ? window.screen.width
                      : document.body.clientWidth,
                  height:
                    !t && window.screen
                      ? window.screen.height
                      : document.body.clientHeight,
                };
              return {
                width:
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  e.width,
                height:
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  e.height,
              };
            }, "common")),
            (t.getDocumentSize = hj.tryCatch(function () {
              var e, n;
              if (
                document &&
                document.documentElement &&
                document.documentElement.clientWidth
              )
                (e = document.documentElement.clientWidth),
                  (n = document.documentElement.clientHeight);
              else {
                var r = t.getWindowSize();
                (e = r.width), (n = r.height);
              }
              return { width: e, height: n };
            }, "common")),
            (t.getScrollPosition = hj.tryCatch(function (t) {
              return (
                (t = t || window),
                { left: hj.hq(t).scrollLeft(), top: hj.hq(t).scrollTop() }
              );
            }, "common")),
            (t.getBottomAsPercentage = hj.tryCatch(function () {
              var t = parseInt(
                (1e3 *
                  (hj.hq(window).scrollTop() + hj.ui.getWindowSize().height)) /
                  hj.hq(document).height(),
                10,
              );
              return Math.min(1e3, t);
            }, "common")),
            (t.disableScrolling = hj.tryCatch(function (t) {
              var e = hj.ui.getScrollPosition();
              hj.hq(document).on(
                "scroll.hotjarDisable resize.hotjarDisable mousewheel.hotjarDisable DOMMouseScroll.hotjarDisable touchmove.hotjarDisable",
                hj.tryCatch(function (n) {
                  n.preventDefault(), window.scrollTo(e.left, e.top), t && t();
                }, "common"),
              );
            }, "common")),
            (t.enableScrolling = hj.tryCatch(function () {
              hj.hq(document).off("scroll.hotjarDisable"),
                hj.hq(document).off("resize.hotjarDisable"),
                hj.hq(document).off("mousewheel.hotjarDisable"),
                hj.hq(document).off("DOMMouseScroll.hotjarDisable"),
                hj.hq(document).off("touchmove.hotjarDisable");
            }, "common")),
            t
          );
        })()),
        (hj.dom = (function () {
          var t = {
            getCSSURLs: function () {
              var t = [],
                e = document.styleSheets;
              return (
                hj.log.debug("Getting CSS", "dpc", "Starting"),
                e &&
                  e.length > 0 &&
                  hj.hq.each(e, function (e, n) {
                    n.href &&
                      0 === n.href.indexOf("http") &&
                      (hj.log.debug("Getting CSS", "dpc", n.href),
                      t.push(n.href));
                  }),
                t
              );
            },
          };
          return t;
        })()),
        (hj.html = (function () {
          var t = {};
          return (
            (t.getPageContent = hj.tryCatch(function (t, e) {
              function n(t, e) {
                e = e || document;
                var n = parseInt(t.split(":")[0]),
                  r = t.substring(t.indexOf(":") + 1);
                return e.querySelectorAll(r)[n];
              }
              (e = e || []),
                hj.treeMirror.getMirroredDocument(function (r) {
                  var i = hj.insertedRules.getCurrentInsertedRules(),
                    o = {};
                  i.forEach(function (t) {
                    var i = n(t.parentSelector, r);
                    if (
                      (o[t.parentSelector] || (o[t.parentSelector] = ""),
                      "LINK" === i.tagName)
                    ) {
                      var a = i.attributes,
                        s = a.href.value
                          .split(location.hostname)
                          .pop()
                          .replace("/", ""),
                        c = r.querySelector(".blob-hash-" + s);
                      if (!c) {
                        (c = document.createElement("style")),
                          (o[t.parentSelector] =
                            o[t.parentSelector] + "/* Originally: <link ");
                        for (var u = 0, l = a.length; u < l; u++)
                          ("id" !== a[u].name && "class" !== a[u].name) ||
                            c.setAttribute(a[u].name, a[u].value),
                            (o[t.parentSelector] +=
                              a[u].name + '="' + a[u].value + '" ');
                        (o[t.parentSelector] += "> */"),
                          c.classList.add("blob-hash-" + s),
                          i.parentNode.insertBefore(c, i.nextSibling);
                      }
                      i = c;
                    }
                    (o[t.parentSelector] = o[t.parentSelector] + "\n" + t.rule),
                      -1 === e.indexOf('link[href*="blob:"]') &&
                        e.push('link[href*="blob:"]');
                  }),
                    Object.keys(o).forEach(function (t) {
                      n(t, r).textContent = o[t];
                    }),
                    (function (t, e, n) {
                      var r,
                        i = t.querySelectorAll("head iframe"),
                        o =
                          0 == document.getElementsByTagName("base").length
                            ? location.origin
                            : document.getElementsByTagName("base")[0].href;
                      [].forEach.call(i, function (t) {
                        t.parentNode.removeChild(t);
                      }),
                        n &&
                          n.forEach(function (e) {
                            (r = t.querySelectorAll(e)),
                              hj.hq.each(r, function (t, e) {
                                e.parentNode.removeChild(e);
                              });
                          }),
                        Array.prototype.slice
                          .call(t.getElementsByTagName("img"))
                          .forEach(function (t) {
                            if (t.srcset) {
                              if ("" === t.src) {
                                var e = t.srcset.match(
                                  /(?:([^"'\s,]+)(\s*(?:\s+\d+[wx]))?(?:,\s*)?)/g,
                                )[0];
                                if (e) {
                                  var n = e.indexOf(" ");
                                  n > 0 && (e = e.substring(0, n)),
                                    0 !==
                                      (e = e.replace(",", "")).indexOf(
                                        "http",
                                      ) && (e = o + e),
                                    (t.src = e);
                                }
                              }
                              t.removeAttribute("srcset");
                            }
                          }),
                        Array.prototype.slice
                          .call(t.getElementsByTagName("source"))
                          .forEach(function (t) {
                            t.attributes.srcset && t.removeAttribute("srcset");
                          }),
                        [].forEach.call(
                          t.querySelectorAll("script"),
                          function (t) {
                            t.parentNode.removeChild(t);
                          },
                        ),
                        e(
                          hj.html.getPageDoctype() +
                            t.documentElement.outerHTML,
                        );
                    })(r, t, e);
                });
            }, "common")),
            (t.getPageDoctype = hj.tryCatch(function () {
              return null === document.doctype
                ? ""
                : "<!DOCTYPE " +
                    (document.doctype.name || "html") +
                    (document.doctype.publicId
                      ? ' PUBLIC "' + document.doctype.publicId + '"'
                      : "") +
                    (!document.doctype.publicId && document.doctype.systemId
                      ? " SYSTEM"
                      : "") +
                    (document.doctype.systemId
                      ? ' "' + document.doctype.systemId + '"'
                      : "") +
                    ">\n";
            }, "common")),
            t
          );
        })()),
        (hj.features = (function () {
          var t = {};
          return (
            (t.getFeatures = hj.tryCatch(function () {
              return hj.settings.features || [];
            }, "hj.features.getFeatures")),
            (t.hasFeature = hj.tryCatch(function (e) {
              var n;
              try {
                var r = window.localStorage.getItem(
                  "HJ_OVERRIDE_FEATURE:".concat(e),
                );
                n = "true" === r || "1" === r;
              } catch (t) {
                n = !1;
              }
              return t.getFeatures().indexOf(e) > -1 || n;
            }, "hj.features.hasFeature")),
            t
          );
        })()),
        (hj.cssBlobs = (function () {
          var t = {},
            e = [];
          return (
            (t.register = function (t) {
              e.push(t);
            }),
            (t.handleBlobStyles = hj.tryCatch(function (t) {
              var n,
                r = [];
              if (
                "link" === t.tagName.toLowerCase() &&
                "rel" in t.attributes &&
                "stylesheet" === t.attributes.rel.value &&
                "href" in t.attributes &&
                0 === t.attributes.href.value.indexOf("blob:")
              ) {
                n = hj.selector().get(hj.hq(t));
                for (var o = 0, a = t.sheet.cssRules.length; o < a; o++)
                  r.push({
                    parentSelector: n,
                    rule: Object(i.a)(t.sheet.cssRules[o]),
                    index: o,
                  });
                e.forEach(function (t) {
                  t(r);
                });
              }
            }, "hj.cssBlobs.apply")),
            t
          );
        })()),
        (hj.viewport = hj.tryCatch(d, "common")()),
        (hj.resizeListeners = (function () {
          var t = {},
            e = {};
          return (
            (t.remove = hj.tryCatch(function (t) {
              var n = "survey_".concat(t);
              "function" == typeof e[n] &&
                window.removeEventListener("resize", e[n]);
            }, "hj.resizeHandlers.setHandler")),
            (t.add = hj.tryCatch(function (n, r) {
              var i = "survey_".concat(r);
              t.remove(r), (e[i] = n), window.addEventListener("resize", n);
            }, "hj.resizeHandlers.setHandler")),
            t
          );
        })()),
        (hj.experimentation = (function () {
          var t = {
            getVariant: function (t, e, n) {
              return hj.tryCatch(function () {
                var r;
                if (
                  !(
                    Array.isArray(e) &&
                    Array.isArray(n) &&
                    e.length &&
                    n.length &&
                    e.length === n.length
                  )
                )
                  throw new Error(
                    "Options and probability split must be arrays of equal length.",
                  );
                if (
                  n.reduce(function (t, e) {
                    return t + e;
                  }) < 0.99
                )
                  throw new Error(
                    "Probability splits should add up to at least 0.99.",
                  );
                (null === (r = window.hjSiteSettings.experimentation) ||
                void 0 === r
                  ? void 0
                  : r.variants) ||
                  (window.hjSiteSettings.experimentation = { variants: {} });
                var i = window.hjSiteSettings.experimentation.variants[t];
                if (!i) {
                  for (
                    var o, a = Math.random(), s = 0, c = 0;
                    c <= n.length - 1;
                    c++
                  ) {
                    var u = s + n[c];
                    if (a <= u) {
                      o = e[c];
                      break;
                    }
                    s = u;
                  }
                  window.hjSiteSettings.experimentation.variants[t] = i = o;
                }
                return i;
              }, "hj.experimentation.getVariant")();
            },
          };
          return t;
        })());
    }, "common")();
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "sessionEvents", function () {
        return r;
      });
    var r = {
      storage: {},
      set: hj.tryCatch(function (t) {
        r.storage.events = t;
      }, "sessionEvents.set"),
      get: hj.tryCatch(function () {
        return r.storage.events;
      }, "sessionEvents.get"),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Resource", function () {
        return a;
      });
    var r,
      i = n(94),
      o = new RegExp("<.+:(.+)>");
    function a(t, e, n) {
      var r = {},
        i = (function () {
          for (var e = t.split("/"), n = [], r = 0; r < e.length; r += 1) {
            var i = o.exec(e[r]);
            i
              ? n.push({ label: i[1], isDynamic: !0 })
              : n.push({ label: e[r], isDynamic: !1 });
          }
          return n;
        })();
      return (
        (function () {
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var o = e[t][0],
                a = e[t][1];
              r[t] = s({
                urlPathTokens: i,
                method: o,
                requiredArgs: a,
                getHost: n,
              });
            }
        })(),
        r
      );
    }
    function s(t) {
      var e = t.urlPathTokens,
        n = t.method,
        r = t.requiredArgs,
        o = t.getHost;
      function a(t) {
        if (!r) return t;
        for (var e = {}, n = 0; n < r.length; n += 1)
          if (((e[r[n]] = t[r[n]]), void 0 === e[r[n]]))
            throw new Error('Argument "' + r[n] + '" is missing.');
        return e;
      }
      return function (t, r, s, c) {
        var u,
          l = "https://"
            .concat(
              null !== (u = null == o ? void 0 : o()) && void 0 !== u
                ? u
                : hj.host,
            )
            .concat(
              (function (t, e) {
                for (var n = [], r = 0; r < t.length; r += 1) {
                  var i = t[r];
                  if (i.isDynamic) {
                    var o = e[i.label];
                    if (void 0 === o)
                      throw new Error('Argument "' + i.label + '" is missing.');
                    n.push(o);
                  } else n.push(i.label);
                }
                return n.join("/");
              })(e, t),
            );
        switch (n) {
          case "GET":
            i.get(l, r, s);
            break;
          case "POST":
            i.post(l, a(t), r, s, c);
            break;
          case "PUT":
            i.putAsJSON(l, a(t), r, s);
            break;
          default:
            throw new Error('HTTP method "' + n + '" is not supported.');
        }
      };
    }
    hj.resource =
      (((r = {}).TokenRestrictedStorage = a("/api/v1/trs/<string:token>", {
        put: ["PUT", ["token", "data"]],
      })),
      r);
  },
  ,
  ,
  ,
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    try {
      !(function (t, e) {
        var r = function (t) {
          return new i(t);
        };
        (r.isValidSelector = function (t) {
          try {
            return hj.hq(t), !0;
          } catch (t) {
            return !1;
          }
        }),
          (r.isEmptyObject = function (t) {
            return !Object.keys(t).length;
          }),
          (r.isFunction = function (t) {
            return "function" == typeof t;
          }),
          (r.isWindow = function (e) {
            return e === t;
          }),
          (r.isDocument = function (t, n) {
            return t === (n || e);
          }),
          (r.noop = function () {}),
          (r.stringify = function (t) {
            if (void 0 === Array.prototype.toJSON) return JSON.stringify(t);
            var e = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            try {
              return JSON.stringify(t);
            } finally {
              Array.prototype.toJSON = e;
            }
          }),
          (r.each = function (t, e) {
            var r, i, o;
            if (
              "object" === n(t) &&
              "[object Array]" !== Object.prototype.toString.call(t)
            ) {
              if ((i = t[Object.keys(t)[0]]) && void 0 !== i.nodeName) {
                for (r in t)
                  if (
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    "length" !== r &&
                    !1 === e(r, t[r], t)
                  )
                    break;
              } else
                for (r in t)
                  if (
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    !1 === e(r, t[r], t)
                  )
                    break;
            } else if (void 0 !== t)
              for (o = 0; o < t.length && !1 !== e(o, t[o], t); o += 1);
          }),
          (r.trim = function (t) {
            return "string" == typeof t ? t.replace(/^\s+|\s+$/gm, "") : "";
          }),
          (r.inArray = function (t, e) {
            var n = e.indexOf(t);
            return void 0 !== n && -1 !== n;
          }),
          (r.values = function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          }),
          (r.isUndefined = function (t) {
            return void 0 === t;
          }),
          (r.isNullOrUndefined = function (t) {
            return null === t || r.isUndefined(t);
          }),
          (r.indexOf = function (t, e) {
            if ("object" === n(e)) {
              var r = e.indexOf(t);
              return void 0 !== r ? r : -1;
            }
            return -1;
          }),
          (r.ajax = function (t) {
            var e = new XMLHttpRequest();
            (t.type = t.type || "GET"),
              (t.timeout_ms = t.timeout_ms || 15e3),
              t.withCredentials && (e.withCredentials = !0),
              e.open(t.type, t.url, !0),
              (e.timeout = t.timeout_ms),
              ("POST" !== t.type && "PUT" !== t.type) ||
                !t.contentType ||
                e.setRequestHeader("Content-Type", t.contentType),
              (e.onload = function () {
                e.status >= 200 && e.status < 400
                  ? r.isFunction(t.success) &&
                    t.success(e.responseText && JSON.parse(e.responseText), e)
                  : r.isFunction(t.error) && t.error(e);
              }),
              (e.onerror = function () {
                r.isFunction(t.error) && t.error(e);
              }),
              (e.ontimeout = function () {
                r.isFunction(t.timeout) && t.timeout(e);
              }),
              r.isFunction(t.requestAnnotator) && t.requestAnnotator(e),
              ("POST" !== t.type && "PUT" !== t.type) || !t.data
                ? e.send()
                : e.send(t.data);
          }),
          (r.get = function (t, e) {
            var n = new XMLHttpRequest();
            n.open("GET", t, !0),
              (n.timeout = 15e3),
              (n.onload = function () {
                n.status >= 200 && n.status < 400 && e && e(n.responseText);
              }),
              n.send();
          }),
          (r.eventHandlers = {}),
          (r.selector = "");
        var i = function (t) {
          var i,
            o,
            a,
            s = window._hjDocument || e;
          if (((r.selector = t), r.isWindow(t)))
            return (this[0] = window), (this.length = 1), this;
          if (r.isDocument(t, s)) return (this[0] = s), (this.length = 1), this;
          if ("object" === n(t)) return (this[0] = t), (this.length = 1), this;
          if (
            "string" == typeof t &&
            "<" === t.charAt(0) &&
            ">" === t.charAt(t.length - 1) &&
            t.length >= 3
          )
            return (
              ((i = s.createElement("div")).innerHTML = t),
              (this[0] = i.childNodes[0]),
              (this.length = 1),
              this
            );
          if ("string" == typeof t) {
            isNaN(t.charAt(1)) ||
              ("." !== t.charAt(0) && "#" !== t.charAt(0)) ||
              (t = t.charAt(0) + "\\3" + t.charAt(1) + " " + t.slice(2));
            try {
              o = s.querySelectorAll(t);
            } catch (t) {
              return (this.length = 0), this;
            }
            for (a = 0; a < o.length; a += 1) this[a] = o[a];
            return (this.length = o.length), this;
          }
          return this;
        };
        (i.prototype.val = function (t) {
          return (
            void 0 !== t && this.length > 0 && (this[0].value = t),
            void 0 === this[0] ? void 0 : this[0] ? this[0].value : ""
          );
        }),
          (i.prototype.text = function (t) {
            return void 0 === t
              ? this[0].textContent
              : (this[0].textContent = t);
          }),
          (i.prototype.each = function (t, e) {
            Array.prototype.forEach.call(this, function (t, n, r) {
              e(n, t, r);
            });
          }),
          (i.prototype.append = function (t) {
            var i;
            "object" === n(t)
              ? "body" === r.selector
                ? e.body.appendChild(t.get(0))
                : this[0].appendChild(t.get(0))
              : "body" === r.selector
              ? (((i = e.createElement("div")).innerHTML = t),
                e.body.appendChild(i))
              : (((i = e.createElement("div")).innerHTML = t),
                this[0].appendChild(i));
          }),
          (i.prototype.hasClass = function (t) {
            return this[0].classList
              ? this[0].classList.contains(t)
              : new RegExp("(^| )" + t + "( |$)", "gi").test(this[0].className);
          }),
          (i.prototype.addClass = function (t) {
            var e;
            for (e = 0; e < this.length; e += 1)
              this[e].classList
                ? this[e].classList.add(t)
                : (this[e].className += " " + t);
            return this;
          }),
          (i.prototype.removeClass = function (t) {
            var e;
            for (e = 0; e < this.length; e += 1)
              this[e].classList
                ? this[e].classList.remove(t)
                : (this[e].className = this[e].className.replace(
                    new RegExp(
                      "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                      "gi",
                    ),
                    " ",
                  ));
            return this;
          }),
          (i.prototype.toggleClass = function (t) {
            var e;
            for (e = 0; e < this.length; e += 1)
              this[e].classList
                ? this[e].classList.contains(t)
                  ? this[e].classList.remove(t)
                  : this[e].classList.add(t)
                : new RegExp("(^| )" + t + "( |$)", "gi").test(
                    this[0].className,
                  )
                ? (this[e].className = this[e].className.replace(
                    new RegExp(
                      "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                      "gi",
                    ),
                    " ",
                  ))
                : (this[e].className += " " + t);
            return this;
          }),
          (i.prototype.is = function (t) {
            return (function (t, e) {
              var n =
                t.matchesSelector ||
                t.msMatchesSelector ||
                t.mozMatchesSelector ||
                t.webkitMatchesSelector ||
                t.oMatchesSelector;
              if (n) return n.call(t, e);
              for (
                var r = t.parentNode.querySelectorAll(e), i = r.length;
                i >= 0;
                i -= 1
              )
                if (r[i] === t) return !0;
              return !1;
            })(this[0], t);
          }),
          (i.prototype.remove = function () {
            var t;
            for (t = 0; t < this.length; t += 1)
              this[t].parentNode.removeChild(this[t]);
          }),
          (i.prototype.click = function (t) {
            var n, r;
            for (n = 0; n < this.length; n += 1)
              (r = e.createEvent("HTMLEvents")).initEvent("click", !0, !1),
                this[n].dispatchEvent(r),
                t && t();
          }),
          (i.prototype.trigger = function (t) {
            var n,
              r,
              i,
              o = t.split(" ");
            for (n = 0; n < this.length; n += 1)
              for (r = 0; r < o.length; r += 1)
                (i = e.createEvent("HTMLEvents")).initEvent(o[r], !0, !1),
                  this[n].dispatchEvent(i);
          }),
          (i.prototype.on = function (t, i, o, a) {
            var s,
              c,
              u,
              l,
              h,
              d,
              f,
              g,
              p = t.split(" ");
            if (((a = !!a), r.isDocument(this[0]) && "string" == typeof i))
              for (c = 0; c < p.length; c += 1)
                "string" == typeof i
                  ? ("boolean" == typeof o &&
                      !1 === o &&
                      (o = function (t) {
                        return t.preventDefault(), !1;
                      }),
                    (u = i + "." + p[c]),
                    (l = function (t) {
                      if ((h = e.querySelectorAll(i))) {
                        for (
                          d = t.target, f = -1;
                          d && -1 === (f = Array.prototype.indexOf.call(h, d));

                        )
                          d = d.parentElement;
                        f > -1 && o.call(d, t);
                      }
                    }),
                    Array.isArray(r.eventHandlers[u]) ||
                      (r.eventHandlers[u] = []),
                    r.eventHandlers[u].push(l),
                    e.addEventListener(p[c].split(".")[0], l, !0))
                  : ("boolean" == typeof i &&
                      !1 === i &&
                      (i = function (t) {
                        return t.preventDefault(), !1;
                      }),
                    Array.isArray(r.eventHandlers.document) ||
                      (r.eventHandlers.document = []),
                    r.eventHandlers.document.push(i),
                    this[0].addEventListener(p[c].split(".")[0], i, a));
            else if (r.isDocument(this[0]))
              for (c = 0; c < p.length; c += 1)
                "boolean" == typeof i &&
                  !1 === i &&
                  (i = function (t) {
                    return t.preventDefault(), !1;
                  }),
                  (u = "document." + p[c]),
                  Array.isArray(r.eventHandlers[u]) ||
                    (r.eventHandlers[u] = []),
                  r.eventHandlers[u].push(i),
                  e.addEventListener(p[c].split(".")[0], i, a);
            else if (r.isWindow(this[0]))
              for (c = 0; c < p.length; c += 1)
                "boolean" == typeof i &&
                  !1 === i &&
                  (i = function (t) {
                    return t.preventDefault(), !1;
                  }),
                  (u = "window." + p[c]),
                  Array.isArray(r.eventHandlers[u]) ||
                    (r.eventHandlers[u] = []),
                  r.eventHandlers[u].push(i),
                  window.addEventListener(p[c].split(".")[0], i, a);
            else
              for (s = 0; s < this.length; s += 1)
                for (c = 0; c < p.length; c += 1)
                  "object" === n(i)
                    ? ((g = i),
                      (i = function (t) {
                        (t.data = g), o.call(this[s], t);
                      }))
                    : "boolean" == typeof i &&
                      !1 === i &&
                      (i = function (t) {
                        return t.preventDefault(), !1;
                      }),
                    (u = r.selector + "." + p[c]),
                    Array.isArray(r.eventHandlers[u]) ||
                      (r.eventHandlers[u] = []),
                    r.eventHandlers[u].push(i),
                    this[s].addEventListener(p[c].split(".")[0], i, a);
            return this;
          }),
          (i.prototype.off = function (t, i, o, a) {
            var s,
              c,
              u,
              l = t.split(" ");
            for (a = !!a, s = 0; s < this.length; s += 1)
              for (c = 0; c < l.length; c += 1)
                if (r.isDocument(this[s]) && "string" == typeof i)
                  if (void 0 === o) {
                    if ("object" === n(r.eventHandlers[i + "." + l[c]])) {
                      for (
                        u = 0;
                        u < r.eventHandlers[i + "." + l[c]].length;
                        u += 1
                      )
                        e.removeEventListener(
                          l[c].split(".")[0],
                          r.eventHandlers[i + "." + l[c]][u],
                          !0,
                        );
                      delete r.eventHandlers[i + "." + l[c]];
                    }
                  } else e.removeEventListener(l[c].split(".")[0], o, a);
                else if (r.isDocument(this[s]))
                  if (void 0 === i) {
                    if ("object" === n(r.eventHandlers["document." + l[c]])) {
                      for (
                        u = 0;
                        u < r.eventHandlers["document." + l[c]].length;
                        u += 1
                      )
                        e.removeEventListener(
                          l[c].split(".")[0],
                          r.eventHandlers["document." + l[c]][u],
                          a,
                        );
                      delete r.eventHandlers["document." + l[c]];
                    }
                  } else e.removeEventListener(l[c].split(".")[0], i, a);
                else if (r.isWindow(this[s]))
                  if (void 0 === i) {
                    if ("object" === n(r.eventHandlers["window." + l[c]])) {
                      for (
                        u = 0;
                        u < r.eventHandlers["window." + l[c]].length;
                        u += 1
                      )
                        window.removeEventListener(
                          l[c].split(".")[0],
                          r.eventHandlers["window." + l[c]][u],
                          a,
                        );
                      delete r.eventHandlers["window." + l[c]];
                    }
                  } else window.removeEventListener(l[c].split(".")[0], i, a);
                else if (void 0 === i) {
                  if (
                    "object" === n(r.eventHandlers[r.selector + "." + l[c]])
                  ) {
                    for (
                      u = 0;
                      u < r.eventHandlers[r.selector + "." + l[c]].length;
                      u += 1
                    )
                      this[s].removeEventListener(
                        l[c].split(".")[0],
                        r.eventHandlers[r.selector + "." + l[c]][u],
                        a,
                      );
                    delete r.eventHandlers[r.selector + "." + l[c]];
                  }
                } else this[s].removeEventListener(l[c].split(".")[0], i, a);
            return this;
          }),
          (i.prototype.scrollTop = function () {
            return r.isWindow(this[0]) || r.isDocument(this[0])
              ? window.document.body.scrollTop ||
                  window.document.documentElement.scrollTop
              : this[0].scrollTop;
          }),
          (i.prototype.scrollLeft = function () {
            return r.isWindow(this[0]) || r.isDocument(this[0])
              ? e.body.scrollLeft || e.documentElement.scrollLeft
              : this[0].scrollLeft;
          }),
          (i.prototype.height = function () {
            var t;
            return r.isWindow(this[0])
              ? e.documentElement.clientHeight
              : 9 === this[0].nodeType
              ? ((t = this[0].documentElement),
                Math.max(
                  this[0].body.scrollHeight,
                  t.scrollHeight,
                  this[0].body.offsetHeight,
                  t.offsetHeight,
                  t.clientHeight,
                ))
              : Math.max(this[0].scrollHeight, this[0].offsetHeight);
          }),
          (i.prototype.width = function () {
            var t;
            return r.isWindow(this[0])
              ? e.documentElement.clientWidth
              : 9 === this[0].nodeType
              ? ((t = this[0].documentElement),
                Math.max(
                  this[0].body.scrollWidth,
                  t.scrollWidth,
                  this[0].body.offsetWidth,
                  t.offsetWidth,
                  t.clientWidth,
                ))
              : Math.max(this[0].scrollWidth, this[0].offsetWidth);
          }),
          (i.prototype.outerHeight = function () {
            return this[0].offsetHeight;
          }),
          (i.prototype.offset = function () {
            var t = (this[0] && this[0].ownerDocument).documentElement;
            return {
              top:
                this[0].getBoundingClientRect().top +
                window.pageYOffset -
                t.clientTop,
              left:
                this[0].getBoundingClientRect().left +
                window.pageXOffset -
                t.clientLeft,
            };
          }),
          (i.prototype.attr = function (t, e) {
            var r;
            if (e || "" === e) {
              for (r = 0; r < this.length; r += 1) this[r].setAttribute(t, e);
              return this;
            }
            return this[0] &&
              "object" === n(this[0]) &&
              null !== this[0].getAttribute(t)
              ? this[0].getAttribute(t)
              : void 0;
          }),
          (i.prototype.ready = function (t) {
            r.isDocument(this[0]) &&
              ("interactive" === e.readyState ||
              "complete" === e.readyState ||
              "loaded" === e.readyState
                ? t()
                : e.addEventListener("DOMContentLoaded", t, !1));
          }),
          (i.prototype.parent = function () {
            var t;
            return "#document-fragment" ===
              (null === (t = this[0].parentNode) || void 0 === t
                ? void 0
                : t.nodeName)
              ? r(this[0].parentNode.host)
              : r(this[0].parentNode);
          }),
          (i.prototype.get = function (t) {
            return this[t];
          }),
          (i.prototype.show = function () {
            var t;
            for (t = 0; t < this.length; t += 1) this[t].style.display = "";
            return this;
          }),
          (i.prototype.hide = function () {
            var t;
            for (t = 0; t < this.length; t += 1) this[t].style.display = "none";
            return this;
          }),
          (i.prototype.focus = function () {
            var t;
            for (t = 0; t < this.length; t += 1) this[t].focus();
            return this;
          }),
          (i.prototype.blur = function () {
            var t;
            for (t = 0; t < this.length; t += 1) this[t].blur();
            return this;
          }),
          (i.prototype.clone = function () {
            return this[0].cloneNode(!0);
          }),
          (i.prototype.removeAttr = function (t) {
            var e;
            for (e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
            return this;
          }),
          (i.prototype.find = function (t) {
            var e,
              n,
              i = r();
            try {
              e = this[0].querySelectorAll(t);
            } catch (t) {
              return (this.length = 0), this;
            }
            for (n = 0; n < e.length; n += 1) i[n] = e[n];
            return (i.length = e.length), i;
          }),
          (i.prototype.is = function (t) {
            var e,
              i = !1;
            if (!t || "object" !== n(this[0])) return !1;
            if ("object" === n(t)) return r(this[0]).get(0) === t.get(0);
            if ("string" == typeof t) {
              if (":visible" === t)
                return !(this[0].offsetWidth <= 0 && this[0].offsetHeight <= 0);
              if (":hidden" === t)
                return this[0].offsetWidth <= 0 && this[0].offsetHeight <= 0;
              if (":checked" === t) return this[0].checked;
              if (!(t.indexOf("[") > -1))
                return r(this[0]).get(0).nodeName.toLowerCase() === t;
              if (
                (e = /([A-Za-z]+)\[([A-Za-z-]+)=([A-Za-z]+)]/g.exec(t)).length
              )
                return (
                  r.each(r(this[0]).get(0).attributes, function (t, n) {
                    n.name === e[2] && n.value === e[3] && (i = !0);
                  }),
                  r(this[0]).get(0).nodeName.toLowerCase() === e[1] && i
                );
            }
          }),
          (i.prototype.css = function (t, e) {
            var r, i;
            for (i = 0; i < this.length; i += 1)
              if ("object" === n(t)) for (r in t) this[i].style[r] = t[r];
              else {
                if ("number" != typeof e && "string" != typeof e)
                  return getComputedStyle(this[i])[t];
                if ("__proto__" === t || "constructor" === t) return;
                this[i].style[t] = e;
              }
            return this;
          }),
          (i.prototype.animate = function (t, e) {
            var n,
              i = this;
            for (void 0 === e && (e = 400), n = 0; n < i.length; n += 1)
              r.each(t, function (t, r) {
                r = r.toString();
                var o,
                  a,
                  s = getComputedStyle(i[n])[t].replace(/[0-9.-]/g, ""),
                  c = parseFloat(r),
                  u = r.replace(/[0-9.-]/g, ""),
                  l = s || u,
                  h = c - p,
                  d = parseFloat(e / 10),
                  f = h / d,
                  g = [],
                  p = parseFloat(getComputedStyle(i[n])[t]) || 0;
                for (o = 0; o < d; o += 1)
                  (p += f),
                    g.push({
                      attribute: t,
                      value: l ? parseInt(p) + l : parseFloat(p).toFixed(1),
                    });
                g.pop(),
                  g.push({ attribute: t, value: c + l }),
                  g.length &&
                    (function t(e, n) {
                      var r = n[0].attribute;
                      if ("__proto__" === r || "constructor" === r) return;
                      (e.style[r] = n[0].value),
                        n.shift(),
                        n.length
                          ? (a = setTimeout(function () {
                              t(e, n);
                            }, 10))
                          : clearTimeout(a);
                    })(i[n], g);
              });
            return this;
          }),
          (i.prototype.filter = function (t) {
            return Array.prototype.filter.call(
              e.querySelectorAll(r.selector),
              function (e, n) {
                t(n, e);
              },
            );
          }),
          (t.hj = t.hj || {}),
          (t.hj.hq = t.hj.hq || r);
      })(window, document);
    } catch (t) {
      hj.exceptions.log(t, "hquery");
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return h;
    }),
      n.d(e, "b", function () {
        return d;
      });
    var r,
      i = n(68),
      o = n(5),
      a = n(6),
      s = n(119),
      c = n(37),
      u = Object(s.a)({
        storageAccessor: o.a.items.HJ_SESSION,
        serializer: c.g,
        deserializer: c.b,
      }),
      l = function () {
        return u.get();
      },
      h = function () {
        var t = r || l();
        return null == t ? void 0 : t.id;
      },
      d = function () {
        var t, e, n, o, s, h, d, f;
        null === l() &&
          ((h =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : Object(c.c)()),
          (d =
            null !== (o = null == e ? void 0 : e.created) && void 0 !== o
              ? o
              : a.a.now()),
          (f =
            null !== (s = null == e ? void 0 : e.inSample) && void 0 !== s
              ? s
              : Object(i.a)()),
          (r = Object.freeze({ id: h, created: d, inSample: f })),
          (t = r),
          u.set(t));
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = { shouldSuppressOnPage: !1 },
      i = {
        get: function () {
          return r.shouldSuppressOnPage;
        },
        set: function (t) {
          var e;
          r.shouldSuppressOnPage =
            !!(null === (e = hj.settings.suppress_all_on_specific_pages) ||
            void 0 === e
              ? void 0
              : e.length) &&
            hj.targeting.matchUrl(
              hj.settings.suppress_all_on_specific_pages,
              t,
            );
        },
        reset: function () {
          r.shouldSuppressOnPage = !1;
        },
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = n(81),
      i = function (t) {
        var e = t.storageAccessor,
          n = t.serializer,
          i = t.deserializer;
        return {
          get: function () {
            var t = e.get();
            if (!t) return null;
            var n = (function (t) {
              try {
                return { result: t() };
              } catch (t) {
                return t instanceof Error
                  ? { error: t }
                  : "string" == typeof t
                  ? { error: new Error(t) }
                  : { error: new Error("<error>") };
              }
            })(function () {
              return i(Object(r.a)(t));
            }).result;
            return void 0 === n ? null : n;
          },
          set: function (t) {
            e.set(Object(r.b)(n(t)));
          },
        };
      };
  },
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return o;
      });
    var r = n(38),
      i = function (t, e) {
        if (e) return "https://".concat(e, "/").concat(t);
        var n = Object(r.c)(),
          i = r.b[n].SURVEYS;
        return "https://".concat(i, "/").concat(t);
      },
      o = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document.location.href,
          e = [
            r.b[r.a.LIVE].SURVEYS,
            r.b[r.a.REVIEW_WEBAPP].SURVEYS,
            r.b[r.a.REVIEW].SURVEYS,
            r.b[r.a.STAGING].SURVEYS,
            r.b[r.a.DEV].SURVEYS,
            r.b[r.a.DEV_OLD].SURVEYS,
          ],
          n = document.createElement("a");
        return (n.href = t), e.indexOf(n.hostname) >= 0;
      };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    t.exports = function (t, e) {
      e || (e = {}), "function" == typeof e && (e = { cmp: e });
      var n,
        i = "boolean" == typeof e.cycles && e.cycles,
        o =
          e.cmp &&
          ((n = e.cmp),
          function (t) {
            return function (e, r) {
              var i = { key: e, value: t[e] },
                o = { key: r, value: t[r] };
              return n(i, o);
            };
          }),
        a = [];
      return (function t(e) {
        if (
          (e && e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON()),
          void 0 !== e)
        ) {
          if ("number" == typeof e) return isFinite(e) ? "" + e : "null";
          if ("object" !== r(e)) return JSON.stringify(e);
          var n, s;
          if (Array.isArray(e)) {
            for (s = "[", n = 0; n < e.length; n++)
              n && (s += ","), (s += t(e[n]) || "null");
            return s + "]";
          }
          if (null === e) return "null";
          if (-1 !== a.indexOf(e)) {
            if (i) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          var c = a.push(e) - 1,
            u = Object.keys(e).sort(o && o(e));
          for (s = "", n = 0; n < u.length; n++) {
            var l = u[n],
              h = t(e[l]);
            h && (s && (s += ","), (s += JSON.stringify(l) + ":" + h));
          }
          return a.splice(c, 1), "{" + s + "}";
        }
      })(t);
    };
  },
  function (t, e, n) {
    var r, i, o;
    !(function (a, s) {
      "use strict";
      (i = [n(217)]),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function (t) {
              var e = /(^|@)\S+:\d+/,
                n = /^\s*at .*(\S+:\d+|\(native\))/m,
                r = /^(eval@)?(\[native code])?$/;
              return {
                parse: function (t) {
                  if (
                    void 0 !== t.stacktrace ||
                    void 0 !== t["opera#sourceloc"]
                  )
                    return this.parseOpera(t);
                  if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t);
                  if (t.stack) return this.parseFFOrSafari(t);
                  throw new Error("Cannot parse given Error object");
                },
                extractLocation: function (t) {
                  if (-1 === t.indexOf(":")) return [t];
                  var e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                    t.replace(/[()]/g, ""),
                  );
                  return [e[1], e[2] || void 0, e[3] || void 0];
                },
                parseV8OrIE: function (e) {
                  return e.stack
                    .split("\n")
                    .filter(function (t) {
                      return !!t.match(n);
                    }, this)
                    .map(function (e) {
                      e.indexOf("(eval ") > -1 &&
                        (e = e
                          .replace(/eval code/g, "eval")
                          .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                      var n = e
                          .replace(/^\s+/, "")
                          .replace(/\(eval code/g, "(")
                          .replace(/^.*?\s+/, ""),
                        r = n.match(/ (\(.+\)$)/);
                      n = r ? n.replace(r[0], "") : n;
                      var i = this.extractLocation(r ? r[1] : n),
                        o = (r && n) || void 0,
                        a =
                          ["eval", "<anonymous>"].indexOf(i[0]) > -1
                            ? void 0
                            : i[0];
                      return new t({
                        functionName: o,
                        fileName: a,
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: e,
                      });
                    }, this);
                },
                parseFFOrSafari: function (e) {
                  return e.stack
                    .split("\n")
                    .filter(function (t) {
                      return !t.match(r);
                    }, this)
                    .map(function (e) {
                      if (
                        (e.indexOf(" > eval") > -1 &&
                          (e = e.replace(
                            / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                            ":$1",
                          )),
                        -1 === e.indexOf("@") && -1 === e.indexOf(":"))
                      )
                        return new t({ functionName: e });
                      var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                        r = e.match(n),
                        i = r && r[1] ? r[1] : void 0,
                        o = this.extractLocation(e.replace(n, ""));
                      return new t({
                        functionName: i,
                        fileName: o[0],
                        lineNumber: o[1],
                        columnNumber: o[2],
                        source: e,
                      });
                    }, this);
                },
                parseOpera: function (t) {
                  return !t.stacktrace ||
                    (t.message.indexOf("\n") > -1 &&
                      t.message.split("\n").length >
                        t.stacktrace.split("\n").length)
                    ? this.parseOpera9(t)
                    : t.stack
                    ? this.parseOpera11(t)
                    : this.parseOpera10(t);
                },
                parseOpera9: function (e) {
                  for (
                    var n = /Line (\d+).*script (?:in )?(\S+)/i,
                      r = e.message.split("\n"),
                      i = [],
                      o = 2,
                      a = r.length;
                    o < a;
                    o += 2
                  ) {
                    var s = n.exec(r[o]);
                    s &&
                      i.push(
                        new t({
                          fileName: s[2],
                          lineNumber: s[1],
                          source: r[o],
                        }),
                      );
                  }
                  return i;
                },
                parseOpera10: function (e) {
                  for (
                    var n =
                        /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                      r = e.stacktrace.split("\n"),
                      i = [],
                      o = 0,
                      a = r.length;
                    o < a;
                    o += 2
                  ) {
                    var s = n.exec(r[o]);
                    s &&
                      i.push(
                        new t({
                          functionName: s[3] || void 0,
                          fileName: s[2],
                          lineNumber: s[1],
                          source: r[o],
                        }),
                      );
                  }
                  return i;
                },
                parseOpera11: function (n) {
                  return n.stack
                    .split("\n")
                    .filter(function (t) {
                      return !!t.match(e) && !t.match(/^Error created at/);
                    }, this)
                    .map(function (e) {
                      var n,
                        r = e.split("@"),
                        i = this.extractLocation(r.pop()),
                        o = r.shift() || "",
                        a =
                          o
                            .replace(/<anonymous function(: (\w+))?>/, "$2")
                            .replace(/\([^)]*\)/g, "") || void 0;
                      o.match(/\(([^)]*)\)/) &&
                        (n = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                      var s =
                        void 0 === n || "[arguments not available]" === n
                          ? void 0
                          : n.split(",");
                      return new t({
                        functionName: a,
                        args: s,
                        fileName: i[0],
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: e,
                      });
                    }, this);
                },
              };
            })
              ? r.apply(e, i)
              : r) || (t.exports = o);
    })();
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    (n.p = hj.scriptDomain),
      hj.metrics.timeStart("resource-blocking-time", {
        resource: "modules-js",
      }),
      (0, n(199).initErrorLogging)(),
      n(116),
      n(200),
      n(232),
      n(103),
      n(201),
      n(228),
      n(223),
      n(49),
      n(111),
      n(204),
      n(205),
      n(206),
      n(207),
      n(208),
      n(213),
      n(229),
      n(214),
      n(215),
      n(216),
      n(225),
      hj.metrics.timeEnd("resource-blocking-time", {
        tag: { resource: "modules-js" },
        type: "lab",
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "exceptionLogger", function () {
        return u;
      }),
      n.d(e, "initErrorLogging", function () {
        return l;
      });
    var r = n(2);
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              s(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
      }
      return t;
    }
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function c(t) {
      if (!window.navigator && !window.location && !window.document) return t;
      var e =
          (t.request && t.request.url) ||
          (window.location && window.location.href),
        n = (window.document || {}).referrer,
        r = (window.navigator || {}).userAgent,
        i = a(
          a(a({}, t.request && t.request.headers), n && { Referer: n }),
          r && { "User-Agent": r },
        ),
        o = a(a({}, e && { url: e }), {}, { headers: i });
      return a(a({}, t), {}, { request: o });
    }
    var u = function (t) {
      var e;
      function n(t, e, n) {
        (void 0 !== hj.log ? hj.log.debug : function () {})(t, e, n);
      }
      var o,
        a = null,
        s = 0,
        u = [],
        l =
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g,
        h = /\d{1,3}\.\d{1,3}\.\d{1,3}\.(\d{1,3})/g,
        d = /\d{4,}([-\s]?\d{4,}){2,}/g,
        f = /password(.*)/g,
        g = {},
        p = [],
        v = null !== hj.errorUrl,
        m =
          window.location.search.indexOf("hjErrorLoggerSamplingDisabled=1") > 0
            ? 1
            : 0.002,
        y = (null == t ? void 0 : t.throttleDelay) || 1e3,
        j = (null == t ? void 0 : t.maxErrors) || 10,
        b = [
          "event_id",
          "stacktrace",
          "release",
          "useragent",
          "User-Agent",
          "logger",
          "scriptversion",
          "module",
          "errorgroup",
          "errormessagegroup",
        ];
      function w() {
        return u.every(function (t) {
          return "loaded" === t.state;
        });
      }
      function S(t) {
        (t.state = "loaded"),
          t.onLoad(),
          w() && v && g.startProcessing && g.startProcessing();
      }
      function _() {
        u.filter(function (t) {
          return "unloaded" === t.state;
        }).forEach(function (t) {
          t.check()
            ? S(t)
            : ((function (t) {
                var e;
                t.state = "loading";
                var n = document.createElement("script");
                (n.src = t.url),
                  null === (e = document.getElementsByTagName("head")[0]) ||
                    void 0 === e ||
                    e.appendChild(n);
              })(t),
              (function (t) {
                var e = setInterval(function () {
                  t.check() && (clearInterval(e), S(t));
                }, 10);
              })(t));
        });
      }
      return (
        (u = [
          {
            name: "sentry",
            check: function () {
              return void 0 !== hj.Sentry;
            },
            url: ""
              .concat(hj.scriptDomain)
              .concat(
                null === (e = r.e.SENTRY) || void 0 === e ? void 0 : e.js,
              ),
            state: "unloaded",
            onLoad: function () {
              var t = new hj.Sentry.BrowserClient({
                dsn: hj.errorUrl,
                environment: hj.environmentID,
                release:
                  "insights-client-script-" + window.hjBootstrap.revision,
                sampleRate: m,
                defaultIntegrations: !1,
                integrations: [],
                beforeSend: function (t) {
                  if (!/.*Google.*/.test(window.navigator.userAgent))
                    return (function t(e) {
                      return (
                        hj.hq.each(e, function (n, r) {
                          r && "object" === i(r)
                            ? t(r)
                            : r &&
                              "string" == typeof r &&
                              -1 == b.indexOf(n) &&
                              ((r = (r = (r = (r = r.replace(
                                h,
                                "<XXX>",
                              )).replace(l, "<user@example.com>")).replace(
                                d,
                                "123456789012",
                              )).replace(f, "<******>")),
                              (e[n] = r));
                        }),
                        e
                      );
                    })(t);
                },
              });
              (o = new hj.Sentry.Hub(t)).setUser({ id: _hjSettings.hjid }),
                o.getScope().addEventProcessor(c);
            },
          },
        ]),
        (g.sendException = function (t) {
          try {
            o.captureException(t.exception, { tags: { logger: t.module } });
          } catch (t) {
            n("Failed to log exception: " + t, "Exception");
          }
        }),
        (g.tryCatch = function (t, e) {
          return function () {
            try {
              return t.apply(this, arguments);
            } catch (t) {
              g.handleError && g.handleError(t, e);
            }
          };
        }),
        (g.handleError = function (t, e) {
          if (
            (/[?&]logErrors/.test(location.search) && console.error(t),
            window.__TESTS__)
          )
            throw t;
          g.log && g.log(t, e || "Generic");
        }),
        (g.log = function (t, e) {
          var r;
          n("Exception occurred in '" + e + "'", "Exception", t),
            (r = { exception: t, module: e }),
            p.length < j && (w() || _(), p.push(r));
        }),
        (g.getQueue = function () {
          return p;
        }),
        (g.startProcessing = function () {
          g.isProcessing &&
            !g.isProcessing() &&
            (a = setInterval(function () {
              var t;
              (t = p.shift()) && (g.sendException && g.sendException(t), s++),
                s >= j && g.stopProcessing && g.stopProcessing();
            }, y));
        }),
        (g.isProcessing = function () {
          return null !== a;
        }),
        (g.stopProcessing = function () {
          g.isProcessing &&
            g.isProcessing() &&
            a &&
            (clearInterval(a), (a = null));
        }),
        g
      );
    };
    function l() {
      (window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        }),
        (window._hjSettings = window._hjSettings || {}),
        (hj.defaults = {
          host: "in.hotjar.com",
          environment: "live",
          environmentID: "live",
          insightsHost: "insights.hotjar.com",
          insightsApiHost: "insights.hotjar.com",
          staticHost: "static.hotjar.com",
          varsHost: "vars.hotjar.com",
          surveysHost: "surveys.hotjar.com",
          errorUrl:
            "https://1f207eb734724d2698fcacdeae569a24@sentry-proxy.hotjar.com/1803150",
          identifyEndpoint: "https://identify.hotjar.com",
          viewCounterEndpoint: "https://vc.hotjar.io/sessions",
          viewCounterHitPercentage: 0.25,
          surveyImpressionsEndpoint: "https://surveystats.hotjar.io/hit",
        }),
        (hj.host = _hjSettings.host || hj.defaults.host),
        (hj.insightsHost =
          _hjSettings.insightsHost || hj.defaults.insightsHost),
        (hj.insightsApiHost =
          _hjSettings.insightsApiHost || hj.defaults.insightsApiHost),
        (hj.staticHost = _hjSettings.staticHost || hj.defaults.staticHost),
        (hj.varsHost = _hjSettings.varsHost || hj.defaults.varsHost),
        (hj.surveysHost = _hjSettings.surveysHost || hj.defaults.surveysHost),
        (hj.errorUrl =
          void 0 !== _hjSettings.errorUrl
            ? _hjSettings.errorUrl
            : hj.defaults.errorUrl),
        (hj.environment = _hjSettings.environment || hj.defaults.environment),
        (hj.environmentID =
          _hjSettings.environmentID || hj.defaults.environmentID),
        (hj.identifyEndpoint =
          _hjSettings.identifyEndpoint || hj.defaults.identifyEndpoint),
        (hj.viewCounterEndpoint =
          void 0 !== _hjSettings.viewCounterEndpoint
            ? _hjSettings.viewCounterEndpoint
            : hj.defaults.viewCounterEndpoint),
        (hj.viewCounterHitPercentage =
          void 0 !== _hjSettings.viewCounterHitPercentage
            ? _hjSettings.viewCounterHitPercentage
            : hj.defaults.viewCounterHitPercentage),
        (hj.surveyImpressionsEndpoint =
          void 0 !== _hjSettings.surveyImpressionsEndpoint
            ? _hjSettings.surveyImpressionsEndpoint
            : hj.defaults.surveyImpressionsEndpoint),
        (hj.exceptions = u()),
        (hj.tryCatch = hj.exceptions.tryCatch),
        (hj.handleError = hj.exceptions.handleError);
    }
  },
  function (t, e) {
    hj.tryCatch(function () {
      if (
        void 0 !== window.MutationObserver ||
        void 0 !== window.WebKitMutationObserver ||
        void 0 !== window.MozMutationObserver
      ) {
        var t,
          e =
            (this || {}).__extends ||
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              (n.prototype = e.prototype), (t.prototype = new n());
            };
        if (
          void 0 ===
          (t =
            "undefined" != typeof WebKitMutationObserver
              ? WebKitMutationObserver
              : MutationObserver)
        )
          throw (
            (console.error("DOM Mutation Observers are required."),
            console.error(
              "https://developer.mozilla.org/en-US/docs/DOM/MutationObserver",
            ),
            Error("DOM Mutation Observers are required"))
          );
        var n,
          r = (function () {
            function t() {
              (this.nodes = []), (this.values = []);
            }
            return (
              (t.prototype.isIndex = function (t) {
                return +t == t >>> 0;
              }),
              (t.prototype.nodeId = function (e) {
                var n = e[t.ID_PROP];
                return n || (n = e[t.ID_PROP] = t.nextId_++), n;
              }),
              (t.prototype.set = function (t, e) {
                var n = this.nodeId(t);
                (this.nodes[n] = t), (this.values[n] = e);
              }),
              (t.prototype.get = function (t) {
                return (t = this.nodeId(t)), this.values[t];
              }),
              (t.prototype.has = function (t) {
                return this.nodeId(t) in this.nodes;
              }),
              (t.prototype.deleteNode = function (t) {
                (t = this.nodeId(t)),
                  delete this.nodes[t],
                  (this.values[t] = void 0);
              }),
              (t.prototype.keys = function () {
                var t,
                  e = [];
                for (t in this.nodes) this.isIndex(t) && e.push(this.nodes[t]);
                return e;
              }),
              (t.prototype.getValues = function () {
                var t,
                  e = [];
                for (t in this.values)
                  this.isIndex(t) && e.push(this.values[t]);
                return e;
              }),
              (t.ID_PROP = "__hj_mutation_summary_node_map_id__"),
              (t.nextId_ = 1),
              t
            );
          })();
        ((m = n || (n = {}))[(m.STAYED_OUT = 0)] = "STAYED_OUT"),
          (m[(m.ENTERED = 1)] = "ENTERED"),
          (m[(m.STAYED_IN = 2)] = "STAYED_IN"),
          (m[(m.REPARENTED = 3)] = "REPARENTED"),
          (m[(m.REORDERED = 4)] = "REORDERED"),
          (m[(m.EXITED = 5)] = "EXITED");
        var i = (function () {
            function t(t, e, n, r, i, o, a, s) {
              void 0 === e && (e = !1),
                void 0 === n && (n = !1),
                void 0 === r && (r = !1),
                void 0 === i && (i = null),
                void 0 === o && (o = !1),
                void 0 === a && (a = null),
                void 0 === s && (s = null),
                (this.node = t),
                (this.childList = e),
                (this.attributes = n),
                (this.characterData = r),
                (this.oldParentNode = i),
                (this.added = o),
                (this.attributeOldValues = a),
                (this.characterDataOldValue = s),
                (this.isCaseInsensitive =
                  this.node.nodeType === Node.ELEMENT_NODE &&
                  this.node instanceof HTMLElement &&
                  this.node.ownerDocument instanceof HTMLDocument);
            }
            return (
              (t.prototype.getAttributeOldValue = function (t) {
                if (this.attributeOldValues)
                  return (
                    this.isCaseInsensitive && (t = t.toLowerCase()),
                    this.attributeOldValues[t]
                  );
              }),
              (t.prototype.getAttributeNamesMutated = function () {
                var t = [];
                if (!this.attributeOldValues) return t;
                for (var e in this.attributeOldValues) t.push(e);
                return t;
              }),
              (t.prototype.attributeMutated = function (t, e) {
                (this.attributes = !0),
                  (this.attributeOldValues = this.attributeOldValues || {}),
                  t in this.attributeOldValues ||
                    (this.attributeOldValues[t] = e);
              }),
              (t.prototype.characterDataMutated = function (t) {
                this.characterData ||
                  ((this.characterData = !0), (this.characterDataOldValue = t));
              }),
              (t.prototype.removedFromParent = function (t) {
                (this.childList = !0),
                  this.added || this.oldParentNode
                    ? (this.added = !1)
                    : (this.oldParentNode = t);
              }),
              (t.prototype.insertedIntoParent = function () {
                this.added = this.childList = !0;
              }),
              (t.prototype.getOldParent = function () {
                if (this.childList) {
                  if (this.oldParentNode) return this.oldParentNode;
                  if (this.added) return null;
                }
                return this.node.parentNode;
              }),
              t
            );
          })(),
          o = function () {
            (this.added = new r()),
              (this.removed = new r()),
              (this.maybeMoved = new r()),
              (this.oldPrevious = new r()),
              (this.moved = void 0);
          },
          a = (function (t) {
            function n(e, n) {
              t.call(this),
                (this.rootNode = e),
                (this.wasReachableCache = this.reachableCache = void 0),
                (this.anyCharacterDataChanged =
                  this.anyAttributesChanged =
                  this.anyParentsChanged =
                    !1);
              for (var r = 0; r < n.length; r++) {
                var i = n[r];
                switch (i.type) {
                  case "childList":
                    this.anyParentsChanged = !0;
                    for (var o = 0; o < i.removedNodes.length; o++) {
                      var a = i.removedNodes[o];
                      this.getChange(a).removedFromParent(i.target);
                    }
                    for (o = 0; o < i.addedNodes.length; o++)
                      (a = i.addedNodes[o]),
                        this.getChange(a).insertedIntoParent();
                    break;
                  case "attributes":
                    (this.anyAttributesChanged = !0),
                      (o = this.getChange(i.target)).attributeMutated(
                        i.attributeName,
                        i.oldValue,
                      );
                    break;
                  case "characterData":
                    (this.anyCharacterDataChanged = !0),
                      (o = this.getChange(i.target)).characterDataMutated(
                        i.oldValue,
                      );
                }
              }
            }
            return (
              e(n, t),
              (n.prototype.getChange = function (t) {
                var e = this.get(t);
                return e || ((e = new i(t)), this.set(t, e)), e;
              }),
              (n.prototype.getOldParent = function (t) {
                var e = this.get(t);
                return e ? e.getOldParent() : t.parentNode;
              }),
              (n.prototype.getIsReachable = function (t) {
                if (t === this.rootNode) return !0;
                if (!t) return !1;
                this.reachableCache = this.reachableCache || new r();
                var e = this.reachableCache.get(t);
                return (
                  void 0 === e &&
                    ((e = this.getIsReachable(t.parentNode)),
                    this.reachableCache.set(t, e)),
                  e
                );
              }),
              (n.prototype.getWasReachable = function (t) {
                if (t === this.rootNode) return !0;
                if (!t) return !1;
                this.wasReachableCache = this.wasReachableCache || new r();
                var e = this.wasReachableCache.get(t);
                if (void 0 === e) {
                  var n = this.getOldParent(t);
                  if (n === t) return !1;
                  (e = this.getWasReachable(n)),
                    this.wasReachableCache.set(t, e);
                }
                return e;
              }),
              (n.prototype.reachabilityChange = function (t) {
                return this.getIsReachable(t)
                  ? this.getWasReachable(t)
                    ? 2
                    : 1
                  : this.getWasReachable(t)
                  ? 5
                  : 0;
              }),
              n
            );
          })(r),
          s = (function () {
            function t(t, e, n, i, o) {
              (this.rootNode = t),
                (this.mutations = e),
                (this.selectors = n),
                (this.calcReordered = i),
                (this.calcOldPreviousSibling = o),
                (this.treeChanges = new a(t, e)),
                (this.entered = []),
                (this.exited = []),
                (this.stayedIn = new r()),
                (this.visited = new r()),
                (this.matchCache =
                  this.characterDataOnly =
                  this.childListChangeMap =
                    void 0),
                this.processMutations();
            }
            return (
              (t.prototype.processMutations = function () {
                if (
                  this.treeChanges.anyParentsChanged ||
                  this.treeChanges.anyAttributesChanged
                )
                  for (
                    var t = this.treeChanges.keys(), e = 0;
                    e < t.length;
                    e++
                  )
                    this.visitNode(t[e], void 0);
              }),
              (t.prototype.visitNode = function (t, e) {
                if (!this.visited.has(t)) {
                  this.visited.set(t, !0);
                  var n = this.treeChanges.get(t),
                    r = e;
                  if (
                    (((n && n.childList) || null == r) &&
                      (r = this.treeChanges.reachabilityChange(t)),
                    0 !== r)
                  ) {
                    if ((this.matchabilityChange(t), 1 === r))
                      this.entered.push(t);
                    else if (5 === r)
                      this.exited.push(t),
                        this.ensureHasOldPreviousSiblingIfNeeded(t);
                    else if (2 === r) {
                      var i = 2;
                      n &&
                        n.childList &&
                        (n.oldParentNode !== t.parentNode
                          ? ((i = 3),
                            this.ensureHasOldPreviousSiblingIfNeeded(t))
                          : this.calcReordered &&
                            this.wasReordered(t) &&
                            (i = 4)),
                        this.stayedIn.set(t, i);
                    }
                    if (2 !== r)
                      for (n = t.firstChild; n; n = n.nextSibling)
                        this.visitNode(n, r);
                  }
                }
              }),
              (t.prototype.ensureHasOldPreviousSiblingIfNeeded = function (t) {
                if (this.calcOldPreviousSibling) {
                  this.processChildlistChanges();
                  var e = t.parentNode,
                    n = this.treeChanges.get(t);
                  n && n.oldParentNode && (e = n.oldParentNode),
                    (n = this.childListChangeMap.get(e)) ||
                      ((n = new o()), this.childListChangeMap.set(e, n)),
                    n.oldPrevious.has(t) ||
                      n.oldPrevious.set(t, t.previousSibling);
                }
              }),
              (t.prototype.getChanged = function (t, e, n) {
                for (
                  this.selectors = e, this.characterDataOnly = n, e = 0;
                  e < this.entered.length;
                  e++
                ) {
                  n = this.entered[e];
                  var r = this.matchabilityChange(n);
                  (1 === r || 2 === r) && t.added.push(n);
                }
                var i = this.stayedIn.keys();
                for (e = 0; e < i.length; e++)
                  (n = i[e]),
                    1 === (r = this.matchabilityChange(n))
                      ? t.added.push(n)
                      : 5 === r
                      ? t.removed.push(n)
                      : 2 === r &&
                        (t.reparented || t.reordered) &&
                        ((r = this.stayedIn.get(n)),
                        t.reparented && 3 === r
                          ? t.reparented.push(n)
                          : t.reordered && 4 === r && t.reordered.push(n));
                for (e = 0; e < this.exited.length; e++)
                  (n = this.exited[e]),
                    (5 === (r = this.matchabilityChange(n)) || 2 === r) &&
                      t.removed.push(n);
              }),
              (t.prototype.getOldParentNode = function (t) {
                var e = this.treeChanges.get(t);
                if (e && e.childList)
                  return e.oldParentNode ? e.oldParentNode : null;
                if (
                  0 === (e = this.treeChanges.reachabilityChange(t)) ||
                  1 === e
                )
                  throw Error("getOldParentNode requested on invalid node.");
                return t.parentNode;
              }),
              (t.prototype.getOldPreviousSibling = function (t) {
                var e = t.parentNode,
                  n = this.treeChanges.get(t);
                if (
                  (n && n.oldParentNode && (e = n.oldParentNode),
                  !(e = this.childListChangeMap.get(e)))
                )
                  throw Error(
                    "getOldPreviousSibling requested on invalid node.",
                  );
                return e.oldPrevious.get(t);
              }),
              (t.prototype.getOldAttribute = function (t, e) {
                var n = this.treeChanges.get(t);
                if (!n || !n.attributes)
                  throw Error("getOldAttribute requested on invalid node.");
                if (void 0 === (n = n.getAttributeOldValue(e)))
                  throw Error(
                    "getOldAttribute requested for unchanged attribute name.",
                  );
                return n;
              }),
              (t.prototype.attributeChangedNodes = function (t) {
                if (!this.treeChanges.anyAttributesChanged) return {};
                var e, n;
                if (t) {
                  (e = {}), (n = {});
                  for (var r = 0; r < t.length; r++) {
                    (e[(o = t[r])] = !0), (n[o.toLowerCase()] = o);
                  }
                }
                t = {};
                var i = this.treeChanges.keys();
                for (r = 0; r < i.length; r++) {
                  var o = i[r],
                    a = this.treeChanges.get(o);
                  if (
                    a.attributes &&
                    2 === this.treeChanges.reachabilityChange(o) &&
                    2 === this.matchabilityChange(o)
                  )
                    for (
                      var s = o, c = a.getAttributeNamesMutated(), u = 0;
                      u < c.length;
                      u++
                    )
                      (o = c[u]),
                        (!e || e[o] || (a.isCaseInsensitive && n[o])) &&
                          a.getAttributeOldValue(o) !== s.getAttribute(o) &&
                          (n && a.isCaseInsensitive && (o = n[o]),
                          (t[o] = t[o] || []),
                          t[o].push(s));
                }
                return t;
              }),
              (t.prototype.getOldCharacterData = function (t) {
                if (!(t = this.treeChanges.get(t)) || !t.characterData)
                  throw Error("getOldCharacterData requested on invalid node.");
                return t.characterDataOldValue;
              }),
              (t.prototype.getCharacterDataChanged = function () {
                if (!this.treeChanges.anyCharacterDataChanged) return [];
                for (
                  var t = this.treeChanges.keys(), e = [], n = 0;
                  n < t.length;
                  n++
                ) {
                  var r = t[n];
                  if (2 === this.treeChanges.reachabilityChange(r)) {
                    var i = this.treeChanges.get(r);
                    i.characterData &&
                      r.textContent != i.characterDataOldValue &&
                      e.push(r);
                  }
                }
                return e;
              }),
              (t.prototype.computeMatchabilityChange = function (t, e) {
                this.matchCache || (this.matchCache = []),
                  this.matchCache[t.uid] || (this.matchCache[t.uid] = new r());
                var n = this.matchCache[t.uid],
                  i = n.get(e);
                return (
                  void 0 === i &&
                    ((i = t.matchabilityChange(e, this.treeChanges.get(e))),
                    n.set(e, i)),
                  i
                );
              }),
              (t.prototype.matchabilityChange = function (t) {
                var e = this;
                if (this.characterDataOnly)
                  switch (t.nodeType) {
                    case Node.COMMENT_NODE:
                    case Node.TEXT_NODE:
                      return 2;
                    default:
                      return 0;
                  }
                if (!this.selectors) return 2;
                if (t.nodeType !== Node.ELEMENT_NODE) return 0;
                for (
                  var n = this.selectors.map(function (n) {
                      return e.computeMatchabilityChange(n, t);
                    }),
                    r = 0,
                    i = 0;
                  2 !== r && i < n.length;

                ) {
                  switch (n[i]) {
                    case 2:
                      r = 2;
                      break;
                    case 1:
                      r = 5 === r ? 2 : 1;
                      break;
                    case 5:
                      r = 1 === r ? 2 : 5;
                  }
                  i++;
                }
                return r;
              }),
              (t.prototype.getChildlistChange = function (t) {
                var e = this.childListChangeMap.get(t);
                return (
                  e || ((e = new o()), this.childListChangeMap.set(t, e)), e
                );
              }),
              (t.prototype.processChildlistChanges = function () {
                if (!this.childListChangeMap) {
                  this.childListChangeMap = new r();
                  for (var t = 0; t < this.mutations.length; t++) {
                    var e = this.mutations[t];
                    if (
                      "childList" == e.type &&
                      (2 === this.treeChanges.reachabilityChange(e.target) ||
                        this.calcOldPreviousSibling)
                    ) {
                      for (
                        var n = this.getChildlistChange(e.target),
                          i = e.previousSibling,
                          o = function (t, e) {
                            t &&
                              !n.oldPrevious.has(t) &&
                              !n.added.has(t) &&
                              !n.maybeMoved.has(t) &&
                              (!e ||
                                (!n.added.has(e) && !n.maybeMoved.has(e))) &&
                              n.oldPrevious.set(t, e);
                          },
                          a = 0;
                        a < e.removedNodes.length;
                        a++
                      ) {
                        var s = e.removedNodes[a];
                        o(s, i),
                          n.added.has(s)
                            ? n.added.deleteNode(s)
                            : (n.removed.set(s, !0),
                              n.maybeMoved.deleteNode(s)),
                          (i = s);
                      }
                      for (
                        o(e.nextSibling, i), a = 0;
                        a < e.addedNodes.length;
                        a++
                      )
                        (s = e.addedNodes[a]),
                          n.removed.has(s)
                            ? (n.removed.deleteNode(s), n.maybeMoved.set(s, !0))
                            : n.added.set(s, !0);
                    }
                  }
                }
              }),
              (t.prototype.wasReordered = function (t) {
                function e(t) {
                  if (!t || !o.maybeMoved.has(t)) return !1;
                  var n = o.moved.get(t);
                  if (void 0 !== n) return n;
                  if (a.has(t)) n = !0;
                  else {
                    if ((a.set(t, !0), c.has(t))) n = c.get(t);
                    else {
                      for (
                        n = t.previousSibling;
                        n && (o.added.has(n) || e(n));

                      )
                        n = n.previousSibling;
                      c.set(t, n);
                    }
                    n =
                      n !==
                      (function t(n) {
                        var r = s.get(n);
                        if (void 0 !== r) return r;
                        for (
                          r = o.oldPrevious.get(n);
                          r && (o.removed.has(r) || e(r));

                        )
                          r = t(r);
                        return (
                          void 0 === r && (r = n.previousSibling),
                          s.set(n, r),
                          r
                        );
                      })(t);
                  }
                  return (
                    a.has(t)
                      ? (a.deleteNode(t), o.moved.set(t, n))
                      : (n = o.moved.get(t)),
                    n
                  );
                }
                if (!this.treeChanges.anyParentsChanged) return !1;
                this.processChildlistChanges();
                var n = t.parentNode,
                  i = this.treeChanges.get(t);
                i && i.oldParentNode && (n = i.oldParentNode);
                var o = this.childListChangeMap.get(n);
                if (!o) return !1;
                if (o.moved) return o.moved.get(t);
                o.moved = new r();
                var a = new r(),
                  s = new r(),
                  c = new r();
                return o.maybeMoved.keys().forEach(e), o.moved.get(t);
              }),
              t
            );
          })(),
          c = (function () {
            function t(t, e) {
              var n = this;
              if (
                ((this.projection = t),
                (this.added = []),
                (this.removed = []),
                (this.reparented =
                  e.all || e.element || e.characterData ? [] : void 0),
                (this.reordered = e.all ? [] : void 0),
                t.getChanged(this, e.elementFilter, e.characterData),
                e.all || e.attribute || e.attributeList)
              ) {
                var r = t.attributeChangedNodes(
                  e.attribute ? [e.attribute] : e.attributeList,
                );
                e.attribute
                  ? (this.valueChanged = r[e.attribute] || [])
                  : ((this.attributeChanged = r),
                    e.attributeList &&
                      e.attributeList.forEach(function (t) {
                        n.attributeChanged.hasOwnProperty(t) ||
                          (n.attributeChanged[t] = []);
                      }));
              }
              (e.all || e.characterData) &&
                ((r = t.getCharacterDataChanged()),
                e.characterData
                  ? (this.valueChanged = r)
                  : (this.characterDataChanged = r)),
                this.reordered &&
                  (this.getOldPreviousSibling =
                    t.getOldPreviousSibling.bind(t));
            }
            return (
              (t.prototype.getOldParentNode = function (t) {
                return this.projection.getOldParentNode(t);
              }),
              (t.prototype.getOldAttribute = function (t, e) {
                return this.projection.getOldAttribute(t, e);
              }),
              (t.prototype.getOldCharacterData = function (t) {
                return this.projection.getOldCharacterData(t);
              }),
              (t.prototype.getOldPreviousSibling = function (t) {
                return this.projection.getOldPreviousSibling(t);
              }),
              t
            );
          })(),
          u = /[a-zA-Z_]+/,
          l = /[a-zA-Z0-9_\-]+/;
        function h(t) {
          return '"' + t.replace(/"/, '\\"') + '"';
        }
        var d = (function () {
            function t() {}
            return (
              (t.prototype.matches = function (t) {
                if (null === t) return !1;
                if (void 0 === this.attrValue) return !0;
                if (!this.contains) return this.attrValue == t;
                t = t.split(" ");
                for (var e = 0; e < t.length; e++)
                  if (this.attrValue === t[e]) return !0;
                return !1;
              }),
              (t.prototype.toString = function () {
                return "class" === this.attrName && this.contains
                  ? "." + this.attrValue
                  : "id" !== this.attrName || this.contains
                  ? this.contains
                    ? "[" + this.attrName + "~=" + h(this.attrValue) + "]"
                    : "attrValue" in this
                    ? "[" + this.attrName + "=" + h(this.attrValue) + "]"
                    : "[" + this.attrName + "]"
                  : "#" + this.attrValue;
              }),
              t
            );
          })(),
          f = (function () {
            function t() {
              (this.uid = t.nextUid++), (this.qualifiers = []);
            }
            var e;
            return (
              Object.defineProperty(t.prototype, "caseInsensitiveTagName", {
                get: function () {
                  return this.tagName.toUpperCase();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "selectorString", {
                get: function () {
                  return this.tagName + this.qualifiers.join("");
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isMatching = function (e) {
                return e[t.matchesSelector](this.selectorString);
              }),
              (t.prototype.wasMatching = function (t, e, n) {
                if (!e || !e.attributes) return n;
                if (
                  "*" !==
                    (r = e.isCaseInsensitive
                      ? this.caseInsensitiveTagName
                      : this.tagName) &&
                  r !== t.tagName
                )
                  return !1;
                for (
                  var r = [], i = !1, o = 0;
                  o < this.qualifiers.length;
                  o++
                ) {
                  var a = this.qualifiers[o],
                    s = e.getAttributeOldValue(a.attrName);
                  r.push(s), (i = i || void 0 !== s);
                }
                if (!i) return n;
                for (o = 0; o < this.qualifiers.length; o++)
                  if (
                    ((a = this.qualifiers[o]),
                    void 0 === (s = r[o]) && (s = t.getAttribute(a.attrName)),
                    !a.matches(s))
                  )
                    return !1;
                return !0;
              }),
              (t.prototype.matchabilityChange = function (t, e) {
                var n = this.isMatching(t);
                return n
                  ? this.wasMatching(t, e, n)
                    ? 2
                    : 1
                  : this.wasMatching(t, e, n)
                  ? 5
                  : 0;
              }),
              (t.parseSelectors = function (e) {
                function n() {
                  i && (o && (i.qualifiers.push(o), (o = void 0)), s.push(i)),
                    (i = new t());
                }
                function r() {
                  o && i.qualifiers.push(o), (o = new d());
                }
                for (
                  var i, o, a, s = [], c = /\s/, h = 1, f = 0;
                  f < e.length;

                ) {
                  var g = e[f++];
                  switch (h) {
                    case 1:
                      if (g.match(u)) {
                        n(), (i.tagName = g), (h = 2);
                        break;
                      }
                      if ("*" == g) {
                        n(), (i.tagName = "*"), (h = 3);
                        break;
                      }
                      if ("." == g) {
                        n(),
                          r(),
                          (i.tagName = "*"),
                          (o.attrName = "class"),
                          (o.contains = !0),
                          (h = 4);
                        break;
                      }
                      if ("#" == g) {
                        n(),
                          r(),
                          (i.tagName = "*"),
                          (o.attrName = "id"),
                          (h = 4);
                        break;
                      }
                      if ("[" == g) {
                        n(), r(), (i.tagName = "*"), (o.attrName = ""), (h = 6);
                        break;
                      }
                      if (g.match(c)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 2:
                      if (g.match(l)) {
                        i.tagName += g;
                        break;
                      }
                      if ("." == g) {
                        r(), (o.attrName = "class"), (o.contains = !0), (h = 4);
                        break;
                      }
                      if ("#" == g) {
                        r(), (o.attrName = "id"), (h = 4);
                        break;
                      }
                      if ("[" == g) {
                        r(), (o.attrName = ""), (h = 6);
                        break;
                      }
                      if (g.match(c)) {
                        h = 14;
                        break;
                      }
                      if ("," == g) {
                        h = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 3:
                      if ("." == g) {
                        r(), (o.attrName = "class"), (o.contains = !0), (h = 4);
                        break;
                      }
                      if ("#" == g) {
                        r(), (o.attrName = "id"), (h = 4);
                        break;
                      }
                      if ("[" == g) {
                        r(), (o.attrName = ""), (h = 6);
                        break;
                      }
                      if (g.match(c)) {
                        h = 14;
                        break;
                      }
                      if ("," == g) {
                        h = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 4:
                      if (g.match(u)) {
                        (o.attrValue = g), (h = 5);
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 5:
                      if (g.match(l)) {
                        o.attrValue += g;
                        break;
                      }
                      if ("." == g) {
                        r(), (o.attrName = "class"), (o.contains = !0), (h = 4);
                        break;
                      }
                      if ("#" == g) {
                        r(), (o.attrName = "id"), (h = 4);
                        break;
                      }
                      if ("[" == g) {
                        r(), (h = 6);
                        break;
                      }
                      if (g.match(c)) {
                        h = 14;
                        break;
                      }
                      if ("," == g) {
                        h = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 6:
                      if (g.match(u)) {
                        (o.attrName = g), (h = 7);
                        break;
                      }
                      if (g.match(c)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 7:
                      if (g.match(l)) {
                        o.attrName += g;
                        break;
                      }
                      if (g.match(c)) {
                        h = 8;
                        break;
                      }
                      if ("~" == g) {
                        (o.contains = !0), (h = 9);
                        break;
                      }
                      if ("=" == g) {
                        (o.attrValue = ""), (h = 11);
                        break;
                      }
                      if ("]" == g) {
                        h = 3;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 8:
                      if ("~" == g) {
                        (o.contains = !0), (h = 9);
                        break;
                      }
                      if ("=" == g) {
                        (o.attrValue = ""), (h = 11);
                        break;
                      }
                      if ("]" == g) {
                        h = 3;
                        break;
                      }
                      if (g.match(c)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 9:
                      if ("=" == g) {
                        (o.attrValue = ""), (h = 11);
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                    case 10:
                      if ("]" == g) {
                        h = 3;
                        break;
                      }
                      if (g.match(c)) break;
                      throw Error("Invalid or unsupported selector syntax.");
                    case 11:
                      if (g.match(c)) break;
                      if ('"' == g || "'" == g) {
                        (a = g), (h = 13);
                        break;
                      }
                      (o.attrValue += g), (h = 12);
                      break;
                    case 12:
                      if (g.match(c)) {
                        h = 10;
                        break;
                      }
                      if ("]" == g) {
                        h = 3;
                        break;
                      }
                      if ("'" == g || '"' == g)
                        throw Error("Invalid or unsupported selector syntax.");
                      o.attrValue += g;
                      break;
                    case 13:
                      if (g == a) {
                        h = 10;
                        break;
                      }
                      o.attrValue += g;
                      break;
                    case 14:
                      if (g.match(c)) break;
                      if ("," == g) {
                        h = 1;
                        break;
                      }
                      throw Error("Invalid or unsupported selector syntax.");
                  }
                }
                switch (h) {
                  case 1:
                  case 2:
                  case 3:
                  case 5:
                  case 14:
                    n();
                    break;
                  default:
                    throw Error("Invalid or unsupported selector syntax.");
                }
                if (!s.length)
                  throw Error("Invalid or unsupported selector syntax.");
                return s;
              }),
              (t.nextUid = 1),
              (t.matchesSelector =
                "function" ==
                typeof (e = document.createElement("div")).webkitMatchesSelector
                  ? "webkitMatchesSelector"
                  : "function" == typeof e.mozMatchesSelector
                  ? "mozMatchesSelector"
                  : "function" == typeof e.msMatchesSelector
                  ? "msMatchesSelector"
                  : "matchesSelector"),
              t
            );
          })(),
          g = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;
        function p(t) {
          if ("string" != typeof t)
            throw Error(
              "Invalid request option. attribute must be a non-zero length string.",
            );
          if (!(t = t.trim()))
            throw Error(
              "Invalid request option. attribute must be a non-zero length string.",
            );
          if (!t.match(g))
            throw Error("Invalid request option. invalid attribute name: " + t);
          return t;
        }
        function v(t) {
          if (!t.trim().length)
            throw Error(
              "Invalid request option: elementAttributes must contain at least one attribute.",
            );
          var e = {},
            n = {};
          t = t.split(/\s+/);
          for (var r = 0; r < t.length; r++) {
            if ((i = t[r])) {
              var i,
                o = (i = p(i)).toLowerCase();
              if (e[o])
                throw Error(
                  "Invalid request option: observing multiple case variations of the same attribute is not supported.",
                );
              (n[i] = !0), (e[o] = !0);
            }
          }
          return Object.keys(n);
        }
        hj.MutationSummary = (function () {
          function e(n) {
            var r = this;
            (this.connected = !1),
              (this.options = e.validateOptions(n)),
              (this.observerOptions = e.createObserverOptions(
                this.options.queries,
              )),
              (this.root = this.options.rootNode),
              (this.callback = this.options.callback),
              (this.elementFilter = Array.prototype.concat.apply(
                [],
                this.options.queries.map(function (t) {
                  return t.elementFilter ? t.elementFilter : [];
                }),
              )),
              this.elementFilter.length || (this.elementFilter = void 0),
              (this.calcReordered = this.options.queries.some(function (t) {
                return t.all;
              })),
              (this.queryValidators = []),
              e.createQueryValidator &&
                (this.queryValidators = this.options.queries.map(function (t) {
                  return e.createQueryValidator(r.root, t);
                })),
              (this.observer = new t(function (t) {
                r.observerCallback(t);
              })),
              this.reconnect();
          }
          return (
            (e.createObserverOptions = function (t) {
              function e(t) {
                (r.attributes && !n) ||
                  ((r.attributes = !0),
                  (r.attributeOldValue = !0),
                  t
                    ? ((n = n || {}),
                      t.forEach(function (t) {
                        (n[t] = !0), (n[t.toLowerCase()] = !0);
                      }))
                    : (n = void 0));
              }
              var n,
                r = { childList: !0, subtree: !0 };
              return (
                t.forEach(function (t) {
                  t.characterData
                    ? ((r.characterData = !0), (r.characterDataOldValue = !0))
                    : t.all
                    ? (e(),
                      (r.characterData = !0),
                      (r.characterDataOldValue = !0))
                    : t.attribute
                    ? e([t.attribute.trim()])
                    : (t = (function (t) {
                        var e = {};
                        return (
                          t.forEach(function (t) {
                            t.qualifiers.forEach(function (t) {
                              e[t.attrName] = !0;
                            });
                          }),
                          Object.keys(e)
                        );
                      })(t.elementFilter).concat(t.attributeList || []))
                        .length && e(t);
                }),
                n && (r.attributeFilter = Object.keys(n)),
                r
              );
            }),
            (e.validateOptions = function (t) {
              for (var n in t)
                if (!(n in e.optionKeys)) throw Error("Invalid option: " + n);
              if ("function" != typeof t.callback)
                throw Error(
                  "Invalid options: callback is required and must be a function",
                );
              if (!t.queries || !t.queries.length)
                throw Error(
                  "Invalid options: queries must contain at least one query request object.",
                );
              n = {
                callback: t.callback,
                rootNode: t.rootNode || document,
                observeOwnChanges: !!t.observeOwnChanges,
                oldPreviousSibling: !!t.oldPreviousSibling,
                queries: [],
              };
              for (var r = 0; r < t.queries.length; r++) {
                var i = t.queries[r];
                if (i.all) {
                  if (1 < Object.keys(i).length)
                    throw Error("Invalid request option. all has no options.");
                  n.queries.push({ all: !0 });
                } else if ("attribute" in i) {
                  if (
                    (((a = { attribute: p(i.attribute) }).elementFilter =
                      f.parseSelectors("*[" + a.attribute + "]")),
                    1 < Object.keys(i).length)
                  )
                    throw Error(
                      "Invalid request option. attribute has no options.",
                    );
                  n.queries.push(a);
                } else if ("element" in i) {
                  var o = Object.keys(i).length,
                    a = {
                      element: i.element,
                      elementFilter: f.parseSelectors(i.element),
                    };
                  if (
                    (i.hasOwnProperty("elementAttributes") &&
                      ((a.attributeList = v(i.elementAttributes)), o--),
                    1 < o)
                  )
                    throw Error(
                      "Invalid request option. element only allows elementAttributes option.",
                    );
                  n.queries.push(a);
                } else {
                  if (!i.characterData)
                    throw Error(
                      "Invalid request option. Unknown query request.",
                    );
                  if (1 < Object.keys(i).length)
                    throw Error(
                      "Invalid request option. characterData has no options.",
                    );
                  n.queries.push({ characterData: !0 });
                }
              }
              return n;
            }),
            (e.prototype.createSummaries = function (t) {
              if (!t || !t.length) return [];
              t = new s(
                this.root,
                t,
                this.elementFilter,
                this.calcReordered,
                this.options.oldPreviousSibling,
              );
              for (var e = [], n = 0; n < this.options.queries.length; n++)
                e.push(new c(t, this.options.queries[n]));
              return e;
            }),
            (e.prototype.checkpointQueryValidators = function () {
              this.queryValidators.forEach(function (t) {
                t && t.recordPreviousState();
              });
            }),
            (e.prototype.runQueryValidators = function (t) {
              this.queryValidators.forEach(function (e, n) {
                e && e.validate(t[n]);
              });
            }),
            (e.prototype.changesToReport = function (t) {
              return t.some(function (t) {
                return !!(
                  "added removed reordered reparented valueChanged characterDataChanged"
                    .split(" ")
                    .some(function (e) {
                      return t[e] && t[e].length;
                    }) ||
                  (t.attributeChanged &&
                    Object.keys(t.attributeChanged).some(function (e) {
                      return !!t.attributeChanged[e].length;
                    }))
                );
              });
            }),
            (e.prototype.observerCallback = function (t) {
              this.options.observeOwnChanges || this.observer.disconnect(),
                (t = this.createSummaries(t)),
                this.runQueryValidators(t),
                this.options.observeOwnChanges &&
                  this.checkpointQueryValidators(),
                this.changesToReport(t) && this.callback(t),
                !this.options.observeOwnChanges &&
                  this.connected &&
                  (this.checkpointQueryValidators(),
                  this.observer.observe(this.root, this.observerOptions));
            }),
            (e.prototype.reconnect = function () {
              if (this.connected) throw Error("Already connected");
              this.observer.observe(this.root, this.observerOptions),
                (this.connected = !0),
                this.checkpointQueryValidators();
            }),
            (e.prototype.takeSummaries = function () {
              if (!this.connected) throw Error("Not connected");
              var t = this.createSummaries(this.observer.takeRecords());
              return this.changesToReport(t) ? t : void 0;
            }),
            (e.prototype.disconnect = function () {
              var t = this.takeSummaries();
              return this.observer.disconnect(), (this.connected = !1), t;
            }),
            (e.NodeMap = r),
            (e.parseElementFilter = f.parseSelectors),
            (e.optionKeys = {
              callback: !0,
              queries: !0,
              rootNode: !0,
              oldPreviousSibling: !0,
              observeOwnChanges: !0,
            }),
            e
          );
        })();
      }
      var m;
    }, "mutation-summary")();
  },
  function (t, e) {
    hj.tryCatch(function () {
      hj.xcom = hj.tryCatch(function () {
        var t,
          e = {},
          n = [],
          r = 1,
          i = 2,
          o = 10,
          a = r,
          s = "https://" + hj.insightsHost + "/x",
          c = hj.tryCatch(function () {
            if (a == r) {
              window.addEventListener
                ? window.addEventListener("message", u, !1)
                : window.attachEvent("onmessage", u),
                (a = i);
              var e = document.createElement("iframe");
              (e.style.position = "fixed"),
                (e.style.top = -100),
                (e.style.left = -100),
                (e.width = 1),
                (e.height = 1),
                (e.id = "_hjXcomProxyFrame"),
                (e.src = s),
                document.body.appendChild(e),
                (t = document.getElementById("_hjXcomProxyFrame"));
            }
          }, "data");
        e.send = hj.tryCatch(function (e, r) {
          a == o
            ? t.contentWindow.postMessage({ eventId: e, data: r }, "*")
            : (n.push({ eventId: e, data: r }), c());
        });
        var u = function (t) {
          "knockknock" == t.data.eventId &&
            ((a = o),
            n.forEach(function (t) {
              e.send(t.eventId, t.data);
            }),
            (n = []));
        };
        return e;
      }, "xcom")();
    }, "xcom")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(54),
      i = n(5);
    (hj.visitData = hj.tryCatch(function () {
      var t = {};
      return (
        (t.getPageVisitInfo = hj.tryCatch(function (t, e, n) {
          var r = t.get("pageInfo"),
            i = navigator.userAgent,
            o = navigator.language,
            a = {
              script_revision: window.hjBootstrap.revision,
              user_agent: i || "",
              accept_language: o || "",
              page_url: r.url,
              url_hash: r.urlMD5,
              window_width: e.width,
              window_height: e.height,
              site_id: n,
            },
            s = document.referrer;
          return "" !== s && (a.referrer = s), a;
        }, "data")),
        (t.track = hj.tryCatch(function (e) {
          (t.property = hj.property.create()),
            hj.eventStream.setCurrentPageVisitKey(t.property.key),
            (e = e || document.location.href),
            hj.log.debug("Tracking: ".concat(e), "visitData"),
            t.property.set("pageInfo", {
              url: e,
              urlMD5: hj.md5(hj.b64EncodeUnicode(e)),
            }),
            hj.globals.get("userId") || Object(r.c)();
        }, "data")),
        (t.trackView = hj.tryCatch(function () {
          if (
            null ===
            i.a.items.ABSOLUTE_SESSION_IN_PROGRESS.get({ resetExpiry: !0 })
          ) {
            hj.log.debug(
              "viewcounter: Determining if we should track this session...",
              "visitData",
            );
            var t = Math.random(),
              e =
                hj.viewCounterEndpoint &&
                hj.settings.site_id &&
                t <= hj.viewCounterHitPercentage,
              n = "s=".concat(hj.viewCounterHitPercentage, "&r=").concat(t),
              r = ""
                .concat(hj.viewCounterEndpoint, "/")
                .concat(hj.settings.site_id, "?")
                .concat(n);
            e
              ? (i.a.items.ABSOLUTE_SESSION_IN_PROGRESS.set(1, !0),
                hj.ajax.get(r),
                hj.log.debug(
                  "viewcounter: This session was tracked.",
                  "visitData",
                  {
                    mathRandomResult: t,
                    viewCounterHitPercentage: hj.viewCounterHitPercentage,
                  },
                ))
              : (i.a.items.ABSOLUTE_SESSION_IN_PROGRESS.set(0, !0),
                hj.log.debug(
                  "viewcounter: This session will NOT be tracked.",
                  "visitData",
                  {
                    mathRandomResult: t,
                    viewCounterHitPercentage: hj.viewCounterHitPercentage,
                  },
                ));
          } else
            hj.log.debug(
              "viewcounter: Session already checked. Skipping shouldTrackSession check.",
              "visitData",
            );
        }, "data")),
        t
      );
    }, "data")()),
      (hj.pageVisit = hj.visitData);
  },
  function (t, e) {
    hj.event = (function () {
      var t = {},
        e = {},
        n = {};
      function r(t, e, n) {
        t[e] || (t[e] = []), t[e].push(n);
      }
      return (
        (t.listen = hj.tryCatch(function (i, o) {
          r(e, i, o),
            (function (e) {
              n[e] &&
                (n[e].forEach(function (n) {
                  t.signal(e, n);
                }),
                delete n[e]);
            })(i);
        }, "hj.event.listen")),
        (t.removeListener = hj.tryCatch(function (t, n) {
          var r = e[t];
          if (r) {
            var i = r.indexOf(n);
            -1 !== i && r.splice(i, 1);
          }
        }, "hj.event.removeListener")),
        (t.signal = hj.tryCatch(function (t, i, o) {
          e[t]
            ? e[t].forEach(function (t) {
                t(i);
              })
            : o
            ? r(n, t, i)
            : (n[t] = [i]);
        }, "hj.event.signal")),
        (t.clearAllListeners = hj.tryCatch(function () {
          (e = []), (n = []);
        }, "data")),
        t
      );
    })();
  },
  function (t, e) {
    function n(t, e) {
      return (
        s(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(t, e) ||
        o(t, e) ||
        i()
      );
    }
    function r(t) {
      return (
        s(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        o(t) ||
        i()
      );
    }
    function i() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function o(t, e) {
      if (t) {
        if ("string" == typeof t) return a(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === n && t.constructor && (n = t.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(t)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? a(t, e)
            : void 0
        );
      }
    }
    function a(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function s(t) {
      if (Array.isArray(t)) return t;
    }
    hj.tryCatch(function () {
      var t = [],
        e = function (t) {
          return Array.from(t.children).filter(function (t) {
            return t.matches("slot");
          });
        },
        i = function (t) {
          var e;
          return (
            "ShadowRoot" ===
            (null == t || null === (e = t.constructor) || void 0 === e
              ? void 0
              : e.name)
          );
        },
        o = function (t) {
          var e;
          return i(
            null == t || null === (e = t.getRootNode) || void 0 === e
              ? void 0
              : e.call(t),
          );
        },
        a = function (t, n) {
          if (!t || !n) return [];
          var i = [],
            o = [];
          o.push({ host: t, selector: n });
          for (
            var a = function () {
              var t = o.shift(),
                n = t.host,
                a = r(
                  t.selector
                    .replace("hj-shadow:", "")
                    .replace("hj-lwc:", "")
                    .split(">"),
                ),
                s = a[0],
                c = a.slice(1).join(">");
              e(n)[0] &&
                Array.from(e(n)).forEach(function (t) {
                  Array.from(t.assignedElements({ flatten: !0 })).forEach(
                    function (t) {
                      t.matches(s) &&
                        (c
                          ? o.push({ host: t.shadowRoot || t, selector: c })
                          : i.push(t));
                    },
                  );
                }),
                Array.from(n.children)
                  .filter(function (t) {
                    return t.matches(s);
                  })
                  .forEach(function (t) {
                    c
                      ? o.push({ host: t.shadowRoot || t, selector: c })
                      : i.push(t);
                  });
            };
            o.length > 0;

          )
            a();
          return i;
        },
        s = function (t) {
          var e, n;
          if (void 0 !== t.attr("data-hj-ignore-attributes")) return !0;
          if (document.body.hasAttribute("data-hj-ignore-attributes"))
            return !0;
          for (
            var r =
              null !==
                (e =
                  null === (n = t.get(0)) || void 0 === n
                    ? void 0
                    : n.parentElement) && void 0 !== e
                ? e
                : null;
            null !== r && r !== document.body;

          ) {
            if (r.hasAttribute("data-hj-ignore-attributes")) return !0;
            r = r.parentElement;
          }
          return !1;
        };
      function c(t, e) {
        var r =
            /(#|@|&|~|=|<|>|`|'|:|"|!|;|,|\?|%|\}|\{|\.|\*|\+|\||\[|\]|\(|\)|\/|\^|\$)/g,
          c =
            /(\s|#|@|&|~|=|<|>|`|'|:|"|!|;|,|\?|%|\}|\{|\.|\*|\+|\||\[|\]|\(|\)|\/|\^|\$)/g,
          u = e.ignoreUUIDClasses
            ? /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/
            : {
                test: function () {
                  return !1;
                },
              },
          l = hj.tryCatch(function (t) {
            var e,
              r,
              i,
              c,
              u,
              l,
              g,
              p,
              v,
              m = function (t, e) {
                var r, i;
                if (
                  ((g = hj.hq(e)),
                  (null == e || null === (r = e.includes) || void 0 === r
                    ? void 0
                    : r.call(e, "hj-shadow:")) ||
                    (null == e || null === (i = e.includes) || void 0 === i
                      ? void 0
                      : i.call(e, "hj-lwc:")))
                ) {
                  var o = new RegExp(
                      "^(.*?("
                        .concat("hj-shadow:", "|")
                        .concat("hj-lwc:", ").*?)>(.*)$"),
                      "i",
                    ),
                    s = n(e.match(o), 4),
                    c = s[1],
                    l = s[3];
                  hj.hq.each(
                    hj.hq(c.replace("hj-shadow:", "").replace("hj-lwc:", "")),
                    function (t, e) {
                      g = Array.from(g).concat(a(e.shadowRoot, l));
                    },
                  );
                }
                for (u = 0; u < g.length; u++) if (g[u] === t[0]) return u;
                return 0;
              };
            if (!s(t) && !o(t.get(0))) {
              if (((p = f(t.attr("id"))), (v = d(t.attr("name"))), p))
                return "0:#" + p;
              if (v) return m(t, (l = '*[name="' + v + '"]')) + ":" + l;
            }
            return (
              m(t, (l = h(t))) +
              ":" +
              ((
                null === (e = l) ||
                void 0 === e ||
                null === (r = e.includes) ||
                void 0 === r
                  ? void 0
                  : r.call(e, "hj-lwc:")
              )
                ? null === (i = l) ||
                  void 0 === i ||
                  null === (c = i.replaceAll) ||
                  void 0 === c
                  ? void 0
                  : c.call(i, "hj-lwc:", "")
                : l)
            );
          }, "common"),
          h = hj.tryCatch(function (t, n) {
            var r = t.get(0);
            if (!r) return n;
            if ((void 0 === n && (n = ""), t.is("html"))) return "html" + n;
            var a = y(r.nodeName.toLowerCase());
            if (
              (r.shadowRoot &&
                n &&
                (a = (function (t) {
                  return !!t.shadowRoot && !i(t.shadowRoot);
                })(r)
                  ? "".concat("hj-lwc:").concat(a)
                  : "".concat("hj-shadow:").concat(a)),
              !s(t) && !o(r))
            ) {
              var c = f(t.attr("id"));
              if (c) return a + "#" + c + n;
              if ("body" !== a || !e.ignoreBodyClasses) {
                var u = m(t.attr("class"));
                u && (a += u);
              }
            }
            if (null !== r.assignedSlot) {
              for (var l = r.assignedSlot; null !== l.assignedSlot; )
                l = l.assignedSlot;
              return h(hj.hq(l).parent(), ">" + a + n);
            }
            return h(t.parent(), ">" + a + n);
          }, "common"),
          d = function (t) {
            var n = [];
            return (
              !(
                void 0 === (t = hj.hq.trim((t || "").replace(/\s\s+/g, " "))) ||
                "" === t ||
                t.indexOf("yui_") > -1
              ) &&
              ((t = t.replace(r, "\\$1")).split(/\s/g).forEach(function (t) {
                !(
                  n.length < e.maxClassesAllowed || 0 === e.maxClassesAllowed
                ) ||
                  hj.hq.inArray(t, e.ignoreClassList) ||
                  u.test(t) ||
                  "" === t ||
                  n.push(t);
              }),
              n.join(" "))
            );
          },
          f = function (t) {
            return (
              !(
                void 0 === (t = hj.hq.trim((t || "").replace(/\s\s+/g, " "))) ||
                "" === t ||
                t.indexOf("yui_") > -1 ||
                v(t)
              ) && ((t = t.replace(c, "\\$1")), (t = p(t)), (t = g(t)))
            );
          },
          g = function (t) {
            if (!t) return t;
            var e = t.charAt(0);
            return /\d/.test(e) ? "\\3" + e + " " + t.slice(1) : t;
          },
          p = function (t) {
            if (!t || "-" !== t.charAt(0)) return t;
            var e = t.charAt(0),
              n = t.charAt(1);
            return /\d/.test(n) ? e + "\\3" + n + " " + t.slice(2) : t;
          },
          v = function (t) {
            return 1 === t.length && "-" === t;
          },
          m = function (t) {
            var n = [];
            return (
              !(
                void 0 === (t = hj.hq.trim((t || "").replace(/\s\s+/g, " "))) ||
                "" === t ||
                t.indexOf("yui_") > -1 ||
                v(t)
              ) &&
              ((t = t.replace(r, "\\$1")).split(/\s/g).forEach(function (t) {
                !(
                  n.length < e.maxClassesAllowed || 0 === e.maxClassesAllowed
                ) ||
                  hj.hq.inArray(t, e.ignoreClassList) ||
                  u.test(t) ||
                  "" === t ||
                  n.push(g(p(t)));
              }),
              n.length ? "." + n.join(".") : "")
            );
          },
          y = function (t) {
            return t.replace(e.disallowedTagNameCharactersRE, "");
          };
        return l(t);
      }
      hj.selector = function (e) {
        var n = {
          2: {
            ignoreClassList: [
              "over",
              "hover",
              "active",
              "selected",
              "scrolled",
            ],
            ignoreBodyClasses: !0,
            ignoreUUIDClasses: !0,
            maxClassesAllowed: 5,
            disallowedTagNameCharactersRE: /[^a-zA-Z0-9-_]/g,
          },
        };
        return (
          t[(e = !e || e < 2 ? 2 : e)] ||
            (t[e] = {
              get: function (t) {
                return c(t, n[e]);
              },
            }),
          t[e]
        );
      };
    })();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(49),
      i = n(111);
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Command",
        (function () {
          var t = {},
            e = {},
            n = window.hj.q,
            a = ["ready", "stateChange", "trigger", "session_event"],
            s = !1;
          function c() {
            var t = Array.prototype.slice.call(n.shift()),
              r = e[t[0]],
              i = t.slice(1);
            hj.log.debug(
              "Processing command: " +
                t[0] +
                " " +
                i
                  .map(function (t) {
                    return ("object" !== o(t) && "function" != typeof t) ||
                      null === t
                      ? t
                      : JSON.stringify(t);
                  })
                  .join(", "),
              "command",
            ),
              hj.hq.isFunction(r)
                ? !(function (t) {
                    return !hj.optOut || a.indexOf(t) >= 0;
                  })(t[0])
                  ? hj.log.debug(
                      'Command "' + t[0] + '" blocked due to opt-out',
                      "command",
                    )
                  : hj.tryCatch(r, "command")(i)
                : hj.log.debug('Unknown command: "' + t[0] + '"', "command"),
              n.length > 0 && hj.tryCatch(c)();
          }
          function u(t) {
            t[0] && hj.event.signal("trigger:" + t[0]);
          }
          function l(t) {
            if (t[0] && Array.isArray(t[0])) {
              var e = hj.privacy.getTagsWithoutPII(t[0]);
              hj.behaviorData.tagRecording(e);
            } else
              hj.log.error(
                "tagRecording was called with an invalid argument. Please provide an array of tags. For example: hj('tagRecording', ['tag1', 'tag2']).\n\nRead more here: https://help.hotjar.com/hc/en-us/articles/115011819488-How-to-Tag-your-Hotjar-Recordings",
              );
          }
          return (
            (e.vpv = function () {}),
            (e.stateChange = function (t) {
              var e = window.location.href;
              t && t.length >= 1 && t[0] && (e = hj.url.getUrlFromString(t[0])),
                hj.log.debug('Changing state to URL "' + e + '"', "command"),
                hj.currentUrl && hj.currentUrl != e && hj._init.reinit(e);
            }),
            (e.tagRecording = function (t) {
              l(t);
            }),
            (e.trigger = function (t) {
              u(t);
            }),
            (e.identify = function (t) {
              if (t[1]) {
                var e = t[0];
                (e =
                  (!e && 0 !== e) || "null" === e || "undefined" === e
                    ? null
                    : String(e)),
                  r.userAttributes.set(e, t[1]);
              } else
                null != t[0] &&
                  "object" === o(t[0]) &&
                  r.userAttributes.set(null, t[0]);
            }),
            (e.event = function (t) {
              u(t), l([[t[0]]]);
            }),
            (e.session_event = function (t) {
              i.sessionEvents.set(t[0]);
            }),
            (e.gaSetTracker = function (t) {
              t[0] &&
                hj.integrations.google_analytics.sendHotjarUserId.setTracker(
                  t[0],
                );
            }),
            (e._xhr = function () {}),
            (e.ready = function (t) {
              t.forEach(function (t) {
                t();
              });
            }),
            (t.run = function () {
              hj.command = this;
            }),
            (t.activate = function () {
              s ||
                ((s = !0),
                Object.defineProperty(n, "push", {
                  writable: !0,
                  value: function () {
                    for (var t = 0; t < arguments.length; t += 1)
                      this[this.length] = arguments[t];
                    return c(), this.length;
                  },
                }),
                n.length > 0 && c());
            }),
            hj.initialVisitDataSent && t.activate(),
            t
          );
        })(),
        !0,
      );
    }, "command")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(118);
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    hj.tryCatch(function () {
      var t = (function () {
          var e = /\S+/g,
            n = /\s?background[^;]+;?\s?/g;
          function r() {
            return Math.random() < 0.5 ? -1 : 1;
          }
          function i(t, e) {
            return (t = t || 16), (e = e || "*"), new Array(t + 1).join(e);
          }
          var o = hj.tryCatch(function (t) {
              var e = {};
              return (
                (t.style && t.style.width) || (e.width = t.offsetWidth + "px"),
                (t.style && t.style.height) ||
                  (e.height = t.offsetHeight + "px"),
                e
              );
            }, "Suppresser.getSuppressedImageSize"),
            a = hj.tryCatch(function (t) {
              return t && t.length
                ? t.replace(e, function (t) {
                    return i(Math.max(1, t.length + r()));
                  })
                : i(16 + r());
            }, "Suppresser.textHandler"),
            s = hj.tryCatch(function (t) {
              return (
                hj.settings.anonymize_emails && (t = t.replace(b, a)),
                hj.settings.anonymize_digits && (t = t.replace(g, a)),
                (t = t.replace(m, function (t) {
                  return t.replace(g, a);
                }))
              );
            }, "Suppresser.textContentHandler"),
            c = hj.tryCatch(function () {
              return i();
            }, "Suppresser.passwordHandler"),
            u = hj.tryCatch(function () {
              return i(16, 1);
            }, "Suppresser.numberHandler"),
            l = hj.tryCatch(function (t) {
              var e = t ? 16 : 10;
              return new Date(2839968e5).toISOString().substring(0, e);
            }, "Suppresser.getLocalDateStr"),
            h = hj.tryCatch(function () {
              return l(!1);
            }, "Suppresser.dateHandler"),
            d = hj.tryCatch(function () {
              return l(!0);
            }, "Suppresser.datetimeHandler"),
            f = hj.tryCatch(function () {
              return "00:00";
            }, "Suppresser.timeHandler"),
            p = hj.tryCatch(function () {
              return "1979-01";
            }, "Suppresser.monthHandler"),
            v = hj.tryCatch(function () {
              return "1979-W1";
            }, "Suppresser.weekHandler"),
            y = hj.tryCatch(function (t) {
              if (t) return t.replace(n, "");
            }, "Suppresser.imageStyleHandler"),
            j = {
              full: a,
              partial: s,
              textContent: s,
              password: c,
              number: u,
              date: h,
              datetime: d,
              "datetime-local": d,
              time: f,
              month: p,
              imgStyle: y,
              week: v,
            };
          return {
            getSuppressedText: function (t, e) {
              return j[t] ? j[t](e) : a(e);
            },
            getSuppressedImageNode: function (e) {
              var n = { src: "", meta: { style: o(e) } },
                r = t.getSuppressedText("imgStyle", e.getAttribute("style"));
              return r && (n.style = r), n;
            },
            textHandler: a,
          };
        })(),
        e = function (t) {
          return t && t.parentNode
            ? "#document-fragment" === t.parentNode.nodeName
              ? t.parentNode.host
              : t.parentNode
            : null;
        },
        n = ["button", "reset", "submit"],
        o = hj.tryCatch(function (t) {
          var e = t.tagName.toLowerCase(),
            r = t.type.toLowerCase();
          return "input" === e && n.indexOf(r) > -1;
        }, "hj.privacy._isAllowlistedInputType"),
        a = ["default-style", "content-type", "refresh"],
        s = function (t) {
          var e = t["http-equiv"] && t["http-equiv"].value;
          return (
            !e ||
            a.some(function (t) {
              return !!e.match(t);
            })
          );
        },
        c = hj.tryCatch(function (t) {
          return (
            hj.settings.recording_capture_keystrokes &&
            ((t.attributes && void 0 !== t.attributes["data-hj-whitelist"]) ||
              (t.className && t.className.indexOf("data-hj-whitelist") > -1) ||
              (t.attributes && void 0 !== t.attributes["data-hj-allow"]) ||
              (t.className && t.className.indexOf("data-hj-allow") > -1))
          );
        }, "hj.privacy._isUserAllowlisted"),
        u = ["password", "email", "hidden"],
        l = hj.tryCatch(function (t) {
          var e = t.tagName.toLowerCase(),
            n = t.type.toLowerCase();
          return "input" === e && u.indexOf(n) > -1;
        }, "hj.privacy._isSupressedInputType"),
        h = [
          "address",
          "address1",
          "address2",
          "addressline1",
          "addressline2",
          "cell",
          "cellphone",
          "dateofbirth",
          "dob",
          "email",
          "familyname",
          "firstname",
          "fullname",
          "lastname",
          "mobile",
          "name",
          "phone",
          "postalcode",
          "postcode",
          "surname",
          "tel",
          "telephone",
          "username",
          "zip",
          "zipcode",
          "nationalinsurancenumber",
          "nin",
          "ppsn",
          "security",
          "securitynum",
          "socialsec",
          "socialsecuritynumber",
          "socsec",
          "ssn",
          "adgangskode",
          "authpw",
          "contrasena",
          "contrasenya",
          "contraseña",
          "contrasinal",
          "cyfrinair",
          "fjalëkalim",
          "focalfaire",
          "geslo",
          "hasło",
          "heslo",
          "jelszó",
          "kennwort",
          "kωδικός",
          "kωδικόςπρόσβασης",
          "lozinka",
          "lykilorð",
          "lösenord",
          "motdepasse",
          "parakalw",
          "parola",
          "paroladordine",
          "parole",
          "parool",
          "pasahitza",
          "pass",
          "passord",
          "password",
          "passwort",
          "pw",
          "pwd",
          "pword",
          "pwrd",
          "salasana",
          "sapwd",
          "senha",
          "sifre",
          "slaptažodis",
          "userpw",
          "userpwd",
          "wachtwoord",
          "лозинка",
          "парола",
          "пароль",
          "פּאַראָל",
          "كلمهالسر",
          "पासवर्ड",
          "パスワード",
          "密码",
          "密碼",
          "암호",
          "cc",
          "cccsc",
          "cccvc",
          "cccvv",
          "ccexp",
          "ccexpiry",
          "ccexpmonth",
          "ccexpyear",
          "ccname",
          "ccnum",
          "ccnumber",
          "cctype",
          "creditcard",
          "csc",
          "cvc",
          "cvv",
          "exp",
          "accountnum",
          "accountnumber",
          "bic",
          "iban",
          "ibanaccountnum",
          "ibanaccountnumber",
          "pin",
          "pinno",
          "pinnum",
          "secq",
          "secret",
          "secretq",
          "secretquestion",
          "securityq",
          "securityquestion",
          "sortcode",
          "swift",
        ],
        d = hj.tryCatch(function (t) {
          return [t.name, t.id]
            .map(function (t) {
              return t.replace(/[\s_-]+/g, "").toLocaleLowerCase();
            })
            .some(function (t) {
              return h.indexOf(t) > -1;
            });
        }, "hj.privacy._hasSuppressedNameOrId"),
        f = /\d+/,
        g = new RegExp(f.source, "g"),
        p = hj.tryCatch(function (t) {
          return f.test(t);
        }, "hj.privacy._hasDigitSequence"),
        v = /([+(]{0,2}\d[-_ ()/]{0,4}){9,}/,
        m = new RegExp(v.source, "g"),
        y = hj.tryCatch(function (t) {
          return v.test(t);
        }, "hj.privacy._hasCCNumOrSSN"),
        j = /[^@\s]+@[^@\s]+\.[^@\s]+/,
        b = new RegExp(j.source, "g"),
        w = hj.tryCatch(function (t) {
          return t.indexOf("@") > -1 && j.test(t);
        }, "hj.privacy._hasEmail"),
        S = /(?:\d{1,3}\.){3}\d{1,3}/,
        _ = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/,
        E = hj.tryCatch(function (t) {
          return S.test(t) || _.test(t);
        }, "hj.privacy._hasIPAddress"),
        C = [
          function (t) {
            return !!hj.settings.anonymize_digits && p(t);
          },
          function (t) {
            return !hj.settings.anonymize_digits && y(t);
          },
          function (t) {
            return (
              !!hj.settings.anonymize_emails && "string" == typeof t && w(t)
            );
          },
        ],
        O = ["style", "script"],
        I = hj.tryCatch(function (t) {
          if (t && t.tagName) {
            var e = t.tagName.toLowerCase();
            return O.indexOf(e) > -1;
          }
        }, "hj.privacy._isAllowlistedElement"),
        N = function (t) {
          if (t && "string" == typeof t)
            return Boolean(
              t.match(
                /^\s*data:(image\/[a-z]+|application\/octet-stream);base64,([A-Za-z0-9+/=])+\s*$/,
              ),
            );
        },
        T = hj.tryCatch(function (t, e) {
          return (
            (!e || !I(e)) &&
            C.some(function (e) {
              return e(t);
            })
          );
        }, "hj.privacy._shouldSuppressTextContent"),
        k = hj.tryCatch(function (t) {
          return t.value || t.textContent;
        }),
        A = [
          l,
          d,
          function (t) {
            return y(k(t));
          },
          function (t) {
            return w(k(t));
          },
        ],
        R = hj.tryCatch(function (t) {
          return A.some(function (e) {
            return e(t);
          });
        }, "hj.privacy._shouldSuppressInputOrTextarea"),
        x = hj.tryCatch(function (t) {
          return (
            ("object" === i(t.attributes) &&
              (void 0 !== t.attributes["data-hj-suppress"] ||
                void 0 !== t.attributes["data-hj-masked"])) ||
            ("string" == typeof t.className &&
              t.className &&
              t.className.indexOf("data-hj-suppress") > -1)
          );
        }, "hj.privacy._isExplicitlySuppressed"),
        D = hj.tryCatch(function (t) {
          var e = Object.prototype.toString.call(t);
          return (
            -1 !== ["[object HTMLDocument]", "[object Document]"].indexOf(e)
          );
        }, "hj.privacy._isDocument"),
        P = hj.tryCatch(function (t) {
          for (; t && !D(t); ) {
            if (x(t)) return !0;
            t = e(t);
          }
          return !1;
        }, "hj.privacy._isSelfOrAncestorSuppressed");
      hj.privacy = hj.tryCatch(function () {
        var e = {};
        return (
          (e.isRiskyNotAllowlistedOrSuppressedElement = hj.tryCatch(function (
            t,
            e,
          ) {
            if (void 0 === t || !t || void 0 === t.tagName) return !1;
            if (r.a.get() || hj.settings.suppress_all) return !0;
            if (hj.settings.suppress_text)
              return (
                "IMG" !== t.tagName ||
                !e ||
                ("src" !== e.name &&
                  "style" !== e.name &&
                  "srcset" !== e.name) ||
                P(t)
              );
            var n =
              "TEXTAREA" === t.tagName || ("INPUT" === t.tagName && !o(t));
            return n && c(t) ? R(t) : n || P(t);
          }, "hj.privacy.isRiskyNotAllowlistedOrSuppressedElement")),
          (e.isAttributeSuppressable = hj.tryCatch(function (t, e, n, r) {
            var i = {
              INPUT: { attrs: ["value", "placeholder"] },
              TEXTAREA: { attrs: ["value", "placeholder"] },
              A: {
                attrs: ["href"],
                shouldSuppressAttrValueCheck: function (t) {
                  return !!!t.match(/^data:/);
                },
              },
              OPTION: { attrs: ["label", "value"] },
              PROGRESS: { attrs: ["value"] },
              OPTGROUP: { attrs: ["label"] },
              IMG: { attrs: ["alt"] },
              DIV: { attrs: ["title"] },
              SPAN: { attrs: ["title"] },
              P: { attrs: ["title"] },
              META: function (t, e, n) {
                switch (t) {
                  case "content":
                    return (
                      (!n.name || "viewport" !== n.name.value) &&
                      (!n["http-equiv"] || !s(n))
                    );
                  case "name":
                    return "viewport" !== e;
                  case "http-equiv":
                    return !s(n);
                  case "charset":
                    return !1;
                  default:
                    return !0;
                }
              },
            }[t];
            return (
              void 0 !== i &&
              ("function" == typeof i
                ? i(e, n, r)
                : !(i.attrs.indexOf(e) < 0) &&
                  (void 0 === i.shouldSuppressAttrValueCheck ||
                    i.shouldSuppressAttrValueCheck(n)))
            );
          }, "hj.privacy.isAttributeSuppressable")),
          (e.hasPotentialPIIData = hj.tryCatch(function (t, e) {
            return (e = D(e) ? null : e), T(t, e);
          }, "hj.privacy.hasPotentialPIIData")),
          (e.getSuppressedText = hj.tryCatch(function (e, n) {
            return t.getSuppressedText(e, n);
          }, "hj.privacy.getSuppressedText")),
          (e.getSuppressedTextNode = hj.tryCatch(function (n, r) {
            var i = hj.metrics.time(),
              o = n.parentNode || null,
              a =
                (r = r || e.isRiskyNotAllowlistedOrSuppressedElement(o)) ||
                (o && "textarea" === o.type)
                  ? "full"
                  : "partial",
              s = (r =
                !I(o) &&
                !N(n.textContent) &&
                (r || e.hasPotentialPIIData(n.textContent, o)))
                ? t.getSuppressedText(a, n.textContent)
                : n.textContent;
            return (
              hj.metrics.timeEnd("task-execution-time", {
                tag: { task: "node-suppression" },
                incr: { start: i },
              }),
              { content: s, shouldSuppressNode: r }
            );
          })),
          (e.getSuppressedNodeAttribute = hj.tryCatch(function (n, r, i) {
            var o = r.value,
              a = r.name;
            if ("data-hj-suppressed" !== a)
              return (
                "IMG" !== n.tagName ||
                  ("src" !== a && "srcset" !== a && "style" !== a) ||
                  ((i = e.isRiskyNotAllowlistedOrSuppressedElement(n, r)),
                  e.isRiskyNotAllowlistedOrSuppressedElement(n, r) &&
                    ((a = "data-hj-suppressed"),
                    (o = t.getSuppressedImageNode(n)))),
                !N(o) &&
                  e.isAttributeSuppressable(n.tagName, a, o, n.attributes) &&
                  ((i = i || e.isRiskyNotAllowlistedOrSuppressedElement(n)) ||
                  "META" === n.tagName
                    ? (o = t.getSuppressedText("full", o))
                    : e.hasPotentialPIIData(o) &&
                      (o = t.getSuppressedText("partial", o))),
                { name: a, value: o, shouldSuppressNode: i }
              );
          })),
          (e.getSuppressedNode = hj.tryCatch(function (t, n) {
            for (
              var r = hj.metrics.time(), i = {}, o = n, a = 0;
              a < t.attributes.length;
              a++
            ) {
              var s = t.attributes[a],
                c = e.getSuppressedNodeAttribute(t, s, n);
              c && ((i[c.name] = c.value), (o = o || c.shouldSuppressNode));
            }
            return (
              hj.metrics.timeEnd("task-execution-time", {
                tag: { task: "node-suppression" },
                incr: { start: r },
              }),
              {
                node: { tagName: t.tagName, attributes: i || {} },
                shouldSuppressNode: o,
              }
            );
          })),
          (e.getTagsWithoutPII = hj.tryCatch(function (t) {
            return t
              ? t.filter(function (t) {
                  return (
                    !!t &&
                    (!(function (t) {
                      var e = "string" == typeof t;
                      return !!(y(t) || (e && w(t)) || E(t));
                    })(t) ||
                      (hj.log.debug(
                        "Tag " +
                          t +
                          " has been removed due to possible PII information included",
                      ),
                      !1))
                  );
                })
              : [];
          }, "hj.privacy.getTagsWithoutPII")),
          (e.suppressErrorMessage = hj.tryCatch(function (e) {
            var n = e;
            return (
              hj.settings.anonymize_emails && (n = n.replace(b, t.textHandler)),
              (n = n.replace(m, t.textHandler))
            );
          })),
          e
        );
      }, "hj.privacy")();
    }, "hj.privacy")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(57),
      i = n(124),
      o = n(2),
      a = n(8),
      s = n(19),
      c = n(68),
      u = n(55),
      l = n(5),
      h = n(6);
    var d = function (t) {
      if (((u.a.active = !1), hj.settings.record)) {
        var e =
          void 0 === hj.settings.record_targeting_rules ||
          !hj.settings.record_targeting_rules.length;
        a.a.setRecordingEnabled(
          !!sessionStorage.getItem("_hjRecordingEnabled"),
        );
        var n = sessionStorage.getItem("_hjRecordingLastActivity"),
          r =
            !n ||
            h.a.now() - n <
              o.a.MAX_TIME_SINCE_LAST_RECORDING_ACTIVITY_IN_SESSION;
        hj.log.debug(
          "_hjRecordingEnabled is set to " + a.a.isRecordingEnabled(),
          "recordings",
        ),
          hj.log.debug("_hjRecordingLastActivity is set to " + n, "recordings"),
          hj.log.debug(
            "_hjRecordingLastActivity still valid: " + r,
            "recordings",
          ),
          (a.a.isRecordingEnabled() && r) || e
            ? u.a.start()
            : hj.targeting.matchRules(
                hj.settings.record_targeting_rules,
                t,
                hj.tryCatch(function () {
                  u.a.start();
                }, "behavior-data.maybeStartRecordings"),
              ),
          l.a.items.SESSION_RESUMED.get() &&
            (l.a.items.SESSION_RESUMED.clear(), u.a.resume());
      }
    };
    hj.tryCatch(function () {
      return hj.loader.registerModule(
        "BehaviorData",
        ((t = {}),
        (hj.behaviorData = {
          tagRecording: function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            t = t || [];
            for (var i = [], o = 0; o < t.length; o += 1) {
              var a = hj.hq.trim(t[o]);
              a.length && a.length <= hj.maxRecordingTagLength
                ? (function () {
                    var t = {
                      name: a,
                      time: hj.time.getNow(),
                      timestamp: h.a.now(),
                    };
                    hj.tryCatch(function () {
                      n &&
                        ((t.selector = n.selector),
                        (t.page_x = n.pageX),
                        (t.page_y = n.pageY),
                        (t.offset_x = n.offsetX),
                        (t.offset_y = n.offsetY));
                    }, "behavior-data.tagRecording")(),
                      i.push(t);
                  })()
                : hj.log.warn(
                    'Invalid recording tag: " '
                      .concat(a, ' ", should have length 1.. ')
                      .concat(hj.maxRecordingTagLength, " characters, was ")
                      .concat(a.length, "."),
                  );
            }
            if (i.length)
              if (u.a.active) {
                var c = e ? r.a.AUTOTAG_RECORDING : r.a.TAG_RECORDING;
                Object(s.a)(c, i, !0).flush();
              } else
                e
                  ? (u.a.autoTagsToProcess = u.a.autoTagsToProcess.concat(i))
                  : (u.a.tagsToProcess = u.a.tagsToProcess.concat(i));
          },
        }),
        (t.run = hj.tryCatch(function (e) {
          hj.isPreview ||
            Object(i.b)(e) ||
            (Object(c.a)("behavior-data.run") && t.runRecordings(e));
        }, "behavior-data.run")),
        (t.runRecordings = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : hj.hq.noop;
          Object(c.a)("behavior-data.runRecordings") &&
            (l.a.items.SESSION_RESUMED.get() && a.a.trackSessionResumed(),
            d(t));
        }),
        t),
        !1,
      );
      var t;
    }, "behavior-data")();
  },
  function (t, e, n) {
    n(209), n(210), n(211), n(212);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(67);
    hj.tryCatch(function () {
      hj.insertedRules = (function () {
        var t,
          e = {},
          n = [],
          i = !1,
          o = function (t, e, n, r) {
            var i,
              o = {};
            return (
              (o.rule = e),
              (o.index = n),
              (o.parentSelector = ((i = t), hj.selector().get(hj.hq(i)))),
              (o.nodeId = hj.treeMirror.getNodeId(t)),
              r && (o.id = r),
              o
            );
          };
        function a(t) {
          n.forEach(function (e) {
            e([t]);
          });
        }
        return (
          (e.init = function () {
            i ||
              ((t = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                var e = Array.prototype.slice.call(arguments),
                  n = t.apply(this, arguments),
                  r = this.ownerNode || this.ownerHostNode,
                  i = e[0],
                  s = e[1];
                if (r instanceof Node && r.ownerDocument === document) {
                  var c = this.sheetId || null,
                    u = o(r, i, s, c);
                  a(u);
                } else {
                  var l = this;
                  hj.treeMirror.onTreeMirrorUpdate(function () {
                    var t = l.ownerNode || l.ownerHostNode;
                    if (t instanceof Node && t.ownerDocument === document) {
                      var e = l.sheetId || null;
                      a(o(t, i, s, e));
                    }
                  });
                }
                return n;
              }),
              (i = !0));
          }),
          (e.register = function (t, r) {
            n.push(t), r && t(e.getCurrentInsertedRules());
          }),
          (e.getCurrentInsertedRules = hj.tryCatch(function (t) {
            for (
              var e = Array.prototype.slice,
                n = e.call(document.styleSheets).filter(function (n) {
                  if (
                    void 0 !== t &&
                    !0 === t &&
                    n.href &&
                    0 === n.href.indexOf("blob:")
                  )
                    return !0;
                  var r = "";
                  if (n.href && 0 !== n.href.indexOf("blob:")) return !1;
                  try {
                    n.cssRules && n.cssRules.length;
                  } catch (t) {
                    return !1;
                  }
                  if (0 === n.cssRules.length) return !1;
                  n.ownerNode && void 0 !== n.ownerNode.innerText
                    ? (r = n.ownerNode.innerText)
                    : n.ownerNode &&
                      void 0 !== n.ownerNode.innerHTML &&
                      (r = n.ownerNode.innerHTML);
                  var i = r.match(/{/g);
                  return (
                    (i ? i.length : 0) <
                    (function t(n) {
                      var r = 0;
                      return (
                        e.call(n).forEach(function (e) {
                          e.cssRules ? (r++, (r += t(e.cssRules))) : r++;
                        }),
                        r
                      );
                    })(n.cssRules)
                  );
                }),
                i = [],
                o = function (t, o) {
                  var a = n[t],
                    s = hj.selector().get(hj.hq(a.ownerNode)),
                    c = e.call(a.cssRules),
                    u = c.length;
                  c.forEach(function (t, e) {
                    i.push({
                      parentSelector: s,
                      rule: Object(r.a)(t),
                      index: e + u,
                      nodeId: void 0,
                    });
                  });
                },
                a = 0,
                s = n.length;
              a < s;
              a++
            )
              o(a);
            return i;
          }, "hj.insertedRules.getCurrentInsertedRules")),
          (e.destroy = function () {
            t &&
              ((CSSStyleSheet.prototype.insertRule = t), (t = null), (i = !1)),
              (n = []);
          }),
          e
        );
      })();
    }, "hj.insertedRules")();
  },
  function (t, e) {
    hj.tryCatch(function () {
      hj.deletedRules = (function () {
        var t,
          e = {},
          n = !1,
          r = [],
          i = function (t, e, n) {
            var r,
              i = {};
            return (
              (i.index = e),
              (i.parentSelector = ((r = t), hj.selector().get(hj.hq(r)))),
              (i.nodeId = hj.treeMirror.getNodeId(t)),
              n && (i.id = n),
              i
            );
          };
        function o(t) {
          r.forEach(function (e) {
            e([t]);
          });
        }
        return (
          (e.init = function () {
            n ||
              ((t = CSSStyleSheet.prototype.deleteRule),
              (CSSStyleSheet.prototype.deleteRule = function () {
                var e = Array.prototype.slice.call(arguments),
                  n = t.apply(this, arguments),
                  r = this.ownerNode || this.ownerHostNode,
                  a = e[0];
                if (r instanceof Node && r.ownerDocument === document) {
                  var s = this.sheetId || null,
                    c = i(r, a, s);
                  o(c);
                } else {
                  var u = this;
                  hj.treeMirror.onTreeMirrorUpdate(function () {
                    var t = u.ownerNode || u.ownerHostNode;
                    if (t instanceof Node && t.ownerDocument === document) {
                      var e = u.sheetId || null;
                      o(i(t, a, e));
                    }
                  });
                }
                return n;
              }),
              (n = !0));
          }),
          (e.register = function (t) {
            r.push(t);
          }),
          (e.destroy = function () {
            t &&
              ((CSSStyleSheet.prototype.deleteRule = t), (t = null), (n = !1)),
              (r = []);
          }),
          e
        );
      })();
    }, "hj.deletedRules")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(67);
    hj.tryCatch(function () {
      var t, e;
      hj.cssBlobs =
        ((e = []),
        ((t = {}).register = function (t) {
          e.push(t);
        }),
        (t.handleBlobStyles = hj.tryCatch(function (t) {
          var n = [];
          "link" === t.tagName.toLowerCase() &&
            "rel" in t.attributes &&
            "stylesheet" === t.attributes.rel.value &&
            "href" in t.attributes &&
            0 === t.attributes.href.value.indexOf("blob:") &&
            setTimeout(function () {
              for (
                var i = hj.selector().get(hj.hq(t)),
                  o = hj.treeMirror.getNodeId(t),
                  a = 0,
                  s = t.sheet.cssRules.length;
                a < s;
                a++
              )
                n.push({
                  parentSelector: i,
                  rule: Object(r.a)(t.sheet.cssRules[a]),
                  nodeId: o,
                  index: s + a,
                });
              e.forEach(function (t) {
                t(n);
              });
            }, 100);
        }, "hj.cssBlobs.apply")),
        t);
    }, "hj.cssBlobs")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(12),
      i = n(67);
    hj.tryCatch(function () {
      hj.adoptedStyleSheets = (function () {
        var t = {},
          e = [],
          n = null,
          o = !1;
        function a(t) {
          e.forEach(function (e) {
            e(t);
          });
        }
        function s(t) {
          return hj.selector().get(hj.hq(t));
        }
        return (
          (t.init = function () {
            o ||
              (void 0 !== window.ShadowRoot &&
                !!(n = Object.getOwnPropertyDescriptor(
                  ShadowRoot.prototype,
                  "adoptedStyleSheets",
                )) &&
                Object.defineProperty(
                  ShadowRoot.prototype,
                  "adoptedStyleSheets",
                  {
                    set: function () {
                      n.set.apply(this, arguments);
                      var t = arguments[0],
                        e = this.host,
                        o = {
                          sheets: t.map(function (t) {
                            var n = [],
                              o = t.cssRules.length;
                            t.ownerHostNode ||
                              ((t.ownerHostNode = e),
                              (t.sheetId = Object(r.b)()));
                            for (var a = 0; a < o; a++)
                              n.push(Object(i.a)(t.cssRules[a]));
                            return { id: t.sheetId, rules: n };
                          }),
                        };
                      if (e instanceof Node && document.contains(e))
                        (o.parentSelector = s(e)),
                          (o.nodeId = hj.treeMirror.getNodeId(e)),
                          a(o);
                      else {
                        var c = this;
                        hj.treeMirror.onTreeMirrorUpdate(function () {
                          var t = c.host;
                          (o.parentSelector = s(t)),
                            (o.nodeId = hj.treeMirror.getNodeId(t)),
                            a(o);
                        });
                      }
                    },
                  },
                ),
              (o = !0));
          }),
          (t.register = function (t) {
            e.push(t);
          }),
          (t.destroy = function () {
            n &&
              (Object.defineProperty(
                ShadowRoot.prototype,
                "adoptedStyleSheets",
                n,
              ),
              (n = null),
              (o = !1)),
              (e.length = 0);
          }),
          t
        );
      })();
    }, "hj.adoptedStyleSheets")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(39),
      i = n(8),
      o = n(12);
    hj.tryCatch(function () {
      var t, e, n, a, s, c, u;
      hj.loader.registerModule(
        "UserBehavior",
        ((t = {}),
        (e = !1),
        (n = (function () {
          var t,
            e,
            n = {},
            o = {
              desktop: { time: 600, distance: 200, clicks: 6 },
              mobile: { time: 600, distance: 200, clicks: 6 },
              tablet: { time: 600, distance: 200, clicks: 6 },
              tv: { time: 600, distance: 200, clicks: 6 },
            },
            a = { x: null, y: null, pageX: null, pageY: null },
            s = 0;
          function c() {
            (s = 0),
              (a.x = null),
              (a.y = null),
              (a.pageX = null),
              (a.pageY = null);
          }
          function u(n) {
            var r, o, u, l, h;
            if (
              !((r = n.clientX),
              (o = n.clientY),
              (u = n.pageX),
              (l = n.pageY),
              (h = (a.pageX && a.pageX !== u) || (a.pageY && a.pageY !== l)),
              (document.documentElement.clientWidth &&
                r > document.documentElement.clientWidth) ||
                (document.documentElement.clientHeight &&
                  o > document.documentElement.clientHeight) ||
                h ||
                (s++,
                e && clearInterval(e),
                (e = setTimeout(c, t.time)),
                (function (e, n) {
                  var r = Math.abs(e - a.x),
                    i = Math.abs(n - a.y);
                  Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)) > t.distance &&
                    c();
                })(n.clientX, n.clientY),
                (a.x = n.clientX),
                (a.y = n.clientY),
                (a.pageX = n.pageX),
                (a.pageY = n.pageY),
                s !== t.clicks))
            ) {
              var d = null;
              hj.tryCatch(function () {
                var t,
                  e,
                  r = (
                    null == n ||
                    null === (t = n.composedPath) ||
                    void 0 === t ||
                    null === (e = t.call(n)) ||
                    void 0 === e
                      ? void 0
                      : e.length
                  )
                    ? n.composedPath()[0]
                    : n.target,
                  o = hj.selector(i.a.getSelectorVersion()).get(hj.hq(r));
                if (r && "pageX" in n && "pageY" in n && void 0 !== o) {
                  var a = hj.hq(r).offset(),
                    s = n.pageX - a.left,
                    c = n.pageY - a.top;
                  d = {
                    selector: o,
                    pageX: n.pageX,
                    pageY: n.pageY,
                    offsetX: s,
                    offsetY: c,
                  };
                }
              }, "user-behaviour.rageClick.onClick")(),
                hj.autotag.rageClick(d);
            }
          }
          return (
            (n.listen = function () {
              (t = o[Object(r.a)()]),
                hj.hq(document).on("mousedown.user_behavior_rageclick", u);
            }),
            n
          );
        })()),
        (a = (function () {
          var t,
            e,
            n = {},
            i = {
              desktop: { time: 1e3, directionChanges: 4 },
              mobile: { time: 1e3, directionChanges: 4 },
              tablet: { time: 1e3, directionChanges: 4 },
              tv: { time: 1e3, directionChanges: 4 },
            },
            o = 0,
            a = !1,
            s = 0;
          function c() {
            (o = 0), (a = !1);
          }
          function u() {
            e && clearInterval(e), (e = setTimeout(c, t.time));
            var n = hj.hq(window).scrollTop(),
              r = s - n < 0 ? "down" : "up";
            a &&
              r !== a &&
              ++o === t.directionChanges &&
              hj.autotag.wildScroll(),
              (a = r),
              (s = n);
          }
          return (
            (n.listen = function () {
              (t = i[Object(r.a)()]),
                hj.hq(document).on("scroll.user_behavior_wildscroll", u);
            }),
            n
          );
        })()),
        (s = (function () {
          var t,
            e,
            n = {},
            i = {
              desktop: { time: 100, distance: 200, directionChanges: 5 },
              mobile: { time: 100, distance: 200, directionChanges: 5 },
              tablet: { time: 100, distance: 200, directionChanges: 5 },
              tv: { time: 100, distance: 200, directionChanges: 5 },
            },
            o = 0,
            a = { x: !1, y: !1 },
            s = { x: 0, y: 0 },
            c = { x: 0, y: 0 };
          function u() {
            (o = 0), (a.x = !1), (a.y = !1);
          }
          function l(n) {
            var r = { x: n.clientX, y: n.clientY },
              i = {
                x: r.x < s.x ? "left" : r.x === s.x ? a.x : "right",
                y: r.y < s.y ? "up" : r.y === s.y ? a.y : "down",
              };
            ((a.x && i.x !== a.x) || (a.y && i.y !== a.y)) &&
              ((function (e, n) {
                if (c.x && c.y) {
                  var r = Math.abs(e - c.x),
                    i = Math.abs(n - c.y);
                  return (
                    Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)) <= t.distance
                  );
                }
                return !0;
              })(r.x, r.y)
                ? ++o === t.directionChanges
                  ? hj.autotag.madMouse()
                  : (e && clearInterval(e), (e = setTimeout(u, t.time)))
                : u(),
              (c = r)),
              (a = i),
              (s = r);
          }
          return (
            (n.listen = function () {
              (t = i[Object(r.a)()]),
                hj.hq(document).on("mousemove.user_behavior_madmouse", l);
            }),
            n
          );
        })()),
        (c = (function () {
          var t,
            e = {},
            n = [];
          function r() {
            var t = [],
              e = Array.prototype.filter.call(hj.hq("form"), function (e) {
                for (var r = 0; r < n.length; r++) if (n[r] === e) return !0;
                return t.push(e), !0;
              });
            t.forEach(function (t) {
              hj.log.debug("Found new form.", "autotag", t),
                hj.hq(t).on("submit.user_behavior_formsubmit", function () {
                  var e, n;
                  (e = t),
                    (n = hj.selector(i.a.getSelectorVersion()).get(hj.hq(e))),
                    hj.autotag.formSubmit({ selector: n });
                }),
                hj.hq(t).on(
                  "change",
                  Object(o.h)(function () {
                    var e, n;
                    (e = t),
                      (n = hj.selector(i.a.getSelectorVersion()).get(hj.hq(e))),
                      hj.autotag.formInteract({ selector: n });
                  }),
                );
            }),
              (n = e);
          }
          return (
            (e.listen = function () {
              t = setInterval(r, 2e3);
            }),
            (e.stop = function () {
              clearInterval(t);
            }),
            e
          );
        })()),
        (t.listen = function () {
          hj.url.getParameter("hjAutogeneratedRecording") &&
            hj.autotag.autogenerated();
        }),
        (u = t),
        (hj.autotag = hj.tryCatch(function () {
          var t = {
            wildScroll: r("wildscroll"),
            madMouse: r("madmouse"),
            autogenerated: r("autogenerated"),
          };
          function r(t) {
            return function () {
              o([t]);
            };
          }
          function i(t, e, n) {
            return function (r) {
              r &&
                o(
                  e.reduce(function (e, i) {
                    var o = t;
                    return (
                      Object.keys(i).forEach(function (t) {
                        var e = i[t],
                          a = r[e];
                        null == a && (a = ""),
                          n && (a = n(e, a)),
                          (o += "." + t + ":" + a);
                      }),
                      e.push(o),
                      e
                    );
                  }, []),
                );
            };
          }
          function o(t, e) {
            hj.log.debug("Sending autotags", "autotag", t),
              hj.behaviorData.tagRecording(t, !0, null != e ? e : null);
          }
          function l() {
            var t, e, r;
            n.listen(),
              a.listen(),
              s.listen(),
              c.listen(),
              u.listen(),
              (t = function (t, e) {
                return e
                  .replace(".e:", ".E:")
                  .replace(".v:", ".V:")
                  .replace(".c:", ".C:");
              }),
              (e = function (t, e) {
                return "string" == typeof e ? e.replace(/\.|:/g, "_") : e;
              }),
              (r = {
                "poll.show": i("poll.show", [{}, { id: "id" }]),
                "poll.send": i("poll.send", [
                  {},
                  { id: "id", r_id: "response_id" },
                ]),
                "poll.question": i(
                  "poll.q",
                  [
                    { t: "type" },
                    { t: "type", a: "answer" },
                    { t: "type", id: "id" },
                    { qid: "questionUuid", id: "id" },
                    { a: "answer", qid: "questionUuid", id: "id" },
                    { t: "type", a: "answer", id: "id" },
                  ],
                  function (t, e) {
                    return "type" !== t
                      ? e
                      : {
                          "rating-scale-5": "rating5",
                          "rating-scale-7": "rating7",
                          "net-promoter-score": "nps",
                          "single-close-ended": "singleClose",
                          "multiple-close-ended": "multiClose",
                          "single-open-ended-multiple-line": "singleOpenMulti",
                          "single-open-ended-single-line": "singleOpenSingle",
                        }[e] || e;
                  },
                ),
                "feedback.show": i("feedback.show", [{}, { id: "id" }]),
                "feedback.send": i("feedback.send", [{}, { id: "id" }]),
                "feedback.sentiment": i("feedback.sentiment", [
                  { e: "emotion" },
                  { e: "emotion", id: "id", r_id: "response_id" },
                ]),
                "survey.show": i("survey.show", [{}, { id: "id" }]),
                "survey.open": i("survey.open", [{}, { id: "id" }]),
                "exp.go": i(
                  "exp.go",
                  [
                    { e: "experimentId", c: "containerId" },
                    { e: "experimentId", v: "variantId", c: "containerId" },
                  ],
                  t,
                ),
                "exp.opt": i(
                  "exp.opt",
                  [
                    { e: "experimentId" },
                    { e: "experimentId", v: "variantId" },
                  ],
                  t,
                ),
                "exp.ub": i(
                  "exp.ub",
                  [
                    { e: "experimentId" },
                    { e: "experimentId", v: "variantId" },
                  ],
                  t,
                ),
                "exp.abt": i(
                  "exp.abt",
                  [
                    { e: "experimentId" },
                    { e: "experimentId", v: "variantId" },
                  ],
                  t,
                ),
                "int.ga": i(
                  "int.ga",
                  [
                    { a: "action" },
                    { a: "action", c: "category" },
                    { a: "action", c: "category", l: "label" },
                    { a: "action", c: "category", l: "label", v: "value" },
                  ],
                  e,
                ),
                "int.mp": i("int.mp", [{ event: "event" }], e),
                "int.hubspot": i("int.hubspot", [{ utk: "utk" }]),
              }),
              Object.keys(r).forEach(function (t) {
                hj.event.listen(t, r[t]);
              });
          }
          return (
            (t.formSubmit = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              o(["formsubmit"], t);
            }),
            (t.formInteract = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              o(["forminteract"], t);
            }),
            (t.rageClick = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              o(["rageclick"], t);
            }),
            (t.start = hj.tryCatch(function () {
              hj.features.hasFeature("settings.billing_v2") &&
                !e &&
                (l(), (e = !0));
            }, "user-behavior.autotag.start")),
            t
          );
        }, "user-behavior.autotag")()),
        (t.run = Function.prototype),
        t),
        !1,
      );
    }, "user-behavior")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(41),
      i = n(2);
    hj.tryCatch(function () {
      (hj.feedback = function () {
        var t = { loaded: !1 };
        function e() {
          Object(r.a)(i.e.PREACT_INCOMING_FEEDBACK);
        }
        function n() {
          Object(r.a)(i.e.INCOMING_FEEDBACK);
        }
        function o() {
          var r =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (t.loaded && !r) ||
            ((t.loaded = !0),
            hj.widget.setLanguage(hj.widget.feedbackData.language),
            hj.features.hasFeature("feedback.widgetV2") ? e() : n());
        }
        function a() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (t.loaded && !e) ||
            ((t.loaded = !0),
            hj.widget.setLanguage(
              hj.widget.embeddedFeedbackWidgets[0].language,
            ),
            Object(r.a)(i.e.PREACT_INCOMING_FEEDBACK));
        }
        function s(e) {
          var n = (hj.settings.feedback_widgets || []).filter(function (t) {
            var e = t.display_type;
            return "button" === (void 0 === e ? "button" : e);
          });
          hj.hq.each(n, function (n, r) {
            hj.targeting.matchRules(
              r.targeting,
              e,
              hj.tryCatch(function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                hj.log.debug(
                  "Feedback widget #" + r.id + " has matched.",
                  "feedback",
                ),
                  !hj.widget.data ||
                  (hj.widget.data.id === r.id &&
                    "incoming" === hj.widget.data.type)
                    ? ((r.created_epoch_time -= 31536e4),
                      hj.widget.addMatchingWidget(
                        "incoming",
                        r.id,
                        r.created_epoch_time,
                        r.targeting_percentage,
                        function () {
                          (hj.widget.feedbackData = r),
                            hj.tryCatch(o, "feedback-button-load")(e);
                        },
                        t.remove,
                      ))
                    : hj.log.debug(
                        "Another feedback widget is already present.",
                        "feedback",
                      );
              }, "feedback.run.matchRules-callback"),
            );
          });
        }
        function c(t) {
          var e = (hj.settings.feedback_widgets || [])
            .filter(function (t) {
              return "inline" === t.display_type;
            })
            .filter(function (e) {
              return hj.targeting.matchRules(e.targeting, t, function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                void 0 !== hj.widget.embeddedFeedbackWidgets &&
                  (hj.widget.embeddedFeedbackWidgets.push(e),
                  hj.tryCatch(a, "feedback-embeddable-load")(t));
              });
            });
          (hj.widget.embeddedFeedbackWidgets = e),
            e.length > 0 && hj.tryCatch(a, "feedback-embeddable-load")();
        }
        return (
          (t.run = hj.tryCatch(function (e) {
            (t.loaded = !1),
              hj.tryCatch(s, "feedback-button")(e),
              hj.tryCatch(c, "feedback-embeddable")(e);
          }, "feedback")),
          (t.remove = hj.tryCatch(function (t) {
            hj.widget.feedbackData
              ? (hj.hq("#_hj_feedback_container").length > 0 &&
                  hj.hq("#_hj_feedback_container").parent().remove(),
                delete hj.widget.feedbackData,
                hj.hq(window).off("resize"),
                setTimeout(function () {
                  t();
                }, 1))
              : t();
          })),
          hj.isPreview &&
            (window._hjFeedbackReload = hj.tryCatch(function (t, e) {
              (hj.widget.feedbackData = t),
                (hj.settings.legal_name = t.legal_name),
                (hj.settings.privacy_policy_url = t.privacy_policy_url),
                e && (hj.settings.features = e),
                hj.tryCatch(o, "feedback")(!0);
            }, "feedback")),
          t
        );
      }),
        hj.loader.registerModule("Feedback", hj.feedback(), !0);
    }, "feedback")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(124),
      i = n(41),
      o = n(2),
      a = n(25),
      s = n(5),
      c = n(12),
      u = n(29),
      l = n(32);
    hj.tryCatch(function () {
      (hj.polls = function () {
        var t,
          e = {};
        var n = hj.tryCatch(function (t, e) {
          !(function (t) {
            if (hj.surveyImpressionsEndpoint && !hj.isPreview) {
              var e = ""
                .concat(hj.surveyImpressionsEndpoint, "?id=")
                .concat(t, "&device=")
                .concat(Object(c.a)());
              hj.log.debug(
                "poll id: ".concat(t, " recording impression."),
                "poll",
              ),
                hj.ajax.get(e);
            } else
              hj.log.debug(
                "poll id: ".concat(t, " skipping recording impression."),
                "poll",
              );
          })(t.id);
          var n = {
            scriptSrc: ""
              .concat(hj.scriptDomain)
              .concat(o.e.SURVEY_ISOLATED.js),
          };
          hj.widget.renderSurvey(t, e, n);
        }, "polls");
        function h(t) {
          return hj.features.hasFeature("survey.iframe.".concat(t.display_type))
            ? o.e.SURVEY_BOOTSTRAPPER
            : o.e.SURVEY_V2;
        }
        var d = hj.tryCatch(function (e, r) {
          (hj.widget.pollsData = hj.widget.pollsData || {}),
            (hj.widget.pollsData[e.id] = e),
            (hj.widget.pollsResponsesUUID = hj.widget.pollsResponsesUUID || {}),
            (hj.widget.pollsResponsesUUID[e.id] = Object(l.a)()),
            (hj.widget.pollResponseUUID = Object(l.a)()),
            hj.widget.setLanguage(e.language),
            hj.log.debug("Rendering poll widget.", "poll");
          var o = h(e);
          o !== t
            ? Object(i.a)(h(e), function () {
                (t = o), n(e, r);
              })
            : n(e, r);
        }, "polls");
        var f = hj.tryCatch(function (t) {
          var e = JSON.parse(JSON.stringify(t));
          return (
            (function (t) {
              hj.hq.each(t.content.questions, function (t, e) {
                e.answers &&
                  hj.hq.each(e.answers, function (t, e) {
                    e.index = t;
                  });
              });
            })(e),
            (function (t) {
              hj.hq.each(t.content.questions, function (t, e) {
                e.randomize_answer_order &&
                  (e.pin_last_to_bottom
                    ? (e.answers = Object(c.j)(e.answers.slice(0, -1)).concat(
                        e.answers.slice(-1),
                      ))
                    : Object(c.j)(e.answers));
              });
            })(e),
            e
          );
        }, "polls");
        return (
          (e.add = hj.tryCatch(function (t) {
            (hj.widget.pollsData = hj.widget.pollsData || {}),
              (hj.widget.pollsData[t.id] = f(t)),
              hj.tryCatch(hj.rendering.callAccordingToCondition, "polls")(
                hj.widget.pollsData[t.id],
                "poll",
                d,
              );
          }, "polls")),
          (e.addEmbedded = hj.tryCatch(function (t, n) {
            hj.widget.emptyMatchingWidgets();
            var r =
              "external_link" === t.display_type
                ? void 0
                : t.targeting_percentage;
            hj.widget.addMatchingWidget(
              "poll",
              t.id,
              t.created_epoch_time,
              r,
              function () {
                var e = f(t);
                (e.skin = "light"),
                  (e.background = "#ffffff"),
                  s.a.items.POLL_DONE.exists(t.id) &&
                    "always" !== t.persist_condition &&
                    (hj.log.debug(
                      "Offsite poll " + t.id + " was already submitted.",
                      "poll",
                    ),
                    (e.is_submitted = !0)),
                  (hj.widget.pollsData = hj.widget.pollsData || {}),
                  (hj.widget.pollsData[e.id] = e),
                  d(e, n[0]),
                  "function" == typeof window.hjRenderCallback &&
                    window.hjRenderCallback({ background: t.background });
              },
              e.remove,
            );
          }, "polls")),
          (e.remove = hj.tryCatch(function (t, e) {
            hj.widget.pollsData[e]
              ? (Object(u.c)(document.body),
                Object(u.d)(document.body),
                delete hj.widget.pollsData[e],
                setTimeout(function () {
                  t();
                }, 1))
              : t();
          }, "polls")),
          (e.run = hj.tryCatch(function (t) {
            var n = hj.hq("._hj-survey-embed-container"),
              i = n.attr("data-survey-id"),
              o = Object(r.b)(t),
              c = !1;
            hj.hq.each(hj.settings.polls || [], function (r, u) {
              var l = u.display_type === a.a.EXTERNAL,
                h =
                  u.display_type === a.a.POPOVER ||
                  u.display_type === a.a.FULL_SCREEN ||
                  u.display_type === a.a.BUTTON ||
                  u.display_type === a.a.INLINE_EMBEDDED;
              n.length > 0 && l
                ? u.uuid === i &&
                  (hj.log.debug(
                    "Offsite poll #" +
                      u.id +
                      " has matched with the embedded UUID " +
                      i,
                    "poll",
                  ),
                  (c = !0),
                  e.addEmbedded(u, n))
                : !o &&
                  h &&
                  hj.targeting.matchRules(
                    u.targeting,
                    t,
                    hj.tryCatch(function () {
                      hj.log.debug("Poll #" + u.id + " has matched.", "poll"),
                        s.a.items.POLL_DONE.exists(u.id) &&
                        "always" !== u.persist_condition
                          ? hj.log.debug("Poll was already submitted.", "poll")
                          : hj.widget.addMatchingWidget(
                              "poll",
                              u.id,
                              u.created_epoch_time,
                              u.targeting_percentage,
                              function () {
                                return e.add(u);
                              },
                              function (t) {
                                return e.remove(t, u.id);
                              },
                              u.display_type === a.a.INLINE_EMBEDDED,
                            );
                    }, "polls.run.matchRules-callback"),
                  );
            }),
              o &&
                !c &&
                (hj.hq(document).trigger("hj-embedded-survey-mismatch"),
                hj.widgetDelay.clear(),
                hj.widget.emptyMatchingWidgets(),
                hj.log.debug("Could not match the embedded UUID.", "poll"));
          }, "polls")),
          hj.isPreview &&
            (window._hjPollReload = hj.tryCatch(function (t, e) {
              hj.widget.pollsData = hj.widget.pollsData || {};
              var n = f(t);
              (hj.widget.pollsData[t.id] = n),
                (hj.settings.legal_name = t.legal_name),
                (hj.settings.privacy_policy_url = t.privacy_policy_url),
                e && (hj.settings.features = e),
                hj.tryCatch(
                  function () {
                    d(n);
                  },
                  n,
                  "polls",
                )();
            }, "polls")),
          e
        );
      }),
        hj.loader.registerModule("Polls", hj.polls(), !0);
    }, "polls")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(5),
      i = n(41),
      o = n(2),
      a = n(48),
      s = n(25),
      c = n(124);
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "Surveys",
        (function () {
          var t = {};
          function e(t) {
            return t.display_type === s.a.EXTERNAL
              ? Object(c.a)(t.uuid, hj.surveysHost)
              : t.public_url;
          }
          return (
            (t.run = hj.tryCatch(function (n) {
              if (!Object(c.b)(n)) {
                var a = (hj.settings.polls || []).filter(function (t) {
                    return t.invite_enabled && t.display_type === s.a.EXTERNAL;
                  }),
                  u = (hj.settings.surveys || []).concat(a);
                hj.hq.each(u || [], function (a, s) {
                  hj.targeting.matchRules(
                    s.targeting,
                    n,
                    hj.tryCatch(function () {
                      hj.log.debug(
                        "Survey #" + s.id + " has matched.",
                        "survey",
                      ),
                        r.a.items.SURVEY_INVITES_CLOSED.exists(s.id)
                          ? hj.log.debug("Survey was already viewed.", "survey")
                          : hj.widget.addMatchingWidget(
                              "survey",
                              s.id,
                              s.created_epoch_time,
                              s.targeting_percentage,
                              function () {
                                (hj.survey.data = s),
                                  hj.rendering.callAccordingToCondition(
                                    hj.survey.data,
                                    "survey",
                                    hj.tryCatch(function () {
                                      var t;
                                      (t = hj.survey.data),
                                        (hj.widget.surveyInvitationData = {
                                          id: t.id,
                                          effectiveShowBranding:
                                            t.effective_show_branding,
                                          title: t.invite.title,
                                          description: t.invite.description,
                                          button: t.invite.button,
                                          close: t.invite.close,
                                          url: e(t),
                                        }),
                                        Object(i.a)(o.e.SURVEY_INVITATION);
                                    }, "polls"),
                                  );
                              },
                              t.remove,
                            );
                    }, "surveys.run.matchRules-callback"),
                  );
                });
              }
            }, "surveys")),
            (t.remove = hj.tryCatch(function (t) {
              hj.survey.data
                ? (hj.hq(".".concat(a.a.SURVEY_INVITES)).length > 0 &&
                    hj.hq(".".concat(a.a.SURVEY_INVITES)).remove(),
                  delete hj.survey.data,
                  setTimeout(function () {
                    t();
                  }, 1))
                : t();
            })),
            t
          );
        })(),
        !0,
      );
    }, "surveys")();
  },
  function (t, e, n) {
    var r, i, o;
    !(function (n, a) {
      "use strict";
      (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              function t(t) {
                return t.charAt(0).toUpperCase() + t.substring(1);
              }
              function e(t) {
                return function () {
                  return this[t];
                };
              }
              var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                r = ["columnNumber", "lineNumber"],
                i = ["fileName", "functionName", "source"],
                o = n.concat(r, i, ["args"], ["evalOrigin"]);
              function a(e) {
                if (e)
                  for (var n = 0; n < o.length; n++)
                    void 0 !== e[o[n]] && this["set" + t(o[n])](e[o[n]]);
              }
              (a.prototype = {
                getArgs: function () {
                  return this.args;
                },
                setArgs: function (t) {
                  if ("[object Array]" !== Object.prototype.toString.call(t))
                    throw new TypeError("Args must be an Array");
                  this.args = t;
                },
                getEvalOrigin: function () {
                  return this.evalOrigin;
                },
                setEvalOrigin: function (t) {
                  if (t instanceof a) this.evalOrigin = t;
                  else {
                    if (!(t instanceof Object))
                      throw new TypeError(
                        "Eval Origin must be an Object or StackFrame",
                      );
                    this.evalOrigin = new a(t);
                  }
                },
                toString: function () {
                  var t = this.getFileName() || "",
                    e = this.getLineNumber() || "",
                    n = this.getColumnNumber() || "",
                    r = this.getFunctionName() || "";
                  return this.getIsEval()
                    ? t
                      ? "[eval] (" + t + ":" + e + ":" + n + ")"
                      : "[eval]:" + e + ":" + n
                    : r
                    ? r + " (" + t + ":" + e + ":" + n + ")"
                    : t + ":" + e + ":" + n;
                },
              }),
                (a.fromString = function (t) {
                  var e = t.indexOf("("),
                    n = t.lastIndexOf(")"),
                    r = t.substring(0, e),
                    i = t.substring(e + 1, n).split(","),
                    o = t.substring(n + 1);
                  if (0 === o.indexOf("@"))
                    var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                      c = s[1],
                      u = s[2],
                      l = s[3];
                  return new a({
                    functionName: r,
                    args: i || void 0,
                    fileName: c,
                    lineNumber: u || void 0,
                    columnNumber: l || void 0,
                  });
                });
              for (var s = 0; s < n.length; s++)
                (a.prototype["get" + t(n[s])] = e(n[s])),
                  (a.prototype["set" + t(n[s])] = (function (t) {
                    return function (e) {
                      this[t] = Boolean(e);
                    };
                  })(n[s]));
              for (var c = 0; c < r.length; c++)
                (a.prototype["get" + t(r[c])] = e(r[c])),
                  (a.prototype["set" + t(r[c])] = (function (t) {
                    return function (e) {
                      if (((n = e), isNaN(parseFloat(n)) || !isFinite(n)))
                        throw new TypeError(t + " must be a Number");
                      var n;
                      this[t] = Number(e);
                    };
                  })(r[c]));
              for (var u = 0; u < i.length; u++)
                (a.prototype["get" + t(i[u])] = e(i[u])),
                  (a.prototype["set" + t(i[u])] = (function (t) {
                    return function (e) {
                      this[t] = String(e);
                    };
                  })(i[u]));
              return a;
            })
              ? r.apply(e, i)
              : r) || (t.exports = o);
    })();
  },
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? r(Object(n), !0).forEach(function (e) {
              o(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
      }
      return t;
    }
    function o(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function a(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return s(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function s(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function c() {
      return Boolean(window[window.GoogleAnalyticsObject || "ga"]);
    }
    function u() {
      (0, window[window.GoogleAnalyticsObject || "ga"])(function (t) {
        var e = t.get("sendHitTask");
        t.set("sendHitTask", function (t) {
          e(t);
          var n = (function (t) {
            var e = decodeURIComponent(t)
              .split("&")
              .map(function (t) {
                return t.split("=");
              })
              .filter(function (t) {
                var e = a(t, 1)[0];
                return ["t", "ec", "ea", "el", "ev"].indexOf(e) > -1;
              })
              .reduce(function (t, e) {
                return i(i({}, t), {}, o({}, e[0], e[1]));
              }, {});
            if (!e.t) return {};
            return {
              event: e.t,
              category: e.ec || "",
              action: e.ea || "",
              label: e.el || "",
              value: e.ev || "",
            };
          })(t.get("hitPayload"));
          "event" === n.event && h("ga", n);
        });
      });
    }
    function l(t, e) {
      !e.length ||
        e.length < 2 ||
        "event" !== e[0] ||
        h(t, {
          action: e[1],
          category: (e[2] && e[2].event_category) || "",
          label: (e[2] && e[2].event_label) || "",
          value: (e[2] && e[2].value) || "",
        });
    }
    function h(t, e) {
      if (
        !(function (t) {
          return "detect_user" === t.action && "Hotjar" === t.category;
        })(e)
      ) {
        var n = (function (t) {
            return (
              "GA_" +
              [t.action, t.category, t.label, t.value]
                .filter(function (t) {
                  return 0 === t || Boolean(t);
                })
                .join("-")
            );
          })(e),
          r = (function (t) {
            return "GA_" + t.action;
          })(e);
        hj.log.debug("intercepting ".concat(t, ": ") + JSON.stringify(e)),
          hj("event", n),
          n !== r && hj("event", r),
          hj.event.signal("int.ga", e);
      }
    }
    function d(t, e) {
      return function (n, r) {
        hj.log.debug("[".concat(t, "] ").concat(n), e, r);
      };
    }
    function f(t) {
      return Array.from(t).map(function (t) {
        return JSON.stringify(t);
      });
    }
    function g(t, e, n, r) {
      var i = 1;
      if (t()) return e(!0);
      var o = setInterval(function () {
        return (
          i++,
          t()
            ? (clearInterval(o), e(!0))
            : i >= r
            ? (clearInterval(o), e(!1))
            : void 0
        );
      }, n);
    }
    function p(t) {
      return t && "string" == typeof t ? t.replace(/[\W_]+/g, "-") : "";
    }
    n.r(e);
    var v,
      m,
      y = d("ga.forward_events", "integration"),
      j = {
        setup: hj.tryCatch(function (t) {
          if (t.tag_sessions) {
            var e = c(),
              n = "function" == typeof window.gtag;
            g(
              function () {
                return (
                  void 0 !== window.dataLayer &&
                  void 0 !== window.dataLayer.length
                );
              },
              function (t) {
                if (t)
                  return (
                    y("Intercepting dataLayer"),
                    void (function () {
                      var t = window.dataLayer;
                      if (!0 !== t._hj) {
                        t.forEach(function (t) {
                          l("dataLayer", t);
                        });
                        var e = t.push;
                        (t.push = function () {
                          e.apply(t, arguments);
                          var n = arguments[0];
                          l("dataLayer", n);
                        }),
                          (t._hj = !0);
                      }
                    })()
                  );
                var e;
                n &&
                  (y("Intercepting gtag"),
                  (e = window.gtag),
                  (window.gtag = function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.apply(null, t), l("gtag", t);
                  }));
              },
              3e3,
              5,
            ),
              e && (y("Intercepting ga"), u());
          }
        }, "ga.forward_events"),
      },
      b = d("ga.send_hjuid"),
      w = 60,
      S = !0,
      _ = hj.tryCatch(function () {
        hj.globals.ready("userId", function (t) {
          var e = t.get("userId");
          "string" != typeof e || e.length < 8
            ? b("invalid userid: '".concat(e, "'"))
            : (b("got userId"), (m = e.substring(0, 8)), O());
        }),
          E();
      }, "integrations.googleAnalytics"),
      E = hj.tryCatch(function () {
        if (!v) {
          if (c()) {
            var t = window[window.GoogleAnalyticsObject || "ga"];
            return (
              b("`ga` variable is available, waiting for tracker."),
              void t(function (t) {
                C(t, !0);
              })
            );
          }
          w <= 0
            ? b("given up looking for GA module")
            : ((w -= 1), setTimeout(E, 500));
        }
      }, "integrations"),
      C = hj.tryCatch(function (t, e) {
        t &&
          ((v && e) ||
            (v !== t && (b("got fresh tracker"), (S = !0)), (v = t), O()));
      }, "integrations"),
      O = hj.tryCatch(function () {
        S &&
          m &&
          v &&
          ((S = !1),
          v.send("event", "Hotjar", "detect_user", m, { nonInteraction: 1 }),
          b("successfully sent detect_user event"));
      }, "integrations"),
      I = {
        setup: _,
        setTracker: hj.tryCatch(function (t) {
          C(t, !1);
        }, "integrations.googleAnalytics"),
      },
      N = d("ga.send_hjuid_gtag"),
      T = {
        setup: hj.tryCatch(function () {
          var t = window.dataLayer;
          function e() {
            N("calling gtag(".concat(f(arguments), ")")), t.push(arguments);
          }
          void 0 !== t
            ? hj.globals.ready("userId", function (t) {
                var n = t.get("userId");
                if (n && "string" == typeof n && !(n.length < 8)) {
                  var r = n.substring(0, 8);
                  e("set", "user_properties", { hjuid: r }),
                    e("event", "detect_user", {
                      event_category: "Hotjar",
                      event_label: r,
                      non_interaction: !0,
                    });
                }
              })
            : N("`dataLayer` is undefined");
        }, "ga.send_hjuid_gtag"),
      };
    function k(t) {
      return (k =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var A = d("google_optimize");
    function R() {
      window.dataLayer.push(arguments);
    }
    var x = {
        setup: function () {
          g(
            function () {
              return !(
                !window.dataLayer ||
                "function" != typeof window.dataLayer.push ||
                "object" !== k(window.google_optimize) ||
                "object" !== k(window.google_tag_manager) ||
                !Object.keys(window.google_tag_manager).some(function (t) {
                  return t.startsWith("OPT-") || t.startsWith("GTM-");
                })
              );
            },
            function (t) {
              if (t) {
                var e,
                  n,
                  r = window.gtag || R;
                (e = 0),
                  (n = window.google_tag_manager.mb) &&
                    n.m &&
                    n.m.length &&
                    (n.m = n.m.map(function (t) {
                      return function (n) {
                        n && n.message && "optimize.callback" === n.message[1]
                          ? (e > 10
                              ? (A(
                                  "Trial "
                                    .concat(e, " - pausing for ")
                                    .concat(Math.floor(10), "s"),
                                ),
                                setTimeout(function () {
                                  t(n);
                                }, 1e4),
                                setTimeout(function () {
                                  e = 0;
                                }, 6e4))
                              : t(n),
                            e++)
                          : t(n);
                      };
                    })),
                  r("event", "optimize.callback", {
                    callback: function (t, e, n) {
                      A(
                        "Experiment with ID: "
                          .concat(e, " is on variant: ")
                          .concat(t),
                      ),
                        hj.event.signal(
                          "exp.go",
                          { experimentId: e, variantId: t, containerId: n },
                          !0,
                        );
                    },
                  });
              } else A('"google_optimize" object is not defined');
            },
            3e3,
            16,
          );
        },
      },
      D = {},
      P = window.optimizely;
    function M(t) {
      "applied" === t.name &&
        (hj.log.debug(
          "Optimizely - campaign decided; ready to tag experiments.",
          "integration",
        ),
        L());
    }
    function L() {
      var t, e, n, r, i;
      hj.log.debug(
        "Optimizely - attempting to tag active experiments.",
        "integration",
      ),
        hj.log.debug(
          "Optimizely - refreshing active experiment variation map.",
          "integration",
        ),
        (D = {}),
        P &&
          "get" in P &&
          ((r = P.get("state")),
          (i = P.get("data")),
          r.getActiveExperimentIds().forEach(function (o) {
            (e = i.experiments[o].name || o),
              (t = r.getVariationMap()[o]),
              (n = t.name || t.id),
              (D[e] = n);
          })),
        (function () {
          hj.log.debug("Optimizely - looking for tags.", "integration");
          var t = [];
          for (var e in D)
            hj.event.signal("exp.opt", { experimentId: e, variantId: D[e] }),
              t.push(e + "/" + D[e]);
          return (
            t.length > 0
              ? hj.log.debug(
                  "Optimizely - found " + t.length + " tags.",
                  "integration",
                  t,
                )
              : hj.log.debug("Optimizely - no tags found.", "integration"),
            t
          );
        })().forEach(function (t) {
          hj("event", t);
        });
    }
    var U = {
        setup: function () {
          void 0 !== P &&
          "function" == typeof P.push &&
          "function" == typeof P.get &&
          void 0 !== P.get("state") &&
          void 0 !== P.get("data")
            ? (hj.log.debug(
                "Optimizely - listening for campaignDecided event.",
                "integration",
              ),
              (P = window.optimizely || []).push({
                type: "addListener",
                filter: { name: "campaignDecided" },
                handler: M,
              }),
              L())
            : hj.log.debug("`window.optimizely` is not ready", "integration");
        },
      },
      H = n(5),
      q = function () {
        return null !== H.a.items.HUBSPOT_UTK.get();
      },
      V = {
        setup: function () {
          g(
            q,
            function (t) {
              if (t) {
                var e = H.a.items.HUBSPOT_UTK.get();
                hj.log.debug("HubSpot UTK found: ".concat(e)),
                  hj.event.signal("int.hubspot", { utk: e });
              }
            },
            5e3,
            5,
          );
        },
      };
    var z = {
        setup: function () {
          void 0 !== window.ub &&
          void 0 !== window.ub.page &&
          void 0 !== window.ub.page.variantId
            ? (hj.log.debug(
                "Unbounce experiment in page '"
                  .concat(window.ub.page.name, "' is on variant '")
                  .concat(window.ub.page.variantId, "'"),
                "integration",
                window.ub,
              ),
              hj.event.signal("exp.ub", {
                experimentId: window.ub.page.name,
                variantId: window.ub.page.variantId,
              }),
              hj(
                "event",
                ""
                  .concat(p(window.ub.page.name), "-variant-")
                  .concat(window.ub.page.variantId),
              ))
            : hj.log.debug("Unbounce experiment not found", "integration");
        },
      },
      W = d("mixpanel.send_events"),
      B = {
        setup: function () {
          g(
            function () {
              return void 0 !== window.mixpanel;
            },
            function (t) {
              t
                ? (W("Registering mixpanel hook"),
                  window.mixpanel.set_config({
                    hooks: {
                      before_send_events: function (t) {
                        var e = p(t.event);
                        return (
                          W("sending mixpanel payload: ".concat(t.event)),
                          hj("event", "MP_".concat(e)),
                          hj.event.signal("int.mp", { event: e }),
                          t
                        );
                      },
                    },
                  }))
                : W("mixpanel global object not found");
            },
            3e3,
            5,
          );
        },
      },
      F = d("ab-tasty", "integration");
    function G() {
      return (
        void 0 !== window.ABTasty &&
        void 0 !== window.ABTasty.hitServiceNotifierSubscribe
      );
    }
    var Y = {
        setup: function () {
          function t(t) {
            if (
              "CAMPAIGN" === t.type &&
              t.data &&
              t.data.caname &&
              t.data.vaname
            ) {
              var e = t.data,
                n = e.caname,
                r = e.vaname;
              F(
                "AB Tasty campaign '"
                  .concat(n, "' is on variant '")
                  .concat(r, "'"),
                t,
              ),
                hj.event.signal(
                  "exp.abt",
                  { experimentId: n, variantId: r },
                  !0,
                );
              var i = p("".concat(n, "-").concat(r));
              hj("event", i), F("Sending event '".concat(i, "'"));
            } else F("Invalid AB Tasty event", t);
          }
          g(
            G,
            function (e) {
              e
                ? (F("AB Tasty global object found"),
                  window.ABTasty.hitServiceNotifierSubscribe(t, "CAMPAIGN", {
                    withHitHistory: !0,
                  }))
                : F("AB Tasty global object not found");
            },
            2e3,
            10,
          );
        },
      },
      K = d("kissmetrics", "integration"),
      X = function () {
        return void 0 !== window.KM && void 0 !== window.KM.i;
      },
      J = {
        setup: function () {
          g(
            X,
            function (t) {
              if (t) {
                var e = window.KM.i();
                K("Kissmetrics User ID found: ".concat(e)),
                  hj("identify", null, { kissmetrics_id: e });
              }
            },
            5e3,
            5,
          );
        },
      };
    hj.tryCatch(function () {
      hj.loader.registerModule(
        "IntegrationsModule",
        ((hj.integrations = hj.tryCatch(function () {
          return {
            optimizely: U,
            google_analytics: {
              forwardEvents: j,
              sendHotjarUserId: I,
              sendHotjarUserIdGtag: T,
            },
            google_optimize: x,
            hubspot: V,
            unbounce: z,
            mixpanel: B,
            abTasty: Y,
            kissmetrics: J,
          };
        }, "integrations")()),
        {
          run: hj.tryCatch(function () {
            var t = hj.settings.integrations;
            t &&
              (t.optimizely &&
                t.optimizely.tag_recordings &&
                hj.integrations.optimizely.setup(),
              t.google_analytics &&
                (hj.integrations.google_analytics.forwardEvents.setup(
                  t.google_analytics,
                ),
                t.google_analytics.send_hotjar_id &&
                  (hj.integrations.google_analytics.sendHotjarUserId.setup(
                    t.google_analytics,
                  ),
                  hj.integrations.google_analytics.sendHotjarUserIdGtag.setup(
                    t.google_analytics,
                  ))),
              t.google_optimize &&
                t.google_optimize.tag_recordings &&
                hj.integrations.google_optimize.setup(),
              t.unbounce &&
                t.unbounce.tag_recordings &&
                hj.integrations.unbounce.setup(),
              t.mixpanel &&
                t.mixpanel.send_events &&
                hj.integrations.mixpanel.setup(),
              t.hubspot &&
                t.hubspot.enabled &&
                t.hubspot.send_recordings &&
                hj.integrations.hubspot.setup(),
              t.abtasty &&
                t.abtasty.tag_recordings &&
                hj.integrations.abTasty.setup(),
              t.kissmetrics &&
                t.kissmetrics.send_user_id &&
                hj.integrations.kissmetrics.setup());
          }),
        }),
        !1,
      );
    }, "integrations")();
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "eventStream", function () {
        return O;
      });
    n(103), n(116);
    var r = n(57),
      i = Object.freeze({
        MOUSE_CLICK: r.a.MOUSE_CLICK,
        MOUSE_MOVE: r.a.MOUSE_MOVE,
        SCROLL: r.a.SCROLL,
        VIEWPORT_RESIZE: r.a.VIEWPORT_RESIZE,
        KEY_PRESS: r.a.KEY_PRESS,
        SELECT_CHANGE: r.a.SELECT_CHANGE,
        INPUT_CHOICE_CHANGE: r.a.INPUT_CHOICE_CHANGE,
        CLIPBOARD: r.a.CLIPBOARD,
      }),
      o = n(6);
    function a(t) {
      return "".concat(parseFloat(t / 1048576).toFixed(2));
    }
    var s = n(92),
      c = n(5);
    function u(t) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var l = hj.tryCatch(function (t) {
        var e,
          n,
          l,
          h,
          d = {},
          f = "",
          g = void 0,
          p = null,
          v = !1,
          m = o.a.now(),
          y = !1;
        d.events = [];
        var j = s.create();
        (d.storePageContent = function (e, n) {
          hj.log.warnIfEmpty(e, "tryStorePageContent: content"),
            hj.log.warnIfEmpty(n, "tryStorePageContent: urlMD5"),
            t.storePageContent(
              e,
              function (t) {
                var e = t.content_uuid;
                e
                  ? (hj.globals.set("pageContentUUID", e),
                    (v = !0),
                    j.set("pageContent", { uuid: e, md5: n }))
                  : hj.log.warn(
                      "Expecting res.content_uuid but it was not found!",
                    );
              },
              function (t) {
                if (413 === t.status) {
                  var n = a(e.length);
                  d.write(
                    "content_size_too_large",
                    { size: n, source: "page_visit", timestamp: o.a.now() },
                    !1,
                  );
                }
              },
            );
        }),
          (d.reportPageContent = function (t) {
            j.ready("pageContent", function (e) {
              if (e.get("pageContent")) {
                var n = e.get("pageContent"),
                  i = n.uuid,
                  o = n.md5,
                  a = hj.dom.getCSSURLs().map(function (t) {
                    return {
                      content_type: 2,
                      url: t,
                      url_hash: hj.md5(hj.b64EncodeUnicode(t)),
                    };
                  });
                hj.log.warnIfEmpty(t, "sendReportContent: pageVisitKey"),
                  hj.log.warnIfEmpty(i, "sendReportContent: uuid"),
                  hj.log.warnIfEmpty(o, "sendReportContent: md5"),
                  hj.log.warnIfEmpty(a, "sendReportContent: webResourceInfos");
                var s,
                  c,
                  u,
                  l = {
                    page_content_url_md5: o,
                    page_content_uuid: i,
                    web_resource_infos: a,
                    content_submitted: v,
                  };
                d
                  .writeNewFrame(
                    ((s = {}),
                    (c = r.a.REPORT_CONTENT),
                    (u = l),
                    c in s
                      ? Object.defineProperty(s, c, {
                          value: u,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (s[c] = u),
                    s),
                    t,
                  )
                  .flush(),
                  (v = !1);
              }
            });
          }),
          (d.clearPageContent = function () {
            hj.globals.set("pageContentUUID", void 0),
              j.set("pageContent", void 0);
          }),
          (d.setCurrentPageVisitKey = hj.tryCatch(function (t) {
            f !== t && ((f = t), e()), d.flush();
          }, "data")),
          (d.writeNewFrame = hj.tryCatch(function (t, n) {
            return e(n), d.write(t), e(), d;
          })),
          (d.write = hj.tryCatch(function (t, e, n) {
            var r;
            if (hj.isPreview) return d;
            if ("object" === u(t))
              return (
                hj.hq.each(t, function (t, e) {
                  d.write(t, e, !0);
                }),
                d
              );
            var i = t,
              a = w(i);
            if (!a && y) return d;
            if (!a && _()) return E(), d;
            a && (p = o.a.now()), a && y && C();
            var s = null !== (r = d.events.pop()) && void 0 !== r ? r : b(f);
            return (
              n ? (s[i] = e) : ((s[i] = s[i] || []), s[i].push(e)),
              d.events.push(s),
              d
            );
          }, "data")),
          (d.flush = hj.tryCatch(function () {
            var n = hj.globals.get("userId");
            if ((g && clearInterval(g), !n)) return e();
            var r = S(),
              i = r.length;
            if (i > 0)
              for (var o = 0; o < i; o++) {
                var a = r[o];
                t.send(a, n);
              }
            g = setInterval(d.flush, 1e3);
          }, "data"));
        var b = function (t) {
            return { pageVisitKey: t };
          },
          w = function (t) {
            return hj.hq.inArray(t, hj.hq.values(i));
          };
        e = hj.tryCatch(function (t) {
          var e = { pageVisitKey: t || f };
          d.events.push(e);
        }, "data");
        var S = hj.tryCatch(function () {
          for (
            var t, r = d.events.length, i = [], o = [], a = [], s = 0;
            s < r;
            s++
          )
            if (((t = d.events[s]), Object.keys(t).length > 1)) {
              var c = [];
              t.autotag_recording &&
                (c = t.autotag_recording.filter(function (t) {
                  return "rageclick" === t.name;
                })),
                c.length > 0
                  ? o.push(t)
                  : (t.clipboard && i.push(t.clipboard), a.push(n(t)));
            }
          var u = h(o, i);
          return (d.events = u.leftover), e(), [].concat(a, u.sendable);
        }, "data");
        (h = hj.tryCatch(function (t, e) {
          var r = [],
            i = [];
          return (
            hj.hq.each(e, function (e, n) {
              t = t.filter(function (t) {
                if ("copy" === n.action || "cut" === n.action)
                  return n.time - t.autotag_recording[0].time > 5e3;
              });
            }),
            hj.hq.each(t, function (t, e) {
              hj.time.getNow() - e.autotag_recording[0].time < 5e3
                ? r.push(e)
                : i.push(n(e));
            }),
            { leftover: r, sendable: i }
          );
        }, "data.filterRageClicks")),
          (n = hj.tryCatch(function (t) {
            return (
              hj.hq.each(t, function (e, n) {
                hj.hq.isFunction(n) && (t[e] = n());
              }),
              (t.page_visit_key = t.pageVisitKey),
              delete t.pageVisitKey,
              (t.viewport_id = hj.viewport.getId()),
              "object" === u(t.mutation) && (t.mutation = l(t.mutation)),
              t
            );
          }, "data")),
          (l = hj.tryCatch(function (t) {
            var e,
              n = "";
            if ("object" === u(t))
              return (
                hj.hq.each(t, function (r, i) {
                  "object" === u(i.c) &&
                    (hj.hq.each(i.c, function (i, o) {
                      "object" === u(o.attributes) &&
                        "string" == typeof o.attributes.style &&
                        (o.attributes.style === e &&
                          o.id === n &&
                          (t[r].c[i] = null),
                        (e = o.attributes.style),
                        (n = o.id));
                    }),
                    (t[r].c = t[r].c.filter(function (t) {
                      return t;
                    })),
                    t[r].c.length || delete t[r].c),
                    void 0 === t[r].a &&
                      void 0 === t[r].b &&
                      void 0 === t[r].c &&
                      void 0 === t[r].d &&
                      (t[r] = null);
                }),
                t.filter(function (t) {
                  return t;
                })
              );
          }, "data"));
        var _ = function () {
            var t,
              e = null !== (t = p) && void 0 !== t ? t : m;
            return o.a.now() - e > 18e5;
          },
          E = function () {
            sessionStorage.removeItem("_hjRecordingEnabled"),
              sessionStorage.removeItem("_hjRecordingLastActivity"),
              (y = !0);
          },
          C = function () {
            (y = !1),
              c.a.items.SESSION_RESUMED.set(!0),
              hj._init.reinit(window.location.href, !0);
          };
        return d;
      }),
      h = n(117),
      d = n(12),
      f = n(37),
      g = {
        maxRetries: 5,
        delay: 3e3,
        firstAttemptDelay: 0,
        baseExponent: 2,
        state: "wsRetrySuccess",
      };
    function p(t) {
      var e = this;
      if (!t) throw new Error("HotjarWebSocket requires a flush callback");
      (this._connected = !1),
        (this._connecting = !1),
        (this._isReconnecting = !1),
        (this._closedPermanently = !1),
        (this.sessionTimedOutDueToInactivity = !1),
        (this._finished = !1),
        (this._pingInterval = 3e4),
        (this._pingIntervalId = void 0),
        (this._sessionInactiveInterval = 18e5),
        (this._lastUserActivityTime = new Date().getTime()),
        (this._unloadTimeoutStarted = !1),
        (this._ws = null),
        (this._wsUrl = ""),
        (this._flush = t),
        (this._msgPrefix = "{}\n"),
        (this._clearPings = function () {
          clearInterval(e._pingIntervalId);
        }),
        (this._closeConnection = function () {
          (e._connected = !1),
            (e._connecting = !1),
            (e._isReconnecting = !1),
            (e._closedPermanently = !0);
        });
    }
    (p.prototype.connect = hj.tryCatch(function () {
      if (this._sessionIsDisabled()) return !1;
      if (!this._connected && !this._connecting && !this._isReconnecting) {
        this._connecting = !0;
        var t = this;
        hj.globals.ready("userId", function () {
          t._wsUrl =
            _hjSettings.wsMockUrl ||
            "wss://".concat(Object(d.c)(), "/api/v2/client/ws");
          try {
            t._createAndConnect();
          } catch (t) {
            hj.log.debug(
              "The Web Socket connection was refused. \n ".concat(t),
            );
          }
        });
      }
      return !0;
    }, "data.HotjarWebSocket.connect")),
      (p.prototype.updateLastUserActivityTime = hj.tryCatch(function () {
        this._lastUserActivityTime = new Date().getTime();
      }, "data.HotjarWebSocket.updateLastUserActivityTime")),
      (p.prototype.disconnect = hj.tryCatch(function () {
        this._connected &&
          (hj.log.debug("Disconnecting Web Socket.", "websocket"),
          this._flush(),
          (this._connected = !1),
          (this._connecting = !1),
          (this._finished = !0),
          this.close());
      }, "data.HotjarWebSocket.disconnect")),
      (p.prototype.isConnected = hj.tryCatch(function () {
        return (
          !!this._connected &&
          (new Date().getTime() - this._lastUserActivityTime <=
            this._sessionInactiveInterval ||
            (sessionStorage.removeItem("_hjRecordingEnabled"),
            sessionStorage.removeItem("_hjRecordingLastActivity"),
            this.close(),
            (this.sessionTimedOutDueToInactivity = !0),
            !1))
        );
      }, "data.HotjarWebSocket.isConnected")),
      (p.prototype.send = hj.tryCatch(function (t) {
        this._sessionIsDisabled() ||
          (hj.log.debug("Sending data to Web Socket", "websocket", t),
          this._ws.send(t));
      }, "data.HotjarWebSocket.send")),
      (p.prototype.close = hj.tryCatch(function () {
        hj.log.debug("Closing Web Socket.", "websocket"), this._ws.close();
      }, "data.HotjarWebSocket.close")),
      (p.prototype.getBufferedAmount = hj.tryCatch(function () {
        return this._ws.bufferedAmount;
      }, "data.HotjarWebSocket.getBufferedAmount")),
      (p.prototype._sessionIsDisabled = hj.tryCatch(function () {
        return (
          this._closedPermanently ||
          this.sessionTimedOutDueToInactivity ||
          "1" === c.a.items.SESSION_TOO_LARGE.get()
        );
      }, "data.HotjarWebSocket._sessionIsDisabled")),
      (p.prototype._ping = hj.tryCatch(function () {
        this._connected &&
          (hj.log.debug("Pinging Web Socket", "websocket"),
          this._ws.send(this._msgPrefix + "ping"));
      }, "data.HotjarWebSocket._ping")),
      (p.prototype._createAndConnect = hj.tryCatch(function () {
        var t = this,
          e = this;
        if (e._finished)
          hj.log.debug("Unload event triggered, don't reconnect"),
            !1 === e._unloadTimeoutStarted &&
              ((e._unloadTimeoutStarted = !0),
              setTimeout(function () {
                (e._finished = !1), (e._unloadTimeoutStarted = !1);
              }, 1e3));
        else {
          hj.log.debug(
            "Connecting to Web Socket [" + this._wsUrl + "]",
            "websocket",
          );
          var n = function (e, n) {
              Object(f.a)(
                function () {
                  return r(e, n);
                },
                function () {
                  return t._closeConnection();
                },
                g,
              );
            },
            r = function (r) {
              var i,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              try {
                i = new WebSocket(e._wsUrl);
              } catch (t) {
                return void hj.log.debug(
                  "Web socket connection "
                    .concat(o ? "retry" : "", " error. \n ")
                    .concat(t),
                );
              }
              return (
                (i.onopen = function (t) {
                  if ((r(i), e._onOpen.call(e, t), o)) {
                    hj.globals.set(g.state, !0),
                      0 === i.bufferedAmount && e._ping.call(e);
                    var n = o.reason,
                      a = o.extraTags;
                    hj.metrics.timeEnd("time-to-reconnect", {
                      tag: { reason: n },
                      extraTags: a,
                    });
                  }
                }),
                (i.onmessage = function (t) {
                  e._onMessage.call(e, t);
                }),
                (i.onclose = function (e) {
                  t._clearPings(),
                    (t._connected = !1),
                    hj.log.debug("Web Socket closed.", "websocket");
                  var i = {
                    message: e.reason,
                    code: e.code,
                    wasClean: e.wasClean,
                  };
                  if (
                    (hj.metrics.count("session-interruption", {
                      tag: { reason: "websocket-close" },
                      extraTags: i,
                    }),
                    e.wasClean && 1012 != e.code)
                  )
                    t._closeConnection();
                  else if (
                    (hj.log.warn("Websocket close was unclean: " + e.code),
                    !t._isReconnecting)
                  ) {
                    var o = {
                      reason: e.wasClean ? "service-restart" : "unclean-close",
                      extraTags: i,
                    };
                    hj.metrics.timeStart("time-to-reconnect", {
                      reason: o.reason,
                    }),
                      (t._isReconnecting = !0),
                      (t._connecting = !0),
                      n(r, o);
                  }
                }),
                (i.onerror = function (t) {
                  hj.log.debug("onError was called.", "websocket", t),
                    hj.globals.set(g.state, !1),
                    this._connected &&
                      (this._clearPings(), (this._connected = !1));
                }),
                i
              );
            };
          (e._ws = r(function (t) {
            e._ws = t;
          })),
            window.addEventListener("beforeunload", this.disconnect, !1);
        }
      }, "data.HotjarWebSocket._createAndConnect")),
      (p.prototype._onOpen = hj.tryCatch(function () {
        hj.log.debug("Web Socket opened.", "websocket"),
          (this._pingIntervalId = setInterval(
            this._ping.bind(this),
            this._pingInterval,
          )),
          (this._connected = !0),
          (this._connecting = !1),
          (this._isReconnecting = !1),
          this._flush();
      }, "data.HotjarWebSocket._onOpen")),
      (p.prototype._onMessage = hj.tryCatch(function (t) {
        var e;
        try {
          e = JSON.parse(t.data);
        } catch (e) {
          throw (
            (hj.log.warn("Could not parse websocket message: " + t.data), e)
          );
        }
        switch (e.type) {
          case "SESSION_TOO_LARGE":
            hj.log.warn(
              "Session became too large. Will stop sending websocket data.",
            ),
              c.a.items.SESSION_TOO_LARGE.set("1"),
              this.disconnect();
            break;
          default:
            hj.log.warn("Received unknown websocket message: " + t.data);
        }
      }, "data.HotjarWebSocket._onMessage"));
    var v = function (t, e) {
      var n = function (t) {
        try {
          t &&
            hj.metrics.count("session-exception", {
              tag: { module: "compression" },
              extraTags: { message: t.message, name: t.name },
            }),
            e({ success: !1 });
        } catch (t) {}
      };
      try {
        if (
          !(function () {
            try {
              var t = new Set(hj.settings.features);
              return (
                "CompressionStream" in window &&
                t.has("client_script.compression.pc")
              );
            } catch (t) {
              return !1;
            }
          })()
        )
          return n();
        (function (t) {
          var e = t.getReader(),
            n = [],
            r = hj.metrics.timeWatcher();
          return e.read().then(function t(i) {
            var o = i.done,
              a = i.value;
            if ((r.start(), o)) {
              var s = n.reduce(function (t, e) {
                  return t + e.length;
                }, 0),
                c = new Uint8Array(s),
                u = 0;
              return (
                n.forEach(function (t) {
                  c.set(t, u), (u += t.length);
                }),
                { time: r.end(), compressed: c }
              );
            }
            return n.push(a), r.incr(), e.read().then(t);
          });
        })(
          new ReadableStream({
            start: function (e) {
              e.enqueue(t), e.close();
            },
          })
            .pipeThrough(new TextEncoderStream())
            .pipeThrough(new CompressionStream("gzip")),
        )
          .then(function (t) {
            var n = t.time,
              r = t.compressed;
            e({ success: !0, compressed: r, time: n });
          })
          .catch(n);
      } catch (t) {
        n(t);
      }
    };
    function m(t) {
      return (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var y = hj.tryCatch(function (t) {
        var e,
          n,
          u,
          l,
          d,
          f = {},
          g = "",
          y = void 0,
          j = !1;
        f.events = [];
        var b = s.create();
        (f.storePageContent = function (e, n, r) {
          hj.log.warnIfEmpty(e, "tryStorePageContent: content"),
            hj.log.warnIfEmpty(n, "tryStorePageContent: urlMD5");
          var i = e.length,
            s = function (r) {
              var s = r.success,
                c = r.compressed,
                u = r.time;
              s &&
                u &&
                hj.metrics.timeEnd("pc-compression-time", {
                  tag: { task: "process-chunks" },
                  incr: { total: u, flush: !0 },
                }),
                t.storePageContent(
                  s ? c : e,
                  function (t, r) {
                    if (
                      207 === (null == r ? void 0 : r.status) &&
                      "gzip error" === t[1]
                    )
                      return (
                        hj.metrics.distr("compression-malformed", {
                          task: "gzip",
                          value: i,
                          extraTags: { compressedLength: c.length },
                        }),
                        f.storePageContent(e, n, !0)
                      );
                    var o = t.content_uuid;
                    o
                      ? (hj.globals.set("pageContentUUID", o),
                        (j = !0),
                        b.set("pageContent", { uuid: o, md5: n }),
                        s &&
                          i &&
                          hj.metrics.distr("compression-ratio", {
                            task: "page-content",
                            value: parseFloat(Number(i / c.length).toFixed(1)),
                          }))
                      : hj.log.warn(
                          "Expecting res.content_uuid but it was not found!",
                        );
                  },
                  function (t) {
                    if (413 === t.status) {
                      var e = a(i);
                      f.write(
                        "content_size_too_large",
                        { size: e, source: "page_visit", timestamp: o.a.now() },
                        !1,
                      );
                    }
                  },
                  { query: s ? "gzip=1" : void 0 },
                );
            };
          r ? s({ success: !1 }) : v(e, s);
        }),
          (f.reportPageContent = function (t) {
            (j = !1),
              b.ready("pageContent", function (e) {
                var n = e.get("pageContent");
                if (n) {
                  var i = n.uuid,
                    o = n.md5,
                    a = hj.dom.getCSSURLs().map(function (t) {
                      return {
                        content_type: 2,
                        url: t,
                        url_hash: hj.md5(hj.b64EncodeUnicode(t)),
                      };
                    });
                  hj.log.warnIfEmpty(t, "sendReportContent: pageVisitKey"),
                    hj.log.warnIfEmpty(i, "sendReportContent: uuid"),
                    hj.log.warnIfEmpty(o, "sendReportContent: md5"),
                    hj.log.warnIfEmpty(
                      a,
                      "sendReportContent: webResourceInfos",
                    );
                  var s,
                    c,
                    u,
                    l = {
                      page_content_url_md5: o,
                      page_content_uuid: i,
                      web_resource_infos: a,
                      content_submitted: j,
                    };
                  f.writeNewFrame(
                    ((s = {}),
                    (c = r.a.REPORT_CONTENT),
                    (u = l),
                    c in s
                      ? Object.defineProperty(s, c, {
                          value: u,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (s[c] = u),
                    s),
                    t,
                  ).flush();
                }
              });
          }),
          (f.clearPageContent = function () {
            hj.globals.set("pageContentUUID", void 0),
              b.set("pageContent", void 0);
          }),
          (f.setCurrentPageVisitKey = hj.tryCatch(function (t) {
            g !== t && ((g = t), e()), f.flush();
          }, "data")),
          (f.writeNewFrame = hj.tryCatch(function (t, n) {
            return e(n), f.write(t), e(), f;
          })),
          (f.write = hj.tryCatch(function (t, e, n, r) {
            var i;
            if (hj.isPreview) return f;
            if ("object" === m(t))
              return (
                hj.hq.each(t, function (t, e) {
                  f.write(t, e, !0, r);
                }),
                f
              );
            var o = t;
            if (!r && !f._ws.connect()) {
              if (!f._ws.sessionTimedOutDueToInactivity || !S(o)) return f;
              c.a.items.SESSION_RESUMED.set(!0),
                (f._ws = new p(f.flush)),
                hj._init.reinit(window.location.href, !0),
                f._ws.connect();
            }
            var a = null !== (i = f.events.pop()) && void 0 !== i ? i : w(g);
            return (
              n ? (a[o] = e) : ((a[o] = a[o] || []), a[o].push(e)),
              f.events.push(a),
              f
            );
          }, "data")),
          (f.flush = hj.tryCatch(function () {
            var t,
              r,
              i = hj.globals.get("userId");
            if (
              (y && clearInterval(y),
              i || (hj.globals.ready("userId", f.flush), e()),
              f._ws.isConnected() && i)
            ) {
              if ((r = (t = n()).length) > 0) {
                var s = {
                  sid: Object(h.a)(),
                  uuid: i,
                  viewportid: hj.viewport.getId(),
                  site_id: hj.settings.site_id,
                  timestamp: o.a.now(),
                };
                (f._ws._msgPrefix = hj.hq.stringify(s) + "\n"),
                  _(t) && f._ws.updateLastUserActivityTime();
                for (var c = 0; c < r; c++) {
                  var u = t[c],
                    l = hj.hq.stringify(u);
                  if (l.length < 10485760) f._ws.send(f._ws._msgPrefix + l);
                  else {
                    var d = hj.hq.stringify({
                      content_size_too_large: {
                        size: a(l.length),
                        source: "flush",
                        timestamp: o.a.now(),
                      },
                      page_visit_key: u.page_visit_key,
                      viewport_id: u.viewport_id,
                    });
                    f._ws.send(f._ws._msgPrefix + d);
                  }
                }
              }
              y = setInterval(f.flush, 1e3);
            }
          }, "data")),
          (f._ws = new p(f.flush));
        var w = function (t) {
            return { pageVisitKey: t };
          },
          S = function (t) {
            return hj.hq.inArray(t, hj.hq.values(i));
          },
          _ = function (t) {
            return t.some(function (t) {
              return Object.keys(t).some(S);
            });
          };
        return (
          (e = hj.tryCatch(function (t) {
            var e = { pageVisitKey: t || g };
            f.events.push(e);
          }, "data")),
          (n = hj.tryCatch(function () {
            for (
              var t, n = f.events.length, r = [], i = [], o = [], a = 0;
              a < n;
              a++
            )
              if (((t = f.events[a]), Object.keys(t).length > 1)) {
                var s = [];
                t.autotag_recording &&
                  (s = t.autotag_recording.filter(function (t) {
                    return "rageclick" === t.name;
                  })),
                  s.length > 0
                    ? i.push(t)
                    : (t.clipboard && r.push(t.clipboard), o.push(u(t)));
              }
            var c = d(i, r);
            return (f.events = c.leftover), e(), [].concat(o, c.sendable);
          }, "data")),
          (d = hj.tryCatch(function (t, e) {
            var n = [],
              r = [];
            return (
              hj.hq.each(e, function (e, n) {
                t = t.filter(function (t) {
                  if ("copy" === n.action || "cut" === n.action)
                    return n.time - t.autotag_recording[0].time > 5e3;
                });
              }),
              hj.hq.each(t, function (t, e) {
                hj.time.getNow() - e.autotag_recording[0].time < 5e3
                  ? n.push(e)
                  : r.push(u(e));
              }),
              { leftover: n, sendable: r }
            );
          }, "data.filterRageClicks")),
          (u = hj.tryCatch(function (t) {
            return (
              hj.hq.each(t, function (e, n) {
                hj.hq.isFunction(n) && (t[e] = n());
              }),
              (t.page_visit_key = t.pageVisitKey),
              delete t.pageVisitKey,
              (t.viewport_id = hj.viewport.getId()),
              "object" === m(t.mutation) && (t.mutation = l(t.mutation)),
              t
            );
          }, "data")),
          (l = hj.tryCatch(function (t) {
            var e,
              n = "";
            if ("object" === m(t))
              return (
                hj.hq.each(t, function (r, i) {
                  "object" === m(i.c) &&
                    (hj.hq.each(i.c, function (i, o) {
                      "object" === m(o.attributes) &&
                        "string" == typeof o.attributes.style &&
                        (o.attributes.style === e &&
                          o.id === n &&
                          (t[r].c[i] = null),
                        (e = o.attributes.style),
                        (n = o.id));
                    }),
                    (t[r].c = t[r].c.filter(function (t) {
                      return t;
                    })),
                    t[r].c.length || delete t[r].c),
                    void 0 === t[r].a &&
                      void 0 === t[r].b &&
                      void 0 === t[r].c &&
                      void 0 === t[r].d &&
                      (t[r] = null);
                }),
                t.filter(function (t) {
                  return t;
                })
              );
          }, "data")),
          f
        );
      }),
      j = n(112);
    function b(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var w = Object(j.Resource)("/", { post: ["POST"] }, function () {
        return (
          _hjSettings.contentHost ||
            (_hjSettings.contentHost = "content.hotjar.io"),
          _hjSettings.contentHost
        );
      }),
      S = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.pageContentResource = w);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "storePageContent",
              value: function (t, e, n, r) {
                return this.pageContentResource.post(t, e, n, {
                  contentType: "text",
                  query: null == r ? void 0 : r.query,
                });
              },
            },
            { key: "send", value: function () {} },
          ]) && b(e.prototype, n),
          r && b(e, r),
          t
        );
      })(),
      _ = n(94);
    function E(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function C(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var O,
      I = { maxRetries: 5, delay: 4e3, state: "eventsRetrySuccess" },
      N = Object(j.Resource)("/", { post: ["POST"] }, function () {
        return (
          _hjSettings.contentHost ||
            (_hjSettings.contentHost = "content.hotjar.io"),
          _hjSettings.contentHost
        );
      }),
      T = (function () {
        function t(e, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
          E(this, t),
            (this.viewport = e),
            (this.siteId = n),
            (this.maxRetries = r);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "storePageContent",
              value: function (t, e, n) {
                return N.post(t, e, n, { contentType: "text" });
              },
            },
            {
              key: "send",
              value: function (t, e) {
                var n =
                    (_hjSettings.eventsHost ||
                      (_hjSettings.eventsHost = "https://events.hotjar.io"),
                    _hjSettings.eventsHost + "/"),
                  r = {
                    uuid: e,
                    viewportid: this.viewport.getId(),
                    site_id: this.siteId,
                  },
                  i = hj.hq.stringify(r) + "\n" + hj.hq.stringify(t),
                  o = !1,
                  a = function t() {
                    return Object(_.post)(
                      n,
                      i,
                      function (t) {
                        hj.log.debug(
                          "Events sent successfully to host",
                          "events",
                          t,
                        ),
                          (o = !1),
                          hj.globals.set(I.state, !0);
                      },
                      function () {
                        hj.log.debug(
                          "Events failed to send to host, retrying",
                          "events",
                        ),
                          hj.globals.set(I.state, !1),
                          o || ((o = !0), Object(f.a)(t, null, I));
                      },
                      { contentType: "text" },
                    );
                  };
                a();
              },
            },
          ]) && C(e.prototype, n),
          r && C(e, r),
          t
        );
      })();
    (O = hj.features.hasFeature("ingestion.http")
      ? l(new T(hj.viewport, hj.settings.site_id))
      : y(new S())),
      (hj.eventStream = O);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(69),
      i = n(124),
      o = n(41),
      a = n(2),
      s = n(32),
      c = n(21),
      u = n(20),
      l = !1;
    function h(t, e) {
      return !!t && (t.startsWith ? t.startsWith(e) : Object(c.a)(t, e));
    }
    var d = "https://".concat(hj.insightsHost);
    try {
      hj.ui.retaker = Object.freeze({
        loadWidget: function () {
          document.getElementById(u.a) ||
            ((l = !1),
            window.opener.postMessage(
              { type: u.e.ready, origin: window.location.origin },
              d,
            ));
        },
      });
    } catch (t) {}
    var f = function () {
        !(function () {
          if (hj.features.hasFeature("heatmap.continuous.manual_retaker")) {
            var t = "https://".concat(hj.insightsHost);
            if (h(document.referrer + "", t))
              if (!(!window.opener || !window.opener.postMessage)) {
                window.addEventListener("message", function (e) {
                  if (h(e.origin, t) && e.data && e.data.type === u.e.start) {
                    var n;
                    if (l) return;
                    sessionStorage.setItem(u.g, e.data.mode),
                      sessionStorage.setItem(
                        u.j,
                        JSON.stringify(
                          null !== (n = e.data.strings) && void 0 !== n
                            ? n
                            : "{}",
                        ),
                      ),
                      Object(o.a)(a.e.HEATMAP_RETAKER),
                      (l = !0);
                  }
                });
                try {
                  e();
                } catch (t) {
                  window.addEventListener("load", function () {
                    e();
                  });
                }
                window.addEventListener("popstate", function () {
                  n();
                }),
                  window.addEventListener("hashchange", function () {
                    n();
                  });
              }
          }
          function e() {
            window.opener.postMessage(
              { type: u.e.ready, origin: window.location.origin },
              t,
            );
          }
          function n() {
            document.getElementById(u.a) || ((l = !1), e());
          }
        })();
      },
      g = n(55),
      p = n(8),
      v = n(117),
      m = n(54),
      y = n(68),
      j = n(5),
      b = n(49),
      w = n(12),
      S = n(145),
      _ = n.n(S),
      E = n(146),
      C = n.n(E),
      O = n(6),
      I = n(19);
    function N(t) {
      return (N =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var T = {
        maxLogsPerPage: 100,
        _overflow: !1,
        _total: 0,
        init: function () {
          hj.tryCatch(function () {
            hj.settings.session_capture_console_consent &&
              (hj.isPreview ||
                (Object(y.a)("error-capture.run") &&
                  (window.addEventListener("error", T.onError),
                  window.addEventListener(
                    "unhandledrejection",
                    T.onUnhandledRejection,
                  ))));
          }, "error-capture.run")();
        },
        onError: function (t) {
          T.addError(t);
        },
        onUnhandledRejection: function (t) {
          T.addError({
            error: t.reason,
            message: "Uncaught (in promise)",
            filename: "",
            lineno: 0,
          });
        },
        addError: function (t) {
          hj.tryCatch(function () {
            var e = t.error,
              n = t.message,
              r = t.lineno,
              i = t.filename;
            if ((e || n || r || i) && !T.hasReachedOverflow()) {
              var o =
                  i && "object" === N(i) ? T.truncate(T.stringify(i), 100) : i,
                a = "object" === N(r) ? null : r,
                s =
                  e && e instanceof Error && e.stack
                    ? C.a.parse(e).slice(0, 20)
                    : null;
              Object(I.a)("error", {
                text: hj.privacy.suppressErrorMessage(T.getErrorMessage(t)),
                filename: o,
                lineno: a,
                trace: s,
                time: hj.time.getNow(),
                timestamp: O.a.now(),
              });
            }
          }, "error-capture.addError")();
        },
        getErrorMessage: function (t) {
          if (!t.error) return t.message || "";
          var e = T.truncate(T.stringify(t.error), 1e3);
          return t.message
            ? t.error instanceof Error && -1 !== t.message.indexOf(e)
              ? e.replace(e, t.message)
              : "".concat(t.message, " ").concat(e)
            : e;
        },
        stringify: function (t) {
          return t instanceof Error ? t.toString() : _()(t);
        },
        truncate: function (t, e) {
          return t.length <= e ? t : "".concat(t.substring(0, e - 3), "...");
        },
        hasReachedOverflow: function () {
          return !T._overflow && T._total < T.maxLogsPerPage
            ? (T._total++, !1)
            : ((T._overflow = !0), !0);
        },
      },
      k = n(118);
    function A(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function R(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? A(Object(n), !0).forEach(function (e) {
              x(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : A(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
      }
      return t;
    }
    function x(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    hj.tryCatch(function () {
      void 0 === hj.scriptLoaded &&
        ((hj._init = hj.tryCatch(function () {
          var t = {
            _sendVerifyInstallation: function (t) {
              var e = ""
                .concat(hj.apiUrlBase, "/client/sites/")
                .concat(hj.settings.site_id, "/verify-installation?sv=")
                .concat(_hjSettings.hjsv || 0);
              hj.ajax.post(
                e,
                {},
                hj.tryCatch(t, "init._sendVerifyInstallation"),
              );
            },
            _verifyInstallationAuto: function () {
              if (hj.settings.tracking_code_verified)
                hj.log.debug("Tracking code verified.", "init");
              else {
                hj.log.debug(
                  "Tracking code verified not found, updating first data.",
                  "init",
                );
                var t = ""
                  .concat(hj.apiUrlBase, "/client/sites/")
                  .concat(hj.settings.site_id, "/verify-installation/auto");
                hj.ajax.post(t, {}, void 0, function (e) {
                  hj.exceptions.log(
                    new Error(
                      "Url: ".concat(t, " - Status: ").concat(e.status),
                    ),
                    "init._verifyInstallationAuto",
                  );
                });
              }
            },
            _reportVerificationResults: function (t, e, n) {
              if (t) {
                var r = ""
                    .concat(hj.apiUrlBase, "/tcvs/verification/")
                    .concat(t, "/result"),
                  i = R(R({}, n && { error_detail: n }), {}, { status: e });
                hj.ajax.post(
                  r,
                  i,
                  function () {
                    hj.tcVerificationResultsSent = !0;
                  },
                  function (t) {
                    t &&
                      400 !== t.status &&
                      404 !== t.status &&
                      hj.exceptions.log(
                        new Error("TCVS endpoint failed"),
                        "init._reportVerificationResults",
                      ),
                      (hj.tcVerificationResultsSent = !0);
                  },
                );
              }
            },
            _verifyInstallation: function () {
              var e,
                n = hj.url.getParameter("hjVerifyInstall"),
                i = hj.url.getParameter("hjVerifyUUID"),
                o = function () {
                  Object(r.a)({
                    title: "Hotjar installation invalid",
                    message:
                      "The tracking code you are trying to verify does not match the one installed on this page. Please make sure you install the correct tracking code provided for this site.",
                    status: "bad",
                  }),
                    t._reportVerificationResults(i, "wrong_code", {
                      expected: String(hj.verifyInstall),
                      actual: String(hjSiteSettings.site_id),
                    });
                  var e = "Passed Site ID: "
                    .concat(hj.verifyInstall, " != Configured Site ")
                    .concat(hj.settings.site_id);
                  hj.exceptions.log(new Error(e), "init._verifyInstallation");
                };
              try {
                e = sessionStorage.getItem("hjVerifyInstall");
              } catch (t) {}
              if (n || e) {
                hj.verifyInstall = parseInt(n || e);
                try {
                  sessionStorage.setItem("hjVerifyInstall", n || e);
                } catch (t) {}
                if (
                  window.hjBootstrapCalled &&
                  window.hjBootstrapCalled.length > 1
                ) {
                  var a,
                    s = window.hjBootstrapCalled.filter(function (t, e) {
                      return window.hjBootstrapCalled.indexOf(t) === e;
                    }),
                    c =
                      "You have " +
                      window.hjBootstrapCalled.length +
                      " tracking scripts installed on your site. ",
                    u =
                      2 === window.hjBootstrapCalled.length
                        ? "script as this"
                        : "scripts as these",
                    l = !!window.dataLayer;
                  s.length > 1
                    ? ((a =
                        c +
                        "Please remove the duplicate " +
                        u +
                        " will cause issues."),
                      Object(r.a)({
                        title: "Multiple different Hotjar scripts detected",
                        message: a,
                        status: "bad",
                      }),
                      t._reportVerificationResults(i, "multiple_codes", {
                        expected: String(hj.verifyInstall),
                        actual: s,
                        gtm: !1,
                      }))
                    : l
                    ? ((a =
                        c +
                        "If you've installed Hotjar through GTM - please remove the duplicate " +
                        u +
                        " will cause issues."),
                      t._reportVerificationResults(i, "multiple_codes", {
                        expected: String(hj.verifyInstall),
                        actual: s,
                        gtm: !0,
                      }),
                      Object(r.a)({
                        title: "Multiple Hotjar scripts detected",
                        message: a,
                        status: "bad",
                      }))
                    : hj.verifyInstall === hj.settings.site_id
                    ? ((a =
                        c +
                        "This will not affect data collection, but we do suggest removing redundant scripts."),
                      t._reportVerificationResults(i, "warning", {
                        expected: String(hj.verifyInstall),
                        reason: "multiple scripts",
                      }),
                      Object(r.a)({
                        title: "Multiple Hotjar scripts detected",
                        message: a,
                        status: "warning",
                      }))
                    : o();
                  var h =
                    "Passed Site ID: " +
                    hj.verifyInstall +
                    " contains multiple scripts " +
                    window.hjBootstrapCalled.join(", ");
                  hj.exceptions.log(new Error(h), "init._verifyInstallation");
                } else
                  hj.verifyInstall === hj.settings.site_id
                    ? (t._sendVerifyInstallation(function (t) {
                        t.success ||
                          hj.exceptions.log(
                            new Error("Verify installation endpoint failed"),
                            "init._verifyInstallation",
                          );
                      }),
                      Object(r.a)({
                        title: "Hotjar installation verified",
                        message:
                          "The Hotjar tracking code has been properly installed on this page. Browse your site in this window if you wish to verify installation on any other pages.",
                        status: "good",
                      }),
                      t._reportVerificationResults(i, "ok"))
                    : o();
              }
            },
          };
          return (
            (t._browserIsSupported = hj.tryCatch(function () {
              return (
                !(Object(w.d)() < 11) ||
                (hj.log.debug("IE < 11 is not supported.", "init"),
                "1" === hj.url.getParameter("hjVerifyInstallation") &&
                  Object(r.a)({
                    title: "Hotjar installation cannot be verified.",
                    message: "Sorry – your browser is not supported.",
                    status: "bad",
                  }),
                !1)
              );
            }, "init")),
            (t._checkDebug = hj.tryCatch(function () {
              var t = hj.url.getParameter(j.a.items.DEBUG_FLAG.getKey());
              t &&
                ("1" === t || "true" === t ? hj.debug.on(!0) : hj.debug.off()),
                "true" === j.a.items.DEBUG_FLAG.get() && hj.debug.on(!1);
            }, "init")),
            (t._canRun = hj.tryCatch(function () {
              return (
                -1 === navigator.userAgent.indexOf("Hotjar") &&
                (j.a.canUseCookies()
                  ? j.a.canUseLocalStorage()
                    ? !!j.a.canUseSessionStorage() ||
                      (hj.log.debug("sessionStorage is not available", "init"),
                      !1)
                    : (hj.log.debug("localStorage is not available", "init"),
                      !1)
                  : (hj.log.debug("Cookies are not enabled"), !1))
              );
            }, "init")),
            (t._configureStateChangeListenMode = function () {
              var t = "manual";
              hj.settings &&
                hj.settings.state_change_listen_mode &&
                (t = hj.settings.state_change_listen_mode),
                hj.locationListener.setMode(t);
            }),
            (t.run = hj.tryCatch(function (e) {
              (hj.currentUrl = e),
                (hj.scriptLoaded = !0),
                t._browserIsSupported() &&
                  (t._checkDebug(),
                  t._canRun() ? t._run(e) : hj._init._verifyInstallation());
            }, "init")),
            (t._run = hj.tryCatch(function (e) {
              if (
                (("1" !== navigator.doNotTrack &&
                  "1" !== window.doNotTrack &&
                  "1" !== navigator.msDoNotTrack) ||
                  (hj.log.debug("Visitor has opted out of tracking.", "init"),
                  (hj.optOut = !0)),
                hj.log.debug("Site settings", "init", hj.settings),
                (function (t) {
                  k.a.set(t);
                })(hj.currentUrl),
                f(),
                hj.settings.site_id)
              ) {
                hj.isIncludedInSample = y.a;
                var n = Object(m.a)();
                Object(m.b)(n),
                  n.existing || p.a.setFirstSeen(),
                  b.userAttributes.init(),
                  T.init(),
                  t._configureStateChangeListenMode(),
                  t._runPage(e),
                  t._verifyInstallationAuto(),
                  t._verifyInstallation(),
                  hj.command.activate(),
                  "1" === hj.url.getParameter("hjIncludeInSample") &&
                    Object(r.a)({
                      title: "Hotjar tracking active.",
                      message: "Hotjar tracking is active for your session.",
                      status: "good",
                    });
              } else
                hj.log.warn(
                  "Script execution for halted due to no site id: ".concat(
                    window.location.href,
                  ),
                  "init",
                );
            }, "init")),
            (t.reinit = hj.tryCatch(function (e, n) {
              (hj.currentUrl = e),
                hj.widget.emptyMatchingWidgets(),
                hj.metrics.reset(),
                n &&
                  (j.a.items.HAS_CACHED_USER_ATTRIBUTES.clear(),
                  j.a.localStorage.USER_ATTRIBUTES.clear(),
                  g.a.reset()),
                t._runPage(e);
            }, "init")),
            (t._runPage = hj.tryCatch(function (t) {
              Object(v.b)(),
                hj.optOut ||
                  (Object(i.b)(t) ||
                    (Object(y.a)("init._runPage") && hj.visitData.track(t)),
                  hj.visitData.trackView()),
                hj.hq.each(hj.loader.getModules(), function (e, n) {
                  (hj.optOut && !n.nonTracking) ||
                    (hj.log.debug("Running module", "init", n.name),
                    n.module.run(t));
                }),
                hj.widget.runLatestMatchingWidget(),
                hj.widget.runInlineEmbeddedWidgets();
            }, "init")),
            t
          );
        }, "init")()),
        hj.hq(document).ready(function () {
          hj.log.debug("Document is ready. Initializing...", "init"),
            (hj.scriptContextId = Object(s.a)()),
            hj._init.run(location.href),
            (hj.metrics.getConfig("browser").inLab ||
              hj.metrics.getState("isMetricsEnabled")) &&
              Object(o.a)(a.e.BROWSER_PERF);
        }));
    }, "init")();
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(49),
      i = n(111),
      o = n(54);
    function a(t, e) {
      return hj.features.hasFeature("ask.separate_service")
        ? e
        : "https://".concat(t, "/");
    }
    function s(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return c(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return c(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var u = (function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "https://ask.hotjar.io/",
        n = a(t, e);
      return { v1: "".concat(n, "api/v1"), v2: "".concat(n, "api/v2") };
    })(hj.host, _hjSettings.askUrl);
    n(202),
      (function () {
        try {
          hj.request = (function () {
            var t = {},
              e = { granted: null, callbacks: [], inProgress: !1 },
              n = Object(o.a)().id,
              a = [],
              c = !1;
            function l(t, e, n, r) {
              a.push([t, e, n, r]),
                c ||
                  (function t() {
                    if (0 !== a.length) {
                      c = !0;
                      var e = s(a.shift(), 4),
                        n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3];
                      hj.ajax.post(
                        n,
                        r,
                        function (e) {
                          try {
                            i && i(e);
                          } finally {
                            t();
                          }
                        },
                        function (e) {
                          try {
                            o && o(e);
                          } finally {
                            t();
                          }
                        },
                      );
                    } else c = !1;
                  })();
            }
            function h(t, e, i) {
              var o = hj.ui.getWindowSize();
              (e.window_width = e.window_width || o.width),
                (e.window_height = e.window_height || o.height),
                (e.user_id = n),
                (e.url = document.location.href),
                r.userAttributes.flush(function (n, o, a) {
                  n
                    ? (e.identify_user_id =
                        r.userAttributes.get("user_id") || null)
                    : ((e.identify_user_id = o), (e.identify_attributes = a)),
                    l(t, e, function (t) {
                      i && i(t);
                    });
                });
            }
            return (
              (t.getConsentGranted = hj.tryCatch(function (t) {
                var r,
                  i = "?";
                if (null !== e.granted && t) t(e.granted);
                else if ((t && e.callbacks.push(t), !e.inProgress)) {
                  var o = hj.globals.get("userId");
                  (i += "user_id=" + (o || n)),
                    (e.inProgress = !0),
                    hj.ajax.get(
                      ""
                        .concat(hj.apiUrlBase, "/sites/")
                        .concat(hj.settings.site_id, "/consent")
                        .concat(i),
                      function (t) {
                        for (
                          e.granted =
                            !!t.success && -1 !== t.scopes.indexOf("associate"),
                            e.inProgress = !1;
                          (r = e.callbacks.pop());

                        )
                          hj.tryCatch(r, "ConsentData")(e.granted);
                      },
                      function () {
                        for (
                          e.granted = !1, e.inProgress = !1;
                          (r = e.callbacks.pop());

                        )
                          hj.tryCatch(r, "ConsentData")(e.granted);
                      },
                    );
                }
              }, "hj.request.getConsentGranted")),
              (t.grantConsent = hj.tryCatch(function (t, r) {
                var i = hj.globals.get("userId");
                (t.user_id = i || n),
                  (t.action = "grant_for_response"),
                  l(
                    ""
                      .concat(hj.apiUrlBase, "/sites/")
                      .concat(hj.settings.site_id, "/consent/associate"),
                    t,
                    function (t) {
                      (e.granted = !!t.success),
                        r && hj.tryCatch(r, "GrantConsent")(e.granted);
                    },
                    function () {
                      e.granted = !1;
                    },
                  );
              }, "hj.request.getConsent")),
              (t.saveFeedbackResponse = hj.tryCatch(function (t, e, n) {
                (t.action = "feedback_widget_response"),
                  hj.event.signal("feedback.send", { id: e }),
                  h(
                    ""
                      .concat(u.v1, "/client/sites/")
                      .concat(hj.settings.site_id, "/feedback/")
                      .concat(e),
                    t,
                    function (r) {
                      var i;
                      if (
                        (hj.tryCatch(n, "Data")(r),
                        null === (i = t.response) || void 0 === i
                          ? void 0
                          : i.emotion)
                      ) {
                        var o = {
                          emotion: t.response.emotion,
                          id: e,
                          response_id: r.feedback_response_id,
                        };
                        hj.event.signal("feedback.sentiment", o);
                      }
                    },
                  );
              }, "data")),
              (t.savePollResponse = hj.tryCatch(function (t, e, n) {
                var r = hj.widget.pollsResponsesUUID[t];
                e.action = "create_or_update_poll_response";
                var o = i.sessionEvents.get();
                o && (e.events = hj.hq.stringify(o)),
                  h(
                    ""
                      .concat(u.v2, "/client/sites/")
                      .concat(hj.settings.site_id, "/poll/")
                      .concat(t, "/response/")
                      .concat(r),
                    e,
                    function (e) {
                      e.is_new_response &&
                        hj.event.signal("poll.send", {
                          id: t,
                          response_id: e.poll_response_id,
                        }),
                        null == n || n(e);
                    },
                  );
              }, "data")),
              (t.completePollResponse = hj.tryCatch(function (t, e) {
                var n = hj.widget.pollsResponsesUUID[t];
                l(
                  ""
                    .concat(u.v2, "/client/sites/")
                    .concat(hj.settings.site_id, "/poll/")
                    .concat(t, "/response/")
                    .concat(n),
                  {
                    action: "finish_poll_response",
                    completion_time_from_engagement_ms: e.fromEngagement,
                    completion_time_from_render_ms: e.fromRender,
                  },
                );
              }, "data")),
              t
            );
          })();
        } catch (t) {
          hj.exceptions.log(t, "hj.request");
        }
      })(),
      n(112),
      n(94),
      n(224),
      n(92),
      n(203);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(12),
      i = n(54),
      o = {
        getAsNumber: function () {
          var t = Object(i.a)().id;
          return (parseInt(t.slice(-10), 16) + 1) / Math.pow(2, 40);
        },
        compareRatio: hj.tryCatch(function (t, e) {
          return o.getAsNumber() * (e ? 100 : 1) <= t;
        }, "identifier.compareRatio"),
      },
      a = [
        "af",
        "ar",
        "bg",
        "ca",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fa",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "mis",
        "nb",
        "nl",
        "pl",
        "pt_BR",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sq",
        "sr",
        "sv",
        "sw",
        "th",
        "tl",
        "tr",
        "uk",
        "vi",
        "zh_CN",
        "zh_TW",
      ];
    hj.tryCatch(function () {
      var t, e, n, i, s, c, u;
      (hj.widget =
        ((n = ["ar", "fa", "he"]),
        (i = []),
        (s = []),
        (c = []),
        (u = !1),
        ((e = {}).ctrl = void 0),
        (e.data = void 0),
        (e.model = {}),
        (e.activeLanguageDirection = "ltr"),
        (e.widgetAttributePrefix = "_hj-f5b2a1eb-9b07"),
        (e.ctaLinks = {
          feedback:
            "https://www.hotjar.com/incoming-feedback?utm_source=client&utm_medium=incoming_feedback&utm_campaign=insights",
          polls:
            "https://www.hotjar.com/feedback-surveys?utm_source=client&utm_medium=poll&utm_campaign=insights",
          surveys:
            "https://www.hotjar.com/?utm_source=client&utm_medium=survey&utm_campaign=insights",
        }),
        (e.getActiveLanguage = function () {
          var e;
          return null !== (e = t) && void 0 !== e ? e : "en";
        }),
        (e.addMatchingWidget = function (t, n, r, a, c, l, h) {
          if (void 0 === a || hj.isPreview || o.compareRatio(a, !0)) {
            var d = {
              type: t,
              id: n,
              created: r,
              runCallback: c,
              removeCallback: l,
              isInlineEmbedded: h,
            };
            if (h) return s.push(d);
            u ? e.setActiveWidget(d) : i.push(d);
          } else
            hj.log.debug(
              "Session identifier not in targeting percentage. Widget will not match.",
              "targeting",
            );
        }),
        (e.clearWidget = hj.tryCatch(function () {
          hj.hq(
            "#_hj_poll_container,#_hj_feedback_container,._hj-widget-container",
          ).length > 0 &&
            (hj.log.debug(
              "Removing previously shown widget from DOM",
              "widgets",
            ),
            hj
              .hq(
                "#_hj_poll_container,#_hj_feedback_container,._hj-widget-container",
              )
              .remove());
        }, "widgets")),
        (e.disableSubmit = hj.tryCatch(function () {
          hj.widget.ctrl
            .find("#_hj-f5b2a1eb-9b07_action_submit")
            .addClass("_hj-f5b2a1eb-9b07_btn_disabled");
        }, "common")),
        (e.emptyMatchingWidgets = function () {
          (i = []),
            (s = []),
            c.forEach(function (t) {
              t.disconnect();
            }),
            (c = []),
            hj.rendering.clearAllAbandonEvents(),
            (u = !1);
        }),
        (e.enableSubmit = hj.tryCatch(function () {
          hj.widget.ctrl
            .find("#_hj-f5b2a1eb-9b07_action_submit")
            .removeClass("_hj-f5b2a1eb-9b07_btn_disabled");
        }, "common")),
        (e.renderLegal = hj.tryCatch(function (t) {
          var n = hj.settings.legal_name || "",
            r = hj.settings.privacy_policy_url || "",
            i = "";
          return (
            t &&
              "" !== n &&
              "" !== r &&
              (i = hj.rendering.renderTemplate(
                '<div class="<%=p%>_widget_legal">                        <div class="<%=p%>_pull_left">                            <%=legalName%>                        </div>                        <div class="<%=p%>_pull_right">                            <a href="<%=privacyPolicyUrl%>" target="_blank" rel="noopener noreferrer">                                <%=hj.feedback.translate("privacy_policy")%>                            </a>                        </div>                        <div class="<%=p%>_clear_both"></div>                    </div>',
                {
                  p: e.widgetAttributePrefix,
                  legalName: n,
                  privacyPolicyUrl: new hj.rendering.TrustedString(r),
                },
              )),
            i
          );
        })),
        (e.enterFullScreen = hj.tryCatch(function () {
          var t, n;
          e.isPhoneOrTablet() &&
            ((t = hj.hq("body")).addClass("_hj-f5b2a1eb-9b07_position_fixed"),
            0 === hj.hq("#hotjar-viewport-meta").length &&
              (((n = document.createElement("meta")).id =
                "hotjar-viewport-meta"),
              (n.name = "viewport"),
              (n.content =
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),
              document.getElementsByTagName("head")[0].appendChild(n)),
            t.addClass("_hj-f5b2a1eb-9b07_fullscreen_page"));
        }, "common")),
        (e.exitFullScreen = hj.tryCatch(function () {
          hj.hq("#hotjar-viewport-meta").remove(),
            hj
              .hq("body")
              .removeClass("_hj-f5b2a1eb-9b07_fullscreen_page")
              .removeClass("_hj-f5b2a1eb-9b07_position_fixed");
        }, "common")),
        (e.isPhoneOrTablet = hj.tryCatch(function () {
          return (
            hj.widget.isVeryNarrowScreen() ||
            "phone" === Object(r.a)() ||
            "tablet" === Object(r.a)()
          );
        }, "common")),
        (e.isVeryNarrowScreen = hj.tryCatch(function () {
          return hj.hq(window).width() <= 450;
        }, "common")),
        (e.removeActiveWidget = function (t) {
          (t = t || function () {}),
            e.activeWidget
              ? (e.activeWidget.removeCallback &&
                  e.activeWidget.removeCallback(t),
                delete e.activeWidget)
              : t();
        }),
        (e.runLatestMatchingWidget = function () {
          var t;
          i.forEach(function (e) {
            (!t || t.created < e.created) && (t = e);
          }),
            t ? e.setActiveWidget(t) : e.removeActiveWidget(),
            (u = !0);
        }),
        (e.runInlineEmbeddedWidgets = function () {
          s.forEach(function (t) {
            t.runCallback();
          });
        }),
        (e.setActiveWidget = function (t) {
          (e.activeWidget &&
            t.type === e.activeWidget.type &&
            t.id === e.activeWidget.id) ||
            e.removeActiveWidget(function () {
              hj.widgetDelay.clear(), t.runCallback(), (e.activeWidget = t);
            });
        }),
        (e.setLanguage = hj.tryCatch(function (e) {
          if (!a.includes(e)) throw new Error('Invalid language "' + e + '"');
          (t = e),
            (hj.widget.activeLanguageDirection =
              n.indexOf(e) > -1 ? "rtl" : "ltr"),
            (hj.widget.isActiveLanguageDirectionRtl =
              "rtl" === hj.widget.activeLanguageDirection);
        }, "common")),
        (e.registerObserverForInlineWidget = function (t) {
          c.push(t);
        }),
        e)),
        (hj.widgetDelay = (function () {
          var t = {},
            e = null;
          return (
            (t.clear = hj.tryCatch(function () {
              clearTimeout(e), (e = null);
            }, "hj.widgetDelay.clear")),
            (t.set = hj.tryCatch(function (n, r) {
              t.clear(), (e = setTimeout(n, r));
            }, "hj.widgetDelay.set")),
            t
          );
        })());
    }, "widgets")();
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    n.r(e);
    var i = function (t, e, n) {
        [
          [
            "src",
            "https://" +
              (n || hj.insightsHost) +
              "/static/app/img/transparent.png",
          ],
          [
            "style",
            (function (t, e) {
              var n =
                  "https://" +
                  (e || hj.insightsHost) +
                  "/static/app/img/suppressed.png",
                r = (t.meta || {}).style || {},
                i = r.width,
                o = r.height;
              return [
                t.style,
                'background: url("' + n + '") repeat !important',
                i ? "width: " + i : "",
                o ? "height: " + o : "",
              ].filter(function (t) {
                return t;
              });
            })(e, n).join(";"),
          ],
        ].forEach(function (e) {
          t.setAttribute(e[0], e[1]);
        });
      },
      o = n(67),
      a = n(12);
    hj.tryCatch(function () {
      var t = hj.tryCatch(function () {
          function t(t, e) {
            (this.root = t), (this.delegate = e), (this.idMap = {});
          }
          return (
            (t.prototype.initialize = function (t, e) {
              this.idMap[t] = this.root;
              for (var n = 0; n < e.length; n++)
                this.deserializeNode(e[n], this.root);
            }),
            (t.prototype.deserializeDocument = function (t, e, n) {
              (this.root = document.cloneNode()),
                n && (this.idMap = {}),
                (this.idMap[t] = this.root);
              for (var r = 0; r < e.length; r++)
                this.deserializeNode(e[r], this.root, n);
              return this.root;
            }),
            (t.prototype.deserializeNode = function (t, e, n) {
              var r = this,
                i = !1;
              if (null === t) return null;
              var o = this.idMap[t.id];
              if (o && !n) return o;
              var a = this.root.ownerDocument;
              switch ((null === a && (a = this.root), t.nodeType)) {
                case Node.COMMENT_NODE:
                  o = a.createComment(t.textContent);
                  break;
                case Node.TEXT_NODE:
                  o = a.createTextNode(t.textContent);
                  break;
                case Node.DOCUMENT_TYPE_NODE:
                  o = a.implementation.createDocumentType(
                    t.name,
                    t.publicId,
                    t.systemId,
                  );
                  break;
                case Node.ELEMENT_NODE:
                  try {
                    this.delegate &&
                      this.delegate.createElement &&
                      (o = this.delegate.createElement(t.tagName)),
                      o || (o = a.createElement(t.tagName));
                  } catch (t) {
                    (o = a.createComment(
                      'hj.treeMirror.deserializeNode.error: "' +
                        t.message +
                        '"',
                    )),
                      (i = !0);
                    break;
                  }
                  Object.keys(t.attributes).forEach(function (e) {
                    try {
                      (r.delegate &&
                        r.delegate.setAttribute &&
                        r.delegate.setAttribute(o, e, t.attributes[e])) ||
                        o.setAttribute(e, t.attributes[e]);
                    } catch (t) {}
                  });
              }
              if (!o) throw "Could not create node of type: " + t.nodeType;
              if (
                ((this.idMap[t.id] = o),
                e && e.appendChild(o),
                t.childNodes && !i)
              )
                for (var s = 0; s < t.childNodes.length; s++)
                  this.deserializeNode(t.childNodes[s], o, n);
              return o;
            }),
            t
          );
        }, "TreeMirrorMirror")(),
        e = hj.tryCatch(function () {
          function t(t, e) {
            var n;
            (this.target = t),
              (this.mirror = e),
              (this.nextId = 1),
              (this.redactedContentId = -100),
              (this.mutationSummaries = []),
              (this.pendingMutations = []),
              (this.initialSerializedTarget = null),
              hj.treeMirror.mutationObserverAvailable
                ? ((this.knownNodes = new hj.MutationSummary.NodeMap()),
                  (this.shadowRoots = new hj.MutationSummary.NodeMap()))
                : ((this.knownNodes = {
                    get: function () {},
                    set: function () {},
                    deleteNode: function () {},
                  }),
                  (this.shadowRoots = {
                    get: function () {},
                    set: function () {},
                    deleteNode: function () {},
                    getValues: function () {},
                  })),
              (this.initialSerializedTarget = this.serializeTarget(t));
            try {
              void 0 !== window.MutationObserver
                ? (n = window.MutationObserver)
                : void 0 !== window.WebKitMutationObserver
                ? (n = window.WebKitMutationObserver)
                : void 0 !== window.MozMutationObserver &&
                  (n = window.MozMutationObserver);
            } catch (t) {
              n = void 0;
            }
            if (void 0 !== n) {
              this.listenToMutations(t);
              var r = this;
              this.shadowRoots.getValues().forEach(function (t) {
                r.listenToMutations(t);
              });
            }
          }
          return (
            (t.prototype.hookAttachShadow = function () {
              var t = this,
                e = Element.prototype.attachShadow;
              Element.prototype.attachShadow = function () {
                var n = e.apply(this, arguments);
                return t.shadowRoots.set(this, n), t.listenToMutations(n), n;
              };
            }),
            (t.prototype.listenToMutations = function (t) {
              var e = this;
              this.mutationSummaries.push(
                new hj.MutationSummary({
                  rootNode: t,
                  callback: hj.tryCatch(function (t) {
                    e.applyChanged(t);
                  }, "hj.treeMirrorClient"),
                  queries: [{ all: !0 }],
                  observeOwnChanges: !0,
                }),
              );
            }),
            (t.prototype.serializeTarget = function (t, e) {
              for (
                var n = this.serializeNode(t).id, r = [], i = t.firstChild;
                i;
                i = i.nextSibling
              )
                r.push(this.serializeNode(i, !0, e));
              return { rootId: n, children: r };
            }),
            (t.prototype.disconnect = function () {
              this.mutationSummaries &&
                this.mutationSummaries.length &&
                (this.mutationSummaries.forEach(function (t) {
                  t.disconnect();
                }),
                (this.mutationSummaries = []));
            }),
            (t.prototype.rememberNode = function (t) {
              var e = this.nextId++;
              return (
                this.knownNodes.set(t, e),
                (null == t ? void 0 : t.shadowRoot) &&
                  !this.shadowRoots.get(t) &&
                  this.shadowRoots.set(t, t.shadowRoot),
                e
              );
            }),
            (t.prototype.forgetNode = function (t) {
              this.knownNodes.deleteNode(t),
                this.shadowRoots.get(t) && this.shadowRoots.deleteNode(t);
            }),
            (t.prototype.serializeNode = function (t, e, n, r) {
              if (null === t) return null;
              var i = this.knownNodes.get(t);
              if (void 0 !== i && !n) return { id: i };
              void 0 === i && (i = this.rememberNode(t));
              var s,
                c,
                u,
                l = { nodeType: t.nodeType, id: i },
                h = t.shadowRoot || this.shadowRoots.get(t);
              if (
                h &&
                ((l.hasShadowRoot = !!h),
                (l.isSyntheticShadow = !!h.synthetic),
                h.adoptedStyleSheets && h.adoptedStyleSheets.length > 0)
              ) {
                var d = h.adoptedStyleSheets.reduce(function (t, e) {
                  for (var n = [], r = 0; r < e.cssRules.length; r++)
                    n.push(Object(o.a)(e.cssRules[r]));
                  var i = Object(a.b)();
                  return (
                    (e.ownerHostNode = h.host),
                    (e.sheetId = i),
                    t.push({ id: i, rules: n }),
                    t
                  );
                }, []);
                l.adoptedStyleSheetsRules = d;
              }
              switch (l.nodeType) {
                case Node.DOCUMENT_TYPE_NODE:
                  (s = t),
                    (l.name = "" === s.name ? "html" : s.name),
                    (l.publicId = s.publicId),
                    (l.systemId = s.systemId);
                  break;
                case Node.COMMENT_NODE:
                case Node.TEXT_NODE:
                  (r = (c = hj.privacy.getSuppressedTextNode(t, r))
                    .shouldSuppressNode),
                    (l.textContent = c.content);
                  break;
                case Node.ELEMENT_NODE:
                  if (
                    ((r = (u = hj.privacy.getSuppressedNode(t, r))
                      .shouldSuppressNode),
                    (l.tagName = u.node.tagName),
                    (l.attributes = u.node.attributes),
                    hj.cssBlobs.handleBlobStyles(l),
                    !l.attributes["data-hj-suppressed"] &&
                      "IMG" === l.tagName &&
                      t.currentSrc &&
                      (l.attributes.src = t.currentSrc),
                    t &&
                      t.namespaceURI &&
                      "http://www.w3.org/1999/xhtml" !== t.namespaceURI &&
                      (l.namespaceURI = t.namespaceURI),
                    "SCRIPT" === l.tagName || "NOSCRIPT" === l.tagName)
                  )
                    (l.childNodes = [
                      {
                        nodeType: Node.TEXT_NODE,
                        id: this.redactedContentId,
                        textContent: "",
                      },
                    ]),
                      this.redactedContentId--;
                  else if (e) {
                    if (h && h.childNodes.length) {
                      l.childNodes = [];
                      for (var f = h.firstChild; f; f = f.nextSibling) {
                        var g = this.serializeNode(f, !0, n, r);
                        (g.isInShadowRoot = !0), l.childNodes.push(g);
                      }
                    }
                    if (t.childNodes.length) {
                      l.childNodes = l.childNodes || [];
                      for (var p = t.firstChild; p; p = p.nextSibling) {
                        var v = this.serializeNode(p, !0, n, r);
                        l.childNodes.push(v);
                      }
                    }
                  }
              }
              return l;
            }),
            (t.prototype.serializeAddedAndMoved = function (t, e, n) {
              var r = this,
                i = t.concat(e).concat(n),
                o = new hj.MutationSummary.NodeMap();
              i.forEach(function (t) {
                var e = t.parentNode,
                  n = o.get(e);
                n || ((n = new hj.MutationSummary.NodeMap()), o.set(e, n)),
                  n.set(t, !0);
              });
              var a = [];
              return (
                o.keys().forEach(function (t) {
                  for (var e = o.get(t), n = e.keys(); n.length; ) {
                    for (
                      var i = n[0];
                      i.previousSibling && e.has(i.previousSibling);

                    )
                      i = i.previousSibling;
                    for (; i && e.has(i); ) {
                      var s = r.serializeNode(i);
                      (s.previousSibling = r.serializeNode(i.previousSibling)),
                        i.parentNode &&
                        i.parentNode.host &&
                        i.parentNode.host instanceof HTMLElement
                          ? ((s.parentNode = r.serializeNode(
                              i.parentNode.host,
                            )),
                            (s.isInShadowRoot = !0))
                          : (s.parentNode = r.serializeNode(i.parentNode)),
                        a.push(s),
                        e.deleteNode(i),
                        (i = i.nextSibling);
                    }
                    n = e.keys();
                  }
                }),
                a
              );
            }),
            (t.prototype.serializeAttributeChanges = function (t) {
              var e = this,
                n = new hj.MutationSummary.NodeMap();
              return (
                Object.keys(t).forEach(function (r) {
                  t[r].forEach(function (t) {
                    var i = n.get(t);
                    i ||
                      (((i = e.serializeNode(t)).attributes = {}), n.set(t, i));
                    var o = t.getAttribute(r);
                    if (
                      (hj.cssBlobs.handleBlobStyles(t),
                      "string" == typeof o &&
                        o.length &&
                        "src" !== r &&
                        "class" !== r &&
                        (o = o
                          .replace(/-?\d+\.\d+%/g, function (t) {
                            return Math.round(parseFloat(t)) + "%";
                          })
                          .replace(/-?\d+\.\d+/g, function (t) {
                            return parseFloat(t).toFixed(1);
                          })),
                      "string" == typeof o)
                    ) {
                      var a = { value: o, name: r },
                        s = hj.privacy.getSuppressedNodeAttribute(t, a, !1);
                      s && (i.attributes[s.name] = s.value);
                    } else i.attributes[r] = o;
                  });
                }),
                n.keys().map(function (t) {
                  return n.get(t);
                })
              );
            }),
            (t.prototype.applyChanged = function (t) {
              var e = this,
                n = t[0],
                r = n.removed
                  .filter(function (t) {
                    return void 0 !== e.knownNodes.get(t);
                  })
                  .map(function (t) {
                    return e.serializeNode(t);
                  }),
                i = this.serializeAddedAndMoved(
                  n.added,
                  n.reparented,
                  n.reordered,
                ),
                o = this.serializeAttributeChanges(n.attributeChanged),
                a = n.characterDataChanged.map(function (t) {
                  var n = e.serializeNode(t);
                  return (
                    (n.textContent = hj.privacy.getSuppressedTextNode(
                      t,
                      !1,
                    ).content),
                    n
                  );
                });
              this.mirror.applyChanged(r, i, o, a),
                n.removed.forEach(function (t) {
                  e.forgetNode(t);
                }),
                this.processPendingMutation();
            }),
            (t.prototype.getKnownNode = function (t) {
              return this.knownNodes.get(t);
            }),
            (t.prototype.onTreeMirrorUpdate = function (t) {
              this.pendingMutations.push(t);
            }),
            (t.prototype.processPendingMutation = function () {
              for (var t = void 0; (t = this.pendingMutations.shift()); ) t();
            }),
            (t.prototype.onInitialSerializationEnd = function (t) {
              t(
                this.initialSerializedTarget.rootId,
                this.initialSerializedTarget.children,
              ),
                (this.initialSerializedTarget = null);
            }),
            t
          );
        }, "TreeMirrorClient")();
      hj.treeMirror = hj.tryCatch(function () {
        var n,
          o,
          a = {},
          s = [];
        function c(t, e, n, r) {
          s.forEach(function (i) {
            i(t, e, n, r);
          });
        }
        return (
          (a.mutationObserverAvailable =
            void 0 !== window.MutationObserver ||
            void 0 !== window.WebKitMutationObserver ||
            void 0 !== window.MozMutationObserver),
          (a.getTree = hj.tryCatch(function (t, r) {
            var i;
            n && a.mutationObserverAvailable
              ? t((i = n.serializeTarget(document, !0, !0)).rootId, i.children)
              : ((n = new e(document, {
                  applyChanged: c,
                })).onInitialSerializationEnd(t),
                n.hookAttachShadow());
            r && a.mutationObserverAvailable && s.push(r);
          }, "hj.treeMirror.manager.getTree")),
          (a.getMirroredDocument = hj.tryCatch(function (e) {
            var n, s;
            o ||
              (o = new t(document.cloneNode(), {
                setAttribute:
                  ((n = function (t, e, n) {
                    t.setAttribute(e, n);
                  }),
                  function (t, e, o) {
                    return "data-hj-suppressed" === e && "object" === r(o)
                      ? (i(t, o, s), !0)
                      : n(t, e, o);
                  }),
              })),
              a.getTree(function (t, n) {
                e(o.deserializeDocument(t, n, !0));
              });
          }, "hj.treeMirror.manager.getMirroredDocument")),
          (a.resetMutationListeners = function () {
            s = [];
          }),
          (a.disconnect = function () {
            n && (n.disconnect(), (n = null));
          }),
          (a.getNodeId = function (t) {
            return n.getKnownNode(t);
          }),
          (a.onTreeMirrorUpdate = function (t) {
            n.onTreeMirrorUpdate(t);
          }),
          a
        );
      }, "hj.treeMirror.manager")();
    }, "hj.treeMirror")();
  },
]);
