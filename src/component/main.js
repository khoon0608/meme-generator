/** @format */

import React from "react";

function Main() {
  const [firstText, setFirstText] = React.useState(
    "여기에 넣을 문장은 왼쪽 입력창에 쓰세요"
  );
  const [secondText, setSecondText] = React.useState(
    "여기에 넣을 문장은 오른쪽 입력창에 쓰세요."
  );

  function changeFirstText(event) {
    return setFirstText(event.target.value);
  }

  function changeSecondText(event) {
    return setSecondText(event.target.value);
  }

  return (
    <main>
      <form>
        <input type='text' onChange={changeFirstText} />
        <input type='text' onChange={changeSecondText} />
        <button>Get a new meme image 🖼</button>
        <img
          src='https://sungmo.jjong.co.kr/images/sungmo.png'
          alt='k-meme-img'
        />
      </form>
    </main>
  );
}

export default Main;
