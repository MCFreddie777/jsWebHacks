!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=48)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.then=function(e,t){return this.promise.then(e,t)},e.prototype.catch=function(e){return this.promise.catch(e)},e.prototype.finally=function(e){throw new Error("NOT IMPLEMENTED")},e}();t.Deferred=r},3:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(50),a=n(51),u=n(52),l=0;!function(e){function t(e,t){return document.querySelector("#PLUG_AND_PLAY_INITIATIVES_SCRIPT_"+t)?Promise.resolve():new Promise((function(n){var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src=e,i.id="PLUG_AND_PLAY_INITIATIVES_SCRIPT_"+t,i.onreadystatechange=function(){return n()},i.onload=function(){return n()},r.appendChild(i)}))}function n(e){o.PNPDownloadAllButton.setEnabled(e),a.PNPDeleteAllButton.setEnabled(e),u.PNPMassImportButton.setEnabled(e)}e.appendScript=t,e.handleError=function(e,t){if(!document.querySelector("#PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER")){var n=document.createElement("div");n.id="PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER",n.style.position="fixed",n.style.top="0",n.style.left="50%",n.style.transform="translateX(-50%)",document.body.appendChild(n)}var r=document.querySelector("#PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER"),i=document.createElement("div");i.style.textAlign="center",i.style.marginTop="10px",i.style.background="#fab3c3",i.style.padding="10px 20px",i.style.borderRadius="4px",i.style.position="relative",l++,i.id="DOWNLOAD_ALL_INITIATIVES_ERROR_"+l,i.innerHTML+='<b style="color: rgba(242, 65, 101, 1); font-size: 100%;">Error '+l+"</b>",i.innerHTML+='<span style="display: block">'+e+"</span>",t&&(i.innerHTML+='<i style="display: block;font-size: 80%;">Details in Dev. console</i>'),i.innerHTML+='<b style="position: absolute; right: 0; top: 0; padding: 5px; display: block; cursor: pointer; opacity: 0.5;" onclick="\n    document.querySelector(\'#DOWNLOAD_ALL_INITIATIVES_ERROR_'+l+"').remove()\n  \">X</b>",r.appendChild(i),t&&console.error("Error "+l,t)},e.getMajorVersionString=function(){var e=(window.globalFrontendConfig||{}).app_frontend_version||"";if(!e)return"unknown";var t=e.split(".");return t[0]+"."+t[1]},e.isReadyToInitialize=function(){return!!document.querySelector(".crud-header.list-header")&&location.pathname.endsWith("/initiatives")&&!document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER")},e.initialize=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return o.PNPDownloadAllButton.create(),a.PNPDeleteAllButton.create(),u.PNPMassImportButton.create(),[4,t("//cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js","jszip")];case 1:return e.sent(),[4,t("//cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js","filesaver")];case 2:return e.sent(),n(!0),[2]}}))}))},e.setButtonStatus=n}(t.PNPHelpers||(t.PNPHelpers={}))},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(49)},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);setInterval((function(){r.PNPHelpers.isReadyToInitialize()&&r.PNPHelpers.initialize()}),500)},5:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.asyncForEach=function(e,t){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:n=0,r.label=1;case 1:return n<e.length?[4,t(e[n],n,e)]:[3,4];case 2:r.sent(),r.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))},t.readFileAsText=function(e){var t=new o.Deferred,n=new FileReader;return n.onload=function(e){var n,r;t.resolve(null===(r=null===(n=e)||void 0===n?void 0:n.target)||void 0===r?void 0:r.result)},n.readAsText(e),t.promise},t.sleep=function(e){var t=new o.Deferred;return setTimeout((function(){t.resolve()}),e),t.promise}},50:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(6),u=n(3),l=n(7),s=0,c=0;function d(){if(!document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER",e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="DOWNLOAD_ALL_INITIATIVES_BUTTON">\n            <span id="DOWNLOAD_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Download all</span>\n        </button>\n    ',document.querySelector(".crud-header.list-header").appendChild(e),u.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){!function(){r(this,void 0,void 0,(function(){var e,t,n,d,f,I,_,h=this;return i(this,(function(T){switch(T.label){case 0:return(e=a.PNPProject.getProjectData())?(t=""+u.PNPHelpers.getMajorVersionString(),n=u.PNPHelpers.getMajorVersionString()+" - "+e.company_name+" - Initiatives.zip",u.PNPHelpers.setButtonStatus(!1),[4,l.PNPInitiative.getInitiativeList(e._id)]):(u.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return d=T.sent(),c=0,s=d.length,p(),f=[],I=new JSZip,_=I.folder(t),[4,o.asyncForEach(d,(function(t){return r(h,void 0,void 0,(function(){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return[4,l.PNPInitiative.getInitiative(t._id,e._id)];case 1:return n=i.sent(),c++,p(),n?n.errors?(f.push([t,n]),[2]):(r=t.name.replace(/\//g,"-").replace(/\\/g,"-"),o=JSON.stringify(n),a=r+".json",_.file(a,o),[2]):(f.push([t,null]),[2])}}))}))}))];case 2:return T.sent(),f.forEach((function(e){u.PNPHelpers.handleError(e[0].name+" ("+e[0]._id+") export failed",e[1])})),u.PNPHelpers.setButtonStatus(!0),s=0,p(),[2,I.generateAsync({type:"blob"}).then((function(e){saveAs(e,n)}))]}}))}))}()}:null)}}function p(){var e=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Download all",s>0&&(e.innerHTML+=" "+c+" / "+s))}!function(e){e.create=d,e.setEnabled=f}(t.PNPDownloadAllButton||(t.PNPDownloadAllButton={}))},51:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(6),u=n(3),l=n(7),s=0,c=0;function d(){if(!document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="DELETE_ALL_INITIATIVES_BUTTON_WRAPPER",e.setAttribute("priority","danger"),e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="DELETE_ALL_INITIATIVES_BUTTON">\n            <span id="DELETE_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Delete all</span>\n        </button>\n    ',document.querySelector(".crud-header.list-header").appendChild(e),u.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){!function(){r(this,void 0,void 0,(function(){var e,t,n,d=this;return i(this,(function(f){switch(f.label){case 0:return(e=a.PNPProject.getProjectData())?(u.PNPHelpers.setButtonStatus(!1),[4,l.PNPInitiative.getInitiativeList(e._id)]):(u.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return t=f.sent(),c=0,s=t.length,prompt("You are about to delete "+s+" initiative"+(s>1?"s":"")+". Rewrite the amount to continue.")!==""+s?(alert("Canceling deletion"),u.PNPHelpers.setButtonStatus(!0),[2]):(p(),n=[],[4,o.asyncForEach(t,(function(t){return r(d,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,l.PNPInitiative.deleteInitiative(t._id,e._id)];case 1:return r=i.sent(),c++,p(),r?(r.success||n.push([t,null]),[2]):(n.push([t,null]),[2])}}))}))}))]);case 2:return f.sent(),n.forEach((function(e){u.PNPHelpers.handleError(e[0].name+" ("+e[0]._id+") delete failed",e[1])})),u.PNPHelpers.setButtonStatus(!0),s=0,p(),alert("Refresh the page to reload the list of initiatives"),[2]}}))}))}()}:null)}}function p(){var e=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Delete all",s>0&&(e.innerHTML+=" "+c+" / "+s))}!function(e){e.create=d,e.setEnabled=f}(t.PNPDeleteAllButton||(t.PNPDeleteAllButton={}))},52:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n(5),u=n(6),l=n(7),s=0,c=0;function d(){if(!document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER",e.setAttribute("priority","secondary"),e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="IMPORT_ALL_INITIATIVES_BUTTON">\n            <span id="IMPORT_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Mass import</span>\n        </button>\n    ',document.querySelector(".crud-header.list-header").appendChild(e),o.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){I(!0)}:null)}}function p(){var e=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Mass import",s>0&&(e.innerHTML+=" "+c+" / "+s))}function I(e){if(e){!function(){if(document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL"))return;var e=document.createElement("div");e.id="IMPORT_ALL_INITIATIVES_MODAL",e.style.position="fixed",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.display="none",e.innerHTML='\n        <div\n            style="\n                display: flex;\n                align-items: flex-start;\n                position: absolute;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                z-index: 0;\n                background-color: rgba(28,23,51,.8);\n            "\n        >\n        </div>\n\n        <div\n            style="\n                top: 10%;\n                left: 50%;\n                width: 560px;\n                margin-left: -280px;\n                background-color: #fff;\n                border: 1px solid rgba(0,0,0,.3);\n                border-radius: 4px;\n                outline: 0;\n                box-shadow: 0 3px 7px rgba(0,0,0,.3);\n                background-clip: padding-box;\n                position: fixed;\n                overflow: visible;\n            "\n        >\n            <div\n                style="\n                    border-bottom: 1px solid rgba(201,207,231,.5);\n                    padding: 21px 25px 20px 30px;\n                "\n            >\n                <h3\n                    style="\n                        padding: 0;\n                        margin: 0;\n                    "\n                >Mass import initiatives</h3>\n            </div>\n\n            <div\n                style="\n                    padding: 15px 30px;\n                    overflow-y: visible;\n                    max-height: calc(100vh - 150px);\n                    position: relative;\n                "\n            >\n                <label\n                    id="IMPORT_ALL_INITIATIVES_MODAL_FILE_LABEL"\n                    style="\n                        text-align: center;\n                        background-color: #fafafd;\n                        border: 1px dashed #d8ddef;\n                        border-radius: 2px;\n                        padding: 10px 20px;\n                        box-sizing: border-box;\n                        display: block;\n                        position: relative;\n                    "\n                >\n                    <span\n                        style="\n                            display: block;\n                            font-weight: 700;\n                            font-size: 14px;\n                            color: #636696;\n                            margin: 20px;\n                        "\n                    >\n                        <span>Drag & drop (or click to open picker)</span>\n                        <br>\n                        <br>\n                        <i style="font-weight: 400">.zip or single/multiple .json files allowed</i>\n                        <br>\n                        <br>\n                        <span id="IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT_MESSAGE">No files selected</span>\n                    </span>\n                    <input\n                        style="\n                            position: absolute;\n                            left: 0;\n                            top: 0;\n                            right: 0;\n                            display: block;\n                            bottom: 0;\n                            width: 100%;\n                            height: 100%;\n                            opacity: 0;\n                            cursor: pointer;\n                        "\n                        type="file" multiple id="IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT">\n                </label>\n            </div>\n\n            <div\n                style="\n                    border-radius: 0 0 4px 4px;\n                    padding: 12px 30px;\n                    background: #f8f7fd;\n                    margin-bottom: 0;\n                    text-align: right;\n                "\n            >\n                <e-ui-button class="ui ui-node" id="IMPORT_ALL_INITIATIVES_MODAL_CANCEL_BUTTON">\n                    <button class="button-wrapper">\n                        <span class="button-text">Cancel</span>\n                    </button>\n                </e-ui-button>\n\n                <e-ui-button class="ui ui-node" priority="primary" id="IMPORT_ALL_INITIATIVES_MODAL_IMPORT_BUTTON">\n                    <button class="button-wrapper">\n                        <span class="button-text">Import</span>\n                    </button>\n                </e-ui-button>\n            </div>\n        </div>\n    ',document.body.appendChild(e),document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_CANCEL_BUTTON").onclick=function(){return I(!1)};var t=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT");t.onchange=function(){var e=t.files&&t.files.length>0,n="No files selected";e&&(n=1===t.files.length?t.files[0].name+" selected":t.files.length+" files selected"),document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT_MESSAGE").innerHTML=n;var d=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_IMPORT_BUTTON");d.classList.remove("disabled"),e||d.classList.add("disabled"),d.onclick=e?function(){!function(e){r(this,void 0,void 0,(function(){function t(e){return r(this,void 0,void 0,(function(){var t,n,o,u,l=this;return i(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,5]),[4,JSZip.loadAsync(e)];case 1:return t=c.sent(),n=Object.keys(t.files),[4,a.asyncForEach(n,(function(e){return r(l,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return(n=t.files[e]).dir?[3,2]:(o=(r=f).push,[4,n.async("text")]);case 1:o.apply(r,[i.sent()]),s++,p(),i.label=2;case 2:return[2]}}))}))}))];case 2:return c.sent(),[3,5];case 3:return c.sent(),u=(o=f).push,[4,a.readFileAsText(e)];case 4:return u.apply(o,[c.sent()]),s++,p(),[3,5];case 5:return[2]}}))}))}function n(e){var t;return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,l.PNPInitiative.importInitiativeJson(e,d._id)];case 1:return n=r.sent(),[4,a.sleep(500)];case 2:return r.sent(),c++,p(),(null===(t=n)||void 0===t?void 0:t.errors)?(I.push(n.errors),[2]):[2]}}))}))}var d,f,I,_=this;return i(this,(function(l){switch(l.label){case 0:return(d=u.PNPProject.getProjectData())?(s=0,c=0,p(),o.PNPHelpers.setButtonStatus(!1),f=[],I=[],[4,a.asyncForEach(e,(function(e){return r(_,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,t(e)];case 1:return[2,n.sent()]}}))}))}))]):(o.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return l.sent(),[4,a.asyncForEach(f,(function(e){return r(_,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,n(e)];case 1:return[2,t.sent()]}}))}))}))];case 2:return l.sent(),I.forEach((function(e){o.PNPHelpers.handleError("Import failed",e)})),s=0,p(),o.PNPHelpers.setButtonStatus(!0),alert("Refresh the page to reload the list of initiatives"),[2]}}))}))}(t.files),I(!1)}:null}}(),(n=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL")).style.display="block";var t=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT");t.value="",t.onchange(null)}else{var n;(n=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL"))&&(n.style.display="none")}}!function(e){e.create=d,e.setEnabled=f}(t.PNPMassImportButton||(t.PNPMassImportButton={}))},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function t(){var e=location.pathname.match(/\/p\/([^/]+)/);return e?e[1]:null}e.getProjectSlug=t,e.getProjectData=function(){var e=t();return e?(window.globalCompanies||[]).find((function(t){return t.slug===e})):null}}(t.PNPProject||(t.PNPProject={}))},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);!function(e){function t(e){return"/api/initiatives?company_id="+e}function n(e,t){return"/api/project/data-management/initiatives/"+e+"/export?company_id="+t}function i(e,t){return"/api/initiatives/"+e+"?company_id="+t}function o(e){return"/api/project/data-management/initiatives/import?company_id="+e}e.getInitiativeListUrl=t,e.getInitiativeExportUrl=n,e.getInitiativeDeleteUrl=i,e.getInitiativeImportUrl=o,e.getInitiativeList=function(e){return fetch(t(e),{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(e){return r.PNPHelpers.handleError("Could not download Initiative list",e),[]}))},e.getInitiative=function(e,t){return fetch(n(e,t),{credentials:"same-origin"}).then((function(e){return e.json()})).catch((function(t){return r.PNPHelpers.handleError("Could not download Initiative "+e,t),null}))},e.deleteInitiative=function(e,t){return fetch(i(e,t),{credentials:"same-origin",method:"DELETE"}).then((function(e){return e.json()})).catch((function(t){return r.PNPHelpers.handleError("Could not delete Initiative "+e,t),{success:!1}}))},e.importInitiativeJson=function(e,t){var n=new Blob([e],{type:"application/json"}),i=new File([n],"file.json"),a=new FormData;return a.append("files",i),fetch(o(t),{credentials:"same-origin",method:"POST",body:a}).then((function(e){return e.json()})).catch((function(e){return r.PNPHelpers.handleError("Could not import Initiative",e),null}))}}(t.PNPInitiative||(t.PNPInitiative={}))}});