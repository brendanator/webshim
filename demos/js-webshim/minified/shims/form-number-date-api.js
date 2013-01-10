jQuery.webshims.register("form-number-date-api",function(e,t,n,r,i){"use strict";t.getStep||(t.getStep=function(t,n){var r=e.attr(t,"step");return r==="any"?r:(n=n||l(t),!u[n]||!u[n].step?r:(r=y.number.asNumber(r),(!isNaN(r)&&r>0?r:u[n].step)*(u[n].stepScaleFactor||1)))}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,n){e+"AsNumber"in n||(n[e+"AsNumber"]=u[n.type].asNumber(t.attr(e)),isNaN(n[e+"AsNumber"])&&e+"Default"in u[n.type]&&(n[e+"AsNumber"]=u[n.type][e+"Default"]))});var s=parseInt("NaN",10),o=r,u=t.inputTypes,a=function(e){return typeof e=="number"||e&&e==e*1},f=function(t){return e('<input type="'+t+'" />').prop("type")===t},l=function(e){return(e.getAttribute("type")||"").toLowerCase()},c=function(e){var t=e*1;return e&&(t==e||e=="0"+t)},h=t.addMinMaxNumberToCache,p=function(e,t){e=""+e,t-=e.length;for(var n=0;n<t;n++)e="0"+e;return e},d=1e-7,v=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,n,r,i){if(n==="")return!1;"type"in r||(r.type=l(e[0]));var s=(i||{}).stepMismatch||!1,o;if(u[r.type]&&u[r.type].step&&r.type!="date"){"step"in r||(r.step=t.getStep(e[0],r.type));if(r.step=="any")return!1;"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h("min",e,r),o=r.minAsNumber,isNaN(o)&&(o=u[r.type].stepBase||0),s=Math.abs((r.valueAsNumber-o)%r.step),s=!(s<=d||Math.abs(s-r.step)<=d)}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e,n){t.addValidityRule(e.name,function(t,n,r,i){var s=(i||{})[e.name]||!1;if(n==="")return s;"type"in r||(r.type=l(t[0]));if(u[r.type]&&u[r.type].asNumber){"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h(e.attr,t,r);if(isNaN(r[e.attr+"AsNumber"]))return s;s=r[e.attr+"AsNumber"]*e.factor<r.valueAsNumber*e.factor-d}return s})}),t.reflectProperties(["input"],["max","min","step"]);var m=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,n=l(t),r=u[n]&&u[n].asNumber?u[n].asNumber(e.prop(t,"value")):m.prop._supget&&m.prop._supget.apply(t,arguments);return r==null&&(r=s),r},set:function(n){var r=this,i=l(r);if(u[i]&&u[i].numberToString){if(isNaN(n)){e.prop(r,"value","");return}var s=u[i].numberToString(n);s!==!1?e.prop(r,"value",s):t.error("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(r,arguments)}}}),g=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,n=l(t);return u[n]&&u[n].asDate&&!u[n].noAsDate?u[n].asDate(e.prop(t,"value")):g.prop._supget&&g.prop._supget.call(t)||null},set:function(n){var r=this,i=l(r);if(!(u[i]&&u[i].dateToString&&!u[i].noAsDate))return g.prop._supset&&g.prop._supset.apply(r,arguments)||null;if(n===null)return e.prop(r,"value",""),"";var s=u[i].dateToString(n);if(s!==!1)return e.prop(r,"value",s),s;t.error("INVALID_STATE_ERR: DOM Exception 11")}}});e.each({stepUp:1,stepDown:-1},function(n,r){var i=t.defineNodeNameProperty("input",n,{prop:{value:function(n){var s,o,a,f,c,h,p=l(this);if(!u[p]||!u[p].asNumber){if(i.prop&&i.prop.value)return i.prop.value.apply(this,arguments);throw t.info("no step method for type: "+p),"invalid state error"}h={type:p},n||(n=1,t.info("you should always use a factor for stepUp/stepDown")),n*=r,o=e.prop(this,"valueAsNumber");if(isNaN(o))throw t.info("valueAsNumber is NaN can't apply stepUp/stepDown "),"invalid state error";s=t.getStep(this,p);if(s=="any")throw t.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";t.addMinMaxNumberToCache("min",e(this),h),t.addMinMaxNumberToCache("max",e(this),h),s*=n,o+=s,f=(o-(h.minAsNumber||0))%s,f&&Math.abs(f)>d&&(c=o-f,c+=f>0?s:-s,o=c.toFixed(5)*1);if(!isNaN(h.maxAsNumber)&&o>h.maxAsNumber||!isNaN(h.minAsNumber)&&o<h.minAsNumber)throw t.info("max/min overflow can't apply stepUp/stepDown"),"invalid state error";a?e.prop(this,"valueAsDate",a):e.prop(this,"valueAsNumber",o)}}})});var y={number:{mismatch:function(e){return!a(e)},step:1,stepScaleFactor:1,asNumber:function(e){return a(e)?e*1:s},numberToString:function(e){return a(e)?e:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(e){if(!e||!e.split||!/\d$/.test(e))return!0;var t,n=e.split(/\u002D/);if(n.length!==3)return!0;var r=!1;if(n[0].length!==4||n[1].length!=2||n[1]>12||n[2].length!=2||n[2]>33)r=!0;else for(t=0;t<3;t++)if(!c(n[0])){r=!0;break}return r||e!==this.dateToString(this.asDate(e,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var n=s;if(t||!this.mismatch(e))e=e.split(/\u002D/),n=Date.UTC(e[0],e[1]-1,e[2]);return n},numberToString:function(e){return a(e)?this.dateToString(new Date(e*1)):!1},dateToString:function(e){return e&&e.getFullYear?e.getUTCFullYear()+"-"+p(e.getUTCMonth()+1,2)+"-"+p(e.getUTCDate(),2):!1}},time:{mismatch:function(t,n){if(!t||!t.split||!/\d$/.test(t))return!0;t=t.split(/\u003A/);if(t.length<2||t.length>3)return!0;var r=!1,i;return t[2]&&(t[2]=t[2].split(/\u002E/),i=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){if(!c(t)||t.length!==2)return r=!0,!1}),r?!0:t[0]>23||t[0]<0||t[1]>59||t[1]<0?!0:t[2]&&(t[2]>59||t[2]<0)?!0:i&&isNaN(i)?!0:(i&&(i<100?i*=100:i<10&&(i*=10)),n===!0?[t,i]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=s;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=p(e.getUTCHours(),2)+":"+p(e.getUTCMinutes(),2),n=e.getSeconds();return n!="0"&&(t+=":"+p(n,2)),n=e.getUTCMilliseconds(),n!="0"&&(t+="."+p(n,3)),t}return!1}},month:{mismatch:function(e){return y.date.mismatch(e+"-01")},step:1,stepScaleFactor:!1,asDate:function(e){return new Date(y.date.asNumber(e+"-01"))},asNumber:function(e){var t=s;return e&&!this.mismatch(e)&&(e=e.split(/\u002D/),e[0]=e[0]*1-1970,e[1]=e[1]*1-1,t=e[0]*12+e[1]),t},numberToString:function(e){var t,n=!1;return a(e)&&(t=e%12,e=(e-t)/12+1970,t+=1,t<1&&(e-=1,t+=12),n=p(e,4)+"-"+p(t,2)),n},dateToString:function(e){if(e&&e.getUTCHours){var t=y.date.dateToString(e);return t.split&&(t=t.split(/\u002D/))?t[0]+"-"+t[1]:!1}return!1}}};if(v||!f("range")||!f("time"))y.range=e.extend({},y.number,y.range),y.time=e.extend({},y.date,y.time),y.month=e.extend({},y.date,y.month);["number","month","range","date","time"].forEach(function(e){(v||!f(e))&&t.addInputType(e,y[e])})});