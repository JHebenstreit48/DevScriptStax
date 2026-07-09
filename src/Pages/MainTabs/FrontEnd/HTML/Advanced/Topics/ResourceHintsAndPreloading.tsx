import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResourceHintsAndPreloading = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/ResourceHintsAndPreloading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resource Hints & Preloading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceHintsAndPreloading;
