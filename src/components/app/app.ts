import { defineComponent } from "vue";
import { v4 as uuid } from "uuid";
import Item from "@/components/app/item/item.vue";
import { Items } from "@/types";
import storage from "@/utils/storage";

export default defineComponent({
  name: "app",
  components: { Item },
  data() {
    return {
      value: "",
      items: [] as Items,
    };
  },
  created() {
    this.$data.items = storage.getData();
  },
  watch: {
    items: {
      handler(items: Items) {
        storage.setData(items);
      },
      deep: true,
    },
  },
  methods: {
    add() {
      if (this.value.length) {
        this.items.push({
          id: uuid(),
          text: this.value,
        });
        this.value = "";
      }
    },
    remove(id: string) {
      const index = this.items.findIndex((item) => id === item.id);
      this.items.splice(index, 1);
    },
  },
});
