import React from 'react'

export const FormFields = (props) => {

    // const [formField, handleInputChange] = useForm(props.fields);


    const propKeys = Object.keys(props.fields);

    return (
        <div>
            {propKeys.map((field, index) => {
                let fieldName = field.toLowerCase();
                return (
                    <div key={index}>
                        <form
                            id="add-modify-book-form"
                            onSubmit={props.submit}
                        >
                            <label>{fieldName[0].toUpperCase() + fieldName.substring(1)}</label>
                            {
                                props.fields[field].length < 100
                                    ? <input type="text" name={fieldName} value={props.fields[field]} onChange={props.handleInputChange}></input>
                                    : <textarea style={{ width: 500, maxHeight: 300, resize: 'none' }} form="add-modify-book-form" name={fieldName} value={props.fields[field]} onChange={props.handleInputChange}></textarea>
                            }
                            <button type="submit">Aceptar</button>
                        </form>
                    </div>
                )
            })}
        </div >
    )
}


