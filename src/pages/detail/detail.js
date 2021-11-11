import '../../style/detail.css';
import { renderDataRecord } from '../../render';
import { initialEventHandler, getInputData, fetchDataToResultElement } from '../../event';

window.addEventListener('load', () => {
    renderDataRecord();
    initialEventHandler();

    const urlSearchParameters = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParameters);
    fetchDataToResultElement(params.keyword, params.area, params.classFilter);
});
