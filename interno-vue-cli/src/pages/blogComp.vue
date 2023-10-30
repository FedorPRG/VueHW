<template>
  <div class="blogPages">
    <headerCom />
    <section class="banner center">
      <div class="banner__titleBack">
        <h1 class="banner__title">Articles & News</h1>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li"><a href="./index.html" class="breadcrumbs__link">Home</a></li>
            <li class="breadcrumbs__li"><a href="./blog.html" class="breadcrumbs__link">Blog</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="blog center">
      <h1 class="blog__heading">
        Latest Post
      </h1>
      <div class="blog__content">
        <img src="../assets/blog-img.png" alt="blog-img">

        <div class="blog__info">
          <p class="blog__heading blog__title">Low Cost Latest Invented Interior <br> Designing Ideas</p>
          <p class="blog__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
            maximus.posuere
            in.Contrary to popular belief. <br><br> Lorem Ipsum is not simply random text. It has roots in a
            piece
            of
            classica.</p>
          <div class="blog__wrapper">
            <div class="blog__data">26 December,2022</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
              <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="articles center">
      <h1 class="articles__title">Articles & News</h1>
      <blogArticlesCom />
      <div class="paganation">
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#f4f0ec" fill="#f4f0ec" />
          </svg>
          <p class="paganation__numberPage">01</p>
        </div>
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <p class="paganation__numberPage">02</p>
        </div>
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <p class="paganation__numberPage">03</p>
        </div>
        <div class="paganation__wrapper">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </section>
    <footerCom />
  </div>
</template>

<script>
import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'
import blogArticlesCom from '../components/blogArticlesCom.vue'

export default {
  name: 'blogComp',
  components: {
    headerCom,
    footerCom,
    blogArticlesCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";
@import "../assets/style/breadcrumbs";

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.banner {
  margin-top: 45px;
  height: 356px;
  background: url(../assets/blog-banner.png) no-repeat center;
  padding-top: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__titleBack {
    width: 503px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    padding: 41px 78px 42px;
  }

  &__title {
    margin: 0;
    text-align: center;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
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
    background: #292f36;
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

.blog {
  margin-top: 200px;

  &__heading {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__content {
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    gap: 65px;
    align-items: center;
  }

  &__title {
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  &__text {
    width: 469px;
    margin-top: 22px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__wrapper {
    margin-top: 30px;
    display: flex;
    gap: 300px;
    align-items: center;
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
}

.articles {
  margin-top: 150px;

  &__title {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__content {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 381px);
    row-gap: 30px;
    column-gap: 28px;
  }
}

.article {
  padding: 21px;
  width: 382px;
  height: 521px;
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
    width: 290px;
    margin-top: 11px;
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
    margin-top: 20px;
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

.paganation {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;

  &__wrapper {
    position: relative;

    &:hover circle {
      cursor: pointer;
      transition: all 0.3s;
      fill: $indicatorsBackColor;
      stroke: $indicatorsBackColor;
    }
  }

  &__numberPage {
    text-align: center;
    width: 18px;
    color: $titleColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 24px */
    text-transform: capitalize;
    position: absolute;
    top: 14px;
    left: 17px;

    &:hover {
      cursor: pointer;
    }
  }
}

.footer {
  margin-top: 200px;
  margin-bottom: 116px;
}
</style>
