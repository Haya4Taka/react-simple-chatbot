!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('styled-components')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'styled-components'], t)
    : 'object' == typeof exports
    ? (exports.ReactSimpleChatbot = t(require('react'), require('styled-components')))
    : (e.ReactSimpleChatbot = t(e.react, e['styled-components']));
})('undefined' != typeof self ? self : this, function(e, t) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = 'dist/'),
      n((n.s = 9))
    );
  })([
    function(e, t, n) {
      e.exports = n(5)();
    },
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t) {
      var n = (function(e, t) {
        return {
          parse: function(t, r) {
            var a = JSON.parse(t, i).map(o),
              s = a[0],
              u = r || n,
              c =
                'object' == typeof s && s
                  ? (function t(n, r, o, i) {
                      return Object.keys(o).reduce(function(o, a) {
                        var s = o[a];
                        if (s instanceof e) {
                          var u = n[s];
                          'object' != typeof u || r.has(u)
                            ? (o[a] = i.call(o, a, u))
                            : (r.add(u), (o[a] = i.call(o, a, t(n, r, u, i))));
                        } else o[a] = i.call(o, a, s);
                        return o;
                      }, o);
                    })(a, new Set(), s, u)
                  : s;
            return u.call({ '': c }, '', c);
          },
          stringify: function(e, o, i) {
            for (
              var a,
                s = new Map(),
                u = [],
                c = [],
                l =
                  o && typeof o == typeof u
                    ? function(e, t) {
                        if ('' === e || -1 < o.indexOf(e)) return t;
                      }
                    : o || n,
                p = +r(s, u, l.call({ '': e }, '', e)),
                f = function(e, n) {
                  if (a) return (a = !a), n;
                  var o = l.call(this, e, n);
                  switch (typeof o) {
                    case 'object':
                      if (null === o) return o;
                    case t:
                      return s.get(o) || r(s, u, o);
                  }
                  return o;
                };
              p < u.length;
              p++
            )
              (a = !0), (c[p] = JSON.stringify(u[p], f, i));
            return '[' + c.join(',') + ']';
          }
        };
        function n(e, t) {
          return t;
        }
        function r(t, n, r) {
          var o = e(n.push(r) - 1);
          return t.set(r, o), o;
        }
        function o(t) {
          return t instanceof e ? e(t) : t;
        }
        function i(n, r) {
          return typeof r === t ? new e(r) : r;
        }
      })(String, 'string');
      e.exports = n;
    },
    function(e, t, n) {
      e.exports = function(e, t) {
        var n = [
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '0123456789',
            "~!@#$%^&()_+-={}[];',"
          ],
          r = '';
        (t = t || 'aA0').split('').forEach(function(e) {
          isNaN(parseInt(e))
            ? /[a-z]/.test(e)
              ? (r += n[0])
              : /[A-Z]/.test(e)
              ? (r += n[1])
              : (r += n[3])
            : (r += n[2]);
        }),
          (e = e || 30);
        for (var o = ''; e--; ) o += r.charAt(Math.floor(Math.random() * r.length));
        return o;
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(6),
        o = n(7),
        i = n(8);
      e.exports = function() {
        function e(e, t, n, r, a, s) {
          s !== i &&
            o(
              !1,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        };
        return (n.checkPropTypes = r), (n.PropTypes = n), n;
      };
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return function() {
          return e;
        };
      }
      var o = function() {};
      (o.thatReturns = r),
        (o.thatReturnsFalse = r(!1)),
        (o.thatReturnsTrue = r(!0)),
        (o.thatReturnsNull = r(null)),
        (o.thatReturnsThis = function() {
          return this;
        }),
        (o.thatReturnsArgument = function(e) {
          return e;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      'use strict';
      var r = function(e) {};
      e.exports = function(e, t, n, o, i, a, s, u) {
        if ((r(t), !e)) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var l = [n, o, i, a, s, u],
              p = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return l[p++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        o = n.n(r),
        i = n(0),
        a = n.n(i),
        s = n(4),
        u = n.n(s),
        c = n(2),
        l = n.n(c),
        p = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = (function(e) {
              e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
              });
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return t
                ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
                : null;
            })(e);
          return 'rgba('
            .concat(n.r, ', ')
            .concat(n.g, ', ')
            .concat(n.b, ', ')
            .concat(t, ')');
        };
      function f() {
        var e = y([
          '\n  0% {\n    transform: translateX(-60px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = y([
          '\n  0% { box-shadow: 0 0 0 0 ',
          '; }\n  70% { box-shadow: 0 0 0 10px ',
          '; }\n  100% { box-shadow: 0 0 0 0 ',
          '; }\n'
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = y(['\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = y(['\n  100% { transform: scale(1); }\n']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = y(['\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function y(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      var v = Object(c.keyframes)(g()),
        m = Object(c.keyframes)(h()),
        S = Object(c.keyframes)(b()),
        x = Object(c.keyframes)(f());
      function O() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  animation: ', ' 1.4s infinite both;\n  animation-delay: ', ';\n']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      var w = l.a.span(O(), v, function(e) {
          return e.delay;
        }),
        j = function() {
          return o.a.createElement(
            'span',
            { className: 'rsc-loading' },
            o.a.createElement(w, { delay: '0s' }, '.'),
            o.a.createElement(w, { delay: '.2s' }, '.'),
            o.a.createElement(w, { delay: '.4s' }, '.')
          );
        };
      function k() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n'
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var E = l.a.div(k());
      function z(e) {
        return (z =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function I(e, t) {
        return (I =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function q(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function N(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var M = (function(e) {
        function t() {
          var e, n, r, i;
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
          return (
            (r = this),
            (i = (e = P(t)).call.apply(e, [this].concat(s))),
            (n = !i || ('object' !== z(i) && 'function' != typeof i) ? q(r) : i),
            N(q(q(n)), 'state', { loading: !0 }),
            N(q(q(n)), 'renderComponent', function() {
              var e = n.props,
                t = e.step,
                r = e.steps,
                i = e.previousStep,
                a = e.triggerNextStep,
                s = t.component;
              return o.a.cloneElement(s, {
                step: t,
                steps: r,
                previousStep: i,
                triggerNextStep: a
              });
            }),
            n
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && I(e, t);
          })(t, r['Component']),
          (n = t),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.speak,
                  r = t.step,
                  o = t.previousValue,
                  i = t.triggerNextStep,
                  a = r.delay,
                  s = r.waitAction;
                setTimeout(function() {
                  e.setState({ loading: !1 }, function() {
                    s || r.rendered || i(), n(r, o);
                  });
                }, a);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.loading,
                  t = this.props.style;
                return o.a.createElement(
                  E,
                  { className: 'rsc-cs', style: t },
                  e ? o.a.createElement(j, null) : this.renderComponent()
                );
              }
            }
          ]) && C(n.prototype, i),
          a && C(n, a),
          t
        );
      })();
      (M.propTypes = {
        previousStep: a.a.objectOf(a.a.any).isRequired,
        previousValue: a.a.oneOfType([a.a.string, a.a.bool, a.a.number, a.a.object, a.a.array]),
        speak: a.a.func,
        step: a.a.objectOf(a.a.any).isRequired,
        steps: a.a.objectOf(a.a.any).isRequired,
        style: a.a.objectOf(a.a.any).isRequired,
        triggerNextStep: a.a.func.isRequired
      }),
        (M.defaultProps = { previousValue: '', speak: function() {} });
      var R = M;
      function B() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n'
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      var T = l.a.li(B(), m),
        A = {
          background: '#f5f8fb',
          fontFamily: 'monospace',
          headerBgColor: '#6e48aa',
          headerFontColor: '#fff',
          headerFontSize: '16px',
          botBubbleColor: '#6E48AA',
          botFontColor: '#fff',
          userBubbleColor: '#fff',
          userFontColor: '#4a4a4a'
        };
      function _() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  background: ',
          ';\n  border: 0;\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ',
          ';\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n  &:active,\n  &:hover:focus {\n    outline:none;\n  }\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      var F = l.a.button(
        _(),
        function(e) {
          return e.theme.botBubbleColor;
        },
        function(e) {
          return e.theme.botFontColor;
        }
      );
      F.defaultProps = { theme: A };
      var V = F;
      function L() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n']);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      var D = l.a.ul(L());
      function U() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['']);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      var H = l.a.div(U());
      function Y(e) {
        return (Y =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function K(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function J(e) {
        return (J = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function W(e, t) {
        return (W =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function X(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function $(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var Z = (function(e) {
        function t() {
          var e, n, r, i;
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
          return (
            (r = this),
            (i = (e = J(t)).call.apply(e, [this].concat(s))),
            (n = !i || ('object' !== Y(i) && 'function' != typeof i) ? X(r) : i),
            $(X(X(n)), 'onOptionClick', function(e) {
              var t = e.value;
              (0, n.props.triggerNextStep)({ value: t });
            }),
            $(X(X(n)), 'renderOption', function(e) {
              var t = n.props,
                r = t.bubbleOptionStyle,
                i = t.step.user,
                a = e.value,
                s = e.label;
              return o.a.createElement(
                T,
                { key: a, className: 'rsc-os-option' },
                o.a.createElement(
                  V,
                  {
                    className: 'rsc-os-option-element',
                    style: r,
                    user: i,
                    onClick: function() {
                      return n.onOptionClick({ value: a });
                    }
                  },
                  s
                )
              );
            }),
            n
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && W(e, t);
          })(t, r['Component']),
          (n = t),
          (i = [
            {
              key: 'render',
              value: function() {
                var e = this.props.step.options;
                return o.a.createElement(
                  H,
                  { className: 'rsc-os' },
                  o.a.createElement(
                    D,
                    { className: 'rsc-os-options' },
                    Object.keys(e)
                      .map(function(t) {
                        return e[t];
                      })
                      .map(this.renderOption)
                  )
                );
              }
            }
          ]) && K(n.prototype, i),
          a && K(n, a),
          t
        );
      })();
      Z.propTypes = {
        bubbleOptionStyle: a.a.objectOf(a.a.any).isRequired,
        step: a.a.objectOf(a.a.any).isRequired,
        triggerNextStep: a.a.func.isRequired
      };
      var G = Z;
      function Q() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  background: ',
          ';\n  border-radius: ',
          ';\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ',
          ';\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ',
          ';\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ',
          ';\n'
        ]);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      var ee = l.a.div(
        Q(),
        m,
        function(e) {
          return e.user ? e.theme.userBubbleColor : e.theme.botBubbleColor;
        },
        function(e) {
          var t = e.isFirst,
            n = e.isLast,
            r = e.user;
          return t || n
            ? !t && n
              ? r
                ? '18px 0 18px 18px'
                : '0 18px 18px 18px'
              : e.user
              ? '18px 18px 0 18px'
              : '18px 18px 18px 0'
            : r
            ? '18px 0 0 18px'
            : '0 18px 18px 0px';
        },
        function(e) {
          return e.user ? e.theme.userFontColor : e.theme.botFontColor;
        },
        function(e) {
          var t = e.isFirst,
            n = e.showAvatar,
            r = e.user;
          return !t && n
            ? r
              ? '-8px 46px 10px 0'
              : '-8px 0 10px 46px'
            : t || n
            ? '0 0 10px 0'
            : r
            ? '-8px 0px 10px 0'
            : '-8px 0 10px 0px';
        },
        function(e) {
          var t = e.isFirst,
            n = e.user;
          return t ? (n ? 'bottom right' : 'bottom left') : n ? 'top right' : 'top left';
        }
      );
      ee.defaultProps = { theme: A };
      var te = ee;
      function ne() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  border-radius: ',
          ';\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ',
          ';\n  width: 40;\n'
        ]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      var re = l.a.img(
        ne(),
        m,
        function(e) {
          return e.user ? '50% 50% 50% 0' : '50% 50% 0 50%';
        },
        function(e) {
          return e.user ? 'bottom left' : 'bottom right';
        }
      );
      function oe() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  display: inline-block;\n  order: ', ';\n  padding: 6px;\n']);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      var ie = l.a.div(oe(), function(e) {
        return e.user ? '1' : '0';
      });
      function ae() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  align-items: flex-end;\n  display: flex;\n  justify-content: ', ';\n']);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var se = l.a.div(ae(), function(e) {
        return e.user ? 'flex-end' : 'flex-start';
      });
      function ue(e) {
        return (ue =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function le(e) {
        return (le = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function pe(e, t) {
        return (pe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function fe(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function de(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var be = (function(e) {
        function t() {
          var e, n, r, i;
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
          return (
            (r = this),
            (i = (e = le(t)).call.apply(e, [this].concat(s))),
            (n = !i || ('object' !== ue(i) && 'function' != typeof i) ? fe(r) : i),
            de(fe(fe(n)), 'state', { loading: !0 }),
            de(fe(fe(n)), 'getMessage', function() {
              var e = n.props,
                t = e.previousValue,
                r = e.step.message;
              return r ? r.replace(/{previousValue}/g, t) : '';
            }),
            de(fe(fe(n)), 'renderMessage', function() {
              var e = n.props,
                t = e.step,
                r = e.steps,
                i = e.previousStep,
                a = e.triggerNextStep,
                s = t.component;
              return s
                ? o.a.cloneElement(s, { step: t, steps: r, previousStep: i, triggerNextStep: a })
                : n.getMessage();
            }),
            n
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && pe(e, t);
          })(t, r['Component']),
          (n = t),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.step,
                  r = t.speak,
                  o = t.previousValue,
                  i = t.triggerNextStep,
                  a = n.component,
                  s = n.delay,
                  u = n.waitAction,
                  c = a && u;
                setTimeout(function() {
                  e.setState({ loading: !1 }, function() {
                    c || n.rendered || i(), r(n, o);
                  });
                }, s);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.step,
                  n = e.isFirst,
                  r = e.isLast,
                  i = e.avatarStyle,
                  a = e.bubbleStyle,
                  s = e.hideBotAvatar,
                  u = e.hideUserAvatar,
                  c = this.state.loading,
                  l = t.avatar,
                  p = t.user,
                  f = p ? !u : !s;
                return o.a.createElement(
                  se,
                  { className: 'rsc-ts '.concat(p ? 'rsc-ts-user' : 'rsc-ts-bot'), user: p },
                  o.a.createElement(
                    ie,
                    { className: 'rsc-ts-image-container', user: p },
                    n &&
                      f &&
                      o.a.createElement(re, {
                        className: 'rsc-ts-image',
                        style: i,
                        showAvatar: f,
                        user: p,
                        src: l,
                        alt: 'avatar'
                      })
                  ),
                  o.a.createElement(
                    te,
                    {
                      className: 'rsc-ts-bubble',
                      style: a,
                      user: p,
                      showAvatar: f,
                      isFirst: n,
                      isLast: r
                    },
                    c ? o.a.createElement(j, null) : this.renderMessage()
                  )
                );
              }
            }
          ]) && ce(n.prototype, i),
          a && ce(n, a),
          t
        );
      })();
      (be.propTypes = {
        avatarStyle: a.a.objectOf(a.a.any).isRequired,
        isFirst: a.a.bool.isRequired,
        isLast: a.a.bool.isRequired,
        bubbleStyle: a.a.objectOf(a.a.any).isRequired,
        hideBotAvatar: a.a.bool.isRequired,
        hideUserAvatar: a.a.bool.isRequired,
        previousStep: a.a.objectOf(a.a.any),
        previousValue: a.a.oneOfType([a.a.string, a.a.bool, a.a.number, a.a.object, a.a.array]),
        speak: a.a.func,
        step: a.a.objectOf(a.a.any).isRequired,
        steps: a.a.objectOf(a.a.any),
        triggerNextStep: a.a.func.isRequired
      }),
        (be.defaultProps = {
          previousStep: {},
          previousValue: '',
          speak: function() {},
          steps: {}
        });
      var he = be,
        ge = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'user', types: ['boolean'], required: !0 },
          { key: 'hideExtraControl', types: ['boolean'], required: !1 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'validator', types: ['function'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        ye = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'message', types: ['string', 'function'], required: !0 },
          { key: 'avatar', types: ['string'], required: !1 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'delay', types: ['number'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'hideExtraControl', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        ve = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'options', types: ['object'], required: !0 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'hideExtraControl', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        me = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'component', types: ['any'], required: !0 },
          { key: 'avatar', types: ['string'], required: !1 },
          { key: 'replace', types: ['boolean'], required: !1 },
          { key: 'waitAction', types: ['boolean'], required: !1 },
          { key: 'asMessage', types: ['boolean'], required: !1 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'delay', types: ['number'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'hideExtraControl', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        Se = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'update', types: ['string', 'number'], required: !0 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !0 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        xe = n(3);
      function Oe(e) {
        return (Oe =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var we = {
          parse: function(e) {
            var t = [];
            if (e.user) t = ge;
            else if (e.message) t = ye;
            else if (e.options) t = ve;
            else if (e.component) t = me;
            else {
              if (!e.update)
                throw new Error('The step '.concat(Object(xe.stringify)(e), ' is invalid'));
              t = Se;
            }
            for (var n = 0, r = t.length; n < r; n += 1) {
              var o = t[n],
                i = o.key,
                a = o.types,
                s = o.required;
              if (!e[i] && s)
                throw new Error(
                  "Key '".concat(i, "' is required in step ").concat(Object(xe.stringify)(e))
                );
              if (e[i] && 'any' !== a[0] && a.indexOf(Oe(e[i])) < 0)
                throw new Error(
                  "The type of '"
                    .concat(i, "' value must be ")
                    .concat(a.join(' or '), ' instead of ')
                    .concat(Oe(e[i]))
                );
            }
            var u = t.map(function(e) {
              return e.key;
            });
            for (var i in e)
              u.indexOf(i) < 0 &&
                (console.error("Invalid key '".concat(i, "' in step '").concat(e.id, "'")),
                delete e[i]);
            return e;
          },
          checkInvalidIds: function(e) {
            for (var t in e) {
              var n = e[t],
                r = e[t].trigger;
              if ('function' != typeof r)
                if (n.options)
                  for (
                    var o = n.options
                        .filter(function(e) {
                          return 'function' != typeof e.trigger;
                        })
                        .map(function(e) {
                          return e.trigger;
                        }),
                      i = 0,
                      a = o.length;
                    i < a;
                    i += 1
                  ) {
                    var s = o[i];
                    if (s && !e[s])
                      throw new Error(
                        "The id '"
                          .concat(s, "' triggered by option ")
                          .concat(i + 1, " in step '")
                          .concat(e[t].id, "' does not exist")
                      );
                  }
                else if (r && !e[r])
                  throw new Error(
                    "The id '"
                      .concat(r, "' triggered by step '")
                      .concat(e[t].id, "' does not exist")
                  );
            }
          }
        },
        je = function(e, t) {
          var n = Object(xe.parse)(Object(xe.stringify)(t));
          for (var r in n)
            for (var o = 0, i = n[r].length; o < i; o += 1)
              n[r][o].component && (n[r][o].component = n[r][o].id);
          localStorage.setItem(e, Object(xe.stringify)(n));
        };
      function ke() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  background: ',
          ';\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ',
          ';\n  overflow: hidden;\n  position: ',
          ';\n  bottom: ',
          ';\n  top: ',
          ';\n  right: ',
          ';\n  left: ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n  z-index: 999;\n  transform: ',
          ';\n  transform-origin: ',
          ';\n  transition: transform 0.3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ',
          ';\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n'
        ]);
        return (
          (ke = function() {
            return e;
          }),
          e
        );
      }
      var Ee = l.a.div(
        ke(),
        function(e) {
          return e.theme.background;
        },
        function(e) {
          return e.theme.fontFamily;
        },
        function(e) {
          return e.floating ? 'fixed' : 'relative';
        },
        function(e) {
          var t = e.floating,
            n = e.floatingStyle;
          return t ? n.bottom || '32px' : 'initial';
        },
        function(e) {
          var t = e.floating,
            n = e.floatingStyle;
          return (t && n.top) || 'initial';
        },
        function(e) {
          var t = e.floating,
            n = e.floatingStyle;
          return t ? n.right || '32px' : 'initial';
        },
        function(e) {
          var t = e.floating,
            n = e.floatingStyle;
          return (t && n.left) || 'initial';
        },
        function(e) {
          return e.width;
        },
        function(e) {
          return e.height;
        },
        function(e) {
          return e.opened ? 'scale(1)' : 'scale(0)';
        },
        function(e) {
          return e.floatingStyle.transformOrigin || 'bottom right';
        },
        function(e) {
          return e.floating ? '0' : '';
        }
      );
      Ee.defaultProps = { theme: A };
      var ze = Ee;
      function Ce() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  height: calc(',
          ' - ',
          ');\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ',
          ';\n  }\n'
        ]);
        return (
          (Ce = function() {
            return e;
          }),
          e
        );
      }
      var Pe = l.a.div(
        Ce(),
        function(e) {
          return e.height;
        },
        function(e) {
          return e.hideInput ? '56px' : '112px';
        },
        function(e) {
          return e.floating ? 'calc(100% - 112px)' : '';
        }
      );
      function Ie() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  align-items: center;\n  background: ',
          ';\n  color: ',
          ';\n  display: flex;\n  fill: ',
          ';\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n'
        ]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      var qe = l.a.div(
        Ie(),
        function(e) {
          return e.theme.headerBgColor;
        },
        function(e) {
          return e.theme.headerFontColor;
        },
        function(e) {
          return e.theme.headerFontColor;
        }
      );
      qe.defaultProps = { theme: A };
      var Ne = qe;
      function Me() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  margin: 0;\n  font-size: ', ';\n']);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      var Re = l.a.h2(Me(), function(e) {
        return e.theme.headerFontSize;
      });
      Re.defaultProps = { theme: A };
      var Be = Re;
      function Te() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  cursor: pointer;\n']);
        return (
          (Te = function() {
            return e;
          }),
          e
        );
      }
      var Ae = l.a.a(Te());
      function _e() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  align-items: center;\n  cursor: pointer;\n  background: ',
          ';\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ',
          ';\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ',
          ';\n  transition: transform 0.3s ease;\n  width: 56px;\n  z-index: 999;\n'
        ]);
        return (
          (_e = function() {
            return e;
          }),
          e
        );
      }
      var Fe = l.a.a(
        _e(),
        function(e) {
          return e.theme.headerBgColor;
        },
        function(e) {
          return e.theme.headerFontColor;
        },
        function(e) {
          return e.opened ? 'scale(0)' : 'scale(1)';
        }
      );
      Fe.defaultProps = { theme: { headerBgColor: '#6e48aa', headerFontColor: '#fff' } };
      var Ve = Fe;
      function Le() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  height: 24px;\n  width: 24px;\n']);
        return (
          (Le = function() {
            return e;
          }),
          e
        );
      }
      var De = l.a.img(Le());
      function Ue() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })(['\n  position: relative;\n']);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      var He = l.a.div(Ue());
      function Ye() {
        var e = Je(['\n          ', ' .2s ease\n        ']);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Je([
          '\n  animation: ',
          ';\n  border: 0;\n  border-radius: 0;\n  border-top-left-radius: ',
          ';\n  border-top-right-radius: ',
          ';\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ',
          ';\n  box-shadow: ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  font-size: 16px;\n  min-height: 32px;\n  opacity: ',
          ';\n  outline: none;\n  padding: ',
          ';\n  margin: ',
          ';\n  width: ',
          ';\n  -webkit-appearance: none;\n\n  &:disabled {\n    background: #fff;\n  }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ',
          ';\n    border-bottom-right-radius: ',
          ';\n  }\n'
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function Je(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      var We = l.a.input(
        Ke(),
        function(e) {
          return e.invalid ? Object(c.css)(Ye(), S) : '';
        },
        function(e) {
          return e.changable ? ' 10px' : '0';
        },
        function(e) {
          return e.changable ? ' 10px' : '0';
        },
        function(e) {
          return e.invalid ? '0' : '1px solid #eee';
        },
        function(e) {
          return e.invalid ? 'inset 0 0 2px #E53935' : 'none';
        },
        function(e) {
          return e.invalid ? '#E53935' : '';
        },
        function(e) {
          return e.disabled && !e.invalid ? '.5' : '1';
        },
        function(e) {
          return e.changable
            ? '10px 10px 10px 10px'
            : e.hasButton
            ? '16px 52px 16px 10px'
            : '16px 10px';
        },
        function(e) {
          return e.changable ? '0px 5px 0px 70px' : '0px';
        },
        function(e) {
          return e.changable ? 'calc(100% - 75px)' : '100%';
        },
        function(e) {
          return e.floating ? '0' : '10px';
        },
        function(e) {
          return e.floating ? '0' : '10px';
        }
      );
      function Xe() {
        var e = Ze(['\n            ', ' 2s ease infinite\n          ']);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Ze([
          '\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ',
          ';\n  fill: ',
          ';\n  opacity: ',
          ';\n  outline: none;\n  padding: ',
          ";\n  &:before {\n    content: '';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ",
          ';\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n'
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function Ze(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      var Ge = l.a.button(
        $e(),
        function(e) {
          return e.disabled ? 'default' : 'pointer';
        },
        function(e) {
          var t = e.speaking,
            n = e.invalid,
            r = e.theme;
          return t ? r.headerBgColor : n ? '#E53935' : '#4a4a4a';
        },
        function(e) {
          return e.disabled && !e.invalid ? '.5' : '1';
        },
        function(e) {
          return e.changable ? '10px 10px 10px 10px' : '14px 16px 12px 16px';
        },
        function(e) {
          var t,
            n = e.theme;
          return e.speaking
            ? Object(c.css)(
                Xe(),
                ((t = n.headerBgColor), Object(c.keyframes)(d(), p(t, 0.4), p(t, 0), p(t, 0)))
              )
            : '';
        }
      );
      Ge.defaultProps = { theme: A };
      var Qe = Ge;
      function et() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  background-color #EEE;\n  border: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  height: 26px;\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  min-width: 60px;\n  outline: 0;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  &:hover {\n    opacity: 0.7;\n  }\n'
        ]);
        return (
          (et = function() {
            return e;
          }),
          e
        );
      }
      var tt = l.a.button(et());
      tt.defaultProps = { theme: A };
      var nt = tt;
      function rt() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  align-items: center;\n  background-color: transparent;\n  display: flex;\n  height: 50px;\n  justify-content: space-around;\n  margin: 0 0 0 70px;\n  position: relative;\n'
        ]);
        return (
          (rt = function() {
            return e;
          }),
          e
        );
      }
      var ot = l.a.div(rt());
      function it() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  background-color: #ddd;\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  height: 40px;\n  outline: 0;\n  width: 60px;\n  animation: ',
          ' 1s;\n  &:hover {\n    opacity: 0.7;\n  }\n'
        ]);
        return (
          (it = function() {
            return e;
          }),
          e
        );
      }
      var at = l.a.button(it(), x);
      function st() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        })([
          '\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  position: absolute;\n  height: inherit;\n  justify-content: space-between;\n  padding: 0 15px;\n  top: -100%;\n  width: 100%;\n'
        ]);
        return (
          (st = function() {
            return e;
          }),
          e
        );
      }
      var ut = l.a.div(st());
      function ct() {
        return (ct =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function lt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function pt(e, t, n) {
        return t && lt(e.prototype, t), n && lt(e, n), e;
      }
      var ft = null,
        dt = function() {},
        bt = (function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dt,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'en';
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, e),
              ft || (ft = this),
              (this.state = { inputValue: '', lang: o, onChange: t, onEnd: n, onStop: r }),
              (this.onResult = this.onResult.bind(this)),
              (this.onEnd = this.onEnd.bind(this)),
              this.setup(),
              ft
            );
          }
          return (
            pt(e, null, [
              {
                key: 'isSupported',
                value: function() {
                  return 'webkitSpeechRecognition' in window;
                }
              }
            ]),
            pt(e, [
              {
                key: 'onChange',
                value: function(e) {
                  var t = this.state.onChange;
                  this.setState({ inputValue: e }), t(e);
                }
              },
              {
                key: 'onFinal',
                value: function(e) {
                  this.setState({ inputValue: e }), this.recognition.stop();
                }
              },
              {
                key: 'onEnd',
                value: function() {
                  var e = this.state,
                    t = e.onStop,
                    n = e.onEnd,
                    r = e.force;
                  this.setState({ speaking: !1 }), r ? t() : n();
                }
              },
              {
                key: 'onResult',
                value: function(e) {
                  for (var t = '', n = '', r = e.resultIndex; r < e.results.length; r += 1)
                    e.results[r].isFinal
                      ? ((n += e.results[r][0].transcript), this.onFinal(n))
                      : ((t += e.results[r][0].transcript), this.onChange(t));
                }
              },
              {
                key: 'setState',
                value: function(e) {
                  this.state = ct({}, this.state, e);
                }
              },
              {
                key: 'setup',
                value: function() {
                  if (!e.isSupported()) return this;
                  var t = window.webkitSpeechRecognition;
                  return (
                    (this.recognition = new t()),
                    (this.recognition.continuous = !0),
                    (this.recognition.interimResults = !0),
                    (this.recognition.lang = this.state.lang),
                    (this.recognition.onresult = this.onResult),
                    (this.recognition.onend = this.onEnd),
                    this
                  );
                }
              },
              {
                key: 'setLang',
                value: function(e) {
                  return this.setState({ lang: e }), this.setup(), this;
                }
              },
              {
                key: 'speak',
                value: function() {
                  return e.isSupported()
                    ? (this.state.speaking
                        ? (this.setState({ force: !0 }), this.recognition.stop())
                        : (this.recognition.start(),
                          this.setState({ speaking: !0, inputValue: '' })),
                      this)
                    : this;
                }
              }
            ]),
            e
          );
        })(),
        ht = function() {
          return o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            o.a.createElement('path', {
              d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          );
        },
        gt = function() {
          return o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            o.a.createElement('path', {
              d:
                'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          );
        },
        yt = function(e) {
          var t = e.size;
          return o.a.createElement(
            'svg',
            {
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              width: t,
              height: t,
              viewBox: '0 0 500 500'
            },
            o.a.createElement(
              'g',
              null,
              o.a.createElement(
                'g',
                null,
                o.a.createElement('polygon', {
                  points: '0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75'
                })
              )
            )
          );
        };
      (yt.propTypes = { size: a.a.number }), (yt.defaultProps = { size: 20 });
      var vt = yt,
        mt = function(e) {
          var t = e.size;
          return o.a.createElement(
            'svg',
            {
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              width: t,
              height: t,
              viewBox: '0 0 400 400'
            },
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d:
                  'M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z'
              }),
              o.a.createElement('path', {
                d:
                  'M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z'
              })
            )
          );
        };
      (mt.propTypes = { size: a.a.number }), (mt.defaultProps = { size: 20 });
      var St = mt,
        xt = function() {
          return /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent);
        },
        Ot = function(e) {
          return 'string' == typeof e;
        },
        wt = function(e) {
          return function(t, n) {
            var r = e.lang,
              o = e.voice,
              i = e.enable,
              a = t.user;
            if (window.SpeechSynthesisUtterance && window.speechSynthesis && !a && i) {
              var s = (function(e) {
                  var t = e.message,
                    n = e.metadata,
                    r = void 0 === n ? {} : n;
                  return Ot(r.speak) ? r.speak : Ot(t) ? t : '';
                })(t),
                u = new window.SpeechSynthesisUtterance();
              (u.text = s.replace(/{previousValue}/g, n)),
                (u.lang = r),
                (u.voice = o),
                window.speechSynthesis.speak(u);
            }
          };
        };
      function jt(e) {
        return (jt =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function kt() {
        return (kt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Et(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function zt(e) {
        return (zt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ct(e, t) {
        return (Ct =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Pt(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function It(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var qt = (function(e) {
        function t(e) {
          var n, r, i;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (r = this),
            (i = zt(t).call(this, e)),
            (n = !i || ('object' !== jt(i) && 'function' != typeof i) ? Pt(r) : i),
            It(Pt(Pt(n)), 'onNodeInserted', function(e) {
              var t = e.currentTarget;
              n.props.enableSmoothScroll && n.supportsScrollBehavior
                ? t.scroll({ top: t.scrollHeight, left: 0, behavior: 'smooth' })
                : (t.scrollTop = t.scrollHeight);
            }),
            It(Pt(Pt(n)), 'onResize', function() {
              n.content.scrollTop = n.content.scrollHeight;
            }),
            It(Pt(Pt(n)), 'onRecognitionChange', function(e) {
              n.setState({ inputValue: e });
            }),
            It(Pt(Pt(n)), 'onRecognitionEnd', function() {
              n.setState({ speaking: !1 }), n.handleSubmitButton();
            }),
            It(Pt(Pt(n)), 'onRecognitionStop', function() {
              n.setState({ speaking: !1 });
            }),
            It(Pt(Pt(n)), 'onValueChange', function(e) {
              n.setState({ inputValue: e.target.value });
            }),
            It(Pt(Pt(n)), 'getTriggeredStep', function(e, t) {
              var r = n.generateRenderedStepsById();
              return 'function' == typeof e ? e({ value: t, steps: r }) : e;
            }),
            It(Pt(Pt(n)), 'getStepMessage', function(e) {
              var t = n.state.previousSteps,
                r = t.length > 0 ? t.length - 1 : 0,
                o = n.generateRenderedStepsById(),
                i = t[r].value;
              return 'function' == typeof e ? e({ previousValue: i, steps: o }) : e;
            }),
            It(Pt(Pt(n)), 'generateRenderedStepsById', function() {
              for (var e = n.state.previousSteps, t = {}, r = 0, o = e.length; r < o; r += 1) {
                var i = e[r],
                  a = i.id,
                  s = i.message,
                  u = i.value,
                  c = i.metadata;
                t[a] = { id: a, message: s, value: u, metadata: c };
              }
              return t;
            }),
            It(Pt(Pt(n)), 'triggerNextStep', function(e) {
              var t = n.props.enableMobileAutoFocus,
                r = n.state,
                o = r.defaultUserSettings,
                i = r.previousSteps,
                a = r.renderedSteps,
                s = r.steps,
                c = n.state,
                l = c.currentStep,
                p = c.previousStep,
                f = l.end;
              if (
                (e && e.value && (l.value = e.value),
                e && e.hideInput && (l.hideInput = e.hideInput),
                e && e.hideExtraControl && (l.hideExtraControl = e.hideExtraControl),
                e && e.trigger && (l.trigger = n.getTriggeredStep(e.trigger, e.value)),
                f)
              )
                n.handleEnd();
              else if (l.options && e) {
                var d = l.options.filter(function(t) {
                    return t.value === e.value;
                  })[0],
                  b = n.getTriggeredStep(d.trigger, l.value);
                delete l.options,
                  (l = kt({}, l, d, o, { user: !0, message: d.label, trigger: b })),
                  a.pop(),
                  i.pop(),
                  a.push(l),
                  i.push(l),
                  n.setState({ currentStep: l, renderedSteps: a, previousSteps: i });
              } else if (l.trigger) {
                l.replace && a.pop();
                var h = kt({}, s[n.getTriggeredStep(l.trigger, l.value)]);
                if (h.message) h.message = n.getStepMessage(h.message);
                else if (h.update) {
                  var g = h;
                  if ((h = kt({}, s[g.update])).options)
                    for (var y = 0, v = h.options.length; y < v; y += 1)
                      h.options[y].trigger = g.trigger;
                  else h.trigger = g.trigger;
                }
                (h.key = u()(24)),
                  (p = l),
                  (l = h),
                  n.setState({ renderedSteps: a, currentStep: l, previousStep: p }, function() {
                    h.user
                      ? n.setState({ disabled: !1 }, function() {
                          (!t && xt()) || (n.input && n.input.focus());
                        })
                      : (a.push(h), i.push(h), n.setState({ renderedSteps: a, previousSteps: i }));
                  });
              }
              var m = n.props,
                S = m.cache,
                x = m.cacheName;
              S &&
                setTimeout(function() {
                  je(x, { currentStep: l, previousStep: p, previousSteps: i, renderedSteps: a });
                }, 300);
            }),
            It(Pt(Pt(n)), 'handleEnd', function() {
              var e = n.props.handleEnd;
              if (e) {
                for (
                  var t = n.state.previousSteps,
                    r = t.map(function(e) {
                      return { id: e.id, message: e.message, value: e.value, metadata: e.metadata };
                    }),
                    o = [],
                    i = 0,
                    a = t.length;
                  i < a;
                  i += 1
                ) {
                  var s = t[i],
                    u = s.id,
                    c = s.message,
                    l = s.value,
                    p = s.metadata;
                  o[u] = { id: u, message: c, value: l, metadata: p };
                }
                e({
                  renderedSteps: r,
                  steps: o,
                  values: t
                    .filter(function(e) {
                      return e.value;
                    })
                    .map(function(e) {
                      return e.value;
                    })
                });
              }
            }),
            It(Pt(Pt(n)), 'isInputValueEmpty', function() {
              var e = n.state.inputValue;
              return !e || 0 === e.length;
            }),
            It(Pt(Pt(n)), 'isLastPosition', function(e) {
              var t = n.state.renderedSteps,
                r = t.length,
                o = t
                  .map(function(e) {
                    return e.key;
                  })
                  .indexOf(e.key);
              if (r <= 1 || o + 1 === r) return !0;
              var i = t[o + 1];
              return (!i.message && !i.asMessage) || e.user !== i.user;
            }),
            It(Pt(Pt(n)), 'isFirstPosition', function(e) {
              var t = n.state.renderedSteps,
                r = t
                  .map(function(e) {
                    return e.key;
                  })
                  .indexOf(e.key);
              if (0 === r) return !0;
              var o = t[r - 1];
              return (!o.message && !o.asMessage) || e.user !== o.user;
            }),
            It(Pt(Pt(n)), 'handleKeyPress', function(e) {
              'Enter' === e.key && n.submitUserMessage();
            }),
            It(Pt(Pt(n)), 'handleSubmitButton', function() {
              var e = n.state,
                t = e.speaking,
                r = e.recognitionEnable;
              if ((n.isInputValueEmpty() || t) && r)
                return n.recognition.speak(), void (t || n.setState({ speaking: !0 }));
              n.submitUserMessage();
            }),
            It(Pt(Pt(n)), 'handleChangeButtton', function() {
              var e = n.state.textMode;
              n.setState({ textMode: !e });
            }),
            It(Pt(Pt(n)), 'handleSecondInputOption', function(e) {
              console.log('handleSecondInput', n.state),
                n.triggerNextStep({ value: e.detail.value, trigger: e.detail.trigger });
            }),
            It(Pt(Pt(n)), 'submitUserMessage', function() {
              var e = n.state,
                t = e.defaultUserSettings,
                r = e.inputValue,
                o = e.previousSteps,
                i = e.renderedSteps,
                a = n.state.currentStep;
              (a.validator && n.checkInvalidInput()) ||
                ((a = kt({}, t, a, { message: r, value: r })),
                i.push(a),
                o.push(a),
                n.setState(
                  {
                    currentStep: a,
                    renderedSteps: i,
                    previousSteps: o,
                    disabled: !0,
                    inputValue: ''
                  },
                  function() {
                    n.input && n.input.blur();
                  }
                ));
            }),
            It(Pt(Pt(n)), 'checkInvalidInput', function() {
              var e = n.props.enableMobileAutoFocus,
                t = n.state,
                r = t.currentStep,
                o = t.inputValue,
                i = r.validator(o),
                a = o;
              return (
                ('boolean' != typeof i || !i) &&
                (n.setState(
                  { inputValue: i.toString(), inputInvalid: !0, disabled: !0 },
                  function() {
                    setTimeout(function() {
                      n.setState({ inputValue: a, inputInvalid: !1, disabled: !1 }, function() {
                        (!e && xt()) || (n.input && n.input.focus());
                      });
                    }, 2e3);
                  }
                ),
                !0)
              );
            }),
            It(Pt(Pt(n)), 'toggleChatBot', function(e) {
              var t = n.props.toggleFloating;
              t ? t({ opened: e }) : n.setState({ opened: e });
            }),
            It(Pt(Pt(n)), 'renderStep', function(e, t) {
              var r = n.state.renderedSteps,
                i = n.props,
                a = i.avatarStyle,
                s = i.bubbleStyle,
                u = i.bubbleOptionStyle,
                c = i.customStyle,
                l = i.hideBotAvatar,
                p = i.hideUserAvatar,
                f = i.speechSynthesis,
                d = e.options,
                b = e.component,
                h = e.asMessage,
                g = n.generateRenderedStepsById(),
                y = t > 0 ? r[t - 1] : {};
              return (
                console.log('render step', n.state),
                b && !h
                  ? o.a.createElement(R, {
                      key: t,
                      speak: n.speak,
                      step: e,
                      steps: g,
                      style: c,
                      previousStep: y,
                      previousValue: y.value,
                      triggerNextStep: n.triggerNextStep
                    })
                  : d
                  ? (console.log('options step', n.state),
                    o.a.createElement(G, {
                      key: t,
                      step: e,
                      previousValue: y.value,
                      triggerNextStep: n.triggerNextStep,
                      bubbleOptionStyle: u
                    }))
                  : o.a.createElement(he, {
                      key: t,
                      step: e,
                      steps: g,
                      speak: n.speak,
                      previousStep: y,
                      previousValue: y.value,
                      triggerNextStep: n.triggerNextStep,
                      avatarStyle: a,
                      bubbleStyle: s,
                      hideBotAvatar: l,
                      hideUserAvatar: p,
                      speechSynthesis: f,
                      isFirst: n.isFirstPosition(e),
                      isLast: n.isLastPosition(e)
                    })
              );
            }),
            (n.content = null),
            (n.input = null),
            (n.supportsScrollBehavior = !1),
            (n.setContentRef = function(e) {
              n.content = e;
            }),
            (n.setInputRef = function(e) {
              n.input = e;
            }),
            (n.state = {
              renderedSteps: [],
              previousSteps: [],
              currentStep: {},
              previousStep: {},
              steps: {},
              disabled: !0,
              opened: e.opened || !e.floating,
              inputValue: '',
              inputInvalid: !1,
              speaking: !1,
              recognitionEnable: e.recognitionEnable && bt.isSupported(),
              defaultUserSettings: {},
              textMode: !0
            }),
            (n.speak = wt(e.speechSynthesis)),
            (n.secondInputOptionContainer = o.a.createRef()),
            n
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Ct(e, t);
          })(t, r['Component']),
          (n = t),
          (a = [
            {
              key: 'getDerivedStateFromProps',
              value: function(e, t) {
                console.log('props on chatbot', e.steps), console.log('state on chatbot', t);
                var n = e.opened;
                return void 0 !== e.toggleFloating && void 0 !== n && n !== t.opened
                  ? (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                          )),
                          r.forEach(function(t) {
                            It(e, t, n[t]);
                          });
                      }
                      return e;
                    })({}, t, { opened: n })
                  : (t.steps.check &&
                      t.steps.check.metadata.secondChoice !== e.steps[2].metadata.secondChoice &&
                      (t.steps.check.metadata.secondChoice = e.steps[2].metadata.secondChoice),
                    t);
              }
            }
          ]),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                for (
                  var e = this,
                    t = this.props.steps,
                    n = this.props,
                    r = n.botDelay,
                    o = n.botAvatar,
                    i = n.cache,
                    a = n.cacheName,
                    s = n.customDelay,
                    u = n.enableMobileAutoFocus,
                    c = n.userAvatar,
                    l = {},
                    p = { delay: r, avatar: o },
                    f = { delay: n.userDelay, avatar: c, hideInput: !1, hideExtraControl: !1 },
                    d = { delay: s },
                    b = 0,
                    h = t.length;
                  b < h;
                  b += 1
                ) {
                  var g = t[b],
                    y = {};
                  g.user ? (y = f) : g.message || g.asMessage ? (y = p) : g.component && (y = d),
                    (l[g.id] = kt({}, y, we.parse(g)));
                }
                we.checkInvalidIds(l);
                var v = t[0];
                if (v.message) {
                  var m = v.message;
                  (v.message = 'function' == typeof m ? m() : m), (l[v.id].message = v.message);
                }
                var S = this.state.recognitionEnable,
                  x = this.props.recognitionLang;
                S &&
                  (this.recognition = new bt(
                    this.onRecognitionChange,
                    this.onRecognitionEnd,
                    this.onRecognitionStop,
                    x
                  )),
                  (this.supportsScrollBehavior =
                    'scrollBehavior' in document.documentElement.style),
                  this.content &&
                    (this.content.addEventListener('DOMNodeInserted', this.onNodeInserted),
                    window.addEventListener('resize', this.onResize)),
                  this.secondInputOptionContainer.current &&
                    this.secondInputOptionContainer.current.addEventListener(
                      'secondInputOptionClicked',
                      this.handleSecondInputOption
                    );
                var O = (function(e, t) {
                    var n = e.cacheName,
                      r = e.cache,
                      o = e.firstStep,
                      i = e.steps,
                      a = o,
                      s = [i[a.id]],
                      u = [i[a.id]],
                      c = localStorage.getItem(n);
                    if (r && c)
                      try {
                        var l = Object(xe.parse)(c),
                          p = l.renderedSteps[l.renderedSteps.length - 1];
                        if (!p || !p.end) {
                          for (var f = 0, d = l.renderedSteps.length; f < d; f += 1) {
                            var b = l.renderedSteps[f];
                            if (
                              ((l.renderedSteps[f].delay = 0),
                              (l.renderedSteps[f].rendered = !0),
                              b.component)
                            ) {
                              var h = b.id;
                              l.renderedSteps[f].component = i[h].component;
                            }
                          }
                          var g = l.currentStep,
                            y = g.trigger,
                            v = g.end,
                            m = g.options,
                            S = l.currentStep.id;
                          if ((m && delete l.currentStep.rendered, !y && !v))
                            if (m)
                              for (var x = 0; x < m.length; x += 1)
                                l.currentStep.options[x].trigger = i[S].options[x].trigger;
                            else l.currentStep.trigger = i[S].trigger;
                          return l.currentStep.user && t(), l;
                        }
                        localStorage.removeItem(n);
                      } catch (e) {
                        console.info(
                          'Unable to parse cache named:'.concat(
                            n,
                            '. \nThe cache where probably created with an older version of react-simple-chatbot.\n'
                          ),
                          e
                        );
                      }
                    return { currentStep: a, previousStep: {}, previousSteps: u, renderedSteps: s };
                  })({ cacheName: a, cache: i, firstStep: v, steps: l }, function() {
                    e.setState({ disabled: !1 }, function() {
                      (!u && xt()) || (e.input && e.input.focus());
                    });
                  }),
                  w = O.currentStep,
                  j = O.previousStep,
                  k = O.previousSteps,
                  E = O.renderedSteps;
                console.log('componentDidMount'),
                  this.setState({
                    currentStep: w,
                    defaultUserSettings: f,
                    previousStep: j,
                    previousSteps: k,
                    renderedSteps: E,
                    steps: l
                  });
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.content &&
                  (this.content.removeEventListener('DOMNodeInserted', this.onNodeInserted),
                  window.removeEventListener('resize', this.onResize));
              }
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this,
                  n = this.state,
                  r = n.currentStep,
                  i = n.disabled,
                  a = n.inputInvalid,
                  s = n.inputValue,
                  u = n.opened,
                  c = n.renderedSteps,
                  l = n.speaking,
                  p = n.recognitionEnable,
                  f = n.textMode,
                  d = this.props,
                  b = d.changable,
                  h = d.className,
                  g = d.contentStyle,
                  y = d.extraControl,
                  v = d.controlStyle,
                  m = d.changeButtonStyle,
                  S = d.changeButtonText,
                  x = d.floating,
                  O = d.floatingIcon,
                  w = d.floatingStyle,
                  j = d.footerStyle,
                  k = d.headerComponent,
                  E = d.headerTitle,
                  z = d.hideHeader,
                  C = d.hideSecondInputOption,
                  P = d.hideSubmitButton,
                  I = d.inputOptionContainerStyle,
                  q = d.inputStyle,
                  N = d.placeholder,
                  M = d.inputAttributes,
                  R = d.inputOptionElements,
                  B = d.recognitionPlaceholder,
                  T = d.secondInputOptionContainerStyle,
                  A = d.secondInputOptionElements,
                  _ = d.style,
                  F = d.submitButtonStyle,
                  V = d.width,
                  L = d.height,
                  D =
                    k ||
                    o.a.createElement(
                      Ne,
                      { className: 'rsc-header' },
                      o.a.createElement(Be, { className: 'rsc-header-title' }, E),
                      x &&
                        o.a.createElement(
                          Ae,
                          {
                            className: 'rsc-header-close-button',
                            onClick: function() {
                              return t.toggleChatBot(!1);
                            }
                          },
                          o.a.createElement(gt, null)
                        )
                    );
                void 0 !== y && (e = o.a.cloneElement(y, { disabled: i, speaking: l, invalid: a }));
                var U =
                    (this.isInputValueEmpty() || l) && p
                      ? o.a.createElement(St, null)
                      : o.a.createElement(vt, null),
                  H = l ? B : r.placeholder || N,
                  Y = r.inputAttributes || M;
                return o.a.createElement(
                  'div',
                  { className: 'rsc '.concat(h) },
                  x &&
                    o.a.createElement(
                      Ve,
                      {
                        className: 'rsc-float-button',
                        style: w,
                        opened: u,
                        onClick: function() {
                          return t.toggleChatBot(!0);
                        }
                      },
                      'string' == typeof O ? o.a.createElement(De, { src: O }) : O
                    ),
                  o.a.createElement(
                    ze,
                    {
                      className: 'rsc-container',
                      floating: x,
                      floatingStyle: w,
                      opened: u,
                      style: _,
                      width: V,
                      height: L
                    },
                    !z && D,
                    o.a.createElement(
                      Pe,
                      {
                        className: 'rsc-content',
                        ref: this.setContentRef,
                        floating: x,
                        style: g,
                        height: L,
                        hideInput: r.hideInput
                      },
                      c.map(this.renderStep)
                    ),
                    o.a.createElement(
                      He,
                      { className: 'rsc-footer', style: j, ref: this.secondInputOptionContainer },
                      b &&
                        o.a.createElement(
                          nt,
                          {
                            className: 'rsc-change-button',
                            style: m,
                            onClick: this.handleChangeButtton
                          },
                          f ? S[0] : S[1]
                        ),
                      f &&
                        !r.hideInput &&
                        o.a.createElement(
                          We,
                          kt(
                            {
                              type: 'textarea',
                              style: q,
                              ref: this.setInputRef,
                              className: 'rsc-input',
                              placeholder: a ? '' : H,
                              onKeyPress: this.handleKeyPress,
                              onChange: this.onValueChange,
                              value: s,
                              floating: x,
                              invalid: a,
                              disabled: i,
                              hasButton: !P,
                              changable: b
                            },
                            Y
                          )
                        ),
                      f &&
                        o.a.createElement(
                          'div',
                          { style: v, className: 'rsc-controls' },
                          !r.hideInput && !r.hideExtraControl && e,
                          !r.hideInput &&
                            !P &&
                            o.a.createElement(
                              Qe,
                              {
                                className: 'rsc-submit-button',
                                style: F,
                                onClick: this.handleSubmitButton,
                                invalid: a,
                                disabled: i,
                                speaking: l,
                                changable: b
                              },
                              U
                            )
                        ),
                      !f &&
                        o.a.createElement(
                          ot,
                          { className: 'rsc-input-option', style: I },
                          !C &&
                            o.a.createElement(
                              ut,
                              { className: 'rsc-second-input-option', style: T },
                              A
                            ),
                          R
                        )
                    )
                  )
                );
              }
            }
          ]) && Et(n.prototype, i),
          a && Et(n, a),
          t
        );
      })();
      (qt.propTypes = {
        avatarStyle: a.a.objectOf(a.a.any),
        botAvatar: a.a.string,
        botDelay: a.a.number,
        bubbleOptionStyle: a.a.objectOf(a.a.any),
        bubbleStyle: a.a.objectOf(a.a.any),
        cache: a.a.bool,
        cacheName: a.a.string,
        changable: a.a.bool,
        className: a.a.string,
        contentStyle: a.a.objectOf(a.a.any),
        customDelay: a.a.number,
        customStyle: a.a.objectOf(a.a.any),
        controlStyle: a.a.objectOf(a.a.any),
        changeButtonStyle: a.a.objectOf(a.a.any),
        changeButtonText: a.a.arrayOf(a.a.string),
        enableMobileAutoFocus: a.a.bool,
        enableSmoothScroll: a.a.bool,
        extraControl: a.a.objectOf(a.a.element),
        floating: a.a.bool,
        floatingIcon: a.a.oneOfType([a.a.string, a.a.element]),
        floatingStyle: a.a.objectOf(a.a.any),
        footerStyle: a.a.objectOf(a.a.any),
        handleEnd: a.a.func,
        headerComponent: a.a.element,
        headerTitle: a.a.string,
        height: a.a.string,
        hideBotAvatar: a.a.bool,
        hideHeader: a.a.bool,
        hideSecondInputOption: a.a.bool,
        hideSubmitButton: a.a.bool,
        hideUserAvatar: a.a.bool,
        inputAttributes: a.a.objectOf(a.a.any),
        inputOptionContainerStyle: a.a.objectOf(a.a.any),
        inputOptionElements: a.a.arrayOf(a.a.element),
        inputStyle: a.a.objectOf(a.a.any),
        opened: a.a.bool,
        toggleFloating: a.a.func,
        placeholder: a.a.string,
        recognitionEnable: a.a.bool,
        recognitionLang: a.a.string,
        recognitionPlaceholder: a.a.string,
        secondInputOptionContainerStyle: a.a.objectOf(a.a.any),
        secondInputOptionElements: a.a.arrayOf(a.a.element),
        speechSynthesis: a.a.shape({
          enable: a.a.bool,
          lang: a.a.string,
          voice:
            'undefined' != typeof window ? a.a.instanceOf(window.SpeechSynthesisVoice) : a.a.any
        }),
        steps: a.a.arrayOf(a.a.object).isRequired,
        style: a.a.objectOf(a.a.any),
        submitButtonStyle: a.a.objectOf(a.a.any),
        userAvatar: a.a.string,
        userDelay: a.a.number,
        width: a.a.string
      }),
        (qt.defaultProps = {
          avatarStyle: {},
          botDelay: 1e3,
          bubbleOptionStyle: {},
          bubbleStyle: {},
          cache: !1,
          cacheName: 'rsc_cache',
          changable: !1,
          className: '',
          contentStyle: {},
          customStyle: {},
          controlStyle: {
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)'
          },
          changeButtonStyle: {},
          changeButtonText: ['選択肢', '自由入力'],
          customDelay: 1e3,
          enableMobileAutoFocus: !1,
          enableSmoothScroll: !1,
          extraControl: void 0,
          floating: !1,
          floatingIcon: o.a.createElement(ht, null),
          floatingStyle: {},
          footerStyle: {},
          handleEnd: void 0,
          headerComponent: void 0,
          headerTitle: 'Chat',
          height: '520px',
          hideBotAvatar: !1,
          hideHeader: !1,
          hideSecondInputOption: !0,
          hideSubmitButton: !1,
          hideUserAvatar: !1,
          inputOptionContainerStyle: {},
          inputOptionElements: [],
          inputStyle: {},
          opened: void 0,
          placeholder: 'Type the message ...',
          inputAttributes: {},
          recognitionEnable: !1,
          recognitionLang: 'en',
          recognitionPlaceholder: 'Listening ...',
          secondInputOptionContainerStyle: {},
          secondInputOptionElements: [],
          speechSynthesis: { enable: !1, lang: 'en', voice: null },
          style: {},
          submitButtonStyle: {},
          toggleFloating: void 0,
          userDelay: 1e3,
          width: '350px',
          botAvatar:
            "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e",
          userAvatar:
            "data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e"
        });
      var Nt = qt;
      n.d(t, 'Loading', function() {
        return j;
      }),
        n.d(t, 'InputOptionElement', function() {
          return at;
        });
      t.default = Nt;
    }
  ]);
});
//# sourceMappingURL=react-simple-chatbot.js.map