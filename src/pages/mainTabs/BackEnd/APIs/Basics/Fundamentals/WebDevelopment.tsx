import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
