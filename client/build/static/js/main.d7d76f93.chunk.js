(this.webpackJsonpreact2dust=this.webpackJsonpreact2dust||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(29),i=c.n(a),r=c(0);var l=function(){return Object(r.jsx)("div",{className:"jumbotron jumbotron-fluid ",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(r.jsx)("header",{className:"navbar-brand header",children:" Comp2Dust "})})},o=c(13),j=c(3),d=c(4),u=c.n(d),b=c(7),h=c.n(b),m=(c(25),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}}),p={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:6},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}},O=c(9),x=c.n(O),g=c(78);var f=function(e){return console.log(e),Object(r.jsxs)("div",{className:"col-lg-8 rounded",children:[Object(r.jsx)(h.a,{responsive:m,swipeable:!1,draggable:!1,children:!1===e.checkIn&&!1===e.checkOut?Object(r.jsx)("div",{className:"card ",id:"mainCard",children:Object(r.jsx)(x.a,{leftImage:"/images/upload.jpg",rightImage:"/images/upload.jpg"},"default")}):e.imageArray.inputArray.map((function(t,c){return function(t,c){return!0===e.checkIn&&!1===e.checkOut?Object(r.jsx)("div",{className:"card ",id:"mainCard",children:Object(r.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+t},c)}):e.checkIn&&e.checkOut?Object(r.jsx)("div",{className:"card ",id:"mainCard",children:Object(r.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+e.outputArray.outputArray[c]},c)}):void 0}(t,c)}))}),Object(r.jsx)("div",{children:null===e.uploadProgress||100===e.uploadProgress?null:Object(r.jsxs)("div",{className:"my-5",children:[Object(r.jsx)("label",{htmlFor:"props.uploadProgress",children:Object(r.jsx)("h6",{children:"Upload Progress"})}),Object(r.jsx)(g.a,{now:e.uploadProgress})]})}),e.checkOut?Object(r.jsxs)("div",{className:" alert alert-info text-center mt-3",children:["You have saved ",(e.size-e.oSize).toFixed(1)," kb in total"]}):null,Object(r.jsx)("div",{})]})};var v=function(e){return Object(r.jsx)("div",{className:"column col mb-3  shadow-sm d-flex",id:"dispCard",children:Object(r.jsx)("img",{className:"card-img",id:"imgDisp",src:e.src,alt:"upload.jpg"},e.src)})};var N=function(e){var t=e.id,c=e.parentProps.statistics,n=String(c[e.id].input);return n=n.substring(n.lastIndexOf("/")+1,n.length),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:t+1}),Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:c[e.id].algorithm}),Object(r.jsx)("td",{children:(c[e.id].size_in/1024).toFixed(1)+" kb"}),Object(r.jsx)("td",{children:(c[e.id].size_output/1024).toFixed(1)+" kb"}),Object(r.jsx)("td",{children:c[e.id].percent})]})};var y=function(e){return Object(r.jsx)("div",{className:"mb-4",children:Object(r.jsxs)("div",{className:"card my-3 shadow rounded",children:[Object(r.jsxs)("h5",{className:"card-header d-flex align-items-center justify-content-between",children:[Object(r.jsx)("span",{children:"Input image "}),0==e.checkOut?null:Object(r.jsx)("a",{onClick:function(){u.a.get("/download").then((function(e){window.open("https://comp2dust.herokuapp.com/download")})).catch((function(e){console.log(e)}))},download:"pack.zip",className:"btn btn-primary",children:"download"})]}),Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(h.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut?Object(r.jsx)(v,{src:"/images/upload.jpg"}):e.imageArray.inputArray.map((function(t,c){return function(t){return!1===e.checkIn?Object(r.jsx)(v,{src:"/images/upload.jpg"}):!0===e.checkIn?Object(r.jsx)(v,{src:e.sessionID+"/"+t},t):void 0}(t)}))}),Object(r.jsx)("hr",{}),Object(r.jsx)(h.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut?null:e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(r.jsx)(v,{src:e.sessionID+"/"+e.outputArray.outputArray[c]},e.outputArray.outputArray[c])}(0,c)}))}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:Object(r.jsxs)("table",{className:"table shadow-sm",children:[!1===e.checkOut?null:Object(r.jsx)("thead",{className:"thead-dark",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"#"}),Object(r.jsx)("th",{scope:"col",children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"Algorithm"}),Object(r.jsx)("th",{scope:"col",children:"Input Size"}),Object(r.jsx)("th",{scope:"col",children:"Output Size"}),Object(r.jsx)("th",{scope:"col",children:"Compression %"})]})}),Object(r.jsx)("tbody",{children:!1===e.checkOut?null:e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(r.jsx)(N,{parentProps:e,id:c},c)}(0,c)}))})]})})})]})})]})})},k=c(30),w=c.n(k),I=c(31),A=c(32),S=c(34),C=c(33),F=function(e){Object(S.a)(c,e);var t=Object(C.a)(c);function c(){return Object(I.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-6 offset-md-1",id:"optionBox",children:[Object(r.jsx)("div",{className:"form-row",children:Object(r.jsxs)("div",{className:"form-group  mb-3",children:[Object(r.jsx)("label",{children:Object(r.jsx)("h6",{children:"JPG Engine"})}),Object(r.jsxs)("select",{className:"form-control",name:"JPG",onChange:this.handleInputChange,children:[Object(r.jsx)("option",{defaultValue:!0,children:"mozjpeg"}),Object(r.jsx)("option",{value:"jpegtran",children:"jpegtran"}),Object(r.jsx)("option",{value:"webp",children:"webp"}),Object(r.jsx)("option",{value:"guetzli",children:"guetzli"}),Object(r.jsx)("option",{value:"jpegRecompress",children:"jpegRecompress"}),Object(r.jsx)("option",{value:"jpegoptim",children:"jpegoptim"})]})]})}),Object(r.jsx)("div",{className:"form-row",children:Object(r.jsxs)("div",{className:"form-group mb-3",children:[Object(r.jsx)("label",{children:Object(r.jsx)("h6",{children:"PNG Engine"})}),Object(r.jsxs)("select",{className:"form-control",name:"PNG",onChange:this.handleInputChange,children:[Object(r.jsx)("option",{defaultValue:!0,children:"pngquant"}),Object(r.jsx)("option",{value:"optipng",children:"optipng"}),Object(r.jsx)("option",{value:"pngout",children:"pngout"}),Object(r.jsx)("option",{value:"webp",children:"webp"}),Object(r.jsx)("option",{value:"pngcrush",children:"pngcrush"})]})]})}),Object(r.jsx)("div",{className:"form-row",children:Object(r.jsxs)("div",{className:"form-group mb-3",children:[Object(r.jsx)("label",{children:Object(r.jsx)("h6",{children:"SVG Engine"})}),Object(r.jsx)("select",{className:"form-control",name:"SVG",onChange:this.handleInputChange,children:Object(r.jsx)("option",{defaultValue:!0,children:"svgo"})})]})}),Object(r.jsx)("div",{className:"form-row",children:Object(r.jsxs)("div",{className:"form-group mb-3",children:[Object(r.jsx)("label",{children:Object(r.jsx)("h6",{children:"GIF Engine"})}),Object(r.jsxs)("select",{className:"form-control",name:"GIF",onChange:this.handleInputChange,children:[Object(r.jsx)("option",{defaultValue:!0,children:"gifsicle"}),Object(r.jsx)("option",{value:"giflossy",children:"giflossy"}),Object(r.jsx)("option",{value:"gif2webp",children:"gif2webp"})]})]})})]})})})}}]),c}(s.a.Component);var P=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(j.a)(a,2),l=i[0],d=i[1],b=Object(n.useState)(null),h=Object(j.a)(b,2),m=h[0],p=h[1],O=Object(n.useState)(0),x=Object(j.a)(O,2),g=x[0],v=x[1],N=Object(n.useState)(!1),k=Object(j.a)(N,2),I=k[0],A=k[1],S=Object(n.useState)(!1),C=Object(j.a)(S,2),P=C[0],z=C[1],D=Object(n.useState)(null),G=Object(j.a)(D,2),E=G[0],V=G[1],J=Object(n.useState)(null),_=Object(j.a)(J,2),M=_[0],R=_[1],U=Object(n.useState)(null),B=Object(j.a)(U,2),H=B[0],L=B[1],T=Object(n.useState)(0),Y=Object(j.a)(T,2),q=Y[0],K=Y[1],Q=Object(n.useState)(0),W=Object(j.a)(Q,2),X=W[0],Z=W[1];return Object(n.useEffect)((function(){!function(e){var t=new FormData;if(null!=l){var c,n=Object(o.a)(e.inputFiles);try{for(n.s();!(c=n.n()).done;){var a=c.value;t.append("file",a)}}catch(i){n.e(i)}finally{n.f()}u.a.post("/upload",t,{onUploadProgress:function(e){console.log("Upload Progress: "+Math.round(e.loaded/e.total*100)+"%"),L(Math.round(e.loaded/e.total*100))}}).then((function(e){console.log(e);var t=new Array;Array.from(l.inputFiles).forEach((function(e){t.push(e.name)})),s({inputArray:t}),z(!0)})).catch((function(e){console.log(e)}))}}(l)}),[l]),Object(n.useEffect)((function(){var e=0,t=0;for(var c in console.log(E),E)e+=E[c].size_in/1024,t+=E[c].size_output/1024;K(e.toFixed(1)),Z(t.toFixed(1))}),[E]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"btn-group col-12 mb-3 ",children:Object(r.jsx)("label",{className:"btn btn-primary",title:"select an image (jpeg, png)",children:Object(r.jsx)("input",{type:"file",id:"file",name:"file",multiple:"multiple",onChange:function(e){u.a.get("/reset").then((function(t){z(!1);var c=new Array;Array.from(e.target.files).forEach((function(e){c.push(e.name)})),A(!1),d({inputFiles:e.target.files}),R(t.data)})).catch((function(e){console.log(e)}))}})})}),P?null:Object(r.jsx)("div",{className:" alert alert-info text-center",children:Object(r.jsx)("strong",{children:"To get started use the input button to upload your JPG, PNG, GIF and SVG files"})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(f,{imageArray:c,outputArray:m,checkOut:I,checkIn:P,statistics:E,sessionID:M,uploadProgress:H,size:q,oSize:X}),Object(r.jsx)("div",{className:"col-lg-4 mb-4 ",children:Object(r.jsx)("form",{action:"/compSubmit",id:"optionsForm",method:"post",children:Object(r.jsxs)("div",{className:"card h-100 shadow rounded",children:[Object(r.jsx)("h4",{className:"card-header",children:"Options"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("fieldset",{className:"form-group m-5",children:Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("label",{htmlFor:"comp_rate",children:Object(r.jsx)("h6",{children:"Quality"})}),Object(r.jsx)("input",{type:"range",name:"rate",min:"0",max:"100"})]})}),Object(r.jsx)(F,{}),Object(r.jsx)("div",{className:"form-group row m-5",children:Object(r.jsx)("button",{className:"btn bg-primary",onClick:function(){u.a.get("/reset").then((function(e){z(!1),A(!1)})).catch((function(e){console.log(e)}))},type:"button",children:"Reset"})}),Object(r.jsx)("div",{className:"form-group row m-5",children:Object(r.jsx)("button",{className:"btn bg-primary",onClick:function(){var e=w()("#optionsForm").serialize();u.a.get("/deleteOutput").then((function(t){A(!1),u.a.post("/compSubmit",e).then((function(e){V(e.data.statistics),u.a.post("/rename",{compIndex:g}).then((function(e){var t,n=new Array,s=Object(o.a)(c.inputArray);try{for(s.s();!(t=s.n()).done;){var a=t.value;n.push("compressed-"+g+"-"+a),v(g+1)}}catch(i){s.e(i)}finally{s.f()}p({outputArray:n}),A(!0)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},type:"button",children:"Submit"})})]})]})})}),!0===P?Object(r.jsx)(y,{imageArray:c,outputArray:m,checkOut:I,checkIn:P,statistics:E,sessionID:M}):Object(r.jsx)("div",{})]})]})};var z=function(){return Object(r.jsx)("footer",{className:"rounded",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(r.jsx)("div",{className:"navbar navbar-light navbar-expand",children:Object(r.jsx)("div",{className:"container justify-content-center",children:Object(r.jsxs)("ul",{className:"nav navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link disabled",href:"A simple Manual",children:"Docs"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link disabled ",children:"Examples"})}),Object(r.jsx)("li",{className:"nav-item ",children:Object(r.jsx)("a",{className:"nav-link",href:"https://github.com/YigitSIK/Comp2Dust",title:"View the GitHub project",children:"GitHub"})}),Object(r.jsx)("li",{className:"nav-item ",children:Object(r.jsx)("a",{className:"nav-link disabled",href:"This part will be an explanation about algs",title:"Explore more projects",children:"Explore"})}),Object(r.jsx)("li",{className:"nav-item ",children:Object(r.jsx)("a",{className:"nav-link disabled",href:"Explanation of the project",title:"About the author",children:"About"})})]})})})})};var D=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"container rounded",children:[Object(r.jsx)(l,{}),Object(r.jsx)(P,{}),Object(r.jsx)(z,{})]})})};c(75);i.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d7d76f93.chunk.js.map