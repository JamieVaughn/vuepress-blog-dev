(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{306:function(e,t,i){"use strict";i.r(t);var o=i(8),n=Object(o.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("Units of pluggable behavior. Not inheritance. Composition is prefered over inheritance. Inheritance is for specialization, and leads to code duplication if used for other things. Composiiton lets us avoid code duplication and couple two or more behaviors together in any permutation without code duplication.")]),e._v(" "),i("p",[e._v("When you have the urge to use inheritance because you think the new thing needs to specialize, then most of the time, the thing you are specializing on is simply a different behavior of what the parent object behavior is. The parent object behavior is still an algorithm, but it might be the algorithm of doing nothing, i.e. just returning some chunk of unmodified state.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/blog/composition.png",alt:"Nothing is Something!"}})]),e._v(" "),i("ol",[i("li",[e._v('figure out what is varying (what are the algorithms of each behavior actually doing, even if it is "nothing")')]),e._v(" "),i("li",[e._v("name that role, behavior or trait (i.e. 'order', 'repeatNTimes', 'format')")]),e._v(" "),i("li",[e._v("Define that role (make API's for it that can be plugged into anywhere)")]),e._v(" "),i("li",[e._v("Inject the executor")])]),e._v(" "),i("p",[e._v("Composition + Dependency Injection = Object Oriented Design\nInject an Object (or Function) to play the role of the thing that varies")]),e._v(" "),i("p",[e._v("order is not a House, Order is a role (in the FP paradigm: a callback)")]),e._v(" "),i("p",[e._v("Stop checking for "),i("code",[e._v("null")]),e._v(". Use an object to stand in for "),i("code",[e._v("null")]),e._v(' and use those "active nothings."\nBeware of inheritance. Inheritance is NOT for sharing behaviors. It\'s for specialization.\nTHere is no such thing as ONE specialization. Define the role instead\nBeleive in Nothing as something. In every program there are things that reveal there existence by the absence of code, just like Zero in the number system.')]),e._v(" "),i("p",[e._v("This article is a summary of what I assimilated from this amazing [conference talk.](https://www.youtube.com/watch?v=OMPfEXIlTVE]")])])},[],!1,null,null,null);t.default=n.exports}}]);