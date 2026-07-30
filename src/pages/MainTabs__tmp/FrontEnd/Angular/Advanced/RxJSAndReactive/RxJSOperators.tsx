import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RxJSOperators = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactive/RxJSOperators';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Advanced - RxJS Operators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RxJSOperators;