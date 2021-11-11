import '../../style/scene.css';
import { renderDataRecord } from '../../render';
import { initialEventHandler, getInputData, fetchDataToResultElement } from '../../event';

window.addEventListener('load', () => {
    renderDataRecord();
    initialEventHandler();

    const urlSearchParameters = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParameters);
    fetchDataToResultElement(params.keyword, params.area, params.classFilter);

    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const [keyword, area, classFilter] = getInputData();
        window.location.href = `http://0.0.0.0:8080/scene.html?keyword=${keyword}&area=${area}&classFilter=${classFilter}`;
    });

    const detailClick = document.getElementById('card-img');
    detailClick.addEventListener('click', () => {
        console.log('1');
        // const [keyword, area, classFilter] = getInputData();
        // window.location.href = `http://0.0.0.0:8080/scene.html?keyword=${keyword}&area=${area}&classFilter=${classFilter}`;
    });
});
