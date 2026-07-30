import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FeaturePolyfills = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks/FeaturePolyfills';

  return (
    <>
      <PageLayout>
        <PageTitle title="Feature Polyfills" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturePolyfills;
