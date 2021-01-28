import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';

import HeadlessPath from '@salesforce/resourceUrl/coveoheadless';

export default class Headlessbase extends LightningElement {
    engine;
    CoveoHeadless;

    getEngine() {
        if (this.engine) return Promise.resolve(this.engine);
        return this.createEngine();
    }

    createEngine() {
        return this.doInit();
    }

    async doInit() {
        try {
            await loadScript(this, HeadlessPath + '/browser/headless.js');

            // eslint-disable-next-line no-undef
            this.CoveoHeadless = CoveoHeadless;

            this.engine = new this.CoveoHeadless.HeadlessEngine({
                configuration: this.CoveoHeadless.HeadlessEngine.getSampleConfiguration(),
                reducers: this.CoveoHeadless.recommendationAppReducers
            });
        } catch (error) {
            window.console.log('er', error);
        }

        return this.engine;
    }
}