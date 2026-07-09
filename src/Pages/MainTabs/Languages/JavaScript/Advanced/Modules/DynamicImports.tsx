import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DynamicImports = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/DynamicImports';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Modules - Dynamic Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DynamicImports;