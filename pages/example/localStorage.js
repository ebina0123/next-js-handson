import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Example = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    const savedText = localStorage.getItem('text');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    // eslint-disable-next-line no-undef
    localStorage.setItem('text', value);
  };

  return (
    <div>
      <h1>Change Text</h1>
      <TextField name="example" label="text" value={text} onChange={handleChange} />

      <br />

      <div>text: {text}</div>
    </div>
  );
};

export default Example;
