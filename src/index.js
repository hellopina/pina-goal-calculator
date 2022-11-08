const { generateResultCreatePortfolio } = require('./calculation.js')
const { html } = require('./Charts/Charts.js')


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
  data.isRetirement=false;
  return generateResultCreatePortfolio(data);
}

export const calculateRetirement = (data)=>{
  
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
  data.isRetirement=true;
  return generateResultCreatePortfolio(data);
}

export const calculateEducation = (data)=>{
  return generateResultCreatePortfolio(data);
}

export const generateChart=({series,chartOptions,type='bar'})=>{
  return html(series,chartOptions?chartOptions:false,type)
}