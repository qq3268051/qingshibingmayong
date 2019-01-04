    var linkstr = window.location.href;
    
    function run(p){
        wx.config({
            debug: false,
            appId: p.appId,
            timestamp: p.timestamp,
            nonceStr: p.nonceStr ,
            signature: p.signature ,
            jsApiList: [
                // 所有要调用的 API 都要加到这个列表中
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
            ]
        });
    }
    
    //微信分享设置参数
    window.dataForWeixin = {
        MsgImg : "http://m.weijingtong.com/statics/images/qinyongweb/w1.jpg",
        link : linkstr,
        title : '秦始皇帝陵博物院',
        desc : '秦始皇帝陵博物院欢迎您！',
    };
    
    wx.ready(function () {
        // 分享到朋友
        wx.onMenuShareAppMessage({
            title: dataForWeixin.title,
            link: dataForWeixin.link,
            desc: dataForWeixin.desc,
            imgUrl: dataForWeixin.MsgImg,
            trigger: function (res) {
            },
            success: function (res) { 
            },
            cancel: function (res) {
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });

        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: dataForWeixin.desc,
            link: dataForWeixin.link,
            imgUrl: dataForWeixin.MsgImg,
            trigger: function (res) {
            },
            success: function (res) { 
            },
            cancel: function (res) {
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        //隐藏掉一部分菜单
        wx.hideMenuItems({
            menuList: ['menuItem:readMode', 'menuItem:share:brand'] // 要隐藏的菜单项，所有menu项见附录3
        });
    });