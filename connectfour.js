/**
 * Connectfour game.
 * connectfour.js
 *
 * @author Alejandro Sanchez Acosta <asanchez@mobsyte.com>
 * @file Connect four game
 * @copyright Alejandro Sanchez Acosta 2015
 */

/**
 * Connect Four Game
 * @type {object}
 */
var Game = {
	/**
	 * Create and initializates the board with 0 value or restart game.
	 * @member
	 * @return {array} The board.
	 */
	init: function() {
		this.board = [];
		this.columns = 7;
		this.rows = 5;
		this.turn = 1;

		for (i = 0; i < this.columns; i++) {
			this.board.push([]);
			this.board[i].push(new Array(5));
			for (j = 0; j < this.rows; j++) {
				this.board[i][j] = 0;
			}
		}

		$('.red').removeClass('red');
		$('.yellow').removeClass('yellow');

		return this.board;
	},

	/** 
	 * Introduce default values in the board.
	 * @return {array} The board.
	 */
	introduce: function(rowBoard, columnBoard) {
		if (this.board[rowBoard][columnBoard] == 0)
			this.board[rowBoard][columnBoard] = this.turn;

		return this.board;
	},

	/** 
	 * Drop the disc in the first position available in the column 
	 */
	drop: function(columnBoard) {
		for (i = this.rows - 1; i >= 0; i--) {
			if (this.board[columnBoard][i] == 0) {
				this.board[columnBoard][i] = this.turn;
				return i;
			}
		}
	},

	/** 
	 * Check four elements for the player
	 * @return {boolean} Four concurrences in player matches.
	 */
	checkBoard: function(player) {
		for (i = 0; i < this.columns; i++) {
			for (j = 0; j < this.rows; j++) {
				// Check 4 column elements with the same value
				if (this.board[i][j] == player 
					&& this.board[i+1][j] == player
					&& this.board[i+2][j] == player
					&& this.board[i+3][j] == player)

					return true;

				// Check 4 row elements with the same value
				if (this.board[i][j] == player 
					&& this.board[i][j+1] == player
					&& this.board[i][j+2] == player
					&& this.board[i][j+3] == player)

					return true;

				// Check diagonals with the same value
				if (i > 1 && this.board[i][j] == player 
					&& this.board[i-1][j+1] == player
					&& this.board[i-2][j+2] == player
					&& this.board[i-3][j+3] == player)

					return true;

				// Check diagonals with the same value
				if (i > 1 && this.board[i][j] == player 
					&& this.board[i+1][j-1] == player
					&& this.board[i+2][j-2] == player
					&& this.board[i+3][j-3] == player)

					return true;
			}
		}

		return false;
	},

	/**
	 * Draw red and yellow colors.
	 * @param {number} rowBoard - The rowBoard value.
	 * @param {number} columnBoard - The columnBoard value.
	 */
	draw: function(rowBoard, columnBoard) {
		this.turn == 1 ? color = "red" : color = "yellow";
		$('.'+rowBoard+'-'+columnBoard).addClass(color);
	},

	/** 
	 * Next turn change player 
	 */
	nextTurn: function() {
		this.turn == 1 ? this.turn = 2: this.turn = 1;
		$('.turn').text(this.turn);
	},

	/** 
	 * Check discs has winner and restart game or change turn 
	 */
	checkDiscs: function(_this, classes) {
		values = classes.split(" ");
		value = values[1].split("-");
		row = value[0];

		column = _this.drop(row);
		_this.draw(row, column);

		win = _this.checkBoard(_this.turn);

		if (win) {
			alert("Player " + _this.turn + " won");
			_this.init();
		} else {
			_this.nextTurn();
		}
	},

	/** 
	 * Console log the full board 
	 */
	print: function() {
		console.log(this.board);
	},

	/** 
	 * Ready function to start the game 
	 */
	ready: function() {
		var _this = this;
		$(document).ready(function () {
			$('.col-md-1').click(function() {
				classes = $(this).attr('class');
				_this.checkDiscs(_this, classes);
			});
		});
	}
};