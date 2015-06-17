
var board = new Array();
var score = 0;
var hasConflited = new Array();

var startX, startY, endX, endY;

$(document).ready(function(){
    prepareForMobile();
	newgame();
});

function prepareForMobile() {

    if (documentWidth > 500) {
        gridContainerWidth = 500;
        cellSideLength = 100;
        cellSpace = 20;
    }

    $('#grid-container').css('width', gridContainerWidth - 2 * cellSpace);
    $('#grid-container').css('height', gridContainerWidth - 2 * cellSpace);
    $('#grid-container').css('padding', cellSpace); 
    $('#grid-container').css('boarder-radius', 0.02 * gridContainerWidth); 

    $('.grid-cell').css('width', cellSideLength);
    $('.grid-cell').css('height', cellSideLength);
    $('.grid-cell').css('boarder-radius', 0.02 * cellSideLength);
}

function newgame(){
	init();

	//generate two initial numbers when starts game
	generateOneNumber();
	generateOneNumber();

	score = 0;
}

function init(){
	
	for(var i = 0; i < 4; i++){
		
		for(var j = 0; j < 4; j++){
			
			var gridCell = $("#grid-cell-"+i+"-"+j);
			gridCell.css('top', getPosTop(i, j));
			gridCell.css("left", getPosLeft(i, j));
		}
	}
	
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
        hasConflited[i] = new Array();

		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
            hasConflited[i][j] = false;

		}
	}
	
	updateBoardView();
}

/**
 * [updateBoardView description]
 * @return {[type]}
 */
function updateBoardView(){
	
	$(".number-cell").remove();
	
	for(var i = 0; i < 4; i++){
		for (var j = 0; j < 4; j++){
            $("#grid-container").append( '<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>' );
			var theNumberCell = $('#number-cell-' + i + '-' + j);

			if (board[i][j] == 0) {
				theNumberCell.css("width", "0px");
				theNumberCell.css("height", "0px");
				theNumberCell.css("top", getPosTop(i, j) + cellSideLength/2);
				theNumberCell.css("left", getPosLeft(i, j) + cellSideLength/2);

			} else{
				theNumberCell.css("width", cellSideLength);
				theNumberCell.css("height", cellSideLength);
				theNumberCell.css("top", getPosTop(i, j));
				theNumberCell.css("left", getPosLeft(i, j));
				theNumberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
				theNumberCell.css("color", getNumberColor(board[i][j])); 
				theNumberCell.text( board[i][j]);
			}
            hasConflited[i][j] = false;
		}
	}

    $('.number-cell').css('line-height',  cellSideLength + 'px');
    $('.number-cell').css('font-size', 0.6 * cellSideLength + 'px');
}

function generateOneNumber () {
	// check is any empty cell
	if (nospace(board)) {
		return false;
	};

	//get a random valid slot
	var randomx = parseInt(Math.floor(Math.random() * 4));
	var randomy = parseInt(Math.floor(Math.random() * 4));

    var time = 0;
	while(time < 50){
		if(board[randomx][randomy] == 0) break;

		randomx = parseInt(Math.floor(Math.random() * 4));
		randomy = parseInt(Math.floor(Math.random() * 4));
        time ++;
	}

    if (time >= 50) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] == 0) {
                    randomx = i;
                    randomy = j;
                }
            }
       }
    }

	//random create 2 or 4
	var randNumber = Math.random() < 0.5 ? 2 : 4;

	//put random number into slot
	board[randomx][randomy] = randNumber;
	showNumberWithAnimation(randomx, randomy, randNumber);

	return true;
}

$(document).keydown( function( event ){

    switch( event.keyCode ){
        case 37: //left
            event.preventDefault();

            if( moveLeft() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
        case 38: //up
            event.preventDefault();

            if( moveUp() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
        case 39: //right
            event.preventDefault();

            if( moveRight() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
        case 40: //down
            event.preventDefault();

            if( moveDown() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
        default: //default
            break;
    }
});

document.addEventListener('touchstart', function (event){

    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
});

document.addEventListener('touchend', function (event){
    endX = event.changedTouches[0].pageX;
    endY = event.changedTouches[0].pageY;

    var deltaX = endX - startX;
    var deltaY = endY - startY;

    //ignore the small touch
    if( Math.abs( deltaX ) < 0.3 * documentWidth && Math.abs( deltaY ) < 0.3 * documentWidth )
        return;

    // X -axis
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        //right
        if (deltaX > 0){
            if( moveRight() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
        }else { //left
            if( moveLeft() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
        }

    // Y-axis
    }else {
        
        if (deltaY > 0) {   //down
            if( moveDown() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
        }else { //up
            if( moveUp() ){
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
        }
    }

});

function moveLeft () {
	
	if(!canMoveLeft(board))
		return false;

	for (var i = 0; i < 4; i++) {
		for	(var j = 1; j < 4; j++) {
			if (board[i][j] != 0) {
				for (var k = 0; k < j; k++) {
					if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {

						//move left
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;

						continue;
					}else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) 
                                && !hasConflited[i][k] ) {

						//move left
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;

						//add same number to score
                        score += board[i][k];
                        updateScore(score);

                        hasConflited[i][k] = true;
						continue;
					}
				}
			}
		}
	}
	
	setTimeout("updateBoardView()", 200);
	return true;
	
}

function moveRight(){
    if( !canMoveRight( board ) )
        return false;

    //moveRight
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2 ; j >= 0 ; j -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > j ; k -- ){

                    if( board[i][k] == 0 && noBlockHorizontal( i , j , k , board ) ){
                        showMoveAnimation( i , j , i , k );
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i , j , k , board ) 
                                && !hasConflited[i][k]){
                        showMoveAnimation( i , j , i , k);
                        board[i][k] *= 2;
                        board[i][j] = 0;

                        score += board[i][k];
                        updateScore(score);
                        hasConflited[i][k] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveUp(){

    if( !canMoveUp( board ) )
        return false;

    //moveUp
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ ){
            if( board[i][j] != 0 ){
                for( var k = 0 ; k < i ; k ++ ){

                    if( board[k][j] == 0 && noBlockVertical( j , k , i , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , k , i , board ) 
                                && !hasConflited[k][j]){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] *= 2;
                        board[i][j] = 0;

                        score += board[i][k];
                        updateScore(score);
                        hasConflited[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveDown(){
    if( !canMoveDown( board ) )
        return false;

    //moveDown
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > i ; k -- ){

                    if( board[k][j] == 0 && noBlockVertical( j , i , k , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , i , k , board ) 
                                && !hasConflited[k][j]){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] *= 2;
                        board[i][j] = 0;

                        score += board[i][k];
                        updateScore(score);
                        hasConflited[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function isgameover () {
	
	if (nospace(board) && nomove(board)){
		gameover();
	}
}

function gameover () {
	alert("Game Over");
}
