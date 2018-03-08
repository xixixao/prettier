function parser(text, { babylon }) {
  const x = babylon(
    text,
    {},
    {},
    {
      plugins: ["lenient", "flow", "jsx"]
    }
  );
  // console.log(JSON.stringify(x, null, 2));
  return x;
}

run_spec(__dirname, [parser], {
  bracketSpacing: false,
  semi: true
});
