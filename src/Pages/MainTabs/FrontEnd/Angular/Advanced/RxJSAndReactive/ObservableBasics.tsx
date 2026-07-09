import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ObservableBasics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactive/ObservableBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Advanced - Observable Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObservableBasics;