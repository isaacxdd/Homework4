function setAlarm(employed, vacationing) {
  if (employed & vacationing) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, false));
console.log(setAlarm(true, true)); 
console.log(setAlarm(false, false));
console.log(setAlarm(false, true)); 

////////////////////////////////////////////////////////////

function oddNumberCount(num) {
  let count = 0;
  for (let i = 1; i < num; i += 2) {
    count++;
  }
  return count;
}

console.log(oddNumberCount(7));
console.log(oddNumberCount(16)); 
console.log(oddNumberCount(0)); 

//////////////////////////////////////////////////////////////

function trollsBeGone(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newSentence = '';
  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i].toLowerCase())) {
      newSentence += sentence[i];
    }
  }
  return newSentence;
}

//////////////////////////////////////////////

const bankInfo = {
  savings: 4000,
  checking: 4000,
  moneyMarket: -500,
  creditCard: -1500
};

function bankAccountSummary(bankInfo) {
  let total = 0;
  for (let key in bankInfo) {
    total += bankInfo[key];
  }
  return total;
}

const bankTotal = bankAccountSummary(bankInfo);

function inTheRed(total) {
  return total < 0;
}


