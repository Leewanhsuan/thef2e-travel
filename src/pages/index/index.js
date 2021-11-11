import '../../style/main.css';
import { cityList, classList } from '../../data';
import { getAuthorizationHeader } from '../../utils/commonApi';
import { renderDataRecord } from '../../render';
import { initialEventHandler, getInputData } from '../../event';

const pageNum = 10;
window.addEventListener('load', () => {
    renderDataRecord();
    const [keyword, area, classFilter] = getInputData();
    initialEventHandler(getInputData());

    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const [keyword, area, classFilter] = getInputData();
        window.location.href = `http://0.0.0.0:8080/scene.html?keyword=${keyword}&area=${area}&classFilter=${classFilter}`;
    });
});
