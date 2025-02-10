<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Get in touch with us for more information</template>
      <template v-slot:desc>Let’s collaborate to drive your business forward. Contact us today and take the first step towards achieving <br> unparalleled success.
      </template>
    </LandingSectionhead>

    <div class="grid md:grid-rows-1  mx-auto max-w-4xl mt-16 pb-10">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Send a message
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Have something to say? I am here to help. Fill up the form or send
          email below.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>Amman/Jordan</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:jakobaichmayr@gmail.com">cookiesBIS@gmail.com</a>
          </div>
          </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
