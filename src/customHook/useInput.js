import { useState } from "react";

export function useInput (initVal,submitAction){
    const [value, setValue] = useState(initVal);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
    const handleSubmit = () => {
        submitAction(value)
        setValue("");
    }
    return [value, handleChange, handleSubmit]
}