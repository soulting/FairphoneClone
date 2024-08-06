<template>
  <main id="sample">
    <Editor
      api-key="vub20t3qw4otb7xs5d814g23718qwwfa3e25b1kigbl57qcl"
      :init="editorInit"
      v-model="content"
      @init="onEditorInit"
    />
    <button @click="getContent">Pobierz zawartość</button>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";

const content = ref("Welcome to TinyMCE!");
const editorInstance = ref(null);

const editorInit = {
  toolbar_mode: "sliding",
  plugins:
    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
  toolbar:
    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | addcomment showcomments | spellcheckdialog a11ycheck | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
  setup: (editor) => {
    editorInstance.value = editor;
  },
};

const getContent = () => {
  if (editorInstance.value) {
    const htmlContent = editorInstance.value.getContent();
    console.log("HTML Content:", htmlContent);
  }
};

// Inicjalizacja edytora
const onEditorInit = (editor) => {
  editorInstance.value = editor;
};
</script>
