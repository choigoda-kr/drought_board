var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var F=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},I={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=I,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ee}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,F)}catch(e){F(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var ee=Array.isArray,F=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},R=[],te=-1;function z(e){return{current:e}}function B(e){0>te||(e.current=R[te],R[te]=null,te--)}function V(e,t){te++,R[te]=e.current,e.current=t}var H=z(null),ne=z(null),re=z(null),ie=z(null);function ae(e,t){switch(V(re,t),V(ne,e),V(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}B(H),V(H,e)}function oe(){B(H),B(ne),B(re)}function se(e){e.memoizedState!==null&&V(ie,e);var t=H.current,n=Hd(t,e.type);t!==n&&(V(ne,e),V(H,n))}function ce(e){ne.current===e&&(B(H),B(ne)),ie.current===e&&(B(ie),Qf._currentValue=L)}var le,ue;function de(e){if(le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);le=t&&t[1]||``,ue=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+le+e+ue}var fe=!1;function pe(e,t){if(!e||fe)return``;fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?de(n):``}function me(e,t){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de(`Lazy`);case 13:return e.child!==t&&t!==null?de(`Suspense Fallback`):de(`Suspense`);case 19:return de(`SuspenseList`);case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return de(`Activity`);default:return``}}function he(e){try{var t=``,n=null;do t+=me(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ge=Object.prototype.hasOwnProperty,_e=t.unstable_scheduleCallback,ve=t.unstable_cancelCallback,ye=t.unstable_shouldYield,be=t.unstable_requestPaint,xe=t.unstable_now,Se=t.unstable_getCurrentPriorityLevel,Ce=t.unstable_ImmediatePriority,we=t.unstable_UserBlockingPriority,Te=t.unstable_NormalPriority,Ee=t.unstable_LowPriority,De=t.unstable_IdlePriority,Oe=t.log,ke=t.unstable_setDisableYieldValue,Ae=null,je=null;function Me(e){if(typeof Oe==`function`&&ke(e),je&&typeof je.setStrictMode==`function`)try{je.setStrictMode(Ae,e)}catch{}}var Ne=Math.clz32?Math.clz32:Ie,Pe=Math.log,Fe=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(Pe(e)/Fe|0)|0}var Le=256,Re=262144,ze=4194304;function U(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Be(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=U(n))):i=U(o):i=U(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=U(n))):i=U(o)):i=U(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ve(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function He(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ue(){var e=ze;return ze<<=1,!(ze&62914560)&&(ze=4194304),e}function We(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ge(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ke(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ne(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ne(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ne(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ye(e,t){var n=t&-t;return n=n&42?1:Xe(n),(n&(e.suspendedLanes|t))===0?n:0}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ze(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Qe(){var e=I.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function $e(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var et=Math.random().toString(36).slice(2),tt=`__reactFiber$`+et,W=`__reactProps$`+et,nt=`__reactContainer$`+et,rt=`__reactEvents$`+et,it=`__reactListeners$`+et,at=`__reactHandles$`+et,ot=`__reactResources$`+et,st=`__reactMarker$`+et;function ct(e){delete e[tt],delete e[W],delete e[rt],delete e[it],delete e[at]}function lt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[tt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ut(e){if(e=e[tt]||e[nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function ft(e){var t=e[ot];return t||=e[ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function pt(e){e[st]=!0}var mt=new Set,ht={};function gt(e,t){_t(e,t),_t(e+`Capture`,t)}function _t(e,t){for(ht[e]=t,e=0;e<t.length;e++)mt.add(t[e])}var vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),yt={},bt={};function xt(e){return ge.call(bt,e)?!0:ge.call(yt,e)?!1:vt.test(e)?bt[e]=!0:(yt[e]=!0,!1)}function St(e,t,n){if(xt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Et(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Dt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ot(e){if(!e._valueTracker){var t=Et(e)?`checked`:`value`;e._valueTracker=Dt(e,t,``+e[t])}}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Et(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function At(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var jt=/[\n"\\]/g;function Mt(e){return e.replace(jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Tt(t)):e.value!==``+Tt(t)&&(e.value=``+Tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Tt(n)):Ft(e,o,Tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Tt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ot(e);return}n=n==null?``:``+Tt(n),t=t==null?n:``+Tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ot(e)}function Ft(e,t,n){t===`number`&&At(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Tt(n)}function Rt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ee(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ot(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Vt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Bt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ht(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Vt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Vt(e,o,t[o])}function Ut(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Wt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return Gt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function qt(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,Zt=null;function Qt(e){var t=ut(e);if(t&&(e=t.stateNode)){var n=e[W]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[W]||null;if(!a)throw Error(i(90));Nt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&kt(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var $t=!1;function en(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(Xt!==null||Zt!==null)&&(_u(),Xt&&(t=Xt,e=Zt,Zt=Xt=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[W]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var nn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),rn=!1;if(nn)try{var an={};Object.defineProperty(an,"passive",{get:function(){rn=!0}}),window.addEventListener(`test`,an,an),window.removeEventListener(`test`,an,an)}catch{rn=!1}var on=null,sn=null,cn=null;function ln(){if(cn)return cn;var e,t=sn,n=t.length,r,i=`value`in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return cn=i.slice(e,1<r?1-r:void 0)}function un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?dn:fn,this.isPropagationStopped=fn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hn=pn(mn),gn=h({},mn,{view:0,detail:0}),_n=pn(gn),vn,yn,bn,xn=h({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==bn&&(bn&&e.type===`mousemove`?(vn=e.screenX-bn.screenX,yn=e.screenY-bn.screenY):yn=vn=0,bn=e),vn)},movementY:function(e){return`movementY`in e?e.movementY:yn}}),Sn=pn(xn),Cn=pn(h({},xn,{dataTransfer:0})),wn=pn(h({},gn,{relatedTarget:0})),Tn=pn(h({},mn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=pn(h({},mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),G=pn(h({},mn,{data:0})),Dn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},On={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kn[e])?!!t[e]:!1}function jn(){return An}var Mn=pn(h({},gn,{key:function(e){if(e.key){var t=Dn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?On[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return e.type===`keypress`?un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Nn=pn(h({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=pn(h({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Fn=pn(h({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=pn(h({},xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Ln=pn(h({},mn,{newState:0,oldState:0})),Rn=[9,13,27,32],zn=nn&&`CompositionEvent`in window,Bn=null;nn&&`documentMode`in document&&(Bn=document.documentMode);var Vn=nn&&`TextEvent`in window&&!Bn,Hn=nn&&(!zn||Bn&&8<Bn&&11>=Bn),Un=` `,Wn=!1;function Gn(e,t){switch(e){case`keyup`:return Rn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Kn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var qn=!1;function Jn(e,t){switch(e){case`compositionend`:return Kn(t);case`keypress`:return t.which===32?(Wn=!0,Un):null;case`textInput`:return e=t.data,e===Un&&Wn?null:e;default:return null}}function Yn(e,t){if(qn)return e===`compositionend`||!zn&&Gn(e,t)?(e=ln(),cn=sn=on=null,qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Hn&&t.locale!==`ko`?null:t.data;default:return null}}var Xn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Xn[e.type]:t===`textarea`}function Qn(e,t,n,r){Xt?Zt?Zt.push(r):Zt=[r]:Xt=r,t=Td(t,`onChange`),0<t.length&&(n=new hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var $n=null,er=null;function tr(e){_d(e,0)}function nr(e){if(kt(dt(e)))return e}function rr(e,t){if(e===`change`)return t}var ir=!1;if(nn){var ar;if(nn){var or=`oninput`in document;if(!or){var sr=document.createElement(`div`);sr.setAttribute(`oninput`,`return;`),or=typeof sr.oninput==`function`}ar=or}else ar=!1;ir=ar&&(!document.documentMode||9<document.documentMode)}function cr(){$n&&($n.detachEvent(`onpropertychange`,lr),er=$n=null)}function lr(e){if(e.propertyName===`value`&&nr(er)){var t=[];Qn(t,er,e,Yt(e)),en(tr,t)}}function ur(e,t,n){e===`focusin`?(cr(),$n=t,er=n,$n.attachEvent(`onpropertychange`,lr)):e===`focusout`&&cr()}function dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return nr(er)}function fr(e,t){if(e===`click`)return nr(t)}function pr(e,t){if(e===`input`||e===`change`)return nr(t)}function mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var hr=typeof Object.is==`function`?Object.is:mr;function gr(e,t){if(hr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ge.call(t,i)||!hr(e[i],t[i]))return!1}return!0}function _r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vr(e,t){var n=_r(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=_r(n)}}function yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function br(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=At(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=At(e.document)}return t}function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Sr=nn&&`documentMode`in document&&11>=document.documentMode,Cr=null,wr=null,Tr=null,Er=!1;function Dr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Er||Cr==null||Cr!==At(r)||(r=Cr,`selectionStart`in r&&xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&gr(Tr,r)||(Tr=r,r=Td(wr,`onSelect`),0<r.length&&(t=new hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var kr={animationend:Or(`Animation`,`AnimationEnd`),animationiteration:Or(`Animation`,`AnimationIteration`),animationstart:Or(`Animation`,`AnimationStart`),transitionrun:Or(`Transition`,`TransitionRun`),transitionstart:Or(`Transition`,`TransitionStart`),transitioncancel:Or(`Transition`,`TransitionCancel`),transitionend:Or(`Transition`,`TransitionEnd`)},Ar={},jr={};nn&&(jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),`TransitionEvent`in window||delete kr.transitionend.transition);function Mr(e){if(Ar[e])return Ar[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jr)return Ar[e]=t[n];return e}var Nr=Mr(`animationend`),Pr=Mr(`animationiteration`),Fr=Mr(`animationstart`),Ir=Mr(`transitionrun`),Lr=Mr(`transitionstart`),Rr=Mr(`transitioncancel`),zr=Mr(`transitionend`),Br=new Map,Vr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Vr.push(`scrollEnd`);function Hr(e,t){Br.set(e,t),gt(t,[e])}var Ur=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Wr=[],Gr=0,Kr=0;function K(){for(var e=Gr,t=Kr=Gr=0;t<e;){var n=Wr[t];Wr[t++]=null;var r=Wr[t];Wr[t++]=null;var i=Wr[t];Wr[t++]=null;var a=Wr[t];if(Wr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Wr[Gr++]=e,Wr[Gr++]=t,Wr[Gr++]=n,Wr[Gr++]=r,Kr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ne(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<cu)throw cu=0,lu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,H.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ei(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return q(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ei(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ei(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ei(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function q(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function ai(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function oi(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function J(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var si=new WeakMap;function ci(e,t){if(typeof e==`object`&&e){var n=si.get(e);return n===void 0?(t={value:e,source:t,stack:he(t)},si.set(e,t),t):n}return{value:e,source:t,stack:he(t)}}var li=[],ui=0,di=null,fi=0,pi=[],mi=0,hi=null,gi=1,_i=``;function vi(e,t){li[ui++]=fi,li[ui++]=di,di=e,fi=t}function yi(e,t,n){pi[mi++]=gi,pi[mi++]=_i,pi[mi++]=hi,hi=e;var r=gi;e=_i;var i=32-Ne(r)-1;r&=~(1<<i),n+=1;var a=32-Ne(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gi=1<<32-Ne(t)+i|n<<i|r,_i=a+e}else gi=1<<a|n<<i|r,_i=e}function bi(e){e.return!==null&&(vi(e,1),yi(e,1,0))}function xi(e){for(;e===di;)di=li[--ui],li[ui]=null,fi=li[--ui],li[ui]=null;for(;e===hi;)hi=pi[--mi],pi[mi]=null,_i=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null}function Si(e,t){pi[mi++]=gi,pi[mi++]=_i,pi[mi++]=hi,gi=t.id,_i=t.overflow,hi=e}var Ci=null,wi=null,Ti=!1,Ei=null,Di=!1,Oi=Error(i(519));function ki(e){throw Fi(ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Oi}function Ai(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[tt]=e,t[W]=r,n){case`dialog`:vd(`cancel`,t),vd(`close`,t);break;case`iframe`:case`object`:case`embed`:vd(`load`,t);break;case`video`:case`audio`:for(n=0;n<hd.length;n++)vd(hd[n],t);break;case`source`:vd(`error`,t);break;case`img`:case`image`:case`link`:vd(`error`,t),vd(`load`,t);break;case`details`:vd(`toggle`,t);break;case`input`:vd(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:vd(`invalid`,t);break;case`textarea`:vd(`invalid`,t),Rt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(vd(`beforetoggle`,t),vd(`toggle`,t)),r.onScroll!=null&&vd(`scroll`,t),r.onScrollEnd!=null&&vd(`scrollend`,t),r.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ki(e,!0)}function ji(e){for(Ci=e.return;Ci;)switch(Ci.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Ci=Ci.return}}function Mi(e){if(e!==Ci)return!1;if(!Ti)return ji(e),Ti=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&wi&&ki(e),ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));wi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));wi=uf(e)}else t===27?(t=wi,Zd(e.type)?(e=lf,lf=null,wi=e):wi=t):wi=Ci?cf(e.stateNode.nextSibling):null;return!0}function Ni(){wi=Ci=null,Ti=!1}function Pi(){var e=Ei;return e!==null&&(Jl===null?Jl=e:Jl.push.apply(Jl,e),Ei=null),e}function Fi(e){Ei===null?Ei=[e]:Ei.push(e)}var Ii=z(null),Li=null,Ri=null;function zi(e,t,n){V(Ii,t._currentValue),t._currentValue=n}function Bi(e){e._currentValue=Ii.current,B(Ii)}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Hi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Vi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ui(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;hr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ie.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Hi(t,e,n,r),t.flags|=262144}function Wi(e){for(e=e.firstContext;e!==null;){if(!hr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Li=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ki(e){return Ji(Li,e)}function qi(e,t){return Li===null&&Gi(e),Ji(e,t)}function Ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(i(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Yi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Xi=t.unstable_scheduleCallback,Zi=t.unstable_NormalPriority,Qi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Yi,data:new Map,refCount:0}}function ea(e){e.refCount--,e.refCount===0&&Xi(Zi,function(){e.controller.abort()})}var ta=null,na=0,ra=0,ia=null;function aa(e,t){if(ta===null){var n=ta=[];na=0,ra=ld(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return na++,t.then(oa,oa),t}function oa(){if(--na===0&&ta!==null){ia!==null&&(ia.status=`fulfilled`);var e=ta;ta=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=F.S;F.S=function(e,t){Zl=xe(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=z(null);function ua(){var e=la.current;return e===null?Ml.pooledCache:e}function da(e,t){t===null?V(la,la.current):V(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:Qi._currentValue,pool:e}}var pa=Error(i(460)),ma=Error(i(474)),ha=Error(i(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(qt,qt);else{if(e=Ml,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(i(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(i(483))}var Ca=null,wa=0;function Y(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ta(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ea(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Da(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ai(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&ya(i)===t.type)?(t=a(t,n.props),Ta(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ta(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=J(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=q(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ai(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ta(n,t),n.return=e,n;case v:return t=J(t,e.mode,n),t.return=e,t;case O:return t=ya(t),f(e,t,n)}if(ee(t)||M(t))return t=q(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Y(t),n);if(t.$$typeof===C)return f(e,qi(e,t),n);Ea(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ya(n),p(e,t,n,r)}if(ee(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Y(n),r);if(n.$$typeof===C)return p(e,t,qi(e,n),r);Ea(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ya(r),m(e,t,n,r,i)}if(ee(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Y(r),i);if(r.$$typeof===C)return m(e,t,n,qi(t,r),i);Ea(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Ti&&vi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Ti&&vi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Ti&&vi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Ti&&vi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Ti&&vi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Ti&&vi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ta(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=q(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ii(o.type,o.key,o.props,null,e.mode,c),Ta(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=J(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=ya(o),b(e,r,o,c)}if(ee(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Y(o),c);if(o.$$typeof===C)return b(e,r,qi(e,o),c);Ea(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ai(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Oa=Da(!0),ka=Da(!1),Aa=!1;function X(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Z(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,jl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Je(e,n)}}function Pa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fa=!1;function Ia(){if(Fa){var e=ia;if(e!==null)throw e}}function La(e,t,n,r){Fa=!1;var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Pl&f)===f:(r&f)===f){f!==0&&f===ra&&(Fa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Aa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Hl|=o,e.lanes=o,e.memoizedState=d}}function Ra(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ra(n[e],t)}var Ba=z(null),Va=z(0);function Ha(e,t){e=Bl,V(Va,e),V(Ba,t),Bl=e|t.baseLanes}function Ua(){V(Va,Bl),V(Ba,Ba.current)}function Wa(){Bl=Va.current,B(Ba),B(Va)}var Ga=z(null),Ka=null;function qa(e){var t=e.alternate;V(Qa,Qa.current&1),V(Ga,e),Ka===null&&(t===null||Ba.current!==null||t.memoizedState!==null)&&(Ka=e)}function Ja(e){V(Qa,Qa.current),V(Ga,e),Ka===null&&(Ka=e)}function Ya(e){e.tag===22?(V(Qa,Qa.current),V(Ga,e),Ka===null&&(Ka=e)):Xa(e)}function Xa(){V(Qa,Qa.current),V(Ga,Ga.current)}function Za(e){B(Ga),Ka===e&&(Ka=null),B(Qa)}var Qa=z(0);function $a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eo=0,to=null,no=null,ro=null,io=!1,ao=!1,oo=!1,so=0,co=0,lo=null,uo=0;function fo(){throw Error(i(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hr(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,a){return eo=a,to=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?js:Ms,oo=!1,a=n(r,i),oo=!1,ao&&(a=go(t,n,r,i)),ho(e),a}function ho(e){F.H=As;var t=no!==null&&no.next!==null;if(eo=0,ro=no=to=null,io=!1,co=0,lo=null,t)throw Error(i(300));e===null||Ys||(e=e.dependencies,e!==null&&Wi(e)&&(Ys=!0))}function go(e,t,n,r){to=e;var a=0;do{if(ao&&(lo=null),co=0,ao=!1,25<=a)throw Error(i(301));if(a+=1,ro=no=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}F.H=Ns,o=t(n,r)}while(ao);return o}function _o(){var e=F.H,t=e.useState()[0];return t=typeof t.then==`function`?wo(t):t,e=e.useState()[0],(no===null?null:no.memoizedState)!==e&&(to.flags|=1024),t}function vo(){var e=so!==0;return so=0,e}function yo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bo(e){if(io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}io=!1}eo=0,ro=no=to=null,ao=!1,co=so=0,lo=null}function xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ro===null?to.memoizedState=ro=e:ro=ro.next=e,ro}function So(){if(no===null){var e=to.alternate;e=e===null?null:e.memoizedState}else e=no.next;var t=ro===null?to.memoizedState:ro.next;if(t!==null)ro=t,no=e;else{if(e===null)throw to.alternate===null?Error(i(467)):Error(i(310));no=e,e={memoizedState:no.memoizedState,baseState:no.baseState,baseQueue:no.baseQueue,queue:no.queue,next:null},ro===null?to.memoizedState=ro=e:ro=ro.next=e}return ro}function Co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var t=co;return co+=1,lo===null&&(lo=[]),e=va(lo,e,t),t=to,(ro===null?t.memoizedState:ro.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?js:Ms),e}function To(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return wo(e);if(e.$$typeof===C)return Ki(e)}throw Error(i(438,String(e)))}function Eo(e){var t=null,n=to.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=to.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Co(),to.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Do(e,t){return typeof t==`function`?t(e):t}function Oo(e){return ko(So(),no,e)}function ko(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(eo&f)===f:(Pl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ra&&(d=!0);else if((eo&p)===p){u=u.next,p===ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,to.lanes|=p,Hl|=p;f=u.action,oo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,to.lanes|=f,Hl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!hr(o,e.memoizedState)&&(Ys=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ao(e){var t=So(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);hr(o,t.memoizedState)||(Ys=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jo(e,t,n){var r=to,a=So(),o=Ti;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!hr((no||a).memoizedState,n);if(s&&(a.memoizedState=n,Ys=!0),a=a.queue,ns(Po.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ro!==null&&ro.memoizedState.tag&1){if(r.flags|=2048,Zo(9,{destroy:void 0},No.bind(null,r,a,n,t),null),Ml===null)throw Error(i(349));o||eo&127||Mo(r,t,n)}return n}function Mo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=to.updateQueue,t===null?(t=Co(),to.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function No(e,t,n,r){t.value=n,t.getSnapshot=r,Fo(t)&&Io(e)}function Po(e,t,n){return n(function(){Fo(t)&&Io(e)})}function Fo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hr(e,n)}catch{return!0}}function Io(e){var t=Yr(e,2);t!==null&&fu(t,e,2)}function Lo(e){var t=xo();if(typeof e==`function`){var n=e;if(e=n(),oo){Me(!0);try{n()}finally{Me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t}function Ro(e,t,n,r){return e.baseState=n,ko(e,no,typeof r==`function`?r:Do)}function zo(e,t,n,r,a){if(Ds(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};F.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Bo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Bo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=F.T,o={};F.T=o;try{var s=n(i,r),c=F.S;c!==null&&c(o,s),Vo(e,t,s)}catch(n){Uo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),F.T=a}}else try{a=n(i,r),Vo(e,t,a)}catch(n){Uo(e,t,n)}}function Vo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ho(e,t,n)},function(n){return Uo(e,t,n)}):Ho(e,t,n)}function Ho(e,t,n){t.status=`fulfilled`,t.value=n,Wo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Bo(e,n)))}function Uo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Wo(t),t=t.next;while(t!==r)}e.action=null}function Wo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Go(e,t){return t}function Ko(e,t){if(Ti){var n=Ml.formState;if(n!==null){a:{var r=to;if(Ti){if(wi){b:{for(var i=wi,a=Di;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){wi=cf(i.nextSibling),r=i.data===`F!`;break a}}ki(r)}r=!1}r&&(t=n[0])}}return n=xo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},n.queue=r,n=ws.bind(null,to,r),r.dispatch=n,r=Lo(!1),a=Es.bind(null,to,!1,r.queue),r=xo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=zo.bind(null,to,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function qo(e){return Jo(So(),no,e)}function Jo(e,t,n){if(t=ko(e,t,Go)[0],e=Oo(Do)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=wo(t)}catch(e){throw e===pa?ha:e}else r=t;t=So();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(to.flags|=2048,Zo(9,{destroy:void 0},Yo.bind(null,i,n),null)),[r,a,e]}function Yo(e,t){e.action=t}function Xo(e){var t=So(),n=no;if(n!==null)return Jo(t,n,e);So(),t=t.memoizedState,n=So();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Zo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=to.updateQueue,t===null&&(t=Co(),to.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qo(){return So().memoizedState}function $o(e,t,n,r){var i=xo();to.flags|=e,i.memoizedState=Zo(1|t,{destroy:void 0},n,r===void 0?null:r)}function es(e,t,n,r){var i=So();r=r===void 0?null:r;var a=i.memoizedState.inst;no!==null&&r!==null&&po(r,no.memoizedState.deps)?i.memoizedState=Zo(t,a,n,r):(to.flags|=e,i.memoizedState=Zo(1|t,a,n,r))}function ts(e,t){$o(8390656,8,e,t)}function ns(e,t){es(2048,8,e,t)}function rs(e){to.flags|=4;var t=to.updateQueue;if(t===null)t=Co(),to.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function is(e){var t=So().memoizedState;return rs({ref:t,nextImpl:e}),function(){if(jl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function as(e,t){return es(4,2,e,t)}function os(e,t){return es(4,4,e,t)}function ss(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cs(e,t,n){n=n==null?null:n.concat([e]),es(4,4,ss.bind(null,t,e),n)}function ls(){}function us(e,t){var n=So();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ds(e,t){var n=So();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&po(t,r[1]))return r[0];if(r=e(),oo){Me(!0);try{e()}finally{Me(!1)}}return n.memoizedState=[r,t],r}function fs(e,t,n){return n===void 0||eo&1073741824&&!(Pl&261930)?e.memoizedState=t:(e.memoizedState=n,e=du(),to.lanes|=e,Hl|=e,n)}function ps(e,t,n,r){return hr(n,t)?n:Ba.current===null?!(eo&42)||eo&1073741824&&!(Pl&261930)?(Ys=!0,e.memoizedState=n):(e=du(),to.lanes|=e,Hl|=e,t):(e=fs(e,n,r),hr(e,t)||(Ys=!0),e)}function ms(e,t,n,r,i){var a=I.p;I.p=a!==0&&8>a?a:8;var o=F.T,s={};F.T=s,Es(e,!1,t,n);try{var c=i(),l=F.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ts(e,t,sa(c,r),uu(e)):Ts(e,t,r,uu(e))}catch(n){Ts(e,t,{then:function(){},status:`rejected`,reason:n},uu())}finally{I.p=a,o!==null&&s.types!==null&&(o.types=s.types),F.T=o}}function hs(){}function gs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=_s(e).queue;ms(e,a,t,L,n===null?hs:function(){return vs(e),n(r)})}function _s(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:L},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vs(e){var t=_s(e);t.next===null&&(t=e.alternate.memoizedState),Ts(e,t.next.queue,{},uu())}function ys(){return Ki(Qf)}function bs(){return So().memoizedState}function xs(){return So().memoizedState}function Ss(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=uu();e=ja(n);var r=Ma(t,e,n);r!==null&&(fu(r,t,n),Na(r,t,n)),t={cache:$i()},e.payload=t;return}t=t.return}}function Cs(e,t,n){var r=uu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Os(t,n):(n=Jr(e,t,n,r),n!==null&&(fu(n,e,r),ks(n,t,r)))}function ws(e,t,n){Ts(e,t,n,uu())}function Ts(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Os(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,hr(s,o))return qr(e,t,i,0),Ml===null&&K(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return fu(n,e,r),ks(n,t,r),!0}return!1}function Es(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(i(479))}else t=Jr(e,n,r,2),t!==null&&fu(t,e,2)}function Ds(e){var t=e.alternate;return e===to||t!==null&&t===to}function Os(e,t){ao=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ks(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Je(e,n)}}var As={readContext:Ki,use:To,useCallback:fo,useContext:fo,useEffect:fo,useImperativeHandle:fo,useLayoutEffect:fo,useInsertionEffect:fo,useMemo:fo,useReducer:fo,useRef:fo,useState:fo,useDebugValue:fo,useDeferredValue:fo,useTransition:fo,useSyncExternalStore:fo,useId:fo,useHostTransitionStatus:fo,useFormState:fo,useActionState:fo,useOptimistic:fo,useMemoCache:fo,useCacheRefresh:fo};As.useEffectEvent=fo;var js={readContext:Ki,use:To,useCallback:function(e,t){return xo().memoizedState=[e,t===void 0?null:t],e},useContext:Ki,useEffect:ts,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),$o(4194308,4,ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){$o(4,2,e,t)},useMemo:function(e,t){var n=xo();t=t===void 0?null:t;var r=e();if(oo){Me(!0);try{e()}finally{Me(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=xo();if(n!==void 0){var i=n(t);if(oo){Me(!0);try{n(t)}finally{Me(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Cs.bind(null,to,e),[r.memoizedState,e]},useRef:function(e){var t=xo();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,n=ws.bind(null,to,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ls,useDeferredValue:function(e,t){return fs(xo(),e,t)},useTransition:function(){var e=Lo(!1);return e=ms.bind(null,to,e.queue,!0,!1),xo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=to,a=xo();if(Ti){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ml===null)throw Error(i(349));Pl&127||Mo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ts(Po.bind(null,r,o,e),[e]),r.flags|=2048,Zo(9,{destroy:void 0},No.bind(null,r,o,n,t),null),n},useId:function(){var e=xo(),t=Ml.identifierPrefix;if(Ti){var n=_i,r=gi;n=(r&~(1<<32-Ne(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=so++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=uo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ys,useFormState:Ko,useActionState:Ko,useOptimistic:function(e){var t=xo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Es.bind(null,to,!0,n),n.dispatch=t,[e,t]},useMemoCache:Eo,useCacheRefresh:function(){return xo().memoizedState=Ss.bind(null,to)},useEffectEvent:function(e){var t=xo(),n={impl:e};return t.memoizedState=n,function(){if(jl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ms={readContext:Ki,use:To,useCallback:us,useContext:Ki,useEffect:ns,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Oo,useRef:Qo,useState:function(){return Oo(Do)},useDebugValue:ls,useDeferredValue:function(e,t){return ps(So(),no.memoizedState,e,t)},useTransition:function(){var e=Oo(Do)[0],t=So().memoizedState;return[typeof e==`boolean`?e:wo(e),t]},useSyncExternalStore:jo,useId:bs,useHostTransitionStatus:ys,useFormState:qo,useActionState:qo,useOptimistic:function(e,t){return Ro(So(),no,e,t)},useMemoCache:Eo,useCacheRefresh:xs};Ms.useEffectEvent=is;var Ns={readContext:Ki,use:To,useCallback:us,useContext:Ki,useEffect:ns,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Ao,useRef:Qo,useState:function(){return Ao(Do)},useDebugValue:ls,useDeferredValue:function(e,t){var n=So();return no===null?fs(n,e,t):ps(n,no.memoizedState,e,t)},useTransition:function(){var e=Ao(Do)[0],t=So().memoizedState;return[typeof e==`boolean`?e:wo(e),t]},useSyncExternalStore:jo,useId:bs,useHostTransitionStatus:ys,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){var n=So();return no===null?(n.baseState=e,[e,n.queue.dispatch]):Ro(n,no,e,t)},useMemoCache:Eo,useCacheRefresh:xs};Ns.useEffectEvent=is;function Ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ma(e,i,r),t!==null&&(fu(t,e,r),Na(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ma(e,i,r),t!==null&&(fu(t,e,r),Na(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=uu(),r=ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ma(e,r,n),t!==null&&(fu(t,e,n),Na(t,e,n))}};function Is(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(i,a):!0}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function Rs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function zs(e){Ur(e)}function Bs(e){console.error(e)}function Vs(e){Ur(e)}function Hs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Us(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ws(e,t,n){return n=ja(n),n.tag=3,n.payload={element:null},n.callback=function(){Hs(e,t)},n}function Gs(e){return e=ja(e),e.tag=3,e}function Ks(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Us(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Us(t,n,r),typeof i!=`function`&&(eu===null?eu=new Set([this]):eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ui(t,n,a,!0),n=Ga.current,n!==null){switch(n.tag){case 31:case 13:return Ka===null?wu():n.alternate===null&&Vl===0&&(Vl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,a)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,a)),!1}throw Error(i(435,n.tag))}return Uu(e,r,a),wu(),!1}if(Ti)return t=Ga.current,t===null?(r!==Oi&&(t=Error(i(423),{cause:r}),Fi(ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ci(r,n),a=Ws(e.stateNode,r,a),Pa(e,a),Vl!==4&&(Vl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Oi&&(e=Error(i(422),{cause:r}),Fi(ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ci(o,n),ql===null?ql=[o]:ql.push(o),Vl!==4&&(Vl=2),t===null)return!0;r=ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ws(n.stateNode,r,e),Pa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(eu===null||!eu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Gs(a),Ks(a,e,n,r),Pa(n,a),!1}n=n.return}while(n!==null);return!1}var Js=Error(i(461)),Ys=!1;function Xs(e,t,n,r){t.child=e===null?ka(t,null,n,r):Oa(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Gi(t),r=mo(e,t,n,o,a,i),s=vo(),e!==null&&!Ys?(yo(e,t,i),bc(e,t,i)):(Ti&&s&&bi(t),t.flags|=1,Xs(e,t,r,i),t.child)}function Qs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,$s(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!xc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?gr:n,n(o,r)&&e.ref===t.ref)return bc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function $s(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(gr(a,r)&&e.ref===t.ref)if(Ys=!1,t.pendingProps=r=a,xc(e,i))e.flags&131072&&(Ys=!0);else return t.lanes=e.lanes,bc(e,t,i)}return oc(e,t,n,r,i)}function ec(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Q(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ua():Ha(t,a),Ya(t);else return r=t.lanes=536870912,Q(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ua(),Xa(t)):(da(t,a.cachePool),Ha(t,a),Xa(t),t.memoizedState=null);return Xs(e,t,i,n),t.child}function tc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Q(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:Qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ua(),Ya(t),e!==null&&Ui(e,t,r,!0),t.childLanes=i,null}function nc(e,t){return t=hc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rc(e,t,n){return Oa(t,e.child,null,n),e=nc(t,t.pendingProps),e.flags|=2,Za(t),t.memoizedState=null,e}function ic(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Ti){if(r.mode===`hidden`)return e=nc(t,r),t.lanes=536870912,tc(null,e);if(Ja(t),(e=wi)?(e=rf(e,Di),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hi===null?null:{id:gi,overflow:_i},retryLane:536870912,hydrationErrors:null},n=oi(e),n.return=t,t.child=n,Ci=t,wi=null)):e=null,e===null)throw ki(t);return t.lanes=536870912,null}return nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ja(t),a)if(t.flags&256)t.flags&=-257,t=rc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Ys||Ui(e,t,n,!1),a=(n&e.childLanes)!==0,Ys||a){if(r=Ml,r!==null&&(s=Ye(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Yr(e,s),fu(r,e,s),Js;wu(),t=rc(e,t,n)}else e=o.treeContext,wi=cf(s.nextSibling),Ci=t,Ti=!0,Ei=null,Di=!1,e!==null&&Si(t,e),t=nc(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ac(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function oc(e,t,n,r,i){return Gi(t),n=mo(e,t,n,r,void 0,i),r=vo(),e!==null&&!Ys?(yo(e,t,i),bc(e,t,i)):(Ti&&r&&bi(t),t.flags|=1,Xs(e,t,n,i),t.child)}function sc(e,t,n,r,i,a){return Gi(t),t.updateQueue=null,n=go(t,r,n,i),ho(e),r=vo(),e!==null&&!Ys?(yo(e,t,a),bc(e,t,a)):(Ti&&r&&bi(t),t.flags|=1,Xs(e,t,n,a),t.child)}function cc(e,t,n,r,i){if(Gi(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=Ki(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Fs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},X(t),o=n.contextType,a.context=typeof o==`object`&&o?Ki(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ps(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Fs.enqueueReplaceState(a,a.state,null),La(t,r,a,i),Ia(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Rs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=Ki(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ls(t,a,r,o),Aa=!1;var f=t.memoizedState;a.state=f,La(t,r,a,i),Ia(),l=t.memoizedState,s||f!==l||Aa?(typeof d==`function`&&(Ps(t,n,d,r),l=t.memoizedState),(c=Aa||Is(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Z(e,t),o=t.memoizedProps,u=Rs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=Ki(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ls(t,a,r,c),Aa=!1,f=t.memoizedState,a.state=f,La(t,r,a,i),Ia();var p=t.memoizedState;o!==d||f!==p||Aa||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof s==`function`&&(Ps(t,n,s,r),p=t.memoizedState),(u=Aa||Is(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,ac(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):Xs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=bc(e,t,i),e}function lc(e,t,n,r){return Ni(),t.flags|=256,Xs(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(e){return{baseLanes:e,cachePool:fa()}}function fc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Gl),e}function pc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(Qa.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(Ti){if(a?qa(t):Xa(t),(e=wi)?(e=rf(e,Di),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hi===null?null:{id:gi,overflow:_i},retryLane:536870912,hydrationErrors:null},n=oi(e),n.return=t,t.child=n,Ci=t,wi=null)):e=null,e===null)throw ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(Xa(t),a=t.mode,c=hc({mode:`hidden`,children:c},a),r=q(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=dc(n),r.childLanes=fc(e,s,n),t.memoizedState=uc,tc(null,r)):(qa(t),mc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(qa(t),t.flags&=-257,t=gc(e,t,n)):t.memoizedState===null?(Xa(t),c=r.fallback,a=t.mode,r=hc({mode:`visible`,children:r.children},a),c=q(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Oa(t,e.child,null,n),r=t.child,r.memoizedState=dc(n),r.childLanes=fc(e,s,n),t.memoizedState=uc,t=tc(null,r)):(Xa(t),t.child=e.child,t.flags|=128,t=null);else if(qa(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Fi({value:r,source:null,stack:null}),t=gc(e,t,n)}else if(Ys||Ui(e,t,n,!1),s=(n&e.childLanes)!==0,Ys||s){if(s=Ml,s!==null&&(r=Ye(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),fu(s,e,r),Js;af(c)||wu(),t=gc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,wi=cf(c.nextSibling),Ci=t,Ti=!0,Ei=null,Di=!1,e!==null&&Si(t,e),t=mc(t,r.children),t.flags|=4096);return t}return a?(Xa(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=q(c,a,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,tc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=dc(n):(a=c.cachePool,a===null?a=fa():(l=Qi._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=fc(e,s,n),t.memoizedState=uc,tc(e.child,r)):(qa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function mc(e,t){return t=hc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function hc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function gc(e,t,n){return Oa(t,e.child,null,n),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function vc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function yc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Qa.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,V(Qa,o),Xs(e,t,r,n),r=Ti?fi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,n,t);else if(e.tag===19)_c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vc(t,!0,n,null,a,r);break;case`together`:vc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function bc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Wi(e)))}function Sc(e,t,n){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),zi(t,Qi,e.memoizedState.cache),Ni();break;case 27:case 5:se(t);break;case 4:ae(t,t.stateNode.containerInfo);break;case 10:zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ja(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(qa(t),e=bc(e,t,n),e===null?null:e.sibling):pc(e,t,n):(qa(t),t.flags|=128,null);qa(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ui(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return yc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Qa,Qa.current),r)break;return null;case 22:return t.lanes=0,ec(e,t,n,t.pendingProps);case 24:zi(t,Qi,e.memoizedState.cache)}return bc(e,t,n)}function Cc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ys=!0;else{if(!xc(e,n)&&!(t.flags&128))return Ys=!1,Sc(e,t,n);Ys=!!(e.flags&131072)}else Ys=!1,Ti&&t.flags&1048576&&yi(t,fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Rs(e,r),t.tag=1,t=cc(null,t,e,r,n)):(t.tag=0,t=oc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=Zs(null,t,e,r,n);break a}if(a===D){t.tag=14,t=Qs(null,t,e,r,n);break a}}throw t=P(e)||e,Error(i(306,t,``))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Rs(r,t.pendingProps),cc(e,t,r,a,n);case 3:a:{if(ae(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Z(e,t),La(t,r,null,n);var s=t.memoizedState;if(r=s.cache,zi(t,Qi,r),r!==o.cache&&Hi(t,[Qi],n,!0),Ia(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=lc(e,t,r,n);break a}else if(r!==a){a=ci(Error(i(424)),t),Fi(a),t=lc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(wi=cf(e.firstChild),Ci=t,Ti=!0,Ei=null,Di=!0,n=ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ni(),r===a){t=bc(e,t,n);break a}Xs(e,t,r,n)}t=t.child}return t;case 26:return ac(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ti||(n=t.type,e=t.pendingProps,r=Bd(re.current).createElement(n),r[tt]=t,r[W]=e,Pd(r,n,e),pt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return se(t),e===null&&Ti&&(r=t.stateNode=ff(t.type,t.pendingProps,re.current),Ci=t,Di=!0,a=wi,Zd(t.type)?(lf=a,wi=cf(r.firstChild)):wi=a),Xs(e,t,t.pendingProps.children,n),ac(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ti&&((a=r=wi)&&(r=tf(r,t.type,t.pendingProps,Di),r===null?a=!1:(t.stateNode=r,Ci=t,wi=cf(r.firstChild),Di=!1,a=!0)),a||ki(t)),se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=mo(e,t,_o,null,null,n),Qf._currentValue=a),ac(e,t),Xs(e,t,r,n),t.child;case 6:return e===null&&Ti&&((e=n=wi)&&(n=nf(n,t.pendingProps,Di),n===null?e=!1:(t.stateNode=n,Ci=t,wi=null,e=!0)),e||ki(t)),null;case 13:return pc(e,t,n);case 4:return ae(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oa(t,null,r,n):Xs(e,t,r,n),t.child;case 11:return Zs(e,t,t.type,t.pendingProps,n);case 7:return Xs(e,t,t.pendingProps,n),t.child;case 8:return Xs(e,t,t.pendingProps.children,n),t.child;case 12:return Xs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,zi(t,t.type,r.value),Xs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Gi(t),a=Ki(a),r=r(a),t.flags|=1,Xs(e,t,r,n),t.child;case 14:return Qs(e,t,t.type,t.pendingProps,n);case 15:return $s(e,t,t.type,t.pendingProps,n);case 19:return yc(e,t,n);case 31:return ic(e,t,n);case 22:return ec(e,t,n,t.pendingProps);case 24:return Gi(t),r=Ki(Qi),e===null?(a=ua(),a===null&&(a=Ml,o=$i(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},X(t),zi(t,Qi,a)):((e.lanes&n)!==0&&(Z(e,t),La(t,null,null,n),Ia()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,zi(t,Qi,r),r!==a.cache&&Hi(t,[Qi],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),zi(t,Qi,r))),Xs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function $(e){e.flags|=4}function wc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(xu())e.flags|=8192;else throw ba=ga,ma}else e.flags&=-16777217}function Tc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(xu())e.flags|=8192;else throw ba=ga,ma}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ue(),e.lanes|=t,Kl|=t)}function Dc(e,t){if(!Ti)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kc(e,t,n){var r=t.pendingProps;switch(xi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oc(t),null;case 1:return Oc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Bi(Qi),oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?$(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pi())),Oc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?($(t),o===null?(Oc(t),wc(t,a,null,r,n)):(Oc(t),Tc(t,o))):o?o===e.memoizedState?(Oc(t),t.flags&=-16777217):($(t),Oc(t),Tc(t,o)):(e=e.memoizedProps,e!==r&&$(t),Oc(t),wc(t,a,e,r,n)),null;case 27:if(ce(t),n=re.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&$(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}e=H.current,Mi(t)?Ai(t,e):(e=ff(a,r,n),t.stateNode=e,$(t))}return Oc(t),null;case 5:if(ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&$(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}if(o=H.current,Mi(t))Ai(t,o);else{var s=Bd(re.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[tt]=t,o[W]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&$(t)}}return Oc(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&$(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=re.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ci,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[tt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ki(t,!0)}else e=Bd(e).createTextNode(r),e[tt]=t,t.stateNode=e}return Oc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[tt]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),e=!1}else n=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Za(t),t):(Za(t),null);if(t.flags&128)throw Error(i(558))}return Oc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[tt]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),a=!1}else a=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Za(t),t):(Za(t),null)}return Za(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),Oc(t),null);case 4:return oe(),e===null&&xd(t.stateNode.containerInfo),Oc(t),null;case 10:return Bi(t.type),Oc(t),null;case 19:if(B(Qa),r=t.memoizedState,r===null)return Oc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Dc(r,!1);else{if(Vl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=$a(e),o!==null){for(t.flags|=128,Dc(r,!1),e=o.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return V(Qa,Qa.current&1|2),Ti&&vi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&xe()>Ql&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304)}else{if(!a)if(e=$a(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Dc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Ti)return Oc(t),null}else 2*xe()-r.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Oc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=xe(),e.sibling=null,n=Qa.current,V(Qa,a?n&1|2:n&1),Ti&&vi(t,r.treeForkCount),e);case 22:case 23:return Za(t),Wa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Oc(t),t.subtreeFlags&6&&(t.flags|=8192)):Oc(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&B(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bi(Qi),Oc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ac(e,t){switch(xi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(Qi),oe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ce(t),null;case 31:if(t.memoizedState!==null){if(Za(t),t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Za(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Qa),null;case 4:return oe(),null;case 10:return Bi(t.type),null;case 22:case 23:return Za(t),Wa(),e!==null&&B(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bi(Qi),null;case 25:return null;default:return null}}function jc(e,t){switch(xi(t),t.tag){case 3:Bi(Qi),oe();break;case 26:case 27:case 5:ce(t);break;case 4:oe();break;case 31:t.memoizedState!==null&&Za(t);break;case 13:Za(t);break;case 19:B(Qa);break;case 10:Bi(t.type);break;case 22:case 23:Za(t),Wa(),e!==null&&B(la);break;case 24:Bi(Qi)}}function Mc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Hu(t,t.return,e)}}function Nc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Hu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Hu(t,t.return,e)}}function Pc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{za(t,n)}catch(t){Hu(e,e.return,t)}}}function Fc(e,t,n){n.props=Rs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Hu(e,t,n)}}function Ic(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Hu(e,t,n)}}function Lc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Hu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Hu(e,t,n)}else n.current=null}function Rc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Hu(e,e.return,t)}}function zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[W]=t}catch(t){Hu(e,e.return,t)}}function Bc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Vc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[tt]=e,t[W]=n}catch(t){Hu(e,e.return,t)}}var Gc=!1,Kc=!1,qc=!1,Jc=typeof WeakSet==`function`?WeakSet:Set,Yc=null;function Xc(e,t){if(e=e.containerInfo,Rd=sp,e=br(e),xr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Yc=t;Yc!==null;)if(t=Yc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Yc=e;else for(;Yc!==null;){switch(t=Yc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Rs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Hu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Yc=e;break}Yc=t.return}}function Zc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:fl(e,n),r&4&&Mc(5,n);break;case 1:if(fl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Hu(n,n.return,e)}else{var i=Rs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Hu(n,n.return,e)}}r&64&&Pc(n),r&512&&Ic(n,n.return);break;case 3:if(fl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{za(e,t)}catch(e){Hu(n,n.return,e)}}break;case 27:t===null&&r&4&&Wc(n);case 26:case 5:fl(e,n),t===null&&r&4&&Rc(n),r&512&&Ic(n,n.return);break;case 12:fl(e,n);break;case 31:fl(e,n),r&4&&rl(e,n);break;case 13:fl(e,n),r&4&&il(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ku.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Gc,!r){t=t!==null&&t.memoizedState!==null||Kc,i=Gc;var a=Kc;Gc=r,(Kc=t)&&!a?ml(e,n,!!(n.subtreeFlags&8772)):fl(e,n),Gc=i,Kc=a}break;case 30:break;default:fl(e,n)}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $c=null,el=!1;function tl(e,t,n){for(n=n.child;n!==null;)nl(e,t,n),n=n.sibling}function nl(e,t,n){if(je&&typeof je.onCommitFiberUnmount==`function`)try{je.onCommitFiberUnmount(Ae,n)}catch{}switch(n.tag){case 26:Kc||Lc(n,t),tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kc||Lc(n,t);var r=$c,i=el;Zd(n.type)&&($c=n.stateNode,el=!1),tl(e,t,n),pf(n.stateNode),$c=r,el=i;break;case 5:Kc||Lc(n,t);case 6:if(r=$c,i=el,$c=null,tl(e,t,n),$c=r,el=i,$c!==null)if(el)try{($c.nodeType===9?$c.body:$c.nodeName===`HTML`?$c.ownerDocument.body:$c).removeChild(n.stateNode)}catch(e){Hu(n,t,e)}else try{$c.removeChild(n.stateNode)}catch(e){Hu(n,t,e)}break;case 18:$c!==null&&(el?(e=$c,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd($c,n.stateNode));break;case 4:r=$c,i=el,$c=n.stateNode.containerInfo,el=!0,tl(e,t,n),$c=r,el=i;break;case 0:case 11:case 14:case 15:Nc(2,n,t),Kc||Nc(4,n,t),tl(e,t,n);break;case 1:Kc||(Lc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Fc(n,t,r)),tl(e,t,n);break;case 21:tl(e,t,n);break;case 22:Kc=(r=Kc)||n.memoizedState!==null,tl(e,t,n),Kc=r;break;default:tl(e,t,n)}}function rl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Hu(t,t.return,e)}}}function il(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Hu(t,t.return,e)}}function al(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jc),t;default:throw Error(i(435,e.tag))}}function ol(e,t){var n=al(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=qu.bind(null,e,t);t.then(r,r)}})}function sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){$c=c.stateNode,el=!1;break a}break;case 5:$c=c.stateNode,el=!1;break a;case 3:case 4:$c=c.stateNode.containerInfo,el=!0;break a}c=c.return}if($c===null)throw Error(i(160));nl(o,s,a),$c=null,el=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ll(t,e),t=t.sibling}var cl=null;function ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sl(t,e),ul(e),r&4&&(Nc(3,e,e.return),Mc(3,e),Nc(5,e,e.return));break;case 1:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&64&&Gc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=cl;if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[st]||o[tt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[tt]=e,pt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[tt]=e,pt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),n!==null&&r&4&&zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),e.flags&32){a=e.stateNode;try{zt(a,``)}catch(t){Hu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(qc=!0);break;case 6:if(sl(t,e),ul(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Hu(e,e.return,t)}}break;case 3:if(Bf=null,a=cl,cl=gf(t.containerInfo),sl(t,e),cl=a,ul(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Hu(e,e.return,t)}qc&&(qc=!1,dl(e));break;case 4:r=cl,cl=gf(e.stateNode.containerInfo),sl(t,e),ul(e),cl=r;break;case 12:sl(t,e),ul(e);break;case 31:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 13:sl(t,e),ul(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xl=xe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Gc,d=Kc;if(Gc=u||a,Kc=d||l,sl(t,e),Kc=d,Gc=u,ul(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Gc||Kc||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Hu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Hu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Hu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ol(e,n))));break;case 19:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 30:break;case 21:break;default:sl(t,e),ul(e)}}function ul(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Bc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Uc(e,Vc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(zt(o,``),n.flags&=-33),Uc(e,Vc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Hc(e,Vc(e),s);break;default:throw Error(i(161))}}catch(t){Hu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zc(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nc(4,t,t.return),pl(t);break;case 1:Lc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Fc(t,t.return,n),pl(t);break;case 27:pf(t.stateNode);case 26:case 5:Lc(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function ml(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:ml(i,a,n),Mc(4,a);break;case 1:if(ml(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Hu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ra(c[i],s)}catch(e){Hu(r,r.return,e)}}n&&o&64&&Pc(a),Ic(a,a.return);break;case 27:Wc(a);case 26:case 5:ml(i,a,n),n&&r===null&&o&4&&Rc(a),Ic(a,a.return);break;case 12:ml(i,a,n);break;case 31:ml(i,a,n),n&&o&4&&rl(i,a);break;case 13:ml(i,a,n),n&&o&4&&il(i,a);break;case 22:a.memoizedState===null&&ml(i,a,n),Ic(a,a.return);break;case 30:break;default:ml(i,a,n)}t=t.sibling}}function hl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ea(n))}function gl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e))}function _l(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vl(e,t,n,r),t=t.sibling}function vl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_l(e,t,n,r),i&2048&&Mc(9,t);break;case 1:_l(e,t,n,r);break;case 3:_l(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e)));break;case 12:if(i&2048){_l(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Hu(t,t.return,e)}}else _l(e,t,n,r);break;case 31:_l(e,t,n,r);break;case 13:_l(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?_l(e,t,n,r):(a._visibility|=2,yl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?_l(e,t,n,r):bl(e,t),i&2048&&hl(o,t);break;case 24:_l(e,t,n,r),i&2048&&gl(t.alternate,t);break;default:_l(e,t,n,r)}}function yl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:yl(a,o,s,c,i),Mc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,yl(a,o,s,c,i)):u._visibility&2?yl(a,o,s,c,i):bl(a,o),i&&l&2048&&hl(o.alternate,o);break;case 24:yl(a,o,s,c,i),i&&l&2048&&gl(o.alternate,o);break;default:yl(a,o,s,c,i)}t=t.sibling}}function bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:bl(n,r),i&2048&&hl(r.alternate,r);break;case 24:bl(n,r),i&2048&&gl(r.alternate,r);break;default:bl(n,r)}t=t.sibling}}var xl=8192;function Sl(e,t,n){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Cl(e,t,n),e=e.sibling}function Cl(e,t,n){switch(e.tag){case 26:Sl(e,t,n),e.flags&xl&&e.memoizedState!==null&&Gf(n,cl,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,n);break;case 3:case 4:var r=cl;cl=gf(e.stateNode.containerInfo),Sl(e,t,n),cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Sl(e,t,n),xl=r):Sl(e,t,n));break;default:Sl(e,t,n)}}function wl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)El(e),e=e.sibling}function El(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Nc(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dl(e)):Tl(e);break;default:Tl(e)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nc(8,t,t.return),Dl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dl(t));break;default:Dl(t)}e=e.sibling}}function Ol(e,t){for(;Yc!==null;){var n=Yc;switch(n.tag){case 0:case 11:case 15:Nc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ea(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yc=r;else a:for(n=e;Yc!==null;){r=Yc;var i=r.sibling,a=r.return;if(Qc(r),r===n){Yc=null;break a}if(i!==null){i.return=a,Yc=i;break a}Yc=a}}}var kl={getCacheForType:function(e){var t=Ki(Qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ki(Qi).controller.signal}},Al=typeof WeakMap==`function`?WeakMap:Map,jl=0,Ml=null,Nl=null,Pl=0,Fl=0,Il=null,Ll=!1,Rl=!1,zl=!1,Bl=0,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=null,Jl=null,Yl=!1,Xl=0,Zl=0,Ql=1/0,$l=null,eu=null,tu=0,nu=null,ru=null,iu=0,au=0,ou=null,su=null,cu=0,lu=null;function uu(){return jl&2&&Pl!==0?Pl&-Pl:F.T===null?Qe():ld()}function du(){if(Gl===0)if(!(Pl&536870912)||Ti){var e=Re;Re<<=1,!(Re&3932160)&&(Re=262144),Gl=e}else Gl=536870912;return e=Ga.current,e!==null&&(e.flags|=32),Gl}function fu(e,t,n){(e===Ml&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)&&(yu(e,0),gu(e,Pl,Gl,!1)),Ge(e,n),(!(jl&2)||e!==Ml)&&(e===Ml&&(!(jl&2)&&(Ul|=n),Vl===4&&gu(e,Pl,Gl,!1)),td(e))}function pu(e,t,n){if(jl&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ve(e,t),a=r?Du(e,t):Tu(e,t,!0),o=r;do{if(a===0){Rl&&!r&&gu(e,t,0,!1);break}if(n=e.current.alternate,o&&!hu(n)){a=Tu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ql;var l=c.current.memoizedState.isDehydrated;if(l&&(yu(c,s).flags|=256),s=Tu(c,s,!1),s!==2){if(zl&&!l){c.errorRecoveryDisabledLanes|=o,Ul|=o,a=4;break a}o=Jl,Jl=a,o!==null&&(Jl===null?Jl=o:Jl.push.apply(Jl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){yu(e,0),gu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:gu(r,t,Gl,!Ll);break a;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Xl+300-xe(),10<a)){if(gu(r,t,Gl,!Ll),Be(r,0,!0)!==0)break a;iu=t,r.timeoutHandle=Kd(mu.bind(null,r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,`Throttled`,-0,0),a);break a}mu(r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,null,-0,0)}break}while(1);td(e)}function mu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Cl(t,a,d);var m=(a&62914560)===a?Xl-xe():(a&4194048)===a?Zl-xe():0;if(m=qf(d,m),m!==null){iu=a,e.cancelPendingCommit=m(Pu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),gu(e,a,o,!l);return}}Pu(e,t,a,n,r,i,o,s,c)}function hu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!hr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gu(e,t,n,r){t&=~Wl,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ne(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&qe(e,n,t)}function _u(){return jl&6?!0:(nd(0,!1),!1)}function vu(){if(Nl!==null){if(Fl===0)var e=Nl.return;else e=Nl,Ri=Li=null,bo(e),Ca=null,wa=0,e=Nl;for(;e!==null;)jc(e.alternate,e),e=e.return;Nl=null}}function yu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),iu=0,vu(),Ml=e,Nl=n=ni(e.current,null),Pl=t,Fl=0,Il=null,Ll=!1,Rl=Ve(e,t),zl=!1,Kl=Gl=Wl=Ul=Hl=Vl=0,Jl=ql=null,Yl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ne(r),a=1<<i;t|=e[i],r&=~a}return Bl=t,K(),n}function bu(e,t){to=null,F.H=As,t===pa||t===ha?(t=xa(),Fl=3):t===ma?(t=xa(),Fl=4):Fl=t===Js?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Il=t,Nl===null&&(Vl=1,Hs(e,ci(t,e.current)))}function xu(){var e=Ga.current;return e===null?!0:(Pl&4194048)===Pl?Ka===null:(Pl&62914560)===Pl||Pl&536870912?e===Ka:!1}function Su(){var e=F.H;return F.H=As,e===null?As:e}function Cu(){var e=F.A;return F.A=kl,e}function wu(){Vl=4,Ll||(Pl&4194048)!==Pl&&Ga.current!==null||(Rl=!0),!(Hl&134217727)&&!(Ul&134217727)||Ml===null||gu(Ml,Pl,Gl,!1)}function Tu(e,t,n){var r=jl;jl|=2;var i=Su(),a=Cu();(Ml!==e||Pl!==t)&&($l=null,yu(e,t)),t=!1;var o=Vl;a:do try{if(Fl!==0&&Nl!==null){var s=Nl,c=Il;switch(Fl){case 8:vu(),o=6;break a;case 3:case 2:case 9:case 6:Ga.current===null&&(t=!0);var l=Fl;if(Fl=0,Il=null,ju(e,s,c,l),n&&Rl){o=0;break a}break;default:l=Fl,Fl=0,Il=null,ju(e,s,c,l)}}Eu(),o=Vl;break}catch(t){bu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ri=Li=null,jl=r,F.H=i,F.A=a,Nl===null&&(Ml=null,Pl=0,K()),o}function Eu(){for(;Nl!==null;)ku(Nl)}function Du(e,t){var n=jl;jl|=2;var r=Su(),a=Cu();Ml!==e||Pl!==t?($l=null,Ql=xe()+500,yu(e,t)):Rl=Ve(e,t);a:do try{if(Fl!==0&&Nl!==null){t=Nl;var o=Il;b:switch(Fl){case 1:Fl=0,Il=null,ju(e,t,o,1);break;case 2:case 9:if(_a(o)){Fl=0,Il=null,Au(t);break}t=function(){Fl!==2&&Fl!==9||Ml!==e||(Fl=7),td(e)},o.then(t,t);break a;case 3:Fl=7;break a;case 4:Fl=5;break a;case 7:_a(o)?(Fl=0,Il=null,Au(t)):(Fl=0,Il=null,ju(e,t,o,7));break;case 5:var s=null;switch(Nl.tag){case 26:s=Nl.memoizedState;case 5:case 27:var c=Nl;if(s?Wf(s):c.stateNode.complete){Fl=0,Il=null;var l=c.sibling;if(l!==null)Nl=l;else{var u=c.return;u===null?Nl=null:(Nl=u,Mu(u))}break b}}Fl=0,Il=null,ju(e,t,o,5);break;case 6:Fl=0,Il=null,ju(e,t,o,6);break;case 8:vu(),Vl=6;break a;default:throw Error(i(462))}}Ou();break}catch(t){bu(e,t)}while(1);return Ri=Li=null,F.H=r,F.A=a,jl=n,Nl===null?(Ml=null,Pl=0,K(),Vl):0}function Ou(){for(;Nl!==null&&!ye();)ku(Nl)}function ku(e){var t=Cc(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function Au(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sc(n,t,t.pendingProps,t.type,void 0,Pl);break;case 11:t=sc(n,t,t.pendingProps,t.type.render,t.ref,Pl);break;case 5:bo(t);default:jc(n,t),t=Nl=ri(t,Bl),t=Cc(n,t,Bl)}e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function ju(e,t,n,r){Ri=Li=null,bo(t),Ca=null,wa=0;var i=t.return;try{if(qs(e,i,t,n,Pl)){Vl=1,Hs(e,ci(n,e.current)),Nl=null;return}}catch(t){if(i!==null)throw Nl=i,t;Vl=1,Hs(e,ci(n,e.current)),Nl=null;return}t.flags&32768?(Ti||r===1?e=!0:Rl||Pl&536870912?e=!1:(Ll=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ga.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nu(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Nu(t,Ll);return}e=t.return;var n=kc(t.alternate,t,Bl);if(n!==null){Nl=n;return}if(t=t.sibling,t!==null){Nl=t;return}Nl=t=e}while(t!==null);Vl===0&&(Vl=5)}function Nu(e,t){do{var n=Ac(e.alternate,e);if(n!==null){n.flags&=32767,Nl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Nl=e;return}Nl=e=n}while(e!==null);Vl=6,Nl=null}function Pu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do zu();while(tu!==0);if(jl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Kr,Ke(e,n,o,s,c,l),e===Ml&&(Nl=Ml=null,Pl=0),ru=t,nu=e,iu=n,au=o,ou=a,su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Ju(Te,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=F.T,F.T=null,a=I.p,I.p=2,s=jl,jl|=4;try{Xc(e,t,n)}finally{jl=s,I.p=a,F.T=r}}tu=1,Fu(),Iu(),Lu()}}function Fu(){if(tu===1){tu=0;var e=nu,t=ru,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=F.T,F.T=null;var r=I.p;I.p=2;var i=jl;jl|=4;try{ll(t,e);var a=zd,o=br(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&yr(s.ownerDocument.documentElement,s)){if(c!==null&&xr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=vr(s,h),v=vr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{jl=i,I.p=r,F.T=n}}e.current=t,tu=2}}function Iu(){if(tu===2){tu=0;var e=nu,t=ru,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=F.T,F.T=null;var r=I.p;I.p=2;var i=jl;jl|=4;try{Zc(e,t.alternate,t)}finally{jl=i,I.p=r,F.T=n}}tu=3}}function Lu(){if(tu===4||tu===3){tu=0,be();var e=nu,t=ru,n=iu,r=su;t.subtreeFlags&10256||t.flags&10256?tu=5:(tu=0,ru=nu=null,Ru(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(eu=null),Ze(n),t=t.stateNode,je&&typeof je.onCommitFiberRoot==`function`)try{je.onCommitFiberRoot(Ae,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=F.T,i=I.p,I.p=2,F.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{F.T=t,I.p=i}}iu&3&&zu(),td(e),i=e.pendingLanes,n&261930&&i&42?e===lu?cu++:(cu=0,lu=e):cu=0,nd(0,!1)}}function Ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ea(t)))}function zu(){return Fu(),Iu(),Lu(),Bu()}function Bu(){if(tu!==5)return!1;var e=nu,t=au;au=0;var n=Ze(iu),r=F.T,a=I.p;try{I.p=32>n?32:n,F.T=null,n=ou,ou=null;var o=nu,s=iu;if(tu=0,ru=nu=null,iu=0,jl&6)throw Error(i(331));var c=jl;if(jl|=4,El(o.current),vl(o,o.current,s,n),jl=c,nd(0,!1),je&&typeof je.onPostCommitFiberRoot==`function`)try{je.onPostCommitFiberRoot(Ae,o)}catch{}return!0}finally{I.p=a,F.T=r,Ru(e,t)}}function Vu(e,t,n){t=ci(n,t),t=Ws(e.stateNode,t,2),e=Ma(e,t,2),e!==null&&(Ge(e,2),td(e))}function Hu(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(eu===null||!eu.has(r))){e=ci(n,e),n=Gs(2),r=Ma(t,n,2),r!==null&&(Ks(n,r,t,e),Ge(r,2),td(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Al;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(zl=!0,i.add(n),e=Wu.bind(null,e,t,n),t.then(e,e))}function Wu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ml===e&&(Pl&n)===n&&(Vl===4||Vl===3&&(Pl&62914560)===Pl&&300>xe()-Xl?!(jl&2)&&yu(e,0):Wl|=n,Kl===Pl&&(Kl=0)),td(e)}function Gu(e,t){t===0&&(t=Ue()),e=Yr(e,t),e!==null&&(Ge(e,t),td(e))}function Ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Gu(e,n)}function Ju(e,t){return _e(e,t)}var Yu=null,Xu=null,Zu=!1,Qu=!1,$u=!1,ed=0;function td(e){e!==Xu&&e.next===null&&(Xu===null?Yu=Xu=e:Xu=Xu.next=e),Qu=!0,Zu||(Zu=!0,cd())}function nd(e,t){if(!$u&&Qu){$u=!0;do for(var n=!1,r=Yu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ne(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,sd(r,a))}else a=Pl,a=Be(r,r===Ml?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ve(r,a)||(n=!0,sd(r,a));r=r.next}while(n);$u=!1}}function rd(){id()}function id(){Qu=Zu=!1;var e=0;ed!==0&&Gd()&&(e=ed);for(var t=xe(),n=null,r=Yu;r!==null;){var i=r.next,a=ad(r,t);a===0?(r.next=null,n===null?Yu=i:n.next=i,i===null&&(Xu=n)):(n=r,(e!==0||a&3)&&(Qu=!0)),r=i}tu!==0&&tu!==5||nd(e,!1),ed!==0&&(ed=0)}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ne(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=He(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ml,n=Pl,n=Be(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ve(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ve(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ve(r),Ze(n)){case 2:case 8:n=we;break;case 32:n=Te;break;case 268435456:n=De;break;default:n=Te}return r=od.bind(null,e),n=_e(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ve(r),e.callbackPriority=2,e.callbackNode=null,2}function od(e,t){if(tu!==0&&tu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=Pl;return r=Be(e,e===Ml?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(pu(e,r,t),ad(e,xe()),e.callbackNode!=null&&e.callbackNode===n?od.bind(null,e):null)}function sd(e,t){if(zu())return null;pu(e,t,!0)}function cd(){Yd(function(){jl&6?_e(Ce,rd):id()})}function ld(){if(ed===0){var e=ra;e===0&&(e=Le,Le<<=1,!(Le&261888)&&(Le=256)),ed=e}return ed}function ud(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ud((i[W]||null).action),o=r.submitter;o&&(t=(t=o[W]||null)?ud(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ed!==0){var e=o?dd(i,o):new FormData(i);gs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?dd(i,o):new FormData(i),gs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var pd=0;pd<Vr.length;pd++){var md=Vr[pd];Hr(md.toLowerCase(),`on`+(md[0].toUpperCase()+md.slice(1)))}Hr(Nr,`onAnimationEnd`),Hr(Pr,`onAnimationIteration`),Hr(Fr,`onAnimationStart`),Hr(`dblclick`,`onDoubleClick`),Hr(`focusin`,`onFocus`),Hr(`focusout`,`onBlur`),Hr(Ir,`onTransitionRun`),Hr(Lr,`onTransitionStart`),Hr(Rr,`onTransitionCancel`),Hr(zr,`onTransitionEnd`),_t(`onMouseEnter`,[`mouseout`,`mouseover`]),_t(`onMouseLeave`,[`mouseout`,`mouseover`]),_t(`onPointerEnter`,[`pointerout`,`pointerover`]),_t(`onPointerLeave`,[`pointerout`,`pointerover`]),gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var hd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),gd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));function _d(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ur(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ur(e)}i.currentTarget=null,a=c}}}}function vd(e,t){var n=t[rt];n===void 0&&(n=t[rt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,mt.forEach(function(t){t!==`selectionchange`&&(gd.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=lt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}en(function(){var r=a,i=Yt(n),s=[];a:{var c=Br.get(e);if(c!==void 0){var l=hn,u=e;switch(e){case`keypress`:if(un(n)===0)break a;case`keydown`:case`keyup`:l=Mn;break;case`focusin`:u=`focus`,l=wn;break;case`focusout`:u=`blur`,l=wn;break;case`beforeblur`:case`afterblur`:l=wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Sn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Cn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Pn;break;case Nr:case Pr:case Fr:l=Tn;break;case zr:l=Fn;break;case`scroll`:case`scrollend`:l=_n;break;case`wheel`:l=In;break;case`copy`:case`cut`:case`paste`:l=En;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Nn;break;case`toggle`:case`beforetoggle`:l=Ln}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=tn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(lt(u)||u[nt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?lt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Sn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Nn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:dt(l),h=u==null?c:dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,lt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=rr;else if(Zn(c))if(ir)v=pr;else{v=dr;var y=ur}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Ut(r.elementType)&&(v=rr):v=fr;if(v&&=v(e,r)){Qn(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ft(c,`number`,c.value)}switch(y=r?dt(r):window,e){case`focusin`:(Zn(y)||y.contentEditable===`true`)&&(Cr=y,wr=r,Tr=null);break;case`focusout`:Tr=wr=Cr=null;break;case`mousedown`:Er=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Er=!1,Dr(s,n,i);break;case`selectionchange`:if(Sr)break;case`keydown`:case`keyup`:Dr(s,n,i)}var b;if(zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else qn?Gn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Hn&&n.locale!==`ko`&&(qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&qn&&(b=ln()):(on=i,sn=`value`in on?on.value:on.textContent,qn=!0)),y=Td(r,x),0<y.length&&(x=new G(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Kn(n),b!==null&&(x.data=b)))),(b=Vn?Jn(e,n):Yn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new G(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),fd(s,e,r,n,i)}_d(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=tn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=tn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=tn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=tn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&zt(e,``+r);break;case`className`:Ct(e,`class`,r);break;case`tabIndex`:Ct(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ct(e,n,r);break;case`style`:Ht(e,r,o);break;case`data`:if(t!==`object`){Ct(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:vd(`beforetoggle`,e),vd(`toggle`,e),St(e,`popover`,r);break;case`xlinkActuate`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:St(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Wt.get(n)||n,St(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Ht(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&zt(e,``+r);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!ht.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[W]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):St(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:vd(`error`,e),vd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:vd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Pt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in vd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(s in vd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Rt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:vd(`beforetoggle`,e),vd(`toggle`,e),vd(`cancel`,e),vd(`close`,e);break;case`iframe`:case`object`:vd(`load`,e);break;case`video`:case`audio`:for(r=0;r<hd.length;r++)vd(hd[r],e);break;case`image`:vd(`error`,e),vd(`load`,e);break;case`details`:vd(`toggle`,e);break;case`embed`:case`source`:case`link`:vd(`error`,e),vd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Ut(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Nt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Ut(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[st]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[st])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=I.d;I.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=_u();return e||t}function yf(e){var t=ut(e);t!==null&&t.tag===5&&t.type===`form`?vs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),pt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=ft(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);pt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),pt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),pt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=re.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=ft(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=ft(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Mt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),pt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Mt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,pt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),pt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,pt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),pt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,pt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),pt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[st]||a[tt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),pt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=$i(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},X(a),e}function tp(e){return e?(e=Qr,e):Qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ma(e,r,t),n!==null&&(fu(n,e,t),Na(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&fu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=uu();t=Xe(t);var n=Yr(e,t);n!==null&&fu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=2,up(e,t,n,r)}finally{I.p=a,F.T=i}}function lp(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=8,up(e,t,n,r)}finally{I.p=a,F.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=U(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ne(o);s.entanglements[1]|=c,o&=~c}td(a),!(jl&6)&&(Ql=xe()+500,nd(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&fu(s,a,2),_u(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Yt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=lt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Se()){case Ce:return 2;case we:return 8;case Te:case Ee:return 32;case De:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ut(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=lt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,$e(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,$e(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=ut(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ut(n);a!==null&&(e.splice(t,3),t-=3,gs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[W]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[W]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,uu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_u(),t[nt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:F,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ae=zp.inject(Rp),je=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=zs,s=Bs,c=Vs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[nt]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x=c(m());function S(e){"@babel/helpers - typeof";return S=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},S(e)}function C(e,t){if(S(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(S(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function w(e){var t=C(e,`string`);return S(t)==`symbol`?t:t+``}function T(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}var D,O;function k(){if(O)return D;O=1;var e=`production`;return D=function(t,n,r,i,a,o,s,c){if(e!==`production`&&n===void 0)throw Error(`invariant requires an error message argument`);if(!t){var l;if(n===void 0)l=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var u=[r,i,a,o,s,c],d=0;l=Error(n.replace(/%s/g,function(){return u[d++]})),l.name=`Invariant Violation`}throw l.framesToPop=1,l}},D}var A=E(k()),j=(0,_.createContext)(null);function M(){A(!!_.useContext,`useGoogleMap is React hook and requires React version 16.8+`);var e=(0,_.useContext)(j);return A(!!e,`useGoogleMap needs a GoogleMap available up in the tree`),e}function N(e,t,n){return Object.keys(e).reduce(function(n,r){return t(n,e[r],r)},n)}function P(e,t){Object.keys(e).forEach(n=>t(e[n],n))}function ee(e,t,n,r){var i={};return P(e,(e,a)=>{var o=n[a];o!==t[a]&&(i[a]=o,e(r,o))}),i}function F(e,t,n){return N(n,function(n,r,i){return typeof e[i]==`function`&&n.push(google.maps.event.addListener(t,r,e[i])),n},[])}function I(e){google.maps.event.removeListener(e)}function L(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach(I)}function R(e){var{updaterMap:t,eventMap:n,prevProps:r,nextProps:i,instance:a}=e,o=F(i,a,n);return ee(t,r,i,a),o}var te={onDblClick:`dblclick`,onDragEnd:`dragend`,onDragStart:`dragstart`,onMapTypeIdChanged:`maptypeid_changed`,onMouseMove:`mousemove`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseDown:`mousedown`,onMouseUp:`mouseup`,onRightClick:`rightclick`,onTilesLoaded:`tilesloaded`,onBoundsChanged:`bounds_changed`,onCenterChanged:`center_changed`,onClick:`click`,onDrag:`drag`,onHeadingChanged:`heading_changed`,onIdle:`idle`,onProjectionChanged:`projection_changed`,onResize:`resize`,onTiltChanged:`tilt_changed`,onZoomChanged:`zoom_changed`},z={extraMapTypes(e,t){t.forEach(function(t,n){e.mapTypes.set(String(n),t)})},center(e,t){e.setCenter(t)},clickableIcons(e,t){e.setClickableIcons(t)},heading(e,t){e.setHeading(t)},mapTypeId(e,t){e.setMapTypeId(t)},options(e,t){e.setOptions(t)},streetView(e,t){e.setStreetView(t)},tilt(e,t){e.setTilt(t)},zoom(e,t){e.setZoom(t)}};function B(e){var{children:t,options:n,id:r,mapContainerStyle:i,mapContainerClassName:a,center:o,onClick:s,onDblClick:c,onDrag:l,onDragEnd:u,onDragStart:d,onMouseMove:f,onMouseOut:p,onMouseOver:m,onMouseDown:h,onMouseUp:g,onRightClick:v,onCenterChanged:y,onLoad:x,onUnmount:S}=e,[C,w]=(0,_.useState)(null),T=(0,_.useRef)(null),[E,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(null),[A,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[ee,F]=(0,_.useState)(null),[I,L]=(0,_.useState)(null),[R,te]=(0,_.useState)(null),[z,B]=(0,_.useState)(null),[V,H]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(null),[oe,se]=(0,_.useState)(null);return(0,_.useEffect)(()=>{n&&C!==null&&C.setOptions(n)},[C,n]),(0,_.useEffect)(()=>{C!==null&&o!==void 0&&C.setCenter(o)},[C,o]),(0,_.useEffect)(()=>{C&&c&&(O!==null&&google.maps.event.removeListener(O),k(google.maps.event.addListener(C,`dblclick`,c)))},[c]),(0,_.useEffect)(()=>{C&&u&&(A!==null&&google.maps.event.removeListener(A),M(google.maps.event.addListener(C,`dragend`,u)))},[u]),(0,_.useEffect)(()=>{C&&d&&(N!==null&&google.maps.event.removeListener(N),P(google.maps.event.addListener(C,`dragstart`,d)))},[d]),(0,_.useEffect)(()=>{C&&h&&(ee!==null&&google.maps.event.removeListener(ee),F(google.maps.event.addListener(C,`mousedown`,h)))},[h]),(0,_.useEffect)(()=>{C&&f&&(I!==null&&google.maps.event.removeListener(I),L(google.maps.event.addListener(C,`mousemove`,f)))},[f]),(0,_.useEffect)(()=>{C&&p&&(R!==null&&google.maps.event.removeListener(R),te(google.maps.event.addListener(C,`mouseout`,p)))},[p]),(0,_.useEffect)(()=>{C&&m&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(C,`mouseover`,m)))},[m]),(0,_.useEffect)(()=>{C&&g&&(V!==null&&google.maps.event.removeListener(V),H(google.maps.event.addListener(C,`mouseup`,g)))},[g]),(0,_.useEffect)(()=>{C&&v&&(ne!==null&&google.maps.event.removeListener(ne),re(google.maps.event.addListener(C,`rightclick`,v)))},[v]),(0,_.useEffect)(()=>{C&&s&&(ie!==null&&google.maps.event.removeListener(ie),ae(google.maps.event.addListener(C,`click`,s)))},[s]),(0,_.useEffect)(()=>{C&&l&&(oe!==null&&google.maps.event.removeListener(oe),se(google.maps.event.addListener(C,`drag`,l)))},[l]),(0,_.useEffect)(()=>{C&&y&&(E!==null&&google.maps.event.removeListener(E),D(google.maps.event.addListener(C,`center_changed`,y)))},[s]),(0,_.useEffect)(()=>{var e=T.current===null?null:new google.maps.Map(T.current,n);return w(e),e!==null&&x&&x(e),()=>{e!==null&&S&&S(e)}},[]),(0,b.jsx)(`div`,{id:r,ref:T,style:i,className:a,children:(0,b.jsx)(j.Provider,{value:C,children:C===null?null:t})})}(0,_.memo)(B);var V=class extends _.PureComponent{constructor(){super(...arguments),T(this,`state`,{map:null}),T(this,`registeredEvents`,[]),T(this,`mapRef`,null),T(this,`getInstance`,()=>this.mapRef===null?null:new google.maps.Map(this.mapRef,this.props.options)),T(this,`panTo`,e=>{var t=this.getInstance();t&&t.panTo(e)}),T(this,`setMapCallback`,()=>{this.state.map!==null&&this.props.onLoad&&this.props.onLoad(this.state.map)}),T(this,`getRef`,e=>{this.mapRef=e})}componentDidMount(){var e=this.getInstance();this.registeredEvents=R({updaterMap:z,eventMap:te,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{map:e}},this.setMapCallback)}componentDidUpdate(e){this.state.map!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:z,eventMap:te,prevProps:e,nextProps:this.props,instance:this.state.map}))}componentWillUnmount(){this.state.map!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.map),L(this.registeredEvents))}render(){return(0,b.jsx)(`div`,{id:this.props.id,ref:this.getRef,style:this.props.mapContainerStyle,className:this.props.mapContainerClassName,children:(0,b.jsx)(j.Provider,{value:this.state.map,children:this.state.map===null?null:this.props.children})})}};function H(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function ne(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){H(a,r,i,o,s,`next`,e)}function s(e){H(a,r,i,o,s,`throw`,e)}o(void 0)})}}function re(e){var{googleMapsApiKey:t,googleMapsClientId:n,version:r=`weekly`,language:i,region:a,libraries:o,channel:s,mapIds:c,authReferrerPolicy:l,apiUrl:u=`https://maps.googleapis.com`}=e,d=[];return A(t&&n||!(t&&n),`You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.`),t?d.push(`key=${t}`):n&&d.push(`client=${n}`),r&&d.push(`v=${r}`),i&&d.push(`language=${i}`),a&&d.push(`region=${a}`),o&&o.length&&d.push(`libraries=${o.sort().join(`,`)}`),s&&d.push(`channel=${s}`),c&&c.length&&d.push(`map_ids=${c.join(`,`)}`),l&&d.push(`auth_referrer_policy=${l}`),d.push(`loading=async`),d.push(`callback=initMap`),`${u}/maps/api/js?${d.join(`&`)}`}var ie=typeof document<`u`;function ae(e){var{url:t,id:n,nonce:r}=e;return ie?new Promise(function(e,i){var a=document.getElementById(n),o=window;if(a){var s=a.getAttribute(`data-state`);if(a.src===t&&s!==`error`){if(s===`ready`)return e(n);var c=o.initMap,l=a.onerror;o.initMap=function(){c&&c(),e(n)},a.onerror=function(e){l&&l(e),i(e)};return}a.remove()}var u=document.createElement(`script`);u.type=`text/javascript`,u.src=t,u.id=n,u.async=!0,u.nonce=r||``,u.onerror=function(e){u.setAttribute(`data-state`,`error`),i(e)},o.initMap=function(){u.setAttribute(`data-state`,`ready`),e(n)},document.head.appendChild(u)}).catch(e=>{throw console.error(`injectScript error: `,e),e}):Promise.reject(Error(`document is undefined`))}function oe(e){var t=e.href;return t&&(t.indexOf(`https://fonts.googleapis.com/css?family=Roboto`)===0||t.indexOf(`https://fonts.googleapis.com/css?family=Google+Sans+Text`)===0)?!0:e.tagName.toLowerCase()===`style`&&e.styleSheet&&e.styleSheet.cssText&&e.styleSheet.cssText.replace(`\r
`,``).indexOf(`.gm-style`)===0?(e.styleSheet.cssText=``,!0):e.tagName.toLowerCase()===`style`&&e.innerHTML&&e.innerHTML.replace(`\r
`,``).indexOf(`.gm-style`)===0?(e.innerHTML=``,!0):e.tagName.toLowerCase()===`style`&&!e.styleSheet&&!e.innerHTML}function se(){var e=document.getElementsByTagName(`head`)[0];if(e){var t=e.insertBefore.bind(e);e.insertBefore=function(n,r){return oe(n)||Reflect.apply(t,e,[n,r]),n};var n=e.appendChild.bind(e);e.appendChild=function(t){return oe(t)||Reflect.apply(n,e,[t]),t}}}var ce=!1;function le(){return(0,b.jsx)(`div`,{children:`Loading...`})}var ue={id:`script-loader`,version:`weekly`},de=class extends _.PureComponent{constructor(){super(...arguments),T(this,`check`,null),T(this,`state`,{loaded:!1}),T(this,`cleanupCallback`,()=>{delete window.google.maps,this.injectScript()}),T(this,`isCleaningUp`,ne(function*(){function e(e){if(!ce)e();else if(ie)var t=window.setInterval(function(){ce||(window.clearInterval(t),e())},1)}return new Promise(e)})),T(this,`cleanup`,()=>{ce=!0;var e=document.getElementById(this.props.id);e&&e.parentNode&&e.parentNode.removeChild(e),Array.prototype.slice.call(document.getElementsByTagName(`script`)).filter(function(e){return typeof e.src==`string`&&e.src.includes(`maps.googleapis`)}).forEach(function(e){e.parentNode&&e.parentNode.removeChild(e)}),Array.prototype.slice.call(document.getElementsByTagName(`link`)).filter(function(e){return e.href===`https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans`}).forEach(function(e){e.parentNode&&e.parentNode.removeChild(e)}),Array.prototype.slice.call(document.getElementsByTagName(`style`)).filter(function(e){return e.innerText!==void 0&&e.innerText.length>0&&e.innerText.includes(`.gm-`)}).forEach(function(e){e.parentNode&&e.parentNode.removeChild(e)})}),T(this,`injectScript`,()=>{this.props.preventGoogleFontsLoading&&se(),A(!!this.props.id,`LoadScript requires "id" prop to be a string: %s`,this.props.id),ae({id:this.props.id,nonce:this.props.nonce,url:re(this.props)}).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(e=>{this.props.onError&&this.props.onError(e),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this.props.googleMapsApiKey||`-`}) or Client ID (${this.props.googleMapsClientId||`-`}) to <LoadScript />
          Otherwise it is a Network issue.
        `)})}),T(this,`getRef`,e=>{this.check=e})}componentDidMount(){if(ie){if(window.google&&window.google.maps&&!ce){console.error(`google api is already presented`);return}this.isCleaningUp().then(this.injectScript).catch(function(e){console.error(`Error at injecting script after cleaning up: `,e)})}}componentDidUpdate(e){this.props.libraries!==e.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),ie&&e.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){ie&&(this.cleanup(),window.setTimeout(()=>{this.check||(delete window.google,ce=!1)},1),this.props.onUnmount&&this.props.onUnmount())}render(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{ref:this.getRef}),this.state.loaded?this.props.children:this.props.loadingElement||(0,b.jsx)(le,{})]})}};T(de,`defaultProps`,ue);function fe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function pe(e,t){if(e==null)return{};var n,r,i=fe(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var me;function he(e){var{id:t=ue.id,version:n=ue.version,nonce:r,googleMapsApiKey:i,googleMapsClientId:a,language:o,region:s,libraries:c,preventGoogleFontsLoading:l,channel:u,mapIds:d,authReferrerPolicy:f,apiUrl:p=`https://maps.googleapis.com`}=e,m=(0,_.useRef)(!1),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(void 0);(0,_.useEffect)(function(){return m.current=!0,()=>{m.current=!1}},[]),(0,_.useEffect)(function(){ie&&l&&se()},[l]),(0,_.useEffect)(function(){h&&A(!!window.google,`useLoadScript was marked as loaded, but window.google is not present. Something went wrong.`)},[h]);var b=re({version:n,googleMapsApiKey:i,googleMapsClientId:a,language:o,region:s,libraries:c,channel:u,mapIds:d,authReferrerPolicy:f,apiUrl:p});(0,_.useEffect)(function(){if(!ie)return;function e(){m.current&&(g(!0),me=b)}if(window.google&&window.google.maps&&me===b){e();return}ae({id:t,url:b,nonce:r}).then(e).catch(function(e){m.current&&y(e),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${i||`-`}) or Client ID (${a||`-`})
        Otherwise it is a Network issue.
      `),console.error(e)})},[t,b,r]);var x=(0,_.useRef)(void 0);return(0,_.useEffect)(function(){x.current&&c!==x.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),x.current=c},[c]),{isLoaded:h,loadError:v,url:b}}var ge=[`loadingElement`,`onLoad`,`onError`,`onUnmount`,`children`],_e=(0,b.jsx)(le,{});function ve(e){var{loadingElement:t,onLoad:n,onError:r,onUnmount:i,children:a}=e,{isLoaded:o,loadError:s}=he(pe(e,ge));return(0,_.useEffect)(function(){o&&typeof n==`function`&&n()},[o,n]),(0,_.useEffect)(function(){s&&typeof r==`function`&&r(s)},[s,r]),(0,_.useEffect)(function(){return()=>{i&&i()}},[i]),o?a:t||_e}(0,_.memo)(ve);var ye;(function(e){e[e.INITIALIZED=0]=`INITIALIZED`,e[e.LOADING=1]=`LOADING`,e[e.SUCCESS=2]=`SUCCESS`,e[e.FAILURE=3]=`FAILURE`})(ye||={});function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?be(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Se={},Ce={options(e,t){e.setOptions(t)}};function we(e){var{options:t,onLoad:n,onUnmount:r}=e,i=(0,_.useContext)(j),[a,o]=(0,_.useState)(null);return(0,_.useEffect)(()=>{a!==null&&a.setMap(i)},[i]),(0,_.useEffect)(()=>{t&&a!==null&&a.setOptions(t)},[a,t]),(0,_.useEffect)(()=>{var e=new google.maps.TrafficLayer(xe(xe({},t),{},{map:i}));return o(e),n&&n(e),()=>{a!==null&&(r&&r(a),a.setMap(null))}},[]),null}(0,_.memo)(we),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`state`,{trafficLayer:null}),T(this,`setTrafficLayerCallback`,()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)}),T(this,`registeredEvents`,[])}componentDidMount(){var e=new google.maps.TrafficLayer(xe(xe({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:Ce,eventMap:Se,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{trafficLayer:e}},this.setTrafficLayerCallback)}componentDidUpdate(e){this.state.trafficLayer!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Ce,eventMap:Se,prevProps:e,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),L(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}},`contextType`,j);function Te(e){var{onLoad:t,onUnmount:n}=e,r=(0,_.useContext)(j),[i,a]=(0,_.useState)(null);return(0,_.useEffect)(()=>{i!==null&&i.setMap(r)},[r]),(0,_.useEffect)(()=>{var e=new google.maps.BicyclingLayer;return a(e),e.setMap(r),t&&t(e),()=>{e!==null&&(n&&n(e),e.setMap(null))}},[]),null}(0,_.memo)(Te),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`state`,{bicyclingLayer:null}),T(this,`setBicyclingLayerCallback`,()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))})}componentDidMount(){var e=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:e}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}},`contextType`,j);function Ee(e){var{onLoad:t,onUnmount:n}=e,r=(0,_.useContext)(j),[i,a]=(0,_.useState)(null);return(0,_.useEffect)(()=>{i!==null&&i.setMap(r)},[r]),(0,_.useEffect)(()=>{var e=new google.maps.TransitLayer;return a(e),e.setMap(r),t&&t(e),()=>{i!==null&&(n&&n(i),i.setMap(null))}},[]),null}(0,_.memo)(Ee),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`state`,{transitLayer:null}),T(this,`setTransitLayerCallback`,()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))})}componentDidMount(){var e=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:e}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}},`contextType`,j);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?De(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ke={onCircleComplete:`circlecomplete`,onMarkerComplete:`markercomplete`,onOverlayComplete:`overlaycomplete`,onPolygonComplete:`polygoncomplete`,onPolylineComplete:`polylinecomplete`,onRectangleComplete:`rectanglecomplete`},Ae={drawingMode(e,t){e.setDrawingMode(t)},options(e,t){e.setOptions(t)}};function je(e){var{options:t,drawingMode:n,onCircleComplete:r,onMarkerComplete:i,onOverlayComplete:a,onPolygonComplete:o,onPolylineComplete:s,onRectangleComplete:c,onLoad:l,onUnmount:u}=e,d=(0,_.useContext)(j),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null);return(0,_.useEffect)(()=>{f!==null&&f.setMap(d)},[d]),(0,_.useEffect)(()=>{t&&f!==null&&f.setOptions(t)},[f,t]),(0,_.useEffect)(()=>{f!==null&&f.setDrawingMode(n??null)},[f,n]),(0,_.useEffect)(()=>{f&&r&&(m!==null&&google.maps.event.removeListener(m),h(google.maps.event.addListener(f,`circlecomplete`,r)))},[f,r]),(0,_.useEffect)(()=>{f&&i&&(g!==null&&google.maps.event.removeListener(g),v(google.maps.event.addListener(f,`markercomplete`,i)))},[f,i]),(0,_.useEffect)(()=>{f&&a&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(f,`overlaycomplete`,a)))},[f,a]),(0,_.useEffect)(()=>{f&&o&&(x!==null&&google.maps.event.removeListener(x),S(google.maps.event.addListener(f,`polygoncomplete`,o)))},[f,o]),(0,_.useEffect)(()=>{f&&s&&(C!==null&&google.maps.event.removeListener(C),w(google.maps.event.addListener(f,`polylinecomplete`,s)))},[f,s]),(0,_.useEffect)(()=>{f&&c&&(T!==null&&google.maps.event.removeListener(T),E(google.maps.event.addListener(f,`rectanglecomplete`,c)))},[f,c]),(0,_.useEffect)(()=>{A(!!google.maps.drawing,`Did you include prop libraries={['drawing']} in the URL? %s`,google.maps.drawing);var e=new google.maps.drawing.DrawingManager(Oe(Oe({},t),{},{map:d}));return n&&e.setDrawingMode(n),r&&h(google.maps.event.addListener(e,`circlecomplete`,r)),i&&v(google.maps.event.addListener(e,`markercomplete`,i)),a&&b(google.maps.event.addListener(e,`overlaycomplete`,a)),o&&S(google.maps.event.addListener(e,`polygoncomplete`,o)),s&&w(google.maps.event.addListener(e,`polylinecomplete`,s)),c&&E(google.maps.event.addListener(e,`rectanglecomplete`,c)),p(e),l&&l(e),()=>{f!==null&&(m&&google.maps.event.removeListener(m),g&&google.maps.event.removeListener(g),y&&google.maps.event.removeListener(y),x&&google.maps.event.removeListener(x),C&&google.maps.event.removeListener(C),T&&google.maps.event.removeListener(T),u&&u(f),f.setMap(null))}},[]),null}(0,_.memo)(je),T(class extends _.PureComponent{constructor(e){super(e),T(this,`registeredEvents`,[]),T(this,`state`,{drawingManager:null}),T(this,`setDrawingManagerCallback`,()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)}),A(!!google.maps.drawing,`Did you include prop libraries={['drawing']} in the URL? %s`,google.maps.drawing)}componentDidMount(){var e=new google.maps.drawing.DrawingManager(Oe(Oe({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:Ae,eventMap:ke,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{drawingManager:e}},this.setDrawingManagerCallback)}componentDidUpdate(e){this.state.drawingManager!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Ae,eventMap:ke,prevProps:e,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),L(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}},`contextType`,j);function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Me(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Pe={onAnimationChanged:`animation_changed`,onClick:`click`,onClickableChanged:`clickable_changed`,onCursorChanged:`cursor_changed`,onDblClick:`dblclick`,onDrag:`drag`,onDragEnd:`dragend`,onDraggableChanged:`draggable_changed`,onDragStart:`dragstart`,onFlatChanged:`flat_changed`,onIconChanged:`icon_changed`,onMouseDown:`mousedown`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onPositionChanged:`position_changed`,onRightClick:`rightclick`,onShapeChanged:`shape_changed`,onTitleChanged:`title_changed`,onVisibleChanged:`visible_changed`,onZindexChanged:`zindex_changed`},Fe={animation(e,t){e.setAnimation(t)},clickable(e,t){e.setClickable(t)},cursor(e,t){e.setCursor(t)},draggable(e,t){e.setDraggable(t)},icon(e,t){e.setIcon(t)},label(e,t){e.setLabel(t)},map(e,t){e.setMap(t)},opacity(e,t){e.setOpacity(t)},options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},shape(e,t){e.setShape(t)},title(e,t){e.setTitle(t)},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},Ie={};function Le(e){var{position:t,options:n,clusterer:r,noClustererRedraw:i,children:a,draggable:o,visible:s,animation:c,clickable:l,cursor:u,icon:d,label:f,opacity:p,shape:m,title:h,zIndex:g,onClick:v,onDblClick:y,onDrag:x,onDragEnd:S,onDragStart:C,onMouseOut:w,onMouseOver:T,onMouseUp:E,onMouseDown:D,onRightClick:O,onClickableChanged:k,onCursorChanged:A,onAnimationChanged:M,onDraggableChanged:N,onFlatChanged:P,onIconChanged:ee,onPositionChanged:F,onShapeChanged:I,onTitleChanged:L,onVisibleChanged:R,onZindexChanged:te,onLoad:z,onUnmount:B}=e,V=(0,_.useContext)(j),[H,ne]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[ae,oe]=(0,_.useState)(null),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(null),[de,fe]=(0,_.useState)(null),[pe,me]=(0,_.useState)(null),[he,ge]=(0,_.useState)(null),[_e,ve]=(0,_.useState)(null),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(null),[Ce,we]=(0,_.useState)(null),[Te,Ee]=(0,_.useState)(null),[De,Oe]=(0,_.useState)(null),[ke,Ae]=(0,_.useState)(null),[je,Me]=(0,_.useState)(null),[Pe,Fe]=(0,_.useState)(null),[Le,Re]=(0,_.useState)(null),[ze,U]=(0,_.useState)(null),[Be,Ve]=(0,_.useState)(null),[He,Ue]=(0,_.useState)(null),[We,Ge]=(0,_.useState)(null);(0,_.useEffect)(()=>{H!==null&&H.setMap(V)},[V]),(0,_.useEffect)(()=>{n!==void 0&&H!==null&&H.setOptions(n)},[H,n]),(0,_.useEffect)(()=>{o!==void 0&&H!==null&&H.setDraggable(o)},[H,o]),(0,_.useEffect)(()=>{t&&H!==null&&H.setPosition(t)},[H,t]),(0,_.useEffect)(()=>{s!==void 0&&H!==null&&H.setVisible(s)},[H,s]),(0,_.useEffect)(()=>{H?.setAnimation(c)},[H,c]),(0,_.useEffect)(()=>{H&&l!==void 0&&H.setClickable(l)},[H,l]),(0,_.useEffect)(()=>{H&&u!==void 0&&H.setCursor(u)},[H,u]),(0,_.useEffect)(()=>{H&&d!==void 0&&H.setIcon(d)},[H,d]),(0,_.useEffect)(()=>{H&&f!==void 0&&H.setLabel(f)},[H,f]),(0,_.useEffect)(()=>{H&&p!==void 0&&H.setOpacity(p)},[H,p]),(0,_.useEffect)(()=>{H&&m!==void 0&&H.setShape(m)},[H,m]),(0,_.useEffect)(()=>{H&&h!==void 0&&H.setTitle(h)},[H,h]),(0,_.useEffect)(()=>{H&&g!==void 0&&H.setZIndex(g)},[H,g]),(0,_.useEffect)(()=>{H&&y&&(re!==null&&google.maps.event.removeListener(re),ie(google.maps.event.addListener(H,`dblclick`,y)))},[y]),(0,_.useEffect)(()=>{H&&S&&(ae!==null&&google.maps.event.removeListener(ae),oe(google.maps.event.addListener(H,`dragend`,S)))},[S]),(0,_.useEffect)(()=>{H&&C&&(se!==null&&google.maps.event.removeListener(se),ce(google.maps.event.addListener(H,`dragstart`,C)))},[C]),(0,_.useEffect)(()=>{H&&D&&(le!==null&&google.maps.event.removeListener(le),ue(google.maps.event.addListener(H,`mousedown`,D)))},[D]),(0,_.useEffect)(()=>{H&&w&&(de!==null&&google.maps.event.removeListener(de),fe(google.maps.event.addListener(H,`mouseout`,w)))},[w]),(0,_.useEffect)(()=>{H&&T&&(pe!==null&&google.maps.event.removeListener(pe),me(google.maps.event.addListener(H,`mouseover`,T)))},[T]),(0,_.useEffect)(()=>{H&&E&&(he!==null&&google.maps.event.removeListener(he),ge(google.maps.event.addListener(H,`mouseup`,E)))},[E]),(0,_.useEffect)(()=>{H&&O&&(_e!==null&&google.maps.event.removeListener(_e),ve(google.maps.event.addListener(H,`rightclick`,O)))},[O]),(0,_.useEffect)(()=>{H&&v&&(ye!==null&&google.maps.event.removeListener(ye),be(google.maps.event.addListener(H,`click`,v)))},[v]),(0,_.useEffect)(()=>{H&&x&&(xe!==null&&google.maps.event.removeListener(xe),Se(google.maps.event.addListener(H,`drag`,x)))},[x]),(0,_.useEffect)(()=>{H&&k&&(Ce!==null&&google.maps.event.removeListener(Ce),we(google.maps.event.addListener(H,`clickable_changed`,k)))},[k]),(0,_.useEffect)(()=>{H&&A&&(Te!==null&&google.maps.event.removeListener(Te),Ee(google.maps.event.addListener(H,`cursor_changed`,A)))},[A]),(0,_.useEffect)(()=>{H&&M&&(De!==null&&google.maps.event.removeListener(De),Oe(google.maps.event.addListener(H,`animation_changed`,M)))},[M]),(0,_.useEffect)(()=>{H&&N&&(ke!==null&&google.maps.event.removeListener(ke),Ae(google.maps.event.addListener(H,`draggable_changed`,N)))},[N]),(0,_.useEffect)(()=>{H&&P&&(je!==null&&google.maps.event.removeListener(je),Me(google.maps.event.addListener(H,`flat_changed`,P)))},[P]),(0,_.useEffect)(()=>{H&&ee&&(Pe!==null&&google.maps.event.removeListener(Pe),Fe(google.maps.event.addListener(H,`icon_changed`,ee)))},[ee]),(0,_.useEffect)(()=>{H&&F&&(Le!==null&&google.maps.event.removeListener(Le),Re(google.maps.event.addListener(H,`position_changed`,F)))},[F]),(0,_.useEffect)(()=>{H&&I&&(ze!==null&&google.maps.event.removeListener(ze),U(google.maps.event.addListener(H,`shape_changed`,I)))},[I]),(0,_.useEffect)(()=>{H&&L&&(Be!==null&&google.maps.event.removeListener(Be),Ve(google.maps.event.addListener(H,`title_changed`,L)))},[L]),(0,_.useEffect)(()=>{H&&R&&(He!==null&&google.maps.event.removeListener(He),Ue(google.maps.event.addListener(H,`visible_changed`,R)))},[R]),(0,_.useEffect)(()=>{H&&te&&(We!==null&&google.maps.event.removeListener(We),Ge(google.maps.event.addListener(H,`zindex_changed`,te)))},[te]),(0,_.useEffect)(()=>{var e=Ne(Ne(Ne({},n||Ie),r?Ie:{map:V}),{},{position:t}),a=new google.maps.Marker(e);return r?r.addMarker(a,!!i):a.setMap(V),t&&a.setPosition(t),s!==void 0&&a.setVisible(s),o!==void 0&&a.setDraggable(o),l!==void 0&&a.setClickable(l),typeof u==`string`&&a.setCursor(u),d&&a.setIcon(d),f!==void 0&&a.setLabel(f),p!==void 0&&a.setOpacity(p),m&&a.setShape(m),typeof h==`string`&&a.setTitle(h),typeof g==`number`&&a.setZIndex(g),y&&ie(google.maps.event.addListener(a,`dblclick`,y)),S&&oe(google.maps.event.addListener(a,`dragend`,S)),C&&ce(google.maps.event.addListener(a,`dragstart`,C)),D&&ue(google.maps.event.addListener(a,`mousedown`,D)),w&&fe(google.maps.event.addListener(a,`mouseout`,w)),T&&me(google.maps.event.addListener(a,`mouseover`,T)),E&&ge(google.maps.event.addListener(a,`mouseup`,E)),O&&ve(google.maps.event.addListener(a,`rightclick`,O)),v&&be(google.maps.event.addListener(a,`click`,v)),x&&Se(google.maps.event.addListener(a,`drag`,x)),k&&we(google.maps.event.addListener(a,`clickable_changed`,k)),A&&Ee(google.maps.event.addListener(a,`cursor_changed`,A)),M&&Oe(google.maps.event.addListener(a,`animation_changed`,M)),N&&Ae(google.maps.event.addListener(a,`draggable_changed`,N)),P&&Me(google.maps.event.addListener(a,`flat_changed`,P)),ee&&Fe(google.maps.event.addListener(a,`icon_changed`,ee)),F&&Re(google.maps.event.addListener(a,`position_changed`,F)),I&&U(google.maps.event.addListener(a,`shape_changed`,I)),L&&Ve(google.maps.event.addListener(a,`title_changed`,L)),R&&Ue(google.maps.event.addListener(a,`visible_changed`,R)),te&&Ge(google.maps.event.addListener(a,`zindex_changed`,te)),ne(a),z&&z(a),()=>{re!==null&&google.maps.event.removeListener(re),ae!==null&&google.maps.event.removeListener(ae),se!==null&&google.maps.event.removeListener(se),le!==null&&google.maps.event.removeListener(le),de!==null&&google.maps.event.removeListener(de),pe!==null&&google.maps.event.removeListener(pe),he!==null&&google.maps.event.removeListener(he),_e!==null&&google.maps.event.removeListener(_e),ye!==null&&google.maps.event.removeListener(ye),Ce!==null&&google.maps.event.removeListener(Ce),Te!==null&&google.maps.event.removeListener(Te),De!==null&&google.maps.event.removeListener(De),ke!==null&&google.maps.event.removeListener(ke),je!==null&&google.maps.event.removeListener(je),Pe!==null&&google.maps.event.removeListener(Pe),Le!==null&&google.maps.event.removeListener(Le),Be!==null&&google.maps.event.removeListener(Be),He!==null&&google.maps.event.removeListener(He),We!==null&&google.maps.event.removeListener(We),B&&B(a),r?r.removeMarker(a,!!i):a&&a.setMap(null)}},[]);var Ke=(0,_.useMemo)(()=>a?_.Children.map(a,e=>(0,_.isValidElement)(e)?(0,_.cloneElement)(e,{anchor:H}):e):null,[a,H]);return(0,b.jsx)(b.Fragment,{children:Ke})||null}(0,_.memo)(Le);var Re=class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[])}componentDidMount(){var e=this;return ne(function*(){var t=Ne(Ne(Ne({},e.props.options||Ie),e.props.clusterer?Ie:{map:e.context}),{},{position:e.props.position});e.marker=new google.maps.Marker(t),e.props.clusterer?e.props.clusterer.addMarker(e.marker,!!e.props.noClustererRedraw):e.marker.setMap(e.context),e.registeredEvents=R({updaterMap:Fe,eventMap:Pe,prevProps:{},nextProps:e.props,instance:e.marker}),e.props.onLoad&&e.props.onLoad(e.marker)})()}componentDidUpdate(e){this.marker&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Fe,eventMap:Pe,prevProps:e,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),L(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){return(this.props.children?_.Children.map(this.props.children,e=>(0,_.isValidElement)(e)?(0,_.cloneElement)(e,{anchor:this.marker}):e):null)||null}};T(Re,`contextType`,j);var ze=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url=``,this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor=`black`,this.textSize=11,this.textDecoration=`none`,this.fontWeight=`bold`,this.fontStyle=`normal`,this.fontFamily=`Arial,sans-serif`,this.backgroundPosition=`0 0`,this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(t.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return e.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},e.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},e.prototype.onClick=function(e){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var t=this.cluster.getClusterer();if(google.maps.event.trigger(t,`click`,this.cluster),google.maps.event.trigger(t,`clusterclick`,this.cluster),t.getZoomOnClick()){var n=t.getMaxZoom(),r=this.cluster.getBounds(),i=t.getMap();i!==null&&`fitBounds`in i&&i.fitBounds(r),this.timeOut=window.setTimeout(function(){var e=t.getMap();if(e!==null){`fitBounds`in e&&e.fitBounds(r);var i=e.getZoom()||0;n!==null&&i>n&&e.setZoom(n+1)}},100)}e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}},e.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),`mouseover`,this.cluster)},e.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),`mouseout`,this.cluster)},e.prototype.onAdd=function(){var e;this.div=document.createElement(`div`),this.div.className=this.className,this.visible&&this.show(),(e=this.getPanes())==null||e.overlayMouseTarget.appendChild(this.div);var t=this.getMap();t!==null&&(this.boundsChangedListener=google.maps.event.addListener(t,`bounds_changed`,this.onBoundsChanged),this.div.addEventListener(`mousedown`,this.onMouseDown),this.div.addEventListener(`click`,this.onClick),this.div.addEventListener(`mouseover`,this.onMouseOver),this.div.addEventListener(`mouseout`,this.onMouseOut))},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener(`mousedown`,this.onMouseDown),this.div.removeEventListener(`click`,this.onClick),this.div.removeEventListener(`mouseover`,this.onMouseOver),this.div.removeEventListener(`mouseout`,this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},e.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var e=this.getPosFromLatLng(this.center);this.div.style.top=e===null?`0`:`${e.y}px`,this.div.style.left=e===null?`0`:`${e.x}px`}},e.prototype.hide=function(){this.div&&(this.div.style.display=`none`),this.visible=!1},e.prototype.show=function(){if(this.div&&this.center){var e=this.sums===null||this.sums.title===void 0||this.sums.title===``?this.cluster.getClusterer().getTitle():this.sums.title,t=this.backgroundPosition.split(` `),n=parseInt(t[0]?.replace(/^\s+|\s+$/g,``)||`0`,10),r=parseInt(t[1]?.replace(/^\s+|\s+$/g,``)||`0`,10),i=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute(`style`,`cursor: pointer; position: absolute; top: ${i===null?`0`:`${i.y}px`}; left: ${i===null?`0`:`${i.x}px`}; width: ${this.width}px; height: ${this.height}px; `);var a=document.createElement(`img`);a.alt=e,a.src=this.url,a.width=this.width,a.height=this.height,a.setAttribute(`style`,`position: absolute; top: ${r}px; left: ${n}px`),this.cluster.getClusterer().enableRetinaIcons||(a.style.clip=`rect(-${r}px, -${n+this.width}px, -${r+this.height}, -${n})`);var o=document.createElement(`div`);o.setAttribute(`style`,`position: absolute; top: ${this.anchorText[0]}px; left: ${this.anchorText[1]}px; color: ${this.textColor}; font-size: ${this.textSize}px; font-family: ${this.fontFamily}; font-weight: ${this.fontWeight}; fontStyle: ${this.fontStyle}; text-decoration: ${this.textDecoration}; text-align: center; width: ${this.width}px; line-height: ${this.height}px`),this.sums?.text&&(o.innerText=`${this.sums?.text}`),this.sums?.html&&(o.innerHTML=`${this.sums?.html}`),this.div.innerHTML=``,this.div.appendChild(a),this.div.appendChild(o),this.div.title=e,this.div.style.display=``}this.visible=!0},e.prototype.useStyle=function(e){this.sums=e;var t=this.cluster.getClusterer().getStyles(),n=t[Math.min(t.length-1,Math.max(0,e.index-1))];n&&(this.url=n.url,this.height=n.height,this.width=n.width,n.className&&(this.className=`${this.clusterClassName} ${n.className}`),this.anchorText=n.anchorText||[0,0],this.anchorIcon=n.anchorIcon||[this.height/2,this.width/2],this.textColor=n.textColor||`black`,this.textSize=n.textSize||11,this.textDecoration=n.textDecoration||`none`,this.fontWeight=n.fontWeight||`bold`,this.fontStyle=n.fontStyle||`normal`,this.fontFamily=n.fontFamily||`Arial,sans-serif`,this.backgroundPosition=n.backgroundPosition||`0 0`)},e.prototype.setCenter=function(e){this.center=e},e.prototype.getPosFromLatLng=function(e){var t=this.getProjection().fromLatLngToDivPixel(e);return t!==null&&(t.x-=this.anchorIcon[1],t.y-=this.anchorIcon[0]),t},e}(),U=function(){function e(e){this.markerClusterer=e,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new ze(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return e.prototype.getSize=function(){return this.markers.length},e.prototype.getMarkers=function(){return this.markers},e.prototype.getCenter=function(){return this.center},e.prototype.getMap=function(){return this.map},e.prototype.getClusterer=function(){return this.markerClusterer},e.prototype.getBounds=function(){for(var e=new google.maps.LatLngBounds(this.center,this.center),t=this.getMarkers(),n=0,r=t;n<r.length;n++){var i=r[n].getPosition();i&&e.extend(i)}return e},e.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},e.prototype.addMarker=function(e){if(this.isMarkerAlreadyAdded(e))return!1;if(!this.center){var t=e.getPosition();t&&(this.center=t,this.calculateBounds())}else if(this.averageCenter){var t=e.getPosition();if(t){var n=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(n-1)+t.lat())/n,(this.center.lng()*(n-1)+t.lng())/n),this.calculateBounds()}}e.isAdded=!0,this.markers.push(e);var r=this.markers.length,i=this.markerClusterer.getMaxZoom(),a=this.map?.getZoom();if(i!==null&&a!==void 0&&a>i)e.getMap()!==this.map&&e.setMap(this.map);else if(r<this.minClusterSize)e.getMap()!==this.map&&e.setMap(this.map);else if(r===this.minClusterSize)for(var o=0,s=this.markers;o<s.length;o++)s[o].setMap(null);else e.setMap(null);return!0},e.prototype.isMarkerInClusterBounds=function(e){if(this.bounds!==null){var t=e.getPosition();if(t)return this.bounds.contains(t)}return!1},e.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},e.prototype.updateIcon=function(){var e=this.markers.length,t=this.markerClusterer.getMaxZoom(),n=this.map?.getZoom();if(t!==null&&n!==void 0&&n>t){this.clusterIcon.hide();return}if(e<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},e.prototype.isMarkerAlreadyAdded=function(e){if(this.markers.includes)return this.markers.includes(e);for(var t=0;t<this.markers.length;t++)if(e===this.markers[t])return!0;return!1},e}();function Be(e,t){var n=e.length,r=n.toString().length,i=Math.min(r,t);return{text:n.toString(),index:i,title:``}}var Ve=2e3,He=500,Ue=`https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m`,We=`png`,Ge=[53,56,66,78,90],Ke=`cluster`,qe=function(){function e(t,n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend=this.extend.bind(this),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=r.gridSize||60,this.minClusterSize=r.minimumClusterSize||2,this.maxZoom=r.maxZoom||null,this.styles=r.styles||[],this.title=r.title||``,this.zoomOnClick=!0,r.zoomOnClick!==void 0&&(this.zoomOnClick=r.zoomOnClick),this.averageCenter=!1,r.averageCenter!==void 0&&(this.averageCenter=r.averageCenter),this.ignoreHidden=!1,r.ignoreHidden!==void 0&&(this.ignoreHidden=r.ignoreHidden),this.enableRetinaIcons=!1,r.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=r.enableRetinaIcons),this.imagePath=r.imagePath||Ue,this.imageExtension=r.imageExtension||We,this.imageSizes=r.imageSizes||Ge,this.calculator=r.calculator||Be,this.batchSize=r.batchSize||Ve,this.batchSizeIE=r.batchSizeIE||He,this.clusterClass=r.clusterClass||Ke,navigator.userAgent.toLowerCase().indexOf(`msie`)!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}return e.prototype.onZoomChanged=function(){this.resetViewport(!1),(this.getMap()?.getZoom()===(this.get(`minZoom`)||0)||this.getMap()?.getZoom()===this.get(`maxZoom`))&&google.maps.event.trigger(this,`idle`)},e.prototype.onIdle=function(){this.redraw()},e.prototype.onAdd=function(){var e=this.getMap();this.activeMap=e,this.ready=!0,this.repaint(),e!==null&&(this.listeners=[google.maps.event.addListener(e,`zoom_changed`,this.onZoomChanged),google.maps.event.addListener(e,`idle`,this.onIdle)])},e.prototype.onRemove=function(){for(var e=0,t=this.markers;e<t.length;e++){var n=t[e];n.getMap()!==this.activeMap&&n.setMap(this.activeMap)}for(var r=0,i=this.clusters;r<i.length;r++)i[r].remove();this.clusters=[];for(var a=0,o=this.listeners;a<o.length;a++){var s=o[a];google.maps.event.removeListener(s)}this.listeners=[],this.activeMap=null,this.ready=!1},e.prototype.draw=function(){},e.prototype.getMap=function(){return null},e.prototype.getPanes=function(){return null},e.prototype.getProjection=function(){return{fromContainerPixelToLatLng:function(){return null},fromDivPixelToLatLng:function(){return null},fromLatLngToContainerPixel:function(){return null},fromLatLngToDivPixel:function(){return null},getVisibleRegion:function(){return null},getWorldWidth:function(){return 0}}},e.prototype.setMap=function(){},e.prototype.addListener=function(){return{remove:function(){}}},e.prototype.bindTo=function(){},e.prototype.get=function(){},e.prototype.notify=function(){},e.prototype.set=function(){},e.prototype.setValues=function(){},e.prototype.unbind=function(){},e.prototype.unbindAll=function(){},e.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var e=0;e<this.imageSizes.length;e++)this.styles.push({url:`${this.imagePath+(e+1)}.${this.imageExtension}`,height:this.imageSizes[e]||0,width:this.imageSizes[e]||0})},e.prototype.fitMapToMarkers=function(){for(var e=this.getMarkers(),t=new google.maps.LatLngBounds,n=0,r=e;n<r.length;n++){var i=r[n].getPosition();i&&t.extend(i)}var a=this.getMap();a!==null&&`fitBounds`in a&&a.fitBounds(t)},e.prototype.getGridSize=function(){return this.gridSize},e.prototype.setGridSize=function(e){this.gridSize=e},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize},e.prototype.setMinimumClusterSize=function(e){this.minClusterSize=e},e.prototype.getMaxZoom=function(){return this.maxZoom},e.prototype.setMaxZoom=function(e){this.maxZoom=e},e.prototype.getStyles=function(){return this.styles},e.prototype.setStyles=function(e){this.styles=e},e.prototype.getTitle=function(){return this.title},e.prototype.setTitle=function(e){this.title=e},e.prototype.getZoomOnClick=function(){return this.zoomOnClick},e.prototype.setZoomOnClick=function(e){this.zoomOnClick=e},e.prototype.getAverageCenter=function(){return this.averageCenter},e.prototype.setAverageCenter=function(e){this.averageCenter=e},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden},e.prototype.setIgnoreHidden=function(e){this.ignoreHidden=e},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},e.prototype.setEnableRetinaIcons=function(e){this.enableRetinaIcons=e},e.prototype.getImageExtension=function(){return this.imageExtension},e.prototype.setImageExtension=function(e){this.imageExtension=e},e.prototype.getImagePath=function(){return this.imagePath},e.prototype.setImagePath=function(e){this.imagePath=e},e.prototype.getImageSizes=function(){return this.imageSizes},e.prototype.setImageSizes=function(e){this.imageSizes=e},e.prototype.getCalculator=function(){return this.calculator},e.prototype.setCalculator=function(e){this.calculator=e},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE},e.prototype.setBatchSizeIE=function(e){this.batchSizeIE=e},e.prototype.getClusterClass=function(){return this.clusterClass},e.prototype.setClusterClass=function(e){this.clusterClass=e},e.prototype.getMarkers=function(){return this.markers},e.prototype.getTotalMarkers=function(){return this.markers.length},e.prototype.getClusters=function(){return this.clusters},e.prototype.getTotalClusters=function(){return this.clusters.length},e.prototype.addMarker=function(e,t){this.pushMarkerTo(e),t||this.redraw()},e.prototype.addMarkers=function(e,t){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n];r&&this.pushMarkerTo(r)}t||this.redraw()},e.prototype.pushMarkerTo=function(e){var t=this;e.getDraggable()&&google.maps.event.addListener(e,`dragend`,function(){t.ready&&(e.isAdded=!1,t.repaint())}),e.isAdded=!1,this.markers.push(e)},e.prototype.removeMarker_=function(e){var t=-1;if(this.markers.indexOf)t=this.markers.indexOf(e);else for(var n=0;n<this.markers.length;n++)if(e===this.markers[n]){t=n;break}return t!==-1&&(e.setMap(null),this.markers.splice(t,1),!0)},e.prototype.removeMarker=function(e,t){var n=this.removeMarker_(e);return!t&&n&&this.repaint(),n},e.prototype.removeMarkers=function(e,t){for(var n=!1,r=0,i=e;r<i.length;r++){var a=i[r];n||=this.removeMarker_(a)}return!t&&n&&this.repaint(),n},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},e.prototype.repaint=function(){var e=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var t=0,n=e;t<n.length;t++)n[t].remove()},0)},e.prototype.getExtendedBounds=function(e){var t=this.getProjection(),n=t.fromLatLngToDivPixel(new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()));n!==null&&(n.x+=this.gridSize,n.y-=this.gridSize);var r=t.fromLatLngToDivPixel(new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()));if(r!==null&&(r.x-=this.gridSize,r.y+=this.gridSize),n!==null){var i=t.fromDivPixelToLatLng(n);i!==null&&e.extend(i)}if(r!==null){var a=t.fromDivPixelToLatLng(r);a!==null&&e.extend(a)}return e},e.prototype.redraw=function(){this.createClusters(0)},e.prototype.resetViewport=function(e){for(var t=0,n=this.clusters;t<n.length;t++)n[t].remove();this.clusters=[];for(var r=0,i=this.markers;r<i.length;r++){var a=i[r];a.isAdded=!1,e&&a.setMap(null)}},e.prototype.distanceBetweenPoints=function(e,t){var n=6371,r=(t.lat()-e.lat())*Math.PI/180,i=(t.lng()-e.lng())*Math.PI/180,a=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return n*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))},e.prototype.isMarkerInBounds=function(e,t){var n=e.getPosition();return n?t.contains(n):!1},e.prototype.addToClosestCluster=function(e){for(var t,n=4e4,r=null,i=0,a=this.clusters;i<a.length;i++){t=a[i];var o=t.getCenter(),s=e.getPosition();if(o&&s){var c=this.distanceBetweenPoints(o,s);c<n&&(n=c,r=t)}}r&&r.isMarkerInClusterBounds(e)?r.addMarker(e):(t=new U(this),t.addMarker(e),this.clusters.push(t))},e.prototype.createClusters=function(e){var t=this;if(this.ready){e===0&&(google.maps.event.trigger(this,`clusteringbegin`,this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var n=this.getMap(),r=n!==null&&(`getBounds`in n)?n.getBounds():null,i=(n?.getZoom()||0)>3?new google.maps.LatLngBounds(r?.getSouthWest(),r?.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),a=this.getExtendedBounds(i),o=Math.min(e+this.batchSize,this.markers.length),s=e;s<o;s++){var c=this.markers[s];c&&!c.isAdded&&this.isMarkerInBounds(c,a)&&(!this.ignoreHidden||this.ignoreHidden&&c.getVisible())&&this.addToClosestCluster(c)}if(o<this.markers.length)this.timerRefStatic=window.setTimeout(function(){t.createClusters(o)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,`clusteringend`,this);for(var l=0,u=this.clusters;l<u.length;l++)u[l].updateIcon()}}},e.prototype.extend=function(e,t){return function(e){for(var t in e.prototype){var n=t;this.prototype[n]=e.prototype[n]}return this}.apply(e,[t])},e}();function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Je(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Xe={onClick:`click`,onClusteringBegin:`clusteringbegin`,onClusteringEnd:`clusteringend`,onMouseOut:`mouseout`,onMouseOver:`mouseover`},Ze={averageCenter(e,t){e.setAverageCenter(t)},batchSizeIE(e,t){e.setBatchSizeIE(t)},calculator(e,t){e.setCalculator(t)},clusterClass(e,t){e.setClusterClass(t)},enableRetinaIcons(e,t){e.setEnableRetinaIcons(t)},gridSize(e,t){e.setGridSize(t)},ignoreHidden(e,t){e.setIgnoreHidden(t)},imageExtension(e,t){e.setImageExtension(t)},imagePath(e,t){e.setImagePath(t)},imageSizes(e,t){e.setImageSizes(t)},maxZoom(e,t){e.setMaxZoom(t)},minimumClusterSize(e,t){e.setMinimumClusterSize(t)},styles(e,t){e.setStyles(t)},title(e,t){e.setTitle(t)},zoomOnClick(e,t){e.setZoomOnClick(t)}},Qe={};function $e(e){var{children:t,options:n,averageCenter:r,batchSizeIE:i,calculator:a,clusterClass:o,enableRetinaIcons:s,gridSize:c,ignoreHidden:l,imageExtension:u,imagePath:d,imageSizes:f,maxZoom:p,minimumClusterSize:m,styles:h,title:g,zoomOnClick:v,onClick:y,onClusteringBegin:b,onClusteringEnd:x,onMouseOver:S,onMouseOut:C,onLoad:w,onUnmount:T}=e,[E,D]=(0,_.useState)(null),O=(0,_.useContext)(j),[k,A]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),[P,ee]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(null);return(0,_.useEffect)(()=>{E&&C&&(F!==null&&google.maps.event.removeListener(F),I(google.maps.event.addListener(E,Xe.onMouseOut,C)))},[C]),(0,_.useEffect)(()=>{E&&S&&(L!==null&&google.maps.event.removeListener(L),R(google.maps.event.addListener(E,Xe.onMouseOver,S)))},[S]),(0,_.useEffect)(()=>{E&&y&&(k!==null&&google.maps.event.removeListener(k),A(google.maps.event.addListener(E,Xe.onClick,y)))},[y]),(0,_.useEffect)(()=>{E&&b&&(M!==null&&google.maps.event.removeListener(M),N(google.maps.event.addListener(E,Xe.onClusteringBegin,b)))},[b]),(0,_.useEffect)(()=>{E&&x&&(P!==null&&google.maps.event.removeListener(P),N(google.maps.event.addListener(E,Xe.onClusteringEnd,x)))},[x]),(0,_.useEffect)(()=>{r!==void 0&&E!==null&&Ze.averageCenter(E,r)},[E,r]),(0,_.useEffect)(()=>{i!==void 0&&E!==null&&Ze.batchSizeIE(E,i)},[E,i]),(0,_.useEffect)(()=>{a!==void 0&&E!==null&&Ze.calculator(E,a)},[E,a]),(0,_.useEffect)(()=>{o!==void 0&&E!==null&&Ze.clusterClass(E,o)},[E,o]),(0,_.useEffect)(()=>{s!==void 0&&E!==null&&Ze.enableRetinaIcons(E,s)},[E,s]),(0,_.useEffect)(()=>{c!==void 0&&E!==null&&Ze.gridSize(E,c)},[E,c]),(0,_.useEffect)(()=>{l!==void 0&&E!==null&&Ze.ignoreHidden(E,l)},[E,l]),(0,_.useEffect)(()=>{u!==void 0&&E!==null&&Ze.imageExtension(E,u)},[E,u]),(0,_.useEffect)(()=>{d!==void 0&&E!==null&&Ze.imagePath(E,d)},[E,d]),(0,_.useEffect)(()=>{f!==void 0&&E!==null&&Ze.imageSizes(E,f)},[E,f]),(0,_.useEffect)(()=>{p!==void 0&&E!==null&&Ze.maxZoom(E,p)},[E,p]),(0,_.useEffect)(()=>{m!==void 0&&E!==null&&Ze.minimumClusterSize(E,m)},[E,m]),(0,_.useEffect)(()=>{h!==void 0&&E!==null&&Ze.styles(E,h)},[E,h]),(0,_.useEffect)(()=>{g!==void 0&&E!==null&&Ze.title(E,g)},[E,g]),(0,_.useEffect)(()=>{v!==void 0&&E!==null&&Ze.zoomOnClick(E,v)},[E,v]),(0,_.useEffect)(()=>{if(O){var e=new qe(O,[],Ye({},n||Qe));return r&&Ze.averageCenter(e,r),i&&Ze.batchSizeIE(e,i),a&&Ze.calculator(e,a),o&&Ze.clusterClass(e,o),s&&Ze.enableRetinaIcons(e,s),c&&Ze.gridSize(e,c),l&&Ze.ignoreHidden(e,l),u&&Ze.imageExtension(e,u),d&&Ze.imagePath(e,d),f&&Ze.imageSizes(e,f),p&&Ze.maxZoom(e,p),m&&Ze.minimumClusterSize(e,m),h&&Ze.styles(e,h),g&&Ze.title(e,g),v&&Ze.zoomOnClick(e,v),C&&I(google.maps.event.addListener(e,Xe.onMouseOut,C)),S&&R(google.maps.event.addListener(e,Xe.onMouseOver,S)),y&&A(google.maps.event.addListener(e,Xe.onClick,y)),b&&N(google.maps.event.addListener(e,Xe.onClusteringBegin,b)),x&&ee(google.maps.event.addListener(e,Xe.onClusteringEnd,x)),D(e),w&&w(e),()=>{F!==null&&google.maps.event.removeListener(F),L!==null&&google.maps.event.removeListener(L),k!==null&&google.maps.event.removeListener(k),M!==null&&google.maps.event.removeListener(M),P!==null&&google.maps.event.removeListener(P),T&&T(e)}}},[]),E===null?null:t(E)||null}(0,_.memo)($e),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{markerClusterer:null}),T(this,`setClustererCallback`,()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)})}componentDidMount(){if(this.context){var e=new qe(this.context,[],this.props.options);this.registeredEvents=R({updaterMap:Ze,eventMap:Xe,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({markerClusterer:e}),this.setClustererCallback)}}componentDidUpdate(e){this.state.markerClusterer&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Ze,eventMap:Xe,prevProps:e,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),L(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer===null?null:this.props.children(this.state.markerClusterer)}},`contextType`,j);function et(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}var tt=function(){function e(t){t===void 0&&(t={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(e,google.maps.OverlayView),this.content=t.content||``,this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||`infoBox`,this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||`2px`,this.closeBoxURL=t.closeBoxURL||`http://www.google.com/intl/en_us/mapfiles/close.gif`,t.closeBoxURL===``&&(this.closeBoxURL=``),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),t.visible===void 0&&(t.isHidden===void 0?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||`floatPane`,this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return e.prototype.createInfoBoxDiv=function(){var e=this,t=function(t){t.returnValue=!1,t.preventDefault&&t.preventDefault(),e.enableEventPropagation||et(t)};if(!this.div){this.div=document.createElement(`div`),this.setBoxStyle(),typeof this.content==`string`?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var n=this.getPanes();if(n!==null&&n[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+`px`,this.fixedWidthSet=!0;else{var r=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-r.left-r.right+`px`,this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var i=[`mousedown`,`mouseover`,`mouseout`,`mouseup`,`click`,`dblclick`,`touchstart`,`touchend`,`touchmove`],a=0,o=i;a<o.length;a++){var s=o[a];this.eventListeners.push(google.maps.event.addListener(this.div,s,et))}this.eventListeners.push(google.maps.event.addListener(this.div,`mouseover`,function(){e.div&&(e.div.style.cursor=`default`)}))}this.contextListener=google.maps.event.addListener(this.div,`contextmenu`,t),google.maps.event.trigger(this,`domready`)}},e.prototype.getCloseBoxImg=function(){var e=``;return this.closeBoxURL!==``&&(e=`<img alt=""`,e+=` aria-hidden="true"`,e+=` src='`+this.closeBoxURL+`'`,e+=` align=right`,e+=` style='`,e+=` position: relative;`,e+=` cursor: pointer;`,e+=` margin: `+this.closeBoxMargin+`;`,e+=`'>`),e},e.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==``?google.maps.event.addListener(this.div.firstChild,`click`,this.getCloseClickHandler()):null},e.prototype.closeClickHandler=function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),google.maps.event.trigger(this,`closeclick`),this.close()},e.prototype.getCloseClickHandler=function(){return this.closeClickHandler},e.prototype.panBox=function(e){if(this.div&&!e){var t=this.getMap();if(t instanceof google.maps.Map){var n=0,r=0,i=t.getBounds();i&&!i.contains(this.position)&&t.setCenter(this.position);var a=t.getDiv(),o=a.offsetWidth,s=a.offsetHeight,c=this.pixelOffset.width,l=this.pixelOffset.height,u=this.div.offsetWidth,d=this.div.offsetHeight,f=this.infoBoxClearance.width,p=this.infoBoxClearance.height,m=this.getProjection().fromLatLngToContainerPixel(this.position);m!==null&&(m.x<-c+f?n=m.x+c-f:m.x+u+c+f>o&&(n=m.x+u+c+f-o),this.alignBottom?m.y<-l+p+d?r=m.y+l-p-d:m.y+l+p>s&&(r=m.y+l+p-s):m.y<-l+p?r=m.y+l-p:m.y+d+l+p>s&&(r=m.y+d+l+p-s)),(n!==0||r!==0)&&t.panBy(n,r)}}},e.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText=``;var e=this.boxStyle;for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.div.style[t]=e[t]);if(this.div.style.webkitTransform=`translateZ(0)`,this.div.style.opacity!==void 0&&this.div.style.opacity!==``){var n=parseFloat(this.div.style.opacity||``);this.div.style.msFilter=`"progid:DXImageTransform.Microsoft.Alpha(Opacity=`+n*100+`)"`,this.div.style.filter=`alpha(opacity=`+n*100+`)`}this.div.style.position=`absolute`,this.div.style.visibility=`hidden`,this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+``),this.div.style.overflow||(this.div.style.overflow=`auto`)}},e.prototype.getBoxWidths=function(){var e={top:0,bottom:0,left:0,right:0};if(!this.div)return e;if(document.defaultView){var t=this.div.ownerDocument,n=t&&t.defaultView?t.defaultView.getComputedStyle(this.div,``):null;n&&(e.top=parseInt(n.borderTopWidth||``,10)||0,e.bottom=parseInt(n.borderBottomWidth||``,10)||0,e.left=parseInt(n.borderLeftWidth||``,10)||0,e.right=parseInt(n.borderRightWidth||``,10)||0)}else if(document.documentElement.currentStyle){var r=this.div.currentStyle;r&&(e.top=parseInt(r.borderTopWidth||``,10)||0,e.bottom=parseInt(r.borderBottomWidth||``,10)||0,e.left=parseInt(r.borderLeftWidth||``,10)||0,e.right=parseInt(r.borderRightWidth||``,10)||0)}return e},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},e.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var e=this.getProjection().fromLatLngToDivPixel(this.position);e!==null&&(this.div.style.left=e.x+this.pixelOffset.width+`px`,this.alignBottom?this.div.style.bottom=-(e.y+this.pixelOffset.height)+`px`:this.div.style.top=e.y+this.pixelOffset.height+`px`),this.isHidden?this.div.style.visibility=`hidden`:this.div.style.visibility=`visible`}},e.prototype.setOptions=function(e){e===void 0&&(e={}),e.boxClass!==void 0&&(this.boxClass=e.boxClass,this.setBoxStyle()),e.boxStyle!==void 0&&(this.boxStyle=e.boxStyle,this.setBoxStyle()),e.content!==void 0&&this.setContent(e.content),e.disableAutoPan!==void 0&&(this.disableAutoPan=e.disableAutoPan),e.maxWidth!==void 0&&(this.maxWidth=e.maxWidth),e.pixelOffset!==void 0&&(this.pixelOffset=e.pixelOffset),e.alignBottom!==void 0&&(this.alignBottom=e.alignBottom),e.position!==void 0&&this.setPosition(e.position),e.zIndex!==void 0&&this.setZIndex(e.zIndex),e.closeBoxMargin!==void 0&&(this.closeBoxMargin=e.closeBoxMargin),e.closeBoxURL!==void 0&&(this.closeBoxURL=e.closeBoxURL),e.infoBoxClearance!==void 0&&(this.infoBoxClearance=e.infoBoxClearance),e.isHidden!==void 0&&(this.isHidden=e.isHidden),e.visible!==void 0&&(this.isHidden=!e.visible),e.enableEventPropagation!==void 0&&(this.enableEventPropagation=e.enableEventPropagation),this.div&&this.draw()},e.prototype.setContent=function(e){this.content=e,this.div&&(this.closeListener&&=(google.maps.event.removeListener(this.closeListener),null),this.fixedWidthSet||(this.div.style.width=``),typeof e==`string`?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+`px`,typeof e==`string`?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e))),this.addClickHandler()),google.maps.event.trigger(this,`content_changed`)},e.prototype.setPosition=function(e){this.position=e,this.div&&this.draw(),google.maps.event.trigger(this,`position_changed`)},e.prototype.setVisible=function(e){this.isHidden=!e,this.div&&(this.div.style.visibility=this.isHidden?`hidden`:`visible`)},e.prototype.setZIndex=function(e){this.zIndex=e,this.div&&(this.div.style.zIndex=e+``),google.maps.event.trigger(this,`zindex_changed`)},e.prototype.getContent=function(){return this.content},e.prototype.getPosition=function(){return this.position},e.prototype.getZIndex=function(){return this.zIndex},e.prototype.getVisible=function(){return this.getMap()!=null&&!this.isHidden},e.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility=`visible`)},e.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility=`hidden`)},e.prototype.open=function(e,t){var n=this;t&&(this.position=t.getPosition(),this.moveListener=google.maps.event.addListener(t,`position_changed`,function(){var e=t.getPosition();n.setPosition(e)}),this.mapListener=google.maps.event.addListener(t,`map_changed`,function(){n.setMap(t.map)})),this.setMap(e),this.div&&this.panBox()},e.prototype.close=function(){if(this.closeListener&&=(google.maps.event.removeListener(this.closeListener),null),this.eventListeners){for(var e=0,t=this.eventListeners;e<t.length;e++){var n=t[e];google.maps.event.removeListener(n)}this.eventListeners=null}this.moveListener&&=(google.maps.event.removeListener(this.moveListener),null),this.mapListener&&=(google.maps.event.removeListener(this.mapListener),null),this.contextListener&&=(google.maps.event.removeListener(this.contextListener),null),this.setMap(null)},e.prototype.extend=function(e,t){return function(e){for(var t in e.prototype)Object.prototype.hasOwnProperty.call(this,t)||(this.prototype[t]=e.prototype[t]);return this}.apply(e,[t])},e}(),W=[`position`],nt=[`position`];function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rt(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var at={onCloseClick:`closeclick`,onContentChanged:`content_changed`,onDomReady:`domready`,onPositionChanged:`position_changed`,onZindexChanged:`zindex_changed`},ot={options(e,t){e.setOptions(t)},position(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},st={};function ct(e){var{children:t,anchor:n,options:r,position:i,zIndex:a,onCloseClick:o,onDomReady:s,onContentChanged:c,onPositionChanged:l,onZindexChanged:u,onLoad:d,onUnmount:f}=e,p=(0,_.useContext)(j),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),O=(0,_.useRef)(null);return(0,_.useEffect)(()=>{p&&m!==null&&(m.close(),n?m.open(p,n):m.getPosition()&&m.open(p))},[p,m,n]),(0,_.useEffect)(()=>{r&&m!==null&&m.setOptions(r)},[m,r]),(0,_.useEffect)(()=>{if(i&&m!==null){var e=i instanceof google.maps.LatLng?i:new google.maps.LatLng(i.lat,i.lng);m.setPosition(e)}},[i]),(0,_.useEffect)(()=>{typeof a==`number`&&m!==null&&m.setZIndex(a)},[a]),(0,_.useEffect)(()=>{m&&o&&(g!==null&&google.maps.event.removeListener(g),v(google.maps.event.addListener(m,`closeclick`,o)))},[o]),(0,_.useEffect)(()=>{m&&s&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(m,`domready`,s)))},[s]),(0,_.useEffect)(()=>{m&&c&&(S!==null&&google.maps.event.removeListener(S),C(google.maps.event.addListener(m,`content_changed`,c)))},[c]),(0,_.useEffect)(()=>{m&&l&&(w!==null&&google.maps.event.removeListener(w),T(google.maps.event.addListener(m,`position_changed`,l)))},[l]),(0,_.useEffect)(()=>{m&&u&&(E!==null&&google.maps.event.removeListener(E),D(google.maps.event.addListener(m,`zindex_changed`,u)))},[u]),(0,_.useEffect)(()=>{if(p){var e=r||st,{position:t}=e,i=pe(e,W),a;t&&!(t instanceof google.maps.LatLng)&&(a=new google.maps.LatLng(t.lat,t.lng));var _=new tt(it(it({},i),a?{position:a}:{}));O.current=document.createElement(`div`),h(_),o&&v(google.maps.event.addListener(_,`closeclick`,o)),s&&b(google.maps.event.addListener(_,`domready`,s)),c&&C(google.maps.event.addListener(_,`content_changed`,c)),l&&T(google.maps.event.addListener(_,`position_changed`,l)),u&&D(google.maps.event.addListener(_,`zindex_changed`,u)),_.setContent(O.current),n?_.open(p,n):_.getPosition()?_.open(p):A(!1,`You must provide either an anchor or a position prop for <InfoBox>.`),d&&d(_)}return()=>{m!==null&&(g&&google.maps.event.removeListener(g),S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),w&&google.maps.event.removeListener(w),E&&google.maps.event.removeListener(E),f&&f(m),m.close())}},[]),O.current?(0,x.createPortal)(_.Children.only(t),O.current):null}(0,_.memo)(ct),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`containerElement`,null),T(this,`state`,{infoBox:null}),T(this,`open`,(e,t)=>{t?this.context!==null&&e.open(this.context,t):e.getPosition()?this.context!==null&&e.open(this.context):A(!1,`You must provide either an anchor or a position prop for <InfoBox>.`)}),T(this,`setInfoBoxCallback`,()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))})}componentDidMount(){var e=this.props.options||{},{position:t}=e,n=pe(e,nt),r;t&&!(t instanceof google.maps.LatLng)&&(r=new google.maps.LatLng(t.lat,t.lng));var i=new tt(it(it({},n),r?{position:r}:{}));this.containerElement=document.createElement(`div`),this.registeredEvents=R({updaterMap:ot,eventMap:at,prevProps:{},nextProps:this.props,instance:i}),this.setState({infoBox:i},this.setInfoBoxCallback)}componentDidUpdate(e){var{infoBox:t}=this.state;t!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:ot,eventMap:at,prevProps:e,nextProps:this.props,instance:t}))}componentWillUnmount(){var{onUnmount:e}=this.props,{infoBox:t}=this.state;t!==null&&(e&&e(t),L(this.registeredEvents),t.close())}render(){return this.containerElement?(0,x.createPortal)(_.Children.only(this.props.children),this.containerElement):null}},`contextType`,j);var lt,ut;function dt(){return ut?lt:(ut=1,lt=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t==`object`&&typeof n==`object`){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n},lt)}var ft=E(dt()),pt=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],mt=1,ht=8,gt=class e{static from(t){if(!(t instanceof ArrayBuffer))throw Error(`Data must be an instance of ArrayBuffer.`);var[n,r]=new Uint8Array(t,0,2);if(n!==219)throw Error(`Data does not appear to be in a KDBush format.`);var i=r>>4;if(i!==mt)throw Error(`Got v${i} data when expected v${mt}.`);var a=pt[r&15];if(!a)throw Error(`Unrecognized array type.`);var[o]=new Uint16Array(t,2,1),[s]=new Uint32Array(t,4,1);return new e(s,o,a,t)}constructor(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:64,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Float64Array,r=arguments.length>3?arguments[3]:void 0;if(isNaN(e)||e<0)throw Error(`Unpexpected numItems value: ${e}.`);this.numItems=+e,this.nodeSize=Math.min(Math.max(+t,2),65535),this.ArrayType=n,this.IndexArrayType=e<65536?Uint16Array:Uint32Array;var i=pt.indexOf(this.ArrayType),a=e*2*this.ArrayType.BYTES_PER_ELEMENT,o=e*this.IndexArrayType.BYTES_PER_ELEMENT,s=(8-o%8)%8;if(i<0)throw Error(`Unexpected typed array class: ${n}.`);r&&r instanceof ArrayBuffer?(this.data=r,this.ids=new this.IndexArrayType(this.data,ht,e),this.coords=new this.ArrayType(this.data,ht+o+s,e*2),this._pos=e*2,this._finished=!0):(this.data=new ArrayBuffer(ht+a+o+s),this.ids=new this.IndexArrayType(this.data,ht,e),this.coords=new this.ArrayType(this.data,ht+o+s,e*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(mt<<4)+i]),new Uint16Array(this.data,2,1)[0]=t,new Uint32Array(this.data,4,1)[0]=e)}add(e,t){var n=this._pos>>1;return this.ids[n]=n,this.coords[this._pos++]=e,this.coords[this._pos++]=t,n}finish(){var e=this._pos>>1;if(e!==this.numItems)throw Error(`Added ${e} items when expected ${this.numItems}.`);return _t(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(e,t,n,r){if(!this._finished)throw Error(`Data not yet indexed - call index.finish().`);for(var{ids:i,coords:a,nodeSize:o}=this,s=[0,i.length-1,0],c=[];s.length;){var l=s.pop()||0,u=s.pop()||0,d=s.pop()||0;if(u-d<=o){for(var f=d;f<=u;f++){var p=a[2*f],m=a[2*f+1];p>=e&&p<=n&&m>=t&&m<=r&&c.push(i[f])}continue}var h=d+u>>1,g=a[2*h],_=a[2*h+1];g>=e&&g<=n&&_>=t&&_<=r&&c.push(i[h]),(l===0?e<=g:t<=_)&&(s.push(d),s.push(h-1),s.push(1-l)),(l===0?n>=g:r>=_)&&(s.push(h+1),s.push(u),s.push(1-l))}return c}within(e,t,n){if(!this._finished)throw Error(`Data not yet indexed - call index.finish().`);for(var{ids:r,coords:i,nodeSize:a}=this,o=[0,r.length-1,0],s=[],c=n*n;o.length;){var l=o.pop()||0,u=o.pop()||0,d=o.pop()||0;if(u-d<=a){for(var f=d;f<=u;f++)xt(i[2*f],i[2*f+1],e,t)<=c&&s.push(r[f]);continue}var p=d+u>>1,m=i[2*p],h=i[2*p+1];xt(m,h,e,t)<=c&&s.push(r[p]),(l===0?e-n<=m:t-n<=h)&&(o.push(d),o.push(p-1),o.push(1-l)),(l===0?e+n>=m:t+n>=h)&&(o.push(p+1),o.push(u),o.push(1-l))}return s}};function _t(e,t,n,r,i,a){if(!(i-r<=n)){var o=r+i>>1;vt(e,t,o,r,i,a),_t(e,t,n,r,o-1,1-a),_t(e,t,n,o+1,i,1-a)}}function vt(e,t,n,r,i,a){for(;i>r;){if(i-r>600){var o=i-r+1,s=n-r+1,c=Math.log(o),l=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*l*(o-l)/o)*(s-o/2<0?-1:1);vt(e,t,n,Math.max(r,Math.floor(n-s*l/o+u)),Math.min(i,Math.floor(n+(o-s)*l/o+u)),a)}var d=t[2*n+a],f=r,p=i;for(yt(e,t,r,n),t[2*i+a]>d&&yt(e,t,r,i);f<p;){for(yt(e,t,f,p),f++,p--;t[2*f+a]<d;)f++;for(;t[2*p+a]>d;)p--}t[2*r+a]===d?yt(e,t,r,p):(p++,yt(e,t,p,i)),p<=n&&(r=p+1),n<=p&&(i=p-1)}}function yt(e,t,n,r){bt(e,n,r),bt(t,2*n,2*r),bt(t,2*n+1,2*r+1)}function bt(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function xt(e,t,n,r){var i=e-n,a=t-r;return i*i+a*a}var St={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},Ct=Math.fround||(e=>t=>(e[0]=+t,e[0]))(new Float32Array(1)),wt=2,Tt=3,Et=4,Dt=5,Ot=6,kt=class{constructor(e){this.options=Object.assign(Object.create(St),e),this.trees=Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(e){var{log:t,minZoom:n,maxZoom:r}=this.options;t&&console.time(`total time`);var i=`prepare ${e.length} points`;t&&console.time(i),this.points=e;for(var a=[],o=0;o<e.length;o++){var s=e[o];if(s.geometry){var[c,l]=s.geometry.coordinates,u=Ct(Mt(c)),d=Ct(Nt(l));a.push(u,d,1/0,o,-1,1),this.options.reduce&&a.push(0)}}var f=this.trees[r+1]=this._createTree(a);t&&console.timeEnd(i);for(var p=r;p>=n;p--){var m=+Date.now();f=this.trees[p]=this._createTree(this._cluster(f,p)),t&&console.log(`z%d: %d clusters in %dms`,p,f.numItems,+Date.now()-m)}return t&&console.timeEnd(`total time`),this}getClusters(e,t){var n=((e[0]+180)%360+360)%360-180,r=Math.max(-90,Math.min(90,e[1])),i=e[2]===180?180:((e[2]+180)%360+360)%360-180,a=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)n=-180,i=180;else if(n>i){var o=this.getClusters([n,r,180,a],t),s=this.getClusters([-180,r,i,a],t);return o.concat(s)}var c=this.trees[this._limitZoom(t)],l=c.range(Mt(n),Nt(a),Mt(i),Nt(r)),u=c.data,d=[];for(var f of l){var p=this.stride*f;d.push(u[p+Dt]>1?At(u,p,this.clusterProps):this.points[u[p+Tt]])}return d}getChildren(e){var t=this._getOriginId(e),n=this._getOriginZoom(e),r=`No cluster with the specified id.`,i=this.trees[n];if(!i)throw Error(r);var a=i.data;if(t*this.stride>=a.length)throw Error(r);var o=this.options.radius/(this.options.extent*2**(n-1)),s=a[t*this.stride],c=a[t*this.stride+1],l=i.within(s,c,o),u=[];for(var d of l){var f=d*this.stride;a[f+Et]===e&&u.push(a[f+Dt]>1?At(a,f,this.clusterProps):this.points[a[f+Tt]])}if(u.length===0)throw Error(r);return u}getLeaves(e,t,n){t||=10,n||=0;var r=[];return this._appendLeaves(r,e,t,n,0),r}getTile(e,t,n){var r=this.trees[this._limitZoom(e)],i=2**e,{extent:a,radius:o}=this.options,s=o/a,c=(n-s)/i,l=(n+1+s)/i,u={features:[]};return this._addTileFeatures(r.range((t-s)/i,c,(t+1+s)/i,l),r.data,t,n,i,u),t===0&&this._addTileFeatures(r.range(1-s/i,c,1,l),r.data,i,n,i,u),t===i-1&&this._addTileFeatures(r.range(0,c,s/i,l),r.data,-1,n,i,u),u.features.length?u:null}getClusterExpansionZoom(e){for(var t=this._getOriginZoom(e)-1;t<=this.options.maxZoom;){var n=this.getChildren(e);if(t++,n.length!==1)break;e=n[0].properties.cluster_id}return t}_appendLeaves(e,t,n,r,i){for(var a of this.getChildren(t)){var o=a.properties;if(o&&o.cluster?i+o.point_count<=r?i+=o.point_count:i=this._appendLeaves(e,o.cluster_id,n,r,i):i<r?i++:e.push(a),e.length===n)break}return i}_createTree(e){for(var t=new gt(e.length/this.stride|0,this.options.nodeSize,Float32Array),n=0;n<e.length;n+=this.stride)t.add(e[n],e[n+1]);return t.finish(),t.data=e,t}_addTileFeatures(e,t,n,r,i,a){for(var o of e){var s=o*this.stride,c=t[s+Dt]>1,l=void 0,u=void 0,d=void 0;if(c)l=jt(t,s,this.clusterProps),u=t[s],d=t[s+1];else{var f=this.points[t[s+Tt]];l=f.properties;var[p,m]=f.geometry.coordinates;u=Mt(p),d=Nt(m)}var h={type:1,geometry:[[Math.round(this.options.extent*(u*i-n)),Math.round(this.options.extent*(d*i-r))]],tags:l},g=void 0;g=c||this.options.generateId?t[s+Tt]:this.points[t[s+Tt]].id,g!==void 0&&(h.id=g),a.features.push(h)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){for(var{radius:n,extent:r,reduce:i,minPoints:a}=this.options,o=n/(r*2**t),s=e.data,c=[],l=this.stride,u=0;u<s.length;u+=l)if(!(s[u+wt]<=t)){s[u+wt]=t;var d=s[u],f=s[u+1],p=e.within(s[u],s[u+1],o),m=s[u+Dt],h=m;for(var g of p){var _=g*l;s[_+wt]>t&&(h+=s[_+Dt])}if(h>m&&h>=a){var v=d*m,y=f*m,b=void 0,x=-1,S=((u/l|0)<<5)+(t+1)+this.points.length;for(var C of p){var w=C*l;if(!(s[w+wt]<=t)){s[w+wt]=t;var T=s[w+Dt];v+=s[w]*T,y+=s[w+1]*T,s[w+Et]=S,i&&(b||(b=this._map(s,u,!0),x=this.clusterProps.length,this.clusterProps.push(b)),i(b,this._map(s,w)))}}s[u+Et]=S,c.push(v/h,y/h,1/0,S,-1,h),i&&c.push(x)}else{for(var E=0;E<l;E++)c.push(s[u+E]);if(h>1)for(var D of p){var O=D*l;if(!(s[O+wt]<=t)){s[O+wt]=t;for(var k=0;k<l;k++)c.push(s[O+k])}}}}return c}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t,n){if(e[t+Dt]>1){var r=this.clusterProps[e[t+Ot]];return n?Object.assign({},r):r}var i=this.points[e[t+Tt]].properties,a=this.options.map(i);return n&&a===i?Object.assign({},a):a}};function At(e,t,n){return{type:`Feature`,id:e[t+Tt],properties:jt(e,t,n),geometry:{type:`Point`,coordinates:[Pt(e[t]),Ft(e[t+1])]}}}function jt(e,t,n){var r=e[t+Dt],i=r>=1e4?`${Math.round(r/1e3)}k`:r>=1e3?`${Math.round(r/100)/10}k`:r,a=e[t+Ot],o=a===-1?{}:Object.assign({},n[a]);return Object.assign(o,{cluster:!0,cluster_id:e[t+Tt],point_count:r,point_count_abbreviated:i})}function Mt(e){return e/360+.5}function Nt(e){var t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function Pt(e){return(e-.5)*360}function Ft(e){var t=(180-e*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function It(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var Lt=class{static isAdvancedMarkerAvailable(e){return google.maps.marker&&e.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(e){return google.maps.marker&&e instanceof google.maps.marker.AdvancedMarkerElement}static setMap(e,t){this.isAdvancedMarker(e)?e.map=t:e.setMap(t)}static getPosition(e){if(this.isAdvancedMarker(e)){if(e.position){if(e.position instanceof google.maps.LatLng)return e.position;if(e.position.lat&&e.position.lng)return new google.maps.LatLng(e.position.lat,e.position.lng)}return new google.maps.LatLng(null)}return e.getPosition()}static getVisible(e){return this.isAdvancedMarker(e)?!0:e.getVisible()}},Rt=class{constructor(e){var{markers:t,position:n}=e;this.markers=t,n&&(this._position=n instanceof google.maps.LatLng?n:new google.maps.LatLng(n))}get bounds(){if(!(this.markers.length===0&&!this._position)){var e=new google.maps.LatLngBounds(this._position,this._position);for(var t of this.markers)e.extend(Lt.getPosition(t));return e}}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>Lt.getVisible(e)).length}push(e){this.markers.push(e)}delete(){this.marker&&=(Lt.setMap(this.marker,null),void 0),this.markers.length=0}},zt=class{constructor(e){var{maxZoom:t=16}=e;this.maxZoom=t}noop(e){var{markers:t}=e;return Bt(t)}},Bt=e=>e.map(e=>new Rt({position:Lt.getPosition(e),markers:[e]})),Vt=class extends zt{constructor(e){var{maxZoom:t,radius:n=60}=e,r=It(e,[`maxZoom`,`radius`]);super({maxZoom:t}),this.state={zoom:-1},this.superCluster=new kt(Object.assign({maxZoom:this.maxZoom,radius:n},r))}calculate(e){var t=!1,n={zoom:e.map.getZoom()};if(!ft(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var r=this.markers.map(e=>{var t=Lt.getPosition(e);return{type:`Feature`,geometry:{type:`Point`,coordinates:[t.lng(),t.lat()]},properties:{marker:e}}});this.superCluster.load(r)}return t||(this.state.zoom<=this.maxZoom||n.zoom<=this.maxZoom)&&(t=!ft(this.state,n)),this.state=n,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster(e){var{map:t}=e;return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(e=>this.transformCluster(e))}transformCluster(e){var{geometry:{coordinates:[t,n]},properties:r}=e;if(r.cluster)return new Rt({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(e=>e.properties.marker),position:{lat:n,lng:t}});var i=r.marker;return new Rt({markers:[i],position:Lt.getPosition(i)})}},Ht=class{constructor(e,t){this.markers={sum:e.length};var n=t.map(e=>e.count),r=n.reduce((e,t)=>e+t,0);this.clusters={count:t.length,markers:{mean:r/t.length,sum:r,min:Math.min(...n),max:Math.max(...n)}}}},Ut=class{render(e,t,n){var{count:r,position:i}=e,a=`<svg fill="${r>Math.max(10,t.clusters.markers.mean)?`#ff0000`:`#0000ff`}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${r}</text>
</svg>`,o=`Cluster of ${r} markers`,s=Number(google.maps.Marker.MAX_ZINDEX)+r;if(Lt.isAdvancedMarkerAvailable(n)){var c=new DOMParser().parseFromString(a,`image/svg+xml`).documentElement;c.setAttribute(`transform`,`translate(0 25)`);var l={map:n,position:i,zIndex:s,title:o,content:c};return new google.maps.marker.AdvancedMarkerElement(l)}var u={position:i,zIndex:s,title:o,icon:{url:`data:image/svg+xml;base64,${btoa(a)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(u)}};function Wt(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}var Gt=class e{constructor(){Wt(e,google.maps.OverlayView)}},Kt;(function(e){e.CLUSTERING_BEGIN=`clusteringbegin`,e.CLUSTERING_END=`clusteringend`,e.CLUSTER_CLICK=`click`})(Kt||={});var qt=(e,t,n)=>{n.fitBounds(t.bounds)},Jt=class extends Gt{constructor(e){var{map:t,markers:n=[],algorithmOptions:r={},algorithm:i=new Vt(r),renderer:a=new Ut,onClusterClick:o=qt}=e;super(),this.markers=[...n],this.clusters=[],this.algorithm=i,this.renderer=a,this.onClusterClick=o,t&&this.setMap(t)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(e=>{this.addMarker(e,!0)}),t||this.render()}removeMarker(e,t){var n=this.markers.indexOf(e);return n!==-1&&(Lt.setMap(e,null),this.markers.splice(n,1),t||this.render(),!0)}removeMarkers(e,t){var n=!1;return e.forEach(e=>{n=this.removeMarker(e,!0)||n}),n&&!t&&this.render(),n}clearMarkers(e){this.markers.length=0,e||this.render()}render(){var e=this.getMap();if(e instanceof google.maps.Map&&e.getProjection()){google.maps.event.trigger(this,Kt.CLUSTERING_BEGIN,this);var{clusters:t,changed:n}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});if(n||n==null){var r=new Set;for(var i of t)i.markers.length==1&&r.add(i.markers[0]);var a=[];for(var o of this.clusters)o.marker!=null&&(o.markers.length==1?r.has(o.marker)||Lt.setMap(o.marker,null):a.push(o.marker));this.clusters=t,this.renderClusters(),requestAnimationFrame(()=>a.forEach(e=>Lt.setMap(e,null)))}google.maps.event.trigger(this,Kt.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener(`idle`,this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>Lt.setMap(e,null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){var e=new Ht(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(n=>{n.markers.length===1?n.marker=n.markers[0]:(n.marker=this.renderer.render(n,e,t),n.markers.forEach(e=>Lt.setMap(e,null)),this.onClusterClick&&n.marker.addListener(`click`,e=>{google.maps.event.trigger(this,Kt.CLUSTER_CLICK,n),this.onClusterClick(e,n,t)})),Lt.setMap(n.marker,t)})}};function Yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Yt(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Zt(e){var t=M(),[n,r]=(0,_.useState)(null);return(0,_.useEffect)(()=>{t&&n===null&&r(new Jt(Xt(Xt({},e),{},{map:t})))},[t]),n}function Qt(e){var{children:t,options:n}=e,r=Zt(n);return r===null?null:t(r)}(0,_.memo)(Qt);var $t={onCloseClick:`closeclick`,onContentChanged:`content_changed`,onDomReady:`domready`,onPositionChanged:`position_changed`,onZindexChanged:`zindex_changed`},en={options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},zIndex(e,t){e.setZIndex(t)}};function tn(e){var{children:t,anchor:n,options:r,position:i,zIndex:a,onCloseClick:o,onDomReady:s,onContentChanged:c,onPositionChanged:l,onZindexChanged:u,onLoad:d,onUnmount:f}=e,p=(0,_.useContext)(j),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),O=(0,_.useRef)(null);return(0,_.useEffect)(()=>{m!==null&&(m.close(),n?m.open(p,n):m.getPosition()&&m.open(p))},[p,m,n]),(0,_.useEffect)(()=>{r&&m!==null&&m.setOptions(r)},[m,r]),(0,_.useEffect)(()=>{i&&m!==null&&m.setPosition(i)},[i]),(0,_.useEffect)(()=>{typeof a==`number`&&m!==null&&m.setZIndex(a)},[a]),(0,_.useEffect)(()=>{m&&o&&(g!==null&&google.maps.event.removeListener(g),v(google.maps.event.addListener(m,`closeclick`,o)))},[o]),(0,_.useEffect)(()=>{m&&s&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(m,`domready`,s)))},[s]),(0,_.useEffect)(()=>{m&&c&&(S!==null&&google.maps.event.removeListener(S),C(google.maps.event.addListener(m,`content_changed`,c)))},[c]),(0,_.useEffect)(()=>{m&&l&&(w!==null&&google.maps.event.removeListener(w),T(google.maps.event.addListener(m,`position_changed`,l)))},[l]),(0,_.useEffect)(()=>{m&&u&&(E!==null&&google.maps.event.removeListener(E),D(google.maps.event.addListener(m,`zindex_changed`,u)))},[u]),(0,_.useEffect)(()=>{var e=new google.maps.InfoWindow(r);return h(e),O.current=document.createElement(`div`),o&&v(google.maps.event.addListener(e,`closeclick`,o)),s&&b(google.maps.event.addListener(e,`domready`,s)),c&&C(google.maps.event.addListener(e,`content_changed`,c)),l&&T(google.maps.event.addListener(e,`position_changed`,l)),u&&D(google.maps.event.addListener(e,`zindex_changed`,u)),e.setContent(O.current),i&&e.setPosition(i),a&&e.setZIndex(a),n?e.open(p,n):e.getPosition()?e.open(p):A(!1,`You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`),d&&d(e),()=>{g&&google.maps.event.removeListener(g),S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),w&&google.maps.event.removeListener(w),E&&google.maps.event.removeListener(E),f&&f(e),e.close()}},[]),O.current?(0,x.createPortal)(_.Children.only(t),O.current):null}(0,_.memo)(tn),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`containerElement`,null),T(this,`state`,{infoWindow:null}),T(this,`open`,(e,t)=>{t?e.open(this.context,t):e.getPosition()?e.open(this.context):A(!1,`You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`)}),T(this,`setInfoWindowCallback`,()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))})}componentDidMount(){var e=new google.maps.InfoWindow(this.props.options);this.containerElement=document.createElement(`div`),this.registeredEvents=R({updaterMap:en,eventMap:$t,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({infoWindow:e}),this.setInfoWindowCallback)}componentDidUpdate(e){this.state.infoWindow!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:en,eventMap:$t,prevProps:e,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(L(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?(0,x.createPortal)(_.Children.only(this.props.children),this.containerElement):null}},`contextType`,j);function nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var an={onClick:`click`,onDblClick:`dblclick`,onDrag:`drag`,onDragEnd:`dragend`,onDragStart:`dragstart`,onMouseDown:`mousedown`,onMouseMove:`mousemove`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onRightClick:`rightclick`},on={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},visible(e,t){e.setVisible(t)}},sn={};function cn(e){var{options:t,draggable:n,editable:r,visible:i,path:a,onDblClick:o,onDragEnd:s,onDragStart:c,onMouseDown:l,onMouseMove:u,onMouseOut:d,onMouseOver:f,onMouseUp:p,onRightClick:m,onClick:h,onDrag:g,onLoad:v,onUnmount:y}=e,b=(0,_.useContext)(j),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null),[D,O]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),[P,ee]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(null),[te,z]=(0,_.useState)(null),[B,V]=(0,_.useState)(null),[H,ne]=(0,_.useState)(null);return(0,_.useEffect)(()=>{x!==null&&x.setMap(b)},[b]),(0,_.useEffect)(()=>{t!==void 0&&x!==null&&x.setOptions(t)},[x,t]),(0,_.useEffect)(()=>{n!==void 0&&x!==null&&x.setDraggable(n)},[x,n]),(0,_.useEffect)(()=>{r!==void 0&&x!==null&&x.setEditable(r)},[x,r]),(0,_.useEffect)(()=>{i!==void 0&&x!==null&&x.setVisible(i)},[x,i]),(0,_.useEffect)(()=>{a!==void 0&&x!==null&&x.setPath(a)},[x,a]),(0,_.useEffect)(()=>{x&&o&&(C!==null&&google.maps.event.removeListener(C),w(google.maps.event.addListener(x,`dblclick`,o)))},[o]),(0,_.useEffect)(()=>{x&&s&&(T!==null&&google.maps.event.removeListener(T),E(google.maps.event.addListener(x,`dragend`,s)))},[s]),(0,_.useEffect)(()=>{x&&c&&(D!==null&&google.maps.event.removeListener(D),O(google.maps.event.addListener(x,`dragstart`,c)))},[c]),(0,_.useEffect)(()=>{x&&l&&(k!==null&&google.maps.event.removeListener(k),A(google.maps.event.addListener(x,`mousedown`,l)))},[l]),(0,_.useEffect)(()=>{x&&u&&(M!==null&&google.maps.event.removeListener(M),N(google.maps.event.addListener(x,`mousemove`,u)))},[u]),(0,_.useEffect)(()=>{x&&d&&(P!==null&&google.maps.event.removeListener(P),ee(google.maps.event.addListener(x,`mouseout`,d)))},[d]),(0,_.useEffect)(()=>{x&&f&&(F!==null&&google.maps.event.removeListener(F),I(google.maps.event.addListener(x,`mouseover`,f)))},[f]),(0,_.useEffect)(()=>{x&&p&&(L!==null&&google.maps.event.removeListener(L),R(google.maps.event.addListener(x,`mouseup`,p)))},[p]),(0,_.useEffect)(()=>{x&&m&&(te!==null&&google.maps.event.removeListener(te),z(google.maps.event.addListener(x,`rightclick`,m)))},[m]),(0,_.useEffect)(()=>{x&&h&&(B!==null&&google.maps.event.removeListener(B),V(google.maps.event.addListener(x,`click`,h)))},[h]),(0,_.useEffect)(()=>{x&&g&&(H!==null&&google.maps.event.removeListener(H),ne(google.maps.event.addListener(x,`drag`,g)))},[g]),(0,_.useEffect)(()=>{var e=new google.maps.Polyline(rn(rn({},t||sn),{},{map:b}));return a&&e.setPath(a),i!==void 0&&e.setVisible(i),r!==void 0&&e.setEditable(r),n!==void 0&&e.setDraggable(n),o&&w(google.maps.event.addListener(e,`dblclick`,o)),s&&E(google.maps.event.addListener(e,`dragend`,s)),c&&O(google.maps.event.addListener(e,`dragstart`,c)),l&&A(google.maps.event.addListener(e,`mousedown`,l)),u&&N(google.maps.event.addListener(e,`mousemove`,u)),d&&ee(google.maps.event.addListener(e,`mouseout`,d)),f&&I(google.maps.event.addListener(e,`mouseover`,f)),p&&R(google.maps.event.addListener(e,`mouseup`,p)),m&&z(google.maps.event.addListener(e,`rightclick`,m)),h&&V(google.maps.event.addListener(e,`click`,h)),g&&ne(google.maps.event.addListener(e,`drag`,g)),S(e),v&&v(e),()=>{C!==null&&google.maps.event.removeListener(C),T!==null&&google.maps.event.removeListener(T),D!==null&&google.maps.event.removeListener(D),k!==null&&google.maps.event.removeListener(k),M!==null&&google.maps.event.removeListener(M),P!==null&&google.maps.event.removeListener(P),F!==null&&google.maps.event.removeListener(F),L!==null&&google.maps.event.removeListener(L),te!==null&&google.maps.event.removeListener(te),B!==null&&google.maps.event.removeListener(B),y&&y(e),e.setMap(null)}},[]),null}(0,_.memo)(cn),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{polyline:null}),T(this,`setPolylineCallback`,()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)})}componentDidMount(){var e=new google.maps.Polyline(rn(rn({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:on,eventMap:an,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{polyline:e}},this.setPolylineCallback)}componentDidUpdate(e){this.state.polyline!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:on,eventMap:an,prevProps:e,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),L(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}},`contextType`,j);function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ln(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var dn={onClick:`click`,onDblClick:`dblclick`,onDrag:`drag`,onDragEnd:`dragend`,onDragStart:`dragstart`,onMouseDown:`mousedown`,onMouseMove:`mousemove`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onRightClick:`rightclick`},fn={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},paths(e,t){e.setPaths(t)},visible(e,t){e.setVisible(t)}};function pn(e){var{options:t,draggable:n,editable:r,visible:i,path:a,paths:o,onDblClick:s,onDragEnd:c,onDragStart:l,onMouseDown:u,onMouseMove:d,onMouseOut:f,onMouseOver:p,onMouseUp:m,onRightClick:h,onClick:g,onDrag:v,onLoad:y,onUnmount:b,onEdit:x}=e,S=(0,_.useContext)(j),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null),[D,O]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),[P,ee]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(null),[te,z]=(0,_.useState)(null),[B,V]=(0,_.useState)(null),[H,ne]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null);return(0,_.useEffect)(()=>{C!==null&&C.setMap(S)},[S]),(0,_.useEffect)(()=>{t!==void 0&&C!==null&&C.setOptions(t)},[C,t]),(0,_.useEffect)(()=>{n!==void 0&&C!==null&&C.setDraggable(n)},[C,n]),(0,_.useEffect)(()=>{r!==void 0&&C!==null&&C.setEditable(r)},[C,r]),(0,_.useEffect)(()=>{i!==void 0&&C!==null&&C.setVisible(i)},[C,i]),(0,_.useEffect)(()=>{a!==void 0&&C!==null&&C.setPath(a)},[C,a]),(0,_.useEffect)(()=>{o!==void 0&&C!==null&&C.setPaths(o)},[C,o]),(0,_.useEffect)(()=>{C&&typeof s==`function`&&(T!==null&&google.maps.event.removeListener(T),E(google.maps.event.addListener(C,`dblclick`,s)))},[s]),(0,_.useEffect)(()=>{C&&(google.maps.event.addListener(C.getPath(),`insert_at`,()=>{x?.(C)}),google.maps.event.addListener(C.getPath(),`set_at`,()=>{x?.(C)}),google.maps.event.addListener(C.getPath(),`remove_at`,()=>{x?.(C)}))},[C,x]),(0,_.useEffect)(()=>{C&&typeof c==`function`&&(D!==null&&google.maps.event.removeListener(D),O(google.maps.event.addListener(C,`dragend`,c)))},[c]),(0,_.useEffect)(()=>{C&&typeof l==`function`&&(k!==null&&google.maps.event.removeListener(k),A(google.maps.event.addListener(C,`dragstart`,l)))},[l]),(0,_.useEffect)(()=>{C&&typeof u==`function`&&(M!==null&&google.maps.event.removeListener(M),N(google.maps.event.addListener(C,`mousedown`,u)))},[u]),(0,_.useEffect)(()=>{C&&typeof d==`function`&&(P!==null&&google.maps.event.removeListener(P),ee(google.maps.event.addListener(C,`mousemove`,d)))},[d]),(0,_.useEffect)(()=>{C&&typeof f==`function`&&(F!==null&&google.maps.event.removeListener(F),I(google.maps.event.addListener(C,`mouseout`,f)))},[f]),(0,_.useEffect)(()=>{C&&typeof p==`function`&&(L!==null&&google.maps.event.removeListener(L),R(google.maps.event.addListener(C,`mouseover`,p)))},[p]),(0,_.useEffect)(()=>{C&&typeof m==`function`&&(te!==null&&google.maps.event.removeListener(te),z(google.maps.event.addListener(C,`mouseup`,m)))},[m]),(0,_.useEffect)(()=>{C&&typeof h==`function`&&(B!==null&&google.maps.event.removeListener(B),V(google.maps.event.addListener(C,`rightclick`,h)))},[h]),(0,_.useEffect)(()=>{C&&typeof g==`function`&&(H!==null&&google.maps.event.removeListener(H),ne(google.maps.event.addListener(C,`click`,g)))},[g]),(0,_.useEffect)(()=>{C&&typeof v==`function`&&(re!==null&&google.maps.event.removeListener(re),ie(google.maps.event.addListener(C,`drag`,v)))},[v]),(0,_.useEffect)(()=>{var e=new google.maps.Polygon(un(un({},t),{},{map:S}));return a&&e.setPath(a),o&&e.setPaths(o),i!==void 0&&e.setVisible(i),r!==void 0&&e.setEditable(r),n!==void 0&&e.setDraggable(n),s&&E(google.maps.event.addListener(e,`dblclick`,s)),c&&O(google.maps.event.addListener(e,`dragend`,c)),l&&A(google.maps.event.addListener(e,`dragstart`,l)),u&&N(google.maps.event.addListener(e,`mousedown`,u)),d&&ee(google.maps.event.addListener(e,`mousemove`,d)),f&&I(google.maps.event.addListener(e,`mouseout`,f)),p&&R(google.maps.event.addListener(e,`mouseover`,p)),m&&z(google.maps.event.addListener(e,`mouseup`,m)),h&&V(google.maps.event.addListener(e,`rightclick`,h)),g&&ne(google.maps.event.addListener(e,`click`,g)),v&&ie(google.maps.event.addListener(e,`drag`,v)),w(e),y&&y(e),()=>{T!==null&&google.maps.event.removeListener(T),D!==null&&google.maps.event.removeListener(D),k!==null&&google.maps.event.removeListener(k),M!==null&&google.maps.event.removeListener(M),P!==null&&google.maps.event.removeListener(P),F!==null&&google.maps.event.removeListener(F),L!==null&&google.maps.event.removeListener(L),te!==null&&google.maps.event.removeListener(te),B!==null&&google.maps.event.removeListener(B),H!==null&&google.maps.event.removeListener(H),b&&b(e),e.setMap(null)}},[]),null}(0,_.memo)(pn),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[])}componentDidMount(){var e=this.props.options||{};this.polygon=new google.maps.Polygon(e),this.polygon.setMap(this.context),this.registeredEvents=R({updaterMap:fn,eventMap:dn,prevProps:{},nextProps:this.props,instance:this.polygon}),this.props.onLoad&&this.props.onLoad(this.polygon)}componentDidUpdate(e){this.polygon&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:fn,eventMap:dn,prevProps:e,nextProps:this.props,instance:this.polygon}))}componentWillUnmount(){this.polygon&&(this.props.onUnmount&&this.props.onUnmount(this.polygon),L(this.registeredEvents),this.polygon&&this.polygon.setMap(null))}render(){return null}},`contextType`,j);function mn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?mn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var gn={onBoundsChanged:`bounds_changed`,onClick:`click`,onDblClick:`dblclick`,onDrag:`drag`,onDragEnd:`dragend`,onDragStart:`dragstart`,onMouseDown:`mousedown`,onMouseMove:`mousemove`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onRightClick:`rightclick`},_n={bounds(e,t){e.setBounds(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},visible(e,t){e.setVisible(t)}};function vn(e){var{options:t,bounds:n,draggable:r,editable:i,visible:a,onDblClick:o,onDragEnd:s,onDragStart:c,onMouseDown:l,onMouseMove:u,onMouseOut:d,onMouseOver:f,onMouseUp:p,onRightClick:m,onClick:h,onDrag:g,onBoundsChanged:v,onLoad:y,onUnmount:b}=e,x=(0,_.useContext)(j),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(null),[A,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[ee,F]=(0,_.useState)(null),[I,L]=(0,_.useState)(null),[R,te]=(0,_.useState)(null),[z,B]=(0,_.useState)(null),[V,H]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(null);return(0,_.useEffect)(()=>{S!==null&&S.setMap(x)},[x]),(0,_.useEffect)(()=>{t!==void 0&&S!==null&&S.setOptions(t)},[S,t]),(0,_.useEffect)(()=>{r!==void 0&&S!==null&&S.setDraggable(r)},[S,r]),(0,_.useEffect)(()=>{i!==void 0&&S!==null&&S.setEditable(i)},[S,i]),(0,_.useEffect)(()=>{a!==void 0&&S!==null&&S.setVisible(a)},[S,a]),(0,_.useEffect)(()=>{n!==void 0&&S!==null&&S.setBounds(n)},[S,n]),(0,_.useEffect)(()=>{S&&o&&(w!==null&&google.maps.event.removeListener(w),T(google.maps.event.addListener(S,`dblclick`,o)))},[o]),(0,_.useEffect)(()=>{S&&s&&(E!==null&&google.maps.event.removeListener(E),D(google.maps.event.addListener(S,`dragend`,s)))},[s]),(0,_.useEffect)(()=>{S&&c&&(O!==null&&google.maps.event.removeListener(O),k(google.maps.event.addListener(S,`dragstart`,c)))},[c]),(0,_.useEffect)(()=>{S&&l&&(A!==null&&google.maps.event.removeListener(A),M(google.maps.event.addListener(S,`mousedown`,l)))},[l]),(0,_.useEffect)(()=>{S&&u&&(N!==null&&google.maps.event.removeListener(N),P(google.maps.event.addListener(S,`mousemove`,u)))},[u]),(0,_.useEffect)(()=>{S&&d&&(ee!==null&&google.maps.event.removeListener(ee),F(google.maps.event.addListener(S,`mouseout`,d)))},[d]),(0,_.useEffect)(()=>{S&&f&&(I!==null&&google.maps.event.removeListener(I),L(google.maps.event.addListener(S,`mouseover`,f)))},[f]),(0,_.useEffect)(()=>{S&&p&&(R!==null&&google.maps.event.removeListener(R),te(google.maps.event.addListener(S,`mouseup`,p)))},[p]),(0,_.useEffect)(()=>{S&&m&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(S,`rightclick`,m)))},[m]),(0,_.useEffect)(()=>{S&&h&&(V!==null&&google.maps.event.removeListener(V),H(google.maps.event.addListener(S,`click`,h)))},[h]),(0,_.useEffect)(()=>{S&&g&&(ne!==null&&google.maps.event.removeListener(ne),re(google.maps.event.addListener(S,`drag`,g)))},[g]),(0,_.useEffect)(()=>{S&&v&&(ie!==null&&google.maps.event.removeListener(ie),ae(google.maps.event.addListener(S,`bounds_changed`,v)))},[v]),(0,_.useEffect)(()=>{var e=new google.maps.Rectangle(hn(hn({},t),{},{map:x}));return a!==void 0&&e.setVisible(a),i!==void 0&&e.setEditable(i),r!==void 0&&e.setDraggable(r),n!==void 0&&e.setBounds(n),o&&T(google.maps.event.addListener(e,`dblclick`,o)),s&&D(google.maps.event.addListener(e,`dragend`,s)),c&&k(google.maps.event.addListener(e,`dragstart`,c)),l&&M(google.maps.event.addListener(e,`mousedown`,l)),u&&P(google.maps.event.addListener(e,`mousemove`,u)),d&&F(google.maps.event.addListener(e,`mouseout`,d)),f&&L(google.maps.event.addListener(e,`mouseover`,f)),p&&te(google.maps.event.addListener(e,`mouseup`,p)),m&&B(google.maps.event.addListener(e,`rightclick`,m)),h&&H(google.maps.event.addListener(e,`click`,h)),g&&re(google.maps.event.addListener(e,`drag`,g)),v&&ae(google.maps.event.addListener(e,`bounds_changed`,v)),C(e),y&&y(e),()=>{w!==null&&google.maps.event.removeListener(w),E!==null&&google.maps.event.removeListener(E),O!==null&&google.maps.event.removeListener(O),A!==null&&google.maps.event.removeListener(A),N!==null&&google.maps.event.removeListener(N),ee!==null&&google.maps.event.removeListener(ee),I!==null&&google.maps.event.removeListener(I),R!==null&&google.maps.event.removeListener(R),z!==null&&google.maps.event.removeListener(z),V!==null&&google.maps.event.removeListener(V),ne!==null&&google.maps.event.removeListener(ne),ie!==null&&google.maps.event.removeListener(ie),b&&b(e),e.setMap(null)}},[]),null}(0,_.memo)(vn),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{rectangle:null}),T(this,`setRectangleCallback`,()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)})}componentDidMount(){var e=new google.maps.Rectangle(hn(hn({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:_n,eventMap:gn,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{rectangle:e}},this.setRectangleCallback)}componentDidUpdate(e){this.state.rectangle!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:_n,eventMap:gn,prevProps:e,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),L(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}},`contextType`,j);function yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var xn={onCenterChanged:`center_changed`,onRadiusChanged:`radius_changed`,onClick:`click`,onDblClick:`dblclick`,onDrag:`drag`,onDragEnd:`dragend`,onDragStart:`dragstart`,onMouseDown:`mousedown`,onMouseMove:`mousemove`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onRightClick:`rightclick`},Sn={center(e,t){e.setCenter(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},radius(e,t){e.setRadius(t)},visible(e,t){e.setVisible(t)}},Cn={};function wn(e){var{options:t,center:n,radius:r,draggable:i,editable:a,visible:o,onDblClick:s,onDragEnd:c,onDragStart:l,onMouseDown:u,onMouseMove:d,onMouseOut:f,onMouseOver:p,onMouseUp:m,onRightClick:h,onClick:g,onDrag:v,onCenterChanged:y,onRadiusChanged:b,onLoad:x,onUnmount:S}=e,C=(0,_.useContext)(j),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(null),[A,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[ee,F]=(0,_.useState)(null),[I,L]=(0,_.useState)(null),[R,te]=(0,_.useState)(null),[z,B]=(0,_.useState)(null),[V,H]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(null),[oe,se]=(0,_.useState)(null),[ce,le]=(0,_.useState)(null);return(0,_.useEffect)(()=>{w!==null&&w.setMap(C)},[C]),(0,_.useEffect)(()=>{t!==void 0&&w!==null&&w.setOptions(t)},[w,t]),(0,_.useEffect)(()=>{i!==void 0&&w!==null&&w.setDraggable(i)},[w,i]),(0,_.useEffect)(()=>{a!==void 0&&w!==null&&w.setEditable(a)},[w,a]),(0,_.useEffect)(()=>{o!==void 0&&w!==null&&w.setVisible(o)},[w,o]),(0,_.useEffect)(()=>{typeof r==`number`&&w!==null&&w.setRadius(r)},[w,r]),(0,_.useEffect)(()=>{n!==void 0&&w!==null&&w.setCenter(n)},[w,n]),(0,_.useEffect)(()=>{w&&s&&(E!==null&&google.maps.event.removeListener(E),D(google.maps.event.addListener(w,`dblclick`,s)))},[s]),(0,_.useEffect)(()=>{w&&c&&(O!==null&&google.maps.event.removeListener(O),k(google.maps.event.addListener(w,`dragend`,c)))},[c]),(0,_.useEffect)(()=>{w&&l&&(A!==null&&google.maps.event.removeListener(A),M(google.maps.event.addListener(w,`dragstart`,l)))},[l]),(0,_.useEffect)(()=>{w&&u&&(N!==null&&google.maps.event.removeListener(N),P(google.maps.event.addListener(w,`mousedown`,u)))},[u]),(0,_.useEffect)(()=>{w&&d&&(ee!==null&&google.maps.event.removeListener(ee),F(google.maps.event.addListener(w,`mousemove`,d)))},[d]),(0,_.useEffect)(()=>{w&&f&&(I!==null&&google.maps.event.removeListener(I),L(google.maps.event.addListener(w,`mouseout`,f)))},[f]),(0,_.useEffect)(()=>{w&&p&&(R!==null&&google.maps.event.removeListener(R),te(google.maps.event.addListener(w,`mouseover`,p)))},[p]),(0,_.useEffect)(()=>{w&&m&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(w,`mouseup`,m)))},[m]),(0,_.useEffect)(()=>{w&&h&&(V!==null&&google.maps.event.removeListener(V),H(google.maps.event.addListener(w,`rightclick`,h)))},[h]),(0,_.useEffect)(()=>{w&&g&&(ne!==null&&google.maps.event.removeListener(ne),re(google.maps.event.addListener(w,`click`,g)))},[g]),(0,_.useEffect)(()=>{w&&v&&(ie!==null&&google.maps.event.removeListener(ie),ae(google.maps.event.addListener(w,`drag`,v)))},[v]),(0,_.useEffect)(()=>{w&&y&&(oe!==null&&google.maps.event.removeListener(oe),se(google.maps.event.addListener(w,`center_changed`,y)))},[g]),(0,_.useEffect)(()=>{w&&b&&(ce!==null&&google.maps.event.removeListener(ce),le(google.maps.event.addListener(w,`radius_changed`,b)))},[b]),(0,_.useEffect)(()=>{var e=new google.maps.Circle(bn(bn({},t||Cn),{},{map:C}));return typeof r==`number`&&e.setRadius(r),n!==void 0&&e.setCenter(n),typeof r==`number`&&e.setRadius(r),o!==void 0&&e.setVisible(o),a!==void 0&&e.setEditable(a),i!==void 0&&e.setDraggable(i),s&&D(google.maps.event.addListener(e,`dblclick`,s)),c&&k(google.maps.event.addListener(e,`dragend`,c)),l&&M(google.maps.event.addListener(e,`dragstart`,l)),u&&P(google.maps.event.addListener(e,`mousedown`,u)),d&&F(google.maps.event.addListener(e,`mousemove`,d)),f&&L(google.maps.event.addListener(e,`mouseout`,f)),p&&te(google.maps.event.addListener(e,`mouseover`,p)),m&&B(google.maps.event.addListener(e,`mouseup`,m)),h&&H(google.maps.event.addListener(e,`rightclick`,h)),g&&re(google.maps.event.addListener(e,`click`,g)),v&&ae(google.maps.event.addListener(e,`drag`,v)),y&&se(google.maps.event.addListener(e,`center_changed`,y)),b&&le(google.maps.event.addListener(e,`radius_changed`,b)),T(e),x&&x(e),()=>{E!==null&&google.maps.event.removeListener(E),O!==null&&google.maps.event.removeListener(O),A!==null&&google.maps.event.removeListener(A),N!==null&&google.maps.event.removeListener(N),ee!==null&&google.maps.event.removeListener(ee),I!==null&&google.maps.event.removeListener(I),R!==null&&google.maps.event.removeListener(R),z!==null&&google.maps.event.removeListener(z),V!==null&&google.maps.event.removeListener(V),ne!==null&&google.maps.event.removeListener(ne),oe!==null&&google.maps.event.removeListener(oe),ce!==null&&google.maps.event.removeListener(ce),S&&S(e),e.setMap(null)}},[]),null}(0,_.memo)(wn),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{circle:null}),T(this,`setCircleCallback`,()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)})}componentDidMount(){var e=new google.maps.Circle(bn(bn({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:Sn,eventMap:xn,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{circle:e}},this.setCircleCallback)}componentDidUpdate(e){this.state.circle!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Sn,eventMap:xn,prevProps:e,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){if(this.state.circle!==null){var e;this.props.onUnmount&&this.props.onUnmount(this.state.circle),L(this.registeredEvents),(e=this.state.circle)==null||e.setMap(null)}}render(){return null}},`contextType`,j);function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function En(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Tn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G={onClick:`click`,onDblClick:`dblclick`,onMouseDown:`mousedown`,onMouseOut:`mouseout`,onMouseOver:`mouseover`,onMouseUp:`mouseup`,onRightClick:`rightclick`,onAddFeature:`addfeature`,onRemoveFeature:`removefeature`,onRemoveProperty:`removeproperty`,onSetGeometry:`setgeometry`,onSetProperty:`setproperty`},Dn={add(e,t){e.add(t)},addgeojson(e,t,n){e.addGeoJson(t,n)},contains(e,t){e.contains(t)},foreach(e,t){e.forEach(t)},loadgeojson(e,t,n,r){e.loadGeoJson(t,n,r)},overridestyle(e,t,n){e.overrideStyle(t,n)},remove(e,t){e.remove(t)},revertstyle(e,t){e.revertStyle(t)},controlposition(e,t){e.setControlPosition(t)},controls(e,t){e.setControls(t)},drawingmode(e,t){e.setDrawingMode(t)},map(e,t){e.setMap(t)},style(e,t){e.setStyle(t)},togeojson(e,t){e.toGeoJson(t)}};function On(e){var{options:t,onClick:n,onDblClick:r,onMouseDown:i,onMouseMove:a,onMouseOut:o,onMouseOver:s,onMouseUp:c,onRightClick:l,onAddFeature:u,onRemoveFeature:d,onRemoveProperty:f,onSetGeometry:p,onSetProperty:m,onLoad:h,onUnmount:g}=e,v=(0,_.useContext)(j),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null),[D,O]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),[P,ee]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(null),[te,z]=(0,_.useState)(null),[B,V]=(0,_.useState)(null),[H,ne]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null);return(0,_.useEffect)(()=>{y!==null&&y.setMap(v)},[v]),(0,_.useEffect)(()=>{y&&r&&(x!==null&&google.maps.event.removeListener(x),S(google.maps.event.addListener(y,`dblclick`,r)))},[r]),(0,_.useEffect)(()=>{y&&i&&(C!==null&&google.maps.event.removeListener(C),w(google.maps.event.addListener(y,`mousedown`,i)))},[i]),(0,_.useEffect)(()=>{y&&a&&(T!==null&&google.maps.event.removeListener(T),E(google.maps.event.addListener(y,`mousemove`,a)))},[a]),(0,_.useEffect)(()=>{y&&o&&(D!==null&&google.maps.event.removeListener(D),O(google.maps.event.addListener(y,`mouseout`,o)))},[o]),(0,_.useEffect)(()=>{y&&s&&(k!==null&&google.maps.event.removeListener(k),A(google.maps.event.addListener(y,`mouseover`,s)))},[s]),(0,_.useEffect)(()=>{y&&c&&(M!==null&&google.maps.event.removeListener(M),N(google.maps.event.addListener(y,`mouseup`,c)))},[c]),(0,_.useEffect)(()=>{y&&l&&(P!==null&&google.maps.event.removeListener(P),ee(google.maps.event.addListener(y,`rightclick`,l)))},[l]),(0,_.useEffect)(()=>{y&&n&&(F!==null&&google.maps.event.removeListener(F),I(google.maps.event.addListener(y,`click`,n)))},[n]),(0,_.useEffect)(()=>{y&&u&&(L!==null&&google.maps.event.removeListener(L),R(google.maps.event.addListener(y,`addfeature`,u)))},[u]),(0,_.useEffect)(()=>{y&&d&&(te!==null&&google.maps.event.removeListener(te),z(google.maps.event.addListener(y,`removefeature`,d)))},[d]),(0,_.useEffect)(()=>{y&&f&&(B!==null&&google.maps.event.removeListener(B),V(google.maps.event.addListener(y,`removeproperty`,f)))},[f]),(0,_.useEffect)(()=>{y&&p&&(H!==null&&google.maps.event.removeListener(H),ne(google.maps.event.addListener(y,`setgeometry`,p)))},[p]),(0,_.useEffect)(()=>{y&&m&&(re!==null&&google.maps.event.removeListener(re),ie(google.maps.event.addListener(y,`setproperty`,m)))},[m]),(0,_.useEffect)(()=>{if(v!==null){var e=new google.maps.Data(En(En({},t),{},{map:v}));r&&S(google.maps.event.addListener(e,`dblclick`,r)),i&&w(google.maps.event.addListener(e,`mousedown`,i)),a&&E(google.maps.event.addListener(e,`mousemove`,a)),o&&O(google.maps.event.addListener(e,`mouseout`,o)),s&&A(google.maps.event.addListener(e,`mouseover`,s)),c&&N(google.maps.event.addListener(e,`mouseup`,c)),l&&ee(google.maps.event.addListener(e,`rightclick`,l)),n&&I(google.maps.event.addListener(e,`click`,n)),u&&R(google.maps.event.addListener(e,`addfeature`,u)),d&&z(google.maps.event.addListener(e,`removefeature`,d)),f&&V(google.maps.event.addListener(e,`removeproperty`,f)),p&&ne(google.maps.event.addListener(e,`setgeometry`,p)),m&&ie(google.maps.event.addListener(e,`setproperty`,m)),b(e),h&&h(e)}return()=>{y&&(x!==null&&google.maps.event.removeListener(x),C!==null&&google.maps.event.removeListener(C),T!==null&&google.maps.event.removeListener(T),D!==null&&google.maps.event.removeListener(D),k!==null&&google.maps.event.removeListener(k),M!==null&&google.maps.event.removeListener(M),P!==null&&google.maps.event.removeListener(P),F!==null&&google.maps.event.removeListener(F),L!==null&&google.maps.event.removeListener(L),te!==null&&google.maps.event.removeListener(te),B!==null&&google.maps.event.removeListener(B),H!==null&&google.maps.event.removeListener(H),re!==null&&google.maps.event.removeListener(re),g&&g(y),y.setMap(null))}},[]),null}(0,_.memo)(On),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{data:null}),T(this,`setDataCallback`,()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)})}componentDidMount(){if(this.context!==null){var e=new google.maps.Data(En(En({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:Dn,eventMap:G,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({data:e}),this.setDataCallback)}}componentDidUpdate(e){this.state.data!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Dn,eventMap:G,prevProps:e,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),L(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}},`contextType`,j);function kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?kn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var jn={onClick:`click`,onDefaultViewportChanged:`defaultviewport_changed`,onStatusChanged:`status_changed`},Mn={options(e,t){e.setOptions(t)},url(e,t){e.setUrl(t)},zIndex(e,t){e.setZIndex(t)}};T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{kmlLayer:null}),T(this,`setKmlLayerCallback`,()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)})}componentDidMount(){var e=new google.maps.KmlLayer(An(An({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:Mn,eventMap:jn,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{kmlLayer:e}},this.setKmlLayerCallback)}componentDidUpdate(e){this.state.kmlLayer!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:Mn,eventMap:jn,prevProps:e,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),L(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}},`contextType`,j);function Nn(e,t){return typeof t==`function`?t(e.offsetWidth,e.offsetHeight):{x:0,y:0}}function Pn(e,t){return new t(e.lat,e.lng)}function Fn(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))}function In(e,t,n){return e instanceof t?e:n(e,t)}function Ln(e,t,n){return e instanceof t?e:n(e,t)}function Rn(e,t,n){var r=e&&e.fromLatLngToDivPixel(n.getNorthEast()),i=e&&e.fromLatLngToDivPixel(n.getSouthWest());return r&&i?{left:`${i.x+t.x}px`,top:`${r.y+t.y}px`,width:`${r.x-i.x-t.x}px`,height:`${i.y-r.y-t.y}px`}:{left:`-9999px`,top:`-9999px`}}function zn(e,t,n){var r=e&&e.fromLatLngToDivPixel(n);if(r){var{x:i,y:a}=r;return{left:`${i+t.x}px`,top:`${a+t.y}px`}}return{left:`-9999px`,top:`-9999px`}}function Bn(e,t,n,r){return n===void 0?zn(e,t,In(r,google.maps.LatLng,Pn)):Rn(e,t,Ln(n,google.maps.LatLngBounds,Fn))}function Vn(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.height&&e.height===t.height}function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wn(e,t,n,r,i){class a extends google.maps.OverlayView{constructor(e,t,n,r){super(),this.container=e,this.pane=t,this.position=n,this.bounds=r}onAdd(){(this.getPanes()?.[this.pane])?.appendChild(this.container)}draw(){var e=Bn(this.getProjection(),Un({},this.container?Nn(this.container,i):{x:0,y:0}),this.bounds,this.position);for(var[t,n]of Object.entries(e))this.container.style[t]=n}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new a(e,t,n,r)}function Gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Gn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qn(e){return e?(e instanceof google.maps.LatLng?e:new google.maps.LatLng(e.lat,e.lng))+``:``}function Jn(e){return e?(e instanceof google.maps.LatLngBounds?e:new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west)))+``:``}function Yn(e){var{position:t,bounds:n,mapPaneName:r,zIndex:i,onLoad:a,onUnmount:o,getPixelPositionOffset:s,children:c}=e,l=(0,_.useContext)(j),u=(0,_.useMemo)(()=>{var e=document.createElement(`div`);return e.style.position=`absolute`,e},[]),d=(0,_.useMemo)(()=>Wn(u,r,t,n,s),[u,r,t,n]);return(0,_.useEffect)(()=>(a?.(d),d?.setMap(l),()=>{o?.(d),d?.setMap(null)}),[l,d]),(0,_.useEffect)(()=>{u.style.zIndex=`${i}`},[i,u]),x.createPortal(c,u)}(0,_.memo)(Yn);var Xn=class extends _.PureComponent{constructor(e){super(e),T(this,`state`,{paneEl:null,containerStyle:{position:`absolute`}}),T(this,`updatePane`,()=>{var e=this.props.mapPaneName,t=this.overlayView.getPanes();A(!!e,`OverlayView requires props.mapPaneName but got %s`,e),t?this.setState({paneEl:t[e]}):this.setState({paneEl:null})}),T(this,`onAdd`,()=>{var e,t;this.updatePane(),(e=(t=this.props).onLoad)==null||e.call(t,this.overlayView)}),T(this,`onPositionElement`,()=>{var e=Bn(this.overlayView.getProjection(),Kn({x:0,y:0},this.containerRef.current?Nn(this.containerRef.current,this.props.getPixelPositionOffset):{}),this.props.bounds,this.props.position);Vn(e,{left:this.state.containerStyle.left,top:this.state.containerStyle.top,width:this.state.containerStyle.width,height:this.state.containerStyle.height})||this.setState({containerStyle:{top:e.top??0,left:e.left??0,width:e.width??0,height:e.height??0,position:`absolute`}})}),T(this,`draw`,()=>{this.onPositionElement()}),T(this,`onRemove`,()=>{var e,t;this.setState(()=>({paneEl:null})),(e=(t=this.props).onUnmount)==null||e.call(t,this.overlayView)}),this.containerRef=(0,_.createRef)();var t=new google.maps.OverlayView;t.onAdd=this.onAdd,t.draw=this.draw,t.onRemove=this.onRemove,this.overlayView=t}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(e){var t=qn(e.position),n=qn(this.props.position),r=Jn(e.bounds),i=Jn(this.props.bounds);(t!==n||r!==i)&&this.overlayView.draw(),e.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){var e=this.state.paneEl;return e?x.createPortal((0,b.jsx)(`div`,{ref:this.containerRef,style:this.state.containerStyle,children:_.Children.only(this.props.children)}),e):null}};T(Xn,`FLOAT_PANE`,`floatPane`),T(Xn,`MAP_PANE`,`mapPane`),T(Xn,`MARKER_LAYER`,`markerLayer`),T(Xn,`OVERLAY_LAYER`,`overlayLayer`),T(Xn,`OVERLAY_MOUSE_TARGET`,`overlayMouseTarget`),T(Xn,`contextType`,j);function Zn(){}function Qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qn(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var er={onDblClick:`dblclick`,onClick:`click`},tr={opacity(e,t){e.setOpacity(t)}};function nr(e){var{url:t,bounds:n,options:r,visible:i}=e,a=(0,_.useContext)(j),o=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east)),s=(0,_.useMemo)(()=>new google.maps.GroundOverlay(t,o,r),[]);return(0,_.useEffect)(()=>{s!==null&&s.setMap(a)},[a]),(0,_.useEffect)(()=>{t!==void 0&&s!==null&&(s.set(`url`,t),s.setMap(a))},[s,t]),(0,_.useEffect)(()=>{i!==void 0&&s!==null&&s.setOpacity(+!!i)},[s,i]),(0,_.useEffect)(()=>{var e=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east));n!==void 0&&s!==null&&(s.set(`bounds`,e),s.setMap(a))},[s,n]),null}(0,_.memo)(nr);var rr=class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{groundOverlay:null}),T(this,`setGroundOverlayCallback`,()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)})}componentDidMount(){A(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");var e=new google.maps.GroundOverlay(this.props.url,this.props.bounds,$n($n({},this.props.options),{},{map:this.context}));this.registeredEvents=R({updaterMap:tr,eventMap:er,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{groundOverlay:e}},this.setGroundOverlayCallback)}componentDidUpdate(e){this.state.groundOverlay!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:tr,eventMap:er,prevProps:e,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}};T(rr,`defaultProps`,{onLoad:Zn}),T(rr,`contextType`,j);function ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ir(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ir(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var or={},sr={data(e,t){e.setData(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)}};function cr(e){var{data:t,onLoad:n,onUnmount:r,options:i}=e,a=(0,_.useContext)(j),[o,s]=(0,_.useState)(null);return(0,_.useEffect)(()=>{google.maps.visualization||A(!!google.maps.visualization,`Did you include prop libraries={["visualization"]} in useJsApiScript? %s`,google.maps.visualization)},[]),(0,_.useEffect)(()=>{A(!!t,`data property is required in HeatmapLayer %s`,t)},[t]),(0,_.useEffect)(()=>{o!==null&&o.setMap(a)},[a]),(0,_.useEffect)(()=>{i&&o!==null&&o.setOptions(i)},[o,i]),(0,_.useEffect)(()=>{var e=new google.maps.visualization.HeatmapLayer(ar(ar({},i),{},{data:t,map:a}));return s(e),n&&n(e),()=>{o!==null&&(r&&r(o),o.setMap(null))}},[]),null}(0,_.memo)(cr),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{heatmapLayer:null}),T(this,`setHeatmapLayerCallback`,()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)})}componentDidMount(){A(!!google.maps.visualization,`Did you include prop libraries={["visualization"]} to <LoadScript />? %s`,google.maps.visualization),A(!!this.props.data,`data property is required in HeatmapLayer %s`,this.props.data);var e=new google.maps.visualization.HeatmapLayer(ar(ar({},this.props.options),{},{data:this.props.data,map:this.context}));this.registeredEvents=R({updaterMap:sr,eventMap:or,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{heatmapLayer:e}},this.setHeatmapLayerCallback)}componentDidUpdate(e){L(this.registeredEvents),this.registeredEvents=R({updaterMap:sr,eventMap:or,prevProps:e,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),L(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}},`contextType`,j);var lr={onCloseClick:`closeclick`,onPanoChanged:`pano_changed`,onPositionChanged:`position_changed`,onPovChanged:`pov_changed`,onResize:`resize`,onStatusChanged:`status_changed`,onVisibleChanged:`visible_changed`,onZoomChanged:`zoom_changed`},ur={register(e,t,n){e.registerPanoProvider(t,n)},links(e,t){e.setLinks(t)},motionTracking(e,t){e.setMotionTracking(t)},options(e,t){e.setOptions(t)},pano(e,t){e.setPano(t)},position(e,t){e.setPosition(t)},pov(e,t){e.setPov(t)},visible(e,t){e.setVisible(t)},zoom(e,t){e.setZoom(t)}};T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{streetViewPanorama:null}),T(this,`setStreetViewPanoramaCallback`,()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)})}componentDidMount(){var e=this.context?.getStreetView()??null;this.registeredEvents=R({updaterMap:ur,eventMap:lr,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({streetViewPanorama:e}),this.setStreetViewPanoramaCallback)}componentDidUpdate(e){this.state.streetViewPanorama!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:ur,eventMap:lr,prevProps:e,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),L(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}},`contextType`,j),T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`state`,{streetViewService:null}),T(this,`setStreetViewServiceCallback`,()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)})}componentDidMount(){var e=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:e}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}},`contextType`,j);var dr={onDirectionsChanged:`directions_changed`},fr={directions(e,t){e.setDirections(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},panel(e,t){e.setPanel(t)},routeIndex(e,t){e.setRouteIndex(t)}};T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`state`,{directionsRenderer:null}),T(this,`setDirectionsRendererCallback`,()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))})}componentDidMount(){var e=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=R({updaterMap:fr,eventMap:dr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{directionsRenderer:e}},this.setDirectionsRendererCallback)}componentDidUpdate(e){this.state.directionsRenderer!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:fr,eventMap:dr,prevProps:e,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),L(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return null}},`contextType`,j);var pr={onPlacesChanged:`places_changed`},mr={bounds(e,t){e.setBounds(t)}};T(class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`containerElement`,(0,_.createRef)()),T(this,`state`,{searchBox:null}),T(this,`setSearchBoxCallback`,()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)})}componentDidMount(){if(A(!!google.maps.places,`You need to provide libraries={["places"]} prop to <LoadScript /> component %s`,google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){var e=this.containerElement.current.querySelector(`input`);if(e!==null){var t=new google.maps.places.SearchBox(e,this.props.options);this.registeredEvents=R({updaterMap:mr,eventMap:pr,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{searchBox:t}},this.setSearchBoxCallback)}}}componentDidUpdate(e){this.state.searchBox!==null&&(L(this.registeredEvents),this.registeredEvents=R({updaterMap:mr,eventMap:pr,prevProps:e,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),L(this.registeredEvents))}render(){return(0,b.jsx)(`div`,{ref:this.containerElement,children:_.Children.only(this.props.children)})}},`contextType`,j);var hr={onPlaceChanged:`place_changed`},gr={bounds(e,t){e.setBounds(t)},restrictions(e,t){e.setComponentRestrictions(t)},fields(e,t){e.setFields(t)},options(e,t){e.setOptions(t)},types(e,t){e.setTypes(t)}},_r=class extends _.PureComponent{constructor(){super(...arguments),T(this,`registeredEvents`,[]),T(this,`containerElement`,(0,_.createRef)()),T(this,`state`,{autocomplete:null}),T(this,`setAutocompleteCallback`,()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)})}componentDidMount(){A(!!google.maps.places,`You need to provide libraries={["places"]} prop to <LoadScript /> component %s`,google.maps.places);var e=this.containerElement.current?.querySelector(`input`);if(e){var t=new google.maps.places.Autocomplete(e,this.props.options);this.registeredEvents=R({updaterMap:gr,eventMap:hr,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({autocomplete:t}),this.setAutocompleteCallback)}}componentDidUpdate(e){L(this.registeredEvents),this.registeredEvents=R({updaterMap:gr,eventMap:hr,prevProps:e,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&L(this.registeredEvents)}render(){return(0,b.jsx)(`div`,{ref:this.containerElement,className:this.props.className,children:_.Children.only(this.props.children)})}};T(_r,`defaultProps`,{className:``}),T(_r,`contextType`,j);var vr=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,yr={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=vr}var br=yr,xr=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Sr={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=xr}var Cr=Sr,wr=({size:e=16})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),Tr=({size:e=24,style:t={}})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,b.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,b.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,b.jsx)(`defs`,{children:(0,b.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,b.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),Er=({size:e=20,...t})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,b.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,b.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),Dr=({size:e=24,copied:t=!1,tint:n})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,b.jsxs)(`g`,{className:`${Cr.iconState} ${t?Cr.hiddenScaled:Cr.visibleScaled}`,children:[(0,b.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,b.jsxs)(`g`,{className:`${Cr.iconState} ${t?Cr.visibleScaled:Cr.hiddenScaled}`,children:[(0,b.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),Or=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsx)(`g`,{className:`${Cr.iconStateFast} ${n?Cr.visibleScaled:a?Cr.sending:Cr.hiddenScaled}`,children:(0,b.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,b.jsxs)(`g`,{className:`${Cr.iconStateFast} ${r?Cr.visibleScaled:Cr.hiddenScaled}`,children:[(0,b.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,b.jsxs)(`g`,{className:`${Cr.iconStateFast} ${i?Cr.visibleScaled:Cr.hiddenScaled}`,children:[(0,b.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,b.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},kr=({size:e=24,isOpen:t=!0})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsxs)(`g`,{className:`${Cr.iconFade} ${t?Cr.visible:Cr.hidden}`,children:[(0,b.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,b.jsxs)(`g`,{className:`${Cr.iconFade} ${t?Cr.hidden:Cr.visible}`,children:[(0,b.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,b.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),Ar=({size:e=24,isPaused:t=!1})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsxs)(`g`,{className:`${Cr.iconFadeFast} ${t?Cr.hidden:Cr.visible}`,children:[(0,b.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,b.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,b.jsx)(`path`,{className:`${Cr.iconFadeFast} ${t?Cr.visible:Cr.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),jr=({size:e=16})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),Mr=({size:e=16})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),Nr=({size:e=16})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,b.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,b.jsx)(`defs`,{children:(0,b.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,b.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),Pr=({size:e=24})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),Fr=({size:e=16})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,b.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),Ir=({size:e=16})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Lr=({size:e=16})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Rr=({size:e=24})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),zr=({size:e=16})=>(0,b.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Br=({size:e=24})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,b.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,b.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),Vr=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],Hr=Vr.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),Ur=`feedback-freeze-styles`,Wr=`__agentation_freeze`;function Gr(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[Wr]||(e[Wr]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Wr]}var Kr=Gr();typeof window<`u`&&!Kr.installed&&(Kr.origSetTimeout=window.setTimeout.bind(window),Kr.origSetInterval=window.setInterval.bind(window),Kr.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?Kr.origSetTimeout(e,t):Kr.origSetTimeout((...t)=>{Kr.frozen?Kr.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?Kr.origSetInterval(e,t):Kr.origSetInterval((...t)=>{Kr.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>Kr.origRAF(t=>{Kr.frozen?Kr.frozenRAFQueue.push(e):e(t)}),Kr.installed=!0);var K=Kr.origSetTimeout,qr=Kr.origSetInterval,Jr=Kr.origRAF;function Yr(e){return e?Vr.some(t=>!!e.closest?.(`[${t}]`)):!1}function Xr(){if(typeof document>`u`||Kr.frozen)return;Kr.frozen=!0,Kr.frozenTimeoutQueue=[],Kr.frozenRAFQueue=[];let e=document.getElementById(Ur);e||(e=document.createElement(`style`),e.id=Ur),e.textContent=`
    *${Hr},
    *${Hr}::before,
    *${Hr}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Kr.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;Yr(t)||(e.pause(),Kr.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function Zr(){if(typeof document>`u`||!Kr.frozen)return;Kr.frozen=!1;let e=Kr.frozenTimeoutQueue;Kr.frozenTimeoutQueue=[];for(let t of e)Kr.origSetTimeout(()=>{if(Kr.frozen){Kr.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=Kr.frozenRAFQueue;Kr.frozenRAFQueue=[];for(let e of t)Kr.origRAF(t=>{if(Kr.frozen){Kr.frozenRAFQueue.push(e);return}e(t)});for(let e of Kr.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}Kr.pausedAnimations=[],document.getElementById(Ur)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function Qr(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var $r=(0,_.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,_.useState)(i),[v,y]=(0,_.useState)(!1),[x,S]=(0,_.useState)(`initial`),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),D=(0,_.useRef)(null),O=(0,_.useRef)(null),k=(0,_.useRef)(null),A=(0,_.useRef)(null);(0,_.useEffect)(()=>{d&&x!==`exit`&&S(`exit`)},[d,x]),(0,_.useEffect)(()=>{K(()=>{S(`enter`)},0);let e=K(()=>{S(`entered`)},200),t=K(()=>{let e=D.current;e&&(Qr(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),k.current&&clearTimeout(k.current),A.current&&clearTimeout(A.current)}},[]);let j=(0,_.useCallback)(()=>{A.current&&clearTimeout(A.current),y(!0),A.current=K(()=>{y(!1),Qr(D.current)},250)},[]);(0,_.useImperativeHandle)(m,()=>({shake:j}),[j]);let M=(0,_.useCallback)(()=>{S(`exit`),k.current=K(()=>{s()},150)},[s]),N=(0,_.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),P=(0,_.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),N()),e.key===`Escape`&&M())},[N,M]),ee=[br.popup,f?br.light:``,x===`enter`?br.enter:``,x===`entered`?br.entered:``,x===`exit`?br.exit:``,v?br.shake:``].filter(Boolean).join(` `);return(0,b.jsxs)(`div`,{ref:O,className:ee,"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,b.jsxs)(`div`,{className:br.header,children:[p&&Object.keys(p).length>0?(0,b.jsxs)(`button`,{className:br.headerToggle,onClick:()=>{let e=T;E(!T),e&&K(()=>Qr(D.current),0)},type:`button`,children:[(0,b.jsx)(`svg`,{className:`${br.chevron} ${T?br.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,b.jsx)(`span`,{className:br.element,children:e})]}):(0,b.jsx)(`span`,{className:br.element,children:e}),t&&(0,b.jsx)(`span`,{className:br.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,b.jsx)(`div`,{className:`${br.stylesWrapper} ${T?br.expanded:``}`,children:(0,b.jsx)(`div`,{className:br.stylesInner,children:(0,b.jsx)(`div`,{className:br.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,b.jsxs)(`div`,{className:br.styleLine,children:[(0,b.jsx)(`span`,{className:br.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,b.jsx)(`span`,{className:br.styleValue,children:t}),`;`]},e))})})}),n&&(0,b.jsxs)(`div`,{className:br.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,b.jsx)(`textarea`,{ref:D,className:br.textarea,style:{borderColor:C?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>w(!0),onBlur:()=>w(!1),rows:2,onKeyDown:P}),(0,b.jsxs)(`div`,{className:br.actions,children:[c&&(0,b.jsx)(`div`,{className:br.deleteWrapper,children:(0,b.jsx)(`button`,{className:br.deleteButton,onClick:c,type:`button`,children:(0,b.jsx)(Rr,{size:22})})}),(0,b.jsx)(`button`,{className:br.cancel,onClick:M,children:`Cancel`}),(0,b.jsx)(`button`,{className:br.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:N,disabled:!h.trim(),children:a})]})]})}),ei=({content:e,children:t,...n})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)({top:0,right:0}),l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,_.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=K(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=K(()=>{o(!1)},150)},...n,children:t}),a&&(0,x.createPortal)((0,b.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},ti=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,ni={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=ti}var ri=ni,ii=({content:e})=>(0,b.jsx)(ei,{className:ri.tooltip,content:e,children:(0,b.jsx)(Er,{className:ri.tooltipIcon})}),q={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},ai=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...q.navigation},{type:`header`,label:`Header`,...q.header},{type:`hero`,label:`Hero`,...q.hero},{type:`section`,label:`Section`,...q.section},{type:`sidebar`,label:`Sidebar`,...q.sidebar},{type:`footer`,label:`Footer`,...q.footer},{type:`modal`,label:`Modal`,...q.modal},{type:`banner`,label:`Banner`,...q.banner},{type:`drawer`,label:`Drawer`,...q.drawer},{type:`popover`,label:`Popover`,...q.popover},{type:`divider`,label:`Divider`,...q.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...q.card},{type:`text`,label:`Text`,...q.text},{type:`image`,label:`Image`,...q.image},{type:`video`,label:`Video`,...q.video},{type:`table`,label:`Table`,...q.table},{type:`grid`,label:`Grid`,...q.grid},{type:`list`,label:`List`,...q.list},{type:`chart`,label:`Chart`,...q.chart},{type:`codeBlock`,label:`Code Block`,...q.codeBlock},{type:`map`,label:`Map`,...q.map},{type:`timeline`,label:`Timeline`,...q.timeline},{type:`calendar`,label:`Calendar`,...q.calendar},{type:`accordion`,label:`Accordion`,...q.accordion},{type:`carousel`,label:`Carousel`,...q.carousel},{type:`logo`,label:`Logo`,...q.logo},{type:`faq`,label:`FAQ`,...q.faq},{type:`gallery`,label:`Gallery`,...q.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...q.button},{type:`input`,label:`Input`,...q.input},{type:`search`,label:`Search`,...q.search},{type:`form`,label:`Form`,...q.form},{type:`tabs`,label:`Tabs`,...q.tabs},{type:`dropdown`,label:`Dropdown`,...q.dropdown},{type:`toggle`,label:`Toggle`,...q.toggle},{type:`stepper`,label:`Stepper`,...q.stepper},{type:`rating`,label:`Rating`,...q.rating},{type:`fileUpload`,label:`File Upload`,...q.fileUpload},{type:`checkbox`,label:`Checkbox`,...q.checkbox},{type:`radio`,label:`Radio`,...q.radio},{type:`slider`,label:`Slider`,...q.slider},{type:`datePicker`,label:`Date Picker`,...q.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...q.avatar},{type:`badge`,label:`Badge`,...q.badge},{type:`tag`,label:`Tag`,...q.tag},{type:`breadcrumb`,label:`Breadcrumb`,...q.breadcrumb},{type:`pagination`,label:`Pagination`,...q.pagination},{type:`progress`,label:`Progress`,...q.progress},{type:`alert`,label:`Alert`,...q.alert},{type:`toast`,label:`Toast`,...q.toast},{type:`notification`,label:`Notification`,...q.notification},{type:`tooltip`,label:`Tooltip`,...q.tooltip},{type:`stat`,label:`Stat`,...q.stat},{type:`skeleton`,label:`Skeleton`,...q.skeleton},{type:`chip`,label:`Chip`,...q.chip},{type:`icon`,label:`Icon`,...q.icon},{type:`spinner`,label:`Spinner`,...q.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...q.pricing},{type:`testimonial`,label:`Testimonial`,...q.testimonial},{type:`cta`,label:`CTA`,...q.cta},{type:`productCard`,label:`Product Card`,...q.productCard},{type:`profile`,label:`Profile`,...q.profile},{type:`feature`,label:`Feature`,...q.feature},{type:`team`,label:`Team`,...q.team},{type:`login`,label:`Login`,...q.login},{type:`contact`,label:`Contact`,...q.contact}]}],oi={};for(let e of ai)for(let t of e.items)oi[t.type]=t;function J({w:e,h:t=3,strong:n}){return(0,b.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function si({w:e,h:t,radius:n=3,style:r}){return(0,b.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function ci({size:e}){return(0,b.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function li({width:e,height:t}){let n=Math.max(8,t*.2);return(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${n}px`,gap:e*.02},children:[(0,b.jsx)(si,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,b.jsx)(J,{w:e*.06}),(0,b.jsx)(J,{w:e*.07}),(0,b.jsx)(J,{w:e*.05}),(0,b.jsx)(J,{w:e*.06})]}),(0,b.jsx)(si,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function ui({width:e,height:t,text:n}){return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,b.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,b.jsx)(J,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,b.jsx)(J,{w:e*.6}),(0,b.jsx)(J,{w:e*.4}),(0,b.jsx)(si,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function di({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,b.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,b.jsx)(J,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,b.jsx)(si,{w:10,h:10,radius:2}),(0,b.jsx)(J,{w:e*(.4+n*17%30/100)})]},n))]})}function fi({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,b.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(J,{w:`60%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`80%`,h:2}),(0,b.jsx)(J,{w:`70%`,h:2}),(0,b.jsx)(J,{w:`60%`,h:2})]},t))})}function pi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,b.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,b.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,b.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,b.jsx)(J,{w:`90%`}),(0,b.jsx)(J,{w:`70%`}),(0,b.jsx)(J,{w:`80%`})]}),(0,b.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,b.jsx)(si,{w:70,h:26,radius:4}),(0,b.jsx)(si,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function mi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,b.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,b.jsx)(J,{w:`70%`,h:4,strong:!0}),(0,b.jsx)(J,{w:`95%`,h:2}),(0,b.jsx)(J,{w:`85%`,h:2}),(0,b.jsx)(J,{w:`50%`,h:2})]})]})}function hi({width:e,height:t,text:n}){if(n)return(0,b.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,b.jsx)(J,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,b.jsx)(J,{w:`${70+t*13%25}%`,h:2},t))]})}function gi({width:e,height:t}){return(0,b.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,b.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,b.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,b.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function _i({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,b.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,b.jsx)(J,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,b.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,b.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,b.jsx)(J,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function vi({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,b.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,b.jsx)(ci,{size:8}),(0,b.jsx)(J,{w:`${55+t*17%35}%`,h:2})]},t))})}function yi({width:e,height:t,text:n}){return(0,b.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,b.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,b.jsx)(J,{w:Math.max(20,e*.5),h:3,strong:!0})})}function bi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,b.jsx)(J,{w:Math.min(80,e*.3),h:2}),(0,b.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,b.jsx)(J,{w:`40%`,h:2})})]})}function xi({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(J,{w:60+t*17%30,h:2}),(0,b.jsx)(si,{w:`100%`,h:28,radius:4})]},t)),(0,b.jsx)(si,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function Si({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,b.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,b.jsx)(J,{w:60,h:3,strong:t===0})},t))}),(0,b.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,b.jsx)(J,{w:`80%`,h:2}),(0,b.jsx)(J,{w:`65%`,h:2}),(0,b.jsx)(J,{w:`75%`,h:2})]})]})}function Ci({width:e,height:t}){let n=Math.min(e,t)/2;return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,b.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,b.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function wi({width:e,height:t}){return(0,b.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(J,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Ti({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,b.jsx)(J,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,b.jsx)(J,{w:e*.35})]})}function Ei({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,b.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,b.jsx)(J,{w:e*.7}),(0,b.jsx)(J,{w:e*.5}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,b.jsx)(si,{w:`33%`,h:`100%`,radius:4}),(0,b.jsx)(si,{w:`33%`,h:`100%`,radius:4}),(0,b.jsx)(si,{w:`33%`,h:`100%`,radius:4})]})]})}function Di({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,b.jsx)(si,{w:`100%`,h:`100%`,radius:4},t))})}function Oi({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,b.jsx)(J,{w:e*.5,h:3,strong:!0})}),(0,b.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,b.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,b.jsx)(J,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function ki({width:e,height:t}){let n=Math.min(e,t)/2;return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,b.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function Ai({width:e,height:t}){let n=Math.min(t/2,20);return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,b.jsx)(ci,{size:Math.min(14,t*.4)}),(0,b.jsx)(J,{w:`50%`,h:2})]})}function ji({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,b.jsx)(ci,{size:Math.min(20,t*.5)}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:`60%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`80%`,h:2})]}),(0,b.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function Mi({width:e,height:t}){return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function Ni({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,b.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>{let n=30+(t*37+17)%55;return(0,b.jsx)(si,{w:r,h:`${n}%`,radius:2},t)})})}function Pi({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,b.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,b.jsx)(si,{w:`100%`,h:`100%`,radius:4}),(0,b.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function Fi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,b.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(J,{w:`60%`,h:2})}),(0,b.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function Ii({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,b.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,b.jsx)(J,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function Li({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,b.jsx)(si,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function Ri({width:e}){return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,b.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function zi({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,b.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,b.jsx)(J,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,b.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function Bi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,b.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,b.jsx)(si,{w:`100%`,h:`100%`,radius:4}),(0,b.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,b.jsx)(ci,{size:5}),(0,b.jsx)(ci,{size:5}),(0,b.jsx)(ci,{size:5})]})]})}function Vi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,b.jsx)(J,{w:e*.4,h:3,strong:!0}),(0,b.jsx)(J,{w:e*.3,h:6,strong:!0}),(0,b.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,b.jsx)(ci,{size:5}),(0,b.jsx)(J,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,b.jsx)(si,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function Hi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,b.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(J,{w:`90%`,h:2}),(0,b.jsx)(J,{w:`75%`,h:2}),(0,b.jsx)(J,{w:`60%`,h:2})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,b.jsx)(ci,{size:20}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,b.jsx)(J,{w:60,h:3,strong:!0}),(0,b.jsx)(J,{w:40,h:2})]})]})]})}function Ui({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,b.jsx)(J,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,b.jsx)(J,{w:e*.35}),(0,b.jsx)(si,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function Wi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,b.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,b.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:`40%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`70%`,h:2})]})]})}function Gi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,b.jsx)(J,{w:e*.4,h:3,strong:!0}),(0,b.jsx)(si,{w:60,h:Math.min(24,t*.6),radius:4})]})}function Ki({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,b.jsx)(J,{w:e*.5,h:2}),(0,b.jsx)(J,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,b.jsx)(J,{w:e*.3,h:2})]})}function qi({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,b.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,b.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function Ji({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,b.jsx)(J,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,b.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function Yi({width:e,height:t}){let n=Math.min(t*.7,e/7.5);return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,b.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function Xi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,b.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,b.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,b.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,b.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,b.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,b.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,b.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function Zi({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,b.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,b.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,b.jsx)(ci,{size:8}),t<n-1&&(0,b.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,b.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function Qi({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,b.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,b.jsx)(J,{w:e*.4,h:2}),(0,b.jsx)(J,{w:e*.25,h:2})]})}function $i({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,b.jsx)(ci,{size:6}),(0,b.jsx)(ci,{size:6}),(0,b.jsx)(ci,{size:6})]}),Array.from({length:n},(e,t)=>(0,b.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,b.jsx)(J,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function ea({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,b.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,b.jsx)(J,{w:e*.3,h:3,strong:!0}),(0,b.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,b.jsx)(J,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,b.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function ta({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,b.jsx)(ci,{size:Math.min(32,t*.55)}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:`50%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`75%`,h:2})]}),(0,b.jsx)(J,{w:30,h:2})]})}function na({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,b.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,b.jsx)(J,{w:`65%`,h:4,strong:!0}),(0,b.jsx)(J,{w:`40%`,h:3}),(0,b.jsx)(`div`,{style:{flex:1}}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,b.jsx)(J,{w:`30%`,h:5,strong:!0}),(0,b.jsx)(si,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function ra({width:e,height:t}){let n=Math.min(48,t*.3);return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,b.jsx)(ci,{size:n}),(0,b.jsx)(J,{w:e*.45,h:4,strong:!0}),(0,b.jsx)(J,{w:e*.3,h:2}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,b.jsx)(J,{w:20,h:3,strong:!0}),(0,b.jsx)(J,{w:28,h:2})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,b.jsx)(J,{w:20,h:3,strong:!0}),(0,b.jsx)(J,{w:28,h:2})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,b.jsx)(J,{w:20,h:3,strong:!0}),(0,b.jsx)(J,{w:28,h:2})]})]})]})}function ia({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,b.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,b.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,b.jsx)(J,{w:n*.4,h:4,strong:!0}),(0,b.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,b.jsx)(`div`,{style:{padding:`6px 0`},children:(0,b.jsx)(J,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function aa({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,b.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,b.jsx)(J,{w:`70%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`90%`,h:2}),(0,b.jsx)(J,{w:`60%`,h:2})]}),(0,b.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function oa({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,b.jsx)(si,{w:n,h:n,radius:n*.25}),(0,b.jsx)(J,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function sa({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,b.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,b.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,b.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,b.jsx)(J,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,b.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function ca({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,b.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,b.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,b.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function la({width:e,height:t}){let n=Math.min(e,t);return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function ua({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,b.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function da({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,b.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,b.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,b.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function fa({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,b.jsx)(J,{w:`40%`,h:2}),(0,b.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,b.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,b.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,b.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,b.jsx)(J,{w:e*.25,h:2,strong:!0}),(0,b.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,b.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,b.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function pa({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,b.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,b.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,b.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,b.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function ma({width:e,height:t}){return(0,b.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,b.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,b.jsx)(J,{w:`60%`,h:2,strong:!0}),(0,b.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function ha({width:e,height:t}){let n=Math.min(e,t);return(0,b.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function ga({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,b.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,b.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function _a({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,b.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,b.jsx)(si,{w:n,h:n,radius:n*.25}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(J,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,b.jsx)(J,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function va({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,b.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,b.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,b.jsx)(ci,{size:r}),(0,b.jsx)(J,{w:e*.12,h:3,strong:!0}),(0,b.jsx)(J,{w:e*.08,h:2})]},n))})]})}function ya({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,b.jsx)(J,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,b.jsx)(J,{w:e*.35,h:2}),(0,b.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:Math.min(60,e*.2),h:2}),(0,b.jsx)(si,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,b.jsx)(si,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,b.jsx)(J,{w:e*.4,h:2})]})}function ba({width:e,height:t}){return(0,b.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,b.jsx)(J,{w:e*.4,h:4,strong:!0}),(0,b.jsx)(J,{w:e*.6,h:2}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:50,h:2}),(0,b.jsx)(si,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:40,h:2}),(0,b.jsx)(si,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,b.jsx)(J,{w:50,h:2}),(0,b.jsx)(si,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,b.jsx)(J,{w:60,h:2}),(0,b.jsx)(si,{w:`100%`,h:`100%`,radius:4})]}),(0,b.jsx)(si,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var xa={navigation:li,hero:ui,sidebar:di,footer:fi,modal:pi,card:mi,text:hi,image:gi,table:_i,list:vi,button:yi,input:bi,form:xi,tabs:Si,avatar:Ci,badge:wi,header:Ti,section:Ei,grid:Di,dropdown:Oi,toggle:ki,search:Ai,toast:ji,progress:Mi,chart:Ni,video:Pi,tooltip:Fi,breadcrumb:Ii,pagination:Li,divider:Ri,accordion:zi,carousel:Bi,pricing:Vi,testimonial:Hi,cta:Ui,alert:Wi,banner:Gi,stat:Ki,stepper:qi,tag:Ji,rating:Yi,map:Xi,timeline:Zi,fileUpload:Qi,codeBlock:$i,calendar:ea,notification:ta,productCard:na,profile:ra,drawer:ia,popover:aa,logo:oa,faq:sa,gallery:ca,checkbox:la,radio:ua,slider:da,datePicker:fa,skeleton:pa,chip:ma,icon:ha,spinner:ga,feature:_a,team:va,login:ya,contact:ba};function Sa({type:e,width:t,height:n,text:r}){let i=xa[e];return i?(0,b.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,b.jsx)(i,{width:t,height:n,text:r})}):(0,b.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var Ca=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,wa={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=Ca}var Y=wa,Ta=24,Ea=5;function Da(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Ea&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Ea&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Ea?a:0,v=Math.abs(o)<Ea?o:0,y=[],b=new Set,x=s+_,S=c+_,C=l+_,w=u+v,T=d+v,E=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,C,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[w,E,T])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Oa(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function ka({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,v]=(0,_.useState)(new Set),[y,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)([]),[O,k]=(0,_.useState)(null),[A,j]=(0,_.useState)(!1),M=(0,_.useRef)(!1),[N,P]=(0,_.useState)(new Set),ee=(0,_.useRef)(new Map),F=(0,_.useRef)(null),I=(0,_.useRef)(null),L=(0,_.useRef)(e);L.current=e;let R=(0,_.useRef)(u);R.current=u;let te=(0,_.useRef)(f);te.current=f;let z=(0,_.useRef)(p);z.current=p;let B=(0,_.useRef)(d);(0,_.useEffect)(()=>{d!==B.current&&(B.current=d,v(new Set))},[d]);let V=(0,_.useRef)(m);(0,_.useEffect)(()=>{if(m!==void 0&&m!==V.current){V.current=m;let e=new Set(L.current.map(e=>e.id));e.size>0&&(P(e),v(new Set),I.current=null,K(()=>{t([]),P(new Set)},180))}},[m,t]),(0,_.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);P(e),v(new Set),K(()=>{t(L.current.filter(t=>!e.has(t.id))),P(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&v(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let H=(0,_.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${Y.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){I.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);x({x:t,y:n,w:r,h:i}),T({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),x(null),T(null),I.current=null,o?.(!1);let m=q[n],h,g,_,y;i?(h=Math.min(s,c),g=Math.min(l,u)+a,_=Math.max(Ta,Math.abs(c-s)),y=Math.max(Ta,Math.abs(u-l))):(_=m.width,y=m.height,h=s-_/2,g=l+a-y/2),h=Math.max(0,h),g=Math.max(0,g);let b={id:Oa(),type:n,x:h,y:g,width:_,height:y,scrollY:a,timestamp:Date.now()};t([...e,b]),v(new Set([b.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||v(new Set),I.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);if((n>4||r>4)&&(t=!0),t){let t=Math.min(s,e.clientX),n=Math.min(l,e.clientY);C({x:t,y:n,w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})}},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),I.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);v(u)}C(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),ne=(0,_.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${Y.handle}`)||i.closest(`.${Y.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),v(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&R.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});I.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,_=new Map;for(let t of e)u.has(t.id)&&_.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Oa(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,v=-1/0;for(let[e,t]of u){let n=_.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),v=Math.max(v,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=Da({x:a,y:o,width:g-a,height:v-o},p,new Set(u.keys()),void 0,l);D(x);let S=r+y,C=i+b;m=S,h=C,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+C)}:e})),te.current?.(S,C)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),I.current=null,o?.(!1),D([]),z.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),re=(0,_.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;v(new Set([r])),I.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Ta,u+n)),i.includes(`w`)&&(o=Math.max(Ta,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Ta,d+a)),i.includes(`n`)&&(h=Math.max(Ta,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=Da({x:g,y:_,width:o,height:h},L.current,new Set([r]),m,l);D(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(L.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),T({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),T(null),I.current=null,o?.(!1),D([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),ie=(0,_.useCallback)(e=>{I.current=null,P(t=>{let n=new Set(t);return n.add(e),n}),v(t=>{let n=new Set(t);return n.delete(e),n}),K(()=>{t(L.current.filter(t=>t.id!==e)),P(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),ae={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},oe=(0,_.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(M.current=!!n.text,k(t),j(!1))},[e]),se=(0,_.useCallback)(()=>{O&&(j(!0),K(()=>{k(null),j(!1)},150))},[O]);(0,_.useEffect)(()=>{a&&O&&se()},[a]);let ce=(0,_.useCallback)(n=>{O&&(t(e.map(e=>e.id===O?{...e,text:n.trim()||void 0}:e)),se())},[O,e,t,se]),le=typeof window<`u`?window.scrollY:0,ue=[`nw`,`ne`,`se`,`sw`],de=h?`#f97316`:`#3c82f7`,fe=[{dir:`n`,cls:Y.edgeN,arrow:(0,b.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:de})})},{dir:`e`,cls:Y.edgeE,arrow:(0,b.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:de})})},{dir:`s`,cls:Y.edgeS,arrow:(0,b.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:de})})},{dir:`w`,cls:Y.edgeW,arrow:(0,b.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:de})})}];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{ref:F,className:`${Y.overlay} ${i?``:Y.light} ${n?Y.placing:``} ${c?Y.passthrough:``} ${a?Y.overlayExiting:``} ${h?Y.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:H,children:e.map(e=>{let t=g.has(e.id),n=oi[e.type]?.label||e.type,r=e.y-le;return(0,b.jsxs)(`div`,{"data-design-placement":e.id,className:`${Y.placement} ${t?Y.selected:``} ${N.has(e.id)?Y.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>ne(t,e.id),onDoubleClick:()=>oe(e.id),children:[(0,b.jsx)(`span`,{className:Y.placementLabel,children:n}),(0,b.jsx)(`span`,{className:`${Y.placementAnnotation} ${e.text?Y.annotationVisible:``}`,children:(e.text&&ee.current.set(e.id,e.text),e.text||ee.current.get(e.id)||``)}),(0,b.jsx)(`div`,{className:Y.placementContent,children:(0,b.jsx)(Sa,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,b.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>ie(e.id),children:`✕`}),ue.map(t=>(0,b.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>re(n,e.id,t)},t)),fe.map(({dir:t,cls:n,arrow:r})=>(0,b.jsx)(`div`,{className:`${Y.edgeHandle} ${n}`,onMouseDown:n=>re(n,e.id,t),children:r},t))]},e.id)})}),O&&(()=>{let t=e.find(e=>e.id===O);if(!t)return null;let n=t.y-le,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,b.jsx)($r,{element:oi[t.type]?.label||t.type,placeholder:ae[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:M.current?`Save`:`Set`,onSubmit:ce,onCancel:se,onDelete:M.current?()=>{ce(``)}:void 0,isExiting:A,lightMode:!i,style:u})})(),y&&(0,b.jsx)(`div`,{className:Y.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),S&&(0,b.jsx)(`div`,{className:Y.selectBox,style:{left:S.x,top:S.y,width:S.w,height:S.h},"data-feedback-toolbar":!0}),w&&(0,b.jsx)(`div`,{className:Y.sizeIndicator,style:{left:w.x,top:w.y},"data-feedback-toolbar":!0,children:w.text}),E.map((e,t)=>(0,b.jsx)(`div`,{className:Y.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-le,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function Aa(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?Y.fadeTop:``} ${n?Y.fadeBottom:``}`}var X=`currentColor`,Z=`0.5`;function ja({type:e}){switch(e){case`navigation`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:X,opacity:`.4`}),(0,b.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`})]});case`header`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:X,opacity:`.35`}),(0,b.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`hero`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.35`}),(0,b.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`section`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`sidebar`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`footer`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`modal`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`divider`:return(0,b.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,b.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:X,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:X,opacity:`.04`}),(0,b.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`text`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`image`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:X,strokeWidth:Z,fill:X,opacity:`.15`})]});case`table`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`list`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`chart`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:X,opacity:`.2`})]});case`accordion`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:X,strokeWidth:Z})]});case`carousel`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:X,strokeWidth:Z,opacity:`.35`}),(0,b.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:X,strokeWidth:Z,opacity:`.35`}),(0,b.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:X,opacity:`.35`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:X,opacity:`.15`}),(0,b.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:X,opacity:`.15`})]});case`button`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`})]});case`input`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`search`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`form`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`tabs`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`dropdown`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:X,opacity:`.3`})]});case`avatar`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:X,strokeWidth:Z})]});case`badge`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`})]});case`breadcrumb`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`pagination`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:X,opacity:`.15`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`progress`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:X,opacity:`.2`})]});case`toast`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`tooltip`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:X,strokeWidth:Z})]});case`pricing`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.1`}),(0,b.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.1`}),(0,b.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.2`})]});case`testimonial`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:X,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,b.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,b.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`cta`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`alert`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:X,strokeWidth:`0.6`,opacity:`.5`}),(0,b.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:X,opacity:`.5`}),(0,b.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`banner`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`stat`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`stepper`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:X,opacity:`.2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:X,strokeWidth:`.4`,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:X,strokeWidth:`.4`,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z})]});case`tag`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,b.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`})]});case`rating`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:X,opacity:`.25`}),(0,b.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:X,opacity:`.25`}),(0,b.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:X,strokeWidth:Z,opacity:`.25`})]});case`map`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:X,strokeWidth:`.3`,opacity:`.15`}),(0,b.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.15`}),(0,b.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:X,opacity:`.15`,stroke:X,strokeWidth:Z})]});case`timeline`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:X,strokeWidth:`.4`,opacity:`.25`}),(0,b.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:X,opacity:`.2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`fileUpload`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`}),(0,b.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`codeBlock`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`calendar`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:X,strokeWidth:`.4`,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:X,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:X,opacity:`.2`})]});case`notification`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,b.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:X,opacity:`.25`})]});case`productCard`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:X,opacity:`.04`}),(0,b.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`profile`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`drawer`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z,opacity:`.15`})]});case`popover`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:X,strokeWidth:Z})]});case`logo`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,b.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`faq`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:X,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,b.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,b.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:X,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,b.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`gallery`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`checkbox`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:X,strokeWidth:Z,opacity:`.35`})]});case`radio`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:X,opacity:`.3`})]});case`slider`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:X,strokeWidth:Z})]});case`datePicker`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:X,opacity:`.12`}),(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:X,opacity:`.3`}),(0,b.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:X,opacity:`.2`})]});case`skeleton`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:X,opacity:`.08`}),(0,b.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:X,opacity:`.08`}),(0,b.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:X,opacity:`.08`})]});case`chip`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:X,opacity:`.08`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,b.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z,opacity:`.25`})]});case`icon`:return(0,b.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,b.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:X,strokeWidth:Z,opacity:`.3`})});case`spinner`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:X,strokeWidth:Z,opacity:`.12`}),(0,b.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:X,strokeWidth:Z,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,b.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`team`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z,opacity:`.5`}),(0,b.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,b.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.1`})]});case`login`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,b.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:X,opacity:`.2`})]});case`contact`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,b.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,b.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.2`})]});default:return null}}function Ma({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,b.jsx)(`div`,{ref:r,className:`${Y.placeScroll} ${i||``}`,children:ai.map(r=>(0,b.jsxs)(`div`,{className:Y.paletteSection,children:[(0,b.jsx)(`div`,{className:Y.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,b.jsxs)(`div`,{className:`${Y.paletteItem} ${e===r.type?Y.active:``} ${a?Y.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,b.jsx)(`div`,{className:Y.paletteItemIcon,children:(0,b.jsx)(ja,{type:r.type})}),(0,b.jsx)(`span`,{className:Y.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function Na({value:e,suffix:t}){let[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(t),[o,s]=(0,_.useState)(`up`),c=(0,_.useRef)(e),l=(0,_.useRef)(t),u=(0,_.useRef)(),d=n!==null&&i!==t;return(0,_.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=K(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,b.jsxs)(b.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,b.jsxs)(`span`,{className:Y.rollingWrap,children:[(0,b.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,b.jsxs)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.exitUp:Y.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,b.jsxs)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.enterUp:Y.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`span`,{className:Y.rollingWrap,children:[(0,b.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,b.jsx)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.exitUp:Y.exitDown}`,children:n},`o${n}-${e}`),(0,b.jsx)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.enterUp:Y.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function Pa({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(`exit`),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!0),T=(0,_.useRef)(0),E=(0,_.useRef)(``),D=(0,_.useRef)(0),O=(0,_.useRef)(),k=(0,_.useRef)(null),[A,j]=(0,_.useState)(``);(0,_.useEffect)(()=>(a?(g(!0),clearTimeout(O.current),cancelAnimationFrame(D.current),D.current=Jr(()=>{D.current=Jr(()=>{y(`enter`)})})):(cancelAnimationFrame(D.current),y(`exit`),clearTimeout(O.current),O.current=K(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(D.current)),[a]);let M=s>0||r>0,N=s+r;if(N>0&&(T.current=N,E.current=u?N===1?`Component`:`Components`:N===1?`Change`:`Changes`),(0,_.useEffect)(()=>{if(M)x?w(!1):(w(!0),S(!0),Jr(()=>{Jr(()=>{w(!1)})}));else{w(!0);let e=K(()=>S(!1),300);return()=>clearTimeout(e)}},[M]),(0,_.useEffect)(()=>{if(!h)return;let e=k.current;if(!e)return;let t=()=>j(Aa(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let P=[];return s>0&&P.push(`placed`),r>0&&P.push(`captured`),(0,b.jsxs)(`div`,{className:`${Y.palette} ${Y[v]} ${n?``:Y.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(O.current),g(!1),y(`exit`),o?.()))},children:[(0,b.jsxs)(`div`,{className:Y.paletteHeader,children:[(0,b.jsx)(`div`,{className:Y.paletteHeaderTitle,children:`Layout Mode`}),(0,b.jsxs)(`div`,{className:Y.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,b.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,b.jsxs)(`div`,{className:`${Y.canvasToggle} ${u?Y.active:``}`,onClick:()=>d(!u),children:[(0,b.jsx)(`span`,{className:Y.canvasToggleIcon,children:(0,b.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,b.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,b.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,b.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,b.jsx)(`span`,{className:Y.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,b.jsx)(`div`,{className:`${Y.wireframePurposeWrap} ${u?``:Y.collapsed}`,children:(0,b.jsx)(`div`,{className:Y.wireframePurposeInner,children:(0,b.jsx)(`textarea`,{className:Y.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,b.jsx)(Ma,{activeType:e,onSelect:t,onDragStart:l,scrollRef:k,fadeClass:A,blankCanvas:u}),x&&(0,b.jsx)(`div`,{className:`${Y.paletteFooterWrap} ${C?Y.footerHidden:``}`,children:(0,b.jsx)(`div`,{className:Y.paletteFooterInner,children:(0,b.jsx)(`div`,{className:Y.paletteFooterInnerContent,children:(0,b.jsxs)(`div`,{className:Y.paletteFooter,children:[(0,b.jsx)(`span`,{className:Y.paletteFooterCount,children:(0,b.jsx)(Na,{value:T.current,suffix:E.current})}),(0,b.jsx)(`button`,{className:Y.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function Fa(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Ia(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Fa(n)}return null}function La(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=Fa(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function Ra(e){let t=La(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=Ia(e,`svg`);if(n){let e=Fa(n);if(e instanceof HTMLElement)return{name:`graphic in ${Ra(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=Fa(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function za(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function Ba(e){let t=Fa(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function Va(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var Ha=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),Ua=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),Wa=new Set([`input`,`textarea`,`select`]),Ga=new Set([`img`,`video`,`canvas`,`svg`]),Ka=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function qa(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=Ua.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||Wa.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:Ga.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:Ka.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!Ha.has(i)&&(n[e]=i)}return n}var Ja=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function Ya(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of Ja){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!Ha.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function Xa(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function Za(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function Qa(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=Fa(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var $a=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),eo={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},to={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},no=new Set([`script`,`style`,`noscript`,`link`,`meta`]),ro=40;function io(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function ao(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:ao(n)} > ${t}:nth-child(${r})`}return t}function oo(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&eo[r])return eo[r];if(to[t])return to[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=Ra(e);return a.charAt(0).toUpperCase()+a.slice(1)}function so(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function co(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function lo(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(no.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<ro)return;let o=$a.has(n),s=e.getAttribute(`role`)&&eo[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=io(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:oo(e),tagName:n,selector:ao(e),role:e.getAttribute(`role`),className:so(e),textSnippet:co(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function uo(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=io(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:oo(e),tagName:e.tagName.toLowerCase(),selector:ao(e),role:e.getAttribute(`role`),className:so(e),textSnippet:co(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var fo={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},po=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],mo=24,ho=16,go=5;function _o(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<go&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<go&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<go?i:0,m=Math.abs(a)<go?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var vo=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function yo(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(vo.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=ho&&e.height>=ho)return t;t=t.parentElement}return null}function bo({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,_.useRef)(e);p.current=e;let[m,h]=(0,_.useState)(new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(d);(0,_.useEffect)(()=>{d!==void 0&&d!==y.current&&(y.current=d,f.length>0&&v(!0))},[d,f.length]);let x=(0,_.useRef)(c);(0,_.useEffect)(()=>{c!==x.current&&(x.current=c,h(new Set))},[c]);let[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(!1),E=(0,_.useRef)(!1),D=(0,_.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(E.current=!!t.note,C(e),T(!1))},[f]),O=(0,_.useCallback)(()=>{S&&(T(!0),K(()=>{C(null),T(!1)},150))},[S]),k=(0,_.useCallback)(n=>{S&&(t({...e,sections:f.map(e=>e.id===S?{...e,note:n.trim()||void 0}:e)}),O())},[S,f,e,t,O]);(0,_.useEffect)(()=>{r&&S&&O()},[r]);let[A,j]=(0,_.useState)(new Set),M=(0,_.useRef)(new Map),[N,P]=(0,_.useState)(null),[ee,F]=(0,_.useState)(null),[I,L]=(0,_.useState)([]),[R,te]=(0,_.useState)(0),z=(0,_.useRef)(null),B=(0,_.useRef)(new Set),V=(0,_.useRef)(new Map),[H,ne]=(0,_.useState)(new Map),[re,ie]=(0,_.useState)(new Map),ae=(0,_.useRef)(new Set),oe=(0,_.useRef)(new Map),se=(0,_.useRef)(s);se.current=s;let ce=(0,_.useRef)(l);ce.current=l;let le=(0,_.useRef)(u);le.current=u,(0,_.useEffect)(()=>{a&&h(new Set)},[a]);let[ue,de]=(0,_.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,_.useEffect)(()=>{if(!ue){let e=K(()=>de(!0),380);return()=>clearTimeout(e)}},[]);let fe=(0,_.useRef)(new Set);(0,_.useEffect)(()=>{fe.current=new Set(f.map(e=>e.selector))},[f]),(0,_.useEffect)(()=>{let e=()=>te(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,_.useEffect)(()=>{let e=e=>{if(z.current){P(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){P(null);return}if(t.closest(`[data-feedback-toolbar]`)){P(null);return}if(t.closest(`[data-design-placement]`)){P(null);return}if(t.closest(`[data-annotation-popup]`)){P(null);return}let n=yo(t);if(!n){P(null);return}for(let e of fe.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){P(null);return}}catch{}let r=n.getBoundingClientRect();P({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,_.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,_.useEffect)(()=>{let n=n=>{if(z.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=yo(r),a=!1;if(i)for(let e of fe.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=uo(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),se.current?.(l,s),P(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;z.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=_o({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);L(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),ne(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),ce.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),z.current=null,L([]),ne(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),le.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),se.current?.(t,s);return}}catch{}s||(h(new Set),se.current?.(new Set,!1))}else s||(h(new Set),se.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,_.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);j(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),K(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),j(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let pe=(0,_.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${Y.handle}`)||i.closest(`.${Y.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&se.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});z.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=_o({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,L(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}ne(b),ce.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),z.current=null,L([]),ne(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),le.current?.(d,p,!0);return}}le.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),me=(0,_.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),z.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(mo,c.width+t)),i.includes(`w`)&&(p=Math.max(mo,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(mo,c.height+n)),i.includes(`n`)&&(m=Math.max(mo,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-R}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),F({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),ne(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),F(null),z.current=null,ne(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,R]),he=(0,_.useCallback)(e=>{j(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),K(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),j(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),ge=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},_e=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},ve=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)V.current.has(e.id)||(_e(e)?V.current.set(e.id,`move`):ve(e)&&V.current.set(e.id,`resize`));for(let e of V.current.keys())f.some(t=>t.id===e)||V.current.delete(e);let ye=f.filter(e=>{try{if(A.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),be=ye.filter(e=>ge(e)),xe=ye.filter(e=>!ge(e)),Se=new Set(be.map(e=>e.id));for(let e of B.current)Se.has(e)||B.current.delete(e);let Ce=[...Se].sort().join(`,`);for(let e of be)oe.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,_.useEffect)(()=>{let e=ae.current;ae.current=Se;let t=new Map;for(let n of e)if(!Se.has(n)){if(!f.some(e=>e.id===n))continue;let e=oe.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),oe.current.delete(n))}if(t.size>0){ie(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=K(()=>{ie(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[Ce,f]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`${Y.rearrangeOverlay} ${n?``:Y.light} ${r?Y.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[N&&(0,b.jsx)(`div`,{className:Y.hoverHighlight,style:{left:N.x,top:N.y,width:N.w,height:N.h}}),xe.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-R,i=fo,a=m.has(e.id);return(0,b.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${Y.sectionOutline} ${a?Y.selected:``} ${g||r||A.has(e.id)?Y.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...ue?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>pe(t,e.id),onDoubleClick:()=>D(e.id),children:[(0,b.jsx)(`span`,{className:Y.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,b.jsx)(`span`,{className:`${Y.sectionAnnotation} ${e.note?Y.annotationVisible:``}`,children:(e.note&&M.current.set(e.id,e.note),e.note||M.current.get(e.id)||``)}),(0,b.jsxs)(`span`,{className:Y.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,b.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>he(e.id),children:`✕`}),po.map(t=>(0,b.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>me(n,e.id,t)},t))]},e.id)}),be.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-R,i=m.has(e.id),o=_e(e),s=ve(e);if(a&&!i)return null;let c=!B.current.has(e.id);return c&&B.current.add(e.id),(0,b.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${Y.ghostOutline} ${i?Y.selected:``} ${g||r||A.has(e.id)?Y.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...ue?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>pe(t,e.id),onDoubleClick:()=>D(e.id),children:[(0,b.jsx)(`span`,{className:Y.sectionLabel,style:{backgroundColor:fo.pill},children:e.label}),(0,b.jsx)(`span`,{className:`${Y.sectionAnnotation} ${e.note?Y.annotationVisible:``}`,children:(e.note&&M.current.set(e.id,e.note),e.note||M.current.get(e.id)||``)}),(0,b.jsxs)(`span`,{className:Y.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,b.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>he(e.id),children:`✕`}),po.map(t=>(0,b.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>me(n,e.id,t)},t)),(0,b.jsx)(`span`,{className:Y.ghostBadge,children:(()=>{let t=V.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,b.jsxs)(b.Fragment,{children:[`Suggested `,e,` `,(0,b.jsxs)(`span`,{className:Y.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of be){let n=H.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:A.has(t.id)})}for(let[t,n]of H)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of re)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,b.jsxs)(`svg`,{className:`${Y.connectorSvg} ${g||r?Y.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-R)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-R)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=H.has(e),x=y||i?1:.4,S=y||i?1:.5;return(0,b.jsxs)(`g`,{className:a?Y.connectorExiting:``,children:[(0,b.jsx)(`path`,{className:Y.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:x*p}),(0,b.jsx)(`circle`,{className:Y.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:S*p,filter:`url(#connDotShadow)`}),(0,b.jsx)(`circle`,{className:Y.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:S*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,b.jsx)(`defs`,{children:(0,b.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,b.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),S&&(()=>{let e=f.find(e=>e.id===S);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-R,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,b.jsx)($r,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:E.current?`Save`:`Set`,onSubmit:k,onCancel:O,onDelete:E.current?()=>{k(``)}:void 0,isExiting:w,lightMode:!n,style:u})})(),ee&&(0,b.jsx)(`div`,{className:Y.sizeIndicator,style:{left:ee.x,top:ee.y},"data-feedback-toolbar":!0,children:ee.text}),I.map((e,t)=>(0,b.jsx)(`div`,{className:Y.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-R,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var xo=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function So(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||xo.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:oo(e),selector:ao(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||xo.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:oo(n),selector:ao(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Co(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function wo(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function To(e,t){let n=t?Co(t):So(),r=wo(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Do(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Eo(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Eo(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Do(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Oo(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function ko(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Oo(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function Ao(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Oo(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var jo=15;function Mo(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<jo&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<jo&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function No(e){if(e.length<2)return[];let t=Mo(e.map(e=>({label:e.label,rect:e.originalRect}))),n=Mo(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function Po(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||xo.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:ao(t)}}}return{viewport:e,contentArea:null}}function Fo(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:ao(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function Io(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function Lo(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function Ro(e){let t=Fo(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function zo(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=oi[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=Po(t);a+=Lo(o),a+=`### Components
`,i.forEach((e,t)=>{let n=oi[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=ko(To(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=Io(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>oi[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=oi[t.type]?.label||t.type,o=oi[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=oi[n.type]?.label||n.type,s=oi[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=oi[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Bo(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=Po({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=Lo(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){a+=n&&r?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(a+=n&&r?`- Suggested: move and resize **${e.label}**
`:n?`- Suggested: move **${e.label}**
`:`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=To(i,s(`original`)),n=To(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${Ao(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=ko(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=Io(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=Ro(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=No(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var Vo=`feedback-annotations-`,Ho=7;function Uo(e){return`${Vo}${e}`}function Wo(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(Uo(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-Ho*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function Go(e,t){if(!(typeof window>`u`))try{localStorage.setItem(Uo(e),JSON.stringify(t))}catch{}}function Ko(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-Ho*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(Vo)){let n=r.slice(Vo.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function qo(e,t,n){Go(e,t.map(e=>({...e,_syncedTo:n})))}var Jo=`agentation-design-`;function Yo(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${Jo}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function Xo(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${Jo}${e}`,JSON.stringify(t))}catch{}}function Zo(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${Jo}${e}`)}catch{}}var Qo=`agentation-rearrange-`;function $o(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${Qo}${e}`);return t?JSON.parse(t):null}catch{return null}}function es(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${Qo}${e}`,JSON.stringify(t))}catch{}}function ts(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${Qo}${e}`)}catch{}}var ns=`agentation-wireframe-`;function rs(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${ns}${e}`);return t?JSON.parse(t):null}catch{return null}}function is(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${ns}${e}`,JSON.stringify(t))}catch{}}function as(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${ns}${e}`)}catch{}}var os=`agentation-session-`;function ss(e){return`${os}${e}`}function cs(e){if(typeof window>`u`)return null;try{return localStorage.getItem(ss(e))}catch{return null}}function ls(e,t){if(!(typeof window>`u`))try{localStorage.setItem(ss(e),t)}catch{}}function us(e){if(!(typeof window>`u`))try{localStorage.removeItem(ss(e))}catch{}}var ds=`${os}toolbar-hidden`;function fs(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(ds)===`1`}catch{return!1}}function ps(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(ds,`1`):sessionStorage.removeItem(ds)}catch{}}async function ms(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function hs(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function gs(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function _s(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function vs(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var ys={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},bs=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),xs=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Ss=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Cs(e){let t=e?.mode??`filtered`,n=bs;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...bs,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...xs,...e.skipPatterns]:xs,userPatterns:e?.userPatterns??Ss,filter:e?.filter}}function ws(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function Ts(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Es(e,t){let n=ws(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Ds(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Es(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Os=null,ks=new WeakMap;function As(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function js(){if(Os!==null)return Os;if(typeof document>`u`)return!1;if(document.body&&As(document.body))return Os=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&As(t))return Os=!0,!0}if(document.body){for(let e of document.body.children)if(As(e))return Os=!0,!0}return Os=!1,!1}var Ms={map:ks};function Ns(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function Ps(e){let t=Ns(e);return t?e[t]:null}function Fs(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Is(e){let{tag:t,type:n,elementType:r}=e;if(t===ys.HostComponent||t===ys.HostText||t===ys.HostHoistable||t===ys.HostSingleton||t===ys.Fragment||t===ys.Mode||t===ys.Profiler||t===ys.DehydratedFragment||t===ys.HostRoot||t===ys.HostPortal||t===ys.ScopeComponent||t===ys.OffscreenComponent||t===ys.LegacyHiddenComponent||t===ys.CacheComponent||t===ys.TracingMarkerComponent||t===ys.Throw||t===ys.ViewTransitionComponent||t===ys.ActivityComponent)return null;if(t===ys.ForwardRef){let e=r;if(e?.render){let t=Fs(e.render);if(t)return t}return e?.displayName?e.displayName:Fs(n)}if(t===ys.MemoComponent||t===ys.SimpleMemoComponent){let e=r;if(e?.type){let t=Fs(e.type);if(t)return t}return e?.displayName?e.displayName:Fs(n)}if(t===ys.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===ys.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===ys.LazyComponent){let e=r;return e?._status===1&&e._result?Fs(e._result):null}return t===ys.SuspenseComponent||t===ys.SuspenseListComponent?null:t===ys.IncompleteClassComponent||t===ys.IncompleteFunctionComponent||t===ys.FunctionComponent||t===ys.ClassComponent||t===ys.IndeterminateComponent?Fs(n):null}function Ls(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Rs(e,t){let n=Cs(t),r=n.mode===`all`;if(r){let t=Ms.map.get(e);if(t!==void 0)return t}if(!js()){let t={path:null,components:[]};return r&&Ms.map.set(e,t),t}let i=n.mode===`smart`?Ts(e):void 0,a=[];try{let t=Ps(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=Is(t);e&&!Ls(e)&&Ds(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&Ms.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&Ms.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&Ms.map.set(e,o),o}var zs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Bs(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function Vs(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Hs(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:Vs(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Vs(n._debugOwner)};n=n.return,r++}return null}function Us(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:Vs(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:Vs(t)}}}t=t.return,n++}return null}var Ws=new Map;function Gs(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===zs.FunctionComponent||t===zs.IndeterminateComponent)&&typeof n==`function`)return n;if(t===zs.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===zs.MemoComponent||t===zs.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function Ks(){let e=_.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function qs(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function Js(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function Ys(e){let t=Gs(e);if(!t)return null;if(Ws.has(t))return Ws.get(t);let n=Ks();if(!n)return Ws.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=qs(t.stack);n&&(i={fileName:Js(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:Vs(e)||void 0})}}}finally{n.set(r)}return Ws.set(t,i),i}function Xs(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=Ys(n);if(e)return e;n=n.return,r++}return null}function Zs(e){let t=Bs(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=Hs(t);if(n||=Us(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=Xs(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function Qs(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function $s(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=Zs(n);if(e.found)return e;n=n.parentElement,r++}return Zs(e)}var ec=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,tc={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=ec}var Q=tc,nc=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function rc(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var ic=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,ac={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=ic}var oc=ac;function sc({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,x=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,S=i?oc.exit:a?oc.clearing:o?``:oc.enter,C=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,b.jsxs)(`div`,{className:`${oc.marker} ${y?oc.multiSelect:``} ${S} ${v?oc.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:x,animationDelay:C},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,b.jsx)(Nr,{size:y?18:16}):(0,b.jsx)(Lr,{size:16}):(0,b.jsx)(`span`,{className:u!==null&&t>=u?oc.renumber:void 0,children:t+1}),s&&!l&&(0,b.jsxs)(`div`,{className:`${oc.markerTooltip} ${oc.enter}`,style:f,children:[(0,b.jsxs)(`span`,{className:oc.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,b.jsx)(`span`,{className:oc.markerNote,children:e.comment})]})]})}function cc({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,b.jsx)(`div`,{className:`${oc.marker} ${oc.pending} ${n?oc.multiSelect:``} ${r?oc.exit:oc.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,b.jsx)(wr,{size:12})})}function lc({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,b.jsx)(`div`,{className:`${oc.marker} ${t?oc.fixed:``} ${oc.hovered} ${n?oc.multiSelect:``} ${oc.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,b.jsx)(Nr,{size:n?12:10})})}var uc=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,dc={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=uc}var fc=dc,pc=({className:e=``,...t})=>(0,b.jsxs)(`div`,{className:`${fc.switchContainer} ${e}`,children:[(0,b.jsx)(`input`,{className:fc.switchInput,type:`checkbox`,...t}),(0,b.jsx)(`div`,{className:fc.switchThumb})]}),mc=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,hc={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=mc}var gc=hc,_c=({className:e=``,...t})=>(0,b.jsxs)(`div`,{className:`${gc.checkboxContainer} ${e}`,children:[(0,b.jsx)(`input`,{className:gc.checkboxInput,type:`checkbox`,...t}),(0,b.jsx)(`svg`,{className:gc.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,b.jsx)(`path`,{className:gc.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),vc=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,yc={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=vc}var bc=yc,xc=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,_.useId)();return(0,b.jsxs)(`div`,{className:`${bc.container} ${e}`,...a,children:[(0,b.jsx)(_c,{id:o,onChange:i,checked:r}),(0,b.jsx)(`label`,{className:bc.label,htmlFor:o,children:t}),n&&(0,b.jsx)(ii,{content:n})]})},Sc=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Cc={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=Sc}var $=Cc;function wc({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,b.jsx)(`div`,{className:`${$.settingsPanel} ${s?$.enter:$.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,b.jsxs)(`div`,{className:$.settingsPanelContainer,children:[(0,b.jsxs)(`div`,{className:`${$.settingsPage} ${l===`automations`?$.slideLeft:``}`,children:[(0,b.jsxs)(`div`,{className:$.settingsHeader,children:[(0,b.jsx)(`a`,{className:$.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,b.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,b.jsxs)(`p`,{className:$.settingsVersion,children:[`v`,`3.0.2`]}),(0,b.jsx)(`button`,{className:$.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,b.jsx)(`span`,{className:$.themeIconWrapper,children:(0,b.jsx)(`span`,{className:$.themeIcon,children:n?(0,b.jsx)(Fr,{size:20}):(0,b.jsx)(Ir,{size:20})},n?`sun`:`moon`)})})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`div`,{className:$.settingsSection,children:[(0,b.jsxs)(`div`,{className:$.settingsRow,children:[(0,b.jsxs)(`div`,{className:$.settingsLabel,children:[`Output Detail`,(0,b.jsx)(ii,{content:`Controls how much detail is included in the copied output`})]}),(0,b.jsxs)(`button`,{className:$.cycleButton,onClick:()=>{t({outputDetail:nc[(nc.findIndex(t=>t.value===e.outputDetail)+1)%nc.length].value})},children:[(0,b.jsx)(`span`,{className:$.cycleButtonText,children:nc.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,b.jsx)(`span`,{className:$.cycleDots,children:nc.map(t=>(0,b.jsx)(`span`,{className:`${$.cycleDot} ${e.outputDetail===t.value?$.active:``}`},t.value))})]})]}),(0,b.jsxs)(`div`,{className:`${$.settingsRow} ${$.settingsRowMarginTop} ${i?``:$.settingsRowDisabled}`,children:[(0,b.jsxs)(`div`,{className:$.settingsLabel,children:[`React Components`,(0,b.jsx)(ii,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,b.jsx)(pc,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,b.jsxs)(`div`,{className:`${$.settingsRow} ${$.settingsRowMarginTop}`,children:[(0,b.jsxs)(`div`,{className:$.settingsLabel,children:[`Hide Until Restart`,(0,b.jsx)(ii,{content:`Hides the toolbar until you open a new tab`})]}),(0,b.jsx)(pc,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`div`,{className:$.settingsSection,children:[(0,b.jsx)(`div`,{className:`${$.settingsLabel} ${$.settingsLabelMarker}`,children:`Marker Color`}),(0,b.jsx)(`div`,{className:$.colorOptions,children:kc.map(n=>(0,b.jsx)(`button`,{className:`${$.colorOption} ${e.annotationColorId===n.id?$.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`div`,{className:$.settingsSection,children:[(0,b.jsx)(xc,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,b.jsx)(xc,{className:$.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`button`,{className:$.settingsNavLink,onClick:()=>u(`automations`),children:[(0,b.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,b.jsxs)(`span`,{className:$.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,b.jsx)(`span`,{className:`${$.mcpNavIndicator} ${$[a]}`}),(0,b.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,b.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,b.jsxs)(`div`,{className:`${$.settingsPage} ${$.automationsPage} ${l===`automations`?$.slideIn:``}`,children:[(0,b.jsxs)(`button`,{className:$.settingsBackButton,onClick:()=>u(`main`),children:[(0,b.jsx)(zr,{size:16}),(0,b.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`div`,{className:$.settingsSection,children:[(0,b.jsxs)(`div`,{className:$.settingsRow,children:[(0,b.jsxs)(`span`,{className:$.automationHeader,children:[`MCP Connection`,(0,b.jsx)(ii,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,b.jsx)(`div`,{className:`${$.mcpStatusDot} ${$[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,b.jsxs)(`p`,{className:$.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,b.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:$.learnMoreLink,children:`Learn more`})]})]}),(0,b.jsx)(`div`,{className:$.divider}),(0,b.jsxs)(`div`,{className:`${$.settingsSection} ${$.settingsSectionGrow}`,children:[(0,b.jsxs)(`div`,{className:$.settingsRow,children:[(0,b.jsxs)(`span`,{className:$.automationHeader,children:[`Webhooks`,(0,b.jsx)(ii,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,b.jsxs)(`div`,{className:$.autoSendContainer,children:[(0,b.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${$.autoSendLabel} ${e.webhooksEnabled?$.active:``} ${e.webhookUrl?``:$.disabled}`,children:`Auto-Send`}),(0,b.jsx)(pc,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,b.jsx)(`p`,{className:$.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,b.jsx)(`textarea`,{className:$.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function Tc(e,t=`filtered`){let{name:n,path:r}=Ra(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=Rs(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var Ec=!1,Dc={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},Oc=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},kc=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...kc.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${kc.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${kc.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function Ac(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function jc(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function Mc(e){return e.status!==`resolved`&&e.status!==`dismissed`}function Nc(e){let t=Zs(e),n=t.found?t:$s(e);if(n.found&&n.source)return Qs(n.source,`path`)}function Pc({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)([]),[S,C]=(0,_.useState)(!0),[w,T]=(0,_.useState)(()=>fs()),[E,D]=(0,_.useState)(!1),O=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{let t=O.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[k,A]=(0,_.useState)(!1),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(null),[ee,F]=(0,_.useState)({x:0,y:0}),[I,L]=(0,_.useState)(null),[R,te]=(0,_.useState)(!1),[z,B]=(0,_.useState)(`idle`),[V,H]=(0,_.useState)(!1),[ne,re]=(0,_.useState)(!1),[ie,ae]=(0,_.useState)(null),[oe,se]=(0,_.useState)(null),[ce,le]=(0,_.useState)([]),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(null),[me,he]=(0,_.useState)(null),[ge,_e]=(0,_.useState)(null),[ve,ye]=(0,_.useState)([]),[be,xe]=(0,_.useState)(0),[Se,Ce]=(0,_.useState)(!1),[we,Te]=(0,_.useState)(!1),[Ee,De]=(0,_.useState)(!1),[Oe,ke]=(0,_.useState)(!1),[Ae,je]=(0,_.useState)(!1),[Me,Ne]=(0,_.useState)(`main`),[Pe,Fe]=(0,_.useState)(!1),[Ie,Le]=(0,_.useState)(!1),[Re,ze]=(0,_.useState)(!1),[U,Be]=(0,_.useState)([]),[Ve,He]=(0,_.useState)(null),Ue=(0,_.useRef)(!1),[We,Ge]=(0,_.useState)(!1),[Ke,qe]=(0,_.useState)(!1),[Je,Ye]=(0,_.useState)(1),[Xe,Ze]=(0,_.useState)(`new-page`),[Qe,$e]=(0,_.useState)(``),[et,tt]=(0,_.useState)(!1),[W,nt]=(0,_.useState)(null),rt=(0,_.useRef)(!1),it=(0,_.useRef)({rearrange:null,placements:[]}),at=(0,_.useRef)({rearrange:null,placements:[]}),[ot,st]=(0,_.useState)(0),[ct,lt]=(0,_.useState)(0),[ut,dt]=(0,_.useState)(0),[ft,pt]=(0,_.useState)(0),mt=(0,_.useRef)(new Set),ht=(0,_.useRef)(new Set),gt=(0,_.useRef)(null),_t=(0,_.useRef)(),vt=Ie&&h&&!Re&&We;(0,_.useEffect)(()=>{if(vt){qe(!1);let e=Jr(()=>{qe(!0)});return()=>cancelAnimationFrame(e)}qe(!1)},[vt]);let yt=(0,_.useRef)(new Map),bt=(0,_.useRef)(new Map),xt=(0,_.useRef)(),[St,Ct]=(0,_.useState)(!1),[wt,Tt]=(0,_.useState)([]),Et=(0,_.useRef)(wt);Et.current=wt;let[Dt,Ot]=(0,_.useState)(null),kt=(0,_.useRef)(null);(0,_.useRef)(!1),(0,_.useRef)([]),(0,_.useRef)(0),(0,_.useRef)(null),(0,_.useRef)(null),(0,_.useRef)(1);let[At,jt]=(0,_.useState)(!1),Mt=(0,_.useRef)(null),[Nt,Pt]=(0,_.useState)([]),Ft=(0,_.useRef)({cmd:!1,shift:!1}),It=()=>{Fe(!0)},Lt=()=>{Fe(!1)},Rt=()=>{At||(Mt.current=K(()=>jt(!0),850))},zt=()=>{Mt.current&&=(clearTimeout(Mt.current),null),jt(!1),Lt()};(0,_.useEffect)(()=>()=>{Mt.current&&clearTimeout(Mt.current)},[]);let[Bt,Vt]=(0,_.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Dc,...e,annotationColorId:kc.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Dc.annotationColorId}}catch{return Dc}}),[Ht,Ut]=(0,_.useState)(!0),[Wt,Gt]=(0,_.useState)(!1),Kt=()=>{O.current?.classList.add(Q.disableTransitions),Ut(e=>!e),Jr(()=>{O.current?.classList.remove(Q.disableTransitions)})},[qt,Jt]=(0,_.useState)(d??null),Yt=(0,_.useRef)(!1),[Xt,Zt]=(0,_.useState)(u?`connecting`:`disconnected`),[Qt,$t]=(0,_.useState)(null),[en,tn]=(0,_.useState)(!1),[nn,rn]=(0,_.useState)(null),an=(0,_.useRef)(!1),[on,sn]=(0,_.useState)(new Set),[cn,ln]=(0,_.useState)(new Set),[un,dn]=(0,_.useState)(!1),[fn,pn]=(0,_.useState)(!1),[mn,hn]=(0,_.useState)(!1),gn=(0,_.useRef)(null),_n=(0,_.useRef)(null),vn=(0,_.useRef)(null),yn=(0,_.useRef)(null),bn=(0,_.useRef)(!1),xn=(0,_.useRef)(0),Sn=(0,_.useRef)(null),Cn=(0,_.useRef)(null),wn=(0,_.useRef)(null),Tn=(0,_.useRef)(null),En=(0,_.useRef)(null),G=typeof window<`u`?window.location.pathname:`/`;(0,_.useEffect)(()=>{if(Oe)je(!0);else{Fe(!1),Ne(`main`);let e=K(()=>je(!1),0);return()=>clearTimeout(e)}},[Oe]);let Dn=h&&S&&!Ie;(0,_.useEffect)(()=>{if(Dn){M(!1),A(!0),sn(new Set);let e=K(()=>{sn(e=>{let t=new Set(e);return v.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}if(k){M(!0);let e=K(()=>{A(!1),M(!1)},250);return()=>clearTimeout(e)}},[Dn]),(0,_.useEffect)(()=>{Te(!0),xe(window.scrollY);let e=Wo(G);y(e.filter(Mc)),Ec||(Gt(!0),Ec=!0,K(()=>Gt(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&Ut(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&$t(t)}}catch{}},[G]),(0,_.useEffect)(()=>{we&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(Bt))},[Bt,we]),(0,_.useEffect)(()=>{we&&localStorage.setItem(`feedback-toolbar-theme`,Ht?`dark`:`light`)},[Ht,we]);let On=(0,_.useRef)(!1);(0,_.useEffect)(()=>{let e=On.current;On.current=en,e&&!en&&Qt&&we&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(Qt))},[en,Qt,we]),(0,_.useEffect)(()=>{!u||!we||Yt.current||(Yt.current=!0,Zt(`connecting`),(async()=>{try{let e=cs(G),t=d||e,n=!1;if(t)try{let e=await hs(u,t);Jt(e.id),Zt(`connected`),ls(G,e.id),n=!0;let r=Wo(G),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${G}`,n=(await Promise.allSettled(a.map(n=>gs(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];y(r.filter(Mc)),qo(G,r.filter(Mc),e.id)}else y(e.annotations.filter(Mc)),qo(G,e.annotations.filter(Mc),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),us(G)}if(!n){let e=await ms(u,typeof window<`u`?window.location.href:`/`);Jt(e.id),Zt(`connected`),ls(G,e.id),f?.(e.id);let t=Ko(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===G;r.push((async()=>{try{let n=s?e:await ms(u,o),r=(await Promise.allSettled(t.map(e=>gs(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(Mc);if(qo(i,r,n.id),s){let e=new Set(t.map(e=>e.id));y(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){Zt(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,we,f,G]),(0,_.useEffect)(()=>{if(!u||!we)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?Zt(`connected`):Zt(`disconnected`)}catch{Zt(`disconnected`)}};e();let t=qr(e,1e4);return()=>clearInterval(t)},[u,we]),(0,_.useEffect)(()=>{if(!u||!we||!qt)return;let e=new EventSource(`${u}/sessions/${qt}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of yt.current)if(n===e){yt.current.delete(t),Be(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of bt.current)if(n===e){bt.current.delete(t),nt(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else ln(t=>new Set(t).add(e)),K(()=>{y(t=>t.filter(t=>t.id!==e)),ln(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,we,qt]),(0,_.useEffect)(()=>{if(!u||!we)return;let e=Cn.current===`disconnected`,t=Xt===`connected`;Cn.current=Xt,e&&t&&(async()=>{try{let e=Wo(G);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${G}`,n=qt,r=[];if(n)try{r=(await hs(u,n)).annotations}catch{n=null}n||(n=(await ms(u,t)).id,Jt(n),ls(G,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>gs(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(Mc);y(i),qo(G,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[Xt,u,we,qt,G]);let kn=(0,_.useCallback)(()=>{E||(D(!0),ke(!1),g(!1),K(()=>{ps(!0),T(!0),D(!1)},400))},[E]);(0,_.useEffect)(()=>{if(!n||!we||!e||e.length===0||v.length>0)return;let r=[];return r.push(K(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(K(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=Ra(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:za(t),cssClasses:Va(t)};y(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,we,e,t]),(0,_.useEffect)(()=>{let e=()=>{xe(window.scrollY),Ce(!0),En.current&&clearTimeout(En.current),En.current=K(()=>{Ce(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),En.current&&clearTimeout(En.current)}},[]),(0,_.useEffect)(()=>{we&&v.length>0?qt?qo(G,v,qt):Go(G,v):we&&v.length===0&&localStorage.removeItem(Uo(G))},[v,G,we,qt]),(0,_.useEffect)(()=>{if(we&&!Ue.current){Ue.current=!0;let e=Yo(G);e.length>0&&Be(e)}},[we,G]),(0,_.useEffect)(()=>{we&&Ue.current&&!We&&(U.length>0?Xo(G,U):Zo(G))},[U,G,we,We]),(0,_.useEffect)(()=>{if(we&&!rt.current){rt.current=!0;let e=$o(G);if(e){let t={...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))};nt(t)}}},[we,G]),(0,_.useEffect)(()=>{we&&rt.current&&!We&&(W?es(G,W):ts(G))},[W,G,we,We]);let An=(0,_.useRef)(!1);(0,_.useEffect)(()=>{if(we&&!An.current){An.current=!0;let e=rs(G);e&&(at.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&$e(e.purpose))}},[we,G]),(0,_.useEffect)(()=>{if(!we||!An.current)return;let e=at.current;We?(W?.sections?.length??0)>0||U.length>0||Qe?is(G,{rearrange:W,placements:U,purpose:Qe}):as(G):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||Qe?is(G,{rearrange:e.rearrange,placements:e.placements,purpose:Qe}):as(G)},[W,U,Qe,We,G,we]),(0,_.useEffect)(()=>{Ie&&!W&&nt({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ie,W]),(0,_.useEffect)(()=>{if(!u||!qt)return;let e=yt.current,t=new Set(U.map(e=>e.id));for(let t of U){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:G;gs(u,qt,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&vs(u,r).catch(()=>{}))},[U,u,qt,G]),(0,_.useEffect)(()=>{if(!(!u||!qt))return xt.current&&clearTimeout(xt.current),xt.current=K(()=>{let e=bt.current;if(!W||W.sections.length===0){for(let[,t]of e)t&&vs(u,t).catch(()=>{});e.clear();return}let t=new Set(W.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:G;for(let t of W.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),vs(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?_s(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),gs(u,qt,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&vs(u,r).catch(()=>{}))},300),()=>{xt.current&&clearTimeout(xt.current)}},[W,u,qt,G]);let jn=(0,_.useRef)(new Map);(0,_.useLayoutEffect)(()=>{let e=W?.sections??[],t=new Set;if((Ie||Re)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!jn.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),jn.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of jn.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,jn.current.delete(e),K(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[W,Ie,Re,h]),(0,_.useEffect)(()=>()=>{for(let[,e]of jn.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,K(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}jn.current.clear()},[]);let Mn=(0,_.useCallback)(()=>{ze(!0),Le(!1),He(null),clearTimeout(_t.current),_t.current=K(()=>{ze(!1)},300)},[]),Nn=(0,_.useCallback)(()=>{Ie&&(ze(!0),Le(!1),He(null),clearTimeout(_t.current),_t.current=K(()=>{ze(!1)},300)),g(!1)},[Ie]),Pn=(0,_.useCallback)(()=>{Ee||(Xr(),De(!0))},[Ee]),Fn=(0,_.useCallback)(()=>{Ee&&(Zr(),De(!1))},[Ee]),In=(0,_.useCallback)(()=>{Ee?Fn():Pn()},[Ee,Pn,Fn]),Ln=(0,_.useCallback)(()=>{if(Nt.length===0)return;let e=Nt[0],t=e.element,n=Nt.length>1,r=Nt.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=Nt.slice(0,5).map(e=>e.name).join(`, `),i=Nt.length>5?` +${Nt.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=Nt[Nt.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=jc(o);L({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${Nt.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:Nt.map(e=>e.element),targetElement:o,fullPath:Qa(t),accessibility:Za(t),computedStyles:Ya(t),computedStylesObj:qa(t),nearbyElements:Ba(t),cssClasses:Va(t),nearbyText:za(t),sourceFile:Nc(t)})}else{let n=r[0],i=jc(t);L({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:Qa(t),accessibility:Za(t),computedStyles:Ya(t),computedStylesObj:qa(t),nearbyElements:Ba(t),cssClasses:Va(t),nearbyText:za(t),reactComponents:e.reactComponents,sourceFile:Nc(t)})}Pt([]),P(null)},[Nt]);(0,_.useEffect)(()=>{h||(L(null),he(null),_e(null),ye([]),P(null),ke(!1),Pt([]),Ft.current={cmd:!1,shift:!1},Ee&&Fn())},[h,Ee,Fn]),(0,_.useEffect)(()=>()=>{Zr()},[]),(0,_.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,_.useEffect)(()=>{if(Dt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Dt,h]),(0,_.useEffect)(()=>{if(!h||I||St||Ie)return;let e=e=>{if(Ia(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){P(null);return}let t=Ac(e.clientX,e.clientY);if(!t||Ia(t,`[data-feedback-toolbar]`)){P(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=Tc(t,`off`),o=t.getBoundingClientRect();P({element:n,elementName:r,elementPath:i,rect:o,reactComponents:a}),F({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,I,St,Ie,`off`,wt]);let Rn=(0,_.useCallback)(e=>{if(he(e),ae(null),se(null),le([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=Ac(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}ye(t),_e(null)}else if(e.boundingBox){let t=e.boundingBox,n=Ac(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;_e(r<.5||i<.5?null:n)}else _e(null);ye([])}else _e(null),ye([])},[]);(0,_.useEffect)(()=>{if(!h||St||Ie)return;let e=e=>{if(bn.current){bn.current=!1;return}let t=e.composedPath()[0]||e.target;if(Ia(t,`[data-feedback-toolbar]`)||Ia(t,`[data-annotation-popup]`)||Ia(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!I&&!me){e.preventDefault(),e.stopPropagation();let t=Ac(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=Tc(t,`off`),o=Nt.findIndex(e=>e.element===t);Pt(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=Ia(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(Bt.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),I){if(n&&!Bt.blockInteractions)return;e.preventDefault(),wn.current?.shake();return}if(me){if(n&&!Bt.blockInteractions)return;e.preventDefault(),Tn.current?.shake();return}e.preventDefault();let r=Ac(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=Tc(r,`off`),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=jc(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=qa(r),m=Ya(r);L({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:za(r),cssClasses:Va(r),isFixed:l,fullPath:Qa(r),accessibility:Za(r),computedStyles:m,computedStylesObj:p,nearbyElements:Ba(r),reactComponents:o??void 0,sourceFile:Nc(r),targetElement:r}),P(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,St,Ie,I,me,Bt.blockInteractions,`off`,Nt]),(0,_.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(Ft.current.cmd=!0),e.key===`Shift`&&(Ft.current.shift=!0)},t=e=>{let t=Ft.current.cmd&&Ft.current.shift;e.key===`Meta`&&(Ft.current.cmd=!1),e.key===`Shift`&&(Ft.current.shift=!1);let n=Ft.current.cmd&&Ft.current.shift;t&&!n&&Nt.length>0&&Ln()},n=()=>{Ft.current={cmd:!1,shift:!1},Pt([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,Nt,Ln]),(0,_.useEffect)(()=>{if(!h||I||St||Ie)return;let e=e=>{let t=e.composedPath()[0]||e.target;Ia(t,`[data-feedback-toolbar]`)||Ia(t,`[data-annotation-marker]`)||Ia(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),gn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,I,St,Ie]),(0,_.useEffect)(()=>{if(!h||I)return;let e=e=>{if(!gn.current)return;let t=e.clientX-gn.current.x,n=e.clientY-gn.current.y,r=t*t+n*n;if(!mn&&r>=64&&(_n.current=gn.current,hn(!0),e.preventDefault()),(mn||r>=64)&&_n.current){if(vn.current){let t=Math.min(_n.current.x,e.clientX),n=Math.min(_n.current.y,e.clientY),r=Math.abs(e.clientX-_n.current.x),i=Math.abs(e.clientY-_n.current.y);vn.current.style.transform=`translate(${t}px, ${n}px)`,vn.current.style.width=`${r}px`,vn.current.style.height=`${i}px`}let t=Date.now();if(t-xn.current<50)return;xn.current=t;let n=_n.current.x,r=_n.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(Ia(e,`[data-feedback-toolbar]`)||Ia(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(yn.current){let e=yn.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=Q.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,I,mn,8]),(0,_.useEffect)(()=>{if(!h)return;let e=e=>{let t=mn,n=_n.current;if(mn&&n){bn.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||Ia(e,`[data-feedback-toolbar]`)||Ia(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>Ra(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=qa(i),o=Ya(i);L({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:Qa(i),accessibility:Za(i),computedStyles:o,computedStylesObj:a,nearbyElements:Ba(i),cssClasses:Va(i),nearbyText:za(i),sourceFile:Nc(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&L({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}P(null)}else t&&(bn.current=!0);gn.current=null,_n.current=null,hn(!1),yn.current&&(yn.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,mn]);let zn=(0,_.useCallback)(async(e,t,n)=>{let r=Bt.webhookUrl||p;if(!r||!Bt.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,Bt.webhookUrl,Bt.webhooksEnabled]),Bn=(0,_.useCallback)(e=>{if(!I)return;let t={id:Date.now().toString(),x:I.x,y:I.y,comment:e,element:I.element,elementPath:I.elementPath,timestamp:Date.now(),selectedText:I.selectedText,boundingBox:I.boundingBox,nearbyText:I.nearbyText,cssClasses:I.cssClasses,isMultiSelect:I.isMultiSelect,isFixed:I.isFixed,fullPath:I.fullPath,accessibility:I.accessibility,computedStyles:I.computedStyles,nearbyElements:I.nearbyElements,reactComponents:I.reactComponents,sourceFile:I.sourceFile,elementBoundingBoxes:I.elementBoundingBoxes,...u&&qt?{sessionId:qt,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};y(e=>[...e,t]),Sn.current=t.id,K(()=>{Sn.current=null},300),K(()=>{sn(e=>new Set(e).add(t.id))},250),r?.(t),zn(`annotation.add`,{annotation:t}),dn(!0),K(()=>{L(null),dn(!1)},150),window.getSelection()?.removeAllRanges(),u&&qt&&gs(u,qt,t).then(e=>{e.id!==t.id&&(y(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),sn(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[I,r,zn,u,qt]),Vn=(0,_.useCallback)(()=>{dn(!0),K(()=>{L(null),dn(!1)},150)},[]),Hn=(0,_.useCallback)(e=>{let t=v.findIndex(t=>t.id===e),n=v[t];me?.id===e&&(pn(!0),K(()=>{he(null),_e(null),ye([]),pn(!1)},150)),de(e),ln(t=>new Set(t).add(e)),n&&(i?.(n),zn(`annotation.delete`,{annotation:n})),u&&vs(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),K(()=>{y(t=>t.filter(t=>t.id!==e)),ln(t=>{let n=new Set(t);return n.delete(e),n}),de(null),t<v.length-1&&(pe(t),K(()=>pe(null),200))},150)},[v,me,i,zn,u]),Un=(0,_.useCallback)(e=>{if(!e){ae(null),se(null),le([]);return}if(ae(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}le(t),se(null)}else if(e.boundingBox){let t=e.boundingBox,n=Ac(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;se(r<.5||i<.5?null:n)}else se(null);le([])}else se(null),le([])},[]),Wn=(0,_.useCallback)(e=>{if(!me)return;let t={...me,comment:e};y(e=>e.map(e=>e.id===me.id?t:e)),a?.(t),zn(`annotation.update`,{annotation:t}),u&&_s(u,me.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),pn(!0),K(()=>{he(null),_e(null),ye([]),pn(!1)},150)},[me,a,zn,u]),Gn=(0,_.useCallback)(()=>{pn(!0),K(()=>{he(null),_e(null),ye([]),pn(!1)},150)},[]),Kn=(0,_.useCallback)(()=>{let e=v.length,t=U.length>0||!!W;if(e===0&&wt.length===0&&!t)return;if(o?.(v),zn(`annotations.clear`,{annotations:v}),u){Promise.all(v.map(e=>vs(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of yt.current)e&&vs(u,e).catch(()=>{});yt.current.clear();for(let[,e]of bt.current)e&&vs(u,e).catch(()=>{});bt.current.clear()}re(!0),H(!0),Tt([]);let n=kt.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(U.length>0||W)&&(dt(e=>e+1),pt(e=>e+1),K(()=>{Be([]),nt(null)},200)),We&&Ge(!1),Qe&&$e(``),at.current={rearrange:null,placements:[]},as(G),K(()=>{y([]),sn(new Set),localStorage.removeItem(Uo(G)),re(!1)},e*30+200),K(()=>H(!1),1500)},[G,v,wt,U,W,We,Qe,o,zn,u]),qn=(0,_.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:G,t=Ie&&We,n;if(t){if(U.length===0&&!W&&!Qe)return;n=``}else{if(n=rc(v,e,Bt.outputDetail),!n&&wt.length===0&&U.length===0&&!W)return;n||=`## Page Feedback: ${e}
`}if(!t&&wt.length>0){let e=new Set;for(let t of v)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=kt.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<wt.length;t++){if(e.has(t))continue;let n=wt[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],C=[p];for(let e=b;e<a.length-1;e+=b)C.push(a[e]);C.push(m);for(let e of C){let t=Ac(e.x,e.y);if(!t||x.has(t)||Ia(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=Ra(t);S.includes(n)||S.push(n)}let w=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,T;T=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${w})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${w})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${w})`:`Drawing at ${w}`,r.push(T)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((U.length>0||t&&Qe)&&(n+=`
`+zo(U,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:We,wireframePurpose:Qe||void 0},Bt.outputDetail)),W){let e=Bo(W,Bt.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),te(!0),K(()=>te(!1),2e3),Bt.autoClearAfterCopy&&K(()=>Kn(),500)},[v,wt,U,W,We,Ie,Xe,Qe,G,Bt.outputDetail,`off`,Bt.autoClearAfterCopy,Kn,l,s]),Jn=(0,_.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:G,t=rc(v,e,Bt.outputDetail);if(!t&&U.length===0&&!W)return;if(t||=`## Page Feedback: ${e}
`,U.length>0&&(t+=`
`+zo(U,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:We,wireframePurpose:Qe||void 0},Bt.outputDetail)),W){let e=Bo(W,Bt.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,v),B(`sending`),await new Promise(e=>K(e,150));let n=await zn(`submit`,{output:t,annotations:v},!0);B(n?`sent`:`failed`),K(()=>B(`idle`),2500),n&&Bt.autoClearAfterCopy&&K(()=>Kn(),500)},[c,zn,v,U,W,We,Xe,G,Bt.outputDetail,`off`,Bt.autoClearAfterCopy,Kn]);(0,_.useEffect)(()=>{if(!nn)return;let e=e=>{let t=e.clientX-nn.x,n=e.clientY-nn.y,r=Math.sqrt(t*t+n*n);if(!en&&r>10&&tn(!0),en||r>10){let e=nn.toolbarX+t,r=nn.toolbarY+n,i=20-(337-(h?Xt===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),$t({x:e,y:r})}},t=()=>{en&&(an.current=!0),tn(!1),rn(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[nn,en,h,Xt]);let Yn=(0,_.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=Qt?.x??n.left,i=Qt?.y??n.top;rn({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[Qt]);if((0,_.useEffect)(()=>{if(!Qt)return;let e=()=>{let e=Qt.x,t=Qt.y,n=20-(337-(h?Xt===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==Qt.x||t!==Qt.y)&&$t({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[Qt,h,Xt]),(0,_.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(Ie){Ve?He(null):Mn();return}if(St){Ct(!1);return}if(Nt.length>0){Pt([]);return}I||h&&(It(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),It(),h?Nn():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),It(),In()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),It(),St&&Ct(!1),Oe&&ke(!1),I&&Vn(),Ie?Mn():Le(!0)),(e.key===`h`||e.key===`H`)&&v.length>0&&(e.preventDefault(),It(),C(e=>!e)),(e.key===`c`||e.key===`C`)&&(v.length>0||U.length>0||W)&&(e.preventDefault(),It(),qn()),(e.key===`x`||e.key===`X`)&&(v.length>0||U.length>0||W)&&(e.preventDefault(),It(),Kn(),U.length>0&&Be([]),W&&nt(null)),e.key===`s`||e.key===`S`)){let t=Oc(Bt.webhookUrl)||Oc(p||``);v.length>0&&t&&z===`idle`&&(e.preventDefault(),It(),Jn())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,St,Ie,Ve,U,W,I,v.length,Bt.webhookUrl,p,z,Jn,In,qn,Kn,Nt]),!we||w)return null;let Xn=v.length>0,Zn=v.filter(e=>!cn.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),Qn=Zn.length>0,$n=v.filter(e=>cn.has(e.id)),er=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-200/2;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,x.createPortal)((0,b.jsxs)(`div`,{ref:O,style:{display:`contents`},"data-agentation-theme":Ht?`dark`:`light`,"data-agentation-accent":Bt.annotationColorId,"data-agentation-root":``,children:[(0,b.jsx)(`div`,{className:`${Q.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Qt?{left:Qt.x,top:Qt.y,right:`auto`,bottom:`auto`}:void 0,children:(0,b.jsxs)(`div`,{className:`${Q.toolbarContainer} ${h?Q.expanded:Q.collapsed} ${Wt?Q.entrance:``} ${E?Q.hiding:``} ${!Bt.webhooksEnabled&&(Oc(Bt.webhookUrl)||Oc(p||``))?Q.serverConnected:``}`,onClick:h?void 0:e=>{if(an.current){an.current=!1,e.preventDefault();return}g(!0)},onMouseDown:Yn,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,b.jsxs)(`div`,{className:`${Q.toggleContent} ${h?Q.hidden:Q.visible}`,children:[(0,b.jsx)(Tr,{size:24}),Qn&&(0,b.jsx)(`span`,{className:`${Q.badge} ${h?Q.fadeOut:``} ${Wt?Q.entrance:``}`,children:Zn.length})]}),(0,b.jsxs)(`div`,{className:`${Q.controlsContent} ${h?Q.visible:Q.hidden} ${Qt&&Qt.y<100?Q.tooltipBelow:``} ${Pe||Oe?Q.tooltipsHidden:``} ${At?Q.tooltipsInSession:``}`,onMouseEnter:Rt,onMouseLeave:zt,children:[(0,b.jsxs)(`div`,{className:`${Q.buttonWrapper} ${Qt&&Qt.x<120?Q.buttonWrapperAlignLeft:``}`,children:[(0,b.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),It(),In()},"data-active":Ee,children:(0,b.jsx)(Ar,{size:24,isPaused:Ee})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[Ee?`Resume animations`:`Pause animations`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`P`})]})]}),(0,b.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,b.jsx)(`button`,{className:`${Q.controlButton} ${Ht?``:Q.light}`,onClick:e=>{e.stopPropagation(),It(),St&&Ct(!1),Oe&&ke(!1),I&&Vn(),Ie?Mn():Le(!0)},"data-active":Ie,style:Ie&&We?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,b.jsx)(Br,{size:21})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[Ie?`Exit layout mode`:`Layout mode`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`L`})]})]}),(0,b.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,b.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),It(),C(!S)},disabled:!Xn||Ie,children:(0,b.jsx)(kr,{size:24,isOpen:S})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[S?`Hide markers`:`Show markers`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`H`})]})]}),(0,b.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,b.jsx)(`button`,{className:`${Q.controlButton} ${R?Q.statusShowing:``}`,onClick:e=>{e.stopPropagation(),It(),qn()},disabled:Ie&&We?U.length===0&&!W?.sections?.length:!Xn&&wt.length===0&&U.length===0&&!W?.sections?.length,"data-active":R,children:(0,b.jsx)(Dr,{size:24,copied:R,tint:Ie&&We&&(U.length>0||W?.sections?.length)?`#f97316`:void 0})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[Ie&&We?`Copy layout`:`Copy feedback`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`C`})]})]}),(0,b.jsxs)(`div`,{className:`${Q.buttonWrapper} ${Q.sendButtonWrapper} ${h&&!Bt.webhooksEnabled&&(Oc(Bt.webhookUrl)||Oc(p||``))?Q.sendButtonVisible:``}`,children:[(0,b.jsxs)(`button`,{className:`${Q.controlButton} ${z===`sent`||z===`failed`?Q.statusShowing:``}`,onClick:e=>{e.stopPropagation(),It(),Jn()},disabled:!Xn||!Oc(Bt.webhookUrl)&&!Oc(p||``)||z===`sending`,"data-no-hover":z===`sent`||z===`failed`,tabIndex:Oc(Bt.webhookUrl)||Oc(p||``)?0:-1,children:[(0,b.jsx)(Or,{size:24,state:z}),Xn&&z===`idle`&&(0,b.jsx)(`span`,{className:Q.buttonBadge,children:v.length})]}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Send Annotations`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`S`})]})]}),(0,b.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,b.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),It(),Kn()},disabled:!Xn&&wt.length===0&&U.length===0&&!W?.sections?.length,"data-danger":!0,children:(0,b.jsx)(Mr,{size:24})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Clear all`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`X`})]})]}),(0,b.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,b.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),It(),Ie&&Mn(),ke(!Oe)},children:(0,b.jsx)(jr,{size:24})}),u&&Xt!==`disconnected`&&(0,b.jsx)(`span`,{className:`${Q.mcpIndicator} ${Q[Xt]} ${Oe?Q.hidden:``}`,title:Xt===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,b.jsx)(`span`,{className:Q.buttonTooltip,children:`Settings`})]}),(0,b.jsx)(`div`,{className:Q.divider}),(0,b.jsxs)(`div`,{className:`${Q.buttonWrapper} ${Qt&&typeof window<`u`&&Qt.x>window.innerWidth-120?Q.buttonWrapperAlignRight:``}`,children:[(0,b.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),It(),Nn()},children:(0,b.jsx)(Pr,{size:24})}),(0,b.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Exit`,(0,b.jsx)(`span`,{className:Q.shortcut,children:`Esc`})]})]})]}),(0,b.jsx)(Pa,{visible:Ie&&h,activeType:Ve,onSelect:e=>{He(Ve===e?null:e)},isDarkMode:Ht,sectionCount:W?.sections.length??0,onDetectSections:()=>{let e=lo(),t=W?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector)),i=[...t,...r],a=[...W?.originalOrder??[],...r.map(e=>e.id)];nt({sections:i,originalOrder:a,detectedAt:Date.now()})},placementCount:U.length,onClearPlacements:()=>{dt(e=>e+1),pt(e=>e+1),K(()=>{nt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:We,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(it.current={rearrange:W,placements:U},nt(at.current.rearrange||t),Be(at.current.placements),He(null)):(at.current={rearrange:W,placements:U},nt(it.current.rearrange||t),Be(it.current.placements)),Ge(e)},wireframePurpose:Qe,onWireframePurposeChange:$e,Tooltip:ii,onDragStart:(e,t)=>{t.preventDefault();let n=q[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${Y.dragPreview}${We?` ${Y.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};Be(e=>[...e,c]),He(null),mt.current=new Set,st(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,b.jsx)(wc,{settings:Bt,onSettingsChange:e=>Vt(t=>({...t,...e})),isDarkMode:Ht,onToggleTheme:Kt,isDevMode:!1,connectionStatus:Xt,endpoint:u,isVisible:Ae,toolbarNearBottom:!!Qt&&Qt.y<230,settingsPage:Me,onSettingsPageChange:Ne,onHideToolbar:kn})]})}),(Ie||Re)&&(0,b.jsx)(`div`,{className:`${Y.blankCanvas} ${Ke?Y.visible:``} ${et?Y.gridActive:``}`,style:{"--canvas-opacity":Je},"data-feedback-toolbar":!0}),Ie&&We&&Ke&&(0,b.jsxs)(`div`,{className:Y.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,b.jsxs)(`div`,{className:Y.wireframeOpacityRow,children:[(0,b.jsx)(`span`,{className:Y.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,b.jsx)(`input`,{type:`range`,className:Y.wireframeOpacitySlider,min:0,max:1,step:.01,value:Je,onChange:e=>Ye(Number(e.target.value))})]}),(0,b.jsxs)(`div`,{className:Y.wireframeNoticeTitleRow,children:[(0,b.jsx)(`span`,{className:Y.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,b.jsx)(`span`,{className:Y.wireframeNoticeDivider}),(0,b.jsx)(`button`,{className:Y.wireframeStartOver,onClick:()=>{dt(e=>e+1),nt({sections:[],originalOrder:[],detectedAt:Date.now()}),at.current={rearrange:null,placements:[]},$e(``),as(G)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,b.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(Ie||Re)&&(0,b.jsx)(ka,{placements:U,onChange:Be,activeComponent:Re?null:Ve,onActiveComponentChange:He,isDarkMode:Ht,exiting:Re,onInteractionChange:tt,passthrough:!Ve,extraSnapRects:W?.sections.map(e=>e.currentRect),deselectSignal:ot,clearSignal:ut,wireframe:We,onSelectionChange:(e,t)=>{mt.current=e,t||(ht.current=new Set,lt(e=>e+1))},onDragMove:(e,t)=>{let n=ht.current;if(!(!n.size||!W)){if(!gt.current){gt.current=new Map;for(let e of W.sections)n.has(e.id)&&gt.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of W.sections){if(!n.has(r.id)||!gt.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=ht.current,i=gt.current;if(gt.current=null,!(!r.size||!W||!i)){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&nt(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(Ie||Re)&&W&&(0,b.jsx)(bo,{rearrangeState:W,onChange:nt,isDarkMode:Ht,exiting:Re,blankCanvas:We,extraSnapRects:U.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:ft,deselectSignal:ct,onSelectionChange:(e,t)=>{ht.current=e,t||(mt.current=new Set,st(e=>e+1))},onDragMove:(e,t)=>{let n=mt.current;if(n.size){if(!gt.current){gt.current=new Map;for(let e of U)n.has(e.id)&&gt.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=mt.current,i=gt.current;if(gt.current=null,!(!r.size||!i)){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&Be(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,b.jsx)(`canvas`,{ref:kt,className:`${Q.drawCanvas} ${St?Q.active:``}`,style:{opacity:+!!Dn,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,b.jsxs)(`div`,{className:Q.markersLayer,"data-feedback-toolbar":!0,children:[k&&Zn.filter(e=>!e.isFixed).map((e,t,n)=>(0,b.jsx)(sc,{annotation:e,globalIndex:Zn.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:j,isClearing:ne,isAnimated:on.has(e.id),isHovered:!j&&ie===e.id,isDeleting:ue===e.id,isEditingAny:!!me,renumberFrom:fe,markerClickBehavior:Bt.markerClickBehavior,tooltipStyle:er(e),onHoverEnter:e=>!j&&e.id!==Sn.current&&Un(e),onHoverLeave:()=>Un(null),onClick:e=>Bt.markerClickBehavior===`delete`?Hn(e.id):Rn(e),onContextMenu:Rn},e.id)),k&&!j&&$n.filter(e=>!e.isFixed).map(e=>(0,b.jsx)(lc,{annotation:e},e.id))]}),(0,b.jsxs)(`div`,{className:Q.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[k&&Zn.filter(e=>e.isFixed).map((e,t,n)=>(0,b.jsx)(sc,{annotation:e,globalIndex:Zn.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:j,isClearing:ne,isAnimated:on.has(e.id),isHovered:!j&&ie===e.id,isDeleting:ue===e.id,isEditingAny:!!me,renumberFrom:fe,markerClickBehavior:Bt.markerClickBehavior,tooltipStyle:er(e),onHoverEnter:e=>!j&&e.id!==Sn.current&&Un(e),onHoverLeave:()=>Un(null),onClick:e=>Bt.markerClickBehavior===`delete`?Hn(e.id):Rn(e),onContextMenu:Rn},e.id)),k&&!j&&$n.filter(e=>e.isFixed).map(e=>(0,b.jsx)(lc,{annotation:e,fixed:!0},e.id))]}),h&&(0,b.jsxs)(`div`,{className:Q.overlay,"data-feedback-toolbar":!0,style:I||me?{zIndex:99999}:void 0,children:[N?.rect&&!I&&!Se&&!mn&&(0,b.jsx)(`div`,{className:`${Q.hoverHighlight} ${Q.enter}`,style:{left:N.rect.left,top:N.rect.top,width:N.rect.width,height:N.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),Nt.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=Nt.length>1;return(0,b.jsx)(`div`,{className:r?Q.multiSelectOutline:Q.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),ie&&!I&&(()=>{let e=v.find(e=>e.id===ie);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return ce.length>0?ce.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,b.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,b.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:e.x,top:e.y-be,width:e.width,height:e.height}},`hover-outline-${t}`));let t=oe&&document.contains(oe)?oe.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-be,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,b.jsx)(`div`,{className:`${r?Q.multiSelectOutline:Q.singleSelectOutline} ${Q.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),N&&!I&&!Se&&!mn&&(0,b.jsxs)(`div`,{className:`${Q.hoverTooltip} ${Q.enter}`,style:{left:Math.max(8,Math.min(ee.x,window.innerWidth-100)),top:Math.max(ee.y-(N.reactComponents?48:32),8)},children:[N.reactComponents&&(0,b.jsx)(`div`,{className:Q.hoverReactPath,children:N.reactComponents}),(0,b.jsx)(`div`,{className:Q.hoverElementName,children:N.elementName})]}),I&&(0,b.jsxs)(b.Fragment,{children:[I.multiSelectElements?.length?I.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,b.jsx)(`div`,{className:`${Q.multiSelectOutline} ${un?Q.exit:Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):I.targetElement&&document.contains(I.targetElement)?(()=>{let e=I.targetElement.getBoundingClientRect();return(0,b.jsx)(`div`,{className:`${Q.singleSelectOutline} ${un?Q.exit:Q.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():I.boundingBox&&(0,b.jsx)(`div`,{className:`${I.isMultiSelect?Q.multiSelectOutline:Q.singleSelectOutline} ${un?Q.exit:Q.enter}`,style:{left:I.boundingBox.x,top:I.boundingBox.y-be,width:I.boundingBox.width,height:I.boundingBox.height,...I.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=I.x,t=I.isFixed?I.y:I.y-be;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(cc,{x:e,y:t,isMultiSelect:I.isMultiSelect,isExiting:un}),(0,b.jsx)($r,{ref:wn,element:I.element,selectedText:I.selectedText,computedStyles:I.computedStylesObj,placeholder:I.element===`Area selection`?`What should change in this area?`:I.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:Bn,onCancel:Vn,isExiting:un,lightMode:!Ht,accentColor:I.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),me&&(0,b.jsxs)(b.Fragment,{children:[me.elementBoundingBoxes?.length?ve.length>0?ve.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,b.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):me.elementBoundingBoxes.map((e,t)=>(0,b.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:e.x,top:e.y-be,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=ge&&document.contains(ge)?ge.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:me.boundingBox?{x:me.boundingBox.x,y:me.isFixed?me.boundingBox.y:me.boundingBox.y-be,width:me.boundingBox.width,height:me.boundingBox.height}:null;return t?(0,b.jsx)(`div`,{className:`${me.isMultiSelect?Q.multiSelectOutline:Q.singleSelectOutline} ${Q.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...me.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,b.jsx)($r,{ref:Tn,element:me.element,selectedText:me.selectedText,computedStyles:Xa(me.computedStyles),placeholder:`Edit your feedback...`,initialValue:me.comment,submitLabel:`Save`,onSubmit:Wn,onCancel:Gn,onDelete:()=>Hn(me.id),isExiting:fn,lightMode:!Ht,accentColor:me.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=me.isFixed?me.y:me.y-be;return{left:Math.max(160,Math.min(window.innerWidth-160,me.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),mn&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{ref:vn,className:Q.dragSelection}),(0,b.jsx)(`div`,{ref:yn,className:Q.highlightsContainer})]})]})]}),document.body)}function Fc({enabled:e=!1}){return e?(0,b.jsx)(Pc,{}):null}var Ic=`https://docs.google.com/spreadsheets/d/e/2PACX-1vSoyFDRrMUP7nCIqMVPCHiVxBxC5evqUfwmMhpq_zVUznEuaqor2Lnb0wMLnlWYlIIihf8_7oMSamDQ/pub?output=csv`,Lc=`https://docs.google.com/spreadsheets/d/e/2PACX-1vSoyFDRrMUP7nCIqMVPCHiVxBxC5evqUfwmMhpq_zVUznEuaqor2Lnb0wMLnlWYlIIihf8_7oMSamDQ/pub?gid=1133508969&single=true&output=csv`,Rc=`AIzaSyCCJuqCzR1TyMz86V8AWUUnu9MB7vbjncI`,zc={width:`100%`,height:`100%`},Bc={lat:36.5,lng:127.8};function Vc(e){let t=!1,n=``,r=[];for(let i=0;i<e.length;i++){let a=e[i];a===`"`&&e[i+1]===`"`?(n+=`"`,i++):a===`"`?t=!t:a===`,`&&!t?(r.push(n),n=``):n+=a}return r.push(n),r}var Hc=`M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 12 2 12 2C12 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z`;function Uc({value:e,unit:t=``,isInteger:n=!1}){if(e==null||isNaN(e))return null;let r=parseFloat(e);if(r===0)return(0,b.jsx)(`span`,{style:{color:`#9ca3af`,fontSize:`0.78em`,marginLeft:2,fontWeight:500},children:`(-)`});let i=r>0,a=n?Math.abs(Math.round(r)).toLocaleString():Math.abs(r).toFixed(1);return(0,b.jsxs)(`span`,{style:{color:i?`#60a5fa`:`#f87171`,fontSize:`0.78em`,marginLeft:2,fontWeight:600,letterSpacing:`-0.02em`},children:[`(`,i?`▲`:`▼`,a,t,`)`]})}function Wc({data:e,color:t,label:n}){let r={t:18,r:16,b:22,l:16},i=270-r.l-r.r,a=95-r.t-r.b;if(!e||e.length===0)return(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:95,color:`#6b7280`,fontSize:`0.8rem`},children:`데이터 수집 중...`});let o=e.map(e=>e.value),s=Math.max(...o,1),c=Math.min(...o),l=s-c,u=Math.max(l*.4,4),d=s+u,f=Math.max(0,c-u),p=d-f||1,m=t=>r.l+t/(e.length-1||1)*i,h=e=>r.t+a-(e-f)/p*a,g=e.map((e,t)=>`${m(t)},${h(e.value)}`).join(` `),_=`M${m(0)},${h(e[0].value)} `+e.map((e,t)=>`L${m(t)},${h(e.value)}`).join(` `)+` L${m(e.length-1)},${r.t+a} L${m(0)},${r.t+a} Z`;return(0,b.jsxs)(`svg`,{width:270,height:95,style:{overflow:`visible`,display:`block`,margin:`0 auto`},children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`grad-${n}`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:t,stopOpacity:`0.3`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:t,stopOpacity:`0.01`})]})}),(0,b.jsx)(`path`,{d:_,fill:`url(#grad-${n})`}),(0,b.jsx)(`polyline`,{points:g,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinejoin:`round`,strokeLinecap:`round`}),e.map((e,n)=>{let r=m(n),i=h(e.value);return(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`circle`,{cx:r,cy:i,r:3,fill:`#ffffff`,stroke:t,strokeWidth:`1.5`}),(0,b.jsx)(`text`,{x:r,y:i-7,textAnchor:`middle`,fill:`#e2e8f0`,fontSize:`9.5`,fontWeight:`700`,children:e.value.toLocaleString()})]},n)}),e.map((e,t)=>(0,b.jsx)(`text`,{x:m(t),y:92,textAnchor:`middle`,fill:`#e2e8f0`,fontSize:`9.5`,fontWeight:`700`,children:e.date.slice(5)},t))]})}function Gc(e,t){let n=(e||``).toString().trim();if(n===`심각`)return`severe`;if(n===`경계`)return`alert`;if(n===`주의`)return`warn`;if(n===`관심`)return`safe`;let r=parseFloat(t);return!isNaN(r)&&r>0?r>60?`safe`:r>50?`warn`:r>40?`alert`:`severe`:`safe`}function Kc(){let[e,t]=(0,_.useState)({national:null,bonbuList:[],jisaMap:{},allReservoirs:[]}),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(600),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(``),[y,x]=(0,_.useState)(()=>localStorage.getItem(`agentation_enabled`)===`true`),S=(0,_.useRef)(0),C=(0,_.useRef)(null),w=()=>{S.current+=1,C.current&&clearTimeout(C.current),S.current>=5?(x(e=>{let t=!e;return localStorage.setItem(`agentation_enabled`,String(t)),alert(t?`✨ [Agentation] 피드백 툴바가 활성화되었습니다!`:`🔒 [Agentation] 피드백 툴바가 비활성화되었습니다.`),t}),S.current=0):C.current=setTimeout(()=>{S.current=0},3e3)},[T,E]=(0,_.useState)(7.2),[D,O]=(0,_.useState)(null),k=(0,_.useRef)(null),A=(0,_.useCallback)(function(e){k.current=e;try{e.data.loadGeoJson(`https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-geo.json`),e.data.setStyle({fillColor:`transparent`,fillOpacity:0,strokeColor:`#dc2626`,strokeWeight:1.5,strokeOpacity:.8})}catch(e){console.warn(`GeoJSON 경계선 로드 실패:`,e)}},[]),j=()=>{k.current&&E(k.current.getZoom())},M=(0,_.useCallback)(()=>{if(k.current){let e=k.current.getBounds();if(e){let t=e.getSouthWest(),n=e.getNorthEast();O({swLat:t.lat(),swLng:t.lng(),neLat:n.lat(),neLng:n.lng()})}E(k.current.getZoom())}},[]),N=(0,_.useCallback)((e=!1)=>{e?a(!0):s(!0);let n=`${Ic}&t=${Date.now()}`;fetch(n).then(e=>e.text()).then(e=>{let n=e.split(`
`).filter(e=>e.trim()!==``),r=null,i={},a={},o=[];for(let e=1;e<n.length;e++){let t=Vc(n[e]),s=(t[0]||``).trim(),c=(t[1]||``).trim(),l=parseFloat(t[6]),u=parseFloat(t[7]),d=parseFloat(t[8]),f=parseFloat(t[9]),p=t[13],m=parseFloat(t[14]),h=parseFloat(t[15]);if(s.startsWith(`전국`)&&c.includes(`전체 평균`)){r={cr_rate:l,cr_change:isNaN(u)?0:u,nr_rate:d,per_rate:f,counts:{safe:0,warn:0,alert:0,severe:0}};continue}if(s.includes(`개소`)&&c.includes(`평균`)&&!c.includes(`전체`)){let e=s.split(` `)[0];i[e]={name:e,rate:l,crChange:isNaN(u)?0:u,nrRate:d,perRate:f,riskStr:p,counts:{safe:0,warn:0,alert:0,severe:0}},a[e]||(a[e]=[]);continue}if(s.length>0&&!s.includes(`개소`)&&s!==`전국`&&c.includes(`평균`)){let e=c.split(` 평균`)[0],t=Gc(p,f);(isNaN(m)||isNaN(h)||m===0||h===0)&&(m=36.5,h=127.8);let n={type:`jisa`,name:e,fullName:c,rate:l,perRate:f,riskStr:p,riskClass:t,lat:m,lng:h,counts:{safe:0,warn:0,alert:0,severe:0}};a[s]||(a[s]=[]),a[s].push(n);continue}if(s.length>0&&s!==`전국`&&!c.includes(`평균`)&&t[2]){let e=t[2].trim();if(isNaN(m)||isNaN(h)||m<30||h<120)continue;let n=Gc(p,f),u={type:`reservoir`,bonbu:s,jisa:c,name:e,effVol:parseFloat(t[4])||0,curVol:parseFloat(t[5])||0,rate:l,nrRate:d,perRate:f,riskStr:p,riskClass:n,lat:m,lng:h};if(o.push(u),i[s]&&(i[s].counts[n]+=1),a[s]){let e=a[s].find(e=>e.name===c);e&&e.counts&&(e.counts[n]+=1)}r&&(r.counts[n]+=1)}}t({national:r,bonbuList:Object.values(i),jisaMap:a,allReservoirs:o}),v(new Date().toLocaleString()),l(600)}).catch(e=>{console.error(`로딩 실패:`,e)}).finally(()=>{a(!1),s(!1)});let i=`${Lc}&t=${Date.now()}`;fetch(i).then(e=>e.text()).then(e=>{let t=e.split(`
`).filter(e=>e.trim()!==``),n=[];for(let e=1;e<t.length;e++){let r=Vc(t[e]);n.push({date:(r[0]||``).trim(),gubun:(r[1]||``).trim(),bonbu:(r[2]||``).trim(),jisa:(r[3]||``).trim(),rate:parseFloat(r[4]),change:parseFloat(r[5]),perRate:parseFloat(r[6]),safe:parseInt(r[7])||0,warn:parseInt(r[8])||0,alert:parseInt(r[9])||0,severe:parseInt(r[10])||0,total:parseInt(r[11])||0,neededRain:parseFloat(r[12])||0,forecastRain:parseFloat(r[13])||0,fulfillment:parseFloat(r[14])||0,reliefStatus:(r[15]||``).trim()})}r(n)}).catch(e=>console.warn(`요약스냅샷 로딩 실패(URL 미설정 가능):`,e))},[]);(0,_.useEffect)(()=>{N(!0);let e=setInterval(()=>N(!1),6e5),t=setInterval(()=>{l(e=>e>0?e-1:0)},1e3);return()=>{clearInterval(e),clearInterval(t)}},[N]);let P=(e,t,n)=>{let r={safe:`#0066ff`,warn:`#ffcc00`,alert:`#ff6600`,severe:`#ff0000`},i=r[t]||r.safe;if(e===`jisa`)return{path:`M -15,-15 h30 v30 h-30 z`,fillColor:`#ffffff`,fillOpacity:.01,strokeOpacity:0,scale:1};{let e=.75;return e=n<=6?.25:n>=11?.75:.25+(n-6)*.1,{path:Hc,fillColor:i,fillOpacity:.85,strokeColor:`#ffffff`,strokeWeight:1,scale:e,anchor:window.google?new window.google.maps.Point(12,12):null}}},ee=[{featureType:`administrative.province`,elementType:`geometry.stroke`,stylers:[{color:`#dc2626`},{weight:1},{visibility:`on`}]},{featureType:`administrative.province`,elementType:`labels`,stylers:[{visibility:`on`},{color:`#ffffff`}]},{featureType:`administrative.country`,elementType:`geometry.stroke`,stylers:[{color:`#ffffff`},{weight:2}]},{featureType:`poi`,elementType:`labels`,stylers:[{visibility:`off`}]},{featureType:`poi.business`,stylers:[{visibility:`off`}]},{featureType:`road`,elementType:`labels`,stylers:[{visibility:`off`}]},{featureType:`transit`,elementType:`labels`,stylers:[{visibility:`off`}]},{featureType:`administrative.locality`,elementType:`labels.text.fill`,stylers:[{color:`#9ca3af`},{lightness:30}]},{featureType:`administrative.locality`,elementType:`labels.text.stroke`,stylers:[{visibility:`off`}]}],F=Object.values(e.jisaMap).flat(),I=_.useMemo(()=>T<11||!D?[]:e.allReservoirs.filter(e=>e.lat>=D.swLat&&e.lat<=D.neLat&&e.lng>=D.swLng&&e.lng<=D.neLng),[T,D,e.allReservoirs]),L=new Date().toISOString().slice(0,10),R=[...new Set(n.map(e=>e.date))].sort(),te=R.indexOf(L),z=(te>0?R[te-1]:(R.length,null))||(R.length>=2?R[R.length-2]:null),B=()=>n.find(e=>e.date===z&&e.gubun===`전국`),H=e=>n.find(t=>t.date===z&&t.gubun===`본부`&&t.bonbu===e),ne=(e,t)=>n.find(n=>n.date===z&&n.gubun===`지사`&&n.bonbu===e&&n.jisa===t),re=t=>{let r=R.slice(-10);return r.map((i,a)=>{if(a===r.length-1&&e.national?.counts&&e.national.counts[t]!==void 0)return{date:i,value:e.national.counts[t]};let o=n.find(e=>e.date===i&&e.gubun===`전국`);return{date:i,value:o&&o[t]||0}})},ie=B(),ae=ie?{safe:(e.national?.counts?.safe||0)-ie.safe,warn:(e.national?.counts?.warn||0)-ie.warn,alert:(e.national?.counts?.alert||0)-ie.alert,severe:(e.national?.counts?.severe||0)-ie.severe}:null;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Fc,{enabled:y}),(0,b.jsxs)(`div`,{className:`map-container`,children:[(0,b.jsx)(de,{googleMapsApiKey:Rc,children:(0,b.jsxs)(V,{mapContainerStyle:zc,center:Bc,zoom:7.2,mapTypeId:`satellite`,options:{disableDefaultUI:!0,zoomControl:!0,styles:ee},onLoad:A,onZoomChanged:j,onIdle:M,children:[!i&&(0,b.jsxs)(b.Fragment,{children:[I.map((e,t)=>(0,b.jsx)(Re,{position:{lat:e.lat,lng:e.lng},icon:P(`reservoir`,e.riskClass,T),onClick:()=>p(e),...T>=11?{label:{text:`${e.name}, ${e.rate}%`,color:`#ffffff`,fontSize:`11px`,className:`reservoir-label`}}:{}},`res-${e.lat}-${e.lng}`)),F.map((e,t)=>{let r=e.riskClass===`warn`||e.riskClass===`alert`||e.riskClass===`severe`?n.find(t=>t.date===L&&t.gubun===`지사`&&t.jisa===e.name)||n.find(t=>t.gubun===`지사`&&t.jisa===e.name):null,i=``,a=``;if(r&&r.neededRain!==void 0){let t=e.perRate&&e.perRate>0?e.rate/(e.perRate/100):65,n=r.neededRain>0?Math.min(1.5,r.forecastRain/r.neededRain):1,o=Math.max(0,t-e.rate),s=Math.min(100,e.rate+o*n),c=Math.round(s/t*100);c>60?(i=`●`,a=`relief`):c>50?(i=`●`,a=`partial`):(i=`●`,a=`severe`)}return(0,b.jsxs)(_.Fragment,{children:[(0,b.jsx)(Re,{position:{lat:e.lat,lng:e.lng},icon:P(`jisa`,e.riskClass,T),onClick:()=>p(e),onMouseOver:()=>h(e),onMouseOut:()=>h(null),zIndex:999,label:{text:e.name,color:`#ffffff`,fontSize:`13px`,className:`jisa-label jisa-label-${e.riskClass}`}},`jisa-${t}`),i&&(0,b.jsx)(Xn,{position:{lat:e.lat+.02,lng:e.lng+.02},mapPaneName:Xn.OVERLAY_MOUSE_TARGET,children:(0,b.jsx)(`div`,{className:`map-jisa-badge-overlay ${a}`,children:i})})]},`jisa-frag-${t}`)})]}),(m||f&&f.type===`jisa`)&&(0,b.jsx)(Xn,{position:{lat:(m||f).lat,lng:(m||f).lng},mapPaneName:Xn.OVERLAY_MOUSE_TARGET,children:(0,b.jsx)(`div`,{className:`custom-jisa-tooltip`,children:(()=>{let e=m||f,t=e.riskClass===`warn`||e.riskClass===`alert`||e.riskClass===`severe`,r=n.find(t=>t.date===L&&t.gubun===`지사`&&t.jisa===e.name)||n.find(t=>t.gubun===`지사`&&t.jisa===e.name),i=100;if(r&&r.neededRain!==void 0){let t=e.perRate&&e.perRate>0?e.rate/(e.perRate/100):65,n=r.neededRain>0?Math.min(1.5,r.forecastRain/r.neededRain):1,a=Math.max(0,t-e.rate),o=Math.min(100,e.rate+a*n);i=Math.round(o/t*100)}let a=t&&r?i>60?{label:`● 해소`,color:`#0891b2`,bg:`#ecfeff`,border:`#67e8f9`}:i>50?{label:`● 미흡`,color:`#d97706`,bg:`#fffbeb`,border:`#fcd34d`}:{label:`● 부족`,color:`#e11d48`,bg:`#fff1f2`,border:`#fda4af`}:null;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`tooltip-header`,children:[(0,b.jsx)(`span`,{className:`title`,children:e.name}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,b.jsx)(`span`,{style:{fontWeight:`800`,fontSize:`12px`,padding:`2px 8px`,borderRadius:`10px`,background:e.riskClass===`severe`?`rgba(239,68,68,0.2)`:e.riskClass===`alert`?`rgba(249,115,22,0.2)`:e.riskClass===`warn`?`rgba(245,158,11,0.2)`:`rgba(59,130,246,0.2)`,color:e.riskClass===`severe`?`#ef4444`:e.riskClass===`alert`?`#f97316`:e.riskClass===`warn`?`#f59e0b`:`#3b82f6`,border:`1px solid ${e.riskClass===`severe`?`#ef4444`:e.riskClass===`alert`?`#f97316`:e.riskClass===`warn`?`#f59e0b`:`#3b82f6`}`},children:e.riskStr}),(0,b.jsx)(`button`,{className:`tooltip-close-btn`,onClick:e=>{e.stopPropagation(),h(null),f&&f.type===`jisa`&&p(null)},children:`✕`})]})]}),(0,b.jsxs)(`div`,{className:`tooltip-body`,children:[(0,b.jsxs)(`div`,{className:`tooltip-stat-row`,children:[(0,b.jsxs)(`span`,{children:[`현재 저수율: `,(0,b.jsxs)(`strong`,{children:[e.rate,`%`]})]}),(0,b.jsxs)(`span`,{children:[`평년대비: `,(0,b.jsxs)(`strong`,{children:[e.perRate,`%`]})]})]}),(0,b.jsxs)(`div`,{className:`tooltip-counts`,children:[(0,b.jsx)(`div`,{style:{color:`#64748b`,fontSize:`11px`,display:`flex`,justifyContent:`space-between`},children:(0,b.jsxs)(`span`,{children:[`총 `,(0,b.jsxs)(`strong`,{style:{color:`#0f172a`},children:[((e.counts?.safe||0)+(e.counts?.warn||0)+(e.counts?.alert||0)+(e.counts?.severe||0)).toLocaleString(),`개소`]})]})}),(0,b.jsxs)(`div`,{className:`counts-row`,children:[(0,b.jsxs)(`span`,{style:{color:`#2563eb`,fontWeight:700},children:[`관심 `,(e.counts?.safe||0).toLocaleString()]}),(0,b.jsxs)(`span`,{style:{color:`#d97706`,fontWeight:700},children:[`주의 `,(e.counts?.warn||0).toLocaleString()]}),(0,b.jsxs)(`span`,{style:{color:`#ea580c`,fontWeight:700},children:[`경계 `,(e.counts?.alert||0).toLocaleString()]}),(0,b.jsxs)(`span`,{style:{color:`#dc2626`,fontWeight:700},children:[`심각 `,(e.counts?.severe||0).toLocaleString()]})]})]}),t&&r&&(0,b.jsxs)(`div`,{style:{marginTop:`6px`,paddingTop:`6px`,borderTop:`1px solid #e2e8f0`,display:`flex`,flexDirection:`column`,gap:`4px`},children:[a&&(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,b.jsxs)(`span`,{style:{fontSize:`11.5px`,fontWeight:`800`,padding:`2px 8px`,borderRadius:`6px`,color:a.color,background:a.bg,border:`1px solid ${a.border}`},children:[a.label,` (예상 평년대비 `,i,`%)`]})}),(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`11px`,color:`#475569`,fontWeight:600,marginTop:`2px`},children:[(0,b.jsxs)(`span`,{children:[`필요 강수량: `,(0,b.jsxs)(`strong`,{style:{color:`#1d4ed8`},children:[r.neededRain,`mm`]})]}),(0,b.jsxs)(`span`,{children:[`3일 예상: `,(0,b.jsxs)(`strong`,{style:{color:`#047857`},children:[r.forecastRain,`mm`]})]})]})]})]})]})})()})}),f&&f.type===`reservoir`&&(0,b.jsx)(Xn,{position:{lat:f.lat,lng:f.lng},mapPaneName:Xn.OVERLAY_MOUSE_TARGET,children:(0,b.jsxs)(`div`,{className:`custom-reservoir-tooltip`,children:[(0,b.jsxs)(`div`,{className:`tooltip-header`,children:[(0,b.jsxs)(`span`,{className:`title`,children:[`💧 `,f.name]}),(0,b.jsx)(`span`,{style:{fontWeight:`bold`,fontSize:`13px`,color:f.riskClass===`severe`?`#ff0000`:f.riskClass===`alert`?`#ff6600`:f.riskClass===`warn`?`#ffcc00`:`#0066ff`},children:f.riskStr})]}),(0,b.jsxs)(`div`,{className:`tooltip-body`,children:[(0,b.jsxs)(`div`,{className:`tooltip-stat`,children:[(0,b.jsx)(`span`,{children:`유효저수량`}),(0,b.jsxs)(`strong`,{children:[f.effVol.toLocaleString(),` 톤`]})]}),(0,b.jsxs)(`div`,{className:`tooltip-stat`,children:[(0,b.jsx)(`span`,{children:`현재저수량`}),(0,b.jsxs)(`strong`,{children:[f.curVol.toLocaleString(),` 톤`]})]}),(0,b.jsx)(`div`,{className:`tooltip-divider`}),(0,b.jsxs)(`div`,{className:`tooltip-stat`,children:[(0,b.jsx)(`span`,{children:`저수율`}),(0,b.jsxs)(`strong`,{children:[f.rate,`%`]})]}),(0,b.jsx)(`div`,{className:`tooltip-divider`}),(0,b.jsxs)(`div`,{className:`tooltip-stat`,children:[(0,b.jsx)(`span`,{children:`평년저수율`}),(0,b.jsxs)(`strong`,{children:[f.nrRate,`%`]})]}),(0,b.jsxs)(`div`,{className:`tooltip-stat`,children:[(0,b.jsx)(`span`,{children:`평년대비`}),(0,b.jsxs)(`strong`,{children:[f.perRate,`%`]})]})]}),(0,b.jsx)(`button`,{className:`tooltip-close-btn`,onClick:e=>{e.stopPropagation(),p(null)},children:`✕`})]})})]})}),(0,b.jsxs)(`div`,{className:`drought-legend-vertical-card glass-panel`,children:[(0,b.jsx)(`div`,{className:`legend-card-header`,children:(0,b.jsx)(`span`,{children:`🌤️ 가뭄해소 예측 아이콘 범례`})}),(0,b.jsx)(`table`,{className:`legend-table`,children:(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{className:`badge-col`,children:(0,b.jsx)(`span`,{className:`badge relief`,children:`● 해소`})}),(0,b.jsx)(`td`,{className:`desc-col`,children:`평년 60% 초과 예상`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{className:`badge-col`,children:(0,b.jsx)(`span`,{className:`badge partial`,children:`● 미흡`})}),(0,b.jsx)(`td`,{className:`desc-col`,children:`평년 50% 초과 예상`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{className:`badge-col`,children:(0,b.jsx)(`span`,{className:`badge severe`,children:`● 부족`})}),(0,b.jsx)(`td`,{className:`desc-col`,children:`평년 50% 이하 지속`})]})]})}),(0,b.jsx)(`div`,{className:`legend-footer-note`,children:`* 3일 예상 강수량 적용`})]})]}),(0,b.jsxs)(`header`,{className:`header-bar glass-panel`,children:[(0,b.jsxs)(`div`,{className:`header-left`,children:[(0,b.jsx)(`span`,{style:{fontSize:`28px`,marginRight:`10px`},children:`💧`}),(0,b.jsx)(`h1`,{onClick:w,style:{margin:0,fontWeight:800,fontSize:`1.5rem`,textShadow:`0 2px 4px rgba(0,0,0,0.5)`,cursor:`pointer`,userSelect:`none`},title:`연속 5회 클릭 시 피드백 툴바 토글`,children:`한국농어촌공사 가뭄상황실`})]}),(0,b.jsx)(`div`,{className:`header-center`,children:e.national&&(0,b.jsxs)(`div`,{className:`header-national`,children:[(0,b.jsx)(`span`,{className:`header-national-label`,children:`전국 종합`}),(0,b.jsxs)(`span`,{className:`header-national-rate`,children:[`저수율 `,(0,b.jsxs)(`strong`,{children:[e.national.cr_rate,`%`]}),(0,b.jsx)(Uc,{value:e.national.cr_change,unit:``})]}),(0,b.jsxs)(`span`,{className:`header-national-rate`,children:[`평년대비 `,(0,b.jsxs)(`strong`,{children:[e.national.per_rate,`%`]})]}),(0,b.jsx)(`span`,{className:`header-national-divider`,children:`│`}),(0,b.jsxs)(`span`,{className:`header-national-counts`,children:[`총 `,(0,b.jsx)(`strong`,{style:{color:`#fff`},children:(e.national.counts.safe+e.national.counts.warn+e.national.counts.alert+e.national.counts.severe).toLocaleString()}),` `,`관심 `,(0,b.jsx)(`strong`,{style:{color:`#0066ff`},children:e.national.counts.safe.toLocaleString()}),ae&&(0,b.jsx)(Uc,{value:ae.safe,isInteger:!0}),` `,`주의 `,(0,b.jsx)(`strong`,{style:{color:`#ffcc00`},children:e.national.counts.warn.toLocaleString()}),ae&&(0,b.jsx)(Uc,{value:ae.warn,isInteger:!0}),` `,`경계 `,(0,b.jsx)(`strong`,{style:{color:`#ff6600`},children:e.national.counts.alert.toLocaleString()}),ae&&(0,b.jsx)(Uc,{value:ae.alert,isInteger:!0}),` `,`심각 `,(0,b.jsx)(`strong`,{style:{color:`#ff0000`},children:e.national.counts.severe.toLocaleString()}),ae&&(0,b.jsx)(Uc,{value:ae.severe,isInteger:!0})]})]})}),(0,b.jsx)(`div`,{className:`header-right`,children:(0,b.jsxs)(`span`,{className:`header-badge`,children:[`업데이트: `,g]})})]}),(0,b.jsx)(`aside`,{className:`sidebar glass-panel`,children:(0,b.jsx)(`div`,{className:`sidebar-list`,children:i?(0,b.jsx)(`div`,{style:{padding:`20px`,textAlign:`center`},children:`데이터 로딩중...`}):e.bonbuList.map(t=>{let n=`관심`,r=`status-safe`;return t.riskStr===`심각`?(n=`심각`,r=`status-alert`):t.riskStr===`경계`?(n=`경계`,r=`status-warn`):t.riskStr===`주의`&&(n=`주의`,r=`status-warn`),(0,b.jsxs)(_.Fragment,{children:[(0,b.jsxs)(`div`,{className:`bonbu-card ${u===t.name?`active`:``}`,onClick:()=>d(t.name===u?null:t.name),children:[(0,b.jsxs)(`div`,{className:`card-left`,children:[(0,b.jsx)(`h3`,{children:t.name}),(0,b.jsx)(`div`,{className:`overall-risk ${r}`,children:n})]}),(0,b.jsxs)(`div`,{className:`card-right`,children:[(0,b.jsxs)(`div`,{className:`card-right-top`,children:[(0,b.jsxs)(`span`,{children:[`현재 `,(0,b.jsxs)(`strong`,{children:[t.rate,`%`]}),(0,b.jsx)(Uc,{value:t.crChange})]}),(0,b.jsxs)(`span`,{children:[`평년대비 `,(0,b.jsxs)(`strong`,{children:[t.perRate>0?t.perRate.toFixed(1):`0.0`,`%`]})]})]}),(0,b.jsx)(`div`,{className:`card-right-bottom`,children:(()=>{let e=H(t.name),n=e?{safe:t.counts.safe-e.safe,warn:t.counts.warn-e.warn,alert:t.counts.alert-e.alert,severe:t.counts.severe-e.severe}:null;return(0,b.jsxs)(`div`,{className:`risk-summary`,children:[(0,b.jsxs)(`span`,{children:[`총`,(0,b.jsx)(`strong`,{children:(t.counts.safe+t.counts.warn+t.counts.alert+t.counts.severe).toLocaleString()})]}),(0,b.jsxs)(`span`,{children:[`관심`,(0,b.jsx)(`strong`,{className:`text-safe`,children:t.counts.safe.toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.safe,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`주의`,(0,b.jsx)(`strong`,{className:`text-warn`,children:t.counts.warn.toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.warn,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`경계`,(0,b.jsx)(`strong`,{className:`text-alert`,children:t.counts.alert.toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.alert,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`심각`,(0,b.jsx)(`strong`,{className:`text-severe`,children:t.counts.severe.toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.severe,isInteger:!0})]})]})})()})]})]}),u===t.name&&(0,b.jsx)(`div`,{className:`mobile-accordion`,children:e.jisaMap[t.name]&&e.jisaMap[t.name].map(n=>{let r=`status-safe`;return n.riskClass===`severe`?r=`status-alert`:(n.riskClass===`warn`||n.riskClass===`alert`)&&(r=`status-warn`),(0,b.jsxs)(_.Fragment,{children:[(0,b.jsxs)(`div`,{className:`bonbu-card accordion-card ${selectedJisaDetail?.name===n.name?`selected`:``}`,onClick:()=>setSelectedJisaDetail(selectedJisaDetail?.name===n.name?null:n),children:[(0,b.jsxs)(`div`,{className:`card-left`,children:[(0,b.jsx)(`h3`,{style:{fontSize:`0.9rem`},children:n.name}),(0,b.jsx)(`div`,{className:`overall-risk ${r}`,children:n.riskStr})]}),(()=>{let e=ne(t.name,n.name),r=e?{safe:(n.counts?.safe||0)-e.safe,warn:(n.counts?.warn||0)-e.warn,alert:(n.counts?.alert||0)-e.alert,severe:(n.counts?.severe||0)-e.severe}:null,i=n.change===void 0?e?n.rate-e.rate:null:n.change;return(0,b.jsxs)(`div`,{className:`card-right`,children:[(0,b.jsxs)(`div`,{className:`card-right-top`,style:{fontSize:`0.95rem`},children:[(0,b.jsxs)(`span`,{children:[`현재 `,(0,b.jsxs)(`strong`,{children:[n.rate,`%`]}),(0,b.jsx)(Uc,{value:i})]}),(0,b.jsxs)(`span`,{children:[`평년대비 `,(0,b.jsxs)(`strong`,{children:[n.perRate>0?n.perRate.toFixed(1):`0.0`,`%`]})]})]}),(0,b.jsx)(`div`,{className:`card-right-bottom`,style:{fontSize:`0.85rem`},children:(0,b.jsxs)(`div`,{className:`risk-summary`,children:[(0,b.jsxs)(`span`,{children:[`총`,(0,b.jsx)(`strong`,{children:((n.counts?.safe||0)+(n.counts?.warn||0)+(n.counts?.alert||0)+(n.counts?.severe||0)).toLocaleString()})]}),(0,b.jsxs)(`span`,{children:[`관심`,(0,b.jsx)(`strong`,{className:`text-safe`,children:(n.counts?.safe||0).toLocaleString()}),r&&(0,b.jsx)(Uc,{value:r.safe,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`주의`,(0,b.jsx)(`strong`,{className:`text-warn`,children:(n.counts?.warn||0).toLocaleString()}),r&&(0,b.jsx)(Uc,{value:r.warn,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`경계`,(0,b.jsx)(`strong`,{className:`text-alert`,children:(n.counts?.alert||0).toLocaleString()}),r&&(0,b.jsx)(Uc,{value:r.alert,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`심각`,(0,b.jsx)(`strong`,{className:`text-severe`,children:(n.counts?.severe||0).toLocaleString()}),r&&(0,b.jsx)(Uc,{value:r.severe,isInteger:!0})]})]})})]})})()]}),selectedJisaDetail?.name===n.name&&(0,b.jsx)(`div`,{className:`mobile-res-list`,children:e.allReservoirs.filter(e=>e.bonbu===u&&e.jisa===selectedJisaDetail.name).map(e=>{let t=`status-safe`;return e.riskClass===`severe`?t=`status-alert`:(e.riskClass===`warn`||e.riskClass===`alert`)&&(t=`status-warn`),(0,b.jsxs)(`div`,{className:`res-item`,children:[(0,b.jsxs)(`span`,{className:`res-name`,children:[`💧 `,e.name]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`res-status ${t}`,children:e.riskStr}),(0,b.jsxs)(`span`,{className:`res-rate`,children:[e.rate,`%`]})]})]},`mobile-res-${e.name}`)})})]},`mobile-jisa-${n.name}`)})})]},t.name)})})}),(0,b.jsxs)(`div`,{className:`detail-panel glass-panel ${u?`open`:``}`,children:[(0,b.jsxs)(`div`,{className:`detail-header`,children:[(0,b.jsxs)(`h2`,{children:[u,` 지사 리스트`]}),(0,b.jsx)(`button`,{className:`close-btn`,onClick:()=>{d(null),setSelectedJisaDetail(null)},children:`✕`})]}),(0,b.jsx)(`div`,{className:`sidebar-list`,children:u&&e.jisaMap[u]&&e.jisaMap[u].map(e=>{let t=`status-safe`;return e.riskClass===`severe`?t=`status-alert`:(e.riskClass===`warn`||e.riskClass===`alert`)&&(t=`status-warn`),(0,b.jsxs)(`div`,{className:`bonbu-card ${selectedJisaDetail?.name===e.name?`selected`:``}`,onClick:()=>setSelectedJisaDetail(e),children:[(0,b.jsxs)(`div`,{className:`card-left`,children:[(0,b.jsx)(`h3`,{children:e.name}),(0,b.jsx)(`div`,{className:`overall-risk ${t}`,children:e.riskStr})]}),(()=>{let t=ne(u,e.name),n=t?{safe:(e.counts?.safe||0)-t.safe,warn:(e.counts?.warn||0)-t.warn,alert:(e.counts?.alert||0)-t.alert,severe:(e.counts?.severe||0)-t.severe}:null,r=e.change===void 0?t?e.rate-t.rate:null:e.change;return(0,b.jsxs)(`div`,{className:`card-right`,children:[(0,b.jsxs)(`div`,{className:`card-right-top`,children:[(0,b.jsxs)(`span`,{children:[`현재 `,(0,b.jsxs)(`strong`,{children:[e.rate,`%`]}),(0,b.jsx)(Uc,{value:r})]}),(0,b.jsxs)(`span`,{children:[`평년대비 `,(0,b.jsxs)(`strong`,{children:[e.perRate>0?e.perRate.toFixed(1):`0.0`,`%`]})]})]}),(0,b.jsx)(`div`,{className:`card-right-bottom`,children:(0,b.jsxs)(`div`,{className:`risk-summary`,children:[(0,b.jsxs)(`span`,{children:[`총`,(0,b.jsx)(`strong`,{children:((e.counts?.safe||0)+(e.counts?.warn||0)+(e.counts?.alert||0)+(e.counts?.severe||0)).toLocaleString()})]}),(0,b.jsxs)(`span`,{children:[`관심`,(0,b.jsx)(`strong`,{className:`text-safe`,children:(e.counts?.safe||0).toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.safe,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`주의`,(0,b.jsx)(`strong`,{className:`text-warn`,children:(e.counts?.warn||0).toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.warn,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`경계`,(0,b.jsx)(`strong`,{className:`text-alert`,children:(e.counts?.alert||0).toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.alert,isInteger:!0})]}),(0,b.jsxs)(`span`,{children:[`심각`,(0,b.jsx)(`strong`,{className:`text-severe`,children:(e.counts?.severe||0).toLocaleString()}),n&&(0,b.jsx)(Uc,{value:n.severe,isInteger:!0})]})]})})]})})()]},e.name)})})]}),(0,b.jsxs)(`div`,{className:`sub-detail-panel glass-panel ${selectedJisaDetail?`open`:``}`,children:[(0,b.jsxs)(`div`,{className:`detail-header`,children:[(0,b.jsxs)(`h2`,{children:[selectedJisaDetail?.name,` 저수지 현황`]}),(0,b.jsx)(`button`,{className:`close-btn`,onClick:()=>setSelectedJisaDetail(null),children:`✕`})]}),(0,b.jsx)(`div`,{className:`res-list`,children:selectedJisaDetail&&e.allReservoirs.filter(e=>e.bonbu===u&&e.jisa===selectedJisaDetail.name).map(e=>{let t=`status-safe`;return e.riskClass===`severe`?t=`status-alert`:(e.riskClass===`warn`||e.riskClass===`alert`)&&(t=`status-warn`),(0,b.jsxs)(`div`,{className:`res-item`,children:[(0,b.jsxs)(`span`,{className:`res-name`,children:[`💧 `,e.name]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`res-status ${t}`,children:e.riskStr}),(0,b.jsxs)(`span`,{className:`res-rate`,children:[e.rate,`%`]})]})]},e.name)})})]}),(0,b.jsx)(`div`,{className:`trend-panels`,children:[{label:`심각`,field:`severe`,color:`#ef4444`},{label:`경계`,field:`alert`,color:`#f97316`},{label:`주의`,field:`warn`,color:`#f59e0b`},{label:`관심`,field:`safe`,color:`#3b82f6`}].map(({label:e,field:t,color:n})=>(0,b.jsxs)(`div`,{className:`trend-box glass-panel`,children:[(0,b.jsxs)(`div`,{className:`trend-box-header`,style:{borderColor:n},children:[(0,b.jsxs)(`span`,{className:`trend-box-title`,style:{color:n},children:[e,` 추이`]}),(0,b.jsx)(`span`,{className:`trend-box-sub`,children:`최근 10일 (전국)`})]}),(0,b.jsx)(Wc,{data:re(t),color:n,label:t})]},t))})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(Kc,{})}));