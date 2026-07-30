import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClientSideRendering = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/ClientSideRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client-Side Rendering (CSR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientSideRendering;
