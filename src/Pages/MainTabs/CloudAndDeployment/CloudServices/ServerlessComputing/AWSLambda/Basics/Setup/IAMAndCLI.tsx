import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IAMAndCLI = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Setup/IAMAndCLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IAM & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndCLI;
