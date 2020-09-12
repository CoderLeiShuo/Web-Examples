/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-09-11 16:05:52
 * @LastEditTime: 2020-09-12 11:54:26
 * @LastEditos: CoderLeiShuo
 */
$(function () {
    var playerTrack = $('.player-track'),
        albumArt = $('.album-art'),
        albumName = $('#album-name'), // 唱片集名称
        trackName = $('#track-name'), // 音轨名称
        bgArtwork = $('.bg-artwork'), // 背景层
        bgArtworkUrl, // 专辑图片地址

        tProgress = $('#current-time'), // 当前时间
        tTime = $('#track-length'), // 歌曲总时长

        albumArt = $('.album-art'), // 唱片

        albums = ['Dawn', 'Me & You', 'Electro Boy', 'Home', 'Proxy(Original Mix)'],
        trackNames = ['Skylike - Dawn', 'Alex Skrindo - Me & You', 'Kaaze - Electro Boy', 'Jordan Schor - Home', 'Martin Garrix - Proxy'],
        albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
        trackUrl = ['./images/2.mp3', './images/1.mp3', './images/3.mp3', './images/4.mp3', './images/5.mp3'],

        playPauseButton = $('#pause'), // 播放与暂停按钮
        i = playPauseButton.find('i'), // 播放图标
        playPreviousButton = $('#pre'), // 上一首按钮
        playNextButton = $('#next'), // 下一首按钮
        currentIndex = -1; // 当前播放曲目索引

    /**
     * @description: 播放与暂停
     * @param {type} 
     * @return {type} 
     */
    function playPause() {
        setTimeout(function () {
            if (audio.paused) {
                console.log('开始播放');
                playerTrack.addClass('active');
                albumArt.addClass('active');
                i.attr('class', 'fas fa-pause');
                audio.play();
            } else {
                console.log('暂停');
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                i.attr('class', 'fas fa-play');
                audio.pause();
            }
        }, 300);
    }

    /**
     * @description: 切换歌曲
     * @param {Number} flag - 上一首/下一首标志，正数下一首，负数上一首，0初始化
     * @return {type} 
     */
    function selectTrack(flag) {
        if (flag == 0 || flag == 1) {
            // 下一首
            if (currentIndex < albumArtworks.length) {
                ++currentIndex;
                console.log('下一首');
            } else {
                currentIndex = 0;
                console.log('回到第一首');
            }
        } else {
            if (currentIndex > 0) {
                console.log('上一首');
                --currentIndex;
            } else {
                currentIndex = albumArtworks.length - 1;
                console.log('最后一首');
            }
        }

        if ((currentIndex > -1) && (currentIndex < albumArtworks.length)) {
            if (flag == 0) {
                i.attr('class', 'fa fa-play');
            } else {
                // albumArt.removeClass('buffering');
                i.attr('class', 'fa fa-pause');
            }

            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currentIndex]; // 唱片集名称
            currTrackName = trackNames[currentIndex]; // 音轨名称
            currArtwork = albumArtworks[currentIndex]; // 专辑图片


            console.log(currentIndex);
            audio.src = trackUrl[currentIndex];

            if (flag != 0) {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            }

            albumName.text(currAlbum); // 设置专辑名称
            trackName.text(currTrackName); // 设置音轨名称
            albumArt.find('img.active').removeClass('active');
            $('#' + currArtwork).addClass('active'); // 设置（虚化）背景图片

            bgArtworkUrl = $('#' + currArtwork).attr('src');
            console.log(bgArtworkUrl);
            bgArtwork.css({
                'background': 'url(' + bgArtworkUrl + ')'
            });
        }
        console.log(currentIndex);
    }



    /**
     * @description: 初始化播放器
     * @param {type} 
     * @return {type} 
     */
    function initPlayer() {
        // url = 'https://m10.music.126.net/20200911173048/a8666ec1f26029853938b525e1ac7da9/ymusic/e43b/10a7/444d/cac7e7d8fb761e5be380c020c14f7fd6.mp3';
        // TODO：audio对象为何在其他函数中可以访问？
        audio = new Audio();

        selectTrack(0);

        audio.loop = false;

        playPauseButton.on('click', playPause);

        // TODO
        playPreviousButton.on('click', function () {
            selectTrack(-1);
        });

        // TODO
        playNextButton.on('click', function () {
            selectTrack(1);
        })

        console.log('初始化播放器成功');
    }

    initPlayer();
});