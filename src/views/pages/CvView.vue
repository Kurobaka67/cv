<script setup>
import { onMounted, ref } from 'vue';
import data from '../../../public/demo/data/profile.json';
import ProfileService from "../../service/ProfileService";

const profileService = new ProfileService();
const profile = ref(null);

onMounted(() => {
    console.log(data.me)

})
</script>

<template>
  <header class="cv-header">
    <Card>
      <template #header>
        <img src="https://via.placeholder.com/150" alt="Photo de profil">
      </template>
      <template #title>{{ data.me.firstname }} {{ data.me.lastname }}</template>
      <template #subtitle>{{ data.me.work }}</template>
      <template #content>
        <p>
          Passionné de développement web.
        </p>
      </template>
    </Card>
  </header>
  
  <main class="cv-container">
    <aside>

    </aside>
    
    <div class="cv-column">
      <Panel class="cv-card">
        <template #header>
            <div class="flex items-center gap-2">
                <span class="font-bold">Contact</span>
            </div>
        </template>
        <ul>
          <li><b>Tel : </b>{{ data.me.tel }}</li>
          <li><b>Adresse : </b>{{ data.me.address }}</li>
          <li><b>Email : </b>{{ data.me.email }}</li>
        </ul>
      </Panel>

      <Panel header="Études" class="cv-card">
        <ul>
          <li v-for="education in data.education"><b>{{ education.title }}</b> - {{ education.school }} ({{ education.date }})
            <li v-for="learning in education.learnings" class="learning">{{ learning.title }}
              <li v-for="sublearning in learning.learnings" class="sub-learning">{{ sublearning.title }}</li>
            </li>
          </li>
        </ul>
      </Panel>

      <Panel header="Hobbies" class="cv-card">
        <ul>
          <li>Jeux vidéo</li>
        </ul>
      </Panel>
    </div>

    <div class="cv-column">
      <Panel header="Expérience" class="cv-card">
        <ul>
          <li v-for="experience in data.experience"><b>{{ experience.title }}</b><br>{{ experience.date }} - {{ experience.company }} - {{ experience.duration }} {{ experience.unite }}<br>{{ experience.description }}</li>
        </ul>
      </Panel>

      <Panel header="Compétences" class="cv-card">
        <div class="cv-skills">
          <div v-for="skill in data.skills">
            <Avatar :image="skill.icon" class="mr-2 icon-skill" style="background-color: #dee9fc; color: #1a2551" shape="circle"/>
            <Tag :value="skill.name" class="skill-tag" id="" hidden/>
          </div>
        </div>
      </Panel>

      <Panel header="Projets" class="cv-card">
        <ul>
          <li v-for="project in data.projects"><b>{{ project.title }}</b><br><a :href="project.url" v-if="project.url">Lien github</a><br><a :href="project.page" v-if="project.page">Lien site web</a></li>
          <li><b>Application de gestion</b> - Un projet en Vue.js avec Firebase</li>
        </ul>
      </Panel>

      <Panel header="Langues" class="cv-card">
        <ul>
          <li v-for="lang in data.langage">{{ lang.title }} - {{ lang.qualified }}</li>
        </ul>
      </Panel>
    </div>
  </main>
</template>

<style>
.cv-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  max-width: 1000px;
  margin: auto;
}
.cv-header {
  max-width: 600px;
}
.learning {
  list-style-type: square;
  margin-left: 15px;
}
.sub-learning {
  list-style-type: circle;
  margin-left: 15px;
}
.cv-skills{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cv-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
}
.skill-tag {
  margin-right: 5px;
}
.cv-card {
  transition: all .4s ease;
}
.cv-card:hover{
    opacity: 1;
    transform: scale(1.03);
}
</style>