// console.log("This is alok welcome here ");

// Age=23;

// age=22;

// age=21;

// age=32;

// console.log(age);




// {
//     let a=5;
//     console.log(a);
// }

// {
//     let a=39
//     console.log(a);
// }


// const infamation={
//     title:"alok",
//     message:"massege",  
//     post:195,
//     followers:569,
//     following:4,
//     bio:"Apna schoo",
//     isfollow:true,

// };
// console.log(infamation)




//condition statement

//1

// let age= 11; 
// if (age>18) {
//     console.log("you can vote");
// }

// if (age<18){
//     console.log("you can not vote");
// }

//2


// let mode = "dark";
// let color;
// if (mode == "dark"){
//     color="white";
// }

// if (mode==="light"){
//     color="white"
// }

// console.log(color)


// let num=24;
// if(num %2==0){
//     console.log(num,"its even no");
// }else{
//     console.log(num,"odd no");
// }

// let name=prompt("hello");
// console.log(name);


// let num = prompt("enter any multible of five");

// if (num%5 === 0){
// console.log(num,"is a multiple of 5");

// } else {
//     console.log(num,"is Not multiple of 5");
// }

//practice 1


// let num=prompt("enter a number")
// if (num%7===0){
//     console.log(num,"this is a multiple of 5")
// }else{
//     console.log(num,"this is not a multiple of 5")
// }

//practice 02




// let score=prompt("enter a number");
// let grade;
// if (score>=90 && score<=100){
//     grade="A";

// }else if (score>=70 && score<=89){
//     grade="B";
// } else if (score >=60 && score <=69){
//     grade="C";

// } else if (score>=50 && score <=59){
//     grade="D";
// }else if (score >=0 && score <=49){


//     grade="F";
// }

// console.log(" Your grade is ",grade)

//looping


// for (let i=1;i<=5;i++){
// console.log("hello")
//  console.log("loop has ended")
//

//while loop

// let i=1;
// while(i<=5){
//     i++;
//     console.log("alok");
// }


//light mode and dark mode 

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//       body.classList.add("dark");
//       body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light")
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });







const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };