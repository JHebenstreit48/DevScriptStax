import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LaravelPHP = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/LaravelPHP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Laravel / PHP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LaravelPHP;
