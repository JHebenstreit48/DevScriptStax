import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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