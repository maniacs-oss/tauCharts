dev.spec({

    _name: 'Scatterplot of period / mass correlation',
    _desc: 'There are no data on exoplanets similar to Earth by mass',

    type: 'scatterplot',
    x: ['mass'],
    y: ['period'],
    color: 'name',
    size: 'eccentricity',

    plugins: [
        tauCharts.api.plugins.get('legend')(),
        tauCharts.api.plugins.get('tooltip')()
    ],

    data: dev.dataset('exoplanets', function (data) {
        return data.filter(function (row) {
            return row['jupiter mass'] <= 1;
        });
    })
});
