console.log(
  require(".").format(
    // // NOTE: FIX:
    `
() =>
  {
    a: b
    d: e
  }
    `,
    //     `
    // function f()
    //   return
    //     3 + 5
    // `,

    // `
    // class X extends B
    //   other()
    //     return da
    //
    //   method()
    //     return bla
    //
    // bla = 5
    //
    // for fn of functions
    //   fn()
    // `,
    //     `
    // // Assignment:
    // let number = 42
    // opposite = true
    //
    // // Conditions:
    // if opposite
    //   number := -42
    //
    // // Functions:
    // square = x => x * x
    //
    // // Arrays:
    // list = [1, 2, 3, 4, 5]
    //
    // // Objects:
    // math = {
    //   root: Math.sqrt
    //   square: square
    //   cube: x => x * square(x)
    // }
    //
    // // Splats:
    // race = (winner, ...runners) =>
    //   print(winner, runners)
    //
    // // Existence:
    // if elvis != null
    //   alert("I knew it!")
    //
    // // Array comprehensions:
    // cubes = list.map(num => math.cube(num))
    //
    // // No semicolon needed before [
    // ['Very very very very long string', 'so that we need to wrap', 'this list of strings']
    //
    // while x
    //   a()
    //
    // for x of y
    //   x()
    //
    // for let i = 0; i < cubes.length; i++
    //   alert(i, cubes[i])
    //
    // switch x
    //   case 'a'
    //     a()
    //
    // const veryVerySeriouslyMassivelyLargelyBigComponent = (props: {some: number, id: string}) => <div>Bla<div>Hey</div></div>
    // `,
    {
      bracketSpacing: false,
      lenient: false,
      semi: true,
      parser(text) {
        return require("babylon-lenient").parse(text, {
          plugins: ["lenient", "flow", "jsx"]
        });
      }
    }
  )
);
