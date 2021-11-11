import '../../style/scene.css';
import { cityList, classList } from '../../data';
import { getAuthorizationHeader } from '../../utils/commonApi';
import { renderDataRecord } from '../../render';
import { initialEventHandler } from '../../event';

window.addEventListener('load', () => {
    renderDataRecord();
    initialEventHandler();
});
