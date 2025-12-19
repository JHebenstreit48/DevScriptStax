import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CompositionAPI = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/CompositionAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Composition API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompositionAPI;
