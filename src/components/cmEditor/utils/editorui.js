function getSelectedRange(editor) {
  return { from: editor.getCursor(true), to: editor.getCursor(false) };
}

export let codeMirrorFormateMixin = {
  methods: {
    autoFormatSelection(editor) {
      // console.log('editor', editor)
      var range = getSelectedRange(editor);
      editor.autoFormatRange(range.from, range.to);
    }
  }
}
