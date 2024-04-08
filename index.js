var abChess = {};
var options = {
    animated: false
};


function getChessboardWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
        return 350;
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
