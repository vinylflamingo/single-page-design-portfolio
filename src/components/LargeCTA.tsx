import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';

type LargeCTAProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subheading: Field<string>;
    ctaText: Field<string>;
  };
};

const LargeCTA = ({ fields }: LargeCTAProps): JSX.Element => {
  /*const { t } = useI18n(); */

  return (
    <section id="Large CTA">
      <div className="flex flex-col md:flex-row max-w-6xl p-16 justify-between items-center bg-design-black text-white rounded-xl m-4">
        <div className="basis-2/3 flex flex-col justify-between h-36">
          <Text tag="h1" className="text-4xl font-jakartaMedium" field={fields.heading} />
          <Text
            tag="p"
            className="t-2 text-lg text-design-background w-11/12 pt-4 "
            field={fields.subheading}
          />
        </div>
        <div className="basis-1/3 lg:pl-1 flex justify-end pt-10 md:pt-0">
          <Link href="mailto:frank@frankcostoya.com" passHref>
            <div className="flex cursor-pointer items-center justify-center h-14 w-56 rounded-full bg-design-red hover:bg-design-orange text-white">
              <Text field={fields.ctaText} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<LargeCTAProps>(LargeCTA);
