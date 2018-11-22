// const initialStateCount = {
//     questionCount: 0,
//     questionCountAddition: 0,
//     questionCountSubtraction: 0,
//     questionCountMultiplication: 0,
//     questionCountDivision: 0,
//     questionCountCounting: 0,
//   };

let initialStateCount = {
  questionCount: 0,
  questionCountAddition: localStorage.getItem('questionCountAddition') !== null ? parseInt(localStorage.getItem('questionCountAddition')) : 0,
  questionCountSubtraction: localStorage.getItem('questionCountSubtraction') !== null ? parseInt(localStorage.getItem('questionCountSubtraction')) : 0,
  questionCountMultiplication: localStorage.getItem('questionCountMultiplication') !== null ? parseInt(localStorage.getItem('questionCountMultiplication')) : 0,
  questionCountDivision: localStorage.getItem('questionCountDivision') !== null ? parseInt(localStorage.getItem('questionCountDivision')) : 0,
  questionCountCounting: localStorage.getItem('questionCountCounting') !== null ? parseInt(localStorage.getItem('questionCountCounting')) : 0,
};
  
export default initialStateCount