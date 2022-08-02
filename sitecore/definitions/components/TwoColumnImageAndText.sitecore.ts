import { SitecoreIcon, Manifest, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function TwoColumnImageAndText(manifest: Manifest): void {
  manifest.addComponent({
    name: 'TwoColumnImageAndText',
    templateName: 'TwoColumnImageAndText',
    // totally optional, but fun
    icon: SitecoreIcon.PhotoPortrait,
    fields: [
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'subheading', type: CommonFieldTypes.MultiLineText },
      { name: 'ctaText', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
