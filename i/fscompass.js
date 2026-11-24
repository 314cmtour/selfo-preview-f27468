/// 初期化
function Init()
{
  // [CSS]カテゴリ１:マウスオーバー
  $(".btn_catA").hover(
    function(){      if (! $(this).hasClass("btn_on")) { $(this).addClass("btn_over"); }    }
    ,function(){     $(this).removeClass("btn_over");    }
  );
  // [CSS]カテゴリ２:マウスオーバー
  $(".btn_catB").hover(
    function(){      if (! $(this).hasClass("btn_on")) { $(this).addClass("btn_over"); }    }
    ,function(){     $(this).removeClass("btn_over");    }
  );
  // [CSS]フリー枠:マウスオーバー
  $(".freeframe").each(function(){
    var border_color = $(this).css("border-color");
    $(this).hover(
      function(){   $(this).css("border-color", "Red");  }
      ,function(){  $(this).css("border-color", border_color);  }
    );
  });
  // 初期選択/初期表示
  // カテゴリ１
  var $jCat1 = $(".btn_catA:first");
  $jCat1.addClass("btn_on");
  // カテゴリ２
  var sCat1ID = $jCat1.attr("id");
  var s_parent_Cat1ID = ".parent_" + sCat1ID;
  $(".container_btn_catB").hide();
  $(s_parent_Cat1ID).show();
  var $jCat2 = $(s_parent_Cat1ID + " .btn_catB:first");
  $jCat2.addClass("btn_on");
  // 注文ボタン
  var sCat2ID = $jCat2.attr("id");
  var s_parent_Cat2ID = ".parent_" + sCat2ID;
  $(".container_btn_order").hide();
  $(s_parent_Cat2ID).show();
}
/// OnLoaded
$(function(){
  // カテゴリ１ﾎﾞﾀﾝ.クリック
  $(".btn_catA").click(function(){
    // [カテゴリ１ﾎﾞﾀﾝ]押下状態にする
    $(".btn_catA").removeClass("btn_on");
    $(this).removeClass("btn_over");
    $(this).addClass("btn_on");
    // clickされたカテゴリ１に対応するカテゴリ２/注文ボタンを表示
    //   カテゴリ２
    var sCat1ID = $(this).attr("id");
    var s_parent_Cat1ID = ".parent_" + sCat1ID;
    $(".container_btn_catB").hide();
    $(s_parent_Cat1ID).show();
    var $jCat2 = $(s_parent_Cat1ID + " .btn_catB:first");
    $(".btn_catB").removeClass("btn_on");
    $jCat2.addClass("btn_on");
    //   注文ボタン
    var sCat2ID = $jCat2.attr("id");
    var s_parent_Cat2ID = ".parent_" + sCat2ID;
    $(".container_btn_order").hide();
    $(s_parent_Cat2ID).show();
    // [カテゴリ２ボタンエリア]スクロールリセット
    $('#scroll_container_btn_catB').animate({ scrollLeft: 0 }, 0);
    // [注文ボタンエリア]スクロールリセット
    $('#scroll_container_btn_order').animate({ scrollLeft: 0 }, 0);
  });
  // カテゴリ２ﾎﾞﾀﾝ.クリック
  $(".btn_catB").click(function(){
    // [カテゴリ２ﾎﾞﾀﾝ]押下状態にする
    $(".btn_catB").removeClass("btn_on");
    $(this).removeClass("btn_over");
    $(this).addClass("btn_on");
    // clickされたカテゴリ２に対応する注文ボタンを表示(parent_btn_catB_999)
    var sCat2ID = $(this).attr("id");
    var s_parent_Cat2ID = ".parent_" + sCat2ID;
    $(".container_btn_order").hide();
    $(s_parent_Cat2ID).show();
    // [注文ボタンエリア]スクロールリセット
    $('#scroll_container_btn_order').animate({ scrollLeft: 0 }, 0);
  });
  // パターン切替
  $("select").change(function() {
    window.location.href = $(this).val();
  });
  // ツールチップ[V010.000]
  $(".divtooltip").on({
    'mouseenter':function(){
      var text = $(this).attr('data-text');
      $("body").append('<div class="div-tooltips">'+text+'</div>');
    }
    ,'mouseleave':function(){
      $("body").find(".div-tooltips").remove();
    }
  });
  $(".divtooltip").click(function(){
      $("body").find(".div-tooltips").remove();
  });
  // 初期化
  Init();
});
