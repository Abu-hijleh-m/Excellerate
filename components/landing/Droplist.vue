<template>
    <div class=" pt-14" style="padding-bottom: 20px;">
        <h1 class="faqs text-black text-5xl">FAQS</h1>
        <UAccordion multiple :items="items" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" class="text-xl"/>
    </div>
</template>

<script setup lang="ts">


const items = [{
  label: 'What is Excelerate?',
  icon: 'i-codex:dot-circle',
  defaultOpen: false,
  content: 'Excelerate is a global coaching and business development organization that empowers entrepreneurs by integrating operational excellence and strategic insights into every stage of their business journey.'
}, {
  label: 'What services do you offer to entrepreneurs?',
  icon: 'i-codex:dot-circle',
  defaultOpen: false,
  content: 'We offer a variety of services including personalized coaching, business strategy development, operational excellence consulting, startup mentorship, financial empowerment, and global expansion support.'
}, {
  label: 'How is Excelerate different from other coaching programs?',
  icon: 'i-codex:dot-circle',
  defaultOpen: false,
  content: 'Unlike other coaching programs, Excelerate integrates operational excellence into all aspects of business development. Our focus is on creating scalable, sustainable Business , Intelligence Solutions , systems and optimizing business operations from the ground up.'
}, {
  label: 'Who can benefit from Excelerate’s services?',
  icon: 'i-codex:dot-circle',
  defaultOpen: false,
  content: 'Entrepreneurs at any stage—whether you —can benefit from our tailored programs. We work with individual entrepreneurs, teams, and even corporations.'
},
 {
  label: 'How long has Excelerate been in business?',
  icon: 'i-codex:dot-circle',
  defaultOpen: false,
  content: 'Excelerate has been empowering entrepreneurs globally for over 20 years, and we’ve successfully coached over 3,000 entrepreneurs and launched 500+ successful projects worldwide.'
}]
</script>
<style scoped>
  .faqs{
    margin-right:50% ;
    margin-left: 45%;
    font-weight: bolder;
  }
</style>