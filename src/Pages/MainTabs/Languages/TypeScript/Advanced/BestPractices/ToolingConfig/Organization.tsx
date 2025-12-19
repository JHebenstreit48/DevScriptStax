import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Organization = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/ToolingConfig/Organization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Organization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Organization;
