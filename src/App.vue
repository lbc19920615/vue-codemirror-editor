<template>
  <div id="app">
    <cm-editor :show-code-mirror-action="true"></cm-editor>
  </div>
</template>

<script>
import CmEditor from "@/components/cmEditor";
export default {
  name: 'app',
  components: {
    CmEditor,
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {

}
</style>
