<style>
.cm-editor-actionbar {
  display: flex;
  align-items: center;
  justify-items: flex-start;
}
.cm-editor-bar-item + .cm-editor-bar-item {
  margin-left: 10px;
}
</style>

<template>
  <div class="cm-editor">
    <div class="cm-editor-actionbar" v-if="showCodeMirrorAction">
      <button class="cm-editor-bar-item"  @click="autoFormatSelection(editor)">格式化</button>
      <button class="cm-editor-bar-item" @click="autoCommentSelection(editor)">注释</button>
    </div>
    <codemirror
        class="cm-editor-codemirror"
        ref="htmlEditor"
        :value="value"
        :options="defaultCodeMirror.htmlOptions"
        @input="onCmStyleCodeChange"
        @ready="onCmStyleCodeReady"
    ></codemirror>
  </div>
</template>

<script>
// import language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
// // import theme style
import 'codemirror/theme/base16-dark.css'
import "codemirror/addon/hint/show-hint.css";

import 'codemirror/mode/htmlmixed/htmlmixed.js'

import 'codemirror/addon/hint/show-hint';
import {codeMirrorSettingMixin} from "./utils/mixin";
import {codeMirrorFormateMixin} from "./utils/editorui";

export default {
  name: "cmEditor",
  mixins: [
    codeMirrorSettingMixin,
    codeMirrorFormateMixin,
  ],
  props: {
    value: null,
  },
  data() {
    return {
      editor: null,
    }
  },
  methods: {
    getCmEditor() {
      return this.editor
    },
    onCmStyleCodeReady(editor) {
      this.editor = editor

      this.$emit('ready', editor)
    },
    onCmStyleCodeChange(v) {
      this.$emit('input', v)
    },

  }
}
</script>
