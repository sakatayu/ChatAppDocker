exports.index = function (req, res) {

    res.render('index',
        {
            title: 'ここから始めるチャットアプリケーション！'
        });
};
