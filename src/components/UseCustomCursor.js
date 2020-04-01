import React from 'react';
import Cursor from 'components/Cursor';


const UseCustomCursor = () => {
    const userAgent = window.navigator.userAgent;
    const is_ios = /iphone|ipad|ipod/i.test(userAgent);
    const is_android = /android/i.test(userAgent);
    const isStandAloneIOS = 'standalone' in window.navigator && window.navigator.standalone
    const isStandAloneAndroid = window.matchMedia('(display-mode: standalone)').matches

    return (
        !(is_ios || is_android || isStandAloneIOS || isStandAloneAndroid) && <Cursor />
    )
}

export default UseCustomCursor;