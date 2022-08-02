import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ServicesGrid(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ServicesGrid',
    templateName: 'ServicesGrid',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
  });
}
