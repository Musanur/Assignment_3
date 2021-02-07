
function kilometerToMeter(convert){
    var element = convert * 1000;
    return element;
}
var result = kilometerToMeter(10);
console.log(result);




function budgetCalculator(watch, phone, laptop){
    var forTheWatch = watch*50;
    var forThePhone = phone*100;
    var forTheLaptop = laptop*500;
    var total = forTheWatch + forThePhone + forTheLaptop;
    return total;
}
var budegt = budgetCalculator(2, 5, 1);
console.log(budegt);





function hotelCost(rentARoom){
    var room = 0;
    if(rentARoom <=10){
        room = rentARoom * 100;
    } else if(rentARoom <=20){
        var first10Days = 10 * 100;
        var remaining = rentARoom - 10;
        var second20Days = remaining * 80;
        room = first10Days + second20Days; 
    } else {
        var first10Days = 10 * 100;
        var second20Days = 10 * 80;
        var remaining = rentARoom - 20;
        var manyDays = remaining * 50;
        room = first10Days + second20Days + manyDays;
    }
    return room;
}
var cost = hotelCost(110);
console.log(cost);






function tinyFriend(names) {
    var longest = names[0];
    for (var i = 0; i < names.length; i++) {
        var arrayNumber = names[i];
        if (longest.length < arrayNumber.length ) {
            longest = arrayNumber;
        }
    }
    return longest;
}
var longestFriend = tinyFriend (["Habib", "Miraz", "Rabbi", "Musanur", "Osman"]);
console.log ( longestFriend);