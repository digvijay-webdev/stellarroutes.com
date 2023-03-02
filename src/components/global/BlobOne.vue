<template>
    <div class="main">
        <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <defs>
                <clipPath id="blob">
                    <path fill="#00b894" d="M294,327.5Q139,415,145.5,251Q152,87,300.5,163.5Q449,240,294,327.5Z" />
                </clipPath>
            </defs>
            <image x="0" y="0" width="100%" height="100%" clip-path="url(#blob)" xlink:href="../../assets/blobone-filtered-green.png" preserveAspectRatio="xMidYMid slice"></image>
        </svg>
    </div>
</template>

<script>
export default {
    name: "BlobOne"
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
