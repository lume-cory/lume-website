<template>
    <footer>
        <div class="footer-top p-4 sm:p-6">
            <div class="mx-auto max-w-screen-xl">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center">
                        <img src="/images/logo/lume-security-logo-white.svg" class="mr-3 h-8" alt="Logo: Lume Security" />
                    </a>
                    <div style="color: #fff" class="flex">
                        <a href="/#about">About</a> <span class="mx-4">|</span> <a href="/#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom p-4 sm:p-6">
            <div class="mx-auto max-w-screen-xl">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 <a href="/" class="hover:underline">Lume Security</a>. All Rights Reserved.
                    </span>
                    <span class="text-xs">
                        <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
                        <span class="mx-4">|</span>
                        <NuxtLink to="/privacy">Privacy</NuxtLink>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.footer-top {
    background-color: darken($primary, 15%);
    min-height: 100px;
}

.footer-bottom {
    background-color: darken($primary, 14%);
    border-top: 1px solid darken($primary, 20%);

    span {
        color: white;
        opacity: 0.5
    }
}
</style>