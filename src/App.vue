<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html,
body {
  color: #262626;
  background: #f3f3f3;
}

.gray {
  color: #8590a6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to,
.fade-fast-enter,
.fade-fast-leave-to {
  opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s;
}

.card .more-btn {
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  color: #ccc;
  font-size: 1.6rem;
  line-height: 3.2rem;
  height: 3.2rem;
  margin: 0;
  cursor: pointer;
}

.card > .header {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f2f7;
}

.card > .header h1,
.card > .header h2,
.card > .header h3,
.card > .header h4,
.card > .header h5,
.card > .header h6 {
  margin: 0;
  font-weight: lighter;
}

.card > .header span {
  display: inline-block;
  font-size: 1.25rem;
  color: #8590a6;
  margin-top: 0.5rem;
}

.card > .content p {
  line-height: 2.1rem;
  margin-top: 0;
  margin-bottom: 0.7rem;
}

.card > .content .am-g {
  margin-bottom: 0.2rem;
}

.card > .content p:last-child {
  margin-bottom: 0;
}

.card > .content {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-title {
  border: none !important;
  border-bottom: 1px solid #e7eaf1 !important;
  margin: 0 !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.card {
  position: relative;
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  margin: 1rem;
}

.card-narrow-padding {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>
