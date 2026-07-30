import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ChoosingARunner = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Runners/ChoosingARunner';

  return (
    <>
      <PageLayout>
        <PageTitle title="Choosing a Runner" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChoosingARunner;
