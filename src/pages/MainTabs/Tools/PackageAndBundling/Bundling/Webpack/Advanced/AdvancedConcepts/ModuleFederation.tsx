import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModuleFederation = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/ModuleFederation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Module Federation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModuleFederation;
