!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document)
    throw new Error("jQuery requires a window with a document"); return b(a); } : b(a); }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function (a, b) { return new m.fn.init(a, b); }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) { return b.toUpperCase(); };
    m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () { return d.call(this); }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this); }, pushStack: function (a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b; }, each: function (a, b) { return m.each(this, a, b); }, map: function (a) { return this.pushStack(m.map(this, function (b, c) { return a.call(b, c, b); })); }, slice: function () { return this.pushStack(d.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []); }, end: function () { return this.prevObject || this.constructor(null); }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (e = arguments[h]))
            for (d in e)
                a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g; }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a); }, noop: function () { }, isFunction: function (a) { return "function" === m.type(a); }, isArray: Array.isArray || function (a) { return "array" === m.type(a); }, isWindow: function (a) { return null != a && a == a.window; }, isNumeric: function (a) { return !m.isArray(a) && a - parseFloat(a) + 1 >= 0; }, isEmptyObject: function (a) { var b; for (b in a)
            return !1; return !0; }, isPlainObject: function (a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
            return !1; try {
            if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                return !1;
        }
        catch (c) {
            return !1;
        } if (k.ownLast)
            for (b in a)
                return j.call(a, b); for (b in a)
            ; return void 0 === b || j.call(a, b); }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a; }, globalEval: function (b) { b && m.trim(b) && (a.execScript || function (b) { a.eval.call(a, b); })(b); }, camelCase: function (a) { return a.replace(o, "ms-").replace(p, q); }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase(); }, each: function (a, b, c) { var d, e = 0, f = a.length, g = r(a); if (c) {
            if (g) {
                for (; f > e; e++)
                    if (d = b.apply(a[e], c), d === !1)
                        break;
            }
            else
                for (e in a)
                    if (d = b.apply(a[e], c), d === !1)
                        break;
        }
        else if (g) {
            for (; f > e; e++)
                if (d = b.call(a[e], e, a[e]), d === !1)
                    break;
        }
        else
            for (e in a)
                if (d = b.call(a[e], e, a[e]), d === !1)
                    break; return a; }, trim: function (a) { return null == a ? "" : (a + "").replace(n, ""); }, makeArray: function (a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c; }, inArray: function (a, b, c) { var d; if (b) {
            if (g)
                return g.call(b, a, c);
            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                if (c in b && b[c] === a)
                    return c;
        } return -1; }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d)
            a[e++] = b[d++]; if (c !== c)
            while (void 0 !== b[d])
                a[e++] = b[d++]; return a.length = e, a; }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            d = !b(a[f], f), d !== h && e.push(a[f]); return e; }, map: function (a, b, c) { var d, f = 0, g = a.length, h = r(a), i = []; if (h)
            for (; g > f; f++)
                d = b(a[f], f, c), null != d && i.push(d);
        else
            for (f in a)
                d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i); }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))); }, e.guid = a.guid = a.guid || m.guid++, e) : void 0; }, now: function () { return +new Date; }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase(); });
    function r(a) { var b = "length" in a && a.length, c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a; }
    var s = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0; }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++)
        if (a[c] === b)
            return c; return -1; }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320); }, ea = function () { m(); }; try {
        H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    }
    catch (fa) {
        H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)); } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++])
                ; a.length = c - 1; } };
    } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
        return d; if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
            if (j = f[1]) {
                if (9 === k) {
                    if (h = b.getElementById(j), !h || !h.parentNode)
                        return d;
                    if (h.id === j)
                        return d.push(h), d;
                }
                else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                    return d.push(h), d;
            }
            else {
                if (f[2])
                    return H.apply(d, b.getElementsByTagName(a)), d;
                if ((j = f[3]) && c.getElementsByClassName)
                    return H.apply(d, b.getElementsByClassName(j)), d;
            }
        if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                while (l--)
                    o[l] = s + ra(o[l]);
                w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
            }
            if (x)
                try {
                    return H.apply(d, w.querySelectorAll(x)), d;
                }
                catch (y) { }
                finally {
                    r || b.removeAttribute("id");
                }
        }
    } return i(a.replace(R, "$1"), b, d, e); } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e; } return b; } function ia(a) { return a[u] = !0, a; } function ja(a) { var b = n.createElement("div"); try {
        return !!a(b);
    }
    catch (c) {
        return !1;
    }
    finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
    } } function ka(a, b) { var c = a.split("|"), e = a.length; while (e--)
        d.attrHandle[c[e]] = b; } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d)
        return d; if (c)
        while (c = c.nextSibling)
            if (c === b)
                return -1; return a ? 1 : -1; } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a; }; } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a; }; } function oa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--)
        c[e = f[g]] && (c[e] = !(d[e] = c[e])); }); }); } function pa(a) { return a && "undefined" != typeof a.getElementsByTagName && a; } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1; }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className"); }), c.getElementsByTagName = ja(function (a) { return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length; }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length; }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) {
        var c = b.getElementById(a);
        return c && c.parentNode ? [c] : [];
    } }, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { return a.getAttribute("id") === b; }; }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b; }; }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0; } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) {
        while (c = f[e++])
            1 === c.nodeType && d.push(c);
        return d;
    } return f; }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return p ? b.getElementsByClassName(a) : void 0; }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]"); }), ja(function (a) { var b = g.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:"); })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P); }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))); } : function (a, b) { if (b)
        while (b = b.parentNode)
            if (b === a)
                return !0; return !1; }, B = b ? function (a, b) { if (a === b)
        return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1); } : function (a, b) { if (a === b)
        return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b]; if (!e || !f)
        return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f)
        return la(a, b); c = a; while (c = c.parentNode)
        h.unshift(c); c = b; while (c = c.parentNode)
        i.unshift(c); while (h[d] === i[d])
        d++; return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0; }, g) : n; }, ga.matches = function (a, b) { return ga(a, null, null, b); }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
        try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                return d;
        }
        catch (e) { } return ga(b, n, null, [a]).length > 0; }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b); }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null; }, ga.error = function (a) { throw new Error("Syntax Error, unrecognized expression: " + a); }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])
            b === a[f] && (e = d.push(f));
        while (e--)
            a.splice(d[e], 1);
    } return k = null, a; }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) {
        if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent)
                return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
                c += e(a);
        }
        else if (3 === f || 4 === f)
            return a.nodeValue;
    }
    else
        while (b = a[d++])
            c += e(b); return c; }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4); }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a; }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)); } }, filter: { TAG: function (a) { var b = a.replace(ca, da).toLowerCase(); return "*" === a ? function () { return !0; } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b; }; }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || ""); }); }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0; }; }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode; } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) {
                if (f) {
                    while (p) {
                        l = b;
                        while (l = l[p])
                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                return !1;
                        o = p = "only" === a && !o && "nextSibling";
                    }
                    return !0;
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                        if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                        }
                }
                else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                    m = j[1];
                else
                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))
                            break;
                return m -= e, m === d || m % d === 0 && m / d >= 0;
            } }; }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--)
                d = J(a, f[g]), a[d] = !(c[d] = f[g]); }) : function (a) { return e(a, 0, c); }) : e; } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--)
                (f = g[h]) && (a[h] = !(b[h] = f)); }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop(); }; }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0; }; }), contains: ia(function (a) { return a = a.replace(ca, da), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1; }; }), lang: ia(function (a) { return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) { var c; do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            while ((b = b.parentNode) && 1 === b.nodeType); return !1; }; }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id; }, root: function (a) { return a === o; }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex); }, enabled: function (a) { return a.disabled === !1; }, disabled: function (a) { return a.disabled === !0; }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected; }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0; }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6)
                    return !1; return !0; }, parent: function (a) { return !d.pseudos.empty(a); }, header: function (a) { return Z.test(a.nodeName); }, input: function (a) { return Y.test(a.nodeName); }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b; }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()); }, first: oa(function () { return [0]; }), last: oa(function (a, b) { return [b - 1]; }), eq: oa(function (a, b, c) { return [0 > c ? c + b : c]; }), even: oa(function (a, b) { for (var c = 0; b > c; c += 2)
                a.push(c); return a; }), odd: oa(function (a, b) { for (var c = 1; b > c; c += 2)
                a.push(c); return a; }), lt: oa(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)
                a.push(d); return a; }), gt: oa(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)
                a.push(d); return a; }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 })
        d.pseudos[b] = na(b); function qa() { } qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k)
        return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));
        for (g in d.filter)
            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        if (!c)
            break;
    } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0); }; function ra(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)
        d += a[b].value; return d; } function sa(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d])
        if (1 === b.nodeType || e)
            return a(b, c, f); } : function (b, c, g) { var h, i, j = [w, f]; if (g) {
        while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g))
                return !0;
    }
    else
        while (b = b[d])
            if (1 === b.nodeType || e) {
                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                    return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g))
                    return !0;
            } }; } function ta(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--)
        if (!a[e](b, c, d))
            return !1; return !0; } : a[0]; } function ua(a, b, c) { for (var d = 0, e = b.length; e > d; d++)
        ga(a, b[d], c); return c; } function va(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g; } function wa(a, b, c, d, e, f) { return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) {
        j = va(r, n), d(j, [], h, i), k = j.length;
        while (k--)
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
    } if (f) {
        if (e || a) {
            if (e) {
                j = [], k = r.length;
                while (k--)
                    (l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i);
            }
            k = r.length;
            while (k--)
                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
        }
    }
    else
        r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r); }); } function xa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) { return a === b; }, h, !0), l = sa(function (a) { return J(b, a) > -1; }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e; }]; f > i; i++)
        if (c = d.relative[a[i].type])
            m = [sa(ta(m), c)];
        else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                for (e = ++i; f > e; e++)
                    if (d.relative[a[e].type])
                        break;
                return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
            }
            m.push(c);
        } return ta(m); } function ya(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
        if (e && l) {
            m = 0;
            while (o = a[m++])
                if (o(l, g, h)) {
                    i.push(l);
                    break;
                }
            k && (w = v);
        }
        c && ((l = !o && l) && p--, f && r.push(l));
    } if (p += q, c && q !== p) {
        m = 0;
        while (o = b[m++])
            o(r, s, g, h);
        if (f) {
            if (p > 0)
                while (q--)
                    r[q] || s[q] || (s[q] = F.call(i));
            s = va(s);
        }
        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
    } return k && (w = v, j = t), r; }; return c ? ia(f) : f; } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)
            f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, ya(e, d)), f.selector = a;
    } return f; }, i = ga.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)
                return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
            if (k = j[i], d.relative[l = k.type])
                break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                if (j.splice(i, 1), a = f.length && ra(j), !a)
                    return H.apply(e, f), e;
                break;
            }
        }
    } return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e; }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")); }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href"); }) || ka("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2); }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value"); }) || ka("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue; }), ja(function (a) { return null == a.getAttribute("disabled"); }) || ka(K, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null; }), ga; }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) { if (m.isFunction(b))
        return m.grep(a, function (a, d) { return !!b.call(a, d, a) !== c; }); if (b.nodeType)
        return m.grep(a, function (a) { return a === b !== c; }); if ("string" == typeof b) {
        if (v.test(b))
            return m.filter(b, a, c);
        b = m.filter(b, a);
    } return m.grep(a, function (a) { return m.inArray(a, b) >= 0 !== c; }); }
    m.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) { return 1 === a.nodeType; })); }, m.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a)
            return this.pushStack(m(a).filter(function () { for (b = 0; e > b; b++)
                if (m.contains(d[b], this))
                    return !0; })); for (b = 0; e > b; b++)
            m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c; }, filter: function (a) { return this.pushStack(w(this, a || [], !1)); }, not: function (a) { return this.pushStack(w(this, a || [], !0)); }, is: function (a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length; } });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) { var c, d; if (!a)
        return this; if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)
            return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
        if (c[1]) {
            if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                for (c in b)
                    m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this;
        }
        if (d = y.getElementById(c[2]), d && d.parentNode) {
            if (d.id !== c[2])
                return x.find(a);
            this.length = 1, this[0] = d;
        }
        return this.context = y, this.selector = a, this;
    } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)); };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 };
    m.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
            1 === e.nodeType && d.push(e), e = e[b]; return d; }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a); return c; } }), m.fn.extend({ has: function (a) { var b, c = m(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++)
            if (m.contains(this, c[b]))
                return !0; }); }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                    f.push(c);
                    break;
                } return this.pushStack(f.length > 1 ? m.unique(f) : f); }, index: function (a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))); }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)); } });
    function D(a, b) { do
        a = a[b];
    while (a && 1 !== a.nodeType); return a; }
    m.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null; }, parents: function (a) { return m.dir(a, "parentNode"); }, parentsUntil: function (a, b, c) { return m.dir(a, "parentNode", c); }, next: function (a) { return D(a, "nextSibling"); }, prev: function (a) { return D(a, "previousSibling"); }, nextAll: function (a) { return m.dir(a, "nextSibling"); }, prevAll: function (a) { return m.dir(a, "previousSibling"); }, nextUntil: function (a, b, c) { return m.dir(a, "nextSibling", c); }, prevUntil: function (a, b, c) { return m.dir(a, "previousSibling", c); }, siblings: function (a) { return m.sibling((a.parentNode || {}).firstChild, a); }, children: function (a) { return m.sibling(a.firstChild); }, contents: function (a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes); } }, function (a, b) { m.fn[a] = function (c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e); }; });
    var E = /\S+/g, F = {};
    function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function (a, c) { b[c] = !0; }), b; }
    m.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
        } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()); }, k = { add: function () { if (h) {
            var d = h.length;
            !function f(b) { m.each(b, function (b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c); }); }(arguments), b ? e = h.length : c && (g = d, j(c));
        } return this; }, remove: function () { return h && m.each(arguments, function (a, c) { var d; while ((d = m.inArray(c, h, d)) > -1)
            h.splice(d, 1), b && (e >= d && e--, f >= d && f--); }), this; }, has: function (a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length); }, empty: function () { return h = [], e = 0, this; }, disable: function () { return h = i = c = void 0, this; }, disabled: function () { return !h; }, lock: function () { return i = void 0, c || k.disable(), this; }, locked: function () { return !i; }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this; }, fire: function () { return k.fireWith(this, arguments), this; }, fired: function () { return !!d; } }; return k; }, m.extend({ Deferred: function (a) { var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = { state: function () { return c; }, always: function () { return e.done(arguments).fail(arguments), this; }, then: function () { var a = arguments; return m.Deferred(function (c) { m.each(b, function (b, f) { var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments); }); }), a = null; }).promise(); }, promise: function (a) { return null != a ? m.extend(a, d) : d; } }, e = {}; return d.pipe = d.then, m.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h; }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this; }, e[f[0] + "With"] = g.fireWith; }), d.promise(e), a && a.call(e, e), e; }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c); }; }, i, j, k; if (e > 1)
            for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise(); } });
    var H;
    m.fn.ready = function (a) { return m.ready.promise().done(a), this; }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? m.readyWait++ : m.ready(!0); }, ready: function (a) { if (a === !0 ? !--m.readyWait : !m.isReady) {
            if (!y.body)
                return setTimeout(m.ready);
            m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
        } } });
    function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)); }
    function J() { (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()); }
    m.ready.promise = function (b) { if (!H)
        if (H = m.Deferred(), "complete" === y.readyState)
            setTimeout(m.ready);
        else if (y.addEventListener)
            y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement;
            }
            catch (d) { }
            c && c.doScroll && !function e() { if (!m.isReady) {
                try {
                    c.doScroll("left");
                }
                catch (a) {
                    return setTimeout(e, 50);
                }
                I(), m.ready();
            } }();
        } return H.promise(b); };
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () { var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)); }), function () { var a = y.createElement("div"); if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
            delete a.test;
        }
        catch (b) {
            k.deleteExpando = !1;
        }
    } a = null; }(), m.acceptData = function (a) { var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b; };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) {
        var d = "data-" + b.replace(N, "-$1").toLowerCase();
        if (c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
            }
            catch (e) { }
            m.data(a, b, c);
        }
        else
            c = void 0;
    } return c; }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0;
    }
    function Q(a, b, d, e) { if (m.acceptData(a)) {
        var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
        if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
            return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    } }
    function R(a, b, c) { if (m.acceptData(a)) {
        var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
        if (g[h]) {
            if (b && (d = c ? g[h] : g[h].data)) {
                m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                while (e--)
                    delete d[b[e]];
                if (c ? !P(d) : !m.isEmptyObject(d))
                    return;
            }
            (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
        }
    } }
    m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a); }, data: function (a, b, c) { return Q(a, b, c); }, removeData: function (a, b) { return R(a, b); }, _data: function (a, b, c) { return Q(a, b, c, !0); }, _removeData: function (a, b) { return R(a, b, !0); } }), m.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) {
            if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                c = g.length;
                while (c--)
                    g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                m._data(f, "parsedAttrs", !0);
            }
            return e;
        } return "object" == typeof a ? this.each(function () { m.data(this, a); }) : arguments.length > 1 ? this.each(function () { m.data(this, a, b); }) : f ? O(f, a, m.data(f, a)) : void 0; }, removeData: function (a) { return this.each(function () { m.removeData(this, a); }); } }), m.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0; }, dequeue: function (a, b) { b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () { m.dequeue(a, b); }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire(); }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () { m._removeData(a, b + "queue"), m._removeData(a, c); }) }); } }), m.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = m.queue(this, a, b); m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a); }); }, dequeue: function (a) { return this.each(function () { m.dequeue(this, a); }); }, clearQueue: function (a) { return this.queue(a || "fx", []); }, promise: function (a, b) { var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]); }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--)
            c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b); } });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a); }, V = m.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) {
        e = !0;
        for (h in c)
            m.access(a, b, h, c[h], !0, f, g);
    }
    else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(m(a), c); })), b))
        for (; i > h; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f; }, W = /^(?:checkbox|radio)$/i;
    !function () { var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { k.noCloneEvent = !1; }), b.cloneNode(!0).click()), null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
            delete b.test;
        }
        catch (d) {
            k.deleteExpando = !1;
        }
    } }(), function () { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 })
        c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1); d = null; }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() { return !0; }
    function ba() { return !1; }
    function ca() { try {
        return y.activeElement;
    }
    catch (a) { } }
    m.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) {
            c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments); }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
            while (h--)
                f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
            a = null;
        } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) {
            b = (b || "").match(E) || [""], j = b.length;
            while (j--)
                if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--)
                        g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
                }
                else
                    for (o in k)
                        m.event.remove(a, o + b[j], c, d, !0);
            m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
        } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
            if (!e && !k.noBubble && !m.isWindow(d)) {
                for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                    o.push(h), l = h;
                l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
            }
            n = 0;
            while ((h = o[n++]) && !b.isPropagationStopped())
                b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
            if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                l = d[g], l && (d[g] = null), m.event.triggered = p;
                try {
                    d[p]();
                }
                catch (r) { }
                m.event.triggered = void 0, l && (d[g] = l);
            }
            return b.result;
        } }, dispatch: function (a) { a = m.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            h = m.event.handlers.call(this, a, j), b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem, g = 0;
                while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                    (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
            }
            return k.postDispatch && k.postDispatch.call(this, a), a.result;
        } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type))
            for (; i != this; i = i.parentNode || this)
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (e = [], f = 0; h > f; f++)
                        d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                    e.length && g.push({ elem: i, handlers: e });
                } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g; }, fix: function (a) { if (a[m.expando])
            return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--)
            c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a; }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a; } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== ca() && this.focus)
                    try {
                        return this.focus(), !1;
                    }
                    catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === ca() && this.blur ? (this.blur(), !1) : void 0; }, delegateType: "focusout" }, click: { trigger: function () { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0; }, _default: function (a) { return m.nodeName(a.target, "a"); } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result); } } }, simulate: function (a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault(); } }, m.removeEvent = y.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1); } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)); }, m.Event = function (a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b); }, m.Event.prototype = { isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1); }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0); }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation(); } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c; } }; }), k.submitBubbles || (m.event.special.submit = { setup: function () { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0; c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0; }), m._data(c, "submitBubbles", !0)); }); }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)); }, teardown: function () { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit"); } }), k.changeBubbles || (m.event.special.change = { setup: function () { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0); }), m.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0); })), !1) : void m.event.add(this, "beforeactivate._change", function (a) { var b = a.target; X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0); }), m._data(b, "changeBubbles", !0)); }); }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0; }, teardown: function () { return m.event.remove(this, "._change"), !X.test(this.nodeName); } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { m.event.simulate(b, a.target, m.event.fix(a), !0); }; m.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = m._data(d, b); e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1); }, teardown: function () { var d = this.ownerDocument || this, e = m._data(d, b) - 1; e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)); } }; }), m.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (f in a)
                this.on(f, b, c, a[f], e);
            return this;
        } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
            d = ba;
        else if (!d)
            return this; return 1 === e && (g = d, d = function (a) { return m().off(a), g.apply(this, arguments); }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () { m.event.add(this, a, d, c, b); }); }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1); }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj)
            return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) {
            for (e in a)
                this.off(e, b, a[e]);
            return this;
        } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () { m.event.remove(this, a, c, b); }); }, trigger: function (a, b) { return this.each(function () { m.event.trigger(a, b, this); }); }, triggerHandler: function (a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0; } });
    function da(a) { var b = ea.split("|"), c = a.createDocumentFragment(); if (c.createElement)
        while (b.length)
            c.createElement(b.pop()); return c; }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;
    function ua(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f)
        for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
            !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f; }
    function va(a) { W.test(a.type) && (a.defaultChecked = a.checked); }
    function wa(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a; }
    function xa(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a; }
    function ya(a) { var b = pa.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a; }
    function za(a, b) { for (var c, d = 0; null != (c = a[d]); d++)
        m._data(c, "globalEval", !b || m._data(b[d], "globalEval")); }
    function Aa(a, b) { if (1 === b.nodeType && m.hasData(a)) {
        var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h)
                for (d = 0, e = h[c].length; e > d; d++)
                    m.event.add(b, c, h[c][d]);
        }
        g.data && (g.data = m.extend({}, g.data));
    } }
    function Ba(a, b) { var c, d, e; if (1 === b.nodeType) {
        if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
            e = m._data(b);
            for (d in e.events)
                m.removeEvent(b, d, e.handle);
            b.removeAttribute(m.expando);
        }
        "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    } }
    m.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
            for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)
                d[g] && Ba(e, d[g]); if (b)
            if (c)
                for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)
                    Aa(e, d[g]);
            else
                Aa(a, f); return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f; }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
            if (f = a[q], f || 0 === f)
                if ("object" === m.type(f))
                    m.merge(p, f.nodeType ? [f] : f);
                else if (la.test(f)) {
                    h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                    while (e--)
                        h = h.lastChild;
                    if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                        f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                        while (e--)
                            m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    }
                    m.merge(p, h.childNodes), h.textContent = "";
                    while (h.firstChild)
                        h.removeChild(h.firstChild);
                    h = o.lastChild;
                }
                else
                    p.push(b.createTextNode(f)); h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0; while (f = p[q++])
            if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++])
                    oa.test(f.type || "") && c.push(f);
            } return h = null, o; }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
            if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)
                    for (e in g.events)
                        n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
            } } }), m.fn.extend({ text: function (a) { return V(this, function (a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)); }, null, a, arguments.length); }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = wa(this, a);
            b.appendChild(a);
        } }); }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = wa(this, a);
            b.insertBefore(a, b.firstChild);
        } }); }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this); }); }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling); }); }, remove: function (a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
            b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c)); return this; }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) {
            1 === a.nodeType && m.cleanData(ua(a, !1));
            while (a.firstChild)
                a.removeChild(a.firstChild);
            a.options && m.nodeName(a, "select") && (a.options.length = 0);
        } return this; }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return m.clone(this, a, b); }); }, html: function (a) { return V(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a)
            return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0; if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
            a = a.replace(ia, "<$1></$2>");
            try {
                for (; d > c; c++)
                    b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                b = 0;
            }
            catch (e) { }
        } b && this.empty().append(a); }, null, a, arguments.length); }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this); }), a && (a.length || a.nodeType) ? this : this.remove(); }, detach: function (a) { return this.remove(a, !0); }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))
            return this.each(function (c) { var d = n.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b); }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
            for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)
                d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
            if (f)
                for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++)
                    d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
            i = c = null;
        } return this; } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { m.fn[a] = function (a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e); }; });
    var Ca, Da = {};
    function Ea(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f; }
    function Fa(a) { var b = y, c = Da[a]; return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c; }
    !function () { var a; k.shrinkWrapBlocks = function () { if (null != a)
        return a; a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0; }; }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null); }, Ja = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""; }) : y.documentElement.currentStyle && (Ia = function (a) { return a.currentStyle; }, Ja = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"; });
    function La(a, b) { return { get: function () { var c = a(); if (null != c)
            return c ? void delete this.get : (this.get = b).apply(this, arguments); } }; }
    !function () { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
        c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () { return null == g && i(), g; }, boxSizingReliable: function () { return null == f && i(), f; }, pixelPosition: function () { return null == e && i(), e; }, reliableMarginRight: function () { return null == h && i(), h; } });
        function i() { var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)); }
    } }(), m.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b)
        g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b)
        a.style[f] = g[f]; return e; };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = { position: "absolute", visibility: "hidden", display: "block" }, Sa = { letterSpacing: "0", fontWeight: "400" }, Ta = ["Webkit", "O", "Moz", "ms"];
    function Ua(a, b) { if (b in a)
        return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length; while (e--)
        if (b = Ta[e] + c, b in a)
            return b; return d; }
    function Va(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
        d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++)
        d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a; }
    function Wa(a, b, c) { var d = Pa.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b; }
    function Xa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
        "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g; }
    function Ya(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) {
        if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e))
            return e;
        d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    } return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"; }
    m.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) {
                    var c = Ja(a, "opacity");
                    return "" === c ? "1" : c;
                } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = m.camelCase(b), i = a.style;
            if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)
                return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
            if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                try {
                    i[b] = c;
                }
                catch (j) { }
        } }, css: function (a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f; } }), m.each(["height", "width"], function (a, b) { m.cssHooks[b] = { get: function (a, c, d) { return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () { return Ya(a, b, d); }) : Ya(a, b, d) : void 0; }, set: function (a, c, d) { var e = d && Ia(a); return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0); } }; }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) { return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""; }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e); } }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) { return b ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"]) : void 0; }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) { m.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e; } }, Ga.test(a) || (m.cssHooks[a + b].set = Wa); }), m.fn.extend({ css: function (a, b) { return V(this, function (a, b, c) { var d, e, f = {}, g = 0; if (m.isArray(b)) {
            for (d = Ia(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
            return f;
        } return void 0 !== c ? m.style(a, b, c) : m.css(a, b); }, a, b, arguments.length > 1); }, show: function () { return Va(this, !0); }, hide: function () { return Va(this); }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { U(this) ? m(this).show() : m(this).hide(); }); } });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e);
    }
    m.Tween = Za, Za.prototype = { constructor: Za, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px"); }, cur: function () { var a = Za.propHooks[this.prop]; return a && a.get ? a.get(this) : Za.propHooks._default.get(this); }, run: function (a) { var b, c = Za.propHooks[this.prop]; return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this; } }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]; }, set: function (a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now; } } }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now); } }, m.easing = { linear: function (a) { return a; }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2; } }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do
                    h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i);
            } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c; }] };
    function fb() { return setTimeout(function () { $a = void 0; }), $a = m.now(); }
    function gb(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b)
        c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d; }
    function hb(a, b, c) { for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a))
            return d; }
    function ib(a, b, c) { var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow"); c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i(); }), h.unqueued++, n.always(function () { n.always(function () { h.unqueued--, m.queue(a, "fx").length || h.empty.fire(); }); })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]; })); for (d in b)
        if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])
                    continue;
                q = !0;
            }
            o[d] = r && r[d] || m.style(a, d);
        }
        else
            j = void 0; if (m.isEmptyObject(o))
        "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
    else {
        r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () { m(a).hide(); }), n.done(function () { var b; m._removeData(a, "fxshow"); for (b in o)
            m.style(a, b, o[b]); });
        for (d in o)
            g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    } }
    function jb(a, b) { var c, d, e, f, g; for (c in a)
        if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)
                c in a || (a[c] = f[c], b[c] = e);
        }
        else
            b[d] = e; }
    function kb(a, b, c) { var d, e, f = 0, g = db.length, h = m.Deferred().always(function () { delete i.elem; }), i = function () { if (e)
        return !1; for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
        j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1); }, j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $a || fb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d; }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e)
            return this; for (e = !0; d > c; c++)
            j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this; } }), k = j.props; for (jb(k, j.opts.specialEasing); g > f; f++)
        if (d = db[f].call(j, a, k, j.opts))
            return d; return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always); }
    m.Animation = m.extend(kb, { tweener: function (a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)
            c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b); }, prefilter: function (a, b) { b ? db.unshift(a) : db.push(a); } }), m.speed = function (a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue); }, d; }, m.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d); }, animate: function (a, b, c, d) { var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () { var b = kb(this, m.extend({}, a), f); (e || m._data(this, "finish")) && b.stop(!0); }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g); }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c); }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this); if (e)
            g[e] && g[e].stop && d(g[e]);
        else
            for (e in g)
                g[e] && g[e].stop && cb.test(e) && d(g[e]); for (e = f.length; e--;)
            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && m.dequeue(this, a); }); }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)
            d[b] && d[b].finish && d[b].finish.call(this); delete c.finish; }); } }), m.each(["toggle", "show", "hide"], function (a, b) { var c = m.fn[b]; m.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e); }; }), m.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { m.fn[a] = function (a, c, d) { return this.animate(b, a, c, d); }; }), m.timers = [], m.fx.tick = function () { var a, b = m.timers, c = 0; for ($a = m.now(); c < b.length; c++)
        a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || m.fx.stop(), $a = void 0; }, m.fx.timer = function (a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop(); }, m.fx.interval = 13, m.fx.start = function () { _a || (_a = setInterval(m.fx.tick, m.fx.interval)); }, m.fx.stop = function () { clearInterval(_a), _a = null; }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d); }; }); }, function () { var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value; }();
    var lb = /\r/g;
    m.fn.extend({ val: function (a) { var b, c, d, e = this[0]; {
            if (arguments.length)
                return d = m.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) { return null == a ? "" : a + ""; })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)); });
            if (e)
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
        } } }), m.extend({ valHooks: { option: { get: function (a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)); } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                    if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f)
                            return b;
                        g.push(b);
                    } return g; }, set: function (a, b) { var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--)
                    if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)
                        try {
                            d.selected = c = !0;
                        }
                        catch (h) {
                            d.scrollHeight;
                        }
                    else
                        d.selected = !1; return c || (a.selectedIndex = -1), e; } } } }), m.each(["radio", "checkbox"], function () { m.valHooks[this] = { set: function (a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0; } }, k.checkOn || (m.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value; }); });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({ attr: function (a, b) { return V(this, m.attr, a, b, arguments.length > 1); }, removeAttr: function (a) { return this.each(function () { m.removeAttr(this, a); }); } }), m.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f)
            return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)); }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType)
            while (c = f[e++])
                d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d); }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                    var c = a.value;
                    return a.setAttribute("type", b), c && (a.value = c), b;
                } } } } }), nb = { set: function (a, b, c) { return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c; } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = ob[b] || m.find.attr; ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) { var e, f; return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e; } : function (a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null; }; }), rb && qb || (m.attrHooks.value = { set: function (a, b, c) { return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c); } }), qb || (mb = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0; } }, ob.id = ob.name = ob.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null; }, m.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0; }, set: mb.set }, m.attrHooks.contenteditable = { set: function (a, b, c) { mb.set(a, "" === b ? !1 : b, c); } }, m.each(["width", "height"], function (a, b) { m.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0; } }; })), k.style || (m.attrHooks.style = { get: function (a) { return a.style.cssText || void 0; }, set: function (a, b) { return a.style.cssText = b + ""; } });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({ prop: function (a, b) { return V(this, m.prop, a, b, arguments.length > 1); }, removeProp: function (a) { return a = m.propFix[a] || a, this.each(function () { try {
            this[a] = void 0, delete this[a];
        }
        catch (b) { } }); } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g)
            return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]; }, propHooks: { tabIndex: { get: function (a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1; } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) { m.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4); } }; }), k.optSelected || (m.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null; } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { m.propFix[this.toLowerCase()] = this; }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a))
            return this.each(function (b) { m(this).addClass(a.call(this, b, this.className)); }); if (j)
            for (b = (a || "").match(E) || []; i > h; h++)
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                    f = 0;
                    while (e = b[f++])
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = m.trim(d), c.className !== g && (c.className = g);
                } return this; }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a))
            return this.each(function (b) { m(this).removeClass(a.call(this, b, this.className)); }); if (j)
            for (b = (a || "").match(E) || []; i > h; h++)
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                    f = 0;
                    while (e = b[f++])
                        while (d.indexOf(" " + e + " ") >= 0)
                            d = d.replace(" " + e + " ", " ");
                    g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
                } return this; }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) { m(this).toggleClass(a.call(this, c, this.className, b), b); } : function () { if ("string" === c) {
            var b, d = 0, e = m(this), f = a.match(E) || [];
            while (b = f[d++])
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        }
        else
            (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || ""); }); }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
            if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)
                return !0; return !1; } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup Error contextmenu".split(" "), function (a, b) { m.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b); }; }), m.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a); }, bind: function (a, b, c) { return this.on(a, null, b, c); }, unbind: function (a, b) { return this.off(a, null, b); }, delegate: function (a, b, c, d) { return this.on(b, a, c, d); }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c); } });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) { if (a.JSON && a.JSON.parse)
        return a.JSON.parse(b + ""); var c, d = null, e = m.trim(b + ""); return e && !m.trim(e.replace(xb, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, ""); })) ? Function("return " + e)() : m.error("Invalid JSON: " + b); }, m.parseXML = function (b) { var c, d; if (!b || "string" != typeof b)
        return null; try {
        a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    }
    catch (e) {
        c = void 0;
    } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c; };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href;
    }
    catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href;
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (m.isFunction(c))
        while (d = f[e++])
            "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c); }; }
    function Mb(a, b, c, d) { var e = {}, f = a === Ib; function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1); }), i; } return g(b.dataTypes[0]) || !e["*"] && g("*"); }
    function Nb(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b)
        void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a; }
    function Ob(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0])
        i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e)
        for (g in h)
            if (h[g] && h[g].test(e)) {
                i.unshift(g);
                break;
            } if (i[0] in c)
        f = i[0];
    else {
        for (g in c) {
            if (!i[0] || a.converters[g + " " + i[0]]) {
                f = g;
                break;
            }
            d || (d = g);
        }
        f = f || d;
    } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0; }
    function Pb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1])
        for (g in a.converters)
            j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
            if ("*" === f)
                f = i;
            else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break;
                        }
                if (g !== !0)
                    if (g && a["throws"])
                        b = g(b);
                    else
                        try {
                            b = g(b);
                        }
                        catch (l) {
                            return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                        }
            } return { state: "success", data: b }; }
    m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zb, type: "GET", isLocal: Db.test(yb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a); }, ajaxPrefilter: Lb(Hb), ajaxTransport: Lb(Ib), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) {
                if (!j) {
                    j = {};
                    while (b = Cb.exec(f))
                        j[b[1].toLowerCase()] = b[2];
                }
                b = j[a.toLowerCase()];
            } return null == b ? null : b; }, getAllResponseHeaders: function () { return 2 === t ? f : null; }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this; }, overrideMimeType: function (a) { return t || (k.mimeType = a), this; }, statusCode: function (a) { var b; if (a)
                if (2 > t)
                    for (b in a)
                        q[b] = [q[b], a[b]];
                else
                    v.always(a[v.status]); return this; }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this; } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t)
            return v; h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers)
            v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
            return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 })
            v[d](k[d]); if (i = Mb(Ib, k, b, v)) {
            v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout"); }, k.timeout));
            try {
                t = 1, i.send(r, x);
            }
            catch (w) {
                if (!(2 > t))
                    throw w;
                x(-1, w);
            }
        }
        else
            x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))); } return v; }, getJSON: function (a, b, c) { return m.get(a, b, c, "json"); }, getScript: function (a, b) { return m.get(a, void 0, b, "script"); } }), m.each(["get", "post"], function (a, b) { m[b] = function (a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }); }; }), m._evalUrl = function (a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }); }, m.fn.extend({ wrapAll: function (a) { if (m.isFunction(a))
            return this.each(function (b) { m(this).wrapAll(a.call(this, b)); }); if (this[0]) {
            var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType)
                a = a.firstChild; return a; }).append(this);
        } return this; }, wrapInner: function (a) { return this.each(m.isFunction(a) ? function (b) { m(this).wrapInner(a.call(this, b)); } : function () { var b = m(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a); }); }, wrap: function (a) { var b = m.isFunction(a); return this.each(function (c) { m(this).wrapAll(b ? a.call(this, c) : a); }); }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes); }).end(); } }), m.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")); }, m.expr.filters.visible = function (a) { return !m.expr.filters.hidden(a); };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) { var e; if (m.isArray(b))
        m.each(b, function (b, e) { c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d); });
    else if (c || "object" !== m.type(b))
        d(a, b);
    else
        for (e in b)
            Vb(a + "[" + e + "]", b[e], c, d); }
    m.param = function (a, b) { var c, d = [], e = function (a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b); }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))
        m.each(a, function () { e(this.name, this.value); });
    else
        for (c in a)
            Vb(c, a[c], b, e); return d.join("&").replace(Qb, "+"); }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this; }).filter(function () { var a = this.type; return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a)); }).map(function (a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function (a) { return { name: b.name, value: a.replace(Sb, "\r\n") }; }) : { name: b.name, value: c.replace(Sb, "\r\n") }; }).get(); } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b(); } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () { for (var a in Xb)
        Xb[a](void 0, !0); }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) { if (!a.crossDomain || k.cors) {
        var b;
        return { send: function (c, d) { var e, f = a.xhr(), g = ++Wb; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                for (e in a.xhrFields)
                    f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c)
                void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState))
                if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e)
                    4 !== f.readyState && f.abort();
                else {
                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                    try {
                        i = f.statusText;
                    }
                    catch (k) {
                        i = "";
                    }
                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                } j && d(h, i, j, f.getAllResponseHeaders()); }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b(); }, abort: function () { b && b(void 0, !0); } };
    } });
    function Zb() { try {
        return new a.XMLHttpRequest;
    }
    catch (b) { } }
    function $b() { try {
        return new a.ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (b) { } }
    m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return m.globalEval(a), a; } } }), m.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1); }), m.ajaxTransport("script", function (a) { if (a.crossDomain) {
        var b, c = y.head || m("head")[0] || y.documentElement;
        return { send: function (d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")); }, c.insertBefore(b, c.firstChild); }, abort: function () { b && b.onload(void 0, !0); } };
    } });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = _b.pop() || m.expando + "_" + vb++; return this[a] = !0, a; } }), m.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || m.error(e + " was not called"), g[0]; }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments; }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0; }), "script") : void 0; }), m.parseHTML = function (a, b, c) { if (!a || "string" != typeof a)
        return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)); };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) { if ("string" != typeof a && bc)
        return bc.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a); }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]); }), this; }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { m.fn[b] = function (a) { return this.on(b, a); }; }), m.expr.filters.animated = function (a) { return m.grep(m.timers, function (b) { return a === b.elem; }).length; };
    var cc = a.document.documentElement;
    function dc(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1; }
    m.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n); } }, m.fn.extend({ offset: function (a) { if (arguments.length)
            return void 0 === a ? this : this.each(function (b) { m.offset.setOffset(this, a, b); }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f)
            return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d; }, position: function () { if (this[0]) {
            var a, b, c = { top: 0, left: 0 }, d = this[0];
            return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
        } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || cc; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
            a = a.offsetParent; return a || cc; }); } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); m.fn[a] = function (d) { return V(this, function (a, d, e) { var f = dc(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e); }, a, d, arguments.length, null); }; }), m.each(["top", "left"], function (a, b) { m.cssHooks[b] = La(k.pixelPosition, function (a, c) { return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0; }); }), m.each({ Height: "height", Width: "width" }, function (a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { m.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function (b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g); }, b, f ? d : void 0, f, null); }; }); }), m.fn.size = function () { return this.length; }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return m; });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function (b) { return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m; }, typeof b === K && (a.jQuery = a.$ = m), m;
});
/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function () {
    (function (p) {
        var s = this || (0, eval)("this"), v = s.document, L = s.navigator, w = s.jQuery, D = s.JSON;
        (function (p) { "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], p) : p(s.ko = {}); })(function (M, N) {
            function H(a, d) { return null === a || typeof a in R ? a === d : !1; }
            function S(a, d) { var c; return function () { c || (c = setTimeout(function () { c = p; a(); }, d)); }; }
            function T(a, d) {
                var c;
                return function () {
                    clearTimeout(c);
                    c = setTimeout(a, d);
                };
            }
            function I(b, d, c, e) { a.d[b] = { init: function (b, h, k, f, m) { var l, q; a.s(function () { var f = a.a.c(h()), k = !c !== !f, z = !q; if (z || d || k !== l)
                    z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)), k ? (z || a.f.T(b, a.a.ia(q)), a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b), l = k; }, null, { o: b }); return { controlsDescendantBindings: !0 }; } }; a.h.ha[b] = !1; a.f.Q[b] = !0; }
            var a = "undefined" !== typeof M ? M : {};
            a.b = function (b, d) { for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++)
                e = e[c[g]]; e[c[c.length - 1]] = d; };
            a.A = function (a, d, c) { a[d] = c; };
            a.version = "3.2.0";
            a.b("version", a.version);
            a.a = function () {
                function b(a, b) { for (var c in a)
                    a.hasOwnProperty(c) && b(c, a[c]); }
                function d(a, b) { if (b)
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c]); return a; }
                function c(a, b) { a.__proto__ = b; return a; }
                var e = { __proto__: [] } instanceof Array, g = {}, h = {};
                g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(g, function (a, b) {
                    if (b.length)
                        for (var c = 0, d = b.length; c < d; c++)
                            h[b[c]] = a;
                });
                var k = { propertychange: !0 }, f = v && function () { for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];)
                    ; return 4 < a ? a : p; }();
                return { vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], u: function (a, b) { for (var c = 0, d = a.length; c < d; c++)
                        b(a[c], c); }, m: function (a, b) {
                        if ("function" == typeof Array.prototype.indexOf)
                            return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++)
                            if (a[c] ===
                                b)
                                return c;
                        return -1;
                    }, qb: function (a, b, c) { for (var d = 0, f = a.length; d < f; d++)
                        if (b.call(c, a[d], d))
                            return a[d]; return null; }, ua: function (m, b) { var c = a.a.m(m, b); 0 < c ? m.splice(c, 1) : 0 === c && m.shift(); }, rb: function (m) { m = m || []; for (var b = [], c = 0, d = m.length; c < d; c++)
                        0 > a.a.m(b, m[c]) && b.push(m[c]); return b; }, Da: function (a, b) { a = a || []; for (var c = [], d = 0, f = a.length; d < f; d++)
                        c.push(b(a[d], d)); return c; }, ta: function (a, b) { a = a || []; for (var c = [], d = 0, f = a.length; d < f; d++)
                        b(a[d], d) && c.push(a[d]); return c; }, ga: function (a, b) {
                        if (b instanceof
                            Array)
                            a.push.apply(a, b);
                        else
                            for (var c = 0, d = b.length; c < d; c++)
                                a.push(b[c]);
                        return a;
                    }, ea: function (b, c, d) { var f = a.a.m(a.a.Xa(b), c); 0 > f ? d && b.push(c) : d || b.splice(f, 1); }, xa: e, extend: d, za: c, Aa: e ? c : d, G: b, na: function (a, b) { if (!a)
                        return a; var c = {}, d; for (d in a)
                        a.hasOwnProperty(d) && (c[d] = b(a[d], d, a)); return c; }, Ka: function (b) { for (; b.firstChild;)
                        a.removeNode(b.firstChild); }, oc: function (b) { b = a.a.S(b); for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++)
                        c.appendChild(a.R(b[d])); return c; }, ia: function (b, c) {
                        for (var d = 0, f = b.length, e = []; d < f; d++) {
                            var k = b[d].cloneNode(!0);
                            e.push(c ? a.R(k) : k);
                        }
                        return e;
                    }, T: function (b, c) { a.a.Ka(b); if (c)
                        for (var d = 0, f = c.length; d < f; d++)
                            b.appendChild(c[d]); }, Lb: function (b, c) { var d = b.nodeType ? [b] : b; if (0 < d.length) {
                        for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++)
                            e.insertBefore(c[k], f);
                        k = 0;
                        for (g = d.length; k < g; k++)
                            a.removeNode(d[k]);
                    } }, ka: function (a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)
                                a.shift();
                            if (1 < a.length) {
                                var c = a[0], d = a[a.length - 1];
                                for (a.length =
                                    0; c !== d;)
                                    if (a.push(c), c = c.nextSibling, !c)
                                        return;
                                a.push(d);
                            }
                        }
                        return a;
                    }, Nb: function (a, b) { 7 > f ? a.setAttribute("selected", b) : a.selected = b; }, cb: function (a) { return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); }, vc: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b; }, cc: function (a, b) {
                        if (a === b)
                            return !0;
                        if (11 === a.nodeType)
                            return !1;
                        if (b.contains)
                            return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition)
                            return 16 == (b.compareDocumentPosition(a) &
                                16);
                        for (; a && a != b;)
                            a = a.parentNode;
                        return !!a;
                    }, Ja: function (b) { return a.a.cc(b, b.ownerDocument.documentElement); }, ob: function (b) { return !!a.a.qb(b, a.a.Ja); }, t: function (a) { return a && a.tagName && a.tagName.toLowerCase(); }, n: function (b, c, d) {
                        var e = f && k[c];
                        if (!e && w)
                            w(b).bind(c, d);
                        else if (e || "function" != typeof b.addEventListener)
                            if ("undefined" != typeof b.attachEvent) {
                                var g = function (a) { d.call(b, a); }, h = "on" + c;
                                b.attachEvent(h, g);
                                a.a.w.da(b, function () { b.detachEvent(h, g); });
                            }
                            else
                                throw Error("Browser doesn't support addEventListener or attachEvent");
                        else
                            b.addEventListener(c, d, !1);
                    }, oa: function (b, c) {
                        if (!b || !b.nodeType)
                            throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (w && !d)
                            w(b).trigger(c);
                        else if ("function" == typeof v.createEvent)
                            if ("function" == typeof b.dispatchEvent)
                                d = v.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
                            else
                                throw Error("The supplied element doesn't support dispatchEvent");
                        else if (d && b.click)
                            b.click();
                        else if ("undefined" != typeof b.fireEvent)
                            b.fireEvent("on" + c);
                        else
                            throw Error("Browser doesn't support triggering events");
                    }, c: function (b) { return a.C(b) ? b() : b; }, Xa: function (b) { return a.C(b) ? b.v() : b; }, Ba: function (b, c, d) { if (c) {
                        var f = /\S+/g, e = b.className.match(f) || [];
                        a.a.u(c.match(f), function (b) { a.a.ea(e, b, d); });
                        b.className = e.join(" ");
                    } }, bb: function (b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p)
                            d = "";
                        var f = a.f.firstChild(b);
                        !f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) :
                            f.data = d;
                        a.a.fc(b);
                    }, Mb: function (a, b) { a.name = b; if (7 >= f)
                        try {
                            a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1);
                        }
                        catch (c) { } }, fc: function (a) { 9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)); }, dc: function (a) { if (f) {
                        var b = a.style.width;
                        a.style.width = 0;
                        a.style.width = b;
                    } }, sc: function (b, c) { b = a.a.c(b); c = a.a.c(c); for (var d = [], f = b; f <= c; f++)
                        d.push(f); return d; }, S: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)
                        b.push(a[c]); return b; }, yc: 6 === f, zc: 7 === f, L: f, xb: function (b, c) {
                        for (var d = a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function (a) { return a.name === c; } : function (a) { return c.test(a.name); }, e = [], k = d.length - 1; 0 <= k; k--)
                            f(d[k]) && e.push(d[k]);
                        return e;
                    }, pc: function (b) { return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : (new Function("return " + b))() : null; }, eb: function (b, c, d) {
                        if (!D || !D.stringify)
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return D.stringify(a.a.c(b), c, d);
                    }, qc: function (c, d, f) {
                        f = f || {};
                        var e = f.params || {}, k = f.includeFields || this.vb, g = c;
                        if ("object" == typeof c && "form" === a.a.t(c))
                            for (var g = c.action, h = k.length - 1; 0 <= h; h--)
                                for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--)
                                    e[r[E].name] = r[E].value;
                        d = a.a.c(d);
                        var y = v.createElement("form");
                        y.style.display = "none";
                        y.action = g;
                        y.method = "post";
                        for (var p in d)
                            c = v.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.eb(a.a.c(d[p])), y.appendChild(c);
                        b(e, function (a, b) {
                            var c = v.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            y.appendChild(c);
                        });
                        v.body.appendChild(y);
                        f.submitter ? f.submitter(y) : y.submit();
                        setTimeout(function () { y.parentNode.removeChild(y); }, 0);
                    } };
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.u);
            a.b("utils.arrayFirst", a.a.qb);
            a.b("utils.arrayFilter", a.a.ta);
            a.b("utils.arrayGetDistinctValues", a.a.rb);
            a.b("utils.arrayIndexOf", a.a.m);
            a.b("utils.arrayMap", a.a.Da);
            a.b("utils.arrayPushAll", a.a.ga);
            a.b("utils.arrayRemoveItem", a.a.ua);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.vb);
            a.b("utils.getFormFields", a.a.xb);
            a.b("utils.peekObservable", a.a.Xa);
            a.b("utils.postJson", a.a.qc);
            a.b("utils.parseJson", a.a.pc);
            a.b("utils.registerEventHandler", a.a.n);
            a.b("utils.stringifyJson", a.a.eb);
            a.b("utils.range", a.a.sc);
            a.b("utils.toggleDomNodeCssClass", a.a.Ba);
            a.b("utils.triggerEvent", a.a.oa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.G);
            a.b("utils.addOrRemoveItem", a.a.ea);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (a) {
                var d = this, c = Array.prototype.slice.call(arguments);
                a = c.shift();
                return function () { return d.apply(a, c.concat(Array.prototype.slice.call(arguments))); };
            });
            a.a.e = new function () {
                function a(b, h) { var k = b[c]; if (!k || "null" === k || !e[k]) {
                    if (!h)
                        return p;
                    k = b[c] = "ko" + d++;
                    e[k] = {};
                } return e[k]; }
                var d = 0, c = "__ko__" + (new Date).getTime(), e = {};
                return { get: function (c, d) { var e = a(c, !1); return e === p ? p : e[d]; }, set: function (c, d, e) { if (e !== p || a(c, !1) !== p)
                        a(c, !0)[d] = e; }, clear: function (a) { var b = a[c]; return b ? (delete e[b], a[c] = null, !0) : !1; }, F: function () {
                        return d++ +
                            c;
                    } };
            };
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.w = new function () {
                function b(b, d) { var f = a.a.e.get(b, c); f === p && d && (f = [], a.a.e.set(b, c, f)); return f; }
                function d(c) { var e = b(c, !1); if (e)
                    for (var e = e.slice(0), f = 0; f < e.length; f++)
                        e[f](c); a.a.e.clear(c); a.a.w.cleanExternalData(c); if (g[c.nodeType])
                    for (e = c.firstChild; c = e;)
                        e = c.nextSibling, 8 === c.nodeType && d(c); }
                var c = a.a.e.F(), e = { 1: !0, 8: !0, 9: !0 }, g = { 1: !0, 9: !0 };
                return { da: function (a, c) {
                        if ("function" != typeof c)
                            throw Error("Callback must be a function");
                        b(a, !0).push(c);
                    }, Kb: function (d, e) { var f = b(d, !1); f && (a.a.ua(f, e), 0 == f.length && a.a.e.set(d, c, p)); }, R: function (b) { if (e[b.nodeType] && (d(b), g[b.nodeType])) {
                        var c = [];
                        a.a.ga(c, b.getElementsByTagName("*"));
                        for (var f = 0, m = c.length; f < m; f++)
                            d(c[f]);
                    } return b; }, removeNode: function (b) { a.R(b); b.parentNode && b.parentNode.removeChild(b); }, cleanExternalData: function (a) { w && "function" == typeof w.cleanData && w.cleanData([a]); } };
            };
            a.R = a.a.w.R;
            a.removeNode = a.a.w.removeNode;
            a.b("cleanNode", a.R);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.w);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);
            (function () {
                a.a.ba = function (b) {
                    var d;
                    if (w)
                        if (w.parseHTML)
                            d = w.parseHTML(b) || [];
                        else {
                            if ((d = w.clean([b])) && d[0]) {
                                for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType;)
                                    b = b.parentNode;
                                b.parentNode && b.parentNode.removeChild(b);
                            }
                        }
                    else {
                        var c = a.a.cb(b).toLowerCase();
                        d = v.createElement("div");
                        c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>",
                            "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + c[1] + b + c[2] + "</div>";
                        for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--;)
                            d = d.lastChild;
                        d = a.a.S(d.lastChild.childNodes);
                    }
                    return d;
                };
                a.a.$a = function (b, d) { a.a.Ka(b); d = a.a.c(d); if (null !== d && d !== p)
                    if ("string" != typeof d && (d = d.toString()), w)
                        w(b).html(d);
                    else
                        for (var c = a.a.ba(d), e = 0; e < c.length; e++)
                            b.appendChild(c[e]); };
            })();
            a.b("utils.parseHtmlFragment", a.a.ba);
            a.b("utils.setHtml", a.a.$a);
            a.D = function () {
                function b(c, d) { if (c)
                    if (8 == c.nodeType) {
                        var g = a.D.Gb(c.nodeValue);
                        null != g && d.push({ bc: c, mc: g });
                    }
                    else if (1 == c.nodeType)
                        for (var g = 0, h = c.childNodes, k = h.length; g < k; g++)
                            b(h[g], d); }
                var d = {};
                return { Ua: function (a) {
                        if ("function" != typeof a)
                            throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "\x3c!--[ko_memo:" +
                            b + "]--\x3e";
                    }, Rb: function (a, b) { var g = d[a]; if (g === p)
                        throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try {
                        return g.apply(null, b || []), !0;
                    }
                    finally {
                        delete d[a];
                    } }, Sb: function (c, d) { var g = []; b(c, g); for (var h = 0, k = g.length; h < k; h++) {
                        var f = g[h].bc, m = [f];
                        d && a.a.ga(m, d);
                        a.D.Rb(g[h].mc, m);
                        f.nodeValue = "";
                        f.parentNode && f.parentNode.removeChild(f);
                    } }, Gb: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null; } };
            }();
            a.b("memoization", a.D);
            a.b("memoization.memoize", a.D.Ua);
            a.b("memoization.unmemoize", a.D.Rb);
            a.b("memoization.parseMemoText", a.D.Gb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.D.Sb);
            a.La = { throttle: function (b, d) { b.throttleEvaluation = d; var c = null; return a.j({ read: b, write: function (a) { clearTimeout(c); c = setTimeout(function () { b(a); }, d); } }); }, rateLimit: function (a, d) { var c, e, g; "number" == typeof d ? c = d : (c = d.timeout, e = d.method); g = "notifyWhenChangesStop" == e ? T : S; a.Ta(function (a) { return g(a, c); }); }, notify: function (a, d) { a.equalityComparer = "always" == d ? null : H; } };
            var R = { undefined: 1, "boolean": 1, number: 1, string: 1 };
            a.b("extenders", a.La);
            a.Pb = function (b, d, c) { this.target = b; this.wa = d; this.ac = c; this.Cb = !1; a.A(this, "dispose", this.K); };
            a.Pb.prototype.K = function () { this.Cb = !0; this.ac(); };
            a.P = function () { a.a.Aa(this, a.P.fn); this.M = {}; };
            var G = "change", A = { U: function (b, d, c) { var e = this; c = c || G; var g = new a.Pb(e, d ? b.bind(d) : b, function () { a.a.ua(e.M[c], g); e.nb && e.nb(); }); e.va && e.va(c); e.M[c] || (e.M[c] = []); e.M[c].push(g); return g; }, notifySubscribers: function (b, d) {
                    d = d || G;
                    if (this.Ab(d))
                        try {
                            a.k.Ea();
                            for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e)
                                g.Cb || g.wa(b);
                        }
                        finally {
                            a.k.end();
                        }
                }, Ta: function (b) { var d = this, c = a.C(d), e, g, h; d.qa || (d.qa = d.notifySubscribers, d.notifySubscribers = function (a, b) { b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a); }); var k = b(function () { c && h === d && (h = d()); e = !1; d.Pa(g, h) && d.qa(g = h); }); d.lb = function (a) { e = !0; h = a; k(); }; d.kb = function (a) { e || (g = a, d.qa(a, "beforeChange")); }; }, Ab: function (a) { return this.M[a] && this.M[a].length; }, yb: function () {
                    var b = 0;
                    a.a.G(this.M, function (a, c) { b += c.length; });
                    return b;
                }, Pa: function (a, d) { return !this.equalityComparer || !this.equalityComparer(a, d); }, extend: function (b) { var d = this; b && a.a.G(b, function (b, e) { var g = a.La[b]; "function" == typeof g && (d = g(d, e) || d); }); return d; } };
            a.A(A, "subscribe", A.U);
            a.A(A, "extend", A.extend);
            a.A(A, "getSubscriptionsCount", A.yb);
            a.a.xa && a.a.za(A, Function.prototype);
            a.P.fn = A;
            a.Db = function (a) { return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers; };
            a.b("subscribable", a.P);
            a.b("isSubscribable", a.Db);
            a.Y = a.k = function () {
                function b(a) {
                    c.push(e);
                    e = a;
                }
                function d() { e = c.pop(); }
                var c = [], e, g = 0;
                return { Ea: b, end: d, Jb: function (b) { if (e) {
                        if (!a.Db(b))
                            throw Error("Only subscribable things can act as dependencies");
                        e.wa(b, b.Vb || (b.Vb = ++g));
                    } }, B: function (a, c, f) { try {
                        return b(), a.apply(c, f || []);
                    }
                    finally {
                        d();
                    } }, la: function () { if (e)
                        return e.s.la(); }, ma: function () { if (e)
                        return e.ma; } };
            }();
            a.b("computedContext", a.Y);
            a.b("computedContext.getDependenciesCount", a.Y.la);
            a.b("computedContext.isInitial", a.Y.ma);
            a.b("computedContext.isSleeping", a.Y.Ac);
            a.p = function (b) {
                function d() {
                    if (0 <
                        arguments.length)
                        return d.Pa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this;
                    a.k.Jb(d);
                    return c;
                }
                var c = b;
                a.P.call(d);
                a.a.Aa(d, a.p.fn);
                d.v = function () { return c; };
                d.W = function () { d.notifySubscribers(c); };
                d.X = function () { d.notifySubscribers(c, "beforeChange"); };
                a.A(d, "peek", d.v);
                a.A(d, "valueHasMutated", d.W);
                a.A(d, "valueWillMutate", d.X);
                return d;
            };
            a.p.fn = { equalityComparer: H };
            var F = a.p.rc = "__ko_proto__";
            a.p.fn[F] = a.p;
            a.a.xa && a.a.za(a.p.fn, a.P.fn);
            a.Ma = function (b, d) {
                return null === b || b === p || b[F] === p ? !1 : b[F] ===
                    d ? !0 : a.Ma(b[F], d);
            };
            a.C = function (b) { return a.Ma(b, a.p); };
            a.Ra = function (b) { return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1; };
            a.b("observable", a.p);
            a.b("isObservable", a.C);
            a.b("isWriteableObservable", a.Ra);
            a.b("isWritableObservable", a.Ra);
            a.aa = function (b) { b = b || []; if ("object" != typeof b || !("length" in b))
                throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.p(b); a.a.Aa(b, a.aa.fn); return b.extend({ trackArrayChanges: !0 }); };
            a.aa.fn = { remove: function (b) { for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function (a) { return a === b; } : b, g = 0; g < d.length; g++) {
                    var h = d[g];
                    e(h) && (0 === c.length && this.X(), c.push(h), d.splice(g, 1), g--);
                } c.length && this.W(); return c; }, removeAll: function (b) { if (b === p) {
                    var d = this.v(), c = d.slice(0);
                    this.X();
                    d.splice(0, d.length);
                    this.W();
                    return c;
                } return b ? this.remove(function (c) { return 0 <= a.a.m(b, c); }) : []; }, destroy: function (b) {
                    var d = this.v(), c = "function" != typeof b || a.C(b) ? function (a) { return a === b; } : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--)
                        c(d[e]) && (d[e]._destroy = !0);
                    this.W();
                }, destroyAll: function (b) { return b === p ? this.destroy(function () { return !0; }) : b ? this.destroy(function (d) { return 0 <= a.a.m(b, d); }) : []; }, indexOf: function (b) { var d = this(); return a.a.m(d, b); }, replace: function (a, d) { var c = this.indexOf(a); 0 <= c && (this.X(), this.v()[c] = d, this.W()); } };
            a.a.u("pop push reverse shift sort splice unshift".split(" "), function (b) {
                a.aa.fn[b] = function () {
                    var a = this.v();
                    this.X();
                    this.sb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a;
                };
            });
            a.a.u(["slice"], function (b) { a.aa.fn[b] = function () { var a = this(); return a[b].apply(a, arguments); }; });
            a.a.xa && a.a.za(a.aa.fn, a.p.fn);
            a.b("observableArray", a.aa);
            var J = "arrayChange";
            a.La.trackArrayChanges = function (b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var d = b.notifySubscribers;
                        b.notifySubscribers = function (a, b) { b && b !== G || ++g; return d.apply(this, arguments); };
                        var f = [].concat(b.v() || []);
                        e = null;
                        b.U(function (c) {
                            c = [].concat(c || []);
                            if (b.Ab(J)) {
                                var d;
                                if (!e || 1 < g)
                                    e = a.a.Fa(f, c, { sparse: !0 });
                                d = e;
                                d.length && b.notifySubscribers(d, J);
                            }
                            f = c;
                            e = null;
                            g = 0;
                        });
                    }
                }
                if (!b.sb) {
                    var c = !1, e = null, g = 0, h = b.U;
                    b.U = b.subscribe = function (a, b, c) { c === J && d(); return h.apply(this, arguments); };
                    b.sb = function (b, d, m) {
                        function l(a, b, c) { return q[q.length] = { status: a, value: b, index: c }; }
                        if (c && !g) {
                            var q = [], h = b.length, t = m.length, z = 0;
                            switch (d) {
                                case "push": z = h;
                                case "unshift":
                                    for (d = 0; d < t; d++)
                                        l("added", m[d], z + d);
                                    break;
                                case "pop": z = h - 1;
                                case "shift":
                                    h && l("deleted", b[z], z);
                                    break;
                                case "splice":
                                    d = Math.min(Math.max(0, 0 > m[0] ? h + m[0] : m[0]), h);
                                    for (var h = 1 === t ? h : Math.min(d + (m[1] || 0), h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d, ++E)
                                        d < h && r.push(l("deleted", b[d], d)), d < t && u.push(l("added", m[E], d));
                                    a.a.wb(r, u);
                                    break;
                                default: return;
                            }
                            e = q;
                        }
                    };
                }
            };
            a.s = a.j = function (b, d, c) {
                function e() { a.a.G(v, function (a, b) { b.K(); }); v = {}; }
                function g() { e(); C = 0; u = !0; n = !1; }
                function h() { var a = f.throttleEvaluation; a && 0 <= a ? (clearTimeout(P), P = setTimeout(k, a)) : f.ib ? f.ib() : k(); }
                function k(b) {
                    if (t) {
                        if (E)
                            throw Error("A 'pure' computed must not be called recursively");
                    }
                    else if (!u) {
                        if (w && w()) {
                            if (!z) {
                                s();
                                return;
                            }
                        }
                        else
                            z = !1;
                        t = !0;
                        if (y)
                            try {
                                var c = {};
                                a.k.Ea({ wa: function (a, b) { c[b] || (c[b] = 1, ++C); }, s: f, ma: p });
                                C = 0;
                                q = r.call(d);
                            }
                            finally {
                                a.k.end(), t = !1;
                            }
                        else
                            try {
                                var e = v, m = C;
                                a.k.Ea({ wa: function (a, b) { u || (m && e[b] ? (v[b] = e[b], ++C, delete e[b], --m) : v[b] || (v[b] = a.U(h), ++C)); }, s: f, ma: E ? p : !C });
                                v = {};
                                C = 0;
                                try {
                                    var l = d ? r.call(d) : r();
                                }
                                finally {
                                    a.k.end(), m && a.a.G(e, function (a, b) { b.K(); }), n = !1;
                                }
                                f.Pa(q, l) && (f.notifySubscribers(q, "beforeChange"), q = l, !0 !== b && f.notifySubscribers(q));
                            }
                            finally {
                                t = !1;
                            }
                        C || s();
                    }
                }
                function f() {
                    if (0 < arguments.length) {
                        if ("function" === typeof O)
                            O.apply(d, arguments);
                        else
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this;
                    }
                    a.k.Jb(f);
                    n && k(!0);
                    return q;
                }
                function m() { n && !C && k(!0); return q; }
                function l() { return n || 0 < C; }
                var q, n = !0, t = !1, z = !1, u = !1, r = b, E = !1, y = !1;
                r && "object" == typeof r ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read));
                if ("function" != typeof r)
                    throw Error("Pass a function that returns the value of the ko.computed");
                var O = c.write, x = c.disposeWhenNodeIsRemoved ||
                    c.o || null, B = c.disposeWhen || c.Ia, w = B, s = g, v = {}, C = 0, P = null;
                d || (d = c.owner);
                a.P.call(f);
                a.a.Aa(f, a.j.fn);
                f.v = m;
                f.la = function () { return C; };
                f.hc = "function" === typeof c.write;
                f.K = function () { s(); };
                f.Z = l;
                var A = f.Ta;
                f.Ta = function (a) { A.call(f, a); f.ib = function () { f.kb(q); n = !0; f.lb(f); }; };
                c.pure ? (y = E = !0, f.va = function () { y && (y = !1, k(!0)); }, f.nb = function () { f.yb() || (e(), y = n = !0); }) : c.deferEvaluation && (f.va = function () { m(); delete f.va; });
                a.A(f, "peek", f.v);
                a.A(f, "dispose", f.K);
                a.A(f, "isActive", f.Z);
                a.A(f, "getDependenciesCount", f.la);
                x && (z = !0, x.nodeType && (w = function () { return !a.a.Ja(x) || B && B(); }));
                y || c.deferEvaluation || k();
                x && l() && x.nodeType && (s = function () { a.a.w.Kb(x, s); g(); }, a.a.w.da(x, s));
                return f;
            };
            a.jc = function (b) { return a.Ma(b, a.j); };
            A = a.p.rc;
            a.j[A] = a.p;
            a.j.fn = { equalityComparer: H };
            a.j.fn[A] = a.j;
            a.a.xa && a.a.za(a.j.fn, a.P.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.jc);
            a.Ib = function (b, d) { if ("function" === typeof b)
                return a.s(b, d, { pure: !0 }); b = a.a.extend({}, b); b.pure = !0; return a.s(b, d); };
            a.b("pureComputed", a.Ib);
            (function () {
                function b(a, g, h) { h = h || new c; a = g(a); if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean)
                    return a; var k = a instanceof Array ? [] : {}; h.save(a, k); d(a, function (c) { var d = g(a[c]); switch (typeof d) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "function":
                        k[c] = d;
                        break;
                    case "object":
                    case "undefined":
                        var l = h.get(d);
                        k[c] = l !== p ? l : b(d, g, h);
                } }); return k; }
                function d(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++)
                            b(c);
                        "function" ==
                            typeof a.toJSON && b("toJSON");
                    }
                    else
                        for (c in a)
                            b(c);
                }
                function c() { this.keys = []; this.hb = []; }
                a.Qb = function (c) { if (0 == arguments.length)
                    throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.C(b) && 10 > c; c++)
                    b = b(); return b; }); };
                a.toJSON = function (b, c, d) { b = a.Qb(b); return a.a.eb(b, c, d); };
                c.prototype = { save: function (b, c) { var d = a.a.m(this.keys, b); 0 <= d ? this.hb[d] = c : (this.keys.push(b), this.hb.push(c)); }, get: function (b) { b = a.a.m(this.keys, b); return 0 <= b ? this.hb[b] : p; } };
            })();
            a.b("toJS", a.Qb);
            a.b("toJSON", a.toJSON);
            (function () {
                a.i = { q: function (b) { switch (a.a.t(b)) {
                        case "option": return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select": return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;
                        default: return b.value;
                    } }, ca: function (b, d, c) {
                        switch (a.a.t(b)) {
                            case "option":
                                switch (typeof d) {
                                    case "string":
                                        a.a.e.set(b, a.d.options.Va, p);
                                        "__ko__hasDomDataOptionValue__" in
                                            b && delete b.__ko__hasDomDataOptionValue__;
                                        b.value = d;
                                        break;
                                    default: a.a.e.set(b, a.d.options.Va, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : "";
                                }
                                break;
                            case "select":
                                if ("" === d || null === d)
                                    d = p;
                                for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g)
                                    if (k = a.i.q(b.options[g]), k == d || "" == k && d === p) {
                                        e = g;
                                        break;
                                    }
                                if (c || 0 <= e || d === p && 1 < b.size)
                                    b.selectedIndex = e;
                                break;
                            default:
                                if (null === d || d === p)
                                    d = "";
                                b.value = d;
                        }
                    } };
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.q);
            a.b("selectExtensions.writeValue", a.i.ca);
            a.h = function () {
                function b(b) {
                    b = a.a.cb(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), k, n, t = 0;
                    if (d) {
                        d.push(",");
                        for (var z = 0, u; u = d[z]; ++z) {
                            var r = u.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= t) {
                                    k && c.push(n ? { key: k, value: n.join("") } : { unknown: k });
                                    k = n = t = 0;
                                    continue;
                                }
                            }
                            else if (58 === r) {
                                if (!n)
                                    continue;
                            }
                            else if (47 === r && z && 1 < u.length)
                                (r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1), d = b.match(e), d.push(","), z = -1, u = "/");
                            else if (40 === r || 123 === r || 91 === r)
                                ++t;
                            else if (41 === r || 125 === r || 93 === r)
                                --t;
                            else if (!k && !n) {
                                k = 34 === r || 39 === r ? u.slice(1, -1) : u;
                                continue;
                            }
                            n ? n.push(u) : n = [u];
                        }
                    }
                    return c;
                }
                var d = ["true", "false", "null", "undefined"], c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), g = /[\])"'A-Za-z0-9_$]+$/, h = { "in": 1, "return": 1, "typeof": 1 }, k = {};
                return { ha: [], V: k, Wa: b, ya: function (f, m) {
                        function e(b, m) {
                            var f;
                            if (!z) {
                                var u = a.getBindingHandler(b);
                                if (u && u.preprocess &&
                                    !(m = u.preprocess(m, b, e)))
                                    return;
                                if (u = k[b])
                                    f = m, 0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c), f = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f), u = f;
                                u && h.push("'" + b + "':function(_z){" + f + "=_z}");
                            }
                            t && (m = "function(){return " + m + " }");
                            g.push("'" + b + "':" + m);
                        }
                        m = m || {};
                        var g = [], h = [], t = m.valueAccessors, z = m.bindingParams, u = "string" === typeof f ? b(f) : f;
                        a.a.u(u, function (a) { e(a.key || a.unknown, a.value); });
                        h.length && e("_ko_property_writers", "{" + h.join(",") + " }");
                        return g.join(",");
                    }, lc: function (a, b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c].key ==
                                b)
                                return !0;
                        return !1;
                    }, pa: function (b, c, d, e, k) { if (b && a.C(b))
                        !a.Ra(b) || k && b.v() === e || b(e);
                    else if ((b = c.get("_ko_property_writers")) && b[d])
                        b[d](e); } };
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ha);
            a.b("expressionRewriting.parseObjectLiteral", a.h.Wa);
            a.b("expressionRewriting.preProcessBindings", a.h.ya);
            a.b("expressionRewriting._twoWayBindings", a.h.V);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.ya);
            (function () {
                function b(a) {
                    return 8 ==
                        a.nodeType && h.test(g ? a.text : a.nodeValue);
                }
                function d(a) { return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue); }
                function c(a, c) { for (var f = a, e = 1, k = []; f = f.nextSibling;) {
                    if (d(f) && (e--, 0 === e))
                        return k;
                    k.push(f);
                    b(f) && e++;
                } if (!c)
                    throw Error("Cannot find closing comment tag to match: " + a.nodeValue); return null; }
                function e(a, b) { var d = c(a, b); return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null; }
                var g = v && "\x3c!--test--\x3e" === v.createComment("test").text, h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, f = { ul: !0, ol: !0 };
                a.f = { Q: {}, childNodes: function (a) { return b(a) ? c(a) : a.childNodes; }, ja: function (c) { if (b(c)) {
                        c = a.f.childNodes(c);
                        for (var d = 0, f = c.length; d < f; d++)
                            a.removeNode(c[d]);
                    }
                    else
                        a.a.Ka(c); }, T: function (c, d) { if (b(c)) {
                        a.f.ja(c);
                        for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++)
                            f.parentNode.insertBefore(d[e], f);
                    }
                    else
                        a.a.T(c, d); }, Hb: function (a, c) { b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c); }, Bb: function (c, d, f) { f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d); }, firstChild: function (a) { return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild; }, nextSibling: function (a) { b(a) && (a = e(a)); return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling; }, gc: b, xc: function (a) { return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null; }, Fb: function (c) {
                        if (f[a.a.t(c)]) {
                            var k = c.firstChild;
                            if (k) {
                                do
                                    if (1 === k.nodeType) {
                                        var g;
                                        g = k.firstChild;
                                        var h = null;
                                        if (g) {
                                            do
                                                if (h)
                                                    h.push(g);
                                                else if (b(g)) {
                                                    var t = e(g, !0);
                                                    t ? g = t : h = [g];
                                                }
                                                else
                                                    d(g) && (h = [g]);
                                            while (g = g.nextSibling);
                                        }
                                        if (g = h)
                                            for (h = k.nextSibling, t = 0; t < g.length; t++)
                                                h ? c.insertBefore(g[t], h) : c.appendChild(g[t]);
                                    }
                                while (k = k.nextSibling);
                            }
                        }
                    } };
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Q);
            a.b("virtualElements.emptyNode", a.f.ja);
            a.b("virtualElements.insertAfter", a.f.Bb);
            a.b("virtualElements.prepend", a.f.Hb);
            a.b("virtualElements.setDomNodeChildren", a.f.T);
            (function () {
                a.J = function () {
                    this.Yb =
                        {};
                };
                a.a.extend(a.J.prototype, { nodeHasBindings: function (b) { switch (b.nodeType) {
                        case 1: return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                        case 8: return a.f.gc(b);
                        default: return !1;
                    } }, getBindings: function (b, d) { var c = this.getBindingsString(b, d), c = c ? this.parseBindingsString(c, d, b) : null; return a.g.mb(c, b, d, !1); }, getBindingAccessors: function (b, d) { var c = this.getBindingsString(b, d), c = c ? this.parseBindingsString(c, d, b, { valueAccessors: !0 }) : null; return a.g.mb(c, b, d, !0); }, getBindingsString: function (b) {
                        switch (b.nodeType) {
                            case 1: return b.getAttribute("data-bind");
                            case 8: return a.f.xc(b);
                            default: return null;
                        }
                    }, parseBindingsString: function (b, d, c, e) { try {
                        var g = this.Yb, h = b + (e && e.valueAccessors || ""), k;
                        if (!(k = g[h])) {
                            var f, m = "with($context){with($data||{}){return{" + a.h.ya(b, e) + "}}}";
                            f = new Function("$context", "$element", m);
                            k = g[h] = f;
                        }
                        return k(d, c);
                    }
                    catch (l) {
                        throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
                    } } });
                a.J.instance = new a.J;
            })();
            a.b("bindingProvider", a.J);
            (function () {
                function b(a) { return function () { return a; }; }
                function d(a) { return a(); }
                function c(b) { return a.a.na(a.k.B(b), function (a, c) { return function () { return b()[c]; }; }); }
                function e(a, b) { return c(this.getBindings.bind(this, a, b)); }
                function g(b, c, d) { var f, e = a.f.firstChild(c), k = a.J.instance, g = k.preprocessNode; if (g) {
                    for (; f = e;)
                        e = a.f.nextSibling(f), g.call(k, f);
                    e = a.f.firstChild(c);
                } for (; f = e;)
                    e = a.f.nextSibling(f), h(b, f, d); }
                function h(b, c, d) { var e = !0, k = 1 === c.nodeType; k && a.f.Fb(c); if (k && d || a.J.instance.nodeHasBindings(c))
                    e = f(c, null, b, d).shouldBindDescendants; e && !l[a.a.t(c)] && g(b, c, !k); }
                function k(b) {
                    var c = [], d = {}, f = [];
                    a.a.G(b, function y(e) { if (!d[e]) {
                        var k = a.getBindingHandler(e);
                        k && (k.after && (f.push(e), a.a.u(k.after, function (c) { if (b[c]) {
                            if (-1 !== a.a.m(f, c))
                                throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));
                            y(c);
                        } }), f.length--), c.push({ key: e, zb: k }));
                        d[e] = !0;
                    } });
                    return c;
                }
                function f(b, c, f, g) {
                    var m = a.a.e.get(b, q);
                    if (!c) {
                        if (m)
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.e.set(b, q, !0);
                    }
                    !m && g && a.Ob(b, f);
                    var l;
                    if (c && "function" !==
                        typeof c)
                        l = c;
                    else {
                        var h = a.J.instance, n = h.getBindingAccessors || e, s = a.j(function () { (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I(); return l; }, null, { o: b });
                        l && s.Z() || (s = null);
                    }
                    var v;
                    if (l) {
                        var w = s ? function (a) { return function () { return d(s()[a]); }; } : function (a) { return l[a]; }, A = function () { return a.a.na(s ? s() : l, d); };
                        A.get = function (a) { return l[a] && d(w(a)); };
                        A.has = function (a) { return a in l; };
                        g = k(l);
                        a.a.u(g, function (c) {
                            var d = c.zb.init, e = c.zb.update, k = c.key;
                            if (8 === b.nodeType && !a.f.Q[k])
                                throw Error("The binding '" + k + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.B(function () { var a = d(b, w(k), A, f.$data, f); if (a && a.controlsDescendantBindings) {
                                    if (v !== p)
                                        throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    v = k;
                                } }), "function" == typeof e && a.j(function () { e(b, w(k), A, f.$data, f); }, null, { o: b });
                            }
                            catch (g) {
                                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message, g;
                            }
                        });
                    }
                    return { shouldBindDescendants: v === p };
                }
                function m(b) { return b && b instanceof a.N ? b : new a.N(b); }
                a.d = {};
                var l = { script: !0 };
                a.getBindingHandler = function (b) { return a.d[b]; };
                a.N = function (b, c, d, f) {
                    var e = this, k = "function" == typeof b && !a.C(b), g, m = a.j(function () { var g = k ? b() : b, l = a.a.c(g); c ? (c.I && c.I(), a.a.extend(e, c), m && (e.I = m)) : (e.$parents = [], e.$root = l, e.ko = a); e.$rawData = g; e.$data = l; d && (e[d] = l); f && f(e, c, l); return e.$data; }, null, { Ia: function () { return g && !a.a.ob(g); }, o: !0 });
                    m.Z() && (e.I = m, m.equalityComparer = null, g = [], m.Tb = function (b) {
                        g.push(b);
                        a.a.w.da(b, function (b) { a.a.ua(g, b); g.length || (m.K(), e.I = m = p); });
                    });
                };
                a.N.prototype.createChildContext = function (b, c, d) { return new a.N(b, this, c, function (a, b) { a.$parentContext = b; a.$parent = b.$data; a.$parents = (b.$parents || []).slice(0); a.$parents.unshift(a.$parent); d && d(a); }); };
                a.N.prototype.extend = function (b) { return new a.N(this.I || this.$data, this, null, function (c, d) { c.$rawData = d.$rawData; a.a.extend(c, "function" == typeof b ? b() : b); }); };
                var q = a.a.e.F(), n = a.a.e.F();
                a.Ob = function (b, c) {
                    if (2 == arguments.length)
                        a.a.e.set(b, n, c),
                            c.I && c.I.Tb(b);
                    else
                        return a.a.e.get(b, n);
                };
                a.ra = function (b, c, d) { 1 === b.nodeType && a.f.Fb(b); return f(b, c, m(d), !0); };
                a.Wb = function (d, f, e) { e = m(e); return a.ra(d, "function" === typeof f ? c(f.bind(null, e, d)) : a.a.na(f, b), e); };
                a.Ca = function (a, b) { 1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0); };
                a.pb = function (a, b) {
                    !w && s.jQuery && (w = s.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType)
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || s.document.body;
                    h(m(a), b, !0);
                };
                a.Ha = function (b) { switch (b.nodeType) {
                    case 1:
                    case 8:
                        var c = a.Ob(b);
                        if (c)
                            return c;
                        if (b.parentNode)
                            return a.Ha(b.parentNode);
                } return p; };
                a.$b = function (b) { return (b = a.Ha(b)) ? b.$data : p; };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.pb);
                a.b("applyBindingsToDescendants", a.Ca);
                a.b("applyBindingAccessorsToNode", a.ra);
                a.b("applyBindingsToNode", a.Wb);
                a.b("contextFor", a.Ha);
                a.b("dataFor", a.$b);
            })();
            (function (b) {
                function d(d, f) {
                    var e = g.hasOwnProperty(d) ? g[d] : b, l;
                    e || (e = g[d] = new a.P, c(d, function (a) {
                        h[d] = a;
                        delete g[d];
                        l ? e.notifySubscribers(a) : setTimeout(function () { e.notifySubscribers(a); }, 0);
                    }), l = !0);
                    e.U(f);
                }
                function c(a, b) { e("getConfig", [a], function (c) { c ? e("loadComponent", [a, c], function (a) { b(a); }) : b(null); }); }
                function e(c, d, g, l) {
                    l || (l = a.g.loaders.slice(0));
                    var h = l.shift();
                    if (h) {
                        var n = h[c];
                        if (n) {
                            var t = !1;
                            if (n.apply(h, d.concat(function (a) { t ? g(null) : null !== a ? g(a) : e(c, d, g, l); })) !== b && (t = !0, !h.suppressLoaderExceptions))
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        }
                        else
                            e(c, d, g, l);
                    }
                    else
                        g(null);
                }
                var g = {}, h = {};
                a.g = { get: function (a, c) { var e = h.hasOwnProperty(a) ? h[a] : b; e ? setTimeout(function () { c(e); }, 0) : d(a, c); }, tb: function (a) { delete h[a]; }, jb: e };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.tb);
            })();
            (function () {
                function b(b, c, d, e) {
                    function k() { 0 === --u && e(h); }
                    var h = {}, u = 2, r = d.template;
                    d = d.viewModel;
                    r ? g(c, r, function (c) { a.g.jb("loadTemplate", [b, c], function (a) { h.template = a; k(); }); }) : k();
                    d ? g(c, d, function (c) {
                        a.g.jb("loadViewModel", [b, c], function (a) { h[f] = a; k(); });
                    }) : k();
                }
                function d(a, b, c) { if ("function" === typeof b)
                    c(function (a) { return new b(a); });
                else if ("function" === typeof b[f])
                    c(b[f]);
                else if ("instance" in b) {
                    var e = b.instance;
                    c(function () { return e; });
                }
                else
                    "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b); }
                function c(b) { switch (a.a.t(b)) {
                    case "script": return a.a.ba(b.text);
                    case "textarea": return a.a.ba(b.value);
                    case "template": if (e(b.content))
                        return a.a.ia(b.content.childNodes);
                } return a.a.ia(b.childNodes); }
                function e(a) {
                    return s.DocumentFragment ?
                        a instanceof DocumentFragment : a && 11 === a.nodeType;
                }
                function g(a, b, c) { "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b); }
                function h(a) { return function (b) { throw Error("Component '" + a + "': " + b); }; }
                var k = {};
                a.g.tc = function (b, c) { if (!c)
                    throw Error("Invalid configuration for " + b); if (a.g.Qa(b))
                    throw Error("Component " + b + " is already registered"); k[b] = c; };
                a.g.Qa = function (a) { return a in k; };
                a.g.wc = function (b) { delete k[b]; a.g.tb(b); };
                a.g.ub = { getConfig: function (a, b) { b(k.hasOwnProperty(a) ? k[a] : null); }, loadComponent: function (a, c, d) { var e = h(a); g(e, c, function (c) { b(a, e, c, d); }); }, loadTemplate: function (b, d, f) {
                        b = h(b);
                        if ("string" === typeof d)
                            f(a.a.ba(d));
                        else if (d instanceof Array)
                            f(d);
                        else if (e(d))
                            f(a.a.S(d.childNodes));
                        else if (d.element)
                            if (d = d.element, s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType)
                                f(c(d));
                            else if ("string" === typeof d) {
                                var k = v.getElementById(d);
                                k ? f(c(k)) : b("Cannot find element with ID " + d);
                            }
                            else
                                b("Unknown element type: " + d);
                        else
                            b("Unknown template value: " +
                                d);
                    }, loadViewModel: function (a, b, c) { d(h(a), b, c); } };
                var f = "createViewModel";
                a.b("components.register", a.g.tc);
                a.b("components.isRegistered", a.g.Qa);
                a.b("components.unregister", a.g.wc);
                a.b("components.defaultLoader", a.g.ub);
                a.g.loaders.push(a.g.ub);
                a.g.Ub = k;
            })();
            (function () {
                function b(b, e) {
                    var g = b.getAttribute("params");
                    if (g) {
                        var g = d.parseBindingsString(g, e, b, { valueAccessors: !0, bindingParams: !0 }), g = a.a.na(g, function (d) { return a.s(d, null, { o: b }); }), h = a.a.na(g, function (d) {
                            return d.Z() ? a.s(function () { return a.a.c(d()); }, null, { o: b }) : d.v();
                        });
                        h.hasOwnProperty("$raw") || (h.$raw = g);
                        return h;
                    }
                    return { $raw: {} };
                }
                a.g.getComponentNameForNode = function (b) { b = a.a.t(b); return a.g.Qa(b) && b; };
                a.g.mb = function (c, d, g, h) { if (1 === d.nodeType) {
                    var k = a.g.getComponentNameForNode(d);
                    if (k) {
                        c = c || {};
                        if (c.component)
                            throw Error('Cannot use the "component" binding on a custom element matching a component');
                        var f = { name: k, params: b(d, g) };
                        c.component = h ? function () { return f; } : f;
                    }
                } return c; };
                var d = new a.J;
                9 > a.a.L && (a.g.register = function (a) {
                    return function (b) {
                        v.createElement(b);
                        return a.apply(this, arguments);
                    };
                }(a.g.register), v.createDocumentFragment = function (b) { return function () { var d = b(), g = a.g.Ub, h; for (h in g)
                    g.hasOwnProperty(h) && d.createElement(h); return d; }; }(v.createDocumentFragment));
            })();
            (function () {
                var b = 0;
                a.d.component = { init: function (d, c, e, g, h) {
                        function k() { var a = f && f.dispose; "function" === typeof a && a.call(f); m = null; }
                        var f, m;
                        a.a.w.da(d, k);
                        a.s(function () {
                            var e = a.a.c(c()), g, n;
                            "string" === typeof e ? g = e : (g = a.a.c(e.name), n = a.a.c(e.params));
                            if (!g)
                                throw Error("No component name specified");
                            var t = m = ++b;
                            a.g.get(g, function (b) { if (m === t) {
                                k();
                                if (!b)
                                    throw Error("Unknown component '" + g + "'");
                                var c = b.template;
                                if (!c)
                                    throw Error("Component '" + g + "' has no template");
                                c = a.a.ia(c);
                                a.f.T(d, c);
                                var c = n, e = b.createViewModel;
                                b = e ? e.call(b, c, { element: d }) : c;
                                c = h.createChildContext(b);
                                f = b;
                                a.Ca(c, d);
                            } });
                        }, null, { o: d });
                        return { controlsDescendantBindings: !0 };
                    } };
                a.f.Q.component = !0;
            })();
            var Q = { "class": "className", "for": "htmlFor" };
            a.d.attr = { update: function (b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        var h = !1 === d || null === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.L && c in Q ? (c = Q[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Mb(b, h ? "" : d.toString());
                    });
                } };
            (function () {
                a.d.checked = { after: ["value", "attr"], init: function (b, d, c) {
                        function e() { var e = b.checked, k = q ? h() : e; if (!a.Y.ma() && (!f || e)) {
                            var g = a.k.B(d);
                            m ? l !== k ? (e && (a.a.ea(g, k, !0), a.a.ea(g, l, !1)), l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0);
                        } }
                        function g() { var c = a.a.c(d()); b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c; }
                        var h = a.Ib(function () {
                            return c.has("checkedValue") ?
                                a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value;
                        }), k = "checkbox" == b.type, f = "radio" == b.type;
                        if (k || f) {
                            var m = k && a.a.c(d()) instanceof Array, l = m ? h() : p, q = f || m;
                            f && !b.name && a.d.uniqueName.init(b, function () { return !0; });
                            a.s(e, null, { o: b });
                            a.a.n(b, "click", e);
                            a.s(g, null, { o: b });
                        }
                    } };
                a.h.V.checked = !0;
                a.d.checkedValue = { update: function (b, d) { b.value = a.a.c(d()); } };
            })();
            a.d.css = { update: function (b, d) {
                    var c = a.a.c(d());
                    "object" == typeof c ? a.a.G(c, function (c, d) { d = a.a.c(d); a.a.Ba(b, c, d); }) : (c = String(c || ""),
                        a.a.Ba(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ba(b, c, !0));
                } };
            a.d.enable = { update: function (b, d) { var c = a.a.c(d()); c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0); } };
            a.d.disable = { update: function (b, d) { a.d.enable.update(b, function () { return !a.a.c(d()); }); } };
            a.d.event = { init: function (b, d, c, e, g) {
                    var h = d() || {};
                    a.a.G(h, function (k) {
                        "string" == typeof k && a.a.n(b, k, function (b) {
                            var h, l = d()[k];
                            if (l) {
                                try {
                                    var q = a.a.S(arguments);
                                    e = g.$data;
                                    q.unshift(e);
                                    h = l.apply(e, q);
                                }
                                finally {
                                    !0 !== h && (b.preventDefault ?
                                        b.preventDefault() : b.returnValue = !1);
                                }
                                !1 === c.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
                            }
                        });
                    });
                } };
            a.d.foreach = { Eb: function (b) { return function () { var d = b(), c = a.a.Xa(d); if (!c || "number" == typeof c.length)
                    return { foreach: d, templateEngine: a.O.Oa }; a.a.c(d); return { foreach: c.data, as: c.as, includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove, templateEngine: a.O.Oa }; }; }, init: function (b, d) { return a.d.template.init(b, a.d.foreach.Eb(d)); }, update: function (b, d, c, e, g) { return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g); } };
            a.h.ha.foreach = !1;
            a.f.Q.foreach = !0;
            a.d.hasfocus = { init: function (b, d, c) {
                    function e(e) { b.__ko_hasfocusUpdating = !0; var f = b.ownerDocument; if ("activeElement" in f) {
                        var g;
                        try {
                            g = f.activeElement;
                        }
                        catch (h) {
                            g = f.body;
                        }
                        e = g === b;
                    } f = d(); a.h.pa(f, c, "hasfocus", e, !0); b.__ko_hasfocusLastValue = e; b.__ko_hasfocusUpdating = !1; }
                    var g = e.bind(null, !0), h = e.bind(null, !1);
                    a.a.n(b, "focus", g);
                    a.a.n(b, "focusin", g);
                    a.a.n(b, "blur", h);
                    a.a.n(b, "focusout", h);
                }, update: function (b, d) { var c = !!a.a.c(d()); b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.B(a.a.oa, null, [b, c ? "focusin" : "focusout"])); } };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = { init: function () { return { controlsDescendantBindings: !0 }; }, update: function (b, d) { a.a.$a(b, d()); } };
            I("if");
            I("ifnot", !1, !0);
            I("with", !0, !1, function (a, d) { return a.createChildContext(d); });
            var K = {};
            a.d.options = { init: function (b) {
                    if ("select" !==
                        a.a.t(b))
                        throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length;)
                        b.remove(0);
                    return { controlsDescendantBindings: !0 };
                }, update: function (b, d, c) {
                    function e() { return a.a.ta(b.options, function (a) { return a.selected; }); }
                    function g(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c; }
                    function h(c, d) { if (q.length) {
                        var e = 0 <= a.a.m(q, a.i.q(d[0]));
                        a.a.Nb(d[0], e);
                        n && !e && a.k.B(a.a.oa, null, [b, "change"]);
                    } }
                    var k = 0 != b.length && b.multiple ? b.scrollTop : null, f = a.a.c(d()), m = c.get("optionsIncludeDestroyed");
                    d = {};
                    var l, q;
                    q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
                    f && ("undefined" == typeof f.length && (f = [f]), l = a.a.ta(f, function (b) { return m || b === p || null === b || !a.a.c(b._destroy); }), c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")), null !== f && f !== p && l.unshift(K)));
                    var n = !1;
                    d.beforeRemove = function (a) { b.removeChild(a); };
                    f = h;
                    c.has("optionsAfterRender") && (f = function (b, d) { h(0, d); a.k.B(c.get("optionsAfterRender"), null, [d[0], b !== K ? b : p]); });
                    a.a.Za(b, l, function (d, e, f) {
                        f.length &&
                            (q = f[0].selected ? [a.i.q(f[0])] : [], n = !0);
                        e = b.ownerDocument.createElement("option");
                        d === K ? (a.a.bb(e, c.get("optionsCaption")), a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d), a.i.ca(e, a.a.c(f)), d = g(d, c.get("optionsText"), f), a.a.bb(e, d));
                        return [e];
                    }, d, f);
                    a.k.B(function () { c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change"); });
                    a.a.dc(b);
                    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k);
                } };
            a.d.options.Va = a.a.e.F();
            a.d.selectedOptions = { after: ["options", "foreach"], init: function (b, d, c) { a.a.n(b, "change", function () { var e = d(), g = []; a.a.u(b.getElementsByTagName("option"), function (b) { b.selected && g.push(a.i.q(b)); }); a.h.pa(e, c, "selectedOptions", g); }); }, update: function (b, d) {
                    if ("select" != a.a.t(b))
                        throw Error("values binding applies only to SELECT elements");
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"), function (b) { var d = 0 <= a.a.m(c, a.i.q(b)); a.a.Nb(b, d); });
                } };
            a.h.V.selectedOptions = !0;
            a.d.style = { update: function (b, d) { var c = a.a.c(d() || {}); a.a.G(c, function (c, d) { d = a.a.c(d); if (null === d || d === p || !1 === d)
                    d = ""; b.style[c] = d; }); } };
            a.d.submit = { init: function (b, d, c, e, g) { if ("function" != typeof d())
                    throw Error("The value for a submit binding must be a function"); a.a.n(b, "submit", function (a) { var c, e = d(); try {
                    c = e.call(g.$data, b);
                }
                finally {
                    !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                } }); } };
            a.d.text = { init: function () { return { controlsDescendantBindings: !0 }; },
                update: function (b, d) { a.a.bb(b, d()); } };
            a.f.Q.text = !0;
            (function () {
                if (s && s.navigator)
                    var b = function (a) { if (a)
                        return parseFloat(a[1]); }, d = s.opera && s.opera.version && parseInt(s.opera.version()), c = s.navigator.userAgent, e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), g = b(c.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.L)
                    var h = a.a.e.F(), k = a.a.e.F(), f = function (b) { var c = this.activeElement; (c = c && a.a.e.get(c, k)) && c(b); }, m = function (b, c) {
                        var d = b.ownerDocument;
                        a.a.e.get(d, h) || (a.a.e.set(d, h, !0), a.a.n(d, "selectionchange", f));
                        a.a.e.set(b, k, c);
                    };
                a.d.textInput = { init: function (b, c, f) {
                        function k(c, d) { a.a.n(b, c, d); }
                        function h() { var d = a.a.c(c()); if (null === d || d === p)
                            d = ""; v !== p && d === v ? setTimeout(h, 4) : b.value !== d && (s = d, b.value = d); }
                        function u() { y || (v = b.value, y = setTimeout(r, 4)); }
                        function r() { clearTimeout(y); v = y = p; var d = b.value; s !== d && (s = d, a.h.pa(c(), f, "textInput", d)); }
                        var s = b.value, y, v;
                        10 > a.a.L ? (k("propertychange", function (a) { "value" === a.propertyName && r(); }), 8 == a.a.L && (k("keyup", r), k("keydown", r)), 8 <= a.a.L && (m(b, r), k("dragend", u))) :
                            (k("input", r), 5 > e && "textarea" === a.a.t(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r), k("dragdrop", r), k("drop", r)));
                        k("change", r);
                        a.s(h, null, { o: b });
                    } };
                a.h.V.textInput = !0;
                a.d.textinput = { preprocess: function (a, b, c) { c("textInput", a); } };
            })();
            a.d.uniqueName = { init: function (b, d) { if (d()) {
                    var c = "ko_unique_" + ++a.d.uniqueName.Zb;
                    a.a.Mb(b, c);
                } } };
            a.d.uniqueName.Zb = 0;
            a.d.value = { after: ["options", "foreach"], init: function (b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" !=
                        b.type && "radio" != b.type) {
                        var e = ["change"], g = c.get("valueUpdate"), h = !1, k = null;
                        g && ("string" == typeof g && (g = [g]), a.a.ga(e, g), e = a.a.rb(e));
                        var f = function () { k = null; h = !1; var e = d(), f = a.i.q(b); a.h.pa(e, c, "value", f); };
                        !a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function () { h = !0; }), a.a.n(b, "focus", function () { h = !1; }), a.a.n(b, "blur", function () { h && f(); }));
                        a.a.u(e, function (c) {
                            var d = f;
                            a.a.vc(c, "after") && (d = function () { k = a.i.q(b); setTimeout(f, 0); }, c = c.substring(5));
                            a.a.n(b, c, d);
                        });
                        var m = function () { var e = a.a.c(d()), f = a.i.q(b); if (null !== k && e === k)
                            setTimeout(m, 0);
                        else if (e !== f)
                            if ("select" === a.a.t(b)) {
                                var g = c.get("valueAllowUnset"), f = function () { a.i.ca(b, e, g); };
                                f();
                                g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null, [b, "change"]);
                            }
                            else
                                a.i.ca(b, e); };
                        a.s(m, null, { o: b });
                    }
                    else
                        a.ra(b, { checkedValue: d });
                }, update: function () { } };
            a.h.V.value = !0;
            a.d.visible = { update: function (b, d) {
                    var c = a.a.c(d()), e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none");
                } };
            (function (b) { a.d[b] = { init: function (d, c, e, g, h) { return a.d.event.init.call(this, d, function () { var a = {}; a[b] = c(); return a; }, e, g, h); } }; })("click");
            a.H = function () { };
            a.H.prototype.renderTemplateSource = function () { throw Error("Override renderTemplateSource"); };
            a.H.prototype.createJavaScriptEvaluatorBlock = function () { throw Error("Override createJavaScriptEvaluatorBlock"); };
            a.H.prototype.makeTemplateSource = function (b, d) {
                if ("string" == typeof b) {
                    d = d || v;
                    var c = d.getElementById(b);
                    if (!c)
                        throw Error("Cannot find template with ID " + b);
                    return new a.r.l(c);
                }
                if (1 == b.nodeType || 8 == b.nodeType)
                    return new a.r.fa(b);
                throw Error("Unknown template type: " + b);
            };
            a.H.prototype.renderTemplate = function (a, d, c, e) { a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, d, c); };
            a.H.prototype.isTemplateRewritten = function (a, d) { return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten"); };
            a.H.prototype.rewriteTemplate = function (a, d, c) {
                a = this.makeTemplateSource(a, c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0);
            };
            a.b("templateEngine", a.H);
            a.fb = function () {
                function b(b, c, d, k) {
                    b = a.h.Wa(b);
                    for (var f = a.h.ha, m = 0; m < b.length; m++) {
                        var l = b[m].key;
                        if (f.hasOwnProperty(l)) {
                            var q = f[l];
                            if ("function" === typeof q) {
                                if (l = q(b[m].value))
                                    throw Error(l);
                            }
                            else if (!q)
                                throw Error("This template engine does not support the '" + l + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() +
                        "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c;
                }
                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return { ec: function (b, c, d) { c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) { return a.fb.nc(b, c); }, d); }, nc: function (a, g) { return a.replace(d, function (a, c, d, e, l) { return b(l, c, d, g); }).replace(c, function (a, c) { return b(c, "\x3c!-- ko --\x3e", "#comment", g); }); }, Xb: function (b, c) {
                        return a.D.Ua(function (d, k) { var f = d.nextSibling; f && f.nodeName.toLowerCase() === c && a.ra(f, b, k); });
                    } };
            }();
            a.b("__tr_ambtns", a.fb.Xb);
            (function () {
                a.r = {};
                a.r.l = function (a) { this.l = a; };
                a.r.l.prototype.text = function () { var b = a.a.t(this.l), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML"; if (0 == arguments.length)
                    return this.l[b]; var d = arguments[0]; "innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d; };
                var b = a.a.e.F() + "_";
                a.r.l.prototype.data = function (c) { if (1 === arguments.length)
                    return a.a.e.get(this.l, b + c); a.a.e.set(this.l, b + c, arguments[1]); };
                var d = a.a.e.F();
                a.r.fa = function (a) { this.l = a; };
                a.r.fa.prototype = new a.r.l;
                a.r.fa.prototype.text = function () { if (0 == arguments.length) {
                    var b = a.a.e.get(this.l, d) || {};
                    b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);
                    return b.gb;
                } a.a.e.set(this.l, d, { gb: arguments[0] }); };
                a.r.l.prototype.nodes = function () { if (0 == arguments.length)
                    return (a.a.e.get(this.l, d) || {}).Ga; a.a.e.set(this.l, d, { Ga: arguments[0] }); };
                a.b("templateSources", a.r);
                a.b("templateSources.domElement", a.r.l);
                a.b("templateSources.anonymousTemplate", a.r.fa);
            })();
            (function () {
                function b(b, c, d) { var e; for (c = a.f.nextSibling(c); b && (e = b) !== c;)
                    b = a.f.nextSibling(e), d(e, b); }
                function d(c, d) {
                    if (c.length) {
                        var e = c[0], g = c[c.length - 1], h = e.parentNode, n = a.J.instance, t = n.preprocessNode;
                        if (t) {
                            b(e, g, function (a, b) { var c = a.previousSibling, d = t.call(n, a); d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c)); });
                            c.length = 0;
                            if (!e)
                                return;
                            e === g ? c.push(e) : (c.push(e, g), a.a.ka(c, h));
                        }
                        b(e, g, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b); });
                        b(e, g, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d]); });
                        a.a.ka(c, h);
                    }
                }
                function c(a) { return a.nodeType ? a : 0 < a.length ? a[0] : null; }
                function e(b, e, h, l, q) {
                    q = q || {};
                    var n = b && c(b), n = n && n.ownerDocument, t = q.templateEngine || g;
                    a.fb.ec(h, t, n);
                    h = t.renderTemplate(h, l, q, n);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType)
                        throw Error("Template engine must return an array of DOM nodes");
                    n = !1;
                    switch (e) {
                        case "replaceChildren":
                            a.f.T(b, h);
                            n = !0;
                            break;
                        case "replaceNode":
                            a.a.Lb(b, h);
                            n = !0;
                            break;
                        case "ignoreTargetNode": break;
                        default: throw Error("Unknown renderMode: " +
                            e);
                    }
                    n && (d(h, l), q.afterRender && a.k.B(q.afterRender, null, [h, l.$data]));
                    return h;
                }
                var g;
                a.ab = function (b) { if (b != p && !(b instanceof a.H))
                    throw Error("templateEngine must inherit from ko.templateEngine"); g = b; };
                a.Ya = function (b, d, h, l, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == p)
                        throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (l) {
                        var n = c(l);
                        return a.j(function () {
                            var g = d && d instanceof a.N ? d : new a.N(a.a.c(d)), p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b, g = e(l, q, p, g, h);
                            "replaceNode" == q && (l = g, n = c(l));
                        }, null, { Ia: function () { return !n || !a.a.Ja(n); }, o: n && "replaceNode" == q ? n.parentNode : n });
                    }
                    return a.D.Ua(function (c) { a.Ya(b, d, h, c, "replaceNode"); });
                };
                a.uc = function (b, c, g, h, q) {
                    function n(a, b) { d(b, s); g.afterRender && g.afterRender(b, a); }
                    function t(c, d) { s = q.createChildContext(c, g.as, function (a) { a.$index = d; }); var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b; return e(null, "ignoreTargetNode", f, s, g); }
                    var s;
                    return a.j(function () {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.ta(b, function (b) { return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy); });
                        a.k.B(a.a.Za, null, [h, b, t, g, n]);
                    }, null, { o: h });
                };
                var h = a.a.e.F();
                a.d.template = { init: function (b, c) { var d = a.a.c(c()); "string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b), d = a.a.oc(d), (new a.r.fa(b)).nodes(d)); return { controlsDescendantBindings: !0 }; }, update: function (b, c, d, e, g) {
                        var n = c(), t;
                        c = a.a.c(n);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (n = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), t = a.a.c(c.data));
                        "foreach" in c ? e = a.uc(n || b, d && c.foreach || [], c, b, g) : d ? (g = "data" in c ? g.createChildContext(t, c.as) : g, e = a.Ya(n || b, g, c, b)) : a.f.ja(b);
                        g = e;
                        (t = a.a.e.get(b, h)) && "function" == typeof t.K && t.K();
                        a.a.e.set(b, h, g && g.Z() ? g : p);
                    } };
                a.h.ha.template = function (b) { b = a.h.Wa(b); return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"; };
                a.f.Q.template = !0;
            })();
            a.b("setTemplateEngine", a.ab);
            a.b("renderTemplate", a.Ya);
            a.a.wb = function (a, d, c) {
                if (a.length &&
                    d.length) {
                    var e, g, h, k, f;
                    for (e = g = 0; (!c || e < c) && (k = a[g]); ++g) {
                        for (h = 0; f = d[h]; ++h)
                            if (k.value === f.value) {
                                k.moved = f.index;
                                f.moved = k.index;
                                d.splice(h, 1);
                                e = h = 0;
                                break;
                            }
                        e += h;
                    }
                }
            };
            a.a.Fa = function () {
                function b(b, c, e, g, h) {
                    var k = Math.min, f = Math.max, m = [], l, q = b.length, n, p = c.length, s = p - q || 1, u = q + p + 1, r, v, w;
                    for (l = 0; l <= q; l++)
                        for (v = r, m.push(r = []), w = k(p, l + s), n = f(0, l - 1); n <= w; n++)
                            r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1;
                    k = [];
                    f = [];
                    s = [];
                    l = q;
                    for (n = p; l || n;)
                        p = m[l][n] - 1, n && p === m[l][n - 1] ? f.push(k[k.length] = { status: e,
                            value: c[--n], index: n }) : l && p === m[l - 1][n] ? s.push(k[k.length] = { status: g, value: b[--l], index: l }) : (--n, --l, h.sparse || k.push({ status: "retained", value: c[n] }));
                    a.a.wb(f, s, 10 * q);
                    return k.reverse();
                }
                return function (a, c, e) { e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {}; a = a || []; c = c || []; return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e); };
            }();
            a.b("utils.compareArrays", a.a.Fa);
            (function () {
                function b(b, d, g, h, k) {
                    var f = [], m = a.j(function () {
                        var l = d(g, k, a.a.ka(f, b)) || [];
                        0 < f.length && (a.a.Lb(f, l), h && a.k.B(h, null, [g, l, k]));
                        f.length = 0;
                        a.a.ga(f, l);
                    }, null, { o: b, Ia: function () { return !a.a.ob(f); } });
                    return { $: f, j: m.Z() ? m : p };
                }
                var d = a.a.e.F();
                a.a.Za = function (c, e, g, h, k) {
                    function f(b, d) { x = q[d]; r !== d && (A[b] = x); x.Na(r++); a.a.ka(x.$, c); s.push(x); w.push(x); }
                    function m(b, c) { if (b)
                        for (var d = 0, e = c.length; d < e; d++)
                            c[d] && a.a.u(c[d].$, function (a) { b(a, d, c[d].sa); }); }
                    e = e || [];
                    h = h || {};
                    var l = a.a.e.get(c, d) === p, q = a.a.e.get(c, d) || [], n = a.a.Da(q, function (a) { return a.sa; }), t = a.a.Fa(n, e, h.dontLimitMoves), s = [], u = 0, r = 0, v = [], w = [];
                    e =
                        [];
                    for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++)
                        switch (F = D.moved, D.status) {
                            case "deleted":
                                F === p && (x = q[u], x.j && x.j.K(), v.push.apply(v, a.a.ka(x.$, c)), h.beforeRemove && (e[B] = x, w.push(x)));
                                u++;
                                break;
                            case "retained":
                                f(B, u++);
                                break;
                            case "added": F !== p ? f(B, F) : (x = { sa: D.value, Na: a.p(r++) }, s.push(x), w.push(x), l || (n[B] = x));
                        }
                    m(h.beforeMove, A);
                    a.a.u(v, h.beforeRemove ? a.R : a.removeNode);
                    for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
                        x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));
                        for (u = 0; t = x.$[u]; l = t.nextSibling, G = t, u++)
                            t !== l && a.f.Bb(c, t, G);
                        !x.ic && k && (k(x.sa, x.$, x.Na), x.ic = !0);
                    }
                    m(h.beforeRemove, e);
                    m(h.afterMove, A);
                    m(h.afterAdd, n);
                    a.a.e.set(c, d, s);
                };
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);
            a.O = function () { this.allowTemplateRewriting = !1; };
            a.O.prototype = new a.H;
            a.O.prototype.renderTemplateSource = function (b) { var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null; if (d)
                return a.a.S(d.cloneNode(!0).childNodes); b = b.text(); return a.a.ba(b); };
            a.O.Oa = new a.O;
            a.ab(a.O.Oa);
            a.b("nativeTemplateEngine", a.O);
            (function () {
                a.Sa = function () {
                    var a = this.kc =
                        function () { if (!w || !w.tmpl)
                            return 0; try {
                            if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                return 2;
                        }
                        catch (a) { } return 1; }();
                    this.renderTemplateSource = function (b, e, g) {
                        g = g || {};
                        if (2 > a)
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                        b = [e.$data];
                        e = w.extend({ koBindingContext: e }, g.templateOptions);
                        e = w.tmpl(h, b, e);
                        e.appendTo(v.createElement("div"));
                        w.fragments = {};
                        return e;
                    };
                    this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}"; };
                    this.addTemplate = function (a, b) { v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>"); };
                    0 < a && (w.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, w.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
                };
                a.Sa.prototype = new a.H;
                var b = new a.Sa;
                0 < b.kc && a.ab(b);
                a.b("jqueryTmplTemplateEngine", a.Sa);
            })();
        });
    })();
})();
(function (a) {
    function b(a, b, c) { switch (arguments.length) {
        case 2: return null != a ? a : b;
        case 3: return null != a ? a : null != b ? b : c;
        default: throw new Error("Implement me");
    } }
    function c(a, b) { return zb.call(a, b); }
    function d() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 }; }
    function e(a) { tb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a); }
    function f(a, b) { var c = !0; return m(function () { return c && (e(a), c = !1), b.apply(this, arguments); }, b); }
    function g(a, b) { qc[a] || (e(b), qc[a] = !0); }
    function h(a, b) { return function (c) { return p(a.call(this, c), b); }; }
    function i(a, b) { return function (c) { return this.localeData().ordinal(a.call(this, c), b); }; }
    function j() { }
    function k(a, b) { b !== !1 && F(a), n(this, a), this._d = new Date(+a._d); }
    function l(a) { var b = y(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0; this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = tb.localeData(), this._bubble(); }
    function m(a, b) { for (var d in b)
        c(b, d) && (a[d] = b[d]); return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a; }
    function n(a, b) { var c, d, e; if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ib.length > 0)
        for (c in Ib)
            d = Ib[c], e = b[d], "undefined" != typeof e && (a[d] = e); return a; }
    function o(a) { return 0 > a ? Math.ceil(a) : Math.floor(a); }
    function p(a, b, c) { for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)
        d = "0" + d; return (e ? c ? "+" : "" : "-") + d; }
    function q(a, b) { var c = { milliseconds: 0, months: 0 }; return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c; }
    function r(a, b) { var c; return b = K(b, a), a.isBefore(b) ? c = q(a, b) : (c = q(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c; }
    function s(a, b) { return function (c, d) { var e, f; return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = tb.duration(c, d), t(this, e, a), this; }; }
    function t(a, b, c, d) { var e = b._milliseconds, f = b._days, g = b._months; d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && nb(a, "Date", mb(a, "Date") + f * c), g && lb(a, mb(a, "Month") + g * c), d && tb.updateOffset(a, f || g); }
    function u(a) { return "[object Array]" === Object.prototype.toString.call(a); }
    function v(a) { return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date; }
    function w(a, b, c) { var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0; for (d = 0; e > d; d++)
        (c && a[d] !== b[d] || !c && A(a[d]) !== A(b[d])) && g++; return g + f; }
    function x(a) { if (a) {
        var b = a.toLowerCase().replace(/(.)s$/, "$1");
        a = jc[a] || kc[b] || b;
    } return a; }
    function y(a) { var b, d, e = {}; for (d in a)
        c(a, d) && (b = x(d), b && (e[b] = a[d])); return e; }
    function z(b) { var c, d; if (0 === b.indexOf("week"))
        c = 7, d = "day";
    else {
        if (0 !== b.indexOf("month"))
            return;
        c = 12, d = "month";
    } tb[b] = function (e, f) { var g, h, i = tb._locale[b], j = []; if ("number" == typeof e && (f = e, e = a), h = function (a) { var b = tb().utc().set(d, a); return i.call(tb._locale, b, e || ""); }, null != f)
        return h(f); for (g = 0; c > g; g++)
        j.push(h(g)); return j; }; }
    function A(a) { var b = +a, c = 0; return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c; }
    function B(a, b) { return new Date(Date.UTC(a, b + 1, 0)).getUTCDate(); }
    function C(a, b, c) { return hb(tb([a, 11, 31 + b - c]), b, c).week; }
    function D(a) { return E(a) ? 366 : 365; }
    function E(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0; }
    function F(a) { var b; a._a && -2 === a._pf.overflow && (b = a._a[Bb] < 0 || a._a[Bb] > 11 ? Bb : a._a[Cb] < 1 || a._a[Cb] > B(a._a[Ab], a._a[Bb]) ? Cb : a._a[Db] < 0 || a._a[Db] > 24 || 24 === a._a[Db] && (0 !== a._a[Eb] || 0 !== a._a[Fb] || 0 !== a._a[Gb]) ? Db : a._a[Eb] < 0 || a._a[Eb] > 59 ? Eb : a._a[Fb] < 0 || a._a[Fb] > 59 ? Fb : a._a[Gb] < 0 || a._a[Gb] > 999 ? Gb : -1, a._pf._overflowDayOfYear && (Ab > b || b > Cb) && (b = Cb), a._pf.overflow = b); }
    function G(b) { return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid; }
    function H(a) { return a ? a.toLowerCase().replace("_", "-") : a; }
    function I(a) { for (var b, c, d, e, f = 0; f < a.length;) {
        for (e = H(a[f]).split("-"), b = e.length, c = H(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
            if (d = J(e.slice(0, b).join("-")))
                return d;
            if (c && c.length >= b && w(e, c, !0) >= b - 1)
                break;
            b--;
        }
        f++;
    } return null; }
    function J(a) { var b = null; if (!Hb[a] && Jb)
        try {
            b = tb.locale(), require("./locale/" + a), tb.locale(b);
        }
        catch (c) { } return Hb[a]; }
    function K(a, b) { var c, d; return b._isUTC ? (c = b.clone(), d = (tb.isMoment(a) || v(a) ? +a : +tb(a)) - +c, c._d.setTime(+c._d + d), tb.updateOffset(c, !1), c) : tb(a).local(); }
    function L(a) { return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); }
    function M(a) { var b, c, d = a.match(Nb); for (b = 0, c = d.length; c > b; b++)
        d[b] = pc[d[b]] ? pc[d[b]] : L(d[b]); return function (e) { var f = ""; for (b = 0; c > b; b++)
        f += d[b] instanceof Function ? d[b].call(e, a) : d[b]; return f; }; }
    function N(a, b) { return a.isValid() ? (b = O(b, a.localeData()), lc[b] || (lc[b] = M(b)), lc[b](a)) : a.localeData().invalidDate(); }
    function O(a, b) { function c(a) { return b.longDateFormat(a) || a; } var d = 5; for (Ob.lastIndex = 0; d >= 0 && Ob.test(a);)
        a = a.replace(Ob, c), Ob.lastIndex = 0, d -= 1; return a; }
    function P(a, b) { var c, d = b._strict; switch (a) {
        case "Q": return Zb;
        case "DDDD": return _b;
        case "YYYY":
        case "GGGG":
        case "gggg": return d ? ac : Rb;
        case "Y":
        case "G":
        case "g": return cc;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg": return d ? bc : Sb;
        case "S": if (d)
            return Zb;
        case "SS": if (d)
            return $b;
        case "SSS": if (d)
            return _b;
        case "DDD": return Qb;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd": return Ub;
        case "a":
        case "A": return b._locale._meridiemParse;
        case "x": return Xb;
        case "X": return Yb;
        case "Z":
        case "ZZ": return Vb;
        case "T": return Wb;
        case "SSSS": return Tb;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW": return d ? $b : Pb;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E": return Pb;
        case "Do": return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
        default: return c = new RegExp(Y(X(a.replace("\\", "")), "i"));
    } }
    function Q(a) { a = a || ""; var b = a.match(Vb) || [], c = b[b.length - 1] || [], d = (c + "").match(hc) || ["-", 0, 0], e = +(60 * d[1]) + A(d[2]); return "+" === d[0] ? -e : e; }
    function R(a, b, c) { var d, e = c._a; switch (a) {
        case "Q":
            null != b && (e[Bb] = 3 * (A(b) - 1));
            break;
        case "M":
        case "MM":
            null != b && (e[Bb] = A(b) - 1);
            break;
        case "MMM":
        case "MMMM":
            d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Bb] = d : c._pf.invalidMonth = b;
            break;
        case "D":
        case "DD":
            null != b && (e[Cb] = A(b));
            break;
        case "Do":
            null != b && (e[Cb] = A(parseInt(b.match(/\d{1,2}/)[0], 10)));
            break;
        case "DDD":
        case "DDDD":
            null != b && (c._dayOfYear = A(b));
            break;
        case "YY":
            e[Ab] = tb.parseTwoDigitYear(b);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            e[Ab] = A(b);
            break;
        case "a":
        case "A":
            c._isPm = c._locale.isPM(b);
            break;
        case "h":
        case "hh": c._pf.bigHour = !0;
        case "H":
        case "HH":
            e[Db] = A(b);
            break;
        case "m":
        case "mm":
            e[Eb] = A(b);
            break;
        case "s":
        case "ss":
            e[Fb] = A(b);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            e[Gb] = A(1e3 * ("0." + b));
            break;
        case "x":
            c._d = new Date(A(b));
            break;
        case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;
        case "Z":
        case "ZZ":
            c._useUTC = !0, c._tzm = Q(b);
            break;
        case "dd":
        case "ddd":
        case "dddd":
            d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "e":
        case "E": a = a.substr(0, 1);
        case "gggg":
        case "GGGG":
        case "GGGGG":
            a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = A(b));
            break;
        case "gg":
        case "GG": c._w = c._w || {}, c._w[a] = tb.parseTwoDigitYear(b);
    } }
    function S(a) { var c, d, e, f, g, h, i; c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Ab], hb(tb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Ab], hb(tb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ib(d, e, f, h, g), a._a[Ab] = i.year, a._dayOfYear = i.dayOfYear; }
    function T(a) { var c, d, e, f, g = []; if (!a._d) {
        for (e = V(a), a._w && null == a._a[Cb] && null == a._a[Bb] && S(a), a._dayOfYear && (f = b(a._a[Ab], e[Ab]), a._dayOfYear > D(f) && (a._pf._overflowDayOfYear = !0), d = db(f, 0, a._dayOfYear), a._a[Bb] = d.getUTCMonth(), a._a[Cb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)
            a._a[c] = g[c] = e[c];
        for (; 7 > c; c++)
            a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
        24 === a._a[Db] && 0 === a._a[Eb] && 0 === a._a[Fb] && 0 === a._a[Gb] && (a._nextDay = !0, a._a[Db] = 0), a._d = (a._useUTC ? db : cb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm), a._nextDay && (a._a[Db] = 24);
    } }
    function U(a) { var b; a._d || (b = y(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], T(a)); }
    function V(a) { var b = new Date; return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]; }
    function W(b) { if (b._f === tb.ISO_8601)
        return void $(b); b._a = [], b._pf.empty = !0; var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0; for (e = O(b._f, b._locale).match(Nb) || [], c = 0; c < e.length; c++)
        f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), pc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), R(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f); b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Db] <= 12 && (b._pf.bigHour = a), b._isPm && b._a[Db] < 12 && (b._a[Db] += 12), b._isPm === !1 && 12 === b._a[Db] && (b._a[Db] = 0), T(b), F(b); }
    function X(a) { return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) { return b || c || d || e; }); }
    function Y(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); }
    function Z(a) { var b, c, e, f, g; if (0 === a._f.length)
        return a._pf.invalidFormat = !0, void (a._d = new Date(0 / 0)); for (f = 0; f < a._f.length; f++)
        g = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], W(b), G(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b)); m(a, c || b); }
    function $(a) { var b, c, d = a._i, e = dc.exec(d); if (e) {
        for (a._pf.iso = !0, b = 0, c = fc.length; c > b; b++)
            if (fc[b][1].exec(d)) {
                a._f = fc[b][0] + (e[6] || " ");
                break;
            }
        for (b = 0, c = gc.length; c > b; b++)
            if (gc[b][1].exec(d)) {
                a._f += gc[b][0];
                break;
            }
        d.match(Vb) && (a._f += "Z"), W(a);
    }
    else
        a._isValid = !1; }
    function _(a) { $(a), a._isValid === !1 && (delete a._isValid, tb.createFromInputFallback(a)); }
    function ab(a, b) { var c, d = []; for (c = 0; c < a.length; ++c)
        d.push(b(a[c], c)); return d; }
    function bb(b) { var c, d = b._i; d === a ? b._d = new Date : v(d) ? b._d = new Date(+d) : null !== (c = Kb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? _(b) : u(d) ? (b._a = ab(d.slice(0), function (a) { return parseInt(a, 10); }), T(b)) : "object" == typeof d ? U(b) : "number" == typeof d ? b._d = new Date(d) : tb.createFromInputFallback(b); }
    function cb(a, b, c, d, e, f, g) { var h = new Date(a, b, c, d, e, f, g); return 1970 > a && h.setFullYear(a), h; }
    function db(a) { var b = new Date(Date.UTC.apply(null, arguments)); return 1970 > a && b.setUTCFullYear(a), b; }
    function eb(a, b) { if ("string" == typeof a)
        if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a)
                return null;
        }
        else
            a = parseInt(a, 10); return a; }
    function fb(a, b, c, d, e) { return e.relativeTime(b || 1, !!c, a, d); }
    function gb(a, b, c) { var d = tb.duration(a).abs(), e = yb(d.as("s")), f = yb(d.as("m")), g = yb(d.as("h")), h = yb(d.as("d")), i = yb(d.as("M")), j = yb(d.as("y")), k = e < mc.s && ["s", e] || 1 === f && ["m"] || f < mc.m && ["mm", f] || 1 === g && ["h"] || g < mc.h && ["hh", g] || 1 === h && ["d"] || h < mc.d && ["dd", h] || 1 === i && ["M"] || i < mc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j]; return k[2] = b, k[3] = +a > 0, k[4] = c, fb.apply({}, k); }
    function hb(a, b, c) { var d, e = c - b, f = c - a.day(); return f > e && (f -= 7), e - 7 > f && (f += 7), d = tb(a).add(f, "d"), { week: Math.ceil(d.dayOfYear() / 7), year: d.year() }; }
    function ib(a, b, c, d, e) { var f, g, h = db(a, 0, 1).getUTCDay(); return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, { year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : D(a - 1) + g }; }
    function jb(b) { var c, d = b._i, e = b._f; return b._locale = b._locale || tb.localeData(b._l), null === d || e === a && "" === d ? tb.invalid({ nullInput: !0 }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), tb.isMoment(d) ? new k(d, !0) : (e ? u(e) ? Z(b) : W(b) : bb(b), c = new k(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c)); }
    function kb(a, b) { var c, d; if (1 === b.length && u(b[0]) && (b = b[0]), !b.length)
        return tb(); for (c = b[0], d = 1; d < b.length; ++d)
        b[d][a](c) && (c = b[d]); return c; }
    function lb(a, b) { var c; return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), B(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a); }
    function mb(a, b) { return a._d["get" + (a._isUTC ? "UTC" : "") + b](); }
    function nb(a, b, c) { return "Month" === b ? lb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c); }
    function ob(a, b) { return function (c) { return null != c ? (nb(this, a, c), tb.updateOffset(this, b), this) : mb(this, a); }; }
    function pb(a) { return 400 * a / 146097; }
    function qb(a) { return 146097 * a / 400; }
    function rb(a) { tb.duration.fn[a] = function () { return this._data[a]; }; }
    function sb(a) { "undefined" == typeof ender && (ub = xb.moment, xb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", tb) : tb); }
    for (var tb, ub, vb, wb = "2.8.4", xb = "undefined" != typeof global ? global : this, yb = Math.round, zb = Object.prototype.hasOwnProperty, Ab = 0, Bb = 1, Cb = 2, Db = 3, Eb = 4, Fb = 5, Gb = 6, Hb = {}, Ib = [], Jb = "undefined" != typeof module && module && module.exports, Kb = /^\/?Date\((\-?\d+)/i, Lb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Mb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Nb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Ob = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Pb = /\d\d?/, Qb = /\d{1,3}/, Rb = /\d{1,4}/, Sb = /[+\-]?\d{1,6}/, Tb = /\d+/, Ub = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vb = /Z|[\+\-]\d\d:?\d\d/gi, Wb = /T/i, Xb = /[\+\-]?\d+/, Yb = /[\+\-]?\d+(\.\d{1,3})?/, Zb = /\d/, $b = /\d\d/, _b = /\d{3}/, ac = /\d{4}/, bc = /[+-]?\d{6}/, cc = /[+-]?\d+/, dc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ec = "YYYY-MM-DDTHH:mm:ssZ", fc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], gc = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], hc = /([\+\-]|\d\d)/gi, ic = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), jc = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, kc = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, lc = {}, mc = { s: 45, m: 45, h: 22, d: 26, M: 11 }, nc = "DDD w W M D d".split(" "), oc = "M D H h m s w W".split(" "), pc = { M: function () { return this.month() + 1; }, MMM: function (a) { return this.localeData().monthsShort(this, a); }, MMMM: function (a) { return this.localeData().months(this, a); }, D: function () { return this.date(); }, DDD: function () { return this.dayOfYear(); }, d: function () { return this.day(); }, dd: function (a) { return this.localeData().weekdaysMin(this, a); }, ddd: function (a) { return this.localeData().weekdaysShort(this, a); }, dddd: function (a) { return this.localeData().weekdays(this, a); }, w: function () { return this.week(); }, W: function () { return this.isoWeek(); }, YY: function () { return p(this.year() % 100, 2); }, YYYY: function () { return p(this.year(), 4); }, YYYYY: function () { return p(this.year(), 5); }, YYYYYY: function () { var a = this.year(), b = a >= 0 ? "+" : "-"; return b + p(Math.abs(a), 6); }, gg: function () { return p(this.weekYear() % 100, 2); }, gggg: function () { return p(this.weekYear(), 4); }, ggggg: function () { return p(this.weekYear(), 5); }, GG: function () { return p(this.isoWeekYear() % 100, 2); }, GGGG: function () { return p(this.isoWeekYear(), 4); }, GGGGG: function () { return p(this.isoWeekYear(), 5); }, e: function () { return this.weekday(); }, E: function () { return this.isoWeekday(); }, a: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !0); }, A: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !1); }, H: function () { return this.hours(); }, h: function () { return this.hours() % 12 || 12; }, m: function () { return this.minutes(); }, s: function () { return this.seconds(); }, S: function () { return A(this.milliseconds() / 100); }, SS: function () { return p(A(this.milliseconds() / 10), 2); }, SSS: function () { return p(this.milliseconds(), 3); }, SSSS: function () { return p(this.milliseconds(), 3); }, Z: function () { var a = -this.zone(), b = "+"; return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + ":" + p(A(a) % 60, 2); }, ZZ: function () { var a = -this.zone(), b = "+"; return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + p(A(a) % 60, 2); }, z: function () { return this.zoneAbbr(); }, zz: function () { return this.zoneName(); }, x: function () { return this.valueOf(); }, X: function () { return this.unix(); }, Q: function () { return this.quarter(); } }, qc = {}, rc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; nc.length;)
        vb = nc.pop(), pc[vb + "o"] = i(pc[vb], vb);
    for (; oc.length;)
        vb = oc.pop(), pc[vb + vb] = h(pc[vb], 2);
    pc.DDDD = h(pc.DDD, 3), m(j.prototype, { set: function (a) { var b, c; for (c in a)
            b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b; this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source); }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (a) { return this._months[a.month()]; }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (a) { return this._monthsShort[a.month()]; }, monthsParse: function (a, b, c) { var d, e, f; for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = tb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))
                return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a))
                return d;
            if (!c && this._monthsParse[d].test(a))
                return d;
        } }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (a) { return this._weekdays[a.day()]; }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (a) { return this._weekdaysShort[a.day()]; }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (a) { return this._weekdaysMin[a.day()]; }, weekdaysParse: function (a) { var b, c, d; for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
            if (this._weekdaysParse[b] || (c = tb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))
                return b; }, _longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" }, longDateFormat: function (a) { var b = this._longDateFormat[a]; return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) { return a.slice(1); }), this._longDateFormat[a] = b), b; }, isPM: function (a) { return "p" === (a + "").toLowerCase().charAt(0); }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (a, b, c) { return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"; }, _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, calendar: function (a, b, c) { var d = this._calendar[a]; return "function" == typeof d ? d.apply(b, [c]) : d; }, _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, relativeTime: function (a, b, c, d) { var e = this._relativeTime[c]; return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a); }, pastFuture: function (a, b) { var c = this._relativeTime[a > 0 ? "future" : "past"]; return "function" == typeof c ? c(b) : c.replace(/%s/i, b); }, ordinal: function (a) { return this._ordinal.replace("%d", a); }, _ordinal: "%d", _ordinalParse: /\d{1,2}/, preparse: function (a) { return a; }, postformat: function (a) { return a; }, week: function (a) { return hb(a, this._week.dow, this._week.doy).week; }, _week: { dow: 0, doy: 6 }, _invalidDate: "Invalid date", invalidDate: function () { return this._invalidDate; } }), tb = function (b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), jb(g); }, tb.suppressDeprecationWarnings = !1, tb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) { a._d = new Date(a._i + (a._useUTC ? " UTC" : "")); }), tb.min = function () { var a = [].slice.call(arguments, 0); return kb("isBefore", a); }, tb.max = function () { var a = [].slice.call(arguments, 0); return kb("isAfter", a); }, tb.utc = function (b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), jb(g).utc(); }, tb.unix = function (a) { return tb(1e3 * a); }, tb.duration = function (a, b) { var d, e, f, g, h = a, i = null; return tb.isDuration(a) ? h = { ms: a._milliseconds, d: a._days, M: a._months } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Lb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = { y: 0, d: A(i[Cb]) * d, h: A(i[Db]) * d, m: A(i[Eb]) * d, s: A(i[Fb]) * d, ms: A(i[Gb]) * d }) : (i = Mb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) { var b = a && parseFloat(a.replace(",", ".")); return (isNaN(b) ? 0 : b) * d; }, h = { y: f(i[2]), M: f(i[3]), d: f(i[4]), h: f(i[5]), m: f(i[6]), s: f(i[7]), w: f(i[8]) }) : "object" == typeof h && ("from" in h || "to" in h) && (g = r(tb(h.from), tb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new l(h), tb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e; }, tb.version = wb, tb.defaultFormat = ec, tb.ISO_8601 = function () { }, tb.momentProperties = Ib, tb.updateOffset = function () { }, tb.relativeTimeThreshold = function (b, c) { return mc[b] === a ? !1 : c === a ? mc[b] : (mc[b] = c, !0); }, tb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) { return tb.locale(a, b); }), tb.locale = function (a, b) { var c; return a && (c = "undefined" != typeof b ? tb.defineLocale(a, b) : tb.localeData(a), c && (tb.duration._locale = tb._locale = c)), tb._locale._abbr; }, tb.defineLocale = function (a, b) { return null !== b ? (b.abbr = a, Hb[a] || (Hb[a] = new j), Hb[a].set(b), tb.locale(a), Hb[a]) : (delete Hb[a], null); }, tb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) { return tb.localeData(a); }), tb.localeData = function (a) { var b; if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)
        return tb._locale; if (!u(a)) {
        if (b = J(a))
            return b;
        a = [a];
    } return I(a); }, tb.isMoment = function (a) { return a instanceof k || null != a && c(a, "_isAMomentObject"); }, tb.isDuration = function (a) { return a instanceof l; };
    for (vb = rc.length - 1; vb >= 0; --vb)
        z(rc[vb]);
    tb.normalizeUnits = function (a) { return x(a); }, tb.invalid = function (a) { var b = tb.utc(0 / 0); return null != a ? m(b._pf, a) : b._pf.userInvalidated = !0, b; }, tb.parseZone = function () { return tb.apply(null, arguments).parseZone(); }, tb.parseTwoDigitYear = function (a) { return A(a) + (A(a) > 68 ? 1900 : 2e3); }, m(tb.fn = k.prototype, { clone: function () { return tb(this); }, valueOf: function () { return +this._d + 6e4 * (this._offset || 0); }, unix: function () { return Math.floor(+this / 1e3); }, toString: function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ"); }, toDate: function () { return this._offset ? new Date(+this) : this._d; }, toISOString: function () { var a = tb(this).utc(); return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : N(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"); }, toArray: function () { var a = this; return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]; }, isValid: function () { return G(this); }, isDSTShifted: function () { return this._a ? this.isValid() && w(this._a, (this._isUTC ? tb.utc(this._a) : tb(this._a)).toArray()) > 0 : !1; }, parsingFlags: function () { return m({}, this._pf); }, invalidAt: function () { return this._pf.overflow; }, utc: function (a) { return this.zone(0, a); }, local: function (a) { return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this; }, format: function (a) { var b = N(this, a || tb.defaultFormat); return this.localeData().postformat(b); }, add: s(1, "add"), subtract: s(-1, "subtract"), diff: function (a, b, c) { var d, e, f, g = K(a, this), h = 6e4 * (this.zone() - g.zone()); return b = x(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - tb(this).startOf("month") - (g - tb(g).startOf("month")), f -= 6e4 * (this.zone() - tb(this).startOf("month").zone() - (g.zone() - tb(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : o(e); }, from: function (a, b) { return tb.duration({ to: this, from: a }).locale(this.locale()).humanize(!b); }, fromNow: function (a) { return this.from(tb(), a); }, calendar: function (a) { var b = a || tb(), c = K(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse"; return this.format(this.localeData().calendar(e, this, tb(b))); }, isLeapYear: function () { return E(this.year()); }, isDST: function () { return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone(); }, day: function (a) { var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != a ? (a = eb(a, this.localeData()), this.add(a - b, "d")) : b; }, month: ob("Month", !0), startOf: function (a) { switch (a = x(a)) {
            case "year": this.month(0);
            case "quarter":
            case "month": this.date(1);
            case "week":
            case "isoWeek":
            case "day": this.hours(0);
            case "hour": this.minutes(0);
            case "minute": this.seconds(0);
            case "second": this.milliseconds(0);
        } return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this; }, endOf: function (b) { return b = x(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms"); }, isAfter: function (a, b) { var c; return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this > +a) : (c = tb.isMoment(a) ? +a : +tb(a), c < +this.clone().startOf(b)); }, isBefore: function (a, b) { var c; return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +a > +this) : (c = tb.isMoment(a) ? +a : +tb(a), +this.clone().endOf(b) < c); }, isSame: function (a, b) { var c; return b = x(b || "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this === +a) : (c = +tb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b)); }, min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) { return a = tb.apply(null, arguments), this > a ? this : a; }), max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) { return a = tb.apply(null, arguments), a > this ? this : a; }), zone: function (a, b) { var c, d = this._offset || 0; return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = Q(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? t(this, tb.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, tb.updateOffset(this, !0), this._changeInProgress = null)), this); }, zoneAbbr: function () { return this._isUTC ? "UTC" : ""; }, zoneName: function () { return this._isUTC ? "Coordinated Universal Time" : ""; }, parseZone: function () { return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this; }, hasAlignedHourOffset: function (a) { return a = a ? tb(a).zone() : 0, (this.zone() - a) % 60 === 0; }, daysInMonth: function () { return B(this.year(), this.month()); }, dayOfYear: function (a) { var b = yb((tb(this).startOf("day") - tb(this).startOf("year")) / 864e5) + 1; return null == a ? b : this.add(a - b, "d"); }, quarter: function (a) { return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3); }, weekYear: function (a) { var b = hb(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == a ? b : this.add(a - b, "y"); }, isoWeekYear: function (a) { var b = hb(this, 1, 4).year; return null == a ? b : this.add(a - b, "y"); }, week: function (a) { var b = this.localeData().week(this); return null == a ? b : this.add(7 * (a - b), "d"); }, isoWeek: function (a) { var b = hb(this, 1, 4).week; return null == a ? b : this.add(7 * (a - b), "d"); }, weekday: function (a) { var b = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == a ? b : this.add(a - b, "d"); }, isoWeekday: function (a) { return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7); }, isoWeeksInYear: function () { return C(this.year(), 1, 4); }, weeksInYear: function () { var a = this.localeData()._week; return C(this.year(), a.dow, a.doy); }, get: function (a) { return a = x(a), this[a](); }, set: function (a, b) { return a = x(a), "function" == typeof this[a] && this[a](b), this; }, locale: function (b) { var c; return b === a ? this._locale._abbr : (c = tb.localeData(b), null != c && (this._locale = c), this); }, lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (b) { return b === a ? this.localeData() : this.locale(b); }), localeData: function () { return this._locale; }, _dateTzOffset: function () { return 15 * Math.round(this._d.getTimezoneOffset() / 15); } }), tb.fn.millisecond = tb.fn.milliseconds = ob("Milliseconds", !1), tb.fn.second = tb.fn.seconds = ob("Seconds", !1), tb.fn.minute = tb.fn.minutes = ob("Minutes", !1), tb.fn.hour = tb.fn.hours = ob("Hours", !0), tb.fn.date = ob("Date", !0), tb.fn.dates = f("dates accessor is deprecated. Use date instead.", ob("Date", !0)), tb.fn.year = ob("FullYear", !0), tb.fn.years = f("years accessor is deprecated. Use year instead.", ob("FullYear", !0)), tb.fn.days = tb.fn.day, tb.fn.months = tb.fn.month, tb.fn.weeks = tb.fn.week, tb.fn.isoWeeks = tb.fn.isoWeek, tb.fn.quarters = tb.fn.quarter, tb.fn.toJSON = tb.fn.toISOString, m(tb.duration.fn = l.prototype, { _bubble: function () { var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0; g.milliseconds = d % 1e3, a = o(d / 1e3), g.seconds = a % 60, b = o(a / 60), g.minutes = b % 60, c = o(b / 60), g.hours = c % 24, e += o(c / 24), h = o(pb(e)), e -= o(qb(h)), f += o(e / 30), e %= 30, h += o(f / 12), f %= 12, g.days = e, g.months = f, g.years = h; }, abs: function () { return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this; }, weeks: function () { return o(this.days() / 7); }, valueOf: function () { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12); }, humanize: function (a) { var b = gb(this, !a, this.localeData()); return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b); }, add: function (a, b) { var c = tb.duration(a, b); return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this; }, subtract: function (a, b) { var c = tb.duration(a, b); return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this; }, get: function (a) { return a = x(a), this[a.toLowerCase() + "s"](); }, as: function (a) {
            var b, c;
            if (a = x(a), "month" === a || "year" === a)
                return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * pb(b), "month" === a ? c : c / 12;
            switch (b = this._days + Math.round(qb(this._months / 12)), a) {
                case "week": return b / 7 + this._milliseconds / 6048e5;
                case "day": return b + this._milliseconds / 864e5;
                case "hour": return 24 * b + this._milliseconds / 36e5;
                case "minute": return 24 * b * 60 + this._milliseconds / 6e4;
                case "second": return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond": return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                default: throw new Error("Unknown unit " + a);
            }
        }, lang: tb.fn.lang, locale: tb.fn.locale, toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () { return this.toISOString(); }), toISOString: function () { var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3); return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"; }, localeData: function () { return this._locale; } }), tb.duration.fn.toString = tb.duration.fn.toISOString;
    for (vb in ic)
        c(ic, vb) && rb(vb.toLowerCase());
    tb.duration.fn.asMilliseconds = function () { return this.as("ms"); }, tb.duration.fn.asSeconds = function () { return this.as("s"); }, tb.duration.fn.asMinutes = function () { return this.as("m"); }, tb.duration.fn.asHours = function () { return this.as("h"); }, tb.duration.fn.asDays = function () { return this.as("d"); }, tb.duration.fn.asWeeks = function () { return this.as("weeks"); }, tb.duration.fn.asMonths = function () { return this.as("M"); }, tb.duration.fn.asYears = function () { return this.as("y"); }, tb.locale("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (a) { var b = a % 10, c = 1 === A(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c; } }), Jb ? module.exports = tb : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) { return c.config && c.config() && c.config().noGlobal === !0 && (xb.moment = ub), tb; }), sb(!0)) : sb();
}).call(this);
!function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["moment"], b) : "object" == typeof exports ? module.exports = b(require("moment")) : b(a.moment);
}(this, function (a) {
    "use strict";
    function b(a) { return a > 96 ? a - 87 : a > 64 ? a - 29 : a - 48; }
    function c(a) { var c, d = 0, e = a.split("."), f = e[0], g = e[1] || "", h = 1, i = 0, j = 1; for (45 === a.charCodeAt(0) && (d = 1, j = -1), d; d < f.length; d++)
        c = b(f.charCodeAt(d)), i = 60 * i + c; for (d = 0; d < g.length; d++)
        h /= 60, c = b(g.charCodeAt(d)), i += c * h; return i * j; }
    function d(a) { for (var b = 0; b < a.length; b++)
        a[b] = c(a[b]); }
    function e(a, b) { for (var c = 0; b > c; c++)
        a[c] = Math.round((a[c - 1] || 0) + 6e4 * a[c]); a[b - 1] = 1 / 0; }
    function f(a, b) { var c, d = []; for (c = 0; c < b.length; c++)
        d[c] = a[b[c]]; return d; }
    function g(a) { var b = a.split("|"), c = b[2].split(" "), g = b[3].split(""), h = b[4].split(" "); return d(c), d(g), d(h), e(h, g.length), { name: b[0], abbrs: f(b[1].split(" "), g), offsets: f(c, g), untils: h }; }
    function h(a) { a && this._set(g(a)); }
    function i(a) { return (a || "").toLowerCase().replace(/\//g, "_"); }
    function j(a) { var b, c, d; for ("string" == typeof a && (a = [a]), b = 0; b < a.length; b++)
        c = new h(a[b]), d = i(c.name), y[d] = c, n(d); }
    function k(a) { return y[i(a)] || null; }
    function l() { var a, b = []; for (a in y)
        y.hasOwnProperty(a) && y[a] && b.push(y[a].name); return b.sort(); }
    function m(a) { var b, c; for ("string" == typeof a && (a = [a]), b = 0; b < a.length; b++)
        c = a[b].split("|"), p(c[0], c[1]), p(c[1], c[0]); }
    function n(a) { if (z[a]) {
        var b, c = y[a], d = z[a];
        for (b = 0; b < d.length; b++)
            o(c, d[b]);
        z[a] = null;
    } }
    function o(a, b) { var c = y[i(b)] = new h; c._set(a), c.name = b; }
    function p(a, b) { a = i(a), y[a] ? o(y[a], b) : (z[a] = z[a] || [], z[a].push(b)); }
    function q(a) { j(a.zones), m(a.links), u.dataVersion = a.version; }
    function r(a) { return r.didShowError || (r.didShowError = !0, t("moment.tz.zoneExists('" + a + "') has been deprecated in favor of !moment.tz.zone('" + a + "')")), !!k(a); }
    function s(a) { return !(!a._a || void 0 !== a._tzm); }
    function t(a) { "undefined" != typeof console && "function" == typeof console.error && console.error(a); }
    function u() { var b = Array.prototype.slice.call(arguments, 0, -1), c = arguments[arguments.length - 1], d = k(c), e = a.utc.apply(null, b); return d && s(e) && e.add(d.parse(e), "minutes"), e.tz(c), e; }
    function v(a) { return function () { return this._z ? this._z.abbr(this) : a.call(this); }; }
    function w(a) { return function () { return this._z = null, a.apply(this, arguments); }; }
    if (void 0 !== a.tz)
        return a;
    var x = "0.2.5", y = {}, z = {}, A = a.version.split("."), B = +A[0], C = +A[1];
    (2 > B || 2 === B && 6 > C) && t("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + a.version + ". See momentjs.com"), h.prototype = { _set: function (a) { this.name = a.name, this.abbrs = a.abbrs, this.untils = a.untils, this.offsets = a.offsets; }, _index: function (a) { var b, c = +a, d = this.untils; for (b = 0; b < d.length; b++)
            if (c < d[b])
                return b; }, parse: function (a) { var b, c, d, e, f = +a, g = this.offsets, h = this.untils, i = h.length - 1; for (e = 0; i > e; e++)
            if (b = g[e], c = g[e + 1], d = g[e ? e - 1 : e], c > b && u.moveAmbiguousForward ? b = c : b > d && u.moveInvalidForward && (b = d), f < h[e] - 6e4 * b)
                return g[e]; return g[i]; }, abbr: function (a) { return this.abbrs[this._index(a)]; }, offset: function (a) { return this.offsets[this._index(a)]; } }, u.version = x, u.dataVersion = "", u._zones = y, u._links = z, u.add = j, u.link = m, u.load = q, u.zone = k, u.zoneExists = r, u.names = l, u.Zone = h, u.unpack = g, u.unpackBase60 = c, u.needsOffset = s, u.moveInvalidForward = !0, u.moveAmbiguousForward = !1;
    var D = a.fn;
    a.tz = u, a.updateOffset = function (a, b) { var c; a._z && (c = a._z.offset(a), Math.abs(c) < 16 && (c /= 60), a.zone(c, b)); }, D.tz = function (b) { return b ? (this._z = k(b), this._z ? a.updateOffset(this) : t("Moment Timezone has no data for " + b + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0; }, D.zoneName = v(D.zoneName), D.zoneAbbr = v(D.zoneAbbr), D.utc = w(D.utc);
    var E = a.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(E) ? (E.push("_z"), E.push("_a")) : E && (E._z = null), a;
});
var PredictionModel = (function () {
    function PredictionModel(rawPrediction) {
        this.Time = rawPrediction.GeneratedTimeUtc;
        this.TimeMoment = moment(this.Time);
        this.Symbol = rawPrediction.Symbol.Permtick;
        this.Direction = rawPrediction.Direction;
    }
    return PredictionModel;
}());
var RowModel = (function () {
    function RowModel(prediction) {
        this.Time = prediction.TimeMoment.format('llll');
        this.Symbol = prediction.Symbol;
        this.Direction = prediction.Direction;
    }
    return RowModel;
}());
var TableModel = (function () {
    function TableModel() {
        this._predictions = [];
        this.VisibleRows = ko.observableArray([]);
        this.Page = ko.observable(1);
        this.Pages = ko.observable();
        this.SortBy = ko.observable("none");
        this.PageSize = Number.MAX_VALUE;
    }
    TableModel.prototype.AddPrediction = function (rawPrediction) {
        var prediction = new PredictionModel(rawPrediction);
        this._predictions.push(prediction);
    };
    TableModel.prototype.SetSorting = function (sort) {
        switch (sort) {
            case "time-asc":
                this.SortBy = ko.observable("time-asc");
                this._predictions.sort(function (p1, p2) { return p1.TimeMoment - p2.TimeMoment; });
                break;
            case "time-desc":
                this.SortBy = ko.observable("time-desc");
                this._predictions.sort(function (p1, p2) { return p2.TimeMoment - p1.TimeMoment; });
                break;
        }
        this.SortBy(sort);
    };
    TableModel.prototype.SetPageSize = function (pageSize) {
        this.PageSize = pageSize;
        this.Pages(Math.ceil(this._predictions.length / this.PageSize));
    };
    TableModel.prototype.SetPage = function (page) {
        var maxPage = this.PageSize > this._predictions.length
            ? this._predictions.length
            : this.PageSize;
        var currentPageOfPredictions = this._predictions.slice((page - 1) * maxPage, maxPage * page);
        var predictionsToDisplay = currentPageOfPredictions.map(function (e) { return new RowModel(e); });
        this.VisibleRows(predictionsToDisplay);
        this.Page(page);
    };
    return TableModel;
}());
var TablesController = (function () {
    function TablesController() {
    }
    TablesController.UpdatePageSize = function (table, event) {
        console.log(table, event);
        var newPageSize = event.target.value;
        if (newPageSize == "all") {
            table.SetPageSize(Number.MAX_VALUE);
        }
        else {
            table.SetPageSize(parseInt(newPageSize));
        }
        table.SetPage(1);
    };
    TablesController.PreviousPage = function (table) {
        var currentPage = table.Page();
        if (currentPage < 2)
            return;
        table.SetPage(currentPage - 1);
    };
    TablesController.NextPage = function (table) {
        var currentPage = table.Page();
        if (currentPage >= table.Pages())
            return;
        table.SetPage(currentPage + 1);
    };
    TablesController.SortByTime = function (table) {
        var currentSort = table.SortBy();
        switch (currentSort) {
            case "time-desc":
            case "none":
                table.SetSorting("time-asc");
                break;
            case "time-asc":
                table.SetSorting("time-desc");
                break;
        }
        table.SetPage(table.Page());
    };
    return TablesController;
}());
$(window).ready(function () {
    ko.cleanNode(window.document.body);
    var rawPredictions = JSON.parse($("#json-data").html());
    var table = new TableModel();
    for (var i in rawPredictions) {
        if (rawPredictions.hasOwnProperty(i)) {
            table.AddPrediction(rawPredictions[i]);
        }
    }
    table.SetPageSize(Number.MAX_VALUE);
    table.SetPage(1);
    var example = {
        Table: table,
    };
    ko.applyBindings(example);
});
