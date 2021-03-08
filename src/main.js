import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 实例化
import VueCodemirror from 'vue-codemirror'// import base style
import 'codemirror/lib/codemirror.css'
// import more codemirror resource...
// you can set default global options and events when Vue.use
Vue.use(VueCodemirror, /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */)

// 支持codemirror emmet插件
import CodeMirror from 'codemirror';
CodeMirror._cus = 'cus' + Date.now();
import emmet from '@emmetio/codemirror-plugin';
emmet(CodeMirror)

import { installFormatPlugin } from "@/components/cmEditor/utils/formatting";
installFormatPlugin(CodeMirror)


new Vue({
  render: h => h(App),
}).$mount('#app')
