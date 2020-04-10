import React from 'react';
import PropTypes from 'prop-types';
import styles from './_quill-wrapper.module.scss';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

// Rendering markup
// https://stackoverflow.com/questions/40952434/how-do-i-display-the-content-of-react-quill-without-the-html-markup

function QuillWrapper(props) {
  const { value, onChange, readOnly } = props;

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

  if (readOnly) {
    return (
      <ReactQuill
        className={styles.readOnly}
        value={value}
        modules={{ toolbar: null }}
        readOnly
      />
    )
  }

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
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
}

QuillWrapper.defaultProps = {
  readOnly: false,
  onChange: () => {}
}

export default QuillWrapper;
