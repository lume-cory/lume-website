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

                <div class="p-4 contact-form mx-auto max-w-xl bg-white font-[sans-serif]">
                    <h1 class="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
                    <form class="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm " />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm " />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm " />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 "></textarea>
                        <button type='button'
                            class="button is-primary text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

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