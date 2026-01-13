import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColdStarts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Performance/ColdStarts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cold Starts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColdStarts;
