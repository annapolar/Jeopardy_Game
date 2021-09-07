<template>
  <div class="category">
    <div class="name">{{ name }}</div>
    <ul class="cards">
      <li v-for="(item, index) in items" :key="index">
        <div
          class="card-inner"
          @click="openQuestion(item)"
          :class="{ hidden: item.flag }"
        >
          <div class="card-front">{{ item.value }}</div>
          <div class="card-back">{{ item.value }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    name: { type: String, default: "" },
    items: { type: Array, default: () => [] },
  },
  methods: {
    openQuestion(item) {
      this.$emit("openQuestion", item);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_var.scss";
.category {
  @include size(100%);
  @include gridRows(auto 1fr);
  .name {
    @include size(100%, 100px);
    @include fontStyle(35px, 400, 1);
    text-transform: uppercase;
    background-color: $primary;
    color: $white;
    margin-bottom: 10px;
    @include flexCenter;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
  }
  .cards {
    @include size(100%);
    @include gridRows(repeat(5, 1fr), 10px);
    li {
      transform-style: preserve-3d;
      perspective: 1000px;
      transition: 0.5s all ease;
      &:hover .card-inner {
        transform: rotateX(180deg);
      }
      .card-inner {
        @include size(100%);
        position: relative;
        transition: transform 0.8s;
        transform-style: preserve-3d;

        &.hidden {
          pointer-events: none;
          transform: unset;
          .card-front,
          .card-back {
            color: transparent;
          }
        }
        .card-front,
        .card-back {
          @include size(100%);
          position: absolute;
          backface-visibility: hidden;
          @include fontStyle(70px, 400, 1);
          cursor: pointer;
          @include flexCenter;
          border-radius: 6px;
        }
        .card-front {
          background-color: $primary;
          color: $secondary;
        }
        .card-back {
          background-color: $secondary;
          transform: rotateX(180deg);
          color: $dark;
        }
      }
    }
  }
}
</style>
