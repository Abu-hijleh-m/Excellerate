<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
    <h2 class="text-white text-3xl md:text-6xl">Services to help business grow.</h2>
    <a href=""><p class="text-slate-500 mt-4 text-lg md:text-xl underline">
      See All Service <UIcon name="i-tabler:arrow-narrow-right" class="w-5 h-5 align-middle" />
    </p>
    </a>
    <div class="flex mt-5">
      <UButton :block="false" :ui="{ rounded: 'rounded-sm' }" class="pb-[8px] pt-[8px] pr-[30px] pl-[30px] bg-white text-black">Get Started</UButton>
    </div>
  </div>
</template>
