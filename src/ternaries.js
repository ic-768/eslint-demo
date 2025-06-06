// no-nested-ternary
// nested ternaries become unreadable very quickly. There's a native eslint rule to prevent nesting, making you use another structure.
const user = "x";

// before
const statusMessage = user.isLoggedIn ? user.isAdmin ? user.hasPremium ? "Welcome, premium admin!" : "Welcome, admin!" : "Welcome, user." : "Please log in.";

// after
let statusMessage2 = "Please log in.";

if (user.isLoggedIn) {
  if (user.isAdmin) {
    statusMessage2 = user.hasPremium
      ? "Welcome, premium admin!"
      : "Welcome, admin!";
  } else {
    statusMessage2 = "Welcome, user.";
  }
}

// linter appeasement boundary
/***********************************************/
statusMessage;
statusMessage2;
