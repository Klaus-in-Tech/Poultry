(function(){var window=this;var f=this,k=function(b){return"string"==typeof b},aa=/^[\w+/_-]+[=]{0,2}$/,m=null,p=function(){},t=function(b){var a=typeof b;if("object"==a)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return a;var c=Object.prototype.toString.call(b);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==a&&"undefined"==typeof b.call)return"object";return a};var w=function(b,a){if(k(b))return k(a)&&1==a.length?b.indexOf(a,0):-1;for(var c=0;c<b.length;c++)if(c in b&&b[c]===a)return c;return-1},ba=function(b,a){for(var c=b.length,d=k(b)?b.split(""):b,e=0;e<c;e++)e in d&&a.call(void 0,d[e],e,b)},ca=function(b){return Array.prototype.concat.apply([],arguments)};var x;a:{var z=f.navigator;if(z){var A=z.userAgent;if(A){x=A;break a}}x=""};var B=function(b){B[" "](b);return b};B[" "]=p;var D=function(){this.b="";this.v=C};D.prototype.l=!0;D.prototype.a=function(){return this.b};var E=function(b){return b instanceof D&&b.constructor===D&&b.v===C?b.b:"type_error:TrustedResourceUrl"},C={};var F=function(){this.g="";this.u=da};F.prototype.l=!0;F.prototype.a=function(){return this.g};var ea=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,da={},fa=function(b){var a=new F;a.g=b;return a};fa("about:blank");var ha=function(b,a){b.src=E(a);if(null===m){a:{if((a=f.document.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&aa.test(a))break a;a=null}m=a||""}if(a=m)b.nonce=a};var ia=function(b){var a=!1,c;return function(){a||(c=b(),a=!0);return c}};var ka=function(b){ja();var a=new D;a.b=b;return a},ja=p;var la=/^[\w+/_-]+[=]{0,2}$/;var ma=function(){if(!f.crypto)return Math.random();try{var b=new Uint32Array(1);f.crypto.getRandomValues(b);return b[0]/65536/65536}catch(a){return Math.random()}},na=ia(function(){return-1!=x.indexOf("Google Web Preview")||1E-4>Math.random()}),oa=function(){try{a:{var b=f.document.querySelector("script[nonce]");if(b){var a=b.nonce||b.getAttribute("nonce");if(a&&la.test(a)){var c=a;break a}}c=void 0}return c}catch(d){}};var G=function(){return f.googletag||(f.googletag={})};var H={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,90:0,91:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.05,169:0,207:.01,127:0,129:.01,131:"",156:0,133:0,134:.01,135:.1,137:.01,167:1,138:"",143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:"",179:.05,170:!1,211:!1,183:0,196:.001,197:.001,152:[],172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,199:0,180:null,219:[],210:{},195:1,198:1,222:0,223:.01,200:.5,201:0,202:"",203:.01,206:0,213:1,214:.05,215:.01,217:.01,218:.01,220:!1,224:!1};H[6]=function(b,a){try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return!!a;case "http:":return!1}}catch(d){}return!0}(window);H[49]=(new Date).getTime();H[36]=/^true$/.test("false");H[46]=/^true$/.test("false");H[148]=/^true$/.test("false");H[221]=/^true$/.test("");var I;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var pa=Number("{{MOD}}");if(!isNaN(pa)){I=pa;break a}}I=-1}H[204]=I;H[205]=.01;var J=function(){var b={},a;for(a in H)b[a]=H[a];this.a=b};J.prototype.get=function(b){return this.a[b]};J.prototype.set=function(b,a){this.a[b]=a};J.b=void 0;J.a=function(){return J.b?J.b:J.b=new J};var qa=J.a().a,ra=G(),sa=ra._vars_,K;for(K in sa)qa[K]=sa[K];ra._vars_=qa;var ta=function(){return"195"},ua=G();ua.hasOwnProperty("getVersion")||(ua.getVersion=ta);var va=function(b,a,c){b.addEventListener?b.addEventListener(a,c,void 0):b.attachEvent&&b.attachEvent("on"+a,c)},wa=function(b,a,c){b.removeEventListener?b.removeEventListener(a,c,void 0):b.detachEvent&&b.detachEvent("on"+a,c)};var xa=function(b,a){var c=void 0===c?{}:c;this.error=b;this.context=a.context;this.line=a.line||-1;this.msg=a.message||"";this.file=a.file||"";this.id=a.id||"jserror";this.meta=c};var L=null;var ya=function(b){var a=!1,c=!1;c=void 0===c?!1:c;a=void 0===a?!1:a;f.google_image_requests||(f.google_image_requests=[]);var d=f.document.createElement("img");if(a){var e=function(){if(a){var b=f.google_image_requests,c=w(b,d);0<=c&&Array.prototype.splice.call(b,c,1)}wa(d,"load",e);wa(d,"error",e)};va(d,"load",e);va(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=b;f.google_image_requests.push(d)};var za=ia(function(){var b=f.navigator&&f.navigator.userAgent||"";b=b.toLowerCase();return-1!=b.indexOf("firefox/")||-1!=b.indexOf("chrome/")||-1!=b.indexOf("opr/")}),M=function(b,a,c,d,e){d=void 0===d?"":d;var h=b.createElement("link");h.rel=c;-1!=c.toLowerCase().indexOf("stylesheet")?a=E(a):a instanceof D?a=E(a):a instanceof F?a=a instanceof F&&a.constructor===F&&a.u===da?a.g:"type_error:SafeUrl":(a instanceof F||(a=a.l?a.a():String(a),ea.test(a)||(a="about:invalid#zClosurez"),a=fa(a)),a=a.a());h.href=a;d&&"preload"==c&&(h.as=d);e&&(h.nonce=e);if(b=b.getElementsByTagName("head")[0])try{b.appendChild(h)}catch(n){}};var Aa=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ba=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,N=function(b){return Aa.test(b)&&!Ba.test(b)},Ca=function(b){return b.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},O=f,Da=function(b,a){b="https://"+("adservice"+a+"/adsid/integrator."+b);a=["domain="+encodeURIComponent(f.location.hostname)];P[3]>=+new Date&&a.push("adsid="+encodeURIComponent(P[1]));return b+"?"+a.join("&")},P,Q,R=function(){O=f;P=O.googleToken=O.googleToken||{};var b=+new Date;P[1]&&P[3]>b&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};N(Q[1])||(Q[1]=".google.com");"array"==t(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);"array"==t(Q[7])||(Q[7]=[]);"number"==typeof Q[8]||(Q[8]=0)},Ea=function(b){try{b()}catch(a){f.setTimeout(function(){throw a;},0)}},Ga=function(b){"complete"==f.document.readyState||"loaded"==f.document.readyState||f.document.currentScript&&f.document.currentScript.async?Fa(3):b()},Ha=0,S={c:function(){return 0<Q[8]},h:function(){Q[8]++},m:function(){0<Q[8]&&Q[8]--},o:function(){Q[8]=0},f:function(){},s:function(){return!1},j:function(){return Q[5]},i:Ea},T={c:function(){return Q[6]},h:function(){Q[6]=!0},m:function(){Q[6]=!1},o:function(){Q[6]=!1},f:function(){},s:function(){return".google.com"!=Q[1]&&2<++Ha},j:function(){return Q[7]},i:function(b){Ga(function(){Ea(b)})}},Fa=function(b){1E-5>Math.random()&&ya("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b)};S.f=function(){if(!S.c()){var b=f.document,a=function(a){var c=Da("js",a),d=oa();M(b,c,"preload","script",d);a=b.createElement("script");a.type="text/javascript";d&&(a.nonce=d);a.onerror=function(){return f.processGoogleToken({},2)};c=ka(c);ha(a,c);try{(b.head||b.body||b.documentElement).appendChild(a),S.h()}catch(q){}},c=Q[1];a(c);".google.com"!=c&&a(".google.com");a={};var d=(a.newToken="FBT",a);f.setTimeout(function(){return f.processGoogleToken(d,1)},1E3)}};T.f=function(){if(!T.c()){var b=f.document,a=Da("sync.js",Q[1]);M(b,a,"preload","script");a=Ca(a);var c=B("script"),d="",e=oa();e&&(d='nonce="'+Ca(e)+'"');var h="<"+c+' src="'+a+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ga(function(){b.write(h);T.h()})}};var Ia=function(b){R();P[3]>=+new Date&&P[2]>=+new Date||b.f()},Ka=function(){f.processGoogleToken=f.processGoogleToken||function(b,a){return Ja(S,b,a)};Ia(S)},La=function(){f.processGoogleTokenSync=f.processGoogleTokenSync||function(b,a){return Ja(T,b,a)};Ia(T)},Ja=function(b,a,c){a=void 0===a?{}:a;c=void 0===c?0:c;var d=a.newToken||"",e="NT"==d,h=parseInt(a.freshLifetimeSecs||"",10),n=parseInt(a.validLifetimeSecs||"",10),q=a["1p_jar"]||"";a=a.pucrd||"";R();1==c?b.o():b.m();if(!d&&b.s())N(".google.com")&&(Q[1]=".google.com"),b.f();else{var l=O.googleToken=O.googleToken||{},r=0==c&&d&&k(d)&&!e&&"number"==typeof h&&0<h&&"number"==typeof n&&0<n&&k(q);e=e&&!b.c()&&(!(P[3]>=+new Date)||"NT"==P[1]);var g=!(P[3]>=+new Date)&&0!=c;if(r||e||g)e=+new Date,h=e+1E3*h,n=e+1E3*n,Fa(c),l[5]=c,l[1]=d,l[2]=h,l[3]=n,l[4]=q,l[6]=a,R();if(r||!b.c()){c=b.j();for(d=0;d<c.length;d++)b.i(c[d]);c.length=0}}};var Ma=function(){this.a=null},Na=function(b,a){b.a=a};Ma.prototype.b=function(b,a,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;a.error&&a.meta&&a.id||(a=new xa(a,{context:b,id:void 0===e?"gpt_exception":e}));if(d||this.a)a.meta={},this.a&&this.a(a.meta),d&&d(a.meta);f.google_js_errors=f.google_js_errors||[];f.google_js_errors.push(a);f.error_rep_loaded||(a=f.document,b=a.createElement("script"),ha(b,ka(f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a),f.error_rep_loaded=!0);return!1};var Oa=function(b,a){var c=void 0===c?b.b:c;try{a()}catch(d){if(!c.call(b,420,d,.01,void 0,"gpt_exception"))throw d;}};var Pa=function(b){if(!b.google_ltobserver){var a=new b.PerformanceObserver(function(a){var c=b.google_lt_queue=b.google_lt_queue||[];ba(a.getEntries(),function(b){return c.push(b)})});a.observe({entryTypes:["longtask"]});b.google_ltobserver=a}};var Qa=["21061818","21061819","21061820"],Ra=["21060622"],Sa=["21061212","21061213","21061214","21061277"];var Ta=[[null,null,2,[null,null,"1-0-23"]]];var Ua={3:[[10,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[10,[[21061902],[21061901],[21061900]]],[10,[[21061811],[21061812,[[3,null,null,[1]]]]]],[null,[[21060157,[[null,null,2,[null,null,"1-0-23"]]]],[21060155,[[null,null,null,[null,null,null,["v","1-0-23"]],null,1]]]]],[10,[[21061870],[21061871,[[4,null,null,[1]]]]]],[10,[[21061803],[21061804]]]]};B("partner.googleadservices.com");var U=B("www.googletagservices.com"),V=!1,W=!1,X="",Y="",Va=J.a().get(46)&&!J.a().get(6);X=Va?"http:":"https:";Y=J.a().get(Va?2:3);var Wa=function(b){if(b=b.scripts)for(var a=0;a<b.length;a++){var c=b[a];if(-1<c.src.indexOf(U+"/tag/js/gpt"))return c}return null},Z=function(b,a){if(null===L){L="";try{var c="";try{c=f.top.location.hash}catch(e){c=f.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);L=d?d[1]:""}}catch(e){}}if(c=(c=L)&&c.match(new RegExp("\\b("+b.join("|")+")\\b")))b=c[0];else if(a)a:{a=b.length*a;if(!na()&&(c=Math.random(),c<a)){c=ma();b=b[Math.floor(c*b.length)];break a}b=null}else b=null;return b};(function(b){var a=new Ma;Na(a,function(b){b.methodId=420});Oa(a,function(){var a=b,d=G(),e=d.fifWin||window;a=a||e.document;var h=[],n=G();n.hasOwnProperty("cmd")||(n.cmd=h);if(d.evalScripts)d.evalScripts();else{h=J.a();(n=Z(Sa,h.get(178)))&&h.get(152).push(n);switch(n){case "21061213":W=!0;break;case "21061214":V=!0;break;case "21061277":V=W=!0}h=J.a().get(138)||Z(Ra,0)||Z(Qa,J.a().get(137))||Z(["21061149"],J.a().get(167));n=a;var q=Z(["21061590","21061591"],.001),l=J.a();l.get(219).length||l.set(219,Ta);a:{var r=l.get(210);for(g in r)if(Object.prototype.hasOwnProperty.call(r,g)){var g=!1;break a}g=!0}g&&l.set(210,Ua);q&&("21061591"==q?(l.set(173,U),l.set(174,U)):l.set(163,q),l.get(152).push(q));-1!=x.indexOf("Mobile")||J.a().set(194,0);if(g=l.get(150))R(),N(g)&&(Q[1]=g);h&&l.get(152).push(h);l.set(172,n.currentScript||Wa(n));e.PerformanceObserver&&e.PerformanceLongTaskTiming&&Pa(e);g=e;g=void 0===g?f:g;if(g=(g=g.performance)&&g.now?g.now():null)g={label:"1",type:9,value:g},e=e.google_js_reporting_queue=e.google_js_reporting_queue||[],1024>e.length&&e.push(g);e=J.a();if(g=e.get(76))var v=g;else{l=["194","195"];g=l[0]||"195";n="";if(e.get(131))v="195";else if(1<l.length){q=["21061884","21061885"];var u=[""];if(1>=u.length||q.length!=u.length)u=[];if(r=Z(ca(q,u),.1)){e.set(53,r);var y=0<=w(u,r);e.set(170,y);y&&(q=u);u=q[0];if(r!=u)for(y=1;y<q.length;++y)if(r==q[y]){v=l[y];break}if(r==u||parseInt(v,10)<parseInt(g,10))l=l[q.length-1],n="?v="+l,e.set(163,l)}}g=X+"//"+Y+"/gpt/pubads_impl_"+(v||g)+".js"+n;J.a().set(76,g);v=g}e=a.currentScript;if(!("complete"==a.readyState||"loaded"==a.readyState||e&&e.async)){e="gpt-impl-"+Math.random();try{g='<script id="'+e+'" src="'+v+'">\x3c/script>',V&&za()&&(g+='<link rel="preconnect" href="'+X+"//"+Y+'">'),a.write(g)}catch(Xa){}a.getElementById(e)&&(d._loadStarted_=!0,J.a().set(220,!1),"21061818"!=h&&"21060622"!=h&&"21061149"!=h||La())}d._loadStarted_||("21061818"!=h&&"21060622"!=h&&"21061149"!=h||Ka(),W&&M(a,v,"preload","script"),h=a.createElement("script"),h.src=v,h.async=!0,(a.head||a.body||a.documentElement).appendChild(h),V&&za()&&M(a,X+"//"+Y,"preconnect"),J.a().set(220,!0),d._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
