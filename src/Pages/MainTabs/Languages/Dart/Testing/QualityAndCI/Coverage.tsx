import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Coverage = () => {
  const markdownFilePath = 'Languages/Dart/Testing/QualityAndCI/Coverage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Coverage;
