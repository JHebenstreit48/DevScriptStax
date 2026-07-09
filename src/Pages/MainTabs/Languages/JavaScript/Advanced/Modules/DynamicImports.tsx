import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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