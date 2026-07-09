import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
