/*! For license information please see 2.fc6f0071.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return M}));var r=a(205),n=a.n(r),c=a(0);var s=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,a=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(a,t),this.tags.push(a)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var c=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,c?0:n.cssRules.length)}catch(s){0}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var o=function(e){function t(e,t,r){var n=t.trim().split(m);t=n;var c=n.length,s=e.length;switch(s){case 0:case 1:var o=0;for(e=0===s?"":e[0]+" ";o<c;++o)t[o]=a(e,t[o],r).trim();break;default:var i=o=0;for(t=[];o<c;++o)for(var l=0;l<s;++l)t[i++]=a(e[l]+" ",n[o],r).trim()}return t}function a(e,t,a){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(b,"$1"+e.trim());case 58:return e.trim()+t.replace(b,"$1"+e.trim());default:if(0<1*a&&0<t.indexOf("\f"))return t.replace(b,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function r(e,t,a,c){var s=e+";",o=2*t+3*a+4*c;if(944===o){e=s.indexOf(":",9)+1;var i=s.substring(e,s.length-1).trim();return i=s.substring(0,e).trim()+i+";",1===N||2===N&&n(i,1)?"-webkit-"+i+i:i}if(0===N||2===N&&!n(s,1))return s;switch(o){case 1015:return 97===s.charCodeAt(10)?"-webkit-"+s+s:s;case 951:return 116===s.charCodeAt(3)?"-webkit-"+s+s:s;case 963:return 110===s.charCodeAt(5)?"-webkit-"+s+s:s;case 1009:if(100!==s.charCodeAt(4))break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(45===s.charCodeAt(8))return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(j,"$1-webkit-$2")+s;break;case 932:if(45===s.charCodeAt(4))switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(99!==s.charCodeAt(8))break;return"-webkit-box-pack"+(i=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+s+"-ms-flex-pack"+i+s;case 1005:return h.test(s)?s.replace(d,":-webkit-")+s.replace(d,":-moz-")+s:s;case 1e3:switch(t=(i=s.substring(13).trim()).indexOf("-")+1,i.charCodeAt(0)+i.charCodeAt(t)){case 226:i=s.replace(k,"tb");break;case 232:i=s.replace(k,"tb-rl");break;case 220:i=s.replace(k,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+i+s;case 1017:if(-1===s.indexOf("sticky",9))break;case 975:switch(t=(s=e).length-10,o=(i=(33===s.charCodeAt(t)?s.substring(0,t):s).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|i.charCodeAt(7))){case 203:if(111>i.charCodeAt(8))break;case 115:s=s.replace(i,"-webkit-"+i)+";"+s;break;case 207:case 102:s=s.replace(i,"-webkit-"+(102<o?"inline-":"")+"box")+";"+s.replace(i,"-webkit-"+i)+";"+s.replace(i,"-ms-"+i+"box")+";"+s}return s+";";case 938:if(45===s.charCodeAt(5))switch(s.charCodeAt(6)){case 105:return i=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+i+"-ms-flex-"+i+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(C,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(C,"")+s}break;case 973:case 989:if(45!==s.charCodeAt(3)||122===s.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(i=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),t,a,c).replace(":fill-available",":stretch"):s.replace(i,"-webkit-"+i)+s.replace(i,"-moz-"+i.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(102===s.charCodeAt(5)?"-ms-"+s:"")+s,211===a+c&&105===s.charCodeAt(13)&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+s}return s}function n(e,t){var a=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?a:10);return a=e.substring(a+1,e.length-1),B(2!==t?r:r.replace(E,"$1"),a,t)}function c(e,t){var a=r(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(y," or ($1)").substring(4):"("+t+")"}function s(e,t,a,r,n,c,s,o,l,u){for(var d,h=0,f=t;h<L;++h)switch(d=T[h].call(i,e,f,a,r,n,c,s,o,l,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function o(e){return void 0!==(e=e.prefix)&&(B=null,e?"function"!=typeof e?N=1:(N=2,B=e):N=0),o}function i(e,a){var o=e;if(33>o.charCodeAt(0)&&(o=o.trim()),o=[o],0<L){var i=s(-1,a,o,o,A,_,0,0,0,0);void 0!==i&&"string"==typeof i&&(a=i)}var d=function e(a,o,i,d,h){for(var f,m,b,k,y,C=0,E=0,O=0,j=0,T=0,B=0,D=b=f=0,P=0,I=0,$=0,R=0,G=i.length,X=G-1,F="",z="",H="",U="";P<G;){if(m=i.charCodeAt(P),P===X&&0!==E+j+O+C&&(0!==E&&(m=47===E?10:47),j=O=C=0,G++,X++),0===E+j+O+C){if(P===X&&(0<I&&(F=F.replace(u,"")),0<F.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:F+=i.charAt(P)}m=59}switch(m){case 123:for(f=(F=F.trim()).charCodeAt(0),b=1,R=++P;P<G;){switch(m=i.charCodeAt(P)){case 123:b++;break;case 125:b--;break;case 47:switch(m=i.charCodeAt(P+1)){case 42:case 47:e:{for(D=P+1;D<X;++D)switch(i.charCodeAt(D)){case 47:if(42===m&&42===i.charCodeAt(D-1)&&P+2!==D){P=D+1;break e}break;case 10:if(47===m){P=D+1;break e}}P=D}}break;case 91:m++;case 40:m++;case 34:case 39:for(;P++<X&&i.charCodeAt(P)!==m;);}if(0===b)break;P++}switch(b=i.substring(R,P),0===f&&(f=(F=F.replace(l,"").trim()).charCodeAt(0)),f){case 64:switch(0<I&&(F=F.replace(u,"")),m=F.charCodeAt(1)){case 100:case 109:case 115:case 45:I=o;break;default:I=S}if(R=(b=e(o,I,b,m,h+1)).length,0<L&&(y=s(3,b,I=t(S,F,$),o,A,_,R,m,h,d),F=I.join(""),void 0!==y&&0===(R=(b=y.trim()).length)&&(m=0,b="")),0<R)switch(m){case 115:F=F.replace(w,c);case 100:case 109:case 45:b=F+"{"+b+"}";break;case 107:b=(F=F.replace(v,"$1 $2"))+"{"+b+"}",b=1===N||2===N&&n("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=F+b,112===d&&(z+=b,b="")}else b="";break;default:b=e(o,t(o,F,$),b,d,h+1)}H+=b,b=$=I=D=f=0,F="",m=i.charCodeAt(++P);break;case 125:case 59:if(1<(R=(F=(0<I?F.replace(u,""):F).trim()).length))switch(0===D&&(f=F.charCodeAt(0),45===f||96<f&&123>f)&&(R=(F=F.replace(" ",":")).length),0<L&&void 0!==(y=s(1,F,o,a,A,_,z.length,d,h,d))&&0===(R=(F=y.trim()).length)&&(F="\0\0"),f=F.charCodeAt(0),m=F.charCodeAt(1),f){case 0:break;case 64:if(105===m||99===m){U+=F+i.charAt(P);break}default:58!==F.charCodeAt(R-1)&&(z+=r(F,f,m,F.charCodeAt(2)))}$=I=D=f=0,F="",m=i.charCodeAt(++P)}}switch(m){case 13:case 10:47===E?E=0:0===1+f&&107!==d&&0<F.length&&(I=1,F+="\0"),0<L*M&&s(0,F,o,a,A,_,z.length,d,h,d),_=1,A++;break;case 59:case 125:if(0===E+j+O+C){_++;break}default:switch(_++,k=i.charAt(P),m){case 9:case 32:if(0===j+C+E)switch(T){case 44:case 58:case 9:case 32:k="";break;default:32!==m&&(k=" ")}break;case 0:k="\\0";break;case 12:k="\\f";break;case 11:k="\\v";break;case 38:0===j+E+C&&(I=$=1,k="\f"+k);break;case 108:if(0===j+E+C+x&&0<D)switch(P-D){case 2:112===T&&58===i.charCodeAt(P-3)&&(x=T);case 8:111===B&&(x=B)}break;case 58:0===j+E+C&&(D=P);break;case 44:0===E+O+j+C&&(I=1,k+="\r");break;case 34:case 39:0===E&&(j=j===m?0:0===j?m:j);break;case 91:0===j+E+O&&C++;break;case 93:0===j+E+O&&C--;break;case 41:0===j+E+C&&O--;break;case 40:if(0===j+E+C){if(0===f)switch(2*T+3*B){case 533:break;default:f=1}O++}break;case 64:0===E+O+j+C+D+b&&(b=1);break;case 42:case 47:if(!(0<j+C+O))switch(E){case 0:switch(2*m+3*i.charCodeAt(P+1)){case 235:E=47;break;case 220:R=P,E=42}break;case 42:47===m&&42===T&&R+2!==P&&(33===i.charCodeAt(R+2)&&(z+=i.substring(R,P+1)),k="",E=0)}}0===E&&(F+=k)}B=T,T=m,P++}if(0<(R=z.length)){if(I=o,0<L&&(void 0!==(y=s(2,z,I,a,A,_,R,d,h,d))&&0===(z=y).length))return U+z+H;if(z=I.join(",")+"{"+z+"}",0!=N*x){switch(2!==N||n(z,2)||(x=0),x){case 111:z=z.replace(g,":-moz-$1")+z;break;case 112:z=z.replace(p,"::-webkit-input-$1")+z.replace(p,"::-moz-$1")+z.replace(p,":-ms-input-$1")+z}x=0}}return U+z+H}(S,o,a,0,0);return 0<L&&(void 0!==(i=s(-2,d,o,o,A,_,d.length,0,0,0))&&(d=i)),"",x=0,_=A=1,d}var l=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,f=/([,: ])(transform)/g,m=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,g=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,C=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,_=1,A=1,x=0,N=1,S=[],T=[],L=0,B=null,M=0;return i.use=function e(t){switch(t){case void 0:case null:L=T.length=0;break;default:if("function"==typeof t)T[L++]=t;else if("object"==typeof t)for(var a=0,r=t.length;a<r;++a)e(t[a]);else M=0|!!t}return e},i.set=o,void 0!==e&&o(e),i};function i(e){e&&l.current.insert(e+"}")}var l={current:null},u=function(e,t,a,r,n,c,s,o,u,d){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return l.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===o)return t+"/*|*/";break;case 3:switch(o){case 102:case 112:return l.current.insert(a[0]+t),"";default:return t+(0===d?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(i)}},d=function(e){void 0===e&&(e={});var t,a=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r=new o(t);var n,c={};n=e.container||document.head;var i,d=document.querySelectorAll("style[data-emotion-"+a+"]");Array.prototype.forEach.call(d,(function(e){e.getAttribute("data-emotion-"+a).split(" ").forEach((function(e){c[e]=!0})),e.parentNode!==n&&n.appendChild(e)})),r.use(e.stylisPlugins)(u),i=function(e,t,a,n){var c=t.name;l.current=a,r(e,t.styles),n&&(h.inserted[c]=!0)};var h={key:a,sheet:new s({key:a,container:n,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:c,registered:{},insert:i};return h};function h(e,t,a){var r="";return a.split(" ").forEach((function(a){void 0!==e[a]?t.push(e[a]):r+=a+" "})),r}var f=function(e,t,a){var r=e.key+"-"+t.name;if(!1===a&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var n=t;do{e.insert("."+r,n,e.sheet,!0);n=n.next}while(void 0!==n)}};var m=function(e){for(var t,a=0,r=0,n=e.length;n>=4;++r,n-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),a=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&a)+(59797*(a>>>16)<<16);switch(n){case 3:a^=(255&e.charCodeAt(r+2))<<16;case 2:a^=(255&e.charCodeAt(r+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(r)))+(59797*(a>>>16)<<16)}return(((a=1540483477*(65535&(a^=a>>>13))+(59797*(a>>>16)<<16))^a>>>15)>>>0).toString(36)},b={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var v=/[A-Z]|^ms/g,p=/_EMO_([^_]+?)_([^]*?)_EMO_/g,g=function(e){return 45===e.charCodeAt(1)},k=function(e){return null!=e&&"boolean"!=typeof e},w=function(e){var t={};return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}((function(e){return g(e)?e:e.replace(v,"-$&").toLowerCase()})),y=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(p,(function(e,t,a){return E={name:t,styles:a,next:E},t}))}return 1===b[e]||g(e)||"number"!=typeof t||0===t?t:t+"px"};function C(e,t,a,r){if(null==a)return"";if(void 0!==a.__emotion_styles)return a;switch(typeof a){case"boolean":return"";case"object":if(1===a.anim)return E={name:a.name,styles:a.styles,next:E},a.name;if(void 0!==a.styles){var n=a.next;if(void 0!==n)for(;void 0!==n;)E={name:n.name,styles:n.styles,next:E},n=n.next;return a.styles+";"}return function(e,t,a){var r="";if(Array.isArray(a))for(var n=0;n<a.length;n++)r+=C(e,t,a[n],!1);else for(var c in a){var s=a[c];if("object"!=typeof s)null!=t&&void 0!==t[s]?r+=c+"{"+t[s]+"}":k(s)&&(r+=w(c)+":"+y(c,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var o=C(e,t,s,!1);switch(c){case"animation":case"animationName":r+=w(c)+":"+o+";";break;default:r+=c+"{"+o+"}"}}else for(var i=0;i<s.length;i++)k(s[i])&&(r+=w(c)+":"+y(c,s[i])+";")}return r}(e,t,a);case"function":if(void 0!==e){var c=E,s=a(e);return E=c,C(e,t,s,r)}break;case"string":}if(null==t)return a;var o=t[a];return void 0===o||r?a:o}var E,O=/label:\s*([^\s;\n{]+)\s*;/g;var j=function(e,t,a){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,n="";E=void 0;var c=e[0];null==c||void 0===c.raw?(r=!1,n+=C(a,t,c,!1)):n+=c[0];for(var s=1;s<e.length;s++)n+=C(a,t,e[s],46===n.charCodeAt(n.length-1)),r&&(n+=c[s]);O.lastIndex=0;for(var o,i="";null!==(o=O.exec(n));)i+="-"+o[1];return{name:m(n)+i,styles:n,next:E}};var _=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return j(t)},A=Object(c.createContext)("undefined"!=typeof HTMLElement?d():null),x=Object(c.createContext)({}),N=(A.Provider,function(e){return Object(c.forwardRef)((function(t,a){return Object(c.createElement)(A.Consumer,null,(function(r){return e(t,r,a)}))}))}),S="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",T=Object.prototype.hasOwnProperty,L=function(e,t,a,r){var n=null===a?t.css:t.css(a);"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var s=t[S],o=[n],i="";"string"==typeof t.className?i=h(e.registered,o,t.className):null!=t.className&&(i=t.className+" ");var l=j(o);f(e,l,"string"==typeof s);i+=e.key+"-"+l.name;var u={};for(var d in t)T.call(t,d)&&"css"!==d&&d!==S&&(u[d]=t[d]);return u.ref=r,u.className=i,Object(c.createElement)(s,u)},B=N((function(e,t,a){return"function"==typeof e.css?Object(c.createElement)(x.Consumer,null,(function(r){return L(t,e,r,a)})):L(t,e,null,a)}));var M=function(e,t){var a=arguments;if(null==t||!T.call(t,"css"))return c.createElement.apply(void 0,a);var r=a.length,n=new Array(r);n[0]=B;var s={};for(var o in t)T.call(t,o)&&(s[o]=t[o]);s[S]=e,n[1]=s;for(var i=2;i<r;i++)n[i]=a[i];return c.createElement.apply(null,n)},D=(c.Component,function e(t){for(var a=t.length,r=0,n="";r<a;r++){var c=t[r];if(null!=c){var s=void 0;switch(typeof c){case"boolean":break;case"object":if(Array.isArray(c))s=e(c);else for(var o in s="",c)c[o]&&o&&(s&&(s+=" "),s+=o);break;default:s=c}s&&(n&&(n+=" "),n+=s)}}return n});function P(e,t,a){var r=[],n=h(e,r,a);return r.length<2?a:n+t(r)}N((function(e,t){return Object(c.createElement)(x.Consumer,null,(function(a){var r=function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=j(a,t.registered);return f(t,n,!1),t.key+"-"+n.name},n={css:r,cx:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return P(t.registered,r,D(a))},theme:a},c=e.children(n);return!0,c}))}))},168:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(175),s=a(162),o=a(165);const i="",l="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(s.a)(),[t,a]=Object(r.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),n=Object(r.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(r.useCallback)(()=>{a(i),n(i)},[]),o=Object(r.useCallback)(()=>{a(l),n(l)},[]);return Object(r.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(r.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(r.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?l:i)})},[]),{isDarkTheme:t===l,setLightTheme:c,setDarkTheme:o}},d=a(176);var h=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:r}=u();return n.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:r}},e.children)};var f=()=>{const[e,t]=Object(r.useState)({}),a=Object(r.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(r.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t(t=>({...t,[e]:r})),a(e,r)}}};var m=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e}={}}}={}}=Object(s.a)(),[t,a]=Object(r.useState)(!0);return Object(r.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),r=e!==t;localStorage.setItem("docusaurus.announcement.id",e),r&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(r||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),a(!0)}}},b=a(177);var v=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=f(),{isAnnouncementBarClosed:r,closeAnnouncementBar:c}=m();return n.a.createElement(b.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:r,closeAnnouncementBar:c}},e.children)},p=a(178),g=a(96),k=a.n(g);var w=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(s.a)(),{content:t,backgroundColor:a,textColor:r}=e,{isAnnouncementBarClosed:c,closeAnnouncementBar:o}=Object(p.a)();return!t||c?null:n.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:a,color:r},role:"banner"},n.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),n.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:o,"aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},y=a(2),C=a(166),E=a(164),O=()=>null,j=a(201),_=a.n(j),A=a(97),x=a.n(A);const N=()=>n.a.createElement("span",{className:Object(C.a)(x.a.toggle,x.a.moon)}),S=()=>n.a.createElement("span",{className:Object(C.a)(x.a.toggle,x.a.sun)});var T=function(e){const{isClient:t}=Object(s.a)();return n.a.createElement(_.a,Object(y.a)({disabled:!t,icons:{checked:n.a.createElement(N,null),unchecked:n.a.createElement(S,null)}},e))},L=a(173),B=a(179);var M=function(e){const[t,a]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},D=a(180);var P=e=>{const[t,a]=Object(r.useState)(!0),[n,c]=Object(r.useState)(!1),[s,o]=Object(r.useState)(0),[i,l]=Object(r.useState)(0),u=Object(r.useCallback)(e=>{null!==e&&l(e.getBoundingClientRect().height)},[]),d=Object(B.b)(),[h,f]=M(d.hash);return Object(D.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<i)return;if(n)return c(!1),a(!1),void o(t);const r=document.documentElement.scrollHeight-i,l=window.innerHeight;s&&t>=s?a(!1):t+l<r&&a(!0),o(t)},[s,i]),Object(r.useEffect)(()=>{e&&(a(!0),f(d.hash))},[d]),Object(r.useEffect)(()=>{e&&h&&c(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},I=a(181),$=a(182),R=a(183),G=a(98),X=a.n(G);function F({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:c,activeClassName:s="navbar__link--active",prependBaseUrlToHref:i,...l}){const u=Object(o.a)(a),d=Object(o.a)(e),h=Object(o.a)(r,{forcePrependBaseUrl:!0});return n.a.createElement(E.a,Object(y.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:i?h:r}:{isNavLink:!0,activeClassName:s,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(d)}:null},l),c)}function z({items:e,position:t="right",className:a,...r}){const c=(e,t=!1)=>Object(C.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?n.a.createElement("div",{className:Object(C.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},n.a.createElement(F,Object(y.a)({className:c(a)},r,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),r.label),n.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>n.a.createElement("li",{key:a},n.a.createElement(F,Object(y.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):n.a.createElement(F,Object(y.a)({className:c(a)},r))}function H({items:e,position:t,className:a,...r}){const c=(e,t=!1)=>Object(C.a)("menu__link",{"menu__link--sublist":t},e);return e?n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(F,Object(y.a)({className:c(a,!0)},r),r.label),n.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>n.a.createElement("li",{className:"menu__list-item",key:a},n.a.createElement(F,Object(y.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:r.onClick})))))):n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(F,Object(y.a)({className:c(a)},r)))}var U=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:o}=Object(s.a)(),[i,l]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1),{isDarkTheme:h,setLightTheme:f,setDarkTheme:m}=Object(L.a)(),{navbarRef:b,isNavbarVisible:v}=P(a),{logoLink:p,logoLinkProps:g,logoImageUrl:k,logoAlt:w}=Object(R.a)();Object(I.a)(i);const j=Object(r.useCallback)(()=>{l(!0)},[l]),_=Object(r.useCallback)(()=>{l(!1)},[l]),A=Object(r.useCallback)(e=>e.target.checked?m():f(),[f,m]),x=Object($.a)();Object(r.useEffect)(()=>{x===$.b.desktop&&l(!1)},[x]);const{leftLinks:N,rightLinks:S}=function(e){return{leftLinks:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightLinks:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return n.a.createElement("nav",{ref:b,className:Object(C.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":i,[X.a.navbarHideable]:a,[X.a.navbarHidden]:!v})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(E.a,Object(y.a)({className:"navbar__brand",to:p},g),null!=k&&n.a.createElement("img",{key:o,className:"navbar__logo",src:k,alt:w}),null!=e&&n.a.createElement("strong",{className:Object(C.a)("navbar__title",{[X.a.hideLogoText]:u})},e)),N.map((e,t)=>n.a.createElement(z,Object(y.a)({},e,{key:t})))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},S.map((e,t)=>n.a.createElement(z,Object(y.a)({},e,{key:t}))),!c&&n.a.createElement(T,{className:X.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:A}),n.a.createElement(O,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:_}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(E.a,Object(y.a)({className:"navbar__brand",onClick:_,to:p},g),null!=k&&n.a.createElement("img",{key:o,className:"navbar__logo",src:k,alt:w}),null!=e&&n.a.createElement("strong",{className:"navbar__title"},e)),!c&&i&&n.a.createElement(T,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:A})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>n.a.createElement(H,Object(y.a)({},e,{onClick:_,key:t}))))))))},W=a(170);a(99);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:a,title:r,themeConfig:{image:i},url:l}=t,{children:u,title:d,noFooter:f,description:m,image:b,keywords:p,permalink:g,version:k}=e,y=d?`${d} | ${r}`:r,C=b||i,E=Object(o.a)(C,{absolute:!0}),O=Object(o.a)(a);return n.a.createElement(h,null,n.a.createElement(v,null,n.a.createElement(c.a,null,n.a.createElement("html",{lang:"en"}),y&&n.a.createElement("title",null,y),y&&n.a.createElement("meta",{property:"og:title",content:y}),a&&n.a.createElement("link",{rel:"shortcut icon",href:O}),m&&n.a.createElement("meta",{name:"description",content:m}),m&&n.a.createElement("meta",{property:"og:description",content:m}),k&&n.a.createElement("meta",{name:"docsearch:version",content:k}),p&&p.length&&n.a.createElement("meta",{name:"keywords",content:p.join(",")}),C&&n.a.createElement("meta",{property:"og:image",content:E}),C&&n.a.createElement("meta",{property:"twitter:image",content:E}),C&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),g&&n.a.createElement("meta",{property:"og:url",content:l+g}),g&&n.a.createElement("link",{rel:"canonical",href:l+g}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.a.createElement(w,null),n.a.createElement(U,null),n.a.createElement("div",{className:"main-wrapper"},u),!f&&n.a.createElement(W.a,null)))}},171:function(e,t,a){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.d(t,"a",(function(){return r}))},172:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===c)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},173:function(e,t,a){"use strict";var r=a(0),n=a(176);t.a=function(){return Object(r.useContext)(n.a)}},176:function(e,t,a){"use strict";var r=a(0);const n=a.n(r).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=n},177:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=n},178:function(e,t,a){"use strict";var r=a(0),n=a(177);t.a=function(){return Object(r.useContext)(n.a)}},179:function(e,t,a){"use strict";var r=a(19);a.d(t,"a",(function(){return r.d})),a.d(t,"b",(function(){return r.e}))},180:function(e,t,a){"use strict";var r=a(0),n=a(10);const c=()=>({scrollX:n.a.canUseDOM?window.pageXOffset:0,scrollY:n.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,n]=Object(r.useState)(c()),s=()=>{const t=c();n(t),e&&e(t)};return Object(r.useEffect)(()=>(window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s,{passive:!0})),t),a}},181:function(e,t,a){"use strict";var r=a(0);t.a=function(e=!0){Object(r.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},182:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var r=a(0);const n={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?n.desktop:n.mobile}const[a,c]=Object(r.useState)(t);return Object(r.useEffect)(()=>{if(!e)return!1;function a(){c(t())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),a}},183:function(e,t,a){"use strict";var r=a(162),n=a(173),c=a(165),s=a(169);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(r.a)(),{isDarkTheme:t}=Object(n.a)(),a=Object(c.a)(e.href||"/");let o={};e.target?o={target:e.target}:Object(s.a)(a)||(o={rel:"noopener noreferrer",target:"_blank"});const i=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:o,logoImageUrl:Object(c.a)(i),logoAlt:e.alt}}},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(0),s=h(c),o=h(a(172)),i=h(a(9)),l=h(a(202)),u=h(a(203)),d=a(204);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=(t.icons,function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return s.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",r({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:s.default.createElement(l.default,null),unchecked:s.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},202:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(0),c=(r=n)&&r.__esModule?r:{default:r};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(0),c=(r=n)&&r.__esModule?r:{default:r};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},205:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}}}]);