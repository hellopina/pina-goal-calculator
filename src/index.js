let uniqueArr = [];
const { generateResultCreatePortfolio } = require('./calculation.js')
const { getRiskProfile } = require('./API/endpoint.js')


export const riskProfile = ()=>{

}

/**
 * @param {Number} returnValue
 * @param {Boolean} isRetirement
 * @param {Number} initialSavingAmount
 * @param {Number} age
*/
export const calculateGoal = (data)=>{
  
  // returnValue => risk profile return 
  // isRetirement, => bool
  // initialSavingAmount,
  // age,
  // retireAt,
  // income,
  // monthlySpending,
  // monthlySaving,
  // goalAmount,
  // savingDurationInMonth,
  // LIFE_RATIO,
  // generateMonthly = true,
  // goalChart = [],
  // invested = 0,
  // currentPLValue = 0,
  // isFromCreatePortfolio = true,
  // goalCreatedAt = null,
  // goalInvestmentValue = 0,

  return generateResultCreatePortfolio(data);
}
