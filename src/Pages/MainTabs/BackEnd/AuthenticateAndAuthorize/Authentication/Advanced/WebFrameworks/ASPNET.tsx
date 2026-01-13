import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ASPNET = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/ASPNET';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ASP.NET" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ASPNET;
