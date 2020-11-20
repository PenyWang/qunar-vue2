<template>
  <div>
    <!-- <div v-if="categoryData.sightName">{{ categoryData.sightName }}</div> -->
    <div v-for="(item, index) in categoryData.categoryList" :key="index">
      <div>{{ item.title }}</div>
      <div v-if="item.children">
        <detail-item :category-data="item" />
      </div>
    </div>
    <div v-if="categoryData.children">
      <div v-for="(item, index) in categoryData.children" :key="index">
        <div>{{ item.title }}</div>
        <detail-item :category-data="item.chidren" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: ["categoryData"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
</style>
