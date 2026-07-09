import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
