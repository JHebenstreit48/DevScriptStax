import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClientOnlyRoutes = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Rendering/ClientOnlyRoutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client-Only Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientOnlyRoutes;
