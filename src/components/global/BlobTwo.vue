<template>
    <div class="main">
        <svg id="10015.io" viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <defs>
                <clipPath id="blob">
                    <path fill="#474bff" d="M357,306Q316,372,228.5,392Q141,412,116.5,326Q92,240,130,177Q168,114,253,92.5Q338,71,368,155.5Q398,240,357,306Z" />
                </clipPath>
            </defs>
            <image x="0" y="0" width="100%" height="100%" clip-path="url(#blob)" xlink:href="../../assets/blobtwo-filtered-green.png" preserveAspectRatio="xMidYMid slice"></image>
        </svg>
    </div>
</template>

<script>
export default {
    name: "BlobTwo"
}
</script>

<style scoped>
.main {
    width: 500px;
    height: 500px;
}

svg {
    border: 1px solid red;
}

image {
    scale: 1;
    animation-name: zoom;
    animation-duration: 2s;
    animation-iteration-count: 1;
    transition: all .3s ease;
}

@keyframes zoom {
    from {
        scale: 0.7;
    }
    to {
        scale: 1;
    }
}
</style>
