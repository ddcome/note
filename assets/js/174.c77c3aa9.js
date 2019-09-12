(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{233:function(a,e,t){"use strict";t.r(e);var r=t(0),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"rails-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" Rails_常用命令")]),a._v(" "),t("h2",{attrs:{id:"model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[a._v("#")]),a._v(" Model")]),a._v(" "),t("ul",[t("li",[a._v("生成新模型")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rails g model ExpectJob\n\nrails g model user name:string\n")])])]),t("h2",{attrs:{id:"controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller","aria-hidden":"true"}},[a._v("#")]),a._v(" Controller")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 生成控制器，指定两个 Action\nrails generate controller StaticPages home help --no-test-framework\n\n# 撤销生成\nrails destroy  controller FooBars baz quux\n\n# 生成 Restful Controller\nrails generate controller webapp/resumes index create new destroy show\n\n# 生成控制器，指定两个 Action\nrails generate controller StaticPages home help --no-test-framework\n")])])]),t("h2",{attrs:{id:"migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate","aria-hidden":"true"}},[a._v("#")]),a._v(" Migrate")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 为表添加一列\nrails g migration add_image_to_paintings image:string\n\n# 生成有 reference 关系的列\nrails g migration AddUserToUploads user:references\n\n# Migration檔案不需要和Model一一對應，像我們來新增一個Migration檔案來新增一個資料庫欄位\n$ rails g migration add_status_to_events status:string\n")])])]),t("h2",{attrs:{id:"撤销某次生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销某次生成","aria-hidden":"true"}},[a._v("#")]),a._v(" 撤销某次生成")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rails d .... # 删除上个命令生成文件\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);