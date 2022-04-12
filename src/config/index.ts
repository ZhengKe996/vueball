import { Bodies, Composites } from "matter-js";
const HEIGHT = 600;

const stack = Composites.stack(1100, 270, 4, 4, 0, 0, (x: number, y: number) => {
  return Bodies.polygon(x, y, 8, 30);
});

// 怪物堆
const woodOptions = { mass: 2, isStatic: false, restitution: 0, friction: 0.4 };
const rockOptions = { mass: 4, isStatic: false, restitution: 0, friction: 0.5 };
const ironOptions = { mass: 6, isStatic: false, restitution: 0, friction: 0.2 };
const stacks: any[] = [];
const x = window.innerWidth * 0.9;
// 石头1
stacks[0] = Bodies.rectangle(x - 450, HEIGHT - 42, 30, 70, rockOptions);
stacks[1] = Bodies.rectangle(x - 485, HEIGHT - 88, 80, 20, rockOptions);
stacks[2] = Bodies.rectangle(x - 520, HEIGHT - 42, 30, 70, rockOptions);
// 石头2
stacks[3] = Bodies.rectangle(x - 620, HEIGHT - 58, 28, 100, rockOptions);
stacks[4] = Bodies.rectangle(x - 650, HEIGHT - 119, 80, 20, rockOptions);
stacks[5] = Bodies.rectangle(x - 680, HEIGHT - 58, 28, 100, rockOptions);
// 石头3
stacks[6] = Bodies.rectangle(x - 780, HEIGHT - 82, 20, 150, rockOptions);
stacks[7] = Bodies.rectangle(x - 800, HEIGHT - 82, 20, 150, rockOptions);
stacks[8] = Bodies.rectangle(x - 850, HEIGHT - 168, 150, 20, rockOptions);
stacks[9] = Bodies.rectangle(x - 900, HEIGHT - 82, 20, 150, rockOptions);
stacks[10] = Bodies.rectangle(x - 920, HEIGHT - 82, 20, 150, rockOptions);
// 木头1
stacks[11] = Bodies.rectangle(x - 570, HEIGHT - 28, 20, 40, woodOptions);
stacks[12] = Bodies.rectangle(x - 570, HEIGHT - 58, 60, 20, woodOptions);
// 木头2
stacks[13] = Bodies.rectangle(x - 730, HEIGHT - 28, 20, 40, woodOptions);
stacks[14] = Bodies.rectangle(x - 730, HEIGHT - 58, 60, 20, woodOptions);
// 木头3
stacks[15] = Bodies.rectangle(x - 900, HEIGHT - 194, 30, 30, woodOptions);
stacks[16] = Bodies.rectangle(x - 840, HEIGHT - 220, 120, 10, woodOptions);
// 铁块1
stacks[17] = Bodies.rectangle(x - 485, HEIGHT - 138, 30, 80, ironOptions);
stacks[18] = Bodies.rectangle(x - 485, HEIGHT - 194, 30, 30, ironOptions);
// 铁块2
stacks[19] = Bodies.rectangle(x - 650, HEIGHT - 170, 30, 80, ironOptions);
stacks[20] = Bodies.rectangle(x - 570, HEIGHT - 220, 220, 20, ironOptions);
// 猪头1
stacks[21] = Bodies.circle(x - 570, 358, 20, ironOptions);
// 猪头2
stacks[22] = Bodies.circle(x - 730, 362, 16, ironOptions);
// 猪头3
stacks[23] = Bodies.circle(x - 570, 196, 20, ironOptions);

export { stack, stacks };
