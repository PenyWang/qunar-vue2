<template>
    <div>
      <city-header />
      <city-list />
    </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CityList from './components/CityList'

export default {
    name: "Cities",
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
      CityHeader,
      CityList
    },
};
</script>

<style lang="scss" scoped>

</style>
