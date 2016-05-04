var downapp_ua = window.navigator.userAgent.toLowerCase();
var downapp_androidUA = downapp_ua.match(/.*?(android).*/i); //android
var downapp_iosUA = downapp_ua.indexOf('iphone') >= 0 || downapp_ua.indexOf('ipod') >= 0 || downapp_ua.indexOf('ipad') >= 0; //ios
var downapp_wxUA = downapp_ua.match(/.*?(micromessenger\/([0-9.]+))\s*/); //wechat
var downapp_qqUA = downapp_ua.match(/.*?(qq\/([0-9.]+))\s*/); //qq 
var downapp_weibo = downapp_ua.indexOf('weibo') >= 0; //weibo
var downapp_link = '';


function getUrl() {
    var aQuery = window.location.href.split("?");
    var aGET = new Array();
    if (aQuery.length > 1) {
        var aBuf = aQuery[1].split("&");
        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
            var aTmp = aBuf[i].split("=");
            aGET[aTmp[0]] = aTmp[1];
        }
    }
    return aGET;
};

function wechatOpenTip() {
    $('.container').append('<div class="mask"><img src="images/mask.png" alt=""></div>');
};

function addClick(origin) {
    if (downapp_iosUA) {
        if (downapp_weibo) {
            // if (_hmt) _hmt.push(['_trackEvent', '下载页面--下载按钮', 'IOS', '下载页面-ios-微博']);
        } else if (downapp_wxUA) {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'IOS', origin + '-ios-微信（好友和朋友圈）']);
        } else if (downapp_qqUA) {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'IOS', origin + '-ios-qq']);
        } else {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'IOS', origin + '-ios-其他']);
        }
    } else if (downapp_androidUA) {
        if (downapp_weibo) {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'Android', origin + '-Android-微博']);
        } else if (downapp_wxUA) {
            // if (_hmt) _hmt.push(['_trackEvent', ''+origin+'--下载按钮', 'Android', ''+origin+'-Android-微信']);

        } else if (downapp_qqUA) {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'Android', origin + '-Android-qq']);
        } else {
            if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', 'Android', origin + '-Android-其他']);
        }
    } else {
        if (_hmt) _hmt.push(['_trackEvent', origin + '--下载按钮', '非ios，非安卓', origin + '-非ios，非安卓-其他']);
    }
}

function downLink(origin) {
    if (!downapp_weibo && !downapp_wxUA && !downapp_qqUA && downapp_androidUA) {
        if (_hmt) _hmt.push(['_trackEvent', origin + '', 'Android', origin + '-Android-浏览器']);
        setTimeout(function() {
            window.location.href = 'http://zyimg1.ixiaochuan.cn/zuiyou_v2.4.8.3_weiboShare.apk';
        }, 1000);

    }
    if (!downapp_weibo && !downapp_wxUA && !downapp_qqUA && downapp_iosUA) {
        if (_hmt) _hmt.push(['_trackEvent', origin + '', 'IOS', origin + '-IOS-浏览器']);
        setTimeout(function() {
            window.location.href = 'itms-apps://itunes.apple.com/cn/app/id942443472?mt=8';
        }, 1000);

    }
    if (downapp_iosUA) {
        if (downapp_weibo) {
            wechatOpenTip();
        } else if (downapp_wxUA) {
            downapp_link = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.xiaochuankeji.tieba';
        } else {
            downapp_link = 'itms-apps://itunes.apple.com/cn/app/id942443472?mt=8';
        }
    } else if (downapp_androidUA) {
        if (downapp_weibo) {
            downapp_link = 'http://zyimg1.ixiaochuan.cn/zuiyou_v2.4.8.3_weiboShare.apk';
        } else if (downapp_wxUA) {
            wechatOpenTip();

        } else {
            downapp_link = 'http://tbfile.ixiaochuan.cn/download/package/zuiyou_share.apk';
        }
    } else {
        downapp_link = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.xiaochuankeji.tieba';
    }
    $('.down a').attr('href', downapp_link);
}


