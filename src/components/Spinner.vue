<template>
    <div class="loading-wrap">
        <svg v-if="loading" class="loading" width="44px" height="44px" viewBox="0 0 44 44">
            <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
        </svg>
        <div v-if="!loading">
            <div v-if="(!list && resultCode == '200')" class="loading-text">没有符合条件的记录</div>
            <div v-if="resultCode != '200'" class="loading-text">服务器异常</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['list', 'loading', 'resultCode']
    }
</script>

<style>
    .loading-wrap {
        text-align: center;
    }
    .loading-text {
        color: #999;
        padding: 25px 0;
    }
    .loading {
        animation: rotator 1.4s linear infinite;
    }
    @keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }
        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }
    .loading .path {
        stroke: #009dd7;
        stroke-dasharray: 126;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash 1.4s ease-in-out infinite;
    }
    @keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }
        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }
        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }
</style>
