# react-input-progress

A React component to create a round input progress as you type in an input

> Inspired by twitter's input progress

- 🪶 1kb compressed
- 💅 Control the size and color
- 📝 Works in any text input

**Future features**

- [] Animation when reached max input limit
- [] Other formats besides rounded progress bar
- [] Ideas are welcome...

## Installation

```sh
yarn add react-input-progress

# or

npm install --save react-input-progress
```

## Usage

```js
import { useState } from "react";
import InputProgress from "react-input-progress";

function Form() {
  const [inputValue, setInputValue] = useState();
  const maxLength = 20;

  return (
    <form>
      <input type="text" value={inputValue} maxLength={maxLength}>
      <InputProgress input={inputValue} maxLength={maxLength} />
    </form>
  )
}
```

`react-input-progress` **works better for controlled inputs.**

## Props

**required**

- input (_string_): the current input value.

- maxLength (_number_): the maximum length of the input.

**optional**

- size: define the input-progress size. Defaults to `sm`.

It can receive the following values:

```js
size: "x-sm" | "sm" | "md" | "lg" | "x-lg";
```

- progressColor (_string_): defines the dynamic progress color (increases on each input, until completion). Defaults to `#5b77e6`.

- circleColor (_string_): defines the inner static circle color. Defaults to `#e5e5e5`.

- strokeWidth (_number_): defines the stroke width. Defaults to `4`.

## Contribute

PRs and discussions to improve this simple component are more than welcome =)
