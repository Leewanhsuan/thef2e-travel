import { cityList, classList } from './data';
import { base_url, getAuthorizationHeader } from './utils/commonApi';

/**
 * 初始DOM事件
 */

let dataset = [];

export const getInputData = () => {
    const resultElement = document.getElementById('result');
    const cityElement = document.getElementById('citySelect');
    const classElement = document.getElementById('classSelect');
    const searchInput = document.getElementById('search-input');

    //抓關鍵字
    const keyword = searchInput.value.trim().toLowerCase();

    //抓縣市
    const selectCityIndex = cityElement.selectedIndex;
    const cityKeys = Object.values(cityList);
    const area = cityKeys[selectCityIndex];

    //抓類別
    const selectClassIndex = classElement.selectedIndex;
    const classKeys = Object.keys(classList);
    const classFilter = classKeys[selectClassIndex];

    return [keyword, area, classFilter];
};

export const initialEventHandler = () => {
    const resultElement = document.getElementById('result');
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function(event) {
        const [keyword, area, classFilter] = getInputData();
        const filterConditions = getFilterConditions(keyword, area, classFilter);
        fetch(`${base_url}${filterConditions}&$top=30&$format=JSON`, { headers: getAuthorizationHeader() })
            .then(request => {
                return request.json().then(data => ({ status: request.status, body: data }));
            })
            .then(result => {
                if (result.status === 200) {
                    console.log(result.body);
                    resultElement.innerHTML = '';
                    result.body.forEach((element, index) => {
                        const pictureUrl = element.Picture?.PictureUrl1 ?? `./img/notfound001.jpeg`;
                        const pictureDescription = element.Picture?.PictureDescription1 ?? `目前該景點沒有照片`;
                        const itemData = {
                            pictureUrl: pictureUrl,
                            pictureDescription: pictureDescription,
                            name: element.Name,
                            index: index,
                            city: element.City,
                        };
                        resultElement.innerHTML += createCardHTMLElement(itemData);
                    });
                    // createModalElement();
                }
            });
    });
};

export const getFilterConditions = (keyword, area, classFilter) => {
    const filterHeader = `$filter=`;
    const handleKeywordString = `contains(Name,'${keyword}')`;
    const handleAreaString = area === '城市' ? '' : ` and City eq '${area}'`;
    const handleClassFilterString =
        classFilter === 'default' ? '' : ` and (Class1 eq '${classFilter}' or Class2 eq '${classFilter}')`;
    return `${filterHeader}` + `${handleKeywordString}` + `${handleAreaString}` + `${handleClassFilterString}`;
};

export const createCardHTMLElement = itemData => {
    return ` <div class="result-card">
                <a href="#" key="${itemData.index}" ><img class="card-img" src="${itemData.pictureUrl}" alt="${itemData.pictureDescription}"/>
                </a> 
                <div class="card-content">
                    <h6 class="card-text">${itemData.name}</h6>
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="card-location">${itemData.city}</span>
                    <span class="card-like"><i class="fas fa-heart"></i></span>
                </div>
                
            </div>
    `;

    createModalElement();
};

export const createModalElement = () => {
    const modalElement = document.getElementById('staticBackdrop');
    modalElement.addEventListener('show.bs.modal', function(event) {
        const recordIndex = event.relatedTarget.attributes['key'].value;
        const recordData = dataset[recordIndex];
        const modalTitleElement = document.getElementById('modalTitle');
        const modalBodyElement = document.getElementById('modalBody');

        modalTitleElement.innerHTML = recordData.Name;
        modalBodyElement.innerHTML = recordData.Description ?? recordData.DescriptionDetail;
    });
};
