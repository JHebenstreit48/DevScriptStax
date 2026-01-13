import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Concurrency = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Performance/Concurrency';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Concurrency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concurrency;
