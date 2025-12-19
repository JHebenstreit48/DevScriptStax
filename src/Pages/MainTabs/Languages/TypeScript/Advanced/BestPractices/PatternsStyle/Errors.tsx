import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Errors = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/PatternsStyle/Errors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Errors;
