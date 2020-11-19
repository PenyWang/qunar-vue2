<template>
    <div class="header-wrapper">
        <div class="header-back">
            <i class="iconfont icon-return"></i>
        </div>
        <router-link tag="div" to="/test-behavior" class="header-title">
            <i class="iconfont icon-search"></i>
            <div class="search-kw">输入城市/景点/游玩主题</div>
            <input class="header-input" type="text" />
        </router-link>
        <router-link to="/cities">
            <div class="header-right">
                {{ city }}<i class="iconfont icon-pull"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "home-header",
    props: {
        city: String,
    },
    data() {
        return {};
    },
    methods: {},
    components: {},
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.header-wrapper {
    position: fixed;
    width: 100%;
    height: 0.88rem;
    top: 0;
    z-index: 999;
    background-color: $bgColor;
    color: #ffffff;
    display: flex;
    .header-back {
        width: 0.8rem;
        height: 100%;
        line-height: 0.88rem;
        text-align: center;
        .icon-return {
            font-weight: 900;
        }
    }
    .header-right {
        min-width: 1.1rem;
        height: 100%;
        line-height: 0.88rem;
        text-align: center;
        color: #fff;
        .icon-pull {
            font-size: 0.01rem;
        }
    }
    .header-title {
        position: relative;
        flex: 1;
        margin: 0.12rem;
        .icon-search {
            position: absolute;
            left: 0.2rem;
            top: 0.15rem;
            color: #e4e7ea;
        }
        .search-kw {
            position: absolute;
            left: 0.65rem;
            top: 0.18rem;
            color: #e4e7ea;
        }
        .header-input {
            height: 100%;
            width: 100%;
            border-radius: 0.06rem;
        }
    }
}
</style>
