import Hls from 'hls.js';

class Cams {
    constructor(el, opts) {
        this.DATA_KEY = 'Cams';

        // опции
        this.$el = $(el);
        this.$el.data(this.DATA_KEY, this);
        this.opts = $.extend({}, this.$el.data(), opts);

        this.$cams = this.$el.find('.js-cam');
        this.camParams = { width: null, height: null, offX: null, offY: null };

        this.init();
    }

    init() {
        this.$cams.each((i, item) => {
            const video = $(item).find('.js-cam-video')[0];
            const src = $(item).data('src');
            this.initVideo(video, src);
        });

        this.setListeners();
    }

    setListeners() {
        this.$el.on('click', '.js-cam', e => {
            const $cam = $(e.currentTarget);
            this.openCam($cam);
        });

        $(window).on('click', e => {
            if ($(e.target).closest('.js-cam').length === 0) {
                this.closeCam();
            }
        });
    }

    initVideo(video, url) {
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                // video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
            video.addEventListener('loadedmetadata', function () {
                // video.play();
            });
        }
    }

    openCam($cam) {
        const $camInner = $cam.find('.js-cam-inner');

        this.camParams.width = $cam.width();
        this.camParams.height = $cam.height();
        this.camParams.offX = $cam.position().left;
        this.camParams.offY = $cam.position().top;

        $camInner.css({
            'width': this.camParams.width,
            'height': this.camParams.height,
            'transform': 'translate3d(' + this.camParams.offX + 'px,' + this.camParams.offY + 'px,0)'
        });

        $cam
            .css({
                'width': this.camParams.width,
                'height': this.camParams.height
            })
            .addClass('is-active');

        setTimeout(() => {
            $camInner.css({
                'width': '100%',
                'height': '100%',
                'transform': 'translate3d(0,0,0)'
            });
        }, 100);

        $cam.find('.js-cam-video').attr('controls', 'controls')[0].play();
    }

    closeCam() {
        const $cam = this.$cams.filter('.is-active');
        if ($cam.length) {
            const $camInner = $cam.find('.js-cam-inner');
            $cam.find('.js-cam-video').removeAttr('controls')[0].pause();

            $camInner.css({
                'width': this.camParams.width,
                'height': this.camParams.height,
                'transform': 'translate3d(' + this.camParams.offX + 'px,' + this.camParams.offY + 'px,0)'
            });

            setTimeout(() => {
                $cam.removeClass('is-active');
                $cam.removeAttr('style');
                $camInner.removeAttr('style');
            }, 250);
        }
    }
}

$(() => {
    $('.js-cams').each((i, item) => {
        new Cams(item);
    });
});