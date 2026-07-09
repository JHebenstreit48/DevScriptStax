import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AdvancedTechniques = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Arrays/AdvancedTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Arrays - Advanced Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedTechniques;