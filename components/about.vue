<template>
    <div id="about" class="section-about py-8">
        <div class="container mx-auto px-6 flex relative py-16 items-center">
            <img src="/images/team.png" alt="" class="pr-4 about-image">
            <div class="pl-4">
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-white-800 mb-3">
                    About Us
                </h1>
                <p class="mb-3">We’re a team of builders, practitioners, and creatives with decades of experience in cybersecurity.</p>
                <p>But we believe status quo security tools are too complex and out of reach for most. This fuels our drive to push boundaries and reconsider how we build our products.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.section-about {
    background: $primary;
    background: linear-gradient(90deg, $primary 0%, darken($primary, 30%) 75%);
    color: #ffffff;

    img {
        max-width: 300px;
    }
}
</style>