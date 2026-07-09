import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Examples = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/Documentation/Examples';

  return (
    <>
      <PageLayout>
        <PageTitle title="Examples" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Examples;
