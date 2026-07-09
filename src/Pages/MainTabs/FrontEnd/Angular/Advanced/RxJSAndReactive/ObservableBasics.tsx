import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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