<template>
  <div>
    <detail-item :category-data="categoryData"/>
  </div>
</template>

<script>
import axios from "axios";
import DetailItem from './DetailItem'

export default {
  name: "Detail",
  props: {},
  data() {
    return {
      categoryData: [],
    };
  },
  methods: {},
  components: {
    DetailItem
  },
  async mounted() {
    const detailList = await axios.get("/mock/detail.json");
    this.categoryData = detailList.data.data;
    console.log(this.categoryData);
  },
};
</script>

<style lang="scss" scoped>
</style>
