<template>
    <div class="hero-main flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="title-divider w-20 h-2 mb-12">
                </span>
                <h1 class="uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-gray-800">
                    Redefining
                    <span class="text-5xl sm:text-8xl">
                        Security
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 mb-2 mt-2">
                    At Lume, our goal is to redefine how we, as an industry, approach security and enable business. 
                </p>
                <p class="text-sm sm:text-base text-gray-700">
                    We’re building <strong>AI powered security solutions</strong> for all - not just the security team.
                </p>
                <div class="flex mt-8">
                    <a href="/#contact" class="button is-primary h-12 text-white py-2 px-4 rounded letter-spacing">Contact</a>
                </div>
            </div>
            <div class="hero-image hidden sm:block sm:w-1/3 lg:w-3/5 relative pl-7 items-center content-center">
                <img src="/images/lume-dashboard.png" alt="Lume Security Dashboard"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.hero-main {
    min-height: 60vh;
    padding-top: 80px;
}

.title-divider {
    background-color: $primary;
}

.hero-image {
    padding-left: 5em;
    
    img {
        box-shadow: 6px 6px 7px 3px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        max-width: 90%;
    }
}
</style>