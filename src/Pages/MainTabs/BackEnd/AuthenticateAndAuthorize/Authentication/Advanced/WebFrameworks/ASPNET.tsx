import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ASPNET = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/ASPNET';

  return (
    <>
      <PageLayout>
        <PageTitle title="ASP.NET" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ASPNET;
