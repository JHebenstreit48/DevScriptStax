import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Troubleshoot = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Debugging/Troubleshoot';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Troubleshoot" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Troubleshoot;
