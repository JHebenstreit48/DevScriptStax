import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Mixins = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/Mixins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mixins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mixins;
