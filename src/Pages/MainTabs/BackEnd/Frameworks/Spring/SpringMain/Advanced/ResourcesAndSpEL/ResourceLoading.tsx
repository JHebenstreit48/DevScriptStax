import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ResourceLoading = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL/ResourceLoading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resource Loading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceLoading;
