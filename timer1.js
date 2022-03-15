let argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  let timer = Number(argv[i]) * 1000;
  if (timer < 0 || isNaN(timer)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\007");
  }, timer);
}
