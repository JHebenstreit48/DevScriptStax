import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPAndCallable = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Triggers/HTTPAndCallable';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP & Callable" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPAndCallable;
