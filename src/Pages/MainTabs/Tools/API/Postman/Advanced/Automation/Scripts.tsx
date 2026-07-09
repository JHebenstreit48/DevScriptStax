import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Scripts = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Automation/Scripts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scripts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scripts;
