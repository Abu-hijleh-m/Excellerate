<script setup lang="ts">


</script>

<template>
  
    <div class="container" >
        
          <video  autoplay loop muted plays-inline class="background-clip" >
            <source src="https://videos.pexels.com/video-files/3205624/3205624-hd_1920_1080_25fps.mp4" type="video/mp4" >
          </video>
          <div class="overlay"></div>
        
        <div class="content"  >
          <h3>WELCOME!</h3>
          <h1 style="line-height: .9999;">Empowering Businesss , Elevating Success </h1>
          <h3>JOIN A JOURNEY OF INNOVATION AND EXCELLENCE WITH EXCELLERATE , WHERE IMPACCTFUL STRATEGIES MEET ACTIONABLE RESULTS</h3>
          <button class=" ctaButton rounded-md   "><NuxtLink to="/contact"></NuxtLink>contact us</button>
        </div>
    </div>
  
</template>

<style scoped>  
*{
  margin: 0;
  padding:0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  
}
.content{
  text-align: center;
  display: flex;
  flex-direction: column;
}
.content h1{
  font-size: 85px;
  margin-bottom: 50px;
  
}
.content h3{
  font-size: 20px;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  filter: drop-shadow(black 2px 4px 25px);
}
.background-clip{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width:100%;
  
 
}
.container{
  width:100%;
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; 
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9948354341736695) 95%);
    z-index: -1;
}
.ctaButton{
  background:#202020;
  padding: 15px;
  transition: 1s;
  margin-top:10px;
  
}
.ctaButton:hover{
  background:#000000;
}

.background-clip[data-v-d7ed1e92]
{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0;
  object-fit: cover;
  /* i should learn more about this topic ! */}
  @media (max-width: 1279px) {
  .container {
    padding-left: 150px; /* tryed to solve it by making media but still */
    padding-right: 50%;   /* 7al moaqaat  */
    padding-left: 50%;
  }
}
</style>


