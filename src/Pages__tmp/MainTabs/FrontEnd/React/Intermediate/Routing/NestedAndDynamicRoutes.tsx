import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NestedAndDynamicRoutes = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Routing/NestedAndDynamicRoutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nested & Dynamic Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NestedAndDynamicRoutes;
