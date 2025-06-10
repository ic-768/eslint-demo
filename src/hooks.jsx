// react-hooks
// There's a set of rules that must be followed with hooks to avoid errors and unexpected behavior.

import { useEffect, useState } from "react";

// bad -> hooks must be called within components
useEffect(() => {
  "a" + "b";
}, []);

const HookExamples = () => {
  const var1 = "a";
  const var2 = [];
  const enabled = true;

  useEffect(() => {
    var1 + var2;
  }, [var1]); // bad -> both variables must be declared here. If our code doesn't work with both variables then we're doing something wrong -> https://react.dev/learn/removing-effect-dependencies

  if (enabled) {
    const [count, setCount] = useState(0); // bad-> hooks must be called unconditionally

    count + setCount;
  }
};

/**
 * linter appeasement boundary
 ***********************************************/
HookExamples;
