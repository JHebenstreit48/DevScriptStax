import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BodiesAndFiles = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Requests/BodiesAndFiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Bodies & Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BodiesAndFiles;
