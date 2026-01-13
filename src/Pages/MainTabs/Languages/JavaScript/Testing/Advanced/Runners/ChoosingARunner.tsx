import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChoosingARunner = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Runners/ChoosingARunner';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Choosing a Runner" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChoosingARunner;
