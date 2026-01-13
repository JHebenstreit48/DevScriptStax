import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpEL = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL/SpEL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SpEL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpEL;
