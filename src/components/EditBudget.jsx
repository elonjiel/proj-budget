import React, { useState } from 'react';

function EditBudget( props ) {

    const [value, setValue] = useState(props.budget);

	return (
		<>
			<input
				required
				type="number"
				class="form-control me-3"
				id="name"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type="button"
				class="btn btn-primary"
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
}

export default EditBudget