(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8Irs":function(t,e,r){},JuBm:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-view")},n=[],o=r("KHd+"),l={},i=Object(o["a"])(l,a,n,!1,null,null,null);e["default"]=i.exports},ZhIB:function(t,e,r){var a,n;
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(o,l){a=l,n="function"===typeof a?a.call(e,r,e,t):a,void 0===n||(t.exports=n)})(0,function(){var t,e,r="2.0.6",a={},n={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function i(t,e){this._input=t,this._value=e}return t=function(r){var n,o,s,c;if(t.isNumeral(r))n=r.value();else if(0===r||"undefined"===typeof r)n=0;else if(null===r||e.isNaN(r))n=null;else if("string"===typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(o in a)if(c="function"===typeof a[o].regexps.unformat?a[o].regexps.unformat():a[o].regexps.unformat,c&&r.match(c)){s=a[o].unformat;break}s=s||t._.stringToNumber,n=s(r)}else n=Number(r)||null;return new i(r,n)},t.version=r,t.isNumeral=function(t){return t instanceof i},t._=e={numberToFormat:function(e,r,a){var o,l,i,s,c,u,f,m=n[t.options.currentLocale],d=!1,p=!1,h=0,b="",v=1e12,g=1e9,_=1e6,x=1e3,y="",F=!1;if(e=e||0,l=Math.abs(e),t._.includes(r,"(")?(d=!0,r=r.replace(/[\(|\)]/g,"")):(t._.includes(r,"+")||t._.includes(r,"-"))&&(c=t._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),t._.includes(r,"a")&&(o=r.match(/a(k|m|b|t)?/),o=!!o&&o[1],t._.includes(r," a")&&(b=" "),r=r.replace(new RegExp(b+"a[kmbt]?"),""),l>=v&&!o||"t"===o?(b+=m.abbreviations.trillion,e/=v):l<v&&l>=g&&!o||"b"===o?(b+=m.abbreviations.billion,e/=g):l<g&&l>=_&&!o||"m"===o?(b+=m.abbreviations.million,e/=_):(l<_&&l>=x&&!o||"k"===o)&&(b+=m.abbreviations.thousand,e/=x)),t._.includes(r,"[.]")&&(p=!0,r=r.replace("[.]",".")),i=e.toString().split(".")[0],s=r.split(".")[1],u=r.indexOf(","),h=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(t._.includes(s,"[")?(s=s.replace("]",""),s=s.split("["),y=t._.toFixed(e,s[0].length+s[1].length,a,s[1].length)):y=t._.toFixed(e,s.length,a),i=y.split(".")[0],y=t._.includes(y,".")?m.delimiters.decimal+y.split(".")[1]:"",p&&0===Number(y.slice(1))&&(y="")):i=t._.toFixed(e,0,a),b&&!o&&Number(i)>=1e3&&b!==m.abbreviations.trillion)switch(i=String(Number(i)/1e3),b){case m.abbreviations.thousand:b=m.abbreviations.million;break;case m.abbreviations.million:b=m.abbreviations.billion;break;case m.abbreviations.billion:b=m.abbreviations.trillion;break}if(t._.includes(i,"-")&&(i=i.slice(1),F=!0),i.length<h)for(var w=h-i.length;w>0;w--)i="0"+i;return u>-1&&(i=i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(i=""),f=i+y+(b||""),d?f=(d&&F?"(":"")+f+(d&&F?")":""):c>=0?f=0===c?(F?"-":"+")+f:f+(F?"-":"+"):F&&(f="-"+f),f},stringToNumber:function(t){var e,r,a,o=n[l.currentLocale],i=t,s={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&t===l.zeroFormat)r=0;else if(l.nullFormat&&t===l.nullFormat||!t.replace(/[^0-9]+/g,"").length)r=null;else{for(e in r=1,"."!==o.delimiters.decimal&&(t=t.replace(/\./g,"").replace(o.delimiters.decimal,".")),s)if(a=new RegExp("[^a-zA-Z]"+o.abbreviations[e]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(a)){r*=Math.pow(10,s[e]);break}r*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),r*=Number(t)}return r},isNaN:function(t){return"number"===typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,r){return t.slice(0,r)+e+t.slice(r)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof e)throw new TypeError(e+" is not a function");var r,a=Object(t),n=a.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{while(o<n&&!(o in a))o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");r=a[o++]}for(;o<n;o++)o in a&&(r=e(r,a[o],o,a));return r},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){var t=Array.prototype.slice.call(arguments);return t.reduce(function(t,r){var a=e.multiplier(r);return t>a?t:a},1)},toFixed:function(t,e,r,a){var n,o,l,i,s=t.toString().split("."),c=e-(a||0);return n=2===s.length?Math.min(Math.max(s[1].length,c),e):c,l=Math.pow(10,n),i=(r(t+"e+"+n)/l).toFixed(n),a>e-n&&(o=new RegExp("\\.?0{1,"+(a-(e-n))+"}$"),i=i.replace(o,"")),i}},t.options=l,t.formats=a,t.locales=n,t.locale=function(t){return t&&(l.currentLocale=t.toLowerCase()),l.currentLocale},t.localeData=function(t){if(!t)return n[l.currentLocale];if(t=t.toLowerCase(),!n[t])throw new Error("Unknown locale : "+t);return n[t]},t.reset=function(){for(var t in o)l[t]=o[t]},t.zeroFormat=function(t){l.zeroFormat="string"===typeof t?t:null},t.nullFormat=function(t){l.nullFormat="string"===typeof t?t:null},t.defaultFormat=function(t){l.defaultFormat="string"===typeof t?t:"0.0"},t.register=function(t,e,r){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=r,r},t.validate=function(e,r){var a,n,o,l,i,s,c,u;if("string"!==typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(""===e)return!1;try{c=t.localeData(r)}catch(e){c=t.localeData(t.locale())}return o=c.currency.symbol,i=c.abbreviations,a=c.delimiters.decimal,n="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,u=e.match(/^[^\d]+/),(null===u||(e=e.substr(1),u[0]===o))&&(u=e.match(/[^\d]+$/),(null===u||(e=e.slice(0,-1),u[0]===i.thousand||u[0]===i.million||u[0]===i.billion||u[0]===i.trillion))&&(s=new RegExp(n+"{2}"),!e.match(/[^\d.,]/g)&&(l=e.split(a),!(l.length>2)&&(l.length<2?!!l[0].match(/^\d+.*\d$/)&&!l[0].match(s):1===l[0].length?!!l[0].match(/^\d+$/)&&!l[0].match(s)&&!!l[1].match(/^\d+$/):!!l[0].match(/^\d+.*\d$/)&&!l[0].match(s)&&!!l[1].match(/^\d+$/)))))},t.fn=i.prototype={clone:function(){return t(this)},format:function(e,r){var n,o,i,s=this._value,c=e||l.defaultFormat;if(r=r||Math.round,0===s&&null!==l.zeroFormat)o=l.zeroFormat;else if(null===s&&null!==l.nullFormat)o=l.nullFormat;else{for(n in a)if(c.match(a[n].regexps.format)){i=a[n].format;break}i=i||t._.numberToFormat,o=i(s,c,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var r=e.correctionFactor.call(null,this._value,t);function a(t,e,a,n){return t+Math.round(r*e)}return this._value=e.reduce([this._value,t],a,0)/r,this},subtract:function(t){var r=e.correctionFactor.call(null,this._value,t);function a(t,e,a,n){return t-Math.round(r*e)}return this._value=e.reduce([t],a,Math.round(this._value*r))/r,this},multiply:function(t){function r(t,r,a,n){var o=e.correctionFactor(t,r);return Math.round(t*o)*Math.round(r*o)/Math.round(o*o)}return this._value=e.reduce([this._value,t],r,1),this},divide:function(t){function r(t,r,a,n){var o=e.correctionFactor(t,r);return Math.round(t*o)/Math.round(r*o)}return this._value=e.reduce([this._value,t],r),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,a){var n,o=t._.includes(r," BPS")?" ":"";return e*=1e4,r=r.replace(/\s?BPS/,""),n=t._.numberToFormat(e,r,a),t._.includes(n,")")?(n=n.split(""),n.splice(-1,0,o+"BPS"),n=n.join("")):n=n+o+"BPS",n},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},a=e.suffixes.concat(r.suffixes.filter(function(t){return e.suffixes.indexOf(t)<0})),n=a.join("|");n="("+n.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(a,n,o){var l,i,s,c,u=t._.includes(n,"ib")?r:e,f=t._.includes(n," b")||t._.includes(n," ib")?" ":"";for(n=n.replace(/\s?i?b/,""),i=0;i<=u.suffixes.length;i++)if(s=Math.pow(u.base,i),c=Math.pow(u.base,i+1),null===a||0===a||a>=s&&a<c){f+=u.suffixes[i],s>0&&(a/=s);break}return l=t._.numberToFormat(a,n,o),l+f},unformat:function(a){var n,o,l=t._.stringToNumber(a);if(l){for(n=e.suffixes.length-1;n>=0;n--){if(t._.includes(a,e.suffixes[n])){o=Math.pow(e.base,n);break}if(t._.includes(a,r.suffixes[n])){o=Math.pow(r.base,n);break}}l*=o||1}return l}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,a){var n,o,l,i=t.locales[t.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),n=t._.numberToFormat(e,r,a),e>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(s.before,"-")&&!t._.includes(s.before,"(")&&(s.before="-"+s.before),l=0;l<s.before.length;l++)switch(o=s.before[l],o){case"$":n=t._.insert(n,i.currency.symbol,l);break;case" ":n=t._.insert(n," ",l+i.currency.symbol.length-1);break}for(l=s.after.length-1;l>=0;l--)switch(o=s.after[l],o){case"$":n=l===s.after.length-1?n+i.currency.symbol:t._.insert(n,i.currency.symbol,-(s.after.length-(1+l)));break;case" ":n=l===s.after.length-1?n+" ":t._.insert(n," ",-(s.after.length-(1+l)+i.currency.symbol.length-1));break}return n}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,a){var n,o="number"!==typeof e||t._.isNaN(e)?"0e+0":e.toExponential(),l=o.split("e");return r=r.replace(/e[\+|\-]{1}0/,""),n=t._.numberToFormat(Number(l[0]),r,a),n+"e"+l[1]},unformat:function(e){var r=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),a=Number(r[0]),n=Number(r[1]);function o(e,r,a,n){var o=t._.correctionFactor(e,r),l=e*o*(r*o)/(o*o);return l}return n=t._.includes(e,"e-")?n*=-1:n,t._.reduce([a,Math.pow(10,n)],o,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,a){var n,o=t.locales[t.options.currentLocale],l=t._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),l+=o.ordinal(e),n=t._.numberToFormat(e,r,a),n+l}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,a){var n,o=t._.includes(r," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),r=r.replace(/\s?\%/,""),n=t._.numberToFormat(e,r,a),t._.includes(n,")")?(n=n.split(""),n.splice(-1,0,o+"%"),n=n.join("")):n=n+o+"%",n},unformat:function(e){var r=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*r:r}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,r){var a=Math.floor(t/60/60),n=Math.floor((t-60*a*60)/60),o=Math.round(t-60*a*60-60*n);return a+":"+(n<10?"0"+n:n)+":"+(o<10?"0"+o:o)},unformat:function(t){var e=t.split(":"),r=0;return 3===e.length?(r+=60*Number(e[0])*60,r+=60*Number(e[1]),r+=Number(e[2])):2===e.length&&(r+=60*Number(e[0]),r+=Number(e[1])),Number(r)}})}(),t})},bjcF:function(t,e,r){},"cE4+":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-grid-content",[r("el-row",{staticClass:"chart",attrs:{gutter:10}},[r("el-col",{attrs:{md:12,lg:6}},[r("el-chart-card",{attrs:{total:t.miniBarTotal}},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v("访问量")]),r("span",{attrs:{slot:"action"},slot:"action"},[r("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[r("i",{staticClass:"el-icon-info"})])],1),r("el-mini-bar",{attrs:{height:46,data:t.miniBarData}}),r("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          日访问量 "+t._s(t.miniBarFooter)+"\n        ")])],1)],1),r("el-col",{attrs:{md:12,lg:6}},[r("el-chart-card",{attrs:{total:t.miniAreaTotal}},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v("搜索用户数量")]),r("span",{attrs:{slot:"action"},slot:"action"},[r("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[r("i",{staticClass:"el-icon-info"})])],1),r("el-mini-area",{attrs:{height:46,"border-width":2,data:t.miniAreaData}}),r("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          转化率 "+t._s(t.miniAreaFooter)+"\n        ")])],1)],1),r("el-col",{attrs:{md:12,lg:6}},[r("el-chart-card",{staticClass:"trend",attrs:{total:t.textTotal,"content-height":46}},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v("总销售额")]),r("span",{attrs:{slot:"action"},slot:"action"},[r("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[r("i",{staticClass:"el-icon-info"})])],1),r("div",{staticClass:"trend-item"},[r("span",[t._v("周同比")]),r("el-trend",{attrs:{flag:"up"}},[t._v("12%")])],1),r("div",{staticClass:"trend-item"},[r("span",[t._v("日环比")]),r("el-trend",{attrs:{flag:"down"}},[t._v("10%")])],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          日均销售额 "+t._s(t.miniAreaFooter)+"\n        ")])])],1),r("el-col",{attrs:{md:12,lg:6}},[r("el-chart-card",{staticClass:"progress",attrs:{total:t.progressTotal,"content-height":46}},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v("运营活动效果")]),r("span",{attrs:{slot:"action"},slot:"action"},[r("el-tooltip",{attrs:{slot:"title",content:"指标说明",placement:"top"},slot:"title"},[r("i",{staticClass:"el-icon-info"})])],1),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":13,percentage:t.progressComponentValue}}),r("div",{staticClass:"progress-footer",attrs:{slot:"footer"},slot:"footer"},[r("div",{staticClass:"trend-item"},[r("span",[t._v("周同比")]),r("el-trend",{attrs:{flag:"up"}},[t._v("12%")])],1),r("div",{staticClass:"trend-item"},[r("span",[t._v("日环比")]),r("el-trend",{attrs:{flag:"down"}},[t._v("10%")])],1)])],1)],1)],1),r("el-card",{staticClass:"analysis_sales",attrs:{"tab-list":t.salesTabList,"active-tab-name":t.salesActiveTabName},on:{"update:activeTabName":function(e){t.salesActiveTabName=e}}},["sales"===t.salesActiveTabName?r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{xl:16,lg:16,md:12,sm:24,xs:24}},[r("el-bar",{attrs:{title:"销售额趋势",data:t.barData,height:300}})],1),r("el-col",{attrs:{xl:8,lg:8,md:12,sm:24,xs:24}},[r("div",{staticClass:"sales-rank"},[r("h4",[t._v("门店销售额排名")]),r("ul",{staticClass:"sales-raning-list"},t._l(t.salesRankData,function(e,a){return r("li",{key:a},[r("span",{class:a<3?"active":""},[t._v(t._s(a))]),r("span",[t._v(t._s(e.title))]),r("span",[t._v(t._s(e.total))])])}))])])],1):r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{xl:16,lg:16,md:12,sm:24,xs:24}},[r("el-bar",{attrs:{title:"访问量趋势",data:t.barData,height:300}})],1),r("el-col",{attrs:{xl:8,lg:8,md:12,sm:24,xs:24}},[r("div",{staticClass:"sales-rank"},[r("h4",[t._v("门店访问量排名")]),r("ul",{staticClass:"sales-raning-list"},t._l(t.salesRankData,function(e,a){return r("li",{key:a},[r("span",{class:a<3?"active":""},[t._v(t._s(a))]),r("span",[t._v(t._s(e.title))]),r("span",[t._v(t._s(e.total))])])}))])])],1)],1)],1)},n=[],o=r("ZhIB"),l=r.n(o),i=r("ii1/"),s={data:function(){for(var t=[],e=new Date,r=0;r<20;r+=1)t.push({x:Object(i["e"])(Object(i["a"])(e,r,"days"),"YYYY-MM-DD"),y:Math.floor(100*Math.random())+10});for(var a=[],n=0;n<12;n+=1)a.push({x:"".concat(n+1,"月"),y:Math.floor(1e3*Math.random())+200});for(var o=[],s=0;s<7;s+=1)o.push({title:"工专路 ".concat(s," 号店"),total:l()(323234).format("0,0")});return{miniAreaTotal:l()(12321).format("0,0"),miniAreaFooter:l()(.76).format("0%"),miniAreaData:t,miniBarTotal:l()(8846).format("0,0"),miniBarFooter:l()(1234).format("0,0"),miniBarData:t,barData:a,textTotal:"¥ ".concat(l()(129102).format("0,0")),progressValue:.78,salesTabList:[{label:"销售额",name:"sales"},{label:"访问量",name:"views"}],salesActiveTabName:"sales",salesRankData:o}},computed:{progressTotal:function(){return l()(this.progressValue).format("0%")},progressComponentValue:function(){return 100*this.progressValue}},created:function(){},components:{}},c=s,u=(r("hAOe"),r("o6R6"),r("KHd+")),f=Object(u["a"])(c,a,n,!1,null,"5fb57de2",null);e["default"]=f.exports},hAOe:function(t,e,r){"use strict";var a=r("bjcF"),n=r.n(a);n.a},o6R6:function(t,e,r){"use strict";var a=r("8Irs"),n=r.n(a);n.a},s5tM:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{lg:12,xs:24}},[t._v("\n    A\n  ")]),r("el-col",{attrs:{lg:12,xs:24}},[t._v("\n    B\n  ")])],1)},n=[],o=r("KHd+"),l={},i=Object(o["a"])(l,a,n,!1,null,null,null);e["default"]=i.exports}}]);