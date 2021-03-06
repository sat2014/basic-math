function reducerCount(state, action) {
    switch (action.type) {
      case 'resetLocalStorageFlag':
      return {
        ...state,
        localStorageFlag: !state.localStorageFlag,
      };
      case 'reset':
        return {       
          ...state,
          questionCount: 0,
          questionCountAddition: 0,
          questionCountSubtraction: 0,
          questionCountMultiplication: 0,
          questionCountDivision: 0,
          questionCountCounting: 0,
        }    
      case 'incrementQuestionCount':
        return {
          ...state,
          questionCount: state.questionCount + 1,
        };
      case 'incrementQuestionCountAddition':
        return {
          ...state,
          questionCountAddition: state.questionCountAddition + 1,
        };
      case 'incrementQuestionCountSubtraction':
        return {
          ...state,   
          questionCountSubtraction: state.questionCountSubtraction + 1,
        };
      case 'incrementQuestionCountMultiplication':
        return {
          ...state,
          questionCountMultiplication: state.questionCountMultiplication + 1
        };
      case 'incrementQuestionCountDivision':
      return {
        ...state,
        questionCountDivision: state.questionCountDivision + 1
      };
      case 'incrementQuestionCountCounting':
        return {
          ...state,
          questionCountCounting: state.questionCountCounting + 1,
        };
      case 'getCurrentState':
      return {
        ...state,
      };
      default:
        console.log('default from reduer!')
    }
  }

 export default reducerCount