import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JWT = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Auth/JWT';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JWT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWT;
