<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello world!</h1>

    <div class="paragraph">
      <div>
      My name is <b> Amparo Rubio </b>, game programming student currently finishing it's Bachelor's degree at Complutense University of Madrid.
    
      </div>
      <div style="margin-top: 10px;">  In my free time I like to play videogames, doing my bullet journal and watching animation series</div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">games</router-link>, on <router-link to="/other-projects"> tools</router-link>, and took part in <router-link to="/resume">a few game jams</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game programmer or tool programmer. You can reach me at <a href="mailto:ampxrubio@gmail.com">ampxrubio@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>