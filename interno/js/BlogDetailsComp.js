Vue.component("comp", {
  props: {},

  data() {
    return {
      currentTagBtn: "",
      selectedTag: "",
      tagsList: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
      articlesList: [
        {
          tag: "Kitchen",
          title: "Kitchen 1",
          description: "brief description of the article",
        },
        {
          tag: "Kitchen",
          title: "Kitchen 2",
          description: "brief description of the article",
        },
        {
          tag: "Kitchen",
          title: "Kitchen 3",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 1",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 2",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 3",
          description: "brief description of the article",
        },
        {
          tag: "Building",
          title: "Building 1",
          description: "brief description of the article",
        },
        {
          tag: "Building",
          title: "Building 2",
          description: "brief description of the article",
        },
        {
          tag: "Building",
          title: "Building 3",
          description: "brief description of the article",
        },
        {
          tag: "Architecture",
          title: "Architecture 1",
          description: "brief description of the article",
        },
        {
          tag: "Architecture",
          title: "Architecture 2",
          description: "brief description of the article",
        },
        {
          tag: "Architecture",
          title: "Architecture 3",
          description: "brief description of the article",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 1",
          description: "brief description of the article",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 2",
          description: "brief description of the article",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 3",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 1",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 2",
          description: "brief description of the article",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 3",
          description: "brief description of the article",
        },
      ],
    };
  },
  computed: {
    filterList() {
      return this.selectedTag
        ? this.articlesList.filter((el) => el.tag.includes(this.selectedTag))
        : this.articlesList;
    },
  },

  template: `
  <div>
    <h1 class="title tags__title">Tags</h1>
            <div class="tags__wrapper">
                <button @click='selectTag(tag)' class="tags__btn" v-for="(tag,index) in tagsList" :key="index">{{tag}}</button>
            </div>
            <div>
            <div @click='viewDescription()' class="title blog__title"  v-for="(article,index) in filterList" :key="index">{{article.title}} <p class="text hidden">{{article.description}}</p> </div></div>
  </div>`,
  methods: {
    selectTag(tag) {
      //добавляем стили кликнотой кнопке тегау
      //если уже есть кликнутая-текущая кнопка тега,
      if (this.currentTagBtn) {
        //делаем её не активной
        this.currentTagBtn.target.classList.remove("tags__btn_activ");
        //делаем активной кликнутую кнопку тега
        event.target.classList.add("tags__btn_activ");
        //делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event;
      } else {
        //если нет кликнутой-текущей кнопки тега
        //делаем активной кликнутую кнопку тега
        event.target.classList.add("tags__btn_activ");
        //делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event;
      }
      //добавляем выбранный тег для фильтрации
      //если выбранный тег равен текущему - второй раз нажали на туже кнопку тега
      if (this.selectedTag === tag) {
        //то отменяется фильтрация и показываются все статьи
        this.selectedTag = "";
        //и делаем не активной второй раз нажатую кнопку тега
        event.target.classList.remove("tags__btn_activ");
      } else {
        //если выбранный тег не равен текущему, то происходит фильтрация по выбранному тегу
        this.selectedTag = tag;
      }
      //при клике на кнопки тегов убераем описание статей
      //у кликнутого тега находим родителя, потом второй следующий элемент, потом детей у этого второго элемента
      elem = event.target.parentNode.nextSibling.nextSibling.children;
      console.log(elem);
      //преобразуем HTML-collection в массив
      [...elem].forEach((el) => {
        //пробегаемся по массиву и смотрим в .childNodes[1] - это и есть искомый элемент <p></p> в нем и смотрим класс
        if (!el.childNodes[1].classList.contains("hidden")) {
          el.childNodes[1].classList.add("hidden");
        }
      });
      //   arr = [...elem];
      //   console.log([...elem][0].childNodes[1]);
      //   for (let i = 0; i < arr.length; i++) {
      //     if (!arr[i].childNodes[1].classList.contains("hidden")) {
      //       arr[i].childNodes[1].classList.add("hidden");
      //     }
      //   }
    },
    viewDescription() {
      //   elem = event.target.childNodes;
      //   console.log(elem[1]);
      //   elem[1].classList.toggle("hidden");
      elem = event.target.children;
      [...elem][0].classList.toggle("hidden");
      //   elem = event.target.children;
      //   elem = Array.prototype.slice.call(elem);
      //   elem[0].classList.remove("hidden");
    },
  },
});
