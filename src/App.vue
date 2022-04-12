<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Engine, Render, Bodies, World, Runner, Mouse, MouseConstraint, Constraint, Events } from "matter-js";
import { stacks } from "@/config";

const Width = ref(0);
const Height = ref(0);
Height.value = window.innerHeight;
Width.value = window.innerWidth;

const engine = Engine.create();
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: Width.value,
    height: Height.value,
    wireframes: false,
  },
});
// 创建地板放置怪物
const ground = Bodies.rectangle(Width.value * 0.65, 600, 900, 10, { isStatic: true });

const mouse = Mouse.create(render.canvas);
const mouseCoonstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  // @ts-ignore
  constraint: {
    render: { visible: false },
  },
});
render.mouse = mouse;

let ball = Bodies.circle(300, 500, 20);
const sling = Constraint.create({
  pointA: { x: 300, y: 500 },
  bodyB: ball,
  stiffness: 0.05,
});

let firing = false;
Events.on(mouseCoonstraint, "enddrag", (e) => {
  if (e.body === ball) firing = true;
});

Events.on(engine, "afterUpdate", () => {
  if (firing && Math.abs(ball.position.x - 300) < 20 && Math.abs(ball.position.y - 500) < 20) {
    ball = Bodies.circle(300, 500, 20);

    World.add(engine.world, ball);
    sling.bodyB = ball;
    firing = false;
  }
});

World.add(engine.world, [...stacks, ball, sling, ground, mouseCoonstraint]);

onMounted(() => {
  Runner.run(engine);
  Render.run(render);
});
window.onresize = () => {
  return (() => {
    Width.value = window.innerWidth;
    Height.value = window.innerHeight;
  })();
};
watch([Width, Height], () => {
  location.reload();
});
</script>

<template></template>
