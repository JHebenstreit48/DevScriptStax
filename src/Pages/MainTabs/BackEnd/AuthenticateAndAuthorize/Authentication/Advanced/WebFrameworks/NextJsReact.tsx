import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NextJsReact = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/NextJsReact';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Next.js / React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NextJsReact;
