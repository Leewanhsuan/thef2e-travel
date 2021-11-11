import '../../style/main.css';
import { cityList, classList } from '../../data';
import { getAuthorizationHeader } from '../../utils/commonApi';
import { renderDataRecord } from '../../render';
import { initialEventHandler } from '../../event';

const pageNum = 10;
window.addEventListener('load', () => {
    renderDataRecord();
    initialEventHandler();
});
