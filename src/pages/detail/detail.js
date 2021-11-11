import '../../style/detail.css';
import { renderDataRecord } from '../../render';
import { initialEventHandler, getInputData, fetchIdToResultElement, createDetailElement } from '../../event';

window.addEventListener('load', () => {
    // renderDataRecord();
    // initialEventHandler();

    const urlDetailParameters = new URLSearchParams(window.location.search);
    console.log(urlDetailParameters);
    const params = Object.fromEntries(urlDetailParameters);
    console.log(params.id);
    fetchIdToResultElement(params.id);
});
