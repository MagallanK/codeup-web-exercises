var hasTacos = ["blueberry muffin", "banana", "yogurt", "cereal", "brisket and egg taco"];

var noTacos =["parfait", "omlette de frumage", "protein shake", "fasting"];

function tacoTuesday(arr){
    for(i = 0; i < arr.length; i++) {
        if(arr[i].includes("taco")){
            return true;
        }
        return false;
    }
}




