import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeStandards = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/BestPractices/CodeStandards';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Code Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeStandards;
