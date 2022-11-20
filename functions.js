const changeEmailFromGmailToHicoders = (changeGmailArr) => {
    let findGmailArr = [];
    for (let i = 0; i < changeGmailArr.length; i++) {
        findGmailArr.push(changeGmailArr[i].toLowerCase().slice(0, -9) + 'hicoders.ch')
    }
    return findGmailArr.reverse();
};

const findSuperNumbers = (findSuperNr) => {
    let filterArr = [];
    for (let i = 0; i < findSuperNr.length; i++) {
        if (String(findSuperNr[i]).includes('1') || String(findSuperNr[i]).includes('3')) {
            filterArr.push(findSuperNr[i]);
        }
    }
    return filterArr;
};



export { changeEmailFromGmailToHicoders, findSuperNumbers };
