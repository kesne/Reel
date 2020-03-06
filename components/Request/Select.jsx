export default function Select({ options, currentVal, handleChange }) {
    return (
        <select value={currentVal} onChange={handleChange} required>
            {options.map((option, i) => {
                return (
                    <option
                        selected={i === 0}
                        disabled={i === 0 || options.isDisabled}
                        value={option.value}
                        key={i}
                    >
                        {option.text}
                    </option>
                );
            })}
        </select>
    );
}
