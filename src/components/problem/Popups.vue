<template>
  <div class="problem-popups">
    <div class="am-popup" id="problem-submit-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">提交答案</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <span>选择语言：</span>
          <div id="select-language-dropdown" class="am-dropdown">
            <button class="am-btn am-btn-primary am-dropdown-toggle" data-am-dropdown-toggle>{{currentLanguage}}
              <span class="am-icon-caret-down"></span>
            </button>
            <ul class="am-dropdown-content">
              <li class="am-dropdown-header">请选择您所用的语言</li>
              <li :class="{'am-active' : currentLanguage === 'C'}">
                <a href="javascript:" @click="onLanguageSelected('C')">C</a>
              </li>
              <li :class="{'am-active' : currentLanguage === 'C++'}">
                <a href="javascript:" @click="onLanguageSelected('C++')">C++</a>
              </li>
              <li :class="{'am-active' : currentLanguage === 'Java'}">
                <a href="javascript:" @click="onLanguageSelected('Java')">Java</a>
              </li>
              <li :class="{'am-active' : currentLanguage === 'Pascal'}">
                <a href="javascript:" @click="onLanguageSelected('Pascal')">Pascal</a>
              </li>
            </ul>
          </div>
          <div id="problem-submit-editor">//请在这里输入您的代码</div>
          <button type="button" class="am-btn am-btn-success am-radius am-btn-block">交付评测！</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentLanguage: 'C++'
    }
  },
  methods: {
    onLanguageSelected (language) {
      window.$('#select-language-dropdown').dropdown('close')
      this.currentLanguage = language
    }
  },
  mounted () {
    let editor = window.ace.edit('problem-submit-editor')
    editor.setTheme('ace/theme/eclipse')
    editor.getSession().setMode('ace/mode/c_cpp')
    window.$('#select-language-dropdown').dropdown({
      boundary: '#problem-submit-popup'
    })
  }
}
</script>

<style scoped>
#problem-submit-editor {
  width: 100%;
  height: 45rem;
  margin: 1.5rem 0;
}
</style>
