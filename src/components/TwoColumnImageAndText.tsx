import {
  ImageField,
  Field,
  withDatasourceCheck,
  Image,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';

type TwoColumnImageAndTextProps = ComponentProps & {
  fields: {
    image: ImageField;
    heading: Field<string>;
    subheading: Field<string>;
    ctaText: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const TwoColumnImageAndText = (props: TwoColumnImageAndTextProps): JSX.Element => (
  <section id="Who am I?">
    <div className="flex flex-col lg:flex-row max-w-6xl py-6">
      <div className="lg:w-2/4 flex items-center justify-center p-10">
        <Image media={props.fields.image} />
      </div>
      <div className="pt-8 lg:w-2/4 flex flex-col items-center justify-between p-15 lg:py-28">
        <Text
          tag="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-jakartaBold px-8 md:px-0 text-center lg:text-left"
          field={props.fields.heading}
        />
        <Text
          tag="p"
          className="pt-10 lg:pt-0 text-base text-center sm:text-left sm:text-lg max-w-xl md:max-w-3xl pr-4 px-0.5 flex leading-8 text-design-grey"
          field={props.fields.subheading}
        />
        <div className="w-full lg:pl-1 flex justify-center items-center pt-10">
          <Link href="mailto:frank@frankcostoya.com" passHref>
            <div className="flex cursor-pointer items-center justify-center h-14 w-56 rounded-full bg-design-red hover:bg-design-orange text-white">
              <Text field={props.fields.ctaText} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<TwoColumnImageAndTextProps>(TwoColumnImageAndText);
