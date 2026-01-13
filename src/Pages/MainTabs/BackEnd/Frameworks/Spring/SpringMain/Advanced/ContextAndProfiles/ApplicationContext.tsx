import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ApplicationContext = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ApplicationContext';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ApplicationContext" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApplicationContext;
