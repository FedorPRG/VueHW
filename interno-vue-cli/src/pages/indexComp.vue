<template>
  <div class="index center">
    <headerCom />
    <section class="banner center">
      <h1 class="banner__title">Let Your Home <br> Be Unique</h1>
      <p class="banner__text">There are many variations of the passages of lorem Ipsum fromavailable,
        majority.</p>
      <a class="banner__button" href="#">
        <div>
          Get Started</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </a>
    </section>
    <section class="projects center">
      <h1 class="projects__title">
        Follow Our Projects
      </h1>
      <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable <br>
        content of page lookings at
        its layouts points.</p>
      <div class="projects__content">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <img :src='project.img' alt="project">
          <div class="project__wrapper">
            <div>
              <div class="project__name">{{ project.name }}</div>
              <div class="project__discr">{{ project.discription }}</div>
            </div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="indicators center">
      <div v-for="(indicator, index) in indicators" :key="index" class="indicators__item">
        <div class="indicators__quantity">{{ indicator.quantity }}</div>
        <div class="indicators__name">{{ indicator.name }}</div>
      </div>
    </section>
    <section class="articles center">
      <h1 class="articles__title">Articles & News</h1>
      <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
        content of a page when
        lookings at its layouts the points of using.</p>
      <div class="articles__content">
        <div v-for="(article, index) in articles" :key="index" class="article">
          <img :src="article.img" alt="article1">
          <img class="article__tag" :src="article.imgTag" alt="Tag1">
          <div class="article__name">{{ article.name }}</div>
          <div class="article__wrapper">
            <div class="article__data">{{ article.data }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
              <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <footerCom />
  </div>
</template>

<script>
import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'

export default {
  name: 'indexComp',
  data () {
    return {
      projects: [{
        img: require('../assets/index-item1.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item2.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item3.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item4.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }],
      indicators: [{
        quantity: '12',
        name: 'Years Of Experiance'
      }, {
        quantity: '85',
        name: 'Success Project'
      }, {
        quantity: '15',
        name: 'Active Project'
      }, {
        quantity: '95',
        name: 'Happy CUstomers'
      }],
      articles: [{
        img: require('../assets/index-article1.png'),
        imgTag: require('../assets/tag1.png'),
        name: 'Let’s Get Solution For Building Construction Work',
        data: '26 December,2022'
      }, {
        img: require('../assets/index-article2.png'),
        imgTag: require('../assets/tag2.png'),
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        data: '22 December,2022'
      }, {
        img: require('../assets/index-article3.png'),
        imgTag: require('../assets/tag3.png'),
        name: 'Best For Any Office & Business Interior Solution',
        data: '25 December,2022'
      }]
    }
  },
  components: {
    headerCom,
    footerCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";

img {
  display: block;
}

a {
  text-decoration: none;
  color: $titleColor;
}

svg:hover {
  cursor: pointer;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.banner {
  margin-top: 57px;
  height: 758px;
  background: url(../assets/index-banner.png) no-repeat center;

  &__title {
    padding-top: 208px;
    padding-left: 52px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
  }

  &__text {
    width: 433px;
    padding-top: 18px;
    padding-left: 52px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__button {
    width: 124px;
    display: flex;
    gap: 10px;
    margin-top: 21px;
    margin-left: 52px;
    color: #fff;
    padding: 26px 48px;
    border-radius: 18px;
    background: $titleColor;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    align-items: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
  }
}

.projects {
  margin-top: 96px;

  &__title {
    color: $titleColor;
    text-align: center;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 8px;
    color: $textColor;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__content {
    margin-top: 93px;
    display: grid;
    grid-template-columns: repeat(2, 548px);
    row-gap: 56px;
    column-gap: 104px;
  }
}

.project {
  &__wrapper {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__name {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
  }

  &__discr {
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }
}

.indicators {
  justify-content: center;
  margin-top: 100px;
  background-color: $indicatorsBackColor;
  height: 457px;
  display: flex;
  gap: 130px;

  &__item {
    padding-top: 151px;
    width: 192px;
    position: relative;

    &:not(:last-child)::after {
      content: " ";
      background: $indicatorColor;
      width: 1px;
      height: 130px;
      top: 169px;
      left: 250px;
      position: absolute;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__quantity {
    color: $indicatorColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 106.25px */
    letter-spacing: 1.7px;
  }

  &__name {
    margin-top: 16px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }
}

.articles {
  margin-top: 96px;

  &__title {
    color: $titleColor;
    text-align: center;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 12px;
    color: $textColor;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__content {
    margin-top: 52px;
    display: flex;
    justify-content: space-between;
  }
}

.article {
  padding: 21px;
  width: 382px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  position: relative;
  transition: all 0.3s;

  &__tag {
    position: absolute;
    top: 249px;
    left: 41px;
  }

  &__name {
    margin-top: 21px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
  }

  &__data {
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
  }

  &__wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: $indicatorsBackColor;
  }

  &:hover circle {
    cursor: pointer;
    transition: fill 0.3s;
    fill: #fff;
  }
}
</style>
