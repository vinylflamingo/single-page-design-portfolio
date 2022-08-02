import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type IntroTextProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subheading: Field<string>;
  };
};

const IntroText = ({ fields }: IntroTextProps): JSX.Element => {
  /*const { t } = useI18n(); */

  return (
    /*Intro Text Section */
    <section>
      <div className="flex flex-col items-center justify-center py-20 max-w-3xl md:max-w-4xl text-center">
        <Text tag="h1" className="font-jakartaBold text-5xl md:text-6xl" field={fields.heading} />
        <Text
          tag="p"
          className=" text-lg md:text-xl max-w-xl md:max-w-3xl pt-8 px-0.5 flex text-center leading-8 text-design-grey"
          field={fields.subheading}
        />
      </div>
    </section>
  );
};

export default withDatasourceCheck()<IntroTextProps>(IntroText);
