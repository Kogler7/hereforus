import { reactive } from 'vue';
import Vector from "../../utils/vector.js";
import straintIn from "../../utils/straint.js"

export default class DataSet {
  constructor(loc, ori, dir, spd = 3) {
    this.locate = loc;
    this.origin = ori;
    this.direct = dir.deg();
    this.rotate = 0;
    this.speedFactor = 60 / spd;
    this.rotating = false;

    this.velocity = new Vector(0, 0);

    this.style = reactive({
      top: "0px",
      left: "0px",
      transform: "rotate(0deg)",
      transformOrigin: this.origin.x + "px " + this.origin.y + "px",
    });
  }

  headTo(target) {
    let center = this.locate.plus(this.origin);
    let distant = target.minus(center);

    this.velocity = distant.divide(this.speedFactor);
    this.locate = this.locate.plus(this.velocity);
    this.style.top = this.locate.y + "px";
    this.style.left = this.locate.x + "px";

    async function sleep(time) {
      return new Promise(res => setTimeout(res, time))
    }

    let div = 0;
    const factor = 120;

    if (!this.rotating) {
      this.rotate = straintIn(this.rotate, 0, 360);
      if (this.rotate > 180) {
        div = (360 - this.rotate) / factor;
      } else {
        div = -this.rotate / factor;
      }
    }

    async function startRotate(obj) {
      for (; obj.rotate < 360 && obj.rotate > 0; obj.rotate += div) {
        obj.style.transform = `rotate(${obj.rotate}deg)`;
        await sleep(20);
      }
      obj.rotating = false;
    }

    if (distant.len() > 20) {
      this.rotate = this.velocity.deg() - this.direct;
      this.style.transform = `rotate(${this.rotate}deg)`;
    }
    else if (!this.rotating) {
      this.rotating = true;
      startRotate(this);
    }
  }
}