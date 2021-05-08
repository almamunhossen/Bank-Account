

//log in secton 
document.querySelector('#sumitButton').addEventListener("click", function () {
    const contactFrom = document.getElementById("contactFrom");
    contactFrom.style.display = "none";

    const accountSecton = document.getElementById("accountSecton");
    accountSecton.style.display = "block";
})


const depositBt = document.getElementById("depositBt");
depositBt.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    
    const depositDisplay = document.getElementById('depositDisplay').innerText;
    const depositNumbercr = parseFloat(depositDisplay);
    const totalDeposit = depositNumber + depositNumbercr;
    document.getElementById('depositDisplay').innerText = totalDeposit;


    const balanceDisplay = document.getElementById('balanceDisplay').innerText;
    const balnceNumber = parseFloat(balanceDisplay);
    const blanceAmount = totalDeposit + balnceNumber;
    document.getElementById('balanceDisplay').innerText = blanceAmount;
    
    document.getElementById("depositAmount").value="";

})

const withdrowBt = document.getElementById('withdrowBt').addEventListener('click', function () {
    const withdrowAmount = document.getElementById('withdrowAmount').value;
    const withdrowNumber = parseFloat(withdrowAmount);

    const withdrawDisplay = document.getElementById('withdrawDisplay').innerText;
    const withdrawDisplayNo = parseFloat(withdrawDisplay);
    const withdrawBlance = withdrawDisplayNo - withdrowNumber;
    document.getElementById('withdrawDisplay').innerText = withdrawBlance;

    document.getElementById("withdrowAmount").value="";

})