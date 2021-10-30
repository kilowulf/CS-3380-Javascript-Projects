const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60
};

const entries = Object.fromEntries(maxSpeed);
console.log(entries);

const sortable1 = Object.fromEntries(
  Object.entries(maxSpeed).sort(([, a], [, b]) => a - b)
);

const sortable2 = Object.entries(maxSpeed)
  .sort(([, a], [, b]) => a - b)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortable1);

console.log(sortable2);
