<template>
  <img src="../../assets/hearts/ht-bg.png" alt="ht-bg" :style="bigHeart" />
  <img src="../../assets/hearts/ht-sm.png" alt="ht-sm" :style="smallHeart" />
  <img src="../../assets/hearts/pt-lf.png" alt="pt-lf" :style="leftParti" />
  <img src="../../assets/hearts/pt-rt.png" alt="pt-rt" :style="rightParti" />
</template>

<script>
import Vector from "../../utils/vector.js";
import { watch } from "vue";
import getPoint from "../../hooks/useCursorLocation.js";
import DataSet from "./data_set.js";

export default {
  name: "FlyingHearts",
  setup() {
    const INIT_LOC = new Vector(0, 0);
    const ORIGIN = new Vector(20, 36);

    const tgtPoint = getPoint();
    let target = new Vector(tgtPoint.x, tgtPoint.y);
    watch(tgtPoint, (nw) => {
      target = new Vector(nw.x, nw.y);
    });

    const bigHeart = new DataSet(INIT_LOC, ORIGIN, new Vector(1, 2), 1.6);
    const smallHeart = new DataSet(INIT_LOC, ORIGIN, new Vector(-1, 2), 3);
    const leftParti = new DataSet(INIT_LOC, ORIGIN, new Vector(1, 2), 1);
    const rightParti = new DataSet(INIT_LOC, ORIGIN, new Vector(-1, 2), 1);

    function move() {
      bigHeart.headTo(target);
      smallHeart.headTo(target);
      leftParti.headTo(target);
      rightParti.headTo(target);
    }
    setInterval(move, 16);
    return {
      bigHeart: bigHeart.style,
      smallHeart: smallHeart.style,
      leftParti: leftParti.style,
      rightParti: rightParti.style,
    };
  },
};
</script>

<style>
img {
  position: absolute;
  width: 40px;
}
</style>