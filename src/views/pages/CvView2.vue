<script setup>
import CurriculumVitaeService from '@/service/CurriculumVitaeService';
import { onMounted, onUnmounted, ref, watch } from 'vue';
//import data from '../../../public/demo/data/profile.json';

const scrollPosition = ref(window.scrollY);
const data = ref({ me: {lastname:null, firstname:null, work: null, email:null, address: null, tel: null, photo:null}, education: [], skills:  [], projects:[], hobbies:[], languages: [], experiences:[]})
const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};

watch(scrollPosition, (newValue) => {
  console.log("Nouvelle position du scroll :", newValue);
});

const curriculumVitaeService = new CurriculumVitaeService(); 
onMounted(() => {
  curriculumVitaeService.getData().then((d) => (data.value = d));
  window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <header class="cv-header">
    <address>
      <ul>
        <li><span id="lastname">{{ data.me.lastname }}</span> <span id="firstname">{{ data.me.firstname }}</span></li>
        <li><strong>Tel : </strong><a href="tel:+33658234746"><span>{{ data.me.tel }}</span></a></li>
        <li><strong>Adresse : </strong><span>{{ data.me.address }}</span></li>
        <li><strong>Email : </strong><a href="mailto:jonathan.grill67@gmail.com"><span>{{ data.me.email }}</span></a></li>
      </ul>
    </address>
  </header>
  
  <main class="cv-container">
    <aside>
      <div class="cv-aside-sticky">
        <img src="./../../../public/demo/images/pp.png" alt="Photo de profil">

        <section class="noBorder">
          <h2>A propos de moi</h2>
          <p>{{ data.me.work }}</p>
        </section>
          
        <section class="noBorder">
            <h2>Langues</h2>
            <ul>
              <li v-for="lang in data.languages">{{ lang.title }} - {{ lang.qualified }}</li>
            </ul>
        </section>
        
        <section class="noBorder">
            <h2>Centre d'intérêt</h2>
            <ul>
              <li  v-for="hobby in data.hobbies">{{ hobby.title }}</li>
            </ul>
        </section>
      </div>
    </aside>
    
    <article>
      <section class="cv-card cv-form top20">
        <h2><i class="pi pi-graduation-cap"></i> Formations et diplômes</h2>
        <ul>
          <li v-for="education in data.education" class="form"><h3>{{ education.title }} - {{ education.school }} ({{ education.date }})</h3>
            <ul>
              <li v-for="learning in education.learnings" class="learning">{{ learning.title }}
                <ul>
                  <li v-for="sublearning in learning.learnings" class="sub-learning">{{ sublearning.title }}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="cv-card cv-exp">
        <h2><i class="pi pi-briefcase"></i> Expériences</h2>
        <ul>
          <li v-for="experience in data.experiences" class="exp"><h3>{{ experience.title }}</h3><br>{{ experience.date }} - {{ experience.company }} - {{ experience.duration }} {{ experience.unite }}<br>{{ experience.description }}</li>
        </ul>
      </section>

      <section  class="cv-card cv-comp cv-skills">
        <h2><i class="pi pi-code"></i> Compétences</h2>
        <div v-for="skill in data.skills">
          <Avatar :image="skill.icon" class="mr-2 icon-skill" style="background-color: #dee9fc; color: #1a2551" shape="circle"/>
          <Tag :value="skill.name" class="skill-tag" id="" hidden/>
        </div>
      </section>

      <section class="cv-card cv-proj">
        <h2><i class="pi pi-github"></i> Projets Personel</h2>
        <ul>
          <li v-for="project in data.projects"><h3>{{ project.title }}</h3><br><a :href="project.url" v-if="project.url"><span>Lien github</span></a><br><a :href="project.page" v-if="project.page"><span>Lien site web</span></a></li>
        </ul>
      </section>

    </article>
  </main>
</template>

<style>
@import './../../assets/cv-styles.css';


.learning {
  list-style-type: square;
  margin-left: 30px;

}
.sub-learning {
  list-style-type: circle;
  margin-left: 20px;
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

h3 {
  padding-left: 15px;
}

.cv-card h3 {
  list-style-type: none;
  position: relative;
}

.cv-card h3:before {
  content: "\25BA \0020";
  font-size: 10px;
  position: absolute;
  top: 5px;
  left: -5px;
}


.cv-aside-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.cv-container li {
  margin-bottom: 5px;
}

a:hover {
  color: #068ec6;
}
a span {
  position: relative;
}

a:hover span::after {
  width: 100%;
}

a span::after{
  content: "";
  position: absolute;
  background: #068ec6;
  height: 1px;
  width: 0;
  bottom: 0;
  left: 0;
  transition-duration: 0.3s;
}

.cv-card {
  margin-left: 15px;
  transition: all .4s ease;
}
.cv-container .cv-card h2 i{
  transition: transform 1s;
}
.cv-container .cv-card:hover h2 i{
  transform: scale(1.5);
}

.cv-container:hover .cv-card:not(:hover) {
  opacity: 0.5;
}

.cv-card ul li:first-child {
  margin-top: 5px;
}
</style>