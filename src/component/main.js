/** @format */

import React from "react";

function Main() {
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
  });

  let topText = null;
  let bottomText = null;

  function ChangeHandling(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitHandling(event) {
    event.preventDefault();
  }

  return (
    <main className='main'>
      <form className='main--input_section' onSubmit={submitHandling}>
        <input
          className='main--input'
          name='topText'
          type='text'
          onChange={ChangeHandling}
          value={formData.topText}
        />
        <input
          className='main--input'
          name='bottomText'
          type='text'
          onChange={ChangeHandling}
          value={formData.bottomText}
        />
        <button className='main--btn'>Get a new meme image</button>
        {formData.topText && (
          <h1 className='meme-text top'>{formData.topText}</h1>
        )}
        {formData.bottomText && (
          <h1 className='meme-text bottom'>{formData.bottomText}</h1>
        )}
      </form>
      <img
        src='https://sungmo.jjong.co.kr/images/sungmo.png'
        alt='k-meme-img'
      />
    </main>
  );
}

export default Main;
