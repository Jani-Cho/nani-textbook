<script setup>
import { useRouter } from "vue-router";
const router= useRouter();

let subjsct = "chinese"

const pageChange = (e, page) => {
    console.log(e)
    console.log(page)
    // router.push(`/${subject}`) 
} 
</script>

<template>
    <div class="sidebar">
        <img class="logo" src="/logo-white.png" alt="">
        <nav class="flex column">
            <a class="nav-link" href="../"><i class="fa-solid fa-house"></i> 首頁</a>
            <router-link class="nav-link" to="/chinese/textbook"><i class="fa-solid fa-book"></i>教材簡介本</router-link>
            <router-link class="nav-link" to="/chinese/pdf"><i class="fa-solid fa-file"></i>樣書PDF</router-link>
            <router-link class="nav-link" to="/chinese/video"><i class="fa-solid fa-play"></i>說明會影片</router-link>
            <router-link class="nav-link" to="/chinese/reason"><i class="fa-solid fa-thumbs-up"></i>必選理由</router-link>
            <router-link class="nav-link" to="/chinese/features"><i class="fa-solid fa-screwdriver-wrench"></i>電子書特色功能</router-link>
            <router-link class="nav-link" to="/chinese/media"><i class="fa-solid fa-photo-film"></i>精彩多媒體</router-link>
           
            <a class="nav-link" href="#"><i class="fa-solid fa-swatchbook"></i> 電子書體驗版</a>
            <a class="nav-link" href="#"><i class="fa-solid fa-puzzle-piece"></i>數位線上文宣</a>

        </nav>
    </div>

</template>

<style >

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Serif TC', serif;
  color: #0E173D;
}

@media screen and (max-width: 1260px) {
  :root{
    font-size: 90%;
  }
}
@media screen and (max-width: 900px) {
  :root{
    font-size: 85%;
  }
}
@media screen and (max-width: 768px) {
  :root{
    font-size: 80%;
  }
}
@media screen and (max-width: 560px) {
  :root{
    font-size: 75%;
  }
}
@media screen and (max-width: 450px) {
  :root{
    font-size: 60%;
  }
}

.flex{
  display: flex;
}

.grid{
  display: grid;
}
.col-2{
  grid-template-columns: repeat(2, 1fr);
}
.col-4{
  grid-template-columns: repeat(4, 1fr);
}
@media screen and (max-width: 1260px) {
  .col-4{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 960px) {
  .col-2{
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .col-4{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 560px) {
  .col-4{
    grid-template-columns: repeat(1, 1fr);
  }
}

.gap-40{
  gap: 40px;
}
.column{
  flex-direction: column;
}

.j-c{
  justify-content: center;
}

.a-c{
  align-items: center;
}

.t-c{
  text-align: center;
}
.n-logo{
  width: 100px;
  height: auto;

}

h1{
  font-size: 2.25rem;
  line-height: 52px;

}

p{
  font-size: 1.5rem;
  line-height: 2.125rem;
  /* margin-bottom: 20px; */
}

a{

  text-decoration: none;
}
img{
  width: 100%;
}

li{
  font-size: 1.25rem;
  margin-bottom: 16px;
}

/* Banner */

.banner {
  margin: 2.5rem auto;
  position: relative;
}
.b-items{
  
  width: 28.125rem;
  height: 15rem;
}

.b-item {
  position: absolute;
  margin: 0;
  width: 28.125rem;
  height: 15rem;
  display: inline-block;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  overflow: hidden;
}

.b-item.main {
  z-index: 3000;
}

.b-item.left,
.b-item.right {
  opacity: .3;
  margin-left: -300px !important;
  z-index: 1000;
  -webkit-transform: scale(.75);
  -moz-transform: scale(.75);
  transform: scale(.75);
}

.b-item.right {
  margin-left:  300px !important;
}
.b-item.back {
  /* margin-left: 2em !important; */
  opacity: .05;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  transform: scale(.5);
}

.b-btn{
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.b-btn img{
  width: 45px;
  opacity: 0.6;
}

.b-btn img:hover{
  opacity: 1;
  cursor: pointer;
}


/* Subjects Carousel */
.root {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 25rem;
  position: fixed;
  left: 0;
  width: 100vw;
  transition: 1s;
  bottom: -250px;
  z-index: 3200;
}
.root:hover{

  bottom: 0;
}

.container {
  border-radius: 16px;
  height: 100%;
  position: relative;
  width: 100%;
  cursor: grab;
}
.container:active {
  cursor: grabbing;
}

.subjects-container {
  display: flex;
  justify-content: center;
}

.subject {
  position: absolute;
  height: 100%;
  user-select: none;
}
.subject img {
  position: relative;
  pointer-events: none;
  width: 15rem;
  height: 20rem;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  object-fit: cover;
  border: 10px solid transparent;
  transition: border 0.3s ease-out;
}


/* Main Subject */
.sbjList{
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.sbjList li{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid #525252;
  word-break: keep-all;

}

.s-btn:hover{
  border: 1px solid #FF6666;
  color: #fff;
  background: #FF6666;
  cursor: pointer;
}

/* Sidebar */
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 50px;
  width: 230px;
  height: 100vh;
  background: #488A68;
  text-align: center;
}

.sidebar .logo{
  width: 180px;
  height: auto;
  margin-bottom: 40px;

}
@media screen and (max-width: 1260px) {
  .sidebar{
    left: -100%;
  }
}
.nav-link{
  display: inline-flex;
  align-items: center;
  padding: 15px;
  padding-left: 20px;
  gap: 15px;

  font-family: sans-serif;
  color: white;
}

.nav-link i{
  display: inline-flex;
  align-items: center;
  width:  25px;
  height: 25px;
  color: white;
}

.nav-link.active, 
.nav-link:hover,
.nav-link.active i, 
.nav-link:hover i{
  background: white;
  color: black;
}

/* Main */
.mainBlock{
  width: calc(100vw - 230px);
  min-height: 100vh;
  margin-left: 230px;
  padding: 100px 60px;
  background-image: url('./src/Grid.png');
  background-size: 100% auto;
  background-position: 0 0 ;
  position: relative;
}
.mainBlock .logo{
  width: 320px;
}
@media screen and (max-width: 1260px) {
  .mainBlock{
    width: 100vw;
    margin-left: 0;
    padding: 80px 40px;
  }
}
@media screen and (max-width: 768px) {
  .mainBlock{
    width: 100vw;
    margin-left: 0;
    padding: 50px 30px;
  }
}

.heading1{
  font-size: 3rem;
  line-height: 69px;
  margin-bottom: 1.25rem;
}
.heading2{
  font-size: 1.6rem;
  font-weight: 600;
}

.heading2 img{
  width: 30px;
}
.heading3{
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 29px;
}
.title{
  max-width: 900px;
  /* margin-bottom: 2rem; */
  gap: 60px;
}
.textbook{

  height: 450px;
  gap: 50px;
  margin-top: 60px;
  padding: 10px 100px 0;
  position: relative;
}

.textbook::before{
  content: "南一國文教材簡介本";
  position: absolute;
  top: 0;
  right: 150px;
  font-size: 2rem;
  font-weight: 900;
  line-height: 57px;
  text-align: center;

  background: #fff;
  color: #000000;
  border: 2px solid #000000;
  padding: 0 10px;

  transform: rotate(-4deg);

}

.textbook::after{
  content: "";
  background-image: url('./src/textbook-bg-ch.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -99;
}

.textbook-cover{
  width: 18rem;
  position: relative;
  top: -40px;
}

.content{
  font-size: 1.5rem;
  line-height: 2.5rem;
}


/* PDF */
.p-item{
  height: auto;
  text-align: center;

}
.p-item.pdf{
  min-width: 220px;
  
}
.p-item .cover{
  display: block;
  position: relative;
  margin-bottom: 20px;

}
.p-item .cover::after,
.p-item .cover::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 10px);
  
  background: #FFF1D6;
  border: 1px solid #000000;
  z-index: -99;

}
.p-item .cover::after{
  top: 10px;
  left: 10px;
  z-index: -100;
  
  background: #75BDC4;


}
.p-item.pdf img {
  width: 200px;
  border: 1px solid #000;
  position: relative;
  top: -20px;
}

.s-button{
  position: absolute;
  top: 65px;
  right: 65px;
  width: 90px;
  height: 90px;
  background: #488A68;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-weight: 900;
  font-size: 30px;
  line-height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFFFFF;

}

@media screen and (max-width: 768px) {
  .s-button{
    top: 45px;
    right: 45px;
    width: 80px;
    height: 80px;
    font-size: 24px;
  }
}
@media screen and (max-width: 560px) {
  .s-button{
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
}

/* Video */


.p-item.video{
  min-width: 465px;
}

.p-item.video img{
  width: 435px;
  position: relative;
  top: -20px;
}


/* Reason */
[class$="-item"] .heading3{
  background: #A1C2B1;
border: 1px solid #000000;
padding: 10px 40px;

}

@media screen and (max-width: 768px) {
  .r-item .heading3{
    padding:  0 10px ;
  }
}
.content{
  padding: 40px;
}

@media screen and (max-width: 768px) {
  .r-item .content{
    padding: 20px 10px ;
  }
}

/* Features & Media */
.m-item, .f-item{
  margin-bottom: 40px;
}
.m-item .content,
.f-item .content{
  background: #E9F7F0;
  border: 1px solid #000000;
  
}

.f-item img{
  max-width: 50%;
}


</style>
