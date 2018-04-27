"use strict";

const createError = require("../common/parser-create-error");

function parse(text, parsers, opts, babylonOptions) {
  // Inline the require to avoid loading all the JS if we don't use it
  const babylon = require("babylon-lenient");

  const parseMethod =
    opts && opts.parser === "json" ? "parseExpression" : "parse";

  let ast;
  try {
    ast = babylon[parseMethod](text, babylonOptions);
  } catch (originalError) {
    try {
      ast = babylon[parseMethod](
        text,
        Object.assign({}, babylonOptions, { strictMode: false })
      );
    } catch (nonStrictError) {
      if (nonStrictError.loc == null) {
        throw nonStrictError;
      }
      throw createError(
        // babel error prints (l:c) with cols that are zero indexed
        // so we need our custom error
        originalError.message.replace(/ \(.*\)/, ""),
        {
          start: {
            line: originalError.loc.line,
            column: originalError.loc.column + 1
          }
        }
      );
    }
  }
  delete ast.tokens;
  return ast;
}

module.exports = parse;
