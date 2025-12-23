import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClientOnlyRoutes = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Rendering/ClientOnlyRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Client-Only Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientOnlyRoutes;
