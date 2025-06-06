// simple-import-sort: Can provide custom rules for sorting imports.
// E.g. : 1) React packages 2) @/features 3) outer imports 4) local imports

// before

// import React from "react";
// import test from "../../../test";
// import "./index.css";
// import {Resort} from "@/features/Resort"
// import "./date-picker.css";
// import ReactDOM from "react-dom/client";
// import {User} from "@/features/User"

// after

import React from "react";
import ReactDOM from "react-dom/client";

import { Resort } from "@/features/Resort";
import { User } from "@/features/User";

import test from "../../../test";

import "./index.css";
import "./date-picker.css";

// linter appeasement boundary
/***********************************************/
React;
ReactDOM;
User;
test;
Resort;
