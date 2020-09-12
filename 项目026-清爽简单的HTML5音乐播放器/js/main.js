/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-09-11 16:05:52
 * @LastEditTime: 2020-09-12 17:32:20
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
        sArea = $('#s-area'), // 进度条区域
        seekBar = $('#seek-bar'), // 当前进度条
        sHover = $('#s-hover'), // 跳转进度条
        insTime = $('#ins-time'), // 时间提示
        seekT, // 进度条前进长度
        seekLoc, // 鼠标在进度条上点击位置
        seekBarPos, // 进度条尺寸偏移量
        ctMinutes, // 鼠标拖动位置的分钟数
        ctSeconds, // 鼠标拖动位置的秒数
        curMinutes, // 当前分钟数
        curSeconds, // 当前秒数
        durMinutes, // 歌曲总分钟数
        durSeconds, //歌曲总秒数
        playProgress, // 进度百分比
        nTime = 0, // 

        albums = ['天也不懂情', 'Collapsing World', '潇湘子', '让泪化作相思雨', '冲动的惩罚'],
        trackNames = ['天也不懂情 - FORMOSA ', 'Collapsing World - Lightscape', '潇湘子 - 川井憲次', '让泪化作相思雨 - 南合文斗', '冲动的惩罚 - 刀郎'],
        albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
        trackUrl = ['./images/1.mp3', './images/2.mp3', './images/3.mp3', './images/4.mp3', './images/5.mp3'],

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
     * @description: 显示拖动进度条及拖动时间
     * @param {event} event - 鼠标移动事件对象event
     * @return {type} 
     */
    function showHover(event) {
        seekBarPos = sArea.offset();
        // 前进长度
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());
        // 设置前进进度条长度
        sHover.width(seekT);

        // cM = seekLoc / 60;
        ctMinutes = Math.floor(seekLoc / 60);
        ctSeconds = Math.floor(seekLoc % 60);
        console.log(ctMinutes, ctSeconds);

        if (ctMinutes < 10) {
            ctMinutes = '0' + ctMinutes;
        }
        if (ctSeconds < 10) {
            ctSeconds = '0' + ctSeconds;
        }

        if (isNaN(ctMinutes) || isNaN(ctSeconds)) {
            insTime.text('--:--');
        } else {
            insTime.text(ctMinutes + ':' + ctSeconds);
        }

        insTime.css({
            'left': seekT,
            'margin-left': '-21px'
        }).fadeIn(10);
    }

    /**
     * @description: 
     * @param {type} 
     * @return {type} 
     */
    function hideHover() {
        sHover.width(0);

        insTime.css({
            'left': '0px'
        }).fadeOut(0);
    }



    /**
     * @description: 单击跳转到指定位置播放
     * @param {type} 
     * @return {type} 
     */
    function playFromClickedPos() {
        // 
        audio.currentTime = seekLoc;
        // 
        seekBar.width(seekT);
        hideHover();
    }



    /**
     * @description: 更新进度条及播放时间
     * @param {type} 
     * @return {type} 
     */
    function updateCurrTime() {

        nTime = new Date();
        nTime = nTime.getTime();

        // if(true) {
        //     // tFlag = true;
        //     trackTime.addClass('active');
        // }

        // 
        curMinutes = Math.floor(audio.currentTime / 60); // 当前分钟数
        curSeconds = Math.floor(audio.currentTime % 60); // 当前秒数

        durMinutes = Math.floor(audio.duration / 60); // 总分钟数
        durSeconds = Math.floor(audio.duration % 60); // 总秒数

        playProgress = (audio.currentTime / audio.duration) * 100; // 进度条百分比

        // 补0
        if (curMinutes < 10) curMinutes = '0' + curMinutes;
        if (curSeconds < 10) curSeconds = '0' + curSeconds;
        if (durMinutes < 10) durMinutes = '0' + durMinutes;
        if (durSeconds < 10) durSeconds = '0' + durSeconds;

        // 当歌曲尚未播放时，audio.currentTime和audio.duration的值为NaN
        if (isNaN(curMinutes) || isNaN(curSeconds)) {
            tProgress.text('00:00');
        } else {
            tProgress.text(curMinutes + ':' + curSeconds);
        }

        if (isNaN(durMinutes) || isNaN(durSeconds)) {
            tTime.text('00:00');
        } else {
            tTime.text(durMinutes + ':' + durSeconds);
        }

        seekBar.width(playProgress + '%');

        if (playProgress == 100) {
            i.attr('class', 'fa fa-play');

            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
        }
    }

    /**
     * @description: 切换歌曲
     * @param {Number} flag - 上一首/下一首标志，正数下一首，负数上一首，0初始化
     * @return {type} 
     */
    function selectTrack(flag) {
        if (flag == 0 || flag == 1) {
            // 下一首
            if (currentIndex < albumArtworks.length - 1) {
                ++currentIndex;
            } else {
                currentIndex = 0;
            }
        } else {
            if (currentIndex > 0) {
                --currentIndex;
            } else {
                currentIndex = albumArtworks.length - 1;
            }
        }

        if ((currentIndex > -1) && (currentIndex < albumArtworks.length)) {
            if (flag == 0) {
                i.attr('class', 'fa fa-play');
            } else {
                albumArt.removeClass('buffering');
                i.attr('class', 'fa fa-pause');
            }

            // 重置进度条及时间
            seekBar.width(0);
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currentIndex]; // 唱片集名称
            currTrackName = trackNames[currentIndex]; // 音轨名称
            currArtwork = albumArtworks[currentIndex]; // 专辑图片

            audio.src = trackUrl[currentIndex];

            if (flag != 0) {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            }

            // 设置专辑名称
            albumName.text(currAlbum);
            // 设置音轨名称
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#' + currArtwork).addClass('active');
            // 设置背景(虚化)图片
            bgArtworkUrl = $('#' + currArtwork).attr('src');
            bgArtwork.css({
                'background': 'url(' + bgArtworkUrl + ')'
            });
        }
    }


    // TODO
    // track-name和album-name过长，滚动显示


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

        // 为暂停按钮绑定暂停事件
        playPauseButton.on('click', playPause);

        // 为audio对象绑定刷新时间事件
        $(audio).on('timeupdate', updateCurrTime);

        // 鼠标移入进度条区域
        sArea.mousemove(function (event) {
            showHover(event);
        })

        // 鼠标移出进度条区域
        sArea.mouseout(hideHover);

        // 鼠标单击进度条区域
        sArea.on('click', playFromClickedPos);

        playPreviousButton.on('click', function () {
            selectTrack(-1);
        });

        playNextButton.on('click', function () {
            selectTrack(1);
        })

        console.log('初始化播放器成功');

    }

    initPlayer();
});