"use strict";
// 問題と答えを配列で囲む
const allQuestions = [
  {
    question: "佐々木久美",
    correctAnswer: ["パステルブルー", "パープル"],
  },
  { question: "佐々木美玲", correctAnswer: ["イエロー", "イエロー"] },
  { question: "加藤史帆", correctAnswer: ["ブルー", "ブルー"] },
  { question: "齊藤京子", correctAnswer: ["ホワイト", "ホワイト"] },
  {
    question: "東村芽依",
    correctAnswer: ["サクラピンク", "サクラピンク"],
  },
  {
    question: "高本彩花",
    correctAnswer: ["ホワイト", "エメラルドグリーン"],
  },
  { question: "高瀬愛奈", correctAnswer: ["ホワイト", "ピンク"] },
  { question: "小坂菜緒", correctAnswer: ["ホワイト", "バイオレット"] },
  { question: "金村美玖", correctAnswer: ["パステルブルー", "イエロー"] },
  { question: "河田陽菜", correctAnswer: ["イエロー", "サクラピンク"] },
  { question: "濱岸ひより", correctAnswer: ["ホワイト", "オレンジ"] },
  { question: "丹生明里", correctAnswer: ["オレンジ", "オレンジ"] },
  { question: "松田好花", correctAnswer: ["パールグリーン", "サクラピンク"] },
  { question: "富田鈴花", correctAnswer: ["パープル", "パープル"] },
  { question: "上村ひなの", correctAnswer: ["エメラルドグリーン", "レッド"] },
];

let userAnswers = []; // ユーザーの答えを保存する配列

// 問題文と何番目の問題か
const question = document.querySelector("#question");

function showQuestion() {
  // ランダムなインデックスを生成します
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  // ランダムな問題文と答えを表示します
  question.textContent = allQuestions[randomIndex].question;
  // 現在の問題の正解を取得
  let currentQuestion = allQuestions[randomIndex];
  let correctAnswers = currentQuestion.correctAnswer;
  // 問題と答えを配列から削除します
  allQuestions.splice(randomIndex, 1);
  return correctAnswers;
}

// <button> 配列で取得
const button = [];
for (let i = 0; i < 30; i++) {
  button[i] = document.querySelectorAll("button")[i];
}
// <section> 配列で取得
const penlight = [];
for (let i = 0; i < 15; i++) {
  penlight[i] = document.querySelectorAll("section")[i];
}

// id=nameが付いた<div> 配列で取得
const colorName = [];
for (let i = 0; i < 15; i++) {
  colorName[i] = document.querySelectorAll("#name")[i];
}

let correctAnswers = showQuestion(); // 初期の正解を取得
let currentQuestion = 0;

// "正解!"の表示を出す要素を取得
const message = document.querySelector("#message");

// 正解か不正解かを判断する関数
function checkAnswer() {
  if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
    message.classList.remove("Hide");
    message.classList.add("textRed");
    console.log("正解:" + correctAnswers); // correctAnswersを出力
    console.log("選んだ解答:" + userAnswers); // userAnswersを出力
    message.textContent = "正解!";
    correctAnswers = showQuestion(); // 新しい問題を表示し、正解を更新
    setTimeout(() => {
      message.classList.add("Hide");
      message.classList.remove("textRed");
    }, 1500);
  } else {
    message.classList.remove("Hide");
    console.log("正解:" + correctAnswers); // correctAnswersを出力
    console.log("選んだ解答:" + userAnswers); // userAnswersを出力
    message.textContent = "違う｡｡｡";
    correctAnswers = showQuestion(); // 新しい問題を表示し、正解を更新
    setTimeout(() => {
      message.classList.add("Hide");
    }, 1500);
  }

  userAnswers = []; // userAnswersをリセット
}
