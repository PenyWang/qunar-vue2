<template>
    <div class="recursion-container">
        <Recursion :list="list" />
    </div>
</template>

<script>
import Recursion from "./Recursion";
export default {
    name: "test-recursion",
    components: { Recursion },
    data: function () {
        return {
            list: [
                {
                    title: "a",
                    level: 1,
                    children: [
                        {
                            title: "a-a",
                            level: 2,
                            children: [
                                {
                                    title: "a-a-a",
                                    level: 3,
                                    children: [
                                        {
                                            title: "a-a-a-a",
                                            level: 4,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "b",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.recursion-container {
    width: 1rem;
    height: 2rem;
    background: lightblue;
    overflow-x: scroll;
}
</style>