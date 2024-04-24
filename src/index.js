// const { generateResultCreatePortfolio } = require('./calculation.js')
// const { html } = require('./Charts/Charts.js')
import { generateResultCreatePortfolio  } from './calculation.js'
import { html } from './Charts/Charts.js'

/**
 * Get All Goal List
 * @returns {object}
 */
export const getGoals = ()=>{
  return 'goalsss223'
}


/**
     * @function calculateGoal
     * @params  returnValue  = persen return value.
     * @params  inflation    = persen inflasi (default 5%).
     * @params target = target value
     * @return {Object}   Kalkulasi Goal
     * * 
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
