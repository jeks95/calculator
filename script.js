function inflationCalculator() {
	let inflationRate = document.querySelector("#inflationRate");
	let money = document.querySelector("money");


    inflationRate = inflationRate.value;
    money = money.value

    console.log(inflationRate);
    console.log(money);



    let sabiranje = inflationRate.value + money;

    console.log(sabiranje);
	
}