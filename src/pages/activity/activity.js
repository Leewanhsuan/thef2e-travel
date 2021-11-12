import '../../style/activity.css';
import { cityList } from '../../data';
import { renderActivityRecord } from '../../render';

window.addEventListener('load', () => {
    renderActivityRecord();

    const submitElement = document.getElementById('activity-search-btn');
    submitElement.addEventListener('click', function(e) {
        console.log('1');
        const activityElement = document.getElementById('activitySelect');
        const activitySelectCityIndex = activityElement.selectedIndex;
        const activityCityKeys = Object.values(cityList);
        const area = activityCityKeys[activitySelectCityIndex];
        console.log(area);
        return area;
    });
});
