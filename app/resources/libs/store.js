class Store {
    constructor() {
        this.states = {
            main: 'main.html',
            cams: 'cams-page.html'
        };

        document.addEventListener('updateData', Store.updateState);
    }

    static setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    static getCookie(name) {
        var matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)'
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static updateState(e) {
        Store.setCookie('state', e.state);
        document.dispatchEvent(new Event('stateChanged'));
    }

    getHtml() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.states[Store.getCookie('state')], false);
        xhr.send();
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            return xhr.responseText;
        }
    }
}
