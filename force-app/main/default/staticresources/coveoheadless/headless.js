'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch$1 = _interopDefault(require('cross-fetch'));
var exponentialBackoff = require('exponential-backoff');
var tsDebounce = require('ts-debounce');
var pino = _interopDefault(require('pino'));
var dayjs = _interopDefault(require('dayjs'));
var utc = _interopDefault(require('dayjs/plugin/utc'));
var customParseFormat = _interopDefault(require('dayjs/plugin/customParseFormat'));
var configureStore$2 = _interopDefault(require('redux-mock-store'));

function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[L]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);return !t||t===Object.prototype}(n)||Array.isArray(n)||!!n[H]||!!n.constructor[H]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Y)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[L];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return W&&n instanceof Map}function v(n){return X&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return n.slice();var t=Z(n);delete t[L];for(var r=Y(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){b(n)||t(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0));}function h(){n(2);}function b(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(t){var r=nn[t];return r||n(19,t),r}function m(n,t){nn[n]=t;}function _(){return G}function j(n,t){t&&(y("Patches"),n.u=[],n.s=[],n.v=t);}function g(n){O(n),n.p.forEach(S),n.p=null;}function O(n){n===G&&(G=n.l);}function w(n){return G={p:[],l:G,h:n,m:!0,_:0}}function S(n){var t=n[L];0===t.i||1===t.i?t.j():t.g=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||y("ES5").S(e,t,o),o?(i[L].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&y("Patches").M(i[L],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==B?t:void 0}function M(n,t,r){if(b(t))return t;var e=t[L];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&y("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!b(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r);}function z(n,t){var r=n[L];return (r?p(r):n)[t]}function I(n){n.P||(n.P=!0,n.l&&I(n.l));}function E(n){n.o||(n.o=l(n.t));}function k(n,t,r){var e=s(t)?y("MapSet").T(t,r):v(t)?y("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=tn;r&&(i=[e],o=rn);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function R(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[L],c=o(t);if(u){if(!u.P&&(u.i<4||!y("ES5").K(u)))return u.t;u.I=!0,e=D(t,c),u.I=!1;}else e=D(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function D(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[L];return tn.get(t,n)},set:function(t){var r=this[L];tn.set(r,n,t);}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][L];if(!r.P)switch(r.i){case 5:a(r)&&I(r);break;case 4:o(r)&&I(r);}}}function o(n){for(var t=n.t,r=n.k,e=Y(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==L){var a=t[o];if(void 0===a&&!u(t,o))return !0;var f=r[o],s=f&&f[L];if(s?s.t!==a:!c(f,a))return !0}}var v=!!t[L];return e.length!==Y(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return !0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return !(!r||r.get)}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){var e=Z(t);n&&delete e.length,delete e[L];for(var i=Y(e),o=0;o<i.length;o++){var u=i[o];e[u]=r(u,n||!!e[u].enumerable);}if(n){var a=Array(t.length);return Object.defineProperties(a,e),a}return Object.create(Object.getPrototypeOf(t),e)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,L,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[L].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[L];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==L&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,I(r)));})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,I(r));}));else if(5===c){if(a(r)&&(I(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var $,G,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=U?Symbol("immer-nothing"):(($={})["immer-nothing"]=!0,$),H=U?Symbol("immer-draftable"):"__$immer_draftable",L=U?Symbol("immer-state"):"__$immer_state",Y="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,Z=Object.getOwnPropertyDescriptors||function(n){var t={};return Y(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},nn={},tn={get:function(n,t){if(t===L)return n;var e=p(n);if(!u(e,t))return function(n,t,r){if(r in t)for(var e=Object.getPrototypeOf(t);e;){var i,o=Object.getOwnPropertyDescriptor(e,r);if(o)return "value"in o?o.value:null===(i=o.get)||void 0===i?void 0:i.call(n.k);e=Object.getPrototypeOf(e);}}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=k(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){if(n.D[t]=!0,!n.P){if(c(r,z(p(n),t))&&void 0!==r)return !0;E(n),I(n);}return n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),I(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},rn={};i(tn,(function(n,t){rn[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),rn.deleteProperty=function(t,r){return tn.deleteProperty.call(this,t[0],r)},rn.set=function(t,r,e){return tn.set.call(this,t[0],r,e,t[0])};var en=function(){function e(n){this.O=q,this.N="production"!=="production","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return (r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=k(this,t,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g(f):O(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===B)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t);},i.produceWithPatches=function(n,t){var r,e,i=this;return "function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t;})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=R(e));var i=w(this),o=k(this,e,void 0);return o[L].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[L];var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n;},i.setUseProxies=function(t){t&&!q&&n(20),this.O=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),on=new en,un=on.produce,an=on.produceWithPatches.bind(on),fn=on.setAutoFreeze.bind(on),cn=on.setUseProxies.bind(on),sn=on.applyPatches.bind(on),vn=on.createDraft.bind(on),pn=on.finishDraft.bind(on);

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return compose;
  return compose.apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * protoype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject$1(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk$1 = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      _options$serializable = _options.serializableCheck;
  var middlewareArray = new MiddlewareArray();

  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "production" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = applyMiddleware.apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = compose;

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  return function (state, action) {
    if (state === void 0) {
      state = initialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if (t(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!r(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return un(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(value) {
  this.value = value;
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg, payload) {
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: payload,
      error: miniSerializeError(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        aborted: aborted,
        condition: condition
      }
    };
  });
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(null, requestId, arg, result.value);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

N();

function buildSchemaValidationError(errors, context) {
    const message = `
  The following properties are invalid:

    ${errors.join('\n\t')}
  
  ${context}
  `;
    return new SchemaValidationError(message);
}
class SchemaValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SchemaValidationError';
    }
}
class Schema {
    constructor(definition) {
        this.definition = definition;
    }
    validate(values = {}, message = '') {
        const mergedValues = {
            ...this.default,
            ...values,
        };
        const errors = [];
        for (const property in this.definition) {
            const error = this.definition[property].validate(mergedValues[property]);
            error && errors.push(`${property}: ${error}`);
        }
        if (errors.length) {
            throw buildSchemaValidationError(errors, message);
        }
        return mergedValues;
    }
    get default() {
        const defaultValues = {};
        for (const property in this.definition) {
            const defaultValue = this.definition[property].default;
            if (defaultValue !== undefined) {
                defaultValues[property] = defaultValue;
            }
        }
        return defaultValues;
    }
}

class Value {
    constructor(baseConfig = {}) {
        this.baseConfig = baseConfig;
    }
    validate(value) {
        if (this.baseConfig.required && isNullOrUndefined(value)) {
            return 'value is required.';
        }
        return null;
    }
    get default() {
        return this.baseConfig.default instanceof Function
            ? this.baseConfig.default()
            : this.baseConfig.default;
    }
    get required() {
        return this.baseConfig.required === true;
    }
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isNullOrUndefined(value) {
    return isUndefined(value) || isNull(value);
}

class NumberValue {
    constructor(config = {}) {
        this.config = config;
        this.value = new Value(config);
    }
    validate(value) {
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (!isNumberOrUndefined(value)) {
            return 'value is not a number.';
        }
        if (value < this.config.min) {
            return `minimum value of ${this.config.min} not respected.`;
        }
        if (value > this.config.max) {
            return `maximum value of ${this.config.max} not respected.`;
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required;
    }
}
function isNumberOrUndefined(value) {
    return isUndefined(value) || isNumber(value);
}
function isNumber(value) {
    return typeof value === 'number';
}

class BooleanValue {
    constructor(config = {}) {
        this.value = new Value(config);
    }
    validate(value) {
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (!isBooleanOrUndefined(value)) {
            return 'value is not a boolean.';
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required;
    }
}
function isBooleanOrUndefined(value) {
    return isUndefined(value) || isBoolean$1(value);
}
function isBoolean$1(value) {
    return typeof value === 'boolean';
}

// Source: https://github.com/jquery-validation/jquery-validation/blob/c1db10a34c0847c28a5bd30e3ee1117e137ca834/src/core.js#L1349
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
class StringValue {
    constructor(config = {}) {
        this.config = {
            emptyAllowed: true,
            url: false,
            ...config,
        };
        this.value = new Value(this.config);
    }
    validate(value) {
        const { emptyAllowed, url, regex, constrainTo } = this.config;
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (isUndefined(value)) {
            return null;
        }
        if (!isString(value)) {
            return 'value is not a string.';
        }
        if (!emptyAllowed && !value.length) {
            return 'value is an empty string.';
        }
        if (url && !urlRegex.test(value)) {
            return 'value is not a valid URL.';
        }
        if (regex && !regex.test(value)) {
            return `value did not match provided regex ${regex}`;
        }
        if (constrainTo && !constrainTo.includes(value)) {
            const values = constrainTo.join(', ');
            return `value should be one of: ${values}.`;
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required;
    }
}
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

class RecordValue {
    constructor(config = {}) {
        this.config = {
            options: { required: false },
            values: {},
            ...config,
        };
    }
    validate(input) {
        if (isUndefined(input)) {
            return this.config.options.required
                ? 'value is required and is currently undefined'
                : null;
        }
        if (!isRecord(input)) {
            return 'value is not an object';
        }
        for (const [k, v] of Object.entries(this.config.values)) {
            if (v.required && isNullOrUndefined(input[k])) {
                return `value does not contain ${k}`;
            }
        }
        let out = '';
        for (const [key, validator] of Object.entries(this.config.values)) {
            const value = input[key];
            const invalidValue = validator.validate(value);
            if (invalidValue !== null) {
                out += ' ' + invalidValue;
            }
        }
        return out === '' ? null : out;
    }
    get default() {
        return undefined;
    }
    get required() {
        return !!this.config.options.required;
    }
}
function isRecord(value) {
    return value !== undefined && typeof value === 'object';
}
class ArrayValue {
    constructor(config = {}) {
        this.config = config;
        this.value = new Value(this.config);
    }
    validate(input) {
        if (!isNullOrUndefined(input) && !Array.isArray(input)) {
            return 'value is not an array';
        }
        const invalid = this.value.validate(input);
        if (invalid !== null) {
            return invalid;
        }
        if (isNullOrUndefined(input)) {
            return null;
        }
        if (this.config.max !== undefined && input.length > this.config.max) {
            return `value contains more than ${this.config.max}`;
        }
        if (this.config.min !== undefined && input.length < this.config.min) {
            return `value contains less than ${this.config.min}`;
        }
        if (this.config.each !== undefined) {
            let out = '';
            input.forEach((el) => {
                if (this.config.each.required && isNullOrUndefined(el)) {
                    out = `value is null or undefined: ${input.join(',')}`;
                }
                const isInvalid = this.validatePrimitiveValue(el, this.config.each);
                if (isInvalid !== null) {
                    out += ' ' + isInvalid;
                }
            });
            return out === '' ? null : out;
        }
        return null;
    }
    validatePrimitiveValue(v, validator) {
        if (isBoolean$1(v)) {
            return validator.validate(v);
        }
        else if (isString(v)) {
            return validator.validate(v);
        }
        else if (isNumber(v)) {
            return validator.validate(v);
        }
        else if (isRecord(v)) {
            return validator.validate(v);
        }
        return 'value is not a primitive value';
    }
    get default() {
        return undefined;
    }
    get required() {
        return this.value.required;
    }
}
function isArray(value) {
    return Array.isArray(value);
}

class EnumValue {
    constructor(config) {
        this.config = config;
        this.value = new Value(config);
    }
    validate(value) {
        const invalid = this.value.validate(value);
        if (invalid !== null) {
            return invalid;
        }
        if (isUndefined(value)) {
            return null;
        }
        const valueInEnum = Object.values(this.config.enum).find((enumValue) => enumValue === value);
        if (!valueInEnum) {
            return 'value is not in enum.';
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required;
    }
}

const requiredNonEmptyString = new StringValue({
    required: true,
    emptyAllowed: false,
});
const requiredEmptyAllowedString = new StringValue({
    required: true,
    emptyAllowed: true,
});
const serializeSchemaValidationError = ({ message, name, stack, }) => ({ message, name, stack });
/**
 * Validates an action payload and throws an error if invalid
 * @param payload the action payload
 * @param definition Either a Bueno SchemaDefinition or a SchemaValue
 */
const validatePayloadAndThrow = (payload, definition) => {
    const isSchemaValue = 'required' in definition;
    if (isSchemaValue) {
        return {
            payload: new Schema({
                value: definition,
            }).validate({ value: payload }).value,
        };
    }
    return {
        payload: new Schema(definition).validate(payload),
    };
};
/**
 * Validates an action payload and return an `error` alongside the payload if it's invalid
 * @param payload the action payload
 * @param definition Either a Bueno SchemaDefinition or a SchemaValue
 */
const validatePayload = (payload, definition) => {
    try {
        return validatePayloadAndThrow(payload, definition);
    }
    catch (error) {
        return {
            payload,
            error: serializeSchemaValidationError(error),
        };
    }
};
const validateInitialState = (engine, schema, obj, functionName) => {
    const message = `Check the initialState of ${functionName}`;
    return validateObject(engine, schema, obj, message, 'Controller initialization error');
};
const validateOptions = (engine, schema, obj, functionName) => {
    const message = `Check the options of ${functionName}`;
    return validateObject(engine, schema, obj, message, 'Controller initialization error');
};
const validateObject = (engine, schema, obj, validationMessage, errorMessage) => {
    try {
        return schema.validate(obj, validationMessage);
    }
    catch (error) {
        engine.logger.error(error, errorMessage);
        throw error;
    }
};

const originSchemaOnConfigUpdate = () => new StringValue({ emptyAllowed: false, required: false });
const originSchemaOnUpdate = () => new StringValue({ emptyAllowed: false, required: true });
/**
 * Updates the global headless engine configuration.
 * @param accessToken (string) The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
 * @param organizationId (string) The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
 * @param platformUrl (string) The Plaform URL to use (e.g., `https://platform.cloud.coveo.com`).
 */
const updateBasicConfiguration = createAction('configuration/updateBasicConfiguration', (payload) => validatePayload(payload, {
    accessToken: new StringValue({ emptyAllowed: false }),
    organizationId: new StringValue({ emptyAllowed: false }),
    platformUrl: new StringValue({ url: true, emptyAllowed: false }),
}));
/**
 * Updates the search configuration.
 * @param apiBaseUrl (string) The Search API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/search/v2`).
 * @param pipeline (string) The name of the query pipeline to use for the query (e.g., `External Search`). If not specified, the default query pipeline will be used.
 * @param searchHub (string) The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates (e.g., `ExternalSearch`).
 */
const updateSearchConfiguration = createAction('configuration/updateSearchConfiguration', (payload) => validatePayload(payload, {
    apiBaseUrl: new StringValue({ url: true, emptyAllowed: false }),
    pipeline: new StringValue({ emptyAllowed: false }),
    searchHub: new StringValue({ emptyAllowed: false }),
}));
/**
 * Updates the analytics configuration.
 * @param enabled (boolean) Whether to enable usage analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab from which the usage analytics event originates (e.g., `All`).
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface that’s making the request (e.g., `https://connect.coveo.com/s/`).
 * @param apiBaseUrl (string) The Usage Analytics API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/ua`).
 * @param runtimeEnvironment (IRuntimeEnvironment) The Coveo analytics runtime to use, see https://github.com/coveo/coveo.analytics.js for more info.
 */
const updateAnalyticsConfiguration = createAction('configuration/updateAnalyticsConfiguration', (payload) => validatePayload(payload, {
    enabled: new BooleanValue({ default: true }),
    originLevel2: originSchemaOnConfigUpdate(),
    originLevel3: originSchemaOnConfigUpdate(),
    apiBaseUrl: new StringValue({ url: true, emptyAllowed: false }),
    runtimeEnvironment: new Value(),
}));
/**
 * Renews the accessToken specified in the global headless engine configuration.
 * @param renew (`() => Promise<string>`) A function that fetches a new access token. The function must return a Promise that resolves to a string (the new access token).
 */
const renewAccessToken = createAsyncThunk('configuration/renewAccessToken', async (renew) => {
    return await renew();
});
/**
 * Disables analytics tracking.
 */
const disableAnalytics = createAction('configuration/analytics/disable');
/**
 * Enables analytics tracking.
 */
const enableAnalytics = createAction('configuration/analytics/enable');
/**
 * Sets originLevel2 for analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab (e.g., `All`).
 */
const setOriginLevel2 = createAction('configuration/analytics/originlevel2', (payload) => validatePayload(payload, { originLevel2: originSchemaOnUpdate() }));
/**
 * Sets originLevel3 for analytics tracking.
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface (e.g., `https://connect.coveo.com/s/`).
 */
const setOriginLevel3 = createAction('configuration/analytics/originlevel3', (payload) => validatePayload(payload, { originLevel3: originSchemaOnUpdate() }));

function isThrottled(status) {
    return status === 429;
}
const NoopPreprocessRequestMiddleware = (request) => request;
class PlatformClient {
    static async call(options) {
        const processedOptions = {
            ...options,
            ...(await options.preprocessRequest(options)),
        };
        const requestInfo = {
            url: processedOptions.url,
            method: processedOptions.method,
            headers: {
                'Content-Type': processedOptions.contentType,
                Authorization: `Bearer ${processedOptions.accessToken}`,
                ...processedOptions.headers,
            },
            body: processedOptions.requestParams,
        };
        processedOptions.logger.info(requestInfo, 'Platform request');
        const request = async () => {
            const response = await fetch$1(processedOptions.url, {
                method: processedOptions.method,
                headers: {
                    'Content-Type': processedOptions.contentType,
                    Authorization: `Bearer ${processedOptions.accessToken}`,
                    ...processedOptions.headers,
                },
                body: JSON.stringify(processedOptions.requestParams),
                signal: options.signal,
            });
            if (isThrottled(response.status)) {
                throw response;
            }
            return response;
        };
        try {
            const response = await exponentialBackoff.backOff(request, {
                retry: (e) => {
                    const shouldRetry = e && isThrottled(e.status);
                    shouldRetry && options.logger.info('Platform retrying request');
                    return shouldRetry;
                },
            });
            if (response.status === 419) {
                processedOptions.logger.info('Platform renewing token');
                const accessToken = await processedOptions.renewAccessToken();
                if (accessToken !== '') {
                    return PlatformClient.call({ ...processedOptions, accessToken });
                }
            }
            const body = (await response.json());
            options.logger.info({ response, body, requestInfo }, 'Platform response');
            return {
                response,
                body,
            };
        }
        catch (error) {
            if (error.body) {
                return {
                    response: error,
                    body: await error.json(),
                };
            }
            throw error;
        }
    }
}
function platformUrl(options) {
    const urlEnv = !options || !options.environment || options.environment === 'prod'
        ? ''
        : options.environment;
    const urlRegion = !options || !options.region || options.region === 'us-east-1'
        ? ''
        : `-${options.region}`;
    return `https://platform${urlEnv}${urlRegion}.cloud.coveo.com`;
}

const searchAPIEndpoint = '/rest/search/v2';
const analyticsAPIEndpoint = '/rest/ua';
const getConfigurationInitialState = () => ({
    organizationId: '',
    accessToken: '',
    platformUrl: platformUrl(),
    search: {
        apiBaseUrl: `${platformUrl()}${searchAPIEndpoint}`,
    },
    analytics: {
        enabled: true,
        apiBaseUrl: `${platformUrl()}${analyticsAPIEndpoint}`,
        originLevel2: 'default',
        originLevel3: 'default',
    },
});

const configurationReducer = createReducer(getConfigurationInitialState(), (builder) => builder
    .addCase(updateBasicConfiguration, (state, action) => {
    if (action.payload.accessToken) {
        state.accessToken = action.payload.accessToken;
    }
    if (action.payload.organizationId) {
        state.organizationId = action.payload.organizationId;
    }
    if (action.payload.platformUrl) {
        state.platformUrl = action.payload.platformUrl;
        state.search.apiBaseUrl = `${action.payload.platformUrl}${searchAPIEndpoint}`;
        state.analytics.apiBaseUrl = `${action.payload.platformUrl}${analyticsAPIEndpoint}`;
    }
})
    .addCase(updateSearchConfiguration, (state, action) => {
    if (action.payload.apiBaseUrl) {
        state.search.apiBaseUrl = action.payload.apiBaseUrl;
    }
})
    .addCase(updateAnalyticsConfiguration, (state, action) => {
    if (action.payload.enabled !== undefined) {
        state.analytics.enabled = action.payload.enabled;
    }
    if (action.payload.originLevel2 !== undefined) {
        state.analytics.originLevel2 = action.payload.originLevel2;
    }
    if (action.payload.originLevel3 !== undefined) {
        state.analytics.originLevel3 = action.payload.originLevel3;
    }
    if (action.payload.apiBaseUrl !== undefined) {
        state.analytics.apiBaseUrl = action.payload.apiBaseUrl;
    }
    if (action.payload.runtimeEnvironment !== undefined) {
        state.analytics.runtimeEnvironment =
            action.payload.runtimeEnvironment;
    }
})
    .addCase(renewAccessToken.fulfilled, (state, action) => {
    state.accessToken = action.payload;
})
    .addCase(disableAnalytics, (state) => {
    state.analytics.enabled = false;
})
    .addCase(enableAnalytics, (state) => {
    state.analytics.enabled = true;
})
    .addCase(setOriginLevel2, (state, action) => {
    state.analytics.originLevel2 = action.payload.originLevel2;
})
    .addCase(setOriginLevel3, (state, action) => {
    state.analytics.originLevel3 = action.payload.originLevel3;
}));

const nonEmptyArray = new ArrayValue({
    each: requiredNonEmptyString,
    required: true,
});
const nonEmptyPayload = (contextKey, contextValue) => {
    validatePayload(contextKey, requiredNonEmptyString);
    if (isString(contextValue)) {
        validatePayload(contextValue, requiredNonEmptyString);
    }
    else {
        validatePayload(contextValue, nonEmptyArray);
    }
    return { payload: { contextKey, contextValue } };
};
/**
 * Sets the query context.
 * @param payload (Context) The new context (e.g., {age: "18-35"}).
 */
const setContext = createAction('context/set', (payload) => {
    for (const [k, v] of Object.entries(payload)) {
        nonEmptyPayload(k, v);
    }
    return { payload };
});
/**
 * Adds a new context value.
 * @param payload ({contextKey: string; contextValue: ContextValue}) The key-value pair to add to the context (e.g., `{contextKey: "age", contextValue: "18-35"}`).
 */
const addContext = createAction('context/add', (payload) => nonEmptyPayload(payload.contextKey, payload.contextValue));
/**
 * Removes a context key-value pair.
 * @param key (string) The key to remove from the context (e.g., `"age"`).
 */
const removeContext = createAction('context/remove', (payload) => validatePayload(payload, requiredNonEmptyString));

const ActionTypes$1 = {
    UNDO: '@@undoable/UNDO',
    REDO: '@@undoable/REDO',
};
const makeHistory = (state) => ({
    past: [],
    present: state,
    future: [],
});
const ActionCreators = {
    undo: createAction(ActionTypes$1.UNDO),
    redo: createAction(ActionTypes$1.REDO),
};
const undo = (state) => {
    const { past, present, future } = state;
    if (past.length === 0) {
        return state;
    }
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    return {
        past: newPast,
        present: previous,
        future: [present, ...future],
    };
};
const redo = (state) => {
    const { past, present, future } = state;
    if (future.length === 0) {
        return state;
    }
    const next = future[0];
    const newFuture = future.slice(1);
    return {
        past: [...past, present],
        present: next,
        future: newFuture,
    };
};
const updateHistory = (state, emptyState, reducer, action) => {
    const { past, present } = state;
    const newPresent = reducer(present, action);
    if (newPresent === emptyState.present || present === newPresent) {
        return state;
    }
    // Small special twist on the documented/standard redux undo recipe
    // We want to make the "actual first valid initial state" the first one that ends up being different from the "empty state" passed into undoable
    // This allows for slices to register themselves dynamically (Concrete example: facet-slice).
    if (present === emptyState.present) {
        return makeHistory(newPresent);
    }
    return {
        past: [...past, present],
        present: newPresent,
        future: [],
    };
};
const undoable = (reducer, emptyState) => {
    const emptyStateWithHistory = makeHistory(emptyState);
    return (state = emptyStateWithHistory, action) => {
        switch (action.type) {
            case ActionTypes$1.UNDO:
                return undo(state);
            case ActionTypes$1.REDO:
                return redo(state);
            default:
                return updateHistory(state, emptyStateWithHistory, reducer, action);
        }
    };
};

/**
 * Creates a snapshot of the current request parameters and adds it to the interface history.
 * @param (SearchParametersState) The current state of the search parameters.
 */
const snapshot = createAction('history/snapshot');
/**
 * Moves backward in the interface history.
 */
const back = createAsyncThunk('history/back', async (_, { dispatch }) => {
    await dispatch(ActionCreators.undo());
    await dispatch(change());
});
/**
 * Moves forward in the interface history.
 */
const forward = createAsyncThunk('history/forward', async (_, { dispatch }) => {
    await dispatch(ActionCreators.redo());
    await dispatch(change());
});
/**
 * Updates the interface state as per the current step in the interface history.
 */
const change = createAsyncThunk('history/change', async (_, { getState }) => {
    const s = getState();
    return s.history.present;
});

function getContextInitialState() {
    return {
        contextValues: {},
    };
}

const contextReducer = createReducer(getContextInitialState(), (builder) => {
    builder
        .addCase(setContext, (state, action) => {
        state.contextValues = action.payload;
    })
        .addCase(addContext, (state, action) => {
        state.contextValues[action.payload.contextKey] =
            action.payload.contextValue;
    })
        .addCase(removeContext, (state, action) => {
        delete state.contextValues[action.payload];
    })
        .addCase(change.fulfilled, (state, action) => {
        state.contextValues = action.payload.context.contextValues;
    });
});

const baseSearchRequest = (req, method, contentType, path) => ({
    accessToken: req.accessToken,
    method,
    contentType,
    url: `${req.url}${path}?${getOrganizationIdQueryParam(req)}`,
});
const getOrganizationIdQueryParam = (req) => `organizationId=${req.organizationId}`;

class SearchAPIClient {
    constructor(options) {
        this.options = options;
        this.searchAbortController = null;
    }
    async plan(req) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', '/plan'),
            requestParams: pickNonBaseParams(req),
            ...this.options,
        });
        if (isSuccessPlanResponse(platformResponse)) {
            return { success: platformResponse.body };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    async querySuggest(req) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', '/querySuggest'),
            requestParams: pickNonBaseParams(req),
            ...this.options,
        });
        if (isSuccessQuerySuggestionsResponse(platformResponse)) {
            const processedResponse = await this.options.postprocessQuerySuggestResponseMiddleware(platformResponse);
            return {
                success: processedResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    async search(req) {
        var _a;
        if (this.searchAbortController) {
            this.options.logger.warn('Cancelling current pending search query');
            this.searchAbortController.abort();
        }
        this.searchAbortController = this.getAbortControllerInstanceIfAvailable();
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', ''),
            requestParams: pickNonBaseParams(req),
            ...this.options,
            signal: (_a = this.searchAbortController) === null || _a === void 0 ? void 0 : _a.signal,
        });
        this.searchAbortController = null;
        if (isSuccessSearchResponse(platformResponse)) {
            const processedResponse = await this.options.postprocessSearchResponseMiddleware(platformResponse);
            return {
                success: processedResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    async facetSearch(req) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', '/facet'),
            requestParams: pickNonBaseParams(req),
            ...this.options,
        });
        const processedResponse = await this.options.postprocessFacetSearchResponseMiddleware(platformResponse);
        return processedResponse.body;
    }
    async recommendations(req) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', ''),
            requestParams: pickNonBaseParams(req),
            ...this.options,
        });
        if (isSuccessSearchResponse(platformResponse)) {
            return {
                success: platformResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    async productRecommendations(req) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchRequest(req, 'POST', 'application/json', ''),
            requestParams: pickNonBaseParams(req),
            ...this.options,
        });
        if (isSuccessSearchResponse(platformResponse)) {
            return {
                success: platformResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    getAbortControllerInstanceIfAvailable() {
        // For nodejs environments only, we want to load the implementation of AbortController from node-abort-controller package.
        // For browser environments, we need to make sure that we don't use AbortController as it might not be available (Locker Service in Salesforce)
        // This is not something that can be polyfilled in a meaningful manner.
        // This is a low level browser API after all, and only JS code inside a polyfill cannot actually cancel network requests done by the browser.
        if (typeof window === 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const nodeAbort = require('node-abort-controller');
            return new nodeAbort();
        }
        return typeof AbortController === 'undefined'
            ? null
            : new AbortController();
    }
}
const unwrapError = (res) => {
    if (isException(res)) {
        return unwrapByBodyException(res);
    }
    if (isError(res)) {
        return unwrapByStatusCode(res);
    }
    return { message: 'unknown', statusCode: 0, type: 'unknown' };
};
const unwrapByBodyException = (res) => ({
    message: res.body.exception.code,
    statusCode: res.response.status,
    type: res.body.exception.code,
});
const unwrapByStatusCode = (res) => ({
    message: res.body.message,
    statusCode: res.body.statusCode,
    type: res.body.type,
});
const isErrorResponse = (r) => {
    return r.error !== undefined;
};
function isSuccessQuerySuggestionsResponse(r) {
    return (r.body.completions !==
        undefined);
}
function isSuccessPlanResponse(r) {
    return (r.body.preprocessingOutput !==
        undefined);
}
function isSuccessSearchResponse(r) {
    return (r.body.results !== undefined);
}
function isError(r) {
    return (r.body.statusCode !==
        undefined);
}
function isException(r) {
    return (r.body
        .exception !== undefined);
}
function pickNonBaseParams(req) {
    // cheap version of _.omit
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { url, accessToken, organizationId, ...nonBase } = req;
    return nonBase;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var EventType;
(function (EventType) {
    EventType["search"] = "search";
    EventType["click"] = "click";
    EventType["custom"] = "custom";
    EventType["view"] = "view";
    EventType["collect"] = "collect";
})(EventType || (EventType = {}));

class AnalyticsFetchClient {
    constructor(opts) {
        this.opts = opts;
    }
    sendEvent(eventType, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { baseUrl, visitorIdProvider } = this.opts;
            const visitorIdParam = this.shouldAppendVisitorId(eventType) ? yield this.getVisitorIdParam() : '';
            const response = yield fetch(`${baseUrl}/analytics/${eventType}${visitorIdParam}`, {
                method: 'POST',
                headers: this.getHeaders(),
                mode: 'cors',
                body: JSON.stringify(payload),
                credentials: 'include',
            });
            if (response.ok) {
                const visit = (yield response.json());
                if (visit.visitorId) {
                    visitorIdProvider.setCurrentVisitorId(visit.visitorId);
                }
                return visit;
            }
            else {
                try {
                    response.json();
                }
                catch (_a) {
                }
                console.error(`An error has occured when sending the "${eventType}" event.`, response, payload);
                throw new Error(`An error has occurred when sending the "${eventType}" event. Check the console logs for more details.`);
            }
        });
    }
    shouldAppendVisitorId(eventType) {
        return [EventType.click, EventType.custom, EventType.search, EventType.view].indexOf(eventType) !== -1;
    }
    getVisitorIdParam() {
        return __awaiter(this, void 0, void 0, function* () {
            const { visitorIdProvider } = this.opts;
            const visitorId = yield visitorIdProvider.getCurrentVisitorId();
            return visitorId ? `?visitor=${visitorId}` : '';
        });
    }
    getHeaders() {
        const { token } = this.opts;
        return Object.assign(Object.assign({}, (token ? { Authorization: `Bearer ${token}` } : {})), { 'Content-Type': `application/json` });
    }
}

function hasWindow() {
    return typeof window !== 'undefined';
}
function hasNavigator() {
    return typeof navigator !== 'undefined';
}
function hasDocument() {
    return typeof document !== 'undefined';
}
function hasLocalStorage() {
    return typeof localStorage !== 'undefined';
}
function hasSessionStorage() {
    return typeof sessionStorage !== 'undefined';
}
function hasCookieStorage() {
    return hasNavigator() && navigator.cookieEnabled;
}
function hasCrypto() {
    return typeof crypto !== 'undefined';
}
function hasCryptoRandomValues() {
    return hasCrypto() && typeof crypto.getRandomValues !== 'undefined';
}

const eventTypesForDefaultValues = [EventType.click, EventType.custom, EventType.search, EventType.view];
const addDefaultValues = (eventType, payload) => {
    return eventTypesForDefaultValues.indexOf(eventType) !== -1
        ? Object.assign({ language: document.documentElement.lang, userAgent: navigator.userAgent }, payload) : payload;
};

class Cookie {
    static set(name, value, expiration) {
        var domain, domainParts, date, expires, host;
        if (expiration) {
            date = new Date();
            date.setTime(date.getTime() + expiration);
            expires = '; expires=' + date.toGMTString();
        }
        else {
            expires = '';
        }
        host = location.hostname;
        if (host.indexOf('.') === -1) {
            document.cookie = name + '=' + value + expires + '; path=/';
        }
        else {
            domainParts = host.split('.');
            domainParts.shift();
            domain = '.' + domainParts.join('.');
            document.cookie = name + '=' + value + expires + '; path=/; domain=' + domain;
            if (Cookie.get(name) == null || Cookie.get(name) != value) {
                domain = '.' + host;
                document.cookie = name + '=' + value + expires + '; path=/; domain=' + domain;
            }
        }
    }
    static get(name) {
        var cookiePrefix = name + '=';
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            cookie = cookie.replace(/^\s+/, '');
            if (cookie.indexOf(cookiePrefix) == 0) {
                return cookie.substring(cookiePrefix.length, cookie.length);
            }
        }
        return null;
    }
    static erase(name) {
        Cookie.set(name, '', -1);
    }
}

function getAvailableStorage() {
    if (hasLocalStorage()) {
        return localStorage;
    }
    if (hasCookieStorage()) {
        return new CookieStorage();
    }
    if (hasSessionStorage()) {
        return sessionStorage;
    }
    return new NullStorage();
}
class CookieStorage {
    getItem(key) {
        return Cookie.get(`${CookieStorage.prefix}${key}`);
    }
    removeItem(key) {
        Cookie.erase(`${CookieStorage.prefix}${key}`);
    }
    setItem(key, data) {
        Cookie.set(`${CookieStorage.prefix}${key}`, data);
    }
}
CookieStorage.prefix = 'coveo_';
class CookieAndLocalStorage {
    constructor() {
        this.cookieStorage = new CookieStorage();
    }
    getItem(key) {
        return localStorage.getItem(key) || this.cookieStorage.getItem(key);
    }
    removeItem(key) {
        this.cookieStorage.removeItem(key);
        localStorage.removeItem(key);
    }
    setItem(key, data) {
        localStorage.setItem(key, data);
        this.cookieStorage.setItem(key, data);
    }
}
class NullStorage {
    getItem(key) {
        return null;
    }
    removeItem(key) {
    }
    setItem(key, data) {
    }
}

const STORE_KEY = '__coveo.analytics.history';
const MAX_NUMBER_OF_HISTORY_ELEMENTS = 20;
const MIN_THRESHOLD_FOR_DUPLICATE_VALUE = 1000 * 60;
const MAX_VALUE_SIZE = 75;
class HistoryStore {
    constructor(store) {
        this.store = store || getAvailableStorage();
    }
    addElement(elem) {
        elem.internalTime = new Date().getTime();
        this.cropQueryElement(elem);
        let currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            if (this.isValidEntry(elem)) {
                this.setHistory([elem].concat(currentHistory));
            }
        }
        else {
            this.setHistory([elem]);
        }
    }
    addElementAsync(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            elem.internalTime = new Date().getTime();
            this.cropQueryElement(elem);
            let currentHistory = yield this.getHistoryWithInternalTimeAsync();
            if (currentHistory != null) {
                if (this.isValidEntry(elem)) {
                    this.setHistory([elem].concat(currentHistory));
                }
            }
            else {
                this.setHistory([elem]);
            }
        });
    }
    getHistory() {
        const history = this.getHistoryWithInternalTime();
        return this.stripInternalTime(history);
    }
    getHistoryAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const history = yield this.getHistoryWithInternalTimeAsync();
            return this.stripInternalTime(history);
        });
    }
    getHistoryWithInternalTime() {
        try {
            const elements = this.store.getItem(STORE_KEY);
            if (elements && typeof elements === 'string') {
                return JSON.parse(elements);
            }
            else {
                return [];
            }
        }
        catch (e) {
            return [];
        }
    }
    getHistoryWithInternalTimeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const elements = yield this.store.getItem(STORE_KEY);
                if (elements) {
                    return JSON.parse(elements);
                }
                else {
                    return [];
                }
            }
            catch (e) {
                return [];
            }
        });
    }
    setHistory(history) {
        try {
            this.store.setItem(STORE_KEY, JSON.stringify(history.slice(0, MAX_NUMBER_OF_HISTORY_ELEMENTS)));
        }
        catch (e) {
        }
    }
    clear() {
        try {
            this.store.removeItem(STORE_KEY);
        }
        catch (e) {
        }
    }
    getMostRecentElement() {
        let currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            const sorted = currentHistory.sort((first, second) => {
                return (second.internalTime || 0) - (first.internalTime || 0);
            });
            return sorted[0];
        }
        return null;
    }
    cropQueryElement(elem) {
        if (elem.name && elem.name.toLowerCase() == 'query' && elem.value != null) {
            elem.value = elem.value.slice(0, MAX_VALUE_SIZE);
        }
    }
    isValidEntry(elem) {
        let lastEntry = this.getMostRecentElement();
        if (lastEntry && lastEntry.value == elem.value) {
            return (elem.internalTime || 0) - (lastEntry.internalTime || 0) > MIN_THRESHOLD_FOR_DUPLICATE_VALUE;
        }
        return true;
    }
    stripInternalTime(history) {
        return history.map((part) => {
            const { name, time, value } = part;
            return { name, time, value };
        });
    }
}

var history = /*#__PURE__*/Object.freeze({
    __proto__: null,
    STORE_KEY: STORE_KEY,
    MAX_NUMBER_OF_HISTORY_ELEMENTS: MAX_NUMBER_OF_HISTORY_ELEMENTS,
    MIN_THRESHOLD_FOR_DUPLICATE_VALUE: MIN_THRESHOLD_FOR_DUPLICATE_VALUE,
    MAX_VALUE_SIZE: MAX_VALUE_SIZE,
    HistoryStore: HistoryStore,
    'default': HistoryStore
});

const enhanceViewEvent = (eventType, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (eventType === EventType.view) {
        yield addPageViewToHistory(payload.contentIdValue);
        return Object.assign({ location: window.location.toString(), referrer: document.referrer, title: document.title }, payload);
    }
    return payload;
});
const addPageViewToHistory = (pageViewValue) => __awaiter(void 0, void 0, void 0, function* () {
    const store = new HistoryStore();
    const historyElement = {
        name: 'PageView',
        value: pageViewValue,
        time: JSON.stringify(new Date()),
    };
    yield store.addElementAsync(historyElement);
});

const uuidv4 = (a) => {
    if (!!a) {
        return (Number(a) ^ (getRandomValues(new Uint8Array(1))[0] % 16 >> (Number(a) / 4))).toString(16);
    }
    return (`${1e7}` + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuidv4);
};
const getRandomValues = (rnds) => {
    if (hasCryptoRandomValues()) {
        return crypto.getRandomValues(rnds);
    }
    for (var i = 0, r = 0; i < rnds.length; i++) {
        if ((i & 0x03) === 0) {
            r = Math.random() * 0x100000000;
        }
        rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
    }
    return rnds;
};

const keysOf = Object.keys;

const ticketKeysMapping = {
    id: 'svc_ticket_id',
    subject: 'svc_ticket_subject',
    description: 'svc_ticket_description',
    category: 'svc_ticket_category',
    productId: 'svc_ticket_product_id',
    custom: 'svc_ticket_custom',
};
const ticketKeysMappingValues = keysOf(ticketKeysMapping).map((key) => ticketKeysMapping[key]);
const ticketSubKeysMatchGroup = [...ticketKeysMappingValues].join('|');
const ticketKeyRegex = new RegExp(`^(${ticketSubKeysMatchGroup}$)`);
const svcActionsKeysMapping = {
    svcAction: 'svc_action',
    svcActionData: 'svc_action_data',
};
const isTicketKey = (key) => ticketKeyRegex.test(key);

const globalParamKeysMapping = {
    anonymizeIp: 'aip',
};
const productKeysMapping = {
    id: 'id',
    name: 'nm',
    brand: 'br',
    category: 'ca',
    variant: 'va',
    price: 'pr',
    quantity: 'qt',
    coupon: 'cc',
    position: 'ps',
};
const impressionKeysMapping = {
    id: 'id',
    name: 'nm',
    brand: 'br',
    category: 'ca',
    variant: 'va',
    position: 'ps',
    price: 'pr',
};
const eventKeysMapping = {
    eventCategory: 'ec',
    eventAction: 'ea',
    eventLabel: 'el',
    eventValue: 'ev',
    page: 'dp',
    visitorId: 'cid',
    clientId: 'cid',
    userId: 'uid',
    currencyCode: 'cu',
};
const productActionsKeysMapping = {
    action: 'pa',
    list: 'pal',
    listSource: 'pls',
};
const transactionActionsKeysMapping = {
    id: 'ti',
    revenue: 'tr',
    tax: 'tt',
    shipping: 'ts',
    coupon: 'tcc',
    affiliation: 'ta',
    step: 'cos',
    option: 'col',
};
const contextInformationMapping = {
    hitType: 't',
    pageViewId: 'pid',
    encoding: 'de',
    location: 'dl',
    referrer: 'dr',
    screenColor: 'sd',
    screenResolution: 'sr',
    title: 'dt',
    userAgent: 'ua',
    language: 'ul',
    eventId: 'z',
    time: 'tm',
};
const measurementProtocolKeysMapping = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, eventKeysMapping), productActionsKeysMapping), transactionActionsKeysMapping), contextInformationMapping), globalParamKeysMapping), svcActionsKeysMapping);
const convertKeysToMeasurementProtocol = (params) => {
    return keysOf(params).reduce((mappedKeys, key) => {
        const newKey = measurementProtocolKeysMapping[key] || key;
        return Object.assign(Object.assign({}, mappedKeys), { [newKey]: params[key] });
    }, {});
};
const measurementProtocolKeysMappingValues = keysOf(measurementProtocolKeysMapping).map((key) => measurementProtocolKeysMapping[key]);
const productKeysMappingValues = keysOf(productKeysMapping).map((key) => productKeysMapping[key]);
const impressionKeysMappingValues = keysOf(impressionKeysMapping).map((key) => impressionKeysMapping[key]);
const productSubKeysMatchGroup = [...productKeysMappingValues, 'custom'].join('|');
const impressionSubKeysMatchGroup = [...impressionKeysMappingValues, 'custom'].join('|');
const productPrefixMatchGroup = '(pr[0-9]+)';
const impressionPrefixMatchGroup = '(il[0-9]+pi[0-9]+)';
const productKeyRegex = new RegExp(`^${productPrefixMatchGroup}(${productSubKeysMatchGroup})$`);
const impressionKeyRegex = new RegExp(`^(${impressionPrefixMatchGroup}(${impressionSubKeysMatchGroup}))|(il[0-9]+nm)$`);
const customProductKeyRegex = new RegExp(`^${productPrefixMatchGroup}custom$`);
const customImpressionKeyRegex = new RegExp(`^${impressionPrefixMatchGroup}custom$`);
const isProductKey = (key) => productKeyRegex.test(key);
const isImpressionKey = (key) => impressionKeyRegex.test(key);
const isKnownMeasurementProtocolKey = (key) => measurementProtocolKeysMappingValues.indexOf(key) !== -1;
const isCustomKey = (key) => key === 'custom';
const isMeasurementProtocolKey = (key) => {
    return [isProductKey, isTicketKey, isImpressionKey, isKnownMeasurementProtocolKey, isCustomKey].some((test) => test(key));
};
const convertCustomMeasurementProtocolKeys = (data) => {
    return keysOf(data).reduce((all, current) => {
        const match = customProductKeyRegex.exec(current) || customImpressionKeyRegex.exec(current);
        if (match) {
            const originalKey = match[1];
            return Object.assign(Object.assign({}, all), convertCustomObject(originalKey, data[current]));
        }
        else {
            return Object.assign(Object.assign({}, all), { [current]: data[current] });
        }
    }, {});
};
const convertCustomObject = (prefix, customData) => {
    return keysOf(customData).reduce((allCustom, currentCustomKey) => (Object.assign(Object.assign({}, allCustom), { [`${prefix}${currentCustomKey}`]: customData[currentCustomKey] })), {});
};

class AnalyticsBeaconClient {
    constructor(opts) {
        this.opts = opts;
    }
    sendEvent(eventType, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!navigator.sendBeacon) {
                throw new Error(`navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".`);
            }
            const { baseUrl } = this.opts;
            const parsedRequestData = this.encodeForEventType(eventType, payload);
            const paramsFragments = yield this.getQueryParamsForEventType(eventType);
            const url = `${baseUrl}/analytics/${eventType}?${paramsFragments}`;
            console.log(`Sending beacon for "${eventType}" with: `, JSON.stringify(payload));
            navigator.sendBeacon(url, new Blob([parsedRequestData], {
                type: 'application/x-www-form-urlencoded',
            }));
            return;
        });
    }
    encodeForEventType(eventType, payload) {
        return this.isEventTypeLegacy(eventType)
            ? this.encodeForLegacyType(eventType, payload)
            : this.encodeForFormUrlEncoded(Object.assign({ access_token: this.opts.token }, payload));
    }
    getQueryParamsForEventType(eventType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, visitorIdProvider } = this.opts;
            const visitorId = yield visitorIdProvider.getCurrentVisitorId();
            return [
                token && this.isEventTypeLegacy(eventType) ? `access_token=${token}` : '',
                visitorId ? `visitorId=${visitorId}` : '',
                'discardVisitInfo=true',
            ]
                .filter((p) => !!p)
                .join('&');
        });
    }
    isEventTypeLegacy(eventType) {
        return [EventType.click, EventType.custom, EventType.search, EventType.view].indexOf(eventType) !== -1;
    }
    encodeForLegacyType(eventType, payload) {
        return `${eventType}Event=${encodeURIComponent(JSON.stringify(payload))}`;
    }
    encodeForFormUrlEncoded(payload) {
        return Object.keys(payload)
            .filter((key) => !!payload[key])
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(this.encodeValue(payload[key]))}`)
            .join('&');
    }
    encodeValue(value) {
        return typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean'
            ? value
            : JSON.stringify(value);
    }
}
class NoopAnalyticsBeaconClient {
    sendEvent(_, __) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
}

class BrowserRuntime {
    constructor(beaconOptions, beforeUnload) {
        if (hasLocalStorage() && hasCookieStorage()) {
            this.storage = new CookieAndLocalStorage();
        }
        else if (hasLocalStorage()) {
            this.storage = localStorage;
        }
        else {
            console.warn('BrowserRuntime detected no valid storage available.', this);
            this.storage = new NullStorage();
        }
        this.beaconClient = new AnalyticsBeaconClient(beaconOptions);
        window.addEventListener('beforeunload', () => beforeUnload());
    }
}
class NodeJSRuntime {
    constructor(beaconOptions, storage) {
        this.storage = storage || new NullStorage();
        this.beaconClient = new AnalyticsFetchClient(beaconOptions);
    }
}
class NoopRuntime {
    constructor() {
        this.storage = new NullStorage();
        this.beaconClient = new NoopAnalyticsBeaconClient();
    }
}

const API_KEY_PREFIX = 'xx';
const isApiKey = (token) => (token === null || token === void 0 ? void 0 : token.startsWith(API_KEY_PREFIX)) || false;

const ReactNativeRuntimeWarning = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please install @react-native-async-storage/async-storage and instantiate 
        your analytics client as follows:
        
        import {ReactNativeRuntime} from 'coveo.analytics/react-native';
        
        const analytics = new CoveoAnalytics({
            ...your options,
            runtimeEnvironment: new ReactNativeRuntime();
        })
    `;
function isReactNative() {
    return typeof navigator != 'undefined' && navigator.product == 'ReactNative';
}

const Version = 'v15';
const Endpoints = {
    default: 'https://platform.cloud.coveo.com/rest/ua',
    production: 'https://platform.cloud.coveo.com/rest/ua',
    hipaa: 'https://platformhipaa.cloud.coveo.com/rest/ua',
};
class CoveoAnalyticsClient {
    constructor(opts) {
        if (!opts) {
            throw new Error('You have to pass options to this constructor');
        }
        this.options = Object.assign(Object.assign({}, this.defaultOptions), opts);
        this.visitorId = '';
        this.bufferedRequests = [];
        this.beforeSendHooks = [enhanceViewEvent, addDefaultValues].concat(this.options.beforeSendHooks);
        this.eventTypeMapping = {};
        const clientsOptions = {
            baseUrl: this.baseUrl,
            token: this.options.token,
            visitorIdProvider: this,
        };
        this.runtime = this.options.runtimeEnvironment || this.initRuntime(clientsOptions);
        this.analyticsFetchClient = new AnalyticsFetchClient(clientsOptions);
    }
    get defaultOptions() {
        return {
            endpoint: Endpoints.default,
            token: '',
            version: Version,
            beforeSendHooks: [],
        };
    }
    initRuntime(clientsOptions) {
        if (hasWindow() && hasDocument()) {
            return new BrowserRuntime(clientsOptions, () => this.flushBufferWithBeacon());
        }
        else if (isReactNative()) {
            console.warn(ReactNativeRuntimeWarning);
        }
        return new NodeJSRuntime(clientsOptions);
    }
    get analyticsBeaconClient() {
        return this.runtime.beaconClient;
    }
    get storage() {
        return this.runtime.storage;
    }
    determineVisitorId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.storage.getItem('visitorId')) || uuidv4();
            }
            catch (err) {
                console.log('Could not get visitor ID from the current runtime environment storage. Using a random ID instead.', err);
                return uuidv4();
            }
        });
    }
    getCurrentVisitorId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.visitorId) {
                const id = yield this.determineVisitorId();
                yield this.setCurrentVisitorId(id);
            }
            return this.visitorId;
        });
    }
    setCurrentVisitorId(visitorId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.visitorId = visitorId;
            yield this.storage.setItem('visitorId', visitorId);
        });
    }
    get currentVisitorId() {
        const visitorId = this.visitorId || this.storage.getItem('visitorId');
        if (typeof visitorId !== 'string') {
            this.setCurrentVisitorId(uuidv4());
        }
        return this.visitorId;
    }
    set currentVisitorId(visitorId) {
        this.visitorId = visitorId;
        this.storage.setItem('visitorId', visitorId);
    }
    sendEvent(eventType, ...payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { newEventType: eventTypeToSend = eventType, variableLengthArgumentsNames = [], addVisitorIdParameter = false, usesMeasurementProtocol = false, } = this.eventTypeMapping[eventType] || {};
            const processVariableArgumentNamesStep = (currentPayload) => variableLengthArgumentsNames.length > 0
                ? this.parseVariableArgumentsPayload(variableLengthArgumentsNames, currentPayload)
                : currentPayload[0];
            const addVisitorIdStep = (currentPayload) => __awaiter(this, void 0, void 0, function* () {
                return (Object.assign({ visitorId: addVisitorIdParameter ? yield this.getCurrentVisitorId() : '' }, currentPayload));
            });
            const setAnonymousUserStep = (currentPayload) => usesMeasurementProtocol ? this.ensureAnonymousUserWhenUsingApiKey(currentPayload) : currentPayload;
            const processBeforeSendHooksStep = (currentPayload) => this.beforeSendHooks.reduce((promisePayload, current) => __awaiter(this, void 0, void 0, function* () {
                const payload = yield promisePayload;
                return yield current(eventType, payload);
            }), currentPayload);
            const cleanPayloadStep = (currentPayload) => this.removeEmptyPayloadValues(currentPayload, eventType);
            const validateParams = (currentPayload) => this.validateParams(currentPayload);
            const processMeasurementProtocolConversionStep = (currentPayload) => usesMeasurementProtocol ? convertKeysToMeasurementProtocol(currentPayload) : currentPayload;
            const removeUnknownParameters = (currentPayload) => usesMeasurementProtocol ? this.removeUnknownParameters(currentPayload) : currentPayload;
            const processCustomParameters = (currentPayload) => usesMeasurementProtocol ? this.processCustomParameters(currentPayload) : currentPayload;
            const payloadToSend = yield [
                processVariableArgumentNamesStep,
                addVisitorIdStep,
                setAnonymousUserStep,
                processBeforeSendHooksStep,
                cleanPayloadStep,
                validateParams,
                processMeasurementProtocolConversionStep,
                removeUnknownParameters,
                processCustomParameters,
            ].reduce((payloadPromise, step) => __awaiter(this, void 0, void 0, function* () {
                const payload = yield payloadPromise;
                return yield step(payload);
            }), Promise.resolve(payload));
            this.bufferedRequests.push({
                eventType: eventTypeToSend,
                payload: payloadToSend,
                handled: false,
            });
            yield this.deferExecution();
            return yield this.sendFromBufferWithFetch();
        });
    }
    deferExecution() {
        return new Promise((resolve) => setTimeout(resolve, 0));
    }
    flushBufferWithBeacon() {
        while (this.hasPendingRequests()) {
            const { eventType, payload } = this.bufferedRequests.pop();
            this.analyticsBeaconClient.sendEvent(eventType, payload);
        }
    }
    sendFromBufferWithFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            const popped = this.bufferedRequests.shift();
            if (popped) {
                const { eventType, payload } = popped;
                return this.analyticsFetchClient.sendEvent(eventType, payload);
            }
        });
    }
    hasPendingRequests() {
        return this.bufferedRequests.length > 0;
    }
    clear() {
        this.storage.removeItem('visitorId');
        const store = new HistoryStore();
        store.clear();
    }
    sendSearchEvent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendEvent(EventType.search, request);
        });
    }
    sendClickEvent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendEvent(EventType.click, request);
        });
    }
    sendCustomEvent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendEvent(EventType.custom, request);
        });
    }
    sendViewEvent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendEvent(EventType.view, request);
        });
    }
    getVisit() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/analytics/visit`);
            const visit = (yield response.json());
            this.visitorId = visit.visitorId;
            return visit;
        });
    }
    getHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/analytics/monitoring/health`);
            return (yield response.json());
        });
    }
    registerBeforeSendEventHook(hook) {
        this.beforeSendHooks.push(hook);
    }
    addEventTypeMapping(eventType, eventConfig) {
        this.eventTypeMapping[eventType] = eventConfig;
    }
    parseVariableArgumentsPayload(fieldsOrder, payload) {
        const parsedArguments = {};
        for (let i = 0, length = payload.length; i < length; i++) {
            const currentArgument = payload[i];
            if (typeof currentArgument === 'string') {
                parsedArguments[fieldsOrder[i]] = currentArgument;
            }
            else if (typeof currentArgument === 'object') {
                return Object.assign(Object.assign({}, parsedArguments), currentArgument);
            }
        }
        return parsedArguments;
    }
    isKeyAllowedEmpty(evtType, key) {
        const keysThatCanBeEmpty = {
            [EventType.search]: ['queryText'],
        };
        const match = keysThatCanBeEmpty[evtType] || [];
        return match.indexOf(key) !== -1;
    }
    removeEmptyPayloadValues(payload, eventType) {
        const isNotEmptyValue = (value) => typeof value !== 'undefined' && value !== null && value !== '';
        return Object.keys(payload)
            .filter((key) => this.isKeyAllowedEmpty(eventType, key) || isNotEmptyValue(payload[key]))
            .reduce((newPayload, key) => (Object.assign(Object.assign({}, newPayload), { [key]: payload[key] })), {});
    }
    removeUnknownParameters(payload) {
        const newPayload = Object.keys(payload)
            .filter((key) => {
            if (isMeasurementProtocolKey(key)) {
                return true;
            }
            else {
                console.log(key, 'is not processed by coveoua');
            }
        })
            .reduce((newPayload, key) => (Object.assign(Object.assign({}, newPayload), { [key]: payload[key] })), {});
        return newPayload;
    }
    processCustomParameters(payload) {
        const { custom } = payload, rest = __rest(payload, ["custom"]);
        const lowercasedCustom = this.lowercaseKeys(custom);
        const newPayload = convertCustomMeasurementProtocolKeys(rest);
        return Object.assign(Object.assign({}, lowercasedCustom), newPayload);
    }
    lowercaseKeys(custom) {
        const keys = Object.keys(custom || {});
        return keys.reduce((all, key) => (Object.assign(Object.assign({}, all), { [key.toLowerCase()]: custom[key] })), {});
    }
    validateParams(payload) {
        const { anonymizeIp } = payload, rest = __rest(payload, ["anonymizeIp"]);
        if (anonymizeIp !== undefined) {
            if (['0', 'false', 'undefined', 'null', '{}', '[]', ''].indexOf(`${anonymizeIp}`.toLowerCase()) == -1) {
                rest['anonymizeIp'] = 1;
            }
        }
        return rest;
    }
    ensureAnonymousUserWhenUsingApiKey(payload) {
        const { userId } = payload, rest = __rest(payload, ["userId"]);
        if (isApiKey(this.options.token) && !userId) {
            rest['userId'] = 'anonymous';
            return rest;
        }
        else {
            return payload;
        }
    }
    get baseUrl() {
        const { version, endpoint } = this.options;
        const endpointIsCoveoProxy = endpoint.indexOf('.cloud.coveo.com') !== -1;
        return `${endpoint}${endpointIsCoveoProxy ? '' : '/rest'}/${version}`;
    }
}

var SearchPageEvents;
(function (SearchPageEvents) {
    SearchPageEvents["interfaceLoad"] = "interfaceLoad";
    SearchPageEvents["interfaceChange"] = "interfaceChange";
    SearchPageEvents["didyoumeanAutomatic"] = "didyoumeanAutomatic";
    SearchPageEvents["didyoumeanClick"] = "didyoumeanClick";
    SearchPageEvents["resultsSort"] = "resultsSort";
    SearchPageEvents["searchboxSubmit"] = "searchboxSubmit";
    SearchPageEvents["searchboxClear"] = "searchboxClear";
    SearchPageEvents["searchboxAsYouType"] = "searchboxAsYouType";
    SearchPageEvents["breadcrumbFacet"] = "breadcrumbFacet";
    SearchPageEvents["breadcrumbResetAll"] = "breadcrumbResetAll";
    SearchPageEvents["documentQuickview"] = "documentQuickview";
    SearchPageEvents["documentOpen"] = "documentOpen";
    SearchPageEvents["omniboxAnalytics"] = "omniboxAnalytics";
    SearchPageEvents["omniboxFromLink"] = "omniboxFromLink";
    SearchPageEvents["triggerNotify"] = "notify";
    SearchPageEvents["triggerExecute"] = "execute";
    SearchPageEvents["triggerQuery"] = "query";
    SearchPageEvents["triggerRedirect"] = "redirect";
    SearchPageEvents["pagerResize"] = "pagerResize";
    SearchPageEvents["pagerNumber"] = "pagerNumber";
    SearchPageEvents["pagerNext"] = "pagerNext";
    SearchPageEvents["pagerPrevious"] = "pagerPrevious";
    SearchPageEvents["pagerScrolling"] = "pagerScrolling";
    SearchPageEvents["facetClearAll"] = "facetClearAll";
    SearchPageEvents["facetSearch"] = "facetSearch";
    SearchPageEvents["facetSelect"] = "facetSelect";
    SearchPageEvents["facetSelectAll"] = "facetSelectAll";
    SearchPageEvents["facetDeselect"] = "facetDeselect";
    SearchPageEvents["facetExclude"] = "facetExclude";
    SearchPageEvents["facetUnexclude"] = "facetUnexclude";
    SearchPageEvents["facetUpdateSort"] = "facetUpdateSort";
    SearchPageEvents["facetShowMore"] = "showMoreFacetResults";
    SearchPageEvents["facetShowLess"] = "showLessFacetResults";
    SearchPageEvents["queryError"] = "query";
    SearchPageEvents["queryErrorBack"] = "errorBack";
    SearchPageEvents["queryErrorClear"] = "errorClearQuery";
    SearchPageEvents["queryErrorRetry"] = "errorRetry";
    SearchPageEvents["recommendation"] = "recommendation";
    SearchPageEvents["recommendationInterfaceLoad"] = "recommendationInterfaceLoad";
})(SearchPageEvents || (SearchPageEvents = {}));
const CustomEventsTypes = {
    [SearchPageEvents.triggerNotify]: 'queryPipelineTriggers',
    [SearchPageEvents.triggerExecute]: 'queryPipelineTriggers',
    [SearchPageEvents.triggerQuery]: 'queryPipelineTriggers',
    [SearchPageEvents.triggerRedirect]: 'queryPipelineTriggers',
    [SearchPageEvents.queryError]: 'errors',
    [SearchPageEvents.queryErrorBack]: 'errors',
    [SearchPageEvents.queryErrorClear]: 'errors',
    [SearchPageEvents.queryErrorRetry]: 'errors',
    [SearchPageEvents.pagerNext]: 'getMoreResults',
    [SearchPageEvents.pagerPrevious]: 'getMoreResults',
    [SearchPageEvents.pagerNumber]: 'getMoreResults',
    [SearchPageEvents.pagerResize]: 'getMoreResults',
    [SearchPageEvents.pagerScrolling]: 'getMoreResults',
    [SearchPageEvents.facetSearch]: 'facet',
    [SearchPageEvents.facetShowLess]: 'facet',
    [SearchPageEvents.facetShowMore]: 'facet',
    [SearchPageEvents.recommendation]: 'recommendation',
};

class NoopAnalytics {
    constructor() {
        this.runtime = new NoopRuntime();
        this.currentVisitorId = '';
    }
    sendEvent() {
        return Promise.resolve();
    }
    sendSearchEvent() {
        return Promise.resolve();
    }
    sendClickEvent() {
        return Promise.resolve();
    }
    sendCustomEvent() {
        return Promise.resolve();
    }
    sendViewEvent() {
        return Promise.resolve();
    }
    getVisit() {
        return Promise.resolve({ id: '', visitorId: '' });
    }
    getHealth() {
        return Promise.resolve({ status: '' });
    }
    registerBeforeSendEventHook() { }
    addEventTypeMapping() { }
}

function filterConsecutiveRepeatedValues(rawData) {
    let prev = '';
    return rawData.filter((value) => {
        const isDifferent = value !== prev;
        prev = value;
        return isDifferent;
    });
}
function removeSemicolons(rawData) {
    return rawData.map((value) => {
        return value.replace(/;/g, '');
    });
}
function getDataString(data) {
    const ANALYTICS_LENGTH_LIMIT = 256;
    const formattedData = data.join(';');
    if (formattedData.length <= ANALYTICS_LENGTH_LIMIT) {
        return formattedData;
    }
    return getDataString(data.slice(1));
}
const formatArrayForCoveoCustomData = (rawData) => {
    const dataWithoutSemicolons = removeSemicolons(rawData);
    const dataWithoutRepeatedValues = filterConsecutiveRepeatedValues(dataWithoutSemicolons);
    return getDataString(dataWithoutRepeatedValues);
};

function formatOmniboxMetadata(meta) {
    const partialQueries = typeof meta.partialQueries === 'string'
        ? meta.partialQueries
        : formatArrayForCoveoCustomData(meta.partialQueries);
    const suggestions = typeof meta.suggestions === 'string' ? meta.suggestions : formatArrayForCoveoCustomData(meta.suggestions);
    return Object.assign(Object.assign({}, meta), { partialQueries,
        suggestions });
}

class CoveoSearchPageClient {
    constructor(opts, provider) {
        this.opts = opts;
        this.provider = provider;
        this.coveoAnalyticsClient =
            opts.enableAnalytics === false ? new NoopAnalytics() : new CoveoAnalyticsClient(opts);
    }
    disable() {
        if (this.coveoAnalyticsClient instanceof CoveoAnalyticsClient) {
            this.coveoAnalyticsClient.clear();
        }
        this.coveoAnalyticsClient = new NoopAnalytics();
    }
    enable() {
        this.coveoAnalyticsClient = new CoveoAnalyticsClient(this.opts);
    }
    logInterfaceLoad() {
        return this.logSearchEvent(SearchPageEvents.interfaceLoad);
    }
    logRecommendationInterfaceLoad() {
        return this.logSearchEvent(SearchPageEvents.recommendationInterfaceLoad);
    }
    logRecommendation() {
        return this.logCustomEvent(SearchPageEvents.recommendation);
    }
    logFetchMoreResults() {
        return this.logCustomEvent(SearchPageEvents.pagerScrolling, { type: 'getMoreResults' });
    }
    logInterfaceChange(metadata) {
        return this.logSearchEvent(SearchPageEvents.interfaceChange, metadata);
    }
    logDidYouMeanAutomatic() {
        return this.logSearchEvent(SearchPageEvents.didyoumeanAutomatic);
    }
    logDidYouMeanClick() {
        return this.logSearchEvent(SearchPageEvents.didyoumeanClick);
    }
    logResultsSort(metadata) {
        return this.logSearchEvent(SearchPageEvents.resultsSort, metadata);
    }
    logSearchboxSubmit() {
        return this.logSearchEvent(SearchPageEvents.searchboxSubmit);
    }
    logSearchboxClear() {
        return this.logSearchEvent(SearchPageEvents.searchboxClear);
    }
    logSearchboxAsYouType() {
        return this.logSearchEvent(SearchPageEvents.searchboxAsYouType);
    }
    logBreadcrumbFacet(metadata, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.breadcrumbFacet, metadata, facetState);
    }
    logBreadcrumbResetAll() {
        return this.logSearchEvent(SearchPageEvents.breadcrumbResetAll);
    }
    logDocumentQuickview(info, identifier) {
        return this.logClickEvent(SearchPageEvents.documentQuickview, info, identifier);
    }
    logDocumentOpen(info, identifier) {
        return this.logClickEvent(SearchPageEvents.documentOpen, info, identifier);
    }
    logOmniboxAnalytics(meta) {
        return this.logSearchEvent(SearchPageEvents.omniboxAnalytics, formatOmniboxMetadata(meta));
    }
    logOmniboxFromLink(meta) {
        return this.logSearchEvent(SearchPageEvents.omniboxFromLink, formatOmniboxMetadata(meta));
    }
    logTriggerNotify(meta) {
        return this.logCustomEvent(SearchPageEvents.triggerNotify, meta);
    }
    logTriggerExecute(meta) {
        return this.logCustomEvent(SearchPageEvents.triggerExecute, meta);
    }
    logTriggerQuery() {
        const meta = { query: this.provider.getSearchEventRequestPayload().queryText };
        return this.logCustomEvent(SearchPageEvents.triggerQuery, meta);
    }
    logTriggerRedirect(meta) {
        const allMeta = Object.assign(Object.assign({}, meta), { query: this.provider.getSearchEventRequestPayload().queryText });
        return this.logCustomEvent(SearchPageEvents.triggerRedirect, allMeta);
    }
    logPagerResize(meta) {
        return this.logCustomEvent(SearchPageEvents.pagerResize, meta);
    }
    logPagerNumber(meta) {
        return this.logCustomEvent(SearchPageEvents.pagerNumber, meta);
    }
    logPagerNext(meta) {
        return this.logCustomEvent(SearchPageEvents.pagerNext, meta);
    }
    logPagerPrevious(meta) {
        return this.logCustomEvent(SearchPageEvents.pagerPrevious, meta);
    }
    logPagerScrolling() {
        return this.logCustomEvent(SearchPageEvents.pagerScrolling);
    }
    logFacetClearAll(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetClearAll, meta, facetState);
    }
    logFacetSearch(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetSearch, meta, facetState);
    }
    logFacetSelect(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetSelect, meta, facetState);
    }
    logFacetDeselect(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetDeselect, meta, facetState);
    }
    logFacetExclude(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetExclude, meta, facetState);
    }
    logFacetUnexclude(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetUnexclude, meta, facetState);
    }
    logFacetSelectAll(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetSelectAll, meta, facetState);
    }
    logFacetUpdateSort(meta, facetState) {
        return this.logFacetSearchEvent(SearchPageEvents.facetUpdateSort, meta, facetState);
    }
    logFacetShowMore(meta) {
        return this.logCustomEvent(SearchPageEvents.facetShowMore, meta);
    }
    logFacetShowLess(meta) {
        return this.logCustomEvent(SearchPageEvents.facetShowLess, meta);
    }
    logQueryError(meta) {
        return this.logCustomEvent(SearchPageEvents.queryError, meta);
    }
    logQueryErrorBack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logCustomEvent(SearchPageEvents.queryErrorBack);
            return this.logSearchEvent(SearchPageEvents.queryErrorBack);
        });
    }
    logQueryErrorRetry() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logCustomEvent(SearchPageEvents.queryErrorRetry);
            return this.logSearchEvent(SearchPageEvents.queryErrorRetry);
        });
    }
    logQueryErrorClear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logCustomEvent(SearchPageEvents.queryErrorClear);
            return this.logSearchEvent(SearchPageEvents.queryErrorClear);
        });
    }
    logCustomEvent(event, metadata) {
        const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
        const payload = Object.assign(Object.assign({}, this.getOrigins()), { eventType: CustomEventsTypes[event], eventValue: event, lastSearchQueryUid: this.provider.getSearchUID(), customData });
        return this.coveoAnalyticsClient.sendCustomEvent(payload);
    }
    logCustomEventWithType(eventValue, eventType, metadata) {
        const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
        const payload = Object.assign(Object.assign({}, this.getOrigins()), { eventType,
            eventValue, lastSearchQueryUid: this.provider.getSearchUID(), customData });
        return this.coveoAnalyticsClient.sendCustomEvent(payload);
    }
    logSearchEvent(event, metadata) {
        return this.coveoAnalyticsClient.sendSearchEvent(this.getBaseSearchEventRequest(event, metadata));
    }
    logClickEvent(event, info, identifier, metadata) {
        const customData = Object.assign(Object.assign(Object.assign({}, this.provider.getBaseMetadata()), identifier), metadata);
        const payload = Object.assign(Object.assign(Object.assign({}, info), this.getOrigins()), { searchQueryUid: this.provider.getSearchUID(), queryPipeline: this.provider.getPipeline(), actionCause: event, customData });
        return this.coveoAnalyticsClient.sendClickEvent(payload);
    }
    logFacetSearchEvent(event, metadata, facetState) {
        const payload = Object.assign(Object.assign({}, this.getBaseSearchEventRequest(event, metadata)), { facetState });
        return this.coveoAnalyticsClient.sendSearchEvent(payload);
    }
    getBaseSearchEventRequest(event, metadata) {
        const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
        return Object.assign(Object.assign(Object.assign({}, this.provider.getSearchEventRequestPayload()), this.getOrigins()), { searchQueryUid: this.provider.getSearchUID(), queryPipeline: this.provider.getPipeline(), customData, actionCause: event });
    }
    getOrigins() {
        return {
            originLevel1: this.provider.getOriginLevel1(),
            originLevel2: this.provider.getOriginLevel2(),
            originLevel3: this.provider.getOriginLevel3(),
        };
    }
}

const getPipelineInitialState = () => 'default';

const getQueryInitialState = () => ({
    q: '',
    enableQuerySyntax: false,
});

const getSearchHubInitialState = () => 'default';

function getSearchInitialState() {
    return {
        response: {
            results: [],
            searchUid: '',
            totalCountFiltered: 0,
            facets: [],
            queryCorrections: [],
        },
        duration: 0,
        queryExecuted: '',
        error: null,
        automaticallyCorrected: false,
        isLoading: false,
        results: [],
    };
}

class AnalyticsProvider {
    constructor(state) {
        this.state = state;
    }
    getSearchEventRequestPayload() {
        return {
            queryText: this.queryText,
            responseTime: this.responseTime,
            results: this.mapResultsToAnalyticsDocument(),
            numberOfResults: this.numberOfResults,
            getBaseMetadata: this.getBaseMetadata(),
        };
    }
    getBaseMetadata() {
        const { context } = this.state;
        const contextValues = (context === null || context === void 0 ? void 0 : context.contextValues) || {};
        const formattedObject = {};
        for (const [key, value] of Object.entries(contextValues)) {
            const formattedKey = `context_${key}`;
            formattedObject[formattedKey] = value;
        }
        return formattedObject;
    }
    getSearchUID() {
        var _a, _b;
        return (((_a = this.state.search) === null || _a === void 0 ? void 0 : _a.response.searchUid) || ((_b = this.state.recommendation) === null || _b === void 0 ? void 0 : _b.searchUid) ||
            getSearchInitialState().response.searchUid);
    }
    getPipeline() {
        return this.state.pipeline || getPipelineInitialState();
    }
    getOriginLevel1() {
        return this.state.searchHub || getSearchHubInitialState();
    }
    getOriginLevel2() {
        // TODO: When tab implemented;
        // Configurable on headless engine, optionally
        // Need to use tabs as originLevel2, in priority if they exists/available.
        // Otherwise, use configured originLevel2 on the engine.
        // Ultimate fallback should be `default`;
        return this.state.configuration.analytics.originLevel2 || 'default';
    }
    getOriginLevel3() {
        // TODO: When referrer implemented;
        // Configurable on headless engine, optionally
        // If not specified at config time, need to fallback to use current referrer parameter for search API, if any
        // Otherwise: fallback to `default`;
        return this.state.configuration.analytics.originLevel3 || 'default';
    }
    mapResultsToAnalyticsDocument() {
        var _a;
        return (_a = this.state.search) === null || _a === void 0 ? void 0 : _a.response.results.map((r) => ({
            documentUri: r.uri,
            documentUriHash: r.raw.urihash,
        }));
    }
    get queryText() {
        var _a;
        return ((_a = this.state.query) === null || _a === void 0 ? void 0 : _a.q) || getQueryInitialState().q;
    }
    get responseTime() {
        var _a;
        return ((_a = this.state.search) === null || _a === void 0 ? void 0 : _a.duration) || getSearchInitialState().duration;
    }
    get numberOfResults() {
        var _a;
        return (((_a = this.state.search) === null || _a === void 0 ? void 0 : _a.response.results.length) ||
            getSearchInitialState().response.results.length);
    }
}
const configureAnalytics = ({ logger, state, analyticsClientMiddleware = (_, p) => p, provider = new AnalyticsProvider(state), }) => {
    const token = state.configuration.accessToken;
    const endpoint = state.configuration.analytics.apiBaseUrl;
    const runtimeEnvironment = state.configuration.analytics.runtimeEnvironment;
    const client = new CoveoSearchPageClient({
        token,
        endpoint,
        runtimeEnvironment,
        beforeSendHooks: [
            analyticsClientMiddleware,
            (type, payload) => {
                logger.info({
                    ...payload,
                    type,
                    endpoint,
                    token,
                }, 'Analytics request');
                return payload;
            },
        ],
    }, provider);
    if (state.configuration.analytics.enabled === false) {
        client.disable();
    }
    return client;
};
const getVisitorID = () => new CoveoAnalyticsClient({}).currentVisitorId;
const historyStore = new history.HistoryStore();

const getProductRecommendationsInitialState = () => ({
    id: '',
    skus: [],
    maxNumberOfRecommendations: 5,
    filter: {
        brand: '',
        category: '',
    },
    recommendations: [],
    error: null,
    isLoading: false,
    searchUid: '',
    duration: 0,
});

class ProductRecommendationAnalyticsProvider {
    constructor(state) {
        this.state = state;
        this.initialState = getProductRecommendationsInitialState();
    }
    getSearchEventRequestPayload() {
        return {
            queryText: '',
            responseTime: this.responseTime,
            results: this.mapResultsToAnalyticsDocument(),
            numberOfResults: this.numberOfResults,
        };
    }
    getBaseMetadata() {
        var _a;
        return {
            recommendation: ((_a = this.state.productRecommendations) === null || _a === void 0 ? void 0 : _a.id) || this.initialState.id,
        };
    }
    getSearchUID() {
        var _a;
        return (((_a = this.state.productRecommendations) === null || _a === void 0 ? void 0 : _a.searchUid) ||
            this.initialState.searchUid);
    }
    getPipeline() {
        return '';
    }
    getOriginLevel1() {
        return this.state.searchHub || getSearchHubInitialState();
    }
    getOriginLevel2() {
        return this.state.configuration.analytics.originLevel2 || 'default';
    }
    getOriginLevel3() {
        return this.state.configuration.analytics.originLevel3 || 'default';
    }
    mapResultsToAnalyticsDocument() {
        return [];
    }
    get responseTime() {
        var _a;
        return (((_a = this.state.productRecommendations) === null || _a === void 0 ? void 0 : _a.duration) || this.initialState.duration);
    }
    get numberOfResults() {
        var _a;
        return (((_a = this.state.productRecommendations) === null || _a === void 0 ? void 0 : _a.recommendations.length) ||
            this.initialState.recommendations.length);
    }
}

var AnalyticsType;
(function (AnalyticsType) {
    AnalyticsType[AnalyticsType["Search"] = 0] = "Search";
    AnalyticsType[AnalyticsType["Custom"] = 1] = "Custom";
    AnalyticsType[AnalyticsType["Click"] = 2] = "Click";
})(AnalyticsType || (AnalyticsType = {}));
const searchPageState = (getState) => getState();
const makeAnalyticsAction = (prefix, analyticsType, log, provider = (s) => new AnalyticsProvider(s)) => {
    return createAsyncThunk(prefix, async (_, { getState, extra: { analyticsClientMiddleware, logger } }) => {
        const state = searchPageState(getState);
        const client = configureAnalytics({
            state,
            logger,
            analyticsClientMiddleware,
            provider: provider(state),
        });
        const response = await log(client, state);
        logger.info({ client: client.coveoAnalyticsClient, response }, 'Analytics response');
        return { analyticsType };
    });
};
const makeNoopAnalyticsAction = (analyticsType) => {
    return createAsyncThunk('analytics/noop', async () => {
        return { analyticsType };
    });
};
const partialDocumentInformation = (result, state) => {
    var _a;
    const resultIndex = ((_a = state.search) === null || _a === void 0 ? void 0 : _a.response.results.findIndex(({ uniqueId }) => result.uniqueId === uniqueId)) || 0;
    return {
        collectionName: result.raw['collection'] || 'default',
        documentAuthor: result.raw['author'],
        documentPosition: resultIndex + 1,
        documentTitle: result.title,
        documentUri: result.uri,
        documentUriHash: result.raw['urihash'],
        documentUrl: result.clickUri,
        rankingModifier: result.rankingModifier || '',
        sourceName: result.raw['source'],
        queryPipeline: state.pipeline || getPipelineInitialState(),
    };
};
const documentIdentifier = (result) => {
    return {
        contentIDKey: '@permanentid',
        contentIDValue: result.raw.permanentid,
    };
};
const requiredNonEmptyString$1 = new StringValue({
    required: true,
    emptyAllowed: false,
});
const rawPartialDefinition = {
    collection: new StringValue(),
    author: new StringValue(),
    urihash: new StringValue(),
    source: new StringValue(),
    permanentid: new StringValue(),
};
const resultPartialDefinition = {
    uniqueId: requiredNonEmptyString$1,
    raw: new RecordValue({ values: rawPartialDefinition }),
    title: requiredNonEmptyString$1,
    uri: requiredNonEmptyString$1,
    clickUri: requiredNonEmptyString$1,
    rankingModifier: new StringValue({ required: false, emptyAllowed: true }),
};
function partialRawPayload(raw) {
    return Object.assign({}, ...Object.keys(rawPartialDefinition).map((key) => ({ [key]: raw[key] })));
}
function partialResultPayload(result) {
    return Object.assign({}, ...Object.keys(resultPartialDefinition).map((key) => ({
        [key]: result[key],
    })), { raw: partialRawPayload(result.raw) });
}
const validateResultPayload = (result) => new Schema(resultPartialDefinition).validate(partialResultPayload(result));

/**
 * Logs a search event with an `actionCause` value of `recommendationInterfaceLoad`.
 */
const logProductRecommendations = makeAnalyticsAction('analytics/productrecommendations/load', AnalyticsType.Search, (client) => client.logRecommendationInterfaceLoad(), (state) => new ProductRecommendationAnalyticsProvider(state));

const setProductRecommendationsRecommenderId = createAction('productrecommendations/setId', (payload) => validatePayload(payload, {
    id: requiredNonEmptyString,
}));
const setProductRecommendationsSkus = createAction('productrecommendations/setSku', (payload) => validatePayload(payload, {
    skus: new ArrayValue({
        required: true,
        min: 1,
        each: new StringValue({ emptyAllowed: false }),
    }),
}));
const setProductRecommendationsBrandFilter = createAction('productrecommendations/setBrand', (payload) => validatePayload(payload, {
    brand: new StringValue({ required: true, emptyAllowed: true }),
}));
const setProductRecommendationsCategoryFilter = createAction('productrecommendations/setCategory', (payload) => validatePayload(payload, {
    category: new StringValue({ required: true, emptyAllowed: true }),
}));
const setProductRecommendationsMaxNumberOfRecommendations = createAction('productrecommendations/setMaxNumberOfRecommendations', (payload) => validatePayload(payload, {
    number: new NumberValue({ required: true, max: 50, min: 1 }),
}));
const getProductRecommendations = createAsyncThunk('productrecommendations/get', async (_, { getState, rejectWithValue, extra: { searchAPIClient } }) => {
    const state = getState();
    const startedAt = new Date().getTime();
    const fetched = await searchAPIClient.productRecommendations(buildProductRecommendationsRequest(state));
    const duration = new Date().getTime() - startedAt;
    if (isErrorResponse(fetched)) {
        return rejectWithValue(fetched.error);
    }
    return {
        recommendations: fetched.success.results.map(mapResultToProductResult),
        analyticsAction: logProductRecommendations(),
        searchUid: fetched.success.searchUid,
        duration,
    };
});
// TODO: Review the mappings here
const mapResultToProductResult = (result) => {
    return {
        sku: (result.raw.productid || result.raw.sku),
        name: (result.raw.ec_name || result.title),
        thumbnailUrl: (result.raw.ec_image || result.raw.image),
        link: result.clickUri,
        price: (result.raw.ec_price || result.raw.price),
        promoPrice: (result.raw.ec_promo_price || result.raw.promo_price),
        rating: (result.raw.ec_rating || result.raw.rating),
        tags: result.raw.tags,
        brand: (result.raw.ec_brand || result.raw.brand),
        categories: (result.raw.ec_categories || result.raw.categories),
        inStock: (result.raw.ec_in_stock || result.raw.in_stock),
    };
};
const buildProductRecommendationsRequest = (s) => {
    return {
        accessToken: s.configuration.accessToken,
        organizationId: s.configuration.organizationId,
        url: s.configuration.search.apiBaseUrl,
        ...(s.configuration.analytics.enabled && {
            visitorId: getVisitorID(),
        }),
        recommendation: s.productRecommendations.id,
        numberOfResults: s.productRecommendations.maxNumberOfRecommendations,
        mlParameters: {
            ...(s.productRecommendations.skus &&
                s.productRecommendations.skus.length > 0 && {
                itemIds: s.productRecommendations.skus,
            }),
            ...(s.productRecommendations.filter.brand && {
                brandFilter: s.productRecommendations.filter.brand,
            }),
            ...(s.productRecommendations.filter.category && {
                categoryFilter: s.productRecommendations.filter.category,
            }),
        },
        actionsHistory: s.configuration.analytics.enabled
            ? historyStore.getHistory()
            : [],
        ...(s.context && {
            context: s.context.contextValues,
        }),
        ...(s.searchHub && {
            searchHub: s.searchHub,
        }),
    };
};

const productRecommendationsReducer = createReducer(getProductRecommendationsInitialState(), (builder) => {
    builder
        .addCase(setProductRecommendationsRecommenderId, (state, action) => {
        state.id = action.payload.id;
    })
        .addCase(setProductRecommendationsSkus, (state, action) => {
        state.skus = action.payload.skus;
    })
        .addCase(setProductRecommendationsBrandFilter, (state, action) => {
        state.filter.brand = action.payload.brand;
    })
        .addCase(setProductRecommendationsCategoryFilter, (state, action) => {
        state.filter.category = action.payload.category;
    })
        .addCase(setProductRecommendationsMaxNumberOfRecommendations, (state, action) => {
        state.maxNumberOfRecommendations = action.payload.number;
    })
        .addCase(getProductRecommendations.rejected, (state, action) => {
        state.error = action.payload ? action.payload : null;
        state.isLoading = false;
    })
        .addCase(getProductRecommendations.fulfilled, (state, action) => {
        state.error = null;
        state.searchUid = action.payload.searchUid;
        state.recommendations = action.payload.recommendations;
        state.isLoading = false;
    })
        .addCase(getProductRecommendations.pending, (state) => {
        state.isLoading = true;
    });
});

/**
 * Sets the search hub.
 * @param payload (string) The new search hub (may be empty).
 */
const setSearchHub = createAction('searchHub/set', (payload) => validatePayload(payload, new StringValue({ required: true, emptyAllowed: true })));

const searchHubReducer = createReducer(getSearchHubInitialState(), (builder) => {
    builder
        .addCase(setSearchHub, (_, action) => action.payload)
        .addCase(change.fulfilled, (_, action) => action.payload.searchHub)
        .addCase(updateSearchConfiguration, (state, action) => action.payload.searchHub || state);
});

/**
 * Map of reducers that make up the ProductRecommendationsAppState.
 */
const productRecommendationsAppReducers = {
    configuration: configurationReducer,
    productRecommendations: productRecommendationsReducer,
    context: contextReducer,
    searchHub: searchHubReducer,
};

/**
 * Logs a search event with an `actionCause` value of `recommendationInterfaceLoad`.
 */
const logRecommendationUpdate = makeAnalyticsAction('analytics/recommendation/update', AnalyticsType.Search, (client) => client.logRecommendationInterfaceLoad());

/**
 * Set recommendation identifier.
 */
const setRecommendationId = createAction('recommendation/set', (payload) => validatePayload(payload, {
    id: requiredNonEmptyString,
}));
/**
 * Get recommendations.
 */
const getRecommendations = createAsyncThunk('recommendation/get', async (_, { getState, rejectWithValue, extra: { searchAPIClient } }) => {
    const state = getState();
    const startedAt = new Date().getTime();
    const fetched = await searchAPIClient.recommendations(buildRecommendationRequest(state));
    const duration = new Date().getTime() - startedAt;
    if (isErrorResponse(fetched)) {
        return rejectWithValue(fetched.error);
    }
    return {
        recommendations: fetched.success.results,
        analyticsAction: logRecommendationUpdate(),
        duration,
        searchUid: fetched.success.searchUid,
    };
});
const buildRecommendationRequest = (s) => ({
    accessToken: s.configuration.accessToken,
    organizationId: s.configuration.organizationId,
    url: s.configuration.search.apiBaseUrl,
    recommendation: s.recommendation.id,
    actionsHistory: s.configuration.analytics.enabled
        ? historyStore.getHistory()
        : [],
    ...(s.advancedSearchQueries && {
        aq: s.advancedSearchQueries.aq,
        cq: s.advancedSearchQueries.cq,
    }),
    ...(s.pipeline && {
        pipeline: s.pipeline,
    }),
    ...(s.searchHub && {
        searchHub: s.searchHub,
    }),
    ...(s.context && {
        context: s.context.contextValues,
    }),
    ...(s.fields && {
        fieldsToInclude: s.fields.fieldsToInclude,
    }),
});

/**
 * Logs a did-you-mean click event, i.e., when a user clicks on a did-you-mean suggestion.
 */
const logDidYouMeanClick = makeAnalyticsAction('analytics/didyoumean/click', AnalyticsType.Search, (client) => client.logDidYouMeanClick());
/**
 * Logs a did-you-mean automatic event, i.e., when the interface automatically selects a did-you-mean suggestion.
 */
const logDidYouMeanAutomatic = makeAnalyticsAction('analytics/didyoumean/automatic', AnalyticsType.Search, (client) => client.logDidYouMeanAutomatic());

/**
 * Enables did-you-mean.
 */
const enableDidYouMean = createAction('didYouMean/enable');
/**
 * Disables did-you-mean.
 */
const disableDidYouMean = createAction('didYouMean/disable');
/**
 * Applies a did-you-mean correction.
 * @param correction (string) The target correction (e.g., `"corrected string"`).
 */
const applyDidYouMeanCorrection = createAction('didYouMean/correction', (payload) => validatePayload(payload, requiredNonEmptyString));

/**
 * Updates the basic query expression.
 * @param q (string) The new basic query expression (e.g., `acme tornado seeds`).
 */
const updateQuery = createAction('query/updateQuery', (payload) => validatePayload(payload, {
    q: new StringValue(),
    enableQuerySyntax: new BooleanValue(),
}));

function getFacetSetInitialState() {
    return {};
}

function getNumericFacetSetInitialState() {
    return {};
}

function getDateFacetSetInitialState() {
    return {};
}

function getCategoryFacetSetInitialState() {
    return {};
}

function getPaginationInitialState() {
    return {
        firstResult: 0,
        numberOfResults: 10,
        totalCountFiltered: 0,
    };
}

const getAdvancedSearchQueriesInitialState = () => ({
    cq: '',
    aq: '',
});

function getQuerySetInitialState() {
    return {};
}

(function (SortOrder) {
    SortOrder["Ascending"] = "ascending";
    SortOrder["Descending"] = "descending";
})(exports.SortOrder || (exports.SortOrder = {}));
(function (SortBy) {
    /**
     * Uses standard index ranking factors (adjacency, TDIDF) and custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
     */
    SortBy["Relevancy"] = "relevancy";
    /**
     * Uses only custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
     */
    SortBy["QRE"] = "qre";
    /**
     * Uses the date field to sort the query results. This field typically contains the last modification date of each item. May be in ascending or descending order.
     */
    SortBy["Date"] = "date";
    /**
     * Uses the value of a specific sortable field to sort the query results. May be in ascending or descending order.
     */
    SortBy["Field"] = "field";
    /**
     * Does not sort the query results; the index will return result items in an essentially random order.
     */
    SortBy["NoSort"] = "nosort";
})(exports.SortBy || (exports.SortBy = {}));
/**
 * Builds a sort expression that can be understood and executed by the Coveo Platform.
 * @param criterion The criterion to translate to a valid sort query expression.
 */
const buildCriterionExpression = (criterion) => {
    if (isArray(criterion)) {
        return criterion.map((c) => buildCriterionExpression(c)).join(',');
    }
    switch (criterion.by) {
        case exports.SortBy.Relevancy:
        case exports.SortBy.QRE:
        case exports.SortBy.NoSort:
            return criterion.by;
        case exports.SortBy.Date:
            return `date ${criterion.order}`;
        case exports.SortBy.Field:
            return `@${criterion.field} ${criterion.order}`;
        default:
            console.error(`Unknown criterion: ${criterion}`);
            return '';
    }
};
/**
 * Utility function that builds a valid `SortByRelevancy` criterion.
 * @returns A `SortByRelevancy` criterion.
 */
const buildRelevanceSortCriterion = () => ({
    by: exports.SortBy.Relevancy,
});
/**
 * Utility function that builds a valid `SortByDate` criterion.
 * @param order The order (ascending/descending) on which to sort.
 * @returns A `SortByDate` criterion.
 */
const buildDateSortCriterion = (order) => ({
    by: exports.SortBy.Date,
    order,
});
/**
 * Utility function that builds a valid `SortByField` criterion.
 * @param field The sortable field on which to sort.
 * @param order The order (ascending/descending) on which to sort.
 * @returns A `SortByField` criterion.
 */
const buildFieldSortCriterion = (field, order) => ({
    by: exports.SortBy.Field,
    order,
    field,
});
/**
 * Utility function that builds a valid `SortByQRE` criterion.
 * @returns A `SortByQRE` criterion.
 */
const buildQueryRankingExpressionSortCriterion = () => ({
    by: exports.SortBy.QRE,
});
/**
 * Utility function that builds a valid `SortByNoSort` criterion.
 * @returns A `SortByNoSort` criterion.
 */
const buildNoSortCriterion = () => ({ by: exports.SortBy.NoSort });

function getSortCriteriaInitialState() {
    return buildCriterionExpression(buildRelevanceSortCriterion());
}

function getFacetOptionsInitialState() {
    return {
        freezeFacetOrder: false,
    };
}

const logFetchMoreResults = makeAnalyticsAction('search/logFetchMoreResults', AnalyticsType.Search, (client) => client.logFetchMoreResults());
const logQueryError = (error) => makeAnalyticsAction('search/queryError', AnalyticsType.Search, (client, state) => {
    var _a, _b, _c;
    return client.logQueryError({
        query: ((_a = state.query) === null || _a === void 0 ? void 0 : _a.q) || getQueryInitialState().q,
        aq: ((_b = state.advancedSearchQueries) === null || _b === void 0 ? void 0 : _b.aq) ||
            getAdvancedSearchQueriesInitialState().aq,
        cq: ((_c = state.advancedSearchQueries) === null || _c === void 0 ? void 0 : _c.cq) ||
            getAdvancedSearchQueriesInitialState().cq,
        // TODO: add dq when its added to advanced queries
        dq: '',
        errorType: error.type,
        errorMessage: error.message,
    });
})();

function sortFacets(facets, sortOrder) {
    const payloadMap = {};
    facets.forEach((f) => (payloadMap[f.facetId] = f));
    return sortOrder
        .map((id) => payloadMap[id])
        .filter((payload) => payload !== undefined);
}

const getDebugInitialState = () => false;

function getFacetOrderInitialState() {
    return [];
}

const fetchFromAPI = async (client, state, request) => {
    var _a;
    const startedAt = new Date().getTime();
    const response = await client.search(request);
    const duration = new Date().getTime() - startedAt;
    const queryExecuted = ((_a = state.query) === null || _a === void 0 ? void 0 : _a.q) || '';
    return { response, duration, queryExecuted, requestExecuted: request };
};
/**
 * Executes a search query.
 * @param analyticsAction (SearchAction) The analytics action to log after a successful query.
 */
/**
 * Executes a search query.
 * @param analyticsAction (SearchAction) The analytics action to log after a successful query.
 */
const executeSearch = createAsyncThunk('search/executeSearch', async (analyticsAction, { getState, dispatch, rejectWithValue, extra: { searchAPIClient } }) => {
    const state = getState();
    addEntryInActionsHistory(state);
    const fetched = await fetchFromAPI(searchAPIClient, state, buildSearchRequest(state));
    if (isErrorResponse(fetched.response)) {
        dispatch(logQueryError(fetched.response.error));
        return rejectWithValue(fetched.response.error);
    }
    if (!shouldReExecuteTheQueryWithCorrections(state, fetched.response.success)) {
        dispatch(snapshot(extractHistory(state)));
        return {
            ...fetched,
            response: fetched.response.success,
            automaticallyCorrected: false,
            analyticsAction,
        };
    }
    dispatch(analyticsAction);
    const retried = await automaticallyRetryQueryWithCorrection(searchAPIClient, fetched.response.success.queryCorrections[0].correctedQuery, getState, dispatch);
    if (isErrorResponse(retried.response)) {
        dispatch(logQueryError(retried.response.error));
        return rejectWithValue(retried.response.error);
    }
    dispatch(snapshot(extractHistory(getState())));
    return {
        ...retried,
        response: {
            ...retried.response.success,
            queryCorrections: fetched.response.success.queryCorrections,
        },
        automaticallyCorrected: true,
        analyticsAction: logDidYouMeanAutomatic(),
    };
});
const fetchMoreResults = createAsyncThunk('search/fetchMoreResults', async (_, { getState, dispatch, rejectWithValue, extra: { searchAPIClient } }) => {
    const state = getState();
    const fetched = await fetchFromAPI(searchAPIClient, state, buildFetchMoreRequest(state));
    if (isErrorResponse(fetched.response)) {
        dispatch(logQueryError(fetched.response.error));
        return rejectWithValue(fetched.response.error);
    }
    dispatch(snapshot(extractHistory(state)));
    return {
        ...fetched,
        response: fetched.response.success,
        automaticallyCorrected: false,
        analyticsAction: logFetchMoreResults(),
    };
});
const automaticallyRetryQueryWithCorrection = async (client, correction, getState, dispatch) => {
    dispatch(updateQuery({ q: correction }));
    const fetched = await fetchFromAPI(client, getState(), buildSearchRequest(getState()));
    dispatch(applyDidYouMeanCorrection(correction));
    return fetched;
};
const shouldReExecuteTheQueryWithCorrections = (state, res) => {
    var _a;
    if (((_a = state.didYouMean) === null || _a === void 0 ? void 0 : _a.enableDidYouMean) === true &&
        res.results.length === 0 &&
        res.queryCorrections.length !== 0) {
        return true;
    }
    return false;
};
const extractHistory = (state) => {
    var _a, _b;
    return ({
        context: state.context || getContextInitialState(),
        facetSet: state.facetSet || getFacetSetInitialState(),
        numericFacetSet: state.numericFacetSet || getNumericFacetSetInitialState(),
        dateFacetSet: state.dateFacetSet || getDateFacetSetInitialState(),
        categoryFacetSet: state.categoryFacetSet || getCategoryFacetSetInitialState(),
        pagination: state.pagination || getPaginationInitialState(),
        query: state.query || getQueryInitialState(),
        advancedSearchQueries: state.advancedSearchQueries || getAdvancedSearchQueriesInitialState(),
        querySet: state.querySet || getQuerySetInitialState(),
        sortCriteria: state.sortCriteria || getSortCriteriaInitialState(),
        pipeline: state.pipeline || getPipelineInitialState(),
        searchHub: state.searchHub || getSearchHubInitialState(),
        facetOptions: state.facetOptions || getFacetOptionsInitialState(),
        facetOrder: (_a = state.facetOrder) !== null && _a !== void 0 ? _a : getFacetOrderInitialState(),
        debug: (_b = state.debug) !== null && _b !== void 0 ? _b : getDebugInitialState(),
    });
};
const buildSearchRequest = (state) => {
    return {
        accessToken: state.configuration.accessToken,
        organizationId: state.configuration.organizationId,
        url: state.configuration.search.apiBaseUrl,
        debug: state.debug,
        ...(state.configuration.analytics.enabled && {
            visitorId: getVisitorID(),
        }),
        ...(state.advancedSearchQueries && {
            aq: state.advancedSearchQueries.aq,
            cq: state.advancedSearchQueries.cq,
        }),
        ...(state.context && {
            context: state.context.contextValues,
        }),
        ...(state.didYouMean && {
            enableDidYouMean: state.didYouMean.enableDidYouMean,
        }),
        ...(state.facetSet && {
            facets: getFacets(state),
        }),
        ...(state.fields && {
            fieldsToInclude: state.fields.fieldsToInclude,
        }),
        ...(state.pagination && {
            numberOfResults: state.pagination.numberOfResults,
            firstResult: state.pagination.firstResult,
        }),
        ...(state.pipeline && {
            pipeline: state.pipeline,
        }),
        ...(state.query && {
            q: state.query.q,
            enableQuerySyntax: state.query.enableQuerySyntax,
        }),
        ...(state.searchHub && {
            searchHub: state.searchHub,
        }),
        ...(state.sortCriteria && {
            sortCriteria: state.sortCriteria,
        }),
        ...(state.facetOptions && {
            facetOptions: state.facetOptions,
        }),
    };
};
const buildFetchMoreRequest = (state) => {
    var _a, _b, _c, _d;
    const request = buildSearchRequest(state);
    return {
        ...request,
        firstResult: ((_b = (_a = state.pagination) === null || _a === void 0 ? void 0 : _a.firstResult) !== null && _b !== void 0 ? _b : 0) +
            ((_d = (_c = state.search) === null || _c === void 0 ? void 0 : _c.results.length) !== null && _d !== void 0 ? _d : 0),
    };
};
function getFacets(state) {
    return [...getFacetsInOrder(state), ...getRemainingUnorderedFacets(state)];
}
function getFacetsInOrder(state) {
    var _a;
    return sortFacets(getAllFacets(state), (_a = state.facetOrder) !== null && _a !== void 0 ? _a : []);
}
function getRemainingUnorderedFacets(state) {
    var _a;
    const facetOrder = (_a = state.facetOrder) !== null && _a !== void 0 ? _a : [];
    return getAllFacets(state).filter((f) => facetOrder.indexOf(f.facetId) === -1);
}
function getAllFacets(state) {
    return [
        ...getFacetRequests(state.facetSet),
        ...getFacetRequests(state.numericFacetSet),
        ...getFacetRequests(state.dateFacetSet),
        ...getCategoryFacetRequests(state.categoryFacetSet),
    ];
}
function getCategoryFacetRequests(state) {
    return Object.values(state || {}).map((slice) => slice.request);
}
function getFacetRequests(requests = {}) {
    return Object.keys(requests).map((id) => requests[id]);
}
const addEntryInActionsHistory = (state) => {
    var _a;
    if (state.configuration.analytics.enabled) {
        historyStore.addElement({
            name: 'Query',
            value: ((_a = state.query) === null || _a === void 0 ? void 0 : _a.q) || getQueryInitialState().q,
            time: JSON.stringify(new Date()),
        });
    }
};

const analyticsMiddleware = (api) => (next) => (action) => {
    var _a, _b;
    // Why all these shenanigans ?
    // https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions
    // analyticsAction is returned as a function in some action payload. A function is non serializable.
    // This is not recommended, with one exception: It has to be handled before any reducer has the chance to do it's job, and should not stored in the state.
    // To meet those conditions, we ensure the analyticsMiddleware is always the first executed (in store.ts/configureStore) and that it is removed from the payload.
    // We only keep a reference to the function in order to dispatch it correctly after the reducer (next) has the chance of processing the action/state change
    const analytics = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.analyticsAction;
    if (analytics !== undefined) {
        (_b = action.payload) === null || _b === void 0 ? true : delete _b.analyticsAction;
    }
    const ret = next(action);
    if (action.type === executeSearch.fulfilled.type && analytics === undefined) {
        console.error('No analytics action associated with search:', action);
    }
    if (action.type === getRecommendations.fulfilled && analytics === undefined) {
        console.error('No analytics action associated with recommendation:', action);
    }
    if (action.type === getProductRecommendations.fulfilled &&
        analytics === undefined) {
        console.error('No analytics action associated with product recommendation:', action);
    }
    if (analytics !== undefined) {
        api.dispatch(analytics);
    }
    return ret;
};

const logActionErrorMiddleware = (logger) => () => (next) => (action) => {
    if (!action.error) {
        return next(action);
    }
    const error = action.error;
    logger.error(error.stack || error.message || error.name || 'Error', `Action dispatch error ${action.type}`, action);
    // Validation errors should prevent further dispatching
    if (action.error.name === 'SchemaValidationError') {
        return;
    }
    return next(action);
};
const logActionMiddleware = (logger) => (api) => (next) => (action) => {
    logger.debug({
        action,
        nextState: api.getState(),
    }, `Action dispatched: ${action.type}`);
    return next(action);
};

function configureStore$1({ reducers, preloadedState, middlewares = [], thunkExtraArguments, }) {
    return configureStore({
        reducer: combineReducers(reducers),
        preloadedState,
        devTools: {
            stateSanitizer: (state) => state.history
                ? { ...state, history: '<<OMIT>>' }
                : state,
        },
        middleware: (getDefaultMiddleware) => [
            logActionErrorMiddleware(thunkExtraArguments.logger),
            analyticsMiddleware,
            ...middlewares,
            ...getDefaultMiddleware({ thunk: { extraArgument: thunkExtraArguments } }),
            logActionMiddleware(thunkExtraArguments.logger),
        ],
    });
}

const NoopPostprocessSearchResponseMiddleware = (response) => response;
const NoopPostprocessFacetSearchResponseMiddleware = (response) => response;
const NoopPostprocessQuerySuggestResponseMiddleware = (response) => response;

/**
 * The global headless engine.
 * You should instantiate one `HeadlessEngine` class per application and share it.
 * Every headless controller requires an instance of `Engine` as a parameter.
 */
class HeadlessEngine {
    constructor(options) {
        this.options = options;
        this.accessTokenRenewalsAttempts = 0;
        this.resetRenewalTriesAfterDelay = tsDebounce.debounce(() => (this.accessTokenRenewalsAttempts = 0), 500);
        this.initLogger();
        this.validateConfiguration(options);
        this.initStore();
        this.reduxStore.dispatch(updateBasicConfiguration({
            accessToken: options.configuration.accessToken,
            platformUrl: options.configuration.platformUrl,
            organizationId: options.configuration.organizationId,
        }));
        if (options.configuration.search) {
            this.reduxStore.dispatch(updateSearchConfiguration(options.configuration.search));
        }
        if (options.configuration.analytics) {
            const { analyticsClientMiddleware, ...rest } = options.configuration.analytics;
            this.reduxStore.dispatch(updateAnalyticsConfiguration(rest));
        }
    }
    validateConfiguration(options) {
        const configurationSchema = new Schema({
            organizationId: new StringValue({
                required: true,
                emptyAllowed: false,
            }),
            accessToken: new StringValue({
                required: true,
                emptyAllowed: false,
            }),
            platformUrl: new StringValue({
                required: false,
                emptyAllowed: false,
            }),
            search: new RecordValue({
                options: {
                    required: false,
                },
                values: {
                    pipeline: new StringValue({
                        required: false,
                        emptyAllowed: false,
                    }),
                    searchHub: new StringValue({
                        required: false,
                        emptyAllowed: false,
                    }),
                },
            }),
        });
        try {
            configurationSchema.validate(options.configuration);
        }
        catch (error) {
            this.logger.error(error, 'Headless engine configuration error');
            throw error;
        }
    }
    initLogger() {
        var _a, _b, _c;
        this.logger = pino({
            name: '@coveo/headless',
            level: ((_a = this.options.loggerOptions) === null || _a === void 0 ? void 0 : _a.level) || 'warn',
            formatters: {
                log: (_b = this.options.loggerOptions) === null || _b === void 0 ? void 0 : _b.logFormatter,
            },
            browser: {
                transmit: {
                    send: ((_c = this.options.loggerOptions) === null || _c === void 0 ? void 0 : _c.browserPostLogHook) || (() => { }),
                },
            },
        });
    }
    initStore() {
        const { search } = this.options.configuration;
        this.reduxStore = configureStore$1({
            preloadedState: this.options.preloadedState,
            reducers: this.options.reducers,
            middlewares: this.options.middlewares,
            thunkExtraArguments: {
                searchAPIClient: new SearchAPIClient({
                    logger: this.logger,
                    renewAccessToken: () => this.renewAccessToken(),
                    preprocessRequest: (search === null || search === void 0 ? void 0 : search.preprocessRequestMiddleware) ||
                        NoopPreprocessRequestMiddleware,
                    postprocessSearchResponseMiddleware: (search === null || search === void 0 ? void 0 : search.preprocessSearchResponseMiddleware) ||
                        NoopPostprocessSearchResponseMiddleware,
                    postprocessFacetSearchResponseMiddleware: (search === null || search === void 0 ? void 0 : search.preprocessFacetSearchResponseMiddleware) ||
                        NoopPostprocessFacetSearchResponseMiddleware,
                    postprocessQuerySuggestResponseMiddleware: (search === null || search === void 0 ? void 0 : search.preprocessQuerySuggestResponseMiddleware) ||
                        NoopPostprocessQuerySuggestResponseMiddleware,
                }),
                analyticsClientMiddleware: this.analyticsClientMiddleware(this.options),
                logger: this.logger,
                validatePayload: validatePayloadAndThrow,
            },
        });
    }
    /**
     * @returns A configuration with sample data for testing purposes.
     */
    static getSampleConfiguration() {
        return {
            organizationId: 'searchuisamples',
            accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
            search: {
                pipeline: 'default',
                searchHub: 'default',
            },
        };
    }
    /**
     * Enable analytics tracking
     */
    enableAnalytics() {
        this.dispatch(enableAnalytics());
    }
    /**
     * Disable analytics tracking
     */
    disableAnalytics() {
        this.dispatch(disableAnalytics());
    }
    get store() {
        return this.reduxStore;
    }
    get dispatch() {
        return this.reduxStore.dispatch;
    }
    get subscribe() {
        return this.reduxStore.subscribe;
    }
    get state() {
        return this.reduxStore.getState();
    }
    async renewAccessToken() {
        if (!this.options.configuration.renewAccessToken) {
            return '';
        }
        this.accessTokenRenewalsAttempts++;
        this.resetRenewalTriesAfterDelay();
        if (this.accessTokenRenewalsAttempts > 5) {
            return '';
        }
        try {
            const accessToken = await this.options.configuration.renewAccessToken();
            this.dispatch(updateBasicConfiguration({ accessToken }));
            return accessToken;
        }
        catch (error) {
            return '';
        }
    }
    analyticsClientMiddleware(options) {
        var _a;
        return (((_a = options.configuration.analytics) === null || _a === void 0 ? void 0 : _a.analyticsClientMiddleware) ||
            ((_, p) => p));
    }
}

const idDefinition = {
    id: requiredNonEmptyString,
};
/**
 * Registers a new query suggest entity to the headless state to enable the Coveo ML query suggestions feature.
 * @param id (string) A unique identifier for the new query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param q (string) The partial basic query expression for which to request query suggestions (e.g., `cov`).
 * @param count (number) The number of query suggestions to request from Coveo ML (e.g., `3`). Default: `5`.
 */
const registerQuerySuggest = createAction('querySuggest/register', (payload) => validatePayload(payload, {
    ...idDefinition,
    q: new StringValue(),
    count: new NumberValue({ min: 0 }),
}));
/**
 * Unregisters an existing query suggest entity from the headless state.
 * @param id (string) The unique identifier of the query suggest entity to unregister (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const unregisterQuerySuggest = createAction('querySuggest/unregister', (payload) => validatePayload(payload, idDefinition));
/**
 * Selects a suggestion provided through a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param expression (string) The selected query suggestion (e.g., `coveo`).
 */
const selectQuerySuggestion = createAction('querySuggest/selectSuggestion', (payload) => validatePayload(payload, {
    ...idDefinition,
    expression: requiredEmptyAllowedString,
}));
/**
 * Clears the current partial basic query expression and the list of query suggestions in a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const clearQuerySuggest = createAction('querySuggest/clear', (payload) => validatePayload(payload, idDefinition));
/**
 * Clears the list of query suggestions in a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const clearQuerySuggestCompletions = createAction('querySuggest/clearSuggestions', (payload) => validatePayload(payload, idDefinition));
/**
 * Fetches a list of query suggestions for a specific query suggest entity according to the current headless state.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const fetchQuerySuggestions = createAsyncThunk('querySuggest/fetch', async (payload, { getState, rejectWithValue, extra: { searchAPIClient, validatePayload } }) => {
    validatePayload(payload, idDefinition);
    const id = payload.id;
    const response = await searchAPIClient.querySuggest(buildQuerySuggestRequest(id, getState()));
    if (isErrorResponse(response)) {
        return rejectWithValue({ id, ...response.error });
    }
    return {
        id,
        ...response.success,
    };
});
const buildQuerySuggestRequest = (id, s) => {
    return {
        accessToken: s.configuration.accessToken,
        organizationId: s.configuration.organizationId,
        url: s.configuration.search.apiBaseUrl,
        count: s.querySuggest[id].count,
        q: s.querySuggest[id].q,
        actionsHistory: s.configuration.analytics.enabled
            ? historyStore.getHistory()
            : [],
        ...(s.context && { context: s.context.contextValues }),
        ...(s.pipeline && { pipeline: s.pipeline }),
        ...(s.searchHub && { searchHub: s.searchHub }),
    };
};

const searchParametersDefinition = {
    q: new StringValue(),
    enableQuerySyntax: new BooleanValue(),
    aq: new StringValue(),
    cq: new StringValue(),
    firstResult: new NumberValue({ min: 0 }),
    numberOfResults: new NumberValue({ min: 0 }),
    sortCriteria: new StringValue(),
    f: new RecordValue(),
    cf: new RecordValue(),
    nf: new RecordValue(),
    df: new RecordValue(),
    debug: new BooleanValue(),
};

/** Restores search parameters from e.g. a url*/
const restoreSearchParameters = createAction('searchParameters/restore', (payload) => validatePayload(payload, searchParametersDefinition));

const queryReducer = createReducer(getQueryInitialState(), (builder) => builder
    .addCase(updateQuery, (state, action) => ({ ...state, ...action.payload }))
    .addCase(applyDidYouMeanCorrection, (state, action) => {
    state.q = action.payload;
})
    .addCase(selectQuerySuggestion, (state, action) => {
    state.q = action.payload.expression;
})
    .addCase(change.fulfilled, (_, action) => action.payload.query)
    .addCase(restoreSearchParameters, (state, action) => {
    var _a, _b;
    state.q = (_a = action.payload.q) !== null && _a !== void 0 ? _a : state.q;
    state.enableQuerySyntax = (_b = action.payload.enableQuerySyntax) !== null && _b !== void 0 ? _b : state.enableQuerySyntax;
}));

function isTriggerRedirect(trigger) {
    return trigger.type === 'redirect';
}

/**
 * The plan of execution of a search request.
 */
class ExecutionPlan {
    constructor(response) {
        this.response = response;
    }
    /**
     * Gets the final value of the basic expression (`q`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get basicExpression() {
        return this.response.parsedInput.basicExpression;
    }
    /**
     * Gets the final value of the large expression (`lq`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get largeExpression() {
        return this.response.parsedInput.largeExpression;
    }
    /**
     * Gets the URL to redirect the browser to, if the search request satisfies the condition of a `redirect` trigger rule in the query pipeline.
     *
     * Returns `null` otherwise.
     */
    get redirectionUrl() {
        const redirects = this.response.preprocessingOutput.triggers.filter(isTriggerRedirect);
        return redirects.length ? redirects[0].content : null;
    }
}

/**
 * Log trigger redirection
 */
const logTriggerRedirect = makeAnalyticsAction('analytics/trigger/redirection', AnalyticsType.Search, (client, state) => {
    if (state.redirection && state.redirection.redirectTo !== null) {
        return client.logTriggerRedirect({
            redirectedTo: state.redirection.redirectTo,
        });
    }
    return;
});

/**
 * Preprocesses the query for the current headless state, and updates the redirection URL if a redirect trigger was fired in the query pipeline.
 * @param defaultRedirectionUrl (string) The default URL to which to redirect the user.
 */
const checkForRedirection = createAsyncThunk('redirection/check', async (payload, { dispatch, getState, rejectWithValue, extra: { searchAPIClient, validatePayload }, }) => {
    validatePayload(payload, {
        defaultRedirectionUrl: new StringValue({
            emptyAllowed: false,
            url: true,
        }),
    });
    const response = await searchAPIClient.plan(buildPlanRequest(getState()));
    if (isErrorResponse(response)) {
        return rejectWithValue(response.error);
    }
    const planRedirection = new ExecutionPlan(response.success).redirectionUrl;
    if (planRedirection) {
        dispatch(logTriggerRedirect());
    }
    return planRedirection || payload.defaultRedirectionUrl;
});
const buildPlanRequest = (state) => {
    return {
        accessToken: state.configuration.accessToken,
        organizationId: state.configuration.organizationId,
        url: state.configuration.search.apiBaseUrl,
        q: state.query.q,
        ...(state.context && { context: state.context.contextValues }),
        ...(state.pipeline && { pipeline: state.pipeline }),
        ...(state.searchHub && { searchHub: state.searchHub }),
    };
};

const getRedirectionInitialState = () => ({
    redirectTo: null,
});

const redirectionReducer = createReducer(getRedirectionInitialState(), (builder) => builder.addCase(checkForRedirection.fulfilled, (state, action) => {
    state.redirectTo = action.payload;
}));

const querySetDefinition = {
    id: requiredNonEmptyString,
    query: requiredEmptyAllowedString,
};
/**
 * Registers a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The initial basic query expression.
 */
const registerQuerySetQuery = createAction('querySet/register', (payload) => validatePayload(payload, querySetDefinition));
/**
 * Updates a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The new basic query expression.
 */
const updateQuerySetQuery = createAction('querySet/update', (payload) => validatePayload(payload, querySetDefinition));

const getQuerySuggestInitialState = () => ({
    id: '',
    completions: [],
    count: 5,
    q: '',
    currentRequestId: '',
    error: null,
    partialQueries: [],
});

const querySuggestReducer = createReducer({}, (builder) => builder
    .addCase(registerQuerySuggest, (state, action) => {
    state[action.payload.id] = {
        ...getQuerySuggestInitialState(),
        ...action.payload,
    };
})
    .addCase(unregisterQuerySuggest, (state, action) => {
    delete state[action.payload.id];
})
    .addCase(fetchQuerySuggestions.pending, (state, action) => {
    state[action.meta.arg.id].currentRequestId = action.meta.requestId;
})
    .addCase(fetchQuerySuggestions.fulfilled, (state, action) => {
    var _a;
    const id = action.meta.arg.id;
    if (action.meta.requestId === ((_a = state[id]) === null || _a === void 0 ? void 0 : _a.currentRequestId)) {
        const { q } = state[id];
        if (q) {
            state[id].partialQueries.push(q);
        }
        state[id].completions = action.payload.completions;
    }
})
    .addCase(fetchQuerySuggestions.rejected, (state, action) => {
    state[action.payload.id].error = action.payload;
})
    .addCase(updateQuerySetQuery, (state, action) => {
    const { id, query } = action.payload;
    if (id in state) {
        state[id].q = query;
    }
})
    .addCase(clearQuerySuggest, (state, action) => {
    const { id } = action.payload;
    state[id].q = '';
    state[id].completions = [];
})
    .addCase(clearQuerySuggestCompletions, (state, action) => {
    state[action.payload.id].completions = [];
})
    .addCase(selectQuerySuggestion, (state, action) => {
    const { id, expression } = action.payload;
    state[id].q = expression;
    state[id].completions = [];
})
    .addCase(executeSearch.fulfilled, (state) => {
    for (const value of Object.values(state)) {
        if (value) {
            value.partialQueries = [];
        }
    }
}));

const querySetReducer = createReducer(getQuerySetInitialState(), (builder) => {
    builder
        .addCase(registerQuerySetQuery, (state, action) => {
        const { id, query } = action.payload;
        if (id in state) {
            return;
        }
        state[id] = query;
    })
        .addCase(updateQuerySetQuery, (state, action) => {
        const { id, query } = action.payload;
        updateQuery$1(state, id, query);
    })
        .addCase(selectQuerySuggestion, (state, action) => {
        const { id, expression } = action.payload;
        updateQuery$1(state, id, expression);
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const { queryExecuted } = action.payload;
        Object.keys(state).forEach((q) => (state[q] = queryExecuted));
    })
        .addCase(change.fulfilled, (state, action) => {
        for (const [id, query] of Object.entries(action.payload.querySet)) {
            updateQuery$1(state, id, query);
        }
    });
});
const updateQuery$1 = (state, id, query) => {
    if (id in state) {
        state[id] = query;
    }
};

function handleRejectedSearch(state, action) {
    state.error = action.payload ? action.payload : null;
    state.isLoading = false;
}
function handleFulfilledSearch(state, action) {
    state.error = null;
    state.response = action.payload.response;
    state.queryExecuted = action.payload.queryExecuted;
    state.duration = action.payload.duration;
    state.isLoading = false;
}
function handlePendingSearch(state) {
    state.isLoading = true;
}
const searchReducer = createReducer(getSearchInitialState(), (builder) => {
    builder.addCase(executeSearch.rejected, handleRejectedSearch);
    builder.addCase(fetchMoreResults.rejected, handleRejectedSearch);
    builder.addCase(executeSearch.fulfilled, (state, action) => {
        handleFulfilledSearch(state, action);
        state.results = action.payload.response.results;
    });
    builder.addCase(fetchMoreResults.fulfilled, (state, action) => {
        handleFulfilledSearch(state, action);
        state.results = [...state.results, ...action.payload.response.results];
    });
    builder.addCase(executeSearch.pending, handlePendingSearch);
    builder.addCase(fetchMoreResults.pending, handlePendingSearch);
});

const numberValue = new NumberValue({ required: true, min: 0 });
/**
 * Initializes the `numberOfResults` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults).
 * @param payload (number) The initial number of results.
 */
const registerNumberOfResults = createAction('pagination/registerNumberOfResults', (payload) => validatePayload(payload, numberValue));
/**
 * Updates the `numberOfResults` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults).
 * @param payload (number) The new number of results.
 */
const updateNumberOfResults = createAction('pagination/updateNumberOfResults', (payload) => validatePayload(payload, numberValue));
/**
 * Sets the initial page by initializing the `firstResult` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult).
 * @param payload (number) The initial page number.
 */
const registerPage = createAction('pagination/registerPage', (payload) => validatePayload(payload, numberValue));
/**
 * Updates the page by updating the `firstResult` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult).
 * @param payload (number) The new page number.
 */
const updatePage = createAction('pagination/updatePage', (payload) => validatePayload(payload, numberValue));
/**
 * Updates the page to the next page.
 */
const nextPage = createAction('pagination/nextPage');
/**
 * Updates the page to the previous page.
 */
const previousPage = createAction('pagination/previousPage');

const minimumPage = 1;
const maximumNumberOfResultsFromIndex = 1000;
const paginationReducer = createReducer(getPaginationInitialState(), (builder) => {
    builder
        .addCase(registerNumberOfResults, (state, action) => {
        const page = determineCurrentPage(state);
        const newNumberOfResults = action.payload;
        state.numberOfResults = newNumberOfResults;
        state.firstResult = calculateFirstResult(page, newNumberOfResults);
    })
        .addCase(updateNumberOfResults, (state, action) => {
        state.numberOfResults = action.payload;
        state.firstResult = 0;
    })
        .addCase(registerPage, (state, action) => {
        const page = action.payload;
        state.firstResult = calculateFirstResult(page, state.numberOfResults);
    })
        .addCase(updatePage, (state, action) => {
        const page = action.payload;
        state.firstResult = calculateFirstResult(page, state.numberOfResults);
    })
        .addCase(previousPage, (state) => {
        const page = determineCurrentPage(state);
        const previousPage = Math.max(page - 1, minimumPage);
        state.firstResult = calculateFirstResult(previousPage, state.numberOfResults);
    })
        .addCase(nextPage, (state) => {
        const page = determineCurrentPage(state);
        const maxPage = determineMaxPage(state);
        const nextPage = Math.min(page + 1, maxPage);
        state.firstResult = calculateFirstResult(nextPage, state.numberOfResults);
    })
        .addCase(change.fulfilled, (state, action) => {
        state.numberOfResults = action.payload.pagination.numberOfResults;
        state.firstResult = action.payload.pagination.firstResult;
    })
        .addCase(restoreSearchParameters, (state, action) => {
        var _a, _b;
        state.firstResult = (_a = action.payload.firstResult) !== null && _a !== void 0 ? _a : state.firstResult;
        state.numberOfResults = (_b = action.payload.numberOfResults) !== null && _b !== void 0 ? _b : state.numberOfResults;
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const { response } = action.payload;
        state.totalCountFiltered = response.totalCountFiltered;
    });
});
function determineCurrentPage(state) {
    const { firstResult, numberOfResults } = state;
    return calculatePage(firstResult, numberOfResults);
}
function determineMaxPage(state) {
    const { totalCountFiltered, numberOfResults } = state;
    return calculateMaxPage(totalCountFiltered, numberOfResults);
}
function calculateFirstResult(page, numberOfResults) {
    return (page - 1) * numberOfResults;
}
function calculatePage(firstResult, numberOfResults) {
    return firstResult / numberOfResults + 1;
}
function calculateMaxPage(totalCountFiltered, numberOfResults) {
    const totalCount = Math.min(totalCountFiltered, maximumNumberOfResultsFromIndex);
    return Math.ceil(totalCount / numberOfResults);
}

const criterionDefinition = {
    by: new EnumValue({ enum: exports.SortBy, required: true }),
};
/**
 * Initializes the sortCriteria query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
 * @param payload (SortCriterion) The initial sort criterion.
 */
const registerSortCriterion = createAction('sortCriteria/register', (payload) => validate(payload));
/**
 * Updates the sortCriteria query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
 * @param payload (SortCriterion) The sort criterion to set.
 */
const updateSortCriterion = createAction('sortCriteria/update', (payload) => validate(payload));
const validate = (payload) => {
    if (isArray(payload)) {
        payload.forEach((p) => validatePayload(p, criterionDefinition));
        return { payload };
    }
    return validatePayload(payload, criterionDefinition);
};

const sortCriteriaReducer = createReducer(getSortCriteriaInitialState(), (builder) => {
    builder
        .addCase(registerSortCriterion, (_, action) => buildCriterionExpression(action.payload))
        .addCase(updateSortCriterion, (_, action) => buildCriterionExpression(action.payload))
        .addCase(change.fulfilled, (_, action) => action.payload.sortCriteria)
        .addCase(restoreSearchParameters, (state, action) => {
        var _a;
        return (_a = action.payload.sortCriteria) !== null && _a !== void 0 ? _a : state;
    });
});

const facetIdDefinition = requiredNonEmptyString;

const facetValueDefinition = {
    value: requiredNonEmptyString,
    numberOfResults: new NumberValue({ min: 0 }),
    state: requiredNonEmptyString,
};

const facetRegistrationOptionsDefinition = {
    facetId: facetIdDefinition,
    field: new StringValue({ required: true, emptyAllowed: true }),
    delimitingCharacter: new StringValue({ required: false, emptyAllowed: true }),
    filterFacetCount: new BooleanValue({ required: false }),
    injectionDepth: new NumberValue({ required: false, min: 0 }),
    numberOfValues: new NumberValue({ required: false, min: 1 }),
    sortCriteria: new Value({ required: false }),
};
/**
 * Registers a facet in the facet set.
 * @param (FacetRegistrationOptions) The options to register the facet with.
 */
const registerFacet = createAction('facet/register', (payload) => validatePayload(payload, facetRegistrationOptionsDefinition));
/**
 * Toggles a facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (FacetValue) The target facet value.
 */
const toggleSelectFacetValue = createAction('facet/toggleSelectValue', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: facetValueDefinition }),
}));
/**
 * Deselects all values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const deselectAllFacetValues = createAction('facet/deselectAll', (payload) => validatePayload(payload, facetIdDefinition));
/**
 * Updates the sort criterion of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (FacetSortCriterion) The criterion by which to sort the facet.
 */
const updateFacetSortCriterion = createAction('facet/updateSortCriterion', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    criterion: new Value({ required: true }),
}));
/**
 * Updates the number of values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The new number of facet values (e.g., `10`).
 */
const updateFacetNumberOfValues = createAction('facet/updateNumberOfValues', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    numberOfValues: new NumberValue({ required: true, min: 1 }),
}));
/**
 * Whether to expand (show more values than initially configured) or shrink down the facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param isFieldExpanded (boolean) Whether to expand or shrink down the facet.
 */
const updateFacetIsFieldExpanded = createAction('facet/updateIsFieldExpanded', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    isFieldExpanded: new BooleanValue({ required: true }),
}));
/**
 * Updates the updateFreezeCurrentValues flag of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param freezeCurrentValues (boolean) Wether the values should be frozen in the next request.
 */
const updateFreezeCurrentValues = createAction('facet/updateFreezeCurrentValues', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    freezeCurrentValues: new BooleanValue({ required: true }),
}));

const facetSearchOptionsDefinition = {
    facetId: facetIdDefinition,
    captions: new RecordValue({ options: { required: false } }),
    numberOfValues: new NumberValue({ required: false, min: 1 }),
    query: new StringValue({ required: false, emptyAllowed: true }),
};

const selectFacetSearchResultPayloadDefinition = {
    facetId: facetIdDefinition,
    value: new RecordValue({
        values: {
            displayValue: requiredEmptyAllowedString,
            rawValue: requiredEmptyAllowedString,
            count: new NumberValue({ required: true, min: 0 }),
        },
    }),
};
/**
 * Registers a facet search box with the specified options.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
const registerFacetSearch = createAction('facetSearch/register', (payload) => validatePayload(payload, facetSearchOptionsDefinition));
/**
 * Updates the options of a facet search box.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
const updateFacetSearch = createAction('facetSearch/update', (payload) => validatePayload(payload, facetSearchOptionsDefinition));
/**
 * Selects a facet search result.
 * @param (selectFacetSearchResultPayload) An object that specifies the target facet and facet search result.
 */
const selectFacetSearchResult = createAction('facetSearch/toggleSelectValue', (payload) => validatePayload(payload, selectFacetSearchResultPayloadDefinition));

function handleFacetSortCriterionUpdate(state, payload) {
    const { facetId, criterion } = payload;
    const facetRequest = state[facetId];
    if (!facetRequest) {
        return;
    }
    facetRequest.sortCriteria = criterion;
}
function handleFacetDeselectAll(facetRequest) {
    if (!facetRequest) {
        return;
    }
    facetRequest.currentValues = [];
    facetRequest.preventAutoSelect = true;
}
function handleFacetUpdateNumberOfValues(facetRequest, numberOfValues) {
    if (!facetRequest) {
        return;
    }
    facetRequest.numberOfValues = numberOfValues;
}

const deselectAllFacets = createAction('facet/deselectAllFacets');

const facetSetReducer = createReducer(getFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerFacet, (state, action) => {
        const { facetId } = action.payload;
        if (facetId in state) {
            return;
        }
        state[facetId] = buildFacetRequest(action.payload);
    })
        .addCase(change.fulfilled, (_, action) => {
        if (Object.keys(action.payload.facetSet).length === 0) {
            return;
        }
        return action.payload.facetSet;
    })
        .addCase(restoreSearchParameters, (state, action) => {
        const f = action.payload.f || {};
        const facetIds = Object.keys(state);
        facetIds.forEach((id) => {
            const request = state[id];
            const values = f[id] || [];
            request.currentValues = values.map(buildSelectedFacetValueRequest);
            request.preventAutoSelect = true;
            request.numberOfValues = Math.max(values.length, request.numberOfValues);
        });
    })
        .addCase(toggleSelectFacetValue, (state, action) => {
        const { facetId, selection } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        const targetValue = facetRequest.currentValues.find((req) => req.value === selection.value);
        if (!targetValue) {
            return;
        }
        const isSelected = targetValue.state === 'selected';
        targetValue.state = isSelected ? 'idle' : 'selected';
        facetRequest.freezeCurrentValues = true;
        facetRequest.preventAutoSelect = true;
    })
        .addCase(updateFreezeCurrentValues, (state, action) => {
        const { facetId, freezeCurrentValues } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        facetRequest.freezeCurrentValues = freezeCurrentValues;
    })
        .addCase(deselectAllFacetValues, (state, action) => {
        const request = state[action.payload];
        handleFacetDeselectAll(request);
    })
        .addCase(deselectAllFacets, (state) => {
        Object.keys(state).forEach((facetId) => {
            const request = state[facetId];
            handleFacetDeselectAll(request);
        });
    })
        .addCase(updateFacetSortCriterion, (state, action) => {
        handleFacetSortCriterionUpdate(state, action.payload);
    })
        .addCase(updateFacetNumberOfValues, (state, action) => {
        const { facetId, numberOfValues } = action.payload;
        handleFacetUpdateNumberOfValues(state[facetId], numberOfValues);
    })
        .addCase(updateFacetIsFieldExpanded, (state, action) => {
        const { facetId, isFieldExpanded } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        facetRequest.isFieldExpanded = isFieldExpanded;
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const facets = action.payload.response.facets;
        facets.forEach((facetResponse) => {
            const id = facetResponse.facetId;
            const facetRequest = state[id];
            if (!facetRequest) {
                return;
            }
            facetRequest.currentValues = facetResponse.values.map(convertFacetValueToRequest);
            facetRequest.freezeCurrentValues = false;
            facetRequest.preventAutoSelect = false;
        });
    })
        .addCase(selectFacetSearchResult, (state, action) => {
        const { facetId, value } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        const { rawValue } = value;
        const { currentValues } = facetRequest;
        const matchingValue = currentValues.find((v) => v.value === rawValue);
        if (matchingValue) {
            matchingValue.state = 'selected';
            return;
        }
        const searchResultValue = buildSelectedFacetValueRequest(rawValue);
        const firstIdleIndex = currentValues.findIndex((v) => v.state === 'idle');
        const indexToInsertAt = firstIdleIndex === -1 ? currentValues.length : firstIdleIndex;
        const valuesBefore = currentValues.slice(0, indexToInsertAt);
        const valuesAfter = currentValues.slice(indexToInsertAt + 1);
        facetRequest.currentValues = [
            ...valuesBefore,
            searchResultValue,
            ...valuesAfter,
        ];
        facetRequest.numberOfValues = facetRequest.currentValues.length;
    });
});
const defaultFacetOptions = {
    delimitingCharacter: '>',
    filterFacetCount: true,
    injectionDepth: 1000,
    numberOfValues: 8,
    sortCriteria: 'automatic',
};
function buildFacetRequest(config) {
    return {
        ...defaultFacetOptions,
        type: 'specific',
        currentValues: [],
        freezeCurrentValues: false,
        isFieldExpanded: false,
        preventAutoSelect: false,
        ...config,
    };
}
function convertFacetValueToRequest(facetValue) {
    const { value, state } = facetValue;
    return { value, state };
}
function buildSelectedFacetValueRequest(value) {
    return { value, state: 'selected' };
}

function getSearchParametersInitialState() {
    return {
        context: getContextInitialState(),
        facetSet: getFacetSetInitialState(),
        dateFacetSet: getDateFacetSetInitialState(),
        numericFacetSet: getNumericFacetSetInitialState(),
        categoryFacetSet: getCategoryFacetSetInitialState(),
        facetOptions: getFacetOptionsInitialState(),
        pagination: getPaginationInitialState(),
        query: getQueryInitialState(),
        advancedSearchQueries: getAdvancedSearchQueriesInitialState(),
        sortCriteria: getSortCriteriaInitialState(),
        querySet: getQuerySetInitialState(),
        pipeline: getPipelineInitialState(),
        searchHub: getSearchHubInitialState(),
        debug: getDebugInitialState(),
    };
}
function getHistoryInitialState() {
    return {
        ...getSearchParametersInitialState(),
        facetOrder: [],
    };
}

const randomID = (prepend, length = 5) => prepend +
    Math.random()
        .toString(36)
        .substr(2, 2 + length);
function isArray$1(value) {
    return Array.isArray(value);
}
function arrayEquals(firstArray, secondArray) {
    return (firstArray.length === secondArray.length &&
        firstArray.findIndex((val, i) => secondArray[i] !== val) === -1);
}

const historyReducer = createReducer(getHistoryInitialState(), (builder) => {
    builder.addCase(snapshot, (state, action) => isEqual(state, action.payload) ? undefined : action.payload);
});
const isEqual = (current, next) => {
    return (isContextEqual(current.context, next.context) &&
        isAdvancedSearchQueriesEqual(current.advancedSearchQueries, next.advancedSearchQueries) &&
        isFacetsEqual(current.facetSet, next.facetSet) &&
        isDateFacetsEqual(current.dateFacetSet, next.dateFacetSet) &&
        isNumericFacetsEqual(current.numericFacetSet, next.numericFacetSet) &&
        isCategoryFacetsEqual(current.categoryFacetSet, next.categoryFacetSet) &&
        isFacetOptionsEqual(current.facetOptions, next.facetOptions) &&
        isPaginationEqual(current.pagination, next.pagination) &&
        isQueryEqual(current.query, next.query) &&
        isSortEqual(current, next) &&
        isPipelineEqual(current.pipeline, next.pipeline) &&
        isSearchHubEqual(current.searchHub, next.searchHub) &&
        isFacetOrderEqual(current.facetOrder, next.facetOrder) &&
        isDebugEqual(current.debug, next.debug));
};
const isContextEqual = (current, next) => JSON.stringify(current.contextValues) === JSON.stringify(next.contextValues);
const isFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isDateFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isNumericFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isCategoryFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isFacetOptionsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isPaginationEqual = (current, next) => current.firstResult === next.firstResult &&
    current.numberOfResults === next.numberOfResults;
const isQueryEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isAdvancedSearchQueriesEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isSortEqual = (current, next) => current.sortCriteria === next.sortCriteria;
const isPipelineEqual = (current, next) => current === next;
const isSearchHubEqual = (current, next) => current === next;
const isFacetOrderEqual = (current, next) => arrayEquals(current, next);
const isDebugEqual = (current, next) => current === next;

const emptyCorrection = () => ({
    correctedQuery: '',
    wordCorrections: [],
});
function getDidYouMeanInitialState() {
    return {
        enableDidYouMean: false,
        wasCorrectedTo: '',
        wasAutomaticallyCorrected: false,
        queryCorrection: emptyCorrection(),
    };
}

const didYouMeanReducer = createReducer(getDidYouMeanInitialState(), (builder) => {
    builder
        .addCase(enableDidYouMean, (state) => {
        state.enableDidYouMean = true;
    })
        .addCase(disableDidYouMean, (state) => {
        state.enableDidYouMean = false;
    })
        .addCase(executeSearch.pending, (state) => {
        state.queryCorrection = emptyCorrection();
        state.wasAutomaticallyCorrected = false;
        state.wasCorrectedTo = '';
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        state.queryCorrection =
            action.payload.response.queryCorrections[0] || emptyCorrection();
        state.wasAutomaticallyCorrected = action.payload.automaticallyCorrected;
    })
        .addCase(applyDidYouMeanCorrection, (state, action) => {
        state.wasCorrectedTo = action.payload;
    });
});

function handleFacetSearchRegistration(state, payload, buildEmptyResponse) {
    const { facetId } = payload;
    if (state[facetId]) {
        return;
    }
    const isLoading = false;
    const options = buildFacetSearchOptions(payload);
    const response = buildEmptyResponse();
    state[facetId] = { options, isLoading, response };
}
function handleFacetSearchUpdate(state, payload) {
    const { facetId, ...rest } = payload;
    const search = state[facetId];
    if (!search) {
        return;
    }
    search.options = { ...search.options, ...rest };
}
function handleFacetSearchPending(state, facetId) {
    const search = state[facetId];
    if (!search) {
        return;
    }
    search.isLoading = true;
}
function handleFacetSearchRejected(state, facetId) {
    const search = state[facetId];
    if (!search) {
        return;
    }
    search.isLoading = false;
}
function handleFacetSearchFulfilled(state, payload) {
    const { facetId, response } = payload;
    const search = state[facetId];
    if (!search) {
        return;
    }
    search.isLoading = false;
    search.response = response;
}
const defaultFacetSearchOptions = {
    captions: {},
    numberOfValues: 10,
    query: '',
};
function buildFacetSearchOptions(config = {}) {
    return {
        ...defaultFacetSearchOptions,
        ...config,
    };
}

function getFacetSearchSetInitialState() {
    return {};
}

const buildFacetBaseMetadata = (facetId, state) => {
    const facet = getFacet(state, facetId);
    const facetField = facet ? facet.field : '';
    const facetTitle = `${facetField}_${facetId}`;
    return { facetId, facetField, facetTitle };
};
function buildFacetSelectionChangeMetadata(payload, state) {
    const { facetId, facetValue } = payload;
    const base = buildFacetBaseMetadata(facetId, state);
    return { ...base, facetValue };
}
function getStateNeededForFacetMetadata(s) {
    return {
        facetSet: s.facetSet || getFacetSetInitialState(),
        categoryFacetSet: s.categoryFacetSet || getCategoryFacetSetInitialState(),
        dateFacetSet: s.dateFacetSet || getDateFacetSetInitialState(),
        numericFacetSet: s.numericFacetSet || getNumericFacetSetInitialState(),
        search: s.search || getSearchInitialState(),
    };
}
const buildFacetStateMetadata = (state) => {
    const facetState = [];
    state.search.response.facets.forEach((facetResponse, facetPosition) => {
        facetResponse.values.forEach((facetValue, facetValuePosition) => {
            if (facetValue.state === 'selected') {
                const facetType = getFacetType(state, facetResponse.facetId);
                const facetResponseAnalytics = mapFacetResponseToAnalytics(facetResponse, facetPosition + 1);
                const facetValueAnalytics = mapFacetValueToAnalytics(facetValue, facetValuePosition + 1, facetType);
                const facetDisplayValueAnalytics = facetType === 'hierarchical' || facetType === 'specific'
                    ? mapFacetDisplayValueToAnalytics(facetValue)
                    : mapRangeDisplayFacetValueToAnalytics(facetValue);
                facetState.push({
                    ...facetResponseAnalytics,
                    ...facetValueAnalytics,
                    ...facetDisplayValueAnalytics,
                });
            }
        });
    });
    return facetState;
};
const mapFacetValueToAnalytics = (facetValue, valuePosition, facetType) => {
    return {
        state: facetValue.state,
        valuePosition,
        facetType,
    };
};
const mapRangeDisplayFacetValueToAnalytics = (facetValue) => {
    return {
        displayValue: `${facetValue.start}..${facetValue.end}`,
        value: `${facetValue.start}..${facetValue.end}`,
        start: facetValue.start,
        end: facetValue.end,
        endInclusive: facetValue.endInclusive,
    };
};
const mapFacetDisplayValueToAnalytics = (facetValue) => {
    return {
        displayValue: facetValue.value,
        value: facetValue.value,
    };
};
const mapFacetResponseToAnalytics = (response, facetPosition) => {
    return {
        title: response.facetId,
        field: response.field,
        id: response.facetId,
        facetPosition,
    };
};
const getFacet = (state, facetId) => {
    var _a;
    return (state.facetSet[facetId] || ((_a = state.categoryFacetSet[facetId]) === null || _a === void 0 ? void 0 : _a.request) ||
        state.dateFacetSet[facetId] ||
        state.numericFacetSet[facetId]);
};
const getFacetType = (state, facetId) => {
    const facet = getFacet(state, facetId);
    return facet ? facet.type : 'specific';
};

/**
 * Logs a facet show more event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const logFacetShowMore = (facetId) => makeAnalyticsAction('analytics/facet/showMore', AnalyticsType.Search, (client, state) => {
    validatePayload(facetId, facetIdDefinition);
    const metadata = buildFacetBaseMetadata(facetId, getStateNeededForFacetMetadata(state));
    return client.logFacetShowMore(metadata);
})();
/**
 * Logs a facet show less event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const logFacetShowLess = (facetId) => makeAnalyticsAction('analytics/facet/showLess', AnalyticsType.Search, (client, state) => {
    validatePayload(facetId, facetIdDefinition);
    const metadata = buildFacetBaseMetadata(facetId, getStateNeededForFacetMetadata(state));
    return client.logFacetShowLess(metadata);
})();
/**
 * Logs a facet search event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const logFacetSearch = (facetId) => makeAnalyticsAction('analytics/facet/search', AnalyticsType.Search, (client, state) => {
    validatePayload(facetId, facetIdDefinition);
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetBaseMetadata(facetId, stateForAnalytics);
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logFacetSearch(metadata, facetState);
})();
/**
 * Logs a facet sort event.
 * @param payload (FacetUpdateSortMetadata) Object specifying the facet and sort criterion.
 */
const logFacetUpdateSort = (payload) => makeAnalyticsAction('analytics/facet/sortChange', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, {
        facetId: facetIdDefinition,
        criterion: new Value({
            required: true,
        }),
    });
    const { facetId, criterion } = payload;
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const base = buildFacetBaseMetadata(facetId, stateForAnalytics);
    const metadata = { ...base, criteria: criterion };
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logFacetUpdateSort(metadata, facetState);
})();
/**
 * Logs a facet clear all event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const logFacetClearAll = (facetId) => makeAnalyticsAction('analytics/facet/reset', AnalyticsType.Search, (client, state) => {
    validatePayload(facetId, facetIdDefinition);
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetBaseMetadata(facetId, stateForAnalytics);
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logFacetClearAll(metadata, facetState);
})();
/**
 * Logs a facet value selection event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
const logFacetSelect = (payload) => makeAnalyticsAction('analytics/facet/select', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, {
        facetId: facetIdDefinition,
        facetValue: requiredNonEmptyString,
    });
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetSelectionChangeMetadata(payload, stateForAnalytics);
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logFacetSelect(metadata, facetState);
})();
/**
 * Logs a facet deselect event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
const logFacetDeselect = (payload) => makeAnalyticsAction('analytics/facet/deselect', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, {
        facetId: facetIdDefinition,
        facetValue: requiredNonEmptyString,
    });
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetSelectionChangeMetadata(payload, stateForAnalytics);
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logFacetDeselect(metadata, facetState);
})();
/**
 * Logs a facet breadcrumb event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
const logFacetBreadcrumb = (payload) => makeAnalyticsAction('analytics/facet/breadcrumb', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, {
        facetId: facetIdDefinition,
        facetValue: requiredNonEmptyString,
    });
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetSelectionChangeMetadata(payload, getStateNeededForFacetMetadata(state));
    const facetState = buildFacetStateMetadata(stateForAnalytics);
    return client.logBreadcrumbFacet(metadata, facetState);
})();

const buildSpecificFacetSearchRequest = (id, state) => {
    const { captions, query, numberOfValues } = state.facetSearchSet[id].options;
    const { field, delimitingCharacter, currentValues } = state.facetSet[id];
    const searchContext = buildSearchRequest(state);
    const ignoreValues = currentValues
        .filter((v) => v.state !== 'idle')
        .map((facetValue) => facetValue.value);
    return {
        url: state.configuration.search.apiBaseUrl,
        accessToken: state.configuration.accessToken,
        organizationId: state.configuration.organizationId,
        captions,
        numberOfValues,
        query,
        field,
        delimitingCharacter,
        ignoreValues,
        searchContext,
        type: 'specific',
    };
};

const buildCategoryFacetSearchRequest = (id, state) => {
    const options = state.categoryFacetSearchSet[id].options;
    const categoryFacet = state.categoryFacetSet[id].request;
    const { captions, query, numberOfValues } = options;
    const { field, delimitingCharacter, basePath } = categoryFacet;
    const searchContext = buildSearchRequest(state);
    const path = getPathToSelectedCategoryFacetItem(categoryFacet);
    const ignorePaths = path.length ? [path] : [];
    return {
        url: state.configuration.search.apiBaseUrl,
        accessToken: state.configuration.accessToken,
        organizationId: state.configuration.organizationId,
        basePath,
        captions,
        numberOfValues,
        query,
        field,
        delimitingCharacter,
        ignorePaths,
        searchContext,
        type: 'hierarchical',
    };
};
const getPathToSelectedCategoryFacetItem = (categoryFacet) => {
    const path = [];
    let selectedValue = categoryFacet.currentValues[0];
    while (selectedValue) {
        path.push(selectedValue.value);
        selectedValue = selectedValue.children[0];
    }
    return path;
};

/**
 * Executes a facet search (i.e., a search for facet values in a facet search box).
 * @param facetId (string) The unique identifier of the facet for which to perform a facet search (e.g., `"1"`).
 */
const executeFacetSearch = createAsyncThunk('facetSearch/executeSearch', async (facetId, { dispatch, getState, extra: { searchAPIClient, validatePayload } }) => {
    const state = getState();
    let req;
    validatePayload(facetId, requiredNonEmptyString);
    if (isSpecificFacetSearchState(state, facetId)) {
        req = buildSpecificFacetSearchRequest(facetId, state);
    }
    else {
        req = buildCategoryFacetSearchRequest(facetId, state);
    }
    const response = await searchAPIClient.facetSearch(req);
    dispatch(logFacetSearch(facetId));
    return { facetId, response };
});
const isSpecificFacetSearchState = (s, facetId) => {
    return (s.facetSearchSet !== undefined &&
        s.facetSet !== undefined &&
        s.facetSet[facetId] !== undefined);
};

const specificFacetSearchSetReducer = createReducer(getFacetSearchSetInitialState(), (builder) => {
    builder
        .addCase(registerFacetSearch, (state, action) => {
        const payload = action.payload;
        handleFacetSearchRegistration(state, payload, buildEmptyResponse);
    })
        .addCase(updateFacetSearch, (state, action) => {
        handleFacetSearchUpdate(state, action.payload);
    })
        .addCase(executeFacetSearch.pending, (state, action) => {
        const facetId = action.meta.arg;
        handleFacetSearchPending(state, facetId);
    })
        .addCase(executeFacetSearch.rejected, (state, action) => {
        const facetId = action.meta.arg;
        handleFacetSearchRejected(state, facetId);
    })
        .addCase(executeFacetSearch.fulfilled, (state, action) => {
        handleFacetSearchFulfilled(state, action.payload);
    });
});
function buildEmptyResponse() {
    return {
        moreValuesAvailable: false,
        values: [],
    };
}

const getFieldsInitialState = () => ({
    fieldsToInclude: [
        'author',
        'language',
        'urihash',
        'objecttype',
        'collection',
        'source',
        'permanentid',
    ],
});

const nonEmptyArray$1 = new ArrayValue({
    each: requiredNonEmptyString,
    required: true,
});
/**
 * Registers the fields to include in the query response.
 * @param payload (string[]) The target fields (e.g., `["field1", "field2"]`).
 */
const registerFieldsToInclude = createAction('fields/registerFieldsToInclude', (payload) => validatePayload(payload, nonEmptyArray$1));

const fieldsReducer = createReducer(getFieldsInitialState(), (builder) => builder.addCase(registerFieldsToInclude, (state, action) => {
    state.fieldsToInclude = [
        ...new Set(state.fieldsToInclude.concat(action.payload)),
    ];
}));

/**
 * Sets the query pipeline.
 * @param payload (string) The query pipeline to set (may be empty).
 */
const setPipeline = createAction('pipeline/set', (payload) => validatePayload(payload, new StringValue({ required: true, emptyAllowed: true })));

const pipelineReducer = createReducer(getPipelineInitialState(), (builder) => {
    builder
        .addCase(setPipeline, (_, action) => action.payload)
        .addCase(change.fulfilled, (_, action) => action.payload.pipeline)
        .addCase(updateSearchConfiguration, (state, action) => action.payload.pipeline || state);
});

/**
 * Updates the sort criterion of a range facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
const updateRangeFacetSortCriterion = createAction('rangeFacet/updateSortCriterion', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    criterion: new Value({ required: true }),
}));

const numericFacetValueDefinition = {
    state: requiredNonEmptyString,
    start: new NumberValue({ required: true }),
    end: new NumberValue({ required: true }),
    endInclusive: new BooleanValue({ required: true }),
    numberOfResults: new NumberValue({ required: true, min: 0 }),
};
const dateFacetValueDefinition = {
    start: requiredNonEmptyString,
    end: requiredNonEmptyString,
    endInclusive: new BooleanValue({ required: true }),
    state: requiredNonEmptyString,
    numberOfResults: new NumberValue({ required: true, min: 0 }),
};
const rangeFacetSelectionPayloadDefinition = (selection) => ({
    facetId: facetIdDefinition,
    selection: typeof selection.start === 'string'
        ? new RecordValue({ values: dateFacetValueDefinition })
        : new RecordValue({ values: numericFacetValueDefinition }),
});

const dateRangeRequestDefinition = {
    start: requiredNonEmptyString,
    end: requiredNonEmptyString,
    endInclusive: new BooleanValue({ required: true }),
    state: requiredNonEmptyString,
};
const dateFacetRegistrationOptionsDefinition = {
    facetId: facetIdDefinition,
    field: requiredNonEmptyString,
    currentValues: new ArrayValue({
        required: false,
        each: new RecordValue({ values: dateRangeRequestDefinition }),
    }),
    generateAutomaticRanges: new BooleanValue({ required: true }),
    filterFacetCount: new BooleanValue({ required: false }),
    injectionDepth: new NumberValue({ required: false, min: 0 }),
    numberOfValues: new NumberValue({ required: false, min: 1 }),
    sortCriteria: new Value({ required: false }),
};
/**
 * Registers a date facet.
 * @param (DateFacetRegistrationOptions) The options to register the facet with.
 */
const registerDateFacet = createAction('dateFacet/register', (payload) => validatePayload(payload, dateFacetRegistrationOptionsDefinition));
/**
 * Toggles a date facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (DateFacetValue) The target date facet value.
 */
const toggleSelectDateFacetValue = createAction('dateFacet/toggleSelectValue', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: dateFacetValueDefinition }),
}));
/** Updates the sort criterion of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
const updateDateFacetSortCriterion = updateRangeFacetSortCriterion;
/** Deselects all values of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const deselectAllDateFacetValues = deselectAllFacetValues;

const defaultRangeFacetOptions = {
    filterFacetCount: true,
    injectionDepth: 1000,
    numberOfValues: 8,
    sortCriteria: 'ascending',
};
function registerRangeFacet(state, request) {
    const { facetId } = request;
    if (facetId in state) {
        return;
    }
    const numberOfValues = calculateNumberOfValues(request);
    state[facetId] = { ...request, numberOfValues };
}
function toggleSelectRangeValue(state, facetId, selection) {
    const request = state[facetId];
    if (!request) {
        return;
    }
    const value = findRange(request.currentValues, selection);
    if (!value) {
        return;
    }
    const isSelected = value.state === 'selected';
    value.state = isSelected ? 'idle' : 'selected';
    request.preventAutoSelect = true;
}
function handleRangeFacetDeselectAll(state, facetId) {
    const facetRequest = state[facetId];
    if (!facetRequest) {
        return;
    }
    facetRequest.currentValues.forEach((request) => (request.state = 'idle'));
}
function handleRangeFacetSearchParameterRestoration(state, rangeFacets) {
    Object.entries(state).forEach(([facetId, request]) => {
        const rangesToSelect = rangeFacets[facetId] || [];
        request.currentValues.forEach((range) => {
            const found = !!findRange(rangesToSelect, range);
            range.state = found ? 'selected' : 'idle';
            return range;
        });
        const missingRanges = rangesToSelect.filter((range) => !findRange(request.currentValues, range));
        const currentValues = request.currentValues;
        currentValues.push(...missingRanges);
        request.numberOfValues = Math.max(request.numberOfValues, currentValues.length);
    });
}
function onRangeFacetRequestFulfilled(state, facets, convert) {
    facets.forEach((facetResponse) => {
        const id = facetResponse.facetId;
        const facetRequest = state[id];
        if (!facetRequest) {
            return;
        }
        const values = convert(facetResponse.values);
        facetRequest.currentValues = values;
        facetRequest.preventAutoSelect = false;
    });
}
function findRange(values, value) {
    const { start, end } = value;
    return values.find((range) => range.start === start && range.end === end);
}
function calculateNumberOfValues(request) {
    const { generateAutomaticRanges, currentValues, numberOfValues } = request;
    return generateAutomaticRanges
        ? Math.max(numberOfValues, currentValues.length)
        : currentValues.length;
}

const dateFacetSetReducer = createReducer(getDateFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerDateFacet, (state, action) => {
        const { payload } = action;
        const request = buildDateFacetRequest(payload);
        registerRangeFacet(state, request);
    })
        .addCase(change.fulfilled, (_, action) => action.payload.dateFacetSet)
        .addCase(restoreSearchParameters, (state, action) => {
        const df = action.payload.df || {};
        handleRangeFacetSearchParameterRestoration(state, df);
    })
        .addCase(toggleSelectDateFacetValue, (state, action) => {
        const { facetId, selection } = action.payload;
        toggleSelectRangeValue(state, facetId, selection);
    })
        .addCase(deselectAllDateFacetValues, (state, action) => {
        handleRangeFacetDeselectAll(state, action.payload);
    })
        .addCase(deselectAllFacets, (state) => {
        Object.keys(state).forEach((facetId) => {
            handleRangeFacetDeselectAll(state, facetId);
        });
    })
        .addCase(updateDateFacetSortCriterion, (state, action) => {
        handleFacetSortCriterionUpdate(state, action.payload);
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const facets = action.payload.response.facets;
        onRangeFacetRequestFulfilled(state, facets, convertToRangeRequests);
    });
});
function buildDateFacetRequest(config) {
    return {
        ...defaultRangeFacetOptions,
        currentValues: [],
        preventAutoSelect: false,
        type: 'dateRange',
        ...config,
    };
}
function convertToRangeRequests(values) {
    return values.map((value) => {
        const { numberOfResults, ...rest } = value;
        return rest;
    });
}

const numericFacetRequestDefinition = {
    state: requiredNonEmptyString,
    start: new NumberValue({ required: true }),
    end: new NumberValue({ required: true }),
    endInclusive: new BooleanValue({ required: true }),
};
const numericFacetRegistrationOptionsDefinition = {
    facetId: facetIdDefinition,
    field: requiredNonEmptyString,
    currentValues: new ArrayValue({
        required: false,
        each: new RecordValue({ values: numericFacetRequestDefinition }),
    }),
    generateAutomaticRanges: new BooleanValue({ required: true }),
    filterFacetCount: new BooleanValue({ required: false }),
    injectionDepth: new NumberValue({ required: false, min: 0 }),
    numberOfValues: new NumberValue({ required: false, min: 1 }),
    sortCriteria: new Value({ required: false }),
};
/**
 * Registers a numeric facet.
 * @param (NumericFacetRegistrationOptions) The options to register the facet with.
 */
const registerNumericFacet = createAction('numericFacet/register', (payload) => validatePayload(payload, numericFacetRegistrationOptionsDefinition));
/**
 * Toggles a numeric facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (NumericFacetValue) The target numeric facet value.
 */
const toggleSelectNumericFacetValue = createAction('numericFacet/toggleSelectValue', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: numericFacetValueDefinition }),
}));
/** Updates the sort criterion of a numeric facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
const updateNumericFacetSortCriterion = updateRangeFacetSortCriterion;
/** Deselects all values of a numeric facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const deselectAllNumericFacetValues = deselectAllFacetValues;

const numericFacetSetReducer = createReducer(getNumericFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerNumericFacet, (state, action) => {
        const { payload } = action;
        const request = buildNumericFacetRequest(payload);
        registerRangeFacet(state, request);
    })
        .addCase(change.fulfilled, (_, action) => action.payload.numericFacetSet)
        .addCase(restoreSearchParameters, (state, action) => {
        const nf = action.payload.nf || {};
        handleRangeFacetSearchParameterRestoration(state, nf);
    })
        .addCase(toggleSelectNumericFacetValue, (state, action) => {
        const { facetId, selection } = action.payload;
        toggleSelectRangeValue(state, facetId, selection);
    })
        .addCase(deselectAllNumericFacetValues, (state, action) => {
        handleRangeFacetDeselectAll(state, action.payload);
    })
        .addCase(deselectAllFacets, (state) => {
        Object.keys(state).forEach((facetId) => {
            handleRangeFacetDeselectAll(state, facetId);
        });
    })
        .addCase(updateNumericFacetSortCriterion, (state, action) => {
        handleFacetSortCriterionUpdate(state, action.payload);
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const facets = action.payload.response.facets;
        onRangeFacetRequestFulfilled(state, facets, convertToRangeRequests$1);
    });
});
function buildNumericFacetRequest(config) {
    return {
        ...defaultRangeFacetOptions,
        currentValues: [],
        preventAutoSelect: false,
        type: 'numericalRange',
        ...config,
    };
}
function convertToRangeRequests$1(values) {
    return values.map((value) => {
        const { numberOfResults, ...rest } = value;
        return rest;
    });
}

const categoryFacetValueDefinition = {
    state: new Value({ required: true }),
    numberOfResults: new NumberValue({ required: true, min: 0 }),
    value: new StringValue({ required: true, emptyAllowed: true }),
    path: new ArrayValue({ required: true, each: requiredNonEmptyString }),
    moreValuesAvailable: new BooleanValue({ required: false }),
};
function validateCategoryFacetValue(payload) {
    payload.children.forEach((child) => {
        validateCategoryFacetValue(child);
    });
    validatePayloadAndThrow({
        state: payload.state,
        numberOfResults: payload.numberOfResults,
        value: payload.value,
        path: payload.path,
        moreValuesAvailable: payload.moreValuesAvailable,
    }, categoryFacetValueDefinition);
}

const categoryFacetRegistrationOptionsDefinition = {
    facetId: facetIdDefinition,
    field: requiredNonEmptyString,
    delimitingCharacter: new StringValue({ required: false, emptyAllowed: true }),
    filterFacetCount: new BooleanValue({ required: false }),
    injectionDepth: new NumberValue({ required: false, min: 0 }),
    numberOfValues: new NumberValue({ required: false, min: 1 }),
    sortCriteria: new Value({ required: false }),
    basePath: new ArrayValue({ required: false, each: requiredNonEmptyString }),
    filterByBasePath: new BooleanValue({ required: false }),
};
/**
 * Registers a category facet in the category facet set.
 * @param (CategoryFacetRegistrationOptions) The options to register the category facet with.
 */
const registerCategoryFacet = createAction('categoryFacet/register', (payload) => validatePayload(payload, categoryFacetRegistrationOptionsDefinition));
/**
 * Toggles a category facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (CategoryFacetValue) The target category facet value.
 */
const toggleSelectCategoryFacetValue = createAction('categoryFacet/toggleSelectValue', (payload) => {
    try {
        validatePayloadAndThrow(payload.facetId, requiredNonEmptyString);
        validateCategoryFacetValue(payload.selection);
        return { payload, error: null };
    }
    catch (error) {
        return { payload, error: serializeSchemaValidationError(error) };
    }
});
/** Deselects all values of a category facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
const deselectAllCategoryFacetValues = deselectAllFacetValues;
/** Updates the number of values of a category facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The new number of facet values (e.g., `10`).
 */
const updateCategoryFacetNumberOfValues = updateFacetNumberOfValues;
/**
 * Updates the the sort criterion for the category facet
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (FacetSortCriterion) The criterion by which to sort the facet.
 */
const updateCategoryFacetSortCriterion = createAction('categoryFacet/updateSortCriterion', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    criterion: new Value(),
}));

const categoryFacetSearchResultDefinition = {
    path: new ArrayValue({
        required: true,
        each: requiredNonEmptyString,
    }),
    displayValue: requiredEmptyAllowedString,
    rawValue: requiredEmptyAllowedString,
    count: new NumberValue({ required: true, min: 0 }),
};
/** Selects the corresponding category facet value for the provided
 * category facet search result */
const selectCategoryFacetSearchResult = createAction('categoryFacet/selectSearchResult', (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    value: new RecordValue({ values: categoryFacetSearchResultDefinition }),
    retrieveCount: new NumberValue({
        min: 1,
    }),
}));
/**
 * Registers a category facet search box with the specified options.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
const registerCategoryFacetSearch = createAction('categoryFacetSearch/register', (payload) => validatePayload(payload, facetSearchOptionsDefinition));

function selectPath(request, path, retrieveCount) {
    request.currentValues = buildCurrentValuesFromPath(path, retrieveCount);
    request.numberOfValues = path.length ? 1 : request.numberOfValues;
    request.preventAutoSelect = true;
}
function buildCurrentValuesFromPath(path, retrieveCount) {
    if (!path.length) {
        return [];
    }
    const root = buildCategoryFacetValueRequest(path[0], retrieveCount);
    let curr = root;
    for (const segment of path.splice(1)) {
        const next = buildCategoryFacetValueRequest(segment, retrieveCount);
        curr.children.push(next);
        curr = next;
    }
    curr.state = 'selected';
    curr.retrieveChildren = true;
    return [root];
}
function buildCategoryFacetValueRequest(value, retrieveCount) {
    return {
        value,
        retrieveCount,
        children: [],
        state: 'idle',
        retrieveChildren: false,
    };
}

function partitionIntoParentsAndValues(nestedValues) {
    if (!nestedValues) {
        return { parents: [], values: [] };
    }
    let parents = [];
    let values = nestedValues;
    while (values.length && values[0].children.length) {
        parents = [...parents, ...values];
        values = values[0].children;
    }
    const selectedLeafValue = values.find((v) => v.state === 'selected');
    if (selectedLeafValue) {
        parents = [...parents, selectedLeafValue];
        values = [];
    }
    return { parents, values };
}
const getAnalyticsActionForCategoryFacetToggleSelect = (facetId, selection) => {
    const payload = {
        facetId,
        facetValue: selection.value,
    };
    const isSelected = selection.state === 'selected';
    return isSelected ? logFacetDeselect(payload) : logFacetSelect(payload);
};

const categoryFacetSetReducer = createReducer(getCategoryFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerCategoryFacet, (state, action) => {
        const options = action.payload;
        const { facetId } = options;
        if (facetId in state) {
            return;
        }
        const request = buildCategoryFacetRequest(options);
        const initialNumberOfValues = request.numberOfValues;
        state[facetId] = { request, initialNumberOfValues };
    })
        .addCase(change.fulfilled, (_, action) => action.payload.categoryFacetSet)
        .addCase(restoreSearchParameters, (state, action) => {
        const cf = action.payload.cf || {};
        Object.keys(state).forEach((id) => {
            const request = state[id].request;
            const path = cf[id] || [];
            selectPath(request, path, request.numberOfValues);
        });
    })
        .addCase(updateCategoryFacetSortCriterion, (state, action) => {
        var _a;
        const { facetId, criterion } = action.payload;
        const request = (_a = state[facetId]) === null || _a === void 0 ? void 0 : _a.request;
        if (!request) {
            return;
        }
        request.sortCriteria = criterion;
    })
        .addCase(toggleSelectCategoryFacetValue, (state, action) => {
        var _a;
        const { facetId, selection, retrieveCount } = action.payload;
        const request = (_a = state[facetId]) === null || _a === void 0 ? void 0 : _a.request;
        if (!request) {
            return;
        }
        let activeLevel = request.currentValues;
        const { path } = selection;
        const pathToSelection = path.slice(0, path.length - 1);
        for (const segment of pathToSelection) {
            const parent = activeLevel[0];
            if (segment !== parent.value) {
                return;
            }
            parent.retrieveChildren = false;
            parent.state = 'idle';
            activeLevel = parent.children;
        }
        if (activeLevel.length) {
            const parentSelection = activeLevel[0];
            parentSelection.retrieveChildren = true;
            parentSelection.state = 'selected';
            parentSelection.children = [];
            return;
        }
        const valueRequest = convertCategoryFacetValueToRequest(selection, retrieveCount);
        activeLevel.push(valueRequest);
        request.numberOfValues = 1;
    })
        .addCase(deselectAllCategoryFacetValues, (state, action) => {
        const facetId = action.payload;
        handleCategoryFacetDeselectAll(state, facetId);
    })
        .addCase(deselectAllFacets, (state) => {
        Object.keys(state).forEach((facetId) => handleCategoryFacetDeselectAll(state, facetId));
    })
        .addCase(updateCategoryFacetNumberOfValues, (state, action) => {
        var _a;
        const { facetId, numberOfValues } = action.payload;
        const request = (_a = state[facetId]) === null || _a === void 0 ? void 0 : _a.request;
        if (!request) {
            return;
        }
        if (!request.currentValues.length) {
            return handleFacetUpdateNumberOfValues(request, numberOfValues);
        }
        handleCategoryFacetNestedNumberOfValuesUpdate(state, action.payload);
    })
        .addCase(selectCategoryFacetSearchResult, (state, action) => {
        var _a;
        const { facetId, value, retrieveCount } = action.payload;
        const request = (_a = state[facetId]) === null || _a === void 0 ? void 0 : _a.request;
        if (!request) {
            return;
        }
        const path = [...value.path, value.rawValue];
        selectPath(request, path, retrieveCount);
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const { facets } = action.payload.response;
        facets.forEach((response) => {
            var _a;
            if (!isCategoryFacetResponse(state, response)) {
                return;
            }
            const id = response.facetId;
            const request = (_a = state[id]) === null || _a === void 0 ? void 0 : _a.request;
            if (!request) {
                return;
            }
            const requestWasInvalid = isRequestInvalid(request, response);
            request.currentValues = requestWasInvalid
                ? []
                : request.currentValues;
            request.preventAutoSelect = false;
        });
    });
});
const defaultCategoryFacetOptions = {
    delimitingCharacter: ';',
    filterFacetCount: true,
    injectionDepth: 1000,
    numberOfValues: 5,
    sortCriteria: 'occurrences',
    basePath: [],
    filterByBasePath: true,
};
function buildCategoryFacetRequest(config) {
    return {
        ...defaultCategoryFacetOptions,
        currentValues: [],
        preventAutoSelect: false,
        type: 'hierarchical',
        ...config,
    };
}
function convertCategoryFacetValueToRequest(categoryFacetValue, retrieveCount) {
    const { value } = categoryFacetValue;
    return {
        value,
        state: 'selected',
        children: [],
        retrieveChildren: true,
        retrieveCount,
    };
}
function handleCategoryFacetNestedNumberOfValuesUpdate(state, payload) {
    var _a;
    const { facetId, numberOfValues } = payload;
    let selectedValue = (_a = state[facetId]) === null || _a === void 0 ? void 0 : _a.request.currentValues[0];
    if (!selectedValue) {
        return;
    }
    while (selectedValue.children.length && (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.state) !== 'selected') {
        selectedValue = selectedValue.children[0];
    }
    selectedValue.retrieveCount = numberOfValues;
}
function isCategoryFacetResponse(state, response) {
    const id = response.facetId;
    return id in state;
}
function isRequestInvalid(request, response) {
    const requestParents = partitionIntoParentsAndValues(request.currentValues)
        .parents;
    const responseParents = partitionIntoParentsAndValues(response.values)
        .parents;
    return requestParents.length !== responseParents.length;
}
function handleCategoryFacetDeselectAll(state, facetId) {
    const slice = state[facetId];
    if (!slice) {
        return;
    }
    slice.request.numberOfValues = slice.initialNumberOfValues;
    handleFacetDeselectAll(slice.request);
}

function getCategoryFacetSearchSetInitialState() {
    return {};
}

const categoryFacetSearchSetReducer = createReducer(getCategoryFacetSearchSetInitialState(), (builder) => {
    builder
        .addCase(registerCategoryFacetSearch, (state, action) => {
        const payload = action.payload;
        handleFacetSearchRegistration(state, payload, buildEmptyResponse$1);
    })
        .addCase(updateFacetSearch, (state, action) => {
        handleFacetSearchUpdate(state, action.payload);
    })
        .addCase(executeFacetSearch.pending, (state, action) => {
        const facetId = action.meta.arg;
        handleFacetSearchPending(state, facetId);
    })
        .addCase(executeFacetSearch.rejected, (state, action) => {
        const facetId = action.meta.arg;
        handleFacetSearchRejected(state, facetId);
    })
        .addCase(executeFacetSearch.fulfilled, (state, action) => {
        handleFacetSearchFulfilled(state, action.payload);
    });
});
function buildEmptyResponse$1() {
    return {
        moreValuesAvailable: false,
        values: [],
    };
}

/**
 * Updates options that affect facet reordering. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/build-a-search-ui/query-parameters#definitions-RestFacetOptions).
 * @param {Partial<FacetOptions>} facetOptions The options to update.
 */
const updateFacetOptions = createAction('facetOptions/update', (payload) => validatePayload(payload, {
    freezeFacetOrder: new BooleanValue({ required: false }),
}));

const facetOptionsReducer = createReducer(getFacetOptionsInitialState(), (builder) => {
    builder
        .addCase(updateFacetOptions, (state, action) => {
        return { ...state, ...action.payload };
    })
        .addCase(executeSearch.fulfilled, (state) => {
        state.freezeFacetOrder = false;
    })
        .addCase(executeSearch.rejected, (state) => {
        state.freezeFacetOrder = false;
    })
        .addCase(change.fulfilled, (_, action) => action.payload.facetOptions);
});

/**
 * Update the values of the advanced search queries.
 * @param (advancedSearchQueries)  The current state of the advanced search queries.
 */
const updateAdvancedSearchQueries = createAction('advancedSearchQueries/update', (payload) => validatePayload(payload, {
    aq: new StringValue({ required: false, emptyAllowed: true }),
    cq: new StringValue({ required: false, emptyAllowed: true }),
}));

const advancedSearchQueriesReducer = createReducer(getAdvancedSearchQueriesInitialState(), (builder) => {
    builder
        .addCase(updateAdvancedSearchQueries, (state, action) => {
        if (!isUndefined(action.payload.aq)) {
            state.aq = action.payload.aq;
        }
        if (!isUndefined(action.payload.cq)) {
            state.cq = action.payload.cq;
        }
    })
        .addCase(change.fulfilled, (_, action) => action.payload.advancedSearchQueries)
        .addCase(restoreSearchParameters, (state, action) => {
        var _a, _b;
        state.aq = (_a = action.payload.aq) !== null && _a !== void 0 ? _a : state.aq;
        state.cq = (_b = action.payload.cq) !== null && _b !== void 0 ? _b : state.cq;
    });
});

/**
 * Enables debug information on requests.
 */
const enableDebug = createAction('debug/enable');
/**
 * Disables debug information on requests.
 */
const disableDebug = createAction('debug/disable');

const debugReducer = createReducer(getDebugInitialState(), (builder) => {
    builder
        .addCase(enableDebug, () => true)
        .addCase(disableDebug, () => false)
        .addCase(restoreSearchParameters, (state, action) => {
        var _a;
        return (_a = action.payload.debug) !== null && _a !== void 0 ? _a : state;
    });
});

const facetOrderReducer = createReducer(getFacetOrderInitialState(), (builder) => {
    builder.addCase(executeSearch.fulfilled, (_, action) => {
        return action.payload.response.facets.map((facet) => facet.facetId);
    });
    builder.addCase(change.fulfilled, (_, action) => {
        return action.payload.facetOrder;
    });
});

/**
 * Map of reducers that make up the SearchAppState.
 */
const searchAppReducers = {
    configuration: configurationReducer,
    facetSet: facetSetReducer,
    dateFacetSet: dateFacetSetReducer,
    facetOrder: facetOrderReducer,
    numericFacetSet: numericFacetSetReducer,
    categoryFacetSet: categoryFacetSetReducer,
    facetSearchSet: specificFacetSearchSetReducer,
    facetOptions: facetOptionsReducer,
    categoryFacetSearchSet: categoryFacetSearchSetReducer,
    query: queryReducer,
    advancedSearchQueries: advancedSearchQueriesReducer,
    querySet: querySetReducer,
    pagination: paginationReducer,
    redirection: redirectionReducer,
    querySuggest: querySuggestReducer,
    search: searchReducer,
    sortCriteria: sortCriteriaReducer,
    context: contextReducer,
    history: undoable(historyReducer, getHistoryInitialState()),
    didYouMean: didYouMeanReducer,
    fields: fieldsReducer,
    pipeline: pipelineReducer,
    searchHub: searchHubReducer,
    debug: debugReducer,
};

const getRecommendationInitialState = () => ({
    duration: 0,
    error: null,
    isLoading: false,
    id: 'Recommendation',
    recommendations: [],
    searchUid: '',
});

const recommendationReducer = createReducer(getRecommendationInitialState(), (builder) => {
    builder
        .addCase(setRecommendationId, (state, action) => {
        state.id = action.payload.id;
    })
        .addCase(getRecommendations.rejected, (state, action) => {
        state.error = action.payload ? action.payload : null;
        state.isLoading = false;
    })
        .addCase(getRecommendations.fulfilled, (state, action) => {
        state.error = null;
        state.recommendations = action.payload.recommendations;
        state.duration = action.payload.duration;
        state.isLoading = false;
        state.searchUid = action.payload.searchUid;
    })
        .addCase(getRecommendations.pending, (state) => {
        state.isLoading = true;
    });
});

/**
 * Map of reducers that make up the RecommendationAppState.
 */
const recommendationAppReducers = {
    configuration: configurationReducer,
    advancedSearchQueries: advancedSearchQueriesReducer,
    fields: fieldsReducer,
    context: contextReducer,
    pipeline: pipelineReducer,
    searchHub: searchHubReducer,
    debug: debugReducer,
    recommendation: recommendationReducer,
};

function buildController(engine) {
    let prevState = '{}';
    const hasStateChanged = (currentState) => {
        try {
            const stringifiedState = JSON.stringify(currentState);
            const hasChanged = prevState !== stringifiedState;
            prevState = stringifiedState;
            return hasChanged;
        }
        catch (e) {
            console.warn('Could not detect if state has changed, check the controller "get state method"', e);
            return true;
        }
    };
    return {
        /**
         * Adds a callback that will be called on state change.
         *
         * @param listener A callback to be invoked on state change.
         * @returns An unsubscribe function to remove the listener.
         */
        subscribe(listener) {
            listener();
            return engine.subscribe(() => {
                if (hasStateChanged(this.state)) {
                    listener();
                }
            });
        },
        get state() {
            return {};
        },
    };
}

const parseRankingInfo = (value) => {
    const REGEX_EXTRACT_DOCUMENT_WEIGHTS = /Document weights:\n((?:.)*?)\n+/g;
    const REGEX_EXTRACT_TERMS_WEIGHTS = /Terms weights:\n((?:.|\n)*)\n+/g;
    const REGEX_EXTRACT_TOTAL_WEIGHTS = /Total weight: ([0-9]+)/g;
    if (!value) {
        return null;
    }
    const docWeightsRegexResult = REGEX_EXTRACT_DOCUMENT_WEIGHTS.exec(value);
    const termsWeightRegexResult = REGEX_EXTRACT_TERMS_WEIGHTS.exec(value);
    const totalWeigthRegexResult = REGEX_EXTRACT_TOTAL_WEIGHTS.exec(value);
    const qreWeights = parseQREWeights(value);
    const documentWeights = parseWeights(docWeightsRegexResult ? docWeightsRegexResult[1] : null);
    const termsWeight = parseTermsWeights(termsWeightRegexResult);
    const totalWeight = totalWeigthRegexResult
        ? Number(totalWeigthRegexResult[1])
        : null;
    return {
        documentWeights,
        termsWeight,
        totalWeight,
        qreWeights,
    };
};
const parseWeights = (value) => {
    const REGEX_EXTRACT_LIST_OF_WEIGHTS = /(\w+(?:\s\w+)*): ([-0-9]+)/g;
    const REGEX_EXTRACT_WEIGHT_GROUP = /^(\w+(?:\s\w+)*): ([-0-9]+)$/;
    if (!value) {
        return null;
    }
    const listOfWeight = value.match(REGEX_EXTRACT_LIST_OF_WEIGHTS);
    if (!listOfWeight) {
        return null;
    }
    const weights = {};
    for (const weight of listOfWeight) {
        const weightGroup = weight.match(REGEX_EXTRACT_WEIGHT_GROUP);
        if (weightGroup) {
            const weightAppliedOn = weightGroup[1];
            const weightValue = weightGroup[2];
            weights[weightAppliedOn] = Number(weightValue);
        }
    }
    return weights;
};
const matchExec = (value, regex) => {
    const results = [];
    let arr;
    while ((arr = regex.exec(value)) !== null) {
        results.push(arr);
    }
    return results;
};
const parseTermsWeights = (termsWeight) => {
    const REGEX_EXTRACT_GROUP_OF_TERMS = /((?:[^:]+: [0-9]+, [0-9]+; )+)\n((?:\w+: [0-9]+; )+)/g;
    const REGEX_EXTRACT_SINGLE_TERM = /([^:]+): ([0-9]+), ([0-9]+); /g;
    if (!termsWeight || !termsWeight[1]) {
        return null;
    }
    const listOfTerms = matchExec(termsWeight[1], REGEX_EXTRACT_GROUP_OF_TERMS);
    if (!listOfTerms) {
        return null;
    }
    const terms = {};
    for (const term of listOfTerms) {
        const listOfWords = matchExec(term[1], REGEX_EXTRACT_SINGLE_TERM);
        const words = {};
        for (const word of listOfWords) {
            words[word[1]] = {
                Correlation: Number(word[2]),
                'TF-IDF': Number(word[3]),
            };
        }
        const weights = parseWeights(term[2]);
        terms[Object.keys(words).join(', ')] = {
            terms: words,
            Weights: weights,
        };
    }
    return terms;
};
const parseQREWeights = (value) => {
    const REGEX_EXTRACT_QRE_WEIGHTS = /(Expression:\s".*")\sScore:\s(?!0)([0-9]+)\n+/g;
    let qreWeightsRegexResult = REGEX_EXTRACT_QRE_WEIGHTS.exec(value);
    const qreWeights = [];
    while (qreWeightsRegexResult) {
        qreWeights.push({
            expression: qreWeightsRegexResult[1],
            score: parseInt(qreWeightsRegexResult[2], 10),
        });
        qreWeightsRegexResult = REGEX_EXTRACT_QRE_WEIGHTS.exec(value);
    }
    return qreWeights;
};

function rankingInformationSelector(state) {
    const results = state.search.response.results;
    return results.map((result) => {
        const ranking = parseRankingInfo(result.rankingInfo);
        return {
            result,
            ranking,
        };
    });
}

const initialStateSchema = new Schema({
    /**  If debug mode should be enabled */
    enabled: new BooleanValue({ default: false }),
});
const optionsSchema = new Schema({
    /** Whether to automatically log state to console on new responses */
    automaticallyLogInformation: new BooleanValue({ default: true }),
});
function buildRelevanceInspector(engine, props = {}) {
    let prevSearchUid = '';
    const controller = buildController(engine);
    const { dispatch } = engine;
    const initialState = validateInitialState(engine, initialStateSchema, props.initialState, buildRelevanceInspector.name);
    const options = validateOptions(engine, optionsSchema, props.options, buildRelevanceInspector.name);
    const hasNewResponse = (currentSearchUid) => {
        const hasChanged = currentSearchUid !== prevSearchUid;
        prevSearchUid = currentSearchUid;
        return hasChanged;
    };
    let logOnNextResponse = false;
    if (initialState.enabled) {
        dispatch(enableDebug());
    }
    return {
        ...controller,
        /** @returns The state of the `RelevanceInspector` controller. */
        get state() {
            const isEnabled = engine.state.debug;
            if (!engine.state.debug) {
                return { isEnabled };
            }
            const { executionReport, basicExpression, advancedExpression, constantExpression, userIdentities, rankingExpressions, } = engine.state.search.response;
            return {
                isEnabled,
                rankingInformation: rankingInformationSelector(engine.state),
                executionReport,
                expressions: {
                    basicExpression,
                    advancedExpression,
                    constantExpression,
                },
                userIdentities,
                rankingExpressions,
            };
        },
        /**
         * Enables debug.
         */
        enable() {
            dispatch(enableDebug());
        },
        /**
         * Disables debug.
         */
        disable() {
            dispatch(disableDebug());
        },
        /**
         * Logs information to the console.
         */
        logInformation() {
            if (this.state.isEnabled) {
                engine.logger.info(this.state, 'Relevance inspector information for new query');
                return;
            }
            engine.logger.warn('Relevance inspector "logInformation" has been called without debug being enabled. Enabling debug and triggering a query');
            logOnNextResponse = true;
            this.enable();
            dispatch(executeSearch(makeNoopAnalyticsAction(AnalyticsType.Search)()));
        },
        subscribe(listener) {
            listener();
            return engine.subscribe(() => {
                if (hasNewResponse(engine.state.search.response.searchUid)) {
                    if (this.state.isEnabled &&
                        (options.automaticallyLogInformation || logOnNextResponse)) {
                        logOnNextResponse = false;
                        this.logInformation();
                    }
                    listener();
                }
            });
        },
    };
}

const buildContext = (engine) => {
    const controller = buildController(engine);
    const { dispatch } = engine;
    return {
        ...controller,
        get state() {
            return {
                values: engine.state.context.contextValues,
            };
        },
        /**
         * Set the context for the query. Replace any existing context by the new one.
         *  @param ctx The context to set in the query.
         */
        set(ctx) {
            dispatch(setContext(ctx));
        },
        /**
         * Add, or replace if already present, a new context key and value pair.
         * @param contextKey The context key to add.
         * @param contextValue The context value to add.
         */
        add(contextKey, contextValue) {
            dispatch(addContext({ contextKey, contextValue }));
        },
        /**
         * Remove a context key from the query.
         * @param key The context key to remove.
         */
        remove(key) {
            dispatch(removeContext(key));
        },
    };
};

/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 */
const buildDidYouMean = (engine) => {
    const controller = buildController(engine);
    const { dispatch } = engine;
    dispatch(enableDidYouMean());
    return {
        ...controller,
        /**
         * @returns The state of the `DidYouMean` controller.
         */
        get state() {
            const state = engine.state;
            return {
                /**
                 * The correction that was applied to the query. If no correction was applied, will default to an empty string.
                 */
                wasCorrectedTo: state.didYouMean.wasCorrectedTo,
                /**
                 * Specifies if the query was automatically corrected by Headless.
                 *
                 * This happens when there is no result returned by the API for a particular mispelling.
                 */
                wasAutomaticallyCorrected: state.didYouMean.wasAutomaticallyCorrected,
                /**
                 * The query correction that is currently applied by the "did you mean" module.
                 */
                queryCorrection: state.didYouMean.queryCorrection,
                /**
                 * Specifies if there is a query correction to apply.
                 */
                hasQueryCorrection: state.didYouMean.queryCorrection.correctedQuery !== '' ||
                    state.didYouMean.wasCorrectedTo !== '',
            };
        },
        /**
         * Apply query correction using the query correction, if any, currently present in the state.
         */
        applyCorrection() {
            dispatch(applyDidYouMeanCorrection(this.state.queryCorrection.correctedQuery));
            dispatch(executeSearch(logDidYouMeanClick()));
        },
    };
};

const baseFacetResponseSelector = (state, id) => {
    return state.search.response.facets.find((response) => response.facetId === id);
};
const facetRequestSelector = (state, id) => {
    return state.facetSet[id];
};
function isFacetResponse(state, response) {
    return !!response && response.facetId in state.facetSet;
}
const facetResponseSelector = (state, facetId) => {
    const response = baseFacetResponseSelector(state, facetId);
    if (isFacetResponse(state, response)) {
        return response;
    }
    return undefined;
};
const facetResponseSelectedValuesSelector = (state, facetId) => {
    const response = facetResponseSelector(state, facetId);
    if (!response) {
        return [];
    }
    return response.values.filter((value) => value.state === 'selected');
};

function isCategoryFacetResponse$1(state, response) {
    return !!response && response.facetId in state.categoryFacetSet;
}
const categoryFacetResponseSelector = (state, facetId) => {
    const response = baseFacetResponseSelector(state, facetId);
    if (isCategoryFacetResponse$1(state, response)) {
        return response;
    }
    return undefined;
};
const categoryFacetRequestSelector = (state, id) => {
    var _a;
    return (_a = state.categoryFacetSet[id]) === null || _a === void 0 ? void 0 : _a.request;
};
const categoryFacetSelectedValuesSelector = (state, facetId) => {
    const facetResponse = categoryFacetResponseSelector(state, facetId);
    const parentsAndValues = partitionIntoParentsAndValues(facetResponse === null || facetResponse === void 0 ? void 0 : facetResponse.values);
    return parentsAndValues.parents;
};

function buildGenericFacetSearch(engine, props) {
    const dispatch = engine.dispatch;
    const { options, getFacetSearch } = props;
    const facetId = options.facetId;
    const initialNumberOfValues = options.numberOfValues || 10;
    return {
        /** Updates the facet search query.
         * @param text The new query.
         */
        updateText(text) {
            const query = `*${text}*`;
            dispatch(updateFacetSearch({
                facetId,
                query,
                numberOfValues: initialNumberOfValues,
            }));
        },
        /** Increases number of results returned by numberOfResults */
        showMoreResults() {
            const { numberOfValues } = getFacetSearch().options;
            dispatch(updateFacetSearch({
                facetId,
                numberOfValues: numberOfValues + initialNumberOfValues,
            }));
            dispatch(executeFacetSearch(facetId));
        },
        /** Executes a facet search to update the values.*/
        search() {
            dispatch(executeFacetSearch(facetId));
        },
        /** Selects a search result.*/
        select(value) {
            const facetValue = value.rawValue;
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetSelect({ facetId, facetValue })));
        },
        get state() {
            const { response, isLoading } = getFacetSearch();
            const values = response.values;
            return {
                ...response,
                values,
                isLoading,
            };
        },
    };
}

function buildCategoryFacetSearch(engine, props) {
    const { dispatch } = engine;
    const options = { ...defaultFacetSearchOptions, ...props.options };
    const { facetId } = options;
    const getFacetSearch = () => engine.state.categoryFacetSearchSet[facetId];
    dispatch(registerCategoryFacetSearch(options));
    const genericFacetSearch = buildGenericFacetSearch(engine, {
        options,
        getFacetSearch,
    });
    return {
        ...genericFacetSearch,
        select(value) {
            dispatch(selectCategoryFacetSearchResult({
                facetId,
                value,
                retrieveCount: options.numberOfValues,
            }));
            genericFacetSearch.select(value);
        },
        get state() {
            return genericFacetSearch.state;
        },
    };
}

/**
 * Toggles the facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (CategoryFacetValue) The target facet value.
 */
const executeToggleCategoryFacetSelect = createAsyncThunk('categoryFacetController/executeToggleSelect', ({ facetId, selection, retrieveCount }, { dispatch, extra: { validatePayload } }) => {
    validatePayload(facetId, requiredNonEmptyString);
    validateCategoryFacetValue(selection);
    const analyticsAction = getAnalyticsActionForCategoryFacetToggleSelect(facetId, selection);
    dispatch(toggleSelectCategoryFacetValue({ facetId, selection, retrieveCount }));
    dispatch(updateFacetOptions({ freezeFacetOrder: true }));
    dispatch(executeSearch(analyticsAction));
});
/**
 * Deselects all values on the path to the currently selected category facet value and executes
 * a search with the appropriate analytics
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The number of category facet values to show after deselecting.
 */
const executeDeselectAllCategoryFacetValues = createAsyncThunk('categoryFacetController/executeDeselectAll', ({ facetId }, { dispatch, extra: { validatePayload } }) => {
    validatePayload({ facetId }, { facetId: facetIdDefinition });
    dispatch(deselectAllCategoryFacetValues(facetId));
    dispatch(updateFacetOptions({ freezeFacetOrder: true }));
    dispatch(executeSearch(logFacetClearAll(facetId)));
});

const categoryFacetSortCriteria = [
    'alphanumeric',
    'occurrences',
];

const facetId = new StringValue({
    regex: /^[a-zA-Z0-9-_]+$/,
});
const field = new StringValue({ required: true });
const basePath = new ArrayValue({
    each: new StringValue(),
});
const delimitingCharacter = new StringValue();
const filterByBasePath = new BooleanValue();
const filterFacetCount = new BooleanValue();
const injectionDepth = new NumberValue({ min: 0 });
const numberOfValues = new NumberValue({ min: 1 });
const generateAutomaticRanges = new BooleanValue({
    required: true,
});
const captions = new RecordValue();
const query = new StringValue();
const facetSearchOptionDefinitions = {
    captions,
    numberOfValues,
    query,
};
const facetSearch = new RecordValue({
    values: facetSearchOptionDefinitions,
});

const categoryFacetOptionsSchema = new Schema({
    facetId,
    field,
    basePath,
    delimitingCharacter,
    filterByBasePath,
    filterFacetCount,
    injectionDepth,
    numberOfValues,
    sortCriteria: new StringValue({
        constrainTo: categoryFacetSortCriteria,
    }),
    facetSearch,
});

function generateFacetId(config, logger) {
    const { field, state } = config;
    if (!isFieldUsedAsFacetId(config)) {
        return field;
    }
    const prefix = `${field}_`;
    const id = calculateId(prefix, state);
    logWarningMessage(field, logger);
    return `${prefix}${id}`;
}
function isFieldUsedAsFacetId(config) {
    const { field, state } = config;
    const sets = extractFacetSets(state);
    return sets.some((set) => set && field in set);
}
function calculateId(prefix, state) {
    const sets = extractFacetSets(state);
    const keys = sets
        .map((set) => Object.keys(set || {}))
        .reduce((all, current) => all.concat(current), []);
    return findMaxId(keys, prefix) + 1;
}
function extractFacetSets(state) {
    const { facetSet, numericFacetSet, dateFacetSet, categoryFacetSet } = state;
    return [facetSet, numericFacetSet, dateFacetSet, categoryFacetSet];
}
function findMaxId(keys, prefix) {
    const defaultId = 0;
    const ids = keys.map((key) => {
        const stringId = key.split(prefix)[1];
        const id = parseInt(stringId, 10);
        return Number.isNaN(id) ? defaultId : id;
    });
    const lastNumber = ids.sort().pop();
    return lastNumber !== null && lastNumber !== void 0 ? lastNumber : defaultId;
}
function logWarningMessage(field, logger) {
    const message = `A facet with field "${field}" already exists.
  To avoid unexpected behaviour, configure the #id option on the facet controller.`;
    logger.warn(message);
}

function determineFacetId(engine, config) {
    const { state, logger } = engine;
    const { field, facetId } = config;
    return facetId || generateFacetId({ field, state }, logger);
}

function buildCategoryFacet(engine, props) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const facetId = determineFacetId(engine, props.options);
    const options = {
        ...defaultCategoryFacetOptions,
        ...props.options,
        facetId,
    };
    validateOptions(engine, categoryFacetOptionsSchema, options, buildCategoryFacet.name);
    const createFacetSearch = () => {
        const { facetSearch } = props.options;
        const facetSearchOptions = {
            facetId,
            ...facetSearch,
        };
        return buildCategoryFacetSearch(engine, { options: facetSearchOptions });
    };
    const getRequest = () => {
        return categoryFacetRequestSelector(engine.state, facetId);
    };
    const getResponse = () => {
        return categoryFacetResponseSelector(engine.state, facetId);
    };
    dispatch(registerCategoryFacet(options));
    const facetSearch = createFacetSearch();
    const { state, ...restOfFacetSearch } = facetSearch;
    return {
        ...controller,
        facetSearch: restOfFacetSearch,
        /**
         * Toggles the specified facet value.
         * @param selection The facet value to toggle.
         */
        toggleSelect: (selection) => dispatch(executeToggleCategoryFacetSelect({
            facetId,
            selection,
            retrieveCount: options.numberOfValues,
        })),
        /** Deselects all facet values.*/
        deselectAll: () => dispatch(executeDeselectAllCategoryFacetValues({ facetId })),
        /** Sorts the facet values according to the specified criterion.
         * @param criterion The criterion to sort values by.
         */
        sortBy(criterion) {
            const facetId = options.facetId;
            dispatch(updateCategoryFacetSortCriterion({ facetId, criterion }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetUpdateSort({ facetId, criterion })));
        },
        /**
         * Checks whether the facet values are sorted according to the specified criterion.
         * @param criterion The criterion to compare.
         * @returns Whether the facet values are sorted according to the specified criterion.
         */
        isSortedBy(criterion) {
            const request = getRequest();
            return request.sortCriteria === criterion;
        },
        /**
         * Increases the number of values displayed in the facet to the next multiple of the originally configured value.
         */
        showMoreValues() {
            const { facetId, numberOfValues: increment } = options;
            const { values } = this.state;
            const numberOfValues = values.length + increment;
            dispatch(updateCategoryFacetNumberOfValues({ facetId, numberOfValues }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetShowMore(facetId)));
        },
        /** Sets the displayed number of values to the originally configured value. */
        showLessValues() {
            const { facetId, numberOfValues } = options;
            dispatch(updateCategoryFacetNumberOfValues({ facetId, numberOfValues }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetShowLess(facetId)));
        },
        /** The state of the `CategoryFacet` controller. */
        get state() {
            const request = getRequest();
            const response = getResponse();
            const { parents, values } = partitionIntoParentsAndValues(response === null || response === void 0 ? void 0 : response.values);
            const isLoading = engine.state.search.isLoading;
            const hasActiveValues = parents.length !== 0;
            const canShowMoreValues = parents.length > 0
                ? parents[parents.length - 1].moreValuesAvailable
                : (response === null || response === void 0 ? void 0 : response.moreValuesAvailable) || false;
            const canShowLessValues = values.length > options.numberOfValues;
            return {
                /** The facet id. */
                facetId,
                /** The parent values of the facet. */
                parents,
                /** The values of the facet. */
                values,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading,
                /** `true` if there is at least one non-idle value and `false` otherwise. */
                hasActiveValues,
                /** `true` if there are more values to display and `false` otherwise. */
                canShowMoreValues,
                /** `true` if fewer values can be displayed and `false` otherwise. */
                canShowLessValues,
                /** The active sortCriterion of the facet. */
                sortCriteria: request.sortCriteria,
                /** The state of the facet's searchbox. */
                facetSearch: facetSearch.state,
            };
        },
    };
}

function buildFacetSearch(engine, props) {
    const { dispatch } = engine;
    const { options } = props;
    const { facetId } = options;
    const getFacetSearch = () => engine.state.facetSearchSet[facetId];
    dispatch(registerFacetSearch(options));
    const genericFacetSearch = buildGenericFacetSearch(engine, {
        options,
        getFacetSearch,
    });
    return {
        ...genericFacetSearch,
        /**
         * Selects the provided value if unselected
         * @param result A single specificFacetSearchResult object
         */
        select(value) {
            dispatch(selectFacetSearchResult({ facetId, value }));
            genericFacetSearch.select(value);
        },
        get state() {
            return genericFacetSearch.state;
        },
    };
}

const isFacetValueSelected = (value) => {
    return value.state === 'selected';
};
const getAnalyticsActionForToggleFacetSelect = (facetId, selection) => {
    const payload = {
        facetId: facetId,
        facetValue: selection.value,
    };
    return isFacetValueSelected(selection)
        ? logFacetDeselect(payload)
        : logFacetSelect(payload);
};

const definition = {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: facetValueDefinition }),
};
/**
 * Toggles the facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (FacetValue) The target facet value.
 */
const executeToggleFacetSelect = createAsyncThunk('facet/executeToggleSelect', ({ facetId, selection }, { dispatch, extra: { validatePayload } }) => {
    const analyticsAction = getAnalyticsActionForToggleFacetSelect(facetId, selection);
    validatePayload({ facetId, selection }, definition);
    dispatch(toggleSelectFacetValue({ facetId, selection }));
    dispatch(updateFacetOptions({ freezeFacetOrder: true }));
    dispatch(executeSearch(analyticsAction));
});

const facetSortCriteria = [
    'score',
    'alphanumeric',
    'occurrences',
    'automatic',
];

const facetOptionsSchema = new Schema({
    facetId,
    field,
    delimitingCharacter,
    filterFacetCount,
    injectionDepth,
    numberOfValues,
    sortCriteria: new StringValue({ constrainTo: facetSortCriteria }),
    facetSearch,
});

function buildFacet(engine, props) {
    const { dispatch } = engine;
    const controller = buildController(engine);
    const facetId = determineFacetId(engine, props.options);
    const options = {
        facetSearch: { ...defaultFacetSearchOptions },
        ...defaultFacetOptions,
        ...props.options,
        facetId,
    };
    validateOptions(engine, facetOptionsSchema, options, buildFacet.name);
    const createFacetSearch = () => {
        const { facetId, facetSearch } = options;
        const facetSearchOptions = {
            facetId,
            ...facetSearch,
        };
        return buildFacetSearch(engine, { options: facetSearchOptions });
    };
    const getRequest = () => facetRequestSelector(engine.state, facetId);
    const getResponse = () => facetResponseSelector(engine.state, facetId);
    const getNumberOfActiveValues = () => {
        const { currentValues } = getRequest();
        return currentValues.filter((v) => v.state !== 'idle').length;
    };
    const computeCanShowLessValues = () => {
        const { currentValues } = getRequest();
        const initialNumberOfValues = options.numberOfValues;
        const hasIdleValues = !!currentValues.find((v) => v.state === 'idle');
        return initialNumberOfValues < currentValues.length && hasIdleValues;
    };
    dispatch(registerFacet(options));
    const facetSearch = createFacetSearch();
    const { state, ...restOfFacetSearch } = facetSearch;
    return {
        ...controller,
        facetSearch: restOfFacetSearch,
        /**
         * Toggles the specified facet value.
         * @param selection The facet value to toggle.
         */
        toggleSelect: (selection) => dispatch(executeToggleFacetSelect({ facetId: options.facetId, selection })),
        /**
         * Checks whether the specified facet value is selected.
         * @param value The facet value to check.
         * @returns Whether the specified facet value is selected.
         */
        isValueSelected: isFacetValueSelected,
        /** Deselects all facet values.*/
        deselectAll() {
            dispatch(deselectAllFacetValues(facetId));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetClearAll(facetId)));
        },
        /** Sorts the facet values according to the specified criterion.
         * @param criterion The criterion to sort values by.
         */
        sortBy(criterion) {
            dispatch(updateFacetSortCriterion({ facetId, criterion }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetUpdateSort({ facetId, criterion })));
        },
        /**
         * Checks whether the facet values are sorted according to the specified criterion.
         * @param criterion The criterion to compare.
         * @returns Whether the facet values are sorted according to the specified criterion.
         */
        isSortedBy(criterion) {
            return this.state.sortCriterion === criterion;
        },
        /**
         * Increases the number of values displayed in the facet to the next multiple of the originally configured value.
         */
        showMoreValues() {
            const numberInState = getRequest().numberOfValues;
            const initialNumberOfValues = options.numberOfValues;
            const numberToNextMultipleOfConfigured = initialNumberOfValues - (numberInState % initialNumberOfValues);
            const numberOfValues = numberInState + numberToNextMultipleOfConfigured;
            dispatch(updateFacetNumberOfValues({ facetId, numberOfValues }));
            dispatch(updateFacetIsFieldExpanded({ facetId, isFieldExpanded: true }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetShowMore(facetId)));
        },
        /** Sets the displayed number of values to the originally configured value.*/
        showLessValues() {
            const initialNumberOfValues = options.numberOfValues;
            const newNumberOfValues = Math.max(initialNumberOfValues, getNumberOfActiveValues());
            dispatch(updateFacetNumberOfValues({ facetId, numberOfValues: newNumberOfValues }));
            dispatch(updateFacetIsFieldExpanded({ facetId, isFieldExpanded: false }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetShowLess(facetId)));
        },
        /** The state of the `Facet` controller. */
        get state() {
            const request = getRequest();
            const response = getResponse();
            const isLoading = engine.state.search.isLoading;
            const sortCriterion = request.sortCriteria;
            const values = response ? response.values : [];
            const hasActiveValues = values.some((facetValue) => facetValue.state !== 'idle');
            const canShowMoreValues = response ? response.moreValuesAvailable : false;
            return {
                /** The facet id. */
                facetId,
                /** The values of the facet. */
                values,
                /** The active sortCriterion of the facet. */
                sortCriterion,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading,
                /** `true` if there is at least one non-idle value and `false` otherwise. */
                hasActiveValues,
                /** `true` if there are more values to display and `false` otherwise. */
                canShowMoreValues,
                /** `true` if fewer values can be displayed and `false` otherwise. */
                canShowLessValues: computeCanShowLessValues(),
                /** The state of the facet's searchbox. */
                facetSearch: facetSearch.state,
            };
        },
    };
}

const isRangeFacetValueSelected = (selection) => {
    return selection.state === 'selected';
};
const getAnalyticsActionForToggleRangeFacetSelect = (facetId, selection) => {
    const facetValue = `${selection.start}..${selection.end}`;
    const payload = { facetId, facetValue };
    return isRangeFacetValueSelected(selection)
        ? logFacetDeselect(payload)
        : logFacetSelect(payload);
};

/**
 * Executes a search with the appropriate analytics for a toggle range facet value
 * @param payload (RangeFacetSelectionPayload) Object specifying the target facet and selection.
 */
const executeToggleRangeFacetSelect = createAsyncThunk('rangeFacet/executeToggleSelect', ({ facetId, selection }, { dispatch, extra: { validatePayload } }) => {
    validatePayload({ facetId, selection }, rangeFacetSelectionPayloadDefinition(selection));
    const analyticsAction = getAnalyticsActionForToggleRangeFacetSelect(facetId, selection);
    dispatch(updateFacetOptions({ freezeFacetOrder: true }));
    dispatch(executeSearch(analyticsAction));
});

function buildRangeFacet(engine, props) {
    const { facetId, getRequest } = props;
    const controller = buildController(engine);
    const dispatch = engine.dispatch;
    return {
        ...controller,
        /**
         * Toggles the specified facet value.
         * @param selection The facet value to toggle.
         */
        toggleSelect: (selection) => dispatch(executeToggleRangeFacetSelect({ facetId, selection })),
        /**
         * Checks whether the specified facet value is selected.
         * @param selection The facet value to check.
         * @returns Whether the specified facet value is selected.
         */
        isValueSelected: isRangeFacetValueSelected,
        /** Deselects all facet values. */
        deselectAll() {
            dispatch(deselectAllFacetValues(facetId));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetClearAll(facetId)));
        },
        /** Sorts the facet values according to the specified criterion.
         * @param criterion The criterion to sort values by.
         */
        sortBy(criterion) {
            dispatch(updateRangeFacetSortCriterion({ facetId, criterion }));
            dispatch(updateFacetOptions({ freezeFacetOrder: true }));
            dispatch(executeSearch(logFacetUpdateSort({ facetId, criterion })));
        },
        /**
         * Checks whether the facet values are sorted according to the specified criterion.
         * @param criterion The criterion to compare.
         * @returns Whether the facet values are sorted according to the specified criterion.
         */
        isSortedBy(criterion) {
            return this.state.sortCriterion === criterion;
        },
        /** The state of the `RangeFacet` controller.*/
        get state() {
            const request = getRequest();
            const response = baseFacetResponseSelector(engine.state, facetId);
            const sortCriterion = request.sortCriteria;
            const values = response ? response.values : [];
            const isLoading = engine.state.search.isLoading;
            const hasActiveValues = values.some((facetValue) => facetValue.state !== 'idle');
            return {
                /** The facet id. */
                facetId,
                /** The values of the facet. */
                values,
                /** The active sortCriterion of the facet. */
                sortCriterion,
                /** `true` if there is at least one non-idle value and `false` otherwise. */
                hasActiveValues,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading,
            };
        },
    };
}

const definition$1 = {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: dateFacetValueDefinition }),
};
/**
 * Toggles the date facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (DateFacetValue) The target date facet value.
 */
const executeToggleDateFacetSelect = createAsyncThunk('dateFacet/executeToggleSelect', (payload, { dispatch, extra: { validatePayload } }) => {
    validatePayload(payload, definition$1);
    dispatch(toggleSelectDateFacetValue(payload));
    dispatch(executeToggleRangeFacetSelect(payload));
});

const facetValueStates = ['idle', 'selected'];

const rangeFacetSortCriteria = ['ascending', 'descending'];

const dateRangeRequestDefinition$1 = {
    start: new StringValue(),
    end: new StringValue(),
    endInclusive: new BooleanValue(),
    state: new StringValue({ constrainTo: facetValueStates }),
};
const dateFacetOptionsSchema = new Schema({
    facetId,
    field,
    generateAutomaticRanges,
    filterFacetCount,
    injectionDepth,
    numberOfValues,
    currentValues: new ArrayValue({
        each: new RecordValue({ values: dateRangeRequestDefinition$1 }),
    }),
    sortCriteria: new StringValue({ constrainTo: rangeFacetSortCriteria }),
});

dayjs.extend(utc);
dayjs.extend(customParseFormat);
function isSearchApiDate(date) {
    return formatForSearchApi(dayjs(date)) === date;
}
/** Creates a `DateRangeRequest`.
 * @param config The options with which to create a `DateRangeRequest`.
 * @returns A new `DateRangeRequest`.
 */
function buildDateRange(config) {
    var _a, _b;
    const start = buildDate(config.start, config);
    const end = buildDate(config.end, config);
    const endInclusive = (_a = config.endInclusive) !== null && _a !== void 0 ? _a : false;
    const state = (_b = config.state) !== null && _b !== void 0 ? _b : 'idle';
    return {
        start,
        end,
        endInclusive,
        state,
    };
}
function buildDate(rawDate, options) {
    const { dateFormat, useLocalTime } = options;
    const date = dayjs(rawDate, dateFormat);
    if (!date.isValid()) {
        throw new Error(`Could not parse the provided date "${rawDate}".
      Please provide a dateFormat string in the configuration options.
      See https://day.js.org/docs/en/parse/string-format for more information.
       `);
    }
    const adjusted = useLocalTime ? date : date.utc();
    return formatForSearchApi(adjusted);
}
function formatForSearchApi(date) {
    const DATE_FORMAT = 'YYYY/MM/DD@HH:mm:ss';
    return date.format(DATE_FORMAT);
}

function buildDateFacet(engine, props) {
    const dispatch = engine.dispatch;
    const facetId = determineFacetId(engine, props.options);
    const options = { ...props.options, facetId };
    validateOptions(engine, dateFacetOptionsSchema, options, buildDateFacet.name);
    dispatch(registerDateFacet(options));
    const rangeFacet = buildRangeFacet(engine, {
        facetId,
        getRequest: () => engine.state.dateFacetSet[facetId],
    });
    return {
        ...rangeFacet,
        /**
         * Toggles the specified facet value.
         * @param selection The facet value to toggle.
         */
        toggleSelect: (selection) => dispatch(executeToggleDateFacetSelect({ facetId, selection })),
        /** The state of the `DateFacet` controller.*/
        get state() {
            return {
                ...rangeFacet.state,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading: engine.state.search.isLoading,
            };
        },
    };
}

const definition$2 = {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: numericFacetValueDefinition }),
};
const executeToggleNumericFacetSelectType = 'numericFacet/executeToggleSelect';
/**
 * Toggles the numeric facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (NumericFacetValue) The target numeric facet value.
 */
const executeToggleNumericFacetSelect = createAsyncThunk(executeToggleNumericFacetSelectType, (payload, { dispatch, extra: { validatePayload } }) => {
    validatePayload(payload, definition$2);
    dispatch(toggleSelectNumericFacetValue(payload));
    dispatch(executeToggleRangeFacetSelect(payload));
});

const numericRangeRequestDefinition = {
    start: new NumberValue(),
    end: new NumberValue(),
    endInclusive: new BooleanValue(),
    state: new StringValue({ constrainTo: facetValueStates }),
};
const numericFacetOptionsSchema = new Schema({
    facetId,
    field,
    generateAutomaticRanges,
    filterFacetCount,
    injectionDepth,
    numberOfValues,
    currentValues: new ArrayValue({
        each: new RecordValue({ values: numericRangeRequestDefinition }),
    }),
    sortCriteria: new StringValue({ constrainTo: rangeFacetSortCriteria }),
});

/** Creates a `NumericRangeRequest`.
 * @param config The options with which to create a `NumericRangeRequest`.
 * @returns A new `NumericRangeRequest`.
 */
function buildNumericRange(config) {
    return {
        endInclusive: false,
        state: 'idle',
        ...config,
    };
}
function buildNumericFacet(engine, props) {
    const dispatch = engine.dispatch;
    const facetId = determineFacetId(engine, props.options);
    const options = { ...props.options, facetId };
    validateOptions(engine, numericFacetOptionsSchema, options, buildNumericFacet.name);
    dispatch(registerNumericFacet(options));
    const rangeFacet = buildRangeFacet(engine, {
        facetId,
        getRequest: () => engine.state.numericFacetSet[facetId],
    });
    return {
        ...rangeFacet,
        /**
         * Toggles the specified facet value.
         * @param selection The facet value to toggle.
         */
        toggleSelect: (selection) => dispatch(executeToggleNumericFacetSelect({ facetId, selection })),
        /** The state of the `NumericFacet` controller.*/
        get state() {
            return rangeFacet.state;
        },
    };
}

/**
 * Logs an event which represents a move forward in the interface history.
 */
const logNavigateForward = makeAnalyticsAction('history/analytics/forward', AnalyticsType.Search, (client) => client.logSearchEvent('historyForward') // TODO: Need to create this event natively in coveo.analytics to remove cast
);
/**
 * Logs an event which represents a move backward in the interface history.
 */
const logNavigateBackward = makeAnalyticsAction('history/analytics/backward', AnalyticsType.Search, (client) => client.logSearchEvent('historyBackward') // TODO: Need to create this event natively in coveo.analytics to remove cast
);

const buildHistory = (engine) => {
    const controller = buildController(engine);
    const { dispatch } = engine;
    return {
        ...controller,
        get state() {
            return engine.state.history;
        },
        /**
         * Move backward in the interface history.
         */
        async back() {
            await dispatch(back());
            dispatch(executeSearch(logNavigateBackward()));
        },
        /**
         * Move forward in the interface history.
         */
        async forward() {
            await dispatch(forward());
            dispatch(executeSearch(logNavigateForward()));
        },
    };
};

function firstResultSelector(state) {
    return state.pagination.firstResult;
}
function numberOfResultsSelector(state) {
    return state.pagination.numberOfResults;
}
function totalCountFilteredSelector(state) {
    return state.pagination.totalCountFiltered;
}
/** Calculates the current page number.
 * @param state SearchPageState.
 * @returns the current page number.
 */
const currentPageSelector = createSelector(firstResultSelector, numberOfResultsSelector, calculatePage);
/** Calculates the maximum page number
 * @param state SearchPageState.
 * @returns the maximum page number.
 */
const maxPageSelector = createSelector(totalCountFilteredSelector, numberOfResultsSelector, calculateMaxPage);
/** Calculates the current pages relative to the current page.
 * @param state SearchPageState.
 * @param desiredNumberOfPages the number of pages to return.
 * @returns the current page numbers.
 */
const currentPagesSelector = createSelector(currentPageSelector, maxPageSelector, (_, desiredNumberOfPages) => desiredNumberOfPages, (page, maxPage, desiredNumberOfPages) => {
    let range = buildRange(page, desiredNumberOfPages);
    range = shiftRightIfNeeded(range);
    range = shiftLeftIfNeeded(range, maxPage);
    return buildCurrentPages(range);
});
function buildRange(page, desiredNumberOfPages) {
    const isEven = desiredNumberOfPages % 2 === 0;
    const leftCapacity = Math.floor(desiredNumberOfPages / 2);
    const rightCapacity = isEven ? leftCapacity - 1 : leftCapacity;
    const start = page - leftCapacity;
    const end = page + rightCapacity;
    return { start, end };
}
function shiftRightIfNeeded(range) {
    const leftExcess = Math.max(minimumPage - range.start, 0);
    const start = range.start + leftExcess;
    const end = range.end + leftExcess;
    return { start, end };
}
function shiftLeftIfNeeded(range, maxPage) {
    const rightExcess = Math.max(range.end - maxPage, 0);
    const start = Math.max(range.start - rightExcess, minimumPage);
    const end = range.end - rightExcess;
    return { start, end };
}
function buildCurrentPages(range) {
    const currentPages = [];
    for (let counter = range.start; counter <= range.end; ++counter) {
        currentPages.push(counter);
    }
    return currentPages;
}

/**
 * Log pager resize
 */
const logPagerResize = makeAnalyticsAction('analytics/pager/resize', AnalyticsType.Search, (client, state) => {
    var _a;
    return client.logPagerResize({
        currentResultsPerPage: ((_a = state.pagination) === null || _a === void 0 ? void 0 : _a.numberOfResults) ||
            getPaginationInitialState().numberOfResults,
    });
});
/**
 * Log page number
 */
const logPageNumber = makeAnalyticsAction('analytics/pager/number', AnalyticsType.Search, (client, state) => client.logPagerNumber({
    pagerNumber: currentPageSelector(state),
}));
/**
 * Log pager next
 */
const logPageNext = makeAnalyticsAction('analytics/pager/next', AnalyticsType.Search, (client, state) => client.logPagerNext({
    pagerNumber: currentPageSelector(state),
}));
/**
 * Log pager previous
 */
const logPagePrevious = makeAnalyticsAction('analytics/pager/previous', AnalyticsType.Search, (client, state) => client.logPagerPrevious({
    pagerNumber: currentPageSelector(state),
}));

const optionsSchema$1 = new Schema({
    numberOfPages: new NumberValue({ default: 5, min: 0 }),
});
const initialStateSchema$1 = new Schema({
    page: new NumberValue({ min: 1 }),
});
/**
 * The `Pager` controller allows to navigate through the different result pages.
 */
function buildPager(engine, props = {}) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const options = validateOptions(engine, optionsSchema$1, props.options, buildPager.name);
    const initialState = validateInitialState(engine, initialStateSchema$1, props.initialState, buildPager.name);
    const page = initialState.page;
    if (page) {
        dispatch(registerPage(page));
    }
    const getCurrentPage = () => {
        return currentPageSelector(engine.state);
    };
    const getCurrentPages = () => {
        const { numberOfPages } = options;
        return currentPagesSelector(engine.state, numberOfPages);
    };
    const getMaxPage = () => {
        return maxPageSelector(engine.state);
    };
    return {
        ...controller,
        /**
         * @returns {PagerState} The state of the `Pager` controller.
         */
        get state() {
            const currentPage = getCurrentPage();
            const maxPage = getMaxPage();
            const hasPreviousPage = currentPage > minimumPage && maxPage > 0;
            const hasNextPage = currentPage < maxPage;
            return {
                /** @returns the current selected page */
                currentPage,
                /** @returns the current pages range */
                currentPages: getCurrentPages(),
                /**  @returns the max available page for this query */
                maxPage,
                /** @returns `true` when a previous page is available, and `false` otherwise.*/
                hasPreviousPage,
                /** @returns `true` when a next page is available, and `false` otherwise. */
                hasNextPage,
            };
        },
        /**
         * Updates the results to those on the passed page.
         * @param page The page number.
         */
        selectPage(page) {
            dispatch(updatePage(page));
            dispatch(executeSearch(logPageNumber()));
        },
        /**
         * Updates the results to those on the next page.
         */
        nextPage() {
            dispatch(nextPage());
            dispatch(executeSearch(logPageNext()));
        },
        /**
         * Updates the results to those on the previous page.
         */
        previousPage() {
            dispatch(previousPage());
            dispatch(executeSearch(logPagePrevious()));
        },
        /**
         * @returns `true` when the current page is equal to the current page, and `false` otherwise.
         * @param page The page number to check.
         * @returns boolean.
         */
        isCurrentPage(page) {
            return page === this.state.currentPage;
        },
    };
}

const buildQueryError = (engine) => {
    const controller = buildController(engine);
    return {
        ...controller,
        /**
         * The state of the `QueryError` controller.
         */
        get state() {
            return {
                /**
                 * `true` if there is an error for the last executed query and `false` otherwise.
                 */
                hasError: engine.state.search.error !== null,
                /**
                 * The current error for the last executed query, or `null` if none is present.
                 */
                error: engine.state.search.error,
            };
        },
    };
};

/**
 * The QuerySummary component can display information about the current range of results (e.g., "Results
 * 1-10 of 123").
 *
 * When the query does not match any items, the QuerySummary component can instead return information to the end users.
 */
const buildQuerySummary = (engine) => {
    const controller = buildController(engine);
    const durationInSeconds = () => {
        const state = engine.state;
        const inSeconds = state.search.duration / 1000;
        return Math.round((inSeconds + Number.EPSILON) * 100) / 100;
    };
    return {
        ...controller,
        /**
         * @returns {QuerySummaryState} The state of the `QuerySummary` controller.
         */
        get state() {
            const state = engine.state;
            return {
                /**
                 * The 1-based index of the first search result returned for the current page.
                 */
                firstResult: state.pagination.firstResult + 1,
                /**
                 * The 1-based index of the last search result returned for the current page.
                 */
                lastResult: state.pagination.firstResult + state.search.results.length,
                /**
                 * The total count of results available.
                 */
                total: state.pagination.totalCountFiltered,
                /**
                 * The query that was last executed (the content of the searchbox).
                 */
                query: state.search.queryExecuted,
                /**
                 * Determines if an empty query was executed.
                 */
                hasQuery: state.search.queryExecuted !== '',
                /**
                 * Determines if a query execution time is available.
                 */
                hasDuration: state.search.duration !== 0,
                /**
                 * Determines if there are results available for the last executed query.
                 */
                hasResults: state.search.results.length !== 0,
                /**
                 * The duration, in milliseconds, that the last query took to execute.
                 */
                durationInMilliseconds: state.search.duration,
                /**
                 * The duration, in seconds, that the last query took to execute.
                 */
                durationInSeconds: durationInSeconds(),
            };
        },
    };
};

const optionsSchema$2 = new Schema({
    fieldsToInclude: new ArrayValue({
        required: false,
        each: new StringValue({
            required: true,
            emptyAllowed: false,
        }),
    }),
});
function buildResultList(engine, props) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const options = validateOptions(engine, optionsSchema$2, props === null || props === void 0 ? void 0 : props.options, buildResultList.name);
    if (options.fieldsToInclude) {
        dispatch(registerFieldsToInclude(options.fieldsToInclude));
    }
    let lastFetchCompleted = 0;
    let consecutiveFetches = 0;
    const maxConsecutiveFetches = 5;
    const minDelayBetweenFetches = 200;
    let errorLogged = false;
    const triggerFetchMoreResult = () => {
        if (engine.state.search.isLoading) {
            return;
        }
        const delayBetweenFetches = Date.now() - lastFetchCompleted;
        if (delayBetweenFetches < minDelayBetweenFetches) {
            consecutiveFetches++;
            if (consecutiveFetches >= maxConsecutiveFetches) {
                lastFetchCompleted = Date.now();
                !errorLogged &&
                    engine.logger.error(`The result list method "fetchMoreResults" execution prevented because it has been triggered consecutively ${maxConsecutiveFetches} times, with little delay. Please verify the conditions under which the function is called.`);
                errorLogged = true;
                return;
            }
        }
        else {
            consecutiveFetches = 0;
        }
        errorLogged = false;
        dispatch(fetchMoreResults()).then(() => (lastFetchCompleted = Date.now()));
    };
    return {
        ...controller,
        /**
         * The state of the `ResultList` controller.
         */
        get state() {
            const state = engine.state;
            return {
                /** The results of the last executed search. */
                results: state.search.results,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading: state.search.isLoading,
            };
        },
        /**
         * Using the same parameters as the last successful query, fetch another batch of results. Particularly useful for infinite scrolling, for example.
         */
        fetchMoreResults: triggerFetchMoreResult,
    };
}

const initialStateSchema$2 = new Schema({
    numberOfResults: new NumberValue({ min: 0 }),
});
function buildResultsPerPage(engine, props = {}) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const validated = validateInitialState(engine, initialStateSchema$2, props.initialState, buildResultsPerPage.name);
    const num = validated.numberOfResults;
    if (num !== undefined) {
        dispatch(registerNumberOfResults(num));
    }
    return {
        ...controller,
        /**
         * The state of the `ResultsPerPage` controller.
         */
        get state() {
            return {
                /** The number of results per page. */
                numberOfResults: engine.state.pagination.numberOfResults,
            };
        },
        /** Updates the number of results to request per page.
         * @param num The number of results.
         */
        set(num) {
            dispatch(updateNumberOfResults(num));
            dispatch(executeSearch(logPagerResize()));
        },
        /** Checks whether the number of results per page is equal to the specified number.
         * @param num The number of results.
         * @returns `true` if the number of results is equal to the passed value, and `false` otherwise.
         */
        isSetTo(num) {
            return num === this.state.numberOfResults;
        },
    };
}

/**
 * Log searchbox submit
 */
const logSearchboxSubmit = makeAnalyticsAction('analytics/searchbox/submit', AnalyticsType.Search, (client) => client.logSearchboxSubmit());

const defaultSearchBoxOptions = {
    enableQuerySyntax: false,
    numberOfSuggestions: 5,
};
const openCloseDelimitersDefinition = {
    open: new StringValue(),
    close: new StringValue(),
};
const searchBoxOptionDefinitions = {
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    id: requiredNonEmptyString,
    /**
     * The number of query suggestions to request from Coveo ML (e.g., `3`).
     *
     * Using the value `0` disables the query suggest feature.
     *
     * @default 5
     */
    numberOfSuggestions: new NumberValue({ min: 0 }),
    /**
     * Whether to interpret advanced [Coveo Cloud query syntax](https://docs.coveo.com/en/1814/searching-with-coveo/search-prefixes-and-operators) in the query.
     *
     * @default false
     */
    enableQuerySyntax: new BooleanValue(),
    highlightOptions: new RecordValue({
        values: {
            notMatchDelimiters: new RecordValue({
                values: openCloseDelimitersDefinition,
            }),
            exactMatchDelimiters: new RecordValue({
                values: openCloseDelimitersDefinition,
            }),
            correctionDelimiters: new RecordValue({
                values: openCloseDelimitersDefinition,
            }),
        },
    }),
};
const searchBoxOptionsSchema = new Schema(searchBoxOptionDefinitions);

const logQuerySuggestionClick = ({ id, suggestion, }) => makeAnalyticsAction('analytics/querySuggest', AnalyticsType.Search, (client, state) => {
    const querySuggest = state.querySuggest && state.querySuggest[id];
    if (querySuggest !== null && querySuggest !== undefined) {
        const suggestions = querySuggest.completions.map((completion) => completion.expression);
        const payload = {
            suggestionRanking: suggestions.indexOf(suggestion),
            partialQuery: querySuggest.q,
            partialQueries: querySuggest.partialQueries,
            suggestions,
        };
        return client.logOmniboxAnalytics(payload);
    }
    return;
})();

function isEmptyString(str) {
    return str === '';
}
/**
 * Highlight the passed string using specified highlights.
 */
function highlightString(params) {
    if (isEmptyString(params.openingDelimiter) ||
        isEmptyString(params.closingDelimiter)) {
        throw Error('delimiters should be a non-empty string');
    }
    if (isNullOrUndefined(params.content) || isEmptyString(params.content)) {
        return params.content;
    }
    const maxIndex = params.content.length;
    let highlighted = '';
    let last = 0;
    for (let i = 0; i < params.highlights.length; i++) {
        const highlight = params.highlights[i];
        const start = highlight.offset;
        const end = start + highlight.length;
        if (end > maxIndex) {
            break;
        }
        highlighted += params.content.slice(last, start);
        highlighted += params.openingDelimiter;
        highlighted += params.content.slice(start, end);
        highlighted += params.closingDelimiter;
        last = end;
    }
    if (last !== maxIndex) {
        highlighted += params.content.slice(last);
    }
    return highlighted;
}
/**
 * Highlight a suggestion with the given delimiters.
 * @param suggestion The suggestion to highlight
 * @param options The object contaning the delimiters used
 */
function getHighlightedSuggestion(suggestion, options) {
    suggestion = escape(suggestion);
    return suggestion.replace(/\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g, (part, notMatched, matched, corrected) => {
        if (notMatched) {
            return suggestionWithDelimiters(notMatched, options.notMatchDelimiters);
        }
        if (matched) {
            return suggestionWithDelimiters(matched, options.exactMatchDelimiters);
        }
        if (corrected) {
            return suggestionWithDelimiters(corrected, options.correctionDelimiters);
        }
        return part;
    });
}
function suggestionWithDelimiters(suggestion, delimiters) {
    if (delimiters) {
        return delimiters.open + suggestion + delimiters.close;
    }
    return suggestion;
}
/**
 * Escapes a string. For more information, refer to {@link https://underscorejs.org/#escape}
 *
 * @param str The string to escape
 */
function escape(str) {
    return str
        .replace(/&/g, '&amp')
        .replace(/</g, '&lt')
        .replace(/>/g, '&gt')
        .replace(/"/g, '&quot')
        .replace(/`/g, '&#96')
        .replace(/'/g, '&#x27');
}

var highlight = /*#__PURE__*/Object.freeze({
	__proto__: null,
	highlightString: highlightString,
	getHighlightedSuggestion: getHighlightedSuggestion,
	escape: escape
});

function buildSearchBox(engine, props = {}) {
    var _a, _b;
    const controller = buildController(engine);
    const { dispatch } = engine;
    const id = ((_a = props.options) === null || _a === void 0 ? void 0 : _a.id) || randomID('search_box');
    const options = {
        id,
        highlightOptions: { ...(_b = props.options) === null || _b === void 0 ? void 0 : _b.highlightOptions },
        ...defaultSearchBoxOptions,
        ...props.options,
    };
    validateOptions(engine, searchBoxOptionsSchema, options, buildSearchBox.name);
    dispatch(registerQuerySetQuery({ id, query: '' }));
    dispatch(registerQuerySuggest({
        id,
        q: engine.state.query.q,
        count: options.numberOfSuggestions,
    }));
    const getValue = () => engine.state.querySet[options.id];
    const performSearch = (analytics) => {
        const { enableQuerySyntax } = options;
        dispatch(updateQuery({ q: getValue(), enableQuerySyntax }));
        dispatch(updatePage(1));
        dispatch(executeSearch(analytics));
    };
    return {
        ...controller,
        /**
         * Updates the search box text value and shows the suggestions for that value.
         * @param value  The string value to update the search box with.
         */
        updateText(value) {
            dispatch(updateQuerySetQuery({ id, query: value }));
            this.showSuggestions();
        },
        /**
         * Clears the search box text and the suggestions.
         */
        clear() {
            dispatch(updateQuerySetQuery({ id, query: '' }));
            dispatch(clearQuerySuggest({ id }));
        },
        /**
         * Clears the suggestions.
         */
        hideSuggestions() {
            dispatch(clearQuerySuggestCompletions({ id }));
        },
        /**
         * Shows the suggestions for the current search box value.
         */
        showSuggestions() {
            if (options.numberOfSuggestions) {
                dispatch(fetchQuerySuggestions({ id }));
            }
        },
        /**
         * Selects a suggestion and calls `submit`.
         * @param value The string value of the suggestion to select
         */
        selectSuggestion(value) {
            dispatch(selectQuerySuggestion({ id, expression: value }));
            performSearch(logQuerySuggestionClick({ id, suggestion: value }));
        },
        /**
         * Triggers a search query.
         */
        submit() {
            performSearch(logSearchboxSubmit());
        },
        /**
         * @returns The state of the `SearchBox` controller.
         */
        get state() {
            const state = engine.state;
            const querySuggestState = state.querySuggest[options.id];
            const suggestions = getSuggestions(querySuggestState, options.highlightOptions);
            return {
                value: getValue(),
                suggestions,
                isLoading: state.search.isLoading,
            };
        },
    };
}
function getSuggestions(state, highlightOptions) {
    if (!state) {
        return [];
    }
    return state.completions.map((completion) => ({
        highlightedValue: getHighlightedSuggestion(completion.highlighted, highlightOptions),
        rawValue: completion.expression,
    }));
}

/**
 * Log results sort
 */
const logResultsSort = makeAnalyticsAction('analytics/sort/results', AnalyticsType.Search, (client, state) => client.logResultsSort({
    resultsSortBy: state.sortCriteria || getSortCriteriaInitialState(),
}));

const criterionDefinition$1 = new RecordValue({
    values: {
        by: new EnumValue({ enum: exports.SortBy, required: true }),
        order: new EnumValue({ enum: exports.SortOrder }),
        field: new StringValue(),
    },
});
function validateSortInitialState(engine, state) {
    if (!state) {
        return;
    }
    const schema = new Schema({
        criterion: new ArrayValue({ each: criterionDefinition$1 }),
    });
    const criterion = getCriterionAsArray(state);
    const initialState = { ...state, criterion };
    validateInitialState(engine, schema, initialState, buildSort.name);
}
function getCriterionAsArray(state) {
    if (!state.criterion) {
        return [];
    }
    return isArray(state.criterion) ? state.criterion : [state.criterion];
}
function buildSort(engine, props = {}) {
    var _a;
    const controller = buildController(engine);
    const { dispatch } = engine;
    validateSortInitialState(engine, props.initialState);
    const criterion = (_a = props.initialState) === null || _a === void 0 ? void 0 : _a.criterion;
    const search = () => dispatch(executeSearch(logResultsSort()));
    if (criterion) {
        dispatch(registerSortCriterion(criterion));
    }
    return {
        ...controller,
        /**
         * Updates the sort criterion and executes a new search.
         * @param criterion The new sort criterion.
         */
        sortBy(criterion) {
            dispatch(updateSortCriterion(criterion));
            dispatch(updatePage(1));
            search();
        },
        /**
         * Checks whether the specified sort criterion matches the value in state.
         * @param criterion The criterion to compare.
         * @returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
         */
        isSortedBy(criterion) {
            return this.state.sortCriteria === buildCriterionExpression(criterion);
        },
        /** The state of the `Sort` controller. */
        get state() {
            return {
                /**
                 * The sort criteria associated with this `Sort` controller.
                 */
                sortCriteria: engine.state.sortCriteria,
            };
        },
    };
}

const validateEvent = (p) => validatePayload(p, {
    evt: requiredNonEmptyString,
    type: new StringValue({ required: false, emptyAllowed: false }),
});
/**
 * Logs a search event.
 * @param p (SearchEventPayload) The search event payload.
 */
const logSearchEvent = (p) => makeAnalyticsAction('analytics/generic/search', AnalyticsType.Search, (client) => {
    validateEvent(p);
    const { evt, meta } = p;
    return client.logSearchEvent(evt, meta);
})();
/**
 * Logs a click event.
 * @param p (ClickEventPayload) The click event payload.
 */
const logClickEvent = (p) => makeAnalyticsAction('analytics/generic/click', AnalyticsType.Click, (client, state) => {
    validateResultPayload(p.result);
    validateEvent(p);
    return client.logClickEvent(p.evt, partialDocumentInformation(p.result, state), documentIdentifier(p.result));
})();
/**
 * Logs a custom event.
 * @param p (CustomEventPayload) The custom event payload.
 */
const logCustomEvent = (p) => makeAnalyticsAction('analytics/generic/custom', AnalyticsType.Custom, (client) => {
    validateEvent(p);
    return client.logCustomEventWithType(p.evt, p.type, p.meta);
})();
/**
 * Logs an interface load event.
 */
const logInterfaceLoad = makeAnalyticsAction('analytics/interface/load', AnalyticsType.Search, (client) => client.logInterfaceLoad());
/**
 * Logs an interface change event.
 */
const logInterfaceChange = makeAnalyticsAction('analytics/interface/change', AnalyticsType.Search, (client, state) => {
    var _a;
    return client.logInterfaceChange({
        interfaceChangeTo: ((_a = state.advancedSearchQueries) === null || _a === void 0 ? void 0 : _a.cq) ||
            getAdvancedSearchQueriesInitialState().cq,
    });
});

const optionsSchema$3 = new Schema({
    expression: new StringValue(),
});
const initialStateSchema$3 = new Schema({
    isActive: new BooleanValue(),
});
function buildTab(engine, props) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const options = validateOptions(engine, optionsSchema$3, props.options, buildTab.name);
    const initialState = validateInitialState(engine, initialStateSchema$3, props.initialState, buildTab.name);
    if (initialState.isActive) {
        dispatch(updateAdvancedSearchQueries({ cq: options.expression }));
    }
    return {
        ...controller,
        /**
         * Activates the tab.
         */
        select() {
            dispatch(updateAdvancedSearchQueries({ cq: options.expression }));
            dispatch(executeSearch(logInterfaceChange()));
        },
        /**
         * The state of the `Tab` controller.
         */
        get state() {
            const isActive = engine.state.advancedSearchQueries.cq === options.expression;
            return {
                /** `true` if tab is selected; `false` otherwise. */
                isActive,
            };
        },
    };
}

function buildFacetManager(engine) {
    const controller = buildController(engine);
    return {
        ...controller,
        /** Sorts the facets to match the order in the most recent search response.
         * @param FacetManagerPayload[] An array of facet payloads to sort.
         * @returns FacetManagerPayload[].
         */
        sort(facets) {
            return sortFacets(facets, this.state.facetIds);
        },
        /** @returns The state of the `FacetManager` controller. */
        get state() {
            const facets = engine.state.search.response.facets;
            const facetIds = facets.map((f) => f.facetId);
            return { facetIds };
        },
    };
}

function isNumericFacetResponse(state, response) {
    return !!response && response.facetId in state.numericFacetSet;
}
const numericFacetResponseSelector = (state, facetId) => {
    const response = baseFacetResponseSelector(state, facetId);
    if (isNumericFacetResponse(state, response)) {
        return response;
    }
    return undefined;
};
const numericFacetSelectedValuesSelector = (state, facetId) => {
    const facetResponse = numericFacetResponseSelector(state, facetId);
    if (!facetResponse) {
        return [];
    }
    return facetResponse.values.filter((value) => value.state === 'selected');
};

function isDateFacetResponse(state, response) {
    return !!response && response.facetId in state.dateFacetSet;
}
const dateFacetResponseSelector = (state, facetId) => {
    const response = baseFacetResponseSelector(state, facetId);
    if (isDateFacetResponse(state, response)) {
        return response;
    }
    return undefined;
};
const dateFacetSelectedValuesSelector = (state, facetId) => {
    const facetResponse = dateFacetResponseSelector(state, facetId);
    if (!facetResponse) {
        return [];
    }
    return facetResponse.values.filter((value) => value.state === 'selected');
};

/**
 * Logs clear all breadcrumbs event e.g. when a user click to remove all filters at once
 */
const logClearBreadcrumbs = () => makeAnalyticsAction('analytics/facet/deselectAllFacets', AnalyticsType.Search, (client) => {
    return client.logBreadcrumbResetAll();
})();

const categoryFacetBreadcrumbPayloadDefinition = {
    categoryFacetId: facetIdDefinition,
    categoryFacetPath: new ArrayValue({
        required: true,
        each: requiredNonEmptyString,
    }),
};
const getCategoryFacetMetadata = (state, { categoryFacetId, categoryFacetPath }) => {
    const facet = state.categoryFacetSet[categoryFacetId];
    const categoryFacetField = facet === null || facet === void 0 ? void 0 : facet.request.field;
    const categoryFacetTitle = `${categoryFacetField}_${categoryFacetId}`;
    return {
        categoryFacetId,
        categoryFacetPath,
        categoryFacetField,
        categoryFacetTitle,
    };
};
/**
 * Logs a category facet breadcrumb event.
 * @param payload (CategoryFacetBreadcrumbPayload) Object specifying the target facet and path.
 */
const logCategoryFacetBreadcrumb = (payload) => makeAnalyticsAction('analytics/categoryFacet/breadcrumb', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, categoryFacetBreadcrumbPayloadDefinition);
    const facetState = buildFacetStateMetadata(getStateNeededForFacetMetadata(state));
    return client.logBreadcrumbFacet(getCategoryFacetMetadata(state, payload), facetState);
})();

const getRangeFacetMetadata = (state, { facetId, selection }) => {
    const facet = state.dateFacetSet[facetId] || state.numericFacetSet[facetId];
    const facetField = facet.field;
    const facetTitle = `${facet.field}_${facetId}`;
    return {
        facetId,
        facetField,
        facetTitle,
        facetRangeEndInclusive: selection.endInclusive,
        facetRangeEnd: `${selection.end}`,
        facetRangeStart: `${selection.start}`,
    };
};
/**
 * Logs a range facet breadcrumb event.
 * @param payload (RangeFacetSelectionPayload) Object specifying the target facet and selection.
 */
const logRangeFacetBreadcrumb = (payload) => makeAnalyticsAction('analytics/rangeFacet/breadcrumb', AnalyticsType.Search, (client, state) => {
    validatePayload(payload, rangeFacetSelectionPayloadDefinition(payload.selection));
    const metadata = getRangeFacetMetadata(state, payload);
    const facetState = buildFacetStateMetadata(getStateNeededForFacetMetadata(state));
    return client.logBreadcrumbFacet(metadata, facetState);
})();

/**
 * Logs a numeric facet breadcrumb event.
 */
const logNumericFacetBreadcrumb = logRangeFacetBreadcrumb;

/**
 * Logs a date facet breadcrumb event.
 */
const logDateFacetBreadcrumb = logRangeFacetBreadcrumb;

const buildBreadcrumbManager = (engine) => {
    const controller = buildController(engine);
    const { dispatch } = engine;
    function getBreadcrumbs(facetSet, executeToggleSelect, facetValuesSelector) {
        return Object.keys(facetSet)
            .map((facetId) => {
            const values = facetValuesSelector(engine.state, facetId).map((selection) => ({
                value: selection,
                deselect: () => executeToggleSelect({ facetId, selection }),
            }));
            return {
                field: facetSet[facetId].field,
                values,
            };
        })
            .filter((breadcrumb) => breadcrumb.values.length);
    }
    function getFacetBreadcrumbs() {
        return getBreadcrumbs(engine.state.facetSet, ({ facetId, selection }) => {
            const analyticsAction = logFacetBreadcrumb({
                facetId: facetId,
                facetValue: selection.value,
            });
            dispatch(toggleSelectFacetValue({ facetId, selection }));
            dispatch(updateFreezeCurrentValues({ facetId, freezeCurrentValues: false }));
            dispatch(executeSearch(analyticsAction));
        }, facetResponseSelectedValuesSelector);
    }
    function getNumericFacetBreadcrumbs() {
        return getBreadcrumbs(engine.state.numericFacetSet, (payload) => {
            dispatch(toggleSelectNumericFacetValue(payload));
            dispatch(executeSearch(logNumericFacetBreadcrumb(payload)));
        }, numericFacetSelectedValuesSelector);
    }
    function getDateFacetBreadcrumbs() {
        return getBreadcrumbs(engine.state.dateFacetSet, (payload) => {
            dispatch(toggleSelectDateFacetValue(payload));
            dispatch(executeSearch(logDateFacetBreadcrumb(payload)));
        }, dateFacetSelectedValuesSelector);
    }
    function buildCategoryFacetBreadcrumb(facetId) {
        const path = categoryFacetSelectedValuesSelector(engine.state, facetId);
        return {
            field: engine.state.categoryFacetSet[facetId].request.field,
            path,
            deselect: () => {
                dispatch(deselectAllCategoryFacetValues(facetId));
                dispatch(executeSearch(logCategoryFacetBreadcrumb({
                    categoryFacetPath: path.map((categoryFacetValue) => categoryFacetValue.value),
                    categoryFacetId: facetId,
                })));
            },
        };
    }
    function getCategoryFacetBreadcrumbs() {
        return Object.keys(engine.state.categoryFacetSet)
            .map(buildCategoryFacetBreadcrumb)
            .filter((breadcrumb) => breadcrumb.path.length);
    }
    function hasBreadcrumbs() {
        return !![
            ...getFacetBreadcrumbs(),
            ...getNumericFacetBreadcrumbs(),
            ...getDateFacetBreadcrumbs(),
            ...getCategoryFacetBreadcrumbs(),
        ].length;
    }
    return {
        ...controller,
        /**
         * The state of the `BreadcrumbManager` controller.
         */
        get state() {
            return {
                /**
                 * The list of specific facet breadcrumbs.
                 */
                facetBreadcrumbs: getFacetBreadcrumbs(),
                /**
                 * The list of category facet breadcrumbs.
                 */
                categoryFacetBreadcrumbs: getCategoryFacetBreadcrumbs(),
                /**
                 * The list of numeric facet breadcrumbs.
                 */
                numericFacetBreadcrumbs: getNumericFacetBreadcrumbs(),
                /**
                 * The list of date facet breadcrumbs.
                 */
                dateFacetBreadcrumbs: getDateFacetBreadcrumbs(),
                /**
                 * `true` if there are any available breadcrumbs (i.e., if there are any active facet values), and `false` otherwise.
                 */
                hasBreadcrumbs: hasBreadcrumbs(),
            };
        },
        /**
         * Deselects all facet values.
         */
        deselectAll: () => {
            dispatch(deselectAllFacets());
            dispatch(executeSearch(logClearBreadcrumbs()));
        },
        /**
         * Deselects a facet breadcrumb value or category facet breadcrumb.
         * @param value The facet breadcrumb value or a category facet breadcrumb to deselect.
         */
        deselectBreadcrumb(value) {
            value.deselect();
        },
    };
};

const optionsSchema$4 = new Schema({
    /**
     * The Recommendation identifier used by the Coveo platform to retrieve recommended documents.
     * If not provided, will use default value of `Recommendation`.
     */
    id: new StringValue({
        emptyAllowed: true,
        required: false,
        default: '',
    }),
});
function buildRecommendationList(engine, props = {}) {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const options = validateOptions(engine, optionsSchema$4, props.options, buildRecommendationList.name);
    if (options.id !== '') {
        dispatch(setRecommendationId({ id: options.id }));
    }
    return {
        ...controller,
        /**
         * Gets new recommendations.
         */
        refresh() {
            dispatch(getRecommendations());
        },
        /**
         * The state of the `Recommendation` controller.
         */
        get state() {
            const state = engine.state;
            return {
                /** The recommendations based on the last executed query. */
                recommendations: state.recommendation.recommendations,
                /** The current error for the last executed query, or `null` if none is present. */
                error: state.recommendation.error,
                /** `true` if a search is in progress and `false` otherwise. */
                isLoading: state.recommendation.isLoading,
            };
        },
    };
}

const standaloneSearchBoxSchema = new Schema({
    ...searchBoxOptionDefinitions,
    /**
     * The default Url the user should be redirected to, when a query is submitted.
     * If a query pipeline redirect is triggered, it will redirect to that Url instead.
     */
    redirectionUrl: new StringValue({
        required: true,
        emptyAllowed: false,
        url: true,
    }),
});

function buildStandaloneSearchBox(engine, props) {
    const { dispatch } = engine;
    const id = props.options.id || randomID('standalone_search_box');
    const options = {
        id,
        highlightOptions: { ...props.options.highlightOptions },
        ...defaultSearchBoxOptions,
        ...props.options,
    };
    validateOptions(engine, standaloneSearchBoxSchema, options, buildStandaloneSearchBox.name);
    const searchBox = buildSearchBox(engine, { options });
    return {
        ...searchBox,
        /**
         * Selects a suggestion and calls `submit`.
         * @param value The string value of the suggestion to select
         */
        selectSuggestion(value) {
            dispatch(selectQuerySuggestion({ id, expression: value }));
            this.submit();
        },
        /**
         * Triggers a redirection.
         */
        submit() {
            dispatch(updateQuery({
                q: this.state.value,
                enableQuerySyntax: options.enableQuerySyntax,
            }));
            dispatch(checkForRedirection({ defaultRedirectionUrl: options.redirectionUrl }));
        },
        /**
         * @returns The state of the `StandaloneSearchBox` controller.
         */
        get state() {
            const state = engine.state;
            return {
                ...searchBox.state,
                redirectTo: state.redirection.redirectTo,
            };
        },
    };
}

const baseProductRecommendationsOptionsSchema = {
    skus: new ArrayValue({
        required: false,
        each: new StringValue({ emptyAllowed: false }),
    }),
    maxNumberOfRecommendations: new NumberValue({
        required: false,
        max: 50,
        min: 1,
        default: 5,
    }),
};
const optionsSchema$5 = new Schema({
    id: new StringValue({
        required: true,
        emptyAllowed: false,
    }),
    ...baseProductRecommendationsOptionsSchema,
});
const buildBaseProductRecommendationsList = (engine, props = {}) => {
    const controller = buildController(engine);
    const { dispatch } = engine;
    const options = validateOptions(engine, optionsSchema$5, props.options, buildBaseProductRecommendationsList.name);
    dispatch(setProductRecommendationsRecommenderId({
        id: options.id,
    }));
    dispatch(setProductRecommendationsMaxNumberOfRecommendations({
        number: options.maxNumberOfRecommendations,
    }));
    if (options.skus) {
        dispatch(setProductRecommendationsSkus({
            skus: options.skus,
        }));
    }
    return {
        ...controller,
        setSkus(skus) {
            dispatch(setProductRecommendationsSkus({ skus: skus }));
        },
        refresh() {
            dispatch(getProductRecommendations());
        },
        get state() {
            const { skus, maxNumberOfRecommendations, recommendations, error, isLoading, } = engine.state.productRecommendations;
            return {
                skus,
                maxNumberOfRecommendations,
                recommendations,
                error,
                isLoading,
            };
        },
    };
};

const optionsSchema$6 = new Schema({
    sku: new StringValue({ required: true, emptyAllowed: false }),
    maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
});
const buildFrequentlyBoughtTogetherList = (engine, props) => {
    const options = validateOptions(engine, optionsSchema$6, props.options, buildFrequentlyBoughtTogetherList.name);
    const controller = buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            maxNumberOfRecommendations: options.maxNumberOfRecommendations,
            skus: [options.sku],
            id: 'frequentBought',
        },
    });
    const { setSkus, ...rest } = controller;
    return {
        ...rest,
        setSku(sku) {
            setSkus([sku]);
        },
        get state() {
            const { skus, ...rest } = controller.state;
            return {
                ...rest,
                sku: skus[0],
            };
        },
    };
};

const optionsSchema$7 = new Schema({
    ...baseProductRecommendationsOptionsSchema,
});
const buildCartRecommendationsList = (engine, props) => {
    const options = validateOptions(engine, optionsSchema$7, props.options, buildCartRecommendationsList.name);
    return buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            ...options,
            id: 'cart',
        },
    });
};

const optionsSchema$8 = new Schema({
    ...baseProductRecommendationsOptionsSchema,
});
const buildFrequentlyViewedTogetherList = (engine, props) => {
    const options = validateOptions(engine, optionsSchema$8, props.options, buildFrequentlyViewedTogetherList.name);
    return buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            ...options,
            id: 'frequentViewed',
        },
    });
};

const optionsSchema$9 = new Schema({
    maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
});
const buildPopularBoughtRecommendationsList = (engine, props = {}) => {
    const options = validateOptions(engine, optionsSchema$9, props.options, buildPopularBoughtRecommendationsList.name);
    const controller = buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            ...options,
            id: 'popularBought',
        },
    });
    const { setSkus, ...rest } = controller;
    return {
        ...rest,
        get state() {
            const { skus, ...rest } = controller.state;
            return {
                ...rest,
            };
        },
    };
};

const optionsSchema$a = new Schema({
    maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
});
function buildPopularViewedRecommendationsList(engine, props = {}) {
    const options = validateOptions(engine, optionsSchema$a, props.options, buildPopularViewedRecommendationsList.name);
    const controller = buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            ...options,
            id: 'popularViewed',
        },
    });
    const { setSkus, ...rest } = controller;
    return {
        ...rest,
        get state() {
            const { skus, ...rest } = controller.state;
            return {
                ...rest,
            };
        },
    };
}

const optionsSchema$b = new Schema({
    maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
});
function buildUserInterestRecommendationsList(engine, props) {
    const options = validateOptions(engine, optionsSchema$b, props.options, buildUserInterestRecommendationsList.name);
    const controller = buildBaseProductRecommendationsList(engine, {
        ...props,
        options: {
            ...options,
            id: 'user',
        },
    });
    const { setSkus, ...rest } = controller;
    return {
        ...rest,
        get state() {
            const { skus, ...rest } = controller.state;
            return {
                ...rest,
            };
        },
    };
}

const initialStateSchema$4 = new Schema({
    parameters: new RecordValue({
        options: { required: true },
        values: searchParametersDefinition,
    }),
});
function buildSearchParameterManager(engine, props) {
    const { dispatch } = engine;
    const controller = buildController(engine);
    validateInitialState(engine, initialStateSchema$4, props.initialState, buildSearchParameterManager.name);
    dispatch(restoreSearchParameters(props.initialState.parameters));
    return {
        ...controller,
        get state() {
            const state = engine.state;
            const parameters = {
                ...getQ(state),
                ...getEnableQuerySyntax(state),
                ...getAq(state),
                ...getCq(state),
                ...getFirstResult(state),
                ...getNumberOfResults(state),
                ...getSortCriteria(state),
                ...getFacets$1(state),
                ...getCategoryFacets(state),
                ...getNumericFacets(state),
                ...getDateFacets(state),
                ...getDebug(state),
            };
            return { parameters };
        },
    };
}
function getQ(state) {
    if (state.query === undefined) {
        return {};
    }
    const q = state.query.q;
    const shouldInclude = q !== getQueryInitialState().q;
    return shouldInclude ? { q } : {};
}
function getEnableQuerySyntax(state) {
    if (state.query === undefined) {
        return {};
    }
    const enableQuerySyntax = state.query.enableQuerySyntax;
    const shouldInclude = enableQuerySyntax !== getQueryInitialState().enableQuerySyntax;
    return shouldInclude ? { enableQuerySyntax } : {};
}
function getAq(state) {
    if (state.advancedSearchQueries === undefined) {
        return {};
    }
    const aq = state.advancedSearchQueries.aq;
    const shouldInclude = aq !== getAdvancedSearchQueriesInitialState().aq;
    return shouldInclude ? { aq } : {};
}
function getCq(state) {
    if (state.advancedSearchQueries === undefined) {
        return {};
    }
    const cq = state.advancedSearchQueries.cq;
    const shouldInclude = cq !== getAdvancedSearchQueriesInitialState().cq;
    return shouldInclude ? { cq } : {};
}
function getFirstResult(state) {
    if (state.pagination === undefined) {
        return {};
    }
    const firstResult = state.pagination.firstResult;
    const shouldInclude = firstResult !== getPaginationInitialState().firstResult;
    return shouldInclude ? { firstResult } : {};
}
function getNumberOfResults(state) {
    if (state.pagination === undefined) {
        return {};
    }
    const numberOfResults = state.pagination.numberOfResults;
    const shouldInclude = numberOfResults !== getPaginationInitialState().numberOfResults;
    return shouldInclude ? { numberOfResults } : {};
}
function getSortCriteria(state) {
    if (state.sortCriteria === undefined) {
        return {};
    }
    const sortCriteria = state.sortCriteria;
    const shouldInclude = sortCriteria !== getSortCriteriaInitialState();
    return shouldInclude ? { sortCriteria } : {};
}
function getFacets$1(state) {
    if (state.facetSet === undefined) {
        return {};
    }
    const f = Object.entries(state.facetSet)
        .map(([facetId, request]) => {
        const selectedValues = getSelectedValues(request.currentValues);
        return selectedValues.length ? { [facetId]: selectedValues } : {};
    })
        .reduce((acc, obj) => ({ ...acc, ...obj }), {});
    return Object.keys(f).length ? { f } : {};
}
function getSelectedValues(values) {
    return values.filter((fv) => fv.state === 'selected').map((fv) => fv.value);
}
function getCategoryFacets(state) {
    if (state.categoryFacetSet === undefined) {
        return {};
    }
    const cf = Object.entries(state.categoryFacetSet)
        .map(([facetId, slice]) => {
        const { parents } = partitionIntoParentsAndValues(slice.request.currentValues);
        const selectedValues = parents.map((p) => p.value);
        return selectedValues.length ? { [facetId]: selectedValues } : {};
    })
        .reduce((acc, obj) => ({ ...acc, ...obj }), {});
    return Object.keys(cf).length ? { cf } : {};
}
function getNumericFacets(state) {
    if (state.numericFacetSet === undefined) {
        return {};
    }
    const nf = Object.entries(state.numericFacetSet)
        .map(([facetId, request]) => {
        const selectedRanges = getSelectedRanges(request.currentValues);
        return selectedRanges.length ? { [facetId]: selectedRanges } : {};
    })
        .reduce((acc, obj) => ({ ...acc, ...obj }), {});
    return Object.keys(nf).length ? { nf } : {};
}
function getDateFacets(state) {
    if (state.dateFacetSet === undefined) {
        return {};
    }
    const df = Object.entries(state.dateFacetSet)
        .map(([facetId, request]) => {
        const selectedRanges = getSelectedRanges(request.currentValues);
        return selectedRanges.length ? { [facetId]: selectedRanges } : {};
    })
        .reduce((acc, obj) => ({ ...acc, ...obj }), {});
    return Object.keys(df).length ? { df } : {};
}
function getSelectedRanges(ranges) {
    return ranges.filter((range) => range.state === 'selected');
}
function getDebug(state) {
    if (state.debug === undefined) {
        return {};
    }
    const debug = state.debug;
    const shouldInclude = debug !== getDebugInitialState();
    return shouldInclude ? { debug } : {};
}

const prioritySchema = new Schema({
    priority: new NumberValue({ required: false, default: 0, min: 0 }),
    fields: new ArrayValue({
        required: false,
        each: new StringValue({
            required: true,
            emptyAllowed: false,
        }),
    }),
});
/**
 * A manager in which result templates can be registered and selected based on a list of conditions and priority.
 * @param engine (HeadlessEngine) The `HeadlessEngine` instance of your application.
 * @returns (ResultTemplatesManager<Content, State>) A new result templates manager.
 */
function buildResultTemplatesManager(engine) {
    const templates = [];
    const validateTemplates = (templates) => {
        templates.forEach((template) => {
            prioritySchema.validate(template, 'Check the arguments of registerTemplates');
            const areConditionsValid = template.conditions.every((condition) => condition instanceof Function);
            if (!areConditionsValid) {
                throw new SchemaValidationError('Each result template conditions should be a function that takes a result as an argument and returns a boolean');
            }
        });
    };
    return {
        registerTemplates(...newTemplates) {
            const fields = [];
            try {
                validateTemplates(newTemplates);
            }
            catch (error) {
                engine.logger.error(error, 'Result template manager error');
                return;
            }
            newTemplates.forEach((template) => {
                const templatesWithDefault = {
                    ...template,
                    priority: template.priority || 0,
                    fields: template.fields || [],
                };
                templates.push(templatesWithDefault);
                fields.push(...templatesWithDefault.fields);
            });
            templates.sort((a, b) => b.priority - a.priority);
            fields.length && engine.dispatch(registerFieldsToInclude(fields));
        },
        selectTemplate(result) {
            const template = templates.find((template) => template.conditions.every((condition) => condition(result)));
            return template ? template.content : null;
        },
    };
}

/**
 * Extracts a property from a result object.
 * @param result (Result) The target result.
 * @param property (string) The property to extract.
 * @returns (unknown) The value of the specified property in the specified result, or null if the property does not exist.
 */
const getResultProperty = (result, property) => {
    if (property in result) {
        return result[property];
    }
    if (property in result.raw) {
        return result.raw[property];
    }
    return null;
};
/**
 * Creates a condition that verifies if the specified fields are defined.
 * @param fieldNames (string[]) A list of fields that must be defined.
 * @returns (ResultTemplateCondition) A function that takes a result and checks if every field in the specified list is defined.
 */
const fieldsMustBeDefined = (fieldNames) => {
    return (result) => {
        return fieldNames.every((fieldName) => result.raw[fieldName] !== undefined);
    };
};
/**
 * Creates a condition that verifies if the specified fields are not defined.
 * @param fieldNames (string[]) A list of fields that must not be defined.
 * @returns (ResultTemplateCondition) A function that takes a result and checks if every field in the specified list is not defined.
 */
const fieldsMustNotBeDefined = (fieldNames) => {
    return (result) => {
        return fieldNames.every((fieldName) => result.raw[fieldName] === undefined);
    };
};
/**
 * Creates a condition that verifies if a field's value contains any of the specified values.
 * @param fieldName (string) The name of the field to check.
 * @param valuesToMatch (string[]) A list of possible values to match.
 * @returns (ResultTemplateCondition) A function that takes a result and checks if the value for the specified field matches any value in the specified list.
 */
const fieldMustMatch = (fieldName, valuesToMatch) => {
    return (result) => {
        const fieldValues = getFieldValuesFromResult(fieldName, result);
        return valuesToMatch.some((valueToMatch) => fieldValues.some((fieldValue) => `${fieldValue}`.toLowerCase() === valueToMatch.toLowerCase()));
    };
};
/**
 * Creates a condition that verifies that a field's value does not contain any of the specified values.
 * @param fieldName (string) The name of the field to check.
 * @param blacklistedValues (string[]) A list of all disallowed values.
 * @returns (ResultTemplateCondition) A function that takes a result and checks that the value for the specified field does not match any value in the given list.
 */
const fieldMustNotMatch = (fieldName, blacklistedValues) => {
    return (result) => {
        const fieldValues = getFieldValuesFromResult(fieldName, result);
        return blacklistedValues.every((blacklistedValue) => fieldValues.every((fieldValue) => `${fieldValue}`.toLowerCase() !== blacklistedValue.toLowerCase()));
    };
};
const getFieldValuesFromResult = (fieldName, result) => {
    const rawValue = result.raw[fieldName];
    return isArray$1(rawValue) ? rawValue : [rawValue];
};

(function (AdvancedSearchQueriesActions) {
    AdvancedSearchQueriesActions.updateAdvancedSearchQueries = updateAdvancedSearchQueries;
})(exports.AdvancedSearchQueriesActions || (exports.AdvancedSearchQueriesActions = {}));
(function (CategoryFacetSetActions) {
    CategoryFacetSetActions.registerCategoryFacet = registerCategoryFacet;
    CategoryFacetSetActions.toggleSelectCategoryFacetValue = toggleSelectCategoryFacetValue;
    CategoryFacetSetActions.deselectAllCategoryFacetValues = deselectAllCategoryFacetValues;
    CategoryFacetSetActions.updateCategoryFacetNumberOfValues = updateCategoryFacetNumberOfValues;
    CategoryFacetSetActions.updateCategoryFacetSortCriterion = updateCategoryFacetSortCriterion;
})(exports.CategoryFacetSetActions || (exports.CategoryFacetSetActions = {}));
(function (FacetActions) {
    FacetActions.registerFacet = registerFacet;
    FacetActions.toggleSelectFacetValue = toggleSelectFacetValue;
    FacetActions.updateFacetIsFieldExpanded = updateFacetIsFieldExpanded;
    FacetActions.updateFacetNumberOfValues = updateFacetNumberOfValues;
    FacetActions.updateFacetSortCriterion = updateFacetSortCriterion;
    FacetActions.updateFreezeCurrentValues = updateFreezeCurrentValues;
    FacetActions.deselectAllFacetValues = deselectAllFacetValues;
})(exports.FacetActions || (exports.FacetActions = {}));
(function (ConfigurationActions) {
    ConfigurationActions.updateBasicConfiguration = updateBasicConfiguration;
    ConfigurationActions.updateSearchConfiguration = updateSearchConfiguration;
    ConfigurationActions.updateAnalyticsConfiguration = updateAnalyticsConfiguration;
    ConfigurationActions.renewAccessToken = renewAccessToken;
    ConfigurationActions.disableAnalytics = disableAnalytics;
    ConfigurationActions.enableAnalytics = enableAnalytics;
    ConfigurationActions.setOriginLevel2 = setOriginLevel2;
    ConfigurationActions.setOriginLevel3 = setOriginLevel3;
})(exports.ConfigurationActions || (exports.ConfigurationActions = {}));
(function (ContextActions) {
    ContextActions.setContext = setContext;
    ContextActions.addContext = addContext;
    ContextActions.removeContext = removeContext;
})(exports.ContextActions || (exports.ContextActions = {}));
(function (DateFacetActions) {
    DateFacetActions.registerDateFacet = registerDateFacet;
    DateFacetActions.toggleSelectDateFacetValue = toggleSelectDateFacetValue;
    DateFacetActions.updateDateFacetSortCriterion = updateDateFacetSortCriterion;
    DateFacetActions.deselectAllDateFacetValues = deselectAllDateFacetValues;
})(exports.DateFacetActions || (exports.DateFacetActions = {}));
(function (DidYouMeanActions) {
    DidYouMeanActions.enableDidYouMean = enableDidYouMean;
    DidYouMeanActions.applyDidYouMeanCorrection = applyDidYouMeanCorrection;
    DidYouMeanActions.disableDidYouMean = disableDidYouMean;
})(exports.DidYouMeanActions || (exports.DidYouMeanActions = {}));
(function (FieldActions) {
    FieldActions.registerFieldsToInclude = registerFieldsToInclude;
})(exports.FieldActions || (exports.FieldActions = {}));
(function (HistoryActions) {
    HistoryActions.snapshot = snapshot;
    HistoryActions.back = back;
    HistoryActions.change = change;
    HistoryActions.forward = forward;
})(exports.HistoryActions || (exports.HistoryActions = {}));
(function (NumericFacetActions) {
    NumericFacetActions.registerNumericFacet = registerNumericFacet;
    NumericFacetActions.deselectAllNumericFacetValues = deselectAllNumericFacetValues;
    NumericFacetActions.toggleSelectNumericFacetValue = toggleSelectNumericFacetValue;
    NumericFacetActions.updateNumericFacetSortCriterion = updateNumericFacetSortCriterion;
})(exports.NumericFacetActions || (exports.NumericFacetActions = {}));
(function (PaginationActions) {
    PaginationActions.registerNumberOfResults = registerNumberOfResults;
    PaginationActions.registerPage = registerPage;
    PaginationActions.nextPage = nextPage;
    PaginationActions.previousPage = previousPage;
    PaginationActions.updateNumberOfResults = updateNumberOfResults;
    PaginationActions.updatePage = updatePage;
})(exports.PaginationActions || (exports.PaginationActions = {}));
(function (PipelineActions) {
    PipelineActions.setPipeline = setPipeline;
})(exports.PipelineActions || (exports.PipelineActions = {}));
(function (QueryActions) {
    QueryActions.updateQuery = updateQuery;
})(exports.QueryActions || (exports.QueryActions = {}));
(function (QuerySetActions) {
    QuerySetActions.registerQuerySetQuery = registerQuerySetQuery;
    QuerySetActions.updateQuerySetQuery = updateQuerySetQuery;
})(exports.QuerySetActions || (exports.QuerySetActions = {}));
(function (QuerySuggestActions) {
    QuerySuggestActions.registerQuerySuggest = registerQuerySuggest;
    QuerySuggestActions.buildQuerySuggestRequest = buildQuerySuggestRequest;
    QuerySuggestActions.clearQuerySuggest = clearQuerySuggest;
    QuerySuggestActions.clearQuerySuggestCompletions = clearQuerySuggestCompletions;
    QuerySuggestActions.fetchQuerySuggestions = fetchQuerySuggestions;
    QuerySuggestActions.selectQuerySuggestion = selectQuerySuggestion;
    QuerySuggestActions.unregisterQuerySuggest = unregisterQuerySuggest;
})(exports.QuerySuggestActions || (exports.QuerySuggestActions = {}));
(function (RedirectionActions) {
    RedirectionActions.checkForRedirection = checkForRedirection;
    RedirectionActions.buildPlanRequest = buildPlanRequest;
})(exports.RedirectionActions || (exports.RedirectionActions = {}));
(function (SearchActions) {
    SearchActions.executeSearch = executeSearch;
    SearchActions.buildSearchRequest = buildSearchRequest;
    SearchActions.fetchMoreResults = fetchMoreResults;
})(exports.SearchActions || (exports.SearchActions = {}));
(function (SearchHubActions) {
    SearchHubActions.setSearchHub = setSearchHub;
})(exports.SearchHubActions || (exports.SearchHubActions = {}));
(function (SortCriterionActions) {
    SortCriterionActions.registerSortCriterion = registerSortCriterion;
    SortCriterionActions.updateSortCriterion = updateSortCriterion;
})(exports.SortCriterionActions || (exports.SortCriterionActions = {}));
(function (RecommendationActions) {
    RecommendationActions.buildRecommendationRequest = buildRecommendationRequest;
    RecommendationActions.getRecommendations = getRecommendations;
    RecommendationActions.setRecommendationId = setRecommendationId;
})(exports.RecommendationActions || (exports.RecommendationActions = {}));
(function (ProductRecommendationsActions) {
    ProductRecommendationsActions.setProductRecommendationsBrandFilter = setProductRecommendationsBrandFilter;
    ProductRecommendationsActions.buildProductRecommendationsRequest = buildProductRecommendationsRequest;
    ProductRecommendationsActions.getProductRecommendations = getProductRecommendations;
    ProductRecommendationsActions.setProductRecommendationsCategoryFilter = setProductRecommendationsCategoryFilter;
    ProductRecommendationsActions.setProductRecommendationsMaxNumberOfRecommendations = setProductRecommendationsMaxNumberOfRecommendations;
    ProductRecommendationsActions.setProductRecommendationsRecommenderId = setProductRecommendationsRecommenderId;
    ProductRecommendationsActions.setProductRecommendationsSkus = setProductRecommendationsSkus;
})(exports.ProductRecommendationsActions || (exports.ProductRecommendationsActions = {}));
(function (BreadcrumbActions) {
    BreadcrumbActions.deselectAllFacets = deselectAllFacets;
})(exports.BreadcrumbActions || (exports.BreadcrumbActions = {}));
(function (ResultTemplatesHelpers) {
    ResultTemplatesHelpers.getResultProperty = getResultProperty;
    ResultTemplatesHelpers.fieldsMustBeDefined = fieldsMustBeDefined;
    ResultTemplatesHelpers.fieldsMustNotBeDefined = fieldsMustNotBeDefined;
    ResultTemplatesHelpers.fieldMustMatch = fieldMustMatch;
    ResultTemplatesHelpers.fieldMustNotMatch = fieldMustNotMatch;
})(exports.ResultTemplatesHelpers || (exports.ResultTemplatesHelpers = {}));

/**
 * Logs a click event with an `actionCause` value of `documentOpen`.
 * @param result (Result) The result that was opened.
 */
const logDocumentOpen = (result) => makeAnalyticsAction('analytics/result/open', AnalyticsType.Click, (client, state) => {
    validateResultPayload(result);
    return client.logDocumentOpen(partialDocumentInformation(result, state), documentIdentifier(result));
})();

(function (AnalyticsActions) {
    AnalyticsActions.logInterfaceLoad = logInterfaceLoad;
    AnalyticsActions.logInterfaceChange = logInterfaceChange;
    AnalyticsActions.logClickEvent = logClickEvent;
    AnalyticsActions.logCustomEvent = logCustomEvent;
    AnalyticsActions.logSearchEvent = logSearchEvent;
})(exports.AnalyticsActions || (exports.AnalyticsActions = {}));
(function (DidYouMeanAnalyticsActions) {
    DidYouMeanAnalyticsActions.logDidYouMeanClick = logDidYouMeanClick;
    DidYouMeanAnalyticsActions.logDidYouMeanAutomatic = logDidYouMeanAutomatic;
})(exports.DidYouMeanAnalyticsActions || (exports.DidYouMeanAnalyticsActions = {}));
(function (FacetAnalyticsActions) {
    FacetAnalyticsActions.logFacetShowMore = logFacetShowMore;
    FacetAnalyticsActions.logFacetShowLess = logFacetShowLess;
    FacetAnalyticsActions.logFacetSelect = logFacetSelect;
    FacetAnalyticsActions.logFacetDeselect = logFacetDeselect;
    FacetAnalyticsActions.logFacetClearAll = logFacetClearAll;
    FacetAnalyticsActions.logFacetSearch = logFacetSearch;
    FacetAnalyticsActions.logFacetUpdateSort = logFacetUpdateSort;
    FacetAnalyticsActions.logFacetBreadcrumb = logFacetBreadcrumb;
})(exports.FacetAnalyticsActions || (exports.FacetAnalyticsActions = {}));
(function (FacetGenericAnalyticsActions) {
    FacetGenericAnalyticsActions.logClearBreadcrumbs = logClearBreadcrumbs;
})(exports.FacetGenericAnalyticsActions || (exports.FacetGenericAnalyticsActions = {}));
(function (DateFacetAnalyticsActions) {
    DateFacetAnalyticsActions.logDateFacetBreadcrumb = logDateFacetBreadcrumb;
})(exports.DateFacetAnalyticsActions || (exports.DateFacetAnalyticsActions = {}));
(function (NumericFacetAnalyticsActions) {
    NumericFacetAnalyticsActions.logNumericFacetBreadcrumb = logNumericFacetBreadcrumb;
})(exports.NumericFacetAnalyticsActions || (exports.NumericFacetAnalyticsActions = {}));
(function (CategoryFacetAnalyticsActions) {
    CategoryFacetAnalyticsActions.logCategoryFacetBreadcrumb = logCategoryFacetBreadcrumb;
})(exports.CategoryFacetAnalyticsActions || (exports.CategoryFacetAnalyticsActions = {}));
(function (HistoryAnalyticsActions) {
    HistoryAnalyticsActions.logNavigateForward = logNavigateForward;
    HistoryAnalyticsActions.logNavigateBackward = logNavigateBackward;
})(exports.HistoryAnalyticsActions || (exports.HistoryAnalyticsActions = {}));
(function (PaginationAnalyticsActions) {
    PaginationAnalyticsActions.logPageNext = logPageNext;
    PaginationAnalyticsActions.logPagePrevious = logPagePrevious;
    PaginationAnalyticsActions.logPageNumber = logPageNumber;
    PaginationAnalyticsActions.logPagerResize = logPagerResize;
})(exports.PaginationAnalyticsActions || (exports.PaginationAnalyticsActions = {}));
(function (ProductRecommendationAnalyticsActions) {
    ProductRecommendationAnalyticsActions.logProductRecommendations = logProductRecommendations;
})(exports.ProductRecommendationAnalyticsActions || (exports.ProductRecommendationAnalyticsActions = {}));
(function (QueryAnalyticsActions) {
    QueryAnalyticsActions.logSearchboxSubmit = logSearchboxSubmit;
})(exports.QueryAnalyticsActions || (exports.QueryAnalyticsActions = {}));
(function (QuerySuggestAnalyticsActions) {
    QuerySuggestAnalyticsActions.logQuerySuggestionClick = logQuerySuggestionClick;
})(exports.QuerySuggestAnalyticsActions || (exports.QuerySuggestAnalyticsActions = {}));
(function (RecommendationAnalyticsActions) {
    RecommendationAnalyticsActions.logRecommendationUpdate = logRecommendationUpdate;
})(exports.RecommendationAnalyticsActions || (exports.RecommendationAnalyticsActions = {}));
(function (RedirectionAnalyticsActions) {
    RedirectionAnalyticsActions.logTriggerRedirect = logTriggerRedirect;
})(exports.RedirectionAnalyticsActions || (exports.RedirectionAnalyticsActions = {}));
(function (ResultAnalyticsActions) {
    ResultAnalyticsActions.logDocumentOpen = logDocumentOpen;
})(exports.ResultAnalyticsActions || (exports.ResultAnalyticsActions = {}));
(function (SortCriterionAnalyticsActions) {
    SortCriterionAnalyticsActions.logResultsSort = logResultsSort;
})(exports.SortCriterionAnalyticsActions || (exports.SortCriterionAnalyticsActions = {}));
(function (SearchAnalyticsActions) {
    SearchAnalyticsActions.logFetchMoreResults = logFetchMoreResults;
    SearchAnalyticsActions.logQueryError = logQueryError;
})(exports.SearchAnalyticsActions || (exports.SearchAnalyticsActions = {}));

function createMockState(config = {}) {
    return {
        configuration: getConfigurationInitialState(),
        advancedSearchQueries: getAdvancedSearchQueriesInitialState(),
        facetSet: getFacetSetInitialState(),
        dateFacetSet: getDateFacetSetInitialState(),
        numericFacetSet: getNumericFacetSetInitialState(),
        categoryFacetSet: getCategoryFacetSetInitialState(),
        facetSearchSet: getFacetSearchSetInitialState(),
        categoryFacetSearchSet: getCategoryFacetSearchSetInitialState(),
        facetOptions: getFacetOptionsInitialState(),
        pagination: getPaginationInitialState(),
        query: getQueryInitialState(),
        querySet: getQuerySetInitialState(),
        querySuggest: {},
        redirection: getRedirectionInitialState(),
        search: getSearchInitialState(),
        sortCriteria: getSortCriteriaInitialState(),
        context: getContextInitialState(),
        didYouMean: getDidYouMeanInitialState(),
        fields: getFieldsInitialState(),
        history: makeHistory(getHistoryInitialState()),
        pipeline: getPipelineInitialState(),
        facetOrder: getFacetOrderInitialState(),
        searchHub: getSearchHubInitialState(),
        debug: getDebugInitialState(),
        ...config,
    };
}

function createMockRecommendationState(config = {}) {
    return {
        configuration: getConfigurationInitialState(),
        advancedSearchQueries: getAdvancedSearchQueriesInitialState(),
        context: getContextInitialState(),
        fields: getFieldsInitialState(),
        searchHub: getSearchHubInitialState(),
        pipeline: getPipelineInitialState(),
        recommendation: getRecommendationInitialState(),
        debug: getDebugInitialState(),
        ...config,
    };
}

function buildMockProductRecommendationsState(config = {}) {
    return {
        configuration: getConfigurationInitialState(),
        context: getContextInitialState(),
        searchHub: getSearchHubInitialState(),
        productRecommendations: getProductRecommendationsInitialState(),
        ...config,
    };
}

const mockRenewAccessToken = async () => '';
function buildMockSearchAppEngine(config = {}) {
    return buildMockEngine(config, createMockState);
}
function buildMockRecommendationAppEngine(config = {}) {
    return buildMockEngine(config, createMockRecommendationState);
}
function buildMockProductRecommendationsAppEngine(config = {}) {
    return buildMockEngine(config, buildMockProductRecommendationsState);
}
function buildMockEngine(config = {}, mockState) {
    const logger = pino({ level: 'silent' });
    const storeConfiguration = configureMockStore(logger);
    const store = storeConfiguration(config.state || mockState());
    const unsubscribe = () => { };
    return {
        mockStore: store,
        store,
        state: mockState(),
        subscribe: jest.fn(() => unsubscribe),
        get dispatch() {
            return store.dispatch;
        },
        get actions() {
            return store.getActions();
        },
        findAsyncAction(actionCreator) {
            const action = this.actions.find((a) => a.type === actionCreator.type);
            return isAsyncAction(action) ? action : undefined;
        },
        ...config,
        renewAccessToken: mockRenewAccessToken,
        logger,
    };
}
const configureMockStore = (logger) => {
    return configureStore$2([
        logActionErrorMiddleware(logger),
        analyticsMiddleware,
        thunk.withExtraArgument({
            searchAPIClient: new SearchAPIClient({
                logger,
                renewAccessToken: mockRenewAccessToken,
                preprocessRequest: NoopPreprocessRequestMiddleware,
                postprocessSearchResponseMiddleware: NoopPostprocessSearchResponseMiddleware,
                postprocessQuerySuggestResponseMiddleware: NoopPostprocessQuerySuggestResponseMiddleware,
                postprocessFacetSearchResponseMiddleware: NoopPostprocessFacetSearchResponseMiddleware,
            }),
            validatePayload: validatePayloadAndThrow,
            logger,
        }),
        ...getDefaultMiddleware(),
        logActionMiddleware(logger),
    ]);
};
function isAsyncAction(action) {
    return action ? 'meta' in action : false;
}

function buildMockRaw(config = {}) {
    return {
        urihash: '',
        parents: '',
        sfid: '',
        sfparentid: '',
        sfinsertedbyid: '',
        documenttype: '',
        sfcreatedbyid: '',
        permanentid: '',
        date: 0,
        objecttype: '',
        sourcetype: '',
        sftitle: '',
        size: 0,
        sffeeditemid: '',
        clickableuri: '',
        sfcreatedby: '',
        source: '',
        collection: '',
        connectortype: '',
        filetype: '',
        sfcreatedbyname: '',
        sflikecount: 0,
        language: [],
        ...config,
    };
}

function buildMockResult(config = {}) {
    return {
        title: '',
        uri: '',
        printableUri: '',
        clickUri: '',
        uniqueId: '',
        excerpt: '',
        firstSentences: '',
        summary: null,
        flags: '',
        hasHtmlVersion: false,
        score: 0,
        percentScore: 0,
        rankingInfo: null,
        isTopResult: false,
        isRecommendation: false,
        titleHighlights: [],
        firstSentencesHighlights: [],
        excerptHighlights: [],
        printableUriHighlights: [],
        summaryHighlights: [],
        absentTerms: [],
        raw: buildMockRaw(),
        ...config,
    };
}

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	buildMockSearchAppEngine: buildMockSearchAppEngine,
	buildMockRecommendationAppEngine: buildMockRecommendationAppEngine,
	buildMockProductRecommendationsAppEngine: buildMockProductRecommendationsAppEngine,
	createMockState: createMockState,
	buildMockResult: buildMockResult,
	buildMockRaw: buildMockRaw
});

const delimiter = '&';
const equal = '=';
const rangeDelimiter = '..';
function buildSearchParameterSerializer() {
    return { serialize, deserialize };
}
function serialize(obj) {
    return Object.entries(obj)
        .map(serializePair)
        .filter((str) => str)
        .join(delimiter);
}
function serializePair(pair) {
    const [key, val] = pair;
    if (!isValidKey(key)) {
        return '';
    }
    if (key === 'f' || key === 'cf') {
        return isFacetObject(val) ? serializeFacets(key, val) : '';
    }
    if (key === 'nf' || key === 'df') {
        return isRangeFacetObject(val) ? serializeRangeFacets(key, val) : '';
    }
    return `${key}${equal}${val}`;
}
function isFacetObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    const isValidValue = (v) => typeof v === 'string';
    return allEntriesAreValid(obj, isValidValue);
}
function isRangeFacetObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    const isRangeValue = (v) => isObject(v) && 'start' in v && 'end' in v;
    return allEntriesAreValid(obj, isRangeValue);
}
function isObject(obj) {
    return obj && typeof obj === 'object' ? true : false;
}
function allEntriesAreValid(obj, isValidValue) {
    const invalidEntries = Object.entries(obj).filter((entry) => {
        const values = entry[1];
        return !Array.isArray(values) || !values.every(isValidValue);
    });
    return invalidEntries.length === 0;
}
function serializeFacets(key, facets) {
    return Object.entries(facets)
        .map(([facetId, values]) => `${key}[${facetId}]${equal}${values.join(',')}`)
        .join(delimiter);
}
function serializeRangeFacets(key, facets) {
    return Object.entries(facets)
        .map(([facetId, ranges]) => {
        const value = ranges
            .map(({ start, end }) => `${start}${rangeDelimiter}${end}`)
            .join(',');
        return `${key}[${facetId}]${equal}${value}`;
    })
        .join(delimiter);
}
function deserialize(fragment) {
    const parts = fragment.split(delimiter);
    const keyValuePairs = parts
        .map((part) => splitOnFirstEqual(part))
        .map(preprocessFacetPairs)
        .filter(isValidPair)
        .map(cast);
    return keyValuePairs.reduce((acc, pair) => {
        const [key, val] = pair;
        if (key === 'f' || key === 'cf' || key === 'nf' || key === 'df') {
            const mergedValues = { ...acc[key], ...val };
            return { ...acc, [key]: mergedValues };
        }
        return { ...acc, [key]: val };
    }, {});
}
function splitOnFirstEqual(str) {
    const [first, ...rest] = str.split(equal);
    const second = rest.join(equal);
    return [first, second];
}
function preprocessFacetPairs(pair) {
    const [key, val] = pair;
    const facetKey = /^(f|cf|nf|df)\[(.+)\]$/;
    const result = facetKey.exec(key);
    if (!result) {
        return pair;
    }
    const paramKey = result[1];
    const facetId = result[2];
    const values = val.split(',');
    const processedValues = processFacetValues(paramKey, values);
    const obj = { [facetId]: processedValues };
    return [paramKey, JSON.stringify(obj)];
}
function processFacetValues(key, values) {
    if (key === 'nf') {
        return buildNumericRanges(values);
    }
    if (key === 'df') {
        return buildDateRanges(values);
    }
    return values;
}
function buildNumericRanges(ranges) {
    return ranges
        .map((str) => str.split(rangeDelimiter).map(parseFloat))
        .filter((range) => range.length === 2 && range.every(Number.isFinite))
        .map(([start, end]) => buildNumericRange({ start, end, state: 'selected' }));
}
function buildDateRanges(ranges) {
    return ranges
        .map((str) => str.split(rangeDelimiter))
        .filter((range) => range.length === 2 && range.every(isSearchApiDate))
        .map(([start, end]) => buildDateRange({ start, end, useLocalTime: true, state: 'selected' }));
}
function isValidPair(pair) {
    const validKey = isValidKey(pair[0]);
    const lengthOfTwo = pair.length === 2;
    return validKey && lengthOfTwo;
}
function isValidKey(key) {
    const supportedParameters = {
        q: true,
        aq: true,
        cq: true,
        enableQuerySyntax: true,
        firstResult: true,
        numberOfResults: true,
        sortCriteria: true,
        f: true,
        cf: true,
        nf: true,
        df: true,
        debug: true,
    };
    return key in supportedParameters;
}
function cast(pair) {
    const [key, value] = pair;
    if (key === 'enableQuerySyntax') {
        return [key, value === 'true'];
    }
    if (key === 'debug') {
        return [key, value === 'true'];
    }
    if (key === 'firstResult') {
        return [key, parseInt(value)];
    }
    if (key === 'numberOfResults') {
        return [key, parseInt(value)];
    }
    if (key === 'f' || key === 'cf' || key === 'nf' || key === 'df') {
        return [key, JSON.parse(value)];
    }
    return pair;
}

exports.HeadlessEngine = HeadlessEngine;
exports.HighlightUtils = highlight;
exports.TestUtils = index;
exports.baseFacetResponseSelector = baseFacetResponseSelector;
exports.buildBreadcrumbManager = buildBreadcrumbManager;
exports.buildCartRecommendationsList = buildCartRecommendationsList;
exports.buildCategoryFacet = buildCategoryFacet;
exports.buildContext = buildContext;
exports.buildController = buildController;
exports.buildCriterionExpression = buildCriterionExpression;
exports.buildDateFacet = buildDateFacet;
exports.buildDateRange = buildDateRange;
exports.buildDateSortCriterion = buildDateSortCriterion;
exports.buildDidYouMean = buildDidYouMean;
exports.buildFacet = buildFacet;
exports.buildFacetManager = buildFacetManager;
exports.buildFieldSortCriterion = buildFieldSortCriterion;
exports.buildFrequentlyBoughtTogetherList = buildFrequentlyBoughtTogetherList;
exports.buildFrequentlyViewedTogetherList = buildFrequentlyViewedTogetherList;
exports.buildHistory = buildHistory;
exports.buildNoSortCriterion = buildNoSortCriterion;
exports.buildNumericFacet = buildNumericFacet;
exports.buildNumericRange = buildNumericRange;
exports.buildPager = buildPager;
exports.buildPopularBoughtRecommendationsList = buildPopularBoughtRecommendationsList;
exports.buildPopularViewedRecommendationsList = buildPopularViewedRecommendationsList;
exports.buildQueryError = buildQueryError;
exports.buildQueryRankingExpressionSortCriterion = buildQueryRankingExpressionSortCriterion;
exports.buildQuerySummary = buildQuerySummary;
exports.buildRecommendationList = buildRecommendationList;
exports.buildRelevanceInspector = buildRelevanceInspector;
exports.buildRelevanceSortCriterion = buildRelevanceSortCriterion;
exports.buildResultList = buildResultList;
exports.buildResultTemplatesManager = buildResultTemplatesManager;
exports.buildResultsPerPage = buildResultsPerPage;
exports.buildSearchBox = buildSearchBox;
exports.buildSearchParameterManager = buildSearchParameterManager;
exports.buildSearchParameterSerializer = buildSearchParameterSerializer;
exports.buildSort = buildSort;
exports.buildStandaloneSearchBox = buildStandaloneSearchBox;
exports.buildTab = buildTab;
exports.buildUserInterestRecommendationsList = buildUserInterestRecommendationsList;
exports.createAction = createAction;
exports.createAsyncThunk = createAsyncThunk;
exports.createReducer = createReducer;
exports.currentPageSelector = currentPageSelector;
exports.currentPagesSelector = currentPagesSelector;
exports.facetRequestSelector = facetRequestSelector;
exports.facetResponseSelectedValuesSelector = facetResponseSelectedValuesSelector;
exports.facetResponseSelector = facetResponseSelector;
exports.maxPageSelector = maxPageSelector;
exports.platformUrl = platformUrl;
exports.productRecommendationsAppReducers = productRecommendationsAppReducers;
exports.recommendationAppReducers = recommendationAppReducers;
exports.searchAppReducers = searchAppReducers;
