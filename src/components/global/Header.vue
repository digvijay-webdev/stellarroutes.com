<template>
    <div class="main">
        <DesktopNav class="desktop" />
        <MobileNav class="mobile" />
    </div>
</template>

<script>
import DesktopNav from './DesktopNav.vue';
import MobileNav from './MobileNav.vue';

export default {
    name: "Header",
    components: {
        DesktopNav,
        MobileNav
    }
}
</script>

<style scoped>
.mobile {
    display: none;
}

.desktop {
    display: block;
}

/* media queries */
@media screen and (max-width: 920px) {
    .mobile {
        display: block;
    }

    .desktop {
        display: none;
    }
}
</style>
