import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
