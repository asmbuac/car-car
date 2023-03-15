import React from 'react';

export default function FormButton({ buttonText }) {
  return (
    <div className="d-grid col-md-6 mx-auto">
      <button className="btn form-btn">{buttonText}</button>
    </div>
  )
}
