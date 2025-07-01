import React from 'react'

export default function NewTododForm( { onCreateClicked }) {

    const [inputText, setInputText ] = React.useState('')
  return (
    <div>
        <input type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)} />
        <button onClick={() => {
            onCreateClicked(inputText);
            setInputText('')}
        }>Create Todo</button>
      
    </div>
  )
}
