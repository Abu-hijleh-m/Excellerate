<script setup>

const open = ref(false);
</script>

<template>
  <div class="sticky top-0 z-[1000]">
  <header :class="['flex  lg:flex-row justify-between items-center pt-3 pb-2 sticky top-0 text-xl', { scrolled: isScrolled }]" style="transition: background-color 0.5s ease-in-out;">
    <div class="flex w-full lg:w-auto items-center justify-between ">
      <a href="/" class="text-lg">
        <span class="main-title font-bold">Excellerate</span>
      </a>
      <div class="block lg:hidden" @click="toggleMenu">
        <title>Excellerate</title>
        <path
          v-show="open"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
        ></path>
        <path
          v-show="!open"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
        ></path>
      </div>
    </div>
    <nav :class="['w-full lg:w-auto mt-2 lg:flex lg:mt-0', { block: open, hidden: !open }]">
      <ul class="flex flex-col lg:flex-row lg:gap-3 ">
        <li v-for="item in menuitems" :key="item.title">
          <a :href="item.path" class="flex lg:px-3 py-2  hover:text-white">
            {{ item.title }}
          </a>
        </li>
      </ul>
      
    </nav>
    <div class="flex">


      <button class="ctaButton rounded-md text-[15px] ml-5">
        <a href="/nuxtship-template/pages/contact.vue">Contact Us</a>
      </button>

      
      <UIcon name="i-line-md:menu" class="icon-toggle" @click="showSideBar()"/>
    </div>
    
  </header>
  <ul class="sidebar" :style="{ display: toggleSideBar ? 'flex' : 'none' }">
        <UIcon class="icon" name="i-meteor-icons:xmark"  @click="showSideBar()"/>
        <li class="liElement"><NuxtLink to="/">Features</NuxtLink></li>
        <li class="liElement"><NuxtLink to="/services">Services</NuxtLink></li>
        <li class="liElement"><NuxtLink to="/industries">Industries</NuxtLink></li>
        <li class="liElement"><NuxtLink to="/Events">Events</NuxtLink></li>
        <li class="liElement"><NuxtLink to="/Contact">Contact</NuxtLink></li>
        <li class="liElement"><NuxtLink to="/About">About</NuxtLink></li>
      </ul>
  </div>    
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      menuitems: [
        {
          title: "Features",
          path: "/",
        },
        {
          title: "Services",
          path: "/Services",
        },
        {
          title: "Industries",
          path: "/industries",
        },
        {
          title: "Events",
          path: "/events",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "About",
          path: "/about",
        },
      ],
      open: false,
      isScrolled: false,
      toggleSideBar:false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; 
    },
    toggleMenu() {
      this.open = !this.open;
    },
    showSideBar(){
      this.toggleSideBar = !this.toggleSideBar
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
header.scrolled {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

header {
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9948354341736695) 95%);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(255, 255, 255);
  transition: background-color .6s;
  z-index: 1;
}


header a {
  
  text-decoration: none;
  padding: 15px;
  display: block;
  text-align: center;
  transition: background-color 0.6s;
}

header a:hover {
  
  background-color: #272727;
  transition: background-color 0.3s;
  border-radius: 10px;
  
}

.ctaButton {
  background: #5e5e5e;
  transition: 1s;
  margin-top: 5px;
  color: white;
}
.icon-toggle {
    display: none;
    
  }

.ctaButton:hover {
  background: #050505;
}
.sidebar{
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  flex-direction: column;
  z-index: 999;
  margin-right: auto;
  height: 100vh;
  width: 200px;
  background: rgba(255, 255, 255, 0.068);
  backdrop-filter: blur(10px);
  justify-content: flex-start;
  align-items: center ;
  color: white;
  gap: 12px;
}
.sidebar li{
  width: 70%;
}
.sidebar .icon{
  font-size: 36px;
  margin-left: auto;
  margin-right:7px ;
  margin-top:7px ;
}
.liElement{
  font-size: larger;
  font-weight: bolder;
}
.sidebar li:hover{
  color: rgb(131, 130, 130);
  transition: 1s;
}
@media(max-width:1000px){
  .icon-toggle {
    display: inline-block;
    font-size: 36px;
    margin-right: 10px;
  }
  .ctaButton {
 display: none;
}
.main-title{
  font-size: larger;
}


}


</style>