import { defineComponent, PropType } from "vue";
import { IItem } from "@/types";

export default defineComponent({
  name: "item",
  props: {
    item: {
      type: Object as PropType<IItem>,
      required: true,
    },
    editModeId: {
      type: String as PropType<string | null>,
    },
  },
  data() {
    return { editText: "" };
  },
  computed: {
    isEditMode(): boolean {
      return this.editModeId === this.item.id;
    },
  },
  emits: ["remove", "setEditModeId", "save"],
  methods: {
    deleteItem(): void {
      this.$emit("remove", this.item.id);
    },
    cancel(): void {
      this.$emit("setEditModeId", null);
    },
    setEditMode(): void {
      this.editText = this.item.text;
      this.$emit("setEditModeId", this.item.id);
    },
    save() {
      this.$emit("save", { ...this.item, text: this.editText });
    },
  },
});
