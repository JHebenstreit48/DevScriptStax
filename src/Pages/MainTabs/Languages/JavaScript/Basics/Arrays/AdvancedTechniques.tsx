import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdvancedTechniques = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Arrays/AdvancedTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Arrays - Advanced Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedTechniques;