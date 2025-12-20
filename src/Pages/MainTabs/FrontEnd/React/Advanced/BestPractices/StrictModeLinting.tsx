import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StrictModeLinting = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/BestPractices/StrictModeLinting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Strict Mode/Linting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StrictModeLinting;
