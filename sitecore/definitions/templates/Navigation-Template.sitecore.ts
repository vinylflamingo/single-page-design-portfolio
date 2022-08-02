import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function NavigationTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'Navigation',
    fields: [{ name: 'title', type: CommonFieldTypes.SingleLineText }],
  });
}
