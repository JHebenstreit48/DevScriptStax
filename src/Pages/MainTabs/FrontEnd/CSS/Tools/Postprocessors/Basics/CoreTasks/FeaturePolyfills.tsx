import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FeaturePolyfills = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks/FeaturePolyfills';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Feature Polyfills" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturePolyfills;
