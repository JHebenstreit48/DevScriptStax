import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
