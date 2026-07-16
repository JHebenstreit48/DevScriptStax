import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreToolsAndVSCode = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Basics/Deploys/CoreToolsAndVSCode';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Tools & VS Code" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreToolsAndVSCode;
