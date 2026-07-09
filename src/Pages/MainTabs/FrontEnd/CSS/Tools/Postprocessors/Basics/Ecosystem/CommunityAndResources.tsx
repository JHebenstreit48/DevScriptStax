import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommunityAndResources = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Ecosystem/CommunityAndResources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Community & Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommunityAndResources;
