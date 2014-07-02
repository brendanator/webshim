webshims.register("mediaelement-jaris",function(a,b,c,d,e,f){"use strict";var g=b.mediaelement,h=c.swfmini,i=Modernizr.audio&&Modernizr.video,j=h.hasFlashPlayerVersion("9.0.115"),k=0,l="ActiveXObject"in c&&i,m={paused:!0,ended:!1,currentSrc:"",duration:c.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(a){return a?void b.error("buffered index size error"):0},end:function(a){return a?void b.error("buffered index size error"):0},length:0}},n=Object.keys(m),o={currentTime:0,volume:1,muted:!1},p=(Object.keys(o),a.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,lastCalledTime:-500,_ppFlag:e,_calledMeta:!1,lastDuration:0},m,o)),q=function(a){try{a.nodeName}catch(c){return null}var d=b.data(a,"mediaelement");return d&&"third"==d.isActive?d:null},r=function(b,c){c=a.Event(c),c.preventDefault(),a.event.trigger(c,e,b)},s=f.playerPath||b.cfg.basePath+"swf/"+(f.playerName||"JarisFLVPlayer.swf");b.extendUNDEFProp(f.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),b.extendUNDEFProp(f.vars,{controltype:"1",jsapi:"1"}),b.extendUNDEFProp(f.attrs,{bgcolor:"#000000"});var t=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer),a>=3&&b.readyState<3&&(b.readyState=a,r(b._elem,"canplay"),b.paused||r(b._elem,"playing"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){t(4,b)},4e3)),a>=4&&b.readyState<4&&(b.readyState=a,r(b._elem,"canplaythrough")),b.readyState=a},u=function(b){b.seeking&&Math.abs(b.currentTime-b._lastSeektime)<2&&(b.seeking=!1,a(b._elem).triggerHandler("seeked"))};g.jarisEvent={};var v,w={onPlayPause:function(a,b,c){var d,e;if(null==c)try{d=b.api.api_get("isPlaying")}catch(f){}else d=c;d==b.paused&&(b.paused=!d,e=b.paused?"pause":"play",b._ppFlag=!0,r(b._elem,e),b.readyState<3&&t(3,b),b.paused||r(b._elem,"playing"))},onSeek:function(b,c){c._lastSeektime=b.seekTime,c.seeking=!0,a(c._elem).triggerHandler("seeking"),clearTimeout(c._seekedTimer),c._seekedTimer=setTimeout(function(){u(c),c.seeking=!1},300)},onConnectionFailed:function(a,b){g.setError(b._elem,"flash connection error")},onNotBuffering:function(a,b){t(3,b)},onDataInitialized:function(a,b){var c,d=b.duration;b.duration=a.duration,d==b.duration||isNaN(b.duration)||b._calledMeta&&(c=Math.abs(b.lastDuration-b.duration))<2||(b.videoHeight=a.height,b.videoWidth=a.width,b.networkState||(b.networkState=2),b.readyState<1&&t(1,b),clearTimeout(b._durationChangeTimer),b._calledMeta&&b.duration?b._durationChangeTimer=setTimeout(function(){b.lastDuration=b.duration,r(b._elem,"durationchange")},c>50?0:c>9?9:99):(b.lastDuration=b.duration,b.duration&&r(b._elem,"durationchange"),b._calledMeta||r(b._elem,"loadedmetadata")),b._calledMeta=!0)},onBuffering:function(a,b){b.ended&&(b.ended=!1),t(1,b),r(b._elem,"waiting")},onTimeUpdate:function(b,c){var d=c.currentTime-c.lastCalledTime;c.ended&&(c.ended=!1),c.readyState<3&&(t(3,c),r(c._elem,"playing")),c.seeking&&u(c),(d>.19||-.19>d)&&(c.lastCalledTime=c.currentTime,a.event.trigger("timeupdate",e,c._elem,!0))},onProgress:function(b,c){if(c.ended&&(c.ended=!1),c.duration&&!isNaN(c.duration)){var d=b.loaded/b.total;d>.02&&.2>d?t(3,c):d>.2&&(d>.95&&(d=1,c.networkState=1),t(4,c)),c._bufferedEnd&&c._bufferedEnd>d&&(c._bufferedStart=c.currentTime||0),c._bufferedEnd=d,c.buffered.length=1,a.event.trigger("progress",e,c._elem,!0)}},onPlaybackFinished:function(a,b){b.readyState<4&&t(4,b),b.ended=!0,r(b._elem,"ended")},onVolumeChange:function(a,b){(b.volume!=a.volume||b.muted!=a.mute)&&(b.volume=a.volume,b.muted=a.mute,r(b._elem,"volumechange"))},ready:function(){var c=function(a){var b=!0;try{a.api.api_get("volume")}catch(c){b=!1}return b};return function(d,e){var f=0,g=function(){return f>9?void(e.tryedReframeing=0):(f++,e.tryedReframeing++,void(c(e)?(e.wasSwfReady=!0,e.tryedReframeing=0,y(e),x(e)):e.tryedReframeing<6?e.tryedReframeing<3?(e.reframeTimer=setTimeout(g,9),e.shadowElem.css({overflow:"visible"}),setTimeout(function(){e.shadowElem.css({overflow:"hidden"})},1)):(e.shadowElem.css({overflow:"hidden"}),a(e._elem).mediaLoad()):(clearTimeout(e.reframeTimer),b.error("reframing error"))))};e&&e.api&&(e.tryedReframeing||(e.tryedReframeing=0),clearTimeout(v),clearTimeout(e.reframeTimer),e.shadowElem.removeClass("flashblocker-assumed"),f?e.reframeTimer=setTimeout(g,9):g())}}()};w.onMute=w.onVolumeChange;var x=function(a){var c,d=a.actionQueue.length,e=0;if(d&&"third"==a.isActive)for(;a.actionQueue.length&&d>e;){e++,c=a.actionQueue.shift();try{a.api[c.fn].apply(a.api,c.args)}catch(f){b.warn(f)}}a.actionQueue.length&&(a.actionQueue=[])},y=function(b){b&&((b._ppFlag===e&&a.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if("third"==b.isActive&&(b._ppFlag===e||!b.paused))try{a(b._elem).play(),b._ppFlag=!0}catch(c){}},1),b.muted&&a.prop(b._elem,"muted",!0),1!=b.volume&&a.prop(b._elem,"volume",b.volume))},z=a.noop;if(i){var A={play:1,playing:1},B=["play","pause","playing","loadstart","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=B.map(function(a){return a+".webshimspolyfill"}).join(" "),D=function(c){var d=b.data(c.target,"mediaelement");if(d){var e=c.originalEvent&&c.originalEvent.type===c.type;e==("third"==d.activating)&&(c.stopImmediatePropagation(),A[c.type]&&(d.isActive!=d.activating?a(c.target).pause():e&&(a.prop(c.target,"pause")._supvalue||a.noop).apply(c.target)))}};z=function(c){a(c).off(C).on(C,D),B.forEach(function(a){b.moveToFirstEvent(c,a)})},z(d)}g.setActive=function(c,d,e){if(e||(e=b.data(c,"mediaelement")),e&&e.isActive!=d){"html5"!=d&&"third"!=d&&b.warn("wrong type for mediaelement activating: "+d);var f=b.data(c,"shadowData");e.activating=d,a(c).pause(),e.isActive=d,"third"==d?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],a(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(a(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1),a(c).trigger("mediaelementapichange")}};var E=function(){var a=["_calledMeta","lastDuration","_bufferedEnd","lastCalledTime","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],b=a.length;return function(c){if(c){clearTimeout(c._seekedTimer);var d=b,e=c.networkState;for(t(0,c),clearTimeout(c._durationChangeTimer);--d>-1;)delete c[a[d]];c.actionQueue=[],c.buffered.length=0,e&&r(c._elem,"emptied")}}}(),F=function(){var b={},e=function(c){var e,f,g;return b[c.currentSrc]?e=b[c.currentSrc]:c.videoHeight&&c.videoWidth?(b[c.currentSrc]={width:c.videoWidth,height:c.videoHeight},e=b[c.currentSrc]):(f=a.attr(c._elem,"poster"))&&(e=b[f],e||(g=d.createElement("img"),g.onload=function(){b[f]={width:this.width,height:this.height},b[f].height&&b[f].width?G(c,a.prop(c._elem,"controls")):delete b[f],g.onload=null},g.src=f,g.complete&&g.onload&&g.onload())),e||{width:300,height:"video"==c._elemNodeName?150:50}},f=function(a,b){return a.style[b]||a.currentStyle&&a.currentStyle[b]||c.getComputedStyle&&(c.getComputedStyle(a,null)||{})[b]||""},g=["minWidth","maxWidth","minHeight","maxHeight"],h=function(a,b){var c,d,e=!1;for(c=0;4>c;c++)d=f(a,g[c]),parseFloat(d,10)&&(e=!0,b[g[c]]=d);return e},i=function(b){var c,d,g=b._elem,i={width:"auto"==f(g,"width"),height:"auto"==f(g,"height")},j={width:!i.width&&a(g).width(),height:!i.height&&a(g).height()};return(i.width||i.height)&&(c=e(b),d=c.width/c.height,i.width&&i.height?(j.width=c.width,j.height=c.height):i.width?j.width=j.height*d:i.height&&(j.height=j.width/d),h(g,j)&&(b.shadowElem.css(j),i.width&&(j.width=b.shadowElem.height()*d),i.height&&(j.height=(i.width?j.width:b.shadowElem.width())/d),i.width&&i.height&&(b.shadowElem.css(j),j.height=b.shadowElem.width()/d,j.width=j.height*d,b.shadowElem.css(j),j.width=b.shadowElem.height()*d,j.height=j.width/d),Modernizr.video||(j.width=b.shadowElem.width(),j.height=b.shadowElem.height()))),j};return i}(),G=function(b,c){var d,e=b.shadowElem;a(b._elem)[c?"addClass":"removeClass"]("webshims-controls"),("third"==b.isActive||"third"==b.activating)&&("audio"!=b._elemNodeName||c?(b._elem.style.display="",d=F(b),b._elem.style.display="none",e.css(d)):e.css({width:0,height:0}))},H=function(){var b={"":1,auto:1};return function(c){var d=a.attr(c,"preload");return null==d||"none"==d||a.prop(c,"autoplay")?!1:(d=a.prop(c,"preload"),!!(b[d]||"metadata"==d&&a(c).is(".preload-in-doubt, video:not([poster])")))}}(),I={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},J=function(a){return a.replace?a.replace(I.A,"%26").replace(I.a,"%26").replace(I.e,"%3D").replace(I.q,"%3F"):a};if("matchMedia"in c){var K=!1;try{K=c.matchMedia("only all").matches}catch(L){}K&&(g.sortMedia=function(a,b){try{a=!a.media||matchMedia(a.media).matches,b=!b.media||matchMedia(b.media).matches}catch(c){return 0}return a==b?0:a?-1:1})}g.createSWF=function(c,e,l){if(!j)return void setTimeout(function(){a(c).mediaLoad()},1);var m={};1>k?k=1:k++,l||(l=b.data(c,"mediaelement")),((m.height=a.attr(c,"height")||"")||(m.width=a.attr(c,"width")||""))&&(a(c).css(m),b.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull."));var n,o="audio/rtmp"==e.type||"video/rtmp"==e.type,q=a.extend({},f.vars,{poster:J(a.attr(c,"poster")&&a.prop(c,"poster")||""),source:J(e.streamId||e.srcProp),server:J(e.server||"")}),t=a(c).data("vars")||{},u=a.prop(c,"controls"),x="jarisplayer-"+b.getID(c),y=a.extend({},f.params,a(c).data("params")),A=c.nodeName.toLowerCase(),B=a.extend({},f.attrs,{name:x,id:x},a(c).data("attrs")),C=function(){"third"==l.isActive&&G(l,a.prop(c,"controls"))};return l&&l.swfCreated?(g.setActive(c,"third",l),l.currentSrc="",l.shadowElem.html('<div id="'+x+'">'),l.api=!1,l.actionQueue=[],n=l.shadowElem,E(l),l.currentSrc=e.srcProp):(a(d.getElementById("wrapper-"+x)).remove(),n=a('<div class="polyfill-'+A+" polyfill-mediaelement "+b.shadowClass+'" id="wrapper-'+x+'"><div id="'+x+'"></div>').css({position:"relative",overflow:"hidden"}),l=b.data(c,"mediaelement",b.objectCreate(p,{actionQueue:{value:[]},shadowElem:{value:n},_elemNodeName:{value:A},_elem:{value:c},currentSrc:{value:e.srcProp},swfCreated:{value:!0},id:{value:x.replace(/-/g,"")},buffered:{value:{start:function(a){return a>=l.buffered.length?void b.error("buffered index size error"):0},end:function(a){return a>=l.buffered.length?void b.error("buffered index size error"):(l.duration-l._bufferedStart)*l._bufferedEnd+l._bufferedStart},length:0}}})),n.insertBefore(c),i&&a.extend(l,{volume:a.prop(c,"volume"),muted:a.prop(c,"muted"),paused:a.prop(c,"paused")}),b.addShadowDom(c,n),b.data(c,"mediaelement")||b.data(c,"mediaelement",l),z(c),g.setActive(c,"third",l),G(l,u),a(c).on({"updatemediaelementdimensions loadedmetadata emptied":C,remove:function(a){!a.originalEvent&&g.jarisEvent[l.id]&&g.jarisEvent[l.id].elem==c&&(delete g.jarisEvent[l.id],clearTimeout(v),clearTimeout(l.flashBlock))}}).onWSOff("updateshadowdom",C)),g.jarisEvent[l.id]&&g.jarisEvent[l.id].elem!=c?void b.error("something went wrong"):(g.jarisEvent[l.id]||(g.jarisEvent[l.id]=function(a){if("ready"==a.type){var b=function(){l.api&&(l.paused||l.api.api_play(),H(c)&&l.api.api_preload(),w.ready(a,l))};l.api?b():setTimeout(b,9)}else l.currentTime=a.position,l.api&&(!l._calledMeta&&isNaN(a.duration)&&l.duration!=a.duration&&isNaN(l.duration)&&w.onDataInitialized(a,l),l._ppFlag||"onPlayPause"==a.type||w.onPlayPause(a,l),w[a.type]&&w[a.type](a,l)),l.duration=a.duration},g.jarisEvent[l.id].elem=c),a.extend(q,{id:x,evtId:l.id,controls:""+u,autostart:"false",nodename:A},t),o?q.streamtype="rtmp":"audio/mpeg"==e.type||"audio/mp3"==e.type?(q.type="audio",q.streamtype="file"):"video/youtube"==e.type&&(q.streamtype="youtube"),f.changeSWF(q,c,e,l,"embed"),clearTimeout(l.flashBlock),h.embedSWF(s,x,"100%","100%","9.0.115",!1,q,y,B,function(d){if(d.success){var e=function(){(!d.ref.parentNode&&n[0].parentNode||"none"==d.ref.style.display)&&(n.addClass("flashblocker-assumed"),a(c).trigger("flashblocker"),b.warn("flashblocker assumed")),a(d.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};l.api=d.ref,u||a(d.ref).attr("tabindex","-1").css("outline","none"),l.flashBlock=setTimeout(e,99),v||(clearTimeout(v),v=setTimeout(function(){e();var c=a(d.ref);c[0].offsetWidth>1&&c[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?b.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(c[0].offsetWidth<2||c[0].offsetHeight<2)&&b.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),c=null},8e3))}}),void r(l._elem,"loadstart"))};var M=function(a,b,c,d){return d=d||q(a),d?(d.api&&d.api[b]?d.api[b].apply(d.api,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};if(["audio","video"].forEach(function(c){var d,e={},f=function(a){("audio"!=c||"videoHeight"!=a&&"videoWidth"!=a)&&(e[a]={get:function(){var b=q(this);return b?b[a]:i&&d[a].prop._supget?d[a].prop._supget.apply(this):p[a]},writeable:!1})},g=function(a,b){f(a),delete e[a].writeable,e[a].set=b};g("seeking"),g("volume",function(a){var c=q(this);if(c)a*=1,isNaN(a)||((0>a||a>1)&&b.error("volume greater or less than allowed "+a/100),M(this,"api_volume",[a],c),c.volume!=a&&(c.volume=a,r(c._elem,"volumechange")),c=null);else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)}),g("muted",function(a){var b=q(this);if(b)a=!!a,M(this,"api_muted",[a],b),b.muted!=a&&(b.muted=a,r(b._elem,"volumechange")),b=null;else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)}),g("currentTime",function(a){var b=q(this);if(b)a*=1,isNaN(a)||M(this,"api_seek",[a],b);else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(a){e[a]={value:function(){var b=q(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),M(this,"play"==a?"api_play":"api_pause",[],b),b._ppFlag=!0,b.paused!=("play"!=a)&&(b.paused="play"!=a,r(b._elem,a));else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}}),n.forEach(f),b.onNodeNamesPropertyModify(c,"controls",function(b,d){var e=q(this);a(this)[d?"addClass":"removeClass"]("webshims-controls"),e&&("audio"==c&&G(e,d),M(this,"api_controls",[d],e))}),b.onNodeNamesPropertyModify(c,"preload",function(){var c,d,e;H(this)&&(c=q(this),c?M(this,"api_preload",[],c):!l||!this.paused||this.error||a.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!a(this).is(":not(.nonnative-api-active)")||(e=this,d=b.data(e,"mediaelementBase")||b.data(e,"mediaelementBase",{}),clearTimeout(d.loadTimer),d.loadTimer=setTimeout(function(){a(e).mediaLoad()},9)))}),d=b.defineNodeNameProperties(c,e,"prop"),Modernizr.mediaDefaultMuted||b.defineNodeNameProperties(c,{defaultMuted:{get:function(){return null!=a.attr(this,"muted")},set:function(b){b?a.attr(this,"muted",""):a(this).removeAttr("muted")}}},"prop")}),j&&a.cleanData){var N=a.cleanData,O=d.createElement("object"),P={SetVariable:1,GetVariable:1,SetReturnValue:1,GetReturnValue:1},Q={object:1,OBJECT:1};a.cleanData=function(a){var b,c,d,e=N.apply(this,arguments);if(a&&(c=a.length)&&k)for(b=0;c>b;b++)if(Q[a[b].nodeName]&&"api_pause"in a[b]){k--;try{if(a[b].api_pause(),4==a[b].readyState)for(d in a[b])P[d]||O[d]||"function"!=typeof a[b][d]||(a[b][d]=null)}catch(f){}}return e}}if(i?"media"in d.createElement("source")||b.reflectProperties("source",["media"]):(["poster","src"].forEach(function(a){b.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),b.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),b.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(a){b.defineNodeNamesBooleanProperty(["audio","video"],a)}),b.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"),j&&b.ready("WINDOWLOAD",function(){setTimeout(function(){k||(d.createElement("img").src=s)},9)})),i&&j&&!f.preferFlash){var R={3:1,4:1},S=function(c){var e,g,h;(a(c.target).is("audio, video")||(h=c.target.parentNode)&&a("source",h).last()[0]==c.target)&&(e=a(c.target).closest("audio, video"))&&!e.is(".nonnative-api-active")&&(g=e.prop("error"),setTimeout(function(){e.is(".nonnative-api-active")||(g&&R[g.code]&&(f.preferFlash=!0,d.removeEventListener("error",S,!0),a("audio, video").each(function(){b.mediaelement.selectSource(this)}),b.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+c.target.currentSrc+" Mediaerror: "+e.prop("error")+" error.code: "+g.code)),b.warn("There was a mediaelement error. Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"))}))};d.addEventListener("error",S,!0),setTimeout(function(){a("audio, video").each(function(){var b=a.prop(this,"error");b&&R[b]&&S({target:this})})})}});