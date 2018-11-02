import initialStateCount from './initialState/initialStateCount';
  
function reducerCount(state, action) {
    switch (action.type) {
      case 'reset':
        return initialStateCount;
      case 'incrementQuestionCount':
        return {
          questionCount: state.questionCount + 1,
          questionCountAddition: state.questionCountAddition,
          questionCountSubtraction: state.questionCountSubtraction,
          questionCountMultiplication: state.questionCountMultiplication
        };
      case 'incrementQuestionCountAddition':
        return {
          questionCount: state.questionCount,
          questionCountAddition: state.questionCountAddition + 1,
          questionCountSubtraction: state.questionCountSubtraction,
          questionCountMultiplication: state.questionCountMultiplication
        };
      case 'incrementQuestionCountSubtraction':
        return {
          questionCount: state.questionCount,
          questionCountAddition: state.questionCountAddition,       
          questionCountSubtraction: state.questionCountSubtraction + 1,
          questionCountMultiplication: state.questionCountMultiplication
        };
      case 'incrementQuestionCountMultiplication':
        return {
          questionCount: state.questionCount,
          questionCountAddition: state.questionCountAddition,       
          questionCountSubtraction: state.questionCountSubtraction,
          questionCountMultiplication: state.questionCountMultiplication + 1
        };
      default:
        console.log('default from reduer!')
    }
  }

  export default reducerCount