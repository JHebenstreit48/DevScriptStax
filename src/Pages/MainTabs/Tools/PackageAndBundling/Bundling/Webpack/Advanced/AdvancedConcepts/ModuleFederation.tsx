import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModuleFederation = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/ModuleFederation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Module Federation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModuleFederation;
