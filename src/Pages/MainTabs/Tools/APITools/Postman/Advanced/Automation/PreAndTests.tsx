import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PreAndTests = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Automation/PreAndTests';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pre & Tests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreAndTests;
