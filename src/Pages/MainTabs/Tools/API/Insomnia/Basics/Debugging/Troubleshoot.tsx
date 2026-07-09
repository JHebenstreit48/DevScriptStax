import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Troubleshoot = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Debugging/Troubleshoot';

  return (
    <>
      <PageLayout>
        <PageTitle title="Troubleshoot" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Troubleshoot;
