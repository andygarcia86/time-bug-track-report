(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f06bd"],{"9bfd":function(s,a,r){"use strict";r.r(a);var e=function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("div",[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Bootstrap Progress")]),r("div",{staticClass:"card-header-actions"},[r("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/progress",rel:"noreferrer noopener",target:"_blank"}},[r("small",{staticClass:"text-muted"},[s._v("docs")])])])],1),r("CCardBody",[r("CProgress",{attrs:{value:s.counter,max:s.max,"show-percentage":"",animated:""}}),r("CProgress",{staticClass:"mt-1",attrs:{max:s.max,"show-value":""}},[r("CProgressBar",{attrs:{value:.6*s.counter,color:"success"}}),r("CProgressBar",{attrs:{value:.25*s.counter,color:"warning"}}),r("CProgressBar",{attrs:{value:.15*s.counter,color:"danger"}})],1),r("CButton",{staticClass:"mt-4",attrs:{color:"secondary"},on:{click:s.clicked}},[s._v(" Click me to animate progress bars ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),s._v(" "),r("strong",[s._v(" Progress ")]),r("small",[s._v("labels")])],1),r("CCardBody",[r("h6",[s._v("No label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2}}),r("h6",[s._v("Value label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,"show-value":""}}),r("h6",[s._v("Progress label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,"show-percentage":""}}),r("h6",[s._v("Value label with precision")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,precision:2,"show-value":""}}),r("h6",[s._v("Progress label with precision")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,precision:2,"show-percentage":""}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("width")])],1),r("CCardBody",[r("h6",[s._v("Default width")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value3}}),r("h6",[s._v("Custom widths")]),r("CProgress",{staticClass:"w-75 mb-2",attrs:{value:s.value3}}),r("CProgress",{staticClass:"w-50 mb-2",attrs:{value:s.value3}}),r("CProgress",{staticClass:"w-25",attrs:{value:s.value3}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("height")])],1),r("CCardBody",[r("h6",[s._v("Default height")]),r("CProgress",{staticClass:"mb-3",attrs:{value:s.value3,"show-percentage":""}}),r("h6",[s._v("Custom heights")]),r("CProgress",{staticClass:"mb-2",attrs:{height:"2rem",value:s.value3,"show-percentage":""}}),r("CProgress",{staticClass:"mb-2",attrs:{height:"20px",value:s.value3,"show-percentage":""}}),r("CProgress",{attrs:{height:"2px",value:s.value3}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("colors")])],1),r("CCardBody",s._l(s.bars,(function(a,e){return r("div",{key:e,staticClass:"row mb-1"},[r("div",{staticClass:"col-sm-2"},[s._v(s._s(a.color)+":")]),r("div",{staticClass:"col-sm-10 pt-1"},[r("CProgress",{key:a.color,attrs:{value:a.value,color:a.color}})],1)])})),0)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("striped")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:s.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:s.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:s.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:100,color:"danger",striped:s.striped}}),r("CButton",{attrs:{color:"secondary"},on:{click:function(a){s.striped=!s.striped}}},[s._v(" "+s._s(s.striped?"Remove":"Add")+" Striped ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("animated")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:"",animated:s.animate}}),r("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:"",animated:s.animate}}),r("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:"",animated:s.animate}}),r("CProgress",{staticClass:"mb-3",attrs:{value:100,color:"danger",animated:s.animate}}),r("CButton",{attrs:{color:"secondary"},on:{click:function(a){s.animate=!s.animate}}},[s._v(" "+s._s(s.animate?"Stop":"Start")+" Animation ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[s._v(" Progress ")]),r("small",[s._v("multiple bars")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-3",attrs:{max:s.max3}},[r("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),r("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),r("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{"show-percentage":"",max:s.max3}},[r("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),r("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),r("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:s.max3}},[r("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),r("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),r("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{max:s.max3}},[r("CProgressBar",{attrs:{color:"primary",value:s.values[0],"show-percentage":""}}),r("CProgressBar",{attrs:{color:"success",value:s.values[1],animated:"","show-percentage":""}}),r("CProgressBar",{attrs:{color:"info",value:s.values[2],striped:"","show-percentage":""}})],1)],1)],1)],1)},t=[],o={name:"ProgressBars",data:function(){return{counter:73,max:100,max2:50,value:33.333333333,value3:75,bars:[{color:"success",value:75},{color:"info",value:75},{color:"warning",value:75},{color:"danger",value:75},{color:"primary",value:75},{color:"secondary",value:75},{color:"dark",value:75}],timer:null,striped:!0,animate:!0,max3:100,values:[15,30,20]}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var s=this;this.timer=setInterval((function(){s.bars.forEach((function(s){s.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},l=o,c=r("2877"),i=Object(c["a"])(l,e,t,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0f06bd.15f1529d.js.map