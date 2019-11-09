// floor làm tròn xuống
// 00 - 99
// khi người mua vé số 93 thì báo cho họ biết và dừng lại
// const x = Math.floor(Math.random() * 100);
// console.log(x);
let soLanMua = 0;
let soMuaDuoc = -1;
while(soMuaDuoc != 93){
    soMuaDuoc = Math.floor(Math.random() * 100);
    const message = 'Lan thu' + ++soLanMua +', mua duoc so' + soMuaDuoc;
    console.log(message);
}
