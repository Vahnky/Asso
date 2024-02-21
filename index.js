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
    else if (screenWidth>800 && screenWidth<=1000){
        return 800;
    }
    else if (screenWidth>1000 && screenWidth<=1200){
        return 1000;
    }
    else{
        return 1200;
    }
}


options.width = getChessboardWidth();

abChess = new AbChess("chessboard", options);
abChess.setFEN();
