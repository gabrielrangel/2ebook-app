import { useConverterContext } from "../../context/converter/converterContext";

export default function Converter() {
  const { state, dispatch } = useConverterContext();
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "add", value: { link: "" } })}>+</button>
      <button onClick={() => dispatch({ type: "remove", value: { link: "" } })}>-</button>
    </div>
  );
}
