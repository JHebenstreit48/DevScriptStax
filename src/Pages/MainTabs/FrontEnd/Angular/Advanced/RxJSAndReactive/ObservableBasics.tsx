import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObservableBasics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactive/ObservableBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Advanced - Observable Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObservableBasics;