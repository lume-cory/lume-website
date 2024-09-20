<template>
    <header :class="{'is-top': isTop}" class="header">
        <nav class="nav-main mx-auto container flex items-center justify-between" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5 logo-main">
                    <span class="sr-only">Lume Security</span>
                    <img class="h-8 w-auto" src="/images/logo/lume-security-logo.svg" alt="Logo: Lume Security">
                </a>
            </div>
            <div class="flex lg:hidden" @click.prevent="toggleMenu">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                <NuxtLink to="/#about" class="nav-plain text-sm font-semibold leading-6 text-gray-900 px-5">About Me</NuxtLink>
                <NuxtLink to="/#contact" class="button is-primary text-white py-2 px-4 rounded letter-spacing">Contact</NuxtLink>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div v-if="menuActive" class="lg:hidden mobile-menu" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Lume Security</span>
                        <img class="h-8 w-auto" src="/images/logo/lume-security-logo-mark.svg" alt="Logo: Lume Security">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click.prevent="toggleMenu">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a href="/#about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="menuActive = false">About</a>
                        </div>
                        <div class="py-6">
                            <a href="/#contact" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="menuActive = false">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isTop = ref(true);
const menuActive = ref(false);

onMounted(() => {
    checkHeaderTop();

    // Setup a timer
    let timeout;

    // Listen for resize events
    window.addEventListener('scroll', function ( event ) {
        // If there's a timer, cancel it
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(function () {
            // Run our scroll functions
            checkHeaderTop();
        });

    }, false);
});

function checkHeaderTop() {
    isTop.value = window.scrollY <= 30 ? true : false;
}

function toggleMenu() {
    menuActive.value = !menuActive.value;
}
</script>

<style lang="scss">
@import '@/assets/css/variables';
.header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: $site-bg;
    transition: 250ms ease;
    will-change: background-color;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 7px 20px rgba(91,140,126,10%);
}

.header.is-top {
    background-color: transparent;
    height: 80px;
    box-shadow: none;
    background-color: $site-bg;
}

.nav-logo {
    max-width: 120px;
}

.nav-main {
    width: 100%;
    padding: 0 1em;
}

.nav-plain {
    transition: 250ms ease;

    &:hover {
        color: $primary;
    }
}

.logo-main {
    transition: 250ms ease;

    &:hover {
        transform: scale(1.05);
    }
}
</style>