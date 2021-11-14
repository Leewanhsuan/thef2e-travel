import '../../style/scene.css';
import { renderDataRecord } from '../../render';
import { initialEventHandler, getInputData, fetchDataToResultElement, createCardHTMLElement } from '../../event';

window.addEventListener('load', () => {
    renderDataRecord();
    initialEventHandler();

    const urlSearchParameters = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParameters);
    fetchDataToResultElement(params.keyword, params.area, params.classFilter);

    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const [keyword, area, classFilter] = getInputData();
        window.location.href = `./scene.html?keyword=${keyword}&area=${area}&classFilter=${classFilter}`;
    });
});
