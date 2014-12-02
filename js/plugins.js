// Avoid `console` errors in browsers that lack a console.
(function(){for(var a,e=function(){},b="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),c=b.length,d=window.console=window.console||{};c--;)a=b[c],d[a]||(d[a]=e)})();


/*
 * ! matchMedia() polyfill - Test a CSS media type/query in JS. Authors &
 * copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight.
 * Dual MIT/BSD license
 */
window.matchMedia||(window.matchMedia=function(){var d=window.b||window.media;if(!d){var a=document.createElement("style"),e=document.getElementsByTagName("script")[0],f=null;a.type="text/css";a.id="matchmediajs-test";e.parentNode.insertBefore(a,e);f="getComputedStyle"in window&&window.getComputedStyle(a,null)||a.currentStyle;d={a:function(c){c="@media "+c+"{ #matchmediajs-test { width: 1px; } }";a.styleSheet?a.styleSheet.cssText=c:a.textContent=c;return"1px"===f.width}}}return function(a){return{matches:d.a(a||"all"),media:a||"all"}}}());


/*
 * ! enquire.js v2.1.0 - Awesome Media Queries in JavaScript JavaScript
 * callbacks for media queries matching and unmatching. Copyright (c) 2013 Nick
 * Williams - http://wicky.nillia.ms/enquire.js License: MIT
 * (http://www.opensource.org/licenses/mit-license.php)
 */
(function(t,i,n){var e=i.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(e):"function"==typeof define&&define.amd?define(function(){return i[t]=n(e)}):i[t]=n(e)})("enquire",this,function(t){"use strict";function i(t,i){var n,e=0,s=t.length;for(e;s>e&&(n=i(t[e],e),n!==!1);e++);}function n(t){return"[object Array]"===Object.prototype.toString.apply(t)}function e(t){return"function"==typeof t}function s(t){this.options=t,!t.deferSetup&&this.setup()}function o(i,n){this.query=i,this.isUnconditional=n,this.handlers=[],this.mql=t(i);var e=this;this.listener=function(t){e.mql=t,e.assess()},this.mql.addListener(this.listener)}function r(){if(!t)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return s.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},o.prototype={addHandler:function(t){var i=new s(t);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(t){var n=this.handlers;i(n,function(i,e){return i.equals(t)?(i.destroy(),!n.splice(e,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";i(this.handlers,function(i){i[t]()})}},r.prototype={register:function(t,s,r){var h=this.queries,u=r&&this.browserIsIncapable;return h[t]||(h[t]=new o(t,u)),e(s)&&(s={match:s}),n(s)||(s=[s]),i(s,function(i){h[t].addHandler(i)}),this},unregister:function(t,i){var n=this.queries[t];return n&&(i?n.removeHandler(i):(n.clear(),delete this.queries[t])),this}},new r});


/*
 * ! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl.
 * MIT/GPLv2 Lic. j.mp/respondjs Enable responsive web designs in browsers that
 * don't support CSS3 Media Queries - in particular, Internet Explorer 8 and
 * under.
 */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);


/*
 * ! FooTable - Awesome Responsive Tables Version : 2.0.1.2
 * http://fooplugins.com/plugins/footable-jquery/
 * 
 * Requires jQuery - http://jquery.com/
 * 
 * Copyright 2013 Steven Usher & Brad Vincent Released under the MIT license You
 * are free to use FooTable in commercial projects as long as this copyright
 * header is left intact.
 * 
 * Date: 21 Sep 2013
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(h($,w,4E){w.l={F:{3b:4G,1j:{4z:4t,4v:4w},2S:{2m:h(1h){r $(1h).6(\'1Y\')||$.2e($(1h).2R())},4y:h(1h){7 1G=$(1h).6(\'1Y\')||$(1h).2R().4I(/[^0-9.\\-]/g,\'\');1G=4P(1G);k(4V(1G))1G=0;r 1G}},2k:y,2n:N,1H:\' > W > u:V(.l-f-z)\',3p:\'> T > u:Z-12 > x, > T > u:Z-12 > I\',3V:\':\',2A:\'<2M />\',1X:h(6){7 U={\'2o\':{\'v\':N,\'6\':[]}};R(7 i=0;i<6.18;i++){7 1L=6[i].q;k(1L!==N){k(!(1L 1a U))U[1L]={\'v\':6[i].1P||6[i].q,\'6\':[]};U[1L].6.1l(6[i])}1z{U.2o.6.1l(6[i])}}r U},3X:h(2z,6,1X,3m,1v){7 U=1X(6);R(7 q 1a U){k(U[q].6.18===0)3T;k(q!==\'2o\')2z.2C(\'<17 1r="\'+1v.35+\'">\'+U[q].v+\'</17>\');R(7 j=0;j<U[q].6.18;j++){7 3e=(U[q].6[j].v)?3m:\'\';2z.2C(\'<17 1r="\'+1v.36+\'"><17 1r="\'+1v.38+\'">\'+U[q].6[j].v+3e+\'</17><17 1r="\'+1v.3c+\'">\'+U[q].6[j].3v+\'</17></17>\')}}},1v:{30:\'l\',1J:\'l-1J\',1q:\'l-1q\',1e:\'l-1e\',2f:\'l-2f\',z:\'l-f-z\',1N:\'l-f-z-1h\',2V:\'l-f-z-46\',36:\'l-f-z-f\',35:\'l-f-z-q\',38:\'l-f-z-v\',3c:\'l-f-z-1Y\',14:\'l-z-1K\'},3f:{2b:\'4b\',11:\'4d\',1x:\'4e\',1m:\'4l\',2N:\'4f\',2O:\'4g\',2T:\'4a\'},3j:{3h:\'4c\',3i:\'4h\',2Y:\'4i\',3L:\'4o\',3y:\'4p\',3s:\'4n\',J:\'4j\',3P:\'4k\',3C:\'49\',3B:\'3Z\',3u:\'40\',3A:\'48\',3J:\'47\',2W:\'42\'},1n:H,24:N},1t:{2H:0,2I:5,45:h(){r w.l.1t.2H+\'.\'+w.l.1t.2I},2c:h(39){1t=/(\\d+)\\.?(\\d+)?\\.?(\\d+)?/.44(39);r{2H:1p(1t[1],10)||0,2I:1p(1t[2],10)||0,4N:1p(1t[3],10)||0}}},16:{34:h(19){k(!$.26(19)){k(w.l.F.1n===y)1A.1S(\'2i 2F, 4O 1C "h", 4M 1C "{0}".\',2U 19);r H}7 p=1T 19();k(2U p[\'v\']!==\'3a\'){k(w.l.F.1n===y)1A.1S(\'2i 2F, 19 37 V 33 a 3a 4L 32 "v".\',p);r H}k(!$.26(p[\'1u\'])){k(w.l.F.1n===y)1A.1S(\'2i 2F, 19 "\'+p[\'v\']+\'" 37 V 33 a h 32 "1u".\',p);r H}k(w.l.F.1n===y)1A.24(\'2i 4K R 19 "\'+p[\'v\']+\'".\',p);r y},1y:[],3g:h(19,F){k(w.l.16.34(19)){w.l.16.1y.1l(19);k(2U F===\'4Q\')$.27(y,w.l.F,F)}},3k:h(1D){7 1q=[],1y,i;R(i=0;i<w.l.16.1y.18;i++){3d{1y=w.l.16.1y[i];1q.1l(1T 1y(1D))}3l(1W){k(w.l.F.1n===y)1A.1S(1W)}}r 1q},1u:h(1D){R(7 i=0;i<1D.16.18;i++){3d{1D.16[i][\'1u\'](1D)}3l(1W){k(w.l.F.1n===y)1A.1S(1W)}}}}};7 2P=0;$.4S.l=h(F){F=F||{};7 o=$.27(y,{},w.l.F,F);r K.1k(h(){2P++;7 l=1T 3o(K,o,2P);$(K).6(\'l\',l)})};h 2q(){7 t=K;t.1f=N;t.1Q=H;t.2Z=h(31,3n){k(t.1Q){r}t.2E();t.1f=4H(h(){31();t.1f=N;t.1Q=H},3n);t.1Q=y};t.2E=h(){k(t.1f!==N){4x(t.1f);t.1f=N;t.1Q=H}}}h 3o(t,o,1f){7 4=K;4.1f=1f;4.8=t;4.F=o;4.1j=[];4.2s=\'\';4.S={};4.16=w.l.16.3k(4);7 C=4.F,n=C.1v,P=C.3j,B=C.3f,2y=0;4.1I={11:1T 2q(),3g:h(v){4.1I[v]=1T 2q();r 4.1I[v]}};4.1u=h(){7 $2j=$(w),$8=$(4.8);w.l.16.1u(4);k($8.1F(n.1q)){4.O(P.3h);r}4.O(P.3i);$8.15(n.1J);$8.s(C.3p).1k(h(){7 6=4.3S(K);4.S[6.Q]=6});R(7 v 1a C.1j){4.1j.1l({\'v\':v,\'M\':C.1j[v]});4.2s+=(v+\' \')}4.1j.4F(h(a,b){r a[\'M\']-b[\'M\']});$8.1b(B.2b).1g(B.2b,h(){$8.3D(\'2d\');$8.6(\'J\',\'\');$8.1o(B.11);$8.1c(n.1J);$8.15(n.1q).15(n.30);4.O(P.2Y)}).1b(B.1x).1g(B.1x,h(){4.1x()}).1b(B.11).1g(B.11,h(){4.11()}).1b(B.2N).1g(B.2N,h(){$8.s(C.1H).L().V(\'.\'+n.14).1o(B.1m)}).1b(B.2O).1g(B.2O,h(){$8.s(C.1H).V(\'.\'+n.14).1o(B.1m)}).1b(B.2T).1g(B.2T,h(){$8.s(\'.\'+n.14).1o(B.1m)});$8.1o(B.2b);$2j.1g(\'11.l\',h(){4.1I.11.2E();4.1I.11.2Z(h(){4.O(B.11)},C.3b)})};4.2k=h(){k(!C.2k)r;7 $8=$(4.8),2J=H;$8.s(\'2M.\'+n.1e).21();R(7 c 1a 4.S){7 1s=4.S[c];k(1s.1e){2J=y;7 X=\'> W > u:V(.\'+n.z+\',.\'+n.2f+\') > I:1M-12(\'+(1p(1s.Q,10)+1)+\')\';$8.s(X).V(\'.\'+n.1N).3G($(C.2A).15(n.1e));r}}k(!2J){$8.s(\'> W > u:V(.\'+n.z+\',.\'+n.2f+\') > I:L-12\').V(\'.\'+n.1N).3G($(C.2A).15(n.1e))}};4.3M=h(){$8=$(4.8);R(7 c 1a 4.S){7 1s=4.S[c];k(1s.2v!==N){7 X=\'\',L=y;$.1k(1s.1E,h(m,20){k(!L)X+=\', \';X+=\'> W > u:V(.\'+n.z+\') > I:1M-12(\'+(1p(20,10)+1)+\')\';L=H});$8.s(X).V(\'.\'+n.1N).15(1s.2v)}}};4.3w=h(){7 $8=$(4.8);k(!4.2r())r;$8.s(C.1H).1b(B.1m).1g(B.1m,h(e){7 $f=$(K).1R(\'u\')?$(K):$(K).4C(\'u:L\');4.3t($f)});$8.s(C.1H).1b(\'2w.l\').1g(\'2w.l\',h(e){k($8.1R(\'.J\')&&$(e.4B).1R(\'I, I 2M,.\'+n.1e)){$(K).1o(B.1m)}})};4.2c=h(1h,A){7 3U=C.2S[A.1C]||C.2S.2m;r 3U(1h)};4.3S=h(x){7 $x=$(x),G=$x.6(\'G\'),Q=$x.Q();G=G||\'\';G=2g.4D(G.3R(\',\'),h(a){r 2g.2e(a)});7 6={\'Q\':Q,\'G\':{},\'1C\':$x.6(\'1C\')||\'2m\',\'v\':$x.6(\'v\')||$.2e($x.2R()),\'2l\':$x.6(\'2l\')||H,\'1e\':$x.6(\'1e\')||H,\'2v\':$x.6(\'1r\')||N,\'1E\':[],\'Y\':{},\'q\':$x.6(\'q\')||N,\'1P\':N};k(6.q!==N){7 $q=$(4.8).s(\'> T > u.l-q-f > x[6-q="\'+6.q+\'"], > T > u.l-q-f > I[6-q="\'+6.q+\'"]\').L();6.1P=4.2c($q,{\'1C\':\'2m\'})}7 2u=1p($x.3I().1O(\'13\')||0,10);2y+=2u>1?2u-1:0;7 13=1p($x.1O(\'13\')||0,10),2h=6.Q+2y;k(13>1){7 Y=$x.6(\'Y\');Y=Y||\'\';Y=Y.3R(\',\');R(7 i=0;i<13;i++){6.1E.1l(i+2h);k(i<Y.18)6.Y[i+2h]=Y[i]}}1z{6.1E.1l(2h)}6.G[\'28\']=($x.6(\'G\')==="3O")||($.2B(\'28\',G)>=0);7 1B=H;R(7 v 1a C.1j){6.G[v]=($x.6(\'G\')==="3O")||($.2B(v,G)>=0);1B=1B||6.G[v]}6.1B=1B;7 e=4.O(P.3P,{\'A\':{\'6\':6,\'x\':x}});r e.A.6};4.3W=h(){r 2j.4A||(3N.3Q?3N.3Q.4u:0)};4.3q=h($8,D){k(2g.26(C.2n)){r C.2n($8,D)}k(D.2x<D.M)D.M=D.2x;k(D.2t<D.M)D.M=D.2t;r D};4.2L=h(J){R(7 c 1a 4.S){k(4.S[c].G[J]){k(4.S[c].2l){3T}r y}}r H};4.2r=h(){R(7 c 1a 4.S){k(4.S[c].1B){r y}}r H};4.11=h(){7 $8=$(4.8);k(!$8.1R(\':1d\')){r}k(!4.2r()){r}7 D={\'M\':$8.M(),\'2x\':4.3W(),\'2t\':$8.4s().M()};D=4.3q($8,D);7 1w=$8.6(\'2d\');$8.6(\'2d\',D);4.O(P.3L,{\'3z\':1w,\'D\':D});k(!1w||(1w&&1w.M&&1w.M!==D.M)){7 22=N,J;R(7 i=0;i<4.1j.18;i++){J=4.1j[i];k(J&&J.M&&D.M<=J.M){22=J;3K}}7 1i=(22===N?\'28\':22[\'v\']),1Z=4.2L(1i),3x=$8.6(\'J\');$8.6(\'J\',1i).1c(\'28 J\').1c(4.2s).15(1i+(1Z?\' J\':\'\'));k(1i!==3x){$8.1o(B.1x);4.O(P.J,{\'J\':1i,\'D\':D})}}4.O(P.3y,{\'3z\':1w,\'D\':D})};4.1x=h(){4.2k();4.3w();4.3M();7 $8=$(4.8),1i=$8.6(\'J\'),1Z=4.2L(1i);$8.s(\'> W > u:V(.\'+n.z+\')\').6(\'29\',H).2X().s(\'> T > u:Z-12 > x\').1k(h(){7 6=4.S[$(K).Q()],X=\'\',L=y;$.1k(6.1E,h(m,20){k(!L){X+=\', \'}7 25=20+1;X+=\'> W > u:V(.\'+n.z+\') > I:1M-12(\'+25+\')\';X+=\', > 4R > u:V(.\'+n.z+\') > I:1M-12(\'+25+\')\';X+=\', > 4T > 1s:1M-12(\'+25+\')\';L=H});X+=\', > T > u[6-q-f="y"] > x[6-q="\'+6.q+\'"]\';7 $A=$8.s(X).4U(K);k(6.G[1i]===H)$A.1K();1z $A.G();k($8.s(\'> T > u.l-q-f\').18===1){7 $3r=$8.s(\'> T > u:Z-12 > x[6-q="\'+6.q+\'"]:1d, > T > u:Z-12 > x[6-q="\'+6.q+\'"]:1d\'),$q=$8.s(\'> T > u.l-q-f > x[6-q="\'+6.q+\'"], > T > u.l-q-f > I[6-q="\'+6.q+\'"]\'),2a=0;$.1k($3r,h(){2a+=1p($(K).1O(\'13\')||1,10)});k(2a>0)$q.1O(\'13\',2a).1K();1z $q.G()}}).2X().s(\'> W > u.\'+n.14).1k(h(){4.2K(K)});$8.s(\'> W > u.\'+n.14+\':1d\').1k(h(){7 $E=$(K).E();k($E.1F(n.z)){k(!1Z)$E.G();1z $E.1K()}});$8.s(\'> T > u > x.l-Z-A, > W > u > I.l-Z-A\').1c(\'l-Z-A\');$8.s(\'> T > u > x.l-L-A, > W > u > I.l-L-A\').1c(\'l-L-A\');$8.s(\'> T > u, > W > u\').s(\'> x:1d:Z, > I:1d:Z\').15(\'l-Z-A\').2X().s(\'> x:1d:L, > I:1d:L\').15(\'l-L-A\');4.O(P.3s)};4.3t=h(f){7 $f=(f.2D)?f:$(f),$E=$f.E();k($f.1F(n.14)){$f.1c(n.14);k($E.1F(n.z))$E.G();4.O(P.3u,{\'f\':$f[0]})}1z{4.2K($f[0]);$f.15(n.14).E().1K();4.O(P.3A,{\'f\':$f[0]})}};4.4r=h(f){7 $f=(f.2D)?f:$(f);k($f.1F(n.z)){$f=$f.3I()}7 $E=$f.E();k($f.6(\'29\')===y){$E.21()}$f.21();4.O(P.3J)};4.4J=h(f){7 $f=(f.2D)?f:$(f);$(4.8).s(\'W\').2C($f);4.1x()};4.3F=h(Q){7 2G=N;R(7 A 1a 4.S){k($.2B(Q,4.S[A].1E)>=0){2G=4.S[A];3K}}r 2G};4.2K=h(3H){7 $f=$(3H),$E=$f.E(),$z,1U=[];k($f.6(\'29\')===y)r y;k($f.1R(\':3E\'))r H;4.O(P.3C,{\'f\':$f,\'z\':$E});$f.s(\'> I:3E\').1k(h(){7 Q=$(K).Q(),A=4.3F(Q),v=A.v;k(A.2l===y)r y;k(Q 1a A.Y)v=A.Y[Q];1U.1l({\'v\':v,\'1Y\':4.2c(K,A),\'3v\':$.2e($(K).4m()),\'q\':A.q,\'1P\':A.1P});r y});k(1U.18===0)r H;7 13=$f.s(\'> I:1d\').18;7 2Q=$E.1F(n.z);k(!2Q){$E=$(\'<u 1r="\'+n.z+\'"><I 1r="\'+n.1N+\'"><17 1r="\'+n.2V+\'"></17></I></u>\');$f.41($E)}$E.s(\'> I:L\').1O(\'13\',13);$z=$E.s(\'.\'+n.2V).3Y();C.3X($z,1U,C.1X,C.3V,n);$f.6(\'29\',y);4.O(P.3B,{\'f\':$f,\'z\':$E});r!2Q};4.O=h(2p,1V){k(4.F.1n===y&&$.26(4.F.24))4.F.24(2p,\'43\');1V=1V||{};7 23={\'4\':4};$.27(y,23,1V);7 e=$.4q(2p,23);k(!e.4){$.27(y,e,23)}$(4.8).1o(e);r e};4.2W=h(){7 $8=$(4.8);$8.3D(\'2d\').6(\'J\',\'\').1c(n.1J).1c(n.1q);$8.s(C.1H).1b(B.1m).1b(\'2w.l\');$8.s(\'> W > u\').1c(n.14);$8.s(\'> W > u.\'+n.z).21();4.O(P.2W)};4.1u();r 4}})(2g,2j);',62,306,'||||ft||data|var|table|||||||row||function|||if|footable||cls|||group|return|find||tr|name||th|true|detail|column|trg|opt|info|next|options|hide|false|td|breakpoint|this|first|width|null|raise|evt|index|for|columns|thead|groups|not|tbody|selector|names|last||resize|child|colspan|detailShow|addClass|plugins|div|length|plugin|in|unbind|removeClass|visible|toggle|id|bind|cell|breakpointName|breakpoints|each|push|toggleRow|debug|trigger|parseInt|loaded|class|col|version|init|classes|pinfo|redraw|registered|else|console|hasBreakpoint|type|instance|matches|hasClass|val|toggleSelector|timers|loading|show|groupid|nth|detailCell|attr|groupName|busy|is|error|new|values|args|err|createGroupedDetail|value|hasBreakpointFired|match|remove|current|def|log|count|isFunction|extend|default|detail_created|groupspan|initialize|parse|footable_info|trim|disabled|jQuery|curindex|Validation|window|addRowToggle|ignore|alpha|calculateWidthOverride|_none|eventName|Timer|hasAnyBreakpointColumn|breakpointNames|parentWidth|pcolspan|className|click|viewportWidth|indexOffset|element|toggleHTMLElement|inArray|append|jquery|stop|failed|result|major|minor|hasToggleColumn|createOrUpdateDetailRow|hasBreakpointColumn|span|expandFirstRow|expandAll|instanceCount|exists|text|parsers|collapseAll|typeof|detailInner|reset|end|initialized|start|main|code|called|implement|_validate|detailInnerGroup|detailInnerRow|does|detailInnerName|str|string|delay|detailInnerValue|try|separator|triggers|register|alreadyInitialized|initializing|events|load|catch|separatorChar|milliseconds|Footable|columnDataSelector|calculateWidth|groupcols|redrawn|toggleDetail|rowCollapsed|display|bindToggleSelectors|previousBreakpoint|resized|old|rowExpanded|rowDetailUpdated|rowDetailUpdating|removeData|hidden|getColumnFromTdIndex|prepend|actualRow|prev|rowRemoved|break|resizing|setColumnClasses|document|all|columnData|body|split|getColumnData|continue|parser|detailSeparator|getViewportWidth|createDetail|empty|footable_row_detail_updated|footable_row_collapsed|after|footable_reset|event|exec|toString|inner|footable_row_removed|footable_row_expanded|footable_row_detail_updating|footable_collapse_all|footable_initialize|footable_already_initialized|footable_resize|footable_redraw|footable_expand_first_row|footable_expand_all|footable_initializing|footable_initialized|footable_breakpoint|footable_column_data|footable_toggle_row|html|footable_redrawn|footable_resizing|footable_resized|Event|removeRow|parent|480|offsetWidth|tablet|1024|clearTimeout|numeric|phone|innerWidth|target|parents|map|undefined|sort|100|setTimeout|replace|appendRow|succeeded|property|received|patch|expected|parseFloat|object|tfoot|fn|colgroup|add|isNaN'.split('|')));



/*
 * jQuery Form Plugin @requires jQuery v1.1 or later
 * 
 * Examples at: http://malsup.com/jquery/form/ Dual licensed under the MIT and
 * GPL licenses: http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Revision: $Id: jquery.form.js 3028 2007-08-31 13:37:36Z joern.zaefferer $
 */
 (function($) {
/**
 * ajaxSubmit() provides a mechanism for submitting an HTML form using AJAX.
 * 
 * ajaxSubmit accepts a single argument which can be either a success callback
 * function or an options Object. If a function is provided it will be invoked
 * upon successful completion of the submit and will be passed the response from
 * the server. If an options Object is provided, the following attributes are
 * supported:
 * 
 * target: Identifies the element(s) in the page to be updated with the server
 * response. This value may be specified as a jQuery selection string, a jQuery
 * object, or a DOM element. default value: null
 * 
 * url: URL to which the form data will be submitted. default value: value of
 * form's 'action' attribute
 * 
 * type: The method in which the form data should be submitted, 'GET' or 'POST'.
 * default value: value of form's 'method' attribute (or 'GET' if none found)
 * 
 * data: Additional data to add to the request, specified as key/value pairs
 * (see $.ajax).
 * 
 * beforeSubmit: Callback method to be invoked before the form is submitted.
 * default value: null
 * 
 * success: Callback method to be invoked after the form has been successfully
 * submitted and the response has been returned from the server default value:
 * null
 * 
 * dataType: Expected dataType of the response. One of: null, 'xml', 'script',
 * or 'json' default value: null
 * 
 * semantic: Boolean flag indicating whether data must be submitted in semantic
 * order (slower). default value: false
 * 
 * resetForm: Boolean flag indicating whether the form should be reset if the
 * submit is successful
 * 
 * clearForm: Boolean flag indicating whether the form should be cleared if the
 * submit is successful
 * 
 * 
 * The 'beforeSubmit' callback can be provided as a hook for running pre-submit
 * logic or for validating the form data. If the 'beforeSubmit' callback returns
 * false then the form will not be submitted. The 'beforeSubmit' callback is
 * invoked with three arguments: the form data in array format, the jQuery
 * object, and the options object passed into ajaxSubmit. The form data array
 * takes the following form: [ { name: 'username', value: 'jresig' }, { name:
 * 'password', value: 'secret' } ]
 * 
 * If a 'success' callback method is provided it is invoked after the response
 * has been returned from the server. It is passed the responseText or
 * responseXML value (depending on dataType). See jQuery.ajax for further
 * details.
 * 
 * 
 * The dataType option provides a means for specifying how the server response
 * should be handled. This maps directly to the jQuery.httpData method. The
 * following values are supported:
 * 
 * 'xml': if dataType == 'xml' the server response is treated as XML and the
 * 'success' callback method, if specified, will be passed the responseXML value
 * 'json': if dataType == 'json' the server response will be evaluted and passed
 * to the 'success' callback, if specified 'script': if dataType == 'script' the
 * server response is evaluated in the global context
 * 
 * 
 * Note that it does not make sense to use both the 'target' and 'dataType'
 * options. If both are provided the target will be ignored.
 * 
 * The semantic argument can be used to force form serialization in semantic
 * order. This is normally true anyway, unless the form contains input elements
 * of type='image'. If your form must be submitted with name/value pairs in
 * semantic order and your form contains an input of type='image" then pass true
 * for this arg, otherwise pass false (or nothing) to avoid the overhead for
 * this logic.
 * 
 * 
 * When used on its own, ajaxSubmit() is typically bound to a form's submit
 * event like this:
 * 
 * $("#form-id").submit(function() { $(this).ajaxSubmit(options); return false; //
 * cancel conventional submit });
 * 
 * When using ajaxForm(), however, this is done for you.
 * 
 * @example $('#myForm').ajaxSubmit(function(data) { alert('Form submit
 *          succeeded! Server returned: ' + data); });
 * @desc Submit form and alert server response
 * 
 * 
 * @example var options = { target: '#myTargetDiv' };
 *          $('#myForm').ajaxSubmit(options);
 * @desc Submit form and update page element with server response
 * 
 * 
 * @example var options = { success: function(responseText) {
 *          alert(responseText); } }; $('#myForm').ajaxSubmit(options);
 * @desc Submit form and alert the server response
 * 
 * 
 * @example var options = { beforeSubmit: function(formArray, jqForm) { if
 *          (formArray.length == 0) { alert('Please enter data.'); return false; } } };
 *          $('#myForm').ajaxSubmit(options);
 * @desc Pre-submit validation which aborts the submit operation if form data is
 *       empty
 * 
 * 
 * @example var options = { url: myJsonUrl.php, dataType: 'json', success:
 *          function(data) { // 'data' is an object representing the the
 *          evaluated json data } }; $('#myForm').ajaxSubmit(options);
 * @desc json data returned and evaluated
 * 
 * 
 * @example var options = { url: myXmlUrl.php, dataType: 'xml', success:
 *          function(responseXML) { // responseXML is XML document object var
 *          data = $('myElement', responseXML).text(); } };
 *          $('#myForm').ajaxSubmit(options);
 * @desc XML data returned from server
 * 
 * 
 * @example var options = { resetForm: true }; $('#myForm').ajaxSubmit(options);
 * @desc submit form and reset it if successful
 * 
 * @example $('#myForm).submit(function() { $(this).ajaxSubmit(); return false;
 *          });
 * @desc Bind form's submit event to use ajaxSubmit
 * 
 * 
 * @name ajaxSubmit
 * @type jQuery
 * @param options
 *            object literal containing options which control the form
 *            submission process
 * @cat Plugins/Form
 * @return jQuery
 */
$.fn.ajaxSubmit = function(options) {
    if (typeof options == 'function')
        options = { success: options };

    options = $.extend({
        url:  this.attr('action') || window.location,
        type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    $.event.trigger('form.pre.serialize', [this, options, veto]);
    if (veto.veto) return this;

    var a = this.formToArray(options.semantic);
	if (options.data) {
	    for (var n in options.data)
	        a.push( { name: n, value: options.data[n] } );
	}

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

    // fire vetoable 'validate' event
    $.event.trigger('form.submit.validate', [a, this, options, veto]);
    if (veto.veto) return this;

    var q = $.param(a);// .replace(/%20/g,'+');

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else
        options.data = q; // data is the query string for 'post'

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            if (this.evalScripts)
                $(options.target).attr("innerHTML", data).evalScripts().each(oldSuccess, arguments);
            else // jQuery v1.1.4
                $(options.target).html(data).each(oldSuccess, arguments);
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i](data, status, $form);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

    if (options.iframe || found) // options.iframe allows user to force
                                    // iframe mode
        fileUpload();
    else
        $.ajax(options);

    // fire 'notify' event
    $.event.trigger('form.submit.notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];
        var opts = $.extend({}, $.ajaxSettings, options);

        var id = 'jqFormIO' + $.fn.ajaxSubmit.counter++;
        var $io = $('<iframe id="' + id + '" name="' + id + '" />');
        var io = $io[0];
        var op8 = $.browser.opera && window.opera.version() < 9;
        if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {}
        };

        var g = opts.global;
        // trigger ajax global events so that activity/block indicators work
        // like normal
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

        var cbInvoked = 0;
        var timedOut = 0;

        // take a breath so that pending repaints get some cpu time before the
        // upload starts
        setTimeout(function() {
            $io.appendTo('body');
            // jQuery's event binding doesn't work for iframe events in IE
            io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);

            // make sure form attrs are set
            var encAttr = form.encoding ? 'encoding' : 'enctype';
            var t = $form.attr('target');
            $form.attr({
                target:   id,
                method:  'POST',
                action:   opts.url
            });
            form[encAttr] = 'multipart/form-data';

            // support timout
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

            form.submit();
            $form.attr('target', t); // reset target
        }, 10);

        function cb() {
            if (cbInvoked++) return;

            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                // extract the server response from the iframe
                var data, doc;
                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    data = ta ? ta.value : xhr.responseText;
                    if (opts.dataType == 'json')
                        eval("data = " + data);
                    else
                        $.globalEval(data);
                }
                else if (opts.dataType == 'xml') {
                    data = xhr.responseXML;
                    if (!data && xhr.responseText != null)
                        data = toXml(xhr.responseText);
                }
                else {
                    data = xhr.responseText;
                }
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            // ordering of these callbacks/triggers is odd, but that's how
            // $.ajax does it
            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            // clean up
            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};
$.fn.ajaxSubmit.counter = 0; // used to create unique iframe ids

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 * 
 * The advantages of using this method instead of ajaxSubmit() are:
 * 
 * 1: This method will include coordinates for <input type="image" /> elements
 * (if the element is used to submit the form). 2. This method will include the
 * submit element's name/value data (for the element that was used to submit the
 * form). 3. This method binds the submit() method to the form for you.
 * 
 * Note that for accurate x/y coordinates of image submit elements in all
 * browsers you need to also use the "dimensions" plugin (this method will
 * auto-detect its presence).
 * 
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.
 * ajaxForm merely passes the options argument along after properly binding
 * events for submit elements and the form itself. See ajaxSubmit for a full
 * description of the options argument.
 * 
 * 
 * @example var options = { target: '#myTargetDiv' };
 *          $('#myForm').ajaxSForm(options);
 * @desc Bind form's submit event so that 'myTargetDiv' is updated with the
 *       server response when the form is submitted.
 * 
 * 
 * @example var options = { success: function(responseText) {
 *          alert(responseText); } }; $('#myForm').ajaxSubmit(options);
 * @desc Bind form's submit event so that server response is alerted after the
 *       form is submitted.
 * 
 * 
 * @example var options = { beforeSubmit: function(formArray, jqForm) { if
 *          (formArray.length == 0) { alert('Please enter data.'); return false; } } };
 *          $('#myForm').ajaxSubmit(options);
 * @desc Bind form's submit event so that pre-submit callback is invoked before
 *       the form is submitted.
 * 
 * 
 * @name ajaxForm
 * @param options
 *            object literal containing options which control the form
 *            submission process
 * @return jQuery
 * @cat Plugins/Form
 * @type jQuery
 */
$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().submit(submitHandler).each(function() {
        // store options in hash
        this.formPluginId = $.fn.ajaxForm.counter++;
        $.fn.ajaxForm.optionHash[this.formPluginId] = options;
        $(":submit,input:image", this).click(clickHandler);
    });
};

$.fn.ajaxForm.counter = 1;
$.fn.ajaxForm.optionHash = {};

function clickHandler(e) {
    var $form = this.form;
    $form.clk = this;
    if (this.type == 'image') {
        if (e.offsetX != undefined) {
            $form.clk_x = e.offsetX;
            $form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') { // try to use dimensions
                                                        // plugin
            var offset = $(this).offset();
            $form.clk_x = e.pageX - offset.left;
            $form.clk_y = e.pageY - offset.top;
        } else {
            $form.clk_x = e.pageX - this.offsetLeft;
            $form.clk_y = e.pageY - this.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { $form.clk = $form.clk_x = $form.clk_y = null; }, 10);
};

function submitHandler() {
    // retrieve options from hash
    var id = this.formPluginId;
    var options = $.fn.ajaxForm.optionHash[id];
    $(this).ajaxSubmit(options);
    return false;
};

/**
 * ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
 * 
 * @name ajaxFormUnbind
 * @return jQuery
 * @cat Plugins/Form
 * @type jQuery
 */
$.fn.ajaxFormUnbind = function() {
    this.unbind('submit', submitHandler);
    return this.each(function() {
        $(":submit,input:image", this).unbind('click', clickHandler);
    });

};

/**
 * formToArray() gathers form element data into an array of objects that can be
 * passed to any of the following ajax functions: $.get, $.post, or load. Each
 * object in the array has both a 'name' and 'value' property. An example of an
 * array for a simple login form might be: [ { name: 'username', value: 'jresig' }, {
 * name: 'password', value: 'secret' } ]
 * 
 * It is this array that is passed to pre-submit callback functions provided to
 * the ajaxSubmit() and ajaxForm() methods.
 * 
 * The semantic argument can be used to force form serialization in semantic
 * order. This is normally true anyway, unless the form contains input elements
 * of type='image'. If your form must be submitted with name/value pairs in
 * semantic order and your form contains an input of type='image" then pass true
 * for this arg, otherwise pass false (or nothing) to avoid the overhead for
 * this logic.
 * 
 * @example var data = $("#myForm").formToArray(); $.post( "myscript.cgi", data );
 * @desc Collect all the data from a form and submit it to the server.
 * 
 * @name formToArray
 * @param semantic
 *            true if serialization must maintain strict semantic ordering of
 *            elements (slower)
 * @type Array<Object>
 * @cat Plugins/Form
 */
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle them here
        var inputs = form.getElementsByTagName("input");
        for(var i=0, max=inputs.length; i < max; i++) {
            var input = inputs[i];
            var n = input.name;
            if(n && !input.disabled && input.type == "image" && form.clk == input)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};


/**
 * Serializes form data into a 'submittable' string. This method will return a
 * string in the format: name1=value1&amp;name2=value2
 * 
 * The semantic argument can be used to force form serialization in semantic
 * order. If your form must be submitted with name/value pairs in semantic order
 * then pass true for this arg, otherwise pass false (or nothing) to avoid the
 * overhead for this logic (which can be significant for very large forms).
 * 
 * @example var data = $("#myForm").formSerialize(); $.ajax('POST',
 *          "myscript.cgi", data);
 * @desc Collect all the data from a form into a single string
 * 
 * @name formSerialize
 * @param semantic
 *            true if serialization must maintain strict semantic ordering of
 *            elements (slower)
 * @type String
 * @cat Plugins/Form
 */
$.fn.formSerialize = function(semantic) {
    // hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};


/**
 * Serializes all field elements in the jQuery object into a query string. This
 * method will return a string in the format: name1=value1&amp;name2=value2
 * 
 * The successful argument controls whether or not serialization is limited to
 * 'successful' controls (per
 * http://www.w3.org/TR/html4/interact/forms.html#successful-controls). The
 * default value of the successful argument is true.
 * 
 * @example var data = $("input").formSerialize();
 * @desc Collect the data from all successful input elements into a query string
 * 
 * @example var data = $(":radio").formSerialize();
 * @desc Collect the data from all successful radio input elements into a query
 *       string
 * 
 * @example var data = $("#myForm :checkbox").formSerialize();
 * @desc Collect the data from all successful checkbox input elements in myForm
 *       into a query string
 * 
 * @example var data = $("#myForm :checkbox").formSerialize(false);
 * @desc Collect the data from all checkbox elements in myForm (even the
 *       unchecked ones) into a query string
 * 
 * @example var data = $(":input").formSerialize();
 * @desc Collect the data from all successful input, select, textarea and button
 *       elements into a query string
 * 
 * @name fieldSerialize
 * @param successful
 *            true if only successful controls should be serialized (default is
 *            true)
 * @type String
 * @cat Plugins/Form
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    // hand off to jQuery.param for proper encoding
    return $.param(a);
};


/**
 * Returns the value(s) of the element in the matched set. For example, consider
 * the following form:
 * 
 * <form><fieldset> <input name="A" type="text" /> <input name="A" type="text" />
 * <input name="B" type="checkbox" value="B1" /> <input name="B" type="checkbox"
 * value="B2"/> <input name="C" type="radio" value="C1" /> <input name="C"
 * type="radio" value="C2" /> </fieldset></form>
 * 
 * var v = $(':text').fieldValue(); // if no values are entered into the text
 * inputs v == ['',''] // if values entered into the text inputs are 'foo' and
 * 'bar' v == ['foo','bar']
 * 
 * var v = $(':checkbox').fieldValue(); // if neither checkbox is checked v ===
 * undefined // if both checkboxes are checked v == ['B1', 'B2']
 * 
 * var v = $(':radio').fieldValue(); // if neither radio is checked v ===
 * undefined // if first radio is checked v == ['C1']
 * 
 * The successful argument controls whether or not the field element must be
 * 'successful' (per
 * http://www.w3.org/TR/html4/interact/forms.html#successful-controls). The
 * default value of the successful argument is true. If this value is false the
 * value(s) for each element is returned.
 * 
 * Note: This method *always* returns an array. If no valid value can be
 * determined the array will be empty, otherwise it will contain one or more
 * values.
 * 
 * @example var data = $("#myPasswordElement").fieldValue(); alert(data[0]);
 * @desc Alerts the current value of the myPasswordElement element
 * 
 * @example var data = $("#myForm :input").fieldValue();
 * @desc Get the value(s) of the form elements in myForm
 * 
 * @example var data = $("#myForm :checkbox").fieldValue();
 * @desc Get the value(s) for the successful checkbox element(s) in the jQuery
 *       object.
 * 
 * @example var data = $("#mySingleSelect").fieldValue();
 * @desc Get the value(s) of the select control
 * 
 * @example var data = $(':text').fieldValue();
 * @desc Get the value(s) of the text input or textarea elements
 * 
 * @example var data = $("#myMultiSelect").fieldValue();
 * @desc Get the values for the select-multiple control
 * 
 * @name fieldValue
 * @param Boolean
 *            successful true if only the values for successful controls should
 *            be returned (default is true)
 * @type Array<String>
 * @cat Plugins/Form
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 * 
 * The successful argument controls whether or not the field element must be
 * 'successful' (per
 * http://www.w3.org/TR/html4/interact/forms.html#successful-controls). The
 * default value of the successful argument is true. If the given element is not
 * successful and the successful arg is not false then the returned value will
 * be null.
 * 
 * Note: If the successful flag is true (default) but the element is not
 * successful, the return will be null Note: The value returned for a successful
 * select-multiple element will always be an array. Note: If the element has no
 * value the return value will be undefined.
 * 
 * @example var data = jQuery.fieldValue($("#myPasswordElement")[0]);
 * @desc Gets the current value of the myPasswordElement element
 * 
 * @name fieldValue
 * @param Element
 *            el The DOM element for which the value will be returned
 * @param Boolean
 *            successful true if value returned must be for a successful
 *            controls (default is true)
 * @type String or Array<String> or null or undefined
 * @cat Plugins/Form
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                // extra pain for IE...
                var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};


/**
 * Clears the form data. Takes the following actions on the form's input fields: -
 * input text fields will have their 'value' property set to the empty string -
 * select elements will have their 'selectedIndex' property set to -1 - checkbox
 * and radio inputs will have their 'checked' property set to false - inputs of
 * type submit, button, reset, and hidden will *not* be effected - button
 * elements will *not* be effected
 * 
 * @example $('form').clearForm();
 * @desc Clears all forms on the page.
 * 
 * @name clearForm
 * @type jQuery
 * @cat Plugins/Form
 */
$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

/**
 * Clears the selected form elements. Takes the following actions on the matched
 * elements: - input text fields will have their 'value' property set to the
 * empty string - select elements will have their 'selectedIndex' property set
 * to -1 - checkbox and radio inputs will have their 'checked' property set to
 * false - inputs of type submit, button, reset, and hidden will *not* be
 * effected - button elements will *not* be effected
 * 
 * @example $('.myInputs').clearFields();
 * @desc Clears all inputs with class myInputs
 * 
 * @name clearFields
 * @type jQuery
 * @cat Plugins/Form
 */
$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};


/**
 * Resets the form data. Causes all form elements to be reset to their original
 * value.
 * 
 * @example $('form').resetForm();
 * @desc Resets all forms on the page.
 * 
 * @name resetForm
 * @type jQuery
 * @cat Plugins/Form
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

})(jQuery);


/*
 * jQuery validation plug-in 1.5.5
 * 
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 * 
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 * 
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}
		
		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator); 
		
		if ( validator.settings.onsubmit ) {
		
			// allow suppresing validation by adding a cancel class to the
            // submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});
			
			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				this.find("input, button").filter(":submit").click(function() {
					validator.submitButton = this;
				});
			}
		
			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();
					
				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the
                            // missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to
                            // no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}
					
				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}
		
		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];
		
		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}
		
		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);
		
		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}
		
		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim(a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 ) 
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {
	
	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;
				
			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.errorsFor(element).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			if ( element.name in this.submitted )
				this.element(element);
		},
		highlight: function( element, errorClass, validClass ) {
			$(element).addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function( element, errorClass, validClass ) {
			$(element).removeClass(errorClass).addClass(validClass);
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		dateDE: "Bitte geben Sie ein gültiges Datum ein.",
		number: "Please enter a valid number.",
		numberDE: "Bitte geben Sie eine Nummer ein.",
		digits: "Please enter only digits",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},
	
	autoCreateRanges: false,
	
	prototype: {
		
		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();
			
			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});
			
			function delegate(event) {
				var validator = $.data(this[0].form, "validator");
				validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
			}
			$(this.currentForm)
				.delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
				.delegate("click", ":radio, :checkbox", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},
		
		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid(); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},
		
		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},
		
		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},
		
		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},
		
		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},
		
		valid: function() {
			return this.size() == 0;
		},
		
		size: function() {
			return this.errorList.length;
		},
		
		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},
		
		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},
		
		elements: function() {
			var validator = this,
				rulesCache = {};
			
			// select all valid inputs inside the form (no submit or reset
            // buttons)
			// workaround $Query([]).add until http://dev.jquery.com/ticket/2114
            // is solved
			return $([]).add(this.currentForm.elements)
			.filter(":input")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
			
				// select only the first element for each name, and only those
                // with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;
				
				rulesCache[this.name] = true;
				return true;
			});
		},
		
		clean: function( selector ) {
			return $( selector )[0];
		},
		
		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},
		
		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.formSubmitted = false;
			this.currentElements = $([]);
		},
		
		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},
		
		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},
	
		check: function( element ) {
			element = this.clean( element );
			
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name )[0];
			}
			
			var rules = $(element).rules();
			var dependencyMismatch = false;
			for( method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
					
					// if a method indicates that the field is optional and
                    // therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;
					
					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}
					
					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method");
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},
		
		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;
			
			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();
			
			return meta && meta.messages && meta.messages[method];
		},
		
		// return the custom message for the given element name and validation
        // method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},
		
		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},
		
		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},
		
		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method );
			if ( typeof message == "function" ) 
				message = message.call(this, rule.parameters, element);
			this.errorList.push({
				message: message,
				element: element
			});
			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},
		
		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},
		
		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},
		
		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},
		
		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},
		
		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );
			
				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},
		
		errorsFor: function(element) {
			return this.errors().filter("[for='" + this.idOrName(element) + "']");
		},
		
		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},
		
		findByName: function( name ) {
			// select by name and filter by form for performance over
            // form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},
		
		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},
	
		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},
	
		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},
		
		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},
		
		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},
		
		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is
            // never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
		},
		
		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", previous = {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}
		
	},
	
	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},
	
	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},
	
	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},
	
	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);
		
		for (method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}
		
		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari)
        // for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}
		
		return rules;
	},
	
	metadataRules: function(element) {
		if (!$.metadata) return {};
		
		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},
	
	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},
	
	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});
		
		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});
		
		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});
		
		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}
		
		// To support custom messages in metadata ignore rule methods titled
        // "messages"
		if (rules.messages) {
			delete rules.messages
		}
		
		return rules;
	},
	
	// Converts a simple string to a {string: true} rule, e.g., "required" to
    // {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},
	
	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message || $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				var options = $("option:selected", element);
				return options.length > 0 && ( element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			
			var previous = this.previousValue(element);
			
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
			
			param = typeof param == "string" && {url:param} || param; 
			
			if ( previous.old !== value ) {
				previous.old = value;
				var validator = this;
				this.startRequest(element);
				var data = {};
				data[element.name] = value;
				$.ajax($.extend(true, {
					url: param,
					mode: "abort",
					port: "validate" + element.name,
					dataType: "json",
					data: data,
					success: function(response) {
						var valid = response === true;
						if ( valid ) {
							var submitted = validator.formSubmitted;
							validator.prepareElement(element);
							validator.formSubmitted = submitted;
							validator.successList.push(element);
							validator.showErrors();
						} else {
							var errors = {};
							errors[element.name] = previous.message = response || validator.defaultMessage( element, "remote" );
							validator.showErrors(errors);
						}
						previous.valid = valid;
						validator.stopRequest(element, valid);
					}
				}, param));
				return "pending";
			} else if( this.pending[element.name] ) {
				return "pending";
			}
			return previous.valid;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez:
            // http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez:
            // http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},
        
		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/dateDE
		dateDE: function(value, element) {
			return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},
	
		// http://docs.jquery.com/Plugins/Validation/Methods/numberDE
		numberDE: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
		},
		
		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			return value == $(param).val();
		}
		
	}
	
});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be
// undefined) is aborted via XMLHttpRequest.abort()
;(function($) {
	var ajax = $.ajax;
	var pendingRequests = {};
	$.ajax = function(settings) {
		// create settings for compatibility with ajaxSetup
		settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
		var port = settings.port;
		if (settings.mode == "abort") {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			return (pendingRequests[port] = ajax.apply(this, arguments));
		}
		return ajax.apply(this, arguments);
	};
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither
// bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin
// for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the
// jquery-object for event.target

// provides triggerEvent(type: String, target: Element) to trigger delegated
// events
;(function($) {
	$.each({
		focus: 'focusin',
		blur: 'focusout'	
	}, function( original, fix ){
		$.event.special[fix] = {
			setup:function() {
				// if ( $.browser.msie ) return false;
				this.addEventListener( original, $.event.special[fix].handler, true );
			},
			teardown:function() {
				if ( $.browser.msie ) return false;
				this.removeEventListener( original,
				$.event.special[fix].handler, true );
			},
			handler: function(e) {
				arguments[0] = $.event.fix(e);
				arguments[0].type = fix;
				return $.event.handle.apply(this, arguments);
			}
		};
	});
	$.extend($.fn, {
		delegate: function(type, delegate, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		},
		triggerEvent: function(type, target) {
			return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
		}
	})
})(jQuery);
