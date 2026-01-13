import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DynamicRoutes = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/Routing/DynamicRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dynamic Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DynamicRoutes;
