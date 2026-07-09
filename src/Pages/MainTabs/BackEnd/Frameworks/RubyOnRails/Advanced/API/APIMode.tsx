import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIMode = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/API/APIMode';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Mode" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIMode;
