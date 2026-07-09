import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
