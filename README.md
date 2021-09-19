## useDebounceWrapper

React hook to make a function debounced.
https://www.npmjs.com/package/use-debounce-maker

### Usage

```jsx
import useDebounceMaker from "use-debounce-maker";

export default function Example() {
  //'debouncedMyFunc' is now a debounced version of function myFunc and debounced with 1000 milliseconds.
  const debouncedMyFunc = useDebounceMaker(myFunc, 1000);

  function myFunc(e) {
    console.log("Input value: " + e.target.value);
  }

  return <input onChange={debouncedMyFunc} />;
}
```
[![View on Codesandbox](https://img.shields.io/badge/Codesandbox-000000?style=for-the-badge&logo=CodeSandbox&logoColor=white)](https://codesandbox.io/s/use-debounce-maker-example-jynyf)

### Params

| Param    | Type     | Required | Default | Description                     |
| -------- | -------- | -------- | ------- | ------------------------------- |
| func     | `any`    | `true`   | `null`  | The function to be debounced    |
| duration | `number` | `false`  | `300`   | duration for the debounce delay |

https://www.npmjs.com/package/use-debounce-maker
