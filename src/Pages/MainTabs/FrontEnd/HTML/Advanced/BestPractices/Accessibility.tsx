import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Accessibility = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/BestPractices/Accessibility';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced HTML - Accessibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Accessibility;