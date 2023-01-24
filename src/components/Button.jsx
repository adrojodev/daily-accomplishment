import { startTransition } from "react";

export default function Button(props) {
  function start() {
    console.log("start");
  }

  function add() {
    console.log("Add");
  }

  function social() {}

  return (
    <button
      onClick={() => {
        props.handleClick == "test"
          ? console.log("hello")
          : props.handleClick == "startTimer"
          ? start()
          : props.handleClick == "addTime"
          ? add()
          : props.handleClick == "social"
          ? social()
          : props.handleClick == "showModal"
          ? showModal()
          : console.log("This function does not exist");
      }}
      className={
        props.text
          ? `bg-transparent hover:underline ${props.className}`
          : `${props.className} px-5 py-2 rounded-full shadow-md font-bold hover:bg-opacity-90 hover:shadow-lg hover:scale-105 active:scale-95 active:shadow-sm transition-all`
      }
    >
      {props.children}
    </button>
  );
}
