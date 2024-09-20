<template>
    <div id="contact" class="section-contact py-10">
        <div class="flex relative z-20 items-center">
            <div class="container mx-auto px-6 flex relative py-16">
                <div class="section-contact-details pr-4">
                    <span class="section-contact-divider flex w-20 h-2 mb-12"></span>
                    <h2 class="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-gray-800 mb-4">
                        Get in touch
                    </h2>
                    <p class="mb-3">Still have questions about Lume Security?</p>
                    <p>Join us in building the future of security.</p>
                </div>

                <div class="contact-form w-full p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
                    <div id="lume-contact-form"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    window.hbspt.forms.create({
        region: "na1",
        portalId: "46735175",
        formId: "33188ac9-434f-4549-9404-235dba9a71d0",
        target: "#lume-contact-form"
    });
});

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.contact-form {
    background-color: #fff;
    box-shadow: 6px 6px 20px 7px rgba(0, 0, 0, .07);
    border-radius: 15px;
    padding: 36px 44px 45px;
}

textarea, input {
    &:focus {
        outline-color: $secondary;
    }
}

.section-contact-details {
    max-width: 450px;
    padding-top: 5em;
}

.section-contact-divider {
    background-color: $primary;
}
</style>