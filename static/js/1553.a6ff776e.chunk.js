"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[1553],{1553:function(e,n,t){t.r(n),t.d(n,{brainfuck:function(){return r}});var o="><+-.,[]".split(""),r={name:"brainfuck",startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,n){if(e.eatSpace())return null;e.sol()&&(n.commentLine=!1);var t=e.next().toString();return-1===o.indexOf(t)?(n.commentLine=!0,e.eol()&&(n.commentLine=!1),"comment"):!0===n.commentLine?(e.eol()&&(n.commentLine=!1),"comment"):"]"===t||"["===t?("["===t?n.left++:n.right++,"bracket"):"+"===t||"-"===t?"keyword":"<"===t||">"===t?"atom":"."===t||","===t?"def":void(e.eol()&&(n.commentLine=!1))}}}}]);
//# sourceMappingURL=1553.a6ff776e.chunk.js.map