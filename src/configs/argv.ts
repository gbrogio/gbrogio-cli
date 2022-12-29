export function getArgv() {
  return process.argv.filter((_, i) => i > 1);
}
