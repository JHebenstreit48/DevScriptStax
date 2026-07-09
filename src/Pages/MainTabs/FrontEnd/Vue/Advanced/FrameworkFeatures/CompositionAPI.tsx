import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CompositionAPI = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/CompositionAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Composition API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompositionAPI;
