<template>
  
  <footer class="my-20 bg-black text-white flex flex-col justify-center align-middle items-center p-0 m-0 absolute left-0 right-0 h-[200px]">
          
              <div class="flex  justify-between gap-10">
                <div>
                  <div class="flex flex-col">
                    <h1>Excellerate</h1>
                    <h1>FZE</h1>
                    <h4 class="pt-6"><UIcon name="i-subway:call" class="w-5 h-5" />+962777345126</h4>
                    </div>
                </div>
                <div class="flex gap-24">
                    <div class="list">
                      <ul>
                        <li class="lists"><NuxtLink to="/Features">Features</NuxtLink></li>
                        <li class="lists"><NuxtLink to="/Services">Services</NuxtLink></li>
                      </ul>
                    </div>
                    <div class="list">
                      <li class="lists"><NuxtLink to="/Industries">Industries</NuxtLink></li>
                      <li class="lists"><NuxtLink to="/Events">Events</NuxtLink></li>
                    </div>
                    <div class="list">
                      <li class="lists"><NuxtLink to="/contact">Contact</NuxtLink></li>
                      <li class="lists"><NuxtLink to="/about">About</NuxtLink></li>
                    </div>
                </div>
              </div>
              <div class="bg-[#403e39] h-[1px] w-full">

              </div>
          <div>
            <p>© 2025 Excellerate All Rights Reserved.</p>
            <p class="text-center text-xs text-slate-500 mt-1">
            Made by
            <a
              href="https://cookiesbis.com/"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >
              
              <span class="underline">CookiesBIS</span>
              
            </a>
            </p>
          </div>
        </footer>


  
</template>
<style scoped>

.list{
  list-style: none;
  gap: 10px;
  
  transition:  0.5s  transform 0.3s ease;;
}
.lists:hover{
  color: rgb(104, 101, 101);
  
}
</style>