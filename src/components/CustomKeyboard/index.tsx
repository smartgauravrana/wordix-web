import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

type Props = {
  onChange: any;
};

export default function CustomKeyboard({ onChange }: Props) {
  return (
    <div>
      <Keyboard
        onChange={onChange}
        theme="hg-theme-default hg-theme-ios"
        layout={{
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "{enter} z x c v b n m {bksp}",
          ],
        }}
        inputName="answer"
      />
    </div>
  );
}

// let keyboard = new Keyboard({
//   onChange: (input) => onChange(input),
//   onKeyPress: (button) => onKeyPress(button),
//   theme: "hg-theme-default hg-theme-ios",
//   layout: {
//     default: [
//       "q w e r t y u i o p",
//       "a s d f g h j k l",
//       "{enter} z x c v b n m {bksp}",
//     ],
//   },
//   display: {
//     "{alt}": ".?123",
//     "{smileys}": "\uD83D\uDE03",
//     "{shift}": "⇧",
//     "{shiftactivated}": "⇧",
//     "{enter}": "return",
//     "{bksp}": "⌫",
//     "{altright}": ".?123",
//     "{downkeyboard}": "🞃",
//     "{space}": " ",
//     "{default}": "ABC",
//     "{back}": "⇦",
//   },
// });

// /**
//  * Update simple-keyboard when input is changed directly
//  */
// document.querySelector(".input").addEventListener("input", (event) => {
//   keyboard.setInput(event.target.value);
// });

// console.log(keyboard);

// function onChange(input) {
//   document.querySelector(".input").value = input;
//   console.log("Input changed", input);
// }

// function onKeyPress(button) {
//   console.log("Button pressed", button);

//   /**
//    * Handle toggles
//    */
//   if (button.includes("{") && button.includes("}")) {
//     handleLayoutChange(button);
//   }
// }

// function handleLayoutChange(button) {
//   let currentLayout = keyboard.options.layoutName;
//   let layoutName;

//   switch (button) {
//     case "{shift}":
//     case "{shiftactivated}":
//     case "{default}":
//       layoutName = currentLayout === "default" ? "shift" : "default";
//       break;

//     case "{alt}":
//     case "{altright}":
//       layoutName = currentLayout === "alt" ? "default" : "alt";
//       break;

//     case "{smileys}":
//       layoutName = currentLayout === "smileys" ? "default" : "smileys";
//       break;

//     default:
//       break;
//   }

//   if (layoutName) {
//     keyboard.setOptions({
//       layoutName: layoutName,
//     });
//   }
// }
