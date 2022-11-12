<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Amparo Rubio</strong>, a Game Dev near graduating currently living in Madrid, Spain.
      <br />I've been creating games and game dev tools for over 5 years with various technologies and different coding languages.
      <br />
      <br />
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Amparo_Rubio_Bellon_-_Unity_Developer.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Descargar como PDF ᴇꜱ</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar.png" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
     
      <h2>Languages and tools</h2>
    

    
      <div class="skill-set">
        <h3>Programming Languages</h3>
        <SkillRate name="C++" :rate="4"/>
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="Java" :rate="3" />
        <SkillRate name="Lua" :rate="3" />
        <SkillRate name="Javascript" :rate="3" />
        <SkillRate name="Typescript" :rate="3" />

        
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Complutense Unversity of Madrid - 2018-currently</h3>
      <h4>Game programming degree</h4>
      <div>Game development degree where I made some games and gamedev tools </div>

      <h2>Languages</h2>

      <h3>Spanish</h3>
      <div>It's my native language </div>

      <h3>English</h3>
      <div>I don't have a certification yet but I took a language inmersion program during all the high school </div>

      <h3>French</h3>
      <div> In a really basic level because I took some classes when I was in high school </div>


      <h2>Besides...</h2>
      <div>
        

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>