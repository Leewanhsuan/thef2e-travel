export const base_activity_url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/`;
/**
 * 頁面載入處理事件
 */
export const getAuthorizationHeader = () => {
    //  填入自己 ID、KEY 開始
    let AppID = '2db62364b8cc45119ba7a9c97c74cfe0';
    let AppKey = 'i7UmCAqBwc6Bj9n1Jy6AHgMv6SI';
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization =
        'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { Authorization: Authorization, 'X-Date': GMTString };
};
