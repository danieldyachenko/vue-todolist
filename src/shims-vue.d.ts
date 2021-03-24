/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import Vue from 'vue'

declare module 'vue/types/vue' {
  // 3. Объявите расширение для Vue
  interface Vue {
    $style: any
  }
}
