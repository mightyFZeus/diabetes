import React from "react";

const DataInput = ({ value, text, placeholder, onChange }) => {
	return (
		<div className="w-full my-2">
			<div className="flex justify-between font-bold">
				<p>{text}</p>
				<input
					value={value}
					placeholder={placeholder}
                    onChange={onChange}
                    className='outline-none '
				/>
			</div>
		</div>
	);
};

export default DataInput;
