/*
 * @Author: CoderLeiShuo
 * @Description: 
 * @version: 1.0.0
 * @Date: 2020-09-11 16:05:52
 * @LastEditTime: 2020-09-11 16:55:25
 * @LastEditos: CoderLeiShuo
 */
$(function () {
    var playerTrack = $('.player-track'),
        albumArt = $('.album-art'),


        
        
        playPauseButton = $('#pause'), // 播放与暂停按钮
        i = playPauseButton.find('i'), // 播放图标
        playPreviousButton = $('#pre'), // 上一首按钮
        playNextButton = $('#next'); // 下一首按钮


    var isPaused = true;

    /**
     * @description: 播放与暂停
     * @param {type} 
     * @return {type} 
     */
    function playPause() {
        setTimeout(function () {
            if (isPaused) {
                console.log('播放');
                playerTrack.addClass('active');
                albumArt.addClass('active');
                i.attr('class', 'fas fa-pause');
                isPaused = false;
            } else {
                console.log('暂停');
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                i.attr('class', 'fas fa-play');
                isPaused = true;
            }
        }, 300);
    }

    


    /**
     * @description: 初始化播放器
     * @param {type} 
     * @return {type} 
     */
    function initPlayer() {
        audio = new Audio();

        audio.loop = false;

        playPauseButton.on('click', playPause);

        // TODO
        playPreviousButton.on('click', function () {
            console.log('上一首');
        });

        // TODO
        playNextButton.on('click', function () {
            console.log('下一首');
        })



        console.log('初始化播放器成功');
    }

    initPlayer();
});