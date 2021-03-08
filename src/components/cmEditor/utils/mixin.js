export let codeMirrorSettingMixin = {
  props: {
    showCodeMirrorAction: false,
  },
  data() {
    return {
      defaultCodeMirror: {
        jsOptions: {
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          indentWithTabs: true,
          smartIndent: true,
          autofocus: false,
          hintOptions: {
            completeSingle: false
          }
          // more CodeMirror options...
        },
        cssOptions: {
          tabSize: 4,
          mode: 'text/x-scss',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          extraKeys: {
            'Tab': 'emmetExpandAbbreviation',
            'Esc': 'emmetResetAbbreviation',
            'Enter': 'emmetInsertLineBreak'
          },
          hintOptions: {
            completeSingle: false
            // more CodeMirror options...
          }
        },
        htmlOptions: {
          tabSize: 4,
          mode: 'htmlmixed',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          extraKeys: {
            'Tab': 'emmetExpandAbbreviation',
            'Esc': 'emmetResetAbbreviation',
            'Enter': 'emmetInsertLineBreak'
          },
          hintOptions: {
            completeSingle: false

            // more CodeMirror options...
          }
        }
      }
    }
  }
}
