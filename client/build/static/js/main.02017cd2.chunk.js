(this.webpackJsonpreact2dust=this.webpackJsonpreact2dust||[]).push([[0],{71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(30),a=c.n(n),i=c(0);var r=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid ",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(i.jsx)("header",{className:"navbar-brand header",children:" Comp2Dust "})})};var l=function(){return Object(i.jsx)("footer",{className:"rounded",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(i.jsx)("div",{className:"navbar navbar-light navbar-expand",children:Object(i.jsx)("div",{className:"container justify-content-center",children:Object(i.jsxs)("ul",{className:"nav navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"A simple Manual",children:"Docs"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled ",children:"Examples"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link",href:"https://github.com/YigitSIK/Comp2Dust",title:"View the GitHub project",children:"GitHub"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"This part will be an explanation about algs",title:"Explore more projects",children:"Explore"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"Explanation of the project",title:"About the author",children:"About"})})]})})})})},o=c(14),j=c(3),d=c(4),b=c.n(d),m=c(7),u=c.n(m),h=(c(26),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}}),p={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:6},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}},O=c(10),x=c.n(O),g=c(74);var f=function(e){return Object(i.jsxs)("div",{className:"col-lg-8 rounded",children:[Object(i.jsx)(u.a,{responsive:h,swipeable:!1,draggable:!1,children:!1===e.checkIn&&!1===e.checkOut?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:"/images/upload.jpg",rightImage:"/images/upload.jpg"},"default")}):e.imageArray.inputArray.map((function(t,c){return function(t,c){return console.log(t),!0===e.checkIn&&!1===e.checkOut?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+t},c)}):e.checkIn&&e.checkOut?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+e.outputArray.outputArray[c]},c)}):void 0}(t,c)}))}),Object(i.jsx)("div",{children:null===e.uploadProgress||100===e.uploadProgress?null:Object(i.jsxs)("div",{className:"my-5",children:[Object(i.jsx)("label",{htmlFor:"props.uploadProgress",children:Object(i.jsx)("h6",{children:"Upload Progress"})}),Object(i.jsx)(g.a,{now:e.uploadProgress})]})}),e.checkOut?Object(i.jsxs)("div",{className:" alert alert-info text-center mt-3",children:["You have saved ",(e.size-e.oSize).toFixed(1)," kb in total"]}):null,Object(i.jsx)("div",{children:!1===e.checkOut&&!0===e.checkIn?Object(i.jsx)("div",{className:" alert alert-info text-center mt-3",children:"Choose your options then press compress button to compress your images"}):null})]})};var v=function(e){return Object(i.jsx)("div",{className:"column col mb-3  shadow-sm d-flex",id:"dispCard",children:Object(i.jsx)("img",{className:"card-img",id:"imgDisp",src:e.src,alt:"upload.jpg"},e.src)})};var N=function(e){var t=e.id,c=e.parentProps.statistics,s=String(c[e.id].input);return s=s.substring(s.lastIndexOf("/")+1,s.length),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:c[e.id].algorithm}),Object(i.jsx)("td",{children:(c[e.id].size_in/1024).toFixed(1)+" kb"}),Object(i.jsx)("td",{children:(c[e.id].size_output/1024).toFixed(1)+" kb"}),Object(i.jsx)("td",{children:c[e.id].percent})]})};var y=function(e){return Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsxs)("div",{className:"card my-3 shadow rounded",children:[Object(i.jsxs)("h5",{className:"card-header d-flex align-items-center justify-content-between",children:[Object(i.jsx)("span",{children:"Input image "}),0==e.checkOut?null:Object(i.jsx)("a",{onClick:function(){b.a.get("/download").then((function(e){window.open("https://comp2dust.herokuapp.com/download")})).catch((function(e){console.log(e)}))},download:"pack.zip",className:"btn btn-primary",children:"download"})]}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(u.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut?Object(i.jsx)(v,{src:"/images/upload.jpg"}):e.imageArray.inputArray.map((function(t,c){return function(t){return!1===e.checkIn?Object(i.jsx)(v,{src:"/images/upload.jpg"}):!0===e.checkIn?Object(i.jsx)(v,{src:e.sessionID+"/"+t},t):void 0}(t)}))}),Object(i.jsx)("hr",{}),Object(i.jsx)(u.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut?null:e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(i.jsx)(v,{src:e.sessionID+"/"+e.outputArray.outputArray[c]},e.outputArray.outputArray[c])}(0,c)}))}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("table",{className:"table shadow-sm",children:[!1===e.checkOut?null:Object(i.jsx)("thead",{className:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Name"}),Object(i.jsx)("th",{scope:"col",children:"Algorithm"}),Object(i.jsx)("th",{scope:"col",children:"Input Size"}),Object(i.jsx)("th",{scope:"col",children:"Output Size"}),Object(i.jsx)("th",{scope:"col",children:"Compression %"})]})}),Object(i.jsx)("tbody",{children:!1===e.checkOut?null:e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(i.jsx)(N,{parentProps:e,id:c},c)}(0,c)}))})]})})})]})})]})})},k=c(8),w=c.n(k);var I=function(){function e(e){console.log(w()(e.target).val())}return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-md-6 offset-md-1",id:"optionBox",children:[Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"JPG Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"JPG",onChange:e,children:[Object(i.jsx)("option",{defaultValue:"mozjpeg",children:"mozjpeg"}),Object(i.jsx)("option",{value:"jpegtran",children:"jpegtran"}),Object(i.jsx)("option",{value:"webp",children:"webp"}),Object(i.jsx)("option",{value:"guetzli",children:"guetzli"}),Object(i.jsx)("option",{value:"jpegRecompress",children:"jpegRecompress"}),Object(i.jsx)("option",{value:"jpegoptim",children:"jpegoptim"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandJPG",id:"commandJPG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"PNG Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"PNG",onChange:e,children:[Object(i.jsx)("option",{defaultValue:!0,children:"pngquant"}),Object(i.jsx)("option",{value:"optipng",children:"optipng"}),Object(i.jsx)("option",{value:"pngout",children:"pngout"}),Object(i.jsx)("option",{value:"webp",children:"webp"}),Object(i.jsx)("option",{value:"pngcrush",children:"pngcrush"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandPNG",id:"commandPNG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"SVG Engine"})}),Object(i.jsx)("select",{className:"form-control",name:"SVG",children:Object(i.jsx)("option",{defaultValue:!0,children:"svgo"})})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandSVG",id:"commandSVG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"GIF Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"GIF",children:[Object(i.jsx)("option",{defaultValue:!0,children:"gifsicle"}),Object(i.jsx)("option",{value:"giflossy",children:"giflossy"}),Object(i.jsx)("option",{value:"gif2webp",children:"gif2webp"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandGIF",id:"commandGIF",onKeyUp:e})]})]})]})})})};var A=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(j.a)(a,2),l=r[0],d=r[1],m=Object(s.useState)(null),u=Object(j.a)(m,2),h=u[0],p=u[1],O=Object(s.useState)(0),x=Object(j.a)(O,2),g=x[0],v=x[1],N=Object(s.useState)(!1),k=Object(j.a)(N,2),A=k[0],S=k[1],G=Object(s.useState)(!1),C=Object(j.a)(G,2),F=C[0],P=C[1],z=Object(s.useState)(null),D=Object(j.a)(z,2),E=D[0],V=D[1],J=Object(s.useState)(null),U=Object(j.a)(J,2),K=U[0],R=U[1],_=Object(s.useState)(null),B=Object(j.a)(_,2),H=B[0],L=B[1],M=Object(s.useState)(0),T=Object(j.a)(M,2),Y=T[0],q=T[1],Q=Object(s.useState)(0),W=Object(j.a)(Q,2),X=W[0],Z=W[1];return Object(s.useEffect)((function(){!function(e){var t=new FormData;if(null!=l){var c,s=Object(o.a)(e.inputFiles);try{for(s.s();!(c=s.n()).done;){var a=c.value;t.append("file",a)}}catch(i){s.e(i)}finally{s.f()}b.a.post("/upload",t,{onUploadProgress:function(e){L(Math.round(e.loaded/e.total*100))}}).then((function(e){var t=new Array;Array.from(l.inputFiles).forEach((function(e){t.push(e.name)})),n({inputArray:t}),P(!0)})).catch((function(e){console.log(e)}))}}(l)}),[l]),Object(s.useEffect)((function(){var e=0,t=0;for(var c in console.log(E),E)e+=E[c].size_in/1024,t+=E[c].size_output/1024;q(e.toFixed(1)),Z(t.toFixed(1))}),[E]),w()("#optionsForm").keydown((function(e){if(13==e.keyCode)return e.preventDefault(),!1})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"btn-group col-12 mb-3 ",children:Object(i.jsxs)("label",{className:"btn btn-primary",title:"select an image (jpeg, png)",children:[Object(i.jsx)("h5",{children:"Upload"}),Object(i.jsx)("input",{type:"file",hidden:!0,id:"file",name:"file",multiple:"multiple",onChange:function(e){b.a.get("/reset").then((function(t){P(!1),S(!1),d({inputFiles:e.target.files}),R(t.data)})).catch((function(e){console.log(e)}))}}),"        "]})}),F?null:Object(i.jsxs)("div",{className:" alert alert-info text-center",children:[Object(i.jsx)("strong",{children:"To get started use the upload button to upload up to 100 JPG, PNG, GIF, SVG files"}),"                     "]}),Object(i.jsxs)("div",{className:"row",children:["             ",Object(i.jsx)(f,{imageArray:c,outputArray:h,checkOut:A,checkIn:F,statistics:E,sessionID:K,uploadProgress:H,size:Y,oSize:X}),Object(i.jsx)("div",{className:"col-lg-4 mb-4 ",children:Object(i.jsxs)("form",{action:"/compSubmit",id:"optionsForm",method:"post",children:["                          ",Object(i.jsxs)("div",{className:"card h-100 shadow rounded",children:[Object(i.jsx)("h4",{className:"card-header",children:"Options"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)(I,{}),"                                                                         ",Object(i.jsxs)("div",{className:"form-group row m-5",children:[Object(i.jsx)("button",{className:"btn bg-primary",onClick:function(){b.a.get("/buttonReset").then((function(e){S(!1)})).catch((function(e){console.log(e)}))},type:"button",children:"Reset"}),"                       "]}),Object(i.jsxs)("div",{className:"form-group row m-5",children:[Object(i.jsx)("button",{className:"btn bg-primary",onClick:function(){var e=w()("#optionsForm").serialize();b.a.get("/deleteOutput").then((function(t){S(!1),b.a.post("/compSubmit",e).then((function(e){V(e.data.statistics),b.a.post("/rename",{compIndex:g}).then((function(e){var t,s=new Array,n=Object(o.a)(c.inputArray);try{for(n.s();!(t=n.n()).done;){var a=t.value;s.push("compressed-"+g+"-"+a),v(g+1)}}catch(i){n.e(i)}finally{n.f()}p({outputArray:s}),S(!0)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},type:"button",children:"Compress"}),"                   "]})]})]})]})}),!0===F?Object(i.jsx)(y,{imageArray:c,outputArray:h,checkOut:A,checkIn:F,statistics:E,sessionID:K}):Object(i.jsx)("div",{})]})]})};var S=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"container rounded",children:[Object(i.jsx)(r,{}),"                               ",Object(i.jsx)(A,{}),"                                   ",Object(i.jsx)(l,{}),"                                  "]})})};c(71);a.a.render(Object(i.jsx)(S,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.02017cd2.chunk.js.map