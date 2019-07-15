(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{502:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spform-表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spform-表单","aria-hidden":"true"}},[t._v("#")]),t._v(" SpForm 表单")]),t._v(" "),a("hr"),t._v(" "),a("Common-CodeWrapper",{attrs:{title:"基础用法",description:"基础表单用法"}},[a("example-form"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("pre",[a("code",[t._v('<SpForm :model="form" @doSubmit="submitForm" :rules="rules" labelAlign="center">\n  <SpFormItem prop="time">\n    <SpRadioGroup name="time" v-model="form.time" @changeValue="handleTime()" itemStyle="oneline">\n      <SpRadio label="今天" trueLabel=0 :checked="isChecked"></SpRadio>\n      <SpRadio label="昨天" trueLabel=1></SpRadio>\n      <SpRadio label="近七天" trueLabel=2></SpRadio>\n    </SpRadioGroup>\n  </SpFormItem>\n  <SpFormItem prop="username" label="姓名" ref="username" required>\n    <SpInput v-model="form.username" placeholder="请输入姓名" size="small"></SpInput>\n  </SpFormItem>\n  <SpFormItem prop="phone" label="手机" ref="phone">\n    <SpInput v-model="form.phone" placeholder="请输入手机号" size="small"></SpInput>\n  </SpFormItem>\n  <SpFormItem prop="selecter" label="组件">\n    <SpCascader :options="options" v-model="form.selected" placeholder="请选择" size="small"></SpCascader>\n  </SpFormItem>\n  <SpButton size="small" type="primary" nativeType="submit">搜索</SpButton>\n  <SpButton size="small" type="secondary" nativeType="reset" @handleClick="clearForm">清空</SpButton>\n</SpForm>\n')])])])],1),t._v(" "),a("h4",{attrs:{id:"form-参数列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-参数列表","aria-hidden":"true"}},[t._v("#")]),t._v(" form 参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("model")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("绑定实体对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("labelWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表单label的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("150px")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("labelAlign")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表单label对齐方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("left/right/center")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("left")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rules")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前激活的面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("showMessage")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前激活的面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前激活的面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String / Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h4",{attrs:{id:"form-item-参数列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-item-参数列表","aria-hidden":"true"}},[t._v("#")]),t._v(" form-item 参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("form-item唯一标识，与绑定属性名,验证规则属性名相同")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("label文字描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("labelType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("label展示的位置,oneline和组件在一行展示，twoline各自独立一行")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("oneline/twoline")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("twoline")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("required")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否为必填项，设置为true,则在label前面显示红色星号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("maskType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("出错文案位置, 默认右侧，可设置为bottom 下边")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("bottom/right")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("right")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("customMask")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("自定义出错文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h4",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("setMask")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示出错提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hideMask")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("隐藏出错提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h4",{attrs:{id:"验证规则说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证规则说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证规则说明")]),t._v(" "),a("blockquote",[a("p",[t._v("按如下规则进行配置，name为需要验证的属性名，即form-item的prop属性值 。\n包含12种type类型验证规则，其中pattern reg 可进行正则表达式验证，message 为验证提示语，trigger 为验证触发时机，可选值：blur 失去焦点验证，change 数据变化时验证")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入活动名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valueRange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'最小不小于3,最大不大于10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lengthRange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'长度在 3 到 10 个字符'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入正确网址地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'min'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'最小值不于3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'最大值不于10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minlength'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入最少3个字符'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'maxlength'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入最多10个字符'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入正确的手机号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入正确的邮箱地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入数字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pattern'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^[#$%^&*]$/g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请勿输入非法字符'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)},[],!1,null,null,null);e.default=s.exports}}]);