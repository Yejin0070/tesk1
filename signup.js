const idSignUp = document.getElementsByClassName("id");
const pwSignUp = document.getElementsByClassName("pw");
const pwCheckSignUp = document.getElementsByClassName("pw-check");
const studentNumebr = document.getElementsByClassName("student-number");
const phoneNumber = document.getElementsByClassName("phone-number");
function signUpBtnClick() {
  if (idSignUp.value == "") {
    alert("아이디를 입력해주세요.");
  } else if (pwSignUp.value == "") {
    alert("비밀번호를 입력해주세요.");
  } else if (pwCheckSignUp.value == "") {
    alert("비밀번호를 확인해주세요.");
  } else if (studentNumebr.value == "") {
    alert("학번을 입력해주세요.");
  } else if (phoneNumber.value == "") {
    alert("전화번호를 입력해주세요.");
  } else {
    alert("회원가입이 완료되었습니다.");
  }
}
