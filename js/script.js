/*
    ベーカリーのWebサイト(script.js)
    作成者：栗田幸一(Koichi Kurita)
    作成日：2023.2.9
*/

/*
    最新のブレイクポイントについては下記参照
    https://caroa.jp/design/article/IuBFNKUn

    ※ iPhone XRが画面幅は414pxでGoogle Chromeではレスポンシブデザインに切り替わらないので、
    スマホの画面サイズは最大415pxとする
*/

// HTML読み込み完了後, jQuery動作開始!
$(function() {

    // headerの高さ以上スクロールしたかチェックする
    function checkScroll() {
        var headerH = parseInt($('#top').css('height'));
        var scroll = $(window).scrollTop();
        if (scroll >= headerH) {
            return true;
        } else {
            return false;
        }
    }

    // headerの高さ以上スクロールしたら、ナビゲーションバーをページ上部に固定する
    function fixedNavigationBar() {
        if (checkScroll()) {
            $('nav').addClass('navfixed');
        } else {
            $('nav').removeClass('navfixed');
        }
    }

    // headerの高さ以上スクロールしたら、ページのトップに戻るボタンを表示する
    function displayTopBtn() {
        if(checkScroll()) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    }

    // 画面をスクロールしたら、ナビゲーションバーを固定し、ページのトップに戻るボタンを表示する
    $(window).scroll(function() {
        fixedNavigationBar();
        displayTopBtn()
    })

    // スマホ画面向けヘッダーバーのメニューアイコンを押すと、ナビゲーションメニューの表示/非表示を切り替える
    $('.menu-icon').click(function() {
        var $nav = $('nav');
        if ($nav.hasClass('nav-open')) {
            $nav.toggleClass('nav-open');
            $nav.slideToggle();
            $(this).text("≡");
        } else {
            $nav.toggleClass('nav-open');
            $nav.slideToggle();
            $(this).text("✕");
        }
    })
});

// DOM操作
// webサイト読み込み後、実行開始!
document.addEventListener('DOMContentLoaded', function() {
    // メディアクエリの画面幅が415px以下であるか
    const mediaQuery = window.matchMedia('(max-width: 415px)');

    // 画面幅が414px以下の場合、google mapの地図の縮尺を縮小する
    function handleWindowWidthChange(e) {
        // 画面幅が415px以下か判定
            if (e.matches) {
                // Google Mapのiflame要素<iflame src=/...>を取得
                var google_map = document.getElementById('Google-map');

                // Google Mapの倍率変更 !4f25 → !4f35
                google_map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.3892136319816!2d139.9714918292138!3d35.85986829875957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f25!3m3!1m2!1s0x60189cddf854bbf5%3A0x5fec480120978fad!2z5p-P44K744Oz44K_44O844OT44Or!5e0!3m2!1sja!2sjp!4v1674711637261!5m2!1sja!2sjp')
            }
    }

    // イベントリスナーを登録
    mediaQuery.addEventListener('change', handleWindowWidthChange);

    // 初期化処理
    handleWindowWidthChange(mediaQuery);

}, false);