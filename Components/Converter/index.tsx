import { ChangeEvent, useCallback } from "react";
import { useConverterContext } from "Services/Context/Converter";
import { Action } from "Services/Reducer/Converter";

export default function Converter() {
  const { state, dispatch } = useConverterContext();

  const onInputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      dispatch({ type: "edit", value: { link: e.target.value, index } });
    },
    [dispatch]
  );

  return (
    <div>
      <>
        {state.links.map((link, i) => (
          <div key={i} className="input">
            <input value={link} onChange={(e) => onInputChangeHandler(e, i)} />
            <button onClick={() => dispatch({ type: "remove", value: { index: i } })}>-</button>
          </div>
        ))}
      </>
      <button onClick={() => dispatch({ type: "add" } as Action)}>+</button>
    </div>
  );
}
