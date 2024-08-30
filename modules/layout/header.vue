<template>
  <header
    class="flex flex-wrap w-full bg-white border-b border-gray-200 text-sm sm:justify-start sm:flex-nowrap"
  >
    <div
      class="relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex gap-x-2">
          <img
            class="max-w-[11rem]"
            width="300"
            height="200"
            src="/public/images/minagro.svg"
            alt="minagro"
          />

          <AppLogo />
        </div>
        <div>
          <AppNavbar class="hidden md:flex items-center justify-center" />

          <div class="block md:hidden">
            <button
              type="button"
              class="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
              @click="toggleMobileMenu"
            >
              <svg
                v-if="!visibilityMobileMenu"
                class="w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                v-else
                class="w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <span class="sr-only">Логотип застосунку</span>
            </button>
          </div>
        </div>
      </div>
      <AppNavbar
        v-if="visibilityMobileMenu"
        class="md:hidden absolute bg-white h-screen overflow-y-auto flex flex-col top-[58px] left-0 sm:top-[58px] w-screen p-5"
      />
    </div>
  </header>
</template>

<script>
import AppNavbar from "./app-navbar.vue";
import AppLogo from "./app-logo.vue";

export default {
  components: {
    AppNavbar,
    AppLogo,
  },
  data() {
    return {
      visibilityMobileMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.visibilityMobileMenu = !this.visibilityMobileMenu;
    },
  },
};
</script>
