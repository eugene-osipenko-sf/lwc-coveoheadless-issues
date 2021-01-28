import HeadlessBase from 'c/headlessbase';

export default class Recommendations extends HeadlessBase {
    connectedCallback() {
        this.getEngine()
            .then((engine) => {
                this.engine = engine;
                this.recommendationList = this.CoveoHeadless.buildRecommendationList(this.engine);
                this.recommendationList.subscribe(() => this.onRecommendationListUpdate());
            })
            .catch((e) => {
                window.console.log('e', e);
            });
    }

    onRecommendationListUpdate() {
        window.console.log('this.recommendationList.state', this.recommendationList);
    }

    updateConfig() {
        const sampleConfig = this.CoveoHeadless.HeadlessEngine.getSampleConfiguration();

        this.engine.dispatch(
            this.CoveoHeadless.ConfigurationActions.updateBasicConfiguration(
                sampleConfig.accessToken,
                'myneworganizationid',
                'https://anotherurl.com'
            )
        );

        window.console.log('config updated ?');
    }

    retrieveRecommendations() {
        this.recommendationList.refresh();
    }
}