function parser(text, { babylon }) {
  return babylon(text, {}, {}, { plugins: ["lenient", "flow", "jsx"] });
}

run_spec(__dirname, [parser], {
  bracketSpacing: false,
  semi: true
});
