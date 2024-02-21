var abChess = {};
var options = {
    animated: false
};


function getChessboardWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 400) {
        return 320;
    } else if (screenWidth>400 && screenWidth<600) {
        return 400;
    }
    else if (screenWidth>600 && screenWidth<=800){
        return  600;
    }
    else {
        return 700;
    }
   
    
}


options.width = getChessboardWidth();

abChess = new AbChess("chessboard", options);
abChess.setFEN();
