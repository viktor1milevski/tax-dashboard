function MoneyMath (){
}

MoneyMath.rounded_up_to_nearest_five_pence = function (number_to_round) {
    return Math.ceil(number_to_round * 20) / 20
}

MoneyMath.sum_of = function (number1, number2) {
    return ((number1 * 100) + (number2 * 100)) / 100;
}