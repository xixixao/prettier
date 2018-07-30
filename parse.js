// Error.stackTraceLimit = 100;
console.log(
  require(".").format(
    `
(
  x
  y
) => z

    `,
    {
      bracketSpacing: false,
      lenient: false,
      semi: true,
      parser(text) {
        return require("babylon-lenient").parse(text, {
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
