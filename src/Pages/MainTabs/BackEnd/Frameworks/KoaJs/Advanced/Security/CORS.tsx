import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CORS = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/CORS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CORS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CORS;
