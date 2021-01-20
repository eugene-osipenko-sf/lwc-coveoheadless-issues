import HeadlessBase from 'c/headlessbase';

export default class Recommendations extends HeadlessBase {
    connectedCallback() {
        this.getEngine()
            .then((engine) => {
                this.engine = engine;
                this.searchBox = this.CoveoHeadless.buildSearchBox(this.engine, {
                    numberOfSuggestions: 3
                });
                this.unsubscribe = this.searchBox.subscribe(() => this.onSearchBoxUpdate());

                // the next block always fails
                this.recommendationList = this.CoveoHeadless.buildRecommendationList(this.engine, {
                    id: 'Recommendation'
                });
                this.recommendationList.subscribe(() => this.onRecommendationListUpdate());
                this.recommendationList.refresh();
            })
            .catch((e) => {
                window.console.log('e', e);
            });
    }

    onSearchBoxUpdate() {
        window.console.log('this.state.hasSuggestions', this.searchBox.state.suggestions.length > 0);
    }

    onRecommendationListUpdate() {
        window.console.log('this.recommendationList.state', this.recommendationList);
    }

    executeSearch() {
        this.searchBox.updateText('Some Value');
        this.searchBox.submit();
    }

    retrieveRecommendations() {
        if (!this.recommendationList) {
            this.recommendationList = this.CoveoHeadless.buildRecommendationList(this.engine, {
                id: 'recommendedtraining_searchview'
            });
            this.recommendationList.subscribe(() => this.onRecommendationListUpdate());
        }

        this.recommendationList.refresh();
    }
}
