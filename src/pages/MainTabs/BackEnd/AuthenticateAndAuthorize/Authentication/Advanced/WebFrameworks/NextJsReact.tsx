import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NextJsReact = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/NextJsReact';

  return (
    <>
      <PageLayout>
        <PageTitle title="Next.js / React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NextJsReact;
