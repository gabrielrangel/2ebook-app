import { ChangeEvent, useCallback } from "react";
import { useConverterContext } from "Services/Context/converter/converterContext";
import { Action } from "Services/Context/converter/types";

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
