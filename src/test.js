
import { getGoals, calculateGoal,calculateRetirement } from './index.js'


let calculate =  calculateRetirement({
  "returnValue": 6.86,
  "initialSavingAmount": 0,
  "age": 30,
  "retireAt": 60,
  "income": 20000000,
  "monthlySpending": 5000000,
  "monthlySpendingFuture": 201454064.24,
  "monthlySaving": 0,
  "goalAmount": 0,
  "savingDurationInMonth": 0,
  "LIFE_RATIO": 73,
  "generateMonthly": false,
  "goalChart": [],
  "invested": 0,
  "currentPLValue": 0,
  "isFromCreatePortfolio": true,
  "goalCreatedAt": null,
  "goalInvestmentValue": 0
})
delete calculate.datasetProjection;
delete calculate.datasetTarget;
delete calculate.datasetGeneral;
delete calculate.datasetActual;
console.log(calculate)
// var goals = getGoals()