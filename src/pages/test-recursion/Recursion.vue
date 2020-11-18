<template>
    <div class="group-container">
        <div class="group-wrapper" v-for="(item, index) in list" :key="index">
            <div class="title" :style="{paddingLeft: ((item.level - 1) * .2) + 'rem'}">
                <div class="title-text">{{ item.title }}</div>
            </div>
            <div v-if="item.children" class="children">
                <recursion :list="item.children" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Recursion",
    props: ["list"]
};
</script>

<style scoped lang="scss">
.title {
    display: flex;
    width: 100%;
    // border-bottom: 1px solid lightgray;
    .title-text {
        flex: 1;
    }
}
.title:hover {
    background: lightgray;
}
</style>