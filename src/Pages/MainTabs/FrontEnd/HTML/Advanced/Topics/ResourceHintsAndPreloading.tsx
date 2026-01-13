import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResourceHintsAndPreloading = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/ResourceHintsAndPreloading';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Resource Hints & Preloading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceHintsAndPreloading;
