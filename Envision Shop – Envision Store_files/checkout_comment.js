(jdgmCM = window.jdgmCM || {}),
  (window.judgemeCM = jdgmCM),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
      var t = !!e && "length" in e && e.length,
        n = ot.type(e);
      return "function" === n || ot.isWindow(e)
        ? !1
        : "array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t, n) {
      if (ot.isFunction(t))
        return ot.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return ot.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (mt.test(t)) return ot.filter(t, e, n);
        t = ot.filter(t, e);
      }
      return ot.grep(e, function (e) {
        return Z.call(t, e) > -1 !== n;
      });
    }
    function r(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function o(e) {
      var t = {};
      return (
        ot.each(e.match(wt) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function a() {
      G.removeEventListener("DOMContentLoaded", a),
        e.removeEventListener("load", a),
        ot.ready();
    }
    function s() {
      this.expando = ot.expando + s.uid++;
    }
    function l(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(Et, "-$&").toLowerCase()),
          (n = e.getAttribute(i)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n
                ? !0
                : "false" === n
                ? !1
                : "null" === n
                ? null
                : +n + "" === n
                ? +n
                : jt.test(n)
                ? ot.parseJSON(n)
                : n;
          } catch (r) {}
          Ct.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function c(e, t, n, i) {
      var r,
        o = 1,
        a = 20,
        s = i
          ? function () {
              return i.cur();
            }
          : function () {
              return ot.css(e, t, "");
            },
        l = s(),
        c = (n && n[3]) || (ot.cssNumber[t] ? "" : "px"),
        u = (ot.cssNumber[t] || ("px" !== c && +l)) && $t.exec(ot.css(e, t));
      if (u && u[3] !== c) {
        (c = c || u[3]), (n = n || []), (u = +l || 1);
        do (o = o || ".5"), (u /= o), ot.style(e, t, u + c);
        while (o !== (o = s() / l) && 1 !== o && --a);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = r))),
        r
      );
    }
    function u(e, t) {
      var n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
      return void 0 === t || (t && ot.nodeName(e, t)) ? ot.merge([e], n) : n;
    }
    function d(e, t) {
      for (var n = 0, i = e.length; i > n; n++)
        Tt.set(e[n], "globalEval", !t || Tt.get(t[n], "globalEval"));
    }
    function p(e, t, n, i, r) {
      for (
        var o,
          a,
          s,
          l,
          c,
          p,
          f = t.createDocumentFragment(),
          h = [],
          m = 0,
          g = e.length;
        g > m;
        m++
      )
        if (((o = e[m]), o || 0 === o))
          if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
          else if (Pt.test(o)) {
            for (
              a = a || f.appendChild(t.createElement("div")),
                s = (Lt.exec(o) || ["", ""])[1].toLowerCase(),
                l = It[s] || It._default,
                a.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2],
                p = l[0];
              p--;

            )
              a = a.lastChild;
            ot.merge(h, a.childNodes), (a = f.firstChild), (a.textContent = "");
          } else h.push(t.createTextNode(o));
      for (f.textContent = "", m = 0; (o = h[m++]); )
        if (i && ot.inArray(o, i) > -1) r && r.push(o);
        else if (
          ((c = ot.contains(o.ownerDocument, o)),
          (a = u(f.appendChild(o), "script")),
          c && d(a),
          n)
        )
          for (p = 0; (o = a[p++]); ) Mt.test(o.type || "") && n.push(o);
      return f;
    }
    function f() {
      return !0;
    }
    function h() {
      return !1;
    }
    function m() {
      try {
        return G.activeElement;
      } catch (e) {}
    }
    function g(e, t, n, i, r, o) {
      var a, s;
      if ("object" == typeof t) {
        "string" != typeof n && ((i = i || n), (n = void 0));
        for (s in t) g(e, s, n, i, t[s], o);
        return e;
      }
      if (
        (null == i && null == r
          ? ((r = n), (i = n = void 0))
          : null == r &&
            ("string" == typeof n
              ? ((r = i), (i = void 0))
              : ((r = i), (i = n), (n = void 0))),
        r === !1)
      )
        r = h;
      else if (!r) return e;
      return (
        1 === o &&
          ((a = r),
          (r = function (e) {
            return ot().off(e), a.apply(this, arguments);
          }),
          (r.guid = a.guid || (a.guid = ot.guid++))),
        e.each(function () {
          ot.event.add(this, t, r, i, n);
        })
      );
    }
    function v(e, t) {
      return ot.nodeName(e, "table") &&
        ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function _(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function b(e) {
      var t = Wt.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function y(e, t) {
      var n, i, r, o, a, s, l, c;
      if (1 === t.nodeType) {
        if (
          Tt.hasData(e) &&
          ((o = Tt.access(e)), (a = Tt.set(t, o)), (c = o.events))
        ) {
          delete a.handle, (a.events = {});
          for (r in c)
            for (n = 0, i = c[r].length; i > n; n++)
              ot.event.add(t, r, c[r][n]);
        }
        Ct.hasData(e) &&
          ((s = Ct.access(e)), (l = ot.extend({}, s)), Ct.set(t, l));
      }
    }
    function w(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ot.test(e.type)
        ? (t.checked = e.checked)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
    function x(e, t, n, i) {
      t = X.apply([], t);
      var r,
        o,
        a,
        s,
        l,
        c,
        d = 0,
        f = e.length,
        h = f - 1,
        m = t[0],
        g = ot.isFunction(m);
      if (g || (f > 1 && "string" == typeof m && !it.checkClone && zt.test(m)))
        return e.each(function (r) {
          var o = e.eq(r);
          g && (t[0] = m.call(this, r, o.html())), x(o, t, n, i);
        });
      if (
        f &&
        ((r = p(t, e[0].ownerDocument, !1, e, i)),
        (o = r.firstChild),
        1 === r.childNodes.length && (r = o),
        o || i)
      ) {
        for (a = ot.map(u(r, "script"), _), s = a.length; f > d; d++)
          (l = r),
            d !== h &&
              ((l = ot.clone(l, !0, !0)), s && ot.merge(a, u(l, "script"))),
            n.call(e[d], l, d);
        if (s)
          for (
            c = a[a.length - 1].ownerDocument, ot.map(a, b), d = 0;
            s > d;
            d++
          )
            (l = a[d]),
              Mt.test(l.type || "") &&
                !Tt.access(l, "globalEval") &&
                ot.contains(c, l) &&
                (l.src
                  ? ot._evalUrl && ot._evalUrl(l.src)
                  : ot.globalEval(l.textContent.replace(Ut, "")));
      }
      return e;
    }
    function k(e, t, n) {
      for (var i, r = t ? ot.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
        n || 1 !== i.nodeType || ot.cleanData(u(i)),
          i.parentNode &&
            (n && ot.contains(i.ownerDocument, i) && d(u(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    function S(e, t) {
      var n = ot(t.createElement(e)).appendTo(t.body),
        i = ot.css(n[0], "display");
      return n.detach(), i;
    }
    function T(e) {
      var t = G,
        n = Yt[e];
      return (
        n ||
          ((n = S(e, t)),
          ("none" !== n && n) ||
            ((Jt = (
              Jt || ot("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = Jt[0].contentDocument),
            t.write(),
            t.close(),
            (n = S(e, t)),
            Jt.detach()),
          (Yt[e] = n)),
        n
      );
    }
    function C(e, t, n) {
      var i,
        r,
        o,
        a,
        s = e.style;
      return (
        (n = n || Kt(e)),
        (a = n ? n.getPropertyValue(t) || n[t] : void 0),
        ("" !== a && void 0 !== a) ||
          ot.contains(e.ownerDocument, e) ||
          (a = ot.style(e, t)),
        n &&
          !it.pixelMarginRight() &&
          Gt.test(a) &&
          Vt.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o)),
        void 0 !== a ? a + "" : a
      );
    }
    function j(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function E(e) {
      if (e in rn) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--; )
        if (((e = nn[n] + t), e in rn)) return e;
    }
    function A(e, t, n) {
      var i = $t.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function $(e, t, n, i, r) {
      for (
        var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          a = 0;
        4 > o;
        o += 2
      )
        "margin" === n && (a += ot.css(e, n + Dt[o], !0, r)),
          i
            ? ("content" === n && (a -= ot.css(e, "padding" + Dt[o], !0, r)),
              "margin" !== n &&
                (a -= ot.css(e, "border" + Dt[o] + "Width", !0, r)))
            : ((a += ot.css(e, "padding" + Dt[o], !0, r)),
              "padding" !== n &&
                (a += ot.css(e, "border" + Dt[o] + "Width", !0, r)));
      return a;
    }
    function D(e, t, n) {
      var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Kt(e),
        a = "border-box" === ot.css(e, "boxSizing", !1, o);
      if (0 >= r || null == r) {
        if (
          ((r = C(e, t, o)),
          (0 > r || null == r) && (r = e.style[t]),
          Gt.test(r))
        )
          return r;
        (i = a && (it.boxSizingReliable() || r === e.style[t])),
          (r = parseFloat(r) || 0);
      }
      return r + $(e, t, n || (a ? "border" : "content"), i, o) + "px";
    }
    function N(e, t) {
      for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)
        (i = e[a]),
          i.style &&
            ((o[a] = Tt.get(i, "olddisplay")),
            (n = i.style.display),
            t
              ? (o[a] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  Nt(i) &&
                  (o[a] = Tt.access(i, "olddisplay", T(i.nodeName))))
              : ((r = Nt(i)),
                ("none" === n && r) ||
                  Tt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
      for (a = 0; s > a; a++)
        (i = e[a]),
          i.style &&
            ((t && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = t ? o[a] || "" : "none"));
      return e;
    }
    function O(e, t, n, i, r) {
      return new O.prototype.init(e, t, n, i, r);
    }
    function L() {
      return (
        e.setTimeout(function () {
          on = void 0;
        }),
        (on = ot.now())
      );
    }
    function M(e, t) {
      var n,
        i = 0,
        r = { height: e };
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)
        (n = Dt[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function I(e, t, n) {
      for (
        var i,
          r = (R.tweeners[t] || []).concat(R.tweeners["*"]),
          o = 0,
          a = r.length;
        a > o;
        o++
      )
        if ((i = r[o].call(n, t, e))) return i;
    }
    function P(e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        u,
        d = this,
        p = {},
        f = e.style,
        h = e.nodeType && Nt(e),
        m = Tt.get(e, "fxshow");
      n.queue ||
        ((s = ot._queueHooks(e, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (l = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || l();
          })),
        s.unqueued++,
        d.always(function () {
          d.always(function () {
            s.unqueued--, ot.queue(e, "fx").length || s.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (c = ot.css(e, "display")),
          (u = "none" === c ? Tt.get(e, "olddisplay") || T(e.nodeName) : c),
          "inline" === u &&
            "none" === ot.css(e, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          d.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          }));
      for (i in t)
        if (((r = t[i]), sn.exec(r))) {
          if (
            (delete t[i],
            (o = o || "toggle" === r),
            r === (h ? "hide" : "show"))
          ) {
            if ("show" !== r || !m || void 0 === m[i]) continue;
            h = !0;
          }
          p[i] = (m && m[i]) || ot.style(e, i);
        } else c = void 0;
      if (ot.isEmptyObject(p))
        "inline" === ("none" === c ? T(e.nodeName) : c) && (f.display = c);
      else {
        m ? "hidden" in m && (h = m.hidden) : (m = Tt.access(e, "fxshow", {})),
          o && (m.hidden = !h),
          h
            ? ot(e).show()
            : d.done(function () {
                ot(e).hide();
              }),
          d.done(function () {
            var t;
            Tt.remove(e, "fxshow");
            for (t in p) ot.style(e, t, p[t]);
          });
        for (i in p)
          (a = I(h ? m[i] : 0, i, d)),
            i in m ||
              ((m[i] = a.start),
              h &&
                ((a.end = a.start),
                (a.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function F(e, t) {
      var n, i, r, o, a;
      for (n in e)
        if (
          ((i = ot.camelCase(n)),
          (r = t[i]),
          (o = e[n]),
          ot.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
          n !== i && ((e[i] = o), delete e[n]),
          (a = ot.cssHooks[i]),
          a && "expand" in a)
        ) {
          (o = a.expand(o)), delete e[i];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
        } else t[i] = r;
    }
    function R(e, t, n) {
      var i,
        r,
        o = 0,
        a = R.prefilters.length,
        s = ot.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var t = on || L(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = n / c.duration || 0,
              o = 1 - i,
              a = 0,
              l = c.tweens.length;
            l > a;
            a++
          )
            c.tweens[a].run(o);
          return (
            s.notifyWith(e, [c, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [c]), !1)
          );
        },
        c = s.promise({
          elem: e,
          props: ot.extend({}, t),
          opts: ot.extend(
            !0,
            { specialEasing: {}, easing: ot.easing._default },
            n,
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: on || L(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = ot.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing,
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; i > n; n++) c.tweens[n].run(1);
            return (
              t
                ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                : s.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (F(u, c.opts.specialEasing); a > o; o++)
        if ((i = R.prefilters[o].call(c, e, u, c.opts)))
          return (
            ot.isFunction(i.stop) &&
              (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(i.stop, i)),
            i
          );
      return (
        ot.map(u, I, c),
        ot.isFunction(c.opts.start) && c.opts.start.call(e, c),
        ot.fx.timer(ot.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function q(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function H(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          r = 0,
          o = t.toLowerCase().match(wt) || [];
        if (ot.isFunction(n))
          for (; (i = o[r++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function B(e, t, n, i) {
      function r(s) {
        var l;
        return (
          (o[s] = !0),
          ot.each(e[s] || [], function (e, s) {
            var c = s(t, n, i);
            return "string" != typeof c || a || o[c]
              ? a
                ? !(l = c)
                : void 0
              : (t.dataTypes.unshift(c), r(c), !1);
          }),
          l
        );
      }
      var o = {},
        a = e === jn;
      return r(t.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function z(e, t) {
      var n,
        i,
        r = ot.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && ot.extend(!0, e, i), e;
    }
    function W(e, t, n) {
      for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in s)
          if (s[r] && s[r].test(i)) {
            l.unshift(r);
            break;
          }
      if (l[0] in n) o = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            o = r;
            break;
          }
          a || (a = r);
        }
        o = o || a;
      }
      return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
    }
    function U(e, t, n, i) {
      var r,
        o,
        a,
        s,
        l,
        c = {},
        u = e.dataTypes.slice();
      if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
      for (o = u.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = o),
          (o = u.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (((a = c[l + " " + o] || c["* " + o]), !a))
              for (r in c)
                if (
                  ((s = r.split(" ")),
                  s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]]))
                ) {
                  a === !0
                    ? (a = c[r])
                    : c[r] !== !0 && ((o = s[0]), u.unshift(s[1]));
                  break;
                }
            if (a !== !0)
              if (a && e["throws"]) t = a(t);
              else
                try {
                  t = a(t);
                } catch (d) {
                  return {
                    state: "parsererror",
                    error: a ? d : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function J(e, t, n, i) {
      var r;
      if (ot.isArray(t))
        ot.each(t, function (t, r) {
          n || Dn.test(e)
            ? i(e, r)
            : J(
                e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                r,
                n,
                i,
              );
        });
      else if (n || "object" !== ot.type(t)) i(e, t);
      else for (r in t) J(e + "[" + r + "]", t[r], n, i);
    }
    function Y(e) {
      return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var V = [],
      G = e.document,
      K = V.slice,
      X = V.concat,
      Q = V.push,
      Z = V.indexOf,
      et = {},
      tt = et.toString,
      nt = et.hasOwnProperty,
      it = {},
      rt = "2.2.4",
      ot = function (e, t) {
        return new ot.fn.init(e, t);
      },
      at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      st = /^-ms-/,
      lt = /-([\da-z])/gi,
      ct = function (e, t) {
        return t.toUpperCase();
      };
    (ot.fn = ot.prototype =
      {
        jquery: rt,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function () {
          return K.call(this);
        },
        get: function (e) {
          return null != e
            ? 0 > e
              ? this[e + this.length]
              : this[e]
            : K.call(this);
        },
        pushStack: function (e) {
          var t = ot.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e) {
          return ot.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            ot.map(this, function (t, n) {
              return e.call(t, n, t);
            }),
          );
        },
        slice: function () {
          return this.pushStack(K.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Q,
        sort: V.sort,
        splice: V.splice,
      }),
      (ot.extend = ot.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || ot.isFunction(a) || (a = {}),
              s === l && ((a = this), s--);
            l > s;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (n = a[t]),
                  (i = e[t]),
                  a !== i &&
                    (c && i && (ot.isPlainObject(i) || (r = ot.isArray(i)))
                      ? (r
                          ? ((r = !1), (o = n && ot.isArray(n) ? n : []))
                          : (o = n && ot.isPlainObject(n) ? n : {}),
                        (a[t] = ot.extend(c, o, i)))
                      : void 0 !== i && (a[t] = i));
          return a;
        }),
      ot.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === ot.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !ot.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (e) {
          var t;
          if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e))
            return !1;
          if (
            e.constructor &&
            !nt.call(e, "constructor") &&
            !nt.call(e.constructor.prototype || {}, "isPrototypeOf")
          )
            return !1;
          for (t in e);
          return void 0 === t || nt.call(e, t);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? et[tt.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = ot.trim(e)),
            e &&
              (1 === e.indexOf("use strict")
                ? ((t = G.createElement("script")),
                  (t.text = e),
                  G.head.appendChild(t).parentNode.removeChild(t))
                : n(e));
        },
        camelCase: function (e) {
          return e.replace(st, "ms-").replace(lt, ct);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var i,
            r = 0;
          if (n(e))
            for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
          else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(at, "");
        },
        makeArray: function (e, t) {
          var i = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? ot.merge(i, "string" == typeof e ? [e] : e)
                : Q.call(i, e)),
            i
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : Z.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; n > i; i++)
            e[r++] = t[i];
          return (e.length = r), e;
        },
        grep: function (e, t, n) {
          for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++)
            (i = !t(e[o], o)), i !== s && r.push(e[o]);
          return r;
        },
        map: function (e, t, i) {
          var r,
            o,
            a = 0,
            s = [];
          if (n(e))
            for (r = e.length; r > a; a++)
              (o = t(e[a], a, i)), null != o && s.push(o);
          else for (a in e) (o = t(e[a], a, i)), null != o && s.push(o);
          return X.apply([], s);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, r;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            ot.isFunction(e)
              ? ((i = K.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(K.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || ot.guid++),
                r)
              : void 0
          );
        },
        now: Date.now,
        support: it,
      }),
      "function" == typeof Symbol &&
        (ot.fn[Symbol.iterator] = V[Symbol.iterator]),
      ot.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " ",
        ),
        function (e, t) {
          et["[object " + t + "]"] = t.toLowerCase();
        },
      );
    var ut = (function (e) {
      function t(e, t, n, i) {
        var r,
          o,
          a,
          s,
          l,
          c,
          d,
          f,
          h = t && t.ownerDocument,
          m = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : q) !== N && D(t), (t = t || N), L)
        ) {
          if (11 !== m && (c = vt.exec(e)))
            if ((r = c[1])) {
              if (9 === m) {
                if (!(a = t.getElementById(r))) return n;
                if (a.id === r) return n.push(a), n;
              } else if (
                h &&
                (a = h.getElementById(r)) &&
                F(t, a) &&
                a.id === r
              )
                return n.push(a), n;
            } else {
              if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
              if (
                (r = c[3]) &&
                w.getElementsByClassName &&
                t.getElementsByClassName
              )
                return Q.apply(n, t.getElementsByClassName(r)), n;
            }
          if (!(!w.qsa || U[e + " "] || (M && M.test(e)))) {
            if (1 !== m) (h = t), (f = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (s = t.getAttribute("id"))
                  ? (s = s.replace(bt, "\\$&"))
                  : t.setAttribute("id", (s = R)),
                  d = T(e),
                  o = d.length,
                  l = pt.test(s) ? "#" + s : "[id='" + s + "']";
                o--;

              )
                d[o] = l + " " + p(d[o]);
              (f = d.join(",")), (h = (_t.test(e) && u(t.parentNode)) || t);
            }
            if (f)
              try {
                return Q.apply(n, h.querySelectorAll(f)), n;
              } catch (g) {
              } finally {
                s === R && t.removeAttribute("id");
              }
          }
        }
        return j(e.replace(st, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > x.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[R] = !0), e;
      }
      function r(e) {
        var t = N.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function o(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
      }
      function a(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function s(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function c(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var r, o = e([], n.length, t), a = o.length; a--; )
                n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
            })
          );
        });
      }
      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function d() {}
      function p(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function f(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          o = B++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, o);
            }
          : function (t, n, a) {
              var s,
                l,
                c,
                u = [H, o];
              if (a) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || r) && e(t, n, a)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || r) {
                    if (
                      ((c = t[R] || (t[R] = {})),
                      (l = c[t.uniqueID] || (c[t.uniqueID] = {})),
                      (s = l[i]) && s[0] === H && s[1] === o)
                    )
                      return (u[2] = s[2]);
                    if (((l[i] = u), (u[2] = e(t, n, a)))) return !0;
                  }
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function m(e, n, i) {
        for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
        return i;
      }
      function g(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
          (o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
        return a;
      }
      function v(e, t, n, r, o, a) {
        return (
          r && !r[R] && (r = v(r)),
          o && !o[R] && (o = v(o, a)),
          i(function (i, a, s, l) {
            var c,
              u,
              d,
              p = [],
              f = [],
              h = a.length,
              v = i || m(t || "*", s.nodeType ? [s] : s, []),
              _ = !e || (!i && t) ? v : g(v, p, e, s, l),
              b = n ? (o || (i ? e : h || r) ? [] : a) : _;
            if ((n && n(_, b, s, l), r))
              for (c = g(b, f), r(c, [], s, l), u = c.length; u--; )
                (d = c[u]) && (b[f[u]] = !(_[f[u]] = d));
            if (i) {
              if (o || e) {
                if (o) {
                  for (c = [], u = b.length; u--; )
                    (d = b[u]) && c.push((_[u] = d));
                  o(null, (b = []), c, l);
                }
                for (u = b.length; u--; )
                  (d = b[u]) &&
                    (c = o ? et(i, d) : p[u]) > -1 &&
                    (i[c] = !(a[c] = d));
              }
            } else
              (b = g(b === a ? b.splice(h, b.length) : b)),
                o ? o(null, a, b, l) : Q.apply(a, b);
          })
        );
      }
      function _(e) {
        for (
          var t,
            n,
            i,
            r = e.length,
            o = x.relative[e[0].type],
            a = o || x.relative[" "],
            s = o ? 1 : 0,
            l = f(
              function (e) {
                return e === t;
              },
              a,
              !0,
            ),
            c = f(
              function (e) {
                return et(t, e) > -1;
              },
              a,
              !0,
            ),
            u = [
              function (e, n, i) {
                var r =
                  (!o && (i || n !== E)) ||
                  ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return (t = null), r;
              },
            ];
          r > s;
          s++
        )
          if ((n = x.relative[e[s].type])) u = [f(h(u), n)];
          else {
            if (((n = x.filter[e[s].type].apply(null, e[s].matches)), n[R])) {
              for (i = ++s; r > i && !x.relative[e[i].type]; i++);
              return v(
                s > 1 && h(u),
                s > 1 &&
                  p(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                  ).replace(st, "$1"),
                n,
                i > s && _(e.slice(s, i)),
                r > i && _((e = e.slice(i))),
                r > i && p(e),
              );
            }
            u.push(n);
          }
        return h(u);
      }
      function b(e, n) {
        var r = n.length > 0,
          o = e.length > 0,
          a = function (i, a, s, l, c) {
            var u,
              d,
              p,
              f = 0,
              h = "0",
              m = i && [],
              v = [],
              _ = E,
              b = i || (o && x.find.TAG("*", c)),
              y = (H += null == _ ? 1 : Math.random() || 0.1),
              w = b.length;
            for (
              c && (E = a === N || a || c);
              h !== w && null != (u = b[h]);
              h++
            ) {
              if (o && u) {
                for (
                  d = 0, a || u.ownerDocument === N || (D(u), (s = !L));
                  (p = e[d++]);

                )
                  if (p(u, a || N, s)) {
                    l.push(u);
                    break;
                  }
                c && (H = y);
              }
              r && ((u = !p && u) && f--, i && m.push(u));
            }
            if (((f += h), r && h !== f)) {
              for (d = 0; (p = n[d++]); ) p(m, v, a, s);
              if (i) {
                if (f > 0) for (; h--; ) m[h] || v[h] || (v[h] = K.call(l));
                v = g(v);
              }
              Q.apply(l, v),
                c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
            }
            return c && ((H = y), (E = _)), m;
          };
        return r ? i(a) : a;
      }
      var y,
        w,
        x,
        k,
        S,
        T,
        C,
        j,
        E,
        A,
        $,
        D,
        N,
        O,
        L,
        M,
        I,
        P,
        F,
        R = "sizzle" + 1 * new Date(),
        q = e.document,
        H = 0,
        B = 0,
        z = n(),
        W = n(),
        U = n(),
        J = function (e, t) {
          return e === t && ($ = !0), 0;
        },
        Y = 1 << 31,
        V = {}.hasOwnProperty,
        G = [],
        K = G.pop,
        X = G.push,
        Q = G.push,
        Z = G.slice,
        et = function (e, t) {
          for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
          return -1;
        },
        tt =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        rt =
          "\\[" +
          nt +
          "*(" +
          it +
          ")(?:" +
          nt +
          "*([*^$|!~]?=)" +
          nt +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          it +
          "))|)" +
          nt +
          "*\\]",
        ot =
          ":(" +
          it +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          rt +
          ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        st = new RegExp(
          "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
          "g",
        ),
        lt = new RegExp("^" + nt + "*," + nt + "*"),
        ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        dt = new RegExp(ot),
        pt = new RegExp("^" + it + "$"),
        ft = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it + "|[*])"),
          ATTR: new RegExp("^" + rt),
          PSEUDO: new RegExp("^" + ot),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              nt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              nt +
              "*(?:([+-]|)" +
              nt +
              "*(\\d+)|))" +
              nt +
              "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + tt + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              nt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              nt +
              "*((?:-\\d)?\\d*)" +
              nt +
              "*\\)|)(?=[^-]|$)",
            "i",
          ),
        },
        ht = /^(?:input|select|textarea|button)$/i,
        mt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _t = /[+~]/,
        bt = /'|\\/g,
        yt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        wt = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        xt = function () {
          D();
        };
      try {
        Q.apply((G = Z.call(q.childNodes)), q.childNodes),
          G[q.childNodes.length].nodeType;
      } catch (kt) {
        Q = {
          apply: G.length
            ? function (e, t) {
                X.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      (w = t.support = {}),
        (S = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
          }),
        (D = t.setDocument =
          function (e) {
            var t,
              n,
              i = e ? e.ownerDocument || e : q;
            return i !== N && 9 === i.nodeType && i.documentElement
              ? ((N = i),
                (O = N.documentElement),
                (L = !S(N)),
                (n = N.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", xt, !1)
                    : n.attachEvent && n.attachEvent("onunload", xt)),
                (w.attributes = r(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (w.getElementsByTagName = r(function (e) {
                  return (
                    e.appendChild(N.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (w.getElementsByClassName = gt.test(N.getElementsByClassName)),
                (w.getById = r(function (e) {
                  return (
                    (O.appendChild(e).id = R),
                    !N.getElementsByName || !N.getElementsByName(R).length
                  );
                })),
                w.getById
                  ? ((x.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }),
                    (x.filter.ID = function (e) {
                      var t = e.replace(yt, wt);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete x.find.ID,
                    (x.filter.ID = function (e) {
                      var t = e.replace(yt, wt);
                      return function (e) {
                        var n =
                          "undefined" != typeof e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (x.find.TAG = w.getElementsByTagName
                  ? function (e, t) {
                      return "undefined" != typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : w.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (x.find.CLASS =
                  w.getElementsByClassName &&
                  function (e, t) {
                    return "undefined" != typeof t.getElementsByClassName && L
                      ? t.getElementsByClassName(e)
                      : void 0;
                  }),
                (I = []),
                (M = []),
                (w.qsa = gt.test(N.querySelectorAll)) &&
                  (r(function (e) {
                    (O.appendChild(e).innerHTML =
                      "<a id='" +
                      R +
                      "'></a><select id='" +
                      R +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        M.push("[*^$]=" + nt + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        M.push("\\[" + nt + "*(?:value|" + tt + ")"),
                      e.querySelectorAll("[id~=" + R + "-]").length ||
                        M.push("~="),
                      e.querySelectorAll(":checked").length ||
                        M.push(":checked"),
                      e.querySelectorAll("a#" + R + "+*").length ||
                        M.push(".#.+[+~]");
                  }),
                  r(function (e) {
                    var t = N.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        M.push("name" + nt + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        M.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      M.push(",.*:");
                  })),
                (w.matchesSelector = gt.test(
                  (P =
                    O.matches ||
                    O.webkitMatchesSelector ||
                    O.mozMatchesSelector ||
                    O.oMatchesSelector ||
                    O.msMatchesSelector),
                )) &&
                  r(function (e) {
                    (w.disconnectedMatch = P.call(e, "div")),
                      P.call(e, "[s!='']:x"),
                      I.push("!=", ot);
                  }),
                (M = M.length && new RegExp(M.join("|"))),
                (I = I.length && new RegExp(I.join("|"))),
                (t = gt.test(O.compareDocumentPosition)),
                (F =
                  t || gt.test(O.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (J = t
                  ? function (e, t) {
                      if (e === t) return ($ = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!w.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === N || (e.ownerDocument === q && F(q, e))
                              ? -1
                              : t === N || (t.ownerDocument === q && F(q, t))
                              ? 1
                              : A
                              ? et(A, e) - et(A, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function (e, t) {
                      if (e === t) return ($ = !0), 0;
                      var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        l = [t];
                      if (!r || !o)
                        return e === N
                          ? -1
                          : t === N
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : A
                          ? et(A, e) - et(A, t)
                          : 0;
                      if (r === o) return a(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; s[i] === l[i]; ) i++;
                      return i
                        ? a(s[i], l[i])
                        : s[i] === q
                        ? -1
                        : l[i] === q
                        ? 1
                        : 0;
                    }),
                N)
              : N;
          }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== N && D(e),
            (n = n.replace(ut, "='$1']")),
            !(
              !w.matchesSelector ||
              !L ||
              U[n + " "] ||
              (I && I.test(n)) ||
              (M && M.test(n))
            ))
          )
            try {
              var i = P.call(e, n);
              if (
                i ||
                w.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (r) {}
          return t(n, N, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== N && D(e), F(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== N && D(e);
          var n = x.attrHandle[t.toLowerCase()],
            i =
              n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
          return void 0 !== i
            ? i
            : w.attributes || !L
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            r = 0;
          if (
            (($ = !w.detectDuplicates),
            (A = !w.sortStable && e.slice(0)),
            e.sort(J),
            $)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (A = null), e;
        }),
        (k = t.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += k(t);
            return n;
          }),
        (x = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(yt, wt)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(yt, wt)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return ft.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        dt.test(n) &&
                        (t = T(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(yt, wt).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = z[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) &&
                    z(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          ("undefined" != typeof e.getAttribute &&
                            e.getAttribute("class")) ||
                          "",
                      );
                    }))
                );
              },
              ATTR: function (e, n, i) {
                return function (r) {
                  var o = t.attr(r, e);
                  return null == o
                    ? "!=" === n
                    : n
                    ? ((o += ""),
                      "=" === n
                        ? o === i
                        : "!=" === n
                        ? o !== i
                        : "^=" === n
                        ? i && 0 === o.indexOf(i)
                        : "*=" === n
                        ? i && o.indexOf(i) > -1
                        : "$=" === n
                        ? i && o.slice(-i.length) === i
                        : "~=" === n
                        ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1
                        : "|=" === n
                        ? o === i || o.slice(0, i.length + 1) === i + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === i && 0 === r
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        _ = !l && !s,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (p = t; (p = p[m]); )
                              if (
                                s
                                  ? p.nodeName.toLowerCase() === v
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && _)) {
                          for (
                            p = g,
                              d = p[R] || (p[R] = {}),
                              u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                              c = u[e] || [],
                              f = c[0] === H && c[1],
                              b = f && c[2],
                              p = f && g.childNodes[f];
                            (p = (++f && p && p[m]) || (b = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++b && p === t) {
                              u[e] = [H, f, b];
                              break;
                            }
                        } else if (
                          (_ &&
                            ((p = t),
                            (d = p[R] || (p[R] = {})),
                            (u = d[p.uniqueID] || (d[p.uniqueID] = {})),
                            (c = u[e] || []),
                            (f = c[0] === H && c[1]),
                            (b = f)),
                          b === !1)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                            ((s
                              ? p.nodeName.toLowerCase() !== v
                              : 1 !== p.nodeType) ||
                              !++b ||
                              (_ &&
                                ((d = p[R] || (p[R] = {})),
                                (u = d[p.uniqueID] || (d[p.uniqueID] = {})),
                                (u[e] = [H, b])),
                              p !== t));

                          );
                        return (b -= r), b === i || (b % i === 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var r,
                  o =
                    x.pseudos[e] ||
                    x.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return o[R]
                  ? o(n)
                  : o.length > 1
                  ? ((r = [e, e, "", n]),
                    x.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, t) {
                          for (var i, r = o(e, n), a = r.length; a--; )
                            (i = et(e, r[a])), (e[i] = !(t[i] = r[a]));
                        })
                      : function (e) {
                          return o(e, 0, r);
                        })
                  : o;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  r = C(e.replace(st, "$1"));
                return r[R]
                  ? i(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: i(function (e) {
                return (
                  (e = e.replace(yt, wt)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: i(function (e) {
                return (
                  pt.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(yt, wt).toLowerCase()),
                  function (t) {
                    var n;
                    do
                      if (
                        (n = L
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || 0 === n.indexOf(e + "-")
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === O;
              },
              focus: function (e) {
                return (
                  e === N.activeElement &&
                  (!N.hasFocus || N.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return e.disabled === !1;
              },
              disabled: function (e) {
                return e.disabled === !0;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !x.pseudos.empty(e);
              },
              header: function (e) {
                return mt.test(e.nodeName);
              },
              input: function (e) {
                return ht.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: c(function () {
                return [0];
              }),
              last: c(function (e, t) {
                return [t - 1];
              }),
              eq: c(function (e, t, n) {
                return [0 > n ? n + t : n];
              }),
              even: c(function (e, t) {
                for (var n = 0; t > n; n += 2) e.push(n);
                return e;
              }),
              odd: c(function (e, t) {
                for (var n = 1; t > n; n += 2) e.push(n);
                return e;
              }),
              lt: c(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: c(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }),
        (x.pseudos.nth = x.pseudos.eq);
      for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        x.pseudos[y] = s(y);
      for (y in { submit: !0, reset: !0 }) x.pseudos[y] = l(y);
      return (
        (d.prototype = x.filters = x.pseudos),
        (x.setFilters = new d()),
        (T = t.tokenize =
          function (e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = x.preFilter; s; ) {
              (!i || (r = lt.exec(s))) &&
                (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                (i = !1),
                (r = ct.exec(s)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(st, " ") }),
                  (s = s.slice(i.length)));
              for (a in x.filter)
                !(r = ft[a].exec(s)) ||
                  (c[a] && !(r = c[a](r))) ||
                  ((i = r.shift()),
                  o.push({ value: i, type: a, matches: r }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0);
          }),
        (C = t.compile =
          function (e, t) {
            var n,
              i = [],
              r = [],
              o = U[e + " "];
            if (!o) {
              for (t || (t = T(e)), n = t.length; n--; )
                (o = _(t[n])), o[R] ? i.push(o) : r.push(o);
              (o = U(e, b(r, i))), (o.selector = e);
            }
            return o;
          }),
        (j = t.select =
          function (e, t, n, i) {
            var r,
              o,
              a,
              s,
              l,
              c = "function" == typeof e && e,
              d = !i && T((e = c.selector || e));
            if (((n = n || []), 1 === d.length)) {
              if (
                ((o = d[0] = d[0].slice(0)),
                o.length > 2 &&
                  "ID" === (a = o[0]).type &&
                  w.getById &&
                  9 === t.nodeType &&
                  L &&
                  x.relative[o[1].type])
              ) {
                if (
                  ((t = (x.find.ID(a.matches[0].replace(yt, wt), t) || [])[0]),
                  !t)
                )
                  return n;
                c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                r = ft.needsContext.test(e) ? 0 : o.length;
                r-- && ((a = o[r]), !x.relative[(s = a.type)]);

              )
                if (
                  (l = x.find[s]) &&
                  (i = l(
                    a.matches[0].replace(yt, wt),
                    (_t.test(o[0].type) && u(t.parentNode)) || t,
                  ))
                ) {
                  if ((o.splice(r, 1), (e = i.length && p(o)), !e))
                    return Q.apply(n, i), n;
                  break;
                }
            }
            return (
              (c || C(e, d))(
                i,
                t,
                !L,
                n,
                !t || (_t.test(e) && u(t.parentNode)) || t,
              ),
              n
            );
          }),
        (w.sortStable = R.split("").sort(J).join("") === R),
        (w.detectDuplicates = !!$),
        D(),
        (w.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(N.createElement("div"));
        })),
        r(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (w.attributes &&
          r(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          o(tt, function (e, t, n) {
            var i;
            return n
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        t
      );
    })(e);
    (ot.find = ut),
      (ot.expr = ut.selectors),
      (ot.expr[":"] = ot.expr.pseudos),
      (ot.uniqueSort = ot.unique = ut.uniqueSort),
      (ot.text = ut.getText),
      (ot.isXMLDoc = ut.isXML),
      (ot.contains = ut.contains);
    var dt = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && ot(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      pt = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      ft = ot.expr.match.needsContext,
      ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      mt = /^.[^:#\[\.,]*$/;
    (ot.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? ot.find.matchesSelector(i, e)
            ? [i]
            : []
          : ot.find.matches(
              e,
              ot.grep(t, function (e) {
                return 1 === e.nodeType;
              }),
            )
      );
    }),
      ot.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            r = this;
          if ("string" != typeof e)
            return this.pushStack(
              ot(e).filter(function () {
                for (t = 0; n > t; t++) if (ot.contains(r[t], this)) return !0;
              }),
            );
          for (t = 0; n > t; t++) ot.find(e, r[t], i);
          return (
            (i = this.pushStack(n > 1 ? ot.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + e : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(i(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(i(this, e || [], !0));
        },
        is: function (e) {
          return !!i(
            this,
            "string" == typeof e && ft.test(e) ? ot(e) : e || [],
            !1,
          ).length;
        },
      });
    var gt,
      vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      _t = (ot.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || gt), "string" == typeof e)) {
          if (
            ((i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : vt.exec(e)),
            !i || (!i[1] && t))
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof ot ? t[0] : t),
              ot.merge(
                this,
                ot.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : G,
                  !0,
                ),
              ),
              ht.test(i[1]) && ot.isPlainObject(t))
            )
              for (i in t)
                ot.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = G.getElementById(i[2])),
            r && r.parentNode && ((this.length = 1), (this[0] = r)),
            (this.context = G),
            (this.selector = e),
            this
          );
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : ot.isFunction(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(ot)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            ot.makeArray(e, this));
      });
    (_t.prototype = ot.fn), (gt = ot(G));
    var bt = /^(?:parents|prev(?:Until|All))/,
      yt = { children: !0, contents: !0, next: !0, prev: !0 };
    ot.fn.extend({
      has: function (e) {
        var t = ot(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (ot.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            r = this.length,
            o = [],
            a =
              ft.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0;
          r > i;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && ot.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? Z.call(ot(e), this[0])
            : Z.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e),
        );
      },
    }),
      ot.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return dt(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return dt(e, "parentNode", n);
          },
          next: function (e) {
            return r(e, "nextSibling");
          },
          prev: function (e) {
            return r(e, "previousSibling");
          },
          nextAll: function (e) {
            return dt(e, "nextSibling");
          },
          prevAll: function (e) {
            return dt(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return dt(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return dt(e, "previousSibling", n);
          },
          siblings: function (e) {
            return pt((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return pt(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || ot.merge([], e.childNodes);
          },
        },
        function (e, t) {
          ot.fn[e] = function (n, i) {
            var r = ot.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (r = ot.filter(i, r)),
              this.length > 1 &&
                (yt[e] || ot.uniqueSort(r), bt.test(e) && r.reverse()),
              this.pushStack(r)
            );
          };
        },
      );
    var wt = /\S+/g;
    (ot.Callbacks = function (e) {
      e = "string" == typeof e ? o(e) : ot.extend({}, e);
      var t,
        n,
        i,
        r,
        a = [],
        s = [],
        l = -1,
        c = function () {
          for (r = e.once, i = t = !0; s.length; l = -1)
            for (n = s.shift(); ++l < a.length; )
              a[l].apply(n[0], n[1]) === !1 &&
                e.stopOnFalse &&
                ((l = a.length), (n = !1));
          e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
        },
        u = {
          add: function () {
            return (
              a &&
                (n && !t && ((l = a.length - 1), s.push(n)),
                (function i(t) {
                  ot.each(t, function (t, n) {
                    ot.isFunction(n)
                      ? (e.unique && u.has(n)) || a.push(n)
                      : n && n.length && "string" !== ot.type(n) && i(n);
                  });
                })(arguments),
                n && !t && c()),
              this
            );
          },
          remove: function () {
            return (
              ot.each(arguments, function (e, t) {
                for (var n; (n = ot.inArray(t, a, n)) > -1; )
                  a.splice(n, 1), l >= n && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? ot.inArray(e, a) > -1 : a.length > 0;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (r = s = []), (a = n = ""), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (r = s = []), n || (a = n = ""), this;
          },
          locked: function () {
            return !!r;
          },
          fireWith: function (e, n) {
            return (
              r ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                s.push(n),
                t || c()),
              this
            );
          },
          fire: function () {
            return u.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return u;
    }),
      ot.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
              ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
              ["notify", "progress", ot.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return ot
                  .Deferred(function (n) {
                    ot.each(t, function (t, o) {
                      var a = ot.isFunction(e[t]) && e[t];
                      r[o[1]](function () {
                        var e = a && a.apply(this, arguments);
                        e && ot.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[o[0] + "With"](
                              this === i ? n.promise() : this,
                              a ? [e] : arguments,
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? ot.extend(e, i) : i;
              },
            },
            r = {};
          return (
            (i.pipe = i.then),
            ot.each(t, function (e, o) {
              var a = o[2],
                s = o[3];
              (i[o[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock,
                  ),
                (r[o[0]] = function () {
                  return (
                    r[o[0] + "With"](this === r ? i : this, arguments), this
                  );
                }),
                (r[o[0] + "With"] = a.fireWith);
            }),
            i.promise(r),
            e && e.call(r, r),
            r
          );
        },
        when: function (e) {
          var t,
            n,
            i,
            r = 0,
            o = K.call(arguments),
            a = o.length,
            s = 1 !== a || (e && ot.isFunction(e.promise)) ? a : 0,
            l = 1 === s ? e : ot.Deferred(),
            c = function (e, n, i) {
              return function (r) {
                (n[e] = this),
                  (i[e] = arguments.length > 1 ? K.call(arguments) : r),
                  i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
              };
            };
          if (a > 1)
            for (
              t = new Array(a), n = new Array(a), i = new Array(a);
              a > r;
              r++
            )
              o[r] && ot.isFunction(o[r].promise)
                ? o[r]
                    .promise()
                    .progress(c(r, n, t))
                    .done(c(r, i, o))
                    .fail(l.reject)
                : --s;
          return s || l.resolveWith(i, o), l.promise();
        },
      });
    var xt;
    (ot.fn.ready = function (e) {
      return ot.ready.promise().done(e), this;
    }),
      ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? ot.readyWait++ : ot.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --ot.readyWait : ot.isReady) ||
            ((ot.isReady = !0),
            (e !== !0 && --ot.readyWait > 0) ||
              (xt.resolveWith(G, [ot]),
              ot.fn.triggerHandler &&
                (ot(G).triggerHandler("ready"), ot(G).off("ready"))));
        },
      }),
      (ot.ready.promise = function (t) {
        return (
          xt ||
            ((xt = ot.Deferred()),
            "complete" === G.readyState ||
            ("loading" !== G.readyState && !G.documentElement.doScroll)
              ? e.setTimeout(ot.ready)
              : (G.addEventListener("DOMContentLoaded", a),
                e.addEventListener("load", a))),
          xt.promise(t)
        );
      }),
      ot.ready.promise();
    var kt = function (e, t, n, i, r, o, a) {
        var s = 0,
          l = e.length,
          c = null == n;
        if ("object" === ot.type(n)) {
          r = !0;
          for (s in n) kt(e, t, s, n[s], !0, o, a);
        } else if (
          void 0 !== i &&
          ((r = !0),
          ot.isFunction(i) || (a = !0),
          c &&
            (a
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(ot(e), n);
                }))),
          t)
        )
          for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
      },
      St = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (s.uid = 1),
      (s.prototype = {
        register: function (e, t) {
          var n = t || {};
          return (
            e.nodeType
              ? (e[this.expando] = n)
              : Object.defineProperty(e, this.expando, {
                  value: n,
                  writable: !0,
                  configurable: !0,
                }),
            e[this.expando]
          );
        },
        cache: function (e) {
          if (!St(e)) return {};
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              St(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            r = this.cache(e);
          if ("string" == typeof t) r[t] = n;
          else for (i in t) r[i] = t[i];
          return r;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? ((i = this.get(e, t)),
              void 0 !== i ? i : this.get(e, ot.camelCase(t)))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            r,
            o = e[this.expando];
          if (void 0 !== o) {
            if (void 0 === t) this.register(e);
            else {
              ot.isArray(t)
                ? (i = t.concat(t.map(ot.camelCase)))
                : ((r = ot.camelCase(t)),
                  t in o
                    ? (i = [t, r])
                    : ((i = r), (i = i in o ? [i] : i.match(wt) || []))),
                (n = i.length);
              for (; n--; ) delete o[i[n]];
            }
            (void 0 === t || ot.isEmptyObject(o)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !ot.isEmptyObject(t);
        },
      });
    var Tt = new s(),
      Ct = new s(),
      jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Et = /[A-Z]/g;
    ot.extend({
      hasData: function (e) {
        return Ct.hasData(e) || Tt.hasData(e);
      },
      data: function (e, t, n) {
        return Ct.access(e, t, n);
      },
      removeData: function (e, t) {
        Ct.remove(e, t);
      },
      _data: function (e, t, n) {
        return Tt.access(e, t, n);
      },
      _removeData: function (e, t) {
        Tt.remove(e, t);
      },
    }),
      ot.fn.extend({
        data: function (e, t) {
          var n,
            i,
            r,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((r = Ct.get(o)), 1 === o.nodeType && !Tt.get(o, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((i = a[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = ot.camelCase(i.slice(5))), l(o, i, r[i])));
              Tt.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof e
            ? this.each(function () {
                Ct.set(this, e);
              })
            : kt(
                this,
                function (t) {
                  var n, i;
                  if (o && void 0 === t) {
                    if (
                      ((n =
                        Ct.get(o, e) ||
                        Ct.get(o, e.replace(Et, "-$&").toLowerCase())),
                      void 0 !== n)
                    )
                      return n;
                    if (
                      ((i = ot.camelCase(e)), (n = Ct.get(o, i)), void 0 !== n)
                    )
                      return n;
                    if (((n = l(o, i, void 0)), void 0 !== n)) return n;
                  } else
                    (i = ot.camelCase(e)),
                      this.each(function () {
                        var n = Ct.get(this, i);
                        Ct.set(this, i, t),
                          e.indexOf("-") > -1 &&
                            void 0 !== n &&
                            Ct.set(this, e, t);
                      });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0,
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Ct.remove(this, e);
          });
        },
      }),
      ot.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = Tt.get(e, t)),
              n &&
                (!i || ot.isArray(n)
                  ? (i = Tt.access(e, t, ot.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = ot.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = ot._queueHooks(e, t),
            a = function () {
              ot.dequeue(e, t);
            };
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              r.call(e, a, o)),
            !i && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Tt.get(e, n) ||
            Tt.access(e, n, {
              empty: ot.Callbacks("once memory").add(function () {
                Tt.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      ot.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? ot.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = ot.queue(this, e, t);
                  ot._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            ot.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            r = ot.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --i || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = Tt.get(o[a], e + "queueHooks")),
              n && n.empty && (i++, n.empty.add(s));
          return s(), r.promise(t);
        },
      });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      $t = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
      Dt = ["Top", "Right", "Bottom", "Left"],
      Nt = function (e, t) {
        return (
          (e = t || e),
          "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        );
      },
      Ot = /^(?:checkbox|radio)$/i,
      Lt = /<([\w:-]+)/,
      Mt = /^$|\/(?:java|ecma)script/i,
      It = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (It.optgroup = It.option),
      (It.tbody = It.tfoot = It.colgroup = It.caption = It.thead),
      (It.th = It.td);
    var Pt = /<|&#?\w+;/;
    !(function () {
      var e = G.createDocumentFragment(),
        t = e.appendChild(G.createElement("div")),
        n = G.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ft = /^key/,
      Rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      qt = /^([^.]*)(?:\.(.+)|)/;
    (ot.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Tt.get(e);
        if (g)
          for (
            n.handler && ((o = n), (n = o.handler), (r = o.selector)),
              n.guid || (n.guid = ot.guid++),
              (l = g.events) || (l = g.events = {}),
              (a = g.handle) ||
                (a = g.handle =
                  function (t) {
                    return "undefined" != typeof ot &&
                      ot.event.triggered !== t.type
                      ? ot.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || "").match(wt) || [""],
              c = t.length;
            c--;

          )
            (s = qt.exec(t[c]) || []),
              (f = m = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f &&
                ((d = ot.event.special[f] || {}),
                (f = (r ? d.delegateType : d.bindType) || f),
                (d = ot.event.special[f] || {}),
                (u = ot.extend(
                  {
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ot.expr.match.needsContext.test(r),
                    namespace: h.join("."),
                  },
                  o,
                )),
                (p = l[f]) ||
                  ((p = l[f] = []),
                  (p.delegateCount = 0),
                  (d.setup && d.setup.call(e, i, h, a) !== !1) ||
                    (e.addEventListener && e.addEventListener(f, a))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                (ot.event.global[f] = !0));
      },
      remove: function (e, t, n, i, r) {
        var o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Tt.hasData(e) && Tt.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(wt) || [""], c = t.length; c--; )
            if (
              ((s = qt.exec(t[c]) || []),
              (f = m = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = ot.event.special[f] || {},
                  f = (i ? d.delegateType : d.bindType) || f,
                  p = l[f] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = o = p.length;
                o--;

              )
                (u = p[o]),
                  (!r && m !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (s && !s.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (p.splice(o, 1),
                    u.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, u));
              a &&
                !p.length &&
                ((d.teardown && d.teardown.call(e, h, g.handle) !== !1) ||
                  ot.removeEvent(e, f, g.handle),
                delete l[f]);
            } else for (f in l) ot.event.remove(e, f + t[c], n, i, !0);
          ot.isEmptyObject(l) && Tt.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        e = ot.event.fix(e);
        var t,
          n,
          i,
          r,
          o,
          a = [],
          s = K.call(arguments),
          l = (Tt.get(this, "events") || {})[e.type] || [],
          c = ot.event.special[e.type] || {};
        if (
          ((s[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, e) !== !1)
        ) {
          for (
            a = ot.event.handlers.call(this, e, l), t = 0;
            (r = a[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (!e.rnamespace || e.rnamespace.test(o.namespace)) &&
                ((e.handleObj = o),
                (e.data = o.data),
                (i = (
                  (ot.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, s)),
                void 0 !== i &&
                  (e.result = i) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          r,
          o,
          a = [],
          s = t.delegateCount,
          l = e.target;
        if (
          s &&
          l.nodeType &&
          ("click" !== e.type || isNaN(e.button) || e.button < 1)
        )
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
              for (i = [], n = 0; s > n; n++)
                (o = t[n]),
                  (r = o.selector + " "),
                  void 0 === i[r] &&
                    (i[r] = o.needsContext
                      ? ot(r, this).index(l) > -1
                      : ot.find(r, this, null, [l]).length),
                  i[r] && i.push(o);
              i.length && a.push({ elem: l, handlers: i });
            }
        return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " ",
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " ",
          ),
        filter: function (e, t) {
          var n,
            i,
            r,
            o = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = e.target.ownerDocument || G),
              (i = n.documentElement),
              (r = n.body),
              (e.pageX =
                t.clientX +
                ((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
                ((i && i.clientLeft) || (r && r.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((i && i.scrollTop) || (r && r.scrollTop) || 0) -
                ((i && i.clientTop) || (r && r.clientTop) || 0))),
            e.which ||
              void 0 === o ||
              (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[ot.expando]) return e;
        var t,
          n,
          i,
          r = e.type,
          o = e,
          a = this.fixHooks[r];
        for (
          a ||
            (this.fixHooks[r] = a =
              Rt.test(r) ? this.mouseHooks : Ft.test(r) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new ot.Event(o),
            t = i.length;
          t--;

        )
          (n = i[t]), (e[n] = o[n]);
        return (
          e.target || (e.target = G),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          a.filter ? a.filter(e, o) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== m() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === m() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              ot.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return ot.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (ot.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (ot.Event = function (e, t) {
        return this instanceof ot.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? f
                    : h))
              : (this.type = e),
            t && ot.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || ot.now()),
            void (this[ot.expando] = !0))
          : new ot.Event(e, t);
      }),
      (ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = f),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = f),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = f),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      ot.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = this,
                r = e.relatedTarget,
                o = e.handleObj;
              return (
                (!r || (r !== i && !ot.contains(i, r))) &&
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        },
      ),
      ot.fn.extend({
        on: function (e, t, n, i) {
          return g(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return g(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              ot(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler,
              ),
              this
            );
          if ("object" == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this;
          }
          return (
            (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
            n === !1 && (n = h),
            this.each(function () {
              ot.event.remove(this, e, n, t);
            })
          );
        },
      });
    var Ht =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Bt = /<script|<style|<link/i,
      zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Wt = /^true\/(.*)/,
      Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
      htmlPrefilter: function (e) {
        return e.replace(Ht, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s = e.cloneNode(!0),
          l = ot.contains(e.ownerDocument, e);
        if (
          !(
            it.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ot.isXMLDoc(e)
          )
        )
          for (a = u(s), o = u(e), i = 0, r = o.length; r > i; i++)
            w(o[i], a[i]);
        if (t)
          if (n)
            for (o = o || u(e), a = a || u(s), i = 0, r = o.length; r > i; i++)
              y(o[i], a[i]);
          else y(e, s);
        return (
          (a = u(s, "script")), a.length > 0 && d(a, !l && u(e, "script")), s
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, r = ot.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (St(n)) {
            if ((t = n[Tt.expando])) {
              if (t.events)
                for (i in t.events)
                  r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, t.handle);
              n[Tt.expando] = void 0;
            }
            n[Ct.expando] && (n[Ct.expando] = void 0);
          }
      },
    }),
      ot.fn.extend({
        domManip: x,
        detach: function (e) {
          return k(this, e, !0);
        },
        remove: function (e) {
          return k(this, e);
        },
        text: function (e) {
          return kt(
            this,
            function (e) {
              return void 0 === e
                ? ot.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return x(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = v(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return x(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = v(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return x(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return x(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (ot.cleanData(u(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return ot.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return kt(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Bt.test(e) &&
                !It[(Lt.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = ot.htmlPrefilter(e);
                try {
                  for (; i > n; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (ot.cleanData(u(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (r) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = [];
          return x(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              ot.inArray(this, e) < 0 &&
                (ot.cleanData(u(this)), n && n.replaceChild(t, this));
            },
            e,
          );
        },
      }),
      ot.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          ot.fn[e] = function (e) {
            for (var n, i = [], r = ot(e), o = r.length - 1, a = 0; o >= a; a++)
              (n = a === o ? this : this.clone(!0)),
                ot(r[a])[t](n),
                Q.apply(i, n.get());
            return this.pushStack(i);
          };
        },
      );
    var Jt,
      Yt = { HTML: "block", BODY: "block" },
      Vt = /^margin/,
      Gt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
      Kt = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      Xt = function (e, t, n, i) {
        var r,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r;
      },
      Qt = G.documentElement;
    !(function () {
      function t() {
        (s.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (s.innerHTML = ""),
          Qt.appendChild(a);
        var t = e.getComputedStyle(s);
        (n = "1%" !== t.top),
          (o = "2px" === t.marginLeft),
          (i = "4px" === t.width),
          (s.style.marginRight = "50%"),
          (r = "4px" === t.marginRight),
          Qt.removeChild(a);
      }
      var n,
        i,
        r,
        o,
        a = G.createElement("div"),
        s = G.createElement("div");
      s.style &&
        ((s.style.backgroundClip = "content-box"),
        (s.cloneNode(!0).style.backgroundClip = ""),
        (it.clearCloneStyle = "content-box" === s.style.backgroundClip),
        (a.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        a.appendChild(s),
        ot.extend(it, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return null == i && t(), i;
          },
          pixelMarginRight: function () {
            return null == i && t(), r;
          },
          reliableMarginLeft: function () {
            return null == i && t(), o;
          },
          reliableMarginRight: function () {
            var t,
              n = s.appendChild(G.createElement("div"));
            return (
              (n.style.cssText = s.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (s.style.width = "1px"),
              Qt.appendChild(a),
              (t = !parseFloat(e.getComputedStyle(n).marginRight)),
              Qt.removeChild(a),
              s.removeChild(n),
              t
            );
          },
        }));
    })();
    var Zt = /^(none|table(?!-c[ea]).+)/,
      en = { position: "absolute", visibility: "hidden", display: "block" },
      tn = { letterSpacing: "0", fontWeight: "400" },
      nn = ["Webkit", "O", "Moz", "ms"],
      rn = G.createElement("div").style;
    ot.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = C(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            o,
            a,
            s = ot.camelCase(t),
            l = e.style;
          return (
            (t = ot.cssProps[s] || (ot.cssProps[s] = E(s) || s)),
            (a = ot.cssHooks[t] || ot.cssHooks[s]),
            void 0 === n
              ? a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : l[t]
              : ((o = typeof n),
                "string" === o &&
                  (r = $t.exec(n)) &&
                  r[1] &&
                  ((n = c(e, t, r)), (o = "number")),
                null != n &&
                  n === n &&
                  ("number" === o &&
                    (n += (r && r[3]) || (ot.cssNumber[s] ? "" : "px")),
                  it.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                    (l[t] = n)),
                void 0)
          );
        }
      },
      css: function (e, t, n, i) {
        var r,
          o,
          a,
          s = ot.camelCase(t);
        return (
          (t = ot.cssProps[s] || (ot.cssProps[s] = E(s) || s)),
          (a = ot.cssHooks[t] || ot.cssHooks[s]),
          a && "get" in a && (r = a.get(e, !0, n)),
          void 0 === r && (r = C(e, t, i)),
          "normal" === r && t in tn && (r = tn[t]),
          "" === n || n
            ? ((o = parseFloat(r)), n === !0 || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      ot.each(["height", "width"], function (e, t) {
        ot.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? Zt.test(ot.css(e, "display")) && 0 === e.offsetWidth
                ? Xt(e, en, function () {
                    return D(e, t, i);
                  })
                : D(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var r,
              o = i && Kt(e),
              a =
                i &&
                $(e, t, i, "border-box" === ot.css(e, "boxSizing", !1, o), o);
            return (
              a &&
                (r = $t.exec(n)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[t] = n), (n = ot.css(e, t))),
              A(e, n, a)
            );
          },
        };
      }),
      (ot.cssHooks.marginLeft = j(it.reliableMarginLeft, function (e, t) {
        return t
          ? (parseFloat(C(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Xt(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          : void 0;
      })),
      (ot.cssHooks.marginRight = j(it.reliableMarginRight, function (e, t) {
        return t
          ? Xt(e, { display: "inline-block" }, C, [e, "marginRight"])
          : void 0;
      })),
      ot.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (ot.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              r[e + Dt[i] + t] = o[i] || o[i - 2] || o[0];
            return r;
          },
        }),
          Vt.test(e) || (ot.cssHooks[e + t].set = A);
      }),
      ot.fn.extend({
        css: function (e, t) {
          return kt(
            this,
            function (e, t, n) {
              var i,
                r,
                o = {},
                a = 0;
              if (ot.isArray(t)) {
                for (i = Kt(e), r = t.length; r > a; a++)
                  o[t[a]] = ot.css(e, t[a], !1, i);
                return o;
              }
              return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
        show: function () {
          return N(this, !0);
        },
        hide: function () {
          return N(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                Nt(this) ? ot(this).show() : ot(this).hide();
              });
        },
      }),
      (ot.Tween = O),
      (O.prototype = {
        constructor: O,
        init: function (e, t, n, i, r, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = r || ot.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = o || (ot.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = O.propHooks[this.prop];
          return e && e.get ? e.get(this) : O.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = O.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? ot.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : O.propHooks._default.set(this),
            this
          );
        },
      }),
      (O.prototype.init.prototype = O.prototype),
      (O.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = ot.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            ot.fx.step[e.prop]
              ? ot.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[ot.cssProps[e.prop]] &&
                  !ot.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : ot.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (O.propHooks.scrollTop = O.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (ot.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (ot.fx = O.prototype.init),
      (ot.fx.step = {});
    var on,
      an,
      sn = /^(?:toggle|show|hide)$/,
      ln = /queueHooks$/;
    (ot.Animation = ot.extend(R, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return c(n.elem, e, $t.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        ot.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(wt));
        for (var n, i = 0, r = e.length; r > i; i++)
          (n = e[i]),
            (R.tweeners[n] = R.tweeners[n] || []),
            R.tweeners[n].unshift(t);
      },
      prefilters: [P],
      prefilter: function (e, t) {
        t ? R.prefilters.unshift(e) : R.prefilters.push(e);
      },
    })),
      (ot.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? ot.extend({}, e)
            : {
                complete: n || (!n && t) || (ot.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !ot.isFunction(t) && t),
              };
        return (
          (i.duration = ot.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in ot.fx.speeds
            ? ot.fx.speeds[i.duration]
            : ot.fx.speeds._default),
          (null == i.queue || i.queue === !0) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            ot.isFunction(i.old) && i.old.call(this),
              i.queue && ot.dequeue(this, i.queue);
          }),
          i
        );
      }),
      ot.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(Nt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var r = ot.isEmptyObject(e),
            o = ot.speed(t, n, i),
            a = function () {
              var t = R(this, ot.extend({}, e), o);
              (r || Tt.get(this, "finish")) && t.stop(!0);
            };
          return (
            (a.finish = a),
            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                r = null != e && e + "queueHooks",
                o = ot.timers,
                a = Tt.get(this);
              if (r) a[r] && a[r].stop && i(a[r]);
              else for (r in a) a[r] && a[r].stop && ln.test(r) && i(a[r]);
              for (r = o.length; r--; )
                o[r].elem !== this ||
                  (null != e && o[r].queue !== e) ||
                  (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
              (t || !n) && ot.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = Tt.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = ot.timers,
                a = i ? i.length : 0;
              for (
                n.finish = !0,
                  ot.queue(this, e, []),
                  r && r.stop && r.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; a > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      ot.each(["toggle", "show", "hide"], function (e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(M(t, !0), e, i, r);
        };
      }),
      ot.each(
        {
          slideDown: M("show"),
          slideUp: M("hide"),
          slideToggle: M("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          ot.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        },
      ),
      (ot.timers = []),
      (ot.fx.tick = function () {
        var e,
          t = 0,
          n = ot.timers;
        for (on = ot.now(); t < n.length; t++)
          (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
        n.length || ot.fx.stop(), (on = void 0);
      }),
      (ot.fx.timer = function (e) {
        ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop();
      }),
      (ot.fx.interval = 13),
      (ot.fx.start = function () {
        an || (an = e.setInterval(ot.fx.tick, ot.fx.interval));
      }),
      (ot.fx.stop = function () {
        e.clearInterval(an), (an = null);
      }),
      (ot.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (ot.fn.delay = function (t, n) {
        return (
          (t = ot.fx ? ot.fx.speeds[t] || t : t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var e = G.createElement("input"),
          t = G.createElement("select"),
          n = t.appendChild(G.createElement("option"));
        (e.type = "checkbox"),
          (it.checkOn = "" !== e.value),
          (it.optSelected = n.selected),
          (t.disabled = !0),
          (it.optDisabled = !n.disabled),
          (e = G.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (it.radioValue = "t" === e.value);
      })();
    var cn,
      un = ot.expr.attrHandle;
    ot.fn.extend({
      attr: function (e, t) {
        return kt(this, ot.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          ot.removeAttr(this, e);
        });
      },
    }),
      ot.extend({
        attr: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? ot.prop(e, t, n)
              : ((1 === o && ot.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (r =
                    ot.attrHooks[t] ||
                    (ot.expr.match.bool.test(t) ? cn : void 0))),
                void 0 !== n
                  ? null === n
                    ? void ot.removeAttr(e, t)
                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = ot.find.attr(e, t)), null == i ? void 0 : i));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!it.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i,
            r = 0,
            o = t && t.match(wt);
          if (o && 1 === e.nodeType)
            for (; (n = o[r++]); )
              (i = ot.propFix[n] || n),
                ot.expr.match.bool.test(n) && (e[i] = !1),
                e.removeAttribute(n);
        },
      }),
      (cn = {
        set: function (e, t, n) {
          return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      ot.each(ot.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = un[t] || ot.find.attr;
        un[t] = function (e, t, i) {
          var r, o;
          return (
            i ||
              ((o = un[t]),
              (un[t] = r),
              (r = null != n(e, t, i) ? t.toLowerCase() : null),
              (un[t] = o)),
            r
          );
        };
      });
    var dn = /^(?:input|select|textarea|button)$/i,
      pn = /^(?:a|area)$/i;
    ot.fn.extend({
      prop: function (e, t) {
        return kt(this, ot.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[ot.propFix[e] || e];
        });
      },
    }),
      ot.extend({
        prop: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && ot.isXMLDoc(e)) ||
                ((t = ot.propFix[t] || t), (r = ot.propHooks[t])),
              void 0 !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = ot.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : dn.test(e.nodeName) || (pn.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      it.optSelected ||
        (ot.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      ot.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          ot.propFix[this.toLowerCase()] = this;
        },
      );
    var fn = /[\t\r\n\f]/g;
    ot.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (ot.isFunction(e))
          return this.each(function (t) {
            ot(this).addClass(e.call(this, t, q(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(wt) || []; (n = this[l++]); )
            if (
              ((r = q(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")))
            ) {
              for (a = 0; (o = t[a++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              (s = ot.trim(i)), r !== s && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (ot.isFunction(e))
          return this.each(function (t) {
            ot(this).removeClass(e.call(this, t, q(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(wt) || []; (n = this[l++]); )
            if (
              ((r = q(n)),
              (i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")))
            ) {
              for (a = 0; (o = t[a++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              (s = ot.trim(i)), r !== s && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : this.each(
              ot.isFunction(e)
                ? function (n) {
                    ot(this).toggleClass(e.call(this, n, q(this), t), t);
                  }
                : function () {
                    var t, i, r, o;
                    if ("string" === n)
                      for (
                        i = 0, r = ot(this), o = e.match(wt) || [];
                        (t = o[i++]);

                      )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                      (void 0 === e || "boolean" === n) &&
                        ((t = q(this)),
                        t && Tt.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || e === !1
                              ? ""
                              : Tt.get(this, "__className__") || "",
                          ));
                  },
            );
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            (" " + q(n) + " ").replace(fn, " ").indexOf(t) > -1
          )
            return !0;
        return !1;
      },
    });
    var hn = /\r/g,
      mn = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          r = this[0];
        {
          if (arguments.length)
            return (
              (i = ot.isFunction(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  ((r = i ? e.call(this, n, ot(this).val()) : e),
                  null == r
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : ot.isArray(r) &&
                      (r = ot.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    ot.valHooks[this.type] ||
                    ot.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              })
            );
          if (r)
            return (
              (t =
                ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (n = t.get(r, "value"))
                ? n
                : ((n = r.value),
                  "string" == typeof n ? n.replace(hn, "") : null == n ? "" : n)
            );
        }
      },
    }),
      ot.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = ot.find.attr(e, "value");
              return null != t ? t : ot.trim(ot.text(e)).replace(mn, " ");
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  r = e.selectedIndex,
                  o = "select-one" === e.type || 0 > r,
                  a = o ? null : [],
                  s = o ? r + 1 : i.length,
                  l = 0 > r ? s : o ? r : 0;
                s > l;
                l++
              )
                if (
                  ((n = i[l]),
                  !(
                    (!n.selected && l !== r) ||
                    (it.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      ot.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = ot(n).val()), o)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, o = ot.makeArray(t), a = r.length;
                a--;

              )
                (i = r[a]),
                  (i.selected =
                    ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      ot.each(["radio", "checkbox"], function () {
        (ot.valHooks[this] = {
          set: function (e, t) {
            return ot.isArray(t)
              ? (e.checked = ot.inArray(ot(e).val(), t) > -1)
              : void 0;
          },
        }),
          it.checkOn ||
            (ot.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var gn = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
      trigger: function (t, n, i, r) {
        var o,
          a,
          s,
          l,
          c,
          u,
          d,
          p = [i || G],
          f = nt.call(t, "type") ? t.type : t,
          h = nt.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = s = i = i || G),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !gn.test(f + ot.event.triggered) &&
            (f.indexOf(".") > -1 &&
              ((h = f.split(".")), (f = h.shift()), h.sort()),
            (c = f.indexOf(":") < 0 && "on" + f),
            (t = t[ot.expando]
              ? t
              : new ot.Event(f, "object" == typeof t && t)),
            (t.isTrigger = r ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : ot.makeArray(n, [t])),
            (d = ot.event.special[f] || {}),
            r || !d.trigger || d.trigger.apply(i, n) !== !1))
        ) {
          if (!r && !d.noBubble && !ot.isWindow(i)) {
            for (
              l = d.delegateType || f, gn.test(l + f) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              p.push(a), (s = a);
            s === (i.ownerDocument || G) &&
              p.push(s.defaultView || s.parentWindow || e);
          }
          for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
            (t.type = o > 1 ? l : d.bindType || f),
              (u = (Tt.get(a, "events") || {})[t.type] && Tt.get(a, "handle")),
              u && u.apply(a, n),
              (u = c && a[c]),
              u &&
                u.apply &&
                St(a) &&
                ((t.result = u.apply(a, n)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = f),
            r ||
              t.isDefaultPrevented() ||
              (d._default && d._default.apply(p.pop(), n) !== !1) ||
              !St(i) ||
              (c &&
                ot.isFunction(i[f]) &&
                !ot.isWindow(i) &&
                ((s = i[c]),
                s && (i[c] = null),
                (ot.event.triggered = f),
                i[f](),
                (ot.event.triggered = void 0),
                s && (i[c] = s))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = ot.extend(new ot.Event(), n, { type: e, isSimulated: !0 });
        ot.event.trigger(i, null, t);
      },
    }),
      ot.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            ot.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? ot.event.trigger(e, t, n, !0) : void 0;
        },
      }),
      ot.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " ",
        ),
        function (e, t) {
          ot.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        },
      ),
      ot.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (it.focusin = "onfocusin" in e),
      it.focusin ||
        ot.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            ot.event.simulate(t, e.target, ot.event.fix(e));
          };
          ot.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                r = Tt.access(i, t);
              r || i.addEventListener(e, n, !0), Tt.access(i, t, (r || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                r = Tt.access(i, t) - 1;
              r
                ? Tt.access(i, t, r)
                : (i.removeEventListener(e, n, !0), Tt.remove(i, t));
            },
          };
        });
    var vn = e.location,
      _n = ot.now(),
      bn = /\?/;
    (ot.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (ot.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (i) {
          n = void 0;
        }
        return (
          (!n || n.getElementsByTagName("parsererror").length) &&
            ot.error("Invalid XML: " + t),
          n
        );
      });
    var yn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      xn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      kn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Sn = /^(?:GET|HEAD)$/,
      Tn = /^\/\//,
      Cn = {},
      jn = {},
      En = "*/".concat("*"),
      An = G.createElement("a");
    (An.href = vn.href),
      ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: vn.href,
          type: "GET",
          isLocal: kn.test(vn.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": En,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": ot.parseJSON,
            "text xml": ot.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? z(z(e, ot.ajaxSettings), t) : z(ot.ajaxSettings, e);
        },
        ajaxPrefilter: H(Cn),
        ajaxTransport: H(jn),
        ajax: function (t, n) {
          function i(t, n, i, s) {
            var c,
              d,
              _,
              b,
              w,
              k = n;
            2 !== y &&
              ((y = 2),
              l && e.clearTimeout(l),
              (r = void 0),
              (a = s || ""),
              (x.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && 300 > t) || 304 === t),
              i && (b = W(p, x, i)),
              (b = U(p, b, x, c)),
              c
                ? (p.ifModified &&
                    ((w = x.getResponseHeader("Last-Modified")),
                    w && (ot.lastModified[o] = w),
                    (w = x.getResponseHeader("etag")),
                    w && (ot.etag[o] = w)),
                  204 === t || "HEAD" === p.type
                    ? (k = "nocontent")
                    : 304 === t
                    ? (k = "notmodified")
                    : ((k = b.state), (d = b.data), (_ = b.error), (c = !_)))
                : ((_ = k), (t || !k) && ((k = "error"), 0 > t && (t = 0))),
              (x.status = t),
              (x.statusText = (n || k) + ""),
              c ? m.resolveWith(f, [d, k, x]) : m.rejectWith(f, [x, k, _]),
              x.statusCode(v),
              (v = void 0),
              u &&
                h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? d : _]),
              g.fireWith(f, [x, k]),
              u &&
                (h.trigger("ajaxComplete", [x, p]),
                --ot.active || ot.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var r,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p = ot.ajaxSetup({}, n),
            f = p.context || p,
            h = p.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
            m = ot.Deferred(),
            g = ot.Callbacks("once memory"),
            v = p.statusCode || {},
            _ = {},
            b = {},
            y = 0,
            w = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === y) {
                  if (!s)
                    for (s = {}; (t = xn.exec(a)); )
                      s[t[1].toLowerCase()] = t[2];
                  t = s[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === y ? a : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return y || ((e = b[n] = b[n] || e), (_[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return y || (p.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > y) for (t in e) v[t] = [v[t], e[t]];
                  else x.always(e[x.status]);
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return r && r.abort(t), i(0, t), this;
              },
            };
          if (
            ((m.promise(x).complete = g.add),
            (x.success = x.done),
            (x.error = x.fail),
            (p.url = ((t || p.url || vn.href) + "")
              .replace(yn, "")
              .replace(Tn, vn.protocol + "//")),
            (p.type = n.method || n.type || p.method || p.type),
            (p.dataTypes = ot
              .trim(p.dataType || "*")
              .toLowerCase()
              .match(wt) || [""]),
            null == p.crossDomain)
          ) {
            c = G.createElement("a");
            try {
              (c.href = p.url),
                (c.href = c.href),
                (p.crossDomain =
                  An.protocol + "//" + An.host != c.protocol + "//" + c.host);
            } catch (k) {
              p.crossDomain = !0;
            }
          }
          if (
            (p.data &&
              p.processData &&
              "string" != typeof p.data &&
              (p.data = ot.param(p.data, p.traditional)),
            B(Cn, p, n, x),
            2 === y)
          )
            return x;
          (u = ot.event && p.global),
            u && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Sn.test(p.type)),
            (o = p.url),
            p.hasContent ||
              (p.data &&
                ((o = p.url += (bn.test(o) ? "&" : "?") + p.data),
                delete p.data),
              p.cache === !1 &&
                (p.url = wn.test(o)
                  ? o.replace(wn, "$1_=" + _n++)
                  : o + (bn.test(o) ? "&" : "?") + "_=" + _n++)),
            p.ifModified &&
              (ot.lastModified[o] &&
                x.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
              ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])),
            ((p.data && p.hasContent && p.contentType !== !1) ||
              n.contentType) &&
              x.setRequestHeader("Content-Type", p.contentType),
            x.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + En + "; q=0.01" : "")
                : p.accepts["*"],
            );
          for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
          if (p.beforeSend && (p.beforeSend.call(f, x, p) === !1 || 2 === y))
            return x.abort();
          w = "abort";
          for (d in { success: 1, error: 1, complete: 1 }) x[d](p[d]);
          if ((r = B(jn, p, n, x))) {
            if (
              ((x.readyState = 1), u && h.trigger("ajaxSend", [x, p]), 2 === y)
            )
              return x;
            p.async &&
              p.timeout > 0 &&
              (l = e.setTimeout(function () {
                x.abort("timeout");
              }, p.timeout));
            try {
              (y = 1), r.send(_, i);
            } catch (k) {
              if (!(2 > y)) throw k;
              i(-1, k);
            }
          } else i(-1, "No Transport");
          return x;
        },
        getJSON: function (e, t, n) {
          return ot.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return ot.get(e, void 0, t, "script");
        },
      }),
      ot.each(["get", "post"], function (e, t) {
        ot[t] = function (e, n, i, r) {
          return (
            ot.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
            ot.ajax(
              ot.extend(
                { url: e, type: t, dataType: r, data: n, success: i },
                ot.isPlainObject(e) && e,
              ),
            )
          );
        };
      }),
      (ot._evalUrl = function (e) {
        return ot.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      ot.fn.extend({
        wrapAll: function (e) {
          var t;
          return ot.isFunction(e)
            ? this.each(function (t) {
                ot(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = ot(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return this.each(
            ot.isFunction(e)
              ? function (t) {
                  ot(this).wrapInner(e.call(this, t));
                }
              : function () {
                  var t = ot(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                },
          );
        },
        wrap: function (e) {
          var t = ot.isFunction(e);
          return this.each(function (n) {
            ot(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              ot.nodeName(this, "body") ||
                ot(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (ot.expr.filters.hidden = function (e) {
        return !ot.expr.filters.visible(e);
      }),
      (ot.expr.filters.visible = function (e) {
        return (
          e.offsetWidth > 0 ||
          e.offsetHeight > 0 ||
          e.getClientRects().length > 0
        );
      });
    var $n = /%20/g,
      Dn = /\[\]$/,
      Nn = /\r?\n/g,
      On = /^(?:submit|button|image|reset|file)$/i,
      Ln = /^(?:input|select|textarea|keygen)/i;
    (ot.param = function (e, t) {
      var n,
        i = [],
        r = function (e, t) {
          (t = ot.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional),
        ot.isArray(e) || (e.jquery && !ot.isPlainObject(e)))
      )
        ot.each(e, function () {
          r(this.name, this.value);
        });
      else for (n in e) J(n, e[n], t, r);
      return i.join("&").replace($n, "+");
    }),
      ot.fn.extend({
        serialize: function () {
          return ot.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = ot.prop(this, "elements");
            return e ? ot.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !ot(this).is(":disabled") &&
                Ln.test(this.nodeName) &&
                !On.test(e) &&
                (this.checked || !Ot.test(e))
              );
            })
            .map(function (e, t) {
              var n = ot(this).val();
              return null == n
                ? null
                : ot.isArray(n)
                ? ot.map(n, function (e) {
                    return { name: t.name, value: e.replace(Nn, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Nn, "\r\n") };
            })
            .get();
        },
      }),
      (ot.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (t) {}
      });
    var Mn = { 0: 200, 1223: 204 },
      In = ot.ajaxSettings.xhr();
    (it.cors = !!In && "withCredentials" in In),
      (it.ajax = In = !!In),
      ot.ajaxTransport(function (t) {
        var n, i;
        return it.cors || (In && !t.crossDomain)
          ? {
              send: function (r, o) {
                var a,
                  s = t.xhr();
                if (
                  (s.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                (n = function (e) {
                  return function () {
                    n &&
                      ((n =
                        i =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Mn[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (s.onload = n()),
                  (i = s.onerror = n("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = i)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          e.setTimeout(function () {
                            n && i();
                          });
                      }),
                  (n = n("abort"));
                try {
                  s.send((t.hasContent && t.data) || null);
                } catch (l) {
                  if (n) throw l;
                }
              },
              abort: function () {
                n && n();
              },
            }
          : void 0;
      }),
      ot.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return ot.globalEval(e), e;
          },
        },
      }),
      ot.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      ot.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (i, r) {
              (t = ot("<script>")
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && r("error" === e.type ? 404 : 200, e.type);
                  }),
                )),
                G.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Pn = [],
      Fn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Pn.pop() || ot.expando + "_" + _n++;
        return (this[e] = !0), e;
      },
    }),
      ot.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r,
          o,
          a,
          s =
            t.jsonp !== !1 &&
            (Fn.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded",
                  ) &&
                Fn.test(t.data) &&
                "data");
        return s || "jsonp" === t.dataTypes[0]
          ? ((r = t.jsonpCallback =
              ot.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(Fn, "$1" + r))
              : t.jsonp !== !1 &&
                (t.url += (bn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            (t.converters["script json"] = function () {
              return a || ot.error(r + " was not called"), a[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[r]),
            (e[r] = function () {
              a = arguments;
            }),
            i.always(function () {
              void 0 === o ? ot(e).removeProp(r) : (e[r] = o),
                t[r] && ((t.jsonpCallback = n.jsonpCallback), Pn.push(r)),
                a && ot.isFunction(o) && o(a[0]),
                (a = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (ot.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
        var i = ht.exec(e),
          r = !n && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = p([e], t, r)),
            r && r.length && ot(r).remove(),
            ot.merge([], i.childNodes));
      });
    var Rn = ot.fn.load;
    (ot.fn.load = function (e, t, n) {
      if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((i = ot.trim(e.slice(s))), (e = e.slice(0, s))),
        ot.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        a.length > 0 &&
          ot
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
      ot.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          ot.fn[t] = function (e) {
            return this.on(t, e);
          };
        },
      ),
      (ot.expr.filters.animated = function (e) {
        return ot.grep(ot.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (ot.offset = {
        setOffset: function (e, t, n) {
          var i,
            r,
            o,
            a,
            s,
            l,
            c,
            u = ot.css(e, "position"),
            d = ot(e),
            p = {};
          "static" === u && (e.style.position = "relative"),
            (s = d.offset()),
            (o = ot.css(e, "top")),
            (l = ot.css(e, "left")),
            (c =
              ("absolute" === u || "fixed" === u) &&
              (o + l).indexOf("auto") > -1),
            c
              ? ((i = d.position()), (a = i.top), (r = i.left))
              : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            ot.isFunction(t) && (t = t.call(e, n, ot.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + r),
            "using" in t ? t.using.call(e, p) : d.css(p);
        },
      }),
      ot.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  ot.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0],
            r = { top: 0, left: 0 },
            o = i && i.ownerDocument;
          if (o)
            return (
              (t = o.documentElement),
              ot.contains(t, i)
                ? ((r = i.getBoundingClientRect()),
                  (n = Y(o)),
                  {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft,
                  })
                : r
            );
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === ot.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  ot.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += ot.css(e[0], "borderTopWidth", !0)),
                  (i.left += ot.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - i.top - ot.css(n, "marginTop", !0),
                left: t.left - i.left - ot.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === ot.css(e, "position");

            )
              e = e.offsetParent;
            return e || Qt;
          });
        },
      }),
      ot.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          ot.fn[e] = function (i) {
            return kt(
              this,
              function (e, i, r) {
                var o = Y(e);
                return void 0 === r
                  ? o
                    ? o[t]
                    : e[i]
                  : void (o
                      ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                      : (e[i] = r));
              },
              e,
              i,
              arguments.length,
            );
          };
        },
      ),
      ot.each(["top", "left"], function (e, t) {
        ot.cssHooks[t] = j(it.pixelPosition, function (e, n) {
          return n
            ? ((n = C(e, t)), Gt.test(n) ? ot(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      ot.each({ Height: "height", Width: "width" }, function (e, t) {
        ot.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, i) {
            ot.fn[i] = function (i, r) {
              var o = arguments.length && (n || "boolean" != typeof i),
                a = n || (i === !0 || r === !0 ? "margin" : "border");
              return kt(
                this,
                function (t, n, i) {
                  var r;
                  return ot.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((r = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        r["scroll" + e],
                        t.body["offset" + e],
                        r["offset" + e],
                        r["client" + e],
                      ))
                    : void 0 === i
                    ? ot.css(t, n, a)
                    : ot.style(t, n, i, a);
                },
                t,
                o ? i : void 0,
                o,
                null,
              );
            };
          },
        );
      }),
      ot.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        size: function () {
          return this.length;
        },
      }),
      (ot.fn.andSelf = ot.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return ot;
        });
    var qn = e.jQuery,
      Hn = e.$;
    return (
      (ot.noConflict = function (t) {
        return (
          e.$ === ot && (e.$ = Hn), t && e.jQuery === ot && (e.jQuery = qn), ot
        );
      }),
      t || (jdgmCM.jQuery = jdgmCM.$ = ot),
      ot
    );
  }),
  function () {
    var e;
    (e = {
      pagination: 5,
      disable_web_reviews: !1,
      badge_no_review_text: "No reviews",
      badge_n_reviews_text: "{{ n }} review/reviews",
      badge_star_color: "",
      hide_badge_preview_if_no_reviews: !1,
      badge_hide_text: !1,
      enforce_center_preview_badge: !1,
      widget_title: "Customer Reviews",
      widget_open_form_text: "Write a review",
      widget_close_form_text: "Cancel review",
      widget_refresh_page_text: "Refresh page",
      widget_summary_text: "Based on {{ number_of_reviews }} review/reviews",
      widget_no_review_text: "No reviews yet",
      widget_name_field_text: "Name",
      widget_verified_name_field_text: "Verified Name (public)",
      widget_name_placeholder_text: "Enter your name (public)",
      widget_required_field_error_text: "This field is required.",
      widget_email_field_text: "Email",
      widget_verified_email_field_text:
        "Verified Email (private, can not be edited)",
      widget_email_placeholder_text: "Enter your email (private)",
      widget_email_field_error_text: "Please enter a valid email address.",
      widget_rating_field_text: "Rating",
      widget_review_title_field_text: "Review Title",
      widget_review_title_placeholder_text: "Give your review a title",
      widget_review_body_field_text: "Review",
      widget_review_body_placeholder_text: "Write your comments here",
      widget_pictures_field_text: "Picture/Video (optional)",
      widget_submit_review_text: "Submit Review",
      widget_submit_verified_review_text: "Submit Verified Review",
      widget_submit_success_msg_with_auto_publish:
        'Thank you!\xa0Please refresh the page in a few moments to see your review. You can remove or edit your review by logging into <a href="https://judge.me/login" target="_blank" rel="nofollow noopener">Judge.me</a>',
      widget_submit_success_msg_no_auto_publish:
        'Thank you! Your review will be published as soon as it is approved by the shop admin. You can remove or edit your review by logging into <a href="https://judge.me/login" target="_blank" rel="nofollow noopener">Judge.me</a>',
      widget_show_default_reviews_out_of_total_text:
        "Showing {{ n_reviews_shown }} out of {{ n_reviews }} reviews.",
      widget_show_all_link_text: "Show all",
      widget_show_less_link_text: "Show less",
      widget_author_said_text: "{{ reviewer_name }} said:",
      widget_days_text: "{{ n }} days ago",
      widget_weeks_text: "{{ n }} week/weeks ago",
      widget_months_text: "{{ n }} month/months ago",
      widget_years_text: "{{ n }} year/years ago",
      widget_yesterday_text: "yesterday",
      widget_today_text: "today",
      widget_replied_text: ">> {{ shop_name }} replied:",
      widget_read_more_text: "Read more",
      widget_reviewer_name_as_initial: "",
      widget_rating_filter_color: "#fbcd0a",
      widget_rating_filter_see_all_text: "See all reviews",
      widget_sorting_most_recent_text: "Most Recent",
      widget_sorting_highest_rating_text: "Highest Rating",
      widget_sorting_lowest_rating_text: "Lowest Rating",
      widget_sorting_with_pictures_text: "Only Pictures",
      widget_sorting_most_helpful_text: "Most Helpful",
      widget_open_question_form_text: "Ask a question",
      widget_reviews_subtab_text: "Reviews",
      widget_questions_subtab_text: "Questions",
      widget_question_label_text: "Question",
      widget_answer_label_text: "Answer",
      widget_question_placeholder_text: "Write your question here",
      widget_submit_question_text: "Submit Question",
      widget_question_submit_success_text:
        "Thank you for your question! We will notify you once it gets answered.",
      widget_star_color: "",
      verified_badge_text: "Verified",
      verified_badge_bg_color: "",
      verified_badge_text_color: "",
      verified_badge_placement: "left-of-reviewer-name",
      widget_review_max_height: "",
      widget_hide_border: !1,
      widget_social_share: !1,
      widget_thumb: !1,
      widget_review_location_show: !1,
      widget_location_format: "",
      all_reviews_include_out_of_store_products: !0,
      all_reviews_out_of_store_text: "(out of store)",
      all_reviews_pagination: 100,
      all_reviews_product_name_prefix_text: "about",
      enable_review_pictures: !1,
      enable_question_anwser: !1,
      widget_theme: "default",
      review_date_format: "mm/dd/yyyy",
      default_sort_method: "most-recent",
      widget_product_reviews_subtab_text: "Product Reviews",
      widget_shop_reviews_subtab_text: "Shop Reviews",
      show_product_url_for_grouped_product: !1,
      widget_sorting_pictures_first_text: "Pictures First",
      show_pictures_on_all_rev_page_mobile: !1,
      show_pictures_on_all_rev_page_desktop: !1,
      floating_tab_hide_mobile_install_preference: !1,
      floating_tab_button_name: "\u2605 Judge.me Reviews",
      floating_tab_title: "Let customers speak for us",
      floating_tab_button_color: "",
      floating_tab_button_background_color: "",
      floating_tab_url: "/pages/reviews",
      all_reviews_text_badge_text: {},
      is_all_reviews_text_badge_a_link: !1,
      show_stars_for_all_reviews_text_badge: !1,
      all_reviews_text_badge_url: {},
      featured_carousel_show_header: !0,
      featured_carousel_title: "Let customers speak for us",
      featured_carousel_count_text: "from {{ n }} reviews",
      featured_carousel_add_link_to_all_reviews_page: !1,
      featured_carousel_url: {},
      featured_carousel_show_images: !0,
      featured_carousel_autoslide_interval: 5,
      featured_carousel_arrows_on_the_sides: !1,
      featured_carousel_height: 200,
      featured_carousel_width: 80,
      featured_carousel_image_size: 0,
      featured_carousel_arrow_color: "#eeeeee",
      is_verified_count_badge_a_link: !1,
      verified_count_badge_url: {},
      widget_rating_preset_default: 5,
      widget_first_sub_tab: "product-reviews",
      widget_show_histogram: !0,
      picture_reminder_submit_button: "Upload Pictures",
      enable_review_videos: !1,
      mute_video_by_default: !1,
      widget_sorting_videos_first_text: "Videos First",
      widget_review_pending_text: "Pending",
      featured_carousel_items_for_large_screen: 3,
      social_share_options_order: "Facebook,Twitter",
      remove_microdata_snippet: {},
      disable_json_ld: !1,
      preview_badge_show_question_text: !1,
      preview_badge_no_question_text: "No questions",
      preview_badge_n_question_text:
        "{{ number_of_questions }} question/questions",
      qa_badge_show_icon: !1,
      qa_badge_icon_color: null,
      qa_badge_position: "same-row",
      remove_judgeme_branding: !1,
      widget_add_search_bar: !1,
      widget_search_bar_placeholder: "Search reviews",
      widget_sorting_verified_only_text: "Verified only",
      featured_carousel_theme: "default",
      featured_carousel_show_rating: !0,
      featured_carousel_show_title: !0,
      featured_carousel_show_body: !0,
      featured_carousel_show_date: !0,
      featured_carousel_show_reviewer: !0,
      featured_carousel_show_product: !0,
      featured_carousel_header_background_color: "#399999",
      featured_carousel_header_text_color: "#ffffff",
      featured_carousel_name_product_separator: "reviewed",
      featured_carousel_full_star_background: "#399999",
      featured_carousel_empty_star_background: "#dadada",
      featured_carousel_vertical_theme_background: "#f9fafb",
      all_reviews_page_load_reviews_on: "scroll",
      all_reviews_page_load_more_text: "Load More Reviews",
      disable_fb_tab_reviews: !1,
      enable_ajax_cdn_cache: !1,
      widget_public_name_text: "displayed publicly like",
      widget_reviewer_anonymous: "Anonymous",
      medals_widget_title: "Judge.me Review Medals",
      medals_widget_background_color: "#f9fafb",
      medals_widget_border_color: "#f9fafb",
      show_reviewer_avatar: !0,
      widget_invalid_yt_video_url_error_text: "Not a YouTube video URL",
      widget_show_country_flag: !1,
      widget_show_photo_gallery: !1,
      widget_load_with_code_splitting: !1,
      widget_ugc_install_preference: !1,
      widget_ugc_title: "Made by us, Shared by you",
      widget_ugc_subtitle: "Tag us to see your picture featured in our page",
      widget_ugc_arrows_color: "#fffff",
      widget_ugc_primary_button_text: "Buy Now",
      widget_ugc_primary_button_background_color: "#339999",
      widget_ugc_primary_button_text_color: "#ffffff",
      widget_ugc_primary_button_border_width: "0",
      widget_ugc_primary_button_border_style: "none",
      widget_ugc_primary_button_border_color: "#339999",
      widget_ugc_primary_button_border_radius: "25",
      widget_ugc_secondary_button_text: "Load More",
      widget_ugc_secondary_button_background_color: "#ffffff",
      widget_ugc_secondary_button_text_color: "#339999",
      widget_ugc_secondary_button_border_width: "2",
      widget_ugc_secondary_button_border_style: "solid",
      widget_ugc_secondary_button_border_color: "#339999",
      widget_ugc_secondary_button_border_radius: "25",
      widget_ugc_reviews_button_text: "View Reviews",
      widget_ugc_reviews_button_background_color: "#ffffff",
      widget_ugc_reviews_button_text_color: "#339999",
      widget_ugc_reviews_button_border_width: "2",
      widget_ugc_reviews_button_border_style: "solid",
      widget_ugc_reviews_button_border_color: "#339999",
      widget_ugc_reviews_button_border_radius: "25",
      widget_ugc_reviews_button_link_to: "judgeme-reviews-page",
      widget_ugc_show_post_date: !0,
      widget_rating_metafield_value_type: !0,
      checkout_comment_extension_title_on_product_page: "Customer Comments",
      checkout_comment_extension_num_latest_comment_show: 5,
      checkout_comment_extension_format: "name_and_timestamp",
      checkout_comment_customer_name: "last_initial",
      checkout_comment_comment_notification: !0,
      preview_badge_collection_page_install_preference: !1,
      preview_badge_home_page_install_preference: !1,
      preview_badge_product_page_install_preference: !1,
      review_widget_install_preference: "",
      review_carousel_install_preference: !1,
      floating_reviews_tab_install_preference: "none",
      verified_reviews_count_badge_install_preference: !1,
      all_reviews_text_install_preference: !1,
      review_widget_best_location: !1,
      judgeme_medals_install_preference: !1,
      platform: "shopify",
      branding_url: "https://judge.me/reviews",
      branding_text: "Powered by Judge.me",
      locale: "en",
    }),
      jdgmCM.$(function (t) {
        return (window.jdgmCommentSetting = t.extend(
          {},
          e,
          window.jdgmSettings,
        ));
      });
  }.call(this),
  jdgmCM.$(function (e) {
    (cssText =
      '.jdgm-widget.jdgm-widget {  display: block; }.jdgm-widget .jdgm-temp-hidden {  display: block; }.jdgm-clearfix:before, .jdgm-clearfix:after {  display: block;  content: "";  clear: both; }.jdgm-comment-widget {  padding: 20px; }.jdgm-product-comment__single_comment {  position: relative;  width: 100%;  border: 1px solid;  padding: 16px 30px;  margin: 12px 0; }  .jdgm-product-comment__single_comment .jdgm-product-comment__comment_quote {    float: left; }  .jdgm-product-comment__single_comment .jdgm-product-comment__comment_buyer {    float: right;    padding-top: 6px; }'),
      e("head").append("<style>" + cssText + "</style>");
  }),
  function () {
    jdgmCM.$(function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g,
        v,
        _,
        b,
        y,
        w,
        x,
        k,
        S,
        T,
        C;
      return (
        (n = "[^\\s}{/]+"),
        (w = "/"),
        (C = /_/g),
        (x = new RegExp(n + w)),
        (v = new RegExp(w + n)),
        (i = new RegExp(n + w + n)),
        (m = 864e5),
        (S = new Date()),
        (T = new Date(S.getUTCFullYear(), S.getUTCMonth(), S.getUTCDate())),
        (u = function () {
          return (
            c(),
            p(),
            f(),
            e(".jdgm-comment-widget .jdgm-product-comment").show()
          );
        }),
        (c = function () {
          var t;
          return (
            (t = ".jdgm-comment-widget .jdgm-product-comment__title"),
            0 === e(t).length &&
              e(".jdgm-comment-widget").html(
                '<div class="jdgm-product-comment"><div class="jdgm-rev-widg__header"><h2 class="jdgm-product-comment__title"></h2></div></div>',
              ),
            e(t).html(
              jdgmCommentSetting.checkout_comment_extension_title_on_product_page,
            )
          );
        }),
        (p = function () {
          var t;
          return (
            (t = ".jdgm-comment-widget .jdgm-product-comment__body"),
            0 === e(t).length && "show" !== l("judgeme_comment")
              ? void e(".jdgm-comment-widget").hide()
              : e(t).each(function (t, n) {
                  var i;
                  return (
                    (i = e(n).children()),
                    i.each(function (t, n) {
                      return t <
                        jdgmCommentSetting.checkout_comment_extension_num_latest_comment_show
                        ? e(n).show()
                        : void 0;
                    }),
                    0 === i.length && "show" !== l("judgeme_comment")
                      ? e(".jdgm-comment-widget").hide()
                      : void 0
                  );
                })
          );
        }),
        (f = function () {
          var t;
          return (
            (t = ".jdgm-comment-widget .jdgm-product-comment__single_comment"),
            e(t).each(function (e, t) {
              var n;
              return (n = t.dataset.commentUuid), h(n);
            })
          );
        }),
        (h = function (t) {
          var n, i, r, o, a, s, l;
          return (
            (a =
              ".jdgm-comment-widget .jdgm-product-comment__single_comment[data-comment-uuid=" +
              t +
              "]"),
            (n = ".jdgm-product-comment__comment_buyer"),
            (o = e(a).data("buyer-name")),
            (r = e(a).data("comment-time")),
            o && (i = b(o.trim())),
            (s = e("<b></b>").text(i)[0].outerHTML),
            r.length > 0 &&
              "name_and_timestamp" ===
                jdgmCommentSetting.checkout_comment_extension_format &&
              ((l = g(r)), (s += ", " + l)),
            e("" + a + " " + n).html("<i>" + s + "</i>"),
            y(a)
          );
        }),
        (r = function (e, t) {
          return new Date(e, t + 1, 0).getDate();
        }),
        (s = function (e, t) {
          var n;
          return (
            (n = 12 * (t.getFullYear() - e.getFullYear())),
            (n += t.getMonth() - e.getMonth() - 1),
            t.getDate() >= e.getDate() && (n += 1),
            0 >= n ? 0 : n
          );
        }),
        (g = function (e) {
          var t, n, i, a, l, c, u, d;
          return (
            (d = e.substr(0, 10).split("-")),
            (c = new Date(d[0], d[1] - 1, d[2])),
            (n = Math.floor((T - c) / m)),
            (a = Math.floor(n / 7)),
            (i = s(c, T)),
            (l = Math.floor(i / 12)),
            (i = 0 === i ? 1 : i),
            (t = r(T.getFullYear(), T.getMonth())),
            (u =
              0 === n
                ? jdgmCommentSetting.widget_today_text
                : 7 > n
                ? 1 === n
                  ? jdgmCommentSetting.widget_yesterday_text
                  : o("days", n)
                : t >= n
                ? o("weeks", a)
                : 12 > i
                ? o("months", i)
                : o("years", l))
          );
        }),
        (o = function (e, t) {
          var n, i;
          return (
            (i = jdgmCommentSetting["widget_" + e + "_text"]),
            (n = i.replace("{{ n }}", t)),
            _(n, t)
          );
        }),
        (_ = function (e, t) {
          var n, r;
          return e.match(i)
            ? ((r = t > 1 ? v : x),
              (n = e.match(r)[0].replace(C, " ").replace("/", "")),
              e.replace(i, n))
            : e;
        }),
        (b = function (e) {
          var n;
          return (
            (n = {
              last_initial: d(e),
              first_name_only: a(e),
              all_initials: t(e),
              full_name: e,
            }),
            n[jdgmCommentSetting.checkout_comment_customer_name] || "Anonymous"
          );
        }),
        (k = function (e) {
          var t;
          return (
            (t = e.lastIndexOf(" ")),
            [e.substring(0, t), e.substring(t + 1, e.length)]
          );
        }),
        (t = function (e) {
          var t, n, i, r, o;
          for (t = e.split(" "), n = "", r = 0, o = t.length; o > r; r++)
            (i = t[r]), i.length > 0 && (n = n + i.charAt(0) + ". ");
          return n.trim();
        }),
        (d = function (e) {
          var t;
          return (
            (t = k(e)),
            t.length > 1
              ? t[0] + " " + t[1][0] + "."
              : t.length > 0
              ? t[0]
              : void 0
          );
        }),
        (a = function (e) {
          var t;
          return (t = k(e)), t.length > 0 ? t[0] : void 0;
        }),
        (y = function (t) {
          var n;
          return (n = e(t)), n.removeAttr("data-buyer-name");
        }),
        (l = function (e) {
          var t, n, i, r, o, a;
          for (
            n = window.location.search.substring(1),
              r = n.split("&"),
              t = o = 0,
              a = r.length - 1;
            a >= 0 ? a >= o : o >= a;
            t = a >= 0 ? ++o : --o
          )
            if (((i = r[t].split("=")), i[0] === e)) return i[1];
        }),
        u()
      );
    });
  }.call(this);
