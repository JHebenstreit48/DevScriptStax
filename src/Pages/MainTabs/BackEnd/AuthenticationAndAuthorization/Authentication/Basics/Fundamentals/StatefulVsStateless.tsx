import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatefulVsStateless = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/StatefulVsStateless';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Stateful vs Stateless" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatefulVsStateless;
