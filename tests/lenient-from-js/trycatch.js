try {
} catch (x) {
} finally {
}

try {
  f();
} catch (e) {
  g(e);
}

try {
  f();
} catch (e) {
  g(e);
} finally {
  bam()
}
