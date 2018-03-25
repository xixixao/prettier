function parser(text, { babylon }) {
  const plugins = ["lenient", "lenientCompat", "flow", "jsx"];
  return babylon(text, {}, {}, { plugins });
}

run_spec(__dirname, [parser], {
  bracketSpacing: false,
  semi: true
});
