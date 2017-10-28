<template>
  <div class="discuss-popups">
    <div class="am-popup" id="discuss-submit-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">提交新评论</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <div id="discuss-submit-editor" style="height: 45rem;"></div>
          <button type="button" class="am-btn am-btn-success am-radius am-btn-block" id="discuss-submit-btn">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    /* eslint-disable no-unused-vars */
    let quill = new window.Quill('#discuss-submit-editor', {
      theme: 'snow',
      placeholder: '请在这里输入您的评论内容~'
    })
    /* eslint-enable */
  }
}
</script>

<style scoped>
#discuss-submit-btn {
  margin-top: 1.5rem;
}
</style>
