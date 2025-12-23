import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Vercel = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/Deployment/Vercel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vercel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Vercel;
