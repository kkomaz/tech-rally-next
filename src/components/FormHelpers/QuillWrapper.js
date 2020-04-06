import React from 'react';
import PropTypes from 'prop-types';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

// Rendering markup
// https://stackoverflow.com/questions/40952434/how-do-i-display-the-content-of-react-quill-without-the-html-markup

function QuillWrapper(props) {
  const { value, onChange } = props;

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'code-block'
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
    />
  )
}

QuillWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default QuillWrapper;
