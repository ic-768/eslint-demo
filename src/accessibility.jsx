// jsx-a11y

const App = () => {
  <button id="test" />;

  /* bad - must have text and htmlFor to show which element it's for*/
  <label></label>;

  /* good*/
  <label htmlFor="test">click</label>;

  /* bad - must have alt */
  <img src="profile.jpg" />;

  /* good*/
  <img alt="" src="profile.jpg" />;
};

const InteractiveElement = () => {
  /* bad -> It's not a native interactive element. So it must have a tabIndex so keyboard can focus it
    and a keyboard event handler so it can be activated */
  <div onClick={handleClick}>Click me</div>;

  /* good */
  <div
    role="button"
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") handleClick();
    }}
  >
    Click me
  </div>;
};

// linter appeasement boundary
/***********************************************/
const handleClick = () => {};
InteractiveElement;
App;
