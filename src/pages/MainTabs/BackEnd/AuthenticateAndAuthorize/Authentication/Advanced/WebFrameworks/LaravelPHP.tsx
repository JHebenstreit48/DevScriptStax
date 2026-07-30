import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LaravelPHP = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/LaravelPHP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Laravel / PHP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LaravelPHP;
