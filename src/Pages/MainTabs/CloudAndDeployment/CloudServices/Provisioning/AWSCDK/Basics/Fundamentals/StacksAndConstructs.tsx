import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StacksAndConstructs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Fundamentals/StacksAndConstructs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Stacks & Constructs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StacksAndConstructs;
