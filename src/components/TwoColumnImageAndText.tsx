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
    <div className="flex flex-row max-w-6xl py-12">
      <div className="w-2/4 flex items-center justify-center p-10">
        <Image media={props.fields.image} />
      </div>
      <div className="w-2/4 flex flex-col items-center justify-between p-15 py-28">
        <Text
          tag="h2"
          className=" text-3xl md:text-4xl font-jakartaBold pr-20"
          field={props.fields.heading}
        />
        <Text
          tag="p"
          className=" text-lg max-w-xl md:max-w-3xl pr-4 px-0.5 flex leading-8 text-design-grey"
          field={props.fields.subheading}
        />
        <div className="w-full pl-1">
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
