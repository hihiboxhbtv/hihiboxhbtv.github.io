(function(window,document,undefined) {
	const 	DEBUG_EXT				= 1 << 1,
			DEBUG_INIT				= 1 << 2,
			DEBUG_RETRY				= 1 << 2,
			DEBUG_FAIL				= 1 << 3,
			DEBUG_SUCCESS			= 1 << 4,
			DEBUG_ENV				= 1 << 5,
			DEBUG_ENV_INIT			= 1 << 6,
			DEBUG_ENV_RETRY			= 1 << 7,
			DEBUG_ENV_FAIL			= 1 << 8,
			DEBUG_ENV_SUCCESS		= 1 << 9,
			DEBUG_FEATURES			= 1 << 10,
			DEBUG_FEATURES_INIT		= 1 << 11,
			DEBUG_FEATURES_RETRY	= 1 << 12,
			DEBUG_FEATURES_FAIL		= 1 << 13,
			DEBUG_FEATURES_SUCCESS	= 1 << 14,
			DEBUG_SUB				= 1 << 15,
			DEBUG_SUB_INIT			= 1 << 16,
			DEBUG_SUB_RETRY			= 1 << 17,
			DEBUG_SUB_FAIL			= 1 << 18,
			DEBUG_SUB_SUCCESS		= 1 << 19,
			DEBUG_RUNTIME			= 1 << 20,
			DEBUG_REFRESH			= 1 << 21,
			DEBUG_GA				= 1 << 22,
			DEBUG_ALL				= (1 << 23) - 1,
			DEBUG					= 
				DEBUG_ENV | 
				DEBUG_FEATURES_INIT | DEBUG_FEATURES_SUCCESS | 
				DEBUG_SUB_SUCCESS | 
				DEBUG_RUNTIME | DEBUG_REFRESH
			;
			
	/* JavaScript Date.prototype.toLocalISOString | */
	Date.prototype.toLocalISOString=function(){var e=this,t=function(e){return e<10?"0"+e:e},n=e.getTimezoneOffset(),r=(n>0?"-":"+")+t(parseInt(Math.abs(n/60)));if(n%60!=0)r+=t(Math.abs(n%60));if(n===0)r="Z";return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+r}

	var orgjQuery = (typeof jQuery !== 'undefined') ? jQuery : null;	/* backup original jQuery */
	
	/* HihiBox jQuery */
	/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
	while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
	return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
	
	/*! jQuery Easing v1.3 | http://gsgd.co.uk/sandbox/jquery/easing/ */
	jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
	
	/* JavaScript Pretty Date | http://ejohn.org/blog/javascript-pretty-date/ | Copyright (c) 2011 John Resig (ejohn.org) | Licensed under the MIT and GPL licenses. */
	function prettyDate(e){
		var t=new Date((e||"").replace(/-/g,"/").replace(/[TZ]/g," ").replace(/[+-]\d{2}$/,"")),n=((new Date).getTime()-t.getTime())/1e3,r=Math.floor(n/86400);month_diff=Math.floor(r/30);year_diff=Math.floor(month_diff/12);if(isNaN(r)||r<0)return;
		var objMsg = locale.getLocaleMsgGroup('popup.stream');
		if (objMsg.error) {
			objMsg = {
				live: "Live",
				minute_ago: "1 minute ago",	minutes_ago: "%s minutes ago",
				hour_ago: "1 hour ago",	hours_ago: "%s hours ago",
				day_ago: "Yesterday",	days_ago: "%s days ago",
				weeks_ago: "%s weeks ago",
				month_ago: "1 month ago",	months_ago: "%s months ago",
				year_ago: "1 year ago",	years_ago: "%s years ago"
			};
		}
		return 	r==0&&(n<60&&
				objMsg.live||n<300&&
				objMsg.minute_ago||n<3600&&
				locale.getLocaleMsg('popup.stream.minutes_ago',[Math.floor(n/60)])||n<7200&&
				objMsg.hour_ago||n<86400&&
				locale.getLocaleMsg('popup.stream.hours_ago',[Math.floor(n/3600)]))||r==1&&
				objMsg.day_ago||r<7&&
				locale.getLocaleMsg('popup.stream.days_ago',[r])||r<31&&
				locale.getLocaleMsg('popup.stream.weeks',[Math.ceil(r/7)])||month_diff==1&&
				objMsg.month_ago||month_diff<12&&
				locale.getLocaleMsg('popup.stream.months_ago',[month_diff])||year_diff==1&&
				objMsg.year_ago||
				locale.getLocaleMsg('popup.stream.years_ago',[year_diff])
	}
	
	if(typeof jQuery!="undefined") jQuery.fn.prettyDate=function(){return this.each(function(){
		var e=$(this).attr("lastbroadcast");
		var t=prettyDate(e);
		if(t)jQuery(this).text(t).attr("title",locale.getLocaleMsg('popup.stream.last_broadcast',[e]))
	})};
	
	var $ = jQuery.noConflict();
	
	/* restore original jQuery */
	if (typeof jQuery !== 'undefined' && orgjQuery != null) jQuery = orgjQuery;

	var editorExtensionId = "iplcanaadjphhokckfocgommkecbbnfg";
	var host = 'http://hihiboxhbtv.github.io/core';
	var enableGA = true;
	var versionInfo = {
		name: 'HihiBox',
		credits: {
			developer: ["VannZic", "Lemon"],
			specialThanks: ["希治閣", "小維"]
		},
		coreVersion: 'v1.7.0',
		lastUpdate: '2014-05-11'
	};
	var htmlEncode = function(value){
		return (value) ? $('<div />').text(value).html() : '';
	}
	var htmlDecode = function(value) {
		return (value) ? $('<div />').html(value).text() : '';
	}
	var HihiBox = function(options) {
		var _defaultSettings = {
			debug: DEBUG,
			id: {
				holder: 'hhb-holder',
				header: 'hhb-header',
				button: 'hhb-button',
				playerBookmark: 'hhb-player-bookmark',
				genreContainer: 'hhb-genrelist',
				iconset: 'hhb-iconset',
				iconMsgBox: 'hhb-msgbox',
				darkModeBtn: 'hhb-darkmode',
				sortModeBtn: 'hhb-sortmode',
				resetBtn: 'hhb-reset',
				bookmarkBtn: 'hhb-bookmark'
			},
			cssClass: {
				inited: 'hhb-inited',
				active: 'hhb-active',
				genre: 'hhb-genre',
				icon: 'hhb-icon',
				iconHide: 'hhb-hide',
				iconMissing: 'hhb-missing',
				checkedMsg: 'hhb-msg',
				checkedName: 'hhb-name',
				msgIcon: 'hhb-msgicon',
				msgIconResized: 'hhb-resized',
				resized: 'hhb-resized',
				orgSize: 'hhb-org-size',
				nameBanner: 'hhb-name-banner',
				nameName: 'hhb-name-name',
				darkMode: 'hhb-darkmode',
				filterMatch: 'hhb-filter-match',
				filterNotMatch: 'hhb-filter-not-match',
				filterSelected: 'hhb-filter-selected'
			},
			selector: {
				holder: '#hhb-holder',
				header: '#hhb-header',
				button: '#hhb-button',
				playerBookmark: '#hhb-player-bookmark',
				genreContainer: '#hhb-genrelist',
				genreContainerGenre: '#hhb-genrelist .hhb-genre',
				genre: '.hhb-genre',
				iconset: '#hhb-iconset',
				iconsetIcon: '#hhb-iconset .hhb-icon',
				iconMissing: '.hhb-missing',
				icon: '.hhb-icon',
				iconMsgBox: '#hhb-iconset #hhb-msgbox',
				filterMatchIcon: '.hhb-icon.hhb-filter-match',
				filterSelectedIcon: '#hhb-iconset .hhb-icon.hhb-filter-selected',
				msgIcon: '.hhb-msgicon',
				msgIconResized: '.hhb-msgicon.hhb-resized',
				darkModeBtn: '#hhb-darkmode',
				sortModeBtn: '#hhb-sortmode',
				resetBtn: '#hhb-reset',
				bookmarkBtn: '#hhb-bookmark'
			},
			delay: {
				analyzeBuiltinIcon: 200,
				analyzePlatformIcon: 500,
				analyzeGJTVIcon: 1000,
				detectUI: 60000,
				bindHolderUI: 1000,
				bindButtonUI: 1000,
				activateRebindUIBtn: 1000,
				bindHolderToggleBtn: 1000,
				activateSortMode: 1000,
				toggleTimestamps: 1000,
				bindGenreList: 1000,
				bindIconList: 1000,
				bindDarkModeBtn: 1000,
				bindBookmarkBtn: 1000,
				bindPlayerBookmarkBtn: 1000,
				sortIconList: 1000,
				filter: 300,
				parseIncoming: 50,
			},
			filter: {
				finder: /(^|)[^\s]+(?!\s)$/,
				minLength: 1,
				pageSize: 10
			},
			limit: {
				msgIconHeight: 60,
				analyzeBuildinIcon: 30,
				analyzePlatformIcon: 30,
				analyzeGJTVIcon: 30,
				activateRebindUIBtn: 30,
				bindPlayerBookmarkBtn: 30
			},
			supportedPlatform: ['hitbox','twitch','justin','ustream'],
			listGenre: [],
			listIcon: [],
			defaultConfig: {
				genre: 'HKG',
				darkMode: 'light',
				sortMode: 'usage'
			},
			config: {
				genre: 'HKG',
				darkMode: 'light',
				sortMode: 'usage'
			}
		};
		var _settings = $.extend(_defaultSettings, options);
		
		/* Private variables */
		var _this = this,
			_hhb = this,
			locale = new Locale();
			debug = _settings.debug,
			id = _settings.id,
			cssClass = _settings.cssClass,
			selector = _settings.selector,
			delay = _settings.delay,
			filter = _settings.filter,
			limit = _settings.limit,
			supportedPlatform = _settings.supportedPlatform,
			listGenre = _settings.listGenre,
			listIcon = _settings.listIcon,
			defaultConfig = _settings.defaultConfig,
			config = _settings.config,
			settings = {
				locale: 0,
				default_genre: 'HKG',
				last_genre: 'HKG',
				dark_mode: true,
				icon_sort_by: 1
			},
			env = {
				hasjQuery: false,
				isExcluded: true,
				platform: '',
				channel: '',
				userid: '',
				
				features: [],
				loadedFeatures: [],
				listeningIconListData: false,
				listeningNameBannerData: false,
				isInitialize: false,
					isIconListDataInited: false,
						iconInjected: false,
						builtinIconLoaded: false,
						platformIconLoaded: false,
						gjtvIconLoaded: false,
					isUserInterfaceInited: false,
						holderUIBinded: false,
						buttonUIBinded: false,
					isEmoticonInited: false,
						sortModeActivated: false,
					isNameBannerInited: false,
						nameBannerEnabled: false,
					isDarkModeInited: false,
						darkModeActivated: false,
					isBookmarkInited: false,
						playerBookmarkBtnActivated: false,
						bookmarkBtnActivated: false,
					isIncomingParserInited: false,
				
				settingsLoaded: false,
				usageLoaded: false
			},
			loadingStatus = {},
			retryCount = {
				analyzeBuiltinIcon: 0,
				analyzePlatformIcon: 0,
				analyzeGJTVIcon: 0,
				activateRebindUIBtn: 0,
				bindHolderUI: 0,
				bindButtonUI: 0,
				bindHolderToggleBtn: 0,
				activateSortMode: 0,
				bindDarkModeBtn: 0,
				bindBookmarkBtn: 0,
				bindPlayerBookmarkBtn: 0,
				detectUI: 0
			},
			timestamps = {
				sortIconList: 0
			},
			version = {
				genreList: { pending: 0, current: 0 },
				iconList: { pending: 0, current: 0 },
				sort: { pending: 0, current: 0 },
				usage: { pending: 0, current: 0 }
			},
			timer = {
				initialize: 				{ start: 0, end: 0, duration: 0 },
				initIconListData: 			{ start: 0, end: 0, duration: 0 },
					injectIcon: 			{ start: 0, end: 0, duration: 0 },
					analyzeBuiltinIcon: 	{ start: 0, end: 0, duration: 0 },
					analyzePlatformIcon: 	{ start: 0, end: 0, duration: 0 },
					analyzeGJTVIcon: 		{ start: 0, end: 0, duration: 0 },
				initUserInterface: 			{ start: 0, end: 0, duration: 0 },
					bindUI:					{ start: 0, end: 0, duration: 0 },
					bindHolderUI:			{ start: 0, end: 0, duration: 0 },
					bindButtonUI:			{ start: 0, end: 0, duration: 0 },
				initEmoticon: 				{ start: 0, end: 0, duration: 0 },
					bindHolderToggleBtn: 	{ start: 0, end: 0, duration: 0 },
					activateSortMode: 		{ start: 0, end: 0, duration: 0 },
				initNameBanner: 			{ start: 0, end: 0, duration: 0 },
					analyzeNameBanner: 		{ start: 0, end: 0, duration: 0 },
				initDarkMode: 				{ start: 0, end: 0, duration: 0 },
					bindDarkModeBtn: 		{ start: 0, end: 0, duration: 0 },
				initBookmark: 				{ start: 0, end: 0, duration: 0 },
					bindPlayerBookmarkBtn: 	{ start: 0, end: 0, duration: 0 },
					bindBookmarkBtn: 		{ start: 0, end: 0, duration: 0 },
				initIncomingParser:			{ start: 0, end: 0, duration: 0 },
				
				sort: { start: 0, end: 0, duration: 0 }
			},
			platformObj = null,
			listPendingUsage = {},
			listUsage = {},
			listParse = [],
			listLookup = {},
			listNameBanner = {},
			nextIconID = 1,
			isFiltering = false,
			timerFilter = null,
			currFilterCodeHead = '';
			
		/* Public Variables */
		_hhb.cssClass = cssClass;
		_hhb.selector = selector;
		_hhb.limit = limit;
		
		/* Private platform object */
		var _platformObj = {
			default: {
				supportedFeatures: ['iconlist_data','ui','emoticon','name_banner','darkmode','bookmark','incoming_parser'],
				genHolder: function(idObj,infoObj) {
					return $('<div id="'+idObj.holder+'">'+
								'<div id="hhb-header">'+
								'<div id="'+idObj.bookmarkBtn+'" hhb-locale-title="{{iconlist.bookmark}}" title="Bookmark" class="funcIcon">&nbsp;</div>'+
								'<div id="'+idObj.darkModeBtn+'" class="funcIcon">&nbsp;</div>'+
								'<div id="'+idObj.sortModeBtn+'" class="funcIcon">&nbsp;</div>'+
								'<span class="version" title="">'+infoObj.coreVersion+'</span>'+
								'<span class="name" title="">'+infoObj.name+'</span>'+
								'<a href="http://bit.ly/hihiboxhbtv" target="_new" class="hhb"><div class="icon hhb" hhb-locale-title="{{iconlist.site}}" title="Website"></div></a>'+
								'<a href="https://www.facebook.com/hihiboxhbtv" target="_new" class="fb"><div class="icon fb" hhb-locale-title="{{iconlist.fbpage}}" title="Facebook Page"></div></a></div>'+
								'<div id="'+idObj.genreContainer+'"></div>'+
								'<div id="'+idObj.iconset+'"></div>'+
							'</div>');
				},
				genPlayerBookmarkBtn: function(idBtn) {
					return $('<div id="'+idBtn+'" class="funcIcon" hhb-locale-title="{{info.name}} - {{iconlist.bookmark}}">&nbsp;</div>');
				},
				bindNameBanner: function(names) {
					var bicount = 0;
					if (names.length > 0) {
						var galist = {}, dur = 400;
						names.each(function() {
							$(this).addClass(cssClass.checkedName);
							var namestr = $(this).text();
							var nameid = namestr.trim().toLowerCase();
							var nb = listNameBanner[nameid];
							if (nb && nb.cssClass) {
								var bspan = "<span class='"+nb.cssClass+"'>&nbsp;</span>";
								var nspan = "<span class='"+cssClass.nameName+"'>"+namestr+"</span>";
								$(this).text('');
								var _pspan = $(this);
								$(bspan).animate(
										{ 'width': [nb.width,'px'].join('') },
										{ easing: "easeOutExpo", duration: dur }
									).prependTo($(this));
								var $nspan = $(nspan).appendTo($(this))
								$nspan.width($nspan.width())
									.animate(
										{  'width': '1px' },
										{ easing: "easeOutExpo", duration: dur }
									);
								if (env.gjtvIconLoaded) {
									var gjtvnb = $(this).find('.custom_Nickname');
									if (gjtvnb.length>0) gjtvnb.detach();
								}
								bicount++;
								
								/* Google Analytics - name banner */
								var id = [nameid,env.channel,env.platform].join('@');
								galist[id] = (galist[id]) ? galist[id]+1 : 1;
							}
						});
						/* Google Analytics - name banner */
						$.each(galist,function(key,obj) {
							_gaTracker('nameBanner','show',key,obj);
						});
					}
					return {
						name: names.length,
						binded: bicount
					};
				}
			},
			hitbox: function() {
				/* Private variables */
				var _platform = this,
					id = 'hitbox',
					supportedFeatures = ['ui','emoticon','name_banner','darkmode','bookmark'],
					cssClass = $.extend(_hhb.cssClass,{
						darkMode: 'hhb-darkmode'
					}),
					selector = $.extend(_hhb.selector,{
						darkModeAcceptor: 'body',
						showChatBtn: '.showChat',
						holderContainer: '.chatContent',
						buttonContainer: '.chatInput',
						msgBox: '#chatInput',
						newMsg: '.chatBody .message:not(.hhb-msg)',
						newName: '.chatBody .name:not(.hhb-name)',
						timestampsBox: '#timestampsBox',
						userName: '.navItemsUser .item.user:first-child span',
						player: 'mediaplayer'
					}),
					limit = $.extend(_hhb.limit,{});
				/* Public methods */
				/* Initialize */
				_platform.isExcluded = function() { var m=document.URL.match(/^https?\:\/\/.+\.hitbox\.tv\/(?:dashboard|settings)\//i);return ((m) ? m.length>0 : false); }
				_platform.getChannelID = function() { var m = document.URL.match(/^https?\:\/\/.+\.hitbox\.tv\/(?:embed\/|embedchat\/)?(\w+)/i); return (m && m.length>=2) ? m[1] : ''; }
				_platform.getUsername = function() { return $(selector.userName).text().trim().toLowerCase(); };
				_platform.getFeatures = function() {	return supportedFeatures;	};
				_platform.initialize = function() { $('body').addClass('hhb-pf-hitbox'); };
				_platform.getHolderContainer = function() {	return $(selector.holderContainer);	};
				_platform.getButtonContainer = function() {	return $(selector.buttonContainer);	};
				_platform.getButtonFront = function() {	return [];	};
				_platform.genPlayerBookmarkBtn = function(idBtn) { return _platformObj.default.genPlayerBookmarkBtn(idBtn); };
				_platform.genHolder = function(idObj,infoObj) { return _platformObj.default.genHolder(idObj,infoObj); };
				_platform.genToggleButton = function(id) {
					return $('<div id="'+id+'" class="icon-cog hoverG2" title="HihiBox"></div>');
				};
				_platform.onBindedToggleButton = function() {};
				_platform.getShowChatBtn = function() {	return $(selector.showChatBtn);	};
				_platform.toggleTimestamps = function(act) {
					var scope = angular.element($(selector.timestampsBox)).scope();
					if (!scope) return false;
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
					return true;
				};
				_platform.getPlatformIcon = function() {
					var list = [], dgenre = [].concat('HBTV');
					if (emotify) {
						var emoticons = emotify.emoticons();
						for (var key in emoticons) {
							var emo = emoticons[key].concat();
							var tsrc = emo.shift();
							var ttitle = emo.shift();
							var tcode = [];
							tcode = tcode.concat(htmlDecode(key));							
							while (acode = emo.shift()) {
								tcode = tcode.concat(($.inArray(acode,tcode) < 0) ? htmlDecode(acode) : []);
							}
							list.push({
								code: tcode,
								src: tsrc,
								width: 0, height: 0,
								genre: dgenre,
							});
						}
					}
					return list;
				};
				_platform.getPlayer = function() {
					var selectors = [].concat(selector.player), $tplayer = $();
					$.each(selectors,function(idx,selector) {
						$tplayer = $(selector);
						if ($tplayer.length>0) return false;
					});
					return $tplayer;
				}
			
				/* Icon emotify */
				_platform.injectIcon = function(iconlist) {
					var iconlist = [].concat(iconlist);
					var list = [];
					var count = 0;
					while (icon = iconlist.shift()) {
						var code = [].concat(icon.code);
						for (var i=0;i<code.length;i++) {
							var key = htmlEncode(code[i]);
							if ($.inArray(key,list) < 0) {
								var item = [].concat(icon.src,code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,''));
								item.width = (icon.width > 0) ? icon.width : 0;
								item.height = (icon.height > 0) ? icon.height : 0;
								while (tcode = code.shift()) {
									item.push(htmlEncode(tcode));
								}
								list[key] = item;
								count++;
							}
						}
					}
					if (count > 0) {
						var classMsgIcon = cssClass.msgIcon,
							classResized = cssClass.resized
							limitHeight = limit.msgIconHeight;
						/* Re-define window.emotify */
						window.emotify=function(e){var t,n,r={},i=[];t=function(e,t){t=t||function(e,t,n,r,i,s){t=t.replace(/"/g,"&quot;").replace(/</g,"&lt;");return'<img src="'+e+'" title="'+t+'" class="'+classMsgIcon+(r>limitHeight?" "+classResized:"")+'"/>'};var s=[],o=[].concat(e.match(/<\s*(\w+)\s[^>]*>(.*?)<\s*\/\s*\1>/gi));for(var u=0;u<o.length;u++){s[u]=o[u];e=e.replace(s[u],"___hhb_html_"+u+"___")}e=e.replace(n,function(e,n,s){var o=0,u=s,a=r[s];if(!a){while(o<i.length&&!i[o].regexp.test(s)){o++}u=i[o].name;a=r[u]}return a?n+t(a[0],a[1],a.width,a.height,u,s):e});for(var u=0;u<s.length;u++){e=e.replace(new RegExp("___hhb_html_"+u+"___","g"),s[u])}return e};t.emoticons=function(){var e=Array.prototype.slice.call(arguments),t=typeof e[0]==="string"?e.shift():"",s=typeof e[0]==="boolean"?e.shift():false,o=e[0],u,a=[],f,l,c;if(o){if(s){r={};i=[]}for(u in o){r[u]=o[u];r[u][0]=t+r[u][0]}for(u in r){if(r[u].length>2){f=r[u].slice(2).concat(u);l=f.length;while(l--){f[l]=f[l].replace(/(\W)/g,"\\$1")}c=f.join("|");i.push({name:u,width:r[u].width,height:r[u].height,regexp:new RegExp("^"+c+"$")})}else{c=u.replace(/(\W)/g,"\\$1")}a.push(c)}n=new RegExp("(^|)("+a.join("|")+")(?=(?:$|))","g")}return r};return t}(_hhb);
						
						var ijlist = emotify.emoticons(true,list);
					}
					return count;
				};
				_platform.getNewMsg = function() {	return $(selector.newMsg);	};
				_platform.bindResizer = function() {
					var msgs = _platform.getNewMsg();
					var bicount = 0, bircount = 0;
					if (msgs.length > 0) {
						var $msgIcon = msgs.addClass(cssClass.checkedMsg).children(selector.msgIcon);
						bircount = $msgIcon.filter(selector.msgIconResized)
										.click(function() {
											$(this).toggleClass(cssClass.orgSize);
										}).length;
						bicount = $msgIcon.length;
					}
					return {
						msg: msgs.length, 
						emotified: bicount,
						resized: bircount
					};
				};
				_platform.getMsgBox = function() {	return $(selector.msgBox);	};
				_platform.getMsgInput = function() {	return $(selector.msgBox).val();	};
				_platform.insertText = function(text) {	_platform.replaceText(text);	};
				_platform.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						var strPosE = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							var tlength = range.text.length;
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length-tlength;
							strPosE = range.text.length;
						} else if (br == "ff") {
							strPos = txtarea.selectionStart;
							strPosE = txtarea.selectionEnd;
						}

						var front = (txtarea.value).substring(0,strPos).trim();  
						var back = (txtarea.value).substring(strPosE,txtarea.value.length);
						text = ((front.length>0)?' ':'')+text;
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						} else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
						
						/* update angular */
						var scope = angular.element($msgBox).scope();
						scope.$apply(function(){
							scope.$parent.msgTxt = txtarea.value;
						});
					}
				}
			
				/* Name banner + Badge */
				_platform.getNewNames = function() {	return $(selector.newName);	};
				_platform.bindNameBanner = function() {
					var names = _platform.getNewNames();
					return _platformObj.default.bindNameBanner(names);
				};
				_platform.genBadgeCss = function(badges) {
					var style = '';
					var broadcaster = $.extend({ img: null, width: 0, height: 0 },badges.broadcaster);
					var moderator = $.extend({ img: null, width: 0, height: 0 },badges.moderator);
					
					if (broadcaster.img && broadcaster.width>0 && broadcaster.height>0) {
						style += [	
							'.hhb-pf-hitbox .chatBody .ownerBadge {',
								'margin-right: 3px;',
								'vertical-align:bottom;',
								'width:',broadcaster.width,'px;',
								'height:',broadcaster.height,'px;',
								'content: url(',broadcaster.img,') no-repeat left bottom;',
							'}'].join('');
					}
					if (moderator.img && moderator.width>0 && moderator.height>0) {
						style += [	
							'.hhb-pf-hitbox .chatBody .modBadge {',
								'color: transparent;',
								'margin-right: 3px;',
								'width:',moderator.width,'px;',
								'height:',moderator.height,'px;',
								'background: url(',moderator.img,') no-repeat center center;',
							'}'].join('');
					}
					return style;
				};
			},
			twitch: function() {
				/* Private variables */
				var _platform = this,
					id = 'twitch',
					supportedFeatures = ['ui','emoticon','name_banner','darkmode','bookmark'],
					cssClass = $.extend(_hhb.cssClass,{
						darkMode: 'hhb-darkmode'
					}),
					selector = $.extend(_hhb.selector,{
						darkModeAcceptor: 'body',
						showChatBtn: 'a.button-simple.primary:contains("Show Chat")',
						holderContainer: '.chat-messages',
						buttonContainer: '.chat-option-buttons',
						buttonFront: '.viewers.button.normal_button',
						msgBox: 'textarea[placeholder="Send a message"]',
						newMsg: 'span.message:not(.hhb-msg)',
						newName: '.chat-line .from:not(.hhb-name)',
						emoticon: 'span.emoticon',
						timestampsBox: '.chat-menu-content .ember-checkbox:contains("Time Stamps")',
						userName: '#nav_personal .username',
						player: 'object[data*="TwitchPlayer.swf"]'
					}),
					limit = $.extend(_hhb.limit,{});
				/* Public methods */
				/* Initialize */
				_platform.isExcluded = function() {  var m=document.URL.match(/^https?\:\/\/.+\.twitch\.tv\/(?:assets|crossdomain|settings|subscriptions|inbox|directory|message)/i);return ((m) ? m.length>0 : false); }
				_platform.getChannelID = function() { var m = document.URL.match(/^https?\:\/\/.+\.twitch\.tv\/(\w+)/i); return (m && m[1]) ? m[1] : ''; }
				_platform.getUsername = function() { return $(selector.userName).text().trim().toLowerCase(); };
				_platform.getFeatures = function() {	return supportedFeatures;	};
				_platform.initialize = function() { $('body').addClass('hhb-pf-twitch'); };
				_platform.getHolderContainer = function() {	return $(selector.holderContainer);	};
				_platform.getButtonContainer = function() {	return $(selector.buttonContainer);	};
				_platform.getButtonFront = function() {	return $(selector.buttonFront);	};
				_platform.genPlayerBookmarkBtn = function(idBtn) { return _platformObj.default.genPlayerBookmarkBtn(idBtn); };
				_platform.genHolder = function(idObj,infoObj) { return _platformObj.default.genHolder(idObj,infoObj); };
				_platform.genToggleButton = function(id) {
					return $('<button id="'+id+'" class="button normal_button tooltip" original-title="HihiBox" title="HihiBox"></div>');
				};
				_platform.onBindedToggleButton = function() {
					var btnc = $('.chat-option-buttons button').length;
					var btnw = 40;
					
					$(".send-chat-button").css("left", (btnw*btnc)+"px");
				};
				_platform.getShowChatBtn = function() {	return $(selector.showChatBtn);	};
				_platform.toggleTimestamps = function(act) {	/* Not Applicable */
					/*
					var scope = angular.element($(_platform.selector.timestampsBox)).scope();
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
					*/
					return true;
				};
				_platform.getPlatformIcon = function() {
					var list = [], tgenre = [].concat('TTV');
					try {
						var emoticonsController = window.App.__container__.lookup('controller:emoticons');
						var emoteSets = emoticonsController.emoticonSets;
						var defaultSet = emoteSets['default'].sort();
						if(!defaultSet) return;
					} catch(e) {
						return;
					}
					
					var $style = $("style");
					var ttvcss = '';
					for (var i=0;i<$style.length;i++) if ($style.eq(i).text().indexOf('.emo-') != -1) ttvcss += $style.eq(i).text();
					
					/* ------------------------------------------------------------------
					/* randexp v0.3.3
					/* Create random strings that match a given regular expression.
					/*
					/* Copyright (C) 2013 by Roly Fentanes (https://github.com/fent)
					/* MIT License
					/* http://github.com/fent/randexp.js/raw/master/LICENSE
					/* ------------------------------------------------------------------ */
					!function(){var a=function(b,c){var d=a.resolve(b,c||"/"),e=a.modules[d];if(!e)throw new Error("Failed to resolve module "+b+", tried "+d);var f=e._cached?e._cached:e();return f};a.paths=[],a.modules={},a.extensions=[".js",".coffee"],a._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},a.resolve=function(){return function(b,c){function h(b){if(a.modules[b])return b;for(var c=0;c<a.extensions.length;c++){var d=a.extensions[c];if(a.modules[b+d])return b+d}}function i(b){b=b.replace(/\/+$/,"");var c=b+"/package.json";if(a.modules[c]){var e=a.modules[c](),f=e.browserify;if(typeof f=="object"&&f.main){var g=h(d.resolve(b,f.main));if(g)return g}else if(typeof f=="string"){var g=h(d.resolve(b,f));if(g)return g}else if(e.main){var g=h(d.resolve(b,e.main));if(g)return g}}return h(b+"/index")}function j(a,b){var c=k(b);for(var d=0;d<c.length;d++){var e=c[d],f=h(e+"/"+a);if(f)return f;var g=i(e+"/"+a);if(g)return g}var f=h(a);if(f)return f}function k(a){var b;a==="/"?b=[""]:b=d.normalize(a).split("/");var c=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";c.push(f)}return c}c||(c="/");if(a._core[b])return b;var d=a.modules.path(),e=c||".";if(b.match(/^(?:\.\.?\/|\/)/)){var f=h(d.resolve(e,b))||i(d.resolve(e,b));if(f)return f}var g=j(b,e);if(g)return g;throw new Error("Cannot find module '"+b+"'")}}(),a.alias=function(b,c){var d=a.modules.path(),e=null;try{e=a.resolve(b+"/package.json","/")}catch(f){e=a.resolve(b,"/")}var g=d.dirname(e),h=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(a.modules);for(var i=0;i<h.length;i++){var j=h[i];if(j.slice(0,g.length+1)===g+"/"){var k=j.slice(g.length);a.modules[c+k]=a.modules[g+k]}else j===g&&(a.modules[c]=a.modules[g])}},a.define=function(b,c){var d=a._core[b]?"":a.modules.path().dirname(b),e=function(b){return a(b,d)};e.resolve=function(b){return a.resolve(b,d)},e.modules=a.modules,e.define=a.define;var f={exports:{}};a.modules[b]=function(){return a.modules[b]._cached=f.exports,c.call(f.exports,e,f,f.exports,d,b),a.modules[b]._cached=f.exports,f.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),a.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),a.define("/node_modules/ret/package.json",function(a,b,c,d,e){b.exports={main:"./lib/index.js"}}),a.define("/node_modules/ret/lib/index.js",function(a,b,c,d,e){var f=a("./util"),g=a("./types"),h=a("./sets"),i=a("./positions");b.exports=function(a){var b=0,c,d,e={type:g.ROOT,stack:[]},j=e,k=e.stack,l=[],m=function(b){f.error(a,"Nothing to repeat at column "+(b-1))},n=f.strToChars(a);c=n.length;while(b<c){d=n[b++];switch(d){case"\\":d=n[b++];switch(d){case"b":k.push(i.wordBoundary());break;case"B":k.push(i.nonWordBoundary());break;case"w":k.push(h.words());break;case"W":k.push(h.notWords());break;case"d":k.push(h.ints());break;case"D":k.push(h.notInts());break;case"s":k.push(h.whitespace());break;case"S":k.push(h.notWhitespace());break;default:/\d/.test(d)?k.push({type:g.REFERENCE,value:parseInt(d,10)}):k.push({type:g.CHAR,value:d.charCodeAt(0)})}break;case"^":k.push(i.begin());break;case"$":k.push(i.end());break;case"[":var o;n[b]==="^"?(o=!0,b++):o=!1;var p=f.tokenizeClass(n.slice(b),a);b+=p[1],k.push({type:g.SET,set:p[0],not:o});break;case".":k.push(h.anyChar());break;case"(":var q={type:g.GROUP,stack:[],remember:!0};d=n[b],d==="?"&&(d=n[b+1],b+=2,d==="="?q.followedBy=!0:d==="!"?q.notFollowedBy=!0:d!==":"&&f.error(a,"Invalid group, character '"+d+"' after '?' at column "+(b-1)),q.remember=!1),k.push(q),l.push(j),j=q,k=q.stack;break;case")":l.length===0&&f.error(a,"Unmatched ) at column "+(b-1)),j=l.pop(),k=j.options?j.options[j.options.length-1]:j.stack;break;case"|":j.options||(j.options=[j.stack],delete j.stack);var r=[];j.options.push(r),k=r;break;case"{":var s=/^(\d+)(,(\d+)?)?\}/.exec(n.slice(b)),t,u;s!==null?(t=parseInt(s[1],10),u=s[2]?s[3]?parseInt(s[3],10):Infinity:t,b+=s[0].length,k.push({type:g.REPETITION,min:t,max:u,value:k.pop()})):k.push({type:g.CHAR,value:123});break;case"?":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:1,value:k.pop()});break;case"+":k.length===0&&m(b),k.push({type:g.REPETITION,min:1,max:Infinity,value:k.pop()});break;case"*":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:Infinity,value:k.pop()});break;default:k.push({type:g.CHAR,value:d.charCodeAt(0)})}}return l.length!==0&&f.error(a,"Unterminated group"),e},b.exports.types=g}),a.define("/node_modules/ret/lib/util.js",function(a,b,c,d,e){var f=a("./types"),g=a("./sets"),h="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",i={0:0,t:9,n:10,v:11,f:12,r:13};c.strToChars=function(a){var b=/(\[\\b\])|\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;return a=a.replace(b,function(a,b,c,d,e,f,g){var j=b?8:c?parseInt(c,16):d?parseInt(d,16):e?parseInt(e,8):f?h.indexOf(f):g?i[g]:undefined,k=String.fromCharCode(j);return/[\[\]{}\^$.|?*+()]/.test(k)&&(k="\\"+k),k}),a},c.tokenizeClass=function(a,b){var d=[],e=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g,h,i;while((h=e.exec(a))!=null)if(h[1])d.push(g.words());else if(h[2])d.push(g.ints());else if(h[3])d.push(g.whitespace());else if(h[4])d.push(g.notWords());else if(h[5])d.push(g.notInts());else if(h[6])d.push(g.notWhitespace());else if(h[7])d.push({type:f.RANGE,from:(h[8]||h[9]).charCodeAt(0),to:h[10].charCodeAt(0)});else{if(!(i=h[12]))return[d,e.lastIndex];d.push({type:f.CHAR,value:i.charCodeAt(0)})}c.error(b,"Unterminated character class")},c.error=function(a,b){throw new SyntaxError("Invalid regular expression: /"+a+"/: "+b)}}),a.define("/node_modules/ret/lib/types.js",function(a,b,c,d,e){b.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}}),a.define("/node_modules/ret/lib/sets.js",function(a,b,c,d,e){var f=a("./types"),g=function(){return[{type:f.RANGE,from:48,to:57}]},h=function(){return[{type:f.RANGE,from:97,to:122},{type:f.RANGE,from:65,to:90}].concat(g())},i=function(){return[{type:f.CHAR,value:12},{type:f.CHAR,value:10},{type:f.CHAR,value:13},{type:f.CHAR,value:9},{type:f.CHAR,value:11},{type:f.CHAR,value:160},{type:f.CHAR,value:5760},{type:f.CHAR,value:6158},{type:f.CHAR,value:8192},{type:f.CHAR,value:8193},{type:f.CHAR,value:8194},{type:f.CHAR,value:8195},{type:f.CHAR,value:8196},{type:f.CHAR,value:8197},{type:f.CHAR,value:8198},{type:f.CHAR,value:8199},{type:f.CHAR,value:8200},{type:f.CHAR,value:8201},{type:f.CHAR,value:8202},{type:f.CHAR,value:8232},{type:f.CHAR,value:8233},{type:f.CHAR,value:8239},{type:f.CHAR,value:8287},{type:f.CHAR,value:12288}]};c.words=function(){return{type:f.SET,set:h(),not:!1}},c.notWords=function(){return{type:f.SET,set:h(),not:!0}},c.ints=function(){return{type:f.SET,set:g(),not:!1}},c.notInts=function(){return{type:f.SET,set:g(),not:!0}},c.whitespace=function(){return{type:f.SET,set:i(),not:!1}},c.notWhitespace=function(){return{type:f.SET,set:i(),not:!0}},c.anyChar=function(){return{type:f.SET,set:[{type:f.CHAR,value:10}],not:!0}}}),a.define("/node_modules/ret/lib/positions.js",function(a,b,c,d,e){var f=a("./types");c.wordBoundary=function(){return{type:f.POSITION,value:"b"}},c.nonWordBoundary=function(){return{type:f.POSITION,value:"B"}},c.begin=function(){return{type:f.POSITION,value:"^"}},c.end=function(){return{type:f.POSITION,value:"$"}}}),a.define("/randexp.js",function(a,b,c,d,e){function h(a,b){return a+Math.floor(Math.random()*(1+b-a))}function i(a){return a+(97<=a&&a<=122?-32:65<=a&&a<=90?32:0)}function j(a,b,c,d){return a<=c&&c<=b?{from:c,to:Math.min(b,d)}:a<=d&&d<=b?{from:Math.max(a,c),to:d}:!1}function k(a,b){var c,d,e,f;if((d=a.length)!==b.length)return!1;for(c=0;c<d;c++){f=a[c];for(e in f)if(f.hasOwnProperty(e)&&f[e]!==b[c][e])return!1}return!0}function l(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];if(e.not!==b.not&&k(e.set,b.set))return!0}return!1}function m(a,b,c){var d,e,f=[],h=!1;for(var k=0,n=a.length;k<n;k++){d=a[k];switch(d.type){case g.CHAR:e=d.value;if(e===b||c&&i(e)===b)return!0;break;case g.RANGE:if(d.from<=b&&b<=d.to||c&&((e=j(97,122,d.from,d.to))!==!1&&e.from<=b&&b<=e.to||(e=j(65,90,d.from,d.to))!==!1&&e.from<=b&&b<=e.to))return!0;break;case g.SET:f.length>0&&l(f,d)?h=!0:f.push(d);if(!h&&m(d.set,b,c)!==d.not)return!0}}return!1}function n(a,b){return String.fromCharCode(b&&Math.random()>.5?i(a):a)}function o(a,b,c){var d,e,f,i,j,k,l;switch(a.type){case g.ROOT:case g.GROUP:if(a.notFollowedBy)return"";a.remember&&(d=b.push(!1)-1),e=a.options?a.options[Math.floor(Math.random()*a.options.length)]:a.stack,f="";for(j=0,k=e.length;j<k;j++)f+=o.call(this,e[j],b);return a.remember&&(b[d]=f),f;case g.POSITION:return"";case g.SET:c=!!c,l=c!==a.not;if(!l)return a.set.length?o.call(this,a.set[Math.floor(Math.random()*a.set.length)],b,l):"";for(;;){var p=this.anyRandChar(),q=p.charCodeAt(0);if(m(a.set,q,this.ignoreCase))continue;return p}break;case g.RANGE:return n(h(a.from,a.to),this.ignoreCase);case g.REPETITION:i=h(a.min,a.max===Infinity?a.min+this.max:a.max),f="";for(j=0;j<i;j++)f+=o.call(this,a.value,b);return f;case g.REFERENCE:return b[a.value-1]||"";case g.CHAR:return n(a.value,this.ignoreCase)}}var f=a("ret"),g=f.types,p=b.exports=function(a,b){if(a instanceof RegExp)this.ignoreCase=a.ignoreCase,this.multiline=a.multiline,typeof a.max=="number"&&(this.max=a.max),typeof a.anyRandChar=="function"&&(this.anyRandChar=a.anyRandChar),a=a.source;else{if(typeof a!="string")throw new Error("Expected a regexp or string");this.ignoreCase=b&&b.indexOf("i")!==-1,this.multiline=b&&b.indexOf("m")!==-1}this.tokens=f(a)};p.prototype.max=100,p.prototype.anyRandChar=function(){return String.fromCharCode(h(0,65535))},p.prototype.gen=function(){return o.call(this,this.tokens,[])};var q=p.randexp=function(a,b){var c;return a._randexp===undefined?(c=new p(a,b),a._randexp=c):(c=a._randexp,typeof a.max=="number"&&(c.max=a.max),typeof a.anyRandChar=="function"&&(c.anyRandChar=a.anyRandChar)),c.gen()};p.sugar=function(){RegExp.prototype.gen=function(){return q(this)}}}),!function(a,b){typeof define=="function"&&typeof define.amd=="object"?define(a,function(){return b}):typeof window!="undefined"&&(window[a]=b)}("RandExp",a("/randexp.js"))}()

					var reEmo = /\.emo-\d+\s*\{[^\}]+\}/g,
						listCss = ttvcss.match(reEmo),
						reClass = /\.(emo-\d+)/,
						reBGimg = /background-image\s*:\s*url\(([^\)]+)\)\s*;/,
						reWidth = /width\s*:\s*(\d+)(?:px)\s*;/,
						reHeight = /height\s*:\s*(\d+)(?:px)\s*;/,
						listCssLookup = [];
					if (!listCss) return;
					for (var i=0;i<listCss.length;i++) {
						var cssitem = listCss[i];
						var cls = cssitem.match(reClass);	cls = (cls) ? cls[1] : cls;
						var src = cssitem.match(reBGimg);	src = (src) ? src[1] : src;
						var w = cssitem.match(reWidth);		w = (w) ? w[1] : w;
						var h = cssitem.match(reHeight);	h = (h) ? h[1] : h;
						if (cls && src && w && h) listCssLookup[cls] = { cls: cls, src: src, width: w, height: h };
					}
					for (var i=0;i<defaultSet.length;i++) {
						var emo = defaultSet[i], cls = emo.cls, cssInfo = listCssLookup[cls];
						if (!cssInfo) continue;
						if (!emo.isEmoticon||emo.isGJTVEmoticon||emo.isHHBEmoticon) continue;
						var tcode = [];
						var regex = emo.regex.toString();
						var iconRegExp = new RegExp(regex.substring(1, regex.length-2).replace("?", ""), "g");
						for (var j=0;j<2;j++) {
							var genCode = new RandExp(iconRegExp).gen();
							tcode = tcode.concat(($.inArray(genCode,tcode) < 0) ? genCode : []);
						}
						list.push({
							code: tcode,
							src: cssInfo.src,
							width: cssInfo.width,
							height: cssInfo.height,
							genre: tgenre
						});
					}
					return list;
				};
				_platform.getPlayer = function() {
					var selectors = [].concat(selector.player), $tplayer = $();
					$.each(selectors,function(idx,selector) {
						$tplayer = $(selector);
						if ($tplayer.length>0) return false;
					});
					return $tplayer;
				}
			
				/* Icon emotify */
				_platform.injectIcon = function(iconlist) {
					var iconlist = [].concat(iconlist);
					var list = [],
						count = 0,
						style = '';
					try {
						var emoticonsController = window.App.__container__.lookup('controller:emoticons');
						var emoteSets = emoticonsController.emoticonSets;
						var defaultSet = emoteSets['default'].sort();
						if(!defaultSet) return;
					} catch(e) {
						return;
					}
					/* cleaning */
					for (var idx=0;idx<defaultSet.length;idx++) {
						var obj = defaultSet[idx];
						if (obj && obj.isHHBEmoticon) {
							defaultSet.splice(idx,1);
							idx--;
						}
					}
					
					/* injecting */
					limitHeight = limit.msgIconHeight;
					while (icon = iconlist.pop()) {
						var classname = 'emo-hhb-'+count
						var ow = ((icon.width) ? icon.width+'px' : 'auto');
						var oh = ((icon.height) ? icon.height+'px' : 'auto');
						var w = ow;
						var h = oh;
						if (icon.height > limitHeight) {
							w = ((icon.width/icon.height)*limitHeight)+'px';
							h = limitHeight+'px';
						}
						style += ['.'+classname+'.'+cssClass.msgIcon+'{', 
								'opacity: initial;',
								'background-size:'+w+' '+h+';',
								'width:'+w+';',
								'height:'+h+';',
								'}'].join(' ');
						style += ['.'+classname+'{',
								'opacity: 0.01;',
								'}'].join(' ');
						style += ['.'+classname+','+
								'.'+classname+'.'+cssClass.msgIcon+'.'+cssClass.orgSize+'{',
								'background-image: url('+icon.src+');',
								'background-size: contain;',
								'max-width: 100%;',
								'width:'+ow+';',
								'height:'+oh+';',
								'}'].join(' ');
						var regex = icon.regex;
						defaultSet.unshift({
							cls: classname,
							isHHBEmoticon: true,
							isEmoticon: true,
							regex: regex
						});
						count++;
					}
					if (count > 0) {
						$('style.hhb-emo-style').detach();
						$('<style type="text/css" class="hhb-emo-style">').text(style).appendTo("head");
					}
					return count;
				};
				_platform.getNewMsg = function() {	return $(selector.newMsg);	};
				_platform.bindResizer = function() {
					var msgs = _platform.getNewMsg(),
						resized = [];
					if (msgs.length > 0) {
						var count = 0;
						var bicount = 0, bircount = 0;
						msgs.each(function() {
							var emoticons = $(this)
								.addClass(cssClass.checkedMsg)
								.children(selector.emoticon)
									.each(function() {
										if ($(this).height() > limitHeight) $(this).addClass(cssClass.resized);
										$(this).addClass(cssClass.msgIcon);
									});
							var resized = $(this).children(selector.msgIconResized)
								.click(function() {
									$(this).toggleClass(cssClass.orgSize);
								});
							bicount += emoticons.length;
							bircount += resized.length;
						});
					}
					return {
						msg: msgs.length, 
						emotified: bicount,
						resized: bircount
					};
				};
				_platform.getMsgBox = function() {	return $(selector.msgBox);	};
				_platform.getMsgInput = function() {	return $(selector.msgBox).val();	};
				_platform.insertText = function(text) {	_platform.replaceText(text);	};
				_platform.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length;
						}
						else if (br == "ff") strPos = txtarea.selectionStart;

						var front = (txtarea.value).substring(0,strPos);  
						var back = (txtarea.value).substring(strPos,txtarea.value.length);
						text = ((front.length>0)?' ':'')+text;
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						}
						else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
					}
				}
				
				/* Name Banner + Badge */
				_platform.getNewNames = function() {	return $(selector.newName);	};
				_platform.bindNameBanner = function() {
					var names = _platform.getNewNames();
					return _platformObj.default.bindNameBanner(names);
				};
				_platform.genBadgeCss = function(badges) {
					var style = '';
					var broadcaster = $.extend({ img: null, width: 0, height: 0 },badges.broadcaster);
					var moderator = $.extend({ img: null, width: 0, height: 0 },badges.moderator);
				
					if (broadcaster.img && broadcaster.width>0 && broadcaster.height>0) {
						style += [	
							'.hhb-pf-twitch .ember-chat .badges .broadcaster {',
								'margin-top:-6px;',
								'min-width:',(broadcaster.width),'px;',
								'height:',(broadcaster.width),'px;',
								'background: url(',broadcaster.img,') no-repeat center center;',
							'}'].join('');
					}
					if (moderator.img && moderator.width>0 && moderator.height>0) {
						style += [	
							'.hhb-pf-twitch .ember-chat .badges .moderator {',
								'margin-top:-6px;',
								'min-width:',(moderator.width),'px;',
								'height:',(moderator.width),'px;',
								'background: url(',moderator.img,') no-repeat center center;',
							'}'].join('');
					}
					return style;
				};
			},
			justin: function() {
				/* Private variables */
				var _platform = this,
					id = 'justin',
					supportedFeatures = ['ui','emoticon','name_banner','darkmode','bookmark'],
					cssClass = $.extend(_hhb.cssClass,{
						darkMode: 'hhb-darkmode'
					}),
					selector = $.extend(_hhb.selector,{
						darkModeAcceptor: 'body',
						showChatBtn: '#show-chat:contains("Click to show chat")',
						holderContainer: '#jtv_chat',
						buttonContainer: '#chat_text_input_wrapper',
						msgBox: '#chat_text_input',
						newMsg: '.chat_line span.message:not(.hhb-msg)',
						newName: '.chat_line .nick:not(.hhb-name)',
						emoticon: 'span.emoticon',
						timestampsBox: '#toggle-timestamp',
						userName: '.global-header-user-info .global-header-username',
						player: ['#JustinPlayer','object[data*="JustinPlayer.swf"]']
					}),
					limit = $.extend(_hhb.limit,{});
				/* Public methods */
				/* Initialize */
				_platform.isExcluded = function() { var m=document.URL.match(/^https?\:\/\/.+\.justin\.tv\/(?:directory|broadcast|dashboard|message|settings|user|p|(?:\w+)\/about)(?:$|\/)/i); return ((m) ? m.length>0 : false); }
				_platform.getChannelID = function() { var m=document.URL.match(/^https?\:\/\/.+\.justin\.tv\/(?:chat|(\w+))(?:\/embed\?channel=(\w+))?/i); return ((m && m[2]) ? m[2] : ((m && m[1]) ? m[1] : '')); }
				_platform.getUsername = function() { var uname=$(selector.userName).text().trim().toLowerCase(); return (uname!='guest user') ? uname : ''; };
				_platform.getFeatures = function() {	return supportedFeatures;	};
				_platform.initialize = function() { $('body').addClass('hhb-pf-justin'); };
				_platform.getHolderContainer = function() {	return $(selector.holderContainer);	};
				_platform.getButtonContainer = function() {	return $(selector.buttonContainer);	};
				_platform.getButtonFront = function() {	return [];	};
				_platform.genPlayerBookmarkBtn = function(idBtn) { return _platformObj.default.genPlayerBookmarkBtn(idBtn); };
				_platform.genHolder = function(idObj,infoObj) { return _platformObj.default.genHolder(idObj,infoObj); };
				_platform.genToggleButton = function(id) {
					return $('<a id="'+id+'" href="#"></a>');
				};
				_platform.onBindedToggleButton = function() {
					$('#chat_emotes_trigger').hide(0);
					$(selector.holder).css('bottom',$('#chat_speak').outerHeight());
				};
				_platform.getShowChatBtn = function() {	return $(selector.showChatBtn);	};
				_platform.toggleTimestamps = function(act) {	/* Not Applicable */
					/*
					var scope = angular.element($(_platform.selector.timestampsBox)).scope();
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
					*/
					return true;
				};
				_platform.getPlatformIcon = function() {
					var list = [], tgenre = [].concat('JTV');
					try {
						var chatEmoticonList = (CurrentChat) ? CurrentChat.emoticons : DefaultChatEmoticons;
						var defaultPPEmoteList = PP.chat_emotes.sort(function(a,b){return (a.expression<b.expression)?-1:(a.expression>b.expression)?1:0;});
						if(!chatEmoticonList||!defaultPPEmoteList) return;
					} catch(e) {
						return;
					}
					
					/* ------------------------------------------------------------------
					/* randexp v0.3.3
					/* Create random strings that match a given regular expression.
					/*
					/* Copyright (C) 2013 by Roly Fentanes (https://github.com/fent)
					/* MIT License
					/* http://github.com/fent/randexp.js/raw/master/LICENSE
					/* ------------------------------------------------------------------ */
					!function(){var a=function(b,c){var d=a.resolve(b,c||"/"),e=a.modules[d];if(!e)throw new Error("Failed to resolve module "+b+", tried "+d);var f=e._cached?e._cached:e();return f};a.paths=[],a.modules={},a.extensions=[".js",".coffee"],a._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},a.resolve=function(){return function(b,c){function h(b){if(a.modules[b])return b;for(var c=0;c<a.extensions.length;c++){var d=a.extensions[c];if(a.modules[b+d])return b+d}}function i(b){b=b.replace(/\/+$/,"");var c=b+"/package.json";if(a.modules[c]){var e=a.modules[c](),f=e.browserify;if(typeof f=="object"&&f.main){var g=h(d.resolve(b,f.main));if(g)return g}else if(typeof f=="string"){var g=h(d.resolve(b,f));if(g)return g}else if(e.main){var g=h(d.resolve(b,e.main));if(g)return g}}return h(b+"/index")}function j(a,b){var c=k(b);for(var d=0;d<c.length;d++){var e=c[d],f=h(e+"/"+a);if(f)return f;var g=i(e+"/"+a);if(g)return g}var f=h(a);if(f)return f}function k(a){var b;a==="/"?b=[""]:b=d.normalize(a).split("/");var c=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";c.push(f)}return c}c||(c="/");if(a._core[b])return b;var d=a.modules.path(),e=c||".";if(b.match(/^(?:\.\.?\/|\/)/)){var f=h(d.resolve(e,b))||i(d.resolve(e,b));if(f)return f}var g=j(b,e);if(g)return g;throw new Error("Cannot find module '"+b+"'")}}(),a.alias=function(b,c){var d=a.modules.path(),e=null;try{e=a.resolve(b+"/package.json","/")}catch(f){e=a.resolve(b,"/")}var g=d.dirname(e),h=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(a.modules);for(var i=0;i<h.length;i++){var j=h[i];if(j.slice(0,g.length+1)===g+"/"){var k=j.slice(g.length);a.modules[c+k]=a.modules[g+k]}else j===g&&(a.modules[c]=a.modules[g])}},a.define=function(b,c){var d=a._core[b]?"":a.modules.path().dirname(b),e=function(b){return a(b,d)};e.resolve=function(b){return a.resolve(b,d)},e.modules=a.modules,e.define=a.define;var f={exports:{}};a.modules[b]=function(){return a.modules[b]._cached=f.exports,c.call(f.exports,e,f,f.exports,d,b),a.modules[b]._cached=f.exports,f.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),a.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),a.define("/node_modules/ret/package.json",function(a,b,c,d,e){b.exports={main:"./lib/index.js"}}),a.define("/node_modules/ret/lib/index.js",function(a,b,c,d,e){var f=a("./util"),g=a("./types"),h=a("./sets"),i=a("./positions");b.exports=function(a){var b=0,c,d,e={type:g.ROOT,stack:[]},j=e,k=e.stack,l=[],m=function(b){f.error(a,"Nothing to repeat at column "+(b-1))},n=f.strToChars(a);c=n.length;while(b<c){d=n[b++];switch(d){case"\\":d=n[b++];switch(d){case"b":k.push(i.wordBoundary());break;case"B":k.push(i.nonWordBoundary());break;case"w":k.push(h.words());break;case"W":k.push(h.notWords());break;case"d":k.push(h.ints());break;case"D":k.push(h.notInts());break;case"s":k.push(h.whitespace());break;case"S":k.push(h.notWhitespace());break;default:/\d/.test(d)?k.push({type:g.REFERENCE,value:parseInt(d,10)}):k.push({type:g.CHAR,value:d.charCodeAt(0)})}break;case"^":k.push(i.begin());break;case"$":k.push(i.end());break;case"[":var o;n[b]==="^"?(o=!0,b++):o=!1;var p=f.tokenizeClass(n.slice(b),a);b+=p[1],k.push({type:g.SET,set:p[0],not:o});break;case".":k.push(h.anyChar());break;case"(":var q={type:g.GROUP,stack:[],remember:!0};d=n[b],d==="?"&&(d=n[b+1],b+=2,d==="="?q.followedBy=!0:d==="!"?q.notFollowedBy=!0:d!==":"&&f.error(a,"Invalid group, character '"+d+"' after '?' at column "+(b-1)),q.remember=!1),k.push(q),l.push(j),j=q,k=q.stack;break;case")":l.length===0&&f.error(a,"Unmatched ) at column "+(b-1)),j=l.pop(),k=j.options?j.options[j.options.length-1]:j.stack;break;case"|":j.options||(j.options=[j.stack],delete j.stack);var r=[];j.options.push(r),k=r;break;case"{":var s=/^(\d+)(,(\d+)?)?\}/.exec(n.slice(b)),t,u;s!==null?(t=parseInt(s[1],10),u=s[2]?s[3]?parseInt(s[3],10):Infinity:t,b+=s[0].length,k.push({type:g.REPETITION,min:t,max:u,value:k.pop()})):k.push({type:g.CHAR,value:123});break;case"?":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:1,value:k.pop()});break;case"+":k.length===0&&m(b),k.push({type:g.REPETITION,min:1,max:Infinity,value:k.pop()});break;case"*":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:Infinity,value:k.pop()});break;default:k.push({type:g.CHAR,value:d.charCodeAt(0)})}}return l.length!==0&&f.error(a,"Unterminated group"),e},b.exports.types=g}),a.define("/node_modules/ret/lib/util.js",function(a,b,c,d,e){var f=a("./types"),g=a("./sets"),h="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",i={0:0,t:9,n:10,v:11,f:12,r:13};c.strToChars=function(a){var b=/(\[\\b\])|\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;return a=a.replace(b,function(a,b,c,d,e,f,g){var j=b?8:c?parseInt(c,16):d?parseInt(d,16):e?parseInt(e,8):f?h.indexOf(f):g?i[g]:undefined,k=String.fromCharCode(j);return/[\[\]{}\^$.|?*+()]/.test(k)&&(k="\\"+k),k}),a},c.tokenizeClass=function(a,b){var d=[],e=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g,h,i;while((h=e.exec(a))!=null)if(h[1])d.push(g.words());else if(h[2])d.push(g.ints());else if(h[3])d.push(g.whitespace());else if(h[4])d.push(g.notWords());else if(h[5])d.push(g.notInts());else if(h[6])d.push(g.notWhitespace());else if(h[7])d.push({type:f.RANGE,from:(h[8]||h[9]).charCodeAt(0),to:h[10].charCodeAt(0)});else{if(!(i=h[12]))return[d,e.lastIndex];d.push({type:f.CHAR,value:i.charCodeAt(0)})}c.error(b,"Unterminated character class")},c.error=function(a,b){throw new SyntaxError("Invalid regular expression: /"+a+"/: "+b)}}),a.define("/node_modules/ret/lib/types.js",function(a,b,c,d,e){b.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}}),a.define("/node_modules/ret/lib/sets.js",function(a,b,c,d,e){var f=a("./types"),g=function(){return[{type:f.RANGE,from:48,to:57}]},h=function(){return[{type:f.RANGE,from:97,to:122},{type:f.RANGE,from:65,to:90}].concat(g())},i=function(){return[{type:f.CHAR,value:12},{type:f.CHAR,value:10},{type:f.CHAR,value:13},{type:f.CHAR,value:9},{type:f.CHAR,value:11},{type:f.CHAR,value:160},{type:f.CHAR,value:5760},{type:f.CHAR,value:6158},{type:f.CHAR,value:8192},{type:f.CHAR,value:8193},{type:f.CHAR,value:8194},{type:f.CHAR,value:8195},{type:f.CHAR,value:8196},{type:f.CHAR,value:8197},{type:f.CHAR,value:8198},{type:f.CHAR,value:8199},{type:f.CHAR,value:8200},{type:f.CHAR,value:8201},{type:f.CHAR,value:8202},{type:f.CHAR,value:8232},{type:f.CHAR,value:8233},{type:f.CHAR,value:8239},{type:f.CHAR,value:8287},{type:f.CHAR,value:12288}]};c.words=function(){return{type:f.SET,set:h(),not:!1}},c.notWords=function(){return{type:f.SET,set:h(),not:!0}},c.ints=function(){return{type:f.SET,set:g(),not:!1}},c.notInts=function(){return{type:f.SET,set:g(),not:!0}},c.whitespace=function(){return{type:f.SET,set:i(),not:!1}},c.notWhitespace=function(){return{type:f.SET,set:i(),not:!0}},c.anyChar=function(){return{type:f.SET,set:[{type:f.CHAR,value:10}],not:!0}}}),a.define("/node_modules/ret/lib/positions.js",function(a,b,c,d,e){var f=a("./types");c.wordBoundary=function(){return{type:f.POSITION,value:"b"}},c.nonWordBoundary=function(){return{type:f.POSITION,value:"B"}},c.begin=function(){return{type:f.POSITION,value:"^"}},c.end=function(){return{type:f.POSITION,value:"$"}}}),a.define("/randexp.js",function(a,b,c,d,e){function h(a,b){return a+Math.floor(Math.random()*(1+b-a))}function i(a){return a+(97<=a&&a<=122?-32:65<=a&&a<=90?32:0)}function j(a,b,c,d){return a<=c&&c<=b?{from:c,to:Math.min(b,d)}:a<=d&&d<=b?{from:Math.max(a,c),to:d}:!1}function k(a,b){var c,d,e,f;if((d=a.length)!==b.length)return!1;for(c=0;c<d;c++){f=a[c];for(e in f)if(f.hasOwnProperty(e)&&f[e]!==b[c][e])return!1}return!0}function l(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];if(e.not!==b.not&&k(e.set,b.set))return!0}return!1}function m(a,b,c){var d,e,f=[],h=!1;for(var k=0,n=a.length;k<n;k++){d=a[k];switch(d.type){case g.CHAR:e=d.value;if(e===b||c&&i(e)===b)return!0;break;case g.RANGE:if(d.from<=b&&b<=d.to||c&&((e=j(97,122,d.from,d.to))!==!1&&e.from<=b&&b<=e.to||(e=j(65,90,d.from,d.to))!==!1&&e.from<=b&&b<=e.to))return!0;break;case g.SET:f.length>0&&l(f,d)?h=!0:f.push(d);if(!h&&m(d.set,b,c)!==d.not)return!0}}return!1}function n(a,b){return String.fromCharCode(b&&Math.random()>.5?i(a):a)}function o(a,b,c){var d,e,f,i,j,k,l;switch(a.type){case g.ROOT:case g.GROUP:if(a.notFollowedBy)return"";a.remember&&(d=b.push(!1)-1),e=a.options?a.options[Math.floor(Math.random()*a.options.length)]:a.stack,f="";for(j=0,k=e.length;j<k;j++)f+=o.call(this,e[j],b);return a.remember&&(b[d]=f),f;case g.POSITION:return"";case g.SET:c=!!c,l=c!==a.not;if(!l)return a.set.length?o.call(this,a.set[Math.floor(Math.random()*a.set.length)],b,l):"";for(;;){var p=this.anyRandChar(),q=p.charCodeAt(0);if(m(a.set,q,this.ignoreCase))continue;return p}break;case g.RANGE:return n(h(a.from,a.to),this.ignoreCase);case g.REPETITION:i=h(a.min,a.max===Infinity?a.min+this.max:a.max),f="";for(j=0;j<i;j++)f+=o.call(this,a.value,b);return f;case g.REFERENCE:return b[a.value-1]||"";case g.CHAR:return n(a.value,this.ignoreCase)}}var f=a("ret"),g=f.types,p=b.exports=function(a,b){if(a instanceof RegExp)this.ignoreCase=a.ignoreCase,this.multiline=a.multiline,typeof a.max=="number"&&(this.max=a.max),typeof a.anyRandChar=="function"&&(this.anyRandChar=a.anyRandChar),a=a.source;else{if(typeof a!="string")throw new Error("Expected a regexp or string");this.ignoreCase=b&&b.indexOf("i")!==-1,this.multiline=b&&b.indexOf("m")!==-1}this.tokens=f(a)};p.prototype.max=100,p.prototype.anyRandChar=function(){return String.fromCharCode(h(0,65535))},p.prototype.gen=function(){return o.call(this,this.tokens,[])};var q=p.randexp=function(a,b){var c;return a._randexp===undefined?(c=new p(a,b),a._randexp=c):(c=a._randexp,typeof a.max=="number"&&(c.max=a.max),typeof a.anyRandChar=="function"&&(c.anyRandChar=a.anyRandChar)),c.gen()};p.sugar=function(){RegExp.prototype.gen=function(){return q(this)}}}),!function(a,b){typeof define=="function"&&typeof define.amd=="object"?define(a,function(){return b}):typeof window!="undefined"&&(window[a]=b)}("RandExp",a("/randexp.js"))}()

					/* chatEmoticonList */
					var chatEmoDefaultPath = 'http://www-cdn.jtvnw.net/static/images/emoticons/';
					var gifEmo = ['surprised','excited','skeptical','pirate','happy','raspberry','winkberry','cool','wink','angry','drunk','bored','sad','horny'];
					var dictEmo = { 'bunion': 'bunion2',
									'mvg': 'mvgbest', 
									'dylan': 'dylanlive', 
									'sm-skull': 'spacemarine/sm-skull', 
									'sm-orc': 'spacemarine/sm-orc'}
					for (var i=0;i<chatEmoticonList.length;i++) {
						var emo = chatEmoticonList[i];
						var tcode = [];
						var tsrc = [	chatEmoDefaultPath,
										(dictEmo[emo.img]) ? dictEmo[emo.img] : emo.img,
										($.inArray(emo.img,gifEmo) < 0) ? '.png' : '.gif'].join('');
						var twidth = -1,theight = -1;
						for (var j=0;j<2;j++) {
							var genCode = new RandExp(emo.rx).gen();
							tcode = tcode.concat(($.inArray(genCode,tcode) < 0) ? genCode : []);
						}
						list.push({
							code: tcode,
							src: tsrc,
							width: twidth,
							height: theight,
							genre: tgenre
						});
					}
					
					/* defaultPPEmoteList */
					for (var i=0;i<defaultPPEmoteList.length;i++) {
						var emo = defaultPPEmoteList[i];
						var tcode = [].concat(emo.expression);
						var tsrc = [PP.emote_root,emo.source].join('');
						var twidth = -1,theight = -1;
						list.push({
							code: tcode,
							src: tsrc,
							width: twidth,
							height: theight,
							genre: tgenre
						});
					}
					return list;
				};
				_platform.getPlayer = function() {
					var selectors = [].concat(selector.player), $tplayer = $();
					$.each(selectors,function(idx,selector) {
						$tplayer = $(selector);
						if ($tplayer.length>0) return false;
					});
					return $tplayer;
				}
			
				/* Icon emotify */
				_platform.injectIcon = function(iconlist) {
					var iconlist = iconlist;
					var count = iconlist.length;
					
					function toRegExp(str) { return (str+'').replace(/([.?*+^$[\]\\(){}|\-\:])/g, "\\$1"); }
					function emotify_pre(msg) {
						var map = {},html=[];
						/* extract html tag */
						var mhtml = msg.match(/<\s*(\w+)\s[^>]*>(.*?)<\s*\/\s*\1>/gi);
						if (mhtml) {
							for (var i=0;i<mhtml.length;i++) {
								html[i] = mhtml[i];
								msg = msg.replace(html[i],"___hhb_html_"+i+"___");
							}
						}
						/* extract emoticon */
						for(var i = 0; i < iconlist.length; i++) {
							var code = [].concat(iconlist[i].code);
							for(var j = 0; j < code.length; j++) {
								var regex = code[j];
								if(!(regex instanceof RegExp)) regex = new RegExp(toRegExp(regex), 'g');
								msg = msg.replace(regex, "___hhb_emote_"+i+"___");
							}
						}
						
						/* restore html tag */
						if (mhtml) {
							for (var i=0;i<html.length;i++) {
								msg = msg.replace(new RegExp("___hhb_html_"+i+"___","g"), html[i]);
							}
						}
						return msg;
					}
					function emotify_post(msg)
					{
						var classMsgIcon = cssClass.msgIcon,
							classResized = cssClass.resized
							limitHeight = limit.msgIconHeight;
						/* restore emoticon */
						for(var i = 0; i < iconlist.length; i++) {
							var emo = iconlist[i];
							var tsrc = emo.src;
							var ttitle = emo.code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,'');
							var tw = (emo.width > 0) ? emo.width : 0;
							var th = (emo.height > 0) ? emo.height : 0;
							msg = msg.replace(new RegExp("___hhb_emote_"+i+"___","g"), emo.img);
						}
						return msg;
					}
					function emotify_main(old,args) {
						var str = args[0];
						var msg = emotify_pre(str);
						args[0] = msg;
						msg = old.apply(this,args);
						msg = emotify_post(msg);
						return msg;
					}
					/* Injecting emoticonize */					
					var method = 'emoticonize',
						objChat = (CurrentChat) ? CurrentChat : Chat.prototype;
					if (method in objChat && !('__hhb_'+method in objChat)) {
						var orgMethod = objChat[method];
						objChat['__hhb_'+method] = true;
						objChat[method] = function() {
							try {
								var args = [	orgMethod.bind(this),
												Array.prototype.slice.apply(arguments)
											];
								return emotify_main.apply(this,args);
							} catch(e) {
								return orgMethod.apply(this,arguments);
							}
						};
					}
					return count;
				},
				_platform.getNewMsg = function() {	return $(selector.newMsg);	};
				_platform.bindResizer = function() {
					var msgs = _platform.getNewMsg(),
						resized = [];
					if (msgs.length > 0) {
						var count = 0;
						var bicount = 0, bircount = 0;
						msgs.each(function() {
							var emoticons = $(this)
								.addClass(cssClass.checkedMsg)
								.children(selector.emoticon)
									.each(function() {
										if ($(this).height() > limitHeight) $(this).addClass(cssClass.resized);
										$(this).addClass(cssClass.msgIcon);
									});
							var resized = $(this).children(selector.msgIconResized)
								.click(function() {
									$(this).toggleClass(cssClass.orgSize);
								});
							bicount += emoticons.length;
							bircount += resized.length;
						});
					}
					return {
						msg: msgs.length, 
						emotified: bicount,
						resized: bircount
					};
				};
				_platform.getMsgBox = function() {	return $(selector.msgBox);	};
				_platform.getMsgInput = function() {	return $(selector.msgBox).val();	};
				_platform.insertText = function(text) {	_platform.replaceText(text);	};
				_platform.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length;
						}
						else if (br == "ff") strPos = txtarea.selectionStart;

						var front = (txtarea.value).substring(0,strPos);  
						var back = (txtarea.value).substring(strPos,txtarea.value.length);
						text = ((front.length>0)?' ':'')+text;
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						}
						else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
					}
				};
				
				/* Name Banner + Badge */
				_platform.getNewNames = function() {	return $(selector.newName);	};
				_platform.bindNameBanner = function() {
					var names = _platform.getNewNames();
					return _platformObj.default.bindNameBanner(names);
				};
				_platform.genBadgeCss = function(badges) {
					var style = '';
					var broadcaster = $.extend({ img: null, width: 0, height: 0 },badges.broadcaster);
					var moderator = $.extend({ img: null, width: 0, height: 0 },badges.moderator);
				
					if (broadcaster.img && broadcaster.width>0 && broadcaster.height>0) {
						style += [	
							'.hhb-pf-justin .tag.broadcaster {',
								'display:inline-block;',
								'padding:0px;',
								'border-radius:0px;',
								'text-indent: -9999px;',
								'width:',(broadcaster.width),'px;',
								'height:',(broadcaster.width),'px;',
								'background: url(',broadcaster.img,') no-repeat center center;',
							'}'].join('');
					}
					if (moderator.img && moderator.width>0 && moderator.height>0) {
						style += [	
							'.hhb-pf-justin .tag.mod {',
								'display:inline-block;',
								'padding:0px;',
								'border-radius:0px;',
								'text-indent: -9999px;',
								'width:',(moderator.width),'px;',
								'height:',(moderator.width),'px;',
								'background: url(',moderator.img,') no-repeat center center;',
							'}'].join('');
					}
					return style;
				};
			},
			ustream: function() {
				/* Private variables */
				var _platform = this,
					id = 'ustream',
					supportedFeatures = ['bookmark'],
					cssClass = $.extend(_hhb.cssClass,{
						darkMode: 'hhb-darkmode'
					}),
					selector = $.extend(_hhb.selector,{
					/*	darkModeAcceptor: 'body',
						showChatBtn: '#show-chat:contains("Click to show chat")',
						holderContainer: '#jtv_chat',
						buttonContainer: '#chat_text_input_wrapper',
						msgBox: '#chat_text_input',
						newMsg: '.chat_line span.message:not(.hhb-msg)',
						newName: '.chat_line .nick:not(.hhb-name)',
						emoticon: 'span.emoticon',
						timestampsBox: '#toggle-timestamp',
					*/
						userName: '.userName span',
						player: ['#UstreamViewer','object[id^="utv"]']
					}),
					limit = $.extend(_hhb.limit,{});
				/* Public methods */
				/* Initialize */
				_platform.isExcluded = function() { var m=document.URL.match(/^https?\:\/\/.+\.ustream\.tv\/(?:broadcasterpage|dashboard|socialstream|platform|premium-membership-management|ustream-pro|manage-show|account|metrics|information|home|search|explore|upcoming)/i);return ((m) ? m.length>0 : false); }
				_platform.getChannelID = function() { var v=$('param[name="flashvars"]').attr('value'),v=(v ? v : ''),m=v.match(/cid=(\d+)/); return (m && m[1]) ? m[1] : ''; }
				_platform.getUsername = function() { var uname=$(selector.userName).text().trim().toLowerCase(); return (uname!='guest user') ? uname : ''; };
				_platform.getFeatures = function() {	return supportedFeatures;	};
				_platform.initialize = function() { $('body').addClass('hhb-pf-ustream'); };
				_platform.getHolderContainer = function() {	return $(selector.holderContainer);	};
				_platform.getButtonContainer = function() {	return $(selector.buttonContainer);	};
				_platform.getButtonFront = function() {	return [];	};
				_platform.genPlayerBookmarkBtn = function(idBtn) { return _platformObj.default.genPlayerBookmarkBtn(idBtn); };
				_platform.genHolder = function(idObj,infoObj) { return _platformObj.default.genHolder(idObj,infoObj); };
				_platform.genToggleButton = function(id) {
					return $('<a id="'+id+'" href="#"></a>');
				};
				_platform.onBindedToggleButton = function() {
					$('#chat_emotes_trigger').hide(0);
					$(selector.holder).css('bottom',$('#chat_speak').outerHeight());
				};
				_platform.getShowChatBtn = function() {	return $(selector.showChatBtn);	};
				_platform.toggleTimestamps = function(act) {	/* Not Applicable */
					/*
					var scope = angular.element($(_platform.selector.timestampsBox)).scope();
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
					*/
					return true;
				};
				_platform.getPlatformIcon = function() {
					var list = [], tgenre = [].concat('JTV');
					try {
						var chatEmoticonList = (CurrentChat) ? CurrentChat.emoticons : DefaultChatEmoticons;
						var defaultPPEmoteList = PP.chat_emotes.sort(function(a,b){return (a.expression<b.expression)?-1:(a.expression>b.expression)?1:0;});
						if(!chatEmoticonList||!defaultPPEmoteList) return;
					} catch(e) {
						return;
					}
					
					/* ------------------------------------------------------------------
					/* randexp v0.3.3
					/* Create random strings that match a given regular expression.
					/*
					/* Copyright (C) 2013 by Roly Fentanes (https://github.com/fent)
					/* MIT License
					/* http://github.com/fent/randexp.js/raw/master/LICENSE
					/* ------------------------------------------------------------------ */
					!function(){var a=function(b,c){var d=a.resolve(b,c||"/"),e=a.modules[d];if(!e)throw new Error("Failed to resolve module "+b+", tried "+d);var f=e._cached?e._cached:e();return f};a.paths=[],a.modules={},a.extensions=[".js",".coffee"],a._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},a.resolve=function(){return function(b,c){function h(b){if(a.modules[b])return b;for(var c=0;c<a.extensions.length;c++){var d=a.extensions[c];if(a.modules[b+d])return b+d}}function i(b){b=b.replace(/\/+$/,"");var c=b+"/package.json";if(a.modules[c]){var e=a.modules[c](),f=e.browserify;if(typeof f=="object"&&f.main){var g=h(d.resolve(b,f.main));if(g)return g}else if(typeof f=="string"){var g=h(d.resolve(b,f));if(g)return g}else if(e.main){var g=h(d.resolve(b,e.main));if(g)return g}}return h(b+"/index")}function j(a,b){var c=k(b);for(var d=0;d<c.length;d++){var e=c[d],f=h(e+"/"+a);if(f)return f;var g=i(e+"/"+a);if(g)return g}var f=h(a);if(f)return f}function k(a){var b;a==="/"?b=[""]:b=d.normalize(a).split("/");var c=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";c.push(f)}return c}c||(c="/");if(a._core[b])return b;var d=a.modules.path(),e=c||".";if(b.match(/^(?:\.\.?\/|\/)/)){var f=h(d.resolve(e,b))||i(d.resolve(e,b));if(f)return f}var g=j(b,e);if(g)return g;throw new Error("Cannot find module '"+b+"'")}}(),a.alias=function(b,c){var d=a.modules.path(),e=null;try{e=a.resolve(b+"/package.json","/")}catch(f){e=a.resolve(b,"/")}var g=d.dirname(e),h=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(a.modules);for(var i=0;i<h.length;i++){var j=h[i];if(j.slice(0,g.length+1)===g+"/"){var k=j.slice(g.length);a.modules[c+k]=a.modules[g+k]}else j===g&&(a.modules[c]=a.modules[g])}},a.define=function(b,c){var d=a._core[b]?"":a.modules.path().dirname(b),e=function(b){return a(b,d)};e.resolve=function(b){return a.resolve(b,d)},e.modules=a.modules,e.define=a.define;var f={exports:{}};a.modules[b]=function(){return a.modules[b]._cached=f.exports,c.call(f.exports,e,f,f.exports,d,b),a.modules[b]._cached=f.exports,f.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),a.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),a.define("/node_modules/ret/package.json",function(a,b,c,d,e){b.exports={main:"./lib/index.js"}}),a.define("/node_modules/ret/lib/index.js",function(a,b,c,d,e){var f=a("./util"),g=a("./types"),h=a("./sets"),i=a("./positions");b.exports=function(a){var b=0,c,d,e={type:g.ROOT,stack:[]},j=e,k=e.stack,l=[],m=function(b){f.error(a,"Nothing to repeat at column "+(b-1))},n=f.strToChars(a);c=n.length;while(b<c){d=n[b++];switch(d){case"\\":d=n[b++];switch(d){case"b":k.push(i.wordBoundary());break;case"B":k.push(i.nonWordBoundary());break;case"w":k.push(h.words());break;case"W":k.push(h.notWords());break;case"d":k.push(h.ints());break;case"D":k.push(h.notInts());break;case"s":k.push(h.whitespace());break;case"S":k.push(h.notWhitespace());break;default:/\d/.test(d)?k.push({type:g.REFERENCE,value:parseInt(d,10)}):k.push({type:g.CHAR,value:d.charCodeAt(0)})}break;case"^":k.push(i.begin());break;case"$":k.push(i.end());break;case"[":var o;n[b]==="^"?(o=!0,b++):o=!1;var p=f.tokenizeClass(n.slice(b),a);b+=p[1],k.push({type:g.SET,set:p[0],not:o});break;case".":k.push(h.anyChar());break;case"(":var q={type:g.GROUP,stack:[],remember:!0};d=n[b],d==="?"&&(d=n[b+1],b+=2,d==="="?q.followedBy=!0:d==="!"?q.notFollowedBy=!0:d!==":"&&f.error(a,"Invalid group, character '"+d+"' after '?' at column "+(b-1)),q.remember=!1),k.push(q),l.push(j),j=q,k=q.stack;break;case")":l.length===0&&f.error(a,"Unmatched ) at column "+(b-1)),j=l.pop(),k=j.options?j.options[j.options.length-1]:j.stack;break;case"|":j.options||(j.options=[j.stack],delete j.stack);var r=[];j.options.push(r),k=r;break;case"{":var s=/^(\d+)(,(\d+)?)?\}/.exec(n.slice(b)),t,u;s!==null?(t=parseInt(s[1],10),u=s[2]?s[3]?parseInt(s[3],10):Infinity:t,b+=s[0].length,k.push({type:g.REPETITION,min:t,max:u,value:k.pop()})):k.push({type:g.CHAR,value:123});break;case"?":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:1,value:k.pop()});break;case"+":k.length===0&&m(b),k.push({type:g.REPETITION,min:1,max:Infinity,value:k.pop()});break;case"*":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:Infinity,value:k.pop()});break;default:k.push({type:g.CHAR,value:d.charCodeAt(0)})}}return l.length!==0&&f.error(a,"Unterminated group"),e},b.exports.types=g}),a.define("/node_modules/ret/lib/util.js",function(a,b,c,d,e){var f=a("./types"),g=a("./sets"),h="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",i={0:0,t:9,n:10,v:11,f:12,r:13};c.strToChars=function(a){var b=/(\[\\b\])|\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;return a=a.replace(b,function(a,b,c,d,e,f,g){var j=b?8:c?parseInt(c,16):d?parseInt(d,16):e?parseInt(e,8):f?h.indexOf(f):g?i[g]:undefined,k=String.fromCharCode(j);return/[\[\]{}\^$.|?*+()]/.test(k)&&(k="\\"+k),k}),a},c.tokenizeClass=function(a,b){var d=[],e=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g,h,i;while((h=e.exec(a))!=null)if(h[1])d.push(g.words());else if(h[2])d.push(g.ints());else if(h[3])d.push(g.whitespace());else if(h[4])d.push(g.notWords());else if(h[5])d.push(g.notInts());else if(h[6])d.push(g.notWhitespace());else if(h[7])d.push({type:f.RANGE,from:(h[8]||h[9]).charCodeAt(0),to:h[10].charCodeAt(0)});else{if(!(i=h[12]))return[d,e.lastIndex];d.push({type:f.CHAR,value:i.charCodeAt(0)})}c.error(b,"Unterminated character class")},c.error=function(a,b){throw new SyntaxError("Invalid regular expression: /"+a+"/: "+b)}}),a.define("/node_modules/ret/lib/types.js",function(a,b,c,d,e){b.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}}),a.define("/node_modules/ret/lib/sets.js",function(a,b,c,d,e){var f=a("./types"),g=function(){return[{type:f.RANGE,from:48,to:57}]},h=function(){return[{type:f.RANGE,from:97,to:122},{type:f.RANGE,from:65,to:90}].concat(g())},i=function(){return[{type:f.CHAR,value:12},{type:f.CHAR,value:10},{type:f.CHAR,value:13},{type:f.CHAR,value:9},{type:f.CHAR,value:11},{type:f.CHAR,value:160},{type:f.CHAR,value:5760},{type:f.CHAR,value:6158},{type:f.CHAR,value:8192},{type:f.CHAR,value:8193},{type:f.CHAR,value:8194},{type:f.CHAR,value:8195},{type:f.CHAR,value:8196},{type:f.CHAR,value:8197},{type:f.CHAR,value:8198},{type:f.CHAR,value:8199},{type:f.CHAR,value:8200},{type:f.CHAR,value:8201},{type:f.CHAR,value:8202},{type:f.CHAR,value:8232},{type:f.CHAR,value:8233},{type:f.CHAR,value:8239},{type:f.CHAR,value:8287},{type:f.CHAR,value:12288}]};c.words=function(){return{type:f.SET,set:h(),not:!1}},c.notWords=function(){return{type:f.SET,set:h(),not:!0}},c.ints=function(){return{type:f.SET,set:g(),not:!1}},c.notInts=function(){return{type:f.SET,set:g(),not:!0}},c.whitespace=function(){return{type:f.SET,set:i(),not:!1}},c.notWhitespace=function(){return{type:f.SET,set:i(),not:!0}},c.anyChar=function(){return{type:f.SET,set:[{type:f.CHAR,value:10}],not:!0}}}),a.define("/node_modules/ret/lib/positions.js",function(a,b,c,d,e){var f=a("./types");c.wordBoundary=function(){return{type:f.POSITION,value:"b"}},c.nonWordBoundary=function(){return{type:f.POSITION,value:"B"}},c.begin=function(){return{type:f.POSITION,value:"^"}},c.end=function(){return{type:f.POSITION,value:"$"}}}),a.define("/randexp.js",function(a,b,c,d,e){function h(a,b){return a+Math.floor(Math.random()*(1+b-a))}function i(a){return a+(97<=a&&a<=122?-32:65<=a&&a<=90?32:0)}function j(a,b,c,d){return a<=c&&c<=b?{from:c,to:Math.min(b,d)}:a<=d&&d<=b?{from:Math.max(a,c),to:d}:!1}function k(a,b){var c,d,e,f;if((d=a.length)!==b.length)return!1;for(c=0;c<d;c++){f=a[c];for(e in f)if(f.hasOwnProperty(e)&&f[e]!==b[c][e])return!1}return!0}function l(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];if(e.not!==b.not&&k(e.set,b.set))return!0}return!1}function m(a,b,c){var d,e,f=[],h=!1;for(var k=0,n=a.length;k<n;k++){d=a[k];switch(d.type){case g.CHAR:e=d.value;if(e===b||c&&i(e)===b)return!0;break;case g.RANGE:if(d.from<=b&&b<=d.to||c&&((e=j(97,122,d.from,d.to))!==!1&&e.from<=b&&b<=e.to||(e=j(65,90,d.from,d.to))!==!1&&e.from<=b&&b<=e.to))return!0;break;case g.SET:f.length>0&&l(f,d)?h=!0:f.push(d);if(!h&&m(d.set,b,c)!==d.not)return!0}}return!1}function n(a,b){return String.fromCharCode(b&&Math.random()>.5?i(a):a)}function o(a,b,c){var d,e,f,i,j,k,l;switch(a.type){case g.ROOT:case g.GROUP:if(a.notFollowedBy)return"";a.remember&&(d=b.push(!1)-1),e=a.options?a.options[Math.floor(Math.random()*a.options.length)]:a.stack,f="";for(j=0,k=e.length;j<k;j++)f+=o.call(this,e[j],b);return a.remember&&(b[d]=f),f;case g.POSITION:return"";case g.SET:c=!!c,l=c!==a.not;if(!l)return a.set.length?o.call(this,a.set[Math.floor(Math.random()*a.set.length)],b,l):"";for(;;){var p=this.anyRandChar(),q=p.charCodeAt(0);if(m(a.set,q,this.ignoreCase))continue;return p}break;case g.RANGE:return n(h(a.from,a.to),this.ignoreCase);case g.REPETITION:i=h(a.min,a.max===Infinity?a.min+this.max:a.max),f="";for(j=0;j<i;j++)f+=o.call(this,a.value,b);return f;case g.REFERENCE:return b[a.value-1]||"";case g.CHAR:return n(a.value,this.ignoreCase)}}var f=a("ret"),g=f.types,p=b.exports=function(a,b){if(a instanceof RegExp)this.ignoreCase=a.ignoreCase,this.multiline=a.multiline,typeof a.max=="number"&&(this.max=a.max),typeof a.anyRandChar=="function"&&(this.anyRandChar=a.anyRandChar),a=a.source;else{if(typeof a!="string")throw new Error("Expected a regexp or string");this.ignoreCase=b&&b.indexOf("i")!==-1,this.multiline=b&&b.indexOf("m")!==-1}this.tokens=f(a)};p.prototype.max=100,p.prototype.anyRandChar=function(){return String.fromCharCode(h(0,65535))},p.prototype.gen=function(){return o.call(this,this.tokens,[])};var q=p.randexp=function(a,b){var c;return a._randexp===undefined?(c=new p(a,b),a._randexp=c):(c=a._randexp,typeof a.max=="number"&&(c.max=a.max),typeof a.anyRandChar=="function"&&(c.anyRandChar=a.anyRandChar)),c.gen()};p.sugar=function(){RegExp.prototype.gen=function(){return q(this)}}}),!function(a,b){typeof define=="function"&&typeof define.amd=="object"?define(a,function(){return b}):typeof window!="undefined"&&(window[a]=b)}("RandExp",a("/randexp.js"))}()

					/* chatEmoticonList */
					var chatEmoDefaultPath = 'http://www-cdn.jtvnw.net/static/images/emoticons/';
					var gifEmo = ['surprised','excited','skeptical','pirate','happy','raspberry','winkberry','cool','wink','angry','drunk','bored','sad','horny'];
					var dictEmo = { 'bunion': 'bunion2',
									'mvg': 'mvgbest', 
									'dylan': 'dylanlive', 
									'sm-skull': 'spacemarine/sm-skull', 
									'sm-orc': 'spacemarine/sm-orc'}
					for (var i=0;i<chatEmoticonList.length;i++) {
						var emo = chatEmoticonList[i];
						var tcode = [];
						var tsrc = [	chatEmoDefaultPath,
										(dictEmo[emo.img]) ? dictEmo[emo.img] : emo.img,
										($.inArray(emo.img,gifEmo) < 0) ? '.png' : '.gif'].join('');
						var twidth = -1,theight = -1;
						for (var j=0;j<2;j++) {
							var genCode = new RandExp(emo.rx).gen();
							tcode = tcode.concat(($.inArray(genCode,tcode) < 0) ? genCode : []);
						}
						list.push({
							code: tcode,
							src: tsrc,
							width: twidth,
							height: theight,
							genre: tgenre
						});
					}
					
					/* defaultPPEmoteList */
					for (var i=0;i<defaultPPEmoteList.length;i++) {
						var emo = defaultPPEmoteList[i];
						var tcode = [].concat(emo.expression);
						var tsrc = [PP.emote_root,emo.source].join('');
						var twidth = -1,theight = -1;
						list.push({
							code: tcode,
							src: tsrc,
							width: twidth,
							height: theight,
							genre: tgenre
						});
					}
					return list;
				};
				_platform.getPlayer = function() {
					var selectors = [].concat(selector.player), $tplayer = $();
					$.each(selectors,function(idx,selector) {
						$tplayer = $(selector);
						if ($tplayer.length>0) return false;
					});
					return $tplayer;
				}
			
				/* Icon emotify */
				_platform.injectIcon = function(iconlist) {
					var iconlist = iconlist;
					var count = iconlist.length;
					
					function toRegExp(str) { return (str+'').replace(/([.?*+^$[\]\\(){}|\-\:])/g, "\\$1"); }
					function emotify_pre(msg) {
						var map = {},html=[];
						/* extract html tag */
						var mhtml = msg.match(/<\s*(\w+)\s[^>]*>(.*?)<\s*\/\s*\1>/gi);
						if (mhtml) {
							for (var i=0;i<mhtml.length;i++) {
								html[i] = mhtml[i];
								msg = msg.replace(html[i],"___hhb_html_"+i+"___");
							}
						}
						/* extract emoticon */
						for(var i = 0; i < iconlist.length; i++) {
							var code = [].concat(iconlist[i].code);
							for(var j = 0; j < code.length; j++) {
								var regex = code[j];
								if(!(regex instanceof RegExp)) regex = new RegExp(toRegExp(regex), 'g');
								msg = msg.replace(regex, "___hhb_emote_"+i+"___");
							}
						}
						
						/* restore html tag */
						if (mhtml) {
							for (var i=0;i<html.length;i++) {
								msg = msg.replace(new RegExp("___hhb_html_"+i+"___","g"), html[i]);
							}
						}
						return msg;
					}
					function emotify_post(msg)
					{
						var classMsgIcon = cssClass.msgIcon,
							classResized = cssClass.resized
							limitHeight = limit.msgIconHeight;
						/* restore emoticon */
						for(var i = 0; i < iconlist.length; i++) {
							var emo = iconlist[i];
							var tsrc = emo.src;
							var ttitle = emo.code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,'');
							var tw = (emo.width > 0) ? emo.width : 0;
							var th = (emo.height > 0) ? emo.height : 0;
							msg = msg.replace(new RegExp("___hhb_emote_"+i+"___","g"), emo.img);
						}
						return msg;
					}
					function emotify_main(old,args) {
						var str = args[0];
						var msg = emotify_pre(str);
						args[0] = msg;
						msg = old.apply(this,args);
						msg = emotify_post(msg);
						return msg;
					}
					/* Injecting emoticonize */					
					var method = 'emoticonize',
						objChat = (CurrentChat) ? CurrentChat : Chat.prototype;
					if (method in objChat && !('__hhb_'+method in objChat)) {
						var orgMethod = objChat[method];
						objChat['__hhb_'+method] = true;
						objChat[method] = function() {
							try {
								var args = [	orgMethod.bind(this),
												Array.prototype.slice.apply(arguments)
											];
								return emotify_main.apply(this,args);
							} catch(e) {
								return orgMethod.apply(this,arguments);
							}
						};
					}
					return count;
				},
				_platform.getNewMsg = function() {	return $(selector.newMsg);	};
				_platform.bindResizer = function() {
					var msgs = _platform.getNewMsg(),
						resized = [];
					if (msgs.length > 0) {
						var count = 0;
						var bicount = 0, bircount = 0;
						msgs.each(function() {
							var emoticons = $(this)
								.addClass(cssClass.checkedMsg)
								.children(selector.emoticon)
									.each(function() {
										if ($(this).height() > limitHeight) $(this).addClass(cssClass.resized);
										$(this).addClass(cssClass.msgIcon);
									});
							var resized = $(this).children(selector.msgIconResized)
								.click(function() {
									$(this).toggleClass(cssClass.orgSize);
								});
							bicount += emoticons.length;
							bircount += resized.length;
						});
					}
					return {
						msg: msgs.length, 
						emotified: bicount,
						resized: bircount
					};
				};
				_platform.getMsgBox = function() {	return $(selector.msgBox);	};
				_platform.getMsgInput = function() {	return $(selector.msgBox).val();	};
				_platform.insertText = function(text) {	_platform.replaceText(text);	};
				_platform.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length;
						}
						else if (br == "ff") strPos = txtarea.selectionStart;

						var front = (txtarea.value).substring(0,strPos);  
						var back = (txtarea.value).substring(strPos,txtarea.value.length);
						text = ((front.length>0)?' ':'')+text;
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						}
						else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
					}
				};
				
				/* Name Banner + Badge */
				_platform.getNewNames = function() {	return $(selector.newName);	};
				_platform.bindNameBanner = function() {
					var names = _platform.getNewNames();
					return _platformObj.default.bindNameBanner(names);
				};
				_platform.genBadgeCss = function(badges) {
					var style = '';
					var broadcaster = $.extend({ img: null, width: 0, height: 0 },badges.broadcaster);
					var moderator = $.extend({ img: null, width: 0, height: 0 },badges.moderator);
				
					if (broadcaster.img && broadcaster.width>0 && broadcaster.height>0) {
						style += [	
							'.hhb-pf-justin .tag.broadcaster {',
								'display:inline-block;',
								'padding:0px;',
								'border-radius:0px;',
								'text-indent: -9999px;',
								'width:',(broadcaster.width),'px;',
								'height:',(broadcaster.width),'px;',
								'background: url(',broadcaster.img,') no-repeat center center;',
							'}'].join('');
					}
					if (moderator.img && moderator.width>0 && moderator.height>0) {
						style += [	
							'.hhb-pf-justin .tag.mod {',
								'display:inline-block;',
								'padding:0px;',
								'border-radius:0px;',
								'text-indent: -9999px;',
								'width:',(moderator.width),'px;',
								'height:',(moderator.width),'px;',
								'background: url(',moderator.img,') no-repeat center center;',
							'}'].join('');
					}
					return style;
				};
			},
		};
		
		var debugMsg = function() {
			function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n); }
			if (!debug) return;
			if (!window.console) return;
			var args = Array.prototype.slice.apply(arguments),msgDebugFlag = DEBUG_ALL,debugFlag=(isNumber(debug) ? debug : msgDebugFlag);
			if (args && isNumber(args[0])) msgDebugFlag = args.shift();
			var indent = (	(msgDebugFlag & DEBUG_RUNTIME) && 	'' ||
							(msgDebugFlag & DEBUG_FEATURES) && 	'->' ||
							(msgDebugFlag & DEBUG_SUB) && 		'--->' ||
							(msgDebugFlag & DEBUG_GA) && 		'[ ga ]' ||
							'');
			if (indent!='') args.unshift(indent);
			args.unshift("[HihiBox]");
			if ((msgDebugFlag & debugFlag) > 0) console.log.apply(console,args);
		};
		var setLoadingStatus = function(target,status) {
			if (!loadingStatus[target]) loadingStatus[target] = 0;
			var tloadingStatus = loadingStatus[target];
			var defineStatus = { init: 100, retry: 101, complete: 200, fail: 300 };
			status = (status=='init' && tloadingStatus != 0) ? 'retry' : status;
			var tstatus = defineStatus[status];
			if (!tstatus) tstatus = 0;
			loadingStatus[target] = tstatus;
			if (tstatus==100) setTimerStart(target);
			else if (tstatus>=200) setTimerEnd(target);
		}
		var isStatusInited = function(target) {		var tloadingStatus = loadingStatus[target]; if (!tloadingStatus) return false; return (tloadingStatus>=100);	}
		var isStatusRetry = function(target) {		var tloadingStatus = loadingStatus[target]; if (!tloadingStatus) return false; return (tloadingStatus==101);	}
		var isStatusSuccess = function(target) {	var tloadingStatus = loadingStatus[target]; if (!tloadingStatus) return false; return (tloadingStatus==200);	}
		var isStatusFinished = function(target) {	var tloadingStatus = loadingStatus[target]; if (!tloadingStatus) return false; return (tloadingStatus>=200);	}
		var setTimerStart = function(target) {	return setTimer('start',target);	};
		var setTimerEnd = function(target) {	return setTimer('end',target);	};
		var setTimer = function(act,target) {
			if (!act||!target) return;
			if ($.inArray(act,['start','end'])<0) return;
			var ttimer = timer[target];
			if (!ttimer) return;
			var gaSubmit = false;
			switch (act) {
			case 'start':	ttimer.start = new Date().getTime(), gaSubmit = false;	break;
			case 'end':		ttimer.end = new Date().getTime(), ttimer.duration = ttimer.end-ttimer.start, gaSubmit = true;	break;
			}
			switch (target) {
			case 'bindHolderUI':	if (env.holderUIBinded) gaSubmit = false;	break;
			case 'bindButtonUI':	if (env.buttonUIBinded) gaSubmit = false;	break;
			}
			if (act=='end') {
				var loadedFeature = function(lfeature) {
					var features = env.features, loadedFeatures = env.loadedFeatures;
					$.each(features,function(idx,tfeature) {
						if (tfeature==lfeature) loadedFeatures = loadedFeatures.push(lfeature);
					});
				};
				var isAllFeaturesLoaded = function() {
					var features = env.features, loadedFeatures = env.loadedFeatures, count = 0;
					$.each(features,function(idx,feature) {
						$.each(loadedFeatures,function(idx2,lfeature) {
							if (feature==lfeature) {
								count++;
								return false;
							}
						});
					});
					return (count>=features.length);
				};
				/* env set */
				switch (target) {
				case 'initIconListData':		env.isIconListDataInited = true;	break;
				case 'initUserInterface':		env.isUserInterfaceInited = true;	break;
				case 'initEmoticon':			env.isEmoticonInited = true;	break;
				case 'initNameBanner':			env.isNameBannerInited = true;	break;
				case 'initDarkMode':			env.isDarkModeInited = true;	break;
				case 'initBookmark':			env.isBookmarkInited = true;	break;
				case 'initIncomingParser':		env.isIncomingParserInited = true;	break;
				/* initIconListData */
				case 'injectIcon':				env.iconInjected = true;	break;
				case 'analyzeBuiltinIcon':		env.builtinIconLoaded = true;	break;
				case 'analyzePlatformIcon':		env.platformIconLoaded = true;	break;
				case 'analyzeGJTVIcon':			env.gjtvIconLoaded = true;	break;
				/* initUserInterface */
				case 'bindHolderUI':			env.holderUIBinded = true;	break;
				case 'bindButtonUI':			env.buttonUIBinded = true;	break;
				/* initEmoticon */
				case 'activateSortMode':		env.sortModeActivated = true;	break;
				/* initNameBanner */
				case 'analyzeNameBanner':		/* setOnAnalyzed */	break;
				/* initDarkMode */
				case 'bindDarkModeBtn':			env.darkModeActivated = true; break;
				/* initBookmark */
				case 'bindPlayerBookmarkBtn':	env.playerBookmarkBtnActivated = true; break;
				case 'bindBookmarkBtn':			env.bookmarkBtnActivated = true; break;
				/* initIncomingParser*/
				case 'initIncomingParser':		env.isIncomingParserInited = true;	break;
				}
				/* update loaded feature */
				switch (target) {
				case 'initIconListData':	loadedFeature('iconlist_data');		break;
				case 'initUserInterface':	loadedFeature('ui');					break;
				case 'initEmoticon':		loadedFeature('emoticon');			break;
				case 'initNameBanner':		loadedFeature('name_banner');		break;
				case 'initDarkMode':		loadedFeature('darkmode');			break;
				case 'initBookmark':		loadedFeature('bookmark');			break;
				case 'initIncomingParser':	loadedFeature('incoming_parser');	break;
				}
				/* check timer end */
				switch (target) {
				case 'initIconListData':
				case 'initUserInterface':
				case 'initEmoticon':
				case 'initNameBanner':
				case 'initDarkMode':
				case 'initBookmark':
				case 'initIncomingParser':
					if (isAllFeaturesLoaded()) setLoadingStatus('initialize','complete');
					break;
				
				/* initIconListData */
				case 'injectIcon':
				case 'analyzeBuiltinIcon':
				case 'analyzePlatformIcon':
				case 'analyzeGJTVIcon':
					if (isStatusSuccess('analyzeBuiltinIcon') && isStatusFinished('analyzePlatformIcon')) setLoadingStatus('initIconListData','complete');
					break;
				/* initUserInterface */
				case 'bindHolderUI':
				case 'bindButtonUI':
					if (isStatusSuccess('bindHolderUI') && isStatusSuccess('bindButtonUI')) {
						setLoadingStatus('bindUI','complete');
						setLoadingStatus('initUserInterface','complete');
					}
					break;
				/* initEmoticon */
				case 'bindHolderToggleBtn':
				case 'activateSortMode':
					if (isStatusSuccess('activateSortMode')) setLoadingStatus('initEmoticon','complete');
					break;
				/* initNameBanner */
				case 'analyzeNameBanner':
					if (isStatusSuccess('analyzeNameBanner')) setLoadingStatus('initNameBanner','complete');
					break;
				/* initDarkMode */
				case 'bindDarkModeBtn':
					if (isStatusSuccess('bindDarkModeBtn')) setLoadingStatus('initDarkMode','complete');
					break;
				/* initBookmark */
				case 'bindPlayerBookmarkBtn':
				case 'bindBookmarkBtn':
					if (isStatusFinished('bindPlayerBookmarkBtn') && isStatusSuccess('bindBookmarkBtn')) setLoadingStatus('initBookmark','complete');
					break;
				/* initIncomingParser */
				case 'initIncomingParser':
					if (isStatusSuccess('initIncomingParser')) setLoadingStatus('initIncomingParser','complete');
					break;
				}
			}
			if (gaSubmit && ttimer.start > 0 && ttimer.duration > 0) {
				_gaTracker('core','process',target,ttimer.duration);
			}
		};
		
		var envCheck = function() {
			var url = document.URL.toLowerCase();
			debugMsg(DEBUG_ENV|DEBUG_ENV_INIT,'Detecting Platform... [URI:',url,']');
			env.hasjQuery = (!(typeof $ === 'undefined'));
			env.platform = (url.match("^http:\/\/[^\/]*hitbox\.tv\/") ? 'hitbox' :
								(url.match("^http:\/\/[^\/]*twitch\.tv\/") ? 'twitch' : 
									(url.match("^http:\/\/[^\/]*justin\.tv\/") ? 'justin': 
										(url.match("^http:\/\/[^\/]*ustream\.tv\/") ? 'ustream': '')
							))).toLowerCase();
			env.platform = (($.inArray(env.platform,supportedPlatform) >= 0) ? env.platform : '');
			env.platform = ((_platformObj[env.platform]) ? env.platform : '');
			
			/* check platform */
			if (env.platform=='') {	debugMsg(DEBUG_ENV|DEBUG_ENV_FAIL,'Platform not detected! Initialization aborted! [',url,']');	return;	}
			
			/* chat excluded url */
			platformObj = new _platformObj[env.platform];
			env.isExcluded = platformObj.isExcluded();
			if (env.isExcluded) {	debugMsg(DEBUG_ENV|DEBUG_ENV_FAIL,'Excluded URL! Initialization aborted! [',url,']');	return;	}
			
			/* check channel */
			env.channel = platformObj.getChannelID();
			if (!env.channel || env.channel=='') {	debugMsg(DEBUG_ENV|DEBUG_ENV_FAIL,'Channel not detected! Initialization aborted! [',url,']');	return;	}
			
			/* prevent duplicate load of HihiBox */
			var hhbLoaded = ($('body[class*="hhb-pf-"]').length>0);
			if (hhbLoaded) {	debugMsg(DEBUG_ENV|DEBUG_ENV_FAIL,'HihiBox detected! Initialization aborted!');	return;	}
			
			platformObj.initialize();
			env.userid = platformObj.getUsername();
			env.features = platformObj.getFeatures();
			debugMsg(DEBUG_ENV|DEBUG_ENV_SUCCESS,'Detected [',env,']');
			_gaTracker('env','platform',env.platform);
			_gaTracker('env','channel',[env.channel,env.platform].join('@'));
			if (env.userid && env.userid!='') {
				_gaTracker('env','user',[env.userid,env.platform].join('@'));
				_gaTracker('env','audience',[env.userid,env.channel,env.platform].join('@'));
			}
			
			if ($.inArray('emoticon',env.features)>=0) env.listeningIconListData = true;
			if ($.inArray('name_banner',env.features)>=0) env.listeningNameBannerData = true;
			
			/* update last watching datetime of current channel to extension */
			var _channel = { platform: env.platform, channel: env.channel };
			chrome.runtime.sendMessage(editorExtensionId, {updateLastWatch: _channel},function(response) {});
			
			env.isInitialize = true;
			pollUsage();
			pollSettings();
		};
		
		/* Chrome extension communication */
		var sendMessage = function(request,callback) {
			chrome.runtime.sendMessage(editorExtensionId, request,
				function(response) {
					callback.apply(this,[response]);
				});
		}
		var pollSettings = function() {
			sendMessage({getSettings: true},
				function(response) {
					if (!response) return;
					if (!response.success) return;
					if (!response.settings) return;
					env.settingsLoaded = true;
					$.extend(settings,response.settings);
					bindIconListLocale();
					debugMsg(DEBUG_EXT,'pollSettings',settings);
					/* initialize core */
					initialize();
				});
		};
		var pushSettings = function(newSettings) {
			$.each(newSettings,function(key,obj) {
				if (settings[key]==obj) delete newSettings[key];
			});
			if ($.isEmptyObject(newSettings)) return;
			$.extend(settings,newSettings);
			if (env.settingsLoaded) {
				sendMessage({saveSettings: newSettings},
					function(response) {
						if (!response) return;
						if (!response.success) return;
						if (!response.settings) return;
						$.extend(settings,response.settings);
						debugMsg(DEBUG_EXT,'pushSettings',newSettings,settings);
					});
			}
		};
		var pollUsage = function() {
			sendMessage({getUsage: true},
				function(response) {
					if (!response) return;
					if (!response.success) return;
					if (!response.usage) return;
					env.usageLoaded = true;
					$.extend(listUsage,response.usage);
					debugMsg(DEBUG_EXT,'pollUsage',listUsage);
				});
		};
		var pushUsage = function(newUsage) {
			$.extend(listUsage,newUsage);
			if (env.usageLoaded) {
				sendMessage({saveUsage: newUsage},
					function(response) {
						if (!response) return;
						if (!response.success) return;
						if (!response.usage) return;
						$.extend(listUsage,response.usage);
						debugMsg(DEBUG_EXT,'pushUsage',listUsage);
					});
			}
		};
		var clearUsage = function() {
			sendMessage({clearUsage: true},
				function(response) {
					if (!response) return;
					if (!response.success) return;
					listUsage = {};
					debugMsg(DEBUG_EXT,'clearUsage',listUsage);
				});
		};
		
		/* Initializer */
		var initialize = function() {
			setLoadingStatus('initialize','init');
			debugMsg(DEBUG_ENV,'Initializing...');
			$.each(env.features,function(idx,feature) {
				switch (feature) {
				case 'ui':				initUserInterface();	break;
				case 'emoticon':		env.listeningIconListData = true;		break;
				case 'name_banner':		env.listeningNameBannerData = true;		break;
				case 'darkmode':		initDarkMode();			break;
				case 'bookmark':		initBookmark();			break;
				case 'incoming_parser':	initIncomingParser();	break;
				}
			});
			debugMsg(DEBUG_ENV,'Initialized');
		};
		var initIconListData = function() {
			var injectIcon = function() {
				if (!env.builtinIconLoaded || !env.platformIconLoaded) return false;
				setLoadingStatus('injectIcon','init');
				debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Injecting Icon...');
				var count = platformObj.injectIcon(listParse);
				if (count > 0) {
					debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Injected Icon [I:',count,']');
					setLoadingStatus('injectIcon','complete');
				} else {
					debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Injected Icon Failed!');
					setLoadingStatus('injectIcon','fail');
				}
			};
			var analyzeBuiltinIcon = function() {
				if (retryCount.analyzeBuiltinIcon==0) debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Analyzing Built-in Icon...'),setLoadingStatus('analyzeBuiltinIcon','init');
				else debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Analyzing Built-in Icon Retry...'),setLoadingStatus('analyzeBuiltinIcon','retry');
				var iconlist = listIcon, analyzediconlist;
				analyzediconlist = analyzeIcon(iconlist);
				if (!analyzediconlist || analyzediconlist.length==0) {
					if (retryCount.analyzeBuiltinIcon < limit.analyzeBuiltinIcon) {
						setTimeout(function() { analyzeBuiltinIcon(); },delay.analyzeBuiltinIcon);
						retryCount.analyzeBuiltinIcon++;
					} else {
						debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Analyzing Built-in Icon Failed!');
						setLoadingStatus('analyzeBuiltinIcon','fail')
					}
					return;
				}
				setLoadingStatus('analyzeBuiltinIcon','complete');
				retryCount.analyzeBuiltinIcon = 0;
				refreshList();
			};
			var analyzePlatformIcon = function() {
				if (retryCount.analyzePlatformIcon==0) debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Analyzing Platform Icon...'),setLoadingStatus('analyzePlatformIcon','init');
				else debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Analyzing Platform Icon Retry...'),setLoadingStatus('analyzePlatformIcon','retry');
				var iconlist, analyzediconlist;
				if (!env.builtinIconLoaded) return false;
				iconlist = platformObj.getPlatformIcon();
				analyzediconlist = analyzeIcon(iconlist);
				if (!analyzediconlist || analyzediconlist.length==0) {
					if (retryCount.analyzePlatformIcon < limit.analyzePlatformIcon) {
						setTimeout(function() { analyzePlatformIcon(); },delay.analyzePlatformIcon);
						retryCount.analyzePlatformIcon++;
					} else {
						debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Analyzing Platform Icon Failed!');
						setLoadingStatus('analyzePlatformIcon','fail');
					}
					return false;
				}
				listIcon = listIcon.concat(analyzediconlist);
				setLoadingStatus('analyzePlatformIcon','complete');
				retryCount.analyzePlatformIcon = 0;
				refreshList();
			};
			var analyzeGJTVIcon = function() {
				if (retryCount.analyzeGJTVIcon==0) debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Analyzing GJTV Icon...'),setLoadingStatus('analyzeGJTVIcon','init');
				else debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Analyzing GJTV Icon Retry...'),setLoadingStatus('analyzeGJTVIcon','retry');
				var iconlist, analyzediconlist;
				if (!env.builtinIconLoaded) return;
				var getGJTVIcon = function() {
					var list = [], dgenre = [].concat('GJTV');
					if (	typeof(gjtv_icon_base) !== 'undefined' && 
							typeof(gjtv_icon_list) !== 'undefined'
						) {
						$.each(gjtv_icon_list,function(idx,obj) {
							if (obj && obj.length>=2) {
								var tcode = [].concat(obj[0]),
									tsrc = obj[1].match(/^([^']+)\'/)[1],
									twidth = obj[1].match(/width=\'(\d+)\'/)[1],
									theight = obj[1].match(/height=\'(\d+)\'/)[1];
								if (tsrc.indexOf("http") == -1) tsrc = gjtv_icon_base + tsrc;
								
								if (tcode && tsrc && twidth && theight && twidth>0 && theight>0) {
									list.push({
										code: tcode,
										src: tsrc,
										width: parseInt(twidth), height: parseInt(theight),
										genre: dgenre
									});
								}
							}
						});
					}
					return list;
				};
				iconlist = getGJTVIcon();
				analyzediconlist = analyzeIcon(iconlist);
				if (!analyzediconlist || analyzediconlist.length==0) {
					if (retryCount.analyzeGJTVIcon < limit.analyzeGJTVIcon) {
						setTimeout(function() { analyzeGJTVIcon(); },delay.analyzeGJTVIcon);
						retryCount.analyzeGJTVIcon++;
					} else {
						debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Analyzing GJTV Icon Failed!');
						setLoadingStatus('analyzeGJTVIcon','fail');
					}
					return;
				}
				listIcon = listIcon.concat(analyzediconlist);
				setLoadingStatus('analyzeGJTVIcon','complete');
				retryCount.analyzeGJTVIcon = 0;
				refreshList();
			};
			var analyzeIcon = function(iconlist) {
				var count = 0;
				var genreOther = 'Other',
					genreRecent = 'Recent';
				if (!(iconlist && iconlist.length > 0)) return false;
				var analyzediconlist = [];
				/* Check if code is duplicated */
				var codeIsDuplicated = function(code) {
					var ncode = [].concat(code);
					for (var i=0;i<ncode.length;i++) if (listLookup[ncode[i]]) return true;
					return false;
				};
				$.each(iconlist,function(idx,obj) {
					/* analyze Icon */
					var code = [].concat(obj.code);
					if (codeIsDuplicated(code)) return true;
					for (var i=0;i<code.length;i++) listLookup[code[i]] = obj;
					var src = obj.src,
						genre = (function(genre,code) { var tgenre=[]; if (genre) $.each(genre,function(idx,obj){ if($.inArray(obj,tgenre)<0) tgenre.push(obj); }); if (tgenre.length==0) tgenre.push(genreOther); if (listUsage[code]) tgenre.push(genreRecent); return tgenre; })(obj.genre,code[0]),
						usage = $.extend({	count: 0, lastUsed: 0	},(listUsage[code[0]]) ? listUsage[code[0]] : {}),
						codelist = code.join(", "),
						title = codelist,
						tstyle = (obj.width>0&&obj.height>0) ? ' style="width:'+obj.width+'px;height:'+obj.height+'px;"' : '',
						img = '<img src="'+src+'" title="'+title+'"'+tstyle+' class="'+cssClass.msgIcon+((obj.height > limit.msgIconHeight) ? ' '+cssClass.resized : '')+'"/>',
						re = "";
					$.each(code,function(idx2,code2) { re += (re!="" ? '|' : '')+code2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); });
					var regex = new RegExp(re,'g');
					obj.id = nextIconID;	nextIconID++;
					obj.genre = genre;
					obj.title = title;
					obj.regex = regex;
					obj.img = img;
					obj.usage = usage;
					
					if (listGenre[listGenre.length-1] == genreOther) {
						listGenre.pop();
					}
					/* add to genre list */
					$.each(genre,function(idx3,iconGenre) {
						var cg = 0;
						if (iconGenre != genreOther) {
							$.each(listGenre,function(idx4,genrei) {
								if (genrei == iconGenre) cg++;
							});
							if (cg == 0) listGenre.push(iconGenre);
						}
					});
					
					/* add to parse list */
					listParse.push(obj);
					/* add to new icon list */
					analyzediconlist.push(obj);
					count++;
				});
				
				if ($.inArray(genreOther,listGenre) < 0) {
					listGenre.push(genreOther);
				}
				listParse.sort(function(a,b) { return b.code[0].length-a.code[0].length; });
				
				retryCount.analyzeIcon = 0;
				
				if (count>0) debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Analyzed Icon List [ T:',iconlist.length,', G:',listGenre.length,', P:',listParse.length,']');
				return analyzediconlist;
			};
			var refreshList = function() {
				injectIcon();
				version.genreList.pending++;
				version.iconList.pending++;
			}
			
			if (isStatusInited('initIconListData')) return false;
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initIconListData');
			setLoadingStatus('initIconListData','init');
			analyzeBuiltinIcon();
			analyzePlatformIcon();
			/* analyze GJTV Icon in twitch / justin */
			if ($.inArray(env.platform,['twitch','justin']) >= 0) analyzeGJTVIcon();
		}
		var initUserInterface = function() {
			var detectUI = function() {
				setTimeout(function() { detectUI(); },delay.detectUI);
				
				debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Detecting UI...');
				var $holder = $(selector.holder);
				var $button = $(selector.button);
				if ($holder.length > 0 && $button.length > 0) {
					retryCount.detectUI = 0;
					return true;
				}
				debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'UI Not Detected...');
				if (retryCount.detectUI==0) bindUI();
				retryCount.detectUI++;
			};
			var bindUI = function() {
				setLoadingStatus('bindUI','init');
				debugMsg(DEBUG_SUB|DEBUG_SUB_INIT,'Binding UI...');
				activateRebindUIBtn();
				bindHolderUI();
				bindButtonUI();
			};
			var activateRebindUIBtn = function() {
				var $showChatBtn = platformObj.getShowChatBtn();
				if ($showChatBtn.length == 0) {
					if (retryCount.activateRebindUIBtn < limit.activateRebindUIBtn) {
						setTimeout(function() { activateRebindUIBtn(); },delay.activateRebindUIBtn);
						retryCount.activateRebindUIBtn++;
						debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Activating Rebind UI Button Retry...[ R:',retryCount.activateRebindUIBtn,']');
						setLoadingStatus('activateRebindUIBtn','retry');
					} else {
						debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Activating Rebind UI Button Failed!');
						setLoadingStatus('activateRebindUIBtn','fail');
					}
					return false;
				}
				if (!$showChatBtn.hasClass(cssClass.inited)) {
					$showChatBtn.click(function() {
						bindUI();
					}).addClass(cssClass.inited);
					debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Activated Rebind UI Button');
					setLoadingStatus('activateRebindUIBtn','complete');
				}
			};
			var bindHolderUI = function() {
				var $holder = $(selector.holder);
				if ($holder.length > 0) return true;
				if (retryCount.bindHolderUI==0) setLoadingStatus('bindHolderUI','init');
				var $holderCon = platformObj.getHolderContainer();
				if ($holderCon.length > 0) {
					var $palHolder = platformObj.genHolder(id,versionInfo).hide();
					$palHolder.appendTo($holderCon);
					bindIconListLocale();
					
					checkVersion();
					
					retryCount.bindHolderUI = 0;
					debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Binded Holder UI [G:',listGenre.length,', I:',listIcon.length,']');
					setLoadingStatus('bindHolderUI','complete');
					return true;
				}
				setTimeout(function() { bindHolderUI(); },delay.bindHolderUI);
				retryCount.bindHolderUI++;
				debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Binding Holder UI Retry...[ R:',retryCount.bindHolderUI,']');
				setLoadingStatus('bindHolderUI','retry');
			};
			var bindButtonUI = function() {
				var $button = $(selector.button);
				if ($button.length > 0) return true;
				if (retryCount.bindButtonUI==0) setLoadingStatus('bindButtonUI','init');
				var $buttonCon = platformObj.getButtonContainer();
				if ($buttonCon.length > 0) {
					var $palButton = platformObj.genToggleButton(id.button);
					var palButtonFront = platformObj.getButtonFront();
					if (palButtonFront.length > 0) $palButton.insertAfter(palButtonFront);
					else $buttonCon.append($palButton);
					platformObj.onBindedToggleButton();
					retryCount.bindButtonUI = 0;
					debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Binded Toggle Button UI');
					setLoadingStatus('bindButtonUI','complete');
					return true;
				}
				setTimeout(function() { bindButtonUI(); },delay.bindButtonUI);
				retryCount.bindButtonUI++;
				debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Binding Toggle Button UI Retry...[ R:',retryCount.bindButtonUI,']');
				setLoadingStatus('bindButtonUI','retry');
			};
			var checkVersion = function() {
				chrome.runtime.sendMessage(editorExtensionId, {getVersionInfo: true},
					function(response) {
						if (!response || !response.success || !response.versionInfo) {
							/* For v1.6 or lower */
							$.extend(versionInfo,{
								newRelease: true,
								lastExtensionVersion: 'v1.7',
								lastSummary: "[概要] 新增Bookmark, 開台提示, 管理頁面, HihiBox 更新提示等功能"
							});
						} else {
							$.extend(versionInfo,response.versionInfo);
						}
						initInfo();
					});
			};
			var initInfo = function() {
				var $name = $('#hhb-header .name');
				$name.text(versionInfo.name)
					.attr('title',locale.getLocaleMsg('info.credit',[versionInfo.credits.developer.join(', '),versionInfo.credits.specialThanks.join(', ')]));
				var $version = $('#hhb-header .version');
				$version.text(versionInfo.coreVersion)
					.attr('title',locale.getLocaleMsg('info.last_update',[versionInfo.lastUpdate]));
					
				if (versionInfo.newRelease) {
					var $update = $('<span class="update"></span>')
										.insertAfter($version)
										.attr('title',versionInfo.name+' '+versionInfo.lastExtensionVersion+' - '+versionInfo.lastSummary);
					$name.addClass('newRelease');
					$version.addClass('newRelease');
				}
				
				$('a.hhb').attr('href',versionInfo.siteURI);
				$('a.fb').attr('href',versionInfo.pageURI);
			};
			
			if (isStatusInited('initUserInterface')) return false;
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initUserInterface');
			setLoadingStatus('initUserInterface','init');
			detectUI();
		};
		var initEmoticon = function() {
			var bindUIControl = function() {
				bindHolderToggleBtn();		/* Activate holder toggle button */
				toggleTimestamps('show');	/* Show timestamps */
				activateSortMode()			/* Activate sort mode */
				
				version.genreList.pending++;
				version.iconList.pending++;
				bindGenreList();	/* list all HihiBox Genre */
				bindIconList();	/* list all HihiBox icon */
			};
			var bindHolderToggleBtn = function() {
				if (retryCount.bindHolderToggleBtn==0) setLoadingStatus('bindHolderToggleBtn','init');
				var $button = $(selector.button);
				if ($button.length==0) {
					setTimeout(function() { bindHolderToggleBtn(); },delay.bindHolderToggleBtn);
					retryCount.bindHolderToggleBtn++;
					debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Activating Holder Toggle Button Retry...[ R:',retryCount.bindHolderToggleBtn,']');
					setLoadingStatus('bindHolderToggleBtn','retry');
					return false;
				}
				/* Activate holder toggle button */
				$button.click(function() {
						toggleHolder('toggle');
					});
				
				retryCount.bindHolderToggleBtn = 0;
				debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Activated Holder Toggle Button');
				setLoadingStatus('bindHolderToggleBtn','complete');
			}
			var activateSortMode = function() {
				if (retryCount.activateSortMode==0) setLoadingStatus('activateSortMode','init');
				var $sortModeBtn = $(selector.sortModeBtn);
				if ($sortModeBtn.length==0) {
					setTimeout(function() { activateSortMode(); },delay.activateSortMode);
					retryCount.activateSortMode++;
					debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Activating Sort Mode Retry...[ R:',retryCount.activateSortMode,']');
					setLoadingStatus('activateSortMode','retry');
					return false;
				}
				/* Activate sort mode button */
				$sortModeBtn.click(function() {
					toggleSortMode('toggle');
				});
				toggleSortMode('init');
				
				retryCount.activateSortMode = 0;
				debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Activated Sort Mode');
				setLoadingStatus('activateSortMode','complete');
			}
			var selectGenre = function(genre) {
				var act = 'select';
				var aGenre = ($.inArray(genre,listGenre) >= 0 ? genre : settings.last_genre);
				if (genre=='init'||genre=='refresh') { act = genre; aGenre = settings.last_genre; version.sort.pending++;
				} else if (aGenre==settings.last_genre) return false;
				
				sortIconList(true);
				var $genre = $(selector.genreContainerGenre).removeClass(cssClass.active)
					.filter(selector.genre+'[hhb-genre="'+aGenre+'"]').addClass(cssClass.active);
				if ($genre.length==0) return selectGenre(settings.default_genre);
				var $icon = $(selector.iconsetIcon).removeClass(cssClass.iconHide);
				var $hicon = $icon.not([
									selector.icon,
									'[hhb-genre~="'+aGenre+'"]',
									((aGenre=='Recent') ? ':lt(50)' : '')].join('')
								).addClass(cssClass.iconHide);
				var csicon = $icon.length-$hicon.length;
				showIconMsg();
				pushSettings({ last_genre: aGenre });
				
				_gaTracker('genre',act,aGenre);
				debugMsg(DEBUG_RUNTIME,'Selected Genre [G:',aGenre,',I:',csicon,']');
				return true;
			};
			var bindGenreList = function() {
				setTimeout(function() { bindGenreList() },delay.bindGenreList);
				if (version.genreList.current==version.genreList.pending) return;
				var palGenre = $(selector.genreContainer).empty();
				if (!palGenre.length > 0) return;
				$.each(listGenre,function(idx,obj) {
					palGenre.append(
						$('<div class="'+cssClass.genre+'" hhb-genre="'+obj+'">'+obj+'</div>')
							.data('hhb-genre',obj)
							.click(function() {
								var genre = $(this).data('hhb-genre');
								selectGenre(genre);
							})
					);
				});
				version.genreList.current = version.genreList.pending;
				debugMsg(DEBUG_RUNTIME|DEBUG_REFRESH,'Binded Genre List [G:',listGenre.length,']');
			};
			var bindIconList = function() {
				setTimeout(function() { bindIconList() },delay.bindIconList);
				if (version.iconList.current==version.iconList.pending) return;
				var palIconset = $(selector.iconset).empty();
				if (!palIconset.length > 0) return;
				palIconset.append($('<div id="'+id.iconMsgBox+'">-</div>'));
				$.each(listIcon,function(idx,obj) {
					var $icon = 
						$('<div class="'+cssClass.icon+'" hhb-id="'+obj.id+'" hhb-code="'+obj.code[0]+'" hhb-genre="'+obj.genre.join(' ')+'"></div>')
							.data('hhb-code',obj.code.join(' '))
							.data('hhb-object',obj)
							.click(function() {	insertIcon($(this)); })
							.append($(obj.img)
								.error(function() {	$(this).parent().addClass(cssClass.iconMissing); showIconMsg(); })
							);
					obj.domObject = $icon;
					palIconset.append($icon);
				});
				selectGenre('init');	/* select default genre */
				version.iconList.current = version.iconList.pending;
				debugMsg(DEBUG_RUNTIME|DEBUG_REFRESH,'Binded Icon List [I:',listIcon.length,']');
			};
			var toggleHolder = function(act,keepFilter) {
				var $holder = $(selector.holder);
				if ($holder.is(':visible') && act == 'show') return;
				if (!$holder.is(':visible') && act == 'hide') return;
				var $iconset = $(selector.iconset).scrollTop(0);
				if (!keepFilter) {
					$iconset.find(selector.icon).removeClass([cssClass.filterMatch,cssClass.filterNotMatch,cssClass.filterSelected].join(' '));
					currFilterCodeHead = '';
				}
				if (act == 'toggle') {
					$holder.toggle(0);
				} else if (act == 'show') {
					$holder.show(0);
				} else {
					$holder.hide(0);
				}
				var $holder = $(selector.holder),
					$iconMsgBox = $(selector.iconMsgBox)
				var iconsetHeight = 
					$holder.innerHeight()
					-$(selector.header).outerHeight()
					-$(selector.genreContainer).outerHeight();
				$(selector.iconset).outerHeight(iconsetHeight);
				
				sortIconList(true);
				showIconMsg();
			};
			var toggleTimestamps = function(act) {
				var result = platformObj.toggleTimestamps(act);
				if (!result) {
					setTimeout(function() { toggleTimestamps(act); },delay.toggleTimestamps);
				}
			};
			var toggleSortMode = function(sortMode) {
				var act = 'select';
				var aSortMode = (typeof sortMode !== 'string') ? sortMode : settings.icon_sort_by;
				if (sortMode == 'toggle') {
					var nSortMode = (aSortMode<3) ? aSortMode+1 : 1;
					return toggleSortMode(nSortMode);
				} else if (sortMode == 'init') { act = 'init'; aSortMode = settings.icon_sort_by;
				} else if (aSortMode==settings.icon_sort_by) return false;

				var sortModeStr = ['','sort_by_default','sort_by_usage','sort_by_recent'],
					sortModeClass = ['','default','usage','recent'];
				$(selector.sortModeBtn)
					.attr('hhb-locale-title','{{iconlist.'+sortModeStr[aSortMode]+'}}')
					.attr('title','Sort by ...')
					.removeClass(sortModeClass.join(' '))
					.addClass(sortModeClass[aSortMode]);
				pushSettings({ icon_sort_by: aSortMode });
				version.sort.pending++;
				
				sortIconList(true);
				_gaTracker('sortMode',act,sortModeClass[aSortMode]);
				bindIconListLocale();
				return true;
			};
			var sortIconList = function(forced) {
				if (version.sort.current==version.sort.pending) return;
				
				var tsNow = new Date().getTime();
				if (!forced && tsNow<timestamps.sortIconList+delay.sortIconList) {
					debugMsg(DEBUG_RUNTIME|DEBUG_FAIL,'Sort Icon List Skipped');
					return;
				}
				setLoadingStatus('sort','init');
				timestamps.sortIconList = tsNow;
				var f_icon_sort_id = function(a, b) {
					return 	($(a).data('hhb-object').id<$(b).data('hhb-object').id) ? -1 :
							($(a).data('hhb-object').id>$(b).data('hhb-object').id) ? 1 : 0;
				}
				var f_icon_sort_usage = function(a, b) {
					return 	($(a).data('hhb-object').usage.count>$(b).data('hhb-object').usage.count) ? -1 :
							($(a).data('hhb-object').usage.count<$(b).data('hhb-object').usage.count) ? 1 :
								($(a).data('hhb-object').usage.lastUsed>$(b).data('hhb-object').usage.lastUsed) ? -1 :
								($(a).data('hhb-object').usage.lastUsed<$(b).data('hhb-object').usage.lastUsed) ? 1 : 
									($(a).data('hhb-object').id<$(b).data('hhb-object').id) ? -1 :
									($(a).data('hhb-object').id>$(b).data('hhb-object').id) ? 1 : 0;
				}
				var f_icon_sort_recent = function(a, b) {
					return 	($(a).data('hhb-object').usage.lastUsed>$(b).data('hhb-object').usage.lastUsed) ? -1 :
							($(a).data('hhb-object').usage.lastUsed<$(b).data('hhb-object').usage.lastUsed) ? 1 : 
									($(a).data('hhb-object').id<$(b).data('hhb-object').id) ? -1 :
									($(a).data('hhb-object').id>$(b).data('hhb-object').id) ? 1 : 0;
				}
				var f_current_sort = function() {
					switch (settings.icon_sort_by) {
					default:
					case 1:	return f_icon_sort_id;	break;
					case 2:	return f_icon_sort_usage;	break;
					case 3:	return f_icon_sort_recent;	break;
					}
				}
				var f_sort = f_current_sort();
				var sortModeClass = ['','default','usage','recent'];
				$(selector.iconsetIcon).sort(f_sort).appendTo(selector.iconset);
				
				version.sort.current = version.sort.pending;
				debugMsg(DEBUG_RUNTIME|DEBUG_SUCCESS,'Sort Icon List [M:',sortModeClass[settings.icon_sort_by],',V:',version.sort.current,']');
				setLoadingStatus('sort','complete');
			};
			var showIconMsg = function() {
				var $icon = $(selector.iconsetIcon);
				var $sicon = $icon.filter(':visible');
				var i=$icon.length, si=$sicon.length;
				var delay = 3000, fidur = 0, fiop = 1, fodur = 400, foop = 0.3 ,fease = "easeOutQuad";
				var $iconMsgBox = $(selector.iconMsgBox)
									.mouseenter(function() { $(this).clearQueue().fadeTo(fidur,fiop,fease); })
									.mouseleave(function() { $(this).clearQueue().delay(delay).fadeTo(fodur,foop,fease); });
				if (si > 0) 
					if (isFiltering) $iconMsgBox.text(['Filtering...( ',si,'/',i,' )'].join('')).clearQueue().show().fadeTo(fidur,fiop,fease);
					else $iconMsgBox.hide()
				else $iconMsgBox.text('Icon not found').clearQueue().show().fadeTo(fidur,fiop,fease);
				$iconMsgBox.filter(':visible').delay(delay).fadeTo(fodur,foop,fease);
			};
			
			var insertIcon = function(obj) {
				var msg = platformObj.getMsgInput();
				var cidx = 0;
				if (msg) {
					if (msg.length >= filter.minLength) {
						var matches = msg.match(filter.finder);
						var codehead = (matches) ? matches[0].toLowerCase().trim() : '';
						var recodehead = codehead.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
						var clist = obj.data('hhb-code').toLowerCase().split(' ');
						for (var idx=0;idx<clist.length;idx++) if (clist[idx].match(new RegExp('^'+recodehead))) cidx=idx;
					}
				}
				var code = obj.data('hhb-code').split(' ')[cidx];
				insertText(code);
				addIconToRecent(obj,code);
				
				/* Large icon can only be inserted once in a time */
				if (obj.find(selector.msgIcon).hasClass(cssClass.resized)) {
					toggleHolder('hide');
				}
				debugMsg(DEBUG_RUNTIME,'Inserted Icon Code [',code,']');
			};
			var addIconToRecent = function(obj,code) {
				var objIcon = obj.data('hhb-object');
				var idxcode = obj.data('hhb-code').split(' ')[0];
				if (!listUsage[idxcode]) {
					var tgenre = obj.attr('hhb-genre').replace(' Recent','');
					obj.attr('hhb-genre',tgenre+' Recent');
				}
				addPendingUsage(idxcode,objIcon,code);
				version.appendSort++;
			};
			var insertText = function(text) {
				if (isFiltering) {
					platformObj.replaceText(text,filter.finder);
					isFiltering = false;
					var msg = platformObj.getMsgInput();
					msg = (msg) ? msg : '';
					var matches = msg.match(filter.finder);
					var codehead = (matches) ? matches[0].toLowerCase().trim() : '';
					_gaTracker('icon','filter','found',codehead.length);
				} else {
					platformObj.insertText(text);
				}
			};
			
			var selectIcon = function(obj) {
				var selected = $(selector.filterSelectedIcon);
				selected.removeClass(cssClass.filterSelected);
				obj.addClass(cssClass.filterSelected);
				var iconset = $(selector.iconset);
				iconset.scrollTop(obj.offset().top-iconset.offset().top+iconset.scrollTop()-5);
			};
			var moveIconSelection = function(direction,step) {
				var org = $(selector.filterSelectedIcon);
				var nicon = (direction>0) ? org.nextAll(selector.filterMatchIcon) : org.prevAll(selector.filterMatchIcon);
				nicon = (nicon.length > step) ? nicon.slice(step-1,step) : nicon.last();
				if (nicon.length > 0) {
					selectIcon(nicon);
				}
			};
			var selectIconNext = function() {
				moveIconSelection(1,1);
			};
			var selectIconNextPage = function() {
				moveIconSelection(1,filter.pageSize);
			};
			var selectIconLast = function() {
				moveIconSelection(1,Number.MAX_VALUE);
			};
			var selectIconPrev = function() {
				moveIconSelection(-1,1);
			};
			var selectIconPrevPage = function() {
				moveIconSelection(-1,filter.pageSize);
			};
			var selectIconFirst = function() {
				moveIconSelection(-1,Number.MAX_VALUE);
			};
			var insertSelectedIcon = function(dismiss) {
				var selected = $(selector.filterSelectedIcon);
				if (selected.length > 0) {
					var objIcon = selected.first();
					insertIcon(objIcon);
				}
				if (dismiss) {
					toggleHolder('hide');
				}
			};
			var filterIcon = function() {
				isFiltering = false;
				var msg = platformObj.getMsgInput();
				if (msg) {
					if (msg.length >= filter.minLength) {
						var matches = msg.match(filter.finder);
						var codehead = (matches) ? matches[0].toLowerCase().trim() : '';
						var recodehead = codehead.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
						
						if (recodehead.length >= filter.minLength) {
							var fselector = function() { 
								var ism = false, clist = $(this).data('hhb-code').toLowerCase().split(' ');
								for (var idx=0;idx<clist.length;idx++) if (clist[idx].match(new RegExp('^'+recodehead))) return true;
								return false;
							};
							var $icons = $(selector.iconsetIcon);
							var filterNotMatch = $icons.not(fselector);
							var filterMatch = $icons.not(selector.iconMissing).filter(fselector);
							if (currFilterCodeHead!=codehead) {
								filterNotMatch.removeClass([cssClass.filterMatch,cssClass.filterSelected].join(' ')).addClass(cssClass.filterNotMatch);
								filterMatch.removeClass([cssClass.filterNotMatch,cssClass.filterSelected].join(' ')).addClass(cssClass.filterMatch);
								if (filterMatch.length > 0) selectIcon(filterMatch.first());
							}
							if (filterMatch.length > 0) {
								isFiltering = true;
								toggleHolder('show',true);
								showIconMsg();
							} else {
								toggleHolder('hide',true);
							}
							showIconMsg();
							currFilterCodeHead = codehead;
							debugMsg(DEBUG_RUNTIME,'Filtered [C:',codehead,',F:',filterMatch.length,']');
						}
					}
					if (!isFiltering) {
						toggleHolder('hide');
					}
				} else {
					toggleHolder('hide');
				}
			};
			var initializeHotkey = function() {
				var $target = platformObj.getMsgBox(),
					$target = ($target.length > 0 ? $target : $(document));
				$target.keydown(function(e) {
					if ($(selector.holder).is(':visible')) {
						if (e.which == 9 || e.which == 13) {	/* Press [Tab], [Enter] */
							filterIcon();
							insertSelectedIcon(true);
							if (env.platform=='justin') commitUsage();
							return false;
						} else if (e.which == 45) {	/* Press [Insert] */
							insertSelectedIcon();
							return false;
						} else if (e.which == 27) {	/* Press [Escape] */
							toggleHolder('hide');
							return false;
						} else if (e.which == 33) {	/* Press [PageUp] */
							selectIconPrevPage();
							return false;
						} else if (e.which == 34) {	/* Press [PageDown] */
							selectIconNextPage();
							return false;
						} else if (e.which == 36) {	/* Press [Home] */
							selectIconFirst();
							return false;
						} else if (e.which == 35) {	/* Press [End] */
							selectIconLast();
							return false;
						} else if (e.which == 37) {	/* Press [Left] */
							selectIconPrev();
							return false;
						} else if (e.which == 39) {	/* Press [Right] */
							selectIconNext();
							return false;
						}
					} else {
						if (e.which == 13) {	/* Press [Enter] (Send Message) */
							commitUsage();
						}
					}
				}).keyup(function(e) {
					if ((e.which == 8 || e.which == 32 || e.which == 46) ||	/* backspace, space, delete */
						(e.which >= 48 && e.which <= 90) ||	/* 0-9, a-z */
						(e.which >= 96 && e.which <= 111) || /* numpad */
						(e.which >= 186 && e.which <= 222) /* symbol */
					) {
						if (timerFilter) clearTimeout(timerFilter);
						timerFilter = setTimeout(function() {
							filterIcon();
						},delay.filter);
					}
					if ($(selector.holder).is(':visible')) {
						if (e.which == 13) {	/* Press [Enter] */
							toggleHolder('hide');
							return false;
						}
					}
				});
			};
			
			var addPendingUsage = function(idxcode,objIcon,code) {
				var usage = (listPendingUsage[idxcode]) ? listPendingUsage[idxcode].usage : { count:0, lastUsed:0 };
				usage = {	count: usage.count+1, 
							lastUsed: new Date().getTime()	};
				code = (code) ? code : objIcon.code[0];
				listPendingUsage[idxcode] = { icon: objIcon, code: code, usage: usage };
			};
			var commitUsage = function() {
				if (env.usageLoaded) {
					var count=0,tpusage={};
					$.each(listPendingUsage, function(key,obj) {
						var tusage = $.extend({count:0,lastUsed:0},obj.usage);
						tpusage[key] = tusage;
						count++;
					});
					listPendingUsage = {};
					if (count==0) return false;
					sendMessage({commitUsage: tpusage},
						function(response) {
							if (!response) return;
							if (!response.success) return;
							if (!response.count) return;
							if (response.count==0) return;
							version.sort.pending++;
							debugMsg(DEBUG_EXT,'Icon Usage Committed');
						});
				}
			};
			var resetUsage = function() {
				$.each(listIcon,function(key,obj) {
					var icon = obj;
					var idx = icon.genre.indexOf('Recent');
					if (idx > -1) icon.genre.splice(idx, 1);
					icon.usage.count = 0;
					icon.usage.lastUsed = 0;
					icon.domObject.attr('hhb-genre',icon.genre.join(' '));
				});
				listUsage = {};
				clearUsage();
				version.sort.pending++;
				selectGenre('refresh');
				debugMsg(DEBUG_EXT,'Usage Data Reset!');
			};
			
			if (isStatusInited('initEmoticon')) return false;
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initEmoticon');
			setLoadingStatus('initEmoticon','init');
			initializeHotkey();
			bindUIControl();
		};
		var initNameBanner = function(nblist,nbcontrol) {
			if (!nblist || !nbcontrol) return false;
			var analyzeNameBanner = function(nblist,nbcontroll) {
				if (env.platform==''|| env.channel=='') return false;
				setLoadingStatus('analyzeNameBanner','init');
				var nbdict = {},objChannel = null;
				var clist,olist=[];
				var reCh = new RegExp('^'+env.channel+'(?:@'+env.platform+')?$','i');
				var reName = new RegExp('^(\\w+)(?:@'+env.channel+')?(?:@'+env.platform+')?$','i');
				var filterName = function(arr,idonly) {
					var res=[],arr=[].concat(arr);
					$.each(arr,function(idx,obj) {
						var m = obj.match(reName);
						if (m) res.push((idonly) ? m[1] : obj);
					});
					return res;
				};
				var style = '';
				/* Search Match Channel */
				$.each(nbcontrol,function(idx,obj) {
					for(var i=0;i<obj.channel.length;i++) {
						if (obj.channel[i].match(reCh)) {
							objChannel = obj;
							break;
						}
					}
				});
				
				/* Channel Object */
				objChannel = $.extend({	whitelistonly:false,
										whitelist: [],
										blacklist: []
									},objChannel);
									
				/* Channel Badge */
				if (objChannel.badge) {
					var badge = objChannel.badge;
					var badges = $.extend({ enable: false, broadcaster: null, moderator: null },badge['default']);
					badges = $.extend(badges,badge[env.platform]);
					
					if (badges.enable) style += platformObj.genBadgeCss(badges);
				}
				
				/* Check Channel Config */
				if (objChannel.whitelistonly) {
					/* Whitelist */
					if (objChannel.whitelist.length > 0) {
						clist = filterName(objChannel.whitelist);
						$.each(nblist,function(idx,obj){
							obj = $.extend({id:[],img:'',width:100,height:16,specialEnroll:false},obj);
							if (obj.specialEnroll) {	/* Special Enroll (always included) */
								var idlist = filterName(obj.id);
								$.each(idlist,function(idx2,obj2) {
									olist[obj2] = obj;
								});
							} else {
								$.each(clist,function(idx2,obj2){
									if ($.inArray(obj2,obj.id)>=0) {
										clist.splice(idx2,1);
										olist[obj2] = obj;
									}
								});
							}
						});
					}
				} else {
					/* import All Name Banner */
					$.each(nblist,function(idx,obj){
						obj = $.extend({id:[],img:'',width:100,height:16,specialEnroll:false},obj);
						clist = filterName(obj.id);
						$.each(clist,function(idx2,obj2){
							olist[obj2] = obj;
						});
					});
				}
				/* Channel blacklist handle */
				if (objChannel.blacklist.length > 0) {
					clist = filterName(objChannel.blacklist);
					for (var i=0;i<clist.length;i++) {
						if (olist[clist[i]] && !olist[clist[i]].specialEnroll) {
							delete olist[clist[i]];
						}
					}
				}
				/* remove namespace */
				/* generate css */
				var tlist = $.extend({},olist);
				var count=0;
				olist = {};
				$.each(tlist,function(key,obj) {
					var m = key.match(reName);
					if (m.length>=2) {
						var classname = 'nb-hhb-'+count;
						var nobj = $.extend(obj,{
								cssClass: [cssClass.nameBanner,classname].join(' '),
								style: [	'.',cssClass.nameBanner,'.',classname,'{',
											'height: ',obj.height,'px;',
											'background-image: url(',obj.img,');',
											'}'
										].join('')
							});
						olist[m[1]] = nobj;
						style+=nobj.style;
						count++;
					}
				});
				
				if (count>0) {
					/* bind css */
					$('style.hhb-nb-style').detach();
					$('<style type="text/css" class="hhb-nb-style">').text(style).appendTo("head");
					env.nameBannerEnabled = true;
				}
				setLoadingStatus('analyzeNameBanner','complete');
				debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Analyzed Name Banner List [NB:',count,']');
				return olist;
			};

			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initNameBanner');
			setLoadingStatus('initNameBanner','init');
			return analyzeNameBanner(nblist,nbcontrol);
		};
		var initDarkMode = function() {
			var toggleDarkMode = function(darkMode) {
				var act = 'select';
				var aDarkMode = (typeof darkMode !== 'string') ? darkMode : !settings.dark_mode;
				if (darkMode == 'toggle') {
					return ($(selector.darkModeAcceptor).hasClass(cssClass.darkMode)) ?
								toggleDarkMode(false) : toggleDarkMode(true);
				} else if (darkMode == 'init') { act = 'init'; aDarkMode = settings.dark_mode;
				} else if (aDarkMode==settings.dark_mode) return false;
				if (aDarkMode) {
					if (!$(selector.darkModeAcceptor).hasClass(cssClass.darkMode)) {
						$(selector.darkModeAcceptor).addClass(cssClass.darkMode);
					}
				} else {
					if ($(selector.darkModeAcceptor).hasClass(cssClass.darkMode)) {
						$(selector.darkModeAcceptor).removeClass(cssClass.darkMode);
					}
				}
				$(selector.darkModeBtn)
					.attr('hhb-locale-title','{{iconlist.'+(aDarkMode?'dark_mode':'light_mode')+'}}')
					.attr('title',(aDarkMode ? 'Dark':'Light')+' Mode');
				pushSettings({ dark_mode: aDarkMode });
				_gaTracker('darkMode',act,(aDarkMode ? 'dark' : 'light'));
				bindIconListLocale();
				return true;
			};
			var bindDarkModeBtn = function() {
				if (retryCount.bindDarkModeBtn==0) setLoadingStatus('bindDarkModeBtn','init');
				var $darkmodeBtn = $(selector.darkModeBtn);
				if ($darkmodeBtn.length==0) {
					setTimeout(function() { bindDarkModeBtn(); },delay.bindDarkModeBtn);
					retryCount.bindDarkModeBtn++;
					debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Activating Dark/Light Mode Retry...[ R:',retryCount.bindDarkModeBtn,']');
					setLoadingStatus('bindDarkModeBtn','retry');
					return false;
				}
				/* Activate dark mode button */
				$darkmodeBtn.click(function() {
					toggleDarkMode('toggle');
				});
				toggleDarkMode('init');
				
				retryCount.bindDarkModeBtn = 0;
				debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Activated Dark/Light Mode');
				setLoadingStatus('bindDarkModeBtn','complete');
			};
			
			if (isStatusInited('initDarkMode')) return false;
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initDarkMode');
			setLoadingStatus('initDarkMode','init');
			bindDarkModeBtn();
		};
		var initBookmark = function() {
			var checkIsBookmarked = function() {
				var _channel = { platform: env.platform, channel: env.channel };
				chrome.runtime.sendMessage(editorExtensionId, {isBookmarked: _channel},
					function(response) {
						if (!response) $(selector.bookmarkBtn).hide();
						else if (response.success) {
							debugMsg(DEBUG_ENV,'Bookmark Status - '+((response.isBookmarked)?'':'Not ')+'Bookmarked [C:',[env.channel,env.platform].join('@'),']');
							if (response.isBookmarked) {
								$(selector.bookmarkBtn)
									.addClass('isBookmarked')
									.attr('hhb-locale-title','{{iconlist.bookmarked}}')
									.attr('title','Bookmarked');
								$(selector.playerBookmark)
									.addClass('isBookmarked')
									.attr('hhb-locale-title','{{info.name}} - {{iconlist.bookmarked}}')
									.attr('title','Bookmarked');
							} else {
								$(selector.bookmarkBtn)
									.removeClass('isBookmarked')
									.attr('hhb-locale-title','{{iconlist.bookmark}}')
									.attr('title','Bookmark');
								$(selector.playerBookmark)
									.removeClass('isBookmarked')
									.attr('hhb-locale-title','{{info.name}} - {{iconlist.bookmark}}')
									.attr('title','Bookmark');
							}
						} else {
							$(selector.bookmarkBtn).hide();
						}
						bindIconListLocale();
					});
			};
			var bindPlayerBookmarkBtn = function() {
				var $playerBookmark = $(selector.playerBookmark);
				if ($playerBookmark.length > 0) return true;
				if (retryCount.bindPlayerBookmarkBtn==0) setLoadingStatus('bindPlayerBookmarkBtn','init');
				var $player = platformObj.getPlayer();
				if ($player.length > 0) {
					var $playerBookmark = platformObj.genPlayerBookmarkBtn(id.playerBookmark);
					var isPendingHide = true;
					var f_showBtn = function() { isPendingHide = false; $playerBookmark.css({ top: $player.position().top, left: $player.position().left }).show(); };
					var f_hideBtn = function() { isPendingHide = true; setTimeout(function() { if (isPendingHide) $playerBookmark.hide(); },400); };
					$playerBookmark.hide()
						.click(function() { toggleBookmark(); })
						.mousemove(function() { f_showBtn(); })
						.insertAfter($player);
					$player
						.mouseover(function() { f_showBtn(); })
						.mousemove(function() { f_showBtn(); })
						.mouseout(function() { f_hideBtn(); });
					checkIsBookmarked();
					retryCount.bindPlayerBookmarkBtn = 0;
					debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Binded Player Bookmark Button');
					setLoadingStatus('bindPlayerBookmarkBtn','complete');
					return true;
				}
				if (retryCount.bindPlayerBookmarkBtn < limit.bindPlayerBookmarkBtn) {
					setTimeout(function() { bindPlayerBookmarkBtn(); },delay.bindPlayerBookmarkBtn);
					retryCount.bindPlayerBookmarkBtn++;
					debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Binding Player Bookmark Button Retry...[ R:',retryCount.bindPlayerBookmarkBtn,']');
					setLoadingStatus('bindPlayerBookmarkBtn','retry');
				} else {
					debugMsg(DEBUG_SUB|DEBUG_SUB_FAIL,'Binding Player Bookmark Button Failed!');
					setLoadingStatus('bindPlayerBookmarkBtn','fail');
				}
			};
			var bindBookmarkBtn = function() {
				if (retryCount.bindBookmarkBtn==0) setLoadingStatus('bindBookmarkBtn','init');
				var $bookmarkBtn = $(selector.bookmarkBtn);
				if ($bookmarkBtn.length==0) {
					setTimeout(function() { bindBookmarkBtn(); },delay.bindBookmarkBtn);
					retryCount.bindBookmarkBtn++;
					debugMsg(DEBUG_SUB|DEBUG_SUB_RETRY,'Binding Bookmark Button Retry...[ R:',retryCount.bindBookmarkBtn,']');
					setLoadingStatus('bindBookmarkBtn','retry');
					return false;
				}
				/* Activate bookmark button */
				$bookmarkBtn.click(function() { toggleBookmark(); });
				checkIsBookmarked();
				
				retryCount.bindBookmarkBtn = 0;
				debugMsg(DEBUG_SUB|DEBUG_SUB_SUCCESS,'Binded Bookmark Button');
				setLoadingStatus('bindBookmarkBtn','complete');
			}
			var toggleBookmark = function() {
				/* Make a simple request: */
				var _bookmark = { platform: env.platform, channel: env.channel };
				chrome.runtime.sendMessage(editorExtensionId, {toggleBookmark: _bookmark},
					function(response) {
						if (!response) $(selector.bookmarkBtn).hide();
						else if (response.success) checkIsBookmarked();
					});
			}
			
			if (isStatusInited('initBookmark')) return false;
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initBookmark');
			setLoadingStatus('initBookmark','init');
			bindBookmarkBtn();
			bindPlayerBookmarkBtn();
		};
		var initIncomingParser = function() {
			var parseIncoming = function() {
				var results = { msgParsed: 0, iconEmotified: 0, iconResized: 0, nameBannerShown: 0};
				
				/* bind name banner */
				if (env.nameBannerEnabled) {
					var result = platformObj.bindNameBanner();
					if (result.name>0) $.extend(results,{ msgParsed: result.name, nameBannerShown: result.binded });
				}
				/* bind icon resizer */
				if (env.iconInjected) {
					var result = platformObj.bindResizer();
					if (result.msg>0) $.extend(results,{ msgParsed: result.msg, iconEmotified: result.emotified, iconResized: result.resized });
				}
				if (results.msgParsed>0) debugMsg(DEBUG_RUNTIME,'Messages Parsed [M:',results.msgParsed,',E:',results.iconEmotified,',R:',results.iconResized,',NB:',results.nameBannerShown,']');
				setTimeout(function() { parseIncoming(); },delay.parseIncoming);
			};

			if (isStatusInited('initIncomingParser')) return false;
			setLoadingStatus('initIncomingParser','init');
			debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'initIncomingParser');
			parseIncoming();
			setLoadingStatus('initIncomingParser','complete');
		};
		
		/* Shared Methods */
		var bindIconListLocale = function() {
			locale.bindLocale(settings.locale,null,function() {
				var $name = $('#hhb-header .name');
				$name.text(versionInfo.name)
					.attr('title',locale.getLocaleMsg('info.credit',[versionInfo.credits.developer.join(', '),versionInfo.credits.specialThanks.join(', ')]));
				var $version = $('#hhb-header .version');
				$version.text(versionInfo.coreVersion)
					.attr('title',locale.getLocaleMsg('info.last_update',[versionInfo.lastUpdate]));
			});
		}
		
		var _gaTracker = function(category,action,label,value) {
			label = (label) ? label : '';
			value = (value) ? value : 1;
			if (enableGA)
				ga('send', {
					'hitType': 'event',			// Required.
					'eventCategory': category,	// Required.
					'eventAction': action,		// Required.
					'eventLabel': label,
					'eventValue': value
				});
			debugMsg(DEBUG_GA,'Google Analytics Data Submitted [E:',enableGA,', C:',category,', A:',action,', L:',label,', V:',value,']');
		};
		
		/* Public methods */
		this.isInitialize = function() {	return env.isInitialize;	};
		this.getFeatures = function() {	return env.features };
		this.getLoadingStatus = function() {
			return loadingStatus;
		};
		this.importIconList = function(igenre,ilist) {
			if (!env.listeningIconListData) return false;
			if (igenre && ilist) {
				initIconListData();
				initIncomingParser();
				initEmoticon();
				debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'Imported Icon List [G:',listGenre.length,', I:',listIcon.length,']');
			} else {
				debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_FAIL,'Import Icon List Failed!');
				setLoadingStatus('importIconList','fail');
			}
		};
		this.importNameBanner = function(nblist,nbcontrol) {
			if (!env.listeningNameBannerData) return false
			if (nblist && nbcontrol) {
				if ($.inArray('name_banner',env.features) < 0) return false;
				initIncomingParser();	/* require features */
				var res = initNameBanner(nblist,nbcontrol);
				listNameBanner = (res) ? res : {};
				
				debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_INIT,'Imported Name Banner List [NBL:',listNameBanner,']');
			} else {
				debugMsg(DEBUG_FEATURES|DEBUG_FEATURES_FAIL,'Import Name Banner Failed!');
				setLoadingStatus('importNameBanner','fail');
			}
		};

		envCheck();
		
		return this;
	};
	
	$(document).ready(function() {
		/* Google Analytics */
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-48929186-1', 'hihiboxhbtv.github.io');
		ga('require','displayfeatures');
	
		var hhb = new HihiBox();
		
		if (hhb.isInitialize()) {
			ga('send', 'pageview');
			console.log('[HihiBox]','Created',hhb);
			
			var features = hhb.getFeatures();
			/* load icon list */
			if ($.inArray('emoticon',features) >= 0) {
				$.getScript([host,"/js/iconlist.js"].join(''))
					.done(function(script,textStatus) {
						var listGenre = [].concat(window.listGenre);
						var listIcon = [].concat(window.listIcon);
						hhb.importIconList(listGenre,listIcon);
					});
			}
			/* load name banner list */
			if ($.inArray('name_banner',features) >= 0) {
				$.getScript([host,"/js/namebannerlist.js"].join(''))
					.done(function(script,textStatus) {
						var listNBControlList = [].concat(window.listNBControlList);
						var listNameBanner = [].concat(window.listNameBanner);
						hhb.importNameBanner(listNameBanner,listNBControlList);
					});
			}
		}
	});
}(window,document));