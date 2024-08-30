<template>
  <nav class="flex flex-row gap-2.5">
    <nuxt-link
      class="font-normal text-gray-500 hover:text-green-600 rounded-xl"
      to="/object"
    >
      Сади та теплиці
    </nuxt-link>
    <nuxt-link
      class="font-normal text-gray-500 hover:text-green-600 rounded-xl"
      to="/economy"
    >
      Господарства
    </nuxt-link>
    <nuxt-link
      class="font-normal text-gray-500 hover:text-green-600 rounded-xl"
      to="/zemland"
    >
      Земельні ділянки
    </nuxt-link>
    <nuxt-link
      class="font-normal text-gray-500 hover:text-green-600 rounded-xl"
      to="/map"
    >
      Карта
    </nuxt-link>
    <nuxt-link
      class="font-normal text-gray-500 hover:text-green-600 rounded-xl"
      to="https://public.tableau.com/app/profile/fsuw/viz/_16687835152330/Dashboard1"
    >
      Статистика
    </nuxt-link>

    <span
      class="flex disabled-custom items-center gap-x-2 font-normal text-gray-300 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6"
    >
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        ></path>
      </svg>
      Увійти
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: "",
      isCartModalOpen: false,
      passportDropdown: [
        {
          title: "Паспорти регіональних (місцевих) систем координат УСК-2000",
          link: "/passport/pasporti-regionalnih-miscevih-sistem-koordinat-usk-2000",
        },
        {
          title:
            "Опис Системи координат УСК-2000 в геоінформаційній системі ArcGIS",
          link: "/passport/opis-sistemi-koordinat-usk-2000-v-geoinformacini-sistemi-arcgis",
        },
        {
          title: "Паспорти на координатні операції",
          link: "/passport/pasporti-na-koordinatni-operaciii",
        },
        {
          title:
            "Паспорти Державної геодезичної референцної системи координат УСК-2000",
          link: "/passport/pasporti-derjavnoii-geodezichnoii-referencnoii-sistemi-koordinat-usk-2000",
        },
        {
          title:
            "Вимоги до розграфлення листів в регіональних системах координат",
          link: "/passport/vimogi-do-rozgraflennja-listiv-v-regionalnih-sistemah-koordinat",
        },
      ],
      registerDropdown: [
        {
          title: "Довідник пунктів",
          link: "/register#/?=page=1",
        },
        {
          title: "Пошук за адміністративною одиницею",
          link: "/atu/",
        },
        {
          title: "Історія змін",
          link: "/register-history#/?=page=1",
        },
        {
          title: "Галерея пунктів",
          link: "/register-gallery#/?=page=1",
        },
        {
          title: "Обстеження пунктів",
          link: "/register-survey/",
        },
      ],
    };
  },
  methods: {
    toggleClickDropdown(name) {
      if (this.activeDropdown) {
        this.activeDropdown = "";
      } else {
        this.activeDropdown = name;
      }
    },
    toggleDropdown(name) {
      if (window.innerWidth <= 767) return;
      this.activeDropdown = name || "";
    },
    openCartModal() {
      this.isCartModalOpen = true;
    },
    closeCartModal() {
      this.isCartModalOpen = false;
    },
  },
};
</script>
