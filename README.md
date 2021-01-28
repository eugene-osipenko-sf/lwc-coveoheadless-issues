# Salesforce DX Project: Next Steps

- Create a new or use an existing Salesforce org
- Create a sfdx project in VS Code
- Connect the project with the Salesforce org
- run "sfdx force:source:deploy -m LightningComponentBundle:headlessbase,LightningComponentBundle:recommendations,StaticResource:coveoheadless"
- Open the org and create a page using Lightning App Builder
- Open a page and verify that sample config is loaded and after clicking the "Retrieve Recommendations" button a request is sent to an endpoint from the sample
- Click the "Update Config" button. The logic tries to update org id and platform url
- Click "Retrieve Recommendations". The request is still sent to the default url and with old org id