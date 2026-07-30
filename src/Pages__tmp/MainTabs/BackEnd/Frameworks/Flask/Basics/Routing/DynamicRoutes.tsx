import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
