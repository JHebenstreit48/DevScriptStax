import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Mixins = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/Mixins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mixins;
