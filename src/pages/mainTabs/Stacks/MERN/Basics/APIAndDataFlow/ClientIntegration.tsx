import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClientIntegration = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/APIAndDataFlow/ClientIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientIntegration;
