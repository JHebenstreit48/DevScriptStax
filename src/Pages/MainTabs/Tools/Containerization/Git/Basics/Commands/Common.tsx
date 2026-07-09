import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Common = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Commands/Common';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Commands - Common" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Common;