// <button>のクリックイベント
// ボタン1
button[0].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[0].classList.add("light");
    colorName[0].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "パープル");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[0].classList.remove("light");
      colorName[0].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[0].classList.add("light");
    colorName[0].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "パープル");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[0].classList.remove("light");
      colorName[0].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン2
button[1].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[0].classList.add("light");
    colorName[0].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "パープル");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[0].classList.remove("light");
      colorName[0].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[0].classList.add("light");
    colorName[0].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "パープル");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[0].classList.remove("light");
      colorName[0].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン3
button[2].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[1].classList.add("light");
    colorName[1].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[1].classList.remove("light");
      colorName[1].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[1].classList.add("light");
    colorName[1].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[1].classList.remove("light");
      colorName[1].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン4
button[3].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[1].classList.add("light");
    colorName[1].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[1].classList.remove("light");
      colorName[1].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[1].classList.add("light");
    colorName[1].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[1].classList.remove("light");
      colorName[1].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン5
button[4].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[2].classList.add("light");
    colorName[2].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ブルー", "ブルー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[2].classList.remove("light");
      colorName[2].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[2].classList.add("light");
    colorName[2].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ブルー", "ブルー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[2].classList.remove("light");
      colorName[2].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン6
button[5].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[2].classList.add("light");
    colorName[2].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ブルー", "ブルー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[2].classList.remove("light");
      colorName[2].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[2].classList.add("light");
    colorName[2].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ブルー", "ブルー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[2].classList.remove("light");
      colorName[2].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン7
button[6].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[3].classList.add("light");
    colorName[3].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ホワイト");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[3].classList.remove("light");
      colorName[3].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[3].classList.add("light");
    colorName[3].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ホワイト");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[3].classList.remove("light");
      colorName[3].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン8
button[7].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[3].classList.add("light");
    colorName[3].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ホワイト");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[3].classList.remove("light");
      colorName[3].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[3].classList.add("light");
    colorName[3].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ホワイト");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[3].classList.remove("light");
      colorName[3].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン9
button[8].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[4].classList.add("light");
    colorName[4].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("サクラピンク", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[4].classList.remove("light");
      colorName[4].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[4].classList.add("light");
    colorName[4].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("サクラピンク", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[4].classList.remove("light");
      colorName[4].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン10
button[9].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[4].classList.add("light");
    colorName[4].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("サクラピンク", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[4].classList.remove("light");
      colorName[4].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[4].classList.add("light");
    colorName[4].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("サクラピンク", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[4].classList.remove("light");
      colorName[4].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン11
button[10].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[5].classList.add("light");
    colorName[5].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "エメラルドグリーン");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[5].classList.remove("light");
      colorName[5].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[5].classList.add("light");
    colorName[5].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "エメラルドグリーン");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[5].classList.remove("light");
      colorName[5].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン12
button[11].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[5].classList.add("light");
    colorName[5].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "エメラルドグリーン");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[5].classList.remove("light");
      colorName[5].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[5].classList.add("light");
    colorName[5].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "エメラルドグリーン");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[5].classList.remove("light");
      colorName[5].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン13
button[12].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[6].classList.add("light");
    colorName[6].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[6].classList.remove("light");
      colorName[6].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[6].classList.add("light");
    colorName[6].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[6].classList.remove("light");
      colorName[6].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン14
button[13].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[6].classList.add("light");
    colorName[6].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[6].classList.remove("light");
      colorName[6].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[6].classList.add("light");
    colorName[6].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "ピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[6].classList.remove("light");
      colorName[6].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン15
button[14].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[7].classList.add("light");
    colorName[7].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "バイオレット");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[7].classList.remove("light");
      colorName[7].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[7].classList.add("light");
    colorName[7].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "バイオレット");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[7].classList.remove("light");
      colorName[7].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン16
button[15].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[7].classList.add("light");
    colorName[7].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "バイオレット");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[7].classList.remove("light");
      colorName[7].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[7].classList.add("light");
    colorName[7].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "バイオレット");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[7].classList.remove("light");
      colorName[7].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン17
button[16].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[8].classList.add("light");
    colorName[8].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[8].classList.remove("light");
      colorName[8].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[8].classList.add("light");
    colorName[8].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[8].classList.remove("light");
      colorName[8].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン18
button[17].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[8].classList.add("light");
    colorName[8].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[8].classList.remove("light");
      colorName[8].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[8].classList.add("light");
    colorName[8].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パステルブルー", "イエロー");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[8].classList.remove("light");
      colorName[8].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン19
button[18].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[9].classList.add("light");
    colorName[9].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[9].classList.remove("light");
      colorName[9].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[9].classList.add("light");
    colorName[9].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[9].classList.remove("light");
      colorName[9].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン20
button[19].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[9].classList.add("light");
    colorName[9].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[9].classList.remove("light");
      colorName[9].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[9].classList.add("light");
    colorName[9].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("イエロー", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[9].classList.remove("light");
      colorName[9].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン21
button[20].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[10].classList.add("light");
    colorName[10].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[10].classList.remove("light");
      colorName[10].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[10].classList.add("light");
    colorName[10].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[10].classList.remove("light");
      colorName[10].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン22
button[21].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[10].classList.add("light");
    colorName[10].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[10].classList.remove("light");
      colorName[10].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[10].classList.add("light");
    colorName[10].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("ホワイト", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[10].classList.remove("light");
      colorName[10].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン23
button[22].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[11].classList.add("light");
    colorName[11].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("オレンジ", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[11].classList.remove("light");
      colorName[11].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[11].classList.add("light");
    colorName[11].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("オレンジ", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[11].classList.remove("light");
      colorName[11].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン24
button[23].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[11].classList.add("light");
    colorName[11].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("オレンジ", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[11].classList.remove("light");
      colorName[11].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[11].classList.add("light");
    colorName[11].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("オレンジ", "オレンジ");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[11].classList.remove("light");
      colorName[11].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン25
button[24].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[12].classList.add("light");
    colorName[12].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パールグリーン", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[12].classList.remove("light");
      colorName[12].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[12].classList.add("light");
    colorName[12].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パールグリーン", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[12].classList.remove("light");
      colorName[12].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン26
button[25].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[12].classList.add("light");
    colorName[12].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パールグリーン", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[13].classList.remove("light");
      colorName[13].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[12].classList.add("light");
    colorName[12].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パールグリーン", "サクラピンク");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[12].classList.remove("light");
      colorName[12].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン27
button[26].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[13].classList.add("light");
    colorName[13].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パープル", "パープル");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[13].classList.remove("light");
      colorName[13].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[13].classList.add("light");
    colorName[13].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パープル", "パープル");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[13].classList.remove("light");
      colorName[13].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン28
button[27].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[13].classList.add("light");
    colorName[13].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パープル", "パープル");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[13].classList.remove("light");
      colorName[13].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[13].classList.add("light");
    colorName[13].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("パープル", "パープル");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[13].classList.remove("light");
      colorName[13].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン29
button[28].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[14].classList.add("light");
    colorName[14].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("エメラルドグリーン", "レッド");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[14].classList.remove("light");
      colorName[14].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[14].classList.add("light");
    colorName[14].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("エメラルドグリーン", "レッド");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[14].classList.remove("light");
      colorName[14].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});

// ボタン30
button[29].addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion === 3) {
    // trueの処理
    penlight[14].classList.add("light");
    colorName[14].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("エメラルドグリーン", "レッド");
    checkAnswer();
    question.classList.add("Hide");

    // trueの時間差処理
    setTimeout(() => {
      penlight[14].classList.remove("light");
      colorName[14].classList.remove("light2");
      message.classList.remove("Hide");
      message.textContent = "クイズ終了!";
    }, 1500);

    setTimeout(() => {
      location.reload();
    }, 2500);
  } else {
    // falseだったときの処理
    penlight[14].classList.add("light");
    colorName[14].classList.add("light2");
    button[0].classList.add("invalid");
    button[1].classList.add("invalid");
    button[2].classList.add("invalid");
    button[3].classList.add("invalid");
    button[4].classList.add("invalid");
    button[5].classList.add("invalid");
    button[6].classList.add("invalid");
    button[7].classList.add("invalid");
    button[8].classList.add("invalid");
    button[9].classList.add("invalid");
    button[10].classList.add("invalid");
    button[11].classList.add("invalid");
    button[12].classList.add("invalid");
    button[13].classList.add("invalid");
    button[14].classList.add("invalid");
    button[15].classList.add("invalid");
    button[16].classList.add("invalid");
    button[17].classList.add("invalid");
    button[18].classList.add("invalid");
    button[19].classList.add("invalid");
    button[20].classList.add("invalid");
    button[21].classList.add("invalid");
    button[22].classList.add("invalid");
    button[23].classList.add("invalid");
    button[24].classList.add("invalid");
    button[25].classList.add("invalid");
    button[26].classList.add("invalid");
    button[27].classList.add("invalid");
    button[28].classList.add("invalid");
    button[29].classList.add("invalid");
    userAnswers.push("エメラルドグリーン", "レッド");
    checkAnswer();
    question.classList.add("Hide");
    // falseだったときの時間差処理
    setTimeout(() => {
      penlight[14].classList.remove("light");
      colorName[14].classList.remove("light2");
      button[0].classList.remove("invalid");
      button[1].classList.remove("invalid");
      button[2].classList.remove("invalid");
      button[3].classList.remove("invalid");
      button[4].classList.remove("invalid");
      button[5].classList.remove("invalid");
      button[6].classList.remove("invalid");
      button[7].classList.remove("invalid");
      button[8].classList.remove("invalid");
      button[9].classList.remove("invalid");
      button[10].classList.remove("invalid");
      button[11].classList.remove("invalid");
      button[12].classList.remove("invalid");
      button[13].classList.remove("invalid");
      button[14].classList.remove("invalid");
      button[15].classList.remove("invalid");
      button[16].classList.remove("invalid");
      button[17].classList.remove("invalid");
      button[18].classList.remove("invalid");
      button[19].classList.remove("invalid");
      button[20].classList.remove("invalid");
      button[21].classList.remove("invalid");
      button[22].classList.remove("invalid");
      button[23].classList.remove("invalid");
      button[24].classList.remove("invalid");
      button[25].classList.remove("invalid");
      button[26].classList.remove("invalid");
      button[27].classList.remove("invalid");
      button[28].classList.remove("invalid");
      button[29].classList.remove("invalid");
      question.classList.remove("Hide");
    }, 1500);
  }
});
