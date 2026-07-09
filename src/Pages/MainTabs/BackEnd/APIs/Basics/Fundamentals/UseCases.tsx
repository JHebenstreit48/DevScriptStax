import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseCases = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/APIFundamentals/UseCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseCases;
