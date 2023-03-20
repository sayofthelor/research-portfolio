import{S as le,i as ue,s as oe,K as Ae,k as R,a as X,l as z,m as H,h as C,c as Y,p as Fe,n as D,b as j,E as ge,L as we,M as xe,N as ke,g as ce,d as de,Q as ae,R as te,w as _e,T as Se,e as ne,U as Ee,q as fe,r as pe,u as Pe,y as Ce,z as Te,A as $e,C as je,B as De}from"../chunks/index.1f0b3727.js";typeof window<"u"&&(window.Prism&&console.warn("Prism has already been initiated. Please ensure that svelte-prism is imported first."),window.Prism=window.Prism||{},window.Prism.manual=!0);var re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K={},Ie={get exports(){return K},set exports(h){K=h}};(function(h){var g=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(l){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,b={},n={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof y?new y(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++v}),a.__id},clone:function a(e,r){r=r||{};var s,i;switch(n.util.type(e)){case"Object":if(i=n.util.objId(e),r[i])return r[i];s={},r[i]=s;for(var o in e)e.hasOwnProperty(o)&&(s[o]=a(e[o],r));return s;case"Array":return i=n.util.objId(e),r[i]?r[i]:(s=[],r[i]=s,e.forEach(function(m,u){s[u]=a(m,r)}),s);default:return e}},getLanguage:function(a){for(;a;){var e=d.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(d,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==a)return e[r]}return null}},isActive:function(a,e,r){for(var s="no-"+e;a;){var i=a.classList;if(i.contains(e))return!0;if(i.contains(s))return!1;a=a.parentElement}return!!r}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(a,e){var r=n.util.clone(n.languages[a]);for(var s in e)r[s]=e[s];return r},insertBefore:function(a,e,r,s){s=s||n.languages;var i=s[a],o={};for(var m in i)if(i.hasOwnProperty(m)){if(m==e)for(var u in r)r.hasOwnProperty(u)&&(o[u]=r[u]);r.hasOwnProperty(m)||(o[m]=i[m])}var F=s[a];return s[a]=o,n.languages.DFS(n.languages,function(S,I){I===F&&S!=a&&(this[S]=o)}),o},DFS:function a(e,r,s,i){i=i||{};var o=n.util.objId;for(var m in e)if(e.hasOwnProperty(m)){r.call(e,m,e[m],s||m);var u=e[m],F=n.util.type(u);F==="Object"&&!i[o(u)]?(i[o(u)]=!0,a(u,r,null,i)):F==="Array"&&!i[o(u)]&&(i[o(u)]=!0,a(u,r,m,i))}}},plugins:{},highlightAll:function(a,e){n.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,r){var s={callback:r,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),n.hooks.run("before-all-elements-highlight",s);for(var i=0,o;o=s.elements[i++];)n.highlightElement(o,e===!0,s.callback)},highlightElement:function(a,e,r){var s=n.util.getLanguage(a),i=n.languages[s];n.util.setLanguage(a,s);var o=a.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(o,s);var m=a.textContent,u={element:a,language:s,grammar:i,code:m};function F(I){u.highlightedCode=I,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),r&&r.call(u.element)}if(n.hooks.run("before-sanity-check",u),o=u.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){n.hooks.run("complete",u),r&&r.call(u.element);return}if(n.hooks.run("before-highlight",u),!u.grammar){F(n.util.encode(u.code));return}if(e&&l.Worker){var S=new Worker(n.filename);S.onmessage=function(I){F(I.data)},S.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else F(n.highlight(u.code,u.grammar,u.language))},highlight:function(a,e,r){var s={code:a,grammar:e,language:r};if(n.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),y.stringify(n.util.encode(s.tokens),s.language)},tokenize:function(a,e){var r=e.rest;if(r){for(var s in r)e[s]=r[s];delete e.rest}var i=new P;return p(i,i.head,a),x(a,i,e,i.head,0),k(i)},hooks:{all:{},add:function(a,e){var r=n.hooks.all;r[a]=r[a]||[],r[a].push(e)},run:function(a,e){var r=n.hooks.all[a];if(!(!r||!r.length))for(var s=0,i;i=r[s++];)i(e)}},Token:y};l.Prism=n;function y(a,e,r,s){this.type=a,this.content=e,this.alias=r,this.length=(s||"").length|0}y.stringify=function a(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var s="";return e.forEach(function(F){s+=a(F,r)}),s}var i={type:e.type,content:a(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),n.hooks.run("wrap",i);var m="";for(var u in i.attributes)m+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+m+">"+i.content+"</"+i.tag+">"};function c(a,e,r,s){a.lastIndex=e;var i=a.exec(r);if(i&&s&&i[1]){var o=i[1].length;i.index+=o,i[0]=i[0].slice(o)}return i}function x(a,e,r,s,i,o){for(var m in r)if(!(!r.hasOwnProperty(m)||!r[m])){var u=r[m];u=Array.isArray(u)?u:[u];for(var F=0;F<u.length;++F){if(o&&o.cause==m+","+F)return;var S=u[F],I=S.inside,N=!!S.lookbehind,Q=!!S.greedy,me=S.alias;if(Q&&!S.pattern.global){var ve=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,ve+"g")}for(var V=S.pattern||S,E=s.next,$=i;E!==e.tail&&!(o&&$>=o.reach);$+=E.value.length,E=E.next){var M=E.value;if(e.length>a.length)return;if(!(M instanceof y)){var G=1,T;if(Q){if(T=c(V,$,a,N),!T||T.index>=a.length)break;var q=T.index,ye=T.index+T[0].length,L=$;for(L+=E.value.length;q>=L;)E=E.next,L+=E.value.length;if(L-=E.value.length,$=L,E.value instanceof y)continue;for(var O=E;O!==e.tail&&(L<ye||typeof O.value=="string");O=O.next)G++,L+=O.value.length;G--,M=a.slice($,L),T.index-=$}else if(T=c(V,0,M,N),!T)continue;var q=T.index,B=T[0],U=M.slice(0,q),ee=M.slice(q+B.length),Z=$+M.length;o&&Z>o.reach&&(o.reach=Z);var W=E.prev;U&&(W=p(e,W,U),$+=U.length),f(e,W,G);var be=new y(m,I?n.tokenize(B,I):B,me,B);if(E=p(e,W,be),ee&&p(e,E,ee),G>1){var J={cause:m+","+F,reach:Z};x(a,e,r,E.prev,$,J),o&&J.reach>o.reach&&(o.reach=J.reach)}}}}}}function P(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function p(a,e,r){var s=e.next,i={value:r,prev:e,next:s};return e.next=i,s.prev=i,a.length++,i}function f(a,e,r){for(var s=e.next,i=0;i<r&&s!==a.tail;i++)s=s.next;e.next=s,s.prev=e,a.length-=i}function k(a){for(var e=[],r=a.head.next;r!==a.tail;)e.push(r.value),r=r.next;return e}if(!l.document)return l.addEventListener&&(n.disableWorkerMessageHandler||l.addEventListener("message",function(a){var e=JSON.parse(a.data),r=e.language,s=e.code,i=e.immediateClose;l.postMessage(n.highlight(s,n.languages[r],r)),i&&l.close()},!1)),n;var w=n.util.currentScript();w&&(n.filename=w.src,w.hasAttribute("data-manual")&&(n.manual=!0));function A(){n.manual||n.highlightAll()}if(!n.manual){var _=document.readyState;_==="loading"||_==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return n}(g);h.exports&&(h.exports=t),typeof re<"u"&&(re.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(d,v){var b={};b["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[v]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};n["language-"+v]={pattern:/[\s\S]+/,inside:t.languages[v]};var y={};y[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:n},t.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(l,d){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:t.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(l){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var v=l.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading…",d=function(w,A){return"✖ Error "+w+" while fetching file: "+A},v="✖ Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",y="loading",c="loaded",x="failed",P="pre[data-src]:not(["+n+'="'+c+'"]):not(['+n+'="'+y+'"])';function p(w,A,_){var a=new XMLHttpRequest;a.open("GET",w,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?A(a.responseText):a.status>=400?_(d(a.status,a.statusText)):_(v))},a.send(null)}function f(w){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(A){var _=Number(A[1]),a=A[2],e=A[3];return a?e?[_,Number(e)]:[_,void 0]:[_,_]}}t.hooks.add("before-highlightall",function(w){w.selector+=", "+P}),t.hooks.add("before-sanity-check",function(w){var A=w.element;if(A.matches(P)){w.code="",A.setAttribute(n,y);var _=A.appendChild(document.createElement("CODE"));_.textContent=l;var a=A.getAttribute("data-src"),e=w.language;if(e==="none"){var r=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=b[r]||r}t.util.setLanguage(_,e),t.util.setLanguage(A,e);var s=t.plugins.autoloader;s&&s.loadLanguages(e),p(a,function(i){A.setAttribute(n,c);var o=f(A.getAttribute("data-range"));if(o){var m=i.split(/\r\n?|\n/g),u=o[0],F=o[1]==null?m.length:o[1];u<0&&(u+=m.length),u=Math.max(0,Math.min(u-1,m.length)),F<0&&(F+=m.length),F=Math.max(0,Math.min(F,m.length)),i=m.slice(u,F).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(u+1))}_.textContent=i,t.highlightElement(_)},function(i){A.setAttribute(n,x),_.textContent=i})}}),t.plugins.fileHighlight={highlight:function(A){for(var _=(A||document).querySelectorAll(P),a=0,e;e=_[a++];)t.highlightElement(e)}};var k=!1;t.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ie);const he=K,se="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+se+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+se+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",h=>{h.type==="entity"&&(h.attributes.title=h.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(g,t){const l={};l["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;const d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};d["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const v={};v[g]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,g),"i"),lookbehind:!0,greedy:!0,inside:d},Prism.languages.insertBefore("svelte","cdata",v)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");function Le(h){let g,t;return{c(){g=new Se(!1),t=ne(),this.h()},l(l){g=Ee(l,!1),t=ne(),this.h()},h(){g.a=t},m(l,d){g.m(h[2],l,d),j(l,t,d)},p(l,d){d&4&&g.p(l[2])},d(l){l&&C(t),l&&g.d()}}}function Me(h){let g;return{c(){g=fe(h[2])},l(t){g=pe(t,h[2])},m(t,l){j(t,g,l)},p(t,l){l&4&&Pe(g,t[2])},d(t){t&&C(g)}}}function Re(h){let g,t,l,d,v,b,n;const y=h[6].default,c=Ae(y,h,h[5],null);function x(f,k){return f[0]==="none"?Me:Le}let P=x(h),p=P(h);return{c(){g=R("code"),c&&c.c(),t=X(),l=R("pre"),d=R("code"),p.c(),this.h()},l(f){g=z(f,"CODE",{style:!0});var k=H(g);c&&c.l(k),k.forEach(C),t=Y(f),l=z(f,"PRE",{class:!0,"command-line":!0,"data-output":!0});var w=H(l);d=z(w,"CODE",{class:!0});var A=H(d);p.l(A),A.forEach(C),w.forEach(C),this.h()},h(){Fe(g,"display","none"),D(d,"class",v="language-"+h[0]),D(l,"class",b="language-"+h[0]),D(l,"command-line",""),D(l,"data-output","2-17")},m(f,k){j(f,g,k),c&&c.m(g,null),h[7](g),j(f,t,k),j(f,l,k),ge(l,d),p.m(d,null),n=!0},p(f,[k]){c&&c.p&&(!n||k&32)&&we(c,y,f,f[5],n?ke(y,f[5],k,null):xe(f[5]),null),P===(P=x(f))&&p?p.p(f,k):(p.d(1),p=P(f),p&&(p.c(),p.m(d,null))),(!n||k&1&&v!==(v="language-"+f[0]))&&D(d,"class",v),(!n||k&1&&b!==(b="language-"+f[0]))&&D(l,"class",b)},i(f){n||(ce(c,f),n=!0)},o(f){de(c,f),n=!1},d(f){f&&C(g),c&&c.d(f),h[7](null),f&&C(t),f&&C(l),p.d()}}}const ie=he;he.highlightElement;const ze={transform:h=>h};function Oe(h,g,t){let{$$slots:l={},$$scope:d}=g,{language:v="javascript"}=g,{source:b=""}=g,{transform:n=p=>p}=g,y,c;function x(){const p=ie.languages[v];let f=b||y.textContent;f=ze.transform(f),f=n(f),t(2,c=v==="none"?f:ie.highlight(f,p,v))}function P(p){_e[p?"unshift":"push"](()=>{y=p,t(1,y)})}return h.$$set=p=>{t(9,g=ae(ae({},g),te(p))),"language"in p&&t(0,v=p.language),"source"in p&&t(3,b=p.source),"transform"in p&&t(4,n=p.transform),"$$scope"in p&&t(5,d=p.$$scope)},h.$$.update=()=>{g&&(b||y)&&x()},g=te(g),[v,y,c,b,n,d,l,P]}let He=class extends le{constructor(g){super(),ue(this,g,Oe,Re,oe,{language:0,source:3,transform:4})}};function Ge(h){let g,t,l,d,v,b,n,y;return n=new He({props:{language:"js",source:h[0]}}),{c(){g=R("link"),t=X(),l=R("h1"),d=fe("About Me"),v=X(),b=R("div"),Ce(n.$$.fragment),this.h()},l(c){g=z(c,"LINK",{rel:!0,href:!0}),t=Y(c),l=z(c,"H1",{});var x=H(l);d=pe(x,"About Me"),x.forEach(C),v=Y(c),b=z(c,"DIV",{class:!0});var P=H(b);Te(n.$$.fragment,P),P.forEach(C),this.h()},h(){D(g,"rel","stylesheet"),D(g,"href","https://unpkg.com/prism-themes@1.6.0/themes/prism-atom-dark.css"),D(b,"class","codeBlock svelte-11zu2kx")},m(c,x){j(c,g,x),j(c,t,x),j(c,l,x),ge(l,d),j(c,v,x),j(c,b,x),$e(n,b,null),y=!0},p:je,i(c){y||(ce(n.$$.fragment,c),y=!0)},o(c){de(n.$$.fragment,c),y=!1},d(c){c&&C(g),c&&C(t),c&&C(l),c&&C(v),c&&C(b),De(n)}}}function qe(h){return[`class Me {
    let name = "Sailor Priddy";
    let age = 16;
    let gender = {
        pronouns: "she/they",
        gender: "transed 😎"
    }
    let interests = [
        "Information Technology",
        "Rhythm Games",
        "Drawing and Animation",
        "Music Production"
    ];
    let knownProgramLangs = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Lua",
        "C#",
        "Haxe"
    ];
    function doWork() {
        for (let i = 0; i < 1000; i++) {
            procrastinate();
        }
        actuallyDoWork();
    }
    function ActuallyDoWork() {
        doWork();
    }
}`]}class Ue extends le{constructor(g){super(),ue(this,g,qe,Ge,oe,{})}}export{Ue as default};