import { cityList, classList } from './data';

export const renderDataRecord = () => {
    const cityElement = document.getElementById('citySelect');
    const classElement = document.getElementById('classSelect');

    Object.values(cityList).forEach(element => {
        cityElement.innerHTML += `<option class="selectList" value="">${element}</option>`;
    });

    Object.values(classList).forEach(element => {
        classElement.innerHTML += `<option class="selectList" value="">${element}</option>`;
    });
};
