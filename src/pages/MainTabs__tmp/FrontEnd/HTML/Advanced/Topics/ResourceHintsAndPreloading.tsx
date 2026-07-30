import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
