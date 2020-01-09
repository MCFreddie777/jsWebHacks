!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getProjectId=function(){return $("#search_project_id")[0]?$("#search_project_id")[0].value:""}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONSTS_STRINGS=function(e){return r[e]},t.CONSTS_CSS=function(e){return o[e]},t.REPLACE="{{REPLACE}}";var r={green:"#1aaa55",red:"#db3b21",orange:"#fc9403",blue:"#1f78d1",changed:'\n        <div class="diff-stats-group" style="display: inline-block; transform: scale(0.8); margin-right: -6px;">\n            <svg aria-hidden="true" class="diff-stats-icon text-secondary s16 ic-doc-code" style="position: relative; top: 3px; margin-right: -2px;">\n                <use xlink:href="/assets/icons-4009ebf96719f129f954d643e65f87152b5e6c4a4917130c4a696beb54af9949.svg#doc-code"></use>\n            </svg>\n            <strong>'+t.REPLACE+"</strong>\n        </div>",added:'\n        <div class="diff-stats-group cgreen" style="display: inline-block; transform: scale(0.8); margin-right: -6px;">\n            <svg aria-hidden="true" class="diff-stats-icon s16 ic-file-addition" style="position: relative; top: 3px; margin-right: -2px;">\n                <use xlink:href="/assets/icons-4009ebf96719f129f954d643e65f87152b5e6c4a4917130c4a696beb54af9949.svg#file-addition"></use>\n            </svg>\n            <strong>'+t.REPLACE+"</strong>\n        </div>",removed:'\n        <div class="diff-stats-group cred" style="display: inline-block; transform: scale(0.8); margin-right: -6px;">\n            <svg aria-hidden="true" class="diff-stats-icon s16 ic-file-deletion" style="position: relative; top: 3px; margin-right: -2px;">\n                <use xlink:href="/assets/icons-4009ebf96719f129f954d643e65f87152b5e6c4a4917130c4a696beb54af9949.svg#file-deletion"></use>\n            </svg>\n            <strong>'+t.REPLACE+"</strong>\n        </div>",authorPhotoHTML:'<div class="monar-author-photo"><div style="width: 100%; height: 100%; background-size: contain;"></div></div>'},o={feebas:{"background-image":'url("https://github.com/timzatko/feebas/blob/master/packages/desktop_app/src/favicon.256x256.png?raw=true")',"background-repeat":"no-repeat","background-size":"contain","background-origin":"content-box",padding:"4px",width:"40px",height:"40px","border-radius":"50%",border:"1px solid #1aaa55","box-sizing":"border-box","background-color":"transparent"},prod:{"background-color":"red",color:"white","border-radius":"3px",display:"inline-block",padding:"0 4px 0 2px"},cloud:{"background-color":"orange",color:"white","border-radius":"3px",display:"inline-block",padding:"0 4px 0 2px"},qa:{"background-color":"yellow",color:"black","border-radius":"3px",display:"inline-block",padding:"0 4px 0 2px"},upvoteIcon:{color:"green",position:"absolute",right:"280px",top:"11px","margin-right":"0"},downvoteIcon:{color:"red",position:"absolute",right:"330px",top:"11px","margin-right":"0"},conflictIcon:{color:"red",position:"absolute",right:"40px",top:"13px"},authorPhoto:{"margin-top":"10px",display:"block",width:"24px",height:"24px","background-color":"gray","background-size":"contain","border-radius":"50%","margin-right":"15px",overflow:"hidden"},reviewerPhoto:{width:"24px",height:"24px"},reviewerWrapper:{position:"absolute",right:"70px",top:"8px"},pipelineWrapper:{position:"absolute",right:"15px","margin-right":0,top:"12px"},commentsWrapper:{position:"absolute",right:"200px",top:"11px"},updatedAtWrapper:{position:"absolute",opacity:"0.5",right:"15px",bottom:"8px"},titleBase:{color:"rgb(0, 82, 204)","font-weight":"normal"},statusWrapper:{position:"absolute",right:"100px",top:"11px"},approvedBg:{"background-color":"rgba(105, 209, 0, 0.05)"},systemBg:{"background-color":"rgba(66, 139, 202, 0.05)"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadSettings=function(){var e=localStorage.getItem("monar_SETTINGS");window.monar_SETTINGS=e?JSON.parse(e):{hideWip:!0}},t.saveSettings=function(){localStorage.setItem("monar_SETTINGS",JSON.stringify(window.monar_SETTINGS))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.hidePrStuff=function(){r.parseHtmlPullRequests().forEach((function(e){var t,n=!1;e.title.includes("WIP")&&(null===(t=window.monar_SETTINGS)||void 0===t?void 0:t.hideWip)&&(n=!0),e.element.children().css("opacity",n?.2:1)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseHtmlPullRequests=function(){var e=[];return $("li.merge-request").each((function(){var t=$(this),n=$(".merge-request-title-text a",t),r=$(".issuable-reference",t),o=$(".issuable-info .author-link",t),a=$(".project-ref-path .ref-name",t),i=$(".issuable-pipeline-broken a",t),s=$(".issuable-upvotes",t),l=$(".issuable-downvotes",t),d=$(".issuable-comments",t),c=$('.issuable-info .badge:contains("approved")',t),p=$('.issuable-info .badge:contains("system")',t),u=$(".issuable-meta .author-link",t),m=$(".issuable-pipeline-status",t),g=$(".issuable-updated-at",t),f=$(".issuable-status",t),b=$(".issuable-authored",t);n.data("monar-title")||n.data("monar-title",n.text().trim()),e.push({element:t,titleElement:n,title:n.data("monar-title"),idElement:r,id:r.text().trim().substring(1),authorElement:o,author:{username:o.data("username").trim(),name:o.data("name").trim(),id:o.data("userId")},bottomTextElement:b,targetElement:a,target:a.text().trim(),conflictElement:i,hasConflict:i[0],upvoteElement:s,upvoteCount:s.text().trim(),isUpvoted:parseInt(s.text().trim(),10)>0,downvoteElement:l,commentsElement:d,commentsCount:d.text().trim(),approveElement:c,isApproved:c[0],isSystem:p[0],statusElement:f,status:f.text().trim(),reviewerElement:u,pipelineElement:m,updatedAtElement:g})})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(0),a=n(1),i=n(2),s=n(3),l=n(4);function d(){if(1===$("div.merge-request").length){$(".approvals-required-text.text-muted").remove(),$(".mr-section-container.mr-widget-workflow .mr-widget-footer").remove(),$(".mr-widget-heading.mr-widget-workflow .ci-widget-content").remove(),$(".mr-state-widget.prepend-top-default").css("position","relative");var e=$(".ci-widget.media").closest(".mr-widget-heading.mr-widget-workflow");e.css({position:"absolute",right:"70px",top:"-15px",border:"none"}),$(".ci-widget-container",e).insertBefore($(".align-self-start",e)),$(".align-self-start",e).css({"margin-left":"15px","margin-right":0}),e.addClass("remove-before"),$(".diverged-commits-count").contents().filter((function(){return 3==this.nodeType})).remove(),$(".diverged-commits-count").css("font-size","10px"),$(".git-merge-container .normal strong").contents().filter((function(){return"Request to merge"===$(this).text().trim()})).remove(),$(".js-check-out-branch").insertAfter($(".branch-actions ul.dropdown-menu li:last-child")),$(".js-check-out-branch").removeClass("btn"),$(".js-check-out-branch").wrap("<li></li>"),$(".js-web-ide").insertAfter($(".branch-actions ul.dropdown-menu li:last-child")),$(".js-web-ide").removeClass("btn"),$(".js-web-ide").wrap("<li></li>"),$(".branch-actions ul.dropdown-menu").css("overflow","hidden");var t=$("#monar-assign-btn");if(0===t.length){$(".breadcrumbs-list").after($('<a id="monar-assign-btn" href="#" style="position: absolute; right: 0; top: 20px; color: rgb(0, 82, 204);"></a>')),t=$("#monar-assign-btn")}t.off("click");var n,r,i,s=parseInt($(".block.assignee input[type=hidden]").val())===window.monar_GLOBALS.id;if(t.html(s?"Unassign me":"Assign me"),t.click((function(){$.ajax({url:"/"+window.gl.mrWidgetData.source_project_full_path+"/merge_requests/"+window.gl.mrWidgetData.iid+".json",type:"PUT",data:{merge_request:{assignee_id:s?"0":window.monar_GLOBALS.id}},success:function(e){location.reload()}})})),(n=window.gl.mrWidgetData.iid,r=o.getProjectId(),i=[],$.ajax("/api/v4/projects/"+r+"/merge_requests/"+n+"/pipelines").then((function(e){return e.filter((function(e){return"success"===e.status}))})).then((function(e){var t=[];return e.forEach((function(e){var n=$.ajax("/api/v4/projects/"+r+"/pipelines/"+e.id+"/jobs").then((function(e){return e.filter((function(e){return e.name.match(/new domain/g)}))})).then((function(e){var t=[];return e.forEach((function(e){var n=$.ajax("/api/v4/projects/"+r+"/jobs/"+e.id+"/trace").then((function(e){var t=e.match(/Go to (https:\/\/[^$]\S*)/m);t[1]&&i.push(t[1])}));t.push(n)})),Promise.all(t)}));t.push(n)})),Promise.all(t)})).then((function(){return i}))).then((function(e){e.forEach((function(e){}))})),$(".emoji-list-container .awards").css("opacity",.1).css("border-bottom","none"),$(".emoji-list-container .awards").mouseenter((function(){$(this).css("opacity",1)})).mouseleave((function(){$(this).css("opacity",.1)})),p()){if(0===$("#monar-feebas-main").length){var l="feebas://app:"+window.gl.mrWidgetData.diff_head_sha;$(".mr-state-widget.prepend-top-default").append('<a title="Open in Feebas" id="monar-feebas-main" href="'+l+'"></a>'),$("#monar-feebas-main").css(a.CONSTS_CSS("feebas")),$("#monar-feebas-main").css({position:"absolute",right:"0px",top:"-45px"}),$("#monar-feebas-main").mouseenter((function(){$(this).css("background-color","#1aaa55")})).mouseleave((function(){$(this).css("background-color","transparent")}))}var d=setInterval((function(){0!==$("#commits-list").length&&(clearInterval(d),$("#commits-list li .commit-actions").each((function(){var e=$(this),t=$('[data-title="Copy commit SHA to clipboard"]',e).data("clipboard-text"),n="monar-feebas-"+t,r="feebas://app:"+t;e.append('<a title="Open in Feebas" id="'+n+'" href="'+r+'"></a>'),$("#"+n).css(a.CONSTS_CSS("feebas")),$("#"+n).css("margin-left","15px"),$("#"+n).mouseenter((function(){$(this).css("background-color","#1aaa55")})).mouseleave((function(){$(this).css("background-color","transparent")}))})))}),500)}setInterval((function(){$(".err").removeClass("err")}),500)}}function c(){if(1!==$("#content-body .merge-request .merge-request-details").length&&window.monar_GLOBALS.projectId){var e=Promise.all([o({ref:"prod"}).then((function(e){return(e||[{}])[0]})),o({ref:"qa"}).then((function(e){return(e||[{}])[0]})),o({ref:"master"}).then((function(e){return(e||[{}])[0]})),o({ref:"cloud"}).then((function(e){return(e||[{}])[0]}))]).then((function(e){return{prod:e[0],qa:e[1],master:e[2],cloud:e[3]}})),t=o({username:window.monar_GLOBALS.internalUsername}).then((function(e){for(var t,n,r,o,a=0;a<(e||[]).length;a++){var i=e[a];if("master"!==i.ref||r||(r=i),"qa"!==i.ref||n||(n=i),"prod"!==i.ref||t||(t=i),"cloud"!==i.ref||o||(o=i),r&&n&&t&&o)break}return{prod:t||{},qa:n||{},master:r||{},cloud:o||{}}})),n=$.ajax("/api/v4/projects/"+window.monar_GLOBALS.projectId+"/repository/tags").then((function(e){return e||[{}]})),r=$.ajax("/api/v4/projects/"+window.monar_GLOBALS.projectId+"/repository/commits?ref_name=prod&per_page=100");Promise.all([e,t,n,r]).then((function(e){return{latest:e[0],nightly:e[1],tags:e[2],prodCommits:e[3]}})).then((function(e){for(var t=null,n=0;n<e.tags.length;n++){if(!(e.tags[n].name||"").includes("-rc")){e.tag=e.tags[n];break}t||(t=e.tags[n])}var r=0,o=[];for(n=0;n<e.prodCommits.length;n++){var i=e.prodCommits[n];if(i.id===e.tag.commit.id)break;i.title.startsWith("Merge")&&(r++,o.push(i))}if(window.monar_GLOBALS.untaggedMerges=o,0===$("#monar-pipelines-global").length){var s="";t&&(s+='\n                        <table style="display: inline-block; margin-bottom: 24px;">\n                            <tr><td>\n                            <a style="vertical-align: top; display: inline-block; margin-right: 40px;" href="'+window.monar_GLOBALS.project+"/commit/"+t.commit.id+'">\n                                <img src="https://img.shields.io/badge/latest rc-'+t.name.replace(/-/g," ")+'-yellowgreen.svg"></img>\n                            </a>\n                            </td></tr>\n                        </table>\n                        '),s+='\n                        <table style="display: inline-block">\n                            <tr><td>\n                            <a style="vertical-align: top; display: inline-block; margin-right: 40px;" href="'+window.monar_GLOBALS.project+"/commit/"+e.tag.commit.id+'">\n                                <img src="https://img.shields.io/badge/latest tag-'+e.tag.name.replace(/-/g," ")+'-green.svg"></img>\n                            </a>\n                            </td></tr>\n                            <tr><td>\n                            <a style="vertical-align: top; display: inline-block; margin-right: 40px;" href="javascript:toggleUntaggedMerges()">\n                                <img src="https://img.shields.io/badge/untagged merges-'+r+'-green.svg"></img>\n                            </a>\n                            </td></tr>\n                        </table>\n                        ',s+='<table style="display: inline-block">',(p()?["nightly","latest"]:["latest"]).forEach((function(t){s+='<tr><td style="text-align: right;"><img src="'+a(t,"")+'"></img></td>',["prod","qa","master"].forEach((function(n){s+='<td style="padding-left: 10px; text-align: center;">\n                                <a href="'+e[t][n].web_url+'">\n                                    <img src="'+a(e[t][n].status,n)+'"></img>\n                                </a>\n                            </td>'})),s+="</tr>"})),s+="</table>",$("nav.breadcrumbs .breadcrumbs-container").append('\n                        <div style="position: absolute; right: 0; top: -1px;" id="monar-pipelines-global">\n                            '+s+"\n                        </div>")}}))}function o(e){return $.ajax({url:"/api/v4/projects/"+window.monar_GLOBALS.projectId+"/pipelines",data:e})}function a(e,t){return"https://img.shields.io/badge/"+t+"-"+{running:"running",pending:"pending",success:"passed",failed:"failed",canceled:"canceled",skipped:"skipped",nightly:"nightly",latest:"latest",undefined:"unknown"}[e]+"-"+{running:"blue",pending:"blue",success:"brightgreen",failed:"red",canceled:"lightgrey",skipped:"lightgrey",nightly:"orange",latest:"orange",undefined:"lightgrey"}[e]+".svg"}}function p(){return"/app/frontend"===window.monar_GLOBALS.project}window.toggleUntaggedMerges=function(e){if(0===arguments.length&&(e=$("#monar_untagged_merges_panel").is(":hidden")||0===$("#monar_untagged_merges_panel").length),e){if($("#content-body").hide(),$("#monar_untagged_merges_panel").show(),0===$("#monar_untagged_merges_panel").length){var t=window.monar_GLOBALS.untaggedMerges||[],n=$(".shortcuts-external_tracker").attr("href")||"",r='<div id="monar_untagged_merges_panel" style="padding: 20px">';r+='<h3 style="padding-bottom: 20px">Untagged merges ('+t.length+")",r+='<a href="javascript:toggleUntaggedMerges(false)" style="margin-left: 16px; font-size: 14px;">(close)</a>',r+="</h3>",r+='<table style="width: 100%">',t.forEach((function(e){var t=e.title.match(/'([\S]*)'/),o=(t=t||e.message.match(/'([\S]*)'/))?t[1]:"UNKOWN",a=(t=o.match(/^([^ -]*-\d*)/))?t[1]:"",i=new Date(e.created_at);r+="<tr>",r+='<td><a href="'+n+"/browse/"+a+'">'+a+"</a></td>",r+='<td><a href="'+window.monar_GLOBALS.project+"/commit/"+e.id+'">'+o+"</a></td>",r+="<td>"+e.short_id+"</td>",r+="<td>"+e.author_name+"</td>",r+="<td>"+i.toDateString()+"</td>",r+="<td>"+i.toLocaleTimeString()+"</td>",r+="</tr>"})),r+="</table>",r+="</div>",$("#content-body").parent().append(r)}}else $("#content-body").show(),$("#monar_untagged_merges_panel").hide()},window.hidePrStuff=s.hidePrStuff,setTimeout((function(){if(window.monar_GLOBALS={id:window.gon.current_user_id,username:window.gon.current_username,name:window.gon.current_user_fullname,avatar:window.gon.current_user_avatar_url,defaultAvatar:window.gon.default_avatar_url,untaggedMerges:[],project:window.gl.projectOptions[Object.keys(window.gl.projectOptions)[0]].issuesPath?window.gl.projectOptions[Object.keys(window.gl.projectOptions)[0]].issuesPath.replace("/issues",""):"",projectId:o.getProjectId(),internalUsername:"user.of.system",MR_LIMITS:{warning:15,danger:28,blink:38}},i.loadSettings(),window.monar_GLOBALS.project){if(0===$("#monar-styles").length){document.head.insertAdjacentHTML("beforeEnd",'<style id="monar-styles">\n                .remove-before::before{display: none !important;} .remove-after::after{display: none !important;}\n\n                @keyframes monar_background_blink {\n                    100% {\n                    background-color: rgba(0,0,0,0);\n\n                    }\n                }\n            </style>')}l.parseHtmlPullRequests().forEach(r.formatPullRequest),d(),function(){if(p()&&0!==$("#commits-list").length)var e=setInterval((function(){clearInterval(e),$("#commits-list li .commit-actions").each((function(){var e=$(this),t=$('[data-title="Copy commit SHA to clipboard"]',e).data("clipboard-text"),n="monar-feebas-"+t,r="feebas://app:"+t;e.append('<a title="Open in Feebas" id="'+n+'" href="'+r+'"></a>'),$("#"+n).css(a.CONSTS_CSS("feebas")),$("#"+n).css("margin-left","15px"),$("#"+n).mouseenter((function(){$(this).css("background-color","#1aaa55")})).mouseleave((function(){$(this).css("background-color","transparent")}))}))}),500)}(),function(){var e=document.querySelector(".form-control.qa-issuable-form-title");if(e){var t=/Resolve (.*?) \"(.*?)\"/g.exec(e.value);t&&3===t.length&&(e.value=t[1]+" "+t[2])}}(),c(),$(".merge_counter, #state-opened .badge").each((function(){var e=parseInt($(this).text(),10),t=e<window.monar_GLOBALS.MR_LIMITS.warning?"green":e<window.monar_GLOBALS.MR_LIMITS.danger?"orange":"red";$(this).css("background-color",a.CONSTS_STRINGS(t)),$(this).css("color","white"),e>=window.monar_GLOBALS.MR_LIMITS.blink&&$(this).css("animation","monar_background_blink .75s ease-in-out infinite alternate")}))}}),50)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),a=n(2),i=n(3);t.formatPullRequest=function(e){var t=r.getProjectId();if($('li[data-original-title="Approvals"], li[title="Approvals"]',e.element).remove(),0===$("#monar-pull-requests-buttons").length){$(".top-area").css("position","relative"),$(".top-area").append('<div id="monar-pull-requests-buttons" style="display: inline-block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"></div>'),$("#monar-pull-requests-buttons").append('<a id="monar-pull-requests-buttons-hide-wip" href="javascript:void(0)" class="btn btn-sm btn-missing">Hide WIP</a>'),$("#monar-pull-requests-buttons-hide-wip").on("click",(function(){window.monar_SETTINGS.hideWip=!window.monar_SETTINGS.hideWip,$("#monar-pull-requests-buttons-hide-wip").toggleClass("btn-missing",!window.monar_SETTINGS.hideWip),$("#monar-pull-requests-buttons-hide-wip").toggleClass("btn-info",window.monar_SETTINGS.hideWip),$("#monar-pull-requests-buttons-hide-wip").blur(),a.saveSettings(),i.hidePrStuff()})),$("#monar-pull-requests-buttons-hide-wip").toggleClass("btn-missing",!window.monar_SETTINGS.hideWip),$("#monar-pull-requests-buttons-hide-wip").toggleClass("btn-info",window.monar_SETTINGS.hideWip),i.hidePrStuff();var n=window.monar_GLOBALS.project+"/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username="+window.monar_GLOBALS.username;$("#monar-pull-requests-buttons").append('<a style="margin-left: 10px" id="monar-pull-requests-buttons-show-mine" href="'+n+'" class="btn btn-sm btn-success">Show mine</a>');var s=window.monar_GLOBALS.project+"/merge_requests?scope=all&utf8=✓&state=opened&assignee_username="+window.monar_GLOBALS.username;$("#monar-pull-requests-buttons").append('<a style="margin-left: 10px" id="monar-pull-requests-buttons-show-my-rev" href="'+s+'" class="btn btn-sm btn-warning">Assigned to me</a>');var l=window.monar_GLOBALS.project+"/merge_requests?scope=all&utf8=✓&state=opened&assignee_id=None&wip=no";$("#monar-pull-requests-buttons").append('<a style="margin-left: 10px" id="monar-pull-requests-buttons-show-without-rev" href="'+l+'" class="btn btn-sm btn-danger">Without assignee</a>')}"prod"===e.target?e.targetElement.css(o.CONSTS_CSS("prod")):"qa"===e.target?e.targetElement.css(o.CONSTS_CSS("qa")):"cloud"===e.target&&e.targetElement.css(o.CONSTS_CSS("cloud"));var d=$(".monar-author-photo",e.element);d[0]||($(".issuable-info-container",e.element).prepend(o.CONSTS_STRINGS("authorPhotoHTML")),d=$(".monar-author-photo",e.element)),d.css(o.CONSTS_CSS("authorPhoto")),d.css("background-image","url("+window.monar_GLOBALS.defaultAvatar+")"),$("div",d).css("background-image","url('/uploads/-/system/user/avatar/"+e.author.id+"/avatar.png?width=44')"),e.titleElement.css(o.CONSTS_CSS("titleBase"));var c=e.title;if(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=c.replace(/^Resolve/g,"")).replace(/(APP-\d*)/g,"<b>$1</b>")).replace(/(APPT-\d*)/g,"<b>$1</b>")).replace(/(CMP-\d*)/g,"<b>$1</b>")).replace(/(DB-\d*)/g,"<b>$1</b>")).replace(/(FIX)/g,"<b>$1</b>")).replace(/(QA-\d*)/g,"<b>$1</b>")).replace(/(SEC-\d*)/g,"<b>$1</b>")).replace(/(DP-\d*)/g,"<b>$1</b>")).replace(/(PRED-\d*)/g,"<b>$1</b>")).replace(/(FRON-\d*)/g,"<b>$1</b>")).replace(/(STYL-\d*)/g,"<b>$1</b>")).replace(/(WE-\d*)/g,"<b>$1</b>")).replace(/(ANL-\d*)/g,"<b>$1</b>")).replace(/\[([^\]]+)\]/gi,'<b style="background-color: rgba(0,255,255,0.5); color: black;">[$1]</b>')).replace(/WIP(:?)/g,'<b style="color: red;">WIP$1</b>'),e.titleElement.html(c),e.titleElement.css({display:"inline-block","max-width":"440px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}),e.isUpvoted&&e.upvoteElement.css(o.CONSTS_CSS("upvoteIcon")),e.downvoteElement[0]&&e.downvoteElement.css(o.CONSTS_CSS("downvoteIcon")),e.hasConflict&&e.conflictElement.css(o.CONSTS_CSS("conflictIcon")),e.isSystem&&e.element.css(o.CONSTS_CSS("systemBg")),e.isApproved&&e.element.css(o.CONSTS_CSS("approvedBg")),e.reviewerElement[0]&&($("img",e.reviewerElement).css(o.CONSTS_CSS("reviewerPhoto")),e.reviewerElement.css(o.CONSTS_CSS("reviewerWrapper")),e.reviewerElement.each((function(e){$(this).css("right",parseInt($(this).css("right"))+30*e+"px")}))),e.pipelineElement[0]&&e.pipelineElement.css(o.CONSTS_CSS("pipelineWrapper")),e.commentsCount<1?e.commentsElement.remove():e.commentsElement.css(o.CONSTS_CSS("commentsWrapper")),e.updatedAtElement[0]&&e.updatedAtElement.css(o.CONSTS_CSS("updatedAtWrapper")),e.statusElement[0]&&(e.statusElement.css("color","MERGED"===e.status?"green":"red"),e.statusElement.css(o.CONSTS_CSS("statusWrapper"))),e.bottomTextElement[0]&&(e.bottomTextElement.html(e.bottomTextElement.html().replace("opened","")),e.bottomTextElement.html(e.bottomTextElement.html().replace("by","·"))),$("time",e.element)[0]&&$("time",e.element).each((function(){$(this).html($(this).html().replace("just now","now").replace(" minutes","m").replace(" minute","m").replace(" hours","h").replace(" hour","h").replace(" days","d").replace(" day","d").replace(" weeks","w").replace(" week","w").replace(" months","mon").replace(" month","mon"))})),null!==t){var p=0;$.ajax("/api/v4/projects/"+t+"/merge_requests/"+e.id+"/discussions").then((function(t){(t||[]).forEach((function(e){if(e.notes&&e.notes[0]){var t=e.notes[0];t.resolvable&&!t.resolved&&p++}})),p>0&&$("a",e.commentsElement).prepend('<span style="color: red;"><i aria-hidden="true" data-hidden="true" class="fa fa-crosshairs"></i><span>'+p+"</span></span>&nbsp;&nbsp;&nbsp;")})).catch((function(e){console.log(e.responseJSON)})),$.ajax(window.monar_GLOBALS.project+"/merge_requests/"+e.id+"/diffs.json?w=0").then((function(t){var n=t.size,r=t.added_lines,a=t.removed_lines,i='\n                    <div style="display: inline-block; position: absolute; left: 525px;">\n                    '+o.CONSTS_STRINGS("changed").replace(o.REPLACE,n)+"\n                    "+o.CONSTS_STRINGS("added").replace(o.REPLACE,r)+"\n                    "+o.CONSTS_STRINGS("removed").replace(o.REPLACE,a)+"\n                    </div>\n                ";$(".merge-request-title.title",e.element).append(i)})).catch((function(e){console.log(e)})),$.ajax("/api/v4/projects/"+t+"/merge_requests/"+e.id+"/approvals").then((function(t){(t.approved_by||[]).forEach((function(t,n){var r="monar-approve-photo-"+(t=t.user).id,o='<div class="'+r+'"><div style="width: 100%; height: 100%; background-size: contain;"></div></div>',a={display:"block",width:"24px",height:"24px","background-color":"gray","background-size":"contain","border-radius":"50%",overflow:"hidden",border:"2px solid #69D100",position:"absolute",top:"34px",right:30*n+215+"px"},i=$("."+r,e.element);i[0]||($(".issuable-info-container",e.element).prepend(o),i=$("."+r,e.element)),i.css(a),i.css("background-image","url("+window.monar_GLOBALS.defaultAvatar+")"),$("div",i).css("background-image","url('"+t.avatar_url+"?width=44')"),$("div",i).attr("title",t.name)})),t.approved_by.length>=(t.approvals_required||1)&&e.element.css(o.CONSTS_CSS("approvedBg"))})).catch((function(e){console.log(e.responseJSON)}))}}}]);