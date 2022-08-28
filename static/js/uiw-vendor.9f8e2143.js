/*! For license information please see uiw-vendor.9f8e2143.js.LICENSE.txt */
(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[4382],{9343:function(e,t,o){"use strict";o.d(t,{j:function(){return r}});var n=o(9593),i=o(659),r=function(e){var t=e.theme,o=e.settings,r=e.styles,a={"&":{backgroundColor:o.background,color:o.foreground},".cm-gutters":{}};o.gutterBackground&&(a[".cm-gutters"].backgroundColor=o.gutterBackground),o.gutterForeground&&(a[".cm-gutters"].color=o.gutterForeground),o.gutterBorder&&(a[".cm-gutters"].borderRightColor=o.gutterBorder),o.caret&&(a[".cm-content"]={caretColor:o.caret},a[".cm-cursor, .cm-dropCursor"]={borderLeftColor:o.caret}),o.lineHighlight&&(a[".cm-activeLine"]={backgroundColor:o.lineHighlight},a[".cm-activeLineGutter"]={backgroundColor:o.lineHighlight}),o.selection&&(a["&.cm-focused .cm-selectionBackground .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, ::selection"]={backgroundColor:o.selection}),o.selectionMatch&&(a["& .cm-selectionMatch"]={backgroundColor:o.selectionMatch});var s=n.tk.theme(a,{dark:"dark"===t}),c=i.Qf.define(r);return[s,(0,i.nF)(c)]}},6871:function(e){e.exports=function(){"use strict";function e(e,t){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style={position:"absolute",left:"-9999px"},document.body.appendChild(o);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select();var i=!1;try{i=!!document.execCommand("copy")}catch(r){i=!1}document.body.removeChild(o),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(i)}return e}()},4412:function(e,t,o){"use strict";o.d(t,{ZP:function(){return b}});var n=o(7462),i=o(3366),r=o(5848),a=o(9439),s=o(1383),c=o(8491),l=o(9593),d=o(9515),u=o(4941),h=o(659),m=o(1435),p=function(e){void 0===e&&(e={});var t=[];!1!==e.closeBracketsKeymap&&(t=t.concat(u.GA)),!1!==e.defaultKeymap&&(t=t.concat(c.wQ)),!1!==e.searchKeymap&&(t=t.concat(d.Lp)),!1!==e.historyKeymap&&(t=t.concat(c.f$)),!1!==e.foldKeymap&&(t=t.concat(h.e7)),!1!==e.completionKeymap&&(t=t.concat(u.B1)),!1!==e.lintKeymap&&(t=t.concat(m.Fv));var o=[];return!1!==e.lineNumbers&&o.push((0,l.Eu)()),!1!==e.highlightActiveLineGutter&&o.push((0,l.HQ)()),!1!==e.highlightSpecialChars&&o.push((0,l.AE)()),!1!==e.history&&o.push((0,c.m8)()),!1!==e.foldGutter&&o.push((0,h.mi)()),!1!==e.drawSelection&&o.push((0,l.Uw)()),!1!==e.dropCursor&&o.push((0,l.qr)()),!1!==e.allowMultipleSelections&&o.push(s.yy.allowMultipleSelections.of(!0)),!1!==e.indentOnInput&&o.push((0,h.nY)()),!1!==e.syntaxHighlighting&&o.push((0,h.nF)(h.R_,{fallback:!0})),!1!==e.bracketMatching&&o.push((0,h.n$)()),!1!==e.closeBrackets&&o.push((0,u.vQ)()),!1!==e.autocompletion&&o.push((0,u.ys)()),!1!==e.rectangularSelection&&o.push((0,l.Zs)()),!1!==e.crosshairCursor&&o.push((0,l.S2)()),!1!==e.highlightActiveLine&&o.push((0,l.ZO)()),!1!==e.highlightSelectionMatches&&o.push((0,d.sW)()),o.concat([l.$f.of(t.flat())]).filter(Boolean)},f=o(8402);function g(e){var t=e.value,o=e.selection,n=e.onChange,i=e.onStatistics,d=e.onCreateEditor,u=e.onUpdate,h=e.extensions,m=void 0===h?[]:h,g=e.autoFocus,v=e.theme,y=void 0===v?"light":v,C=e.height,b=void 0===C?"":C,w=e.minHeight,k=void 0===w?"":w,x=e.maxHeight,Z=void 0===x?"":x,S=e.placeholder,L=void 0===S?"":S,N=e.width,E=void 0===N?"":N,H=e.minWidth,A=void 0===H?"":H,M=e.maxWidth,z=void 0===M?"":M,B=e.editable,W=void 0===B||B,R=e.readOnly,O=void 0!==R&&R,_=e.indentWithTab,F=void 0===_||_,T=e.basicSetup,K=void 0===T||T,P=e.root,j=(0,r.useState)(),U=(0,a.Z)(j,2),$=U[0],I=U[1],D=(0,r.useState)(),G=(0,a.Z)(D,2),Q=G[0],q=G[1],V=(0,r.useState)(),Y=(0,a.Z)(V,2),J=Y[0],X=Y[1],ee=l.tk.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),te=l.tk.theme({"&":{height:b,minHeight:k,maxHeight:Z,width:E,minWidth:A,maxWidth:z}}),oe=l.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof n){var t=e.state.doc.toString();n(t,e)}i&&i(function(e){return{line:e.state.doc.lineAt(e.state.selection.main.from),lineCount:e.state.doc.lines,lineBreak:e.state.lineBreak,length:e.state.doc.length,readOnly:e.state.readOnly,tabSize:e.state.tabSize,selection:e.state.selection,selectionAsSingle:e.state.selection.asSingle().main,ranges:e.state.selection.ranges,selectionCode:e.state.sliceDoc(e.state.selection.main.from,e.state.selection.main.to),selections:e.state.selection.ranges.map((function(t){return e.state.sliceDoc(t.from,t.to)})),selectedText:e.state.selection.ranges.some((function(e){return!e.empty}))}}(e))})),ne=[oe,te];switch(F&&ne.unshift(l.$f.of([c.oc])),K&&("boolean"===typeof K?ne.unshift(p()):ne.unshift(p(K))),L&&ne.unshift((0,l.W$)(L)),y){case"light":ne.push(ee);break;case"dark":ne.push(f.vk);break;default:ne.push(y)}return!1===W&&ne.push(l.tk.editable.of(!1)),O&&ne.push(s.yy.readOnly.of(!0)),u&&"function"===typeof u&&ne.push(l.tk.updateListener.of(u)),ne=ne.concat(m),(0,r.useEffect)((function(){if($&&!J){var e=s.yy.create({doc:t,selection:o,extensions:ne});if(X(e),!Q){var n=new l.tk({state:e,parent:$,root:P});q(n),d&&d(n,e)}}return function(){Q&&(X(void 0),q(void 0))}}),[$,J]),(0,r.useEffect)((function(){return I(e.container)}),[e.container]),(0,r.useEffect)((function(){return function(){Q&&(Q.destroy(),q(void 0))}}),[Q]),(0,r.useEffect)((function(){g&&Q&&Q.focus()}),[g,Q]),(0,r.useEffect)((function(){Q&&Q.dispatch({effects:s.Py.reconfigure.of(ne)})}),[y,m,b,k,Z,E,A,z,L,W,O,F,K,n,u]),(0,r.useEffect)((function(){var e=Q?Q.state.doc.toString():"";Q&&t!==e&&Q.dispatch({changes:{from:0,to:e.length,insert:t||""}})}),[t,Q]),{state:J,setState:X,view:Q,setView:q,container:$,setContainer:I}}var v=o(2466),y=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root"],C=(0,r.forwardRef)((function(e,t){var o=e.className,a=e.value,s=void 0===a?"":a,c=e.selection,l=e.extensions,d=void 0===l?[]:l,u=e.onChange,h=e.onStatistics,m=e.onCreateEditor,p=e.onUpdate,f=e.autoFocus,C=e.theme,b=void 0===C?"light":C,w=e.height,k=e.minHeight,x=e.maxHeight,Z=e.width,S=e.minWidth,L=e.maxWidth,N=e.basicSetup,E=e.placeholder,H=e.indentWithTab,A=e.editable,M=e.readOnly,z=e.root,B=(0,i.Z)(e,y),W=(0,r.useRef)(null),R=g({container:W.current,root:z,value:s,autoFocus:f,theme:b,height:w,minHeight:k,maxHeight:x,width:Z,minWidth:S,maxWidth:L,basicSetup:N,placeholder:E,indentWithTab:H,editable:A,readOnly:M,selection:c,onChange:u,onStatistics:h,onCreateEditor:m,onUpdate:p,extensions:d}),O=R.state,_=R.view,F=R.container;R.setContainer;if((0,r.useImperativeHandle)(t,(function(){return{editor:W.current,state:O,view:_}}),[W,F,O,_]),"string"!==typeof s)throw new Error("value must be typeof string but got "+typeof s);var T="string"===typeof b?"cm-theme-"+b:"cm-theme";return(0,v.jsx)("div",(0,n.Z)({ref:W,className:T+(o?" "+o:"")},B))}));C.displayName="CodeMirror";var b=C},2163:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var n=o(7462),i=o(3366),r=(o(5848),o(3433)),a=o(5671),s=o(3144),c=o(136),l=o(3668),d=o(8737),u=document.createElement("template");u.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';var h=function(e){(0,c.Z)(o,e);var t=(0,l.Z)(o);function o(){var e;return(0,a.Z)(this,o),(e=t.call(this)).right="0",e.shadow=e.attachShadow({mode:"open"}),e.shadow.appendChild(e.ownerDocument.importNode(u.content,!0)),e.update(),e}return(0,s.Z)(o,[{key:"setAttr",value:function(e,t){var o=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?o.lastElementChild.setAttribute("xlink:href",t):/(color|fill)/.test(e.toLocaleLowerCase())?o.firstElementChild.style[e]=t:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?o.style[e]=t:o.setAttribute(e,t)}},{key:"update",value:function(){var e=this;[].concat((0,r.Z)(this.getAttributeNames()),["right"]).forEach((function(t){var o=e.getAttribute(t)||e[t]||"";e.setAttr(t,o)}))}},{key:"attributeChangedCallback",value:function(e,t,o){t!==o&&this.setAttr(e,o)}}],[{key:"observedAttributes",get:function(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}}]),o}((0,d.Z)(HTMLElement));customElements.define("github-corners",h);var m=o(2466),p=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function f(e){var t=e.size,o=void 0===t?80:t,r=e.fixed,a=void 0!==r&&r,s=e.bottom,c=e.zIndex,l=e.style,d=e.bgColor,u=void 0===d?"#151513":d,h=e.color,f=void 0===h?"#fff":h,g=e.position,v=void 0===g?"right":g,y=(0,i.Z)(e,p),C="left"===v?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return s?(C.bottom=0,C.top="initial",C.transform="left"===v?"scale(-1, -1)":"scale(1, -1)"):(C.bottom="initial",C.top=0),(0,m.jsx)("github-corners",(0,n.Z)({target:"__blank",width:o,height:o,href:e.href,position:a?"fixed":"absolute","z-index":c,style:l,fill:u,color:f},C,y))}},2714:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var n=o(3433),i=o(7462),r=o(3366),a=o(5848),s=o(7685),c=o(6442),l=o(3919),d=o(2134),u=o(5033),h=o(8903),m=o(2208),p=o(4775),f=o(997),g={type:"element",tagName:"svg",properties:{className:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",ariaHidden:"true"},children:[{type:"element",tagName:"path",children:[],properties:{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}}]},v=o(6871),y=o.n(v);var C=o(9664),b=function(e){return void 0===e&&(e={}),function(e){(0,C.Vn)(e,(function(e){"element"===e.type&&"code"===e.tagName&&e.data&&e.data.meta&&(e.properties=(0,i.Z)({},e.properties,{"data-meta":String(e.data.meta)}))}))}},w=o(2466),k=["prefixCls","className","source","style","disableCopy","onScroll","onMouseOver","pluginsFilter","rehypeRewrite","warpperElement"],x=a.forwardRef((function(e,t){var o=e.prefixCls,v=void 0===o?"wmde-markdown wmde-markdown-color":o,C=e.className,x=e.source,Z=e.style,S=e.disableCopy,L=void 0!==S&&S,N=e.onScroll,E=e.onMouseOver,H=e.pluginsFilter,A=e.rehypeRewrite,M=e.warpperElement,z=void 0===M?{}:M,B=(0,r.Z)(e,k),W=a.createRef();(0,a.useImperativeHandle)(t,(function(){return(0,i.Z)({},e,{mdp:W})}),[W,e]);var R=(v||"")+" "+(C||""),O=[b,[p.ZP,{ignoreMissing:!0}],u.Z,l.Z,d.Z,m.Z,[f.Z,{rewrite:function(e,t,o){if("element"===e.type&&o&&"root"===o.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.properties=(0,i.Z)({class:"anchor"},n.properties),n.children=[g])}if("element"===e.type&&"pre"===e.tagName&&!L){var r=(0,f.U)(e.children);e.children.push((void 0===(a=r)&&(a=""),{type:"element",tagName:"div",properties:{onClick:function(e){var t=e.currentTarget||e.target;t.classList.add("active"),y()(t.dataset.code,(function(){setTimeout((function(){t.classList.remove("active")}),2e3)}))},"data-code":a,class:"copied"},children:[{type:"element",tagName:"svg",properties:{className:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{className:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}))}var a;A&&A(e,t,o)}}],[h.Z,{properties:"attr"}]].concat((0,n.Z)(B.rehypePlugins||[])),_={allowElement:function(e,t,o){return B.allowElement?B.allowElement(e,t,o):/^[A-Za-z0-9]+$/.test(e.tagName)}},F=[].concat((0,n.Z)(B.remarkPlugins||[]),[c.Z]);return(0,w.jsx)("div",(0,i.Z)({ref:W,onScroll:N,onMouseOver:E},z,{className:R,style:Z,children:(0,w.jsx)(s.D,(0,i.Z)({},B,_,{rehypePlugins:H?H("rehype",O):O,remarkPlugins:H?H("remark",F):F,children:x||""}))}))}))}}]);
//# sourceMappingURL=uiw-vendor.9f8e2143.js.map