import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Concepts = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/ServerlessFramework/Basics/Fundamentals/Concepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
