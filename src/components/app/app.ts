import { defineComponent } from "vue";
import { v4 as uuid } from "uuid";
import Item from "@/components/app/item/item.vue";
import storage from "@/utils/storage";
import { IItem, Items } from "@/types";

export default defineComponent({
  name: "app",
  components: { Item },
  data() {
    return {
      value: "",
      items: [] as Items,
      editModeId: null as string | null,
    };
  },
  created(): void {
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
    add(): void {
      if (this.value.length) {
        this.items.push({
          id: uuid(),
          text: this.value,
        });
        this.value = "";
      }
    },
    remove(id: string): void {
      const index = this.items.findIndex((item) => id === item.id);
      this.items.splice(index, 1);
    },
    setEditModeId(id: string): void {
      this.editModeId = id;
    },
    save({ id, text }: IItem): void {
      const index = this.items.findIndex((item) => id === item.id);
      this.items[index].text = text;
      this.editModeId = null;
    },
  },
});
