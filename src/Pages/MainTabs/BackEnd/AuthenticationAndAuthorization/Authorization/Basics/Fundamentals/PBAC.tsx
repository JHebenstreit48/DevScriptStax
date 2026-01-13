import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PBAC = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/Fundamentals/PBAC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PBAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PBAC;
