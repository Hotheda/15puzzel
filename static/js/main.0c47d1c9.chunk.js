(this.webpackJsonpkodtest=this.webpackJsonpkodtest||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),u=n.n(c),i=n(1),o=n(3);function l(e){return a.a.createElement("div",{className:"board"},function(){for(var t=e.bricks.length,n=[],r=0;r<t-1;r+=e.columns){for(var c=[],u=0;u<e.columns;u++){var i=r+u;c.push(e.bricks[i])}n.push(c)}return n.map((function(e){return a.a.createElement("div",{key:e[0].key,className:"board_row"},e)}))}())}function s(e){var t="no_brick";return e.shuffle&&0!==e.brick_number?t="brick shuffle_brick":"brick"!=e.brickToMove&&0!==e.brick_number?t="brick "+e.brickToMove:e.brick_number>0&&(t="brick"),a.a.createElement("div",{onClick:function(t){return e.onBrickClick(e.brick_number)},className:t},a.a.createElement("p",null,e.brick_number))}function m(e){return a.a.createElement("div",{className:"shuffle"},a.a.createElement("button",{className:"shuffle_btn",onClick:function(){return e.shuffleBricks()}},"Shuffle me here"))}function f(e){return a.a.createElement("div",{className:"winner_text"},a.a.createElement("h1",null,"You win, congratulations!"),a.a.createElement("p",null,"It took ",e.numberOfMoves," moves to finish"))}function b(e){var t=e.columns,n=e.rows,c=Object(r.useState)(0),u=Object(i.a)(c,2),b=u[0],v=u[1],d=Object(r.useState)(!1),k=Object(i.a)(d,2),h=k[0],p=k[1],_=Object(r.useState)(!1),E=Object(i.a)(_,2),O=E[0],j=E[1],w=Object(r.useState)([]),g=Object(i.a)(w,2),S=g[0],N=g[1],x=Object(r.useState)(!0),B=Object(i.a)(x,2),I=B[0];B[1];Object(r.useEffect)((function(){for(var e=[],r=0;r<t*n;r++)0!=r?e.push({number:r,direction:"brick"}):e.push({number:r,direction:"no_brick"});var a=M(e);N(a)}),[t,n]);var M=function(e){var t=Object(o.a)(e);do{for(var n=0;n<30;n++){var r=Math.floor(Math.random()*t.length-1);t.splice(r,0,t[t.length-1]),t.pop()}}while(Y(t));return p(!1),v(0),t},y=function(e){var t=S.findIndex((function(t){return t.number===e})),n=S.findIndex((function(e){return 0===e.number})),r=T(t,n);r?J(t,n,r):I&&(r=C(t,n))&&V(t,n,r)},z=function(e){for(var r=Object(o.a)(S),a=0;a<t*n;a++)r[a].direction="brick";e.forEach((function(e){r[e.id].direction=e.direction})),N(r)},C=function(e,r){if(e<r){if(e>=parseInt(r/t)*n)return"move_right";if(e%t===r%t)return"move_down"}else if(e>r){if(e<=parseInt(r/t)*n+n)return"move_left";if(e%t===r%t)return"move_up"}},T=function(e,n){return e-1===n&&e%t?"move_left":e+1===n&&(e+1)%t?"move_right":e-t===n?"move_up":e+t===n&&"move_down"},J=function(e,t,n){var r=Object(o.a)(S);r[t].number=r[e].number,r[e].number=0,N(r),Y(r),z([{id:t,direction:n}]),v(b+1)},V=function(e,t,r){for(var a=Object(o.a)(S),c=t,u=t,i=[];"move_left"===r&&e-1>c||"move_right"===r&&e+1<c||"move_up"===r&&e-n>c||"move_down"===r&&e+n<c;){switch(c=u,r){case"move_left":u=c+1;break;case"move_right":u=c-1;break;case"move_up":u=c+n;break;case"move_down":u=c-n}i.push({id:u,direction:r});var l=a[u];a[u]=a[c],a[c]=l}z(i),N(a),Y(a),v(b+1)},Y=function(e){for(var t=0;t<e.length-1;t++)if(e[t]!==t+1)return!1;return p(!0),!0},q=S.map((function(e){return a.a.createElement(s,{key:e.number,brick_number:e.number,shuffle:O,brickToMove:e.direction,onBrickClick:y})}));return O&&setTimeout((function(){j(!1)}),500),a.a.createElement("div",null,a.a.createElement(l,{bricks:q,rows:n,columns:t}),h?a.a.createElement(f,{numberOfMoves:b}):null,a.a.createElement(m,{shuffleBricks:function(){j(!0),N(M(S))}}))}function v(e){return a.a.createElement("div",{className:"size_input_div"},a.a.createElement("label",null,"Board size: "),a.a.createElement("select",{className:"size_input",onChange:function(t){return e.setBoardSize(t)},type:"number",id:e.id,defaultValue:e.default},a.a.createElement("option",{value:"3"},"3 x 3"),a.a.createElement("option",{value:"4"},"4 x 4"),a.a.createElement("option",{value:"5"},"5 x 5"),a.a.createElement("option",{value:"6"},"6 x 6")))}function d(){var e=Object(r.useState)(4),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(4),o=Object(i.a)(u,2),l=o[0],s=o[1];return a.a.createElement("div",{className:"main_div"},a.a.createElement(b,{rows:n,columns:l}),a.a.createElement(v,{id:"rowsandcolumns",default:n,setBoardSize:function(e){c(parseInt(e.target.value)),s(parseInt(e.target.value))}}))}n(12);function k(){return a.a.createElement(d,null)}u.a.render(a.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0c47d1c9.chunk.js.map