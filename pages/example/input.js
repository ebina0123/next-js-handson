import React from 'react';
import TextField from '@material-ui/core/TextField';

const Example = () => {
  const [text, setText] = React.useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Change Text</h1>
      <TextField name="example" label="text" value={text} onChange={handleChange} />

      <div>text: {text}</div>
    </div>
  );
};

export default Example;
