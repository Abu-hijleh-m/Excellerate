

<template>
  <div style="display: flex;gap: 80px;padding-top: 180px;">
    <img src="https://cookies-bis-storage.fra1.cdn.digitaloceanspaces.com/Excellerate/658828d7b41046af866bcc4a.jpeg" style="height: 400px;" alt="">
    <div style="display: flex;flex-direction: column;gap: 30px;">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          What they think about us
        </h2>
        
        <p class="text-lg mt-4 text-slate-600">
          Founded by Amal Irshaidat, brings over a decade of experience in business consultancy, operational excellence, and human potential development. Discover how we redefine success for businesses and individuals across the MENA region.
        </p>

        <div>
          <UButton :block="false" :ui="{ rounded: 'rounded-sm' }" class="pb-[8px] pt-[8px] pr-[30px] pl-[30px]">About Us</UButton>
        </div>
        

        
    </div>
  </div>

  <!-- <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div> -->
</template>
