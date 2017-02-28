<template lang="html">
  <div>
    <div class="tabs is-toggle">
      <ul>
        <li v-for="tab in tabs" :class="{ ' is-active': tab.isActive }">
          <a @click="selectTab(tab)">
            <span class="icon is-small"><i class="fa fa-image"></i></span>
            <span>{{ tab.title }}</span>
          </a>
        </li> 
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    }
  },

  created() {
    this.tabs = this.$children
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.title == selectedTab.title)
      })
    }
  }
}
</script>

<style lang="css">
</style>
