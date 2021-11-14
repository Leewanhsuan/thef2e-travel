import '../../style/activity.css';
import { cityList } from '../../data';
import { renderActivityRecord } from '../../render';
import { base_activity_url, getAuthorizationHeader } from '../../utils/commonApi';

window.addEventListener('load', () => {
    renderActivityRecord();

    const submitBtn = document.getElementById('activity-search-btn');
    submitBtn.addEventListener('click', function(e) {
        const activityElement = document.getElementById('activitySelect');
        const activitySelectCityIndex = activityElement.selectedIndex;
        const activityCityKeys = Object.keys(cityList);
        const area = activityCityKeys[activitySelectCityIndex];
        console.log(area);
        fetchActivityToResultElement(area);
    });

    const fetchActivityToResultElement = area => {
        const resultActivityElement = document.getElementById('result-activity');
        fetch(`${base_activity_url}${area}?&$top=30&$format=JSON`, { headers: getAuthorizationHeader() })
            .then(request => {
                return request.json().then(data => ({ status: request.status, body: data }));
            })
            .then(result => {
                if (result.status === 200 && resultActivityElement) {
                    console.log(result.body);
                    resultActivityElement.innerHTML = '';
                    result.body.forEach((element, index) => {
                        const pictureUrl = element.Picture?.PictureUrl1 ?? `./img/notfound002.jpeg`;
                        const pictureDescription = element.Picture?.PictureDescription1 ?? `目前該景點沒有照片`;
                        const itemData = {
                            pictureUrl: pictureUrl,
                            pictureDescription: pictureDescription,
                            name: element.Name,
                            location: element.Location,
                            id: element.ID,
                            startTime: element.StartTime.slice(0, 10),
                            endTime: element.EndTime.slice(0, 10),
                            website: element.WebsiteUrl,
                        };
                        resultActivityElement.innerHTML += createActivityCardHTMLElement(itemData);
                    });
                }
            });
    };

    const createActivityCardHTMLElement = itemData => {
        return `
        <div class="result-card">
                <img class="card-img" src="${itemData.pictureUrl}" alt="${itemData.pictureDescription}" />
                <div class="card-content">
                    <h6 class="card-text">${itemData.name}</h6>
                    <i class="fas fa-map-marker-alt"></i>
                <span class="card-location">${itemData.location}</span>
                <i class="far fa-calendar-alt"></i>
                <span class="card-time">${itemData.startTime}<span>～</span>${itemData.endTime}</span>
                <i class="fas fa-link"></i>
                <span class="card-website"><a href="${itemData.website}">官方網站</a></span>
                <span class="card-like"><i class="fas fa-heart"></i></span>
                </div>
            </div>
    `;
    };
});
