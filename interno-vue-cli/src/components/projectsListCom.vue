<template>
  <div>
    <div class="projects__item" v-for="(project, index) in projects" :key="index">
      <img :src="project.img" alt="project">
      <div class="wrapper">
        <div>
          <div class="name">{{ project.name }}</div>
          <div class="text">{{ project.discription }}</div>
        </div>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
          <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectsListCom',
  props: ['projects'],

  computed: {
    filterList () {
      return this.selectedTag
        ? this.articlesList.filter((el) => el.tag.includes(this.selectedTag))
        : this.articlesList
    }
  },
  methods: {
    selectTag (tag) {
      // добавляем стили кликнотой кнопке тегау
      // если уже есть кликнутая-текущая кнопка тега,
      if (this.currentTagBtn) {
        // делаем её не активной
        this.currentTagBtn.target.classList.remove('tags__btn_activ')
        // делаем активной кликнутую кнопку тега
        event.target.classList.add('tags__btn_activ')
        // делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event
      } else {
        // если нет кликнутой-текущей кнопки тега
        // делаем активной кликнутую кнопку тега
        event.target.classList.add('tags__btn_activ')
        // делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event
      }
      // добавляем выбранный тег для фильтрации
      // если выбранный тег равен текущему - второй раз нажали на туже кнопку тега
      if (this.selectedTag === tag) {
        // то отменяется фильтрация и показываются все статьи
        this.selectedTag = ''
        // и делаем не активной второй раз нажатую кнопку тега
        event.target.classList.remove('tags__btn_activ')
      } else {
        // если выбранный тег не равен текущему, то происходит фильтрация по выбранному тегу
        this.selectedTag = tag
      }
      // при клике на кнопки тегов убераем описание статей
      // у кликнутого тега находим родителя, потом второй следующий элемент, потом детей у этого второго элемента
      const elem = event.target.parentNode.nextSibling.children;
      // преобразуем HTML-collection в массив
      [...elem].forEach((el) => {
        // пробегаемся по массиву и смотрим в .childNodes[1] - это и есть искомый элемент <p></p> в нем и смотрим класс
        if (!el.childNodes[1].classList.contains('hidden')) {
          el.childNodes[1].classList.add('hidden')
        }
      })
      //   arr = [...elem];
      //   console.log([...elem][0].childNodes[1]);
      //   for (let i = 0; i < arr.length; i++) {
      //     if (!arr[i].childNodes[1].classList.contains("hidden")) {
      //       arr[i].childNodes[1].classList.add("hidden");
      //     }
      //   }
    },
    viewDescription () {
      //   elem = event.target.childNodes;
      //   console.log(elem[1]);
      //   elem[1].classList.toggle("hidden");
      const elem = event.target.children;
      [...elem][0].classList.toggle('hidden')
      //   elem = event.target.children;
      //   elem = Array.prototype.slice.call(elem);
      //   elem[0].classList.remove("hidden");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/vars";

.wrapper {
  margin-top: 24px;
  width: 585px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  color: $titleColor;
  font-family: "DM Serif Display", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.text {
  color: $textColor;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.hidden {
  display: none;
}
</style>
