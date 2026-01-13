import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StacksAndConstructs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Fundamentals/StacksAndConstructs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Stacks & Constructs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StacksAndConstructs;
