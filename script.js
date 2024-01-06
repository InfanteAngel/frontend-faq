const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const plus3 = document.querySelector(".plus3");
const plus4 = document.querySelector(".plus4");

const plusBtnList = [plus1, plus2, plus3, plus4];

const minus1 = document.querySelector(".minus1");
const minus2 = document.querySelector(".minus2");
const minus3 = document.querySelector(".minus3");
const minus4 = document.querySelector(".minus4");

const minusBtnList = [minus1, minus2, minus3, minus4];

const txtBox1 = document.querySelector(".textBox1");
const txtBox2 = document.querySelector(".textBox2");
const txtBox3 = document.querySelector(".textBox3");
const txtBox4 = document.querySelector(".textBox4");

const textBoxList = [txtBox1, txtBox2, txtBox3, txtBox4];


const textCont1 = document.getElementById("textContent1");
const textCont2 = document.getElementById("textContent2");
const textCont3 = document.getElementById("textContent3");
const textCont4 = document.getElementById("textContent4");

const textContList = [textCont1, textCont2, textCont3, textCont4];

function dropDownReset(a) {
  for (var i = 0; i < plusBtnList.length; i++) {
    if (
      minusBtnList[i].getAttribute("aria-hidden") == "false" &&
      minusBtnList[i] != minusBtnList[a]
    ) {
      const target = [i];
      console.log("running function 3");

      minusBtnList[target].classList.toggle("visually-hidden");
      minusBtnList[target].classList.remove("visually-show");

      plusBtnList[target].classList.toggle("visually-show");
      plusBtnList[target].classList.remove("visually-hidden");

      plusBtnList[target].setAttribute("aria-hidden", "false");
      minusBtnList[target].setAttribute("aria-hidden", "true");

      textBoxList[target].classList.toggle("visually-hidden");
      textBoxList[target].classList.remove("visually-show");

      textBoxList[target].classList.toggle("static-box");
      textBoxList[target].classList.remove("active-box")

      textContList[target].classList.toggle("visually-hidden");
      textContList[target].classList.remove("visually-show-content");
      
    }
  }
}

function toggleSwitch(a) {
  if (plusBtnList[a].getAttribute("aria-hidden") == "false") {
    console.log("running function 1");

    plusBtnList[a].classList.toggle("visually-hidden");
    plusBtnList[a].classList.remove("visually-show");

    minusBtnList[a].classList.toggle("visually-show");
    minusBtnList[a].classList.remove("visually-hidden");

    plusBtnList[a].setAttribute("aria-hidden", "true");
    minusBtnList[a].setAttribute("aria-hidden", "false");

    textBoxList[a].classList.remove("visually-hidden");
    textBoxList[a].classList.toggle("visually-show");

    textBoxList[a].classList.remove("static-box");
    textBoxList[a].classList.toggle("active-box");

    textContList[a].classList.toggle("visually-show-content");
    textContList[a].classList.remove("visually-hidden");

  } else if (plusBtnList[a].getAttribute("aria-hidden") == "true") {
    console.log("running function 2");
    plusBtnList[a].classList.toggle("visually-show");
    plusBtnList[a].classList.remove("visually-hidden");

    minusBtnList[a].classList.toggle("visually-hidden");
    minusBtnList[a].classList.remove("visually-show");

    plusBtnList[a].setAttribute("aria-hidden", "false");
    minusBtnList[a].setAttribute("aria-hidden", "true");

    textBoxList[a].classList.toggle("visually-hidden");
    textBoxList[a].classList.remove("visually-show");

    textBoxList[a].classList.toggle("static-box");
    textBoxList[a].classList.remove("active-box");

    textContList[target].classList.toggle("visually-hidden");
    textContList[target].classList.remove("visually-show-content");
  }
}

plus1.addEventListener("click", plusBtn1);
function plusBtn1() {
  dropDownReset(0);
  toggleSwitch(0);
}

plus2.addEventListener("click", plusBtn2);
function plusBtn2() {
  dropDownReset(1);
  toggleSwitch(1);
}

plus3.addEventListener("click", plusBtn3);
function plusBtn3() {
  dropDownReset(2);
  toggleSwitch(2);
}

plus4.addEventListener("click", plusBtn4);
function plusBtn4() {
  dropDownReset(3);
  toggleSwitch(3);
}

minus1.addEventListener("click", minusBtn1);
function minusBtn1() {
  dropDownReset(0);
  toggleSwitch(0);
}

minus2.addEventListener("click", minusBtn2);
function minusBtn2() {
  dropDownReset(1);
  toggleSwitch(1);
}

minus3.addEventListener("click", minusBtn3);
function minusBtn3() {
  dropDownReset(2);
  toggleSwitch(2);
}

minus4.addEventListener("click", minusBtn4);
function minusBtn4() {
  dropDownReset(3);
  toggleSwitch(3);
}
