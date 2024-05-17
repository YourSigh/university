<template>
    <div class="class">
        <div class="class-time">
            <div v-for="i in times" class="class-time-item">
                <div class="start">{{ i.start }}</div>
                -
                <div class="end">{{ i.end }}</div>
            </div>
        </div>

        <div class="class-content">
            <div class="week">
                <div>星期一</div>
                <div>星期二</div>
                <div>星期三</div>
                <div>星期四</div>
                <div>星期五</div>
                <div>星期六</div>
                <div>星期日</div>
            </div>
            <div class="day">
                <div v-for="i in 7" :key="i" class="day-item">
                    <div v-for="j in 10" :key="j" class="class-item">
                        <div v-if="Object.keys(schedule[i - 1][j - 1]).length !== 0" class="class-item-notNull"
                            @click="openClassDetail(i, j)">
                            <div>{{ schedule[i - 1][j - 1].name }}</div>
                        </div>
                        <div v-else class="class-item-null" @click="handleNullClick(i, j)">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as classInterface from '../util/interface'

defineProps<{
    times: Array<{ start: string, end: string }>,
    schedule: Array<Array<classInterface.ClassScheduleItem>>,
}>()

const emit = defineEmits<{
    (event: 'changeClassDetail', value: boolean, i:number, j:number): void
}>()

const openClassDetail = (i: number, j: number) => {
    emit('changeClassDetail', true, i, j)
}

const handleNullClick = (i: number, j: number) => {
    emit('changeClassDetail', false, i, j)
}
</script>

<style scoped lang="scss">
.class {
    display: flex;

    .class-time {
        margin-top: 50px;

        .class-time-item {
            display: flex;
            align-items: center;
            height: 50px;
            border: 1px solid #ebeef5;

            .start,
            .end {
                width: 50px;
                text-align: center;
                line-height: 50px;
            }
        }
    }

    .class-content {
        .week {
            display: flex;
            height: 50px;

            div {
                width: 65px;
                text-align: center;
                line-height: 50px;
                border: 1px solid #ebeef5;
            }
        }

        .day {
            display: flex;
            flex-wrap: wrap;

            .class-item {
                width: 65px;
                text-align: center;
                line-height: 50px;
                height: 50px;
                border: 1px solid #ebeef5;

                .class-item-notNull {
                    width: 100%;
                    height: 100%;
                    div {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .class-item-null {
                    width: 100%;
                    height: 100%;
                }
            }

            .class-item:hover {
                background-color: #f5f7fa;
                cursor: pointer;
            }
        }
    }
}
</style>