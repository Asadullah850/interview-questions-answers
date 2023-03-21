// window.oncontextmenu = function () {
//     return false;
//  }
const mainContaint = document.getElementById('containtDiv');
const showdata = (data)=>{
    const allQus = qusAndAnsArray(data)
    allQus.forEach(singlesQuesObject => {
        mainContaint.innerHTML +=`
        <!-- <p>${singlesQuesObject.qus}</p> -->
        `;
    });
}

function qusAndAnsArray (passData){
    const storeQusAndAns =[
        {moduleNumber:41,qus:'jk', ans:'dd'},
        {qus:'jk1', ans:'dd4'},
        {qus:'jk2', ans:'dd3'},
    ];
    return storeQusAndAns
}
showdata()