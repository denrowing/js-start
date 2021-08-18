
const card3 = function userCard(num) {
    return getCardOptions(num)
}

function getCardOptions(num) {
    let options = {
        'balance': putCredits(100),
        'transactionLimit': transactionLimit(100),
        'historyLogs': [
            {'operation type': prompt('operation type', ''),
                'credits': prompt('amount of funds to transfer',''),
                'operationTime': Date.now(),
            },
        ],
        'key': num,
    }
    return options
}


function balance() {

    function takeCredits(numCred) {
        return numCred
    }

    function putCredits(numDeb) {
        return numDeb
    }

    function transactionLimit(trans) {
        return trans
    }

    if ((putCredits(numDeb) - takeCredits(numCred)) >= 0 && (putCredits(numDeb) - takeCredits(numCred) - transactionLimit(trans) >= 0)) {
        return numBal = putCredits(numDeb) - takeCredits(numCred)
    } else {
        console.error('Not enough money in the account for this transaction')
    }

}


function setTransactionLimit(limit) {
    return limit
}

function transferCredits(quantityCred, card) {
    let tax = 0.05
    if ( (balance() >= 0) && (setTransactionLimit(limit)  > 0) ) {

    }
}






