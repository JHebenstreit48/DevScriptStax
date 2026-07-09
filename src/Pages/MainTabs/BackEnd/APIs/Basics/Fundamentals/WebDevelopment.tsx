import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebDevelopment = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/APIFundamentals/WebDevelopment';

  return (
    <>
      <PageLayout>
        <PageTitle title="Web Development" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebDevelopment;
