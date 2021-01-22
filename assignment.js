// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer > 0){
        return meter;
    }
    else{
        return "Inavlid Input!! Kilometer can not be 0."
    }
}
var Meter = kilometerToMeter(5);
console.log(Meter);



// budgetCalculator
function budgetCalculator(watch, phone, laptop){
     var totalWatch = watch * 50;
     var totalPhone = phone * 100;
     var totalLaptop = laptop * 500;
     var totalCost = totalWatch + totalPhone + totalLaptop;
     if(totalCost < 0){
         return "Cost can not be negative value."
     }
     else{
        return totalCost;
     }
}
var grandTotalCost = budgetCalculator(1, 5, 1);
console.log(grandTotalCost);



// hotelCost
function hotelCost(days){
    var firstDays = 10 * 100;
    var secondDays = 10 * 80;
    if(days <= 10){
        var totalDays = days * 100;
        if(totalDays < 0){
            return "invalid input!!Cost can not be negative value.";
        }
        else{
              return totalDays;
         }
     }
     else if(days > 10 && days <=20 ){
         var totalSecondDays = (days - 10) * 80;
         var grandTotalSecondDays = totalSecondDays + firstDays;
         if(grandTotalSecondDays < 0){
            return "invalid input!!Cost can not be negative value.";
          }
         else{
             return grandTotalSecondDays;
         }
     }

     else{
         var totalLastDays = (days - 20) * 50;
         var grandTotalLastDays = totalLastDays + secondDays + firstDays;
         if(grandTotalLastDays < 0){
            return "invalid input!!Cost can not be negative value.";
         }
         else{
            return grandTotalLastDays;
         }
     }
}
var grandTotalHotelCost = hotelCost(21);
console.log(grandTotalHotelCost);




// megaFriend
function megaFriend(name){
    var megaName = name[0]
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        // var nameLength = element.length;
        if(element.length > megaName.length){
            megaName = element;
        }
    }
    if(megaName == ""){
        return "Invalid Name!! Please Write Correct Name.";
    }
    else{
        return megaName;
    }
}
var friendList = [ "ashma", "shanta", "khadiza", "diya"];
var megaFriendName = megaFriend(friendList);
console.log(megaFriendName);
