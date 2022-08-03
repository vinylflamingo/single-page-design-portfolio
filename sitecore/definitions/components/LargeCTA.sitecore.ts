import { SitecoreIcon, Manifest, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function LargeCTA(manifest: Manifest): void {
  manifest.addComponent({
    name: 'LargeCTA',
    templateName: 'LargeCTA',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'subheading', type: CommonFieldTypes.RichText },
      { name: 'ctaText', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
