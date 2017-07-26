import React from 'react';
import MuiTextField from 'material-ui/TextField';

const TextField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{ padding: '.5em' }}>
    <MuiTextField
      hintText={label}
      type={type}
      {...input}
      errorText={touched && error ? error : ''}
    />
  </div>
);

export default TextField;
