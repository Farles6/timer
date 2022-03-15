let argv = process.argv.slice(2);
for (let nums of argv) {
  let timer = Number(nums) * 1000;
  if (timer < 0 || isNaN(timer)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\007");
  }, timer);
}
