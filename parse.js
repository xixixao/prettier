// Error.stackTraceLimit = 100;
console.log(
  require(".").format(
    `
{
  name: 'lenientjs'
  main: 'src/index.js'
}

    `,
    {
      bracketSpacing: false,
      lenient: false,
      semi: true,
      parser(text) {
        return require("babylon-lenient").parseExpression(text, {
          plugins: [
            "lenient",
            "doExpressions",
            "jsx",
            "flow",
            "classProperties",
            "optionalChaining"
          ],
          sourceType: "module"
        });
      }
    }
  )
);
