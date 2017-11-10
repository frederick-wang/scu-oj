<template>
  <div class="solution-popups">
    <div class="am-popup" id="solution-submit-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">提交新题解</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <input type="text" class="am-form-field title" placeholder="请输入题解的标题">
          <div id="solution-submit-editor" style="height: 40rem;"></div>
          <button type="button" class="am-btn am-btn-success am-radius am-btn-block" id="solution-submit-btn">提交</button>
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
    let quill = new window.Quill('#solution-submit-editor', {
      theme: 'snow',
      placeholder: '请在这里输入您的题解内容~'
    })
    /* eslint-enable */
  }
}
</script>

<style scoped>
.solution-popups .title {
  margin-bottom: 1.5rem;
}

#solution-submit-btn {
  margin-top: 1.5rem;
}
</style>
