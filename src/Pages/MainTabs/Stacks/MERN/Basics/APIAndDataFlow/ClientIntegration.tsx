import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
