import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebSite</title>
        <meta charset="UTF-8" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div class="h-16 w-full border-b flex border-b-[#dedede] fixed z-50">
          <div class="flex w-18 h-full border-r border-[#dedede] grid place-items-center bg-gradient-to-t from-[#f7c393] to-[#f5cba5]">
            <a href="#">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                width="35px"
                height="20px"
              >
                <g>
                  <path d="M28.4,113.8h455.1c15.7,0,28.4-12.7,28.4-28.4c0-15.7-12.7-28.4-28.4-28.4H28.4C12.7,56.9,0,69.6,0,85.3C0,101,12.7,113.8,28.4,113.8z M28.4,284.4h455.1c15.7,0,28.4-12.7,28.4-28.4c0-15.7-12.7-28.4-28.4-28.4H28.4C12.7,227.6,0,240.3,0,256C0,271.7,12.7,284.4,28.4,284.4z M284.4,455.1h199.1c15.7,0,28.4-12.7,28.4-28.4c0-15.7-12.7-28.4-28.4-28.4H284.4c-15.7,0-28.4,12.7-28.4,28.4C256,442.4,268.7,455.1,284.4,455.1z" />
                </g>
              </svg>
            </a>
          </div>
          <div class="w-left-p border-r border-gray-100 flex bg-gradient-to-t from-[#f5c8a1] to-[#f5c89f]">
            <h3 class="text-black font-bold p-4 pl-9 pr-0 text-xl font-serif">
              WEB
            </h3>
            <h3 class="text-white font-bold p-4 pl-0 text-xl font-serif">
              SITE
            </h3>
          </div>
          <div class="flex border-r border-gray-100 w-5/12 bg-[#f8f8f8]">
            <ul class="p-4 pl-9">
              <li class="inline-block pr-7 font-serif text-sm hover:text-orange-300">
                <a href="#">Home</a>
              </li>
              <li class="inline-block pr-7 font-serif text-sm hover:text-orange-300">
                <a href="#">About As</a>
              </li>
              <li class="inline-block pr-7 font-serif text-sm hover:text-orange-300">
                <a href="#">Services</a>
              </li>
              <li class="inline-block pr-7 font-serif text-sm hover:text-orange-300">
                <a href="#">Products</a>
              </li>
              <li class="inline-block pr-7 font-serif text-sm hover:text-orange-300">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="flex border-r w-18 grid place-items-center border-r border-l border-gray-200 bg-[#f8f8f8]">
            <a href="#">
              <svg
                width="25px"
                height="25px"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Search</title>
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </a>
          </div>
          <div class="flex w-right-p border-r border-gray-100 grid place-items-center bg-[#f8f8f8]">
            <a href="#">
              <svg
                class="float-left"
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <h3 class="text-black pl-2 text-sm font-extra-light float-right">
                MY ACCOUNT
              </h3>
            </a>
          </div>
          <div class="flex grid place-items-center w-basket pl-5 border-l bg-[#f8f8f8]">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </a>
          </div>
        </div>
        <main class="flex-auto flex w-full">
          <div class="ml-52 mt-16 bg-transparent w-6/12 absolute">
            <img src="metod2.png" alt="foto" />
          </div>

          <aside class="w-left-f border-r bg-gradient-to-t from-[#f6af77] to-[#f4cda6]">
            <div class="pl-6 pt-72">
              <a href="#">
                <svg
                  class="hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
                </svg>
              </a>
            </div>
            <a href="#">
            <h2 class="mt-60 pl-56 hover:text-white font-serif">Next item </h2>
            </a>
          </aside>

          <section class="py-56 flex-auto bg-[#f8f8f8]">
            <div class="ml-96 w-96">
              <h1 class="text-2xl font-semibold">Kitchen Solid Wood</h1>
              <p class="text-sm font-thin pt-2 pb-5">
                Lorem ipsum dolor sit amet, consectetur elit adipisicing . Amet
                corporis cum delectus illum itaque modi omnis quaerat temporibus
                totam!
              </p>
              <span class="text-sm font-semibold">Color:</span>
              <button class="h-6 w-6 bg-[#573c39] rounded-full border-white border-4 p-2 pb-1"></button>
              <button class="h-6 w-6 bg-[#e5a2a4] rounded-full border-white border-4 p-2 pb-1"></button>
              <div class="flex items-center w-full pt-5">
                <p class="font-bold pr-12">$ 429.99</p>
                <button class="bg-[#f68d38] h-8 w-32 text-white text-xs font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
        </main>
        <div class="flex bg-[#fefefe] w-full h-72">
          <div class="h-28 w-32 pt-44 pl-56 pr-56">
            <h2 class="text-3xl font-semibold">Trending Kitchen</h2>
            <div class="flex w-32">
              <button class="bg-[#fffefc] border-gray-200 rounded-full border-white border-4 mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                </svg>
              </button>
              <button class="bg-[#fffefc] border-gray-200 rounded-full border-white border-4 mt-6 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="bg-[#ffffff] border-gray-200 border w-full h-80 mt-16 flex overflow-x-auto overflow-y-hidden">
            <div class="h-full w-[270px] h-full border-r border-gray-200 flex-0">
              <img
                src="knoxhult2.png"
                alt="konxhult"
                class="w-[200px] mx-auto mt-2"
              />
              <h3 class="text-left font-semibold text-sm mx-5">
                Kitchen Solid Wood
              </h3>
              <p class="font-thin text-gray-800 text-xs mx-5">
                Width: 220.0 cm, System Depth: 61.0 cm. Height: 220.0 cm
              </p>
              <p class="mx-5 text-sm mt-2 font-bold pr-12">$ 429.99</p>
              <button class="bg-[#f68d38] h-8 w-32 text-white text-xs font-extralight mt-4 ml-32 z-30 absolute">
                Add To Cart
              </button>
            </div>
            <div class="h-full w-[270px] border-r border-gray-200 flex-0">
              <img
                src="knoxhult.png"
                alt="konxhult"
                class="w-[200px] mx-auto mt-2"
              />
              <h3 class="text-left font-semibold text-sm mx-5">
                Kitchen Solid Wood
              </h3>
              <p class="font-thin text-gray-800 text-xs mx-5">
                Width: 220.0 cm, System Depth: 61.0 cm. Height: 220.0 cm
              </p>
              <p class="mx-5 text-sm mt-2 font-bold pr-12">$ 429.99</p>
              <button class="bg-[#f68d38] h-10 w-10 text-white text-xs mt-2 ml-52 z-20 absolute bg-orange-400 rounded-full border-white border-4 text-center font-semibold">
                +
              </button>
            </div>
            <div class="h-full w-[270px] border-r border-gray-200 flex-0">
              <img
                src="metod2.png"
                alt="konxhult"
                class="w-[200px] mx-auto mt-2"
              />
              <h3 class="text-left font-semibold text-sm mx-5">
                Kitchen Solid Wood
              </h3>
              <p class="font-thin text-gray-800 text-xs mx-5">
                Width: 220.0 cm, System Depth: 61.0 cm. Height: 220.0 cm
              </p>
              <p class="mx-5 text-sm mt-2 font-bold pr-12">$ 429.99</p>
              <button class="bg-[#f68d38] h-10 w-10 text-white text-xs mt-2 ml-52 z-20 absolute bg-orange-400 rounded-full border-white border-4 text-center font-semibold">
                +
              </button>
            </div>
            <div class="h-full w-3/12 border-r border-gray-200 flex-0">
              <img
                src="metod3.png"
                alt="konxhult"
                class="w-[200px] mx-auto mt-2"
              />
              <h3 class="text-left font-semibold text-sm mx-5">
                Kitchen Solid Wood
              </h3>
              <p class="font-thin text-gray-800 text-xs mx-5">
                Width: 220.0 cm, System Depth: 61.0 cm. Height: 220.0 cm
              </p>
              <p class="mx-5 text-sm mt-2 font-bold pr-12">$ 429.99</p>
              <button class="bg-[#f68d38] h-10 w-10 text-white text-xs mt-2 ml-40 z-20 absolute bg-orange-400 rounded-full border-white border-4 text-center font-semibold">
                +
              </button>
            </div>
          </div>
        </div>
        <main class="flex-auto flex -z-10 h-[460px]">
          <span class="ml-52 mt-16 bg-transparent w-6/12 absolute flex">
            <img
              src="../img/maruti.jpeg"
              alt="foto"
              class="w-[480px] h-[340px] mt-44 ml-4"
            />
            <p class="px-4 py-2 bg-[#f68d38] h-8 w-32 text-white text-[0.6rem] font-medium -rotate-90 -ml-12 mt-[340px]">
              ALWAYS THE BEST
            </p>
          </span>

          <aside class="w-left-f border-r bg-gradient-to-t from-[#f6af77] to-[#f4cda6]"></aside>
          <section class="py-56 flex-auto bg-gradient-to-t from-[#ffffff] to-[#fbfbfb]">
            <div class="ml-96 w-96 mt-10">
              <p class="text-lg font-semibold">What we offer</p>
              <p class="text-xs font-thin leading-5 pt-2 pb-5">
                Lorem ipsum dolor sit amet, consectetur elit adipisicing . Amet
                corporis cum delectus illum itaque modi omnis quaerat temporibus
                totam!
              </p>
              <p class="text-xs flex place-items-center mb-7">
                <svg
                  class="fill-amber-500 rounded-full border-white border-4 bg-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M9.68,13.69L12,11.93l2.31,1.76l-0.88-2.85L15.75,9h-2.84L12,6.19L11.09,9H8.25l2.31,1.84L9.68,13.69z M20,10 c0-4.42-3.58-8-8-8s-8,3.58-8,8c0,2.03,0.76,3.87,2,5.28V23l6-2l6,2v-7.72C19.24,13.87,20,12.03,20,10z M12,4c3.31,0,6,2.69,6,6 s-2.69,6-6,6s-6-2.69-6-6S8.69,4,12,4z M12,19l-4,1.02v-3.1C9.18,17.6,10.54,18,12,18s2.82-0.4,4-1.08v3.1L12,19z" />
                </svg>
                Detalled design
                <svg
                  class="fill-amber-500 rounded-full border-white border-4 bg-white mr-3 ml-10"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z" />
                  </g>
                </svg>
                Pexble meeting schedules
              </p>
              <p class="text-xs flex place-items-center mb-7">
                <svg
                  class="fill-amber-500 rounded-full border-white border-4 bg-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                On time delivery
                <svg
                  class="fill-amber-500 rounded-full border-white border-4 bg-white mr-3 ml-10"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z M21.83,13.07c1.56-1.56,1.56-4.09,0-5.66l-4.24-4.24c-1.56-1.56-4.09-1.56-5.66,0 l-0.28,0.28l-0.28-0.28c-1.56-1.56-4.09-1.56-5.66,0L2.17,6.71c-1.42,1.42-1.55,3.63-0.4,5.19l1.45-1.45 C2.83,9.7,2.96,8.75,3.59,8.12l3.54-3.54c0.78-0.78,2.05-0.78,2.83,0l3.56,3.56c0.18,0.18,0.21,0.5,0,0.71 c-0.21,0.21-0.53,0.18-0.71,0L9.52,5.57l-5.8,5.79c-0.98,0.97-0.98,2.56,0,3.54c0.39,0.39,0.89,0.63,1.42,0.7 c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7 c0.07,0.54,0.31,1.03,0.7,1.42c0.47,0.47,1.1,0.73,1.77,0.73c0.67,0,1.3-0.26,1.77-0.73L21.83,13.07z" />
                  </g>
                </svg>
                Agreement
              </p>
              <button class="bg-[#f68d38] h-8 w-32 text-white text-xs font-medium">
                Read More
              </button>
            </div>
          </section>
        </main>
        <div class="flex bg-[#fefefe] w-full h-[425px] mt-20 bg-[#ffffff] z-10">
          <div class="ml-[228px] w-96 mt-40">
            <h1 class="text-xl font-semibold">Avanity Lexington V60</h1>
            <p class="text-xs font-thin pt-2 pb-5">
              Lorem ipsum dolor sit amet, consectetur elit adipisicing . Amet
              corporis cum delectus illum itaque modi omnis quaerat temporibus
              totam!
            </p>
            <span class="text-sm font-semibold">Color:</span>
            <button class="h-6 w-6 bg-[#573c39] rounded-full border-white border-4 p-2 pb-1"></button>
            <button class="h-6 w-6 bg-[#e5a2a4] rounded-full border-white border-4 p-2 pb-1"></button>
            <div class="flex items-center w-full pt-5">
              <p class="font-bold text-red-500 pr-6 line-through">$ 1,122,00</p>
              <p class="font-bold pr-16 text-xl">$ 980.00</p>
              <button class="bg-[#f68d38] h-8 w-32 text-white text-xs font-medium">
                Add To Cart
              </button>
            </div>
          </div>
          <div class="ml-28 flex">
            <img
              class="w-[500px] h-[500px] z-0"
              src="AVA.png "
              alt="ava"
            />
            <p class="h-32 w-32 mt-18 -ml-18 bg-orange-400 rounded-full border-white border-4 text-center pt-1.5 text-white text-sm font-semibold">
              % <br />
              On Sale
            </p>
          </div>
        </div>
        <main class="flex-auto flex -z-10 h-[460px] overflow-x-hidden">
          <span class="pl-[230px] mt-36 bg-transparent w-full absolute flex">
            <div class="h-[270px] w-[310px] bg-white border border-r-2 mr-4 border-t-2">
              <img
                class="w-[230px] h-[230px] mx-auto mb-5"
                src="Brend.png"
                alt="brend"
              />
              <h4 class="text-center text-base font-semibold -mt-5">
                Bath Cabinets
              </h4>
            </div>
            <div class="h-[270px] w-[310px] bg-white border border-r-2 mr-4 border-t-2">
              <img
                class="w-[200px] h-[200px] mx-auto mb-5 mt-7"
                src="harware.png"
                alt="brend"
              />
              <h4 class="text-center text-base font-semibold -mt-5">
                Bathroom Accessories
              </h4>
            </div>
            <div class="h-[270px] w-[310px] bg-white border border-r-2 border-t-2">
              <img
                class="w-[180px] h-[180px] mx-auto mb-5 mt-9"
                src="cable.png"
                alt="brend"
              />
              <h4 class="text-center text-base font-semibold -mt-3">
                Cabinet Hardware
              </h4>
            </div>
          </span>
          <aside class="w-left-f border-r bg-gradient-to-t from-[#f6af77] to-[#f4cda6] flex justify-center">
            <h2 class="text-lg font-semibold ml-[220px] mt-6 mt-24">
              Other Product
            </h2>
            <div class="w-32 ml-6 mt-[70px]">
              <button class="bg-[#fffefc] border-gray-200 rounded-full border-white border-4 mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                </svg>
              </button>
              <button class="bg-[#fffefc] border-gray-200 rounded-full border-white border-4 mt-6 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </button>
            </div>
          </aside>
          <section class="py-56 flex-auto bg-gradient-to-t from-[#fefefe] to-[#ffffff]"></section>
        </main>
        <div class="flex bg-[#fefefe] w-full h-[350px] bg-[#fcfcfc] z-10">
          <div class="ml-[228px] mr-32 mt-20">
            <p class="pb-5 font-bold">Navigate</p>
            <ul class="leading-7">
              <li>
                <a href="#" class="font-thin text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div class="mr-32 mt-20">
            <p class="pb-5 font-bold">Categories</p>
            <ul class="leading-7">
              <li>
                <a href="#" class="font-thin text-sm">
                  Bath Cabinets
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Bath Accessories
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Cabinet Doors
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Cabinet Drawers
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Cabinet Hardware
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Cabinet Parts
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Cabinet
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-20">
            <p class="pb-5 font-bold">Collection</p>
            <ul class="leading-7">
              <li>
                <a href="#" class="font-thin text-sm">
                  Capitals
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Collumna
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Wine Storage
                </a>
              </li>
              <li>
                <a href="#" class="font-thin text-sm">
                  Bath Cabinets
                </a>
              </li>
            </ul>
          </div>
          <div class="w-56 h-32 ml-52 mt-20">
            <p class="text-right pb-5 font-bold">
              408 US Highway 46 <br />
              Dover. NJ 07801
            </p>
            <p class="text-right font-thin text-sm leading-6">
              hello@websitedepot.co <br />
              +973-794-6310
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
