//--------------------------------------------------------------------------------------
// siakoMobi_miniGame_DiceTreasure.js
//--------------------------------------------------------------------------------------
//======================================================================================
/*:
* @plugindesc (v1.00) MiniGame Dice Treasure 骰寶遊戲 - SIAKO.Mobi for RMMV Plugins Development
* 
* @author siakoMobi 

* @help
* ======================================================================================
* 插件 - 骰寶遊戲 - 說明
* Plugin  : MiniGame Dice Treasure (siakoMobi_miniGame_DiceTreasure.js)
* Author  : siakoMobi
* Version : v1.00
* Engin   : v1.5.0+ 
* Release : 2017.06.18
* ======================================================================================
*
*   【插件介紹】
*   這是一個簡易的骰寶博弈的小遊戲，玩法很簡單，
*   買大、買小和買豹子三種骰寶基本下注玩法，讓您
*   製作遊戲又添一方便之處。
*
*   【插件功能】
*   - 可藉由插件參數調整各項功能。
*
*   【插件使用方法】
*   - 將 js 資料夾內的 plugins 目錄的 siakoMobi_miniGame_DiceTreasure.js 
*     複製至您的遊戲對應目錄內。
*   - 將 img 資料夾內的 dice 資料夾全部複製至您遊戲專案對應的 img 資料夾內。
*
*   【插件指令】
*   - MiniGameDiceTreasure On
*
*   【控制字元】
*   - \SHOW[M] (顯示最低限注金額)
*
*   【關於 siakoMobi】
*   ★ SIAKO.Mobi RPG Maker MV engine Games 官方網站
*     https://siako.mobi
*
*   ★ SIAKO.Mobi：RPG Maker MV 遊戲製作教學 YT實況 
*     https://www.youtube.com/channel/UC8qJ2P8FC4uKzTrSVxE_dEg
*
*   ★ SIAKO.Mobi：RPG Maker MV 遊戲製作教學
*     https://www.youtube.com/playlist?list=PLaT5a8b-evLGkql_g6HkCs4pHK_62a1fB
*
*   ★ SIAKO.Mobi：RPG Maker MV Plugin Scripting 腳本教學漸進篇
*     https://www.youtube.com/playlist?list=PLaT5a8b-evLHPRhWhsp12bKlKLoalyji8
*
*   ★ SIAKO.Mobi：RPG Maker MV Plugin Scripting 腳本教學進階篇
*     https://www.youtube.com/playlist?list=PLaT5a8b-evLELNWRf6N6B72q1xDM8yVzJ
*
*   ★ SIAKO.Mobi：RPG Maker MV Plugin Scripting 腳本教學 PIXI V4 運用篇
*     https://www.youtube.com/playlist?list=PLaT5a8b-evLG1M6RWSLqppETPVBePQI1P
*
*   ★ 巴哈社團「掛RM賣其他」
*     http://guild.gamer.com.tw/guild.php?sn=11222
*
*
*   非常感謝您使用 siakoMobi MV 插件，希望對您製作遊戲有更大的幫助！
*
* ======================================================================================
* 更新日誌 - siakoMobi MiniGame Dice Treasure
* ======================================================================================
*
* 2017.06.18 : Version 1.00: 
* - 插件完成
*
* ======================================================================================
* End
* ======================================================================================
*
* @param assignBackgroundImage
* @text 選擇遊戲背景圖片
* @type file
* @dir img/dice/
* @require 1
* @desc 可以更改遊戲背景圖片檔案
* 預設值：dice_bg
* @default dice_bg
*
* @param assignBGM
* @text 選擇遊戲背景音樂
* @type file
* @dir audio/bgm/
* @require 1
*
* @param playBigName
* @text 遊戲選擇視窗的選項「買大」文字
* @type text
* @desc 可以更改遊戲選擇視窗的選項「買大」的文字項目
* 預設值：買大
* @default 買大
*
* @param playSmallName
* @text 遊戲選擇視窗的選項「買小」文字
* @type text
* @desc 可以更改遊戲選擇視窗的選項「買小」文字
* 預設值：買小
* @default 買小
*
* @param playLeopardName
* @text 遊戲選擇視窗的選項「買圍骰」文字
* @type text
* @desc 可以更改遊戲選擇視窗的選項「買圍骰」文字
* 預設值：買圍骰
* @default 買圍骰
*
* @param playCancelName
* @text 遊戲選擇視窗的選項「不玩了！」文字
* @type text
* @desc 可以更改遊戲選擇視窗的選項「不玩了！」文字
* 預設值：不玩了！
* @default 不玩了！
*
* @param BetHundredName
* @text 遊戲下注視窗的選項「下注 100」文字
* @type text
* @desc 可以更改遊戲下注視窗的選項「下注 100」文字
* 預設值：下注 100
* @default 下注 100
*
* @param BetThousandName
* @text 遊戲下注視窗的選項「下注 1000」文字
* @type text
* @desc 可以更改遊戲下注視窗的選項「下注 1000」文字
* 預設值：下注 1000
* @default 下注 1000
*
* @param BetMillionName
* @text 遊戲下注視窗的選項「下注 10000」文字
* @type text
* @desc 可以更改遊戲下注視窗的選項「下注 10000」文字
* 預設值：下注 10000
* @default 下注 10000
*
* @param BetCancelName
* @text 遊戲下注視窗的選項「重選押寶」文字
* @type text
* @desc 可以更改遊戲下注視窗的選項「重選押寶」文字
* 預設值：重選押寶
* @default 重選押寶
*
* @param diceName
* @text 骰點視窗顯示名稱
* @type text
* @desc 可以更改骰點視窗顯示名稱
* 預設值：骰出點數
* @default 骰出點數
*
* @param diceWinShow
* @text 是否顯示骰點視窗
* @type boolean
* @on 顯示
* @off 隱藏
* @desc 可以更改骰點視窗是否顯示
* 預設值：false
* @default false
*
* @param goldName
* @text 金錢視窗顯示的貨幣單位名稱
* @type text
* @desc 可以更改金錢視窗顯示的貨幣單位名稱
* 預設值：金錢
* @default 金錢
*
* @param diceMsgMoneyLimit
* @text 賭本低於限制的訊息文字
* @type text
* @desc 可以更改賭本低於限制的訊息文字
* 預設值：你的賭本不夠賭了！
* @default 你的賭本不夠賭了！
*
* @param diceMsgMoneyEmpty
* @text 已無金錢的訊息文字
* @type text
* @desc 可以更改顯示已無金錢的訊息文字
* 預設值：你已經輸光了！
* @default 你已經輸光了！
*
* @param diceMsgCancel
* @text 離開不賭了的訊息文字
* @type text
* @desc 可以更改離開不賭了的訊息文字
* 預設值：下次再來玩吧！
* @default 下次再來玩吧！
*
* @param goldWinShow
* @text 是否顯示金錢視窗
* @type boolean
* @on 顯示
* @off 隱藏
* @desc 可以更改是否顯示金錢視窗
* 預設值：true
* @default true
*
* @param goldWin_X_Axis
* @text 金錢視窗的 X 軸位置
* @type number
* @desc 可以更改金錢視窗的 X 軸位置
* 預設值：0
* @default 0
*
* @param goldWin_Y_Axis
* @text 金錢視窗的 Y 軸位置
* @type number
* @desc 可以更改金錢視窗的 Y 軸位置
* 預設值：0
* @default 0
*
* @param scoreWin_X_Axis
* @text 骰點點數視窗的 X 軸位置
* @type number
* @desc 可以更改骰點點數視窗的 X 軸位置
* 預設值：240
* @default 240
*
* @param scoreWin_Y_Axis
* @text 骰點點數視窗的 Y 軸位置
* @type number
* @desc 可以更改骰點點數視窗的 Y 軸位置
* 預設值：0
* @default 0
*
* @param commandWin_X_Axis
* @text 遊戲選擇視窗的 X 軸位置
* @type number
* @desc 可以更改遊戲選擇視窗的 X 軸位置
* 預設值：0
* @default 0
*
* @param commandWin_Y_Axis
* @text 遊戲選擇視窗的 Y 軸位置
* @type number
* @desc 可以更改遊戲選擇視窗的 Y 軸位置
* 預設值：0
* @default 400
*
* @param commandWin_Width
* @text 遊戲選擇視窗的寬度
* @type number
* @desc 可以更改遊戲選擇視窗的寬度大小
* 預設值：200
* @default 200
*
* @param commandWin_Height
* @text 遊戲選擇視窗的高度
* @type number
* @desc 可以更改遊戲選擇視窗的高度大小
* 預設值：185
* @default 185
*
* @param commandBetWin_X_Axis
* @text 遊戲下注視窗的 X 軸位置
* @type number
* @desc 可以更改遊戲下注視窗的 X 軸位置
* 預設值：200
* @default 200
*
* @param commandBetWin_Y_Axis
* @text 遊戲下注視窗的 Y 軸位置
* @type number
* @desc 可以更改遊戲下注視窗的 Y 軸位置
* 預設值：400
* @default 400
*
* @param commandBetWin_Width
* @text 遊戲下注視窗的寬度大小
* @type number
* @desc 可以更改遊戲下注視窗的寬度大小
* 預設值：200
* @default 200
*
* @param commandBetWin_Height
* @text 遊戲下注視窗的高度大小
* @type number
* @desc 可以更改遊戲下注視窗的高度大小
* 預設值：185
* @default 185
*
* @param howMuchMoney
* @text 骰寶最低限注金額
* @type number
* @desc 可以更改骰寶最低限注金額
* 預設值：100
* @default 100
*
* @param useMoneyValue
* @text 最低限注金額值代入遊戲變數編號
* @type number
* @desc 可以更改最低限注金額值代入遊戲變數編號
* 預設值：1
* @default 1
*
* @param setDiceBility
* @text 骰子點數大小出現機率
* @type number
* @decimals 2 
* @desc 可以更改骰子點數大小出現機率 (100=正常, 值越低=出現率越小，值越大=出現率越大) 預設值：100
* @default 100
*
* @param setIsDice
* @text 設定永遠出現圍骰
* @type boolean
* @on 開啟
* @off 關閉
* @desc 可以設定永遠出現圍骰的開關
* 預設值：false
* @default false
*
* @param setAniTreasure
* @text 指定骰盅的動畫編號
* @type animation
* @desc 可以更改指定骰盅的動畫編號
* 預設值：1
* @default 1
* @require 1
*
* @param setAniDice1
* @text 指定骰點 1 的動畫編號
* @type animation
* @desc 可以更改指定骰點 1 的動畫編號
* 預設值：2
* @default 2
* @require 1
*
* @param setAniDice2
* @text 指定骰點 2 的動畫編號
* @type animation
* @desc 可以更改指定骰點 2 的動畫編號
* 預設值：3
* @default 3
* @require 1
*
* @param setAniDice3
* @text 指定骰點 3 的動畫編號
* @type animation
* @desc 可以更改指定骰點 3 的動畫編號
* 預設值：4
* @default 4
* @require 1
*
* @param setAniDice4
* @text 指定骰點 4 的動畫編號
* @type animation
* @desc 可以更改指定骰點 4 的動畫編號
* 預設值：5
* @default 5
* @require 1
*
* @param setAniDice5
* @text 指定骰點 5 的動畫編號
* @type animation
* @desc 可以更改指定骰點 5 的動畫編號
* 預設值：6
* @default 6
* @require 1
*
* @param setAniDice6
* @text 指定骰點 6 的動畫編號
* @type animation
* @desc 可以更改指定骰點 6 的動畫編號
* 預設值：7
* @default 7
* @require 1
*
*/
//======================================================================================
/***************************************************************************************
 @ plugins  : MiniGame Dice Treasure
 @ filename : siakoMobi_miniGame_DiceTreasure.js
 @ version  : v1.00
 @ engin    : v1.5.0+ 
 @ author   : siakoMobi  
 @ release  : 2017.06.18
 @ comment  : 骰寶遊戲
***************************************************************************************/ 
//====================================================================================== 
// comment  : 宣告物件變數定義
//====================================================================================== 

'use strict'; 

var siakoMobi = siakoMobi || {};
siakoMobi.miniGame_DiceTreasure = siakoMobi.miniGame_DiceTreasure || {};

var Imported = Imported || {};
Imported["siakoMobi miniGame DiceTreasure"] = 1.00;

siakoMobi._lastIndexOf = document.currentScript.src.lastIndexOf( '/' );
siakoMobi._indexOf     = document.currentScript.src.indexOf( '.js' );
siakoMobi._getJSName   = document.currentScript.src.substring( siakoMobi._lastIndexOf + 1, siakoMobi._indexOf );

(function( SM ){

    //==================================================================================
    // comment  : 檢查引擎版本
    //================================================================================== 
    "use strict";

    if( !Utils.RPGMAKER_VERSION || Utils.RPGMAKER_VERSION < '1.5.0' ) {
        alert( "使用 (siakoMobi_miniGame_DiceTreasure) 插件，必須更新您的 RPG Maker MV 版本為 v1.5.0 以上！" );
        return;
    }

    //==================================================================================
    // comment  : 插件參數定義
    //==================================================================================  
    const params = PluginManager.parameters( siakoMobi._getJSName );    
    SM._assignBackgroundImage = String( params['assignBackgroundImage'] );
    SM._assignBGM = String( params['assignBGM'] );
    SM._playBigName = String( params['playBigName'] || '買大' );
    SM._playSmallName = String( params['playSmallName'] || '買小' );
    SM._playLeopardName = String( params['playLeopardName'] || '買豹子' );
    SM._playCancelName = String( params['playCancelName'] || '不玩了！' );
    SM._BetHundredName = String( params['BetHundredName'] || '下注 100' );
    SM._BetThousandName = String( params['BetThousandName'] || '下注 1000' );
    SM._BetMillionName = String( params['BetMillionName'] || '下注 10000' );
    SM._BetCancelName = String( params['BetCancelName'] || '重選押寶' );
	SM._diceName = String( params['diceName'] || '骰出點數' );      
	SM._diceWinShow = eval( String( params['diceWinShow'] ) );      
	SM._goldName = String( params['goldName'] || '金錢' );     
	SM._diceMsgMoneyLimit = String( params['diceMsgMoneyLimit'] || '你的賭本不夠賭了！' ); 
	SM._diceMsgMoneyEmpty = String( params['diceMsgMoneyEmpty'] || '你已經輸光了！' ); 
	SM._diceMsgCancel = String( params['diceMsgCancel'] || '下次再來玩吧！' ); 	 
	SM._goldWinShow = eval( String( params['goldWinShow'] ) );      
	SM._goldWin_X_Axis = Number( params['goldWin_X_Axis'] || 500 );
	SM._goldWin_Y_Axis = Number( params['goldWin_Y_Axis'] || 0 );    
	SM._scoreWin_X_Axis = Number( params['scoreWin_X_Axis'] || 0 );
	SM._scoreWin_Y_Axis = Number( params['scoreWin_Y_Axis'] || 0 );   
	SM._commandWin_X_Axis = Number( params['commandWin_X_Axis'] || 0 );
	SM._commandWin_Y_Axis = Number( params['commandWin_Y_Axis'] || 400 );
	SM._commandWin_Width = Number( params['commandWin_Width'] || 200 );
	SM._commandWin_Height = Number( params['commandWin_Height'] || 200 );	
	SM._commandBetWin_X_Axis = Number( params['commandBetWin_X_Axis'] || 0 );
	SM._commandBetWin_Y_Axis = Number( params['commandBetWin_Y_Axis'] || 400 );
	SM._commandBetWin_Width = Number( params['commandBetWin_Width'] || 200 );
	SM._commandBetWin_Height = Number( params['commandBetWin_Height'] || 200 );		 	
	SM._howMuchMoney = Number( params['howMuchMoney'] || 100 );		 	
	SM._useMoneyValue = Number( params['useMoneyValue'] || 1 );		 	
	SM._setDiceBility = Number( params['setDiceBility'] || 100 );		 	
	SM._setIsDice = eval( String( params['setIsDice'] ) );
	SM._setAniTreasure = Number( params['setAniTreasure'] || 1 );	
	SM._setAniDice1 = Number( params['setAniDice1'] || 2 );	
	SM._setAniDice2 = Number( params['setAniDice2'] || 3 );	
	SM._setAniDice3 = Number( params['setAniDice3'] || 4 );	
	SM._setAniDice4 = Number( params['setAniDice4'] || 5 );	
	SM._setAniDice5 = Number( params['setAniDice5'] || 6 );	
	SM._setAniDice6 = Number( params['setAniDice6'] || 7 );	

    //==================================================================================
    // comment  : ImageManager 
    //==================================================================================
	ImageManager.loadDice = function(filename, hue) {
	    return this.loadBitmap('img/dice/', filename, hue, true);
	};

    //==================================================================================
    // comment  : Object Structs
    //==================================================================================
	SM.Gems = {
		structs : {
			Game_Interpreter : {
				pluginCommand : Game_Interpreter.prototype.pluginCommand,
			},
			Game_System : {
				initialize : Game_System.prototype.initialize,
			},
			Window_Base : {
				convertEscapeCharacters : Window_Base.prototype.convertEscapeCharacters,
			}					
		}
	}

    //==================================================================================
    // comment  : Game_System
    //================================================================================== 
	Game_System.prototype.initialize = function(){
		SM.Gems.structs.Game_System.initialize.call(this);	
		this._minigameCasinoScore = 0;   	 	
	}

    //==================================================================================
    // comment  : Game_Interpreter
    //================================================================================== 
	Game_Interpreter.prototype.pluginCommand = function(command, args){
		
		SM.Gems.structs.Game_Interpreter.pluginCommand.call(this, arguments);

		switch( command ){
			case 'MiniGameDiceTreasure':
				if( args[0] === 'On' ){
					SceneManager.push(Scene_CasinoStart);
				}
				break;
		}

	}

    //==================================================================================
    // comment  : Window_Base
    //==================================================================================
    Window_Base.prototype.convertEscapeCharacters = function(text) {
        var text = SM.Gems.structs.Window_Base.convertEscapeCharacters.call(this, text);
        		   $gameVariables.setValue( SM._useMoneyValue, SM._howMuchMoney );
       		text = text.replace(/\x1bSHOW\[(M+)\]/gi, function() {          
            	return $gameVariables.value( SM._useMoneyValue );
        }.bind(this));
        return text;
    };

    //==================================================================================
    // comment  : Window_Score
    //================================================================================== 
	class Window_Score extends Window_Base{

		constructor(){
			super();
		}

		initialize( x, y ){
		    let width = this.windowWidth();
		    let height = this.windowHeight();	    
		    Window_Base.prototype.initialize.call(this, x, y, width, height);	    
		    this.refresh();
		}

		refresh(){
		    let x = this.textPadding();
		    let width = this.contents.width - this.textPadding() * 2;
		    this.contents.clear();
		    this.drawTextEx( SM._diceName + '：' + String( $gameSystem._minigameCasinoScore ), 0, 0 );
		}

		windowWidth(){
		    return 240;
		};

		windowHeight(){
		    return this.fittingHeight(1);
		};

		open(){
		    this.refresh();
		    Window_Base.prototype.open.call(this);		
		}

	}

    //==================================================================================
    // comment  : Window_PlayerGold
    //================================================================================== 
	class Window_PlayerGold extends Window_Base{
		

		constructor(){
			super();
		}

		initialize( x, y ){
		    let width = this.windowWidth();
		    let height = this.windowHeight();	    
		    Window_Base.prototype.initialize.call(this, x, y, width, height);	    
		    this.refresh();
		}

		refresh(){
		    let x = this.textPadding();
		    let width = this.contents.width - this.textPadding() * 2;
		    this.contents.clear();
		    this.drawTextEx( SM._goldName + '：' + String( $gameParty.gold() ), 0, 0 );
		}

		windowWidth(){
		    return 240;
		};

		windowHeight(){
		    return this.fittingHeight(1);
		};

		open(){
		    this.refresh();
		    Window_Base.prototype.open.call(this);		
		}

	}

    //==================================================================================
    // comment  : Window_CasinoCommand
    //================================================================================== 
	class Window_CasinoCommand extends Window_Command{

		constructor(){
			super(); 
		}

		initialize( x, y ){	
			
		    let width = this.windowWidth();
		    let height = this.windowHeight();	    					
			Window_Command.prototype.initialize.call(this, x, y, width, height);
	    	this.selectLast();			
			this.refresh();
			this._lastCommandSymbol = null;
		}

		windowWidth(){			
			return 300;
		}

		windowHeight(){			
			return 300;
		}

		numVisibleRows(){			
			return this.maxItems();
		}

		maxCols(){
			return 1;
		}

		processCursorMove(){
		    if (this.isCursorMovable()) {
		        var lastIndex = this.index();
		        if (Input.isRepeated('down')) {
		            this.cursorDown(Input.isTriggered('right'));
		        }
		        if (Input.isRepeated('up')) {
		            this.cursorUp(Input.isTriggered('left'));
		        }
		        if (this.index() !== lastIndex) {
		            SoundManager.playCursor();
		        }
		    }
		}

		makeCommandList(){
			this.addMainCommands();
		}

		addMainCommands(){
			this.addCommand( SM._playBigName,     'big',     true );
			this.addCommand( SM._playSmallName,   'small',   true );
			this.addCommand( SM._playLeopardName, 'leopard', true );
			this.addCommand( SM._playCancelName,  'cancel',  true );
		}

		processOk(){
		    Window_CasinoCommand._lastCommandSymbol = this.currentSymbol();
		    Window_Command.prototype.processOk.call(this);			
		}

		selectLast(){
	    	this.selectSymbol(Window_CasinoCommand._lastCommandSymbol);
		}

	}

    //==================================================================================
    // comment  : Window_BetCommand
    //================================================================================== 
	class Window_BetCommand extends Window_Command{

		constructor(){
			super(); 
		}

		initialize( x, y ){	
			
		    let width = this.windowWidth();
		    let height = this.windowHeight();	    					
			Window_Command.prototype.initialize.call(this, x, y, width, height);
	    	this.selectLast();			
			this.refresh();
			this._lastCommandSymbol = null;
		}

		windowWidth(){			
			return 300;
		}

		windowHeight(){			
			return 300;
		}

		numVisibleRows(){			
			return this.maxItems();
		}

		maxCols(){
			return 1;
		}

		processCursorMove(){
		    if (this.isCursorMovable()) {
		        var lastIndex = this.index();
		        if (Input.isRepeated('down')) {
		            this.cursorDown(Input.isTriggered('right'));
		        }
		        if (Input.isRepeated('up')) {
		            this.cursorUp(Input.isTriggered('left'));
		        }
		        if (this.index() !== lastIndex) {
		            SoundManager.playCursor();
		        }
		    }
		}

		makeCommandList(){
			this.addMainCommands();
		}

		addMainCommands(){
			this.addCommand( SM._BetHundredName,  'Hundred',  true );
			this.addCommand( SM._BetThousandName, 'Thousand', true );
			this.addCommand( SM._BetMillionName,  'Million',  true );
			this.addCommand( SM._BetCancelName,   'cancel',   true );
		}

		processOk(){
		    Window_BetCommand._lastCommandSymbol = this.currentSymbol();
		    Window_Command.prototype.processOk.call(this);			
		}

		selectLast(){
	    	this.selectSymbol(Window_BetCommand._lastCommandSymbol);
		}

	}

    //==================================================================================
    // comment  : Scene_CasinoStart
    //================================================================================== 
	class Scene_CasinoStart extends Scene_MenuBase{

		constructor(){
			super();
		}

		initialize(){
			Scene_MenuBase.prototype.initialize.call(this);       		
		}

		create(){
			Scene_MenuBase.prototype.create.call(this);
			this.createBackground();
			this.createWindowScore();
			this.createPlayerGold();			
			this.loadBGM();
			this.createCommandCasinoWindow();
		}

		createBackground(){
		    this._background = new Sprite();
		    this._background.bitmap = ImageManager.loadDice( SM._assignBackgroundImage );
		    this.addChild( this._background );			
		}

		loadBGM(){
            var _bigMapMenuBgm = {
                                  name: SM._assignBGM,
                                volume: 100,
                                 pitch: 0,
                                   pan: 0
                                 };
            AudioManager.playBgm( _bigMapMenuBgm );
		}

		createCommandBetWindow(){
		    this._commandBetWindow = new Window_BetCommand();
		    this._commandBetWindow.visible = true; 	
		    this._commandBetWindow.x = SM._commandBetWin_X_Axis;
		    this._commandBetWindow.y = SM._commandBetWin_Y_Axis;
		    this._commandBetWindow.width = SM._commandBetWin_Width;
		    this._commandBetWindow.height = SM._commandBetWin_Height;
			this._commandBetWindow.setHandler('Hundred',   this.commandHundred.bind(this));
			this._commandBetWindow.setHandler('Thousand',  this.commandThousand.bind(this));
			this._commandBetWindow.setHandler('Million',   this.commandMillion.bind(this));
			this._commandBetWindow.setHandler('cancel',    this.commandBetCancel.bind(this));
		    this.addChild(this._commandBetWindow);
		}

		commandHundred(){
			if( $gameParty.gold() < SM._howMuchMoney ){
				SoundManager.playBuzzer();
				this._commandBetWindow.activate();
			}else{			
				SM._howMuchMoney = 100;
				$gameParty.gainGold(-SM._howMuchMoney);
				SceneManager.push(Scene_MinigameCasino);
			}
		}

		commandThousand(){
			if( $gameParty.gold() < (SM._howMuchMoney+1000) ){
				SoundManager.playBuzzer();
				this._commandBetWindow.activate();
			}else{			
				SM._howMuchMoney = 1000;
				$gameParty.gainGold(-SM._howMuchMoney);
				SceneManager.push(Scene_MinigameCasino);	
			}		
		}

		commandMillion(){
			if( $gameParty.gold() < (SM._howMuchMoney+10000) ){
				SoundManager.playBuzzer();
				this._commandBetWindow.activate();
			}else{
				SM._howMuchMoney = 10000;
				$gameParty.gainGold(-SM._howMuchMoney);
				SceneManager.push(Scene_MinigameCasino);
			}
		}

		commandBetCancel(){
			this._commandBetWindow.close();
		    this._commandBetWindow.deselect();
		    this._commandCasinoWindow.activate();			
		}
								
		createCommandCasinoWindow(){
		    this._commandCasinoWindow = new Window_CasinoCommand();
		    this._commandCasinoWindow.visible = true; 	
		    this._commandCasinoWindow.x = SM._commandWin_X_Axis;
		    this._commandCasinoWindow.y = SM._commandWin_Y_Axis;
		    this._commandCasinoWindow.width = SM._commandWin_Width;
		    this._commandCasinoWindow.height = SM._commandWin_Height;
			this._commandCasinoWindow.setHandler('big',     this.commandBig.bind(this));
			this._commandCasinoWindow.setHandler('small',   this.commandSmall.bind(this));
			this._commandCasinoWindow.setHandler('leopard', this.commandLeopard.bind(this));
			this._commandCasinoWindow.setHandler('cancel',  this.commandCancel.bind(this));
		    this.addChild(this._commandCasinoWindow);
		}

		commandBig(){
			if( $gameParty.gold() < SM._howMuchMoney ){
				$gameMessage.add( SM._diceMsgMoneyLimit );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else if( $gameParty.gold() == 0 ){
				$gameMessage.add( SM._diceMsgMoneyEmpty );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else{						
				siakoMobi._diceType = 'Big'; 
				this.createCommandBetWindow();					
			}
		}

		commandSmall(){
			if( $gameParty.gold() < SM._howMuchMoney ){
				$gameMessage.add( SM._diceMsgMoneyLimit );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else if( $gameParty.gold() == 0 ){
				$gameMessage.add( SM._diceMsgMoneyEmpty );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else{			
				siakoMobi._diceType = 'Small'; 
				this.createCommandBetWindow();	
			}	
		}

		commandLeopard(){
			if( $gameParty.gold() < SM._howMuchMoney ){
				$gameMessage.add( SM._diceMsgMoneyLimit );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else if( $gameParty.gold() == 0 ){
				$gameMessage.add( SM._diceMsgMoneyEmpty );
				$gameSystem.replayBgm();
				SceneManager.pop();
			}else{			
				siakoMobi._diceType = 'Leopard'; 
				this.createCommandBetWindow();	
			}				
		}

		commandCancel(){
			$gameMessage.add( SM._diceMsgCancel );			
			$gameSystem.replayBgm();
			SceneManager.pop();
		}

		createWindowScore(){
			this._windowScore = new Window_Score();
			this._windowScore.visible = SM._diceWinShow;			
			this._windowScore.x = SM._scoreWin_X_Axis;
			this._windowScore.y = SM._scoreWin_Y_Axis;
			this.addChild( this._windowScore );

		}

		createPlayerGold(){
			this._windowPlayerGold = new Window_PlayerGold();
			this._windowPlayerGold.visible = SM._goldWinShow;			
			this._windowPlayerGold.x = SM._goldWin_X_Axis;
			this._windowPlayerGold.y = SM._goldWin_Y_Axis;			
			this.addChild( this._windowPlayerGold );

		}
		
		update(){
			Scene_MenuBase.prototype.update.call(this);				
		}

		terminate(){
			Scene_MenuBase.prototype.terminate.call(this);
		}

		stop(){
			Scene_MenuBase.prototype.stop.call(this);
		}

	}

    //==================================================================================
    // comment  : Scene_MinigameCasino
    //================================================================================== 
	class Scene_MinigameCasino extends Scene_Base{

		constructor(){
			super();
		}

		initialize(){
			Scene_Base.prototype.initialize.call(this);
			this._effectPlaying = true;
			this._effectPlaying2 = true;
	        this._resultShowing = false;	
	        this._wait = 0;
	        this._randomNum = 0;
	        this._effectSprite = null;
	        this._windowFadeSprite = null;
	        this._screenFadeOutDuration = 0;
	        this._screenFadeInDuration = 0;        		
		}

		create(){
			Scene_Base.prototype.create.call(this);
			this.createBackground();
			this.createWindowScore();
			this.createPlayerGold();

	        this._rankSprite = new Sprite_DiceEffect(410,378);
	        this._rankSprite.keepDisplay(true);
	        this.addChild(this._rankSprite);	

	        this._rankSprite1 = new Sprite_DiceEffect(350,400);
	        this._rankSprite1.keepDisplay(true);
	        this.addChild(this._rankSprite1);

	        this._rankSprite2 = new Sprite_DiceEffect(400,420);
	        this._rankSprite2.keepDisplay(true);
	        this.addChild(this._rankSprite2);	

	        this._rankSprite3 = new Sprite_DiceEffect(450,420);
	        this._rankSprite3.keepDisplay(true);
	        this.addChild(this._rankSprite3);

	        this._effectSprite = new Sprite_DiceEffect();
	        this._effectSprite.x = Graphics.boxWidth / 2;
	        this._effectSprite.y = Graphics.boxHeight / 2;
	        this.addChild(this._effectSprite);
		}

		createBackground(){
		    this._background = new Sprite();
		    this._background.bitmap = ImageManager.loadDice( SM._assignBackgroundImage );
		    this.addChild( this._background );			
		}

		createWindowScore(){
			this._windowScore = new Window_Score();
			this._windowScore.x = SM._scoreWin_X_Axis;
			this._windowScore.y = SM._scoreWin_Y_Axis;	
			this._windowScore.visible = SM._diceWinShow;					
			this.addChild( this._windowScore );
		}

		createPlayerGold(){
			this._windowPlayerGold = new Window_PlayerGold();
			this._windowPlayerGold.x = SM._goldWin_X_Axis;
			this._windowPlayerGold.y = SM._goldWin_Y_Axis;
			this._windowPlayerGold.visible = SM._goldWinShow;			
			this.addChild( this._windowPlayerGold );
		}

		createDicePoint(){
			if( Number(siakoMobi._dice1) == Number(siakoMobi._dice2) && Number(siakoMobi._dice2) == Number(siakoMobi._dice3) && Number(siakoMobi._dice3) == Number(siakoMobi._dice1) ){ SM._changDicePoint = Number(siakoMobi._dice1); 
			}else{ SM._changDicePoint = $gameSystem._minigameCasinoScore; }

		    this._dicepointImg = new Sprite();
		    this._dicepointImg.bitmap = ImageManager.loadDice( 'dice_point_' + SM._changDicePoint );
		    this._dicepointImg.x = 300;
		    this._dicepointImg.y = 30;
		    this.addChild( this._dicepointImg );	

			if( Number(siakoMobi._dice1) == Number(siakoMobi._dice2) && Number(siakoMobi._dice2) == Number(siakoMobi._dice3) && Number(siakoMobi._dice3) == Number(siakoMobi._dice1) ){ SM._changDicePointText = 'dice_point_text_leopard'; 
			}else if( $gameSystem._minigameCasinoScore > 10 && $gameSystem._minigameCasinoScore < 18 ){ SM._changDicePointText = 'dice_point_text_big';
			}else if( $gameSystem._minigameCasinoScore > 4 && $gameSystem._minigameCasinoScore < 11 ){ SM._changDicePointText = 'dice_point_text_small'; }

		    this._dicepointText = new Sprite();
		    this._dicepointText.bitmap = ImageManager.loadDice( SM._changDicePointText );
		    this._dicepointText.x = 500;
		    this._dicepointText.y = 50;
		    this.addChild( this._dicepointText );		    			
		}

		createDiceResult( result ){
		    this._diceresultImg = new Sprite();
		    this._diceresultImg.bitmap = ImageManager.loadDice( ( result == 1 ) ? 'dice_point_text_winner' : 'dice_point_text_lost' );
		    this._diceresultImg.x = 300;
		    this._diceresultImg.y = 200;
		    this.addChild( this._diceresultImg );				
		}
	
		update(){
			Scene_Base.prototype.update.call(this);		
			this.resWindowScore();
			this.resWindowPlayerGold();
			this._wait++;

			let IsDicebility = Math.floor(Math.random() * (SM._setAniDice6 - SM._setAniDice1 + 1)) + SM._setAniDice6;
			let diceTypebility = Math.random() * SM._setDiceBility;
			if( SM._setIsDice == true ){
				var maxNum = ( diceTypebility > 49 ) ? maxNum = IsDicebility : maxNum = IsDicebility;  
				var minNum = ( diceTypebility < 51 ) ? minNum = IsDicebility : minNum = IsDicebility;				
			}else{
				var maxNum = ( diceTypebility > 49 ) ? maxNum = SM._setAniDice6 : maxNum = SM._setAniDice5;  
				var minNum = ( diceTypebility < 51 ) ? minNum = SM._setAniDice1 : minNum = SM._setAniDice2;
			}

			this._randomNum1 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
			this._randomNum2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
			this._randomNum3 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

			( this._randomNum1 == SM._setAniDice1 ) ? siakoMobi._dice1 = 1 : false;
			( this._randomNum1 == SM._setAniDice2 ) ? siakoMobi._dice1 = 2 : false;
			( this._randomNum1 == SM._setAniDice3 ) ? siakoMobi._dice1 = 3 : false;
			( this._randomNum1 == SM._setAniDice4 ) ? siakoMobi._dice1 = 4 : false;
			( this._randomNum1 == SM._setAniDice5 ) ? siakoMobi._dice1 = 5 : false;
			( this._randomNum1 == SM._setAniDice6 ) ? siakoMobi._dice1 = 6 : false;
			
			( this._randomNum2 == SM._setAniDice1 ) ? siakoMobi._dice2 = 1 : false;
			( this._randomNum2 == SM._setAniDice2 ) ? siakoMobi._dice2 = 2 : false;
			( this._randomNum2 == SM._setAniDice3 ) ? siakoMobi._dice2 = 3 : false;
			( this._randomNum2 == SM._setAniDice4 ) ? siakoMobi._dice2 = 4 : false;
			( this._randomNum2 == SM._setAniDice5 ) ? siakoMobi._dice2 = 5 : false;
			( this._randomNum2 == SM._setAniDice6 ) ? siakoMobi._dice2 = 6 : false;

			( this._randomNum3 == SM._setAniDice1 ) ? siakoMobi._dice3 = 1 : false;
			( this._randomNum3 == SM._setAniDice2 ) ? siakoMobi._dice3 = 2 : false;
			( this._randomNum3 == SM._setAniDice3 ) ? siakoMobi._dice3 = 3 : false;
			( this._randomNum3 == SM._setAniDice4 ) ? siakoMobi._dice3 = 4 : false;
			( this._randomNum3 == SM._setAniDice5 ) ? siakoMobi._dice3 = 5 : false;
			( this._randomNum3 == SM._setAniDice6 ) ? siakoMobi._dice3 = 6 : false;
									
			if( this._effectPlaying ){
				this._rankSprite.startAnimation($dataAnimations[SM._setAniTreasure], false, 0);
			}

			this._effectPlaying = false;

			if( this._wait > 160 && this._effectPlaying == false ){
		        this._effectSprite.allRemove();
		        this._rankSprite.allRemove();

		        if( this._effectPlaying2 ){

		        	this._rankSprite1.startAnimation($dataAnimations[this._randomNum1], false, 0);
					this._rankSprite2.startAnimation($dataAnimations[this._randomNum2], false, 0);
					this._rankSprite3.startAnimation($dataAnimations[this._randomNum3], false, 0);
					$gameSystem._minigameCasinoScore = Number(siakoMobi._dice1+siakoMobi._dice2+siakoMobi._dice3);

					if( siakoMobi._diceType == 'Big' ){
						if( Number(siakoMobi._dice1) == Number(siakoMobi._dice2) && Number(siakoMobi._dice2) == Number(siakoMobi._dice3) && Number(siakoMobi._dice3) == Number(siakoMobi._dice1) ){
							this.createDicePoint();	
							this.createDiceResult(0);													
						}else if( $gameSystem._minigameCasinoScore > 10 && $gameSystem._minigameCasinoScore < 18 ){
							$gameParty.gainGold(SM._howMuchMoney*2);
							this.createDicePoint();
							this.createDiceResult(1);							
						}else{
							this.createDicePoint();	
							this.createDiceResult(0);												
						}
					}

					if( siakoMobi._diceType == 'Small' ){
						if( Number(siakoMobi._dice1) == Number(siakoMobi._dice2) && Number(siakoMobi._dice2) == Number(siakoMobi._dice3) && Number(siakoMobi._dice3) == Number(siakoMobi._dice1) ){
							this.createDicePoint();	
							this.createDiceResult(0);	
						}else if( $gameSystem._minigameCasinoScore > 4 && $gameSystem._minigameCasinoScore < 11 ){
							$gameParty.gainGold(SM._howMuchMoney*2);
							this.createDicePoint();
							this.createDiceResult(1);																	
						}else{
							this.createDicePoint();
							this.createDiceResult(0);													
						}
					}

					if( siakoMobi._diceType == 'Leopard' ){
						if( Number(siakoMobi._dice1) == Number(siakoMobi._dice2) && Number(siakoMobi._dice2) == Number(siakoMobi._dice3) && Number(siakoMobi._dice3) == Number(siakoMobi._dice1) ){
							$gameParty.gainGold(SM._howMuchMoney*33);
							this.createDicePoint();	
							this.createDiceResult(1);																		
						}else{
							this.createDicePoint();	
							this.createDiceResult(0);																			
						}
					}					
				}
				this._effectPlaying2 = false;
			}

			if( this._wait > 300 && this._effectPlaying2 == false ){
				if( $gameParty.gold() == 0 ){				
					$gameMessage.add( SM._diceMsgMoneyEmpty );
					$gameSystem.replayBgm();
					SceneManager.pop();
					SceneManager.pop();
				}else{			
					SceneManager.pop();
				}

	    	}

		}

		resWindowScore(){
			this._windowScore.refresh();
		}

		resWindowPlayerGold(){
			this._windowPlayerGold.refresh();
		}

		terminate(){
			Scene_Base.prototype.terminate.call(this);
		}

		stop(){
			Scene_Base.prototype.stop.call(this);
		}

	}

    //==================================================================================
    // comment  : Sprite_DiceEffect
    //================================================================================== 
	class Sprite_DiceEffect extends Sprite{

		constructor(x,y){
			super();

			this.x = x;
			this.y = y;			
		}

		initialize(){
			Sprite.prototype.initialize.call(this);
		    this._animationSprites = [];
		    this._endSprites = [];
		    this._effectTarget = this;
		    this._hiding = false;
		    this._keepDisplay = false;		    
		}

		keepDisplay(value){
	    	this._keepDisplay = value;		
		}

		update(){
		    Sprite.prototype.update.call(this);		    
		    this.updateVisibility();
		    this.updateAnimationSprites();		    
		}

		hide(){
		    this._hiding = true;
		    this.updateVisibility();		
		}

		show(){
		    this._hiding = false;
		    this.updateVisibility();		
		}

		updateVisibility(){
	    	this.visible = !this._hiding;		
		}

		updateAnimationSprites(){
		    if (this._animationSprites.length > 0) {
		        var sprites = this._animationSprites.clone();
		        this._animationSprites = [];
		        for (var i = 0; i < sprites.length; i++) {
		            var sprite = sprites[i];
		            if (sprite.isPlaying()) {
		                this._animationSprites.push(sprite);
		            } else {
		                if (!this._keepDisplay) {
		                    sprite.remove();
		                }
		                else {
		                    this._endSprites.push(sprite);

		                }
		            }
		        }
		    }		
		}	

		startAnimation(animation, mirror, delay){
		    var sprite = new Sprite_Animation();
		    sprite.setup(this._effectTarget, animation, mirror, delay);
		    this.parent.addChild(sprite);
		    this._animationSprites.push(sprite);
		}		

		isAnimationPlaying(){
	    	return this._animationSprites.length > 0;		
		}	

		allRemove(){
		    var sprites, sprite, i;
		    if (this._animationSprites.length > 0) {
		        sprites = this._animationSprites.clone();
		        this._animationSprites = [];
		        for (i = 0; i < sprites.length; i++) {
		            sprite = sprites[i];
		            sprite.remove();
		        }
		    }
		    if (this._endSprites.length > 0) {
		        sprites = this._endSprites.clone();
		        this._endSprites = [];
		        for (i = 0; i < sprites.length; i++) {
		            sprite = sprites[i];
		            sprite.remove();
		        }
		    }		
		}	
					
	}

})( siakoMobi.miniGame_DiceTreasure );	