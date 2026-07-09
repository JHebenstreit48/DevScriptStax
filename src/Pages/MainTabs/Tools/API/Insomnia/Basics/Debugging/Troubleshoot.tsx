import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
