//開くとき

var sX_syncerModal = 0 ;
var sY_syncerModal = 0 ;

$(function(){

var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
var modalClassSyncer = "modal-syncer" ;
var modals = document.getElementsByClassName( modalClassSyncer );

for(var i=0,l=modals.length; l>i; i++){

	modals[i].onclick = function(){
		var target = this.getAttribute( "data-target" ) ;
		nowModalSyncer = document.getElementById( target ) ;
		if($("#close_overlay")[0]) return false ;//オーバーレイ用のHTMLコードを、[body]内の最後に生成する


		$("body").append('<div id="close_overlay"></div>');//オーバーレイを出す
		$("#close_overlay").fadeIn("slow");

		//コンテンツをセンタリングする
		centeringModalSyncer();

		$(nowModalSyncer).fadeIn("slow");//コンテンツの表示

		$("#modal-close,#close_overlay").unbind().click(function(){//閉じるボタンかオーバーレイをクリックしたら
			$("#"+target+",#close_overlay").fadeOut("slow",function(){//
				$("#close_overlay").remove();//オーバーレイを消す
			});
			nowModalSyncer = null ;
			});
		}
	}


//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$(window).resize(centeringModalSyncer);

	//センタリングを実行する関数
	function centeringModalSyncer(){

		//画面(ウィンドウ)の幅、高さを取得
		var w = $(window).width();
		var h = $(window).height();

		//コンテンツ(#modal-content)の幅、高さを取得
		var cw = $("#modal-content").outerWidth({margin:true});
		var ch = $("#modal-content").outerHeight({margin:true});

		//センタリングを実行する
		$("#modal-content").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"})

	}

});