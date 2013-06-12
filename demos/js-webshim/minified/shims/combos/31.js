webshims.register("dom-extend",function(e,t,a,r,n){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var i=function(){if(!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),a.$&&(a.$=t.$),a.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,a,r,n,i){return i?f.call(e(t)):f.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var r,n=0;null!=(r=a[n]);n++)try{e(r).triggerHandler("remove")}catch(i){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var r=e.isFunction(t);return this.each(function(i){if(a=this,1===a.nodeType)if(r){var o=t.call(a,i,e.prop(a,"value",n,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,n,i){return i||(i=r),e(i)[n?"onTrigger":"on"](t,a),this.on("remove",function(r){r.originalEvent||e(i).off(t,a)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,a,r){if(t=t.jquery?t[0]:t,!t)return r||{};var i=e.data(t,m);return r!==n&&(i||(i=e.data(t,m,{})),a&&(i[a]=r)),a?i&&i[a]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var r=v(this,"shadowData"),n=r&&r[t.prop]||this;-1==e.inArray(n,a)&&a.push(n)}),this.pushStack(a)}}),["removeAttr","prop","attr"].forEach(function(a){l[a]=e[a],e[a]=function(t,r,i,o,s){var d="val"==o,f=d?h:l[a];if(!t||!u[r]||1!==t.nodeType||!d&&o&&"attr"==a&&e.attrFn[r])return f(t,r,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=a||i!==!1&&null!==i?a:"removeAttr";if(b||(b=c["*"]),b&&(b=b[r]),b&&(m=b[w]),m){if("value"==r&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(i===n)return m.get?m.get.call(t):m.value;m.set&&("attr"==a&&i===!0&&(i=r),g=m.set.call(t,i)),"value"==r&&(m.isVal=v)}else g=f(t,r,i,o,s);if((i!==n||"removeAttr"===w)&&p[y]&&p[y][r]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,p[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,i,T,d?"val":w,a)})}return g},d[a]=function(e,r,i){c[e]||(c[e]={}),c[e][r]||(c[e][r]={});var o=c[e][r][a],s=function(e,t,n){return t&&t[e]?t[e]:n&&n[e]?n[e]:"prop"==a&&"value"==r?function(e){var t=this;return i.isVal?h(t,r,e,!1,0===arguments.length):l[a](t,r,e)}:"prop"==a&&"value"==e&&i.value.apply?function(){var e=l[a](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[a](this,r,e)}};c[e][r][a]=i,i.value===n&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),a=Object.prototype.hasOwnProperty,n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(n&&(l=r.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&a.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var a={};t.addReady(function(r,i){var o={},s=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(a,function(e,a){return s(e),a&&a.forEach?(a.forEach(function(t){o[e].each(t)}),n):(t.warn("Error: with "+e+"-property. methods: "+a),n)}),o=null});var i,o=e([]),s=function(t,n){a[t]?a[t].push(n):a[t]=[n],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(n)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,a){s(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,a,r){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[a]=this[a],this[a]=r})})}}}(),b=function(e,t){e.defaultValue===n&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var r=a.prop("id");return r||(t++,r="ID-"+t,a.eq(0).prop("id",r)),r}}(),implement:function(e,a){var r=v(e,"implemented")||v(e,"implemented",{});return r[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(r[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,a,r){var n,i=(e._data(t,"events")||{})[a];i&&i.length>1&&(n=i.pop(),r||(r="bind"),"bind"==r&&i.delegateCount?i.splice(i.delegateCount,0,n):i.unshift(n)),t=null},addShadowDom:function(){var n,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(n),n=setTimeout(function(){if("resize"==t.type){var n=e(a).width(),l=e(a).width();if(l==i&&n==o)return;i=l,o=n,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=r.body,n=r.documentElement;s[t]=function(){return Math.max(a["scroll"+e],n["scroll"+e],a["offset"+e],n["offset"+e],n["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(a).bind("resize",this.handler),function(){var t,a=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),a.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(a,r,n){if(a&&r){n=n||{},a.jquery&&(a=a[0]),r.jquery&&(r=r[0]);var i=e.data(a,m)||e.data(a,m,{}),o=e.data(r,m)||e.data(r,m,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=e.data(n.shadowFocusElement,m)||e.data(n.shadowFocusElement,m,s)):n.shadowFocusElement=r,e(a).on("remove",function(t){t.originalEvent||e(r).remove()}),i.hasShadow=r,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=i.shadowData={nativeElement:a,shadowElement:r,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=n.data),n=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(a,r){b(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,n=this.getAttribute(r);if(null==n)return"";if(t.setAttribute("href",n+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(i){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(a,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(a,r,n){return u[r]=!0,n.reflect&&t.propTypes[n.propType||"standard"](n,r),["prop","attr","removeAttr"].forEach(function(i){var o=n[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](a,r,o),"*"!=a&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(a,r,o),n[i]=o)}),n.initAttr&&y.content(a,r),n},defineNodeNameProperties:function(e,a,r,n){for(var i in a)!n&&a[i].initAttr&&y.createTmpCache(e),r&&(a[i][r]||(a[i][r]={},["value","set","get"].forEach(function(e){e in a[i]&&(a[i][r][e]=a[i][e],delete a[i][e])}))),a[i]=t.defineNodeNameProperty(e,i,a[i]);return n||y.flushTmpCache(),a},createElement:function(a,r,n){var i;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(a),r.before&&y.createElement(a,r.before),n&&(i=t.defineNodeNameProperties(a,n,!1,!0)),r.after&&y.createElement(a,r.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,a,r,n){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof a&&(a=a.split(s)),r.initAttr&&y.createTmpCache(e),a.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),r.set&&(n&&(r.set.only=n),p[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,r,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(a,r,{attr:{set:function(e){this.setAttribute(r,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?n:r}},removeAttr:{value:function(){this.removeAttribute(r),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var r;return a===n?(r=e.attributes[t]||{},a=r.specified?r.value:null,null==a?n:a):("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a),n)}},activeLang:function(){var a,r,n=[],i={},s=/:\/\/|^\.*\//,l=function(a,r,n){var i;return r&&n&&-1!==e.inArray(r,n.availabeLangs||[])?(a.loading=!0,i=n.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+r+".js",function(){a.langObj[r]?(a.loading=!1,c(a,!0)):e(function(){a.langObj[r]&&c(a,!0),a.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(a,r,"")})},c=function(e,t){if(e.activeLang!=a&&e.activeLang!==r){var n=o[e.module].options;e.langObj[a]||r&&e.langObj[r]?(e.activeLang=a,e.callback(e.langObj[a]||e.langObj[r],a),u(e.module)):t||l(e,a,n)||l(e,r,n)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],a),u(e.module))}},d=function(t){return"string"==typeof t&&t!==a?(a=t,r=a.split("-")[0],a==r&&(r=!1),e.each(n,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(a,r,"")):(t.activeLang||(t.activeLang=""),n.push(t),c(t))),a};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,r,n,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[a](e,r,n,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(n,i){if(e.each(a,function(t,a){for(var o=e(t,n).add(i.filter(t)),s=0,l=o.length;l>s;s++)r(o[s],a)}),n===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}(jQuery,document),webshims.register("form-core",function(e,t,a,r,n,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var a=["form-validation"];i.lazyCustomMessages&&(i.customMessages=!0,a.push("form-message")),i.addValidators&&a.push("form-validators"),t.reTest(a),e(r).off(".lazyloadvalidation")},l=function(t){var a=!1;return e(t).jProp("elements").each(function(){return a=e(this).is(":invalid"),a?!1:n}),a},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,a){e(t).trigger(a)};var d=function(e,a,r){s(),t.ready("form-validation",function(){e[a].apply(e,r)})},p="transitionDelay"in r.documentElement.style?"":" no-transition";t.wsPopover={id:0,_create:function(){this.options=e.extend({},t.cfg.wspopover,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){d(this,"show",arguments)}},t.validityAlert={showFor:function(){d(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,a,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),"object"==typeof i&&(a=a||e.prop(t,"validity")||{valid:1},a.valid||e.each(a,function(e,t){return t&&"valid"!=e&&i[e]?(i=i[e],!1):n})),"object"==typeof i&&(i=i.defaultMessage),i||""},e.fn.getErrorMessage=function(a){var r="",n=this[0];return n&&(r=t.getContentValidationMessage(n,!1,a)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),r},e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()}),t.ready("WINDOWLOAD",s),i.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})}),function(){var t,a,n=[];e(r).on("invalid",function(i){if(!i.wrongWebkitInvalid){var o=e(i.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(r).triggerHandler(s,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),n.push(i.target),i.extraData="fix",clearTimeout(a),a=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(i.target).trigger(a,a)},9),o=null}})}()}),webshims.register("form-datalist",function(e,t,a,r,n,i){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(a){t.createPropDefault(a,"attr"),a.prop||(a.prop={get:function(){var t=e.attr(this,"list");return t&&(t=r.getElementById(t),t&&a.propNodeName&&!e.nodeName(t,a.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var c=function(){var a={autocomplete:{attr:{get:function(){var t=this,a=e.data(t,"datalistWidget");return a?a._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var a=this,r=e.data(a,"datalistWidget");r?(r._autocomplete=t,"off"==t&&r.hideList()):"autocomplete"in a?a.autocomplete=t:a.setAttribute("autocomplete",t)}}}};!l.customDatalist||u&&"selectedOption"in e("<input />")[0]||(a.selectedOption={prop:{writeable:!1,get:function(){var t,a,r=this,i=e.prop(r,"list"),o=null;return i?(t=e.prop(r,"value"))?(a=e.prop(i,"options"),a.length?(e.each(a,function(a,r){return t==e.prop(r,"value")?(o=r,!1):n}),o):o):o:o}}}),u&&((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var a=this,r=e("select",a);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}}),a.list={attr:{get:function(){var a=t.contentAttr(this,"list");return null!=a?(e.data(this,"datalistListAttr",a),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):a=e.data(this,"datalistListAttr"),null==a?n:a},set:function(a){var r=this;e.data(r,"datalistListAttr",a),s[e.prop(this,"type")]||s[e.attr(this,"type")]?r.setAttribute("list",a):t.objectCreate(d,n,{input:r,id:a,datalist:e.prop(r,"list")}),e(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),t.defineNodeNameProperties("input",a),t.addReady(function(t,a){a.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},d={_create:function(a){if(!s[e.prop(a.input,"type")]&&!s[e.attr(a.input,"type")]){var r=a.datalist,i=e.data(a.input,"datalistWidget"),l=this;return r&&i&&i.datalist!==r?(i.datalist=r,i.id=a.id,e(i.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(i,"_resetListCached")),i._resetListCached(),n):r?(i&&i.datalist===r||(this.datalist=r,this.id=a.id,this.hasViewableData=!0,this._autocomplete=e.attr(a.input,"autocomplete"),e.data(a.input,"datalistWidget",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(a):(e(a.input).one("focus",o),t.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(a)}))),n):(i&&i.destroy(),n)}},destroy:function(t){var i,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(r).off(".datalist"+this.id),e(a).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===n?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(i=this.input,setTimeout(function(){e.attr(i,"list",e.attr(i,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(i,{shadowListProto:d})}),c()}}()});