import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DynamicImports = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/DynamicImports';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Modules - Dynamic Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DynamicImports;