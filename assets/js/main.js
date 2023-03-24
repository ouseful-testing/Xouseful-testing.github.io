---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let iwsr_station = L.marker([50.7051893, -1.2167519]).addTo(map);
    }
});
