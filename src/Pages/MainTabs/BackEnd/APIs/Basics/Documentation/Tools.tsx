import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tools = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/Documentation/Tools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tools;
