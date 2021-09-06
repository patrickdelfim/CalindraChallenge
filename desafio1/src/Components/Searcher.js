/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

const Searcher = ({ submitSearchTerm }) => {
  const [searchContent, setSearchContent] = useState('');
  const [formError, setFormError] = useState(false);

  function handleChange(e) {
    setSearchContent(e.target.value);
    if (e.target.value.length > 0) {
      setFormError(false);
    } else {
      setFormError(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchContent.length > 0) {
      submitSearchTerm(searchContent);
    }
  }

  return (
    <div className="Searcher">
      <form>
        <label htmlFor="searchbox">
          <p className="txt">Search Products:</p>
          <input className="input-textbox" type="text" name="searchbox" id="searchbox" placeholder="Search Item Here..." value={searchContent} onChange={(e) => handleChange(e)} />
        </label>
        <button className="btn-submit" type="submit" onClick={(e) => handleSubmit(e)}>
          <i className="fas fa-search" />
        </button>
        {formError && <p className="txt-error">Form cannot be empty</p>}
      </form>
    </div>
  );
};

export default Searcher;
