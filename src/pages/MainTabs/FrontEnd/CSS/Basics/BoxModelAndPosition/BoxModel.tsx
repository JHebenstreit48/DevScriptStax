import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BoxModel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/BoxModelAndPosition/BoxModel';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Box Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BoxModel;