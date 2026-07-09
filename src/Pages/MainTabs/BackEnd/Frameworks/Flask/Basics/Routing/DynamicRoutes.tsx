import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DynamicRoutes = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/Routing/DynamicRoutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dynamic Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DynamicRoutes;
