import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClientSideRendering = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/ClientSideRendering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Client-Side Rendering (CSR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientSideRendering;
