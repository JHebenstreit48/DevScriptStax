import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PopularTools = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Ecosystem/PopularTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Popular Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopularTools;
