import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Concepts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Fundamentals/Concepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
